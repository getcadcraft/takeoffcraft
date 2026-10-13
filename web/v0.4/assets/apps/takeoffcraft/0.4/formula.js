/* SPDX-License-Identifier: Apache-2.0 */
/**
 * formula.js — the assembly quantity formulas: a small tokenizer + recursive-descent parser
 * and a tree walker. NEVER eval / Function: a formula can only name the variables it is given
 * and the functions in FUNCS (a null-prototype table, so "constructor", "__proto__" and friends
 * are just unknown names). DOM-free (tested in Node).
 *
 *   expr    := term (('+' | '-') term)*
 *   term    := unary (('*' | '/') unary)*
 *   unary   := ('-' | '+') unary | primary
 *   primary := number | name | name '(' expr (',' expr)* ')' | '(' expr ')'
 *
 * × ÷ − are accepted for * / -. Names are case-insensitive (l = L). ceil/floor ignore binary
 * noise (0.1 * 3 / 0.3 is 1, not 1.0000000000000002 → 2), round is half away from zero and
 * takes optional decimals. Dividing by zero, or any non-finite result, is an error — a formula
 * never quietly yields a wrong number.
 */

// formulas use `t` for tokens: the translator is `tr` here
import { t as tr } from './i18n.js';

const EPS = 1e-9;
const FUNCS = Object.assign(Object.create(null), {
  ceil: { min: 1, max: 1, fn: (x) => Math.ceil(x - EPS * Math.max(1, Math.abs(x))) },
  floor: { min: 1, max: 1, fn: (x) => Math.floor(x + EPS * Math.max(1, Math.abs(x))) },
  round: { min: 1, max: 2, fn: (x, d = 0) => {
    if (!Number.isInteger(d) || d < 0 || d > 10) throw new FormulaError(tr('f.err.round'));
    const f = 10 ** d, y = Math.abs(x) * f, r = Math.floor(y + 0.5 + EPS * Math.max(1, y));
    return (x < 0 ? -r : r) / f;
  } },
  min: { min: 1, max: 99, fn: (...a) => Math.min(...a) },
  max: { min: 1, max: 99, fn: (...a) => Math.max(...a) },
  abs: { min: 1, max: 1, fn: (x) => Math.abs(x) },
});
export const FUNCTION_NAMES = Object.keys(FUNCS);

export class FormulaError extends Error {
  constructor(message, pos = null) { super(message); this.pos = pos; }
}

function tokenize(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (/\s/.test(c)) { i++; continue; }
    const num = src.slice(i).match(/^(\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/);
    if (num) { out.push({ t: 'num', v: Number(num[0]), pos: i }); i += num[0].length; continue; }
    const id = src.slice(i).match(/^[A-Za-z_][A-Za-z0-9_]*/);
    if (id) { out.push({ t: 'id', v: id[0], pos: i }); i += id[0].length; continue; }
    const op = { '+': '+', '-': '-', '−': '-', '–': '-', '*': '*', '×': '*', '/': '/', '÷': '/', '(': '(', ')': ')', ',': ',' }[c];
    if (op) { out.push({ t: op, pos: i }); i++; continue; }
    throw new FormulaError(tr('f.err.char', { c }), i);
  }
  out.push({ t: 'end', pos: src.length });
  return out;
}

/**
 * Parse a formula. `vars` is the list of variable names it may use (e.g. ['L','H','A','N']).
 * Returns { ok: true, ast, uses: [names] } or { ok: false, error, pos }.
 */
