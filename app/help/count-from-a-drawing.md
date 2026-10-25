---
title: Count from a drawing
summary: Count blocks, objects on a layer, or text straight from a DWG or DXF: exact, with nested blocks, dynamic block variants and block arrays handled, in one undo step.
section: tasks
order: 71
keywords: count from drawing, cad count, block count, count blocks, insert, block name, nested blocks, dynamic block, variant, minsert, array, layer, entity type, circles, text, attribute, tag, hidden layers, exact count, how to, doors, fixtures
---

{{ui:CAD count}} on the sheet bar (the command **Count from the drawing** in the other menu styles) counts what a DWG or DXF says is there. Where {{ui:Auto count}} looks for a picture of a symbol and can miss one or find a false one, this counts the objects: every insert of a block named `DOOR-36` is one door. Open the drawing first: [Open a DWG or DXF drawing](topic:open-a-drawing).

## Count a block

1. Open a sheet of the drawing. {{ui:CAD count}} is on the sheet bar.
2. Choose it. The window lists the blocks with how many of each there are. Search by name, then pick one.
3. Check the line under the list: "22 found, 22 to add."
4. Under {{ui:Add to}}, pick a count item, or leave {{ui:A new count item}} and give it a name.
5. Choose the add button, which names the number: {{ui:Add 22 marks}}. The marks appear at the block's insertion points, and the item's quantity is the count.

It is one undo step: {{key:Mod+Z}} takes the marks (and a new item) away together. The estimate, the spreadsheet and the marked PDF treat the item like any other count item.

### What counts

- **Every insert of the block name**, whatever its scale and angle, in model space or paper space. Block names do not care about case.
- **Block arrays** (MINSERT): each copy in the array is one.
- **Nested blocks.** A block placed inside another block counts at every depth. The list says "6 inside other blocks"; untick {{ui:Count blocks inside other blocks too}} to count only inserts placed directly in the drawing.
- **Dynamic blocks.** A dynamic block counts under its own name, not under the anonymous copies (`*U12`) the file keeps. Its states are listed apart ("Single 12, Double 4"): pick a state to count only those, or {{ui:Every variant}}. When a file does not say which state a copy shows, those are listed as "(state not known)".
- **Layer filter.** A block on several layers: pick one under {{ui:On layer}}.

### What does not

- **Hidden layers.** An object on a layer that is off or frozen in the file (or that you hid in {{ui:Layers}}) is left out, and the line says how many: "3 on hidden layers left out". Tick {{ui:Count them too}} to include them.
- **Linked drawings that are not open** are not counted; the window says so.
- **Objects stacked exactly on another of the same kind** are counted as two (they are two objects) and the window says so: it is usually a drafting slip worth a look.

## What this sheet shows, or the whole drawing

- **What this sheet shows** counts the objects the sheet shows: on a layout, the model objects inside its viewports (a layer frozen in a viewport is not counted there) plus the layout's own.
- **The whole drawing, every object once** counts model space once, with the marks on the Model sheet, and does not count what several layouts show again.

Counting what a layout shows and counting what Model shows give the same number for the same objects; do not add both to one item.

## Count counts again

Counting the same block again with the same item adds only what is new: "22 already counted." Each mark stands for one object.

## By layer and type

On {{ui:By layer and type}} pick a layer and an object type (circles, polylines, hatches…): "all circles on E-LITE". Tick {{ui:Also count objects inside blocks}} to include those inside block definitions, at each place the block is inserted.

## By text

On {{ui:By text}} type the text, such as `A3`, and say whether it is exactly that, contains it, or has it as a whole word. Text objects, multileader text and block **attribute values** all count (a tag attribute `ITEM = A3` is found); pick {{ui:In attribute}} to count one attribute only. The most common texts are listed to click.

## When to use Auto count instead

Use {{ui:Auto count}} for PDFs and for symbols in a drawing that are not blocks (drawn loose, or exploded). Drawn as blocks, count them here.
