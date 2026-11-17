---
title: Apjomu aprēķina saglabāšana un atkārtota atvēršana
summary: Saglabājiet apjomu aprēķinu kā projekta failu .takeoff.json, atveriet to atkārtoti ar tiem pašiem PDF un skatiet, kas notiek, ja PDF trūkst vai ir mainīts.
keywords: apjomu aprēķins PDF iekšpusē, iegulšana, pielikums, saglabāt, atvērt, atkārtoti atvērt, projekts, takeoff.json, turpināt, pārveidots PDF, mainīts PDF, trūkstošs PDF, dublējums, automātiska saglabāšana, atjaunot, avārija
from: bd5080a6
---

Apjomu aprēķins tiek saglabāts kā neliels projekta fails, `(name).takeoff.json`. Tajā ir jūsu vienumi, mezgli, likmes, katras lapas mērogs un katra atzīme. Tajā **nav** PDF; tie tiek atrasti atkārtoti pēc to satura.

## Saglabāt

1. Izvēlieties {{ui:Saglabāt apjomu aprēķinu}} grupā {{ui:Fails}} vai nospiediet {{key:Mod+S}}.
   Jūsu pārlūkprogramma lejupielādē `(name).takeoff.json`. Statusa joslā rādīts: "Saglabāts (name).takeoff.json. Tas tiek atvērts atkārtoti virs tiem pašiem PDF (tie tiek saskaņoti pēc satura)."
2. Pārvietojiet failu blakus objekta PDF, lai abi paliktu kopā.

Katra saglabāšana lejupielādē jaunu failu. Jūsu pārlūkprogramma otro var nosaukt `(name) (1).takeoff.json`; paturiet jaunāko.

Nosaukums tiek ņemts no pirmā PDF, ko atvērāt šajā apjomu aprēķinā.

:::note
Saglabāt apjomu aprēķinu joprojām ir vienīgais veids, kā apjomu aprēķinu saglabāt failā. Kamēr strādājat, TakeoffCraft arī glabā atjaunošanas kopiju šajā pārlūkprogrammā (skatiet zemāk), un mākoņa saglabāšana vēl nav pieejama. Ja mēģināt aizvērt cilni ar nesaglabātām izmaiņām, pārlūkprogramma jautā, vai iziet.
:::

## Glabāt apjomu aprēķinu PDF iekšpusē

{{ui:Eksportēt}} › {{ui:PDF ar iekļautu apjomu aprēķinu}} lejupielādē katra atvērtā PDF kopiju, nosauktu kā `Plāni (ar apjomu aprēķinu).pdf`, kurā ir viss apjomu aprēķins kā pielikums: vienumi, atzīmes, mērogi, piedāvājuma zonas un viss, ko satur `.takeoff.json`. Tā lapas nav mainītas, tāpēc tā izskatās un drukājas kā oriģināls, un citi PDF lasītāji parāda apjomu aprēķinu to pielikumos.

Atveriet šo PDF programmā TakeoffCraft (jebkurā veidā, kā atverat PDF), un tā jautā **Šim PDF ir apjomu aprēķins iekšpusē**: izvēlieties {{ui:Atvērt apjomu aprēķinu}}, lai to atgūtu, vai {{ui:Tikai PDF}}, lai atvērtu tikai zīmējumu. Kopija attēlo PDF, no kura tā veidota, tāpēc `.takeoff.json`, kas saglabāts no jebkuras no tām, atveras abās.

Ja ir vairāki PDF, katrā kopijā ir viss apjomu aprēķins; atveriet tos kopā. Ja no kopijas saglabājat vēlreiz, tā aizstāj apjomu aprēķinu iekšpusē, nevis pievieno otru. Failu, ko paturēt, joprojām ir `.takeoff.json`: tas ir mazs, un to raksta automātiskā saglabāšana un darbvirsmas lietotne.

## Ja cilne vai pārlūkprogramma apstājas

Dažas sekundes pēc katras izmaiņas TakeoffCraft glabā apjomu aprēķina kopiju šīs pārlūkprogrammas krātuvē, kopā ar tā PDF, ja tie kopā nepārsniedz 64 MB. Nekas netiek augšupielādēts. Kad saglabājat apjomu aprēķinu, sākat jaunu vai atverat citu projektu, kopija tiek dzēsta.

