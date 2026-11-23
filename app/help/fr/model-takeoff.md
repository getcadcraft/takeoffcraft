---
title: Prendre les quantités sur un modèle du bâtiment
summary: Ouvrir le modèle IFC de l'architecte, le voir en 3D, choisir murs, planchers, portes et le reste par type, matériau, calque ou dimension, et reporter leurs comptages, longueurs, aires et volumes dans le métré. Une copie plus récente du modèle met à jour les mêmes quantités.
keywords: modèle, métré du modèle, vue 3D, cliquer sur un élément, trouver la ligne, matériau, calque, couches de mur, cloison sèche, isolant, dimensions des portes, dimensions des fenêtres, tableau des ouvertures, csv, 3d, bim, ifc, rvt, modèle du bâtiment, quantités, murs, planchers, portes, fenêtres, poteaux, pièces, par type, par niveau, mise à jour, modèle plus récent, avant-projet détaillé
from: 8c4c12c9
---

Vous n'avez pas à attendre le prochain jeu de plans. Lorsque l'architecte envoie le modèle du bâtiment, ouvrez-le ici et prenez les quantités directement dedans. Le modèle est lu sur votre ordinateur ; rien n'est envoyé nulle part.

## Étapes

1. Choisissez {{ui:Modèle}} dans la barre d'outils et sélectionnez le fichier `.ifc` du modèle, ou ouvrez-le avec {{ui:Ouvrir des PDF}} comme n'importe quel autre fichier.
2. {{ui:Métré du modèle}} s'ouvre avec une ligne par catégorie et par type : murs par type de mur, planchers par type de plancher, portes par type de porte, et ainsi de suite. Chaque ligne affiche son comptage et l'unité dans laquelle cette catégorie est mesurée.
3. Réglez {{ui:Regrouper par}} sur {{ui:Catégorie}} pour un total rapide, ou sur {{ui:Catégorie, type et niveau}} pour répartir chaque type par étage.
4. Décochez les lignes dont vous ne voulez pas. {{ui:Rechercher}} réduit la liste. Décocher une ligne masque aussi ses éléments sur l'image 3D.
5. Donnez au modèle un {{ui:Nom du modèle}} que vous garderez pour toute l'affaire, par exemple le nom du projet.
6. Choisissez {{ui:Ajouter au métré}}. Chaque quantité devient une quantité saisie dans la liste des postes. Nommez-la, chiffrez-la et associez-lui des ouvrages comme pour tout autre poste.

## Voir le modèle en 3D

{{ui:Afficher le modèle en 3D}} dessine le modèle au-dessus du tableau, avec une couleur pour chaque ligne (la pastille de couleur à côté du nom de la ligne). Faites glisser pour le tourner, maintenez {{key:Shift}} et faites glisser pour le déplacer, utilisez la molette pour zoomer, et choisissez {{ui:Ajuster}} ou {{ui:Réinitialiser}} pour revenir.

- **Cliquez sur un élément** dans l'image et sa ligne est sélectionnée dans le tableau, avec tous les éléments de cette ligne éclairés et le reste pâli. Cliquez de nouveau sur le même élément et, s'il figure dans plusieurs lignes (un mur dans ses couches), la ligne suivante est sélectionnée.
- **Cliquez sur une ligne** du tableau pour éclairer ses éléments. Recliquez, ou cliquez sur un espace vide de l'image, pour annuler.
- Les pièces ne sont pas dessinées, car le volume d'une pièce masquerait le bâtiment.
- Un modèle très volumineux ne conserve qu'une boîte pour certains éléments afin de tenir en mémoire ; le panneau indique combien. Les nombres ne changent pas.

Si cet ordinateur ne peut pas afficher la 3D, le tableau fonctionne comme avant.

## Regrouper par matériau, couche ou dimension

{{ui:Regrouper par}} propose trois autres choix :

