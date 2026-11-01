---
title: Pick the PDF's lines
summary: Click a line of a vector PDF to measure its whole connected path, or click inside a closed outline for its area, with the gap tolerance shown and one undo per segment.
section: tasks
order: 36
keywords: path, pick, linework, lines, connected, whole run, trace, outline, perimeter, gap, tolerance, bridge, segments, tab, vector, area from lines, p
---

On a vector PDF the walls and edges are real lines. {{ui:Path}} ({{key:P}}) takes them as they are drawn: one click on a line measures everything joined to it, end to end, so you do not trace a wall by clicking its corners. The sheet needs a scale. A scanned page has no lines to pick; use [Linear](topic:measure-linear) or [Area](topic:measure-areas) there.

## Pick a path or an outline

1. Choose {{ui:Path}}. The line under the pointer is outlined, with the other paths it could be drawn thinly.
2. Click a line: the whole connected path is picked. The bar under the toolbar gives its segments, length, the gap tolerance and how many gaps were bridged. A path that comes back to its start is closed and also reports its perimeter.
3. Or click inside a closed outline, away from any line: the outline around that point is picked as an area. The smallest one comes first; {{key:Tab}} tries the next larger one.
4. Press {{key:Enter}} (or right-click, or double-click) to add the marks. A picked path becomes a mark of a **linear** item, an outline a mark of an **area** item: the active item if it has that kind, else the newest one of that kind. With none, the new-item form opens and nothing is added until you press {{key:Enter}} again. Everything picked is added in one undo step.

## The gap tolerance

Drafters leave small holes where lines should meet. Two lines join when their ends are closer than the **gap tolerance**. It starts at 1.5 points on the sheet (shown in feet and inches at the sheet's scale), and a dashed ring that wide follows the pointer and sits on each end of the path under it. Each hole that was bridged is ringed in orange on a picked path, and the bar counts them.

{{key:]}} makes the tolerance wider, {{key:[}} smaller. A picked path is joined again at once at the new tolerance. At a junction the path keeps going straight on, the way that bends least, and leaves the branch.

## Keys

| Key or action | What it does |
|---|---|
| Click | Pick the path under the pointer, or the outline around it. |
| {{key:Shift}} + click | Add another path or outline to what is picked. |
| {{key:Tab}} | Try the next path under the pointer, or the next larger outline. |
| {{key:Backspace}} or {{key:Mod+Z}} | Take the last segment off the last picked path, one segment at a time. A path with no segments left goes. With nothing picked, {{key:Mod+Z}} is the ordinary undo. |
| {{key:[}} and {{key:]}} | Narrower and wider gap tolerance. |
| {{key:Enter}} | Add the marks. |
| {{key:Esc}} | Clear what is picked. |

## Good to know

- A curve in the drawing is a chain of short straight pieces, so its length is a hair under the true arc. For an exact arc, measure a drawing's own file ([Measure from a drawing](topic:measure-from-a-drawing)).
- A bridged gap counts as a straight hop across it, so a closed outline's perimeter includes it.
- Only strokes and fills in the page's own paths are lines. Text drawn as letters, and pictures, are not.
