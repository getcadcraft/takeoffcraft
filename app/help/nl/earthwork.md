---
title: Grondwerk en hoogtepunten
summary: Markeer hoogtepunten op een bouwplaatsblad, geef ze door aan CivilCraft voor het terrein en voor ontgraving en ophoging, en neem hier eenvoudige ontgravingshoeveelheden op.
keywords: grondwerk, ontgraving, ophoging, ontgraving en ophoging, grading, hoogtepunt, hoogten, topo, terrein, triangulatie, civilcraft, punten, pnezd, sleuf
from: a898e508
---

TakeoffCraft meet wat op een blad is getekend. Grondwerk heeft een maaiveld nodig, daarom wordt het gedeeld met CivilCraft. CivilCraft bouwt oppervlakken uit punten, geeft ze een helling en berekent ontgraving, ophoging en transport.

## Eenvoudige ontgraving hier

Voor een voetafdruk die tot één diepte wordt uitgegraven, is een oppervlakte-item met een **diepte** voldoende: het volume is oppervlakte × diepte. Het [vakpakket](topic:trade-packs) van de algemene aannemer heeft een item voor bulkontgraving (volume in de grond, los volume en vrachtwagenladingen) en een item voor leidingsleuven (ontgraving, zandbed en terugvulling op lengte en diepte).

## Hoogtepunten voor CivilCraft

1. Stel de schaal van het bouwplaatsblad in.
2. Maak een **Telling**-item, bijvoorbeeld "Bestaand maaiveld", en klik op elk hoogtepunt op het blad.
3. Selecteer een markering en typ de {{ui:Hoogte}} in het paneel Geselecteerde markering: `102.5`, `102'-6"` of `31.24 m`. Negatieve en nulhoogten zijn toegestaan.
4. Open het menu {{ui:Exporteren}} en kies {{ui:Hoogtepunten}}. U krijgt een puntenbestand (`.csv`) met de kolommen Point, Northing, Easting, Elevation en Description, één rij per gemarkeerd punt van het open blad.
5. Open dat bestand in CivilCraft (zie [Punten importeren](app:civilcraft/import-points)). Het bouwt het oppervlak uit de punten ([Een terreinoppervlak maken](app:civilcraft/build-surface)); daarna vergelijkt het oppervlakken en geeft het ontgraving en ophoging ([Volumes](app:civilcraft/volumes)).

Northing en Easting zijn de eigen coördinaten van het blad, in voet, gemeten vanaf de hoek van de pagina op zijn schaal: afstanden en volumes tussen de punten zijn juist, maar het zijn niet de landmeetkundige coördinaten van uw bouwplaats. Verplaats ze naar de coördinaten van de bouwplaats in CivilCraft wanneer u dat nodig heeft.

:::note
Punten van verschillende bladen delen geen coördinaten, daarom neemt de export alleen het open blad. Hoogten worden met de opmeting opgeslagen en meegenomen bij kopiëren en plakken.
:::

## Ontgraving en ophoging uit CivilCraft

Het grondwerk van CivilCraft komt terug als twee items die u kunt prijzen:

1. Geef in CivilCraft de plateaus en corridors een helling en kies daarna {{ui:Naar TakeoffCraft sturen}} onder **Grondwerk** ([Grondwerkvolumes](app:civilcraft/volumes)). Het slaat een hoeveelhedenbestand op (`.quantities.json`).
2. Open het in TakeoffCraft met {{ui:Opmeting openen}}, of zet het op de app. Uw opmeting blijft open: het bestand voegt **Grondwerk: ontgraving** en **Grondwerk: ophoging** toe als [getypte hoeveelheden](topic:create-items#typed-quantities-no-drawing) in kubieke yards (CY) voor een project in voet, of in kubieke meter (m³) voor een project in meter. Het is één stap: {{key:Mod+Z}} maakt het ongedaan.
3. Hernoem ze, en stel verlies, tarieven en samenstellingen in zoals u wilt.

Wanneer het ontwerp verandert, stuurt u opnieuw vanuit CivilCraft en opent u het nieuwe bestand: dezelfde twee items krijgen de nieuwe hoeveelheden. Hun namen, tarieven, verlies en samenstellingen blijven zoals u ze heeft ingesteld. Als de eenheid van het project is veranderd, meldt de statusbalk dat: controleer de tarieven. Een bestand uit een ander CivilCraft-project voegt zijn eigen twee items toe.

De hoeveelheden zijn bulkvolumes in de grond, zoals CivilCraft ze heeft gemeten (rastermethode): zonder krimp of zwelling. Voeg die als verlies toe, of met een formule zoals `Q * 1.25` voor het losgegraven volume. De itemeditor toont waar elk item vandaan komt en wanneer; de kolom opmerkingen van de raming vermeldt dat ook.

:::note
Het hoeveelhedenbestand is gewone JSON (`"format": "cadcraft-quantities"`), dus een script of een ander programma kan er ook een schrijven: een appnaam, een project, en items met een sleutel, een naam, een eenheid en een hoeveelheid.
:::
