/* SPDX-License-Identifier: Apache-2.0 */
/**
 * typein.js — typed lengths and coordinates while drawing a run, an outline or a cut-out (0.4 item T3). DOM-free.
 *
 *   parseEntry(text, ctx) → { ok: true, point: {x, y}, kind } | { ok: false, error: key }
 *
 * What can be typed (lengths as everywhere in TakeoffCraft: 12'-6 1/2", 12.5, 30", 3.2 m; a bare number is feet):
 *   12'6"          direct distance: that far from the last point, toward the pointer          kind 'dist'
 *   12'6"<30       that far at 30° (counter-clockwise from the screen's right, as you see it)   kind 'polar'
 *   @6',-4'        relative: 6' right and 4' down (as you see it) from the last point          kind 'rel'
 *   6',4'  #6',4'  from the run's FIRST point: 6' right, 4' up                                 kind 'abs'
 * Directions are the screen's, so a rotated sheet reads the way it looks. Errors are language-file keys
 * (typein.err.*); the caller words them.
 *
 * ctx: { first, last, cursor ({x, y} PDF user space; cursor may be null), ftPerUnit (the sheet's scale),
 *        linear: [a, b, c, d] — the linear part of the user → screen matrix (screen y down) }
 */

import { parseLength } from './units.js';

/** A length that may be signed or zero (coordinates). → feet | null */
export function signedLength(text) {
  let s = String(text ?? '').trim().replace(/[−–—]/g, '-');
  let sign = 1;
  if (s.startsWith('-')) { sign = -1; s = s.slice(1).trim(); } else if (s.startsWith('+')) s = s.slice(1).trim();
  if (/^0*(\.0*)?\s*('|"|ft|in|m|cm|mm)?$/i.test(s) && /0|\./.test(s)) return 0;
  const r = parseLength(s);
  return r.ok ? sign * r.ft : null;
}

/** The user-space unit vector that points along a screen direction (sx right, sy UP), or null. */
export function screenDir(linear, sx, sy) {
  const [a, b, c, d] = linear;
  const det = a * d - b * c;
  if (!det) return null;
  const px = sx, py = -sy;                        // screen pixels have y down
  const ux = (d * px - c * py) / det, uy = (-b * px + a * py) / det;
  const n = Math.hypot(ux, uy);
  return n ? { x: ux / n, y: uy / n } : null;
}

export function parseEntry(text, ctx) {
  const fail = (error) => ({ ok: false, error });
  const s = String(text ?? '').trim();
  if (!s) return fail('typein.err.read');
  if (!(ctx.ftPerUnit > 0)) return fail('typein.err.noscale');
  const k = 1 / ctx.ftPerUnit;                     // PDF units per foot
  const along = (from, dir, ft) => ({ x: from.x + dir.x * ft * k, y: from.y + dir.y * ft * k });

  if (s.startsWith('@') || s.includes(',')) {
    const rel = s.startsWith('@');
    const body = s.replace(/^[@#]/, '');
    const parts = body.split(',');
    if (parts.length !== 2) return fail('typein.err.read');
    const dx = signedLength(parts[0]), dy = signedLength(parts[1]);
    if (dx === null || dy === null) return fail('typein.err.read');
    const from = rel ? ctx.last : ctx.first;
    if (!from) return fail('typein.err.first');
    if (!dx && !dy) return fail('typein.err.zero');
    const ex = screenDir(ctx.linear, 1, 0), ey = screenDir(ctx.linear, 0, 1);
    if (!ex || !ey) return fail('typein.err.read');
    return { ok: true, kind: rel ? 'rel' : 'abs', point: { x: from.x + (ex.x * dx + ey.x * dy) * k, y: from.y + (ex.y * dx + ey.y * dy) * k } };
  }
  if (!ctx.last) return fail('typein.err.first');
  const lt = s.indexOf('<');
  if (lt >= 0) {
    const r = parseLength(s.slice(0, lt));
    const deg = Number(s.slice(lt + 1).trim().replace(/°$/, ''));
    if (!r.ok || !s.slice(lt + 1).trim() || !Number.isFinite(deg)) return fail('typein.err.read');
    const dir = screenDir(ctx.linear, Math.cos(deg * Math.PI / 180), Math.sin(deg * Math.PI / 180));
    if (!dir) return fail('typein.err.read');
    return { ok: true, kind: 'polar', point: along(ctx.last, dir, r.ft) };
  }
  const r = parseLength(s);
  if (!r.ok) return fail('typein.err.read');
  const c = ctx.cursor;
  const dx = c ? c.x - ctx.last.x : 0, dy = c ? c.y - ctx.last.y : 0, n = Math.hypot(dx, dy);
  if (!(n > 0)) return fail('typein.err.dir');
  return { ok: true, kind: 'dist', point: along(ctx.last, { x: dx / n, y: dy / n }, r.ft) };
}
