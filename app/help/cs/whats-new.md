---
title: Co je nového v 0.7
summary: Výkresy DWG a DXF se otevírají jako listy s vlastním měřítkem, přesné počty a délky přímo z výkresu, vybraná nabídka subdodavatele jako cena balíku, výzvy k podání nabídek s utajenými cenami, nástroje asistentů pro výkresy a USD z 3D kontrolního pohledu.
keywords: co je nového, novinky, poznámky k vydání, seznam změn, změny, 0.7, verze, nové funkce, dwg, dxf, výkres, rozvržení, prostor modelu, měřítko výkresu, počet z výkresu, počet z cad, bloky, dynamické bloky, atributy, vrstvy, xref, propojený výkres, měřit výkres, mnohočára, šrafa, označené pdf, vybraná nabídka, použít nabídku, odeslat k nabídkám, výzva k podání nabídky, utajené nabídky, otevírání nabídek, pozdní nabídka, záznamy subdodavatelů, csv, asistent, mcp, usd, usdz, jednotky, seznamy jednotek, kompaktní, panely, dialogy, portugalština
from: ad4f0df1
---

Toto se změnilo v TakeoffCraftu 0.7 oproti 0.6. Výkresy se nyní otevírají tak, jak jsou, bez předchozího vykreslení do PDF, a balík nabídek může odejít subdodavatelům a vrátit se oceněný.

## Nové

### Výkresy DWG a DXF

