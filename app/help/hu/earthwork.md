---
title: Földmunka és magassági pontok
summary: Jelölje meg a magassági pontokat a helyszínrajzon, adja át a CivilCraftnak a felületet, a bevágást és a feltöltést, és itt vegye fel az egyszerű földkiemelési mennyiségeket.
keywords: földmunka, földkiemelés, bevágás, feltöltés, bevágás és feltöltés, tereprendezés, magassági pont, magasságok, topo, felület, háromszögelés, civilcraft, pontok, pnezd, árok
from: a898e508
---

A TakeoffCraft a lapon rajzolt dolgokat méri. A földmunkához terepfelület kell, ezért ez a CivilCraft-tal közös: a CivilCraft pontokból épít felületeket, lejtéseket ad nekik, és kiszámítja a bevágást, a feltöltést és a szállítást.

## Egyszerű földkiemelés itt

Egy adott mélységre kiásott alaprajzhoz elég egy **mélységgel** rendelkező területi tétel: a térfogat terület × mélység. A fővállalkozó [szakági csomagjában](topic:trade-packs) van tömeges földkiemelési tétel (tömör térfogat, laza térfogat és teherautó-fuvarok), valamint közműárok-tétel (kiemelés, ágyazás és visszatöltés hossz és mélység szerint).

## Magassági pontok a CivilCraft-hoz

1. Állítsa be a helyszínrajz lapjának méretarányát.
2. Készítsen **Darabszám** tételt, például „Meglévő terep” néven, és kattintson minden magassági pontra a lapon.
3. Jelölje ki a jelölést, és a Kiválasztott jelölés panelen írja be a {{ui:Magasság}} értékét: `102.5`, `102'-6"` vagy `31.24 m`. A negatív és a nulla magasság is megengedett.
4. Nyissa meg a {{ui:Exportálás}} menüt, és válassza a {{ui:Magassági pontok}} lehetőséget. Pontfájl (`.csv`) készül, Point, Northing, Easting, Elevation és Description oszlopokkal, a megnyitott lap megjelölt pontjaihoz tartozó soronként egy sorral.
5. Nyissa meg a fájlt a CivilCraftban (lásd [Pontok importálása](app:civilcraft/import-points)). Ebből felületet épít a pontokból ([Felület készítése](app:civilcraft/build-surface)); onnantól összehasonlítja a felületeket, és megadja a bevágást és a feltöltést ([Térfogatok](app:civilcraft/volumes)).

A Northing és az Easting a lap saját koordinátái, lábban, az oldal sarkától mérve, a méretaránynak megfelelően. A pontok közötti távolságok és térfogatok helyesek, de nem a telek felmérési koordinátái. Szükség esetén a CivilCraftban vigye át őket a telek koordinátáira.

:::note
Különböző lapok pontjai nem osztoznak koordinátákon, ezért az exportálás csak a megnyitott lapot veszi figyelembe. A magasságok a mennyiségkimutatással együtt mentődnek, és másolással, beillesztéssel továbbvihetők.
:::

## Bevágás és feltöltés a CivilCraftból

A CivilCraft földmunkája két olyan tételként tér vissza, amelyeket árazni lehet:

1. A CivilCraftban alakítsa ki a tereplépcsőket és a folyosókat, majd a **Földmunka** alatt válassza a {{ui:Küldés a TakeoffCraftba}} lehetőséget ([Földmunka térfogatai](app:civilcraft/volumes)). Ez egy mennyiségi fájlt (`.quantities.json`) ment.
2. A TakeoffCraftban nyissa meg a {{ui:Mennyiségkimutatás megnyitása}} paranccsal, vagy húzza rá az alkalmazásra. A mennyiségkimutatás nyitva marad: a fájl a **Földmunka: bevágás** és a **Földmunka: feltöltés** tételeket adja hozzá [típusos mennyiségként](topic:create-items#typed-quantities-no-drawing), köbyardban (CY) láb alapú projekt esetén, vagy köbméterben (m³) méteres projekt esetén. Ez egyetlen lépés: a {{key:Mod+Z}} visszavonja.
3. Nevezze át őket, és állítsa be a hulladékot, az egységárakat és az összetett tételeket tetszés szerint.

Ha a tervek változnak, a CivilCraftból küldje újra, és nyissa meg az új fájlt: ugyanez a két tétel az új mennyiségeket kapja. A nevük, az egységáraik, a hulladékuk és az összetett tételeik a beállított módon maradnak. Ha a projekt mértékegysége megváltozott, az állapotsor ezt jelzi: ellenőrizze az egységárakat. Egy másik CivilCraft-projektből származó fájl saját két tételt ad hozzá.

A mennyiségek a CivilCraft által mért tömör térfogatok (rácsmódszer): nincs bennük zsugorodás és duzzadás. Ezeket hulladékként adja hozzá, vagy képlettel, például `Q * 1.25` alakban a laza térfogathoz. A tételszerkesztő megmutatja, honnan és mikor származik az egyes tételek; a költségvetés megjegyzés oszlopa is ezt írja.

:::note
A mennyiségi fájl egyszerű JSON (`"format": "cadcraft-quantities"`), ezért egy szkript vagy másik program is írhat ilyet: alkalmazásnév, projekt, és kulccsal, névvel, mértékegységgel és mennyiséggel rendelkező tételek.
:::
