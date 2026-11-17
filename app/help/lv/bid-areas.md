---
title: Tāmes zonas
summary: Atzīmējiet atzīmes pēc ēkas, stāva vai kārtas, veiciet apjomu aprēķinu vienā zonā vienlaikus un lasiet daudzumus un izmaksas katrai zonai.
keywords: pievienot alternatīvu, atskaitāmā alternatīva, bāzes piedāvājums, alternatīvas, tāmes zona, zona, ēka, stāvs, līmenis, kārta, alternatīva, sadalījums, sadalīt, tipveida stāvs, starpsumma, pēc zonas
from: 64f3d41c
---

Tāmes zona ir objekta daļa, ko cenojat atsevišķi: ēka, stāvs, kārta, spārns. Katra atzīme var atrasties vienā tāmes zonā. Daudzumus un tāmi tad var lasīt katrai zonai ar starpsummu, bet objekta kopsumma paliek visu zonu summa.

## Izveidot tāmes zonu

1. Virs {{ui:Items}} paneļa augšā atveriet {{ui:Bid area}} sarakstu.
2. Izvēlieties **Jauna tāmes zona…**, ierakstiet nosaukumu, piemēram, "Ēka A" vai "2. līmenis", un izvēlieties **Izveidot**.
   Jaunā zona kļūst par pašreizējo. Statusa joslā ir teikts: "Jaunās atzīmes tiks ievietotas zonā (nosaukums). Atzīmes citās tāmes zonās ir aptumšotas."

## Apjomu aprēķins zonā

Kamēr zona ir izvēlēta sarakstā, katra jauna atzīme tiek ievietota tajā: līnijas, laukumi, riņķi, skaitīšanas atzīmes, atzīmes, ko pievieno {{ui:Auto count}}, un ielīmētais. Atzīmes citās tāmes zonās un atzīmes nevienā zonā lapā tiek aptumšotas, lai redzētu, kas pieder kur.

Izvēlieties **Nav tāmes zonas** sarakstā, lai veiktu apjomu aprēķinu bez zonas; tad nekas netiek aptumšots.

:::tip
Tipveida stāvi: veiciet apjomu aprēķinu 2. stāvam, atlasiet tā atzīmes ({{key:Mod+A}} lapā), kopējiet tās, sarakstā izvēlieties 3. stāvu un ielīmējiet. Kopijas tiks ievietotas 3. stāvā. Ja stāvi ir vienādi un nav vajadzības tos atdalīt, [tipveida grupa](topic:typical-groups) vairākkārt saskaita vienu stāvu.
:::

## Pārvietot atzīmes citā zonā

Atlasiet vienu atzīmi vai vairākas ({{key:Shift}} + klikšķis vai {{key:Mod+A}}). Sadaļā **Atlasītā atzīme** (vai **Atlasītās atzīmes**) izvēlieties zonu laukā {{ui:Bid area}}. Statusa joslā ir teikts "3 atzīmes pārvietotas uz 2. līmeni." Tas ir viens atsaukšanas solis.

## Pārdēvēt, pārkārtot vai dzēst

Sarakstā izvēlieties **Pārvaldīt tāmes zonas…**. Pārrakstiet nosaukumu, lai to pārdēvētu, izmantojiet augšup un lejup pogas, lai mainītu secību (tabulas un darbgrāmata seko tai), vai dzēsiet zonu ar miskastes ikonu. Zonas dzēšana saglabā tās atzīmes: tās tad neatrodas nevienā tāmes zonā. {{key:Mod+Z}} atsauc katru izmaiņu.

## Lasīt daudzumus pa zonām

Tabulā {{ui:Quantities}} izvēlieties {{ui:By area}} (tā parādās, kad apjomu aprēķinam ir tāmes zona). Katrā zonā ir uzskaitīti tās vienumi ar daudzumu, mērvienību un kopsummu, pēc tam starpsummas rinda. Atzīmes bez tāmes zonas parādās pēdējās kā **Nav tāmes zonas**. Noklikšķiniet uz vienuma rindas, lai izceltu vienumu un padarītu šo zonu par pašreizējo.

Mezgli katrai zonai tiek aprēķināti no tās pašas kopsummām. Formula, kas noapaļo uz augšu, piemēram, `ceil(L / 4)`, var tādēļ zonās kopā dot nedaudz vairāk nekā visam objektam, tāpat kā piedāvājumā, kas cenots pa zonām.

## Alternatīvas: bāzes piedāvājums plus pievienojamās un atskaitāmās

Tāmes zona var būt **alternatīva**: darbs, ko īpašnieks var pievienot piedāvājumam vai izņemt no tā. Sadaļā **Pārvaldīt tāmes zonas…** katrai zonai ir saraksts blakus tās nosaukumam:

| Izvēle | Ko tā dara |
|---|---|
| {{ui:Base bid}} | Piedāvājumā kā parasti. |
| {{ui:Add alternate}} | Cenots atsevišķi un **izslēgts no bāzes piedāvājuma**: grīdas seguma uzlabojums, papildu nojume. |
| {{ui:Deduct alternate}} | Iekļauts bāzes piedāvājumā un piedāvāts kā atskaitījums: "dzēst nojumi". |

Veiciet alternatīvas darba apjoma aprēķinu tās tāmes zonā kā jebkuru citu zonu. Kad apjomu aprēķinā ir alternatīva:

- {{ui:Quantities}} tabulas galvenē vietā **Darba kopsumma** rakstīts **Bāzes piedāvājums**: viss apjomu aprēķins bez pievienojamām alternatīvām.
- {{ui:By area}} beidzas ar bāzes piedāvājumu un vienu rindu katrai alternatīvai: **+$300.00** pievienojamai, **−$1,050.00** atskaitāmai.
- Alternatīvā tiek cenoti tikai tie vienumi, kuriem ir atzīmes tajā, kopā ar to mezgliem, tāpēc citu vienumu mezglu daļas tajā neiekļūst.

Eksportos CSV beidzas ar bāzes piedāvājumu un alternatīvām, un darbgrāmatā tiek pievienota lapa **Alternatīvas**: bāzes piedāvājums, katras alternatīvas vienumi un tās izmaiņa, un bāzes piedāvājums bez visām pievienojamām alternatīvām.

## Eksportā

{{ui:XLSX}} pievieno lapu **Pēc tāmes zonas**: katras zonas vienumus un komponentes ar daudzumu, daudzumu ar atkritumiem, materiālu, darbu un kopsummu, starpsummu katrai zonai (`SUM` formula) un **Visas tāmes zonas** beigās. Lapai **Atzīmes** tiek pievienota kolonna **Tāmes zona**. Apjomu aprēķins bez tāmes zonām eksportējas kā agrāk. Skatiet [Eksporta kolonnas](topic:export-columns).

Tāmes zonas tiek saglabātas projekta failā kopā ar atzīmēm.
