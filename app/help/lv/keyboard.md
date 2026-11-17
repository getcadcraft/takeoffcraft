---
title: Taustiņi un pele
summary: Katrs taustiņš, pele, skārienpaliktņa un skārienekrāna darbība TakeoffCraft, sagrupēta, ar platformu atšķirībām.
keywords: taustiņi, saīsnes, karstie taustiņi, tastatūra, pele, skārienpaliktnis, skāriens, panoramēt, tālummaiņa, ritenis, labā poga, dubultklikšķis, atstarpe, shift, kopēt, ielīmēt, izgriezt, dublēt, atlasīt visu
from: 6f2c441d
---

Burtu taustiņi darbojas, kad rādītājs atrodas jebkurā lapas vietā un jūs neraksta laukā. Kamēr ir atvērts dialogs, darbojas tā paša taustiņi. Burti darbojas gan ar {{key:Shift}}, gan bez tā.

## Rīki

| Taustiņš | Rīks |
|---|---|
| {{key:V}} | {{ui:Atlasīt}} |
| {{key:L}} | {{ui:Lineārs}} |
| {{key:A}} | {{ui:Laukums}} |
| {{key:O}} | {{ui:Riņķis}} |
| {{key:B}} | {{ui:Telpa}} (aizpildīt telpu ar vienu klikšķi) |
| {{key:R}} | {{ui:Loks}} ieslēgts vai izslēgts (lineārajā, laukuma un izgriezuma režīmā) |
| {{key:E}} | {{ui:Atskaitīt}} ieslēgts vai izslēgts: nākamie ķēdes posmi tiek zīmēti, bet netiek skaitīti |
| Cipars, `@` vai `#` zīmēšanas laikā | Atver lodziņu {{ui:Ievade}}: ierakstiet garumu vai koordinātas, {{key:Enter}} novieto punktu ([Mērīt lineārās ķēdes](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Izgriezums}} (vispirms atlasiet laukumu) |
| {{key:C}} | {{ui:Skaitīt}} |
| {{key:S}} | {{ui:Automātiski skaitīt}} |
| {{key:K}} | {{ui:Kalibrēt}} |
| {{key:D}} | {{ui:Pārbaudīt}} mērogu |

## Zīmējot

| Taustiņš vai darbība | Ko tas dara |
|---|---|
| Klikšķis | Novieto punktu (punktu, ar Skaitīt). |
| {{key:P}} | Ceļš: izvēlas PDF līnijas pilno savienoto ceļu vai kontūru ap klikšķi ([Izvēlēties PDF līnijas](topic:pick-the-lines)). |
| {{key:F3}} | Pieķeršanās rasējuma līnijām ieslēgta vai izslēgta ([Pieķerties rasējuma līnijām](topic:snap-to-the-drawing)). |
| {{key:Shift}} turēts, noklikšķinot | Pieķer posmu 0°, 45°, 90° vai 135° leņķī no pēdējā punkta. Nedarbojas loka punktiem vai riņķiem. |
| Dubultklikšķis | Pabeidz ķēdi vai aizver laukumu vai izgriezumu. |
| {{key:Enter}} | Pabeidz ķēdi vai aizver laukumu vai izgriezumu. |
| Labais klikšķis (bez kustības) | Pabeidz ķēdi vai aizver laukumu vai izgriezumu. |
| Klikšķis uz pirmā punkta | Aizver laukumu vai izgriezumu (sākot ar trešo punktu). |
| {{key:Backspace}} vai {{key:Delete}} | Noņem pēdējo punktu (vispirms gaidošo loka punktu). |
| {{key:Esc}} | Atmet gaidošo loka punktu; tad atceļ nepabeigto atzīmi; tad atgriežas pie {{ui:Atlasīt}}. |

## Atlasīšana un rediģēšana

| Taustiņš vai darbība | Ko tas dara |
|---|---|
| Klikšķis uz atzīmes (rīks {{ui:Atlasīt}}) | Atlasa to un padara tā vienumu pašreizējo. |
| {{key:Shift}} + klikšķis uz atzīmes | Pievieno atlasei vai izņem no tās. |
| {{key:Mod+A}} | Atlasa katru atzīmi atvērtajā lapā. |
| Vilkt stūra rokturi | Pārvieto šo punktu ({{key:Shift}} pieķer 45°). Darbojas, kad atlasīta viena atzīme. |
| {{key:Delete}} vai {{key:Backspace}} | Dzēš atlasītās atzīmes (kad nezīmējat). |
| {{key:Esc}} | Neatlasīt nevienu: notīra atlasi un pārbaudes līniju. |
| {{key:Mod+Z}} | {{ui:Atsaukt}}. |
| {{key:Mod+Y}} vai {{key:Mod+Shift+Z}} | {{ui:Atkārtot}}. |

