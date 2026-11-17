---
title: Obre un dibuix DWG o DXF
summary: Obre un fitxer de dibuix com a fulls (espai model i cada presentació), comença amb l'escala que dona el dibuix, mostra o amaga les seves capes i porta-hi els dibuixos enllaçats.
keywords: dwg, dxf, cad, dibuix, obre un dibuix, presentacions, espai model, espai de paper, fulls, unitats, insunits, escala de la finestra gràfica, xref, dibuix enllaçat, capes, congelades, sense pdf, traça, sense traçar
from: d8c3f504
---

TakeoffCraft obre un dibuix DWG o DXF com obre un PDF: no cal traçar-lo a PDF abans. Comptar des del mateix dibuix és exacte, perquè el dibuix sap què és cada objecte. Vegeu [Compta des d'un dibuix](topic:count-from-a-drawing).

## Obrir el dibuix

1. Trieu {{ui:Obre plànols}} al grup {{ui:Fitxer}}, o premeu {{key:Mod+O}}.
2. Seleccioneu el fitxer DWG o DXF. En podeu seleccionar diversos, i PDF amb ells.
3. Trieu Obre.

També podeu arrossegar fitxers de dibuix a TakeoffCraft, com els PDF. No es puja res: el navegador llegeix el fitxer al vostre ordinador.

TakeoffCraft llegeix DWG des d'AutoCAD 2000 fins a 2018 i DXF ASCII des de R12 fins a 2018. Rebutja un DXF binari (deseu-lo com a ASCII, o com a DWG) i un fitxer que no és cap dels dos, i en diu el motiu. Un fitxer malmès s'obre amb el que s'ha pogut llegir, i un missatge ho indica; els seus recomptes poden ser incomplets.

## Fulls

- **Model** és l'espai model del dibuix.
- **Cada presentació** (pestanya d'espai de paper) és un full, amb el nom de la pestanya, en ordre de pestanyes. Una presentació mostra el model a través de les seves finestres gràfiques, tal com es traça.

El zoom, el desplaçament, l'ajust a les línies del dibuix, les marques, les notes, {{ui:Calibra}} i la resta funcionen com en un PDF. Els fulls d'un dibuix es desen a l'amidament pel nom del fitxer i una empremta del seu contingut, com un PDF: torneu a obrir el mateix fitxer i les marques són als seus fulls.

## L'escala

Un full comença amb l'escala que dona el dibuix:

- **Una presentació** pren l'escala de la seva finestra gràfica més gran. Una escala com 1/2" = 1'-0" es designa com la predefinida que és; qualsevol altra es mostra com "Des de la finestra gràfica del dibuix: 1" = 2.5'". Si una presentació té finestres gràfiques a altres escales, la més gran fixa l'escala del full: comproveu les altres amb {{ui:Comprova}}.
- **Model** pren les unitats del dibuix (polzades, mil·límetres, peus...) com a escala, "Unitats del dibuix (polzades)".
- **Un dibuix sense unitats** (el dibuix mai no va dir si una unitat és una polzada o un mil·límetre) no té escala: el full diu "Sense escala", i mesurar-hi es rebutja, com en un PDF sense escala. Comptar no necessita escala. Doneu-li una amb {{ui:Calibra}}.

{{ui:Calibra}}, {{ui:Comprova}} i la llista {{ui:Predefinida}} canvien una escala en qualsevol moment, i tenen prioritat sobre la del dibuix. La llista de predefinides està desactivada a Model, que no té mida de paper.

## Capes

{{ui:Capes}} a la barra del full llista les capes del dibuix amb quants objectes té cada una en aquest full. Les capes que el fitxer ha desactivat o congelat comencen amagades. Desmarqueu una capa per amagar-la, o marqueu-ne una d'amagada per mostrar-la: el full es torna a dibuixar, i el que és amagat queda fora dels recomptes i dels objectes que s'ofereixen a {{ui:Mesura del dibuix}}, tret que demaneu comptar també les capes amagades. {{ui:Mostra-ho tot}} mostra totes les capes; {{ui:Torna a les capes del fitxer}} desfà els vostres canvis. Les opcions de capa pertanyen a aquesta sessió, no al fitxer d'amidament.

## Dibuixos enllaçats (xrefs)

Un dibuix que enllaça altres dibuixos els mostra on són inserits. TakeoffCraft troba un dibuix enllaçat entre els **fitxers oberts**, pel seu nom de fitxer: obriu el dibuix principal i el dibuix enllaçat junts (o un després de l'altre). Fins llavors, la barra d'estat diu quants dibuixos enllaçats no s'han trobat, que el que dibuixen falta, i els recomptes ho indiquen.

## Límits

- Els objectes que TakeoffCraft no pot llegir ni col·locar (objectes proxy, classes desconegudes) es llisten a la finestra de recompte per tipus; mai no se n'eliminen sense avisar.
- Els dibuixos molt grans es dibuixen per parts, i els recomptes s'aturen en un límit, i ho indiquen. Obriu-ne un traçat en PDF en lloc seu.
- Un dibuix es dibuixa en negre i amb els seus propis colors, enfosquits per al paper blanc. Les taules d'estils de traçat i les assignacions de plomes no s'apliquen.
