---
title: Fejlfinding
summary: Symptomer, årsager og løsninger på de meddelelser og overraskelser, du kan støde på i TakeoffCraft, citeret som appen viser dem.
keywords: problemer, fejl, virker ikke, løsning, hjælp, afvist, kan ikke måle, ingen målestok, manglende mærker, eksport mislykkedes, offline, touch
from: cd319c9b
---

TakeoffCraft forklarer de fleste afvisninger i statuslinjen nederst i vinduet. Find meddelelsen nedenfor.

## Åbning af filer

| Meddelelse eller symptom | Årsag | Løsning |
|---|---|---|
| PDF-læseren kunne ikke indlæses. Genindlæs siden for at prøve igen. | Appens PDF-læser blev ikke indlæst, typisk fordi du er offline, og appen aldrig blev gemt til offline brug. | Opret forbindelse og genindlæs. Vælg derefter {{ui:Gem til offline brug}} og vent på {{ui:Klar offline}}; se [Arbejde offline](common:offline). |
| (name) er beskyttet med adgangskode. Åbn en kopi uden beskyttelse. | PDF'en kræver en adgangskode for at åbne. | Bed om en kopi uden beskyttelse, eller fjern adgangskoden i et PDF-program, du stoler på. |
| (name) kunne ikke læses som en PDF (…) | Filen er beskadiget eller ikke rigtig en PDF. | Hent den igen, eller gem den på ny fra det program, der lavede den. |
| (name) er allerede åbnet. | Den samme PDF (samme indhold) er åbnet. | Intet at gøre. |
| TakeoffCraft åbner PDF'er og .takeoff.json-projekter. Sprunget over: … | Andre filtyper blev fjernet. | Konvertér tegninger til PDF først. |
| Intet sker, når jeg slipper filer | Filerne blev sluppet uden for browservinduet, eller browseren åbnede PDF'en i en ny fane. | Slip dem på selve TakeoffCraft-siden; rammen »Slip PDF'er eller en .takeoff.json« viser, når det vil virke. |
| Det tager et stykke tid at åbne et stort sæt | Hver PDF læses i sin helhed for at identificere den. | Vent, til meddelelsen »Åbner (name)…« forsvinder. Miniaturer udfyldes, når du scroller. |

## Måling

| Meddelelse eller symptom | Årsag | Løsning |
|---|---|---|
| Åbn en PDF først. | Intet ark er åbent. | Åbn en PDF. |
| Dette ark har endnu ingen målestok, så det kan ikke måles. Vælg en forudindstillet målestok, eller kalibrér først (tællinger virker uden). | Lineær-, areal-, cirkel- og udsparingsværktøjerne kræver en målestok. | [Angiv målestokken](topic:set-the-scale). |
| Lav først en lineær post (navngiv den under Poster), og klik derefter på arket. | Der findes ingen post af den type. | Udfyld formularen {{ui:Ny post}}, der åbnede, og vælg {{ui:Tilføj}}. |
| Vælg først en post at udtage (panelet Poster). | Den aktuelle post er slettet. | Klik på en post under {{ui:Poster}}. |
| Et forløb kræver mindst to punkter. | Du afsluttede efter ét klik. | Klik mindst to punkter. |
| Et areal kræver mindst tre punkter. | For få hjørner. | Klik mindst tre hjørner. |
| Konturen krydser sig selv, så dens areal ville være forkert. Tegn den igen uden at krydse. | En figur-otte-form. | Tegn den som to arealer, eller gå rundt om kanten i rækkefølge. |
| Disse punkter omslutter intet areal. | Alle punkterne ligger på én linje. | Klik hjørner, der omslutter et rum. |
| Vælg først et arealmærke (værktøjet Vælg), og vælg derefter Udsparing og tegn hullet inde i det. | {{ui:Udsparing}} kræver et valgt areal. | Tryk {{key:V}}, klik på arealet, og tryk derefter {{key:X}}. |
| En udsparing skal ligge helt inde i arealet. | Hullet krydser eller forlader konturen. | Tegn hullet inde i arealet. |
| Udsparinger kan ikke overlappe hinanden. | To huller overlapper. | Tegn ét hul rundt om begge, eller hold dem adskilt. |
| … Punktet blev sat tilbage. | Et trukket hjørne ville få konturen til at krydse sig selv eller skubbe et hul ud af arealet. | Træk til et sted, der holder formen gyldig. |
| Klik på et punkt på cirklens kant, væk fra centrum. | Det andet klik var for tæt på centrum. | Klik længere ude. |
| Klik panorerer arket i stedet for at tilføje punkter | Markøren flyttede sig mere end et par pixels, mens knappen var nede; det tæller som et træk. | Klik uden at flytte, især på et touchpad. |
| Shift fanger ikke | Du placerer et punkt på en bue, eller du tegner en cirkel. | 45°-fanget gælder kun for lige segmenter. |
| Punkter springer til en nærliggende linje | Fang til tegningens linjer er slået til. | Zoom ind for at klikke mellem linjer, eller tryk {{key:F3}} for at slå Fang fra. |
| Ingen fangmarkør vises | Fang er slået fra, arket er en scanning, eller værktøjet fanger ikke (Tæl, Auto-tælling, indsættelse). | Tryk {{key:F3}}; på en scanning er der ingen linjer at fange til. |
| Længden er forkert | Målestokken er forkert (ofte en PDF, der er ændret i størrelse, med en forudindstilling). | Brug {{ui:Kontrollér}} på et kendt mål, og derefter {{ui:Kalibrér}}. |

