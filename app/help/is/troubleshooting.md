---
title: Bilanaleit
summary: Einkenni, orsakir og lausnir á skilaboðum og óvæntum atvikum sem þú gætir rekist á í TakeoffCraft, tilvitnuð eins og forritið birtir þau.
keywords: vandamál, villur, virkar ekki, lagfæring, hjálp, hafnað, mælir ekki, enginn mælikvarði, vantar merkingar, útflutningur mistókst, án nettengingar, snerting
from: cd319c9b
---

TakeoffCraft útskýrir flestar synjanir í stöðustikunni neðst í glugganum. Finndu skilaboðin hér fyrir neðan.

## Opna skrár

| Skilaboð eða einkenni | Orsök | Lausn |
|---|---|---|
| PDF-lesarinn gat ekki hlaðist. Endurhladdu síðuna til að reyna aftur. | PDF-lesari forritsins hlaðst ekki, venjulega vegna þess að þú ert án nettengingar og forritið var aldrei vistað til notkunar án nettengingar. | Tengstu aftur og endurhladdu. Veldu síðan {{ui:Vista til notkunar án nettengingar}} og bíddu eftir {{ui:Tilbúið án nettengingar}}; sjá [Notkun án nettengingar](common:offline). |
| (name) er varið með lykilorði. Opnaðu óvarið afrit. | PDF-skjalið þarf lykilorð til að opna það. | Biddu um óvarið afrit, eða fjarlægðu lykilorðið í PDF-forriti sem þú treystir. |
| (name) var ekki hægt að lesa sem PDF (…) | Skráin er skemmd, eða er ekki í raun PDF. | Sæktu hana aftur, eða vistaðu hana aftur úr forritinu sem bjó hana til. |
| (name) er þegar opið. | Sama PDF (sama efni) er opið. | Ekkert að gera. |
| TakeoffCraft opnar PDF-skjöl og .takeoff.json-verkefni. Sleppt: … | Öðrum skráartegundum var sleppt. | Breyttu teikningum í PDF fyrst. |
| Ekkert gerist þegar ég slepp skrám | Skrárnar voru slepptar utan vafragluggans, eða vafrinn opnaði PDF-skjalið í nýjum flipa. | Slepptu þeim á TakeoffCraft-síðuna sjálfa; rammin „Slepptu PDF-skjölum eða .takeoff.json“ sýnir hvenær það virkar. |
| Það tekur tíma að opna stórt sett | Sérhvert PDF er lesið í heild til að búa til fingrafar af því. | Bíddu þar til skilaboðin „Verið er að opna (name)…“ hverfa. Smámyndir fyllast inn þegar þú flettir. |

## Mæling

