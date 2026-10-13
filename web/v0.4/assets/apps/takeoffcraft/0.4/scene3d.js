/* SPDX-License-Identifier: Apache-2.0 */
/**
 * scene3d.js — the 3D check view's geometry, built from one sheet of the takeoff. DOM-free and
 * three.js-free (tested in Node); view3d.js turns the result into three.js meshes.
 *
 *   buildScene(state, sheetKey, { transform, width, height, step }) →
 *     { ok: false, reason }                                  no sheet / no scale
 *     { ok: true, sheet, ftPerUnit, ground: {w, h}, objects, totals, byItem, bbox (sheet + takeoff),
 *       marksBox (the takeoff alone, null when the sheet has none), notes }
 *
 * World space is in FEET, Z up. The sheet lies on the ground (z = 0) the way it shows on screen:
 * `transform` is the page's own viewport transform (user space → display, y down, /Rotate applied,
 * pdfset.js `info.transform`) and `width`/`height` its display size; world x = display x · k,
 * world y = (height − display y) · k, k = ftPerUnit / (the transform's scale). Without a transform
 * the user space itself is used (x right, y up).
 *
 * What is built (each object carries its mark id, so picking selects the mark):
 *   linear mark, item height H > 0  → 'wall':   a vertical strip of height H along the run
 *   linear mark, no height           → 'run':    the run as a line on the sheet (nothing to stand up)
 *   area mark, item depth D > 0      → 'slab':   the outline minus its cut-outs, D thick
 *   area mark, no depth              → 'plate':  the same, THIN_FT (2") thick, so it still shows
 *   count mark                       → 'marker': a small post on the point
 * Arcs are flattened into short chords (`step` radians, 2.5° by default) for display only. The
 * numbers each object reports are the exact ones from model.js (`measureMark`), so they agree
 * with quantities(): wall area = L × H, slab volume = net area × depth (cut-outs and arcs exact).
 *
 *   object = { id (mark id), item, name, kind, color, tris: [x,y,z, …] (9 per triangle),
 *              lines: [x,y,z, …] (6 per segment), anchor: [x,y,z] (a point on its surface), measure }
 */

import { flatten, spans } from './geom.js';
import { measureMark, backouts } from './model.js';
import { earcut } from './m3d/earcut.js';
import { t } from './i18n.js';

export const THIN_FT = 2 / 12;               // a plate for an area with no depth: 2"
export const STEP = Math.PI / 72;            // arcs drawn with 2.5° chords
export const KIND_LABELS = { get wall() { return t('d3.kind.wall'); }, get run() { return t('d3.kind.run'); }, get slab() { return t('d3.kind.slab'); }, get plate() { return t('d3.kind.plate'); }, get marker() { return t('d3.kind.marker'); } };

/** The mapping from PDF user space to the ground, in feet. */
export function sheetFrame(ftPerUnit, { transform = null, width = 0, height = 0 } = {}) {
  const T = transform || [1, 0, 0, -1, 0, height];
  const s = Math.sqrt(Math.abs(T[0] * T[3] - T[1] * T[2])) || 1;
  const k = ftPerUnit / s;
  return {
    k,
    w: width * k,
    h: height * k,
    /** {x, y} user space → [x, y] feet on the ground. */
    at: (p) => {
      const dx = T[0] * p.x + T[2] * p.y + T[4], dy = T[1] * p.x + T[3] * p.y + T[5];
      return [dx * k, (height - dy) * k];
    },
  };
}

/** Signed area of a 2D ring [[x, y], …] (positive = counter-clockwise). */
function ringArea(r) {
  let a = 0;
  for (let i = 0, n = r.length; i < n; i++) { const p = r[i], q = r[(i + 1) % n]; a += p[0] * q[1] - q[0] * p[1]; }
  return a / 2;
}
/** Drop repeated points (a closing point equal to the first, zero-length chords). */
function clean(r, closed) {
  const out = [];
  for (const p of r) { const q = out[out.length - 1]; if (!q || Math.hypot(p[0] - q[0], p[1] - q[1]) > 1e-9) out.push(p); }
  if (closed && out.length > 1) { const a = out[0], b = out[out.length - 1]; if (Math.hypot(a[0] - b[0], a[1] - b[1]) <= 1e-9) out.pop(); }
  return out;
}

