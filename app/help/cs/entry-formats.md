---
title: Zadávání délek, sazeb a procent
summary: Co můžete zadat pro vzdálenosti, výšky, peněžní sazby a procenta odpadu, s příklady a hlášeními pro vstup, který TakeoffCraft nedokáže přečíst.
keywords: zadání, formát, stopy palce, zlomky, desetinné stopy, metrický, metry, milimetry, sazba, peníze, dolary, procento, odpad, psaní
from: 215bbf4d
---

## Délky

Používá se pro **Skutečná vzdálenost** v {{ui:Kalibrovat}} a pro {{ui:Výška}} a {{ui:Hloubka}} v editoru položky.

| Zadáte | Znamená |
|---|---|
| `24'-0"` | 24 stop |
| `24'-6 1/2"` | 24 stop 6½ palce |
| `12' 6 1/2"` | 12 stop 6½ palce (mezera místo pomlčky) |
| `12'-6-1/2"` | 12 stop 6½ palce (pomlčky mezi částmi) |
| `24'` | 24 stop |
| `30"` | 30 palců |
| `6 1/2"` | 6½ palce |
| `3/4"` | ¾ palce |
| `24 ft 6 in` | 24 stop 6 palců (také `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 ve výchozí jednotce (viz níže) |
| `24.5'` | 24.5 stopy |
| `7.5 m` | 7.5 metru |
| `750 cm` | 750 centimetrů |
| `7500 mm` | 7,500 milimetrů |

- Holé číslo je v **stopách** pro kalibraci a pro položky v LF, SF nebo SY a v **metrech** pro položky v m nebo m².
- Typografické uvozovky a znaky prime z textových editorů (′ ″ ’ ”) fungují jako `'` a `"`. Dva apostrofy `''` se počítají jako `"`.
- Čárky se ignorují: `1,200 mm` je 1200 mm.
- Zlomky potřebují celá čísla na obou stranách: `6 1/2"` funguje, `6.5 1/2"` nikoli.
- Nulové a záporné vzdálenosti jsou odmítnuty.

Hlášení:

- "Zadejte vzdálenost, například 24'-0" nebo 7.5 m." (pole je prázdné)
- "Zadejte vzdálenost větší než nula."
- "Použijte stopy a palce (24'-6 1/2"), desetinné stopy, m, cm nebo mm." (neznámá jednotka)
- "Tuto vzdálenost nelze přečíst. Zkuste 24'-6 1/2" nebo 24.5."

Výšku nebo hloubku položky odstraníte vymazáním pole.

### Aritmetika

Každé pole délky i vstupní pole během kreslení přijímá také výpočet se znaky `+`, `-`, `*`, `/` a závorkami:
`4+7/16` (4.4375 ve výchozí jednotce), `12'6" + 3/4"`, `(24'-0")/3` (8 stop), `2*450mm`.

- Pomlčka napsaná v délce je stále její součástí: `24'-6"` je 24 stop 6 palců a `6-1/2` je 6½. Pro odčítání dejte pomlčku do mezer: `24' - 6"` je 23'-6".
- Holé číslo násobí nebo dělí délku jako číslo; přičtené k délce je ve výchozí jednotce.
- Fungují také `abs`, `round`, `ceil` a `floor`. Výpočet, který nelze přečíst, je odmítnut s uvedením, kde došlo k chybě.

## Jak se délky zobrazují

Délky se zobrazují ve stopách, palcích a šestnáctinách: `12'-6 1/2"`, `0'-0 3/4"`. Hodnoty se pro zobrazení zaokrouhlují na nejbližší 1/16 palce; samotná množství se nezaokrouhlují. Desetinné hodnoty se zobrazují se dvěma desetinnými místy a oddělovači tisíců, například `1,234.50 LF`.

## Sazby (materiál a práce za jednotku)

| Zadáte | Znamená |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (až čtyři desetinná místa; další se zaokrouhlí) |
| (prázdné) | $0 |

Hlášení: "Zadejte částku, například 12.50." nebo "Tato částka je příliš vysoká." Záporné sazby nejsou přijímány.

Částky za položku (materiál, práce, součty) se počítají na cent: množství s odpadem × sazba, zaokrouhleno na poloviny směrem od nuly, přesně jako `ROUND(x, 2)` v tabulkovém procesoru.

## Procento odpadu

| Zadáte | Znamená |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (prázdné) | 0% |

Až dvě desetinná místa, od 0% do 1000%. Hlášení: "Zadejte procento, například 10 nebo 7.5." nebo "Odpad nad 1000% není povolen."

## Názvy a jednotky

- Názvy položek a komponent: až 200 znaků.
- {{ui:Jednotka}} komponenty: libovolný text až do 20 znaků, například `EA`, `sheets`, `CY`, `gal`. Je to pouze popisek; TakeoffCraft jej nepřevádí.

## Vzorce

Vzorce sestav mají vlastní pravidla: viz [Jazyk vzorců](topic:formulas).
