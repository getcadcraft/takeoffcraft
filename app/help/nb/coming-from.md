---
title: Å komme fra annen mengdeuttaksprogramvare
summary: Hvordan vanene fra spesialiserte mengdeuttaksprogrammer og verktøy for PDF-markering følger med til TakeoffCraft, og forskjellene som lurer folk.
keywords: bytte, migrere, betingelser, deler, måleverktøy, markeringsliste, mengdekobling, mengdeuttaksvaner, forskjeller, sammenlign
from: 12004ce5
---

Hvis du har gjort mengdeuttak i PlanSwift eller med måleverktøyene i Bluebeam Revu, vil det meste av TakeoffCraft føles kjent: et tegningssett, en målestokk per ark, ting du måler og en prissatt sum. Måten delene henger sammen på er ulik noen steder, og disse stedene står nedenfor.

Hvis du kjenner PlanSwift eller On-Screen Takeoff, velg menystilen {{ui:Mengdeuttaksbord}} under {{ui:Innstillinger}} › {{ui:TakeoffCraft}} › {{ui:Menyer, taster og mus}}: en menylinje med Fil, {{ui:Rediger}}, Vis, {{ui:Målestokk}}, Mengdeuttak, {{ui:Poster}}, {{ui:Markering}} og {{ui:Eksporter}} over en rad med mengdeuttaksverktøy, med målestokkforvalgene på arkelinjen. Se [Menyer, taster og mus](topic:menus-keys-and-mouse).

## Vaner oversatt

| Du er vant til | I TakeoffCraft |
|---|---|
| Å åpne en jobb eller et prosjekt som lagrer planene (PlanSwift) | Åpne PDF-ene og `.takeoff.json`-prosjektet side om side. Prosjektet lagrer bare mengdeuttaket; PDF-ene forblir dine egne filer. |
| En markeringsliste med notater, skyer og utheving (Bluebeam) | {{ui:Markering}} på arkelinjen: notater, skyer og utheving med en status (Åpen, Besvart, Lukket), listet under **Markeringer** og tegnet i {{ui:Markert PDF}}. Se [Notater, skyer og utheving](topic:markups). |
| Målinger lagret som markeringer inni PDF-en (Bluebeam) | Mengdeuttaket ligger i `.takeoff.json`-filen. {{ui:Markert PDF}} skriver en kopi med mengdeuttaket tegnet inn, for deling; {{ui:PDF med mengdeuttaket inni}} skriver en kopi som bærer mengdeuttaket, for å åpne igjen i TakeoffCraft. |
| Mengdeuttaksposter (PlanSwift), egendefinerte måleverktøy lagret i Tool Chest (Bluebeam) | **Poster** under {{ui:Poster}}: navn, type, farge, enhet, høyde eller dybde, svinn, satser. |
| Deler og sammenstillinger med formler (PlanSwift) | Postens {{ui:Sammensatt post}}: komponenter med en formel som bruker `L H A N P`. |
| Å sette sidens målestokk, eller kalibrere (begge) | {{ui:Forvalg}}-listen eller {{ui:Kalibrer}} i gruppen {{ui:Målestokk}}, per ark. {{ui:Kontroller}} måler et kjent mål. |
| Å bruke én målestokk på et sideområde | Ikke ennå: sett hvert ark. |
| Visningsområder med ulik målestokk på ett ark (Bluebeam) | Ikke ennå: én målestokk per ark. |
| Polylengde- og arealverktøy (Bluebeam), lineært og areal-mengdeuttak (PlanSwift) | {{ui:Linjær}} ({{key:L}}) og {{ui:Areal}} ({{key:A}}). |
| Å holde Shift for rette linjer | {{key:Shift}} fester til 45°-trinn, samme idé. |
| Å feste til tegningens linjer | Er på som standard: endepunkter, midtpunkter, skjæringspunkter og nærmeste punkt på en linje, med {{key:F3}} for å slå det av, som i CAD-programmer. |
| Telleverktøy (begge) | {{ui:Tell}} ({{key:C}}). |
| Visuelt søk etter symboler (Bluebeam) | {{ui:Autotelling}} ({{key:S}}): merk ett symbol, gjennomgå, legg til. |
| Utsparinger eller fradrag i områder | {{ui:Utsparing}} ({{key:X}}) på et valgt område, og runde utsparinger. |
| Fradrag på lineære strekninger | Tegn strekningen rett gjennom og trykk {{key:E}} ({{ui:Fradrag}}) for åpningen. Se [Mål lineære strekninger](topic:measure-linear). |
| Buesegmenter i en polylinje | {{ui:Bue}} ({{key:R}}): klikk et punkt på kurven, deretter endepunktet. |
| Markeringslisten med mengdekolonner (Bluebeam) | Tabellen {{ui:Mengder}}, {{ui:Etter post}} eller {{ui:Etter ark}}. |
| Kalkyleringsrutenett med priser (PlanSwift) | Samme tabell: svinn, materiell og arbeid per enhet, utvidede summer, {{ui:Jobbsum}}. |
| Eksport til Excel | {{ui:XLSX}} med levende formler, eller {{ui:CSV}}. |
| Escape for å stoppe et verktøy | {{key:Esc}} avbryter og går tilbake til {{ui:Velg}}. |
| Høyreklikk for å avslutte | Høyreklikk avslutter en strekning eller lukker et område også her. Det finnes ingen høyreklikkmeny. |

