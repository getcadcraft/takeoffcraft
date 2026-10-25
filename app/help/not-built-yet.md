---
title: What is not built yet
summary: Takeoff features this build does not have, and what to do instead today.
section: trouble
order: 20
keywords: limits, missing, not yet, roadmap, planned, workaround, per run, cloud, desktop
---

TakeoffCraft is in development. This list is what the current build does not do, and how to get the job done anyway.

## Measuring

| Not built yet | Instead, today |
|---|---|
| Inserting a point in the middle of a run or outline | Delete the mark and draw it again. |
| Box (window) selection | {{key:Shift}} + click each mark, or {{key:Mod+A}} for every mark on the sheet. See [Copy, paste and duplicate marks](topic:copy-paste). |
| Rotating, mirroring or rescaling a pasted copy | Paste on a sheet at the same scale and in the same orientation; draw the rest by hand. |
| Reading a scale from a scanned sheet, or from a graphic scale bar | Pick the preset, or calibrate on the bar's length. |
| More than one scale per sheet (detail areas, enlarged plans) | Measure the part at the sheet's scale, and take off the detail on its own enlarged sheet if the set has one. |

## Items and pricing

| Not built yet | Instead, today |
|---|---|
| Assembly formulas that use an item's other kinds of marks (the doors of a room item in its floor's formulas) | Formulas use the main type's totals; price the other kinds on their own rows. |
| Assembly formulas worked out run by run | Formulas use the item's totals; use `N` for per-run extras. |
| Formulas that use another item's quantities | Repeat the measurement in that item, or work it out in the spreadsheet export. |
| Crews on assembly components, or a working day other than 8 hours | Give the crew to the item; read crew-days for another day length as crew-hours ÷ your day. |
| Markups other than notes, clouds and highlights (arrows, dimensions, stamps), or replies on a note | Write it in the note's text; change its status as it is settled. |
| A price library shared by a team, or kept with your account | The library is kept in this browser: export it as a CSV and import it on the other computer. |
| Trade packs reviewed by working estimators | Every pack is a starter: check its assumptions against your job and your products before you price with it. See [Trade packs](topic:trade-packs). |
| Prices in trade packs | Packs bring assemblies only: set your own rates, or import your price list as a CSV. |
| Renaming the takeoff | The name comes from the first PDF; rename the downloaded files. |
| Naming sheets by hand | Sheets are named from the PDF's page labels; search by file name and page. |

## Drawings (DWG and DXF)

| Not built yet | Instead, today |
|---|---|
| Plot style tables, pen assignments and CTB files on a drawing's sheets | A drawing is drawn black, or in its colors darkened for paper; line weights come from the drawing. |
| Opening a binary DXF, or a DWG older than AutoCAD 2000 | Save it as an ASCII DXF or a newer DWG. |
| Finding a linked drawing (xref) by the folder it sits in | Open the linked drawing's file too, with the host: it is found by file name among the open files. |
| Measuring 3D polylines, meshes, solids and regions | Count them by layer and type, or measure the plan view with the Linear and Area tools. |
| Text in a marked PDF from a drawing in scripts other than Latin | Characters Helvetica has no glyph for print as "?" in the marked PDF; the drawing on screen is unaffected. |
| A hand-over of a drawing to another app from the sheet bar | Open the same file in that app. |
| A drawing that carries the takeoff inside it, as {{ui:PDF with the takeoff inside}} does for PDFs | {{ui:Save takeoff}}: the `.takeoff.json` reopens on the same drawing, found by its contents. |
| Drawing or counting PDF underlays, images and OLE objects placed in a drawing | Images show as a frame only. Open the underlay PDF itself as a sheet. |

## Auto count

| Not built yet | Instead, today |
|---|---|
| Finding symbols on a sheet with no scale drawn at another size | Give the sheet its scale, or search it with a box drawn there. |
| Finding mirrored symbols | Count those by hand, or search again with a box around a mirrored one. |

## Files and sharing

| Not built yet | Instead, today |
|---|---|
| One PDF that both shows the marks and carries the takeoff | {{ui:Marked PDF}} for people to see the marks; {{ui:PDF with the takeoff inside}} to reopen in TakeoffCraft. |
| A CSV of quantities by sheet or of the marks | Use {{ui:XLSX}}: its By sheet and Marks worksheets have them. |
| Cloud saving | Not available yet. Save project files to your computer and back them up. |
| A separate TakeoffCraft desktop app | From 0.5 the desktop app is CadCraft Studio, with all eight apps in one install. TakeoffCraft also runs in the browser. |

## Screen and input

| Not built yet | Instead, today |
|---|---|
| A right-click (or long-press) menu | Use the toolbar, the panels and the keys. A long press finishes a run or an outline. |
| Rotating the view | Pages rotated in the PDF already show upright. |

## 3D view

| Not built yet | Instead, today |
|---|---|
| Drawing or editing marks in 3D | Go back to the sheet ({{key:3}}) to draw; select and delete work in 3D. |
| Lining up stacked floors plotted at different places on their pages | Stack floors plotted alike; check the others one sheet at a time. |
| Count posts sized like the counted object | Every post on a sheet is the same size; it marks where a count is, not what it is. |

## Bidding

| Not built yet | Instead, today |
|---|---|
| Addenda to a package that was already sent, award letters, a scope sheet each bidder signs off | Send a new package, and write the award yourself. [Send a package for bids](topic:bid-invitations) covers what is built. |
| Sending bid invitations from any account: while it is tested, mail to outside bidders is switched off except for accounts the CadCraft team has enabled | Download the {{ui:Scope CSV}}, email it yourself and type the bids in. |
| Sending bid packages from a Studio window | Send from TakeoffCraft in the browser. |
| Repricing an alternate's bid area with a chosen bid | Alternates and bid-area subtotals use your own prices; adjust the alternate by hand. |
| Automatic reminders before a subcontractor's insurance or license date runs out | The date is flagged on the Subcontractors page once it is past or within 30 days; check it when you invite. |

## Panels

| Not built yet | Instead, today |
|---|---|
| Moving the {{ui:Quantities}} table | Only the {{ui:Sheets}} and {{ui:Items}} panels move. See [Arrange the panels](common:arrange-panels). |

## Spreadsheets

The XLSX workbook has been checked in LibreOffice Calc, which recalculated every total to the same cent as TakeoffCraft. It has not been opened in Excel yet. If a spreadsheet program shows something unexpected, the CSV export holds the same estimate as plain values.
