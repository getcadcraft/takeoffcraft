---
title: Knjižnica cen
summary: Hranite postavke, enotne cene in sestave v knjižnici, jo uvozite iz CSV ali pretekle ocene, dodajte postavke iz nje v katero koli predizmero in posodobite cene predizmere iz nje.
keywords: knjižnica, paketi po strokah, cenik, cenik postavk, uvoz csv, enotne cene, sestavi, ponovna uporaba, predloge postavk, posodobi cene, ponovno določi cene, stroškovna baza
from: 37356c68
---

**Knjižnica cen** hrani postavke, ki jih uporabljate pri vsakem delu: njihovo vrsto, enoto, višino, odpadek, enotne cene za material in delo ter njihov sestav. Shranjena je v tem brskalniku, ločeno od vsake predizmere, zato lahko vsaka predizmera, ki jo tu odprete, uporablja njo.

Odprete jo z {{ui:Knjižnica}} na vrhu podokna {{ui:Postavke}}.

## Napolnite knjižnico

- {{ui:Uvozi CSV …}} prebere preglednico, shranjeno kot CSV (glejte stolpce spodaj). Postavke, katerih ime in vrsta sta že v knjižnici, se zamenjajo; ostale se dodajo. Vrstice, ki jih ne more prebrati, preskoči in pove, katere in zakaj.
- {{ui:Dodaj postavke te predizmere}} kopira vsako postavko odprte predizmere v knjižnico, z njenimi enotnimi cenami in sestavom (ne z oznakami).
- Izvoz predračuna CSV, ki ga TakeoffCraft izvozi ([Izvoz predračuna](topic:export-estimate)), se uvozi takoj: cene zadnjega dela postanejo izhodišče za naslednjega.

- {{ui:Paketi po strokah …}} doda brezplačne sestave za stroko, na primer suho gradnjo, elektriko ali beton, brez cen. Glejte [Paketi po strokah](topic:trade-packs).

{{ui:Izvozi CSV}} shrani knjižnico kot CSV, da si shranite kopijo, jo uredite v preglednici ali jo dajte sodelavcu. {{ui:Počisti}} jo izprazni (dvakrat kliknite).

:::note
Knjižnica je shranjena v shrambi tega brskalnika. Drug brskalnik, drug računalnik ali zasebno okno ima svojo (ali nobene). Za premik jo izvozite.
:::

## Uporabite jo v predizmeri

- Označite postavke (vpišite v {{ui:Išči v knjižnici}}, da zožite seznam) in izberite {{ui:Dodaj v predizmere}}. Dodajo se s svojimi sestavi v enem koraku, ki ga {{key:Mod+Z}} razveljavi. Ime, ki je že v predizmeri, dobi številko, na primer `Preproga (2)`.
- {{ui:Posodobi cene}} postavkam predizmere da odpadek in enotne cene iz knjižnice, za vsako postavko, katere ime in vrsta se ujemata s postavko knjižnice, in enako za komponente sestava z istim imenom. Višine, enote in formule ostanejo, kakršne so. Ena {{key:Mod+Z}} vrne vse stare cene.

## Stolpci CSV

Prva vrstica poimenuje stolpce, v poljubnem vrstnem redu; drugi stolpci se prezrejo.

| Stolpec | Kaj gre vanj |
|---|---|
| Item (or Name) | Ime postavke. Obvezno. |
| Type | Linear, Area ali Count (LF, SF in EA delujejo tudi). Če je prazno, odloči enota. |
| Unit | LF ali m; SF, SY ali m²; EA. Prazno: običajna enota vrste. |
| Waste % | `10` ali `10%`. |
| Material per unit, Labor per unit | Enotne cene, kot `2.10` ali `$1,250`. |
| Height (or Depth) | `9'-0"`, `9` ali `2.7` za metrične enote. |
| Component, Formula | Vrstica z imenom komponente (ali vrsto `Component`) je del sestava postavke nad njo. Njena enota, odpadek in enotne cene so njeni lastni; njena formula uporablja črke postavke. Glejte [Sestavi in formule](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Pregradna stena tip A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Stojala 16 in. o.c.,ceil(L / 1.333) + N
Talne obloge VCT,Area,SF,5,1.85,1.10,,,
Dvojne vtičnice,Count,EA,,3.50,45,,,
```

Vejice, podpičja ali tabulatorji med stolpci delujejo enako.