| Skilaboð eða einkenni | Orsök | Lausn |
|---|---|---|
| Opnaðu PDF fyrst. | Ekkert blað er opið. | Opnaðu PDF. |
| Þetta blað hefur engan mælikvarða enn, þannig að ekki er hægt að mæla það. Veldu forstilltan mælikvarða eða kvarðaðu fyrst (talningar virka án hans). | Verkfærin Línuleg, Flatarmál, Hringur og Úrskurður þurfa mælikvarða. | [Stilltu mælikvarðann](topic:set-the-scale). |
| Búðu fyrst til línulegan lið (gefðu honum heiti undir {{ui:Liðir}}), og smelltu síðan á blaðið. | Enginn liður af þeirri gerð er til. | Fylltu út {{ui:Nýr liður}}-eyðublaðið sem opnaðist og veldu {{ui:Bæta við}}. |
| Veldu lið til að magntaka fyrst (Liðir-spjaldið). | Núverandi liður var eytt. | Smelltu á lið undir {{ui:Liðir}}. |
| Runa þarf að minnsta kosti tvo punkta. | Þú kláraðir eftir einn smell. | Smelltu á að minnsta kosti tvo punkta. |
| Flatarmál þarf að minnsta kosti þrjá punkta. | Of fá horn. | Smelltu á að minnsta kosti þrjú horn. |
| Útlínan sker sig sjálf, þannig að flatarmálið yrði rangt. Teiknaðu hana aftur án þess að skera. | Átta-laga form. | Teiknaðu það sem tvö flatarmál, eða farðu hringinn um jaðarinn í röð. |
| Þessir punktar afmarka ekkert flatarmál. | Allir punktarnir eru á einni línu. | Smelltu á horn sem afmarka svæði. |
| Veldu fyrst flatarmálsmerki (Velja-verkfærið), veldu síðan Úrskurður og teiknaðu gatið inni í því. | {{ui:Úrskurður}} þarf valið flatarmál. | Ýttu á {{key:V}}, smelltu á flatarmálið, og síðan á {{key:X}}. |
| Úrskurður verður að liggja alveg inni í flatarmálinu. | Gatið sker útlínuna eða fer út fyrir hana. | Teiknaðu gatið inni í flatarmálinu. |
| Úrskurðir geta ekki skarast. | Tvö göt skarast. | Teiknaðu eitt gat utan um bæði, eða haltu þeim í sundur. |
| … Punkturinn var færður til baka. | Dregið horn myndi láta útlínuna skera sig sjálfa, eða ýta gati út fyrir hana. | Dragðu á stað sem heldur forminu gildu. |
| Smelltu á punkt á jaðri hringsins, fjarri miðju hans. | Annar smellurinn var of nálægt miðjunni. | Smelltu lengra út. |
| Smellir hliðra blaðinu í stað þess að bæta við punktum | Bendillinn færðist meira en nokkra díla meðan hnappurinn var niðri; það telst dráttur. | Smelltu án þess að hreyfa, sérstaklega á snertiflöt. |
| Shift smellir ekki | Þú ert að setja punkt á boga, eða teikna hring. | 45° smellingin gildir aðeins um bein strik. |
| Punktar hoppa á línu í nágrenninu | Smellt er á línur teikningarinnar er kveikt. | Auktu aðdráttinn til að smella á milli lína, eða ýttu á {{key:F3}} til að slökkva á smellingu. |
| Ekkert smellimerki birtist | Smelling er slökkt, blaðið er skönnun, eða verkfærið smellir ekki (Telja, Sjálftalning, líming). | Ýttu á {{key:F3}}; á skönnun eru engar línur sem hægt er að smella á. |
| Lengdin er röng | Mælikvarðinn er rangur (oft PDF sem hefur verið stærðarbreytt með forstillingu). | Notaðu {{ui:Athuga}} á þekkta vídd, og síðan {{ui:Kvarða}}. |

## Mælikvarði

| Skilaboð eða einkenni | Orsök | Lausn |
|---|---|---|
| Veldu tvo punkta lengra í sundur. | Kvörðunarpunktarnir liggja nánast hver ofan á öðrum. | Kvarðaðu á lengri vídd. |
| Skilaboð í kvörðunarglugganum, til dæmis „Ekki tókst að lesa þessa fjarlægð“ | Fjarlægðin er á formi sem TakeoffCraft getur ekki lesið. | Sjá [Innslátt lengdar, einingarverðs og prósenta](topic:entry-formats). |
| Þetta blað hefur engan mælikvarða enn, þannig að ekkert er að athuga. Kvarðaðu það, eða veldu forstillingu. | {{ui:Athuga}} á blaði án mælikvarða. | Stilltu mælikvarða fyrst. |
| Listinn {{ui:Forstilling}} er grár | Ekkert blað er opið. | Opnaðu PDF. |

## Magn og formúlur

