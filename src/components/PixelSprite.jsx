// Tiny pixel-art renderer. Each sprite is a grid of characters; every character
// maps to a CSS colour variable so sprites follow the light/dark theme.

const COLORS = {
  o: 'var(--line)', // outline
  b: 'var(--lav)', // body
  h: 'var(--lav-hi)', // highlight
  d: 'var(--ink)', // d-pad
  a: 'var(--pink)',
  c: 'var(--mint)',
  y: 'var(--butter)',
  v: 'var(--sky)',
  w: 'var(--white)',
};

export const SPRITES = {
  gamepad: [
    '...oooooooooooooo...',
    '..ohhhhhhhhhhhhhho..',
    '.obbbbbbbbbbbbbbbbo.',
    'obbbbdbbbbbbbbbabbbo',
    'obbdddddbbbbbcbbbybo',
    'obbbbdbbbbbbbbbvbbbo',
    'obbbbbbbbbbbbbbbbbbo',
    'obbbbbbbbbbbbbbbbbbo',
    'oobbbbbbbbbbbbbbbboo',
    '.oobbbboo..oobbbboo.',
    '..oobboo....oobboo..',
    '...oooo......oooo...',
  ],
  heart: [
    '.oo..oo.',
    'oaaoaaao',
    'oawaaaao',
    'oaaaaaao',
    '.oaaaao.',
    '..oaao..',
    '...oo...',
  ],
  star: [
    '...y...',
    '...y...',
    '..yyy..',
    'yyyyyyy',
    '..yyy..',
    '.yy.yy.',
    '.y...y.',
  ],
  sparkle: [
    '..c..',
    '..c..',
    'ccwcc',
    '..c..',
    '..c..',
  ],
  chip: [
    '..o.o.o.o..',
    '.ooooooooo.',
    'oobbbbbbboo',
    '.obhhhhhbo.',
    'oobbbbbbboo',
    '.obbbwbbbo.',
    'oobbbbbbboo',
    '.ooooooooo.',
    '..o.o.o.o..',
  ],
};

function buildPaths(rows) {
  const byColor = {};
  rows.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (ch === '.' || !COLORS[ch]) return;
      (byColor[ch] ||= []).push(`M${x} ${y}h1v1h-1z`);
    });
  });
  return Object.entries(byColor);
}

export default function PixelSprite({ name, size = 4, className = '', title }) {
  const rows = SPRITES[name];
  if (!rows) return null;
  const w = rows[0].length;
  const h = rows.length;

  return (
    <svg
      className={`sprite ${className}`}
      viewBox={`0 0 ${w} ${h}`}
      width={w * size}
      height={h * size}
      shapeRendering="crispEdges"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {buildPaths(rows).map(([ch, d]) => (
        <path key={ch} d={d.join('')} fill={COLORS[ch]} />
      ))}
    </svg>
  );
}
