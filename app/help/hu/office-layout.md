---
title: "Az irodai elrendezés: csoportosítás, részösszegek, cím és fejlécek az alapértelmezett szabályzatokból"
summary: "Kapcsolja be az Alapértelmezett szabályzatok bővítményt, és a becslés, a lapok szerinti mennyiségek, az exportok és az asszisztens által olvasott adatok az iroda táblázat-elrendezését kapják, ugyanazt, amelyet a BimCraft táblázatai használnak."
keywords: irodai szabvány, irodai elrendezés, alapértelmezett szabályzatok, bővítmény, táblázat-elrendezés, típus szerinti csoportosítás, lap szerinti csoportosítás, részösszeg, összegek, cím, fejlécek, nagybetűk, becslés elrendezése, export elrendezése, beállítások
from: cfd2f30a
---

## Mit fog tenni

Rendezze a TakeoffCraft táblázatait úgy, ahogy az irodája kiadja őket, anélkül hogy minden mennyiségkimutatásnál külön be kellene állítani. Az elrendezést egyszer, az Alapértelmezett szabályzatokban adja meg, és az a számítógép minden alkalmazására érvényes: amit a BimCraftban vagy a CadCraftban állít be, azt használja a TakeoffCraft is, és fordítva.

## Lépések

1. Nyissa meg a **Beállítások › Bővítmények** menüpontot, és kapcsolja be az **Alapértelmezett szabályzatok** bővítményt. Addig ki van kapcsolva, amíg be nem kapcsolja; kikapcsolt állapotban vagy beállítás nélkül a TakeoffCraft pontosan olyan, mint volt.
2. Nyissa meg a **Beállítások › Globális › Alapértelmezett szabályzatok** menüpontot, és keresse meg a **Táblázat-elrendezés (az irodai szabvány)** részt:

| Szabályzat | Mit tesz a TakeoffCraftban |
|---|---|
| Táblázatok csoportosítása | **Típus** szerint csoportosítja a becslést a tételtípus szerint (Linear, Area, Count, Typed quantity). **Szint** a lapok szerinti mennyiségeket a lapjuk szerint csoportosítja. **Helyiség** és **Nincs csoportosítás** mindkettőt csoportosítás nélkül hagyja |
| Részösszegek a táblázatokban | **Részösszeg minden csoport alatt és összeg** részösszeget ad minden csoport alá. A munka végösszege mindig megmarad |
| Táblázat címe | Egy sor a táblázat fölött, például `{schedule}: office layout` |
| Fejlécek oszlopai | Ahogy be van írva, NAGYBETŰKKEL vagy Nagy Kezdőbetűkkel |

3. Zárja be a Beállításokat. A táblázatok azonnal követik.

## Mi veszi át az elrendezést

- **Tétel szerint** és **Lap szerint** mennyiségek: csoportfejlécek, részösszeg minden csoport alatt, a cím és a fejlécek nagybetű-kezelése. Egy sor a cím alatt jelzi, hogy irodai szabványuk mely részeket állította be. A sorok ugyanazok maradnak: továbbra is beírhatja a díjtételeket és a hulladékot, és a számokra kattintva kijelölheti a jelöléseiket. Egy összetevő vagy egy második feltétel a tétele alatt marad.
- **Az exportált becslés** (CSV és XLSX): ugyanazok a csoportok és részösszegek. A munkafüzetben a részösszeg egy `SUBTOTAL` képlet a saját csoportja fölött, és a végösszeg is az, így semmi sem számolódik kétszer.
- **Amit egy asszisztens olvas**: a `takeoff_estimate` és a `takeoff_quantities` (lapok szerint) egy `layout` blokkot ad hozzá a csoportokkal, a sorokkal és a részösszegekkel, és megmondja, melyik részeket állította be az iroda.

## Ami megtartja a sajátját

- A **Terület szerint** mennyiségek saját csoportosítást adnak (ajánlati terület szerint), és azt megtartják.
- A **munka végösszege**, az ajánlati összesítő pótlékai és az alternatívák nincsenek átcsoportosítva.
- Az olyan csoportosítás, amelyhez a táblázatban nincs oszlop, kimarad: a becslésben nincs szint, a lapok szerinti mennyiségekben nincs típus.

## Jó tudni

- A szabályzatok ebben a böngészőben maradnak meg minden CadCraft-alkalmazás számára, és az Alapértelmezett szabályzatok fájlban utaznak (**Mentés fájlba** / **Betöltés fájlból** ugyanitt), így egy iroda egy fájlt oszthat meg.
- A csoportokkal exportált CSV-becslés olvasásra való. Ha a becslést árkönyvtárként szeretné visszahozni, csoportosítás nélkül exportálja.
- A BimCraft oldala ugyanennek a szabványnak: táblázatok, beállítások és exportok. A TakeoffCraftnak még nincsenek saját szabályzatai, ezért a Beállítások › TakeoffCraft alatt nincs Alapértelmezett szabályzatok rész.
