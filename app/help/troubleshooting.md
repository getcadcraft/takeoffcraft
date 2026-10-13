---
title: Troubleshooting
summary: Symptoms, causes and fixes for the messages and surprises you may meet in TakeoffCraft, quoted as the app shows them.
section: trouble
order: 10
keywords: problems, errors, not working, fix, help, refused, wont measure, no scale, missing marks, export failed, offline, touch
---

TakeoffCraft explains most refusals in the status bar at the bottom of the window. Find the message below.

## Opening files

| Message or symptom | Cause | Fix |
|---|---|---|
| The PDF reader could not load. Reload the page to try again. | The app's PDF reader did not load, usually because you are offline and the app was never saved for offline use. | Reconnect and reload. Then choose {{ui:Save for offline}} and wait for {{ui:Offline ready}}; see [Working offline](common:offline). |
| (name) is password-protected. Open an unprotected copy. | The PDF needs a password to open. | Ask for an unprotected copy, or remove the password in a PDF program you trust. |
| (name) could not be read as a PDF (…) | The file is damaged or not really a PDF. | Download it again, or re-save it from the program that made it. |
| (name) is already open. | The same PDF (same contents) is open. | Nothing to do. |
| TakeoffCraft opens PDFs and .takeoff.json projects. Skipped: … | Other file types were dropped. | Convert drawings to PDF first. |
| Nothing happens when I drop files | The files were dropped outside the browser window, or the browser opened the PDF in a new tab. | Drop onto the TakeoffCraft page itself; the "Drop PDFs or a .takeoff.json" frame shows when it will work. |
| Opening a big set takes a while | Every PDF is read in full to fingerprint it. | Wait for the "Opening (name)…" message to clear. Thumbnails fill in as you scroll. |

## Measuring

| Message or symptom | Cause | Fix |
|---|---|---|
| Open a PDF first. | No sheet is open. | Open a PDF. |
| This sheet has no scale yet, so it can't be measured. Pick a preset scale or calibrate first (counts work without one). | Linear, area, circle and cut-out tools need a scale. | [Set the scale](topic:set-the-scale). |
| Make a linear item first (name it under Items), then click on the sheet. | There is no item of that type. | Fill in the {{ui:New item}} form that opened, and choose {{ui:Add}}. |
| Pick an item to take off first (Items panel). | The current item was deleted. | Click an item under {{ui:Items}}. |
| A run needs at least two points. | You finished after one click. | Click at least two points. |
| An area needs at least three points. | Too few corners. | Click at least three corners. |
| The outline crosses itself, so its area would be wrong. Draw it again without crossing. | A figure-eight shape. | Draw it as two areas, or go round the edge in order. |
| Those points enclose no area. | All the points are on one line. | Click corners that enclose a space. |
| Select an area mark first (Select tool), then choose Cut-out and draw the hole inside it. | {{ui:Cut-out}} needs a selected area. | Press {{key:V}}, click the area, then {{key:X}}. |
| A cut-out has to sit fully inside the area. | The hole crosses or leaves the outline. | Draw the hole inside the area. |
| Cut-outs cannot overlap each other. | Two holes overlap. | Draw one hole round both, or keep them apart. |
| … The point was put back. | A dragged corner would make the outline cross itself or push a hole outside. | Drag to a place that keeps the shape valid. |
| Click a point on the circle's edge, away from its center. | The second click was too close to the center. | Click further out. |
| Clicks pan the sheet instead of adding points | The pointer moved more than a few pixels while the button was down; that counts as a drag. | Click without moving, especially on a trackpad. |
| Shift does not snap | You are placing a point on an arc, or drawing a circle. | The 45° snap applies to straight segments only. |
| Points jump onto a nearby line | Snap to the drawing's lines is on. | Zoom in to click between lines, or press {{key:F3}} to turn Snap off. |
| No snap marker appears | Snap is off, the sheet is a scan, or the tool does not snap (Count, Auto count, pasting). | Press {{key:F3}}; on a scan there are no lines to snap to. |
| The length is wrong | The scale is wrong (often a resized PDF with a preset). | Use {{ui:Check}} on a known dimension, then {{ui:Calibrate}}. |

## Scale

| Message or symptom | Cause | Fix |
|---|---|---|
| Pick two points further apart. | The calibration points are almost on top of each other. | Calibrate on a longer dimension. |
| A message in the calibrate dialog, like "That distance could not be read" | The distance is in a form TakeoffCraft cannot read. | See [Length, rate and percent entry](topic:entry-formats). |
| This sheet has no scale yet, so there is nothing to check. Calibrate it, or pick a preset. | {{ui:Check}} on an unscaled sheet. | Set a scale first. |
| The {{ui:Preset}} list is grayed out | No sheet is open. | Open a PDF. |

## Quantities and formulas

