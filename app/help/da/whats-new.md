---
title: Nyheder i 0.7
summary: DWG- og DXF-tegninger åbnes som ark med deres egen målestok, nøjagtige tællinger og længder fra selve tegningen, det valgte underentreprenørtilbud som en pakkes pris, tilbudsindbydelser med forseglede priser, assistentværktøjer til tegninger og USD fra 3D-kontrolvisningen.
keywords: nyheder, udgivelsesnoter, ændringslog, ændringer, 0.7, version, nye funktioner, dwg, dxf, tegning, layouts, modelrum, tegningens målestok, tæl fra tegning, cad-tælling, blokke, dynamiske blokke, attributter, lag, xref, ekstern reference, mål tegning, polylinje, skravering, markeret pdf, valgt tilbud, brug et tilbud, send til tilbud, tilbudsindbydelse, forseglede tilbud, tilbudsåbning, sent tilbud, underentreprenørposter, csv, assistent, mcp, usd, usdz, enheder, enhedslister, kompakt, paneler, dialogbokse, portugisisk
from: ad4f0df1
---

Her er, hvad der er ændret i TakeoffCraft 0.7 i forhold til 0.6. Tegninger åbnes nu, som de er, uden at skulle plottes til PDF først, og en tilbudspakke kan sendes ud til underentreprenører og komme tilbage prissat.

## Nyt

### DWG- og DXF-tegninger

