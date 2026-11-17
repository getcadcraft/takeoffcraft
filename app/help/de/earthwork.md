---
title: Erdarbeiten und Höhenkoten
summary: Höhenkoten auf einem Lageplan markieren, sie für Geländemodell sowie Abtrag und Auftrag an CivilCraft übergeben und hier einfache Aushubmengen ermitteln.
keywords: Erdarbeiten, Aushub, Abtrag, Auftrag, Abtrag und Auftrag, Geländemodellierung, Höhenkote, Höhen, Topo, Geländemodell, Triangulation, civilcraft, Punkte, pnezd, Graben
from: a898e508
---

TakeoffCraft misst, was auf einem Blatt gezeichnet ist. Erdarbeiten brauchen eine Geländeoberfläche und werden daher mit CivilCraft geteilt. CivilCraft erstellt Geländemodelle aus Punkten, modelliert sie und berechnet Abtrag, Auftrag und Massenlinie.

## Einfacher Aushub hier

Für eine Grundfläche, die auf eine Tiefe ausgehoben wird, genügt eine Flächenposition mit einer **Tiefe**: Das Volumen ist Fläche × Tiefe. Das [Gewerke-Paket](topic:trade-packs) des Generalunternehmers enthält eine Position für Massenaushub (Abtragsvolumen, Lockervolumen und Lkw-Fuhren) und eine Position für Versorgungsgräben (Aushub, Bettung und Verfüllung nach Länge und Tiefe).

## Höhenkoten für CivilCraft

1. Legen Sie den Maßstab des Lageplans fest.
2. Erstellen Sie eine Position vom Typ **Zählen**, zum Beispiel „Bestandsgelände“, und klicken Sie auf jede Höhenkote im Blatt.
3. Wählen Sie eine Markierung und geben Sie ihre {{ui:Höhe}} im Bereich Ausgewählte Markierung ein: `102.5`, `102'-6"` oder `31.24 m`. Negative Höhen und die Höhe null sind zulässig.
4. Öffnen Sie das Menü {{ui:Export}} und wählen Sie {{ui:Höhenkoten}}. Sie erhalten eine Punktdatei (`.csv`) mit Point, Northing, Easting, Elevation und Description, eine Zeile je markiertem Punkt des geöffneten Blatts.
5. Öffnen Sie diese Datei in CivilCraft (siehe [Punkte importieren](app:civilcraft/import-points)). Daraus wird das Geländemodell erstellt ([Geländemodell erstellen](app:civilcraft/build-surface)). Danach vergleicht CivilCraft Geländemodelle und liefert Abtrag und Auftrag ([Volumen](app:civilcraft/volumes)).

Hochwert und Rechtswert sind die eigenen Koordinaten des Blatts in Fuß, gemessen von der Blattecke im Maßstab. Strecken und Volumen zwischen den Punkten stimmen, aber es sind nicht die Vermessungskoordinaten Ihres Grundstücks. Verschieben Sie sie bei Bedarf in CivilCraft auf die Koordinaten des Grundstücks.

:::note
Punkte verschiedener Blätter teilen keine Koordinaten, daher exportiert der Export nur das geöffnete Blatt. Höhen werden mit der Ermittlung gespeichert und durch Kopieren und Einfügen übernommen.
:::

## Abtrag und Auftrag aus CivilCraft

Die Erdarbeiten aus CivilCraft kommen als zwei Positionen zurück, die Sie bepreisen können:

1. Modellieren Sie in CivilCraft Ihre Bauplätze und Korridore und wählen Sie dann unter **Erdarbeiten** {{ui:An TakeoffCraft senden}} ([Erdmassen](app:civilcraft/volumes)). Es speichert eine Mengendatei (`.quantities.json`).
2. Öffnen Sie sie in TakeoffCraft mit {{ui:Ermittlung öffnen}} oder ziehen Sie sie in die App. Ihre Ermittlung bleibt geöffnet: Die Datei fügt **Erdarbeiten: Abtrag** und **Erdarbeiten: Auftrag** als [eingegebene Mengen](topic:create-items#typed-quantities-no-drawing) hinzu, in Kubikyard (CY) für ein Projekt in Fuß oder in Kubikmetern (m³) für ein Projekt in Metern. Es ist ein Schritt: {{key:Mod+Z}} macht es rückgängig.
3. Benennen Sie sie um und legen Sie Verschnitt, Einheitspreise und Kalkulationsbausteine nach Bedarf fest.

Wenn sich der Entwurf ändert, senden Sie erneut aus CivilCraft und öffnen Sie die neue Datei: Dieselben zwei Positionen erhalten die neuen Mengen. Ihre Namen, Einheitspreise, Verschnitt und Kalkulationsbausteine bleiben wie eingestellt. Wenn sich die Einheit des Projekts geändert hat, zeigt die Statusleiste das an: Prüfen Sie dann die Einheitspreise. Eine Datei aus einem anderen CivilCraft-Projekt fügt ihre eigenen zwei Positionen hinzu.

Die Mengen sind Abtragsvolumen, wie CivilCraft sie gemessen hat (Rastermethode), also ohne Schwund oder Auflockerung. Fügen Sie diese als Verschnitt hinzu oder verwenden Sie eine Formel wie `Q * 1.25` für das Lockervolumen. Der Positionseditor zeigt, woher jede Menge stammt und wann. Die Hinweisspalte der Kalkulation nennt dies ebenfalls.

:::note
Die Mengendatei ist reines JSON (`"format": "cadcraft-quantities"`). Ein Skript oder ein anderes Programm kann daher ebenfalls eine solche Datei schreiben: mit einem App-Namen, einem Projekt und Positionen mit Schlüssel, Name, Einheit und Menge.
:::
