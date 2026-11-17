---
title: Vytvorenie položiek výkazu výmer
summary: Vytvorte lineárne, plošné a počtové položky a nastavte ich jednotku, výšku alebo hĺbku, odpad a sadzby materiálu a práce.
keywords: čata, produkčná norma, veľkosť čaty, mzda, hodiny, človekohodiny, hodiny práce, dni čaty, položka, nová položka, podmienka, viac podmienok, aj merať, viac typov, miestnosť, lineárna, plocha, počet, jednotka, výška, hĺbka, odpad, materiál, práca, sadzba, farba, náklady
from: 7fa5effc
---

**Položka** je jedna vec, ktorú merate a oceňujete: typ steny, podlahová krytina, strop, dvere, svietidlo. Každá značka, ktorú nakreslíte, patrí k nejakej položke. Iné programy tomu hovoria podmienky.

Každá položka má typ (a môže niesť aj iné druhy značiek, pozrite [Jedna položka, viac druhov značiek](topic:create-items#one-item-several-kinds-of-marks)):

| Typ | Nakreslíte | Hlási | Jednotky |
|---|---|---|---|
| Lineárna | Úseky spojených bodov | Dĺžku, počet úsekov a plochu stien, ak má výšku | LF alebo m |
| Plocha | Uzavreté obrysy s výrezmi | Plochu, obvod, počet plôch | SF, SY, SQ, ac, ha alebo m² |
| Počet | Jedno kliknutie na každú vec | Koľko kusov | EA |
| Zadané množstvo | Nič: množstvo zadáte | Číslo, ktoré ste zadali (alebo prevzaté z CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha alebo m² |

## Zadané množstvá (bez výkresu)

Niektoré veci v rozpočte sa nikdy nekreslia: mobilizácia, povolenia, rezerva, paušálna subdodávka alebo výkop a násyp, ktorý vypočítal CivilCraft. Vytvorte z nich **Zadané množstvo**:

1. Vyberte {{ui:Nová položka}}, zadajte názov, zvoľte {{ui:Zadané množstvo (bez výkresu)}} a kliknite na {{ui:Pridať}}.
2. V editore položky zvoľte {{ui:Jednotka}} (LS pre paušálnu sumu) a zadajte {{ui:Množstvo}}: `1`, `2.5` alebo `1,250`.
3. Odpad a sadzby nastavte rovnako ako pri každej inej položke. Vzorce zostavy používajú `Q`, množstvo, napríklad `ceil(Q / 12)` pre počet dodávok nákladnými autami.

Zadané množstvo nemá značky a rozpočet nikdy neurobí neúplným. Ak má výkaz výmer oblasti ponuky, editor má aj {{ui:Oblasť ponuky}}: množstvo sa potom počíta v tejto oblasti, v jej alternatívach a v jej súčtoch, presne ako by ich tam počítala značka. Množstvá prevzaté z inej aplikácie uvádzajú, odkiaľ pochádzajú; pozrite [Zemné práce a kóty výšky](topic:earthwork#cut-and-fill-from-civilcraft).

## Vytvorenie položky

1. V paneli {{ui:Položky}} vpravo vyberte {{ui:Nová položka}}.
2. Zadajte názov, napríklad `Interior wall type A` alebo `Carpet tile`.
3. Vyberte typ: {{ui:Lineárna (dĺžka)}}, {{ui:Plocha}} alebo {{ui:Počet}}.
4. Kliknite na {{ui:Pridať}} (alebo stlačte {{key:Enter}}).
   Položka sa zobrazí v zozname s vlastnou farbou, stane sa položkou, ktorou kreslíte, a pod zoznamom sa otvorí jej editor. Stavový riadok vám povie, ktorý nástroj vybrať ďalej.

Stlačením {{key:Esc}} vo formulári ho zatvoríte bez pridania položky.

:::tip
Ak najskôr vyberiete merací nástroj, TakeoffCraft použije poslednú položku správneho typu, alebo otvorí formulár {{ui:Nová položka}} s už zvoleným typom.
:::

## Výber položky, ktorou kreslíte

Kliknite na položku v zozname. Stane sa položkou, do ktorej smerujú nové značky, a jej značky sa zvýraznia na každom liste, zatiaľ čo ostatné zablednú. Ak otvorený list nemá jej značky, TakeoffCraft prejde na list, ktorý ich má. Kliknutím na položku znova zvýrazňovanie vypnete; zostane položkou, ktorou kreslíte.

Kliknutím na značku nástrojom {{ui:Vybrať}} sa jej položka tiež stane aktuálnou.

## Nastavenie položky

Editor položky (**Položka: (názov)**) má tieto polia. Každé pole sa uloží, keď z neho odídete alebo stlačíte {{key:Enter}}, a každú zmenu možno vrátiť späť.

| Pole | Čo robí |
|---|---|
| {{ui:Názov}} | Zobrazuje sa v zozname, tabuľkách a exportoch. |
| {{ui:Zadať}} | Lineárna, Plocha alebo Počet. Po pridaní značiek sa uzamkne ("Položka so značkami si zachová svoj typ"). |
| {{ui:Farba}} | Farba jej značiek na obrazovke a v označenom súbore PDF. |
| {{ui:Jednotka}} | V akej jednotke sa množstvo zobrazuje: LF alebo m pre lineárne; SF, SY, SQ, ac, ha alebo m² pre plošné; EA pre počtové. |
| {{ui:Merať aj}} | Ďalšie druhy značiek, ktoré položka prijíma, každý s vlastnou jednotkou. Pozri nižšie. |
| {{ui:Výška}} (lineárna) | Výška steny. Položka potom zobrazuje aj plochu steny (dĺžka × výška). Úseky pochádzajúce z modelu BimCraft obsahujú svoje dvere a okná: tie sa odpočítajú raz a položka uvádza hrubú plochu, otvory a čistú plochu. Výkaz výmer z projektu BimCraft, ktorý zvolil spôsob merania, sa tu meria tiež týmto spôsobom (poznámka ho pomenúva, uvádza jeho zdroj a hovorí, že ho rozpočtár neoveril); spôsob sa v TakeoffCraft nedá zmeniť. Tehly alebo bloky a malta z typu steny prichádzajú ako dve zložky: jednotky na objednanie a objem malty. |
| {{ui:Hĺbka}} (plošná) | Hĺbka alebo hrúbka, používaná vo vzorcoch zostavy (napríklad objem betónu). |
| {{ui:Odpad %}} | Pripočíta sa k množstvu pred ocenením: 10 znamená množstvo × 1.10. |
| {{ui:Materiál $/LF}} | Náklad na materiál na jednotku. Popis sa riadi jednotkou: $/SF, $/EA a podobne. |
| {{ui:Práca $/LF}} | Náklad na prácu na jednotku. |
| {{ui:Číslo CSI}} | Jej číslo CSI MasterFormat, napríklad `09 21 16` (alebo len divízia, `09`). Hárok By division v zošite zoskupuje náklady podľa neho. Položky z [balíkov pre profesie](topic:trade-packs) ho už majú. |

Výška a hĺbka sa zadávajú v stopách a palcoch (`9'-0"`, `8' 6"`) alebo v desatinných stopách (`9`) pre palcové jednotky a v metroch (`2.7`, `2700 mm`) pre metrické jednotky. Sadzby sa zadávajú sumami ako `12.50` alebo `$1,250`, s najviac štyrmi desatinnými miestami. Pozrite [Zadávanie dĺžky, sadzby a percent](topic:entry-formats).

Pod poľami zobrazuje **Zmerané** súčty, ktoré môžu vzorce položky použiť, s ich písmenami: Dĺžka (L), Úseky (N), Plocha stien (A) pre lineárne; Plocha (A), Obvod (P), Plochy (N) pre plošné; Počet (N) pre počtové.

## Jedna položka, viac druhov značiek

Niektoré veci sa merajú viacerými spôsobmi: miestnosť má podlahu (plochu), sokel pozdĺž stien (dĺžku) a dvere (počet). Namiesto troch položiek vytvorte jednu:

1. Vytvorte položku s jej hlavným typom, napríklad plošnú položku `Room 101`.
2. V jej editore pod {{ui:Merať aj}} zaškrtnite {{ui:Lineárne}}, {{ui:Počet}} alebo obe. Každá dostane vedľa seba jednotku.
3. Kreslite ľubovoľným nástrojom, ktorého druh položka prijíma: pri aktuálnej položke `Room 101` kreslí {{ui:Plocha}} jej podlahu, {{ui:Lineárne}} jej sokel a {{ui:Počet}} jej dvere. TakeoffCraft nežiada inú položku.

Zoznam položiek zobrazuje každé množstvo (`50.00 SF + 2 EA`). V tabuľke množstiev má riadok položky jej hlavné množstvo a každý ďalší druh dostane vlastný riadok pod ním, napríklad **Room 101 (count)**, s vlastným odpadom a sadzbami materiálu a práce. Exporty, tabuľka po listoch a legenda označeného súboru PDF ich uvádzajú rovnako.

Polia hlavného typu zostávajú len jeho: výška alebo hĺbka, sklon, odpočty a tvar v 3D sa vzťahujú len na jeho značky. Úsek sokla nakreslený pre plošnú položku sa meria jednoducho pozdĺž pôdorysu a v 3D sa zobrazí ako plochý. Vzorce zostavy používajú súčty hlavného typu.

Druh možno odznačiť, len keď položka nemá jeho značky; najskôr ich zmažte alebo presuňte na inú položku v časti **Vybraná značka**. Značky možno presunúť na ľubovoľnú položku, ktorá ich druh prijíma.

Ďalej nižšie je {{ui:Zostava}}: zložky, napríklad stojky alebo dosky, každá s vlastným vzorcom a sadzbami. Pozrite [Zostavy a vzorce](topic:assemblies).

Dole: {{ui:Posunúť hore}} a {{ui:Posunúť dole}} menia miesto položky v zozname a v exportoch a {{ui:Zmazať položku}} ju odstráni aj so všetkými jej značkami (po opýtaní; možno ju vrátiť späť).

Plošné položky majú aj **Sklon** (roviny strechy merané na šikmici: [Strechy a sklony](topic:roofs-and-slopes)) a **Odpočet** (ich značky sa odpočítavajú od plôch iných položiek: [Meranie plôch](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Lineárne položky majú **Sklon** (Vodorovný, Štít, Nárožie alebo Údolie) a pri štítoch a nárožiach aj **Sklon**.

## Sadzby v tabuľke

Odpad % a sadzby materiálu a práce môžete zadať aj priamo do tabuľky {{ui:Množstvá}} dole ({{ui:Podľa položky}}). Je to to isté nastavenie ako v editore.

## Ako funguje ocenenie

Pre každú položku a každú zložku zostavy:

1. **S odpadom** = množstvo × (1 + odpad %).
2. **Materiál** = s odpadom × materiál na jednotku, zaokrúhlené na cent.
3. **Práca** = s odpadom × práca na jednotku, zaokrúhlené na cent.
4. **Spolu** = materiál + práca.

{{ui:Spolu za zákazku}} sčíta každú položku a každú zložku. Položka môže mať svoje sadzby a zostavu súčasne; počítajú sa obe, preto nechajte sadzby položky na 0, keď náklady nesú jej zložky.

## Práca podľa čaty

Namiesto sadzby práce na jednotku môže práca položky vychádzať z čaty: koľko sa vykoná za hodinu, koľko ľudí a koľko zarába každý. Pod {{ui:Práca podľa čaty}} v editore položky zaškrtnite {{ui:Ocenenie práce podľa čaty}} a vyplňte:

| Pole | Príklad |
|---|---|
| {{ui:Produkcia}} | `20` LF za hodinu (v jednotke položky) pre celú čatu |
| {{ui:Veľkosť čaty}} | `2` osoby |
| {{ui:Mzda $/hodina na osobu}} | `45` |

TakeoffCraft vypočíta z množstva s odpadom:

- **hodiny čaty** = množstvo ÷ produkcia (110 LF ÷ 20 = 5.5),
- **človekohodiny** = hodiny čaty × veľkosť čaty (11),
- **dni čaty** = hodiny čaty ÷ 8 (0.69),
- **práca** = človekohodiny × mzda ($495.00).

Editor zobrazí výsledok a sadzbu, na ktorú to vychádza ($4.50/LF). Vlastná sadzba práce položky je potom len na čítanie, v editore aj v tabuľke. Hlavička tabuľky {{ui:Množstvá}} pridá človekohodiny a dni čaty zákazky. Exporty uvádzajú hodiny každej čaty a v zošite je bunka práce vzorcom na čatu (`ROUND(F2/20*2*45,2)`). Zrušením zaškrtnutia sa vráťte k sadzbe na jednotku.

## Metrické položky

Ako jednotku zvoľte m (lineárne) alebo m² (plošné). Množstvá, výšky a hodnoty vzorcov sú potom v metroch. Mierka listu môže byť ľubovoľná predvoľba alebo kalibrácia; jednotky a mierky sú nezávislé.

## Ďalej

- [Meranie lineárnych úsekov](topic:measure-linear)
- [Meranie plôch s výrezmi](topic:measure-areas)
- [Počítanie ručne](topic:count-by-hand)
