/* SPDX-License-Identifier: Apache-2.0 */
/**
 * library.js — the assembly and price library (0.4 item T9): items with their rates and assemblies, imported from CSV,
 * kept in the browser and reused across takeoffs. DOM-free (tested in Node); the app stores it (localStorage
 * "takeoffcraft.library") and shows it in the Library dialog.
 *
 *   readLibraryCsv(text)          → { ok, entries, warnings } | { ok: false, error }
 *   libraryCsv(entries)           → CSV text that reads back the same (the import format, with a header)
 *   mergeEntries(lib, entries)    → { lib, added, updated }   same name and type (any case) = the same entry, replaced
 *   entryFromItem(item)           an item of a takeoff as a library entry (rates, height, assembly; no marks)
 *   itemFromEntry(entry)          fields for model.addItem / the takeoff file
 *   repricePatches(items, lib)    → [{ id, patch }] the takeoff's items that have a library entry, with its rates
 *   entryMeta(e)                  an entry's pack / source / note (0.5 TK.1), validated; trade packs themselves: packs.js
 *
 * The CSV: one row per item, then a row per component of its assembly. Columns are found by their header (any order,
 * any case, English names or the app's own export headers): Item (or Name), Type, Unit, Waste %, Material per unit,
 * Labor per unit, Height (or Depth), Component, Formula, Notes. A row is a component when its Component column is
 * filled, or its Type says Component (the app's estimate CSV: the formula is then read from its Notes). The estimate CSV
 * TakeoffCraft exports reads in as a library, so the prices of one job seed the next.
 */

import { t } from './i18n.js';
import { TYPES, normalItem, normalComponent, LIMITS } from './model.js';
import { UNITS_FOR, DEFAULT_UNIT, UNITS, parseRate, parsePercent, parseLength, formatFtIn, roundTo } from './units.js';
import { csvLine } from './export.js';

export const LIBRARY_MAX = 5000;

/** RFC 4180 CSV → rows of strings. Takes ',' or ';' or a tab (whichever the header line has most of); a BOM is dropped. */
export function parseCsv(text) {
  const s = String(text ?? '').replace(/^\uFEFF/, '');
  const first = s.slice(0, s.search(/\r?\n|$/));
  const counts = [',', ';', '\t'].map((d) => [d, first.split(d).length]);
  const sep = counts.sort((a, b) => b[1] - a[1])[0][0];
  const rows = [];
  let row = [], cell = '', q = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) {
      if (c === '"') { if (s[i + 1] === '"') { cell += '"'; i++; } else q = false; }
      else cell += c;
    } else if (c === '"' && cell === '') q = true;
    else if (c === sep) { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && s[i + 1] === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
    } else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  return rows.filter((r) => r.some((c) => c.trim() !== ''));
}

const key = (s) => String(s).toLowerCase().replace(/[^a-z0-9\u00c0-\uffff]+/g, '');
/** Header names → field. English names, then the app's export headers (in the language it runs in). */
function headerMap() {
  const m = new Map();
  const add = (field, ...names) => { for (const n of names) if (n) m.set(key(n), field); };
  add('name', 'item', 'name', 'description', 'itemname', 'condition');
  add('type', 'type', 'kind', 'measure');
  add('unit', 'unit', 'uom', 'units');
  add('waste', 'waste', 'waste%', 'wastepercent', 'wastepct');
  add('mat', 'material', 'materialperunit', 'materialrate', 'materialunit', 'mat', 'matrate', 'materialcost', 'materialprice');
  add('lab', 'labor', 'labour', 'laborperunit', 'labourperunit', 'laborrate', 'labourrate', 'lab', 'laborcost', 'labourcost');
  add('height', 'height', 'depth', 'heightdepth', 'heightordepth', 'thickness');
  add('component', 'component', 'part', 'assemblycomponent');
  add('formula', 'formula', 'quantityformula', 'qtyformula');
  add('notes', 'notes', 'note', 'comments');
  // the estimate CSV's own headers (x.head.*), so an export reads back
  for (const [k, f] of [['item', 'name'], ['type', 'type'], ['unit', 'unit'], ['waste', 'waste'], ['matu', 'mat'], ['labu', 'lab'], ['notes', 'notes']]) add(f, t('x.head.' + k));
  for (const [k, f] of [['name', 'name'], ['type', 'type'], ['unit', 'unit'], ['waste', 'waste'], ['mat', 'mat'], ['lab', 'lab'], ['height', 'height'], ['component', 'component'], ['formula', 'formula']]) add(f, t('lib.head.' + k));
  return m;
}

