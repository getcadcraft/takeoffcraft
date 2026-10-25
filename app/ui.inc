<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * TakeoffCraft UI (rendered inside app-shell.inc; $app, $__area, $__build and $__manifest are set).
 * Server-rendered shell: toolbar, sheets, the page, items, quantities and the status bar.
 * takeoffcraft.js runs it. PDFs open on this computer; nothing here posts anywhere.
 *
 *   top     toolbar: file · export · scale · takeoff tools · edit (+ its "More" menu) · view (buttons carry data-tool / data-act)
 *   left    sheets (thumbnails, search, each sheet's scale)
 *   stage   the page (pdf.js canvas + overlay of marks in PDF user space)
 *   right   items (pick one to draw with) · the selected item (units, height, costs, assembly) · the selected mark
 *   bottom  quantities and costs (by item / by sheet), job total · status bar
 *
 * "Open in <review app>" on the sheet bar: only when MarkupCraft is open in this area and the build it runs here takes a
 * handed-over file (manifest "accepts": ["handoff"]; see handoff.js). TakeoffCraft itself takes one (?handoff=<id>).
 */
Lang::use($__build); echo Lang::bootTag();   // language files (docs/LANG.md); harmless once app-shell.inc does it
$__review = Catalog::app('markupcraft');
$__reviewBuild = $__review && Catalog::openIn($__review, $__area['key']) ? AppBuilds::resolve($__review['slug'], $__area['key']) : null;
$__reviewUrl = $__reviewBuild && in_array('handoff', $__reviewBuild['manifest']['accepts'] ?? [], true) ? $__area['path'] . '/' . $__review['slug'] : '';
// names of the apps that may hand a PDF over (status message only); the dev shell's Catalog stub has no apps(): none there
$__appNames = [];
foreach (is_callable([Catalog::class, 'apps']) ? Catalog::apps() : [] as $__a) $__appNames[$__a['slug']] = $__a['name'];
$__tools = [   // group key => [kind, key, icon, label key, title key]; group names: Lang 'group.<key>'
    'File' => [   // i18n-ignore: the group's key (data-tb-key); its name is Lang 'group.*'
        ['act', 'new-takeoff', 'file-earmark-plus', 'tool.new-takeoff', 'tool.new-takeoff.title'],
        ['act', 'open-pdf', 'folder2-open', 'tool.open-pdf', 'tool.open-pdf.title'],
        ['act', 'open-project', 'file-earmark-arrow-up', 'tool.open-project', 'tool.open-project.title'],
        ['act', 'save-project', 'download', 'tool.save-project', 'tool.save-project.title'],
    ],
    'Export' => [   // i18n-ignore: the group's key (data-tb-key); its name is Lang 'group.*'
        ['act', 'export-xlsx', 'file-earmark-spreadsheet', 'tool.export-xlsx', 'tool.export-xlsx.title'],
        ['act', 'export-csv', 'filetype-csv', 'tool.export-csv', 'tool.export-csv.title'],
        ['act', 'export-materials', 'list-check', 'tool.export-materials', 'tool.export-materials.title'],
        ['act', 'export-spots', 'geo-alt', 'tool.export-spots', 'tool.export-spots.title'],
        ['act', 'export-pdf', 'file-earmark-pdf', 'tool.export-pdf', 'tool.export-pdf.title'],
        ['act', 'export-embed', 'file-earmark-zip', 'tool.export-embed', 'tool.export-embed.title'],
        ['act', 'export-bid', 'file-earmark-text', 'tool.export-bid', 'tool.export-bid.title'],
        ['act', 'export-level', 'people', 'tool.export-level', 'tool.export-level.title'],
    ],
    'Scale' => [   // i18n-ignore: the group's key (data-tb-key); its name is Lang 'group.*'
        ['tool', 'calibrate', 'rulers', 'tool.calibrate', 'tool.calibrate.title'],
        ['tool', 'check', 'arrows-expand-vertical', 'tool.check', 'tool.check.title'],
    ],
    'Takeoff' => [   // i18n-ignore: the group's key (data-tb-key); its name is Lang 'group.*'
        ['tool', 'select', 'cursor', 'tool.select', 'tool.select.title'],
        ['tool', 'linear', 'bezier2', 'tool.linear', 'tool.linear.title'],
        ['tool', 'area', 'pentagon', 'tool.area', 'tool.area.title'],
        ['tool', 'circle', 'circle', 'tool.circle', 'tool.circle.title'],
        ['tool', 'room', 'paint-bucket', 'tool.room', 'tool.room.title'],
        ['act', 'arc', 'bezier', 'tool.arc', 'tool.arc.title'],
        ['act', 'deduct', 'dash-square-dotted', 'toolbar.deduct', 'toolbar.deduct.title'],
        ['tool', 'cutout', 'scissors', 'tool.cutout', 'tool.cutout.title'],
        ['tool', 'count', 'plus-circle', 'tool.count', 'tool.count.title'],
        ['tool', 'autocount', 'grid-3x3-gap', 'tool.autocount', 'tool.autocount.title'],
    ],
    'Edit' => [   // i18n-ignore: the group's key (data-tb-key); its name is Lang 'group.*'
        ['act', 'undo', 'arrow-counterclockwise', 'tool.undo', 'tool.undo.title'],
        ['act', 'redo', 'arrow-clockwise', 'tool.redo', 'tool.redo.title'],
        ['act', 'copy', 'copy', 'tool.copy', 'tool.copy.title'],
        ['act', 'paste', 'clipboard-plus', 'tool.paste', 'tool.paste.title'],
    ],
    'View' => [   // i18n-ignore: the group's key (data-tb-key); its name is Lang 'group.*'
        ['act', 'fit-page', 'arrows-fullscreen', 'tool.fit-page', 'tool.fit-page.title'],
        ['act', 'fit-width', 'arrows', 'tool.fit-width', 'tool.fit-width.title'],
    ],
];
?>
<main id="main" class="tc" data-takeoffcraft
      data-pdf-worker="<?= e($__manifest['pdfWorker'] ?? '') ?>" data-pdf-cmaps="<?= e($__manifest['pdfCmaps'] ?? '') ?>"
      data-pdf-fonts="<?= e($__manifest['pdfFonts'] ?? '') ?>" data-pdf-wasm="<?= e($__manifest['pdfWasm'] ?? '') ?>"
      data-pdf-icc="<?= e($__manifest['pdfIcc'] ?? '') ?>" data-app-names="<?= e(json_encode($__appNames)) ?>">
  <h1 class="visually-hidden"><?= Lang::e('ui.h1', ['app' => $app['name']]) ?></h1>

  <div class="tc-tools" role="toolbar" aria-label="<?= Lang::e('ui.tools') ?>">
    <?php foreach ($__tools as $__group => $__items): ?>
      <?php $__gname = Lang::t('group.' . strtolower($__group)); /* the English name stays the group's key (data-tb-key): saved toolbar arrangements survive a language change */ ?>
      <div class="tc-tool-group" role="group" data-tb-key="<?= e($__group) ?>" aria-label="<?= e($__gname) ?>">
        <span class="tc-tool-label" aria-hidden="true"><?= e($__gname) ?></span>
        <div class="tc-tool-row">
          <?php if ($__group === 'Export'): // i18n-ignore: the group's key; one menu button keeps the toolbar one row at 1280 px ?>
            <details class="tc-menu" data-export-menu>
              <summary class="tc-tool" title="<?= Lang::e('toolbar.export.title') ?>"><i class="bi bi-box-arrow-up" aria-hidden="true"></i><span><?= Lang::e('toolbar.export') ?></span></summary>
              <div class="tc-menu-list" role="menu">
                <?php foreach ($__items as [$__kind, $__key, $__icon, $__label, $__title]): ?>
                  <button type="button" role="menuitem" data-act="<?= e($__key) ?>" title="<?= Lang::e($__title) ?>"><i class="bi bi-<?= e($__icon) ?>" aria-hidden="true"></i> <?= Lang::e($__label) ?></button>
                <?php endforeach; ?>
              </div>
            </details>
          <?php else: foreach ($__items as [$__kind, $__key, $__icon, $__label, $__title]): ?>
            <button type="button" class="tc-tool" data-<?= e($__kind) ?>="<?= e($__key) ?>" title="<?= Lang::e($__title) ?>"<?= $__kind === 'tool' || $__key === 'arc' || $__key === 'deduct' ? ' aria-pressed="' . ($__key === 'select' ? 'true' : 'false') . '"' : '' ?>>
              <i class="bi bi-<?= e($__icon) ?>" aria-hidden="true"></i><span><?= Lang::e($__label) ?></span>
            </button>
          <?php endforeach; endif; ?>
          <?php if ($__group === 'Scale'): // i18n-ignore: a group key ?>
            <label class="tc-preset">
              <span class="tc-preset-label"><?= Lang::e('scale.preset') ?></span>
              <select class="tc-select" data-scale-preset aria-label="<?= Lang::e('scale.preset.aria') ?>" disabled>
                <option value="" class="select-placeholder"><?= Lang::e('ui.choose') ?></option>
              </select>
            </label>
          <?php endif; ?>
          <?php if ($__group === 'Edit'): // i18n-ignore: a group key ?>
            <details class="tc-menu" data-edit-menu>
              <summary class="tc-tool" title="<?= Lang::e('edit.more.title') ?>"><i class="bi bi-three-dots" aria-hidden="true"></i><span><?= Lang::e('edit.more') ?></span></summary>
              <div class="tc-menu-list" role="menu">
                <button type="button" role="menuitem" data-act="cut"><?= Lang::e('edit.cut') ?> <kbd>Ctrl+X</kbd></button>
                <button type="button" role="menuitem" data-act="copy"><?= Lang::e('edit.copy') ?> <kbd>Ctrl+C</kbd></button>
                <button type="button" role="menuitem" data-act="paste"><?= Lang::e('edit.paste') ?> <kbd>Ctrl+V</kbd></button>
                <button type="button" role="menuitem" data-act="paste-in-place"><?= Lang::e('edit.paste_in_place') ?> <kbd>Ctrl+Shift+V</kbd></button>
                <button type="button" role="menuitem" data-act="duplicate"><?= Lang::e('edit.duplicate') ?> <kbd>Ctrl+D</kbd></button>
                <button type="button" role="menuitem" data-act="delete"><?= Lang::e('edit.delete') ?> <kbd><?= Lang::e('key.delete') ?></kbd></button>
                <hr>
                <button type="button" role="menuitem" data-act="select-all"><?= Lang::e('edit.select_all') ?> <kbd>Ctrl+A</kbd></button>
                <button type="button" role="menuitem" data-act="select-none"><?= Lang::e('edit.select_none') ?> <kbd><?= Lang::e('key.esc') ?></kbd></button>
              </div>
            </details>
          <?php endif; ?>
        </div>
      </div>
    <?php endforeach; ?>
    <input type="file" class="visually-hidden" accept=".pdf,.dwg,.dxf,application/pdf" multiple tabindex="-1" aria-hidden="true" data-file-pdf>
    <input type="file" class="visually-hidden" accept=".json,application/json" tabindex="-1" aria-hidden="true" data-file-project>
  </div>

  <aside class="tc-panel tc-left" aria-label="<?= Lang::e('sheets.h') ?>">
    <section class="tc-sec tc-sheets-sec">
      <div class="tc-sec-head">
        <h2 class="tc-h"><?= Lang::e('sheets.h') ?></h2>
        <span class="tc-muted" data-sheet-count></span>
      </div>
      <label class="visually-hidden" for="tc-sheet-q"><?= Lang::e('sheets.search') ?></label>
      <input type="search" id="tc-sheet-q" class="tc-input" placeholder="<?= Lang::e('sheets.search') ?>" autocomplete="off" data-sheet-q>
      <ol class="tc-sheets" data-sheets></ol>
      <p class="tc-note" data-sheets-empty><?= Lang::e('sheets.empty') ?></p>
      <div data-missing></div>
    </section>
  </aside>

  <section class="tc-stage" aria-label="<?= Lang::e('stage.aria') ?>" data-stage>
    <div class="tc-canvases">
      <canvas class="tc-canvas tc-page" data-base aria-hidden="true"></canvas>
      <canvas class="tc-canvas tc-over" data-over aria-label="<?= Lang::e('stage.canvas') ?>"></canvas>
    </div>
    <div class="tc-hint" data-hint>
      <p class="tc-hint-h"><?= Lang::e('hint.h') ?></p>
      <ol>
        <li><strong><?= Lang::e('tool.open-pdf') ?></strong> <?= Lang::e('hint.1') ?></li>
        <li><?= Lang::e('hint.2a') ?> <strong><?= Lang::e('scale.preset') ?></strong><?= Lang::e('hint.2b') ?> <strong><?= Lang::e('tool.calibrate') ?></strong> <?= Lang::e('hint.2c') ?></li>
        <li><?= Lang::e('hint.3a') ?> <strong><?= Lang::e('items.h') ?></strong> <?= Lang::e('hint.3b') ?></li>
        <li><?= Lang::e('hint.4') ?></li>
        <li><strong><?= Lang::e('tool.save-project') ?></strong> <?= Lang::e('hint.5') ?></li>
      </ol>
      <div data-recent-files data-max="6"></div>
    </div>
    <div class="tc-drop" data-drop hidden><span><i class="bi bi-box-arrow-in-down-right" aria-hidden="true"></i> <?= Lang::e('drop.hint') ?></span></div>
    <div class="tc-busy" data-busy hidden><span data-busy-text><?= Lang::e('busy') ?></span></div>
    <div class="tc-acbar" data-acbar hidden role="region" aria-label="<?= Lang::e('tool.autocount') ?>">
      <div class="tc-acbar-row" data-ac-start>
        <span><?= Lang::e('ac.start') ?></span>
        <label class="tc-check"><input type="checkbox" data-ac-all> <?= Lang::e('ac.all') ?></label>
        <label class="tc-check" title="<?= Lang::e('ac.angle.title') ?>"><input type="checkbox" data-ac-angle> <?= Lang::e('ac.angle') ?></label>
      </div>
      <div class="tc-acbar-row" data-ac-run hidden>
        <span data-ac-run-text><?= Lang::e('ac.searching') ?></span>
        <progress class="tc-progress" data-ac-progress max="1" value="0"><?= Lang::e('ac.searching') ?></progress>
        <button type="button" class="btn-line btn-sm-cc" data-ac-cancel><?= Lang::e('btn.cancel') ?></button>
      </div>
      <div class="tc-acbar-row" data-ac-review hidden>
        <span class="tc-ac-summary" data-ac-summary role="status"></span>
        <label class="tc-ac-slider"><?= Lang::e('ac.match') ?> <input type="range" min="0.5" max="0.95" step="0.01" value="0.75" data-ac-threshold> <output data-ac-th>75%</output></label>
        <button type="button" class="btn-line btn-sm-cc" data-ac-discard><?= Lang::e('ac.discard') ?></button>
        <button type="button" class="btn-plot btn-sm-cc" data-ac-accept><?= Lang::e('btn.add') ?></button>
      </div>
    </div>
    <?php /* 0.7 TD.4: measure from geometry (takeoffcraft.js fills it) */ ?>
    <div class="tc-acbar tc-geombar" data-geombar hidden role="region" aria-label="<?= Lang::e('tool.cad-geom') ?>">
      <div class="tc-acbar-row">
        <span class="tc-ac-summary" data-geom-summary role="status"></span>
        <button type="button" class="btn-line btn-sm-cc" data-geom-clear><?= Lang::e('cad.geom.clear') ?></button>
        <button type="button" class="btn-plot btn-sm-cc" data-geom-add><?= Lang::e('btn.add') ?></button>
      </div>
    </div>
    <div class="tc-touchbar" data-touchbar hidden role="toolbar" aria-label="<?= Lang::e('touch.bar') ?>">
      <button type="button" class="btn-plot btn-sm-cc" data-touch="finish"><?= Lang::e('touch.finish') ?></button>
      <button type="button" class="btn-line btn-sm-cc" data-touch="back"><?= Lang::e('touch.back') ?></button>
      <button type="button" class="btn-line btn-sm-cc" data-touch="cancel"><?= Lang::e('touch.cancel') ?></button>
    </div>
    <div class="tc-acbar tc-cmpbar" data-cmpbar hidden role="region" aria-label="<?= Lang::e('cmp.bar') ?>">
      <div class="tc-acbar-row">
        <span class="tc-ac-summary" data-cmp-summary role="status"></span>
        <button type="button" class="btn-line btn-sm-cc" data-cmp-align><?= Lang::e('cmp.align') ?></button>
        <button type="button" class="btn-line btn-sm-cc" data-cmp-find><?= Lang::e('cmp.find') ?></button>
        <button type="button" class="btn-plot btn-sm-cc" data-cmp-move><?= Lang::e('cmp.move') ?></button>
        <button type="button" class="btn-line btn-sm-cc" data-cmp-close><?= Lang::e('cmp.close') ?></button>
      </div>
    </div>
    <div class="tc-3d" data-3d hidden>
      <div class="tc-3d-host" data-3d-host></div>
      <div class="tc-3d-bar" role="toolbar" aria-label="<?= Lang::e('d3.bar') ?>">
        <?php foreach (['iso', 'top', 'front', 'back', 'left', 'right', 'bottom'] as $__v): ?>
          <button type="button" class="tc-3d-btn" data-3d-view="<?= e($__v) ?>" title="<?= Lang::e('d3.view.' . $__v . '.title') ?>"><?= Lang::e('d3.view.' . $__v) ?></button>
        <?php endforeach; ?>
        <button type="button" class="tc-3d-btn" data-3d-persp aria-pressed="true" title="<?= Lang::e('d3.persp.title') ?>"><?= Lang::e('d3.persp') ?></button>
        <button type="button" class="tc-3d-btn" data-3d-extents title="<?= Lang::e('d3.extents.title') ?>"><i class="bi bi-arrows-fullscreen" aria-hidden="true"></i> <?= Lang::e('d3.extents') ?></button>
        <label class="tc-check tc-3d-check"><input type="checkbox" data-3d-ground checked> <?= Lang::e('d3.ground') ?></label>
        <button type="button" class="tc-3d-btn" data-3d-levels title="<?= Lang::e('d3.levels.title') ?>"><?= Lang::e('d3.levels') ?></button>
        <button type="button" class="tc-3d-btn" data-3d-stack aria-pressed="false" title="<?= Lang::e('d3.stack.title') ?>"><?= Lang::e('d3.stack') ?></button>
        <button type="button" class="tc-3d-btn" data-3d-glb title="<?= Lang::e('d3.glb.title') ?>"><i class="bi bi-download" aria-hidden="true"></i> <?= Lang::e('d3.glb') ?></button>
        <?php /* 0.7 XF.8 (session usd): takeoffcraft.js "exportUsd" → usd-takeoffcraft.js on cc-usd (./usd/) */ ?>
        <button type="button" class="tc-3d-btn" data-3d-usd title="<?= Lang::e('usd.export.title') ?>"><i class="bi bi-download" aria-hidden="true"></i> <?= Lang::e('usd.menu.usdz') ?></button>
        <button type="button" class="tc-3d-btn" data-3d-png title="<?= Lang::e('d3.png.title') ?>"><i class="bi bi-image" aria-hidden="true"></i> <?= Lang::e('d3.png') ?></button>
        <button type="button" class="tc-3d-btn" data-3d-close title="<?= Lang::e('d3.close.title') ?>"><?= Lang::e('d3.close') ?></button>
      </div>
      <div class="tc-3d-note" data-3d-note role="status"></div>
    </div>
    <div class="tc-sheetbar" data-sheetbar hidden>
      <span class="tc-sheetbar-name" data-sheet-name></span>
      <span class="tc-sheetbar-scale" data-sheet-scale></span>
      <?php if ($__reviewUrl): ?>
        <button type="button" class="tc-3d-toggle" data-handoff-pdf data-handoff-url="<?= e($__reviewUrl) ?>" data-handoff-app="<?= e($__review['name']) ?>" title="<?= Lang::e('handoff.pdf.title', ['app' => $__review['name']]) ?>"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> <?= Lang::e('handoff.pdf.button', ['app' => $__review['name']]) ?></button>
      <?php endif; ?>
      <details class="tc-menu tc-markup-menu" data-markup-menu>
        <summary class="tc-3d-toggle" title="<?= Lang::e('note.menu.title') ?>"><i class="bi bi-chat-square-text" aria-hidden="true"></i> <?= Lang::e('note.menu') ?></summary>
        <div class="tc-menu-list" role="menu">
          <button type="button" role="menuitem" data-tool="note" title="<?= Lang::e('tool.note.title') ?>"><i class="bi bi-chat-left-text" aria-hidden="true"></i> <?= Lang::e('tool.note') ?></button>
          <button type="button" role="menuitem" data-tool="cloud" title="<?= Lang::e('tool.cloud.title') ?>"><i class="bi bi-cloud" aria-hidden="true"></i> <?= Lang::e('tool.cloud') ?></button>
          <button type="button" role="menuitem" data-tool="highlight" title="<?= Lang::e('tool.highlight.title') ?>"><i class="bi bi-highlighter" aria-hidden="true"></i> <?= Lang::e('tool.highlight') ?></button>
        </div>
      </details>
      <button type="button" class="tc-3d-toggle" data-act="compare" aria-pressed="false" title="<?= Lang::e('cmp.button.title') ?>"><i class="bi bi-layers-half" aria-hidden="true"></i> <?= Lang::e('cmp.button') ?></button>
      <?php /* 0.7 TD.5: a drawing's layers, on and off (takeoffcraft.js fills it when it opens; only on a DWG / DXF sheet) */ ?>
      <details class="tc-menu tc-layers-menu" data-layers-menu hidden>
        <summary class="tc-3d-toggle" title="<?= Lang::e('cad.layers.title') ?>"><i class="bi bi-layers" aria-hidden="true"></i> <?= Lang::e('cad.layers') ?></summary>
        <div class="tc-menu-list tc-layers" data-layers-list></div>
      </details>
      <?php /* 0.7 TD.4: pick the drawing's lines, arcs, polylines and hatches as a linear or area item (a DWG / DXF sheet only) */ ?>
      <button type="button" class="tc-3d-toggle" data-tool="cadgeom" hidden aria-pressed="false" title="<?= Lang::e('tool.cad-geom.title') ?>"><i class="bi bi-bounding-box" aria-hidden="true"></i> <?= Lang::e('tool.cad-geom') ?></button>
      <?php /* 0.7 TD.3: only on a DWG / DXF sheet (takeoffcraft.js shows it) */ ?>
      <button type="button" class="tc-3d-toggle" data-act="cad-count" hidden title="<?= Lang::e('tool.cad-count.title') ?>"><i class="bi bi-diagram-3" aria-hidden="true"></i> <?= Lang::e('tool.cad-count') ?></button>
      <button type="button" class="tc-3d-toggle" data-act="next-flag" hidden title="<?= Lang::e('flag.next.title') ?>"><i class="bi bi-flag" aria-hidden="true"></i> <span data-flag-count></span></button>
      <button type="button" class="tc-3d-toggle" data-act="view-3d" aria-pressed="false" title="<?= Lang::e('d3.button.title') ?>"><i class="bi bi-box" aria-hidden="true"></i> <?= Lang::e('d3.button') ?></button>
    </div>
  </section>

  <aside class="tc-panel tc-right" aria-label="<?= Lang::e('items.h') ?>">
    <section class="tc-sec tc-area-sec">
      <label class="tc-area-row" for="tc-area-cur">
        <span class="tc-h"><?= Lang::e('area.label') ?></span>
        <select id="tc-area-cur" class="tc-select" data-area-cur title="<?= Lang::e('area.cur.title') ?>">
          <option value=""><?= Lang::e('area.none') ?></option>
        </select>
      </label>
    </section>
    <section class="tc-sec">
      <div class="tc-sec-head">
        <h2 class="tc-h"><?= Lang::e('items.h') ?></h2>
        <span class="tc-sec-acts">
          <button type="button" class="tc-linkbtn" data-library title="<?= Lang::e('lib.button.title') ?>"><i class="bi bi-journal-bookmark" aria-hidden="true"></i> <?= Lang::e('lib.button') ?></button>
          <button type="button" class="tc-linkbtn" data-item-new><i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('items.new') ?></button>
        </span>
      </div>
      <form class="tc-item-form" data-item-form hidden>
        <label for="tc-new-name" class="visually-hidden"><?= Lang::e('items.new.name') ?></label>
        <input type="text" id="tc-new-name" name="name" class="tc-input" maxlength="200" placeholder="<?= Lang::e('items.new.placeholder') ?>" autocomplete="off" required>
        <div class="tc-row">
          <label for="tc-new-type" class="visually-hidden"><?= Lang::e('items.new.type') ?></label>
          <select id="tc-new-type" name="type" class="tc-select">
            <option value="linear"><?= Lang::e('type.linear.long') ?></option>
            <option value="area"><?= Lang::e('type.area') ?></option>
            <option value="count"><?= Lang::e('type.count') ?></option>
            <option value="fixed"><?= Lang::e('type.fixed.long') ?></option>
          </select>
          <button type="submit" class="btn-plot btn-sm-cc"><?= Lang::e('btn.add') ?></button>
        </div>
      </form>
      <ul class="tc-items" data-items></ul>
      <p class="tc-note" data-items-empty><?= Lang::e('items.empty') ?></p>
    </section>
    <section class="tc-sec" data-groups-sec hidden>
      <h2 class="tc-h"><?= Lang::e('group.h') ?></h2>
      <ul class="tc-groups" data-groups></ul>
    </section>
    <section class="tc-sec" data-notes-sec hidden>
      <div class="tc-sec-head">
        <h2 class="tc-h" data-notes-h><?= Lang::e('notes.h') ?></h2>
        <label class="tc-check"><input type="checkbox" data-notes-open> <?= Lang::e('notes.open.only') ?></label>
      </div>
      <ul class="tc-notes" data-notes></ul>
    </section>
    <section class="tc-sec" data-item-sec hidden>
      <h2 class="tc-h" data-item-h><?= Lang::e('item.h') ?></h2>
      <div data-item-props></div>
    </section>
    <section class="tc-sec" data-note-sec hidden>
      <h2 class="tc-h"><?= Lang::e('note.h') ?></h2>
      <div data-note-props></div>
    </section>
    <section class="tc-sec" data-mark-sec hidden>
      <h2 class="tc-h"><?= Lang::e('mark.h') ?></h2>
      <div data-mark-props></div>
    </section>
  </aside>

  <section class="tc-qty" aria-label="<?= Lang::e('qty.aria') ?>" data-qty>
    <div class="tc-qty-head">
      <h2 class="tc-h"><?= Lang::e('qty.h') ?></h2>
      <div class="tc-seg" role="tablist" aria-label="<?= Lang::e('qty.group') ?>">
        <button type="button" role="tab" class="tc-seg-btn" aria-selected="true" data-qty-mode="item"><?= Lang::e('qty.by_item') ?></button>
        <button type="button" role="tab" class="tc-seg-btn" aria-selected="false" data-qty-mode="sheet"><?= Lang::e('qty.by_sheet') ?></button>
        <button type="button" role="tab" class="tc-seg-btn" aria-selected="false" data-qty-mode="area" hidden><?= Lang::e('qty.by_area') ?></button>
      </div>
      <span class="tc-qty-warn" data-qty-warn role="status"></span>
      <span class="tc-qty-total" data-job-total></span>
      <button type="button" class="tc-x" data-qty-toggle aria-expanded="true" title="<?= Lang::e('qty.toggle') ?>"><i class="bi bi-chevron-down" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('qty.toggle') ?></span></button>
    </div>
    <div class="tc-qty-body" data-qty-body>
      <table class="tc-table" data-qty-table></table>
    </div>
  </section>

  <footer class="tc-status" aria-label="<?= Lang::e('status.aria') ?>">
    <output class="tc-measure" data-measure></output>
    <label class="tc-typein" data-typein hidden><span><?= Lang::e('typein.label') ?></span><input type="text" class="tc-input" data-typein-box autocomplete="off" spellcheck="false" placeholder="<?= Lang::e('typein.placeholder') ?>" aria-describedby="tc-typein-help"><span class="visually-hidden" id="tc-typein-help"><?= Lang::e('typein.hint') ?></span></label>
    <span class="tc-status-msg" data-status role="status"></span>
    <span class="tc-status-hint" data-snap-hint><?= Lang::e('snap45.hint') ?></span>
    <button type="button" class="tc-snap-toggle" data-snap-toggle aria-pressed="true" title="<?= Lang::e('snap.toggle.title') ?>"><i class="bi bi-magnet" aria-hidden="true"></i> <?= Lang::e('snap.toggle') ?></button>
    <output class="tc-zoom" data-zoom></output>
  </footer>
</main>
