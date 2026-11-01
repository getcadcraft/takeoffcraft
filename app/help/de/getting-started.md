---
title: Erste Schritte mit TakeoffCraft
summary: Was TakeoffCraft kann, wo es läuft und Ihre erste gemessene und bepreiste Position aus einem PDF-Plansatz.
keywords: Start, erste Mengenermittlung, Schnellstart, Einführung, Kalkulation, Mengenermittlung, Plansatz, PDF
from: 3b9da1fb
---

TakeoffCraft misst Plansätze, PDFs und DWG- oder DXF-Zeichnungen und macht aus den Messungen eine bepreiste Kalkulation. Sie öffnen die Dateien (eine Zeichnung wird direkt aus ihren Blöcken gezählt: siehe [Eine DWG- oder DXF-Zeichnung öffnen](topic:open-a-drawing)), geben jedem Blatt einen Maßstab (eine Zeichnung bringt ihren eigenen mit), legen **Positionen** an (einen Wandtyp, einen Bodenbelag, eine Einrichtung) und klicken auf die Blätter, um sie abzunehmen. Mengen, Kosten und die Auftragssumme aktualisieren sich laufend. Sie können die Kalkulation als Tabelle exportieren, dazu eine Kopie der PDFs mit eingezeichneter Mengenermittlung.

Wenn Sie in anderen Programmen Mengen ermittelt haben, lesen Sie als Nächstes [Umstieg von anderer Mengenermittlungssoftware](topic:coming-from). Manches funktioniert hier anders.

## Wo es läuft

TakeoffCraft läuft in Ihrem Webbrowser. Öffnen Sie TakeoffCraft, und der Bildschirm ist sofort bereit; es gibt nichts zu installieren.

- **Ihre PDFs bleiben auf Ihrem Computer.** Sie werden vom Browser geöffnet und nie hochgeladen. Speichern ist ein Download.
- Es funktioniert in aktuellem Chrome, Edge, Firefox und Safari. Siehe [Browser und Computer](common:browsers).
- Es funktioniert ohne Internetverbindung, sobald Sie in der App-Leiste {{ui:Für Offline speichern}} gewählt haben und dort {{ui:Offline bereit}} steht. Siehe [Offline arbeiten](common:offline).
- Speichern in der Cloud ist noch nicht vorhanden. Als Desktop-App kommt TakeoffCraft in CadCraft Studio, zusammen mit den anderen sieben Apps.

## Ihre erste Mengenermittlung in zehn Schritten

Dieser Durchgang misst einen Wandtyp und bepreist ihn. Er dauert mit jedem Plan, den Sie haben, ein paar Minuten.

1. Wählen Sie {{ui:PDFs öffnen}} in der Gruppe {{ui:Datei}} der Symbolleiste (oder drücken Sie {{key:Mod+O}}), wählen Sie ein oder mehrere PDFs und wählen Sie „Öffnen“. Sie können die PDFs auch irgendwo auf der Seite ablegen.
   Die Blätter erscheinen links, und das erste Blatt öffnet sich in der Mitte.
2. Suchen Sie den aufgedruckten Maßstab des Blatts im Schriftfeld oder unter einem Zeichnungstitel.
3. Öffnen Sie die Liste {{ui:Voreinstellung}} in der Gruppe {{ui:Maßstab}} und wählen Sie diesen Maßstab, zum Beispiel `1/4" = 1'-0"`.
   Die Leiste unten am Blatt zeigt jetzt „Maßstab 1/4" = 1'-0"“.
4. Wählen Sie {{ui:Prüfen}} (oder drücken Sie {{key:D}}) und klicken Sie auf die beiden Enden eines in die Zeichnung eingetragenen Maßes.
   Die Anzeige in der Statusleiste unten links sollte mit dem aufgedruckten Maß übereinstimmen. Falls nicht, siehe [Den Maßstab festlegen](topic:set-the-scale).
5. Wählen Sie im Bereich {{ui:Positionen}} rechts {{ui:Neue Position}}, geben Sie einen Namen wie `Innenwand Typ A` ein, lassen Sie den Typ auf {{ui:Länge (linear)}} und wählen Sie {{ui:Hinzufügen}}.
6. Wählen Sie {{ui:Länge}} in der Symbolleiste (oder drücken Sie {{key:L}}).
7. Klicken Sie auf den Anfang einer Wand, dann auf jede Ecke entlang ihr. Doppelklicken Sie, drücken Sie {{key:Enter}} oder klicken Sie mit der rechten Maustaste, um den Zug abzuschließen.
   Der Zug wird in der Farbe der Position gezeichnet, und seine Länge erscheint neben der Position.
8. Geben Sie im Positionseditor unter {{ui:Positionen}} `9'-0"` bei {{ui:Höhe}}, `0.85` bei {{ui:Material $/LF}} und `1.20` bei {{ui:Lohn $/LF}} ein.
   Die Tabelle {{ui:Mengen}} unten zeigt die Länge, das erweiterte Material und den Lohn sowie die {{ui:Auftragssumme}}.
9. Wählen Sie {{ui:Ermittlung speichern}} (oder drücken Sie {{key:Mod+S}}).
   Ihr Browser lädt eine Datei `.takeoff.json` herunter. Sie enthält Ihre Positionen, Maßstäbe und Markierungen und öffnet sich wieder über denselben PDFs.
10. Öffnen Sie das Menü {{ui:Export}} in der Symbolleiste und wählen Sie {{ui:XLSX}}, um die Kalkulation als Tabelle herunterzuladen.

:::tip
Drücken Sie {{key:Esc}}, um das aktuelle Vorhaben abzubrechen und zum Werkzeug {{ui:Auswählen}} zurückzukehren. {{key:Mod+Z}} macht jede Änderung rückgängig.
:::

## Was Sie als Nächstes lesen sollten

- [Der Bildschirm von TakeoffCraft](topic:workspace) benennt jeden Teil des Fensters.
- [Eine Mengenermittlung beginnen und einen Plansatz öffnen](topic:open-plan-set) behandelt mehrere PDFs und die Blattliste.
- [Positionen der Mengenermittlung anlegen](topic:create-items) erklärt Typen, Einheiten, Verschnitt und Preise.
- [Kalkulationsbausteine und Formeln](topic:assemblies) macht aus einer Messung Ständer, Plattenbahnen und mehr.
- [Tastatur und Maus](topic:keyboard) listet jede Taste auf.
