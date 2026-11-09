<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * settings.inc — TakeoffCraft's own panel of the Settings dialog (core/components/app-settings.inc includes it,
 * as the "TakeoffCraft" tab). takeoffcraft.js reads and stores the fields (localStorage takeoffcraft.settings),
 * fills them in each time the dialog opens, and resets them on "cc-settings-reset".
 *   tcLenShow    how lengths read: follow (the metric unit starred in Global › Units, else feet-inches; default) / ftin / m / cm / mm — display only
 *   tcDenom      fractions of an inch on screen: 16 (default) / 8 / 4 — display only; exports keep 1/16"
 *   tcCurrency   money symbol before prices ($ default; € £ …) — display only
 *   tcWaste      waste % a new item starts with (basis points; default 0)
 *   tcThreshold  where the Auto count match slider starts (0.50–0.95; default 0.75)
 *   tcSnap45     snap to 45° without holding Shift (Shift then frees the angle; default off)
 *   tcSnap       snap to the drawing's own lines while measuring (default on; F3 and the status bar's Snap toggle it too)
 *   tcTempShow   how temperatures read: follow (the temperature unit starred in Global › Units, else °C when lengths are metric, °F otherwise; default) / degc / degf — display only
 *   tcCorner     corner indicator of the 3D check view: cube (default) / axes / none (the flat sheet has none)
 *   tcRoomGap    Room fill closes door openings up to this many feet (3 / 3.5 / 4 default / 5 / 6 / 8)
 *   tcPickGap    Path tool: the largest gap in the drawing's lines it still joins, in PDF points (0.05–60; default 1.5; [ and ] change it too; 0.8 takeoff_PART_3)
 */
?>
<fieldset class="shell-set" data-tc-settings>
  <legend><?= Lang::e('set.lenshow') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.lenshow.aria') ?>">
    <label><input type="radio" name="tcLenShow" value="follow"> <?= Lang::e('set.lenshow.follow') ?></label>
    <label><input type="radio" name="tcLenShow" value="ftin"> <?= Lang::e('set.lenshow.ftin') ?></label>
    <label><input type="radio" name="tcLenShow" value="m"> m</label>
    <label><input type="radio" name="tcLenShow" value="cm"> cm</label> <?php /* i18n-ignore: unit mark */ ?>
    <label><input type="radio" name="tcLenShow" value="mm"> mm</label> <?php /* i18n-ignore: unit mark */ ?>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.lenshow.hint') ?></p>
</fieldset>
<fieldset class="shell-set" data-tc-temp>
  <legend><?= Lang::e('set.tempshow') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.tempshow.aria') ?>">
    <label><input type="radio" name="tcTempShow" value="follow"> <?= Lang::e('set.lenshow.follow') ?></label>
    <label><input type="radio" name="tcTempShow" value="degc"> °C</label> <?php /* i18n-ignore: unit mark */ ?>
    <label><input type="radio" name="tcTempShow" value="degf"> °F</label> <?php /* i18n-ignore: unit mark */ ?>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.tempshow.hint') ?></p>
</fieldset>
<fieldset class="shell-set" data-tc-denom>
  <legend><?= Lang::e('set.ftin') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.ftin.aria') ?>">
    <label><input type="radio" name="tcDenom" value="16"> 1/16"</label>
    <label><input type="radio" name="tcDenom" value="8"> 1/8"</label>
    <label><input type="radio" name="tcDenom" value="4"> 1/4"</label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.ftin.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.currency') ?></legend>
  <div class="shell-row">
    <label for="tc-set-currency"><?= Lang::e('set.currency') ?></label>
    <select id="tc-set-currency" class="select-cc" name="tcCurrency">
      <option value="$">$ <?php /* i18n-ignore: currency mark */ ?></option>
      <option value="€">€ <?php /* i18n-ignore: currency mark */ ?></option>
      <option value="£">£ <?php /* i18n-ignore: currency mark */ ?></option>
      <option value="CHF ">CHF</option>
      <option value="kr ">kr</option>
      <option value="zł ">zł</option>
      <option value="R ">R</option>
      <option value="A$">A$</option>
      <option value="C$">C$</option>
    </select>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.currency.hint') ?></p>
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
  <div class="shell-row">
    <label for="tc-set-pickgap"><?= Lang::e('set.pickgap') ?></label>
    <input type="number" id="tc-set-pickgap" class="input-cc" name="tcPickGap" min="0.05" max="60" step="0.05" inputmode="decimal">
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.pickgap.hint') ?></p>
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
