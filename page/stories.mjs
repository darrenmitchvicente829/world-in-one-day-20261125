// The world's news of Wednesday 25 November 2026: every word that appears on the page.
// Each story happened, or was first reported, on that date in at least one time zone.
// Sources are given per story so each claim can be traced; layout.mjs counts the regions and
// fields from this file, so the numbers printed on the page cannot drift from the stories.

export const DAY = {
  long: 'Wednesday 25 November 2026',
  short: 'Wednesday 25 November',
  tiny: 'WED 25 NOV 2026',
};

// Regions, in the order of the bar under the masthead.
export const REGIONS = {
  asia: { name: 'Asia', color: '#0f766e' },
  mideast: { name: 'Middle East', color: '#b45309' },
  europe: { name: 'Europe', color: '#1d4ed8' },
  africa: { name: 'Africa', color: '#7e22ce' },
  namerica: { name: 'North America', color: '#b91c1c' },
  latam: { name: 'Latin America', color: '#be185d' },
  oceania: { name: 'Oceania', color: '#15803d' },
  space: { name: 'Space', color: '#475569' },
};

// Fields, in the order of the line under the region bar.
export const FIELDS = {
  war: 'War',
  economy: 'Economy',
  justice: 'Justice',
  politics: 'Politics',
  tech: 'Tech',
  hazard: 'Disaster',
  climate: 'Climate',
  space: 'Space',
  health: 'Health',
  society: 'Society',
  culture: 'Culture',
};

// How sure each story is.
export const TAGS = {
  official: { label: 'OFFICIAL', note: 'an authority’s own statement or data' },
  reported: { label: 'REPORTED', note: 'news agencies' },
  claim: { label: 'CLAIM', note: 'one side’s word, not confirmed' },
};

export const deck = [
  'First foreigner flies to China’s space station',
  'AI sell-off circles the globe',
  'Saudi-led coalition strikes Hodeidah',
];

// The three leads: picture, headline and three lines of text.
export const leads = [
  {
    art: 'shenzhou', region: 'asia', field: 'space', tag: 'official',
    place: 'Jiuquan, China', pin: [100.3, 40.9],
    head: 'China flies first foreign astronaut to Tiangong',
    body: 'Pakistan’s Muhammad Zeeshan Ali, 40, lifted off on Shenzhou-24 at 00:18 UTC with Tang Hongbo and Wu Yi and reached China’s station for a week-long stay.',
    sources: 'BBC, CGTN, Euronews, SCMP',
  },
  {
    art: 'markets', region: 'asia', field: 'economy', tag: 'reported',
    place: 'Seoul · Tokyo · New York', pin: [127, 37.5],
    head: 'AI doubts sink chip stocks, Seoul to Wall Street',
    body: 'The Kospi fell 6.2%, back under 5,000: SK Hynix lost 11%, Samsung 9.9% and Tokyo’s SoftBank 14.8%. Wall Street opened sharply lower.',
    sources: 'Yonhap, CNBC, BBC',
  },
  {
    art: 'gulf', region: 'mideast', field: 'war', tag: 'claim',
    place: 'Hodeidah · Riyadh · Hormuz', pin: [43, 14.8],
    head: 'Saudi-led coalition strikes Yemen’s Hodeidah port',
    body: 'Riyadh’s coalition said it hit the Houthi-held port; the Houthis claimed strikes on Ras Tanura and Riyadh. Iran said three tankers struck mines in Hormuz.',
    sources: 'CNA/AFP, DW, Arab News, Middle East Eye',
  },
];

