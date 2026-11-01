---
title: Obrazovka TakeoffCraftu
summary: Prohlídka okna podle názvů na obrazovce - panel nástrojů, seznam listů, list, panel Položky, tabulka Množství a stavový řádek.
keywords: obrazovka, rozložení, pás karet, průzkumník projektu, sada nástrojů, informační panel, panel nástrojů, panely, seznam listů, panel položek, množství, stavový řádek, prohlídka, rozhraní
from: ab1115e0
---

TakeoffCraft vyplňuje okno prohlížeče pod lištou aplikace CadCraft. Shora dolů a zleva doprava:

| Část | Kde | K čemu slouží |
|---|---|---|
| Lišta aplikace | Úplně nahoře | Název aplikace, verze, {{ui:O aplikaci TakeoffCraft}}, {{ui:Nápověda}} ({{key:F1}}), {{ui:Uložit pro offline}}, {{ui:Nastavení}} ({{key:Mod+,}}), tlačítko {{ui:Celá obrazovka}} a přepínač motivu {{ui:Papír}} / {{ui:Model}}. |
| Panel nástrojů | Pod lištou aplikace | Každý příkaz, ve skupinách: {{ui:Soubor}}, {{ui:Export}}, {{ui:Měřítko}}, {{ui:Výkaz}}, {{ui:Úpravy}}, {{ui:Zobrazení}}. |
| Listy | Vlevo | Každá strana každého otevřeného PDF, s miniaturou, měřítkem a počtem značek. |
| List | Uprostřed | Otevřená strana. Tady měříte. |
| Položky | Vpravo | Vaše položky výkazu, nastavení vybrané položky a vybraná značka. |
| Množství | Dole | Množství a náklady podle položky nebo listu a celková cena zakázky. |
| Stavový řádek | Úplně dole | Živé měření, zprávy, nápověda k 45° a zoom. |

## Panel nástrojů

Podržením ukazatele nad libovolným tlačítkem uvidíte, co dělá, a jeho klávesu.

| Skupina | Tlačítka |
|---|---|
| {{ui:Soubor}} | {{ui:Nový}} (prázdný výkaz), {{ui:Otevřít plány}} ({{key:Mod+O}}), {{ui:Otevřít výkaz}} (projekt `.takeoff.json`), {{ui:Uložit výkaz}} ({{key:Mod+S}}) |
| {{ui:Export}} | Jedna nabídka: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Označené PDF}} |
| {{ui:Měřítko}} | {{ui:Kalibrovat}} ({{key:K}}), {{ui:Kontrola}} ({{key:D}}) a seznam {{ui:Předvolba}} |
| {{ui:Výkaz}} | {{ui:Vybrat}} ({{key:V}}), {{ui:Délková}} ({{key:L}}), {{ui:Plocha}} ({{key:A}}), {{ui:Kruh}} ({{key:O}}), {{ui:Oblouk}} ({{key:R}}, přepínač zapnuto/vypnuto), {{ui:Odpočet}} ({{key:E}}, přepínač zapnuto/vypnuto), {{ui:Výřez}} ({{key:X}}), {{ui:Počet}} ({{key:C}}), {{ui:Automatické počítání}} ({{key:S}}) |
| {{ui:Úpravy}} | {{ui:Zpět}} ({{key:Mod+Z}}), {{ui:Znovu}} ({{key:Mod+Y}}), {{ui:Kopírovat}} ({{key:Mod+C}}), {{ui:Vložit}} ({{key:Mod+V}}) a {{ui:Další}}: {{ui:Vyjmout}}, {{ui:Kopírovat}}, {{ui:Vložit}}, {{ui:Vložit na stejné místo}}, {{ui:Duplikovat}}, {{ui:Smazat}}, {{ui:Vybrat vše}}, {{ui:Zrušit výběr}} |
| {{ui:Zobrazení}} | {{ui:Přizpůsobit stránku}} ({{key:F}}), {{ui:Přizpůsobit šířku}} ({{key:W}}) |

