---
title: Mida ta on sinu koguste arvestustest õppinud
summary: TakeoffCraft hoiab alles Automaatse loenduse abil kinnitatud sümbolid, sinu salvestatud tingimuste komplektid, enim kasutatavad koostud ja mustrid, mida kordad igal lehel, kõik selle koguste arvestuse enda failis. Vaata, kasuta, kustuta.
keywords: õpi, õpitud, õppimine, assistent, meeldejätmine, sümbolid, mallid, sama mis viimane töö, viimane töö, tingimuste komplekt, tingimused, taaskasutus, koostud, enim kasutatud, soovitused, korda igal lehel, iga leht, tiitelplokk, muster, tühjenda kõik, unusta, privaatsus
from: 54d99e99
---

TakeoffCraft muutub kiiremaks, mida rohkem koguste arvestusi sellega teed. See õpib **ainult sinu kinnitatud asjadest**:

- sümbolid, mille oled märkinud [Automaatse loenduse](topic:auto-count) abil ja seejärel lisanud,
- tingimuste komplektid, mille salvestad,
- koostud, mida kasutad (üks kord töö kohta),
- märgiste mustrid, mida kordad igal lehel.

See on lihtne vastavus sinu enda lehtedel, sama otsing, mida Automaatne loendus teeb. See ei ole treenitud mudel. Kõik õpitu on hoitud **selle koguste arvestuse failis** (`.takeoff.json`) ja midagi ei saadeta kuhugi. Et viia see järgmisesse töösse, kasuta [Sama mis viimane töö](topic:what-it-learned#same-as-last-job).

Vali tööriistaribal {{ui:Õpitud}} (lambipirn, {{ui:Automaatne loendus}} kõrval), et näha kõike.

## Sümbolid

Kui märgid sümboli {{ui:Automaatne loendus}} abil ja valid {{ui:Lisa}}, jääb märgitud sümbol alles koos aktsepteeritud vastavustasemega.

- {{ui:Õpitud}} jaotises vali {{ui:Otsi sellelt lehelt}} või {{ui:Otsi igalt lehelt}}. Avaneb tavaline Automaatse loenduse ülevaade: klõpsa kasti, et see välja jätta, liiguta liugurit ja lisa siis. Midagi ei lisata enne, kui sa seda teed.
- Kui avad lehe, millel ei ole veel ühtki õpitud sümbolit, pakub riba ülaosas {{ui:Otsi …}} selle jaoks. {{ui:Mitte praegu}} peidab selle sellel lehel.
- Kui koguste arvestuses ei ole sellenimelist üksust, lisab märgiste lisamine ka üksuse (üks tagasivõtmise samm).
- Sama üksuse sümboli uuesti lisamine loeb selle juba teadaolevaks; teistmoodi välja nägev sümbol jääb teiseks.
- Nagu Automaatne loendus, leiab see sümboli ka täisnurga all ja teise mõõtkavaga lehtedel.

## Tingimuste komplektid

Komplekt hoiab koguste arvestuse tingimusi (üksused koos ühikute, määrade, kao ja koostudega), ilma märgisteta.

1. {{ui:Õpitud}} jaotises vali {{ui:Salvesta selle koguste arvestuse tingimused komplektina…}} ja anna sellele nimi. Sama nimega komplekt asendatakse.
2. Koguste arvestuses, millel komplekt on, lisab {{ui:Lisa}} need tingimused, mida tal veel ei ole. Sama nime ja tüübiga tingimusi ei puututa. See on üks tagasivõtmise samm.

## Sama mis viimane töö

Viimase töö fail hoiab seda, mida see õppis. Uue töö alustamiseks sellest:

1. Ava uued plaanid ja vali {{ui:Õpitud}} › {{ui:Sama mis viimane töö…}}.
2. Vali viimase töö `.takeoff.json`.
3. Märgi, mida tuua: selle tingimused (ainult need, mida selle koguste arvestusel veel ei ole) ja mida see õppis (sümbolid, komplektid, koostud, mustrid). Seejärel {{ui:Too need siia}}.

Selle tingimused salvestatakse ka komplektina, mis on nimetatud selle töö järgi. Selle märgised ja kogused jäävad oma faili. Kogu toiming on üks tagasivõtmise samm.

## Enim kasutatavad koostud

Üksus, millel on koost, loetakse töö kohta kasutatuks üks kord, kui sellel on kogus ja salvestad koguste arvestuse. Töö on plaanifailide komplekt, millelt koguseid võetakse, seega sama koguste arvestuse uuesti salvestamine ei loe topelt. Loend jaotises {{ui:Enim kasutatavad koostud}} paneb enim kasutatavad esimesteks. See jätab välja need, mis selles koguste arvestuses juba on. {{ui:Lisa}} paneb ühe sisse nii, nagu seda viimati kasutasid, kõigi osadega.

## Korda igal lehel

Märgiste puhul, mis on komplekti igal lehel ühesugused, näiteks tiitelploki loendus või tüüpdetail:

1. Vali märgised ühel lehel ([Vali märgised](topic:copy-paste#select-the-marks)).
2. {{ui:Õpitud}} jaotises vali {{ui:Korda valitud märgiseid igal lehel…}}, anna mustrile nimi ja kinnita.

Need lähevad igale teisele avatud lehele **sama suurusega**, samasse kohta, ühe tagasivõtmise sammuna. Pikkused ja pinnad lähevad ainult lehtedele sama mõõtkavaga; loendused lähevad mistahes sellise suurusega lehele. Leht, millel need juba on, jäetakse vahele. Muster jääb alles, nii et hiljem avatud lehed saavad pakkumise riba kaudu või võid kasutada {{ui:Korda igal lehel}} loendis.

## Vaata, kustuta

Kõik õpitu on loetletud jaotises {{ui:Õpitud}}. Prügikast kustutab ühe asja. {{ui:Tühjenda kõik}} kustutab kogu õpitu ja jätab sinu üksused ja märgised puutumata. Mõlemat saab tagasi võtta, kuni koguste arvestuse sulged, ja mõlemad salvestatakse koos koguste arvestusega.

Et ühes koguste arvestuses õppimine lõpetada, tühjenda {{ui:Õpi sellest koguste arvestusest}}. Midagi uut ei õpita ja loetletu jääb alles, kuni selle kustutad.

## Hea teada

- Vanemad TakeoffCrafti versioonid avavad õpitud asjadega faili tavaliselt. Nad ignoreerivad seda osa ja eemaldavad selle, kui fail uuesti salvestatakse.
- Õpitud sümbol on väike pilt sellest, mille märkisid kastiga, ja see hoitakse failis (igaüks mõni kilobait).
- Õpitud sümboleid otsitakse nagu Automaatne loendus, seega kehtivad samad piirangud: [Sümboli automaatne loendamine](topic:auto-count).
