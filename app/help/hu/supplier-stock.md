---
title: Beszállítói készlet és szállítási idők ellenőrzése
summary: Adjon hozzá egy beszállító készletlistáját (CSV vagy táblázat), és a TakeoffCraft a hulladékkal együtt ellenőrzi, mire van szükség a mennyiségkimutatásban: van-e elég készleten, és mennyi a várakozás. A hiányok és a hosszú várakozások a Problémák panelen jelennek meg.
keywords: beszállító, készlet, készleten, szállítási idő, rendelkezésre állás, hiány, utánrendelés, rendelési lista, csv, sku, eladó, anyagok, készlet, problémák
from: f11160fb
---

Az eszköztár {{ui:Supply}} gombja (a teherautó) a mennyiségkimutatás igényeit egy beszállító készletlistájához hasonlítja. A releváns beszállítói sorok a mennyiségkimutatás saját fájljában maradnak meg. Semmit sem küld el sehová, és senkitől sem kér adatot: a fájlt Ön hozza.

## A fájl

Fejléces sorral rendelkező CSV-fájl. Kell egy név- vagy SKU-oszlop, valamint egy készlet- vagy szállításiidő-oszlop. Az alábbi fejléceket ismeri fel (bármilyen sorrendben, kis- és nagybetűtől függetlenül): Item, Name, Description vagy Product; SKU, Part vagy Item #; In stock, On hand, Available vagy Quantity; Lead time vagy Delivery days; Unit vagy UOM; Price vagy Cost; Supplier vagy Vendor.

- A készlet lehet szám (1,200), „In stock” vagy „Out of stock”.
- A szállítási idő lehet „5 days”, „2 weeks”, „2-3 weeks” (a hosszabb érvényes), „3 months”, „same day” vagy „backorder”. Az egyszerű szám a fejléc mértékegységében értendő (nap, hacsak a fejléc nem hetet vagy hónapot jelöl).
- Excel-fájlokat nem olvas be: a táblázatot előbb mentse CSV-ként.

## A mennyiségkimutatás ellenőrzése

1. Válassza a {{ui:Supply}} lehetőséget, majd a {{ui:Add a supplier file…}} gombot, és válassza ki a CSV-fájlt. Egynél többet is hozzáadhat: legfeljebb öt fájl, összesen 2 000 sor marad meg, előbb azok, amelyek a tételeivel egyeznek.
2. Minden tétel, második feltétel és összetevő, amelynek van mennyisége, névvel vagy a nevében lévő SKU-val párosul egy sorral. Ha nincs pontos egyezés, a hasonló név (az egyik benne van a másikban) használódik, és ezt jelzi.
3. A {{ui:What the takeoff needs}} alatt a hiányzók kerülnek elől: „Hiányzik 120 EA”, „Szállítási idő 21 nap”, „Utánrendelés alatt”, „Eltérő mértékegység”, „Nincs készletadat” vagy „Készleten”. Az igény tartalmazza a hulladékot is. A beszállító mértékegysége, ha nem egyezik a költségvetés mértékegységével (tonna láb helyett), jelentésre kerül, és sosem hasonlítjuk össze. Minden sorban van egy {{ui:Select the item}} gomb, amely a tételhez ugrik.
4. Állítsa be a {{ui:Longest wait wanted (days)}} értéket (alapértelmezés: 14). Az a tétel, amely nincs készleten, és ennél tovább vár, jelölést kap, az összegzés pedig megnevezi az érdemi leghosszabb várakozást.
5. A {{ui:Order list (CSV)}} letölti a hiányzó tételeket a hiány mennyiségével, a beszállítóval és a szállítási idővel. A {{ui:Leave out}} kihagyja az igényt az ellenőrzésből (ez visszavonható lépés).

## Táblázatfájlok és az árkönyvtár

A beszállítói lista lehet Excel-munkafüzet (.xlsx) is a CSV mellett: az első lap kerül beolvasásra, azonos oszlopnevekkel. A képleteket a rendszer sosem futtatja; a fájlban tárolt érték kerül beolvasásra.

Miután árakat tartalmazó fájlt adott hozzá, a párbeszédpanelben lévő {{ui:Prices into the Library}} beállítja az anyagárat minden olyan [árkönyvtári](topic:price-library) bejegyzésnél, amelyhez a fájl árat ad meg: azonos név és azonos (vagy meg nem adott) mértékegység esetén. A munkadíj, a hulladék, a magasság és az összetevők változatlanok maradnak, a bejegyzés megjegyzése pedig megmondja, melyik fájlból származik az ár. Méteres bejegyzés nem kap árat lábas listából, az egyezés nélküli bejegyzések érintetlenek maradnak; a státuszsor megmondja, hányat hagytunk ki mértékegység miatt. Az új árakat az árkönyvtárból történő újraárazással viheti át ebbe a mennyiségkimutatásba.

## A Problémák panelen

A hiány figyelmeztetés, a hosszú várakozás pedig megjegyzés a közös Problémák panelen („Beszállítói készlet”), a többi ellenőrzéssel együtt. Indoklással elfogadhat egyet; az elfogadás a mennyiségkimutatásban mentésre kerül.

## Az asszisztensével

Ha a Beállításokban engedélyezi az asszisztenseket, azok olvashatják az ellenőrzést (supply_check). Beszállítói fájl hozzáadása csak Ön teheti meg.

## Jó tudni

A készletadatok csak annyira frissek, mint az Ön által hozzáadott fájl. A frissítéshez adja hozzá újra: az azonos nevű fájl felülírja a korábbit.
