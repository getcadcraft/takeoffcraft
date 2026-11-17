---
title: Čo je nové vo verzii 0.9
summary: Dĺžky v metroch, centimetroch alebo milimetroch, metrické plochy v m2 s plochou stien, predvoľby mierky 1:75 a 1:150, jednotky hmotnosti a teploty, Oblúk s desiatimi metódami a živé kurzory, sledovanie a zoznam ľudí.
keywords: čo je nové, poznámky k vydaniu, zoznam zmien, 0.9, zobrazovať dĺžky ako, metre, centimetre, milimetre, metrické, podľa globálneho nastavenia, jednotky, zobrazované jednotky, m2, štvorcové metre, plocha stien, predvoľby mierky, 1:75, 1:150, hmotnosť, kilogramy, kg, tona, lb, teplota, celzius, fahrenheit, oblúk, metódy oblúka, oblúk tromi bodmi, polomer, naživo, kurzory, sledovanie, zoznam ľudí, trieda, popisky, rozloženie, zmeny, 0.8, 0.8.1, verzia, nové funkcie, spočítať všetko, legenda, legenda symbolov, celá sada, pamäť cien, minulé zákazky, minulá zákazka, typická cena, dodávateľ, sklad, dodacia lehota, dodávka na objednávku, zoznam objednávky, nedostatok, panel problémov, asistent, jazyky, vstupné zariadenia, riadky panela nástrojov, dwg
from: 6182b998
---

Toto sa zmenilo vo verzii TakeoffCraft 0.9 v porovnaní s verziou 0.8.1. Je to malé vydanie pre túto aplikáciu: dĺžky sa teraz dajú čítať v metroch, centimetroch alebo milimetroch, plochy a mierky správne nasledujú metrickú prácu a Oblúk má desať spôsobov kreslenia. Živé relácie tiež ukazujú, kto je kde.

## Nové

### Čítanie dĺžok v metroch, centimetroch alebo milimetroch

- **Zobrazovať dĺžky ako.** {{ui:Nastavenia}} › {{ui:TakeoffCraft}} má {{ui:Zobrazovať dĺžky ako}} s voľbami {{ui:Podľa globálneho nastavenia}}, {{ui:Stopy a palce}}, m, cm a mm. {{ui:Podľa globálneho nastavenia}} použije metrickú jednotku dĺžky, ktorú ste označili v {{ui:Nastavenia}} › {{ui:Globálne}} › {{ui:Jednotky}}, a stopy a palce, ak žiadna nie je označená. Mení to, ako sa dĺžky čítajú na liste, v stavovom riadku a v paneloch, vrátane výšok, hĺbky, hrúbky a úrovní. Holé číslo zadané do políčka výšky sa číta v zobrazenej jednotke.
- **Iba zobrazenie.** Množstvá, náklady a exporty sa počítajú z presných dĺžok. Voľba 1/16, 1/8 a 1/4 palca sa zobrazí iba pre stopy a palce. Pozri [Zobrazenie dĺžok v metroch](topic:show-lengths-in-meters).
- **Jednotky hmotnosti.** Položka {{ui:Zadané množstvo (bez výkresu)}} môže byť teraz v lb, TON, kg alebo t a oceňovať sa podľa jednotky.
- **Teplota.** Každá položka má voliteľné políčko {{ui:Teplota}} v editore položky, zadávané v stupňoch C alebo F. {{ui:Zobraziť teploty ako}} v {{ui:Nastavenia}} › {{ui:TakeoffCraft}} ponúka {{ui:Podľa globálneho nastavenia}}, °C alebo °F.

### Plochy a mierky pre metrickú prácu

- **Plochy v m2 na výkrese.** Plocha zmeraná metrickou položkou teraz na označení na výkrese aj na paneli značiek hovorí m2 namiesto SF, rovnako ako v tabuľke. Pravidlo: m2, keď sa položka oceňuje v metrickej sústave alebo keď sa dĺžky zobrazujú v m, cm alebo mm; inak SF.
- **Plocha steny.** Lineárna položka s výškou zobrazuje aj plochu steny (dĺžka krát výška) v zozname položiek a ako riadok poznámky pod tabuľkou množstiev podľa položiek.
- **Predvoľby mierky 1:75 a 1:150.** Sú v zozname {{ui:Predvoľba}} v skupine {{ui:Mierka}}, ktorá má teraz 32 mierok. Pozri [Predvoľby mierky](topic:scale-presets).

### Oblúk s desiatimi metódami