Nástroj, který používáte, je zobrazen stisknutě. Tlačítka {{ui:Oblouk}} a {{ui:Odpočet}} zůstávají stisknutá, dokud jsou zapnutá.

## Listy (vlevo)

- **Hledat listy** filtruje seznam podle názvu listu, názvu souboru nebo popisku strany.
- Každý list ukazuje miniaturu (kreslenou při posouvání), svůj název a buď své měřítko, nebo **Bez měřítka**.
- Pravá strana každého řádku ukazuje, kolik značek list má. Když je položka zvýrazněná, ukazuje místo toho, kolik značek této položky je na listu.
- Kliknutím na list jej otevřete. {{key:PageDown}} a {{key:PageUp}} přecházejí na další a předchozí list v seznamu.
- Když výkaz zahrnuje soubory PDF, které nejsou otevřené, poznámka pod seznamem je pojmenuje. Viz [Uložení a opětovné otevření výkazu](topic:save-and-reopen).

Názvy listů se berou z PDF: popisek strany, například `A-101`, se stane názvem listu. Strana bez popisku se jmenuje podle svého souboru a čísla strany, například „Plans, page 3“. Při otevřených více PDF zobrazují označené listy také název souboru.

## List (uprostřed)

- Lišta pod listem ukazuje název listu a jeho měřítko, nebo „Zatím bez měřítka: vyberte předvolbu nebo kalibrujte“. Její tlačítka: {{ui:MarkupCraft}} (když tato aplikace může PDF převzít; viz [Založení výkazu a otevření sady výkresů](topic:open-plan-set)), {{ui:Porovnat}} (starší verze listu přes tento: [Porovnání revidovaného listu](topic:compare-revisions)), „(n) ke kontrole“ (označené značky, když nějaké jsou) a {{ui:3D}} ([3D kontrolní pohled](topic:check-in-3d)).
- Dokud není otevřené žádné PDF, uprostřed je krátký průvodce o pěti krocích.
- Kolečko přibližuje u ukazatele. Tažením posouváte. Viz [Klávesnice a myš](topic:keyboard).
- Při použití {{ui:Automatické počítání}} se nahoře na listu objeví lišta s jeho ovládacími prvky.

## Položky (vpravo)

Nahoře je seznam {{ui:Rozpočtová oblast}}: budova, podlaží nebo fáze, do které nové značky patří ([Rozpočtové oblasti](topic:bid-areas)).

- {{ui:Nová položka}} otevře malý formulář: název, typ ({{ui:Délková (délka)}}, {{ui:Plocha}} nebo {{ui:Počet}}) a {{ui:Přidat}}.
- Seznam ukazuje barvu, ikonu typu, název a množství každé položky. Kliknutím na položku s ní kreslíte a zvýrazníte její značky na každém listu. Dalším kliknutím zvýraznění zrušíte.
- Pod seznamem je **Položka: (název)** editor položky: název, typ, barva, jednotka, výška nebo hloubka, odpad, sazby materiálu a práce, naměřené hodnoty a {{ui:Sestava}}. Viz [Vytváření položek výkazu](topic:create-items).
- **Vybraná značka** se objeví, když značku vyberete: ke které položce patří, její list, její měření a tlačítka, například {{ui:Přidat výřez}} a {{ui:Smazat značku}}. Při výběru více značek se změní na **Vybrané značky**: kolik jich je z každé položky a {{ui:Kopírovat}}, {{ui:Duplikovat}}, {{ui:Vyjmout}} a {{ui:Smazat značky}}.
- Editor položky končí tlačítky {{ui:Kopírovat položku}} a {{ui:Duplikovat položku}}: položka s její sestavou a náklady, bez značek. Viz [Kopírování, vkládání a duplikování značek](topic:copy-paste).

