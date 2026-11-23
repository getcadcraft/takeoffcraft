---
title: Újdonságok a 0.9 verzióban (korábbi)
summary: Hosszúságok olvasása méterben, centiméterben vagy milliméterben, metrikus területek m2-ben falfelülettel, 1:75 és 1:150 méretarány-előbeállítások, tömeg- és hőmérsékletegységek, tíz módszerrel rajzolható ív, valamint élő kurzorok, követés és résztvevőlista.
keywords: újdonságok 0.9, korábbi kiadás, újdonságok, what's new, kiadási megjegyzések, változásnapló, 0.9, hosszúságok megjelenítése, méter, centiméter, milliméter, metrikus, globális beállítás követése, egységek, megjelenítési egységek, m2, négyzetméter, falfelület, méretarány-előbeállítások, 1:75, 1:150, tömeg, kilogramm, kg, tonna, font, lb, hőmérséklet, celsius, fahrenheit, ív, ívrajzolási módok, 3 pontos ív, sugár, élő, kurzorok, követés, résztvevőlista, osztály, súgószövegek, elrendezés, változások, 0.8, 0.8.1, verzió, új funkciók, mindent megszámol, jelmagyarázat, szimbólumjelmagyarázat, teljes készlet, ármemória, korábbi munkák, utolsó munka, tipikus ár, beszállító, készlet, szállítási idő, visszarendelés, hiány, rendelési lista, problémák panel, asszisztens, nyelvek, beviteli eszközök, eszköztársorok, dwg
from: f4322ba2
---

Ez a változás a TakeoffCraft 0.9 verziójában történt, a 0.8.1 verzióhoz képest. Ez egy kis kiadás ebben az alkalmazásban: a hosszúságokat most méterben, centiméterben vagy milliméterben lehet olvasni, a területek és a méretarányok megfelelően követik a metrikus munkát, az Ív pedig tíz módon rajzolható. Az élő munkamenetek azt is megmutatják, ki hol van.

## Új

### Hosszúságok olvasása méterben, centiméterben vagy milliméterben

