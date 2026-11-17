---
title: Eingabe von Längen, Einheitspreisen und Prozenten
summary: Was Sie für Strecken, Höhen, Geldsätze und Verschnittprozente eingeben können, mit Beispielen und den Meldungen für Eingaben, die TakeoffCraft nicht lesen kann.
keywords: Eingabe, Format, Fuß Zoll, Brüche, Dezimalfuß, metrisch, Meter, Millimeter, Einheitspreis, Geld, Dollar, Prozent, Verschnitt, Tippen
from: 215bbf4d
---

## Längen

Verwendet von **Reale Strecke** in {{ui:Kalibrieren}} sowie von {{ui:Höhe}} und {{ui:Tiefe}} im Positionseditor.

| Eingabe | Bedeutung |
|---|---|
| `24'-0"` | 24 Fuß |
| `24'-6 1/2"` | 24 Fuß 6½ Zoll |
| `12' 6 1/2"` | 12 Fuß 6½ Zoll (ein Leerzeichen statt des Strichs) |
| `12'-6-1/2"` | 12 Fuß 6½ Zoll (Striche zwischen den Teilen) |
| `24'` | 24 Fuß |
| `30"` | 30 Zoll |
| `6 1/2"` | 6½ Zoll |
| `3/4"` | ¾ Zoll |
| `24 ft 6 in` | 24 Fuß 6 Zoll (auch `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 in der Standardeinheit (siehe unten) |
| `24.5'` | 24.5 Fuß |
| `7.5 m` | 7.5 Meter |
| `750 cm` | 750 Zentimeter |
| `7500 mm` | 7,500 Millimeter |

- Eine einfache Zahl ist in **Fuß** für die Kalibrierung und für Positionen in LF, SF oder SY. Für Positionen in m oder m² ist sie in **Metern**.
- Typografische Anführungszeichen und Strichmarken aus Textverarbeitungen (′ ″ ’ ”) funktionieren wie `'` und `"`. Zwei Apostrophe `''` gelten als `"`.
- Kommas werden ignoriert: `1,200 mm` ist 1200 mm.
- Brüche brauchen auf beiden Seiten ganze Zahlen: `6 1/2"` funktioniert, `6.5 1/2"` nicht.
- Null und negative Strecken werden abgelehnt.

Meldungen:

- „Eine Strecke eingeben, z. B. 24'-0" oder 7.5 m.“ (das Feld ist leer)
- „Eine Strecke größer als null eingeben.“
- „Fuß und Zoll (24'-6 1/2"), Dezimalfuß, m, cm oder mm verwenden.“ (unbekannte Einheit)
- „Diese Strecke konnte nicht gelesen werden. Versuchen Sie es mit 24'-6 1/2" oder 24.5.“

Um die Höhe oder Tiefe einer Position zu löschen, leeren Sie das Feld.

### Rechnen

Jedes Längenfeld sowie das Eingabefeld beim Zeichnen nimmt auch eine Berechnung mit `+`, `-`, `*`, `/` und Klammern an:
`4+7/16` (4.4375 in der Standardeinheit), `12'6" + 3/4"`, `(24'-0")/3` (8 Fuß), `2*450mm`.

- Ein Strich, der in eine Länge geschrieben wird, gehört weiterhin dazu: `24'-6"` ist 24 Fuß 6 Zoll und `6-1/2` ist 6½. Setzen Sie Leerzeichen um einen Strich, um zu subtrahieren: `24' - 6"` ist 23'-6".
- Eine einfache Zahl multipliziert oder dividiert eine Länge als Zahl. Addiert zu einer Länge gilt sie in der Standardeinheit.
- `abs`, `round`, `ceil` und `floor` funktionieren ebenfalls. Eine Berechnung, die nicht gelesen werden kann, wird mit der Angabe abgelehnt, wo der Fehler liegt.

## So werden Längen angezeigt

Längen werden in Fuß, Zoll und Sechzehnteln angezeigt: `12'-6 1/2"`, `0'-0 3/4"`. Werte werden zur Anzeige auf die nächste 1/16 Zoll gerundet. Die Mengen selbst werden nicht gerundet. Dezimalwerte werden mit zwei Nachkommastellen und Tausendertrennzeichen angezeigt, z. B. `1,234.50 LF`.

## Einheitspreise (Material und Lohn je Einheit)

| Eingabe | Bedeutung |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (bis zu vier Nachkommastellen; weitere werden gerundet) |
| (leer) | $0 |

Meldung: „Einen Betrag wie 12.50 eingeben.“ oder „Dieser Betrag ist zu groß.“ Negative Einheitspreise werden nicht akzeptiert.

Beträge (Material, Lohn, Summen) werden auf den Cent genau berechnet: Menge mit Verschnitt × Einheitspreis, kaufmännisch gerundet, genau wie `ROUND(x, 2)` in einer Tabellenkalkulation.

## Verschnitt in Prozent

| Eingabe | Bedeutung |
|---|---|
| `10` | 10 % |
| `7.5%` | 7.5 % |
| (leer) | 0 % |

Bis zu zwei Nachkommastellen, von 0 % bis 1000 %. Meldungen: „Einen Prozentsatz wie 10 oder 7.5 eingeben.“ oder „Verschnitt über 1000 % ist nicht zulässig.“

## Namen und Einheiten

- Namen von Positionen und Komponenten: bis zu 200 Zeichen.
- Die {{ui:Einheit}} einer Komponente: beliebiger Text bis zu 20 Zeichen, z. B. `EA`, `Blatt`, `CY`, `gal`. Sie ist nur eine Bezeichnung; TakeoffCraft rechnet sie nicht um.

## Formeln

Formeln von Kalkulationsbausteinen haben eigene Regeln: siehe [Formelsprache](topic:formulas).
