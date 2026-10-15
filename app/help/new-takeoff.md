---
title: Start a new takeoff
summary: Clear everything and start an empty takeoff without reloading the page, and keep your work safe first.
section: tasks
order: 120
keywords: new, new takeoff, clear, reset, start over, empty, close pdfs, next job
---

{{ui:New}} closes every PDF and starts an empty takeoff on the same page.

1. Save the current takeoff if you want to keep it: {{ui:Save takeoff}} or {{key:Mod+S}}.
2. Choose {{ui:New}} in the {{ui:File}} group.
3. If there are unsaved changes, TakeoffCraft asks **Unsaved takeoff**: choose {{ui:Save takeoff first}} (it downloads the project, then clears), {{ui:Discard changes}}, or {{ui:Cancel}}.
   The window goes back to its empty state: no PDFs, no items, no marks, no scales. The status bar says "New takeoff. Open PDFs to begin."

What is cleared:

- every open PDF, its sheets and thumbnails,
- items, assemblies, marks and scales,
- each sheet's zoom and position,
- the undo history (you cannot undo {{ui:New}}),
- arc mode, and any auto count search or review.

Your files on disk are not touched. To pick up the old takeoff again, open its `.takeoff.json` and PDFs: see [Save and reopen a takeoff](topic:save-and-reopen).

:::note
Each new takeoff starts with no items. To bring items over, copy them first: {{ui:Copy item}} under Items (or copy marks, which carry their items), then {{ui:Paste}} in the new takeoff. See [Copy, paste and duplicate marks](topic:copy-paste). For items you use on every job, keep them in your [price library](topic:price-library) and add them from there, or install a [trade pack](topic:trade-packs).
:::
