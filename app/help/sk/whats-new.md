---
title: Čo je nové vo verzii 0.8 a 0.8.1
summary: Spočítajte celú legendu symbolov naraz vo všetkých otvorených listoch, oceňujte položky podľa sadzieb vašich predchádzajúcich zákaziek, kontrolujte výkaz výmer voči zásobám a dodacím lehotám dodávateľa a používajte nové nástroje asistenta pre všetky tri, spolu so spoločnými zmenami vo verzii 0.8 a opravou 0.8.1 pre súbory DWG.
keywords: čo je nové, novinky, poznámky k vydaniu, zoznam zmien, zmeny, 0.8, 0.8.1, verzia, nové funkcie, spočítať všetko, legenda, legenda symbolov, celý súbor listov, pamäť cien, predchádzajúce zákazky, posledná zákazka, typická cena, dodávateľ, zásoby, dodacia lehota, nedodané tovary, nedostatok, zoznam objednávky, panel problémov, asistent, jazyky, vstupné zariadenia, riadky panela nástrojov, dwg
from: a04adef6
---

Toto sa zmenilo v TakeoffCraft 0.8 (vydané 2026-11-01) a 0.8.1 (2026-11-02) v porovnaní s verziou 0.7. Legendu symbolov je teraz možné spočítať naraz v celom súbore listov a nový výkaz výmer môže začať s cenami vašich predchádzajúcich zákaziek. Výkaz výmer je možné skontrolovať voči zásobám dodávateľa. Verzia 0.8.1 je oprava.

## Nové

### Spočítať všetko v súbore listov

