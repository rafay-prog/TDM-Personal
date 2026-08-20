/**
 * Draws the eight national flags we need as SVG, so no third-party flag pack or
 * CDN has to be pulled in for eight small files. Emoji were not an option:
 * Windows renders regional-indicator pairs as bare letters ("AE"), not a flag.
 *
 *   node scripts/make-flags.mjs
 *
 * Each flag keeps its own official ratio and palette, and is drawn to fill its
 * viewBox, so they can be rendered at a shared height with natural widths.
 */
import { writeFile, mkdir } from "node:fs/promises";

/** Path for a 5-pointed star, `rot` degrees clockwise from point-up. */
function star(cx, cy, r, rot = 0) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? r : r * 0.382;
    const a = ((i * 36 + rot - 90) * Math.PI) / 180;
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

const svg = (w, h, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${body}</svg>\n`;

// United States: 13 stripes, canton over 7 of them, 9 alternating rows of stars.
function usa() {
  const W = 190, H = 100, s = H / 13;
  let body = `<rect width="${W}" height="${H}" fill="#fff"/>`;
  for (let i = 0; i < 13; i += 2)
    body += `<rect y="${(i * s).toFixed(3)}" width="${W}" height="${s.toFixed(3)}" fill="#B31942"/>`;
  const cw = W * 0.4, ch = s * 7;
  body += `<rect width="${cw}" height="${ch.toFixed(3)}" fill="#0A3161"/>`;
  const dx = cw / 12, dy = ch / 10;
  for (let row = 0; row < 9; row++) {
    const six = row % 2 === 0;
    for (let col = 0; col < (six ? 6 : 5); col++) {
      const cx = (six ? 1 + col * 2 : 2 + col * 2) * dx;
      body += `<polygon points="${star(cx, (row + 1) * dy, H * 0.0308)}" fill="#fff"/>`;
    }
  }
  return svg(W, H, body);
}

// United Kingdom: the standard counterchanged construction on a 60x30 field.
const uk = () =>
  svg(
    60,
    30,
    `<clipPath id="uk"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>` +
      `<rect width="60" height="30" fill="#012169"/>` +
      `<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>` +
      `<path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#uk)" stroke="#C8102E" stroke-width="4"/>` +
      `<path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>` +
      `<path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>`
  );

const flags = {
  // Red hoist band over a quarter of the width, then green/white/black bands.
  ae: svg(60, 30, `<rect width="60" height="10" fill="#00732F"/><rect y="10" width="60" height="10" fill="#fff"/><rect y="20" width="60" height="10" fill="#000"/><rect width="15" height="30" fill="#FF0000"/>`),
  // The crescent is carved by laying a field-coloured disc over a white one.
  pk: svg(60, 40, `<rect width="60" height="40" fill="#01411C"/><rect width="15" height="40" fill="#fff"/><circle cx="34.5" cy="21" r="9" fill="#fff"/><circle cx="38" cy="19" r="8.2" fill="#01411C"/><polygon points="${star(43.6, 14.2, 4.2, 20)}" fill="#fff"/>`),
  gb: uk(),
  us: usa(),
  cm: svg(60, 40, `<rect width="20" height="40" fill="#007A5E"/><rect x="20" width="20" height="40" fill="#CE1126"/><rect x="40" width="20" height="40" fill="#FCD116"/><polygon points="${star(30, 20, 6.5)}" fill="#FCD116"/>`),
  jp: svg(60, 40, `<rect width="60" height="40" fill="#fff"/><circle cx="30" cy="20" r="12" fill="#BC002D"/>`),
  fr: svg(60, 40, `<rect width="20" height="40" fill="#002395"/><rect x="20" width="20" height="40" fill="#fff"/><rect x="40" width="20" height="40" fill="#ED2939"/>`),
  bg: svg(60, 36, `<rect width="60" height="12" fill="#fff"/><rect y="12" width="60" height="12" fill="#00966E"/><rect y="24" width="60" height="12" fill="#D62612"/>`),
};

await mkdir("public/flags", { recursive: true });
for (const [code, markup] of Object.entries(flags)) {
  await writeFile(`public/flags/${code}.svg`, markup, "utf8");
  console.log(`public/flags/${code}.svg  ${markup.length} bytes`);
}