// Ten more pictured stories: picture, headline and two lines of text.
export const cards = [
  {
    art: 'tariffs', region: 'namerica', field: 'economy', tag: 'official',
    place: 'Washington', pin: [-77, 38.9],
    head: 'US proposes tariffs on 14 trading partners',
    body: 'Up to 20% more on China and Vietnam; EU, Japan and India named.',
    sources: 'CNBC, DW, ABC',
  },
  {
    art: 'airbase', region: 'europe', field: 'war', tag: 'claim',
    place: 'Savasleyka, Russia', pin: [42.1, 55.4],
    head: 'Kyiv says it hit five Russian warplanes',
    body: 'Three MiG-31s, two Su-34s. Russian drones killed seven in Ukraine.',
    sources: 'BBC, Kyiv Independent, Euronews',
  },
  {
    art: 'treaty', region: 'oceania', field: 'politics', tag: 'official',
    place: 'Canberra', pin: [149.1, -35.3],
    head: 'Solomon Islands signs treaty with Australia',
    body: 'A security pact; Honiara is reported to be ending its 2022 deal with China.',
    sources: 'BBC, DW, Al Jazeera',
  },
  {
    art: 'siege', region: 'latam', field: 'justice', tag: 'official',
    place: 'Colombia', pin: [-75.5, 10.4],
    head: 'Commandos free 20 hostages in Cartagena',
    body: 'Police stormed a supermarket after 17 hours; one gunman was killed.',
    sources: 'BBC, DW, France 24',
  },
  {
    art: 'wage', region: 'asia', field: 'economy', tag: 'official',
    place: 'Dhaka', pin: [90.4, 23.8],
    head: 'Bangladesh lifts garment wage by 36%',
    body: 'To 17,000 taka a month. Unions want 18,000, and 87 factories shut.',
    sources: 'The Daily Star, Al Jazeera, SCMP',
  },
  {
    art: 'mine', region: 'asia', field: 'hazard', tag: 'official',
    place: 'Indonesia', pin: [106.8, -6.6],
    head: 'Nine dead, 17 trapped in flooded Java mine',
    body: 'Rain flooded the unlicensed gold pit; rescuers are working 100 m down.',
    sources: 'AP via SCMP, CNA',
  },
  {
    art: 'gaza', region: 'mideast', field: 'war', tag: 'official',
    place: 'Gaza City', pin: [34.4, 31.5],
    head: 'Israeli strike kills Hamas official, family',
    body: 'Muhammad Abu al-Awf, his wife and two daughters died in Shati camp.',
    sources: 'Al Jazeera, SCMP/Reuters',
  },
  {
    art: 'court', region: 'africa', field: 'justice', tag: 'official',
    place: 'Cape Town', pin: [18.4, -33.9],
    head: 'Court quashes report against Ramaphosa',
    body: 'Judges set aside the 2022 Phala Phala panel findings as unlawful.',
    sources: 'BBC, Daily Maverick',
  },
  {
    art: 'energy', region: 'europe', field: 'economy', tag: 'official',
    place: 'London', pin: [-0.1, 51.5],
    head: 'British energy bills to jump 26% in January',
    body: 'Ofgem cap: £1,723 to £2,166 a year, blamed on Iran-war gas prices.',
    sources: 'BBC',
  },
  {
    art: 'cinema', region: 'africa', field: 'culture', tag: 'reported',
    place: 'Nigeria', pin: [7.5, 6.4],
    head: 'Nollywood legend Pete Edochie dies at 79',
    body: 'The Things Fall Apart star died in Enugu, his family said.',
    sources: 'BBC, Vanguard via allAfrica',
  },
];

