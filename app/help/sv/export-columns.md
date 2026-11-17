---
title: Exportkolumner
summary: Varje kalkylblad och kolumn i XLSX-exporten och CSV-filen, med de formler som kalkylbladet Kalkyl innehåller.
keywords: export, kolumner, xlsx, csv, kalkylblad, kalkylblad per blad, markeringar, skalor, formler, fält
from: fed07851
---

## Kalkyl (XLSX-blad och CSV)

En rad per post, följd av en rad per komponent i dess kalkylsammansättning (indragen). Sedan en tom rad och totalsumman för jobbet.

| Kolumn | Innehåll | I XLSX |
|---|---|---|
| A Post | Postnamn (fetstil) eller komponentnamn (indraget) | Text |
| B Typ | Linjär, Area, Räkna eller Komponent | Text |
| C Enhet | LF, m, SF, SY, m², EA, eller komponentens enhet | Text |
| D Mängd | Uppmätt summa, eller formelns resultat | Tal |
| E Spill % | Spill | Procent (0.10 = 10 %) |
| F Mängd med spill | Mängd × (1 + spill) | Formel `D*(1+E)` |
| G Material per enhet | Materialpris | Tal |
| H Arbete per enhet | Arbetspris | Tal |
| I Material | Uträknat material | Formel `ROUND(F*G,2)` |
| J Arbete | Uträknat arbete | Formel `ROUND(F*H,2)` |
| K Summa | Material + arbete | Formel `I+J` |
| L Anteckningar | Använd formel, formelfel, markeringar på blad utan skala, väggarea, omkrets | Text |

Summeringsraden för jobbet: `SUM` över kolumn I, J och K för alla rader ovan, och ”Ofullständig: se anteckningarna ovan” i Anteckningar när något har utelämnats.

En rad med formelfel har ingen mängd eller några belopp; dess anteckning anger felet. Rubrikraden är låst.

I CSV-filen innehåller samma kolumner vanliga värden, Spill % är ett tal i procent (10 för 10 %), och pengar anges i kronor med två decimaler. Text som ett kalkylprogram kan tolka som en formel (börjar med `=`, `+`, `-` eller `@`) får ett inledande `'` så att den förblir text.

## Per blad (endast XLSX)

| Kolumn | Innehåll |
|---|---|
| Blad | Bladets namn (med PDF-namnet när den inte är öppen) |
| Post | Postnamn |
| Mängd | Postens mängd på det bladet, i dess enhet |
| Enhet | Postens enhet |
| Markeringar | Antal markeringar |

## Markeringar (endast XLSX)

En rad per markering.

| Kolumn | Innehåll |
|---|---|
| Blad | Bladets namn |
| Post | Postnamn |
| Typ | Linjär, Area eller Räkna |
| Mängd | Längd, nettoarea, eller 1 |
| Enhet | LF eller m; SF, SY eller m²; EA |
| Detalj | Linjär: segmentlängderna, avdragna markerade med ”(avdrag)”, och ”avdrar (längd) av (längd) ritat”. Area: brutto- och urtagsareor när det finns urtag, samt omkretsen. ”Bladet har ingen skala” för omskalade markeringar. |
| Anbudsområde | Endast när avtagningen har anbudsområden: markeringens area, eller ”Inget anbudsområde” |

## Per anbudsområde (endast XLSX, när avtagningen har anbudsområden)

| Kolumn | Vad |
|---|---|
| Anbudsområde | Områdets namn, eller ”Inget anbudsområde” |
| Post | Posten, eller en indragen komponent under den |
| Enhet | Postens eller komponentens enhet |
| Mängd | Uppmätt i det området (komponenter: formeln över områdets summor) |
| Mängd med spill | Mängd × (1 + spill) |
| Material, Arbete, Summa | Uträknat till öre, som i Kalkyl |
| Anteckningar | Formler, fel och omskalade markeringar, som i Kalkyl |

Varje område avslutas med en rad ”(namn) delsumma” vars kostnader är `SUM`-formler över dess rader; den sista raden, **Alla anbudsområden**, adderar delsummorna. Arbetsbladet **Markeringar** får då en sjunde kolumn, **Anbudsområde**.

## Skalor (endast XLSX)

En rad per blad som har en skala eller markeringar.

| Kolumn | Innehåll |
|---|---|
| Blad | Bladets namn |
| Skala | Förinställningens namn, den kalibrerade skalan, eller ”Ingen skala” |
| Hur | ”Förinställd”, eller ”Kalibrerad på (avståndet du skrev)” |
| Fot per PDF-enhet | Den exakta skalfaktor som TakeoffCraft använder |

## Filnamn

- `(namn).xlsx` och `(namn).csv`, där namnet kommer från den första PDF-filen som öppnades i avtagningen.
- CSV-filen är UTF-8 med byte order mark och Windows-radslut, som kalkylprogram på alla plattformar läser.
