---
title: Mennyiségkimutatás mentése és újranyitása
summary: Mentse a mennyiségkimutatást .takeoff.json projektfájlként, nyissa meg újra ugyanazokkal a PDF-ekkel, és nézze meg, mi történik, ha egy PDF hiányzik vagy megváltozott.
keywords: mennyiségkimutatás, PDF-be ágyazás, melléklet, mentés, megnyitás, újranyitás, projekt, takeoff.json, folytatás, átdolgozott PDF, megváltozott PDF, hiányzó PDF, biztonsági mentás, automatikus mentés, helyreállítás, összeomlás
from: bd5080a6
---

A mennyiségkimutatás kis projektfájlként mentődik, `(name).takeoff.json` néven. Tartalmazza a tételeit, összetevőit, egységárait, minden lap méretarányát és minden jelölést. **Nem** tartalmazza a PDF-eket; ezeket tartalmuk alapján találja meg újra.

## Mentés

1. Válassza a {{ui:Mennyiségkimutatás mentése}} lehetőséget a {{ui:Fájl}} csoportban, vagy nyomja meg a {{key:Mod+S}} billentyűt.
   A böngészője letölti a `(name).takeoff.json` fájlt. Az állapotsor ezt írja: „A(z) (name).takeoff.json mentve. Ugyanazokon a PDF-eken nyílik meg újra (tartalmuk alapján párosítva).”
2. Helyezze a fájlt a munka PDF-jei mellé, hogy a kettő együtt maradjon.

Minden mentés új fájlt tölt le. A böngészője a második fájlt `(name) (1).takeoff.json` néven mentheti; a legújabbat tartsa meg.

A név az első PDF nevéből származik, amelyet ebben a mennyiségkimutatásban megnyitott.

:::note
A Mennyiségkimutatás mentése továbbra is az egyetlen mód, hogy fájlként megtartsa a mennyiségkimutatást. Munka közben a TakeoffCraft a böngészőben is tart egy helyreállítási másolatot (lent), a felhőbe mentés azonban még nem érhető el. Ha mentetlen módosításokkal próbálja bezárni a lapot, a böngésző megkérdezi, hogy el akar-e lépni.
:::

## A mennyiségkimutatás a PDF-en belül

{{ui:Exportálás}} › {{ui:PDF a mennyiségkimutatással}} letölt minden megnyitott PDF-ről egy másolatot, például `Plans (with takeoff).pdf` néven, amely a teljes mennyiségkimutatást mellékletként tartalmazza: tételeket, jelöléseket, méretarányokat, ajánlati területeket, mindent, amit a `.takeoff.json` tartalmaz. Az oldalai változatlanok, így ugyanúgy néznek ki és nyomtatódnak, mint az eredeti, és más PDF-olvasók a mellékletek között listázzák a mennyiségkimutatást.

Nyissa meg ezt a PDF-et a TakeoffCraftban (bármilyen módon, ahogy PDF-eket nyit), és megkérdezi: **Ez a PDF mennyiségkimutatást tartalmaz**. Válassza a {{ui:A mennyiségkimutatás megnyitása}} lehetőséget a visszaállításhoz, vagy a {{ui:Csak a PDF}} lehetőséget, ha csak a rajzot szeretné megnyitni.

A másolat a PDF-et képviseli, amelyből készült, így bármelyik másolatból mentett `.takeoff.json` mindkét PDF-en megnyílik.

Több PDF esetén minden másolat a teljes mennyiségkimutatást tartalmazza; együtt nyissa meg őket. Ha egy másolatból újra menti, a benne lévő mennyiségkimutatás cserélődik, nem keletkezik második. A megtartandó fájl továbbra is a `.takeoff.json`: ez kicsi, és ezt írja az automatikus mentés és az asztali alkalmazás.

## Ha a lap vagy a böngésző leáll

Néhány másodperccel minden módosítás után a TakeoffCraft a mennyiségkimutatás másolatát ebben a böngésző saját tárolójában tartja, a PDF-ekkel együtt, ha azok összesen legfeljebb 64 MB-ot tesznek ki. Semmi nem kerül feltöltésre. Ha menti a mennyiségkimutatást, újat kezd, vagy másik projektet nyit meg, a másolat törlődik.

