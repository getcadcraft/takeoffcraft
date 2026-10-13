/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person. */
/**
 * agents.js — TakeoffCraft for AI assistants and scripts (0.4 part 2 X.7, session agents; docs/AGENTS-SPEC.md §5.2). The
 * apps contain no AI: this gives the person's own assistant read-only tools on the takeoff (and exports when allowed);
 * Settings › Assistants (host.js) decides which.
 *
 * DOM-free, shared with the headless core (tools/cli/headless/takeoff.mjs imports this file from the build):
 *   takeoffSummary(state, sheetLabel) · takeoffQuantities(state, sheetLabel, {by}) · takeoffEstimate(state) · itemsList(state)
 * The page (takeoffcraft.js) calls installAgents({...}) once.
 */
import { quantities, estimate, itemQty, sheetBreakdown } from './model.js';
import { UNITS, formatRate } from './units.js';
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

/**
 * The live tools. `app` = {model, sheetLabel(key), sheets() → [{key, title}], current() → key | null, exportCsv(), exportXlsx()}.
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
  return C;
}