| Skilaboð eða einkenni | Orsök | Lausn |
|---|---|---|
| Ófullgert: … (ekki í samtölunum) | Villa í formúlu, eða markeringar á blöðum án mælikvarða. | Sjá [Lesa magntölur og áætlunina](topic:read-quantities#the-incomplete-warning). |
| +(n) án mælikvarða við hlið liðar | Sumar markeringar hans eru á blöðum án mælikvarða. | Gefðu þessum blöðum mælikvarða. |
| Villa í formúlu: … | Ekki er hægt að reikna formúluna út. | Sjá [Formúlumál](topic:formulas#errors). |
| Þessi liður hefur markeringar, þannig að ekki er hægt að breyta gerð hans. | Gerðin er læst þegar markeringar eru komnar. | Búðu til nýjan lið af hinni gerðinni og teiknaðu markeringarnar aftur með honum. |
| Liður þarf heiti. | Heitareiturinn var tæmdur. | Skrifaðu inn heiti. |
| Skrifaðu inn upphæð eins og 12.50. / Skrifaðu inn prósentu eins og 10 eða 7.5. | Ekki tókst að lesa verð eða afgang. | Sjá [Innslátt lengdar, einingarverðs og prósenta](topic:entry-formats). |
| Samtala virðist tvöfölduð | Liðurinn hefur sín eigin verð og hluta sem bera sama kostnað. | Stilltu eigin verð liðarins á 0 þegar hlutar hans bera kostnaðinn. |
| Markeringar þessa liðar eru á PDF-skjölum sem eru ekki opin. | Þú smelltir á lið sem markeringarnar eru allar á PDF-skjölum sem þú hefur ekki opnað. | Opnaðu þessi PDF-skjöl; heiti þeirra eru skráð undir {{ui:Blöð}}. |

## Sjálftalning

| Skilaboð eða einkenni | Orsök | Lausn |
|---|---|---|
| Þessi kassi er of lítill. Teiknaðu hann utan um allt táknið. | Kassinn er mjög lítill. | Auktu aðdráttinn og rammaðu inn allt táknið. |
| Þessi kassi er næstum tómur. Teiknaðu hann utan um tákn. | Kassinn inniheldur aðeins pappír. | Rammaðu táknið sjálft inn. |
| Engar samsvaranir. Lækkaðu {{ui:Samsvörun}}-rennuna, eða rammaðu táknið þéttar inn. | Ekkert fékk nægilega hátt skor. | Rammaðu táknið þétt inn, eða dragðu {{ui:Samsvörun}}-rennuna neðar. |
| Of margar samsvaranir, þar á meðal röng tákn | Svipuð tákn fá skor nálægt hinu rétta. | Hækkaðu {{ui:Samsvörun}}-rennuna og smelltu á röngu kassana til að hafna þeim. |
| Samsvaranir vantar á öðrum blöðum | Þau blöð teikna táknið í annarri stærð, eða í horni sem er ekki 90° skref. | Leitaðu á þeim blöðum með kassa teiknuðum þar, eða teldu handvirkt. |
| (n) blöð voru of stór til að leita í á þessari stærð táknsins. | Blaðið yrði of stórt í vinnustærðinni. | Rammaðu stærra tákn inn, eða teldu það blað handvirkt. |
| Leitin mistókst: … | Leitin í bakgrunni stöðvaðist. | Reyndu aftur; endurhladdu síðuna ef það endurtekur sig (vistaðu fyrst). Án nettengingar virkar hún aðeins þegar forritastikan sýnir {{ui:Tilbúið án nettengingar}}. |
| Dráttur teiknar kassa í stað þess að hliðra | Þannig virkar {{ui:Sjálftalning}}. | Haltu inni {{key:Space}} og dragðu, eða dragðu með miðhnappinum. |

## Vistun og útflutningur

| Skilaboð eða einkenni | Orsök | Lausn |
|---|---|---|
| Ekkert til að flytja út enn: búðu til lið og magntaktu hann. | Engir liðir eru til. | Búðu fyrst til lið. |
| Engar markeringar á opnum PDF-skjölum enn. | {{ui:Merkt PDF}} hefur ekkert til að teikna á opnu PDF-skjölin. | Opnaðu PDF-skjölin sem hafa markeringar. |
| Þetta PDF er varið með lykilorði eða dulkóðað, þannig að ekki er hægt að skrifa merkt afrit. … | PDF-skjalið er dulkóðað. | Fluttu út {{ui:XLSX}} í staðinn, eða notaðu ódulkóðað afrit af PDF-skjalinu (það þarf þá sína eigin magntöku, því það er önnur skrá). |
| Ekki tókst að skrifa merkt PDF: … | Oftast: án nettengingar, og forritið var ekki vistað til notkunar án nettengingar, þannig að PDF-ritarinn vantar. | Farðu á netið og veldu {{ui:Merkt PDF}} aftur. Til að forðast það skaltu velja {{ui:Vista til notkunar án nettengingar}} og bíða eftir {{ui:Tilbúið án nettengingar}}. |
| Aðeins eitt merkt PDF var sótt | Vafrinn lokaði á nokkur niðurhal í einu. | Leyfðu mörg niðurhal fyrir þessa síðu og fluttu út aftur. |
| (file) er ekki TakeoffCraft-verkefni (það er ekki gilt JSON). / Þetta er ekki TakeoffCraft-verkefnisskrá. | Röng skrá, eða skemmd skrá. | Veldu `.takeoff.json`-skrána. |
| Þetta verkefni var vistað með nýrri útgáfu af TakeoffCraft. Opnaðu það þar. | Skráin kemur úr nýrri útgáfu. | Opnaðu hana í nýrri útgáfunni. |
| (n) markeringar voru skemmdar og sleppt. | Hluti skráarinnar var skemmdur eða breytt handvirkt. | Restin opnaðist. Teiknaðu týndu markeringarnar aftur, eða opnaðu eldra afrit. |
| Markeringar vantar eftir enduropnun | PDF-skjölin eru ekki opin, eða eitt þeirra hefur breyst. | Sjá [Vista og opna magntöku aftur](topic:save-and-reopen#when-a-pdf-has-changed). |
| Vafrinn spyr „Yfirgefa síðu?“ | Það eru óvistaðar breytingar. | Vertu áfram og vistaðu með {{key:Mod+S}}. |

## Lyklar og mús

| Einkenni | Orsök | Lausn |
|---|---|---|
| Bókstafatakkarnir gera ekkert | Bendillinn er í reit (leit, ritli fyrir liði, töflu). | Smelltu á blaðið, eða ýttu á {{key:Tab}} til að fara úr reitnum. |
| Hjólið stækkar í stað þess að fletta | Hjólið stækkar blaðið alltaf. | Dragðu til að hliðra. |
| Öll síðan varð stærri eða minni | Aðdráttur vafra ({{key:Mod+Plus}} eða {{key:Mod+Minus}}). | Ýttu á {{key:Mod+0}}. Stækkaðu blaðið með hjólinu, eða með {{key:Plus}} og {{key:Minus}} einum og sér. |
| Markering hvarf þegar ég ýtti á Backspace | Backspace eyðir valinni markeringu þegar þú ert ekki að teikna. | {{key:Mod+Z}} skilar henni aftur. |
| Hægrismellur klárar ekki á Mac | Control-smellur kemur sem venjulegur smellur. | Notaðu tveggja fingra smell með aukasmelli kveiktum, eða ýttu á {{key:Enter}}. |

## Snertiskjáir

Á snertiskjá:

- **Banki** setur punkt (eða velur markeringu með {{ui:Velja}}). Einn fingur sem dregur hliðrar.
- **Tveir fingur** kreista til að stækka um punktinn milli þeirra, og hliðra þegar þeir hreyfast saman. Að setja annan fingur niður hættir við það sem sá fyrsti byrjaði, þannig að klípa skilur aldrei eftir sig punkt.
- **Ljúktu** runu eða útlínu með **löngum þrýstingi** (hægrismellinum), **tvíbanka**, eða {{ui:Ljúka}} í stikunni neðst á blaðinu. Sama stika hefur {{ui:Aftan}} (tekur síðasta punktinn til baka) og {{ui:Hætta við}}. Flatarmál lokast einnig með því að banka á fyrsta punktinn.
- Fingur fá stærri snertisvæði: punktar smella, lokast og veljast úr lengri fjarlægð, og hornhandföng eru stærri.

Innsláttur lengda þarf lyklaborð; skjályklaborðið virkar þegar {{ui:Innslátt}}-reiturinn er virkur.

Á spjaldtölvu gera lyklaborð og mús eða snertiflötur magntöku mun auðveldari.

## Notkun án nettengingar

| Hnappur eða einkenni | Orsök | Lausn |
|---|---|---|
| {{ui:Ekki tókst að vista}} | Sum skrár forritsins sóttust ekki við vistun til notkunar án nettengingar. | Athugaðu tenginguna og veldu hnappinn aftur. |
| {{ui:Notkun án nettengingar er ekki í boði}} | Einkagluggar og sumar stýrðar tölvur loka á afrit án nettengingar. | Notaðu venjulegan glugga, eða annan vafra. |
| „Vistar…“ byrjar aldrei | Þú ert án nettengingar; vistun þarf tengingu. | Vistaðu á meðan þú ert á netinu. |
| Forritið er gamalt eftir uppfærslu | Afritið án nettengingar er frá fyrri degi. | Á netinu, veldu {{ui:Tilbúið án nettengingar}}, og síðan {{ui:Vista aftur (sækja nýjustu útgáfu)}}. |
| Þú vilt fá plássið aftur | Afritið án nettengingar er um 6 MB. | Veldu {{ui:Tilbúið án nettengingar}}, og síðan {{ui:Fjarlægja afritið án nettengingar}}. |

Sjá [Notkun án nettengingar](common:offline).

## Enn fastur

Endurhladdu síðuna ef forritið hættir að svara. Magntakan þín tapast við endurhleðslu nema þú hafir vistað hana, þannig að vistaðu fyrst með {{key:Mod+S}} ef þú getur. Fyrir spurningar um vafra sjá [Vafrar og tölvur](common:browsers).