- Keď je {{ui:Oblúk}} zapnutý (tlačidlo na paneli nástrojov alebo {{key:R}}), v paneli listu sa objaví políčko {{ui:Metóda oblúka}}: Tromi bodmi; Začiatok, Stred, Koniec; Začiatok, Stred, Uhol; Začiatok, Stred, Dĺžka; Začiatok, Koniec, Uhol; Začiatok, Koniec, Smer; Začiatok, Koniec, Polomer; Stred, Začiatok, Koniec; Stred, Začiatok, Uhol; a Stred, Začiatok, Dĺžka. Uhol, dĺžku, polomer a smer je možné zadať kliknutím alebo písaním. Funguje to v lineárnych úsekoch, plochách a výrezoch. Súbory uložené pred verziou 0.9 sa otvoria rovnako. Pozri [Kreslenie oblúkov desiatimi metódami](topic:draw-arcs-ten-methods).

### Spolupráca

- **Vidieť kurzory ostatných.** V živej relácii sa ukazovateľ každej osoby zobrazí na liste s jej menom a farbou, s prerušovaným rámčekom okolo značiek, ktoré vybrala. Ľudia na inom liste sú vypísaní s názvom tohto listu. Pozri [Práca naživo s ostatnými](topic:work-live).
- **Sledovanie osoby a zoznam ľudí.** Tlačidlo {{ui:Ľudia}} v živej relácii vypisuje každého človeka s nástrojom, ktorý používa, listom, na ktorom je, a časom poslednej úpravy. {{ui:Sledovať}} posúva váš pohľad spolu s jeho pohľadom a hostiteľ môže použiť {{ui:Požiadať všetkých, aby ma sledovali}}. Pozri [Sledovanie člena tímu v živej relácii](topic:follow-a-teammate).

## Vo všetkých aplikáciách

- **Bubliny s popisom a úvodný tip.** Text pri prejdení myšou je bublina s popisom (Bootstrap tooltip) a úvodný tip sa dá zavrieť.
- **Posuvné pásy kariet.** Pás kariet panela, ktorý sa nezmestí, sa posúva namiesto toho, aby bol orezaný.
- **Názvy kariet.** Karta prehliadača číta `<document> - TakeoffCraft | CadCraft`.
- **Rozloženie.** Zoznam rozložení v {{ui:Nastavenia}} je rozbaľovací zoznam, ktorý zobrazuje zvolené rozloženie.
- **Jazyk.** Jazyk, ktorý zvolíte, sa teraz dostane aj k slovám, ktoré stránka tlačí sama, napríklad Nový, Otvoriť a Uložiť. Jazyky iné ako angličtina sú strojové koncepty, kým ich neprečíta rodený hovorca.

## Úprimné obmedzenia

- Zobrazenie dĺžok, jednotky hmotnosti a teploty a nové predvoľby boli overené testami a na stránke. Každý panel pri každej jednotke nebol overený ručne.
- Zoznam ľudí nebol ručne overený s reálnou triedou učiteľa a žiakov.
- Jazyky iné ako angličtina sú strojové koncepty.
- Inštalátory pre Windows nie sú podpísané kódom (Viac informácií, potom Spustiť aj tak). Diskový obraz pre macOS nie je notarizovaný (kliknúť pravým tlačidlom, potom Otvoriť).

## Staršie: 0.8 a 0.8.1

Toto sa zmenilo vo verzii TakeoffCraft 0.8 (vydanej 2026-11-01) a 0.8.1 (2026-11-02) v porovnaní s verziou 0.7. Legendu symbolov sa teraz dá spočítať naraz na celej sade, nový výkaz výmer môže začať z cien vašich minulých zákaziek a výkaz výmer sa dá skontrolovať voči zásobám dodávateľa. Verzia 0.8.1 je opravné vydanie.

### Nové

**Spočítať všetko v sade**

