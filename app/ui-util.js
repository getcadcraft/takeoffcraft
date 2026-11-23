/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ui-util.js — small DOM helpers for the TakeoffCraft UI (this app's own copy; an app's build
 * never imports another app's folder). el() is the only way file-derived text reaches the
 * page: children are appended as text nodes, never parsed as HTML. A PDF is untrusted input.
 */
import { makeEl, bytes, frame } from './ui-util-core.js';
export { bytes, frame };

export const el = makeEl({ styleObject: true });   // PERF.74: the shared builder with this app's own rules (ui-util-core.js)

export const icon = (name) => el('i', { className: 'bi bi-' + name, 'aria-hidden': 'true' });

/** Download bytes or text as a file (nothing leaves the computer). */
export function download(data, name, type) {
  const blob = data instanceof Blob ? data : new Blob([data], { type });
  const a = el('a', { href: URL.createObjectURL(blob), download: name });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 30000);
}

/** A file name without characters file systems refuse. */
export const safeName = (s) => String(s).replace(/[\\/:*?"<>|\u0000-\u001f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 120) || 'Takeoff';

/**
 * A small in-page dialog (never window.alert/confirm/prompt). Resolves with the chosen button's
 * key ('cancel' on Esc). `body` is an optional element (e.g. a form field); `onOk(dlg)` may return
 * an error string to keep the dialog open.
 */
export function ask(root, { title, text, body = null, buttons, onOk = null, focus = null }) {
  return new Promise((done) => {
    const err = el('p', { className: 'tc-ask-err', role: 'alert', hidden: true });
    const dlg = el('dialog', { className: 'tc-dialog', 'aria-labelledby': 'tc-ask-h' },
      el('form', { method: 'dialog', className: 'tc-ask' },
        el('div', { className: 'tc-dialog-head' }, el('h2', { className: 'tc-h', id: 'tc-ask-h' }, title)),
        el('div', { className: 'tc-ask-body' }, text ? el('p', { className: 'tc-ask-text' }, text) : null, body, err),
        el('div', { className: 'tc-dialog-foot' }, ...buttons.map(([key, label, cls]) =>
          el('button', { type: key === 'ok' ? 'submit' : 'button', className: cls + ' btn-sm-cc', dataset: { key } }, label)))));
    let result = 'cancel';
    const finish = (key) => {
      if (key === 'ok' && onOk) {
        const problem = onOk(dlg);
        if (problem) { err.textContent = problem; err.hidden = false; return; }
      }
      result = key;
      dlg.close();
    };
    dlg.addEventListener('submit', (e) => { e.preventDefault(); finish('ok'); });
    dlg.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (b && b.type !== 'submit') finish(b.dataset.key); });
    dlg.addEventListener('close', () => { dlg.remove(); done(result); });
    root.append(dlg);
    dlg.showModal();
    (focus ? dlg.querySelector(focus) : dlg.querySelector('button[data-key="cancel"]'))?.focus();
  });
}
