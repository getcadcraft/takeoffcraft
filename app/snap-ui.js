/* SPDX-License-Identifier: Apache-2.0 */
/**
 * snap-ui.js: takeoffcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountSnap(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';

export function mountSnap(mc) {
  const { ST, app, status, applySettings, loadSnap, root } = mc;

  function toggleSnap(on = !mc.settings.snap) {
    mc.settings.snap = on;
    mc.saveSettings();
    applySettings();
    status(on ? t('snap.on') : t('snap.off'));
    if (on && ST.cur) loadSnap(ST.cur).then(() => { const r = ST.cur && mc.snaps.get(ST.cur.key); if (mc.settings.snap && r && !r.n) status(t('snap.none'), 9000); });
    if (app.cursor) mc.view.overlayOnly();
  }
  root.querySelector('[data-snap-toggle]')?.addEventListener('click', () => toggleSnap());
  /** The snap marker: square = end, triangle = midpoint, X = crossing, hourglass = on the line; with its name. */
  function drawSnap(ctx, S) {
    const h = app.snap;
    if (!h || !app.cursor) return;
    const s = S(h), r = 6;
    ctx.save();
    ctx.strokeStyle = ST.colors.action; ctx.lineWidth = 2; ctx.beginPath();
    if (h.kind === 'end') ctx.rect(s.x - r, s.y - r, 2 * r, 2 * r);
    else if (h.kind === 'mid') { ctx.moveTo(s.x, s.y - r); ctx.lineTo(s.x + r, s.y + r * 0.8); ctx.lineTo(s.x - r, s.y + r * 0.8); ctx.closePath(); }
    else if (h.kind === 'int') { ctx.moveTo(s.x - r, s.y - r); ctx.lineTo(s.x + r, s.y + r); ctx.moveTo(s.x + r, s.y - r); ctx.lineTo(s.x - r, s.y + r); }
    else { ctx.moveTo(s.x - r, s.y - r); ctx.lineTo(s.x + r, s.y - r); ctx.lineTo(s.x - r, s.y + r); ctx.lineTo(s.x + r, s.y + r); ctx.closePath(); }
    ctx.stroke();
    ctx.font = '600 11px Archivo, system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
    const txt = t('snap.' + h.kind), w = ctx.measureText(txt).width + 8;
    ctx.fillStyle = ST.colors.sheet; ctx.fillRect(s.x + r + 4, s.y + r + 2, w, 16);
    ctx.lineWidth = 1; ctx.strokeRect(s.x + r + 4, s.y + r + 2, w, 16);
    ctx.fillStyle = ST.colors.action; ctx.fillText(txt, s.x + r + 8, s.y + r + 4);
    ctx.restore();
  }

  return { toggleSnap, drawSnap };
}
