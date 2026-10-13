/* SPDX-License-Identifier: Apache-2.0 */
/**
 * overlay.js — revision overlay (0.4 item T13): line an old sheet up with its revision, see what changed, and move the
 * takeoff onto the new sheet with the marks whose drawing changed flagged for review. DOM-free (tested in Node).
 *
 * Coordinates: each sheet has its own PDF user space. The alignment `A` maps OLD user space → NEW user space: the
 * identity when the drawing sits at the same place on both pages, else a similarity (move + turn + uniform scale) from
 * two pairs of points picked on both sheets (`fitTwoPoints`).
 *
 * Change detection works on ink rasters ({ data: Float32Array 0 = paper … 1 = ink, w, h }, as match.js `toInk` makes
 * them), each rendered in its own sheet's display space at `px` pixels per display unit:
 *   const old2new = warp(oldInk, pixelMap, newInk.w, newInk.h)     ink of the old sheet seen in the new raster's pixels
 *   const mask = changeMask(old2new, newInk, { r: 2 })              1 = ink only in the old (removed), 2 = only in the new (added)
 *   markChange(mark, mask, toPx, { buffer })                        → { removed, added, total } pixels near the mark
 * `r` forgives small shifts (anti-aliasing, a re-plot a hair off): ink counts as unchanged when the other sheet has ink
 * within r pixels.
 */

import { apply, multiply, invert, flatten } from './geom.js';

export const IDENTITY = [1, 0, 0, 1, 0, 0];

/** The similarity taking a1 → b1 and a2 → b2 (no mirror). → matrix | null when a1 = a2 or b1 = b2. */
export function fitTwoPoints(a1, a2, b1, b2) {
  const ax = a2.x - a1.x, ay = a2.y - a1.y, bx = b2.x - b1.x, by = b2.y - b1.y;
  const la = ax * ax + ay * ay;
  if (!(la > 0) || !(bx * bx + by * by > 0)) return null;
  // b = s·R·a: as a complex number, (bx + i by) / (ax + i ay)
  const c = (bx * ax + by * ay) / la, s = (by * ax - bx * ay) / la;
  return [c, s, -s, c, b1.x - (c * a1.x - s * a1.y), b1.y - (s * a1.x + c * a1.y)];
}
/** The uniform scale of a similarity (how much longer a length is after it). */
export const scaleOf = (m) => Math.hypot(m[0], m[1]);

/**
 * Pixel map for warp(): NEW raster pixel → OLD raster pixel.
 * Tn, To: the sheets' display transforms (user → display); px: raster pixels per display unit; A: old user → new user.
 */
export function pixelMap(Tn, To, A, px) {
  const S = [px, 0, 0, px, 0, 0], Si = [1 / px, 0, 0, 1 / px, 0, 0];
  // new px → new display → new user → old user → old display → old px
  return multiply(S, multiply(To, multiply(invert(A), multiply(invert(Tn), Si))));
}

/** The old raster resampled into the new raster's pixels (bilinear; outside the old sheet = paper). */
export function warp(src, M, w, h) {
  const out = new Float32Array(w * h);
  const { data, w: sw, h: sh } = src;
  for (let y = 0; y < h; y++) {
    const cy = y + 0.5;
    for (let x = 0; x < w; x++) {
      const cx = x + 0.5;
      const u = M[0] * cx + M[2] * cy + M[4] - 0.5, v = M[1] * cx + M[3] * cy + M[5] - 0.5;
      const x0 = Math.floor(u), y0 = Math.floor(v);
      if (x0 < -1 || y0 < -1 || x0 >= sw || y0 >= sh) continue;
      const fx = u - x0, fy = v - y0;
      const at = (xx, yy) => (xx >= 0 && yy >= 0 && xx < sw && yy < sh ? data[yy * sw + xx] : 0);
      out[y * w + x] = (at(x0, y0) * (1 - fx) + at(x0 + 1, y0) * fx) * (1 - fy) + (at(x0, y0 + 1) * (1 - fx) + at(x0 + 1, y0 + 1) * fx) * fy;
    }
  }
  return { data: out, w, h };
}

/** Max filter with a square of radius r (separable). */
export function dilate(img, r) {
  const { data, w, h } = img;
  if (r <= 0) return { data: data.slice(), w, h };
  const tmp = new Float32Array(w * h), out = new Float32Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let m = 0;
    for (let k = Math.max(0, x - r); k <= Math.min(w - 1, x + r); k++) if (data[y * w + k] > m) m = data[y * w + k];
    tmp[y * w + x] = m;
  }
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let m = 0;
    for (let k = Math.max(0, y - r); k <= Math.min(h - 1, y + r); k++) if (tmp[k * w + x] > m) m = tmp[k * w + x];
    out[y * w + x] = m;
  }
  return { data: out, w, h };
}

/**
 * Where the two sheets differ: 1 = ink only in the old (removed), 2 = ink only in the new (added), 0 = same.
 * `on`: how dark a pixel must be to count as ink; `off`: how light the other sheet must stay within r pixels.
 */
