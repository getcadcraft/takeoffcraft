---
title: Árkönyvtár
summary: Tartsa a tételeit, díjtételeit és összetett tételeit könyvtárban, importálja CSV-ből vagy egy korábbi becslésből, adjon hozzá tételeket belőle bármelyik mennyiségkimutatáshoz, és frissítse egy mennyiségkimutatás árait belőle.
keywords: könyvtár, árkönyvtár, szakági csomagok, árlista, költségadatbázis, csv importálás, díjtételek, összetett tételek, újrafelhasználás, sablon tételek, árak frissítése, újraárazás
from: 37356c68
---

Az **árkönyvtár** azokat a tételeket tartja, amelyeket munkáról munkára használ: a típusukat, a mértékegységüket, a magasságukat, a hulladékukat, az anyag- és munkadíj-díjtételeiket, valamint az összetett tételüket. Ez a mennyiségkimutatásoktól függetlenül ebben a böngészőben tárolódik, így minden itt megnyitott mennyiségkimutatás használhatja.

Nyissa meg a {{ui:Könyvtár}} gombbal a {{ui:Tételek}} panel tetején.

## A könyvtár feltöltése

- A {{ui:CSV importálása…}} egy CSV-ként mentett táblázatot olvas be (lásd lentebb az oszlopokat). A névvel és típussal már szereplő tételek lecserélődnek; a többi hozzáadódik. Az olvashatatlan sorok kimaradnak, és megmondja, melyek és miért.
- Az {{ui:Ennek a mennyiségkimutatásnak a tételeinek hozzáadása}} minden tételt bemásol a megnyitott mennyiségkimutatásból a könyvtárba, a díjtételeivel és az összetett tételével együtt (a jelöléseivel nem).
- A TakeoffCraft által exportált becslés CSV-je ([Becslés exportálása](topic:export-estimate)) úgy importálódik, ahogy van: az előző munka árai adják a következő alapját.

- A {{ui:Szakági csomagok…}} ingyenes összetett tételeket ad hozzá egy szakmához, például gipszkartonhoz, villamossághoz vagy betonhoz, árak nélkül. Lásd: [Szakági csomagok](topic:trade-packs).

A {{ui:CSV exportálása}} a könyvtárat CSV-ként menti: másolat tartásához, táblázatkezelőben való szerkesztéshez vagy kollégának való átadáshoz. A {{ui:Törlés}} kiüríti (kétszer kattintson).

:::note
A könyvtár ebben a böngésző tárhelyében él. Másik böngészőnek, másik számítógépnek vagy privát ablaknak saját (vagy semmilyen) könyvtára van. Exportálja, hogy átvigye.
:::

## Használat egy mennyiségkimutatásban

- Jelöljön be tételeket (a {{ui:Keresés a könyvtárban}} mezőbe írva szűkítheti a listát), és válassza a {{ui:Hozzáadás a mennyiségkimutatáshoz}} lehetőséget. Egy lépésben kerülnek be az összetett tételeikkel együtt, és a {{key:Mod+Z}} egyszerre visszavonja. Ha a mennyiségkimutatásban már van ilyen nevű tétel, szám kerül mögé, például `Szőnyeg (2)`.
- Az {{ui:Árak frissítése}} a mennyiségkimutatás tételeinek a könyvtár hulladékát és díjtételeit adja, minden olyan tételnél, amelynek neve és típusa egyezik egy könyvtári tétellel, és ugyanígy az azonos nevű összetett tétel-összetevőknek. A magasságok, a mértékegységek és a képletek megmaradnak. Egy {{key:Mod+Z}} visszaállítja az összes régi árat.

## A CSV oszlopai

Az első sor nevezi meg az oszlopokat, bármilyen sorrendben; a többi oszlop figyelmen kívül marad.

| Oszlop | Mi kerül bele |
|---|---|
| Item (or Name) | A tétel neve. Kötelező. |
| Type | Linear, Area vagy Count (LF, SF és EA is működik). Üresen hagyva a mértékegység dönt. |
| Unit | LF vagy m; SF, SY vagy m²; EA. Üres: a típus szokásos mértékegysége. |
| Waste % | `10` vagy `10%`. |
| Material per unit, Labor per unit | Díjtételek, például `2.10` vagy `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, vagy `2.7` metrikus egységekhez. |
| Component, Formula | Az a sor, amelynek Component neve van (vagy a Type `Component`), a fölötte lévő tétel összetett tételének része. Mértékegysége, hulladéka és díjtételei saját; a képlete a tétel betűjeleit használja, lásd: [Összetett tételek és képletek](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Az oszlopokat elválaszthatja vessző, pontosvessző vagy tabulátor is.
