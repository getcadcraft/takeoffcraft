/* SPDX-License-Identifier: Apache-2.0 */
/**
 * glb.js — the 3D check view as a binary glTF 2.0 file (0.4 item T6). DOM-free and three-free (tested in Node; the test
 * runs Khronos's glTF validator on the result).
 *
 *   sceneToGlb(scene, { name }) → Uint8Array        scene = scene3d.js buildScene() / buildStack() result (ok: true)
 *
 * One node and one mesh per object (walls, slabs, plates, count posts: triangles with flat normals; flat runs: lines),
 * named after the item and its kind; one material per item colour (slabs and plates see-through, as in the view).
 * Units: the scene is in feet with Z up; glTF wants metres with Y up, so (x, y, z) ft → (x, z, −y) × 0.3048 m.
 * Stacked sheets' outlines (kind 'frame') are left out: they are guides, not takeoff.
 */

const M = 0.3048;
const enc = new TextEncoder();

/** '#rrggbb' → linear [r, g, b] (glTF colours are linear; the item colours are sRGB). */
export function linearRgb(hex) {
  const n = /^#[0-9a-f]{6}$/i.test(hex || '') ? parseInt(hex.slice(1), 16) : 0x888888;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
}

const toGl = (a, i) => [a[i] * M, a[i + 2] * M, -a[i + 1] * M];

export function sceneToGlb(scene, { name = 'TakeoffCraft' } = {}) {
  const chunks = [];          // Float32Arrays, in buffer order
  let byteLength = 0;
  const bufferViews = [], accessors = [], meshes = [], nodes = [], materials = [];
  const matIndex = new Map();
  const material = (color, see) => {
    const key = color + (see ? '/see' : '');
    if (matIndex.has(key)) return matIndex.get(key);
    const [r, g, b] = linearRgb(color);
    materials.push({
      name: key,
      pbrMetallicRoughness: { baseColorFactor: [r, g, b, see ? 0.78 : 1], metallicFactor: 0, roughnessFactor: 0.9 },
      alphaMode: see ? 'BLEND' : 'OPAQUE',
      doubleSided: true,
    });
    matIndex.set(key, materials.length - 1);
    return materials.length - 1;
  };
  const addAccessor = (arr, type, withBounds) => {
    bufferViews.push({ buffer: 0, byteOffset: byteLength, byteLength: arr.byteLength, target: 34962 });
    chunks.push(arr);
    byteLength += arr.byteLength;                            // Float32: always a multiple of 4
    const acc = { bufferView: bufferViews.length - 1, componentType: 5126, count: arr.length / 3, type };
    if (withBounds) {
      const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
      for (let i = 0; i < arr.length; i += 3) for (let k = 0; k < 3; k++) { min[k] = Math.min(min[k], arr[i + k]); max[k] = Math.max(max[k], arr[i + k]); }
      acc.min = min; acc.max = max;
    }
    accessors.push(acc);
    return accessors.length - 1;
  };
  for (const o of scene.objects) {
    if (o.kind === 'frame') continue;
    const prims = [];
    if (o.tris.length >= 9) {
      const n = o.tris.length / 3;
      const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3);
      for (let v = 0; v < n; v += 3) {
        const a = toGl(o.tris, v * 3), b = toGl(o.tris, v * 3 + 3), c = toGl(o.tris, v * 3 + 6);
        const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
        let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
        const l = Math.hypot(nx, ny, nz);
        if (l > 0) { nx /= l; ny /= l; nz /= l; } else { nx = 0; ny = 1; nz = 0; }       // a degenerate sliver: any unit normal
        for (let k = 0; k < 3; k++) {
          const p = [a, b, c][k];
          pos.set(p, (v + k) * 3);
          nor.set([nx, ny, nz], (v + k) * 3);
        }
      }
      prims.push({ attributes: { POSITION: addAccessor(pos, 'VEC3', true), NORMAL: addAccessor(nor, 'VEC3', false) }, material: material(o.color, o.kind === 'slab' || o.kind === 'plate'), mode: 4 });
    } else if (o.kind === 'run' && o.lines.length >= 6) {
      const n = o.lines.length / 3, pos = new Float32Array(n * 3);
      for (let v = 0; v < n; v++) pos.set(toGl(o.lines, v * 3), v * 3);
      prims.push({ attributes: { POSITION: addAccessor(pos, 'VEC3', true) }, material: material(o.color, false), mode: 1 });
    }
    if (!prims.length) continue;
    meshes.push({ name: o.name || o.kind, primitives: prims });
    nodes.push({ name: (o.name || '') + ' (' + o.kind + ')', mesh: meshes.length - 1, extras: { mark: o.id, item: o.item, kind: o.kind, measure: o.measure } });
  }
  const gltf = {
    asset: { version: '2.0', generator: 'TakeoffCraft (glb.js)' },
    scene: 0,
    scenes: [{ name, nodes: nodes.map((_, i) => i) }],
    nodes, meshes, materials, accessors, bufferViews,
    buffers: [{ byteLength }],
  };
  if (!nodes.length) { delete gltf.meshes; delete gltf.materials; delete gltf.accessors; delete gltf.bufferViews; delete gltf.buffers; }
  let json = enc.encode(JSON.stringify(gltf));
  const jsonPad = (4 - (json.length % 4)) % 4;
  const jsonLen = json.length + jsonPad;
  const binLen = nodes.length ? byteLength : 0;
  const total = 12 + 8 + jsonLen + (binLen ? 8 + binLen : 0);
  const out = new Uint8Array(total);
  const dv = new DataView(out.buffer);
  dv.setUint32(0, 0x46546C67, true); dv.setUint32(4, 2, true); dv.setUint32(8, total, true);
  dv.setUint32(12, jsonLen, true); dv.setUint32(16, 0x4E4F534A, true);
  out.set(json, 20);
  out.fill(0x20, 20 + json.length, 20 + jsonLen);           // JSON chunk padded with spaces
  if (binLen) {
    let o = 20 + jsonLen;
    dv.setUint32(o, binLen, true); dv.setUint32(o + 4, 0x004E4942, true);
    o += 8;
    for (const c of chunks) { out.set(new Uint8Array(c.buffer, c.byteOffset, c.byteLength), o); o += c.byteLength; }
  }
  return out;
}
