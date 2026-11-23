/* SPDX-License-Identifier: Apache-2.0 */
/**
 * item-props-ui.js: takeoffcraft.js's 3 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountItemProps(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import * as U from './units.js';
import { TYPES, TYPE_LABELS, csiOk, itemVars, VARS, VAR_HELP } from './model.js';
import { el, icon, ask } from './ui-util.js';

export function mountItemProps(ctx) {
  const { ST, ui, model, app, status, fieldUnit, lenField, lenHint, ftIn, keepFocus, fieldRow, textInput, refresh, root } = ctx;

  function renderItemProps() {
    const it = app.active && model.item(app.active);
    ui.itemSec.hidden = !it;
    if (!it) { ui.itemProps.replaceChildren(); return; }
    keepFocus(ui.itemProps, () => buildItemProps(it));
  }

  function buildItemProps(it) {
    ui.itemH.textContent = t('item.h.name', { item: it.name });
    const id = it.id;
    const nMarks = model.state.marks.filter((m) => m.item === id && m.kind === it.type).length;
    const lu = U.lengthUnitOf(it.unit);
    const fail = (input, msg) => { input.classList.add('is-invalid'); status(msg, 8000); };
    const commit = (patch, label) => { try { model.updateItem(id, patch, label); } catch (err) { status(err.message); renderItemProps(); } };

    const gridApply = {};   // grid row id → (text, node) the same handlers the old form used
    const GP = window.ccPropGrid ? [] : null;   // 0.8 PANEL-COMPACT: the simple fields go in the shared grid where the shell has it
    let rows = [];
    if (GP) {
      const typeLocked = nMarks > 0;
      GP.push({ id: 'name', category: t('item.grid.item'), label: t('item.f.name'), type: 'text', value: it.name, maxLength: 200 },
        { id: 'type', category: t('item.grid.item'), label: t('item.f.type'), type: 'select', value: it.type, readonly: typeLocked, hint: typeLocked ? t('item.type.locked') : '', options: TYPES.map((ty) => ({ value: ty, label: TYPE_LABELS[ty] })) },
        { id: 'color', category: t('item.grid.item'), label: t('item.f.color'), type: 'color', value: it.color.toLowerCase() },
        { id: 'unit', category: t('item.grid.item'), label: t('item.f.unit'), type: 'select', value: it.unit, options: U.unitsFor(it.type, [it.unit]).map((u) => ({ value: u, label: t('unit.option', { unit: U.UNITS[u].label, name: U.UNITS[u].name }) })) });
    } else {
      const name = textInput('tc-i-name', 'name', it.name, (v, n) => { if (!v.trim()) return fail(n, t('item.err.name')); commit({ name: v }, t('undo.item.rename')); }, { maxlength: 200 });
      const type = el('select', { className: 'tc-select', id: 'tc-i-type', dataset: { field: 'type' }, disabled: nMarks > 0, title: nMarks ? t('item.type.locked') : '' },
        TYPES.map((ty) => el('option', { value: ty, selected: ty === it.type }, TYPE_LABELS[ty])));
      type.addEventListener('change', () => commit({ type: type.value, unit: U.defaultUnitFor(type.value) }, t('undo.item.type')));
      const color = el('input', { type: 'color', className: 'tc-input', id: 'tc-i-color', dataset: { field: 'color' }, value: it.color.toLowerCase() });
      color.addEventListener('change', () => commit({ color: color.value }, t('undo.item.color')));
      const unit = el('select', { className: 'tc-select', id: 'tc-i-unit', dataset: { field: 'unit' } }, U.unitsFor(it.type, [it.unit]).map((u) => el('option', { value: u, selected: u === it.unit }, t('unit.option', { unit: U.UNITS[u].label, name: U.UNITS[u].name }))));
      unit.addEventListener('change', () => commit({ unit: unit.value }, t('undo.item.unit')));
      rows = [...fieldRow(t('item.f.name'), name), ...fieldRow(t('item.f.type'), type), ...fieldRow(t('item.f.color'), color), ...fieldRow(t('item.f.unit'), unit)];
    }
    const typed = it.type === 'fixed';
    if (typed) rows.push(...ctx.fixedFields(it, commit, fail));                 // TK.5+: typed, not drawn
    else rows.push(el('span', { className: 'k', id: 'tc-i-also-l' }, t('item.f.also')), ctx.condFields(it));
    if (it.type !== 'count' && !typed) {
      const fu = fieldUnit(lu), hv = it.heightFt ? lenField(it.heightFt, fu) : '';
      const applyHeight = (v, n) => {
        if (!v.trim()) return commit({ heightFt: 0 }, t('undo.item.height'));
        const r = U.parseLength(v, { defaultUnit: fu });
        if (!r.ok) return fail(n, r.error);
        commit({ heightFt: r.ft }, t('undo.item.height'));
      };
      if (GP) GP.push({ id: 'height', category: t('item.grid.measure'), label: it.type === 'linear' ? t('item.f.height') : t('item.f.depth'), type: 'text', value: hv, hint: lenHint(fu, 'height') });
      else rows.push(...fieldRow(it.type === 'linear' ? t('item.f.height') : t('item.f.depth'), textInput('tc-i-height', 'height', hv, applyHeight, { placeholder: lenHint(fu, 'height') })));
      gridApply.height = applyHeight;
    }
    if (it.type === 'area') rows.push(...ctx.backoutFields(it));
    if (it.type !== 'count' && !typed) rows.push(...ctx.pitchFields(it));
    rows.push(...ctx.tempFields(it, commit, fail, GP, gridApply));               // 0.9: a temperature spec on any item (a grid row beside the height, else a form row)
    const shape = it.type !== 'count' && !typed ? el('div', { className: 'tc-props' }, ctx.shapeFields(it, lu, fail)) : null;
    const crewLab = it.crew ? U.rateInput(ST.est.rows.find((r) => r.kind === 'item' && r.itemId === it.id)?.lab ?? 0) : null;
    const ul = U.UNITS[it.unit].label;
    const applyWaste = (v, n) => { const r = U.parsePercent(v); if (!r.ok) return fail(n, r.error); commit({ waste: r.bp }, t('undo.item.waste')); };
    const applyMat = (v, n) => { const r = U.parseRate(v); if (!r.ok) return fail(n, r.error); commit({ mat: r.rate4 }, t('undo.item.mat')); };
    const applyLab = (v, n) => { const r = U.parseRate(v); if (!r.ok) return fail(n, r.error); commit({ lab: r.rate4 }, t('undo.item.lab')); };
    const applyCsi = (v, n) => {           // TK.4: groups the workbook's "By division"
      const x = v.trim().replace(/\s+/g, ' ');
      if (x && !csiOk(x)) return fail(n, t('item.csi.err'));
      commit({ csi: x || undefined }, t('undo.item.csi'));
    };
    if (GP) {
      const C = t('item.grid.cost');
      GP.push({ id: 'waste', category: C, label: t('item.f.waste'), type: 'text', value: U.percentInput(it.waste) },
        { id: 'mat', category: C, label: t('item.f.mat', { unit: ul }), type: 'text', value: U.rateInput(it.mat) },
        { id: 'lab', category: C, label: t('item.f.lab', { unit: ul }), type: 'text', value: it.crew ? crewLab : U.rateInput(it.lab), readonly: !!it.crew, hint: it.crew ? t('crew.lab.locked') : '' },
        { id: 'csi', category: C, label: t('item.f.csi'), type: 'text', value: it.csi || '', maxLength: 11, hint: t('item.csi.ph') });
      Object.assign(gridApply, { waste: applyWaste, mat: applyMat, lab: applyLab, csi: applyCsi, name: (v, n) => { if (!v.trim()) return fail(n, t('item.err.name')); commit({ name: v }, t('undo.item.rename')); } });
    } else {
      const waste = textInput('tc-i-waste', 'waste', U.percentInput(it.waste), applyWaste, { inputmode: 'decimal' });
      const mat = textInput('tc-i-mat', 'mat', U.rateInput(it.mat), applyMat, { inputmode: 'decimal' });
      const lab = textInput('tc-i-lab', 'lab', U.rateInput(it.lab), applyLab, { inputmode: 'decimal' });
      if (it.crew) { lab.disabled = true; lab.title = t('crew.lab.locked'); lab.value = crewLab; }
      rows.push(...fieldRow(t('item.f.waste'), waste), ...fieldRow(t('item.f.mat', { unit: ul }), mat), ...fieldRow(t('item.f.lab', { unit: ul }), lab));
    }
    rows.push(...ctx.crewFields(it, commit, fail));
    if (!GP) rows.push(...fieldRow(t('item.f.csi'), textInput('tc-i-csi', 'csi', it.csi || '', applyCsi, { placeholder: t('item.csi.ph'), maxlength: 11 })));

    // measured values
    const tq = ST.qmap.get(id);
    const v = itemVars(it, tq);
    const out = [el('p', { className: 'tc-props-sub' }, t('item.measured'))];
    const kv = (k, val) => [el('span', { className: 'k' }, k), el('span', { className: 'v' }, val)];
    const lunit = lu === 'm' ? 'm' : 'LF';
    if (it.type === 'linear') {
      out.push(...kv(t('item.m.length'), U.fixed(v.L, 2) + ' ' + lunit + (lu === 'ft' ? '  (' + ftIn(tq.lengthFt) + ')' : '')), ...kv(t('item.m.runs'), String(v.N)));
      if (it.heightFt > 0) out.push(...kv(t('item.m.wall'), U.fixed(v.A, 2) + ' ' + U.areaUnitOf(it.unit)));
    } else if (it.type === 'area') {
      out.push(...kv(t('item.m.area'), U.fixed(v.A, 2) + ' ' + U.UNITS[it.unit].label), ...kv(t('item.m.perimeter'), U.fixed(v.P, 2) + ' ' + lunit), ...kv(t('item.m.areas'), String(v.N)));
    } else if (typed) out[0].textContent = t('item.typed.sub');            // nothing measured: the quantity is the one typed above
    else out.push(...kv(t('item.m.count'), String(v.N)));
    if (tq.unscaled) out.push(el('p', { className: 'tc-field-err' }, t('item.unscaled', { n: tq.unscaled })));

    // assembly
    const comps = el('div', { className: 'tc-comps' },
      el('div', { className: 'tc-comps-head' }, el('h3', { className: 'tc-h' }, t('asm.h')),
        el('button', { type: 'button', className: 'tc-linkbtn', dataset: { compAdd: id }, onclick: () => { const c = model.addComponent(id, { name: t('comp.default'), unit: 'EA', formula: VARS[it.type][0] }); setTimeout(() => ui.itemProps.querySelector('[data-field="c:' + c + ':name"]')?.select(), 0); } }, icon('plus-lg'), ' ' + t('asm.add'))),
      el('p', { className: 'tc-vars' }, t('asm.vars.a'), ' ', VARS[it.type].flatMap((k, i) => [i ? ', ' : '', el('code', {}, k), ' ' + VAR_HELP[it.type][k]]), t('asm.vars.b'), ' ',
        el('code', {}, it.type === 'linear' ? 'ceil(L / 1.333) + N' : it.type === 'area' ? 'ceil(A / 32 * 1.1)' : typed ? 'Q * 1.25' : 'N * 2'), '.'),
      it.components.map((c) => ctx.compEditor(it, c, v)));

    const actions = el('div', { className: 'tc-actions' },
      el('button', { type: 'button', className: 'tc-linkbtn', dataset: { itemCopy: id }, onclick: () => ctx.copyItem(id) }, t('item.copy')),
      el('button', { type: 'button', className: 'tc-linkbtn', dataset: { itemDup: id }, onclick: () => ctx.duplicateItem(id) }, t('item.dup')),
      el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => model.moveItem(id, -1) }, t('item.up')),
      el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => model.moveItem(id, 1) }, t('item.down')),
      el('button', { type: 'button', className: 'tc-linkbtn is-danger', onclick: () => deleteItem(it) }, t('item.delete')));
    let gridHost = null;
    if (GP) {
      gridHost = el('div', { className: 'tc-grid' });
      ccPropGrid.create(gridHost, { label: t('item.grid.label'), key: 'item', rows: GP, onChange: (rid, val) => {
        // the person's text goes through the same readers as the form; a refusal marks the box and says why in the status line
        const node = gridHost.querySelector('[data-pg-row="' + rid + '"]');
        if (rid === 'type') return commit({ type: val, unit: U.defaultUnitFor(val) }, t('undo.item.type'));
        if (rid === 'color') return commit({ color: val }, t('undo.item.color'));
        if (rid === 'unit') return commit({ unit: val }, t('undo.item.unit'));
        const fn = gridApply[rid]; if (fn) fn(String(val), node || { classList: { add() {} } });
      } });
      gridHost.querySelectorAll('[data-pg-row]').forEach((n) => { n.dataset.field = n.dataset.pgRow; });   // keepFocus finds the box again by it
    }
    ui.itemProps.replaceChildren(...(gridHost ? [gridHost] : []), el('div', { className: 'tc-props' }, rows), ...(shape ? [shape] : []), el('div', { className: 'tc-props' }, out), comps, actions);
  }

  async function deleteItem(it) {
    const n = model.state.marks.filter((m) => m.item === it.id).length;
    const ok = (await ask(root, {
      title: t('item.del.title', { item: it.name }),
      text: t('item.del.text', { n }),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('item.delete'), 'btn-plot']],
    })) === 'ok';
    if (!ok) return;
    model.removeItem(it.id);
    if (app.active === it.id) app.active = model.state.items[0]?.id || null;
    if (app.hl === it.id) app.hl = null;
    refresh();
  }

  return { renderItemProps };
}
