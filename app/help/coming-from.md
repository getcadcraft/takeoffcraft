---
title: Coming from other takeoff software
summary: How the habits of dedicated takeoff programs and PDF markup tools map to TakeoffCraft, and the differences that trip people up.
section: switching
order: 10
keywords: switching, migrate, conditions, parts, measurement tools, markups list, quantity link, takeoff habits, differences, compare
---

If you have done takeoff in PlanSwift or with the measurement tools in Bluebeam Revu, most of TakeoffCraft will feel familiar: a plan set, a scale per sheet, things you measure, and a priced total. The way the pieces fit together is different in places, and those places are below.

## Habits mapped

| You are used to | In TakeoffCraft |
|---|---|
| Opening a job or project that stores the plans (PlanSwift) | Open the PDFs and the `.takeoff.json` project side by side. The project stores only the takeoff; the PDFs stay your own files. |
| A markups list with notes, clouds and highlights (Bluebeam) | {{ui:Markup}} on the sheet bar: notes, clouds and highlights with a status (Open, Answered, Closed), listed under **Markups**, drawn in the marked PDF. See [Notes, clouds and highlights](topic:markups). |
| Measurements saved as markups inside the PDF (Bluebeam) | The takeoff lives in the `.takeoff.json` file. {{ui:Marked PDF}} writes a copy with the takeoff drawn in, for sharing; {{ui:PDF with the takeoff inside}} writes a copy that carries the takeoff, to reopen in TakeoffCraft. |
| Takeoff items (PlanSwift), custom measurement tools saved in the Tool Chest (Bluebeam) | **Items** under {{ui:Items}}: name, type, color, unit, height or depth, waste, rates. |
| Parts and assemblies with formulas (PlanSwift) | The item's {{ui:Assembly}}: components with a formula using `L H A N P`. |
| Setting the page scale, or calibrating (both) | {{ui:Preset}} list or {{ui:Calibrate}} in the {{ui:Scale}} group, per sheet. {{ui:Check}} measures a known dimension. |
| Applying one scale to a page range | Not yet: set each sheet. |
| Viewports with different scales on one sheet (Bluebeam) | Not yet: one scale per sheet. |
| Polylength and area tools (Bluebeam), linear and area takeoff (PlanSwift) | {{ui:Linear}} ({{key:L}}) and {{ui:Area}} ({{key:A}}). |
| Holding Shift for straight lines | {{key:Shift}} snaps to 45° steps, the same idea. |
| Snapping to the drawing's lines | On by default: ends, midpoints, intersections and the nearest point on a line, with {{key:F3}} to turn it off, as in CAD programs. |
| Count tool (both) | {{ui:Count}} ({{key:C}}). |
| Visual search for symbols (Bluebeam) | {{ui:Auto count}} ({{key:S}}): box one symbol, review, add. |
| Cut-outs or deductions in areas | {{ui:Cut-out}} ({{key:X}}) on a selected area, and round cut-outs. |
| Deductions on linear runs | Not yet. Draw the runs without the deducted part. |
| Arc segments in a polyline | {{ui:Arc}} ({{key:R}}): click a point on the curve, then its end. |
| The Markups list with quantity columns (Bluebeam) | The {{ui:Quantities}} table, {{ui:By item}} or {{ui:By sheet}}. |
| Estimating grid with pricing (PlanSwift) | The same table: waste, material and labor per unit, extended totals, {{ui:Job total}}. |
| Exporting to Excel | {{ui:XLSX}} with live formulas, or {{ui:CSV}}. |
| Escape to stop a tool | {{key:Esc}} cancels and returns to {{ui:Select}}. |
| Right-click to finish | Right-click finishes a run or closes an area here too. There is no right-click menu. |

## Differences that trip people up

**The takeoff is not inside your PDF.** Nothing you do changes your PDFs. Save the `.takeoff.json` file and keep it with the drawings. Sending someone the marked PDF does not send them an editable takeoff: send the project file and the original PDFs, or a [PDF with the takeoff inside](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDFs are matched by contents, not by name.** A revised sheet saved over the old file name is a new file to TakeoffCraft, with no scale and no marks. Your old marks stay on the old version and keep counting. See [Save and reopen a takeoff](topic:save-and-reopen#when-a-pdf-has-changed).

**Unscaled marks are left out, not counted as zero.** If a sheet has no scale, its runs and areas do not count, and the table says "Incomplete". In many programs you would just see 0. See [Set the scale](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**There is no page-size guessing.** Presets assume the PDF is printed at full size. A half-size or "fit to page" PDF needs {{ui:Calibrate}}. Always use {{ui:Check}}.

**One item, one main type, more if you ask.** An item is linear, area or count, and its type locks once it has marks. A condition that gives you both an area and its perimeter is an area item: its perimeter is the `P` variable. A wall with both length and area is a linear item with a height. For a multi-condition item, such as a room with a floor, a base and doors, tick the other kinds under **Also measure**: each is priced on its own row. See [One item, several kinds of marks](topic:create-items#one-item-several-kinds-of-marks).

**Formulas run on totals.** Assembly formulas use the item's totals across every sheet, not each run separately. `N` (the number of runs or areas) is there for per-run extras, like one extra stud per wall.

**Perimeter includes cut-outs.** An area's `P` adds the edges of its holes. See [Measure areas with cut-outs](topic:measure-areas#read-the-area).

**Dragging pans.** A left-button drag on the sheet pans, in every tool except {{ui:Auto count}}. You never need to switch to a pan tool. The wheel zooms; it does not scroll.

**A recovery copy, not a cloud.** TakeoffCraft keeps a copy of your work in this browser and offers it back after a crash ([If the tab or the browser stops](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), but the takeoff is yours to save: {{key:Mod+S}}. Cloud saving is not available yet.

**Everything is in the browser.** There is nothing to install, and the plans are never uploaded. Desktop builds are not available yet.

## Not here yet

Per-sheet scale regions are not built yet. See [What is not built yet](topic:not-built-yet) for the full list and what to do instead.
