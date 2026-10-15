/* SPDX-License-Identifier: Apache-2.0 */
/**
 * view3d.js — the 3D check view: one sheet's takeoff (scene3d.js) drawn with three.js on top of
 * the sheet itself (a canvas texture on the ground). Loaded with import() the first time someone
 * opens the 3D view, so the 2D app never pays for three.js at start-up.
 *
 * The camera is ModelCraft's (m3d/camera.js, a byte-identical copy): its matrices go straight
 * into a bare THREE.Camera, and picking casts the same camera's ray, so what you click is what
 * you see. Z up, feet. Renders on demand. Colors come from the page tokens and follow the theme
 * (data-space paper/model, or the system's when neither is set).
 *
 * Navigation (the same in every CadCraft app): middle-drag orbits, Shift+middle or right-drag pans,
 * the wheel zooms at the cursor; a trackpad's two-finger swipe orbits (Shift pans) and a pinch
 * zooms (ModelCraft's looksLikePad rule, "auto"). Left-drag also orbits (Shift+left pans); a left
 * click without a drag picks. Touch: one finger orbits, two pinch and pan.
 *
 *   const v = new TakeoffView3D(host, { onPick(markId | null, {shift}) });
 *   v.setScene(scene)          scene3d.js buildScene() result (ok: true)
 *   v.setGround(canvas | null) the sheet rendered by pdf.js (white paper); themed here
 *   v.setSelection(ids)        highlights those marks
 *   v.standard('iso'|'top'|…) (fits the takeoff)  v.extents() (the whole sheet)  v.setPersp(bool)  v.showGround(bool)
 *   v.pickAt(x, y) → mark id | null      v.screenOf([x,y,z]) → {x, y} (host pixels)
 *   v.dispose()
 */
import * as THREE from 'three';
import { Camera } from './m3d/camera.js';
import { invert } from './m3d/vec.js';
import { mountViewCube, mountAxisIcon } from './m3d/viewcube.js';
import { cameraCubeOptions, cameraView } from './m3d/viewcube-camera.js';
import { t, has } from './i18n.js';
import { action3d, wheelFactor } from './input-mouse.js';   // 0.5 IP.3: the menu style's buttons and wheel

const DRAG = 4;            // px before a press becomes a drag

const tok = (name, fallback) => getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
const isDark = () => {
  const s = document.documentElement.dataset.space || '';
  if (s === 'model') return true;
  if (s === 'paper') return false;
  return !!window.matchMedia?.('(prefers-color-scheme: dark)').matches;   // i18n-ignore: a media query
};
/** '#rgb' / '#rrggbb' / 'rgb(…)' → THREE.Color without console warnings for anything else. */
function color(v, fallback) {
  const c = new THREE.Color();
  const s = String(v || '').trim();
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s)) return c.set(s);
  const m = s.match(/^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i);
  if (m) return c.setRGB(m[1] / 255, m[2] / 255, m[3] / 255, THREE.SRGBColorSpace);
  return c.set(fallback);
}