- **Legendu stačí označiť raz.** {{ui:Spočítať všetko}} na paneli nástrojov prečíta legendu symbolov: ťahajte rámček okolo symbolov a názvov napísaných vedľa nich. Každý symbol je vypísaný s obrázkom a názvom a názov sa stane názvom položky. Odškrtnite, čo nechcete, a potom zvoľte {{ui:Počítať na N listoch}}. Pruh ukazuje hľadaný list, {{ui:Zrušiť}} zastaví beh a stránka zostáva použiteľná.
- **Všetky listy v jednom behu.** Každý symbol sa počíta na každom otvorenom liste. List nakreslený v inej mierke sa prehľadá v tejto mierke a symboly sa nájdu otočené v ľubovoľnom pravom uhle. Vlastné symboly legendy sa na jej liste nepočítajú.
- **Kontrola pred pridaním.** Každý súčet má odkaz na každý list ("E-103: 4"), ktorý vedie na ten list. Kliknite na rámček nálezu, aby ste ho vynechali, a kliknite znova, aby sa vrátil. Úroveň zhody (50 % až 100 %) iba filtruje, čo sa našlo; nič sa neprehľadáva znova.
- **Jeden krok späť.** {{ui:Pridať N značiek}} vytvorí položku počtu na každý symbol so značkou na každom náleze. Názov, ktorý už je vašou položkou počtu, sa znovu použije. {{key:Ctrl+Z}} vráti späť všetky položky a značky. Čo prijmete, sa tiež pridá do {{ui:Naučené}}.
- **Symboly v ľubovoľnom uhle.** Pred počítaním zaškrtnite {{ui:Symboly pod ľubovoľným uhlom}}, aby sa našli aj symboly otočené uhlom, ktorý nie je pravý. Hľadanie potom otáča každý symbol po 15 stupňoch a symbol, ktorý nie je okrúhly, môže trvať až šesťkrát dlhšie.
- **Čo to je.** Jednoduché porovnávanie symbolov na vašich vlastných listoch, bez natrénovaného modelu, a nič neopúšťa váš počítač. Na vymyslenej sade 200 listov to trvalo 9.4 sekundy od začiatku do konca v Chrome na rýchlom počítači; reálne sady plánov budú pomalšie. Pozri [Spočítať všetko v sade](topic:count-everything).

**Pamäť cien z vašich vlastných zákaziek**

- **TakeoffCraft si pamätá vaše sadzby.** Keď uložíte výkaz výmer, každá ocenená položka, ktorá sa použije, sa pamätá podľa názvu a typu: sadzba materiálu, sadzba práce, odpad a jednotka. Pre každý názov sa uchováva posledných 12 zákaziek. Je uložená v tomto počítači vedľa cien v knižnici, nikdy v súbore výkazu výmer, a nikam sa nič neposiela.
- **Nový výkaz výmer z nej.** {{ui:Ceny}} na paneli nástrojov ukazuje pre každú položku sadzby z poslednej zákazky, typické sadzby a rozsah. {{ui:Použiť poslednú}} alebo {{ui:Použiť typickú}} ocení jednu položku a {{ui:Oceniť N položiek bez ceny z pamäte}} doplní každú položku, ktorá ešte nemá cenu. Každé použitie je jeden krok späť.
- **Staršia práca.** {{ui:Naučiť sa z minulého výkazu výmer…}} si zapamätá ocenené položky uloženého výkazu výmer (.json).
- **Vidieť, zmeniť, zabudnúť.** {{ui:Všetko zapamätané}} vypíše každý názov; tlačidlo koša zabudne jeden a {{ui:Vymazať všetky ceny}} zabudne všetky. Vypnite {{ui:Pamätať si moje ceny pri uložení výkazu výmer}}, aby sa to zastavilo. Cena za kus sa nikdy nepriradí položke oceňovanej za stopu. Pozri [Pamäť cien z minulých zákaziek](topic:price-memory).

**Zásoby dodávateľa a dodacie lehoty**

- **Kontrola voči zoznamu dodávateľa.** {{ui:Dodávka}} na paneli nástrojov vezme zoznam zásob dodávateľa ({{ui:Pridať súbor dodávateľa…}}), CSV alebo tabuľku, a skontroluje voči nemu, čo výkaz výmer potrebuje vrátane odpadu. Uchovávajú sa najviac päť súborov. Nič sa neposiela a nič sa nepýta dodávateľa: súbor prinesiete vy.
- **Čo to hovorí.** Krátke položky idú prvé: "Chýba 120 EA", "Dodacia lehota 21 dní", "Na objednávku", "Jednotka sa líši", "Nie je údaj o zásobách" alebo "Na sklade". {{ui:Najdlhšie požadované čakanie (dni)}} začína na 14.
- **Zoznam objednávky.** {{ui:Zoznam objednávky (CSV)}} stiahne krátke položky s chýbajúcim množstvom, dodávateľom a dodacou lehotou.
- **Ceny do knižnice.** Ak súbor obsahuje ceny, {{ui:Ceny do knižnice}} nastaví cenu materiálu každej položke knižnice s rovnakým názvom a jednotkou. Prepočítajte z knižnice, aby sa dostali do výkazu výmer.
- **V paneli Problémy.** Nedostatok je upozornenie a dlhé čakanie je poznámka, pod "Zásoby dodávateľa". Môžete ho prijať s dôvodom a dôvod sa uloží do výkazu výmer. Pozri [Kontrola zásob dodávateľa a dodacích lehôt](topic:supplier-stock).

