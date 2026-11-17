---
title: "Importer les quantités d'un fichier IFC 4.3"
summary: "Ouvrez un fichier IFC 4.3 d'une route, d'une voie ferrée, d'un pont ou de terrassements, et obtenez un comptage par classe, avec les longueurs, surfaces et volumes que le fichier indique, sous forme de quantités typées."
keywords: ifc, ifc4x3, ifc 4.3, route, voie ferrée, pont, chaussée, bordure, couche, terrassements, appui, infrastructure, quantités, bim, civil, quantités typées
from: 6b08c2c4
---

Un fichier IFC 4.3 peut contenir des routes, des voies ferrées, des ponts, des ouvrages maritimes et les éléments qui les composent : chaussées, couches, bordures, rails, terrassements, appuis, pieux, etc. TakeoffCraft les lit et les transforme en quantités typées que vous pouvez chiffrer.

## Ouvrir le fichier

1. Choisissez {{ui:Ouvrir des PDF}} dans le groupe {{ui:Fichier}}, ou appuyez sur {{key:Mod+O}}.
2. Sélectionnez le fichier IFC (vous pouvez le sélectionner avec des PDF), ou déposez-le sur TakeoffCraft.

Une quantité typée est créée pour chaque classe et type prédéfini, par exemple « Chaussée (souple) : comptage », et, lorsque le fichier les indique, « longueur » en m, « surface » en m² et « volume » en m³. La note de chaque poste indique combien d'éléments ont été comptés et combien n'indiquaient aucune quantité. Ouvrir un fichier plus récent du même nom met à jour ces quantités au lieu d'en ajouter.

## Ce qu'il ne fait pas

- Il lit les jeux de quantités (IfcElementQuantity) que porte le fichier. Il ne mesure pas les formes 3D : un élément sans jeu de quantités est compté, mais n'ajoute ni longueur, ni surface, ni volume.
- Seules les classes d'infrastructure d'IFC 4.3 sont lues. Un fichier de bâtiment (murs, portes, dalles) n'est pas transformé en quantités ici ; un fichier qui n'est pas IFC 4.3 l'indique et n'importe rien.
- Les unités sont celles du fichier, converties en mètres.