## Množství (dole)

- {{ui:Podle položky}} uvádí každou položku a komponenty její sestavy s množstvím, odpadem, sazbami a rozšířenými náklady. Odpad a sazby můžete psát přímo do tabulky.
- {{ui:Podle listu}} uvádí množství každé položky na každém listu.
- Varování začínající **Neúplné:** se objeví, když je něco vynecháno ze součtů.
- {{ui:Celkem za zakázku}} je vpravo v záhlaví.
- Tlačítko se šipkou úplně vpravo tabulku skryje nebo zobrazí, aby list měl víc místa.

Viz [Čtení množství a rozpočtu](topic:read-quantities).

## Stavový řádek (dole)

Zleva doprava: živé měření při kreslení (délka, plocha, poloměr nebo výsledek kontroly), pole {{ui:Zadání}}, když píšete délku, zprávy od TakeoffCraftu, připomínka „Shift přichytí na 45°“ (nebo „Přichytává na 45°; Shift uvolní úhel“, když je to zapnuto v [Nastavení](topic:settings)), tlačítko {{ui:Přichytit}} (přichytávání k čarám výkresu, zapnuto, když je zvýrazněné; {{key:F3}}) a procento zoomu.

:::tip
Čtěte stavový řádek, když se něco neděje. TakeoffCraft tam vysvětlí, proč kliknutí odmítl, například „Tento list zatím nemá měřítko.“
:::

## Další rozložení

Vše výše je rozložení {{ui:Klasický CadCraft}}, výchozí. {{ui:Nastavení}} ({{key:Mod+,}}) › {{ui:Globální}} › {{ui:Rozložení}} nabízí další dvě; stejné nástroje a klávesy fungují ve všech třech a opětovná volba {{ui:Klasický CadCraft}} vrátí každý ovládací prvek na původní místo.

| Rozložení | V TakeoffCraftu |
|---|---|
| {{ui:Pás karet a průzkumník projektu}} | {{ui:Pás karet výkazu výměr}} nahoře ([Nabídky, klávesy a myš](topic:menus-keys-and-mouse)), lišta pro běžící nástroj, karta pro každý list, který otevřete (Model a rozvržení výkresu jsou také listy), s předvolbami měřítka a {{ui:Přizpůsobit stránku}} pod listem. Levý panel obsahuje {{ui:Vlastnosti}} (vybraná položka, poznámka nebo značka) nad {{ui:Prohlížeč výkazu výměr}}: {{ui:Listy}} (kliknutím jeden otevřete v kartě), {{ui:Podmínky}} (kliknutím jednou kreslíte) a {{ui:Rozpočet}} (celek každé položky a celková cena zakázky); miniatury jsou jeho druhá karta. |
| {{ui:Sada nástrojů a informační panel}} | Panel nástrojů nad listem, informační panel s {{ui:Oblast nabídky}}, běžícím nástrojem nebo výběrem a lištou listu, sloupec nástrojů výkazu vlevo, karta pro každý list a {{ui:Přichytit}} a zoom pod listem. |

Když je otevřen [3D kontrolní pohled](topic:check-in-3d), karty listů a lišta pod listem ustoupí; zavřete 3D pohled, abyste mohli znovu měřit. Na telefonu vždy běží rozložení pro telefon.

## Celá obrazovka a motivy

Tlačítko {{ui:Celá obrazovka}} v liště aplikace, nebo {{key:Ctrl+Shift+F}} (Control na každé platformě, i na Macu), prochází normálním režimem, celou obrazovkou a celou obrazovkou se skrytými lištami. Při skrytých lištách přesuňte ukazatel k hornímu okraji a lišty se zobrazí.

{{ui:Papír}} je světlý motiv a {{ui:Model}} tmavý. V {{ui:Model}} se výkres na obrazovce zobrazuje invertovaný (světlé čáry na tmavém); exporty se nikdy nemění.
