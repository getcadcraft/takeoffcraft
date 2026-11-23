/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheet-list-ui.js: takeoffcraft.js's 20 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountSheetList(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { pageSize, groupBySize, sizeText } from './pagesize.js';
import { t } from './i18n.js';
import { renderThumb } from './viewer.js';
import { SheetWindow } from './sheetlist.js';
import { el } from './ui-util.js';
import * as U from './units.js';

export function mountSheetList(ctx) {
  const { ST, ui, model, isCad, thumbs, app, wsChanged, setTool, status, showSheet, renderToolbar, root } = ctx;

  // ---- page sizes (0.10 SU.1805): mm and inches with the nearest named paper size; a drawing's sheets have no paper, so none
  const sizeCache = new WeakMap();
  /** A PDF sheet's size as shown (rotation applied), or null for a drawing's sheet: { wMm, hMm, wIn, hIn, orient, name, custom, near }. */
  function sizeOf(s) {
    if (isCad(s.file)) return null;
    let z = sizeCache.get(s.info);
    if (!z) { z = pageSize({ width: s.info.width, height: s.info.height, userUnit: s.info.userUnit || 1 }); sizeCache.set(s.info, z); }
    return z;
  }
  const sizeName = (z) => z.name || t('psize.custom');
  const sizeNameOrient = (z) => t('psize.named', { name: sizeName(z), orient: t('psize.orient.' + z.orient) });
  const sizeGroups = () => groupBySize(ST.sheets.map((s) => ({ key: s.key, info: sizeOf(s) })));
  ST.bySize = false;
  /** Every PDF page of the open set with its size and group (the estimate workbook's "Page sizes" sheet). */
  function pageSizeRows() {
    const groups = sizeGroups(), groupOf = new Map(groups.flatMap((g) => g.keys.map((k) => [k, g])));
    return ST.sheets.filter((s) => sizeOf(s)).map((s) => { const z = sizeOf(s); return { title: s.title, file: s.file.name, page: s.info.index + 1, size: sizeName(z), mm: sizeText(z), orient: t('psize.orient.' + z.orient), wMm: Math.round(z.wMm * 10) / 10, hMm: Math.round(z.hMm * 10) / 10, odd: !!groupOf.get(s.key)?.odd }; });
  }

  function visibleSheets() {
    const q = ui.sheetQ.value.trim().toLowerCase();
    return q ? ST.sheets.filter((s) => (s.title + ' ' + s.file.name + ' ' + s.info.label).toLowerCase().includes(q)) : ST.sheets;
  }
  ui.sheetQ.addEventListener('input', () => renderSheets());
  ui.bySize?.addEventListener('click', () => {
    ST.bySize = !ST.bySize;
    ui.bySize.setAttribute('aria-pressed', String(ST.bySize));
    renderSheets();
    status(ST.bySize ? t('psize.by.on', { n: sizeGroups().length }) : t('psize.by.off'));
  });

  const thumbQueue = [];
  ST.thumbBusy = false;
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { io.unobserve(en.target); thumbQueue.push(en.target); }
    pumpThumbs();
  }, { root: ui.sheets.closest('.tc-panel') });
  async function pumpThumbs() {
    if (ST.thumbBusy) return;
    ST.thumbBusy = true;
    while (thumbQueue.length) {
      const c = thumbQueue.shift();
      const s = sheetByKey(c.dataset.key);
      if (!s || c.dataset.done) continue;
      try {
        const pg = await s.file.doc.getPage(s.info.index + 1);
        await renderThumb(pg, s.info, c, 200);
        c.dataset.done = '1';
        if (s !== ST.cur) pg.cleanup();   // 0.10 PERF.35: the page's operator list and glyphs are let go; the open sheet keeps its own
      } catch { /* a broken page keeps a blank thumbnail */ }
    }
    ST.thumbBusy = false;
  }
  /** A sheet by its key (a Map rebuilt when the set changes; the list was scanned for each lookup). */
  /** A sheet by its key (a Map rebuilt when the set changes; the list was scanned for each lookup). */
  ST.sheetMap = null; ST.sheetMapOf = null;
  function sheetByKey(key) {
    if (ST.sheetMapOf !== ST.sheets || ST.sheetMap.size !== ST.sheets.length) { ST.sheetMap = new Map(ST.sheets.map((x) => [x.key, x])); ST.sheetMapOf = ST.sheets; }
    return ST.sheetMap.get(key) || null;
  }
  // The list is windowed (0.10 PERF.35): a 2,000-sheet set draws the rows near the view, not 2,000 rows; thumbnails are kept for the newest 160.
  const THUMBS_KEPT = 160;
  const sheetWin = new SheetWindow({
    list: ui.sheets,
    estimate: (e) => (e.group ? 30 : (Math.max(120, (ui.sheets.clientWidth || 260) - 20) / (e.ar || 0.75)) + 78),
    renderRow: (e) => (e.group ? groupRow(e.group) : sheetListRow(sheetByKey(e.id))),
  });
  ST.sheetStats = { mark: new Map(), hl: new Map() }; ST.rowOf = new Map();
  function groupRow(gz) {
    return el('li', { className: 'tc-sheet-group' + (gz.odd ? ' is-odd' : ''), dataset: { sizeGroup: gz.id } },
      el('span', { className: 'tc-sheet-group-name' }, gz.name || t('psize.custom')),
      el('span', {}, sizeText({ wMm: gz.wMm, hMm: gz.hMm, wIn: gz.wMm / 25.4, hIn: gz.hMm / 25.4 })),
      el('span', {}, t('psize.group.n', { n: gz.keys.length })),
      gz.odd ? el('span', { className: 'tc-sheet-group-odd' }, t('psize.odd')) : null);
  }
  function thumbFor(s) {
    let c = thumbs.get(s.key);
    if (c) { thumbs.delete(s.key); thumbs.set(s.key, c); return c; }
    c = el('canvas', { className: 'tc-thumb', dataset: { key: s.key }, 'aria-hidden': 'true' });
    c.style.setProperty('--ar', String(s.info.width / s.info.height));
    thumbs.set(s.key, c); io.observe(c);
    while (thumbs.size > THUMBS_KEPT) { const [k, old] = thumbs.entries().next().value; thumbs.delete(k); io.unobserve(old); }
    return c;
  }
  function sheetListRow(s) {
    const zs = sizeOf(s), sc = model.scaleOf(s.key);
    const n = ST.sheetStats.mark.get(s.key) || 0, h = ST.sheetStats.hl.get(s.key) || 0;
    return el('li', {}, el('button', { type: 'button', className: 'tc-sheet', 'aria-current': ST.cur?.key === s.key ? 'true' : 'false', dataset: { sheet: s.key }, onclick: () => showSheet(s.key) },
      thumbFor(s),
      el('span', { className: 'tc-sheet-title' }, s.title),
      zs ? el('span', { className: 'tc-sheet-size', title: sizeText(zs) }, sizeName(zs) + ' · ' + sizeText(zs).replace(/ \(.*/, '')) : null,
      el('span', { className: 'tc-sheet-meta' },
        el('span', { className: sc ? '' : 'is-unscaled' }, sc ? scaleText(sc, s.info.userUnit, true) : t('x.noscale')),
        app.hl ? el('span', { className: 'tc-sheet-hits' }, h ? t('sheets.hits', { n: h }) : '') : el('span', {}, n ? t('n.marks', { n }) : ''))));
  }
  /** The list again: its rows, its order (by size), and the counts on each row. Switching sheets does not call this (markCurrentSheet). */
  function renderSheets() {
    const list = visibleSheets();
    ui.sheetsEmpty.hidden = ST.sheets.length > 0;
    ui.sheetCount.textContent = ST.sheets.length ? (list.length === ST.sheets.length ? t('sheets.count', { n: ST.sheets.length }) : t('sheets.count.filtered', { n: list.length, total: ST.sheets.length })) : '';
    ST.sheetStats = { mark: new Map(), hl: new Map() };
    if (app.hl) for (const m of model.state.marks) if (m.item === app.hl) ST.sheetStats.hl.set(m.sheet, (ST.sheetStats.hl.get(m.sheet) || 0) + 1);
    for (const m of model.state.marks) ST.sheetStats.mark.set(m.sheet, (ST.sheetStats.mark.get(m.sheet) || 0) + 1);
    const groups = ST.bySize ? sizeGroups() : null;
    const groupOf = groups ? new Map(groups.flatMap((g) => g.keys.map((k) => [k, g]))) : null;
    const ordered = groups ? list.map((s, i) => [s, i]).sort((a, b) => groups.indexOf(groupOf.get(a[0].key)) - groups.indexOf(groupOf.get(b[0].key)) || a[1] - b[1]).map((x) => x[0]) : list;
    const entries = [];
    let lastGroup = null;
    ST.rowOf = new Map();
    for (const s of ordered) {
      if (groups && groupOf.get(s.key) !== lastGroup) { lastGroup = groupOf.get(s.key); entries.push({ id: 'g:' + lastGroup.id, group: lastGroup }); }
      ST.rowOf.set(s.key, entries.length);
      entries.push({ id: s.key, ar: s.info.width / s.info.height });
    }
    thumbQueue.length = 0;
    sheetWin.set(entries);
  }
  /** The open sheet's row marked (two buttons change, not the list) and scrolled into the panel's view. */
  function markCurrentSheet() {
    if (!ST.cur) return;
    for (const b of ui.sheets.querySelectorAll('.tc-sheet[aria-current="true"]')) if (b.dataset.sheet !== ST.cur.key) b.setAttribute('aria-current', 'false');
    if (ST.rowOf.has(ST.cur.key)) sheetWin.reveal(ST.rowOf.get(ST.cur.key));
    for (const b of ui.sheets.querySelectorAll('.tc-sheet')) if (b.dataset.sheet === ST.cur.key) b.setAttribute('aria-current', 'true');
  }

  function scaleText(sc, userUnit = 1, short = false) {
    if (sc.method === 'preset') return sc.label;
    if (sc.method === 'drawing') return sc.label;                  // 0.7 TD.2: read from the drawing (units, a layout's viewport)
    const m = U.matchPreset(sc.ftPerUnit, userUnit);
    if (short) return m ? m.label : U.describeScale(sc.ftPerUnit, userUnit);
    return t(sc.cal?.text ? 'scale.cal.on' : 'scale.cal', { scale: U.describeScale(sc.ftPerUnit, userUnit), text: sc.cal?.text || '' }) + (m ? ' ' + t('scale.matches', { preset: m.label }) : '');
  }

  function renderSheetBar() {
    renderToolbar();
    wsChanged();
    ui.sheetbar.hidden = !ST.cur;
    const handoff = root.querySelector('[data-handoff-pdf]');
    if (handoff) handoff.hidden = !!ST.cur && isCad(ST.cur.file);   // the hand-over to the review app is for PDFs
    ctx.renderLayers();
    ctx.renderGeomBar();
    const geomBtn = root.querySelector('[data-tool="cadgeom"]');
    if (geomBtn) geomBtn.hidden = !(ST.cur && isCad(ST.cur.file));    // 0.7 TD.4
    if (app.tool === 'cadgeom' && !(ST.cur && isCad(ST.cur.file))) setTool('select');
    const cadBtn = root.querySelector('[data-act="cad-count"]');
    if (cadBtn) cadBtn.hidden = !(ST.cur && isCad(ST.cur.file));      // 0.7 TD.3: counting from a drawing is for a drawing's sheet
    ui.preset.disabled = !ST.cur || (isCad(ST.cur.file) && ST.cur.info.cad.kind === 'model');   // a model sheet has no paper: its scale is the drawing's units, or Calibrate
    if (!ST.cur) return;
    ui.sheetName.textContent = ST.cur.title;
    const sc = model.scaleOf(ST.cur.key);
    ui.sheetScale.textContent = sc ? t('sheetbar.scale', { scale: scaleText(sc, ST.cur.info.userUnit) }) : t('sheetbar.noscale');
    ui.sheetScale.classList.toggle('is-unscaled', !sc);
    const zc = sizeOf(ST.cur);
    ui.sheetSize.hidden = !zc;
    ui.sheetSize.textContent = zc ? sizeNameOrient(zc) + ' · ' + sizeText(zc) : '';
    ui.sheetSize.title = zc && zc.custom && zc.near ? t('psize.near', { name: zc.near.name, mm: zc.near.deltaMm }) : '';
    ui.preset.value = sc?.method === 'preset' && sc.preset ? sc.preset : (sc ? (sc.method === 'drawing' ? 'drawing' : 'cal') : '');
  }

  return { pageSizeRows, visibleSheets, thumbQueue, renderSheets, markCurrentSheet, scaleText, renderSheetBar };
}
