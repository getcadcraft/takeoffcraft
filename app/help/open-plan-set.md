---
title: Start a takeoff and open a plan set
summary: Open one or several PDFs as a plan set, find your way round the sheets, and move between them.
section: tasks
order: 10
keywords: open, plan set, several pdfs, multiple files, sheets, drawings, page labels, sheet list, navigate, drop, handoff, open in another app, markup
---

A plan set is often several PDFs: architectural, structural, mechanical. TakeoffCraft opens them side by side as one list of sheets, and one takeoff can cover all of them.

## Open the PDFs

1. Choose {{ui:Open plans}} in the {{ui:File}} group, or press {{key:Mod+O}}. (The other menu styles call it {{ui:Open PDFs…}}.)
2. In the file dialog, select every PDF of the set. Hold {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} to pick several, or {{key:Shift}} to pick a range.
3. Choose Open.
   A "Opening (name)…" message shows while each file is read. Then every page appears under {{ui:Sheets}} and the first page of the first new PDF opens.

You can also drag the PDFs from {{pick:mac=Finder|windows=File Explorer|linux=your file manager}} and drop them anywhere on TakeoffCraft. A "Drop PDFs, DWG or DXF drawings, or a .takeoff.json" frame appears while you drag.

To add more PDFs later, do the same again. PDFs that are already open are skipped.

The start screen also lists the PDFs and takeoffs you opened recently, in browsers that let a page open a file again (Chrome and Edge). Click one to open it; the browser may ask for permission first. See [Your files](common:your-files).

:::note
Nothing is uploaded. The browser reads the PDFs on your computer, and they are gone from TakeoffCraft when you close the tab or choose {{ui:New}}.
:::

## Drawings beside PDFs

{{ui:Open plans}} also takes DWG and DXF drawings, alone or together with PDFs: each drawing's model space and layouts become sheets in the same list. See [Open a DWG or DXF drawing](topic:open-a-drawing), then [Count from a drawing](topic:count-from-a-drawing).

## A PDF handed over from another app

Another app of the lineup can hand you the PDF it has open: it opens TakeoffCraft in a new tab and the PDF opens there as if you had dropped it. The status bar says "Opened (name), handed over from (app). The original file is unchanged." Nothing is uploaded; the file passes through this browser's own storage and is gone from it once it opens.

If the status bar says the PDF "did not arrive", the tab waited too long or the PDF was already opened in another tab: open it with {{ui:Open plans}}.

The other way round, when MarkupCraft runs where you are and can take a file, the sheet bar under the drawing has a {{ui:MarkupCraft}} button: it opens the PDF of the sheet on screen in MarkupCraft, in a new tab, to review and mark it up.

## Find a sheet

- Scroll the {{ui:Sheets}} list on the left and click a sheet.
- Type in **Search sheets** at the top of the list to filter by sheet number, file name or page label. The count beside {{ui:Sheets}} shows "3 of 40" while a filter is on.
- Press {{key:PageDown}} for the next sheet and {{key:PageUp}} for the previous one. They follow the list as filtered.

:::mac
On a Mac keyboard without Page Up and Page Down keys, press fn with the up or down arrow.
:::

## How sheets are named

- A page whose PDF gives it a label, such as `A-101`, is named by that label.
- A page with no label (or a label that is just its page number) is named "(file name), page (n)".
- With several PDFs open, labeled sheets also carry the file name: "A-101 — Architectural".

Sheet names cannot be typed in by hand yet.

## Look around a sheet

- Turn the mouse wheel to zoom at the pointer.
- Drag with the left or middle button to pan. With {{ui:Auto count}}, or when you start on a mark's corner, hold {{key:Space}} while you drag, or drag with the middle button.
- Press {{key:F}} or choose {{ui:Fit page}} to see the whole sheet; {{key:W}} or {{ui:Fit width}} fits its width.
- Press {{key:Plus}} or {{key:=}} to zoom in and {{key:Minus}} to zoom out, around the middle of the view.

Each sheet remembers its own zoom and position while it stays open.

## Next

Before you can measure a sheet, it needs a scale: [Set the scale](topic:set-the-scale).
