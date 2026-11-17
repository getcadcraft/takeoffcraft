---
title: Pāreja no citas apjomu aprēķina programmatūras
summary: Kā dedicētu apjomu aprēķina programmu un PDF atzīmju rīku paradumi atbilst TakeoffCraft un kur rodas atšķirības, kas mulsina.
keywords: pāreja, migrācija, nosacījumi, detaļas, mērīšanas rīki, atzīmju saraksts, daudzuma saite, apjomu aprēķina paradumi, atšķirības, salīdzināt
from: 12004ce5
---

Ja esat veicis apjomu aprēķinu programmā PlanSwift vai ar mērīšanas rīkiem programmā Bluebeam Revu, lielākā daļa TakeoffCraft būs pazīstama: plānu komplekts, mērogs katrai lapai, mērāmi objekti un izcena kopsumma. Veids, kā daļas savienojas, vietām atšķiras, un šīs vietas ir norādītas tālāk.

Ja pazīstat PlanSwift vai On-Screen Takeoff, izvēlieties izvēlnes stilu {{ui:Apjomu aprēķina galds}} sadaļā {{ui:Iestatījumi}} › {{ui:TakeoffCraft}} › {{ui:Izvēlnes, taustiņi un pele}}: izvēlņu josla ar Fails, Rediģēt, Skats, Mērogs, Apjomu aprēķins, Vienumi, Atzīmes un Eksportēt virs rindas ar apjomu rīkiem, un mēroga iepriekš iestatījumi lapas joslā. Skatiet [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse).

## Paradumi un to atbilstība

| Ar ko esat pieradis | TakeoffCraft |
|---|---|
| Darba vai projekta atvēršana, kurā glabājas plāni (PlanSwift) | Atveriet PDF failus un `.takeoff.json` projektu blakus. Projektā glabājas tikai apjomu aprēķins; PDF faili paliek jūsu paši faili. |
| Atzīmju saraksts ar piezīmēm, mākoņiem un izcēlumiem (Bluebeam) | {{ui:Atzīmes}} lapas joslā: piezīmes, mākoņi un izcēlumi ar statusu (Atvērts, Atbildēts, Slēgts), uzskaitīti sadaļā **Atzīmes** un attēloti atzīmētajā PDF. Skatiet [Piezīmes, mākoņi un izcēlumi](topic:markups). |
| Mērījumi, saglabāti kā atzīmes PDF iekšpusē (Bluebeam) | Apjomu aprēķins atrodas `.takeoff.json` failā. {{ui:Atzīmēts PDF}} raksta kopiju ar uzzīmētu apjomu, lai to kopīgotu; {{ui:PDF ar iekļautu apjomu aprēķinu}} raksta kopiju, kas satur apjomu aprēķinu, lai to atkārtoti atvērtu programmā TakeoffCraft. |
| Apjomu vienumi (PlanSwift), pielāgoti mērīšanas rīki, kas saglabāti rīku kastē (Bluebeam) | **Vienumi** zem {{ui:Vienumi}}: nosaukums, tips, krāsa, mērvienība, augstums vai dziļums, atkritumi, likmes. |
| Detaļas un mezgli ar formulām (PlanSwift) | Vienuma {{ui:Mezgls}}: komponentes ar formulu, kurā izmanto `L H A N P`. |
| Lapas mēroga iestatīšana vai kalibrēšana (abi) | {{ui:Iepriekš iestatīts}} saraksts vai {{ui:Kalibrēt}} grupā {{ui:Mērogs}}, katrai lapai atsevišķi. {{ui:Pārbaudīt}} izmēra zināmu izmēru. |
| Viena mēroga piemērošana lapu diapazonam | Vēl nav: iestatiet katru lapu. |
| Skatlodziņi ar dažādiem mērogiem vienā lapā (Bluebeam) | Vēl nav: viens mērogs katrai lapai. |
| Garuma un laukuma rīki (Bluebeam), lineārs un laukuma apjomu aprēķins (PlanSwift) | {{ui:Lineārs}} ({{key:L}}) un {{ui:Laukums}} ({{key:A}}). |
| Turot Shift, zīmēt taisnas līnijas | {{key:Shift}} piesaista 45° soļiem, tā pati ideja. |
| Piesaiste rasējuma līnijām | Pēc noklusējuma ieslēgta: galapunkti, vidus punkti, krustpunkti un tuvākais punkts uz līnijas; {{key:F3}} to izslēdz, kā CAD programmās. |
| Skaitīšanas rīks (abi) | {{ui:Skaitīt}} ({{key:C}}). |
| Vizuāla simbolu meklēšana (Bluebeam) | {{ui:Automātiski skaitīt}} ({{key:S}}): iezīmējiet vienu simbolu, pārskatiet un pievienojiet. |
| Izgriezumi vai atskaitījumi laukumos | {{ui:Izgriezums}} ({{key:X}}) atlasītam laukumam un apaļi izgriezumi. |
| Atskaitījumi lineārās līnijās | Novelciet līniju taisni cauri un nospiediet {{key:E}} ({{ui:Atskaitīt}}) atverei. Skatiet [Lineāro posmu mērīšana](topic:measure-linear). |
| Loka segmenti polilīnijā | {{ui:Loks}} ({{key:R}}): noklikšķiniet punktu uz līknes un pēc tam tās galapunktu. |
| Atzīmju saraksts ar daudzumu kolonnām (Bluebeam) | Tabula {{ui:Daudzumi}}, {{ui:Pēc vienuma}} vai {{ui:Pēc lapas}}. |
| Tāmes režģis ar cenām (PlanSwift) | Tā pati tabula: atkritumi, materiāls un darbaspēks par vienību, pilnas summas un {{ui:Darba kopsumma}}. |
| Eksports uz Excel | {{ui:XLSX}} ar dzīvām formulām vai {{ui:CSV}}. |
| Escape, lai apturētu rīku | {{key:Esc}} atceļ un atgriežas pie {{ui:Atlasīt}}. |
| Labā poga, lai pabeigtu | Labā poga arī šeit pabeidz posmu vai aizver laukumu. Labās pogas izvēlnes nav. |

