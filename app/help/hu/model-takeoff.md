---
title: Mennyiségek levétele épületmodellből
summary: Nyissa meg az építész IFC-modelljét, nézze meg 3D-ben, válasszon ki falakat, födémeket, ajtókat és a többit típus, anyag, réteg vagy méret szerint, és vigye át darabszámukat, hosszaikat, területeiket és térfogataikat a mennyiségkimutatásba. A modell újabb példánya ugyanazokat a mennyiségeket frissíti.
keywords: modell, modell mennyiségkimutatása, 3D-nézet, elemre kattintás, sor keresése, anyag, réteg, falrétegek, gipszkarton, szigetelés, ajtóméretek, ablakméretek, ajtó- és ablakkimutatás, csv, 3d, bim, ifc, rvt, épületmodell, mennyiségek, falak, födémek, ajtók, ablakok, oszlopok, helyiségek, típus szerint, szint szerint, frissítés, újabb modell, tervezési fázis
from: 8c4c12c9
---

Nem kell megvárnia a következő tervsorozatot. Amikor az építész elküldi az épületmodellt, nyissa meg itt, és vegye a mennyiségeket közvetlenül belőle. A modell a számítógépén olvasódik be; semmi nem kerül sehová.

## Lépések

1. Válassza a {{ui:Model}} lehetőséget az eszköztáron, és jelölje ki a modell `.ifc` fájlját, vagy nyissa meg a {{ui:Open plans}} lehetőséggel, mint bármely más fájlt.
2. A {{ui:Model takeoff}} kategóriánként és típusonként egy-egy sort nyit: falak fal-típus szerint, födémek födémtípus szerint, ajtók ajtótípus szerint, és így tovább. Minden sor mutatja a darabszámát és azt, hogy az adott kategória milyen mértékegységben mérődik.
3. Válassza a {{ui:Group by}} alatt a {{ui:Category}} lehetőséget gyors összesítéshez, vagy a {{ui:Category, type and level}} lehetőséget, hogy minden típust szintenként bontson.
4. Pipálja ki a nem kívánt sorokat. A {{ui:Find}} szűkíti a listát. A pipa eltávolítása egy sorról a 3D-képen is elrejti annak elemeit.
5. Adjon a modellnek egy {{ui:Model name}} nevet, amelyet a teljes munka alatt megtart, például a projekt nevét.
6. Válassza a {{ui:Add to the takeoff}} lehetőséget. Minden mennyiség típusos mennyiségként jelenik meg a tételek listájában. Nevezze el, árazza be, és csatoljon hozzá összeállításokat, mint bármely más tételhez.

## A modell megjelenítése 3D-ben

A {{ui:Show the model in 3D}} a modellt a táblázat fölé rajzolja, soronként egy színnel (a sor neve melletti színes jelzéssel). Húzással forgathatja, a {{key:Shift}} nyomva tartásával és húzással mozgathatja, a görgővel nagyíthat, a visszatéréshez pedig válassza az {{ui:Fit}} vagy a {{ui:Reset}} lehetőséget.

- **Kattintson egy elemre** a képen, és a sora kijelölődik a táblázatban; a sor összes eleme kivilágosodik, a többi halvány lesz. Ha ugyanerre az elemre újra kattint, és az több sorban is szerepel (egy fal a rétegeiben), a következő sor lesz kijelölve.
- **Kattintson egy sorra** a táblázatban, hogy kivilágítsa az elemeit. Újra kattintva, vagy a kép üres részére kattintva törli a kijelölést.
- A helyiségek nincsenek kirajzolva, mert egy helyiség térfogata eltakarná az épületet.
- Nagyon nagy modelleknél egyes elemekből csak egy doboz marad meg, hogy elférjen a memóriában; a panel megmondja, hány elemről van szó. A számok ettől nem változnak.

Ha ez a számítógép nem tud 3D-t rajzolni, a táblázat a régi módon működik.

## Csoportosítás anyag, réteg vagy méret szerint

A {{ui:Group by}} alatt három további lehetőség van:

