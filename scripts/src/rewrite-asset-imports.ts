import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..", "..");
const MANIFEST_PATH = path.join(ROOT, "attached_assets", ".optimize-manifest.json");
const SEARCH_DIRS = [
  path.join(ROOT, "artifacts", "ux-camp-amsterdam", "src"),
];
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
  const renames = Object.entries(manifest);

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
