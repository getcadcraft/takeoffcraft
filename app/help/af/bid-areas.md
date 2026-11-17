---
title: Tenderareas
summary: Merk merke per gebou, vloer of fase, meet op in een area op 'n slag, en lees hoeveelhede en koste vir elke area.
keywords: voeg alternatief by, trek alternatief af, basistender, alternatiewe, tenderarea, area, gebou, vloer, vlak, fase, sone, alternatief, uiteensetting, verdeel, tipiese vloer, subtotaal, volgens area
from: 64f3d41c
---

'n Tenderarea is 'n deel van die werk wat jy op sy eie prys: 'n gebou, 'n vloer, 'n fase, 'n vleuel. Elke merk kan in een tenderarea wees. Die hoeveelhede en die raming kan dan vir elke area gelees word, met 'n subtotaal vir elk, terwyl die projektotaal die som van alles bly.

## Maak 'n tenderarea

1. Bo-aan die {{ui:Items}}-paneel, maak die {{ui:Tenderarea}}-lys oop.
2. Kies **Nuwe tenderarea…**, tik 'n naam soos "Gebou A" of "Vlak 2", en kies **Maak dit**.
   Die nuwe area word die huidige een. Die statusbalk sê "Nuwe merke gaan in (naam). Merke in ander tenderareas word verdof."

## Neem op in 'n area

Terwyl 'n tenderarea in die lys gekies is, gaan elke nuwe merk daarin: lope, areas, sirkels, tellings, die merke wat {{ui:Outo-tel}} byvoeg, en wat jy plak. Merke in ander tenderareas, en merke in geen, word op die blad verdof sodat jy kan sien wat waar hoort.

Kies **Geen tenderarea** in die lys om sonder een op te meet; niks word dan verdof nie.

:::tip
Tipiese vloere: meet Vlak 2 op, kies sy merke ({{key:Mod+A}} op die blad), kopieer hulle, kies Vlak 3 in die lys en plak. Die kopieë gaan in Vlak 3. Wanneer die vloere dieselfde is en jy hulle nie apart nodig het nie, tel 'n [tipiese groep](topic:typical-groups) eerder een vloer verskeie kere.
:::

## Skuif merke na 'n ander area

Kies een merk of verskeie ({{key:Shift}} + klik, of {{key:Mod+A}}). Onder **Gekose merk** (of **Gekose merke**), kies die area in die {{ui:Tenderarea}}-veld. Die statusbalk sê "3 merke na Vlak 2 geskuif." Dit is een ontdoenstap.

## Hernoem, herorden of skrap

Kies **Bestuur tenderareas…** in die lys. Tik oor 'n naam om dit te hernoem, gebruik die pyltjies om die volgorde te verander (die tabelle en die werkboek volg dit), of skrap een met die asblik. As jy 'n tenderarea skrap, bly sy merke behou: hulle is dan in geen tenderarea nie. {{key:Mod+Z}} ontdoen elke verandering.

## Lees die hoeveelhede volgens area

In die {{ui:Hoeveelhede}}-tabel, kies {{ui:Volgens area}} (dit wys sodra die hoeveelheidsopname 'n tenderarea het). Elke area lys die items wat dit hou, met hul hoeveelheid, eenheid en totaal, dan 'n subtotaalry. Merke in geen tenderarea kom laaste, as **Geen tenderarea**. Klik op 'n itemry om die item uit te lig en daardie area die huidige een te maak.

Samestellings word vir elke area uit daardie area se eie totale uitgewerk. 'n Formule wat opwaarts afrond, soos `ceil(L / 4)`, kan dan 'n bietjie meer gee in die areas saam as vir die hele werk, soos wat dit op 'n tender wat area vir area geprys is, sou doen.

## Alternatiewe: basistender plus byvoegings en aftrekkings

'n Tenderarea kan 'n **alternatief** wees: werk wat die eienaar by die tender mag voeg, of daaruit neem. In **Bestuur tenderareas…** het elke area 'n lys langs sy naam:

| Keuse | Wat dit doen |
|---|---|
| {{ui:Basistender}} | In die tender, soos gewoonlik. |
| {{ui:Voeg alternatief by}} | Op sy eie geprys en **uitgelaat uit die basistender**: 'n tapyt-opgradering, 'n ekstra afdak. |
| {{ui:Trek alternatief af}} | In die basistender, en aangebied as 'n aftrekking: "skrap die afdak". |

Meet 'n alternatief se werk op in sy tenderarea soos enige ander area. Sodra die hoeveelheidsopname 'n alternatief het:

- Die kop van die {{ui:Hoeveelhede}}-tabel sê **Basistender** in plaas van {{ui:Projektotaal}}: die hele hoeveelheidsopname sonder die byvoegingsalternatiewe.
- {{ui:Volgens area}} eindig met die basistender en een ry per alternatief: **+$300.00** vir 'n byvoeging, **−$1,050.00** vir 'n aftrekking.
- 'n Alternatief prys net die items wat merke daarin het, met hul samestellings, sodat 'n samestellingdeel van 'n ander item nie insluip nie.

In die uitvoere eindig die CSV met die basistender en die alternatiewe, en die werkboek kry 'n **Alternatiewe**-werkblad: die basistender, elke alternatief se items en sy verandering, en die basistender met elke byvoegingsalternatief ingesluit.

## In die uitvoer

{{ui:XLSX}} voeg 'n **Volgens tenderarea**-werkblad by: elke area se items en komponente met hoeveelheid, hoeveelheid met afval, materiaal, arbeid en totaal, 'n subtotaal per area (met 'n `SUM`-formule) en **Alle tenderareas** aan die einde. Die **Merke**-werkblad kry 'n **Tenderarea**-kolom. 'n Hoeveelheidsopname sonder tenderareas voer uit soos voorheen. Sien [Uitvoerkolomme](topic:export-columns).

Die tenderareas word saam met die merke in die projeklêer gestoor.
