---
title: Een DWG- of DXF-tekening openen
summary: Open een tekeningbestand als bladen (modelruimte en elke indeling), begin met de schaal die de tekening geeft, toon of verberg de lagen en haal gekoppelde tekeningen binnen.
keywords: dwg, dxf, cad, tekening, tekening openen, indelingen, modelruimte, papierruimte, bladen, eenheden, insunits, schaal van viewport, xref, gekoppelde tekening, lagen, bevroren, geen pdf, plotten, zonder plotten
from: d8c3f504
---

TakeoffCraft opent een DWG- of DXF-tekening zoals het een pdf opent: u hoeft haar niet eerst naar pdf te plotten. Tellen vanuit de tekening zelf is exact, omdat de tekening weet wat elk object is. Zie [Tellen vanuit een tekening](topic:count-from-a-drawing).

## De tekening openen

1. Kies {{ui:Tekeningen openen}} in de groep {{ui:Bestand}}, of druk op {{key:Mod+O}}.
2. Selecteer het DWG- of DXF-bestand. U kunt er meerdere selecteren, en pdf's erbij.
3. Kies Openen.

U kunt tekeningbestanden ook op TakeoffCraft slepen, net als pdf's. Er wordt niets geüpload: de browser leest het bestand op uw computer.

TakeoffCraft leest DWG van AutoCAD 2000 tot 2018 en ASCII-DXF van R12 tot 2018. Een binaire DXF weigert het (sla die op als ASCII, of als DWG), net als een bestand dat geen van beide is, en het zegt waarom. Een beschadigd bestand opent met wat kon worden gelezen, en een melding zegt dat; de tellingen kunnen onvolledig zijn.

## Bladen

- **Model** is de modelruimte van de tekening.
- **Elke indeling** (tabblad papierruimte) is een blad, genoemd naar zijn tabblad, in tabvolgorde. Een indeling toont het model via zijn viewports, zoals het wordt geplot.

Zoomen, verschuiven, aanhaken op de eigen lijnen van de tekening, markeringen, notities, {{ui:Ijken}} en de rest werken als bij een pdf. De bladen van een tekening worden in de opmeting bewaard op bestandsnaam en een vingerafdruk van de inhoud, net als een pdf: open hetzelfde bestand opnieuw en de markeringen staan op de bladen.

## De schaal

Een blad begint met de schaal die de tekening geeft:

- **Een indeling** neemt de schaal van haar grootste viewport. Een schaal als 1/2" = 1'-0" wordt genoemd naar de voorinstelling die het is; elke andere wordt getoond als "Uit de viewport van de tekening: 1" = 2.5'". Heeft een indeling viewports op andere schalen, dan bepaalt de grootste de schaal van het blad: controleer de andere met {{ui:Controleren}}.
- **Model** neemt de eenheden van de tekening (inch, millimeter, voet…) als schaal: "Tekeningeenheden (inch)".
- **Een tekening zonder eenheden** (de tekening zegt niet of een eenheid een inch of een millimeter is) heeft geen schaal: het blad zegt "Geen schaal", en meten erop wordt geweigerd, zoals bij een pdf zonder schaal. Tellen heeft geen schaal nodig. Geef er een met {{ui:Ijken}}.

{{ui:Ijken}}, {{ui:Controleren}} en de lijst {{ui:Voorinstelling}} wijzigen een schaal op elk moment en winnen het van die van de tekening. De lijst met voorinstellingen is uit bij Model, dat geen papierformaat heeft.

## Lagen

{{ui:Lagen}} op de bladbalk toont de lagen van de tekening, met hoeveel objecten elk op dit blad heeft. Lagen die het bestand heeft uitgezet of bevroren, beginnen verborgen. Vink een laag uit om haar te verbergen, of vink een verborgen laag aan om haar te tonen: het blad wordt opnieuw getekend, en wat verborgen is, blijft weg uit de tellingen en uit de objecten die aan {{ui:Tekening meten}} worden aangeboden, tenzij u vraagt om verborgen lagen ook te tellen. {{ui:Alles tonen}} toont elke laag; {{ui:Terug naar de lagen van het bestand}} maakt uw wijzigingen ongedaan. Laagkeuzes horen bij deze sessie, niet bij het opmetingsbestand.

## Gekoppelde tekeningen (xrefs)

Een tekening die andere tekeningen koppelt, toont ze waar ze zijn ingevoegd. TakeoffCraft vindt een gekoppelde tekening onder de **geopende bestanden**, op haar bestandsnaam: open de hoofdtekening en de gekoppelde tekening samen (of de een na de ander). Tot dan zegt de statusbalk hoeveel gekoppelde tekeningen niet zijn gevonden, dat wat ze tekenen ontbreekt, en tellingen melden dat ook.

## Beperkingen

- Objecten die TakeoffCraft niet kan lezen of plaatsen (proxy-objecten, onbekende klassen) worden in het telvenster per type getoond; ze worden nooit zonder melding weggelaten.
- Heel grote tekeningen worden gedeeltelijk getekend, en tellingen stoppen bij een limiet, met een melding. Open in dat geval een pdf-plot van zo'n tekening.
- Een tekening wordt in zwart getekend en in haar eigen kleuren, donkerder voor wit papier. Plotstijltabellen en pentoewijzingen worden niet toegepast.
