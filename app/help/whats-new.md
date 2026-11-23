---
title: What's new in 0.10
summary: Faster sheet switching and no freeze on dense sheets in big sets, a measurement method per project, bricks, blocks and mortar from the wall type, gross and net stated once, office schedule layouts, estimates with your rates and a named sign-off.
section: start
order: 5
keywords: whats new, what's new, 0.10, release notes, changelog, changes, version, new features, faster, big sets, 2000 sheets, sheet list, memory, dense sheet, snap index, freeze, measurement method, openings, junctions, reveals, bricks, blocks, mortar, wall type, gross and net, openings deducted, schedules, totals, headings, office standard, default policies, xlsx, google sheets, csv, finish quantities, room, wall, zone, estimate, rates, missing rates, sign-off, sign off, live model, tender, construction stage, pro layouts, trackpad, swipe, tour
---

This is what changed in TakeoffCraft 0.10, compared with 0.9. Big sets are faster, and quantities, schedules and estimates gain a measurement method, office layouts and a sign-off.

## New

### Faster on big sets

- Switching sheets in a 2,000-sheet set takes 12 ms instead of 166 ms, and memory after scrolling the sheet list dropped from about 1.9 GB to 181 MB.
- A dense 300,000-segment sheet no longer freezes the page for 7 s when it opens: the snap index is built in a worker, and the longest pause is 72 ms.

### Quantities

- **A measurement method per project** (openings, junctions, reveals), handed over from BimCraft, and **bricks, blocks and mortar** counted from the wall type. See [Create takeoff items](topic:create-items).
- **Gross and net** stated once, with openings deducted and never counted twice.
- **Schedules** grouped by type with totals, headings and layouts per office standard, exported as a spreadsheet workbook (.xlsx), to Google Sheets and as CSV. See [The office layout](topic:office-layout) and [Export the estimate and a marked PDF](topic:export-estimate).
- **Finish quantities** by room, wall and zone.

### Estimates

- Model quantities with your rates, missing rates flagged, and a sign-off by a named person. See [Missing rates and signing the estimate off](topic:sign-off-the-estimate).
- **Takeoff on the live model** for the tender and construction stage.

## Fixed

- Undo of an edit that made an id-keyed list left the key behind.
- Help topics that disagreed with the app were corrected.

## In every app

- **Docking tool groups.** In a layout with a ribbon, tool rows or a toolbox, a group of tools can be docked as a palette beside the sheet. See [Dock a group of tools](common:dock-tool-groups).
- **Four Pro layouts** (Ribbon, Workbench, Review, Studio) in an optional Pro skin, in {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}.
- **A two-finger trackpad swipe pans** the sheet.
- **Tour tips** have one {{ui:Next}} button; the X closes the tour.

## Said plainly

- TakeoffCraft follows the measurement method it is handed and has no picker of its own. The methods are our starting values, not reviewed by a quantity surveyor.
- The estimate sign-off is a typed name recorded in the file, not tied to an account and not an electronic signature.
- Docking tool groups has not been tried on two monitors.
- The new tools were checked by automated tests in a browser, not yet by a person on a real project.
- Languages beyond English are machine drafts, and some words new in 0.10 are still English only.

For the version before this one, see [What's new in 0.9](topic:whats-new-0-9).