## Atšķirības, kas mulsina

**Apjomu aprēķins nav jūsu PDF iekšpusē.** Neviena darbība nemaina jūsu PDF failus. Saglabājiet `.takeoff.json` failu un glabājiet to kopā ar rasējumiem. Atzīmēta PDF nosūtīšana nenosūta rediģējamu apjomu aprēķinu: nosūtiet projekta failu un sākotnējos PDF failus vai [PDF ar iekļautu apjomu aprēķinu](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF faili tiek sakārtoti pēc satura, nevis pēc nosaukuma.** Lapa, kas pārskatīta un saglabāta virs vecā faila nosaukuma, TakeoffCraft ir jauns fails bez mēroga un bez atzīmēm. Vecās atzīmes paliek vecajā versijā un turpina skaitīties. Skatiet [Apjomu aprēķina saglabāšana un atvēršana](topic:save-and-reopen#when-a-pdf-has-changed).

**Atzīmes bez mēroga tiek izlaistas, nevis skaitītas kā nulle.** Ja lapai nav mēroga, tās posmi un laukumi neskaitās, un tabulā tiek rādīts „Nepilnīgs”. Daudzās programmās jūs redzētu 0. Skatiet [Mēroga iestatīšana](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Lapas izmēra nav jāmin.** Iepriekš iestatījumi pieņem, ka PDF ir drukāts pilnā izmērā. PDF pusē izmērā vai „pielāgots lapai” nepieciešams {{ui:Kalibrēt}}. Vienmēr izmantojiet {{ui:Pārbaudīt}}.

**Viens vienums, viens galvenais tips, vairāk pēc vēlēšanās.** Vienums ir lineārs, laukuma vai skaitīšanas, un tā tips tiek fiksēts, kad tam ir atzīmes. Nosacījums, kas dod gan laukumu, gan tā perimetru, ir laukuma vienums: tā perimetrs ir mainīgais `P`. Siena ar garumu un laukumu ir lineārs vienums ar augstumu. Vairāku nosacījumu vienumam, piemēram, telpai ar grīdu, pamatni un durvīm, atzīmējiet citus veidus zem **Arī mērīt**: katrs tiek cenots atsevišķā rindā. Skatiet [Viens vienums, vairāki atzīmju veidi](topic:create-items#one-item-several-kinds-of-marks).

**Formulas darbojas ar kopsummām.** Mezgla formulas izmanto vienuma kopsummas visās lapās, nevis katru posmu atsevišķi. `N` (posmu vai laukumu skaits) ir paredzēts papildu vērtībām par posmu, piemēram, vienai papildu stīpai katrai sienai.

**Vilkšana pārvieto lapu.** Vilkšana ar kreiso pogu pārvieto lapu visos rīkos, izņemot {{ui:Automātiski skaitīt}}. Pārslēgties uz pārvietošanas rīku nekad nav vajadzīgs. Ritenis tālina; tas neritina.

**Atkopšanas kopija, nevis mākonis.** TakeoffCraft glabā jūsu darba kopiju šajā pārlūkprogrammā un pēc avārijas to piedāvā atjaunot ([Ja cilne vai pārlūkprogramma apstājas](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), bet apjomu aprēķins ir jūsu, ko saglabāt: {{key:Mod+S}}. Saglabāšana mākonī vēl nav pieejama.

**Viss ir pārlūkprogrammā.** Nekas nav jāinstalē, un plāni nekad netiek augšupielādēti. Darbvirsmas lietotnei TakeoffCraft ir pieejama CadCraft Studio kopā ar citām septiņām lietotnēm.

## Vēl nav pieejams

Mēroga apgabali pa lapām vēl nav izveidoti. Pilnu sarakstu un to, ko darīt tā vietā, skatiet [Kas vēl nav izveidots](topic:not-built-yet).
