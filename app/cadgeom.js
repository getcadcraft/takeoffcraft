/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadgeom.js — the drawing's own geometry as takeoff geometry (0.7 TD.4). DOM-free; Node tests.
 *
 *   const g = collectGeometry(set, sheetIndex)    → { items, skipped: { type: n }, clipped, truncated }
 *   hitTest(items, p, tol) · inWindow(items, a, b)                      pick on the sheet
 *   marksFor(items, 'linear' | 'area')            → { list: [{ pts, holes }], skipped: { ... } }  ready for model.addMarks
 *
 * Lines, arcs, circles, polylines (bulges kept), closed hatches (their loops, holes kept) and 2D solids on the layers the sheet
 * shows, placed on the sheet (a layout shows model space through its viewports: an object is taken by the first viewport that
 * contains all of it, so nothing is measured twice). Lengths and areas then come out of the takeoff's own exact arithmetic
 * (geom.js: r·|θ|, circular segments), not out of a flattened picture. What is only approximated — an ellipse, a spline, a hatch whose
 * boundary is made of edges — is flagged `approx` (chords of 1° and finer: error well under 0.1 %) and the page says so.
 * Not taken, and listed: 3D polylines, meshes, regions and solids, text, blocks (those are counted, not measured).
 *
 * An item: { id, handle, type, layer, closed, pts [{x, y, b?}] (page user space, y up), holes [[…]], approx, bbox, label }.
 */

import * as G from './geom.js';
import { layerShown } from './cadset.js';
import { splinePoints, hatchRings } from './dwg-compile.js';

export const LIMITS = Object.freeze({ items: 200000 });
const TAU = Math.PI * 2;
const fin = (v) => typeof v === 'number' && Number.isFinite(v);
const isPt = (p) => p && fin(p.x) && fin(p.y);
const mul = (p, q) => [
  p[0] * q[0] + p[2] * q[1], p[1] * q[0] + p[3] * q[1],
  p[0] * q[2] + p[2] * q[3], p[1] * q[2] + p[3] * q[3],
  p[0] * q[4] + p[2] * q[5] + p[4], p[1] * q[4] + p[3] * q[5] + p[5],
];

/** The entities of a space (the model's, or a layout's own) from the read drawing. */
function spaceEntities(model, sheet) {
  const blocks = model.blocks || [];
  if (sheet.kind === 'model') return (blocks.find((b) => /^\*model_space$/i.test(b.name)) || { entities: [] }).entities || [];
  const key = String(sheet.key).replace(/^layout:/, '');
  const lay = (model.layouts || []).find((l) => l.handle === key);
  const rec = lay && blocks.find((b) => b.record === lay.block);
  return rec ? rec.entities || [] : [];
}

/** One entity → { pts, closed, holes, approx } in the entity's own coordinates (before the sheet transform), or null / a reason. */
function shapeOf(e) {
  const bulgeVs = (vs, closed) => ({ pts: vs.filter(isPt).map((v) => ({ x: v.x, y: v.y, ...(fin(v.bulge) && v.bulge ? { b: v.bulge } : {}) })), closed: !!closed });
  switch (e.type) {
    case 'LINE': return isPt(e.start) && isPt(e.end) ? { pts: [{ x: e.start.x, y: e.start.y }, { x: e.end.x, y: e.end.y }], closed: false } : null;
    case 'ARC': {
      if (!isPt(e.center) || !(e.radius > 0) || !fin(e.startAngle) || !fin(e.endAngle)) return null;
      let sweep = e.endAngle - e.startAngle; while (sweep <= 0) sweep += TAU;
      const a = e.startAngle, b = e.endAngle, r = e.radius;
      return { pts: [{ x: e.center.x + r * Math.cos(a), y: e.center.y + r * Math.sin(a), b: Math.tan(sweep / 4) }, { x: e.center.x + r * Math.cos(b), y: e.center.y + r * Math.sin(b) }], closed: false };
    }
    case 'CIRCLE': {
      if (!isPt(e.center) || !(e.radius > 0)) return null;
      const { x, y } = e.center, r = e.radius;
      return { pts: [{ x: x + r, y, b: 1 }, { x: x - r, y, b: 1 }], closed: true };   // two half circles: exact length and area
    }
    case 'LWPOLYLINE': { const s = bulgeVs(e.vertices || [], e.closed); return s.pts.length >= 2 ? s : null; }
    case 'POLYLINE_2D': {
      const s = bulgeVs((e.vertices || []).filter((v) => !(v.flags & 16)), e.closed);
      return s.pts.length >= 2 ? { ...s, approx: !!(e.flags & 6) || (e.curveType || 0) > 4 } : null;   // a curve- or spline-fit polyline is only its frame
    }
    case 'ELLIPSE': {
      if (!isPt(e.center) || !isPt(e.majorAxis) || !(e.ratio > 0)) return null;
      let s0 = fin(e.startParam) ? e.startParam : 0, s1 = fin(e.endParam) ? e.endParam : TAU;
      let sweep = s1 - s0; while (sweep <= 0) sweep += TAU;
      const full = Math.abs(sweep - TAU) < 1e-9;
      const n = Math.max(24, Math.ceil(1440 * sweep / TAU)), mx = e.majorAxis.x, my = e.majorAxis.y, len = Math.hypot(mx, my), rot = Math.atan2(my, mx), cr = Math.cos(rot), sr = Math.sin(rot);
      const pts = [];
      for (let i = 0; i < (full ? n : n + 1); i++) {
        const t = s0 + sweep * i / n, x = len * Math.cos(t), y = len * e.ratio * Math.sin(t);
        pts.push({ x: e.center.x + x * cr - y * sr, y: e.center.y + x * sr + y * cr });
      }
      return { pts, closed: full, approx: true };
    }
    case 'SPLINE': {
      const flat = splinePoints(e);
      const pts = []; for (let i = 0; i + 1 < flat.length; i += 2) if (fin(flat[i]) && fin(flat[i + 1])) pts.push({ x: flat[i], y: flat[i + 1] });
      return pts.length >= 2 ? { pts, closed: !!(e.flags & 1) || !!e.closed, approx: true } : null;
    }
    case 'SOLID': case 'TRACE': {
      const p = (e.points || []).filter(isPt);
      if (p.length < 3) return null;
      const q = p.length > 3 ? [p[0], p[1], p[3], p[2]] : [p[0], p[1], p[2]];   // DXF order 1, 2, 4, 3 is the outline
      return { pts: q.map((v) => ({ x: v.x, y: v.y })), closed: true };
    }
    default: return null;
  }
}

