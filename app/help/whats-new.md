---
title: What's new in 0.6
summary: Typed quantities for things that are never drawn, cut and fill from CivilCraft as items, bid packages with leveling of subcontractor bids, and calculations in every length field.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.6, version, new features, typed quantity, lump sum, allowance, mobilization, cut and fill, earthwork, bid package, bid leveling, subcontractor, scope, calculation, arithmetic, toolbar, interface size, pen, touch, indonesian
---

This is what changed in TakeoffCraft 0.6, compared with 0.5. The estimate now reaches past what is drawn on the sheets, and out to the subcontractors who bid on it.

## New

### Typed quantities

- **Items for things that are never drawn.** Mobilization, permits, an allowance, a lump sum: choose {{ui:New item}} and pick {{ui:Typed quantity (no drawing)}}, then type the quantity in LS, EA, cubic yards, cubic metres or any length or area unit. Price it like any other item and give it assemblies, where `Q` is its quantity. See [Typed quantities](topic:create-items#typed-quantities-no-drawing).
- **Bid areas count them too.** When the takeoff has bid areas, a typed quantity counts in the area you choose, alternates included. See [Bid areas](topic:bid-areas).

### Cut and fill from CivilCraft

- **Earthwork arrives as two items to price.** In CivilCraft, {{ui:Send to TakeoffCraft}} under Earthwork saves the project's cut and fill as a quantities file; open it in TakeoffCraft and you get an Earthwork: cut and an Earthwork: fill item, in cubic yards or cubic metres. See [Cut and fill from CivilCraft](topic:earthwork#cut-and-fill-from-civilcraft).
- **Send again after a design change.** Open the new file and the same two items take the new numbers, keeping your names, rates, waste and assemblies.

### Bid packages and leveling

- **Packages by CSI division.** {{ui:Export}} › {{ui:Bid packages and leveling…}} splits the estimate into one package per CSI division. {{ui:Scope CSV}} downloads a package's scope for subcontractors: items, quantities and sheets, with no prices. See [Bid packages and bid leveling](topic:bid-leveling).
- **Compare the bids that come back.** Type each bid in and tick the scope it leaves out: left-out items are filled at your own cost, the lowest leveled bid is marked, and each bid shows how it compares with your own number. See [How the bids are leveled](topic:bid-leveling#how-the-bids-are-leveled).
- **In the workbook.** The XLSX gets a Bid leveling sheet with live formulas. The command is also in every menu style and the command palette.

### Type a calculation

- **Arithmetic in every length field.** Every length field and the type-in box take a calculation, such as `12'6" + 3/4"` or `(24'-0")/3`, read the same way as in CadCraft. A calculation that can't be read says where it went wrong. See [Arithmetic](topic:entry-formats#arithmetic).

## Fixed

- The message after finishing a room showed the undo key as the literal text "Mod+Z". It now shows your system's key.

## In every app

- **The toolbar can't get lost.** While full screen hides the bars, a small {{ui:Show bars}} tab stays at the top of the window. {{ui:Settings}} › {{ui:General}} › {{ui:Reset the layout}} puts the toolbar, panels, screen mode and menu style back to how the app starts (your interface size and panel text size stay). In CadCraft Studio, its own {{ui:Settings}} has {{ui:Reset the layout in every app}}. See [Where did my toolbar go?](common:lost-toolbar).
- **A menu on the toolbar.** Right-click the toolbar, or press and hold it, to arrange it, lock it so nothing moves by accident, or reset it. Ribbon menu styles collapse to their tab names: a tab opens its tools for one command; double-click a tab or use the pin to keep the ribbon open. See [The toolbar's own menu](common:lost-toolbar#the-toolbars-own-menu).
- **Interface size.** {{ui:Settings}} › {{ui:General}} › {{ui:Interface size}} makes the bars, toolbars, panels and dialogs 80 % to 140 % of normal, for this app only, so two apps side by side on one monitor both fit. The drawing keeps its own zoom. See [Everything is too big or too small](common:lost-toolbar#everything-is-too-big-or-too-small).
- **Pen and touch.** On a tablet or a touch-screen laptop with a pen, your palm is ignored while you draw, fingers can be left to moving the view, a two-finger tap undoes and a three-finger tap redoes, and the pen's side button and eraser end can undo or redo. {{ui:Settings}} › {{ui:General}} › {{ui:Pen and touch}}. See [Draw with a pen on a tablet](common:pen-and-touch).
- **Live sessions can grow past 20 people.** In CadCraft Studio, when more people knock than the usual 20, Studio tells you what to expect and you choose {{ui:Allow anyway}} for this session or {{ui:Keep it at 20}}. {{ui:Recent edits}} in the Live panel shows who changed what. See [Work together live](common:work-together-live#when-many-people-join).
- **Bahasa Indonesia** is new in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}: a machine-made draft of every word, not yet reviewed by a native speaker. **Spanish (Mexico)** is still a draft too. Help topics are in English.
- **Installers are still not signed** (signing comes next, in 0.7), and CadCraft Studio is not in an app store yet. Check the SHA-256 beside each file on getcadcraft.com/download. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, the first time, right-click CadCraft Studio and choose {{ui:Open}}. There is no iPad or iPhone build yet.
- **Fixed:** with the bars hidden, {{ui:Arrange the toolbar…}} in Settings was grayed out, and from the keyboard it lost its place after the first move.

## Not in this version yet

- Using the chosen subcontractor's bid as the package's price in the estimate isn't built yet, and neither is inviting and collecting bids through the site: email the scope yourself and type the bids in.
- A typed quantity is the number you type: TakeoffCraft does not convert a unit it doesn't know, and any text works as a label.
- Trade packs still can't be installed from the add-ons page.
- Everything else is in [What is not built yet](topic:not-built-yet).
