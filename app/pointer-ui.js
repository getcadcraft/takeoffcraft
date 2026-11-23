/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pointer-ui.js: takeoffcraft.js's 12 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountPointer(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { panButton, wheelFactor } from './input-mouse.js';
import { t } from './i18n.js';
import { PadDetector } from './wheel-pad.js';
import * as G from './geom.js';

export function mountPointer(ctx) {
  const { ST, ui, app, d3, handleAt, dragTo, commitDrag, pickHover, pickCommit, finishDraft, liveMeasure, click, snapHit, view, status, settings, renderTouchBar, root } = ctx;

  ST.down = null; ST.panning = null;
  const pos = (e) => { const r = ui.over.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };

  // ---- touch (S.8): fingers get bigger targets; two fingers pinch and pan (and cancel what the first one began);
  // a long press is the right click (finish); a double tap finishes too; a small bar gives Finish / Back / Cancel ----
  ST.coarse = window.matchMedia?.('(pointer: coarse)').matches || false;   // i18n-ignore: a media query
  const hitPx = () => (ST.coarse ? 16 : ctx.HIT), closePx = () => (ST.coarse ? 22 : ctx.CLOSE), snapPx = () => (ST.coarse ? 18 : ctx.SNAP);
  const setCoarse = (on) => { if (on === ST.coarse) return; ST.coarse = on; root.classList.toggle('is-touch', on); renderTouchBar(); };
  root.classList.toggle('is-touch', ST.coarse);
  const touches = new Map();
  ST.pinch = null; ST.longTimer = 0; ST.lastTap = null;
  const twoFingers = () => { const [a, b] = [...touches.values()]; return { d: Math.hypot(b.x - a.x, b.y - a.y), m: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } }; };

  ui.over.addEventListener('contextmenu', (e) => e.preventDefault());
  ui.over.addEventListener('pointerdown', (e) => {
    if (!ST.cur) return;
    ui.over.setPointerCapture(e.pointerId);
    const p = pos(e);
    app.shift = e.shiftKey;
    setCoarse(e.pointerType === 'touch' || (e.pointerType === 'pen' && ST.coarse));
    if (e.pointerType === 'touch') {
      touches.set(e.pointerId, p);
      if (touches.size === 2) {                         // a second finger: pinch, and nothing the first one began
        clearTimeout(ST.longTimer);
        ST.down = null; ST.panning = null; app.drag = null; app.box = null;
        ui.over.classList.remove('is-panning');
        ST.pinch = twoFingers();
        view.overlayOnly();
        return;
      }
      if (touches.size > 2) return;
    }
    if ((e.button === 1 && panButton(1)) || (e.button === 0 && app.space)) { e.preventDefault(); ST.panning = p; ui.over.classList.add('is-panning'); return; }   // IP.3: middle pans unless the style took it away
    if (e.button === 1) { e.preventDefault(); return; }
    ST.down = { ...p, button: e.button, moved: false, touch: e.pointerType === 'touch', t: performance.now() };
    if (ST.down.touch) {
      ST.longTimer = setTimeout(() => {                    // a long press = the right button: finish the run or the outline
        if (!ST.down || ST.down.moved || touches.size !== 1) return;
        ST.down.long = true;
        if (app.draft) { navigator.vibrate?.(15); finishDraft(); }
      }, 550);
    }
    if (e.button === 0 && app.tool === 'select' && !app.paste) app.drag = handleAt(p);
    if (e.button === 0 && app.tool === 'legend' && !app.ca?.running) app.box = { a: view.toUser(p), b: view.toUser(p), sa: p };
    if (e.button === 0 && app.tool === 'autocount' && !app.ac?.running) app.box = { a: view.toUser(p), b: view.toUser(p), sa: p };
    if (e.button === 0 && app.tool === 'cadgeom') app.box = { a: view.toUser(p), b: view.toUser(p), sa: p, geom: true };   // a window takes everything inside it; a click, one object
  });
  ui.over.addEventListener('pointermove', (e) => {
    const p = pos(e);
    app.shift = e.shiftKey;
    if (e.pointerType === 'touch' && touches.has(e.pointerId)) {
      touches.set(e.pointerId, p);
      if (ST.pinch && touches.size >= 2) {
        const now = twoFingers();
        if (ST.pinch.d > 0 && now.d > 0) view.zoomAt(ST.pinch.m.x, ST.pinch.m.y, now.d / ST.pinch.d);
        view.panBy(now.m.x - ST.pinch.m.x, now.m.y - ST.pinch.m.y);
        ST.pinch = now;
        return;
      }
    }
    if (ST.panning) { view.panBy(p.x - ST.panning.x, p.y - ST.panning.y); ST.panning = p; return; }
    if (ST.down && !ST.down.moved && Math.hypot(p.x - ST.down.x, p.y - ST.down.y) > (ST.down.touch ? 10 : 4)) {
      ST.down.moved = true;
      clearTimeout(ST.longTimer);
      if (!app.drag && !app.box && (ST.down.button === 0 || panButton(ST.down.button))) { ST.panning = p; ui.over.classList.add('is-panning'); return; }   // IP.3: a right drag pans only where the style says so
    }
    if (app.box && ST.down) { app.box.b = view.toUser(p); view.overlayOnly(); return; }
    if (!ST.cur) return;
    app.cursor = pointFor(view.toUser(p));
    if (app.tool === 'path') pickHover(app.cursor);
    if (app.drag && ST.down?.moved) dragTo(app.cursor);
    liveMeasure();
    view.overlayOnly();
  });
  const liftTouch = (e) => {
    if (e.pointerType !== 'touch') return;
    touches.delete(e.pointerId);
    if (ST.pinch && touches.size < 2) { ST.pinch = null; ST.down = null; }   // the finger left after a pinch acts on nothing
  };
  ui.over.addEventListener('pointercancel', (e) => { liftTouch(e); clearTimeout(ST.longTimer); ST.down = null; ST.panning = null; ui.over.classList.remove('is-panning'); });
  ui.over.addEventListener('pointerup', (e) => {
    const p = pos(e);
    const wasPinch = !!ST.pinch;
    liftTouch(e);
    clearTimeout(ST.longTimer);
    if (wasPinch) return;
    if (ST.panning) { ST.panning = null; ui.over.classList.remove('is-panning'); ST.down = null; return; }
    if (!ST.down || !ST.cur) return;
    const d = ST.down; ST.down = null;
    if (d.long) return;                                 // the long press already acted
    if (d.touch && !d.moved) {
      // a double tap finishes a run or an outline (the first tap placed its point)
      const tap = { x: p.x, y: p.y, t: performance.now() };
      const dbl = ST.lastTap && tap.t - ST.lastTap.t < 350 && Math.hypot(tap.x - ST.lastTap.x, tap.y - ST.lastTap.y) < 24;
      ST.lastTap = dbl ? null : tap;
      if (dbl && app.draft && !app.draft.mid && (app.tool === 'linear' || app.tool === 'area' || app.tool === 'cutout')) { finishDraft(); return; }
    }
    if (app.drag) { const g = app.drag; app.drag = null; if (d.moved) { commitDrag(g); return; } }
    if (app.box?.geom) {
      const bx = app.box; app.box = null;
      if (d.moved && Math.hypot(p.x - bx.sa.x, p.y - bx.sa.y) > 6) ctx.geomWindow(bx.a, view.toUser(p), app.shift);
      else ctx.geomClick(view.toUser(p), app.shift);
      return;
    }
    if (app.box) {
      const bx = app.box; app.box = null;
      if (d.moved && Math.hypot(p.x - bx.sa.x, p.y - bx.sa.y) > 6) { if (app.tool === 'legend') ST.countAllUi?.boxed(bx.a, view.toUser(p)); else ctx.runAutoCount(bx.a, view.toUser(p)); return; }
      view.overlayOnly();
      if (app.tool === 'legend') { if (!ST.countAllUi?.toggleAt(view.toUser(p))) status(t('help.legend')); return; }
      if (app.ac && !app.ac.running) { ctx.toggleCandidate(view.toUser(p)); return; }
      status(t('ac.start.short'));
      return;
    }
    if (d.button === 2) { if (!d.moved) { if (app.tool === 'path') pickCommit(); else finishDraft(); } return; }
    if (d.button !== 0 || d.moved) return;
    click(pointFor(view.toUser(p)), p);
  });
  ui.over.addEventListener('pointerleave', () => { app.cursor = null; if (app.pick) app.pick.hover = []; view.overlayOnly(); });
  ui.over.addEventListener('dblclick', (e) => { e.preventDefault(); if (app.tool === 'path') { pickCommit(); return; } if (app.draft && !app.draft.mid && (app.tool === 'linear' || app.tool === 'area' || app.tool === 'cutout')) finishDraft(); });
  const padDetector = new PadDetector();
  ui.over.addEventListener('wheel', (e) => {
    if (!ST.cur) return;
    e.preventDefault();
    if (padDetector.isSwipe(e)) { view.panBy(-e.deltaX, -e.deltaY); return; }   // D7.56: two fingers pan (the sheet follows them); a pinch and a mouse wheel zoom
    const p = pos(e);
    const step = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
    view.zoomAt(p.x, p.y, Math.pow(1.0018, -step * (e.ctrlKey ? 1 : wheelFactor())));   // IP.3: the style's wheel (a pinch stays as it is)
  }, { passive: false });
  // 0.8 Track ID: hand the view to the input-device layer (assets/js/app-devices-ui.js) — the middle drag's pan, the wheel's zoom at (x, y),
  // Fit page; nothing without a sheet, as the wheel. While the 3D view is open the sheet's canvases are only visibility-hidden (their box
  // still counts as "under the pointer"), so each move goes on to the 3D view's own (view3d.js devView) with (x, y) moved into its box.
  const dev3d = () => (d3.on && d3.view?.devView) || null;
  const devAt3d = (x, y) => { const a = ui.over.getBoundingClientRect(), b = dev3d().el.getBoundingClientRect(); return [x + a.left - b.left, y + a.top - b.top]; };
  (window.ccViews ||= []).push({
    el: ui.over, kind: '2d',
    pan(dx, dy) { if (dev3d()) return dev3d().pan(dx, dy); if (ST.cur) view.panBy(dx, dy); },
    zoom(f, x = view.w / 2, y = view.h / 2) { if (!(f > 0)) return; if (dev3d()) return dev3d().zoom(f, ...devAt3d(x, y)); if (ST.cur) view.zoomAt(x, y, f); },
    orbit(dx, dy) { dev3d()?.orbit(dx, dy); },   // the sheet is flat: only the 3D view turns
    fit() { if (dev3d()) return dev3d().fit(); if (ST.cur) view.fit('page'); },
  });

  /**
   * Where a pick lands: on the drawing's own linework when Snap is on and it is near (T1; snap.js), else 45° from the
   * last picked point with Shift (Settings: always, and Shift frees the angle). `app.snap` keeps the hit for the marker.
   */
  function pointFor(raw) {
    app.snap = null;
    if (app.paste) return raw;
    const hit = snapHit(raw);
    if (hit) { app.snap = hit; return { x: hit.x, y: hit.y }; }
    if (app.tool === 'circle' || app.tool === 'cutcircle' || app.drag?.arc) return raw;
    // arc mode (T11): the point on the curve goes anywhere; the arc's end snaps 45° from where the arc starts
    if (app.arc && app.draft?.pts.length && (app.arcMethod !== '3P' || !app.draft.mid)) return raw;
    const last = app.draft?.pts.at(-1) ?? (app.drag?.anchor || null);
    const snap = settings.snap45 ? !app.shift : app.shift;
    return snap && last ? G.snap45(last, raw) : raw;
  }

  return { hitPx, closePx, snapPx, touches };
}
