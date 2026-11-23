---
title: Daudzumu iegūšana no ēkas modeļa
summary: Atveriet arhitekta IFC modeli, skatiet to 3D, izvēlieties sienas, grīdas, durvis un pārējo pēc tipa, materiāla, slāņa vai izmēra un pārnesiet to skaitus, garumus, laukumus un tilpumus apjomu aprēķinā. Jaunāka modeļa kopija atjaunina tos pašus daudzumus.
keywords: modelis, modeļa apjomu aprēķins, 3D skats, noklikšķiniet uz detaļas, atrodiet rindu, materiāls, slānis, sienu slāņi, ģipškartons, siltumizolācija, durvju izmēri, logu izmēri, durvju un logu specifikācija, csv, 3d, bim, ifc, rvt, ēkas modelis, daudzumi, sienas, grīdas, durvis, logi, kolonnas, telpas, pēc tipa, pēc līmeņa, atjaunināt, jaunāks modelis, projektēšanas attīstība
from: 8c4c12c9
---

Nav jāgaida nākamais rasējumu komplekts. Kad arhitekts nosūta ēkas modeli, atveriet to šeit un ņemiet daudzumus tieši no tā. Modelis tiek nolasīts jūsu datorā; nekas nekur netiek nosūtīts.

## Soļi

1. Izvēlieties {{ui:Model}} rīkjoslā un norādiet modeļa `.ifc` failu vai atveriet to ar {{ui:Open plans}} kā jebkuru citu failu.
2. {{ui:Model takeoff}} atveras ar vienu rindu katrai kategorijai un tipam: sienas pēc sienas tipa, grīdas pēc grīdas tipa, durvis pēc durvju tipa un tā tālāk. Katrā rindā redzams tās skaits un vienības, kurās šī kategorija tiek mērīta.
3. Iestatiet {{ui:Group by}} uz {{ui:Category}}, lai iegūtu ātru kopsummu, vai uz {{ui:Category, type and level}}, lai sadalītu katru tipu pa stāviem.
4. Noņemiet atzīmi no rindām, kuras nevēlaties. {{ui:Find}} sašaurina sarakstu. Rindas atzīmes noņemšana paslēpj arī tās detaļas 3D attēlā.
5. Piešķiriet modelim {{ui:Model name}}, ko paturēsiet visam darbam, piemēram, projekta nosaukumu.
6. Izvēlieties {{ui:Add to the takeoff}}. Katrs daudzums kļūst par tipizētu daudzumu vienumu sarakstā. Nosauciet to, cenojiet un pievienojiet mezglus kā jebkuru citu vienumu.

## Skatīt modeli 3D

{{ui:Show the model in 3D}} zīmē modeli virs tabulas, katrai rindai citā krāsā (krāsu plāksnīte blakus rindas nosaukumam). Velciet, lai pagrieztu, turiet {{key:Shift}} un velciet, lai pārvietotu, izmantojiet ritentiņu tālummaiņai, un izvēlieties {{ui:Fit}} vai {{ui:Reset}}, lai atgrieztos.

- **Noklikšķiniet uz detaļas** attēlā, un tās rinda tiek atlasīta tabulā, visas šīs rindas detaļas tiek izgaismotas, pārējās ir blāvākas. Noklikšķiniet uz tās pašas detaļas vēlreiz, un, ja tā atrodas vairākās rindās (siena savos slāņos), tiek atlasīta nākamā rinda.
- **Noklikšķiniet uz rindas** tabulā, lai izgaismotu tās detaļas. Noklikšķiniet vēlreiz vai uz tukšas vietas attēlā, lai notīrītu.
- Telpas netiek zīmētas, jo telpas tilpums paslēptu ēku.
- Ļoti liels modelis dažām detaļām saglabā tikai kasti, lai tas ietilptu atmiņā; panelī ir rādīts, cik to ir. Skaitļi nemainās.

Ja šis dators nevar zīmēt 3D, tabula darbojas kā līdz šim.

## Grupēšana pēc materiāla, slāņa vai izmēra

{{ui:Group by}} ir vēl trīs izvēles:

