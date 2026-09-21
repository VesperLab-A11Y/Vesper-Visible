// Récupère les .woff2 Noto statiques (sous-ensembles latin + latin-ext) depuis
// Fontsource via jsdelivr. Même approche que vesper-library et vesper-compass-sonar-public :
// les polices sont auto-hébergées, la page ne fait aucune requête tierce (Google Fonts).
// Usage : node scripts/fetch-fonts.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';

const OUT = new URL('../assets/fonts/', import.meta.url);
mkdirSync(OUT, { recursive: true });

// Vesper Visible n'utilise que Serif (titres, marque) et Sans (corps, UI) —
// pas de Sans Mono, aucun snippet de code n'est affiché en police mono ici.
const FONTS = [
  { family: 'noto-serif', subset: 'latin', weight: 400 },
  { family: 'noto-serif', subset: 'latin', weight: 600 },
  { family: 'noto-serif', subset: 'latin', weight: 700 },
  { family: 'noto-serif', subset: 'latin-ext', weight: 400 },
  { family: 'noto-serif', subset: 'latin-ext', weight: 600 },
  { family: 'noto-serif', subset: 'latin-ext', weight: 700 },
  { family: 'noto-sans', subset: 'latin', weight: 400 },
  { family: 'noto-sans', subset: 'latin', weight: 600 },
  { family: 'noto-sans', subset: 'latin', weight: 700 },
  { family: 'noto-sans', subset: 'latin-ext', weight: 400 },
  { family: 'noto-sans', subset: 'latin-ext', weight: 600 },
  { family: 'noto-sans', subset: 'latin-ext', weight: 700 },
];

// Version épinglée (au lieu de @latest) pour que le script reste reproductible,
// alignée sur celle de vesper-library/scripts/fetch-fonts.mjs.
const FONTSOURCE_VERSION = '5.3.0';

const hashes = new Set();

for (const font of FONTS) {
  const url = `https://cdn.jsdelivr.net/fontsource/fonts/${font.family}@${FONTSOURCE_VERSION}/${font.subset}-${font.weight}-normal.woff2`;
  const res = await fetch(url);

  if (!res.ok) throw new Error(`Fetch failed: ${url} (status ${res.status})`);

  const buf = Buffer.from(await res.arrayBuffer());

  if (buf[0] !== 119 || buf[1] !== 79 || buf[2] !== 70 || buf[3] !== 50) {
    throw new Error(`Invalid woff2 magic bytes in ${url}`);
  }

  const name = `${font.family}-${font.subset}-${font.weight}.woff2`;
  writeFileSync(new URL(name, OUT), buf);

  const hash = createHash('sha256').update(buf).digest('hex');
  if (hashes.has(hash)) {
    throw new Error(`Collision détectée : ${name} a le même hash qu'un fichier précédent`);
  }
  hashes.add(hash);

  console.log(`✓ ${name}  (${buf.length} o)`);
}

console.log(`\n${FONTS.length} fichier(s) écrit(s) dans assets/fonts/.`);
