---
title: Nytt i 0.7 (tidligere)
summary: DWG- og DXF-tegninger åpnes som ark med egen målestokk, nøyaktige tellinger og lengder fra selve tegningen, det valgte underentreprenørtilbudet som en pakkes pris, tilbudsinvitasjoner med forseglede priser, assistentverktøy for tegninger og USD fra 3D-kontrollvisningen.
keywords: nytt i 0.7, tidligere utgivelse, utgivelsesnotater, endringslogg, endringer, 0.7, versjon, nye funksjoner, dwg, dxf, tegning, layouter, modellrom, tegningsmålestokk, tell fra tegning, CAD-telling, blokker, dynamiske blokker, attributter, layers, xref, ekstern referanse, mål tegning, polylinje, skravur, markert pdf, valgt tilbud, bruk et tilbud, send for tilbud, tilbudsinvitasjon, forseglede tilbud, tilbudsåpning, sent tilbud, underentreprenørregister, csv, assistent, mcp, usd, usdz, enheter, enhetslister, kompakt, paneler, dialogbokser, portugisisk
from: 0e3a424f
---

Dette er hva som endret seg i TakeoffCraft 0.7, sammenlignet med 0.6. Tegninger åpnes nå slik de er, uten å skrive ut til PDF først, og en tilbudspakke kan sendes til underentreprenører og komme tilbake priset.

## Nytt

### DWG- og DXF-tegninger

