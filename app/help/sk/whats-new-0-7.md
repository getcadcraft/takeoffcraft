---
title: Čo je nové vo verzii 0.7 (staršie)
summary: Výkresy DWG a DXF sa otvárajú ako listy s vlastnou mierkou, presné počty a dĺžky priamo z výkresu, vybraná ponuka subdodávateľa ako cena balíka, pozvánky na ponuky so zapečatenými cenami, nástroje asistenta pre výkresy a USD z 3D kontrolného zobrazenia.
keywords: čo je nové 0.7, staršie vydanie, poznámky k vydaniu, zoznam zmien, zmeny, 0.7, verzia, nové funkcie, dwg, dxf, výkres, rozloženia, priestor modelu, mierka výkresu, počítanie z výkresu, počet z CAD, bloky, dynamické bloky, atribúty, hladiny, xref, prepojený výkres, merať výkres, polyline, šráfovanie, označené PDF, vybraná ponuka, použiť ponuku, odoslať na ponuky, pozvánka do ponuky, zapečatené ponuky, otvorenie ponúk, neskorá ponuka, záznamy subdodávateľov, csv, asistent, mcp, usd, usdz, jednotky, zoznamy jednotiek, kompaktné, panely, dialógy, portugalčina
from: de1dca2b
---

Toto sa zmenilo vo verzii TakeoffCraft 0.7 v porovnaní s verziou 0.6. Výkresy sa teraz otvárajú tak, ako sú, bez predchádzajúceho vykreslenia do PDF, a balík ponúk sa dá odoslať subdodávateľom a vrátiť s oceneniami.

## Nové

### Výkresy DWG a DXF

