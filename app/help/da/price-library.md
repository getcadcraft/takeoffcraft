---
title: Prisbibliotek
summary: Gem dine poster, satser og kalkulationsenheder i et bibliotek, importér det fra en CSV eller en tidligere kalkulation, føj poster fra det til ethvert mængdeudtræk, og opdatér et mængdeudtræks priser fra det.
keywords: bibliotek, fagpakker, prisliste, prisbog, omkostningsdatabase, importér csv, satser, kalkulationsenheder, genbrug, skabeloner, opdatér priser, omprisning
from: 37356c68
---

Et **prisbibliotek** holder de poster, du bruger job efter job: deres type, enhed, højde, spild, materiale- og lønsatser samt kalkulationsenhed. Det gemmes i denne browser, adskilt fra ethvert mængdeudtræk, så ethvert mængdeudtræk, du åbner her, kan bruge det.

Åbn det med {{ui:Bibliotek}} øverst i panelet {{ui:Poster}}.

## Fyld biblioteket

- {{ui:Importér CSV…}} læser et regneark gemt som CSV (se kolonnerne nedenfor). Poster, hvis navn og type allerede findes i biblioteket, erstattes; resten tilføjes. Rækker, den ikke kan læse, springes over, og den siger hvilke og hvorfor.
- {{ui:Tilføj dette mængdeudtrægs poster}} kopierer hver post i det åbne mængdeudtræk ind i biblioteket, med dens satser og kalkulationsenhed (ikke dens markeringer).
- Kalkulations-CSV'en, som TakeoffCraft eksporterer ([Eksportér kalkulationen](topic:export-estimate)), importeres, som den er: sidste jobs priser giver næste job et udgangspunkt.

- {{ui:Fagpakker…}} tilføjer gratis kalkulationsenheder for et fag, såsom gips, el eller beton, uden priser. Se [Fagpakker](topic:trade-packs).

{{ui:Eksportér CSV}} gemmer biblioteket som en CSV, for at beholde en kopi, redigere det i et regneark eller give det til en kollega. {{ui:Ryd}} tømmer det (klik to gange).

:::note
Biblioteket ligger i denne browsers lager. En anden browser, en anden computer eller et privat vindue har sit eget (eller ingen). Eksportér det for at flytte det.
:::

## Brug det i et mængdeudtræk

- Sæt flueben ved poster (skriv i {{ui:Find i biblioteket}} for at indsnævre listen), og vælg {{ui:Tilføj til mængdeudtræk}}. De tilføjes med deres kalkulationsenheder i ét trin, som {{key:Mod+Z}} fortryder. Et navn, der allerede er i mængdeudtrækket, får et nummer, som `Tæppe (2)`.
- {{ui:Opdatér priser}} giver mængdeudtrækkets poster bibliotekets spild og satser, for hver post, hvis navn og type matcher en biblioteksvare, og det samme for komponenter i kalkulationsenheder med samme navn. Højder, enheder og formler forbliver, som de er. Ét {{key:Mod+Z}} sætter alle de gamle priser tilbage.

## CSV-kolonnerne

Første række navngiver kolonnerne, i vilkårlig rækkefølge; andre kolonner ignoreres.

| Kolonne | Hvad der står i den |
|---|---|
| Item (or Name) | Postens navn. Påkrævet. |
| Type | Linear, Area or Count (LF, SF og EA virker også). Er den tom, bestemmer enheden. |
| Unit | LF eller m; SF, SY eller m²; EA. Tom: typens sædvanlige enhed. |
| Waste % | `10` eller `10%`. |
| Material per unit, Labor per unit | Satser som `2.10` eller `$1,250`. |
| Height (or Depth) | `9'-0"`, `9` eller `2.7` for metriske enheder. |
| Component, Formula | En række med et Component-navn (eller typen `Component`) er en del af kalkulationsenheden for posten ovenfor. Dens Unit, Waste og satser er egne; dens Formula bruger postens bogstaver, se [Kalkulationsenheder og formler](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Kommaer, semikolon eller tabulatorer mellem kolonnerne virker alle.
