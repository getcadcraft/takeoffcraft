---
title: Angebotsbereiche
summary: Markierungen nach Gebäude, Geschoss oder Bauabschnitt kennzeichnen, Mengen je Bereich einzeln ermitteln und Mengen sowie Kosten für jeden Bereich ablesen.
keywords: Mehrleistung, Minderleistung, Basisangebot, Alternativpositionen, Angebotsbereich, Bereich, Gebäude, Geschoss, Bauabschnitt, Zone, Alternative, Aufschlüsselung, Teilung, typisches Geschoss, Zwischensumme, nach Bereich
from: 64f3d41c
---

Ein Angebotsbereich ist ein Teil des Auftrags, den Sie eigenständig bepreisen: ein Gebäude, ein Geschoss, ein Bauabschnitt, ein Flügel. Jede Markierung kann in einem Angebotsbereich liegen. Mengen und Kalkulation lassen sich dann für jeden Bereich mit einer Zwischensumme ablesen, während die Auftragssumme die Summe von allem bleibt.

## Angebotsbereich anlegen

1. Öffnen Sie oben im Bereich {{ui:Positionen}} die Liste {{ui:Angebotsbereich}}.
2. Wählen Sie **Neuer Angebotsbereich…**, geben Sie einen Namen wie „Gebäude A“ oder „Geschoss 2“ ein und wählen Sie **Anlegen**.
   Der neue Bereich wird der aktuelle. Die Statusleiste sagt: „Neue Markierungen gehen in (Name). Markierungen in anderen Angebotsbereichen sind abgeblendet.“

## In einem Bereich Mengen ermitteln

Solange ein Angebotsbereich in der Liste gewählt ist, gehört jede neue Markierung dazu: Strecken, Flächen, Kreise, Zählungen, die Markierungen, die {{ui:Auto-Zählen}} hinzufügt, und was Sie einfügen. Markierungen in anderen Angebotsbereichen und Markierungen ohne Bereich werden auf dem Blatt abgeblendet, damit Sie sehen, was wohin gehört.

Wählen Sie in der Liste **Kein Angebotsbereich**, um ohne Bereich zu ermitteln; dann wird nichts abgeblendet.

:::tip
Typische Geschosse: Ermitteln Sie Geschoss 2, wählen Sie seine Markierungen aus ({{key:Mod+A}} auf dem Blatt), kopieren Sie sie, wählen Sie Geschoss 3 in der Liste und fügen Sie ein. Die Kopien landen in Geschoss 3. Wenn die Geschosse gleich sind und Sie sie nicht getrennt brauchen, zählt eine [Wiederholgruppe](topic:typical-groups) stattdessen ein Geschoss mehrfach.
:::

## Markierungen in einen anderen Bereich verschieben

Wählen Sie eine Markierung oder mehrere ({{key:Shift}} + Klick oder {{key:Mod+A}}). Wählen Sie unter **Ausgewählte Markierung** (oder **Ausgewählte Markierungen**) im Feld {{ui:Angebotsbereich}} den Bereich. Die Statusleiste sagt: „3 Markierungen nach Geschoss 2 verschoben.“ Es ist ein einziger Rückgängigschritt.

## Umbenennen, umordnen oder löschen

Wählen Sie in der Liste **Angebotsbereiche verwalten…**. Überschreiben Sie einen Namen, um ihn umzubenennen, verwenden Sie die Pfeile, um die Reihenfolge zu ändern (Tabellen und Arbeitsmappe folgen ihr), oder löschen Sie einen mit dem Papierkorb. Das Löschen eines Angebotsbereichs behält seine Markierungen: Sie liegen danach in keinem Angebotsbereich. {{key:Mod+Z}} macht jede Änderung rückgängig.

## Mengen je Bereich ablesen

Wählen Sie in der Tabelle {{ui:Mengen}} die Option {{ui:Nach Bereich}} (sie erscheint, sobald die Mengenermittlung einen Angebotsbereich hat). Jeder Bereich listet die Positionen, die er enthält, mit Menge, Einheit und Summe, dann eine Zeile mit der Zwischensumme. Markierungen ohne Angebotsbereich stehen zuletzt als **Kein Angebotsbereich**. Klicken Sie auf eine Positionszeile, um die Position hervorzuheben und diesen Bereich zum aktuellen zu machen.

Kalkulationsbausteine werden für jeden Bereich aus dessen eigenen Summen berechnet. Eine Formel, die aufrundet, etwa `ceil(L / 4)`, kann in den Bereichen zusammen etwas mehr ergeben als für den ganzen Auftrag, so wie bei einem Angebot, das Bereich für Bereich bepreist wird.

## Alternativen: Basisangebot plus Mehr- und Minderleistungen

Ein Angebotsbereich kann eine **Alternative** sein: Arbeiten, die der Auftraggeber dem Angebot hinzufügen oder daraus streichen darf. In **Angebotsbereiche verwalten…** hat jeder Bereich neben seinem Namen eine Liste:

| Auswahl | Was sie bewirkt |
|---|---|
| {{ui:Basisangebot}} | Im Angebot, wie üblich. |
| {{ui:Mehrleistung (Alternativposition)}} | Eigenständig bepreist und **nicht im Basisangebot enthalten**: ein Teppich-Upgrade, ein zusätzliches Vordach. |
| {{ui:Minderleistung (Alternativposition)}} | Im Basisangebot enthalten und als Abzug angeboten: „Vordach entfallen“. |

Ermitteln Sie die Arbeit einer Alternative wie jeden anderen Bereich in ihren Angebotsbereich. Sobald die Mengenermittlung eine Alternative hat:

- Die Kopfzeile der Tabelle {{ui:Mengen}} sagt **Basisangebot** statt Auftragssumme: die gesamte Mengenermittlung ohne die Mehrleistungen.
- {{ui:Nach Bereich}} endet mit dem Basisangebot und einer Zeile je Alternative: **+$300.00** für eine Mehrleistung, **−$1,050.00** für eine Minderleistung.
- Eine Alternative bepreist nur die Positionen, die darin Markierungen haben, mit ihren Kalkulationsbausteinen, sodass ein Baustein einer anderen Position nicht hineingerät.

In den Exporten endet die CSV mit dem Basisangebot und den Alternativen, und die Arbeitsmappe erhält ein Arbeitsblatt **Alternativen**: das Basisangebot, die Positionen jeder Alternative und deren Änderung sowie das Basisangebot ohne alle Mehrleistungen.

## Im Export

{{ui:XLSX}} fügt ein Arbeitsblatt **Nach Angebotsbereich** hinzu: die Positionen und Bausteine jedes Bereichs mit Menge, Menge mit Verschnitt, Material, Lohn und Summe, eine Zwischensumme je Bereich (eine `SUM`-Formel) und am Ende **Alle Angebotsbereiche**. Das Arbeitsblatt **Markierungen** erhält eine Spalte **Angebotsbereich**. Eine Mengenermittlung ohne Angebotsbereiche wird wie bisher exportiert. Siehe [Exportspalten](topic:export-columns).

Die Angebotsbereiche werden mit den Markierungen in der Projektdatei gespeichert.
