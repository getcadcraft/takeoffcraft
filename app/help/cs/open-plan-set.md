---
title: Začátek výkazu a otevření sady plánů
summary: Otevřete jedno nebo více PDF jako sadu plánů, orientujte se v listech a přecházejte mezi nimi.
keywords: otevřít, sada plánů, více pdf, více souborů, listy, výkresy, popisky stránek, seznam listů, procházet, přetažení, předání, otevřít v jiné aplikaci, označení
from: ed434468
---

Sada plánů je často několik PDF: architektonické, konstrukční, technické. TakeoffCraft je otevře vedle sebe jako jeden seznam listů a jeden výkaz může pokrýt všechny.

## Otevření PDF

1. Zvolte {{ui:Open plans}} ve skupině {{ui:File}}, nebo stiskněte {{key:Mod+O}}. (Ostatní styly nabídek to nazývají {{ui:Open PDFs…}}.)
2. V dialogu výběru souboru vyberte všechna PDF sady. Podržte {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} pro výběr více souborů, nebo {{key:Shift}} pro výběr rozsahu.
3. Zvolte Otevřít.
   Během načítání každého souboru se zobrazuje zpráva "Otevírání (název)…". Pak se každá stránka objeví v seznamu {{ui:Sheets}} a otevře se první stránka prvního nově otevřeného PDF.

PDF můžete také přetáhnout z {{pick:mac=Finderu|windows=Průzkumníka souborů|linux=vašeho správce souborů}} a pustit kamkoli na TakeoffCraft. Během tažení se objeví rámec "Přetáhněte PDF, výkresy DWG nebo DXF, nebo soubor .takeoff.json".

PDF přidáte později stejným postupem. PDF, která jsou už otevřená, se přeskočí.

Úvodní obrazovka také vypisuje PDF a výkazy, které jste nedávno otevřeli, v prohlížečích, které stránce umožňují znovu otevřít soubor (Chrome a Edge). Kliknutím jeden otevřete; prohlížeč může nejdřív požádat o souhlas. Viz [Vaše soubory](common:your-files).

:::note
Nic se nenahrává. Prohlížeč čte PDF v počítači a po zavření karty nebo volbě {{ui:New}} jsou z TakeoffCraftu pryč.
:::

## Výkresy vedle PDF

{{ui:Open plans}} přijímá také výkresy DWG a DXF, samostatně nebo spolu s PDF: prostor modelu a rozvržení každého výkresu se stanou listy ve stejném seznamu. Viz [Otevření výkresu DWG nebo DXF](topic:open-a-drawing), pak [Počítání z výkresu](topic:count-from-a-drawing).

## PDF předané z jiné aplikace

Jiná aplikace sady vám může předat PDF, které má otevřené: otevře TakeoffCraft v nové kartě a PDF se tam otevře, jako byste ho přetáhli. Stavový řádek hlásí "Otevřeno (název), předáno z (aplikace). Původní soubor je beze změny." Nic se nenahrává; soubor prochází úložištěm tohoto prohlížeče a po otevření z něj zmizí.

Pokud stavový řádek říká, že PDF "nedorazilo", karta čekala příliš dlouho nebo bylo PDF už otevřeno v jiné kartě: otevřete je pomocí {{ui:Open plans}}.

Opačně: pokud MarkupCraft běží tam, kde jste, a může soubor převzít, lišta listů pod výkresem má tlačítko {{ui:MarkupCraft}}: otevře PDF listu na obrazovce v MarkupCraftu, v nové kartě, k prohlédnutí a označení.

## Najít list

- Procházejte seznam {{ui:Sheets}} vlevo a klikněte na list.
- Napište do pole **Hledat listy** nahoře v seznamu a filtrujte podle čísla listu, názvu souboru nebo popisku stránky. Počet vedle {{ui:Sheets}} ukazuje "3 z 40", když je filtr zapnutý.
- Stiskněte {{key:PageDown}} pro další list a {{key:PageUp}} pro předchozí. Sledují seznam tak, jak je filtrován.

:::mac
Na klávesnici Mac bez kláves Page Up a Page Down stiskněte fn se šipkou nahoru nebo dolů.
:::

## Jak se listy pojmenovávají

- Stránka, které PDF přiřadí popisek, například `A-101`, se jmenuje podle tohoto popisku.
- Stránka bez popisku (nebo s popiskem, který je jen číslem stránky) se jmenuje "(název souboru), stránka (n)".
- Když je otevřeno více PDF, označené listy nesou i název souboru: "A-101 — Architectural".

Názvy listů zatím nejde zadat ručně.

## Rozhlédnutí kolem listu

- Otáčejte kolečkem myši pro zoom u ukazatele.
- Tažením levým nebo prostředním tlačítkem posouvejte. S {{ui:Auto count}}, nebo když začnete na rohu značky, podržte {{key:Space}} a táhněte, nebo tahejte prostředním tlačítkem.
- Stiskněte {{key:F}} nebo zvolte {{ui:Fit page}}, abyste viděli celý list; {{key:W}} nebo {{ui:Fit width}} přizpůsobí jeho šířku.
- Stiskněte {{key:Plus}} nebo {{key:=}} pro přiblížení a {{key:Minus}} pro oddálení, kolem středu zobrazení.

Každý list si po dobu, kdy je otevřený, pamatuje svůj vlastní zoom a polohu.

## Dále

Než můžete list měřit, potřebuje měřítko: [Nastavení měřítka](topic:set-the-scale).
