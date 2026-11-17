---
title: Co je nového ve verzi 0.9
summary: Délky v metrech, centimetrech nebo milimetrech, metrické plochy v m2 se stěnovou plochou, předvolby měřítka 1:75 a 1:150, jednotky hmotnosti a teploty, Oblouk s deseti metodami a živé kurzory, Sledování a seznam lidí.
keywords: co je nového, poznámky k vydání, seznam změn, 0.9, zobrazit délky jako, metry, centimetry, milimetry, metrické, podle globálního nastavení, jednotky, zobrazované jednotky, m2, čtvereční metry, stěnová plocha, předvolby měřítka, 1:75, 1:150, hmotnost, kilogramy, kg, tuna, t, lb, teplota, celsius, fahrenheit, oblouk, metody oblouku, oblouk ze tří bodů, poloměr, živě, kurzory, sledování, seznam lidí, třída, bubliny nápovědy, rozvržení, verze, nové funkce, spočítat vše, legenda, legenda symbolů, celá sada, zapamatované ceny, minulé zakázky, minulá zakázka, typická cena, dodavatel, sklad, dodací lhůta, nedostatek, objednávka, panel problémů, asistent, jazyky, vstupní zařízení, řádky panelu nástrojů, dwg
from: 6182b998
---

Toto se změnilo ve verzi TakeoffCraft 0.9 oproti verzi 0.8.1. Je to malé vydání pro tuto aplikaci: délky lze nyní číst v metrech, centimetrech nebo milimetrech, plochy a měřítka se správně řídí metrickou prací a Oblouk má deset způsobů kreslení. Živé relace nyní také ukazují, kdo je kde.

## Nové

### Čtení délek v metrech, centimetrech nebo milimetrech

- **Zobrazit délky jako.** {{ui:Nastavení}} › {{ui:TakeoffCraft}} má {{ui:Zobrazit délky jako}} s volbami {{ui:Podle globálního nastavení}}, {{ui:Stopy a palce}}, m, cm a mm. {{ui:Podle globálního nastavení}} použije metrickou jednotku délky, kterou označíte v {{ui:Nastavení}} › {{ui:Globální}} › {{ui:Jednotky}}, a stopy a palce, když žádná označena není. Mění, jak se délky čtou na listu, ve stavovém řádku a v panelech, včetně výšek, hloubek, tlouštěk a úrovní. Holé číslo zadané do pole výšky se čte v zobrazené jednotce.
- **Jen zobrazení.** Množství, náklady a exporty se počítají z přesných délek. Volba 1/16, 1/8 a 1/4 palce se objeví jen u stop a palců. Viz [Zobrazení délek v metrech](topic:show-lengths-in-meters).
- **Jednotky hmotnosti.** Položka {{ui:Zadané množství (bez výkresu)}} může být nyní v lb, TON, kg nebo t a být oceněna za jednotku.
- **Teplota.** Každá položka má volitelné pole {{ui:Teplota}} v editoru položky, zadávané ve stupních C nebo F. {{ui:Zobrazit teploty jako}} v {{ui:Nastavení}} › {{ui:TakeoffCraft}} nabízí {{ui:Podle globálního nastavení}}, °C nebo °F.

### Plochy a měřítka pro metrickou práci

- **Plochy v m2 na výkresu.** Plocha změřená metrickou položkou nyní na štítku výkresu a v panelu značek, stejně jako v tabulce, říká m2 místo SF. Pravidlo zní: m2, když je položka oceněna v metrice nebo když se délky ukazují v m, cm nebo mm, jinak SF.
- **Stěnová plocha.** Délková položka s výškou ukazuje také svou stěnovou plochu (délka krát výška) v seznamu Položky a jako poznámkový řádek pod tabulkou množství podle položek.
- **Předvolby měřítka 1:75 a 1:150.** Jsou v seznamu {{ui:Předvolba}} ve skupině {{ui:Měřítko}}, která nyní má 32 měřítek. Viz [Předvolby měřítka](topic:scale-presets).

### Oblouk s deseti metodami

