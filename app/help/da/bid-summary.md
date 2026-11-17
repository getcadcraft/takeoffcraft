---
title: Tilbudsoversigt og tilbud
summary: Tilføj lønbyrde, salgsmoms, overhead, fortjeneste og garanti til kalkulationen, skriv omfattet og ikke omfattet, og download en tilbuds-PDF til afsendelse.
keywords: tilbud, lønbyrde, byrde, lønninger, tilbudsdokument, overhead, fortjeneste, tillæg, avance, salgsmoms, garanti, omfattet, ikke omfattet, vilkår, underskrift, kunde, pris
from: 3208a561
---

Kalkulationen prissætter det, du har målt op. **Tilbudsoversigten** gør den til en pris: den lægger salgsmoms, overhead, fortjeneste og garanti til og laver en **tilbuds-PDF** med dine omfattede og ikke omfattede ydelser.

Åbn den fra {{ui:Eksportér}} › {{ui:Tilbudsoversigt og tilbud…}}. Alt i den gemmes sammen med mængdeudtrækket, og hver ændring kan fortrydes.

## Tillæggene

Skriv en procent i en af de fem (lad de andre stå på 0). De regnes ud i denne rækkefølge, hver af det ovenfor:

| Linje | Beregnet som |
|---|---|
| Materiale, Løn | Kalkulationens totaler (grundtilbuddet, når mængdeudtrækket har [alternativer](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Lønbyrde | Byrde % × løn: lønskatter, forsikring og goder på holdenes lønninger. |
| **Omkostning** | Materiale + løn + lønbyrde. |
| Salgsmoms på materiale | Moms % × materiale. |
| Overhead | Overhead % × (omkostning + moms). |
| Fortjeneste | Fortjeneste % × (omkostning + moms + overhead). |
| Garanti | Garanti % × alt ovenfor. |
| **Tilbud** | Summen af linjerne. |

Hver linje afrundes til øre. Regnearket viser de samme linjer under Kalkulation-arkets total, med levende formler. Oversigten opdateres, mens du skriver: {{key:Enter}} tager en procent. Hvert alternativ vises med de samme tillæg på sin egen omkostning, så ejeren ser, hvad det reelt ændrer at tage det med eller fra.

## Tilbuddet

Udfyld, hvad tilbuddet skal sige:

- **Projekt** (mængdeudtrækkets navn, når det er tomt), **Til** (kunden) og **Fra** (din virksomhed).
- **Omfattet** og **Ikke omfattet**: én pr. linje; en indledende bindestreg eller et punkt er fint.
- **Vilkår**: fri tekst, fx »Gyldigt i 30 dage.«
- **Vis poster og mængder**: omfanget, post for post, med mængder og uden priser. Fjern markeringen for et fast-pristilbud.

Vælg {{ui:Tilbuds-PDF}}. PDF'en (`<takeoff> - proposal.pdf`) har datoen, prisblokken med hvert tillæg og tilbuddet, alternativerne, omfanget, de omfattede og ikke omfattede ydelser, vilkårene og linjer til underskrift og dato. Hvis nogle mængder ikke kunne måles (et ark uden målestok), står det under prisen.

## I eksporten

Når mængdeudtrækket har en tilbudsoversigt, slutter CSV-filen med den, og regnearket får et ark **Tilbudsoversigt** med hver linje, dens procent og dens beløb. Se [Eksportér kalkulationen](topic:export-estimate).
