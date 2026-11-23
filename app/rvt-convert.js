/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rvt-convert.js — the RVT preview (0.5 SG.8 b), lab only. A project file saved in 2023–2026 is converted to IFC4 by the
 * `rvt` crate's WebAssembly (assets/vendor/rvt/<version>/, Apache-2.0, built from source — see its SOURCE.txt) in a
 * worker (rvt-convert-worker.js), and the page opens the IFC with cc-ifc like any other. DOM-free: Node runs it too
 * (bin/test-rvt-preview.mjs; browser: tools/rvt-preview-test/browser.mjs). The page side is bimcraft.js (the card's "Preview the model" button) and the
 * lab switch is ui.inc's data-rvt-preview. Spike notes: docs/spikes/rvt-preview.md.
 *
 *   previewSupport(info, fileName)   → {ok, release, level: 'typed'|'boxes'|'experimental'|null, why}
 *                                      info = rvt-reader.js readRevit()'s result; why: family|template|old|unknown|partial
 *   convertInProcess(lib, bytes)     → {ifc: Uint8Array, summary}   (lib = the vendor's rvt.js, initialised)
 *   summarize(result)                → summary (below), from openRvtBytesWithDiagnostics' {model, diagnostics}
 *   convertRevit(bytes, {libUrl, workerUrl, onPhase}) → Promise<{ifc, summary}>   (the page: one worker per file,
 *                                      ended afterwards, so the ~0.5 GB the decoder uses on a big model is given back)
 *
 * summary = {release, elements, rooms, storeys, materials, boxes, fabric, byClass [{cls, n, boxes}], records, warnings, level}
 *   boxes — elements drawn as their record's bounding box (the shape was not decoded): BodySource
 *   "partition_element_record_bbox" with no profile of its own. Equal to the crate's own diagnostics count on the test
 *   models (bounding_box_bodies), which leaves out turned boxes ("partition_family_instance_turned_box"): ours counts them.
 *   fabric — false when no wall, floor, roof or curtain wall was read (only fixtures and equipment came in).
 */

/** What each release gives, from the crate's README (0.4.0), checked here on the 2023 and 2024 samples. */
export const PREVIEW_RELEASES = Object.freeze({ 2023: 'boxes', 2024: 'typed', 2025: 'typed', 2026: 'experimental' });

export function previewSupport(info, fileName = info?.fileName || '') {
  const ext = String(fileName).split('.').pop().toLowerCase();
  const release = Number(info?.release) || null;
  const no = (why) => ({ ok: false, release, level: null, why });
  if (!info) return no('unknown');
  if (info.partial) return no('partial');
  if (info.family || ext === 'rfa' || ext === 'rft') return no('family');
  if (ext === 'rte') return no('template');
  if (!release) return no('unknown');
  const level = PREVIEW_RELEASES[release] || null;
  if (!level) return no(release < 2023 ? 'old' : 'unknown');
  return { ok: true, release, level, why: null };
}

const BOX_SOURCES = new Set(['partition_element_record_bbox', 'partition_family_instance_turned_box']);
const clsName = (t) => (t ? 'Ifc' + t.slice(3).toLowerCase().replace(/^./, (c) => c.toUpperCase()) : null);
/** IFCBUILDINGELEMENTPROXY → IfcBuildingelementproxy is not the IFC spelling: use the IFC class names we know. */
const CLASS_NAMES = Object.fromEntries(['IfcWall', 'IfcWallStandardCase', 'IfcCurtainWall', 'IfcDoor', 'IfcWindow', 'IfcSlab',
  'IfcRoof', 'IfcCovering', 'IfcColumn', 'IfcBeam', 'IfcMember', 'IfcPlate', 'IfcStair', 'IfcStairFlight', 'IfcRailing', 'IfcRamp', 'IfcSpace', 'IfcFurniture', 'IfcFurnishingElement', 'IfcBuildingElementProxy', 'IfcFooting',
  'IfcShadingDevice', 'IfcSanitaryTerminal', 'IfcLightFixture', 'IfcElectricAppliance', 'IfcTransportElement',
  'IfcFlowTerminal', 'IfcFlowSegment', 'IfcFlowFitting', 'IfcPipeSegment', 'IfcDuctSegment', 'IfcOpeningElement']
  .map((n) => [n.toUpperCase(), n]));
const prop = (e, name) => e.property_set?.properties?.find((p) => p.name === name)?.value?.value;

/** A body that is the record's bounding box: the shape itself was not decoded. */
export const isBox = (e) => BOX_SOURCES.has(prop(e, 'BodySource')) && !prop(e, 'ProfileSource') && !e.extrusion?.profile_override;
/** The building's own fabric: a preview with none of these read only fixtures and equipment (the 2025 owner sample). */
export const FABRIC = Object.freeze(['IfcWall', 'IfcSlab', 'IfcRoof', 'IfcCurtainWall']);

export function summarize({ model, diagnostics: d }) {
  const by = new Map();
  let elements = 0, rooms = 0, boxes = 0;
  for (const e of model?.entities || []) {
    if (!e.ifc_type) continue;   // the project entity
    const cls = CLASS_NAMES[e.ifc_type] || clsName(e.ifc_type);
    const row = by.get(cls) || { cls, n: 0, boxes: 0 };
    row.n++;
    if (isBox(e)) { row.boxes++; if (cls !== 'IfcSpace') boxes++; }
    by.set(cls, row);
    if (cls === 'IfcSpace') rooms++; else elements++;
  }
  const ex = d?.exported || {};
  return {
    release: Number(d?.input?.revit_version) || null,
    elements,
    rooms,
    storeys: ex.storey_count ?? model?.building_storeys?.length ?? 0,
    materials: ex.material_count ?? model?.materials?.length ?? 0,
    boxes,   // ours: the crate's bounding_box_bodies leaves out turned boxes (3 on the 2025 owner sample)
    fabric: FABRIC.some((c) => by.has(c)),   // walls, floors, roofs or curtain walls read at all
    byClass: [...by.values()].sort((a, b) => b.n - a.n || a.cls.localeCompare(b.cls)),
    records: d?.decoded?.production_walker_elements ?? null,   // element records found in the file (views, annotation … too)
    warnings: (d?.warnings || []).length,
    level: d?.confidence?.level || null,                       // the crate's own: scaffold | typed-no-geometry | geometry
  };
}

/** Convert in this thread (the worker calls it; Node tests too). */
export function convertInProcess(lib, bytes) {
  const result = lib.openRvtBytesWithDiagnostics(bytes);
  const step = lib.modelToIfcStep(result.model);
  return { ifc: new TextEncoder().encode(step), summary: summarize(result) };
}

/** The page: convert in a module worker. `libUrl`, `convertUrl`, `workerUrl` = the vendor's rvt.js, this file and
 *  rvt-convert-worker.js as the page resolved them (workers don't see the import map). onPhase('loading' | 'converting'). */
export function convertRevit(bytes, { libUrl, convertUrl, workerUrl, onPhase = () => {} }) {
  return new Promise((resolve, reject) => {
    let worker;
    try { worker = new Worker(workerUrl, { type: 'module' }); } catch (e) { reject(e); return; }
    const end = () => worker.terminate();
    worker.onmessage = ({ data }) => {
      if (data.phase) { onPhase(data.phase); return; }
      end();
      if (data.error) reject(new Error(data.error)); else resolve({ ifc: data.ifc, summary: data.summary });
    };
    worker.onerror = (e) => { end(); reject(new Error(e.message || 'worker failed')); };   // i18n-ignore: shown inside a translated sentence
    const copy = bytes.slice();   // the caller keeps its bytes; the copy is moved to the worker
    worker.postMessage({ libUrl, convertUrl, bytes: copy }, [copy.buffer]);
  });
}
