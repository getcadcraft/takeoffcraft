---
title: Notes, clouds and highlights
summary: Mark questions and changes on the sheets with notes, revision clouds and highlights, track each as open, answered or closed, and send them in the marked PDF.
section: tasks
order: 95
keywords: markup, markups, note, comment, question, rfi, cloud, revision cloud, highlight, status, open, answered, closed, review, markups list
---

Markups are for what you need to remember or ask while taking off: "confirm the base type", a revision cloud round a changed wall, a highlighted note on the plan. They sit on the sheet with a status, are listed in one place, and print in the marked PDF. They are **never counted**: no quantity, no cost.

## Add one

Open {{ui:Markup}} on the bar above the sheet and pick:

| Markup | How |
|---|---|
| {{ui:Note}} | Click where it goes, type the note, choose {{ui:Add}}. It shows as a round pin with its first line beside it. |
| {{ui:Cloud}} | Click one corner, then the opposite one, and type a note (or leave it empty). A scalloped revision cloud goes round the box. |
| {{ui:Highlight}} | Click two corners: a see-through yellow box, with a note if you like. |

{{key:Esc}} after the first corner cancels. The tool stays on for the next one; {{key:V}} goes back to {{ui:Select}}.

## Status and editing

Click a markup with {{ui:Select}} to select it. The right panel shows **Markup**: its kind and sheet, its **Status** — Open, Answered or Closed — and its text, which you can change. {{key:Delete}} (or {{ui:Delete}}) removes it; {{key:Mod+Z}} brings it back.

A note's pin is orange while open, blue once answered and grey when closed; a closed cloud turns grey.

## The list

**Markups** in the right panel lists every markup of the takeoff with its status, and says how many are still open. Tick **Open only** to see what is left to settle. Click a row to go to its sheet and select it.

## Share them

- {{ui:Marked PDF}} draws them on the pages: highlights, clouds and pins, each with a box giving its status in capitals (OPEN, ANSWERED, CLOSED) and its text. A page with markups but no takeoff marks is included too.
- {{ui:XLSX}} adds a **Markups** worksheet: sheet, kind, status and text, one row each.
- They are saved in the `.takeoff.json` and in a [PDF with the takeoff inside](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
