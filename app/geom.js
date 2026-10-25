/* SPDX-License-Identifier: Apache-2.0 */

import { t } from './i18n.js';
/**
 * geom.js — plane geometry for takeoff marks, in PDF user space. DOM-free (tested in Node).
 * Points are {x, y}. Lengths come out in user-space units; units.js turns them into feet.
 */

export const dist = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);

/*
 * Arcs. A point may carry a bulge `b` (as in DXF): the segment that STARTS at that point is a
 * circular arc instead of a straight line. b = tan(θ / 4), θ = the arc's sweep, positive =
 * counter-clockwise in PDF user space (y up). b = 1 is a half circle; a full circle is two
 * points with b = 1 each. Lengths and areas of arcs are exact (r·|θ| and the circular segment
 * r²/2 · (θ − sin θ)); arcs are only broken into short chords for picking, drawing previews and
 * the crossing/inside checks, never for a quantity.
 */
export const hasArcs = (pts) => pts.some((p) => p.b);

/** Exact length of one segment p → q with bulge b. */
export function segLength(p, q, b = 0) {
  const c = dist(p, q);
  if (!b || !c) return c;
  const th = 4 * Math.atan(b);
  return Math.abs((c / 2) / Math.sin(th / 2) * th);
}

/** Signed area between the chord p → q and its arc (adds to signedArea; positive bulge = CCW). */
export function segArea(p, q, b = 0) {
  if (!b) return 0;
  const c = dist(p, q);
  if (!c) return 0;
  const th = 4 * Math.atan(b), r = c / (2 * Math.sin(th / 2));
  return r * r * (th - Math.sin(th)) / 2;
}

/** The arc's centre, radius, start angle and sweep (null for a straight segment). */
export function arcOf(p, q, b) {
  if (!b) return null;
  const c = dist(p, q);
  if (!c) return null;
  const th = 4 * Math.atan(b);
  const mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2;
  const k = (c / 2) / Math.tan(th / 2);                 // centre's distance left of p → q
  const cx = mx - (q.y - p.y) / c * k, cy = my + (q.x - p.x) / c * k;
  const r = Math.hypot(p.x - cx, p.y - cy);
  return { cx, cy, r, a0: Math.atan2(p.y - cy, p.x - cx), sweep: th };
}

