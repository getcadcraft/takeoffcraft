---
title: Tāmes un atzīmētā PDF eksportēšana
summary: Lejupielādējiet tāmi kā XLSX darba grāmatu ar dzīvām formulām vai kā CSV, un savu PDF kopijas ar uzzīmētu apjomu aprēķinu.
keywords: priekšlikums, piedāvājuma kopsavilkums, eksports, xlsx, izklājlapa, darba grāmata, csv, atzīmēts pdf, drukāt apjomu aprēķinu, atskaite, kopīgot, sūtīt, leģenda
from: 334f89c7
---

Eksporti ir lejupielādes. Tie tiek izveidoti jūsu datorā no apjomu aprēķina un atvērtajiem PDF; nekas nekur netiek nosūtīts.

## Tāme kā izklājlapa (XLSX)

1. Rīkjoslas izvēlnē {{ui:Export}} izvēlieties {{ui:XLSX}}.
   Jūsu pārlūkprogramma lejupielādē `(nosaukums).xlsx`. Statusa joslā ir teksts "Eksportēts (nosaukums).xlsx (tāme ar dzīvām formulām, pēc lapas, atzīmēm, mērogiem)." un brīdinājums, ja tāme ir nepilnīga.
2. Atveriet to savā izklājlapu programmā.

Darba grāmatā ir četras darblapas un tālāk minētie pārskati, kad tie attiecas:

| Darblapa | Saturs |
|---|---|
| Tāme | Rinda katram vienumam un komponentam: daudzums, zudumi, daudzums ar zudumiem, likmes, materiāls, darbs, kopā, piezīmes. Kopējā summa apakšā. |
| Pēc lapas | Katra vienuma daudzums katrā lapā ar atzīmju skaitu. |
| Atzīmes | Katra atzīme: lapa, vienums, veids, daudzums un detalizācija (segmentu garumi, bruto un izgriezumu laukumi, perimetrs). |
| Mērogi | Katra lapa, kurai ir mērogs vai atzīmes: tās mērogs, kā tas iestatīts (priekšiestatījums vai kalibrēts pēc kāda attāluma) un pēdas uz PDF vienību. |
| Apjomu kopsavilkums | Katra vienuma daudzums, CSI numurs, atzīmes un lapas, bez cenām. |
| Materiālu saraksts | Katrs mezgla materiāls, saskaitīts pa visu apjomu aprēķinu (materiāls, ko izmanto vairāki vienumi, ir viena rinda), ar zudumiem un materiāla izmaksām, un vienumi, kas to izmanto. |
| Cenu pieprasījums | Materiālu saraksts piegādātājam: daudzumi ar zudumiem, tukša vienības cenas kolonna, un izvērsumi un kopsumma, kas aizpildās, ierakstot cenas. |
| Pēc nodaļas | Materiāls, darbs un kopā pēc CSI MasterFormat nodaļas, ja vienumiem ir {{ui:CSI number}}. |

Ar [piedāvājuma kopsavilkumu](topic:bid-summary) tāmes darblapa beidzas arī ar savām uzcenojumu rindām (darba uzcenojums, pārdošanas nodoklis, virsizmaksas, peļņa, galvojums un piedāvājums) kā dzīvām formulām.

Tāmes darblapā saglabājas **dzīvas formulas**: daudzums ar zudumiem, noapaļotās materiāla un darba summas, katras rindas kopsumma un kopējā summa. Izklājlapu programmas tās pārrēķina, tāpēc varat izklājlapā mainīt likmi vai zudumus, un kopsummas seko. TakeoffCraft aprēķinātie skaitļi ir saglabāti arī šūnās un sakrīt līdz centam.

Piezīmju kolonnā ir norādīta katra komponenta formula, formulu kļūdas, atzīmes lapās bez mēroga, sienas laukums un perimetrs. Ja kaut kas ir izlaists, kopējās summas rindā ir teksts "Nepilnīgs: skatiet piezīmes augstāk".

Darba grāmata ir pārbaudīta programmā LibreOffice Calc, kas to pārrēķināja ar tādām pašām kopsummām. Excel tā vēl nav atvērta. Detalizēta informācija pa kolonnām ir sadaļā [Eksporta kolonnas](topic:export-columns).

## Tāme kā CSV

