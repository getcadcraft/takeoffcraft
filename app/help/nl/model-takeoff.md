---
title: Hoeveelheden opmeten uit een gebouwmodel
summary: Open het IFC-model van de architect, bekijk het in 3D, kies wanden, vloeren, deuren en de rest op type, materiaal, laag of afmeting, en breng hun aantallen, lengten, oppervlakten en volumes over naar de opmeting. Een nieuwere versie van het model werkt dezelfde hoeveelheden bij.
keywords: model, model opmeting, 3d-weergave, klik op een onderdeel, rij zoeken, materiaal, laag, wandlagen, gipsplaat, isolatie, deurafmetingen, raamafmetingen, staat van openingen, csv, 3d, bim, ifc, rvt, gebouwmodel, hoeveelheden, wanden, vloeren, deuren, ramen, kolommen, ruimten, op type, op niveau, bijwerken, nieuwer model, ontwerpontwikkeling
from: 8c4c12c9
---

U hoeft niet op de volgende tekenset te wachten. Wanneer de architect het gebouwmodel stuurt, opent u het hier en neemt u de hoeveelheden er rechtstreeks uit. Het model wordt op uw computer gelezen; er wordt niets verstuurd.

## Stappen

1. Kies {{ui:Model}} op de werkbalk en selecteer het `.ifc`-bestand van het model, of open het met {{ui:Open plans}} zoals elk ander bestand.
2. {{ui:Model takeoff}} opent met één rij per categorie en type: wanden per wandtype, vloeren per vloertype, deuren per deurtype, enzovoort. Elke rij toont zijn aantal en waarin die categorie wordt gemeten.
3. Zet {{ui:Group by}} op {{ui:Category}} voor een snel totaal, of op {{ui:Category, type and level}} om elk type per verdieping te splitsen.
4. Vink de rijen uit die u niet wilt. {{ui:Find}} beperkt de lijst. Het uitvinken van een rij verbergt ook zijn onderdelen in het 3D-beeld.
5. Geef het model een {{ui:Model name}} die u voor de hele klus behoudt, bijvoorbeeld de naam van het project.
6. Kies {{ui:Add to the takeoff}}. Elke hoeveelheid wordt een getypte hoeveelheid in de postenlijst. Geef haar een naam, prijs haar en koppel samenstellingen zoals bij elke andere post.

## Het model in 3D bekijken

{{ui:Show the model in 3D}} tekent het model boven de tabel, met één kleur per rij (het kleurvakje naast de naam van de rij). Sleep om te draaien, houd {{key:Shift}} ingedrukt en sleep om te verplaatsen, gebruik het wiel om te zoomen, en kies {{ui:Fit}} of {{ui:Reset}} om terug te keren.

- **Klik op een onderdeel** in het beeld en de rij ervan wordt in de tabel geselecteerd, met alle onderdelen van die rij verlicht en de rest bleek. Klik nogmaals op hetzelfde onderdeel en, als het in meerdere rijen zit (een wand in zijn lagen), wordt de volgende rij geselecteerd.
- **Klik op een rij** in de tabel om de onderdelen ervan te verlichten. Klik er nogmaals op, of klik op lege ruimte in het beeld, om het te wissen.
- Ruimten worden niet getekend, omdat het volume van een ruimte het gebouw zou verbergen.
- Een zeer groot model houdt voor sommige onderdelen alleen een kader bij, zodat het in het geheugen past; het paneel zegt hoeveel dat er zijn. De getallen veranderen niet.

Als deze computer geen 3D kan tekenen, werkt de tabel zoals voorheen.

## Groeperen op materiaal, laag of afmeting

{{ui:Group by}} heeft nog drie keuzes:

