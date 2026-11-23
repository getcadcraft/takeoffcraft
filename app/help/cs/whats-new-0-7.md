---
title: Co je nového ve verzi 0.7 (dřívější)
summary: Výkresy DWG a DXF se otevírají jako listy s vlastním měřítkem, přesné počty a délky z výkresu samotného, vybraná nabídka subdodavatele jako cena balíčku, výzvy k nabídkám s utěsněnými cenami, nástroje asistenta pro výkresy a USD z pohledu 3D kontroly.
keywords: co je nového 0.7, dřívější vydání, poznámky k vydání, seznam změn, změny, 0.7, verze, nové funkce, dwg, dxf, výkres, rozvržení, prostor modelu, měřítko výkresu, počet z výkresu, bloky, dynamické bloky, atributy, vrstvy, xref, propojený výkres, měřit výkres, lomená čára, šrafa, označené PDF, zvolená nabídka, použít nabídku, odeslat k nabídkám, pozvánka k nabídce, utěsněné nabídky, otevření nabídek, pozdní nabídka, záznamy subdodavatelů, csv, asistent, mcp, usd, usdz, jednotky, seznamy jednotek, kompaktní, panely, dialogy, portugalština
from: 0e3a424f
---

Toto se změnilo ve verzi TakeoffCraft 0.7 oproti verzi 0.6. Výkresy se nyní otevírají tak, jak jsou, bez předchozího vykreslování do PDF, a balíček nabídky může odejít subdodavatelům a vrátit se oceněný.

## Nové

### Výkresy DWG a DXF

