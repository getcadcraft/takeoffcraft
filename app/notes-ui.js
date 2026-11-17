/* SPDX-License-Identifier: Apache-2.0 */
/**
 * notes-ui.js: takeoffcraft.js's 8 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountNotes(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el, ask, icon } from './ui-util.js';
import { t } from './i18n.js';
import { NOTE_COLORS, cloudPath } from './pdfmarks.js';

export function mountNotes(mc) {
  const { ui, model, app, view, status, sheetLabel, showSheet, hitPx, tag, keepFocus, renderMarkProps, root } = mc;

  // ---- markups (T22): notes, clouds and highlights with a status; never counted ----
  const NOTE_TOOLS = new Set(['note', 'cloud', 'highlight']);
  async function askNoteText(title, value = '') {
    const ta = el('textarea', { className: 'tc-input', rows: 4, maxlength: 2000, id: 'tc-note-text', dataset: { noteText: '' } });
    ta.value = value;
    let text = null;
    const choice = await ask(root, {
      title, body: el('div', {}, el('label', { for: 'tc-note-text' }, t('note.f.text')), ta),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('note.add'), 'btn-plot']], focus: '#tc-note-text',
      onOk: () => { text = ta.value; return null; },
    });
    return choice === 'ok' ? text : null;
  }
  async function noteAt(p) {
    const sheet = mc.cur;
    const text = await askNoteText(t('note.new.note'));
    if (text === null || mc.cur !== sheet) return;
    if (!text.trim()) { status(t('note.err.empty')); return; }
    app.selNote = model.addNote({ kind: 'note', sheet: sheet.key, pts: [p], text });
    renderNoteProps();
    status(t('note.added.note'));
  }
  async function boxNote(kind, a, b) {
    const sheet = mc.cur;
    const sa = view.toScreen(a), sb = view.toScreen(b);
    if (Math.abs(sa.x - sb.x) < 4 || Math.abs(sa.y - sb.y) < 4) { status(t('note.err.small')); view.overlayOnly(); return; }
    const text = await askNoteText(t('note.new.' + kind));
    if (text === null || mc.cur !== sheet) { view.overlayOnly(); return; }
    app.selNote = model.addNote({ kind, sheet: sheet.key, pts: [a, b], text });
    renderNoteProps();
    status(t('note.added.' + kind));
  }
  /** The markup under a point (the topmost): a note's pin, or inside a cloud's or highlight's box. */
  function noteHit(p) {
    if (!mc.cur) return null;
    const s = view.toScreen(p);
    const list = model.notesOn(mc.cur.key);
    for (let i = list.length - 1; i >= 0; i--) {
      const n = list[i];
      if (n.kind === 'note') { const q = view.toScreen(n.pts[0]); if (Math.hypot(q.x - s.x, q.y - s.y) <= hitPx() + 4) return n; continue; }
      const a = view.toScreen(n.pts[0]), b = view.toScreen(n.pts[1]);
      if (s.x >= Math.min(a.x, b.x) - 3 && s.x <= Math.max(a.x, b.x) + 3 && s.y >= Math.min(a.y, b.y) - 3 && s.y <= Math.max(a.y, b.y) + 3) return n;
    }
    return null;
  }
  function renderNoteProps() {
    const n = app.selNote && model.note(app.selNote);
    if (app.selNote && !n) app.selNote = null;
    ui.noteSec.hidden = !n;
    if (!n) { ui.noteProps.replaceChildren(); return; }
    keepFocus(ui.noteProps, () => {
      const ta = el('textarea', { className: 'tc-input', id: 'tc-n-text', rows: 4, maxlength: 2000, dataset: { field: 'note-text' } });
      ta.value = n.text;
      ta.addEventListener('change', () => model.updateNote(n.id, { text: ta.value }));
      const st = el('select', { className: 'tc-select', id: 'tc-n-status', dataset: { field: 'note-status' } }, ['open', 'answered', 'closed'].map((k) => el('option', { value: k, selected: n.status === k }, t('note.status.' + k))));
      st.addEventListener('change', () => model.updateNote(n.id, { status: st.value }, t('undo.note.status')));
      const del = el('button', { type: 'button', className: 'tc-linkbtn is-danger', dataset: { noteDelete: n.id } }, icon('trash'), ' ' + t('note.delete'));
      del.addEventListener('click', () => { model.removeNote(n.id); app.selNote = null; });
      ui.noteProps.replaceChildren(el('div', { className: 'tc-props' },
        el('span', { className: 'k' }, t('note.f.kind')), el('span', { className: 'v' }, t('tool.' + n.kind)),
        el('span', { className: 'k' }, t('mark.f.sheet')), el('span', { className: 'v' }, sheetLabel(n.sheet)),
        el('label', { for: 'tc-n-status' }, t('note.f.status')), st,
        el('label', { for: 'tc-n-text', className: 'span' }, t('note.f.text')), el('div', { className: 'span' }, ta)), el('p', {}, del));
    });
  }
  function renderNotes() {
    const all = model.state.notes || [];
    ui.notesSec.hidden = !all.length;
    if (!all.length) { ui.notes.replaceChildren(); return; }
    const open = all.filter((n) => n.status === 'open').length;
    ui.notesH.textContent = t('notes.h.n', { n: all.length, open });
    const list = ui.notesOpen.checked ? all.filter((n) => n.status === 'open') : all;
    ui.notes.replaceChildren(...list.map((n) => {
      const b = el('button', { type: 'button', className: 'tc-note-row' + (app.selNote === n.id ? ' is-sel' : ''), dataset: { noteRow: n.id } },
        el('span', { className: 'tc-note-dot', style: { background: NOTE_COLORS[n.kind === 'note' ? n.status : n.kind] } }),
        icon(n.kind === 'note' ? 'chat-left-text' : n.kind === 'cloud' ? 'cloud' : 'highlighter'),
        el('span', { className: 'tc-note-text' }, (n.text.split('\n')[0] || t('note.untitled')).slice(0, 80)),
        el('span', { className: 'tc-note-st is-' + n.status }, t('note.status.' + n.status)));
      b.addEventListener('click', async () => { if (n.sheet !== mc.cur?.key) await showSheet(n.sheet); app.sel = null; app.selNote = n.id; renderMarkProps(); renderNoteProps(); renderNotes(); view.overlayOnly(); });
      return el('li', {}, b);
    }));
  }

  /** Markups on the open sheet, under the marks' handles (drawOverlay). */
  function drawNotesLayer(ctx, S) {
    for (const n of model.notesOn(mc.cur.key)) {
      const sel = app.selNote === n.id;
      ctx.save();
      if (n.kind === 'note') {
        const s = S(n.pts[0]);
        ctx.fillStyle = NOTE_COLORS[n.status];
        ctx.beginPath(); ctx.arc(s.x, s.y, 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#ffffff'; ctx.font = '700 11px Archivo, system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('!', s.x, s.y + 0.5);   // i18n-ignore: a symbol
        const line = (n.text.split('\n')[0] || '').slice(0, 40);
        if (line) { ctx.font = '600 12px Archivo, system-ui, sans-serif'; const w = ctx.measureText(line).width + 10; ctx.fillStyle = mc.colors.sheet; ctx.strokeStyle = NOTE_COLORS[n.status]; ctx.lineWidth = 1; ctx.fillRect(s.x + 12, s.y - 9, w, 18); ctx.strokeRect(s.x + 12, s.y - 9, w, 18); ctx.fillStyle = mc.colors.ink; ctx.textAlign = 'left'; ctx.fillText(line, s.x + 17, s.y + 0.5); }
        if (sel) { ctx.strokeStyle = mc.colors.action; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(s.x, s.y, 12, 0, Math.PI * 2); ctx.stroke(); }
      } else {
        const a = S(n.pts[0]), b = S(n.pts[1]);
        const x0 = Math.min(a.x, b.x), y0 = Math.min(a.y, b.y), x1 = Math.max(a.x, b.x), y1 = Math.max(a.y, b.y);
        if (n.kind === 'highlight') { ctx.globalAlpha = 0.35; ctx.fillStyle = NOTE_COLORS.highlight; ctx.fillRect(x0, y0, x1 - x0, y1 - y0); ctx.globalAlpha = 1; }
        else {
          ctx.strokeStyle = n.status === 'closed' ? NOTE_COLORS.closed : NOTE_COLORS.cloud; ctx.lineWidth = 2;
          ctx.beginPath();
          cloudPath(x0, y0, x1, y1, Math.max(10, Math.min(24, Math.min(x1 - x0, y1 - y0) / 4)), (op, ...v) => (op === 'M' ? ctx.moveTo(...v) : ctx.bezierCurveTo(...v)));
          ctx.closePath(); ctx.stroke();
        }
        const line = (n.text.split('\n')[0] || '').slice(0, 40);
        if (line) tag(ctx, { x: (x0 + x1) / 2, y: y0 - 16 }, line);
        if (sel) { ctx.strokeStyle = mc.colors.action; ctx.lineWidth = 1.5; ctx.setLineDash([5, 4]); ctx.strokeRect(x0 - 6, y0 - 6, x1 - x0 + 12, y1 - y0 + 12); }
      }
      ctx.restore();
    }
    if (app.noteStart && app.cursor && (app.tool === 'cloud' || app.tool === 'highlight')) {
      const a = S(app.noteStart), b = S(app.cursor);
      ctx.save(); ctx.strokeStyle = app.tool === 'cloud' ? NOTE_COLORS.cloud : mc.colors.ink; ctx.lineWidth = 1.5; ctx.setLineDash([6, 4]);
      ctx.strokeRect(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.abs(a.x - b.x), Math.abs(a.y - b.y)); ctx.restore();
    }
  }

  return { NOTE_TOOLS, noteAt, boxNote, noteHit, renderNoteProps, renderNotes, drawNotesLayer };
}
