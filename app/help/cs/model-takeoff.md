---
title: Výkaz množství z modelu budovy
summary: Otevřete architektonický model IFC, zobrazte ho ve 3D, vyberte stěny, podlahy, dveře a ostatní podle typu, materiálu, vrstvy nebo velikosti a přeneste jejich počty, délky, plochy a objemy do výkazu výměr. Novější verze modelu aktualizuje stejná množství.
keywords: model, výkaz z modelu, pohled 3D, kliknutí na díl, najít řádek, materiál, vrstva, vrstvy stěn, sádrokarton, izolace, velikosti dveří, velikosti oken, přehled otvorů, csv, 3D, bim, ifc, rvt, model budovy, množství, stěny, podlahy, dveře, okna, sloupy, místnosti, podle typu, podle podlaží, aktualizace, novější model, projektová dokumentace
from: 8c4c12c9
---

Nemusíte čekat na další sadu výkresů. Když architekt pošle model budovy, otevřete ho zde a množství převezměte přímo z něj. Model se čte na vašem počítači; nic se nikam neodesílá.

## Postup

1. Na panelu nástrojů zvolte {{ui:Model}} a vyberte soubor modelu `.ifc`, nebo jej otevřete pomocí {{ui:Otevřít plány}} stejně jako jakýkoli jiný soubor.
2. Otevře se {{ui:Výkaz z modelu}} s jedním řádkem pro každou kategorii a typ: stěny podle typu stěny, podlahy podle typu podlahy, dveře podle typu dveří a tak dále. Každý řádek ukazuje počet a to, v čem se daná kategorie měří.
3. Nastavte {{ui:Seskupit podle}} na {{ui:Kategorie}} pro rychlý součet, nebo na {{ui:Kategorie, typ a podlaží}}, pokud chcete každý typ rozdělit podle podlaží.
4. Odškrtněte řádky, které nechcete. {{ui:Najít}} zúží seznam. Odškrtnutí řádku zároveň skryje jeho díly na obrázku 3D.
5. Dejte modelu {{ui:Název modelu}}, který si ponecháte pro celou zakázku, například název projektu.
6. Zvolte {{ui:Přidat do výkazu}}. Každé množství se stane typizovaným množstvím v seznamu položek. Pojmenujte ho, oceňte a připojte sestavy stejně jako každou jinou položku.

## Zobrazení modelu ve 3D

{{ui:Zobrazit model ve 3D}} nakreslí model nad tabulku, jednu barvu pro každý řádek (barevný čtvereček vedle názvu řádku). Tažením model otočíte, podržením {{key:Shift}} a tažením jej posunete, kolečkem myši přiblížíte a výběrem {{ui:Přizpůsobit}} nebo {{ui:Obnovit}} se vrátíte.

- **Klikněte na díl** na obrázku a jeho řádek se vybere v tabulce, všechny díly tohoto řádku se rozsvítí a ostatní zblednou. Klikněte na stejný díl znovu a pokud je zařazen do více řádků (stěna ve svých vrstvách), vybere se další řádek.
- **Klikněte na řádek** v tabulce a rozsvítí se jeho díly. Klikněte na něj znovu, nebo na prázdné místo na obrázku, a výběr zrušíte.
- Místnosti se nekreslí, protože objem místnosti by zakryl budovu.
- Velmi velký model si u některých dílů ponechá jen rámeček, aby se vešel do paměti; panel uvede, kolik jich je. Čísla se tím nemění.

Pokud tento počítač 3D nezobrazí, tabulka funguje jako dříve.

## Seskupení podle materiálu, vrstvy nebo velikosti

{{ui:Seskupit podle}} nabízí ještě tři možnosti:

- {{ui:Kategorie a materiál}}: stěna, podlaha nebo střecha tvořená vrstvami dostane pro materiál každé vrstvy vlastní řádek, takže sádrokarton, nosníky a izolaci lze ocenit zvlášť. Část budovy s jedním materiálem dostane řádek tohoto materiálu a část bez materiálu se zařadí do řádku nazvaného "Bez pojmenovaného materiálu".
- {{ui:Kategorie a vrstva}}: totéž, ale v řádku je tloušťka vrstvy ("Izolace, 100 mm").
- {{ui:Kategorie, typ a velikost dveří nebo oken}}: dveře a okna se dělí podle šířky a výšky (například 3'-0" × 6'-8" nebo 914 × 2,032 mm).

U vrstvy je plocha plochou stěny samotné (nebo plochou půdorysu či povrchu podlahy nebo střechy) a objem je tato plocha krát tloušťka vrstvy. Poznámka u řádku říká, kolik čísel pochází z vrstvy. Vrstvy jedné stěny se sečtou na objem, který model pro ni uvádí.

## Uložení řádků nebo otvorů jako CSV

{{ui:Uložit řádky jako CSV}} uloží zaškrtnuté řádky s jednotkami v každém záhlaví pro tabulkový procesor. {{ui:Uložit přehled otvorů jako CSV}} (jen když model obsahuje dveře nebo okna) uloží každé dveře a okno podle typu, podlaží a velikosti s jejich počtem.

## Co se měří

| Kategorie | Množství |
|---|---|
| Stěny | počet, délka, plocha stěny (jedna strana, otvory odečteny), objem |
| Podlahy, desky, stropy a další krytiny | počet, plocha půdorysu, objem |
| Střechy | počet, plocha půdorysu, plocha povrchu střechy, objem |
| Základy | počet, plocha půdorysu, objem |
| Sloupy, trámy a ostatní prvky | počet, délka podél prvku, objem |
| Zábradlí, potrubí, vzduchotechnika a kabelové trasy | počet, délka |
| Schodiště | počet, objem |
| Místnosti | počet, plocha podlahy, objem |
| Dveře, okna a vše ostatní | počet |

Kde autor modelu uvedl množství přímo v souboru, použije se toto číslo. Jinak se číslo změří z tvaru prvku. Každé množství má poznámku, která říká, které z toho platí a kolik prvků dalo číslo.

:::note
Délka stěny změřená z jejího tvaru jde od konce ke konci, takže dvě stěny, které se v rohu překrývají, obě zahrnují roh. Objem vyžaduje uzavřený tvar: prvek, jehož tvar není uzavřený, se započítá, ale objem nedá. Zakřivená nebo rohová stěna se měří jako polovina všech svislých ploch a její poznámka to uvádí.
:::

## Když přijde novější model

Otevřete novější soubor a zadejte stejný {{ui:Název modelu}}. Před přidáním čehokoli panel uvede, kolik množství je nových, kolik se změnilo a z jaké hodnoty na jakou, a která množství z dřívější verze už v modelu nejsou. Zvolte {{ui:Přidat do výkazu}}: změněná množství převezmou nová čísla a vaše názvy, ceny, odpad a sestavy zůstanou. Množství, která z modelu zmizela, si ponechají svá stará čísla; odstraňte je sami, pokud je návrh vypustil.

Názvy typů a podlaží slouží k rozpoznání množství. Pokud architekt přejmenuje typ stěny, přijde jako nové množství a ten starý se uvede jako zaniklý.

## Čtené soubory

Soubory IFC (IFC2x3, IFC4 a IFC4.3). Soubor IFC se silnicemi, kolejemi nebo mosty přináší své množství infrastruktury přímo, jako dříve.

TakeoffCraft v tomto vydání nečte soubory `.rvt`. Pokud architekt pracuje v Revitu, požádejte o export modelu do formátu IFC (File, Export, IFC) a otevřete ten.

Jeden model může přinést najednou až 500 množství. Pokud jich je více, odškrtněte řádky nebo seskupte podle kategorie.
