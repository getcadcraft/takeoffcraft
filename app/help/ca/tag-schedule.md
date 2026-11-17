---
title: Importa un quadre d'etiquetes com a quantitats
summary: Un quadre d'etiquetes exportat del model de l'edifici (CSV) es converteix en quantitats tipades a l'amidament, una per etiqueta, perquè els recomptes i les àrees del model quedin al costat del que has mesurat.
keywords: etiquetes, quadre d'etiquetes, model d'edifici, bimcraft, ifc, quantitats, csv, quadre, importació, quantitat tipada
from: a60c19b6
---

{{ui:Etiquetes}} a la barra d'eines importa un quadre d'etiquetes que BimCraft ha desat com a fitxer CSV. Cada etiqueta diferent es converteix en una quantitat tipada, del mateix tipus que esdevenen el desmunt i el terraplè de CivilCraft.

1. A BimCraft, fes el quadre d'etiquetes que vulguis i desa'l com a CSV.
2. Tria {{ui:Etiquetes}} i selecciona el fitxer.
3. Indica quina columna dóna nom a la línia ({{ui:Nomena la línia per}}, normalment l'etiqueta) i quina conté el nombre ({{ui:Quantitat de}}). Amb {{ui:Compta les files}}, cada fila compta com una.
4. Tria la unitat. Una longitud en mil·límetres es passa a metres amb {{ui:Multiplica per}} 0.001.
5. {{ui:Afegeix les quantitats}}.

Les files amb la mateixa etiqueta se sumen. Una cel·la que no és un nombre es deixa de banda i es compta al resum. En tornar a importar el mateix quadre s'actualitzen les quantitats que ja tens en lloc d'afegir-ne de noves; els seus noms, tarifes i pèrdua continuen sent teus.

## Bon a saber

Una quantitat tipada no es mesura en un full, de manera que no té marques. No s'envia res enlloc; el fitxer es llegeix aquí.
