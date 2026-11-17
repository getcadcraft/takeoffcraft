---
title: Atvērt DWG vai DXF rasējumu
summary: Atveriet rasējuma failu kā lapas (modeļa telpa un katrs izkārtojums), sāciet ar rasējuma doto mērogu, rādiet vai slēpiet tā slāņus un ievietojiet saistītos rasējumus.
keywords: dwg, dxf, cad, rasējums, atvērt rasējumu, izkārtojumi, modeļa telpa, papīra telpa, lapas, mērvienības, insunits, skata loga mērogs, xref, saistītais rasējums, slāņi, iesaldēts, bez pdf, drukāšana, bez izdrukas
from: d8c3f504
---

TakeoffCraft atver DWG vai DXF rasējumu tāpat kā PDF: nav jāizdrukā tas PDF formātā. Skaitīšana tieši no paša rasējuma ir precīza, jo rasējums zina, kas ir katrs objekts. Skatiet [Skaitīt no rasējuma](topic:count-from-a-drawing).

## Rasējuma atvēršana

1. Izvēlieties {{ui:Atvērt plānus}} grupā {{ui:Fails}} vai nospiediet {{key:Mod+O}}.
2. Atlasiet DWG vai DXF failu. Varat atlasīt vairākus, un kopā ar tiem arī PDF.
3. Noklikšķiniet uz „Atvērt”.

Rasējuma failus varat arī nomest TakeoffCraft logā, tāpat kā PDF. Nekas netiek augšupielādēts: pārlūkprogramma nolasa failu jūsu datorā.

TakeoffCraft nolasa DWG no AutoCAD 2000 līdz 2018 un ASCII DXF no R12 līdz 2018. Tas noraida bināru DXF (saglabājiet to kā ASCII vai kā DWG) un failu, kas nav neviens no šiem, un pasaka iemeslu. Bojāts fails atveras ar to, kas varēja tikt nolasīts, un ziņojums to norāda; tā skaitīšanas rezultāti var būt nepilnīgi.

## Lapas

- **Modelis** ir rasējuma modeļa telpa.
- **Katrs izkārtojums** (papīra telpas cilne) ir lapa, kuras nosaukums ir tā cilne, cilņu secībā. Izkārtojums rāda modeli caur saviem skata logiem, tā kā tas tiktu drukāts.

Tālummaiņa, panoramēšana, piesaiste rasējuma pašu līnijām, atzīmes, piezīmes, {{ui:Kalibrēt}} un pārējais darbojas kā ar PDF. Rasējuma lapas apjoma aprēķinā tiek saglabātas pēc faila nosaukuma un tā satura identifikatora, kā PDF: atveriet to pašu failu vēlreiz, un atzīmes ir tā lapās.

## Mērogs

Lapa sākas ar rasējuma doto mērogu:

- **Izkārtojums** pieņem sava lielākā skata loga mērogu. Mērogs, piemēram, 1/2" = 1'-0", tiek nosaukts kā iepriekš iestatītais, kam tas atbilst; jebkurš cits tiek rādīts kā "No rasējuma skata loga: 1" = 2.5'". Ja izkārtojumam ir skata logi citos mērogos, lielākais nosaka lapas mērogu: pārbaudiet pārējos ar {{ui:Pārbaudīt}}.
- **Modelis** pieņem rasējuma mērvienības (collas, milimetri, pēdas…) kā mērogu: "Rasējuma vienības (collas)".
- **Rasējums bez mērvienībām** (rasējumā nekad nav norādīts, vai vienība ir colla vai milimetrs) nav mēroga: lapā rakstīts "Nav mēroga", un mērīšana tajā ir liegta, kā PDF bez mēroga. Skaitīšanai mērogs nav vajadzīgs. Iestatiet mērogu ar {{ui:Kalibrēt}}.

{{ui:Kalibrēt}}, {{ui:Pārbaudīt}} un saraksts {{ui:Iepriekš iestatīts}} jebkurā brīdī maina mērogu, un tie ir svarīgāki par rasējumā doto. Iepriekš iestatīto sarakstu nevar izmantot modelim, jo tam nav papīra izmēra.

## Slāņi

{{ui:Slāņi}} lapas joslā uzskaita rasējuma slāņus un to, cik objektu katram ir šajā lapā. Slāņi, ko fails izslēdza vai iesaldēja, sākotnēji ir paslēpti. Noņemiet atzīmi no slāņa, lai to paslēptu, vai atzīmējiet paslēptu, lai to parādītu: lapa tiek pārzīmēta, un paslēptais netiek iekļauts skaitīšanā un objektos, ko piedāvā {{ui:Izmērīt rasējumu}}, ja vien neprasāt skaitīt arī paslēptos slāņus. {{ui:Rādīt visus}} parāda visus slāņus; {{ui:Atpakaļ pie faila slāņiem}} atsauc jūsu izmaiņas. Slāņu izvēle attiecas uz šo sesiju, nevis uz apjoma aprēķina failu.

## Saistītie rasējumi (xref)

Rasējums, kas saista citus rasējumus, parāda tos vietās, kur tie ievietoti. TakeoffCraft atrod saistīto rasējumu starp **atvērtajiem failiem** pēc tā faila nosaukuma: atveriet galveno rasējumu un saistīto rasējumu kopā (vai vienu pēc otra). Līdz tam statusjoslā rādīts, cik saistīto rasējumu nav atrasti, ka to, ko tie zīmē, trūkst, un skaitīšanā tas tiek norādīts.

## Ierobežojumi

- Objekti, ko TakeoffCraft nevar nolasīt vai novietot (starpniekobjekti, nezināmas klases), tiek uzskaitīti skaitīšanas logā pēc veida; tie nekad netiek izmesti bez paziņojuma.
- Ļoti lieli rasējumi tiek zīmēti daļēji, un skaitīšana apstājas pie ierobežojuma, par to paziņojot. Šādam rasējumam atveriet tā PDF izdruku.
- Rasējums tiek zīmēts melns un savās krāsās, tumšākās baltam papīram. Drukas stilu tabulas un pildspalvu piešķīrumi netiek piemēroti.