- **Raz označte legendu.** {{ui:Spočítať všetko}} na paneli nástrojov načíta legendu symbolov: potiahnite rámček okolo symbolov a názvov, ktoré sú pri nich vytlačené. Každý symbol sa zobrazí s obrázkom a názvom a názov sa stane názvom položky. Odznačte, čo nechcete, a potom zvoľte {{ui:Spočítať na N listoch}}. Lišta ukazuje list, ktorý sa prehľadáva, {{ui:Zrušiť}} zastaví beh a stránka zostane použiteľná.
- **Všetky listy v jednom behu.** Každý symbol sa počíta na každom otvorenom liste. List nakreslený v inej mierke sa prehľadá v tejto mierke a symboly sa hľadajú otočené o ľubovoľný pravý uhol. Vlastné symboly legendy sa na jej liste nepočítajú.
- **Kontrola pred pridaním.** Každý súčet má odkaz na jednotlivé listy („E-103: 4"), ktorý vás na list presunie. Kliknutím na rámček nálezu ho vynecháte a ďalším kliknutím ho vrátite. Úroveň zhody (50 % až 100 %) iba filtruje nájdené výsledky; nič sa nehľadá znova.
- **Jeden krok späť.** {{ui:Pridať N značiek}} vytvorí položku počtu pre každý symbol so značkou pri každom náleze. Názov, ktorý už je vašou položkou počtu, sa znovu použije. {{key:Ctrl+Z}} vráti späť všetky položky a značky. To, čo prijmete, sa tiež uloží do {{ui:Naučené}}.
- **Symboly pod ľubovoľným uhlom.** Pred počítaním zaškrtnite {{ui:Symboly pod ľubovoľným uhlom}}, aby sa našli aj symboly otočené o uhol, ktorý nie je pravý. Vyhľadávanie potom otáča každý symbol po 15 stupňoch a symbol, ktorý nie je okrúhly, môže trvať až šesťkrát dlhšie.
- **Čo to je.** Obyčajné porovnávanie symbolov na vašich vlastných listoch bez trénovaného modelu; nič neopúšťa váš počítač. Na fiktívnom súbore 200 listov to v prehliadači Chrome na rýchlom počítači trvalo od začiatku do konca 9,4 sekundy; reálne súbory plánov budú pomalšie. Pozrite si [Spočítať všetko v súbore listov](topic:count-everything).

### Pamäť cien z vašich vlastných zákaziek

- **TakeoffCraft si pamätá vaše sadzby.** Pri uložení výkazu výmer sa každá ocenená položka, ktorá sa použila, zapamätá podľa názvu a typu: sadzba materiálu, sadzba práce, odpad a jednotka. Pre každý názov sa uchováva posledných 12 zákaziek. Uchováva sa na tomto počítači vedľa knižnice cien, nikdy vnútri súboru výkazu výmer, a nikam sa neodosiela.
- **Začnite nový výkaz výmer z nej.** {{ui:Ceny}} na paneli nástrojov zobrazí pri každej položke sadzby z poslednej zákazky, typické sadzby a rozsah. {{ui:Použiť poslednú}} alebo {{ui:Použiť typickú}} ocení jednu položku a {{ui:Oceniť N položiek bez ceny z pamäti}} doplní každú položku, ktorá ešte nemá cenu. Každé použitie je jeden krok späť.
- **Staršia práca.** {{ui:Naučiť sa z minulého výkazu výmer…}} zapamätá ocenené položky uloženého výkazu výmer (.json).
- **Pozrite si, zmeňte alebo zabudnite.** {{ui:Všetko zapamätané}} zobrazí každý názov; tlačidlo koša zabudne jeden z nich a {{ui:Vymazať všetky ceny}} zabudne všetky. Ak chcete ukladanie zastaviť, vypnite {{ui:Pamätať si moje ceny pri uložení výkazu výmer}}. Cena za kus sa nikdy nepremieta na položku za stopu. Pozrite si [Pamäť cien z vašich predchádzajúcich zákaziek](topic:price-memory).

### Zásoby a dodacie lehoty dodávateľa

- **Kontrola voči zoznamu dodávateľa.** {{ui:Dodávka}} na paneli nástrojov prijme zoznam zásob dodávateľa ({{ui:Pridať súbor dodávateľa…}}), CSV alebo tabuľku, a skontroluje, čo výkaz výmer potrebuje vrátane odpadu. Uchovávajú sa až päť súborov. Nič sa neodosiela a nič sa nepýta dodávateľa: súbor priniesete vy.
- **Čo to hovorí.** Najskôr sa zobrazujú krátke položky: „Chýba 120 EA", „Dodacia lehota 21 dní", „Na objednávku", „Iná jednotka", „Stav zásob nie je uvedený" alebo „Na sklade". {{ui:Najdlhšie požadované čakanie (dni)}} začína hodnotou 14.
- **Zoznam objednávky.** {{ui:Zoznam objednávky (CSV)}} stiahne položky s nedostatkom spolu s chýbajúcim množstvom, dodávateľom a dodacou lehotou.
- **Ceny do knižnice.** Ak súbor obsahuje ceny, {{ui:Ceny do knižnice}} nastaví cenu materiálu pri každej položke knižnice s rovnakým názvom a jednotkou. Ak ich chcete preniesť do výkazu výmer, preceňte z knižnice.
- **V paneli problémov.** Nedostatok je upozornenie a dlhé čakanie je poznámka, obe pod položkou „Zásoby dodávateľa". Nedostatok môžete prijať s uvedeným dôvodom a dôvod sa uloží do výkazu výmer. Pozrite si [Kontrola zásob dodávateľa a dodacích lehôt](topic:supplier-stock).

### Asistenti AI

- **Nástroje pre všetky tri.** Ak sú asistenti povolení v {{ui:Nastavenia}}, asistent môže prečítať legendu (`legend_open`), spustiť počítanie (`legend_count_start`, potom `legend_count_status` a `legend_count_result`) a pridať ho (`legend_count_add`, ktorý môže najskôr zobraziť náhľad). Môže prečítať zapamätané ceny (`prices_list`) a oceniť položky z nich (`prices_apply`, ktorý môže najskôr zobraziť náhľad) a prečítať kontrolu dodávateľa (`supply_check`). Pridanie súboru dodávateľa zostáva na vás. Pozrite si [Používanie TakeoffCraft s asistentmi AI](topic:use-with-ai-assistants).

### Vo všetkých aplikáciách

- **Jazyky.** Celkovo päťdesiatštyri jazykov; desať je nových (litovčina, lotyština, bosnčina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina a uzbečtina). Jazyky iné ako angličtina sú strojové koncepty, kým ich neprečíta rodený hovoriaci.
- **Vstupné zariadenia.** {{ui:Nastavenia}} › {{ui:Globálne}} › {{ui:Vstupné zariadenia}} určuje, čo robí touchpad, bočné tlačidlá myši, pero, 3D myš, herný ovládač alebo MIDI ovládač, pre všetky aplikácie alebo pre jednu. Pozrite si [Používanie touchpadu, 3D myši alebo ovládača](common:input-devices).
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} ponúka {{ui:Zalomiť}} (začiatok), {{ui:2 riadky}} a {{ui:1 riadok}}; skupiny, ktoré sa nezmestia, sa posúvajú do strany. Pozrite si [Usporiadanie panelov](common:arrange-panels).
- **Panel problémov.** Spoločný panel upozornení a poznámok teraz obsahuje vyššie uvedenú kontrolu zásob dodávateľa vedľa ostatných kontrol.
- **Doplnky.** Doplnky sledujú zoznam doplnkov vášho účtu. Pozrite si [Doplnky a zoznam vášho účtu](common:addons-basics).
- **Pripojte svojho asistenta AI.** CadCraft Studio je centrum: pripojte svojho asistenta raz pre všetkých osem aplikácií. Studio nemá vlastnú AI.

