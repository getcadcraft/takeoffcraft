---
title: Újdonságok a 0.9 verzióban
summary: Hosszúságok olvasása méterben, centiméterben vagy milliméterben, metrikus területek m2 egységben a falfelülettel, 1:75 és 1:150 méretarány-előbeállítások, tömeg- és hőmérsékletegységek, tíz módszerrel rajzolható ív, valamint élő kurzorok, követés és résztvevőlista.
keywords: újdonságok, what's new, kiadási jegyzetek, changelog, 0.9, hosszúságok megjelenítése, méter, centiméter, milliméter, metrikus, globális követés, egységek, megjelenítési egységek, m2, négyzetméter, falfelület, méretarány-előbeállítások, 1:75, 1:150, tömeg, kilogramm, kg, tonna, font, lb, hőmérséklet, celsius, fahrenheit, ív, ívrajzolási módok, 3 pontos ív, sugár, élő, kurzorok, követés, résztvevők listája, osztály, eszköztippek, elrendezés, változások, 0.8, 0.8.1, verzió, új funkciók, mindent megszámol, jelmagyarázat, egész készlet, árak memóriája, korábbi munkák, utolsó munka, tipikus ár, beszállító, készlet, szállítási idő, visszarendelés, rendelési lista, hiány, problémák panel, asszisztens, nyelvek, beviteli eszközök, eszköztársorok, dwg
from: 6182b998
---

Ez a TakeoffCraft 0.9 változásait mutatja a 0.8.1-hez képest. Kisebb kiadás ez az alkalmazáshoz: a hosszúságok olvashatók méterben, centiméterben vagy milliméterben, a területek és a méretarányok helyesen követik a metrikus munkát, az Ív pedig tíz módon rajzolható. Az élő munkamenetek azt is megmutatják, ki hol van.

## Újdonságok

### Hosszúságok olvasása méterben, centiméterben vagy milliméterben

- **Hosszúságok megjelenítése.** {{ui:Beállítások}} › {{ui:TakeoffCraft}} alatt van a {{ui:Hosszúságok megjelenítése}} beállítás a {{ui:Globális beállítás követése}}, {{ui:Láb-hüvelyk}}, m, cm és mm lehetőségekkel. A {{ui:Globális beállítás követése}} a {{ui:Beállítások}} › {{ui:Globális}} › {{ui:Egységek}} alatt kiválasztott metrikus hosszegységet használja, és láb-hüvelyket, ha nincs kiválasztva egy sem. Megváltoztatja a hosszúságok olvasatát a lapon, az állapotsorban és a panelekben, beleértve a magasságokat, a mélységet, a vastagságot és a szinteket. A magasságmezőbe beírt szám a megjelenített egységben értendő.
- **Csak megjelenítés.** A mennyiségek, költségek és exportok a pontos hosszúságokból számolódnak. Az 1/16, 1/8 és 1/4 hüvelyk választás csak láb-hüvelyk esetén jelenik meg. Lásd: [Hosszúságok megjelenítése méterben](topic:show-lengths-in-meters).
- **Tömegegységek.** Egy {{ui:Beírt mennyiség (rajz nélkül)}} tétel mostantól lb, TON, kg vagy t egységben lehet, és egységenként árazható.
- **Hőmérséklet.** Minden tételnek van egy opcionális {{ui:Hőmérséklet}} mezője a tételszerkesztőben, Celsius- vagy Fahrenheit-fokban megadva. A {{ui:Beállítások}} › {{ui:TakeoffCraft}} alatti {{ui:Hőmérséklet megjelenítése}} beállítás a {{ui:Globális beállítás követése}}, °C vagy °F lehetőséget kínálja.

### Területek és méretarányok metrikus munkához

- **Területek m2-ben a rajzon.** A metrikus tétellel mért terület mostantól m2 jelzést kap a rajzcímkén és a jelölőpanelen is, valamint a táblázatban, SF helyett. Szabály: m2, ha a tétel metrikus egységárú, vagy a hosszúságok m, cm vagy mm egységben látszanak; egyéb esetben SF.
- **Falfelület.** A magassággal rendelkező vonalas tétel a falfelületét is megmutatja (hossz szorozva magassággal) a Tételek listájában, és megjegyzéssorként a tételenkénti mennyiségek táblázata alatt.
- **Méretarány-előbeállítások 1:75 és 1:150.** Ezek a {{ui:Méretarány}} csoport {{ui:Előbeállítás}} listájában vannak, amely most 32 méretarányt tartalmaz. Lásd: [Méretarány-előbeállítások](topic:scale-presets).

### Ív tíz módszerrel