## Målestok

| Meddelelse eller symptom | Årsag | Løsning |
|---|---|---|
| Vælg to punkter længere fra hinanden. | Kalibreringspunkterne ligger næsten oven på hinanden. | Kalibrér på et længere mål. |
| En meddelelse i kalibreringsdialogen, for eksempel »Den afstand kunne ikke læses« | Afstanden er i en form, TakeoffCraft ikke kan læse. | Se [Indtastning af længde, pris og procent](topic:entry-formats). |
| Dette ark har endnu ingen målestok, så der er intet at kontrollere. Kalibrér det, eller vælg en forudindstilling. | {{ui:Kontrollér}} på et ark uden målestok. | Angiv en målestok først. |
| Listen {{ui:Forudindstilling}} er nedtonet | Intet ark er åbent. | Åbn en PDF. |

## Mængder og formler

| Meddelelse eller symptom | Årsag | Løsning |
|---|---|---|
| Ufuldstændig: … (ikke med i summerne) | En formelfejl, eller mærker på ark uden målestok. | Se [Læs mængder og kalkulationen](topic:read-quantities#the-incomplete-warning). |
| +(n) uden målestok ved siden af en post | Nogle af dets mærker ligger på ark uden målestok. | Giv disse ark en målestok. |
| Formelfejl: … | Formlen kan ikke beregnes. | Se [Formelsprog](topic:formulas#errors). |
| Denne post har mærker, så dens type kan ikke ændres. | Typen er låst, når der er mærker. | Lav en ny post af den anden type, og tegn mærkerne igen med den. |
| En post skal have et navn. | Navnefeltet blev tømt. | Skriv et navn. |
| Skriv et beløb som 12.50. / Skriv en procent som 10 eller 7.5. | En pris eller spild kunne ikke læses. | Se [Indtastning af længde, pris og procent](topic:entry-formats). |
| En sum ser dobbelt ud | Posten har sine egne priser og komponenter, der bærer samme omkostning. | Sæt postens egne priser til 0, når dens komponenter bærer omkostningen. |
| Denne posts mærker ligger på PDF'er, der ikke er åbne. | Du klikkede på en post, hvis mærker alle ligger på PDF'er, du ikke har åbnet. | Åbn disse PDF'er; deres navne står under {{ui:Ark}}. |

## Auto-tælling

| Meddelelse eller symptom | Årsag | Løsning |
|---|---|---|
| Den boks er for lille. Tegn den rundt om hele symbolet. | Boksen er meget lille. | Zoom ind, og tegn boksen rundt om hele symbolet. |
| Den boks er næsten tom. Tegn den rundt om et symbol. | Boksen indeholder kun papir. | Tegn boksen om selve symbolet. |
| Ingen træffere. Sænk skyderen {{ui:Match}}, eller tegn boksen tættere om symbolet. | Intet fik høj nok score. | Tegn boksen tæt om symbolet, eller træk {{ui:Match}}-skyderen længere ned. |
| For mange træffere, herunder forkerte symboler | Lignende symboler scorer tæt på det rigtige. | Hæv {{ui:Match}}-skyderen, og klik på forkerte bokse for at forkaste dem. |
| Træffere mangler på andre ark | De ark tegner symbolet i en anden størrelse, eller i en vinkel, der ikke er et 90°-trin. | Søg på de ark med en boks tegnet dér, eller tæl i hånden. |
| (n) ark var for store til at søge i ved denne symbolstørrelse. | Arket ville være for stort ved arbejdsstørrelsen. | Tegn en større boks om symbolet, eller tæl det ark i hånden. |
| Søgningen mislykkedes: … | Baggrundssøgningen stoppede. | Prøv igen; genindlæs siden, hvis det gentager sig (gem først). Offline virker det først, når appbaren viser {{ui:Klar offline}}. |
| Træk tegner en boks i stedet for at panorere | Sådan virker {{ui:Auto-tælling}}. | Hold {{key:Space}} nede og træk, eller træk med midterknappen. |

## Gem og eksport

| Meddelelse eller symptom | Årsag | Løsning |
|---|---|---|
| Intet at eksportere endnu: lav en post og udtag den. | Der er ingen poster. | Lav en post først. |
| Ingen mærker på de åbne PDF'er endnu. | {{ui:Markeret PDF}} har intet at tegne på de åbne PDF'er. | Åbn de PDF'er, der har mærker. |
| Denne PDF er beskyttet med adgangskode eller krypteret, så en markeret kopi ikke kan skrives. … | PDF'en er krypteret. | Eksportér {{ui:XLSX}} i stedet, eller brug en ukrypteret kopi af PDF'en (den får så sit eget mængdeudtræk, da det er en anden fil). |
| Den markerede PDF kunne ikke skrives: … | Ofte: offline, og appen blev ikke gemt til offline brug, så PDF-skriveren mangler. | Gå online, og vælg {{ui:Markeret PDF}} igen. For at undgå det vælger du {{ui:Gem til offline brug}} og venter på {{ui:Klar offline}}. |
| Kun én markeret PDF blev hentet | Browseren blokerede flere hentninger på én gang. | Tillad flere hentninger for dette sted, og eksportér igen. |
| (file) er ikke et TakeoffCraft-projekt (det er ikke gyldig JSON). / Dette er ikke en TakeoffCraft-projektfil. | Forkert fil, eller en beskadiget. | Vælg filen `.takeoff.json`. |
| Dette projekt blev gemt af en nyere TakeoffCraft. Åbn det der. | Filen stammer fra en nyere build. | Åbn den i den nyere build. |
| (n) mærker var beskadiget og blev udeladt. | En del af filen var beskadiget eller redigeret i hånden. | Resten blev åbnet. Tegn de manglende mærker igen, eller åbn en ældre kopi. |
| Mærker mangler efter genåbning | PDF'erne er ikke åbne, eller en af dem er ændret. | Se [Gem og genåbn et mængdeudtræk](topic:save-and-reopen#when-a-pdf-has-changed). |
| Browseren spørger »Forlad siden?« | Der er ikke-gemte ændringer. | Bliv, og gem med {{key:Mod+S}}. |

## Taster og mus

| Symptom | Årsag | Løsning |
|---|---|---|
| Bogstavtaster gør intet | Markøren står i et felt (søgning, postredigering, tabel). | Klik på arket, eller tryk {{key:Tab}} for at komme ud af feltet. |
| Hjulet zoomer i stedet for at scrolle | Hjulet zoomer altid arket. | Træk for at panorere. |
| Hele siden blev større eller mindre | Browserzoom ({{key:Mod+Plus}} eller {{key:Mod+Minus}}). | Tryk {{key:Mod+0}}. Zoom arket med hjulet eller de rene {{key:Plus}} og {{key:Minus}}. |
| Et mærke forsvandt, da jeg trykkede på Backspace | Backspace sletter det valgte mærke, når du ikke tegner. | {{key:Mod+Z}} henter det tilbage. |
| Højreklik afslutter ikke på en Mac | Control-klik kommer ind som et almindeligt klik. | Brug et klik med to fingre, med sekundær klik slået til, eller tryk {{key:Enter}}. |

## Touchskærme

På en touchskærm:

- **Tryk** placerer et punkt (eller vælger et mærke med {{ui:Vælg}}). Træk med én finger panorerer.
- **To fingre** knibes for at zoome om punktet mellem dem, og panorerer, når de bevæger sig sammen. Hvis du sætter en anden finger ned, annulleres det, den første startede, så et knib aldrig efterlader et punkt.
- **Afslut** et forløb eller en kontur med et **langt tryk** (højreklikket), et **dobbelttryk** eller {{ui:Afslut}} i baren nederst på arket. Den samme bar har {{ui:Bagside}} (tag det sidste punkt tilbage) og {{ui:Annuller}}. Arealer lukkes også ved at trykke på første punkt.
- Fingre får større mål: punkter fanger, lukker og vælges fra længere væk, og hjørnegreb er større.

Indtastning af længder kræver et tastatur; skærmtastaturet virker, når feltet {{ui:Skriv}} er aktivt.

På en tablet gør et tastatur og en mus eller et touchpad mængdeudtræk meget lettere.

## Arbejde offline

| Knap eller symptom | Årsag | Løsning |
|---|---|---|
| {{ui:Kunne ikke gemme}} | Nogle af appens filer blev ikke hentet, mens den blev gemt til offline brug. | Tjek din forbindelse, og vælg knappen igen. |
| {{ui:Offline er ikke tilgængelig}} | Private vinduer og nogle administrerede computere blokerer offline-kopier. | Brug et normalt vindue eller en anden browser. |
| »Gemmer…« starter aldrig | Du er offline; gemning kræver en forbindelse. | Gem når du er online. |
| Appen er gammel efter en opdatering | Offline-kopien er fra en tidligere dag. | Online: vælg {{ui:Klar offline}}, og derefter {{ui:Gem igen (hent den nyeste version)}}. |
| Du vil have pladsen tilbage | Offline-kopien fylder cirka 6 MB. | Vælg {{ui:Klar offline}}, og derefter {{ui:Fjern offlinekopien}}. |

Se [Arbejde offline](common:offline).

## Stadig fast

Genindlæs siden, hvis appen holder op med at svare. Dit mængdeudtræk går tabt ved genindlæsning, medmindre du har gemt det, så gem først med {{key:Mod+S}}, hvis du kan. Har du spørgsmål om browsere, se [Browsere og computere](common:browsers).
