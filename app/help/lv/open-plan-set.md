---
title: Sāciet apjoma aprēķinu un atveriet plānu komplektu
summary: Atveriet vienu vai vairākus PDF kā plānu komplektu, orientējieties lapās un pārvietojieties starp tām.
keywords: atvērt, plānu komplekts, vairāki pdf, vairāki faili, lapas, rasējumi, lapu etiķetes, lapu saraksts, navigācija, nomest, nodošana, atvērt citā lietotnē, atzīmes
from: ed434468
---

Plānu komplekts bieži ir vairāki PDF: arhitektūras, konstrukciju, mehānikas. TakeoffCraft tos atver blakus kā vienu lapu sarakstu, un viens apjoma aprēķins var aptvert visus.

## PDF atvēršana

1. Izvēlieties {{ui:Atvērt plānus}} grupā {{ui:Fails}} vai nospiediet {{key:Mod+O}}. (Citos izvēlņu stilos tas saucas {{ui:Atvērt PDF…}}.)
2. Failu dialogā atlasiet katru komplekta PDF. Turiet {{pick:mac=Command|windows=Ctrl|linux=Ctrl}}, lai atlasītu vairākus, vai {{key:Shift}}, lai atlasītu diapazonu.
3. Noklikšķiniet uz „Atvērt”.
   Kamēr katrs fails tiek nolasīts, rādīts ziņojums "Notiek atvēršana: (name)…". Pēc tam katra lapa parādās sarakstā {{ui:Lapas}}, un tiek atvērta pirmā jaunā PDF pirmā lapa.

Varat arī vilkt PDF no {{pick:mac=Finder|windows=Failu pārlūks|linux=jūsu failu pārvaldnieks}} un nomest tos jebkurā TakeoffCraft vietā. Vilkšanas laikā parādās rāmis "Nometiet PDF, DWG vai DXF rasējumus vai .takeoff.json".

Lai vēlāk pievienotu vēl PDF, rīkojieties tāpat. PDF, kas jau ir atvērti, tiek izlaisti.

Sākuma ekrānā uzskaitīti arī nesen atvērtie PDF un apjoma aprēķini pārlūkprogrammās, kas ļauj lapai atkārtoti atvērt failu (Chrome un Edge). Noklikšķiniet uz viena, lai to atvērtu; pārlūkprogramma var vispirms prasīt atļauju. Skatiet [Jūsu faili](common:your-files).

:::note
Nekas netiek augšupielādēts. Pārlūkprogramma nolasa PDF jūsu datorā, un tie pazūd no TakeoffCraft, kad aizverat cilni vai izvēlaties {{ui:Jauns}}.
:::

## Rasējumi kopā ar PDF

{{ui:Atvērt plānus}} atver arī DWG un DXF rasējumus, atsevišķi vai kopā ar PDF: katra rasējuma modeļa telpa un izkārtojumi kļūst par lapām tajā pašā sarakstā. Skatiet [Atvērt DWG vai DXF rasējumu](topic:open-a-drawing), tad [Skaitīt no rasējuma](topic:count-from-a-drawing).

## PDF, kas nodots no citas lietotnes

Cita šīs komplekta lietotne var nodot jums PDF, ko tā ir atvērusi: tā atver TakeoffCraft jaunā cilnē, un PDF tur atveras tā, it kā būtu nomests. Statusjoslā rakstīts "Atvērts (name), nodots no (app). Sākotnējais fails nav mainīts." Nekas netiek augšupielādēts; fails iziet cauri šīs pārlūkprogrammas krātuvei un pēc atvēršanas no tās tiek izdzēsts.

Ja statusjoslā rakstīts, ka PDF "nav ieradies", cilne pārāk ilgi gaidīja vai PDF jau bija atvērts citā cilnē: atveriet to ar {{ui:Atvērt plānus}}.

Otrādi: ja MarkupCraft darbojas jūsu vietā un var ņemt failu, rasējuma lapas joslā ir poga {{ui:MarkupCraft}}. Tā atver ekrānā redzamās lapas PDF jaunā cilnē programmā MarkupCraft, lai to pārskatītu un atzīmētu.

## Lapas atrašana

- Ritiniet sarakstu {{ui:Lapas}} pa kreisi un noklikšķiniet uz lapas.
- Ierakstiet **Meklēt lapas** saraksta augšdaļā, lai filtrētu pēc lapas numura, faila nosaukuma vai lapas etiķetes. Skaitlis blakus {{ui:Lapas}} rāda "3 no 40", kamēr filtrs ir ieslēgts.
- Nospiediet {{key:PageDown}} nākamajai lapai un {{key:PageUp}} iepriekšējai. Tās seko sarakstam tā, kā tas ir filtrēts.

:::mac
Mac tastatūrā bez taustiņiem Page Up un Page Down nospiediet fn kopā ar augšup vai lejup bultiņu.
:::

## Kā tiek nosauktas lapas

- Lapa, kurai PDF dod etiķeti, piemēram, `A-101`, tiek nosaukta pēc šīs etiķetes.
- Lapa bez etiķetes (vai ar etiķeti, kas ir tikai tās lapas numurs) tiek nosaukta "(faila nosaukums), lapa (n)".
- Ja atvērti vairāki PDF, lapām ar etiķetēm pievienots arī faila nosaukums: "A-101 — Architectural".

Lapu nosaukumus pagaidām nevar ievadīt ar roku.

## Lapas apskate

- Ritiniet peles riteni, lai tuvinātu rādītāja vietā.
- Velciet ar kreiso vai vidējo pogu, lai panoramētu. Ar {{ui:Automātiski skaitīt}} vai, sākot no atzīmes stūra, turiet {{key:Space}} un velciet, vai velciet ar vidējo pogu.
- Nospiediet {{key:F}} vai izvēlieties {{ui:Pielāgot lapu}}, lai redzētu visu lapu; {{key:W}} vai {{ui:Pielāgot platumu}} pielāgo tās platumu.
- Nospiediet {{key:Plus}} vai {{key:=}}, lai tuvinātu, un {{key:Minus}}, lai tālinātu skata vidū.

Katra lapa atceras savu tālummaiņu un pozīciju, kamēr tā ir atvērta.

## Tālāk

Pirms lapā var veikt mērījumus, tai vajadzīgs mērogs: [Iestatiet mērogu](topic:set-the-scale).
