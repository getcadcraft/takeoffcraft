---
title: Összetett tételek és képletek
summary: Adjon összetevőket egy tételhez, és hagyja, hogy a képletek a hossz, a terület vagy a darabszám alapján számítsák ki a bordákat, lemezeket, betont és kötőelemeket, kidolgozott falpélda segítségével.
keywords: összetett tétel, összetevők, képlet, bordák, gipszkarton, lapok, lemezek, beton, köbyard, kötőelemek, recept, tipikus, tételrészek
from: 12891a21
---

Egy tétel **összetett tétele** összetevők listája; mindegyiknek saját mennyiségi képlete, hulladéka és díjtétele van. A képlet a tétel mért összegeit használja, így egy fal egyszeri felmérése egyszerre adja meg a bordákat, a lemezeket és a lapokat, és ezek a mérés közben frissülnek.

## Használható változók

| Tételtípus | Változók |
|---|---|
| Vonal | `L` hossz, `H` magasság, `A` falterület (L × H), `N` szakaszok száma |
| Terület | `A` terület, `P` kerület (körvonal + kivágások), `H` mélység vagy vastagság, `N` területek száma |
| Darabszám | `N` darabszám |

Az értékek a tétel saját mértékegységében szerepelnek: LF és SF tételeknél láb és négyzetláb, m és m² tételeknél méter és négyzetméter. SY tételnél az `A` négyzetyardban, a `P` és a `H` pedig továbbra is lábban értendő.

A képletekben használhatók: `+ - * /` (vagy × ÷), zárójelek, számok, valamint a `ceil`, `floor`, `round`, `min`, `max` és `abs` függvények. A teljes szabályok a [Képletnyelv](topic:formulas) témakörben találhatók.

## Kidolgozott példa: belső fal

Tegyük fel, hogy a **Belső fal A típus** tételt vonalas tételként mérte fel: 4 szakasz, összesen 120 LF, a {{ui:Magasság}} mezőben `9'-0"`. Mért értékei: L = 120, N = 4, A = 1 080 (SF falfelület, egy oldal).

1. Jelölje ki a tételt a {{ui:Tételek}} alatt.
2. Az {{ui:Összetett tétel}} részben válassza az {{ui:Összetevő hozzáadása}} lehetőséget.
   Megjelenik egy „Összetevő” nevű összetevő a `L` képlettel, alatta az eredménnyel.
3. Írja be a `Bordák 16 in tengelytávval` szöveget a {{ui:Név}} mezőbe, az `EA` értéket pedig a {{ui:Egység}} mezőbe.
4. A {{ui:Mennyiségi képlet}} mezőbe írja be a `ceil(L * 12 / 16) + N` képletet.
   Az eredmény már gépelés közben frissül: „= 94 EA”. Ez 120 LF-en 16 hüvelykenként egy borda (90), plusz egy-egy extra a 4 szakasz mindegyikének lezárásához.
5. Az {{ui:Összetevő hozzáadása}} lehetőséget újra válassza a lemezekhez: név `Lemezek, felül és alul`, egység `LF`, képlet `L * 2`. Eredmény: 240 LF.
6. Adja hozzá a lapokat: név `Gipszkarton 4x8, mindkét oldal`, egység `lap`, képlet `ceil(A * 2 / 32)`. Eredmény: 68 lap (2 160 SF lemez ÷ 32 SF laponként = 67,5, felfelé kerekítve).
7. Töltse ki az egyes összetevők {{ui:Hulladék %}}, {{ui:Anyag $}} és {{ui:Munkadíj $}} mezőit.
   Minden összetevő saját sort kap a tétel alatt a {{ui:Mennyiségek}} táblázatban, egy tételhez hasonlóan árazva, és a {{ui:Munka összesen}} érték tartalmazza.

Ha a fal teljes költsége az összetevőkben van, hagyja a tétel saját anyag- és munkadíj-értékét 0-n, különben kétszer szerepel.

:::tip
A hulladékot a képlet után alkalmazzuk, és nem kerekítjük: 68 lap 10%-os hulladékkal 74,8 lap. Egész lapok rendeléséhez tegye a hulladékot a képletbe, például `ceil(A * 2 / 32 * 1.1)`, az összetevő hulladékát pedig hagyja 0-n.
:::

## További képletek

| Mi | Tétel | Képlet |
|---|---|---|
| Bordák 24 in tengelytávval | Vonal | `ceil(L / 2) + N` |
| Szigetelőtakaró, SF | Vonal, magassággal | `A` |
| Festék, mindkét oldal, gallon 350 SF-enként | Vonal, magassággal | `ceil(A * 2 / 350)` |
| Csempedoboz 15 SF-enként, 10% plusz | Terület | `ceil(A * 1.1 / 15)` |
| Lábazat vagy szegélylécek, LF | Terület | `P` |
| Beton, köbyard | Terület, mélységgel | `A * H / 27` |
| Beton negyed köbyardra felfelé kerekítve | Terület, mélységgel | `ceil(A * H / 27 * 4) / 4` |
| Zsanérok, ajtónként három | Darabszám | `N * 3` |
| Legalább egy doboz, 12-ként egy | Darabszám | `max(1, ceil(N / 12))` |

## Ha a képlet hibás

A képlet alatti sor hibaüzenetté alakul, például `"X" is not a measured value here. Use L, H, A, N.` vagy `A ")" is missing.` Ekkor az összetevőnek nincs összege, a {{ui:Mennyiségek}} táblázatban a sora „Képlethiba: …” feliratot mutat, a fejléc pedig „Hiányos: 1 képlethiba (nem számít bele az összegekbe)” szöveget. Javítsa a képletet, és az összegek frissülnek.

A nullával való osztás szintén hiba („The formula divides by zero.”), például az `A / H` képlet olyan tételen, amelynek nincs mélysége.

## Korlátok

- A képletek a tétel **összegein** futnak, nem szakaszonként. A `ceil(L * 12 / 16) + N` képlet szakaszonként egy bordát ad hozzá; szakaszonkénti kerekítés még nincs.
- A képlet csak a saját tétele változóit használhatja, másik tételét nem.
- Tételenként legfeljebb 50 összetevő, képletenként legfeljebb 500 karakter.

## Összetevő eltávolítása

Válassza alatta a {{ui:Összetevő eltávolítása}} lehetőséget. Visszavonhatja a {{key:Mod+Z}} billentyűkombinációval.
