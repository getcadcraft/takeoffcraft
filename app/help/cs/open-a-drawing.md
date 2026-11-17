---
title: Otevření výkresu DWG nebo DXF
summary: Otevřete soubor výkresu jako listy (prostor modelu a každé rozvržení), začněte s měřítkem, které výkres udává, zobrazte nebo skryjte jeho vrstvy a připojte odkazované výkresy.
keywords: dwg, dxf, cad, výkres, otevřít výkres, rozvržení, prostor modelu, prostor papíru, listy, jednotky, insunits, měřítko výřezu, xref, připojený výkres, vrstvy, zamrazené, bez pdf, vykreslit, bez vykreslení
from: d8c3f504
---

TakeoffCraft otevírá výkres DWG nebo DXF stejně jako PDF: nemusíte ho nejdřív vykreslovat do PDF. Počítání přímo z výkresu je přesné, protože výkres ví, čím je každý objekt. Viz [Počítání z výkresu](topic:count-from-a-drawing).

## Otevření výkresu

1. Zvolte {{ui:Open plans}} ve skupině {{ui:File}}, nebo stiskněte {{key:Mod+O}}.
2. Vyberte soubor DWG nebo DXF. Můžete vybrat více souborů, a s nimi i PDF.
3. Zvolte Otevřít.

Výkresy můžete také přetáhnout na TakeoffCraft, stejně jako PDF. Nic se nenahrává: prohlížeč čte soubor v počítači.

TakeoffCraft čte DWG od AutoCADu 2000 do 2018 a ASCII DXF od R12 do 2018. Binární DXF (uložte jej jako ASCII nebo jako DWG) a soubor, který není ani jedním, odmítne a řekne proč. Poškozený soubor se otevře s tím, co šlo přečíst, a zpráva to uvede; jeho počty mohou být neúplné.

## Listy

- **Model** je prostor modelu výkresu.
- **Každé rozvržení** (karta Paper) je list pojmenovaný podle své karty, v pořadí karet. Rozvržení zobrazuje model přes své výřezy, tak jak se vykresluje.

Zoom, posun, přichycení k vlastním čarám výkresu, značky, poznámky, {{ui:Calibrate}} a ostatní fungují jako u PDF. Listy výkresu se ukládají ve výkazu podle názvu souboru a otisku jeho obsahu, stejně jako PDF: otevřete stejný soubor znovu a značky jsou na jeho listech.

## Měřítko

List začíná měřítkem, které výkres udává:

- **Rozvržení** převezme měřítko svého největšího výřezu. Měřítko jako 1/2" = 1'-0" je pojmenováno jako předvolba, kterou je; jiné se zobrazí jako "Z výřezu výkresu: 1" = 2.5'". Má-li rozvržení výřezy v jiných měřítcích, největší určuje měřítko listu: ostatní zkontrolujte pomocí {{ui:Check}}.
- **Model** převezme jednotky výkresu (palce, milimetry, stopy…) jako své měřítko: "Jednotky výkresu (palce)".
- **Výkres bez jednotek** (výkres neříká, zda jednotka je palec nebo milimetr) nemá měřítko: list ukazuje "Bez měřítka" a měření na něm je odmítnuto, jako u PDF bez měřítka. Počítání měřítko nepotřebuje. Nastavte je pomocí {{ui:Calibrate}}.

{{ui:Calibrate}}, {{ui:Check}} a seznam {{ui:Preset}} mohou měřítko kdykoli změnit a mají přednost před měřítkem výkresu. Seznam předvoleb je u Modelu vypnutý, protože ten nemá formát papíru.

## Vrstvy

{{ui:Layers}} na liště listu vypisuje vrstvy výkresu s počtem objektů, které každá má na tomto listu. Vrstvy, které soubor vypnul nebo zamrazil, začínají skryté. Odškrtnutím vrstvu skryjete, zaškrtnutím skrytou zobrazíte: list se znovu vykreslí a skryté objekty jsou vynechány z počtů i z objektů nabízených pro {{ui:Measure drawing}}, pokud nepožádáte o počítání i skrytých vrstev. {{ui:Show all}} zobrazí všechny vrstvy; {{ui:Back to the file's layers}} vrátí vaše změny zpět. Volby vrstev patří této relaci, ne souboru výkazu.

## Připojené výkresy (xref)

Výkres, který odkazuje na jiné výkresy, je zobrazí tam, kde jsou vložené. TakeoffCraft najde připojený výkres mezi **otevřenými soubory** podle názvu souboru: otevřete hostitelský výkres a připojený výkres společně (nebo jeden po druhém). Do té doby stavový řádek říká, kolik připojených výkresů nebylo nalezeno, co kreslí, chybí, a počty to uvedou.

## Omezení

- Objekty, které TakeoffCraft nedokáže přečíst nebo umístit (proxy objekty, neznámé třídy), jsou vypsány v okně počtu podle typu; nikdy se nezahazují bez upozornění.
- Velmi velké výkresy se kreslí po částech a počty se zastaví u limitu, o čemž informují. Pro takový výkres raději otevřete PDF vykreslení.
- Výkres se kreslí černě a ve svých vlastních barvách, ztmavených pro bílý papír. Tabulky stylů tisku a přiřazení per se neaplikují.