| Message or symptom | Cause | Fix |
|---|---|---|
| Incomplete: … (not in the totals) | A formula error, or marks on sheets with no scale. | See [Read quantities and the estimate](topic:read-quantities#the-incomplete-warning). |
| +(n) unscaled next to an item | Some of its marks are on sheets with no scale. | Give those sheets a scale. |
| Formula error: … | The formula cannot be worked out. | See [Formula language](topic:formulas#errors). |
| This item has marks, so its type cannot change. | The type is locked once there are marks. | Make a new item of the other type and redraw the marks with it. |
| An item needs a name. | The name field was emptied. | Type a name. |
| Type an amount like 12.50. / Type a percentage like 10 or 7.5. | A rate or waste could not be read. | See [Length, rate and percent entry](topic:entry-formats). |
| A total looks doubled | The item has its own rates and components that carry the same cost. | Set the item's own rates to 0 when its components carry the cost. |
| This item's marks are on PDFs that are not open. | You clicked an item whose marks are all on PDFs you have not opened. | Open those PDFs; their names are listed under {{ui:Sheets}}. |

## Auto count

| Message or symptom | Cause | Fix |
|---|---|---|
| That box is too small. Draw it around the whole symbol. | The box is tiny. | Zoom in and box the whole symbol. |
| That box is almost empty. Draw it around a symbol. | The box holds only paper. | Box the symbol itself. |
| No matches. Lower the match slider, or box the symbol more tightly. | Nothing scored high enough. | Box the symbol tightly, or drag the {{ui:Match}} slider lower. |
| Too many matches, including wrong symbols | Similar symbols score close to the real one. | Raise the {{ui:Match}} slider and click wrong boxes to reject them. |
| Matches missing on other sheets | Those sheets draw the symbol at another size, or at an angle that is not a 90° step. | Search those sheets with a box drawn there, or count by hand. |
| (n) sheets were too large to search at this symbol size. | The sheet would be too big at the working size. | Box a larger symbol, or count that sheet by hand. |
| The search failed: … | The background search stopped. | Try again; reload the page if it repeats (save first). Offline, it works only once the app bar shows {{ui:Offline ready}}. |
| Dragging draws a box instead of panning | That is how {{ui:Auto count}} works. | Hold {{key:Space}} and drag, or drag with the middle button. |

## Saving and exporting

| Message or symptom | Cause | Fix |
|---|---|---|
| Nothing to export yet: make an item and take it off. | There are no items. | Make an item first. |
| No marks on the open PDFs yet. | {{ui:Marked PDF}} has nothing to draw on the open PDFs. | Open the PDFs that have marks. |
| This PDF is password-protected or encrypted, so a marked copy cannot be written. … | The PDF is encrypted. | Export {{ui:XLSX}} instead, or use an unencrypted copy of the PDF (it then needs its own takeoff, since it is a different file). |
| The marked PDF could not be written: … | Often: offline, and the app was not saved for offline use, so the PDF writer is missing. | Go online and choose {{ui:Marked PDF}} again. To avoid it, choose {{ui:Save for offline}} and wait for {{ui:Offline ready}}. |
| Only one marked PDF downloaded | The browser blocked several downloads at once. | Allow multiple downloads for this site, and export again. |
| (file) is not a TakeoffCraft project (it is not valid JSON). / This is not a TakeoffCraft project file. | Wrong file, or a damaged one. | Pick the `.takeoff.json` file. |
| This project was saved by a newer TakeoffCraft. Open it there. | The file comes from a newer build. | Open it in the newer build. |
| (n) marks were damaged and left out. | Part of the file was damaged or edited by hand. | The rest opened. Redraw the missing marks, or open an older copy. |
| Marks missing after reopening | The PDFs are not open, or one of them changed. | See [Save and reopen a takeoff](topic:save-and-reopen#when-a-pdf-has-changed). |
| The browser asks "Leave site?" | There are unsaved changes. | Stay, and save with {{key:Mod+S}}. |

## Keys and mouse

| Symptom | Cause | Fix |
|---|---|---|
| Letter keys do nothing | The cursor is in a field (search, item editor, table). | Click on the sheet, or press {{key:Tab}} out of the field. |
| The wheel zooms instead of scrolling | The wheel always zooms the sheet. | Drag to pan. |
| The whole page got bigger or smaller | Browser zoom ({{key:Mod+Plus}} or {{key:Mod+Minus}}). | Press {{key:Mod+0}}. Zoom the sheet with the wheel or the bare {{key:Plus}} and {{key:Minus}}. |
| A mark disappeared when I pressed Backspace | Backspace deletes the selected mark when you are not drawing. | {{key:Mod+Z}} brings it back. |
| Right-click does not finish on a Mac | Control-click arrives as a normal click. | Use a two-finger click with secondary click turned on, or press {{key:Enter}}. |

## Touch screens

On a touch screen:

- **Tap** places a point (or selects a mark with {{ui:Select}}). One finger dragging pans.
- **Two fingers** pinch to zoom about the point between them, and pan when they move together. Putting a second finger down cancels what the first one started, so a pinch never leaves a point.
- **Finish** a run or an outline with a **long press** (the right click), a **double tap**, or {{ui:Finish}} in the bar at the bottom of the sheet. The same bar has {{ui:Back}} (take the last point back) and {{ui:Cancel}}. Areas also close by tapping the first point.
- Fingers get bigger targets: points snap, close and pick from farther away, and corner handles are larger.

Typing lengths needs a keyboard; the on-screen keyboard works when the {{ui:Type}} box is focused.

On a tablet, a keyboard and a mouse or trackpad make takeoff much easier.

## Working offline

| Button or symptom | Cause | Fix |
|---|---|---|
| {{ui:Could not save}} | Some of the app's files did not download while saving for offline use. | Check your connection and choose the button again. |
| {{ui:Offline not available}} | Private windows and some managed computers block offline copies. | Use a normal window, or another browser. |
| "Saving…" never starts | You are offline; saving needs a connection. | Save while online. |
| The app is old after an update | The offline copy is from an earlier day. | Online, choose {{ui:Offline ready}}, then {{ui:Save again (get the newest version)}}. |
| You want the space back | The offline copy is about 6 MB. | Choose {{ui:Offline ready}}, then {{ui:Remove the offline copy}}. |

See [Working offline](common:offline).

## Still stuck

Reload the page if the app stops responding. Your takeoff is lost on reload unless you saved it, so save first with {{key:Mod+S}} if you can. For browser questions see [Browsers and computers](common:browsers).