const quad = (t, a, b, z0, z1) => {
  t.push(a[0], a[1], z0, b[0], b[1], z0, b[0], b[1], z1);
  t.push(a[0], a[1], z0, b[0], b[1], z1, a[0], a[1], z1);
};
const seg = (l, a, za, b, zb) => l.push(a[0], a[1], za, b[0], b[1], zb);

/** A vertical strip along an open run, from z0 to z0 + h (both sides drawn by the view). */
function wallMesh(run, h, corners, z0 = 0) {
  const tris = [], lines = [];
  for (let i = 1; i < run.length; i++) {
    quad(tris, run[i - 1], run[i], z0, z0 + h);
    seg(lines, run[i - 1], z0, run[i], z0);
    seg(lines, run[i - 1], z0 + h, run[i], z0 + h);
  }
  for (const c of corners) seg(lines, c, z0, c, z0 + h);
  return { tris, lines };
}

/**
 * A wall with a thickness (T5): the run offset half the thickness to each side (mitred joints, limited to 4× the half
 * width at sharp turns), closed into one outline and extruded from z0 to z1.
 */
export function wallOutline(run, thick) {
  const half = thick / 2, n = run.length;
  const dir = (a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1; return [dx / l, dy / l]; };
  const left = [], right = [];
  for (let i = 0; i < n; i++) {
    const d0 = i > 0 ? dir(run[i - 1], run[i]) : dir(run[0], run[1]);
    const d1 = i < n - 1 ? dir(run[i], run[i + 1]) : d0;
    let mx = -(d0[1] + d1[1]), my = d0[0] + d1[0];               // the bisector of the two left normals
    const ml = Math.hypot(mx, my);
    if (ml < 1e-9) { mx = -d0[1]; my = d0[0]; } else { mx /= ml; my /= ml; }
    const cos = mx * -d0[1] + my * d0[0];                         // between the bisector and the first segment's normal
    const k = Math.min(half / Math.max(cos, 1e-6), half * 4);
    left.push([run[i][0] + mx * k, run[i][1] + my * k]);
    right.push([run[i][0] - mx * k, run[i][1] - my * k]);
  }
  const ring = [...right, ...left.reverse()];
  return ringArea(ring) < 0 ? ring.reverse() : ring;
}
function solidWall(run, thick, z0, z1) {
  const ring = clean(wallOutline(run, thick), true);
  return prismMesh(ring, [], z0, z1);
}

/** A prism: outline (CCW) minus holes (CW), from z0 to z1, closed and facing out. */
function prismMesh(outer, holes, z0, z1) {
  const tris = [], lines = [];
  const flat = [], holeIdx = [], all = [];
  for (const p of outer) { flat.push(p[0], p[1]); all.push(p); }
  for (const h of holes) { holeIdx.push(all.length); for (const p of h) { flat.push(p[0], p[1]); all.push(p); } }
  const idx = earcut(flat, holeIdx);
  for (let i = 0; i < idx.length; i += 3) {
    let a = all[idx[i]], b = all[idx[i + 1]], c = all[idx[i + 2]];
    if ((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]) < 0) [b, c] = [c, b];
    tris.push(a[0], a[1], z1, b[0], b[1], z1, c[0], c[1], z1);          // top, facing up
    tris.push(a[0], a[1], z0, c[0], c[1], z0, b[0], b[1], z0);          // bottom, facing down
  }
  for (const r of [outer, ...holes]) {
    for (let i = 0; i < r.length; i++) {
      const a = r[i], b = r[(i + 1) % r.length];
      quad(tris, a, b, z0, z1);                                           // outward: the ring runs with the solid on its left
      seg(lines, a, z0, b, z0); seg(lines, a, z1, b, z1);
    }
  }
  return { tris, lines, triangulated: idx.length > 0 };
}

/** A small octagonal post of radius r and height h standing on p. */
function markerMesh(p, r, h) {
  const ring = [];
  for (let i = 0; i < 8; i++) { const t = (i + 0.5) * Math.PI / 4; ring.push([p[0] + r * Math.cos(t), p[1] + r * Math.sin(t)]); }
  const m = prismMesh(ring, [], 0, h);
  seg(m.lines, p, 0, p, h);
  return m;
}

