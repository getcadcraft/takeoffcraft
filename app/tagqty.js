/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — data names (keys of a quantities file); words for a person are in the page (tagqty-ui.js) */
/**
 * tagqty.js — a tag schedule from the building model as quantities in the takeoff (0.8 SU.915, TakeoffCraft's side; session takeoff_PART_3). DOM-free (tested in Node).
 *
 * BimCraft's tag schedule (tags.js: columns of any field, tags included, grouped by one) leaves as a CSV. This reads such a CSV (or any CSV with a header row), lets
 * the person pick which column names the line and which holds the number, and turns each distinct name into a typed quantity (fixedqty.js's `cadcraft-quantities`
 * file, so it joins the takeoff exactly as CivilCraft's cut and fill do: updated in place when the same schedule comes again, rates and assemblies kept).
 * A file is untrusted: a cell is text or a number, nothing in it is followed.
 *
 *   readSchedule(text)                          → { ok, head, rows } | { ok: false, error }
 *   guess(sched)                                → { nameCol, qtyCol | null, unit, mult }
 *   build(sched, { nameCol, qtyCol, unit, mult, project, label }) → { ok, file (a quantities file), groups, skipped } | { ok: false, error }
 */
import { parseCsv } from './library.js';
import { QTY_FORMAT, QTY_VERSION, QTY_MAX_ITEMS } from './fixedqty.js';
import { UNITS_FOR } from './units.js';

const clean = (s, n = 200) => String(s ?? '').replace(/[\u0000-\u001f\u007f-\u009f‪-‮⁦-⁩]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
export const MAX_ROWS = 100000;

/** "1,234.5" · "12.5 m²" · "-3" → a number; anything else null. */
export function parseNum(v) {
  const m = /^\s*([-+]?\d[\d,]*(?:\.\d+)?|[-+]?\.\d+)\s*[a-zA-Zµ²³/%°"' ]*$/.exec(String(v ?? ''));
  if (!m) return null;
  const n = Number(m[1].replace(/,/g, ''));
  return Number.isFinite(n) ? n : null;
}
export function readSchedule(text) {
  const all = parseCsv(text).slice(0, MAX_ROWS + 1);
  if (all.length < 2) return { ok: false, error: 'empty' };
  const head = all[0].map((h) => clean(h, 80));
  if (head.filter(Boolean).length < 1) return { ok: false, error: 'header' };
  return { ok: true, head, rows: all.slice(1).map((r) => head.map((_, i) => String(r[i] ?? ''))) };
}
const numericShare = (sched, c) => { let n = 0, k = 0; for (const r of sched.rows.slice(0, 500)) if (r[c].trim()) { k++; if (parseNum(r[c]) !== null) n++; } return k ? n / k : 0; };
/** A first choice the person can change: a column that says tag / mark / type names the line; a mostly numeric column with area, length, volume or qty in its header is the number. */
export function guess(sched) {
  const h = sched.head.map((x) => x.toLowerCase());
  const isNum = sched.head.map((_, c) => numericShare(sched, c) >= 0.9);
  let nameCol = h.findIndex((x, c) => /(^|[^a-z])(tag|mark|type|group|assembly|class|name)([^a-z]|$)/.test(x) && !isNum[c]);
  if (nameCol < 0) nameCol = isNum.findIndex((n) => !n);
  if (nameCol < 0) nameCol = 0;
  const qtyCol = h.findIndex((x, c) => c !== nameCol && isNum[c] && /(area|length|volume|qty|quantity|count|width|height|perimeter|m2|m²|m3|m³)/.test(x));
  const q = qtyCol >= 0 ? h[qtyCol] : '';
  const unit = /volume|m3|m³|cy/.test(q) ? 'm³' : /area|m2|m²/.test(q) ? 'm²' : /length|width|height|perimeter|\bmm\b|\bm\b/.test(q) ? 'm' : 'EA';
  return { nameCol, qtyCol: qtyCol >= 0 ? qtyCol : null, unit, mult: /\bmm\b/.test(q) || /(length|width|height)/.test(q) && unit === 'm' ? 0.001 : 1 };
}
const slug = (s) => String(s).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50) || 'none';
export function build(sched, { nameCol = 0, qtyCol = null, unit = 'EA', mult = 1, project = 'Tag schedule', label = '' } = {}) {
  if (!sched?.ok && !sched?.rows) return { ok: false, error: 'empty' };
  if (!UNITS_FOR.fixed.includes(unit)) return { ok: false, error: 'unit' };
  if (!(Number.isFinite(mult) && mult > 0 && mult < 1e9)) return { ok: false, error: 'mult' };
  if (!(nameCol >= 0 && nameCol < sched.head.length) || (qtyCol !== null && !(qtyCol >= 0 && qtyCol < sched.head.length))) return { ok: false, error: 'column' };
  const groups = new Map();
  let skipped = 0;
  for (const r of sched.rows) {
    const name = clean(r[nameCol], 120);
    let q = 1;
    if (qtyCol !== null) { q = parseNum(r[qtyCol]); if (q === null || q < 0) { if (r[qtyCol].trim()) skipped++; continue; } q *= mult; }
    const k = slug(name);
    const g = groups.get(k) || { key: 'tags:' + k, name, qty: 0, n: 0 };
    g.qty += q; g.n++;
    groups.set(k, g);
  }
  if (!groups.size) return { ok: false, error: 'none' };
  const list = [...groups.values()].sort((a, b) => b.qty - a.qty).slice(0, QTY_MAX_ITEMS);
  const rounded = (v) => Math.round(v * 1e6) / 1e6;
  return { ok: true, skipped, groups: list.length, dropped: Math.max(0, groups.size - QTY_MAX_ITEMS),
    file: { format: QTY_FORMAT, version: QTY_VERSION, app: 'Tag schedule', project: clean(project), made: new Date().toISOString().replace(/\.\d+Z$/, 'Z'),
      items: list.map((g) => ({ key: g.key, name: (label ? label + ': ' : '') + (g.name || '—'), unit, qty: rounded(g.qty), note: g.n + (g.n === 1 ? ' row' : ' rows') })) } };   // i18n-ignore: a note kept with the quantity
}
