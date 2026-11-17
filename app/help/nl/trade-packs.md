---
title: Vakpakketten
summary: Voeg gratis samenstellingen voor een vakgebied toe aan uw prijsbibliotheek, verwijder ze in één stap, en deel uw eigen bibliotheek als pakket.
keywords: vakpakket, pakket, samenstellingen, sjablonen, startposten, elektra, droogbouw, houtskelet, schilderwerk, beton, vloeren, metselwerk, dakwerk, gevelbekleding, timmerwerk, loodgieterswerk, hvac, isolatie, tuinaanleg, terrasdek, hoofdaannemer, csi, masterformat, cc0, toevoegen, verwijderen, delen
from: d3c036be
---

Een **vakpakket** is een set kant-en-klare posten voor één vakgebied: elk met zijn eenheid, zijn hoogte of diepte, zijn verlies en zijn **samenstelling**, de onderdelen en formules die een gemeten lengte, oppervlakte of telling omzetten in materialen. Een droogbouwwand brengt bijvoorbeeld zijn rails, stijlen, platen, schroeven, tape en spachtelmassa mee.

Pakketten worden toegevoegd aan uw [prijsbibliotheek](topic:price-library), en vanuit daar voegt u hun posten toe aan elke opmeting.

## Een pakket toevoegen

1. Open {{ui:Bibliotheek}} bovenaan het paneel {{ui:Posten}}, en daarna {{ui:Vakpakketten…}}.
2. Kies de {{ui:Eenheden}}: imperiaal (LF, SF), metrisch (m, m²) of beide. Elke samenstelling is in beide stelsels beschikbaar.
3. Kies {{ui:Toevoegen}} naast een pakket.

De posten van het pakket verschijnen in de bibliotheek, voorzien van de naam van het pakket als tag. Om ze te gebruiken, vinkt u ze aan in de bibliotheek en kiest u {{ui:Aan opmeting toevoegen}}.

:::note
**Een pakket brengt geen prijzen mee.** De posten tonen "stel uw tarief in" in de bibliotheek. Tarieven zijn van u: typ ze in de bibliotheek of in de postbewerker, of importeer uw prijslijst als CSV en gebruik {{ui:Prijzen bijwerken}}.
:::

Als u al een post met dezelfde naam en type in uw bibliotheek hebt, laat het pakket de uwe ongewijzigd. Een pakket opnieuw toevoegen vervangt de eigen posten van het pakket door de nieuwe versie.

## Een pakket verwijderen

Kies in {{ui:Vakpakketten…}} {{ui:Verwijderen}} naast een pakket dat u hebt toegevoegd, en daarna nog één keer om te bevestigen. Elke post die ervan afkomstig is, verdwijnt in één stap uit de bibliotheek. Posten die u al aan een opmeting hebt toegevoegd, blijven in die opmeting staan.

## Wat er in een pakket zit

Kies {{ui:Bronnen en details}} onder een pakket om te zien waaruit elke samenstelling is opgesteld: bouwvoorschriften, normen en de montagehandleidingen van brancheorganisaties. Houd in de bibliotheek de aanwijzer boven een post om de bronnen en de aannames te lezen, zoals de hartafstand van stijlen of het verbruik per m² van een verf. Controleer ze aan de hand van uw project en de technische bladen van uw producten, en pas de formules aan waar ze afwijken (zie [Samenstellingen en formules](topic:assemblies)).

Elk pakket is gemarkeerd met **Starter: nog niet beoordeeld door een calculator** totdat werkende calculators het hebben beoordeeld.

Elke post draagt ook zijn CSI MasterFormat-nummer, zoals `09 21 16`.

## Uw bibliotheek delen als pakket

{{ui:Exporteren als pakket…}} in de bibliotheek slaat die op als pakketbestand (`.ccpack.json`) dat iedereen kan toevoegen met {{ui:Een pakketbestand openen…}}. Standaard laat het de posten weg die afkomstig zijn van pakketten die u hebt toegevoegd, en het bevat geen tarieven. Vink {{ui:Mijn tarieven opnemen als voorbeeldtarieven}} aan om ook uw tarieven mee te sturen: ze worden meegestuurd met de regio en de datum die u opgeeft, en wie het pakket toevoegt, kiest zelf of hij ze gebruikt.

Pakketbestanden zijn gewone gegevens, nooit programma's. TakeoffCraft controleert elk onderdeel ervan voordat het wordt gebruikt en laat alles weg wat het niet kan lezen.
