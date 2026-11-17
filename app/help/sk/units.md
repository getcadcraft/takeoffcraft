---
title: Jednotky
summary: Jednotky, v ktorých môže položka vykazovať, jednotky, ktoré používajú premenné vzorca, a ako sa miešajú imperiálne a metrické jednotky.
keywords: jednotky, lf, sf, sy, sq, štvorcové yardy, strešné štvorce, akre, hektáre, metre, štvorcové metre, ea, kus, metrický, imperiálny, prevod, predvolená jednotka
from: b7bf0528
---

## Jednotky položky

| Typ položky | Jednotka | Názov |
|---|---|---|
| Lineárne | LF | lineárne stopy (predvolené) |
| Lineárne | m | metre |
| Plocha | SF | štvorcové stopy (predvolené) |
| Plocha | SY | štvorcové yardy |
| Plocha | SQ | strešné štvorce (100 štvorcových stôp) |
| Plocha | ac | akre |
| Plocha | m² | štvorcové metre |
| Plocha | ha | hektáre |
| Počet | EA | kus |

Zmeňte ju pomocou {{ui:Jednotka}} v editore položky kedykoľvek, aj po meraní; množstvo sa hneď prepočíta.

Zoznam {{ui:Jednotka}} zobrazuje jednotky zapnuté v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} a vždy vlastnú jednotku položky. Nová položka začína v jednotke dĺžky alebo plochy označenej hviezdičkou, ak je jednou z jednotiek položky; inak v LF alebo SF. Pozri [Jednotky, zadávané hodnoty a zoznamy jednotiek](common:unit-lists).

## Jednotky premenných vzorca

| Jednotka položky | L, P, H | A |
|---|---|---|
| LF | stopy | štvorcové stopy (plocha steny) |
| m | metre | štvorcové metre (plocha steny) |
| SF | stopy | štvorcové stopy |
| SY | stopy | štvorcové yardy |
| SQ | stopy | štvorce |
| ac | stopy | akre |
| m² | metre | štvorcové metre |
| ha | metre | hektáre |

Pri položkách SY je `A` v štvorcových yardoch, zatiaľ čo `P` a `H` zostávajú v stopách. Objem z položky SY je `A * 9 * H / 27` kubických yardov; pri doskách je jednoduchšie použiť SF.

## Kde sú jednotky pevné

Niektoré údaje vždy používajú stopy:

- živý údaj na stavovom riadku počas kreslenia (stopy a palce, SF),
- **Vybraná značka** (stopy a palce, LF a SF),
- výsledok kontroly (stopy a palce, s desatinnými stopami a metrami),
- dĺžky úsekov a obvody na hárku Značky v tabuľke (stopy a palce).

Súčty položiek, tabuľka {{ui:Množstvá}}, vzorce a list Odhad používajú vlastnú jednotku položky.

## Mierky a jednotky sú oddelené

Mierka listu hovorí, aký veľký je výkres; jednotka položky hovorí, ako ho vykázať. Metrický výkres v `1:100` sa môže odmerať v LF a imperiálny výkres v m². Kalibrácia prijíma ľubovoľnú jednotku: `24'-6"`, `7.5 m`, `7500 mm`.

## Presnosť

TakeoffCraft meria presne z bodov, na ktoré kliknete, vrátane skutočných dĺžok a plôch oblúkov, a množstvá nezaokrúhľuje. Zobrazenie zaokrúhľuje dĺžky na 1/16 palca a desatinné čísla na dve miesta. Peniaze sa zaokrúhľujú len pri rozšírených sumách, na cent.
