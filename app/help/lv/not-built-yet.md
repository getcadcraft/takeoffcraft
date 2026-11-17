---
title: Kas vēl nav izveidots
summary: TakeoffCraft apjomu aprēķina funkcijas, kuras šajā versijā nav pieejamas, un ko šobrīd darīt to vietā.
keywords: ierobežojumi, trūkst, vēl ne, ceļvedis, plānots, risinājums, katram posmam, mākonis, darbvirsma
from: 94ff90d0
---

TakeoffCraft ir izstrādes stadijā. Šajā sarakstā ir norādīts, ko pašreizējā versija nedara, un kā tomēr paveikt darbu.

## Mērīšana

| Vēl nav izveidots | Šobrīd tā vietā |
|---|---|
| Punkta ievietošana posma vai kontūras vidū | Dzēsiet atzīmi un zīmējiet to no jauna. |
| Atlase ar lodziņu (logu) | {{key:Shift}} + klikšķis uz katras atzīmes vai {{key:Mod+A}} visām lapas atzīmēm. Skatiet [Kopēt, ielīmēt un dublēt atzīmes](topic:copy-paste). |
| Ielīmētas kopijas pagriešana, spoguļošana vai mēroga maiņa | Ielīmējiet lapā tādā pašā mērogā un orientācijā; pārējo zīmējiet ar roku. |
| Mēroga nolasīšana no skenētas lapas vai no grafiskās mēroga joslas | Izvēlieties iepriekš iestatītu mērogu vai kalibrējiet pēc joslas garuma. |
| Vairāk nekā viens mērogs vienā lapā (detalizētās zonas, palielināti plāni) | Izmēriet daļu pie lapas mēroga; ja komplektam ir šīs detaļas palielināta lapa, apjomu aprēķiniet to tās lapā. |

## Vienumi un cenas

| Vēl nav izveidots | Šobrīd tā vietā |
|---|---|
| Mezgla formulas, kas izmanto vienuma citu veidu atzīmes (vienuma telpas durvis tā stāva formulās) | Formulas izmanto galvenā veida kopsummas; citu veidu cenas norādiet atsevišķās rindās. |
| Mezgla formulas, kas aprēķinātas katram posmam atsevišķi | Formulas izmanto vienuma kopsummas; katra posma papildu daudzumiem izmantojiet `N`. |
| Formulas, kas izmanto cita vienuma daudzumus | Atkārtojiet mērījumu tajā vienumā vai aprēķiniet to izklājlapas eksportā. |
| Brigādes mezgla sastāvdaļām vai darba diena, kas nav 8 stundas | Piešķiriet brigādi vienumam; brigādes dienas citam darba dienas garumam skaitiet kā brigādes stundas ÷ jūsu darba diena. |
| Atzīmes, kas nav piezīmes, mākoņi un izcēlumi (bultiņas, izmēri, zīmogi), vai atbildes uz piezīmi | Ierakstiet to piezīmes tekstā; mainiet tās statusu, kad jautājums atrisināts. |
| Cenu bibliotēka, ko koplieto komanda vai glabā ar jūsu kontu | Bibliotēka tiek glabāta šajā pārlūkprogrammā: eksportējiet to kā CSV un importējiet otrā datorā. |
| Nozares pakotnes, ko pārskatījuši praktizējoši tāmētāji | Katra pakotne ir sākumpunkts: pirms cenu noteikšanas pārbaudiet tās pieņēmumus pret savu objektu un savām precēm. Skatiet [Nozares pakotnes](topic:trade-packs). |
| Cenas nozares pakotnēs | Pakotnēs ir tikai mezgli: iestatiet savas likmes vai importējiet savu cenrādi kā CSV. |
| Apjoma aprēķina pārdēvēšana | Nosaukums tiek ņemts no pirmā PDF; pārdēvējiet lejupielādētos failus. |
| Lapu nosaukšana ar roku | Lapas tiek nosauktas pēc PDF lapu etiķetēm; meklējiet pēc faila nosaukuma un lapas. |

## Rasējumi (DWG un DXF)

| Vēl nav izveidots | Šobrīd tā vietā |
|---|---|
| Drukas stilu tabulas, pildspalvu piešķīrumi un CTB faili rasējuma lapās | Rasējums tiek zīmēts melns vai savās krāsās, tumšākās papīram; līniju biezumi nāk no paša rasējuma. |
| Bināra DXF vai DWG, kas vecāks par AutoCAD 2000, atvēršana | Saglabājiet to kā ASCII DXF vai jaunāku DWG. |
| Saistītā rasējuma (xref) atrašana pēc mapes, kurā tas atrodas | Atveriet saistīto rasējuma failu kopā ar galveno: to atrod pēc faila nosaukuma starp atvērtajiem failiem. |
| 3D polilīniju, tīklu, cietķermeņu un reģionu mērīšana | Saskaitiet tos pēc slāņa un veida vai izmēriet plāna skatu ar Lineārajiem un Laukuma rīkiem. |
| Teksts marķētā PDF no rasējuma citās, nelatīņu valodās | Rakstzīmes, kurām Helvetica nav glifa, marķētajā PDF tiek drukātas kā "?"; ekrānā redzamais rasējums nemainās. |
| Rasējuma nodošana citai lietotnei no lapas joslas | Atveriet to pašu failu tajā lietotnē. |
| Rasējums, kurā ir iekļauts apjoma aprēķins, kā to dara {{ui:PDF with the takeoff inside}} PDF failiem | {{ui:Save takeoff}}: `.takeoff.json` atkal atveras uz tā paša rasējuma, atrasts pēc tā satura. |
| Rasējumā ievietoti PDF pamati, attēli un OLE objekti | Attēli tiek rādīti tikai kā rāmis. Atveriet pašu pamata PDF kā lapu. |

