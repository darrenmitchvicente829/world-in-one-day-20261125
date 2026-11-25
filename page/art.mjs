// The thirteen pictures of the page, drawn as SVG. Leads are 322 by 112, cards 190 by 64.
// Every picture carries one chip naming its place or its key figure, so it reads without the text below it.

const FONT = 'DejaVu Sans Condensed, DejaVu Sans, sans-serif';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function label(x, y, text, { size = 8, fill = '#fff', anchor = 'start', spacing = 0.3, rotate = 0 } = {}) {
  const turn = rotate ? ` transform="rotate(${rotate} ${x} ${y})"` : '';
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" font-weight="700" fill="${fill}" text-anchor="${anchor}" letter-spacing="${spacing}"${turn}>${esc(text)}</text>`;
}

// A chip is a filled label. The page's fitting script sizes the box to the measured text.
function chip(x, y, text, { bg = '#c62828', fg = '#fff', size = 9.5, anchor = 'start' } = {}) {
  const h = size + 7;
  return `<g class="chip"><rect x="${x}" y="${y}" width="10" height="${h}" rx="2" fill="${bg}"/>` +
    label(anchor === 'end' ? x - 5 : x + 5, y + h - 4.8, text, { size, fill: fg, anchor }) + '</g>';
}

const circles = (list, fill, opacity = 1) =>
  list.map(([cx, cy, r]) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${opacity}"/>`).join('');

function shenzhou() {
  const stars = circles([[20, 44, 0.8], [48, 30, 0.7], [70, 12, 0.9], [150, 12, 0.8], [176, 30, 0.7], [205, 8, 0.9], [300, 10, 0.8], [312, 46, 0.7], [228, 66, 0.7], [186, 58, 0.6]], '#fff', 0.85);
  const smoke = circles([[92, 104, 8], [106, 100, 10], [120, 98, 12], [134, 100, 10], [148, 104, 8], [120, 106, 13]], '#f0eadf', 0.96);
  return `<defs><linearGradient id="sz-sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0a1736"/><stop offset="0.6" stop-color="#27407c"/><stop offset="0.84" stop-color="#e38a4b"/><stop offset="1" stop-color="#f7cc74"/></linearGradient></defs>
  <rect width="322" height="112" fill="url(#sz-sky)"/>${stars}
  <path d="M0,95Q80,88 160,94T322,90V112H0Z" fill="#7a5c3a"/><path d="M0,103Q90,97 190,104T322,101V112H0Z" fill="#5f4529"/>
  <g stroke="#262a35" stroke-width="1.6" fill="none"><path d="M94,96V38M105,96V38M94,38H105M94,52H105M94,66H105M94,80H105M94,38L105,52L94,66L105,80L94,96M105,58H113"/></g>
  <g stroke="#262a35" stroke-width="1"><path d="M22,97V64M52,97V64"/></g>
  <rect x="22.6" y="64" width="19" height="12.5" fill="#de2910"/><path d="M26.6,66.3l0.9,2.6h2.7l-2.2,1.6l0.8,2.6l-2.2,-1.6l-2.2,1.6l0.8,-2.6l-2.2,-1.6h2.7z" fill="#ffde00"/>
  <rect x="52.6" y="64" width="19" height="12.5" fill="#01411c"/><rect x="52.6" y="64" width="4.8" height="12.5" fill="#fff"/>
  <circle cx="64.6" cy="70.3" r="3.3" fill="#fff"/><circle cx="65.8" cy="69.5" r="2.8" fill="#01411c"/><circle cx="67" cy="68.2" r="0.9" fill="#fff"/>
  ${smoke}
  <path d="M112.5,72Q120,110 127.5,72Z" fill="#ff9d2e"/><path d="M116.5,72Q120,95 123.5,72Z" fill="#fff2b3"/>
  <rect x="108.6" y="50" width="5.4" height="22" rx="1.5" fill="#e6e6e0"/><path d="M108.6,50L111.3,43.5L114,50Z" fill="#c62828"/>
  <rect x="126" y="50" width="5.4" height="22" rx="1.5" fill="#e6e6e0"/><path d="M126,50L128.7,43.5L131.4,50Z" fill="#c62828"/>
  <rect x="114.5" y="30" width="11" height="42" rx="1.5" fill="#fbfbf7"/><path d="M114.5,30.5Q120,9 125.5,30.5Z" fill="#fbfbf7"/>
  <path d="M120,14V4.5" stroke="#fbfbf7" stroke-width="1.6"/>
  <rect x="114.5" y="36" width="11" height="2.2" fill="#c62828"/><rect x="117.3" y="42" width="5.4" height="3.6" fill="#de2910"/><rect x="114.5" y="62" width="11" height="2.2" fill="#1f2937"/>
  <path d="M131,24Q190,-10 244,26" fill="none" stroke="#fff" stroke-width="1.3" stroke-dasharray="1.5 4.5" stroke-linecap="round" opacity="0.9"/>
  <g transform="translate(268,36)">
    <g fill="#2f66c9" stroke="#c4d6f2" stroke-width="0.8"><rect x="-46" y="-9" width="22" height="18"/><rect x="24" y="-9" width="22" height="18"/><rect x="-12" y="-28" width="24" height="5.5"/><rect x="-12" y="22.5" width="24" height="5.5"/></g>
    <path d="M-35,-9V9M35,-9V9M-46,0H-24M24,0H46" stroke="#c4d6f2" stroke-width="0.7"/>
    <rect x="-24" y="-1.2" width="8" height="2.4" fill="#cfd8e3"/><rect x="16" y="-1.2" width="8" height="2.4" fill="#cfd8e3"/>
    <rect x="-4.2" y="-22.5" width="8.4" height="45" rx="3.6" fill="#d3dbe6"/>
    <rect x="-16.5" y="-5.5" width="33" height="11" rx="4.5" fill="#eef2f7"/><circle cx="0" cy="0" r="2.6" fill="#93a5bd"/>
  </g>
  ${label(268, 79, 'TIANGONG STATION', { size: 8.5, anchor: 'middle' })}
  ${label(136, 47, 'SHENZHOU-24', { size: 8.5 })}
  ${label(47, 60, 'CHINA · PAKISTAN', { size: 7, anchor: 'middle' })}
  ${chip(7, 7, 'LIFT-OFF 00:18 UTC', { size: 10 })}`;
}

function markets() {
  const line = 'M10,44L24,47L36,42L48,51L60,49L72,59L84,55L96,66L108,69L120,66L132,77L144,81L156,78L168,89L180,92L194,99';
  const rows = [['SK HYNIX', '−11.05%'], ['SAMSUNG', '−9.87%'], ['SOFTBANK', '−14.83%'], ['ADVANTEST', '−12.94%'], ['TSMC', '−3.59%']];
  const table = rows.map(([name, change], i) => {
    const y = 36 + i * 17;
    return label(212, y, name, { size: 9, fill: '#e2e8f0' }) + label(315, y, change, { size: 10, fill: '#fca5a5', anchor: 'end', spacing: 0 }) +
      (i < rows.length - 1 ? `<path d="M212,${y + 5.5}H315" stroke="#243049" stroke-width="1"/>` : '');
  }).join('');
  let pins = '';
  for (let i = 0; i < 4; i += 1) {
    pins += `M${151 + i * 6},26V30M${151 + i * 6},56V60M142,${35 + i * 6}H146M172,${35 + i * 6}H176`;
  }
  return `<rect width="322" height="112" fill="#0f172a"/>
  <path d="M10,46H200M10,64H200M10,82H200M10,100H200" stroke="#1f2a44" stroke-width="1"/>
  <path d="${line}V106H10Z" fill="#ef4444" opacity="0.2"/>
  <path d="${line}" fill="none" stroke="#f87171" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M199,103.5L187,100.5L194.5,92.5Z" fill="#f87171"/>
  <path d="${pins}" stroke="#94a3b8" stroke-width="1.4"/>
  <rect x="146" y="30" width="26" height="26" rx="3" fill="#1e293b" stroke="#94a3b8" stroke-width="1.2"/><rect x="151.5" y="35.5" width="15" height="15" rx="1.5" fill="#334155"/>
  ${label(159, 46.2, 'AI', { size: 8.5, anchor: 'middle', spacing: 0 })}
  <path d="M174,27L165,40.5L170,43L161,59" stroke="#f87171" stroke-width="1.7" fill="none" stroke-linejoin="round"/>
  ${chip(7, 7, 'KOSPI −6.2%', { size: 10.5, bg: '#dc2626' })}
  ${label(10, 35, 'SEOUL CLOSE: 4,697.51', { size: 7.6, fill: '#a5b4cb' })}
  ${label(212, 16, 'AT WEDNESDAY’S CLOSE', { size: 7.5, fill: '#a5b4cb' })}
  <path d="M212,21.5H315" stroke="#3b4a68" stroke-width="1"/>${table}`;
}

function gulf() {
  const sky = `<defs><linearGradient id="gf-sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a1a40"/><stop offset="0.55" stop-color="#9c3f2f"/><stop offset="1" stop-color="#f0a24c"/></linearGradient>
    <clipPath id="gf-left"><rect width="163" height="112"/></clipPath><clipPath id="gf-right"><rect x="169" width="153" height="112"/></clipPath></defs>`;
  const port = `<g clip-path="url(#gf-left)"><rect width="163" height="76" fill="url(#gf-sky)"/><rect y="74" width="163" height="38" fill="#143049"/>
    <rect y="66" width="163" height="8" fill="#3b3f4a"/>
    <g><rect x="6" y="60" width="16" height="6" fill="#b23a2e"/><rect x="6" y="54" width="16" height="6" fill="#2c5aa0"/><rect x="24" y="60" width="16" height="6" fill="#d0a12a"/><rect x="24" y="54" width="16" height="6" fill="#4a7a52"/><rect x="24" y="48" width="16" height="6" fill="#b23a2e"/></g>
    <g stroke="#1d2028" fill="none" stroke-linecap="round"><path d="M58,66V40M74,66V40M58,54L74,40M48,40H100" stroke-width="2.6"/><path d="M48,40L66,29L100,40M90,40V54" stroke-width="1.3"/>
      <path d="M106,66L109,45M121,66L124,45M99,46L140,43" stroke-width="2.6"/><path d="M99,46L116,35L140,43" stroke-width="1.3"/></g>
    <rect x="86" y="54" width="8" height="5" fill="#d0a12a"/>
    ${circles([[134, 40, 8], [140, 30, 9], [148, 20, 10], [156, 10, 10]], '#23232b', 0.94)}
    <path d="M134,42L138,52L148,48L142,57L152,62L141,63L143,73L134,66L125,73L127,63L116,62L126,57L120,48L130,52Z" fill="#ffb02e"/><circle cx="134" cy="59" r="5" fill="#fff2b3"/>
    <path d="M10,84h14M44,92h18M92,83h16M120,95h14" stroke="#2c5a7c" stroke-width="1.2"/>
    ${label(8, 106, 'STRUCK BY SAUDI-LED COALITION', { size: 7.8 })}
    ${chip(7, 7, 'HODEIDAH PORT', { size: 10 })}</g>`;
  const strait = `<g clip-path="url(#gf-right)"><rect x="169" width="153" height="82" fill="url(#gf-sky)"/><rect x="169" y="80" width="153" height="32" fill="#143049"/>
    ${circles([[272, 40, 8], [280, 30, 9], [290, 20, 10], [302, 12, 10], [314, 5, 9]], '#23232b', 0.94)}
    <path d="M254,72Q258,50 266,60Q270,42 278,58Q285,49 285,72Z" fill="#ff8a1f"/><path d="M262,72Q266,59 270,64Q274,55 278,72Z" fill="#ffe08a"/>
    <rect x="210" y="56" width="18" height="16" fill="#ece7da"/><path d="M213,61H225M213,66H225" stroke="#6b7280" stroke-width="1.4"/><rect x="215" y="47" width="7" height="9" fill="#c62828"/>
    <path d="M232,69.5H306" stroke="#4b5563" stroke-width="2.2"/>
    <path d="M204,72H317L311,87H210Z" fill="#171a22"/><path d="M209,84H312L311,87H210Z" fill="#8f2a22"/>
    <g stroke="#0c0e13" stroke-width="1.5" stroke-linecap="round"><path d="M190,74V94M180,84H200M183,77L197,91M197,77L183,91"/></g><circle cx="190" cy="84" r="5.6" fill="#0c0e13"/>
    <rect x="176" y="86" width="28" height="10" fill="#143049" opacity="0.82"/>
    <path d="M178,97h12M232,99h18M286,96h14" stroke="#2c5a7c" stroke-width="1.2"/>
    ${label(176, 106, '3 TANKERS HIT MINES, IRAN SAYS', { size: 7.8 })}
    ${chip(176, 7, 'STRAIT OF HORMUZ', { size: 10 })}</g>`;
  return `${sky}<rect width="322" height="112" fill="#f6f1e4"/>${port}${strait}`;
}

function tariffs() {
  const box = (x, y, w, text, fill) =>
    `<rect x="${x}" y="${y}" width="${w}" height="11" fill="${fill}"/><path d="M${x + 3},${y}v11M${x + w - 3},${y}v11" stroke="#fff" stroke-width="0.5" opacity="0.45"/>` +
    label(x + w / 2, y + 8.2, text, { size: 6.8, anchor: 'middle', spacing: 0.1 });
  return `<rect width="190" height="64" fill="#d9e8f1"/><rect y="52" width="190" height="12" fill="#5d93b5"/><rect y="49" width="190" height="4" fill="#5b6472"/>
  ${box(52, 38, 60, 'CHINA +20%', '#b91c1c')}${box(114, 38, 70, 'VIETNAM +20%', '#c2410c')}
  ${box(58, 26, 28, 'EU', '#1d4ed8')}${box(88, 26, 40, 'JAPAN', '#475569')}${box(130, 26, 40, 'INDIA', '#0f766e')}
  ${box(106, 14, 42, 'S. KOREA', '#7e22ce')}${box(150, 14, 34, 'TAIWAN', '#15803d')}
  <path d="M14,49V30" stroke="#374151" stroke-width="3"/><path d="M14,32H46" stroke="#f8fafc" stroke-width="4"/><path d="M14,32H46" stroke="#dc2626" stroke-width="4" stroke-dasharray="5 5"/>
  <circle cx="14" cy="29" r="2.6" fill="#dc2626"/>
  ${chip(6, 5, '14 PARTNERS', { bg: '#1e3a8a' })}`;
}

function airbase() {
  const jet = (x, y, fill) =>
    `<path d="M${x},${y}l34,-3l8,3l-8,2.2l-30,0.8z" fill="${fill}"/><path d="M${x + 3},${y - 0.5}l-2,-10l10,9.5z" fill="${fill}"/><path d="M${x + 14},${y + 1}l11,6.5h-15z" fill="${fill}"/>`;
  const burst = (x, y) =>
    `<path d="M${x},${y - 12}l3,7l8,-3l-4,7l7,4l-8,1l1,8l-7,-5l-7,5l1,-8l-8,-1l7,-4l-4,-7l8,3z" fill="#ffb02e"/><circle cx="${x}" cy="${y}" r="3.6" fill="#fff2b3"/>`;
  return `<rect width="190" height="64" fill="#c9d4e3"/><rect y="38" width="190" height="26" fill="#74845f"/>
  <rect y="43" width="190" height="16" fill="#4b5563"/><path d="M0,51H190" stroke="#e5e7eb" stroke-width="1.2" stroke-dasharray="10 8"/>
  ${circles([[96, 26, 7], [104, 17, 8], [114, 9, 8], [156, 24, 7], [164, 15, 8], [174, 7, 8]], '#262730', 0.92)}
  ${jet(12, 40, '#374151')}${jet(70, 41, '#1f2937')}${jet(130, 40, '#1f2937')}
  ${burst(90, 36)}${burst(150, 34)}
  ${label(184, 61.5, 'SAVASLEYKA AIRBASE, RUSSIA', { size: 7, anchor: 'end' })}
  ${chip(6, 5, '5 JETS HIT')}`;
}

function treaty() {
  const stars = circles([[57, 28, 0.9], [63, 28, 0.9], [60, 31, 0.9], [57, 34, 0.9], [63, 34, 0.9]], '#fff');
  return `<rect width="190" height="64" fill="#bfe3f0"/><rect y="44" width="190" height="20" fill="#3f9fc1"/>
  <ellipse cx="166" cy="47" rx="26" ry="6" fill="#e8d39a"/><path d="M168,46Q166,32 172,22" stroke="#7c5a34" stroke-width="2.6" fill="none"/>
  <path d="M172,22q-12,-6 -18,2q9,-3 18,-2zM172,22q4,-12 14,-10q-9,3 -14,10zM172,22q12,-2 16,8q-7,-7 -16,-8zM172,22q-8,4 -8,13q2,-8 8,-13z" fill="#2f7d3b"/>
  <rect x="9" y="24" width="38" height="25" fill="#012169" stroke="#fff" stroke-width="0.8"/>
  <path d="M9,24L28,36.5M28,24L9,36.5" stroke="#fff" stroke-width="2.4"/><path d="M18.5,24V36.5M9,30.2H28" stroke="#fff" stroke-width="3.6"/><path d="M18.5,24V36.5M9,30.2H28" stroke="#c8102e" stroke-width="1.8"/>
  ${circles([[18.5, 43, 2.2], [38, 28.5, 1.3], [42.5, 34, 1.3], [34.5, 37.5, 1.3], [39, 44, 1.3]], '#fff')}
  <rect x="52" y="24" width="38" height="25" fill="#215b33"/><path d="M52,24H90L52,49Z" fill="#0051ba"/><path d="M52,49L90,24" stroke="#fcd116" stroke-width="2.6"/>${stars}
  <rect x="52" y="24" width="38" height="25" fill="none" stroke="#fff" stroke-width="0.8"/>
  <g transform="rotate(-5 122 38)"><rect x="100" y="20" width="44" height="36" fill="#fffdf5" stroke="#b8ad92" stroke-width="0.8"/>
    <path d="M105,27H139M105,32H139M105,37H131" stroke="#8b8573" stroke-width="1.2"/><path d="M105,48q4,-6 7,0t7,-1M124,48q3,-5 6,0t6,-2" stroke="#1e3a8a" stroke-width="1.1" fill="none"/>
    <circle cx="136" cy="27.5" r="3.6" fill="#c62828"/></g>
  <path d="M150,24L133,49" stroke="#1f2937" stroke-width="2.6" stroke-linecap="round"/><path d="M133,49l-1.4,3.6l3.4,-2.2z" fill="#1f2937"/>
  ${chip(6, 5, 'SECURITY TREATY SIGNED', { bg: '#15803d', size: 9 })}`;
}

function siege() {
  const windows = [48, 72, 110, 134].map((x) => `<rect x="${x}" y="36" width="20" height="13" fill="#93c5fd"/>`).join('');
  const officer = (x) => `<circle cx="${x}" cy="40" r="2.6" fill="#0b0f19"/><path d="M${x - 3.2},43.5h6.4l1,10h-8.4z" fill="#0b0f19"/><rect x="${x - 7.5}" y="44.5" width="4.4" height="8" rx="1" fill="#475569"/>`;
  return `<rect width="190" height="64" fill="#101828"/><rect y="53" width="190" height="11" fill="#1f2937"/>
  <path d="M22,36L-6,10H8Z" fill="#ef4444" opacity="0.28"/><path d="M26,36L52,8H38Z" fill="#3b82f6" opacity="0.3"/>
  <rect x="42" y="22" width="118" height="31" fill="#e5e7eb"/><rect x="42" y="22" width="118" height="11" fill="#b91c1c"/>
  ${label(101, 30.4, 'SUPERMERCADO', { size: 7.6, anchor: 'middle', spacing: 0.8 })}${windows}<rect x="94" y="36" width="14" height="17" fill="#1e293b"/>
  <rect x="5" y="44" width="36" height="9" rx="2" fill="#f8fafc"/><path d="M11,44l4,-6.5h15l4,6.5z" fill="#f8fafc"/><path d="M16,43l2.4,-4h10l2.4,4z" fill="#60a5fa"/>
  <rect x="5" y="47.5" width="36" height="2" fill="#1d4ed8"/><circle cx="13" cy="54" r="3.2" fill="#0b0f19"/><circle cx="33" cy="54" r="3.2" fill="#0b0f19"/>
  <rect x="18.5" y="34.6" width="4.5" height="3" fill="#ef4444"/><rect x="23" y="34.6" width="4.5" height="3" fill="#3b82f6"/>
  ${officer(170)}${officer(182)}
  <path d="M0,60H190" stroke="#facc15" stroke-width="3"/><path d="M0,60H190" stroke="#111827" stroke-width="3" stroke-dasharray="5 6"/>
  ${chip(6, 4, '20 FREED AFTER 17 HOURS', { size: 8.6 })}`;
}

function wage() {
  return `<rect width="190" height="64" fill="#f3e3c3"/><rect y="52" width="190" height="12" fill="#7a5a2e"/>
  <path d="M8,50Q26,40 44,46T86,50V52H8Z" fill="#0f766e"/>
  <rect x="26" y="46" width="66" height="6.5" rx="2" fill="#1f2937"/>
  <path d="M82,46V25Q82,18 75,18H45Q38,18 38,25V31" stroke="#1f2937" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M38,33V45" stroke="#9ca3af" stroke-width="1.4"/><circle cx="89" cy="29" r="6" fill="#374151" stroke="#9ca3af" stroke-width="1.2"/>
  <rect x="55" y="6.5" width="8" height="8" rx="1" fill="#c62828"/><path d="M59,14.5V18" stroke="#c62828" stroke-width="1"/>
  <g><rect x="112" y="44.5" width="44" height="7.5" rx="2" fill="#1d4ed8"/><rect x="114" y="37" width="40" height="7.5" rx="2" fill="#f8fafc"/><rect x="116" y="29.5" width="36" height="7.5" rx="2" fill="#be185d"/><rect x="118" y="22" width="32" height="7.5" rx="2" fill="#f59e0b"/></g>
  <path d="M170,50V16" stroke="#15803d" stroke-width="4.5"/><path d="M170,6l9.5,13h-19z" fill="#15803d"/>
  ${label(184, 61.5, '12,500 → 17,000 TAKA A MONTH', { size: 7, anchor: 'end' })}
  ${chip(6, 5, 'WAGE +36%', { bg: '#15803d', size: 10 })}`;
}

function mine() {
  let rain = '';
  for (let i = 0; i < 12; i += 1) rain += `M${96 + i * 8},${3 + (i % 3) * 4}l-3,7`;
  return `<rect width="190" height="64" fill="#8fa0b4"/><path d="${rain}" stroke="#e5edf5" stroke-width="1" opacity="0.8"/>
  <path d="M0,24Q50,13 100,21T190,19V64H0Z" fill="#4d7c0f"/><path d="M0,29Q50,18 100,26T190,24V64H0Z" fill="#6b4f33"/>
  <path d="M0,40Q60,36 120,41T190,39M0,58Q70,54 130,59T190,57" stroke="#5a4129" stroke-width="1" fill="none"/>
  <rect x="88" y="21" width="13" height="30" fill="#1c1917"/><rect x="34" y="45" width="122" height="12" rx="3" fill="#1c1917"/>
  <rect x="34" y="50.5" width="122" height="6.5" rx="3" fill="#2563eb"/><path d="M36,50.5q5,-2.4 10,0t10,0t10,0t10,0t10,0t10,0t10,0t10,0t10,0t10,0t10,0t10,0" stroke="#93c5fd" stroke-width="1" fill="none"/>
  <path d="M83,22L94.5,8L106,22M94.5,8V41" stroke="#f1f5f9" stroke-width="1.5" fill="none"/><rect x="91" y="39" width="7" height="6" rx="1" fill="#f97316"/>
  ${circles([[46, 48, 1.7], [56, 48, 1.7], [66, 48, 1.7], [128, 48, 1.7], [138, 48, 1.7]], '#fde047')}
  <path d="M110,22V50M107,22H113M107,50H113" stroke="#f8fafc" stroke-width="1.2"/>
  ${label(116, 39, '100 M DOWN', { size: 7.4 })}
  ${chip(6, 4, '9 DEAD · 17 TRAPPED', { size: 9 })}`;
}

function gaza() {
  const block = (x, y, w, fill) => `<rect x="${x}" y="${y}" width="${w}" height="${64 - y}" fill="${fill}"/>`;
  const lit = [[14, 34], [22, 44], [44, 30], [52, 46], [150, 36], [162, 46], [176, 30], [178, 48]].map(([x, y]) => `<rect x="${x}" y="${y}" width="4" height="5" fill="#fde68a"/>`).join('');
  return `<defs><linearGradient id="gz-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#171a36"/><stop offset="1" stop-color="#4a2f4f"/></linearGradient></defs>
  <rect width="190" height="64" fill="url(#gz-sky)"/>
  ${block(6, 28, 28, '#374151')}${block(36, 22, 30, '#4b5563')}${block(140, 28, 30, '#4b5563')}${block(170, 22, 20, '#374151')}
  <path d="M72,64V26L82,22L88,29L96,20L104,31L112,24L124,30L132,26V64Z" fill="#6b7280"/>
  <path d="M86,64L90,42L98,36L110,40L116,52L114,64Z" fill="#1f1f27"/><path d="M92,62Q96,40 102,50Q106,38 112,62Z" fill="#ff8a1f"/><path d="M98,62Q101,50 104,54Q106,48 108,62Z" fill="#ffe08a"/>
  ${circles([[102, 28, 8], [110, 18, 9], [121, 10, 9], [133, 5, 8]], '#15161d', 0.92)}
  <path d="M62,64l6,-7l8,3l5,-5l7,9zM112,64l7,-6l9,2l6,-4l8,8z" fill="#9ca3af"/>${lit}
  <rect x="104" y="6" width="82" height="11" rx="2" fill="#0b0d14" opacity="0.72"/>
  ${label(182, 14.2, '7 KILLED ACROSS GAZA', { size: 7, anchor: 'end' })}
  ${chip(6, 5, 'SHATI CAMP')}`;
}

function court() {
  const columns = [0, 1, 2, 3, 4].map((i) => `<rect x="${72 + i * 15.5}" y="28" width="7" height="22" fill="#f8f4e8" stroke="#b8ad92" stroke-width="0.6"/>`).join('');
  return `<rect width="190" height="64" fill="#e7dfcb"/>
  <path d="M64,23L106.5,7L149,23Z" fill="#9a8f78"/><rect x="64" y="23" width="85" height="5" fill="#857a63"/>${columns}
  <rect x="60" y="50" width="93" height="4.5" fill="#9a8f78"/><rect x="54" y="54.5" width="105" height="5" fill="#857a63"/>
  <g transform="rotate(-7 28 42)"><rect x="10" y="25" width="36" height="32" fill="#fffdf5" stroke="#b8ad92" stroke-width="0.8"/>
    <path d="M14,31H42M14,36H42M14,41H36M14,52H38" stroke="#a39c88" stroke-width="1.1"/>
    <rect x="12" y="42.5" width="32" height="8" fill="none" stroke="#c62828" stroke-width="1.2"/>${label(28, 49.2, 'UNLAWFUL', { size: 5.6, fill: '#c62828', anchor: 'middle', spacing: 0.2 })}</g>
  <g transform="rotate(-32 166 34)"><rect x="155" y="24" width="24" height="11" rx="2" fill="#7c4a21"/><rect x="164.5" y="35" width="5" height="22" fill="#a16207"/></g>
  <rect x="160" y="55" width="26" height="4.5" rx="1" fill="#7c4a21"/>
  ${chip(6, 5, 'PANEL REPORT SET ASIDE', { bg: '#1e3a8a', size: 8.8 })}`;
}

function energy() {
  return `<rect width="190" height="64" fill="#1e293b"/><rect y="54" width="190" height="10" fill="#0f172a"/>
  <path d="M10,54V34L32,19L54,34V54Z" fill="#0b1220"/><rect x="40" y="16" width="6" height="12" fill="#0b1220"/><rect x="19" y="37" width="10" height="10" fill="#fde68a"/><rect x="35" y="37" width="10" height="17" fill="#334155"/>
  <path d="M86,50Q72,36 86,24Q84,33 92,34Q90,22 98,12Q98,24 106,30Q112,38 104,50Z" fill="#3b82f6"/><path d="M90,50Q84,42 92,36Q93,42 97,38Q102,44 98,50Z" fill="#bfdbfe"/>
  <rect x="78" y="50" width="34" height="4" rx="1.5" fill="#64748b"/>
  <rect x="128" y="20" width="30" height="34" fill="#fffdf5"/><path d="M132,27H154M132,32H154M132,37H146" stroke="#94a3b8" stroke-width="1.2"/>
  ${label(143, 50, '£2,166', { size: 7.6, fill: '#c62828', anchor: 'middle', spacing: 0 })}
  <path d="M172,54V24" stroke="#ef4444" stroke-width="4.5"/><path d="M172,13l9.5,13h-19z" fill="#ef4444"/>
  ${label(6, 61.5, 'TYPICAL BILL £1,723 → £2,166 A YEAR', { size: 6.8, fill: '#e2e8f0' })}
  ${chip(6, 4, 'BILLS +26%', { size: 10 })}`;
}

function cinema() {
  let holes = '';
  for (let i = 0; i < 5; i += 1) {
    const a = (i * 72 - 90) * Math.PI / 180;
    holes += `<circle cx="${(156 + 9.5 * Math.cos(a)).toFixed(1)}" cy="${(34 + 9.5 * Math.sin(a)).toFixed(1)}" r="4" fill="#2a0c0b"/>`;
  }
  let stripes = '';
  for (let i = 0; i < 5; i += 1) stripes += `<path d="M${16 + i * 9},22l5,-7h4.5l-5,7z" fill="#111827"/>`;
  return `<defs><linearGradient id="cn-bg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4a100f"/><stop offset="0.5" stop-color="#2a0c0b"/><stop offset="1" stop-color="#4a100f"/></linearGradient></defs>
  <rect width="190" height="64" fill="url(#cn-bg)"/>
  <path d="M0,0V64M12,0V64M178,0V64M190,0V64" stroke="#6b1a17" stroke-width="5"/>
  <rect x="14" y="24" width="46" height="28" rx="1.5" fill="#111827" stroke="#f8fafc" stroke-width="1"/><path d="M14,33H60M26,33V52M40,33V52" stroke="#f8fafc" stroke-width="0.8"/>
  <g transform="rotate(-9 14 22)"><rect x="14" y="15" width="46" height="7" fill="#f8fafc"/>${stripes}</g>
  <circle cx="156" cy="34" r="17.5" fill="#d1d5db" stroke="#9ca3af" stroke-width="1.2"/>${holes}<circle cx="156" cy="34" r="2.4" fill="#2a0c0b"/>
  <path d="M95,6l2.6,6.6l7,0.5l-5.4,4.5l1.7,6.9l-5.9,-3.8l-5.9,3.8l1.7,-6.9l-5.4,-4.5l7,-0.5z" fill="#fbbf24"/>
  ${label(99, 41, 'PETE EDOCHIE', { size: 8.8, anchor: 'middle', spacing: 0.2 })}
  ${label(99, 53, '1947 – 2026', { size: 8.4, anchor: 'middle', fill: '#fbbf24', spacing: 0.6 })}`;
}

const ART = {
  shenzhou: [322, 112, shenzhou],
  markets: [322, 112, markets],
  gulf: [322, 112, gulf],
  tariffs: [190, 64, tariffs],
  airbase: [190, 64, airbase],
  treaty: [190, 64, treaty],
  siege: [190, 64, siege],
  wage: [190, 64, wage],
  mine: [190, 64, mine],
  gaza: [190, 64, gaza],
  court: [190, 64, court],
  energy: [190, 64, energy],
  cinema: [190, 64, cinema],
};

export function picture(name) {
  const [w, h, draw] = ART[name];
  return `<svg xmlns="http://www.w3.org/2000/svg" class="art" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${draw()}</svg>`;
}
