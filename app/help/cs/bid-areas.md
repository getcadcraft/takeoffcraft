---
title: Rozpočtové oblasti
summary: Označte značky podle budovy, patra nebo etapy, výkaz zpracovávejte vždy do jedné oblasti a čtěte množství a náklady pro každou oblast.
keywords: přídavná varianta, odpočtová varianta, základní nabídka, varianty, rozpočtová oblast, oblast, budova, patro, úroveň, etapa, zóna, varianta, rozdělení, typické patro, mezisoučet, podle oblasti
from: 64f3d41c
---

Rozpočtová oblast je část zakázky, kterou oceňujete samostatně: budova, patro, etapa, křídlo. Každá značka může být v jedné rozpočtové oblasti. Množství a odhad lze pak číst pro každou oblast, s mezisoučtem u každé, zatímco celkem zakázky zůstává součtem všeho.

## Vytvoření rozpočtové oblasti

1. Nahoře v panelu {{ui:Položky}} otevřete seznam {{ui:Rozpočtová oblast}}.
2. Vyberte **Nová rozpočtová oblast…**, napište název, například "Budova A" nebo "Patro 2", a vyberte **Vytvořit**.
   Nová oblast se stane aktuální. Stavový řádek říká: "Nové značky půjdou do (název). Značky v jiných rozpočtových oblastech jsou ztlumeny."

## Zpracování výkazu do oblasti

Dokud je v seznamu vybrána rozpočtová oblast, každá nová značka do ní patří: úseky, plochy, kružnice, počty, značky, které přidá {{ui:Automatické počítání}}, i to, co vložíte. Značky v jiných rozpočtových oblastech a značky bez oblasti jsou na listu ztlumeny, abyste viděli, co kam patří.

Chcete-li výkaz zpracovávat bez oblasti, vyberte v seznamu **Bez rozpočtové oblasti**; pak nic není ztlumeno.

:::tip
Typická patra: zpracujte Patro 2, označte jeho značky ({{key:Mod+A}} na listu), zkopírujte je, v seznamu vyberte Patro 3 a vložte. Kopie půjdou do Patra 3. Pokud jsou patra stejná a nepotřebujete je rozlišovat, [typická skupina](topic:typical-groups) počítá jedno patro vícekrát.
:::

## Přesun značek do jiné oblasti

Vyberte jednu značku nebo více ({{key:Shift}} + klik, nebo {{key:Mod+A}}). Pod **Vybraná značka** (nebo **Vybrané značky**) vyberte oblast v poli {{ui:Rozpočtová oblast}}. Stavový řádek říká: "3 značky přesunuty do Patra 2." Je to jeden krok zpět.

## Přejmenování, řazení nebo smazání

V seznamu vyberte **Spravovat rozpočtové oblasti…**. Přepsáním názvu jej přejmenujete, šipkami změníte pořadí (tabulky i sešit ho budou následovat), nebo jednu smažete přes koš. Smazání rozpočtové oblasti zachová její značky: pak nejsou v žádné rozpočtové oblasti. {{key:Mod+Z}} vrátí každou změnu.

## Čtení množství podle oblasti

V tabulce {{ui:Množství}} vyberte {{ui:Podle oblasti}} (zobrazí se, jakmile má výkaz rozpočtovou oblast). Každá oblast vypíše své položky s množstvím, jednotkou a celkem, pak řádek mezisoučtu. Značky bez rozpočtové oblasti jsou na konci jako **Bez rozpočtové oblasti**. Kliknutím na řádek položky ji zvýrazníte a oblast nastavíte jako aktuální.

Sestavy se počítají pro každou oblast z jejích vlastních součtů. Vzorec zaokrouhlující nahoru, například `ceil(L / 4)`, pak může v oblastech dohromady dát o něco více než pro celou zakázku, stejně jako by to dal u nabídky oceňované po oblastech.

## Varianty: základní nabídka plus přídavky a odpočty

Rozpočtová oblast může být **variantou**: prací, kterou může investor do nabídky přidat, nebo z ní vyjmout. V **Spravovat rozpočtové oblasti…** má každá oblast vedle názvu seznam:

| Volba | Co dělá |
|---|---|
| {{ui:Základní nabídka}} | V nabídce jako obvykle. |
| {{ui:Přídavná varianta}} | Oceněno samostatně a **vynecháno ze základní nabídky**: lepší koberec, přídavná markýza. |
| {{ui:Odpočtová varianta}} | V základní nabídce a nabízeno jako odpočet: "odstraňte markýzu". |

Práci varianty zpracujte do její rozpočtové oblasti jako kteroukoli jinou oblast. Jakmile má výkaz variantu:

- Záhlaví tabulky {{ui:Množství}} říká **Základní nabídka** místo {{ui:Celkem za zakázku}}: celý výkaz bez přídavných variant.
- {{ui:Podle oblasti}} končí základní nabídkou a jedním řádkem pro každou variantu: **+$300.00** u přídavku, **−$1,050.00** u odpočtu.
- Varianta oceňuje jen položky, které mají v ní značky, se svými sestavami, takže se do ní nedostane část sestavy jiné položky.

V exportech CSV výkaz končí základní nabídkou a variantami. Sešit dostane list **Varianty**: základní nabídku, položky každé varianty a její změnu, a základní nabídku se zahrnutím všech přídavných variant.

## Ve exportu

{{ui:XLSX}} přidá list **Podle rozpočtové oblasti**: položky a komponenty každé oblasti s množstvím, množstvím s odpadem, materiálem, prací a celkem, mezisoučet za každou oblast (vzorec `SUM`) a na konci **Všechny rozpočtové oblasti**. List **Značky** dostane sloupec **Rozpočtová oblast**. Výkaz bez rozpočtových oblastí se exportuje jako dříve. Viz [Sloupce exportu](topic:export-columns).

Rozpočtové oblasti se ukládají do souboru projektu spolu se značkami.
