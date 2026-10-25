---
title: What's new in 0.7
summary: DWG and DXF drawings open as sheets with their own scale, exact counts and lengths from the drawing itself, the chosen subcontractor bid as a package's price, bid invitations with sealed prices, assistant tools for drawings, and USD from the 3D check view.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.7, version, new features, dwg, dxf, drawing, layouts, model space, drawing scale, count from drawing, cad count, blocks, dynamic blocks, attributes, layers, xref, linked drawing, measure drawing, polyline, hatch, marked pdf, chosen bid, use a bid, send for bids, bid invitation, sealed bids, bid opening, late bid, subcontractor records, csv, assistant, mcp, usd, usdz, units, unit lists, compact, panels, dialogs, portuguese
---

This is what changed in TakeoffCraft 0.7, compared with 0.6. Drawings now open as they are, with no plotting to PDF first, and a bid package can go out to subcontractors and come back priced.

## New

### DWG and DXF drawings

- **Open a drawing as sheets.** {{ui:Open plans}} in the {{ui:File}} group ({{key:Mod+O}}, or drop the files) takes DWG and DXF drawings beside PDFs. Model space and every layout become sheets in the {{ui:Sheets}} list, and a takeoff can cover drawings and PDFs together. Nothing is uploaded. See [Open a DWG or DXF drawing](topic:open-a-drawing).
- **The scale comes from the drawing.** A layout starts at the scale of its biggest viewport, named as a preset when it is one, such as 1/2" = 1'-0". Model starts in the drawing's units. A drawing that has no units says "No scale" until you calibrate it. {{ui:Calibrate}}, {{ui:Check}} and {{ui:Preset}} still win. See [The scale](topic:open-a-drawing#the-scale).
- **Layers and linked drawings.** {{ui:Layers}} on the sheet bar shows or hides the drawing's layers. Layers the file turned off or froze start hidden and are not counted unless you choose to. A linked drawing (xref) opened beside its host is drawn and counted where it is inserted; until it is open, the status bar says what is missing. See [Layers](topic:open-a-drawing#layers).
- **The marked PDF works from a drawing.** {{ui:Export}} › {{ui:Marked PDF}} draws a drawing's marked sheets as a PDF first, so the copy shows your marks and legend with no plotting step. It is drawn in black or the drawing's colours, without plot style tables. See [A marked PDF](topic:export-estimate#a-marked-pdf).

### Exact counts and lengths from a drawing

- **Count what the drawing says is there.** {{ui:CAD count}} on the sheet bar counts a block by name (nested blocks, dynamic block states and block arrays included), everything of one type on a layer, or a text or attribute value. It counts what the sheet shows or the whole drawing once. Adding the marks is one undo step, and counting again adds only what is new. {{ui:Auto count}} stays for PDFs and for symbols that are not blocks. See [Count from a drawing](topic:count-from-a-drawing).
- **Measure from the drawing's own lines.** {{ui:Measure drawing}} takes the lines, arcs, polylines, circles, hatches and solids you click or window as marks of a linear or area item. Arcs, bulges and a hatch's holes come out exact; ellipses and splines are measured in fine chords, and the bar says so. See [Measure from a drawing](topic:measure-from-a-drawing).

### Bids

- **Use a subcontractor's bid as the package's price.** In {{ui:Export}} › {{ui:Bid packages and leveling…}}, choose {{ui:Use}} on a bid. The package's items stay as quantities, one **Chosen bid** line carries the price, items the bid leaves out stay at your own cost, and overhead, profit and bond apply to it. Switching bids is one undo step; the workbook and the bid summary carry it. See [Use a bid as the package's price](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Send a package for bids.** {{ui:Send for bids…}} under a package emails each subcontractor a link to a page that needs no account: they see the scope and the sheets as a PDF, type a price on each line or mark it not included, add notes and up to three files, or decline. {{ui:Get prices}} pulls what came back into the leveling sheet, flagged **web**. Sending is open only to accounts the CadCraft team has enabled while it is tested (see below). See [Send a package for bids](topic:bid-invitations).
- **Sealed until the opening.** Prices can stay sealed until an opening time you set: until then nobody sees a price, you included. At the opening every bid shows at once, and a bid that came after the due time is marked late. See [Sealed bids and the opening](topic:bid-invitations#sealed-bids-and-the-opening).
- **Subcontractor records.** Your account on getcadcraft.com keeps each company's contacts, trades, qualification answers, and insurance and license dates (flagged once past or within 30 days), with their past bids. Import and export them as CSV, and pick them when you send a package. See [On the website](topic:bid-invitations#on-the-website).

### AI assistants

- **Assistants can add to the takeoff.** With **Edit** ticked, your own assistant can add items (`items_add`) and measure runs, areas and counts on a sheet (`marks_add`; lengths and areas only on a scaled sheet), each call one undo step.
- **Assistant tools for drawings.** On an open DWG or DXF an assistant can list its sheets and what can be counted, count exactly, add the count marks, and measure from the drawing's geometry. Without TakeoffCraft open, the CadCraft MCP server opens a drawing as a new takeoff and saves it, and `cadcraft count` counts from the command line. See [What an assistant can ask for](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **The 3D check view as USD.** {{ui:USD package (.usdz)}} beside {{ui:GLB}} in the 3D check view writes each wall, slab, plate, count post and run as its own object, named after its item and carrying its quantity, in metres. An assistant can export it too (`usd_export`). See [Export the 3D check view as USD](topic:usd).

## In every app

- **Units.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} has one list each for length, area, volume, angle and slope, with the exact sizes the units' definitions give (the US survey foot is its own unit). Switch off the units you never use and they leave the unit lists; star one and new work starts in it. A file always keeps its own unit. In TakeoffCraft an item's {{ui:Unit}} lists follow the switches, a new item starts in the starred length or area unit, roofing squares (SQ), acres and hectares are new area units, and a length box takes any unit's mark, such as `3 yd`. See [Units, typed values and the unit lists](common:unit-lists).
- **A denser layout and panels that tidy away.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} fits more on the screen (touch screens and phones keep their large buttons). Each side panel has a slim title bar: drag it to dock or float the panel, drop it on another panel's bar to share one frame as tabs, pin it to slide away to the edge, or hide it and bring it back from the edge. See [Arrange the panels](common:arrange-panels#make-the-layout-denser).
- **Dialogs move.** Drag a dialog by its title bar out of the way of the drawing; it comes back where you left it. Double-click the title bar to centre it again. See [Move a dialog](common:arrange-panels#move-a-dialog).
- **Recipes for AI assistants.** Ten worked requests for your own assistant (tidy a drawing, plot a set, check drawings, ask a model questions, total a takeoff, try a part variant…), each with the tools it calls and the permissions it needs, and each replayed by our tests. The apps contain no AI. See [Recipes for AI assistants](common:assistants-recipes).
- **Languages.** **Português (Portugal)** is new in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. It, **Português (Brasil)**, **Español (México)** and **Bahasa Indonesia** now have every word of the apps, as drafts not yet reviewed by a native speaker. Help topics are in English.
- **CadCraft Studio** says why an update check failed (no file for your system yet, no network, a bad signature) instead of just "Done", and stops bringing back a What's new card you closed until there is a newer release.

## Not in this version yet

- **0.7 is not code-signed.** Signing, and the Microsoft Store package, moved to 0.8 because the certificate validation has not come through yet. Check the SHA-256 beside each file on getcadcraft.com/download. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, the first time, right-click CadCraft Studio and choose {{ui:Open}}. CadCraft Studio is not in an app store yet, and there is no iPad or iPhone build yet.
- The angle and slope lists in {{ui:Units}} are saved, but no box reads them yet.
- **Bid invitations are switched off for most accounts.** While the feature is tested, mail to outside bidders goes out only from accounts the CadCraft team has enabled. Bidders' pages work for every invitation already sent. Everyone else: download the {{ui:Scope CSV}}, email it yourself and type the bids in.
- A CadCraft Studio window can't send bid invitations yet: it says to use TakeoffCraft in the browser. Opening a takeoff with sent requests, leveling and choosing a bid work in Studio.
- Addenda, award letters, a scope sheet each bidder signs off and automatic reminders before an insurance date runs out are not built. A chosen bid does not reprice an alternate's bid area.
- Drawings: plot style tables and CTB files are not applied, a binary DXF is refused (save it as ASCII DXF or DWG), linked drawings are found only among the open files by file name, and PDF underlays, images and OLE objects in a drawing are not drawn or counted. The counts and scales have been checked on sample drawings, not yet on drawings from a real job opened in the program that made them.
- An assistant can add items and marks but cannot move, change or delete marks that are already there.

Everything else is in [Not built yet](topic:not-built-yet).
