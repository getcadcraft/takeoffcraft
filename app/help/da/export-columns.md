---
title: Eksportkolonner
summary: Hvert regneark og hver kolonne i XLSX-eksporten og CSV-filen, med de formler, som regnearket Kalkulation indeholder.
keywords: eksport, kolonner, xlsx, csv, regneark, kalkulation, pr. ark, markeringer, målestoksforhold, formler, felter
from: fed07851
---

## Kalkulation (XLSX-regneark og CSV)

Én række pr. post, efterfulgt af en række pr. komponent i dens kalkulationsenhed (indrykket). Derefter en tom række og projektets samlede total.

| Kolonne | Indhold | I XLSX |
|---|---|---|
| A Post | Postnavn (fed) eller komponentnavn (indrykket) | Tekst |
| B Type | Lineær, Areal, Tæl eller Komponent | Tekst |
| C Enhed | LF, m, SF, SY, m², EA eller komponentens enhed | Tekst |
| D Mængde | Målt total eller formelresultatet | Tal |
| E Spild % | Spild | Procent (0.10 = 10%) |
| F Mængde med spild | Mængde × (1 + spild) | Formel `D*(1+E)` |
| G Materiale pr. enhed | Materialepris | Tal |
| H Løn pr. enhed | Lønpris | Tal |
| I Materiale | Udregnet materiale | Formel `ROUND(F*G,2)` |
| J Løn | Udregnet løn | Formel `ROUND(F*H,2)` |
| K I alt | Materiale + løn | Formel `I+J` |
| L Noter | Anvendt formel, formelfejl, markeringer på ark uden målestok, vægareal, omkreds | Tekst |

Række for projektets samlede total: `SUM` af kolonne I, J og K over alle rækker ovenfor, og "Ufuldstændig: se noterne ovenfor" i Noter, når noget er udeladt.

En række med en formelfejl har ingen mængde eller beløb; dens note angiver fejlen. Overskriftsrækken er frosset.

I CSV-filen indeholder de samme kolonner almindelige værdier, Spild % er et tal i procent (10 for 10%), og beløb er i dollar med to decimaler. Tekst, som et regneark kan opfatte som en formel (begynder med `=`, `+`, `-` eller `@`), får en foranstillet `'`, så den forbliver tekst.

## Pr. ark (kun XLSX)

| Kolonne | Indhold |
|---|---|
| Ark | Arknavn (med PDF-navnet, når den ikke er åben) |
| Post | Postnavn |
| Mængde | Postens mængde på det ark, i dens enhed |
| Enhed | Postens enhed |
| Markeringer | Antal markeringer |

## Markeringer (kun XLSX)

Én række pr. markering.

| Kolonne | Indhold |
|---|---|
| Ark | Arknavn |
| Post | Postnavn |
| Type | Lineær, Areal eller Tæl |
| Mængde | Længde, nettoareal eller 1 |
| Enhed | LF eller m; SF, SY eller m²; EA |
| Detaljer | Lineær: segmentlængderne, fradrag markeret "(fradrag)", og "fradrag af (længde) ud af (længde) tegnet". Areal: brutto- og udsparingsarealer, når der er udsparinger, og omkredsen. "Arket har ingen målestok" for markeringer uden målestok. |
| Tilbudsområde | Kun når mængdeudtrækket har tilbudsområder: markeringens område, eller "Intet tilbudsområde" |

## Pr. tilbudsområde (kun XLSX, når mængdeudtrækket har tilbudsområder)

| Kolonne | Indhold |
|---|---|
| Tilbudsområde | Områdets navn, eller "Intet tilbudsområde" |
| Post | Posten, eller en indrykket komponent under den |
| Enhed | Postens eller komponentens enhed |
| Mængde | Målt i det område (komponenter: formlen på områdets totaler) |
| Mængde med spild | Mængde × (1 + spild) |
| Materiale, Løn, I alt | Udregnet til øren, som på Kalkulation |
| Noter | Formel, fejl og markeringer uden målestok, som på Kalkulation |

Hvert område afsluttes med en række "(navn) delsum", hvis omkostninger er `SUM`-formler over dens rækker; den sidste række, **Alle tilbudsområder**, lægger delsummerne sammen. Regnearket **Markeringer** får så en syvende kolonne, **Tilbudsområde**.

## Målestoksforhold (kun XLSX)

Én række pr. ark, der har en målestok eller markeringer.

| Kolonne | Indhold |
|---|---|
| Ark | Arknavn |
| Målestok | Forudindstillingens navn, den kalibrerede målestok, eller "Ingen målestok" |
| Hvordan | "Forudindstilling", eller "Kalibreret ud fra (den afstand du angav)" |
| Fod pr. PDF-enhed | Den præcise målestoksfaktor, TakeoffCraft bruger |

## Filnavne

- `(navn).xlsx` og `(navn).csv`, hvor navnet kommer fra den første PDF, der åbnes i mængdeudtrækket.
- CSV-filen er UTF-8 med byte order mark og Windows-linjeskift, som regnearksprogrammer på alle platforme læser.