- Když je {{ui:Oblouk}} zapnutý (tlačítko na panelu nástrojů nebo {{key:R}}), v liště listu se objeví pole {{ui:Způsob oblouku}} s těmito možnostmi: 3 body, Začátek, Střed, Konec; Začátek, Střed, Úhel; Začátek, Střed, Délka; Začátek, Konec, Úhel; Začátek, Konec, Směr; Začátek, Konec, Poloměr; Střed, Začátek, Konec; Střed, Začátek, Úhel; Střed, Začátek, Délka. Úhel, délku, poloměr a směr lze klikat nebo zadávat. Funguje v délkových úsecích, plochách a odpočtech. Soubory uložené před verzí 0.9 se otevřou stejně. Viz [Kreslení oblouků deseti metodami](topic:draw-arcs-ten-methods).

### Spolupráce

- **Vidíte kurzory ostatních.** V živé relaci se ukazatel každého člověka zobrazí na listu se jménem a barvou, s čárkovaným rámečkem kolem značek, které vybral. Lidé na jiném listu jsou vypsáni s názvem toho listu. Viz [Práce živě s ostatními](topic:work-live).
- **Sledování člověka a seznam lidí.** Tlačítko {{ui:Lidé}} v živé relaci vypíše každého člověka s nástrojem, který používá, listem, na kterém je, a časem, kdy naposledy upravil. {{ui:Sledovat}} posouvá váš pohled s jeho pohledem a hostitel může použít {{ui:Požádat všechny, aby mě sledovali}}. Viz [Sledování kolegy v živé relaci](topic:follow-a-teammate).

## Ve všech aplikacích

- **Bubliny nápovědy a úvodní tip.** Text při najetí je bublina Bootstrap a úvodní tip lze zavřít.
- **Posuvné pruhy karet.** Pruh karet panelu, který se nevejde, se posouvá místo toho, aby byl oříznut.
- **Názvy karet.** Karta prohlížeče ukazuje `<document> - TakeoffCraft | CadCraft`.
- **Rozvržení.** Seznam rozvržení v {{ui:Nastavení}} je rozbalovací nabídka, která ukazuje zvolené rozvržení.
- **Jazyk.** Jazyk, který zvolíte, se nyní dostane i ke slovům, která stránka tiskne sama, například Nový, Otevřít a Uložit. Jazyky jiné než angličtina jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.

## Upřímné limity

- Zobrazení délek, jednotek hmotnosti a teploty a nové předvolby byly ověřeny testy a na stránce. Každý panel při každé jednotce ručně ověřen nebyl.
- Seznam lidí nebyl ručně ověřen se skutečnou třídou učitele a studentů.
- Jazyky jiné než angličtina jsou strojové koncepty.
- Instalátory pro Windows nejsou podepsány kódem (Další informace, pak Přesto spustit). Disková obrazová kopie pro macOS není notarizována (pravé tlačítko, pak Otevřít).

## Dřívější: 0.8 a 0.8.1

Toto se změnilo ve verzi TakeoffCraft 0.8 (vydané 2026-11-01) a 0.8.1 (2026-11-02) oproti verzi 0.7. Legendu symbolů lze nyní spočítat najednou v celé sadě, nový výkaz může začít z cen vašich minulých zakázek a výkaz lze zkontrolovat proti skladu dodavatele. 0.8.1 je opravné vydání.

### Nové

**Spočítejte vše v sadě**

