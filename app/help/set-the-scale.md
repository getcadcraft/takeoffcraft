---
title: Set the scale
summary: Give each sheet a scale with a preset or by calibrating on a known dimension, check it, and understand why unscaled sheets are left out of the totals.
section: tasks
order: 20
keywords: detect scale, read scale, scale from text, all sheets, scale, calibrate, preset, check scale, verify, known dimension, unscaled, no scale, ratio, set scale
---

Every sheet has its own scale. You set it, or let TakeoffCraft read it from the sheets' text (below), and check it. Until a sheet has one, {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}} and {{ui:Cut-out}} refuse to measure on it. {{ui:Count}} and {{ui:Auto count}} work without a scale.

The sheets list shows each sheet's scale, or **No scale**. The bar under the open sheet says the same.

## Use a preset (when the PDF is printed at full size)

1. Open the sheet.
2. Open the {{ui:Preset}} list in the {{ui:Scale}} group.
3. Pick the scale printed on the drawing, for example `1/8" = 1'-0"` under Architectural.
   The status bar says "Scale for this sheet: 1/8" = 1'-0"."
4. Check it (below).

A preset assumes the PDF is the real paper size the drawing was made for. If someone made the PDF with "fit to page", or it is a half-size set, the preset is wrong. Calibrate instead.

The full list is in [Scale presets](topic:scale-presets).

## Read the scales from the sheets' text

Most drawings say their scale: `SCALE: 1/4" = 1'-0"` in the title block, `1:100` under a view. TakeoffCraft can read it and set every sheet at once.

1. Open the {{ui:Preset}} list and choose {{ui:From the sheets' text…}} (at the top).
2. The list shows every sheet: its scale now, and what its text says — **Says 1/4" = 1'-0"**, **No scale in its text**, or **Says not to scale** (NTS).
3. Sheets without a scale that say one are ticked. Tick or untick any, then choose {{ui:Set the ticked scales}}. One {{key:Mod+Z}} takes them all back.
4. Check one dimension on each sheet with {{ui:Check}} (below): a preset is only right when the PDF is printed at full size.

It reads architectural (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), engineering (`1" = 20'`) and metric (`1:50`) notations that match a [preset](topic:scale-presets). When a sheet says more than one scale (a plan with enlarged details), it takes the one it says most often, and one written after the word SCALE counts double; the others are shown in red so you can check. A scanned sheet has no text: set its scale by hand.

## Calibrate on a known dimension

Use this when there is no printed scale you trust, the set was resized, or the sheet says "not to scale" but has dimensions.

1. Open the sheet and zoom in on a long dimension you know, such as a grid line spacing or an overall building dimension. The longer, the more accurate.
2. Choose {{ui:Calibrate}} in the {{ui:Scale}} group, or press {{key:K}}.
3. Click one end of the dimension. Zoom in on each end for precision; you can zoom and pan between the clicks.
4. Click the other end. Hold {{key:Shift}} to keep the line at 0°, 45° or 90°.
   The **Calibrate this sheet** dialog opens.
5. Type the real distance in **Real distance**, for example `24'-6 1/2"`, `24.5` (decimal feet), `30"` or `7.5 m`. See [Length, rate and percent entry](topic:entry-formats).
6. Choose {{ui:Set the scale}}.
   The status bar shows the scale as "1" = (n)'", and when it is within 0.5% of a preset it says which one, for example "which matches 1/4" = 1'-0" (pick that preset for an exact scale)".
   TakeoffCraft goes back to the {{ui:Select}} tool.

When the calibration matches a preset, picking that preset gives an exact scale instead of one that depends on where you clicked.

## Check the scale

Always check a new scale on a second dimension.

1. Choose {{ui:Check}} in the {{ui:Scale}} group, or press {{key:D}}.
2. Click both ends of a dimension printed on the drawing.
   The status bar shows "Check: 12'-6"" with the same length in decimal feet and meters, and the check line stays on the sheet with its length.
3. Compare it with the printed dimension. If it is off, calibrate on a longer dimension.

Press {{key:Esc}} to clear the check line.

## Change a scale

Pick another preset or calibrate again. If the sheet already has measurements, TakeoffCraft asks **Change this sheet's scale?** and says how many measurements will be measured again. Choose {{ui:Change the scale}}. Every run and area on the sheet is re-measured at the new scale. You can undo it with {{key:Mod+Z}}.

## Why unscaled sheets are not counted as zero

A mark on a sheet with no scale has no real length or area. TakeoffCraft never counts it as zero, which would quietly make your estimate too low. Instead it:

- leaves those marks out of the totals,
- shows "+(n) unscaled" next to the item in {{ui:Quantities}},
- shows "Incomplete: (n) marks on sheets with no scale (not in the totals)" in the table header,
- writes the count into the notes column of the spreadsheet export.

This can happen when you open a project whose scales were never set. Give the sheet a scale and the marks are counted at once. Count marks are always counted; they need no scale.

## Tips

- Set the scale on every sheet you will measure before you start. Scan the sheets list for **No scale** to find the ones left (the search box looks at sheet names, not scales).
- Details and enlarged plans on the same sheet often use another scale. TakeoffCraft has one scale per sheet; see [What is not built yet](topic:not-built-yet).
- Metric drawings: pick a metric preset such as `1:100`, or calibrate with a metric distance like `6000 mm`.
