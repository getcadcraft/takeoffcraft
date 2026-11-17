---
title: Sloupce exportu
summary: Každý list a sloupec exportu XLSX a CSV se vzorci, které list Rozpočet obsahuje.
keywords: export, sloupce, xlsx, csv, list, list rozpočtu, podle listu, značky, měřítka, vzorce, pole
from: fed07851
---

## Rozpočet (list XLSX a CSV)

Jeden řádek na položku, následovaný řádkem na každou komponentu její sestavy (odsazeno). Poté prázdný řádek a celkový součet zakázky.

| Sloupec | Obsah | V XLSX |
|---|---|---|
| A Položka | Název položky (tučně) nebo název komponenty (odsazeno) | Text |
| B Typ | Délkový, Plošný, Počet nebo Komponenta | Text |
| C Jednotka | LF, m, SF, SY, m², EA, nebo jednotka komponenty | Text |
| D Množství | Naměřený součet, nebo výsledek vzorce | Číslo |
| E Odpad % | Odpad | Procento (0.10 = 10%) |
| F Množství s odpadem | Množství × (1 + odpad) | Vzorec `D*(1+E)` |
| G Materiál za jednotku | Sazba za materiál | Číslo |
| H Práce za jednotku | Sazba za práci | Číslo |
| I Materiál | Celkový materiál | Vzorec `ROUND(F*G,2)` |
| J Práce | Celková práce | Vzorec `ROUND(F*H,2)` |
| K Celkem | Materiál + práce | Vzorec `I+J` |
| L Poznámky | Použitý vzorec, chyba vzorce, značky na listech bez měřítka, plocha stěn, obvod | Text |

Řádek celkového součtu zakázky: `SUM` sloupců I, J a K přes všechny řádky výše a v poznámkách "Neúplné: viz poznámky výše", když něco chybí.

Řádek s chybou vzorce nemá množství ani částky; jeho poznámka uvádí chybu. Řádek záhlaví je ukotven.

V CSV obsahují stejné sloupce prosté hodnoty, Odpad % je číslo v procentech (10 pro 10%) a peníze jsou v dolarech se dvěma desetinnými místy. Text, který by tabulkový procesor mohl považovat za vzorec (začínající `=`, `+`, `-` nebo `@`), dostane úvodní `'`, aby zůstal textem.

## Podle listu (pouze XLSX)

| Sloupec | Obsah |
|---|---|
| List | Název listu (s názvem PDF, pokud není otevřeno) |
| Položka | Název položky |
| Množství | Množství této položky na tomto listu v její jednotce |
| Jednotka | Jednotka položky |
| Značky | Počet značek |

## Značky (pouze XLSX)

Jeden řádek na značku.

| Sloupec | Obsah |
|---|---|
| List | Název listu |
| Položka | Název položky |
| Typ | Délkový, Plošný nebo Počet |
| Množství | Délka, čistá plocha, nebo 1 |
| Jednotka | LF nebo m; SF, SY nebo m²; EA |
| Podrobnosti | Délkový: délky úseků, odečtené označené "(deduct)" a "odečítá (délka) z (délka) nakreslené". Plošný: hrubé a výřezové plochy, pokud existují výřezy, a obvod. "List nemá měřítko" u značek bez měřítka. |
| Oblast nabídky | Pouze když výkaz má oblasti nabídky: plocha značky, nebo "Bez oblasti nabídky" |

## Podle oblasti nabídky (pouze XLSX, pokud výkaz má oblasti nabídky)

| Sloupec | Co |
|---|---|
| Oblast nabídky | Název oblasti, nebo "Bez oblasti nabídky" |
| Položka | Položka, nebo odsazená komponenta pod ní |
| Jednotka | Jednotka položky nebo komponenty |
| Množství | Naměřeno v této oblasti (komponenty: vzorec na součtech oblasti) |
| Množství s odpadem | Množství × (1 + odpad) |
| Materiál, Práce, Celkem | Počítáno na cent, jako v Rozpočtu |
| Poznámky | Vzorec, chyby a značky bez měřítka, jako v Rozpočtu |

Každá oblast končí řádkem "(název) mezisoučet", jehož náklady jsou vzorce `SUM` přes její řádky; poslední řádek, **Všechny oblasti nabídky**, sčítá mezisoučty. List **Značky** pak má sedmý sloupec **Oblast nabídky**.

## Měřítka (pouze XLSX)

Jeden řádek na list, který má měřítko nebo značky.

| Sloupec | Obsah |
|---|---|
| List | Název listu |
| Měřítko | Název předvolby, nebo kalibrované měřítko, nebo "Bez měřítka" |
| Způsob | "Předvolba", nebo "Kalibrováno podle (zadané vzdálenosti)" |
| Stopy na jednotku PDF | Přesný koeficient měřítka, který TakeoffCraft používá |

## Názvy souborů

- `(name).xlsx` a `(name).csv`, kde název pochází z prvního PDF otevřeného ve výkazu.
- CSV je v kódování UTF-8 s značkou pořadí bajtů (BOM) a konci řádků Windows, které čtou tabulkové procesory na každé platformě.
