---
title: Jaunumi 0.7 versijā (iepriekšējā)
summary: DWG un DXF rasējumi atveras kā lapas ar savu mērogu, precīzi skaiti un garumi no paša rasējuma, izvēlētais apakšuzņēmēja piedāvājums kā paketes cena, piedāvājumu uzaicinājumi ar slēgtām cenām, asistentu rīki rasējumiem un USD no 3D pārbaudes skata.
keywords: jaunumi 0.7, iepriekšēja versija, laidiena piezīmes, izmaiņu žurnāls, izmaiņas, 0.7, versija, jaunas funkcijas, dwg, dxf, rasējums, izkārtojumi, modeļa telpa, rasējuma mērogs, skaitīt no rasējuma, cad skaitīšana, bloki, dinamiskie bloki, atribūti, slāņi, xref, saistīts rasējums, izmērīt rasējumu, polilīnija, šrafējums, atzīmēts pdf, izvēlētais piedāvājums, izmantot piedāvājumu, nosūtīt piedāvājumiem, piedāvājuma uzaicinājums, slēgti piedāvājumi, piedāvājumu atvēršana, novēloti piedāvājumi, apakšuzņēmēju ieraksti, csv, asistents, mcp, usd, usdz, mērvienības, mērvienību saraksti, kompakts, paneļi, dialogi, portugāļu
from: de1dca2b
---

Šis ir tas, kas mainījās TakeoffCraft 0.7 versijā, salīdzinot ar 0.6. Rasējumi tagad atveras tādi, kādi tie ir, bez iepriekšējas drukāšanas PDF formātā, un piedāvājumu pakete var tikt nosūtīta apakšuzņēmējiem un atgriezties ar cenām.

## Jaunums

### DWG un DXF rasējumi

