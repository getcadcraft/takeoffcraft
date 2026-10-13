/* SPDX-License-Identifier: Apache-2.0 */
/**
 * roomfill.js — find the room around a point by flood fill (0.4 item T21). DOM-free (tested in Node).
 *
 *   roomAt(ink, seed, { gapPx, on }) → { ok: true, ring: [{x, y}] (pixel corners), px: area in pixels } | { ok: false, why }
 *     ink    { data: Float32Array 0 = paper … 1 = ink, w, h } — the sheet as match.js `toInk` makes it
 *     seed   the clicked pixel
 *     gapPx  door openings up to this wide (in pixels) count as closed
 *     why    'wall' (the click is on a line), 'open' (the fill reaches the sheet's edge, or most of it: a gap wider than
 *            gapPx), 'small' (a few pixels: a symbol, not a room)
 *
 * How: the lines are thickened by half the gap so door openings close; the room is flood-filled from the seed among what is
 * left; then it grows back by the same amount, up to the lines' faces. Its outer boundary is traced along pixel edges and
 * simplified (Douglas–Peucker), so text, furniture and fixtures inside the room do not make holes.
 */

/** Binary max filter with a (2r+1)² square, in O(n) whatever r (van Herk / Gil–Werman, by rows then columns). */
export function dilateBin(src, w, h, r) {
  if (r <= 0) return src.slice();
  const k = 2 * r + 1;
  const pass = (get, set, len, count) => {
    const g = new Uint8Array(len + 2 * r + k), hh = new Uint8Array(len + 2 * r + k);
    for (let line = 0; line < count; line++) {
      const n = len + 2 * r;                       // padded with r zeros at both ends
      const at = (i) => (i >= r && i < r + len ? get(line, i - r) : 0);
      for (let i = 0; i < n; i++) g[i] = i % k === 0 ? at(i) : g[i - 1] | at(i);
      for (let i = n - 1; i >= 0; i--) hh[i] = i === n - 1 || (i + 1) % k === 0 ? at(i) : hh[i + 1] | at(i);
      for (let x = 0; x < len; x++) {
        const a = x, b = x + 2 * r;                 // window [x - r, x + r] in the padded line
        set(line, x, hh[a] | (b < n ? g[b] : 0));
      }
    }
  };
  const tmp = new Uint8Array(w * h), out = new Uint8Array(w * h);
  pass((y, x) => src[y * w + x], (y, x, v) => { tmp[y * w + x] = v; }, w, h);
  pass((x, y) => tmp[y * w + x], (x, y, v) => { out[y * w + x] = v; }, h, w);
  return out;
}

export function roomAt(ink, seed, { gapPx = 20, on = 0.25, maxShare = 0.6 } = {}) {
  const { data, w, h } = ink;
  const sx = Math.floor(seed.x), sy = Math.floor(seed.y);
  if (sx < 0 || sy < 0 || sx >= w || sy >= h) return { ok: false, why: 'open' };
  const wall = new Uint8Array(w * h);
  for (let i = 0; i < wall.length; i++) wall[i] = data[i] >= on ? 1 : 0;
  if (wall[sy * w + sx]) return { ok: false, why: 'wall' };
  const r = Math.max(1, Math.round(gapPx / 2));
  const closed = dilateBin(wall, w, h, r);
  // the seed may sit within r of a line (a narrow closet, a click near a wall): start from the nearest open pixel
  let start = sy * w + sx;
  if (closed[start]) {
    let best = -1, bd = Infinity;
    for (let y = Math.max(0, sy - r); y <= Math.min(h - 1, sy + r); y++) for (let x = Math.max(0, sx - r); x <= Math.min(w - 1, sx + r); x++) {
      const d = (x - sx) ** 2 + (y - sy) ** 2;
      if (!closed[y * w + x] && d < bd) { bd = d; best = y * w + x; }
    }
    if (best < 0) return { ok: false, why: 'small' };
    start = best;
  }
  // flood fill (4-connected) among the open pixels
  const region = new Uint8Array(w * h);
  const stack = new Int32Array(w * h);
  let sp = 0, n = 0, edge = false;
  region[start] = 1; stack[sp++] = start;
  while (sp) {
    const i = stack[--sp];
    n++;
    const x = i % w, y = (i - x) / w;
    if (x === 0 || y === 0 || x === w - 1 || y === h - 1) edge = true;
    if (x > 0 && !region[i - 1] && !closed[i - 1]) { region[i - 1] = 1; stack[sp++] = i - 1; }
    if (x < w - 1 && !region[i + 1] && !closed[i + 1]) { region[i + 1] = 1; stack[sp++] = i + 1; }
    if (y > 0 && !region[i - w] && !closed[i - w]) { region[i - w] = 1; stack[sp++] = i - w; }
    if (y < h - 1 && !region[i + w] && !closed[i + w]) { region[i + w] = 1; stack[sp++] = i + w; }
  }
  if (edge || n > maxShare * w * h) return { ok: false, why: 'open' };
  // grow back to the lines' faces (not into them, not through a door: only pixels near the filled part)
  const grown = dilateBin(region, w, h, r);
  for (let i = 0; i < grown.length; i++) if (wall[i]) grown[i] = 0;
  // keep the part connected to the seed (what grew past a line's end into another space is dropped)
  const keep = new Uint8Array(w * h);
  sp = 0; keep[start] = 1; stack[sp++] = start;
  let px = 0;
  while (sp) {
    const i = stack[--sp];
    px++;
    const x = i % w, y = (i - x) / w;
    for (const j of [x > 0 ? i - 1 : -1, x < w - 1 ? i + 1 : -1, y > 0 ? i - w : -1, y < h - 1 ? i + w : -1]) {
      if (j >= 0 && grown[j] && !keep[j]) { keep[j] = 1; stack[sp++] = j; }
    }
  }
  if (px < 4 * r * r) return { ok: false, why: 'small' };
  // close slits the grow-back leaves where text or a fixture stands near a wall (dilate, then erode, by half the radius;
  // never into the lines)
  const c = Math.max(1, Math.round(r / 2));
  const dil = dilateBin(keep, w, h, c);
  for (let i = 0; i < dil.length; i++) dil[i] = dil[i] ? 0 : 1;
  const outside = dilateBin(dil, w, h, c);
  for (let i = 0; i < keep.length; i++) keep[i] = !outside[i] && !wall[i] ? 1 : 0;
  const ring = simplify(trace(keep, w, h), 1.0);
  if (ring.length < 3) return { ok: false, why: 'small' };
  return { ok: true, ring, px };
}

