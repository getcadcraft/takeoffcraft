---
title: Porta quantitats d'un fitxer IFC 4.3
summary: Obre un fitxer IFC 4.3 d'una carretera, un ferrocarril, un pont o uns moviments de terres, i obtén un recompte per classe, amb les longituds, àrees i volums que indica el fitxer, com a quantitats tipificades.
keywords: ifc, ifc4x3, ifc 4.3, carretera, ferrocarril, pont, paviment, vorada, capa, moviment de terres, suport, infraestructura, quantitats, bim, civil, quantitats tipificades
from: 6b08c2c4
---

Un fitxer IFC 4.3 pot contenir carreteres, ferrocarrils, ponts, obres marítimes i les parts que les formen: paviments, capes, vorades, rails, moviments de terres, suports, pilons i més. TakeoffCraft els llegeix i els converteix en quantitats tipificades que podeu preuar.

## Obrir el fitxer

1. Trieu {{ui:Obre plànols}} al grup {{ui:Fitxer}}, o premeu {{key:Mod+O}}.
2. Seleccioneu el fitxer IFC (el podeu seleccionar amb els PDF), o arrossegueu-lo a TakeoffCraft.

Es crea una quantitat tipificada per a cada classe i tipus predefinit, per exemple "Paviment (flexible): recompte", i, quan el fitxer les indica, "longitud" en m, "àrea" en m² i "volum" en m³. La nota de cada element diu quants elements s'han comptat i quants no tenien cap quantitat. Obrir un fitxer més nou amb el mateix nom actualitza aquestes quantitats en lloc d'afegir-ne més.

## Què no fa

- Llegeix els conjunts de quantitats (IfcElementQuantity) que porta el fitxer. No mesura les formes 3D, de manera que un element sense conjunt de quantitats es compta però no afegeix cap longitud, àrea ni volum.
- Només es llegeixen les classes d'infraestructura d'IFC 4.3. Un fitxer d'edifici (murs, portes, forjats) no es converteix aquí en quantitats; un fitxer que no és IFC 4.3 ho indica i no n'importa res.
- Les unitats són les del mateix fitxer, convertides a metres.
