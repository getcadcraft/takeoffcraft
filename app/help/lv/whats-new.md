---
title: Kas jauns versijās 0.8 un 0.8.1
summary: Saskaitiet visu simbolu legendu visās atvērtajās lapās vienā reizē, piešķiriet vienumiem cenas pēc jūsu iepriekšējo darbu likmēm, pārbaudiet apjomu aprēķinu pret piegādātāja krājumiem un piegādes termiņiem, kā arī jaunus palīgrīkus visām trim funkcijām, kopīgās izmaiņas 0.8 versijā un 0.8.1 labojumu DWG failiem.
keywords: kas jauns, jaunumi, izlaiduma piezīmes, izmaiņu žurnāls, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, skaitīt visu, legenda, simbolu legenda, viss komplekts, cenu atmiņa, iepriekšējie darbi, pēdējais darbs, tipiskā cena, piegādātājs, krājums, piegādes termiņš, atpakaļpasūtījums, pasūtījumu saraksts, trūkums, problēmu panelis, palīgs, valodas, ievades ierīces, rīkjoslas rindas, dwg
from: a04adef6
---

Šeit ir apkopots, kas mainījies programmās TakeoffCraft 0.8 (izlaista 2026-11-01) un 0.8.1 (2026-11-02), salīdzinot ar 0.7. Simbolu legendu tagad var saskaitīt visā komplektā uzreiz, jauns apjomu aprēķins var sākties no jūsu iepriekšējo darbu cenām, un apjomu aprēķinu var pārbaudīt pret piegādātāja krājumiem. 0.8.1 ir labojumu izlaidums.

## Jaunumi

### Saskaitīt visu komplektā

- **Iezīmējiet legendu vienreiz.** {{ui:Skaitīt visu}} rīkjoslā nolasa simbolu legendu: velciet kastīti ap simboliem un drukātajiem nosaukumiem blakus tiem. Katrs simbols tiek uzskaitīts ar savu attēlu un nosaukumu, un nosaukums kļūst par vienuma nosaukumu. Noņemiet atzīmi no tā, ko nevēlaties, tad izvēlieties {{ui:Skaitīt N lapās}}. Josla rāda lapu, kuru meklē, {{ui:Atcelt}} aptur darbību, un lapa paliek izmantojama.
- **Visas lapas vienā darbībā.** Katrs simbols tiek uzskaitīts katrā atvērtajā lapā. Lapa, kas zīmēta citā mērogā, tiek meklēta šajā mērogā, un simboli tiek atrasti pagriezti jebkurā taisnā leņķī. Paša legendas simboli savā lapā netiek skaitīti.
- **Pārskatiet pirms pievienošanas.** Katram kopsummas skaitam ir saite uz katru lapu ("E-103: 4"), kas ved uz šo lapu. Noklikšķiniet uz kastītes atradumā, lai to izslēgtu, un vēlreiz, lai to atgrieztu. Atbilstības līmenis (no 50% līdz 100%) tikai filtrē atrastos; neko no jauna nemeklē.
- **Viens atsaukšanas solis.** {{ui:Pievienot N atzīmes}} izveido vienumu skaitu katram simbolam ar atzīmi katrā atradumā. Nosaukums, kas jau ir jūsu skaita vienums, tiek izmantots atkārtoti. {{key:Ctrl+Z}} atsauc visus vienumus un atzīmes. Tas, ko apstiprināt, tiek pievienots arī {{ui:Iemācījies}}.
- **Simboli jebkurā leņķī.** Atzīmējiet {{ui:Simboli jebkurā leņķī}} pirms skaitīšanas, lai atrastu arī simbolus, kas pagriezti citā, ne taisnā leņķī. Meklēšana tad pagriež katru simbolu ik pēc 15 grādiem, un simbols, kas nav apaļš, var prasīt līdz sešas reizes ilgāku laiku.
- **Kas tas ir.** Vienkārša simbolu sakritība jūsu pašu lapās bez apmācīta modeļa, un nekas neatstāj jūsu datoru. Izdomātā 200 lapu komplektā tas aizņēma 9,4 sekundes no sākuma līdz beigām pārlūkprogrammā Chrome ātrā galddatorā; reāli plānu komplekti būs lēnāki. Skatiet [Saskaitīt visu komplektā](topic:count-everything).

