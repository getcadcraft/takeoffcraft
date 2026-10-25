/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dwg-dynamic.js — dynamic blocks in a cc-dwg drawing model, read only (0.5 DB.11; the model shapes are cad-files' DB.2,
 * docs/DWG-DYNAMIC-BLOCKS.md). Import-free and DOM-free. Canonical here in BimCraft; ModelCraft ships a byte-identical
 * copy (`node bin/test-bimcraft.mjs --dynamic` fails when it differs: change this one, then copy it over).
 *
 * A dynamic block's definition has `block.dynamic = { params: [{ kind, label, states: [{ name, entities: [handles] }] }…] }`;
 * a reference's own copy (`*B…`) has `dynamicOf` = the definition's record handle and holds every entity of the definition
 * in the same order, the ones hidden in its state flagged `invisible`; an INSERT of one has `dyn = { def, state? }`.
 * Drawing a reference as its file shows it = skipping invisible entities, as the apps already do.
 *
 *   visibilityOf(block)            → { label, states: [{ name, handles: Set }] } | null   (its visibility parameter)
 *   dynamicDefs(model)             → Map(definition record handle → { name, block, vis })
 *   dynamicOf(model, insert, defs) → null | { name, label, state (shown now; null when it cannot be told), states, others }
 *   dynamicSummary(model, defs)    → [{ name, label, count, shown: [[state, n]…] (most first), states }]   model-space references, by block
 */

/** A block's visibility parameter: its label and each state's entity handles. */
export function visibilityOf(block) {
  const p = (block?.dynamic?.params || []).find((x) => Array.isArray(x.states) && x.states.length);
  if (!p) return null;
  return { label: typeof p.label === 'string' && p.label ? p.label : null, states: p.states.map((s) => ({ name: String(s.name ?? ''), handles: new Set((s.entities || []).map(String)) })) };
}

/** Every dynamic definition by its block record handle. */
export function dynamicDefs(model) {
  const out = new Map();
  for (const b of model?.blocks || []) if (b?.dynamic && b.record) out.set(String(b.record), { name: String(b.trueName && !String(b.trueName).startsWith('*') ? b.trueName : b.name), block: b, vis: visibilityOf(b) });
  return out;
}

/** The state whose shown entities are exactly these handles, or null. */
function stateFor(vis, shown) {
  if (!vis) return null;
  const s = vis.states.find((x) => x.handles.size === shown.size && [...shown].every((h) => x.handles.has(h)));
  return s ? s.name : null;
}

/** What a reference is as a dynamic block (see the header), or null when it is not one. */
export function dynamicOf(model, insert, defs = dynamicDefs(model)) {
  if (!insert || (insert.type !== 'INSERT' && insert.type !== 'MINSERT')) return null;
  const blk = (model?.blocks || []).find((b) => b.name === insert.block) || null;
  const rec = insert.dyn?.def || blk?.dynamicOf || (blk?.dynamic ? blk.record : null);
  const def = rec ? defs.get(String(rec)) : null;
  if (!def) return null;
  let state = typeof insert.dyn?.state === 'string' && insert.dyn.state ? insert.dyn.state : null;
  if (!state && def.vis && blk) {
    // the reference's block shows its state: the definition's own entities, or a copy's by position
    const dEnts = def.block.entities || [];
    const shown = new Set((blk === def.block ? dEnts.filter((e) => !e.invisible).map((e) => e.handle) : (blk.entities || []).map((e, i) => (e && !e.invisible ? dEnts[i]?.handle : null))).filter(Boolean).map(String));
    state = stateFor(def.vis, shown);
  }
  const states = def.vis ? def.vis.states.map((s) => s.name) : [];
  return { name: def.name, label: def.vis?.label || null, state, states, others: states.filter((s) => s !== state) };
}

/** Model-space references of dynamic blocks, by block: how many, which state each shows, every state. */
export function dynamicSummary(model, defs = dynamicDefs(model)) {
  const ms = (model?.blocks || []).find((b) => /^\*model_space$/i.test(b.name || ''));
  const by = new Map();
  for (const e of ms?.entities || []) {
    const d = dynamicOf(model, e, defs);
    if (!d) continue;
    let s = by.get(d.name);
    if (!s) by.set(d.name, (s = { name: d.name, label: d.label, count: 0, shown: new Map(), states: d.states }));
    s.count++;
    const k = d.state ?? '';
    s.shown.set(k, (s.shown.get(k) || 0) + 1);
  }
  return [...by.values()].map((s) => ({ ...s, shown: [...s.shown].sort((p, q) => q[1] - p[1] || String(p[0]).localeCompare(String(q[0]))) })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
