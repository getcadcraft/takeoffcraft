---
title: Újdonságok a 0.8 és a 0.8.1 verzióban
summary: Egy teljes szimbólum-jelmagyarázat megszámolása az összes megnyitott lapon egy futtatásban, az árak betanítása a korábbi munkáidból, a mennyiségkimutatás ellenőrzése a beszállító készletével és szállítási idejével, valamint új asszisztenseszközök mindhármukhoz, plusz a közös 0.8-as változtatások és a DWG-fájlokra vonatkozó 0.8.1-es javítás.
keywords: újdonságok, mi az új, kiadási jegyzetek, változásnapló, változások, 0.8, 0.8.1, verzió, új funkciók, mindent megszámol, jelmagyarázat, szimbólum-jelmagyarázat, teljes készlet, árak memóriája, korábbi munkák, utolsó munka, tipikus ár, beszállító, készlet, szállítási idő, visszarendelés, hiány, rendelési lista, készlethiány, problémák panel, asszisztens, nyelvek, beviteli eszközök, eszköztársorok, dwg
from: a04adef6
---

Ez a változások listája a TakeoffCraft 0.8 (megjelent: 2026. november 1.) és 0.8.1 (2026. november 2.) verziójában a 0.7 verzióhoz képest. Egy szimbólum-jelmagyarázat mostantól egyszerre, a teljes lapkészleten megszámolható, egy új mennyiségkimutatás a korábbi munkái áraiból indulhat, a mennyiségkimutatás pedig ellenőrizhető a beszállító készletével szemben. A 0.8.1 hibajavító kiadás.

## Új funkciók

### Megszámolás az egész lapkészletben

- **Keretezze be egyszer a jelmagyarázatot.** A {{ui:Count everything}} eszköz az eszköztáron egy szimbólum-jelmagyarázatot olvas be: húzzon keretet a szimbólumok és a mellettük nyomtatott nevek köré. Minden szimbólum a képével és a nevével szerepel a listában, a név lesz a tétel neve. Törölje a jelölést a nem kívánt elemeknél, majd válassza ki: {{ui:Count on N sheets}}. Egy sáv mutatja, melyik lapon folyik a keresés, a {{ui:Cancel}} megszakítja a futtatást, az oldal közben használható marad.
- **Minden lap egy futtatásban.** Minden szimbólumot minden megnyitott lapon megszámol. A más léptékben rajzolt lapon ezen a léptéken keresi, a szimbólumokat bármely derékszögben elforgatva is megtalálja. A jelmagyarázat saját szimbólumait nem számolja meg a saját lapján.
- **Felvétel előtt ellenőrizze.** Minden összeghez tartozik egy hivatkozás laponként („E-103: 4”), amely az adott lapra visz. Kattintson egy találat keretére, hogy kihagyja, majd újra kattintson rá, hogy visszavegye. Az egyezési szint (50% és 100% között) csak a talált elemeket szűri; nincs új keresés.
- **Egy visszavonási lépés.** A {{ui:Add N marks}} minden szimbólumhoz létrehoz egy számlálási tételt, és minden találathoz jelölést helyez. Ha a név már szerepel számlálási tételként, a rendszer azt használja újra. A {{key:Ctrl+Z}} billentyűkombinációval minden tételt és jelölést visszavonhat. Az elfogadott találatok a {{ui:Learned}} listát is gyarapítják.
- **Bármilyen szögben.** Az indítás előtt jelölje be a {{ui:Symbols at any angle}} opciót, hogy a derékszögtől eltérő szöggel elforgatott szimbólumokat is megtalálja. A keresés ilyenkor 15 fokonként forgatja el az egyes szimbólumokat, és egy nem kör alakú szimbólum akár hatszor annyi ideig tarthat.
- **Mit jelent.** Egyszerű szimbólum-egyeztetés a saját lapjain, betanított modell nélkül, és semmi nem hagyja el a számítógépet. Egy kitalált, 200 lapos készleten a teljes folyamat 9,4 másodpercet vett igénybe Chrome-ban, gyors asztali gépen; a valódi tervkészletek lassabbak lesznek. Lásd: [Megszámolás az egész lapkészletben](topic:count-everything).

