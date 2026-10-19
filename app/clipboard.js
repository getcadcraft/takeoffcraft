/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clipboard.js — copy, cut, paste and duplicate for TakeoffCraft marks and items. DOM-free (tested in Node).
 *
 * A clip is plain JSON (what takeoffcraft.js keeps in memory and in localStorage "takeoffcraft.clipboard",
 * so another tab can paste it):
 *   { format: 'takeoffcraft-clip', version: 1, source, copiedAt,
 *     sheet: { ftPerUnit, label, view: [x0, y0, x1, y1], userUnit } | null,   the sheet the marks came from
 *     anchor: { x, y },                                                        middle of the marks (PDF user space)
 *     items: [item with its assembly],                                         every item the marks belong to
 *     marks: [{ item, kind, pts: [[x, y(, bulge)]], holes, …extras }] }       PDF user space, one sheet (extras: model.js MARK_EXTRAS)
 * A clip with no marks carries items only (Copy item).
 *
 * Reading a clip back (`readClip`) treats it as untrusted, like a project file: it is wrapped in a
 * one-sheet project and run through model.js `readProject`, so items, colors, numbers, kinds and
 * points get exactly the same checks.
 *
 * Quantities depend on the sheet's scale, so lengths and areas only paste onto a sheet whose scale
 * matches the one they were copied from (`scaleProblem`); counts paste anywhere. "Paste in place"
 * keeps the PDF coordinates, so it also needs a sheet of the same size (`sizeProblem`).
 * `pasteClip` is ONE undo step (model.change): marks go onto the item of the same name and type when the
 * takeoff has one, otherwise the item is added with its assembly.
 */

import { FORMAT, LIMITS, readProject, normalItem, markExtras, readExtras, MARK_EXTRAS, kindsOf } from './model.js';
import { t } from './i18n.js';

export const CLIP_FORMAT = 'takeoffcraft-clip';
export const CLIP_VERSION = 1;
export const CLIP_LIMITS = { marks: 20000, items: 500 };
const ZERO = '0'.repeat(64);
const CLIP_SHEET = ZERO + ':0';
const SCALE_TOL = 0.001;      // 0.1 %: two scales this close are the same scale
const SIZE_TOL = 1;           // PDF units (1/72 in): two sheets this close are the same size

const clone = (v) => JSON.parse(JSON.stringify(v));
const arr = (p) => (p.b ? [p.x, p.y, p.b] : [p.x, p.y]);
const finite = (n) => typeof n === 'number' && Number.isFinite(n);
const str = (v, max) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);

/** Middle of the marks' points (bounding box). */
export function anchorOf(marks) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const m of marks) for (const ring of [m.pts, ...(m.holes || [])]) for (const p of ring) {
    const x = Array.isArray(p) ? p[0] : p.x, y = Array.isArray(p) ? p[1] : p.y;
    if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
  }
  return Number.isFinite(x0) ? { x: (x0 + x1) / 2, y: (y0 + y1) / 2 } : { x: 0, y: 0 };
}

function sheetInfo(state, sheet, ctx) {
  const sc = state.sheets[sheet]?.scale || null;
  return {
    ftPerUnit: sc?.ftPerUnit > 0 ? sc.ftPerUnit : null,
    label: sc?.label || '',
    view: Array.isArray(ctx.view) && ctx.view.length === 4 ? ctx.view.slice() : null,
    userUnit: finite(ctx.userUnit) && ctx.userUnit > 0 ? ctx.userUnit : 1,
  };
}

/**
 * Copy marks (and the items they belong to). Only marks on the first mark's sheet are taken — a selection
 * is always on one sheet. ctx: { view, userUnit, source } of that sheet. → clip | null
 */
export function copyMarks(state, ids, ctx = {}) {
  const want = new Set(ids);
  let marks = state.marks.filter((m) => want.has(m.id));
  if (!marks.length) return null;
  const sheet = marks[0].sheet;
  marks = marks.filter((m) => m.sheet === sheet);
  const itemIds = [...new Set(marks.map((m) => m.item))];
  return {
    format: CLIP_FORMAT, version: CLIP_VERSION, source: ctx.source || '', copiedAt: ctx.now ?? Date.now(),
    sheet: sheetInfo(state, sheet, ctx),
    anchor: anchorOf(marks),
    items: itemIds.map((id) => clone(state.items.find((i) => i.id === id))).filter(Boolean),
    marks: marks.map((m) => ({ item: m.item, kind: m.kind, pts: m.pts.map(arr), ...(m.holes?.length ? { holes: m.holes.map((h) => h.map(arr)) } : {}), ...markExtras(m) })),
  };
}