### Cenu atmiņa no jūsu darbiem

- **TakeoffCraft atceras jūsu likmes.** Saglabājot apjomu aprēķinu, katrs izmantotais cenotais vienums tiek atcerēts pēc nosaukuma un veida: materiāla likme, darba likme, atkritumi un mērvienība. Katram nosaukumam tiek glabāti pēdējie 12 darbi. Tas tiek glabāts šajā datorā blakus cenu bibliotēkai, nekad apjomu aprēķina failā, un nekas nekur netiek nosūtīts.
- **Sākiet jaunu apjomu aprēķinu no tā.** {{ui:Cenas}} rīkjoslā katram vienumam tiek rādītas pēdējā darba likmes, tipiskās likmes un diapazons. {{ui:Izmantot pēdējo}} vai {{ui:Izmantot tipisko}} piemēro cenu vienam vienumam, un {{ui:Piemērot cenas N vienumiem bez cenas no atmiņas}} aizpilda katru vienumu, kuram cena vēl nav. Katra izmantošana ir viens atsaukšanas solis.
- **Vecāks darbs.** {{ui:Mācīties no iepriekšēja apjomu aprēķina…}} atceras saglabāta apjomu aprēķina (.json) cenotos vienumus.
- **Redzēt, mainīt, aizmirst.** {{ui:Viss atcerētais}} parāda katru nosaukumu; atkritumu poga aizmirst vienu, un {{ui:Dzēst visas cenas}} aizmirst visus. Lai apturētu, izslēdziet {{ui:Atcerēties manas cenas, saglabājot apjomu aprēķinu}}. Cena par gabalu nekad netiek piešķirta vienumam, kas mērīts pēdās. Skatiet [Cenu atmiņa no jūsu iepriekšējiem darbiem](topic:price-memory).

### Piegādātāja krājumi un piegādes termiņi

- **Pārbaude pret piegādātāja sarakstu.** {{ui:Piegāde}} rīkjoslā ņem piegādātāja krājumu sarakstu ({{ui:Pievienot piegādātāja failu…}}), CSV vai izklājlapu, un pārbauda pret to, ko apjomu aprēķins prasa, ieskaitot atkritumus. Tiek glabāti līdz pieciem failiem. Nekas netiek nosūtīts, un nekas nejautā piegādātājam: failu atnesat jūs.
- **Ko tas parāda.** Vispirms tiek rādīti īsie vienumi: "Trūkst 120 EA", "Piegādes termiņš 21 diena", "Atpakaļpasūtījumā", "Mērvienība atšķiras", "Nav krājuma skaita" vai "Krājumā". {{ui:Ilgākais vēlamais gaidīšanas laiks (dienas)}} sākas no 14.
- **Pasūtījumu saraksts.** {{ui:Pasūtījuma saraksts (CSV)}} lejupielādē īsos vienumus ar trūkstošo daudzumu, piegādātāju un piegādes termiņu.
- **Cenas bibliotēkā.** Ja failā ir cenas, {{ui:Cenas bibliotēkā}} iestata materiāla cenu katram bibliotēkas ierakstam ar tādu pašu nosaukumu un mērvienību. Pārcenojiet no bibliotēkas, lai ienestu tās apjomu aprēķinā.
- **Problēmu panelī.** Trūkums ir brīdinājums, un ilgs gaidīšanas laiks ir piezīme, zem "Piegādātāja krājumi". Varat apstiprināt vienu ar iemeslu, un iemesls tiek saglabāts apjomu aprēķinā. Skatiet [Pārbaudīt piegādātāja krājumus un piegādes termiņus](topic:supplier-stock).

### AI palīgi

- **Rīki visiem trim.** Ja palīgi ir atļauti sadaļā {{ui:Iestatījumi}}, palīgs var nolasīt legendu (`legend_open`), veikt skaitīšanu (`legend_count_start`, pēc tam `legend_count_status` un `legend_count_result`) un to pievienot (`legend_count_add`, ko var vispirms priekšskatīt). Tas var nolasīt saglabātās cenas (`prices_list`) un piemērot cenas vienumiem no tām (`prices_apply`, ko var vispirms priekšskatīt), kā arī nolasīt piegādātāja pārbaudi (`supply_check`). Piegādātāja faila pievienošana joprojām ir jūsu uzdevums. Skatiet [Izmantot TakeoffCraft ar AI palīgiem](topic:use-with-ai-assistants).

