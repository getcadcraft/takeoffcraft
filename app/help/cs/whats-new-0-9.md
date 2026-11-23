---
title: Novinky ve verzi 0.9 (dříve)
summary: Délky v metrech, centimetrech nebo milimetrech, metrické plochy v m2 s plochou stěn, předvolby měřítek 1:75 a 1:150, jednotky hmotnosti a teploty, oblouk s deseti způsoby a živé kurzory, sledování a seznam lidí.
keywords: novinky 0.9, dřívější vydání, novinky, co je nového, poznámky k vydání, changelog, 0.9, zobrazit délky jako, metry, centimetry, milimetry, metrické, podle globálního nastavení, jednotky, zobrazované jednotky, m2, čtvereční metry, plocha stěn, předvolby měřítek, 1:75, 1:150, hmotnost, kilogramy, kg, tuna, t, lb, teplota, celsius, fahrenheit, oblouk, způsoby oblouku, oblouk ze 3 bodů, poloměr, živě, kurzory, sledování, seznam lidí, třída, bubliny nápovědy, rozvržení, novinky, poznámky k vydání, changelog, změny, 0.8, 0.8.1, verze, nové funkce, spočítat vše, legenda, legenda symbolů, celá sada, paměť cen, minulé zakázky, poslední zakázka, typická cena, dodavatel, sklad, dodací lhůta, objednávka, nedostatek, panel problémů, asistent, jazyky, vstupní zařízení, řádky panelu nástrojů, dwg
from: f4322ba2
---

Toto je přehled změn v TakeoffCraft 0.9 oproti verzi 0.8.1. Je to malé vydání pro tuto aplikaci: délky lze nyní číst v metrech, centimetrech nebo milimetrech, plochy a měřítka se správně řídí metrickou prací a oblouk lze kreslit deseti způsoby. Živá spolupráce také ukazuje, kdo je kde.

## Novinky

### Čtení délek v metrech, centimetrech nebo milimetrech

- **Zobrazit délky jako.** {{ui:Nastavení}} › {{ui:TakeoffCraft}} má {{ui:Zobrazit délky jako}} s volbami {{ui:Podle globálního nastavení}}, {{ui:Stopy a palce}}, m, cm a mm. {{ui:Podle globálního nastavení}} použije metrickou jednotku délky, kterou jste označili hvězdičkou v {{ui:Nastavení}} › {{ui:Globální}} › {{ui:Jednotky}}, a pokud žádná označená není, stopy a palce. Změní to způsob, jakým se délky čtou na listu, ve stavovém řádku a v panelech, včetně výšek, hloubky, tloušťky a podlaží. Holé číslo zadané do pole výšky se čte v zobrazené jednotce.
- **Jen zobrazení.** Množství, náklady a exporty se počítají z přesných délek. Volba 1/16, 1/8 a 1/4 palce se zobrazí jen pro stopy a palce. Viz [Zobrazení délek v metrech](topic:show-lengths-in-meters).
- **Jednotky hmotnosti.** Položka {{ui:Zadané množství (bez výkresu)}} může být nyní v lb, TON, kg nebo t a být oceněna za jednotku.
- **Teplota.** Každá položka má v editoru položky volitelné pole {{ui:Teplota}}, zadávané ve stupních C nebo F. {{ui:Zobrazit teploty jako}} v {{ui:Nastavení}} › {{ui:TakeoffCraft}} nabízí {{ui:Podle globálního nastavení}}, °C nebo °F.

### Plochy a měřítka pro metrickou práci

- **Plochy v m2 na výkresu.** Plocha změřená metrickou položkou nyní na popisku výkresu i v panelu značek i v tabulce uvádí m2 místo SF. Pravidlo: m2, pokud je položka oceněna metricky nebo se délky zobrazují v m, cm nebo mm, jinak SF.
- **Plocha stěn.** Lineární položka s výškou zobrazí také plochu stěny (délka krát výška) v seznamu položek a jako řádek poznámky pod tabulkou množství podle položek.
- **Předvolby měřítek 1:75 a 1:150.** Jsou v seznamu {{ui:Předvolba}} ve skupině {{ui:Měřítko}}, která má nyní 32 měřítek. Viz [Předvolby měřítek](topic:scale-presets).

### Oblouk s deseti způsoby