/** Copy items only (with their assemblies). → clip | null */
export function copyItems(state, itemIds, ctx = {}) {
  const items = itemIds.map((id) => state.items.find((i) => i.id === id)).filter(Boolean).map(clone);
  if (!items.length) return null;
  return { format: CLIP_FORMAT, version: CLIP_VERSION, source: ctx.source || '', copiedAt: ctx.now ?? Date.now(), sheet: null, anchor: { x: 0, y: 0 }, items, marks: [] };
}

/**
 * Validate a clip (from localStorage, i.e. anything). → { ok, clip, warnings } | { ok: false, error }
 * The returned clip has points as {x, y, b?} and items normalised by model.js.
 */
export function readClip(json) {
  const fail = (error) => ({ ok: false, error });
  if (!json || typeof json !== 'object' || json.format !== CLIP_FORMAT) return fail(t('clip.err.format'));
  if (!(json.version >= 1)) return fail(t('clip.err.version'));
  if (json.version > CLIP_VERSION) return fail(t('clip.err.newer'));
  const rawItems = Array.isArray(json.items) ? json.items : [];
  const rawMarks = Array.isArray(json.marks) ? json.marks : [];
  if (rawItems.length > CLIP_LIMITS.items || rawMarks.length > CLIP_LIMITS.marks) return fail(t('clip.err.many'));
  // the same checks as a project file: one stand-in sheet, the marks given fresh ids
  const r = readProject({
    format: FORMAT, version: 1, name: 'Clipboard',
    files: [{ hash: ZERO, name: 'clipboard.pdf', size: 0, pages: 1 }],
    items: rawItems,
    marks: rawMarks.map((m, i) => (m && typeof m === 'object' ? { ...Object.fromEntries(MARK_EXTRAS.map((k) => [k, m[k]])), item: m.item, kind: m.kind, pts: m.pts, holes: m.holes, id: 'k' + (i + 1), sheet: CLIP_SHEET } : null)),
  });
  if (!r.ok) return fail(r.error);
  if (!r.state.items.length) return fail(t('clip.err.noitems'));
  const used = new Set(r.state.marks.map((m) => m.item));
  if (rawMarks.length && !r.state.marks.length) return fail(t('clip.err.damaged'));
  const s = json.sheet && typeof json.sheet === 'object' ? json.sheet : null;
  const view = s && Array.isArray(s.view) && s.view.length === 4 && s.view.every((v) => finite(v) && Math.abs(v) < 1e7) ? s.view.slice() : null;
  const sheet = s ? {
    ftPerUnit: finite(s.ftPerUnit) && s.ftPerUnit > 0 && s.ftPerUnit < 1e6 ? s.ftPerUnit : null,
    label: str(s.label, 80),
    view,
    userUnit: finite(s.userUnit) && s.userUnit > 0 && s.userUnit < 1e4 ? s.userUnit : 1,
  } : null;
  const marks = r.state.marks.map((m) => ({ item: m.item, kind: m.kind, pts: m.pts, holes: m.holes, ...markExtras(m) }));
  const a = json.anchor;
  const anchor = a && finite(a.x) && finite(a.y) && Math.abs(a.x) < 1e7 && Math.abs(a.y) < 1e7 ? { x: a.x, y: a.y } : anchorOf(marks);
  return {
    ok: true,
    warnings: r.warnings,
    clip: {
      format: CLIP_FORMAT, version: CLIP_VERSION, source: str(json.source, 64), copiedAt: finite(json.copiedAt) ? json.copiedAt : 0,
      sheet, anchor,
      // with marks: only the items they use (an item the marks no longer reach is not pasted)
      items: marks.length ? r.state.items.filter((i) => used.has(i.id)) : r.state.items,
      marks,
    },
  };
}

/** True when the clip has lengths or areas (which depend on the scale); counts do not. */
export const measured = (clip) => clip.marks.some((m) => m.kind !== 'count');

/**
 * Can the clip's marks go on a sheet with this scale? → null | the reason, in plain words.
 * target: { ftPerUnit, label } | null.
 */
export function scaleProblem(clip, target) {
  if (!measured(clip)) return null;
  const from = clip.sheet?.ftPerUnit;
  if (!from) return t('clip.scale.fromnone');
  if (!(target?.ftPerUnit > 0)) return t('clip.scale.tonone');
  if (Math.abs(target.ftPerUnit - from) / from > SCALE_TOL) {
    return t('clip.scale.other', { from: clip.sheet.label || t('clip.scale.another'), to: target.label || t('clip.scale.different') });
  }
  return null;
}

