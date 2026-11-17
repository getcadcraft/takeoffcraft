---
title: Jaunumi 0.9 versijā
summary: Lasiet garumus metros, centimetros vai milimetros, metriskos laukumus m2 ar sienu laukumu, 1:75 un 1:150 mēroga iepriekš iestatījumus, svara un temperatūras mērvienības, Loks ar desmit metodēm un tiešraides kursorus, Sekot un dalībnieku sarakstu.
keywords: jaunumi, izlaiduma piezīmes, izmaiņu žurnāls, 0.9, rādīt garumus kā, metri, centimetri, milimetri, metriskais, sekot global, mērvienības, m2, kvadrātmetri, sienu laukums, mēroga iepriekš iestatījumi, 1:75, 1:150, svars, kilogrami, kg, tonna, lb, temperatūra, celsijs, fārenheits, loks, loka metodes, trīs punkti, rādiuss, tiešraide, kursori, sekot, dalībnieku saraksts, klase, rīka padomi, izkārtojums, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, skaitīt visu, leģenda, simbolu leģenda, visa kopa, cenu atmiņa, iepriekšējais darbs, pēdējais darbs, tipiska cena, piegādātājs, krājums, piegādes laiks, pasūtījumu saraksts, trūkums, problēmu panelis, asistents, valodas, ievades ierīces, rīkjoslas rindas, dwg
from: 6182b998
---

Šis ir tas, kas mainījās TakeoffCraft 0.9 versijā, salīdzinot ar 0.8.1. Tas ir neliels laidiens šai lietotnei: garumus tagad var lasīt metros, centimetros vai milimetros, metriskie laukumi un mērogi darbojas pareizi, un Loks ir desmit veidu, kā zīmēt. Tiešraides sesijas arī rāda, kurš kur atrodas.

## Jaunums

### Garumi metros, centimetros vai milimetros

- **Rādīt garumus kā.** {{ui:Iestatījumi}} › {{ui:TakeoffCraft}} ir {{ui:Rādīt garumus kā}} ar {{ui:Sekot Global}}, {{ui:Pēdas un collas}}, m, cm un mm. {{ui:Sekot Global}} izmanto metrisko garuma mērvienību, ko atzīmējāt sadaļā {{ui:Iestatījumi}} › {{ui:Visur}} › {{ui:Mērvienības}}, un pēdas un collas, ja neviena nav atzīmēta. Tas maina to, kā garumi lasās lapā, statusa joslā un paneļos, ieskaitot augstumus, dziļumu, biezumu un līmeņus. Ievadīts skaitlis bez mērvienības augstuma laukā tiek nolasīts rādītajā mērvienībā.
- **Tikai attēlojums.** Daudzumi, izmaksas un eksporti tiek aprēķināti no precīziem garumiem. Izvēle 1/16, 1/8 un 1/4 collas parādās tikai pēdām un collām. Skatiet [Rādīt garumus metros](topic:show-lengths-in-meters).
- **Svara mērvienības.** Vienumu {{ui:Ievadīts daudzums (bez rasējuma)}} tagad var būt lb, TON, kg vai t, un to var cenot pēc vienības.
- **Temperatūra.** Katram vienumam ir izvēles lauks {{ui:Temperatūra}} vienuma redaktorā, ievadīts grādos C vai F. {{ui:Rādīt temperatūras kā}} sadaļā {{ui:Iestatījumi}} › {{ui:TakeoffCraft}} piedāvā {{ui:Sekot Global}}, °C vai °F.

### Metriskie laukumi un mērogi

- **Laukumi m2 uz rasējuma.** Laukums, kas izmērīts ar metrisku vienumu, tagad rāda m2 gan rasējuma birkā, gan atzīmju panelī, kā arī tabulā, nevis SF. Noteikums: m2, ja vienums ir cenots metriski vai garumi tiek rādīti m, cm vai mm, citādi SF.
- **Sienas laukums.** Lineārs vienums ar augstumu rāda arī sienas laukumu (garums reizināts ar augstumu) vienumu sarakstā un kā piezīmes rindu zem daudzumiem pa vienumiem.
- **Mēroga iepriekš iestatījumi 1:75 un 1:150.** Tie ir sadaļā {{ui:Iepriekš iestatīts}} grupā {{ui:Mērogs}}, kur tagad ir 32 mērogi. Skatiet [Mēroga iepriekš iestatījumi](topic:scale-presets).

### Loks ar desmit metodēm

