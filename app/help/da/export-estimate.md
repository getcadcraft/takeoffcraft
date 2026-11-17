---
title: Eksportér kalkulationen og en markeret PDF
summary: Hent kalkulationen som en XLSX-projektmappe med levende formler eller som CSV, og kopier af dine PDF'er med mængdeudtrækket tegnet ind.
keywords: forslag, tilbudsoversigt, eksport, xlsx, regneark, projektmappe, csv, markeret pdf, udskriv mængdeudtræk, rapport, del, send, signaturforklaring
from: 334f89c7
---

Eksporter er downloads. De laves på din computer ud fra mængdeudtrækket og de åbne PDF'er; intet sendes nogen steder hen.

## Kalkulationen som regneark (XLSX)

1. Åbn menuen {{ui:Eksportér}} i værktøjslinjen, og vælg {{ui:XLSX}}.
   Din browser henter `(navn).xlsx`. Statuslinjen siger "Eksporteret (navn).xlsx (kalkulation med levende formler, pr. ark, markeringer, målestoksforhold)." og tilføjer en advarsel, når kalkulationen er ufuldstændig.
2. Åbn den i dit regnearksprogram.

Projektmappen har fire regneark og rapporterne nedenfor, når de er relevante:

| Regneark | Indhold |
|---|---|
| Kalkulation | En række pr. post og pr. komponent: mængde, spild, mængde med spild, priser, materiale, løn, i alt, noter. Projektets samlede total nederst. |
| Pr. ark | Hver posts mængde på hvert ark, med antal markeringer. |
| Markeringer | Hver markering: ark, post, type, mængde og detaljer (segmentlængder, brutto- og udsparingsarealer, omkreds). |
| Målestoksforhold | Hvert ark, der har en målestok eller markeringer: dets målestok, hvordan den er angivet (forudindstilling, eller kalibreret ud fra hvilken afstand), og fod pr. PDF-enhed. |
| Mængdeoversigt | Hver posts mængde, CSI-nummer, markeringer og ark, uden priser. |
| Materialeliste | Alle dele i kalkulationsenhederne lagt sammen på tværs af mængdeudtrækket (den samme del brugt af flere poster er én linje), med spild og materialeomkostning, og de poster, der bruger den. |
| Tilbudsforespørgsel | Materialelisten til at sende en leverandør: mængder med spild, en tom kolonne for enhedspriser, og udregnede beløb og en total, der udfyldes, når priserne skrives ind. |
| Pr. afdeling | Materiale, løn og i alt pr. CSI MasterFormat-afdeling, når poster har et {{ui:CSI-nummer}}. |

Med en [tilbudsoversigt](topic:bid-summary) slutter regnearket Kalkulation også med sine tillæg (lønbyrde, salgsafgift, overhead, fortjeneste, garanti og tilbuddet) som levende formler.

Regnearket Kalkulation bevarer **levende formler**: mængde med spild, de afrundede materiale- og lønbeløb, hver rækkes total og projektets samlede total. Regnearksprogrammer genberegner dem, så du kan ændre en pris eller et spild i regnearket, og totalerne følger med. De tal, TakeoffCraft har beregnet, er også gemt i cellerne og stemmer til øren.

Noter-kolonnen viser hver komponents formel, formelfejl, markeringer på ark uden målestok, vægareal og omkreds. Når noget er udeladt, siger rækken med projektets samlede total "Ufuldstændig: se noterne ovenfor".

Projektmappen er kontrolleret i LibreOffice Calc, som genberegnede den til de samme totaler. Den er endnu ikke åbnet i Excel. Detaljer kolonne for kolonne står i [Eksportkolonner](topic:export-columns).

## Kalkulationen som CSV

Åbn menuen {{ui:Eksportér}}, og vælg {{ui:CSV}}. Du får `(navn).csv`: de samme rækker og kolonner som regnearket Kalkulation, som almindelige værdier (ingen formler), og projektets samlede total. Brug den til at indsætte i et andet kalkulations- eller regnskabssystem.

CSV-filen indeholder kun kalkulationen; til mængder pr. ark og markeringslisten bruges XLSX. {{ui:Materialeliste}} i samme menu gemmer materialelisten alene som CSV til bestilling.

## Kalkulationen i Google Sheets

Over mængdetabellen lægger **Kopiér til Google Sheets** kalkulationen på din udklipsholder som tabulatorsepareret tekst, med de samme linjer som CSV-filen. I et Google Sheet klikkes på celle A1, og der indsættes. TakeoffCraft logger ikke ind hos Google og sender intet dertil.

## Manglende priser og godkendelse

En linje med en mængde og uden pris står med **Ingen pris** i sine noter, og eksporten tæller dem med under totalerne. Når kalkulationen er godkendt, angiver eksporten hvem der godkendte, hvornår og for hvilken total. Se [Manglende priser og godkendelse af kalkulationen](topic:sign-off-the-estimate).

## En markeret PDF

1. Åbn de PDF'er, hvis markeringer du vil have tegnet ind.
2. Åbn menuen {{ui:Eksportér}}, og vælg {{ui:Markeret PDF}}.
   "Skriver den markerede PDF …" vises, derefter henter din browser én fil pr. markeret PDF, navngivet `(PDF-navn) (mængdeudtræk).pdf`.

I kopien:

- strækninger tegnes som linjer i postens farve,
- arealer udfyldes let med en massiv kontur, og udsparinger efterlades åbne,
- tællinger er prikker,
- hver side med markeringer får en lille signaturforklaring i nederste venstre hjørne: hver posts farve, navn og mængde på den side.

Dine oprindelige PDF'er ændres ikke.

Noter:

- Kun PDF'er, der er åbne, skrives. Markeringer på PDF'er, der ikke er åbne, bliver i totalerne, men tegnes ikke; åbn de PDF'er først.
- Navne i signaturforklaringen bruger en standard PDF-skrifttype. Bogstaver, den ikke kan vise, udskrives som "?".
- En krypteret PDF kan ikke kopieres med markeringer: "Denne PDF er beskyttet med adgangskode eller krypteret, så en markeret kopi kan ikke skrives. Selve mængdeudtrækket er i orden; eksportér i stedet regnearket."
- Den første {{ui:Markeret PDF}} i en fane indlæser PDF-skriveren. Offline er den kun til stede, hvis appbjælken viser {{ui:Klar offline}}; se [Arbejde offline](common:offline).

:::chromium
Med flere markerede PDF'er kan Chrome og Edge spørge én gang, om dette websted må hente flere filer. Vælg Tillad, ellers får du kun den første fil.
:::

## Intet at eksportere?

- {{ui:XLSX}} og {{ui:CSV}} kræver mindst én post: "Intet at eksportere endnu: lav en post og tag mål af den."
- {{ui:Markeret PDF}} kræver markeringer på en åben PDF: "Ingen markeringer på de åbne PDF'er endnu."

## Gem også mængdeudtrækket

En eksport er en rapport. Hvis du vil fortsætte med mængdeudtrækket senere, skal du også vælge {{ui:Gem mængdeudtræk}}: se [Gem og genåbn et mængdeudtræk](topic:save-and-reopen).

Hvis du vil tilføje overhead, fortjeneste, afgift og garanti og sende et forslag, se [Tilbudsoversigt og forslag](topic:bid-summary).
