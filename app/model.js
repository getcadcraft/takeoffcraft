/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model.js — the takeoff project: items (+ assembly components), marks, sheet scales, undo,
 * quantities and the priced estimate. DOM-free (tested in Node).
 *
 * State (plain data; what the .takeoff.json file holds):
 *   files   [{ hash (sha-256 hex), name, size, pages }]            the PDFs it was taken off
 *   sheets  { "<hash>:<page index>": { scale: {method, ftPerUnit, preset, label, cal} | null, level?: feet (T4: its floor's
 *           elevation, to stack sheets in 3D) } }
 *   items   [{ id, name, type: linear|area|count, color, unit, heightFt, waste (bp), mat, lab (1/10000 $),
 *              components: [{ id, name, unit, formula, waste, mat, lab }],
 *              backout (area items: its marks are back-outs, T14), backoutOf [area item ids it deducts from],
 *              pitch (rise per 12: area items' surface, linear items' rakes and hips — T15), slope (linear: 'rake' | 'hip'),
 *              3D only (T5): thickFt (linear: wall thickness), baseFt (linear, area: height above the floor), headFt (linear: an
 *              opening's head — a deducted segment keeps the wall above it) }]
 *   marks   [{ id, item, sheet, kind, pts: [{x,y}], holes: [[{x,y}]], …extras }]   PDF user space
 *           extras (optional, MARK_EXTRAS; validated by readProject, carried by files and the clipboard):
 *             deducts  [segment index]   linear: segments drawn but not counted (a door in a wall run) — T2
 *             area     bid area id        the building / floor / phase the mark belongs to — T12
 *             flag     'rev'              the drawing changed under it when it moved to a revised sheet: check it — T13
 *             pitch    rise per 12        this mark's own pitch (instead of its item's) — T15
 *             slopes   [{ k, p } | null]  linear: per segment, 'flat' | 'rake' | 'hip' and its own pitch — T15
 *             group    typical group id   taken off once, counted `repeat` times — T16
 *   areas   [{ id, name, alt? }]   bid areas, in order (T12); a mark without `area` is in no bid area. `alt` (T17):
 *           'add' — an add alternate, left out of the base bid; 'deduct' — in the base bid, offered as a deduction
 *   groups  [{ id, name, repeat }]   typical groups (T16): a unit taken off once and counted `repeat` times
 *   notes   [{ id, sheet, kind: 'note' | 'cloud' | 'highlight', pts, text, status: 'open' | 'answered' | 'closed' }]   markups
 *           (T22): a note pins a point, a cloud or a highlight spans two corners; never counted, drawn in the marked PDF
 *   bid     { tax, overhead, profit, bond (basis points), to, project, by, incl, excl, terms, items }   the bid summary and
 *           proposal (T19, bid.js)
 *
 * Every edit goes through `change(label, fn)` — one undo step. Quantities are always computed
 * from the marks and the sheet scales, never stored, so a changed scale re-measures everything.
 */

import { segmentLengths, areaWithHoles, isConvex, overlapArea, bounds } from './geom.js';
import { normalBid, bidUsed } from './bid.js';
import { UNITS, UNITS_FOR, DEFAULT_UNIT, lengthUnitOf, areaUnitOf, ftTo, sqftTo, withWaste, extendCents, MAX_PITCH, slopeFactor, hipFactor, roundTo } from './units.js';
import { parse, evaluate } from './formula.js';
import { t } from './i18n.js';

export const FORMAT = 'takeoffcraft-project';
export const FORMAT_VERSION = 1;
export const TYPES = ['linear', 'area', 'count'];
/** Item type names (from the language file, read when used). */
export const TYPE_LABELS = { get linear() { return t('type.linear'); }, get area() { return t('type.area'); }, get count() { return t('type.count'); } };
export const PALETTE = ['#D62728', '#1F77B4', '#2CA02C', '#FF7F0E', '#9467BD', '#8C564B', '#E377C2', '#17BECF', '#BCBD22', '#5A5A5A'];
export const LIMITS = { items: 2000, marks: 200000, points: 5000, holes: 200, components: 50, name: 200, formula: 500, areas: 200, groups: 500, repeat: 10000, notes: 5000, noteText: 2000 };

/** Variables a component formula may use, by item type. */
export const VARS = { linear: ['L', 'H', 'A', 'N'], area: ['A', 'P', 'H', 'N'], count: ['N'] };
const varHelp = (type, names) => Object.defineProperties({}, Object.fromEntries(names.map((k) => [k, { enumerable: true, get: () => t('var.' + type + '.' + k.toLowerCase()) }])));
export const VAR_HELP = { linear: varHelp('linear', VARS.linear), area: varHelp('area', VARS.area), count: varHelp('count', VARS.count) };

/**
 * Multi-condition items (T8): an item measured with more than one kind of mark. `type` is its main condition (unit,
 * waste, rates, height and every other field); `conds` adds the other kinds, each with its own unit, waste and rates:
 * [{ kind, unit, waste, mat, lab }]. A mark's kind must be one of `kindsOf(item)`. Marks of a second kind are measured
 * plainly (no height, pitch or back-out: those belong to the main condition) and priced on their own estimate row.
 */
/** The unit an item measures marks of `kind` in: its own, or that condition's. */
export const unitOf = (it, kind) => (kind === it.type ? it.unit : it.conds?.find((c) => c.kind === kind)?.unit || DEFAULT_UNIT[kind]);
export const kindsOf = (it) => (it ? [it.type, ...(it.conds || []).map((c) => c.kind)] : []);
export function normalCond(f, type) {
  const kind = TYPES.includes(f?.kind) && f.kind !== type ? f.kind : null;
  if (!kind) return null;
  return { kind, unit: UNITS_FOR[kind].includes(f.unit) ? f.unit : DEFAULT_UNIT[kind], waste: int(f.waste, 0, 100000), mat: int(f.mat, 0, 1e13), lab: int(f.lab, 0, 1e13) };
}

/**
 * Crew labor (T18): an item's labor priced from a crew instead of a rate per unit — `crew: { prod, size, wage }`:
 * prod units (of the item's unit) per crew-hour, size workers, wage per worker-hour (1/10000 $). The quantity with waste
 * takes qtyW / prod crew-hours = × size worker-hours = ÷ CREW_DAY crew-days; labor = worker-hours × wage.
 */
export const CREW_DAY = 8;
export function crewOf(c) {
  if (!c || typeof c !== 'object') return null;
  const prod = Number.isFinite(c.prod) && c.prod > 0 && c.prod < 1e7 ? c.prod : null;
  if (!prod) return null;
  return { prod, size: Number.isInteger(c.size) && c.size >= 1 && c.size <= 1000 ? c.size : 1, wage: Number.isInteger(c.wage) && c.wage >= 0 && c.wage <= 1e9 ? c.wage : 0 };
}
/** Hours and labor of a crew on a quantity (with waste). */
export function crewWork(crew, qtyW) {
  const hours = qtyW / crew.prod, workerHours = hours * crew.size;
  return { hours, workerHours, days: hours / CREW_DAY, labExt: Math.round(roundTo(workerHours * crew.wage / 100, 0)), rate: Math.round(crew.size * crew.wage / crew.prod) };
}

export const NOTE_KINDS = ['note', 'cloud', 'highlight'];
export const NOTE_STATUS = ['open', 'answered', 'closed'];
/** A markup (T22), clean, or null. Points as {x, y} (a note: one, a cloud or highlight: two corners). */
export function normalNote(f) {
  if (!f || !NOTE_KINDS.includes(f.kind) || typeof f.sheet !== 'string') return null;
  const want = f.kind === 'note' ? 1 : 2;
  const pts = (Array.isArray(f.pts) ? f.pts : []).map((p) => (Array.isArray(p) ? { x: p[0], y: p[1] } : { x: p?.x, y: p?.y }));
  if (pts.length !== want || pts.some((p) => !(Number.isFinite(p.x) && Number.isFinite(p.y) && Math.abs(p.x) < 1e7 && Math.abs(p.y) < 1e7))) return null;
  if (want === 2 && (Math.abs(pts[0].x - pts[1].x) < 1e-6 || Math.abs(pts[0].y - pts[1].y) < 1e-6)) return null;
  const text = String(f.text ?? '').replace(/\r\n?/g, '\n').replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, ' ').slice(0, LIMITS.noteText);
  return { id: String(f.id), sheet: f.sheet, kind: f.kind, pts, text, status: NOTE_STATUS.includes(f.status) ? f.status : 'open' };
}

export const MARK_EXTRAS = ['deducts', 'area', 'flag', 'pitch', 'slopes', 'group'];
export const SLOPE_KINDS = ['flat', 'rake', 'hip'];
const pitchOk = (p) => typeof p === 'number' && Number.isFinite(p) && p >= 0 && p <= MAX_PITCH;
const feetOk = (v) => typeof v === 'number' && Number.isFinite(v) && v > 0 && v < 1e4;
export const sheetKey = (hash, pageIndex) => hash + ':' + pageIndex;

/** A mark's optional fields beyond its geometry, as plain data (what files and the clipboard carry). */
export function markExtras(m) {
  const o = {};
  if (m.kind === 'linear' && m.deducts?.length) o.deducts = m.deducts.slice();
  if (m.area) o.area = m.area;
  if (m.group) o.group = m.group;
  if (m.flag) o.flag = m.flag;
  if (m.pitch !== undefined) o.pitch = m.pitch;
  if (m.kind === 'linear' && m.slopes?.some(Boolean)) o.slopes = m.slopes.map((x) => (x ? { ...x } : null));
  return o;
}
/**
 * Validate the optional fields of an untrusted mark `raw` whose geometry `m` is already clean.
 * ctx.areas / ctx.groups: the ids of the takeoff's bid areas and typical groups (a mark is in one of each at most).
 */
export function readExtras(raw, m, ctx = {}) {
  const o = {};
  if (typeof raw?.area === 'string' && ctx.areas?.has(raw.area)) o.area = raw.area;
  if (typeof raw?.group === 'string' && ctx.groups?.has(raw.group)) o.group = raw.group;
  if (raw?.flag === 'rev') o.flag = 'rev';
  if (m.kind !== 'count' && pitchOk(raw?.pitch)) o.pitch = raw.pitch;
  if (m.kind === 'linear' && Array.isArray(raw?.slopes)) {
    const n = m.pts.length - 1;
    const sl = Array.from({ length: n }, (_, i) => {
      const x = raw.slopes[i];
      if (!x || typeof x !== 'object' || !SLOPE_KINDS.includes(x.k)) return null;
      return pitchOk(x.p) ? { k: x.k, p: x.p } : { k: x.k };
    });
    if (raw.slopes.length === n && sl.some(Boolean)) o.slopes = sl;      // other segments than the run has: dropped
  }
  if (m.kind === 'linear' && Array.isArray(raw?.deducts)) {
    const n = m.pts.length - 1;
    const d = [...new Set(raw.deducts.filter((i) => Number.isInteger(i) && i >= 0 && i < n))].sort((a, b) => a - b);
    if (d.length && d.length < n) o.deducts = d;        // a run keeps at least one counted segment
  }
  return o;
}
export const emptyState = () => ({ name: 'Takeoff', files: [], sheets: {}, items: [], marks: [], areas: [], seq: 0 });
const areaIds = (s) => new Set((s.areas || []).map((a) => a.id));
const extrasCtx = (s) => ({ areas: areaIds(s), groups: new Set((s.groups || []).map((g) => g.id)) });
const repeatOk = (n) => Number.isInteger(n) && n >= 1 && n <= LIMITS.repeat;
const clone = (v) => JSON.parse(JSON.stringify(v));

export class Takeoff {
  constructor(state = emptyState()) {
    this.state = state;
    this.undoStack = [];
    this.redoStack = [];
    this.version = 0;
    this.savedVersion = 0;
    this.listeners = new Set();
  }

  get dirty() { return this.version !== this.savedVersion; }
  markSaved() { this.savedVersion = this.version; this.emit('saved'); }
  /** Not saved to a file (a recovered copy): dirty until the next save. */
  markUnsaved() { this.savedVersion = -1; this.emit('unsaved'); }
  on(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
  emit(why) { for (const fn of this.listeners) fn(why); }

  /** One undoable edit. fn(state) mutates; returning false cancels it (nothing recorded). */
  change(label, fn) {
    const before = clone(this.state);
    let r;
    try { r = fn(this.state); } catch (err) { this.state = before; throw err; }
    if (r === false) { this.state = before; return false; }
    this.undoStack.push({ label, before });
    if (this.undoStack.length > 300) this.undoStack.shift();
    this.redoStack = [];
    this.version++;
    this.emit('change');
    return r === undefined ? true : r;
  }
  undo() {
    const s = this.undoStack.pop();
    if (!s) return null;
    this.redoStack.push({ label: s.label, before: clone(this.state) });
    this.state = s.before;
    this.version++;
    this.emit('change');
    return s.label;
  }
  redo() {
    const s = this.redoStack.pop();
    if (!s) return null;
    this.undoStack.push({ label: s.label, before: clone(this.state) });
    this.state = s.before;
    this.version++;
    this.emit('change');
    return s.label;
  }
  get canUndo() { return this.undoStack.length > 0; }
  get canRedo() { return this.redoStack.length > 0; }

  nextId(prefix) { this.state.seq = (this.state.seq || 0) + 1; return prefix + this.state.seq; }

  // ---- reads ----
  item(id) { return this.state.items.find((i) => i.id === id) || null; }
  mark(id) { return this.state.marks.find((m) => m.id === id) || null; }
  marksOn(sheet) { return this.state.marks.filter((m) => m.sheet === sheet); }
  scaleOf(sheet) { return this.state.sheets[sheet]?.scale || null; }

  // ---- edits (each one undo step) ----
  addFile(f) {
    if (this.state.files.some((x) => x.hash === f.hash)) return false;
    // not an undo step: opening a PDF is not an edit of the takeoff
    this.state.files.push({ hash: f.hash, name: f.name, size: f.size, pages: f.pages });
    return true;
  }
  /** A sheet's floor elevation in feet for stacking in 3D (T4); null takes it out of the stack. */
  setLevel(sheet, elevFt) {
    return this.change(t('undo.level'), (s) => {
      const cur = s.sheets[sheet]?.level ?? null;
      const next = typeof elevFt === 'number' && Number.isFinite(elevFt) && Math.abs(elevFt) < 1e5 ? elevFt : null;
      if (cur === next) return false;
      s.sheets[sheet] = { ...(s.sheets[sheet] || { scale: null }) };
      if (next === null) delete s.sheets[sheet].level; else s.sheets[sheet].level = next;
    });
  }
  /** Several sheets' elevations at once ({ sheetKey: feet | null }) — one undo step. */
  setLevels(map) {
    return this.change(t('undo.level'), (s) => {
      let n = 0;
      for (const [sheet, v] of Object.entries(map)) {
        const next = typeof v === 'number' && Number.isFinite(v) && Math.abs(v) < 1e5 ? v : null;
        if ((s.sheets[sheet]?.level ?? null) === next) continue;
        s.sheets[sheet] = { ...(s.sheets[sheet] || { scale: null }) };
        if (next === null) delete s.sheets[sheet].level; else s.sheets[sheet].level = next;
        n++;
      }
      if (!n) return false;
    });
  }
  levelOf(sheet) { return this.state.sheets[sheet]?.level ?? null; }
  /** Scales for several sheets at once ({ key: scale }) — one undo step (T20: scales found in the sheets' text). */
  setScales(map, label = t('undo.scales', { n: Object.keys(map).length })) {
    if (!Object.keys(map).length) return false;
    return this.change(label, (s) => { for (const [k, sc] of Object.entries(map)) s.sheets[k] = { ...(s.sheets[k] || {}), scale: sc }; });
  }
  setScale(sheet, scale, label = t('undo.scale')) {
    return this.change(label, (s) => { s.sheets[sheet] = { ...(s.sheets[sheet] || {}), scale }; });
  }
  addItem(fields = {}) {
    let id = null;
    this.change(t('undo.item.new'), (s) => {
      if (s.items.length >= LIMITS.items) throw new Error(t('err.items.many'));
      const type = TYPES.includes(fields.type) ? fields.type : 'linear';
      id = this.nextId('i');
      s.items.push(normalItem({ ...fields, id, type, color: fields.color || PALETTE[s.items.length % PALETTE.length] }));
    });
    return id;
  }
  /** Several items (fields as addItem takes them, with components) in ONE undo step (the library, T9). Their ids. */
  addItems(list, label = t('undo.items.add', { n: list.length })) {
    const ids = [];
    if (!list.length) return ids;
    this.change(label, (s) => {
      if (s.items.length + list.length > LIMITS.items) throw new Error(t('err.items.many'));
      for (const f of list) {
        const id = this.nextId('i');
        ids.push(id);
        const components = (f.components || []).slice(0, LIMITS.components).map((c) => ({ ...c, id: this.nextId('c') }));
        s.items.push(normalItem({ ...f, id, components, color: f.color || PALETTE[s.items.length % PALETTE.length] }));
      }
    });
    return ids;
  }
  /** Patch several items in ONE undo step: [{ id, patch }] (the library's new prices, T9). */
  updateItems(patches, label = t('undo.items.reprice', { n: patches.length })) {
    if (!patches.length) return false;
    return this.change(label, (s) => {
      for (const { id, patch } of patches) {
        const it = s.items.find((i) => i.id === id);
        if (it) Object.assign(it, normalItem({ ...it, ...patch }));
      }
    });
  }
  updateItem(id, patch, label = t('undo.item.edit')) {
    return this.change(label, (s) => {
      const it = s.items.find((i) => i.id === id);
      if (!it) return false;
      const next = normalItem({ ...it, ...patch });
      const kinds = new Set(kindsOf(next));
      if (next.type !== it.type && s.marks.some((m) => m.item === id && m.kind === it.type)) throw new Error(t('err.item.type'));
      if (s.marks.some((m) => m.item === id && !kinds.has(m.kind))) throw new Error(t('err.item.cond'));
      for (const k of ['backout', 'backoutOf', 'pitch', 'slope', 'thickFt', 'baseFt', 'headFt', 'conds', 'crew']) if (!(k in next)) delete it[k];     // turned off: the fields go
      Object.assign(it, next);
    });
  }
  /** Turn a second condition (T8) on or off for an item; off fails while the item has marks of that kind. */
  setCond(id, kind, on) {
    const it = this.item(id);
    if (!it || kind === it.type) return false;
    const list = (it.conds || []).filter((c) => c.kind !== kind);
    if (on) list.push({ kind, unit: DEFAULT_UNIT[kind] });
    return this.updateItem(id, { conds: list }, t(on ? 'undo.cond.add' : 'undo.cond.remove'));
  }
  /** Change a second condition's unit, waste or rates. */
  updateCond(id, kind, patch, label = t('undo.cond.edit')) {
    const it = this.item(id);
    if (!it?.conds?.some((c) => c.kind === kind)) return false;
    return this.updateItem(id, { conds: it.conds.map((c) => (c.kind === kind ? { ...c, ...patch } : c)) }, label);
  }
  removeItem(id) {
    return this.change(t('undo.item.delete'), (s) => {
      const n = s.items.length;
      s.items = s.items.filter((i) => i.id !== id);
      if (s.items.length === n) return false;
      s.marks = s.marks.filter((m) => m.item !== id);
    });
  }
  moveItem(id, dir) {
    return this.change(t('undo.item.move'), (s) => {
      const i = s.items.findIndex((x) => x.id === id), j = i + dir;
      if (i < 0 || j < 0 || j >= s.items.length) return false;
      [s.items[i], s.items[j]] = [s.items[j], s.items[i]];
    });
  }
  addComponent(itemId, fields = {}) {
    let id = null;
    this.change(t('undo.comp.add'), (s) => {
      const it = s.items.find((i) => i.id === itemId);
      if (!it || it.components.length >= LIMITS.components) return false;
      id = this.nextId('c');
      it.components.push(normalComponent({ ...fields, id }));
    });
    return id;
  }
  updateComponent(itemId, compId, patch) {
    return this.change(t('undo.comp.edit'), (s) => {
      const c = s.items.find((i) => i.id === itemId)?.components.find((x) => x.id === compId);
      if (!c) return false;
      Object.assign(c, normalComponent({ ...c, ...patch }));
    });
  }
  removeComponent(itemId, compId) {
    return this.change(t('undo.comp.delete'), (s) => {
      const it = s.items.find((i) => i.id === itemId);
      if (!it) return false;
      const n = it.components.length;
      it.components = it.components.filter((c) => c.id !== compId);
      if (it.components.length === n) return false;
    });
  }
  /** Add a mark; its kind (the item's type unless given) must be one of the item's conditions. Returns the new mark's id. */
  addMark({ item, sheet, pts, holes = [], kind = null, ...extras }) {
    const it = this.item(item);
    if (!it) throw new Error(t('err.item.none'));
    const k = kind || it.type;
    if (!kindsOf(it).includes(k)) throw new Error(t('err.mark.kind'));
    let id = null;
    this.change(t('undo.mark.' + k), (s) => {
      if (s.marks.length >= LIMITS.marks) throw new Error(t('err.marks.many'));
      id = this.nextId('m');
      const m = { id, item, sheet, kind: k, pts: pts.map(pt), holes: k === 'area' ? holes.map((h) => h.map(pt)) : [] };
      s.marks.push(Object.assign(m, readExtras(extras, m, extrasCtx(s))));
    });
    return id;
  }
  /** Several marks of one item (of one kind: the item's type unless given) in ONE undo step (automatic counting). Their ids. */
  addMarks(item, list, label, kind = null) {
    const it = this.item(item);
    if (!it) throw new Error(t('err.item.none'));
    const k = kind || it.type;
    if (!kindsOf(it).includes(k)) throw new Error(t('err.mark.kind'));
    const ids = [];
    if (!list.length) return ids;
    this.change(label || t('undo.marks.' + k, { n: list.length }), (s) => {
      if (s.marks.length + list.length > LIMITS.marks) throw new Error(t('err.marks.many'));
      for (const m of list) {
        const id = this.nextId('m');
        ids.push(id);
        const nm = { id, item, sheet: m.sheet, kind: k, pts: m.pts.map(pt), holes: k === 'area' ? (m.holes || []).map((h) => h.map(pt)) : [] };
        s.marks.push(Object.assign(nm, readExtras(m, nm, extrasCtx(s))));
      }
    });
    return ids;
  }
  updateMark(id, patch, label = t('undo.mark.edit')) {
    return this.change(label, (s) => {
      const m = s.marks.find((x) => x.id === id);
      if (!m) return false;
      if (patch.pts) {
        const n0 = m.pts.length;
        m.pts = patch.pts.map(pt);
        if (m.pts.length !== n0 && !('deducts' in patch)) delete m.deducts;     // other segments now: the deducts no longer fit
        if (m.pts.length !== n0 && !('slopes' in patch)) delete m.slopes;
      }
      if (patch.holes && m.kind === 'area') m.holes = patch.holes.map((h) => h.map(pt));
      for (const k of MARK_EXTRAS) {
        if (!(k in patch)) continue;
        delete m[k];
        Object.assign(m, readExtras({ [k]: patch[k] }, m, extrasCtx(s)));
      }
      if (patch.item) {
        const it = s.items.find((i) => i.id === patch.item);
        if (!kindsOf(it).includes(m.kind)) throw new Error(t('err.mark.move'));
        m.item = patch.item;
      }
    });
  }
  removeMarks(ids) {
    const set = new Set(ids);
    return this.change(t('undo.mark.delete', { n: set.size }), (s) => {
      const n = s.marks.length;
      s.marks = s.marks.filter((m) => !set.has(m.id));
      if (s.marks.length === n) return false;
    });
  }

  // ---- the bid summary and proposal (T19) ----
  bid() { return normalBid(this.state.bid); }
  setBid(patch, label = t('undo.bid')) {
    return this.change(label, (s) => {
      const next = normalBid({ ...normalBid(s.bid), ...patch });
      if (JSON.stringify(next) === JSON.stringify(normalBid(s.bid))) return false;
      s.bid = next;
    });
  }

  // ---- markups (T22): notes, clouds and highlights with a status ----
  note(id) { return (this.state.notes || []).find((n) => n.id === id) || null; }
  notesOn(sheet) { return (this.state.notes || []).filter((n) => n.sheet === sheet); }
  addNote(fields) {
    let id = null;
    this.change(t('undo.note.' + (NOTE_KINDS.includes(fields.kind) ? fields.kind : 'note')), (s) => {
      s.notes ??= [];
      if (s.notes.length >= LIMITS.notes) throw new Error(t('err.notes.many'));
      const n = normalNote({ ...fields, id: 'n' + (this.state.seq + 1) });
      if (!n) return false;
      id = this.nextId('n');
      s.notes.push({ ...n, id });
    });
    return id;
  }
  updateNote(id, patch, label = t('undo.note.edit')) {
    return this.change(label, (s) => {
      const i = (s.notes || []).findIndex((n) => n.id === id);
      if (i < 0) return false;
      const n = normalNote({ ...s.notes[i], ...patch, id, sheet: s.notes[i].sheet, kind: s.notes[i].kind });
      if (!n || JSON.stringify(n) === JSON.stringify(s.notes[i])) return false;
      s.notes[i] = n;
    });
  }
  removeNote(id) {
    return this.change(t('undo.note.delete'), (s) => {
      const n = (s.notes || []).length;
      s.notes = (s.notes || []).filter((x) => x.id !== id);
      if (s.notes.length === n) return false;
    });
  }

  // ---- typical groups (T16) ----
  group(id) { return (this.state.groups || []).find((g) => g.id === id) || null; }
  /** A new typical group; with `ids`, those marks go in it — one undo step. Returns its id. */
  addGroup(name, repeat = 1, ids = []) {
    let id = null;
    this.change(t('undo.group.new'), (s) => {
      s.groups ??= [];
      if (s.groups.length >= LIMITS.groups) throw new Error(t('err.group.many'));
      const n = str(name);
      if (!n) return false;
      if (!repeatOk(repeat)) throw new Error(t('err.group.repeat', { max: LIMITS.repeat }));
      id = this.nextId('g');
      s.groups.push({ id, name: n, repeat });
      const set = new Set(ids);
      for (const m of s.marks) if (set.has(m.id)) m.group = id;
    });
    return id;
  }
  /** Rename a group or change its repeat count. */
  updateGroup(id, { name, repeat } = {}) {
    return this.change(repeat !== undefined ? t('undo.group.repeat') : t('undo.group.rename'), (s) => {
      const g = (s.groups || []).find((x) => x.id === id);
      if (!g) return false;
      if (name !== undefined) { const n = str(name); if (!n) return false; g.name = n; }
      if (repeat !== undefined) { if (!repeatOk(repeat)) throw new Error(t('err.group.repeat', { max: LIMITS.repeat })); g.repeat = repeat; }
    });
  }
  /** Remove a group: its marks stay, counted once. */
  removeGroup(id) {
    return this.change(t('undo.group.delete'), (s) => {
      const n = (s.groups || []).length;
      s.groups = (s.groups || []).filter((g) => g.id !== id);
      if (s.groups.length === n) return false;
      for (const m of s.marks) if (m.group === id) delete m.group;
    });
  }
  /** Put marks in a typical group (null: in none) — one undo step. */
  setMarksGroup(ids, group, label = t('undo.group.set')) {
    const set = new Set(ids);
    return this.change(label, (s) => {
      if (group && !(s.groups || []).some((g) => g.id === group)) throw new Error(t('err.group.none'));
      let n = 0;
      for (const m of s.marks) {
        if (!set.has(m.id) || (m.group || null) === (group || null)) continue;
        if (group) m.group = group; else delete m.group;
        n++;
      }
      if (!n) return false;
    });
  }

  // ---- bid areas (T12) ----
  area(id) { return (this.state.areas || []).find((a) => a.id === id) || null; }
  addArea(name) {
    let id = null;
    this.change(t('undo.area.new'), (s) => {
      s.areas ??= [];
      if (s.areas.length >= LIMITS.areas) throw new Error(t('err.area.many'));
      const n = str(name);
      if (!n) return false;
      id = this.nextId('b');
      s.areas.push({ id, name: n });
    });
    return id;
  }
  renameArea(id, name) {
    return this.change(t('undo.area.rename'), (s) => {
      const a = (s.areas || []).find((x) => x.id === id), n = str(name);
      if (!a || !n || a.name === n) return false;
      a.name = n;
    });
  }
  /** Make a bid area an alternate (T17): 'add' (out of the base bid), 'deduct' (in it, offered off), null (base bid). */
  setAreaAlt(id, alt) {
    return this.change(t('undo.area.alt'), (s) => {
      const a = (s.areas || []).find((x) => x.id === id);
      const v = alt === 'add' || alt === 'deduct' ? alt : null;
      if (!a || (a.alt || null) === v) return false;
      if (v) a.alt = v; else delete a.alt;
    });
  }
  /** Remove a bid area: its marks stay, in no bid area. */
  removeArea(id) {
    return this.change(t('undo.area.delete'), (s) => {
      const n = (s.areas || []).length;
      s.areas = (s.areas || []).filter((a) => a.id !== id);
      if (s.areas.length === n) return false;
      for (const m of s.marks) if (m.area === id) delete m.area;
    });
  }
  moveArea(id, dir) {
    return this.change(t('undo.area.move'), (s) => {
      const i = s.areas.findIndex((a) => a.id === id), j = i + dir;
      if (i < 0 || j < 0 || j >= s.areas.length) return false;
      [s.areas[i], s.areas[j]] = [s.areas[j], s.areas[i]];
    });
  }
  /** Put marks in a bid area (null: in none) — one undo step. */
  setMarksArea(ids, area, label = t('undo.area.set')) {
    const set = new Set(ids);
    return this.change(label, (s) => {
      if (area && !(s.areas || []).some((a) => a.id === area)) throw new Error(t('err.area.none'));
      let n = 0;
      for (const m of s.marks) {
        if (!set.has(m.id) || (m.area || null) === (area || null)) continue;
        if (area) m.area = area; else delete m.area;
        n++;
      }
      if (!n) return false;
    });
  }

  // ---- revisions (T13) ----
  /**
   * Move marks onto another sheet (a revised PDF's page) in ONE undo step: each mark's points through `move(pts)`
   * (old user space → new), the ones in `flagged` marked for review. `scale`, when given, becomes the new sheet's
   * scale if it has none. → number of marks moved
   */
  carryMarks(ids, to, move, { flagged = new Set(), scale = null, label = t('undo.rev.carry') } = {}) {
    const set = new Set(ids);
    let n = 0;
    this.change(label, (s) => {
      for (const m of s.marks) {
        if (!set.has(m.id)) continue;
        m.sheet = to;
        m.pts = move(m.pts).map(pt);
        if (m.holes?.length) m.holes = m.holes.map((h) => move(h).map(pt));
        if (flagged.has(m.id)) m.flag = 'rev'; else delete m.flag;
        n++;
      }
      if (!n) return false;
      if (scale && !s.sheets[to]?.scale) s.sheets[to] = { ...(s.sheets[to] || {}), scale };
    });
    return n;
  }
  /** Clear the review flag of these marks (checked). */
  clearFlags(ids) {
    const set = new Set(ids);
    return this.change(t('undo.rev.checked'), (s) => {
      let n = 0;
      for (const m of s.marks) if (set.has(m.id) && m.flag) { delete m.flag; n++; }
      if (!n) return false;
    });
  }

  // ---- files ----
  toJSON(savedAt = new Date().toISOString()) {
    const s = this.state;
    return {
      format: FORMAT, version: FORMAT_VERSION, app: 'TakeoffCraft', savedAt,
      name: s.name, seq: s.seq,
      files: s.files.map((f) => ({ hash: f.hash, name: f.name, size: f.size, pages: f.pages })),
      sheets: s.sheets,
      ...(s.areas?.length ? { areas: s.areas.map((a) => ({ id: a.id, name: a.name, ...(a.alt ? { alt: a.alt } : {}) })) } : {}),
      ...(bidUsed(s.bid) ? { bid: normalBid(s.bid) } : {}),
      ...(s.notes?.length ? { notes: s.notes.map((n) => ({ id: n.id, sheet: n.sheet, kind: n.kind, pts: n.pts.map((p) => [p.x, p.y]), text: n.text, status: n.status })) } : {}),
      ...(s.groups?.length ? { groups: s.groups.map((g) => ({ id: g.id, name: g.name, repeat: g.repeat })) } : {}),
      items: s.items,
      marks: s.marks.map((m) => ({ id: m.id, item: m.item, sheet: m.sheet, kind: m.kind, pts: m.pts.map(arr), ...(m.holes?.length ? { holes: m.holes.map((h) => h.map(arr)) } : {}), ...markExtras(m) })),
    };
  }
  /** Replace the project with a parsed .takeoff.json (validated; it is an untrusted file). */
  load(json) {
    const r = readProject(json);
    if (!r.ok) return r;
    this.state = r.state;
    this.undoStack = []; this.redoStack = [];
    this.version++; this.savedVersion = this.version;
    this.emit('load');
    return r;
  }
}

/** A point in memory: {x, y} plus b (bulge: the segment starting here is an arc) only when it is one. */
const pt = (p) => { const q = Array.isArray(p) ? { x: p[0], y: p[1], b: p[2] } : { x: p.x, y: p.y, b: p.b }; if (!q.b) delete q.b; return q; };
/** …and in the file: [x, y] or [x, y, bulge]. */
const arr = (p) => (p.b ? [p.x, p.y, p.b] : [p.x, p.y]);
const str = (v, max = LIMITS.name) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
const int = (v, lo, hi, d = 0) => (Number.isInteger(v) && v >= lo && v <= hi ? v : d);

export function normalItem(f) {
  const type = TYPES.includes(f.type) ? f.type : 'linear';
  const unit = UNITS_FOR[type].includes(f.unit) ? f.unit : DEFAULT_UNIT[type];
  return {
    id: String(f.id),
    name: str(f.name) || t('item.untitled'),
    type,
    color: /^#[0-9a-f]{6}$/i.test(f.color || '') ? f.color.toUpperCase() : PALETTE[0],
    unit,
    heightFt: Number.isFinite(f.heightFt) && f.heightFt >= 0 && f.heightFt < 1e6 ? f.heightFt : 0,
    waste: int(f.waste, 0, 100000),
    mat: int(f.mat, 0, 1e13),
    lab: int(f.lab, 0, 1e13),
    components: Array.isArray(f.components) ? f.components.slice(0, LIMITS.components).map(normalComponent) : [],
    ...conds(f.conds, type),
    ...(crewOf(f.crew) ? { crew: crewOf(f.crew) } : {}),
    ...(type !== 'count' && pitchOk(f.pitch) && f.pitch > 0 ? { pitch: f.pitch } : {}),
    ...(type === 'linear' && feetOk(f.thickFt) ? { thickFt: f.thickFt } : {}),
    ...(type !== 'count' && feetOk(f.baseFt) ? { baseFt: f.baseFt } : {}),
    ...(type === 'linear' && feetOk(f.headFt) ? { headFt: f.headFt } : {}),
    ...(type === 'linear' && (f.slope === 'rake' || f.slope === 'hip') ? { slope: f.slope } : {}),
    ...(type === 'area' && f.backout === true ? { backout: true, backoutOf: [...new Set((Array.isArray(f.backoutOf) ? f.backoutOf : []).filter((x) => typeof x === 'string' && x !== String(f.id)).slice(0, LIMITS.items))] } : {}),
  };
}
function conds(list, type) {
  const out = [];
  for (const c of Array.isArray(list) ? list : []) { const n = normalCond(c, type); if (n && !out.some((x) => x.kind === n.kind)) out.push(n); }
  out.sort((a, b) => TYPES.indexOf(a.kind) - TYPES.indexOf(b.kind));
  return out.length ? { conds: out } : {};
}
export function normalComponent(f) {
  return {
    id: String(f.id),
    name: str(f.name) || t('comp.default'),
    unit: str(f.unit, 20) || 'EA',
    formula: str(f.formula, LIMITS.formula),
    waste: int(f.waste, 0, 100000),
    mat: int(f.mat, 0, 1e13),
    lab: int(f.lab, 0, 1e13),
  };
}

/** Validate + normalise a project file. → { ok, state, warnings } | { ok: false, error } */
export function readProject(json) {
  const fail = (e) => ({ ok: false, error: e });
  if (!json || typeof json !== 'object' || json.format !== FORMAT) return fail(t('file.err.format'));
  if (!(json.version >= 1)) return fail(t('file.err.version'));
  if (json.version > FORMAT_VERSION) return fail(t('file.err.newer'));
  const warnings = [];
  const state = emptyState();
  state.name = str(json.name) || 'Takeoff';
  state.seq = int(json.seq, 0, 1e9);
  const finite = (n) => typeof n === 'number' && Number.isFinite(n) && Math.abs(n) < 1e7;
  const ptsOk = (a, min) => Array.isArray(a) && a.length >= min && a.length <= LIMITS.points && a.every((p) => Array.isArray(p) && (p.length === 2 || (p.length === 3 && finite(p[2]) && Math.abs(p[2]) <= 1000)) && finite(p[0]) && finite(p[1]));

  for (const f of Array.isArray(json.files) ? json.files : []) {
    if (!f || !/^[0-9a-f]{64}$/.test(f.hash)) { warnings.push(t('file.warn.hash')); continue; }
    state.files.push({ hash: f.hash, name: str(f.name, 255) || 'drawing.pdf', size: int(f.size, 0, 1e13), pages: int(f.pages, 0, 1e6) });
  }
  const known = new Set(state.files.map((f) => f.hash));
  const sheetOk = (k) => typeof k === 'string' && /^[0-9a-f]{64}:\d{1,6}$/.test(k) && known.has(k.split(':')[0]);
  for (const [k, v] of Object.entries(json.sheets && typeof json.sheets === 'object' ? json.sheets : {})) {
    if (!sheetOk(k)) continue;
    const sc = v?.scale;
    let scale = null;
    if (sc && finite(sc.ftPerUnit) && sc.ftPerUnit > 0 && ['preset', 'calibrated'].includes(sc.method)) {
      scale = { method: sc.method, ftPerUnit: sc.ftPerUnit, preset: typeof sc.preset === 'string' ? sc.preset.slice(0, 20) : null, label: str(sc.label, 80), cal: null };
      if (sc.cal && ptsOk([sc.cal.a, sc.cal.b], 2) && finite(sc.cal.ft)) scale.cal = { a: sc.cal.a.slice(0, 2), b: sc.cal.b.slice(0, 2), ft: sc.cal.ft, text: str(sc.cal.text, 40) };
    }
    state.sheets[k] = { scale };
    if (typeof v?.level === 'number' && Number.isFinite(v.level) && Math.abs(v.level) < 1e5) state.sheets[k].level = v.level;
  }
  const ids = new Set();
  for (const raw of Array.isArray(json.items) ? json.items.slice(0, LIMITS.items) : []) {
    if (!raw || typeof raw.id !== 'string' || ids.has(raw.id)) continue;
    const it = normalItem({ ...raw, components: (Array.isArray(raw.components) ? raw.components : []).filter((c) => c && typeof c.id === 'string') });
    ids.add(it.id);
    state.items.push(it);
  }
  for (const a of Array.isArray(json.areas) ? json.areas.slice(0, LIMITS.areas) : []) {
    if (!a || typeof a.id !== 'string' || !/^[A-Za-z0-9_-]{1,40}$/.test(a.id) || state.areas.some((x) => x.id === a.id) || !str(a.name)) continue;
    state.areas.push({ id: a.id, name: str(a.name), ...(a.alt === 'add' || a.alt === 'deduct' ? { alt: a.alt } : {}) });
  }
  if (json.bid && typeof json.bid === 'object') state.bid = normalBid(json.bid);
  const nids = new Set();
  for (const raw of Array.isArray(json.notes) ? json.notes.slice(0, LIMITS.notes) : []) {
    if (!raw || typeof raw.id !== 'string' || !/^[A-Za-z0-9_-]{1,40}$/.test(raw.id) || nids.has(raw.id) || !sheetOk(raw.sheet)) continue;
    const n = normalNote(raw);
    if (n) { nids.add(n.id); (state.notes ??= []).push(n); }
  }
  for (const g of Array.isArray(json.groups) ? json.groups.slice(0, LIMITS.groups) : []) {
    if (!g || typeof g.id !== 'string' || !/^[A-Za-z0-9_-]{1,40}$/.test(g.id) || (state.groups ??= []).some((x) => x.id === g.id) || !str(g.name)) continue;
    state.groups.push({ id: g.id, name: str(g.name), repeat: repeatOk(g.repeat) ? g.repeat : 1 });
  }
  const types = new Map(state.items.map((i) => [i.id, i.type]));
  const kinds = new Map(state.items.map((i) => [i.id, kindsOf(i)]));
  for (const it of state.items) if (it.backout) it.backoutOf = it.backoutOf.filter((id) => types.get(id) === 'area' && !state.items.find((x) => x.id === id)?.backout);
  let dropped = 0;
  const mids = new Set();
  for (const m of Array.isArray(json.marks) ? json.marks.slice(0, LIMITS.marks) : []) {
    if (!m || typeof m.id !== 'string' || mids.has(m.id) || !types.has(m.item) || !sheetOk(m.sheet) || !kinds.get(m.item).includes(m.kind)) { dropped++; continue; }
    const min = m.kind === 'area' ? 2 : 1 + (m.kind === 'linear');
    const ringOk = (r) => ptsOk(r, 2) && (r.length >= 3 || r.some((p) => p[2]));   // two points only as a circle
    if (!ptsOk(m.pts, min) || (m.kind === 'area' && !ringOk(m.pts)) || (m.kind === 'count' && m.pts.some((p) => p[2]))) { dropped++; continue; }
    const holes = m.kind === 'area' && Array.isArray(m.holes) ? m.holes.slice(0, LIMITS.holes).filter(ringOk) : [];
    mids.add(m.id);
    const nm = { id: m.id, item: m.item, sheet: m.sheet, kind: m.kind, pts: m.pts.map(pt), holes: holes.map((h) => h.map(pt)) };
    state.marks.push(Object.assign(nm, readExtras(m, nm, extrasCtx(state))));
  }
  if (dropped) warnings.push(t('file.warn.dropped', { n: dropped }));
  // keep ids unique going forward
  const maxN = Math.max(0, ...[...ids, ...mids, ...state.areas.map((a) => a.id), ...(state.groups || []).map((g) => g.id), ...(state.notes || []).map((n) => n.id), ...state.items.flatMap((i) => i.components.map((c) => c.id))].map((id) => parseInt(String(id).slice(1), 10) || 0));
  state.seq = Math.max(state.seq, maxN);
  return { ok: true, state, warnings };
}

// ---------------------------------------------------------------------------
// Quantities

/**
 * One mark measured with a scale (ftPerUnit) — feet / square feet. Null scale → null. `it` (its item) brings the pitch
 * (T15): runs measure their rake / hip segments along the slope, areas their sloped surface. Plan values are kept
 * (planFt, planSqft, segmentsFt in plan; slopedFt per segment) and the factor an area used.
 */
export function measureMark(m, ftPerUnit, it = null) {
  if (m.kind === 'count') return { count: 1 };
  if (it && it.type !== m.kind) it = null;                 // a second condition's mark (T8): the item's pitch is not its own
  if (!(ftPerUnit > 0)) return null;
  const pitch = m.pitch ?? it?.pitch ?? 0;
  if (m.kind === 'linear') {
    const segs = segmentLengths(m.pts).map((d) => d * ftPerUnit);
    const kinds = segs.map((_, i) => segSlope(m, it, i));
    const sloped = segs.map((d, i) => d * (kinds[i].k === 'rake' ? slopeFactor(kinds[i].p) : kinds[i].k === 'hip' ? hipFactor(kinds[i].p) : 1));
    const ded = new Set(m.deducts || []);
    let len = 0, cut = 0, plan = 0;
    sloped.forEach((d, i) => { if (ded.has(i)) cut += d; else { len += d; plan += segs[i]; } });
    return { lengthFt: len, grossFt: len + cut, deductFt: cut, planFt: plan, segmentsFt: segs, slopedFt: sloped, slopes: kinds, deducts: [...ded] };
  }
  const a = areaWithHoles(m.pts, m.holes);
  const k2 = ftPerUnit * ftPerUnit, f = slopeFactor(pitch);
  return { areaSqft: a.net * k2 * f, planSqft: a.net * k2, factor: f, pitch, grossSqft: a.gross * k2 * f, cutSqft: a.cut * k2 * f, perimeterFt: a.perimeter * ftPerUnit, outerPerimeterFt: a.outerPerimeter * ftPerUnit };
}
/** A run segment's slope: its own, else the item's ('rake' | 'hip' with a pitch), else flat. → { k, p } */
export function segSlope(m, it, i) {
  const own = m.slopes?.[i];
  const k = own?.k ?? it?.slope ?? 'flat';
  const p = own?.p ?? m.pitch ?? it?.pitch ?? 0;
  return k === 'flat' || !(p > 0) ? { k: 'flat', p: 0 } : { k, p };
}

/**
 * Totals per item (feet / square feet) and per sheet. Marks on sheets with no scale are
 * counted in `unscaled` and left out of the totals — never measured as zero silently.
 */
export function quantities(state, { area, exclude } = {}) {
  const out = new Map();
  for (const it of state.items) out.set(it.id, { item: it, lengthFt: 0, areaSqft: 0, perimeterFt: 0, count: 0, marks: 0, unscaled: 0, backoutSqft: 0, bySheet: new Map() });
  const bo = backouts(state);
  const rep = new Map((state.groups || []).map((g) => [g.id, g.repeat]));
  for (const m of state.marks) {
    if (area !== undefined && (m.area || null) !== area) continue;      // one bid area (null: the marks in none)
    if (exclude && m.area && exclude.has(m.area)) continue;              // add alternates, out of the base bid (T17)
    const q = out.get(m.item);
    if (!q) continue;
    q.marks++;
    const sc = state.sheets[m.sheet]?.scale;
    const r = measureMark(m, sc?.ftPerUnit, q.item);
    if (!r) { q.unscaled++; continue; }
    let s = q.bySheet.get(m.sheet);
    if (!s) q.bySheet.set(m.sheet, (s = { lengthFt: 0, areaSqft: 0, perimeterFt: 0, count: 0, marks: 0 }));
    s.marks++;
    const k = rep.get(m.group) || 1;                       // a typical group's mark (T16) counts `repeat` times
    if (m.kind !== q.item.type) {                          // a second condition (T8): its own totals, measured plainly
      const zero = () => ({ lengthFt: 0, areaSqft: 0, perimeterFt: 0, count: 0, marks: 0 });
      const qc = ((q.conds ??= {})[m.kind] ??= zero()), sc2 = ((s.conds ??= {})[m.kind] ??= zero());
      for (const o of [qc, sc2]) { o.marks++; o.count += k; o.lengthFt += (r.lengthFt || 0) * k; o.areaSqft += (r.areaSqft || 0) * k; o.perimeterFt += (r.perimeterFt || 0) * k; }
      continue;
    }
    if (m.kind === 'count') { q.count += k; s.count += k; }
    else if (m.kind === 'linear') { q.lengthFt += r.lengthFt * k; s.lengthFt += r.lengthFt * k; q.count += k; s.count += k; }
    else {
      const cut = bo.cut(m, sc.ftPerUnit) * r.factor;     // back-outs (T14) that cover part of it, on the slope (T15)
      const a = Math.max(0, r.areaSqft - cut);
      q.areaSqft += a * k; s.areaSqft += a * k; q.backoutSqft += (r.areaSqft - a) * k; q.perimeterFt += r.perimeterFt * k; s.perimeterFt += r.perimeterFt * k; q.count += k; s.count += k;
    }
  }
  return out;
}

/**
 * Back-outs (T14): the marks of back-out items, by sheet, and what they take out of an area mark.
 *   const bo = backouts(state); bo.cut(mark, ftPerUnit) → square feet (0 when none applies)
 * A back-out applies to the area marks, on its sheet, of the items its item deducts from (`backoutOf`). Its outline
 * must be convex (rectangles, circles, any shape without an inward corner): one that is not deducts nothing and is
 * listed in `bad` (the app says so). Back-outs are not deducted from each other; overlapping back-outs would both count.
 */
export function backouts(state) {
  const items = new Map(state.items.map((i) => [i.id, i]));
  const bySheet = new Map(), bad = [];
  for (const m of state.marks) {
    const it = items.get(m.item);
    if (!it?.backout || m.kind !== 'area' || !it.backoutOf?.length) continue;
    if (!isConvex(m.pts) || m.holes?.length) { bad.push(m.id); continue; }
    let l = bySheet.get(m.sheet);
    if (!l) bySheet.set(m.sheet, (l = []));
    l.push({ m, of: new Set(it.backoutOf), box: bounds(m.pts) });
  }
  return {
    bad,
    any: bySheet.size > 0,
    cut(m, ftPerUnit) {
      const list = bySheet.get(m.sheet);
      if (!list || m.kind !== 'area' || !(ftPerUnit > 0)) return 0;
      const ob = bounds(m.pts);
      let a = 0;
      for (const b of list) {
        if (!b.of.has(m.item) || b.m.id === m.id) continue;
        if (b.box.minX >= ob.maxX || b.box.maxX <= ob.minX || b.box.minY >= ob.maxY || b.box.maxY <= ob.minY) continue;
        a += overlapArea(m.pts, m.holes || [], b.m.pts);
      }
      return a * ftPerUnit * ftPerUnit;
    },
  };
}

/** Formula variables for an item's totals (or one sheet's), in the item's own units. */
export function itemVars(it, t) {
  const lu = lengthUnitOf(it.unit);
  if (it.type === 'linear') {
    return { L: ftTo(t.lengthFt, lu), H: ftTo(it.heightFt, lu), A: sqftTo(t.lengthFt * it.heightFt, areaUnitOf(it.unit)), N: t.count };
  }
  if (it.type === 'area') return { A: sqftTo(t.areaSqft, it.unit), P: ftTo(t.perimeterFt, lu), H: ftTo(it.heightFt, lu), N: t.count };
  return { N: t.count };
}
/** A second condition's quantity (T8) in its unit, from its totals ({ lengthFt, areaSqft, count } or none). */
export function condQty(c, t) {
  if (!t) return 0;
  return c.kind === 'linear' ? ftTo(t.lengthFt, lengthUnitOf(c.unit)) : c.kind === 'area' ? sqftTo(t.areaSqft, c.unit) : t.count;
}
/** The item's own quantity in its unit. */
export function itemQty(it, t) {
  const v = itemVars(it, t);
  return it.type === 'linear' ? v.L : it.type === 'area' ? v.A : v.N;
}

/**
 * The priced estimate: a row per item and per component, extended in cents.
 *   qty → qty × (1 + waste) → × material rate, × labor rate (each rounded to the cent) → total
 * A component whose formula fails gets `error` and no amounts; the estimate is then `incomplete`.
 */
export function estimate(state, q = quantities(state)) {
  const rows = [];
  let mat = 0, lab = 0, errors = 0, unscaled = 0, hours = 0, workerHours = 0;
  for (const it of state.items) {
    const t = q.get(it.id);
    const vars = itemVars(it, t);
    const qty = itemQty(it, t);
    const row = priced({ kind: 'item', itemId: it.id, name: it.name, unit: UNITS[it.unit].label, qty, waste: it.waste, mat: it.mat, lab: it.lab, type: it.type, ...(it.crew ? { crew: it.crew } : {}) });
    if (row.work) { hours += row.work.hours; workerHours += row.work.workerHours; }
    row.unscaled = t.unscaled;
    row.marks = t.marks - Object.values(t.conds || {}).reduce((n, c) => n + c.marks, 0);
    if (t.backoutSqft > 0) row.backout = { value: sqftTo(t.backoutSqft, it.unit), unit: UNITS[it.unit].label };
    if (it.type === 'linear' && it.heightFt > 0) row.wallArea = { value: vars.A, unit: areaUnitOf(it.unit) };
    if (it.type === 'area') row.perimeter = { value: vars.P, unit: lengthUnitOf(it.unit) === 'm' ? 'm' : 'LF' };
    unscaled += t.unscaled;
    rows.push(row);
    mat += row.matExt; lab += row.labExt;
    for (const c of it.conds || []) {                      // T8: each second condition priced on its own row
      const cr = priced({ kind: 'condition', itemId: it.id, cond: c.kind, name: it.name, unit: UNITS[c.unit].label, qty: condQty(c, t.conds?.[c.kind]), waste: c.waste, mat: c.mat, lab: c.lab, type: c.kind });
      cr.marks = t.conds?.[c.kind]?.marks || 0;
      rows.push(cr);
      mat += cr.matExt; lab += cr.labExt;
    }
    for (const c of it.components) {
      const p = parse(c.formula, VARS[it.type]);
      let cr;
      if (!p.ok) cr = { kind: 'component', itemId: it.id, compId: c.id, name: c.name, unit: c.unit, error: p.error, waste: c.waste, mat: c.mat, lab: c.lab };
      else {
        try { cr = priced({ kind: 'component', itemId: it.id, compId: c.id, name: c.name, unit: c.unit, qty: evaluate(p.ast, vars), waste: c.waste, mat: c.mat, lab: c.lab }); }
        catch (err) { cr = { kind: 'component', itemId: it.id, compId: c.id, name: c.name, unit: c.unit, error: err.message, waste: c.waste, mat: c.mat, lab: c.lab }; }
      }
      cr.formula = c.formula;
      if (cr.error) errors++;
      else { mat += cr.matExt; lab += cr.labExt; }
      rows.push(cr);
    }
  }
  return { rows, matTotal: mat, labTotal: lab, total: mat + lab, errors, unscaled, incomplete: errors > 0 || unscaled > 0, hours, workerHours, days: hours / CREW_DAY };
}

/**
 * The estimate of each bid area (T12): [{ area: {id, name} | null (marks in no bid area), est }], in the
 * bid areas' order, then "no bid area" — only areas that hold marks, and "no bid area" only when the takeoff has areas
 * or such marks. Assembly formulas run on each area's own totals. The rows of all areas add up to the job when no
 * formula rounds (ceil/round per area can make the parts differ from the whole, as on a real bid).
 */
export function areaEstimates(state) {
  const out = [];
  const used = new Set(state.marks.map((m) => m.area || null));
  for (const a of state.areas || []) if (used.has(a.id)) out.push({ area: a, est: estimate(state, quantities(state, { area: a.id })) });
  if (used.has(null) && (state.areas || []).length) out.push({ area: null, est: estimate(state, quantities(state, { area: null })) });
  return out;
}

/** The bid areas that are add alternates (T17): their marks are not in the base bid. */
export const addAlternates = (state) => new Set((state.areas || []).filter((a) => a.alt === 'add').map((a) => a.id));

/** The base bid (T17): the estimate without the add alternates' marks. Without alternates, the whole estimate. */
export function baseEstimate(state) {
  const ex = addAlternates(state);
  return estimate(state, ex.size ? quantities(state, { exclude: ex }) : quantities(state));
}

/**
 * The alternates (T17), in bid area order: [{ area, alt, est, amount }]. `amount` (cents) is what taking the alternate does
 * to the base bid: + the add's cost, − the deduct's cost. Only items with marks in the area count (and their assemblies):
 * an item's assembly is not priced in an alternate it has no marks in.
 */
export function alternates(state) {
  const out = [];
  for (const a of state.areas || []) {
    if (!a.alt) continue;
    const est = estimate(state, quantities(state, { area: a.id }));
    const live = new Set(est.rows.filter((r) => (r.kind === 'item' || r.kind === 'condition') && r.marks > 0).map((r) => r.itemId));
    const rows = est.rows.filter((r) => live.has(r.itemId));
    const total = rows.reduce((n, r) => n + (r.error ? 0 : r.total), 0);
    out.push({ area: a, alt: a.alt, est: { ...est, rows, total, matTotal: rows.reduce((n, r) => n + (r.error ? 0 : r.matExt), 0), labTotal: rows.reduce((n, r) => n + (r.error ? 0 : r.labExt), 0) }, amount: a.alt === 'add' ? total : -total });
  }
  return out;
}

function priced(r) {
  const qtyW = withWaste(r.qty, r.waste);
  const matExt = extendCents(qtyW, r.mat);
  if (r.crew) {                                            // T18: labor from the crew's hours; `lab` shows the rate it comes to
    const work = crewWork(r.crew, qtyW);
    return { ...r, lab: work.rate, qtyW, matExt, labExt: work.labExt, total: matExt + work.labExt, work };
  }
  const labExt = extendCents(qtyW, r.lab);
  return { ...r, qtyW, matExt, labExt, total: matExt + labExt };
}

/** Per-sheet breakdown rows: [{ sheet, itemId, qty, unit }] in the item's unit. */
export function sheetBreakdown(state, q = quantities(state)) {
  const rows = [];
  for (const it of state.items) {
    for (const [sheet, t] of q.get(it.id).bySheet) {
      const own = t.marks - Object.values(t.conds || {}).reduce((n, c) => n + c.marks, 0);
      if (own || !t.conds) rows.push({ sheet, itemId: it.id, name: it.name, unit: UNITS[it.unit].label, qty: itemQty(it, t), marks: own });
      for (const c of it.conds || []) if (t.conds?.[c.kind]) rows.push({ sheet, itemId: it.id, cond: c.kind, name: it.name, unit: UNITS[c.unit].label, qty: condQty(c, t.conds[c.kind]), marks: t.conds[c.kind].marks });
    }
  }
  return rows;
}
