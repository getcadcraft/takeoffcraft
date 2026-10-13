<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * settings.inc — TakeoffCraft's own panel of the Settings dialog (core/components/app-settings.inc includes it,
 * as the "TakeoffCraft" tab). takeoffcraft.js reads and stores the fields (localStorage takeoffcraft.settings),
 * fills them in each time the dialog opens, and resets them on "cc-settings-reset".
 *   tcDenom      fractions of an inch on screen: 16 (default) / 8 / 4 — display only; exports keep 1/16"
 *   tcWaste      waste % a new item starts with (basis points; default 0)
 *   tcThreshold  where the Auto count match slider starts (0.50–0.95; default 0.75)
 *   tcSnap45     snap to 45° without holding Shift (Shift then frees the angle; default off)
 *   tcSnap       snap to the drawing's own lines while measuring (default on; F3 and the status bar's Snap toggle it too)
 *   tcCorner     corner indicator of the 3D check view: cube (default) / axes / none (the flat sheet has none)
 *   tcRoomGap    Room fill closes door openings up to this many feet (3 / 3.5 / 4 default / 5 / 6 / 8)
 */
?>
<fieldset class="shell-set" data-tc-settings>
  <legend><?= Lang::e('set.ftin') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.ftin.aria') ?>">
    <label><input type="radio" name="tcDenom" value="16"> 1/16"</label>
    <label><input type="radio" name="tcDenom" value="8"> 1/8"</label>
    <label><input type="radio" name="tcDenom" value="4"> 1/4"</label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.ftin.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.items') ?></legend>
  <div class="shell-row">
    <label for="tc-set-waste"><?= Lang::e('set.waste') ?></label>
    <select id="tc-set-waste" class="select-cc" name="tcWaste">
      <option value="0"><?= Lang::e('set.waste.none') ?></option>
      <option value="200">2%</option>
      <option value="300">3%</option>
      <option value="500">5%</option>
      <option value="750">7.5%</option>
      <option value="1000">10%</option>
      <option value="1500">15%</option>
      <option value="2000">20%</option>
    </select>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.waste.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('tool.autocount') ?></legend>
  <div class="shell-row">
    <label for="tc-set-th"><?= Lang::e('set.th') ?></label>
    <span class="shell-range"><input type="range" id="tc-set-th" name="tcThreshold" min="0.5" max="0.95" step="0.01"><output for="tc-set-th" class="tabular" data-tc-th-out></output></span>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.th.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.drawing') ?></legend>
  <div class="shell-row">
    <label for="tc-set-roomgap"><?= Lang::e('set.roomgap') ?></label>
    <select id="tc-set-roomgap" class="select-cc" name="tcRoomGap">
      <option value="3">3'-0"</option>
      <option value="3.5">3'-6"</option>
      <option value="4">4'-0"</option>
      <option value="5">5'-0"</option>
      <option value="6">6'-0"</option>
      <option value="8">8'-0"</option>
    </select>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.roomgap.hint') ?></p>
  <label class="shell-check"><input type="checkbox" name="tcSnap"> <?= Lang::e('settings.snap') ?></label>
  <p class="shell-hint-text"><?= Lang::e('settings.snap.hint') ?></p>
  <label class="shell-check"><input type="checkbox" name="tcSnap45"> <?= Lang::e('set.snap45') ?></label>
  <p class="shell-hint-text"><?= Lang::e('set.snap45.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.corner') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.corner') ?>">
    <label><input type="radio" name="tcCorner" value="cube"> <i class="bi bi-box" aria-hidden="true"></i> <?= Lang::e('set.corner.cube') ?></label>
    <label><input type="radio" name="tcCorner" value="axes"> <i class="bi bi-arrows-move" aria-hidden="true"></i> <?= Lang::e('set.corner.axes') ?></label>
    <label><input type="radio" name="tcCorner" value="none"> <i class="bi bi-slash-circle" aria-hidden="true"></i> <?= Lang::e('set.corner.none') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.corner.hint') ?></p>
</fieldset>
<?php /* AI assistants and scripts (0.4 part 2 X.7, session agents): host.js fills this with Settings › Assistants (off by default) */ ?>
<div data-assistants-settings></div>
