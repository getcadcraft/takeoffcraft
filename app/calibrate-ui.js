/* SPDX-License-Identifier: Apache-2.0 */
/**
 * calibrate-ui.js: takeoffcraft.js's 1 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountCalibrate(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el, ask } from './ui-util.js';
import { t } from './i18n.js';
import * as U from './units.js';

export function mountCalibrate(ctx) {
  const { ST, model, status, confirmRescale, setTool, root } = ctx;

  async function calibrateDialog(a, b) {
    const sc = model.scaleOf(ST.cur.key);
    const input = el('input', { type: 'text', className: 'tc-input', id: 'tc-cal', autocomplete: 'off', spellcheck: false, placeholder: '24\'-6 1/2", 24.5, 7.5 m', dataset: { calInput: '' }, value: sc?.cal?.text || '' });
    let parsed = null;
    const choice = await ask(root, {
      title: t('cal.title'),
      text: t('cal.text'),
      body: el('div', { className: 'tc-ask-field' }, el('label', { for: 'tc-cal' }, t('cal.label')), input,
        el('p', { className: 'tc-note' }, t('cal.note'))),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('cal.ok'), 'btn-plot']],
      focus: '[data-cal-input]',
      onOk: () => {
        const r = U.parseLength(input.value);
        if (!r.ok) return r.error;
        const c = U.calibrate(a, b, r.ft);
        if (!c.ok) return c.error;
        parsed = { ...c, ft: r.ft, text: input.value.trim() };
        return null;
      },
    });
    if (choice !== 'ok' || !parsed) { status(t('cal.canceled')); return; }
    if (!(await confirmRescale())) return;
    const m = U.matchPreset(parsed.ftPerUnit, ST.cur.info.userUnit);
    model.setScale(ST.cur.key, U.scaleRecord({ method: 'calibrated', ftPerUnit: parsed.ftPerUnit, label: U.describeScale(parsed.ftPerUnit, ST.cur.info.userUnit), cal: { a: [a.x, a.y], b: [b.x, b.y], ft: parsed.ft, text: parsed.text } }), 'Calibrate');
    status(m ? t('cal.done.match', { scale: U.describeScale(parsed.ftPerUnit, ST.cur.info.userUnit), preset: m.label }) : t('cal.done', { scale: U.describeScale(parsed.ftPerUnit, ST.cur.info.userUnit) }), 12000);
    setTool('select');
  }

  return { calibrateDialog };
}
