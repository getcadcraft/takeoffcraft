---
title: Mennyiségkimutatási tételek létrehozása
summary: Vonalas, terület- és darabszámtételek készítése, valamint mértékegységük, magasságuk vagy mélységük, hulladékuk, anyag- és munkadíjuk beállítása.
keywords: brigád, termelékenység, brigádlétszám, bér, óra, munkaóra, munkásóra, brigádnap, munkadíjóra, tétel, új tétel, feltétel, több feltétel, egyéb mérés, több típus, helyiség, vonalas, terület, darabszám, egység, magasság, mélység, hulladék, anyag, munkadíj, egységár, szín, költség
from: 7fa5effc
---

Egy **tétel** olyan dolog, amelyet mér és áraz: egy falfajta, egy padlóburkolat, egy mennyezet, egy ajtó, egy világítótest. Minden jel, amelyet rajzol, egy tételhez tartozik. Más programok ezeket feltételeknek nevezik.

Minden tételnek van típusa, és más fajta jeleket is felvehet (lásd: [Egy tétel, többféle jel](topic:create-items#one-item-several-kinds-of-marks)):

| Típus | Amit rajzol | Amit kimutat | Mértékegységek |
|---|---|---|---|
| Vonalas | Összefüggő pontsorok | Hossz, szakaszok száma, és falterület, ha van magassága | LF vagy m |
| Terület | Zárt körvonalak, kivágásokkal | Terület, kerület, területek száma | SF, SY, SQ, ac, ha vagy m² |
| Darabszám | Egy kattintás dolgonként | Hány darab | EA |
| Beírt mennyiség | Semmi: a mennyiséget beírja | A beírt szám (vagy a CivilCraftból átvett) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha vagy m² |

## Beírt mennyiségek (rajz nélkül)

Egy becslésben vannak olyan tételek, amelyeket soha nem rajzolnak meg: mobilizálás, engedélyek, tartalék, átalányáras alvállalkozás, valamint a CivilCraft által kiszámított feltöltés és bevágás. Ezeket készítse el **Beírt mennyiségként**:

1. Válassza az {{ui:Új tétel}} gombot, írjon be egy nevet, válassza a {{ui:Beírt mennyiség (rajz nélkül)}} lehetőséget, majd a {{ui:Hozzáadás}} gombot.
2. A tételszerkesztőben válassza ki az {{ui:Egység}} mezőt (LS átalányárhoz), és írja be a {{ui:Mennyiség}} értékét: `1`, `2.5` vagy `1,250`.
3. Állítsa be a hulladékot és az egységárakat, ahogy bármely más tételnél. Egy összetett tétel képletei a `Q` betűt használják a mennyiségre, például `ceil(Q / 12)` teherautó-fordulóhoz.

A beírt mennyiség nem kap jeleket, és soha nem teszi a becslést hiányossá. Ha a mennyiségkimutatásban vannak ajánlati területek, a szerkesztőben megjelenik az {{ui:Ajánlati terület}} is: a mennyiség ekkor ebbe a területbe, annak alternatíváiba és összegeibe számít be, ahogy ott egy jel is. A más alkalmazásból átvett mennyiségek megmutatják, honnan származnak, lásd: [Földmunka és pontmagasságok](topic:earthwork#cut-and-fill-from-civilcraft).

## Tétel készítése

1. A jobb oldali {{ui:Tételek}} panelen válassza az {{ui:Új tétel}} gombot.
2. Írjon be egy nevet, például `Belső fal A típus` vagy `Szőnyegpadló`.
3. Válassza ki a típust: {{ui:Vonalas (hossz)}}, {{ui:Terület}} vagy {{ui:Darabszám}}.
4. Válassza a {{ui:Hozzáadás}} gombot (vagy nyomja meg az {{key:Enter}} billentyűt).
   A tétel megjelenik a listában a saját színével, ez lesz az a tétel, amellyel rajzol, a szerkesztője pedig a lista alatt nyílik meg. Az állapotsor megmondja, melyik eszközt válassza következőnek.

Az űrlapban az {{key:Esc}} billentyű megnyomásával tétel hozzáadása nélkül zárhatja be.

:::tip
Ha előbb mérőeszközt választ, a TakeoffCraft a megfelelő típus utolsó tételét használja, vagy megnyitja az {{ui:Új tétel}} űrlapot a típus előre kiválasztásával.
:::

## Válassza ki a rajzoláshoz használt tételt

Kattintson a lista egyik tételére. Ez lesz az a tétel, amelyhez az új jelek tartoznak, a jelei pedig minden lapon kiemelve látszanak, a többi halványul. Ha a megnyitott lapon nincs egyetlen jele sem, a TakeoffCraft egy olyan lapra ugrik, amelyiken van. Kattintson újra a tételre a kiemelés megszüntetéséhez; a tétel attól még a rajzoláshoz használt tétel marad.

A {{ui:Kijelölés}} eszközzel egy jelre kattintva annak tétele is az aktuális tétel lesz.

## A tétel beállítása

A tételszerkesztő (**Tétel: (név)**) ezeket a mezőket tartalmazza. Mindegyik a mező elhagyásakor vagy az {{key:Enter}} megnyomásakor mentődik, és minden változtatás visszavonható.

| Mező | Mit csinál |
|---|---|
| {{ui:Név}} | Megjelenik a listában, a táblázatokban és az exportokban. |
| {{ui:Beírás}} | Vonalas, Terület vagy Darabszám. Zárolt, ha a tételnek már vannak jelei („A jelekkel rendelkező tétel megtartja a típusát”). |
| {{ui:Szín}} | A jelei színe a képernyőn és a megjelölt PDF-ben. |
| {{ui:Egység}} | Ebben az egységben jelenik meg a mennyiség: LF vagy m vonalasnál; SF, SY, SQ, ac, ha vagy m² területnél; EA darabszámnál. |
| {{ui:Mérje még}} | Az egyéb jelfajták, amelyeket a tétel felvesz, mindegyik saját mértékegységgel. Lásd lent. |
| {{ui:Magasság}} (vonalas) | Falmagasság. A tétel ekkor a falterületet is megjeleníti (hossz × magasság). A BimCraft modellből származó szakaszok a nyílásaikat is hordozzák: azokat egyszer kivonja, és a tétel a bruttó területet, a nyílásokat és a nettó területet közli. Ha a BimCraft-projekt mérési módszert választott, a mérés itt is ezzel történik (a megjegyzés megnevezi a módszert a forrásával együtt, és kimondja, hogy mennyiségi felmérő nem ellenőrizte); a módszer a TakeoffCraftban nem módosítható. Egy falfajtából származó téglák vagy blokkok és habarcs két összetevőként érkeznek: a rendelendő egységek és a habarcs térfogata. |
| {{ui:Mélység}} (terület) | Mélység vagy vastagság, az összetett tétel képleteiben használva (például betontérfogat). |
| {{ui:Hulladék %}} | Az árazás előtt a mennyiséghez adódik: 10 esetén mennyiség × 1,10. |
| {{ui:Anyag $/LF}} | Anyagköltség egységenként. A címke az egységet követi: $/SF, $/EA stb. |
| {{ui:Munkadíj $/LF}} | Munkadíj egységenként. |
| {{ui:CSI-szám}} | A CSI MasterFormat-száma, például `09 21 16` (vagy csak a főcsoport, `09`). A munkafüzet főcsoport szerinti munkalapja ez alapján csoportosítja a költségeket. A [szakági csomagok](topic:trade-packs) tételei ezzel már rendelkeznek. |

Magasságnál és mélységnél imperiális egységekben láb és hüvelyk (`9'-0"`, `8' 6"`) vagy tizedes láb (`9`), metrikus egységekben méter (`2.7`, `2700 mm`) adható meg. Az egységárak olyan összegeket fogadnak el, mint `12.50` vagy `$1,250`, legfeljebb négy tizedesjegyig. Lásd: [Hossz, egységár és százalék megadása](topic:entry-formats).

A mezők alatt a **Mérve** rész mutatja azokat az összegeket, amelyeket a tétel képletei használhatnak, a betűikkel együtt: vonalasnál hossz (L), szakaszok (N), falterület (A); területnél terület (A), kerület (P), területek (N); darabszámnál darabszám (N).

## Egy tétel, többféle jel

Bizonyos dolgokat többféleképpen mérünk: egy helyiségnek van padlója (terület), a falai mentén lábazata (hossz) és ajtói (darabszám). Három tétel helyett készítsen egyet:

1. Készítse el a tételt a fő típusával, például `101-es helyiség` nevű területtételként.
2. A szerkesztőjében a {{ui:Mérje még}} alatt jelölje be a {{ui:Vonalas}}, a {{ui:Darabszám}} négyzetet vagy mindkettőt. Mindegyik mellé kerül egy mértékegység.
3. Rajzoljon bármely olyan eszközzel, amelynek a fajtáját a tétel felveszi: ha a `101-es helyiség` az aktuális, a {{ui:Terület}} a padlóját rajzolja meg, a {{ui:Vonalas}} a lábazatát, a {{ui:Darabszám}} az ajtóit. A TakeoffCraft nem kér másik tételt.

A tétellista minden mennyiséget mutat (`50.00 SF + 2 EA`). A mennyiségek táblázatában a tétel sorában van a fő mennyiség, a többi jelfajta pedig saját sort kap alatta, például **101-es helyiség (darabszám)** néven, saját hulladék- és anyag- és munkadíj-egységárral. Az exportok, a laponkénti táblázat és a megjelölt PDF jelmagyarázata ugyanígy sorolja fel őket.

A fő típus mezői a fő típusé maradnak: a magasság vagy mélység, a dőlés, a levonások és a 3D-s alak csak az ő jeleire vonatkozik. Területi tételhez rajzolt lábazati szakasz egyszerűen, az alaprajz mentén mérődik, és 3D-ben laposan jelenik meg. Az összetett képletek a fő típus összegeit használják.

Egy jelfajta csak akkor vehető ki a bejelölésből, ha a tételnek nincs ilyen jele: törölje őket, vagy a **Kijelölt jel** alatt helyezze át egy másik tételhez. A jelek bármely olyan tételbe áthelyezhetők, amely felveszi a fajtájukat.

Lejjebb található az {{ui:Összetett tétel}}: összetevők, például gerendák vagy lapok, mindegyiknek saját képletével és egységárával. Lásd: [Összetett tételek és képletek](topic:assemblies).

Az alján a {{ui:Mozgatás felfelé}} és a {{ui:Mozgatás lefelé}} a tétel helyét változtatja meg a listában és az exportokban, a {{ui:Tétel törlése}} pedig az összes jelével együtt eltávolítja (rákérdezés után; visszavonható).

A területi tételeknek van még **Dőlés** (a tetősíkok lejtésen mérve: [Tetők és lejtők](topic:roofs-and-slopes)) és **Levonás** (jeleik más tételek területéből vonódnak le: [Területek mérése](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)) beállítása. A vonalas tételeknek **Lejtés** (Szint, Oromél, Gerinc vagy Völgy) és az oromélekhez és gerincekhez **Dőlés** is van.

## Egységárak a táblázatban

Az {{ui:Hulladék %}}, az anyag- és munkadíj-egységárakat közvetlenül beírhatja az alul lévő {{ui:Mennyiségek}} táblázatba ({{ui:Tételenként}}). Ez ugyanaz a beállítás, mint a szerkesztőben.

## Az árazás menete

Minden tételre és minden összetett tétel-összetevőre:

1. **Hulladékkal** = mennyiség × (1 + hulladék %).
2. **Anyag** = hulladékkal × anyag egységenként, cent pontosságra kerekítve.
3. **Munkadíj** = hulladékkal × munkadíj egységenként, cent pontosságra kerekítve.
4. **Összesen** = anyag + munkadíj.

A {{ui:Munka összesen}} minden tételt és összetevőt összead. Egy tétel saját egységárral és összetett tétellel egyszerre is rendelkezhet; mindkettő beleszámít, ezért ha az összetevők hordozzák a költséget, a tétel egységárait hagyja 0-n.

## Munkadíj brigád szerint

Egységnyi munkadíj helyett a tétel munkadíja brigádból is származhat: mennyit tesz ki óránként, hány ember dolgozik és mennyit keres mindenki. A tételszerkesztő {{ui:Munkadíj brigád szerint}} része alatt jelölje be a {{ui:Munkadíj számítása brigádból}} négyzetet, és töltse ki:

| Mező | Példa |
|---|---|
| {{ui:Termelékenység}} | `20` LF óránként (a tétel egységében) az egész brigádra |
| {{ui:Brigádlétszám}} | `2` fő |
| {{ui:Bér $/óra fejenként}} | `45` |

A TakeoffCraft a hulladékkal számított mennyiségből kiszámítja:

- **brigádórák** = mennyiség ÷ termelékenység (110 LF ÷ 20 = 5,5),
- **munkaórák** = brigádórák × brigádlétszám (11),
- **brigádnapok** = brigádórák ÷ 8 (0,69),
- **munkadíj** = munkaórák × bér ($495.00).

A szerkesztő megmutatja az eredményt és az ebből adódó egységárat ($4.50/LF). A tétel saját munkadíj-egysége ekkor csak olvasható a szerkesztőben és a táblázatban. A {{ui:Mennyiségek}} táblázat fejléce hozzáadja a munka munkaóráit és brigádnapjait. Az exportok feljegyzik minden brigád óráit, a munkafüzetben pedig a munkadíj-cella a brigádra épülő képlet (`ROUND(F2/20*2*45,2)`). Az egységárhoz való visszatéréshez törölje a jelölést.

## Metrikus tételek

Mértékegységnek válassza az m-et (vonalas) vagy az m²-t (terület). A mennyiségek, magasságok és képletértékek ekkor méterben jelennek meg. A lap méretaránya bármely előre beállított vagy kalibrált lehet; a mértékegységek és a méretarányok egymástól függetlenek.

## Tovább

- [Vonalas szakaszok mérése](topic:measure-linear)
- [Területek mérése kivágásokkal](topic:measure-areas)
- [Darabszámlálás kézzel](topic:count-by-hand)
