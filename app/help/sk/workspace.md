---
title: Obrazovka TakeoffCraft
summary: Prehliadka okna podľa názvov na obrazovke - panel nástrojov, zoznam listov, list, panel Položky, tabuľka Množstvá a stavový riadok.
keywords: obrazovka, rozloženie, rozloženia, pás kariet, prehliadač projektu, súprava nástrojov, informačné pole, panel nástrojov, panely, zoznam listov, panel položiek, množstvá, stavový riadok, prehliadka, rozhranie
from: ab1115e0
---

TakeoffCraft vypĺňa okno prehliadača pod panelom aplikácie CadCraft. Zhora nadol a zľava doprava:

| Časť | Kde | Na čo slúži |
|---|---|---|
| Panel aplikácie | Úplne hore | Názov aplikácie, verzia, {{ui:O aplikácii TakeoffCraft}}, {{ui:Pomocník}} ({{key:F1}}), {{ui:Uložiť na offline použitie}}, {{ui:Nastavenia}} ({{key:Mod+,}}), tlačidlo {{ui:Celá obrazovka}} a prepínač motívu {{ui:Papier}} / {{ui:Model}}. |
| Panel nástrojov | Pod panelom aplikácie | Každý príkaz v skupinách: {{ui:Súbor}}, {{ui:Export}}, {{ui:Mierka}}, {{ui:Výkaz výmer}}, {{ui:Úpravy}}, {{ui:Zobrazenie}}. |
| Listy | Vľavo | Každá strana každého otvoreného PDF s miniatúrou, mierkou a počtom značiek. |
| List | V strede | Otvorená strana. Tu meriate. |
| Položky | Vpravo | Vaše položky výkazu, nastavenia vybranej položky a vybraná značka. |
| Množstvá | Dole | Množstvá a náklady podľa položky alebo listu a celková suma zákazky. |
| Stavový riadok | Úplne dole | Aktuálne meranie, hlásenia, tip 45° a zväčšenie. |

## Panel nástrojov

Podržte ukazovateľ nad ľubovoľným tlačidlom a uvidíte, čo robí, a jeho kláves.

| Skupina | Tlačidlá |
|---|---|
| {{ui:Súbor}} | {{ui:Nový}} (prázdny výkaz), {{ui:Otvoriť plány}} ({{key:Mod+O}}), {{ui:Otvoriť výkaz}} (projekt `.takeoff.json`), {{ui:Uložiť výkaz}} ({{key:Mod+S}}) |
| {{ui:Export}} | Jedna ponuka: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Označené PDF}} |
| {{ui:Mierka}} | {{ui:Kalibrovať}} ({{key:K}}), {{ui:Kontrola}} ({{key:D}}) a zoznam {{ui:Predvoľba}} |
| {{ui:Výkaz výmer}} | {{ui:Vybrať}} ({{key:V}}), {{ui:Lineárne}} ({{key:L}}), {{ui:Plocha}} ({{key:A}}), {{ui:Kružnica}} ({{key:O}}), {{ui:Oblúk}} ({{key:R}}, prepínač zap/vyp), {{ui:Odpočet}} ({{key:E}}, prepínač zap/vyp), {{ui:Výrez}} ({{key:X}}), {{ui:Počet}} ({{key:C}}), {{ui:Automatický počet}} ({{key:S}}) |
| {{ui:Úpravy}} | {{ui:Späť}} ({{key:Mod+Z}}), {{ui:Znova}} ({{key:Mod+Y}}), {{ui:Kopírovať}} ({{key:Mod+C}}), {{ui:Prilepiť}} ({{key:Mod+V}}) a {{ui:Viac}}: {{ui:Vystrihnúť}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Prilepiť na rovnaké miesto}}, {{ui:Duplikovať}}, {{ui:Zmazať}}, {{ui:Vybrať všetko}}, {{ui:Zrušiť výber}} |
| {{ui:Zobrazenie}} | {{ui:Celá strana}} ({{key:F}}), {{ui:Na šírku}} ({{key:W}}) |

