---
title: Meet vanaf ’n tekening
summary: Neem lengtes en oppervlaktes uit die tekening se eie lyne, boë, polilyne en arseringe deur dit te kies, met presiese bogte en gate, in plaas daarvan om met klikke na te trek.
keywords: meet tekening, meetkunde, polilyn, boog, sirkel, arsering, bulge, presiese lengte, presiese oppervlakte, kies, venster, naspoor, uit cad, lineêr, oppervlakte
from: fd734246
---

{{ui:Meet tekening}} op die bladbalk van ’n DWG- of DXF-blad neem die tekening se eie voorwerpe as merke, sodat jy hulle nie met klikke hoef na te trek nie. ’n Polilyn se lengte, ’n boog se lengte, ’n sirkel se oppervlakte en ’n arsering se oppervlakte met sy gate kom presies uit, uit dieselfde rekenaarwerk wat die hoeveelheidsopname vir elke merk gebruik.

## Neem voorwerpe as ’n lineêre of oppervlakte-item

1. Maak of klik ’n **lineêre** of ’n **oppervlakte**-item onder {{ui:Items}}. Die blad benodig ’n skaal.
2. Kies {{ui:Meet tekening}}.
3. Klik die voorwerpe op die blad om hulle te kies, of sleep ’n venster om hulle: alles wat heeltemal daarin lê, word gekies. {{key:Shift}} voeg ’n venster by wat reeds gekies is; klik ’n gekose voorwerp weer om dit te laat staan. Die balk wys die totaal: "6 reekse: 108'-9 1/8" altesaam."
4. Kies die byvoegknoppie, wat die getal en die item noem, soos {{ui:Voeg 6 by tot Edge}} (of druk {{key:Enter}}). Elke voorwerp word een merk van die item, in een ongedaan-stap. {{key:Esc}} maak wat jy gekies het leeg.

## Wat elke soort item neem

- ’n **lineêre** item neem lyne, boë, polilyne, sirkels en splines volgens lengte. ’n Geslote vorm tel volgens sy omtrek. ’n Arsering word uitgelaat: dit het ’n oppervlakte, nie ’n lengte nie, en die balk sê so.
- ’n **oppervlakte**-item neem geslote vorms: geslote polilyne, sirkels, 2D-soliede liggame, en arserings met hul gate. Oop lope word uitgelaat, en die balk sê so.

## Presies, en byna presies

Lyne, boë (enige bulge), polilyne met bulges en sirkels is presies: lengtes en oppervlaktes gebruik die boog se radius en omvang, nie ’n prent daarvan nie. Ellipse, splines en arserings waarvan die grens uit rande bestaan, word gemeet in koorde van een graad of fyner, wat binne ’n honderdste van ’n persent is vir ellipse en ’n tiende vir die res; die balk sê hoeveel van wat jy gekies het krommes van hierdie soort is.

## Waar dit van watter plek neem

- **Model**: voorwerpe in modelruimte. **’n Uitleg**: sy eie lyne, en die modelvoorwerpe binne ’n aansigvenster, geskaal daardeur. ’n Voorwerp wat oor ’n aansigvenster se rand loop, word nie aangebied nie (dit druk afgesny); ’n voorwerp wat twee aansigvensters albei wys, word een keer geneem.
- Net lae wat die blad wys. Blokke word getel, nie gemeet nie: sien [Tel vanaf ’n tekening](topic:count-from-a-drawing). 3D-polilyne, nette, soliede liggame en streke word nie aangebied nie.