/** Bulge of the arc that starts at p, passes through m and ends at q (0 if they are in a line). */
export function bulgeThrough(p, m, q) {
  const o = (m.x - p.x) * (q.y - p.y) - (m.y - p.y) * (q.x - p.x);
  const span = Math.max(dist(p, m), dist(m, q), dist(p, q));
  if (!span || Math.abs(o) <= 1e-9 * span * span) return 0;
  // circumcentre
  const ax = p.x, ay = p.y, bx = m.x, by = m.y, cx = q.x, cy = q.y;
  const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
  const ux = ((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / d;
  const uy = ((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / d;
  const a0 = Math.atan2(ay - uy, ax - ux), a2 = Math.atan2(cy - uy, cx - ux);
  let sweep = a2 - a0;
  // o = (m − p) × (q − p) > 0: the triangle p, m, q is counter-clockwise, and so is the arc p → m → q
  if (o > 0) { while (sweep <= 0) sweep += 2 * Math.PI; } else { while (sweep >= 0) sweep -= 2 * Math.PI; }
  return Math.tan(sweep / 4);
}

/** Points along the outline/run with arcs broken into chords of at most `step` radians. */
export function flatten(pts, closed = false, step = Math.PI / 36) {
  const out = [];
  const n = pts.length, segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const p = pts[i], q = pts[(i + 1) % n];
    out.push({ x: p.x, y: p.y });
    const a = arcOf(p, q, p.b);
    if (!a) continue;
    const k = Math.max(2, Math.ceil(Math.abs(a.sweep) / step));
    for (let j = 1; j < k; j++) { const t = a.a0 + a.sweep * j / k; out.push({ x: a.cx + a.r * Math.cos(t), y: a.cy + a.r * Math.sin(t) }); }
  }
  if (!closed && n) out.push({ x: pts[n - 1].x, y: pts[n - 1].y });
  return out;
}

/**
 * A run or outline as drawing commands: ['M', p], ['L', p], ['C', c1, c2, p] (arcs as cubic
 * Béziers of at most 90° each — what PDF content streams and the canvas both draw). Affine
 * transforms keep Béziers exact, so callers may map the points to the screen afterwards.
 */
export function pathOps(pts, closed = false) {
  const ops = [];
  const n = pts.length;
  if (!n) return ops;
  ops.push(['M', { x: pts[0].x, y: pts[0].y }]);
  const segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const p = pts[i], q = pts[(i + 1) % n];
    const a = arcOf(p, q, p.b);
    if (!a) { ops.push(['L', { x: q.x, y: q.y }]); continue; }
    const pieces = Math.max(1, Math.ceil(Math.abs(a.sweep) / (Math.PI / 2) - 1e-9));
    const phi = a.sweep / pieces, k = 4 / 3 * Math.tan(phi / 4);
    for (let j = 0; j < pieces; j++) {
      const t0 = a.a0 + phi * j, t1 = t0 + phi;
      const p0 = { x: a.cx + a.r * Math.cos(t0), y: a.cy + a.r * Math.sin(t0) };
      const p3 = j === pieces - 1 ? { x: q.x, y: q.y } : { x: a.cx + a.r * Math.cos(t1), y: a.cy + a.r * Math.sin(t1) };
      ops.push(['C', { x: p0.x - k * a.r * Math.sin(t0), y: p0.y + k * a.r * Math.cos(t0) }, { x: p3.x + k * a.r * Math.sin(t1), y: p3.y - k * a.r * Math.cos(t1) }, p3]);
    }
  }
  if (closed) ops.push(['Z']);
  return ops;
}

/** Each segment's length of an open run (arcs exact). */
export function segmentLengths(pts) {
  const out = [];
  for (let i = 1; i < pts.length; i++) out.push(segLength(pts[i - 1], pts[i], pts[i - 1].b));
  return out;
}
export const polylineLength = (pts) => segmentLengths(pts).reduce((s, v) => s + v, 0);

/** Closed outline's perimeter (the closing segment uses the last point's bulge). */
export function perimeter(pts) {
  if (pts.length < 2) return 0;
  return polylineLength(pts) + segLength(pts[pts.length - 1], pts[0], pts[pts.length - 1].b);
}

/** Signed area (positive counter-clockwise in a y-up space): shoelace + each arc's segment. */
export function signedArea(pts) {
  let a = 0, s = 0;
  for (let i = 0, n = pts.length; i < n; i++) {
    const p = pts[i], q = pts[(i + 1) % n];
    a += p.x * q.y - q.x * p.y;
    if (p.b) s += segArea(p, q, p.b);
  }
  return a / 2 + s;
}
export const polygonArea = (pts) => Math.abs(signedArea(pts));

/** An area mark: outline minus cut-outs, perimeter of the outline plus each cut-out. */
export function areaWithHoles(outer, holes = []) {
  const gross = polygonArea(outer);
  const cut = holes.reduce((s, h) => s + polygonArea(h), 0);
  const p = perimeter(outer) + holes.reduce((s, h) => s + perimeter(h), 0);
  return { gross, cut, net: gross - cut, perimeter: p, outerPerimeter: perimeter(outer) };
}

/** Ray-cast point in polygon (arcs followed); the boundary itself is not relied on by callers. */
export function pointInPolygon(p, pts0) {
  const pts = hasArcs(pts0) ? flatten(pts0, true) : pts0;
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const a = pts[i], b = pts[j];
    if ((a.y > p.y) !== (b.y > p.y) && p.x < ((b.x - a.x) * (p.y - a.y)) / (b.y - a.y) + a.x) inside = !inside;
  }
  return inside;
}

const cross = (o, a, b) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);

/** Do segments ab and cd cross or touch? (eps relative to their size) */
export function segmentsIntersect(a, b, c, d, eps = 1e-9) {
  const s = Math.max(dist(a, b), dist(c, d), 1) * eps;
  const d1 = cross(c, d, a), d2 = cross(c, d, b), d3 = cross(a, b, c), d4 = cross(a, b, d);
  if (((d1 > s && d2 < -s) || (d1 < -s && d2 > s)) && ((d3 > s && d4 < -s) || (d3 < -s && d4 > s))) return true;
  const on = (p, q, r, dv) => Math.abs(dv) <= s && Math.min(p.x, q.x) - s <= r.x && r.x <= Math.max(p.x, q.x) + s && Math.min(p.y, q.y) - s <= r.y && r.y <= Math.max(p.y, q.y) + s;
  return on(c, d, a, d1) || on(c, d, b, d2) || on(a, b, c, d3) || on(a, b, d, d4);
}