export function changeMask(oldImg, newImg, { r = 2, on = 0.35, off = 0.2 } = {}) {
  const { w, h } = newImg;
  const dOld = dilate(oldImg, r).data, dNew = dilate(newImg, r).data;
  const a = oldImg.data, b = newImg.data;
  const mask = new Uint8Array(w * h);
  let removed = 0, added = 0;
  for (let i = 0; i < mask.length; i++) {
    if (a[i] >= on && dNew[i] < off) { mask[i] = 1; removed++; }
    else if (b[i] >= on && dOld[i] < off) { mask[i] = 2; added++; }
  }
  return { mask, w, h, removed, added };
}

/**
 * How much the drawing changed under a mark (in the new raster). `toPx(p)` maps the mark's points (old user space) to new
 * raster pixels. Along its path (a run, an area's outlines; a count is its point), every pixel step asks "is there
 * changed ink within `buffer` pixels?":
 *   { removed, added, total }   changed pixels within `buffer` of the path
 *   share                       the part of the path that has changed ink beside it (0…1)
 *   corner                      the drawing changed at one of its points (an end moved, a corner, a wall got longer)
 * `changed(r, kind)` is the rule the app flags by.
 */
export function markChange(m, cm, toPx, { buffer = 8 } = {}) {
  const { mask, w, h } = cm;
  const S = cm.sum || (cm.sum = sumOf(mask, w, h));
  const any = (x, y) => boxSum(S, w, h, x - buffer, y - buffer, x + buffer, y + buffer) > 0;
  const rings = m.kind === 'area' ? [[m.pts, true], ...(m.holes || []).map((r) => [r, true])] : [[m.pts, false]];
  const segs = [], corners = [];
  for (const [ring, closed] of rings) {
    for (const p of ring) corners.push(toPx(p));
    const pts = flatten(ring, closed).map(toPx);
    if (pts.length === 1) segs.push([pts[0], pts[0]]);
    for (let i = 1; i < pts.length; i++) segs.push([pts[i - 1], pts[i]]);
    if (closed && pts.length > 2) segs.push([pts[pts.length - 1], pts[0]]);
  }
  if (!segs.length) return { removed: 0, added: 0, total: 0, share: 0, corner: false };
  // the share of the path with changed ink beside it, one sample per pixel
  let samples = 0, hit = 0;
  for (const [a, b] of segs) {
    const n = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.y - a.y)));
    for (let k = 0; k <= n; k++) { samples++; if (any(a.x + (b.x - a.x) * k / n, a.y + (b.y - a.y) * k / n)) hit++; }
  }
  const corner = corners.some((c) => any(c.x, c.y));
  // changed pixels near the path, by kind
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [p, q] of segs) for (const s of [p, q]) { x0 = Math.min(x0, s.x); y0 = Math.min(y0, s.y); x1 = Math.max(x1, s.x); y1 = Math.max(y1, s.y); }
  const bx0 = Math.max(0, Math.floor(x0 - buffer)), by0 = Math.max(0, Math.floor(y0 - buffer));
  const bx1 = Math.min(w - 1, Math.ceil(x1 + buffer)), by1 = Math.min(h - 1, Math.ceil(y1 + buffer));
  const b2 = buffer * buffer;
  let removed = 0, added = 0;
  for (let y = by0; y <= by1; y++) for (let x = bx0; x <= bx1; x++) {
    const v = mask[y * w + x];
    if (!v) continue;
    const p = { x: x + 0.5, y: y + 0.5 };
    if (!segs.some(([a, b]) => d2seg(p, a, b) <= b2)) continue;
    if (v === 1) removed++; else added++;
  }
  return { removed, added, total: removed + added, share: samples ? hit / samples : 0, corner };
}

/** The flag rule: a count when anything changed by it; a run or an area when its corners/ends changed or ≥ `share` of it did. */
export const changed = (r, kind, share = 0.15) => (kind === 'count' ? r.total > 0 : r.corner || r.share >= share);

/** Summed-area table of a mask (nonzero = 1), (w + 1) × (h + 1). */
export function sumOf(mask, w, h) {
  const S = new Uint32Array((w + 1) * (h + 1));
  for (let y = 0; y < h; y++) {
    let row = 0;
    for (let x = 0; x < w; x++) {
      row += mask[y * w + x] ? 1 : 0;
      S[(y + 1) * (w + 1) + x + 1] = S[y * (w + 1) + x + 1] + row;
    }
  }
  return S;
}
/** How many nonzero mask pixels in the box [x0, x1] × [y0, y1] (clipped). */
export function boxSum(S, w, h, x0, y0, x1, y1) {
  x0 = Math.max(0, Math.floor(x0)); y0 = Math.max(0, Math.floor(y0));
  x1 = Math.min(w - 1, Math.floor(x1)); y1 = Math.min(h - 1, Math.floor(y1));
  if (x1 < x0 || y1 < y0) return 0;
  const W = w + 1;
  return S[(y1 + 1) * W + x1 + 1] - S[y0 * W + x1 + 1] - S[(y1 + 1) * W + x0] + S[y0 * W + x0];
}

function d2seg(p, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y, L = dx * dx + dy * dy;
  const t = L ? Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / L)) : 0;
  const x = a.x + dx * t - p.x, y = a.y + dy * t - p.y;
  return x * x + y * y;
}

/** A point list moved by A (bulges kept: a similarity without a mirror keeps every arc's turn). */
export const movePts = (pts, A) => pts.map((p) => { const q = apply(A, p); return p.b ? { x: q.x, y: q.y, b: p.b } : { x: q.x, y: q.y }; });