/**
 * Build the sheet's 3D check geometry. `state` is the takeoff state (model.js), `sheet` the sheet key.
 */
export function buildScene(state, sheet, opts = {}) {
  if (!sheet) return { ok: false, reason: t('d3.err.nosheet') };
  const sc = state.sheets[sheet]?.scale;
  if (!(sc?.ftPerUnit > 0)) {
    return { ok: false, reason: t('d3.err.noscale') };
  }
  const step = opts.step || STEP;
  const ftPerUnit = sc.ftPerUnit;
  const F = sheetFrame(ftPerUnit, opts);
  const items = new Map(state.items.map((it) => [it.id, it]));
  const diag = Math.hypot(F.w, F.h) || 100;
  const postH = Math.min(150, Math.max(2.5, diag * 0.04)), postR = postH * 0.18;   // big enough to see and click at "Zoom extents"
  const objects = [];
  const totals = { lengthFt: 0, wallSqft: 0, netSqft: 0, volumeCuft: 0, count: 0, walls: 0, runs: 0, slabs: 0, plates: 0, markers: 0 };
  const byItem = new Map();
  const notes = [];
  const bbox = { min: [0, 0, 0], max: [F.w, F.h, 0] };            // the sheet and everything on it
  let marksBox = null;                                               // the takeoff alone
  const grow = (tris) => {
    marksBox ??= { min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
    for (let i = 0; i < tris.length; i += 3) for (let a = 0; a < 3; a++) {
      const v = tris[i + a];
      if (v < bbox.min[a]) bbox.min[a] = v;
      if (v > bbox.max[a]) bbox.max[a] = v;
      if (v < marksBox.min[a]) marksBox.min[a] = v;
      if (v > marksBox.max[a]) marksBox.max[a] = v;
    }
  };
  let untriangulated = 0;
  const bo = backouts(state);          // back-outs (T14) take their part off a slab's area and volume (not cut out of the mesh)

  for (const m of state.marks) {
    if (m.sheet !== sheet) continue;
    const item = items.get(m.item);
    if (!item || !m.pts?.length) continue;
    // a second condition's mark (T8) stands plainly: the height, base and thickness belong to the item's main condition
    const it = m.kind === item.type ? item : { id: item.id, name: item.name, color: item.color, type: m.kind, heightFt: 0 };
    const r = measureMark(m, ftPerUnit, it);
    if (!r) continue;
    let t = byItem.get(it.id);
    if (!t) byItem.set(it.id, (t = { lengthFt: 0, wallSqft: 0, netSqft: 0, volumeCuft: 0, count: 0, marks: 0 }));
    t.marks++;
    const base = { id: m.id, item: it.id, name: it.name, color: it.color };
    let o;
    if (m.kind === 'linear') {
      const run = clean(flatten(m.pts, false, step).map(F.at), false);
      const h = it.heightFt > 0 ? it.heightFt : 0;
      totals.lengthFt += r.lengthFt; t.lengthFt += r.lengthFt; t.count++;
      if (h > 0 && run.length > 1) {
        // deduct segments (T2: a doorway in the run) leave a gap in the wall, marked by a line on the ground — or, with an
        // opening head (T5), the wall above the head; a thickness makes the wall a solid (mitred), a base lifts it
        const z0 = it.baseFt > 0 ? it.baseFt : 0, thick = it.thickFt > 0 ? it.thickFt : 0;
        const head = it.headFt > 0 && it.headFt < h ? it.headFt : 0;
        const tris = [], lines = [];
        let anchor = null;
        const add = (mesh) => { for (const v of mesh.tris) tris.push(v); for (const v of mesh.lines) lines.push(v); };
        for (const sp of spans(m.pts, new Set(m.deducts || []))) {
          const part = clean(flatten(sp.pts, false, step).map(F.at), false);
          if (part.length < 2) continue;
          if (sp.deduct) {
            for (let i = 1; i < part.length; i++) seg(lines, part[i - 1], z0, part[i], z0);
            if (head) add(thick ? solidWall(part, thick, z0 + head, z0 + h) : wallMesh(part, h - head, [], z0 + head));
            continue;
          }
          add(thick ? solidWall(part, thick, z0, z0 + h) : wallMesh(part, h, sp.pts.map(F.at), z0));
          anchor ??= [(part[0][0] + part[1][0]) / 2, (part[0][1] + part[1][1]) / 2, z0 + h / 2];
        }
        const wallSqft = r.lengthFt * h;
        totals.wallSqft += wallSqft; t.wallSqft += wallSqft; totals.walls++;
        o = { ...base, kind: 'wall', tris, lines, anchor, measure: { lengthFt: r.lengthFt, heightFt: h, wallSqft, thickFt: thick, baseFt: z0, headFt: head } };
      } else {
        const lines = [];
        for (let i = 1; i < run.length; i++) seg(lines, run[i - 1], 0, run[i], 0);
        totals.runs++;
        const a = run[0], b = run[1] || run[0];
        o = { ...base, kind: 'run', tris: [], lines, anchor: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0], measure: { lengthFt: r.lengthFt, heightFt: 0, wallSqft: 0 } };
      }
    } else if (m.kind === 'area') {
      let outer = clean(flatten(m.pts, true, step).map(F.at), true);
      if (ringArea(outer) < 0) outer.reverse();
      const holes = (m.holes || []).map((h) => { const ring = clean(flatten(h, true, step).map(F.at), true); if (ringArea(ring) > 0) ring.reverse(); return ring; }).filter((h) => h.length > 2);
      if (outer.length < 3) continue;
      const thin = !(it.heightFt > 0);
      const d = thin ? THIN_FT : it.heightFt;
      const zb = it.baseFt > 0 ? it.baseFt : 0;                    // a ceiling or a raised floor (T5)
      const mesh = prismMesh(outer, holes, zb, zb + d);
      if (!mesh.triangulated) untriangulated++;
      const net = Math.max(0, r.areaSqft - bo.cut(m, ftPerUnit) * r.factor);
      const volumeCuft = thin ? null : net * d;
      totals.netSqft += net; t.netSqft += net; t.count++;
      if (thin) totals.plates++; else { totals.slabs++; totals.volumeCuft += volumeCuft; t.volumeCuft += volumeCuft; }
      const tri = mesh.tris;
      // anchor: the middle of the largest top triangle (top triangles come in pairs with the bottom ones)
      const top = zb + d;
      let anchor = [outer[0][0], outer[0][1], top], best = -1;
      for (let i = 0; i < tri.length && tri[i + 2] === top && tri[i + 5] === top && tri[i + 8] === top; i += 18) {
        const ar = Math.abs((tri[i + 3] - tri[i]) * (tri[i + 7] - tri[i + 1]) - (tri[i + 4] - tri[i + 1]) * (tri[i + 6] - tri[i]));
        if (ar > best) { best = ar; anchor = [(tri[i] + tri[i + 3] + tri[i + 6]) / 3, (tri[i + 1] + tri[i + 4] + tri[i + 7]) / 3, top]; }
      }
      o = { ...base, kind: thin ? 'plate' : 'slab', tris: tri, lines: mesh.lines, anchor,
        measure: { netSqft: net, grossSqft: r.grossSqft, cutSqft: r.cutSqft, backoutSqft: r.areaSqft - net, depthFt: thin ? 0 : d, drawnFt: d, volumeCuft, thin } };
    } else if (m.kind === 'count') {
      const p = F.at(m.pts[0]);
      const mesh = markerMesh(p, postR, postH);
      totals.count++; totals.markers++; t.count++;
      o = { ...base, kind: 'marker', tris: mesh.tris, lines: mesh.lines, anchor: [p[0], p[1], postH], measure: { count: 1 } };
    } else continue;
    grow(o.tris.length ? o.tris : o.lines);
    objects.push(o);
  }
  if (totals.runs) notes.push(t('d3.note.runs', { n: totals.runs }));
  if (totals.plates) notes.push(t('d3.note.plates', { n: totals.plates }));
  if (untriangulated) notes.push(t('d3.note.unfilled', { n: untriangulated }));
  return { ok: true, sheet, ftPerUnit, ground: { w: F.w, h: F.h }, objects, totals, byItem, bbox, marksBox, notes };
}