// Twenty-four briefs: a place and one line.
export const briefs = [
  { region: 'europe', field: 'war', place: 'Warsaw', pin: [21, 52.2], text: 'Poland plans no-fly zone along Ukraine border', sources: 'DW' },
  { region: 'europe', field: 'tech', place: 'Brussels', pin: [4.4, 50.8], text: 'EU proposes €50bn fund for quantum and AI', sources: 'DW, CNA' },
  { region: 'europe', field: 'society', place: 'El Hierro', pin: [-18, 27.7], text: 'Record 2,100 migrants reach Canaries in a day', sources: 'Reuters via Arab News' },
  { region: 'europe', field: 'climate', place: 'Vatican', pin: [12.5, 41.9], text: 'Pope Leo calls COP31 collapse “troubling”', sources: 'Reuters via Straits Times' },
  { region: 'europe', field: 'justice', place: 'London', pin: [-0.1, 51.5], text: 'Met Police still institutionally racist: review', sources: 'AFP via SCMP' },
  { region: 'europe', field: 'justice', place: 'Basingstoke', pin: [-1.1, 51.3], text: 'Ex-England star Sterling gets suspended term', sources: 'BBC, AP via Arab News' },
  { region: 'mideast', field: 'justice', place: 'Jerusalem', pin: [35.2, 31.8], text: 'Judges urge end to Netanyahu bribery charge', sources: 'AFP via Arab News, Jerusalem Post' },
  { region: 'mideast', field: 'politics', place: 'Jerusalem', pin: [35.2, 31.8], text: 'Knesset advances 7 October inquiry bill', sources: 'Jerusalem Post, France 24' },
  { region: 'mideast', field: 'war', place: 'Iran', pin: [51.4, 35.7], text: 'US tells its citizens to leave the country at once', sources: 'Euronews' },
  { region: 'africa', field: 'war', place: 'Damazin', pin: [34.4, 11.8], text: 'RSF drones kill 19 in Sudan’s Blue Nile state', sources: 'Al Jazeera' },
  { region: 'africa', field: 'justice', place: 'Mombasa', pin: [39.7, -4], text: 'Starvation-cult leader Mackenzie convicted again', sources: 'Reuters via Straits Times' },
  { region: 'africa', field: 'health', place: 'Ituri', pin: [29.9, 1.6], text: 'UNICEF: Ebola crisis fuels violence against women', sources: 'AFP via Japan Times' },
  { region: 'africa', field: 'health', place: 'Addis Ababa', pin: [38.7, 9], text: 'Polio drive aims at 11.3 million children', sources: 'Addis Standard via allAfrica' },
  { region: 'asia', field: 'politics', place: 'Pyongyang', pin: [125.8, 39], text: 'North Korea expels Swiss envoy, shuts office', sources: 'Yonhap, DW' },
  { region: 'asia', field: 'society', place: 'Seoul', pin: [127, 37.5], text: 'South Korean births jump 12.2% in September', sources: 'Yonhap' },
  { region: 'asia', field: 'tech', place: 'Hong Kong', pin: [114.2, 22.3], text: 'Ticketing hack exposes 1.3 million users’ data', sources: 'SCMP' },
  { region: 'asia', field: 'tech', place: 'Kuala Lumpur', pin: [101.7, 3.1], text: 'Malaysia sues Google over YouTube harms', sources: 'SCMP, ABC' },
  { region: 'oceania', field: 'economy', place: 'Sydney', pin: [151.2, -33.9], text: 'Australian inflation jumps to 4.9%', sources: 'ABC' },
  { region: 'oceania', field: 'tech', place: 'Canberra', pin: [149.1, -35.3], text: 'Parliament passes online “duty of care” law', sources: 'Reuters via Daily Maverick' },
  { region: 'namerica', field: 'economy', place: 'Washington', pin: [-77, 38.9], text: 'Fed’s inflation gauge climbs to 3.8%', sources: 'CNBC' },
  { region: 'namerica', field: 'politics', place: 'Madrid', pin: [-3.7, 40.4], text: 'Abrego Garcia lands in Spain after leaving US', sources: 'BBC, CNBC' },
  { region: 'latam', field: 'culture', place: 'San Juan', pin: [-66.1, 18.4], text: 'Puerto Rico’s Jennifer Barreto is Miss Universe', sources: 'Euronews, Arab News' },
  { region: 'namerica', field: 'hazard', place: 'Iowa', pin: [-93, 41.5], text: 'US Army blows up unstable explosives stockpile', sources: 'DW, Al Jazeera, NPR' },
  { region: 'space', field: 'space', place: 'Didymos', pin: null, text: 'ESA’s Hera reaches asteroid NASA hit in 2022', sources: 'BBC, Space.com' },
];

// The band of big numbers. Each one repeats a figure from a story above.
export const figures = [
  { value: '1st', label: 'foreign astronaut to fly to China’s Tiangong station' },
  { value: '−6.2%', label: 'Seoul’s Kospi, as AI doubts hit chip stocks' },
  { value: '14', label: 'trading partners in new US tariff plan' },
  { value: '+36%', label: 'Bangladesh garment minimum wage' },
  { value: '+26%', label: 'British energy bills from January' },
  { value: '4.9%', label: 'Australian inflation, year to October' },
];

// The day in UTC: only times given by the sources or fixed by a market's or agency's schedule.
export const timeline = [
  { time: '00:18', text: 'Shenzhou-24 lifts off' },
  { time: '00:30', text: 'Australia CPI: 4.9%' },
  { time: '06:30', text: 'Kospi closes −6.2%' },
  { time: '13:30', text: 'US inflation: 3.8%' },
  { time: '14:30', text: 'Wall St opens lower' },
];

export const dateCheck = {
  rule: 'Every story here happened, or was first reported, on Wednesday 25 November 2026 in at least one time zone.',
  leftOut: 'Left out as earlier news: Huawei’s US conviction, the Houthi strike on Riyadh’s PIF tower and China’s probe of Shanghai chief Chen Jining (all Tue 24), Jensen Huang’s return to Nvidia (Mon 23), COP31’s collapse (Sun 22).',
  ahead: 'Not yet news: Thanksgiving (Thu 26), Taiwan’s local elections (Sat 28), Spain’s election (Sun 29).',
};

export const sourcesLine = 'Sources: AP, AFP, Reuters, BBC, Al Jazeera, CNBC, Yonhap, DW, Euronews, ABC, CNA, SCMP, Arab News · drawn in code';
