/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — every word a person reads comes from the add-on (api.t) or the app's language file. */
/**
 * takeoffcraft-api.js — TakeoffCraft's add-on API 1.0 and its own add-on loader (0.5 AO.6; docs/ADDONS-SPEC.md §5.6).
 * TakeoffCraft's manifest says "addons": "own", so the shell's boot (app-addons.js) steps aside and takeoffcraft.js calls
 * startAddons() with the takeoff model and a few page helpers.
 *
 *   api = { ...sharedApi (ui.toolbarGroup, ui.panelSection, ui.settingsSection, files.importer / exporter),
 *           takeoff: { model, state, quantities, estimate, onChange },
 *           items: { defineType, create, add, is, kindOf, dataOf, data: { get, set } },
 *           export: { column }, status, ui.panelTab }
 *
 * Item types of an add-on are TakeoffCraft's own item types (linear, area, count) with defaults: unit, waste, rates, height,
 * assembly components (formulas), second conditions (T8) and the add-on's data in the item's `xd` under its id: { kind, v,
 * data } (the shared loader's cleanAddonData). They are listed in the new-item form's type list while the add-on is on. A
 * takeoff saved with them opens without the add-on as ordinary items, and their data is saved back untouched.
 * Everything an add-on registers is taken away again when it is switched off.
 *
 * DOM-free except the type list and ui.panelTab: bin/test-addons-pdf-apps.mjs runs it in Node.
 */

import { AddonLoader, sharedApi } from '../addons.js';
import { TYPES, quantities, estimate } from '../model.js';
import { installTrust, bundledOnly, NO_PACKAGES } from './trust.js';

export const TAKEOFFCRAFT_API_VERSION = '1.0';
const SAFE_ID = /^[a-z0-9][a-z0-9-]{0,40}$/;
const KIND_RE = /^[a-z][a-z0-9-]{0,40}$/;
const clone = (v) => (v === undefined || v === null ? v ?? null : JSON.parse(JSON.stringify(v)));

/** Add-on columns for the estimate (CSV and XLSX): export.js reads { name, value(row, item) }, in registration order. */
export const addonColumns = new Map();
export const columnsNow = () => [...addonColumns.values()];

/**
 * The API one add-on gets. ctx = { model (model.js Takeoff), registry, types (Map "<addon>:<kind>" → spec), status(text),
 * setActive(id), typeSelect (the new-item form's <select>) | null, rightPanel (the right <aside>) | null, refresh() }.
 */
export function makeTakeoffcraftApi(base, addon, ctx) {
  const shared = sharedApi(base, addon, ctx.registry);
  const id = addon.id;
  const track = (fn) => base.onDeactivate(fn);
  const xdOf = (it) => (it && it.xd && it.xd[id]) || null;
  const typeKey = (kind) => id + ':' + kind;

  const fieldsOf = (kind, over = {}, data = undefined) => {
    const s = ctx.types.get(typeKey(kind));
    if (!s) throw new Error('items: type "' + kind + '" is not defined');
    const f = { ...clone(s.defaults), ...clone(over) };
    f.type = s.type;
    if (!f.name) f.name = s.name;
    f.xd = { ...(over.xd || {}), [id]: { kind, v: s.version, data: clone(data ?? s.data ?? {}) } };
    return f;
  };

  const items = {
    /**
     * An item type of this add-on. spec = { name, type: linear | area | count, version, defaults: { unit, waste, mat, lab,
     * heightFt, components: [{ name, unit, formula, waste, mat, lab }], conds: [{ kind, unit, waste, mat, lab }], … },
     * data (its starting data) }. Listed in the new-item form while the add-on is on.
     */
    defineType(kind, spec = {}) {
      if (!KIND_RE.test(kind)) throw new Error('items.defineType: kind "' + kind + '"');
      if (!TYPES.includes(spec.type)) throw new Error('items.defineType: type must be one of ' + TYPES.join(', '));
      if (ctx.types.has(typeKey(kind))) throw new Error('items.defineType: "' + kind + '" is already defined');
      const s = { kind, addon: id, name: String(spec.name || kind).slice(0, 200), type: spec.type, version: Number.isInteger(spec.version) && spec.version > 0 ? spec.version : 1,
        defaults: spec.defaults && typeof spec.defaults === 'object' ? clone(spec.defaults) : {}, data: clone(spec.data ?? {}) };
      ctx.types.set(typeKey(kind), s);
      let opt = null;
      if (ctx.typeSelect && typeof document !== 'undefined') {
        opt = document.createElement('option');
        opt.value = 'addon:' + typeKey(kind);
        opt.textContent = s.name;
        opt.dataset.addon = id;
        ctx.typeSelect.append(opt);
      }
      const off = () => { ctx.types.delete(typeKey(kind)); opt?.remove(); };
      track(off);
      return off;
    },
    /** New items of this add-on's types (or plain item fields with `data`), one undo step. → their ids. */
    add(list) {
      const arr = (Array.isArray(list) ? list : [list]).map((f) => {
        if (f && f.kind !== undefined) { const { kind, data, ...over } = f; return fieldsOf(kind, over, data); }
        const { data, ...rest } = clone(f || {});
        return data !== undefined ? { ...rest, xd: { ...(rest.xd || {}), [id]: { kind: '', v: 1, data } } } : rest;
      });
      return ctx.model.addItems(arr, arr.length === 1 ? (arr[0].name || addon.name) : addon.name);
    },
    /** One item of a type (the new-item form calls this): → its id. */
    create(kind, over = {}) { return ctx.model.addItems([fieldsOf(kind, over)], over.name || ctx.types.get(typeKey(kind))?.name || kind)[0]; },
    is: (it, kind = null) => { const x = xdOf(it); return !!x && x.kind !== '' && ctx.types.has(typeKey(x.kind)) && (!kind || x.kind === kind); },
    kindOf: (it) => { const x = xdOf(it); return x && x.kind ? x.kind : null; },
    dataOf: (it) => { const x = xdOf(it); return x ? clone(x.data) : null; },
    data: {
      get: (it) => { const x = xdOf(it); return x ? clone(x.data) : null; },
      /** Store this add-on's data on an item (one undo step); keeps its type and other add-ons' data. */
      set: (it, value) => {
        const cur = ctx.model.item(it.id);
        if (!cur) return false;
        const x = xdOf(cur);
        return ctx.model.updateItem(cur.id, { xd: { ...(cur.xd || {}), [id]: { kind: x ? x.kind : '', v: x ? x.v : 1, data: clone(value) } } }, addon.name);
      },
    },
  };

  const exp = {
    /** A column after Notes in the estimate CSV and XLSX: value(row, item) → text or number (row: an estimate row). */
    column({ id: cid, label, value } = {}) {
      if (!SAFE_ID.test(String(cid))) throw new Error('export.column: id');
      if (typeof value !== 'function') throw new Error('export.column: value(row, item)');
      const key = id + ':' + cid;
      addonColumns.set(key, { key, name: String(label || cid), value: (r, it) => value(clone(r), clone(it)) });
      track(() => addonColumns.delete(key));
      return () => addonColumns.delete(key);
    },
  };

  const takeoff = {
    get model() { return ctx.model; },
    state: () => clone(ctx.model.state),
    quantities: () => quantities(ctx.model.state),
    estimate: () => estimate(ctx.model.state),
    onChange(fn) { const off = ctx.model.on((why) => { try { fn(why); } catch (e) { base.log('onChange threw', e); } }); track(off); return off; },
  };

  const ui = {
    ...shared.ui,
    /** A section of its own in the right panel (TakeoffCraft's panel has sections, not tabs). render(el) runs at once and on refresh(). */
    panelTab({ id: tid, title, render } = {}) {
      if (!SAFE_ID.test(String(tid))) throw new Error('ui.panelTab: id');
      if (!ctx.rightPanel || typeof document === 'undefined') return null;
      const sec = document.createElement('section');
      sec.className = 'tc-sec';
      sec.dataset.addon = id;
      const h = document.createElement('h2');
      h.className = 'tc-h';
      h.textContent = String(title || tid);
      const body = document.createElement('div');
      sec.append(h, body);
      ctx.rightPanel.append(sec);
      const draw = () => { try { body.replaceChildren(); render?.(body); } catch (e) { base.log('panelTab render threw', e); } };
      draw();
      const off = ctx.model.on(() => draw());
      track(() => { off(); sec.remove(); });
      return body;
    },
  };

  return { ...shared, ui, takeoff, items, export: exp, status: (text) => ctx.status(String(text)) };
}

