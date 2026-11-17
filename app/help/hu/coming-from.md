---
title: Átállás más mennyiségkimutató szoftverekről
summary: Hogyan feleltethetők meg a dedikált mennyiségkimutató programok és a PDF-jelölő eszközök szokásai a TakeoffCraftnak, és melyek azok az eltérések, amelyek megzavarhatják.
keywords: átállás, migrálás, feltételek, tételek, mérőeszközök, jelöléslista, mennyiségi kapcsolat, mennyiségkimutatási szokások, különbségek, összehasonlítás
from: 12004ce5
---

Ha a PlanSwiftben vagy a Bluebeam Revu mérőeszközeivel végzett mennyiségkimutatást, a TakeoffCraft nagy része ismerősnek fog tűnni: tervkészlet, lapononkénti méretarány, mérendő elemek és árazott végösszeg. Az egyes részek összeillesztése bizonyos pontokon eltér, ezek alább találhatók.

Ha a PlanSwiftet vagy az On-Screen Takeoffot ismeri, válassza a {{ui:Felmérőasztal}} menüstílust a {{ui:Beállítások}} › {{ui:TakeoffCraft}} › {{ui:Menük, billentyűk és egér}} alatt: menüsor Fájl, Szerkesztés, Nézet, Méretarány, Mennyiségkimutatás, Tételek, Jelölés és Exportálás menüpontokkal, a mennyiségkimutatási eszközök sorával, a lapsávon pedig a méretarány-előbeállításokkal. Lásd: [Menük, billentyűk és egér](topic:menus-keys-and-mouse).

## Szokások megfeleltetése

| Ez a megszokása | A TakeoffCraftban |
|---|---|
| A terveket tároló munka vagy projekt megnyitása (PlanSwift) | Nyissa meg a PDF-eket és a `.takeoff.json` projektet egymás mellett. A projekt csak a mennyiségkimutatást tárolja; a PDF-ek az Ön saját fájljai maradnak. |
| Jeleléslista megjegyzésekkel, felhőkkel és kiemelésekkel (Bluebeam) | {{ui:Jelölés}} a lapsávon: megjegyzések, felhők és kiemelések állapottal (Nyitott, Megválaszolva, Lezárt), a **Jelölések** alatt listázva, a jelölt PDF-ben megrajzolva. Lásd: [Megjegyzések, felhők és kiemelések](topic:markups). |
| A PDF-en belül jelölésként mentett mérések (Bluebeam) | A mennyiségkimutatás a `.takeoff.json` fájlban van. A {{ui:Jelölt PDF}} olyan másolatot ír, amelybe a mennyiségkimutatás rá van rajzolva, megosztásra; a {{ui:PDF a mennyiségkimutatással}} olyan másolatot ír, amely hordozza a mennyiségkimutatást, hogy a TakeoffCraftban újra megnyitható legyen. |
| Mennyiségkimutatási tételek (PlanSwift), egyéni mérőeszközök az eszközkészletben (Bluebeam) | **Tételek** a {{ui:Tételek}} alatt: név, típus, szín, egység, magasság vagy mélység, hulladék, díjtételek. |
| Képletekkel ellátott alkatrészek és összetett tételek (PlanSwift) | A tétel {{ui:Összetett tétel}} része: összetevők képlettel, amely a `L H A N P` változókat használja. |
| Az oldal méretarányának beállítása vagy kalibrálás (mindkettő) | {{ui:Előbeállítás}} lista vagy {{ui:Kalibrálás}} a {{ui:Méretarány}} csoportban, lapononként. Az {{ui:Ellenőrzés}} egy ismert méretet mér. |
| Egy méretarány alkalmazása oldaltartományra | Még nem: állítsa be lapononként. |
| Eltérő méretarányú nézetablakok egy lapon (Bluebeam) | Még nem: lapononként egy méretarány. |
| Polivonal-hossz és területeszközök (Bluebeam), vonalas és területi mennyiségkimutatás (PlanSwift) | {{ui:Vonalas}} ({{key:L}}) és {{ui:Terület}} ({{key:A}}). |
| A Shift lenyomva tartása egyenes vonalakhoz | A {{key:Shift}} 45°-os lépésekre fogja, ugyanez az elv. |
| Fogás a rajz vonalaihoz | Alapértelmezetten be van kapcsolva: végpontok, felezőpontok, metszéspontok és a vonal legközelebbi pontja. A {{key:F3}} billentyűvel kikapcsolható, mint a CAD programokban. |
| Darabszám-eszköz (mindkettő) | {{ui:Darabszám}} ({{key:C}}). |
| Szimbólumok vizuális keresése (Bluebeam) | {{ui:Automatikus darabszám}} ({{key:S}}): jelöljön be egy szimbólumot, nézze át, adja hozzá. |
| Kivágások vagy levonások területekben | {{ui:Kivágás}} ({{key:X}}) a kijelölt területen, és kerek kivágások. |
| Levonások vonalas szakaszokon | Húzza át egyenesen a szakaszt, majd a nyíláshoz nyomja meg az {{key:E}} billentyűt ({{ui:Levonás}}). Lásd: [Vonalas szakaszok mérése](topic:measure-linear). |
| Ívszakaszok polivonalban | {{ui:Ív}} ({{key:R}}): kattintson a görbe egy pontjára, majd a végére. |
| A jeleléslista mennyiségi oszlopokkal (Bluebeam) | A {{ui:Mennyiségek}} táblázat, a {{ui:Tételenként}} vagy a {{ui:Lapok szerint}} nézetben. |
| Árazott költségbecslő táblázat (PlanSwift) | Ugyanaz a táblázat: hulladék, anyag és munkadíj egységenként, kiterjesztett összegek, {{ui:Munka összesen}}. |
| Exportálás Excelbe | {{ui:XLSX}} élő képletekkel, vagy {{ui:CSV}}. |
| Az Esc billentyű az eszköz leállításához | Az {{key:Esc}} megszakítja, és visszatér a {{ui:Kijelölés}} eszközre. |
| Jobb gombbal a befejezéshez | Itt is a jobb gomb fejezi be a szakaszt, vagy zárja le a területet. Nincs jobb gombos menü. |