- Dokud je {{ui:Oblouk}} zapnutý (tlačítko na panelu nástrojů nebo {{key:R}}), objeví se v panelu listu pole {{ui:Způsob oblouku}}: 3 body, Začátek, Střed, Konec; Začátek, Střed, Úhel; Začátek, Střed, Délka; Začátek, Konec, Úhel; Začátek, Konec, Směr; Začátek, Konec, Poloměr; Střed, Začátek, Konec; Střed, Začátek, Úhel; Střed, Začátek, Délka. Úhel, délku, poloměr a směr lze zadat kliknutím nebo napsáním. Funguje to v lineárních úsecích, plochách a výřezech. Soubory uložené před verzí 0.9 se otevřou stejně. Viz [Kreslení oblouků deseti způsoby](topic:draw-arcs-ten-methods).

### Společná práce

- **Vidět kurzory ostatních.** V živé spolupráci je ukazatel každého člověka vidět na listu se jménem a barvou a přerušovaný rámeček kolem značek, které vybral. Lidé na jiném listu jsou uvedeni s názvem jejich listu. Viz [Společná práce naživo](topic:work-live).
- **Sledování člověka a seznam lidí.** Tlačítko {{ui:Lidé}} v živé spolupráci vypíše každého člověka s nástrojem, který používá, listem, na kterém je, a časem poslední úpravy. {{ui:Sledovat}} posouvá váš pohled spolu s jeho pohledem a hostitel může použít {{ui:Požádat všechny, aby mě sledovali}}. Viz [Sledování člena týmu v živé spolupráci](topic:follow-a-teammate).

## Ve všech aplikacích

- **Bubliny nápovědy a úvodní tip.** Text po najetí myší je Bootstrap tooltip a úvodní tip lze zavřít.
- **Posuvné pruhy karet.** Pruh karet panelu, který se nevejde, se posouvá místo toho, aby byl oříznut.
- **Názvy záložek.** Záložka prohlížeče má název `<document> - TakeoffCraft | CadCraft`.
- **Rozvržení.** Seznam rozvržení v {{ui:Nastavení}} je rozbalovací nabídka, která ukazuje zvolené rozvržení.
- **Jazyk.** Zvolený jazyk nyní platí i pro slova, která stránka tiskne sama, například Nový, Otevřít a Uložit. Jiné jazyky než angličtina jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.

## Upřímná omezení

- Zobrazení délek, jednotky hmotnosti a teploty a nové předvolby byly ověřeny testy a na stránce. Každý panel při každé jednotce nebyl ověřen ručně.
- Seznam lidí nebyl ručně ověřen se skutečnou třídou učitele a žáků.
- Jazyky jiné než angličtina jsou strojové koncepty.
- Instalátory pro Windows nejsou podepsané kódem (Další informace, pak Přesto spustit). Disk macOS není notarizován (klikněte pravým tlačítkem, pak Otevřít).

## Dříve: 0.8 a 0.8.1

Toto je přehled změn v TakeoffCraft 0.8 (vydané 2026-11-01) a 0.8.1 (2026-11-02) oproti verzi 0.7. Legendu symbolů lze nyní spočítat v celé sadě najednou, nový výkaz lze začít z cen vašich minulých zakázek a výkaz lze zkontrolovat proti skladu dodavatele. Verze 0.8.1 je opravné vydání.

### Novinky

**Spočítat vše v sadě**

