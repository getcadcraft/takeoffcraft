---
title: Athugaðu birgðir birgja og afhendingartíma
summary: Bættu við lagerlista birgis (CSV eða töflureikni) og TakeoffCraft athugar það sem magntakan þarfnast, að meðtöldum afgangi, á móti honum: nóg á lager og hversu löng biðin er. Skortur og langar biðir birtast í vandamálaspjaldinu.
keywords: birgir, birgðir, á lager, afhendingartími, framboð, skortur, bakpöntun, pöntunarlisti, csv, sku, söluaðili, efni, framboð, vandamál
from: f11160fb
---

{{ui:Birgðir}} á tækjastikunni (vörubíllinn) athugar það sem magntakan þarfnast á móti lagerlista birgis. Línur birgisins sem skipta máli eru geymdar í skrá magntökunnar sjálfrar. Ekkert er sent neitt og enginn er spurður hjá birgi: þú kemur með skrána.

## Skráin

CSV-skrá með hausröð. Hún þarf dálk fyrir heiti eða SKU og dálk fyrir lager eða afhendingartíma. Eftirfarandi hausar eru þekktir (í hvaða röð sem er, án tillits til há- og lágstafa): Item, Name, Description eða Product; SKU, Part eða Item #; In stock, On hand, Available eða Quantity; Lead time eða Delivery days; Unit eða UOM; Price eða Cost; Supplier eða Vendor.

- Lager getur verið tala (1,200), „In stock“ eða „Out of stock“.
- Afhendingartími getur verið „5 days“, „2 weeks“, „2-3 weeks“ (lengri talan er notuð), „3 months“, „same day“ eða „backorder“. Venjuleg tala er í einingu haussins (dagar, nema hausinn segi weeks eða months).
- Excel-skrár eru ekki lesnar: vistaðu blaðið sem CSV fyrst.

## Athugaðu magntökuna

1. Veldu {{ui:Birgðir}}, síðan {{ui:Bæta við skrá birgis…}} og veldu CSV-skrána. Þú getur bætt við fleiri en einni: allt að fimm skrám, 2.000 línum alls sem haldið er, þeim sem passa við liði þína fyrst.
2. Sérhver liður, annað skilyrði og samsetningarhluti með magni er paraður við línu eftir heiti, eða eftir SKU í heitinu. Líkt heiti (annað innan í hinu) er notað þegar ekkert nákvæmt heiti er til, og það er tilgreint.
3. Undir {{ui:Það sem magntakan þarfnast}} koma þeir sem vantar fyrst: „Vantar 120 EA“, „Afhendingartími 21 dagar“, „Í bakpöntun“, „Eining er önnur“, „Engin lagertala“ eða „Á lager“. Þörfin inniheldur afgang. Eining birgis sem er ekki sama og í áætluninni (tonn á móti feti) er tilkynnt og aldrei borin saman. Hver lína hefur {{ui:Velja liðinn}}, sem fer með þig á liðinn.
4. Stilltu {{ui:Lengsti biðtími sem þú vilt (dagar)}} (sjálfgefið 14). Liður sem er ekki á lager og bíður lengur en það er merktur, og samantektin nefnir lengstu biðina sem skiptir máli.
5. {{ui:Pöntunarlisti (CSV)}} sækir vanta liði með vöntunarmagninu, birgi og afhendingartíma. {{ui:Sleppa}} tekur þörf út úr athuguninni (það er skref sem hægt er að afturkalla).

## Töflureiknaskrár og verðasafnið

Lagerlisti birgis getur líka verið Excel-vinnubók (.xlsx) auk CSV: fyrsta blaðið er lesið, með sömu dálkaheitum. Formúlur eru aldrei keyrðar; gildið sem skráin geymir er það sem er lesið.

Þegar skrá með verðum hefur verið bætt við setur {{ui:Verð í safnið}} í glugganum efnisverð hverrar færslu í [Safninu](topic:price-library) sem skráin verðleggur: sama heiti og sama eining (eða engin eining gefin upp). Vinna, afgangur, hæð og samsetningar haldast óbreytt, og athugasemd færslunnar segir hvaða skrá verðið kom úr. Færsla í metrum er ekki verðlögð úr lista í fetum, og færsla án samsvarandi heitis er látin í friði; stöðulínan segir hversu margar voru sleppt vegna einingarinnar. Endurverðleggðu úr safninu til að færa nýju verðin inn í þessa magntöku.

## Í vandamálaspjaldinu

Skortur er viðvörun og löng bið er athugasemd, í sameiginlega vandamálaspjaldinu („Birgðir birgja“), þannig að þær sitja með allri annarri athugun. Þú getur samþykkt eina með ástæðu og samþykkið er vistað í magntökunni.

## Með aðstoðarmanninum þínum

Ef þú leyfir aðstoðarmenn í Stillingum geta þeir lesið athugunina (supply_check). Að bæta við skrá birgis er þitt verk.

## Gott að vita

Lagertölur eru aðeins jafn nýjar og skráin sem þú bætir við. Bættu skránni við aftur til að endurnýja hana: skrá með sama heiti kemur í stað hinnar eldri.
