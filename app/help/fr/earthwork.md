---
title: Terrassement et cotes ponctuelles
summary: Placez des cotes ponctuelles sur un plan de site, transmettez-les à CivilCraft pour la surface et le déblai et remblai, et relevez ici des quantités simples de terrassement.
keywords: terrassement, excavation, déblai, remblai, déblai et remblai, nivellement, cote ponctuelle, altitudes, topo, surface, triangulation, civilcraft, points, pnezd, tranchée
from: a898e508
---

TakeoffCraft mesure ce qui est dessiné sur une feuille. Le terrassement a besoin d'une surface de terrain : il est donc partagé avec CivilCraft, qui construit des surfaces à partir de points, les nivelle et calcule le déblai, le remblai et le transport.

## Excavation simple ici

Pour une emprise creusée à une seule profondeur, un poste de surface avec une **profondeur** suffit : le volume est surface × profondeur. Le [lot](topic:trade-packs) de l'entreprise générale comporte un poste de décaissement en masse (volume en place, volume foisonné et rotations de camions) et un poste de tranchée de réseau (excavation, lit de pose et remblai, au linéaire et à la profondeur).

## Cotes ponctuelles pour CivilCraft

1. Réglez l'échelle de la feuille du site.
2. Créez un poste **Comptage**, par exemple « Terrain naturel », puis cliquez sur chaque cote ponctuelle de la feuille.
3. Sélectionnez un repère et saisissez son {{ui:Altitude}} dans le panneau du repère sélectionné : `102.5`, `102'-6"` ou `31.24 m`. Les altitudes négatives et nulles sont acceptées.
4. Ouvrez le menu {{ui:Exporter}} et choisissez {{ui:Cotes ponctuelles}}. Vous obtenez un fichier de points (`.csv`) avec les colonnes Point, Northing, Easting, Elevation et Description, une ligne par point repéré de la feuille ouverte.
5. Ouvrez ce fichier dans CivilCraft (voir [Importer des points](app:civilcraft/import-points)). Il construit la surface à partir des points ([Créer une surface](app:civilcraft/build-surface)) ; à partir de là, il compare les surfaces et donne le déblai et le remblai ([Volumes](app:civilcraft/volumes)).

Northing et Easting sont les coordonnées propres à la feuille, en pieds, mesurées depuis le coin de la page à son échelle : les distances et les volumes entre les points sont exacts, mais ce ne sont pas les coordonnées topographiques de votre site. Replacez-les dans les coordonnées du site dans CivilCraft lorsque vous en avez besoin.

:::note
Les points de feuilles différentes ne partagent pas de coordonnées : l'export ne prend donc que la feuille ouverte. Les altitudes sont enregistrées avec le métré et sont reprises par copier-coller.
:::

## Déblai et remblai depuis CivilCraft

Le terrassement de CivilCraft revient sous forme de deux postes que vous pouvez chiffrer :

1. Dans CivilCraft, nivelez vos plateformes et vos corridors, puis choisissez {{ui:Envoyer vers TakeoffCraft}} sous **Terrassement** ([Volumes de terrassement](app:civilcraft/volumes)). Il enregistre un fichier de quantités (`.quantities.json`).
2. Dans TakeoffCraft, ouvrez-le avec {{ui:Ouvrir un métré}}, ou déposez-le sur l'application. Votre métré reste ouvert : le fichier ajoute **Terrassement : déblai** et **Terrassement : remblai** comme [quantités typées](topic:create-items#typed-quantities-no-drawing), en verges cubes (CY) pour un projet en pieds, ou en mètres cubes (m³) pour un projet en mètres. C'est une seule étape : {{key:Mod+Z}} l'annule.
3. Renommez-les, puis réglez la chute, les prix et les ouvrages à votre convenance.

Lorsque le projet évolue, renvoyez depuis CivilCraft et ouvrez le nouveau fichier : les mêmes deux postes reçoivent les nouvelles quantités. Leurs noms, prix, chutes et ouvrages restent tels que vous les avez réglés. Si l'unité du projet a changé, la barre d'état l'indique : vérifiez les prix. Un fichier provenant d'un autre projet CivilCraft ajoute ses propres deux postes.

Les quantités sont des volumes en place, tels que CivilCraft les a mesurés (méthode par grille) : sans retrait ni foisonnement. Ajoutez-les en chute, ou avec une formule telle que `Q * 1.25` pour le volume foisonné. L'éditeur de poste indique d'où chacune provient et quand ; la colonne Remarques de l'estimation le mentionne aussi.

:::note
Le fichier de quantités est du JSON brut (`"format": "cadcraft-quantities"`) : un script ou un autre programme peut donc aussi en écrire un : un nom d'application, un projet, et des postes avec une clé, un nom, une unité et une quantité.
:::
