---
title: Einheiten
summary: Die Einheiten, in denen eine Position melden kann, die Einheiten ihrer Formelvariablen und wie imperiale und metrische Einheiten sich mischen.
keywords: Einheiten, lf, sf, sy, sq, Quadratyards, Dachquadrate, Acres, Hektar, Meter, Quadratmeter, ea, je Stück, metrisch, imperial, Umrechnung, Standardeinheit
from: b7bf0528
---

## Einheiten der Positionen

| Positionstyp | Einheit | Name |
|---|---|---|
| Länge | LF | laufende Fuß (Standard) |
| Länge | m | Meter |
| Fläche | SF | Quadratfuß (Standard) |
| Fläche | SY | Quadratyards |
| Fläche | SQ | Dachquadrate (100 Quadratfuß) |
| Fläche | ac | Acres |
| Fläche | m² | Quadratmeter |
| Fläche | ha | Hektar |
| Zählen | EA | je Stück |

Ändern Sie die Einheit jederzeit mit {{ui:Einheit}} im Positionseditor, auch nach dem Messen. Die Menge wird sofort umgerechnet.

Die Liste {{ui:Einheit}} zeigt die Einheiten, die unter {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Einheiten}} eingeschaltet sind, und immer die eigene Einheit der Position. Eine neue Position beginnt in der Längen- oder Flächeneinheit, die dort markiert ist, sofern sie zu den Einheiten der Position gehört. Andernfalls beginnt sie in LF oder SF. Siehe [Einheiten, Werteingabe und Einheitenlisten](common:unit-lists).

## Einheiten der Formelvariablen

| Einheit der Position | L, P, H | A |
|---|---|---|
| LF | Fuß | Quadratfuß (Wandfläche) |
| m | Meter | Quadratmeter (Wandfläche) |
| SF | Fuß | Quadratfuß |
| SY | Fuß | Quadratyards |
| SQ | Fuß | Quadrate |
| ac | Fuß | Acres |
| m² | Meter | Quadratmeter |
| ha | Meter | Hektar |

Bei SY-Positionen ist `A` in Quadratyards, während `P` und `H` in Fuß bleiben. Ein Volumen aus einer SY-Position ist `A * 9 * H / 27` Kubikyards. Für Decken ist SF einfacher.

## Wo Einheiten fest sind

Einige Anzeigen verwenden immer Fuß:

- die Live-Anzeige in der Statusleiste beim Zeichnen (Fuß-Zoll, SF),
- **Ausgewählte Markierung** (Fuß-Zoll, LF und SF),
- das Prüfergebnis (Fuß-Zoll, mit Dezimalfuß und Metern),
- Segmentlängen und Umfänge im Blatt „Markierungen“ der Tabelle (Fuß-Zoll).

Positionssummen, die Tabelle {{ui:Mengen}}, Formeln und das Blatt „Kalkulation“ verwenden die eigene Einheit der Position.

## Maßstäbe und Einheiten sind getrennt

Der Maßstab eines Blatts sagt, wie groß die Zeichnung ist. Die Einheit einer Position sagt, wie sie gemeldet wird. Eine metrische Zeichnung im Maßstab `1:100` kann in LF aufgenommen werden, eine imperiale Zeichnung in m². Das Kalibrieren akzeptiert jede Einheit: `24'-6"`, `7.5 m`, `7500 mm`.

## Genauigkeit

TakeoffCraft misst genau aus den Punkten, die Sie anklicken, einschließlich echter Bogenlängen und Flächen, und rundet Mengen nicht. Die Anzeige rundet Längen auf 1/16 Zoll und Dezimalen auf zwei Stellen. Geld wird nur bei den Gesamtbeträgen auf den Cent gerundet.
