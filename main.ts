// The world's news of Wednesday 25 November 2026 on one page.
//
// The page is drawn from the sources in page/ by tools/render.mjs and saved as entry.png.
// This program runs in the grader's sandbox (no network, standard library only): it checks
// that file against the bounty's gate and writes the same bytes to /output/entry.png.
//
// Locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1024 * 1024; // the gate: at most 1 MiB
const MAX_SIDE = 1024; // the gate: at most 1024 by 1024 pixels
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

const image = readFileSync(new URL('./entry.png', import.meta.url));

function fail(reason: string): never {
  console.error(`entry.png would not pass the gate: ${reason}`);
  process.exit(1);
}

if (!PNG_SIGNATURE.every((byte, i) => image[i] === byte)) fail('not a PNG file');
if (image.length > MAX_BYTES) fail(`${image.length} bytes is over ${MAX_BYTES}`);

// The IHDR chunk follows the signature: 4 bytes of length, "IHDR", then width and height.
const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) fail(`${width}x${height} is over ${MAX_SIDE}x${MAX_SIDE}`);
if (image.subarray(image.length - 8, image.length - 4).toString('latin1') !== 'IEND') fail('the PNG is cut short');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.png'), image);
console.log(`entry.png: ${width}x${height}, ${image.length} bytes -> ${join(outputDir, 'entry.png')}`);
