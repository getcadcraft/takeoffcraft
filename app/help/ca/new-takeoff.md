---
title: Comença un amidament nou
summary: Esborra-ho tot i comença un amidament buit sense recarregar la pàgina, i desa primer el vostre treball.
keywords: nou, amidament nou, esborra, reinicia, comença de nou, buit, tanca PDF, següent feina
from: 16d392a4
---

{{ui:Nou}} tanca tots els PDF i comença un amidament buit a la mateixa pàgina.

1. Desa l'amidament actual si el voleu conservar: {{ui:Desa l'amidament}} o {{key:Mod+S}}.
2. Trieu {{ui:Nou}} al grup {{ui:Fitxer}}.
3. Si hi ha canvis sense desar, TakeoffCraft pregunta **Amidament sense desar**: trieu {{ui:Desa primer l'amidament}} (baixa el projecte i després n'esborra el contingut), {{ui:Descarta els canvis}}, o {{ui:Cancel·la}}.
   La finestra torna a l'estat buit: cap PDF, cap element, cap marca, cap escala. La barra d'estat diu "Amidament nou. Obriu PDF per començar."

S'esborra:

- cada PDF obert, els seus fulls i les miniatures,
- els elements, els conjunts, les marques i les escales,
- el zoom i la posició de cada full,
- l'historial de desfer (no podeu desfer {{ui:Nou}}),
- el mode d'arc, i qualsevol cerca o revisió de recompte automàtic.

Els fitxers del disc no es toquen. Per recuperar l'amidament anterior, obriu el seu `.takeoff.json` i els PDF: vegeu [Desa i torna a obrir un amidament](topic:save-and-reopen).

:::note
Cada amidament nou comença sense elements. Per portar-ne d'altres, copieu-los primer: {{ui:Copia la partida}} a Elements (o copieu marques, que porten els seus elements), i després {{ui:Enganxa}} al nou amidament. Vegeu [Copia, enganxa i duplica marques](topic:copy-paste). Per als elements que feu servir en cada feina, guardeu-los a la vostra [biblioteca de preus](topic:price-library) i afegiu-los des d'allà, o afegiu un [paquet d'oficis](topic:trade-packs).
:::