- **Atvērt rasējumu kā lapas.** {{ui:Atvērt plānus}} grupā {{ui:Fails}} ({{key:Mod+O}} vai ievelciet failus) pieņem DWG un DXF rasējumus blakus PDF. Modeļa telpa un katrs izkārtojums kļūst par lapām sarakstā {{ui:Lapas}}, un apjomu aprēķins var aptvert gan rasējumus, gan PDF kopā. Nekas netiek augšupielādēts. Skatiet [Atvērt DWG vai DXF rasējumu](topic:open-a-drawing).
- **Mērogs nāk no rasējuma.** Izkārtojums sākas ar sava lielākā skata loga mērogu, kas nosaukts kā iepriekš iestatīts, ja tāds ir, piemēram, 1/2" = 1'-0". Modelis sākas rasējuma mērvienībās. Rasējums bez mērvienībām rāda "Nav mēroga", līdz to kalibrējat. {{ui:Kalibrēt}}, {{ui:Pārbaudīt}} un {{ui:Iepriekš iestatīts}} joprojām ir noteicošie. Skatiet [Mērogs](topic:open-a-drawing#the-scale).
- **Slāņi un saistītie rasējumi.** {{ui:Slāņi}} lapas joslā parāda vai paslēpj rasējuma slāņus. Slāņi, ko fails izslēdzis vai iesaldējis, sākotnēji ir paslēpti un netiek skaitīti, ja vien to neizvēlaties. Saistītais rasējums (xref), kas atvērts blakus savam saimniekam, tiek zīmēts un skaitīts tur, kur tas ir ievietots; kamēr tas nav atvērts, statusa joslā rakstīts, kas trūkst. Skatiet [Slāņi](topic:open-a-drawing#layers).
- **Atzīmētais PDF darbojas ar rasējumu.** {{ui:Eksportēt}} › {{ui:Atzīmēts PDF}} vispirms uzzīmē rasējuma atzīmētās lapas kā PDF, tāpēc kopijā ir redzamas jūsu atzīmes un leģenda bez drukāšanas soļa. Tas tiek zīmēts melnā krāsā vai rasējuma krāsās, bez drukas stilu tabulām. Skatiet [Atzīmēts PDF](topic:export-estimate#a-marked-pdf).

### Precīzi skaiti un garumi no rasējuma

- **Skaitīt to, ko rasējums saka, ka tur ir.** {{ui:CAD skaitīšana}} lapas joslā skaita bloku pēc nosaukuma (ieskaitot iekšējos blokus, dinamisko bloku stāvokļus un bloku masīvus), visu vienu tipu vienā slānī vai teksta vai atribūta vērtību. Tas skaita to, ko lapa rāda, vai visu rasējumu vienu reizi. Atzīmju pievienošana ir viens atsaukšanas solis, un atkārtota skaitīšana pievieno tikai jauno. {{ui:Automātiski skaitīt}} paliek PDF failiem un simboliem, kas nav bloki. Skatiet [Skaitīt no rasējuma](topic:count-from-a-drawing).
- **Mērīt pēc paša rasējuma līnijām.** {{ui:Izmērīt rasējumu}} ņem līnijas, lokus, polilīnijas, riņķus, šrafējumus un cietos ķermeņus, ko noklikšķināt vai atlasāt logā, kā lineāra vai laukuma vienuma atzīmes. Loki, izliekumi un šrafējuma caurumi tiek iegūti precīzi; elipses un splaini tiek mērīti smalkos akordos, un josla to norāda. Skatiet [Izmērīt no rasējuma](topic:measure-from-a-drawing).

### Piedāvājumi

- **Izmantot apakšuzņēmēja piedāvājumu kā paketes cenu.** Sadaļā {{ui:Eksportēt}} › {{ui:Piedāvājumu paketes un izlīdzināšana…}} izvēlieties {{ui:Izmantot}} piedāvājumā. Paketes vienumi paliek kā daudzumi, viena rinda **Izvēlētais piedāvājums** nes cenu, vienumi, ko piedāvājums neiekļauj, paliek jūsu pašu izmaksās, un virsizmaksas, peļņa un galvojums attiecas uz to. Piedāvājumu maiņa ir viens atsaukšanas solis; darba burtnīca un piedāvājumu kopsavilkums to ietver. Skatiet [Izmantot piedāvājumu kā paketes cenu](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Nosūtīt paketi piedāvājumiem.** {{ui:Nosūtīt cenu aptaujai…}} zem paketes katram apakšuzņēmējam nosūta e-pastā saiti uz lapu, kam nav vajadzīgs konts: viņi redz apjomu un lapas PDF formātā, ieraksta cenu katrā rindā vai atzīmē to kā neiekļautu, pievieno piezīmes un līdz trim failiem vai atsakās. {{ui:Saņemt cenas}} ieliek atgrieztās cenas izlīdzināšanas lapā, atzīmētas kā **web**. Nosūtīšana ir pieejama tikai kontiem, ko CadCraft komanda ir iespējojusi, kamēr funkcija tiek testēta (skatiet zemāk). Skatiet [Nosūtīt paketi piedāvājumiem](topic:bid-invitations).
- **Slēgts līdz atvēršanai.** Cenas var palikt slēgtas līdz atvēršanas laikam, ko iestatāt: līdz tam neviens cenu neredz, arī jūs. Atvēršanas brīdī katrs piedāvājums parādās uzreiz, un piedāvājums, kas nāca pēc termiņa, tiek atzīmēts kā **novēlots**. Skatiet [Slēgti piedāvājumi un atvēršana](topic:bid-invitations#sealed-bids-and-the-opening).
- **Apakšuzņēmēju ieraksti.** Jūsu konts vietnē getcadcraft.com glabā katra uzņēmuma kontaktus, nozares, kvalifikācijas atbildes un apdrošināšanas un licenču datumus (atzīmēti, kad tie ir pagājuši vai iestājas 30 dienu laikā), kopā ar tā iepriekšējiem piedāvājumiem. Importējiet un eksportējiet tos kā CSV un izvēlieties tos, kad sūtāt paketi. Skatiet [Vietnē](topic:bid-invitations#on-the-website).

### AI asistenti

- **Asistenti var pievienot apjomu aprēķinam.** Ar ieslēgtu **Rediģēt** jūsu pašu asistents var pievienot vienumus (`items_add`) un mērīt posmus, laukumus un skaitus lapā (`marks_add`; garumi un laukumi tikai lapā ar mērogu), katrs izsaukums ir viens atsaukšanas solis.
- **Asistentu rīki rasējumiem.** Atvērtā DWG vai DXF failā asistents var uzskaitīt tā lapas un to, ko var skaitīt, precīzi skaitīt, pievienot skaita atzīmes un mērīt pēc rasējuma ģeometrijas. Bez atvērta TakeoffCraft CadCraft MCP serveris atver rasējumu kā jaunu apjomu aprēķinu un to saglabā, un `cadcraft count` skaita no komandrindas. Skatiet [Ko asistents var pieprasīt](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D pārbaudes skats kā USD.** {{ui:USD pakotne (.usdz)}} līdzās {{ui:GLB}} 3D pārbaudes skatā ieraksta katru sienu, plāksni, pārsegumu, skaita stabiņu un posmu kā atsevišķu objektu, nosaukts pēc tā vienuma un ar savu daudzumu, metros. Asistents to var arī eksportēt (`usd_export`). Skatiet [Eksportēt 3D pārbaudes skatu kā USD](topic:usd).

## Visās lietotnēs

- **Mērvienības.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Mērvienības}} katram garumam, laukumam, tilpumam, leņķim un slīpumam ir savs saraksts ar precīziem izmēriem, kādi doti mērvienību definīcijās (ASV topogrāfiskā pēda ir atsevišķa mērvienība). Izslēdziet mērvienības, ko nekad neizmantojat, un tās izzūd no mērvienību sarakstiem; atzīmējiet ar zvaigznīti vienu, un jauns darbs sākas tajā. Fails vienmēr saglabā savu mērvienību. TakeoffCraft vienuma {{ui:Mērvienība}} saraksti seko slēdžiem, jauns vienums sākas atzīmētajā garuma vai laukuma mērvienībā, jumta kvadrāti (SQ), akri un hektāri ir jaunas laukuma mērvienības, un garuma lodziņš pieņem jebkuras mērvienības apzīmējumu, piemēram, `3 yd`. Skatiet [Mērvienības, ievadītās vērtības un mērvienību saraksti](common:unit-lists).
- **Blīvāks izkārtojums un paneļi, ko var nolikt malā.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Izkārtojuma blīvums}} › {{ui:Kompakts}} ietilpina ekrānā vairāk (skārienekrāni un tālruņi saglabā savas lielās pogas). Katram sānu panelim ir šaura virsraksta josla: velciet to, lai piestiprinātu vai atbrīvotu paneli, nometiet uz cita paneļa joslas, lai dalītos ar vienu rāmi kā cilnēs, piespraudiet, lai tas aizslīd līdz malai, vai paslēpiet un atgrieziet to no malas. Skatiet [Izkārtot paneļus](common:arrange-panels#make-the-layout-denser).
- **Dialogi pārvietojas.** Velciet dialogu aiz virsraksta joslas, lai tas nebūtu rasējuma ceļā; tas atgriežas tur, kur to atstājāt. Divreiz noklikšķiniet uz virsraksta joslas, lai to atkal centrētu. Skatiet [Pārvietot dialogu](common:arrange-panels#move-a-dialog).
- **Receptes AI asistentiem.** Desmit darba pieprasījumi jūsu pašu asistentam (sakārtot rasējumu, izdrukāt komplektu, pārbaudīt rasējumus, uzdot modelim jautājumus, saskaitīt apjomu aprēķinu, izmēģināt detaļas variantu…), katrs ar rīkiem, ko tas izsauc, un atļaujām, kas tam vajadzīgas, un katru pārbauda mūsu testi. Lietotnēs AI nav. Skatiet [Receptes AI asistentiem](common:assistants-recipes).
- **Valodas.** **Português (Portugal)** ir jauns sadaļā {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Valoda}}. Tā, **Português (Brasil)**, **Español (México)** un **Bahasa Indonesia** tagad ir ar visiem lietotņu vārdiem kā melnraksti, ko dzimtā valoda vēl nav pārskatījusi. Palīdzības tēmas ir angļu valodā.
- **CadCraft Studio** norāda, kāpēc atjaunināšanas pārbaude neizdevās (vēl nav faila jūsu sistēmai, nav tīkla, slikts paraksts), nevis tikai "Gatavs", un pārstāj atgriezt Jaunumu kartīti, ko aizvērāt, līdz parādās jaunāks laidiens.

## Vēl nav šajā versijā

- **0.7 nav koda parakstīta.** Parakstīšana un Microsoft Store pakotne pārcelta uz 0.8, jo sertifikāta pārbaude vēl nav pabeigta. Pārbaudiet katram failam blakus norādīto SHA-256 vietnē getcadcraft.com/download. Windows sistēmā, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Papildinformācija}}, tad {{ui:Palaist tomēr}}. Mac datorā pirmajā reizē ar peles labo pogu noklikšķiniet uz CadCraft Studio un izvēlieties {{ui:Atvērta}}. CadCraft Studio vēl nav lietotņu veikalā, un iPad vai iPhone versijas vēl nav.
- Leņķu un slīpumu saraksti sadaļā {{ui:Mērvienības}} tiek saglabāti, bet neviens lauks tos vēl nenolasa.
- **Piedāvājumu uzaicinājumi ir izslēgti lielākajai daļai kontu.** Kamēr funkcija tiek testēta, pasts ārējiem pretendentiem tiek sūtīts tikai no kontiem, ko CadCraft komanda iespējojusi. Pretendentu lapas darbojas visiem jau nosūtītajiem uzaicinājumiem. Visi pārējie: lejupielādējiet {{ui:Apjoma CSV}}, nosūtiet to paši pa e-pastu un ierakstiet piedāvājumus.
- CadCraft Studio logs vēl nevar sūtīt piedāvājumu uzaicinājumus: tas liek izmantot TakeoffCraft pārlūkā. Apjomu aprēķina atvēršana ar nosūtītiem pieprasījumiem, izlīdzināšana un piedāvājuma izvēle darbojas Studio.
- Papildinājumi, piezīmes par piegādi, katra pretendenta parakstīta apjoma lapa un automātiski atgādinājumi pirms apdrošināšanas datuma beigām nav izveidoti. Izvēlētais piedāvājums nepārcenot alternatīvā piedāvājuma platību.
- Rasējumi: drukas stilu tabulas un CTB failus nepiemēro, bināro DXF noraida (saglabājiet ASCII DXF vai DWG formātā), saistītos rasējumus atrod tikai starp atvērtajiem failiem pēc faila nosaukuma, un PDF pamatnes, attēli un OLE objekti rasējumā netiek zīmēti vai skaitīti. Skaitus un mērogus pārbaudīja uz paraugu rasējumiem, bet vēl nav pārbaudīti uz reāla darba rasējumiem, kas atvērti programmā, kurā tie izveidoti.
- Asistents var pievienot vienumus un atzīmes, bet nevar pārvietot, mainīt vai dzēst jau esošās atzīmes.

Visu pārējo skatiet [Vēl nav izveidots](topic:not-built-yet).