## Eltérések, amelyek megzavarhatják

**A mennyiségkimutatás nincs a PDF-ben.** Semmi, amit tesz, nem változtatja meg a PDF-eket. Mentse a `.takeoff.json` fájlt, és tartsa a rajzokkal együtt. Ha valakinek a jelölt PDF-et küldi, nem küld szerkeszthető mennyiségkimutatást: küldje el a projektfájlt és az eredeti PDF-eket, vagy a [PDF a mennyiségkimutatással](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf) változatot.

**A PDF-eket tartalom, nem név alapján párosítja.** Egy átdolgozott lap, amelyet a régi fájlnév fölé mentettek, a TakeoffCraft számára új fájl, méretarány és jelölés nélkül. A régi jelölései a régi változaton maradnak, és tovább számolnak. Lásd: [Mennyiségkimutatás mentése és újra megnyitása](topic:save-and-reopen#when-a-pdf-has-changed).

**A méretarány nélküli jelölések kimaradnak, nem nullaként számítanak.** Ha egy lapnak nincs méretaránya, szakaszai és területei nem számítanak be, és a táblázatban „Hiányos” áll. Sok programban csak 0-t látna. Lásd: [Méretarány beállítása](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Nincs oldalméret-találgatás.** Az előbeállítások azt feltételezik, hogy a PDF teljes méretben van nyomtatva. A fél méretű vagy „oldalra illesztett” PDF-hez {{ui:Kalibrálás}} kell. Mindig használja az {{ui:Ellenőrzés}} funkciót.

**Egy tétel, egy fő típus, több, ha kéri.** Egy tétel vonalas, területi vagy darabszámi; típusa zárolódik, amint van jelölése. Az a feltétel, amely területet és kerületet is ad, területi tétel: kerülete a `P` változó. A falnak hossza és területe is van: vonalas tétel magassággal. Többfeltételes tételhez, például padlós, lábazatos és ajtós szobához jelölje be a többi fajtát a **Mérje még** alatt: mindegyik külön sorban árazódik. Lásd: [Egy tétel, több fajta jelölés](topic:create-items#one-item-several-kinds-of-marks).

**A képletek az összesítéseken futnak.** Az összetett tétel képletei a tétel minden lapra kiterjedő összesítéseit használják, nem szakaszonként. Az `N` (a szakaszok vagy területek száma) a szakaszonkénti pluszokra szolgál, például falonként egy extra borda.

**A kerület tartalmazza a kivágásokat.** Egy terület `P` értéke hozzáadja a lyukai széleit. Lásd: [Területek mérése kivágásokkal](topic:measure-areas#read-the-area).

**Húzás mozgat.** A bal gombos húzás a lapon mozgatja a nézetet, minden eszközben, kivéve az {{ui:Automatikus darabszám}} eszközt. Soha nem kell pásztázó eszközre váltania. A görgő nagyít, nem görget.

**Helyreállítási másolat, nem felhő.** A TakeoffCraft megőrzi a munkája másolatát ebben a böngészőben, és összeomlás után felajánlja ([Ha a lap vagy a böngésző leáll](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), de a mennyiségkimutatást Önnek kell mentenie: {{key:Mod+S}}. A felhőalapú mentés még nem érhető el.

**Minden a böngészőben fut.** Nincs mit telepíteni, és a terveket soha nem töltik fel. Asztali alkalmazásként a TakeoffCraft a CadCraft Studióban érhető el a másik hét alkalmazással együtt.

## Még nincs itt

A lapononkénti méretarány-tartományok még nincsenek kész. A teljes listáért és a helyette használható megoldásokért lásd: [Még nem elkészült](topic:not-built-yet).