export class TakeoffView3D {
  constructor(host, { onPick, corner = 'cube' } = {}) {
    this.host = host;
    this.onPick = onPick || (() => {});
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'tc-3d-canvas';
    this.canvas.tabIndex = 0;
    this.canvas.setAttribute('aria-label', t('d3.canvas'));
    host.append(this.canvas);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.scene = new THREE.Scene();
    this.tcam = new THREE.Camera();
    this.tcam.matrixAutoUpdate = false;
    this.cam = new Camera();
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x8a8f96, 2.0);
    this.sun = new THREE.DirectionalLight(0xffffff, 1.4);
    this.sun.position.set(-0.45, -0.75, 1);
    this.scene.add(this.hemi, this.sun);
    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.groundMat = new THREE.MeshBasicMaterial({ color: 0xffffff, polygonOffset: true, polygonOffsetFactor: 2, polygonOffsetUnits: 2 });
    this.ground = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.groundMat);
    this.ground.visible = false;
    this.scene.add(this.ground);
    this.sheetCanvas = null;          // as pdf.js drew it
    this.texture = null;
    this.sel = new Set();
    this.data = null;
    this.objects = [];                // [{o, mesh, lines, mats}]
    this.radius = 50;
    this.raycaster = new THREE.Raycaster();
    this.applyTheme();
    this.mo = new MutationObserver(() => this.retheme());
    this.mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
    this.mq = window.matchMedia?.('(prefers-color-scheme: dark)');   // i18n-ignore: a media query
    this.onMq = () => this.retheme();
    this.mq?.addEventListener?.('change', this.onMq);
    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(host);
    this.bindInput();
    // corner indicator (Settings › TakeoffCraft): ModelCraft's view cube (top right) or the X/Y/Z axis icon (bottom left)
    // the cube's words come from the language file (viewcube.* keys; docs/apps/viewcube.md § Language keys)
    this.cubeOpts = { ...cameraCubeOptions(this.cam, { invalidate: () => this.invalidate(), home: () => this.standard('iso') }), i18n: { t, has } };
    this.cube = mountViewCube(host, this.cubeOpts);
    this.axes = mountAxisIcon(host, { getView: () => cameraView(this.cam), corner: 'bottom-right', i18n: { t, has } });
    this.setCorner(corner);
    this.resize();
  }
  /** 'cube' | 'axes' | 'none'. */
  setCorner(c) {
    this.corner = ['cube', 'axes', 'none'].includes(c) ? c : 'cube';
    this.cube.setVisible(this.corner === 'cube');
    this.axes.setVisible(this.corner === 'axes');
    this.invalidate();
  }

  // ---- theme ----
  applyTheme() {
    const dark = isDark();
    const sheet = color(tok('--sheet', dark ? '#1d232b' : '#f3f6f8'), dark ? '#1d232b' : '#f3f6f8');
    const ink = color(tok('--ink', dark ? '#e6eaee' : '#17202b'), dark ? '#e6eaee' : '#17202b');
    this.c = {
      dark,
      bg: sheet.clone().lerp(ink, 0.1),            // the stage tone the 2D view sits on
      ink,
      action: color(tok('--action', '#1e48c8'), '#1e48c8'),
    };
    this.scene.background = this.c.bg;
    this.hemi.groundColor = new THREE.Color(dark ? 0x3a4048 : 0x8a8f96);
  }
  retheme() {
    this.applyTheme();
    this.paintGround();
    this.build();
    this.invalidate();
  }

  // ---- size and drawing ----
  resize() {
    const w = Math.max(1, this.host.clientWidth), h = Math.max(1, this.host.clientHeight);
    this.w = w; this.h = h;
    this.renderer.setSize(w, h, false);
    this.cam.setSize(w, h);
    this.invalidate();
  }
  /** The view as a PNG (model 1.7, viewimage.js): scale 1 = its size on screen, 2 = twice. → Promise<Blob> */
  async png(scale = 1) {
    const { viewPng } = await import('./viewimage.js');
    return viewPng({ renderer: this.renderer, render: () => this.draw(), scale });
  }
  invalidate() {
    if (this._raf) return;
    this._raf = requestAnimationFrame(() => { this._raf = 0; this.draw(); });
  }
  draw() {
    this.cam.clip(this.radius);
    const tc = this.tcam;
    tc.matrix.fromArray(invert(this.cam.view()));
    tc.matrixWorldNeedsUpdate = true;
    tc.updateMatrixWorld(true);
    tc.projectionMatrix.fromArray(this.cam.proj());
    tc.projectionMatrixInverse.copy(tc.projectionMatrix).invert();
    this.renderer.render(this.scene, tc);
    this.cube?.update(); this.axes?.update();
    this.frames = (this.frames || 0) + 1;
  }

  // ---- content ----
  setScene(data, { keepCamera = false } = {}) {
    const first = !this.data;
    this.data = data;
    const b = data.bbox;
    this.radius = Math.max(1, Math.hypot(b.max[0] - b.min[0], b.max[1] - b.min[1], b.max[2] - b.min[2]) / 2);
    this.ground.scale.set(data.ground.w || 1, data.ground.h || 1, 1);
    this.ground.position.set((data.ground.w || 1) / 2, (data.ground.h || 1) / 2, data.groundZ || 0);   // stacked (T4): at its floor
    this.build();
    if (first || !keepCamera) this.standard('iso');
    this.invalidate();
  }
  /** The sheet as pdf.js drew it (dark lines on white). Model space gets the same inversion the 2D page gets. */
  setGround(canvas) {
    this.sheetCanvas = canvas;
    this.paintGround();
    this.invalidate();
  }
  paintGround() {
    this.texture?.dispose();
    this.texture = null;
    const src = this.sheetCanvas;
    if (src) {
      let img = src;
      if (this.c.dark) {
        img = document.createElement('canvas');
        img.width = src.width; img.height = src.height;
        const ctx = img.getContext('2d');
        if ('filter' in ctx) { ctx.filter = 'invert(.9) hue-rotate(180deg)'; ctx.drawImage(src, 0, 0); }
        else {
          ctx.drawImage(src, 0, 0);
          const d = ctx.getImageData(0, 0, img.width, img.height), a = d.data;
          for (let i = 0; i < a.length; i += 4) for (let k = 0; k < 3; k++) a[i + k] = 229.5 - 0.8 * a[i + k];   // invert(.9)
          ctx.putImageData(d, 0, 0);
        }
      }
      this.texture = new THREE.CanvasTexture(img);
      this.texture.colorSpace = THREE.SRGBColorSpace;
      this.texture.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
      this.groundMat.map = this.texture;
      this.groundMat.color.set(0xffffff);
    } else {
      this.groundMat.map = null;
      this.groundMat.color.set(this.c.dark ? 0x23292f : 0xffffff);
    }
    this.groundMat.needsUpdate = true;
    this.ground.visible = !!this.data && this.groundOn !== false;
  }
  showGround(on) { this.groundOn = on; this.ground.visible = !!this.data && on; this.invalidate(); }

  build() {
    for (const r of this.objects) {
      r.mesh?.geometry.dispose(); r.lines?.geometry.dispose();
      for (const m of r.mats) m.dispose();
    }
    this.root.clear();
    this.objects = [];
    if (!this.data) return;
    const ink = this.c.ink;
    for (const o of this.data.objects) {
      const sel = this.sel.has(o.id);
      const base = color(o.color, '#d62728');
      const rec = { o, mesh: null, lines: null, mats: [] };
      if (o.tris.length) {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(o.tris, 3));
        g.computeVertexNormals();
        const slab = o.kind === 'slab' || o.kind === 'plate';
        const mat = new THREE.MeshLambertMaterial({
          color: base, side: THREE.DoubleSide, transparent: slab, opacity: slab ? 0.78 : 1,
          emissive: sel ? this.c.action : new THREE.Color(0), emissiveIntensity: sel ? 0.55 : 0,
          polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1,
        });
        rec.mats.push(mat);
        rec.mesh = new THREE.Mesh(g, mat);
        rec.mesh.userData.markId = o.id;
        rec.mesh.renderOrder = slab ? 1 : 0;
        this.root.add(rec.mesh);
      }
      if (o.lines.length) {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(o.lines, 3));
        const run = o.kind === 'run';
        const lc = sel ? this.c.action : run ? base : ink;
        const mat = new THREE.LineBasicMaterial({ color: lc, transparent: !sel && !run, opacity: sel || run ? 1 : 0.55 });
        rec.mats.push(mat);
        rec.lines = new THREE.LineSegments(g, mat);
        rec.lines.userData.markId = o.id;
        rec.lines.renderOrder = 2;
        this.root.add(rec.lines);
      }
      this.objects.push(rec);
    }
  }
  setSelection(ids) {
    const next = new Set(ids || []);
    if (next.size === this.sel.size && [...next].every((id) => this.sel.has(id))) return;
    this.sel = next;
    this.build();
    this.invalidate();
  }

  // ---- camera ----
  bbox() {
    const b = this.data?.bbox;
    return b ? { min: b.min.slice(), max: [b.max[0], b.max[1], Math.max(b.max[2], 1)] } : { min: [0, 0, 0], max: [10, 10, 1] };
  }
  /** The takeoff with a margin (a quarter of its size each way), else the whole sheet. */
  focusBox() {
    const m = this.data?.marksBox;
    if (!m) return this.bbox();
    const pad = Math.max(Math.hypot(m.max[0] - m.min[0], m.max[1] - m.min[1]) * 0.25, 4);
    return { min: [m.min[0] - pad, m.min[1] - pad, 0], max: [m.max[0] + pad, m.max[1] + pad, Math.max(m.max[2], 1)] };
  }
  /** Standard views look at the takeoff; Zoom extents shows the whole sheet. */
  standard(name) { this.cam.standard(name, this.focusBox()); this.invalidate(); }
  extents() { this.cam.fit(this.bbox()); this.invalidate(); }
  setPersp(on) { this.cam.persp = !!on; this.invalidate(); }

  // ---- picking ----
  pickAt(x, y) {
    if (!this.data) return null;
    const r = this.cam.ray(x, y);
    this.raycaster.set(new THREE.Vector3(...r.o), new THREE.Vector3(...r.d));
    this.raycaster.near = 0; this.raycaster.far = Infinity;
    this.raycaster.params.Line.threshold = this.cam.pixelSize(this.cam.target) * 5;
    const targets = [];
    for (const rec of this.objects) {
      if (rec.o.kind === 'frame') continue;              // a stacked sheet's outline (T4) is not a mark
      if (rec.mesh) targets.push(rec.mesh);
      else if (rec.lines) targets.push(rec.lines);       // runs with no height: the line itself
    }
    this.tcam.updateMatrixWorld(true);
    const hits = this.raycaster.intersectObjects(targets, false);
    if (hits.length) return hits[0].object.userData.markId;
    // a miss by a few pixels next to a count post still picks it (posts are thin at a distance)
    let best = null, bd = 8;
    for (const rec of this.objects) {
      if (rec.o.kind !== 'marker') continue;
      const a = rec.o.anchor;
      for (const z of [a[2], a[2] / 2, 0]) {
        const s = this.cam.project([a[0], a[1], z]);
        const d = s ? Math.hypot(s[0] - x, s[1] - y) : Infinity;
        if (d < bd) { bd = d; best = rec.o.id; }
      }
    }
    return best;
  }
  screenOf(p) { const s = this.cam.project(p); return s ? { x: s[0], y: s[1] } : null; }

  // ---- input ----
  bindInput() {
    const cv = this.canvas;
    const pos = (e) => { const r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const touches = new Map();
    let drag = null, pinch = null;
    cv.addEventListener('contextmenu', (e) => e.preventDefault());
    cv.addEventListener('pointerdown', (e) => {
      cv.focus({ preventScroll: true });
      const p = pos(e);
      if (e.pointerType === 'touch') {
        touches.set(e.pointerId, p);
        cv.setPointerCapture(e.pointerId);
        if (touches.size === 2) {
          const [a, b] = [...touches.values()];
          pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
          drag = null;
        } else if (touches.size === 1) drag = { mode: 'orbit', x: p.x, y: p.y, sx: p.x, sy: p.y, moved: false, button: 0, shift: false };
        return;
      }
      this.cubeOpts?.stop?.();
      if (e.button === 1) e.preventDefault();
      let mode = e.button === 2 || (e.shiftKey && e.button !== 2) ? 'pan' : 'orbit';
      const own = e.button === 0 ? null : action3d(e.button);   // IP.3: the style's middle / right button; left stays orbit + pick
      if (own) mode = own === 'none' ? null : e.shiftKey && own === 'orbit' ? 'pan' : e.shiftKey && own === 'pan' ? 'orbit' : own;
      if (!mode) return;
      drag = { mode, x: p.x, y: p.y, sx: p.x, sy: p.y, moved: false, button: e.button, shift: e.shiftKey };
      cv.setPointerCapture(e.pointerId);
    });
    cv.addEventListener('pointermove', (e) => {
      const p = pos(e);
      if (e.pointerType === 'touch' && touches.has(e.pointerId)) {
        touches.set(e.pointerId, p);
        if (pinch && touches.size >= 2) {
          const [a, b] = [...touches.values()];
          const d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
          if (pinch.d > 0 && d > 0) this.cam.zoomAt(pinch.d / d, mx, my);
          this.cam.pan(mx - pinch.mx, my - pinch.my);
          pinch = { d, mx, my };
          this.invalidate();
          return;
        }
      }
      if (!drag) return;
      const dx = p.x - drag.x, dy = p.y - drag.y;
      if (!drag.moved && Math.hypot(p.x - drag.sx, p.y - drag.sy) < DRAG) return;
      drag.moved = true;
      drag.x = p.x; drag.y = p.y;
      if (drag.mode === 'pan') this.cam.pan(dx, dy); else if (drag.mode === 'zoom') this.cam.zoomAt(Math.exp(dy * 0.01), drag.sx, drag.sy); else this.cam.orbit(dx, dy);
      this.invalidate();
    });
    const end = (e) => {
      if (e.pointerType === 'touch') {
        touches.delete(e.pointerId);
        if (touches.size < 2) pinch = null;
      }
      const d = drag;
      drag = null;
      if (e.type === 'pointerup' && d && !d.moved && d.button === 0) {
        const p = pos(e);
        this.onPick(this.pickAt(p.x, p.y), { shift: e.shiftKey });
      }
    };
    cv.addEventListener('pointerup', end);
    cv.addEventListener('pointercancel', end);
    // a trackpad (sideways or fine-grained scrolling) orbits; a pinch arrives as wheel + ctrlKey and zooms
    let padUntil = 0;
    const looksLikePad = (e) => {
      if (e.deltaMode !== 0) return false;
      if (e.deltaX !== 0 || (e.deltaY % 1 !== 0 && Math.abs(e.deltaY) < 50)) padUntil = e.timeStamp + 400;
      return e.timeStamp < padUntil;
    };
    cv.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (!e.ctrlKey && looksLikePad(e)) {
        if (e.shiftKey) this.cam.pan(-e.deltaX, -e.deltaY);
        else this.cam.orbit(-e.deltaX * 0.6, -e.deltaY * 0.6);
        this.invalidate();
        return;
      }
      const p = pos(e);
      // zoom toward what is under the cursor: an object, else the sheet, else the target plane
      let pivot = null;
      const r = this.cam.ray(p.x, p.y);
      this.raycaster.set(new THREE.Vector3(...r.o), new THREE.Vector3(...r.d));
      const hit = this.raycaster.intersectObjects([...this.objects.map((x) => x.mesh).filter(Boolean), this.ground], false)[0];
      if (hit) pivot = [hit.point.x, hit.point.y, hit.point.z];
      const k = Math.exp((e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY) * (e.ctrlKey ? 0.01 : 0.0015 * wheelFactor()));   // IP.3: the style's wheel
      this.cam.zoomAt(k, p.x, p.y, pivot);
      this.invalidate();
    }, { passive: false });
  }

  dispose() {
    cancelAnimationFrame(this._raf);
    this.mo.disconnect(); this.ro.disconnect();
    this.mq?.removeEventListener?.('change', this.onMq);
    this.sel = new Set(); this.data = null;
    this.build();
    this.texture?.dispose();
    this.ground.geometry.dispose(); this.groundMat.dispose();
    this.cube.destroy(); this.axes.destroy();
    this.renderer.dispose();
    this.canvas.remove();
  }
}
