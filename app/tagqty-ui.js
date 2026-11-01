/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tagqty-ui.js — the page side of "Tag schedule" (0.8 SU.915, TakeoffCraft's side; session takeoff_PART_3): the toolbar's Tags button and its dialog.
 * Pick the CSV a BimCraft tag schedule left as, say which column names the line and which holds the number, and each distinct name becomes a typed quantity
 * (tagqty.js → the same import as CivilCraft's cut and fill). Nothing is sent anywhere. Mounted by takeoffcraft.js: mountTagQty(ctx) → { open, drive }.
 */
import { el } from './ui-util.js';
import { readSchedule, guess, build } from './tagqty.js';
import { UNITS_FOR } from './units.js';
import { t } from './i18n.js';

/** ctx: { root, model, status(text, ms), importFile(json, name) } */
export function mountTagQty(ctx) {
  const { root } = ctx;
  const btn = root.querySelector('[data-act="tagqty"]');
  btn?.addEventListener('click', () => open());
  let dlg = null, fileIn = null, sched = null, name = '', pick = null, label = '';
  function open() {
    if (!dlg) { dlg = el('dialog', { className: 'tc-dialog tc-learn', 'aria-labelledby': 'tc-tagqty-h', dataset: { tagqtyDialog: '' } }); dlg.addEventListener('close', () => dlg.remove()); }
    render();
    if (!dlg.isConnected) root.append(dlg);
    if (!dlg.open) dlg.showModal();
  }
  async function load(file) {
    let text;
    try { text = await file.text(); } catch { ctx.status(t('eg915.file.bad', { file: file.name }), 10000); return; }
    const s = readSchedule(text);
    if (!s.ok) { ctx.status(t('eg915.file.err', { file: file.name, why: t('eg915.err.' + s.error) }), 12000); return; }
    sched = s; name = file.name; pick = guess(s); label = '';
    render();
  }
  const preview = () => (sched && pick ? build(sched, { ...pick, project: name.replace(/\.[^.]+$/, ''), label }) : null);
  function addNow() {
    const b = preview();
    if (!b?.ok) { ctx.status(t('eg915.file.err', { file: name, why: t('eg915.err.' + (b?.error || 'none')) }), 12000); return null; }
    ctx.importFile(b.file, name);
    sched = null; pick = null;      // the next time starts with a file again
    dlg?.close();
    return b;
  }
  function render() {
    if (!dlg) return;
    fileIn ??= el('input', { type: 'file', accept: '.csv,.txt,text/csv', hidden: true, dataset: { tagqtyFile: '' }, onchange: async (e) => { const f = e.target.files[0]; e.target.value = ''; if (f) await load(f); } });
    const colSel = (value, onchange, withNone) => {
      const s = el('select', { className: 'tc-input', onchange: (e) => { onchange(e.target.value === '' ? null : +e.target.value); render(); } },
        ...(withNone ? [el('option', { value: '' }, t('eg915.rows'))] : []), ...sched.head.map((h, i) => el('option', { value: String(i) }, h || '#' + (i + 1))));
      s.value = value === null ? '' : String(value);
      return s;
    };
    const unit = el('select', { className: 'tc-input', dataset: { tagqtyUnit: '' }, onchange: (e) => { pick.unit = e.target.value; render(); } }, ...UNITS_FOR.fixed.map((u) => el('option', { value: u }, u)));
    unit.value = pick?.unit || 'EA';
    const mult = el('input', { className: 'tc-input', type: 'number', min: '0', step: 'any', value: String(pick?.mult ?? 1), style: { width: '7rem' }, dataset: { tagqtyMult: '' }, onchange: (e) => { const v = Number(e.target.value); if (v > 0) pick.mult = v; render(); } });
    const b = preview();
    const body = !sched ? [el('p', { className: 'tc-learn-lead' }, t('eg915.lead.text')), el('div', { className: 'tc-learn-top' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { tagqtyPick: '' }, onclick: () => fileIn.click() }, t('eg915.pick')), fileIn)]
      : [el('p', { className: 'tc-learn-lead' }, t('eg915.file', { file: name, n: sched.rows.length }), ' ', el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { tagqtyPick: '' }, onclick: () => fileIn.click() }, t('eg915.pick')), fileIn),
        el('div', { className: 'tc-learn-top' }, el('label', { className: 'tc-learn-field' }, t('eg915.name'), colSel(pick.nameCol, (v) => { pick.nameCol = v ?? 0; }, false)),
          el('label', { className: 'tc-learn-field' }, t('eg915.qty'), colSel(pick.qtyCol, (v) => { pick.qtyCol = v; }, true)),
          el('label', { className: 'tc-learn-field' }, t('eg915.unit'), unit), el('label', { className: 'tc-learn-field' }, t('eg915.mult'), mult)),
        el('p', { className: 'tc-learn-note', role: 'note', dataset: { tagqtySummary: '' } }, b?.ok ? t('eg915.summary', { n: b.groups, skipped: b.skipped }) : t('eg915.err.' + (b?.error || 'none'))),
        b?.ok ? el('ul', { className: 'tc-learn-list' }, ...b.file.items.slice(0, 12).map((it) => el('li', { className: 'tc-learn-row', dataset: { tagqtyRow: it.key } }, el('div', { className: 'tc-learn-main' }, el('span', { className: 'tc-learn-name' }, it.name), el('span', { className: 'tc-learn-sub' }, it.qty + ' ' + it.unit + ' - ' + it.note))))) : null,
        b?.ok && b.groups > 12 ? el('p', { className: 'tc-learn-intro' }, t('eg915.more', { n: b.groups - 12 })) : null];
    dlg.replaceChildren(el('div', { className: 'tc-dialog-head' }, el('h2', { className: 'tc-h', id: 'tc-tagqty-h' }, t('eg915.h'))), el('div', { className: 'tc-learn-body' }, ...body),
      el('div', { className: 'tc-dialog-foot' }, sched ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { tagqtyAdd: '' }, disabled: !b?.ok, onclick: () => addNow() }, t('eg915.add')) : null,
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onclick: () => dlg.close() }, t('btn.close'))));
  }
  return { open, drive: { load, add: addNow, state: () => ({ loaded: !!sched, pick }) } };
}
