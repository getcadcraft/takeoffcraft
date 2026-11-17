---
title: Izveidot apjomu vienumus
summary: Izveidojiet lineāros, laukuma un skaitīšanas vienumus un iestatiet to mērvienību, augstumu vai dziļumu, atkritumus, kā arī materiālu un darbaspēka likmes.
keywords: brigāde, ražīgums, brigādes sastāvs, alga, stundas, cilvēkstundas, darbinieku stundas, brigādes dienas, darbaspēka stundas, vienums, jauns vienums, nosacījums, vairāki nosacījumi, arī mērīt, vairāki veidi, telpa, lineārs, laukums, skaitīšana, mērvienība, augstums, dziļums, atkritumi, materiāls, darbaspēks, likme, krāsa, izmaksas
from: 7fa5effc
---

**Vienums** ir viena lieta, ko mērāt un cenojat: sienas veids, grīdas apdare, griesti, durvis, apgaismes ķermenis. Katra atzīme, ko zīmējat, pieder vienumam. Citās programmās šos sauc par nosacījumiem.

Katram vienumam ir veids (un tam var būt arī citi atzīmju veidi, skatiet [Viens vienums, vairāki atzīmju veidi](topic:create-items#one-item-several-kinds-of-marks)):

| Veids | Zīmējat | Atskaita | Mērvienības |
|---|---|---|---|
| Lineārs | Savienotu punktu virknes | Garumu, virkņu skaitu un sienas laukumu, ja tam ir augstums | LF vai m |
| Laukums | Slēgtus kontūrus ar izgriezumiem | Laukumu, perimetru, laukumu skaitu | SF, SY, SQ, ac, ha vai m² |
| Skaitīšana | Vienu klikšķi uz katru lietu | Cik | EA |
| Ievadīts daudzums | Neko: daudzumu ievadāt ar rokām | Jūsu ievadīto skaitli (vai no CivilCraft ievesto) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha vai m² |

## Ievadīti daudzumi (bez zīmējuma)

Dažas tāmes lietas nekad netiek zīmētas: mobilizācija, atļaujas, rezerve, vienotās summas apakšlīgums, izrakums un uzbērums, ko aprēķināja CivilCraft. Izveidojiet tās kā **ievadītu daudzumu**:

1. Izvēlieties {{ui:New item}}, ierakstiet nosaukumu, izvēlieties {{ui:Typed quantity (no drawing)}} un izvēlieties {{ui:Add}}.
2. Vienuma redaktorā izvēlieties {{ui:Unit}} (LS vienotai summai) un ierakstiet {{ui:Quantity}}: `1`, `2.5` vai `1,250`.
3. Iestatiet atkritumus un likmes kā jebkuram citam vienumam. Mezgla formulās `Q` ir daudzums, piemēram, `ceil(Q / 12)` kravas automašīnu reisi.

Ievadītam daudzumam nav nekādu atzīmju, un tas nekad nepadara tāmi nepabeigtu. Kad apjomam ir {{ui:Bid area}}, redaktorā ir arī tāmes zona: tad daudzums tiek skaitīts šajā zonā, tās alternatīvās un kopsummās, tieši tāpat kā tur skaitītu atzīme. Citas lietotnes ievestie daudzumi norāda savu izcelsmi; skatiet [Izrakums un augstuma atzīmes](topic:earthwork#cut-and-fill-from-civilcraft).

## Izveidot vienumu

1. Sadaļā {{ui:Items}} labajā panelī izvēlieties {{ui:New item}}.
2. Ierakstiet nosaukumu, piemēram, `Iekšējās sienas tips A` vai `Paklāja plāksne`.
3. Izvēlieties veidu: {{ui:Linear (length)}}, {{ui:Area}} vai {{ui:Count}}.
4. Izvēlieties {{ui:Add}} (vai nospiediet {{key:Enter}}).
   Vienums parādās sarakstā ar savu krāsu, kļūst par vienumu, ar ko zīmējat, un tā redaktors atveras zem saraksta. Statusa joslā ir norādīts, kuru rīku izvēlēties tālāk.

Veidlapā nospiediet {{key:Esc}}, lai to aizvērtu, nepievienojot vienumu.

:::tip
Ja vispirms izvēlaties mērīšanas rīku, TakeoffCraft izmanto pēdējo pareizā veida vienumu vai atver veidlapu {{ui:New item}} jau ar izvēlētu veidu.
:::

## Izvēlēties vienumu, ar kuru zīmējat

Noklikšķiniet uz vienuma sarakstā. Tas kļūst par vienumu, kuram tiek piešķirtas jaunās atzīmes, un tā atzīmes tiek izceltas visās lapās, kamēr pārējie izbāl. Ja atvērtajā lapā nav neviena tā atzīme, TakeoffCraft pāriet uz lapu, kurā tādas ir. Vēlreiz noklikšķiniet uz vienuma, lai pārtrauktu izcelšanu; tas paliek vienums, ar kuru zīmējat.

Noklikšķinot uz atzīmes ar rīku {{ui:Select}}, arī tās vienums kļūst par pašreizējo.

## Iestatīt vienumu

Vienuma redaktorā (**Vienums: (nosaukums)**) ir šādi lauki. Katrs tiek saglabāts, kad atstājat lauku vai nospiežat {{key:Enter}}, un katru izmaiņu var atsaukt.

| Lauks | Ko tas dara |
|---|---|
| {{ui:Name}} | Redzams sarakstā, tabulās un eksportos. |
| {{ui:Type}} | Lineārs, Laukums vai Skaitīšana. Kad vienumam ir atzīmes, veids ir bloķēts ("Vienumam ar atzīmēm paliek tā veids"). |
| {{ui:Color}} | Tā atzīmju krāsa ekrānā un atzīmētajā PDF. |
| {{ui:Unit}} | Mērvienība, kādā tiek atskaitīts daudzums: LF vai m lineāram; SF, SY, SQ, ac, ha vai m² laukumam; EA skaitīšanai. |
| {{ui:Also measure}} | Citi atzīmju veidi, ko vienums pieņem, katrs ar savu mērvienību. Skatiet tālāk. |
| {{ui:Height}} (linear) | Sienas augstums. Tad vienums atskaita arī sienas laukumu (garums × augstums). Posmi, kas nākuši no BimCraft modeļa, nes savas durvis un logus: tās tiek izņemtas vienu reizi, un vienums norāda bruto laukumu, atvērumus un neto. Apjomu aprēķins no BimCraft projekta, kurā izvēlēta mērīšanas metode, šeit tiek mērīts arī ar šo metodi (piezīmē tā nosaukta, ar avotu, un norādīts, ka to nav pārbaudījis kvantitāšu inženieris); metodi TakeoffCraft mainīt nevar. Ķieģeļi vai bloki un java, kas nākuši no sienas veida, ir divi komponenti: pasūtāmās vienības un javas tilpums. |
| {{ui:Depth}} (area) | Dziļums vai biezums, ko izmanto mezgla formulās (piemēram, betona tilpums). |
| {{ui:Waste %}} | Tiek pieskaitīts daudzumam pirms cenas aprēķina: 10 nozīmē daudzums × 1.10. |
| **Materiāls $/LF** | Materiāla izmaksas par vienību. Uzraksts seko mērvienībai: $/SF, $/EA un tā tālāk. |
| **Darbaspēks $/LF** | Darbaspēka izmaksas par vienību. |
| {{ui:CSI number}} | Tā CSI MasterFormat numurs, piemēram, `09 21 16` (vai tikai nodaļa, `09`). Darbgrāmatas lapa "By division" grupē izmaksas pēc tā. Vienumiem no [nozaru komplektiem](topic:trade-packs) tas jau ir. |

Augstumu un dziļumu imperiālajām mērvienībām ievada kā pēdas un collas (`9'-0"`, `8' 6"`) vai decimālās pēdas (`9`), bet metriskajām mērvienībām — metros (`2.7`, `2700 mm`). Likmes ievada kā summas, piemēram, `12.50` vai `$1,250`, līdz četriem decimāldaļām. Skatiet [Garuma, likmes un procentu ievade](topic:entry-formats).

Zem laukiem **Izmērīts** rāda kopsummas, ko var izmantot vienuma formulās, kopā ar to burtiem: lineāram — Garums (L), Posmi (N), Sienas laukums (A); laukumam — Laukums (A), Perimetrs (P), Laukumi (N); skaitīšanai — Skaits (N).

## Viens vienums, vairāki atzīmju veidi

Dažas lietas mēra vairākos veidos: istabai ir grīda (laukums), plinšu josla gar sienām (garums) un durvis (skaitīšana). Tā vietā, lai izveidotu trīs vienumus, izveidojiet vienu:

1. Izveidojiet vienumu ar tā galveno veidu, piemēram, laukuma vienumu `Telpa 101`.
2. Vienuma redaktorā zem {{ui:Also measure}} atzīmējiet {{ui:Linear}}, {{ui:Count}} vai abus. Katram ir mērvienība blakus.
3. Zīmējiet ar jebkuru rīku, kura veids vienumam ir pieņemams: ar pašreizējo `Telpa 101` {{ui:Area}} zīmē tās grīdu, {{ui:Linear}} — plinšu joslu, bet {{ui:Count}} — durvis. TakeoffCraft nejautā citu vienumu.

Vienumu sarakstā redzams katrs daudzums (`50.00 SF + 2 EA`). Daudzumu tabulā vienuma rindā ir galvenais daudzums, un katrs cits veids saņem savu rindu zem tā, piemēram, **Telpa 101 (skaitīšana)**, ar savām atkritumu, materiālu un darbaspēka likmēm. Eksporti, lapas tabula un atzīmētā PDF leģenda tos uzskaita tāpat.

Galvenā veida lauki paliek tikai tā veidam: augstums vai dziļums, slīpums, atskaitījumi un 3D forma attiecas tikai uz tā atzīmēm. Plinšu josla, kas zīmēta laukuma vienumam, tiek mērīta vienkārši pa plānu un 3D attēlā rādās plakana. Mezgla formulās izmanto galvenā veida kopsummas.

Veidu var atzīmēt tikai tad, kad vienumam nav tā atzīmju; vispirms tās dzēsiet vai pārvietojiet uz citu vienumu zem **Atlasītā atzīme**. Atzīmes var pārvietot uz jebkuru vienumu, kas pieņem to veidu.

Tālāk atrodas {{ui:Assembly}}: komponenti, piemēram, stieņi vai dēļi, katrs ar savu formulu un likmēm. Skatiet [Mezgli un formulas](topic:assemblies).

Apakšā {{ui:Move up}} un {{ui:Move down}} maina vienuma vietu sarakstā un eksportos, bet {{ui:Delete item}} to noņem kopā ar visām tā atzīmēm (pēc apstiprinājuma; to var atsaukt).

Laukuma vienumiem ir arī **Slīpums** (jumta plaknes, kas mērītas pēc nogāzes: [Jumti un nogāzes](topic:roofs-and-slopes)) un **Atskaitījums** (to atzīmes tiek atņemtas no citu vienumu laukumiem: [Mērīt laukumus](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Lineārajiem vienumiem ir **Nogāze** (Līmenis, Rake, Hip vai ieleja) un, sānu un stūra nogāzēm, **Slīpums**.

## Likmes tabulā

Atkritumu %, materiālu un darbaspēka likmes varat ierakstīt tieši tabulā {{ui:Quantities}} apakšā ({{ui:By item}}). Tā ir tā pati iestatījuma vērtība kā redaktorā.

## Cenu aprēķins

Katram vienumam un katram mezgla komponentam:

1. **Ar atkritumiem** = daudzums × (1 + atkritumi %).
2. **Materiāls** = ar atkritumiem × materiāls par vienību, noapaļots līdz centam.
3. **Darbaspēks** = ar atkritumiem × darbaspēks par vienību, noapaļots līdz centam.
4. **Kopā** = materiāls + darbaspēks.

{{ui:Job total}} saskaita katru vienumu un katru komponentu. Vienumam var būt savas likmes un mezgls vienlaikus; abas tiek skaitītas, tāpēc atstājiet vienuma likmes 0, kad izmaksas nes komponenti.

## Darbaspēks pēc brigādes

Darbaspēka likmes par vienību vietā vienuma darbaspēks var nākt no brigādes: cik tā paveic stundā, cik cilvēku un cik maksā katram. Vienuma redaktorā zem {{ui:Labor by crew}} atzīmējiet {{ui:Price labor from a crew}} un aizpildiet:

| Lauks | Piemērs |
|---|---|
| {{ui:Production}} | `20` LF stundā (vienuma mērvienībā) visai brigādei |
| {{ui:Crew size}} | `2` cilvēki |
| {{ui:Wage $/hour each}} | `45` |

TakeoffCraft aprēķina no daudzuma ar atkritumiem:

- **brigādes stundas** = daudzums ÷ ražīgums (110 LF ÷ 20 = 5.5),
- **darbinieku stundas** = brigādes stundas × brigādes sastāvs (11),
- **brigādes dienas** = brigādes stundas ÷ 8 (0.69),
- **darbaspēks** = darbinieku stundas × alga ($495.00).

Redaktorā parādās rezultāts un likme, uz ko tas nonāk ($4.50/LF). Vienuma pašu darbaspēka likme tad ir tikai lasāma, gan redaktorā, gan tabulā. Daudzumu tabulas galvene pievieno darba darbinieku stundas un brigādes dienas. Eksporti piezīmē katras brigādes stundas, un darbgrāmatā darbaspēka šūna ir formula pēc brigādes (`ROUND(F2/20*2*45,2)`). Lai atgrieztos pie likmes par vienību, noņemiet atzīmi.

## Metriskie vienumi

Kā mērvienību izvēlieties m (lineārs) vai m² (laukums). Tad daudzumi, augstumi un formulu vērtības ir metros. Lapas mērogs var būt jebkurš iepriekš iestatīts vai kalibrēts; mērvienības un mērogi ir neatkarīgi.

## Nākamais

- [Mērīt lineārus posmus](topic:measure-linear)
- [Mērīt laukumus ar izgriezumiem](topic:measure-areas)
- [Skaitīt ar roku](topic:count-by-hand)
