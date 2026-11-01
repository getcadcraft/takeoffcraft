/* SPDX-License-Identifier: Apache-2.0 */
/**
 * countall-ui.js — the page side of "Count everything" (0.8 EG.67, session takeoff_PART_2): box a symbol legend, check the symbols
 * read from it, count every one of them on every open sheet in one run, then review the finds (each count is a link to its sheet,
 * a click on a box turns one off) and add them: ONE undo step. The reading and counting are legend.js / countall.js (DOM-free).
 *
 * No trained model, no network: the legend's words are read with pdf.js's text layer and the symbols are found with template
 * matching (match.js, the search Auto count runs), on the person's own sheets. Mounted by takeoffcraft.js: mountCountAll(ctx).
 */

import { el } from './ui-util.js';
import { crop } from './match.js';
import { groupLabels, readLegend, runScale } from './legend.js';
import { runCountAll, decide, planItems, sheetLinks, FLOOR, MAX_PIXELS } from './countall.js';
import { t } from './i18n.js';

const mul = (m, n) => [m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1], m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3], m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]];

/** pdf.js text pieces of a page in the pixels of a viewport: [{ str, x0, y0, x1, y1 }] (upright text only: a turned note is not a legend row). */
export function textPieces(content, vp) {
  const out = [];
  for (const it of content.items || []) {
    if (!it.str || !it.str.trim() || !it.transform) continue;
    const m = mul(vp.transform, it.transform), h = Math.hypot(m[2], m[3]), wid = it.width * vp.scale;
    if (Math.abs(m[1]) > 0.2 * Math.abs(m[0]) || !(h > 0) || !(wid > 0)) continue;
    out.push({ str: it.str, x0: m[4], y0: m[5] - h * 0.9, x1: m[4] + wid, y1: m[5] + h * 0.2 });
  }
  return out;
}

/**
 * ctx: { root, model, app, status(text, ms), sheets(), cur(), rasterize(sheet, w), page(sheet) → pdf.js page, viewport(sheet, w) → viewport,
 *        unit(sheet, wt) → (x, y) → user point, showSheet(key), overlay(), inArea(), setActive(id), color(), ftOf(key),
 *        learn({ tpl, px, ft }, n, item, th), threshold() → the settings' match level, modKey }
 * → { boxed(a, b), draw(ctx2d, S, line), toggleAt(p), close(), api }
 */