/** Does a closed outline cross itself? (Neighbouring edges share a vertex and are skipped.) */
export function selfIntersects(pts0) {
  const pts = hasArcs(pts0) ? flatten(pts0, true) : pts0;
  const n = pts.length;
  if (n < 4) return false;
  for (let i = 0; i < n; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    for (let j = i + 1; j < n; j++) {
      if (j === i || (j + 1) % n === i || (i + 1) % n === j) continue;
      if (segmentsIntersect(a, b, pts[j], pts[(j + 1) % n])) return true;
    }
  }
  return false;
}

/** Do two closed outlines' edges cross or touch? */
export function outlinesCross(p0, q0) {
  const p = hasArcs(p0) ? flatten(p0, true) : p0, q = hasArcs(q0) ? flatten(q0, true) : q0;
  for (let i = 0; i < p.length; i++) {
    const a = p[i], b = p[(i + 1) % p.length];
    for (let j = 0; j < q.length; j++) if (segmentsIntersect(a, b, q[j], q[(j + 1) % q.length])) return true;
  }
  return false;
}

/**
 * Why an outline can't be measured, or null. Checks it is a real polygon and doesn't cross
 * itself (a crossing outline has no meaningful area: the shoelace would be wrong).
 */
export function outlineProblem(pts, what = 'area') {
  if (pts.length < 3 && !(pts.length === 2 && hasArcs(pts))) return t('geom.' + what + '.min');
  if (selfIntersects(pts)) return t('geom.' + what + '.cross');
  if (polygonArea(pts) < 1e-9) return t('geom.' + what + '.empty');
  return null;
}

/** Why a cut-out can't go into an area, or null: it must sit fully inside and clear of other cut-outs. */
export function holeProblem(outer, holes, hole) {
  const p = outlineProblem(hole, 'hole');
  if (p) return p;
  const fh = flatten(hole, true);
  if (outlinesCross(outer, hole) || !fh.every((v) => pointInPolygon(v, outer))) return t('geom.hole.inside');
  for (const h of holes) {
    if (outlinesCross(h, hole) || fh.some((v) => pointInPolygon(v, h)) || flatten(h, true).some((v) => pointInPolygon(v, hole))) return t('geom.hole.overlap');
  }
  return null;
}

/** Snap p to the nearest 45° direction from base, keeping its distance along that direction. */
export function snap45(base, p) {
  const dx = p.x - base.x, dy = p.y - base.y;
  const ang = Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) * (Math.PI / 4);
  const ux = Math.round(Math.cos(ang) * 1e12) / 1e12, uy = Math.round(Math.sin(ang) * 1e12) / 1e12;
  const t = dx * ux + dy * uy;
  return { x: base.x + ux * t, y: base.y + uy * t };
}

/** Distance from p to segment ab. */
export function distToSegment(p, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y, l2 = dx * dx + dy * dy;
  if (!l2) return dist(p, a);
  const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / l2));
  return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
}

/** Distance from p to an open polyline (or a closed outline when closed). */
export function distToPath(p, pts0, closed = false) {
  const pts = hasArcs(pts0) ? flatten(pts0, closed) : pts0;   // (a closed outline's flattened chords stop short of the first point: the closing segment below covers it)
  let d = Infinity;
  for (let i = 1; i < pts.length; i++) d = Math.min(d, distToSegment(p, pts[i - 1], pts[i]));
  if (closed && pts.length > 2) d = Math.min(d, distToSegment(p, pts[pts.length - 1], pts[0]));
  if (pts.length === 1) d = dist(p, pts[0]);
  return d;
}

export function bounds(pts0) {
  const pts = hasArcs(pts0) ? flatten(pts0, true) : pts0;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const p of pts) { minX = Math.min(minX, p.x); minY = Math.min(minY, p.y); maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y); }
  return { minX, minY, maxX, maxY };
}

export function centroid(pts0) {
  const pts = hasArcs(pts0) ? flatten(pts0, true) : pts0;
  const a = signedArea(pts);
  if (Math.abs(a) < 1e-12) { const b = bounds(pts); return { x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2 }; }
  let cx = 0, cy = 0;
  for (let i = 0, n = pts.length; i < n; i++) {
    const p = pts[i], q = pts[(i + 1) % n], f = p.x * q.y - q.x * p.y;
    cx += (p.x + q.x) * f; cy += (p.y + q.y) * f;
  }
  return { x: cx / (6 * a), y: cy / (6 * a) };
}

