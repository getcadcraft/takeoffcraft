---
title: Prechod z iného softvéru na výkazy výmer
summary: Ako návyky z programov na výkazy výmer a nástrojov na značkovanie PDF zodpovedajú TakeoffCraft a aké rozdiely vás môžu prekvapiť.
keywords: prechod, migrácia, podmienky, časti, nástroje na meranie, zoznam poznámok, prepojenie množstva, návyky pri výkaze výmer, rozdiely, porovnanie
from: 12004ce5
---

Ak ste robili výkaz výmer v PlanSwift alebo s nástrojmi na meranie v Bluebeam Revu, väčšina TakeoffCraft bude pôsobiť povedome: súbor plánov, mierka na každom liste, veci, ktoré meriate, a ocenený súčet. Spôsob, akým sa jednotlivé časti spájajú, je na niektorých miestach iný, a tieto miesta sú uvedené nižšie.

Ak poznáte PlanSwift alebo On-Screen Takeoff, vyberte štýl ponuky {{ui:Pracovisko výkazu výmer}} v {{ui:Nastavenia}} › {{ui:TakeoffCraft}} › {{ui:Ponuky, klávesy a myš}}: panel ponuky so súbormi File, {{ui:Úpravy}}, Zobrazenie, {{ui:Mierka}}, Výkaz výmer, {{ui:Položky}}, {{ui:Poznámky}} a {{ui:Export}} nad radom nástrojov na výkaz výmer, s predvoľbami mierky na paneli listu. Pozri [Ponuky, klávesy a myš](topic:menus-keys-and-mouse).

## Návyky, prevedené na TakeoffCraft

| Na čo ste zvyknutí | V TakeoffCraft |
|---|---|
| Otvorenie zákazky alebo projektu, ktorý ukladá plány (PlanSwift) | Otvorte PDF a súbor `.takeoff.json` vedľa seba. Projekt ukladá len výkaz výmer; PDF zostávajú vašimi vlastnými súbormi. |
| Zoznam poznámok, oblakov a zvýraznení (Bluebeam) | {{ui:Poznámky}} na paneli listu: poznámky, oblaky a zvýraznenia so stavom (Otvorené, Zodpovedané, Uzavreté), vypísané pod **Poznámky** a nakreslené v označenom PDF. Pozri [Poznámky, oblaky a zvýraznenia](topic:markups). |
| Merania uložené ako poznámky v PDF (Bluebeam) | Výkaz výmer je v súbore `.takeoff.json`. {{ui:Označené PDF}} zapíše kópiu s nakresleným výkazom výmer na zdieľanie; {{ui:PDF s výkazom výmer vo vnútri}} zapíše kópiu, ktorá nesie výkaz výmer, na znovuotvorenie v TakeoffCraft. |
| Položky výkazu výmer (PlanSwift), vlastné nástroje na meranie uložené v Tool Chest (Bluebeam) | **Položky** pod {{ui:Položky}}: názov, typ, farba, jednotka, výška alebo hĺbka, odpad, sadzby. |
| Časti a zostavy so vzorcami (PlanSwift) | {{ui:Zostava}} položky: komponenty so vzorcom, ktorý používa `L H A N P`. |
| Nastavenie mierky strany alebo kalibrácia (obe) | Zoznam {{ui:Predvoľba}} alebo {{ui:Kalibrovať}} v skupine {{ui:Mierka}}, pre každý list. {{ui:Kontrola}} zmeria známy rozmer. |
| Použitie jednej mierky na rozsah strán | Zatiaľ nie: nastavte každý list. |
| Výrezy s rôznymi mierkami na jednom liste (Bluebeam) | Zatiaľ nie: jedna mierka na list. |
| Nástroje polylength a plocha (Bluebeam), lineárny a plošný výkaz (PlanSwift) | {{ui:Lineárne}} ({{key:L}}) a {{ui:Plocha}} ({{key:A}}). |
| Podržanie Shift pre rovné čiary | {{key:Shift}} prichytáva na kroky po 45°, rovnaký princíp. |
| Prichytávanie na čiary výkresu | Predvolene zapnuté: konce, stredy, priesečníky a najbližší bod na čiare; {{key:F3}} ho vypne, ako v programoch CAD. |
| Nástroj počtu (obe) | {{ui:Počet}} ({{key:C}}). |
| Vizuálne hľadanie symbolov (Bluebeam) | {{ui:Automatický počet}} ({{key:S}}): označte jeden symbol, skontrolujte, pridajte. |
| Výrezy alebo odpočty v plochách | {{ui:Výrez}} ({{key:X}}) na vybranej ploche a okrúhle výrezy. |
| Odpočty na lineárnych úsekoch | Nakreslite úsek priamo cez a stlačte {{key:E}} ({{ui:Odpočet}}) pre otvor. Pozri [Meranie lineárnych úsekov](topic:measure-linear). |
| Segmenty oblúka v lomenej čiare | {{ui:Oblúk}} ({{key:R}}): kliknite na bod na krivke, potom na jej koniec. |
| Zoznam poznámok so stĺpcami množstva (Bluebeam) | Tabuľka {{ui:Množstvá}}, {{ui:Podľa položky}} alebo {{ui:Podľa listu}}. |
| Mriežka odhadu s oceňovaním (PlanSwift) | Tá istá tabuľka: odpad, materiál a práca na jednotku, rozpísané súčty a {{ui:Spolu za zákazku}}. |
| Export do Excelu | {{ui:XLSX}} so živými vzorcami, alebo {{ui:CSV}}. |
| Esc na zastavenie nástroja | {{key:Esc}} zruší a vráti na {{ui:Vybrať}}. |
| Pravé tlačidlo na dokončenie | Pravé tlačidlo tu dokončí úsek alebo uzavrie plochu. Kontextová ponuka pravým tlačidlom myši tu nie je. |

