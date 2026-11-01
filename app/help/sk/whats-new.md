---
title: Novinky vo verzii 0.7
summary: Výkresy DWG a DXF sa otvárajú ako listy s vlastnou mierkou, presné počty a dĺžky priamo z výkresu, vybraná ponuka subdodávateľa ako cena balíka, výzvy na ponuky s uzavretými cenami, nástroje pre asistentov pre výkresy a USD z 3D kontrolného pohľadu.
keywords: novinky, čo je nové, poznámky k vydaniu, zoznam zmien, zmeny, 0.7, verzia, nové funkcie, dwg, dxf, výkres, rozloženia, priestor modelu, mierka výkresu, počet z výkresu, počet z cad, bloky, dynamické bloky, atribúty, hladiny, xref, prepojený výkres, merať výkres, lomená čiara, šráfovanie, označené pdf, vybraná ponuka, použiť ponuku, odoslať na ponuky, výzva na ponuku, uzavreté ponuky, otváranie ponúk, oneskorená ponuka, záznamy subdodávateľov, csv, asistent, mcp, usd, usdz, jednotky, zoznamy jednotiek, kompaktná, panely, dialógové okná, portugalčina
from: ad4f0df1
---

Toto sa zmenilo v TakeoffCraft 0.7 oproti 0.6. Výkresy sa teraz otvárajú tak, ako sú, bez predchádzajúceho vykreslenia do PDF, a balík ponúk môže ísť k subdodávateľom a vrátiť sa oceňený.

## Nové

### Výkresy DWG a DXF

