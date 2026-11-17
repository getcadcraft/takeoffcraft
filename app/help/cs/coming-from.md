---
title: Přechod z jiného softwaru pro výkazy
summary: Jak se návyky ze specializovaných programů pro výkazy a nástrojů pro značkování PDF promítají do TakeoffCraft a v čem se rozdíly nejčastěji projeví.
keywords: přechod, migrace, podmínky, díly, nástroje měření, seznam poznámek, propojení množství, návyky u výkazů, rozdíly, porovnání
from: 12004ce5
---

Pokud jste výkazy dělali v PlanSwift nebo s nástroji pro měření v Bluebeam Revu, většina TakeoffCraft vám bude povědomá: soubor plánů, měřítko pro každý list, věci, které měříte, a oceněný součet. Způsob, jakým do sebe části zapadají, se v některých místech liší; tato místa jsou uvedena níže.

Pokud znáte PlanSwift nebo On-Screen Takeoff, vyberte styl nabídky {{ui:Výkazový pult}} v {{ui:Nastavení}} › {{ui:TakeoffCraft}} › {{ui:Nabídky, klávesy a myš}}: lišta nabídek se položkami Soubor, Úpravy, Zobrazení, Měřítko, Výkaz, {{ui:Položky}}, {{ui:Poznámky}} a {{ui:Export}} nad řadou nástrojů pro výkaz, s předvolbami měřítka na liště listu. Viz [Nabídky, klávesy a myš](topic:menus-keys-and-mouse).

## Návyky a jejich protějšky

| Jste zvyklí na | V TakeoffCraft |
|---|---|
| Otevření zakázky nebo projektu, který ukládá plány (PlanSwift) | Otevřete PDF a projektový soubor `.takeoff.json` vedle sebe. Projekt ukládá jen výkaz; PDF zůstávají vašimi vlastními soubory. |
| Seznam poznámek s komentáři, oblaky a zvýrazněními (Bluebeam) | {{ui:Poznámky}} na liště listu: poznámky, oblaky a zvýraznění se stavem (Otevřeno, Zodpovězeno, Uzavřeno), uvedené pod **Poznámky** a vykreslené v označeném PDF. Viz [Poznámky, oblaky a zvýraznění](topic:markups). |
| Měření uložená jako poznámky uvnitř PDF (Bluebeam) | Výkaz je v souboru `.takeoff.json`. {{ui:Označené PDF}} zapíše kopii s nakresleným výkazem pro sdílení; {{ui:PDF s výkazem uvnitř}} zapíše kopii, která výkaz nese, k opětovnému otevření v TakeoffCraft. |
| Položky výkazu (PlanSwift), vlastní nástroje měření uložené v Tool Chest (Bluebeam) | **Položky** pod {{ui:Položky}}: název, typ, barva, jednotka, výška nebo hloubka, odpad, sazby. |
| Díly a sestavy se vzorci (PlanSwift) | {{ui:Sestava}} položky: komponenty se vzorcem, který používá `L H A N P`. |
| Nastavení měřítka stránky nebo kalibrace (obojí) | Seznam {{ui:Předvolba}} nebo {{ui:Kalibrovat}} ve skupině {{ui:Měřítko}}, pro každý list zvlášť. {{ui:Kontrola}} změří známý rozměr. |
| Použití jednoho měřítka na rozsah stránek | Zatím ne: nastavte každý list zvlášť. |
| Výřezy s různými měřítky na jednom listu (Bluebeam) | Zatím ne: jedno měřítko na list. |
| Nástroje délky mnohočáry a plochy (Bluebeam), délkový a plošný výkaz (PlanSwift) | {{ui:Délková}} ({{key:L}}) a {{ui:Plocha}} ({{key:A}}). |
| Držení Shift pro přímé čáry | {{key:Shift}} přichytí ke krokům po 45°, stejná myšlenka. |
| Přichycení k čárám výkresu | Ve výchozím nastavení zapnuto: koncové body, středy, průsečíky a nejbližší bod na čáře, s {{key:F3}} pro vypnutí, jako v CAD programech. |
| Nástroj počítání (obojí) | {{ui:Počet}} ({{key:C}}). |
| Vizuální hledání symbolů (Bluebeam) | {{ui:Automatické počítání}} ({{key:S}}): označte jeden symbol, zkontrolujte, přidejte. |
| Výřezy nebo odpočty v plochách | {{ui:Výřez}} ({{key:X}}) na vybrané ploše, a kulaté výřezy. |
| Odpočty u délkových úseků | Veďte úsek přímo přes otvor a stiskněte {{key:E}} ({{ui:Odpočet}}) pro otvor. Viz [Měření délkových úseků](topic:measure-linear). |
| Segmenty oblouku v mnohočáře | {{ui:Oblouk}} ({{key:R}}): klikněte na bod na křivce, pak na její konec. |
| Seznam poznámek se sloupci množství (Bluebeam) | Tabulka {{ui:Množství}}, {{ui:Podle položky}} nebo {{ui:Podle listu}}. |
| Odhadovací mřížka s oceněním (PlanSwift) | Stejná tabulka: odpad, materiál a práce na jednotku, rozepsané součty, {{ui:Celkem za zakázku}}. |
| Export do Excelu | {{ui:XLSX}} se živými vzorci, nebo {{ui:CSV}}. |
| Escape pro zastavení nástroje | {{key:Esc}} zruší a vrátí se na {{ui:Vybrat}}. |
| Pravé tlačítko pro dokončení | I zde pravé tlačítko dokončí úsek nebo uzavře plochu. Pravé tlačítko nabídku nezobrazuje. |