### Árak megjegyzése a saját munkáiból

- **A TakeoffCraft megjegyzi az árait.** Egy mennyiségkimutatás mentésekor minden használt, árazott tétel a neve és a típusa szerint megjegyződik: anyagár, munkadíj, hulladék és mértékegység. Minden névhez az utolsó 12 munka tárolódik. Ez az adat ezen a számítógépen, a Könyvtár árai mellett tárolódik, sosem a mennyiségkimutatás-fájlban, és semmi nem kerül sehová.
- **Új mennyiségkimutatás indítása belőle.** Az eszköztáron a {{ui:Prices}} minden tételhez megmutatja az utolsó munka árait, a tipikus árakat és a tartományt. A {{ui:Use last}} vagy a {{ui:Use typical}} egy tételt áraz be, a {{ui:Price N unpriced items from memory}} pedig minden még árazatlan tételt kitölt. Minden használat egy visszavonási lépés.
- **Régebbi munkák.** A {{ui:Learn from a past takeoff…}} megjegyzi egy mentett mennyiségkimutatás (.json) árazott tételeit.
- **Megnézni, módosítani, elfelejteni.** A {{ui:Everything remembered}} minden nevet listáz; a kuka gomb egy nevet felejt el, a {{ui:Clear all prices}} mindet. A megjegyzés leállításához kapcsolja ki a {{ui:Remember my prices when I save a takeoff}} opciót. Darabra szóló ár soha nem kerül lábanként mért tételre. Lásd: [Árak megjegyzése a saját munkáiból](topic:price-memory).

### Beszállítói készlet és szállítási idők

- **Ellenőrzés a beszállító listájával.** Az eszköztáron a {{ui:Supply}} beszállítói készletlistát vesz fel ({{ui:Add a supplier file…}}), CSV-t vagy táblázatot, és a mennyiségkimutatás igényeit a hulladékkal együtt ehhez hasonlítja. Legfeljebb öt fájl tárolódik. Semmi nem kerül elküldésre, és semmi nem kérdez a beszállítótól: a fájlt kézzel kell hozzáadni.
- **Mit mond.** A rövid tételek kerülnek előre: „Hiány: 120 EA”, „Szállítási idő: 21 nap”, „Visszarendelés alatt”, „Eltérő mértékegység”, „Nincs készletadat” vagy „Raktáron”. A {{ui:Longest wait wanted (days)}} 14-nél indul.
- **Rendelési lista.** A {{ui:Order list (CSV)}} letölti a hiányos tételeket a hiány mértékével, a beszállítóval és a szállítási idővel.
- **Árak a Könyvtárba.** Ha a fájl árakat tartalmaz, a {{ui:Prices into the Library}} beállítja az azonos nevű és mértékegységű Könyvtár-tétel anyagárát. A mennyiségkimutatásba az árak a Könyvtárból történő újraárazással kerülnek át.
- **A Problémák panelen.** A hiány figyelmeztetés, a hosszú várakozás megjegyzés, a „Beszállítói készlet” alatt. Egyet indoklással elfogadhat; az indoklás a mennyiségkimutatásban mentődik. Lásd: [Beszállítói készlet és szállítási idők ellenőrzése](topic:supplier-stock).

### MI-asszisztensek

- **Eszközök mindhárom funkcióhoz.** Ha a {{ui:Settings}} menüben az asszisztensek engedélyezve vannak, az asszisztens be tudja olvasni a jelmagyarázatot (`legend_open`), el tudja indítani a számlálást (`legend_count_start`, majd `legend_count_status` és `legend_count_result`), és hozzá tudja adni (`legend_count_add`, ami előzetesen meg is mutathatja). Be tudja olvasni a megjegyzett árakat (`prices_list`), és árazni tud belőlük (`prices_apply`, ami szintén tud előnézetet mutatni), valamint be tudja olvasni a beszállítói ellenőrzést (`supply_check`). A beszállítói fájl hozzáadását továbbra is kézzel kell elvégezni. Lásd: [MI-asszisztensek használata a TakeoffCraft-tal](topic:use-with-ai-assistants).