- **Otvorenie výkresu ako listov.** {{ui:Otvoriť plány}} v skupine {{ui:Súbor}} ({{key:Mod+O}}, alebo súbory jednoducho vložte) prijíma výkresy DWG a DXF popri PDF. Priestor modelu a každé rozloženie sa stanú listami v zozname {{ui:Listy}} a výkaz výmer môže pokrývať výkresy aj PDF spolu. Nič sa nenahráva. Pozri [Otvorenie výkresu DWG alebo DXF](topic:open-a-drawing).
- **Mierka pochádza z výkresu.** Rozloženie začína mierkou svojho najväčšieho výrezu, pomenovanou ako predvoľba, ak sa zhoduje, napríklad 1/2" = 1'-0". Model začína v jednotkách výkresu. Výkres bez jednotiek zobrazuje "Bez mierky", kým ho nekalibrujete. {{ui:Kalibrovať}}, {{ui:Kontrola}} a {{ui:Predvoľba}} majú stále prednosť. Pozri [Mierka](topic:open-a-drawing#the-scale).
- **Hladiny a prepojené výkresy.** {{ui:Hladiny}} na paneli listu zobrazuje alebo skrýva hladiny výkresu. Hladiny, ktoré súbor vypol alebo zmrazil, sa spustia skryté a nepočítajú sa, pokiaľ nezvolíte inak. Prepojený výkres (xref) otvorený vedľa svojho hostiteľa sa vykreslí a počíta tam, kde je vložený; kým nie je otvorený, stavový riadok hovorí, čo chýba. Pozri [Hladiny](topic:open-a-drawing#layers).
- **Označené PDF funguje z výkresu.** {{ui:Export}} › {{ui:Označené PDF}} najprv nakreslí označené listy výkresu ako PDF, takže kópia ukazuje vaše značky a legendu bez kroku vykreslenia. Kreslí sa čiernou alebo farbami výkresu, bez tabuliek štýlov vykreslenia. Pozri [Označené PDF](topic:export-estimate#a-marked-pdf).

### Presné počty a dĺžky z výkresu

- **Počet toho, čo výkres hovorí, že tam je.** {{ui:Počet z CAD}} na paneli listu spočíta blok podľa názvu (vrátane vnorených blokov, stavov dynamických blokov a polí blokov), všetko jedného typu na hladine, alebo hodnotu textu či atribútu. Počíta to, čo list zobrazuje, alebo celý výkres raz. Pridanie značiek je jeden krok späť a opätovné počítanie pridá iba nové. {{ui:Automatický počet}} ostáva pre PDF a pre symboly, ktoré nie sú blokmi. Pozri [Počítanie z výkresu](topic:count-from-a-drawing).
- **Meranie z vlastných čiar výkresu.** {{ui:Merať výkres}} berie čiary, oblúky, lomené čiary, kružnice, šráfovania a telesá, na ktoré kliknete alebo ktoré vyberiete oknom, ako značky dĺžkovej alebo plošnej položky. Oblúky, vypuklosti a otvory šráfovania sú presné; elipsy a splajny sa merajú jemnými tetivami a pruh to uvádza. Pozri [Meranie z výkresu](topic:measure-from-a-drawing).

### Ponuky

- **Použitie ponuky subdodávateľa ako ceny balíka.** V {{ui:Export}} › {{ui:Balíky ponúk a vyrovnávanie…}} zvoľte pri ponuke {{ui:Použiť}}. Položky balíka zostanú ako množstvá, jeden riadok **Vybraná ponuka** nesie cenu, položky, ktoré ponuka vynecháva, zostanú na vašich vlastných nákladoch, a režija, zisk a zábezpeka sa na ňu vzťahujú. Prepnutie ponuky je jeden krok späť; zošit aj súhrn ponúk ju prenesú. Pozri [Použitie ponuky ako ceny balíka](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Odoslanie balíka na ponuky.** {{ui:Odoslať na ponuky…}} pod balíkom pošle každému subdodávateľovi e-mailom odkaz na stránku, ktorá nepotrebuje účet: vidí rozsah a listy ako PDF, napíše cenu na každý riadok alebo ho označí ako nezahrnutý, pridá poznámky a až tri súbory, alebo odmietne. {{ui:Získať ceny}} stiahne, čo sa vrátilo, do listu vyrovnávania, označené **web**. Odosielanie je otvorené iba účtom, ktoré tím CadCraft povolil počas testovania (pozri nižšie). Pozri [Odoslanie balíka na ponuky](topic:bid-invitations).
- **Zapečatené až do otvorenia.** Ceny môžu zostať zapečatené až do času otvorenia, ktorý nastavíte: dovtedy cenu nevidí nikto, ani vy. Pri otvorení sa všetky ponuky zobrazia naraz a ponuka, ktorá prišla po termíne, sa označí ako neskorá. Pozri [Zapečatené ponuky a otvorenie](topic:bid-invitations#sealed-bids-and-the-opening).
- **Záznamy subdodávateľov.** Váš účet na getcadcraft.com uchováva kontakty každej firmy, remeslá, odpovede na kvalifikáciu a dátumy poistenia a licencií (označené, keď už prešli alebo sa blížia do 30 dní), spolu s jej minulými ponukami. Importujte a exportujte ich ako CSV a vyberte ich pri odosielaní balíka. Pozri [Na webe](topic:bid-invitations#on-the-website).

### Asistenti AI

- **Asistent môže pridávať do výkazu.** Keď je zaškrtnuté **Upraviť**, váš vlastný asistent môže pridávať položky (`items_add`) a merať úseky, plochy a počty na liste (`marks_add`; dĺžky a plochy iba na liste s mierkou), pričom každé volanie je jeden krok späť.
- **Nástroje asistenta pre výkresy.** V otvorenom DWG alebo DXF asistent vie vypísať svoje listy a čo sa dá počítať, presne počítať, pridávať značky počtu a merať z geometrie výkresu. Bez otvoreného TakeoffCraft server CadCraft MCP otvorí výkres ako nový výkaz výmer a uloží ho, a `cadcraft count` počíta z príkazového riadku. Pozri [Čo môže asistent požadovať](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D kontrolné zobrazenie ako USD.** {{ui:Balík USD (.usdz)}} vedľa {{ui:GLB}} v 3D kontrolnom zobrazení zapíše každú stenu, dosku, plát, počítací stĺpik a úsek ako vlastný objekt, pomenovaný podľa svojej položky a niesúci svoje množstvo, v metroch. Aj asistent ho vie exportovať (`usd_export`). Pozri [Export 3D kontrolného zobrazenia do USD](topic:usd).

## Vo všetkých aplikáciách

- **Jednotky.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} má po jednom zozname pre dĺžku, plochu, objem, uhol a sklon, s presnými veľkosťami, ktoré dávajú definície jednotiek (americká prieskumnícka stopa je vlastná jednotka). Vypnite jednotky, ktoré nikdy nepoužijete, a zmiznú zo zoznamov jednotiek; označte jednu hviezdičkou a nová práca sa začne v nej. Súbor si vždy ponechá svoju jednotku. V TakeoffCraft sa zoznamy {{ui:Jednotka}} položky riadia prepínačmi, nová položka sa začne v označenej jednotke dĺžky alebo plochy, strešné štvorce (SQ), akre a hektáre sú nové jednotky plochy a políčko dĺžky prijme značku ľubovoľnej jednotky, napríklad `3 yd`. Pozri [Jednotky, zadané hodnoty a zoznamy jednotiek](common:unit-lists).
- **Hustejšie rozloženie a panely, ktoré sa dajú zložiť.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Hustota rozloženia}} › {{ui:Kompaktná}} vmestí na obrazovku viac (dotykové obrazovky a telefóny si zachovajú veľké tlačidlá). Každý bočný panel má štíhly pruh s názvom: potiahnite ho, aby sa ukotvil alebo plával, pustite ho na pruh iného panela, aby sa zdieľal jeden rámec ako karty, pripnite ho, aby sa zasúval k okraju, alebo ho skryte a vráťte z okraja. Pozri [Usporiadanie panelov](common:arrange-panels#make-the-layout-denser).
- **Dialógové okná sa dajú presúvať.** Potiahnite dialógové okno za pruh s názvom mimo cesty výkresu; vráti sa tam, kde ste ho nechali. Dvojitým kliknutím na pruh s názvom ho znova vycentrujete. Pozri [Presun dialógového okna](common:arrange-panels#move-a-dialog).
- **Vypracované príklady pre asistentov AI.** Desať vypracovaných príkladov pre vášho asistenta (upraviť výkres, vykresliť sadu, skontrolovať výkresy, položiť modelu otázky, sčítať výkaz výmer, vyskúšať variant súčiastky…), každý s nástrojmi, ktoré volá, a oprávneniami, ktoré potrebuje, a každý overený našimi testami. Aplikácie neobsahujú AI. Pozri [Recepty pre asistentov AI](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jazyk}}. Tento, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** majú teraz všetky slová aplikácií ako koncepty, ktoré ešte neprečítal rodený hovorca. Témy pomocníka sú v angličtine.
- **CadCraft Studio** povie, prečo kontrola aktualizácie zlyhala (zatiaľ žiadny súbor pre váš systém, žiadna sieť, zlý podpis), namiesto len "Hotovo", a neprinesie späť kartu Čo je nové, ktorú ste zavreli, kým nevyjde novšie vydanie.

## Ešte nie je v tejto verzii

- **0.7 nie je podpísaná certifikátom kódu.** Podpisovanie a balík Microsoft Store sa presunuli do verzie 0.8, lebo overenie certifikátu ešte neprišlo. Skontrolujte SHA-256 pri každom súbore na getcadcraft.com/download. Vo Windows, ak SmartScreen zastaví inštalátor, zvoľte {{ui:Viac informácií}}, potom {{ui:Spustiť aj tak}}. Na Macu pri prvom spustení kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvorené}}. CadCraft Studio zatiaľ nie je v obchode s aplikáciami a zostavenie pre iPad ani iPhone ešte neexistuje.
- Zobrazenie uhla a sklonu v {{ui:Jednotky}} sa ukladá, ale žiadne políčko ich ešte nečíta.
- **Pozvánky na ponuky sú vypnuté pre väčšinu účtov.** Kým sa funkcia testuje, e-maily vonkajším uchádzačom odchádzajú iba z účtov, ktoré tím CadCraft povolil. Stránky uchádzačov fungujú pre každú už odoslanú pozvánku. Ostatní: stiahnite {{ui:CSV rozsahu}}, pošlite ho e-mailom sami a ponuky zadajte ručne.
- Okno CadCraft Studio zatiaľ nemôže odosielať pozvánky na ponuky: hovorí, aby ste použili TakeoffCraft v prehliadači. Otvorenie výkazu výmer s odoslanými žiadosťami, vyrovnávanie a výber ponuky fungujú v Studiu.
- Dodatky, oznámenia o zadaní zákazky, list rozsahu, ktorý každý uchádzač podpisuje, a automatické pripomienky pred vypršaním poistenia nie sú hotové. Vybraná ponuka neprepočíta plochu alternatívnej ponuky.
- Výkresy: tabuľky štýlov vykreslenia a súbory CTB sa neuplatňujú, binárny DXF sa odmietne (uložte ho ako ASCII DXF alebo DWG), prepojené výkresy sa nájdu iba medzi otvorenými súbormi podľa názvu súboru, a podklady PDF, obrázky a objekty OLE vo výkrese sa nekreslia ani nepočítajú. Počty a mierky boli overené na vzorových výkresoch, zatiaľ nie na výkresoch z reálnej zákazky otvorených v programe, ktorý ich vytvoril.
- Asistent môže pridávať položky a značky, ale nemôže presúvať, meniť ani mazať značky, ktoré už existujú.

Všetko ostatné je v [Ešte nie je hotové](topic:not-built-yet).
