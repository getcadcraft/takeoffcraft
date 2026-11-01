---
title: TakeoffCraft ekrāns
summary: Loga apskats pēc ekrānā redzamajiem nosaukumiem - rīkjosla, lapu saraksts, lapa, vienumu panelis, daudzumu tabula un statusa josla.
keywords: ekrāns, izkārtojums, izkārtojumi, lente, projekta pārlūks, rīkkaste, informācijas lodziņš, rīkjosla, paneļi, lapu saraksts, vienumu panelis, daudzumi, statusa josla, apskats, saskarne
from: ab1115e0
---

TakeoffCraft aizpilda pārlūka logu zem CadCraft lietotnes joslas. No augšas uz leju un no kreisās uz labo pusi:

| Daļa | Kur | Kam tā paredzēta |
|---|---|---|
| Lietotnes josla | Tieši augšā | Lietotnes nosaukums, versija, {{ui:About TakeoffCraft}}, {{ui:Help}} ({{key:F1}}), {{ui:Save for offline}}, {{ui:Settings}} ({{key:Mod+,}}), pogu {{ui:Full screen}} un motīva slēdzis {{ui:Paper}} / {{ui:Model}}. |
| Rīkjosla | Zem lietotnes joslas | Katra komanda grupās: {{ui:File}}, {{ui:Export}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Edit}}, {{ui:View}}. |
| Lapas | Pa kreisi | Katra atvērtā PDF lapa ar sīktēlu, tās mērogu un atzīmju skaitu. |
| Lapa | Vidū | Atvērtā lapa. Mērīšana notiek šeit. |
| Vienumi | Pa labi | Jūsu apjomu aprēķina vienumi, atlasītā vienuma iestatījumi un atlasītā atzīme. |
| Daudzumi | Apakšā | Daudzumi un izmaksas pēc vienuma vai lapas, kā arī darba kopsumma. |
| Statusa josla | Tieši apakšā | Tiešā mērījuma vērtība, ziņojumi, 45° norāde un tālummaiņa. |

## Rīkjosla

Novietojiet kursoru virs jebkuras pogas, lai redzētu, ko tā dara un kāds ir tās taustiņš.

| Grupa | Pogas |
|---|---|
| {{ui:File}} | {{ui:New}} (tukšs apjomu aprēķins), {{ui:Open PDFs}} ({{key:Mod+O}}), {{ui:Open takeoff}} (projekts `.takeoff.json`), {{ui:Save takeoff}} ({{key:Mod+S}}) |
| {{ui:Export}} | Viena izvēlne: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Marked PDF}} |
| {{ui:Scale}} | {{ui:Calibrate}} ({{key:K}}), {{ui:Check}} ({{key:D}}) un saraksts {{ui:Preset}} |
| {{ui:Takeoff}} | {{ui:Select}} ({{key:V}}), {{ui:Linear}} ({{key:L}}), {{ui:Area}} ({{key:A}}), {{ui:Circle}} ({{key:O}}), {{ui:Arc}} ({{key:R}}, ieslēgšanas slēdzis), {{ui:Deduct}} ({{key:E}}, ieslēgšanas slēdzis), {{ui:Cut-out}} ({{key:X}}), {{ui:Count}} ({{key:C}}), {{ui:Auto count}} ({{key:S}}) |
| {{ui:Edit}} | {{ui:Undo}} ({{key:Mod+Z}}), {{ui:Redo}} ({{key:Mod+Y}}), {{ui:Copy}} ({{key:Mod+C}}), {{ui:Paste}} ({{key:Mod+V}}) un {{ui:More}}: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}} |
| {{ui:View}} | {{ui:Fit page}} ({{key:F}}), {{ui:Fit width}} ({{key:W}}) |

Izmantotais rīks ir redzams kā nospiests. Pogas {{ui:Arc}} un {{ui:Deduct}} paliek nospiestas, kamēr tās ir ieslēgtas.

## Lapas (pa kreisi)