- Kamēr {{ui:Loks}} ir ieslēgts (rīkjoslas poga vai {{key:R}}), lapas joslā parādās lauks {{ui:Loka metode}}. Metodes ir: 3 punkti; Sākums, Centrs, Beigas; Sākums, Centrs, Leņķis; Sākums, Centrs, Garums; Sākums, Beigas, Leņķis; Sākums, Beigas, Virziens; Sākums, Beigas, Rādiuss; Centrs, Sākums, Beigas; Centrs, Sākums, Leņķis; Centrs, Sākums, Garums. Leņķi, garumu, rādiusu un virzienu var noklikšķināt vai ierakstīt. Tas darbojas lineārajos posmos, laukumos un izgriezumos. Faili, kas saglabāti pirms 0.9, atveras tāpat. Skatiet [Zīmēt lokus ar desmit metodēm](topic:draw-arcs-ten-methods).

### Sadarbība

- **Redzēt citu kursorus.** Tiešraides sesijā katra cilvēka rādītājs redzams lapā ar viņa vārdu un krāsu, un ap atlasītajām atzīmēm ir punktēta kaste viņa krāsā. Cilvēki citā lapā ir uzskaitīti ar šīs lapas nosaukumu. Skatiet [Strādāt tiešraidē ar citiem](topic:work-live).
- **Sekot cilvēkam un dalībnieku saraksts.** Poga {{ui:Dalībnieki}} tiešraides sesijā uzskaita katru cilvēku ar rīku, ko viņš lieto, lapu, kurā atrodas, un laiku, kad pēdējo reizi rediģēja. {{ui:Sekot}} pārvieto jūsu skatu kopā ar viņa skatu, un sesijas vadītājs var izmantot {{ui:Lūgt visus sekot man}}. Skatiet [Sekot kolēģim tiešraides sesijā](topic:follow-a-teammate).

## Visās lietotnēs

- **Rīka padomi un sākuma padoms.** Uznirstošais teksts ir Bootstrap rīka padoms, un sākuma padomu var aizvērt.
- **Ritināmas cilņu joslas.** Paneļa cilņu josla, kas neiekļaujas, ritina, nevis tiek nogriezta.
- **Cilņu nosaukumi.** Pārlūka cilnē rakstīts `<dokuments> - TakeoffCraft | CadCraft`.
- **Izkārtojums.** Izkārtojuma saraksts sadaļā {{ui:Iestatījumi}} ir nolaižamais saraksts, kas rāda izvēlēto izkārtojumu.
- **Valoda.** Izvēlētā valoda tagad sasniedz lapas pašas drukātos vārdus, piemēram, Jauns, Atvērt un Saglabāt. Valodas, kas nav angļu, ir mašīntulkojuma melnraksti, līdz dzimtā valoda tos ir izlasījusi.

## Godīgi ierobežojumi

- Garuma attēlojums, svara un temperatūras mērvienības un jaunie mēroga iepriekš iestatījumi ir pārbaudīti ar testiem un lapā. Katrs panelis katrā mērvienībā nav pārbaudīts ar roku.
- Dalībnieku sarakstu ar roku nav pārbaudījusi reāla skolotāju un studentu grupa.
- Valodas, kas nav angļu, ir mašīntulkojumi.
- Windows instalētāji nav koda parakstīti (Papildinformācija, tad Palaist tomēr). macOS diska attēls nav notarizēts (ar peles labo pogu, tad Atvērta).

## Agrāk: 0.8 un 0.8.1

Šis ir tas, kas mainījās TakeoffCraft 0.8 versijā (izlaista 2026-11-01) un 0.8.1 (2026-11-02), salīdzinot ar 0.7. Simbolu leģendu tagad var saskaitīt visā kopā vienlaikus, jauns apjomu aprēķins var sākties no jūsu iepriekšējo darbu cenām, un apjomu aprēķinu var pārbaudīt pret piegādātāja krājumiem. 0.8.1 ir labojumu laidiens.

### Jaunums

**Saskaitīt visu kopā**