- Amíg az {{ui:Ív}} be van kapcsolva (eszköztárgomb vagy {{key:R}}), a rajzlapsávban megjelenik egy {{ui:Ívrajzolási mód}} doboz: 3 pont, Kezdőpont, Középpont, Végpont; Kezdőpont, Középpont, Szög; Kezdőpont, Középpont, Hosszúság; Kezdőpont, Végpont, Szög; Kezdőpont, Végpont, Irány; Kezdőpont, Végpont, Sugár; Középpont, Kezdőpont, Végpont; Középpont, Kezdőpont, Szög; és Középpont, Kezdőpont, Hosszúság. A szög, a hosszúság, a sugár és az irány kattintással vagy begépelve is megadható. Működik lineáris sorozatokban, területeknél és kivágásoknál is. A 0.9 előtt mentett fájlok ugyanígy nyílnak meg. Lásd: [Ívek rajzolása tíz módszerrel](topic:draw-arcs-ten-methods).

### Együttműködés

- **Egymás kurzorainak látása.** Egy Live munkamenetben minden résztvevő mutatója megjelenik a lapon a nevével és színével, szaggatott kerettel a kijelölt jelölések körül. A más lapon lévő résztvevők a lapjuk nevével szerepelnek a listában. Lásd: [Élő együttműködés másokkal](topic:work-live).
- **Résztvevő követése és a résztvevők listája.** A Live munkamenet {{ui:Résztvevők}} gombja listázza az egyes résztvevőket az általuk használt eszközzel, az aktuális lapjukkal és az utolsó szerkesztésük idejével. A {{ui:Követés}} a nézetét az övéhez igazítja, a házigazda pedig használhatja a {{ui:Kérje meg mindenkit, hogy kövessék}} lehetőséget. Lásd: [Munkatárs követése egy Live munkamenetben](topic:follow-a-teammate).

## Minden alkalmazásban

- **Eszköztippek és kezdő tipp.** A súgószöveg Bootstrap-eszköztipp, a kezdő tipp pedig bezárható.
- **Görgethető lapsávok.** A panel lapsávja, ha nem fér ki, görgethető, és nem vágódik le.
- **Lapcímek.** A böngészőlap ezt mutatja: `<document> - TakeoffCraft | CadCraft`.
- **Elrendezés.** A {{ui:Beállítások}} alatti elrendezéslista legördülő lista, amely a kiválasztott elrendezést mutatja.
- **Nyelv.** A kiválasztott nyelv mostantól az oldal saját szövegeire is vonatkozik, például az Új, a Megnyitás és a Mentés feliratokra. Az angoltól eltérő nyelvek gépi piszkozatok, amíg egy anyanyelvi beszélő át nem nézte őket.

## Őszinte korlátok

- A hosszúság-megjelenítés, a tömeg- és hőmérsékletegységek és az új előbeállítások tesztekkel és az oldalon lettek ellenőrizve. Minden panelt minden egységgel nem ellenőriztek kézzel.
- A résztvevők listáját nem ellenőrizték kézzel valódi tanári és diákcsoporttal.
- Az angoltól eltérő nyelvek gépi piszkozatok.
- A Windows-telepítők nincsenek kódaláírva (További információ, majd Mégis futtatás). A macOS lemezkép nincs notarizálva (jobb klikk, majd {{ui:Nyitott}}).

## Korábbi: 0.8 és 0.8.1

Ez a TakeoffCraft 0.8 (2026. november 1-jén kiadva) és 0.8.1 (2026. november 2.) változásait mutatja a 0.7-hez képest. Egy szimbólum-jelmagyarázat mostantól az egész rajzlapkészleten, egy lépésben megszámolható, egy új mennyiségkimutatás a korábbi munkái áraiból indulhat, a mennyiségkimutatás pedig ellenőrizhető a beszállító készletével. A 0.8.1 javítókiadás.

### Újdonságok

**Az egész készlet megszámolása**

