---
title: Kontrola zásob a dodacích lhůt dodavatele
summary: Přidejte seznam zásob dodavatele (CSV nebo tabulku) a TakeoffCraft podle něj zkontroluje, co výkaz výměr potřebuje včetně odpadu: zda je toho dost skladem a jak dlouho se čeká. Nedostatky a dlouhá čekání se zobrazí v panelu Problémy.
keywords: dodavatel, zásoby, skladem, dodací lhůta, dostupnost, nedostatek, zpětná objednávka, seznam objednávky, csv, sku, prodejce, materiály, zásobování, problémy
from: f11160fb
---

{{ui:Zásobování}} na panelu nástrojů (náklaďák) kontroluje, co váš výkaz výměr potřebuje, proti seznamu zásob dodavatele. Řádky dodavatele, které jsou důležité, se uchovají v souboru samotného výkazu. Nic se nikam neodesílá a nic se neptá dodavatele: soubor přinesete vy.

## Soubor

Soubor CSV s řádkem záhlaví. Potřebuje sloupec názvu nebo SKU a sloupec zásob nebo dodací lhůty. Tato záhlaví se rozpoznávají (v libovolném pořadí a bez ohledu na velikost písmen): Item, Name, Description nebo Product; SKU, Part nebo Item #; In stock, On hand, Available nebo Quantity; Lead time nebo Delivery days; Unit nebo UOM; Price nebo Cost; Supplier nebo Vendor.

- Zásoby mohou být číslo (1,200), "In stock" nebo "Out of stock".
- Dodací lhůta může být "5 days", "2 weeks", "2-3 weeks" (použije se delší), "3 months", "same day" nebo "backorder". Holé číslo je v jednotce záhlaví (dny, pokud záhlaví neříká weeks nebo months).
- Soubory Excel se nečtou: nejprve list uložte jako CSV.

## Kontrola výkazu výměr

1. Zvolte {{ui:Zásobování}}, pak {{ui:Přidat soubor dodavatele…}} a vyberte CSV. Můžete přidat více souborů: až pět souborů, celkem se zachová 2 000 řádků, nejprve ty, které odpovídají vašim položkám.
2. Každá položka, druhá podmínka a část sestavy s množstvím se páruje s řádkem podle názvu nebo podle SKU v názvu. Podobný název (jeden obsahuje druhý) se použije, když přesný neexistuje, a to se uvede.
3. Pod {{ui:Co výkaz výměr potřebuje}} jsou nejprve nejkratší: "Chybí 120 EA", "Dodací lhůta 21 dní", "Na zpětnou objednávku", "Jednotka se liší", "Chybí údaj o skladu" nebo "Skladem". Potřeba zahrnuje odpad. Jednotka dodavatele, která se neshoduje s jednotkou rozpočtu (tuna oproti stopě), se nahlásí a nikdy se neporovnává. U každého řádku je {{ui:Vybrat položku}}, která přeskočí na položku.
4. Nastavte {{ui:Nejdelší chtěná lhůta (dny)}} (výchozí 14). Položka, která není skladem a čeká déle, se označí a souhrn uvede nejdelší čekání, na kterém záleží.
5. {{ui:Seznam objednávky (CSV)}} stáhne chybějící položky s chybějícím množstvím, dodavatelem a dodací lhůtou. {{ui:Vynechat}} vyřadí potřebu z kontroly (je to krok pro zpět).

## Tabulkové soubory a cenová knihovna

Seznam dodavatele může být také sešit Excel (.xlsx), stejně jako CSV: čte se první list se stejnými názvy sloupců. Vzorce se nikdy nepočítají; čte se hodnota, kterou soubor obsahuje.

Jakmile je přidán soubor s cenami, nastaví {{ui:Ceny do knihovny}} v dialogu materiálovou cenu každé položky [Knihovny](topic:price-library), kterou soubor oceňuje: stejný název a jednotka, která je stejná (nebo není uvedena). Práce, odpad, výška a sestavy zůstanou beze změny a poznámka položky říká, z kterého souboru cena pochází. Položka v metrech se neoceňuje ze seznamu ve stopách a položka bez odpovídajícího názvu zůstane nedotčena; stavový řádek uvede, kolik položek bylo kvůli jednotce přeskočeno. Přecenění z Knihovny přenese nové ceny do tohoto výkazu výměr.

## V panelu Problémy

Nedostatek je varování a dlouhé čekání je poznámka ve sdíleném panelu Problémy ("Zásoby dodavatele"), takže jsou spolu s každou jinou kontrolou. Můžete jej přijmout s uvedeným důvodem a přijetí se uloží do výkazu výměr.

## S vaším asistentem

Pokud v {{ui:Nastavení}} povolíte asistenty, mohou číst kontrolu (supply_check). Přidání souboru dodavatele je váš úkol.

## Dobré vědět

Údaje o zásobách jsou aktuální jen do té míry, jak aktuální je soubor, který přidáte. Pro obnovení soubor přidejte znovu: soubor se stejným názvem nahradí starší.
