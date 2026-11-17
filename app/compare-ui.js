/* SPDX-License-Identifier: Apache-2.0 */
/**
 * compare-ui.js: takeoffcraft.js's 15 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountCompare(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { el, ask, frame } from './ui-util.js';
import { IDENTITY, fitTwoPoints, scaleOf, pixelMap, changeMask, warp, changed, markChange, movePts } from './overlay.js';
import * as G from './geom.js';
import * as U from './units.js';

export function mountCompare(mc) {
  const { $, model, app, d3, view, status, busy, showSheet, scaleText, setTool, cancelDraft, setActive, renderMarkProps, endPaste, discardAutoCount, rasterize, close3d, refresh, root } = mc;

  const cmpUi = { bar: $('[data-cmpbar]'), summary: $('[data-cmp-summary]'), btn: root.querySelector('[data-act="compare"]'), flagBtn: root.querySelector('[data-act="next-flag"]'), flagCount: root.querySelector('[data-flag-count]') };
  const OLD_RGB = [214, 39, 40], NEW_RGB = [31, 119, 180];       // removed (old only) red, added (new only) blue
  async function openCompare() {
    if (app.cmp) { closeCompare(); return; }
    if (!mc.cur) { status(t('handoff.nopdf')); return; }
    const others = mc.sheets.filter((x) => x.key !== mc.cur.key);
    if (!others.length) { status(t('cmp.pick.none'), 9000); return; }
    const def = others.find((x) => mc.cur.info.number && x.info.number === mc.cur.info.number && x.file !== mc.cur.file) || others.find((x) => x.file !== mc.cur.file && x.info.index === mc.cur.info.index) || others[0];
    const sel = el('select', { className: 'tc-select', id: 'tc-cmp-old', dataset: { cmpOld: '' } }, others.map((x) => el('option', { value: x.key, selected: x === def }, x.title)));
    const choice = await ask(root, {
      title: t('cmp.pick.title'), text: t('cmp.pick.text', { sheet: mc.cur.title }),
      body: el('div', { className: 'tc-ask-field' }, el('label', { for: 'tc-cmp-old' }, t('cmp.pick.label')), sel),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('cmp.pick.ok'), 'btn-plot']], focus: '[data-cmp-old]',
    });
    if (choice !== 'ok') return;
    const old = mc.sheets.find((x) => x.key === sel.value);
    if (!old || old.key === mc.cur.key) { status(t('cmp.same_sheet')); return; }
    await startCompare(old);
  }
  async function startCompare(old, A = IDENTITY) {
    if (d3.on) close3d();
    endPaste(true); cancelDraft();
    if (app.ac) discardAutoCount();
    if (app.tool !== 'select') setTool('select');
    busy(t('cmp.finding'));
    await frame();
    try { app.cmp = { old, A, sheet: mc.cur.key, tint: await tintOf(old), chg: null, align: null }; }
    catch (err) { console.error(err); status(err.message, 9000); return; }
    finally { busy(null); }
    cmpUi.bar.hidden = false;
    cmpUi.btn?.setAttribute('aria-pressed', 'true');
    renderCmp();
    view.overlayOnly();
  }
  function closeCompare() {
    app.cmp = null;
    cmpUi.bar.hidden = true;
    cmpUi.btn?.setAttribute('aria-pressed', 'false');
    view.overlayOnly();
  }
  /** The old sheet rendered once (≤ 4096 px), its ink turned red and see-through: what the overlay draws. */
  async function tintOf(s) {
    const page = await s.file.doc.getPage(s.info.index + 1);
    const px = Math.min(2, 4096 / Math.max(s.info.width, s.info.height));
    const vp = page.getViewport({ scale: px, rotation: s.info.rotate });
    const c = document.createElement('canvas');
    c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
    await page.render({ canvas: c, viewport: vp, background: '#ffffff' }).promise;
    const g = c.getContext('2d', { willReadFrequently: true });
    const im = g.getImageData(0, 0, c.width, c.height), d = im.data;
    for (let i = 0; i < d.length; i += 4) {
      const ink = 1 - (0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]) / 255;
      d[i] = OLD_RGB[0]; d[i + 1] = OLD_RGB[1]; d[i + 2] = OLD_RGB[2]; d[i + 3] = Math.round(Math.min(1, ink * 1.2) * 230);
    }
    g.putImageData(im, 0, 0);
    return { canvas: c, px, T: s.info.transform };
  }
  function drawCompare(ctx) {
    const c = app.cmp;
    if (!c || c.sheet !== mc.cur?.key) return;
    const place = (M, img) => { ctx.save(); ctx.transform(...M); ctx.imageSmoothingEnabled = true; ctx.drawImage(img, 0, 0); ctx.restore(); };
    // screen ← this sheet's user space ← (A) ← the old sheet's user space ← its display ← its raster pixels
    place(G.multiply(view.matrix, G.multiply(c.A, G.multiply(G.invert(c.tint.T), [1 / c.tint.px, 0, 0, 1 / c.tint.px, 0, 0]))), c.tint.canvas);
    if (c.chg?.canvas) place(G.multiply(view.matrix, G.multiply(G.invert(mc.cur.info.transform), [1 / c.chg.px, 0, 0, 1 / c.chg.px, 0, 0])), c.chg.canvas);
    for (const [i, q] of (c.align?.picks || []).entries()) {
      const s = G.apply(view.matrix, i % 2 === 0 ? G.apply(c.A, q) : q);
      ctx.save(); ctx.strokeStyle = i % 2 === 0 ? 'rgb(' + OLD_RGB + ')' : mc.colors.ink; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(s.x, s.y, 7, 0, Math.PI * 2); ctx.moveTo(s.x - 11, s.y); ctx.lineTo(s.x + 11, s.y); ctx.moveTo(s.x, s.y - 11); ctx.lineTo(s.x, s.y + 11); ctx.stroke();
      ctx.restore();
    }
  }
  function renderCmp() {
    const c = app.cmp;
    if (!c) return;
    const n = model.marksOn(c.old.key).length;
    cmpUi.summary.replaceChildren(t('cmp.summary', { old: c.old.title }), c.chg ? ' ' + t('cmp.summary.changes', { n, f: c.chg.flagged.size }) : '');
    cmpUi.summary.title = cmpUi.summary.textContent;     // the bar is one line: the whole text on hover
  }
  // align: four picks (old, new, old, new); an old pick is taken back through the current alignment into old user space
  function startAlign() {
    if (!app.cmp) return;
    app.cmp.align = { picks: [] };
    status(t('cmp.align.step1'), 0);
  }
  function alignPick(p) {
    const c = app.cmp, a = c.align, i = a.picks.length;
    a.picks.push(i % 2 === 0 ? G.apply(G.invert(c.A), p) : p);
    if (a.picks.length < 4) { status(t('cmp.align.step' + (a.picks.length + 1)), 0); view.overlayOnly(); return; }
    const [o1, n1, o2, n2] = a.picks;
    const A = fitTwoPoints(o1, o2, n1, n2);
    c.align = null;
    if (!A) { status(t('cmp.align.bad'), 9000); view.overlayOnly(); return; }
    c.A = A; c.chg = null;
    status(t('cmp.align.done', { scale: scaleOf(A).toFixed(3) }), 9000);
    renderCmp(); view.overlayOnly();
  }
  /** Rasterize both sheets in the new sheet's display space, compare their ink, and find the marks it touches. */
  async function findChanges() {
    const c = app.cmp;
    if (!c) return null;
    busy(t('cmp.finding'));
    await frame();
    try {
      const px = Math.min(2, Math.sqrt(12e6 / (mc.cur.info.width * mc.cur.info.height)));
      const pxOld = Math.min(2, Math.sqrt(12e6 / (c.old.info.width * c.old.info.height)));
      const [nw, ol] = [await rasterize(mc.cur, px), await rasterize(c.old, pxOld)];
      const M = pixelMap(mc.cur.info.transform, c.old.info.transform, c.A, 1);
      // pixelMap at 1 px per unit; the two rasters have their own pixel sizes
      const Mpx = G.multiply([pxOld, 0, 0, pxOld, 0, 0], G.multiply(M, [1 / px, 0, 0, 1 / px, 0, 0]));
      const cm = changeMask(warp(ol, Mpx, nw.w, nw.h), nw, { r: Math.max(1, Math.round(px * 1.5)) });
      const toPx = (q) => { const d = G.apply(mc.cur.info.transform, G.apply(c.A, q)); return { x: d.x * px, y: d.y * px }; };
      const flagged = new Set();
      for (const m of model.marksOn(c.old.key)) if (changed(markChange(m, cm, toPx, { buffer: Math.max(3, px * 4) }), m.kind)) flagged.add(m.id);
      const canvas = document.createElement('canvas');
      canvas.width = cm.w; canvas.height = cm.h;
      const g = canvas.getContext('2d'), im = g.createImageData(cm.w, cm.h);
      for (let i = 0; i < cm.mask.length; i++) {
        const v = cm.mask[i];
        if (!v) continue;
        const rgb = v === 1 ? OLD_RGB : NEW_RGB;
        im.data[i * 4] = rgb[0]; im.data[i * 4 + 1] = rgb[1]; im.data[i * 4 + 2] = rgb[2]; im.data[i * 4 + 3] = 255;
      }
      g.putImageData(im, 0, 0);
      c.chg = { canvas, px, removed: cm.removed, added: cm.added, flagged };
      status(cm.removed + cm.added ? t('cmp.found', { removed: cm.removed.toLocaleString(), added: cm.added.toLocaleString() }) + ' ' + t('cmp.flagged.found', { n: flagged.size }) : t('cmp.same'), 12000);
      renderCmp(); view.overlayOnly();
      return c.chg;
    } catch (err) { console.error(err); status(err.message, 9000); return null; }
    finally { busy(null); }
  }
  /** Move the old sheet's marks here (one undo step), flagging those the changes touch. */
  async function moveTakeoff() {
    const c = app.cmp;
    if (!c) return;
    const ids = model.marksOn(c.old.key).map((m) => m.id);
    if (!ids.length) { status(t('cmp.nomarks'), 9000); return; }
    const chg = c.chg || await findChanges();
    if (!chg || app.cmp !== c) return;
    const oldSc = model.scaleOf(c.old.key);
    const carried = oldSc ? U.scaleRecord({ ...oldSc, method: 'calibrated', preset: null, ftPerUnit: oldSc.ftPerUnit / scaleOf(c.A), label: U.describeScale(oldSc.ftPerUnit / scaleOf(c.A), mc.cur.info.userUnit), cal: null }) : null;
    const asIs = oldSc && Math.abs(scaleOf(c.A) - 1) < 1e-6 ? oldSc : carried;
    const newSc = model.scaleOf(mc.cur.key);
    if (asIs && newSc && Math.abs(newSc.ftPerUnit - asIs.ftPerUnit) / asIs.ftPerUnit > 0.001) {
      const ch = await ask(root, { title: t('cmp.scale.title'), text: t('cmp.scale.text', { old: scaleText(asIs, mc.cur.info.userUnit, true), new: scaleText(newSc, mc.cur.info.userUnit, true) }), buttons: [['cancel', t('cmp.scale.cancel'), 'btn-line'], ['ok', t('cmp.scale.keep'), 'btn-plot']] });
      if (ch !== 'ok') return;
    }
    const n = model.carryMarks(ids, mc.cur.key, (pts) => movePts(pts, c.A), { flagged: chg.flagged, scale: asIs });
    app.sel = null;
    closeCompare();
    status(t('cmp.moved', { n }) + ' ' + t('cmp.flagged', { n: chg.flagged.size }), 15000);
    refresh();
  }

  // ---- flagged marks: count on the sheet bar, next, Checked ----
  function renderFlags() {
    const n = model.state.marks.filter((m) => m.flag).length;
    cmpUi.flagBtn.hidden = !n;
    cmpUi.flagCount.textContent = n ? t('flag.count', { n }) : '';
  }
  async function nextFlag() {
    const list = model.state.marks.filter((m) => m.flag);
    if (!list.length) { status(t('flag.none')); return; }
    const m = list[(list.findIndex((x) => x.id === app.sel) + 1) % list.length];   // the one after the selected (or the first)
    if (m.sheet !== mc.cur?.key) await showSheet(m.sheet);
    const b = G.bounds([...m.pts, ...(m.holes || []).flat()]);
    const pad = Math.max(30, (b.maxX - b.minX + b.maxY - b.minY) * 0.3);
    view.zoomTo({ minX: b.minX - pad, minY: b.minY - pad, maxX: b.maxX + pad, maxY: b.maxY + pad });
    if (app.tool !== 'select') setTool('select');
    app.sel = m.id;
    setActive(m.item, false);
    renderMarkProps();
    status(t('flag.at', { i: list.indexOf(m) + 1, n: list.length }));
  }

  return { openCompare, startCompare, closeCompare, drawCompare, renderCmp, startAlign, alignPick, findChanges, moveTakeoff, renderFlags, nextFlag };
}
