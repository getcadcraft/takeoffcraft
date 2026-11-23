/* SPDX-License-Identifier: Apache-2.0 */
/**
 * scales-ui.js: takeoffcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountScales(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el, ask } from './ui-util.js';
import { t } from './i18n.js';
import * as U from './units.js';
import { sheetScale, pageText } from './scaletext.js';

export function mountScales(ctx) {
  const { ST, ui, model, isCad, status, busy, scaleText, renderSheetBar, root } = ctx;

  // preset scales
  ui.preset.append(el('option', { value: 'cal', disabled: true, hidden: true }, t('x.calibrated')));
  ui.preset.append(el('option', { value: 'drawing', disabled: true, hidden: true }, t('cad.scale.fromdrawing')));
  ui.preset.append(el('option', { value: '__detect' }, t('scale.detect')));
  for (const [group, list] of U.SCALE_GROUPS) ui.preset.append(el('optgroup', { label: group }, list.map(([key, label]) => el('option', { value: key }, label))));
  ui.preset.addEventListener('change', async () => {
    if (!ST.cur) return;
    const key = ui.preset.value;
    if (key === '__detect') { renderSheetBar(); await detectScales(); return; }
    if (!U.PRESETS.has(key)) return;
    if (!(await confirmRescale())) { renderSheetBar(); return; }
    const p = U.PRESETS.get(key);
    model.setScale(ST.cur.key, U.scaleRecord({ method: 'preset', preset: key, ftPerUnit: U.presetFtPerUnit(key, ST.cur.info.userUnit), label: p.label }), t('sheetbar.scale', { scale: p.label }));
    status(t('scale.set', { scale: p.label }));
  });

  /** T20: read every sheet's text for its scale ("1/4" = 1'-0"", "1:100"); a dialog to apply them, one undo step. */
  async function detectScales() {
    if (!ST.sheets.length) return;
    busy(t('scale.detect.busy'));
    const found = [];
    try {
      for (const s of ST.sheets) {
        let r;
        try { r = isCad(s.file) && s.info.cad.kind === 'model' ? { preset: null, why: 'none', others: [] } : sheetScale(pageText(await (await s.file.doc.getPage(s.info.index + 1)).getTextContent())); } catch { r = { preset: null, why: 'none', others: [] }; }
        found.push({ s, r, cur: model.scaleOf(s.key) });
      }
    } finally { busy(null); }
    const rows = found.map(({ s, r, cur: sc }) => {
      const same = sc?.method === 'preset' && sc.preset === r.preset;
      const marks = r.preset && sc && !same ? model.marksOn(s.key).filter((m) => m.kind !== 'count').length : 0;
      const cb = el('input', { type: 'checkbox', disabled: !r.preset || same, checked: !!r.preset && !sc, dataset: { detectFor: s.key } });
      const what = !r.preset ? t(r.why === 'nts' ? 'scale.detect.nts' : 'scale.detect.none') : same ? t('scale.detect.same', { scale: r.label })
        : t('scale.detect.found', { scale: r.label }) + (r.others.length ? ' ' + t('scale.detect.others', { list: r.others.map((k) => U.PRESETS.get(k).label).join(', ') }) : '') + (marks ? ' ' + t('scale.detect.remeasure', { n: marks }) : '');
      return { s, r, cb, li: el('li', {}, el('label', { className: 'tc-detect-row' }, cb, el('span', { className: 'tc-detect-name' }, s.title),
        el('span', { className: 'tc-detect-now' }, sc ? scaleText(sc, s.info.userUnit) : t('x.noscale')), el('span', { className: 'tc-detect-what' + (r.others.length ? ' is-warn' : '') }, what))) };
    });
    const n = found.filter((f) => f.r.preset).length;
    const choice = await ask(root, {
      title: t('scale.detect.title'), text: n ? t('scale.detect.text', { n, total: ST.sheets.length }) : t('scale.detect.nothing'),
      body: el('ul', { className: 'tc-detect' }, rows.map((x) => x.li)),
      buttons: n ? [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('scale.detect.apply'), 'btn-plot']] : [['cancel', t('btn.close'), 'btn-plot']],
    });
    if (choice !== 'ok') return;
    const map = {};
    for (const x of rows) if (x.cb.checked && x.r.preset) {
      const p = U.PRESETS.get(x.r.preset);
      map[x.s.key] = U.scaleRecord({ method: 'preset', preset: p.key, ftPerUnit: U.presetFtPerUnit(p.key, x.s.info.userUnit), label: p.label });
    }
    if (model.setScales(map)) status(t('scale.detect.done', { n: Object.keys(map).length }), 9000);
  }

  async function confirmRescale() {
    const sc = model.scaleOf(ST.cur.key);
    const n = model.marksOn(ST.cur.key).filter((m) => m.kind !== 'count').length;
    if (!sc || !n) return true;
    return (await ask(root, {
      title: t('rescale.title'),
      text: t('rescale.text', { n }),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('rescale.ok'), 'btn-plot']],
    })) === 'ok';
  }

  return { confirmRescale };
}
