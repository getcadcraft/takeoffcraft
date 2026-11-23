/* SPDX-License-Identifier: Apache-2.0 */
/**
 * item-list-ui.js: takeoffcraft.js's 9 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountItemList(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import * as U from './units.js';
import { t } from './i18n.js';
import { itemQty, wallArea, condQty } from './model.js';
import { el, icon } from './ui-util.js';
import { onUnitsChange } from './unit-prefs.js';

export function mountItemList(ctx) {
  const { ST, ui, model, app, selChanged, setSelection, view, status, settings, areaShow, syncSettingsForm, showSheet, renderSheets, setTool, refresh, announcePick } = ctx;

  ui.itemNew.addEventListener('click', () => openItemForm());
  ui.library.addEventListener('click', () => ctx.libraryDialog());
  function openItemForm(type) {
    ui.itemForm.hidden = false;
    if (type) ui.itemForm.elements.type.value = type;
    ui.itemForm.elements.name.focus();
  }
  ui.itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = ui.itemForm.elements.name.value.trim();
    if (!name) { ui.itemForm.elements.name.focus(); return; }
    const type = ui.itemForm.elements.type.value;
    // an add-on's item type (0.5 AO.6): "addon:<add-on id>:<kind>", made with that type's defaults
    const id = type.startsWith('addon:') ? ST.addonsApi?.createFromSelect(type, { name }) : model.addItem({ name, type, waste: settings.waste, unit: U.defaultUnitFor(type) });
    if (!id) return;
    ui.itemForm.reset(); ui.itemForm.elements.type.value = type; ui.itemForm.hidden = true;
    setActive(id);
    status(t('item.ready.' + model.item(id).type, { item: name }));
  });
  ui.itemForm.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.stopPropagation(); ui.itemForm.hidden = true; } });

  function setActive(id, highlight = true) {
    app.active = id;
    if (highlight) ST.pickRow = id;   // SC.5: a quantity row chosen by a person (or shown from another panel) is the pick when no mark is selected
    selChanged();
    if (highlight) app.hl = id;
    renderItems(); ctx.renderItemProps(); renderSheets(); ctx.renderQty();
    view.overlayOnly();
  }
  /** Click an item: highlight its marks everywhere (again: stop) and jump to a sheet that has them. */
  function focusItem(id) {
    if (app.hl === id && app.active === id) { app.hl = null; ST.pickRow = null; announcePick(); renderItems(); renderSheets(); ctx.renderQty(); view.overlayOnly(); return; }
    setActive(id);
    const marks = model.state.marks.filter((m) => m.item === id);
    if (marks.length && !marks.some((m) => m.sheet === ST.cur?.key)) {
      const target = ST.sheets.find((s) => marks.some((m) => m.sheet === s.key));
      if (target) showSheet(target.key);
      else status(t('item.marks.closed'));
    }
  }

  /** 0.10 BK.142: select the marks an item's figures came from (its marks on the sheet shown, else on the first sheet that has some). → how many */
  async function selectMarks(id) {
    const marks = model.state.marks.filter((m) => m.item === id);
    if (!marks.length) return 0;
    if (!marks.some((m) => m.sheet === ST.cur?.key)) { const target = ST.sheets.find((s) => marks.some((m) => m.sheet === s.key)); if (!target) { status(t('item.marks.closed')); return 0; } await showSheet(target.key); }
    const here = marks.filter((m) => m.sheet === ST.cur?.key).map((m) => m.id);
    if (app.active !== id) setActive(id);
    if (app.tool !== 'select') setTool('select');
    setSelection(here);
    ctx.renderMarkProps(); view.overlayOnly();
    return here.length;
  }

  const qtyLabel = (it) => {
    const tq0 = ST.qmap.get(it.id);
    if (!tq0) return '';
    const main = U.fixed(itemQty(it, tq0), it.type === 'count' ? 0 : 2) + ' ' + U.UNITS[it.unit].label;
    // T8: a second condition's quantity follows the main one ("120.00 SF + 4 EA")
    const wall = it.type === 'linear' && it.heightFt > 0 && tq0.lengthFt > 0 ? ' · ' + t('qty.wall.short', { area: areaShow(wallArea(it, tq0).net, it) }) : '';
    return [main + wall, ...(it.conds || []).map((c) => U.fixed(condQty(c, tq0.conds?.[c.kind]), c.kind === 'count' ? 0 : 2) + ' ' + U.UNITS[c.unit].label)].join(' + ');
  };

  function renderItems() {
    ui.itemsEmpty.hidden = model.state.items.length > 0;
    ui.items.replaceChildren(...model.state.items.map((it) => el('li', {},
      el('button', { type: 'button', className: 'tc-item' + (app.hl === it.id ? ' is-hl' : ''), 'aria-pressed': String(app.active === it.id), dataset: { item: it.id }, title: t('item.button.title'), onclick: () => focusItem(it.id) },
        el('span', { className: 'tc-chip', style: { background: it.color } }),
        icon(ctx.TYPE_ICONS[it.type]),
        el('span', { className: 'tc-item-name' }, it.name),
        el('span', { className: 'tc-item-qty' }, qtyLabel(it))))));
  }

  /** Keep focus (and the caret) in a re-rendered panel. */
  function keepFocus(container, render) {
    const a = container.ownerDocument.activeElement;   // the panel may be in the panels window
    const key = a && container.contains(a) ? a.dataset.field : null;
    const sel = key && 'selectionStart' in a ? [a.selectionStart, a.selectionEnd] : null;
    render();
    if (!key) return;
    const n = container.querySelector('[data-field="' + CSS.escape(key) + '"]');
    if (n) { n.focus({ preventScroll: true }); if (sel && n.setSelectionRange) try { n.setSelectionRange(...sel); } catch { /* not a text field */ } }
  }

  const fieldRow = (label, input, err) => [el('label', { for: input.id }, label), input, err ? el('p', { className: 'tc-field-err' }, err) : null];
  const textInput = (id, field, value, onCommit, extra = {}) => {
    const n = el('input', { type: 'text', className: 'tc-input', id, dataset: { field }, value, autocomplete: 'off', spellcheck: false, ...extra });
    n.addEventListener('change', () => onCommit(n.value, n));
    n.addEventListener('keydown', (e) => { if (e.key === 'Enter') n.blur(); });
    return n;
  };

  onUnitsChange(() => { ctx.renderItemProps(); syncSettingsForm(); if (typeof refresh === 'function' && ST.booted) refresh(); });   // 0.7 UNITS: the unit lists changed in Settings

  return { openItemForm, setActive, focusItem, selectMarks, qtyLabel, renderItems, keepFocus, fieldRow, textInput };
}
