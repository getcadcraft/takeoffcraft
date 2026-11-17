---
title: Jednotky
summary: Jednotky, které může položka vykázat, jednotky proměnných jejího vzorce a způsob, jak se míchají imperiální a metrické jednotky.
keywords: jednotky, lf, sf, sy, sq, čtvereční yardy, střešní čtverce, akry, hektary, metry, čtvereční metry, ea, kus, metrické, imperiální, převod, výchozí jednotka
from: b7bf0528
---

## Jednotky položek

| Typ položky | Jednotka | Název |
|---|---|---|
| Délková | LF | lineární stopy (výchozí) |
| Délková | m | metry |
| Plocha | SF | čtvereční stopy (výchozí) |
| Plocha | SY | čtvereční yardy |
| Plocha | SQ | střešní čtverce (100 čtverečních stop) |
| Plocha | ac | akry |
| Plocha | m² | čtvereční metry |
| Plocha | ha | hektary |
| Počet | EA | kus |

Změňte ji pomocí {{ui:Jednotka}} v editoru položky kdykoli, i po měření; množství se hned převede.

Seznam {{ui:Jednotka}} ukazuje jednotky zapnuté v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} a vždy vlastní jednotku položky. Nová položka začne v délkové nebo plošné jednotce označené hvězdičkou, pokud je jednou z jednotek položky; jinak v LF nebo SF. Viz [Jednotky, zadané hodnoty a seznamy jednotek](common:unit-lists).

## Jednotky proměnných vzorce

| Jednotka položky | L, P, H | A |
|---|---|---|
| LF | stopy | čtvereční stopy (plocha stěny) |
| m | metry | čtvereční metry (plocha stěny) |
| SF | stopy | čtvereční stopy |
| SY | stopy | čtvereční yardy |
| SQ | stopy | střešní čtverce |
| ac | stopy | akry |
| m² | metry | čtvereční metry |
| ha | metry | hektary |

U položek SY je `A` ve čtverečních yardech, zatímco `P` a `H` zůstávají ve stopách. Objem z položky SY je `A * 9 * H / 27` kubických yardů; pro desky je jednodušší použít SF.

## Kde jsou jednotky pevné

Některé údaje vždy používají stopy:

- živý údaj ve stavovém řádku při kreslení (stopy-palce, SF),
- **Vybraná značka** (stopy-palce, LF a SF),
- výsledek kontroly (stopy-palce, s desetinnými stopami a metry),
- délky segmentů a obvody na listu Značky v tabulce (stopy-palce).

Součty položek, tabulka {{ui:Množství}}, vzorce a list Rozpočet používají vlastní jednotku položky.

## Měřítka a jednotky jsou oddělené

Měřítko listu říká, jak velký výkres je; jednotka položky říká, jak ji vykázat. Metrický výkres v `1:100` lze vykázat v LF a imperiální výkres v m². Kalibrace přijímá libovolnou jednotku: `24'-6"`, `7.5 m`, `7500 mm`.

## Přesnost

TakeoffCraft měří přesně z bodů, na které kliknete, včetně skutečných délek a ploch oblouků, a množství nezaokrouhluje. Zobrazení zaokrouhluje délky na 1/16 palce a desetinná čísla na dvě místa. Peníze se zaokrouhlují až u rozvinutých částek, na haléř.