/** "Linear", "LF", "area", "SF", "Count", "EA", the app's own type names … → 'linear' | 'area' | 'count' | 'component' | null */
function readType(v) {
  const k = key(v);
  if (!k) return null;
  if (k === key(t('x.component')) || k === 'component' || k === 'part') return 'component';
  for (const ty of TYPES) if (k === key(t('type.' + ty)) || k === ty) return ty;
  if (['lf', 'length', 'len', 'lin', 'm', 'meter', 'metre', 'linearfeet', 'line', 'run'].includes(k)) return 'linear';
  if (['sf', 'sy', 'm2', 'm²', 'sqft', 'surface', 'squarefeet', 'floor'].includes(k)) return 'area';
  if (['ea', 'each', 'no', 'pcs', 'qty', 'number', 'cnt'].includes(k)) return 'count';
  return null;
}
/** A unit as typed → a unit id of `type` (null when it is none of its units). */
function readUnit(v, type) {
  const k = key(v).replace('²', '2');
  if (!k) return null;
  for (const u of UNITS_FOR[type]) if (key(u).replace('²', '2') === k || key(UNITS[u].label).replace('²', '2') === k) return u;
  return null;
}
const typeOfUnit = (v) => { for (const ty of TYPES) if (readUnit(v, ty)) return ty; return null; };

