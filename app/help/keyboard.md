---
title: Keyboard and mouse
summary: Every key, mouse, trackpad and touch action in TakeoffCraft, grouped, with the platform differences.
section: reference
order: 10
keywords: keys, shortcuts, hotkeys, keyboard, mouse, trackpad, touch, pan, zoom, wheel, right-click, double-click, space, shift, copy, paste, cut, duplicate, select all
---

Letter keys work when the pointer is anywhere on the page and you are not typing in a field. While a dialog is open, its own keys apply. Letters work with or without {{key:Shift}}.

## Tools

| Key | Tool |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:L}} | {{ui:Linear}} |
| {{key:A}} | {{ui:Area}} |
| {{key:O}} | {{ui:Circle}} |
| {{key:B}} | {{ui:Room}} (fill a room with one click) |
| {{key:R}} | {{ui:Arc}} on or off (in Linear, Area and Cut-out) |
| {{key:E}} | {{ui:Deduct}} on or off: the next segments of a run are drawn but not counted |
| A digit, `@` or `#` while drawing | Open the {{ui:Type}} box: type a length or coordinates, {{key:Enter}} places the point ([Measure linear runs](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Cut-out}} (select an area first) |
| {{key:C}} | {{ui:Count}} |
| {{key:S}} | {{ui:Auto count}} |
| {{key:K}} | {{ui:Calibrate}} |
| {{key:D}} | {{ui:Check}} the scale |

## While drawing

| Key or action | What it does |
|---|---|
| Click | Place a point (a dot, with Count). |
| {{key:F3}} | Snap to the drawing's lines on or off ([Snap to the drawing's lines](topic:snap-to-the-drawing)). |
| {{key:Shift}} held while clicking | Snap the segment to 0°, 45°, 90° or 135° from the last point. Not for arc points or circles. |
| Double-click | Finish a run, or close an area or cut-out. |
| {{key:Enter}} | Finish a run, or close an area or cut-out. |
| Right-click (without moving) | Finish a run, or close an area or cut-out. |
| Click the first point | Close an area or cut-out (from the third point). |
| {{key:Backspace}} or {{key:Delete}} | Remove the last point (first the pending arc point). |
| {{key:Esc}} | Drop the pending arc point; then cancel the unfinished mark; then go back to {{ui:Select}}. |

## Selecting and editing

| Key or action | What it does |
|---|---|
| Click a mark (Select tool) | Select it and make its item current. |
| {{key:Shift}} + click a mark | Add it to the selection, or take it out. |
| {{key:Mod+A}} | Select every mark on the open sheet. |
| Drag a corner handle | Move that point ({{key:Shift}} snaps to 45°). Works when one mark is selected. |
| {{key:Delete}} or {{key:Backspace}} | Delete the selected marks (when you are not drawing). |
| {{key:Esc}} | Select none: clear the selection and the check line. |
| {{key:Mod+Z}} | Undo. |
| {{key:Mod+Y}} or {{key:Mod+Shift+Z}} | Redo. |

## Copy and paste

| Key | What it does |
|---|---|
| {{key:Mod+C}} | Copy the selected marks, with their items. |
| {{key:Mod+X}} | Cut: copy the selected marks, then delete them. |
| {{key:Mod+V}} | Paste: the copy follows the pointer; click where it goes. |
| {{key:Mod+Shift+V}} | Paste in place: the same spot on the open sheet. |
| {{key:Mod+D}} | Duplicate the selected marks: the copy follows the pointer; click where it goes. |
| {{key:Esc}} | Put down nothing: cancel a paste or duplicate that is on the pointer. |

The letters on their own still pick tools ({{key:C}} is {{ui:Count}}, {{key:D}} is {{ui:Check}}, {{key:X}} is {{ui:Cut-out}}, {{key:V}} is {{ui:Select}}, {{key:A}} is {{ui:Area}}); only {{key:Mod}} with them copies and pastes. In a text field these keys copy and paste text as usual. See [Copy, paste and duplicate marks](topic:copy-paste).

:::warning
{{key:Backspace}} deletes the selected mark when you are not drawing. If that happens by accident, {{key:Mod+Z}} brings it back.
:::

## Files

| Key | What it does |
|---|---|
| {{key:Mod+O}} | {{ui:Open PDFs}} |
| {{key:Mod+S}} | {{ui:Save takeoff}} |

These two work even while you are typing in a field.

## View and sheets

