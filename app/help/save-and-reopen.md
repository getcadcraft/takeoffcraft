---
title: Save and reopen a takeoff
summary: Save the takeoff as a .takeoff.json project, reopen it with the same PDFs, and what happens when a PDF is missing or has changed.
section: tasks
order: 110
keywords: takeoff inside pdf, embed, attachment, save, open, reopen, project, takeoff.json, resume, continue, revised pdf, changed pdf, missing pdf, backup, autosave, recover, crash
---

A takeoff is saved as a small project file, `(name).takeoff.json`. It holds your items, assemblies, rates, every sheet's scale and every mark. It does **not** hold the PDFs; it finds them again by their contents.

## Save

1. Choose {{ui:Save takeoff}} in the {{ui:File}} group, or press {{key:Mod+S}}.
   Your browser downloads `(name).takeoff.json`. The status bar says "Saved (name).takeoff.json. It reopens on top of the same PDFs (they are matched by their contents)."
2. Move the file next to the job's PDFs, so the two stay together.

Each save downloads a new file. Your browser may name the second one `(name) (1).takeoff.json`; keep the newest.

The name comes from the first PDF you opened in this takeoff.

:::note
Save takeoff is still the only way to keep a takeoff as a file. While you work, TakeoffCraft also keeps a recovery copy in this browser (see below), and cloud saving is not available yet. If you try to close the tab with unsaved changes, the browser asks whether to leave.
:::

## Keep the takeoff inside the PDF

{{ui:Export}} › {{ui:PDF with the takeoff inside}} downloads a copy of each open PDF, named like `Plans (with takeoff).pdf`, that carries the whole takeoff as an attachment: items, marks, scales, bid areas, everything the `.takeoff.json` holds. Its pages are untouched, so it looks and prints like the original, and other PDF readers list the takeoff under their attachments.

Open that PDF in TakeoffCraft (any way you open PDFs) and it asks **This PDF has a takeoff inside**: choose {{ui:Open the takeoff}} to get it back, or {{ui:Just the PDF}} to only open the drawing. The copy stands for the PDF it was made from, so a `.takeoff.json` saved from either opens on both.

With several PDFs, each copy carries the whole takeoff; open them together. Saving again from a copy replaces the takeoff inside it, it does not add a second one. The `.takeoff.json` is still the file to keep: it is small, and it is what autosave and the desktop app write.

## If the tab or the browser stops

A couple of seconds after each change, TakeoffCraft keeps a copy of the takeoff in this browser's own storage, together with its PDFs when they add up to 64 MB or less. Nothing is uploaded. When you save the takeoff, start a new one or open another project, the copy goes.

If the tab crashes, the browser or computer stops, or you leave with unsaved changes, the next time you open TakeoffCraft it asks **Recover your work?** and lists the takeoff by name. Choose **Recover** to get it back: the items, marks and scales return, and its PDFs open again if they were kept. The status bar says "Recovered (name). It is not saved to a file yet: Save takeoff keeps it." When the PDFs were too large to keep, open them again; the marks appear on their sheets. More: [Recover your work](common:recover).

## Reopen

1. Open TakeoffCraft.
2. Drop the `.takeoff.json` file and its PDFs on the page together. Or choose {{ui:Open plans}} for the PDFs and {{ui:Open takeoff}} for the project, in either order.
   The status bar says "Opened (name): 12 items, 340 marks." Every sheet gets its scale back and the marks appear on their sheets.

The order of the PDFs does not matter, and neither do their file names or folders. TakeoffCraft recognizes each PDF by a fingerprint of its contents.

If you open a project while the current takeoff has unsaved changes, TakeoffCraft asks first: **Cancel**, **Discard changes**, or **Save takeoff first**. Opening a project replaces the current items and marks; PDFs that are already open stay open.

## When a PDF is missing

If you open the project without all its PDFs, the status bar adds "Open its PDFs to see the marks (listed under Sheets)." Under the sheets list, a note says:

"This takeoff also covers PDFs that are not open. Their quantities are counted; open them to see and edit their marks:"

followed by the file names and sizes. Their marks still count in every total and export, with the scales they were measured at. Open those PDFs to see and edit the marks.

## When a PDF has changed

A PDF that was revised, or just saved again by another program, has different contents, so it is a **different file** to TakeoffCraft, even with the same name. In the note under the sheets list, such a file says "a file with this name is open, but its contents differ".

- The marks stay attached to the old version. They keep counting, at their old positions and scales.
- The revised PDF opens as new sheets with no scale and no marks.

To move the takeoff onto the revision, open both PDFs and use {{ui:Compare}} on the new sheet: [Compare a revised sheet and move the takeoff](topic:compare-revisions).

## A damaged or foreign file

TakeoffCraft checks every project file before using it. Messages you may see:

- "(file) is not a TakeoffCraft project (it is not valid JSON)."
- "This is not a TakeoffCraft project file."
- "This project was saved by a newer TakeoffCraft. Open it there."
- "3 marks were damaged and left out." (the rest opens)

## Undo history

Undo history starts fresh when you open a project. Saving does not clear it.
