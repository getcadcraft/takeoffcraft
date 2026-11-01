/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pickpath.js — pick a PDF's own linework and measure the whole connected path (0.8 SU.880). DOM-free (tested in Node).
 *
 * Works on a snap.js SnapIndex (the page's vector segments in PDF user units):
 *   candidatesAt(idx, p, pickTol, gap)   → [path] the paths near the pointer, nearest first (Tab cycles them)
 *   chainFrom(idx, seg, gap)             → path: the segment and everything joined to it end to end within `gap`
 *   loopsAround(idx, p, gap)             → [path] closed paths with p inside, smallest first (click inside = an area)
 *   trimLast(path) / pathPoints(path)    → drop the last segment (undo per segment) / the vertices to measure
 *
 * A path = { seed, segs: [{ s, rev, gap }], closed, gaps: [{ x, y, d }] } — `segs` run in order, `rev` says the segment is
 * walked from its second end to its first, `gap` is the hole bridged between it and the one before (0 = they touch).
 * At a junction the way that bends least is followed. A segment is never used twice. Pure; the index is only read.
 */

export const MAX_PATH_SEGS = 20000;
export const GAP_MIN = 0.05, GAP_MAX = 60, GAP_DEFAULT = 1.5;      // user units (PDF points)

const ends = (g, s, rev) => (rev ? [g[s * 4 + 2], g[s * 4 + 3], g[s * 4], g[s * 4 + 1]] : [g[s * 4], g[s * 4 + 1], g[s * 4 + 2], g[s * 4 + 3]]);
const angleOf = (ax, ay, bx, by) => Math.atan2(by - ay, bx - ax);
const turn = (a, b) => { let d = Math.abs(a - b) % (2 * Math.PI); if (d > Math.PI) d = 2 * Math.PI - d; return d; };

/** The next segment from the point (x, y) heading `dir`: the unused one with an end within `gap`, bending least. */
function nextFrom(idx, used, x, y, dir, gap) {
  const g = idx.segs;
  let best = null;
  for (const s of idx.near({ x, y }, gap)) {
    if (used.has(s)) continue;
    for (const rev of [false, true]) {
      const [ax, ay, bx, by] = ends(g, s, rev);
      const d = Math.hypot(ax - x, ay - y);
      if (d > gap) continue;
      const t = turn(dir, angleOf(ax, ay, bx, by));
      // a clean junction beats a gap; among equals the smaller bend wins
      const score = t + (d > 1e-9 ? 0.01 : 0);
      if (!best || score < best.score) best = { s, rev, d, score };
    }
  }
  return best;
}

function extend(idx, used, tail, gap, out, limit) {
  const g = idx.segs;
  for (;;) {
    if (out.length >= limit) return;
    const [ax, ay, bx, by] = ends(g, tail.s, tail.rev);
    const nx = nextFrom(idx, used, bx, by, angleOf(ax, ay, bx, by), gap);
    if (!nx) return;
    used.add(nx.s);
    const e = { s: nx.s, rev: nx.rev, gap: nx.d > 1e-9 ? nx.d : 0 };
    out.push(e);
    tail = e;
  }
}

/** The path through `seed`, grown both ways until it ends, closes or meets a segment already used. */
export function chainFrom(idx, seed, gap = GAP_DEFAULT) {
  const g = idx.segs;
  gap = Math.min(GAP_MAX, Math.max(GAP_MIN, gap));
  const used = new Set([seed]);
  const fwd = [];
  extend(idx, used, { s: seed, rev: false }, gap, fwd, MAX_PATH_SEGS);
  // the other way: walk from the seed's first end, reversed, then flip that run back into order
  const back = [];
  extend(idx, used, { s: seed, rev: true }, gap, back, MAX_PATH_SEGS - fwd.length);
  const segs = [];
  for (let i = back.length - 1; i >= 0; i--) segs.push({ s: back[i].s, rev: !back[i].rev, gap: 0 });
  segs.push({ s: seed, rev: false, gap: 0 });
  segs.push(...fwd);
  // gaps belong to the join they sit in: recompute from the geometry, which is the same either way
  const gaps = [];
  for (let i = 1; i < segs.length; i++) {
    const [, , px, py] = ends(g, segs[i - 1].s, segs[i - 1].rev), [qx, qy] = ends(g, segs[i].s, segs[i].rev);
    const d = Math.hypot(qx - px, qy - py);
    segs[i].gap = d > 1e-9 ? d : 0;
  }
  return finish({ seed, segs }, g, gap);
}

function finish(path, g, gap) {
  const segs = path.segs;
  path.gaps = [];
  for (let i = 1; i < segs.length; i++) if (segs[i].gap > 0) {
    const [, , px, py] = ends(g, segs[i - 1].s, segs[i - 1].rev), [qx, qy] = ends(g, segs[i].s, segs[i].rev);
    path.gaps.push({ x: (px + qx) / 2, y: (py + qy) / 2, d: segs[i].gap });
  }
  path.closed = false;
  if (segs.length >= 3) {
    const [hx, hy] = ends(g, segs[0].s, segs[0].rev), [, , tx, ty] = ends(g, segs.at(-1).s, segs.at(-1).rev);
    const d = Math.hypot(hx - tx, hy - ty);
    if (d <= gap) { path.closed = true; path.closeGap = d > 1e-9 ? d : 0; if (path.closeGap) path.gaps.push({ x: (hx + tx) / 2, y: (hy + ty) / 2, d: path.closeGap }); }
  }
  path.gap = gap;
  path.g = g;
  return path;
}

/** The path without its last segment (Backspace / undo per segment). null when nothing is left. */
export function trimLast(path) {
  if (path.segs.length <= 1) return null;
  return finish({ seed: path.seed, segs: path.segs.slice(0, -1) }, path.g, path.gap);
}

/** The vertices of a path in order (a closed path does not repeat its first point). */
export function pathPoints(path) {
  const g = path.g, pts = [];
  const add = (x, y) => { const q = pts.at(-1); if (!q || Math.hypot(q.x - x, q.y - y) > 1e-9) pts.push({ x, y }); };
  for (const e of path.segs) { const [ax, ay, bx, by] = ends(g, e.s, e.rev); add(ax, ay); add(bx, by); }
  if (path.closed && pts.length > 1 && Math.hypot(pts[0].x - pts.at(-1).x, pts[0].y - pts.at(-1).y) <= path.gap) pts.pop();
  return pts;
}

/** Length of the path in user units, bridged gaps included (the straight hop across each). */
export function pathLength(path) {
  const pts = pathPoints(path);
  let L = 0;
  for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
  if (path.closed && pts.length > 2) L += Math.hypot(pts[0].x - pts.at(-1).x, pts[0].y - pts.at(-1).y);
  return L;
}

/** Area of the closed path's outline in user units squared (shoelace), 0 when it is open. */
export function pathArea(path) {
  if (!path.closed) return 0;
  const pts = pathPoints(path);
  let a = 0;
  for (let i = 0; i < pts.length; i++) { const p = pts[i], q = pts[(i + 1) % pts.length]; a += p.x * q.y - q.x * p.y; }
  return Math.abs(a) / 2;
}

function distToSeg(p, g, s) {
  const ax = g[s * 4], ay = g[s * 4 + 1], bx = g[s * 4 + 2], by = g[s * 4 + 3];
  const dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy;
  const t = L ? Math.max(0, Math.min(1, ((p.x - ax) * dx + (p.y - ay) * dy) / L)) : 0;
  return Math.hypot(ax + dx * t - p.x, ay + dy * t - p.y);
}

/** The paths of the lines within `pickTol` of p, nearest first; two segments of one path give one candidate. */
export function candidatesAt(idx, p, pickTol, gap = GAP_DEFAULT, limit = 6, chain = chainFrom) {
  const g = idx.segs;
  const near = idx.near(p, pickTol).map((s) => [s, distToSeg(p, g, s)]).filter(([, d]) => d <= pickTol).sort((a, b) => a[1] - b[1]);
  const out = [], taken = new Set();
  for (const [s] of near) {
    if (taken.has(s)) continue;
    const path = chain(idx, s, gap);
    for (const e of path.segs) taken.add(e.s);
    out.push(path);
    if (out.length >= limit) break;
  }
  return out;
}

/** True when p is inside the polygon (even-odd). */
export function inside(pts, p) {
  let c = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const a = pts[i], b = pts[j];
    if ((a.y > p.y) !== (b.y > p.y) && p.x < ((b.x - a.x) * (p.y - a.y)) / (b.y - a.y) + a.x) c = !c;
  }
  return c;
}

