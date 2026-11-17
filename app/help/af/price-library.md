---
title: Prysbiblioteek
summary: Hou jou items, tariewe en samestellings in 'n biblioteek, voer dit in vanaf 'n CSV of 'n vorige skatting, voeg items daaruit by enige hoeveelheidsopname, en werk 'n hoeveelheidsopname se pryse daaruit op.
keywords: biblioteek, handelspakkette, pryslys, prysboek, kostedatabasis, voer csv in, tariewe, samestellings, hergebruik, sjabloon-items, werk pryse op, herprys
from: 37356c68
---

Die **prysbiblioteek** hou items wat jy op werk na werk gebruik: hul soort, eenheid, hoogte, verlies, materiaal- en arbeidstariewe, en hul samestelling. Dit word in hierdie blaaier gehou, apart van enige hoeveelheidsopname, sodat elke hoeveelheidsopname wat jy hier oopmaak die biblioteek kan gebruik.

Maak dit oop met {{ui:Biblioteek}} bo-aan die {{ui:Items}}-paneel.

## Vul die biblioteek

- {{ui:Voer CSV in…}} lees 'n sigblad wat as CSV gestoor is (sien die kolomme hieronder). Items waarvan die naam en soort reeds in die biblioteek is, word vervang; die res word bygevoeg. Rye wat dit nie kan lees nie, word oorgeslaan, en dit sê watter en hoekom.
- {{ui:Voeg hierdie hoeveelheidsopname se items by}} kopieer elke item van die oop hoeveelheidsopname na die biblioteek, met sy tariewe en samestelling (nie sy merke nie).
- Die skatting-CSV wat TakeoffCraft uitvoer ([Voer die skatting uit](topic:export-estimate)) word soos dit is ingevoer: die vorige werk se pryse saai die volgende een.

- {{ui:Handelspakkette…}} voeg gratis samestellings vir 'n bedryf by, soos gipsbord, elektries of beton, sonder pryse. Sien [Handelspakkette](topic:trade-packs).

{{ui:Voer CSV uit}} stoor die biblioteek as 'n CSV, om 'n afskrif te hou, om dit in 'n sigblad te wysig of om dit aan 'n kollega te gee. {{ui:Maak leeg}} maak dit leeg (klik twee keer).

:::note
Die biblioteek woon in hierdie blaaier se berging. 'n Ander blaaier, 'n ander rekenaar of 'n privaatvenster het sy eie (of geen). Voer dit uit om dit te skuif.
:::

## Gebruik dit in 'n hoeveelheidsopname

- Merk items aan (tik in {{ui:Soek in die biblioteek}} om die lys te versmal) en kies {{ui:Voeg by hoeveelheidsopname}}. Hulle word met hul samestellings in een stap bygevoeg, wat {{key:Mod+Z}} terugneem. 'n Naam wat reeds in die hoeveelheidsopname is, kry 'n nommer, soos `Tapyt (2)`.
- {{ui:Werk pryse op}} gee die hoeveelheidsopname se items die biblioteek se verlies en tariewe, vir elke item waarvan die naam en soort by 'n biblioteek-item pas, en dieselfde vir samestellingskomponente met dieselfde naam. Hoogtes, eenhede en formules bly soos hulle is. Een {{key:Mod+Z}} sit al die ou pryse terug.

## Die CSV-kolomme

Die eerste ry noem die kolomme, in enige volgorde; ander kolomme word geïgnoreer.

| Kolom | Wat daarin gaan |
|---|---|
| Item (or Name) | Die item se naam. Verpligtend. |
| Type | Lineêr, Oppervlakte of Telling (LF, SF en EA werk ook). As dit leeg gelaat word, bepaal die eenheid. |
| Unit | LF of m; SF, SY of m²; EA. Leeg: die soort se gewone eenheid. |
| Waste % | `10` of `10%`. |
| Material per unit, Labor per unit | Tariewe soos `2.10` of `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, of `2.7` vir metriese eenhede. |
| Component, Formula | 'n Ry met 'n Component-naam (of die Type `Component`) is deel van die samestelling van die item daarbo. Sy Unit, Waste en tariewe is sy eie; sy Formula gebruik die item se letters, sien [Samestellings en formules](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Kommas, kommapunte of tabs tussen kolomme werk almal.