- **Meklēt lapās** filtrē sarakstu pēc lapas nosaukuma, faila nosaukuma vai lapas etiķetes.
- Katrā lapā ir sīktēls (zīmēts, kamēr ritināt), tās nosaukums un vai nu tās mērogs, vai **Nav mēroga**.
- Katras rindas labajā pusē redzams, cik atzīmju ir lapā. Kamēr vienums ir izcelts, tā vietā rādīts, cik šī vienuma atzīmju ir uz lapas.
- Noklikšķiniet uz lapas, lai to atvērtu. {{key:PageDown}} un {{key:PageUp}} pārvieto uz nākamo un iepriekšējo lapu sarakstā.
- Ja apjomu aprēķins aptver PDF, kas nav atvērti, zem saraksta piezīme tos nosauc. Skatiet [Apjomu aprēķina saglabāšana un atkārtota atvēršana](topic:save-and-reopen).

Lapu nosaukumi nāk no PDF: lapas etiķete, piemēram, `A-101`, kļūst par lapas nosaukumu. Lapa bez etiķetes tiek nosaukta pēc sava faila un lapas numura, piemēram, "Plāni, lapa 3". Ja atvērti vairāki PDF, lapas ar etiķetēm rāda arī faila nosaukumu.

## Lapa (vidū)

- Josla zem lapas rāda lapas nosaukumu un tās mērogu vai "Mērogs vēl nav: izvēlieties iepriekš iestatītu vai kalibrējiet". Tās pogas: {{ui:MarkupCraft}} (kad šī lietotne var atvērt PDF; skatiet [Apjomu aprēķina sākšana un plānu komplekta atvēršana](topic:open-plan-set)), {{ui:Compare}} (vecāka lapas versija pāri šai: [Salīdziniet pārskatītu lapu](topic:compare-revisions)), "(n) jāpārbauda" (atzīmētās atzīmes, ja tādas ir) un {{ui:3D}} ([3D pārbaudes skats](topic:check-in-3d)).
- Pirms neviens PDF nav atvērts, vidū rādīta īsa piecu soļu rokasgrāmata.
- Riteņis veic tālummaiņu pie kursora. Velciet, lai panoramētu. Skatiet [Tastatūra un pele](topic:keyboard).
- Kamēr izmantojat {{ui:Auto count}}, lapas augšdaļā parādās josla ar tās vadības elementiem.

## Vienumi (pa labi)

Augšdaļā ir saraksts {{ui:Bid area}}: ēka, stāvs vai fāze, kur tiek ievietotas jaunās atzīmes ([Tāmes zonas](topic:bid-areas)).

- {{ui:New item}} atver nelielu veidlapu: nosaukumu, tipu ({{ui:Linear (length)}}, {{ui:Area}} vai {{ui:Count}}) un {{ui:Add}}.
- Sarakstā katra vienuma krāsa, tipa ikona, nosaukums un daudzums. Noklikšķiniet uz vienuma, lai zīmētu ar to un izceltu tā atzīmes katrā lapā. Vēlreiz noklikšķiniet, lai pārtrauktu izcelšanu.
- Zem saraksta **Vienums: (name)** ir vienuma redaktors: nosaukums, tips, krāsa, mērvienība, augstums vai dziļums, atkritumi, materiāla un darba likmes, izmērītās vērtības un {{ui:Assembly}}. Skatiet [Apjomu aprēķina vienumu izveide](topic:create-items).
- **Atlasītā atzīme** parādās, kad atlasāt atzīmi: kuram vienumam tā pieder, tās lapa, mērījumi un pogas, piemēram, {{ui:Add a cut-out}} un {{ui:Delete mark}}. Ja atlasītas vairākas atzīmes, tā kļūst par **Atlasītās atzīmes**: cik katra vienuma, un {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} un {{ui:Delete marks}}.
- Vienuma redaktora beigās ir {{ui:Copy item}} un {{ui:Duplicate item}}: vienums ar tā mezglu un izmaksām, bez atzīmēm. Skatiet [Atzīmju kopēšana, ielīmēšana un dublēšana](topic:copy-paste).

## Daudzumi (apakšā)