## Opravené vo verzii 0.8.1

- **Sekcia tried súboru DWG.** Sekcia tried súboru DWG sa čítala ako nesprávny typ. Je to opravené v TakeoffCraft a v štyroch ďalších aplikáciách.
- **Studio môže meniť jazyk počas behu.** Predtým boli Studio a jeho balené verzie iba v angličtine. Nebolo to otestované v desktopovom zostavení na každej platforme; ak sa jazyk nezmení, dajte nám vedieť.

## Ešte nie je v tejto verzii

- **Nie je podpísané certifikátom kódu.** Windows môže upozorniť a na Macu kliknete pravým tlačidlom a pri prvom spustení zvolíte {{ui:Otvorené}}. Obchodné zostavenia (Microsoft Store, Google Play, App Store) sú pozastavené a zostavenie pre iPad a iPhone nebolo znovu vytvorené pre 0.8.1.
- **Aktualizácie Studio.** Inštalátor pre Windows a balíky pre Linux kontrolujú raz denne a pred inštaláciou sa pýtajú. Prenosný zip iba oznámi novú verziu a macOS a APK sa neaktualizujú samy. Súbor .dmg pre macOS vo verzii 0.8 nasleduje vydanie.
- **Pripojenie AI.** Pripojenie jedným kliknutím v Studio, hostovaný konektor pre AI v prehliadači, váš vlastný API kľúč v Studio a zverejnený balík MCP nie sú v tejto verzii sľúbené.
- **Spočítať všetko.** Potrebuje symboly nakreslené rovnako ako v legende a symbol so stenou alebo dlhou čiarou cez seba sa môže prehliadnuť. Zrkadlové symboly sa nenájdu a list bez mierky, ktorý je nakreslený v inej veľkosti, sa prehľadá vo veľkosti legendy. Pred dôverou ostatným skontrolujte nálezy na prvom liste.
- **Zásoby dodávateľa.** Údaje o zásobách sú iba také aktuálne, ako súbor, ktorý pridáte. Kontrola sa nikdy nepýta dodávateľa.
- **Jazyky.** Aplikačný pruh pre tamilčinu presahuje.

Všetko ostatné je v časti [Ešte nie je hotové](topic:not-built-yet). Pre vydanie pred touto verziou pozrite [Čo je nové vo verzii 0.7](topic:whats-new-0-7).
