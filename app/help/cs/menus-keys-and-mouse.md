---
title: Nabídky, klávesy a myš
summary: Vyberte styl nabídek, který odpovídá tomu, jak už pracujete, přiřaďte libovolnému příkazu vlastní klávesu, přesouvejte příkazy mezi nabídkami a nastavte, co dělají kolečko a tlačítka myši.
keywords: styl nabídek, nabídky, lišta nabídek, pás karet, karty pásu, panel nástrojů, klávesové zkratky, klávesy, přizpůsobit, přemapovat, myš, kolečko, obrátit, směr zoomu, prostřední tlačítko, pravé tlačítko, posun, export, import, přepínání, povědomé, výkazový pult, podmínky
from: f01f0d6d
---

Příkazy TakeoffCraftu jsou stejné, ať k nim přistoupíte jakkoli. **Styl nabídek** určuje jen to, kde jsou na obrazovce, jak se jmenují a kterými klávesami se spouštějí. Zvolte jej v {{ui:Nastavení}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Nabídky, klávesy a myš}}; změna platí hned a tento prohlížeč si ji pamatuje.

## Tři styly

| Styl | Co dostanete |
|---|---|
| {{ui:TakeoffCraft}} | Vlastní panel nástrojů TakeoffCraftu: Soubor, Export, Měřítko, Výkaz, Úpravy a Zobrazení, s jednopísmennými klávesami nástrojů. Výchozí. |
| {{ui:Výkazový pult}} | Lišta nabídek ({{ui:Soubor}}, {{ui:Úpravy}}, {{ui:Zobrazení}}, {{ui:Měřítko}}, {{ui:Výkaz}}, {{ui:Položky}}, {{ui:Poznámky}}, {{ui:Export}}) nad jedním řádkem nástrojů výkazu, tak jak jsou uspořádány programy pro výkaz na obrazovce. Položky se na řádku nazývají podmínky. Stejné klávesy, plus {{key:N}} pro novou položku. Předvolby měřítka se přesunou na lištu listu vedle měřítka listu. |
| {{ui:Pás karet výkazu výměr}} | Karty pásu pojmenované podle práce: {{ui:Výkaz}} (měření, tvar, měřítko, z výkresu, podmínky), {{ui:Úpravy}}, {{ui:Zobrazení}}, {{ui:Poznámky}} a {{ui:Rozpočet}} (sešit, označená PDF, nabídka), s nabídkou {{ui:Soubor}} a rychlou řadou pro otevření, uložení, zpět a znovu. Nástroje, které používáte celý den, jsou velké, jejich sousedé malí a naskládaní. Stejné klávesy; předvolby měřítka se přesunou na lištu listu. |

Všechny tři styly zachovávají klávesy TakeoffCraftu: {{key:V}} výběr, {{key:L}} délková, {{key:A}} plocha, {{key:O}} kružnice, {{key:B}} místnost, {{key:P}} cesta (výběr čar PDF), {{key:X}} výřez, {{key:C}} počet, {{key:S}} automatické počítání, {{key:K}} kalibrace, {{key:D}} kontrola, {{key:R}} režim oblouku, {{key:E}} režim odpočtu, {{key:F}} a {{key:W}} pro přizpůsobení, {{key:3}} 3D kontrolní pohled, {{key:F3}} přichytávání, a {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Nástroje lišty listu (poznámky, oblaky, zvýraznění, Porovnání, 3D) čekají, dokud není otevřené PDF; vybrané dříve, stavový řádek to řekne.

:::tip
Klávesa, která patří do vlastního rozložení TakeoffCraftu, ale váš styl přiřadil jinému příkazu, nedělá nic, a stavový řádek říká, kam její příkaz přešel ("V Moje klávesy je Počet Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} a šipky si vždy zachovají svůj význam. Při kreslení úseku nebo obrysu, vkládání nebo kontrole automatického počítání zůstávají písmena a číslice zadané délky u kreslení.
:::

## Vytvořte si vlastní

1. Vyberte styl, který se nejvíce blíží tomu, co chcete, a klikněte na {{ui:Přizpůsobit…}}.
2. Na {{ui:Klávesy a nabídky}} najděte příkaz (pomůže hledací pole). Klikněte na {{ui:Přidat klávesu}} a stiskněte klávesu, nebo dvě klávesy za sebou pro dvoupísmennou klávesu. Kliknutím na klávesu ji odeberete.
3. S lištou nabídek přesune {{ui:Kde je}} příkaz do jiné nabídky, nebo na {{ui:Jen klávesy}}.
4. Na {{ui:Myš}} nastavte kolečko a tlačítka, která posouvají list.
5. Dejte mu název a klikněte na {{ui:Uložit}}.

Uložení vestavěného stylu vytvoří vaši vlastní kopii ("Můj výkazový pult"); vestavěný se nikdy nemění. Klávesa přiřazená dvěma příkazům se zobrazí červeně a před uložením ji musíte opravit.

## Myš

- **Kolečko myši**: {{ui:Posun kolečkem nahoru přibližuje}} (výchozí), nebo {{ui:Posun kolečkem nahoru oddaluje}}, a jak rychle. Stažení prsty na touchpadu vždy přibližuje tak, jak se pohybují vaše prsty.
- **Posun listu tlačítkem**: prostřední tlačítko, pravé tlačítko, nebo obě. Levé tažení po prázdném papíře a {{key:Space}} s tažením vždy posouvají; pravé kliknutí bez tažení vždy dokončí úsek nebo obrys.
- **Tažení v 3D pohledech**: {{ui:Vlastní pro každý pohled}} ponechá tlačítka 3D kontrolního pohledu (levé a prostřední otáčí, pravé posouvá). Nebo nastavte prostřední a pravé tlačítko na otáčení, posun, zoom, nebo na nic; {{key:Shift}} s tlačítkem prohodí otáčení a posun. Levé tlačítko vždy otáčí a vybírá.

## Vezměte si to s sebou

{{ui:Export}} uloží používaný styl jako malý soubor `.ccinput.json`; {{ui:Importovat…}} přidá jeden, z jiného počítače nebo od kolegy. Importovaný soubor může ukazovat jen na příkazy TakeoffCraftu: cokoli dalšího se vynechá a spočítá se ve stavovém řádku. {{ui:Smazat tento styl}} odstraní jeden z vašich vlastních.

:::note
Tato nastavení zůstávají v tomto prohlížeči. {{ui:Používat tento styl ve všech aplikacích}} pod kartami stylů způsobí, že se každá aplikace otevře ve svém odpovídajícím stylu (vlastní panel nástrojů, lišta nabídek nebo pás karet), se změnami, které jste v každé provedli. TakeoffCraft nemá styl s příkazovým řádkem: když je některý zvolen pro všechny aplikace, TakeoffCraft si ponechá svůj vlastní panel nástrojů.

{{ui:Pás karet výkazu výměr}} je také pásem rozložení {{ui:Pás karet a průzkumník projektu}} ({{ui:Nastavení}} › {{ui:Globální}} › {{ui:Rozložení}}): viz [Obrazovka TakeoffCraftu](topic:workspace).
:::

Související: [Klávesnice a myš](topic:keyboard) · [Nastavení TakeoffCraftu](topic:settings) · [Přechod z jiného software pro výkaz](topic:coming-from)
