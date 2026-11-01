---
title: Nytt i 0.7
summary: DWG- og DXF-tegninger åpnes som ark med sin egen målestokk, nøyaktige antall og lengder fra selve tegningen, det valgte underentreprenørtilbudet som pakkens pris, tilbudsinvitasjoner med forseglede priser, assistentverktøy for tegninger og USD fra 3D-kontrollvisningen.
keywords: nytt, hva er nytt, versjonsmerknader, endringslogg, endringer, 0.7, versjon, nye funksjoner, dwg, dxf, tegning, layouter, modellrom, tegningsmålestokk, tell fra tegning, cad-telling, blokker, dynamiske blokker, attributter, layer, xref, ekstern referanse, mål tegning, polylinje, skravur, markert pdf, valgt tilbud, bruk et tilbud, send for tilbud, tilbudsinvitasjon, forseglede tilbud, tilbudsåpning, sent tilbud, underentreprenørregister, csv, assistent, mcp, usd, usdz, enheter, enhetslister, kompakt, paneler, dialogbokser, portugisisk
from: ad4f0df1
---

Dette er hva som er endret i TakeoffCraft 0.7 sammenlignet med 0.6. Tegninger åpnes nå som de er, uten å plotte til PDF først, og en tilbudspakke kan gå ut til underentreprenører og komme tilbake prissatt.

## Nytt

### DWG- og DXF-tegninger