- **Otvorenie výkresu ako listov.** {{ui:Otvoriť plány}} v skupine {{ui:Súbor}} ({{key:Mod+O}}, alebo pustenie súborov) prijíma výkresy DWG a DXF vedľa súborov PDF. Priestor modelu a každé rozloženie sa stanú listami v zozname {{ui:Listy}} a výkaz výmer môže zahŕňať výkresy aj súbory PDF spolu. Nič sa nenahráva. Pozrite [Otvorenie výkresu DWG alebo DXF](topic:open-a-drawing).
- **Mierka pochádza z výkresu.** Rozloženie začína v mierke svojho najväčšieho výrezu, pomenovanej ako predvoľba, ak ňou je, napríklad 1/2" = 1'-0". Model začína v jednotkách výkresu. Výkres bez jednotiek hlási „Bez mierky“, kým ho nekalibrujete. {{ui:Kalibrovať}}, {{ui:Kontrola}} a {{ui:Predvoľba}} stále majú prednosť. Pozrite [Mierka](topic:open-a-drawing#the-scale).
- **Hladiny a prepojené výkresy.** {{ui:Hladiny}} na paneli listu zobrazia alebo skryjú hladiny výkresu. Hladiny, ktoré súbor vypol alebo zmrazil, začínajú skryté a nepočítajú sa, pokiaľ sa tak nerozhodnete. Prepojený výkres (xref) otvorený vedľa svojho hostiteľa sa kreslí a počíta tam, kde je vložený; kým nie je otvorený, stavový riadok hovorí, čo chýba. Pozrite [Hladiny](topic:open-a-drawing#layers).
- **Označené PDF funguje z výkresu.** {{ui:Export}} › {{ui:Označené PDF}} najprv nakreslí označené listy výkresu ako PDF, takže kópia ukazuje Vaše značky a legendu bez kroku vykreslenia. Kreslí sa čiernou alebo farbami výkresu, bez tabuliek štýlov tlače. Pozrite [Označené PDF](topic:export-estimate#a-marked-pdf).

### Presné počty a dĺžky z výkresu

- **Počítajte, čo výkres hovorí, že tam je.** {{ui:Počet z CAD}} na paneli listu počíta blok podľa názvu (vrátane vnorených blokov, stavov dynamických blokov a polí blokov), všetko jedného typu na hladine, alebo hodnotu textu či atribútu. Počíta to, čo list ukazuje, alebo raz celý výkres. Pridanie značiek je jeden krok späť a opakované počítanie pridá len to, čo je nové. {{ui:Automatický počet}} zostáva pre súbory PDF a symboly, ktoré nie sú blokmi. Pozrite [Počet z výkresu](topic:count-from-a-drawing).
- **Meranie z vlastných čiar výkresu.** {{ui:Merať výkres}} preberá úsečky, oblúky, lomené čiary, kružnice, šráfovania a telesá, na ktoré kliknete alebo ich vyberiete oknom, ako značky lineárnej alebo plošnej položky. Oblúky, vydutia a otvory šráfovania vychádzajú presne; elipsy a splajny sa merajú v jemných tetivách a panel to povie. Pozrite [Meranie z výkresu](topic:measure-from-a-drawing).

### Ponuky

- **Použitie ponuky subdodávateľa ako ceny balíka.** V {{ui:Export}} › {{ui:Balíky ponúk a vyrovnávanie…}} vyberte {{ui:Použiť}} pri ponuke. Položky balíka zostávajú ako množstvá, jeden riadok **Vybraná ponuka** nesie cenu, položky, ktoré ponuka vynecháva, zostávajú na Váš náklad a režijné náklady, zisk a záruka sa na ňu vzťahujú. Prepnutie ponúk je jeden krok späť; zošit aj súhrn ponúk ju nesú. Pozrite [Použitie ponuky ako ceny balíka](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Odoslanie balíka na ponuky.** {{ui:Odoslať na ponuky…}} pod balíkom pošle každému subdodávateľovi e-mailom odkaz na stránku, ktorá nevyžaduje účet: vidia rozsah a listy ako PDF, napíšu cenu na každý riadok alebo ho označia ako nezahrnutý, pridajú poznámky a až tri súbory, alebo odmietnu. {{ui:Získať ceny}} vtiahne to, čo sa vrátilo, do vyrovnávacieho listu, označené **web**. Odosielanie je otvorené len účtom, ktoré tím CadCraft povolil počas testovania (pozrite nižšie). Pozrite [Odoslanie balíka na ponuky](topic:bid-invitations).
- **Uzavreté do otvorenia.** Ceny môžu zostať uzavreté do času otvorenia, ktorý nastavíte: dovtedy cenu nikto nevidí, ani Vy. Pri otvorení sa zobrazí každá ponuka naraz a ponuka, ktorá prišla po termíne, je označená ako oneskorená. Pozrite [Uzavreté ponuky a otvorenie](topic:bid-invitations#sealed-bids-and-the-opening).
- **Záznamy subdodávateľov.** Váš účet na getcadcraft.com uchováva kontakty každej firmy, remeslá, odpovede na kvalifikačné otázky a dátumy poistenia a licencií (označené po uplynutí alebo do 30 dní) s ich minulými ponukami. Importujte a exportujte ich ako CSV a vyberajte ich pri odosielaní balíka. Pozrite [Na webe](topic:bid-invitations#on-the-website).

### Asistenti s umelou inteligenciou

- **Asistenti môžu dopĺňať výkaz výmer.** S označenými **Úpravy** môže Váš vlastný asistent pridávať položky (`items_add`) a merať úseky, plochy a počty na liste (`marks_add`; dĺžky a plochy len na liste s mierkou), každé volanie je jeden krok späť.
- **Nástroje asistentov pre výkresy.** V otvorenom DWG alebo DXF môže asistent vypísať jeho listy a čo sa dá počítať, presne počítať, pridať značky počtu a merať z geometrie výkresu. Bez otvoreného TakeoffCraft server CadCraft MCP otvorí výkres ako nový výkaz výmer a uloží ho a `cadcraft count` počíta z príkazového riadka. Pozrite [O čo môže asistent požiadať](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D kontrolný pohľad ako USD.** {{ui:Balík USD (.usdz)}} vedľa {{ui:GLB}} v 3D kontrolnom pohľade zapíše každý múr, dosku, plech, stĺpik počtu a úsek ako samostatný objekt, pomenovaný podľa svojej položky a nesúci svoje množstvo, v metroch. Asistent ho môže exportovať tiež (`usd_export`). Pozrite [Export 3D kontrolného pohľadu ako USD](topic:usd).

## V každej aplikácii

- **Jednotky.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} má po jednom zozname pre dĺžku, plochu, objem, uhol a sklon, s presnými veľkosťami podľa definícií jednotiek (americká geodetská stopa je samostatná jednotka). Vypnite jednotky, ktoré nikdy nepoužívate, a zmiznú zo zoznamov jednotiek; označte jednu hviezdičkou a nová práca sa začne v nej. Súbor si vždy ponechá vlastnú jednotku. V TakeoffCraft sa zoznamy {{ui:Jednotka}} položky riadia prepínačmi, nová položka začína v jednotke dĺžky alebo plochy označenej hviezdičkou, strešné štvorce (SQ), akre a hektáre sú nové jednotky plochy a pole dĺžky prijíma značku ľubovoľnej jednotky, napríklad `3 yd`. Pozrite [Jednotky, zadávané hodnoty a zoznamy jednotiek](common:unit-lists).
- **Hustejšie rozloženie a panely, ktoré sa skladajú.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Hustota rozloženia}} › {{ui:Kompaktná}} sa zmestí viac na obrazovku (dotykové obrazovky a telefóny si ponechávajú veľké tlačidlá). Každý bočný panel má úzky záhlavný pruh: potiahnutím ho ukotvíte alebo uvoľníte, pustením na pruh iného panela ho zdieľate v jednom ráme ako karty, pripnutím ho necháte vsunúť sa k okraju alebo ho skryjete a vrátite z okraja. Pozrite [Usporiadanie panelov](common:arrange-panels#make-the-layout-denser).
- **Dialógové okná sa presúvajú.** Dialógové okno potiahnite za záhlavie mimo výkresu; vráti sa tam, kde ste ho nechali. Dvojitým kliknutím na záhlavie ho znova vycentrujete. Pozrite [Presunutie dialógového okna](common:arrange-panels#move-a-dialog).
- **Recepty pre asistentov s umelou inteligenciou.** Desať prepracovaných požiadaviek pre Vášho vlastného asistenta (upratať výkres, vykresliť sadu, skontrolovať výkresy, klásť modelu otázky, spočítať výkaz výmer, vyskúšať variant súčiastky …), každá s nástrojmi, ktoré volá, a oprávneniami, ktoré potrebuje, a každá prehraná našimi testami. Aplikácie neobsahujú žiadnu umelú inteligenciu. Pozrite [Recepty pre asistentov s umelou inteligenciou](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jazyk}}. Tento jazyk, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** majú teraz každé slovo aplikácií, ako koncepty, ktoré ešte neskontroloval rodený hovorca. Témy pomocníka sú v angličtine.
- **CadCraft Studio** hovorí, prečo kontrola aktualizácií zlyhala (zatiaľ žiadny súbor pre Váš systém, žiadna sieť, neplatný podpis) namiesto samotného „Hotovo“, a prestane vracať kartu Novinky, ktorú ste zavreli, kým nie je novšie vydanie.

## Zatiaľ nie je vo verzii

- **0.7 nie je podpísaná kódom.** Podpisovanie a balík pre Microsoft Store sa presunuli do 0.8, pretože overenie certifikátu zatiaľ neprebehlo. Skontrolujte SHA-256 vedľa každého súboru na getcadcraft.com/download. Ak inštalátor vo Windows zastaví SmartScreen, vyberte {{ui:Ďalšie informácie}} a potom {{ui:Spustiť aj tak}}. Na Macu pri prvom spustení kliknite pravým tlačidlom na CadCraft Studio a vyberte {{ui:Otvoriť}}. CadCraft Studio zatiaľ nie je v žiadnom obchode s aplikáciami a zatiaľ neexistuje verzia pre iPad ani iPhone.
- Zoznamy uhlov a sklonov v {{ui:Jednotky}} sa ukladajú, ale zatiaľ ich nečíta žiadne pole.
- **Výzvy na ponuky sú pre väčšinu účtov vypnuté.** Kým sa funkcia testuje, pošta externým uchádzačom odchádza len z účtov, ktoré tím CadCraft povolil. Stránky uchádzačov fungujú pre každú už odoslanú výzvu. Všetci ostatní: stiahnite {{ui:CSV rozsahu}}, pošlite ho e-mailom sami a ponuky zadajte ručne.
- Okno CadCraft Studio zatiaľ nemôže odosielať výzvy na ponuky: hovorí, aby ste použili TakeoffCraft v prehliadači. Otvorenie výkazu výmer s odoslanými žiadosťami, vyrovnávanie a výber ponuky v Studiu fungujú.
- Dodatky, listy o pridelení zákazky, rozsahový list, ktorý každý uchádzač odsúhlasí, a automatické pripomienky pred uplynutím dátumu poistenia nie sú hotové. Vybraná ponuka neprecení oblasť ponuky alternatívy.
- Výkresy: tabuľky štýlov tlače a súbory CTB sa nepoužívajú, binárny DXF sa odmietne (uložte ho ako ASCII DXF alebo DWG), prepojené výkresy sa hľadajú len medzi otvorenými súbormi podľa názvu súboru a podklady PDF, obrázky a objekty OLE vo výkrese sa nekreslia ani nepočítajú. Počty a mierky boli skontrolované na vzorových výkresoch, zatiaľ nie na výkresoch zo skutočnej zákazky otvorených v programe, ktorý ich vytvoril.
- Asistent môže pridávať položky a značky, ale nemôže presúvať, meniť ani mazať značky, ktoré tam už sú.

Všetko ostatné je v [Ešte nie je hotové](topic:not-built-yet).
