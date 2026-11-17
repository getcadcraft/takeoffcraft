---
title: Vytvoření položek výkazu výměr
summary: Vytvořte délkové, plošné a počtové položky a nastavte jejich jednotku, výšku nebo hloubku, odpad a sazby materiálu a práce.
keywords: parta, výkon party, velikost party, mzda, hodiny, člověkohodiny, pracovní hodiny, dny party, položka, nová položka, podmínka, více podmínek, také měřit, více typů, místnost, délková, plocha, počet, jednotka, výška, hloubka, odpad, materiál, práce, sazba, barva, náklady
from: 7fa5effc
---

**Položka** je věc, kterou měříte a oceňujete: typ stěny, podlahová krytina, strop, dveře, svítidlo. Každá značka, kterou nakreslíte, patří k nějaké položce. Jiné programy tomu říkají podmínky.

Každá položka má typ (a může přijmout i jiné druhy značek, viz [Jedna položka, více druhů značek](topic:create-items#one-item-several-kinds-of-marks)):

| Typ | Kreslíte | Zobrazuje | Jednotky |
|---|---|---|---|
| Délková | Úseky spojených bodů | Délka, počet úseků a plocha stěn, má-li výšku | LF nebo m |
| Plocha | Uzavřené obrysy s výřezy | Plocha, obvod, počet ploch | SF, SY, SQ, ac, ha nebo m² |
| Počet | Jedno kliknutí na každou věc | Kolik jich je | EA |
| Zadané množství | Nic: množství zadáte ručně | Číslo, které jste zadali (nebo převzaté z CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha nebo m² |

## Zadané množství (bez výkresu)

Některé věci v rozpočtu se nikdy nekreslí: mobilizace, povolení, rezerva, paušální subdodávka nebo výkop a násyp, které spočítal CivilCraft. Nastavte je jako **Zadané množství**:

1. Zvolte {{ui:Nová položka}}, zadejte název, vyberte {{ui:Zadané množství (bez výkresu)}} a zvolte {{ui:Přidat}}.
2. V editoru položky vyberte {{ui:Jednotka}} (LS pro paušální částku) a zadejte {{ui:Množství}}: `1`, `2.5` nebo `1,250`.
3. Odpad a sazby nastavte stejně jako u jiné položky. Vzorce sestavy používají `Q`, množství, například `ceil(Q / 12)` nákladních jízd.

Zadané množství nemá žádné značky a nikdy nezpůsobí, že rozpočet bude neúplný. Když má výkaz rozpočtové oblasti, editor má také {{ui:Rozpočtová oblast}}: množství pak počítá v té oblasti, jejích variantách a součtech, stejně jako by tam počítala značka. Množství převzatá z jiné aplikace uvádějí, odkud pochází, viz [Zemní práce a výškové kóty](topic:earthwork#cut-and-fill-from-civilcraft).

## Vytvoření položky

1. V panelu {{ui:Položky}} vpravo zvolte {{ui:Nová položka}}.
2. Zadejte název, například `Vnitřní stěna typ A` nebo `Kobercová dlaždice`.
3. Vyberte typ: {{ui:Délková (délka)}}, {{ui:Plocha}} nebo {{ui:Počet}}.
4. Zvolte {{ui:Přidat}} (nebo stiskněte {{key:Enter}}). Položka se objeví v seznamu se svou barvou, stane se položkou, kterou kreslíte, a její editor se otevře pod seznamem. Stavový řádek vám řekne, který nástroj zvolit dál.

Stiskněte {{key:Esc}} ve formuláři, chcete-li jej zavřít bez přidání položky.

:::tip
Pokud nejdřív vyberete měřicí nástroj, TakeoffCraft použije poslední položku správného typu, nebo otevře formulář {{ui:Nová položka}} s již zvoleným typem.
:::

## Vyberte položku, kterou kreslíte

Klikněte na položku v seznamu. Stane se položkou, do které se budou přidávat nové značky, a její značky se zvýrazní na každém listu, zatímco ostatní zeslábnou. Pokud otevřený list nemá žádnou její značku, TakeoffCraft přeskočí na list, který ji má. Dalším kliknutím na položku zvýraznění vypnete; zůstane položkou, kterou kreslíte.

Kliknutí na značku nástrojem {{ui:Vybrat}} také nastaví její položku jako aktuální.

## Nastavení položky

Editor položky (**Položka: (název)**) má tato pole. Každé se uloží, když pole opustíte nebo stisknete {{key:Enter}}, a každou změnu lze vrátit zpět.

| Pole | Co dělá |
|---|---|
| {{ui:Název}} | Zobrazuje se v seznamu, tabulkách a exportech. |
| {{ui:Zadání}} | Délková, Plocha nebo Počet. Po přidání značek se uzamkne („Položka se značkami si zachová svůj typ“). |
| {{ui:Barva}} | Barva jejích značek na obrazovce a v označeném PDF. |
| {{ui:Jednotka}} | V jaké jednotce se množství uvádí: LF nebo m u délkové; SF, SY, SQ, ac, ha nebo m² u plochy; EA u počtu. |
| {{ui:Měřit také}} | Další druhy značek, které položka přijímá, každý s vlastní jednotkou. Viz níže. |
| {{ui:Výška}} (délková) | Výška stěny. Položka pak zobrazuje také plochu stěn (délka × výška). Úseky pocházející z modelu BimCraft nesou své dveře a okna: ty se odečtou jednou a položka uvádí hrubou plochu, otvory a čistou plochu. Výkaz z projektu BimCraft, který zvolil metodu měření, se měří touto metodou i zde (poznámka ji uvádí i s jejím zdrojem a říká, že ji rozpočtář neověřil); metodu v TakeoffCraft nelze změnit. Cihly nebo tvárnice a malta z typu stěny přicházejí jako dvě složky: jednotky k objednání a objem malty. |
| {{ui:Hloubka}} (plocha) | Hloubka nebo tloušťka použitá ve vzorcích sestavy (například objem betonu). |
| {{ui:Odpad %}} | Přičte se k množství před oceněním: 10 znamená množství × 1.10. |
| {{ui:Materiál $/LF}} | Cena materiálu za jednotku. Popisek se řídí jednotkou: $/SF, $/EA a podobně. |
| {{ui:Práce $/LF}} | Cena práce za jednotku. |
| {{ui:Číslo CSI}} | Jeho číslo CSI MasterFormat, například `09 21 16` (nebo jen divize, `09`). List By division sešitu seskupuje náklady podle něj. Položky z [balíčků profesí](topic:trade-packs) ho už mají. |

Výška a hloubka přijímají stopy a palce (`9'-0"`, `8' 6"`) nebo desetinné stopy (`9`) pro imperiální jednotky a metry (`2.7`, `2700 mm`) pro metrické. Sazby přijímají částky jako `12.50` nebo `$1,250`, až se čtyřmi desetinnými místy. Viz [Zadávání délek, sazeb a procent](topic:entry-formats).

Pod polem **Změřeno** jsou součty, které mohou vzorce položky použít, s jejich písmeny: Délka (L), Úseky (N), Plocha stěn (A) u délkové; Plocha (A), Obvod (P), Plochy (N) u plošné; Počet (N) u počtové.

## Jedna položka, více druhů značek

Některé věci se měří více způsoby: místnost má podlahu (plochu), lištu podél stěn (délku) a dveře (počet). Místo tří položek vytvořte jednu:

1. Vytvořte položku s jejím hlavním typem, například plošnou položku `Místnost 101`.
2. V jejím editoru pod {{ui:Měřit také}} zaškrtněte {{ui:Délková}}, {{ui:Počet}} nebo obojí. U každé se vedle ní objeví jednotka.
3. Kreslete libovolným nástrojem, jehož druh položka přijímá: když je aktuální `Místnost 101`, {{ui:Plocha}} nakreslí její podlahu, {{ui:Délková}} její lištu a {{ui:Počet}} její dveře. TakeoffCraft se na jinou položku neptá.

Seznam položek zobrazuje každé množství (`50.00 SF + 2 EA`). V tabulce množství má řádek položky hlavní množství a každý další druh má vlastní řádek pod ní, například **Místnost 101 (počet)**, se svým odpadem a sazbami materiálu a práce. Exporty, tabulka po listech a legenda označeného PDF je uvádějí stejně.

Pole hlavního typu zůstávají vlastní pro hlavní typ: výška nebo hloubka, sklon, odpočty a tvar 3D se týkají jen jeho značek. Základní úsek nakreslený pro plošnou položku se měří prostě po půdorysu a v 3D se zobrazí plochý. Vzorce sestavy používají součty hlavního typu.

Druh lze odškrtnout, jen když položka nemá jeho značky; smažte je, nebo je nejdřív přesuňte na jinou položku pod **Vybraná značka**. Značky lze přesunout na libovolnou položku, která jejich druh přijímá.

Níže je {{ui:Sestava}}: komponenty, jako jsou stojky nebo desky, každá se svým vzorcem a sazbami. Viz [Sestavy a vzorce](topic:assemblies).

Dole: {{ui:Posunout nahoru}} a {{ui:Posunout dolů}} změní místo položky v seznamu a v exportech a {{ui:Smazat položku}} ji odebere i se všemi značkami (po potvrzení; lze ji vrátit zpět).

Plošné položky mají také **Spád střechy** (roviny střechy měřené po spádu: [Střechy a sklony](topic:roofs-and-slopes)) a **Odpočet** (jejich značky se odečtou od ploch jiných položek: [Měření ploch](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Délkové položky mají **Sklon** (Vodorovný, Štít, Nárožní hřbet nebo Úžlabí) a u štítů a nárožních hřbetů také **Spád střechy**.

## Sazby v tabulce

Odpad %, sazby materiálu a práce můžete zadat také přímo do tabulky {{ui:Množství}} dole ({{ui:Podle položky}}). Je to stejné nastavení jako v editoru.

## Jak funguje oceňování

U každé položky a každé komponenty sestavy:

1. **S odpadem** = množství × (1 + odpad %).
2. **Materiál** = s odpadem × materiál za jednotku, zaokrouhleno na haléř.
3. **Práce** = s odpadem × práce za jednotku, zaokrouhleno na haléř.
4. **Celkem** = materiál + práce.

{{ui:Celkem za zakázku}} sečte každou položku a každou komponentu. Položka může mít své vlastní sazby a zároveň sestavu; počítají se obě, takže nechte sazby položky na 0, když náklady nesou její komponenty.

## Práce podle party

Místo sazby práce za jednotku může práce položky vycházet z party: kolik vykoná za hodinu, kolik je lidí a kolik si každý vydělá. Pod {{ui:Práce podle party}} v editoru položky zaškrtněte {{ui:Oceňovat práci podle party}} a vyplňte:

| Pole | Příklad |
|---|---|
| {{ui:Výkon}} | `20` LF za hodinu (v jednotce položky) za celou partu |
| {{ui:Velikost party}} | `2` lidé |
| {{ui:Mzda $/hodinu na osobu}} | `45` |

TakeoffCraft z množství s odpadem spočítá:

- **hodiny party** = množství ÷ výkon (110 LF ÷ 20 = 5.5),
- **člověkohodiny** = hodiny party × velikost party (11),
- **dny party** = hodiny party ÷ 8 (0.69),
- **práce** = člověkohodiny × mzda ($495.00).

Editor ukáže výsledek a sazbu, na kterou vychází ($4.50/LF). Vlastní sazba práce položky je pak jen pro čtení, v editoru i v tabulce. Záhlaví tabulky {{ui:Množství}} přidá člověkohodiny a dny party celé zakázky. Exporty uvádějí hodiny každé party a v sešitu je buňka práce vzorcem na partu (`ROUND(F2/20*2*45,2)`). Odškrtnutím políčka se vrátíte k sazbě za jednotku.

## Metrické položky

Jako jednotku zvolte m (délková) nebo m² (plošná). Množství, výšky a hodnoty vzorců jsou pak v metrech. Měřítko listu může být libovolná předvolba nebo kalibrace; jednotky a měřítka jsou nezávislé.

## Dále

- [Měření délkových úseků](topic:measure-linear)
- [Měření ploch s výřezy](topic:measure-areas)
- [Počítání ručně](topic:count-by-hand)
