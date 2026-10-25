---
title: The TakeoffCraft screen
summary: A tour of the window by on-screen name - the toolbar, the sheets list, the sheet, the Items panel, the Quantities table and the status bar.
section: start
order: 20
keywords: screen, layout, layouts, ribbon, project browser, toolbox, info box, toolbar, panels, sheets list, items panel, quantities, status bar, tour, interface
---

TakeoffCraft fills the browser window under the CadCraft app bar. From top to bottom and left to right:

| Part | Where | What it is for |
|---|---|---|
| App bar | Very top | The app name, the version, {{ui:About TakeoffCraft}}, {{ui:Help}} ({{key:F1}}), {{ui:Save for offline}}, {{ui:Settings}} ({{key:Mod+,}}), the {{ui:Full screen}} button and the {{ui:Paper}} / {{ui:Model}} theme switch. |
| Toolbar | Under the app bar | Every command, in groups: {{ui:File}}, {{ui:Export}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Edit}}, {{ui:View}}. |
| Sheets | Left | Every page of every open PDF, with a thumbnail, its scale and its mark count. |
| The sheet | Middle | The open page. You measure here. |
| Items | Right | Your takeoff items, the selected item's settings, and the selected mark. |
| Quantities | Bottom | Quantities and costs by item or by sheet, and the job total. |
| Status bar | Very bottom | The live measurement, messages, the 45° hint and the zoom. |

## The toolbar

Hover over any button to see what it does and its key.

| Group | Buttons |
|---|---|
| {{ui:File}} | {{ui:New}} (empty takeoff), {{ui:Open PDFs}} ({{key:Mod+O}}), {{ui:Open takeoff}} (a `.takeoff.json` project), {{ui:Save takeoff}} ({{key:Mod+S}}) |
| {{ui:Export}} | One menu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Marked PDF}} |
| {{ui:Scale}} | {{ui:Calibrate}} ({{key:K}}), {{ui:Check}} ({{key:D}}), and the {{ui:Preset}} list |
| {{ui:Takeoff}} | {{ui:Select}} ({{key:V}}), {{ui:Linear}} ({{key:L}}), {{ui:Area}} ({{key:A}}), {{ui:Circle}} ({{key:O}}), {{ui:Arc}} ({{key:R}}, an on/off switch), {{ui:Deduct}} ({{key:E}}, an on/off switch), {{ui:Cut-out}} ({{key:X}}), {{ui:Count}} ({{key:C}}), {{ui:Auto count}} ({{key:S}}) |
| {{ui:Edit}} | {{ui:Undo}} ({{key:Mod+Z}}), {{ui:Redo}} ({{key:Mod+Y}}), {{ui:Copy}} ({{key:Mod+C}}), {{ui:Paste}} ({{key:Mod+V}}), and {{ui:More}}: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}} |
| {{ui:View}} | {{ui:Fit page}} ({{key:F}}), {{ui:Fit width}} ({{key:W}}) |

The tool you are using is shown pressed. The {{ui:Arc}} and {{ui:Deduct}} buttons stay pressed while they are on.

## Sheets (left)

- **Search sheets** filters the list by sheet name, file name or page label.
- Each sheet shows a thumbnail (drawn as you scroll), its name, and either its scale or **No scale**.
- The right side of each row shows how many marks the sheet has. While an item is highlighted, it shows how many of that item's marks are on the sheet instead.
- Click a sheet to open it. {{key:PageDown}} and {{key:PageUp}} move to the next and previous sheet in the list.
- When a takeoff covers PDFs that are not open, a note under the list names them. See [Save and reopen a takeoff](topic:save-and-reopen).

Sheet names come from the PDF: a page label such as `A-101` becomes the sheet name. A page with no label is named after its file and page number, like "Plans, page 3". With several PDFs open, labeled sheets also show the file name.

## The sheet (middle)

- The bar under the sheet shows the sheet name and its scale, or "No scale yet: pick a preset or calibrate". Its buttons: {{ui:MarkupCraft}} (when that app can take the PDF; see [Start a takeoff and open a plan set](topic:open-plan-set)), {{ui:Compare}} (an older version of the sheet over this one: [Compare a revised sheet](topic:compare-revisions)), "(n) to check" (flagged marks, when there are any) and {{ui:3D}} (the [3D check view](topic:check-in-3d)).
- Before any PDF is open, the middle shows a short five-step guide.
- The wheel zooms at the pointer. Drag to pan. See [Keyboard and mouse](topic:keyboard).
- While you use {{ui:Auto count}}, a bar with its controls appears at the top of the sheet.