export function parse(src, vars = []) {
  const allowed = new Map(vars.map((v) => [v.toLowerCase(), v]));
  const uses = new Set();
  let tk, i = 0;
  try {
    if (String(src ?? '').trim() === '') throw new FormulaError(tr('f.err.empty'), 0);
    if (String(src).length > 500) throw new FormulaError(tr('f.err.long', { n: 500 }), 0);
    tk = tokenize(String(src));
    const peek = () => tk[i];
    const take = (t) => { if (tk[i].t !== t) throw new FormulaError(expected(t, tk[i]), tk[i].pos); return tk[i++]; };
    const expr = () => {
      let n = term();
      while (peek().t === '+' || peek().t === '-') { const op = tk[i++].t; n = { k: 'bin', op, a: n, b: term() }; }
      return n;
    };
    const term = () => {
      let n = unary();
      while (peek().t === '*' || peek().t === '/') { const t = tk[i++]; n = { k: 'bin', op: t.t, a: n, b: unary(), pos: t.pos }; }
      return n;
    };
    let depth = 0;
    const unary = () => {
      if (++depth > 100) throw new FormulaError(tr('f.err.deep'), peek().pos);
      try {
        if (peek().t === '-') { i++; return { k: 'neg', a: unary() }; }
        if (peek().t === '+') { i++; return unary(); }
        return primary();
      } finally { depth--; }
    };
    const primary = () => {
      const t = peek();
      if (t.t === 'num') { i++; return { k: 'num', v: t.v }; }
      if (t.t === '(') { i++; const n = expr(); take(')'); return n; }
      if (t.t === 'id') {
        i++;
        const name = t.v.toLowerCase();
        if (peek().t === '(') {
          const f = FUNCS[name];
          if (!f) throw new FormulaError(tr('f.err.func', { name: t.v, list: FUNCTION_NAMES.join(', ') }), t.pos);
          i++;
          const args = [expr()];
          while (peek().t === ',') { i++; args.push(expr()); }
          take(')');
          if (args.length < f.min || args.length > f.max) throw new FormulaError(f.min === f.max ? tr('f.err.args', { name, n: f.min }) : f.max > 9 ? tr('f.err.args.more', { name, n: f.min }) : tr('f.err.args.range', { name, min: f.min, max: f.max }), t.pos);
          return { k: 'call', name, args, pos: t.pos };
        }
        if (!allowed.has(name)) {
          throw new FormulaError(vars.length ? tr('f.err.var.use', { name: t.v, list: vars.join(', ') }) : tr('f.err.var', { name: t.v }), t.pos);
        }
        const v = allowed.get(name);
        uses.add(v);
        return { k: 'var', name: v };
      }
      if (t.t === ')' || t.t === ',') throw new FormulaError(tr('f.err.missing', { tok: t.t }), t.pos);
      throw new FormulaError(t.t === 'end' ? tr('f.err.end') : tr('f.err.unexpected', { tok: t.v ?? t.t }), t.pos);
    };
    const ast = expr();
    if (peek().t !== 'end') throw new FormulaError(peek().t === ')' ? tr('f.err.close') : tr('f.err.operator', { tok: peek().v ?? peek().t }), peek().pos);
    return { ok: true, ast, uses: [...uses] };
  } catch (err) {
    if (!(err instanceof FormulaError)) throw err;
    return { ok: false, error: err.message, pos: err.pos };
  }
}

function expected(t, got) {
  if (t === ')') return got.t === 'end' ? tr('f.err.paren') : tr('f.err.expect_before', { tok: got.v ?? got.t });
  return tr('f.err.expect', { want: t });
}

/** Evaluate a parsed tree with { name: number }. Throws FormulaError on a bad result. */
export function evaluate(ast, values) {
  const ev = (n) => {
    switch (n.k) {
      case 'num': return n.v;
      case 'var': {
        const v = Object.hasOwn(values, n.name) ? values[n.name] : undefined;
        if (typeof v !== 'number' || !Number.isFinite(v)) throw new FormulaError(tr('f.err.novalue', { name: n.name }));
        return v;
      }
      case 'neg': return -ev(n.a);
      case 'bin': {
        const a = ev(n.a), b = ev(n.b);
        if (n.op === '+') return a + b;
        if (n.op === '-') return a - b;
        if (n.op === '*') return a * b;
        if (b === 0) throw new FormulaError(tr('f.err.zero'), n.pos);
        return a / b;
      }
      case 'call': return FUNCS[n.name].fn(...n.args.map(ev));
      default: throw new FormulaError(tr('f.err.bad'));
    }
  };
  const r = ev(ast);
  if (!Number.isFinite(r)) throw new FormulaError(tr('f.err.nan'));
  return r;
}

/** Parse + evaluate in one go: { ok, value } or { ok: false, error }. */
export function compute(src, values) {
  const p = parse(src, Object.keys(values));
  if (!p.ok) return p;
  try { return { ok: true, value: evaluate(p.ast, values) }; } catch (err) {
    if (!(err instanceof FormulaError)) throw err;
    return { ok: false, error: err.message };
  }
}