- {{ui:Category and material}}: een wand, vloer of dak die uit lagen is opgebouwd, krijgt voor het materiaal van elke laag een eigen rij, zodat gipsplaat, stijlen en isolatie apart kunnen worden geprijsd. Een deel van het gebouw met één materiaal krijgt de rij van dat materiaal, en een deel zonder materiaal blijft in een rij met de naam "Geen materiaal benoemd".
- {{ui:Category and layer}}: hetzelfde, met de dikte van de laag in de rij ("Isolatie, 100 mm").
- {{ui:Category, type and door or window size}}: deuren en ramen worden gesplitst op hun breedte en hoogte (bijvoorbeeld 3'-0" × 6'-8" of 914 × 2,032 mm).

Voor een laag is het oppervlak het eigen vlak van de wand (of het plattegrond- of oppervlak van de vloer of het dak), en is het volume dat oppervlak maal de dikte van de laag. De notitie van de rij zegt hoeveel getallen uit een laag kwamen. De lagen van één wand tellen samen op tot het volume dat het model voor die wand opgeeft.

## De rijen of openingen als CSV opslaan

{{ui:Save rows as CSV}} slaat de rijen op die u hebt aangevinkt, met de eenheden in elke kop, voor een spreadsheet. {{ui:Save openings schedule as CSV}} (alleen wanneer het model deuren of ramen heeft) slaat elke deur en elk raam op per type, niveau en afmeting met het aantal.

## Wat wordt gemeten

| Categorie | Hoeveelheden |
|---|---|
| Wanden | aantal, lengte, wandoppervlak (één vlak, openingen eraf), volume |
| Vloeren, platen, plafonds en andere bekledingen | aantal, plattegrondoppervlak, volume |
| Daken | aantal, plattegrondoppervlak, dakoppervlak, volume |
| Funderingen | aantal, plattegrondoppervlak, volume |
| Kolommen, balken en staven | aantal, lengte langs de staaf, volume |
| Leuningen, leidingen, kanalen en kabeltrajecten | aantal, lengte |
| Trappen | aantal, volume |
| Ruimten | aantal, vloeroppervlak, volume |
| Deuren, ramen en al het overige | aantal |

Waar de auteur van het model een hoeveelheid in het bestand heeft opgegeven, wordt dat getal gebruikt. Anders wordt het getal gemeten uit de vorm van het element. Elke hoeveelheid houdt een notitie bij die zegt welke het is en hoeveel elementen een getal gaven.

:::note
De lengte van een wand die uit zijn vorm is gemeten, loopt van begin tot eind, dus twee wanden die in een hoek overlappen, nemen beide de hoek mee. Een volume heeft een gesloten vorm nodig: een element waarvan de vorm niet gesloten is, wordt geteld en geeft geen volume. Een gebogen of hoekig wandelement wordt gemeten als de helft van al zijn verticale vlakken, en de notitie zegt dat.
:::

## Wanneer een nieuwer model binnenkomt

Open het nieuwere bestand en typ dezelfde {{ui:Model name}}. Voordat u iets toevoegt, zegt het paneel hoeveel hoeveelheden nieuw zijn, hoeveel er zijn gewijzigd en van wat naar wat, en welke hoeveelheden uit de eerdere versie niet meer in het model staan. Kies {{ui:Add to the takeoff}}: de gewijzigde hoeveelheden krijgen hun nieuwe getallen, en uw namen, tarieven, verlies en samenstellingen blijven behouden. Hoeveelheden die uit het model zijn verdwenen, behouden hun oude getallen; verwijder ze zelf als het ontwerp ze heeft geschrapt.

Type- en niveaunamen bepalen hoe een hoeveelheid wordt herkend. Als de architect een wandtype hernoemt, komt het binnen als een nieuwe hoeveelheid en wordt de oude als verdwenen vermeld.

## Bestanden die dit leest

IFC-bestanden (IFC2x3, IFC4 en IFC4.3). Een IFC-bestand met wegen, spoorlijnen of bruggen brengt nog steeds zijn infrastructuurhoeveelheden rechtstreeks binnen, zoals voorheen.

TakeoffCraft leest in deze uitgave geen `.rvt`-bestanden. Als de architect in Revit werkt, vraag dan om een IFC-export van het model (Bestand, Exporteren, IFC) en open die.

Eén model kan maximaal 500 hoeveelheden tegelijk binnenbrengen. Zijn er meer, vink dan rijen uit of groepeer op categorie.