**Asistenti AI**

- **Nástroje pre všetky tri oblasti.** Keď sú asistenti povolení v {{ui:Nastavenia}}, asistent vie prečítať legendu (`legend_open`), spustiť počítanie (`legend_count_start`, potom `legend_count_status` a `legend_count_result`) a pridať ho (`legend_count_add`, ktorý môže najprv zobraziť náhľad). Vie prečítať zapamätané ceny (`prices_list`), oceniť z nich položky (`prices_apply`, ktorý môže najprv zobraziť náhľad) a prečítať kontrolu dodávateľa (`supply_check`). Pridanie súboru dodávateľa zostáva na vás. Pozri [Použitie TakeoffCraft s asistentmi AI](topic:use-with-ai-assistants).

**Vo všetkých aplikáciách**

- **Jazyky.** Celkovo päťdesiatštyri jazykov; desať je nových (litovčina, lotyština, bosniančina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina a uzbečtina). Jazyky iné ako angličtina sú strojové koncepty, kým ich neprečíta rodený hovorca.
- **Vstupné zariadenia.** {{ui:Nastavenia}} › {{ui:Globálne}} › {{ui:Vstupné zariadenia}} nastaví, čo robí touchpad, bočné tlačidlá myši, pero, 3D myš, herný ovládač alebo MIDI ovládač, pre každú aplikáciu alebo pre jednu. Pozri [Používanie touchpadu, 3D myši alebo ovládača](common:input-devices).
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} ponúka {{ui:Zalomiť}} (štart), {{ui:2 riadky}} a {{ui:1 riadok}}; skupiny, ktoré sa nezmestia, sa posúvajú do strany. Pozri [Usporiadanie panelov](common:arrange-panels).
- **Panel Problémy.** Spoločný panel upozornení a poznámok teraz nesie kontrolu zásob dodávateľa spomenutú vyššie, vedľa ostatných kontrol.
- **Doplnky.** Doplnky sa riadia zoznamom vášho účtu. Pozri [Doplnky a zoznam vášho účtu](common:addons-basics).
- **Pripojenie AI.** CadCraft Studio je centrum: pripojte svojho asistenta raz pre všetkých osem aplikácií. Studio nemá vlastnú AI.

### Opravené vo verzii 0.8.1

- **Časť tried v súbore DWG.** Časť tried súboru DWG sa čítala ako nesprávny typ. Je to opravené v TakeoffCraft a v štyroch ďalších aplikáciách.
- **Studio môže meniť jazyk za behu.** Predtým boli Studio a jeho zabalené vydania len v angličtine. Toto nebolo otestované v desktopovom zostavení na každej platforme; dajte nám vedieť, ak sa jazyk nemení.

### Ešte nie je v tejto verzii

- **Bez podpisu kódom.** Windows môže upozorniť a na Macu pri prvom spustení kliknete pravým tlačidlom a zvolíte {{ui:Otvorené}}. Zostavenia pre obchody (Microsoft Store, Google Play, App Store) sú pozastavené a zostavenie pre iPad a iPhone nebolo prebudované pre 0.8.1.
- **Aktualizácie Studia.** Inštalátor pre Windows a balíky pre Linux kontrolujú raz denne a pýtajú sa najprv. Prenosný zip iba oznámi aktualizáciu a macOS a APK sa neaktualizujú samy. Súbor .dmg pre macOS 0.8 nasleduje vydanie.
- **Pripojenie AI.** Pripojenie jedným kliknutím v Studiu, hosťovaný konektor pre AI v prehliadači, váš vlastný API kľúč v Studiu a publikovaný balík MCP nie sú v tejto verzii sľúbené.
- **Spočítať všetko.** Vyžaduje symboly nakreslené rovnako ako v legende a symbol s múrom alebo dlhou čiarou cez seba sa môže minúť. Zrkadlové symboly sa nenájdu a list bez mierky nakreslený v inej veľkosti sa prehľadá vo veľkosti legendy. Pred dôverou v zvyšok skontrolujte nálezy na prvom liste.
- **Zásoby dodávateľa.** Údaje o zásobách sú iba také aktuálne, ako súbor, ktorý pridáte. Kontrola sa nikdy nepýta dodávateľa.
- **Jazyky.** Panel aplikácie v tamilčine presahuje obsah.

Všetko ostatné je v [Ešte nie je hotové](topic:not-built-yet). Pre vydanie pred týmto pozri [Čo je nové vo verzii 0.7](topic:whats-new-0-7).
