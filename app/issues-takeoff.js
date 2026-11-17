/* SPDX-License-Identifier: Apache-2.0 */
/**
 * issues-takeoff.js: TakeoffCraft's side of the issue history (0.10 BK.48; session bk-r3-stages-10). The model, the changelog and
 * the panel are the shared lib's (issuelog/). The history is kept in the takeoff file under `issuelog` (one undo step per change;
 * older builds ignore the key). A sheet's print = the marks measured on it, so "changes since" tells which sheets were measured
 * again after an issue. An issue history saved from BimCraft or MarkupCraft (`*.issues.json`) is read in with Read an issue history.
 *
 *   takeoffSheets(sheets, marks) → [{ id, number, title, hash }]
 *   mountTakeoffIssues({ root, t, model, sheets() → [{ key, title }], goTo(key), download(data, name, type) }) → { panel, render } | null
 */
import { mountIssuePanel } from './issuelog/panel.js';
import { fileHost, sheetId } from './issuelog/host.js';
import { sheetPrint } from './issuelog/history.js';

export function takeoffSheets(sheets, marks) {
  return sheets.map((s) => ({ id: sheetId(s.key), number: '', title: s.title || '', hash: sheetPrint({ sheet: s.key }, marks.filter((m) => m.sheet === s.key).map((m) => JSON.stringify(m))) }));
}

export function mountTakeoffIssues({ root, t, model, sheets, goTo = null, download }) {
  const box = root?.querySelector('[data-issues]');
  if (!box) return null;
  const host = fileHost({
    t, app: 'takeoffcraft', read: () => model.state.issuelog || null,
    write: (history, label) => { model.change(label || t('issues.title'), (s) => { s.issuelog = history; }); },
    sheets: () => takeoffSheets(sheets(), model.state.marks || []),
    cls: { button: 'btn-line btn-sm-cc', input: 'tc-input', table: 'tc-table', muted: 'tc-muted', note: 'tc-note' },
    download: (name, data, type) => download(data, name, type), today: () => new Date().toISOString().slice(0, 10), who: () => '',
    fileBase: () => String(model.state.name || 'takeoff'),
    openSheet: goTo ? (id) => { const s = sheets().find((x) => sheetId(x.key) === id); if (s) goTo(s.key); } : undefined,
  });
  const panel = mountIssuePanel(box, host);
  const render = () => { if (box.isConnected && root.querySelector('[data-issues-details]')?.open) panel.render(); };
  root.querySelector('[data-issues-details]')?.addEventListener('toggle', (e) => { if (e.target.open) panel.render(); });
  model.on?.((why) => { if (why === 'change' || why === 'load') render(); });
  return { panel, render, host };
}
