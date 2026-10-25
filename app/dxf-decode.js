/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — code page names and escape syntax; nothing here is read by a person. */
/**
 * dxf-decode.js — a DXF file's bytes → text, and its text escapes (0.7 D7.16). DOM-free.
 *
 * An ASCII DXF has no encoding of its own: R2007 (AC1021) and later files are UTF-8, older ones are in the code page the
 * header names ($DWGCODEPAGE: ANSI_1251 Cyrillic, ANSI_949 Korean, ANSI_936 Simplified Chinese, ANSI_932 Japanese …). Many
 * programs write UTF-8 under an older tag as well, so a file that is valid UTF-8 and names a Western code page (or none) is
 * read as UTF-8. Older multibyte text can also come as \M+ escapes inside a string (a double-byte code in hex).
 *
 *   decodeDxfBytes(bytes) → { text, encoding }       the file as text
 *   unescapeText(s, codepage = '')                    \U+XXXX and \M+ escapes → characters
 */

/** $DWGCODEPAGE name → TextDecoder label (single-byte ones only matter for Cyrillic, Central European, Greek …). */
const LABELS = {
  ANSI_1250: 'windows-1250', ANSI_1251: 'windows-1251', ANSI_1252: 'windows-1252', ANSI_1253: 'windows-1253', ANSI_1254: 'windows-1254',
  ANSI_1255: 'windows-1255', ANSI_1256: 'windows-1256', ANSI_1257: 'windows-1257', ANSI_1258: 'windows-1258', ANSI_874: 'windows-874',
  ANSI_932: 'shift_jis', DOS932: 'shift_jis', ANSI_936: 'gbk', GB2312: 'gbk', ANSI_949: 'euc-kr', KSC5601: 'euc-kr', ANSI_950: 'big5', BIG5: 'big5',
  DOS866: 'ibm866', 'ISO8859-2': 'iso-8859-2', 'ISO8859-3': 'iso-8859-3', 'ISO8859-4': 'iso-8859-4', 'ISO8859-5': 'iso-8859-5',
  'ISO8859-6': 'iso-8859-6', 'ISO8859-7': 'iso-8859-7', 'ISO8859-8': 'iso-8859-8', 'ISO8859-9': 'iso-8859-9', 'MAC-ROMAN': 'macintosh',
  'ISO8859-1': 'windows-1252', ASCII: 'windows-1252', DOS437: 'ibm437', DOS850: 'ibm850', DOS852: 'ibm852', DOS855: 'ibm855', DOS857: 'ibm857',
};
const WESTERN = new Set(['', 'ANSI_1252', 'ASCII', 'ISO8859-1', 'UNDEFINED']);

/** The header's $ACADVER and $DWGCODEPAGE, found in the bytes (ASCII; the header comes first in any DXF). */
export function dxfHeaderInfo(bytes) {
  const head = new TextDecoder('latin1').decode(bytes.subarray(0, Math.min(bytes.length, 65536)));
  const grab = (name) => { const m = new RegExp('\\$' + name + '\\r?\\n\\s*\\d+\\r?\\n([^\\r\\n]*)', 'i').exec(head); return m ? m[1].trim() : ''; };
  return { version: grab('ACADVER').toUpperCase(), codepage: grab('DWGCODEPAGE').toUpperCase() };
}

export function decodeDxfBytes(bytes) {
  const { version, codepage } = dxfHeaderInfo(bytes);
  const utf8 = () => { try { return new TextDecoder('utf-8', { fatal: true }).decode(bytes); } catch { return null; } };
  const modern = /^AC10(2[1-9]|[3-9]\d)$/.test(version) || /^AC1[1-9]\d\d$/.test(version) && version > 'AC1020';
  if (modern || WESTERN.has(codepage) || !LABELS[codepage]) {
    const u = utf8();
    if (u !== null) return { text: u, encoding: 'utf-8' };
    return { text: new TextDecoder(LABELS[codepage] || 'windows-1252').decode(bytes), encoding: LABELS[codepage] || 'windows-1252' };
  }
  // an older file naming a non-Western code page: that code page, unless the bytes are UTF-8 with non-ASCII text in them and
  // would not make sense in it (a clean UTF-8 reading of multi-byte text is almost never also valid in a legacy code page)
  const label = LABELS[codepage];
  if (/^(windows-1251|windows-125[0-8]|iso-8859-\d|ibm866|windows-874)$/.test(label)) {
    const u = utf8();
    if (u !== null && /[^\x00-\x7f]/.test(u) && !/[\u0080-ÿ]{2}/.test(u)) return { text: u, encoding: 'utf-8' };
  }
  return { text: new TextDecoder(label).decode(bytes), encoding: label };
}

/** \M+ code groups 1–5 → the double-byte code page they stand for. */
const MIF = { 1: 'shift_jis', 2: 'big5', 3: 'euc-kr', 4: 'johab', 5: 'gbk' };
const decoders = new Map();
function dbcs(label, hi, lo) {
  let d = decoders.get(label);
  if (d === undefined) { try { d = new TextDecoder(label); } catch { d = null; } decoders.set(label, d); }
  if (!d) return null;
  const s = d.decode(Uint8Array.of(hi, lo));
  return s && !s.includes('�') && s.length <= 2 ? s : null;
}

/** \U+XXXX and \M+ escapes → characters; an escape that does not decode stays as it was. */
export function unescapeText(s, codepage = '') {
  if (s.indexOf('\\') < 0) return s;
  const cpLabel = LABELS[String(codepage).toUpperCase()];
  return s
    .replace(/\\U\+([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\\M\+([1-5])([0-9a-fA-F]{4})|\\M\+([0-9a-fA-F]{4})/gi, (m, g, h5, h4) => {
      const h = h5 || h4, hi = parseInt(h.slice(0, 2), 16), lo = parseInt(h.slice(2), 16);
      const label = g ? MIF[g] : /^(shift_jis|gbk|euc-kr|big5)$/.test(cpLabel || '') ? cpLabel : 'gbk';
      return dbcs(label, hi, lo) ?? m;
    });
}