- **Označte legendu jednou.** {{ui:Spočítat vše}} na panelu nástrojů čte legendu symbolů: přetáhněte rámeček kolem symbolů a názvů napsaných vedle nich. Každý symbol je vypsán se svým obrázkem a názvem a název se stane názvem položky. Odškrtněte, co nechcete, a pak zvolte {{ui:Počítat na N listech}}. Lišta ukazuje, který list se prohledává, {{ui:Zrušit}} zastaví běh a stránka zůstává použitelná.
- **Každý list v jednom běhu.** Každý symbol se počítá na každém otevřeném listu. List nakreslený v jiném měřítku se prohledá v tom měřítku a symboly se najdou otočené v libovolném pravém úhlu. Vlastní symboly legendy na jejím listu se nepočítají.
- **Kontrola před přidáním čehokoli.** Každý součet má odkaz na list ("E-103: 4"), který vede na ten list. Kliknutím na rámeček nálezu jej vynecháte a dalším kliknutím vrátíte. Úroveň shody (50 % až 100 %) jen filtruje, co se našlo; nic se nehledá znovu.
- **Jeden krok zpět.** {{ui:Přidat N značek}} vytvoří položku počtu na každý symbol se značkou u každého nálezu. Název, který už je vaší položkou počtu, se znovu použije. {{key:Ctrl+Z}} vezme zpět všechny položky a značky. Co přijmete, se také předá do {{ui:Naučené}}.
- **Symboly v libovolném úhlu.** Před počítáním zaškrtněte {{ui:Symboly v libovolném úhlu}}, aby se našly i symboly otočené o úhel, který není pravý. Hledání pak otáčí každý symbol po 15 stupních a symbol, který není kulatý, může trvat až šestkrát déle.
- **Co to je.** Prosté porovnávání symbolů na vašich vlastních listech, bez natrénovaného modelu, a nic neopouští váš počítač. Na smyšlené sadě 200 listů to v Chrome na rychlém stolním počítači trvalo od začátku do konce 9.4 sekundy; skutečné sady plánů budou pomalejší. Viz [Spočítat vše v sadě](topic:count-everything).

**Zapamatované ceny z vašich zakázek**

- **TakeoffCraft si pamatuje vaše sazby.** Když uložíte výkaz, každá oceněná položka, která se použije, se zapamatuje podle názvu a typu: sazba materiálu, sazba práce, odpad a jednotka. Uchovávají se posledních 12 zakázek pro každý název. Je uložena v tomto počítači vedle ceníku Knihovny, nikdy uvnitř souboru výkazu, a nikam se nic neposílá.
- **Nový výkaz z nich.** {{ui:Ceny}} na panelu nástrojů ukazuje pro každou položku sazby poslední zakázky, typické sazby a rozpětí. {{ui:Použít minulou}} nebo {{ui:Použít typickou}} ocení jednu položku a {{ui:Ocenit N neoceněných položek z paměti}} vyplní každou položku, která zatím nemá cenu. Každé použití je jeden krok zpět.
- **Starší práce.** {{ui:Naučit se z minulého výkazu výměr…}} zapamatuje oceněné položky uloženého výkazu (.json).
- **Vidět, změnit, zapomenout.** {{ui:Vše zapamatované}} vypíše každý název; koš zapomene jeden a {{ui:Vymazat všechny ceny}} zapomene všechny. Vypněte {{ui:Pamatovat si moje ceny při uložení výkazu výměr}}, aby to přestalo. Cena za kus se nikdy nedá přenést na položku počítanou za stopu. Viz [Paměť cen z minulých zakázek](topic:price-memory).

**Zásoby dodavatele a dodací lhůty**

- **Kontrola proti seznamu dodavatele.** {{ui:Zásobování}} na panelu nástrojů vezme seznam zásob dodavatele ({{ui:Přidat soubor dodavatele…}}), CSV nebo tabulku, a zkontroluje proti němu, co výkaz potřebuje, včetně odpadu. Uchovávají se až pět souborů. Nic se neposílá a nic se nedotazuje dodavatele: soubor přinesete vy.
- **Co to říká.** Krátké položky jsou první: "Chybí 120 EA", "Dodací lhůta 21 dní", "Na objednávku", "Jednotka se liší", "Chybí údaj o skladu" nebo "Skladem". {{ui:Nejdelší chtěná lhůta (dny)}} začíná na 14.
- **Seznam objednávky.** {{ui:Seznam objednávky (CSV)}} stáhne krátké položky s chybějícím množstvím, dodavatelem a dodací lhůtou.
- **Ceny do knihovny.** Má-li soubor ceny, {{ui:Ceny do knihovny}} nastaví cenu materiálu každé položky Knihovny se stejným názvem a jednotkou. Přecenění z Knihovny je přenese do výkazu.
- **V panelu problémů.** Nedostatek je varování a dlouhá lhůta je poznámka, pod "Zásoby dodavatele". Jeden z nich můžete přijmout s důvodem a důvod se uloží do výkazu. Viz [Kontrola zásob dodavatele a dodacích lhůt](topic:supplier-stock).

**AI asistenti**

