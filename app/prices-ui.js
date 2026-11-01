/* SPDX-License-Identifier: Apache-2.0 */
/**
 * prices-ui.js — the page side of price memory (0.8 EG.68, session takeoff_PART_2): the toolbar's Prices button and its dialog.
 * The list and the maths are prices.js (DOM-free). What it remembers is the rates of your past takeoffs, kept in this browser (Studio:
 * its web view) beside the price Library, never in a takeoff file and never sent anywhere; no trained model.
 * Mounted by takeoffcraft.js: mountPrices(ctx) → { open, saved(), drive }.
 */

import { el, icon, ask } from './ui-util.js';
import { readProject } from './model.js';
import { formatRate } from './units.js';
import { jobKey } from './learn.js';
import { emptyStore, readStore, recordJob, statsOf, find, plan, forget, clear, count, keyOf } from './prices.js';
import { t } from './i18n.js';

const KEY = 'takeoffcraft.prices';

/** ctx: { root, model, status(text, ms), host, projectTypes } */
export function mountPrices(ctx) {
  const { root, model } = ctx;
  const load = () => { try { return readStore(JSON.parse(localStorage.getItem(KEY) || 'null')); } catch { return emptyStore(); } };
  const save = (s) => { try { localStorage.setItem(KEY, JSON.stringify(s)); return true; } catch { return false; } };
  let store = load();
  const btn = root.querySelector('[data-act="prices"]');
  btn?.addEventListener('click', () => open());
  const badge = () => btn?.setAttribute('title', t('eg68.tool.title') + (count(store) ? ' ' + t('eg68.tool.count', { n: count(store) }) : ''));
  badge();
  const rates = (r) => t('eg68.rates', { mat: formatRate(r.mat), lab: formatRate(r.lab) });

  /** A takeoff was saved: its priced, used items are this job's prices. */
  function saved() {
    const r = recordJob(store, model.state, jobKey(model.state));
    if (!r.changed) return 0;
    store = r.store; save(store); badge();
    if (dlg?.open) render();
    return r.changed;
  }

  // ---- the dialog ----
  let dlg = null;
  function open() {
    store = load();
    if (!dlg) { dlg = el('dialog', { className: 'tc-dialog tc-learn', 'aria-labelledby': 'tc-prices-h', dataset: { pricesDialog: '' } }); dlg.addEventListener('close', () => dlg.remove()); }
    render();
    if (!dlg.isConnected) root.append(dlg);
    if (!dlg.open) dlg.showModal();
  }
  const small = (label, on, data = {}, disabled = false) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: on, dataset: data, disabled }, label);

  function applyPatches(p, label) {
    if (!p.length) return 0;
    model.updateItems(p.map(({ id, patch }) => ({ id, patch })), label);
    return p.length;
  }
  function useOne(it, mode, similar) {
    const p = plan(store, [it], { mode, only: 'all', similar });
    if (!p.length) return;
    applyPatches(p, t('eg68.undo', { n: 1 }));
    ctx.status(t('eg68.applied', { n: 1, mod: ctx.modKey }), 9000);
    render();
  }
  function priceAll() {
    const p = plan(store, model.state.items, { mode: 'last', only: 'unpriced', similar: false });
    if (!applyPatches(p, t('eg68.undo', { n: p.length }))) return;
    ctx.status(t('eg68.applied', { n: p.length, mod: ctx.modKey }), 9000);
    render();
  }
  function change(fn) { store = fn(load()); save(store); badge(); render(); }

  async function learnFrom() {
    const list = await ctx.host.openFile({ types: ctx.projectTypes });
    if (!list?.length) return;
    let json;
    try { const f = await list[0].file(); json = JSON.parse(await f.text()); } catch { ctx.status(t('open.notjson', { file: list[0].name }), 10000); return; }
    const r = readProject(json);
    if (!r.ok) { ctx.status(r.error, 10000); return; }
    const key = jobKey(r.state) || ('j' + [...keyOf(r.state.name + list[0].name)].reduce((h, c) => (Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0), 2166136261).toString(16).padStart(8, '0') + '00000000');
    const was = count(store);
    const out = recordJob(load(), r.state, key);
    if (!out.seen) { ctx.status(t('eg68.learn.none', { job: r.state.name }), 9000); return; }
    store = out.store; save(store); badge();
    ctx.status(t('eg68.learn.done', { n: out.seen, job: r.state.name, fresh: count(store) - was }), 12000);
    render();
  }

  function render() {
    if (!dlg) return;
    const names = Object.entries(store.names).sort((a, b) => a[1].name.localeCompare(b[1].name));
    const here = model.state.items.filter((it) => it.type !== 'fixed').map((it) => ({ it, f: find(store, it) })).filter((x) => x.f.exact || x.f.similar.length);
    const unpriced = plan(store, model.state.items, { mode: 'last', only: 'unpriced' });
    const rows = here.map(({ it, f }) => {
      const rec = f.exact || f.similar[0], st = statsOf(rec), unitDiff = st.last.unit && st.last.unit !== it.unit;
      const same = (m) => { const x = m === 'median' ? st.median : st.last; return x.mat === it.mat && x.lab === it.lab; };
      const sub = [
        it.mat || it.lab ? t('eg68.now', { rates: rates(it) }) : t('eg68.noprice'),
        st.jobs === 1 ? t('eg68.row.one', { last: rates(st.last) }) : t('eg68.row', { last: rates(st.last), median: rates(st.median), n: st.jobs, min: formatRate(st.min), max: formatRate(st.max) }),
        f.exact ? '' : t('eg68.similar', { name: rec.name }),
        unitDiff ? t('eg68.unit', { was: st.last.unit, is: it.unit }) : '',
      ].filter(Boolean).join(' ');
      return el('li', { className: 'tc-learn-row', dataset: { pricesItem: it.id } },
        el('div', { className: 'tc-learn-main' }, el('span', { className: 'tc-learn-name' }, it.name), el('span', { className: 'tc-learn-sub' }, sub)),
        el('div', { className: 'tc-learn-acts' },
          small(t('eg68.use.last'), () => useOne(it, 'last', !f.exact), { pricesUseLast: it.id }, unitDiff || same('last')),
          st.jobs > 1 ? small(t('eg68.use.median'), () => useOne(it, 'median', !f.exact), { pricesUseMedian: it.id }, unitDiff || same('median')) : null));
    });
    const memRows = names.map(([k, r]) => { const st = statsOf(r); return el('li', { className: 'tc-learn-row', dataset: { pricesName: k } },
      el('div', { className: 'tc-learn-main' }, el('span', { className: 'tc-learn-name' }, r.name), el('span', { className: 'tc-learn-sub' }, (st.jobs === 1 ? t('eg68.row.one', { last: rates(st.last) }) : t('eg68.row', { last: rates(st.last), median: rates(st.median), n: st.jobs, min: formatRate(st.min), max: formatRate(st.max) })) + ' ' + t('eg68.per', { unit: r.unit }))),
      el('div', { className: 'tc-learn-acts' }, el('button', { type: 'button', className: 'tc-iconbtn', title: t('eg68.forget', { name: r.name }), 'aria-label': t('eg68.forget', { name: r.name }), dataset: { pricesForget: k }, onclick: () => change((s) => forget(s, k)) }, icon('trash')))); });
    const section = (key, title, intro, list, empty, extra = null) => el('section', { className: 'tc-learn-sec', dataset: { pricesSec: key } }, el('h3', { className: 'tc-learn-h3' }, title), intro ? el('p', { className: 'tc-learn-intro' }, intro) : null, extra, list.length ? el('ul', { className: 'tc-learn-list' }, list) : el('p', { className: 'tc-learn-empty' }, empty));
    const on = el('input', { type: 'checkbox', checked: !store.off, dataset: { pricesOn: '' }, onchange: (e) => change((s) => ({ ...s, off: !e.target.checked })) });
    dlg.replaceChildren(
      el('div', { className: 'tc-dialog-head' }, el('h2', { className: 'tc-h', id: 'tc-prices-h' }, t('eg68.h'))),
      el('div', { className: 'tc-learn-body' },
        el('p', { className: 'tc-learn-lead' }, t('eg68.lead')),
        el('div', { className: 'tc-learn-top' }, small(t('eg68.learn'), () => learnFrom(), { pricesLearn: '' }), el('label', { className: 'tc-check' }, on, ' ', t('eg68.on'))),
        store.off ? el('p', { className: 'tc-learn-note', role: 'note' }, t('eg68.off.note')) : null,
        section('here', t('eg68.here.h'), t('eg68.here.intro'), rows, t('eg68.here.empty'),
          el('div', { className: 'tc-learn-top' }, small(t('eg68.all', { n: unpriced.length }), () => priceAll(), { pricesAll: '' }, !unpriced.length))),
        section('all', t('eg68.all.h'), t('eg68.all.intro'), memRows, t('eg68.all.empty'))),
      el('div', { className: 'tc-dialog-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { pricesClear: '' }, disabled: !names.length, onclick: async () => { if (await ask(root, { title: t('eg68.clear'), text: t('eg68.clear.text'), buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('eg68.clear'), 'btn-plot']] }) === 'ok') change((s) => clear(s)); } }, t('eg68.clear')),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onclick: () => dlg.close() }, t('btn.close'))));
  }
  model.on((why) => { if (dlg?.open && (why === 'change' || why === 'load')) render(); });

  /** What the assistant's tools drive (the same list and the same Use). */
  const drive = {
    list: () => model.state.items.filter((it) => it.type !== 'fixed').map((it) => { const f = find(store, it), rec = f.exact || f.similar[0]; if (!rec) return null; const st = statsOf(rec); return { id: it.id, name: it.name, unit: it.unit, exact: !!f.exact, remembered: rec.name, jobs: st.jobs, last: st.last, typical: st.median, lowestTotal: st.min, highestTotal: st.max, now: { mat: it.mat, lab: it.lab }, unitDiffers: !!(st.last.unit && st.last.unit !== it.unit) }; }).filter(Boolean),
    plan: (o) => { const p = plan(store, model.state.items, o); return { items: p.map((x) => ({ id: x.id, name: x.name, from: x.from, patch: x.patch, jobs: x.jobs })), skipped: p.skipped }; },
    apply: (o, label) => { const p = plan(store, model.state.items, o); if (!p.length) return 0; model.updateItems(p.map(({ id, patch }) => ({ id, patch })), label); return p.length; },
    count: () => count(store),
  };
  return { open, saved, drive, store: () => store };
}
