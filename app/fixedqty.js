/* SPDX-License-Identifier: Apache-2.0 */
/**
 * fixedqty.js — quantities that arrive from another app (0.6 TK.5+). DOM-free (tested in Node).
 *
 * A quantities file is plain JSON any app or script can write; CivilCraft writes one for its cut and fill
 * (Earthwork › Send to TakeoffCraft):
 *
 *   { "format": "cadcraft-quantities", "version": 1, "app": "CivilCraft", "project": "North lot", "made": "<ISO time>",
 *     "items": [ { "key": "earthwork:cut", "name": "Earthwork: cut", "unit": "CY", "qty": 1234.56, "note": "…" }, … ] }
 *
 * `key` names the quantity in the app that sent it; units are TakeoffCraft's (LS EA CY m³ LF m SF SY m²). Each item becomes a
 * typed quantity (item type `fixed`) with `origin` { app, project, key, at }. Opening a newer file from the same app and
 * project updates those items' quantities (names, rates, waste and assemblies stay the estimator's) instead of adding more.
 */

import { normalItem, PALETTE, LIMITS, cleanOrigin } from './model.js';
import { UNITS_FOR } from './units.js';
import { t } from './i18n.js';

export const QTY_FORMAT = 'cadcraft-quantities';
export const QTY_VERSION = 1;
export const QTY_MAX_ITEMS = 500;

const str = (v, max = 200) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
const KEY_RE = /^[a-z0-9][a-z0-9:._-]{0,79}$/i;

/** Is this parsed JSON a quantities file (any version)? */
export const isQuantities = (json) => !!json && typeof json === 'object' && json.format === QTY_FORMAT;

/**
 * Validate an untrusted quantities file. → { ok: true, app, project, made, items: [{ key, name, unit, qty, note }], skipped }
 * | { ok: false, error }. Bad items are skipped and counted, never guessed.
 */
export function readQuantities(json) {
  if (!isQuantities(json)) return { ok: false, error: t('qty.in.err.format') };
  if (!(json.version >= 1)) return { ok: false, error: t('qty.in.err.format') };
  if (json.version > QTY_VERSION) return { ok: false, error: t('qty.in.err.newer') };
  const app = str(json.app, 40), project = str(json.project);
  if (!app) return { ok: false, error: t('qty.in.err.app') };
  const made = typeof json.made === 'string' && /^\d{4}-\d{2}-\d{2}T[\d:.]+Z$/.test(json.made) ? json.made : null;
  const items = [], keys = new Set();
  let skipped = 0;
  const list = Array.isArray(json.items) ? json.items : [];
  for (const raw of list.slice(0, QTY_MAX_ITEMS)) {
    const key = typeof raw?.key === 'string' && KEY_RE.test(raw.key) ? raw.key : null;
    const unit = UNITS_FOR.fixed.includes(raw?.unit) ? raw.unit : null;
    const qty = typeof raw?.qty === 'number' && Number.isFinite(raw.qty) && raw.qty >= 0 && raw.qty <= LIMITS.qty ? raw.qty : null;
    if (!key || keys.has(key.toLowerCase()) || !unit || qty === null) { skipped++; continue; }
    keys.add(key.toLowerCase());
    items.push({ key, name: str(raw.name) || key, unit, qty, note: str(raw.note, 400) });
  }
  skipped += Math.max(0, list.length - QTY_MAX_ITEMS);
  if (!items.length) return { ok: false, error: t('qty.in.err.empty') };
  return { ok: true, app, project, made, items, skipped };
}

/** The typed quantity a file's item already became in this takeoff (same app, project and key), or null. */
export function findImported(state, app, project, key) {
  return state.items.find((it) => it.type === 'fixed' && it.origin && it.origin.app === app && it.origin.project === project && it.origin.key.toLowerCase() === key.toLowerCase()) || null;
}

/**
 * Bring a read file's quantities into the takeoff — ONE undo step. New keys become typed quantities (no rates: the estimator
 * prices them); known keys update their quantity (and unit, said). → { added, updated, same, unitChanged: [names], ids }
 */
export function importQuantities(model, file) {
  const out = { added: 0, updated: 0, same: 0, unitChanged: [], ids: [] };
  const at = file.made || new Date().toISOString().replace(/\.\d+Z$/, 'Z');
  model.change(t('undo.qty.import', { app: file.app }), (s) => {
    let n = 0;
    for (const q of file.items) {
      const origin = cleanOrigin({ app: file.app, project: file.project, key: q.key, at });
      const old = findImported(s, file.app, file.project, q.key);
      if (old) {
        out.ids.push(old.id);
        if (old.qty === q.qty && old.unit === q.unit) { out.same++; continue; }
        if (old.unit !== q.unit) out.unitChanged.push(old.name);
        Object.assign(old, normalItem({ ...old, qty: q.qty, unit: q.unit, origin }));
        out.updated++; n++;
        continue;
      }
      if (s.items.length >= LIMITS.items) throw new Error(t('err.items.many'));
      const id = model.nextId('i');
      s.items.push(normalItem({ id, name: q.name, type: 'fixed', unit: q.unit, qty: q.qty, origin, color: PALETTE[s.items.length % PALETTE.length] }));
      out.ids.push(id);
      out.added++; n++;
    }
    if (!n) return false;                                 // nothing new: no undo step
  });
  return out;
}

/** "From CivilCraft, North lot (earthwork:cut), 2026-10-18" — where a typed quantity came from, for notes and the editor. */
export function originText(o) {
  if (!o) return '';
  return t(o.project ? 'qty.from.project' : 'qty.from', { app: o.app, project: o.project, key: o.key, date: o.at ? o.at.slice(0, 10) : '—' });
}