### Minden alkalmazásban

- **Nyelvek.** Összesen ötvennégy nyelv; tíz új: litván, lett, bosnyák, marathi, telugu, albán, afrikaans, filippínó, szuahéli és üzbég. Az angoltól eltérő nyelvek gépi piszkozatok, amíg anyanyelvi lektor el nem olvasta őket.
- **Beviteli eszközök.** A {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} beállítja, hogy az érintőpad, az egér oldalsó gombjai, a toll, a 3D-egér, a játékvezérlő vagy a MIDI-vezérlő mit tegyen, minden alkalmazásban vagy csak egyben. Lásd: [Érintőpad, 3D-egér vagy vezérlő használata](common:input-devices).
- **Eszköztársorok.** A {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} menüben a {{ui:Wrap}} (az indulás), a {{ui:2 rows}} és a {{ui:1 row}} közül választhat; a nem férő csoportok oldalra görgethetők. Lásd: [A panelek elrendezése](common:arrange-panels).
- **Problémák panel.** A közös figyelmeztetés- és megjegyzéspanel mostantól a fent leírt beszállítói készlet-ellenőrzést is tartalmazza a többi ellenőrzés mellett.
- **Bővítmények.** A bővítmények követik a fiókjának listáját. Lásd: [Bővítmények és a fiók listája](common:addons-basics).
- **Csatlakoztassa az MI-t.** A CadCraft Studio a központ: csatlakoztassa egyszer az MI-asszisztensét mind a nyolc alkalmazáshoz. A Studio-nak saját MI-je nincs.

## Javítva a 0.8.1 verzióban

- **DWG osztályok szakasza.** A DWG-fájl osztályok szakaszát hibás típusként olvasta be a program. Ez javítva a TakeoffCraft-ban és négy másik alkalmazásban.
- **A Studio futás közben is válthat nyelvet.** Korábban a Studio és a csomagolt kiadásai csak angolul voltak elérhetők. Ez az asztali változaton nem minden platformon lett tesztelve; jelezze, ha a nyelv nem változik.

## Ebben a verzióban még nincs

- **Nincs kódaláírás.** A Windows figyelmeztethet; Macen először kattintson jobb gombbal, és válassza a {{ui:Open}} parancsot. A bolti kiadások (Microsoft Store, Google Play, App Store) szünetelnek, az iPad- és iPhone-kiadás nem lett újraépítve a 0.8.1-hez.
- **Studio frissítések.** A Windows-telepítő és a Linux-csomagok naponta egyszer ellenőriznek, és előbb kérdeznek. A hordozható zip csak értesít, a macOS és az APK nem frissül magától. A 0.8-as macOS .dmg a kiadást követi.
- **Csatlakoztassa az MI-t.** Az egykattintásos csatlakozás a Studion belül, a böngészőben használható, üzemeltetett MI-csatlakozó, a saját API-kulcs a Studion belül és a közzétett MCP-csomag nincs ígérve ebben a verzióban.
- **Mindent megszámol.** Olyan szimbólumokat igényel, amelyek a jelmagyarázattal azonos módon vannak rajzolva; a szimbólum, amelyen fal vagy hosszú vonal halad át, kimaradhat. A tükrözött szimbólumok nem találhatók meg, és a léptékezés nélküli, más méretben rajzolt lapot a jelmagyarázat méretében keresi. Az első lapon ellenőrizze a találatokat, mielőtt a többinek megbízna.
- **Beszállítói készlet.** A készletadatok csak annyira frissek, mint a hozzáadott fájl. Az ellenőrzés soha nem kérdez a beszállítótól.
- **Nyelvek.** A tamil alkalmazássáv túlcsordul.

Minden más a [Még nincs elkészítve](topic:not-built-yet) oldalon található. Az előző kiadásról lásd: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).