| Key or action | What it does |
|---|---|
| Mouse wheel | Zoom in and out at the pointer. |
| Drag (left, middle or right button) | Pan. In {{ui:Auto count}}, a left drag draws the search box instead. |
| {{key:Space}} held + drag | Pan, in any tool. |
| {{key:F}} | {{ui:Fit page}} |
| {{key:W}} | {{ui:Fit width}} |
| {{key:Plus}} or {{key:=}} | Zoom in at the middle of the view. |
| {{key:Minus}} | Zoom out at the middle of the view. |
| {{key:PageDown}} / {{key:PageUp}} | Next or previous sheet in the sheets list. |
| {{key:Ctrl+Shift+F}} | Cycle full screen modes (Control on every platform, also on a Mac). |
| {{key:F1}} | Open or close this help, a panel at the side. |
| {{key:3}} | The 3D check view of the sheet, on or off. |

## 3D view

| Key or action | What it does |
|---|---|
| Drag, or drag with the middle button | Orbit. |
| {{key:Shift}} + drag, or drag with the right button | Pan. |
| Mouse wheel | Zoom at the pointer. On a trackpad, a two-finger swipe orbits and a pinch zooms. |
| Click | Select the mark under the pointer ({{key:Shift}} + click adds or takes out). |
| {{key:F}} or {{key:W}} | Zoom extents. |
| {{key:3}} | Back to the flat sheet. |

See [Check the takeoff in 3D](topic:check-in-3d).

## Auto count

| Key or action | What it does |
|---|---|
| Drag a box | Box the symbol to search for (starts the search). |
| Click a match box | Reject it, or restore it. |
| {{key:Esc}} | Cancel a running search, or discard the review. |

## Help

| Key | What it does |
|---|---|
| {{key:F1}} | Open or close the help panel (also the {{ui:Help}} button in the app bar). It works in every tool, even while typing in a field. |
| {{key:Esc}} | Close the help panel. In its search box, the first Esc clears the search. While the panel is open, an Esc pressed after clicking the sheet closes the panel first; press it again to cancel in TakeoffCraft. |

:::mac
On many Mac keyboards the top row controls brightness and sound. Press fn with F1, or turn on "Use F1, F2, etc. keys as standard function keys" in System Settings, under Keyboard.
:::

## Dialogs and fields

| Key | What it does |
|---|---|
| {{key:Enter}} | In a field: apply the value. In the calibrate dialog: {{ui:Set the scale}}. |
| {{key:Esc}} | Close a dialog (as {{ui:Cancel}}); close the {{ui:New item}} form. |
| {{key:Tab}} | Move to the next field. |

## Platform notes

:::mac
- {{key:Mod}} is the Command key: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Full screen is the exception: Control+Shift+F.
- Right-click is a two-finger click on a trackpad, once secondary click is on in System Settings, under Trackpad. TakeoffCraft reads only the secondary button; a Control-click may count as a plain click and add a point.
- Two fingers scrolling on a trackpad zoom the sheet (they do not scroll it). To pan, press and drag, or hold Space and drag.
- Page Up and Page Down are fn with the up and down arrows on keyboards without them.
- Backspace is the key labeled delete.
:::

:::windows
- {{key:Mod}} is Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- On a laptop touchpad, a two-finger scroll zooms the sheet. To pan, press and drag.
:::

:::linux
- {{key:Mod}} is Ctrl. Some desktops use Ctrl+Alt or Super shortcuts of their own; TakeoffCraft uses none of them.
- On a touchpad, a two-finger scroll zooms the sheet. To pan, press and drag.
:::

:::touch
TakeoffCraft reads touch as a single pointer:

- Tap places a point, selects a mark or adds a count dot.
- Drag with one finger pans the sheet (in {{ui:Auto count}} it draws the search box).
- Pinch-to-zoom is not supported yet. Use {{ui:Fit page}} and {{ui:Fit width}}, or {{key:Plus}} and {{key:Minus}} on a keyboard.
- To close an area, tap its first point. To finish a run, double-tap where your browser turns a double tap into a double-click, or press {{key:Enter}} on a keyboard.
- There is no live length readout until you tap, because there is no hover.

A keyboard and mouse or trackpad is the better way to do takeoff today.
:::

## Keys the browser keeps

Browsers keep some shortcuts for themselves, and a page cannot use them: closing the tab ({{key:Mod+W}}), new tab or window ({{key:Mod+T}}, {{key:Mod+N}}), and browser zoom ({{key:Mod+Plus}}, {{key:Mod+Minus}}). That is why TakeoffCraft zooms the sheet with the wheel and the bare {{key:Plus}} and {{key:Minus}} keys. If you press {{key:Mod+Plus}} by mistake, the whole page grows; {{key:Mod+0}} puts it back. See [Keys, mice and trackpads](common:keys).
