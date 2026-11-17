---
title: Inmatning av längd, pris och procent
summary: Vad du kan skriva för avstånd, höjder, penningpriser och spillprocent, med exempel och meddelanden för indata som TakeoffCraft inte kan läsa.
keywords: indata, format, fot och tum, bråk, decimalfot, metrisk, meter, millimeter, pris, valuta, dollar, procent, spill, skriva
from: 215bbf4d
---

## Längder

Används av **Verkligt avstånd** i {{ui:Kalibrera}}, och av {{ui:Höjd}} och {{ui:Djup}} i postredigeraren.

| Du skriver | Det betyder |
|---|---|
| `24'-0"` | 24 fot |
| `24'-6 1/2"` | 24 fot 6½ tum |
| `12' 6 1/2"` | 12 fot 6½ tum (mellanslag i stället för bindestreck) |
| `12'-6-1/2"` | 12 fot 6½ tum (bindestreck mellan delarna) |
| `24'` | 24 fot |
| `30"` | 30 tum |
| `6 1/2"` | 6½ tum |
| `3/4"` | ¾ tum |
| `24 ft 6 in` | 24 fot 6 tum (även `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 i standardenheten (se nedan) |
| `24.5'` | 24.5 fot |
| `7.5 m` | 7.5 meter |
| `750 cm` | 750 centimeter |
| `7500 mm` | 7,500 millimeter |

- Ett rent tal är i **fot** för kalibrering och för poster i LF, SF eller SY, och i **meter** för poster i m eller m².
- Typografiska citattecken och de prime-tecken som ordbehandlare använder (′ ″ ’ ”) fungerar som `'` och `"`. Två apostrofer `''` räknas som `"`.
- Kommatecken ignoreras: `1,200 mm` är 1200 mm.
- Bråk kräver heltal på båda sidor: `6 1/2"` fungerar, `6.5 1/2"` gör inte det.
- Noll och negativa avstånd avvisas.

Meddelanden:

- ”Skriv ett avstånd, till exempel 24'-0" eller 7.5 m.” (fältet är tomt)
- ”Skriv ett avstånd större än noll.”
- ”Använd fot och tum (24'-6 1/2"), decimalfot, m, cm eller mm.” (okänd enhet)
- ”Avståndet kunde inte läsas. Prova 24'-6 1/2" eller 24.5.”

För att rensa en posts höjd eller djup tömmer du fältet.

### Räkneoperationer

Alla längdfält, och inmatningsrutan medan du ritar, tar också emot en beräkning med `+`, `-`, `*`, `/` och parenteser:
`4+7/16` (4.4375 i standardenheten), `12'6" + 3/4"`, `(24'-0")/3` (8 fot), `2*450mm`.

- Ett bindestreck i en längd är fortfarande en del av den: `24'-6"` är 24 fot 6 tum och `6-1/2` är 6½. Skriv mellanslag runt ett bindestreck för att subtrahera: `24' - 6"` är 23'-6".
- Ett rent tal multiplicerar eller dividerar en längd som ett tal; adderas det till en längd är det i standardenheten.
- `abs`, `round`, `ceil` och `floor` fungerar också. En beräkning som inte kan läsas avvisas, med uppgift om var det gick fel.

## Så visas längder

Längder visas i fot, tum och sextondelar: `12'-6 1/2"`, `0'-0 3/4"`. Värden avrundas till närmaste 1/16 tum i visningen; mängderna i sig avrundas inte. Decimalvärden visas med två decimaler och tusentalsavgränsare, som `1,234.50 LF`.

## Á-priser (material och arbete per enhet)

| Du skriver | Det betyder |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (upp till fyra decimaler; fler avrundas) |
| (tomt) | $0 |

Meddelande: ”Skriv ett belopp, till exempel 12.50.” eller ”Beloppet är för stort.” Negativa priser godtas inte.

Uträknade belopp (material, arbete, summor) räknas ut till närmaste cent: mängd med spill × pris, avrundat halvt bort från noll, precis som `ROUND(x, 2)` i ett kalkylblad.

## Spill i procent

| Du skriver | Det betyder |
|---|---|
| `10` | 10 % |
| `7.5%` | 7.5 % |
| (tomt) | 0 % |

Upp till två decimaler, från 0 % till 1000%. Meddelanden: ”Skriv en procentsats, till exempel 10 eller 7.5.” eller ”Spill över 1000% är inte tillåtet.”

## Namn och enheter

- Namn på post och komponent: högst 200 tecken.
- En komponents {{ui:Enhet}}: valfri text på högst 20 tecken, till exempel `EA`, `sheets`, `CY`, `gal`. Det är bara en etikett; TakeoffCraft räknar inte om den.

## Formler

Formler för kalkylsammansättningar har egna regler: se [Formelspråk](topic:formulas).