- **Hosszúságok megjelenítése.** A {{ui:Settings}} › {{ui:TakeoffCraft}} alatt van a {{ui:Show lengths as}} beállítás, a következő lehetőségekkel: {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm és mm. A {{ui:Follow Global}} a {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} alatt megjelölt metrikus hosszegységet használja, és láb-hüvelyket, ha nincs ilyen megjelölve. Ez azt változtatja meg, ahogyan a hosszúságok megjelennek a lapon, az állapotsorban és a panelekben, beleértve a magasságokat, a mélységet, a vastagságot és a szinteket. A magasság mezőbe beírt szám a megjelenített egységben értelmeződik.
- **Csak megjelenítés.** A mennyiségek, költségek és exportok a pontos hosszúságokból számolódnak. Az 1/16, 1/8 és 1/4 hüvelykes választás csak láb-hüvelyk esetén jelenik meg. Lásd: [Hosszúságok megjelenítése méterben](topic:show-lengths-in-meters).
- **Tömegegységek.** Egy {{ui:Typed quantity (no drawing)}} tétel most lb, TON, kg vagy t egységben is megadható, és egységenként árazható.
- **Hőmérséklet.** Minden tételnél van egy opcionális {{ui:Temperature}} mező a tételszerkesztőben, Celsius- vagy Fahrenheit-fokban megadva. A {{ui:Settings}} › {{ui:TakeoffCraft}} alatti {{ui:Show temperatures as}} beállítás a {{ui:Follow Global}}, °C vagy °F lehetőségeket kínálja.

### Területek és méretarányok metrikus munkához

- **Területek m2-ben a rajzon.** A metrikus tétellel mért terület most a rajzcímkén és a jelölőpanelen is m2-t mutat, a táblázatban is, SF helyett. A szabály: m2, ha a tétel metrikusan van árazva, vagy a hosszúságok m, cm vagy mm egységben jelennek meg; egyébként SF.
- **Falfelület.** A magassággal rendelkező lineáris tétel a falfelületét (hossz szorozva magassággal) is megmutatja a Tételek listájában, valamint megjegyzéssorként a tételenkénti mennyiségek táblázata alatt.
- **Méretarány-előbeállítások 1:75 és 1:150.** A {{ui:Scale}} csoport {{ui:Preset}} listájában vannak, amely most 32 méretarányt tartalmaz. Lásd: [Méretarány-előbeállítások](topic:scale-presets).

### Ív tíz módszerrel

- Amíg az {{ui:Arc}} be van kapcsolva (eszköztárgomb vagy {{key:R}}), a lapsávban megjelenik egy {{ui:Arc method}} doboz: 3 pontos, Kezdő, Középpont, Vég, Kezdő, Középpont, Szög, Kezdő, Középpont, Hossz, Kezdő, Vég, Szög, Kezdő, Vég, Irány, Kezdő, Vég, Sugár, Középpont, Kezdő, Vég, Középpont, Kezdő, Szög és Középpont, Kezdő, Hossz. A szög, a hossz, a sugár és az irány egérrel is megadható, vagy beírható. Vonalas szakaszokban, területeken és kivágásokban működik. A 0.9 előtt mentett fájlok ugyanúgy megnyílnak. Lásd: [Ív rajzolása tíz módszerrel](topic:draw-arcs-ten-methods).

### Együttműködés

- **Egymás kurzorainak látása.** Egy élő munkamenetben mindenki mutatója megjelenik a lapon, a nevével és színével, a kijelölt jelölések körül szaggatott kerettel. A más lapon lévő személyeket az adott lap nevével sorolja fel a rendszer. Lásd: [Együttműködés másokkal élőben](topic:work-live).
- **Egy személy követése, és a résztvevőlista.** Az élő munkamenet {{ui:People}} gombja listázza a résztvevőket, mindegyikük futtatott eszközével, aktuális lapjával és azzal, mikor szerkesztett utoljára. A {{ui:Follow}} a saját nézetét a másikéhoz igazítja, a házigazda pedig használhatja a {{ui:Ask everyone to follow me}} lehetőséget. Lásd: [Csapattárs követése élő munkamenetben](topic:follow-a-teammate).

## Minden alkalmazásban

- **Súgószövegek és a kezdő tipp.** A lebegő szöveg Bootstrap-súgószöveg, a kezdő tipp pedig bezárható.
- **Görgethető fülsávok.** Ha egy panel fülsávja nem fér ki, görgethető lesz, nem vágódik le.
- **Lapcímek.** A böngészőlap címe: `<dokumentum> - TakeoffCraft | CadCraft`.
- **Elrendezés.** A {{ui:Settings}}-ben lévő elrendezéslista most legördülő menü, amely a kiválasztott elrendezést mutatja.
- **Nyelv.** A kiválasztott nyelv most eljut az oldal saját szavaihoz is, például az Új, a Megnyitás és a Mentés szavakhoz. Az angoltól eltérő nyelvek gépi piszkozatok, amíg egy anyanyelvi beszélő át nem nézte őket.

## Őszinte korlátok

- A hosszúság-megjelenítést, a tömeg- és hőmérsékletegységeket és az új előbeállításokat tesztek és az oldal ellenőrizte. Nem minden panelt ellenőriztek kézzel minden mértékegységben.
- A résztvevőlistát nem ellenőrizte kézzel valódi tanári és diák csoport.
- Az angoltól eltérő nyelvek gépi piszkozatok.
- A Windows-telepítők nincsenek kódaláírva (További információk, majd Futtatás mindenképpen). A macOS lemezkép nincs notarizálva (kattintson jobb gombbal, majd válassza a Megnyitás lehetőséget).

## Korábbi: 0.8 és 0.8.1

Ez változott a TakeoffCraft 0.8 verziójában (megjelent: 2026. november 1.) és a 0.8.1 verzióban (2026. november 2.), a 0.7 verzióhoz képest. Egy szimbólumjelmagyarázat mostantól egyszerre, a teljes készleten megszámolható, egy új mennyiségkimutatás a korábbi munkái árai alapján indulhat, a mennyiségkimutatás pedig ellenőrizhető a beszállító készletével. A 0.8.1 javítókiadás.

### Új

**Mindent megszámol a készletben**

- **Jelmagyarázat egyszer bekeretezve.** A {{ui:Count everything}} az eszköztáron egy szimbólumjelmagyarázatot olvas: húzzon keretet a szimbólumok és a melléjük nyomtatott nevek köré. Minden szimbólum a képével és nevével jelenik meg, a név pedig a tétel nevévé válik. Törölje a pipát, amit nem kér, majd válassza a {{ui:Count on N sheets}} lehetőséget. Egy sáv mutatja, melyik lapot keresi, a {{ui:Cancel}} leállítja a futást, az oldal pedig továbbra is használható marad.
- **Minden lap egy futásban.** Minden szimbólumot minden megnyitott lapon megszámol. A más méretarányban rajzolt lapot ezen a méretarányon keresi, a szimbólumokat pedig bármely derékszögben elforgatva is megtalálja. A jelmagyarázat saját szimbólumai nem számítanak bele a saját lapjukra.
- **Átnézés, mielőtt bármi hozzáadódna.** Minden összeg laponként hivatkozást kap („E-103: 4”), amely arra a lapra visz. Kattintson egy dobozra a találatok között a kihagyáshoz, és újra a visszahozáshoz. Az egyezési szint (50%-tól 100%-ig) csak a találatokat szűri; nincs újrakeresés.
- **Egy visszavonási lépés.** A {{ui:Add N marks}} minden szimbólumhoz létrehoz egy számolási tételt, minden találatnál jelöléssel. Ha a név már meglévő számolási tétel, az újra felhasználódik. A {{key:Ctrl+Z}} minden tételt és jelölést visszavon. Az elfogadott elemek a {{ui:Learned}} listát is gyarapítják.
- **Szimbólumok tetszőleges szögben.** Pipálja be a {{ui:Symbols at any angle}} lehetőséget a számlálás előtt, hogy a derékszögtől eltérő szöggel elforgatott szimbólumokat is megtalálja. A keresés ekkor 15 fokonként forgatja el a szimbólumot, és a nem kör alakú szimbólum akár hatszor annyi ideig tarthat.
- **Mi ez.** Egyszerű szimbólumillesztés a saját lapjain, betanított modell nélkül, és semmi nem hagyja el a számítógépet. Egy kitalált 200 lapos készleten 9,4 másodpercig tartott végponttól végpontig, Chrome-ban, egy gyors asztali gépen; a valódi tervkészletek lassabbak lesznek. Lásd: [Mindent megszámol a készletben](topic:count-everything).

**Árak megjegyzése a saját munkáiból**

- **A TakeoffCraft megjegyzi az árait.** Egy mennyiségkimutatás mentésekor minden használt, árazott tétel név és típus szerint megjegyződik: anyagár, munkadíj, hulladék és egység. Minden névhez az utolsó 12 munka megmarad. Ez a számítógépen, a Könyvtár árai mellett tárolódik, sosem a mennyiségkimutatás fájljában, és semmi nem kerül sehová.
- **Új mennyiségkimutatás indítása belőle.** Az eszköztár {{ui:Prices}} gombja tételenként megmutatja az utolsó munka díjait, a tipikus árakat és a tartományt. Az {{ui:Use last}} vagy az {{ui:Use typical}} egy tételt árazza be, a {{ui:Price N unpriced items from memory}} pedig minden még árazatlan tételt kitölt a megjegyzett árakból. Mindegyik használat egy visszavonási lépés.
- **Régebbi munkák.** A {{ui:Learn from a past takeoff…}} megjegyzi egy mentett mennyiségkimutatás (.json) árazott tételeit.
- **Megnézni, megváltoztatni, elfelejteni.** Az {{ui:Everything remembered}} minden nevet felsorol; a kuka gomb egyet elfelejt, a {{ui:Clear all prices}} pedig mindet. A megjegyzés leállításához törölje a pipát a {{ui:Remember my prices when I save a takeoff}} mellől. Darabonkénti ár sosem kerül folyóméteres tételre. Lásd: [Árak megjegyzése korábbi munkákból](topic:price-memory).

**Beszállítói készlet és szállítási idők**

- **Ellenőrzés a beszállítói lista ellen.** A {{ui:Supply}} gomb az eszköztáron egy beszállító készletlistáját fogadja ({{ui:Add a supplier file…}}), CSV-t vagy táblázatot, és a mennyiségkimutatás igényeit, a hulladékkal együtt, ehhez hasonlítja. Legfeljebb öt fájl marad meg. Semmi nem kerül elküldésre, és semmi nem kérdez meg beszállítót: Ön hozza a fájlt.
- **Mit mond.** A rövid tételek kerülnek elöl: „Hiány: 120 EA”, „Szállítási idő 21 nap”, „Visszarendelés alatt”, „Eltérő egység”, „Nincs készletadat” vagy „Raktáron”. A {{ui:Longest wait wanted (days)}} 14-től indul.
- **Rendelési lista.** A {{ui:Order list (CSV)}} letölti a rövid tételeket a hiány mennyiségével, a beszállítóval és a szállítási idővel.
- **Árak a Könyvtárba.** Ha a fájlban vannak árak, a {{ui:Prices into the Library}} beállítja minden azonos nevű és egységű Könyvtár-bejegyzés anyagárát. Az újraárazás a Könyvtárból hozza be az árakat a mennyiségkimutatásba.
- **A Problémák panelben.** A hiány figyelmeztetés, a hosszú várakozás pedig megjegyzés, a „Beszállítói készlet” címszó alatt. Egy hiányt indokkal elfogadhat, az indok pedig a mennyiségkimutatásban mentődik. Lásd: [Beszállítói készlet és szállítási idők ellenőrzése](topic:supplier-stock).

**AI-asszisztensek**

- **Eszközök mindhárom asszisztenshez.** Ha a {{ui:Settings}}-ben engedélyezve vannak az asszisztensek, egy asszisztens tud jelmagyarázatot olvasni (`legend_open`), futtatni a számlálást (`legend_count_start`, majd `legend_count_status` és `legend_count_result`), és hozzáadni azt (`legend_count_add`, amely előbb előnézetet mutathat). Olvashatja a megjegyzett árakat (`prices_list`), árazhat tételeket azokból (`prices_apply`, amely szintén mutathat előnézetet), és olvashatja a beszállítói ellenőrzést (`supply_check`). A beszállítói fájl hozzáadása továbbra is az Ön feladata. Lásd: [TakeoffCraft használata AI-asszisztensekkel](topic:use-with-ai-assistants).

**Mindegyik alkalmazásban**

- **Nyelvek.** Összesen ötvennégy nyelv van; tíz új: litván, lett, bosnyák, maráthi, telugu, albán, afrikaans, filippínó, szuahéli és üzbég. Az angoltól eltérő nyelvek gépi piszkozatok, amíg egy anyanyelvi beszélő át nem nézte őket.
- **Beviteli eszközök.** A {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} beállítja, mit tesz a touchpad, az egér oldalsó gombjai, a toll, a 3D-egér, a játékvezérlő vagy a MIDI-vezérlő, minden alkalmazásnál vagy csak egynél. Lásd: [Touchpad, 3D-egér vagy vezérlő használata](common:input-devices).
- **Eszköztársorok.** A {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} alatt a {{ui:Wrap}} (a kezdő beállítás), a {{ui:2 rows}} és az {{ui:1 row}} közül választhat; a nem férő csoportok oldalra görgethetők. Lásd: [A panelek elrendezése](common:arrange-panels).
- **Problémák panel.** A figyelmeztetések és megjegyzések közös panelje most a fent leírt beszállítói készletellenőrzést is tartalmazza, a többi ellenőrzés mellett.
- **Bővítmények.** A bővítmények a fiókja listáját követik. Lásd: [Bővítmények és a fiókja listája](common:addons-basics).
- **AI csatlakoztatása.** A CadCraft Studio a központ: az AI-asszisztensét egyszer csatlakoztassa mind a nyolc alkalmazáshoz. A Studionak nincs saját AI-ja.

### Javítva a 0.8.1-ben

- **DWG osztályszakasz.** A DWG-fájl osztályszakaszát rossz típusúként olvasta a program. Ez javítva van a TakeoffCraftban és további négy alkalmazásban.
- **A Studio nyelve futás közben is váltható.** Korábban a Studio és a csomagolt kiadásai csak angolul voltak elérhetők. Ezt az asztali verziót nem tesztelték minden platformon; jelezze, ha a nyelv nem változik.

### Még nem ebben a verzióban

- **Nincs kódaláírás.** A Windows figyelmeztethet, Macen pedig első alkalommal kattintson jobb gombbal, és válassza a Nyitott lehetőséget. Az áruházi verziók (Microsoft Store, Google Play, App Store) felfüggesztve vannak, az iPad- és iPhone-verzió pedig nem lett újraépítve a 0.8.1-hez.
- **Studio-frissítések.** A Windows-telepítő és a Linux-csomagok naponta ellenőriznek, és először kérdeznek. A hordozható zip csak jelez, a macOS és az APK nem frissül magától. A 0.8-as macOS .dmg a kiadást követi.
- **AI csatlakoztatása.** Az egykattintásos csatlakoztatás a Studión belül, a böngészőben használható hosztolt AI-összekötő, a saját API-kulcs a Studióban és a közzétett MCP-csomag nincs ígérve ebben a verzióban.
- **Mindent megszámol.** Ugyanúgy kell rajzolt szimbólumok, mint a jelmagyarázatban, és a falon vagy hosszú vonalon átmenő szimbólum kimaradhat. A tükrözött szimbólumokat nem találja meg, a méretarány nélküli, más méretben rajzolt lapot pedig a jelmagyarázat méretében keresi. Az első lap találatait ellenőrizze, mielőtt a többiben megbízna.
- **Beszállítói készlet.** A készletadatok csak annyira frissek, mint a hozzáadott fájl. Az ellenőrzés sosem kérdez beszállítót.
- **Nyelvek.** A tamil alkalmazássáv túlcsordul.

Minden más a [Még nincs elkészítve](topic:not-built-yet) témakörben található. Az ezt megelőző kiadásról lásd: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).
