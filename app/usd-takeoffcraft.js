/* SPDX-License-Identifier: Apache-2.0 */
/**
 * usd-takeoffcraft.js — the 3D check view as OpenUSD (0.7 XF.8, session `usd`; docs/USD-CONVENTIONS.md § 10). DOM-free.
 * The library is cc-usd (./usd/, a copy of lib/usd written by tools/usd/sync.mjs).
 *
 *   checkUsd(scene, { format = 'usdz', name }) → { data, report: { objects } }
 *     scene = scene3d.js buildScene() / buildStack() result (what glb.js writes)
 *
 * One Xform per object (walls, slabs, plates, count posts as triangle Meshes; flat runs as linear BasisCurves), named after
 * its item and kind, each carrying its takeoff data: `cadcraft:item` (the item's name), `cadcraft:kind`, `cadcraft:mark` (the
 * mark's id) and `cadcraft:quantity` (what the view measured, as text). One material per item colour, slabs and plates see-
 * through as in the view. The scene is in feet with Z up: metres (× 0.3048), Z up. Stacked sheets' outlines are left out.
 */
import { UsdBuilder, V, hexToLinear } from './usd/index.js';

const M = 0.3048;

export function checkUsd(scene, { format = 'usdz', name = 'TakeoffCraft' } = {}) {
  const b = new UsdBuilder({ app: 'TakeoffCraft', source: name, doc: name });
  const mats = new Map();
  const material = (color, see) => {
    const key = color + (see ? '_see' : '');
    if (!mats.has(key)) mats.set(key, b.material('Item_' + String(color).replace('#', '') + (see ? '_see' : ''), { base_color: hexToLinear(color), specular_roughness: 0.9, ...(see ? { geometry_opacity: 0.78, geometry_thin_walled: true } : {}) }, { displayName: key }));
    return mats.get(key);
  };
  const S = (p, n, v) => { if (v !== null && v !== undefined && v !== '') b.attr(p, n, 'string', String(v), { custom: true, uniform: true }); };
  let objects = 0;
  for (const o of scene.objects) {
    if (o.kind === 'frame') continue;
    const nm = (o.name || o.kind) + ' ' + o.kind;
    if (o.tris && o.tris.length >= 9) {
      const n = o.tris.length / 3;
      const pts = new Float32Array(o.tris.length);
      for (let i = 0; i < o.tris.length; i++) pts[i] = o.tris[i] * M;
      const g = b.group(b.root, nm, { kind: 'component', displayName: nm });
      b.mesh(g, 'Body', { points: pts, counts: new Int32Array(n / 3).fill(3), indices: Int32Array.from({ length: n }, (_, i) => i), doubleSided: true }, { material: material(o.color || '#888888', o.kind === 'slab' || o.kind === 'plate') });
      S(g, 'cadcraft:item', o.name); S(g, 'cadcraft:kind', o.kind); S(g, 'cadcraft:mark', o.id); S(g, 'cadcraft:quantity', o.measure);
      objects++;
    } else if (o.kind === 'run' && o.lines && o.lines.length >= 6) {
      const pts = new Float32Array(o.lines.length);
      for (let i = 0; i < o.lines.length; i++) pts[i] = o.lines[i] * M;
      const g = b.group(b.root, nm, { kind: 'component', displayName: nm });
      const c = b.prim(g, 'Run', 'BasisCurves');
      b.attr(c, 'type', 'token', 'linear', { uniform: true });
      b.attr(c, 'curveVertexCounts', 'int[]', new Int32Array(pts.length / 6).fill(2));
      b.attr(c, 'points', 'point3f[]', pts);
      b.attr(c, 'widths', 'float[]', [0.03], { meta: { interpolation: V('token', 'constant') } });
      b.attr(c, 'primvars:displayColor', 'color3f[]', hexToLinear(o.color || '#888888'), { meta: { interpolation: V('token', 'constant') } });
      S(g, 'cadcraft:item', o.name); S(g, 'cadcraft:kind', o.kind); S(g, 'cadcraft:mark', o.id); S(g, 'cadcraft:quantity', o.measure);
      objects++;
    }
  }
  return { data: format === 'usdz' ? b.usdz() : b.write(format), report: { objects } };
}
