---
title: Čo je nové vo verzii 0.9 (staršie)
summary: Čítanie dĺžok v metroch, centimetroch alebo milimetroch, metrických plôch v m2 s plochou steny, predvoľby mierky 1:75 a 1:150, jednotky hmotnosti a teploty, oblúk s desiatimi metódami a kurzory naživo, sledovanie a zoznam ľudí.
keywords: čo je nové 0.9, staršie vydanie, čo je nové, poznámky k vydaniu, changelog, 0.9, zobrazovať dĺžky ako, metre, centimetre, milimetre, metrické, podľa globálneho nastavenia, jednotky, zobrazované jednotky, m2, štvorcové metre, plocha steny, predvoľby mierky, 1:75, 1:150, hmotnosť, kilogramy, kg, tona, ton, lb, teplota, celzius, fahrenheit, oblúk, metódy oblúka, oblúk z 3 bodov, polomer, naživo, kurzory, sledovanie, zoznam ľudí, trieda, tooltipy, rozloženie, čo je nové, poznámky k vydaniu, changelog, zmeny, 0.8, 0.8.1, verzia, nové funkcie, spočítať všetko, legenda, legenda symbolov, celá sada, pamäť cien, minulé práce, posledná práca, typická cena, dodávateľ, zásoby, dodacia lehota, nedodané, zoznam objednávky, nedostatok, panel problémov, asistent, jazyky, vstupné zariadenia, riadky panela nástrojov, dwg
from: f4322ba2
---

Toto sa zmenilo vo verzii TakeoffCraft 0.9 v porovnaní s verziou 0.8.1. Ide o malé vydanie pre túto aplikáciu: dĺžky sa teraz dajú čítať v metroch, centimetroch alebo milimetroch, plochy a mierky správne nasledujú metrickú prácu a oblúk má desať spôsobov kreslenia. Relácie naživo teraz tiež ukazujú, kto je kde.

## Nové

### Čítanie dĺžok v metroch, centimetroch alebo milimetroch

- **Zobrazovať dĺžky ako.** {{ui:Nastavenia}} › {{ui:TakeoffCraft}} obsahuje {{ui:Zobrazovať dĺžky ako}} s možnosťami {{ui:Podľa globálneho nastavenia}}, {{ui:Stopy a palce}}, m, cm a mm. {{ui:Podľa globálneho nastavenia}} používa metrickú jednotku dĺžky, ktorú ste označili v {{ui:Nastavenia}} › {{ui:Globálne}} › {{ui:Jednotky}}, a ak žiadna označená nie je, stopy a palce. Mení to spôsob zobrazenia dĺžok na liste, v stavovom riadku a v paneloch vrátane výšok, hĺbky, hrúbky a úrovní. Holé číslo zadané do poľa výšky sa číta v zobrazenej jednotke.
- **Iba zobrazenie.** Množstvá, náklady a exporty sa počítajú z presných dĺžok. Výber 1/16, 1/8 a 1/4 palca sa zobrazuje iba pre stopy a palce. Pozri [Zobrazenie dĺžok v metroch](topic:show-lengths-in-meters).
- **Jednotky hmotnosti.** Položka {{ui:Zadané množstvo (bez výkresu)}} môže byť teraz v lb, TON, kg alebo t a dá sa oceniť za jednotku.
- **Teplota.** Každá položka má v editore položiek voliteľné pole {{ui:Teplota}}, zadávané v stupňoch C alebo F. {{ui:Zobraziť teploty ako}} v {{ui:Nastavenia}} › {{ui:TakeoffCraft}} ponúka {{ui:Podľa globálneho nastavenia}}, °C alebo °F.

### Plochy a mierky pre metrickú prácu

- **Plochy v m2 na výkrese.** Plocha zmeraná metrickou položkou je teraz na značke výkresu a v paneli značiek označená m2 rovnako ako v tabuľke, namiesto SF. Pravidlo je m2, ak je položka ocenená v metrickej jednotke alebo sa dĺžky zobrazujú v m, cm alebo mm, a inak SF.
- **Plocha steny.** Lineárna položka s výškou zobrazuje aj plochu steny (dĺžka krát výška) v zozname položiek a ako riadok poznámky pod tabuľkou množstiev podľa položiek.
- **Predvoľby mierky 1:75 a 1:150.** Sú v zozname {{ui:Predvoľba}} v skupine {{ui:Mierka}}, ktorá má teraz 32 mierok. Pozri [Predvoľby mierky](topic:scale-presets).

### Oblúk s desiatimi metódami

