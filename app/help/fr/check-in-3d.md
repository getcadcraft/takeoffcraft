---
title: Vérifier le métré en 3D
summary: Voyez les murs, dalles et comptages de la feuille ouverte se dresser sur le dessin, tournez autour, et cliquez sur l'un d'eux pour sélectionner son repère.
keywords: png, image, photo, capture d'écran, pile, étages, niveaux, élévation, glb, gltf, exporter en 3D, épaisseur de mur, hauteur de base, ouverture, linteau de porte, 3d, trois d, vérifier, vue, murs, hauteur de mur, dalle, profondeur, volume, orbite, maquette, sélection, isométrique, perspective
from: fb16b4f7
---

La vue 3D est un contrôle, non un second dessin : elle dresse sur l'écran le métré de la feuille, sur la feuille elle-même, de sorte qu'un mur manquant, une dalle en double ou un comptage égaré apparaît d'un coup d'œil.

Avant de commencer : la feuille doit avoir une échelle ([Régler l'échelle](topic:set-the-scale)). Les hauteurs et profondeurs nécessitent des dimensions réelles en pieds ; sur une feuille sans échelle, {{ui:3D}} le signale et reste sur la feuille à plat.

## Ouvrir la vue 3D

1. Affichez la feuille que vous voulez vérifier.
2. Choisissez {{ui:3D}} sur la barre qui affiche le nom et l'échelle de la feuille, ou appuyez sur {{key:3}}.
   La première fois, la vue 3D met un moment à se charger. La feuille est dessinée au sol, et le métré s'y dresse dans la couleur de chaque élément.
3. Pour revenir, choisissez à nouveau {{ui:3D}}, {{ui:Retour à la feuille}}, ou appuyez sur {{key:3}}. Choisir un outil de dessin (Linéaire, Surface, Comptage, etc.) revient aussi, puisque les repères sont dessinés sur la feuille à plat.

Elle affiche la feuille à l'écran ; changez de feuille dans la liste des feuilles, ou avec {{key:PageDown}} et {{key:PageUp}}, et la vue 3D suit. Pour voir plusieurs étages à la fois, empilez-les (voir ci-dessous).

## Ce que vous voyez

| Repère | En 3D |
|---|---|
| Tronçon linéaire, élément avec une hauteur | Un mur de cette hauteur le long du tronçon. Les tronçons courbes suivent la courbe. |
| Tronçon linéaire, élément sans hauteur | Une ligne sur la feuille. Donnez à l'élément une hauteur sous **Élément** pour le dresser. |
| Surface, élément avec une profondeur | Une dalle de cette profondeur, avec ses réservations ouvertes. |
| Surface, élément sans profondeur | Une fine plaque de 2" pour qu'elle reste visible. |
| Comptage | Un petit poteau sur chaque point compté. |

La hauteur correspond au champ {{ui:Hauteur}} d'un élément linéaire, et la profondeur au champ {{ui:Profondeur}} d'un élément de surface, sous **Élément** (voir [Créer des éléments de métré](topic:create-items)). Modifiez-les et la vue 3D se met à jour immédiatement. La note sous le nom de la feuille indique ce que la feuille contient, par exemple « Cette feuille en 3D : 2 murs, 1 dalle, 3 comptages », et combien de tronçons ou de surfaces n'ont ni hauteur ni profondeur. Les clics passent à travers la note et atteignent la vue.

Les chiffres ne changent pas en 3D : la surface d'un mur est sa longueur exacte multipliée par sa hauteur, et le volume d'une dalle est sa surface nette (contour moins réservations, courbes exactes) multipliée par sa profondeur. Les courbes ne sont dessinées en petits segments droits qu'à l'écran.

## Tourner autour

| Action | Effet |
|---|---|
| Glisser, ou glisser avec le bouton du milieu | Tourner autour du métré. |
| {{key:Shift}} + glisser, ou glisser avec le bouton droit | Panoramique. |
| Molette de la souris | Zoom avant et arrière au niveau du pointeur. |
| Glisser à deux doigts sur un pavé tactile | Tourner ({{key:Shift}} fait un panoramique). Un pincement zoome. |
| {{ui:Iso}}, {{ui:Dessus}}, {{ui:Avant}}, {{ui:Arrière}}, {{ui:Gauche}}, {{ui:Droite}}, {{ui:Dessous}} | Vues standard, cadrées sur le métré. La vue 3D s'ouvre en {{ui:Iso}}. |
| {{ui:Perspective}} | Perspective activée ou désactivée (projection parallèle lorsqu'elle est désactivée). |
| {{ui:Zoom étendue}} ou {{key:F}} | La feuille entière. |
| {{ui:Feuille}} | Affiche ou masque le dessin au sol. |
| Le cube de vue, en haut à droite | Cliquez sur une face, une arête ou un coin pour regarder depuis là ; faites-le glisser pour tourner ; faites glisser son anneau de boussole pour pivoter ; le bouton maison revient à {{ui:Iso}}. |

Le coin affiche un cube de vue, une petite icône d'axes X, Y, Z, ou rien : choisissez dans {{ui:Paramètres}}, sous l'onglet TakeoffCraft, sous **Indicateur de coin** ([Réglages de TakeoffCraft](topic:settings)). La feuille à plat n'a pas d'indicateur de coin.

:::touch
Un doigt tourne ; deux doigts pincent pour zoomer et glissent pour le panoramique. Une pression sélectionne.
:::

## Murs avec une épaisseur, une base et des ouvertures

Un élément linéaire avec une hauteur se dresse en bande fine. Pour le voir comme un vrai mur, donnez-lui sa forme sous **En 3D** dans ses paramètres :

- **Épaisseur du mur** (8", 0.2 m) : le mur devient un solide, centré sur la ligne tracée, avec des angles à onglet.
- **Hauteur de base** : le mur commence à cette hauteur au-dessus du sol (un soffite, une rangée de meubles hauts). Les éléments de surface l'ont aussi : un plafond à 9'-0".
- **Linteau d'ouverture** : un segment déduit (une porte, [Déduire une partie d'un tronçon](topic:measure-linear#deduct-a-part-of-a-run)) garde le mur au-dessus de cette hauteur, de sorte qu'une porte apparaît comme une porte. Sans lui, un segment déduit laisse un vide jusqu'en haut.

Ces réglages ne façonnent que la vue 3D : les quantités (longueur, surface de mur, coûts) restent inchangées.

## Empiler les étages

1. Ouvrez les PDF de chaque étage.
2. Dans la vue 3D, choisissez {{ui:Niveaux…}} et saisissez l'altitude de chaque étage, par exemple `0` pour le rez-de-chaussée et `12'` pour le suivant. Un champ vide exclut une feuille.
3. Choisissez {{ui:Empiler}}. Chaque feuille avec un niveau affiche son métré à sa hauteur ; la feuille à l'écran repose sur son propre étage, les autres sont en contour. La note indique combien d'étages sont empilés.

Les feuilles s'alignent selon leur position sur la page, ce qui fonctionne pour des plans d'étage tracés de la même façon (même format et même position). Une feuille avec un niveau mais sans échelle est exclue, et la note le signale. Choisissez à nouveau {{ui:Empiler}} pour une seule feuille à la fois. Les niveaux sont enregistrés avec le métré.

## Enregistrer la vue 3D en image

Choisissez {{ui:PNG}} sur la barre 3D pour une image de la vue telle qu'elle est à l'écran (`… 3D.png`) ; {{key:Shift}} + clic sur {{ui:PNG}} la rend deux fois plus grande (`… 3D@2x.png`), pour l'impression.

## Enregistrer la vue 3D en modèle

Choisissez {{ui:GLB}} sur la barre 3D. Vous obtenez un fichier `.glb` (glTF, binaire) de ce que la vue montre — l'étage à l'écran, ou tous les étages empilés — que d'autres logiciels 3D savent ouvrir : un objet par repère, nommé d'après son élément, dans la couleur de l'élément, en mètres, avec Y vers le haut. La feuille elle-même et les contours n'y figurent pas.

## Sélectionner un repère depuis la 3D

Cliquez sur un mur, une dalle, une plaque ou un poteau. Son repère devient le repère sélectionné, exactement comme si vous aviez cliqué dessus sur la feuille : il s'affiche sous **Repère sélectionné**, son élément devient l'élément courant, et la barre d'état donne sa longueur et sa hauteur, ou sa surface, sa profondeur et ses cubic yards. {{key:Shift}} + clic ajoute des repères à la sélection ou les en retire. {{key:Delete}} supprime les repères sélectionnés et {{key:Mod+Z}} les rétablit ; {{key:Esc}} ne sélectionne rien. De retour sur la feuille, les mêmes repères restent sélectionnés.

:::tip
Le dessin suit le thème : en Objet, la feuille posée au sol devient sombre comme la vue à plat.
:::