Nástroj, ktorý používate, je zobrazený stlačený. Tlačidlá {{ui:Oblúk}} a {{ui:Odpočet}} zostávajú stlačené, kým sú zapnuté.

## Listy (vľavo)

- **Hľadať listy** filtruje zoznam podľa názvu listu, názvu súboru alebo označenia strany.
- Každý list ukazuje miniatúru (kreslí sa pri posúvaní), svoj názov a buď mierku, alebo **Bez mierky**.
- Pravá strana každého riadka ukazuje, koľko značiek list má. Kým je položka zvýraznená, ukazuje namiesto toho, koľko značiek tejto položky je na liste.
- Kliknutím na list ho otvoríte. {{key:PageDown}} a {{key:PageUp}} prechádzajú na nasledujúci a predchádzajúci list v zozname.
- Keď výkaz výmer zahŕňa súbory PDF, ktoré nie sú otvorené, poznámka pod zoznamom ich pomenúva. Pozrite [Uloženie a opätovné otvorenie výkazu](topic:save-and-reopen).

Názvy listov pochádzajú z PDF: označenie strany ako `A-101` sa stane názvom listu. Strana bez označenia sa pomenuje podľa súboru a čísla strany, napríklad „Plans, page 3“. Pri viacerých otvorených súboroch PDF ukazujú označené listy aj názov súboru.

## List (v strede)

- Panel pod listom ukazuje názov listu a jeho mierku, alebo „Zatiaľ bez mierky: vyberte predvoľbu alebo kalibrujte“. Jeho tlačidlá: {{ui:MarkupCraft}} (keď tá aplikácia môže prevziať PDF; pozrite [Začiatok výkazu výmer a otvorenie sady plánov](topic:open-plan-set)), {{ui:Porovnať}} (staršia verzia listu nad týmto: [Porovnanie revidovaného listu](topic:compare-revisions)), „(n) na kontrolu“ (označené značky, ak nejaké sú) a {{ui:3D}} ([3D kontrolný pohľad](topic:check-in-3d)).
- Kým nie je otvorené žiadne PDF, stred ukazuje krátky päťkrokový návod.
- Koliesko zväčšuje pri ukazovateli. Ťahaním posúvate. Pozrite [Klávesnica a myš](topic:keyboard).
- Pri používaní {{ui:Automatický počet}} sa hore na liste objaví panel s jeho ovládaním.

## Položky (vpravo)

Hore zoznam {{ui:Oblasť ponuky}}: budova, podlažie alebo fáza, do ktorej idú nové značky ([Oblasti ponuky](topic:bid-areas)).

- {{ui:Nová položka}} otvorí malý formulár: názov, typ ({{ui:Lineárna (dĺžka)}}, {{ui:Plocha}} alebo {{ui:Počet}}) a {{ui:Pridať}}.
- Zoznam ukazuje farbu každej položky, ikonu typu, názov a množstvo. Kliknutím na položku s ňou kreslíte a zvýrazníte jej značky na každom liste. Opätovným kliknutím zvýrazňovanie zastavíte.
- Pod zoznamom je **Položka: (názov)** editor položky: názov, typ, farba, jednotka, výška alebo hĺbka, odpad, sadzby materiálu a práce, odmerané hodnoty a {{ui:Zostava}}. Pozrite [Vytváranie položiek výkazu](topic:create-items).
- **Vybraná značka** sa objaví, keď vyberiete značku: ku ktorej položke patrí, jej list, jej merania a tlačidlá ako {{ui:Pridať výrez}} a {{ui:Zmazať značku}}. Pri viacerých vybraných značkách sa zmení na **Vybrané značky**: koľko z každej položky a {{ui:Kopírovať}}, {{ui:Duplikovať}}, {{ui:Vystrihnúť}} a {{ui:Zmazať značky}}.
- Editor položky končí {{ui:Kopírovať položku}} a {{ui:Duplikovať položku}}: položka s jej zostavou a nákladmi, bez značiek. Pozrite [Kopírovanie, prilepenie a duplikovanie značiek](topic:copy-paste).

## Množstvá (dole)