### Visās lietotnēs

- **Valodas.** Kopā piecdesmit četras valodas; desmit ir jaunas (lietuviešu, latviešu, bosniešu, maratī, telugu, albāņu, afrikāņu, filipīniešu, svahili un uzbeku). Valodas, kas nav angļu, ir mašīntulkotas melnraksta versijas, līdz dzimtās valodas runātājs tās ir izlasījis.
- **Ievades ierīces.** {{ui:Iestatījumi}} › {{ui:Visur}} › {{ui:Ievades ierīces}} nosaka, ko dara skārienpaliktnis, peles sānu pogas, pildspalva, 3D pele, spēļu kontrolieris vai MIDI kontrolieris, visām lietotnēm vai vienai. Skatiet [Izmantot skārienpaliktni, 3D peli vai kontrolieri](common:input-devices).
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} piedāvā {{ui:Pārnest}} (sākums), {{ui:2 rindas}} un {{ui:1 rinda}}; grupas, kas neiekļaujas, ritina sānis. Skatiet [Paneļu izkārtošana](common:arrange-panels).
- **Problēmu panelis.** Kopīgajā brīdinājumu un piezīmju panelī tagad ir augstāk minētā piegādātāja krājuma pārbaude blakus pārējām pārbaudēm.
- **Papildinājumi.** Papildinājumi seko jūsu konta sarakstam. Skatiet [Papildinājumi un jūsu konta saraksts](common:addons-basics).
- **Savienojiet savu AI.** CadCraft Studio ir centrs: savienojiet savu palīgu vienreiz visām astoņām lietotnēm. Studio pati nav AI.

## Labots 0.8.1 versijā

- **DWG klašu sadaļa.** DWG faila klašu sadaļa tika nolasīta kā nepareizs tips. Tas ir labots programmā TakeoffCraft un vēl četrās lietotnēs.
- **Studio var mainīt valodu darbības laikā.** Iepriekš Studio un tās iepakotās versijas bija tikai angļu valodā. Tas nav pārbaudīts darbvirsmas versijā visās platformās; sakiet mums, ja valoda nemainās.

## Šajā versijā vēl nav

- **Nav koda parakstīts.** Windows var brīdināt, bet Mac datorā pirmoreiz noklikšķiniet ar peles labo pogu un izvēlieties {{ui:Atvērta}}. Veikalu versijas (Microsoft Store, Google Play, App Store) ir apturētas, un iPad un iPhone versija netika pārbūvēta 0.8.1 versijai.
- **Studio atjauninājumi.** Windows instalētājs un Linux pakotnes pārbauda reizi dienā un vispirms jautā. Portatīvais zip tikai informē, un macOS un APK paši neatjauninās. 0.8 macOS .dmg seko izlaidumam.
- **Savienojiet savu AI.** Viena klikšķa savienojums Studio iekšienē, iebūvētais savienotājs AI pārlūkprogrammā, jūsu pašu API atslēga Studio iekšienē un publicēta MCP pakotne šajā versijā nav solītas.
- **Saskaitīt visu.** Tai nepieciešami simboli, zīmēti tāpat kā legendā, un simbolu, pār kuru iet siena vai gara līnija, var palaist garām. Spoguļattēla simboli netiek atrasti, un lapa bez mēroga, kas zīmēta citā izmērā, tiek meklēta legendas izmērā. Pirms pārējo uzticēšanās pārbaudiet atradumus pirmajā lapā.
- **Piegādātāja krājums.** Krājuma skaitļi ir tikpat aktuāli, cik fails, ko pievienojat. Pārbaude nekad nejautā piegādātājam.
- **Valodas.** Tamil lietotnes josla pārpildās.

Viss pārējais ir [Vēl nav izveidots](topic:not-built-yet). Par iepriekšējo izlaidumu skatiet [Kas jauns 0.7 versijā](topic:whats-new-0-7).