/** A hatch → area shapes: the outer loops, each with the loops inside it as holes. */
function hatchShapes(e) {
  const loops = [];
  for (const loop of e.loops || []) {
    if (loop.polyline) {
      const pts = (loop.polyline.vertices || []).filter(isPt).map((v) => ({ x: v.x, y: v.y, ...(fin(v.bulge) && v.bulge ? { b: v.bulge } : {}) }));
      if (pts.length >= 2) loops.push({ pts, approx: false });
    } else {
      for (const ring of hatchRings({ loops: [loop] })) {   // edges (lines, arcs, ellipses, splines) joined and flattened finely
        const pts = []; for (let i = 0; i + 1 < ring.length; i += 2) pts.push({ x: ring[i], y: ring[i + 1] });
        if (pts.length >= 3) loops.push({ pts, approx: true });
      }
    }
  }
  for (const l of loops) { l.area = Math.abs(G.signedArea(l.pts)); }
  loops.sort((a, b) => b.area - a.area);
  // nesting: a loop's depth is how many bigger loops contain one of its points (even = an outer boundary, odd = a hole)
  const depth = loops.map((l, i) => loops.slice(0, i).filter((o) => l.area < o.area && G.pointInPolygon(G.flatten(l.pts, true)[0] || l.pts[0], o.pts)).length);
  const out = [];
  loops.forEach((l, i) => {
    if (depth[i] % 2) return;
    const holes = loops.filter((h, j) => depth[j] === depth[i] + 1 && G.pointInPolygon(G.flatten(h.pts, true)[0] || h.pts[0], l.pts)).map((h) => h.pts);
    out.push({ pts: l.pts, closed: true, holes, approx: l.approx || loops.some((h, j) => holes.includes(h.pts) && h.approx) });
  });
  return out;
}

const SKIP_NAMES = new Set(['INSERT', 'MINSERT', 'VIEWPORT', 'ATTDEF', 'ATTRIB', 'SEQEND', 'TEXT', 'MTEXT', 'POINT', 'MULTILEADER', 'LEADER', 'IMAGE', 'XLINE', 'RAY']);