- **Nástroje pro všechny tři.** Když jsou asistenti v {{ui:Nastavení}} povoleni, asistent může číst legendu (`legend_open`), spustit počítání (`legend_count_start`, pak `legend_count_status` a `legend_count_result`) a přidat ji (`legend_count_add`, který může nejdřív ukázat náhled). Může číst zapamatované ceny (`prices_list`), ocenit z nich položky (`prices_apply`, který může nejdřív ukázat náhled) a přečíst kontrolu zásob (`supply_check`). Přidání souboru dodavatele zůstává vaší věcí. Viz [Použití TakeoffCraft s asistenty AI](topic:use-with-ai-assistants).

**Ve všech aplikacích**

- **Jazyky.** Padesát čtyři jazyky celkem; deset je nových (litevština, lotyština, bosenština, maráthí, telugština, albánština, afrikánština, filipínština, svahilština a uzbečtina). Jazyky jiné než angličtina jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.
- **Vstupní zařízení.** {{ui:Nastavení}} › {{ui:Globální}} › {{ui:Vstupní zařízení}} nastavuje, co dělá touchpad, boční tlačítka myši, pero, 3D myš, herní ovladač nebo MIDI ovladač, a to pro každou aplikaci nebo pro jednu. Viz [Použití touchpadu, 3D myši nebo ovladače](common:input-devices).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} nabízí {{ui:Zalomit}} (začátek), {{ui:2 řádky}} a {{ui:1 řádek}}; skupiny, které se nevejdou, se posouvají do strany. Viz [Uspořádání panelů](common:arrange-panels).
- **Panel problémů.** Sdílený panel varování a poznámek nyní nese výše uvedenou kontrolu zásob dodavatele, vedle ostatních kontrol.
- **Doplňky.** Doplňky následují váš seznam účtu. Viz [Doplňky a váš seznam účtu](common:addons-basics).
- **Připojte svou AI.** CadCraft Studio je centrum: připojte svého asistenta jednou pro všech osm aplikací. Studio nemá vlastní AI.

### Opraveno ve verzi 0.8.1

- **Sekce tříd DWG.** Sekce tříd souboru DWG se četla jako špatný typ. Opraveno v TakeoffCraft a ve čtyřech dalších aplikacích.
- **Studio může měnit jazyk za běhu.** Dříve byla Studio a jeho balené verze jen v angličtině. Nebylo testováno v desktopovém sestavení na každé platformě; dejte nám vědět, pokud se jazyk nemění.

### Ještě není v této verzi

- **Není podepsáno kódem.** Windows může varovat a na Macu při prvním spuštění kliknete pravým tlačítkem a zvolíte {{ui:Otevřeno}}. Sestavení pro obchody (Microsoft Store, Google Play, App Store) jsou pozastavena a sestavení pro iPad a iPhone nebylo přestavěno pro 0.8.1.
- **Aktualizace Studia.** Instalátor pro Windows a balíčky pro Linux kontrolují jednou denně a ptají se předem. Přenosný zip jen oznámí, macOS a APK se samy neaktualizují. Disková obrazová kopie .dmg pro macOS 0.8 následuje vydání.
- **Připojte svou AI.** Připojení jedním kliknutím uvnitř Studia, hostovaný konektor pro AI v prohlížeči, váš vlastní klíč API uvnitř Studia a publikovaný balíček MCP nejsou v této verzi slíbeny.
- **Spočítat vše.** Potřebuje symboly nakreslené stejně jako v legendě a symbol, přes který prochází zeď nebo dlouhá čára, se může přehlédnout. Zrcadlené symboly se nenajdou a list bez měřítka, nakreslený v jiné velikosti, se prohledá ve velikosti legendy. Před důvěrou ve zbytek zkontrolujte nálezy na prvním listu.
- **Zásoby dodavatele.** Údaje o skladu jsou jen tak aktuální jako soubor, který přidáte. Kontrola se nikdy nedotazuje dodavatele.
- **Jazyky.** Lišta aplikace v tamilštině přetéká.

Vše ostatní je v [Ještě není hotovo](topic:not-built-yet). Pro předchozí vydání viz [Co je nového ve verzi 0.7](topic:whats-new-0-7).