- {{ui:Catégorie et matériau}} : un mur, un plancher ou une toiture composé de couches donne à chaque matériau de couche sa propre ligne, afin que la cloison sèche, les montants et l'isolant puissent être chiffrés séparément. Un élément du bâtiment d'un seul matériau reçoit la ligne de ce matériau, et un élément sans matériau figure dans une ligne intitulée « Sans matériau nommé ».
- {{ui:Catégorie et calque}} : la même chose, avec l'épaisseur de la couche dans la ligne (« Isolant, 100 mm »).
- {{ui:Catégorie, type et dimension de porte ou de fenêtre}} : les portes et fenêtres sont réparties selon leur largeur et leur hauteur (par exemple 3'-0" × 6'-8" ou 914 × 2,032 mm).

Pour une couche, l'aire est celle de la face propre du mur (ou l'aire en plan ou la surface du plancher ou de la toiture), et le volume est cette aire multipliée par l'épaisseur de la couche. La note de la ligne indique combien de nombres proviennent d'une couche. Les couches d'un même mur totalisent le volume que le modèle indique pour lui.

## Enregistrer les lignes ou les ouvertures en CSV

{{ui:Enregistrer les lignes en CSV}} enregistre les lignes cochées, avec les unités dans chaque en-tête, pour un tableur. {{ui:Enregistrer le tableau des ouvertures en CSV}} (uniquement si le modèle contient des portes ou des fenêtres) enregistre chaque porte et chaque fenêtre par type, niveau et dimension, avec son comptage.

## Ce qui est mesuré

| Catégorie | Quantités |
|---|---|
| Murs | comptage, longueur, aire de mur (une face, ouvertures déduites), volume |
| Planchers, dalles, plafonds et autres revêtements | comptage, aire en plan, volume |
| Toitures | comptage, aire en plan, surface de toiture, volume |
| Fondations | comptage, aire en plan, volume |
| Poteaux, poutres et barres | comptage, longueur le long de la barre, volume |
| Garde-corps, canalisations, gaines et chemins de câbles | comptage, longueur |
| Escaliers | comptage, volume |
| Pièces | comptage, surface au sol, volume |
| Portes, fenêtres et tout le reste | comptage |

Lorsque l'auteur du modèle a indiqué une quantité dans le fichier, ce nombre est utilisé. Sinon, le nombre est mesuré à partir de la forme de l'élément. Chaque quantité conserve une note qui indique laquelle, et combien d'éléments ont donné un nombre.

:::note
La longueur d'un mur mesurée à partir de sa forme court d'un bout à l'autre, de sorte que deux murs qui se chevauchent à un angle comptent tous deux cet angle. Un volume nécessite une forme fermée : un élément dont la forme n'est pas fermée est compté mais ne donne pas de volume. Un élément de mur courbe ou à angles est mesuré comme la moitié de toutes ses faces verticales, et sa note le précise.
:::

## Lorsqu'un modèle plus récent arrive

Ouvrez le fichier plus récent et saisissez le même {{ui:Nom du modèle}}. Avant d'ajouter quoi que ce soit, le panneau indique combien de quantités sont nouvelles, combien ont changé et de quelle valeur à quelle valeur, ainsi que les quantités de la copie précédente qui ne figurent plus dans le modèle. Choisissez {{ui:Ajouter au métré}} : les quantités modifiées prennent leurs nouveaux nombres, et vos noms, prix unitaires, chutes et ouvrages restent. Les quantités absentes du modèle conservent leurs anciens nombres ; supprimez-les vous-même si la conception les a abandonnées.

Les noms de type et de niveau servent à reconnaître une quantité. Si l'architecte renomme un type de mur, celui-ci arrive comme une nouvelle quantité et l'ancienne est indiquée comme disparue.

## Fichiers lus

Fichiers IFC (IFC2x3, IFC4 et IFC4.3). Un fichier IFC contenant des routes, des voies ferrées ou des ponts fournit toujours directement ses quantités d'infrastructure, comme auparavant.

TakeoffCraft ne lit pas les fichiers `.rvt` dans cette version. Si l'architecte travaille dans Revit, demandez un export IFC du modèle (Fichier, Exporter, IFC) et ouvrez celui-ci.

Un modèle peut apporter jusqu'à 500 quantités à la fois. S'il y en a davantage, décochez des lignes ou regroupez par catégorie.