- **Åpne en tegning som ark.** {{ui:Åpne tegninger}} i gruppen {{ui:Fil}} ({{key:Mod+O}}, eller slipp filene) tar DWG- og DXF-tegninger ved siden av PDF-er. Modellrommet og hver layout blir ark i listen {{ui:Ark}}, og et mengdeuttak kan dekke tegninger og PDF-er sammen. Ingenting lastes opp. Se [Åpne en DWG- eller DXF-tegning](topic:open-a-drawing).
- **Målestokken kommer fra tegningen.** En layout starter i målestokken til det største visningsområdet, navngitt som et forvalg når det er et, for eksempel 1/2" = 1'-0". Modell starter i tegningens enheter. En tegning uten enheter sier «Ingen målestokk» til du kalibrerer den. {{ui:Kalibrer}}, {{ui:Kontroller}} og {{ui:Forvalg}} vinner fortsatt. Se [Målestokken](topic:open-a-drawing#the-scale).
- **Layer og eksterne tegninger.** {{ui:Layers}} på arklinjen viser eller skjuler tegningens layer. Layer som filen slo av eller frøs, starter skjult og telles ikke med mindre du velger det. En ekstern tegning (xref) åpnet ved siden av vertstegningen tegnes og telles der den er satt inn; til den er åpen, sier statuslinjen hva som mangler. Se [Layer](topic:open-a-drawing#layers).
- **Den markerte PDF-en virker fra en tegning.** {{ui:Eksporter}} › {{ui:Markert PDF}} tegner de markerte arkene til en tegning som PDF først, slik at kopien viser markeringene og tegnforklaringen dine uten noe plottetrinn. Den tegnes i svart eller tegningens farger, uten plottstiltabeller. Se [En markert PDF](topic:export-estimate#a-marked-pdf).

### Nøyaktige antall og lengder fra en tegning

- **Tell det tegningen sier er der.** {{ui:CAD-telling}} på arklinjen teller en blokk etter navn (nestede blokker, dynamiske blokktilstander og blokkmatriser inkludert), alt av én type på et layer, eller en tekst- eller attributtverdi. Den teller det arket viser, eller hele tegningen én gang. Å legge til markeringene er ett angretrinn, og å telle på nytt legger bare til det som er nytt. {{ui:Autotelling}} er der fortsatt for PDF-er og for symboler som ikke er blokker. Se [Tell fra en tegning](topic:count-from-a-drawing).
- **Mål fra tegningens egne linjer.** {{ui:Mål tegning}} tar linjene, buene, polylinjene, sirklene, skravurene og volumlegemene du klikker eller tar med et vindu, som markeringer av en linjær post eller en arealpost. Buer, buktninger og hullene i en skravur kommer ut nøyaktige; ellipser og splines måles i fine korder, og linjen sier det. Se [Mål fra en tegning](topic:measure-from-a-drawing).

### Tilbud

- **Bruk en underentreprenørs tilbud som pakkens pris.** I {{ui:Eksporter}} › {{ui:Tilbudspakker og nivellering…}} velger du {{ui:Bruk}} på et tilbud. Pakkens poster blir stående som mengder, én linje **Valgt tilbud** bærer prisen, poster tilbudet utelater, blir stående til din egen kostnad, og påslag, fortjeneste og garanti gjelder for den. Å bytte tilbud er ett angretrinn; arbeidsboken og tilbudssammendraget bærer det. Se [Bruk et tilbud som pakkens pris](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Send en pakke for tilbud.** {{ui:Send for tilbud…}} under en pakke sender hver underentreprenør en e-post med en lenke til en side som ikke krever konto: de ser omfanget og arkene som PDF, skriver en pris på hver linje eller markerer den som ikke inkludert, legger til merknader og opptil tre filer, eller takker nei. {{ui:Hent priser}} henter det som kom tilbake inn i nivelleringsarket, merket **web**. Utsending er åpen bare for kontoer CadCraft-teamet har slått på mens det testes (se nedenfor). Se [Send en pakke for tilbud](topic:bid-invitations).
- **Forseglet til åpningen.** Priser kan forbli forseglet til et åpningstidspunkt du angir: til da ser ingen en pris, deg selv inkludert. Ved åpningen vises hvert tilbud på én gang, og et tilbud som kom etter fristen, merkes som sent. Se [Forseglede tilbud og åpningen](topic:bid-invitations#sealed-bids-and-the-opening).
- **Underentreprenørregister.** Kontoen din på getcadcraft.com beholder hvert firmas kontakter, fag, kvalifikasjonssvar og forsikrings- og sertifikatdatoer (merket når de er passert eller innen 30 dager), med tidligere tilbud. Importer og eksporter dem som CSV, og velg dem når du sender en pakke. Se [På nettstedet](topic:bid-invitations#on-the-website).

### AI-assistenter

- **Assistenter kan legge til i mengdeuttaket.** Med **Rediger** avhuket kan din egen assistent legge til poster (`items_add`) og måle strekninger, areal og antall på et ark (`marks_add`; lengder og areal bare på et ark med målestokk), hvert kall ett angretrinn.
- **Assistentverktøy for tegninger.** På en åpen DWG eller DXF kan en assistent liste arkene og hva som kan telles, telle nøyaktig, legge til telle-markeringene og måle fra tegningens geometri. Uten at TakeoffCraft er åpen, åpner CadCraft MCP-serveren en tegning som et nytt mengdeuttak og lagrer det, og `cadcraft count` teller fra kommandolinjen. Se [Hva en assistent kan be om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D-kontrollvisningen som USD.** {{ui:USD-pakke (.usdz)}} ved siden av {{ui:GLB}} i 3D-kontrollvisningen skriver hver vegg, dekke, plate, telle-påle og strekning som sitt eget objekt, oppkalt etter posten sin og med mengden sin, i meter. En assistent kan også eksportere den (`usd_export`). Se [Eksporter 3D-kontrollvisningen som USD](topic:usd).

## I alle apper

- **Enheter.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}} har én liste hver for lengde, areal, volum, vinkel og fall, med de nøyaktige størrelsene enhetsdefinisjonene gir (den amerikanske oppmålingsfoten er sin egen enhet). Slå av enhetene du aldri bruker, så forsvinner de fra enhetslistene; sett stjerne på én, så starter nytt arbeid i den. En fil beholder alltid sin egen enhet. I TakeoffCraft følger postens {{ui:Enhet}}-lister bryterne, en ny post starter i den stjernemerkede lengde- eller arealenheten, takkvadrater (SQ), acre og hektar er nye arealenheter, og en lengdeboks tar hvilken som helst enhets betegnelse, for eksempel `3 yd`. Se [Enheter, innskrevne verdier og enhetslistene](common:unit-lists).
- **Et tettere oppsett og paneler som rydder seg bort.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layouttetthet}} › {{ui:Kompakt}} får plass til mer på skjermen (berøringsskjermer og telefoner beholder de store knappene). Hvert sidepanel har en slank tittellinje: dra i den for å feste eller frigjøre panelet, slipp det på tittellinjen til et annet panel for å dele én ramme som faner, fest det slik at det glir bort til kanten, eller skjul det og hent det tilbake fra kanten. Se [Ordne panelene](common:arrange-panels#make-the-layout-denser).
- **Dialogbokser flyttes.** Dra en dialogboks i tittellinjen bort fra tegningen; den kommer tilbake der du lot den stå. Dobbeltklikk på tittellinjen for å sentrere den igjen. Se [Flytt en dialogboks](common:arrange-panels#move-a-dialog).
- **Oppskrifter for AI-assistenter.** Ti gjennomarbeidede forespørsler til din egen assistent (rydde en tegning, plotte et sett, kontrollere tegninger, stille en modell spørsmål, summere et mengdeuttak, prøve en delvariant …), hver med verktøyene den kaller og tillatelsene den trenger, og hver avspilt av testene våre. Appene inneholder ingen AI. Se [Oppskrifter for AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** er nytt i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nå hvert ord i appene, som utkast som ennå ikke er gjennomgått av en morsmålsbruker. Hjelpeemnene er på engelsk.
- **CadCraft Studio** sier hvorfor en oppdateringssjekk mislyktes (ingen fil for systemet ditt ennå, ikke noe nettverk, en ugyldig signatur) i stedet for bare «Ferdig», og slutter å hente tilbake et Nytt-kort du har lukket før det finnes en nyere utgivelse.

## Ikke i denne versjonen ennå

- **0.7 er ikke kodesignert.** Signering og Microsoft Store-pakken er flyttet til 0.8 fordi sertifikatvalideringen ikke har kommet gjennom ennå. Kontroller SHA-256 ved siden av hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velg {{ui:Mer informasjon}}, deretter {{ui:Kjør likevel}}. På en Mac høyreklikker du CadCraft Studio første gang og velger {{ui:Åpne}}. CadCraft Studio er ikke i noen appbutikk ennå, og det finnes ingen iPad- eller iPhone-versjon ennå.
- Vinkel- og fall-listene i {{ui:Enheter}} lagres, men ingen boks leser dem ennå.
- **Tilbudsinvitasjoner er slått av for de fleste kontoer.** Mens funksjonen testes, sendes e-post til eksterne tilbydere bare fra kontoer CadCraft-teamet har slått på. Tilbydernes sider fungerer for hver invitasjon som allerede er sendt. Alle andre: last ned {{ui:Omfang som CSV}}, send den selv på e-post og skriv inn tilbudene.
- Et CadCraft Studio-vindu kan ikke sende tilbudsinvitasjoner ennå: det sier at du skal bruke TakeoffCraft i nettleseren. Å åpne et mengdeuttak med sendte forespørsler, nivellering og valg av tilbud fungerer i Studio.
- Tillegg, tildelingsbrev, et omfangsark som hver tilbyder signerer, og automatiske påminnelser før en forsikringsdato løper ut, er ikke bygget. Et valgt tilbud reprisser ikke tilbudsområdet til et alternativ.
- Tegninger: plottstiltabeller og CTB-filer brukes ikke, en binær DXF avvises (lagre den som ASCII-DXF eller DWG), eksterne tegninger finnes bare blant de åpne filene etter filnavn, og PDF-underlag, bilder og OLE-objekter i en tegning tegnes eller telles ikke. Antallene og målestokkene er kontrollert på eksempeltegninger, ennå ikke på tegninger fra en ekte jobb åpnet i programmet som laget dem.
- En assistent kan legge til poster og markeringer, men kan ikke flytte, endre eller slette markeringer som allerede finnes.

Alt annet står i [Ikke bygget ennå](topic:not-built-yet).
