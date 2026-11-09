/* SPDX-License-Identifier: Apache-2.0 */
/**
 * arcmethods.js — the ten AutoCAD-style ways to draw an arc segment in a run or an outline (0.9 FX.137). DOM-free.
 * The geometry is arcs/arcs.js (lib/arcs, byte-identical copy); this file only adapts it to TakeoffCraft:
 *   - the arc starts at the run's last point, so the "start" step is never asked (a Center/Start method asks the centre,
 *     then the rest); the answers so far are `got` — a point {x, y} (sheet units) or a number (angle in radians, direction in
 *     radians, length / radius in sheet units);
 *   - the result is what the model already stores: the new end point and the bulge on the last point (geom.js; 3 points
 *     through threePoints(arc) → bulgeThrough), so the saved format does not change;
 *   - everything is worked in the frame the person SEES (x right, y up, counter-clockwise = as it looks): a sheet whose
 *     user space is mirrored on screen (the usual PDF case) is reflected before solving and back after;
 *   - typed lengths and radii are read like every typed length in TakeoffCraft (12'6", 3.2 m, a bare number is feet) and
 *     divided by the sheet's feet-per-unit, so they come out in the sheet's calibrated size; angles are degrees.
 */
import * as A from './arcs/arcs.js';
import { signedLength, screenDir } from './typein.js';
import { bulgeThrough, dist } from './geom.js';

/** The ten methods in menu order (Continue is a CadCraft thing: a run already continues from its last point). */
export const METHOD_ORDER = ['3P', 'SCE', 'SCA', 'SCL', 'SEA', 'SED', 'SER', 'CSE', 'CSA', 'CSL'];
/** The steps a click or typed number gives a value (not a point). */
export const SCALAR = new Set(['angle', 'length', 'direction', 'radius']);

/** +1 when counter-clockwise in sheet units looks counter-clockwise on screen, -1 when the sheet is mirrored. `linear` = view.matrix.slice(0, 4). */
export const handedness = (linear) => ((linear[0] * linear[3] - linear[1] * linear[2]) < 0 ? 1 : -1);
const flip = (p, sg) => ({ x: p.x, y: sg * p.y });

/** What is asked after the start (the run's last point): ['center','end'] for Start/Center/End, ['center','angle'] for Center/Start/Angle … */
export const asks = (id) => (A.ROLES[id] || []).filter((r) => r !== 'start');
/** The step the arc waits for, or null once every input is in. */
export const nextRole = (id, got) => asks(id)[got.length] ?? null;

/** The inputs for arcs.js in ROLES order, in the seen frame, as far as `got` goes. */
function vector(id, last, got, sg) {
  const out = [];
  let g = 0;
  for (const role of A.ROLES[id]) {
    if (role === 'start') out.push(flip(last, sg));
    else if (g < got.length) { const v = got[g++]; out.push(typeof v === 'number' ? v : flip(v, sg)); }
    else break;
  }
  return out;
}

/** The arc (seen frame) as the segment the run takes: its other end, a point on it between, and the bulge from `last`. */
function segment(arc, last, sg) {
  let [s, m, e] = A.threePoints(arc).map((p) => flip(p, sg));
  if (dist(e, last) < dist(s, last)) [s, e] = [e, s];          // a clockwise arc is stored from its other end
  if (dist(last, e) < 1e-9 * (1 + arc.r)) return { ok: false, error: 'same' };
  const b = bulgeThrough(last, m, e);
  return b ? { ok: true, end: e, mid: m, b } : { ok: false, error: 'line' };
}

/** All inputs are in: the arc as { ok, end, mid, b } or { ok: false, error: 'same'|'line'|'chord'|'angle'|'direction'|'radius' }. */
export function finish(id, last, got, sg = 1) {
  if (nextRole(id, got) !== null) return { ok: false, error: 'incomplete' };
  const r = A.solve(id, vector(id, last, got, sg));
  return r.error ? { ok: false, error: r.error } : segment(r.arc, last, sg);
}

/** The arc while the last input follows the pointer at `cursor` (sheet units); null while earlier inputs are still missing or it has none. */
export function preview(id, last, got, cursor, sg = 1) {
  if (!cursor || nextRole(id, got) === null || got.length !== asks(id).length - 1) return null;
  const r = A.drag(id, vector(id, last, got, sg), flip(cursor, sg));
  if (!r) return null;
  const s = segment(r.arc, last, sg);
  return s.ok ? s : null;
}

/** A click at `p` for the step `role`: a point as it is, otherwise the pointer's meaning for that step (angle swept, distance, direction). */
export function clickValue(id, last, got, p, sg = 1) {
  const role = nextRole(id, got);
  if (!role || !SCALAR.has(role)) return p;
  return A.pointerValue(id, vector(id, last, got, sg), flip(p, sg));
}

/**
 * Typed text for a scalar step. ctx = { ftPerUnit (sheet scale), linear (view.matrix.slice(0, 4)) }.
 * Angle: degrees, counter-clockwise as it looks (90, -45, 30°); direction: degrees from the screen's right, as it looks;
 * length (chord) and radius: a length as everywhere (12'6", 3.2 m, bare number = feet), in the sheet's calibrated units.
 * → { ok: true, value } | { ok: false, error: 'typein.err.read' | 'typein.err.noscale' | 'arc.err.num' }
 */
export function typedValue(role, text, ctx) {
  const s = String(text ?? '').trim().replace(/[−–—]/g, '-');
  if (role === 'angle' || role === 'direction') {
    const m = /^([+-]?(?:\d+\.?\d*|\.\d+))\s*(?:°|deg|degrees?)?$/i.exec(s);
    if (!m) return { ok: false, error: 'arc.err.num' };
    const rad = (parseFloat(m[1]) * Math.PI) / 180;
    if (role === 'angle') return { ok: true, value: rad };
    const u = screenDir(ctx.linear, Math.cos(rad), Math.sin(rad));
    return u ? { ok: true, value: Math.atan2(handedness(ctx.linear) * u.y, u.x) } : { ok: false, error: 'typein.err.read' };
  }
  if (role === 'length' || role === 'radius') {
    if (!(ctx.ftPerUnit > 0)) return { ok: false, error: 'typein.err.noscale' };
    const ft = signedLength(s);
    return ft === null || ft === 0 ? { ok: false, error: 'typein.err.read' } : { ok: true, value: ft / ctx.ftPerUnit };
  }
  return { ok: false, error: 'typein.err.read' };
}
