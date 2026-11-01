---
title: Kas jauns versijā 0.7
summary: DWG un DXF rasējumi atveras kā lapas ar savu mērogu, precīzi skaitļi un garumi no paša rasējuma, izvēlētais apakšuzņēmēja piedāvājums kā pakotnes cena, piedāvājumu ielūgumi ar slēgtām cenām, palīgrīki rasējumiem un USD no 3D pārbaudes skata.
keywords: kas jauns, jaunumi, laidiena piezīmes, izmaiņu žurnāls, izmaiņas, 0.7, versija, jaunas funkcijas, dwg, dxf, rasējums, izkārtojumi, modeļa telpa, rasējuma mērogs, skaitīt pēc rasējuma, cad skaitīšana, bloki, dinamiskie bloki, atribūti, slāņi, xref, saistīts rasējums, izmērīt rasējumu, polilīnija, svītrojums, atzīmēts pdf, izvēlētais piedāvājums, izmantot piedāvājumu, nosūtīt cenu aptaujai, piedāvājuma ielūgums, slēgti piedāvājumi, piedāvājumu atvēršana, novēlots piedāvājums, apakšuzņēmēju ieraksti, csv, asistents, mcp, usd, usdz, mērvienības, mērvienību saraksti, kompakts, paneļi, dialogi, portugāļu
from: ad4f0df1
---

Šīs ir izmaiņas TakeoffCraft 0.7 versijā, salīdzinot ar 0.6. Rasējumi tagad atveras tādi, kādi tie ir, bez iepriekšējas drukāšanas uz PDF, un piedāvājumu pakete var tikt nosūtīta apakšuzņēmējiem un atgriezties ar cenām.

## Jaunumi

### DWG un DXF rasējumi

