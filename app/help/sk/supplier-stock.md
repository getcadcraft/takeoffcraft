---
title: Kontrola zásob dodávateľa a dodacích lehôt
summary: Pridajte zoznam zásob dodávateľa (CSV alebo tabuľku) a TakeoffCraft podľa neho skontroluje, čo výkaz výmer potrebuje vrátane odpadu: či je dostatok na sklade a ako dlho sa čaká. Nedostatky a dlhé čakania sa zobrazia na paneli Problémy.
keywords: dodávateľ, zásoby, na sklade, dodacia lehota, dostupnosť, nedostatok, backorder, zoznam objednávky, csv, sku, predajca, materiály, dodávka, problémy
from: f11160fb
---

{{ui:Dodávka}} na paneli nástrojov (nákladné auto) skontroluje, čo váš výkaz výmer potrebuje, oproti zoznamu zásob dodávateľa. Riadky dodávateľa, ktoré sú dôležité, sa uchovávajú v súbore výkazu výmer. Nič sa nikam neodosiela a nič sa nepýta dodávateľa: súbor prinesiete vy.

## Súbor

CSV súbor s riadkom hlavičky. Potrebuje stĺpec s názvom alebo SKU a stĺpec so zásobami alebo dodacou lehotou. Tieto hlavičky sa rozpoznajú (ľubovoľné poradie, ľubovoľné veľkosti písmen): Item, Name, Description alebo Product; SKU, Part alebo Item #; In stock, On hand, Available alebo Quantity; Lead time alebo Delivery days; Unit alebo UOM; Price alebo Cost; Supplier alebo Vendor.

- Zásoby môžu byť číslo (1,200), "In stock" alebo "Out of stock".
- Dodacia lehota môže byť "5 days", "2 weeks", "2-3 weeks" (použije sa dlhšia), "3 months", "same day" alebo "backorder". Obyčajné číslo je v jednotke hlavičky (dni, pokiaľ hlavička nehovorí weeks alebo months).
- Súbory Excelu sa nečítajú: najprv uložte tabuľku ako CSV.

## Kontrola výkazu výmer

1. Vyberte {{ui:Dodávka}}, potom {{ui:Pridať súbor dodávateľa…}} a vyberte CSV. Môžete pridať viac súborov: až päť súborov, celkovo sa zachová 2 000 riadkov, najprv tie, ktoré sa zhodujú s vašimi položkami.
2. Každá položka, druhá podmienka a časť zostavy s množstvom sa priradí k riadku podľa názvu alebo podľa SKU v názve. Podobný názov (jeden obsahuje druhý) sa použije, keď presná zhoda chýba, a aplikácia to oznámi.
3. Pod {{ui:Čo výkaz výmer potrebuje}} sa najskôr zobrazia krátke položky: "Chýba 120 EA", "Dodacia lehota 21 dní", "Na objednávku", "Jednotka sa líši", "Chýba údaj o zásobách" alebo "Na sklade". Potreba zahŕňa odpad. Jednotka dodávateľa, ktorá nie je jednotkou odhadu (tona oproti stope), sa nahlási a nikdy sa neporovnáva. Každý riadok má {{ui:Vybrať položku}}, ktoré preskočí na položku.
4. Nastavte {{ui:Najdlhšie požadované čakanie (dni)}} (predvolene 14). Položka, ktorá nie je na sklade a čaká dlhšie, sa označí a súhrn uvedie najdlhšie čakanie, na ktorom záleží.
5. {{ui:Zoznam objednávky (CSV)}} stiahne krátke položky s chýbajúcim množstvom, dodávateľom a dodacou lehotou. {{ui:Vynechať}} vyradí potrebu z kontroly (je to krok späť).

## Tabuľkové súbory a cenová knižnica

Zoznam dodávateľa môže byť excelový zošit (.xlsx) rovnako ako CSV: číta sa prvý list s rovnakými názvami stĺpcov. Vzorce sa nikdy nevykonávajú; číta sa hodnota, ktorú súbor obsahuje.

Keď je pridaný súbor s cenami, {{ui:Ceny do knižnice}} v dialógu nastaví materiálovú cenu každej položky [knižnice](topic:price-library), ktorú súbor oceňuje: rovnaký názov a jednotka, ktorá je rovnaká (alebo nie je uvedená). Práca, odpad, výška a zostavy zostanú nezmenené a poznámka položky uvedie, z ktorého súboru pochádza cena. Položka v metroch sa neoceňuje zo zoznamu v stopách a položka bez zodpovedajúceho názvu sa nechá na pokoji; stavový riadok uvedie, koľko sa pre jednotku preskočilo. Prepočítajte z knižnice, aby sa nové ceny dostali do tohto výkazu výmer.

## V paneli Problémy

Nedostatok je upozornenie a dlhé čakanie je poznámka, v spoločnom paneli Problémy ("Zásoby dodávateľa"), takže sú spolu s každou ďalšou kontrolou. Môžete ich prijať s dôvodom a prijatie sa uloží do výkazu výmer.

## S vaším asistentom

Ak v Nastaveniach povolíte asistentov, môžu čítať kontrolu (supply_check). Pridanie súboru dodávateľa je vaša vec.

## Dobre vedieť

Údaje o zásobách sú aktuálne len toľko, ako aktuálny je súbor, ktorý pridáte. Ak ho chcete obnoviť, pridajte súbor znova: súbor s rovnakým názvom nahradí predchádzajúci.
