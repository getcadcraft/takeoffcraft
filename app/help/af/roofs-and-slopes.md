---
title: Dakke en hellings
summary: Gee 'n area sy helling om die dakoppervlak uit die plan te meet, en meet windskeerlyne, walmlyne en dakdale langs hulle helling.
keywords: dak, helling, hellingshoek, hellingsfaktor, styging, loop, 6:12, windskeerlyn, walm, dakdal, gewel, dakwerk, vierkante, hellende area, ware lengte, planarea
from: 38225b60
---

'n Dakplan wys elke dakvlak plat, soos van bo gesien. Die dak self is groter: 'n vlak op 6:12 het ongeveer 12% meer oppervlak as sy plan, en sy hellende rande is langer as wat hulle lyk. Gee die item sy helling en TakeoffCraft meet langs die helling.

## 'n Helling tik

'n Helling is die styging per 12 van loop, soos op die dakplan se hellingsimbole. Tik dit as `6:12`, `6/12` of net `6`; 'n ander loop werk ook (`4:10` is 4.8:12). 'n Hoek werk met 'n graadteken: `26.57°`. Leeg of `0` is plat.

## Dakareas

1. Maak 'n areaitem vir die dakbedekking, of maak die een oop wat jy het.
2. Tik in sy instellings die **Pitch**, soos `6:12`.
3. Omlyn elke dakvlak op die plan met {{ui:Area}}, soos gewoonlik.

Elke vlak tel sy planarea maal die hellingsfaktor: √(1 + (styging ÷ 12)²), 1.118 by 6:12 en 1.414 by 12:12. Kies 'n vlak om sy **Area** (op die helling), sy **Plan area** en die **Slope factor** te sien.

Vlakke met 'n ander helling: kies die vlak en tik sy eie **Pitch** in sy paneel. Laat dit leeg om dié van die item te gebruik. Die 3D-kontrolesig, die samestellings (`A` is die hellende area), die koste en die uitvoer gebruik almal die hellende area. Aftrekkings op 'n hellende vlak, soos dakvensters, word teen dieselfde helling afgetrek.

Die omtrek (`P`) bly die planomtrek. Meet dakrande, windskeerlyne, walmlyne en dakdale as lynmetings (hieronder).

## Windskeerlyne, walmlyne en dakdale

1. Maak 'n lineêre item, soos "Rake edge" of "Hips".
2. Stel sy **Slope** op **Rake** ('n hellende rand, soos 'n gewel se) of **Hip or valley** (die lyn waar twee vlakke ontmoet), en tik die **Pitch** van die dakvlakke.
3. Teken die lynmetings op die plan met {{ui:Linear}}.

'n Windskeerlyn tel sy planlengte maal die hellingsfaktor. 'n Walm- of dakdal loop teen 45° oor die plan tussen twee vlakke van dieselfde helling, so sy ware lengte is sy planlengte maal √(1 + (styging ÷ 12)² ÷ 2): 1.061 by 6:12, 1.225 by 12:12.

Een lynmeting kan albei meng. Kies dit: elke segment in sy paneel het 'n hellingslys — **Item's** (die item se instelling), **Level**, **Rake** of **Hip or valley** — en sy lengte langs die helling. 'n Lynmeting se eie **Pitch** in die paneel vervang dié van die item vir al sy segmente. Die paneel wys ook die **Plan length**, en die etikette op die blad wys die lengtes langs die helling.

Aftrekkings werk steeds: 'n afgetrekte segment tel niks, hellend of nie.

:::note
Walmlyne en dakdale neem aan dat albei vlakke dieselfde helling het. Vir vlakke met verskillende hellings, meet die walm elders volgens sy ware lengte, of teken dit as 'n windskeerlyn met 'n gelykwaardige helling.
:::