## Kopēšana un ielīmēšana

| Taustiņš | Ko tas dara |
|---|---|
| {{key:Mod+C}} | Kopē atlasītās atzīmes kopā ar to vienumiem. |
| {{key:Mod+X}} | Izgriezt: kopē atlasītās atzīmes un tad tās dzēš. |
| {{key:Mod+V}} | {{ui:Ielīmēt}}: kopija seko rādītājam; noklikšķiniet, kur tai jāatrodas. |
| {{key:Mod+Shift+V}} | Ielīmēt vietā: tajā pašā vietā atvērtajā lapā. |
| {{key:Mod+D}} | Dublēt atlasītās atzīmes: kopija seko rādītājam; noklikšķiniet, kur tai jāatrodas. |
| {{key:Esc}} | Nenovietot neko: atcelt ielīmēšanu vai dublēšanu, kas ir pie rādītāja. |

Burti paši par sevi joprojām izvēlas rīkus ({{key:C}} ir {{ui:Skaitīt}}, {{key:D}} ir {{ui:Pārbaudīt}}, {{key:X}} ir {{ui:Izgriezums}}, {{key:V}} ir {{ui:Atlasīt}}, {{key:A}} ir {{ui:Laukums}}); tikai {{key:Mod}} kopā ar tiem kopē un ielīmē. Teksta laukos šie taustiņi kopē un ielīmē tekstu kā parasti. Skatiet [Kopēt, ielīmēt un dublēt atzīmes](topic:copy-paste).

:::warning
{{key:Backspace}} dzēš atlasīto atzīmi, kad nezīmējat. Ja tas notiek nejauši, {{key:Mod+Z}} to atjauno.
:::

## Faili

| Taustiņš | Ko tas dara |
|---|---|
| {{key:Mod+O}} | {{ui:Atvērt plānus}} |
| {{key:Mod+S}} | {{ui:Saglabāt apjomu aprēķinu}} |

Abi šie darbojas pat tad, kad rakstāt laukā.

## Skats un lapas

| Taustiņš vai darbība | Ko tas dara |
|---|---|
| Peles ritenis | Tālina un tuvina pie rādītāja. |
| Vilkt (kreiso, vidējo vai labo pogu) | Panorē. {{ui:Automātiski skaitīt}} laikā kreisās pogas vilkšana zīmē meklēšanas lodziņu. |
| {{key:Space}} turēts + vilkt | Panorē jebkurā rīkā. |
| {{key:F}} | {{ui:Pielāgot lapu}} |
| {{key:W}} | {{ui:Pielāgot platumu}} |
| {{key:Plus}} vai {{key:=}} | Tuvina skata vidū. |
| {{key:Minus}} | Tālina skata vidū. |
| {{key:PageDown}} / {{key:PageUp}} | Nākamā vai iepriekšējā lapa lapu sarakstā. |
| {{key:Ctrl+Shift+F}} | Pārslēdz pilnekrāna režīmus (Control visās platformās, arī Mac). |
| {{key:F1}} | Atver vai aizver šo palīdzību, paneli sānos. |
| {{key:3}} | Lapas 3D pārbaudes skats ieslēgts vai izslēgts. |

## 3D skats

| Taustiņš vai darbība | Ko tas dara |
|---|---|
| Vilkt vai vilkt ar vidējo pogu | Griež. |
| {{key:Shift}} + vilkt, vai vilkt ar labo pogu | Panorē. |
| Peles ritenis | Tālina pie rādītāja. Uz skārienpaliktņa divu pirkstu pārvilkšana griež, bet saspiešana tālina. |
| Klikšķis | Atlasa atzīmi zem rādītāja ({{key:Shift}} + klikšķis pievieno vai izņem). |
| {{key:F}} vai {{key:W}} | Tālina līdz visam. |
| {{key:3}} | Atgriežas pie plakanās lapas. |

Skatiet [Pārbaudīt apjomu aprēķinu 3D](topic:check-in-3d).

## Automātiska skaitīšana

| Taustiņš vai darbība | Ko tas dara |
|---|---|
| Vilkt lodziņu | Ietver simbolu meklēšanai (sāk meklēšanu). |
| Klikšķis uz atbilstības lodziņa | Noraida to vai atjauno. |
| {{key:Esc}} | Atceļ notiekošo meklēšanu vai atmet pārskatīšanu. |

## Palīdzība

