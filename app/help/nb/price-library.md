---
title: Prisbibliotek
summary: Behold postene, satsene og de sammensatte postene dine i et bibliotek, importer det fra en CSV eller en tidligere kalkyle, legg til poster fra det i ethvert mengdeuttak, og oppdater et mengdeuttaks priser fra det.
keywords: bibliotek, fagpakker, prisliste, prisbok, kostnadsdatabase, importer csv, satser, sammensatte poster, gjenbruk, malposter, oppdater priser, prissett på nytt
from: 37356c68
---

Det **prisbiblioteket** holder postene du bruker jobb etter jobb: type, enhet, høyde, svinn, materiell- og arbeidssatser, og den sammensatte posten. Det lagres i denne nettleseren, adskilt fra alle mengdeuttak, så hvert mengdeuttak du åpner her kan bruke det.

Åpne det med {{ui:Bibliotek}} øverst i panelet {{ui:Poster}}.

## Fyll biblioteket

- {{ui:Importer CSV…}} leser et regneark lagret som CSV (se kolonnene nedenfor). Poster der navn og type allerede finnes i biblioteket, erstattes; resten legges til. Rader den ikke kan lese, hoppes over, og den sier hvilke og hvorfor.
- Legg til dette mengdeuttakets poster kopierer hver post i det åpne mengdeuttaket inn i biblioteket, med satsene og den sammensatte posten (ikke merkene).
- Kalkyle-CSV-en TakeoffCraft eksporterer ([Eksporter kalkylen](topic:export-estimate)) importeres slik den er: forrige jobbs priser gir starten på den neste.

- {{ui:Fagpakker…}} legger til gratis sammensatte poster for et fag, for eksempel gips, elektrisk eller betong, uten priser. Se [Fagpakker](topic:trade-packs).

{{ui:Eksporter CSV}} lagrer biblioteket som en CSV, for å beholde en kopi, redigere det i et regneark eller gi det til en kollega. {{ui:Tøm}} tømmer det (klikk to ganger).

:::note
Biblioteket ligger i denne nettleserens lagring. En annen nettleser, en annen datamaskin eller et privat vindu har sitt eget (eller ingen). Eksporter det for å flytte det.
:::

## Bruk det i et mengdeuttak

- Kryss av poster (skriv i {{ui:Finn i biblioteket}} for å snevre inn listen) og velg {{ui:Legg til i mengdeuttak}}. De legges til med sine sammensatte poster i ett trinn som {{key:Mod+Z}} angrer. Et navn som allerede finnes i mengdeuttaket, får et nummer, som `Teppe (2)`.
- {{ui:Oppdater priser}} gir mengdeuttakets poster bibliotekets svinn og satser, for hver post der navn og type stemmer med en bibliotekspost, og det samme for komponenter i sammensatte poster med samme navn. Høyder, enheter og formler forblir som de er. Ett {{key:Mod+Z}} setter alle de gamle prisene tilbake.

## CSV-kolonnene

Den første raden navngir kolonnene, i hvilken som helst rekkefølge; andre kolonner ignoreres.

| Kolonne | Hva som står der |
|---|---|
| Item (or Name) | Postens navn. Påkrevd. |
| Type | Linear, Area eller Count (LF, SF og EA fungerer også). Står den tom, avgjør enheten. |
| Unit | LF eller m; SF, SY eller m²; EA. Tom: typens vanlige enhet. |
| Waste % | `10` eller `10%`. |
| Material per unit, Labor per unit | Satser som `2.10` eller `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, eller `2.7` for metriske enheter. |
| Component, Formula | En rad med et Component-navn (eller typen `Component`) er del av den sammensatte posten over den. Dens Unit, Waste og satser er dens egne; formelen bruker postens bokstaver, se [Sammensatte poster og formler](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Komma, semikolon eller tabulator mellom kolonnene fungerer alle.
