/**
 * Converts any raw images dropped into public/ into web-ready WebP.
 *
 * The static export runs with `images: { unoptimized: true }`, so Next serves
 * these files byte-for-byte — nothing resizes them at build time. This script
 * is that missing step.
 *
 *   node scripts/optimize-images.mjs public/sectors/development.jpg development
 *   node scripts/optimize-images.mjs public/sectors            (whole folder)
 *
 * Source files are left untouched; delete them once you're happy with the WebP.
 */
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import path from "node:path";

const MAX_WIDTH = 1600;
const QUALITY = 82;
const RAW = /\.(jpe?g|png|tiff?|avif)$/i;

const kb = (p) => (statSync(p).size / 1024).toFixed(0);

async function convert(src, outName) {
  const dir = path.dirname(src);
  const base = outName ?? path.basename(src).replace(/\.[^.]+$/, "").replace(/\.webp$/i, "");
  const out = path.join(dir, `${base}.webp`);

  const meta = await sharp(src).metadata();
  await sharp(src).resize({ width: MAX_WIDTH, withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(out);

  console.log(
    `${path.basename(src)}  ${meta.width}x${meta.height} ${kb(src)} KB` +
      `  ->  ${path.basename(out)} ${kb(out)} KB`
  );
  return out;
}

const target = process.argv[2];
if (!target || !existsSync(target)) {
  console.error("Usage: node scripts/optimize-images.mjs <file-or-folder> [output-basename]");
  process.exit(1);
}

if ((await stat(target)).isDirectory()) {
  const files = (await readdir(target)).filter((f) => RAW.test(f));
  if (files.length === 0) {
    console.log(`No raw images (${RAW.source}) found in ${target}`);
  }
  for (const f of files) await convert(path.join(target, f));
} else {
  await convert(target, process.argv[3]);
}
