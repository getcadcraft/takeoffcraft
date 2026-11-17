---
title: Paquets d'oficis
summary: Afegeix a la teva biblioteca de preus conjunts d'elements gratuïts per a un ofici, elimina'ls en un sol pas i comparteix la teva biblioteca com a paquet.
keywords: paquet d'ofici, paquet, muntatges, plantilles, elements inicials, elèctric, pladur, estructura, pintura, formigó, paviments, maçoneria, cobertes, revestiment, fusteria, fontaneria, hvac, aïllament, paisatgisme, entarimat, contractista general, csi, masterformat, cc0, afegeix, elimina, comparteix
from: d3c036be
---

Un **paquet d'ofici** és un conjunt d'elements fets per a un ofici: cadascun amb la seva unitat, la seva alçada o profunditat, la seva pèrdua i el seu **preu descompost**, les peces i fórmules que converteixen un recorregut, una àrea o un recompte mesurat en materials. Un envà de pladur, per exemple, porta el seu rail, muntants, plaques, cargols, cinta i pasta.

Els paquets s'afegeixen a la teva [biblioteca de preus](topic:price-library), i des d'allà hi afegeixes els seus elements a qualsevol amidament.

## Afegeix un paquet

1. Obre {{ui:Biblioteca}} a la part superior del tauler {{ui:Elements}} i després {{ui:Paquets d'oficis…}}.
2. Tria les {{ui:Unitats}}: imperials (LF, SF), mètriques (m, m²) o les dues. Cada preu descompost hi és en tots dos sistemes.
3. Tria {{ui:Afegeix}} al costat d'un paquet.

Els elements del paquet apareixen a la biblioteca, amb el nom del paquet com a etiqueta. Per fer-los servir, marca'ls a la biblioteca i tria {{ui:Afegeix a l'amidament}}.

:::note
**Un paquet no porta preus.** Els seus elements mostren "set your rate" a la biblioteca. Les tarifes són teves: escriu-les a la biblioteca o a l'editor d'elements, o importa la teva llista de preus com a CSV i fes servir {{ui:Actualitza els preus}}.
:::

Si ja tens a la biblioteca un element amb el mateix nom i tipus, el paquet deixa el teu tal com està. Tornar a afegir un paquet substitueix els seus propis elements per la versió nova.

## Elimina un paquet

A {{ui:Paquets d'oficis…}}, tria {{ui:Elimina}} al costat d'un paquet que hagis afegit i, després, una altra vegada per confirmar. Tots els elements que en procedien surten de la biblioteca en un sol pas. Els elements que ja hagis afegit a un amidament es mantenen en aquest amidament.

## Què hi ha en un paquet

Tria {{ui:Fonts i detalls}} sota un paquet per veure de què s'ha escrit cada muntatge: codis de l'edificació, normes i guies d'instal·lació de les associacions de l'ofici. A la biblioteca, situa el punter sobre un element per llegir-ne les fonts i les suposicions, com la separació dels muntants o el rendiment d'aplicació d'una pintura. Comprova-ho amb la teva obra i les fitxes tècniques dels teus productes, i canvia les fórmules on no coincideixin (vegeu [Muntatges i fórmules](topic:assemblies)).

Cada paquet està marcat com a **Starter: not reviewed by an estimator yet** fins que el revisin pressupostistes en actiu.

Cada element porta també el seu número CSI MasterFormat, com ara `09 21 16`.

## Comparteix la teva biblioteca com a paquet

{{ui:Exporta com a paquet…}} a la biblioteca el desa com a fitxer de paquet (`.ccpack.json`) que qualsevol pot afegir amb {{ui:Obre un fitxer de paquet…}}. Per defecte, deixa fora els elements que procedeixen de paquets que hagis afegit, i no porta tarifes. Marca {{ui:Inclou les meves tarifes com a tarifes de mostra}} per enviar també les teves tarifes: surten etiquetades amb la regió i la data que indiquis, i qui afegeix el paquet decideix si les fa servir.

Els fitxers de paquet són dades simples, mai programes. TakeoffCraft comprova cada part d'un fitxer abans d'usar-lo i deixa fora tot el que no pot llegir.
