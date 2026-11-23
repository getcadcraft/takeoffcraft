/* SPDX-License-Identifier: Apache-2.0 */
/**
 * layers-ui.js: takeoffcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountLayers(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';

export function mountLayers(ctx) {
  const { ST, isCad, view, root } = ctx;

  // ---- a drawing's layers (0.7 TD.5): on and off, the file's choice respected; what is hidden is not counted unless chosen
  const layersMenu = root.querySelector('[data-layers-menu]');
  function renderLayers() {
    if (!layersMenu) return;
    const isDwg = !!ST.cur && isCad(ST.cur.file);
    layersMenu.hidden = !isDwg;
    if (!isDwg || !layersMenu.open) return;
    const box = layersMenu.querySelector('[data-layers-list]');
    const cad = ST.cur.file.cad, ix = cad.index(), here = cad.sheets[ST.cur.info.index];
    const counts = new Map();
    for (const e of ST.cadMod.sheetRefs(here, ix)) counts.set(e.ref.layer, (counts.get(e.ref.layer) || 0) + 1);
    const names = [...new Set([...cad.drawing.layers.map((l) => l.name), ...counts.keys()])].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    const change = (name, on) => {
      const fileHidden = !!(ix.layers.get(name)?.off || ix.layers.get(name)?.frozen);
      if (on === !fileHidden) cad.layerOverride.delete(name); else cad.layerOverride.set(name, on);
      view.rerender(); renderLayers();
    };
    box.replaceChildren(
      el('div', { className: 'tc-layers-actions' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => { for (const n of names) if (!ST.cadMod.layerShown(cad, n)) cad.layerOverride.set(n, true); view.rerender(); renderLayers(); } }, t('cad.layers.showall')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', disabled: !cad.layerOverride.size, onclick: () => { cad.layerOverride.clear(); view.rerender(); renderLayers(); } }, t('cad.layers.reset'))),
      el('p', { className: 'tc-layers-note' }, t('cad.layers.note')),
      el('ul', { className: 'tc-layers-list' }, names.map((n) => {
        const f = ix.layers.get(n), shown = ST.cadMod.layerShown(cad, n);
        const state = f?.frozen ? t('cad.layers.frozen') : f?.off ? t('cad.layers.off') : '';
        const lay = cad.layerByName.get(n);
        return el('li', {}, el('label', { className: 'tc-layers-row' },
          el('input', { type: 'checkbox', checked: shown, dataset: { layer: n }, onchange: (e) => change(n, e.target.checked) }),
          el('span', { className: 'tc-layers-sw', style: { background: lay && lay.color !== 'ink' ? lay.color : 'currentColor' }, 'aria-hidden': 'true' }),
          el('span', { className: 'tc-layers-name' }, n),
          el('span', { className: 'tc-layers-state' }, [state, cad.layerOverride.has(n) ? t('cad.layers.here') : ''].filter(Boolean).join(', ')),
          el('span', { className: 'tc-layers-n' }, counts.has(n) ? t('cad.layers.n', { n: counts.get(n) }) : '')));
      })));
  }
  layersMenu?.addEventListener('toggle', renderLayers);

  return { renderLayers };
}