- {{ui:Podľa položky}} vypisuje každú položku a komponenty jej zostavy s množstvom, odpadom, sadzbami a rozšírenými nákladmi. Odpad a sadzby môžete písať priamo do tabuľky.
- {{ui:Podľa listu}} vypisuje množstvo každej položky na každom liste.
- Upozornenie začínajúce **Neúplné:** sa objaví, keď je niečo z súčtov vynechané.
- {{ui:Spolu za zákazku}} je vpravo v záhlaví.
- Tlačidlo so šípkou úplne vpravo skryje alebo zobrazí tabuľku, aby mal list viac miesta.

Pozrite [Čítanie množstiev a rozpočtu](topic:read-quantities).

## Stavový riadok (dole)

Zľava doprava: aktuálne meranie pri kreslení (dĺžka, plocha, polomer alebo výsledok kontroly), pole {{ui:Zadať}} pri písaní dĺžky, hlásenia z TakeoffCraft, pripomienka „Shift prichytáva na 45°“ (alebo „Prichytáva na 45°; Shift uvoľní uhol“, keď je to zapnuté v [Nastaveniach](topic:settings)), tlačidlo {{ui:Prichytávanie}} (prichytávanie k čiaram výkresu, zapnuté, keď je zvýraznené; {{key:F3}}) a percento zväčšenia.

:::tip
Prečítajte si stavový riadok, keď sa niečo nedeje. TakeoffCraft tam vysvetlí, prečo odmietol kliknutie, napríklad „Tento list zatiaľ nemá mierku“.
:::

## Ďalšie rozloženia

Všetko vyššie je rozloženie {{ui:Klasické CadCraft}}, východiskové. {{ui:Nastavenia}} ({{key:Mod+,}}) › {{ui:Globálne}} › {{ui:Rozloženie}} ponúka dve ďalšie; rovnaké nástroje a klávesy fungujú vo všetkých troch a opätovný výber {{ui:Klasické CadCraft}} vráti každý ovládací prvok tam, kde bol.

| Rozloženie | V TakeoffCraft |
|---|---|
| {{ui:Pás kariet a prehliadač projektu}} | {{ui:Pás výkazu výmer}} naprieč hore ([Ponuky, klávesy a myš](topic:menus-keys-and-mouse)), panel pre práve používaný nástroj, karta pre každý list, ktorý otvoríte (Model a rozloženia výkresu sú tiež listy), s predvoľbami mierky a {{ui:Celá strana}} pod listom. Ľavý panel obsahuje {{ui:Vlastnosti}} (vybraná položka, poznámka alebo značka) nad {{ui:Prehliadač výkazu výmer}}: {{ui:Listy}} (kliknutím na jeden ho otvoríte v karte), {{ui:Podmienky}} (kliknutím na jednu s ňou kreslíte) a {{ui:Rozpočet}} (súčet každej položky a súčet zákazky); miniatúry sú jeho druhá karta. |
| {{ui:Súprava nástrojov a informačné pole}} | Panel nástrojov nad listom, informačné pole s {{ui:Oblasť ponuky}}, práve používaným nástrojom alebo výberom a panelom listu, stĺpec nástrojov výkazu výmer vľavo, karta pre každý list a {{ui:Prichytávanie}} a zväčšenie pod listom. |

Kým je otvorený [3D kontrolný pohľad](topic:check-in-3d), karty listov a panel pod listom ustúpia; zatvorte 3D pohľad, aby ste mohli znova merať. Na telefóne vždy beží rozloženie pre telefón.

## Celá obrazovka a motívy

Tlačidlo {{ui:Celá obrazovka}} v paneli aplikácie, alebo {{key:Ctrl+Shift+F}} (Ctrl na každej platforme, aj na Macu), prepína normálny režim, celú obrazovku a celú obrazovku so skrytými panelmi. So skrytými panelmi presuňte ukazovateľ k hornému okraju, aby sa znova zobrazili.

{{ui:Papier}} je svetlý motív a {{ui:Model}} tmavý. V {{ui:Model}} sa výkres zobrazuje invertovaný (svetlé čiary na tmavom) len na obrazovke; exporty sa nikdy nemenia.
