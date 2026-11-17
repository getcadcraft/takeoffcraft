---
title: Ajánlati csomagok és ajánlat-kiegyenlítés
summary: Bontsa a költségvetést szakágak szerinti csomagokra, küldje el az egyes csomagok terjedelmét alvállalkozóknak, hasonlítsa össze a visszaérkező ajánlatokat ugyanarra a terjedelemre, és a kiválasztott ajánlatot használja a csomag árának.
keywords: ajánlat-kiegyenlítés, kiegyenlítés, ajánlati csomag, alvállalkozó, alvállalkozói ajánlat, terjedelem, pótlék, szakág, CSI-főcsoport, ajánlatok összehasonlítása, legalacsonyabb ajánlat, ajánlattábla, ajánlattevő, odaítélés, kiválasztott ajánlat, ajánlat használata, alvállalkozói ár
from: 856b3088
---

Egy általános kivitelező minden szakág terjedelmét alvállalkozóknak küldi, és összehasonlítja a visszaérkező ajánlatokat. A TakeoffCraft mindkettőt a mérésből végzi: nyissa meg az {{ui:Exportálás}} › {{ui:Ajánlati csomagok és kiegyenlítés…}} menüpontot.

## Csomagok

Minden CSI-főcsoporthoz, amelyet a tételei használnak, egy csomag tartozik (a tétel {{ui:CSI-szám}} első két számjegye, lásd: [Mérési tételek létrehozása](topic:create-items)). A szám nélküli tételek saját csomagot alkotnak. Minden csomag megmutatja a tételeit, hogy hány lapon vannak a jelei, és a saját költségét (anyag és munkadíj a felárak előtt, az alapajánlatból).

Válassza a {{ui:Terjedelem CSV}} lehetőséget, hogy letöltse, mit küldjön az alvállalkozónak: minden tétel a CSI-számával, mennyiségével, egységével és a lapokkal, amelyeken van. Árat nem tartalmaz. Anyagbeszállítók esetén a munkafüzet árajánlat-kérése tartalmazza az alkatrészlistát (lásd: [A költségvetés exportálása](topic:export-estimate)).

## Ajánlatok rögzítése

1. A csomag alatti üres sorba írja be az ajánlattevő nevét és az ajánlat összegét, majd válassza az {{ui:Az ajánlat hozzáadása}} lehetőséget.
2. Ha egy ajánlat a terjedelem egy részét kihagyja, nyissa meg a {{ui:Kihagyva}} listáját, és jelölje be azokat a tételeket.
3. Név vagy összeg javításához írja felül a táblázatban; a × gomb eltávolítja az ajánlatot.

Minden változtatás egy lépés, amelyet a {{key:Mod+Z}} visszavon, az ajánlatok pedig a méréssel együtt mentődnek.

## Az ajánlatok kiegyenlítése

Az ajánlatok ritkán fedik ugyanazt a terjedelmet. A kiegyenlítés minden kihagyott tételt **pótlékkal** tölt ki, a saját költségünkön, így minden ajánlat a teljes csomagon hasonlítható össze:

**Kiegyenlített = az ajánlat + a pótlékok**

A legalacsonyabb kiegyenlített ajánlat a **Legalacsonyabb** jelölést kapja; döntetlen esetén az, amelyet előbb rögzítettek. A **Saját költséghez képest** a kiegyenlített ajánlat mínusz a csomag saját költsége: negatív érték azt jelenti, hogy alatta van. Az a legalacsonyabbnak tűnő ajánlat a hiányzó terjedelem beszámítása után veszíthet.

A munkafüzet egy **Ajánlatkiegyenlítés** munkalapot kap, amelyen minden ajánlatokkal rendelkező csomag szerepel: a saját becslés, minden ajánlat, a pótlékai, a kiegyenlített összeg és az eltérés, élő képletekkel, valamint az, hogy az egyes ajánlatok mit hagytak ki.

## Ajánlat használata a csomag áraként

Válassza az ajánlaton a {{ui:Használat}} lehetőséget, és az a költségvetésben a teljes csomag árává válik: a csomag saját árazása (a tételek, a kiegészítő feltételeik és az összetett tételrészek) kikerül a munka összegéből, a tételek mennyiségként maradnak, saját egységárukkal tájékoztató jelleggel, és egy sor, a **Kiválasztott ajánlat**, viseli az ajánlat összegét. Az ajánlat által kihagyott tételek a saját költségükön maradnak, ezt számolta a kiegyenlítés pótlékként. Válasszon másik ajánlatot, vagy ugyanazt újra, hogy visszavonja; mindegyik egy lépés, amelyet a {{key:Mod+Z}} visszavon.

Az ajánlati összesítőben az alvállalkozói ajánlatok egy sort jelentenek a költségen belül: a rezsi, a nyereség és a kezesség ugyanúgy hozzáadódik, mint bármely más költséghez; az áfa (csak az anyagra) és a munkadíj-terhek (a munkadíjra) nem. A munkafüzet Becslés munkalapja a kiválasztott ajánlatot saját sorában tartalmazza, a felárak blokkja pedig élő képletekkel hozzáadja. Az anyaglista nem tartalmazza az odaítélt csomag anyagát, mert azt az alvállalkozó biztosítja.

Az ajánlati területen belüli csomag árát nem árazzuk újra: a változatok és az ajánlati területek részösszegei továbbra is a saját áraikat használják.

## E-mailben visszaérkező ajánlatok

Nem kell kézzel beírni az ajánlatokat. A csomag alatti {{ui:Küldés ajánlatkérésre…}} e-mailben minden alvállalkozónak elküld egy hivatkozást egy oldalra, ahol minden sorhoz árat írnak be; az {{ui:Árak lekérése}} a beküldött árakat ebbe a táblázatba hozza. Lásd: [Csomag küldése ajánlattételre](topic:bid-invitations).

:::note
A kézzel beírt ajánlat továbbra is működik, a kézzel beírt és a weboldalról érkezett ajánlat egymás mellett áll. A weboldalról érkezett ajánlatok **web** jelölést kapnak (vagy **web, késett**, ha a határidő után érkeztek); árukat csak akkor változtatja meg, ha az ajánlattevő új verziót küld, így a saját módosítások addig megmaradnak.
:::
