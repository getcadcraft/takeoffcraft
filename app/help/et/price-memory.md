---
title: "Hinnamälu varasematest töödest"
summary: "TakeoffCraft mäletab määrasid, mida kasutasid varasematel koguste arvestustel, ainult selles arvutis, et uus koguste arvestus saaks alata sellest, mida viimati maksid. Vaata, kasuta, unusta."
keywords: hinnamälu, hinnad, jäta hinnad meelde, viimane töö, varasemad tööd, tüüpiline hind, mediaan, määrad, hinnastamata, hinnasta uuesti, õpi varasemast koguste arvestusest, unusta, teek
from: 7279f1a1
---

{{ui:Hinnad}} tööriistaribal (dollarimärk) avab selle, mida TakeoffCraft mäletab sinu kasutatud hindade kohta. See on lihtne loend: iga kirje nime kohta sinu viimaste tööde määrad. See hoitakse selles brauseris (Studios selle enda veebivaates) hinnateegi kõrval, mitte kunagi koguste arvestuse failis, ega saadeta kuhugi. See ei ole treenitud mudel.

## Mida mäletatakse

Kui salvestad koguste arvestuse, mäletatakse iga kirjet, millel on hind ja mida kasutatakse (sellel on märk või sisestatud kogus suurem kui null), selle nime ja tüübi järgi: materjali määr, tööjõu määr, kadu ja ühik. Töö on need plaanifailid, millest see võeti, nii et sama koguste arvestuse uuesti salvestamine asendab tema enda hinnad, selle asemel et lisada veel üks töö. Iga nime kohta hoitakse viimased 12 tööd.

Vanemate tööde alustamiseks vali {{ui:Õpi varasemast koguste arvestusest…}} ja vali salvestatud koguste arvestus (.json). Selle hinnastatud ja kasutatud kirjed mäletatakse samamoodi.

Nimed klapivad, kui nende sõnad klapivad, sõltumata suurtähtedest või kirjavahemärkidest („2x4 Stud, 8 ft“ ja „2x4 stud 8 FT“ on samad). Sama sõnad teist liiki kirje puhul (lineaarne kirje ja loenduskirje) ei ole sama hind.

## Kasutamine uues koguste arvestuses

1. Tee uue koguste arvestuse kirjed.
2. Vali {{ui:Hinnad}}. Rubriigi {{ui:See koguste arvestus}} all näed iga kirjet, millel on mäletatud hind: mis sul sellel praegu on, viimase töö määrad, tüüpilised määrad (mäletatud tööde keskmine) ja vahemiku.
3. Vali ühel kirjel {{ui:Kasuta viimast}} või {{ui:Kasuta tüüpilist}}, või {{ui:Hinnasta N hinnastamata kirjet meeldejäetust}}, et täita iga kirje, millel pole veel hinda, viimase töö hindadega.

Iga kasutamine on üks samm: {{key:Ctrl+Z}} võtab selle tagasi. Kirje, millel on ainult sarnane nimi (üks nimi on teise sees), ütleb seda ja nupud kasutavad sarnase nime määrasid. Hinda, mida mäletatakse tüki kohta, ei panda kunagi jooksumeetri kirjele: dialoog ütleb, et ühikud erinevad, ja jätab selle rahule.

## Vaata, muuda, unusta

{{ui:Kõik meeldejäetud}} loetleb iga nime koos määrade ja tööde arvuga. Prügikasti nupp unustab ühe nime; {{ui:Tühjenda kõik hinnad}} unustab kõik. Lülita välja {{ui:Jäta mu hinnad meelde, kui salvestan koguste arvestuse}}, et lõpetada meeldejätmine; see, mis on juba olemas, jääb alles, kuni selle unustad. Sinu koguste arvestusi ja hinnateeki ei puudutata kunagi.

## Sinu assistendiga

Kui lubad Sätetes assistente, võivad nad lugeda, mida koguste arvestuse kirjete kohta on meeles (prices_list), ja hinnastada kirjeid sellest (prices_apply, mis võib kõigepealt eelvaadata). See on sama loend, mis dialoogis.
