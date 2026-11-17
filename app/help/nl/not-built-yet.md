---
title: Wat nog niet beschikbaar is
summary: Opmetingsfuncties die deze build niet heeft, en wat u vandaag in plaats daarvan kunt doen.
keywords: beperkingen, ontbrekend, nog niet, routekaart, gepland, tijdelijke oplossing, per lopende meter, cloud, desktop
from: 94ff90d0
---

TakeoffCraft is in ontwikkeling. Deze lijst geeft aan wat de huidige build niet doet, en hoe u de klus toch kunt afmaken.

## Meten

| Nog niet beschikbaar | In plaats daarvan, vandaag |
|---|---|
| Een punt invoegen midden in een lopende meter of omtrek | Verwijder de markering en teken haar opnieuw. |
| Selecteren met een kader (venster) | {{key:Shift}} + klik op elke markering, of {{key:Mod+A}} voor alle markeringen op het blad. Zie [Markeringen kopiëren, plakken en dupliceren](topic:copy-paste). |
| Een geplakte kopie roteren, spiegelen of opnieuw schalen | Plak op een blad met dezelfde schaal en in dezelfde richting; teken de rest met de hand. |
| Een schaal lezen van een gescand blad, of van een grafische schaalbalk | Kies de voorinstelling, of ijk op de lengte van de balk. |
| Meer dan één schaal per blad (detailgebieden, vergrote plattegronden) | Meet het onderdeel op de schaal van het blad, en neem het detail op een eigen vergroot blad op als de set er een heeft. |

## Posten en prijzen

| Nog niet beschikbaar | In plaats daarvan, vandaag |
|---|---|
| Assemblageformules die de andere soorten markeringen van een post gebruiken (de deuren van een ruimtepost in de formules van de verdieping) | Formules gebruiken de totalen van het hoofdtype; prijs de andere soorten op hun eigen regels. |
| Assemblageformules die per lopende meter worden berekend | Formules gebruiken de totalen van de post; gebruik `N` voor extra's per lopende meter. |
| Formules die de hoeveelheden van een andere post gebruiken | Herhaal de meting in die post, of reken het uit in de spreadsheet-export. |
| Ploegen op assemblagecomponenten, of een werkdag die geen 8 uur is | Geef de ploeg aan de post; lees ploegdagen voor een andere dagduur als ploegenuren ÷ uw dagduur. |
| Markups anders dan notities, revisiewolken en markeringen (pijlen, maatvoering, stempels), of reacties op een notitie | Schrijf het in de tekst van de notitie; wijzig de status zodra het is afgehandeld. |
| Een prijsbibliotheek die door een team wordt gedeeld, of bij uw account wordt bewaard | De bibliotheek wordt in deze browser bewaard: exporteer haar als CSV en importeer haar op de andere computer. |
| Vakpakketten die door ervaren calculatoren zijn nagekeken | Elk pakket is een startpunt: controleer de aannames op uw project en uw producten voordat u ermee prijst. Zie [Vakpakketten](topic:trade-packs). |
| Prijzen in vakpakketten | Pakketten brengen alleen assemblages mee: stel uw eigen tarieven in, of importeer uw prijslijst als CSV. |
| De opmeting hernoemen | De naam komt uit de eerste pdf; hernoem de gedownloade bestanden. |
| Bladen met de hand benoemen | Bladen krijgen hun naam uit de paginalabels van de pdf; zoek op bestandsnaam en pagina. |

## Tekeningen (DWG en DXF)

| Nog niet beschikbaar | In plaats daarvan, vandaag |
|---|---|
| Plotstijltabellen, pentoewijzingen en CTB-bestanden op de bladen van een tekening | Een tekening wordt zwart getekend, of in haar kleuren, donkerder voor papier; lijndiktes komen uit de tekening. |
| Een binaire DXF openen, of een DWG ouder dan AutoCAD 2000 | Sla het op als ASCII-DXF of als een nieuwere DWG. |
| Een gekoppelde tekening (xref) vinden op de map waarin ze staat | Open het bestand van de gekoppelde tekening ook, samen met de hoofdtekening: het wordt gevonden op bestandsnaam onder de geopende bestanden. |
| 3D-polylijnen, meshes, volumes en regio's meten | Tel ze per laag en type, of meet het plattegrondaanzicht met de gereedschappen Lineair en Oppervlakte. |
| Tekst in een gemarkeerde pdf uit een tekening in andere schriften dan het Latijnse | Tekens waarvoor Helvetica geen letterbeeld heeft, worden als "?" afgedrukt in de gemarkeerde pdf; de tekening op het scherm blijft ongewijzigd. |
| Een tekening overdragen aan een andere app vanuit de bladbalk | Open hetzelfde bestand in die app. |
| Een tekening die de opmeting in zich draagt, zoals {{ui:Pdf met de opmeting erin}} dat voor pdf's doet | {{ui:Opmeting opslaan}}: de `.takeoff.json` opent opnieuw op dezelfde tekening, gevonden op haar inhoud. |
| Pdf-onderleggers, afbeeldingen en OLE-objecten die in een tekening zijn geplaatst, tekenen of tellen | Afbeeldingen verschijnen alleen als kader. Open de onderlegger-pdf zelf als blad. |