## Automātiskā skaitīšana

| Vēl nav izveidots | Šobrīd tā vietā |
|---|---|
| Simbolu atrašana lapā, kurā nav uzzīmēts mērogs citā izmērā | Iestatiet lapai tās mērogu vai meklējiet to ar rāmi, kas uzzīmēts tajā. |
| Spoguļattēlu simbolu atrašana | Saskaitiet tos ar roku vai meklējiet vēlreiz ar rāmi ap spoguļattēlu. |

## Faili un koplietošana

| Vēl nav izveidots | Šobrīd tā vietā |
|---|---|
| Viens PDF, kas rāda atzīmes un satur apjoma aprēķinu | {{ui:Marked PDF}} cilvēkiem, lai redzētu atzīmes; {{ui:PDF with the takeoff inside}}, lai atvērtu atpakaļ TakeoffCraft. |
| CSV ar daudzumiem pa lapām vai ar atzīmēm | Izmantojiet {{ui:XLSX}}: tajā ir darblapas By sheet un Marks. |
| Mākoņa saglabāšana | Vēl nav pieejama. Saglabājiet projekta failus datorā un izveidojiet dublējumu. |
| Atsevišķa TakeoffCraft darbvirsmas lietotne | No 0.5 versijas darbvirsmas lietotne ir CadCraft Studio, un visas astoņas lietotnes ir vienā instalācijā. TakeoffCraft darbojas arī pārlūkprogrammā. |

## Ekrāns un ievade

| Vēl nav izveidots | Šobrīd tā vietā |
|---|---|
| Izvēlne ar peles labo pogu (vai ilgu nospiešanu) | Izmantojiet rīkjoslu, paneļus un taustiņus. Ilgs nospiedums pabeidz posmu vai kontūru. |
| Skata pagriešana | PDF pagrieztās lapas jau tiek rādītas taisnas. |

## 3D skats

| Vēl nav izveidots | Šobrīd tā vietā |
|---|---|
| Atzīmju zīmēšana vai rediģēšana 3D | Atgriezieties lapā ({{key:3}}), lai zīmētu; atlase un dzēšana darbojas arī 3D. |
| Vairāku stāvu savietošana, ja tie uzzīmēti dažādās vietās savās lapās | Savietojiet stāvus, kas uzzīmēti vienādi; pārējos pārbaudiet pa vienai lapai. |
| Stabiņu skaitīšana ar izmēru, kas atbilst skaitāmajam objektam | Visi stabiņi lapā ir vienāda izmēra; tie atzīmē skaitīšanas vietu, nevis to, kas tā ir. |

## Piedāvājumi

| Vēl nav izveidots | Šobrīd tā vietā |
|---|---|
| Papildinājumi jau nosūtītai paketei, paziņojumi par izvēli, darbu apjoma lapa, ko katrs piedāvājuma iesniedzējs paraksta | Nosūtiet jaunu paketi un izrakstiet izvēles paziņojumu pats. [Nosūtīt paketi piedāvājumiem](topic:bid-invitations) apraksta, kas jau ir izveidots. |
| Piedāvājumu uzaicinājumu sūtīšana no jebkura konta: kamēr tā tiek testēta, pasta sūtīšana ārējiem piedāvājuma iesniedzējiem ir izslēgta, izņemot kontus, kurus CadCraft komanda ir iespējojusi | Lejupielādējiet {{ui:Apjoma CSV}}, nosūtiet to pats pa e-pastu un ierakstiet piedāvājumus. |
| Paketu sūtīšana piedāvājumiem no CadCraft Studio loga | Sūtiet no TakeoffCraft pārlūkprogrammā. |
| Alternatīvas piedāvājuma zonas pārcenošana ar izvēlētu piedāvājumu | Alternatīvām un piedāvājuma zonu apakšsummām izmantojiet savas cenas; alternatīvu pielāgojiet ar roku. |
| Automātiski atgādinājumi pirms apakšuzņēmēja apdrošināšanas vai licences termiņa beigām | Datums tiek atzīmēts lapā Apakšuzņēmēji, kad tas ir pagājis vai atrodas 30 dienu robežās; pārbaudiet to, kad uzaicināt. |

## Paneļi

| Vēl nav izveidots | Šobrīd tā vietā |
|---|---|
| {{ui:Daudzumi}} tabulas pārvietošana | Pārvietojami tikai paneļi {{ui:Lapas}} un {{ui:Vienumi}}. Skatiet [Paneļu izkārtojums](common:arrange-panels). |

## Izklājlapas

XLSX darbgrāmata ir pārbaudīta LibreOffice Calc, kur katra kopsumma ir pārrēķināta līdz tam pašam centam kā TakeoffCraft. Excel tā vēl nav atvērta. Ja izklājlapu programma parāda kaut ko negaidītu, CSV eksports satur to pašu tāmi kā vienkāršas vērtības.