- **Otevřete výkres jako listy.** {{ui:Otevřít plány}} ve skupině {{ui:Soubor}} ({{key:Mod+O}}, nebo přetáhněte soubory) přijme výkresy DWG a DXF vedle PDF. Prostor modelu a každé rozvržení se stanou listy v seznamu {{ui:Listy}} a výkaz může pokrývat výkresy i PDF dohromady. Nic se nenahrává. Viz [Otevření výkresu DWG nebo DXF](topic:open-a-drawing).
- **Měřítko pochází z výkresu.** Rozvržení začíná v měřítku své největší výřezu, pojmenovaném jako předvolba, je-li jí, například 1/2" = 1'-0". Model začíná v jednotkách výkresu. Výkres bez jednotek hlásí "No scale", dokud ho nekalibrujete. {{ui:Kalibrovat}}, {{ui:Kontrola}} a {{ui:Předvolba}} mají stále přednost. Viz [Měřítko](topic:open-a-drawing#the-scale).
- **Vrstvy a propojené výkresy.** {{ui:Vrstvy}} na liště listu ukazuje nebo skrývá vrstvy výkresu. Vrstvy, které soubor vypnul nebo zamrazil, začínají skryté a nepočítají se, dokud je nezvolíte. Propojený výkres (xref) otevřený vedle svého hostitele se vykreslí a počítá tam, kde je vložen; dokud není otevřen, stavový řádek říká, co chybí. Viz [Vrstvy](topic:open-a-drawing#layers).
- **Označené PDF funguje z výkresu.** {{ui:Export}} › {{ui:Označené PDF}} nejdřív vykreslí označené listy výkresu jako PDF, takže kopie ukazuje vaše značky a legendu bez kroku vykreslování. Kreslí se černě nebo v barvách výkresu, bez tabulek stylů vykreslování. Viz [Označené PDF](topic:export-estimate#a-marked-pdf).

### Přesné počty a délky z výkresu

- **Počítejte, co výkres říká, že tam je.** {{ui:Počet z CAD}} na liště listu počítá blok podle názvu (včetně vnořených bloků, stavů dynamických bloků a polí bloků), vše jednoho typu na vrstvě, nebo hodnotu textu či atributu. Počítá to, co list ukazuje, nebo celý výkres jednou. Přidání značek je jeden krok zpět a opětovné počítání přidá jen to nové. {{ui:Automatické počítání}} zůstává pro PDF a pro symboly, které nejsou bloky. Viz [Počítání z výkresu](topic:count-from-a-drawing).
- **Měřte z vlastních čar výkresu.** {{ui:Měřit výkres}} vezme čáry, oblouky, lomené čáry, kružnice, šrafy a tělesa, na která kliknete nebo je označíte oknem, jako značky délkové nebo plošné položky. Oblouky, vypouklosti a otvory šraf vycházejí přesně; elipsy a splajny se měří jemnými tětivami a lišta to říká. Viz [Měření z výkresu](topic:measure-from-a-drawing).

### Nabídky

- **Použijte nabídku subdodavatele jako cenu balíčku.** V {{ui:Export}} › {{ui:Balíky nabídek a srovnání…}} zvolte u nabídky {{ui:Použít}}. Položky balíčku zůstávají jako množství, jeden řádek **Zvolená nabídka** nese cenu, položky, které nabídka vynechává, zůstanou za vaši vlastní cenu, a na to se vztahují režie, zisk a záruka. Přepnutí nabídek je jeden krok zpět; sešit a souhrn nabídek to nesou. Viz [Použití nabídky jako ceny balíčku](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Odešlete balíček k nabídkám.** {{ui:Odeslat k nabídkám…}} pod balíčkem pošle každému subdodavateli e-mailem odkaz na stránku, která nevyžaduje účet: vidí rozsah a listy jako PDF, napíše cenu na každý řádek nebo ho označí jako nezahrnutý, přidá poznámky a až tři soubory, nebo odmítne. {{ui:Získat ceny}} stáhne to, co přišlo, do listu srovnání, označené **web**. Odesílání je otevřeno jen účtům, které tým CadCraft povolil během testování (viz níže). Viz [Odeslání balíčku k nabídkám](topic:bid-invitations).
- **Utěsněno až do otevření.** Ceny mohou zůstat utěsněné až do času otevření, který nastavíte: až do té doby cenu nevidí nikdo, ani vy. Při otevření se ukážou všechny nabídky najednou a nabídka, která přišla po termínu, je označena jako pozdní. Viz [Utěsněné nabídky a otevření](topic:bid-invitations#sealed-bids-and-the-opening).
- **Záznamy subdodavatelů.** Váš účet na getcadcraft.com uchovává kontakty každé firmy, obory, odpovědi z kvalifikace a data pojištění a licencí (označená, jakmile uplynula nebo zbývá méně než 30 dní), spolu s jejími dřívějšími nabídkami. Importujte a exportujte je jako CSV a vybírejte je, když odesíláte balíček. Viz [Na webu](topic:bid-invitations#on-the-website).

### Asistenti AI

- **Asistenti mohou přidávat do výkazu.** Se zaškrtnutým **Úpravy** může váš vlastní asistent přidávat položky (`items_add`) a měřit úseky, plochy a počty na listu (`marks_add`; délky a plochy jen na listu s měřítkem), každé volání jako jeden krok zpět.
- **Nástroje asistenta pro výkresy.** U otevřeného DWG nebo DXF může asistent vypsat jeho listy a to, co lze počítat, počítat přesně, přidávat značky počtu a měřit z geometrie výkresu. Bez otevřeného TakeoffCraft server CadCraft MCP otevře výkres jako nový výkaz a uloží ho a `cadcraft count` počítá z příkazové řádky. Viz [Co může asistent požadovat](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Pohled 3D kontroly jako USD.** {{ui:Balíček USD (.usdz)}} vedle {{ui:GLB}} v pohledu 3D kontroly zapisuje každou stěnu, desku, plech, počítací sloupek a úsek jako vlastní objekt, pojmenovaný podle své položky a nesoucí své množství, v metrech. Také jej může exportovat asistent (`usd_export`). Viz [Export pohledu 3D kontroly do USD](topic:usd).

## Ve všech aplikacích

- **Jednotky.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} má jeden seznam pro délku, plochu, objem, úhel a sklon, s přesnými velikostmi, které dávají definice jednotek (US survey foot je vlastní jednotka). Vypněte jednotky, které nikdy nepoužíváte, a zmizí ze seznamů; označte jednu hvězdičkou a nová práce v ní začíná. Soubor vždy zachovává svou vlastní jednotku. V TakeoffCraft se seznamy {{ui:Jednotka}} položky řídí přepínači, nová položka začíná v označené jednotce délky nebo plochy, čtverce střechy (SQ), akry a hektary jsou nové jednotky plochy a pole délky přijme značku libovolné jednotky, například `3 yd`. Viz [Jednotky, zadané hodnoty a seznamy jednotek](common:unit-lists).
- **Hustší rozložení a panely, které se uklidí.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Hustota rozložení}} › {{ui:Kompaktní}} se vejde na obrazovku více (dotykové obrazovky a telefony si ponechají velká tlačítka). Každý boční panel má štíhlý pruh názvu: přetažením ho ukotvíte nebo uvolníte, pustíte na pruh jiného panelu, aby sdílely jeden rámec jako karty, připnete ho, aby zajel k okraji, nebo ho skryjete a vyvoláte zpět od okraje. Viz [Uspořádání panelů](common:arrange-panels#make-the-layout-denser).
- **Dialogy se dají přesouvat.** Přetáhněte dialog za jeho záhlaví mimo cestu výkresu; vrátí se tam, kde jste ho nechali. Dvojklikem na záhlaví ho znovu vycentrujete. Viz [Přesun dialogu](common:arrange-panels#move-a-dialog).
- **Recepty pro asistenty AI.** Deset propracovaných požadavků pro vašeho vlastního asistenta (uklidit výkres, vykreslit sadu, zkontrolovat výkresy, položit modelu otázky, sečíst výkaz, zkusit variantu dílu…), každý s nástroji, které volá, a oprávněními, která potřebuje, a každý přehrávaný našimi testy. Aplikace žádnou AI neobsahují. Viz [Recepty pro asistenty AI](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** nyní mají všechna slova aplikací, jako koncepty, které dosud nepřečetl rodilý mluvčí. Témata nápovědy jsou v angličtině.
- **CadCraft Studio** řekne, proč kontrola aktualizace selhala (zatím žádný soubor pro váš systém, žádná síť, neplatný podpis), místo jen "Hotovo", a přestane vracet kartu Co je nového, kterou jste zavřeli, dokud nebude novější vydání.

## Ještě není v této verzi

- **0.7 není podepsána kódem.** Podepisování a balíček pro Microsoft Store se přesunuly do verze 0.8, protože ověření certifikátu ještě nedorazilo. Zkontrolujte SHA-256 u každého souboru na getcadcraft.com/download. Ve Windows, pokud SmartScreen zastaví instalátor, zvolte {{ui:Další informace}}, pak {{ui:Přesto spustit}}. Na Macu při prvním spuštění klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřeno}}. CadCraft Studio zatím není v žádném obchodě s aplikacemi a zatím neexistuje sestavení pro iPad ani iPhone.
- Seznamy úhlů a sklonů v {{ui:Jednotky}} se ukládají, ale zatím je žádné pole nečte.
- **Výzvy k nabídkám jsou pro většinu účtů vypnuté.** Dokud se funkce testuje, pošta externím uchazečům odchází jen z účtů, které tým CadCraft povolil. Stránky uchazečů fungují pro každou výzvu, která už byla odeslána. Všichni ostatní: stáhněte {{ui:Rozsah CSV}}, pošlete ho e-mailem sami a napište nabídky ručně.
- Okno CadCraft Studio zatím nemůže odesílat výzvy k nabídkám: říká, ať použijete TakeoffCraft v prohlížeči. Otevření výkazu s odeslanými žádostmi, srovnání a volba nabídky ve Studiu fungují.
- Dodatky, potvrzovací dopisy, rozsahový list, který každý uchazeč podepíše, a automatické připomínky před vypršením data pojištění nejsou hotové. Zvolená nabídka nepřeceňuje plochu alternativní nabídky.
- Výkresy: tabulky stylů vykreslování a soubory CTB se neuplatňují, binární DXF se odmítne (uložte ho jako ASCII DXF nebo DWG), propojené výkresy se hledají jen mezi otevřenými soubory podle názvu souboru, a PDF podklady, obrázky a objekty OLE ve výkresu se nekreslí ani nepočítají. Počty a měřítka byla ověřena na ukázkových výkresech, zatím ne na výkresech z reálné zakázky otevřených v programu, který je vytvořil.
- Asistent může přidávat položky a značky, ale nemůže přesunout, změnit ani smazat značky, které tam už jsou.

Vše ostatní je v [Ještě není hotovo](topic:not-built-yet).