- {{ui:Category and material}}: siena, grīda vai jumts, kas veidots no slāņiem, katra slāņa materiālam dod savu rindu, tāpēc ģipškartonu, statņus un siltumizolāciju var cenot atsevišķi. Daļa ēkā ar vienu materiālu saņem šī materiāla rindu, bet daļa bez materiāla tiek ievietota rindā "Bez materiāla".
- {{ui:Category and layer}}: tas pats, bet rindā ir slāņa biezums (piemēram, "Siltumizolācija, 100 mm").
- {{ui:Category, type and door or window size}}: durvis un logi tiek sadalīti pēc platuma un augstuma (piemēram, 3'-0" × 6'-8" vai 914 × 2,032 mm).

Slāņa gadījumā laukums ir paša sienas virsma (vai grīdas vai jumta plāna vai virsmas laukums), bet tilpums ir šis laukums, reizināts ar slāņa biezumu. Rindas piezīmē teikts, cik skaitļu nāca no slāņiem. Viena sienas slāņu tilpumi kopā dod tilpumu, ko modelis tai norāda.

## Rindu vai durvju un logu saglabāšana kā CSV

{{ui:Save rows as CSV}} saglabā atzīmētās rindas ar mērvienībām katrā virsrakstā izklājlapai. {{ui:Save openings schedule as CSV}} (tikai tad, ja modelī ir durvis vai logi) saglabā katru durvju un logu pēc tipa, līmeņa un izmēra ar tā skaitu.

## Ko mēra

| Kategorija | Daudzumi |
|---|---|
| Sienas | skaits, garums, sienas laukums (viena virsma, atvērumi atskaitīti), tilpums |
| Grīdas, plātnes, griesti un citi segumi | skaits, plāna laukums, tilpums |
| Jumti | skaits, plāna laukums, jumta virsma, tilpums |
| Pamati | skaits, plāna laukums, tilpums |
| Kolonnas, sijas un citi elementi | skaits, garums pa elementu, tilpums |
| Margas, caurules, gaisa vadi un kabeļu trases | skaits, garums |
| Kāpnes | skaits, tilpums |
| Telpas | skaits, grīdas laukums, tilpums |
| Durvis, logi un viss pārējais | skaits |

Ja modeļa autors daudzumu ir norādījis failā, tiek izmantots tas skaitlis. Citādi skaitlis tiek izmērīts no elementa formas. Katram daudzumam ir piezīme, kas norāda, kurš no abiem variantiem ir izmantots un cik elementu devuši skaitli.

:::note
Sienas garums, kas izmērīts no formas, iet no gala līdz galam, tāpēc divas sienas, kas stūrī pārklājas, abas ietver stūri. Tilpumam vajag slēgtu formu: elements, kura forma nav slēgta, tiek uzskaitīts, bet tilpumu nedod. Līkta vai stūrota sienas elements tiek mērīts kā puse no visām tā vertikālajām virsmām, un piezīmē par to ir norādīts.
:::

## Kad ierodas jaunāks modelis

Atveriet jaunāko failu un ierakstiet to pašu {{ui:Model name}}. Pirms kaut ko pievienot, panelis parāda, cik daudzumu ir jauni, cik ir mainījušies un no kādām vērtībām uz kādām, kā arī kuri daudzumi no iepriekšējās kopijas vairs nav modelī. Izvēlieties {{ui:Add to the takeoff}}: mainītie daudzumi iegūst jaunos skaitļus, bet jūsu nosaukumi, likmes, atkritumi un mezgli paliek. Daudzumi, kas modelī vairs nav, saglabā vecos skaitļus; noņemiet tos paši, ja projektētājs tos ir atmetis.

Daudzumi tiek atpazīti pēc tipu un līmeņu nosaukumiem. Ja arhitekts pārdēvē sienas tipu, tas ierodas kā jauns daudzums, bet vecais tiek uzskaitīts kā pazudis.

## Faili, ko šis nolasa

IFC faili (IFC2x3, IFC4 un IFC4.3). IFC fails ar ceļiem, dzelzceļiem vai tiltiem joprojām ieved to infrastruktūras daudzumus tieši, kā līdz šim.

TakeoffCraft šajā versijā nenolasa `.rvt` failus. Ja arhitekts strādā programmā Revit, lūdziet modeļa eksportu IFC formātā (Fails, Eksportēt, IFC) un atveriet to.

Viens modelis vienā reizē var ieviest līdz 500 daudzumiem. Ja ir vairāk, noņemiet atzīmi no rindām vai grupējiet pēc kategorijas.
