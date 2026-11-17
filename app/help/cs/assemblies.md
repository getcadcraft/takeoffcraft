---
title: Sestavy a vzorce
summary: Přidejte ke položce komponenty a nechte vzorce přepočítat její délku, plochu nebo počet na profily, desky, beton a kování, s příkladem stěny.
keywords: sestava, komponenty, vzorec, profily, sádrokarton, desky, beton, kubické yardy, kování, recept, typický, části položky
from: 12891a21
---

Sestava položky je seznam komponent. Každá má vzorec množství a vlastní odpad a sazby. Vzorec používá naměřené součty položky, takže jedno změření stěny dá najednou profily, rámové lišty a desky, a při každém dalším měření se aktualizují.

## Proměnné, které můžete použít

| Typ položky | Proměnné |
|---|---|
| Délková | `L` délka, `H` výška, `A` plocha stěny (L × H), `N` počet úseků |
| Plošná | `A` plocha, `P` obvod (obrys + výřezy), `H` hloubka nebo tloušťka, `N` počet ploch |
| Počtová | `N` počet |

Hodnoty jsou v jednotkách samotné položky: stopy a čtvereční stopy u položek LF a SF, metry a čtvereční metry u položek m a m². U položky SY je `A` ve čtverečních yardech, zatímco `P` a `H` zůstávají ve stopách.

Vzorce používají `+ - * /` (nebo × ÷), závorky, čísla a funkce `ceil`, `floor`, `round`, `min`, `max` a `abs`. Úplná pravidla jsou v [Jazyk vzorců](topic:formulas).

## Příklad: vnitřní stěna

Řekněme, že jste jako délkovou položku změřili **Vnitřní stěna typu A**: 4 úseky v celkové délce 120 LF, s {{ui:Výška}} nastavenou na `9'-0"`. Její **naměřené** hodnoty jsou L = 120, N = 4, A = 1,080 (SF stěny, jedna strana).

1. Vyberte položku v {{ui:Položky}}.
2. V {{ui:Sestava}} vyberte {{ui:Přidat komponentu}}.
   Objeví se komponenta s názvem "Komponenta", se vzorcem `L` a jeho výsledkem pod ním.
3. Zadejte `Studs 16 in o.c.` do pole {{ui:Název}} a `EA` do pole {{ui:Jednotka}}.
4. Do pole {{ui:Vzorec množství}} zadejte `ceil(L * 12 / 16) + N`.
   Výsledek se aktualizuje při psaní: "= 94 EA". To je jeden profil každých 16 in podél 120 stop (90), plus jeden navíc na uzavření každého ze 4 úseků.
5. Znovu vyberte {{ui:Přidat komponentu}} pro rámové lišty: název `Plates, top and bottom`, jednotka `LF`, vzorec `L * 2`. Výsledek: 240 LF.
6. Přidejte desky: název `Gypsum board 4x8, both sides`, jednotka `sheets`, vzorec `ceil(A * 2 / 32)`. Výsledek: 68 listů (2,160 SF desek ÷ 32 SF na list = 67.5, zaokrouhleno nahoru).
7. Vyplňte u každé komponenty {{ui:Odpad %}}, {{ui:Materiál $}} a {{ui:Práce $}}.
   Každá komponenta má vlastní řádek pod položkou v {{ui:Množství}}, oceněný jako položka, a {{ui:Celkem za zakázku}} ji zahrnuje.

Pokud je cena stěny celá v komponentách, nechte vlastní sazby materiálu a práce položky na 0, jinak se započítá dvakrát.

:::tip
Odpad se uplatní až po vzorci a nezaokrouhluje se: 68 listů s 10 % odpadem je 74.8 listu. Chcete-li objednávat celé listy, zapište odpad do vzorce, například `ceil(A * 2 / 32 * 1.1)`, a odpad komponenty nechte na 0.
:::

## Další vzorce

| Co | Položka | Vzorec |
|---|---|---|
| Profily po 24 in osově | Délková | `ceil(L / 2) + N` |
| Izolační pásy, SF | Délková s výškou | `A` |
| Barva, obě strany, galony po 350 SF | Délková s výškou | `ceil(A * 2 / 350)` |
| Krabice obkladů po 15 SF, 10 % navíc | Plošná | `ceil(A * 1.1 / 15)` |
| Soklová nebo okrajová lišta, LF | Plošná | `P` |
| Beton, kubické yardy | Plošná s hloubkou | `A * H / 27` |
| Beton zaokrouhlený nahoru na čtvrt yardu | Plošná s hloubkou | `ceil(A * H / 27 * 4) / 4` |
| Závěsy, tři na dveře | Počtová | `N * 3` |
| Alespoň jedna krabice, jedna na 12 | Počtová | `max(1, ceil(N / 12))` |

## Když je vzorec chybný

Řádek pod vzorcem se změní na chybové hlášení, například `"X" zde není naměřená hodnota. Použijte L, H, A, N.` nebo `A ")" chybí.` Komponenta pak nemá žádná množství, její řádek v {{ui:Množství}} ukáže "Chyba vzorce: …" a záhlaví hlásí "Neúplné: 1 chyba vzorce (nezahrnuto do součtů)". Opravte vzorec a součty se aktualizují.

Vzorec, který dělí nulou, je také chyba ("Vzorec dělí nulou."), například `A / H` u položky bez hloubky.

## Limity

- Vzorce pracují se **součty** položky, ne úsek po úseku. `ceil(L * 12 / 16) + N` přidá jeden profil na úsek; zaokrouhlování po jednotlivých úsecích zatím není.
- Vzorec může používat jen proměnné své položky, ne proměnné jiné položky.
- Až 50 komponent na položku, 500 znaků na vzorec.

## Odebrání komponenty

Pod komponentou vyberte {{ui:Odebrat komponentu}}. Vrátit to můžete klávesou {{key:Mod+Z}}.