- Keď je {{ui:Oblúk}} zapnutý (tlačidlo na paneli nástrojov alebo {{key:R}}), v lište listu sa zobrazí pole {{ui:Metóda oblúka}}: 3-Point, Start, Center, End, Start, Center, Angle, Start, Center, Length, Start, End, Angle, Start, End, Direction, Start, End, Radius, Center, Start, End, Center, Start, Angle a Center, Start, Length. Uhol, dĺžka, polomer a smer sa dajú kliknúť alebo zadať. Funguje pri lineárnych úsekoch, plochách a výrezoch. Súbory uložené pred verziou 0.9 sa otvoria rovnako. Pozri [Kreslenie oblúkov desiatimi metódami](topic:draw-arcs-ten-methods).

### Spolupráca

- **Vidieť kurzory ostatných.** V relácii naživo sa ukazovateľ každej osoby zobrazuje na liste s jej menom a farbou, s prerušovaným rámčekom okolo značiek, ktoré vybrala. Ľudia na inom liste sú uvedení s názvom tohto listu. Pozri [Spolupráca naživo s ostatnými](topic:work-live).
- **Sledovanie osoby a zoznam ľudí.** Tlačidlo {{ui:Ľudia}} v relácii naživo uvádza každú osobu s nástrojom, ktorý používa, listom, na ktorom je, a časom poslednej úpravy. {{ui:Sledovať}} posúva váš pohľad spolu s jej pohľadom a hostiteľ môže použiť {{ui:Požiadať všetkých, aby ma sledovali}}. Pozri [Sledovanie člena tímu v relácii naživo](topic:follow-a-teammate).

## Vo všetkých aplikáciách

- **Tooltipy a úvodný tip.** Text po nabehnutí myšou je Bootstrap tooltip a úvodný tip sa dá zavrieť.
- **Posúvateľné pásy kariet.** Pás kariet panela, ktorý sa nezmestí, sa posúva namiesto toho, aby bol orezaný.
- **Názvy kariet.** Karta prehliadača zobrazuje `<document> - TakeoffCraft | CadCraft`.
- **Rozloženie.** Zoznam rozložení v {{ui:Nastavenia}} je rozbaľovací zoznam, ktorý zobrazuje zvolené rozloženie.
- **Jazyk.** Zvolený jazyk sa teraz prenesie aj na texty, ktoré stránka sama vypisuje, napríklad Nový, Otvoriť a Uložiť. Jazyky iné ako angličtina sú strojové koncepty, kým ich nepreskúma rodený hovorca.

## Známe obmedzenia

- Zobrazenie dĺžok, jednotky hmotnosti a teploty a nové predvoľby boli overené testami a na stránke. Nie každý panel pri každej jednotke bol overený ručne.
- Zoznam ľudí nebol ručne overený s reálnou triedou učiteľa a študentov.
- Jazyky iné ako angličtina sú strojové koncepty.
- Inštalátory pre Windows nie sú podpísané certifikátom kódu (Ďalšie informácie, potom Spustiť aj tak). Disková čiastka pre macOS nie je notarizovaná (kliknite pravým tlačidlom, potom Otvorené).

## Staršie: 0.8 a 0.8.1

Toto sa zmenilo vo verzii TakeoffCraft 0.8 (vydanej 2026-11-01) a 0.8.1 (2026-11-02) v porovnaní s verziou 0.7. Legendu symbolov je teraz možné spočítať naraz v celej sade, nový výkaz výmer môže začať z cien vašich minulých prác a výkaz výmer sa dá overiť voči zásobám dodávateľa. Verzia 0.8.1 je opravné vydanie.

### Nové

**Spočítať všetko v sade**

