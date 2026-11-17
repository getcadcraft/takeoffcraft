---
title: Tæl fra en tegning
summary: Tæl blokke, objekter på et lag eller tekst direkte fra en DWG eller DXF: nøjagtigt, med indlejrede blokke, dynamiske blokvarianter og blokarrays håndteret, i ét trin til fortryd.
keywords: tæl fra tegning, cad-tælling, blokoptælling, tæl blokke, indsæt, bloknavn, indlejrede blokke, dynamisk blok, variant, minsert, array, lag, objekttype, cirkler, tekst, attribut, tag, skjulte lag, nøjagtig optælling, sådan gør du, døre, armaturer
from: 5060e24e
---

{{ui:CAD-tælling}} på arkbjælken (kommandoen **Tæl fra tegningen** i de andre menustile) tæller det en DWG eller DXF siger der er. Hvor {{ui:Auto-tælling}} søger efter et billede af et symbol og kan overse et eller finde et falsk, tæller denne objekterne: hver indsættelse af en blok ved navn `DOOR-36` er én dør. Åbn tegningen først: [Åbn en DWG- eller DXF-tegning](topic:open-a-drawing).

## Tæl en blok

1. Åbn et ark af tegningen. {{ui:CAD-tælling}} står på arkbjælken.
2. Vælg den. Vinduet lister blokkene med hvor mange af hver der er. Søg efter navn, og vælg så en.
3. Kontrollér linjen under listen: "22 fundet, 22 at tilføje."
4. Under {{ui:Tilføj til}} vælger du en antalspost, eller lader {{ui:En ny antalspost}} stå og giver den et navn.
5. Vælg tilføjknappen, som angiver tallet: {{ui:Tilføj 22 markeringer}}. Markeringerne vises ved blokkenes indsætningspunkter, og postens mængde er antallet.

Det er ét trin til fortryd: {{key:Mod+Z}} tager markeringerne (og en ny post) væk samtidig. Overslaget, regnearket og den markerede PDF behandler posten som enhver anden antalspost.

### Hvad tælles

- **Hver indsættelse af blokkens navn**, uanset dens målestok og vinkel, i modelrum eller papirrum. Blok-navne skelner ikke mellem store og små bogstaver.
- **Blokarrays** (MINSERT): hver kopi i arrayet tæller som én.
- **Indlejrede blokke.** En blok placeret inde i en anden blok tælles på alle dybder. Listen siger "6 inde i andre blokke"; fjern markeringen ved {{ui:Tæl også blokke inde i andre blokke}} for kun at tælle indsættelser placeret direkte i tegningen.
- **Dynamiske blokke.** En dynamisk blok tælles under sit eget navn, ikke under de anonyme kopier (`*U12`) filen gemmer. Dens tilstande listes for sig ("Enkelt 12, Dobbelt 4"): vælg en tilstand for kun at tælle dem, eller {{ui:Alle varianter}}. Når en fil ikke siger hvilken tilstand en kopi viser, listes de som "(tilstand ukendt)".
- **Lagfilter.** En blok på flere lag: vælg ét under {{ui:På lag}}.

### Hvad tælles ikke

- **Skjulte lag.** Et objekt på et lag der er slukket eller frosset i filen (eller som du har skjult i {{ui:Lag}}) udelades, og linjen siger hvor mange: "3 på skjulte lag udeladt". Sæt flueben ved {{ui:Tæl dem også}} for at medtage dem.
- **Eksterne referencer (Xref) der ikke er åbne** tælles ikke; vinduet siger det.
- **Objekter stablet præcis oven på et andet af samme slags** tælles som to (de er to objekter), og vinduet siger det: det er normalt en tegnefejl værd at kigge på.

## Hvad dette ark viser, eller hele tegningen

- **Hvad dette ark viser** tæller de objekter arket viser: på en layout, modelobjekterne inde i dets viewports (et lag frosset i en viewport tælles ikke der) plus layoutets egne.
- **Hele tegningen, hvert objekt én gang** tæller modelrummet én gang, med markeringerne på fanen Model, og tæller ikke det flere layouts viser igen.

At tælle hvad et layout viser og at tælle hvad Model viser giver samme tal for de samme objekter; læg ikke begge til én post.

## Tæl igen

Tæller du den samme blok igen med den samme post, tilføjes kun det nye: "22 allerede talt." Hver markering står for ét objekt.

## Efter lag og type

På {{ui:Efter lag og type}} vælger du et lag og en objekttype (cirkler, polylinjer, skraveringer…): "alle cirkler på E-LITE". Sæt flueben ved {{ui:Tæl også objekter inde i blokke}} for også at medtage dem inde i blokdefinitioner, ved hvert sted blokken indsættes.

## Efter tekst

På {{ui:Efter tekst}} skriver du teksten, f.eks. `A3`, og angiver om den skal være præcis den, indeholde den, eller have den som et helt ord. Tekstobjekter, tekst i flere henvisningslinjer og blokkenes **attributværdier** tælles alle (en mærkeattribut `ITEM = A3` findes); vælg {{ui:I attribut}} for kun at tælle én attribut. De hyppigste tekster listes til at klikke på.

## Hvornår du bruger Auto-tælling i stedet

Brug {{ui:Auto-tælling}} til PDF'er og til symboler i en tegning der ikke er blokke (tegnet løst, eller eksploderet). Tegnet som blokke, tæl dem her.
