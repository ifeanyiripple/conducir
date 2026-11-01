/* =====================================================================
   Hexagon geometry
   The Conducir mark is built on a regular six sided polygon with a point at
   the top and a point at the bottom, so every hexagon on the site uses that
   same orientation. A framed hexagon is a gold band, a gap, then the inner
   shape, all cut from one outline so the border is the same thickness
   everywhere.
   ===================================================================== */

export type Pt = readonly [number, number];
export type Box = { x: number; y: number; w: number; h: number };

export const BORDER = 11; // outer gold band
export const GAP = 7; // ring between the gold band and the inside
export const EASE = [0.16, 1, 0.3, 1] as const;

/** Offset a convex, clockwise polygon inwards by `d` with sharp (mitred) corners. */
export function insetPolygon(pts: readonly Pt[], d: number): Pt[] {
  const n = pts.length;
  const lines = pts.map((p, i) => {
    const q = pts[(i + 1) % n];
    const dx = q[0] - p[0];
    const dy = q[1] - p[1];
    const len = Math.hypot(dx, dy);
    return { x: p[0] - (dy / len) * d, y: p[1] + (dx / len) * d, dx, dy };
  });
  return pts.map((_, i) => {
    const a = lines[(i - 1 + n) % n];
    const b = lines[i];
    const cross = a.dx * b.dy - a.dy * b.dx;
    const t = ((b.x - a.x) * b.dy - (b.y - a.y) * b.dx) / cross;
    return [a.x + t * a.dx, a.y + t * a.dy] as const;
  });
}

export function boundsOf(pts: readonly Pt[]): Box {
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const x = Math.min(...xs);
  const y = Math.min(...ys);
  return { x, y, w: Math.max(...xs) - x, h: Math.max(...ys) - y };
}

const pct = (v: number) => `${v.toFixed(3)}%`;

/** CSS clip-path for `pts`, expressed relative to `box`. */
export function clip(pts: readonly Pt[], box: Box) {
  return `polygon(${pts
    .map(([x, y]) => `${pct(((x - box.x) / box.w) * 100)} ${pct(((y - box.y) / box.h) * 100)}`)
    .join(', ')})`;
}

/** Regular hexagon with a point at the top and bottom (the Conducir mark's orientation). Clockwise. */
export function regularHex(cx: number, cy: number, r: number): Pt[] {
  const a = r * 0.866;
  return [
    [cx, cy - r],
    [cx + a, cy - r / 2],
    [cx + a, cy + r / 2],
    [cx, cy + r],
    [cx - a, cy + r / 2],
    [cx - a, cy - r / 2],
  ];
}

/** Build every layer a framed hexagon needs from one outline. */
export function frame(points: readonly Pt[], border = BORDER, gap = GAP) {
  const box = boundsOf(points);
  const ring = insetPolygon(points, border);
  const inner = insetPolygon(points, border + gap);
  return {
    box,
    ring,
    inner,
    outerClip: clip(points, box),
    ringClip: clip(ring, box),
    innerClip: clip(inner, box),
  };
}

const HEX_POINTS = regularHex(100, 100, 100);

/** Plain hexagon cut for small markers and bullets. Box is 173.2 wide by 200 tall. */
export const HEX = clip(HEX_POINTS, boundsOf(HEX_POINTS));

/** Width over height of a regular pointy top hexagon, for `aspect-ratio`. */
export const HEX_RATIO = '173.2 / 200';

/** Small framed hexagon used for badges (numbers, letters, initials). */
export const BADGE = frame(HEX_POINTS, 6, 4);

/** Large framed hexagon used for photos and portraits. */
export const PHOTO = frame(regularHex(250, 250, 250));
