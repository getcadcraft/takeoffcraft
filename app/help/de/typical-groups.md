---
title: Wiederholgruppen
summary: Nehmen Sie eine typische Einheit, einen Raum oder ein Geschoss einmal auf und zählen Sie sie so oft, wie sie sich wiederholt. Ändern Sie die Anzahl später und sehen Sie, welche Markierungen typisch sind.
keywords: typisch, Wiederholgruppe, Wiederholung, Anzahl Wiederholungen, multiplizieren, mal, Einheit, Hotelzimmer, Wohnung, typisches Geschoss, x24, Kopien
from: 42c3a372
---

Ein Gebäude wiederholt sich oft: 24 gleiche Hotelzimmer, 6 typische Geschosse, 40 Stellplätze mit derselben Markierung. Eine **Wiederholgruppe** lässt Sie eine davon aufnehmen und so oft zählen, wie sie sich wiederholt, ohne die Kopien zu zeichnen.

## Eine Wiederholgruppe anlegen

1. Nehmen Sie eine Einheit auf: ihre Wände, ihren Boden, ihre Steckdosen, beliebige Positionen.
2. Wählen Sie ihre Markierungen mit dem Werkzeug {{ui:Auswählen}} aus: Klicken Sie eine an, dann {{key:Shift}} + Klick auf die anderen ([Markierungen auswählen](topic:copy-paste#select-the-marks)).
3. Öffnen Sie unter **Ausgewählte Markierung** {{ui:Wiederholung}} und wählen Sie {{ui:Neue Wiederholgruppe…}}.
4. Geben Sie ihr einen Namen (`Einheit A`) und an, wie oft sie sich wiederholt (`24`). Wählen Sie dann {{ui:Gruppe anlegen}}.

Jede Menge dieser Markierungen zählt jetzt 24-mal: eine 10-ft-Wandstrecke ergibt 240 ft, ein 80-SF-Boden 1,920 SF, zwei Steckdosen 48. Kosten folgen, und Formeln der Kalkulationsbausteine sehen die wiederholten Summen (`N` zählt jede Strecke ebenfalls 24-mal).

Auf dem Blatt umschließt ein gestrichelter Rahmen die Markierungen der Gruppe mit ihrem Namen und ihrer Anzahl, etwa **Einheit A ×24**.

## Später ändern

Die Gruppen stehen unter **Wiederholgruppen** im rechten Bereich:

- Ändern Sie die Zahl nach **×**, um festzulegen, wie oft sie zählt (1 bis 10,000). Jede Menge wird aktualisiert.
- Benennen Sie sie in ihrem Namensfeld um.
- Das Symbol mit dem Kasten wählt ihre Markierungen aus (und zeigt ihr Blatt).
- Der Papierkorb löscht die Gruppe. Ihre Markierungen bleiben und zählen einmal.

Um Markierungen einer Gruppe hinzuzufügen oder daraus zu entfernen, wählen Sie sie aus und wählen dann die Gruppe (oder {{ui:Keine Wiederholung (×1)}}) unter {{ui:Wiederholung}}.

## Gut zu wissen

- Die Markierungen einer Gruppe können auf mehreren Blättern liegen und zu beliebigen Positionen gehören. Jede Markierung ist höchstens in einer Gruppe.
- Eingefügte Kopien gehören nicht zur Gruppe: Eine eingefügte Kopie einer typischen Einheit würde sonst wieder 24-mal zählen. Nutzen Sie eine Gruppe für „dasselbe N-mal“, und Kopieren und Einfügen für die Kopien, die Sie zeichnen.
- Die Markierungen werden einmal gezeichnet. Deshalb zeigen die 3D-Ansicht und das markierte PDF eine Einheit, während die Mengen, die Exporte und die Tabelle je Blatt sie ×N zählen. Das Blatt „Markierungen“ des Excel-Exports zeigt, welche Markierungen typisch sind und wie oft sie zählen.
- Mit Angebotsbereichen zählen die Markierungen einer Gruppe ×N in ihrem eigenen Angebotsbereich.
