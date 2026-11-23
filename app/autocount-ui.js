/* SPDX-License-Identifier: Apache-2.0 */
/**
 * autocount-ui.js: takeoffcraft.js's 13 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountAutoCount(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { suppress, toInk, workScale, trim, crop, templateProblem, ANY_ANGLES } from './match.js';
import * as G from './geom.js';
import { roomAt } from './roomfill.js';
import { measureMark, kindsOf } from './model.js';
import * as U from './units.js';

export function mountAutoCount(mc) {
  const { ST, $, model, app, view, status, busy, settings, ftIn, setTool, renderMarkProps } = mc;

  const acUi = {
    bar: $('[data-acbar]'), start: $('[data-ac-start]'), run: $('[data-ac-run]'), runText: $('[data-ac-run-text]'), progress: $('[data-ac-progress]'),
    review: $('[data-ac-review]'), summary: $('[data-ac-summary]'), threshold: $('[data-ac-threshold]'), th: $('[data-ac-th]'), all: $('[data-ac-all]'), angle: $('[data-ac-angle]'),
  };
  const AC_FLOOR = 0.5;      // the slider's start comes from Settings (settings.threshold, 75% unless changed)
  ST.acWorker = null; ST.acPending = null;
  ST.learnUi = null;   // 0.8 SU.811: mounted near the end of init
  ST.countAllUi = null;   // 0.8 EG.67: mounted right after it
  ST.pricesUi = null;   // 0.8 EG.68
  ST.supplyUi = null;   // 0.8 EG.51

  function renderAcBar() {
    acUi.bar.hidden = app.tool !== 'autocount' && !app.ac;
    const ac = app.ac;
    acUi.start.hidden = !!ac;
    acUi.run.hidden = !ac?.running;
    acUi.review.hidden = !ac || ac.running;
    if (!ac || ac.running) return;
    const vis = acVisible();
    const on = vis.filter((c) => !c.rejected);
    const sheetsWith = new Set(vis.map((c) => c.sheet)).size;
    const dups = vis.filter((c) => c.dup && c.rejected).length;
    acUi.summary.textContent = (ac.all ? t('ac.found.sheets', { n: vis.length, sheets: t('ac.sheets', { n: sheetsWith }) }) : t('ac.found', { n: vis.length })) +
      ', ' + (dups ? t('ac.adding.dups', { n: on.length, dups }) : t('ac.adding', { n: on.length })) + ' ' + t('ac.review') + (ac.skipped ? ' ' + ac.skipped : '');
    acUi.th.textContent = Math.round(ac.threshold * 100) + '%';
    acUi.threshold.value = String(ac.threshold);
    $('[data-ac-accept]').textContent = t('ac.accept', { n: on.length });
    $('[data-ac-accept]').disabled = !on.length;
  }
  acUi.threshold.addEventListener('input', () => { if (!app.ac) return; app.ac.threshold = Number(acUi.threshold.value); renderAcBar(); view.overlayOnly(); });
  $('[data-ac-cancel]').addEventListener('click', () => cancelAutoCount());
  $('[data-ac-discard]').addEventListener('click', () => { discardAutoCount(); status(t('ac.discarded')); });
  $('[data-ac-accept]').addEventListener('click', () => acceptAutoCount());

  const acVisible = () => (app.ac && !app.ac.running ? suppress(app.ac.cands, app.ac.threshold) : []);

  function cancelAutoCount() {
    if (!app.ac?.running) return;
    ST.acWorker?.terminate(); ST.acWorker = null;
    ST.acPending?.(null); ST.acPending = null;
    app.ac = null;
    renderAcBar(); view.overlayOnly();
    status(t('ac.canceled'));
  }
  function discardAutoCount() { if (app.ac?.running) cancelAutoCount(); app.ac = null; renderAcBar(); view.overlayOnly(); }

  /** A sheet rendered as ink darkness at `w` pixels per display unit (white paper = 0). */
  // ---- room fill (T21): click inside a room → its outline as an area mark, door openings closed ----
  ST.roomInk = null;                                   // { key, w, ink } of the last sheet read (the PDF does not change)
  ST.roomBusy = false;
  async function fillRoom(p) {
    if (ST.roomBusy) return;
    const sheet = ST.cur, sc = model.scaleOf(sheet.key), it = model.item(app.active);
    if (!sc || !it) return;
    ST.roomBusy = true;
    try {
      const w = Math.min(2, 3000 / Math.max(sheet.info.width, sheet.info.height));
      if (!ST.roomInk || ST.roomInk.key !== sheet.key || ST.roomInk.w !== w) {
        busy(t('room.reading'));
        try { ST.roomInk = { key: sheet.key, w, ink: await rasterize(sheet, w) }; } finally { busy(null); }
      }
      if (ST.cur !== sheet) return;
      const T = sheet.info.transform, per = Math.hypot(T[0], T[1]);        // display units per user unit
      const seed = G.apply(T, p);
      const gapPx = settings.roomGap / sc.ftPerUnit * per * w;
      const r = roomAt(ST.roomInk.ink, { x: seed.x * w, y: seed.y * w }, { gapPx });
      if (!r.ok) { status(t('room.err.' + r.why, { gap: ftIn(settings.roomGap) }), 9000); return; }
      const inv = G.invert(T);
      const pts = r.ring.map((q) => G.apply(inv, { x: q.x / w, y: q.y / w }));
      const why = G.outlineProblem(pts);
      if (why) { status(why, 9000); return; }
      app.sel = model.addMark({ item: it.id, sheet: sheet.key, pts, kind: 'area', ...mc.inArea() });
      const m = measureMark(model.mark(app.sel), sc.ftPerUnit, it);
      status(t('room.done', { sf: U.fixed(m.areaSqft, 2), n: pts.length, mod: mc.modKey }), 9000);
      renderMarkProps();
    } finally { ST.roomBusy = false; }
  }

  async function rasterize(sheet, w) {
    const page = await sheet.file.doc.getPage(sheet.info.index + 1);
    const vp = page.getViewport({ scale: w, rotation: sheet.info.rotate });
    const c = document.createElement('canvas');
    c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
    await page.render({ canvas: c, viewport: vp, background: '#ffffff' }).promise;
    const id = c.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, c.width, c.height);
    return { data: toInk(id.data, c.width, c.height), w: c.width, h: c.height };
  }

  function searchInWorker(img, template, onProgress, rotations = null) {
    ST.acWorker ??= new Worker(import.meta.resolve('./autocount-worker.js'), { type: 'module' });
    return new Promise((resolve) => {
      const id = Math.random();
      ST.acPending = resolve;
      ST.acWorker.onmessage = (e) => {
        const m = e.data;
        if (m.id !== id) return;
        if (m.type === 'progress') onProgress(m.f);
        else { ST.acPending = null; resolve(m.type === 'done' ? m.cands : { error: m.message }); }
      };
      ST.acWorker.onerror = (e) => { ST.acPending = null; resolve({ error: e.message || t('ac.stopped') }); };
      ST.acWorker.postMessage({ id, matchUrl: import.meta.resolve('./match.js'), img, template, floor: AC_FLOOR, ...(rotations ? { rotations } : {}) }, [img.data.buffer]);
    });
  }

  async function runAutoCount(a, b) {
    const it = model.item(app.active);
    if (!it || !kindsOf(it).includes('count')) { setTool('autocount'); return; }
    const T = ST.cur.info.transform;
    const ds = [a, b, { x: a.x, y: b.y }, { x: b.x, y: a.y }].map((p) => G.apply(T, p));    // display coords (y down)
    const minX = Math.min(...ds.map((p) => p.x)), maxX = Math.max(...ds.map((p) => p.x)), minY = Math.min(...ds.map((p) => p.y)), maxY = Math.max(...ds.map((p) => p.y));
    const w = workScale(maxX - minX, maxY - minY);
    const targets = acUi.all.checked ? ST.sheets.slice() : [ST.cur];
    const ac = app.ac = { item: it.id, running: true, all: acUi.all.checked, threshold: settings.threshold, cands: [], skipped: '' };
    renderAcBar();
    acUi.progress.value = 0;
    acUi.runText.textContent = t('ac.reading');
    view.overlayOnly();
    const src = await rasterize(ST.cur, w);
    if (app.ac !== ac) return;
    const tpl = trim(crop(src, minX * w, minY * w, (maxX - minX) * w, (maxY - minY) * w));
    const why = templateProblem(tpl);
    if (why) { app.ac = null; renderAcBar(); status(why, 9000); return; }
    ac.learn = { tpl, px: w, ft: model.scaleOf(ST.cur.key)?.ftPerUnit || null };   // 0.8 SU.811: kept if the person accepts
    let big = 0;
    const rotations = acUi.angle?.checked ? ANY_ANGLES : null;          // T7: any angle (15° steps), else the right angles
    const srcScale = model.scaleOf(ST.cur.key)?.ftPerUnit;
    for (let i = 0; i < targets.length; i++) {
      const sh = targets[i];
      acUi.runText.textContent = targets.length > 1 ? t('ac.searching.n', { i: i + 1, n: targets.length }) : t('ac.searching.one');
      // T7: a sheet at another scale draws a symbol drawn to scale bigger or smaller — render it so the symbol has the same
      // pixel size; tags drawn at one paper size do not change, so such a sheet is searched at both sizes
      const tgtScale = model.scaleOf(sh.key)?.ftPerUnit;
      const ws = srcScale && tgtScale && Math.abs(tgtScale / srcScale - 1) > 0.01 ? [w * tgtScale / srcScale, w] : [w];
      for (let j = 0; j < ws.length; j++) {
        const wt = ws[j];
        if (sh.info.width * sh.info.height * wt * wt > 40e6) { big++; continue; }        // too large at this symbol size
        const img = sh === ST.cur && wt === w ? { ...src, data: src.data.slice() } : await rasterize(sh, wt);
        if (app.ac !== ac) return;
        const res = await searchInWorker(img, tpl, (f) => { acUi.progress.value = (i + (j + f) / ws.length) / targets.length; }, rotations);
        if (app.ac !== ac || res === null) return;
        if (res.error) { app.ac = null; renderAcBar(); status(t('ac.failed', { reason: res.error }), 12000); return; }
        const inv = G.invert(sh.info.transform);
        const toUser = (x, y) => G.apply(inv, { x: x / wt, y: y / wt });
        const own = model.state.marks.filter((m) => m.item === it.id && m.sheet === sh.key);
        for (const c of res) {
          const corners = [toUser(c.x, c.y), toUser(c.x + c.w, c.y), toUser(c.x + c.w, c.y + c.h), toUser(c.x, c.y + c.h)];
          const dup = own.some((m) => G.pointInPolygon(m.pts[0], corners));
          // boxes in sheet units, so suppress() compares candidates found at two pixel sizes
          const bx = Math.min(...corners.map((q) => q.x)), by = Math.min(...corners.map((q) => q.y));
          ac.cands.push({ ...c, x: bx, y: by, w: Math.max(...corners.map((q) => q.x)) - bx, h: Math.max(...corners.map((q) => q.y)) - by, sheet: sh.key, center: toUser(c.x + c.w / 2, c.y + c.h / 2), corners, dup, rejected: dup });
        }
      }
    }
    ST.acWorker?.terminate(); ST.acWorker = null;
    ac.running = false;
    if (big) ac.skipped = t('ac.skipped', { n: big });
    renderAcBar();
    view.overlayOnly();
    status(acVisible().length ? t('ac.done') : t('ac.none'), 0);
  }

  function toggleCandidate(p) {
    const c = acVisible().find((x) => x.sheet === ST.cur.key && G.pointInPolygon(p, x.corners));
    if (!c) return;
    c.rejected = !c.rejected;
    renderAcBar(); view.overlayOnly();
  }

  function acceptAutoCount() {
    const ac = app.ac;
    if (!ac || ac.running) return;
    const on = acVisible().filter((c) => !c.rejected);
    if (ST.learnUi?.acceptLearned(ac, on)) return;   // 0.8 SU.811: a learned symbol's search (may add its item)
    const it = model.item(ac.item);
    app.ac = null;
    renderAcBar();
    if (!it || !on.length) { view.overlayOnly(); return; }
    model.addMarks(it.id, on.map((c) => ({ sheet: c.sheet, pts: [c.center], ...mc.inArea() })), t('undo.ac', { n: on.length, item: it.name }), 'count');
    status(t('ac.added', { n: on.length, item: it.name, mod: mc.modKey }), 9000);
    ST.learnUi?.confirmed(ac, on.length, it);   // 0.8 SU.811: remember the symbol the person just confirmed
  }

  function drawAutoCount(ctx, S, line) {
    if (app.box) {
      const a = S(app.box.a), b = S(app.box.b);
      ctx.strokeStyle = ST.colors.action; ctx.lineWidth = 1.5; ctx.setLineDash([5, 3]);
      ctx.strokeRect(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.abs(b.x - a.x), Math.abs(b.y - a.y));
      ctx.setLineDash([]);
    }
    if (!app.ac || app.ac.running) return;
    const color = model.item(app.ac.item)?.color || ST.colors.action;
    for (const c of acVisible()) {
      if (c.sheet !== ST.cur.key) continue;
      line(c.corners, true);
      if (c.rejected) {
        ctx.strokeStyle = ST.colors.ink; ctx.globalAlpha = 0.5; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]); ctx.stroke(); ctx.setLineDash([]);
        const p = c.corners.map(S);
        ctx.beginPath(); ctx.moveTo(p[0].x, p[0].y); ctx.lineTo(p[2].x, p[2].y); ctx.moveTo(p[1].x, p[1].y); ctx.lineTo(p[3].x, p[3].y); ctx.stroke();
        ctx.globalAlpha = 1;
      } else {
        ctx.fillStyle = color; ctx.globalAlpha = 0.15; ctx.fill(); ctx.globalAlpha = 1;
        ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
      }
    }
  }

  return { renderAcBar, acVisible, cancelAutoCount, discardAutoCount, fillRoom, rasterize, searchInWorker, runAutoCount, toggleCandidate, drawAutoCount };
}
