// Draws the page in headless Chromium and saves it as entry.png, the image main.ts hands to the grader.
//
//   PLAYWRIGHT_BROWSERS_PATH=<browsers> node tools/render.mjs [--html page.html]
//
// It exits 1, after saving the image, if any text marked .fit is clipped by its box or the page is
// taller than 1024 pixels, so a headline that no longer fits can never ship unnoticed.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
import { pageHtml } from '../page/layout.mjs';

const SIDE = 1024;
const MAX_BYTES = 1024 * 1024;
const args = process.argv.slice(2);
const htmlOut = args.includes('--html') ? args[args.indexOf('--html') + 1] : null;

const html = pageHtml();
if (htmlOut) writeFileSync(htmlOut, html);

const browser = await chromium.launch({ args: ['--disable-lcd-text', '--font-render-hinting=none'] });
const page = await browser.newPage({ viewport: { width: SIDE, height: SIDE }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);

const problems = await page.evaluate((side) => {
  const found = [];
  const words = (el) => el.textContent.trim().replace(/\s+/g, ' ').slice(0, 60);
  for (const el of document.querySelectorAll('.fit')) {
    if (el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1) {
      found.push(`clipped ${el.tagName.toLowerCase()}.${el.className}: "${words(el)}" needs ${el.scrollWidth}x${el.scrollHeight}, has ${el.clientWidth}x${el.clientHeight}`);
    }
  }
  // A flex row hides its overflow without growing, so measure the last child against the row.
  for (const el of document.querySelectorAll('li, .meta, .timeline, .fields, .regions span, footer')) {
    const box = el.getBoundingClientRect();
    const last = el.lastElementChild ?? el;
    const range = document.createRange();
    range.selectNodeContents(el);
    const inner = range.getBoundingClientRect();
    if (inner.right > box.right + 0.5 || last.getBoundingClientRect().right > box.right + 0.5) {
      found.push(`too wide ${el.tagName.toLowerCase()}.${el.className}: "${words(el)}" by ${Math.round(Math.max(inner.right, last.getBoundingClientRect().right) - box.right)}px`);
    }
  }
  const bottom = Math.max(...[...document.querySelectorAll('#page > *')].map((el) => el.getBoundingClientRect().bottom));
  if (bottom > side) found.push(`page content ends at ${bottom}px, below ${side}px`);
  return found;
}, SIDE);

const fonts = await page.evaluate(() => {
  const seen = new Set();
  for (const el of document.querySelectorAll('h1, .lead h2, .lead p, .meta .place, li')) seen.add(getComputedStyle(el).fontFamily.split(',')[0]);
  return [...seen];
});

const png = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: SIDE, height: SIDE } });
await browser.close();

const out = fileURLToPath(new URL('../entry.png', import.meta.url));
writeFileSync(out, png);
console.log(`entry.png: ${png.length} bytes (${(png.length / MAX_BYTES * 100).toFixed(1)}% of the 1 MiB limit); fonts asked for: ${fonts.join(', ')}`);
if (png.length > MAX_BYTES) problems.push(`entry.png is ${png.length} bytes, over the 1 MiB limit`);
for (const problem of problems) console.error(`PROBLEM ${problem}`);
process.exit(problems.length ? 1 : 0);
