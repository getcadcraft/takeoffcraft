---
title: Výběr čar PDF
summary: Klikněte na čáru vektorového PDF a změřte celou spojenou dráhu, nebo klikněte dovnitř uzavřeného obrysu pro jeho plochu; tolerance mezery je zobrazena a jeden krok zpět je na každý segment.
keywords: dráha, výběr, čáry, linie, spojené, celý úsek, sledovat, obrys, obvod, mezera, tolerance, přemostění, segmenty, tab, vektor, plocha z čar, p
from: c22526ae
---

Na vektorovém PDF jsou stěny a hrany skutečné čáry. {{ui:Path}} ({{key:P}}) je bere tak, jak jsou nakresleny: jedno kliknutí na čáru změří vše, co na ni navazuje, od konce ke konci, takže stěnu neobkreslujete kliknutím na její rohy. List potřebuje měřítko. Naskenovaná stránka nemá čáry k výběru; tam použijte [Délka](topic:measure-linear) nebo [Plocha](topic:measure-areas).

## Výběr dráhy nebo obrysu

1. Zvolte {{ui:Path}}. Čára pod ukazatelem je zvýrazněna, ostatní dráhy, které by mohla být, jsou nakresleny slabě.
2. Klikněte na čáru: vybere se celá spojená dráha. Lišta pod panelem nástrojů udává její segmenty, délku, toleranci mezery a kolik mezer bylo přemostěno. Dráha, která se vrací do svého začátku, je uzavřená a také hlásí svůj obvod.
3. Nebo klikněte dovnitř uzavřeného obrysu, mimo jakoukoli čáru: obrys kolem tohoto bodu se vybere jako plocha. Nejmenší jde první; {{key:Tab}} zkusí další větší.
4. Stiskněte {{key:Enter}} (nebo klikněte pravým tlačítkem, nebo dvakrát klikněte) pro přidání značek. Vybraná dráha se stane značkou položky **Délka**, obrys značkou položky **Plocha**: aktivní položka, pokud má tento druh, jinak nejnovější položka tohoto druhu. Pokud žádná není, otevře se formulář nové položky a nic se nepřidá, dokud znovu nestisknete {{key:Enter}}. Vše vybrané se přidá v jednom kroku zpět.

## Tolerance mezery

Kreslíři nechávají malé díry tam, kde se čáry mají potkat. Dvě čáry se spojí, když jsou jejich konce blíž než **tolerance mezery**. Začíná na 1.5 bodu na listu (zobrazeno ve stopách a palcích v měřítku listu) a kroužek o této šířce, nakreslený přerušovaně, sleduje ukazatel a sedí na každém konci dráhy pod ním. Každá přemostěná díra je na vybrané dráze obkroužena oranžově a lišta je počítá.

{{key:]}} toleranci zvětší, {{key:[}} zmenší. Vybraná dráha se hned znovu spojí s novou tolerancí. Na křižovatce dráha pokračuje rovně, tedy tím směrem, který se nejméně ohýbá, a odbočku opouští.

## Klávesy

| Klávesa nebo akce | Co dělá |
|---|---|
| Klik | Vybere dráhu pod ukazatelem, nebo obrys kolem ní. |
| {{key:Shift}} + klik | Přidá další dráhu nebo obrys k výběru. |
| {{key:Tab}} | Zkusí další dráhu pod ukazatelem, nebo další větší obrys. |
| {{key:Backspace}} nebo {{key:Mod+Z}} | Odebere poslední segment z poslední vybrané dráhy, jeden segment po druhém. Dráha bez zbývajících segmentů zmizí. Když nic vybráno není, je {{key:Mod+Z}} obyčejný krok zpět. |
| {{key:[}} a {{key:]}} | Užší a širší tolerance mezery. |
| {{key:Enter}} | Přidá značky. |
| {{key:Esc}} | Zruší výběr. |

## Dobré vědět

- Křivka v kresbě je řetěz krátkých přímých úseček, takže její délka je o vlas kratší než skutečný oblouk. Pro přesný oblouk měřte přímo ze souboru výkresu ([Měření z výkresu](topic:measure-from-a-drawing)).
- Přemostěná mezera se počítá jako přímý přeskok přes ni, takže obvod uzavřeného obrysu ji zahrnuje.
- Čáry jsou jen tahy a výplně v cestách samotné stránky. Text psaný jako písmena a obrázky čárami nejsou.
