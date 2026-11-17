---
title: Zemní práce a výškové body
summary: Označte výškové body na situaci, předejte je aplikaci CivilCraft pro povrch a výkop a násyp a zde zadejte jednoduchá množství výkopu.
keywords: zemní práce, výkop, výkop, násyp, výkop a násyp, úprava terénu, výškový bod, výšky, topografie, povrch, triangulace, civilcraft, body, pnezd, rýha
from: a898e508
---

TakeoffCraft měří to, co je nakresleno na listu. Zemní práce potřebují povrch terénu, proto je sdílen s aplikací CivilCraft, která z bodů vytváří povrchy, upravuje je a počítá výkop, násyp a odvoz.

## Jednoduchý výkop zde

Pro půdorys vykopaný do jedné hloubky stačí plošná položka s **hloubkou**: objem je plocha × hloubka. [Balíček oborů](topic:trade-packs) pro generálního dodavatele obsahuje položku hromadného výkopu (objem v terénu, objem volné zeminy a počet nákladních jízd) a položku inženýrské rýhy (výkop, lože a zásyp podle délky a hloubky).

## Výškové body pro aplikaci CivilCraft

1. Nastavte měřítko listu situace.
2. Vytvořte položku **Počet**, například "Stávající terén", a klikněte na každý výškový bod na listu.
3. Vyberte značku a do panelu Vybraná značka zadejte její {{ui:Výška}}: `102.5`, `102'-6"` nebo `31.24 m`. Záporné a nulové výšky jsou v pořádku.
4. Otevřete nabídku {{ui:Export}} a zvolte {{ui:Výškové body}}. Dostanete soubor bodů (`.csv`) se sloupci Point, Northing, Easting, Elevation a Description, jeden řádek pro každý označený bod otevřeného listu.
5. Otevřete tento soubor v aplikaci CivilCraft (viz [Import bodů](app:civilcraft/import-points)). Z bodů vytvoří povrch ([Vytvoření povrchu](app:civilcraft/build-surface)); odtud porovnává povrchy a počítá výkop a násyp ([Objemy](app:civilcraft/volumes)).

Y (Northing) a X (Easting) jsou vlastní souřadnice listu ve stopách, měřené od rohu stránky v jejím měřítku: vzdálenosti a objemy mezi body jsou správné, ale nejsou to souřadnice vašeho zaměření pozemku. Až je budete potřebovat, přesuňte je v aplikaci CivilCraft na souřadnice pozemku.

:::note
Body z různých listů nesdílejí souřadnice, proto export bere pouze otevřený list. Výšky se ukládají s výkazem a přenášejí se kopírováním a vložením.
:::

## Výkop a násyp z aplikace CivilCraft

Zemní práce z aplikace CivilCraft se vrátí jako dvě položky, které můžete ocenit:

1. V aplikaci CivilCraft urovnejte stavební plochy a koridory a poté pod **Zemní práce** zvolte {{ui:Odeslat do TakeoffCraft}} ([Objemy zemních prací](app:civilcraft/volumes)). Uloží se soubor množství (`.quantities.json`).
2. V aplikaci TakeoffCraft jej otevřete přes {{ui:Otevřít výkaz}}, nebo jej přetáhněte do aplikace. Váš výkaz zůstane otevřený: soubor přidá položky **Zemní práce: výkop** a **Zemní práce: násyp** jako [zadaná množství](topic:create-items#typed-quantities-no-drawing) v krychlových yardech (CY) pro projekt ve stopách, nebo v krychlových metrech (m³) pro projekt v metrech. Je to jeden krok: {{key:Mod+Z}} jej vrátí zpět.
3. Přejmenujte je, nastavte odpad, sazby a sestavy podle potřeby.

Když se návrh změní, odešlete znovu z aplikace CivilCraft a otevřete nový soubor: ty samé dvě položky dostanou nová množství. Jejich názvy, sazby, odpad a sestavy zůstanou tak, jak jste je nastavili. Pokud se jednotka projektu změnila, stavový řádek to uvede: zkontrolujte sazby. Soubor z jiného projektu aplikace CivilCraft přidá své vlastní dvě položky.

Množství jsou objemy v terénu, tak jak je aplikace CivilCraft změřila (mřížková metoda): bez úbytku nebo nárůstu. Přidejte je jako odpad, nebo pomocí vzorce, například `Q * 1.25`, pro objem volné zeminy. Editor položky ukazuje, odkud a kdy každá pochází; sloupec poznámek v rozpočtu to uvádí také.

:::note
Soubor množství je prostý JSON (`"format": "cadcraft-quantities"`), takže jej může zapsat i skript nebo jiný program: název aplikace, projekt a položky s klíčem, názvem, jednotkou a množstvím.
:::