- **A jelmagyarázat egyszeri bekeretezése.** A {{ui:Mindent megszámol}} az eszköztárban egy szimbólum-jelmagyarázatot olvas: húzzon egy dobozt a szimbólumok és a mellettük nyomtatott nevek köré. Minden szimbólum a képével és a nevével szerepel a listában, a név pedig a tétel neve lesz. Vegye ki a pipát attól, amit nem kér, majd válassza a {{ui:Számolás N lapon}} lehetőséget. Egy sáv mutatja, melyik lapot keresi, a {{ui:Mégse}} leállítja a futást, és az oldal továbbra is használható marad.
- **Egy futás minden lapon.** Minden szimbólum minden megnyitott lapon megszámlálódik. A más méretarányú lapon a keresés azon a méretarányon történik, a szimbólumok pedig bármely derékszögben elforgatva is megtalálhatók. A jelmagyarázat saját szimbólumai a saját lapján nem számítanak bele.
- **Átnézés hozzáadás előtt.** Minden összeg mellett van egy lapankénti hivatkozás („E-103: 4”), amely az adott lapra visz. Kattintson egy találat dobozára a kihagyásához, és újra a visszaállításához. Az egyezési szint (50%–100%) csak a találatokat szűri; nincs újrakeresés.
- **Egy visszavonási lépés.** A {{ui:N jelölés hozzáadása}} szimbólumonként egy mennyiségi tételt hoz létre, és minden találatra jelölést tesz. Ha egy név már a saját mennyiségi tétele, azt újrahasználja. A {{key:Ctrl+Z}} minden tételt és jelölést visszavon. Amit elfogad, az a {{ui:Tanult}} listát is gyarapítja.
- **Szimbólumok bármilyen szögben.** Számolás előtt jelölje be a {{ui:Szimbólumok bármilyen szögben}} lehetőséget, hogy a nem derékszögben elforgatott szimbólumokat is megtalálja. A keresés ilyenkor 15 fokonként forgatja a szimbólumokat, és egy nem kör alakú szimbólum akár hatszor annyi ideig is tarthat.
- **Mi ez.** Egyszerű szimbólum-egyeztetés a saját lapjain, betanított modell nélkül; semmi nem hagyja el a számítógépet. Egy kitalált, 200 lapos készleten 9,4 másodpercig tartott a teljes futás Chrome-ban egy gyors asztali gépen; a valódi tervkészletek lassabbak lesznek. Lásd: [Az egész rajzlapkészlet megszámlálása](topic:count-everything).

**Árak memóriája a saját munkáiból**

- **A TakeoffCraft megjegyzi az árait.** Mennyiségkimutatás mentésekor minden használt, árazott tétel nevét és típusát megjegyzi: anyagár, munkadíj, hulladék és egység. Minden névhez az utolsó 12 munka marad meg. Ez az árkönyvtár mellett, ezen a számítógépen tárolódik, sosem a mennyiségkimutatás-fájlban, és sehová nem küldjük.
- **Új mennyiségkimutatás indítása belőle.** Az eszköztár {{ui:Árak}} gombja tételenként megmutatja az utolsó munka árait, a tipikus árakat és a tartományt. A {{ui:Az utolsó használata}} vagy a {{ui:A tipikus használata}} egy tételt áraz, a {{ui:Ár beállítása N árazatlan tételhez a memóriából}} pedig minden még árazatlan tételt kitölt. Minden használat egy visszavonási lépés.
- **Régebbi munkák.** A {{ui:Tanulás egy korábbi mennyiségkimutatásból…}} megjegyzi egy mentett mennyiségkimutatás (.json) árazott tételeit.
- **Megtekintés, módosítás, elfelejtés.** A {{ui:Minden megjegyzett}} minden nevet felsorol; a kuka gomb egyet elfelejt, a {{ui:Minden ár törlése}} mindet. A leállításhoz kapcsolja ki a {{ui:Jegyezze meg az áraimat, amikor mennyiségkimutatást mentek}} lehetőséget. Darabonkénti ár sosem kerül méterenkénti tételre. Lásd: [Árak memóriája a korábbi munkáiból](topic:price-memory).

**Beszállítói készlet és szállítási idők**

- **Ellenőrzés a beszállító listája ellen.** A {{ui:Készlet}} gomb az eszköztáron beszállítói készletlistát vesz fel ({{ui:Beszállítói fájl hozzáadása…}}), CSV-t vagy táblázatot, és a mennyiségkimutatás igényét, hulladékkal együtt, ellenőrzi vele. Legfeljebb öt fájl marad meg. Semmi nem kerül elküldésre, és semmi nem kérdez a beszállítótól: a fájlt Ön hozza.
- **Mit mond.** A rövid tételek kerülnek elöl: „120 EA hiány”, „Szállítási idő 21 nap”, „Visszarendelésen”, „Eltérő egység”, „Nincs készletadat” vagy „Készleten”. A {{ui:Leghosszabb kívánt várakozás (nap)}} 14-től indul.
- **Rendelési lista.** A {{ui:Rendelési lista (CSV)}} letölti a rövid tételeket a hiány mennyiségével, a beszállítóval és a szállítási idővel.
- **Árak a Könyvtárba.** Ha a fájl árakat tartalmaz, a {{ui:Árak a Könyvtárba}} beállítja minden azonos nevű és egységű könyvtári bejegyzés anyagárát. Az újraárazás a Könyvtárból viszi át őket a mennyiségkimutatásba.
- **A Problémák panelen.** A hiány figyelmeztetés, a hosszú várakozás pedig megjegyzés, a „Beszállítói készlet” alatt. Egyet indokkal el lehet fogadni, és az indok a mennyiségkimutatásban mentésre kerül. Lásd: [Beszállítói készlet és szállítási idők ellenőrzése](topic:supplier-stock).