| Taustiņš | Ko tas dara |
|---|---|
| {{key:F1}} | Atver vai aizver palīdzības paneli (arī {{ui:Palīdzība}} pogu lietotnes joslā). Darbojas katrā rīkā, pat rakstot laukā. |
| {{key:Esc}} | Aizver palīdzības paneli. Tās meklēšanas lodziņā pirmais Esc notīra meklēšanu. Kamēr panelis ir atvērts, Esc, kas nospiests pēc klikšķa uz lapas, vispirms aizver paneli; nospiediet vēlreiz, lai atceltu TakeoffCraft darbu. |

:::mac
Daudzām Mac tastatūrām augšējā rinda vada spilgtumu un skaņu. Nospiediet fn kopā ar F1 vai sistēmas iestatījumos sadaļā Tastatūra ieslēdziet "Izmantot F1, F2 u.c. taustiņus kā standarta funkciju taustiņus".
:::

## Dialogi un lauki

| Taustiņš | Ko tas dara |
|---|---|
| {{key:Enter}} | Laukā: lieto vērtību. Kalibrēšanas dialogā: {{ui:Iestatīt mērogu}}. |
| {{key:Esc}} | Aizver dialogu (kā {{ui:Atcelt}}); aizver veidlapu {{ui:Jauns vienums}}. |
| {{key:Tab}} | Pāriet uz nākamo lauku. |

## Platformu piezīmes

:::mac
- {{key:Mod}} ir Command taustiņš: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Pilnekrāna režīms ir izņēmums: Control+Shift+F.
- Labais klikšķis ir divu pirkstu klikšķis uz skārienpaliktņa, kad sekundārais klikšķis ir ieslēgts sistēmas iestatījumos sadaļā Trackpad. TakeoffCraft nolasa tikai sekundāro pogu; Control-klikšķis var tikt uzskatīts par parastu klikšķi un pievienot punktu.
- Divi pirksti, ritinot skārienpaliktnī, tālina lapu (tā neritina). Lai panorētu, nospiediet un velciet vai turiet Space un velciet.
- Page Up un Page Down ir fn kopā ar augšup un lejup bultiņām klaviatūrām, kurām tādu nav.
- Backspace ir taustiņš, kas apzīmēts ar delete.
:::

:::windows
- {{key:Mod}} ir Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Uz klēpjdatora skārienpaliktņa divu pirkstu ritināšana tālina lapu. Lai panorētu, nospiediet un velciet.
:::

:::linux
- {{key:Mod}} ir Ctrl. Dažas darbvirsmas izmanto savas Ctrl+Alt vai Super saīsnes; TakeoffCraft neizmanto nevienu no tām.
- Skārienpaliktnī divu pirkstu ritināšana tālina lapu. Lai panorētu, nospiediet un velciet.
:::

:::touch
TakeoffCraft nolasa skārienu kā vienu rādītāju:

- Pieskaršanās novieto punktu, atlasa atzīmi vai pievieno skaitīšanas punktu.
- Vilkšana ar vienu pirkstu panorē lapu ({{ui:Automātiski skaitīt}} laikā tā zīmē meklēšanas lodziņu).
- Saspiešana, lai tuvinātu, vēl netiek atbalstīta. Izmantojiet {{ui:Pielāgot lapu}} un {{ui:Pielāgot platumu}}, vai {{key:Plus}} un {{key:Minus}} uz tastatūras.
- Lai aizvērtu laukumu, pieskarieties tā pirmajam punktam. Lai pabeigtu ķēdi, divreiz pieskarieties vietā, kur pārlūkprogramma divkāršu pieskārienu pārvērš dubultklikšķī, vai nospiediet {{key:Enter}} uz tastatūras.
- Nav tūlītējas garuma rādīšanas, kamēr nepieskaraties, jo nav peldēšanas (hover).

Šobrīd apjomu aprēķinam labāk izmantot tastatūru un peli vai skārienpaliktni.
:::

## Taustiņi, ko pārlūkprogramma patur sev

Pārlūkprogrammas patur dažas saīsnes sev, un lapa tās nevar izmantot: cilnes aizvēršana ({{key:Mod+W}}), jauna cilne vai logs ({{key:Mod+T}}, {{key:Mod+N}}) un pārlūkprogrammas tālummaiņa ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Tāpēc TakeoffCraft tuvina lapu ar riteni un vienkāršiem taustiņiem {{key:Plus}} un {{key:Minus}}. Ja kļūdaini nospiežat {{key:Mod+Plus}}, aug visa lapa; {{key:Mod+0}} to atjauno. Skatiet [Taustiņi, peles un skārienpaliktņi](common:keys).

## Kur atrodas Pārvietot

Komandas Pārvietot nav: atlasiet skaitīšanas punktu un velciet to, vai atlasiet laukumu vai līniju un velciet tā stūru rokturus.
