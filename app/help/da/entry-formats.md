---
title: Indtastning af længder, enhedspriser og procenter
summary: Hvad du kan skrive for afstande, højder, pengepriser og spildprocenter, med eksempler og meddelelser for indtastninger, TakeoffCraft ikke kan læse.
keywords: indtastning, format, fod tommer, brøker, decimalfod, metrisk, meter, millimeter, enhedspris, penge, dollar, procent, spild, skrivning
from: 215bbf4d
---

## Længder

Bruges af **Reel afstand** i {{ui:Kalibrér}} og af {{ui:Højde}} og {{ui:Dybde}} i postredigeringen.

| Du skriver | Det betyder |
|---|---|
| `24'-0"` | 24 fod |
| `24'-6 1/2"` | 24 fod 6½ tommer |
| `12' 6 1/2"` | 12 fod 6½ tommer (et mellemrum i stedet for bindestregen) |
| `12'-6-1/2"` | 12 fod 6½ tommer (bindestreger mellem delene) |
| `24'` | 24 fod |
| `30"` | 30 tommer |
| `6 1/2"` | 6½ tommer |
| `3/4"` | ¾ tomme |
| `24 ft 6 in` | 24 fod 6 tommer (også `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 i standardenheden (se nedenfor) |
| `24.5'` | 24.5 fod |
| `7.5 m` | 7.5 meter |
| `750 cm` | 750 centimeter |
| `7500 mm` | 7,500 millimeter |

- Et almindeligt tal er i **fod** ved kalibrering og for poster i LF, SF eller SY, og i **meter** for poster i m eller m².
- Typografiske anførselstegn og mærkerne fra tekstbehandlingsprogrammer (′ ″ ’ ”) virker som `'` og `"`. To apostroffer `''` tæller som `"`.
- Kommaer ignoreres: `1,200 mm` er 1200 mm.
- Brøker kræver hele tal på begge sider: `6 1/2"` virker, `6.5 1/2"` gør ikke.
- Nul og negative afstande afvises.

Meddelelser:

- "Angiv en afstand, f.eks. 24'-0" eller 7.5 m." (feltet er tomt)
- "Angiv en afstand større end nul."
- "Brug fod og tommer (24'-6 1/2"), decimalfod, m, cm eller mm." (en ukendt enhed)
- "Afstanden kunne ikke læses. Prøv 24'-6 1/2" eller 24.5."

For at fjerne en posts højde eller dybde, tøm feltet.

### Regning

Alle længdefelter og indtastningsfeltet, mens du tegner, accepterer også en beregning med `+`, `-`, `*`, `/` og parenteser:
`4+7/16` (4.4375 i standardenheden), `12'6" + 3/4"`, `(24'-0")/3` (8 fod), `2*450mm`.

- En bindestreg skrevet ind i en længde er stadig en del af den: `24'-6"` er 24 fod 6 tommer, og `6-1/2` er 6½. Sæt mellemrum omkring en bindestreg for at trække fra: `24' - 6"` er 23'-6".
- Et almindeligt tal ganges eller divideres med en længde som et tal; lægges det til en længde, er det i standardenheden.
- `abs`, `round`, `ceil` og `floor` virker også. En beregning, der ikke kan læses, afvises med angivelse af, hvor den gik galt.

## Sådan vises længder

Længder vises i fod, tommer og sekstendedele: `12'-6 1/2"`, `0'-0 3/4"`. Værdier afrundes til nærmeste 1/16 tomme i visningen; selve mængderne afrundes ikke. Decimalværdier vises med to decimaler og tusindtalsseparatorer, f.eks. `1,234.50 LF`.

## Priser (materiale og løn pr. enhed)

| Du skriver | Det betyder |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (op til fire decimaler; flere afrundes) |
| (tom) | $0 |

Meddelelse: "Angiv et beløb, f.eks. 12.50." eller "Beløbet er for stort." Negative priser accepteres ikke.

Udregnede beløb (materiale, løn, i alt) beregnes til øren: mængde med spild × pris, afrundet halvt væk fra nul, præcis som `ROUND(x, 2)` i et regneark.

## Spildprocent

| Du skriver | Det betyder |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (tom) | 0% |

Op til to decimaler, fra 0% til 1000%. Meddelelser: "Angiv en procentsats, f.eks. 10 eller 7.5." eller "Spild over 1000% er ikke tilladt."

## Navne og enheder

- Navne på poster og komponenter: op til 200 tegn.
- En komponents {{ui:Enhed}}: al tekst op til 20 tegn, f.eks. `EA`, `sheets`, `CY`, `gal`. Det er kun en etiket; TakeoffCraft omregner den ikke.

## Formler

Formler for kalkulationsenheder har deres egne regler: se [Formelsprog](topic:formulas).
