---
title: Hvad der ikke er lavet endnu
summary: Funktioner for mængdeudtræk, som denne build ikke har, og hvad du gør i stedet i dag.
keywords: begrænsninger, mangler, endnu ikke, køreplan, planlagt, løsning, pr. forløb, sky, desktop
from: 94ff90d0
---

TakeoffCraft er under udvikling. Denne liste viser, hvad den nuværende build ikke gør, og hvordan du alligevel får arbejdet gjort.

## Måling

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Indsættelse af et punkt midt i et forløb eller en kontur | Slet markeringen, og tegn den igen. |
| Boksvalg (vindue) | {{key:Shift}} + klik på hver markering, eller {{key:Mod+A}} for alle markeringer på arket. Se [Kopiér, sæt ind og duplikér markeringer](topic:copy-paste). |
| Rotation, spejling eller skalering af en indsat kopi | Indsæt på et ark i samme målestok og samme retning; tegn resten i hånden. |
| Aflæsning af en målestok fra en skannet side eller fra en grafisk målestoklinje | Vælg forudindstillingen, eller kalibrér ud fra længden på linjen. |
| Mere end én målestok pr. ark (detaljeområder, forstørrede planer) | Mål delen i arkets målestok, og tag detaljen med på sit eget forstørrede ark, hvis sættet har et. |

## Poster og priser

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Formler for kalkulationsenheder, der bruger en posts andre typer markeringer (dørene i en rumpost i formlerne for dens etage) | Formlerne bruger hovedtypens summer; prisæt de andre typer på deres egne rækker. |
| Formler for kalkulationsenheder, der beregnes forløb for forløb | Formlerne bruger postens summer; brug `N` til ekstra pr. forløb. |
| Formler, der bruger en anden posts mængder | Gentag målingen i den post, eller regn den ud i regnearkseksporten. |
| Hold på kalkulationsenhedens komponenter, eller en arbejdsdag, der ikke er 8 timer | Giv holdet til posten; læs holddage for en anden dagslængde som holdtimer ÷ din arbejdsdag. |
| Markeringer ud over noter, skyer og fremhævninger (pile, målsætninger, stempler), eller svar på en note | Skriv det i notatets tekst; skift dens status, når det er afgjort. |
| Et prisbibliotek delt i et team eller gemt på din konto | Biblioteket gemmes i denne browser: eksportér det som CSV og importér det på den anden computer. |
| Fagpakker gennemgået af erfarne kalkulatorer | Hver pakke er et startpunkt: kontrollér dens forudsætninger mod dit job og dine produkter, før du prisætter med den. Se [Fagpakker](topic:trade-packs). |
| Priser i fagpakker | Pakker indeholder kun kalkulationsenheder: angiv dine egne satser, eller importér din prisliste som CSV. |
| Omdøbning af mængdeudtrækket | Navnet kommer fra den første PDF; omdøb de downloadede filer. |
| Navngivning af ark i hånden | Ark navngives efter PDF'ens sidelabels; søg på filnavn og side. |

## Tegninger (DWG og DXF)

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Plottestiltabeller, pennetildelinger og CTB-filer på en tegnings ark | En tegning tegnes sort, eller i sine farver mørkere til papir; linjetykkelser kommer fra tegningen. |
| Åbning af en binær DXF, eller en DWG ældre end AutoCAD 2000 | Gem den som ASCII-DXF eller en nyere DWG. |
| Finde en ekstern reference (Xref) ud fra mappen, den ligger i | Åbn også den eksterne tegnings fil sammen med værten: den findes ud fra filnavn blandt de åbne filer. |
| Måling af 3D-polylinjer, net, massive legemer og regioner | Tæl dem efter lag og type, eller mål plantegningen med værktøjerne Lineær og Areal. |
| Tekst i en markeret PDF fra en tegning med skrifter, der ikke er latinske | Tegn, som Helvetica ikke har et glyf for, udskrives som »?« i den markerede PDF; tegningen på skærmen påvirkes ikke. |
| Overdragelse af en tegning til et andet program fra arkbjælken | Åbn den samme fil i det program. |
| En tegning, der bærer mængdeudtrækket i sig, som {{ui:PDF med mængdeudtrækket indeni}} gør for PDF'er | {{ui:Gem mængdeudtræk}}: `.takeoff.json` åbner igen på samme tegning, fundet ud fra dens indhold. |
| PDF-underlag, billeder og OLE-objekter placeret i en tegning, der tegnes eller tælles | Billeder vises kun som en ramme. Åbn selve underlags-PDF'en som et ark. |

