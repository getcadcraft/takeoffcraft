---
title: A mérés ellenőrzése 3D-ben
summary: Lássa a nyitott lap falait, födémeit és darabszámjeleit a rajzon állva, forgassa őket körbe, és kattintson egyre, hogy kijelölje a jelét.
keywords: png, kép, képfájl, pillanatkép, egymásra rakás, emeletek, szintek, homlokzat, glb, gltf, 3D exportálás, falvastagság, alapmagasság, nyílás, ajtófej, 3d, három dimenzió, ellenőrzés, nézet, falak, falmagasság, födém, mélység, térfogat, körbeforgatás, modell, kiválasztás, izometrikus, perspektíva
from: fb16b4f7
---

A 3D-nézet ellenőrzés, nem második rajz: a lap mérését a képernyőn, magán a lapon állítja fel, így egy hiányzó fal, duplázódó födém vagy eltévedt darabszám azonnal látszik.

Mielőtt elkezdi: a lapnak léptékkel kell rendelkeznie ([Lépték beállítása](topic:set-the-scale)). A magasságokhoz és mélységekhez valódi láb kell, így léptéknélküli lapon a {{ui:3D}} ezt jelzi, és a lapos lapon marad.

## A 3D-nézet megnyitása

1. Jelenítse meg az ellenőrizni kívánt lapot.
2. Válassza a {{ui:3D}} gombot a lap nevét és léptékét mutató sávon, vagy nyomja meg a {{key:3}} billentyűt.
   Először a 3D-nézet betöltése eltart egy pillanatig. A lap a talajon rajzolódik ki, és a mérés minden tétele a tétel színében áll rajta.
3. A visszatéréshez válassza ismét a {{ui:3D}} gombot, a {{ui:Vissza a laphoz}} lehetőséget, vagy nyomja meg a {{key:3}} billentyűt. Rajzeszköz (Vonal, Terület, Darabszám stb.) választása is visszavisz, mert a jelek a lapos lapon készülnek.

A képernyőn a lap látszik; lapot a lapok listájában vagy a {{key:PageDown}} és {{key:PageUp}} billentyűkkel válthat, a 3D-nézet pedig követi. Több emelet egyszerre való megtekintéséhez egymásra rakhatja őket (lent).

## Amit lát

| Jel | 3D-ben |
|---|---|
| Vonalas szakasz, magassággal rendelkező tétel | Ilyen magasságú fal a szakasz mentén. A görbe szakaszok a görbét követik. |
| Vonalas szakasz, magasság nélküli tétel | Vonal a lapon. Adjon a tételnek magasságot a **Tétel** alatt, hogy felálljon. |
| Terület, mélységgel rendelkező tétel | Ilyen mélységű födém, kivágásaival nyitva. |
| Terület, mélység nélküli tétel | Vékony, 2"-es lemez, hogy látszódjon. |
| Darabszám | Kis oszlop minden számlált pontnál. |

A magasság a vonalas tétel {{ui:Magasság}} mezője, a mélység a területi tétel {{ui:Mélység}} mezője, a **Tétel** alatt (lásd: [Mérési tételek létrehozása](topic:create-items)). Ha megváltoztatja, a 3D-nézet azonnal frissül. A lapnév alatti megjegyzés megmondja, mit tartalmaz a lap, például „Ez a lap 3D-ben: 2 fal, 1 födém, 3 darabszám”, valamint azt, hány szakasznak vagy területnek nincs magassága vagy mélysége. A kattintások átmennek rajta a nézetig.

A számok 3D-ben nem változnak: a fal területe a pontos hossza szorozva a magasságával, a födém térfogata pedig nettó területe (körvonal mínusz kivágások, a görbék pontosan) szorozva a mélységgel. A görbéket csak a képernyőn rajzoljuk rövid egyenes szakaszokkal.

## Körülnézés

| Művelet | Mit tesz |
|---|---|
| Húzás, vagy húzás a középső gombbal | Körbeforgatás a mérés körül. |
| {{key:Shift}} + húzás, vagy húzás a jobb gombbal | Eltolás. |
| Egérgörgő | Nagyítás és kicsinyítés a mutatónál. |
| Kétujjas csúsztatás az érintőpadon | Körbeforgatás ({{key:Shift}} eltol). A csippentés nagyít. |
| {{ui:Izometrikus}}, {{ui:Felül}}, {{ui:Elöl}}, {{ui:Hátul}}, {{ui:Balra}}, {{ui:Jobbra}}, {{ui:Alul}} | Szabványos nézetek, a méréshez igazítva. A 3D-nézet az {{ui:Izometrikus}} nézetben nyílik meg. |
| {{ui:Perspektíva}} | Perspektíva be- vagy kikapcsolása (kikapcsolva párhuzamos). |
| {{ui:Nagyítás a kiterjedésre}} vagy {{key:F}} | A teljes lap. |
| {{ui:Lap}} | A talajon lévő rajz megjelenítése vagy elrejtése. |
| A nézetkocka, jobb felül | Kattintson egy lapra, élre vagy sarokra, hogy onnan nézzen; húzza a körbeforgatáshoz; húzza az iránytű gyűrűjét az elforgatáshoz; a házikó gomb visszavisz az {{ui:Izometrikus}} nézetbe. |

