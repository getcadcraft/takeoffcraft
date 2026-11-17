---
title: Tilbudssammendrag og forslag
summary: Legg til lønnsbelastning, merverdiavgift, overhead, fortjeneste og kausjon på kalkylen, skriv inkluderte og ekskluderte poster, og last ned et forslag som PDF for å sende.
keywords: tilbud, lønnsbelastning, belastning, lønn, forslag, pristilbud, overhead, fortjeneste, påslag, margin, merverdiavgift, kausjon, inkludert, ekskludert, vilkår, signatur, kunde, pris
from: 3208a561
---

Kalkylen priser det du har mengdeuttatt. **Tilbudssammendraget** gjør den om til en pris: det legger til merverdiavgift, overhead, fortjeneste og kausjon, og lager et **forslag som PDF** med dine inkluderte og ekskluderte poster.

Åpne det fra {{ui:Eksporter}} › {{ui:Tilbudssammendrag og tilbud…}}. Alt i det lagres sammen med mengdeuttaket, og hver endring kan angres.

## Påslagene

Skriv en prosent i en av de fem (la de andre stå på 0). De beregnes i denne rekkefølgen, hver på det som står over:

| Linje | Beregnes som |
|---|---|
| Materiell, Arbeid | Kalkylens totaler (grunntilbudet når mengdeuttaket har [alternativer](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Lønnsbelastning | Belastning % × arbeid: arbeidsgiveravgift, forsikring og goder på mannskapenes lønn. |
| **Kostnad** | Materiell + arbeid + lønnsbelastning. |
| Merverdiavgift på materiell | Merverdiavgift % × materiell. |
| Overhead | Overhead % × (kostnad + merverdiavgift). |
| Fortjeneste | Fortjeneste % × (kostnad + merverdiavgift + overhead). |
| Kausjon | Kausjon % × alt over. |
| **Tilbud** | Summen av linjene. |

Hver linje avrundes til nærmeste cent. Arbeidsboken viser de samme linjene under totalen i regnearket Kalkyle, med levende formler. Sammendraget oppdateres mens du skriver: {{key:Enter}} tar en prosent. Hvert alternativ vises med de samme påslagene på sin egen kostnad, slik at eieren ser hva det faktisk endrer.

## Forslaget

Fyll inn det forslaget skal si:

- **Prosjekt** (mengdeuttakets navn når det er tomt), **Til** (kunden) og **Fra** (ditt firma).
- **Inkludert** og **Ekskludert**: én per linje; en innledende strek eller et punkt er fint.
- **Vilkår**: fri tekst, for eksempel «Gyldig i 30 dager.»
- **List opp postene og mengdene**: omfanget, post for post, med mengder og uten priser. Fjern krysset for et fastpristilbud.

Velg {{ui:Tilbuds-PDF}}. Filen (`<takeoff> - proposal.pdf`) har dato, prisblokken med hvert påslag og tilbudet, alternativene, omfanget, de inkluderte og ekskluderte postene, vilkårene og linjer for signatur og dato. Hvis noen mengder ikke kunne måles (et ark uten målestokk), står det under prisen.

## I eksportene

Når mengdeuttaket har et tilbudssammendrag, avsluttes CSV-filen med det, og arbeidsboken får et regneark **Tilbudssammendrag**, med hver linje, dens prosent og beløp. Se [Eksporter kalkylen](topic:export-estimate).
