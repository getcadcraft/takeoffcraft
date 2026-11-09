---
title: Co je nového ve verzi 0.8 a 0.8.1
summary: Spočítejte celou legendu symbolů napříč všemi otevřenými listy jedním během, oceňte položky podle sazeb vašich minulých zakázek, ověřte výkaz výměr podle skladu a dodacích lhůt dodavatele a nové nástroje asistenta pro všechny tři, plus společné změny verze 0.8 a opravu 0.8.1 pro soubory DWG.
keywords: co je nového, novinky, poznámky k vydání, changelog, změny, 0.8, 0.8.1, verze, nové funkce, spočítat vše, legenda, legenda symbolů, celá sada, paměť cen, minulé zakázky, poslední zakázka, typická cena, dodavatel, sklad, dodací lhůta, čekající objednávka, seznam objednávky, nedostatek, panel problémů, asistent, jazyky, vstupní zařízení, řádky panelu nástrojů, dwg
from: a04adef6
---

Toto se změnilo v TakeoffCraftu 0.8 (vydáno 2026-11-01) a 0.8.1 (2026-11-02) oproti verzi 0.7. Legendu symbolů lze nyní spočítat najednou v celé sadě, nový výkaz výměr může začít z cen vašich minulých zakázek a výkaz výměr lze porovnat se skladem dodavatele. Verze 0.8.1 je opravná.

## Novinky

### Spočítat vše v sadě listů

- **Legendu označte jedním rámečkem.** {{ui:Spočítat vše}} na panelu nástrojů načte legendu symbolů: tažením obdélníku obtáhněte symboly a názvy vytištěné vedle nich. Každý symbol se vypíše s obrázkem a názvem a název se stane názvem položky. Odškrtněte, co nechcete, a pak zvolte {{ui:Spočítat na N listech}}. Lišta ukazuje list, který se právě prohledává, {{ui:Zrušit}} běh zastaví a stránka zůstane použitelná.
- **Všechny listy v jednom běhu.** Každý symbol se počítá na každém otevřeném listu. List nakreslený v jiném měřítku se prohledá v tomto měřítku a symboly se najdou otočené o libovolný pravý úhel. Symboly samotné legendy se na jejím listu nepočítají.
- **Kontrola před přidáním čehokoli.** Každý součet má pro každý list odkaz ("E-103: 4"), který vede na daný list. Kliknutím na rámeček nálezu jej vynecháte a dalším kliknutím jej vrátíte. Úroveň shody (50 % až 100 %) pouze filtruje nalezené; nic se znovu nehledá.
- **Jeden krok zpět.** {{ui:Přidat N značek}} vytvoří pro každý symbol položku počtu se značkou u každého nálezu. Název, který už je vaší položkou počtu, se znovu použije. {{key:Ctrl+Z}} vrátí všechny položky a značky zpět. Přijaté výsledky se také zapisují do {{ui:Naučené}}.
- **Symboly v libovolném úhlu.** Před počítáním zaškrtněte {{ui:Symboly v libovolném úhlu}}, aby se našly i symboly otočené o úhel, který není pravý. Hledání pak otáčí každý symbol po 15 stupních a symbol, který není kulatý, může trvat až šestkrát déle.
- **Co to je.** Prosté porovnávání symbolů na vašich vlastních listech bez natrénovaného modelu; nic neopustí váš počítač. Na smyšlené sadě 200 listů to v prohlížeči Chrome na rychlém počítači trvalo od začátku do konce 9.4 sekundy; skutečné sady výkresů budou pomalejší. Viz [Spočítat vše v sadě listů](topic:count-everything).

### Paměť cen z vašich vlastních zakázek

- **TakeoffCraft si pamatuje vaše sazby.** Při uložení výkazu výměr se u každé použité ocenené položky pamatuje název a typ: sazba materiálu, sazba práce, odpad a jednotka. U každého názvu se uchovává posledních 12 zakázek. Uchovává se v tomto počítači vedle knihovny cen, nikdy uvnitř souboru výkazu výměr, a nic se nikam neodesílá.
- **Nový výkaz výměr začněte z paměti.** {{ui:Ceny}} na panelu nástrojů zobrazí u každé položky sazby poslední zakázky, typické sazby a rozpětí. {{ui:Použít minulou}} nebo {{ui:Použít typickou}} ocení jednu položku a {{ui:Ocenit N položek bez ceny z paměti}} doplní každou položku, která zatím nemá cenu. Každé použití je jeden krok zpět.
- **Starší výkazy.** {{ui:Naučit se z minulého výkazu výměr…}} si zapamatuje ocenené položky uloženého výkazu výměr (.json).
- **Zobrazit, změnit, zapomenout.** {{ui:Vše zapamatované}} vypíše všechny názvy; tlačítko koše zapomene jeden název a {{ui:Vymazat všechny ceny}} zapomene všechny. Chcete-li to zastavit, vypněte {{ui:Pamatovat si moje ceny při uložení výkazu výměr}}. Cena za EA se nikdy nepřenese na položku za ft. Viz [Paměť cen z vašich minulých zakázek](topic:price-memory).

### Sklad dodavatele a dodací lhůty

