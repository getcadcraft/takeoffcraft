---
title: Faili, ko TakeoffCraft atver un saglabā
summary: PDF ievadei, apjomu aprēķina projekta fails, tabulas un atzīmēti PDF izvadei - kas katrā ir, kur tas tiek saglabāts un kas mainās tiešsaistē, bezsaistē un starp pārlūkiem.
keywords: faili, formāti, pdf, takeoff.json, projekta fails, xlsx, csv, atzīmēts pdf, lejupielāde, saglabāt, atvērt, bezsaiste
from: 1bf9be65
---

## Ko tas atver

| Fails | Kā | Piezīmes |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open plans}}, {{key:Mod+O}} vai nomest lapā | Vairāki vienlaikus. Katra PDF lapa kļūst par lapu. |
| Apjomu aprēķina projekts (`.takeoff.json`) | {{ui:Open takeoff}} vai nomest lapā | Jūsu vienumi, mērogi un atzīmes. To var nomest kopā ar tā PDF. |

Citi faili, kas nomesti lapā, tiek izlaisti, un statusa joslā tiek norādīti to nosaukumi.

- **PDF, kas aizsargāti ar paroli,** netiek atvērti: "(name) ir aizsargāts ar paroli. Atveriet kopiju bez paroles."
- **Viens un tas pats PDF divreiz** tiek atvērts tikai vienreiz: "(name) jau ir atvērts." TakeoffCraft atpazīst failus pēc to satura, nevis pēc nosaukumiem.
- **Skenēti PDF** atveras un tiek mērīti tāpat kā citi; TakeoffCraft nav vajadzīgs teksts PDF failā.
- **Lieli plānu komplekti**: katrs PDF tiek nolasīts pilnībā, kad tas tiek atvērts (lai izveidotu tā pirkstu nospiedumu), tāpēc ļoti liels fails atvēršanai prasa brīdi. Sīktēli tiek zīmēti pa vienam, kamēr ritināt.

## Ko tas saglabā

Katra saglabāšana ir lejupielāde. Nekas netiek ierakstīts atpakaļ jūsu PDF failos.

| Jūs izvēlaties | Jūs saņemat | Kas tajā ir |
|---|---|---|
| {{ui:Save takeoff}} | `(name).takeoff.json` | Vienumi, mezgli, likmes, lapu mērogi un katra atzīme, kas piesaistīta katram PDF pēc tā satura. Nav PDF lapu. |
| {{ui:XLSX}} | `(name).xlsx` | Četras darblapas: Tāme (ar dzīvām formulām), Pēc lapas, Atzīmes, Mērogi. |
| {{ui:CSV}} | `(name).csv` | Tāme kā vienkāršas vērtības, viena rinda katram vienumam un komponentam. |
| {{ui:Marked PDF}} | `(PDF name) (takeoff).pdf` | Katra atvērtā PDF kopija, kurai ir atzīmes, ar apjomu aprēķinu uzzīmētu uz tās lapām un leģendu. Viens fails katram PDF. |

Nosaukums tiek ņemts no pirmā PDF, ko atvērāt šajā apjomu aprēķinā. Pārdēvēšanas lauka vēl nav: ja vēlaties citu nosaukumu, pārdēvējiet lejupielādēto failu.

Skatiet [Tāmes un atzīmēta PDF eksportēšana](topic:export-estimate) un [Eksporta kolonnas](topic:export-columns).

## Kur nonāk lejupielādes

Pārlūks tās saglabā tur, kur saglabā visas lejupielādes, parasti mapē Lejupielādes. Atrodiet to programmā {{pick:mac=Finder|windows=File Explorer|linux=jūsu failu pārvaldnieks}}. Ja pārlūks ir iestatīts jautāt, kur saglabāt katru failu, tas jautās.

:::chromium
{{ui:Marked PDF}} ar vairākiem atzīmētiem PDF lejupielādē vairākus failus vienlaikus. Chrome un Edge var vienreiz pajautāt, vai šai vietnei atļaut lejupielādēt vairākus failus. Izvēlieties Atļaut.
:::

:::safari
Safari saglabā mapē Lejupielādes, ja vien neesat mainījis lejupielādes vietu Safari iestatījumos sadaļā Vispārīgi.
:::

## Kāpēc projekta fails un PDF ir atdalīti

Fails `.takeoff.json` satur tikai jūsu apjomu aprēķinu. Tas atkal atrod savus PDF pēc to satura (katra faila pirkstu nospieduma), tādēļ:

