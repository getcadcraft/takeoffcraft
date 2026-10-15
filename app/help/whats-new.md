---
title: What's new in 0.5
summary: Trade packs of ready-made assemblies for 16 trades, new workbook reports and labor burden, spot elevations for CivilCraft, measuring one job together live, menu styles, and a layout for phones.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.5, version, new features, trade packs, packs, assemblies, csi, masterformat, material list, quote request, by division, labor burden, spot elevations, earthwork, live, work together, menu style, takeoff desk, conditions, keys, mouse, phone, fold phone, tablet, studio, settings
---

This is what changed in TakeoffCraft 0.5, compared with 0.4. Your 0.4 takeoffs open as they are.

## New

### Trade packs

- **Ready-made assemblies for 16 trades.** {{ui:Library}} at the top of the {{ui:Items}} panel, then {{ui:Trade packs…}}: electrical, drywall and framing, painting, concrete, flooring, masonry, residential and commercial roofing, siding, finish carpentry, plumbing, HVAC, insulation, landscape, decking, and a general-contractor pack by CSI division. In all, 432 assemblies. Choose imperial, metric or both. See [Trade packs](topic:trade-packs).
- **No prices.** Pack items say "set your rate": the rates are yours, from the library, the item editor or your own CSV with {{ui:Update prices}}. See [Price library](topic:price-library).
- **Starters.** Every pack says "Starter: not reviewed by an estimator yet". {{ui:Sources and details}} shows what each assembly was written from, and each assumption is marked as a starting figure. Check them against your job before you price with them.
- **Your library stays yours.** Installing keeps your own item of the same name, installing a pack again replaces only its own items, and {{ui:Remove}} takes a pack's items out in one step. Items already in a takeoff stay.
- **Share your own library as a pack.** {{ui:Export as pack…}} saves a `.ccpack.json` file, without your rates unless you tick {{ui:Include my rates as sample rates}}. {{ui:Open a pack file…}} reads one.

### Reports and pricing

- **CSI numbers.** The item editor has a {{ui:CSI number}}, such as `09 21 16`. Items from trade packs have one already. See [Create takeoff items](topic:create-items).
- **More in the workbook.** The XLSX adds a takeoff summary, a material list (parts added up by name and unit across items), a quote request for suppliers with an empty price column, and costs by CSI division. The Estimate sheet ends with the markups as live formulas. See [Export the estimate](topic:export-estimate).
- **Material list on its own.** {{ui:Export}} › {{ui:Material list}} saves it as a CSV, for ordering.
- **Labor burden.** The bid summary adds labor burden as a percentage of labor, before tax, overhead, profit and bond. It shows in the proposal PDF, the CSV and the workbook. See [Bid summary and proposal](topic:bid-summary).

### Earthwork

- **Spot elevations for CivilCraft.** A count mark can carry an {{ui:Elevation}} (`102.5`, `102'-6"` or `31.24 m`). {{ui:Export}} › {{ui:Spot elevations}} writes the open sheet's points as a CSV that CivilCraft reads. Northing and easting are sheet coordinates at the sheet's scale: distances are true, but they are not survey coordinates. See [Earthwork and spot elevations](topic:earthwork).
- The general-contractor pack has bulk excavation and utility trench items for simple digs.

### From other apps

- CadCraft's HVAC and Piping add-ons can send a duct or pipe schedule to TakeoffCraft as a PDF with the takeoff inside.
- BimCraft's {{ui:Takeoff}} button sends a house model to TakeoffCraft with every quantity marked on a scaled plan.

### Add-ons

- Add-ons for TakeoffCraft can offer item types with their assembly, add columns to the estimate CSV and XLSX, read the takeoff and add a section to the right panel. A takeoff saved without the add-on keeps its data. No add-on ships with TakeoffCraft yet.

## Changed

- **3D check view.** Small models are framed closely when the view fits them.

## Fixed

- On a phone, the quantities table ran off the right edge and the status line was cut off.
- A PDF could not open in a browser joining a live session on your network. It opens now.

## In every app

- **CadCraft Studio is the desktop app.** From 0.5 the desktop download is CadCraft Studio: all eight apps in one install. The separate installer for each app stops. TakeoffCraft still runs in the browser, and as a browser edition you can download.
- **Installers are not signed yet.** Code signing comes with 0.6. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. The macOS disk image (Apple silicon and Intel, macOS 13 or later) is not signed or notarized: the first time, right-click the app and choose {{ui:Open}}. iPad, Android and iPhone come with 0.6.
- **Work together live.** In CadCraft Studio, {{ui:Live}} shares the file you have open: teammates on the same network join with a short code and edit with you, each with their own undo. In TakeoffCraft the host's PDFs come to everyone who joins, and every window works out the same quantities and totals from the marks. Sessions on your own network are free, for everyone. Invite links over the internet aren't open yet. See [Work together live](common:work-together-live) and [Take off one job together, live](topic:work-live).
- **Menus, keys and mouse.** In {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}}, pick a menu style ({{ui:TakeoffCraft}}, or {{ui:Takeoff desk}}: a menu bar over one row of takeoff tools, where items are called conditions), give any command your own key, move commands between menus, set the wheel and the mouse buttons, and export or import a style as a `.ccinput.json` file. {{ui:Use this style in every app}} opens every app in its matching style. See [Menus, keys and mouse](topic:menus-keys-and-mouse).
- **A wider Settings dialog,** in two columns, so more fits without scrolling. See [TakeoffCraft settings](topic:settings).
- **Floating and bottom panels fit the window.** A floating panel stays above the status bar and shrinks with a small window; on a short window a panel docked at the bottom leaves the drawing room. See [Arrange the panels and use a second monitor](common:arrange-panels).
- **Phones and fold phones.** On a screen up to 760 px wide, or a phone held sideways, the sheet keeps the screen: panels open as sheets from a bar at the bottom, the {{ui:Quantities}} table slides up from the bottom, the toolbar is one row that scrolls sideways and the sheet bar is the second line. {{ui:Tools}} hides the toolbar and {{ui:Move}} puts it at the bottom. Turning the phone, or opening and closing a fold phone, keeps your work, the selection and an open dialog. The app bar's {{ui:More}} menu holds the version, Find and the links. Phones work, but TakeoffCraft is made for larger screens.
- **Touch tablets.** On a touch screen each toolbar is one row that scrolls sideways instead of wrapping onto several lines.
- **Spanish** stays a machine-made draft that has not been reviewed yet. Help topics are in English.

## Files and compatibility

- Takeoffs saved in 0.4 open in 0.5 as they are.
- A 0.5 takeoff can carry new things: an item's CSI number, a count mark's elevation, the labor burden and an add-on's data.
- Installed packs live in the price library, in this browser.

## Not in this version yet

- Trade packs reviewed by working estimators, and prices in packs.
- Cut and fill quantities coming back from CivilCraft.
- Spot elevations from more than the open sheet, or in survey coordinates.
- In a live session, PDFs opened after joining stay on that person's screen, and page changes are not shared.
- Box (window) selection, and finding mirrored symbols with auto count.
- More is listed in [What is not built yet](topic:not-built-yet).
