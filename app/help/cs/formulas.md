---
title: Jazyk vzorců
summary: Pravidla pro vzorce množství sestav – proměnné, operátory, funkce, zaokrouhlení a každá chybová hláška.
keywords: vzorec, výraz, syntaxe, funkce, ceil, floor, round, min, max, abs, proměnné, operátory, výpočet
from: 4da14575
---

Komponenty sestavy získávají množství ze vzorce. Vzorec je malý aritmetický výraz nad naměřenými hodnotami položky. Příklady najdete v [Sestavy a vzorce](topic:assemblies).

## Proměnné

| Typ položky | Proměnná | Význam |
|---|---|---|
| Délkový | `L` | Celková délka |
| Délkový | `H` | Výška položky |
| Délkový | `A` | Plocha stěn, L × H, bez otvorů úseků, které je nesou (výkaz z BimCraft). Pokud výkaz uvádí metodu měření, `A` se měří podle ní: otvory nepřesahující nejmenší velikost metody zůstanou zahrnuty a to, co metoda odečítá v místech styku stěn, se vynechá. Poznámka pod položkou uvádí metodu |
| Délkový | `N` | Počet úseků |
| Plošný | `A` | Celková čistá plocha (obrysy minus výřezy) |
| Plošný | `P` | Celkový obvod včetně hran výřezů |
| Plošný | `H` | Hloubka nebo tloušťka položky |
| Plošný | `N` | Počet ploch |
| Počet | `N` | Počet |

- Proměnné jsou v jednotkách položky: viz [Jednotky](topic:units).
- Velká a malá písmena jsou stejná: `l` je `L`.
- Fungují pouze proměnné vlastního typu položky. `P` u délkové položky dává `"P" není zde naměřená hodnota. Použijte L, H, A, N.`
- Prázdná výška nebo hloubka je 0.

## Operátory

| Zapíšete | Význam |
|---|---|
| `+` | Sčítání |
| `-` nebo `−` | Odčítání, nebo záporná hodnota |
| `*` nebo `×` | Násobení |
| `/` nebo `÷` | Dělení |
| `( )` | Seskupení |

Násobení a dělení mají přednost před sčítáním a odčítáním: `L * 2 + 4` je (L × 2) + 4. V pochybnostech používejte závorky.

Čísla mohou mít desetinná místa (`1.333`, `.5`) a exponenty (`1e3` = 1000). Mezery se ignorují.

## Funkce

| Funkce | Výsledek | Příklad |
|---|---|---|
| `ceil(x)` | Zaokrouhlení nahoru na celé číslo | `ceil(67.5)` = 68 |
| `floor(x)` | Zaokrouhlení dolů na celé číslo | `floor(67.5)` = 67 |
| `round(x)` | Zaokrouhlení na nejbližší celé číslo, poloviny od nuly | `round(2.5)` = 3 |
| `round(x, d)` | Zaokrouhlení na d desetinných míst (0 až 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Nejmenší hodnota | `min(N, 10)` |
| `max(a, b, …)` | Největší hodnota | `max(1, ceil(N / 12))` |
| `abs(x)` | Hodnota bez znaménka | `abs(-3)` = 3 |

`ceil` a `floor` ignorují drobný šum zaokrouhlování počítače, takže hodnota, která má být přesně 1, se nikdy nezaokrouhlí nahoru na 2.

## Chyby

Vzorec, který nelze přečíst ani vypočítat, zobrazí svou chybu pod polem a komponenta se vynechá z součtů (záhlaví {{ui:Množství}} uvádí "Neúplné"). Hlášení:

| Hlášení | Oprava |
|---|---|
| Zadejte vzorec, například L nebo ceil(L / 1.333) + 1. | Vzorec je prázdný. |
| "X" není zde naměřená hodnota. Použijte … | Použijte jednu z uvedených proměnných. |
| "X" není zde funkce. Použijte ceil, floor, round, min, max, abs. | Použijte jednu z těchto funkcí. |
| "#" není ve vzorci povoleno. | Odstraňte tento znak (jednotky, `%`, `$` a `=` nejsou povoleny). |
| Chybí ")". / Je tu ")" bez svého "(". | Vyrovnejte závorky. |
| Před ")" chybí hodnota. | Něco jako `max(1, )`: doplňte hodnotu. |
| Vzorec končí předčasně. | Něco jako `L *`: dokončete jej. |
| Neočekávané "…". Chybí operátor? | Dvě hodnoty vedle sebe, například `2L`: napište `2 * L`. |
| ceil() přijímá 1 hodnotu. | Funkci předejte správný počet hodnot. |
| round(x, digits) potřebuje celá čísla od 0 do 10. | Použijte celý počet desetinných míst. |
| Vzorec dělí nulou. | Obvykle H je 0: nastavte výšku nebo hloubku položky. |
| Vzorec nevrací číslo. | Výsledek je příliš velký na to, aby byl číslem. |
| Tento vzorec je příliš dlouhý (nejvýše 500 znaků). | Zkraťte jej. |

## Bezpečné už z principu

Vzorec může provádět pouze aritmetiku s výše uvedenými proměnnými a funkcemi. Nemůže spouštět kód ani číst cokoli jiného, takže vzorec v projektovém souboru, který vám někdo pošle, je neškodný.
