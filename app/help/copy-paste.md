---
title: Copy, paste and duplicate marks
summary: Copy marks with their items, paste them where you click or in the same place on another sheet, duplicate them, cut, delete and select all, each one step to undo.
section: tasks
order: 75
keywords: copy, paste, cut, duplicate, paste in place, clipboard, select all, select none, multiple marks, typical floor, repeat, same plan, another sheet, copy item, duplicate item
---

The {{ui:Edit}} group of the toolbar holds {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} and {{ui:Paste}}. Its {{ui:More}} menu has the rest, each with its key: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} and {{ui:Select none}}. Every one of them is one step to undo with {{key:Mod+Z}}.

## Select the marks

1. Pick {{ui:Select}} ({{key:V}}) and click a mark.
2. Hold {{key:Shift}} and click more marks to add them. {{key:Shift}} + click on a selected mark takes it out again.
3. Or press {{key:Mod+A}} ({{ui:Select all}}) to take every mark on the open sheet.

With several marks selected, the right panel shows **Selected marks**: how many of each item, with {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} and {{ui:Delete marks}}. Corner handles show only when one mark is selected. {{key:Esc}} ({{ui:Select none}}) clears the selection.

## Copy and paste where you click

1. Select the marks and press {{key:Mod+C}} ({{ui:Copy}}). The marks are copied with their items, including each item's assembly, waste and costs.
2. Go to the sheet you want them on (it can be the same sheet).
3. Press {{key:Mod+V}} ({{ui:Paste}}). A dashed copy follows the pointer.
4. Click where it goes. The middle of the copied marks lands at the pointer.

{{key:Esc}} cancels and adds nothing. The pasted marks are selected afterwards, so {{key:Delete}} or {{key:Mod+Z}} takes them away again.

In the same takeoff, pasted marks go on the **same items**, so their quantities add to those items. In another takeoff (another tab, or after {{ui:New}}), an item with the same name and type is used; otherwise the item is added with its assembly. If the name is taken by an item of another type, the added item is called "(name) (copy)".

Pasted marks go in the bid area chosen at the top of the {{ui:Items}} panel (or in none). See [Bid areas](topic:bid-areas).

## Paste in place

{{key:Mod+Shift+V}} ({{ui:Paste in place}}) puts the copy at exactly the same spot on the open sheet, by its position on the page. Use it for a typical floor: take off level 2, copy, open level 3, paste in place.

Paste in place needs a sheet the **same size** as the one you copied from. On a sheet of another size TakeoffCraft says so and pastes nothing; use {{ui:Paste}} and click instead. On the sheet you copied from, the copy lands on top of the originals.

## The scale must match

Lengths and areas depend on the sheet's scale. A run that measures 10' at 1/4" = 1'-0" would measure 20' on a sheet at 1/8" = 1'-0". So TakeoffCraft pastes runs and areas only onto a sheet with the **same scale** as the sheet they came from, and says plainly when it does not:

- The open sheet has no scale yet: give it one first ([Set the scale](topic:set-the-scale)), then paste.
- The open sheet has another scale: the message names both scales. Paste on a sheet at the same scale.
- Counts need no scale: copied counts paste anywhere.

## Duplicate

{{key:Mod+D}} ({{ui:Duplicate}}) copies the selected marks and puts the copy on the pointer straight away; click where it goes. Nothing is added until you click, and {{key:Esc}} leaves nothing. Duplicate does not change what {{ui:Paste}} pastes.

## Cut and delete

- {{key:Mod+X}} ({{ui:Cut}}) copies the selected marks and deletes them. Paste them where they belong, or undo the cut.
- {{key:Delete}} or {{key:Backspace}} ({{ui:Delete}}) deletes the selected marks without copying them.

## Copy an item

The item editor (under **Items**) ends with:

- {{ui:Copy item}}: copies the item with its assembly, waste and costs, without marks. {{ui:Paste}} then adds a copy of it to this takeoff, or to another one.
- {{ui:Duplicate item}}: adds a copy at once, named "(name) (copy)".

:::tip
The copy stays on this computer: it is kept in this tab and in the browser's storage, so another TakeoffCraft tab can paste it. Nothing is uploaded, and the system clipboard is not used, so you cannot paste marks into other programs.
:::

:::note
A copy comes from one sheet at a time. Marks are pasted as they are: there is no rotating or mirroring a copy yet.
:::