## Items (right)

At the top, the {{ui:Bid area}} list: the building, floor or phase new marks go in ([Bid areas](topic:bid-areas)).

- {{ui:New item}} opens a small form: a name, a type ({{ui:Linear (length)}}, {{ui:Area}} or {{ui:Count}}) and {{ui:Add}}.
- The list shows each item's color, type icon, name and quantity. Click an item to draw with it and highlight its marks on every sheet. Click it again to stop highlighting.
- Under the list, **Item: (name)** is the item editor: name, type, color, unit, height or depth, waste, material and labor rates, the measured values, and the {{ui:Assembly}}. See [Create takeoff items](topic:create-items).
- **Selected mark** appears when you select a mark: which item it belongs to, its sheet, its measurements, and buttons such as {{ui:Add a cut-out}} and {{ui:Delete mark}}. With several marks selected it becomes **Selected marks**: how many of each item, and {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} and {{ui:Delete marks}}.
- The item editor ends with {{ui:Copy item}} and {{ui:Duplicate item}}: an item with its assembly and costs, without marks. See [Copy, paste and duplicate marks](topic:copy-paste).

## Quantities (bottom)

- {{ui:By item}} lists every item and its assembly components with quantity, waste, rates and extended costs. You can type waste and rates straight into the table.
- {{ui:By sheet}} lists each item's quantity on each sheet.
- A warning starting with **Incomplete:** appears when something is left out of the totals.
- {{ui:Job total}} is at the right of the header.
- The arrow button at the far right hides or shows the table to give the sheet more room.

See [Read quantities and the estimate](topic:read-quantities).

## Status bar (bottom)

From left to right: the live measurement while you draw (length, area, radius or a check result), the {{ui:Type}} box while you type a length, messages from TakeoffCraft, the reminder "Shift snaps to 45°" (or "Snaps to 45°; Shift frees the angle" when that is on in [Settings](topic:settings)), the {{ui:Snap}} button (snapping to the drawing's lines, on when highlighted; {{key:F3}}), and the zoom percentage.

:::tip
Read the status bar when something does not happen. TakeoffCraft explains there why it refused a click, for example "This sheet has no scale yet".
:::

## Other layouts

Everything above is the {{ui:CadCraft classic}} layout, the start. {{ui:Settings}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Layout}} offers two more; the same tools and keys work in all three, and picking {{ui:CadCraft classic}} again puts every control back where it was.

| Layout | In TakeoffCraft |
|---|---|
| {{ui:Ribbon and project browser}} | The {{ui:Takeoff ribbon}} across the top ([Menus, keys and mouse](topic:menus-keys-and-mouse)), a bar for the running tool, a tab for each sheet you open (a drawing's Model and layouts are sheets too) with the scale presets and {{ui:Fit page}} under the sheet. The left panel holds {{ui:Properties}} (the selected item, note or mark) over the {{ui:Takeoff browser}}: {{ui:Sheets}} (click one to open it in a tab), {{ui:Conditions}} (click one to draw with it) and {{ui:Estimate}} (each item's total and the job total); the thumbnails are its second tab. |
| {{ui:Toolbox and info box}} | The toolbar over the sheet, an info box with the {{ui:Bid area}}, the running tool or the selection and the sheet bar, a column of the takeoff tools on the left, a tab for every sheet, and {{ui:Snap}} and the zoom under the sheet. |

While the [3D check view](topic:check-in-3d) is open, the sheet tabs and the bar under the sheet step aside; close the 3D view to measure again. On a phone the phone layout always runs.

## Full screen and themes

The {{ui:Full screen}} button in the app bar, or {{key:Ctrl+Shift+F}} (Control on every platform, also on a Mac), cycles through normal, full screen, and full screen with the bars hidden. With the bars hidden, move the pointer to the top edge to show them again.

{{ui:Paper}} is the light theme and {{ui:Model}} the dark one. In {{ui:Model}} the drawing is shown inverted (light lines on dark) on screen only; exports are never changed.
