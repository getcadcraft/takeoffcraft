---
title: Innbyggt kolefni og 5D-verðtafla
summary: Kolefni leggur saman innbyggt kolefni magntökunnar út frá magni hvers liðar og opinni stuðlatöflu, og sendir gjaldskrár magntökunnar til BimCraft sem verðtöflu fyrir 5D-kostnað.
keywords: kolefni, innbyggt kolefni, kgco2e, co2, stuðlar, A1-A3, flutningur, úrgangur, 5d, verðtafla, kostnaður, bimcraft, epd
from: f4bff3b8
---

{{ui:Kolefni}} á tækjastikunni leggur saman innbyggt kolefni þess sem þú hefur mælt, og breytir gjaldskránum þínum í verðtöflu sem líkan byggingarinnar getur notað. Þetta er áætlun, ekki úttekt.

## Innbyggt kolefni

Magn hvers liðar, með úrgangi hans, er margfaldað með röð í stuðlatöflunni. Röð er paruð út frá orðunum í heiti liðarins („steypuplata“ finnur röð með lykilorðinu steypa). Taflan er sama opna taflan og BimCraft notar, þannig að skrá sem þú hleður inn hér virkar þar. **Raðirnar sem fylgja forritinu eru upphafsgildi: almennt, óyfirfarið og ekki úr neinum gagnagrunni.** Glugginn segir það við hliðina á tölunum; skiptu þeim út fyrir þína eigin heimild áður en þú treystir tölu.

1. Veldu {{ui:Kolefni}}. Taldir liðir eru skráðir með kílógrömmum af CO2e; heildin er fyrir ofan.
2. Hakaðu við {{ui:A4 flutningur}} eða {{ui:A5 byggingarúrgangur}} til að telja þessi stig líka, fyrir raðirnar sem gefa tölu fyrir þau. Framleiðslustigið er alltaf talið.
3. Til að nota aðra röð fyrir lið, eða enga, notaðu listann á línu hans.
4. {{ui:Stuðlar úr skrá…}} hleður inn stuðlatöflu (JSON eða CSV) úr þinni eigin heimild; raðir hennar koma í stað upphafsraðanna með sama auðkenni. {{ui:Stuðlar (JSON)}} vistar þína.

Stuðull er á metra, fermetra, rúmmetra, lið eða kílógramm. Lína mæld í fetum eða ferfetum er umreiknuð. Kílógrammastuðull þarf rúmmál (rúmyarda eða metra) og eðlismassa raðarinnar. Liður þar sem stuðullinn þarf magn sem hann mælir ekki er skráður undir {{ui:Utan tilboðs}} ásamt ástæðunni, og aldrei giskað. Keyrandi heildin í stöðustikunni sýnir sömu tölu.

Stuðlaraðirnar þínar, valið þitt og stigin sem þú telur eru vistuð í skrá magntökunnar.

## Verðtafla fyrir 5D-kostnað

{{ui:5D verð (JSON)}} og {{ui:5D verð (CSV)}} vista gjaldskrár magntökunnar sem verðtöflu: ein röð fyrir hvern verðlagðan lið, með efnis- og vinnutaxta á einingu og úrgangi hans. Hlaðið henni í kostnaðarrúðu BimCraft (Innbyggt kolefni og 5D-kostnaður) til að verðleggja verkþætti líkansins með sömu töxtum og sköpuðu tilboðið. Liðir mældir í einingu sem taflan hefur ekki, og liðir án taxta, eru skildir eftir.

## Með aðstoðarmanninum þínum

Ef þú leyfir aðstoðarmenn í {{ui:Stillingar}}, geta þeir lesið kolefnið (carbon_check). Að hlaða inn stuðlum er þitt verk.

## Gott að vita

Ekkert er sent neitt. Tölurnar eru jafn góðar og stuðlarnir sem þú hleður inn.
