/* SPDX-License-Identifier: Apache-2.0 */
/**
 * snap.js — snapping to the PDF's own linework while measuring (0.4 item T1). DOM-free (tested in Node).
 *
 * The page's vector paths come from pdf.js's operator list (the same one it draws from), in PDF user space:
 *   const lw = await pageLinework(pdfjs, page)          → { segs: Float64Array [x1,y1,x2,y2, …], curve: Uint8Array, n, truncated }
 *   const idx = new SnapIndex(lw)
 *   idx.snap({x, y}, tol)                               → { x, y, kind: 'end'|'mid'|'int'|'near', d } | null
 *
 * Lines and polygon edges are kept as they are; Bézier curves are flattened (their two ends are real end points,
 * the points in between are not, and their chords have no midpoint). Clipping paths are not drawn, so they are
 * skipped; form XObjects (blocks drawn inside the page) are followed with their matrix. Text drawn as glyphs is
 * not linework. A drawing with more than `maxSegs` segments keeps the first `maxSegs` and says so (`truncated`).
 *
 * Choice inside the tolerance (user units): the nearest end point, intersection or midpoint wins; with none, the
 * nearest point on a line ("on the line"). Intersections are computed only among the segments near the pointer.
 */

const CURVE_STEPS = 8;
export const MAX_SEGS = 400000;

/** Segments of a pdf.js operator list. `OPS` = pdfjs.OPS; `ops` = { fnArray, argsArray }. Pure. */
export function extractSegments(OPS, ops, { maxSegs = MAX_SEGS } = {}) {
  const out = new Float64Array(Math.min(maxSegs, 4096) * 4);
  let segs = out, curve = new Uint8Array(segs.length / 4), n = 0, truncated = false;
  let ctm = [1, 0, 0, 1, 0, 0];
  const stack = [];
  const mul = (m, k) => [m[0] * k[0] + m[2] * k[1], m[1] * k[0] + m[3] * k[1], m[0] * k[2] + m[2] * k[3], m[1] * k[2] + m[3] * k[3], m[0] * k[4] + m[2] * k[5] + m[4], m[1] * k[4] + m[3] * k[5] + m[5]];
  // curve[n]: 0 a straight segment; else 1 (a chord of a flattened curve) | 2 (it starts at the curve's start) | 4 (it ends at its end)
  const push = (ax, ay, bx, by, flags) => {
    if (n >= maxSegs) { truncated = true; return; }
    if (!(Number.isFinite(ax) && Number.isFinite(ay) && Number.isFinite(bx) && Number.isFinite(by))) return;
    if (ax === bx && ay === by) return;
    if (n * 4 >= segs.length) {
      const grow = new Float64Array(Math.min(maxSegs * 4, segs.length * 2)); grow.set(segs); segs = grow;
      const g2 = new Uint8Array(segs.length / 4); g2.set(curve); curve = g2;
    }
    segs[n * 4] = ax; segs[n * 4 + 1] = ay; segs[n * 4 + 2] = bx; segs[n * 4 + 3] = by;
    curve[n] = flags;
    n++;
  };
  const fn = ops.fnArray, args = ops.argsArray;
  for (let i = 0; i < fn.length && !truncated; i++) {
    const f = fn[i], a = args[i];
    if (f === OPS.save) stack.push(ctm);
    else if (f === OPS.restore) ctm = stack.pop() || ctm;
    else if (f === OPS.transform) ctm = mul(ctm, a);
    else if (f === OPS.paintFormXObjectBegin) { stack.push(ctm); if (Array.isArray(a?.[0]) || ArrayBuffer.isView(a?.[0])) ctm = mul(ctm, Array.from(a[0])); }
    else if (f === OPS.paintFormXObjectEnd) ctm = stack.pop() || ctm;
    else if (f === OPS.constructPath) {
      if (a?.[0] === OPS.endPath) continue;            // a clipping path: never drawn
      const d = a?.[1]?.[0];
      if (!d || typeof d.length !== 'number') continue;
      const m = ctm;
      const X = (x, y) => m[0] * x + m[2] * y + m[4], Y = (x, y) => m[1] * x + m[3] * y + m[5];
      let px = NaN, py = NaN, sx = NaN, sy = NaN;
      for (let k = 0; k < d.length;) {
        const c = d[k];
        if (c === 0) { px = X(d[k + 1], d[k + 2]); py = Y(d[k + 1], d[k + 2]); sx = px; sy = py; k += 3; }
        else if (c === 1) { const qx = X(d[k + 1], d[k + 2]), qy = Y(d[k + 1], d[k + 2]); push(px, py, qx, qy, 0); px = qx; py = qy; k += 3; }
        else if (c === 2 || c === 3) {
          // cubic (2: c1, c2, end) or quadratic (3: c, end), flattened
          const pts = c === 2 ? [d[k + 1], d[k + 2], d[k + 3], d[k + 4], d[k + 5], d[k + 6]] : [d[k + 1], d[k + 2], d[k + 3], d[k + 4]];
          const ex = X(pts.at(-2), pts.at(-1)), ey = Y(pts.at(-2), pts.at(-1));
          let lx = px, ly = py;
          for (let s = 1; s <= CURVE_STEPS; s++) {
            const t = s / CURVE_STEPS, u = 1 - t;
            let x, y;
            if (c === 2) {
              const c1x = X(pts[0], pts[1]), c1y = Y(pts[0], pts[1]), c2x = X(pts[2], pts[3]), c2y = Y(pts[2], pts[3]);
              x = u * u * u * px + 3 * u * u * t * c1x + 3 * u * t * t * c2x + t * t * t * ex;
              y = u * u * u * py + 3 * u * u * t * c1y + 3 * u * t * t * c2y + t * t * t * ey;
            } else {
              const cx = X(pts[0], pts[1]), cy = Y(pts[0], pts[1]);
              x = u * u * px + 2 * u * t * cx + t * t * ex;
              y = u * u * py + 2 * u * t * cy + t * t * ey;
            }
            if (s === CURVE_STEPS) { x = ex; y = ey; }
            push(lx, ly, x, y, 1 | (s === 1 ? 2 : 0) | (s === CURVE_STEPS ? 4 : 0));
            lx = x; ly = y;
          }
          px = ex; py = ey;
          k += c === 2 ? 7 : 5;
        } else if (c === 4) { if (Number.isFinite(sx)) push(px, py, sx, sy, 0); px = sx; py = sy; k += 1; }
        else break;                                         // unknown drawing op: stop reading this path
      }
    }
  }
  return { segs: segs.subarray(0, n * 4), curve: curve.subarray(0, n), n, truncated };
}