/**
 * Paste in place keeps PDF coordinates: the target sheet must be the same size. → null | the reason.
 * target: { view: [x0, y0, x1, y1], userUnit }.
 */
export function sizeProblem(clip, target) {
  const a = clip.sheet?.view, b = target?.view;
  if (!a || !b) return t('clip.size.unknown');
  const ua = clip.sheet.userUnit || 1, ub = target.userUnit || 1;
  const same = a.every((v, i) => Math.abs(v * ua - b[i] * ub) <= SIZE_TOL);
  if (same) return null;
  const inch = (v, u) => Math.round(Math.abs(v[2] - v[0]) * u / 72 * 10) / 10 + '" × ' + Math.round(Math.abs(v[3] - v[1]) * u / 72 * 10) / 10 + '"';
  return t('clip.size.other', { from: inch(a, ua), to: inch(b, ub) });
}

/** "Name", or "Name (copy)", "Name (copy 2)"… when the takeoff already has that name (a copy of "X (copy)" is "X (copy 2)"). */
export function freeName(name, items) {
  const taken = new Set(items.map((i) => i.name));
  if (!taken.has(name)) return name;
  const word = t('clip.copy.word');                               // "copy", in the page's language
  const esc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const base = name.replace(new RegExp(' \\((?:copy|' + esc(word) + ')(?: \\d+)?\\)$'), '').slice(0, 180);
  for (let n = 1; ; n++) {
    const c = base + ' (' + (n === 1 ? word : word + ' ' + n) + ')';
    if (!taken.has(c)) return c;
  }
}

/**
 * Paste the clip onto `sheet`, moved by (dx, dy) PDF units, as ONE undo step.
 * Marks go onto the takeoff's item of the same name and type (the same item when it was copied from this
 * takeoff); missing items are added with their assembly. A clip of items only adds copies of the items.
 * `area` (T12): put every pasted mark in this bid area (null: in none); left out, a mark keeps its own bid area when
 * this takeoff has it. The caller checks scaleProblem / sizeProblem first.
 * → { marks: [ids], items: [ids of added items], reused: [ids] } | false
 */
export function pasteClip(model, clip, { sheet = null, dx = 0, dy = 0, label = 'Paste', area } = {}) {
  if (!clip || !clip.items?.length) return false;
  if (clip.marks.length && !sheet) throw new Error(t('clip.err.nosheet'));
  return model.change(label, (s) => {
    const out = { marks: [], items: [], reused: [] };
    const map = new Map();
    for (const ci of clip.items) {
      let target = null;
      if (clip.marks.length) {
        target = s.items.find((i) => i.id === ci.id && i.name === ci.name && i.type === ci.type) || s.items.find((i) => i.name === ci.name && i.type === ci.type) || null;
      }
      if (target) { map.set(ci.id, target.id); out.reused.push(target.id); continue; }
      if (s.items.length >= LIMITS.items) throw new Error(t('err.items.many'));
      const id = model.nextId('i');
      const ni = normalItem({ ...clone(ci), id, name: freeName(ci.name, s.items), components: ci.components.map((c) => ({ ...clone(c), id: model.nextId('c') })) });
      if (ni.area && !(s.areas || []).some((a) => a.id === ni.area)) delete ni.area;    // a typed quantity's bid area (TK.5+) only if it is here
      delete ni.origin;                                                                   // a copy is not the imported quantity: a re-import updates the original
      s.items.push(ni);
      map.set(ci.id, id);
      out.items.push(id);
    }
    if (s.marks.length + clip.marks.length > LIMITS.marks) throw new Error(t('err.marks.many'));
    const mv = (p) => {
      const q = { x: p.x + dx, y: p.y + dy };
      if (!(Math.abs(q.x) < 1e7 && Math.abs(q.y) < 1e7)) throw new Error(t('clip.err.far'));
      if (p.b) q.b = p.b;
      return q;
    };
    for (const m of clip.marks) {
      const item = map.get(m.item);
      const it = s.items.find((i) => i.id === item);
      if (!it || !kindsOf(it).includes(m.kind)) continue;
      const id = model.nextId('m');
      const nm = { id, item, sheet, kind: m.kind, pts: m.pts.map(mv), holes: m.kind === 'area' ? (m.holes || []).map((h) => h.map(mv)) : [] };
      const areas = new Set((s.areas || []).map((a) => a.id));
      s.marks.push(Object.assign(nm, readExtras(area === undefined ? m : { ...m, area }, nm, { areas })));
      out.marks.push(id);
    }
    if (!out.marks.length && !out.items.length) return false;
    return out;
  });
}
