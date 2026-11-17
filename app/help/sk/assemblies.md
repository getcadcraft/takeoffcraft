---
title: Zostavy a vzorce
summary: Pridajte komponenty k položke a nechajte vzorce premeniť jej dĺžku, plochu alebo počet na stĺpiky, plátnice, tabule dosiek, betón a kovanie, s prepracovaným príkladom steny.
keywords: zostava, komponenty, vzorec, stĺpiky, sadrokartón, tabule, plátnice, betón, kubické yardy, kovanie, recept, typické, časti položky
from: 12891a21
---

Zostava položky je **zostava** zoznam komponentov, pričom každý má vzorec množstva a vlastný odpad a sadzby. Vzorec používa namerané súčty položky, takže jedno meranie steny vám dá stĺpiky, plátnice a dosky naraz a pri meraní sa aktualizujú.

## Premenné, ktoré môžete použiť

| Typ položky | Premenné |
|---|---|
| Lineárna | `L` dĺžka, `H` výška, `A` plocha steny (L × H), `N` počet úsekov |
| Plošná | `A` plocha, `P` obvod (obrys + výrezy), `H` hĺbka alebo hrúbka, `N` počet plôch |
| Počet | `N` počet |

Hodnoty sú v jednotkách samotnej položky: stopy a štvorcové stopy pre položky LF a SF, metre a štvorcové metre pre položky m a m². Pri položke SY je `A` v štvorcových yardoch, kým `P` a `H` zostávajú v stopách.

Vzorce používajú `+ - * /` (alebo × ÷), zátvorky, čísla a funkcie `ceil`, `floor`, `round`, `min`, `max` a `abs`. Úplné pravidlá sú v [Jazyk vzorcov](topic:formulas).

## Prepracovaný príklad: vnútorná stena

Predpokladajme, že ste odmerali **Vnútorná stena typu A** ako lineárnu položku: 4 úseky v celkovej dĺžke 120 LF, pričom {{ui:Výška}} je nastavená na `9'-0"`. Jej hodnoty **Namerané** sú L = 120, N = 4, A = 1,080 (SF steny, jedna strana).

1. Vyberte položku pod {{ui:Položky}}.
2. V {{ui:Zostava}} vyberte {{ui:Pridať komponent}}.
   Objaví sa komponent s názvom "Component" so vzorcom `L` a jeho výsledkom pod ním.
3. Napíšte `Studs 16 in o.c.` do {{ui:Názov}} a `EA` do {{ui:Jednotka}}.
4. Do {{ui:Vzorec množstva}} napíšte `ceil(L * 12 / 16) + N`.
   Výsledok sa aktualizuje, keď píšete: "= 94 EA". Je to jeden stĺpik každých 16 palcov pozdĺž 120 stôp (90), plus jeden navyše na uzavretie každého zo 4 úsekov.
5. Znova vyberte {{ui:Pridať komponent}} pre plátnice: pomenujte ho `Plates, top and bottom`, jednotka `LF`, vzorec `L * 2`. Výsledok: 240 LF.
6. Pridajte dosky: názov `Gypsum board 4x8, both sides`, jednotka `sheets`, vzorec `ceil(A * 2 / 32)`. Výsledok: 68 tabúľ (2,160 SF dosiek ÷ 32 SF na tabuľu = 67.5, zaokrúhlené nahor).
7. Vyplňte {{ui:Odpad %}}, {{ui:Materiál $}} a {{ui:Práca $}} pre každý komponent.
   Každý komponent má vlastný riadok pod položkou v {{ui:Množstvá}}, oceňovaný ako položka, a {{ui:Spolu za zákazku}} ho zahŕňa.

Ak je cena steny celá v komponentoch, nechajte vlastné sadzby materiálu a práce položky na 0, inak sa započíta dvakrát.

:::tip
Odpad sa uplatní až po vzorci a nezaokrúhľuje sa: 68 tabúľ s 10 % odpadom je 74.8 tabule. Ak chcete objednávať celé tabule, dajte odpad do vzorca, napríklad `ceil(A * 2 / 32 * 1.1)`, a nechajte odpad komponentu na 0.
:::

## Ďalšie vzorce

| Čo | Položka | Vzorec |
|---|---|---|
| Stĺpiky s roztečou 24 in | Lineárna | `ceil(L / 2) + N` |
| Izolačné rohože, SF | Lineárna s výškou | `A` |
| Náter, obe strany, galóny na 350 SF | Lineárna s výškou | `ceil(A * 2 / 350)` |
| Balenia obkladačiek po 15 SF, 10 % navyše | Plošná | `ceil(A * 1.1 / 15)` |
| Soklová alebo hranová lišta, LF | Plošná | `P` |
| Betón, kubické yardy | Plošná s hĺbkou | `A * H / 27` |
| Betón zaokrúhlený nahor na štvrtinu yardu | Plošná s hĺbkou | `ceil(A * H / 27 * 4) / 4` |
| Závesy, tri na dvere | Počet | `N * 3` |
| Aspoň jedna krabica, jedna na 12 | Počet | `max(1, ceil(N / 12))` |

## Keď je vzorec chybný

Riadok pod vzorcom sa zmení na chybové hlásenie, napríklad `"X" is not a measured value here. Use L, H, A, N.` alebo `A ")" is missing.` Komponent potom nemá žiadne sumy, jeho riadok v {{ui:Množstvá}} zobrazí "Chyba vzorca: …" a hlavička uvedie "Neúplné: 1 chyba vzorca (nie je v súčtoch)". Opravte vzorec a súčty sa aktualizujú.

Vzorec, ktorý delí nulou, je tiež chyba ("Vzorec delí nulou."), napríklad `A / H` na položke bez hĺbky.

## Obmedzenia

- Vzorce sa počítajú zo **súčtov** položky, nie úsek po úseku. `ceil(L * 12 / 16) + N` pridá jeden stĺpik na úsek; zaokrúhľovanie na úsek zatiaľ nie je.
- Vzorec môže používať len premenné svojej položky, nie premenné inej položky.
- Až 50 komponentov na položku, 500 znakov na vzorec.

## Odstránenie komponentu

Vyberte {{ui:Odstrániť komponent}} pod ním. Môžete to vrátiť stlačením {{key:Mod+Z}}.
