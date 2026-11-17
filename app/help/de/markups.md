---
title: Notizen, Wolken und Hervorhebungen
summary: Markieren Sie Fragen und Änderungen auf den Blättern mit Notizen, Revisionswolken und Hervorhebungen, verfolgen Sie jede als Offen, Beantwortet oder Geschlossen und senden Sie sie im markierten PDF.
keywords: Markierung, Markierungen, Notiz, Kommentar, Frage, RFI, Wolke, Revisionswolke, Hervorhebung, Status, offen, beantwortet, geschlossen, Prüfung, Markierungsliste
from: 2b395c13
---

Markierungen sind für das, was Sie beim Ermitteln im Blick behalten oder klären müssen: „Grundtyp bestätigen“, eine Revisionswolke um eine geänderte Wand, eine hervorgehobene Notiz im Plan. Sie liegen mit einem Status auf dem Blatt, sind an einer Stelle aufgelistet und werden im markierten PDF gedruckt. Sie werden **nie gezählt**: keine Menge, keine Kosten.

## Hinzufügen

Öffnen Sie {{ui:Markierung}} in der Leiste über dem Blatt und wählen Sie:

| Markierung | Vorgehen |
|---|---|
| {{ui:Notiz}} | Klicken Sie, wo sie hinkommt, tippen Sie die Notiz und wählen Sie {{ui:Hinzufügen}}. Sie erscheint als runde Nadel mit ihrer ersten Zeile daneben. |
| {{ui:Wolke}} | Klicken Sie auf eine Ecke, dann auf die gegenüberliegende, und tippen Sie eine Notiz (oder lassen Sie das Feld leer). Um den Rahmen legt sich eine gewellte Revisionswolke. |
| {{ui:Hervorhebung}} | Klicken Sie auf zwei Ecken: ein durchsichtiges gelbes Rechteck, mit einer Notiz, wenn Sie möchten. |

{{key:Esc}} nach der ersten Ecke bricht ab. Das Werkzeug bleibt für die nächste aktiv; {{key:V}} wechselt zurück zu {{ui:Auswählen}}.

## Status und Bearbeitung

Klicken Sie mit {{ui:Auswählen}} auf eine Markierung, um sie auszuwählen. Das rechte Bedienfeld zeigt **Markierung**: ihre Art und ihr Blatt, ihren **Status** — Offen, Beantwortet oder Geschlossen — und ihren Text, den Sie ändern können. {{key:Delete}} (oder {{ui:Löschen}}) entfernt sie; {{key:Mod+Z}} holt sie zurück.

Die Nadel einer Notiz ist orange, solange sie offen ist, blau, sobald sie beantwortet ist, und grau, wenn sie geschlossen ist; eine geschlossene Wolke wird grau.

## Die Liste

**Markierungen** im rechten Bedienfeld listet jede Markierung der Ermittlung mit ihrem Status und zeigt, wie viele noch offen sind. Setzen Sie den Haken bei **Nur offene**, um zu sehen, was noch zu klären ist. Klicken Sie auf eine Zeile, um zu ihrem Blatt zu gehen und sie auszuwählen.

## Weitergeben

- {{ui:Markiertes PDF}} zeichnet sie auf die Seiten: Hervorhebungen, Wolken und Nadeln, jeweils mit einem Kasten, der ihren Status in Großbuchstaben (OFFEN, BEANTWORTET, GESCHLOSSEN) und ihren Text angibt. Eine Seite mit Markierungen, aber ohne Ermittlungsmarken, ist ebenfalls enthalten.
- {{ui:XLSX}} fügt ein Arbeitsblatt **Markierungen** hinzu: Blatt, Art, Status und Text, eine Zeile je Markierung.
- Sie werden in der `.takeoff.json` und in einem [PDF mit eingebetteter Ermittlung](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf) gespeichert.
