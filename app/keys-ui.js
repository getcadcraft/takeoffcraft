/* SPDX-License-Identifier: Apache-2.0 */
/**
 * keys-ui.js: takeoffcraft.js's 1 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountKeys(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';

export function mountKeys(ctx) {
  const { app, d3, view, status, moveSheet, saveProject, setTool, cancelDraft, dropLastPoint, canType, openTypeIn, pickTrim, pickKey, toggleSnap, finishDraft, liveMeasure, deleteSelected, startPaste, endPaste, selectNone, closeCompare, geomClear, addGeometry, actions, toggleDeduct, toggleArc, arcPrompt, cancelAutoCount, discardAutoCount, toggle3d } = ctx;

  // keys go to the app unless a person is typing; a ticked checkbox or radio keeps Ctrl+Z, Delete… for the app
  const typing = (el) => el && (el.closest('input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), textarea, select, [contenteditable="true"]') || el.closest('dialog'));
  window.addEventListener('keydown', (e) => {
    if (document.querySelector('dialog[open]')) return;
    const mod = e.ctrlKey || e.metaKey;
    if (mod && !e.altKey) {
      const k = e.key.toLowerCase();
      if (k === 's') { e.preventDefault(); saveProject(); return; }
      if (k === 'o') { e.preventDefault(); actions['open-pdf'](); return; }
      if (typing(e.target)) return;
      if (k === 'z' && !e.shiftKey && app.tool === 'path' && app.pick?.staged.length) { e.preventDefault(); pickTrim(); return; }   // undo per segment while a path is picked
      if (k === 'z' && !e.shiftKey) { e.preventDefault(); actions.undo(); return; }
      if (k === 'y' || (k === 'z' && e.shiftKey)) { e.preventDefault(); actions.redo(); return; }
      if (e.shiftKey && k !== 'v') return;
      if (k === 'c') { e.preventDefault(); actions.copy(); return; }
      if (k === 'x') { e.preventDefault(); actions.cut(); return; }
      if (k === 'v') { e.preventDefault(); startPaste(e.shiftKey); return; }
      if (k === 'd') { e.preventDefault(); actions.duplicate(); return; }
      if (k === 'a') { e.preventDefault(); actions['select-all'](); return; }
      return;
    }
    if (typing(e.target)) return;
    if (app.tool === 'path' && pickKey(e)) return;
    if (canType() && !mod && /^[0-9.@#]$/.test(e.key)) { e.preventDefault(); openTypeIn(e.key); return; }
    if (e.key === 'Shift') { app.shift = true; if (app.cursor && app.draft) { view.overlayOnly(); } return; }
    if (e.key === ' ') { e.preventDefault(); app.space = true; return; }
    if (e.key === 'Escape' && app.cmp) { if (app.cmp.align) { app.cmp.align = null; status(''); view.overlayOnly(); } else closeCompare(); return; }
    if (e.key === 'Escape' && app.tool === 'cadgeom' && app.geom?.sel.size) { geomClear(); return; }
    if (e.key === 'Enter' && app.tool === 'cadgeom') { e.preventDefault(); addGeometry(); return; }
    if (e.key === 'Escape') { if (app.paste) endPaste(); else if (app.ac?.running) cancelAutoCount(); else if (app.ac) { discardAutoCount(); status(t('ac.discarded')); } else if (app.draft?.mid) { app.draft.mid = null; liveMeasure(); view.overlayOnly(); } else if (app.draft?.arcGot?.length) { app.draft.arcGot = []; arcPrompt(); liveMeasure(); view.overlayOnly(); } else if (app.draft) cancelDraft(); else if (app.tool !== 'select') setTool('select'); else selectNone(); return; }
    if (e.key === 'Enter') { if (app.draft) { e.preventDefault(); finishDraft(); } return; }
    if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault();
      if (app.draft?.mid || app.draft?.pts.length) dropLastPoint();
      else { endPaste(true); deleteSelected(); }
      return;
    }
    if (e.key === 'F3') { e.preventDefault(); toggleSnap(); return; }
    if (e.key === 'PageDown') { e.preventDefault(); moveSheet(1); return; }
    if (e.key === 'PageUp') { e.preventDefault(); moveSheet(-1); return; }
    if (e.altKey) return;
    const key = e.key.toLowerCase();
    if (key === '3') { toggle3d(); return; }
    if (d3.on && (key === 'f' || key === 'w')) { d3.view?.extents(); return; }
    const tool = { v: 'select', l: 'linear', a: 'area', o: 'circle', b: 'room', p: 'path', x: 'cutout', c: 'count', s: 'autocount', k: 'calibrate', d: 'check' }[key];
    if (tool) { setTool(tool); return; }
    if (key === 'r') { toggleArc(); return; }
    if (key === 'e') { toggleDeduct(); return; }
    if (key === 'f') view.fit('page');
    else if (key === 'w') view.fit('width');
    else if (key === '+' || key === '=') view.zoomAt(view.w / 2, view.h / 2, 1.25);
    else if (key === '-') view.zoomAt(view.w / 2, view.h / 2, 0.8);
  });
  window.addEventListener('keyup', (e) => {
    if (e.key === ' ') app.space = false;
    if (e.key === 'Shift') app.shift = false;
  });
}