**MI-asszisztensek**

- **Eszközök a három funkcióhoz.** Ha az asszisztensek engedélyezve vannak a {{ui:Beállítások}} alatt, egy asszisztens elolvashatja a jelmagyarázatot (`legend_open`), lefuttathatja a számlálást (`legend_count_start`, majd `legend_count_status` és `legend_count_result`), és hozzáadhatja a tételeket (`legend_count_add`, amely előnézettel is indulhat). Olvashatja a megjegyzett árakat (`prices_list`), árazhat tételeket velük (`prices_apply`, ez is indulhat előnézettel), és olvashatja a beszállítói ellenőrzést (`supply_check`). A beszállítói fájl hozzáadása továbbra is kézzel történik. Lásd: [A TakeoffCraft használata MI-asszisztensekkel](topic:use-with-ai-assistants).

**Minden alkalmazásban**

- **Nyelvek.** Összesen ötvennégy nyelv van; tíz új (litván, lett, bosnyák, marathi, telugu, albán, afrikaans, filippínó, szuahéli és üzbég). Az angoltól eltérő nyelvek gépi piszkozatok, amíg egy anyanyelvi beszélő át nem nézte őket.
- **Beviteli eszközök.** A {{ui:Beállítások}} › {{ui:Globális}} › {{ui:Beviteli eszközök}} beállítja, mit tesz az érintőpad, az egér oldalgombjai, a toll, a 3D-egér, a játékvezérlő vagy a MIDI-vezérlő, mindenhol vagy csak egy alkalmazásban. Lásd: [Érintőpad, 3D-egér vagy vezérlő használata](common:input-devices).
- **Eszköztársorok.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} alatt a {{ui:Tördelés}} (a kezdő beállítás), a {{ui:2 sor}} és az {{ui:1 sor}} közül lehet választani; a nem férő csoportok oldalra görgethetők. Lásd: [Panelek elrendezése](common:arrange-panels).
- **Problémák panel.** A megosztott figyelmeztetés- és megjegyzéspanel mostantól a fent leírt beszállítói készletellenőrzést is tartalmazza a többi ellenőrzés mellett.
- **Bővítmények.** A bővítmények a fiók listáját követik. Lásd: [Bővítmények és a fiókjának listája](common:addons-basics).
- **MI csatlakoztatása.** A CadCraft Studio a központ: csatlakoztassa az asszisztensét egyszer mind a nyolc alkalmazáshoz. A Studiónak nincs saját MI-je.

### Javítva a 0.8.1-ben

- **DWG osztályok szakasz.** A DWG-fájl osztályok szakaszát rossz típusúként olvasta. Ez most a TakeoffCraftban és négy másik alkalmazásban javítva van.
- **A Studio futás közben válthat nyelvet.** Eddig a Studio és a csomagolt kiadásai csak angolul voltak. Ezt az asztali buildben nem tesztelték minden platformon; jelezzen, ha a nyelv nem változik.

### Ebben a verzióban még nincs

- **Még nincs kódaláírás.** A Windows figyelmeztethet, Mac-en pedig az első alkalommal jobb klikk, majd {{ui:Nyitott}}. Az áruházi buildek (Microsoft Store, Google Play, App Store) szünetelnek, és az iPad- és iPhone-buildet nem építették újra a 0.8.1-hez.
- **Studio-frissítések.** A Windows-telepítő és a Linux-csomagok naponta egyszer ellenőriznek, és előbb kérdeznek. A hordozható zip csak jelzi a frissítést, a macOS és az APK nem frissül magától. A 0.8-as macOS .dmg a kiadást követi.
- **MI csatlakoztatása.** Az egykattintásos csatlakozás a Studión belül, a böngészős MI-összekötő, a saját API-kulcs a Studióban és a közzétett MCP-csomag nem szerepel ebben a verzióban.
- **Egész készlet megszámolása.** Olyan szimbólumok kellenek, amelyek a jelmagyarázattal azonos módon vannak rajzolva; a falon vagy hosszú vonalon átmenő szimbólum kimaradhat. A tükrözött szimbólumokat nem találja meg, a méretarány nélküli, más méretben rajzolt lapot pedig a jelmagyarázat méretében keresi. Az első lap találatait ellenőrizze, mielőtt a többinek bízik.
- **Beszállítói készlet.** A készletadatok csak annyira frissek, mint az Ön által hozzáadott fájl. Az ellenőrzés soha nem kérdez beszállítót.
- **Nyelvek.** A tamil alkalmazássáv túlcsordul.

Minden más a [Még nincs elkészítve](topic:not-built-yet) oldalon található. Az előző kiadásról lásd: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).
