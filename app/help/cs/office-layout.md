---
title: "Kancelářské rozvržení: seskupení, mezisoučty, název a nadpisy podle výchozích zásad"
summary: Zapněte doplněk Výchozí zásady a odhad, množství podle listů, exporty i to, co čte asistent, převezmou rozvržení tabulek vaší kanceláře, stejné, jaké používají tabulky v BimCraftu.
keywords: kancelářský standard, kancelářské rozvržení, výchozí zásady, doplněk, rozvržení tabulky, seskupit podle typu, seskupit podle listu, mezisoučet, součty, název, nadpisy, velká písmena, rozvržení odhadu, rozvržení exportu, nastavení
from: cfd2f30a
---

## Co uděláte

Nechte TakeoffCraft rozložit své tabulky tak, jak je vaše kancelář vydává, bez nastavování v každém výkazu. Rozvržení se nastaví jednou, ve Výchozích zásadách, a platí pro všechny aplikace na tomto počítači: co nastavíte v BimCraftu nebo CadCraftu, to použije TakeoffCraft, a naopak.

## Postup

1. Otevřete **Nastavení › Doplňky** a zapněte **Výchozí zásady**. Je vypnutá, dokud to neuděláte; když je vypnutá nebo nic nenastaveno, TakeoffCraft je přesně takový, jaký byl.
2. Otevřete **Nastavení › Globální › Výchozí zásady** a najděte **Rozvržení tabulek (kancelářský standard)**:

| Zásada | Co dělá v TakeoffCraftu |
|---|---|
| Seskupit tabulky podle | **Typ** seskupí odhad podle typu položky (Linear, Area, Count, Typed quantity). **Úroveň** seskupí množství podle listu podle jeho listu. **Místnost** a **Bez seskupení** nechají obojí bez seskupení |
| Součty v tabulkách | **Mezisoučet pod každou skupinou a celkem** přidá mezisoučet pod každou skupinu. Celkový součet zakázky zůstává vždy |
| Název tabulky | Řádek nad tabulkou, například `{schedule}: office layout` |
| Nadpisy sloupců | Jak je napsáno, VELKÝMI PÍSMENY nebo S Velkými Písmeny |

3. Zavřete Nastavení. Tabulky se hned přizpůsobí.

## Co rozvržení ovlivní

- **Množství › Podle položky** a **Podle listu**: nadpisy skupin, mezisoučet pod každou skupinou, název a způsob psaní nadpisů. Řádek pod názvem říká, které části vaše kancelářská norma určila. Řádky zůstávají stejné: sazby a odpad do nich dál zapisujete a klikáním na čísla vyberete jejich značky. Komponenta nebo druhá podmínka zůstává pod svou položkou.
- **Exportovaný odhad** (CSV a XLSX): stejné skupiny a mezisoučty. V sešitu je mezisoučet vzorcem `SUBTOTAL` nad svou skupinou a celkový součet je také vzorcem, takže nic se nepočítá dvakrát.
- **Co čte asistent**: `takeoff_estimate` a `takeoff_quantities` (podle listu) přidají blok `layout` se skupinami, řádky a mezisoučty a uvedou, které části kancelář nastavila.

## Co si zachová vlastní

- **Množství › Podle oblasti** má vlastní seskupení (podle oblasti nabídky) a ponechá si ho.
- **Celkový součet zakázky**, přirážky souhrnu nabídky a varianty se nepřeskupují.
- Seskupení, pro které tabulka nemá sloupec, se vynechá: odhad nemá úroveň, množství podle listu nemá typ.

## Dobré vědět

- Zásady se uchovávají v tomto prohlížeči pro všechny aplikace CadCraftu a přenášejí se v souboru Výchozích zásad (**Uložit do souboru** / **Načíst ze souboru** na stejném místě), takže kancelář může sdílet jeden soubor.
- Odhad exportovaný jako CSV se skupinami je určen ke čtení. Chcete-li odhad vrátit zpět jako knihovnu cen, exportujte ho bez nastavení seskupení.
- Protějšek této normy v BimCraftu: tabulky, nastavení a exporty. TakeoffCraft zatím nemá vlastní zásady, takže v Nastavení › TakeoffCraft není sekce Výchozí zásady.
