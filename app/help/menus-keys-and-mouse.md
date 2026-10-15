---
title: Menus, keys and mouse
summary: Pick a menu style that matches the way you already work, give any command your own key, move commands between menus, and set what the wheel and the mouse buttons do.
section: reference
order: 6
keywords: menu style, menus, menu bar, toolbar, keyboard shortcuts, hotkeys, keys, customize, remap, rebind, mouse, wheel, invert, zoom direction, middle button, right button, pan, export, import, switching, familiar, takeoff desk, conditions
---

TakeoffCraft's commands are the same whichever way you reach them. A **menu style** only decides where they sit on screen, what they are called there and which keys run them. Choose one in {{ui:Settings}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}}; the change is immediate, and this browser remembers it.

## The two styles

| Style | What you get |
|---|---|
| {{ui:TakeoffCraft}} | TakeoffCraft's own toolbar: File, Export, Scale, Takeoff, Edit and View, with the single-letter tool keys. The start. |
| {{ui:Takeoff desk}} | A menu bar ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Items}}, {{ui:Markup}}, {{ui:Export}}) over one row of the takeoff tools, the way on-screen takeoff programs lay theirs out. Items are called conditions on the row. The same keys, plus {{key:N}} for a new item. The scale presets move to the sheet bar, beside the sheet's scale. |

Both styles keep TakeoffCraft's keys: {{key:V}} select, {{key:L}} linear, {{key:A}} area, {{key:O}} circle, {{key:B}} room, {{key:X}} cut-out, {{key:C}} count, {{key:S}} auto count, {{key:K}} calibrate, {{key:D}} check, {{key:R}} arc mode, {{key:E}} deduct mode, {{key:F}} and {{key:W}} to fit, {{key:3}} the 3D check view, {{key:F3}} snap, and {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

The sheet bar's tools (notes, clouds, highlights, Compare, 3D) wait until a PDF is open; picked before that, the status line says so.

:::tip
A key that belongs to TakeoffCraft's own layout but that your style gave another command does nothing, and the status line says where its command went ("In My keys, Count is Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} and the arrows always keep their meaning. While you draw a run or an outline, paste or review an auto count, the letters and the numbers of a typed length stay with the drawing.
:::

## Make it your own

1. Pick the style closest to what you want, then click {{ui:Customize…}}.
2. On {{ui:Keys and menus}}, find a command (the search box helps). {{ui:Add a key}} and press the key, or two keys in a row for a two-letter key. Click a key to take it off.
3. With the menu bar, {{ui:Where it sits}} moves the command to another menu, or to {{ui:Keys only}}.
4. On {{ui:Mouse}}, set the wheel and the buttons that pan the sheet.
5. Give it a name and click {{ui:Save}}.

Saving a built-in style makes your own copy ("My Takeoff desk"); the built-in one never changes. A key given to two commands is shown in red and has to be fixed before you can save.

## Mouse

- **Mouse wheel**: {{ui:Scroll up zooms in}} (the start) or {{ui:Scroll up zooms out}}, and how fast. A trackpad pinch always zooms the way your fingers move.
- **Pan the sheet with**: the middle button, the right button, or both. A left drag on empty paper and {{key:Space}} with a drag always pan; a right click without dragging always finishes a run or an outline.
- **Drag in the 3D views**: {{ui:Each view's own}} keeps the 3D check view's buttons (left and middle orbit, right pans). Or set the middle and right buttons to orbit, pan, zoom or nothing; {{key:Shift}} with the button swaps orbit and pan. The left button always orbits and picks.

## Take it with you

{{ui:Export}} saves the style in use as a small `.ccinput.json` file; {{ui:Import…}} adds one, from another computer or from a colleague. An imported file can only point at TakeoffCraft's own commands: anything else in it is left out and counted in the status line. {{ui:Delete this style}} removes one of your own.

:::note
These settings stay in this browser. {{ui:Use this style in every app}} under the style cards makes every app open in its matching style (its own toolbar or a menu bar), with the changes you made in each app. TakeoffCraft has no ribbon style: when a ribbon is chosen for every app, TakeoffCraft keeps its own toolbar.
:::

Related: [Keys and mouse](topic:keyboard) · [TakeoffCraft settings](topic:settings) · [Coming from other takeoff software](topic:coming-from)
