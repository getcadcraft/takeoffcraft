---
title: Nyheder i 0.7 (tidligere)
summary: DWG- og DXF-tegninger åbnes som ark med deres egen målestok, nøjagtige tællinger og længder fra selve tegningen, den valgte underentreprenørs tilbud som en pakkes pris, tilbudsinvitationer med forseglede priser, assistentværktøjer til tegninger og USD fra 3D-kontrolvisningen.
keywords: nyheder 0.7, tidligere udgivelse, udgivelsesnoter, ændringslog, ændringer, 0.7, version, nye funktioner, dwg, dxf, tegning, layout, modelrum, tegningens målestok, tælling fra tegning, cad-tælling, blokke, dynamiske blokke, attributter, lag, xref, ekstern reference, mål tegning, polylinje, skravering, markeret pdf, valgt tilbud, brug et tilbud, send til tilbud, tilbudsinvitation, forseglede tilbud, tilbudsåbning, sent tilbud, underentreprenørdata, csv, assistent, mcp, usd, usdz, enheder, enhedslister, kompakt, paneler, dialogbokse, portugisisk
from: de1dca2b
---

Dette er, hvad der ændrede sig i TakeoffCraft 0.7 sammenlignet med 0.6. Tegninger åbnes nu, som de er, uden først at plotte til PDF, og en tilbudspakke kan sendes til underentreprenører og komme tilbage prissat.

## Nyt

### DWG- og DXF-tegninger

