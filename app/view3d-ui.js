/* SPDX-License-Identifier: Apache-2.0 */
/**
 * view3d-ui.js: takeoffcraft.js's 15 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountView3d(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { frame, safeName, el } from './ui-util.js';
import * as U from './units.js';

export function mountView3d(ctx) {
  const { ST, $, ui, model, app, selMore, selIds, isSel, setSelection, d3, wsChanged, view, status, busy, settings, ftIn, host, setTool, cancelDraft, setActive, renderItems, renderItemProps, renderMarkProps, discardAutoCount, root } = ctx;

  const ui3d = {
    root: $('[data-3d]'), host: $('[data-3d-host]'), note: $('[data-3d-note]'), persp: $('[data-3d-persp]'),
    ground: $('[data-3d-ground]'), btn: root.querySelector('[data-act="view-3d"]'),
  };
  const NO_SCALE_3D = () => t('d3.err.noscale');

  function toggle3d() { if (d3.on) close3d(); else open3d(); }

  async function open3d() {
    if (!ST.cur) { status(t('d3.err.nopdf')); return; }
    if (!model.scaleOf(ST.cur.key)) { status(NO_SCALE_3D(), 9000); return; }
    ctx.endPaste(true); cancelDraft();
    if (app.ac) discardAutoCount();
    if (app.tool !== 'select') setTool('select');
    if (!d3.view) {
      busy(t('d3.loading'));
      await frame();
      try {
        if (!d3.mod) {
          const [a, b] = await Promise.all([import('./scene3d.js'), import('./view3d.js')]);
          d3.mod = { ...a, ...b };
        }
        d3.view = new d3.mod.TakeoffView3D(ui3d.host, { onPick: pick3d, corner: settings.corner });
      } catch (err) {
        console.warn(err);
        status(t('d3.err.webgl', { reason: err.message }), 12000);
        return;
      } finally { busy(null); }
    }
    d3.on = true;
    d3.sheet = null;
    ui3d.root.hidden = false;
    ui.stage.classList.add('is-3d');
    ui3d.btn?.setAttribute('aria-pressed', 'true');
    update3d();
    if (d3.on) d3.view.canvas.focus({ preventScroll: true });
    wsChanged();
  }

  function close3d() {
    if (!d3.on) return;
    d3.on = false;
    ui3d.root.hidden = true;
    ui.stage.classList.remove('is-3d');
    ui3d.btn?.setAttribute('aria-pressed', 'false');
    view.invalidate(true);
    wsChanged();
  }

  /** Rebuild from the model (after any edit, a new sheet or a selection made elsewhere). */
  function update3d() {
    if (!d3.on || !d3.view) return;
    if (!ST.cur) { close3d(); return; }
    const r = d3.stack ? d3.mod.buildStack(model.state, stackLevels()) : d3.mod.buildScene(model.state, ST.cur.key, { transform: ST.cur.info.transform, width: ST.cur.info.width, height: ST.cur.info.height });
    if (!r.ok) { close3d(); status(r.reason, 9000); return; }
    const sameSheet = d3.sheet === ST.cur.key && d3.stacked === d3.stack;
    d3.stacked = d3.stack;
    d3.scene = r;
    d3.view.setScene(r, { keepCamera: sameSheet });
    d3.view.setSelection(selIds());
    if (!sameSheet) {
      d3.sheet = ST.cur.key;
      d3.ground = null;
      d3.view.setGround(null);
      loadGround(ST.cur);
    }
    renderNote3d(r);
  }

  /** T4: the sheet on screen first, then every other open sheet that has a level, at its elevation. */
  function stackLevels() {
    const lv = (s) => ({ key: s.key, elevFt: model.levelOf(s.key) ?? 0, transform: s.info.transform, width: s.info.width, height: s.info.height });
    return [lv(ST.cur), ...ST.sheets.filter((s) => s.key !== ST.cur.key && model.levelOf(s.key) !== null).map(lv)];
  }
  function toggleStack(on = !d3.stack) {
    d3.stack = on;
    $('[data-3d-stack]')?.setAttribute('aria-pressed', String(on));
    update3d();
    if (on) status(stackLevels().length > 1 ? t('d3.stack.on', { n: stackLevels().length }) : t('d3.stack.none'), 9000);
    else status(t('d3.stack.off'));
  }

  async function exportGlb() {
    if (!d3.scene?.objects?.some((o) => o.kind !== 'frame' && (o.tris.length || o.kind === 'run'))) { status(t('d3.glb.empty')); return; }
    const { sceneToGlb } = await import('./glb.js');
    const name = safeName(model.state.name || 'Takeoff') + (d3.stack ? '' : ' - ' + safeName(ST.cur.title)) + '.glb';   // i18n-ignore: a file name
    const bytes = sceneToGlb(d3.scene, { name: model.state.name });
    host.download(bytes, name, 'model/gltf-binary');
    status(t('d3.glb.done', { file: name, n: d3.scene.objects.filter((o) => o.kind !== 'frame').length }), 9000);
  }

  /** The 3D check view as a USD package (.usdz; usd-takeoffcraft.js on cc-usd, ./usd/; 0.7 XF.8). */
  async function exportUsd() {
    if (!d3.scene?.objects?.some((o) => o.kind !== 'frame' && (o.tris.length || o.kind === 'run'))) { status(t('d3.glb.empty')); return; }
    const { checkUsd } = await import('./usd-takeoffcraft.js');
    const name = safeName(model.state.name || 'Takeoff') + (d3.stack ? '' : ' - ' + safeName(ST.cur.title)) + '.usdz';   // i18n-ignore: a file name
    const r = checkUsd(d3.scene, { format: 'usdz', name: model.state.name });
    host.download(r.data, name, 'model/vnd.usdz+zip');
    status(t('usd.done', { name, n: r.report.objects }), 9000);
  }

  /** The 3D view as a PNG (model 1.7); Shift + click: twice the size. */
  async function exportPng(scale) {
    if (!d3.view) return;
    const name = (safeName(model.state.name || 'Takeoff') + (d3.stack ? '' : ' - ' + safeName(ST.cur.title)) + ' 3D').trim();   // i18n-ignore: a file name
    const { pngName } = await import('./viewimage.js');
    try {
      const blob = await d3.view.png(scale);
      const file = pngName(name, scale);
      host.download(new Uint8Array(await blob.arrayBuffer()), file, 'image/png');
      status(t('d3.png.done', { file }), 9000);
    } catch (err) { status(t('d3.png.failed', { reason: err.message }), 9000); }
  }

  function renderNote3d(r) {
    const tt = r.totals, parts = [];
    for (const [k, n] of [['walls', tt.walls], ['slabs', tt.slabs], ['plates', tt.plates], ['runs', tt.runs], ['markers', tt.markers]]) if (n) parts.push(t('d3.part.' + k, { n }));
    const head = r.stacked ? t('d3.note.stacked', { list: parts.join(', ') || '—', n: r.levels.length }) : parts.length ? t('d3.note', { list: parts.join(', ') }) : t('d3.note.none');
    ui3d.note.replaceChildren(el('p', {}, head), ...r.notes.map((s) => el('p', {}, s)));
  }

  /** The page rendered once per sheet at a modest size (≤ 2048 px), laid on the ground. */
  async function loadGround(s) {
    const key = s.key;
    let c = d3.grounds.get(key);
    if (!c) {
      try {
        const page = await s.file.doc.getPage(s.info.index + 1);
        const max = Math.min(2048, d3.view.renderer.capabilities.maxTextureSize || 2048);
        const sc = Math.min(2, max / Math.max(s.info.width, s.info.height));
        const vp = page.getViewport({ scale: sc, rotation: s.info.rotate });
        c = document.createElement('canvas');
        c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
        await page.render({ canvas: c, viewport: vp, background: '#ffffff' }).promise;
      } catch (err) {
        console.warn(err);
        status(t('d3.err.ground'), 8000);
        return;
      }
      d3.grounds.set(key, c);
      if (d3.grounds.size > 4) d3.grounds.delete(d3.grounds.keys().next().value);
    }
    if (d3.on && d3.sheet === key) { d3.ground = key; d3.view.setGround(c); }
  }

  /** A click in 3D selects the mark (the same selection as on the sheet; Shift adds or takes out). */
  function pick3d(id, { shift } = {}) {
    const m = id && model.mark(id);
    if (shift && (ST.selMain || selMore.size)) {
      if (!m) return;
      if (isSel(m.id)) { if (m.id === ST.selMain) setSelection([...selMore]); else selMore.delete(m.id); }
      else selMore.add(m.id);
      const k = selIds().length;
      status(t('sel.several', { n: k, mod: ctx.modKey }));
    } else {
      app.sel = m?.id || null;
      if (m) {
        setActive(m.item, false);
        const o = d3.scene?.objects.find((x) => x.id === m.id);
        const it = model.item(m.item);
        const ms = o?.measure;
        const fills = { item: it.name, mod: ctx.modKey, len: ms ? ftIn(ms.lengthFt) : '', h: ms?.heightFt ? ftIn(ms.heightFt) : '', sf: ms ? U.fixed(o.kind === 'wall' ? ms.wallSqft : ms.netSqft ?? 0, 2) : '', depth: ms?.depthFt ? ftIn(ms.depthFt) : '', cy: ms?.volumeCuft ? U.fixed(ms.volumeCuft / 27, 2) : '' };
        status(t(o && ['wall', 'slab', 'plate', 'run'].includes(o.kind) ? 'd3.pick.' + o.kind : 'd3.pick.' + m.kind, fills), 9000);
      } else status(t('sel.none'));
    }
    renderMarkProps(); renderItems(); renderItemProps();
    view.overlayOnly();
  }

  for (const b of root.querySelectorAll('[data-3d-view]')) b.addEventListener('click', () => { d3.view?.standard(b.getAttribute('data-3d-view')); d3.view?.canvas.focus({ preventScroll: true }); });
  ui3d.persp?.addEventListener('click', () => {
    const on = ui3d.persp.getAttribute('aria-pressed') !== 'true';
    ui3d.persp.setAttribute('aria-pressed', String(on));
    d3.view?.setPersp(on);
  });
  $('[data-3d-extents]')?.addEventListener('click', () => d3.view?.extents());
  $('[data-3d-close]')?.addEventListener('click', () => close3d());
  $('[data-3d-stack]')?.addEventListener('click', () => toggleStack());
  $('[data-3d-levels]')?.addEventListener('click', () => ctx.levelsDialog());
  $('[data-3d-glb]')?.addEventListener('click', () => exportGlb());
  $('[data-3d-usd]')?.addEventListener('click', () => exportUsd());   // 0.7 XF.8
  $('[data-3d-png]')?.addEventListener('click', (e) => exportPng(e.shiftKey ? 2 : 1));
  ui3d.ground?.addEventListener('change', () => d3.view?.showGround(ui3d.ground.checked));

  /** For tests: what the 3D view shows, with each object's anchor on screen (page pixels). */
  function state3d() {
    if (!d3.on || !d3.view || !d3.scene) return { open: d3.on, loaded: !!d3.mod };
    const r = d3.view.canvas.getBoundingClientRect();
    return {
      open: true, loaded: true, sheet: d3.sheet, ground: d3.ground === d3.sheet, frames: d3.view.frames || 0,
      corner: d3.view.corner, persp: d3.view.cam.persp, eye: d3.view.cam.eye.slice(), target: d3.view.cam.target.slice(),
      totals: { ...d3.scene.totals }, selected: [...d3.view.sel],
      objects: d3.scene.objects.map((o) => {
        const s = d3.view.screenOf(o.anchor);
        return { id: o.id, item: o.item, kind: o.kind, measure: o.measure, screen: s ? { x: r.left + s.x, y: r.top + s.y } : null };
      }),
    };
  }

  return { toggle3d, close3d, update3d, toggleStack, state3d };
}