// ---- 2D affine matrices [a, b, c, d, e, f] (PDF order) ----
export const apply = (m, p) => ({ x: m[0] * p.x + m[2] * p.y + m[4], y: m[1] * p.x + m[3] * p.y + m[5] });
export function multiply(m, n) {
  return [m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1], m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3], m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]];
}
export function invert(m) {
  const det = m[0] * m[3] - m[1] * m[2];
  return [m[3] / det, -m[1] / det, -m[2] / det, m[0] / det, (m[2] * m[5] - m[3] * m[4]) / det, (m[1] * m[4] - m[0] * m[5]) / det];
}

/** A run cut into its counted and deducted stretches: [{ deduct, pts }] (each stretch's last point starts nothing). */
export function spans(pts, ded) {
  const out = [];
  let cur = null;
  for (let i = 0; i < pts.length - 1; i++) {
    const d = ded.has(i);
    if (!cur || cur.deduct !== d) {
      if (cur) cur.pts[cur.pts.length - 1] = { x: pts[i].x, y: pts[i].y };
      cur = { deduct: d, pts: [pts[i]] };
      out.push(cur);
    }
    cur.pts.push(pts[i + 1]);
  }
  if (cur) cur.pts[cur.pts.length - 1] = { x: cur.pts.at(-1).x, y: cur.pts.at(-1).y };
  return out;
}

// ---- back-outs (T14): convex outlines clipped out of areas ----
const FINE = Math.PI / 360;          // 0.5° chords where arcs must be flattened to clip

/** Is a closed outline convex (no inward corner; arcs flattened)? Collinear points are fine. */
export function isConvex(pts0) {
  const pts = flatten(pts0, true, FINE);
  const n = pts.length;
  if (n < 3) return false;
  let sign = 0;
  const scale = Math.max(...pts.map((p) => Math.abs(p.x) + Math.abs(p.y)), 1);
  for (let i = 0; i < n; i++) {
    const c = cross(pts[i], pts[(i + 1) % n], pts[(i + 2) % n]);
    if (Math.abs(c) <= 1e-12 * scale * scale) continue;      // rounding noise only: 0.5° chords of a small circle far out still count
    if (!sign) sign = Math.sign(c);
    else if (Math.sign(c) !== sign) return false;
  }
  return sign !== 0;
}

/** Sutherland–Hodgman: the part of `subject` (any simple polygon) inside the CONVEX polygon `clip` (both {x,y} lists). */
export function clipConvex(subject, clip) {
  const ccw = signedArea(clip) > 0 ? clip : clip.slice().reverse();
  let out = subject;
  for (let i = 0; i < ccw.length && out.length; i++) {
    const a = ccw[i], b = ccw[(i + 1) % ccw.length];
    const inside = (p) => cross(a, b, p) >= 0;
    const meet = (p, q) => {
      const d1 = cross(a, b, p), d2 = cross(a, b, q), t = d1 / (d1 - d2);
      return { x: p.x + (q.x - p.x) * t, y: p.y + (q.y - p.y) * t };
    };
    const inp = out;
    out = [];
    for (let j = 0; j < inp.length; j++) {
      const p = inp[j], q = inp[(j + 1) % inp.length];
      const pin = inside(p), qin = inside(q);
      if (pin) out.push(p);
      if (pin !== qin) out.push(meet(p, q));
    }
  }
  return out;
}

/**
 * How much of an area mark (outline minus holes) a convex back-out covers, in square PDF units.
 * Exact (arcs included) when the back-out sits wholly inside the area and clear of its holes; else clipped with
 * arcs flattened to 0.5° chords. → 0 when they do not overlap.
 */
export function overlapArea(outer, holes, b) {
  const ob = bounds(outer), bb = bounds(b);
  if (bb.minX >= ob.maxX || bb.maxX <= ob.minX || bb.minY >= ob.maxY || bb.maxY <= ob.minY) return 0;
  const fb = flatten(b, true, FINE);
  const clear = (h) => !outlinesCross(h, b) && !fb.some((v) => pointInPolygon(v, h)) && !flatten(h, true).some((v) => pointInPolygon(v, b));
  if (!outlinesCross(outer, b) && fb.every((v) => pointInPolygon(v, outer)) && holes.every(clear)) return polygonArea(b);
  const part = (ring) => polygonArea(clipConvex(flatten(ring, true, FINE), fb));
  return Math.max(0, part(outer) - holes.reduce((s, h) => s + part(h), 0));
}
