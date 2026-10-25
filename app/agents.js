/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person. */
/**
 * agents.js — TakeoffCraft for AI assistants and scripts (0.4 part 2 X.7, session agents; docs/AGENTS-SPEC.md §5.2). The
 * apps contain no AI: this gives the person's own assistant read-only tools on the takeoff (and exports when allowed);
 * Settings › Assistants (host.js) decides which.
 *
 * DOM-free, shared with the headless core (tools/cli/headless/takeoff.mjs imports this file from the build):
 *   takeoffSummary(state, sheetLabel) · takeoffQuantities(state, sheetLabel, {by}) · takeoffEstimate(state) · itemsList(state)
 *   addItemsTo(model, items) · addMarksTo(model, {item, sheet, marks, units}, box) — one undo step each (0.7 AS.5)
 *   On a DWG / DXF (0.7 AS.6, session assistants-gaps, over takeoff-cad's TD.1–TD.6: cadset.js, cadcount.js, cadmarks.js, cadgeom.js):
 *   drawingScales(set, model) · cadSheetRows(set, model) · await cadCatalog(set, i, scope) · await cadCount(set, i, query) ·
 *   await cadCountAdd(model, set, i, query, {item, name}) · await cadMeasure(model, set, i, {item, layers, types, handles}) — each
 *   edit one undo step "Assistant: …"; CAD_QUERY_SCHEMA. `set` = cadset.js openCad's record, `i` = the sheet's index in set.cad.sheets.
 * The page (takeoffcraft.js) calls installAgents({...}) once.
 */
import { quantities, estimate, itemQty, sheetBreakdown, TYPES, sheetKey } from './model.js';
import { UNITS, UNITS_FOR, formatRate, parseRate, parsePercent, scaleRecord, matchPreset, presetFtPerUnit, describeScale } from './units.js';
import { t } from './i18n.js';
import { outlineProblem } from './geom.js';
import { getHost } from "./host.js";

