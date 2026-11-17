/* SPDX-License-Identifier: Apache-2.0 */
/**
 * xlsx.js — TakeoffCraft's door to the one workbook writer (tables/xlsx.js; canonical lib/tables/xlsx.js, synced by
 * `node tools/tables/sync.mjs`). Until 0.10 BK.39 the writer itself lived here (0.4 K6); it is now shared with BimCraft, and this
 * file only says who writes the workbook and in which currency. The exports and their behaviour are the ones it always had.
 *
 *   const bytes = await writeXlsx([{ name, cols: [widths], rows: [[cell, …], …], freeze: 1 }], { title })
 *   cell = null | 'text' | 12.5 | { v, f (formula, no "="), s (style key) }
 */
import { currencySymbol } from './units.js';
import { writeXlsx as write } from './tables/xlsx.js';

export { zip, crc32, STYLE, xmlText, colName, ref, sheetName } from './tables/xlsx.js';

/** sheets: [{ name, rows, cols?, freeze? }] → .xlsx bytes. */
export const writeXlsx = (sheets, { title = '', compress = true } = {}) => write(sheets, { title, compress, creator: 'TakeoffCraft', currency: currencySymbol(), stamp: new Date() });