- **Ohraničte legendu jednou.** {{ui:Spočítat vše}} na panelu nástrojů čte legendu symbolů: vytáhněte rámeček kolem symbolů a názvů napsaných vedle nich. Každý symbol je uveden s obrázkem a názvem a název se stane názvem položky. Odškrtněte, co nechcete, a potom zvolte {{ui:Spočítat na N listech}}. Lišta ukazuje list, který se prohledává, {{ui:Zrušit}} zastaví běh a stránka zůstane použitelná.
- **Každý list v jednom běhu.** Každý symbol se počítá na každém otevřeném listu. List nakreslený v jiném měřítku se prohledá v tomto měřítku a symboly se najdou otočené o libovolný pravý úhel. Vlastní symboly legendy se na jejím listu nepočítají.
- **Kontrola před přidáním čehokoli.** Každý součet má odkaz na každý list ("E-103: 4"), který vede na tento list. Klikněte na rámeček nálezu, aby se vynechal, a klikněte znovu, aby se vrátil. Úroveň shody (50 % až 100 %) jen filtruje to, co bylo nalezeno; nic se znovu nehledá.
- **Jeden krok zpět.** {{ui:Přidat N značek}} vytvoří položku počtu pro každý symbol se značkou na každém nálezu. Název, který už je vaší položkou počtu, se znovu použije. {{key:Ctrl+Z}} vrátí zpět všechny položky a značky. Co přijmete, se také předá do {{ui:Naučené}}.
- **Symboly v libovolném úhlu.** Před počítáním zaškrtněte {{ui:Symboly v libovolném úhlu}}, aby se našly i symboly otočené o úhel, který není pravý. Hledání pak otočí každý symbol po 15 stupních a symbol, který není kulatý, může trvat až šestkrát déle.
- **Co to je.** Prosté porovnávání symbolů na vašich vlastních listech, bez natrénovaného modelu, a nic neopouští váš počítač. Na vymyšlené sadě o 200 listech trvalo celé zpracování 9.4 sekundy v Chrome na rychlém počítači; skutečné sady plánů budou pomalejší. Viz [Spočítat vše v sadě](topic:count-everything).

**Paměť cen z vlastních zakázek**

- **TakeoffCraft si pamatuje vaše sazby.** Když uložíte výkaz, každá oceněná použitá položka se zapamatuje podle názvu a typu: sazba materiálu, sazba práce, odpad a jednotka. Pro každý název se uchovávají posledních 12 zakázek. Je uložena na tomto počítači vedle knihovny cen, nikdy uvnitř souboru výkazu, a nikam se neodesílá.
- **Nový výkaz z ní začněte.** {{ui:Ceny}} na panelu nástrojů ukazuje u každé položky sazby poslední zakázky, typické sazby a rozpětí. {{ui:Použít minulou}} nebo {{ui:Použít typickou}} ocení jednu položku a {{ui:Ocenit N položek bez ceny z paměti}} doplní každou položku, která zatím nemá cenu. Každé použití je jeden krok zpět.
- **Starší práce.** {{ui:Naučit se z minulého výkazu výměr…}} si zapamatuje oceněné položky uloženého výkazu (.json).
- **Vidět, změnit, zapomenout.** {{ui:Vše zapamatované}} vypíše každý název; tlačítko koše zapomene jeden název a {{ui:Vymazat všechny ceny}} zapomene všechny. Vypněte {{ui:Pamatovat si moje ceny při uložení výkazu výměr}}, pokud chcete přestat. Cena za kus se nikdy nepřenese na položku na stopu. Viz [Paměť cen z minulých zakázek](topic:price-memory).

**Sklad dodavatele a dodací lhůty**

- **Kontrola proti seznamu dodavatele.** {{ui:Zásobování}} na panelu nástrojů přijme seznam skladu dodavatele ({{ui:Přidat soubor dodavatele…}}), CSV nebo tabulku, a porovná s ním, co výkaz potřebuje, včetně odpadu. Uchovávají se až pět souborů. Nic se neodesílá a nikoho se nic neptá: soubor přinesete vy.
- **Co hlásí.** Nejprve jsou krátké položky: "Chybí 120 EA", "Dodací lhůta 21 dní", "Na objednávce", "Jednotka se liší", "Chybí údaj o skladu" nebo "Skladem". {{ui:Nejdelší chtěná lhůta (dny)}} začíná na 14.
- **Seznam objednávky.** {{ui:Seznam objednávky (CSV)}} stáhne krátké položky s chybějícím množstvím, dodavatelem a dodací lhůtou.
- **Ceny do knihovny.** Pokud soubor obsahuje ceny, {{ui:Ceny do knihovny}} nastaví cenu materiálu každé položce knihovny se stejným názvem a jednotkou. Přeoceněním z knihovny je přenesete do výkazu.
- **V panelu problémů.** Nedostatek je varování a dlouhá lhůta je poznámka, pod "Sklad dodavatele". Jeden můžete přijmout s důvodem a důvod se uloží do výkazu. Viz [Kontrola skladu dodavatele a dodacích lhůt](topic:supplier-stock).

**AI asistenti**