## Rozdiely, na ktorých sa ľudia potknú

**Výkaz výmer nie je vo vnútri vášho PDF.** Nič, čo urobíte, nemení vaše PDF. Uložte súbor `.takeoff.json` a uchovajte ho spolu s výkresmi. Odoslanie označeného PDF nepošle nikomu upraviteľný výkaz výmer: pošlite projektový súbor a pôvodné PDF, alebo [PDF s výkazom výmer vo vnútri](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF sa párujú podľa obsahu, nie podľa názvu.** Revidovaný list uložený cez starý názov súboru je pre TakeoffCraft nový súbor, bez mierky a bez značiek. Vaše staré značky zostanú na starej verzii a ďalej sa počítajú. Pozri [Uloženie a znovuotvorenie výkazu výmer](topic:save-and-reopen#when-a-pdf-has-changed).

**Značky bez mierky sa vynechajú, nepočítajú sa ako nula.** Ak list nemá mierku, jeho úseky a plochy sa nepočítajú a tabuľka uvedie „Neúplné“. V mnohých programoch by ste videli len 0. Pozri [Nastavenie mierky](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Žiadne odhadovanie veľkosti strany.** Predvoľby predpokladajú, že PDF je vytlačené v plnej veľkosti. PDF v polovičnej veľkosti alebo „prispôsobené na stranu“ potrebuje {{ui:Kalibrovať}}. Vždy použite {{ui:Kontrola}}.

**Jedna položka, jeden hlavný typ, ďalšie na požiadanie.** Položka je lineárna, plošná alebo počtová a jej typ sa uzamkne, keď má značky. Podmienka, ktorá vám dá plochu aj jej obvod, je plošná položka: jej obvod je premenná `P`. Stena s dĺžkou aj plochou je lineárna položka s výškou. Pri viacpodmienkovej položke, napríklad miestnosť s podlahou, sokľom a dverami, zaškrtnite ostatné druhy pod **{{ui:Tiež merať}}**: každý sa ocení na vlastnom riadku. Pozri [Jedna položka, viac druhov značiek](topic:create-items#one-item-several-kinds-of-marks).

**Vzorce pracujú so súčtami.** Vzorce zostáv používajú súčty položky na všetkých listoch, nie každý úsek osobitne. `N` (počet úsekov alebo plôch) slúži na dodatočné položky na úsek, napríklad jeden extra stĺpik na stenu.

**Ťahanie posúva.** Ťahanie ľavým tlačidlom myši po liste posúva v každom nástroji okrem {{ui:Automatický počet}}. Nikdy nemusíte prepínať na nástroj posunu. Koliesko zväčšuje; nerolluje.

**Záložná kópia, nie cloud.** TakeoffCraft si uchováva kópiu vašej práce v tomto prehliadači a po páde ju ponúkne späť ([Ak sa karta alebo prehliadač zastaví](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), ale výkaz výmer musíte uložiť sami: {{key:Mod+S}}. Ukladanie do cloudu zatiaľ nie je k dispozícii.

**Všetko je v prehliadači.** Nič sa neinštaluje a plány sa nikdy neodosielajú. Pre desktopovú aplikáciu je TakeoffCraft súčasťou CadCraft Studio spolu s ostatnými siedmimi aplikáciami.

## Ešte nie je hotové

Oblasti mierky pre jednotlivé listy ešte nie sú hotové. Úplný zoznam a čo robiť namiesto toho nájdete v [Čo ešte nie je hotové](topic:not-built-yet).
