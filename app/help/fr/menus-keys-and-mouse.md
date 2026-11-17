---
title: Menus, touches et souris
summary: Choisissez un style de menus qui correspond à votre façon de travailler, donnez à n'importe quelle commande votre propre touche, déplacez les commandes entre les menus, et réglez l'effet de la molette et des boutons de la souris.
keywords: style de menu, menus, barre de menus, ruban, onglets du ruban, barre d'outils, raccourcis clavier, touches de raccourci, touches, personnaliser, réattribuer, souris, molette, inverser, sens du zoom, bouton central, bouton droit, panoramique, exporter, importer, changer, familier, bureau de métré, conditions
from: f01f0d6d
---

Les commandes de TakeoffCraft sont les mêmes quelle que soit la façon dont vous les atteignez. Un **style de menus** ne décide que de leur emplacement à l'écran, de leur nom et des touches qui les lancent. Choisissez-en un dans {{ui:Paramètres}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menus, touches et souris}} ; le changement est immédiat, et ce navigateur le mémorise.

## Les trois styles

| Style | Ce que vous obtenez |
|---|---|
| {{ui:TakeoffCraft}} | La barre d'outils propre à TakeoffCraft : Fichier, Exporter, Échelle, Métré, Édition et Vue, avec les touches d'outils d'une seule lettre. Le point de départ. |
| {{ui:Bureau de métré}} | Une barre de menus ({{ui:Fichier}}, {{ui:Édition}}, {{ui:Vue}}, {{ui:Échelle}}, {{ui:Métré}}, {{ui:Éléments (I)}}, {{ui:Annotations}}, {{ui:Exporter}}) au-dessus d'une rangée d'outils de métré, à la manière des logiciels de métré sur écran. Les postes sont appelés conditions sur la rangée. Mêmes touches, plus {{key:N}} pour un nouveau poste. Les préréglages d'échelle passent sur la barre de la feuille, à côté de l'échelle de la feuille. |
| {{ui:Ruban de métré}} | Des onglets de ruban nommés d'après le travail : {{ui:Métré}} (mesurer, former, échelle, depuis le dessin, conditions), {{ui:Édition}}, {{ui:Vue}}, {{ui:Annotations}} et {{ui:Estimation}} (le classeur, les PDF annotés, l'offre), avec un menu {{ui:Fichier}} et une rangée rapide pour ouvrir, enregistrer, annuler et rétablir. Les outils utilisés toute la journée sont grands, leurs voisins petits et empilés. Mêmes touches ; les préréglages d'échelle passent sur la barre de la feuille. |

Les trois styles conservent les touches de TakeoffCraft : {{key:V}} sélectionner, {{key:L}} linéaire, {{key:A}} surface, {{key:O}} cercle, {{key:B}} pièce, {{key:P}} chemin (choisir les lignes du PDF), {{key:X}} découpe, {{key:C}} compter, {{key:S}} comptage auto, {{key:K}} étalonner, {{key:D}} vérifier, {{key:R}} mode arc, {{key:E}} mode déduction, {{key:F}} et {{key:W}} pour ajuster, {{key:3}} la vue de contrôle 3D, {{key:F3}} accrochage, et {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Les outils de la barre de la feuille (notes, nuages, surlignages, Comparer, 3D) attendent qu'un PDF soit ouvert ; s'ils sont choisis avant, la ligne d'état le signale.

:::tip
Une touche qui appartient à la disposition propre à TakeoffCraft, mais que votre style a attribuée à une autre commande, ne fait rien, et la ligne d'état indique où sa commande se trouve désormais (« Dans Mes touches, Compter est Ctrl+Alt+C »). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} et les flèches conservent toujours leur sens. Pendant le tracé d'un tronçon ou d'un contour, la collation ou la révision d'un comptage auto, les lettres et les chiffres d'une longueur saisie restent attribués au dessin.
:::

## Personnaliser

1. Choisissez le style le plus proche de ce que vous voulez, puis cliquez sur {{ui:Personnaliser…}}.
2. Dans {{ui:Touches et menus}}, trouvez une commande (la zone de recherche aide). {{ui:Ajouter une touche}}, puis appuyez sur la touche, ou sur deux touches à la suite pour une touche de deux lettres. Cliquez sur une touche pour la retirer.
3. Avec la barre de menus, {{ui:Emplacement}} déplace la commande vers un autre menu, ou vers {{ui:Touches seulement}}.
4. Dans {{ui:Souris}}, réglez la molette et les boutons qui font un panoramique de la feuille.
5. Donnez-lui un nom et cliquez sur {{ui:Enregistrer}}.

Enregistrer un style intégré crée votre propre copie (« Mon bureau de métré ») ; le style intégré ne change jamais. Une touche attribuée à deux commandes s'affiche en rouge et doit être corrigée avant que vous puissiez enregistrer.

## Souris

- **Molette** : {{ui:Faire défiler vers le haut zoome en avant}} (au départ) ou {{ui:Faire défiler vers le haut zoome en arrière}}, et la vitesse. Un pincement sur le pavé tactile zoome toujours dans le sens du mouvement de vos doigts.
- **Panoramique de la feuille avec** : le bouton central, le bouton droit, ou les deux. Un glissement gauche sur le papier vide et {{key:Space}} avec un glissement font toujours un panoramique ; un clic droit sans glisser termine toujours un tronçon ou un contour.
- **Glisser dans les vues 3D** : {{ui:Propre à chaque vue}} conserve les boutons de la vue de contrôle 3D (gauche et central pour l'orbite, droit pour le panoramique). Ou réglez les boutons central et droit sur orbite, panoramique, zoom ou rien ; {{key:Shift}} avec le bouton inverse l'orbite et le panoramique. Le bouton gauche fait toujours l'orbite et la sélection.

## Emportez-le avec vous

{{ui:Exporter}} enregistre le style utilisé dans un petit fichier `.ccinput.json` ; {{ui:Importer…}} en ajoute un, depuis un autre ordinateur ou depuis un collègue. Un fichier importé ne peut pointer que vers les commandes propres à TakeoffCraft : tout le reste est laissé de côté et compté dans la ligne d'état. {{ui:Supprimer ce style}} retire l'un de vos propres styles.

:::note
Ces réglages restent dans ce navigateur. {{ui:Utiliser ce style dans toutes les applications}} sous les cartes de style fait ouvrir chaque application dans le style correspondant (sa propre barre d'outils, une barre de menus ou un ruban), avec les modifications que vous avez faites dans chacune. TakeoffCraft n'a pas de style avec une ligne de commande : lorsqu'un tel style est choisi pour toutes les applications, TakeoffCraft conserve sa propre barre d'outils.

Le {{ui:Ruban de métré}} est aussi le ruban de la disposition {{ui:Ruban et explorateur de projet}} ({{ui:Paramètres}} › {{ui:Général}} › {{ui:Disposition}}) : voir [L'écran de TakeoffCraft](topic:workspace).
:::

Voir aussi : [Clavier et souris](topic:keyboard) · [Paramètres de TakeoffCraft](topic:settings) · [Venir d'autres logiciels de métré](topic:coming-from)
