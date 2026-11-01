/* SPDX-License-Identifier: Apache-2.0 */
/**
 * learn-ui.js — the page side of "what TakeoffCraft learned" (0.8 SU.811, session sx-learn): the toolbar's Learned button
 * and its dialog, the offer bar on a page where something learned can be used, finding a learned symbol (through the page's
 * own Auto count review: the person still accepts every mark), "Same as last job…", saving and adding condition sets,
 * assembly suggestions and "Repeat on every page". The data and the edits are learn.js / learn-apply.js (DOM-free).
 *
 * No trained model, no network: everything is classic template matching (match.js) on the person's own sheets, and what
 * it keeps is in the takeoff's project file (key `learn`). Mounted by takeoffcraft.js: mountLearn(ctx) — see its fields.
 */

import { el, icon, ask } from "./ui-util.js";
import { readProject, kindsOf, TYPE_LABELS, normalItem, LIMITS } from "./model.js";
import { copyMarks, readClip } from "./clipboard.js";
import * as G from "./geom.js";
import { emptyLearn, learnedCount, unpackTemplate, learnSymbol, symbolUsed, searchScales, saveSet, rankAssemblies, forget, forgetAll, mergeLearn, setItem, setPlan, saveRepeat } from "./learn.js";
import { repeatPlan, repeatOnSheets, patternClip, applySet, applyAssembly, changeLearn } from "./learn-apply.js";
import { t } from "./i18n.js";

const sameName = (a, b) => String(a).trim().toLowerCase() === String(b).trim().toLowerCase();
const day = (iso) => (iso ? iso.slice(0, 10) : '');

/**
 * ctx: { root, model, status(text, ms), app (the page's state: ac = the Auto count review), sheets(), cur(), rasterize(sheet, w),
 *        searchInWorker(img, tpl, onProgress), stopWorker(), renderAcBar(), discardAutoCount(), overlay(), setActive(id),
 *        selIds(), inArea(), host, projectTypes }
 * → { open, acceptLearned(ac, on), confirmed(ac, n, item), sheetShown(key), api }
 */
