---
title: Lengte-, tarief- en persentasie-invoer
summary: Wat jy vir afstande, hoogtes, geldtariewe en afvalpersentasies kan tik, met voorbeelde en die boodskappe vir invoer wat TakeoffCraft nie kan lees nie.
keywords: invoer, formaat, voet duim, breuke, desimale voet, metriek, meter, millimeter, tarief, geld, dollar, persentasie, afval, tik
from: 215bbf4d
---

## Lengtes

Gebruik deur **Werklike afstand** in {{ui:Kalibreer}}, en deur {{ui:Hoogte}} en {{ui:Diepte}} in die itemredigeerder.

| Jy tik | Dit beteken |
|---|---|
| `24'-0"` | 24 voet |
| `24'-6 1/2"` | 24 voet 6½ duim |
| `12' 6 1/2"` | 12 voet 6½ duim ('n spasie in plaas van die streep) |
| `12'-6-1/2"` | 12 voet 6½ duim (strepe tussen die dele) |
| `24'` | 24 voet |
| `30"` | 30 duim |
| `6 1/2"` | 6½ duim |
| `3/4"` | ¾ duim |
| `24 ft 6 in` | 24 voet 6 duim (ook `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 in die verstekeenheid (sien hieronder) |
| `24.5'` | 24.5 voet |
| `7.5 m` | 7.5 meter |
| `750 cm` | 750 sentimeter |
| `7500 mm` | 7,500 millimeter |

- 'n Gewone getal is in **voet** vir kalibrasie en vir items in LF, SF of SY, en in **meter** vir items in m of m².
- Krulaanhalingstekens en die primemerke van tekenverwerkers (′ ″ ’ ”) werk soos `'` en `"`. Twee apostrowe `''` tel as `"`.
- Kommas word geïgnoreer: `1,200 mm` is 1200 mm.
- Breuke benodig heelgetalle aan albei kante: `6 1/2"` werk, `6.5 1/2"` werk nie.
- Nul- en negatiewe afstande word geweier.

Boodskappe:

- "Tik 'n afstand, soos 24'-0" of 7.5 m." (die veld is leeg)
- "Tik 'n afstand groter as nul."
- "Gebruik voet en duim (24'-6 1/2"), desimale voet, m, cm of mm." (onbekende eenheid)
- "Daardie afstand kon nie gelees word nie. Probeer 24'-6 1/2" of 24.5."

Om 'n item se hoogte of diepte uit te vee, maak die veld leeg.

### Rekenkunde

Elke lengteveld, en die tikkassie terwyl jy teken, neem ook 'n berekening met `+`, `-`, `*`, `/` en hakies:
`4+7/16` (4.4375 in die verstekeenheid), `12'6" + 3/4"`, `(24'-0")/3` (8 voet), `2*450mm`.

- 'n Streep wat in 'n lengte geskryf word, is steeds deel daarvan: `24'-6"` is 24 voet 6 duim en `6-1/2` is 6½. Plaas spasies om 'n streep om af te trek: `24' - 6"` is 23'-6".
- 'n Gewone getal vermenigvuldig of deel 'n lengte as 'n getal; as dit by 'n lengte getel word, is dit in die verstekeenheid.
- `abs`, `round`, `ceil` en `floor` werk ook. 'n Berekening wat nie gelees kan word nie, word geweier, met aanduiding waar dit verkeerd gegaan het.

## Hoe lengtes gewys word

Lengtes word as voet, duim en sestiendes gewys: `12'-6 1/2"`, `0'-0 3/4"`. Waardes rond af na die naaste 1/16 duim vir vertoning; die hoeveelhede self word nie afgerond nie. Desimale waardes word met twee desimale gewys en met duisendskeiders, soos `1,234.50 LF`.

## Tariewe (materiaal en arbeid per eenheid)

| Jy tik | Dit beteken |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (tot vier desimale; meer word afgerond) |
| (leeg) | $0 |

Boodskap: "Tik 'n bedrag soos 12.50." of "Daardie bedrag is te groot." Negatiewe tariewe word nie aanvaar nie.

Uitgebreide bedrae (materiaal, arbeid, totale) word tot die sent bereken: hoeveelheid met afval × tarief, afgerond, halwe waarde weg van nul, presies soos 'n sigblad se `ROUND(x, 2)`.

## Afvalpersentasie

| Jy tik | Dit beteken |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (leeg) | 0% |

Tot twee desimale, van 0% tot 1000%. Boodskappe: "Tik 'n persentasie soos 10 of 7.5." of "Afval bo 1000% word nie toegelaat nie."

## Name en eenhede

- Item- en komponentname: tot 200 karakters.
- 'n Komponent se {{ui:Eenheid}}: enige teks tot 20 karakters, soos `EA`, `velle`, `CY`, `gal`. Dit is net 'n etiket; TakeoffCraft skakel dit nie om nie.

## Formules

Samestellingsformules het hul eie reëls: sien [Formuletaal](topic:formulas).
