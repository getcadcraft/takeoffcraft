---
title: Eine Mengenermittlung beginnen und eine Planmappe öffnen
summary: Eine oder mehrere PDFs als Planmappe öffnen, sich zwischen den Blättern zurechtfinden und zwischen ihnen wechseln.
keywords: öffnen, Planmappe, mehrere PDFs, mehrere Dateien, Blätter, Zeichnungen, Seitenbeschriftungen, Blattliste, navigieren, ablegen, Übergabe, in einer anderen App öffnen, Markierung
from: ed434468
---

Eine Planmappe besteht oft aus mehreren PDFs: Architektur, Tragwerk, Haustechnik. TakeoffCraft öffnet sie nebeneinander als eine Liste von Blättern, und eine Mengenermittlung kann alle abdecken.

## Die PDFs öffnen

1. Wählen Sie {{ui:PDFs öffnen}} in der Gruppe {{ui:Datei}} oder drücken Sie {{key:Mod+O}}. (Die anderen Menüstile nennen es {{ui:PDFs öffnen…}}.)
2. Wählen Sie im Dateidialog jede PDF der Mappe. Halten Sie {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} gedrückt, um mehrere zu wählen, oder {{key:Shift}}, um einen Bereich zu wählen.
3. Öffnen wählen.
   Während jede Datei gelesen wird, erscheint die Meldung „(Name) wird geöffnet…“. Danach erscheint jede Seite unter {{ui:Blätter}}, und die erste Seite der ersten neuen PDF wird geöffnet.

Sie können auch PDFs aus {{pick:mac=Finder|windows=Explorer|linux=Ihrem Dateimanager}} ziehen und irgendwo auf TakeoffCraft ablegen. Während Sie ziehen, erscheint der Rahmen „PDFs, DWG- oder DXF-Zeichnungen oder eine .takeoff.json hier ablegen“.

Um später weitere PDFs hinzuzufügen, gehen Sie genauso vor. PDFs, die bereits geöffnet sind, werden übersprungen.

Der Startbildschirm listet außerdem die PDFs und Mengenermittlungen auf, die Sie zuletzt geöffnet haben, in Browsern, die einer Seite erlauben, eine Datei erneut zu öffnen (Chrome und Edge). Klicken Sie auf eine, um sie zu öffnen; der Browser fragt möglicherweise zuerst nach der Erlaubnis. Siehe [Ihre Dateien](common:your-files).

:::note
Nichts wird hochgeladen. Der Browser liest die PDFs auf Ihrem Computer, und sie sind aus TakeoffCraft entfernt, sobald Sie den Tab schließen oder {{ui:Neu}} wählen.
:::

## Zeichnungen neben PDFs

{{ui:PDFs öffnen}} nimmt auch DWG- und DXF-Zeichnungen, allein oder zusammen mit PDFs: Modellbereich und Layouts jeder Zeichnung werden zu Blättern in derselben Liste. Siehe [Eine DWG- oder DXF-Zeichnung öffnen](topic:open-a-drawing), dann [Aus einer Zeichnung zählen](topic:count-from-a-drawing).

## Eine PDF, die aus einer anderen App übergeben wird

Eine andere App der Reihe kann Ihnen die PDF übergeben, die sie geöffnet hat: Sie öffnet TakeoffCraft in einem neuen Tab, und die PDF öffnet sich dort, als hätten Sie sie abgelegt. Die Statusleiste sagt „(Name) geöffnet, übergeben von (App). Die Originaldatei ist unverändert.“ Nichts wird hochgeladen; die Datei läuft durch den eigenen Speicher dieses Browsers und ist daraus entfernt, sobald sie sich geöffnet hat.

Sagt die Statusleiste, die PDF sei „nicht angekommen“, hat der Tab zu lange gewartet oder die PDF war bereits in einem anderen Tab geöffnet: Öffnen Sie sie mit {{ui:PDFs öffnen}}.

Umgekehrt hat die Blattleiste unter der Zeichnung eine Schaltfläche {{ui:MarkupCraft}}, wenn MarkupCraft dort läuft, wo Sie arbeiten, und eine Datei annehmen kann: Sie öffnet die PDF des Blatts auf dem Bildschirm in MarkupCraft, in einem neuen Tab, zum Prüfen und Markieren.

## Ein Blatt finden

- Scrollen Sie links in der Liste {{ui:Blätter}} und klicken Sie auf ein Blatt.
- Geben Sie oben in der Liste in **Blätter durchsuchen** ein, um nach Blattnummer, Dateiname oder Seitenbeschriftung zu filtern. Die Zahl neben {{ui:Blätter}} zeigt „3 von 40“, solange ein Filter aktiv ist.
- Drücken Sie {{key:PageDown}} für das nächste Blatt und {{key:PageUp}} für das vorherige. Sie folgen der Liste, so wie sie gefiltert ist.

:::mac
Auf einer Mac-Tastatur ohne Tasten Bild auf und Bild ab drücken Sie fn zusammen mit dem Pfeil nach oben oder unten.
:::

## Wie Blätter benannt werden

- Eine Seite, der ihre PDF eine Beschriftung gibt, etwa `A-101`, wird nach dieser Beschriftung benannt.
- Eine Seite ohne Beschriftung (oder mit einer Beschriftung, die nur ihre Seitenzahl ist) heißt „(Dateiname), Seite (n)“.
- Sind mehrere PDFs geöffnet, tragen beschriftete Blätter zusätzlich den Dateinamen: „A-101 — Architektur“.

Blattnamen lassen sich vorerst nicht von Hand eingeben.

## Ein Blatt betrachten

- Drehen Sie das Mausrad, um am Zeiger zu zoomen.
- Pan: Ziehen Sie mit der linken oder mittleren Taste. Bei {{ui:Auto-Zählen}} oder wenn Sie an der Ecke einer Markierung beginnen, halten Sie {{key:Space}} beim Ziehen gedrückt oder ziehen Sie mit der mittleren Taste.
- Drücken Sie {{key:F}} oder wählen Sie {{ui:Seite einpassen}}, um das ganze Blatt zu sehen; {{key:W}} oder {{ui:Breite einpassen}} passt seine Breite ein.
- Drücken Sie {{key:Plus}} oder {{key:=}}, um hineinzuzoomen, und {{key:Minus}}, um herauszuzoomen, jeweils um die Mitte der Ansicht.

Jedes Blatt merkt sich Zoom und Position, solange es geöffnet ist.

## Weiter

Bevor Sie ein Blatt messen können, braucht es einen Maßstab: [Den Maßstab festlegen](topic:set-the-scale).