/** CSV text → library entries. Rows it cannot read are skipped, each with a warning. */
export function readLibraryCsv(text) {
  const rows = parseCsv(text);
  if (rows.length < 2) return { ok: false, error: t('lib.err.empty') };
  const hm = headerMap();
  const cols = {};
  rows[0].forEach((h, i) => { const f = hm.get(key(h)); if (f && !(f in cols)) cols[f] = i; });
  if (!('name' in cols)) return { ok: false, error: t('lib.err.head') };
  const formulaNote = new RegExp('^' + t('x.note.formula', { formula: '\u0000' }).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace('\u0000', '(.+)') + '$');
  const entries = [], warnings = [];
  const total = key(t('x.total')), base = key(t('export.alt.base')), altHead = key(t('export.alt.h'));
  const cell = (r, f) => (f in cols ? String(r[cols[f]] ?? '').trim() : '');
  let last = null;
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i], line = i + 1;
    const name = cell(r, 'name').replace(/^'/, ''), comp = cell(r, 'component').replace(/^'/, '');
    const tyRaw = cell(r, 'type');
    let ty = readType(tyRaw);
    if (!name && !comp) continue;
    if ((key(name) === total || key(name) === base) && !tyRaw) continue;  // the estimate's "Job total" / "Base bid" row
    if (key(name) === altHead && !comp) break;                          // its alternates (T17) follow: not items
    const waste = parsePercent(cell(r, 'waste').replace(/^'/, '')), mat = parseRate(cell(r, 'mat')), lab = parseRate(cell(r, 'lab'));
    if (!waste.ok || !mat.ok || !lab.ok) { warnings.push(t('lib.warn.row', { line, why: (!waste.ok ? waste : !mat.ok ? mat : lab).error })); continue; }
    if (comp || ty === 'component') {
      if (!last) { warnings.push(t('lib.warn.orphan', { line })); continue; }
      let formula = cell(r, 'formula').replace(/^'/, '');
      if (!formula) for (const part of cell(r, 'notes').split(/;\s*/)) { const m = formulaNote.exec(part.trim()); if (m) { formula = m[1].trim(); break; } }
      if (!formula) { warnings.push(t('lib.warn.formula', { line })); continue; }
      if (last.components.length >= LIMITS.components) { warnings.push(t('lib.warn.comps', { line })); continue; }
      last.components.push(normalComponent({ id: 'c' + (last.components.length + 1), name: comp || name, unit: cell(r, 'unit') || 'EA', formula, waste: waste.bp, mat: mat.rate4, lab: lab.rate4 }));
      continue;
    }
    if (!ty) ty = typeOfUnit(cell(r, 'unit'));
    if (!ty) { warnings.push(t('lib.warn.type', { line, type: tyRaw || '—' })); last = null; continue; }
    const unitRaw = cell(r, 'unit');
    const unit = readUnit(unitRaw, ty);
    if (unitRaw && !unit) warnings.push(t('lib.warn.unit', { line, unit: unitRaw, def: UNITS[DEFAULT_UNIT[ty]].label }));
    let heightFt = 0;
    const hRaw = cell(r, 'height');
    if (hRaw && ty !== 'count') {
      const h = parseLength(hRaw, { defaultUnit: unit === 'm' || unit === 'm²' ? 'm' : 'ft' });
      if (h.ok) heightFt = h.ft; else warnings.push(t('lib.warn.height', { line, why: h.error }));
    }
    if (entries.length >= LIBRARY_MAX) { warnings.push(t('lib.warn.max', { n: LIBRARY_MAX })); break; }
    last = { name: name.slice(0, LIMITS.name), type: ty, unit: unit || DEFAULT_UNIT[ty], heightFt, waste: waste.bp, mat: mat.rate4, lab: lab.rate4, components: [] };
    entries.push(last);
  }
  if (!entries.length) return { ok: false, error: warnings[0] || t('lib.err.none') };
  return { ok: true, entries: mergeEntries([], entries).lib, warnings };
}

const sameEntry = (a, b) => a.type === b.type && a.name.trim().toLowerCase() === b.name.trim().toLowerCase();

/** Add entries to a library: one with the same name and type replaces it (in its place), the others go at the end. */
export function mergeEntries(lib, entries) {
  const out = lib.slice();
  let added = 0, updated = 0;
  for (const e of entries) {
    const i = out.findIndex((x) => sameEntry(x, e));
    if (i >= 0) { out[i] = e; updated++; } else if (out.length < LIBRARY_MAX) { out.push(e); added++; }
  }
  return { lib: out, added, updated };
}

/** A takeoff item → a library entry (what is worth reusing: unit, height, waste, rates, assembly). */
export function entryFromItem(it) {
  return {
    name: it.name, type: it.type, unit: it.unit, heightFt: it.heightFt || 0, waste: it.waste, mat: it.mat, lab: it.lab,
    ...(it.crew ? { crew: { ...it.crew } } : {}),                  // T18: a crew travels with the item (not in the CSV)
    ...(it.csi ? { csi: it.csi } : {}),                            // TK.4: its CSI MasterFormat number
    components: (it.components || []).map((c, i) => ({ id: 'c' + (i + 1), name: c.name, unit: c.unit, formula: c.formula, waste: c.waste, mat: c.mat, lab: c.lab })),
  };
}
/** A library entry → item fields (the model gives it an id, a colour and component ids). */
export function itemFromEntry(e) {
  const it = normalItem({ id: 'x', name: e.name, type: e.type, unit: e.unit, heightFt: e.heightFt, waste: e.waste, mat: e.mat, lab: e.lab, crew: e.crew, csi: e.csi, components: e.components || [] });
  delete it.id;
  return it;
}

/**
 * What a library entry may carry beyond its item fields (0.5 TK.1, trade packs): `pack` {id, version, name} (the pack it was
 * installed from — Remove takes those entries out in one step), `src` (where its assembly comes from), `note` (what to check).
 * Untrusted (storage, a pack file): anything else is dropped.
 */
export function entryMeta(e) {
  const o = {};
  const p = e?.pack;
  if (p && typeof p === 'object' && typeof p.id === 'string' && PACK_ID_RE.test(p.id) && typeof p.version === 'string' && SEMVER_RE.test(p.version)) {
    o.pack = { id: p.id, version: p.version, name: clean(p.name, LIMITS.name) || p.id };
  }
  const src = clean(e?.src, 1000), note = clean(e?.note, 1000);
  if (src) o.src = src;
  if (note) o.note = note;
  return o;
}
const clean = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : '');
/** Pack ids are add-on ids (docs/ADDONS-SPEC.md §2); versions semver. */
export const PACK_ID_RE = /^(?!.*(?:\.\.|--))[a-z][a-z0-9.-]{0,62}[a-z0-9]$/;
export const SEMVER_RE = /^(0|[1-9]\d{0,5})\.(0|[1-9]\d{0,5})\.(0|[1-9]\d{0,5})(?:-[0-9A-Za-z.]{1,20})?$/;

