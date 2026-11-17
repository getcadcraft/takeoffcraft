---
title: Eine neue Ermittlung beginnen
summary: Alles löschen und eine leere Ermittlung starten, ohne die Seite neu zu laden, und vorher Ihre Arbeit sichern.
keywords: neu, neue Ermittlung, löschen, zurücksetzen, von vorn beginnen, leer, PDFs schließen, nächster Auftrag
from: 16d392a4
---

{{ui:Neu}} schließt alle PDFs und startet eine leere Ermittlung auf derselben Seite.

1. Speichern Sie die aktuelle Ermittlung, wenn Sie sie behalten möchten: {{ui:Ermittlung speichern}} oder {{key:Mod+S}}.
2. Wählen Sie {{ui:Neu}} in der Gruppe {{ui:Datei}}.
3. Gibt es nicht gespeicherte Änderungen, fragt TakeoffCraft **Nicht gespeicherte Ermittlung**: Wählen Sie {{ui:Zuerst Ermittlung speichern}} (sie lädt das Projekt herunter und leert dann), {{ui:Änderungen verwerfen}} oder {{ui:Abbrechen}}.
   Das Fenster kehrt in seinen leeren Zustand zurück: keine PDFs, keine Positionen, keine Markierungen, keine Maßstäbe. Die Statusleiste sagt „Neue Ermittlung. PDFs öffnen, um zu beginnen.“

Gelöscht wird:

- jede geöffnete PDF, ihre Blätter und Miniaturansichten,
- Positionen, Kalkulationsbausteine, Markierungen und Maßstäbe,
- Zoom und Position jedes Blatts,
- der Rückgängig-Verlauf (Sie können {{ui:Neu}} nicht rückgängig machen),
- der Bogenmodus sowie jede laufende Auto-Zählung oder Prüfung.

Ihre Dateien auf der Festplatte bleiben unberührt. Um die alte Ermittlung wieder aufzunehmen, öffnen Sie ihre `.takeoff.json` und PDFs: siehe [Ermittlung speichern und wieder öffnen](topic:save-and-reopen).

:::note
Jede neue Ermittlung beginnt ohne Positionen. Um Positionen zu übernehmen, kopieren Sie sie zuerst: {{ui:Position kopieren}} unter Positionen (oder kopieren Sie Markierungen, die ihre Positionen mitnehmen) und fügen Sie sie dann in der neuen Ermittlung mit {{ui:Einfügen}} ein. Siehe [Markierungen kopieren, einfügen und duplizieren](topic:copy-paste). Für Positionen, die Sie bei jedem Auftrag brauchen, halten Sie sie in Ihrer [Preisbibliothek](topic:price-library) und fügen Sie sie von dort hinzu, oder fügen Sie ein [Gewerkepaket](topic:trade-packs) hinzu.
:::