- **Kontrola podle seznamu dodavatele.** {{ui:Zásobování}} na panelu nástrojů přijme seznam skladu dodavatele ({{ui:Přidat soubor dodavatele…}}), CSV nebo tabulku, a porovná s ním, co výkaz výměr potřebuje včetně odpadu. Uchovává se až pět souborů. Nic se neodesílá a nic se dodavatele neptá: soubor přinášíte vy.
- **Co hlásí.** Nejdříve jsou nedostatkové položky: "Chybí 120 EA", "Dodací lhůta 21 dní", "Na objednávku", "Jednotka se liší", "Chybí údaj o skladu" nebo "Skladem". {{ui:Nejdelší chtěná lhůta (dny)}} začíná na 14.
- **Seznam objednávky.** {{ui:Seznam objednávky (CSV)}} stáhne nedostatkové položky s chybějícím množstvím, dodavatelem a dodací lhůtou.
- **Ceny do knihovny.** Pokud soubor obsahuje ceny, {{ui:Ceny do knihovny}} nastaví cenu materiálu každé položky knihovny se stejným názvem a jednotkou. Přecenění z knihovny je přenese do výkazu výměr.
- **V panelu problémů.** Nedostatek je varování a dlouhá čekací lhůta je poznámka, obojí pod "Sklad dodavatele". Můžete jej přijmout s důvodem a důvod se uloží do výkazu výměr. Viz [Kontrola skladu dodavatele a dodacích lhůt](topic:supplier-stock).

### Asistenti AI

- **Nástroje pro všechny tři.** Když jsou v {{ui:Nastavení}} povoleni asistenti, asistent umí načíst legendu (`legend_open`), spustit počítání (`legend_count_start`, pak `legend_count_status` a `legend_count_result`) a přidat ji (`legend_count_add`, který může nejdřív zobrazit náhled). Umí číst zapamatované ceny (`prices_list`), oceňovat z nich položky (`prices_apply`, který může nejdřív zobrazit náhled) a číst kontrolu dodavatele (`supply_check`). Přidání souboru dodavatele zůstává na vás. Viz [Použití TakeoffCraftu s asistenty AI](topic:use-with-ai-assistants).

### Ve všech aplikacích

- **Jazyky.** Celkem padesát čtyři jazyky; deset je nových (litevština, lotyština, bosenština, maráthí, telugština, albánština, afrikánština, filipínština, svahilština a uzbečtina). Jazyky jiné než angličtina jsou strojové koncepty, dokud je neprošel rodilý mluvčí.
- **Vstupní zařízení.** {{ui:Nastavení}} › {{ui:Globální}} › {{ui:Vstupní zařízení}} nastavuje, jakou funkci mají touchpad, boční tlačítka myši, pero, 3D myš, herní ovladač nebo ovladač MIDI, a to pro všechny aplikace nebo jen pro jednu. Viz [Použití touchpadu, 3D myši nebo ovladače](common:input-devices).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} nabízí {{ui:Zalomit}} (výchozí), {{ui:2 řádky}} a {{ui:1 řádek}}; skupiny, které se nevejdou, se posouvají do strany. Viz [Uspořádání panelů](common:arrange-panels).
- **Panel problémů.** Sdílený panel varování a poznámek nyní nese i výše uvedenou kontrolu skladu dodavatele vedle ostatních kontrol.
- **Doplňky.** Doplňky se řídí seznamem vašeho účtu. Viz [Doplňky a seznam vašeho účtu](common:addons-basics).
- **Připojení vaší AI.** CadCraft Studio je centrum: připojte svého asistenta jednou pro všech osm aplikací. Studio nemá vlastní AI.

## Opraveno ve verzi 0.8.1

- **Oddíl tříd DWG.** Oddíl tříd souboru DWG se četl jako špatný typ. Opraveno v TakeoffCraftu a ve čtyřech dalších aplikacích.
- **Studio může změnit jazyk za běhu.** Studio a jeho balené edice byly dříve pouze v angličtině. Na všech platformách nebylo desktopové sestavení otestováno; dejte nám vědět, pokud se jazyk nemění.

## Zatím není v této verzi

- **Bez podpisu kódu.** Windows může zobrazit varování a na Macu při prvním spuštění klikněte pravým tlačítkem a zvolte {{ui:Otevřeno}}. Obchodní sestavení (Microsoft Store, Google Play, App Store) jsou pozastavena a sestavení pro iPad a iPhone nebylo pro 0.8.1 znovu sestaveno.
- **Aktualizace Studia.** Instalátor pro Windows a balíčky pro Linux kontrolují jednou denně a nejdřív se ptají. Přenosný zip vás pouze informuje a macOS a APK se neaktualizují samy. Soubor .dmg pro macOS ve verzi 0.8 vyjde až po vydání.
- **Připojení vaší AI.** Připojení jedním kliknutím ve Studiu, hostovaný konektor pro AI v prohlížeči, váš vlastní klíč API ve Studiu a zveřejněný balíček MCP nejsou v této verzi slíbeny.
- **Spočítat vše.** Vyžaduje symboly nakreslené stejným způsobem jako v legendě a symbol, kterým prochází zeď nebo dlouhá čára, se může minout. Zrcadlové symboly se nenajdou a list bez měřítka, nakreslený v jiné velikosti, se prohledá ve velikosti legendy. Před důvěrou ve zbytek zkontrolujte nálezy na prvním listě.
- **Sklad dodavatele.** Údaje o skladu jsou jen tak aktuální, jak aktuální je soubor, který přidáte. Kontrola se dodavatele nikdy neptá.
- **Jazyky.** Lišta aplikace v tamilštině přetéká.

Vše ostatní je v [Ještě není hotovo](topic:not-built-yet). Pro předchozí vydání viz [Co je nového ve verzi 0.7](topic:whats-new-0-7).