export function mountCountAll(ctx) {
  const { root, model, app } = ctx;
  const stage = root.querySelector('[data-stage]');
  const panel = el('div', { className: 'tc-cabar', role: 'region', 'aria-label': t('eg67.tool'), hidden: true, dataset: { countAll: '' } });
  stage?.append(panel);
  let st = null;                    // the run in progress or under review: { legendSheet, w, box, entries, running, hits, th, off:Set, ms, skipped, ... }
  let workers = [], pool = [], nextId = 1;

  const cores = () => Math.max(1, Math.min(4, (navigator.hardwareConcurrency || 2) - 1));
  const stopWorkers = () => { for (const w of workers) w.terminate(); workers = []; pool = []; };
  const asInk = (e) => ({ data: e.tpl.data, w: e.tpl.w, h: e.tpl.h });

  // ---------------------------------------------------------------------------
  // reading the legend

  /** A box (user units a, b) on the sheet shown → { ok, w, box, entries } | { ok: false, why }. */
  async function readBox(sheet, a, b) {
    const T = sheet.info.transform, ds = [a, b, { x: a.x, y: b.y }, { x: b.x, y: a.y }].map((p) => ({ x: T[0] * p.x + T[2] * p.y + T[4], y: T[1] * p.x + T[3] * p.y + T[5] }));
    const bx = { x0: Math.min(...ds.map((p) => p.x)), x1: Math.max(...ds.map((p) => p.x)), y0: Math.min(...ds.map((p) => p.y)), y1: Math.max(...ds.map((p) => p.y)) };
    const cap = Math.sqrt(MAX_PIXELS / (sheet.info.width * sheet.info.height));
    let w = Math.min(3, cap);
    const page = await ctx.page(sheet);
    for (let pass = 0; pass < 2; pass++) {
      const src = await ctx.rasterize(sheet, w);
      const pxBox = { x: Math.floor(bx.x0 * w), y: Math.floor(bx.y0 * w), w: Math.ceil((bx.x1 - bx.x0) * w), h: Math.ceil((bx.y1 - bx.y0) * w) };
      const ink = crop(src, pxBox.x, pxBox.y, pxBox.w, pxBox.h);
      if (ink.w < 20 || ink.h < 20) return { ok: false, why: t('eg67.err.small') };
      const vp = ctx.viewport(page, sheet, w);
      const pieces = textPieces(await page.getTextContent(), vp)
        .filter((p) => (p.x0 + p.x1) / 2 >= pxBox.x && (p.x0 + p.x1) / 2 <= pxBox.x + pxBox.w && (p.y0 + p.y1) / 2 >= pxBox.y && (p.y0 + p.y1) / 2 <= pxBox.y + pxBox.h)
        .map((p) => ({ str: p.str, x0: p.x0 - pxBox.x, x1: p.x1 - pxBox.x, y0: p.y0 - pxBox.y, y1: p.y1 - pxBox.y }));
      const read = readLegend(ink, groupLabels(pieces));
      if (!read.entries.length) return { ok: false, why: t('eg67.err.none') };
      const f = runScale(read.entries.map((e) => e.box));
      const want = Math.min(w * f, cap);
      if (pass === 0 && Math.abs(want / w - 1) > 0.25) { w = want; continue; }      // the smallest symbol is ~18 px at the working scale: read again at it
      const entries = read.entries.map((e, i) => ({ id: 's' + (i + 1), name: e.label, label: e.label, tpl: e.tpl, box: e.box, problem: e.problem, on: !e.problem }));
      return { ok: true, w, box: { x: pxBox.x, y: pxBox.y, w: pxBox.w, h: pxBox.h }, entries, side: read.side };
    }
    return { ok: false, why: t('eg67.err.none') };
  }

  /** The tool's box was dragged (user units on the sheet shown). */
  const boxed = (a, b) => open(ctx.cur(), a, b);
  /** Read the legend in a box (user units) on a sheet and open the review: the drag's path and the assistant's. → { ok, entries } | { ok: false, why } */
  async function open(sheet, a, b) {
    if (!sheet) return { ok: false, why: t('handoff.nopdf') };
    close();
    ctx.status(t('eg67.reading'), 0);
    let r;
    try { r = await readBox(sheet, a, b); } catch (err) { const why = t('eg67.err.failed', { reason: err.message }); ctx.status(why, 12000); return { ok: false, why }; }
    if (!r.ok) { ctx.status(r.why, 9000); return r; }
    st = { legendSheet: sheet.key, w: r.w, box: r.box, entries: r.entries, running: false, hits: [], th: ctx.threshold(), off: new Set(), phase: 'review' };
    ctx.status(t('eg67.read', { n: r.entries.filter((e) => e.on).length }), 0);
    render();
    ctx.overlay();
    return { ok: true, entries: st.entries };
  }

  // ---------------------------------------------------------------------------
  // the run

  function search(img, jobs) {
    return new Promise((resolve, reject) => {
      const go = (wk) => {
        const id = nextId++;
        wk.onmessage = (e) => {
          if (e.data.id !== id) return;
          pool.push(wk);
          if (e.data.type === 'done') resolve(e.data.res); else reject(new Error(e.data.message));
        };
        wk.onerror = (e) => { reject(new Error(e.message || t('ac.stopped'))); };
        wk.postMessage({ id, legendUrl: import.meta.resolve('./legend.js'), img, jobs }, [img.data.buffer]);
      };
      if (pool.length) return go(pool.pop());
      if (workers.length < cores()) { const wk = new Worker(import.meta.resolve('./countall-worker.js'), { type: 'module' }); workers.push(wk); return go(wk); }
      const wait = setInterval(() => { if (pool.length) { clearInterval(wait); go(pool.pop()); } }, 20);
    });
  }

  async function start() {
    if (!st || st.running) return;
    const list = ctx.sheets();
    const run = st;
    run.running = true; run.phase = 'run'; run.progress = 0; run.hits = [];
    const entries = run.entries.map((e) => ({ ...e, tpl: asInk(e) }));
    render();
    try {
      const r = await runCountAll({
        sheets: list.map((s) => ({ key: s.key, width: s.info.width, height: s.info.height, s })), entries, w: run.w, legend: { key: run.legendSheet, box: run.box },
        ftOf: ctx.ftOf, rasterize: (sh, wt) => ctx.rasterize(sh.s, wt), unit: (sh, wt) => ctx.unit(sh.s, wt), search, parallel: cores(),
        onProgress: (f, key) => { if (st !== run) return; run.progress = f; run.at = key; renderProgress(); }, stop: () => st !== run, anyAngle: !!run.anyAngle,
      });
      if (st !== run) return;
      run.hits = r.hits; run.skipped = r.skipped.length; run.ms = r.ms; run.running = false; run.phase = 'results';
    } catch (err) {
      if (st !== run) return;
      run.running = false; run.phase = 'review';
      ctx.status(t('eg67.err.failed', { reason: err.message }), 12000);
    } finally { stopWorkers(); }
    if (st !== run) return;
    decideNow();
    render();
    ctx.overlay();
    ctx.status(t('eg67.done', { n: st.tal.all, sheets: st.tal.sheets.length }), 0);
  }

  function stop() {
    if (!st) return;
    const was = st;
    stopWorkers();
    st = null;
    if (was.running) ctx.status(t('ac.canceled'));
    render(); ctx.overlay();
  }

  function decideNow() {
    const d = decide(st.hits, st.th);
    st.kept = d.kept; st.mixed = d.mixed;
    st.live = d.kept.filter((h) => !st.off.has(h));
    const live = { total: {}, bySheet: {}, sheets: new Set(), all: 0 };
    for (const h of st.live) { live.total[h.entry] = (live.total[h.entry] || 0) + 1; (live.bySheet[h.entry] ||= {})[h.sheet] = (live.bySheet[h.entry][h.sheet] || 0) + 1; live.sheets.add(h.sheet); live.all++; }
    st.tal = { ...live, sheets: [...live.sheets] };
  }

  // ---------------------------------------------------------------------------
  // adding

  /** The marks a click on Add would make: [{ entry, name, item, marks, already }] (nothing changes). */
  const planNow = () => planItems(st.entries, st.live, model.state.items, model.state.marks.filter((m) => m.kind === 'count'), 1);

  function accept(label = null) {
    if (!st || st.phase !== 'results') return null;
    const s = st;
    const plan = planItems(s.entries, s.live, model.state.items, model.state.marks.filter((m) => m.kind === 'count'), 1);
    const n = plan.reduce((a, p) => a + p.marks.length, 0);
    if (!plan.length) { close(); return null; }
    const groups = plan.map((p) => {
      const e = s.entries.find((x) => x.id === p.entry);
      return p.item ? { item: p.item, list: p.marks.map((m) => ({ ...m, ...ctx.inArea() })) } : { create: { name: p.name }, list: p.marks.map((m) => ({ ...m, ...ctx.inArea() })), e };
    });
    let out;
    try { out = model.addCountedMany(groups.map(({ e, ...g }) => g), label || t('eg67.undo', { n, items: plan.length })); } catch (err) { ctx.status(err.message, 12000); return null; }
    out.forEach((o, i) => {                        // what the person confirmed teaches Auto count's local memory (SU.811)
      const e = s.entries.find((x) => x.id === plan[i].entry), it = model.item(o.item);
      if (e && it && o.ids.length) ctx.learn({ tpl: e.tpl, px: s.w, ft: ctx.ftOf(s.legendSheet) }, o.ids.length, it, s.th);
    });
    close();
    if (out[0]) ctx.setActive(out[0].item);
    ctx.status(t('eg67.added', { n, items: plan.length, mod: ctx.modKey }), 9000);
    return { n, items: plan.length };
  }

  function close() {
    if (st) { stopWorkers(); st = null; }
    render();
    ctx.overlay();
  }

  // ---------------------------------------------------------------------------
  // the panel

  function thumb(e) {
    const c = el('canvas', { className: 'tc-learn-thumb', width: e.tpl.w, height: e.tpl.h, 'aria-hidden': 'true' });
    const ink = getComputedStyle(root).getPropertyValue('--ink').trim() || '#17202B';
    const m = /^#([0-9a-f]{6})$/i.exec(ink);
    const [r, g, b] = m ? [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16)) : [23, 32, 43];
    const im = c.getContext('2d').createImageData(e.tpl.w, e.tpl.h);
    for (let i = 0; i < e.tpl.data.length; i++) { im.data[i * 4] = r; im.data[i * 4 + 1] = g; im.data[i * 4 + 2] = b; im.data[i * 4 + 3] = Math.round(Math.min(1, e.tpl.data[i]) * 255); }
    c.getContext('2d').putImageData(im, 0, 0);
    return c;
  }
  const small = (label, on, data = {}, disabled = false) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: on, dataset: data, disabled }, label);

  function renderProgress() {
    const p = panel.querySelector('[data-ca-progress]');
    if (p) p.value = st?.progress || 0;
    const tx = panel.querySelector('[data-ca-where]');
    if (tx && st) tx.textContent = t('eg67.running', { i: Math.min(ctx.sheets().length, Math.round((st.progress || 0) * ctx.sheets().length) + 1), n: ctx.sheets().length });
  }

  function render() {
    panel.hidden = !st;
    app.ca = st;
    if (!st) { panel.replaceChildren(); return; }
    const order = ctx.sheets().map((s) => s.key);
    const titleOf = (k) => ctx.sheets().find((s) => s.key === k)?.title || k;
    if (st.phase === 'review' || st.phase === 'run') {
      const n = st.entries.filter((e) => e.on && !e.problem).length;
      panel.replaceChildren(
        el('h2', { className: 'tc-learn-h3' }, t('eg67.h')),
        el('p', { className: 'tc-learn-intro' }, t('eg67.lead', { sheets: t('ac.sheets', { n: order.length }) })),
        el('ul', { className: 'tc-learn-list' }, st.entries.map((e) => el('li', { className: 'tc-learn-row', dataset: { caEntry: e.id } },
          el('input', { type: 'checkbox', checked: !!e.on, disabled: !!e.problem || st.running, 'aria-label': t('eg67.use'), onchange: (ev) => { e.on = ev.target.checked; render(); } }),
          thumb(e),
          el('div', { className: 'tc-learn-main' },
            el('input', { className: 'tc-input', type: 'text', maxLength: 80, value: e.name, disabled: !!e.problem || st.running, 'aria-label': t('eg67.name'), onchange: (ev) => { e.name = ev.target.value.trim().slice(0, 80); } }),
            e.problem ? el('span', { className: 'tc-learn-sub' }, t('eg67.problem', { why: e.problem })) : null)))),
        el('label', { className: 'tc-learn-field' }, el('input', { type: 'checkbox', checked: !!st.anyAngle, disabled: st.running, dataset: { caAny: '' }, onchange: (ev) => { st.anyAngle = ev.target.checked; render(); } }), ' ' + t('eg67.any')),
        st.anyAngle ? el('p', { className: 'tc-learn-sub' }, t('eg67.any.hint')) : null,
        st.running
          ? el('div', { className: 'tc-learn-top' }, el('progress', { max: 1, value: st.progress || 0, dataset: { caProgress: '' } }), el('span', { className: 'tc-learn-sub', dataset: { caWhere: '' } }, ''), small(t('btn.cancel'), () => stop(), { caStop: '' }))
          : el('div', { className: 'tc-learn-top' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { caStart: '' }, disabled: !n || !order.length, onclick: () => start() }, t('eg67.start', { n: t('ac.sheets', { n: order.length }) })), small(t('btn.cancel'), () => close(), { caCancel: '' })));
      if (st.running) renderProgress();
      return;
    }
    const nLive = st.tal.all;
    panel.replaceChildren(
      el('h2', { className: 'tc-learn-h3' }, t('eg67.h')),
      el('p', { className: 'tc-learn-intro', dataset: { caSummary: '' } }, t('eg67.found', { n: nLive, sheets: t('ac.sheets', { n: st.tal.sheets.length }), s: Math.max(0.1, Math.round(st.ms / 100) / 10) }) + (st.skipped ? ' ' + t('eg67.skipped', { n: st.skipped }) : '')),
      el('label', { className: 'tc-learn-field' }, t('eg67.level', { pct: Math.round(st.th * 100) }),
        el('input', { type: 'range', min: String(FLOOR), max: '1', step: '0.01', value: String(st.th), dataset: { caLevel: '' }, oninput: (ev) => { st.th = Number(ev.target.value); decideNow(); render(); ctx.overlay(); } })),
      st.mixed.size ? el('p', { className: 'tc-learn-note', role: 'note' }, [...st.mixed].map(([k, c]) => t('eg67.mixed', { a: nameOf(k.split('|')[0]), b: nameOf(k.split('|')[1]), n: c })).join(' ')) : null,
      el('ul', { className: 'tc-learn-list' }, st.entries.filter((e) => e.on && !e.problem).map((e) => el('li', { className: 'tc-learn-row', dataset: { caResult: e.id } },
        thumb(e),
        el('div', { className: 'tc-learn-main' },
          el('span', { className: 'tc-learn-name' }, e.name || e.id, ' ', el('strong', { dataset: { caTotal: e.id } }, String(st.tal.total[e.id] || 0))),
          el('span', { className: 'tc-learn-sub' }, sheetLinks(e.id, st.tal, order, titleOf).slice(0, 40).map((l) => el('button', { type: 'button', className: 'btn-link-cc tc-ca-link', dataset: { caSheet: l.sheet }, title: t('eg67.go', { sheet: l.title }),
            onclick: () => { ctx.showSheet(l.sheet); } }, t('eg67.sheetn', { title: l.title, n: l.n })))))))),
      el('div', { className: 'tc-learn-top' },
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { caAdd: '' }, disabled: !nLive, onclick: () => accept() }, t('eg67.add', { n: nLive })),
        small(t('ac.discard'), () => { close(); ctx.status(t('ac.discarded')); }, { caDiscard: '' })));
  }
  const nameOf = (id) => st?.entries.find((e) => e.id === id)?.name || id;

  // ---------------------------------------------------------------------------
  // on the sheet

  /** Boxes of the finds on the sheet shown (like Auto count's review). */
  function draw(c, S, line) {
    if (!st || st.phase !== 'results') return;
    const cur = ctx.cur();
    const colorOf = (id) => { const e = st.entries.find((x) => x.id === id); return model.state.items.find((i) => i.name.toLowerCase() === String(e?.name).toLowerCase())?.color || ctx.color(); };
    for (const h of st.kept) {
      if (h.sheet !== cur?.key) continue;
      const corners = [[h.x, h.y], [h.x + h.w, h.y], [h.x + h.w, h.y + h.h], [h.x, h.y + h.h]].map(([x, y]) => ({ x, y }));
      line(corners, true);
      if (st.off.has(h)) {
        c.strokeStyle = ctx.color(); c.globalAlpha = 0.5; c.lineWidth = 1.5; c.setLineDash([4, 3]); c.stroke(); c.setLineDash([]); c.globalAlpha = 1;
      } else {
        const col = colorOf(h.entry);
        c.fillStyle = col; c.globalAlpha = 0.15; c.fill(); c.globalAlpha = 1; c.strokeStyle = col; c.lineWidth = 2; c.stroke();
      }
    }
  }
  /** A click on a find turns it off (or on again). */
  function toggleAt(p) {
    if (!st || st.phase !== 'results') return false;
    const cur = ctx.cur();
    const h = st.kept.find((k) => k.sheet === cur?.key && p.x >= k.x && p.x <= k.x + k.w && p.y >= k.y && p.y <= k.y + k.h);
    if (!h) return false;
    if (st.off.has(h)) st.off.delete(h); else st.off.add(h);
    decideNow(); render(); ctx.overlay();
    return true;
  }

  model.on((why) => { if (why === 'load' && st) close(); });

  /** What the assistant's tools drive: the same panel, the same run, the same Add (rule 34). */
  const drive = {
    open,
    choose(list = []) {          // [{ id, name?, on? }]: rename or untick symbols read from the legend
      if (!st || st.phase === 'run') return;
      for (const c of list) { const e = st.entries.find((x) => x.id === c.id); if (!e || e.problem) continue; if (typeof c.name === 'string' && c.name.trim()) e.name = c.name.trim().slice(0, 80); if (typeof c.on === 'boolean') e.on = c.on; }
      render();
    },
    start: (o = {}) => { if (!st || st.running) return false; if (typeof o.anyAngle === 'boolean') st.anyAngle = o.anyAngle; if (st.phase === 'results') { st.phase = 'review'; } start(); return true; },
    level(v) { if (st && st.phase === 'results') { st.th = v; decideNow(); render(); ctx.overlay(); } else if (st) st.th = v; },
    status: () => (st ? { phase: st.phase, progress: st.progress || 0, sheets: ctx.sheets().length } : null),
    summary() {
      if (!st || st.phase !== 'results') return null;
      const order = ctx.sheets().map((s) => s.key), title = (k) => ctx.sheets().find((s) => s.key === k)?.title || k;
      return {
        level: st.th, total: st.tal.all, sheetsWithCounts: st.tal.sheets.length, seconds: Math.round(st.ms / 100) / 10, skippedLarge: st.skipped || 0,
        symbols: st.entries.filter((e) => e.on && !e.problem).map((e) => ({ id: e.id, name: e.name, total: st.tal.total[e.id] || 0, sheets: sheetLinks(e.id, st.tal, order, title).map((l) => ({ sheet: l.title, count: l.n })) })),
        lookAlike: [...st.mixed].map(([k, n]) => ({ a: nameOf(k.split('|')[0]), b: nameOf(k.split('|')[1]), spots: n })),
      };
    },
    plan: () => (st && st.phase === 'results' ? planNow().map((p) => ({ name: p.name, newItem: !p.item, marks: p.marks.length, alreadyMarked: p.already })) : null),
    accept,
  };
  const api = {
    state: () => st && ({ phase: st.phase, entries: st.entries.map((e) => ({ id: e.id, name: e.name, on: e.on, problem: e.problem })), threshold: st.th, total: st.tal?.total || null, all: st.tal?.all ?? null, ms: st.ms ?? null }),
    readBox, start, accept, close, setLevel: (v) => { if (st) { st.th = v; decideNow(); render(); ctx.overlay(); } },
  };
  return { boxed, draw, toggleAt, close, api, drive, active: () => !!st };
}
