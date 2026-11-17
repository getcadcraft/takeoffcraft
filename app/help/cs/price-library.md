---
title: Knihovna cen
summary: Uchovávejte své položky, sazby a sestavy v knihovně, importujte ji z CSV nebo z minulého odhadu, přidávejte do libovolného výkazu položky z ní a aktualizujte z ní ceny výkazu.
keywords: knihovna, oborové balíky, ceník, cenová kniha, databáze nákladů, import csv, sazby, sestavy, opětovné použití, šablonové položky, aktualizovat ceny, přeceňování
from: 37356c68
---

**Knihovna cen** uchovává položky, které používáte zakázku za zakázkou: jejich typ, jednotku, výšku, odpad, sazby za materiál a práci a jejich sestavu. Je uložena v tomto prohlížeči odděleně od jakéhokoli výkazu, takže ji může použít každý výkaz, který zde otevřete.

Otevřete ji tlačítkem {{ui:Library}} nahoře v panelu {{ui:Items}}.

## Naplnění knihovny

- {{ui:Import CSV…}} načte tabulku uloženou jako CSV (sloupce viz níže). Položky, jejichž název a typ už jsou v knihovně, se nahradí; ostatní se přidají. Řádky, které nelze přečíst, se přeskočí a řekne se, které a proč.
- {{ui:Add this takeoff's items}} zkopíruje každou položku otevřeného výkazu do knihovny, se sazbami a sestavou (ne se značkami).
- Odhad CSV, který TakeoffCraft exportuje ([Export odhadu](topic:export-estimate)), se importuje tak, jak je: ceny poslední zakázky předvyplní další.

- {{ui:Trade packs…}} přidá zdarma sestavy pro obor, například sádrokarton, elektroinstalace nebo beton, bez cen. Viz [Oborové balíky](topic:trade-packs).

{{ui:Export CSV}} uloží knihovnu jako CSV: pro uchování kopie, úpravu v tabulkovém procesoru nebo předání kolegovi. {{ui:Clear}} ji vyprázdní (klikněte dvakrát).

:::note
Knihovna je uložena v úložišti tohoto prohlížeče. Jiný prohlížeč, jiný počítač nebo soukromé okno má vlastní (nebo žádnou). Pro přenos ji exportujte.
:::

## Použití ve výkazu

- Zaškrtněte položky (napište do {{ui:Find in the library}}, abyste zúžili seznam) a zvolte {{ui:Add to takeoff}}. Přidají se i se svými sestavami v jednom kroku, který {{key:Mod+Z}} vrátí zpět. Název, který už ve výkazu je, dostane číslo, například `Carpet (2)`.
- {{ui:Update prices}} dá položkám výkazu odpad a sazby z knihovny, u každé položky, jejíž název a typ odpovídají položce knihovny, a totéž u komponent sestavy stejného názvu. Výšky, jednotky a vzorce zůstávají beze změny. Jedno {{key:Mod+Z}} vrátí všechny staré ceny zpět.

## Sloupce CSV

První řádek pojmenovává sloupce, v libovolném pořadí; ostatní sloupce se ignorují.

| Sloupec | Co do něj patří |
|---|---|
| Item (nebo Name) | Název položky. Povinné. |
| Type | Linear, Area nebo Count (fungují i LF, SF a EA). Když je prázdné, rozhodne jednotka. |
| Unit | LF nebo m; SF, SY nebo m²; EA. Prázdné: obvyklá jednotka daného typu. |
| Waste % | `10` nebo `10%`. |
| Material per unit, Labor per unit | Sazby jako `2.10` nebo `$1,250`. |
| Height (nebo Depth) | `9'-0"`, `9`, nebo `2.7` pro metrické jednotky. |
| Component, Formula | Řádek s názvem komponenty (nebo typem `Component`) je součástí sestavy položky nad ním. Jeho jednotka, odpad a sazby jsou jeho vlastní; jeho vzorec používá písmena položky, viz [Sestavy a vzorce](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Oddělovat sloupce čárkami, středníky nebo tabulátory jde všechno.