/**
 * Several sheets stacked as floors (T4): each sheet's scene (buildScene) lifted to its level's elevation, in one scene.
 * `levels`: [{ key, elevFt, transform, width, height }] — the sheet on screen first (its sheet is laid at its elevation,
 * the others get a frame). Sheets line up by their page coordinates (plotted alike); a sheet with no scale is left out
 * (said in the notes). → the buildScene shape + groundZ, levels [{ key, elevFt, w, h }]
 */
export function buildStack(state, levels, opts = {}) {
  const out = { ok: false, reason: t('d3.err.nosheet') };
  const objects = [], notes = [], used = [];
  const totals = { lengthFt: 0, wallSqft: 0, netSqft: 0, volumeCuft: 0, count: 0, walls: 0, runs: 0, slabs: 0, plates: 0, markers: 0 };
  const byItem = new Map();
  let bbox = null, marksBox = null, first = null, skipped = 0;
  const grow = (b, mn, mx) => (b ? { min: b.min.map((v, i) => Math.min(v, mn[i])), max: b.max.map((v, i) => Math.max(v, mx[i])) } : { min: mn.slice(), max: mx.slice() });
  for (const lv of levels) {
    const r = buildScene(state, lv.key, { ...opts, transform: lv.transform, width: lv.width, height: lv.height });
    if (!r.ok) { if (!first) return r; skipped++; continue; }
    const z = lv.elevFt || 0;
    const lift = (a) => { for (let i = 2; i < a.length; i += 3) a[i] += z; return a; };
    for (const o of r.objects) objects.push({ ...o, tris: lift(o.tris.slice()), lines: lift(o.lines.slice()), anchor: [o.anchor[0], o.anchor[1], o.anchor[2] + z], level: lv.key });
    if (first) {                                            // the other sheets: their outline at their height
      const w = r.ground.w, h = r.ground.h;
      objects.push({ id: null, item: null, name: '', kind: 'frame', color: '#888888', tris: [], lines: [0, 0, z, w, 0, z, w, 0, z, w, h, z, w, h, z, 0, h, z, 0, h, z, 0, 0, z], anchor: [0, 0, z], level: lv.key, measure: {} });
    }
    first ??= { r, z };
    for (const k of Object.keys(totals)) totals[k] += r.totals[k];
    for (const [id, v] of r.byItem) { const b = byItem.get(id); if (!b) byItem.set(id, { ...v }); else for (const k of Object.keys(v)) b[k] += v[k]; }
    bbox = grow(bbox, [r.bbox.min[0], r.bbox.min[1], r.bbox.min[2] + z], [r.bbox.max[0], r.bbox.max[1], r.bbox.max[2] + z]);
    if (r.marksBox) marksBox = grow(marksBox, [r.marksBox.min[0], r.marksBox.min[1], r.marksBox.min[2] + z], [r.marksBox.max[0], r.marksBox.max[1], r.marksBox.max[2] + z]);
    for (const n of r.notes) if (!notes.includes(n)) notes.push(n);
    used.push({ key: lv.key, elevFt: z, w: r.ground.w, h: r.ground.h });
  }
  if (!first) return out;
  if (skipped) notes.push(t('d3.note.skipped', { n: skipped }));
  return { ok: true, sheet: levels[0].key, ftPerUnit: first.r.ftPerUnit, ground: first.r.ground, groundZ: first.z, objects, totals, byItem, bbox, marksBox, notes, levels: used, stacked: true };
}

/** Signed volume of a closed triangle mesh (divergence theorem) — cubic feet. */
export function meshVolume(tris) {
  let v = 0;
  for (let i = 0; i < tris.length; i += 9) {
    const ax = tris[i], ay = tris[i + 1], az = tris[i + 2], bx = tris[i + 3], by = tris[i + 4], bz = tris[i + 5], cx = tris[i + 6], cy = tris[i + 7], cz = tris[i + 8];
    v += ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx);
  }
  return v / 6;
}
/** Total area of a triangle list — square feet. */
export function meshArea(tris) {
  let s = 0;
  for (let i = 0; i < tris.length; i += 9) {
    const ux = tris[i + 3] - tris[i], uy = tris[i + 4] - tris[i + 1], uz = tris[i + 5] - tris[i + 2];
    const vx = tris[i + 6] - tris[i], vy = tris[i + 7] - tris[i + 1], vz = tris[i + 8] - tris[i + 2];
    s += Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx) / 2;
  }
  return s;
}
