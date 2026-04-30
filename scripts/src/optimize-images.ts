import { promises as fs } from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import sharp from "sharp";

const { values } = parseArgs({
  options: {
    dir: { type: "string", short: "d" },
    recursive: { type: "boolean", short: "r", default: false },
    help: { type: "boolean", short: "h", default: false },
  },
});

if (values.help) {
  console.log(
    `Usage: tsx scripts/src/optimize-images.ts --dir <path> [--recursive]\n\n` +
      `  --dir, -d        Directory to optimize (default: attached_assets/)\n` +
      `  --recursive, -r  Recurse into subdirectories\n` +
      `  LIMIT=<n>        Env var: stop after n files (useful for batching)\n`,
  );
  process.exit(0);
}

const ROOT = path.resolve(import.meta.dirname, "..", "..");
const ASSETS_DIR = path.resolve(ROOT, values.dir ?? "attached_assets");
const RECURSIVE = values.recursive === true;
const MANIFEST_PATH = path.join(ASSETS_DIR, ".optimize-manifest.json");

const MAX_WIDTH = 2000;
const JPEG_QUALITY = 82;
const MIN_SAVING_RATIO = 0.95;
const LIMIT = process.env.LIMIT ? Number(process.env.LIMIT) : Infinity;

type Manifest = Record<string, string>;

async function loadManifest(): Promise<Manifest> {
  try {
    const txt = await fs.readFile(MANIFEST_PATH, "utf8");
    return JSON.parse(txt) as Manifest;
  } catch {
    return {};
  }
}

function fmtMB(bytes: number): string {
  return (bytes / 1024 / 1024).toFixed(1) + " MB";
}

function fmtKB(bytes: number): string {
  return (bytes / 1024).toFixed(0) + " KB";
}

async function listImages(dir: string, recursive: boolean): Promise<string[]> {
  const out: string[] = [];
  const stack: string[] = [dir];
  while (stack.length > 0) {
    const current = stack.pop()!;
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (recursive) stack.push(fullPath);
        continue;
      }
      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
      out.push(path.relative(dir, fullPath));
    }
  }
  out.sort();
  return out;
}

async function main(): Promise<void> {
  try {
    const stat = await fs.stat(ASSETS_DIR);
    if (!stat.isDirectory()) {
      console.error(`Target is not a directory: ${ASSETS_DIR}`);
      process.exit(1);
    }
  } catch {
    console.error(`Directory not found: ${ASSETS_DIR}`);
    process.exit(1);
  }

  console.log(`Optimizing images in: ${path.relative(ROOT, ASSETS_DIR) || "."}`);
  console.log(`  recursive: ${RECURSIVE}    max width: ${MAX_WIDTH}px    jpeg q: ${JPEG_QUALITY}\n`);

  const manifest = await loadManifest();
  const entries = await listImages(ASSETS_DIR, RECURSIVE);

  let totalBefore = 0;
  let totalAfter = 0;
  let touched = 0;
  let skipped = 0;

  for (const relName of entries) {
    const ext = path.extname(relName).toLowerCase();
    const src = path.join(ASSETS_DIR, relName);
    const stat = await fs.stat(src);
    if (!stat.isFile()) continue;

    totalBefore += stat.size;

    let meta: sharp.Metadata;
    try {
      meta = await sharp(src).metadata();
    } catch (err) {
      console.warn(`  [skip] ${relName}: cannot read metadata (${(err as Error).message})`);
      totalAfter += stat.size;
      skipped++;
      continue;
    }

    const hasAlpha = meta.hasAlpha === true;
    const isPng = ext === ".png";
    const targetExt = isPng && !hasAlpha ? ".jpg" : ext === ".jpeg" ? ".jpg" : ext;
    const dirPart = path.dirname(relName);
    const baseName = path.basename(relName, ext);
    const targetRel = (dirPart === "." ? "" : dirPart + path.sep) + baseName + targetExt;
    const targetPath = path.join(ASSETS_DIR, targetRel);
    const tmpPath = targetPath + ".opt-tmp";

    let pipeline = sharp(src, { failOn: "none" });
    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    try {
      if (targetExt === ".jpg") {
        await pipeline
          .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
          .toFile(tmpPath);
      } else {
        await pipeline
          .png({ compressionLevel: 9, palette: true, effort: 8 })
          .toFile(tmpPath);
      }
    } catch (err) {
      console.warn(`  [skip] ${relName}: encode failed (${(err as Error).message})`);
      try {
        await fs.unlink(tmpPath);
      } catch {}
      totalAfter += stat.size;
      skipped++;
      continue;
    }

    const newStat = await fs.stat(tmpPath);
    const extensionChanged = targetRel !== relName;
    const meaningfulSaving = newStat.size < stat.size * MIN_SAVING_RATIO;

    if (!extensionChanged && !meaningfulSaving) {
      await fs.unlink(tmpPath);
      totalAfter += stat.size;
      skipped++;
      continue;
    }

    if (extensionChanged) {
      await fs.rename(tmpPath, targetPath);
      await fs.unlink(src);
      manifest[relName] = targetRel;
      await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
    } else {
      await fs.rename(tmpPath, targetPath);
    }

    const finalStat = await fs.stat(targetPath);
    totalAfter += finalStat.size;
    touched++;

    const reduction = ((1 - finalStat.size / stat.size) * 100).toFixed(0);
    console.log(
      `  ${relName} → ${targetRel}: ${fmtKB(stat.size)} → ${fmtKB(finalStat.size)} (${reduction}% smaller)`,
    );

    if (touched >= LIMIT) {
      console.log(`\n[batch limit ${LIMIT} reached — re-run to continue]`);
      break;
    }
  }

  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");

  console.log(`\nProcessed: ${touched}    Skipped: ${skipped}`);
  if (totalBefore > 0) {
    console.log(`Total:     ${fmtMB(totalBefore)} → ${fmtMB(totalAfter)}`);
    const savedPct = ((1 - totalAfter / totalBefore) * 100).toFixed(0);
    console.log(`Saved:     ${fmtMB(totalBefore - totalAfter)} (${savedPct}%)`);
  }
  console.log(`\nManifest written to ${path.relative(ROOT, MANIFEST_PATH)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