- **Åpne en tegning som ark.** {{ui:Open plans}} i gruppen {{ui:File}} ({{key:Mod+O}}, eller slipp filene) tar DWG- og DXF-tegninger ved siden av PDF-er. Modellrommet og hver layout blir ark i listen {{ui:Sheets}}, og et mengdeuttak kan dekke tegninger og PDF-er samtidig. Ingenting lastes opp. Se [Åpne en DWG- eller DXF-tegning](topic:open-a-drawing).
- **Målestokken kommer fra tegningen.** En layout starter i målestokken til det største visningsområdet, navngitt som et forvalg når det er et forvalg, for eksempel 1/2" = 1'-0". Modell starter i tegningens enheter. En tegning uten enheter viser «Ingen målestokk» til du kalibrerer den. {{ui:Calibrate}}, {{ui:Check}} og {{ui:Preset}} vinner fortsatt. Se [Målestokken](topic:open-a-drawing#the-scale).
- **Layers og koblede tegninger.** {{ui:Layers}} på arklinjen viser eller skjuler tegningens layers. Layers som filen slo av eller frøs, starter skjult og telles ikke med mindre du velger det. En koblet tegning (xref) som er åpnet ved siden av verttegningen, tegnes og telles der den settes inn. Til den er åpnet, sier statuslinjen hva som mangler. Se [Layers](topic:open-a-drawing#layers).
- **Markert PDF fungerer fra en tegning.** {{ui:Export}} › {{ui:Marked PDF}} tegner tegningens markerte ark som en PDF først, slik at kopien viser markeringene og tegnforklaringen dine uten utskriftstrinn. Den tegnes i svart eller tegningens farger, uten plottestil-tabeller. Se [En markert PDF](topic:export-estimate#a-marked-pdf).

### Eksakte tellinger og lengder fra en tegning

- **Tell det tegningen sier finnes.** {{ui:CAD count}} på arklinjen teller en blokk etter navn (også nestede blokker, tilstander i dynamiske blokker og blokkrekker), alt av én type på en layer, eller en tekst- eller attributtverdi. Den teller det arket viser, eller hele tegningen én gang. Å legge til markeringene er ett angretrinn, og teller man på nytt, legges bare det nye til. {{ui:Auto count}} forblir for PDF-er og for symboler som ikke er blokker. Se [Tell fra en tegning](topic:count-from-a-drawing).
- **Mål fra tegningens egne linjer.** {{ui:Measure drawing}} tar linjene, buene, polylinjene, sirklene, skravurene og de heldekkende flatene du klikker på eller velger med vindu, som markeringer av en lineær eller arealpost. Buer, bulge og en skravurs hull kommer ut eksakt. Ellipser og splines måles i fine korder, og linjen sier det. Se [Mål fra en tegning](topic:measure-from-a-drawing).

### Tilbud

- **Bruk et underentreprenørtilbud som pakkens pris.** I {{ui:Export}} › {{ui:Bid packages and leveling…}} velger du {{ui:Use}} på et tilbud. Postene i pakken blir værende som mengder, én linje **Chosen bid** bærer prisen, poster tilbudet utelater blir på din egen kostnad, og driftstillegg, fortjeneste og garanti gjelder for den. Å bytte tilbud er ett angretrinn. Arbeidsboken og tilbudssammendraget bærer det med seg. Se [Bruk et tilbud som pakkens pris](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Send en pakke ut på tilbud.** {{ui:Send for bids…}} under en pakke sender hver underentreprenør en e-post med en lenke til en side som ikke krever konto. De ser omfanget og arkene som en PDF, skriver inn en pris på hver linje eller markerer den som ikke inkludert, legger til notater og opptil tre filer, eller takker nei. {{ui:Get prices}} henter inn det som kom tilbake i nivelleringsarket, merket **web**. Å sende er bare åpent for kontoer som CadCraft-teamet har slått på mens det testes (se under). Se [Send en pakke på tilbud](topic:bid-invitations).
- **Forseglet til åpningen.** Priser kan holdes forseglet til et åpningstidspunkt du setter: til da ser ingen en pris, heller ikke du. Ved åpningen vises hvert tilbud med én gang, og et tilbud som kom etter fristen, merkes som **for sent**. Se [Forseglede tilbud og åpningen](topic:bid-invitations#sealed-bids-and-the-opening).
- **Underentreprenørregister.** Kontoen din på getcadcraft.com holder hvert selskaps kontakter, fag, kvalifikasjonssvar og forsikrings- og lisensdatoer (merket én gang de er passert eller innen 30 dager), med deres tidligere tilbud. Importer og eksporter dem som CSV, og velg dem når du sender en pakke. Se [På nettstedet](topic:bid-invitations#on-the-website).

### AI-assistenter

- **Assistenter kan legge til i mengdeuttaket.** Med **Edit** avkrysset kan din egen assistent legge til poster (`items_add`) og måle løpemeter, arealer og tellinger på et ark (`marks_add`; lengder og arealer bare på et skalert ark). Hvert kall er ett angretrinn.
- **Assistentverktøy for tegninger.** På en åpen DWG eller DXF kan en assistent liste opp arkene og det som kan telles, telle nøyaktig, legge til tellemarkeringene, og måle fra tegningens geometri. Uten at TakeoffCraft er åpnet, åpner CadCraft MCP-serveren en tegning som et nytt mengdeuttak og lagrer det. `cadcraft count` teller fra kommandolinjen. Se [Hva en assistent kan be om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D-kontrollvisningen som USD.** {{ui:USD package (.usdz)}} ved siden av {{ui:GLB}} i 3D-kontrollvisningen skriver hver vegg, dekke, plate, tellepost og løpemeter som sitt eget objekt. Hvert objekt er navngitt etter posten og har mengden sin, i meter. En assistent kan også eksportere den (`usd_export`). Se [Eksporter 3D-kontrollvisningen som USD](topic:usd).

## I alle apper

- **Enheter.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} har én liste hver for lengde, areal, volum, vinkel og helning, med de nøyaktige størrelsene enhetenes definisjoner gir (det amerikanske landmålerfotet er sin egen enhet). Slå av enhetene du aldri bruker, så forsvinner de fra enhetslistene. Merk én med stjerne, så starter nytt arbeid i den. En fil beholder alltid sin egen enhet. I TakeoffCraft følger listene for postens {{ui:Unit}} bryterne, en ny post starter i den merkede lengde- eller arealenheten, takkvadrater (SQ), acre og hektar er nye arealenheter, og et lengdefelt tar hvilken som helst enhets betegnelse, for eksempel `3 yd`. Se [Enheter, skrevne verdier og enhetslistene](common:unit-lists).
- **Tettere oppsett og paneler som skjules.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} får mer på skjermen (berøringsskjermer og telefoner beholder de store knappene sine). Hvert sidepanel har en smal tittellinje: dra den for å feste eller frigjøre panelet, slipp den på et annet panels linje for å dele en ramme som faner, fest den så den glir inn mot kanten, eller skjul den og hent den tilbake fra kanten. Se [Ordne panelene](common:arrange-panels#make-the-layout-denser).
- **Dialogbokser kan flyttes.** Dra en dialogboks etter tittellinjen ut av veien for tegningen. Den kommer tilbake der du slapp den. Dobbeltklikk på tittellinjen for å sentrere den igjen. Se [Flytt en dialogboks](common:arrange-panels#move-a-dialog).
- **Oppskrifter for AI-assistenter.** Ti ferdige eksempler til din egen assistent (rydde en tegning, plotte et sett, kontrollere tegninger, stille en modell spørsmål, summere et mengdeuttak, prøve en variant av en del …). Hver har verktøyene den kaller og tillatelsene den trenger, og hver spilles av på nytt av testene våre. Appene inneholder ingen KI. Se [Oppskrifter for KI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** er nytt i {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nå alle ordene i appene, som utkast som ikke er gjennomgått av en morsmålstalende. Hjelpeemnene er på engelsk.
- **CadCraft Studio** sier hvorfor en oppdateringssjekk mislyktes (ingen fil for ditt system ennå, ingen nettverk, feil signatur) i stedet for bare «Ferdig». Den slutter også å vise et «Hva er nytt»-kort du har lukket, før det finnes en nyere utgivelse.

## Ikke i denne versjonen ennå

- **0.7 er ikke kodesignert.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi sertifikatvalideringen ikke har kommet gjennom ennå. Kontroller SHA-256 ved siden av hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velger du {{ui:More info}}, og så {{ui:Run anyway}}. På en Mac, første gang, høyreklikker du CadCraft Studio og velger {{ui:Open}}. CadCraft Studio er ennå ikke i en appbutikk, og det finnes ingen iPad- eller iPhone-versjon ennå.
- Vinkel- og helningslistene i {{ui:Units}} er lagret, men ingen boks leser dem ennå.
- **Tilbudsinvitasjoner er slått av for de fleste kontoer.** Mens funksjonen testes, sendes e-post til eksterne budgivere bare fra kontoer CadCraft-teamet har slått på. Budgivernes sider fungerer for alle invitasjoner som allerede er sendt. Alle andre: last ned {{ui:Scope CSV}}, send den selv på e-post, og skriv inn tilbudene.
- Et CadCraft Studio-vindu kan ikke sende tilbudsinvitasjoner ennå: det sier at du skal bruke TakeoffCraft i nettleseren. Å åpne et mengdeuttak med sendte forespørsler, nivellering og å velge et tilbud fungerer i Studio.
- Tilleggsdokumenter, tildelingsbrev, et omfangsark som hver budgiver godkjenner, og automatiske påminnelser før en forsikringsdato går ut, er ikke bygget. Et valgt tilbud priser ikke om tilbudsområdet for et alternativ.
- Tegninger: plottestil-tabeller og CTB-filer brukes ikke, en binær DXF avvises (lagre den som ASCII-DXF eller DWG), koblede tegninger finnes bare blant de åpne filene, etter filnavn, og PDF-underlag, bilder og OLE-objekter i en tegning tegnes ikke og telles ikke. Tellingene og målestokkene er kontrollert på prøvetegninger, ikke ennå på tegninger fra en ekte jobb åpnet i programmet som laget dem.
- En assistent kan legge til poster og markeringer, men kan ikke flytte, endre eller slette markeringer som allerede finnes.

Alt annet er i [Ikke bygget ennå](topic:not-built-yet).
