---
title: Csomag küldése ajánlattételre
summary: Küldje el az ajánlati csomagot alvállalkozóknak e-mailben, hagyja, hogy fiók nélküli oldalon árakat írjanak be, tartsa az árakat lezárva a megnyitási időpontig, és húzza be őket az egyeztető táblázatba.
keywords: ajánlattételi felkérés, meghívó, ajánlattételi meghívó, ajánlattevő, alvállalkozó, meghívás, e-mail, árkérés, zárt ajánlatok, ajánlatbontás, ajánlattételi nap, késői ajánlat, határidő, emlékeztető, alvállalkozói nyilvántartás, biztosítás, minősítés, csv, csatlakozás, lapok pdf
from: fb314b2c
---

{{ui:Exportálás}} › {{ui:Ajánlati csomagok és kiegyenlítés…}} › {{ui:Küldés ajánlatkérésre…}} egy csomagot küld a kiválasztott személyeknek. A weboldal minden címzettnek e-mailben küld egy hivatkozást; ők megnyitnak egy oldalt, látják a terjedelmet, és minden tételsorhoz beírnak egy árat. Az árakat az egyeztető táblázatban látja, összehasonlításra készen ([Ajánlati csomagok és kiegyenlítés](topic:bid-leveling)).

:::note
**A küldés még nem mindenki számára érhető el.** Amíg a funkció tesztelés alatt áll, azoknál a fiókoknál működik, amelyeket a CadCraft csapata engedélyezett; ha az enyém nincs közöttük, a párbeszédpanel ezt jelzi. Az ajánlattevői oldal minden elküldött meghívóhoz működik.
:::

## Küldés előtt

- Ellenőrzött e-mail-címmel rendelkező CadCraft-fiókra van szüksége. A böngészőben futó TakeoffCraft felkéri, hogy **Csatlakozás**: megnyílik egy lap a getcadcraft.com oldalon, meg kell nyomni a Csatlakozás gombot, és ez a lap 30 napig érvényes bejelentkezést kap, kizárólag az ajánlati csomagokhoz, a TakeoffCraft lap bezárásáig. Bármikor eltávolítható a biztonsági oldalon. A Studio-ablak még nem tud küldeni.
- Adjon minden tételnek CSI-számot: egy csomag egy CSI-főcsoport tételeiből áll ([Mérési tételek létrehozása](topic:create-items)).
- Állítsa be a léptéket azokon a lapokon, amelyeken a csomag jelei vannak, hogy az ajánlattevők által látott mennyiségek mértek legyenek.

## Csomag küldése

1. Válassza a csomag alatt a {{ui:Küldés ajánlatkérésre…}} lehetőséget.
2. Töltse ki a címet, a projektet és egy elhagyható üzenetet, valamint a **határidőt** a saját időzónájában.
3. Hagyja bejelölve a **Árak lezárva tartása** jelölőnégyzetet, hogy minden árat a **megnyitási időpontig** elrejtsen (nem a határidő előtt), vagy vegye ki a jelölést, hogy az árak érkezésükkor látszanak.
4. Hagyja bejelölve a lapok jelölőnégyzetet, hogy a csomag jeleit tartalmazó lapokról PDF menjen, a jelekkel együtt. A saját árai soha nem kerülnek a küldeményba: csak a tételnevek, CSI-számok, mennyiségek, egységek és lapnevek.
5. Írja be a meghívandó személyeket soronként, `Name <name@company.com>` alakban vagy csak a címet, vagy jelöljön ki személyeket az alvállalkozói nyilvántartásból. Egyszerre legfeljebb 60, csomagonként legfeljebb 100.
6. Válassza a {{ui:Meghívók küldése}} lehetőséget. Mindenki egy egyszerű e-mailt kap a feladó nevével és e-mail-címével, a határidővel és a hivatkozással; a válaszok a feladóhoz érkeznek.

A párbeszédpanel megmutatja, hányan kaptak meghívót, és megnevezi azokat, akiket kihagyott: már meg lettek hívva erre a csomagra, kérték, hogy ne kapjanak ajánlattételi meghívót, érvénytelen a címük, vagy túllépték a küldési korlátot.

## Mit lát az ajánlattevő

