---
title: Kas jauns 0.9 versijā (agrāk)
summary: Garumus var lasīt metros, centimetros vai milimetros, metriskos laukumus m2 ar sienu laukumu, mēroga iepriekšējos iestatījumus 1:75 un 1:150, svara un temperatūras mērvienības, loku ar desmit metodēm, kā arī reāllaika kursorus, sekošanu un dalībnieku sarakstu.
keywords: kas jauns 0.9, agrāks laidiens, kas jauns, izlaiduma piezīmes, izmaiņu žurnāls, 0.9, rādīt garumus kā, metri, centimetri, milimetri, metriski, sekot Global, mērvienības, rādāmās mērvienības, m2, kvadrātmetri, sienas laukums, mēroga iepriekšējie iestatījumi, 1:75, 1:150, svars, kilogrami, kg, tonna, t, lb, temperatūra, Celsijs, Fārenheits, loks, loka metodes, 3 punktu loks, rādiuss, reāllaiks, kursori, sekot, dalībnieku saraksts, klase, rīku padomi, izkārtojums, kas jauns, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, uzskaitīt visu, leģenda, simbolu leģenda, visa kopa, cenu atmiņa, iepriekšējie darbi, pēdējais darbs, tipiska cena, piegādātājs, krājums, piegādes laiks, iepriekšpasūtījums, pasūtījuma saraksts, trūkums, problēmu panelis, palīgs, valodas, ievades ierīces, rīkjoslas rindas, dwg
from: f4322ba2
---

Šis ir tas, kas mainījās TakeoffCraft 0.9 versijā salīdzinājumā ar 0.8.1. Tā ir neliela versija šai lietotnei: garumus tagad var lasīt metros, centimetros vai milimetros, laukumi un mērogi metriskam darbam darbojas pareizi, un Loks ir ar desmit veidiem, kā zīmēt. Tiešsaistes sesijās tagad redzams arī, kur atrodas katrs dalībnieks.

## Jauns

### Garumus var lasīt metros, centimetros vai milimetros