- {{ui:By item}} uzskaita katru vienumu un tā mezgla komponentus ar daudzumu, atkritumiem, likmēm un aprēķinātajām izmaksām. Atkritumus un likmes varat ierakstīt tieši tabulā.
- {{ui:By sheet}} uzskaita katra vienuma daudzumu katrā lapā.
- Brīdinājums, kas sākas ar **Nepilnīgi:**, parādās, kad kaut kas ir izlaists no kopsummām.
- {{ui:Job total}} atrodas galvenes labajā pusē.
- Bultiņas poga tālākajā labajā pusē paslēpj vai parāda tabulu, lai lapai būtu vairāk vietas.

Skatiet [Daudzumu un tāmes lasīšana](topic:read-quantities).

## Statusa josla (apakšā)

No kreisās uz labo: tiešais mērījums, zīmējot (garums, laukums, rādiuss vai pārbaudes rezultāts), lodziņš {{ui:Type}}, kamēr ierakstāt garumu, TakeoffCraft ziņojumi, atgādinājums "Shift piesaista 45°" (vai "Piesaista 45°; Shift atbrīvo leņķi", ja tas ir ieslēgts [Iestatījumos](topic:settings)), poga {{ui:Snap}} (piesaiste rasējuma līnijām, ieslēgta, kad izcelta; {{key:F3}}) un tālummaiņas procents.

:::tip
Lasiet statusa joslu, kad kaut kas nenotiek. TakeoffCraft tur paskaidro, kāpēc noraidīja klikšķi, piemēram, "Šai lapai vēl nav mēroga".
:::

## Citi izkārtojumi

Viss augstāk ir izkārtojums {{ui:CadCraft classic}}, sākums. {{ui:Settings}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Layout}} piedāvā vēl divus; tie paši rīki un taustiņi darbojas visos trijos, un, atkal izvēloties {{ui:CadCraft classic}}, katra vadība atkal atrodas tur, kur bija.

| Izkārtojums | TakeoffCraft |
|---|---|
| {{ui:Ribbon and project browser}} | {{ui:Takeoff ribbon}} augšā ([Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse)), josla aktīvajam rīkam, cilne katrai atvērtajai lapai (rasējuma Modelis un izkārtojumi arī ir lapas) ar mērogu iestatījumiem un {{ui:Fit page}} zem lapas. Kreisajā panelī ir {{ui:Properties}} (atlasītais vienums, piezīme vai atzīme) virs {{ui:Takeoff browser}}: {{ui:Sheets}} (noklikšķiniet uz vienas, lai to atvērtu cilnē), {{ui:Conditions}} (noklikšķiniet uz vienas, lai zīmētu ar to) un {{ui:Estimate}} (katra vienuma kopsumma un darba kopsumma); sīktēli ir tās otrā cilne. |
| {{ui:Toolbox and info box}} | Rīkjosla virs lapas, informācijas lodziņš ar {{ui:Bid area}}, aktīvo rīku vai atlasi un lapas joslu, apjomu aprēķina rīku kolonna pa kreisi, cilne katrai lapai, un {{ui:Snap}} un tālummaiņa zem lapas. |

Kamēr ir atvērts [3D pārbaudes skats](topic:check-in-3d), lapu cilnes un josla zem lapas paliek malā; aizveriet 3D skatu, lai atkal mērītu. Tālrunī vienmēr darbojas tālruņa izkārtojums.

## Pilnekrāns un motīvi

Poga {{ui:Full screen}} lietotnes joslā vai {{key:Ctrl+Shift+F}} (Control visās platformās, arī Mac datorā) pārslēdz starp parasto, pilnekrāna un pilnekrāna režīmu ar paslēptām joslām. Kad joslas ir paslēptas, pārvietojiet kursoru uz augšējo malu, lai tās atkal parādītu.

{{ui:Paper}} ir gaišais motīvs, bet {{ui:Model}} — tumšais. Režīmā {{ui:Model}} rasējums ekrānā tiek rādīts apgriezts (gaišas līnijas uz tumša fona); tikai ekrānā, eksporti nekad netiek mainīti.