A sarokban nézetkocka, egy kis X, Y, Z tengelyikon, vagy semmi sem látszik: a {{ui:Beállítások}} alatt, a TakeoffCraft lapon, a **Sarokjelző** részben választhat ([TakeoffCraft-beállítások](topic:settings)). A lapos lapon nincs sarokjelző.

:::touch
Egy ujjal körbeforgat; két ujjal csippentéssel nagyít, és mozgatással eltol. Koppintás kijelöl.
:::

## Vastagságú, alapmagasságú falak és nyílások

A magassággal rendelkező vonalas tétel vékony szalagként áll. Hogy valódi falként lássa, adja meg a tétel alakját a beállításainak **3D-ben** része alatt:

- **Falvastagság** (8", 0,2 m): a fal testté válik, a rajzolt vonalra központosítva, gérvágású sarkokkal.
- **Alapmagasság**: a fal ennyivel a padló fölött kezdődik (áthidaló, felső szekrénysor). Területi tételeknek is van: például mennyezet 9'-0" magasságban.
- **Nyílásfelső**: a levont szakasz (egy ajtó, [Szakasz egy részének levonása](topic:measure-linear#deduct-a-part-of-a-run)) a fal ezen magasság feletti részét megtartja, így az ajtó ajtóként látszik. Nélküle a levont szakasz rést hagy a tetejéig.

Ezek csak a 3D-nézet alakját változtatják: a mennyiségek (hossz, falterület, költségek) változatlanok maradnak.

## Emeletek egymásra rakása

1. Nyissa meg az összes emelet PDF-jét.
2. A 3D-nézetben válassza a {{ui:Szintek…}} lehetőséget, és írja be minden emelet magasságát, például `0` a földszinthez és `12'` a következőhöz. Az üresen hagyott lapot kihagyja.
3. Válassza az {{ui:Egymásra rakás}} lehetőséget. Minden szintet tartalmazó lap a mérését a magasságán mutatja; a képernyőn lévő lap a saját emeletén fekszik, a többi körvonalazva látszik. A megjegyzés megmondja, hány emelet van egymásra rakva.

A lapok a lapon elfoglalt helyük szerint igazodnak, így ez azokra az alaprajzokra működik, amelyeket azonosan plottoltak (azonos lapméret és pozíció). A szinttel rendelkező, de lépték nélküli lap kimarad, és a megjegyzés ezt jelzi. Egy lapot egyenként a {{ui:Egymásra rakás}} újbóli választásával kezelhet. A szintek a méréssel együtt mentődnek.

## A 3D-nézet mentése képként

Válassza a 3D-sávon a {{ui:PNG}} gombot a nézet képéért, ahogy a képernyőn látszik (`… 3D.png`); a {{key:Shift}} + kattintás a {{ui:PNG}} gombon kétszeres méretű képet készít (`… 3D@2x.png`), nyomtatáshoz.

## A 3D-nézet mentése modellként

Válassza a 3D-sávon a {{ui:GLB}} gombot. Ekkor egy `.glb` fájl (glTF, bináris) készül arról, amit a nézet mutat — a képernyőn lévő emeletről, vagy az összes egymásra rakott emeletről —, amelyet más 3D-programok megnyitnak: jelenként egy objektum, a tétel nevét viselve, a tétel színében, méterben, az Y tengellyel felfelé. Maga a lap és a körvonalak nincsenek benne.

## Jel kijelölése a 3D-ből

Kattintson egy falra, födémre, lemezre vagy oszlopra. Jele kijelölt jellé válik, pontosan úgy, mintha a lapon kattintott volna rá: megjelenik a **Kijelölt jel** alatt, a tétele lesz az aktuális, az állapotsor pedig megadja a hosszát és magasságát, vagy a területét, mélységét és köbyardját. A {{key:Shift}} + kattintás jeleket ad a kijelöléshez vagy vesz el onnan. A {{key:Delete}} törli a kijelölt jeleket, a {{key:Mod+Z}} visszahozza őket; az {{key:Esc}} semmit sem jelöl ki. A lapra visszatérve ugyanezek a jelek kijelölve maradnak.

:::tip
A rajz követi a témát: a Modell nézetben a talajon lévő lap sötét lesz, akárcsak a lapos nézet.
:::
