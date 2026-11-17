---
title: Mengenermittlung speichern und erneut öffnen
summary: Speichern Sie die Mengenermittlung als Projektdatei .takeoff.json, öffnen Sie sie erneut mit denselben PDFs, und erfahren Sie, was passiert, wenn ein PDF fehlt oder sich geändert hat.
keywords: Mengenermittlung im PDF, einbetten, Anhang, speichern, öffnen, erneut öffnen, Projekt, takeoff.json, fortsetzen, weiterarbeiten, überarbeitetes PDF, geändertes PDF, fehlendes PDF, Sicherung, automatisch speichern, wiederherstellen, Absturz
from: bd5080a6
---

Eine Mengenermittlung wird als kleine Projektdatei gespeichert, `(name).takeoff.json`. Sie enthält Ihre Positionen, Kalkulationsbausteine, Einheitspreise, den Maßstab jedes Blatts und jede Markierung. Sie enthält **nicht** die PDFs; diese findet sie anhand ihres Inhalts wieder.

## Speichern

1. Wählen Sie {{ui:Ermittlung speichern}} in der Gruppe {{ui:Datei}} oder drücken Sie {{key:Mod+S}}.
   Ihr Browser lädt `(name).takeoff.json` herunter. Die Statusleiste zeigt: „(name).takeoff.json gespeichert. Sie wird mit denselben PDFs wieder geöffnet (sie werden anhand ihres Inhalts zugeordnet).“
2. Legen Sie die Datei neben die PDFs des Auftrags, damit beide zusammenbleiben.

Jedes Speichern lädt eine neue Datei herunter. Ihr Browser nennt die zweite womöglich `(name) (1).takeoff.json`; behalten Sie die neueste.

Der Name stammt vom ersten PDF, das Sie in dieser Mengenermittlung geöffnet haben.

:::note
Ermittlung speichern ist weiterhin der einzige Weg, eine Mengenermittlung als Datei zu sichern. Während Sie arbeiten, behält TakeoffCraft außerdem eine Wiederherstellungskopie in diesem Browser (siehe unten), und Cloud-Speicherung ist noch nicht verfügbar. Wenn Sie den Tab mit ungespeicherten Änderungen schließen wollen, fragt der Browser nach, ob Sie die Seite verlassen möchten.
:::

## Die Mengenermittlung im PDF behalten

{{ui:Export}} › {{ui:PDF mit der Mengenermittlung darin}} lädt eine Kopie jedes geöffneten PDFs herunter, benannt wie `Plans (with takeoff).pdf`. Sie enthält die gesamte Mengenermittlung als Anhang: Positionen, Markierungen, Maßstäbe, Angebotsbereiche, alles, was die `.takeoff.json` enthält. Ihre Seiten bleiben unverändert, daher sieht sie aus und druckt sich wie das Original, und andere PDF-Leser listen die Mengenermittlung unter ihren Anhängen auf.

Öffnen Sie dieses PDF in TakeoffCraft (auf jede Weise, wie Sie PDFs öffnen). Es fragt: **Dieses PDF enthält eine Mengenermittlung**. Wählen Sie {{ui:Die Mengenermittlung öffnen}}, um sie zurückzuholen, oder {{ui:Nur das PDF}}, um nur die Zeichnung zu öffnen. Die Kopie steht für das PDF, aus dem sie erstellt wurde; daher öffnet sich eine `.takeoff.json`, die aus einem der beiden gespeichert wurde, an beiden.

Mit mehreren PDFs enthält jede Kopie die gesamte Mengenermittlung; öffnen Sie sie zusammen. Speichern Sie aus einer Kopie erneut, ersetzt das die Mengenermittlung darin; es wird keine zweite hinzugefügt. Die `.takeoff.json` ist trotzdem die Datei, die Sie behalten sollten: Sie ist klein, und sie ist die Datei, die die automatische Speicherung und die Desktop-App schreiben.

## Wenn der Tab oder der Browser stehen bleibt

Einige Sekunden nach jeder Änderung behält TakeoffCraft eine Kopie der Mengenermittlung im eigenen Speicher dieses Browsers, zusammen mit ihren PDFs, wenn diese zusammen höchstens 64 MB groß sind. Nichts wird hochgeladen. Wenn Sie die Mengenermittlung speichern, eine neue beginnen oder ein anderes Projekt öffnen, wird die Kopie gelöscht.