const r4 = (n) => (typeof n === 'number' && Number.isFinite(n) ? Math.round(n * 1e4) / 1e4 : n);
const money = (cents) => (cents < 0 ? '-' : '') + '$' + (Math.abs(cents) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const unitLabel = (u) => (UNITS[u] && UNITS[u].label) || u;

export function takeoffSummary(state, sheetLabel) {
  const q = quantities(state);
  const unscaled = [...q.values()].reduce((s, t) => s + t.unscaled, 0);
  return {
    name: state.name, items: state.items.length, marks: state.marks.length,
    files: (state.files || []).map((f) => ({ name: f.name, pages: f.pages, sha256: f.hash })),
    scaledSheets: Object.entries(state.sheets || {}).filter(([, v]) => v && v.scale).map(([k, v]) => ({ sheet: sheetLabel(k), scale: v.scale.label || v.scale.preset || null })),
    unscaledMarks: unscaled, bidAreas: (state.areas || []).map((a) => a.name),
  };
}

export function itemsList(state) {
  return state.items.map((it) => ({ id: it.id, name: it.name, type: it.type, unit: unitLabel(it.unit), color: it.color, heightFt: r4(it.heightFt || 0), wastePercent: r4((it.waste || 0) / 100),
    materialPerUnit: formatRate(it.mat || 0), laborPerUnit: formatRate(it.lab || 0), components: (it.components || []).map((c) => ({ name: c.name, unit: c.unit, formula: c.formula })) }));
}

export function takeoffQuantities(state, sheetLabel, { by = 'item' } = {}) {
  const q = quantities(state);
  if (by === 'sheet') return { rows: sheetBreakdown(state, q).map((r) => ({ sheet: sheetLabel(r.sheet), item: r.name, quantity: r4(r.qty), unit: r.unit, marks: r.marks })) };
  return {
    items: state.items.map((it) => {
      const t = q.get(it.id);
      return { id: it.id, name: it.name, type: it.type, unit: unitLabel(it.unit), quantity: r4(itemQty(it, t)), marks: t.marks, unscaledMarks: t.unscaled,
        sheets: [...t.bySheet.keys()].map(sheetLabel), ...(it.type === 'area' ? { perimeterFt: r4(t.perimeterFt) } : {}), ...(it.type === 'linear' && it.heightFt > 0 ? { heightFt: r4(it.heightFt) } : {}) };
    }),
  };
}

export function takeoffEstimate(state) {
  const e = estimate(state);
  const rows = e.rows.map((r) => (r.error
    ? { kind: r.kind, name: r.name, unit: r.unit, formula: r.formula, error: r.error }
    : { kind: r.kind, name: r.name, unit: r.unit, ...(r.formula ? { formula: r.formula } : {}), quantity: r4(r.qty), wastePercent: r4((r.waste || 0) / 100), quantityWithWaste: r4(r.qtyW),
      materialPerUnit: formatRate(r.mat || 0), laborPerUnit: formatRate(r.lab || 0), materialCents: r.matExt, laborCents: r.labExt, totalCents: r.total, total: money(r.total), ...(r.unscaled ? { unscaledMarks: r.unscaled } : {}) }));
  return { rows, materialCents: e.matTotal, laborCents: e.labTotal, totalCents: e.total, total: money(e.total), errors: e.errors, unscaledMarks: e.unscaled, incomplete: e.incomplete };
}

// ---------------------------------------------------------------- 0.7 AS.5: items and marks

/** Items as the assistant gives them (rates in dollars per unit, waste in percent) → ONE undo step. → the new ids. */
export function addItemsTo(model, items) {
  const list = items.map((x) => {
    const type = TYPES.includes(x.type) ? x.type : null;
    if (!type) throw new Error('Item "' + (x.name || '') + '": type is ' + TYPES.join(', ') + '.');
    if (x.unit && !UNITS_FOR[type].includes(x.unit)) throw new Error('Item "' + x.name + '": a ' + type + ' item\'s unit is ' + UNITS_FOR[type].join(', ') + '.');
    const rate = (v, what) => { if (v === undefined) return 0; const r = parseRate(String(v)); if (!r.ok) throw new Error('Item "' + x.name + '": ' + what + ' ' + r.error); return r.rate4; };
    const waste = x.waste === undefined ? 0 : (() => { const r = parsePercent(String(x.waste)); if (!r.ok) throw new Error('Item "' + x.name + '": waste ' + r.error); return r.bp; })();
    return { name: x.name, type, ...(x.unit ? { unit: x.unit } : {}), ...(x.color ? { color: x.color } : {}), ...(Number.isFinite(x.heightFt) ? { heightFt: x.heightFt } : {}), waste, mat: rate(x.material, 'material'), lab: rate(x.labor, 'labor') };
  });
  const label = 'Assistant: add ' + list.length + (list.length === 1 ? ' item' : ' items');
  return { ids: model.addItems(list, label), undo: label };
}

/**
 * Marks of one item on one sheet → ONE undo step. Each mark: pts (a run of points for linear, an outline for area, one
 * point for count) and holes (area cut-outs); `units` 'pt' = PDF user space, 'fraction' = of the page box `box`
 * [x0, y0, x1, y1] from its lower-left corner. Lengths and areas need a scaled sheet (they are never counted as zero).
 */
export function addMarksTo(model, { item, sheet, marks, units = 'pt' }, box = null) {
  const s = model.state, it = s.items.find((i) => i.id === item || i.name.toLowerCase() === String(item).toLowerCase());
  if (!it) throw new Error('There is no item "' + item + '" (items_list shows them).');
  const kind = it.type === 'fixed' ? null : it.type;
  if (!kind) throw new Error(it.name + ' is a fixed (lump sum) item: it takes no marks.');
  if (kind !== 'count' && !s.sheets?.[sheet]?.scale) throw new Error('That sheet has no scale yet: the person calibrates it (or picks a preset) first, then lengths and areas count.');
  if (units === 'fraction' && !box) throw new Error('This sheet\'s page box is not known here: give the points in PDF points (units "pt").');
  const P = (p) => (units === 'fraction' ? { x: box[0] + p[0] * (box[2] - box[0]), y: box[1] + p[1] * (box[3] - box[1]) } : { x: p[0], y: p[1] });
  const list = [];
  for (const [i, m] of marks.entries()) {
    const pts = m.pts.map(P);
    if (kind === 'count') { for (const p of pts) list.push({ sheet, pts: [p] }); continue; }
    if (kind === 'linear' && pts.length < 2) throw new Error('Mark ' + (i + 1) + ': a run needs two points at least.');
    if (kind === 'area') {
      const why = outlineProblem(pts);
      if (why) throw new Error('Mark ' + (i + 1) + ': ' + why);
    }
    list.push({ sheet, pts, ...(kind === 'area' && m.holes ? { holes: m.holes.map((h) => h.map(P)) } : {}) });
  }
  const label = 'Assistant: add ' + list.length + ' ' + kind + (list.length === 1 ? ' mark' : ' marks');
  return { ids: model.addMarks(it.id, list, label), item: it.name, undo: label };
}

/** items_add's arguments (the window's tool and the headless one, 0.7 AS.6). */
const objS = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
export const ITEMS_ADD_SCHEMA = objS({ items: { type: 'array', minItems: 1, maxItems: 200, items: objS({ name: { type: 'string', minLength: 1, maxLength: 200 }, type: { type: 'string', enum: TYPES }, unit: { type: 'string', maxLength: 8 }, material: { type: ['number', 'string'] }, labor: { type: ['number', 'string'] }, waste: { type: ['number', 'string'] }, heightFt: { type: 'number', minimum: 0, maximum: 1e5 }, color: { type: 'string', pattern: '^#[0-9a-fA-F]{6}$' } }, ['name', 'type']) } }, ['items']);

// ---------------------------------------------------------------- 0.7 AS.6: takeoffs on a DWG / DXF (takeoff-cad's TD.1–TD.6)

/**
 * The scales a drawing gives its sheets, for the sheets that have none yet in the takeoff — what the page sets when it opens a
 * drawing (takeoffcraft.js applyDrawingScales): a model sheet from INSUNITS, a layout from its viewport (a preset when it is one).
 * → { '<hash>:<i>': scale record }. A sheet with no usable units gets none ("No scale"), never zero.
 */
export function drawingScales(set, model) {
  const map = {};
  for (const sh of set.cad.sheets) {
    const key = sheetKey(set.hash, sh.index);
    if (!sh.scale || model.scaleOf(key)) continue;
    const sc = sh.scale;
    if (sh.kind === 'model') map[key] = scaleRecord({ method: 'drawing', ftPerUnit: sc.ftPerUnit, label: sc.label });
    else {
      const pm = matchPreset(sc.ftPerUnit);
      map[key] = pm ? scaleRecord({ method: 'preset', preset: pm.key, ftPerUnit: presetFtPerUnit(pm.key), label: pm.label })
        : scaleRecord({ method: 'drawing', ftPerUnit: sc.ftPerUnit, label: t('cad.scale.viewport', { scale: describeScale(sc.ftPerUnit) }) });
    }
  }
  return map;
}

/** The drawing's sheets as the assistant sees them: key, name, Model or layout, the takeoff's scale (or none) and why none. */
export function cadSheetRows(set, model) {
  return set.cad.sheets.map((sh) => {
    const key = sheetKey(set.hash, sh.index), sc = model.scaleOf(key);
    return { key, sheet: sh.name, kind: sh.kind, file: set.name, scale: sc ? sc.label || sc.preset || 'scaled' : null, ...(sc ? {} : { noScale: sh.note || 'not set' }), viewports: sh.viewports.length,
      marks: model.state.marks.filter((m) => m.sheet === key).length };
  });
}

const CAD = () => Promise.all([import('./cadset.js'), import('./cadcount.js'), import('./cadmarks.js')]);
const refsFor = (C0, set, i, scope) => { const ix = set.cad.index(); return scope === 'drawing' ? ix.all : C0.sheetRefs(set.cad.sheets[i], ix).map((e) => e.ref); };
const top = (list, n) => list.slice(0, n);

/** What a person can count on a sheet (or in the whole drawing): blocks (dynamic states apart), layer × type, texts, attribute values. */
export async function cadCatalog(set, i, scope = 'sheet') {
  const [C0, Cc] = await CAD();
  const c = Cc.catalog(set.cad.index(), refsFor(C0, set, i, scope));
  return {
    scope, blocks: top(c.blocks, 500).map((b) => ({ name: b.name, count: b.count, top: b.top, nested: b.nested, ...(b.dynamic ? { states: b.variants } : {}), layers: top(b.layers, 10) })),
    shapes: top(c.shapes, 500), layers: top(c.layers, 500).map((l) => ({ name: l.name, count: l.count, hidden: !!l.hidden })), texts: top(c.texts, 300), attributes: top(c.attributes, 300),
  };
}

export const CAD_QUERY_SCHEMA = {
  block: { anyOf: [{ type: 'string', minLength: 1, maxLength: 255 }, { type: 'array', items: { type: 'string', minLength: 1, maxLength: 255 }, minItems: 1, maxItems: 100 }], description: 'Count block references by name (cad_catalog lists them).' },
  state: { type: 'string', maxLength: 255, description: 'A dynamic block\'s state (visibility) only.' },
  nested: { type: 'string', enum: ['all', 'top', 'inside'], default: 'all', description: 'Blocks placed directly, inside other blocks, or both.' },
  layer: { type: 'string', maxLength: 255, description: 'Count shapes on this layer (with type), or narrow blocks and texts to it.' },
  type: { type: 'string', maxLength: 40, description: 'Count shapes of this entity type, e.g. CIRCLE, POINT, LWPOLYLINE (cad_catalog lists layer × type).' },
  text: { type: 'string', minLength: 1, maxLength: 500, description: 'Count texts (TEXT, MTEXT, multileaders, block attribute values).' },
  mode: { type: 'string', enum: ['exact', 'contains', 'word'], default: 'exact' }, attribute: { type: 'string', maxLength: 255, description: 'Texts: one attribute tag only.' },
  hidden: { type: 'string', enum: ['skip', 'include'], default: 'skip', description: 'Objects on layers that are off or frozen: left out (and counted as skipped) unless include.' },
  scope: { type: 'string', enum: ['sheet', 'drawing'], default: 'sheet', description: 'sheet: what the sheet shows (a layout: through its viewports); drawing: every object once (marks go on the Model sheet or the object\'s own layout).' },
};

/** A query as the assistant gave it → cadcount.js's call and its answer. */
async function runCount(set, i, q) {
  const [C0, Cc] = await CAD();
  const ix = set.cad.index(), refs = refsFor(C0, set, i, q.scope);
  if (q.block) return { kind: 'block', what: [].concat(q.block).join(', '), r: Cc.countBlocks(ix, refs, { names: [].concat(q.block), ...(q.state !== undefined ? { variant: q.state } : {}), nested: q.nested || 'all', layers: q.layer ? [q.layer] : null, hidden: q.hidden || 'skip' }) };
  if (q.text) return { kind: 'text', what: q.text, r: Cc.countTexts(ix, refs, { text: q.text, mode: q.mode || 'exact', attribute: q.attribute || null, layers: q.layer ? [q.layer] : null, hidden: q.hidden || 'skip' }) };
  if (q.layer || q.type) return { kind: 'shape', what: [q.layer, q.type].filter(Boolean).join(' '), r: Cc.countShapes(ix, refs, { layer: q.layer || null, type: q.type || null, hidden: q.hidden || 'skip' }) };
  throw new Error('Say what to count: block (names), text, or layer and/or type (shapes).');
}

/** Count in a drawing: the total, by dynamic state and by layer, what hidden layers left out. Nothing changes. */
export async function cadCount(set, i, q) {
  const { kind, r } = await runCount(set, i, q);
  return { kind, scope: q.scope || 'sheet', total: r.total, hiddenSkipped: r.hiddenSkipped || 0, ...(r.byVariant?.length ? { byState: r.byVariant } : {}), ...(r.byLayer ? { byLayer: top(r.byLayer, 50) } : {}) };
}

/** Count and add a mark per object found to a count item (an existing one, or a new one named `name`): ONE undo step. Counting again adds only what is new. */
export async function cadCountAdd(model, set, i, q, { item = null, name = '' } = {}) {
  const [, , Cm] = await CAD();
  const { what, r } = await runCount(set, i, q);
  const it = item ? model.state.items.find((x) => x.id === item || x.name.toLowerCase() === String(item).toLowerCase()) : null;
  if (item && !it) throw new Error('There is no item "' + item + '" (items_list shows them).');
  const plan = Cm.planMarks({ set, sheetIndex: i, scope: q.scope || 'sheet', found: r.found, existing: it ? model.state.marks.filter((m) => m.item === it.id && m.kind === 'count') : [] });
  const label = 'Assistant: count ' + plan.list.length + ' ' + (name || what);
  const out = model.addCounted({ item: it ? it.id : null, create: it ? null : { name: name || what || 'Count', type: 'count' }, list: plan.list, label });
  return { item: out.item, found: r.total, added: plan.list.length, alreadyCounted: plan.already, stacked: plan.stacked, unplaced: plan.unplaced || 0, hiddenSkipped: r.hiddenSkipped || 0, ...(plan.list.length ? { undo: label } : {}) };
}

/**
 * Measure from the drawing's own geometry (cadgeom.js) for a linear or an area item: the lines, arcs, polylines, circles, hatches
 * the sheet shows (filtered by layers, entity types, handles) become one mark each — ONE undo step. Needs a scaled sheet.
 */
export async function cadMeasure(model, set, i, { item, layers = null, types = null, handles = null } = {}) {
  const Geo = await import('./cadgeom.js');
  const it = model.state.items.find((x) => x.id === item || x.name.toLowerCase() === String(item).toLowerCase());
  if (!it) throw new Error('There is no item "' + item + '" (items_list shows them; items_add makes one).');
  if (it.type !== 'linear' && it.type !== 'area') throw new Error(it.name + ' is a ' + it.type + ' item: measuring from geometry takes a linear or an area item (count with cad_count_add).');
  const key = sheetKey(set.hash, i);
  if (!model.scaleOf(key)) throw new Error('That sheet has no scale: the drawing gives it none (no units or no viewport). The person sets one (Calibrate or a preset) first; lengths and areas are never counted as zero.');
  const g = Geo.collectGeometry(set, i);
  const L = layers && layers.length ? new Set(layers.map((x) => String(x).toLowerCase())) : null, T = types && types.length ? new Set(types.map((x) => String(x).toUpperCase())) : null, Hs = handles && handles.length ? new Set(handles.map((x) => String(x).toUpperCase())) : null;
  const picked = g.items.filter((x) => (!L || L.has(String(x.layer).toLowerCase())) && (!T || T.has(x.type)) && (!Hs || Hs.has(String(x.handle).toUpperCase())));
  if (!picked.length) throw new Error('Nothing measurable on that sheet matches (' + g.items.length + ' measurable objects in all).');
  const mk = Geo.marksFor(picked, it.type);
  const label = 'Assistant: measure ' + mk.list.length + ' ' + it.type + (mk.list.length === 1 ? ' mark' : ' marks');
  const ids = mk.list.length ? model.addMarks(it.id, mk.list.map((m) => ({ sheet: key, pts: m.pts, holes: m.holes })), label, it.type) : [];
  const q = quantities(model.state).get(it.id);
  return { item: it.id, name: it.name, picked: picked.length, added: ids.length, skipped: mk.skipped, approximate: mk.approx, ...(Object.keys(g.skipped).length ? { notMeasurable: g.skipped } : {}), ...(g.truncated ? { truncated: true } : {}),
    quantity: r4(itemQty(it, q)), unit: unitLabel(it.unit), ...(ids.length ? { undo: label } : {}) };
}

/**
 * The live tools. `app` = {model, sheetLabel(key), sheets() → [{key, title, view?}], current() → key | null, exportCsv(), exportXlsx(),
 * and for drawings (0.7 AS.6) cadSets() → the open DWG / DXF files (cadset.js records)}.
 */
export function installAgents(app) {
  const C = getHost({ app: 'takeoffcraft' }).control;
  const st = () => app.model.state;
  const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
  C.configure({ title: 'TakeoffCraft', info: () => ({ takeoff: st().name, items: st().items.length, marks: st().marks.length, sheet: app.current() ? app.sheetLabel(app.current()) : null }) });
  C.tool({ name: 'app_info', group: 'read', title: 'About this window', description: 'TakeoffCraft\'s window: the takeoff open, its PDFs, items and marks, the sheet shown, and the permissions the person allowed.',
    run: async () => ({ app: 'takeoffcraft', title: 'TakeoffCraft', allowed: C.groups, sheet: app.current() ? app.sheetLabel(app.current()) : null, ...takeoffSummary(st(), app.sheetLabel) }) });
  C.tool({ name: 'sheets_list', group: 'read', title: 'List sheets', description: 'The sheets of the open PDFs, each with its scale (or none) and how many marks it holds.',
    run: async () => ({ sheets: app.sheets().map((s) => ({ key: s.key, sheet: s.title, scale: (st().sheets[s.key] && st().sheets[s.key].scale && st().sheets[s.key].scale.label) || null, marks: st().marks.filter((m) => m.sheet === s.key).length })) }) });
  C.tool({ name: 'items_list', group: 'read', title: 'List items', description: 'The takeoff items: type (linear, area, count), unit, height, waste, material and labor rates, and their assembly components with formulas.',
    run: async () => ({ items: itemsList(st()) }) });
  C.tool({ name: 'takeoff_quantities', group: 'read', title: 'Quantities', description: 'Quantities per item (in its unit) or per sheet. Marks on sheets with no scale are listed as unscaled, never counted as zero.',
    inputSchema: obj({ by: { type: 'string', enum: ['item', 'sheet'], default: 'item' } }), run: async (a) => takeoffQuantities(st(), app.sheetLabel, a) });
  C.tool({ name: 'takeoff_estimate', group: 'read', title: 'Estimate', description: 'The priced estimate as TakeoffCraft computes it: a row per item and per assembly component, totals in cents and as text; incomplete when a formula fails or marks are unscaled.',
    run: async () => takeoffEstimate(st()) });
  C.tool({ name: 'takeoff_export', group: 'export', title: 'Export the estimate', description: 'TakeoffCraft\'s own export of the estimate, as .csv or .xlsx, downloaded (desktop: saved where the person chooses).',
    inputSchema: obj({ format: { type: 'string', enum: ['csv', 'xlsx'], default: 'xlsx' } }),
    run: async (a) => {
      if (!st().items.length) throw new Error('The takeoff has no items yet.');
      await (a.format === 'csv' ? app.exportCsv() : app.exportXlsx());
      return { exported: a.format };
    } });
  // ---- 0.7 AS.5 (session assistants)
  const findSheet = (q) => {
    const all = app.sheets();
    if (q === undefined || q === null || q === '') { const k = app.current(); const s = all.find((x) => x.key === k); if (s) return s; throw new Error('No sheet is open.'); }
    if (Number.isInteger(q)) { if (q >= 1 && q <= all.length) return all[q - 1]; throw new Error('Sheets are numbered 1 to ' + all.length + '.'); }
    const lc = String(q).toLowerCase();
    const s = all.find((x) => x.key === q) || all.find((x) => String(x.title).toLowerCase() === lc) || all.find((x) => String(x.title).toLowerCase().includes(lc));
    if (!s) throw new Error('No sheet "' + q + '". sheets_list shows them.');
    return s;
  };
  C.tool({ name: 'items_add', group: 'edit', title: 'Add items', description: 'Add takeoff items as one undo step: name, type (linear, area, count, fixed), unit (LF, m · SF, SY, m² · EA · …), material and labor rates in dollars per unit, waste in percent, heightFt (walls: wall area = length × height). → their ids for marks_add.',
    inputSchema: ITEMS_ADD_SCHEMA,
    run: async (a) => addItemsTo(app.model, a.items) });
  C.tool({ name: 'marks_add', group: 'edit', title: 'Add marks', description: 'Measure on a sheet for an item, as one undo step: each mark is pts (a run for a linear item, an outline for an area item with optional holes, points for a count item: one mark each). Points in PDF points (units "pt", the page\'s own coordinates) or as fractions of the page from its lower-left corner (units "fraction"). Lengths and areas only on a sheet with a scale; counts on any sheet.',
    inputSchema: obj({ item: { type: 'string', minLength: 1, maxLength: 200 }, sheet: { anyOf: [{ type: 'integer', minimum: 1 }, { type: 'string', maxLength: 255 }] }, units: { type: 'string', enum: ['pt', 'fraction'], default: 'pt' },
      marks: { type: 'array', minItems: 1, maxItems: 5000, items: obj({ pts: { type: 'array', minItems: 1, maxItems: 5000, items: { type: 'array', items: { type: 'number' }, minItems: 2, maxItems: 2 } }, holes: { type: 'array', maxItems: 200, items: { type: 'array', minItems: 3, maxItems: 5000, items: { type: 'array', items: { type: 'number' }, minItems: 2, maxItems: 2 } } } }, ['pts']) } }, ['item', 'marks']),
    run: async (a) => { const s = findSheet(a.sheet); const r = addMarksTo(app.model, { item: a.item, sheet: s.key, marks: a.marks, units: a.units }, s.view || null); return { sheet: s.title, ...r }; } });
  // ---- 0.7 AS.6 (assistants-gaps): counting and measuring straight from an open DWG / DXF (takeoff-cad's TD.1–TD.6)
  if (app.cadSets) {
    const cadSheet = (q) => {
      const sh = findSheet(q);
      const [hash, idx] = String(sh.key).split(':');
      const set = app.cadSets().find((f) => f.hash === hash);
      if (!set) throw new Error(sh.title + ' is a PDF page: these tools count and measure on the sheets of a DWG or DXF drawing (open one in TakeoffCraft).');
      return { sh, set, i: +idx };
    };
    const SHEET = { anyOf: [{ type: 'integer', minimum: 1 }, { type: 'string', maxLength: 255 }], description: 'A drawing\'s sheet: its key, its name (Model, a layout) or its number in sheets_list; default the sheet shown.' };
    C.tool({ name: 'cad_sheets', group: 'read', title: 'Drawing sheets', description: 'The open DWG / DXF drawings\' sheets (Model first, then each layout): key, name, the scale the takeoff uses (from the drawing\'s units or viewport, a preset, or set by hand) or why there is none, viewports, marks.',
      run: async () => ({ drawings: app.cadSets().map((set) => ({ file: set.name, format: set.cad.format, units: set.cad.units?.name || null, warnings: set.cad.warnings, sheets: cadSheetRows(set, app.model) })) }) });
    C.tool({ name: 'cad_catalog', group: 'read', title: 'What a drawing holds', description: 'What can be counted on a drawing\'s sheet (or in the whole drawing): blocks with their counts (top level, nested, dynamic states), shapes by layer and type, layers (hidden ones marked), texts and block attribute values.',
      inputSchema: obj({ sheet: SHEET, scope: CAD_QUERY_SCHEMA.scope }), run: async (a) => { const { sh, set, i } = cadSheet(a.sheet); return { sheet: sh.title, ...(await cadCatalog(set, i, a.scope)) }; } });
    C.tool({ name: 'cad_count', group: 'read', title: 'Count in a drawing', description: 'Count exactly in a DWG / DXF, as the Count from drawing dialog does: block references by name (and dynamic state), shapes by layer and entity type, or texts and attribute values; on the sheet (what it shows) or the whole drawing. Nothing changes; cad_count_add adds the marks.',
      inputSchema: obj({ sheet: SHEET, ...CAD_QUERY_SCHEMA }), run: async (a) => { const { sh, set, i } = cadSheet(a.sheet); return { sheet: sh.title, ...(await cadCount(set, i, a)) }; } });
    C.tool({ name: 'cad_count_add', group: 'edit', title: 'Count into the takeoff', description: 'Count in the drawing (as cad_count) and put a count mark on each object found, into a count item (item: its id or name) or a new count item (name): one undo step. Counting again adds only the objects not marked yet; two objects drawn on top of each other stay two.',
      inputSchema: obj({ sheet: SHEET, ...CAD_QUERY_SCHEMA, item: { type: 'string', minLength: 1, maxLength: 200 }, name: { type: 'string', minLength: 1, maxLength: 200 } }),
      run: async (a) => { const { sh, set, i } = cadSheet(a.sheet); return { sheet: sh.title, ...(await cadCountAdd(app.model, set, i, a, { item: a.item || null, name: a.name || '' })) }; } });
    C.tool({ name: 'cad_measure', group: 'edit', title: 'Measure from a drawing', description: 'Measure a linear or an area item from the drawing\'s own geometry, as the Measure drawing tool does: the lines, arcs, polylines (bulges kept), circles, hatches (holes kept) and solids the sheet shows, filtered by layers, entity types or handles, become one mark each — one undo step. The sheet needs a scale; ellipses and splines are flagged approximate.',
      inputSchema: obj({ sheet: SHEET, item: { type: 'string', minLength: 1, maxLength: 200 }, layers: { type: 'array', items: { type: 'string', maxLength: 255 }, maxItems: 200 }, types: { type: 'array', items: { type: 'string', maxLength: 40 }, maxItems: 40 }, handles: { type: 'array', items: { type: 'string', maxLength: 32 }, maxItems: 100000 } }, ['item']),
      run: async (a) => { const { sh, set, i } = cadSheet(a.sheet); return { sheet: sh.title, ...(await cadMeasure(app.model, set, i, a)) }; } });
  }
  C.tool({ name: 'usd_export', group: 'export', title: 'Export USD', description: 'A sheet\'s measured runs, areas and counts as a 3D check model in OpenUSD (.usdz default, .usda or .usdc), as the 3D view\'s Export › USD writes it. The sheet needs a scale. With a path (Studio) it is written there, else it downloads.',
    inputSchema: obj({ sheet: { anyOf: [{ type: 'integer', minimum: 1 }, { type: 'string', maxLength: 255 }] }, format: { type: 'string', enum: ['usda', 'usdc', 'usdz'] }, path: { type: 'string', minLength: 1, maxLength: 4096, description: 'Studio: a file inside the folders the person allowed (Settings › Assistants › Folders); without it the file downloads.' }, overwrite: { type: 'boolean', default: false } }),
    run: async (a) => {
      const F = C.files;
      const fmt = a.format || (a.path && /\.(usd[acz])$/i.exec(a.path)?.[1].toLowerCase()) || 'usdz';
      if (a.path && !new RegExp('\\.' + fmt + '$', 'i').test(a.path)) throw new Error('A .' + fmt + ' file ends in .' + fmt + '.');
      const s = findSheet(a.sheet);
      const r = await app.usd(s.key, fmt);
      const bytes = typeof r.data === 'string' ? new TextEncoder().encode(r.data) : r.data;
      if (a.path) { if (!F.available) throw new Error('File paths work only in CadCraft Studio (the desktop app).'); return { sheet: s.title, format: fmt, bytes: bytes.length, report: r.report, path: await F.write(a.path, bytes, { overwrite: a.overwrite }) }; }
      app.download(bytes, r.name + '.' + fmt, r.type);
      return { sheet: s.title, format: fmt, bytes: bytes.length, report: r.report, downloaded: r.name + '.' + fmt };
    } });
  return C;
}
