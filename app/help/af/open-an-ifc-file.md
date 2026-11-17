---
title: Bring hoeveelhede in uit 'n IFC 4.3-lêer
summary: Maak 'n IFC 4.3-lêer van 'n pad, spoorweg, brug of grondwerk oop en kry 'n telling per klas, met die lengtes, oppervlaktes en volumes wat die lêer meld, as getikte hoeveelhede.
keywords: ifc, ifc4x3, ifc 4.3, pad, spoorweg, brug, plaveisel, kantsteen, laag, steunpunt, grondwerk, lagers, infrastruktuur, hoeveelhede, bim, siviel, getikte hoeveelhede
from: 6b08c2c4
---

'n IFC 4.3-lêer kan paaie, spoorwegs, brûe, mariene werke en die dele waaruit hulle bestaan, hou: plaveisels, lae, kantstene, spoorstawe, grondwerk, steunpunte, pale en meer. TakeoffCraft lees dié en maak daarvan getikte hoeveelhede wat jy kan prys.

## Maak die lêer oop

1. Kies {{ui:Maak planne oop}} in die {{ui:Lêer}}-groep, of druk {{key:Mod+O}}.
2. Kies die IFC-lêer (jy kan dit saam met PDF's kies), of laat dit op TakeoffCraft val.

Een getikte hoeveelheid word gemaak vir elke klas en vooraf gedefinieerde soort, byvoorbeeld "Plaveisel (buigbaar): telling", en, wanneer die lêer hulle meld, "lengte" in m, "oppervlakte" in m² en "volume" in m³. Die nota op elke item sê hoeveel elemente getel is en hoeveel geen hoeveelheid gemeld het nie. As jy 'n nuwer lêer van dieselfde naam oopmaak, word daardie hoeveelhede opgedateer in plaas van dat meer bygevoeg word.

## Wat dit nie doen nie

- Dit lees die hoeveelheidstelle (IfcElementQuantity) wat die lêer dra. Dit meet nie die 3D-vorms nie, so 'n element sonder 'n hoeveelheidstel word getel, maar voeg geen lengte, oppervlakte of volume by nie.
- Slegs die infrastruktuurklasse van IFC 4.3 word gelees. 'n Gebou-lêer (mure, deure, plate) word hier nie in hoeveelhede omgeskakel nie; 'n lêer wat nie IFC 4.3 is nie, sê so en bring niks in nie.
- Die eenhede is die lêer s'n self, omgeskakel na meter.