/** The linework of a pdf.js page (its display operator list). */
export async function pageLinework(pdfjs, page, opts = {}) {
  const ops = await page.getOperatorList();
  return extractSegments(pdfjs.OPS, ops, opts);
}

/** A uniform grid over the segments, for "what is near the pointer". */
export class SnapIndex {
  constructor({ segs, curve, n }) {
    this.segs = segs; this.curve = curve || new Uint8Array(n); this.n = n;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (let i = 0; i < n * 4; i += 2) { const x = segs[i], y = segs[i + 1]; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    if (!n) { x0 = y0 = 0; x1 = y1 = 1; }
    const span = Math.max(x1 - x0, y1 - y0, 1);
    const cols = Math.max(1, Math.min(1024, Math.round(Math.sqrt(n) * 2)));
    this.cell = span / cols;
    this.x0 = x0; this.y0 = y0;
    this.cols = Math.max(1, Math.ceil((x1 - x0) / this.cell) + 1);
    this.rows = Math.max(1, Math.ceil((y1 - y0) / this.cell) + 1);
    this.grid = new Map();
    for (let s = 0; s < n; s++) this.insert(s);
  }
  cellOf(x, y) { return [Math.floor((x - this.x0) / this.cell), Math.floor((y - this.y0) / this.cell)]; }
  insert(s) {
    const g = this.segs, ax = g[s * 4], ay = g[s * 4 + 1], bx = g[s * 4 + 2], by = g[s * 4 + 3];
    const len = Math.hypot(bx - ax, by - ay);
    const steps = Math.max(1, Math.ceil(len / (this.cell * 0.5)));
    let last = -1;
    for (let k = 0; k <= steps; k++) {
      const t = k / steps;
      const [cx, cy] = this.cellOf(ax + (bx - ax) * t, ay + (by - ay) * t);
      const key = cy * this.cols + cx;
      if (key === last) continue;
      last = key;
      let list = this.grid.get(key);
      if (!list) this.grid.set(key, (list = []));
      if (list[list.length - 1] !== s) list.push(s);
    }
  }
  /** Segment numbers whose cells are within `r` of p (deduped). */
  near(p, r) {
    const [c0, r0] = this.cellOf(p.x - r, p.y - r), [c1, r1] = this.cellOf(p.x + r, p.y + r);
    const seen = new Set();
    for (let cy = Math.max(0, r0); cy <= Math.min(this.rows - 1, r1); cy++) {
      for (let cx = Math.max(0, c0); cx <= Math.min(this.cols - 1, c1); cx++) {
        const list = this.grid.get(cy * this.cols + cx);
        if (list) for (const s of list) seen.add(s);
      }
    }
    return [...seen];
  }
  /**
   * The snap point for p within tol (user units), or null.
   * `kinds` limits what is offered: { end, mid, int, near } (all true by default).
   */
  snap(p, tol, kinds = {}) {
    const want = { end: true, mid: true, int: true, near: true, ...kinds };
    const g = this.segs, cur = this.curve;
    const cand = this.near(p, tol).filter((s) => distSeg(p, g, s) <= tol);
    if (!cand.length) return null;
    let best = null;
    const RANK = { end: 0, int: 1, mid: 2 };     // the same spot found twice (a crossing at a midpoint): the stronger name
    const offer = (x, y, kind) => {
      const d = Math.hypot(x - p.x, y - p.y);
      if (d > tol) return;
      if (!best || d < best.d - 1e-9 || (Math.abs(d - best.d) <= 1e-9 && RANK[kind] < RANK[best.kind])) best = { x, y, kind, d };
    };
    for (const s of cand) {
      const ax = g[s * 4], ay = g[s * 4 + 1], bx = g[s * 4 + 2], by = g[s * 4 + 3];
      if (want.end) {
        // a flattened curve's inner chord points are not ends; its own two ends are
        if (!cur[s] || cur[s] & 2) offer(ax, ay, 'end');
        if (!cur[s] || cur[s] & 4) offer(bx, by, 'end');
      }
      if (want.mid && !cur[s]) offer((ax + bx) / 2, (ay + by) / 2, 'mid');
    }
    if (want.int) {
      const list = cand.slice(0, 80);
      for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
        const q = intersect(g, list[i], list[j]);
        if (q) offer(q.x, q.y, 'int');
      }
    }
    if (best) return best;
    if (!want.near) return null;
    for (const s of cand) {
      const q = closestOnSeg(p, g, s);
      const d = Math.hypot(q.x - p.x, q.y - p.y);
      if (!best || d < best.d) best = { x: q.x, y: q.y, kind: 'near', d };
    }
    return best && best.d <= tol ? best : null;
  }
}