- **Iezīmējiet leģendu vienreiz.** {{ui:Skaitīt visu}} rīkjoslā nolasa simbolu leģendu: velciet kasti ap simboliem un blakus tiem drukātajiem nosaukumiem. Katrs simbols ir uzskaitīts ar savu attēlu un nosaukumu, un nosaukums kļūst par vienuma nosaukumu. Noņemiet atzīmi no tā, ko nevēlaties, un tad izvēlieties {{ui:Saskaitīt uz N lapām}}. Josla rāda lapu, kuru pārmeklē, {{ui:Atcelt}} aptur darbību, un lapa paliek lietojama.
- **Katra lapa vienā darbībā.** Katrs simbols tiek skaitīts katrā atvērtajā lapā. Lapa, kas zīmēta citā mērogā, tiek pārmeklēta šajā mērogā, un simboli tiek atrasti pagriezti jebkurā taisnā leņķī. Paša leģendas simboli netiek skaitīti tās lapā.
- **Pārskats pirms jebkā pievienošanas.** Katrai kopsummai ir saite uz katru lapu ("E-103: 4"), kas ved uz šo lapu. Noklikšķiniet uz kastes atradumā, lai to izslēgtu, un vēlreiz, lai to atgrieztu. Atbilstības līmenis (no 50% līdz 100%) tikai filtrē atrasto; nekas netiek meklēts no jauna.
- **Viens atsaukšanas solis.** {{ui:Pievienot N atzīmes}} izveido skaita vienumu katram simbolam ar atzīmi katrā atradumā. Vienums, kas jau ir jūsu skaita vienums ar tādu pašu nosaukumu, tiek izmantots atkārtoti. {{key:Ctrl+Z}} atsauc visus vienumus un atzīmes. Tas, ko apstiprināt, tiek padots arī sadaļai {{ui:Iemācījies}}.
- **Simboli jebkurā leņķī.** Pirms skaitīšanas atzīmējiet {{ui:Simboli jebkurā leņķī}}, lai atrastu arī simbolus, kas pagriezti citā, nevis taisnā leņķī. Meklēšana tad pagriež katru simbolu ik pēc 15 grādiem, un simbols, kas nav apaļš, var prasīt līdz sešas reizes ilgāk.
- **Kas tas ir.** Vienkārša simbolu atbilstības meklēšana jūsu pašu lapās bez apmācīta modeļa, un nekas neatstāj jūsu datoru. Uz izdomāta 200 lapu komplekta tas aizņēma 9.4 sekundes no sākuma līdz beigām pārlūkā Chrome ātrā galddatorā; reāli plānu komplekti būs lēnāki. Skatiet [Saskaitīt visu kopā](topic:count-everything).

**Cenu atmiņa no jūsu pašu darbiem**

- **TakeoffCraft atceras jūsu likmes.** Kad saglabājat apjomu aprēķinu, katrs cenotais vienums, ko izmantojat, tiek atcerēts pēc nosaukuma un tipa: materiāla likme, darba likme, atkritumi un vienība. Katram nosaukumam tiek glabāti pēdējie 12 darbi. Tas tiek glabāts šajā datorā blakus cenu bibliotēkai, nekad apjomu aprēķina failā, un nekas nekur netiek nosūtīts.
- **Sākt jaunu apjomu aprēķinu no tā.** {{ui:Cenas}} rīkjoslā katram vienumam rāda pēdējā darba likmes, tipiskās likmes un diapazonu. {{ui:Izmantot pēdējo}} vai {{ui:Izmantot tipisko}} cenot vienu vienumu, un {{ui:Piešķirt cenas N vienumiem bez cenas no atmiņas}} aizpilda katru vienumu, kuram vēl nav cenas. Katrs lietojums ir viens atsaukšanas solis.
- **Vecāki darbi.** {{ui:Mācīties no iepriekšēja apjomu aprēķina…}} atceras saglabāta apjomu aprēķina (.json) cenotos vienumus.
- **Redzēt, mainīt, aizmirst.** {{ui:Viss atcerētais}} uzskaita katru nosaukumu; miskastes poga aizmirst vienu, un {{ui:Dzēst visas cenas}} aizmirst visas. Izslēdziet {{ui:Atcerēties manas cenas, saglabājot apjomu aprēķinu}}, lai apturētu. Cena par gabalu nekad netiek ielikta vienumam par pēdu. Skatiet [Cenu atmiņa no iepriekšējiem darbiem](topic:price-memory).

**Piegādātāja krājumi un piegādes laiki**

- **Pārbaude pret piegādātāja sarakstu.** {{ui:Piegāde}} rīkjoslā ņem piegādātāja krājumu sarakstu ({{ui:Pievienot piegādātāja failu…}}), CSV vai tabulu, un pārbauda pret to, ko apjomu aprēķins vajag, ieskaitot atkritumus. Tiek glabāti līdz pieciem failiem. Nekas netiek nosūtīts, un nekas nejautā piegādātājam: jūs atnesat failu.
- **Ko tas saka.** Īsie vienumi nāk pirmie: "Trūkst 120 EA", "Piegādes laiks 21 diena", "Uz pasūtījuma", "Atšķiras mērvienība", "Nav krājuma skaitļa" vai "Krājumā". {{ui:Ilgākais vēlamais gaidīšanas laiks (dienas)}} sākas no 14.
- **Pasūtījumu saraksts.** {{ui:Pasūtījuma saraksts (CSV)}} lejupielādē īsos vienumus ar trūkstošo daudzumu, piegādātāju un piegādes laiku.
- **Cenas bibliotēkā.** Ja failā ir cenas, {{ui:Cenas bibliotēkā}} iestata katra bibliotēkas ieraksta materiāla cenu ar tādu pašu nosaukumu un mērvienību. Pārcenojiet no bibliotēkas, lai tās ievietotu apjomu aprēķinā.
- **Problēmu panelī.** Trūkums ir brīdinājums, un ilgs gaidīšanas laiks ir piezīme zem "Piegādātāja krājumi". Varat pieņemt vienu ar iemeslu, un iemesls tiek saglabāts apjomu aprēķinā. Skatiet [Pārbaudīt piegādātāja krājumus un piegādes laikus](topic:supplier-stock).