- **Åbn en tegning som ark.** {{ui:Åbn tegninger}} i gruppen {{ui:Fil}} ({{key:Mod+O}}, eller slip filerne) tager DWG- og DXF-tegninger ved siden af PDF'er. Modelrummet og hvert layout bliver til ark i listen {{ui:Ark}}, og et mængdeudtræk kan dække tegninger og PDF'er sammen. Intet uploades. Se [Åbn en DWG- eller DXF-tegning](topic:open-a-drawing).
- **Målestokken kommer fra tegningen.** Et layout starter med målestokken for dets største viewport, navngivet som en forudindstilling, når den er det, for eksempel 1/2" = 1'-0". Model starter i tegningens enheder. En tegning uden enheder siger "Ingen målestok", indtil du kalibrerer den. {{ui:Kalibrér}}, {{ui:Kontrollér}} og {{ui:Forudindstilling}} vinder stadig. Se [Målestokken](topic:open-a-drawing#the-scale).
- **Lag og eksterne referencer.** {{ui:Lag}} på arkbjælken viser eller skjuler tegningens lag. Lag, som filen har slukket eller frosset, starter skjult og tælles ikke, medmindre du vælger det. En ekstern reference (xref), der er åbnet ved siden af sin værtstegning, tegnes og tælles der, hvor den er indsat; indtil den er åben, siger statuslinjen, hvad der mangler. Se [Lag](topic:open-a-drawing#layers).
- **Den markerede PDF virker ud fra en tegning.** {{ui:Eksportér}} › {{ui:Markeret PDF}} tegner først en tegnings markerede ark som en PDF, så kopien viser dine mærker og signaturforklaring uden et plotningstrin. Den tegnes i sort eller i tegningens farver, uden plotstiltabeller. Se [En markeret PDF](topic:export-estimate#a-marked-pdf).

### Nøjagtige tællinger og længder fra en tegning

- **Tæl det, tegningen siger er der.** {{ui:CAD-tælling}} på arkbjælken tæller en blok efter navn (også indlejrede blokke, tilstande i dynamiske blokke og blokarrays), alt af én type på et lag eller en tekst- eller attributværdi. Den tæller det, arket viser, eller hele tegningen én gang. At tilføje mærkerne er ét fortrydelsestrin, og tæller man igen, tilføjes kun det nye. {{ui:Auto-tælling}} bliver til PDF'er og til symboler, der ikke er blokke. Se [Tæl fra en tegning](topic:count-from-a-drawing).
- **Mål ud fra tegningens egne linjer.** {{ui:Mål tegning}} tager de linjer, buer, polylinjer, cirkler, skraveringer og solids, du klikker på eller markerer med et vindue, som mærker på en lineær eller arealpost. Buer, bulger og huller i en skravering kommer præcist ud; ellipser og splines måles i fine korder, og bjælken siger det. Se [Mål fra en tegning](topic:measure-from-a-drawing).

### Tilbud

- **Brug en underentreprenørs tilbud som pakkens pris.** I {{ui:Eksportér}} › {{ui:Tilbudspakker og udjævning…}} vælger du {{ui:Brug}} på et tilbud. Pakkens poster bliver som mængder, én **Valgt tilbud**-linje bærer prisen, poster, tilbuddet udelader, bliver til din egen omkostning, og overhead, fortjeneste og garantistillelse gælder for den. Skift af tilbud er ét fortrydelsestrin; arbejdsbogen og tilbudsoversigten bærer det. Se [Brug et tilbud som pakkens pris](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Send en pakke til tilbud.** {{ui:Send til tilbud…}} under en pakke sender hver underentreprenør et link pr. e-mail til en side, der ikke kræver en konto: de ser omfanget og arkene som en PDF, skriver en pris på hver linje eller markerer den som ikke inkluderet, tilføjer noter og op til tre filer, eller takker nej. {{ui:Hent priser}} henter det, der kom tilbage, ind i udjævningsarket, markeret **web**. At sende er kun åbent for konti, som CadCraft-teamet har aktiveret, mens det afprøves (se nedenfor). Se [Send en pakke til tilbud](topic:bid-invitations).
- **Forseglet indtil åbningen.** Priser kan forblive forseglede, indtil et åbningstidspunkt, du sætter: indtil da ser ingen en pris, heller ikke dig. Ved åbningen vises alle tilbud på én gang, og et tilbud, der kom efter fristen, markeres som sent. Se [Forseglede tilbud og åbningen](topic:bid-invitations#sealed-bids-and-the-opening).
- **Underentreprenørdata.** Din konto på getcadcraft.com gemmer hvert firmas kontakter, fag, kvalifikationssvar og forsikrings- og licensdatoer (markeret én gang, når de er passeret, eller inden for 30 dage), med deres tidligere tilbud. Importér og eksportér dem som CSV, og vælg dem, når du sender en pakke. Se [På hjemmesiden](topic:bid-invitations#on-the-website).

### AI-assistenter

- **Assistenter kan tilføje til mængdeudtrækket.** Med **Redigér** sat af kan din egen assistent tilføje poster (`items_add`) og måle længder, arealer og tællinger på et ark (`marks_add`; længder og arealer kun på et ark med målestok), og hvert kald er ét fortrydelsestrin.
- **Assistentværktøjer til tegninger.** På en åben DWG eller DXF kan en assistent liste dens ark og det, der kan tælles, tælle nøjagtigt, tilføje tællemærkerne og måle ud fra tegningens geometri. Uden at TakeoffCraft er åben, åbner CadCraft MCP-serveren en tegning som et nyt mængdeudtræk og gemmer det, og `cadcraft count` tæller fra kommandolinjen. Se [Hvad en assistent kan bede om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D-kontrolvisningen som USD.** {{ui:USD-pakke (.usdz)}} ved siden af {{ui:GLB}} i 3D-kontrolvisningen skriver hver væg, dæk, plade, tællepost og forløb som sit eget objekt, navngivet efter sin post og med dens mængde, i meter. En assistent kan også eksportere den (`usd_export`). Se [Eksportér 3D-kontrolvisningen som USD](topic:usd).

## I alle apps

- **Enheder.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} har én liste hver for længde, areal, volumen, vinkel og hældning, med de præcise størrelser, enhedernes definitioner giver (US survey foot er sin egen enhed). Slå de enheder fra, du aldrig bruger, og de forsvinder fra enhedslisterne; markér én med stjerne, og nyt arbejde starter i den. En fil beholder altid sin egen enhed. I TakeoffCraft følger en posts {{ui:Enhed}}-lister kontakterne, en ny post starter i den markerede længde- eller arealenhed, tagkvadrater (SQ), acres og hektar er nye arealenheder, og et længdefelt tager enhver enheds betegnelse, for eksempel `3 yd`. Se [Enheder, skrevne værdier og enhedslisterne](common:unit-lists).
- **Tættere layout og paneler, der kan ryddes væk.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layouttæthed}} › {{ui:Kompakt}} får mere med på skærmen (berøringsskærme og telefoner beholder deres store knapper). Hvert sidepanel har en smal titellinje: træk den for at fastgøre eller frigøre panelet, slip den på et andet panels linje for at dele én ramme som faner, fastgør den for at skubbe den væk til kanten, eller skjul den og hent den tilbage fra kanten. Se [Arrangér panelerne](common:arrange-panels#make-the-layout-denser).
- **Dialogbokse kan flyttes.** Træk en dialogboks i dens titellinje ud af vejen for tegningen; den kommer tilbage, hvor du slap den. Dobbeltklik på titellinjen for at centrere den igen. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).
- **Opskrifter til AI-assistenter.** Ti gennemarbejdede forespørgsler til din egen assistent (ryd op i en tegning, plot et sæt, kontrollér tegninger, stil en model spørgsmål, summér et mængdeudtræk, prøv en delvariant …), hver med de værktøjer den kalder og de tilladelser, den kræver, og hver gennemspillet af vores tests. Appene indeholder ingen AI. Se [Opskrifter til AI-assistenter](common:assistants-recipes).
- **Sprog.** **Português (Portugal)** er nyt i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Sprog}}. **Português (Portugal)**, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nu alle appens ord som kladder, som ingen indfødt taler endnu har gennemgået. Hjælpeemner er på engelsk.
- **CadCraft Studio** siger, hvorfor en opdateringskontrol mislykkedes (ingen fil til dit system endnu, intet netværk, en ugyldig signatur), i stedet for bare "Færdig", og holder op med at vise et Nyheder-kort, du har lukket, indtil der er en nyere udgivelse.

## Ikke i denne version endnu

- **0.7 er ikke kodesignert.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi valideringen af certifikatet ikke er kommet igennem endnu. Kontrollér SHA-256 ved siden af hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installationsprogrammet, vælg {{ui:Flere oplysninger}} og derefter {{ui:Kør alligevel}}. På en Mac højreklikker du på CadCraft Studio første gang og vælger {{ui:Åben}}. CadCraft Studio er endnu ikke i en app-butik, og der findes endnu ingen iPad- eller iPhone-version.
- Vinkel- og hældningslisterne i {{ui:Enheder}} gemmes, men ingen boks læser dem endnu.
- **Tilbudsinvitationer er slået fra for de fleste konti.** Mens funktionen afprøves, går post til eksterne tilbudsgivere kun fra konti, som CadCraft-teamet har aktiveret. Tilbudsgivernes sider virker for alle invitationer, der allerede er sendt. Alle andre: download {{ui:Omfang CSV}}, send den selv på e-mail, og skriv tilbuddene ind.
- Et CadCraft Studio-vindue kan ikke sende tilbudsinvitationer endnu: det siger, at man skal bruge TakeoffCraft i browseren. Åbning af et mængdeudtræk med sendte forespørgsler, udjævning og valg af et tilbud virker i Studio.
- Tillæg, tildelingsbreve, et omfangsark, som hver tilbudsgiver godkender, og automatiske påmindelser, før en forsikring udløber, er ikke bygget. Et valgt tilbud omprissætter ikke et alternativs tilbudsareal.
- Tegninger: plotstiltabeller og CTB-filer anvendes ikke, en binær DXF afvises (gem den som ASCII-DXF eller DWG), eksterne referencer findes kun blandt de åbne filer efter filnavn, og PDF-underlag, billeder og OLE-objekter i en tegning tegnes eller tælles ikke. Tællinger og målestokke er kontrolleret på prøvetegninger, endnu ikke på tegninger fra et rigtigt job, åbnet i det program, der lavede dem.
- En assistent kan tilføje poster og mærker, men kan ikke flytte, ændre eller slette mærker, der allerede findes.

Alt andet står i [Ikke bygget endnu](topic:not-built-yet).