- {{ui:Category and material}}: a rétegekből épített fal, födém vagy tető minden réteg anyagának külön sort ad, így a gipszkarton, a bordázat és a szigetelés külön árazható. Az egy anyagból álló épületrész az adott anyag sorába kerül, az anyag nélküli rész pedig a „Nincs megnevezett anyag” nevű sorban marad.
- {{ui:Category and layer}}: ugyanaz, a réteg vastagságával a sorban („Szigetelés, 100 mm”).
- {{ui:Category, type and door or window size}}: az ajtókat és ablakokat szélességük és magasságuk szerint bontja (például 3'-0" × 6'-8" vagy 914 × 2,032 mm).

Rétegnél a terület a fal saját felülete (vagy a födém, illetve a tető alaprajzi vagy felületi területe), a térfogat pedig ez a terület szorozva a réteg vastagságával. A sor megjegyzése megmondja, hány szám származott rétegből. Egy fal rétegeinek együttes térfogata megegyezik a modell által az adott falra megadott térfogattal.

## Sorok vagy nyílászárók mentése CSV-ként

A {{ui:Save rows as CSV}} a kipipált sorokat menti, minden fejlécben a mértékegységekkel, táblázatkezelőbe. A {{ui:Save openings schedule as CSV}} (csak akkor, ha a modellben vannak ajtók vagy ablakok) minden ajtót és ablakot típus, szint és méret szerint, darabszámmal együtt ment.

## Mit mérünk

| Kategória | Mennyiségek |
|---|---|
| Falak | darabszám, hosszúság, falfelület (egy oldal, a nyílászárók levonva), térfogat |
| Födémek, padlók, mennyezetek és egyéb burkolatok | darabszám, alaprajzi terület, térfogat |
| Tetők | darabszám, alaprajzi terület, tetőfelület, térfogat |
| Alapozások | darabszám, alaprajzi terület, térfogat |
| Oszlopok, gerendák és egyéb tartók | darabszám, hossz a tartó mentén, térfogat |
| Korlátok, csövek, légcsatornák és kábelfutások | darabszám, hosszúság |
| Lépcsők | darabszám, térfogat |
| Helyiségek | darabszám, alapterület, térfogat |
| Ajtók, ablakok és minden egyéb | darabszám |

Ahol a modell szerzője a fájlban megadott egy mennyiséget, azt a számot használjuk. Egyébként a számot az elem alakjából mérjük. Minden mennyiség megjegyzést kap, amely megmondja, melyik volt, és hány elem adott számot.

:::note
Az alakjából mért fal hossza végponttól végpontig fut, így a sarkon egymást átfedő két fal mindkettő hosszában benne van a sarok. A térfogathoz zárt alak kell: a zárt alak nélküli elem beszámítódik, de térfogatot nem ad. Egy ívelt vagy sarkos falelem függőleges felületeinek felét mérjük, és a megjegyzése ezt mondja.
:::

## Ha új modell érkezik

Nyissa meg az újabb fájlt, és írja be ugyanazt a {{ui:Model name}} nevet. Mielőtt bármit hozzáadna, a panel megmondja, hány mennyiség új, hány változott, és mennyiből mire változtak, valamint mely mennyiségek szerepeltek a korábbi példányban, de már nincsenek a modellben. Válassza a {{ui:Add to the takeoff}} lehetőséget: a változott mennyiségek megkapják az új számaikat, az Ön nevei, árai, hulladéka és összeállításai pedig megmaradnak. A modellből eltűnt mennyiségek megtartják régi számaikat; törölje őket Ön, ha a terv elhagyta őket.

Típus- és szintnevek alapján ismeri fel a rendszer a mennyiséget. Ha az építész átnevez egy faltípust, az új mennyiségként érkezik, a régit pedig eltűntként listázza.

## Beolvasott fájlok

IFC-fájlok (IFC2x3, IFC4 és IFC4.3). Az IFC-fájl, amely utakat, vasutakat vagy hidakat tartalmaz, továbbra is közvetlenül hozza be az infrastrukturális mennyiségeit, mint korábban.

A TakeoffCraft ebben a verzióban nem olvas `.rvt` fájlokat. Ha az építész Revitben dolgozik, kérjen IFC-exportot a modellről (Fájl, Exportálás, IFC), és azt nyissa meg.

Egy modell egyszerre legfeljebb 500 mennyiséget hozhat be. Ha több van, pipálja ki a sorokat, vagy csoportosítson kategória szerint.