- **Åbn en tegning som ark.** {{ui:Åbn tegninger}} i gruppen {{ui:Fil}} ({{key:Mod+O}}, eller slip filerne) tager DWG- og DXF-tegninger ved siden af PDF'er. Modelrummet og hvert layout bliver til ark i listen {{ui:Ark}}, og et mængdeudtræk kan dække tegninger og PDF'er sammen. Der uploades ikke noget. Se [Åbn en DWG- eller DXF-tegning](topic:open-a-drawing).
- **Målestokken kommer fra tegningen.** Et layout starter i målestokken for sit største viewport, navngivet som en forudindstilling, når det er en, såsom 1/2" = 1'-0". Model starter i tegningens enheder. En tegning uden enheder siger »Ingen målestok«, indtil du kalibrerer den. {{ui:Kalibrér}}, {{ui:Kontrollér}} og {{ui:Forudindstilling}} vinder stadig. Se [Målestokken](topic:open-a-drawing#the-scale).
- **Lag og eksterne tegninger.** {{ui:Lag}} på arklinjen viser eller skjuler tegningens lag. Lag, som filen har slukket eller frosset, starter skjulte og tælles ikke med, medmindre du vælger det. En ekstern tegning (xref), der er åbnet ved siden af sin vært, tegnes og tælles, hvor den er indsat; indtil den er åben, siger statuslinjen, hvad der mangler. Se [Lag](topic:open-a-drawing#layers).
- **Den markerede PDF virker ud fra en tegning.** {{ui:Eksportér}} › {{ui:Markeret PDF}} tegner en tegnings markerede ark som en PDF først, så kopien viser dine markeringer og din signaturforklaring uden noget plottrin. Den tegnes i sort eller tegningens farver, uden plotstilstabeller. Se [En markeret PDF](topic:export-estimate#a-marked-pdf).

### Nøjagtige tællinger og længder fra en tegning

- **Tæl det, tegningen siger er der.** {{ui:CAD-tælling}} på arklinjen tæller en blok efter navn (indlejrede blokke, dynamiske bloktilstande og blokarrays inklusive), alt af én type på et lag eller en tekst- eller attributværdi. Den tæller det, arket viser, eller hele tegningen én gang. At tilføje markeringerne er ét fortryd-trin, og at tælle igen tilføjer kun det nye. {{ui:Auto-tælling}} bliver til PDF'er og til symboler, der ikke er blokke. Se [Tæl fra en tegning](topic:count-from-a-drawing).
- **Mål ud fra tegningens egne linjer.** {{ui:Mål tegning}} tager de linjer, buer, polylinjer, cirkler, skraveringer og massive legemer, du klikker på eller vinduesvælger, som markeringer af en lineær eller areal-post. Buer, bulges og en skraverings huller kommer ud nøjagtigt; ellipser og splines måles i fine korder, og linjen siger det. Se [Mål ud fra en tegning](topic:measure-from-a-drawing).

### Tilbud

- **Brug en underentreprenørs tilbud som pakkens pris.** I {{ui:Eksportér}} › {{ui:Tilbudspakker og udjævning…}} vælger du {{ui:Brug}} på et tilbud. Pakkens poster forbliver mængder, én linje **Valgt tilbud** bærer prisen, poster, som tilbuddet udelader, forbliver til din egen pris, og overhead, fortjeneste og garanti gælder for den. At skifte tilbud er ét fortryd-trin; projektmappen og tilbudsoversigten bærer det med. Se [Brug et tilbud som pakkens pris](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Send en pakke til tilbud.** {{ui:Send til tilbud…}} under en pakke sender hver underentreprenør en mail med et link til en side, der ikke kræver nogen konto: de ser omfanget og arkene som en PDF, skriver en pris på hver linje eller markerer den som ikke inkluderet, tilføjer noter og op til tre filer, eller afslår. {{ui:Hent priser}} trækker det, der kom tilbage, ind i udjævningsarket, markeret **web**. Udsendelse er kun åben for konti, som CadCraft-teamet har slået til, mens det testes (se nedenfor). Se [Send en pakke til tilbud](topic:bid-invitations).
- **Forseglet til åbningen.** Priser kan forblive forseglede til et åbningstidspunkt, du angiver: indtil da ser ingen en pris, dig selv inklusive. Ved åbningen vises hvert tilbud på én gang, og et tilbud, der kom efter fristen, markeres som sent. Se [Forseglede tilbud og åbningen](topic:bid-invitations#sealed-bids-and-the-opening).
- **Underentreprenørposter.** Din konto på getcadcraft.com opbevarer hver virksomheds kontakter, fag, kvalifikationssvar samt forsikrings- og licensdatoer (markeret, når de er overskredet eller inden for 30 dage), med deres tidligere tilbud. Importér og eksportér dem som CSV, og vælg dem, når du sender en pakke. Se [På webstedet](topic:bid-invitations#on-the-website).

### AI-assistenter

- **Assistenter kan føje til mængdeudtrækket.** Med **Rediger** afkrydset kan din egen assistent tilføje poster (`items_add`) og måle forløb, arealer og tællinger på et ark (`marks_add`; længder og arealer kun på et ark med målestok), hvert kald ét fortryd-trin.
- **Assistentværktøjer til tegninger.** På en åben DWG eller DXF kan en assistent liste dens ark og det, der kan tælles, tælle nøjagtigt, tilføje tællemarkeringerne og måle ud fra tegningens geometri. Uden at TakeoffCraft er åbent, åbner CadCraft MCP-serveren en tegning som et nyt mængdeudtræk og gemmer det, og `cadcraft count` tæller fra kommandolinjen. Se [Hvad en assistent kan bede om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D-kontrolvisningen som USD.** {{ui:USD-pakke (.usdz)}} ved siden af {{ui:GLB}} i 3D-kontrolvisningen skriver hver væg, hvert dæk, hver plade, hver tællepæl og hvert forløb som sit eget objekt, opkaldt efter sin post og med sin mængde, i meter. En assistent kan også eksportere det (`usd_export`). Se [Eksportér 3D-kontrolvisningen som USD](topic:usd).

## I alle apps

- **Enheder.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} har en liste hver til længde, areal, volumen, vinkel og hældning med de præcise størrelser, enhedernes definitioner giver (den amerikanske opmålingsfod er sin egen enhed). Slå de enheder fra, du aldrig bruger, og de forsvinder fra enhedslisterne; sæt en stjerne ved én, og nyt arbejde starter i den. En fil beholder altid sin egen enhed. I TakeoffCraft følger en posts {{ui:Enhed}}-lister til/fra-valgene, en ny post starter i den stjernemarkerede længde- eller arealenhed, tagkvadrater (SQ), acres og hektar er nye arealenheder, og et længdefelt tager en vilkårlig enheds mærke, som `3 yd`. Se [Enheder, indtastede værdier og enhedslisterne](common:unit-lists).
- **Et tættere layout og paneler, der rydder af vejen.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layouttæthed}} › {{ui:Kompakt}} får mere plads på skærmen (touchskærme og telefoner beholder deres store knapper). Hvert sidepanel har en smal titellinje: træk i den for at fastgøre eller frigøre panelet, slip den på et andet panels linje for at dele én ramme som faner, fastgør det, så det glider ud til kanten, eller skjul det og hent det tilbage fra kanten. Se [Ordn panelerne](common:arrange-panels#make-the-layout-denser).
- **Dialogbokse kan flyttes.** Træk en dialogboks i dens titellinje væk fra tegningen; den kommer tilbage, hvor du lod den. Dobbeltklik på titellinjen for at centrere den igen. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).
- **Opskrifter til AI-assistenter.** Ti gennemarbejdede forespørgsler til din egen assistent (ryd op i en tegning, plot et sæt, kontrollér tegninger, stil en model spørgsmål, summér et mængdeudtræk, prøv en variant af en del…), hver med de værktøjer, den kalder, og de tilladelser, den kræver, og hver afspillet igen af vores tests. Apperne indeholder ingen AI. Se [Opskrifter til AI-assistenter](common:assistants-recipes).
- **Sprog.** **Português (Portugal)** er nyt i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Sprog}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nu hvert ord i apperne, som kladder, der endnu ikke er gennemgået af en modersmålstaler. Hjælpeemnerne er på engelsk.
- **CadCraft Studio** siger, hvorfor en opdateringskontrol mislykkedes (ingen fil til dit system endnu, intet netværk, en ugyldig signatur) i stedet for blot »Færdig«, og holder op med at bringe et Nyheder-kort tilbage, som du har lukket, indtil der er en nyere udgivelse.

## Ikke i denne version endnu

- **0.7 er ikke kodesigneret.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi certifikatvalideringen ikke er kommet igennem endnu. Kontrollér SHA-256 ved siden af hver fil på getcadcraft.com/download. Hvis SmartScreen på Windows stopper installationsprogrammet, vælger du {{ui:Flere oplysninger}} og derefter {{ui:Kør alligevel}}. På en Mac højreklikker du første gang på CadCraft Studio og vælger {{ui:Åbn}}. CadCraft Studio er ikke i en appbutik endnu, og der er ingen version til iPad eller iPhone endnu.
- Vinkel- og hældningslisterne i {{ui:Enheder}} gemmes, men ingen boks læser dem endnu.
- **Tilbudsindbydelser er slået fra for de fleste konti.** Mens funktionen testes, sendes mail til eksterne tilbudsgivere kun fra konti, som CadCraft-teamet har slået til. Tilbudsgivernes sider virker for hver indbydelse, der allerede er sendt. Alle andre: download {{ui:Omfang CSV}}, send den selv på mail og skriv tilbuddene ind.
- Et CadCraft Studio-vindue kan endnu ikke sende tilbudsindbydelser: det siger, at du skal bruge TakeoffCraft i browseren. At åbne et mængdeudtræk med sendte forespørgsler, udjævning og valg af tilbud virker i Studio.
- Tillæg, tildelingsbreve, et omfangsark, som hver tilbudsgiver kvitterer på, og automatiske påmindelser, før en forsikringsdato udløber, er ikke lavet. Et valgt tilbud genprissætter ikke et alternativt tilbuds tilbudsområde.
- Tegninger: plotstilstabeller og CTB-filer anvendes ikke, en binær DXF afvises (gem den som ASCII-DXF eller DWG), eksterne tegninger findes kun blandt de åbne filer via filnavn, og PDF-underlag, billeder og OLE-objekter i en tegning tegnes og tælles ikke. Tællingerne og målestokkene er kontrolleret på eksempeltegninger, endnu ikke på tegninger fra et rigtigt job åbnet i det program, der lavede dem.
- En assistent kan tilføje poster og markeringer, men kan ikke flytte, ændre eller slette markeringer, der allerede er der.

Alt andet står i [Ikke lavet endnu](topic:not-built-yet).