Egy hosszú, privát hivatkozáson elérhető oldal, bejelentkezés nélkül. Megmutatja, ki hívta meg, a határidőt, hogy az árak le vannak-e zárva, az üzenetet és a lapok PDF-jét, majd minden sort a mennyiségével. Minden sorhoz beírnak egy árat, vagy bejelölik a **Nincs benne** jelölőnégyzetet, és megjegyzést fűzhetnek hozzá; a teljes csomaghoz megjegyzéseket és legfeljebb 3 fájlt (árajánlat, terjedelmi levél, tanúsítvány) csatolhatnak. Újra menthetnek, és a megnyitásig módosíthatják az árakat, vagy **visszautasíthatják** az ajánlatot, egy jelölőnégyzettel, amellyel kérhetik, hogy a CadCraft többé ne küldjön nekik ajánlattételi meghívót.

## Zárt ajánlatok és a megnyitás

A megnyitási időpont előtt **senki** nem látja az árat, megjegyzést vagy fájlt: sem a csomag készítője, sem a TakeoffCraftban, sem az Ajánlati csomagok oldalon. Csak azt látja, kit hívott meg, és ki válaszolt. A megnyitási időpontban minden ajánlat egyszerre látszik. A határidő után mentett ajánlat elfogadásra kerül, és **késett** jelölést kap; a kiegyenlítés továbbra is listázza, és a késés csak jelölés, nem döntés. A megnyitás után az ajánlattevő már nem módosíthatja az árat. Lezárás nélkül az ajánlat a határidő után véglegessé válik.

## Árak lekérése

Az {{ui:Árak lekérése}} lekérdezi a weboldalt, és minden választ ajánlatként ad a csomaghoz, **web** jelöléssel. A TakeoffCraft akkor is csendben lekérdez, amikor megnyitja a párbeszédpanelt, ha csatlakoztatva van. Ha az ajánlattevő új verziót mentett, az ajánlat helyben frissül; a szerkesztett ajánlat úgy marad, ahogy hagyták, amíg nem küldenek új verziót. Minden lekérés egy lépés, amelyet a {{key:Mod+Z}} visszavon. A kihagyott sorok úgy kerülnek át, mint az ajánlat által kihagyott terjedelem, így a kiegyenlítés a saját költségen tölti ki őket.

## A weboldalon

Küldés után még két oldal érhető el: az **Ajánlati csomagok** listázza, amit elküldtek, ki válaszolt, a késett ajánlatokat és a fájlokat, emlékeztetőt lehet küldeni (friss hivatkozás; a régi nem működik tovább), és lehet lezárni, újra megnyitni vagy visszavonni egy csomagot. Az **Alvállalkozók** oldalon minden cégről nyilvántartás vezethető: kapcsolattartók, szakágak, minősítési válaszok (működési évek, kezességi kapacitás, EMR, biztonsági nyilvántartás, szakszervezeti vagy nyílt üzem, referenciák), engedély- és biztosítási lejárati dátumok, amelyek lejárt állapotban vagy 30 napon belül jelölést kapnak, valamint a korábbi ajánlatok. A nyilvántartást CSV-ként lehet importálni és exportálni: soronként egy kapcsolattartó, az exportban látható oszlopokkal; a már meglévő céget frissíti, sosem duplázza.

## Ki mit lát, és meddig

Az ajánlattevő árai, megjegyzései és fájljai a csomag készítőjéhez és a CadCraft csapatához jutnak, amely az oldalt üzemelteti. A határidő után 24 hónapig őrizzük őket, a fájlokat 180 napig; utána törlődnek. Az ajánlattevő e-mail-címe az, amelyet a feladó megadott; kizárólag a meghívó és az ahhoz tartozó emlékeztető küldésére szolgál. Egy címre összesen legfeljebb napi 3 meghívó érkezik mindenkitől, a feladó pedig naponta legfeljebb 200-at küldhet.

## Még nincs elkészítve

A kiegészítések, a megrendelési levelek, az ajánlattevőnként aláírt terjedelmi lap és a biztosítási dátum lejárta előtti automatikus emlékeztetők még nincsenek elkészítve. Lásd: [Még nincs elkészítve](topic:not-built-yet).