/** The outer boundary of a mask, along pixel edges, keeping the region on the right (clockwise on screen). Corners only. */
export function trace(mask, w, h) {
  let s = -1;
  for (let i = 0; i < mask.length; i++) if (mask[i]) { s = i; break; }
  if (s < 0) return [];
  const inside = (x, y) => x >= 0 && y >= 0 && x < w && y < h && mask[y * w + x] === 1;
  const DX = [1, 0, -1, 0], DY = [0, 1, 0, -1];                 // E S W N (y down)
  // the pixels ahead on the right and on the left of a corner, by direction
  const AR = [[0, 0], [-1, 0], [-1, -1], [0, -1]], AL = [[0, -1], [0, 0], [-1, 0], [-1, -1]];
  const x0 = s % w, y0 = (s - x0) / w;
  let x = x0, y = y0, d = 0;
  const out = [];
  for (let guard = 0; guard < 4 * (w + h) * 64 + 16; guard++) {
    const rIn = inside(x + AR[d][0], y + AR[d][1]), lIn = inside(x + AL[d][0], y + AL[d][1]);
    const nd = !rIn ? (d + 1) % 4 : lIn ? (d + 3) % 4 : d;
    if (x === x0 && y === y0 && nd === 0 && out.length) break;
    if (nd !== d || !out.length) out.push({ x, y });
    d = nd;
    x += DX[d]; y += DY[d];
  }
  return out;
}

/** Douglas–Peucker on a closed ring. */
export function simplify(ring, eps) {
  if (ring.length < 4) return ring;
  // split at the two points farthest apart, simplify both halves
  let a = 0, b = 0, best = -1;
  for (let i = 0; i < ring.length; i++) { const d = (ring[i].x - ring[0].x) ** 2 + (ring[i].y - ring[0].y) ** 2; if (d > best) { best = d; b = i; } }
  const dp = (pts) => {
    if (pts.length < 3) return pts;
    const p = pts[0], q = pts[pts.length - 1];
    const dx = q.x - p.x, dy = q.y - p.y, L = Math.hypot(dx, dy) || 1;
    let k = -1, m = -1;
    for (let i = 1; i < pts.length - 1; i++) { const d = Math.abs((pts[i].x - p.x) * dy - (pts[i].y - p.y) * dx) / L; if (d > m) { m = d; k = i; } }
    if (m <= eps) return [p, q];
    const l = dp(pts.slice(0, k + 1)), r2 = dp(pts.slice(k));
    return [...l.slice(0, -1), ...r2];
  };
  const first = dp(ring.slice(a, b + 1)), second = dp([...ring.slice(b), ring[a]]);
  return [...first.slice(0, -1), ...second.slice(0, -1)];
}
