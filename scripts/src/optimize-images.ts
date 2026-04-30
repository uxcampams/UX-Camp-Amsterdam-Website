import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ASSETS_DIR = path.resolve(import.meta.dirname, "..", "..", "attached_assets");
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

async function main(): Promise<void> {
  const manifest = await loadManifest();
  const entries = await fs.readdir(ASSETS_DIR);

  let totalBefore = 0;
  let totalAfter = 0;
  let touched = 0;
  let skipped = 0;

  for (const name of entries) {
    if (name.startsWith(".")) continue;
    const ext = path.extname(name).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

    const src = path.join(ASSETS_DIR, name);
    const stat = await fs.stat(src);
    if (!stat.isFile()) continue;

    totalBefore += stat.size;

    let meta: sharp.Metadata;
    try {
      meta = await sharp(src).metadata();
    } catch (err) {
      console.warn(`  [skip] ${name}: cannot read metadata (${(err as Error).message})`);
      totalAfter += stat.size;
      skipped++;
      continue;
    }

    const hasAlpha = meta.hasAlpha === true;
    const isPng = ext === ".png";
    const targetExt = isPng && !hasAlpha ? ".jpg" : ext === ".jpeg" ? ".jpg" : ext;
    const baseName = path.basename(name, ext);
    const targetName = baseName + targetExt;
    const targetPath = path.join(ASSETS_DIR, targetName);
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
      console.warn(`  [skip] ${name}: encode failed (${(err as Error).message})`);
      try {
        await fs.unlink(tmpPath);
      } catch {}
      totalAfter += stat.size;
      skipped++;
      continue;
    }

    const newStat = await fs.stat(tmpPath);
    const extensionChanged = targetName !== name;
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
      manifest[name] = targetName;
      await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
    } else {
      await fs.rename(tmpPath, targetPath);
    }

    const finalStat = await fs.stat(targetPath);
    totalAfter += finalStat.size;
    touched++;

    const reduction = ((1 - finalStat.size / stat.size) * 100).toFixed(0);
    console.log(
      `  ${name} → ${targetName}: ${fmtKB(stat.size)} → ${fmtKB(finalStat.size)} (${reduction}% smaller)`,
    );

    if (touched >= LIMIT) {
      console.log(`\n[batch limit ${LIMIT} reached — re-run to continue]`);
      break;
    }
  }

  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");

  console.log(`\nProcessed: ${touched}    Skipped: ${skipped}`);
  console.log(`Total:     ${fmtMB(totalBefore)} → ${fmtMB(totalAfter)}`);
  const savedPct = ((1 - totalAfter / totalBefore) * 100).toFixed(0);
  console.log(`Saved:     ${fmtMB(totalBefore - totalAfter)} (${savedPct}%)`);
  console.log(`\nManifest written to ${MANIFEST_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
