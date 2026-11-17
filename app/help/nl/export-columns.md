---
title: Exportkolommen
summary: Elk werkblad en elke kolom van de XLSX-export en de CSV, met de formules die het werkblad Raming bevat.
keywords: export, kolommen, xlsx, csv, werkblad, ramingblad, per blad, markeringen, schalen, formules, velden
from: fed07851
---

## Raming (XLSX-werkblad en CSV)

Eén rij per post, gevolgd door een rij per onderdeel van de samenstelling (ingesprongen). Dan een lege rij en het projecttotaal.

| Kolom | Inhoud | In de XLSX |
|---|---|---|
| A Post | Naam van de post (vet) of naam van het onderdeel (ingesprongen) | Tekst |
| B Type | Lineair, Oppervlak, Telling of Onderdeel | Tekst |
| C Eenheid | LF, m, SF, SY, m², EA, of de eenheid van het onderdeel | Tekst |
| D Hoeveelheid | Gemeten totaal, of het resultaat van de formule | Getal |
| E Verlies % | Verlies | Percentage (0.10 = 10%) |
| F Hoeveelheid met verlies | Hoeveelheid × (1 + verlies) | Formule `D*(1+E)` |
| G Materiaal per eenheid | Materiaaltarief | Getal |
| H Arbeid per eenheid | Arbeidstarief | Getal |
| I Materiaal | Uitgewerkt materiaal | Formule `ROUND(F*G,2)` |
| J Arbeid | Uitgewerkte arbeid | Formule `ROUND(F*H,2)` |
| K Totaal | Materiaal + arbeid | Formule `I+J` |
| L Opmerkingen | Gebruikte formule, formulefout, markeringen op bladen zonder schaal, wandoppervlak, omtrek | Tekst |

Projecttotaalrij: `SUM` van de kolommen I, J en K over elke rij hierboven, en "Onvolledig: zie de opmerkingen hierboven" in Opmerkingen wanneer iets is weggelaten.

Een rij met een formulefout heeft geen hoeveelheid of bedragen; de opmerking geeft de fout. De kopregel is vastgezet.

In de CSV bevatten dezelfde kolommen gewone waarden. Verlies % is een getal in procenten (10 voor 10%), en bedragen staan in dollars met twee decimalen. Tekst die een spreadsheet voor een formule zou aanzien (beginnend met `=`, `+`, `-` of `@`) krijgt een voorloop-`'` zodat het tekst blijft.

## Per blad (alleen XLSX)

| Kolom | Inhoud |
|---|---|
| Blad | Bladnaam (met de pdf-naam wanneer die niet open is) |
| Post | Naam van de post |
| Hoeveelheid | Hoeveelheid van die post op dat blad, in de eenheid ervan |
| Eenheid | De eenheid van de post |
| Markeringen | Aantal markeringen |

## Markeringen (alleen XLSX)

Eén rij per markering.

| Kolom | Inhoud |
|---|---|
| Blad | Bladnaam |
| Post | Naam van de post |
| Type | Lineair, Oppervlak of Telling |
| Hoeveelheid | Lengte, netto oppervlak, of 1 |
| Eenheid | LF of m; SF, SY of m²; EA |
| Detail | Lineair: de lengten van de segmenten, de afgetrokken segmenten gemarkeerd met "(minderwerk)", en "minderwerk van (lengte) van (lengte) getekend". Oppervlak: bruto en uitsparingsoppervlakken wanneer er uitsparingen zijn, en de omtrek. "Blad heeft geen schaal" voor markeringen zonder schaal. |
| Inschrijvingsgebied | Alleen wanneer de opmeting inschrijvingsgebieden heeft: het oppervlak van de markering, of "Geen inschrijvingsgebied" |

## Per inschrijvingsgebied (alleen XLSX, wanneer de opmeting inschrijvingsgebieden heeft)

| Kolom | Inhoud |
|---|---|
| Inschrijvingsgebied | De naam van het gebied, of "Geen inschrijvingsgebied" |
| Post | De post, of een ingesprongen onderdeel eronder |
| Eenheid | De eenheid van de post of het onderdeel |
| Hoeveelheid | Gemeten in dat gebied (onderdelen: de formule op de totalen van het gebied) |
| Hoeveelheid met verlies | Hoeveelheid × (1 + verlies) |
| Materiaal, Arbeid, Totaal | Uitgewerkt tot op de cent, zoals bij Raming |
| Opmerkingen | Formule, fouten en markeringen zonder schaal, zoals bij Raming |

Elk gebied eindigt met een rij "(naam) subtotaal" waarvan de kosten `SUM`-formules zijn over de rijen ervan. De laatste rij, **Alle inschrijvingsgebieden**, telt de subtotalen op. Het werkblad **Markeringen** heeft dan een zevende kolom, **Inschrijvingsgebied**.

## Schalen (alleen XLSX)

Eén rij per blad dat een schaal of markeringen heeft.

| Kolom | Inhoud |
|---|---|
| Blad | Bladnaam |
| Schaal | De naam van de voorinstelling, of de gekalibreerde schaal, of "Geen schaal" |
| Hoe | "Voorinstelling", of "Gekalibreerd op (de afstand die u typte)" |
| Voet per pdf-eenheid | De exacte schaalfactor die TakeoffCraft gebruikt |

## Bestandsnamen

- `(naam).xlsx` en `(naam).csv`, waarbij de naam komt van de eerste pdf die in de opmeting is geopend.
- De CSV is UTF-8 met een byte order mark en Windows-regeleinden, die spreadsheetprogramma's op elk platform lezen.