Izvēlieties izvēlnē {{ui:Export}} {{ui:CSV}}. Jūs iegūsiet `(nosaukums).csv`: tās pašas rindas un kolonnas kā darblapā Tāme, kā vienkāršas vērtības (bez formulām), un kopējo summu. Izmantojiet to, lai ielīmētu citā tāmēšanas vai grāmatvedības sistēmā.

CSV satur tikai tāmi; daudzumiem pa lapām un atzīmju sarakstam izmantojiet XLSX. Tajā pašā izvēlnē {{ui:Material list}} saglabā tikai materiālu sarakstu kā CSV pasūtīšanai.

## Tāme Google Sheets

Virs tabulas **Daudzumi** izvēlne **Kopēt Google Sheets** ievieto tāmi starpliktuvē kā ar tabulatoriem atdalītu tekstu ar tām pašām rindām kā CSV. Google Sheets noklikšķiniet šūnā A1 un ielīmējiet. TakeoffCraft nepierakstās Google kontā un nekur tur neko nenosūta.

## Trūkstošās likmes un tāmes apstiprināšana

Rinda ar daudzumu, bet bez likmes, piezīmēs rāda **Nav likmes**, un eksports tās uzskaita zem kopsummām. Kad tāme ir apstiprināta, eksportā tiek norādīts, kas to apstiprinājis, kad un par kādu kopsummu. Skatiet [Trūkstošās likmes un tāmes apstiprināšana](topic:sign-off-the-estimate).

## Atzīmēts PDF

1. Atveriet PDF, kuru atzīmes vēlaties uzzīmēt.
2. Atveriet izvēlni {{ui:Export}} un izvēlieties {{ui:Marked PDF}}.
   Parādās "Raksta atzīmēto PDF…", tad jūsu pārlūkprogramma lejupielādē vienu failu katram atzīmētajam PDF, nosauktu `(PDF nosaukums) (apjomu aprēķins).pdf`.

Kopijā:

- joslas tiek uzzīmētas kā līnijas savā vienuma krāsā,
- laukumi ir viegli aizpildīti ar cietu kontūru, un izgriezumi paliek atvērti,
- skaitļi ir punkti,
- katrai lapai ar atzīmēm apakšējā kreisajā stūrī ir neliela leģenda: katra vienuma krāsa, nosaukums un daudzums šajā lapā.

Jūsu oriģinālie PDF netiek mainīti.

Piezīmes:

- Tiek rakstīti tikai atvērtie PDF. Atzīmes PDF, kas nav atvērti, paliek kopsummās, bet netiek uzzīmētas; vispirms atveriet šos PDF.
- Leģendas nosaukumos tiek izmantots standarta PDF fonts. Burti, ko tas nevar attēlot, tiek drukāti kā "?".
- Šifrētu PDF nevar kopēt ar atzīmēm: "Šis PDF ir aizsargāts ar paroli vai šifrēts, tāpēc atzīmētu kopiju nevar izveidot. Apjomu aprēķins pats ir kārtībā; eksportējiet izklājlapu."
- Pirmais {{ui:Marked PDF}} cilnē ielādē PDF rakstītāju. Bezsaistē tas ir pieejams tikai tad, ja lietotnes joslā redzams {{ui:Offline ready}}; skatiet [Darbs bezsaistē](common:offline).

:::chromium
Ar vairākiem atzīmētiem PDF Chrome un Edge vienreiz var jautāt, vai šai vietnei atļaut lejupielādēt vairākus failus. Izvēlieties Atļaut, citādi saņemsiet tikai pirmo failu.
:::

## Nav ko eksportēt?

- {{ui:XLSX}} un {{ui:CSV}} vajag vismaz vienu vienumu: "Nav ko eksportēt: izveidojiet un izmēriet vienumu."
- {{ui:Marked PDF}} vajag atzīmes atvērtā PDF: "Atvērtajos PDF vēl nav atzīmju."

## Saglabājiet arī apjomu aprēķinu

Eksports ir atskaite. Lai vēlāk turpinātu darbu pie apjomu aprēķina, izvēlieties arī {{ui:Save takeoff}}: skatiet [Apjomu aprēķina saglabāšana un atvēršana](topic:save-and-reopen).

Lai pievienotu virsizmaksas, peļņu, nodokli un galvojumu un nosūtītu priekšlikumu, skatiet [Piedāvājuma kopsavilkums un priekšlikums](topic:bid-summary).
