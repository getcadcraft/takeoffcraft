---
title: Daken en hellingen
summary: Geef een gebied zijn helling om het dakoppervlak vanuit het plan te meten, en meet schuine dakranden, walmen en dakdalen langs hun helling.
keywords: dak, helling, schuinte, hellingfactor, stijging, loop, 6:12, schuine dakrand, walm, dakdal, topgevel, dakbedekking, squares, hellend oppervlak, werkelijke lengte, plan-oppervlakte
from: 38225b60
---

Een dakplattegrond toont elk dakvlak plat, van bovenaf gezien. Het dak zelf is groter: een vlak van 6:12 heeft ongeveer 12% meer oppervlak dan zijn plan, en de schuine randen zijn langer dan ze eruitzien. Geef het onderdeel zijn helling en TakeoffCraft meet langs de helling.

## Een helling invoeren

Een helling is de stijging per 12 eenheden loop, zoals op de hellingsymbolen van de dakplattegrond. Typ die als `6:12`, `6/12` of gewoon `6`; een andere loop werkt ook (`4:10` is 4.8:12). Een hoek werkt met een graadteken: `26.57°`. Leeg of `0` is vlak.

## Dakoppervlakken

1. Maak een oppervlakte-onderdeel voor de dakbedekking, of open het bestaande.
2. Typ in de instellingen de **Helling**, zoals `6:12`.
3. Omlijn elk dakvlak op het plan met {{ui:Oppervlakte}}, zoals gebruikelijk.

Elk vlak telt zijn plan-oppervlakte maal de hellingfactor: √(1 + (stijging ÷ 12)²), 1.118 bij 6:12 en 1.414 bij 12:12. Selecteer een vlak om zijn **Oppervlakte** (op de helling), zijn **Plan-oppervlakte** en de **Hellingfactor** te zien.

Vlakken met een andere helling: selecteer het vlak en typ de eigen **Helling** in het paneel ervan. Laat leeg om die van het onderdeel te gebruiken. De 3D-controleweergave, de samenstellingen (`A` is het hellende oppervlak), de kosten en de export gebruiken allemaal het hellende oppervlak. Aftrekkingen op een hellend vlak, zoals dakramen, worden met dezelfde helling afgetrokken.

De omtrek (`P`) blijft de plan-omtrek. Meet goten, schuine randen, walmen en dakdalen als lengten (hieronder).

## Schuine randen, walmen en dakdalen

1. Maak een lineair onderdeel, zoals "Schuine rand" of "Walmen".
2. Zet de **Helling** op **Schuine rand** (een hellende rand, zoals bij een topgevel) of op **Walm of dakdal** (de lijn waar twee vlakken samenkomen), en typ de **Helling** van de dakvlakken.
3. Teken de lengten op het plan met {{ui:Lineair}}.

Een schuine rand telt zijn plan-lengte maal de hellingfactor. Een walm of dakdal loopt onder 45° over het plan tussen twee vlakken met dezelfde helling, dus de werkelijke lengte is de plan-lengte maal √(1 + (stijging ÷ 12)² ÷ 2): 1.061 bij 6:12, 1.225 bij 12:12.

Eén lengte kan beide combineren. Selecteer hem: elk segment in zijn paneel heeft een hellinglijst — **Van onderdeel** (de instelling van het onderdeel), **Horizontaal**, **Schuine rand** of **Walm of dakdal** — en zijn lengte langs de helling. De eigen **Helling** van een lengte in het paneel vervangt die van het onderdeel voor alle segmenten. Het paneel toont ook de **Plan-lengte**, en de labels op het blad tonen de lengten langs de helling.

Aftrekken werkt nog steeds: een afgetrokken segment telt niets, hellend of niet.

:::note
Walmen en dakdalen gaan ervan uit dat beide vlakken dezelfde helling hebben. Voor vlakken met verschillende hellingen meet u de walm op zijn werkelijke lengte elders, of tekent u hem als schuine rand met een gelijkwaardige helling.
:::
