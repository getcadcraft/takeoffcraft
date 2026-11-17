---
title: Groupes types
summary: Métrez une unité type, une pièce ou un étage une seule fois et comptez-la autant de fois qu'elle se répète, modifiez le nombre plus tard, et voyez quels repères sont types.
keywords: type, groupe type, répétition, nombre de répétitions, multiplier, fois, unité, chambre d'hôtel, appartement, étage type, x24, copies
from: 42c3a372
---

Un bâtiment se répète souvent : 24 chambres d'hôtel identiques, 6 étages types, 40 places de stationnement avec le même marquage. Un **groupe type** vous permet de métrer l'une d'elles et de la compter autant de fois qu'elle se répète, sans dessiner les copies.

## Créer un groupe type

1. Métrez une unité : ses murs, son sol, ses prises — n'importe quels postes.
2. Sélectionnez ses repères avec l'outil {{ui:Sélectionner}} : cliquez sur l'un, puis {{key:Shift}} + clic sur les autres ([Sélectionner les repères](topic:copy-paste#select-the-marks)).
3. Sous **Repère sélectionné**, ouvrez {{ui:Type}} et choisissez {{ui:Nouveau groupe type…}}.
4. Donnez-lui un nom (`Unit A`) et le nombre de fois qu'elle se répète (`24`), puis choisissez {{ui:Créer un groupe}}.

Chaque quantité de ces repères compte désormais 24 fois : un tronçon de mur de 10 ft donne 240 ft, un sol de 80 SF donne 1,920 SF, deux prises donnent 48. Les coûts suivent, et les formules d'ouvrage voient les totaux répétés (`N` compte également chaque tronçon 24 fois).

Sur la feuille, un cadre en pointillés entoure les repères du groupe, avec son nom et son nombre, comme **Unit A ×24**.

## Modifier plus tard

Les groupes sont listés sous **Groupes types** dans le panneau de droite :

- Modifiez le nombre après **×** pour changer le nombre de fois qu'il compte (de 1 à 10,000). Toutes les quantités sont mises à jour.
- Renommez-le dans sa zone de nom.
- L'icône de cadre sélectionne ses repères (et affiche leur feuille).
- La corbeille supprime le groupe. Ses repères restent, comptés une fois.

Pour ajouter des repères à un groupe ou en retirer, sélectionnez-les et choisissez le groupe (ou {{ui:Pas de type (×1)}}) sous {{ui:Type}}.

## Bon à savoir

- Les repères d'un groupe peuvent se trouver sur plusieurs feuilles et appartenir à n'importe quels postes. Chaque repère appartient à un groupe au plus.
- Les copies que vous collez ne font pas partie du groupe : une copie collée d'une unité type compterait sinon 24 fois de plus. Utilisez un groupe pour « la même chose N fois », et copiez-collez pour les copies que vous dessinez.
- Les repères ne sont tracés qu'une fois : la vue 3D et le PDF annoté montrent donc une seule unité ; les quantités, les exports et le tableau par feuille la comptent ×N. La feuille **Repères** de l'export Excel indique quels repères sont types et combien de fois ils comptent.
- Avec les zones de soumission, les repères d'un groupe comptent ×N dans leur propre zone de soumission.
