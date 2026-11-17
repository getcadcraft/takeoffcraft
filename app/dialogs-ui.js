/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dialogs-ui.js: takeoffcraft.js's 16 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountDialogs(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { el, ask, safeName, icon } from './ui-util.js';
import * as U from './units.js';
import { bidSummary, proposalPdf } from './bid.js';
import { alternates, baseEstimate } from './model.js';
import { createBidsUi } from './bids-ui.js';
import { divisionTitle } from './export.js';
import { pdfWithMarks } from './pdfmarks.js';
import { bidPackages, leveling, packageCsv, updateBid, setAward, removeBid, addBid } from './level.js';
import { readStored, readLibraryCsv, mergeEntries, entryFromItem, libraryCsv, itemFromEntry, repricePatches } from './library.js';
import { rateUnset, PACK_LIMITS, readPack, PACK_SYSTEMS, PACK_EXT, installPack, installedPacks, removePack, libraryPack } from './packs.js';

export function mountDialogs(ctx) {
  const { model, files, status, settings, fieldUnit, lenField, lenHint, sheetLabel, host, setActive, root, TYPE_ICONS } = ctx;

  // ---- the bid summary and proposal PDF (T19) ----
  async function bidDialog() {
    if (!model.state.items.length) { status(t('bid.empty')); return; }
    const b = model.bid();
    const pctIn = (k) => {
      const n = el('input', { type: 'text', className: 'tc-input pct', id: 'tc-bid-' + k, inputmode: 'decimal', value: U.percentInput(b[k]), dataset: { bid: k } });
      n.addEventListener('change', () => { const r = U.parsePercent(n.value); if (!r.ok) { n.classList.add('is-invalid'); say(r.error); return; } n.classList.remove('is-invalid'); model.setBid({ [k]: r.bp }); draw(); });
      n.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); n.dispatchEvent(new Event('change')); } });   // Enter: take it, don't make the PDF
      return n;
    };
    const textIn = (k, area = false, rows = 3) => {
      const n = area ? el('textarea', { className: 'tc-input', id: 'tc-bid-' + k, rows, dataset: { bid: k }, placeholder: t('bid.f.' + k + '.ph') }) : el('input', { type: 'text', className: 'tc-input', id: 'tc-bid-' + k, dataset: { bid: k }, placeholder: t('bid.f.' + k + '.ph') });
      n.value = b[k];
      n.addEventListener('change', () => { model.setBid({ [k]: n.value }); });
      if (!area) n.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); n.dispatchEvent(new Event('change')); } });
      return n;
    };
    const msg = el('p', { className: 'tc-lib-msg', role: 'status' });
    const say = (s2) => { msg.textContent = s2; };
    const table = el('table', { className: 'tc-bid-sum', dataset: { bidSum: '' } });
    const draw = () => {
      const sum = bidSummary(ctx.est, model.bid(), alternates(model.state));
      table.replaceChildren(el('tbody', {}, ...sum.lines.map((l) => el('tr', { className: l.sub ? 'is-sub' : '', dataset: { bidLine: l.key } },
        el('td', {}, l.pct ? t('bid.l.pct', { label: l.label, pct: U.percentInput(l.pct) + ' %' }) : l.label), el('td', {}, U.formatCents(l.cents)))),
      ...sum.alts.map((a) => el('tr', { className: 'is-alt' }, el('td', {}, t('bid.pdf.alt', { name: a.name, kind: t('alt.' + a.alt).toLowerCase() })), el('td', {}, (a.withMarkup >= 0 ? '+' : '−') + U.formatCents(Math.abs(a.withMarkup)))))));
    };
    draw();
    const items = el('input', { type: 'checkbox', id: 'tc-bid-items', checked: b.items, dataset: { bid: 'items' } });
    items.addEventListener('change', () => model.setBid({ items: items.checked }));
    const f = (k, input) => [el('label', { for: input.id }, t('bid.f.' + k)), input];
    const asked = ask(root, {
      title: t('bid.h'), text: t('bid.text'),
      body: el('div', { className: 'tc-bid' },
        el('div', { className: 'tc-props' }, ...f('burden', pctIn('burden')), ...f('tax', pctIn('tax')), ...f('overhead', pctIn('overhead')), ...f('profit', pctIn('profit')), ...f('bond', pctIn('bond'))),
        table, msg,
        el('div', { className: 'tc-props' }, ...f('project', textIn('project')), ...f('to', textIn('to', true, 2)), ...f('by', textIn('by', true, 2)),
          ...f('incl', textIn('incl', true)), ...f('excl', textIn('excl', true)), ...f('terms', textIn('terms', true, 2))),
        el('label', { className: 'tc-check' }, items, ' ' + t('bid.f.items'))),
      buttons: [['cancel', t('btn.close'), 'btn-line'], ['ok', t('bid.pdf.btn'), 'btn-plot']],
      focus: '#tc-bid-overhead',
    });
    root.querySelector('dialog.tc-dialog[open]')?.classList.add('is-wide');
    const choice = await asked;
    if (choice !== 'ok') return;
    for (const n of root.querySelectorAll('dialog [data-bid]')) n.dispatchEvent(new Event('change'));   // a field still being typed in
    try {
      const PDFLib = await import('pdf-lib');
      const bytesOut = await proposalPdf(PDFLib, { state: model.state, est: ctx.est, alts: alternates(model.state) });
      const file = t('bid.pdf.file', { name: safeName(model.state.name || 'Takeoff') }) + '.pdf';
      host.download(bytesOut, file, 'application/pdf');
      status(t('bid.pdf.done', { file, total: U.formatCents(bidSummary(ctx.est, model.bid(), alternates(model.state)).total) }), 9000);
    } catch (err) { status(t('bid.pdf.failed', { reason: err.message }), 12000); }
  }

  // ---- bid packages and leveling (0.6 LC.13, level.js): scope by trade out, subcontractors' bids side by side ----
  // 0.7 B4: bids-ui.js sends a package to the website (email invitations, the bidder's page) and pulls the prices back into the bids.
  const bidsUi = createBidsUi({ root, model, status, files: () => files, sheetLabel, divisionTitle, loadPdfLib: () => import('pdf-lib'),
    loadCad: async () => { const m = await import('./cadpdf.js'); return { cadSheetsPdf: m.cadSheetsPdf, remapState: m.remapState,
      pdfWithMarks: (L, bytes, hash, st, o) => pdfWithMarks(L, bytes, hash, st, { ...o, marker: settings.marker }) }; } });   // 0.9.1: a bid package's sheets draw counts at the size set in Settings too
  async function levelDialog() {
    if (!model.state.items.length) { status(t('bid.empty')); return; }
    const title = (k) => (k ? divisionTitle(k) : t('csi.div.none'));
    const msg = el('p', { className: 'tc-lib-msg', role: 'status', dataset: { lvlMsg: '' } });
    const say = (s2) => { msg.textContent = s2; };
    const cents = (v) => { const r = U.parseRate(v); return r.ok ? { ok: true, c: Math.round(r.rate4 / 100) } : r; };
    const box = el('div', { className: 'tc-lvl', dataset: { lvl: '' } });
    const draw = () => {
      const e = baseEstimate(model.state, { awards: false }), pkgs = bidPackages(model.state, e, { title });
      const lv = new Map(leveling(model.state, e, { title }).map((p) => [p.pkg.key, p]));
      box.replaceChildren(...pkgs.map((p) => {
        const key = p.key || 'none', L = lv.get(p.key), reqs = bidsUi.requests(p.key);
        const sendBtn = el('button', { type: 'button', className: 'tc-linkbtn', dataset: { lvlSend: key }, onclick: async () => { await bidsUi.sendDialog(p); draw(); } }, icon('send'), ' ' + t('lvl.send'));
        const getBtn = el('button', { type: 'button', className: 'tc-linkbtn', dataset: { lvlGet: key }, onclick: async () => {
          say(t('lvl.get.busy'));
          const r = await bidsUi.getPrices(p.key);
          say(r.needConnect ? t('bids.err.connect') : r.failed ? t('lvl.get.failed') : (r.added + r.updated) ? t('lvl.get.done', { added: r.added, updated: r.updated }) + (r.late ? ' ' + t('lvl.get.late', { n: r.late }) : '') : r.sealed ? t('lvl.get.sealed') : t('lvl.get.none', { waiting: r.waiting }));
          draw();
        } }, icon('arrow-repeat'), ' ' + t('lvl.get'));
        const csvBtn = el('button', { type: 'button', className: 'tc-linkbtn', dataset: { lvlCsv: key }, onclick: () => {
          const file = t('pkg.csv.file', { name: safeName(model.state.name || 'Takeoff'), pkg: safeName((p.key ? p.key + ' ' : '') + p.title) }) + '.csv';
          host.download(new Blob(['﻿' + packageCsv(p, sheetLabel)], { type: 'text/csv' }), file, 'text/csv');
          say(t('pkg.csv.done', { file }));
        } }, icon('filetype-csv'), ' ' + t('pkg.csv.btn'));
        const chosen = (model.state.awards || []).find((a) => a.pkg === p.key)?.bid || null;
        const rows = (L?.bids || []).map((r) => {
          const b = r.bid;
          const name = el('input', { type: 'text', className: 'tc-input', value: b.bidder, maxLength: 120, 'aria-label': t('lvl.head.bidder'), dataset: { lvlBidder: b.id } });
          name.addEventListener('change', () => { if (!updateBid(model, b.id, { bidder: name.value })) name.value = b.bidder; draw(); });
          const amt = el('input', { type: 'text', className: 'tc-input pct', inputmode: 'decimal', value: U.formatCents(b.amount), 'aria-label': t('lvl.head.bid'), dataset: { lvlAmount: b.id } });
          amt.addEventListener('change', () => { const r2 = cents(amt.value); if (!r2.ok) { amt.classList.add('is-invalid'); say(r2.error); return; } updateBid(model, b.id, { amount: r2.c }); draw(); });
          const left = el('details', { className: 'tc-lvl-left' }, el('summary', {}, b.excl.length ? t('lvl.left.n', { n: b.excl.length }) : t('lvl.left.none')),
            ...p.items.map((x) => {
              const cb = el('input', { type: 'checkbox', checked: b.excl.includes(x.itemId), dataset: { lvlLeft: b.id + ':' + x.itemId } });
              cb.addEventListener('change', () => { updateBid(model, b.id, { excl: cb.checked ? [...b.excl, x.itemId] : b.excl.filter((i) => i !== x.itemId) }, t('undo.bid.left')); draw(); });
              return el('label', { className: 'tc-check' }, cb, ' ' + x.name);
            }));
          return el('tr', { className: b.id === L.low ? 'is-low' : '', dataset: { lvlRow: b.id } }, el('td', {}, name, b.src ? el('span', { className: 'tc-flag', dataset: { lvlWeb: b.id }, title: t('lvl.web.title') }, b.src.late ? t('lvl.web.late') : t('lvl.web')) : null), el('td', {}, amt), el('td', {}, left),
            el('td', { className: 'num' }, U.formatCents(r.plug)), el('td', { className: 'num', dataset: { lvlLeveled: b.id } }, U.formatCents(r.leveled)),
            el('td', { className: 'num' }, (r.diff >= 0 ? '+' : '−') + U.formatCents(Math.abs(r.diff))), el('td', {}, b.id === L.low ? t('lvl.low') : ''),
            el('td', {}, el('button', { type: 'button', className: 'btn-line btn-sm-cc' + (chosen === b.id ? ' is-on' : ''), 'aria-pressed': String(chosen === b.id), dataset: { lvlAward: b.id },
              title: chosen === b.id ? t('lvl.award.off.title') : t('lvl.award.title'), onclick: () => { setAward(model, p.key, chosen === b.id ? null : b.id); draw(); } }, chosen === b.id ? t('lvl.award.on') : t('lvl.award'))),
            el('td', {}, el('button', { type: 'button', className: 'tc-linkbtn is-danger', 'aria-label': t('lvl.remove', { bidder: b.bidder }), onclick: () => { removeBid(model, b.id); draw(); } }, icon('x-lg'))));
        });
        const nb = el('input', { type: 'text', className: 'tc-input', placeholder: t('lvl.new.bidder'), maxLength: 120, dataset: { lvlNewBidder: key } });
        const na = el('input', { type: 'text', className: 'tc-input pct', inputmode: 'decimal', placeholder: '$0.00', dataset: { lvlNewAmount: key } });
        const add = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { lvlAdd: key }, onclick: () => {
          const r2 = cents(na.value);
          if (!nb.value.trim()) { nb.focus(); say(t('lvl.err.bidder')); return; }
          if (!r2.ok) { na.classList.add('is-invalid'); say(r2.error); return; }
          addBid(model, { pkg: p.key, bidder: nb.value, amount: r2.c });
          say(t('lvl.added', { bidder: nb.value.trim(), pkg: p.title }));
          draw();
        } }, t('lvl.add'));
        return el('section', { className: 'tc-lvl-pkg', dataset: { lvlPkg: key } },
          el('h3', { className: 'tc-h' }, (p.key ? p.key + ' ' : '') + p.title),
          el('p', { className: 'tc-note' }, t('lvl.pkg.facts', { items: t('n.items', { n: p.items.length }), sheets: t('n.sheets', { n: p.sheets.length }), cost: U.formatCents(p.cost) }), ' ', csvBtn, ' ', sendBtn, reqs.length ? [' ', getBtn] : null),
          ...reqs.map((r) => el('p', { className: 'tc-note', dataset: { lvlReq: r.req.uuid } }, icon('envelope'), ' ' + r.text,
            r.info ? ' ' + (r.info.sealed ? t('lvl.req.sealed', { until: r.info.sealedUntil ? new Date(r.info.sealedUntil).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }) : '', answered: r.info.answered, invited: r.info.invited })
              : t('lvl.req.opened', { answered: r.info.answered, invited: r.info.invited })) + (r.info.status !== 'open' ? ' ' + t('lvl.req.' + r.info.status) : '') : null)),
          el('table', { className: 'tc-qty-table tc-lvl-table' },
            el('thead', {}, el('tr', {}, ...['bidder', 'bid', 'left', 'plug', 'leveled', 'diff', 'low', 'award'].map((k) => el('th', { scope: 'col' }, t('lvl.head.' + k))), el('th', {}))),
            el('tbody', {}, ...rows, el('tr', {}, el('td', {}, nb), el('td', {}, na), el('td', { colSpan: 7 }, add)))));
      }));
    };
    draw();
    if ((model.state.bidreqs || []).length && bidsUi.connected()) bidsUi.getPrices(undefined, { quiet: true }).then((r) => { if (r.added || r.updated) say(t('lvl.get.done', { added: r.added, updated: r.updated })); draw(); });    // quietly, when this tab is already signed in
    const stopWatching = bidsUi.onConnectionChange(() => draw());
    const asked = ask(root, { title: t('lvl.h'), text: t('lvl.text'), body: el('div', {}, box, msg), buttons: [['cancel', t('btn.close'), 'btn-line']] });
    root.querySelector('dialog.tc-dialog[open]')?.classList.add('is-wide');
    await asked;
    stopWatching();
  }

  // ---- the assembly and price library (T9): per viewer, kept in this browser for every takeoff ----
  const LIB_KEY = 'takeoffcraft.library';
  const loadLib = () => { try { return readStored(JSON.parse(localStorage.getItem(LIB_KEY) || '[]')); } catch { return []; } };
  const saveLib = (lib) => { try { localStorage.setItem(LIB_KEY, JSON.stringify(lib)); return true; } catch { return false; } };

  async function libraryDialog() {
    let lib = loadLib();
    const picked = new Set();
    const msg = el('p', { className: 'tc-lib-msg', role: 'status', dataset: { libMsg: '' } });
    const say = (text) => { msg.textContent = text; };
    const store = (next, text) => { lib = next; say(saveLib(lib) ? text : t('lib.err.store')); picked.clear(); draw(); };
    const search = el('input', { type: 'search', className: 'tc-input', placeholder: t('lib.search'), 'aria-label': t('lib.search'), dataset: { libSearch: '' } });
    const list = el('ul', { className: 'tc-lib-list', dataset: { libList: '' } });
    const count = el('p', { className: 'tc-note' });
    const money = U.formatRate;
    function draw() {
      const q = search.value.trim().toLowerCase();
      count.textContent = t('lib.count', { n: lib.length });
      list.replaceChildren(...lib.map((e, i) => [e, i]).filter(([e]) => !q || e.name.toLowerCase().includes(q)).slice(0, 300).map(([e, i]) => {
        const cb = el('input', { type: 'checkbox', checked: picked.has(i), dataset: { libEntry: String(i) } });
        cb.addEventListener('change', () => { if (cb.checked) picked.add(i); else picked.delete(i); });
        const unit = U.UNITS[e.unit].label;
        const meta = rateUnset(e) ? t('lib.row.unset', { unit }) : t('lib.meta', { unit, mat: money(e.mat), lab: money(e.lab) });   // TK.1: a pack's entries start without rates
        return el('li', {}, el('label', { className: 'tc-lib-row', title: [e.src, e.note].filter(Boolean).join('\n') || null }, cb, icon(TYPE_ICONS[e.type]),
          el('span', { className: 'tc-lib-name' }, e.name, e.pack ? el('span', { className: 'tc-lib-tag', dataset: { libPackTag: e.pack.id } }, t('lib.row.pack', { pack: e.pack.name })) : null),
          el('span', { className: 'tc-lib-meta', dataset: rateUnset(e) ? { libUnset: '' } : {} }, meta + (e.components.length ? ' · ' + t('lib.parts', { n: e.components.length }) : ''))));
      }));
      if (!lib.length) list.replaceChildren(el('li', { className: 'tc-note' }, t('lib.empty')));
    }
    search.addEventListener('input', draw);
    const file = el('input', { type: 'file', accept: '.csv,.txt,text/csv', hidden: true, dataset: { libFile: '' } });
    file.addEventListener('change', async () => {
      const f = file.files[0];
      file.value = '';
      if (!f) return;
      if (f.size > 20e6) { say(t('lib.err.big')); return; }
      const r = readLibraryCsv(await f.text());
      if (!r.ok) { say(t('lib.err.read', { file: f.name, why: r.error })); return; }
      const m = mergeEntries(lib, r.entries);
      store(m.lib, t('lib.imported', { file: f.name, added: m.added, updated: m.updated }) + (r.warnings.length ? ' ' + t('lib.skipped', { n: r.warnings.length, first: r.warnings[0] }) : ''));
    });
    const btn = (label, data, fn, ic) => { const b = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: data }, ic ? icon(ic) : null, ic ? ' ' + label : label); b.addEventListener('click', fn); return b; };
    const clear = btn(t('lib.clear'), { libClear: '' }, () => {
      if (!lib.length) return;
      if (clear.dataset.armed !== '1') { clear.dataset.armed = '1'; clear.textContent = t('lib.clear.sure', { n: lib.length }); return; }
      clear.dataset.armed = ''; clear.textContent = t('lib.clear');
      store([], t('lib.cleared'));
    });
    const tools = el('div', { className: 'tc-lib-tools' },
      btn(t('lib.import'), { libImport: '' }, () => file.click(), 'upload'),
      btn(t('lib.save'), { libSave: '' }, () => {
        if (!model.state.items.length) { say(t('lib.save.none')); return; }
        const m = mergeEntries(lib, model.state.items.map(entryFromItem));
        store(m.lib, t('lib.saved', { added: m.added, updated: m.updated }));
      }, 'box-arrow-in-down'),
      btn(t('lib.export'), { libExport: '' }, () => {
        if (!lib.length) { say(t('lib.empty')); return; }
        host.download('\uFEFF' + libraryCsv(lib), t('lib.file') + '.csv', 'text/csv;charset=utf-8');
      }, 'download'),
      clear, file,
      // TK.1: these two close the library (data-key) and open their own dialog; the library opens again after
      btn(t('lib.packs'), { key: 'packs', libPacks: '' }, () => {}, 'box-seam'),
      btn(t('lib.exportpack'), { key: 'export-pack', libExportPack: '' }, () => {}, 'box-arrow-up'));
    tools.querySelector('[data-lib-packs]').title = t('lib.packs.title');
    draw();
    const asked = ask(root, {
      title: t('lib.title'), text: t('lib.text'),
      body: el('div', { className: 'tc-lib' }, tools, msg, search, count, list),
      buttons: [['cancel', t('btn.close'), 'btn-line'], ['reprice', t('lib.reprice'), 'btn-line'], ['ok', t('lib.add'), 'btn-plot']],
      focus: '[data-lib-search]',
      onOk: () => (picked.size ? null : t('lib.err.pick')),
    });
    root.querySelector('dialog.tc-dialog[open]')?.classList.add('is-wide');
    const choice = await asked;
    if (choice === 'ok') {
      const list2 = [...picked].sort((a, b) => a - b).map((i) => lib[i]).filter(Boolean);
      const taken = new Set(model.state.items.map((i) => i.name.toLowerCase()));
      const fields = list2.map((e) => { const f = itemFromEntry(e); let n = f.name, k = 2; while (taken.has(n.toLowerCase())) n = f.name + ' (' + k++ + ')'; taken.add(n.toLowerCase()); return { ...f, name: n }; });
      try {
        const ids = model.addItems(fields);
        if (ids.length) setActive(ids.at(-1));
        status(t('lib.added', { n: ids.length }));
      } catch (err) { status(err.message, 9000); }
    } else if (choice === 'reprice') {
      const patches = repricePatches(model.state.items, lib);
      if (!patches.length) { status(t('lib.repriced.none')); return; }
      model.updateItems(patches);
      status(t('lib.repriced', { n: patches.length }), 9000);
    } else if (choice === 'packs') {
      await packsDialog();
      return libraryDialog();
    } else if (choice === 'export-pack') {
      await exportPackDialog();
      return libraryDialog();
    }
  }

  // ---- trade packs (0.5 TK.1, packs.js): data-only add-ons that install assemblies into the library ----
  const PACKS_DIR = new URL('./packs/', import.meta.url);
  const PACK_FILE_RE = /^[a-z0-9][a-z0-9.-]{0,80}\.ccpack\.json$/;
  const UNITS_KEY = 'takeoffcraft.packs.units';
  let packIndex = null;                       // the build's packs/index.json, read once
  async function loadPackIndex() {
    if (packIndex) return packIndex;
    const r = await fetch(new URL('index.json', PACKS_DIR), { cache: 'no-cache' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const j = await r.json();
    packIndex = (Array.isArray(j?.packs) ? j.packs : []).filter((p) => p && typeof p.id === 'string' && typeof p.file === 'string' && PACK_FILE_RE.test(p.file));
    return packIndex;
  }
  async function fetchPack(meta) {
    const r = await fetch(new URL(meta.file, PACKS_DIR), { cache: 'no-cache' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const text = await r.text();
    if (text.length > PACK_LIMITS.bytes) throw new Error(t('packs.err.big'));
    let json;
    try { json = JSON.parse(text); } catch { throw new Error(t('packs.err.json')); }
    const res = readPack(json);
    if (!res.ok) throw new Error(res.error);
    return res;
  }

  /** The Trade packs dialog. offer: a pack id to point at (the directory's Install link, ?pack=<id>). */
  async function packsDialog({ offer = null } = {}) {
    let lib = loadLib();
    const rows = [];                          // [{ meta, pack?, warnings?, fromFile? }]
    const msg = el('p', { className: 'tc-lib-msg', role: 'status', dataset: { packsMsg: '' } });
    const say = (text) => { msg.textContent = text; };
    const stored = localStorage.getItem(UNITS_KEY);
    const units = el('select', { className: 'tc-input', id: 'tc-packs-units', dataset: { packsUnits: '' } },
      ...PACK_SYSTEMS.map((k) => el('option', { value: k, selected: k === (PACK_SYSTEMS.includes(stored) ? stored : 'imperial') }, t('packs.units.' + k))));
    units.addEventListener('change', () => { try { localStorage.setItem(UNITS_KEY, units.value); } catch { /* private mode */ } });
    const list = el('ul', { className: 'tc-pack-list', dataset: { packsList: '' } }, el('li', { className: 'tc-note' }, t('packs.loading')));
    const fileIn = el('input', { type: 'file', accept: PACK_EXT + ',.json,application/json', hidden: true, dataset: { packsFile: '' } });
    const fileBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { packsOpen: '' } }, icon('folder2-open'), ' ' + t('packs.file'));
    fileBtn.addEventListener('click', () => fileIn.click());
    fileIn.addEventListener('change', async () => {
      const f = fileIn.files[0];
      fileIn.value = '';
      if (!f) return;
      if (f.size > PACK_LIMITS.bytes) { say(t('packs.err.big')); return; }
      let json;
      try { json = JSON.parse(await f.text()); } catch { say(t('packs.err.file', { file: f.name, why: t('packs.err.json') })); return; }
      const res = readPack(json);
      if (!res.ok) { say(t('packs.err.file', { file: f.name, why: res.error })); return; }
      const p = res.pack;
      const row = { meta: { id: p.id, name: p.name, packVersion: p.packVersion, status: p.status, license: p.license, description: p.description, items: p.items.length, sources: p.sources.length }, pack: p, warnings: res.warnings, fromFile: true };
      const i = rows.findIndex((r) => r.meta.id === p.id);
      if (i >= 0) rows[i] = row; else rows.unshift(row);
      say(res.warnings.length ? t('packs.notes', { first: res.warnings[0] }) : '');
      draw();
    });

    const store = (next) => { lib = next; return saveLib(lib); };
    async function packOf(row) { if (!row.pack) { const r = await fetchPack(row.meta); row.pack = r.pack; row.warnings = r.warnings; } return row.pack; }
    async function install(row, samples) {
      let p;
      try { p = await packOf(row); } catch (err) { say(t('packs.err.file', { file: row.meta.file || row.meta.name, why: err.message })); return; }
      const r = installPack(lib, p, { system: units.value, samples });
      if (!store(r.lib)) { say(t('lib.err.store')); return; }
      say([t('packs.done', { name: p.name, added: r.added, updated: r.updated }), r.kept ? t('packs.done.kept', { n: r.kept }) : '', r.full ? t('packs.done.full') : '', samples && p.samples ? '' : t('packs.done.rates')].filter(Boolean).join(' '));
      draw();
    }
    function draw() {
      const have = new Map(installedPacks(lib).map((p) => [p.id, p]));
      list.replaceChildren(...rows.map((row) => {
        const m = row.meta, inst = have.get(m.id);
        const head = el('div', { className: 'tc-pack-head' },
          el('strong', { className: 'tc-pack-name' }, m.name), ' ', el('span', { className: 'tc-pack-ver' }, m.packVersion || ''),
          el('span', { className: 'tc-pack-status' + (m.status === 'reviewed' ? ' is-reviewed' : ''), dataset: { packStatus: m.status } },
            m.status === 'reviewed' && row.pack?.reviewedBy ? t('packs.status.reviewed', { by: row.pack.reviewedBy, date: row.pack.reviewedOn }) : t('packs.status.starter')));
        const meta = el('p', { className: 'tc-pack-meta' }, t('packs.meta', { n: m.items, sources: m.sources, license: m.license || 'CC0-1.0' }) + (inst ? ' · ' + t('packs.installed', { n: inst.count }) : ''));
        const samples = row.pack?.samples ? el('input', { type: 'checkbox', dataset: { packSamples: m.id } }) : null;
        const go = el('button', { type: 'button', className: (inst ? 'btn-line' : 'btn-plot') + ' btn-sm-cc', dataset: { packInstall: m.id } }, inst ? t('packs.update') : t('packs.install'));
        go.addEventListener('click', () => install(row, !!samples?.checked));
        const rm = inst ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { packRemove: m.id } }, t('packs.remove')) : null;
        rm?.addEventListener('click', () => {
          if (rm.dataset.armed !== '1') { rm.dataset.armed = '1'; rm.textContent = t('packs.remove.sure', { n: inst.count }); return; }
          const r = removePack(lib, m.id);
          if (!store(r.lib)) { say(t('lib.err.store')); return; }
          say(t('packs.removed', { name: m.name, n: r.removed }));
          draw();
        });
        const det = el('details', { className: 'tc-pack-more' }, el('summary', {}, t('packs.sources')), el('p', {}, m.description || ''));
        det.addEventListener('toggle', async () => {
          if (!det.open || det.dataset.filled) return;
          det.dataset.filled = '1';
          try {
            const p = await packOf(row);
            det.append(el('ul', { className: 'tc-pack-src' }, ...p.sources.map((x) => el('li', {}, [x.title, x.edition, x.publisher].filter(Boolean).join(', '), x.url ? ' ' : '', x.url ? el('a', { href: x.url, target: '_blank', rel: 'noopener noreferrer' }, x.url.replace(/^https:\/\//, '').replace(/\/$/, '')) : null))));   // i18n-ignore (rel attribute)
          } catch (err) { det.append(el('p', { className: 'tc-note' }, err.message)); }
        });
        return el('li', { className: 'tc-pack' + (offer === m.id ? ' is-offered' : ''), dataset: { pack: m.id } }, head, meta,
          samples ? el('label', { className: 'tc-check' }, samples, ' ' + t('packs.samples', { label: row.pack.samples.label, region: row.pack.samples.region, date: row.pack.samples.date })) : null,
          el('div', { className: 'tc-pack-act' }, go, rm), det);
      }));
      if (!rows.length) list.replaceChildren(el('li', { className: 'tc-note' }, t('packs.none')));
    }
    const asked = ask(root, {
      title: t('packs.title'), text: t('packs.text'),
      body: el('div', { className: 'tc-lib tc-packs' },
        el('div', { className: 'tc-lib-tools' }, el('label', { for: 'tc-packs-units' }, t('packs.units')), units, fileBtn, fileIn), msg, list),
      buttons: [['cancel', t('btn.close'), 'btn-plot']],
    });
    root.querySelector('dialog.tc-dialog[open]')?.classList.add('is-wide');
    loadPackIndex().then((idx) => {
      for (const meta of idx) if (!rows.some((r) => r.meta.id === meta.id)) rows.push({ meta });
      if (offer) {
        const o = rows.find((r) => r.meta.id === offer);
        say(o ? t('packs.offered', { name: o.meta.name }) : t('packs.unknown', { id: offer }));
        if (o) requestAnimationFrame(() => list.querySelector('[data-pack="' + CSS.escape(offer) + '"]')?.scrollIntoView({ block: 'nearest' }));
      }
      draw();
    }, (err) => { say(t('packs.err.load', { why: err.message })); draw(); });
    await asked;
  }

  /** Your library as a trade pack file (TK.1). */
  async function exportPackDialog() {
    const lib = loadLib();
    const f = (k, input) => [el('label', { for: input.id }, t('packs.export.f.' + k)), input];
    const name = el('input', { type: 'text', className: 'tc-input', id: 'tc-xp-name', value: t('pack.export.name'), dataset: { xpName: '' } });
    const author = el('input', { type: 'text', className: 'tc-input', id: 'tc-xp-author', dataset: { xpAuthor: '' } });
    const desc = el('textarea', { className: 'tc-input', id: 'tc-xp-desc', rows: 2, dataset: { xpDesc: '' } });
    const own = el('input', { type: 'checkbox', checked: true, dataset: { xpOwn: '' } });
    const rates = el('input', { type: 'checkbox', dataset: { xpRates: '' } });
    const region = el('input', { type: 'text', className: 'tc-input', id: 'tc-xp-region', placeholder: t('packs.export.ph.region'), dataset: { xpRegion: '' } });
    const date = el('input', { type: 'date', className: 'tc-input', id: 'tc-xp-date', value: new Date().toISOString().slice(0, 10), dataset: { xpDate: '' } });
    const ratesBox = el('div', { className: 'tc-props', hidden: true }, ...f('region', region), ...f('date', date));
    rates.addEventListener('change', () => { ratesBox.hidden = !rates.checked; });
    const pick = () => (own.checked ? lib.filter((e) => !e.pack) : lib);
    const choice = await ask(root, {
      title: t('packs.export.title'), text: t('packs.export.text'),
      body: el('div', { className: 'tc-lib' }, el('div', { className: 'tc-props' }, ...f('name', name), ...f('author', author), ...f('desc', desc)),
        el('label', { className: 'tc-check' }, own, ' ' + t('packs.export.f.own')), el('label', { className: 'tc-check' }, rates, ' ' + t('packs.export.f.rates')), ratesBox),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('packs.export.btn'), 'btn-plot']],
      focus: '[data-xp-name]',
      onOk: () => (!pick().length ? t('packs.export.err.none') : rates.checked && (!region.value.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(date.value)) ? t('packs.export.err.region') : null),
    });
    if (choice !== 'ok') return;
    const slug = (name.value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'my-library').slice(0, 50);
    const id = /^[a-z]/.test(slug) ? slug : 'pack-' + slug;
    const entries = pick();
    const pack = libraryPack(entries, { id, name: name.value, author: author.value, description: desc.value, rates: rates.checked, region: region.value, date: date.value });
    const file = id + PACK_EXT;
    host.download(JSON.stringify(pack, null, 1) + '\n', file, 'application/json');
    status(t('packs.export.done', { file, n: pack.items.length }), 9000);
  }

  async function levelsDialog() {
    if (!ctx.sheets.length) return;
    const fu = fieldUnit('ft');
    const inputs = ctx.sheets.map((s) => {
      const v = model.levelOf(s.key);
      return { s, input: el('input', { type: 'text', className: 'tc-input', value: v === null ? '' : lenField(v, fu), placeholder: lenHint(fu, 'base'), dataset: { levelFor: s.key }, 'aria-label': s.title }) };
    });
    let map = null;
    const choice = await ask(root, {
      title: t('d3.levels.dlg'), text: t('d3.levels.text'),
      body: el('div', { className: 'tc-levels' }, inputs.map(({ s, input }) => el('label', { className: 'tc-level-row' }, el('span', {}, s.title), input))),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('d3.levels.ok'), 'btn-plot']],
      focus: '[data-level-for]',
      onOk: () => {
        const m = {};
        for (const { s, input } of inputs) {
          const txt = input.value.trim();
          if (!txt) { m[s.key] = null; continue; }
          const neg = /^[-−]/.test(txt);
          const r = /^[-−]?0+(\.0*)?\s*('|"|ft|mm|cm|m)?$/.test(txt) ? { ok: true, ft: 0 } : U.parseLength(txt.replace(/^[-−]/, ''), { defaultUnit: fu });
          if (!r.ok) { input.classList.add('is-invalid'); return s.title + ': ' + r.error; }
          m[s.key] = neg ? -r.ft : r.ft;
        }
        map = m;
        return null;
      },
    });
    if (choice === 'ok' && map) model.setLevels(map);
  }

  return { bidDialog, levelDialog, loadLib, saveLib, libraryDialog, packsDialog, levelsDialog };
}
