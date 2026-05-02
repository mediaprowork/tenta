#!/usr/bin/env node
/**
 * One-shot image optimization. Reads images from public/, re-encodes with sharp,
 * resizes oversized ones, and writes results back. Galeri PNG photos become JPEG.
 *
 * Run: bun run scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat, unlink, readFile, writeFile } from 'node:fs/promises';
import { join, extname, basename, dirname } from 'node:path';

const ROOT = new URL('../public/', import.meta.url).pathname;

function fmtKB(n) { return (n / 1024).toFixed(0) + ' KB'; }

async function process(file, opts) {
  const before = (await stat(file)).size;
  const buf = await readFile(file);
  let pipeline = sharp(buf);

  if (opts.maxWidth) {
    const meta = await sharp(buf).metadata();
    if (meta.width && meta.width > opts.maxWidth) {
      pipeline = pipeline.resize({ width: opts.maxWidth, withoutEnlargement: true });
    }
  }

  let outPath = file;
  let outBuf;
  if (opts.format === 'jpeg') {
    outBuf = await pipeline.jpeg({ quality: opts.quality ?? 82, mozjpeg: true, progressive: true }).toBuffer();
    if (extname(file).toLowerCase() !== '.jpg' && extname(file).toLowerCase() !== '.jpeg') {
      outPath = join(dirname(file), basename(file, extname(file)) + '.jpg');
    }
  } else if (opts.format === 'png') {
    outBuf = await pipeline.png({ compressionLevel: 9, palette: true, quality: opts.quality ?? 90 }).toBuffer();
  } else {
    return;
  }

  await writeFile(outPath, outBuf);
  if (outPath !== file) await unlink(file);
  const after = outBuf.length;
  const pct = ((1 - after / before) * 100).toFixed(0);
  console.log(`  ${basename(file)} → ${basename(outPath)}  ${fmtKB(before)} → ${fmtKB(after)}  (-${pct}%)`);
}

console.log('Optimizing galeri (photos → JPEG q82) ...');
const galeri = join(ROOT, 'assets/galeri');
for (const name of await readdir(galeri)) {
  const ext = extname(name).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
  const file = join(galeri, name);
  // 8.png is 4032x3024 phone photo — resize to 1600px wide
  const maxWidth = name.startsWith('8.') ? 1600 : 1280;
  await process(file, { format: 'jpeg', quality: 82, maxWidth });
}

console.log('\nOptimizing kraken images (RGBA → palette PNG) ...');
for (const rel of ['assets/kraken-hero.png', 'assets/kraken-cta.png']) {
  await process(join(ROOT, rel), { format: 'png', quality: 85, maxWidth: 1200 });
}

console.log('\nResizing logo-white/logo-full (1694×396 → 800×189) ...');
for (const rel of ['logo-white.png', 'logo-full.png']) {
  await process(join(ROOT, rel), { format: 'png', quality: 90, maxWidth: 800 });
}

console.log('\nOptimizing partner & service icons ...');
for (const rel of [
  'assets/partner-google.png', 'assets/partner-meta.png',
  'assets/icon-google-ads.png', 'assets/icon-meta-ads.png',
]) {
  await process(join(ROOT, rel), { format: 'png', quality: 85 });
}

console.log('\nDone.');
