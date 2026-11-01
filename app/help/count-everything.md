---
title: Count everything in the set
summary: Box a symbol legend once and TakeoffCraft counts every symbol in it on every open sheet in one run. Each count is a link to its sheet, and you review before anything is added.
section: tasks
order: 71
keywords: count everything, legend, symbol legend, whole set, every sheet, all sheets, every door, every fixture, devices, schedule, symbols, auto count, count all, set of plans, 200 sheets, match level, look alike
---

{{ui:Count everything}} reads a symbol legend and then counts each symbol in it on every open sheet. It is {{ui:Auto count}} for a whole legend at once. It is plain symbol matching on your own sheets, not a trained model, and nothing leaves your computer. Review the counts before you add them: it is a helper, not a guarantee.

## Count a legend

1. Open the plans. A legend on any sheet will do: the symbols with their names beside them.
2. Choose {{ui:Count everything}} in the toolbar.
3. Drag a box around the legend, symbols and names. A title with no symbol beside it (SYMBOL LEGEND) is left out by itself.
   The panel lists each symbol with its picture and the name printed beside it. The name becomes the item's name, so rename it here if you like.
4. Untick any symbol you do not want counted. A symbol that cannot be searched (too small, or blank) says why.
5. Choose {{ui:Count on N sheets}}. A bar shows the sheet being searched; {{ui:Cancel}} stops the run. The page stays usable.

The legend's own symbols are not counted on its sheet. A sheet drawn at another scale is searched at that scale, and the symbols are found turned in any right angle.

## Review the counts

- Each symbol shows its total and, under it, a link per sheet that has any ("E-103: 4"). Click one to go to that sheet. The finds are boxed in the item's color.
- **Click a box** to leave that find out. It is dashed and crossed out; click it again to bring it back.
- **Move the match level** (50% to 100%, starting at your Settings level). Higher keeps only close matches. The slider only filters what was found; nothing is searched again.
- Two symbols that look alike (a duplex and a quad outlet) can match the same spot. The better match takes it and the panel says how many spots that happened on, so you can check them.
- A sheet too large to search at the symbol's size is skipped, and the panel says so.

## Add them

Choose {{ui:Add N marks}}. Each symbol becomes a count item with a mark on every find. A name that is already a count item of yours is reused (nothing is doubled where you already marked by hand). The whole run is one step: {{key:Ctrl+Z}} takes every item and mark back.

What you accept also feeds {{ui:Learned}}: the symbols are remembered in the takeoff's file for next time.

## With your assistant

If you allow assistants in Settings, they can read a legend (legend_open), run the count in the background (legend_count_start, then legend_count_status), read the counts (legend_count_result) and add them (legend_count_add, which can first preview what it would add). It is the same run you see in the panel.

## Symbols at any angle

Tick {{ui:Symbols at any angle}} before you count to also find symbols drawn at an angle that is not a right angle (a diagonal wall plug, a fixture turned to follow a roof). The search then turns each symbol every 15 degrees; a round symbol still needs one search and a symbol that is not round can take up to six times as long. Leave it off for plans drawn square.

## Good to know

- It needs symbols drawn the same way as in the legend. A legend drawn at a different size from the sheets is fine when the sheets' scales are set; without scales, the symbols are searched at the legend's size.
- A symbol with a wall or a long line drawn straight through it can be missed, because it no longer looks like the legend's picture. Check the finds on the first sheet before trusting the rest.
- A scan with no text still works: the symbols are found by their rows, and you type the names.