## Rozdíly, na které lidé nejčastěji narazí

**Výkaz není uvnitř vašeho PDF.** Nic, co uděláte, nemění vaše PDF. Uložte soubor `.takeoff.json` a nechte jej u výkresů. Odeslání označeného PDF někomu neodešle upravitelný výkaz: pošlete projektový soubor a původní PDF, nebo [PDF s výkazem uvnitř](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF se páruje podle obsahu, ne podle názvu.** Upravený list uložený přes starý název souboru je pro TakeoffCraft nový soubor bez měřítka a bez značek. Vaše staré značky zůstávají na staré verzi a dál se počítají. Viz [Uložení a znovuotevření výkazu](topic:save-and-reopen#when-a-pdf-has-changed).

**Značky bez měřítka se vynechají, nepočítají se jako nula.** Pokud list nemá měřítko, jeho úseky a plochy se nepočítají a tabulka uvádí „Neúplné“. V mnoha programech byste viděli jen 0. Viz [Nastavení měřítka](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Žádný odhad velikosti stránky.** Předvolby předpokládají, že PDF je vytištěno v plné velikosti. PDF v poloviční velikosti nebo „přizpůsobeno stránce“ potřebuje {{ui:Kalibrovat}}. Vždy použijte {{ui:Kontrola}}.

**Jedna položka, jeden hlavní typ, další na vyžádání.** Položka je délková, plošná nebo počtová a její typ se uzamkne, jakmile má značky. Podmínka, která dává plochu i její obvod, je plošná položka: její obvod je proměnná `P`. Stěna s délkou i plochou je délková položka s výškou. U položky s více podmínkami, například místnosti s podlahou, soklem a dveřmi, zaškrtněte další druhy pod {{ui:Měřit také}}: každý se oceňuje na vlastním řádku. Viz [Jedna položka, několik druhů značek](topic:create-items#one-item-several-kinds-of-marks).

**Vzorce počítají se součty.** Vzorce sestavy používají součty položky přes všechny listy, ne každý úsek zvlášť. `N` (počet úseků nebo ploch) slouží pro přídavky na úsek, například jednu dodatečnou stojku na stěnu.

**Obvod zahrnuje výřezy.** `P` plochy přičítá hrany jejích otvorů. Viz [Měření ploch s výřezy](topic:measure-areas#read-the-area).

**Tažení posouvá.** Tažení levým tlačítkem po listu posouvá v každém nástroji kromě {{ui:Automatické počítání}}. Nikdy nemusíte přepínat na nástroj posunu. Kolečko myši přibližuje a neposouvá.

**Záložní kopie, ne cloud.** TakeoffCraft si uchovává kopii vaší práce v tomto prohlížeči a po pádu ji nabídne zpět ([Pokud se karta nebo prohlížeč zastaví](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), ale výkaz ukládáte vy: {{key:Mod+S}}. Ukládání do cloudu ještě není hotovo.

**Vše běží v prohlížeči.** Není co instalovat a plány se nikdy nenahrávají. Pro desktopovou aplikaci je TakeoffCraft k dispozici v CadCraft Studio spolu se sedmi dalšími aplikacemi.

## Zatím není k dispozici

Oblasti měřítka pro jednotlivé listy ještě nejsou hotovy. Úplný seznam a postup, jak to řešit, najdete v [Co ještě není hotovo](topic:not-built-yet).
