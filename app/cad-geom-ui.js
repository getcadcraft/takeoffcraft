/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cad-geom-ui.js: takeoffcraft.js's 16 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountCadGeom(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { kindsOf, measureMark } from './model.js';
import { t } from './i18n.js';
import { frame, ask } from './ui-util.js';

export function mountCadGeom(mc) {
  const { ST, model, isCad, app, view, status, busy, ftIn, areaShow, hitPx, setActive, modKey, inArea, root } = mc;

  const countItems = () => model.state.items.filter((i) => kindsOf(i).includes('count'));
  /** The counting pieces (cadcount.js, cadmarks.js), loaded the first time a drawing is counted. */
  ST.cadCountMods = null;
  const loadCadCount = async () => (ST.cadCountMods ??= { cc: await import('./cadcount.js'), cm: await import('./cadmarks.js'), ui: await import('./cadcount-ui.js') });
  const countDone = (r) => status(t('cad.count.done', { n: r.n, item: model.item(r.item)?.name || '', already: r.already, mod: modKey }), 12000);

  async function cadCount(preset = null) {
    const s = ST.cur;
    if (!s || !isCad(s.file)) { status(t('cad.count.needs')); return; }
    busy(t('cad.count.busy'));
    await frame();
    let mods;
    try { mods = await loadCadCount(); s.file.cad.index(); } catch (err) { console.error(err); busy(null); status(t('cad.count.failed', { reason: err.message }), 12000); return; }
    busy(null);
    const r = await mods.ui.openCadCount({
      root, ask, t, set: s.file, sheetIndex: s.info.index, preset,
      items: countItems().map((i) => ({ id: i.id, name: i.name, marks: model.state.marks.filter((m) => m.item === i.id).length })),
      activeId: app.active,
      existingFor: (id) => model.state.marks.filter((m) => m.item === id && m.kind === 'count'),
      commit: (a) => model.addCounted({ ...a, list: a.list.map((m) => ({ ...m, ...inArea() })) }),
    });
    if (!r) return;
    setActive(r.item, true);
    countDone(r);
  }

  const geomCache = new Map();                                // sheet key → { tag, items, skipped, clipped }
  const geomBar = root.querySelector('[data-geombar]');
  function geomList(s) {
    const tag = [...s.file.cad.layerOverride].join(';');     // the layer panel changes what is offered
    let c = geomCache.get(s.key);
    if (!c || c.tag !== tag) { c = { tag, ...ST.geomMod.collectGeometry(s.file, s.info.index) }; geomCache.set(s.key, c); if (app.geom) app.geom.sel.clear(); }
    return c;
  }
  const geomItems = () => (ST.cur && isCad(ST.cur.file) && ST.geomMod ? geomList(ST.cur).items : []);
  /** The kind the active item measures by: 'linear' or 'area' (its own type, else a second condition it has), else null. */
  function geomKind() {
    const it = model.item(app.active);
    if (!it) return null;
    if (it.type === 'linear' || it.type === 'area') return it.type;
    const ks = kindsOf(it);
    return ks.includes('area') ? 'area' : ks.includes('linear') ? 'linear' : null;
  }
  const geomSelected = () => (app.geom ? geomItems().filter((i) => app.geom.sel.has(i.id)) : []);
  function geomClick(p, additive) {
    const hit = ST.geomMod.hitTest(geomItems(), p, hitPx() / view.z);
    if (!app.geom) return;
    if (!hit) { if (!additive) geomClear(); return; }
    if (app.geom.sel.has(hit.id)) app.geom.sel.delete(hit.id);
    else app.geom.sel.add(hit.id);                           // a click adds: several objects, one after another
    renderGeomBar(); view.overlayOnly();
  }
  function geomWindow(a, b, additive) {
    if (!app.geom) return;
    if (!additive) app.geom.sel.clear();
    for (const it of ST.geomMod.inWindow(geomItems(), a, b)) app.geom.sel.add(it.id);
    renderGeomBar(); view.overlayOnly();
  }
  function geomClear() { if (app.geom) app.geom.sel.clear(); renderGeomBar(); view.overlayOnly(); }
  function renderGeomBar() {
    if (!geomBar) return;
    geomBar.hidden = app.tool !== 'cadgeom';
    if (geomBar.hidden) return;
    const kind = geomKind(), sel = geomSelected(), sc = ST.cur && model.scaleOf(ST.cur.key);
    const it = model.item(app.active);
    const sum = geomBar.querySelector('[data-geom-summary]'), add = geomBar.querySelector('[data-geom-add]'), clr = geomBar.querySelector('[data-geom-clear]');
    if (!sel.length) sum.textContent = t(kind === 'area' ? 'cad.geom.hint.area' : 'cad.geom.hint.linear', { item: it?.name || '' });
    else if (sc && kind) {
      const tot = ST.geomMod.totals(sel, kind);
      const marks = ST.geomMod.marksFor(sel, kind);
      sum.textContent = (kind === 'area' ? t('cad.geom.sel.area.u', { n: marks.list.length, area: areaShow(tot.area * sc.ftPerUnit * sc.ftPerUnit, it) }) : t('cad.geom.sel.linear', { n: marks.list.length, len: ftIn(tot.len * sc.ftPerUnit) }))
        + (marks.skipped.open ? ' ' + t('cad.geom.left.open', { n: marks.skipped.open }) : '') + (marks.skipped.hatch ? ' ' + t('cad.geom.left.hatch', { n: marks.skipped.hatch }) : '')
        + (marks.approx ? ' ' + t('cad.geom.approx', { n: marks.approx }) : '');
    }
    add.textContent = t('cad.geom.add', { n: ST.geomMod && kind ? ST.geomMod.marksFor(sel, kind).list.length : 0, item: it?.name || '' });
    add.disabled = !sel.length || !kind || !ST.geomMod.marksFor(sel, kind).list.length;
    clr.disabled = !sel.length;
  }
  geomBar?.querySelector('[data-geom-add]').addEventListener('click', () => addGeometry());
  geomBar?.querySelector('[data-geom-clear]').addEventListener('click', () => geomClear());
  /** Take the picked objects as marks of the active item: a run for each line, arc or polyline (a closed one by its perimeter) or an outline for each closed shape — ONE undo step. */
  function addGeometry() {
    const kind = geomKind(), it = model.item(app.active), sel = geomSelected();
    if (!kind || !it || !sel.length || !ST.cur) return;
    if (!model.scaleOf(ST.cur.key)) { status(t('tool.err.noscale.measure'), 9000); return; }
    const r = ST.geomMod.marksFor(sel, kind);
    if (!r.list.length) { status(t(kind === 'area' ? 'cad.geom.none.area' : 'cad.geom.none.linear'), 9000); return; }
    const ids = model.addMarks(it.id, r.list.map((m) => ({ sheet: ST.cur.key, pts: m.pts, holes: m.holes, ...inArea() })), t('cad.geom.undo', { n: r.list.length, item: it.name }), kind);
    const sc = model.scaleOf(ST.cur.key);
    const qty = ids.reduce((n, id) => { const m = measureMark(model.mark(id), sc.ftPerUnit, it); return n + (kind === 'area' ? m.areaSqft : m.lengthFt); }, 0);
    app.geom.sel.clear();
    app.sel = ids[0] || null;
    status(t('cad.geom.done', { n: r.list.length, item: it.name, qty: kind === 'area' ? areaShow(qty, it) : ftIn(qty), mod: modKey }) + (r.approx ? ' ' + t('cad.geom.approx', { n: r.approx }) : ''), 12000);
    renderGeomBar(); view.overlayOnly();
  }
  function drawCadGeom(ctx, S, trace) {
    if (app.tool !== 'cadgeom' || !app.geom || !ST.cur || !isCad(ST.cur.file)) return;
    const it = model.item(app.active), color = it?.color || ST.colors.action;
    const items = geomItems();
    const sel = app.geom.sel;
    ctx.save(); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    const hover = app.cursor && !app.box ? ST.geomMod.hitTest(items, app.cursor, hitPx() / view.z) : null;
    const draw = (g, w, alpha, fillA) => {
      ctx.beginPath(); trace(g.pts, g.closed);
      for (const h of g.holes) trace(h, true);
      ctx.globalAlpha = alpha; ctx.strokeStyle = color; ctx.lineWidth = w;
      if (g.closed && fillA) { ctx.save(); ctx.globalAlpha = fillA; ctx.fillStyle = color; ctx.fill('evenodd'); ctx.restore(); }
      ctx.stroke();
    };
    if (hover && !sel.has(hover.id)) draw(hover, 2, 0.55, 0);
    for (const g of items) if (sel.has(g.id)) draw(g, 3, 1, 0.18);
    ctx.restore();
  }

  return { loadCadCount, cadCount, geomItems, geomKind, geomClick, geomWindow, geomClear, renderGeomBar, addGeometry, drawCadGeom };
}
