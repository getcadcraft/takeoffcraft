/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — protocol only. */
/**
 * undo-hook.js — TakeoffCraft's end of the project-level undo (0.9 mounts-09, EG.77; docs/spikes/EG.77_PART_4.md). The reporter is undo-report.js
 * (byte-identical copy of public_html/assets/js/undo-report.js). Each finished step is told to the window it runs in:
 *
 *   window event 'cc-undo-report' { detail: { type: 'edit.done', data: { step, label, depth, kind } } }   (Studio's window script forwards it to the channel)
 *   window.ccUndoReporter.onMessage('undo.probe' | 'undo.run', data) → the reply Studio's journal waits for   (null = not ours)
 *
 * A step is "done" when model.change leaves the undo stack deeper than before; the model's own undo and redo are told too. The model object is
 * replaced when a file opens: attach() moves the hook to the new one, and the stack it has not seen makes the probe say "moved" (Studio skips
 * this window, never forces it).
 */
import { makeUndoReporter } from './undo-report.js';

export function mountUndoHook({ getModel, win = typeof window !== 'undefined' ? window : null }) {
  const depth = () => getModel().undoStack.length;
  const post = (type, data) => { try { win?.dispatchEvent(new CustomEvent('cc-undo-report', { detail: { type, data } })); } catch { /* no window */ } };
  let running = false, last = depth(), bound = null;
  const rep = makeUndoReporter({ depth, post, undoOne: () => { running = true; try { getModel().undo(); } finally { running = false; } }, label: () => getModel().undoStack.at(-1)?.label || '' });
  const settle = (m) => {
    const d = m.undoStack.length;
    if (d > last && !running) rep.stepDone(m.undoStack.at(-1)?.label || '');
    last = d;
  };
  /** Call after the model object was replaced (a file opened; TakeoffCraft keeps one model and reloads it in place): the hook follows it. */
  function attach() {
    const m = getModel();
    if (m === bound) return rep;
    bound = m; last = depth();
    if (!m.__ccUndoHooked) {
      m.__ccUndoHooked = true;
      const change0 = m.change.bind(m), undo0 = m.undo.bind(m), redo0 = m.redo.bind(m);
      m.change = (...a) => { const r = change0(...a); if (getModel() === m) settle(m); return r; };
      m.undo = (...a) => { const r = undo0(...a); if (getModel() === m) { last = m.undoStack.length; if (r !== null && !running) rep.undone(); } return r; };
      m.redo = (...a) => { const r = redo0(...a); if (getModel() === m) { last = m.undoStack.length; if (r !== null) rep.redone(); } return r; };
      m.on?.((why) => { if (why === 'load' && getModel() === m) last = m.undoStack.length; });
    }
    return rep;
  }
  attach();
  if (win) win.ccUndoReporter = rep;
  return { rep, attach };
}
