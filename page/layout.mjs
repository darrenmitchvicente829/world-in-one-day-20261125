// Builds the whole page as one HTML string from the stories, the pictures and the map.
// Everything that is counted on the page (stories, regions, fields) is counted here from stories.mjs.

import { readFileSync } from 'node:fs';
import { DAY, REGIONS, FIELDS, TAGS, deck, leads, cards, briefs, figures, timeline, dateCheck, sourcesLine } from './stories.mjs';
import { picture } from './art.mjs';
import { worldMap } from './worldmap.mjs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Number the stories in reading order: leads, then cards, then briefs.
const pictured = [...leads, ...cards];
const all = [...pictured, ...briefs];
all.forEach((story, i) => { story.n = i + 1; });

function tally(key) {
  const counts = new Map();
  for (const story of all) counts.set(story[key], (counts.get(story[key]) ?? 0) + 1);
  return counts;
}

const regionCounts = tally('region');
const fieldCounts = tally('field');
const worldRegions = [...regionCounts.keys()].filter((key) => key !== 'space').length;

function tagBadge(tag) {
  return `<span class="tag tag-${tag}">${TAGS[tag].label}</span>`;
}

function number(story) {
  return `<span class="num" style="background:${REGIONS[story.region].color}">${story.n}</span>`;
}

function meta(story) {
  return `<div class="meta">${number(story)}<span class="place" style="color:${REGIONS[story.region].color}">${esc(story.place)}</span>` +
    `<span class="field">${esc(FIELDS[story.field])}</span>${tagBadge(story.tag)}</div>`;
}

function leadCard(story) {
  return `<article class="lead">${picture(story.art)}${meta(story)}<h2 class="fit">${esc(story.head)}</h2><p class="fit">${esc(story.body)}</p></article>`;
}

function smallCard(story) {
  return `<article class="card">${picture(story.art)}${meta(story)}<h3 class="fit">${esc(story.head)}</h3><p class="fit">${esc(story.body)}</p></article>`;
}

function briefRow(story) {
  const color = REGIONS[story.region].color;
  return `<li class="fit">${number(story)}<b style="color:${color}">${esc(story.place)}</b> <span>${esc(story.text)}</span>${story.tag ? tagBadge(story.tag) : ''}</li>`;
}

function regionBar() {
  return Object.entries(REGIONS).filter(([key]) => regionCounts.has(key)).map(([key, region]) =>
    `<span style="background:${region.color};flex:${regionCounts.get(key)} 0 auto">${esc(region.name)} ${regionCounts.get(key)}</span>`).join('');
}

function fieldLine() {
  return Object.entries(FIELDS).filter(([key]) => fieldCounts.has(key)).map(([key, name]) =>
    `<span>${esc(name)} <b>${fieldCounts.get(key)}</b></span>`).join('');
}

function mapBlock() {
  // Pins that would sit on top of one another are moved aside and tied back with a leader line.
  const nudge = { 3: [4, 9], 10: [-11, -6], 2: [9, 3], 6: [0, 0], 12: [-9, -5], 5: [6, -3] };
  const pins = pictured.map((story) => {
    const [dx, dy] = nudge[story.n] ?? [0, 0];
    return { n: story.n, lon: story.pin[0], lat: story.pin[1], color: REGIONS[story.region].color, dx, dy };
  });
  const dots = briefs.filter((story) => story.pin).map((story) => ({ lon: story.pin[0], lat: story.pin[1], color: REGIONS[story.region].color }));
  return worldMap({ width: 318, height: 154, pins, dots });
}

function legend() {
  return Object.entries(TAGS).map(([key, tag]) => `<span>${tagBadge(key)} ${esc(tag.note)}</span>`).join('');
}

export function pageHtml() {
  const css = readFileSync(new URL('./style.css', import.meta.url), 'utf8');
  const half = Math.ceil(briefs.length / 2);
  const strip = `${all.length} stories · ${worldRegions} world regions + space · ${fieldCounts.size} fields · all from ${DAY.long}`;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>The world in one day: ${DAY.long}</title><style>${css}</style></head>
<body><div id="page">
  <header>
    <div class="strip"><span>The world in one day</span><span>${esc(strip)}</span></div>
    <h1 class="fit">${DAY.long}</h1>
    <div class="deck fit">${deck.map((line) => `<span>${esc(line)}</span>`).join('<i>◆</i>')}</div>
  </header>
  <div class="regions">${regionBar()}</div>
  <div class="fields fit"><em>Fields</em>${fieldLine()}</div>
  <section class="figures">${figures.map((f) => `<div><strong>${esc(f.value)}</strong><span class="fit">${esc(f.label)}</span></div>`).join('')}</section>
  <section class="timeline"><em>The day in UTC</em>${timeline.map((t) => `<span><b>${t.time}</b> ${esc(t.text)}</span>`).join('')}</section>
  <section class="leads">${leads.map(leadCard).join('')}</section>
  <section class="cards">${cards.map(smallCard).join('')}</section>
  <section class="bottom">
    <div class="where"><div class="label">Where it happened <small>pins 1–${pictured.length}: the pictures · dots: briefs</small></div>${mapBlock()}</div>
    <div class="also"><div class="label">Also on ${DAY.short} <small>${briefs.length} more stories, one line each</small></div>
      <div class="cols"><ol>${briefs.slice(0, half).map(briefRow).join('')}</ol><ol>${briefs.slice(half).map(briefRow).join('')}</ol></div></div>
  </section>
  <section class="check fit"><b>Date check</b> ${esc(dateCheck.rule)} ${esc(dateCheck.leftOut)} ${esc(dateCheck.ahead)}</section>
  <footer><div class="legend">${legend()}</div><div class="sources fit">${esc(sourcesLine)}</div></footer>
</div>
<script>
// Size every chip's box to the text it holds, as measured by the browser.
for (const group of document.querySelectorAll('g.chip')) {
  const box = group.querySelector('text').getBBox();
  const rect = group.querySelector('rect');
  rect.setAttribute('x', (box.x - 5).toFixed(1));
  rect.setAttribute('width', (box.width + 10).toFixed(1));
}
</script>
</body></html>`;
}
