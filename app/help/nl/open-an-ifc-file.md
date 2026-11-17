---
title: Hoeveelheden importeren uit een IFC 4.3-bestand
summary: Open een IFC 4.3-bestand van een weg, spoorweg, brug of grondwerk en krijg een telling per klasse, met de lengten, oppervlakten en volumes die het bestand vermeldt, als getypeerde hoeveelheden.
keywords: ifc, ifc4x3, ifc 4.3, weg, spoorweg, brug, wegdek, stoeprand, deklaag, grondwerk, oplegging, infrastructuur, hoeveelheden, bim, civiel, getypeerde hoeveelheden
from: 6b08c2c4
---

Een IFC 4.3-bestand kan wegen, spoorwegen, bruggen, maritieme werken en de onderdelen waaruit die bestaan bevatten: wegdekken, deklagen, stoepranden, rails, grondwerk, opleggingen, palen en meer. TakeoffCraft leest die en zet ze om in getypeerde hoeveelheden die u kunt prijzen.

## Het bestand openen

1. Kies {{ui:Tekeningen openen}} in de groep {{ui:Bestand}}, of druk op {{key:Mod+O}}.
2. Selecteer het IFC-bestand (u kunt het selecteren naast pdf's), of sleep het op TakeoffCraft.

Voor elke klasse en elk vooraf gedefinieerd type wordt één getypeerde hoeveelheid gemaakt, bijvoorbeeld "Wegdek (flexibel): aantal", en, wanneer het bestand ze vermeldt, "lengte" in m, "oppervlakte" in m² en "volume" in m³. De notitie bij elk item zegt hoeveel elementen zijn geteld en hoeveel er geen hoeveelheid vermeldden. Een nieuwer bestand met dezelfde naam openen werkt die hoeveelheden bij in plaats van er meer toe te voegen.

## Wat het niet doet

- Het leest de hoeveelheidssets (IfcElementQuantity) die het bestand bevat. Het meet de 3D-vormen niet, dus een element zonder hoeveelheidsset wordt geteld maar voegt geen lengte, oppervlakte of volume toe.
- Alleen de infrastructuurklassen van IFC 4.3 worden gelezen. Een gebouwbestand (wanden, deuren, vloeren) wordt hier niet tot hoeveelheden omgezet; een bestand dat geen IFC 4.3 is, zegt dat en brengt niets binnen.
- De eenheden zijn die van het bestand zelf, omgerekend naar meter.
