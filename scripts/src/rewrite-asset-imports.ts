import { promises as fs } from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";

const { values } = parseArgs({
  options: {
    manifest: { type: "string", short: "m" },
    src: { type: "string", short: "s", multiple: true },
    help: { type: "boolean", short: "h", default: false },
  },
});

if (values.help) {
  console.log(
    `Usage: tsx scripts/src/rewrite-asset-imports.ts [--manifest <path>] [--src <dir>]...\n\n` +
      `  --manifest, -m   Manifest JSON file produced by optimize-images\n` +
      `                   (default: attached_assets/.optimize-manifest.json)\n` +
      `  --src, -s        Source directory to scan for asset references\n` +
      `                   (default: artifacts/ux-camp-amsterdam/src). Repeatable.\n`,
  );
  process.exit(0);
}

const ROOT = path.resolve(import.meta.dirname, "..", "..");
const MANIFEST_PATH = values.manifest
  ? path.resolve(ROOT, values.manifest)
  : path.join(ROOT, "attached_assets", ".optimize-manifest.json");
const SEARCH_DIRS = (values.src && values.src.length > 0
  ? values.src
  : ["artifacts/ux-camp-amsterdam/src"]
).map((d) => path.resolve(ROOT, d));

const EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);

async function walk(dir: string, out: string[]): Promise<void> {
  const ents = await fs.readdir(dir, { withFileTypes: true });
  for (const e of ents) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else if (EXTS.has(path.extname(e.name))) out.push(p);
  }
}

async function main(): Promise<void> {
  const manifest: Record<string, string> = JSON.parse(
    await fs.readFile(MANIFEST_PATH, "utf8"),
  );
  // Sort by length descending so longer keys are replaced first (e.g.
  // `2015/organizer-doron.png` before `organizer-doron.png`).
  const renames = Object.entries(manifest).sort(
    (a, b) => b[0].length - a[0].length,
  );

  console.log(`Manifest: ${path.relative(ROOT, MANIFEST_PATH)}    entries: ${renames.length}`);
  console.log(`Scanning: ${SEARCH_DIRS.map((d) => path.relative(ROOT, d)).join(", ")}\n`);

  const files: string[] = [];
  for (const d of SEARCH_DIRS) await walk(d, files);

  let totalEdits = 0;
  let touchedFiles = 0;

  for (const file of files) {
    const original = await fs.readFile(file, "utf8");
    let updated = original;
    let edits = 0;
    for (const [oldName, newName] of renames) {
      if (oldName === newName) continue;
      if (updated.includes(oldName)) {
        const before = updated;
        updated = updated.split(oldName).join(newName);
        if (updated !== before) edits++;
      }
    }
    if (edits > 0) {
      await fs.writeFile(file, updated);
      console.log(`  ${path.relative(ROOT, file)}: ${edits} import(s) updated`);
      totalEdits += edits;
      touchedFiles++;
    }
  }

  console.log(`\nFiles touched: ${touchedFiles}    Total edits: ${totalEdits}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
