---
title: "Das Bürolayout: Gruppierung, Zwischensummen, Titel und Überschriften aus Ihren Standardrichtlinien"
summary: Schalten Sie den Add-on Standardrichtlinien ein, dann übernehmen Kalkulation, Mengen je Blatt, Exporte und was ein Assistent liest das Tabellenlayout Ihres Büros, dasselbe, das die Listen von BimCraft übernehmen.
keywords: Bürostandard, Bürolayout, Standardrichtlinien, Add-on, Tabellenlayout, nach Typ gruppieren, nach Blatt gruppieren, Zwischensumme, Summen, Titel, Überschriften, Großbuchstaben, Kalkulationslayout, Exportlayout, Einstellungen
from: cfd2f30a
---

## Was Sie tun

Lassen Sie TakeoffCraft seine Tabellen so anordnen, wie Ihr Büro sie ausgibt, ohne es in jeder Mengenermittlung einzurichten. Das Layout wird einmal in den Standardrichtlinien festgelegt und gilt für jede App auf diesem Computer: Was Sie in BimCraft oder CadCraft festlegen, verwendet TakeoffCraft, und umgekehrt.

## Schritte

1. Öffnen Sie **Einstellungen › Add-ons** und schalten Sie **Standardrichtlinien** ein. Es ist aus, bis Sie es einschalten; ist es aus oder nichts gesetzt, verhält sich TakeoffCraft genau wie zuvor.
2. Öffnen Sie **Einstellungen › Global › Standardrichtlinien** und suchen Sie **Tabellenlayout (Bürostandard)**:

| Richtlinie | Was sie in TakeoffCraft bewirkt |
|---|---|
| Listen gruppieren nach | **Typ** gruppiert die Kalkulation nach Positionstyp (Linear, Fläche, Zählen, Typisierte Menge). **Ebene** gruppiert die Mengen nach Blatt nach ihrem Blatt. **Raum** und **Keine Gruppierung** lassen beides ungruppiert |
| Summen in Listen | **Eine Zwischensumme unter jeder Gruppe und eine Gesamtsumme** fügt unter jeder Gruppe eine Zwischensumme hinzu. Die Gesamtsumme des Auftrags bleibt immer erhalten |
| Titel der Liste | Eine Zeile über der Tabelle, zum Beispiel `{schedule}: Bürolayout` |
| Spaltenüberschriften | Wie geschrieben, IN GROSSBUCHSTABEN oder Mit Großbuchstaben |

3. Schließen Sie die Einstellungen. Die Tabellen folgen sofort.

## Was das Layout übernimmt

- **Mengen › Nach Position** und **Nach Blatt**: Gruppenüberschriften, eine Zwischensumme unter jeder Gruppe, der Titel und die Schreibweise der Überschriften. Eine Zeile unter dem Titel sagt, welche Teile Ihr Bürostandard festgelegt hat. Die Zeilen bleiben dieselben: Sie tragen weiterhin Preise und Verschnitt ein und klicken auf Zahlen, um deren Markierungen auszuwählen. Eine Komponente oder eine zweite Bedingung bleibt unter ihrer Position.
- **Die exportierte Kalkulation** (CSV und XLSX): dieselben Gruppen und Zwischensummen. In der Arbeitsmappe ist eine Zwischensumme eine `SUBTOTAL`-Formel über ihrer Gruppe, und die Gesamtsumme des Auftrags ist ebenfalls eine, sodass nichts doppelt gezählt wird.
- **Was ein Assistent liest**: `takeoff_estimate` und `takeoff_quantities` (nach Blatt) fügen einen `layout`-Block mit den Gruppen, den Zeilen und den Zwischensummen hinzu und nennen die Teile, die das Büro festgelegt hat.

## Was sein eigenes Layout behält

- **Mengen › Nach Bereich** nennt seine eigene Gruppierung (nach Angebotsbereich) und behält sie bei.
- Die **Gesamtsumme des Auftrags**, die Aufschläge der Angebotszusammenfassung und die Alternativpositionen werden nicht neu gruppiert.
- Eine Gruppierung, für die die Tabelle keine Spalte hat, wird weggelassen: Die Kalkulation hat keine Ebene, die Mengen nach Blatt haben keinen Typ.

## Gut zu wissen

- Die Richtlinien werden in diesem Browser für jede CadCraft-App gehalten und reisen mit der Datei der Standardrichtlinien (**In eine Datei speichern** / **Aus einer Datei laden** an derselben Stelle), sodass ein Büro eine Datei teilt.
- Eine als CSV exportierte Kalkulation mit Gruppen ist zum Lesen gedacht. Um eine Kalkulation als Preisbibliothek zurückzuholen, exportieren Sie sie ohne eingestellte Gruppierung.
- Der BimCraft-Teil desselben Standards: Listen, Einrichtungen und Exporte. TakeoffCraft hat noch keine eigenen Richtlinien, daher gibt es unter Einstellungen › TakeoffCraft keinen Abschnitt Standardrichtlinien.
