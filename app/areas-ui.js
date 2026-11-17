/* SPDX-License-Identifier: Apache-2.0 */
/**
 * areas-ui.js: takeoffcraft.js's 13 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountAreas(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el, ask, icon } from './ui-util.js';
import { t } from './i18n.js';
import { areaEstimates, TYPE_LABELS, alternates } from './model.js';
import * as U from './units.js';

export function mountAreas(ctx) {
  const { ui, model, app, setSelection, view, status, showSheet, setTool, setActive, keepFocus, textInput, renderMarkProps, root } = ctx;

  const areaSel = root.querySelector('[data-area-cur]');
  /** What a new mark carries: the current bid area, when one is chosen. */
  const inArea = () => (app.curArea && model.area(app.curArea) ? { area: app.curArea } : {});
  function renderAreas() {
    if (app.curArea && !model.area(app.curArea)) app.curArea = null;
    const areas = model.state.areas || [];
    areaSel.replaceChildren(
      el('option', { value: '' }, t('area.none')),
      ...areas.map((a) => el('option', { value: a.id }, a.alt ? t('qty.alt.row', { name: a.name, kind: t('alt.' + a.alt).toLowerCase() }) : a.name)),
      el('option', { value: '__new' }, t('area.new')),
      ...(areas.length ? [el('option', { value: '__manage' }, t('area.manage'))] : []));
    areaSel.value = app.curArea || '';
    root.querySelector('[data-qty-mode="area"]').hidden = !areas.length;
    if (!areas.length && app.qtyMode === 'area') root.querySelector('[data-qty-mode="item"]').click();
  }

  function setCurArea(id) {
    app.curArea = id && model.area(id) ? id : null;
    areaSel.value = app.curArea || '';
    status(app.curArea ? t('area.cur', { area: model.area(app.curArea).name }) : t('area.cur.none'));
    view.overlayOnly();
  }
  async function newArea() {
    const input = el('input', { type: 'text', className: 'tc-input', id: 'tc-area-name', maxlength: 200, autocomplete: 'off', placeholder: t('area.name.placeholder'), dataset: { areaName: '' } });
    let id = null;
    const choice = await ask(root, {
      title: t('area.new.title'), text: t('area.new.text'),
      body: el('div', { className: 'tc-ask-field' }, el('label', { for: 'tc-area-name' }, t('area.name')), input),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('btn.create'), 'btn-plot']],
      focus: '[data-area-name]',
      onOk: () => (input.value.trim() ? null : t('area.name.empty')),
    });
    if (choice === 'ok') { try { id = model.addArea(input.value); } catch (err) { status(err.message, 9000); } }
    return id;
  }
  async function manageAreas() {
    const list = el('ol', { className: 'tc-area-list', dataset: { areaList: '' } });
    const fill = () => {
      const areas = model.state.areas || [];
      list.replaceChildren(...(areas.length ? areas.map((a, i) => {
        const name = el('input', { type: 'text', className: 'tc-input', value: a.name, maxlength: 200, 'aria-label': t('area.name'), dataset: { areaRename: a.id } });
        name.addEventListener('change', () => { if (name.value.trim()) model.renameArea(a.id, name.value); else name.value = a.name; });
        const btn = (icn, label, fn, off = false) => el('button', { type: 'button', className: 'tc-linkbtn', title: label, 'aria-label': label, disabled: off, onclick: () => { fn(); fill(); } }, icon(icn));
        const alt = el('select', { className: 'tc-select', 'aria-label': t('alt.label', { name: a.name }), title: t('alt.title'), dataset: { areaAlt: a.id } },
          ['', 'add', 'deduct'].map((v) => el('option', { value: v, selected: (a.alt || '') === v }, t(v ? 'alt.' + v + '.long' : 'alt.base'))));
        alt.addEventListener('change', () => model.setAreaAlt(a.id, alt.value || null));
        return el('li', {}, name, alt, btn('arrow-up', t('area.up'), () => model.moveArea(a.id, -1), i === 0), btn('arrow-down', t('area.down'), () => model.moveArea(a.id, 1), i === areas.length - 1),
          el('button', { type: 'button', className: 'tc-linkbtn is-danger', title: t('area.delete'), 'aria-label': t('area.delete'), dataset: { areaDelete: a.id }, onclick: () => { model.removeArea(a.id); fill(); } }, icon('trash')));
      }) : [el('li', { className: 'tc-note' }, t('area.manage.none'))]));
    };
    fill();
    const add = el('input', { type: 'text', className: 'tc-input', maxlength: 200, placeholder: t('area.name.placeholder'), 'aria-label': t('area.name'), dataset: { areaAdd: '' } });
    const addBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => { if (add.value.trim()) { model.addArea(add.value); add.value = ''; fill(); add.focus(); } } }, t('area.add'));
    add.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); addBtn.click(); } });
    await ask(root, {
      title: t('area.manage.title'), text: t('area.manage.text'),
      body: el('div', {}, list, el('div', { className: 'tc-area-add' }, add, addBtn)),
      buttons: [['ok', t('area.done'), 'btn-plot']],
      focus: '[data-area-add]',
    });
    renderAreas();
  }
  /** The selected marks' bid area field (props panel): a select that moves them (one undo step). */
  function areaField(ids) {
    const areas = model.state.areas || [];
    if (!areas.length) return [];
    const marks = ids.map((id) => model.mark(id)).filter(Boolean);
    const one = new Set(marks.map((m) => m.area || '')).size === 1 ? (marks[0]?.area || '') : null;
    const sel = el('select', { className: 'tc-select', id: 'tc-m-area', dataset: { field: 'm-area' } },
      one === null ? el('option', { value: '__mixed', selected: true, disabled: true }, '—') : null,
      el('option', { value: '', selected: one === '' }, t('area.none')),
      areas.map((a) => el('option', { value: a.id, selected: one === a.id }, a.name)));
    sel.addEventListener('change', () => {
      const area = sel.value || null;
      if (model.setMarksArea(marks.map((m) => m.id), area)) status(t('area.moved', { n: marks.length, area: area ? model.area(area).name : t('area.none') }));
    });
    return [el('label', { for: 'tc-m-area' }, t('props.area')), sel];
  }

  // ---- typical groups (T16): marks taken off once, counted `repeat` times ----
  function groupField(ids) {
    const groups = model.state.groups || [];
    const marks = ids.map((id) => model.mark(id)).filter(Boolean);
    const one = new Set(marks.map((m) => m.group || '')).size === 1 ? (marks[0]?.group || '') : null;
    const sel = el('select', { className: 'tc-select', id: 'tc-m-group', dataset: { field: 'm-group' }, title: t('group.field.title') },
      one === null ? el('option', { value: '__mixed', selected: true, disabled: true }, '—') : null,
      el('option', { value: '', selected: one === '' }, t('group.none')),
      groups.map((g) => el('option', { value: g.id, selected: one === g.id }, t('group.option', { name: g.name, n: g.repeat }))),
      el('option', { value: '__new' }, t('group.new')));
    sel.addEventListener('change', async () => {
      if (sel.value === '__new') { await newGroup(marks.map((m) => m.id)); renderMarkProps(); return; }
      const g = sel.value || null;
      if (model.setMarksGroup(marks.map((m) => m.id), g)) status(g ? t('group.moved', { n: marks.length, name: model.group(g).name, k: model.group(g).repeat }) : t('group.left', { n: marks.length }));
    });
    return [el('label', { for: 'tc-m-group' }, t('props.group')), sel];
  }
  /** Ask a name and a repeat count; make the group with these marks in it. */
  async function newGroup(ids) {
    const name = el('input', { type: 'text', className: 'tc-input', id: 'tc-g-name', maxlength: 200, value: t('group.default', { n: (model.state.groups || []).length + 1 }), autocomplete: 'off', dataset: { groupName: '' } });
    const rep = el('input', { type: 'text', className: 'tc-input', id: 'tc-g-repeat', inputmode: 'numeric', value: '2', autocomplete: 'off', dataset: { groupRepeat: '' } });
    let made = null;
    await ask(root, {
      title: t('group.dlg'), text: t('group.dlg.text', { n: ids.length }),
      body: el('div', { className: 'tc-props' }, el('label', { for: 'tc-g-name' }, t('group.f.name')), name, el('label', { for: 'tc-g-repeat' }, t('group.f.repeat')), rep),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('group.dlg.ok'), 'btn-plot']],
      focus: '#tc-g-name',
      onOk: () => {
        const n = readRepeat(rep.value);
        if (!name.value.trim()) return t('group.err.name');
        if (n === null) return t('err.group.repeat', { max: 10000 });
        try { made = model.addGroup(name.value, n, ids); } catch (err) { return err.message; }
        return null;
      },
    });
    if (made) status(t('group.made', { name: model.group(made).name, n: ids.length, k: model.group(made).repeat }), 9000);
    return made;
  }
  const readRepeat = (v) => { const s = String(v).trim().replace(/^[x×]\s*/i, ''); return /^\d{1,5}$/.test(s) && +s >= 1 && +s <= 10000 ? +s : null; };
  function renderGroups() {
    const groups = model.state.groups || [];
    ui.groupsSec.hidden = !groups.length;
    if (!groups.length) { ui.groups.replaceChildren(); return; }
    const count = new Map();
    for (const m of model.state.marks) if (m.group) count.set(m.group, (count.get(m.group) || 0) + 1);
    keepFocus(ui.groups, () => ui.groups.replaceChildren(...groups.map((g) => {
      const name = textInput('tc-g-' + g.id + '-name', 'g:' + g.id + ':name', g.name, (v, n) => { if (!v.trim()) { n.classList.add('is-invalid'); status(t('group.err.name')); return; } model.updateGroup(g.id, { name: v }); }, { maxlength: 200, 'aria-label': t('group.f.name') });
      const rep = textInput('tc-g-' + g.id + '-repeat', 'g:' + g.id + ':repeat', String(g.repeat), (v, n) => { const k = readRepeat(v); if (k === null) { n.classList.add('is-invalid'); status(t('err.group.repeat', { max: 10000 })); return; } model.updateGroup(g.id, { repeat: k }); }, { inputmode: 'numeric', className: 'tc-input tc-g-rep', 'aria-label': t('group.f.repeat.of', { name: g.name }) });
      const pick = el('button', { type: 'button', className: 'tc-linkbtn', title: t('group.select'), 'aria-label': t('group.select'), dataset: { groupSelect: g.id } }, icon('bounding-box'));
      pick.addEventListener('click', () => selectGroup(g.id));
      const del = el('button', { type: 'button', className: 'tc-linkbtn is-danger', title: t('group.delete'), 'aria-label': t('group.delete.of', { name: g.name }), dataset: { groupDelete: g.id } }, icon('trash'));
      del.addEventListener('click', () => { model.removeGroup(g.id); status(t('group.deleted', { name: g.name })); });
      return el('li', { className: 'tc-group', dataset: { group: g.id } }, name, el('span', { className: 'tc-g-x', 'aria-hidden': 'true' }, '×'), rep,
        el('span', { className: 'tc-g-n' }, t('group.marks', { n: count.get(g.id) || 0 })), pick, del);
    })));
  }
  /** Select a group's marks: on this sheet if it has some, else on the first sheet that has. */
  function selectGroup(id) {
    const all = model.state.marks.filter((m) => m.group === id);
    if (!all.length) { status(t('group.empty')); return; }
    const sheet = all.some((m) => m.sheet === ctx.cur?.key) ? ctx.cur.key : all[0].sheet;
    if (sheet !== ctx.cur?.key) showSheet(sheet);
    if (app.tool !== 'select') setTool('select');
    setSelection(all.filter((m) => m.sheet === sheet).map((m) => m.id));
    renderMarkProps(); view.overlayOnly();
  }

  /** Quantities by bid area: each area's items (its own totals and costs) and a subtotal row. */
  function buildAreaTable() {
    const head = [t('qty.area.col'), t('qty.col.item'), t('qty.col.qty'), t('qty.col.unit'), t('qty.col.total')];
    const items = new Map(model.state.items.map((i) => [i.id, i]));
    const body = [];
    for (const { area, est: e } of areaEstimates(model.state)) {
      const name = area ? (area.alt ? t('qty.alt.row', { name: area.name, kind: t('alt.' + area.alt).toLowerCase() }) : area.name) : t('area.none');
      for (const r of e.rows) {
        if ((r.kind !== 'item' && r.kind !== 'condition') || !r.marks) continue;      // a second condition (T8) on its own row
        const it = items.get(r.itemId);
        const tr = el('tr', { className: 'is-item' + (app.hl === r.itemId ? ' is-hl' : ''), dataset: { qtyRow: r.itemId, qtyArea: area?.id || '' } },
          el('td', { className: 'tl' }, name), el('td', { className: 'tl' }, el('span', { className: 'tc-chip', style: { background: it.color } }), r.cond ? t('qty.cond.name', { item: r.name, type: TYPE_LABELS[r.cond].toLowerCase() }) : r.name),
          el('td', {}, U.fixed(r.qty, (r.cond || it.type) === 'count' ? 0 : 2)), el('td', { className: 'tl' }, r.unit), el('td', {}, U.formatCents(r.total)));
        tr.addEventListener('click', () => { setActive(r.itemId); if (area) setCurArea(area.id); });
        body.push(tr);
      }
      body.push(el('tr', { className: 'is-sub', dataset: { qtyAreaTotal: area?.id || '' } }, el('td', { className: 'tl', colSpan: 4 }, t('qty.area.subtotal', { area: name })), el('td', {}, U.formatCents(e.total))));
    }
    // T17: the alternates and what each does to the base bid
    const alts = alternates(model.state);
    if (alts.length) {
      body.push(el('tr', { className: 'is-sub', dataset: { qtyBase: '' } }, el('td', { className: 'tl', colSpan: 4 }, t('qty.alt.base')), el('td', {}, U.formatCents(ctx.est.total))));
      for (const a of alts) body.push(el('tr', { className: 'is-alt', dataset: { qtyAlt: a.area.id } }, el('td', { className: 'tl', colSpan: 4 }, t('qty.alt.row', { name: a.area.name, kind: t('alt.' + a.alt).toLowerCase() })), el('td', {}, (a.amount > 0 ? '+' : a.amount < 0 ? '−' : '') + U.formatCents(Math.abs(a.amount)))));
    }
    ui.qtyTable.replaceChildren(el('thead', {}, el('tr', {}, head.map((h, i) => el('th', { scope: 'col', className: [0, 1, 3].includes(i) ? 'tl' : '' }, h)))),
      el('tbody', {}, body.length ? body : el('tr', {}, el('td', { colSpan: head.length, className: 'tl' }, t('qty.area.empty')))));
  }

  return { areaSel, inArea, renderAreas, setCurArea, newArea, manageAreas, areaField, groupField, renderGroups, buildAreaTable };
}