- **Legendu označte iba raz.** {{ui:Spočítať všetko}} na paneli nástrojov prečíta legendu symbolov: ťahaním okolo symbolov a názvov napísaných vedľa nich označte rámček. Každý symbol sa uvedie s obrázkom a názvom a názov sa stane názvom položky. Odškrtnite, čo nechcete, potom zvoľte {{ui:Spočítať na N listoch}}. Lišta ukazuje list, ktorý sa prehľadáva, {{ui:Zrušiť}} zastaví beh a stránka zostáva použiteľná.
- **Každý list v jednom behu.** Každý symbol sa spočíta na každom otvorenom liste. List nakreslený v inej mierke sa prehľadá v tejto mierke a symboly sa nájdu otočené o ľubovoľný pravý uhol. Vlastné symboly legendy sa na jej liste nepočítajú.
- **Kontrola pred pridaním.** Každý súčet má odkaz na každý list („E-103: 4“), ktorý vedie na tento list. Kliknutím na rámček nálezu ho vynecháte a ďalším kliknutím ho vrátite. Úroveň zhody (50 % až 100 %) iba filtruje nájdené; nič sa znova neprehľadáva.
- **Jeden krok späť.** {{ui:Pridať N značiek}} vytvorí položku počtu pre každý symbol so značkou na každom náleze. Názov, ktorý už je vašou položkou počtu, sa znova použije. {{key:Ctrl+Z}} vráti všetky položky a značky späť. Čo prijmete, sa tiež pridá do {{ui:Naučené}}.
- **Symboly pod ľubovoľným uhlom.** Pred spočítaním označte {{ui:Symboly pod ľubovoľným uhlom}}, aby sa našli aj symboly otočené o uhol, ktorý nie je pravý. Hľadanie potom otáča každý symbol po 15 stupňoch a symbol, ktorý nie je okrúhly, môže trvať až šesťkrát dlhšie.
- **Čo to je.** Obyčajné porovnávanie symbolov na vašich vlastných listoch bez trénovaného modelu; nič neopúšťa váš počítač. Na zmyslenej sade 200 listov trvalo 9.4 sekundy od začiatku do konca v prehliadači Chrome na rýchlom počítači; reálne sady plánov budú pomalšie. Pozri [Spočítanie všetkého v sade](topic:count-everything).

**Pamäť cien z vašich vlastných prác**

- **TakeoffCraft si pamätá vaše sadzby.** Pri uložení výkazu výmer sa každá ocenená použitá položka uloží podľa názvu a typu: sadzba materiálu, sadzba práce, odpad a jednotka. Pre každý názov sa uchováva posledných 12 prác. Ukladá sa na tomto počítači vedľa knižnice cien, nikdy vnútri súboru výkazu výmer, a nikam sa neodosiela.
- **Nový výkaz výmer z nej začnite.** {{ui:Ceny}} na paneli nástrojov zobrazuje pre každú položku sadzby z poslednej práce, typické sadzby a rozpätie. {{ui:Použiť poslednú}} alebo {{ui:Použiť typickú}} ocení jednu položku a {{ui:Oceniť N položiek bez ceny z pamäte}} doplní každú položku, ktorá ešte nemá cenu. Každé použitie je jeden krok späť.
- **Staršia práca.** {{ui:Naučiť sa z minulého výkazu výmer…}} si zapamätá ocenené položky uloženého výkazu výmer (.json).
- **Pozrite, zmeňte, zabudnite.** {{ui:Všetko zapamätané}} uvádza každý názov; tlačidlo koša zabudne jeden názov a {{ui:Vymazať všetky ceny}} zabudne všetky. Vypnite {{ui:Pamätať si moje ceny pri uložení výkazu výmer}}, ak chcete prestať. Cena za kus sa nikdy nedá priradiť položke za stopu. Pozri [Pamäť cien z minulých prác](topic:price-memory).

**Zásoby dodávateľa a dodacie lehoty**

- **Kontrola voči zoznamu dodávateľa.** {{ui:Dodávka}} na paneli nástrojov načíta zoznam zásob dodávateľa ({{ui:Pridať súbor dodávateľa…}}), CSV alebo tabuľku, a porovná s ním, čo výkaz výmer potrebuje vrátane odpadu. Uchováva sa najviac päť súborov. Nič sa neodosiela a nič sa nepýta dodávateľa: súbor prinášate vy.
- **Čo to hovorí.** Najprv sa uvádzajú krátke položky: „Nedostatok 120 EA“, „Dodacia lehota 21 dní“, „Na objednávku“, „Iná jednotka“, „Chýba údaj o zásobách“ alebo „Na sklade“. {{ui:Najdlhšie požadované čakanie (dni)}} začína na 14.
- **Zoznam objednávky.** {{ui:Zoznam objednávky (CSV)}} stiahne krátke položky s chýbajúcim množstvom, dodávateľom a dodacou lehotou.
- **Ceny do knižnice.** Ak súbor obsahuje ceny, {{ui:Ceny do knižnice}} nastaví cenu materiálu každého záznamu knižnice s rovnakým názvom a jednotkou. Prepočítajte z knižnice, aby sa dostali do výkazu výmer.
- **V paneli problémov.** Nedostatok je upozornenie a dlhé čakanie je poznámka, v časti „Zásoby dodávateľa“. Môžete ho prijať s dôvodom a dôvod sa uloží do výkazu výmer. Pozri [Kontrola zásob dodávateľa a dodacích lehôt](topic:supplier-stock).