Wenn der Tab abstürzt, der Browser oder der Computer anhält oder Sie mit ungespeicherten Änderungen beenden, fragt TakeoffCraft beim nächsten Öffnen **Ihre Arbeit wiederherstellen?** und listet die Mengenermittlung nach Namen auf. Wählen Sie **Wiederherstellen**, um sie zurückzuholen: Positionen, Markierungen und Maßstäbe kehren zurück, und ihre PDFs öffnen sich wieder, wenn sie behalten wurden. Die Statusleiste zeigt: „(name) wiederhergestellt. Sie ist noch nicht in einer Datei gespeichert: Ermittlung speichern sichert sie.“ Waren die PDFs zu groß, um sie zu behalten, öffnen Sie sie erneut; die Markierungen erscheinen auf ihren Blättern. Mehr: [Ihre Arbeit wiederherstellen](common:recover).

## Erneut öffnen

1. Öffnen Sie TakeoffCraft.
2. Ziehen Sie die Datei `.takeoff.json` und ihre PDFs zusammen auf die Seite. Oder wählen Sie {{ui:PDFs öffnen}} für die PDFs und {{ui:Ermittlung öffnen}} für das Projekt, in beliebiger Reihenfolge.
   Die Statusleiste zeigt: „(name) geöffnet: 12 Positionen, 340 Markierungen.“ Jedes Blatt erhält seinen Maßstab zurück, und die Markierungen erscheinen auf ihren Blättern.

Die Reihenfolge der PDFs spielt keine Rolle, ebenso wenig ihre Dateinamen oder Ordner. TakeoffCraft erkennt jedes PDF an einem Fingerabdruck seines Inhalts.

Wenn Sie ein Projekt öffnen, während die aktuelle Mengenermittlung ungespeicherte Änderungen hat, fragt TakeoffCraft zuerst: **Abbrechen**, **Änderungen verwerfen** oder **Zuerst Ermittlung speichern**. Ein Projekt zu öffnen ersetzt die aktuellen Positionen und Markierungen; bereits geöffnete PDFs bleiben offen.

## Wenn ein PDF fehlt

Öffnen Sie das Projekt ohne alle seine PDFs, ergänzt die Statusleiste: „Öffnen Sie seine PDFs, um die Markierungen zu sehen (unter Blätter aufgelistet).“ Unter der Blattliste steht ein Hinweis:

„Diese Mengenermittlung umfasst auch PDFs, die nicht geöffnet sind. Ihre Mengen werden gezählt; öffnen Sie sie, um ihre Markierungen zu sehen und zu bearbeiten:“

Darauf folgen die Dateinamen und Größen. Ihre Markierungen zählen weiterhin in jede Summe und jeden Export, mit den Maßstäben, bei denen sie gemessen wurden. Öffnen Sie diese PDFs, um die Markierungen zu sehen und zu bearbeiten.

## Wenn sich ein PDF geändert hat

Ein PDF, das überarbeitet oder von einem anderen Programm erneut gespeichert wurde, hat anderen Inhalt. Für TakeoffCraft ist es daher eine **andere Datei**, auch wenn der Name gleich ist. Im Hinweis unter der Blattliste steht bei einer solchen Datei: „eine Datei mit diesem Namen ist geöffnet, aber ihr Inhalt unterscheidet sich“.

- Die Markierungen bleiben an der alten Fassung hängen. Sie zählen weiter, an ihren alten Positionen und mit ihren alten Maßstäben.
- Das überarbeitete PDF öffnet sich als neue Blätter ohne Maßstab und ohne Markierungen.

Um die Mengenermittlung auf die Überarbeitung zu übertragen, öffnen Sie beide PDFs und verwenden Sie {{ui:Vergleichen}} auf dem neuen Blatt: [Ein überarbeitetes Blatt vergleichen und die Mengenermittlung übertragen](topic:compare-revisions).

## Eine beschädigte oder fremde Datei

TakeoffCraft prüft jede Projektdatei, bevor sie verwendet wird. Mögliche Meldungen:

- „(Datei) ist kein TakeoffCraft-Projekt (sie ist kein gültiges JSON).“
- „Dies ist keine TakeoffCraft-Projektdatei.“
- „Dieses Projekt wurde mit einer neueren TakeoffCraft-Version gespeichert. Öffnen Sie es dort.“
- „3 Markierungen waren beschädigt und wurden ausgelassen.“ (der Rest wird geöffnet)

## Rückgängig-Verlauf

Der Rückgängig-Verlauf beginnt neu, wenn Sie ein Projekt öffnen. Speichern löscht ihn nicht.