**AI asistenti**

- **Rīki visiem trim.** Ja asistentiem ir atļauts iestatījumos, asistents var nolasīt leģendu (`legend_open`), palaist skaitīšanu (`legend_count_start`, tad `legend_count_status` un `legend_count_result`) un to pievienot (`legend_count_add`, kas var vispirms priekšskatīt). Tas var nolasīt atcerētās cenas (`prices_list`) un cenot vienumus no tām (`prices_apply`, kas var vispirms priekšskatīt), un nolasīt piegādātāja pārbaudi (`supply_check`). Piegādātāja faila pievienošana paliek jūsu ziņā. Skatiet [Izmantot TakeoffCraft ar AI asistentu](topic:use-with-ai-assistants).

**Visās lietotnēs**

- **Valodas.** Kopā piecdesmit četras valodas; desmit ir jaunas (lietuviešu, latviešu, bosniešu, marati, telugu, albāņu, afrikāņu, filipīniešu, svahili un uzbeku). Valodas, kas nav angļu, ir mašīntulkojuma melnraksti, līdz dzimtā valoda tos ir izlasījusi.
- **Ievades ierīces.** {{ui:Iestatījumi}} › {{ui:Visur}} › {{ui:Ievades ierīces}} nosaka, ko dara skārienpaliktnis, peles sānu pogas, pildspalva, 3D pele, spēļu kontrolieris vai MIDI kontrolieris, katrai lietotnei vai vienai. Skatiet [Skārienpaliktņa, 3D peles vai kontroliera lietošana](common:input-devices).
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} piedāvā {{ui:Pārnest}} (sākums), {{ui:2 rindas}} un {{ui:1 rinda}}; grupas, kas neiekļaujas, ritina sāniski. Skatiet [Izkārtot paneļus](common:arrange-panels).
- **Problēmu panelis.** Koplietotais brīdinājumu un piezīmju panelis tagad satur iepriekš minēto piegādātāja krājumu pārbaudi blakus citām pārbaudēm.
- **Papildinājumi.** Papildinājumi seko jūsu kontu sarakstam. Skatiet [Papildinājumi un jūsu kontu saraksts](common:addons-basics).
- **Savienojiet savu AI.** CadCraft Studio ir centrs: savienojiet savu asistentu vienreiz visām astoņām lietotnēm. Studio pats nesatur AI.

### Labots 0.8.1

- **DWG klašu sadaļa.** DWG faila klašu sadaļa tika nolasīta kā nepareizs tips. Tas ir labots TakeoffCraft un vēl četrās lietotnēs.
- **Studio var mainīt valodu, kamēr darbojas.** Iepriekš Studio un tā iepakotie izdevumi bija tikai angļu valodā. Tas nav pārbaudīts darbvirsmas versijā uz katras platformas; pastāstiet, ja valoda nemainās.

### Vēl nav šajā versijā

- **Nav koda parakstīts.** Windows var brīdināt, un Mac datorā pirmajā reizē ar peles labo pogu noklikšķiniet un izvēlieties {{ui:Atvērta}}. Veikalu versijas (Microsoft Store, Google Play, App Store) ir apturētas, un iPad un iPhone versija netika pārbūvēta 0.8.1.
- **Studio atjauninājumi.** Windows instalētājs un Linux pakotnes pārbauda reizi dienā un vispirms jautā. Portatīvais zip tikai paziņo, un macOS un APK paši sevi neatjaunina. 0.8 macOS .dmg seko laidienam.
- **Savienojiet savu AI.** Viena klikšķa savienojums Studio iekšienē, mājā novietotais savienotājs AI pārlūkā, jūsu pašu API atslēga Studio iekšienē un publicēta MCP pakotne šajā versijā nav solīti.
- **Skaitīt visu.** Tam vajag simbolus, kas zīmēti tādā pašā veidā kā leģendā, un simbolu, pār kuru iet siena vai gara līnija, var palaist garām. Spoguļotie simboli netiek atrasti, un lapa bez mēroga, kas zīmēta citā izmērā, tiek pārmeklēta leģendas izmērā. Pārbaudiet atradumus pirmajā lapā, pirms uzticaties pārējām.
- **Piegādātāja krājumi.** Krājumu skaitļi ir tikpat aktuāli, cik fails, ko pievienojat. Pārbaude nekad neprasa piegādātājam.
- **Valodas.** Tamilu valodas lietotnes josla pārpildās.

Visu pārējo skatiet [Vēl nav izveidots](topic:not-built-yet). Iepriekšējo laidienu skatiet [Jaunumi 0.7 versijā](topic:whats-new-0-7).