**AI asistenti**

- **Nástroje pre všetkých troch.** Ak sú asistenti povolení v {{ui:Nastavenia}}, asistent môže prečítať legendu (`legend_open`), spustiť počítanie (`legend_count_start`, potom `legend_count_status` a `legend_count_result`) a pridať ho (`legend_count_add`, ktorý môže najprv zobraziť náhľad). Môže prečítať zapamätané ceny (`prices_list`) a oceniť z nich položky (`prices_apply`, ktorý môže najprv zobraziť náhľad) a prečítať kontrolu dodávateľa (`supply_check`). Pridanie súboru dodávateľa zostáva na vás. Pozri [Použitie TakeoffCraft s AI asistentmi](topic:use-with-ai-assistants).

**Vo všetkých aplikáciách**

- **Jazyky.** Celkovo päťdesiatštyri jazykov; desať je nových (litovčina, lotyština, bosniačtina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina a uzbečtina). Jazyky iné ako angličtina sú strojové koncepty, kým ich nepreskúma rodený hovorca.
- **Vstupné zariadenia.** {{ui:Nastavenia}} › {{ui:Globálne}} › {{ui:Vstupné zariadenia}} určuje, čo robí touchpad, bočné tlačidlá myši, pero, 3D myš, herný ovládač alebo MIDI ovládač, pre všetky aplikácie alebo pre jednu. Pozri [Použitie touchpadu, 3D myši alebo ovládača](common:input-devices).
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} ponúka {{ui:Zalomiť}} (na začiatku), {{ui:2 riadky}} a {{ui:1 riadok}}; skupiny, ktoré sa nezmestia, sa posúvajú do strany. Pozri [Usporiadanie panelov](common:arrange-panels).
- **Panel problémov.** Spoločný panel upozornení a poznámok teraz obsahuje vyššie uvedenú kontrolu zásob dodávateľa vedľa ostatných kontrol.
- **Doplnky.** Doplnky sledujú zoznam vášho účtu. Pozri [Doplnky a zoznam vášho účtu](common:addons-basics).
- **Pripojte svoju AI.** CadCraft Studio je centrum: pripojte svojho asistenta raz pre všetkých osem aplikácií. Studio nemá vlastnú AI.

### Opravené vo verzii 0.8.1

- **Oddiel tried v DWG.** Oddiel tried súboru DWG sa čítal ako nesprávny typ. Opravené v TakeoffCraft a v štyroch ďalších aplikáciách.
- **Studio môže meniť jazyk počas behu.** Predtým boli Studio a jeho balené verzie iba v angličtine. Nebolo to otestované v desktopovej verzii na každej platforme; dajte nám vedieť, ak sa jazyk nemení.

### Ešte nie je v tejto verzii

- **Nie sú podpísané certifikátom kódu.** Windows môže zobraziť varovanie a na Macu kliknete pravým tlačidlom a pri prvom spustení zvolíte {{ui:Otvorené}}. Obchodné verzie (Microsoft Store, Google Play, App Store) sú pozastavené a verzia pre iPad a iPhone nebola pre 0.8.1 znova zostavená.
- **Aktualizácie Studio.** Inštalátor pre Windows a balíky pre Linux kontrolujú raz denne a pred inštaláciou sa pýtajú. Prenosný zip iba oznamuje a macOS a APK sa neaktualizujú samy. Disková čiastka .dmg pre 0.8 pre macOS nasleduje vydanie.
- **Pripojte svoju AI.** Pripojenie jedným kliknutím v Studio, hostovaný konektor pre AI v prehliadači, váš vlastný API kľúč v Studio a zverejnený balík MCP nie sú v tejto verzii zaručené.
- **Spočítať všetko.** Vyžaduje symboly nakreslené rovnako ako v legende a symbol, ktorým prechádza stena alebo dlhá čiara, sa môže minúť. Zrkadlové symboly sa nenájdu a list bez mierky, nakreslený v inej veľkosti, sa prehľadá vo veľkosti legendy. Pred dôverou v zvyšok skontrolujte nálezy na prvom liste.
- **Zásoby dodávateľa.** Údaje o zásobách sú len také aktuálne, ako súbor, ktorý pridáte. Kontrola sa nikdy nepýta dodávateľa.
- **Jazyky.** Lišta aplikácie v tamilčine pretieka.

Všetko ostatné je v [Ešte nie je hotové](topic:not-built-yet). Pre vydanie pred týmto pozri [Čo je nové vo verzii 0.7](topic:whats-new-0-7).