export function mountLearn(ctx) {
  const { root, model, app } = ctx;
  const L = () => model.state.learn;
  // every takeoff in the app carries a learn section (not an undo step, like opening a PDF): a new one, or one opened from a file
  const ensure = () => { if (!model.state.learn) model.state.learn = emptyLearn(); };
  ensure();
  model.on((why) => { if (why === 'load') { ensure(); offered.clear(); } renderBadge(); if (dlg?.open) renderDialog(); });

  const btn = root.querySelector('[data-act="learned"]');
  btn?.addEventListener('click', () => open());
  const offered = new Set();            // pages the offer bar was shown on (this session)
  const stage = root.querySelector('[data-stage]');
  const bar = el('div', { className: 'tc-learnbar', role: 'region', 'aria-label': t('sx.su811.bar.aria'), hidden: true });
  stage?.append(bar);

  function renderBadge() {
    if (!btn) return;
    const n = learnedCount(L());
    btn.dataset.learned = String(n);
    btn.setAttribute('title', t('sx.su811.tool.title') + (n ? ' ' + t('sx.su811.tool.count', { n }) : ''));
  }
  renderBadge();

  // ---------------------------------------------------------------------------
  // Learning from an accepted automatic count (takeoffcraft.js acceptAutoCount calls these)

  /** The person accepted a search the page started from a box: keep its symbol. */
  function confirmed(ac, n, it) {
    const l = L();
    if (!ac?.learn || !n || !it || !l || l.off) return;
    const r = learnSymbol(l, { item: { name: it.name, color: it.color, unit: it.unit }, tpl: ac.learn.tpl, px: ac.learn.px, ft: ac.learn.ft, th: ac.threshold, n });
    if (!r) return;
    const s = root.querySelector('[data-status]');
    ctx.status((s?.textContent ? s.textContent + ' ' : '') + t(r.merged ? 'sx.su811.sym.again' : 'sx.su811.sym.learned', { item: it.name }), 9000);
    renderBadge();
  }
  /** A search for a learned symbol was accepted: add its marks (and its item, when this takeoff has none), ONE undo step. */
  function acceptLearned(ac, on) {
    if (!ac?.learned) return false;
    app.ac = null;
    ctx.renderAcBar();
    if (!on.length) { ctx.overlay(); return true; }
    const sym = L()?.symbols.find((s) => s.id === ac.learned.id);
    const list = on.map((c) => ({ sheet: c.sheet, pts: [c.center], ...ctx.inArea() }));
    const name = ac.learned.create?.name || model.item(ac.item)?.name || '';
    const label = t('undo.ac', { n: on.length, item: name });
    let itemId = ac.item;
    try {
      if (ac.learned.create && !model.item(ac.item)) itemId = model.addCounted({ create: { name, type: 'count', color: ac.learned.create.color, unit: ac.learned.create.unit }, list, label }).item;
      else model.addMarks(itemId, list, label, 'count');
    } catch (err) { ctx.status(err.message, 12000); return true; }
    if (sym) symbolUsed(L(), sym.id, on.length, ac.threshold);
    ctx.setActive(itemId);
    ctx.status(t('sx.su811.find.added', { n: on.length, item: name }), 9000);
    renderBadge();
    return true;
  }

  // ---------------------------------------------------------------------------
  // Finding a learned symbol: the same search and the same review as Auto count

  async function find(sym, all) {
    if (app.ac?.running) return;
    ctx.discardAutoCount();
    const tpl = unpackTemplate(sym.tpl);
    const targets = all ? ctx.sheets().slice() : [ctx.cur()].filter(Boolean);
    if (!tpl || !targets.length) { ctx.status(t('sx.su811.find.nosheet')); return; }
    const it = model.state.items.find((i) => kindsOf(i).includes('count') && sameName(i.name, sym.item.name)) || null;
    const ac = app.ac = { item: it?.id || null, running: true, all, threshold: sym.th, cands: [], skipped: '', learned: { id: sym.id, create: it ? null : sym.item } };
    ctx.renderAcBar();
    const prog = root.querySelector('[data-ac-progress]'), runText = root.querySelector('[data-ac-run-text]');
    if (prog) prog.value = 0;
    ctx.overlay();
    let big = 0;
    for (let i = 0; i < targets.length; i++) {
      const sh = targets[i];
      if (runText) runText.textContent = t('sx.su811.find.running', { item: sym.item.name, i: i + 1, n: targets.length });
      const ws = searchScales(sym, model.scaleOf(sh.key)?.ftPerUnit);
      for (let j = 0; j < ws.length; j++) {
        const wt = ws[j];
        if (sh.info.width * sh.info.height * wt * wt > 40e6) { big++; continue; }
        const img = await ctx.rasterize(sh, wt);
        if (app.ac !== ac) return;
        const res = await ctx.searchInWorker(img, { data: tpl.data.slice(), w: tpl.w, h: tpl.h }, (f) => { if (prog) prog.value = (i + (j + f) / ws.length) / targets.length; });
        if (app.ac !== ac || res === null) return;
        if (res.error) { app.ac = null; ctx.renderAcBar(); ctx.status(t('ac.failed', { reason: res.error }), 12000); return; }
        const inv = G.invert(sh.info.transform);
        const toUser = (x, y) => G.apply(inv, { x: x / wt, y: y / wt });
        const own = it ? model.state.marks.filter((m) => m.item === it.id && m.sheet === sh.key) : [];
        for (const c of res) {
          const corners = [toUser(c.x, c.y), toUser(c.x + c.w, c.y), toUser(c.x + c.w, c.y + c.h), toUser(c.x, c.y + c.h)];
          const dup = own.some((m) => G.pointInPolygon(m.pts[0], corners));
          const bx = Math.min(...corners.map((q) => q.x)), by = Math.min(...corners.map((q) => q.y));
          ac.cands.push({ ...c, x: bx, y: by, w: Math.max(...corners.map((q) => q.x)) - bx, h: Math.max(...corners.map((q) => q.y)) - by, sheet: sh.key, center: toUser(c.x + c.w / 2, c.y + c.h / 2), corners, dup, rejected: dup });
        }
      }
    }
    ctx.stopWorker();
    ac.running = false;
    if (big) ac.skipped = t('ac.skipped', { n: big });
    ctx.renderAcBar();
    ctx.overlay();
    ctx.status(ac.cands.length ? t('sx.su811.find.done', { item: sym.item.name }) : t('sx.su811.find.none', { item: sym.item.name }), 0);
  }

  // ---------------------------------------------------------------------------
  // Repeat on every page

  const target = (s) => ({ key: s.key, view: s.info.view, userUnit: s.info.userUnit, ftPerUnit: model.scaleOf(s.key)?.ftPerUnit || null, label: model.scaleOf(s.key)?.label || '' });

  async function repeatSelected() {
    const ids = ctx.selIds();
    if (!ids.length) { ctx.status(t('sx.su811.rep.nosel')); return; }
    const src = ctx.sheets().find((s) => s.key === model.mark(ids[0])?.sheet);
    if (!src) return;
    const wire = copyMarks(model.state, ids, { view: src.info.view, userUnit: src.info.userUnit });
    const r = wire ? readClip(JSON.parse(JSON.stringify(wire))) : null;
    if (!r?.ok) { ctx.status(r?.error || t('sx.su811.rep.nosel')); return; }
    const input = el('input', { className: 'tc-input', type: 'text', maxLength: 200, value: wire.items.map((i) => i.name).join(', ').slice(0, 80), 'aria-label': t('sx.su811.rep.name') });
    const plan = repeatPlan(r.clip, ctx.sheets().filter((s) => s.key !== src.key).map(target), model.state);
    const skipped = plan.skipped.length ? t('sx.su811.rep.skipped', { n: plan.skipped.length, why: [...new Set(plan.skipped.map((x) => x.why))].join(' ') }) : '';
    const choice = await ask(root, {
      title: t('sx.su811.rep.h'),
      text: (plan.sheets.length ? t('sx.su811.rep.text', { n: r.clip.marks.length, pages: plan.sheets.length }) : t('sx.su811.rep.nopages')) + (skipped ? ' ' + skipped : ''),
      body: el('label', { className: 'tc-learn-field' }, el('span', {}, t('sx.su811.rep.name')), input),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', plan.sheets.length ? t('sx.su811.rep.go', { pages: plan.sheets.length }) : t('sx.su811.rep.keep'), 'btn-plot']],
      onOk: () => (input.value.trim() ? null : t('sx.su811.name.empty')), focus: 'input',
    });
    if (choice !== 'ok') return;
    const name = input.value.trim();
    if (!plan.sheets.length) {
      changeLearn(model, t('sx.su811.rep.saved.undo'), (l) => (l.off ? false : saveRepeatOnly(l, name, wire)));
      ctx.status(t('sx.su811.rep.saved', { name }), 9000);
      return;
    }
    try {
      const out = repeatOnSheets(model, r.clip, plan.sheets, { wire: L()?.off ? null : wire, learn: L()?.off ? null : { name } });
      if (out) ctx.status(t('sx.su811.rep.done', { n: out.marks, pages: out.sheets }), 9000);
    } catch (err) { ctx.status(err.message, 12000); }
  }
  /** A pattern no other page fits yet: kept (no use counted) so it can be repeated on pages opened later. */
  function saveRepeatOnly(l, name, wire) {
    const before = l.repeats.find((x) => sameName(x.name, name))?.uses;
    if (!saveRepeat(l, name, wire)) return false;
    const r = l.repeats.find((x) => sameName(x.name, name));
    if (r) r.uses = before ?? 0;
  }

  function repeatLearned(rep, keys = null) {
    const c = patternClip(rep);
    if (!c.ok) { ctx.status(c.error, 9000); return; }
    const list = (keys ? ctx.sheets().filter((s) => keys.includes(s.key)) : ctx.sheets()).map(target);
    const plan = repeatPlan(c.clip, list, model.state);
    if (!plan.sheets.length) { ctx.status(t('sx.su811.rep.none', { name: rep.name }), 9000); return; }
    try {
      const out = repeatOnSheets(model, c.clip, plan.sheets, { learn: { id: rep.id } });
      if (out) ctx.status(t('sx.su811.rep.done', { n: out.marks, pages: out.sheets }), 9000);
    } catch (err) { ctx.status(err.message, 12000); }
  }

  // ---------------------------------------------------------------------------
  // Same as last job: bring in another takeoff's conditions and what it learned

  async function sameAsLastJob() {
    const list = await ctx.host.openFile({ types: ctx.projectTypes });
    if (!list?.length) return;
    let json;
    try { const f = await list[0].file(); json = JSON.parse(await f.text()); } catch { ctx.status(t('open.notjson', { file: list[0].name }), 10000); return; }
    const r = readProject(json);
    if (!r.ok) { ctx.status(r.error, 10000); return; }
    const other = r.state, ol = other.learn;
    const plan = setPlan({ items: other.items.map(setItem) }, model.state.items);
    const cItems = el('input', { type: 'checkbox', checked: plan.add.length > 0, disabled: !plan.add.length });
    const cLearn = el('input', { type: 'checkbox', checked: learnedCount(ol) > 0, disabled: !learnedCount(ol) });
    const choice = await ask(root, {
      title: t('sx.su811.last.h'),
      text: t('sx.su811.last.text', { job: other.name, file: list[0].name }),
      body: el('div', { className: 'tc-learn-checks' },
        el('label', { className: 'tc-check' }, cItems, ' ', plan.add.length ? t('sx.su811.last.items', { n: plan.add.length, have: plan.have.length }) : t('sx.su811.last.items.none')),
        el('label', { className: 'tc-check' }, cLearn, ' ', learnedCount(ol) ? t('sx.su811.last.learned', { symbols: ol.symbols.length, sets: ol.sets.length, asm: ol.asm.length, repeats: ol.repeats.length }) : t('sx.su811.last.learned.none'))),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('sx.su811.last.go'), 'btn-plot']],
    });
    if (choice !== 'ok' || (!cItems.checked && !cLearn.checked)) return;
    const setName = t('sx.su811.last.setname', { job: other.name });
    const out = changeLearn(model, t('sx.su811.last.undo', { job: other.name }), (l) => {
      let added = 0, merged = null;
      if (cLearn.checked && ol) merged = mergeLearn(l, ol);
      if (other.items.length) saveSet(l, setName, other.items);                   // its conditions stay reusable as a set
      if (cItems.checked) added = addItemsInStep(plan.add);
      return { added, merged };
    });
    if (!out) return;
    const m = out.merged || { symbols: 0, sets: 0, asm: 0, repeats: 0 };
    ctx.status(t('sx.su811.last.done', { items: out.added, symbols: m.symbols, asm: m.asm, repeats: m.repeats, job: other.name }), 12000);
    offered.clear();
    const c = ctx.cur();
    if (c) sheetShown(c.key);
    renderDialog();
  }
  /** Items pushed inside the running change (one undo step with the learn changes). */
  function addItemsInStep(list) {
    const s = model.state;
    let n = 0;
    for (const f of list) {
      if (s.items.length >= LIMITS.items) break;
      const id = model.nextId('i');
      s.items.push({ ...normalize(f, id) });
      n++;
    }
    return n;
  }
  const normalize = (f, id) => normalItem({ ...JSON.parse(JSON.stringify(f)), id, components: (f.components || []).map((c) => ({ ...c, id: model.nextId('c') })) });

  // ---------------------------------------------------------------------------
  // The offer bar: on a page where something learned can be used

  function sheetShown(key) {
    const l = L();
    bar.hidden = true;
    bar.replaceChildren();
    if (!l || app.ac || offered.has(key) || !learnedCount(l)) return;
    const s = ctx.sheets().find((x) => x.key === key);
    if (!s) return;
    const counted = (name) => model.state.marks.some((m) => m.sheet === key && m.kind === 'count' && sameName(model.item(m.item)?.name || '', name));
    const syms = l.symbols.filter((sy) => !counted(sy.item.name)).sort((a, b) => b.found - a.found).slice(0, 3);
    const reps = l.repeats.filter((r) => { const c = patternClip(r); return c.ok && repeatPlan(c.clip, [target(s)], model.state).sheets.length; }).slice(0, 2);
    if (!syms.length && !reps.length) return;
    const done = () => { offered.add(key); bar.hidden = true; };
    bar.append(el('div', { className: 'tc-acbar-row' },
      el('span', { className: 'tc-ac-summary' }, icon('lightbulb'), ' ', t('sx.su811.bar.text')),
      ...syms.map((sy) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { learnFind: sy.id }, onclick: () => { done(); find(sy, false); } }, t('sx.su811.bar.find', { item: sy.item.name }))),
      ...reps.map((r) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { learnRepeat: r.id }, onclick: () => { done(); repeatLearned(r, [key]); } }, t('sx.su811.bar.repeat', { name: r.name }))),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { learnLater: '' }, onclick: done }, t('sx.su811.bar.later'))));
    bar.hidden = false;
  }

  // ---------------------------------------------------------------------------
  // The "What it learned" dialog

  let dlg = null, asmQ = '';
  function open() {
    if (!dlg) {
      dlg = el('dialog', { className: 'tc-dialog tc-learn', 'aria-labelledby': 'tc-learn-h', dataset: { learnDialog: '' } });
      dlg.addEventListener('close', () => { dlg.remove(); });
    }
    renderDialog();
    if (!dlg.isConnected) root.append(dlg);
    if (!dlg.open) dlg.showModal();
  }

  function thumb(sym) {
    const tpl = unpackTemplate(sym.tpl);
    const c = el('canvas', { className: 'tc-learn-thumb', width: tpl?.w || 1, height: tpl?.h || 1, 'aria-hidden': 'true' });
    if (!tpl) return c;
    const ink = getComputedStyle(root).getPropertyValue('--ink').trim() || '#17202B';
    const m = /^#([0-9a-f]{6})$/i.exec(ink);
    const [r, g, b] = m ? [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16)) : [23, 32, 43];
    const im = c.getContext('2d').createImageData(tpl.w, tpl.h);
    for (let i = 0; i < tpl.data.length; i++) { im.data[i * 4] = r; im.data[i * 4 + 1] = g; im.data[i * 4 + 2] = b; im.data[i * 4 + 3] = Math.round(tpl.data[i] * 255); }
    c.getContext('2d').putImageData(im, 0, 0);
    return c;
  }
  const del = (kind, id, name) => el('button', { type: 'button', className: 'tc-iconbtn', title: t('sx.su811.del', { name }), 'aria-label': t('sx.su811.del', { name }), dataset: { learnDel: kind + ':' + id },
    onclick: () => { changeLearn(model, t('sx.su811.del.undo', { name }), (l) => (forget(l, kind, id) ? undefined : false)); ctx.status(t('sx.su811.del.done', { name })); } }, icon('trash'));
  const section = (key, title, intro, rows, empty, extra = null) => el('section', { className: 'tc-learn-sec', dataset: { learnSec: key } },
    el('h3', { className: 'tc-learn-h3' }, title),
    intro ? el('p', { className: 'tc-learn-intro' }, intro) : null,
    extra,
    rows.length ? el('ul', { className: 'tc-learn-list' }, rows) : el('p', { className: 'tc-learn-empty' }, empty));
  const row = (main, sub, ...actions) => el('li', { className: 'tc-learn-row' }, el('div', { className: 'tc-learn-main' }, el('span', { className: 'tc-learn-name' }, main), sub ? el('span', { className: 'tc-learn-sub' }, sub) : null), el('div', { className: 'tc-learn-acts' }, actions));
  const small = (label, on, data = {}, disabled = false) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: on, dataset: data, disabled }, label);

  function renderDialog() {
    if (!dlg) return;
    const l = L() || emptyLearn();
    const hasSheet = !!ctx.cur(), anySheets = ctx.sheets().length > 0;
    const off = el('input', { type: 'checkbox', checked: !l.off, dataset: { learnOn: '' } });
    off.addEventListener('change', () => { changeLearn(model, t(off.checked ? 'sx.su811.on.undo' : 'sx.su811.off.undo'), (x) => { if (off.checked) delete x.off; else x.off = true; }); });
    const symRows = l.symbols.map((s) => el('li', { className: 'tc-learn-row', dataset: { learnSym: s.id } },
      thumb(s),
      el('div', { className: 'tc-learn-main' }, el('span', { className: 'tc-learn-name' }, s.item.name), el('span', { className: 'tc-learn-sub' }, t('sx.su811.sym.sub', { n: s.found, th: Math.round(s.th * 100), day: day(s.last) }))),
      el('div', { className: 'tc-learn-acts' },
        small(t('sx.su811.sym.here'), () => { dlg.close(); find(s, false); }, { learnFindHere: s.id }, !hasSheet || !!app.ac?.running),
        small(t('sx.su811.sym.all'), () => { dlg.close(); find(s, true); }, { learnFindAll: s.id }, !anySheets || !!app.ac?.running),
        del('symbols', s.id, s.item.name))));
    const setRows = l.sets.map((s) => {
      const p = setPlan(s, model.state.items);
      return row(s.name, t('sx.su811.set.sub', { n: s.items.length, missing: p.add.length, day: day(s.at) }),
        small(t('sx.su811.set.add', { n: p.add.length }), () => { const r = applySet(model, s); ctx.status(t('sx.su811.set.done', { n: r.ids.length, name: s.name }), 9000); if (r.ids[0]) ctx.setActive(r.ids[0]); }, { learnSetAdd: s.id }, !p.add.length),
        del('sets', s.id, s.name));
    });
    const ranked = rankAssemblies(l, { q: asmQ, state: model.state });
    const asmRows = ranked.map((a) => row(a.name, t('sx.su811.asm.sub', { type: TYPE_LABELS[a.type] || a.type, uses: a.uses, parts: a.item.components.length }),
      small(t('sx.su811.asm.add'), () => { const id = applyAssembly(model, a); if (id) { ctx.setActive(id); ctx.status(t('sx.su811.asm.done', { name: a.name }), 9000); } }, { learnAsmAdd: a.type + ':' + a.name }),
      del('asm', a.type + ':' + a.name.toLowerCase(), a.name)));
    const q = el('input', { className: 'tc-input', type: 'search', value: asmQ, placeholder: t('sx.su811.asm.q'), 'aria-label': t('sx.su811.asm.q') });
    q.addEventListener('input', () => { asmQ = q.value; const pos = q.selectionStart; renderDialog(); const nq = dlg.querySelector('[data-learn-sec="asm"] input'); nq?.focus(); try { nq?.setSelectionRange(pos, pos); } catch { /* fine */ } });
    const repRows = l.repeats.map((r) => row(r.name, t('sx.su811.rep.sub', { n: r.clip.marks.length, uses: r.uses }),
      small(t('sx.su811.rep.every'), () => { dlg.close(); repeatLearned(r); }, { learnRepeatAll: r.id }, !anySheets),
      del('repeats', r.id, r.name)));
    const sel = ctx.selIds().length;
    dlg.replaceChildren(
      el('div', { className: 'tc-dialog-head' }, el('h2', { className: 'tc-h', id: 'tc-learn-h' }, t('sx.su811.h'))),
      el('div', { className: 'tc-learn-body' },
        el('p', { className: 'tc-learn-lead' }, t('sx.su811.lead')),
        el('div', { className: 'tc-learn-top' },
          small(t('sx.su811.last'), () => sameAsLastJob(), { learnLast: '' }),
          el('label', { className: 'tc-check' }, off, ' ', t('sx.su811.on'))),
        l.off ? el('p', { className: 'tc-learn-note', role: 'note' }, t('sx.su811.off.note')) : null,
        section('symbols', t('sx.su811.sym.h'), t('sx.su811.sym.intro'), symRows, t('sx.su811.sym.empty')),
        section('sets', t('sx.su811.set.h'), t('sx.su811.set.intro'), setRows, t('sx.su811.set.empty'),
          el('div', { className: 'tc-learn-top' }, small(t('sx.su811.set.save'), () => saveSetAsk(), { learnSetSave: '' }, !model.state.items.length || !!l.off))),
        section('asm', t('sx.su811.asm.h'), t('sx.su811.asm.intro'), asmRows, l.asm.length && !ranked.length ? t('sx.su811.asm.allhere') : t('sx.su811.asm.empty'), l.asm.length ? el('div', { className: 'tc-learn-top' }, q) : null),
        section('repeats', t('sx.su811.rep.h2'), t('sx.su811.rep.intro'), repRows, t('sx.su811.rep.empty'),
          el('div', { className: 'tc-learn-top' }, small(sel ? t('sx.su811.rep.sel', { n: sel }) : t('sx.su811.rep.sel.none'), () => { dlg.close(); repeatSelected(); }, { learnRepeatSel: '' }, !sel || !!l.off)))),
      el('div', { className: 'tc-dialog-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { learnClear: '' }, disabled: !learnedCount(l), onclick: () => clearAll() }, t('sx.su811.clear')),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onclick: () => dlg.close() }, t('btn.close'))));
  }

  async function saveSetAsk() {
    const input = el('input', { className: 'tc-input', type: 'text', maxLength: 200, value: model.state.name || '', 'aria-label': t('sx.su811.set.name') });
    const choice = await ask(root, {
      title: t('sx.su811.set.save.h'), text: t('sx.su811.set.save.text', { n: model.state.items.length }),
      body: el('label', { className: 'tc-learn-field' }, el('span', {}, t('sx.su811.set.name')), input),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('sx.su811.set.save.go'), 'btn-plot']],
      onOk: () => (input.value.trim() ? null : t('sx.su811.name.empty')), focus: 'input',
    });
    if (choice !== 'ok') return;
    const name = input.value.trim();
    changeLearn(model, t('sx.su811.set.saved.undo', { name }), (l) => (saveSet(l, name, model.state.items) ? undefined : false));
    ctx.status(t('sx.su811.set.saved', { name, n: model.state.items.length }), 9000);
  }
  async function clearAll() {
    const n = learnedCount(L());
    const choice = await ask(root, { title: t('sx.su811.clear.h'), text: t('sx.su811.clear.text', { n }), buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('sx.su811.clear.go'), 'btn-plot']] });
    if (choice !== 'ok') return;
    changeLearn(model, t('sx.su811.clear.undo'), (l) => (forgetAll(l) ? undefined : false));
    ctx.status(t('sx.su811.clear.done', { n }), 9000);
  }

  const api = {
    learn: () => JSON.parse(JSON.stringify(L() || null)),
    find: (id, all = false) => { const s = L()?.symbols.find((x) => x.id === id); return s ? find(s, all) : null; },
    repeatSelected, repeatLearned: (id, keys) => { const r = L()?.repeats.find((x) => x.id === id); if (r) repeatLearned(r, keys); },
    sameAsLastJob, open, bar: () => (bar.hidden ? null : [...bar.querySelectorAll('button')].map((b) => b.textContent)),
  };
  if (window.takeoffcraft) window.takeoffcraft.learn = api;
  return { open, acceptLearned, confirmed, sheetShown, api };
}
