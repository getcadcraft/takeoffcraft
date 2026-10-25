---
title: Getting started with TakeoffCraft
summary: What TakeoffCraft does, where it runs, and your first measured and priced item from a PDF plan set.
section: start
order: 10
keywords: start, first takeoff, quick start, introduction, estimate, quantity takeoff, plan set, pdf
---

TakeoffCraft measures plan sets, PDFs and DWG or DXF drawings, and turns the measurements into a priced estimate. You open the files (a drawing counts straight from its blocks: see [Open a DWG or DXF drawing](topic:open-a-drawing)), give each sheet a scale (a drawing brings its own), make **items** (a wall type, a floor finish, a fixture), and click on the sheets to take them off. Quantities, costs and the job total update as you go. You can export the estimate as a spreadsheet and a copy of the PDFs with your takeoff drawn in.

If you have done takeoff in other programs, read [Coming from other takeoff software](topic:coming-from) next. Some things work differently here.

## Where it runs

TakeoffCraft runs in your web browser. Open TakeoffCraft and the screen is ready at once; there is nothing to install.

- **Your PDFs stay on your computer.** They are opened by the browser and never uploaded. Saving is a download.
- It works in current Chrome, Edge, Firefox and Safari. See [Browsers and computers](common:browsers).
- It works with no internet connection once you choose {{ui:Save for offline}} in the app bar and it says {{ui:Offline ready}}. See [Working offline](common:offline).
- Cloud saving is not available yet. For a desktop app, TakeoffCraft comes in CadCraft Studio, with the other seven apps.

## Your first takeoff in ten steps

This walk-through measures one wall type and prices it. It takes a few minutes on any plan you have.

1. Choose {{ui:Open plans}} in the {{ui:File}} group of the toolbar (or press {{key:Mod+O}}), pick one or more PDFs, and choose Open. You can also drop the PDFs anywhere on the page.
   The sheets appear on the left and the first sheet opens in the middle.
2. Find the sheet's printed scale in its title block or under a drawing title.
3. Open the {{ui:Preset}} list in the {{ui:Scale}} group and pick that scale, for example `1/4" = 1'-0"`.
   The bar at the bottom of the sheet now says "Scale 1/4" = 1'-0"".
4. Choose {{ui:Check}} (or press {{key:D}}) and click the two ends of a dimension printed on the drawing.
   The readout in the status bar at the bottom left should match the printed dimension. If it does not, see [Set the scale](topic:set-the-scale).
5. In the {{ui:Items}} panel on the right, choose {{ui:New item}}, type a name like `Interior wall type A`, leave the type on {{ui:Linear (length)}}, and choose {{ui:Add}}.
6. Choose {{ui:Linear}} in the toolbar (or press {{key:L}}).
7. Click the start of a wall, then each corner along it. Double-click, press {{key:Enter}} or right-click to finish the run.
   The run is drawn in the item's color and its length appears next to the item.
8. In the item editor under {{ui:Items}}, type `9'-0"` in {{ui:Height}}, `0.85` in {{ui:Material $/LF}} and `1.20` in {{ui:Labor $/LF}}.
   The {{ui:Quantities}} table at the bottom shows the length, the extended material and labor, and the {{ui:Job total}}.
9. Choose {{ui:Save takeoff}} (or press {{key:Mod+S}}).
   Your browser downloads a `.takeoff.json` file. It holds your items, scales and marks, and reopens on top of the same PDFs.
10. Open the {{ui:Export}} menu in the toolbar and choose {{ui:XLSX}} to download the estimate as a spreadsheet.

:::tip
Press {{key:Esc}} to stop whatever you are doing and go back to the {{ui:Select}} tool. {{key:Mod+Z}} undoes any change.
:::

## What to read next

- [The TakeoffCraft screen](topic:workspace) names every part of the window.
- [Start a takeoff and open a plan set](topic:open-plan-set) covers several PDFs and the sheets list.
- [Create takeoff items](topic:create-items) explains types, units, waste and rates.
- [Assemblies and formulas](topic:assemblies) turns one measurement into studs, sheets of board and more.
- [Keyboard and mouse](topic:keyboard) lists every key.