- **Rādīt garumus kā.** {{ui:Settings}} › {{ui:TakeoffCraft}} ir {{ui:Show lengths as}} ar {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm un mm. {{ui:Follow Global}} izmanto metrisko garuma mērvienību, ko atzīmējāt {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, un pēdas un collas, ja nekas nav atzīmēts. Tas maina garumu attēlojumu rasējumā, statusa joslā un paneļos, tostarp augstumos, dziļumā, biezumā un līmeņos. Skaitlis bez mērvienības, ievadīts augstuma laukā, tiek nolasīts rādītajā mērvienībā.
- **Tikai attēlojums.** Daudzumi, izmaksas un eksporti tiek aprēķināti no precīziem garumiem. Izvēle 1/16, 1/8 un 1/4 collas parādās tikai pēdām un collām. Sk. [Rādīt garumus metros](topic:show-lengths-in-meters).
- **Svara mērvienības.** Vienumu {{ui:Typed quantity (no drawing)}} tagad var norādīt lb, TON, kg vai t, un to var cenot par vienību.
- **Temperatūra.** Katram vienumam vienumu redaktorā ir neobligāts lauks {{ui:Temperature}}, ko ievada grādos C vai F. {{ui:Show temperatures as}} iestatījumos {{ui:Settings}} › {{ui:TakeoffCraft}} piedāvā {{ui:Follow Global}}, °C vai °F.

### Laukumi un mērogi metriskam darbam

- **Laukumi m2 rasējumā.** Laukums, kas izmērīts ar metrisku vienumu, rasējuma birkā un atzīmju panelī, kā arī tabulā tagad ir norādīts m2, nevis SF. Noteikums: m2, ja vienums ir cenots metriskajās vienībās vai garumi rādīti m, cm vai mm, citādi SF.
- **Sienas laukums.** Lineārs vienums ar augstumu rāda arī savu sienas laukumu (garums reizināts ar augstumu) vienumu sarakstā un kā piezīmes rindu zem daudzumu tabulas pa vienumiem.
- **Mēroga iepriekšējie iestatījumi 1:75 un 1:150.** Tie ir sarakstā {{ui:Preset}} grupā {{ui:Scale}}, kurā tagad ir 32 mērogi. Sk. [Mēroga iepriekšējie iestatījumi](topic:scale-presets).

### Loks ar desmit metodēm

- Kamēr {{ui:Arc}} ir ieslēgts (rīkjoslas poga vai {{key:R}}), lapas joslā parādās lauks {{ui:Arc method}} ar šādām iespējām: 3 punktu; Sākums, Centrs, Beigas; Sākums, Centrs, Leņķis; Sākums, Centrs, Garums; Sākums, Beigas, Leņķis; Sākums, Beigas, Virziens; Sākums, Beigas, Rādiuss; Centrs, Sākums, Beigas; Centrs, Sākums, Leņķis; Centrs, Sākums, Garums. Leņķi, garumu, rādiusu un virzienu var noklikšķināt vai ievadīt. Tas darbojas lineārās līniju virknēs, laukumos un izgriezumos. Faili, kas saglabāti pirms 0.9, atveras tādi paši. Sk. [Zīmēt lokus ar desmit metodēm](topic:draw-arcs-ten-methods).

### Darbs kopā

- **Redzēt citu kursorus.** Tiešsaistes sesijā katras personas rādītājs rasējumā tiek rādīts ar viņas vārdu un krāsu, un ap atzīmēm, ko persona atlasījusi, ir punktēts rāmis. Cilvēki citā lapā ir uzskaitīti ar šīs lapas nosaukumu. Sk. [Strādāt reāllaikā kopā ar citiem](topic:work-live).
- **Sekot personai un dalībnieku saraksts.** Poga {{ui:People}} tiešsaistes sesijā uzskaita katru dalībnieku ar rīku, ko viņš lieto, lapu, kurā atrodas, un to, kad pēdējo reizi rediģējis. {{ui:Follow}} pārvieto jūsu skatu kopā ar viņa skatu, un saimnieks var izmantot {{ui:Ask everyone to follow me}}. Sk. [Sekot kolēģim tiešsaistes sesijā](topic:follow-a-teammate).

## Visās lietotnēs

- **Rīku padomi un sākuma padoms.** Teksts, kas parādās, novietojot kursoru virs pogas, ir Bootstrap rīku padoms, un sākuma padomu var aizvērt.
- **Ritināmas cilņu joslas.** Paneļa cilņu josla, kas neietilpst, tagad ritina, nevis tiek apgriezta.
- **Cilņu nosaukumi.** Pārlūka cilnē redzams `<document> - TakeoffCraft | CadCraft`.
- **Izkārtojums.** Izkārtojumu saraksts iestatījumos {{ui:Settings}} ir nolaižamais saraksts, kurā redzams izvēlētais izkārtojums.
- **Valoda.** Izvēlētā valoda tagad attiecas arī uz vārdiem, ko pati lapa izvada, piemēram, Jauns, Atvērt un Saglabāt. Valodas, kas nav angļu, ir mašīntulkojuma melnraksti, līdz tos izlasījis dzimtās valodas runātājs.

## Godīgi ierobežojumi

- Garumu attēlojums, svara un temperatūras mērvienības un jaunie mērogu iepriekšējie iestatījumi ir pārbaudīti ar testiem un lapā. Nav manuāli pārbaudīts katrs panelis katrā mērvienībā.
- Dalībnieku saraksts nav manuāli pārbaudīts ar reālu skolotāju un studentu klasi.
- Valodas, kas nav angļu, ir mašīntulkojuma melnraksti.
- Windows instalētāji nav koda parakstīti (Papildinformācija, tad Palaist tomēr). Macintosh diska attēls nav notarizēts (peles labā poga, tad {{ui:Open}}).

## Iepriekš: 0.8 un 0.8.1

Šis ir tas, kas mainījās TakeoffCraft 0.8 (izlaists 2026-11-01) un 0.8.1 (2026-11-02) versijā salīdzinājumā ar 0.7. Simbolu leģendu tagad var uzskaitīt visā kopā vienlaikus, jauns apjomu aprēķins var sākties no jūsu iepriekšējo darbu cenām, un apjomu aprēķinu var pārbaudīt pret piegādātāja krājumu. 0.8.1 ir labojumu versija.

### Jauns

**Uzskaitīt visu kopā**

- **Vienreiz ierakstiet leģendu.** {{ui:Count everything}} rīkjoslā nolasa simbolu leģendu: velciet rāmi ap simboliem un blakus tiem drukātajiem nosaukumiem. Katrs simbols tiek uzskaitīts ar savu attēlu un nosaukumu, un nosaukums kļūst par vienuma nosaukumu. Noņemiet atzīmi no tā, ko nevēlaties, un tad izvēlieties {{ui:Count on N sheets}}. Josla rāda meklējamo lapu, {{ui:Cancel}} aptur darbību, un lapa paliek izmantojama.
- **Visas lapas vienā reizē.** Katrs simbols tiek uzskaitīts katrā atvērtajā lapā. Lapa, kas zīmēta citā mērogā, tiek meklēta šajā mērogā, un simboli tiek atrasti pagriezti jebkurā taisnā leņķī. Paša leģendas simboli savā lapā netiek uzskaitīti.
- **Pārskatiet, pirms kaut kas tiek pievienots.** Katrai kopsummai ir saite uz katru lapu ("E-103: 4"), kas ved uz šo lapu. Noklikšķiniet uz rāmja pie atrastā, lai to izslēgtu, un vēlreiz, lai to atgrieztu. Atbilstības līmenis (no 50 % līdz 100 %) tikai filtrē atrasto; neko nemeklē no jauna.
- **Viens atsaukšanas solis.** {{ui:Add N marks}} izveido uzskaites vienumu katram simbolam ar atzīmi katrā atradumā. Nosaukums, kas jau ir jūsu uzskaites vienums, tiek izmantots atkārtoti. {{key:Ctrl+Z}} atsauc visus vienumus un atzīmes. Tas, ko apstiprināt, tiek pievienots arī {{ui:Learned}}.
- **Simboli jebkurā leņķī.** Pirms uzskaites atzīmējiet {{ui:Symbols at any angle}}, lai atrastu arī simbolus, kas pagriezti citā, nevis taisnā leņķī. Meklēšana tad pagriež katru simbolu ik pēc 15 grādiem, un simbols, kas nav apaļš, var prasīt līdz sešreiz ilgāku laiku.
- **Kas tas ir.** Vienkārša simbolu saskaņošana jūsu pašu lapās, bez apmācīta modeļa, un nekas neatstāj jūsu datoru. Izdomātā kopā ar 200 lapām tas aizņēma 9,4 sekundes no sākuma līdz beigām pārlūkā Chrome ātrā galddatorā; reālās rasējumu kopas būs lēnākas. Sk. [Uzskaitīt visu kopā](topic:count-everything).

**Cenu atmiņa no jūsu pašu darbiem**

- **TakeoffCraft atceras jūsu likmes.** Saglabājot apjomu aprēķinu, katrs izmantotais cenotais vienums tiek atcerēts pēc nosaukuma un tipa: materiāla likme, darba likme, atkritumi un vienība. Katram nosaukumam tiek saglabāti pēdējie 12 darbi. Tā tiek glabāta šajā datorā blakus cenu bibliotēkai, nekad apjomu aprēķina failā, un nekur nekas netiek sūtīts.
- **Sākt jaunu apjomu aprēķinu no tās.** {{ui:Prices}} rīkjoslā katram vienumam tiek rādītas pēdējā darba likmes, tipiskās likmes un diapazons. {{ui:Use last}} vai {{ui:Use typical}} cenot vienu vienumu, un {{ui:Price N unpriced items from memory}} aizpilda katru vienumu, kuram vēl nav cenas. Katra izmantošana ir viens atsaukšanas solis.
- **Vecāks darbs.** {{ui:Learn from a past takeoff…}} atceras cenotos vienumus no saglabāta apjomu aprēķina (.json).
- **Redzēt, mainīt, aizmirst.** {{ui:Everything remembered}} uzskaita katru nosaukumu; dzēšanas poga aizmirst vienu, un {{ui:Clear all prices}} aizmirst visu. Lai to apturētu, izslēdziet {{ui:Remember my prices when I save a takeoff}}. Cena par gabalu nekad netiek pielikta vienumam, kas cenots par pēdu. Sk. [Cenu atmiņa no jūsu iepriekšējiem darbiem](topic:price-memory).

**Piegādātāja krājumi un piegādes laiki**

- **Pārbaudiet pret piegādātāja sarakstu.** {{ui:Supply}} rīkjoslā ņem piegādātāja krājumu sarakstu ({{ui:Add a supplier file…}}), CSV vai izklājlapu, un pārbauda, ko apjomu aprēķins vajag, ieskaitot atkritumus. Tiek saglabāti līdz pieciem failiem. Nekas netiek nosūtīts un nekas neprasa piegādātājam: failu atnesat jūs.
- **Ko tas saka.** Īsie vienumi ir pirmie: "Trūkst par 120 EA", "Piegādes laiks 21 diena", "Iepriekšpasūtījums", "Atšķirīga mērvienība", "Nav krājuma skaita" vai "Krājumā". {{ui:Longest wait wanted (days)}} sākas ar 14.
- **Pasūtījuma saraksts.** {{ui:Order list (CSV)}} lejupielādē trūkstošos vienumus ar trūkstošo daudzumu, piegādātāju un piegādes laiku.
- **Cenas bibliotēkā.** Ja failā ir cenas, {{ui:Prices into the Library}} iestata materiāla cenu katram bibliotēkas ierakstam ar tādu pašu nosaukumu un vienību. Pārcenojiet no bibliotēkas, lai tās ienestu apjomu aprēķinā.
- **Problēmu panelī.** Trūkums ir brīdinājums, bet ilgs gaidīšanas laiks ir piezīme, abi zem "Piegādātāja krājumi". Vienu no tiem var pieņemt ar iemeslu, un iemesls tiek saglabāts apjomu aprēķinā. Sk. [Pārbaudīt piegādātāja krājumus un piegādes laikus](topic:supplier-stock).

**AI palīgi**

- **Rīki visiem trim.** Ja iestatījumos {{ui:Settings}} palīgi ir atļauti, palīgs var nolasīt leģendu (`legend_open`), veikt uzskaiti (`legend_count_start`, tad `legend_count_status` un `legend_count_result`) un to pievienot (`legend_count_add`, ko var vispirms priekšskatīt). Tas var nolasīt saglabātās cenas (`prices_list`) un cenot vienumus pēc tām (`prices_apply`, ko var vispirms priekšskatīt), kā arī nolasīt piegādātāja pārbaudi (`supply_check`). Piegādātāja faila pievienošana paliek jūsu ziņā. Sk. [Lietot TakeoffCraft ar AI palīgiem](topic:use-with-ai-assistants).

**Visās lietotnēs**

- **Valodas.** Kopā piecdesmit četras valodas; desmit ir jaunas (lietuviešu, latviešu, bosniešu, marathi, telugu, albāņu, afrikāņu, filipīniešu, svahili un uzbeku). Valodas, kas nav angļu, ir mašīntulkojuma melnraksti, līdz tos izlasījis dzimtās valodas runātājs.
- **Ievades ierīces.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} nosaka, ko dara skārienpaliktnis, peles sānu pogas, pildspalva, 3D pele, spēļu kontrolieris vai MIDI kontrolieris, visām lietotnēm vai vienai. Sk. [Lietot skārienpaliktni, 3D peli vai kontrolieri](common:input-devices).
- **Rīkjoslas rindas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} piedāvā {{ui:Wrap}} (sākums), {{ui:2 rows}} un {{ui:1 row}}; grupas, kas neietilpst, ritina sānis. Sk. [Sakārtot paneļus](common:arrange-panels).
- **Problēmu panelis.** Kopīgais brīdinājumu un piezīmju panelis tagad satur iepriekš minēto piegādātāja krājumu pārbaudi blakus citām pārbaudēm.
- **Papildinājumi.** Papildinājumi seko jūsu konta sarakstam. Sk. [Papildinājumi un jūsu konta saraksts](common:addons-basics).
- **Pieslēdziet savu AI.** CadCraft Studio ir centrs: pieslēdziet savu palīgu vienreiz visām astoņām lietotnēm. Studio pati AI nesatur.

