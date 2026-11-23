/* SPDX-License-Identifier: Apache-2.0 */
/**
 * settings-ui.js: takeoffcraft.js's 21 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountSettings(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import * as PP from './pickpath.js';
import * as CMK from './countmarker.js';
import * as U from './units.js';
import { starOf } from './unit-prefs.js';
import { t } from './i18n.js';

export function mountSettings(ctx) {
  const { ST, model, app, d3, refresh, root } = ctx;

  // ---- settings (Settings › TakeoffCraft; per viewer conveniences, localStorage only) ----
  const SET_KEY = 'takeoffcraft.settings';
  const LEN_SHOWS = ['follow', 'ftin', 'm', 'cm', 'mm'];
  const TEMP_SHOWS = ['follow', 'degc', 'degf'];   // 0.9: how temperatures read and what a bare number means
  const SET_DEFAULTS = { currency: '$', lenShow: 'follow', tempShow: 'follow', denom: 16, waste: 0, threshold: 0.75, snap45: false, corner: 'cube', snap: true, roomGap: 4, pickGap: PP.GAP_DEFAULT, marker: CMK.MARKER_DEFAULT };
  const ROOM_GAPS = [3, 3.5, 4, 5, 6, 8];
  const WASTE_CHOICES = [0, 200, 300, 500, 750, 1000, 1500, 2000];
  const settings = { ...SET_DEFAULTS };
  function loadSettings() {
    Object.assign(settings, SET_DEFAULTS);
    try {
      const v = JSON.parse(localStorage.getItem(SET_KEY) || '{}');
      if ([16, 8, 4].includes(v.denom)) settings.denom = v.denom;
      if (LEN_SHOWS.includes(v.lenShow)) settings.lenShow = v.lenShow;
      if (TEMP_SHOWS.includes(v.tempShow)) settings.tempShow = v.tempShow;
      if (U.CURRENCIES.includes(v.currency)) settings.currency = v.currency;
      if (WASTE_CHOICES.includes(v.waste)) settings.waste = v.waste;
      if (typeof v.threshold === 'number' && v.threshold >= 0.5 && v.threshold <= 0.95) settings.threshold = Math.round(v.threshold * 100) / 100;
      if (typeof v.snap45 === 'boolean') settings.snap45 = v.snap45;
      if (typeof v.snap === 'boolean') settings.snap = v.snap;
      if (['cube', 'axes', 'none'].includes(v.corner)) settings.corner = v.corner;
      if (ROOM_GAPS.includes(v.roomGap)) settings.roomGap = v.roomGap;
      if (typeof v.marker === 'string') settings.marker = CMK.markerKey(v.marker);   // 0.9.1: count marker size, screen and PDF alike (countmarker.js)
      if (typeof v.pickGap === 'number' && v.pickGap >= PP.GAP_MIN && v.pickGap <= PP.GAP_MAX) settings.pickGap = v.pickGap;
    } catch { /* private window or damaged: the defaults */ }
  }
  loadSettings(); U.setCurrency(settings.currency);
  const saveSettings = () => { try { localStorage.setItem(SET_KEY, JSON.stringify(settings)); } catch { /* fine: this tab keeps them */ } };
  /** How lengths read on screen: the TakeoffCraft choice, or (Follow Global) the metric unit starred in Settings › Global › Units; else feet-inches. */
  const lenMode = () => { const m = settings.lenShow === 'follow' ? starOf('length') : settings.lenShow; return m === 'm' || m === 'cm' || m === 'mm' ? m : 'ftin'; };
  /** How temperatures read: the TakeoffCraft choice, or (Follow Global) the temperature unit starred in Settings › Global › Units; else °C when lengths show metric, °F otherwise. */
  const tempMode = () => { const m = settings.tempShow === 'follow' ? starOf('temperature') : settings.tempShow; return m === 'degc' || m === 'degf' ? m : (lenMode() !== 'ftin' ? 'degc' : 'degf'); };
  /** The unit a typed length field uses: the display unit when it is metric, else the item's own (m for a metric item, ft otherwise). */
  const fieldUnit = (lu) => { const m = lenMode(); return m !== 'ftin' ? m : (lu === 'm' ? 'm' : 'ft'); };
  const METRIC_K = { m: [1, 3], cm: [100, 1], mm: [1000, 0] };
  /** The text of a length field in unit u ('ft' = feet-inches): plain numbers, no thousands commas, so it parses back. */
  const lenField = (ft, u) => { if (u === 'ft') return U.formatFtIn(ft, settings.denom); const [k, d] = METRIC_K[u]; return String(Number((ft * U.M_PER_FT * k).toFixed(d))) + ' ' + u; };
  const lenHint = (u, kind) => u === 'ft' ? ({ height: "9'-0\"", thick: "0'-6\"", head: "7'-0\"", base: "0'-0\"" })[kind] : ({ m: { height: '3.0 m', thick: '0.2 m', head: '2.1 m', base: '0 m' }, cm: { height: '300 cm', thick: '20 cm', head: '210 cm', base: '0 cm' }, mm: { height: '3000 mm', thick: '200 mm', head: '2100 mm', base: '0 mm' } })[u][kind];
  /** A length for the screen (quantities are never rounded): meters / cm / mm, or feet-inches to the fraction picked in Settings. */
  const ftIn = (ft) => { const m = lenMode(); if (m === 'ftin') return U.formatFtIn(ft, settings.denom); if (!Number.isFinite(ft)) return ''; return m === 'cm' ? U.fixed(ft * U.M_PER_FT * 100, 1) + ' cm' : U.formatLength(ft, m); };
  /** An area for the screen: m² when lengths show metric or the item is priced in metric, else SF. Quantities are never rounded. */
  const areaShow = (sqft, it) => (lenMode() !== 'ftin' || U.UNITS[it?.unit]?.system === 'metric' ? U.fixed(sqft * U.SQM_PER_SQFT, 2) + ' m²' : U.fixed(sqft, 2) + ' SF');
  /** FX.398 (lab pass 18, 2026-11-04): the live measure readouts said "SF" / "sq ft" with lengths shown in meters; they read like the labels now (the active item's unit). */
  const measureArea = (sqft) => areaShow(sqft, app.active ? model.item(app.active) : null);
  const settingsDlg = document.querySelector('[data-app-settings]');
  function syncSettingsForm() {
    if (!settingsDlg) return;
    const q = (s) => settingsDlg.querySelector(s);
    settingsDlg.querySelectorAll('input[name="tcLenShow"]').forEach((r) => { r.checked = r.value === settings.lenShow; });
    settingsDlg.querySelectorAll('input[name="tcTempShow"]').forEach((r) => { r.checked = r.value === settings.tempShow; });
    const dn = q('[data-tc-denom]'); if (dn) dn.hidden = lenMode() !== 'ftin';
    settingsDlg.querySelectorAll('input[name="tcDenom"]').forEach((r) => { r.checked = Number(r.value) === settings.denom; });
    const w = q('select[name="tcWaste"]'); if (w) w.value = String(settings.waste);
    const cu = q('select[name="tcCurrency"]'); if (cu) cu.value = settings.currency;
    const rg = q('select[name="tcRoomGap"]'); if (rg) rg.value = String(settings.roomGap);
    settingsDlg.querySelectorAll('input[name="tcMarker"]').forEach((r) => { r.checked = r.value === settings.marker; });
    const pg = q('input[name="tcPickGap"]'); if (pg && document.activeElement !== pg) pg.value = String(Math.round(settings.pickGap * 100) / 100);
    const th = q('input[name="tcThreshold"]'); if (th) th.value = String(settings.threshold);
    const out = q('[data-tc-th-out]'); if (out) out.textContent = Math.round(settings.threshold * 100) + '%';
    const sn = q('input[name="tcSnap45"]'); if (sn) sn.checked = settings.snap45;
    const so = q('input[name="tcSnap"]'); if (so) so.checked = settings.snap;
    settingsDlg.querySelectorAll('input[name="tcCorner"]').forEach((r) => { r.checked = r.value === settings.corner; });
  }
  function applySettings() {
    const hint = root.querySelector('[data-snap-hint]');
    if (hint) hint.textContent = settings.snap45 ? t('snap45.on') : t('snap45.hint');
    U.setCurrency(settings.currency);
    syncSettingsForm();
    root.querySelector('[data-snap-toggle]')?.setAttribute('aria-pressed', String(settings.snap));
    if (settings.snap && ST.cur) ctx.loadSnap(ST.cur);
    d3.view?.setCorner(settings.corner);
    if (typeof refresh === 'function' && ST.booted) refresh();
  }
  ST.booted = false;
  if (settingsDlg) {
    settingsDlg.addEventListener('change', (e) => {
      const t = e.target;
      if (t.name === 'tcLenShow') settings.lenShow = LEN_SHOWS.includes(t.value) ? t.value : 'follow';
      else if (t.name === 'tcTempShow') settings.tempShow = TEMP_SHOWS.includes(t.value) ? t.value : 'follow';
      else if (t.name === 'tcDenom') settings.denom = Number(t.value);
      else if (t.name === 'tcCurrency') settings.currency = U.CURRENCIES.includes(t.value) ? t.value : '$';
      else if (t.name === 'tcWaste') settings.waste = WASTE_CHOICES.includes(Number(t.value)) ? Number(t.value) : 0;
      else if (t.name === 'tcMarker') settings.marker = CMK.markerKey(t.value);
      else if (t.name === 'tcRoomGap') settings.roomGap = ROOM_GAPS.includes(Number(t.value)) ? Number(t.value) : 4;
      else if (t.name === 'tcThreshold') settings.threshold = Number(t.value);
      else if (t.name === 'tcPickGap') { const v = Number(t.value); settings.pickGap = Number.isFinite(v) ? Math.min(PP.GAP_MAX, Math.max(PP.GAP_MIN, v)) : PP.GAP_DEFAULT; t.value = String(Math.round(settings.pickGap * 100) / 100); }   // 0.8 takeoff_PART_3: the Path tool's gap, also on [ and ]
      else if (t.name === 'tcSnap45') settings.snap45 = t.checked;
      else if (t.name === 'tcSnap') settings.snap = t.checked;
      else if (t.name === 'tcCorner') settings.corner = ['cube', 'axes', 'none'].includes(t.value) ? t.value : 'cube';
      else return;
      saveSettings();
      applySettings();
    });
    settingsDlg.addEventListener('input', (e) => {
      if (e.target.name !== 'tcThreshold') return;
      const out = settingsDlg.querySelector('[data-tc-th-out]');
      if (out) out.textContent = Math.round(Number(e.target.value) * 100) + '%';
    });
    settingsDlg.addEventListener('cc-settings-reset', () => { Object.assign(settings, SET_DEFAULTS); try { localStorage.removeItem(SET_KEY); } catch { /* fine */ } applySettings(); });
    // fill the fields in each time the dialog opens (another tab may have changed them)
    new MutationObserver(() => { if (settingsDlg.open) { loadSettings(); applySettings(); } }).observe(settingsDlg, { attributes: true, attributeFilter: ['open'] });
  }

  return { settings, saveSettings, lenMode, tempMode, fieldUnit, lenField, lenHint, ftIn, areaShow, measureArea, syncSettingsForm, applySettings };
}