function closestOnSeg(p, g, s) {
  const ax = g[s * 4], ay = g[s * 4 + 1], bx = g[s * 4 + 2], by = g[s * 4 + 3];
  const dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy;
  const t = L ? Math.max(0, Math.min(1, ((p.x - ax) * dx + (p.y - ay) * dy) / L)) : 0;
  return { x: ax + dx * t, y: ay + dy * t };
}
function distSeg(p, g, s) { const q = closestOnSeg(p, g, s); return Math.hypot(q.x - p.x, q.y - p.y); }

/** Where two segments cross (ends included), or null (parallel, or apart). */
export function intersect(g, s, t) {
  const ax = g[s * 4], ay = g[s * 4 + 1], bx = g[s * 4 + 2], by = g[s * 4 + 3];
  const cx = g[t * 4], cy = g[t * 4 + 1], dx = g[t * 4 + 2], dy = g[t * 4 + 3];
  const rx = bx - ax, ry = by - ay, sx = dx - cx, sy = dy - cy;
  const den = rx * sy - ry * sx;
  if (Math.abs(den) < 1e-12 * Math.max(1, Math.hypot(rx, ry) * Math.hypot(sx, sy))) return null;
  const u = ((cx - ax) * sy - (cy - ay) * sx) / den, v = ((cx - ax) * ry - (cy - ay) * rx) / den;
  const e = 1e-9;
  if (u < -e || u > 1 + e || v < -e || v > 1 + e) return null;
  // two pieces that only meet end to end (a corner, a curve's chords) do not cross: that point is an end, or nothing
  const atEnd = (w) => w < e || w > 1 - e;
  if (atEnd(u) && atEnd(v)) return null;
  return { x: ax + rx * u, y: ay + ry * u };
}

export const SNAP_LABELS = { end: 'snap.end', mid: 'snap.mid', int: 'snap.int', near: 'snap.near' };