### Labots 0.8.1

- **DWG klašu sadaļa.** DWG faila klašu sadaļa tika nolasīta kā nepareizs tips. Tas ir labots TakeoffCraft un vēl četrās lietotnēs.
- **Studio var mainīt valodu, kamēr darbojas.** Līdz šim Studio un tās paketētās versijas bija tikai angļu valodā. Tas nav pārbaudīts darbvirsmas versijā visās platformās; pastāstiet, ja valoda nemainās.

### Vēl nav šajā versijā

- **Nav koda parakstīts.** Windows var brīdināt, un Mac datorā pirmoreiz noklikšķiniet ar peles labo pogu un izvēlieties {{ui:Open}}. Veikalu versijas (Microsoft Store, Google Play, App Store) ir apturētas, un iPad un iPhone versija netika pārbūvēta 0.8.1 versijai.
- **Studio atjauninājumi.** Windows instalētājs un Linux pakotnes pārbauda reizi dienā un vispirms jautā. Portatīvais zip tikai paziņo, bet macOS un APK paši neatjaunojas. 0.8 macOS .dmg seko izlaidumam.
- **Pieslēdziet savu AI.** Viena klikšķa pieslēgums Studio iekšienē, mājas savienotājs AI pārlūkā, jūsu pašu API atslēga Studio iekšienē un publicēta MCP pakotne šajā versijā nav solīta.
- **Uzskaitīt visu.** Tam vajag simbolus, kas zīmēti tāpat kā leģendā, un simbolu, pa kuru iet siena vai gara līnija, var palaist garām. Spoguļattēlotie simboli netiek atrasti, un lapa bez mēroga, kas zīmēta citā izmērā, tiek meklēta leģendas izmērā. Pirms uzticaties pārējam, pārbaudiet atradumus pirmajā lapā.
- **Krājumi.** Krājumu skaitļi ir tikpat aktuāli, cik fails, ko pievienojat. Pārbaude nekad nejautā piegādātājam.
- **Valodas.** Tamilu valodas lietotnes josla pārsniedz robežas.

Pārējais ir [Vēl nav izveidots](topic:not-built-yet). Iepriekšējam laidienam skatiet [Kas jauns 0.7](topic:whats-new-0-7).
