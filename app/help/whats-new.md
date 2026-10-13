---
title: What's new in 0.4
summary: Snap to the drawing, deducts, typed lengths, bid areas and alternates, revised-sheet compare, roofs and slopes, room fill, a price library, crews, a bid summary with a proposal PDF, markups, more 3D, touch, and a recovery copy of your work.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.4, version, new features, snap, deduct, bid areas, alternates, compare, revision, back-out, slope, pitch, roof, room fill, price library, crew, proposal, markups, typical, touch, recover, language, spanish
---

This is what changed in TakeoffCraft 0.4, compared with 0.3, the version Try runs now. Most of it is new ways to measure and to price. Your 0.3 takeoffs open as they are.

## New

### Measuring

- **Snap to the drawing.** While you measure or calibrate, a point near a line of the PDF lands on its end, its midpoint, a crossing, or on the line. It is on at the start. {{key:F3}} or {{ui:Snap}} in the status bar turns it off. See [Snap to the drawing's lines](topic:snap-to-the-drawing).
- **Type lengths and coordinates.** While you draw, type a digit, `@` or `#` and the {{ui:Type}} box opens: `12'6"` goes toward the pointer, `12'6"<45` at an angle, `@6',-4'` from the last point. {{key:Enter}} places the point. See [Measure linear runs](topic:measure-linear).
- **Deduct part of a run.** Draw a wall straight through a door and press {{key:E}} ({{ui:Deduct}}) for the opening. That part is drawn dashed and is not counted. See [Measure linear runs](topic:measure-linear).
- **Room fill.** Choose {{ui:Room}} ({{key:B}}) and click inside a room: it outlines the floor, with door openings closed. Settings sets how wide an opening it closes. See [Measure areas with cut-outs](topic:measure-areas).
- **Back-outs.** Draw a column or shaft once and it comes off every overlapping area of the items you pick, such as floor, ceiling and slab. See [Measure areas with cut-outs](topic:measure-areas).
- **Roofs and slopes.** Give an item or an area a {{ui:Pitch}} (6:12 or 26.57°) to measure the roof surface from the plan. Rakes, hips and valleys measure along their slope. See [Roofs and slopes](topic:roofs-and-slopes).
- **Scales from the sheets' text.** {{ui:From the sheets’ text…}} in the scale list finds the scale printed on each sheet and sets them all in one step. See [Set the scale](topic:set-the-scale).
- **Bend an arc.** A selected arc has a round handle in its middle: drag it to bend the arc. An arc's end now snaps to 45° like a straight segment.
- **Auto count at any angle.** {{ui:Any angle (slower)}} finds symbols turned to any angle. With {{ui:Search all open sheets}}, it also finds them on sheets drawn at another scale. See [Auto count a symbol](topic:auto-count).

### Organizing and pricing

- **Bid areas.** Tag marks by building, floor or phase with the {{ui:Bid area}} picker. The {{ui:By area}} tab and the workbook give quantities and costs per area, with subtotals. See [Bid areas](topic:bid-areas).
- **Alternates.** A bid area can be an add or a deduct alternate. Totals show the base bid and each alternate's change. See [Bid areas](topic:bid-areas).
- **Typical groups.** Take off a unit once and count it any number of times, for example ×24. Change the number at any time. See [Typical groups](topic:typical-groups).
- **One item, several kinds of marks.** {{ui:Also measure}} lets a room item take its floor, base and doors, each priced on its own row. See [Create takeoff items](topic:create-items).
- **Price library.** {{ui:Library}} in the Items panel imports items, rates and assemblies from a CSV or a past estimate. Add them to any takeoff, or {{ui:Update prices}} from it. See [Price library](topic:price-library).
- **Labor by crew.** Production per hour, crew size and wage give the hours, crew-days and labor cost. See [Create takeoff items](topic:create-items).
- **Bid summary and proposal.** {{ui:Export}} › {{ui:Bid summary & proposal…}} adds sales tax, overhead, profit and bond, and makes a proposal PDF with inclusions and exclusions. See [Bid summary and proposal](topic:bid-summary).

### Revisions, markups and files

- **Compare a revised sheet.** {{ui:Compare}} on the sheet bar lays the old drawing in red over the new one. Line them up by two points, find the changes, and move the takeoff across. Marks that need a look are flagged. See [Compare a revised sheet and move the takeoff](topic:compare-revisions).
- **Notes, clouds and highlights.** The {{ui:Markup}} menu on the sheet bar draws them, each with a status. The {{ui:Markups}} panel lists them, and the marked PDF shows them. They are never counted. See [Notes, clouds and highlights](topic:markups).
- **A PDF with the takeoff inside.** {{ui:Export}} › {{ui:PDF with the takeoff inside}} saves the PDF with the takeoff attached. Open that PDF alone and the takeoff comes back. See [Save and reopen a takeoff](topic:save-and-reopen).
- **Recover your work.** TakeoffCraft keeps a recovery copy of the takeoff in the browser, with its PDFs up to 64 MB. After a crash or a closed tab it asks "Recover your work?". See [Save and reopen a takeoff](topic:save-and-reopen) and [Recover unsaved work](common:recover).
- **A PDF from another app.** A PDF handed over from MarkupCraft opens here in a new tab. The sheet bar's {{ui:MarkupCraft}} button hands your PDF the other way when the MarkupCraft beside it can take one. See [Start a takeoff and open a plan set](topic:open-plan-set).
- **Recent files.** The start screen lists PDFs and takeoffs you opened before, in browsers that can reopen them. See [Where your files go](common:your-files).

### 3D

- **Walls with a thickness, a base and door heads.** {{ui:In 3D}} in the item editor gives walls a thickness, a base height and a head over deducted openings. Quantities do not change. See [Check the takeoff in 3D](topic:check-in-3d).
- **Stacked floors.** {{ui:Levels…}} and {{ui:Stack}} on the 3D bar show the sheets at their floor levels.
- **Save the 3D view.** {{ui:PNG}} saves an image ({{key:Shift}} + click: twice the size). {{ui:GLB}} saves a 3D model for other programs.

### Everywhere

- **Touch screens.** Pinch and pan with two fingers. Long-press or double-tap to finish a run. A {{ui:Finish}} / {{ui:Back}} / {{ui:Cancel}} bar shows while you draw by touch, and targets are bigger for fingers. See [Troubleshooting](topic:troubleshooting).
- **Language files.** Every word on screen and in the exports comes from a language file. Settings › Language offers "Español (México)". It is a machine-made draft that has not been reviewed yet. Help topics stay in English.
- **Find a tool.** Press {{key:Mod+K}}, or choose {{ui:Find}}, and type a few letters to run a tool, change a setting or open a help topic. See [Find a tool or setting](common:find-tools).
- **Add-ons list.** Settings has an Add-ons list. TakeoffCraft ships with no add-ons yet.

## Improved

- {{ui:Export}} is one menu in the toolbar: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Marked PDF}} and the new exports. The toolbar stays on one row.
- The workbook gains sheets when you use the new features: By bid area, Alternates, Bid summary and Markups.
- Dialogs with a lot in them scroll inside, so the title and buttons stay in view.
- The panel shows a new mark as soon as you draw it.
- Panels can go into up to four windows, move between them, and resize by touch when floating. See [Arrange the panels and use a second monitor](common:arrange-panels).
- The view cube's words come from the language file too.

## Fixed

- With a check box or option ticked, {{key:Mod+Z}} and {{key:Delete}} work again.
- Dragging the corner that starts an arc no longer makes the arc straight.

## Files and compatibility

- Takeoffs saved in 0.3 open in 0.4 as they are.
- A takeoff saved in 0.4 opens in 0.3, but 0.3 leaves out what it does not know: bid areas, typical groups, markups, deducts, pitches and the bid summary. Marks of an item's extra kinds are left out too.
- The price library is kept in this browser. Export it as a CSV to move it.

## Not in this version yet

- Box (window) selection.
- A price library shared by a team.
- Reading a scale from a scanned sheet or a scale bar.
- More is listed in [What is not built yet](topic:not-built-yet).