/**
 * Closed paths that have p inside, smallest first. Looks along four rays from p and follows the segment each meets
 * first; a hit whose chain closes around p is a loop. Reads every segment once per click (never while hovering).
 */
export function loopsAround(idx, p, gap = GAP_DEFAULT, limit = 6) {
  const g = idx.segs, n = idx.n;
  const hits = [];
  for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const along = [];                                 // every segment the ray crosses, nearest first: an outer loop lies behind an inner one
    for (let s = 0; s < n; s++) {
      const ax = g[s * 4], ay = g[s * 4 + 1], bx = g[s * 4 + 2], by = g[s * 4 + 3];
      const ex = bx - ax, ey = by - ay, den = dx * ey - dy * ex;
      if (Math.abs(den) < 1e-12) continue;
      const t = ((ax - p.x) * ey - (ay - p.y) * ex) / den, u = ((ax - p.x) * dy - (ay - p.y) * dx) / den;
      if (t > 1e-9 && u >= -1e-9 && u <= 1 + 1e-9) along.push({ s, t });
    }
    along.sort((a, b) => a.t - b.t);
    for (const h of along.slice(0, 12)) hits.push(h.s);
  }
  const out = [], seen = new Set();
  for (const s of hits) {
    if (seen.has(s)) continue;
    const path = chainFrom(idx, s, gap);
    for (const e of path.segs) seen.add(e.s);
    if (path.closed && inside(pathPoints(path), p)) out.push(path);
  }
  out.sort((a, b) => pathArea(a) - pathArea(b));
  return out.slice(0, limit);
}

/** Next gap when [ or ] is pressed (a third smaller / larger, kept in range). */
export function stepGap(gap, dir) { return Math.min(GAP_MAX, Math.max(GAP_MIN, dir > 0 ? gap * 1.5 : gap / 1.5)); }