- **Otevření výkresu jako listů.** {{ui:Otevřít plány}} ve skupině {{ui:Soubor}} ({{key:Mod+O}}, nebo soubory pusťte) bere výkresy DWG a DXF vedle souborů PDF. Prostor modelu a každé rozvržení se stanou listy v seznamu {{ui:Listy}} a výkaz může pokrývat výkresy i PDF společně. Nic se nenahrává. Viz [Otevření výkresu DWG nebo DXF](topic:open-a-drawing).
- **Měřítko pochází z výkresu.** Rozvržení začíná v měřítku svého největšího výřezu, pojmenovaném jako předvolba, pokud jí je, například 1/2" = 1'-0". Model začíná v jednotkách výkresu. Výkres, který nemá jednotky, říká „Bez měřítka“, dokud jej nezkalibrujete. {{ui:Kalibrovat}}, {{ui:Kontrola}} a {{ui:Předvolba}} stále mají přednost. Viz [Měřítko](topic:open-a-drawing#the-scale).
- **Vrstvy a propojené výkresy.** {{ui:Vrstvy}} na liště listu zobrazují nebo skrývají vrstvy výkresu. Vrstvy, které soubor vypnul nebo zamrazil, začínají skryté a nepočítají se, pokud se tak nerozhodnete. Propojený výkres (xref) otevřený vedle svého hostitele se kreslí a počítá tam, kde je vložen; dokud není otevřen, stavový řádek řekne, co chybí. Viz [Vrstvy](topic:open-a-drawing#layers).
- **Označené PDF funguje z výkresu.** {{ui:Export}} › {{ui:Označené PDF}} nejdřív vykreslí označené listy výkresu jako PDF, takže kopie ukazuje vaše značky a legendu bez kroku vykreslení. Kreslí se černě nebo barvami výkresu, bez tabulek stylů tisku. Viz [Označené PDF](topic:export-estimate#a-marked-pdf).

### Přesné počty a délky z výkresu

- **Spočítejte, co výkres říká, že tam je.** {{ui:Počet z CAD}} na liště listu spočítá blok podle názvu (včetně vnořených bloků, stavů dynamických bloků a polí bloků), vše jednoho typu na vrstvě, nebo hodnotu textu či atributu. Počítá to, co list ukazuje, nebo celý výkres najednou. Přidání značek je jeden krok zpět a opětovné počítání přidá jen to, co je nové. {{ui:Automatické počítání}} zůstává pro PDF a pro symboly, které nejsou bloky. Viz [Počítání z výkresu](topic:count-from-a-drawing).
- **Měření z vlastních čar výkresu.** {{ui:Měřit výkres}} bere úsečky, oblouky, mnohočáry, kružnice, šrafy a tělesa, na která kliknete nebo je oknem vyberete, jako značky délkové nebo plošné položky. Oblouky, vypouklosti a otvory šrafy vycházejí přesně; elipsy a splajny se měří v jemných tětivách a lišta to říká. Viz [Měření z výkresu](topic:measure-from-a-drawing).

### Nabídky

- **Použití nabídky subdodavatele jako ceny balíku.** V {{ui:Export}} › {{ui:Balíky nabídek a srovnání…}} zvolte {{ui:Použít}} u nabídky. Položky balíku zůstanou jako množství, jeden řádek **Vybraná nabídka** nese cenu, položky, které nabídka vynechává, zůstanou za vaše vlastní náklady a režie, zisk a záruka se na ni vztahují. Přepnutí nabídek je jeden krok zpět; sešit a souhrn nabídek jej obsahují. Viz [Použití nabídky jako ceny balíku](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Odeslání balíku k nabídkám.** {{ui:Odeslat k nabídkám…}} pod balíkem pošle každému subdodavateli e-mailem odkaz na stránku, která nevyžaduje účet: vidí rozsah a listy jako PDF, napíší cenu na každý řádek nebo jej označí jako nezahrnutý, přidají poznámky a až tři soubory, nebo odmítnou. {{ui:Získat ceny}} stáhne, co se vrátilo, do srovnávacího listu, označené **web**. Odesílání je otevřeno jen účtům, které tým CadCraft povolil, dokud se testuje (viz níže). Viz [Odeslání balíku k nabídkám](topic:bid-invitations).
- **Utajené do otevírání.** Ceny mohou zůstat utajené do času otevírání, který nastavíte: do té doby žádnou cenu nikdo nevidí, ani vy. Při otevírání se zobrazí všechny nabídky najednou a nabídka, která přišla po termínu, je označena jako pozdní. Viz [Utajené nabídky a otevírání](topic:bid-invitations#sealed-bids-and-the-opening).
- **Záznamy subdodavatelů.** Váš účet na getcadcraft.com uchovává kontakty každé firmy, obory, odpovědi na kvalifikační otázky a data pojištění a licencí (označená, jakmile uplynula nebo je do 30 dnů), s jejich minulými nabídkami. Importujte a exportujte je jako CSV a vybírejte je při odesílání balíku. Viz [Na webu](topic:bid-invitations#on-the-website).

### AI asistenti

- **Asistenti mohou do výkazu přidávat.** Se zaškrtnutým **Úpravy** může váš vlastní asistent přidávat položky (`items_add`) a měřit úseky, plochy a počty na listu (`marks_add`; délky a plochy jen na listu s měřítkem), každé volání je jeden krok zpět.
- **Nástroje asistenta pro výkresy.** Na otevřeném DWG nebo DXF může asistent vypsat jeho listy a co lze spočítat, přesně počítat, přidat značky počtu a měřit z geometrie výkresu. Bez otevřeného TakeoffCraftu server CadCraft MCP otevře výkres jako nový výkaz a uloží jej a `cadcraft count` počítá z příkazového řádku. Viz [Co může asistent požadovat](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D kontrolní pohled jako USD.** {{ui:Balíček USD (.usdz)}} vedle {{ui:GLB}} ve 3D kontrolním pohledu zapíše každou stěnu, desku, plech, sloupek počtu a úsek jako vlastní objekt, pojmenovaný podle své položky a nesoucí své množství, v metrech. Asistent jej může také exportovat (`usd_export`). Viz [Export 3D kontrolního pohledu jako USD](topic:usd).

## V každé aplikaci

- **Jednotky.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} má po jednom seznamu pro délku, plochu, objem, úhel a sklon, s přesnými velikostmi podle definic jednotek (americká zeměměřická stopa je samostatná jednotka). Vypněte jednotky, které nikdy nepoužíváte, a z nabídek jednotek zmizí; označte jednu hvězdičkou a nová práce začíná v ní. Soubor si vždy ponechá vlastní jednotku. V TakeoffCraftu se seznamy {{ui:Jednotka}} položky řídí přepínači, nová položka začíná ve vyznačené délkové nebo plošné jednotce, střešní čtverce (SQ), akry a hektary jsou nové plošné jednotky a pole délky přijímá značku libovolné jednotky, například `3 yd`. Viz [Jednotky, zadávané hodnoty a seznamy jednotek](common:unit-lists).
- **Hustší rozložení a panely, které se schovají.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Hustota rozložení}} › {{ui:Kompaktní}} vměstná na obrazovku víc (dotykové obrazovky a telefony si ponechají velká tlačítka). Každý boční panel má štíhlou záhlavní lištu: přetažením panel ukotvíte nebo necháte plovoucí, puštěním na lištu jiného panelu sdílejí jeden rám jako karty, připnutím se zasune k okraji, nebo jej skryjete a vrátíte z okraje. Viz [Uspořádání panelů](common:arrange-panels#make-the-layout-denser).
- **Dialogy se přesouvají.** Dialog přetáhněte za záhlaví stranou od výkresu; vrátí se tam, kde jste jej nechali. Dvojitým kliknutím na záhlaví jej znovu vycentrujete. Viz [Přesunutí dialogu](common:arrange-panels#move-a-dialog).
- **Návody pro AI asistenty.** Deset vzorových požadavků pro vašeho vlastního asistenta (uklidit výkres, vykreslit sadu, zkontrolovat výkresy, ptát se modelu, sečíst výkaz výměr, vyzkoušet variantu dílu…), každý s nástroji, které volá, a oprávněními, která potřebuje, a každý přehraný našimi testy. Aplikace neobsahují žádnou AI. Viz [Návody pro AI asistenty](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** nyní mají v aplikacích každé slovo, jako koncepty, které ještě nezkontroloval rodilý mluvčí. Témata nápovědy jsou v angličtině.
- **CadCraft Studio** říká, proč kontrola aktualizace selhala (zatím žádný soubor pro váš systém, žádná síť, špatný podpis), místo pouhého „Hotovo“, a přestane vracet kartu Co je nového, kterou jste zavřeli, dokud nevyjde novější vydání.

## Zatím není v této verzi

- **0.7 není podepsaná kódovým podpisem.** Podepisování a balíček Microsoft Store se přesunuly do 0.8, protože ověření certifikátu zatím nedoběhlo. Zkontrolujte SHA-256 vedle každého souboru na getcadcraft.com/download. Pokud ve Windows instalátor zastaví SmartScreen, zvolte {{ui:Další informace}} a poté {{ui:Přesto spustit}}. Na Macu poprvé klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. CadCraft Studio zatím není v žádném obchodě s aplikacemi a zatím neexistuje ani sestavení pro iPad nebo iPhone.
- Seznamy úhlu a sklonu v {{ui:Jednotky}} se ukládají, ale zatím je žádné pole nečte.
- **Výzvy k podání nabídek jsou pro většinu účtů vypnuté.** Dokud se funkce testuje, pošta externím uchazečům odchází jen z účtů, které tým CadCraft povolil. Stránky uchazečů fungují pro každou již odeslanou výzvu. Všichni ostatní: stáhněte {{ui:Rozsah CSV}}, pošlete jej sami e-mailem a nabídky zapište ručně.
- Okno CadCraft Studia zatím nemůže odesílat výzvy k podání nabídek: říká, abyste použili TakeoffCraft v prohlížeči. Otevření výkazu s odeslanými požadavky, srovnání a výběr nabídky ve Studiu fungují.
- Dodatky, oznámení o zadání, rozsahový list, který každý uchazeč odsouhlasí, a automatické připomínky před uplynutím platnosti pojištění nejsou hotové. Vybraná nabídka nepřeceňuje nabídku varianty v rozpočtové oblasti.
- Výkresy: tabulky stylů tisku a soubory CTB se neuplatňují, binární DXF je odmítnut (uložte jej jako ASCII DXF nebo DWG), propojené výkresy se hledají jen mezi otevřenými soubory podle názvu souboru a podklady PDF, obrázky a objekty OLE ve výkresu se nekreslí ani nepočítají. Počty a měřítka byly ověřeny na vzorových výkresech, ještě ne na výkresech ze skutečné zakázky otevřených v programu, který je vytvořil.
- Asistent může přidávat položky a značky, ale nemůže přesouvat, měnit ani mazat značky, které už existují.

Vše ostatní je v tématu [Co ještě není hotovo](topic:not-built-yet).
