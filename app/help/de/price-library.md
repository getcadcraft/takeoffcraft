---
title: Preisbibliothek
summary: Halten Sie Ihre Positionen, Preise und Montagen in einer Bibliothek, importieren Sie sie aus einer CSV oder einer früheren Kalkulation, fügen Sie Positionen daraus zu jeder Mengenermittlung hinzu und aktualisieren Sie die Preise einer Mengenermittlung daraus.
keywords: Bibliothek, Gewerkepakete, Preisliste, Preisbuch, Kostendatenbank, CSV importieren, Preise, Montagen, wiederverwenden, Vorlagenpositionen, Preise aktualisieren, neu bepreisen
from: 37356c68
---

Die **Preisbibliothek** enthält Positionen, die Sie Auftrag für Auftrag verwenden: ihren Typ, ihre Einheit, Höhe, Verschnitt, Material- und Lohnpreise und ihre Montage. Sie wird in diesem Browser gehalten, getrennt von jeder Mengenermittlung, sodass jede Mengenermittlung, die Sie hier öffnen, sie verwenden kann.

Öffnen Sie sie mit {{ui:Bibliothek}} oben im Bereich {{ui:Positionen}}.

## Die Bibliothek füllen

- {{ui:CSV importieren…}} liest eine als CSV gespeicherte Tabelle (siehe die Spalten unten). Positionen, deren Name und Typ bereits in der Bibliothek stehen, werden ersetzt; die übrigen werden hinzugefügt. Zeilen, die es nicht lesen kann, werden übersprungen, und es sagt, welche und warum.
- {{ui:Positionen dieser Mengenermittlung hinzufügen}} kopiert jede Position der offenen Mengenermittlung mit ihren Preisen und ihrer Montage in die Bibliothek (nicht ihre Markierungen).
- Die Kalkulations-CSV, die TakeoffCraft exportiert ([Die Kalkulation exportieren](topic:export-estimate)), wird unverändert importiert: Die Preise des letzten Auftrags sind der Start für den nächsten.

- {{ui:Gewerkepakete…}} fügt kostenlose Montagen für ein Gewerk hinzu, etwa Trockenbau, Elektro oder Beton, ohne Preise. Siehe [Gewerkepakete](topic:trade-packs).

{{ui:CSV exportieren}} speichert die Bibliothek als CSV, um eine Kopie zu behalten, sie in einer Tabellenkalkulation zu bearbeiten oder einem Kollegen zu geben. {{ui:Leeren}} leert sie (zweimal klicken).

:::note
Die Bibliothek liegt im Speicher dieses Browsers. Ein anderer Browser, ein anderer Computer oder ein privates Fenster hat einen eigenen (oder keinen). Exportieren Sie sie, um sie zu verschieben.
:::

## In einer Mengenermittlung verwenden

- Haken Sie Positionen an (geben Sie in {{ui:In der Bibliothek suchen}} ein, um die Liste einzugrenzen) und wählen Sie {{ui:Zur Mengenermittlung hinzufügen}}. Sie werden mit ihren Montagen in einem Schritt hinzugefügt, den {{key:Mod+Z}} zurücknimmt. Ein Name, der in der Mengenermittlung schon vorkommt, erhält eine Nummer, wie `Teppich (2)`.
- {{ui:Preise aktualisieren}} gibt den Positionen der Mengenermittlung den Verschnitt und die Preise der Bibliothek, für jede Position, deren Name und Typ zu einer Bibliotheksposition passen, und ebenso für Montagekomponenten mit demselben Namen. Höhen, Einheiten und Formeln bleiben, wie sie sind. Ein {{key:Mod+Z}} stellt alle alten Preise wieder her.

## Die CSV-Spalten

Die erste Zeile benennt die Spalten, in beliebiger Reihenfolge; andere Spalten werden ignoriert.

| Spalte | Was hineinkommt |
|---|---|
| Item (or Name) | Der Name der Position. Pflichtfeld. |
| Type | Linear, Area oder Count (LF, SF und EA funktionieren auch). Bleibt es leer, entscheidet die Einheit. |
| Unit | LF oder m; SF, SY oder m²; EA. Leer: die übliche Einheit des Typs. |
| Waste % | `10` oder `10%`. |
| Material per unit, Labor per unit | Preise wie `2.10` oder `$1,250`. |
| Height (or Depth) | `9'-0"`, `9` oder `2.7` für metrische Einheiten. |
| Component, Formula | Eine Zeile mit einem Component-Namen (oder dem Typ `Component`) gehört zur Montage der Position darüber. Ihre Einheit, ihr Verschnitt und ihre Preise sind ihre eigenen; ihre Formel verwendet die Buchstaben der Position, siehe [Montagen und Formeln](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Kommas, Semikolons oder Tabulatoren zwischen den Spalten funktionieren alle.
