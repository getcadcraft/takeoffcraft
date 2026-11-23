/* SPDX-License-Identifier: Apache-2.0 */
/**
 * act-ui.js: takeoffcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountActions(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';

export function mountActions(ctx) {
  const { model, view, status, host, PDF_TYPES, PROJECT_TYPES, openHostFiles, saveProject, saveOlder, cancelDraft, deleteSelected, toggle3d, endPaste, copySelection, cutSelection, startPaste, duplicateSelection, selectAll, selectNone, openCompare, nextFlag, exportXlsx, exportCsv, exportMaterials, exportSpots, exportPdf, exportEmbed, cadCount, bidDialog, levelDialog, newTakeoff, toggleArc, toggleDeduct, root } = ctx;

  const actions = {
    'cad-count': () => cadCount(),
    'open-pdf': async () => { const l = await host.openFile({ types: PDF_TYPES, multiple: true }); if (l.length) await openHostFiles(l); },
    'open-project': async () => { const l = await host.openFile({ types: PROJECT_TYPES }); if (l.length) await openHostFiles(l); },
    'save-project': saveProject,
    'save-older': saveOlder,   // 0.11 DC.27
    'export-xlsx': exportXlsx,
    'export-csv': exportCsv,
    'export-materials': exportMaterials,
    'export-spots': exportSpots,
    'export-pdf': exportPdf,
    'export-bid': bidDialog,
    'export-level': levelDialog,
    'export-embed': exportEmbed,
    undo: () => { endPaste(true); cancelDraft(); const l = model.undo(); status(l ? t('undo.did', { what: l }) : t('undo.nothing')); },
    redo: () => { endPaste(true); cancelDraft(); const l = model.redo(); status(l ? t('redo.did', { what: l }) : t('redo.nothing')); },
    delete: () => { endPaste(true); deleteSelected(); },
    copy: () => copySelection(),
    cut: () => { endPaste(true); cutSelection(); },
    paste: () => startPaste(false),
    'paste-in-place': () => startPaste(true),
    duplicate: duplicateSelection,
    'select-all': selectAll,
    'select-none': () => { selectNone(); status(t('sel.none')); },
    'fit-page': () => view.fit('page'),
    'fit-width': () => view.fit('width'),
    'new-takeoff': newTakeoff,
    arc: () => toggleArc(),
    deduct: () => toggleDeduct(),
    compare: openCompare,
    'next-flag': nextFlag,
    'view-3d': toggle3d,
  };
  const closeMenus = () => { for (const d of root.querySelectorAll('details.tc-menu[open]')) d.open = false; };
  for (const b of root.querySelectorAll('[data-act]')) b.addEventListener('click', () => { closeMenus(); actions[b.dataset.act]?.(); });
  document.addEventListener('click', (e) => { for (const d of root.querySelectorAll('details.tc-menu[open]')) if (!d.contains(e.target)) d.open = false; });
  root.addEventListener('keydown', (e) => { if (e.key === 'Escape' && root.querySelector('details.tc-menu[open]')) { e.stopPropagation(); const d = root.querySelector('details.tc-menu[open]'); d.open = false; d.querySelector('summary').focus(); } }, true);

  return { actions };
}
