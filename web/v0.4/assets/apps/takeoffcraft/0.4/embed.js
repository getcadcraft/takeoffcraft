/* SPDX-License-Identifier: Apache-2.0 */
/**
 * embed.js — the takeoff saved inside a PDF (0.4 item T10). DOM-free (tested in Node).
 *
 *   embedTakeoff(PDFLib, pdfBytes, takeoffJson, standsFor) → Promise<Uint8Array>
 *       a copy of the PDF (pages untouched) with the takeoff attached as "takeoff.takeoffcraft.json"; an older copy of that
 *       attachment is replaced
 *   readEmbedded(pdfjsDoc) → Promise<{ standsFor, takeoff } | null>
 *
 * A takeoff knows its PDFs by a hash of their bytes. The copy's bytes differ from the original's, so the attachment says
 * which PDF it stands for (`standsFor`, that PDF's hash): opened again, the copy takes that identity, the takeoff's marks
 * land on its pages, and a .takeoff.json saved from either opens on both.
 */

export const EMBED_NAME = 'takeoff.takeoffcraft.json';
export const EMBED_FORMAT = 'takeoffcraft-embedded';

export async function embedTakeoff(PDFLib, bytes, takeoff, standsFor) {
  const { PDFDocument, PDFName, PDFDict, PDFArray } = PDFLib;
  const doc = await PDFDocument.load(bytes, { updateMetadata: false });
  // drop an earlier copy of the takeoff (a PDF that was opened with one inside and saved again)
  const names = doc.catalog.lookupMaybe(PDFName.of('Names'), PDFDict);
  const ef = names?.lookupMaybe(PDFName.of('EmbeddedFiles'), PDFDict);
  const arr = ef?.lookupMaybe(PDFName.of('Names'), PDFArray);
  if (arr) {
    for (let i = arr.size() - 2; i >= 0; i -= 2) {
      const k = arr.get(i);
      if (typeof k?.decodeText === 'function' && k.decodeText() === EMBED_NAME) { arr.remove(i + 1); arr.remove(i); }
    }
  }
  const payload = JSON.stringify({ format: EMBED_FORMAT, version: 1, standsFor, takeoff });
  await doc.attach(new TextEncoder().encode(payload), EMBED_NAME, {
    mimeType: 'application/json', description: 'TakeoffCraft takeoff', creationDate: new Date(), modificationDate: new Date(),   // i18n-ignore: file metadata
  });
  return doc.save({ updateFieldAppearances: false });
}

export async function readEmbedded(doc) {
  let list;
  try { list = await doc.getAttachments(); } catch { return null; }
  if (!list) return null;
  const entries = list instanceof Map ? [...list.entries()] : Object.entries(list);
  const hit = entries.find(([id, a]) => (a?.filename || id) === EMBED_NAME);
  if (!hit) return null;
  let content = hit[1].content;
  if (!content && typeof doc.getAttachmentContent === 'function') {
    const c = await doc.getAttachmentContent(hit[0]);
    content = c instanceof Uint8Array ? c : c?.content;
  }
  if (!content) return null;
  try {
    const j = JSON.parse(new TextDecoder().decode(content));
    if (j?.format !== EMBED_FORMAT || !/^[0-9a-f]{64}$/.test(j.standsFor) || !j.takeoff || typeof j.takeoff !== 'object') return null;
    return { standsFor: j.standsFor, takeoff: j.takeoff };
  } catch { return null; }
}
