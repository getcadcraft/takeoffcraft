---
title: Dibuixeu arcs amb deu mètodes
summary: Trieu com es dibuixa un arc: tres punts, o inici, centre, final, angle, longitud, direcció o radi.
keywords: arc, arcs, corba, paret corba, 3 punts, radi, angle, longitud de corda, direcció, centre, inici, final, mètode d'arc
from: 5e3e0db6
---

## Què cal fer

Dibuixeu una vora corba en un recorregut lineal, una àrea o un tall, amb el mètode d'arc que coincideix amb les dimensions que teniu.

## Passos

1. Comenceu un recorregut, un contorn o un tall, i col·loqueu el punt on comença la corba.
2. Activeu {{ui:Arc}} a la barra d'eines o premeu {{key:R}}.
3. Obriu {{ui:Mètode de l'arc}} a la barra del full. Només es mostra mentre Arc és activat. Trieu 3 punts, Inici, Centre, Final, Inici, Centre, Angle, Inici, Centre, Longitud, Inici, Final, Angle, Inici, Final, Direcció, Inici, Final, Radi, Centre, Inici, Final, Centre, Inici, Angle o Centre, Inici, Longitud.
4. Seguiu la barra d'estat. Us indica què espera l'arc: el seu centre, punt final, angle, longitud, direcció o radi. Feu clic en un punt, o escriviu el nombre (angle, longitud, radi i direcció).
5. Quan es dona l'última dada, l'arc s'afegeix al recorregut. {{key:Esc}} cancel·la l'arc, {{key:Backspace}} desfà el seu últim pas, i {{key:R}} desactiva Arc.

## Notes

- Un arc es rebutja, amb un missatge a la barra d'estat, quan els seus punts coincideixen o estan alineats, o quan el radi no pot arribar al punt final.
- La seva longitud és la longitud exacta de l'arc, i els fitxers antics s'obren igual. Més: [Mesura recorreguts lineals](topic:measure-linear#arcs-and-curved-walls).