- **Rasējuma atvēršana kā lapas.** {{ui:Open plans}} grupā {{ui:File}} ({{key:Mod+O}} vai nometot failus) pieņem DWG un DXF rasējumus blakus PDF. Modeļa telpa un katrs izkārtojums kļūst par lapām sarakstā {{ui:Sheets}}, un apjomu aprēķins var aptvert rasējumus un PDF kopā. Nekas netiek augšupielādēts. Skatiet [DWG vai DXF rasējuma atvēršana](topic:open-a-drawing).
- **Mērogs nāk no rasējuma.** Izkārtojums sākas ar tā lielākā skata loga mērogu, nosaukts kā iepriekš iestatīts, ja tāds ir, piemēram, 1/2" = 1'-0". Modelis sākas rasējuma mērvienībās. Rasējums bez mērvienībām rāda "Nav mēroga", līdz to kalibrējat. {{ui:Calibrate}}, {{ui:Check}} un {{ui:Preset}} joprojām ir svarīgākie. Skatiet [Mērogs](topic:open-a-drawing#the-scale).
- **Slāņi un saistītie rasējumi.** {{ui:Layers}} lapas joslā rāda vai slēpj rasējuma slāņus. Slāņi, ko fails izslēdzis vai iesaldējis, sākotnēji ir paslēpti un netiek ieskaitīti, ja vien to neizvēlaties. Saistītais rasējums (xref), atvērts blakus savam galvenajam rasējumam, tiek uzzīmēts un ieskaitīts tur, kur tas ievietots; kamēr tas nav atvērts, statusa josla norāda, kas trūkst. Skatiet [Slāņi](topic:open-a-drawing#layers).
- **Atzīmēts PDF darbojas no rasējuma.** {{ui:Export}} › {{ui:Marked PDF}} vispirms uzzīmē rasējuma atzīmētās lapas kā PDF, tāpēc kopija rāda jūsu atzīmes un leģendu bez drukāšanas soļa. Tas tiek zīmēts melnā krāsā vai rasējuma krāsās, bez drukas stilu tabulām. Skatiet [Atzīmēts PDF](topic:export-estimate#a-marked-pdf).

### Precīzi skaitļi un garumi no rasējuma

- **Skaitiet to, kas rasējumā norādīts.** {{ui:CAD count}} lapas joslā skaita bloku pēc nosaukuma (ieskaitot iekļautos blokus, dinamisko bloku stāvokļus un bloku masīvus), visu vienu tipu slānī vai teksta vai atribūta vērtību. Tas skaita to, ko lapa rāda, vai visu rasējumu vienu reizi. Atzīmju pievienošana ir viens atsaukšanas solis, un atkārtota skaitīšana pievieno tikai jauno. {{ui:Auto count}} paliek PDF un simboliem, kas nav bloki. Skatiet [Skaitīšana no rasējuma](topic:count-from-a-drawing).
- **Mērīšana pēc paša rasējuma līnijām.** {{ui:Measure drawing}} ņem līnijas, lokus, polilīnijas, riņķus, svītrojumus un ciešos ķermeņus, ko noklikšķināt vai atlasāt ar logu, kā atzīmes lineārajam vai laukuma vienumam. Loki, izliekumi un svītrojuma caurumi tiek iegūti precīzi; elipses un splaini tiek mērīti ar smalkiem akordiem, un josla to norāda. Skatiet [Mērīšana no rasējuma](topic:measure-from-a-drawing).

### Piedāvājumi

- **Apakšuzņēmēja piedāvājuma izmantošana kā pakotnes cena.** {{ui:Export}} › {{ui:Bid packages and leveling…}} piedāvājumam izvēlieties {{ui:Use}}. Pakotnes vienumi paliek kā daudzumi, viena rinda **Izvēlētais piedāvājums** nes cenu, vienumi, ko piedāvājums neietver, paliek par jūsu izmaksām, un virsizmaksas, peļņa un galvojums attiecas uz to. Piedāvājuma pārslēgšana ir viens atsaukšanas solis; darba grāmata un piedāvājumu kopsavilkums to iekļauj. Skatiet [Piedāvājuma izmantošana kā pakotnes cena](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Pakotnes nosūtīšana cenu aptaujai.** Zem pakotnes {{ui:Send for bids…}} katram apakšuzņēmējam pa e-pastu nosūta saiti uz lapu, kurai nav vajadzīgs konts: viņi redz darba apjomu un lapas kā PDF, katrā rindā ieraksta cenu vai atzīmē, ka tā nav iekļauta, pievieno piezīmes un līdz trim failiem vai atsakās. {{ui:Get prices}} ievieto atgrieztās cenas izlīdzināšanas lapā, atzīmētas kā **web**. Nosūtīšana ir pieejama tikai kontiem, kuriem CadCraft komanda ir atļāvusi, kamēr tā tiek testēta (skatiet zemāk). Skatiet [Pakotnes nosūtīšana cenu aptaujai](topic:bid-invitations).
- **Slēgti līdz atvēršanai.** Cenas var paturēt slēgtas līdz atvēršanas laikam, ko iestatāt: līdz tam neviens cenu neredz, arī jūs. Atvēršanas brīdī visi piedāvājumi parādās uzreiz, un piedāvājums, kas atnācis pēc termiņa, tiek atzīmēts kā novēlots. Skatiet [Slēgti piedāvājumi un atvēršana](topic:bid-invitations#sealed-bids-and-the-opening).
- **Apakšuzņēmēju ieraksti.** Jūsu konts vietnē getcadcraft.com glabā katra uzņēmuma kontaktus, nozares, kvalifikācijas atbildes un apdrošināšanas un licenču datumus (atzīmēti, ja datums jau ir pagājis vai iestājas 30 dienu laikā), kopā ar tā iepriekšējiem piedāvājumiem. Importējiet un eksportējiet tos kā CSV un izvēlieties tos, kad nosūtāt pakotni. Skatiet [Vietnē](topic:bid-invitations#on-the-website).

### MI asistenti

- **Asistenti var papildināt apjomu aprēķinu.** Ar atzīmētu **Rediģēt** jūsu pašu asistents var pievienot vienumus (`items_add`) un izmērīt posmus, laukumus un skaitus lapā (`marks_add`; garumi un laukumi tikai lapā ar mērogu), katrs izsaukums ir viens atsaukšanas solis.
- **Asistenta rīki rasējumiem.** Atvērtā DWG vai DXF asistents var uzskaitīt tā lapas un to, ko var skaitīt, precīzi saskaitīt, pievienot skaitīšanas atzīmes un mērīt pēc rasējuma ģeometrijas. Bez atvērta TakeoffCraft CadCraft MCP serveris atver rasējumu kā jaunu apjomu aprēķinu un saglabā to, un `cadcraft count` skaita no komandrindas. Skatiet [Ko asistents var pieprasīt](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D pārbaudes skats kā USD.** {{ui:USD package (.usdz)}} blakus {{ui:GLB}} 3D pārbaudes skatā ieraksta katru sienu, pārsegumu, plāksni, skaitīšanas stabu un posmu kā atsevišķu objektu, nosauktu pēc tā vienuma un ar tā daudzumu metros. Arī asistents to var eksportēt (`usd_export`). Skatiet [3D pārbaudes skata eksportēšana kā USD](topic:usd).

## Katrā lietotnē

- **Mērvienības.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ir pa vienam sarakstam garumam, laukumam, tilpumam, leņķim un slīpumam, ar precīzajiem izmēriem, ko dod mērvienību definīcijas (ASV topogrāfiskā pēda ir atsevišķa mērvienība). Izslēdziet mērvienības, ko nekad neizmantojat, un tās pazūd no sarakstiem; atzīmējiet vienu ar zvaigznīti, un jaunais darbs sākas tajā. Fails vienmēr saglabā savu mērvienību. TakeoffCraft vienuma {{ui:Unit}} saraksti seko slēdžiem, jauns vienums sākas ar atzīmēto garuma vai laukuma mērvienību, jumta kvadrāti (SQ), akri un hektāri ir jaunas laukuma mērvienības, un garuma lodziņš pieņem jebkuras mērvienības apzīmējumu, piemēram, `3 yd`. Skatiet [Mērvienības, ierakstītas vērtības un mērvienību saraksti](common:unit-lists).
- **Blīvāks izkārtojums un paneļi, ko var paslēpt.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} ietilpina ekrānā vairāk (skārienekrāni un tālruņi saglabā lielās pogas). Katram sānu panelim ir šaura virsraksta josla: velciet to, lai piestiprinātu vai atbrīvotu paneli, nometiet to uz cita paneļa joslas, lai kopīgotu vienu rāmi kā cilnes, piespraudiet to, lai tas slīd līdz malai, vai paslēpiet un atgrieziet no malas. Skatiet [Paneļu izkārtošana](common:arrange-panels#make-the-layout-denser).
- **Dialoglodziņus var pārvietot.** Velciet dialoglodziņu aiz tā virsraksta joslas, lai tas neaizsedz rasējumu; tas atgriežas tur, kur to atstājāt. Veiciet dubultklikšķi uz virsraksta joslas, lai to atkal centrētu. Skatiet [Dialoglodziņa pārvietošana](common:arrange-panels#move-a-dialog).
- **Receptes MI asistentiem.** Desmit izstrādāti pieprasījumi jūsu pašu asistentam (sakārtot rasējumu, izdrukāt komplektu, pārbaudīt rasējumus, uzdot modelim jautājumus, saskaitīt apjomu aprēķinu, izmēģināt detaļas variantu…), katrs ar rīkiem, ko tas izsauc, un atļaujām, kas tam nepieciešamas, un katrs atkārtots mūsu testos. Lietotnēs MI nav iekļauts. Skatiet [Receptes MI asistentiem](common:assistants-recipes).
- **Valodas.** **Português (Portugal)** ir jauns sadaļā {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Tā, **Português (Brasil)**, **Español (México)** un **Bahasa Indonesia** tagad ir ar visiem lietotņu vārdiem, kā melnraksti, ko dzimtās valodas runātājs vēl nav pārskatījis. Palīdzības tēmas ir angļu valodā.
- **CadCraft Studio** norāda, kāpēc atjaunināšanas pārbaude neizdevās (sistēmai vēl nav faila, nav tīkla, nederīgs paraksts), nevis tikai "Gatavs", un pārstāj atkal rādīt kartīti "Kas jauns", ko esat aizvēris, līdz parādās jaunāks laidiens.

## Šajā versijā vēl nav

- **0.7 nav koda parakstīta.** Parakstīšana un Microsoft Store pakotne tika pārcelta uz 0.8, jo sertifikāta validācija vēl nav saņemta. Pārbaudiet SHA-256 blakus katram failam vietnē getcadcraft.com/download. Operētājsistēmā Windows, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Papildinformācija}}, pēc tam {{ui:Palaist tik un tā}}. Mac datorā pirmajā reizē noklikšķiniet ar peles labo pogu uz CadCraft Studio un izvēlieties {{ui:Open}}. CadCraft Studio vēl nav lietotņu veikalā, un iPad vai iPhone versijas vēl nav.
- Leņķu un slīpumu saraksti sadaļā {{ui:Units}} tiek saglabāti, bet neviens lodziņš tos vēl nenolasa.
- **Piedāvājumu ielūgumi lielākajai daļai kontu ir izslēgti.** Kamēr funkcija tiek testēta, pasts ārējiem piedāvātājiem tiek sūtīts tikai no kontiem, ko CadCraft komanda ir iespējojusi. Piedāvātāju lapas darbojas katram jau nosūtītajam ielūgumam. Visi pārējie: lejupielādējiet {{ui:Scope CSV}}, nosūtiet to paši pa e-pastu un ierakstiet piedāvājumus.
- CadCraft Studio logs vēl nevar sūtīt piedāvājumu ielūgumus: tas norāda izmantot TakeoffCraft pārlūkā. Apjomu aprēķina atvēršana ar nosūtītiem pieprasījumiem, izlīdzināšana un piedāvājuma izvēle darbojas Studio.
- Papildinājumi (addenda), paziņojumi par piešķiršanu, darba apjoma lapa, ko katrs piedāvātājs paraksta, un automātiski atgādinājumi pirms apdrošināšanas termiņa beigām vēl nav izveidoti. Izvēlētais piedāvājums nemaina alternatīvās tāmes zonas cenu.
- Rasējumi: drukas stilu tabulas un CTB faili netiek piemēroti, binārais DXF tiek noraidīts (saglabājiet to kā ASCII DXF vai DWG), saistītie rasējumi tiek atrasti tikai starp atvērtajiem failiem pēc faila nosaukuma, un rasējumā esošie PDF pamati, attēli un OLE objekti netiek zīmēti vai skaitīti. Skaitījumi un mērogi ir pārbaudīti uz paraugrasējumiem, bet vēl ne uz rasējumiem no reāla objekta, atvērtiem programmā, kurā tie izveidoti.
- Asistents var pievienot vienumus un atzīmes, bet nevar pārvietot, mainīt vai dzēst jau esošās atzīmes.

Pārējais ir aprakstīts sadaļā [Vēl nav izveidots](topic:not-built-yet).