/**
 * Start TakeoffCraft's add-ons. ctx: see makeTakeoffcraftApi, plus loader options for tests (packages, storage, importer,
 * fetchJson, base, verify, bundledOnly). → { loader, list, installPackage, uninstall, importers, exporters, importerFor,
 * onChange, types, columns, createFromSelect(value) } (also window.ccAddons in the page).
 */
export async function startAddons(ctx) {
  const registry = {
    importers: new Map(), exporters: new Map(), listeners: new Set(),
    changed() { for (const fn of this.listeners) { try { fn(); } catch { /* app */ } } },
  };
  const types = new Map();
  const full = { ...ctx, registry, types };
  const apis = new Map();   // add-on id → its api (the new-item form creates through it)
  const makeApi = (b, a) => { const x = makeTakeoffcraftApi(b, a, full); apis.set(a.id, x); b.onDeactivate(() => apis.delete(a.id)); return x; };
  const opts = { app: 'takeoffcraft', appName: ctx.appName || 'TakeoffCraft', apiVersion: TAKEOFFCRAFT_API_VERSION, makeApi };
  for (const k of ['packages', 'storage', 'importer', 'fetchJson', 'base', 'locale', 'timeout']) if (ctx[k] !== undefined) opts[k] = ctx[k];
  if (ctx.bundledOnly ?? bundledOnly()) opts.packages = NO_PACKAGES;   // a store build: only the add-ons it ships with (A.11)
  if (!ctx.verify) installTrust(AddonLoader); else AddonLoader.verify = ctx.verify;
  const loader = new AddonLoader(opts);
  const api = {
    loader, types,
    list: () => loader.list(),
    installPackage: (p) => loader.installPackage(p),
    uninstall: (id) => loader.uninstall(id),
    importers: () => [...registry.importers.values()],
    exporters: () => [...registry.exporters.values()],
    importerFor: (name) => { const n = String(name || '').toLowerCase(); return [...registry.importers.values()].find((e) => e.extensions.some((x) => n.endsWith(x))) || null; },
    onChange: (fn) => { registry.listeners.add(fn); const off = loader.on(fn); return () => { registry.listeners.delete(fn); off(); }; },
    columns: columnsNow,
    /** The new-item form chose "addon:<add-on id>:<kind>": make it. → the item id, or null. */
    createFromSelect(value, over = {}) {
      const m = /^addon:([a-z][a-z0-9.-]{1,63}):([a-z][a-z0-9-]{0,40})$/.exec(String(value));
      const a = m && apis.get(m[1]);
      return a && types.has(m[1] + ':' + m[2]) ? a.items.create(m[2], over) : null;
    },
  };
  if (typeof window !== 'undefined' && !ctx.noGlobal) window.ccAddons = api;
  await loader.start();
  return api;
}
