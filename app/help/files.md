---
title: Files TakeoffCraft opens and saves
summary: PDFs in, a takeoff project file, spreadsheets and marked PDFs out - what each holds, where it goes, and what changes online, offline and between browsers.
section: start
order: 30
keywords: files, formats, pdf, takeoff.json, project file, xlsx, csv, marked pdf, download, save, open, offline
---

## What it opens

| File | How | Notes |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open plans}}, {{key:Mod+O}}, or drop on the page | Several at once. Each page becomes a sheet. |
| Takeoff project (`.takeoff.json`) | {{ui:Open takeoff}}, or drop on the page | Your items, scales and marks. You can drop it together with its PDFs. |

Other files dropped on the page are skipped, and the status bar names them.

- **Password-protected PDFs** do not open: "(name) is password-protected. Open an unprotected copy."
- **The same PDF twice** is opened once: "(name) is already open." TakeoffCraft knows files by their contents, not their names.
- **Scanned PDFs** open and measure like any other; TakeoffCraft does not need the text in the PDF.
- **Large plan sets**: every PDF is read in full when it opens (to fingerprint it), so a very large file takes a moment. Thumbnails are drawn one at a time as you scroll.

## What it saves

Every save is a download. Nothing is written back into your PDFs.

| You choose | You get | What is in it |
|---|---|---|
| {{ui:Save takeoff}} | `(name).takeoff.json` | Items, assemblies, rates, sheet scales and every mark, keyed to each PDF by its contents. No PDF pages. |
| {{ui:XLSX}} | `(name).xlsx` | Four worksheets: Estimate (with live formulas), By sheet, Marks, Scales. |
| {{ui:CSV}} | `(name).csv` | The estimate as plain values, one row per item and component. |
| {{ui:Marked PDF}} | `(PDF name) (takeoff).pdf` | A copy of each open PDF that has marks, with the takeoff drawn on its pages and a legend. One file per PDF. |

The name is taken from the first PDF you opened in this takeoff. There is no rename box yet: rename the downloaded file if you want another name.

See [Export the estimate and a marked PDF](topic:export-estimate) and [Export columns](topic:export-columns).

## Where downloads go

Your browser saves them where it saves every download, usually the Downloads folder. Find it in {{pick:mac=Finder|windows=File Explorer|linux=your file manager}}. If your browser is set to ask where to save each file, it asks.

:::chromium
{{ui:Marked PDF}} with several marked PDFs downloads several files at once. Chrome and Edge may ask once whether this site may download multiple files. Choose Allow.
:::

:::safari
Safari saves to Downloads unless you changed the download location in Safari Settings, under General.
:::

## Why the project file and the PDFs are separate

The `.takeoff.json` file holds only your takeoff. It finds its PDFs again by their contents (a fingerprint of each file), so:

- Renaming or moving a PDF does not matter.
- A PDF that was changed or saved again by another program counts as a different file, even with the same name.
- Marks on PDFs that are not open still count in the totals.

See [Save and reopen a takeoff](topic:save-and-reopen).

## Online and offline

Your PDFs and takeoffs never leave your computer, online or offline. The connection matters only for loading TakeoffCraft itself.

To work with no connection, save the app first, while you are online:

1. Choose {{ui:Save for offline}} in the app bar at the top.
   The button counts up, "Saving 12 of 40", while it saves.
2. Wait for {{ui:Offline ready}}.

Saving TakeoffCraft keeps the app, this help, the PDF reader, the PDF writer used by {{ui:Marked PDF}} and the auto count worker in your browser, about 6 MB. Once it says {{ui:Offline ready}}, everything works offline: opening PDFs, measuring, {{ui:Auto count}}, {{ui:Save takeoff}}, {{ui:XLSX}}, {{ui:CSV}} and {{ui:Marked PDF}}.

| The button says | Meaning |
|---|---|
| {{ui:Save for offline}} | Not saved in this browser yet. Choose it to save. |
| Saving (n) of (m) | Saving now. |
| {{ui:Offline ready}} | Saved. Choose it for {{ui:Save again (get the newest version)}} or {{ui:Remove the offline copy}}. |
| {{ui:Could not save}} | Some files did not download. Check your connection and choose it again. |
| {{ui:Offline not available}} | This browser window cannot keep an offline copy (private windows and some managed computers block it). |

More, including how long a saved copy lasts in each browser: [Working offline](common:offline).

:::offline
You are offline. If the app bar shows {{ui:Offline ready}}, everything works. If it does not, the parts TakeoffCraft has not loaded yet in this tab (the PDF writer for {{ui:Marked PDF}}, the auto count worker) cannot load now, and {{ui:Marked PDF}} stops with "The marked PDF could not be written". Your takeoff is safe either way: {{ui:Save takeoff}}, {{ui:XLSX}} and {{ui:CSV}} need no connection. Do not reload the tab until you are online again.
:::

:::online
You are online. Before a site visit or a flight, choose {{ui:Save for offline}} and wait for {{ui:Offline ready}}.
:::

## Spreadsheets

The XLSX keeps live formulas, so a spreadsheet program recalculates the estimate when it opens the file and keeps it right when you change a rate or waste there. The workbook has been checked in LibreOffice Calc, which recalculated every total to the same cent. It has not been opened in Excel yet.

The CSV is plain values with a byte order mark, so spreadsheet programs read characters such as m² correctly.

## Desktop and cloud

:::desktop
From 0.5 the desktop app is CadCraft Studio: TakeoffCraft and the other seven apps in one install. There is no separate TakeoffCraft installer.
:::

Cloud saving is not available yet. Keep your `.takeoff.json` files with the job's PDFs, and back them up like any other file. See [Where your files go](common:your-files).
