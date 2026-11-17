---
title: Vastklikken op de lijnen van de tekening
summary: Punten springen naar de eigen lijnen van de pdf terwijl u meet of ijkt: uiteinden, middelpunten, kruisingen of ergens op een lijn, met een markering die aangeeft welke het is.
keywords: snap, objectsnap, eindpunt, middelpunt, snijpunt, dichtstbijzijnde, vector, lijnwerk, lijnen, precies, exact, f3, magneet, hoek
from: 41d29e9b
---

De meeste plansets zijn vector-pdf's: hun wanden en randen zijn echte lijnen, geen pixels. Terwijl u meet, klikt TakeoffCraft uw klikken vast op die lijnen, zodat een lengte precies begint op de hoek van een wand en een ijking de maat leest die de tekenaar heeft getekend, niet de pixel die u raakt.

Vastklikken staat aan bij het starten. U zet het uit en aan met {{ui:Vastklikken}} in de statusbalk of met {{key:F3}}; de instelling wordt in deze browser bewaard (ze staat ook onder [Instellingen](topic:settings)).

## Waarop het vastklikt

Komt de aanwijzer binnen ongeveer 10 schermpixels van een lijn, dan toont een markering waar de klik terechtkomt, met de naam ervan:

| Markering | Naam | Waar |
|---|---|---|
| Vierkant | **Eindpunt** | Het uiteinde van een lijn, of een hoek waar lijnen samenkomen. De twee uiteinden van een boog tellen mee; de punten erlangs niet. |
| Driehoek | **Middelpunt** | Het midden van een rechte lijn. |
| Kruis | **Snijpunt** | Waar twee lijnen elkaar kruisen, of waar de ene eindigt op de andere. |
| Zandloper | **Op de lijn** | Het dichtstbijzijnde punt op een lijn, wanneer geen eindpunt, middelpunt of kruising dichtbij is. |

Het dichtstbijzijnde eindpunt, middelpunt of snijpunt wint. Pas als er geen dichtbij is, komt het punt op de lijn zelf te liggen. Zoom in om te kiezen tussen punten die dicht bij elkaar liggen: de 10 pixels zijn schermpixels, dus bij een hogere zoom bestrijken ze minder van het blad.

## Waar het werkt

Vastklikken werkt in {{ui:Lineair}}, {{ui:Oppervlakte}}, {{ui:Cirkel}}, {{ui:Uitsparing}}, {{ui:Ijken}} en {{ui:Controleren}}, en wanneer u een hoek van een geselecteerde markering sleept. Ook boogpunten worden erop geplaatst. {{ui:Tellen}}, {{ui:Automatisch tellen}} en plakken worden niet vastgeklikt.

Een vastgeklikt punt wint van het 45°-vastklikken van {{key:Shift}}: wilt u onder 45° van de lijnen af tekenen, zet dan eerst Vastklikken uit met {{key:F3}}.

:::tip
Ijk met Vastklikken aan. Klik dicht bij de twee uiteinden van een maatlijn of een wand die u kent: beide punten komen precies op de tekening te liggen, en de schaal wordt exact (de statusbalk noemt dan de voorinstelling waarmee hij overeenkomt).
:::

## Bladen waarop het niet kan vastklikken

- **Gescande bladen** zijn afbeeldingen zonder lijnen waarop vastgeklikt kan worden. De statusbalk meldt "Dit blad heeft geen lijnen om op vast te klikken (een gescande pagina is een afbeelding)." en punten komen waar u klikt.
- **Zeer grote tekeningen**: vastklikken leest maximaal 400,000 lijnsegmenten per blad. Bij een blad met meer, meldt het dat en klikt het alleen op de eerste vast.
- **Tekst** wordt niet vastgeklikt, tenzij de pdf de letters als lijnen tekent (sommige plotters doen dat).

De lijnen van het blad worden de eerste keer dat u het opent op de achtergrond ingelezen; bij een groot blad kan het even duren voordat de markeringen verschijnen.
