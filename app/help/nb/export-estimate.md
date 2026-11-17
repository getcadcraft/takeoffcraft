---
title: Eksporter kalkylen og en markert PDF
summary: Last ned kalkylen som en XLSX-arbeidsbok med levende formler eller som CSV, og kopier av PDF-filene med mengdeuttaket tegnet inn.
keywords: forslag, tilbudssammendrag, eksport, xlsx, regneark, arbeidsbok, csv, markert pdf, skriv ut mengdeuttak, rapport, del, send, tegnforklaring
from: 334f89c7
---

Eksporter er nedlastinger. De lages på datamaskinen fra mengdeuttaket og de åpne PDF-filene; ingenting sendes noe sted.

## Kalkylen som regneark (XLSX)

1. Åpne {{ui:Export}}-menyen i verktøylinjen og velg {{ui:XLSX}}.
   Nettleseren laster ned `(name).xlsx`. Statuslinjen sier «Eksportert (name).xlsx (kalkyle med levende formler, per ark, markeringer, målestokker).» og legger til en advarsel når kalkylen er ufullstendig.
2. Åpne den i regnearkprogrammet.

Arbeidsboken har fire regneark, og rapportene under når de gjelder:

| Regneark | Innhold |
|---|---|
| Kalkyle | En rad per post og per komponent: mengde, svinn, mengde med svinn, satser, materiell, arbeid, sum, merknader. Totalen for jobben nederst. |
| Per ark | Hver posts mengde på hvert ark, med antall markeringer. |
| Markeringer | Hver markering: ark, post, type, mengde og detaljer (segmentlengder, brutto- og utsparingsareal, omkrets). |
| Målestokker | Hvert ark som har en målestokk eller markeringer: målestokken, hvordan den er satt (forhåndsvalgt, eller kalibrert på avstanden som ble skrevet inn), og fot per PDF-enhet. |
| Mengdeoppsummering | Hver posts mengde, CSI-nummer, markeringer og ark, uten priser. |
| Materialliste | Hver sammensatt del lagt sammen for hele mengdeuttaket (samme del brukt av flere poster er én linje), med svinn og materialkostnad, og postene som bruker den. |
| Tilbudsforespørsel | Materiallisten å sende til en leverandør: mengder med svinn, en tom enhetspriskolonne, og beløp og en sum som fylles ut etter hvert som priser skrives inn. |
| Per divisjon | Materiell, arbeid og sum etter CSI MasterFormat-divisjon, når postene har et {{ui:CSI number}}. |

Med et [tilbudssammendrag](topic:bid-summary) slutter også Kalkyle-arket med påslagene sine (lønnsomkostning, salgsavgift, generalkostnader, fortjeneste, garanti og tilbudet), som levende formler.

Kalkyle-arket har **levende formler**: mengde med svinn, de avrundede materiell- og arbeidsbeløpene, hver rads sum og totalen for jobben. Regnearkprogrammer beregner dem på nytt, så en sats eller et svinn kan endres i regnearket, og summene følger med. Tallene TakeoffCraft har regnet ut, lagres også i cellene, og stemmer til øre.

Merknadskolonnen lister hver komponents formel, formelfeil, markeringer på ark uten målestokk, veggareal og omkrets. Når noe er utelatt, sier totalraden for jobben «Ufullstendig: se merknadene over».

Arbeidsboken er kontrollert i LibreOffice Calc, som beregnet den på nytt til de samme summene. Den er ikke åpnet i Excel ennå. Kolonnedetaljene står i [Eksportkolonner](topic:export-columns).

## Kalkylen som CSV

Åpne {{ui:Export}}-menyen og velg {{ui:CSV}}. Det lages `(name).csv`: de samme radene og kolonnene som Kalkyle-arket, som vanlige verdier (uten formler), og totalen for jobben. Brukes til å lime inn i et annet kalkyle- eller regnskapssystem.

CSV-filen har bare kalkylen; for mengder per ark og markeringslisten brukes XLSX. {{ui:Material list}} i samme meny lagrer materiallisten alene som CSV, for bestilling.

## Kalkylen i Google Sheets

Over mengdetabellen legger **Kopier for Google Sheets** kalkylen på utklippstavlen som tabulatorseparert tekst, med de samme linjene som CSV-filen. Klikk på celle A1 i et Google Sheet og lim inn. TakeoffCraft logger ikke inn hos Google og sender ingenting dit.

## Manglende satser og godkjenning

En linje med mengde og uten sats har **Ingen sats** i merknadene, og eksporten teller dem med i summene. Når kalkylen er godkjent, angir eksporten hvem som godkjente, når, og for hvilken total. Se [Manglende satser og godkjenning av kalkylen](topic:sign-off-the-estimate).

## En markert PDF

1. Åpne PDF-filene der markeringene skal tegnes.
2. Åpne {{ui:Export}}-menyen og velg {{ui:Marked PDF}}.
   «Skriver den markerte PDF-filen …» vises, og deretter laster nettleseren ned én fil per markert PDF, kalt `(PDF name) (takeoff).pdf`.

I kopien:

- strekninger tegnes som linjer i postens farge,
- arealer fylles lett med en heltrukken kontur, og utsparinger står åpne,
- tellinger er prikker,
- hver side med markeringer får en liten tegnforklaring nederst til venstre: hver posts farge, navn og mengde på siden.

Originalene av PDF-filene endres ikke.

Merknader:

- Bare PDF-filer som er åpne, skrives ut. Markeringer på PDF-filer som ikke er åpne, står i summene, men tegnes ikke; åpne dem først.
- Navn i tegnforklaringen bruker en standard PDF-skrift. Bokstaver den ikke kan vise, skrives ut som «?».
- En kryptert PDF kan ikke kopieres med markeringer: «Denne PDF-filen er passordbeskyttet eller kryptert, så en markert kopi kan ikke skrives. Mengdeuttaket i seg selv er i orden; eksporter regnearket i stedet.»
- Første {{ui:Marked PDF}} i en fane laster PDF-skriveren. Frakoblet er den bare der hvis programlinjen viser {{ui:Offline ready}}; se [Arbeide frakoblet](common:offline).

:::chromium
Med flere markerte PDF-filer kan Chrome og Edge spørre én gang om nettstedet får laste ned flere filer. Velg Tillat, ellers får du bare den første filen.
:::

## Ingenting å eksportere?

- {{ui:XLSX}} og {{ui:CSV}} trenger minst én post: «Ingenting å eksportere ennå: lag en post og mål den opp.»
- {{ui:Marked PDF}} trenger markeringer på en åpen PDF: «Ingen markeringer på de åpne PDF-filene ennå.»

## Lagre mengdeuttaket også

En eksport er en rapport. For å fortsette å arbeide med mengdeuttaket senere, velg også {{ui:Save takeoff}}: se [Lagre og åpne et mengdeuttak igjen](topic:save-and-reopen).

For å legge til generalkostnader, fortjeneste, avgift og garanti og sende et forslag, se [Tilbudssammendrag og forslag](topic:bid-summary).