Ha a lap összeomlik, a böngésző vagy a számítógép leáll, vagy mentetlen módosításokkal lép ki, a TakeoffCraft következő megnyitásakor megkérdezi: **Helyreállítja a munkáját?**, és név szerint felsorolja a mennyiségkimutatást. Válassza a **Helyreállítás** lehetőséget a visszaállításhoz: a tételek, jelölések és méretarányok visszatérnek, a PDF-ek pedig újra megnyílnak, ha meg lettek őrizve. Az állapotsor ezt írja: „Helyreállítva: (name). Még nincs fájlba mentve; a Mennyiségkimutatás mentése menti.” Ha a PDF-ek túl nagyok voltak a megőrzéshez, nyissa meg őket újra; a jelölések megjelennek a lapjaikon. Részletek: [A munka helyreállítása](common:recover).

## Újranyitás

1. Nyissa meg a TakeoffCraftot.
2. Húzza a `.takeoff.json` fájlt és a PDF-eket együtt az oldalra. Vagy válassza a {{ui:Tervek megnyitása}} lehetőséget a PDF-ekhez, és a {{ui:Mennyiségkimutatás megnyitása}} lehetőséget a projekthez, bármelyik sorrendben.
   Az állapotsor ezt írja: „Megnyitva (name): 12 tétel, 340 jelölés.” Minden lap visszakapja a méretarányát, és a jelölések megjelennek a lapjaikon.

A PDF-ek sorrendje nem számít, a fájlnevük és a mappájuk sem. A TakeoffCraft minden PDF-et a tartalmának ujjlenyomata alapján ismer fel.

Ha úgy nyit meg projektet, hogy az aktuális mennyiségkimutatásban mentetlen módosítások vannak, a TakeoffCraft előbb megkérdezi: **Mégse**, **Módosítások elvetése** vagy **Mennyiségkimutatás mentése előbb**. A projekt megnyitása lecseréli az aktuális tételeket és jelöléseket; a már megnyitott PDF-ek nyitva maradnak.

## Ha egy PDF hiányzik

Ha az összes PDF nélkül nyitja meg a projektet, az állapotsor kiegészül ezzel: „Nyissa meg a PDF-eit, hogy lássa a jelöléseket (a lapok listája alatt).” A lapok listája alatt ez a megjegyzés áll:

„Ez a mennyiségkimutatás nem megnyitott PDF-eket is lefed. Mennyiségük számításra kerül; nyissa meg őket a jelöléseik megtekintéséhez és szerkesztéséhez:”

Ezt a fájlnevek és méretek követik. Jelöléseik továbbra is beleszámítanak minden összegbe és exportba, a mérésük idején érvényes méretarányokkal. A jelölések megtekintéséhez és szerkesztéséhez nyissa meg ezeket a PDF-eket.

## Ha a PDF megváltozott

Az átdolgozott, vagy egy másik programmal újra mentett PDF tartalma eltér, ezért a TakeoffCraft számára **másik fájl**, még akkor is, ha a neve ugyanaz. A lapok listája alatti megjegyzésben az ilyen fájlnál ez áll: „ilyen nevű fájl van megnyitva, de a tartalma eltér”.

- A jelölések a régi változathoz kötődnek. Továbbra is számítanak, a régi helyükön és méretarányukkal.
- Az átdolgozott PDF új lapokként nyílik meg, méretarány és jelölés nélkül.

A mennyiségkimutatás átvitelséhez az új változatra nyissa meg mindkét PDF-et, és az új lapon használja az {{ui:Összehasonlítás}} eszközt: [Átdolgozott lap összehasonlítása és a mennyiségkimutatás áthelyezése](topic:compare-revisions).

## Sérült vagy idegen fájl

A TakeoffCraft minden projektfájlt ellenőriz, mielőtt használná. Ezek az üzenetek jelenhetnek meg:

- „(file) nem TakeoffCraft-projekt (nem érvényes JSON).”
- „Ez nem TakeoffCraft projektfájl.”
- „Ezt a projektet újabb TakeoffCraft mentette. Nyissa meg ott.”
- „3 jelölés sérült volt, kimaradt.” (a többi megnyílik)

## Visszavonási előzmények

A visszavonási előzmények projekt megnyitásakor újra kezdődnek. A mentés nem törli őket.
