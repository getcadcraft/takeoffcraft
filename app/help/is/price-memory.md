---
title: Verðminni úr fyrri verkum
summary: TakeoffCraft man taxtana sem þú notaðir í fyrri magntökum, aðeins á þessari tölvu, svo ný magntaka geti byrjað á því sem þú greiddir síðast. Skoðaðu það, notaðu það, gleymdu því.
keywords: verðminni, verð, muna verð, síðasta verk, fyrri verk, dæmigert verð, miðgildi, taxtar, óverðlagt, endurverðleggja, læra af fyrri magntöku, gleyma, safn
from: 7279f1a1
---

{{ui:Verð}} á tækjastikunni (dollaramerkið) opnar það sem TakeoffCraft man um verðin sem þú notaðir. Það er einfaldur listi: fyrir hvert heiti liðar, taxtarnir úr síðustu verkum þínum. Það er geymt í þessum vafra (í Studio, í eigin vefsýn þess) við hlið verðsafnsins, aldrei inni í magntökuskrá, og ekkert er sent neitt. Það er ekki þjálfað líkan.

## Hvað er munað

Þegar þú vistar magntöku er hver liður sem hefur verð og er notaður (hefur merki, eða magntölu sem er slegin inn og hærri en núll) munaður undir nafni sínu og gerð: efnistaxti, vinnutaxti, sóun og eining. Verk eru teikningaskrárnar sem magntakan er tekin af, svo að vista sömu magntöku aftur kemur í stað eigin verða hennar í stað þess að bæta við öðru verki. Síðustu 12 verk eru geymd fyrir hvert nafn.

Til að byrja með eldri verkin þín, veldu {{ui:Læra af fyrri magntöku…}} og veldu vistaða magntöku (.json). Verðlagðir, notaðir liðir hennar eru munaðir á sama hátt.

Nöfn passa saman þegar orðin þeirra passa, óháð hástöfum eða greinarmerkjum („2x4 Stud, 8 ft“ og „2x4 stud 8 FT“ eru þau sömu). Sömu orð fyrir aðra tegund liðar (línulegan lið og talningarlið) eru ekki sama verðið.

## Notaðu það á nýja magntöku

1. Búðu til liðina í nýju magntökunni.
2. Veldu {{ui:Verð}}. Undir {{ui:Þessi magntaka}} sérðu hvern lið sem hefur munað verð, það sem þú hefur á honum núna, taxta síðasta verks, dæmigerða taxta (miðgildi munaðra verka) og bilið.
3. Veldu {{ui:Nota síðasta}} eða {{ui:Nota dæmigert}} á einum lið, eða {{ui:Verðleggja N óverðlagða liði úr minni}} til að fylla alla liði sem enn hafa ekkert verð út frá síðasta verki.

Hver notkun er eitt skref: {{key:Ctrl+Z}} tekur hana til baka. Liður sem hefur aðeins líkt nafn (annað nafnið inni í hinu) segir það, og hnapparnir nota taxta líka nafnsins. Verð sem er munað á hvert stykki er aldrei sett á lið á fet: glugginn segir að einingarnar séu ólíkar og lætur liðinn vera óbreyttan.

## Sjáðu það, breyttu því, gleymdu því

{{ui:Allt sem er í minni}} listar hvert nafn með taxtum sínum og fjölda verka. Ruslatunnuhnappurinn gleymir einu nafni; {{ui:Hreinsa allt verð}} gleymir þeim öllum. Slökktu á {{ui:Muna verðin mín þegar ég vista magntöku}} til að hætta að muna; það sem er þegar þar er áfram þangað til þú gleymir því. Magntökurnar þínar og verðsafnið eru aldrei snert.

## Með aðstoðarmanninum þínum

Ef þú leyfir aðstoðarmönnum í Stillingum geta þeir lesið það sem er munað fyrir liði magntökunnar (prices_list) og verðlagt liði út frá því (prices_apply, sem getur forskoðað fyrst). Það er sami listinn og glugginn sýnir.
