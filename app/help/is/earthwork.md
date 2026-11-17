---
title: Jarðvinna og hæðarkótar
summary: Merktu hæðarkóta á lóðarblað, sendu þá til CivilCraft fyrir yfirborðið og skurð og fyllingu, og reiknaðu einfalt uppgröftarmagn hér.
keywords: jarðvinna, uppgröftur, skurður, fylling, skurður og fylling, landmótun, hæðarkóti, kótar, landlíkan, yfirborð, þríhyrningun, civilcraft, punktar, pnezd, skurðgröftur
from: a898e508
---

TakeoffCraft mælir það sem er teiknað á blað. Jarðvinna þarf yfirborð lands, þess vegna er hún sameiginleg með CivilCraft, sem býr til yfirborð úr punktum, mótar það og reiknar skurð, fyllingu og flutning.

## Einfaldur uppgröftur hér

Fyrir grunnflöt sem er grafinn niður á eina dýpt nægir flatarmálsliður með **dýpt**: rúmmál er flatarmál × dýpt. Í [verkpakka aðalverktaka](topic:trade-packs) er liður fyrir fjöldauppgröft (rúmmál í jarðlagi, lausu rúmmáli og fjölda vörubíla) og liður fyrir lagnaskurð (uppgröftur, undirlag og fylling í skurð eftir lengd og dýpt).

## Hæðarkótar fyrir CivilCraft

1. Stilltu mælikvarða lóðarblaðsins.
2. Búðu til **Talningu**-lið, til dæmis „Núverandi landhæð“, og smelltu á hvern hæðarkóta á blaðinu.
3. Veldu merki og skrifaðu {{ui:Hæðarkóti}} þess í spjaldinu Valið merki: `102.5`, `102'-6"` eða `31.24 m`. Neikvæðir hæðarkótar og núll eru í lagi.
4. Opnaðu valmyndina {{ui:Flytja út}} og veldu {{ui:Hæðarkótar}}. Þú færð punktaskrá (`.csv`) með Point, Northing, Easting, Elevation og Description, eina línu fyrir hvern merktan punkt á opna blaðinu.
5. Opnaðu þá skrá í CivilCraft (sjá [Flytja inn punkta](app:civilcraft/import-points)). Hún býr til yfirborðið úr punktunum ([Smíða yfirborð](app:civilcraft/build-surface)); þaðan ber hún saman yfirborð og gefur skurð og fyllingu ([Rúmmál](app:civilcraft/volumes)).

Norðurhnit og austurhnit eru eigin hnit blaðsins í fetum, mæld frá horni síðunnar eftir mælikvarða þess: fjarlægðir og rúmmál milli punktanna eru rétt, en þau eru ekki mælingahnit lóðarinnar. Færðu þau yfir á hnit lóðarinnar í CivilCraft þegar þú þarft þess.

:::note
Punktar af mismunandi blöðum deila ekki hnitum, þannig að útflutningurinn tekur aðeins opna blaðið. Hæðarkótar eru vistaðir með magntökunni og fylgja með þegar þeir eru afritaðir og límdir.
:::

## Skurður og fylling úr CivilCraft

Jarðvinna CivilCraft kemur til baka sem tveir liðir sem þú getur verðlagt:

1. Í CivilCraft mótarðu plön og leiðir og velur {{ui:Senda í TakeoffCraft}} undir **Jarðvinna** ([Rúmmál jarðvinnu](app:civilcraft/volumes)). Það vistar magnskrá (`.quantities.json`).
2. Í TakeoffCraft opnarðu hana með {{ui:Opna magntöku}}, eða sleppir henni á forritið. Magntakan þín er áfram opin: skráin bætir við **Earthwork: cut** og **Earthwork: fill** sem [tegundarmagntölum](topic:create-items#typed-quantities-no-drawing) í rúmyörðum (CY) fyrir verkefni í fetum, eða rúmmetrum (m³) fyrir verkefni í metrum. Þetta er eitt skref: {{key:Mod+Z}} tekur það til baka.
3. Endurnefndu þá og stilltu úrgang, einingarverð og samsetningar eins og þú vilt.

Þegar hönnunin breytist sendirðu aftur úr CivilCraft og opnar nýju skrána: sömu tveir liðirnir fá nýju magntölurnar. Heiti þeirra, verð, úrgangur og samsetningar haldast eins og þú stilltir þau. Ef mælieining verkefnisins breyttist segir stöðustikan það: athugaðu verðin. Skrá úr öðru CivilCraft-verkefni bætir við sínum eigin tveimur liðum.

Magntölurnar eru rúmmál í jarðlagi, eins og CivilCraft mældi þau (rúðunetsaðferð): engin rýrnun eða þensla. Bættu því við sem úrgangi, eða með formúlu eins og `Q * 1.25` fyrir laust rúmmál. Liðaritillinn sýnir hvaðan hvor þeirra kemur og hvenær; dálkurinn Athugasemdir í kostnaðaráætluninni segir það líka.

:::note
Magnskráin er venjulegt JSON (`"format": "cadcraft-quantities"`), þannig að handrit eða annað forrit getur líka skrifað hana: heiti forrits, verkefni og liði með lykli, heiti, einingu og magni.
:::
