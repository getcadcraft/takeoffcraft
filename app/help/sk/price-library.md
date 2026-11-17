---
title: Cenová knižnica
summary: Uchovávajte položky, sadzby a zostavy v knižnici, importujte ju z CSV alebo minulého odhadu, pridávajte položky z nej do ľubovoľného výkazu a aktualizujte z nej ceny výkazu.
keywords: knižnica, balíky remesiel, cenník, cenová kniha, databáza nákladov, import csv, sadzby, zostavy, opätovné použitie, šablónové položky, aktualizovať ceny, prepočítať
from: 37356c68
---

Cenová **knižnica** obsahuje položky, ktoré používate zákazku za zákazkou: ich typ, jednotku, výšku, odpad, sadzby materiálu a práce a ich zostavu. Je uchovaná v tomto prehliadači, oddelene od každého výkazu, takže každý výkaz, ktorý tu otvoríte, ju môže použiť.

Otvorte ju cez {{ui:Library}} hore na paneli {{ui:Items}}.

## Naplnenie knižnice

- {{ui:Import CSV…}} načíta tabuľku uloženú ako CSV (pozri stĺpce nižšie). Položky, ktorých názov a typ sú už v knižnici, sa nahradia; ostatné sa pridajú. Riadky, ktoré nevie prečítať, sa preskočia a povie, ktoré a prečo.
- {{ui:Add this takeoff's items}} skopíruje každú položku otvoreného výkazu do knižnice, so sadzbami a zostavou (nie so značkami).
- Odhad CSV, ktorý TakeoffCraft exportuje ([Export odhadu](topic:export-estimate)), sa importuje tak, ako je: ceny minulej zákazky naštartujú ďalšiu.

- {{ui:Trade packs…}} pridá bezplatné zostavy pre remeslo, napríklad sadrokartón, elektroinštalácie alebo betón, bez cien. Pozri [Balíky remesiel](topic:trade-packs).

{{ui:Export CSV}} uloží knižnicu ako CSV, aby ste si ponechali kópiu, upravili ju v tabuľke alebo ju dali kolegovi. {{ui:Clear}} ju vyprázdni (kliknite dvakrát).

:::note
Knižnica žije v úložisku tohto prehliadača. Iný prehliadač, iný počítač alebo súkromné okno má vlastnú (alebo žiadnu). Ak ju chcete presunúť, exportujte ju.
:::

## Použitie vo výkaze

- Označte položky (napíšte do {{ui:Find in the library}}, aby sa zoznam zúžil) a vyberte {{ui:Add to takeoff}}. Pridajú sa so svojimi zostavami v jednom kroku, ktorý {{key:Mod+Z}} vráti späť. Názov, ktorý už vo výkaze je, dostane číslo, napríklad `Koberec (2)`.
- {{ui:Update prices}} dá položkám výkazu odpad a sadzby z knižnice, pre každú položku, ktorej názov a typ sa zhodujú s položkou knižnice, a to isté pre komponenty zostavy s rovnakým názvom. Výšky, jednotky a vzorce zostávajú. Jedno {{key:Mod+Z}} vráti všetky staré ceny späť.

## Stĺpce CSV

Prvý riadok pomenúva stĺpce v ľubovoľnom poradí; ostatné stĺpce sa ignorujú. Názvy stĺpcov a hodnoty zapisujte presne tak, ako sú uvedené (v anglickom znení).

| Stĺpec | Čo sa do neho dáva |
|---|---|
| Item (or Name) | Názov položky. Povinné. |
| Type | Linear, Area alebo Count (fungujú aj LF, SF a EA). Ak je prázdne, rozhodne jednotka. |
| Unit | LF alebo m; SF, SY alebo m²; EA. Prázdne: obvyklá jednotka typu. |
| Waste % | `10` alebo `10%`. |
| Material per unit, Labor per unit | Sadzby ako `2.10` alebo `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, alebo `2.7` pri metrických jednotkách. |
| Component, Formula | Riadok s názvom komponentu (alebo typom `Component`) je súčasťou zostavy položky nad ním. Jeho jednotka, odpad a sadzby sú jeho vlastné; jeho vzorec používa písmená položky, pozri [Zostavy a vzorce](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Stĺpce oddelené čiarkami, bodkočiarkami alebo tabulátormi fungujú všetky.