- **Nástroje pro všechny tři.** Pokud jsou asistenti v {{ui:Nastavení}} povoleni, asistent umí přečíst legendu (`legend_open`), spustit počítání (`legend_count_start`, potom `legend_count_status` a `legend_count_result`) a přidat výsledek (`legend_count_add`, který umí nejprve zobrazit náhled). Umí přečíst zapamatované ceny (`prices_list`) a ocenit podle nich položky (`prices_apply`, který umí nejprve zobrazit náhled) a přečíst kontrolu skladu dodavatele (`supply_check`). Přidání souboru dodavatele zůstává na vás. Viz [Používání TakeoffCraft s AI asistenty](topic:use-with-ai-assistants).

**Ve všech aplikacích**

- **Jazyky.** Celkem padesát čtyři jazyky; deset je nových (litevština, lotyština, bosenština, maráthština, telugština, albánština, afrikánština, filipínština, svahilština a uzbečtina). Jiné jazyky než angličtina jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.
- **Vstupní zařízení.** {{ui:Nastavení}} › {{ui:Globální}} › {{ui:Vstupní zařízení}} nastaví, co dělá touchpad, boční tlačítka myši, pero, 3D myš, herní ovladač nebo MIDI ovladač, a to pro všechny aplikace nebo pro jednu. Viz [Použití touchpadu, 3D myši nebo ovladače](common:input-devices).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} nabízí {{ui:Zalomit}} (výchozí), {{ui:2 řádky}} a {{ui:1 řádek}}; skupiny, které se nevejdou, se posouvají do stran. Viz [Uspořádání panelů](common:arrange-panels).
- **Panel problémů.** Sdílený panel varování a poznámek nyní obsahuje výše uvedenou kontrolu skladu dodavatele vedle ostatních kontrol.
- **Doplňky.** Doplňky se řídí seznamem ve vašem účtu. Viz [Doplňky a seznam ve vašem účtu](common:addons-basics).
- **Připojte svou AI.** CadCraft Studio je centrum: připojte svého asistenta jednou pro všech osm aplikací. Studio nemá vlastní AI.

### Opraveno ve verzi 0.8.1

- **Sekce tříd v souboru DWG.** Sekce tříd souboru DWG se četla jako špatný typ. Je to opraveno v TakeoffCraft a v dalších čtyřech aplikacích.
- **Studio lze přepnout na jiný jazyk za běhu.** Dříve byla Studio i jeho zabalené verze jen v angličtině. Na každé platformě to nebylo testováno v desktopové verzi; dejte nám vědět, pokud se jazyk nezmění.

### Zatím není v této verzi

- **Není podepsáno kódem.** Windows může varovat a na Macu klikněte při prvním spuštění pravým tlačítkem a zvolte Otevřít. Obchodní verze (Microsoft Store, Google Play, App Store) jsou pozastaveny a verze pro iPad a iPhone nebyla pro 0.8.1 znovu sestavena.
- **Aktualizace Studia.** Instalátor pro Windows a balíčky pro Linux kontrolují jednou denně a nejprve se ptají. Přenosný zip jen oznámí novou verzi a macOS a APK se neaktualizují samy. Soubor .dmg pro macOS 0.8 vychází spolu s vydáním.
- **Připojení AI.** Připojení jedním kliknutím ve Studiu, hostovaný konektor pro AI v prohlížeči, váš vlastní klíč API ve Studiu a zveřejněný balíček MCP v této verzi nejsou slibovány.
- **Spočítat vše.** Vyžaduje symboly nakreslené stejně jako v legendě a symbol, přes který prochází zeď nebo dlouhá čára, se může minout. Zrcadlené symboly se nenajdou a list bez měřítka nakreslený v jiné velikosti se prohledá ve velikosti legendy. Před důvěrou ve zbytek zkontrolujte nálezy na prvním listu.
- **Sklad dodavatele.** Údaje o skladu jsou jen tak aktuální, jak aktuální je soubor, který přidáte. Kontrola se dodavatele nikdy neptá.
- **Jazyky.** Lišta aplikace v tamilštině přetéká.

Vše ostatní je v [Ještě není hotovo](topic:not-built-yet). Pro vydání před tímto viz [Novinky ve verzi 0.7](topic:whats-new-0-7).
