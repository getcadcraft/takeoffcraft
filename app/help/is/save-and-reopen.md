---
title: Vista magntöku og opna hana aftur
summary: Vistaðu magntökuna sem .takeoff.json verkefnaskrá, opnaðu hana aftur með sömu PDF-skjölum, og hvað gerist þegar PDF-skjal vantar eða hefur breyst.
keywords: magntaka í PDF, innfella, viðhengi, vista, opna, opna aftur, verkefni, takeoff.json, halda áfram, breytt PDF, nýtt PDF, vantar PDF, öryggisafrit, sjálfvirk vistun, endurheimta, hrun
from: bd5080a6
---

Magntaka er vistuð sem lítil verkefnaskrá, `(name).takeoff.json`. Hún geymir liðina þína, samsetningar, einingarverð, mælikvarða hvers blaðs og öll merki. Hún geymir **ekki** PDF-skjölin; hún finnur þau aftur út frá innihaldi þeirra.

## Vista

1. Veldu {{ui:Save takeoff}} í hópnum {{ui:File}}, eða ýttu á {{key:Mod+S}}.
   Vafrinn þinn sækir `(name).takeoff.json`. Stöðustikan segir „Vistuð (name).takeoff.json. Hún opnast aftur ofan á sömu PDF-skjölum (þau eru pöruð eftir innihaldi þeirra).“
2. Færðu skrána í sömu möppu og PDF-skjöl verksins, svo þau haldist saman.

Hver vistun sækir nýja skrá. Vafrinn þinn gæti nefnt þá seinni `(name) (1).takeoff.json`; geymdu þá nýjustu.

Nafnið kemur frá fyrsta PDF-skjalinu sem þú opnaðir í þessari magntöku.

:::note
{{ui:Save takeoff}} er enn eina leiðin til að geyma magntöku sem skrá. Meðan þú vinnur heldur TakeoffCraft líka afriti til endurheimtar í þessum vafra (sjá hér að neðan), og skýjavistun er ekki í boði enn. Ef þú reynir að loka flipanum með óvistuðum breytingum spyr vafrinn hvort þú viljir fara.
:::

## Geymdu magntökuna inni í PDF

{{ui:Export}} › {{ui:PDF with the takeoff inside}} sækir afrit af hverju opnu PDF-skjali, nefnt eins og `Plans (with takeoff).pdf`, sem ber alla magntökuna sem viðhengi: liði, merki, mælikvarða, tilboðssvæði, allt sem `.takeoff.json` geymir. Síðurnar eru óbreyttar, þannig að það lítur út og prentast eins og upprunalega skjalið, og önnur PDF-lesforrit sýna magntökuna meðal viðhengja.

Opnaðu það PDF í TakeoffCraft (hvaða leið sem þú opnar PDF-skjöl) og það spyr **Þetta PDF hefur magntöku inni**: veldu {{ui:Open the takeoff}} til að fá hana til baka, eða {{ui:Just the PDF}} til að opna bara teikninguna. Afritið stendur fyrir PDF-skjalið sem það var gert úr, þannig að `.takeoff.json` sem vistuð er úr hvoru sem er opnast á báðum.

Með mörgum PDF-skjölum ber hvert afrit alla magntökuna; opnaðu þau saman. Ef þú vistar aftur úr afriti kemur magntakan í staðinn inni í því, hún bætist ekki við sem önnur. `.takeoff.json` er samt skráin sem þú átt að geyma: hún er lítil, og það er hún sem sjálfvirk vistun og skjáborðsforritið skrifa.

## Ef flipinn eða vafrinn stöðvast

Nokkrum sekúndum eftir hverja breytingu geymir TakeoffCraft afrit af magntökunni í geymslu þessa vafra, ásamt PDF-skjölunum þegar þau ná 64 MB eða minna. Ekkert er sent inn. Þegar þú vistar magntökuna, byrjar nýja eða opnar annað verkefni hverfur afritið.

