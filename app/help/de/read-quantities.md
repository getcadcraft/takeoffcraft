---
title: Mengen und Kalkulation ablesen
summary: Die Tabelle Mengen nach Position und nach Blatt, den Gesamtbetrag des Auftrags, die Hervorhebung und die Warnung Unvollständig verwenden.
keywords: Mengen, Summen, nach Position, nach Blatt, Gesamtbetrag des Auftrags, Kalkulation, Zusammenfassung, Bericht, Hervorhebung, unvollständig, Kosten
from: 069d41f1
---

Die Tabelle {{ui:Mengen}} am unteren Rand des Fensters ist Ihre laufende Kalkulation. Sie ändert sich in dem Moment, in dem Sie zeichnen, löschen, neu skalieren oder einen Einheitspreis bearbeiten. Mengen werden nie gespeichert; sie werden bei jedem Mal aus den Markierungen neu gemessen, daher können sie nicht veralten.

## Nach Position

Wählen Sie {{ui:Nach Position}} (die Voreinstellung). Jede Position hat eine Zeile, und jede Komponente eines Kalkulationsbausteins hat eine eigene Zeile darunter.

| Spalte | Bedeutung |
|---|---|
| Position | Name, mit der Farbe der Position. „+(n) ohne Maßstab“ bedeutet, dass manche Markierungen auf Blättern ohne Maßstab liegen. |
| Menge | Die gemessene Summe in der Einheit der Position (bei Komponenten: das Ergebnis der Formel). |
| Einheit | LF, m, SF, SY, m², EA oder die Einheit der Komponente. |
| Verschnitt % | Hier oder im Positionseditor eingeben. |
| Mit Verschnitt | Menge × (1 + Verschnitt). |
| Material/Einheit, Lohn/Einheit | Einheitspreise; Sie können sie hier eingeben. |
| Material, Lohn | Mit Verschnitt × Einheitspreis, auf den Cent gerundet. |
| Gesamtbetrag | Material + Lohn. |

Die letzte Zeile, **Gesamtbetrag des Auftrags**, addiert die Spalten Material, Lohn und Gesamtbetrag. Dieselbe Summe steht rechts in der Kopfzeile der Tabelle.

Tragen Sie in eine Verschnitt- oder Einheitspreiszelle einen Wert ein und drücken Sie {{key:Enter}} oder klicken Sie daneben, um ihn zu übernehmen. Ein Wert, den TakeoffCraft nicht lesen kann, wird rot umrandet, und die Statusleiste nennt den Grund, zum Beispiel „Geben Sie einen Betrag wie 12.50 ein.“

Klicken Sie auf die Zeile einer Position, um ihre Markierungen auf jedem Blatt hervorzuheben und zu einem Blatt zu springen, das sie enthält (dasselbe wie ein Klick darauf unter {{ui:Positionen}}).

## Nach Blatt

Wählen Sie {{ui:Nach Blatt}}, um die Menge jeder Position auf jedem Blatt zusammen mit der Anzahl der Markierungen zu sehen. Klicken Sie auf eine Zeile, um dieses Blatt mit der hervorgehobenen Position zu öffnen. Nutzen Sie die Ansicht, um zu prüfen, ob jedes Blatt aufgemessen wurde, oder um Mengen nach Geschoss oder Leistungsbereich aufzuteilen.

## Nach Bereich

Wenn die Ermittlung Angebotsbereiche hat, listet {{ui:Nach Bereich}} die Positionen jedes Bereichs und eine Zwischensumme auf. Siehe [Angebotsbereiche](topic:bid-areas).

## Die Warnung Unvollständig

Wenn etwas nicht in den Summen enthalten ist, zeigt die Kopfzeile eine Warnung, zum Beispiel:

„Unvollständig: 1 Formelfehler, 6 Markierungen auf Blättern ohne Maßstab (nicht in den Summen)“

- **Formelfehler**: Die Formel einer Komponente eines Kalkulationsbausteins kann nicht berechnet werden. Ihre Zeile zeigt „Formelfehler: …“. Siehe [Kalkulationsbausteine und Formeln](topic:assemblies#when-a-formula-is-wrong).
- **Markierungen auf Blättern ohne Maßstab**: Geben Sie diesen Blättern einen Maßstab. Siehe [Maßstab festlegen](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Dieselben Hinweise gehen in die exportierte Tabelle, sodass eine unvollständige Kalkulation nie vollständig wirkt.

## Eine Position hervorheben

Klicken Sie auf eine Position unter {{ui:Positionen}} oder in der Tabelle. Ihre Markierungen bleiben auf jedem Blatt voll sichtbar, der Rest verblasst. Die Blattliste zeigt bei jedem Blatt mit Markierungen „(n) hervorgehoben“ an. Klicken Sie die Position erneut an, um die Hervorhebung zu beenden.

## Positionssummen im Seitenbereich

Auch jede Position in der Liste {{ui:Positionen}} zeigt ihre Menge. Der Abschnitt **Gemessen** im Positionseditor zeigt die Werte, die seine Formeln verwenden: Länge, Strecken und Wandfläche; Fläche, Umfang und Anzahl der Flächen; oder Anzahl.

## Markierungen auf nicht geöffneten PDFs

Eine Mengenermittlung kann Markierungen auf PDFs enthalten, die Sie diesmal nicht geöffnet haben. Sie zählen weiterhin in jede Summe; die Blattliste nennt diese PDFs. Siehe [Mengenermittlung speichern und erneut öffnen](topic:save-and-reopen).

## Mehr Platz

Die Pfeil-Schaltfläche rechts in der Kopfzeile von {{ui:Mengen}} blendet die Tabelle aus, damit das Blatt mehr Platz hat. Wählen Sie sie erneut, um die Tabelle wieder einzublenden.