## Forskjeller som lurer folk

**Mengdeuttaket ligger ikke inni PDF-en din.** Ingenting du gjør endrer PDF-ene dine. Lagre `.takeoff.json`-filen og behold den sammen med tegningene. Å sende noen den markerte PDF-en sender dem ikke et redigerbart mengdeuttak: send prosjektfilen og de opprinnelige PDF-ene, eller en [PDF med mengdeuttaket inni](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF-er matches på innhold, ikke navn.** Et revidert ark lagret over det gamle filnavnet er en ny fil for TakeoffCraft, uten målestokk og uten merker. De gamle merkene blir stående på den gamle versjonen og teller fortsatt. Se [Lagre og åpne igjen et mengdeuttak](topic:save-and-reopen#when-a-pdf-has-changed).

**Umålestokkede merker utelates, de telles ikke som null.** Hvis et ark ikke har målestokk, telles ikke dets strekninger og områder, og tabellen sier «Ufullstendig». I mange programmer ville du bare sett 0. Se [Sett målestokken](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Ingen gjetting av sidestørrelse.** Forvalg antar at PDF-en er skrevet ut i full størrelse. En PDF i halv størrelse eller «tilpass til side» trenger {{ui:Kalibrer}}. Bruk alltid {{ui:Kontroller}}.

**Én post, én hovedtype, flere om du ber om det.** En post er lineær, areal eller tell, og typen låses når den har merker. En betingelse som gir både et areal og omkretsen er en arealpost: omkretsen er variabelen `P`. En vegg med både lengde og areal er en lineær post med en høyde. For en flerbetingelsespost, for eksempel et rom med gulv, sokkel og dører, kryss av de andre typene under **{{ui:Mål også}}**: hver prises på sin egen rad. Se [Én post, flere typer merker](topic:create-items#one-item-several-kinds-of-marks).

**Formler regnes på summer.** Sammenstillingsformler bruker postens summer over alle ark, ikke hver strekning for seg. `N` (antall strekninger eller områder) finnes for ekstra per strekning, som én ekstra stender per vegg.

**Omkrets inkluderer utsparinger.** Et områdes `P` legger til kantene av hullene. Se [Mål områder med utsparinger](topic:measure-areas#read-the-area).

**Dra for å panorere.** Et venstreknappdrag på arket panorerer i alle verktøy unntatt {{ui:Autotelling}}. Du trenger aldri å bytte til et panoreringsverktøy. Hjulet zoomer; det ruller ikke.

**En gjenopprettingskopi, ikke en sky.** TakeoffCraft beholder en kopi av arbeidet ditt i denne nettleseren og tilbyr den igjen etter en krasj ([Hvis fanen eller nettleseren stopper](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), men mengdeuttaket er ditt å lagre: {{key:Mod+S}}. Skylagring er ikke tilgjengelig ennå.

**Alt er i nettleseren.** Det er ingenting å installere, og planene lastes aldri opp. For et skrivebordsprogram kommer TakeoffCraft i CadCraft Studio, sammen med de andre sju appene.

## Ikke her ennå

Områdevise målestokkregioner er ikke bygget ennå. Se [Hva som ikke er bygget ennå](topic:not-built-yet) for hele listen og hva du gjør i stedet.