Ja cilne avarē, pārlūkprogramma vai dators apstājas, vai iziet ar nesaglabātām izmaiņām, nākamreiz, kad atverat TakeoffCraft, tā jautā **Atjaunot jūsu darbu?** un parāda apjomu aprēķinu pēc nosaukuma. Izvēlieties **Atjaunot**, lai to atgūtu: vienumi, atzīmes un mērogi atgriežas, un tā PDF atveras atkārtoti, ja tie tika saglabāti. Statusa joslā rādīts: "Atjaunots (name). Tas vēl nav saglabāts failā: Saglabāt apjomu aprēķinu to saglabā." Ja PDF bija pārāk lieli, lai tos saglabātu, atveriet tos vēlreiz; atzīmes parādās to lapās. Vairāk: [Atjaunot jūsu darbu](common:recover).

## Atkārtota atvēršana

1. Atveriet TakeoffCraft.
2. Velciet `.takeoff.json` failu un tā PDF lapā kopā. Vai izvēlieties {{ui:Atvērt plānus}} PDF un {{ui:Atvērt apjomu aprēķinu}} projektam, jebkurā secībā.
   Statusa joslā rādīts: "Atvērts (name): 12 vienumi, 340 atzīmes." Katra lapa atgūst savu mērogu, un atzīmes parādās to lapās.

PDF secībai nav nozīmes, tāpat kā to failu nosaukumiem vai mapēm. TakeoffCraft atpazīst katru PDF pēc tā satura pirksta nospieduma.

Ja atverat projektu, kamēr pašreizējam apjomu aprēķinam ir nesaglabātas izmaiņas, TakeoffCraft vispirms jautā: **Atcelt**, **Atmest izmaiņas** vai **Vispirms saglabāt apjomu aprēķinu**. Projekta atvēršana aizstāj pašreizējos vienumus un atzīmes; jau atvērti PDF paliek atvērti.

## Ja PDF trūkst

Ja atverat projektu bez visiem tā PDF, statusa joslā tiek pievienots: "Atveriet tā PDF, lai redzētu atzīmes (uzskaitīti zem lapām)." Zem lapu saraksta piezīme saka:

"Šis apjomu aprēķins aptver arī PDF, kas nav atvērti. To daudzumi tiek skaitīti; atveriet tos, lai redzētu un rediģētu to atzīmes:"

Pēc tam seko failu nosaukumi un izmēri. To atzīmes joprojām tiek skaitītas visās kopsummās un eksportos ar mērogiem, kādos tās izmērītas. Atveriet šos PDF, lai redzētu un rediģētu atzīmes.

## Ja PDF ir mainīts

PDF, kas ir pārskatīts vai tikko saglabāts vēlreiz citā programmā, ir citāds saturs, tāpēc TakeoffCraft tas ir **cits fails**, pat ar to pašu nosaukumu. Piezīmē zem lapu saraksta šāds fails tiek apzīmēts: "fails ar šādu nosaukumu ir atvērts, bet tā saturs atšķiras".

- Atzīmes paliek piesaistītas vecajai versijai. Tās turpina tikt skaitītas savās vecajās pozīcijās un mērogos.
- Pārskatītais PDF atveras kā jaunas lapas bez mēroga un bez atzīmēm.

Lai pārvietotu apjomu aprēķinu uz pārskatījumu, atveriet abus PDF un izmantojiet {{ui:Salīdzināt}} jaunajā lapā: [Salīdziniet pārskatītu lapu un pārvietojiet apjomu aprēķinu](topic:compare-revisions).

## Bojāts vai svešs fails

TakeoffCraft pārbauda katru projekta failu pirms tā izmantošanas. Ziņojumi, ko varat redzēt:

- "(file) nav TakeoffCraft projekts (tas nav derīgs JSON)."
- "Šis nav TakeoffCraft projekta fails."
- "Šis projekts ir saglabāts jaunākā TakeoffCraft versijā. Atveriet to tur."
- "3 atzīmes bija bojātas un tika izlaistas." (pārējais atveras)

## Atsaukšanas vēsture

Atsaukšanas vēsture sākas no jauna, kad atverat projektu. Saglabāšana to nedzēš.