## Auto-tælling

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Finde symboler på et ark uden målestok, der er tegnet i en anden størrelse | Giv arket dets målestok, eller søg på det med en boks tegnet der. |
| Finde spejlvendte symboler | Tæl dem i hånden, eller søg igen med en boks omkring et spejlvendt symbol. |

## Filer og deling

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Én PDF, der både viser markeringerne og bærer mængdeudtrækket | {{ui:Markeret PDF}} til at vise markeringerne for andre; {{ui:PDF med mængdeudtrækket indeni}} til at åbne i TakeoffCraft igen. |
| En CSV med mængder pr. ark eller af markeringerne | Brug {{ui:XLSX}}: dets regneark By sheet og Marks har dem. |
| Gem i skyen | Ikke tilgængeligt endnu. Gem projektfiler på din computer, og tag backup af dem. |
| Et separat TakeoffCraft-desktopprogram | Fra 0.5 er desktopprogrammet CadCraft Studio, med alle otte apps i én installation. TakeoffCraft kører også i browseren. |

## Skærm og input

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Et højreklik- (eller langt tryk-) menu | Brug værktøjslinjen, panelerne og tasterne. Et langt tryk afslutter et forløb eller en kontur. |
| Rotation af visningen | Sider, der er roteret i PDF'en, vises allerede lige. |

## 3D-visning

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Tegne eller redigere markeringer i 3D | Gå tilbage til arket ({{key:3}}) for at tegne; valg og sletning virker i 3D. |
| Flugtning af stablede etager, der er plottet forskellige steder på deres sider | Stil etager, der er plottet ens, oven på hinanden; kontrollér de andre ét ark ad gangen. |
| Tælle stolper i samme størrelse som det talte objekt | Alle stolper på et ark har samme størrelse; de markerer, hvor en tælling er, ikke hvad den er. |

## Tilbudsgivning

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Tillæg til en pakke, der allerede er sendt, tildelingsbreve, og et omfangsark hver budgiver skriver under på | Send en ny pakke, og skriv tildelingen selv. [Send en tilbudspakke](topic:bid-invitations) beskriver det, der er lavet. |
| Sende tilbudsinvitationer fra alle konti: mens det afprøves, er mail til eksterne budgivere slået fra, undtagen for konti, som CadCraft-teamet har aktiveret | Download {{ui:Omfang CSV}}, send den selv i mail, og skriv tilbuddene ind. |
| Sende tilbudspakker fra et Studio-vindue | Send fra TakeoffCraft i browseren. |
| Omprisning af et alternativs tilbudsområde med et valgt tilbud | Alternative tilbud og delsummer for tilbudsområder bruger dine egne priser; juster det alternative tilbud i hånden. |
| Automatiske påmindelser før en underentreprenørs forsikrings- eller licensdato udløber | Datoen markeres på siden Underentreprenører, når den er passeret eller inden for 30 dage; kontrollér den, når du inviterer. |

## Paneler

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Flytning af {{ui:Mængder}}-tabellen | Kun panelerne {{ui:Ark}} og {{ui:Poster}} kan flyttes. Se [Ordn panelerne](common:arrange-panels). |

## Regneark

XLSX-projektmappen er kontrolleret i LibreOffice Calc, som genberegnede alle totaler til samme øre som TakeoffCraft. Den er endnu ikke åbnet i Excel. Hvis et regnearksprogram viser noget uventet, indeholder CSV-eksporten den samme kalkulation som rene værdier.
