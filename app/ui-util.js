/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ui-util.js — small DOM helpers for the TakeoffCraft UI (this app's own copy; an app's build
 * never imports another app's folder). el() is the only way file-derived text reaches the
 * page: children are appended as text nodes, never parsed as HTML. A PDF is untrusted input.
 */

export function el(tag, props = {}, ...children) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'className') n.className = v;
    else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'dataset') Object.assign(n.dataset, v);
    else if (k === 'style' && typeof v === 'object') Object.assign(n.style, v);
    else if (k in n && typeof v !== 'string') n[k] = v;
    else n.setAttribute(k, v === true ? '' : String(v));
  }
  for (const c of children.flat(Infinity)) if (c !== null && c !== undefined && c !== false) n.append(c);
  return n;
}

export const icon = (name) => el('i', { className: 'bi bi-' + name, 'aria-hidden': 'true' });

export function bytes(n) {
  if (n < 1024) return n + ' B';
  if (n < 1048576) return (n / 1024).toFixed(0) + ' KB';
  return (n / 1048576).toFixed(1) + ' MB';
}

export const frame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

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