## Automatisch tellen

| Nog niet beschikbaar | In plaats daarvan, vandaag |
|---|---|
| Symbolen vinden op een blad zonder schaal die op een ander formaat is getekend | Geef het blad zijn schaal, of zoek erop met een kader dat daar is getekend. |
| Gespiegelde symbolen vinden | Tel die met de hand, of zoek opnieuw met een kader rond een gespiegeld symbool. |

## Bestanden en delen

| Nog niet beschikbaar | In plaats daarvan, vandaag |
|---|---|
| Één pdf die zowel de markeringen toont als de opmeting bevat | {{ui:Gemarkeerde pdf}} voor mensen die de markeringen moeten zien; {{ui:Pdf met de opmeting erin}} om opnieuw in TakeoffCraft te openen. |
| Een CSV van hoeveelheden per blad of van de markeringen | Gebruik {{ui:XLSX}}: de werkbladen By sheet en Marks bevatten die. |
| Opslaan in de cloud | Nog niet beschikbaar. Sla projectbestanden op uw computer op en maak er een back-up van. |
| Een afzonderlijke TakeoffCraft-desktopapp | Vanaf 0.5 is de desktopapp CadCraft Studio, met alle acht apps in één installatie. TakeoffCraft werkt ook in de browser. |

## Scherm en invoer

| Nog niet beschikbaar | In plaats daarvan, vandaag |
|---|---|
| Een menu met de rechtermuisknop (of lang indrukken) | Gebruik de werkbalk, de panelen en de toetsen. Een lange druk maakt een lopende meter of omtrek af. |
| De weergave draaien | Pagina's die in de pdf al gedraaid zijn, verschijnen rechtop. |

## 3D-weergave

| Nog niet beschikbaar | In plaats daarvan, vandaag |
|---|---|
| Markeringen tekenen of bewerken in 3D | Ga terug naar het blad ({{key:3}}) om te tekenen; selecteren en verwijderen werkt wel in 3D. |
| Op elkaar gestapelde verdiepingen uitlijnen die op hun pagina's op verschillende plaatsen zijn getekend | Stapel verdiepingen die gelijk zijn getekend; controleer de andere één blad per keer. |
| Telmarkeringen tellen die even groot zijn als het geteld object | Elke telmarkering op een blad heeft dezelfde grootte; ze geeft aan waar een telling is, niet wat die is. |

## Bieden

| Nog niet beschikbaar | In plaats daarvan, vandaag |
|---|---|
| Aanvullingen op een pakket dat al is verstuurd, gunningsbrieven, een reikwijdteblad dat elke inschrijver ondertekent | Verstuur een nieuw pakket en schrijf de gunning zelf. [Een pakket voor inschrijving versturen](topic:bid-invitations) beschrijft wat wel is ingebouwd. |
| Uitnodigingen voor inschrijving versturen vanaf elk account: zolang het wordt getest, staat e-mail naar externe inschrijvers uit, behalve voor accounts die het CadCraft-team heeft ingeschakeld | Download de {{ui:Omvang-CSV}}, mail die zelf en voer de inschrijvingen in. |
| Inschrijvingspakketten versturen vanuit een Studio-venster | Verstuur vanuit TakeoffCraft in de browser. |
| Het inschrijvingsgebied van een alternatief opnieuw prijzen met een gekozen inschrijving | Alternatieven en subtotalen van inschrijvingsgebieden gebruiken uw eigen prijzen; pas het alternatief met de hand aan. |
| Automatische herinneringen vóór de verzekerings- of licentiedatum van een onderaannemer verloopt | De datum wordt gemarkeerd op de pagina Onderaannemers zodra die is verstreken of binnen 30 dagen valt; controleer hem bij het uitnodigen. |

## Panelen

| Nog niet beschikbaar | In plaats daarvan, vandaag |
|---|---|
| De tabel {{ui:Hoeveelheden}} verplaatsen | Alleen de panelen {{ui:Bladen}} en {{ui:Posten}} verschuiven. Zie [De panelen indelen](common:arrange-panels). |

## Spreadsheets

De XLSX-werkmap is gecontroleerd in LibreOffice Calc, dat elk totaal tot op de cent gelijk berekende aan TakeoffCraft. Hij is nog niet in Excel geopend. Als een spreadsheetprogramma iets onverwachts toont, bevat de CSV-export dezelfde raming als gewone waarden.