- PDF pārdēvēšana vai pārvietošana nav svarīga.
- PDF, ko cita programma ir mainījusi vai saglabājusi no jauna, tiek uzskatīts par citu failu, pat ja nosaukums ir tas pats.
- Atzīmes uz PDF, kas nav atvērti, joprojām tiek ieskaitītas kopsummās.

Skatiet [Apjomu aprēķina saglabāšana un atkārtota atvēršana](topic:save-and-reopen).

## Tiešsaistē un bezsaistē

Jūsu PDF un apjomu aprēķini nekad neatstāj jūsu datoru, ne tiešsaistē, ne bezsaistē. Savienojums ir svarīgs tikai TakeoffCraft pašas ielādei.

Lai strādātu bez savienojuma, vispirms saglabājiet lietotni, kamēr esat tiešsaistē:

1. Augšējā lietotnes joslā izvēlieties {{ui:Save for offline}}.
   Poga skaita augšup, "Saglabā 12 no 40", kamēr saglabā.
2. Pagaidiet, līdz parādās {{ui:Offline ready}}.

Saglabājot TakeoffCraft, pārlūkā tiek saglabāta lietotne, šī palīdzība, PDF lasītājs, PDF rakstītājs, ko izmanto {{ui:Marked PDF}}, un automātiskās skaitīšanas darbinieks, apmēram 6 MB. Kad parādās {{ui:Offline ready}}, viss darbojas bezsaistē: PDF atvēršana, mērīšana, {{ui:Auto count}}, {{ui:Save takeoff}}, {{ui:XLSX}}, {{ui:CSV}} un {{ui:Marked PDF}}.

| Poga rāda | Nozīme |
|---|---|
| {{ui:Save for offline}} | Vēl nav saglabāts šajā pārlūkā. Izvēlieties, lai saglabātu. |
| Saving (n) of (m) | Šobrīd saglabā. |
| {{ui:Offline ready}} | Saglabāts. Izvēlieties {{ui:Save again (get the newest version)}} vai {{ui:Remove the offline copy}}. |
| {{ui:Could not save}} | Daži faili netika lejupielādēti. Pārbaudiet savienojumu un izvēlieties vēlreiz. |
| {{ui:Offline not available}} | Šis pārlūka logs nevar saglabāt bezsaistes kopiju (privātie logi un dažas pārvaldītas ierīces to bloķē). |

Vairāk, tostarp cik ilgi saglabāta kopija ir spēkā katrā pārlūkā: [Darbs bezsaistē](common:offline).

:::offline
Esat bezsaistē. Ja lietotnes joslā redzams {{ui:Offline ready}}, viss darbojas. Ja nē, tās TakeoffCraft daļas, kuras šajā cilnē vēl nav ielādētas (PDF rakstītājs {{ui:Marked PDF}} vajadzībām, automātiskās skaitīšanas darbinieks), tagad nevar ielādēties, un {{ui:Marked PDF}} apstājas ar "Atzīmēto PDF nevarēja ierakstīt". Jūsu apjomu aprēķins jebkurā gadījumā ir drošs: {{ui:Save takeoff}}, {{ui:XLSX}} un {{ui:CSV}} nav vajadzīgs savienojums. Nelādējiet cilni no jauna, kamēr nebūsiet atkal tiešsaistē.
:::

:::online
Esat tiešsaistē. Pirms objekta apmeklējuma vai lidojuma izvēlieties {{ui:Save for offline}} un pagaidiet, līdz parādās {{ui:Offline ready}}.
:::

## Tabulas

XLSX saglabā dzīvās formulas, tāpēc tabulu programma, atverot failu, pārrēķina tāmi un to uztur pareizu, kad tur maināt likmi vai atkritumus. Darba grāmata ir pārbaudīta programmā LibreOffice Calc, kura pārrēķināja katru kopsummu precīzi līdz centam. Vēl nav atvērta programmā Excel.

CSV ir vienkāršas vērtības ar baitu secības zīmi, tāpēc tabulu programmas pareizi nolasa tādus simbolus kā m².

## Darbvirsma un mākonis

:::desktop
No versijas 0.5 darbvirsmas lietotne ir CadCraft Studio: TakeoffCraft un pārējās septiņas lietotnes vienā instalācijā. Atsevišķa TakeoffCraft instalētāja nav.
:::

Saglabāšana mākonī vēl nav pieejama. Glabājiet savus failus `.takeoff.json` kopā ar objekta PDF un dublējiet tos kā jebkuru citu failu. Skatiet [Kur nonāk jūsu faili](common:your-files).