/** Every measurable object the sheet shows (see the header). */
export function collectGeometry(set, sheetIndex, { limits = {} } = {}) {
  const cap = { ...LIMITS, ...limits };
  const cad = set.cad, sheet = cad.sheets[sheetIndex];
  const items = [], skipped = {};
  let clipped = 0, truncated = false;
  const skip = (name) => { skipped[name] = (skipped[name] || 0) + 1; };
  const take = (entities, T, vp, onTaken = null) => {
    const det = T[0] * T[3] - T[1] * T[2];
    for (const e of entities) {
      if (!e || e.invisible) continue;
      if (items.length >= cap.items) { truncated = true; return; }
      if (SKIP_NAMES.has(e.type)) continue;
      const layer = e.layer || '0';
      if (!layerShown(cad, layer)) continue;
      if (vp?.frozen?.size && vp.frozen.has(cad.layerHandles.get(layer))) continue;
      const mirror = e.extrusion && e.extrusion.z < -0.5 ? -1 : 1;   // a -Z extrusion mirrors X (as the sheet compiler draws it)
      const shapes = e.type === 'HATCH' ? hatchShapes(e) : (() => { const s = shapeOf(e); return s ? [s] : null; })();
      if (!shapes || !shapes.length) {
        if (!/^(DIMENSION|ACAD_TABLE|ARC_DIMENSION|LARGE_RADIAL)/.test(e.type)) skip(e.type === 'UNKNOWN' ? (e.dxfName || e.className || 'UNKNOWN') : e.type);   // listed: never dropped without a word
        continue;
      }
      for (const s of shapes) {
        const flip = (det * mirror < 0) ? -1 : 1;                      // a mirror turns an arc's direction round
        const tp = (v) => ({ x: T[0] * mirror * v.x + T[2] * v.y + T[4], y: T[1] * mirror * v.x + T[3] * v.y + T[5], ...(v.b ? { b: v.b * flip } : {}) });
        const pts = s.pts.map(tp), holes = (s.holes || []).map((h) => h.map(tp));
        const bb = G.bounds(G.flatten(pts, s.closed));
        if (vp && !(bb.minX >= vp.pageRect.x0 - 1e-6 && bb.maxX <= vp.pageRect.x1 + 1e-6 && bb.minY >= vp.pageRect.y0 - 1e-6 && bb.maxY <= vp.pageRect.y1 + 1e-6)) { clipped++; continue; }
        onTaken?.(e);
        items.push({ id: items.length, handle: e.handle || '', type: e.type, layer, closed: s.closed, pts, holes, approx: !!s.approx, bbox: bb, label: e.type + (e.handle ? ' ' + e.handle : '') });
      }
    }
  };
  if (!sheet) return { items, skipped, clipped, truncated };
  if (sheet.kind === 'model') take(spaceEntities(cad.model, sheet), sheet.toPage, null);
  else {
    take(spaceEntities(cad.model, sheet), sheet.toPage, null);        // the layout's own lines (a border, a title block)
    const modelEntities = spaceEntities(cad.model, { kind: 'model' });
    const taken = new Set();                                          // model objects an earlier viewport already showed
    for (const v of sheet.viewports) {
      const t0 = sheet.toPage;
      const pageRect = { x0: t0[0] * v.rect.x0 + t0[4], x1: t0[0] * v.rect.x1 + t0[4], y0: t0[3] * v.rect.y0 + t0[5], y1: t0[3] * v.rect.y1 + t0[5] };
      take(modelEntities.filter((e) => !taken.has(e)), v.m, { frozen: v.frozen, pageRect }, (e) => taken.add(e));
    }
  }
  return { items, skipped, clipped, truncated };
}

/** The item nearest to `p` within `tol` page units, else the smallest closed item that contains it. */
export function hitTest(items, p, tol) {
  let best = null, bd = tol;
  for (const it of items) {
    const b = it.bbox;
    if (p.x < b.minX - tol || p.x > b.maxX + tol || p.y < b.minY - tol || p.y > b.maxY + tol) continue;
    const d = G.distToPath(p, it.pts, it.closed);
    if (d <= bd) { bd = d; best = it; }
  }
  if (best) return best;
  let inside = null, ia = Infinity;
  for (const it of items) {
    if (!it.closed) continue;
    const b = it.bbox;
    if (p.x < b.minX || p.x > b.maxX || p.y < b.minY || p.y > b.maxY) continue;
    if (G.pointInPolygon(p, it.pts) && !it.holes.some((h) => G.pointInPolygon(p, h))) { const a = (b.maxX - b.minX) * (b.maxY - b.minY); if (a < ia) { ia = a; inside = it; } }
  }
  return inside;
}

/** Items whose whole box lies inside the window a–b. */
export function inWindow(items, a, b) {
  const x0 = Math.min(a.x, b.x), x1 = Math.max(a.x, b.x), y0 = Math.min(a.y, b.y), y1 = Math.max(a.y, b.y);
  return items.filter((it) => it.bbox.minX >= x0 && it.bbox.maxX <= x1 && it.bbox.minY >= y0 && it.bbox.maxY <= y1);
}

/**
 * The marks a linear or an area item takes from `items`. A linear item takes a line, arc, polyline, spline… by its length (a closed one by
 * its perimeter); an area item takes a closed shape by its area (a circle, a closed polyline, a hatch with its holes). What does not fit is
 * counted in `skipped` ('open' for an open run offered to an area item, 'hatch' for a hatch offered to a linear item).
 */
export function marksFor(items, kind) {
  const list = [], skipped = { open: 0, hatch: 0 };
  let approx = 0;
  for (const it of items) {
    if (kind === 'area') {
      if (!it.closed) { skipped.open++; continue; }
      list.push({ pts: it.pts.map((p) => ({ ...p })), holes: it.holes.map((h) => h.map((p) => ({ ...p }))) });
    } else {
      if (it.type === 'HATCH') { skipped.hatch++; continue; }
      const pts = it.pts.map((p) => ({ ...p }));
      if (it.closed) pts.push({ x: pts[0].x, y: pts[0].y });          // the closing segment uses the last point's bulge: add the start again
      list.push({ pts, holes: [] });
    }
    if (it.approx) approx++;
  }
  return { list, skipped, approx };
}

/** Lengths and areas of what is offered, in page units (the caller applies the sheet's scale). */
export function totals(items, kind) {
  let len = 0, area = 0;
  for (const it of items) {
    if (kind === 'area') { if (it.closed) area += G.areaWithHoles(it.pts, it.holes).net; }
    else if (it.type !== 'HATCH') len += it.closed ? G.perimeter(it.pts) : G.polylineLength(it.pts);
  }
  return { len, area };
}