/** Library entries as read from storage (anything else dropped). */
export function readStored(json) {
  const list = Array.isArray(json) ? json : [];
  const out = [];
  for (const e of list.slice(0, LIBRARY_MAX)) {
    if (!e || typeof e.name !== 'string' || !TYPES.includes(e.type)) continue;
    const it = normalItem({ id: 'x', ...e, components: (Array.isArray(e.components) ? e.components : []).map((c, i) => ({ ...c, id: 'c' + (i + 1) })) });
    out.push({ ...entryFromItem(it), ...entryMeta(e) });
  }
  return out;
}

/** The library as CSV in the import format (reads back the same). */
export function libraryCsv(entries) {
  const head = ['name', 'type', 'unit', 'waste', 'mat', 'lab', 'height', 'component', 'formula'].map((k) => t('lib.head.' + k));
  const lines = [csvLine(head)];
  const money = (r4) => roundTo(r4 / 10000, 4);
  for (const e of entries) {
    lines.push(csvLine([e.name, t('type.' + e.type), UNITS[e.unit].label, e.waste / 100, money(e.mat), money(e.lab), e.heightFt > 0 ? (e.unit === 'm' || e.unit === 'm²' ? roundTo(e.heightFt * 0.3048, 4) + ' m' : formatFtIn(e.heightFt)) : '', '', '']));
    for (const c of e.components || []) lines.push(csvLine(['', t('x.component'), c.unit, c.waste / 100, money(c.mat), money(c.lab), '', c.name, c.formula]));
  }
  return lines.join('\r\n') + '\r\n';
}

/**
 * New prices for the takeoff's items that the library has (same name and type): waste and rates, and the same for each
 * assembly component of the same name. Height, unit and formulas stay as they are. → [{ id, patch }] (changed ones only)
 */
export function repricePatches(items, lib) {
  const out = [];
  for (const it of items) {
    const e = lib.find((x) => sameEntry(x, it));
    if (!e) continue;
    const patch = {};
    for (const k of ['waste', 'mat', 'lab']) if (it[k] !== e[k]) patch[k] = e[k];
    if (e.crew && JSON.stringify(e.crew) !== JSON.stringify(it.crew)) patch.crew = { ...e.crew };
    let compChanged = false;
    const components = it.components.map((c) => {
      const ec = (e.components || []).find((x) => x.name.trim().toLowerCase() === c.name.trim().toLowerCase());
      if (!ec || (ec.waste === c.waste && ec.mat === c.mat && ec.lab === c.lab)) return c;
      compChanged = true;
      return { ...c, waste: ec.waste, mat: ec.mat, lab: ec.lab };
    });
    if (compChanged) patch.components = components;
    if (Object.keys(patch).length) out.push({ id: it.id, patch });
  }
  return out;
}
