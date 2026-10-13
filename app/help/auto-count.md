---
title: Auto count a symbol
summary: Box one symbol, let TakeoffCraft find the others on this sheet or every open sheet, review the matches with the slider, and add them in one step.
section: tasks
order: 70
keywords: any angle, rotated, turned, other scale, different scale, auto count, automatic count, symbol search, find symbols, pattern, template, match, detect, count tool
---

{{ui:Auto count}} finds every copy of a symbol after you box one. You then review the matches on the sheet and add the ones you accept as count marks. It is a helper, not a guarantee: always review before you add.

## Find the symbols

1. Make or click a count item under {{ui:Items}}.
2. Open a sheet where the symbol appears.
3. Choose {{ui:Auto count}} in the toolbar, or press {{key:S}}.
   A bar appears at the top of the sheet: "Drag a box around one symbol on this sheet."
4. To search every open sheet, not just this one, tick {{ui:Search all open sheets}}.
5. Zoom in so the symbol is easy to see, then drag a box snugly round one copy of it. Include the whole symbol; blank paper round it is trimmed off.
   The bar shows "Searching…" with a progress bar and a {{ui:Cancel}} button. The page stays responsive: you can zoom, pan and move between sheets. Choosing another tool, or {{key:Esc}}, cancels the search.
6. When it finishes, the matches appear on the sheet as boxes in the item's color, and the bar shows a summary such as "22 matches, 19 to add (3 already counted). Click a box to reject or restore it."

In {{ui:Auto count}}, dragging on the sheet draws a box instead of panning. To pan, hold {{key:Space}} and drag, or drag with the middle button.

## Review the matches

- **Click a box** to reject it. A rejected box is dashed and crossed out. Click it again to restore it.
- **Move the {{ui:Match}} slider** (50% to 95%, starting at 75%). Higher shows only close matches; lower shows looser ones. The slider only filters what was found; it does not search again.
- **Already counted**: matches on a spot that already has a count mark of this item start rejected, so you do not count anything twice.
- **Other sheets**: when you searched all open sheets, move between sheets with the sheets list or {{key:PageDown}} and review each one. The summary says how many sheets have matches.

## Add them

Choose {{ui:Add}}. The button says how many, for example "Add 19 marks".
The count marks are added at the center of each accepted box: "Added 19 count marks to "Duplex receptacle". Ctrl+Z removes them all."

The whole batch is one undo step, so one {{key:Mod+Z}} removes it.

To drop the review without adding anything, choose {{ui:Discard}} or press {{key:Esc}}. Picking another tool also discards it.

## What it finds, and what it misses

TakeoffCraft compares the drawing, as pixels, with the symbol you boxed.

- It finds the symbol turned 0°, 90°, 180° and 270°. Tick **Any angle (slower)** on the auto count bar before you draw the box to find it at any angle as well: it tries every 15°, then fine-tunes each find to the degree and a half. That takes about six times as long. It does not find a mirrored symbol (unless the symbol looks the same mirrored).
- With **Search all open sheets**, a sheet at another scale is searched at the size the symbol has there: a fixture drawn to scale on a 1/8" plan is half the size it is on a 1/4" plan, and is still found. Such a sheet is also searched at the box's own size, for tags and symbols printed at one size on every sheet. This needs a scale on both sheets; a sheet with no scale is searched at the box's size only.
- Very similar symbols can match each other: a duplex and a quad receptacle, or two fixture tags that differ by one letter. Raise the slider until only the right ones remain, and reject the rest by hand.
- A symbol crossed by other lines, hatching or text scores lower and may need a lower slider setting.
- Very small boxes are refused: "That box is too small. Draw it around the whole symbol." An empty box is refused too: "That box is almost empty. Draw it around a symbol."
- A sheet that would be very large at the size needed for this symbol is skipped, and the summary says "1 sheet was too large to search at this symbol size." Box a larger symbol, or count that sheet by hand.

If nothing is found, the status bar says "No matches. Lower the match slider, or box the symbol more tightly."

## Speed and browsers

The search runs in a background worker, so the page stays responsive and you can cancel at any time. Each sheet is first drawn at the working size on the page itself, which can make a very large sheet pause for a moment. It runs in current Chrome, Edge, Firefox and Safari. Searching many sheets takes longer; the progress bar moves sheet by sheet. Offline, auto count works when the app bar shows {{ui:Offline ready}}: {{ui:Save for offline}} keeps the worker too. See [Working offline](common:offline).
