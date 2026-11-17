/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js: the Default Policies add-on for TakeoffCraft (0.10 BK.149, session bk-r3-schedules-10; add-on API 1.1). Off until the
 * person switches it on (Settings › Add-ons). It fills TakeoffCraft's defaults hook (defaults-hook.js through api.defaults) from
 * the ONE store every app on this computer shares (lib/store.js), so an office sets its policies once: the schedule layout set in
 * BimCraft or CadCraft is the one the estimate here takes (estimate-layout.js). The engine, the store and the screens are lib/
 * (canonical lib/defaults, copied by tools/defaults/sync.mjs, never edited here); this file is TakeoffCraft's adapter.
 *
 *   Settings › Global › Default Policies      the office name, the policies for every app (the schedule layout among them), save
 *                                             to / load from a file, reset all
 * TakeoffCraft has no policies of its own yet, so there is no Settings › TakeoffCraft section.
 */
import { mountDefaultsUi } from './lib/ui.js';

export const optionsOf = () => null;
export const ownText = () => '';

export async function activate(api) {
  mountDefaultsUi(api, { app: 'takeoffcraft', appName: api.app.name, optionsOf, ownText });
}
