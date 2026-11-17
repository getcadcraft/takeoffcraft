---
title: Exportera kalkylen och en markerad PDF
summary: Ladda ner kalkylen som en XLSX-arbetsbok med levande formler eller som CSV, och kopior av dina PDF-filer med avtagningen ritad på.
keywords: offert, anbudssammanfattning, export, xlsx, kalkylblad, arbetsbok, csv, markerad pdf, skriv ut avtagning, rapport, dela, skicka, teckenförklaring
from: 334f89c7
---

Exporter är nedladdningar. De görs på din dator från avtagningen och de öppna PDF-filerna; inget skickas någonstans.

## Kalkylen som kalkylblad (XLSX)

1. Öppna menyn {{ui:Exportera}} i verktygsfältet och välj {{ui:XLSX}}.
   Din webbläsare laddar ner `(namn).xlsx`. Statusfältet säger ”Exporterade (namn).xlsx (kalkyl med levande formler, per blad, markeringar, skalor).” och visar en varning när kalkylen är ofullständig.
2. Öppna den i ditt kalkylprogram.

Arbetsboken har fyra kalkylblad, och rapporterna nedan när de gäller:

| Kalkylblad | Vad det innehåller |
|---|---|
| Kalkyl | En rad per post och per komponent: mängd, spill, mängd med spill, priser, material, arbete, summa, anteckningar. Totalsumman för jobbet längst ner. |
| Per blad | Varje posts mängd på varje blad, med antal markeringar. |
| Markeringar | Varje markering: blad, post, typ, mängd och detalj (segmentlängder, brutto- och urtagsareor, omkrets). |
| Skalor | Varje blad som har en skala eller markeringar: dess skala, hur den angavs (förinställd, eller kalibrerad på vilket avstånd) och fot per PDF-enhet. |
| Mängdsammanfattning | Varje posts mängd, CSI-nummer, markeringar och blad, utan priser. |
| Materiallista | Varje del i kalkylsammansättningarna summerad över hela avtagningen (samma del använd i flera poster blir en rad), med spill och materialkostnad, samt de poster som använder den. |
| Offertförfrågan | Materiallistan att skicka till en leverantör: mängder med spill, en tom kolumn för á-pris, samt belopp och summa som fylls i när priser skrivs in. |
| Per avdelning | Material, arbete och summa per CSI MasterFormat-avdelning, när poster har ett {{ui:CSI-nummer}}. |

Med en [anbudssammanfattning](topic:bid-summary) slutar också kalkylbladet Kalkyl med dess påslag (lönebikostnad, försäljningsskatt, overhead, vinst, borgen och anbudet), som levande formler.

Kalkylbladet Kalkyl har **levande formler**: mängd med spill, de avrundade material- och arbetsbeloppen, varje rads summa och totalsumman för jobbet. Kalkylprogram räknar om dem, så du kan ändra ett pris eller spill i kalkylprogrammet och summorna följer med. De tal som TakeoffCraft räknat ut lagras också i cellerna och stämmer till öre.

Kolumnen Anteckningar listar varje komponents formel, formelfel, markeringar på blad utan skala, väggarea och omkrets. När något utelämnas säger summeringsraden för jobbet ”Ofullständig: se anteckningarna ovan”.

Arbetsboken har kontrollerats i LibreOffice Calc, som räknade om den till samma summor. Den har inte öppnats i Excel än. Detaljer kolumn för kolumn finns i [Exportkolumner](topic:export-columns).

## Kalkylen som CSV

Öppna menyn {{ui:Exportera}} och välj {{ui:CSV}}. Du får `(namn).csv`: samma rader och kolumner som kalkylbladet Kalkyl, som vanliga värden (inga formler), samt totalsumman för jobbet. Använd den för att klistra in i ett annat kalkyl- eller bokföringssystem.

CSV-filen innehåller bara kalkylen; för mängder per blad och markeringslistan använder du XLSX. {{ui:Materiallista}} i samma meny sparar bara materiallistan som CSV, för beställning.

## Kalkylen i Google Sheets

Ovanför tabellen Mängder lägger **Kopiera för Google Sheets** kalkylen på urklipp som tabbseparerad text, med samma rader som CSV-filen. I ett Google Sheets-dokument klickar du på cell A1 och klistrar in. TakeoffCraft loggar inte in hos Google och skickar ingenting dit.

## Saknade priser och godkännande

En rad med mängd men utan pris säger **No rate** i sin Anteckningar, och exporten räknar med dem under summorna. När kalkylen har godkänts anger exporten vem som godkände den, när och för vilken summa. Se [Saknade priser och godkännande av kalkylen](topic:sign-off-the-estimate).

## En markerad PDF

1. Öppna de PDF-filer vars markeringar du vill rita upp.
2. Öppna menyn {{ui:Exportera}} och välj {{ui:Marked PDF}}.
   ”Skriver den markerade PDF-filen…” visas, och sedan laddar din webbläsare ner en fil per markerad PDF, namngiven `(PDF-namn) (avtagning).pdf`.

I kopian:

- sträckor ritas som linjer i postens färg,
- areor fylls lätt med en heldragen kontur, och urtag lämnas öppna,
- antal visas som prickar,
- varje sida med markeringar får en liten teckenförklaring i det nedre vänstra hörnet: varje posts färg, namn och mängd på den sidan.

Dina ursprungliga PDF-filer ändras inte.

Noteringar:

- Bara PDF-filer som är öppna skrivs. Markeringar på PDF-filer som inte är öppna finns kvar i summorna men ritas inte; öppna dessa PDF-filer först.
- Namn i teckenförklaringen använder ett standardtypsnitt för PDF. Bokstäver som det inte kan visa skrivs ut som ”?”.
- En krypterad PDF kan inte kopieras med markeringar: ”Den här PDF-filen är lösenordsskyddad eller krypterad, så en markerad kopia kan inte skrivas. Avtagningen i sig är i ordning; exportera kalkylbladet i stället.”
- Den första {{ui:Marked PDF}} i en flik laddar PDF-skrivaren. Offline finns den bara om appfältet visar {{ui:Redo för offline}}; se [Arbeta offline](common:offline).

:::chromium
Med flera markerade PDF-filer kan Chrome och Edge fråga en gång om den här webbplatsen får ladda ner flera filer. Välj Tillåt, annars får du bara den första filen.
:::

## Inget att exportera?

- {{ui:XLSX}} och {{ui:CSV}} kräver minst en post: ”Inget att exportera än: skapa en post och räkna av den.”
- {{ui:Marked PDF}} kräver markeringar på en öppen PDF: ”Inga markeringar på de öppna PDF-filerna än.”

## Spara avtagningen också

En export är en rapport. För att fortsätta arbeta med avtagningen senare väljer du också {{ui:Spara avtagning}}: se [Spara och öppna en avtagning igen](topic:save-and-reopen).

För att lägga till overhead, vinst, skatt och borgen och skicka en offert, se [Anbudssammanfattning och offert](topic:bid-summary).
