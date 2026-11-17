---
title: Invoer van lengte, tarief en percentage
summary: Wat u kunt typen voor afstanden, hoogten, geldtarieven en verliespercentages, met voorbeelden en de meldingen voor invoer die TakeoffCraft niet kan lezen.
keywords: invoer, formaat, voet en inch, breuken, decimale voet, metrisch, meter, millimeter, tarief, geld, dollar, procent, verlies, typen
from: 215bbf4d
---

## Lengten

Gebruikt door **Werkelijke afstand** in {{ui:Ijken}} en door {{ui:Hoogte}} en {{ui:Diepte}} in de itemeditor.

| U typt | Betekent |
|---|---|
| `24'-0"` | 24 voet |
| `24'-6 1/2"` | 24 voet 6½ inch |
| `12' 6 1/2"` | 12 voet 6½ inch (een spatie in plaats van het streepje) |
| `12'-6-1/2"` | 12 voet 6½ inch (streepjes tussen de delen) |
| `24'` | 24 voet |
| `30"` | 30 inch |
| `6 1/2"` | 6½ inch |
| `3/4"` | ¾ inch |
| `24 ft 6 in` | 24 voet 6 inch (ook `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 in de standaardeenheid (zie hieronder) |
| `24.5'` | 24.5 voet |
| `7.5 m` | 7.5 meter |
| `750 cm` | 750 centimeter |
| `7500 mm` | 7,500 millimeter |

- Een kaal getal is in **voet** voor kalibratie en voor items in LF, SF of SY, en in **meter** voor items in m of m².
- Krulaanhalingen en de primetekens uit tekstverwerkers (′ ″ ’ ”) werken als `'` en `"`. Twee apostrofs `''` tellen als `"`.
- Komma's worden genegeerd: `1,200 mm` is 1200 mm.
- Breuken hebben hele getallen aan beide kanten nodig: `6 1/2"` werkt, `6.5 1/2"` niet.
- Nul en negatieve afstanden worden geweigerd.

Meldingen:

- "Voer een afstand in, zoals 24'-0" of 7.5 m." (het veld is leeg)
- "Voer een afstand in die groter is dan nul."
- "Gebruik voet en inch (24'-6 1/2"), decimale voet, m, cm of mm." (een onbekende eenheid)
- "Die afstand kon niet worden gelezen. Probeer 24'-6 1/2" of 24.5."

Om de hoogte of diepte van een item te wissen, maakt u het veld leeg.

### Rekenen

Elk lengteveld, en het invoervak tijdens het tekenen, accepteert ook een berekening met `+`, `-`, `*`, `/` en haakjes:
`4+7/16` (4.4375 in de standaardeenheid), `12'6" + 3/4"`, `(24'-0")/3` (8 voet), `2*450mm`.

- Een streepje in een lengte hoort er nog bij: `24'-6"` is 24 voet 6 inch en `6-1/2` is 6½. Zet spaties rond een streepje om af te trekken: `24' - 6"` is 23'-6".
- Een kaal getal vermenigvuldigt of deelt een lengte als getal; opgeteld bij een lengte is het in de standaardeenheid.
- `abs`, `round`, `ceil` en `floor` werken ook. Een berekening die niet kan worden gelezen, wordt geweigerd met de plaats waar het misging.

## Hoe lengten worden getoond

Lengten worden getoond als voet, inch en zestiende: `12'-6 1/2"`, `0'-0 3/4"`. Waarden worden voor de weergave afgerond op de dichtstbijzijnde 1/16 inch; de hoeveelheden zelf worden niet afgerond. Decimale waarden worden met twee decimalen getoond en met duizendtalscheidingstekens, zoals `1,234.50 LF`.

## Tarieven (materiaal en arbeid per eenheid)

| U typt | Betekent |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (tot vier decimalen; meer wordt afgerond) |
| (leeg) | $0 |

Melding: "Voer een bedrag in, zoals 12.50." of "Dat bedrag is te groot." Negatieve tarieven worden niet geaccepteerd.

Uitgewerkte bedragen (materiaal, arbeid, totalen) worden tot op de cent berekend: hoeveelheid met verlies × tarief, halve waarden afgerond van nul af, precies zoals `ROUND(x, 2)` in een spreadsheet.

## Verliespercentage

| U typt | Betekent |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (leeg) | 0% |

Tot twee decimalen, van 0% tot 1000%. Meldingen: "Voer een percentage in, zoals 10 of 7.5." of "Verlies boven 1000% is niet toegestaan."

## Namen en eenheden

- Namen van items en onderdelen: tot 200 tekens.
- De {{ui:Eenheid}} van een onderdeel: elke tekst tot 20 tekens, zoals `EA`, `sheets`, `CY`, `gal`. Het is alleen een label; TakeoffCraft rekent het niet om.

## Formules

Formules van samenstellingen hebben hun eigen regels: zie [Formuletaal](topic:formulas).
