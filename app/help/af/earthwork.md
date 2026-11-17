---
title: Grondwerk en punthoogtes
summary: Merk punthoogtes op 'n terreinplan, gee dit aan CivilCraft vir die oppervlak en afgrawing en ophoging, en neem eenvoudige uitgravingshoeveelhede hier.
keywords: grondwerk, uitgrawing, afgrawing, ophoging, afgrawing en ophoging, gelykmaking, punthoogte, hoogtes, topo, oppervlak, triangulasie, civilcraft, punte, pnezd, sleuf
from: a898e508
---

TakeoffCraft meet wat op 'n blad geteken is. Grondwerk benodig 'n grondoppervlak, daarom word dit gedeel met CivilCraft, wat oppervlaktes uit punte bou, dit gradeer en afgrawing, ophoging en vervoer bereken.

## Eenvoudige uitgrawing hier

Vir 'n voetspoor wat tot een diepte uitgegrawe word, is 'n oppervlakitem met 'n **diepte** genoeg: die volume is oppervlakte × diepte. Die algemene kontrakteur-[handelspakket](topic:trade-packs) het 'n grootmaat-uitgravingsitem (in-situ-volume, losvolume en vragmotorladings) en 'n nutsleueritem (uitgrawing, bedding en terugvulling volgens lengte en diepte).

## Punthoogtes vir CivilCraft

1. Stel die terreinblad se skaal.
2. Maak 'n **Tel**-item, byvoorbeeld "Bestaande grond", en klik op elke punthoogte op die blad.
3. Kies 'n merk en tik sy {{ui:Hoogte}} in die paneel Gekose merk: `102.5`, `102'-6"` of `31.24 m`. Negatiewe en nul-hoogtes is in orde.
4. Maak die {{ui:Uitvoer}}-kieslys oop en kies {{ui:Punthoogtes}}. Jy kry 'n puntelêer (`.csv`) met Point, Northing, Easting, Elevation en Description, een ry per gemerkte punt van die oop blad.
5. Maak daardie lêer oop in CivilCraft (sien [Invoer punte](app:civilcraft/import-points)). Dit bou die oppervlak uit die punte ([Bou 'n oppervlak](app:civilcraft/build-surface)); van daar vergelyk dit oppervlaktes en gee afgrawing en ophoging ([Volumes](app:civilcraft/volumes)).

Northing en easting is die blad se eie koördinate in voet, gemeet vanaf die bladsy se hoek by sy skaal: afstande en volumes tussen die punte is korrek, maar hulle is nie jou terrein se opmetingskoördinate nie. Skuif hulle na die terrein se koördinate in CivilCraft wanneer jy dit nodig het.

:::note
Punte van verskillende blaaie deel nie koördinate nie, so die uitvoer neem slegs die oop blad. Hoogtes word saam met die hoeveelheidsopname gestoor en met kopieer en plak gedra.
:::

## Afgrawing en ophoging van CivilCraft

CivilCraft se grondwerk kom terug as twee items wat jy kan prys:

1. In CivilCraft, gradeer jou plekke en korridors, en kies {{ui:Stuur na TakeoffCraft}} onder **Grondwerk** ([Grondwerkvolumes](app:civilcraft/volumes)). Dit stoor 'n hoeveelhedelêer (`.quantities.json`).
2. In TakeoffCraft, maak dit oop met {{ui:Maak hoeveelheidsopname oop}}, of laat dit op die program val. Jou hoeveelheidsopname bly oop: die lêer voeg **Grondwerk: afgrawing** en **Grondwerk: ophoging** by as [getikte hoeveelhede](topic:create-items#typed-quantities-no-drawing) in kubieke jard (CY) vir 'n voet-projek, of kubieke meter (m³) vir 'n meter-projek. Dit is een stap: {{key:Mod+Z}} neem dit terug.
3. Hernoem hulle en stel afval, tariewe en samestellings soos jy wil.

Wanneer die ontwerp verander, stuur weer vanaf CivilCraft en maak die nuwe lêer oop: dieselfde twee items kry die nuwe hoeveelhede. Hulle name, tariewe, afval en samestellings bly soos jy dit gestel het. As die projek se eenheid verander het, sê die statusbalk dit: kontroleer die tariewe. 'n Lêer van 'n ander CivilCraft-projek voeg sy eie twee items by.

Die hoeveelhede is in-situ-volumes, soos CivilCraft dit gemeet het (rastermetode): geen krimp of swel nie. Voeg dit as afval by, of met 'n formule soos `Q * 1.25` vir losvolume. Die itemredigeerder wys waar elkeen vandaan kom en wanneer; die raming se opmerkingskolom sê dit ook.

:::note
Die hoeveelhedelêer is gewone JSON (`"format": "cadcraft-quantities"`), so 'n skrip of 'n ander program kan ook een skryf: 'n programnaam, 'n projek, en items met 'n sleutel, 'n naam, 'n eenheid en 'n hoeveelheid.
:::