Ef flipinn hrynur, vafrinn eða tölvan stöðvast, eða þú ferð með óvistaðar breytingar, spyr TakeoffCraft næst þegar þú opnar forritið **Endurheimta vinnuna þína?** og listar magntökuna eftir nafni. Veldu **Endurheimta** til að fá hana til baka: liðirnir, merkin og mælikvarðarnir koma aftur, og PDF-skjölin opnast aftur ef þau voru geymd. Stöðustikan segir „Endurheimt (name). Hún er ekki vistuð í skrá ennþá: Vista magntöku geymir hana.“ Ef PDF-skjölin voru of stór til að geyma þau, opnaðu þau aftur; merkin birtast á blöðunum. Meira: [Endurheimta vinnuna þína](common:recover).

## Opna aftur

1. Opnaðu TakeoffCraft.
2. Dragðu `.takeoff.json` skrána og PDF-skjölin hennar saman á síðuna. Eða veldu {{ui:Open plans}} fyrir PDF-skjölin og {{ui:Open takeoff}} fyrir verkefnið, í hvorri röð sem er.
   Stöðustikan segir „Opnuð (name): 12 liðir, 340 merki.“ Hvert blað fær mælikvarðann sinn aftur og merkin birtast á blöðunum.

Röð PDF-skjalanna skiptir ekki máli, og heldur ekki skráarheiti þeirra eða möppur. TakeoffCraft þekkir hvert PDF-skjal á fingrafari af innihaldi þess.

Ef þú opnar verkefni meðan núverandi magntaka hefur óvistaðar breytingar spyr TakeoffCraft fyrst: **Hætta við**, **Henda breytingum** eða **Vista magntöku fyrst**. Að opna verkefni kemur í stað núverandi liða og merkja; PDF-skjöl sem eru þegar opin haldast opin.

## Þegar PDF-skjal vantar

Ef þú opnar verkefnið án allra PDF-skjalanna, bætir stöðustikan við „Opnaðu PDF-skjöl þess til að sjá merkin (skráð undir Blöð).“ Undir listanum yfir blöð segir athugasemd:

„Þessi magntaka nær líka yfir PDF-skjöl sem eru ekki opin. Magn þeirra er talið; opnaðu þau til að sjá og breyta merkjum þeirra:“

og á eftir koma skráarheiti og stærðir. Merki þeirra telja samt í öllum summum og útflutningi, með þeim mælikvörðum sem þau voru mæld með. Opnaðu þessi PDF-skjöl til að sjá og breyta merkjunum.

## Þegar PDF-skjal hefur breyst

PDF-skjal sem var endurskoðað, eða bara vistað aftur af öðru forriti, hefur annað innihald, þannig að það er **önnur skrá** fyrir TakeoffCraft, jafnvel með sama nafni. Í athugasemdinni undir listanum yfir blöð segir slík skrá „skrá með þessu nafni er opin, en innihaldið er annað“.

- Merkin haldast tengd eldri útgáfunni. Þau halda áfram að telja, á gömlu staðsetningunum og með gömlum mælikvörðum.
- Endurskoðaða PDF-skjalið opnast sem ný blöð án mælikvarða og án merkja.

Til að færa magntökuna yfir á endurskoðunina skaltu opna bæði PDF-skjölin og nota {{ui:Compare}} á nýja blaðinu: [Bera saman endurskoðað blað og færa magntökuna](topic:compare-revisions).

## Skemmd skrá eða skrá frá öðru forriti

TakeoffCraft athugar hverja verkefnaskrá áður en hún er notuð. Skilaboð sem þú gætir séð:

- „(file) er ekki TakeoffCraft-verkefni (það er ekki gilt JSON).“
- „Þetta er ekki TakeoffCraft-verkefnaskrá.“
- „Þetta verkefni var vistað í nýrri útgáfu af TakeoffCraft. Opnaðu það þar.“
- „3 merki skemmdust og voru skilin eftir.“ (restin opnast)

## Afturköllunarsaga

Afturköllunarsagan byrjar á nýju þegar þú opnar verkefni. Vistun hreinsar hana ekki.
