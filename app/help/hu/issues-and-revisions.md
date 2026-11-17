---
title: Problémák, revíziók és a rajzok változásnaplója
summary: Az építész modelljével közös problémaelőzmény: olvassa be a problémákat, rögzítse a helyszíni utasításokat, műhelyrajzokat és összekapcsolt modelleket egy problémához, és olvassa a rajzok változásnaplóját.
keywords: probléma, revízió, revíziók, változásnapló, rajzok változásnaplója, rajzjegyzék, helyszíni utasítás, műhelyrajz, összekapcsolt modell, ajánlattétel, kivitelezés, problémaelőzmény, tételes kiírás, mennyiségkimutatás
from: 8d8f6e68
---

## Mit fog csinálni

A csapat többi tagjával közös problémaelőzményből dolgozhat. Látható, mely lapok mely revízióval kerültek ki, és a helyszínen történtek a hozzájuk tartozó problémához rendelhetők.

## Lépések

1. Nyissa meg a **Problémák és revíziók** lehetőséget.
2. Válassza a **Problémaelőzmény beolvasása** lehetőséget, és válassza ki a BimCraftból vagy más alkalmazásból mentett `.issues.json` fájlt. Problémái és bejegyzései hozzáadódnak a meglévőkhöz. Semmi sem cserélődik le.
3. Válassza a **Bejegyzés hozzáadása** lehetőséget helyszíni utasításhoz, műhelyrajzhoz, jelölés-készlethez, összekapcsolt modellhez vagy megjegyzéshez. Válassza ki, melyik problémához tartozik, és az állapotát. A kiválasztott fájlt a neve, mérete és SHA-256 értéke alapján rögzíti a rendszer; a fájl a helyén marad.
4. A **Rajzok változásnaplója** minden lapnak egy sort, minden problémának egy oszlopot mutat. A zárójelben lévő revízió azt jelenti, hogy változatlanul újra kiadták.
5. A **Változásnapló letöltése (CSV)** a problémákat, a laptáblát és a bejegyzéseket menti. A **Problémaelőzmény mentése** olyan fájlt ír, amelyet a többi alkalmazás is olvas.

## Jó tudni

- A **Probléma rögzítése** a mért lapokat problémává teszi, például egy tételes kiírással. A **Változások a probléma óta** megmutatja, mely lapokat mérték újra ezen probléma után.
- Az előzmény a mennyiségkimutatás fájljában tárolódik. Minden módosítás egy visszavonási lépés.
- Ugyanazt a fájlt kétszer beolvasva nem adódik semmi kétszer hozzá. Ha két példány ugyanazt a bejegyzést tartalmazza, az újabb marad meg.
