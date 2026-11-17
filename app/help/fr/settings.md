---
title: Paramètres de TakeoffCraft
summary: Afficher les pouces jusqu'à 1/16, 1/8 ou 1/4, commencer les nouveaux postes avec un pourcentage de chute, choisir où démarre le curseur du comptage auto, accrocher aux lignes du dessin ou à 45° sans maintenir Maj, régler la largeur de porte que ferme le remplissage de pièce, et choisir l'indicateur de coin de la vue 3D.
keywords: paramètres, préférences, options, précision, fractions, pouces, arrondi, chute, chute par défaut, comptage auto, seuil, correspondance, curseur, accrochage, 45, angle, maj, ViewCube, icône des axes, indicateur de coin, 3D
from: bca3f0ed
---

Ouvrez {{ui:Paramètres}} avec l'engrenage de la barre d'application ou avec {{key:Mod+,}}. Le premier onglet, {{ui:TakeoffCraft}}, contient les paramètres propres à cette application ; {{ui:Général}} contient ceux que partagent toutes les applications CadCraft (thème, panneaux, barre d'outils). Les paramètres de TakeoffCraft n'existent que dans l'application : vous les modifiez ici, et ce navigateur s'en souvient. {{ui:Réinitialiser les paramètres de TakeoffCraft}} les remet à leur valeur de départ.

## Pieds et pouces

Affichez les longueurs au **1/16"** le plus proche (valeur de départ), **1/8"** ou **1/4"**. Cela change l'affichage des longueurs sur la feuille, dans les panneaux, dans les quantités et dans la barre d'état.

Seul l'affichage est arrondi. Les quantités, coûts et exports sont calculés à partir des longueurs exactes, et les exports affichent toujours le 1/16".

## Chute de départ

Le pourcentage de chute dont part chaque nouveau poste : 0% (valeur de départ), 2%, 3%, 5%, 7.5%, 10%, 15% ou 20%. Vous pouvez toujours saisir une autre chute pour chaque poste, dans l'éditeur de poste ou directement dans le tableau des quantités. Les postes existants gardent leur propre chute.

## Comptage auto : où commence le curseur de correspondance

Position du curseur {{ui:Correspondance}} à la fin d'une recherche [Comptage auto](topic:auto-count), de 50% à 95% ; 75% est la valeur de départ. Plus bas, il propose davantage de faux semblables à rejeter ; plus haut, il en propose moins. Vous pouvez toujours déplacer le curseur pendant chaque vérification.

## Accrocher aux lignes propres du dessin

Activé au départ. Lorsque vous mesurez ou étalonnez, un point proche d'une ligne du PDF saute à son extrémité, à son milieu, à une intersection ou au point le plus proche sur cette ligne. {{key:F3}} et {{ui:Accrochage}} dans la barre d'état l'activent et le désactivent aussi. Pour en savoir plus : [Accrocher aux lignes du dessin](topic:snap-to-the-drawing).

## Remplissage de pièce : largeur d'ouverture fermée

{{ui:Le remplissage de pièce ferme les ouvertures jusqu'à}} règle la largeur d'une ouverture de porte ou d'un passage que l'outil {{ui:Pièce}} considère comme fermé : de 3'-0" à 8'-0", 4'-0" au départ. Plus large que votre plus grande porte, la pièce s'étend jusqu'à la suivante ; plus étroit qu'une porte, la pièce reste ouverte. Voir [Remplir une pièce d'un clic](topic:measure-areas#fill-a-room-with-one-click).

## Accrocher à 45° sans maintenir Maj

Désactivé au départ. Lorsqu'il est activé, les tronçons, contours, découpes et coins déplacés vont à 0°, 45°, 90° ou 135° à partir du dernier point, sans maintenir {{key:Shift}} ; maintenez {{key:Shift}} pour cliquer à n'importe quel angle. La barre d'état affiche alors « Accroche à 45° ; Maj libère l'angle ». Le point que vous cliquez sur la courbe d'un arc et les cercles ne sont jamais accrochés ; l'extrémité d'un arc l'est.

## Taille des marqueurs de comptage

Taille des points de comptage : {{ui:Très petite}}, {{ui:Petite}}, {{ui:Moyenne}} (valeur de départ : la taille qu'ont toujours eue les points) ou {{ui:Grande}}. La taille reste la même à l'écran à tous les zooms, et le PDF annoté dessine chaque point à la même taille sur le papier, quelle que soit la taille de la feuille ; ainsi le PDF à 100% apparaît comme à l'écran. Pour en savoir plus : [Compter à la main](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indicateur de coin

Uniquement pour la [vue de contrôle 3D](topic:check-in-3d) : {{ui:ViewCube}} (valeur de départ : un cube en haut à droite, à cliquer, faire glisser et tourner), {{ui:Icône des axes}} (un petit repère X, Y, Z en bas à droite) ou {{ui:Aucun}}. Le changement est immédiat et il est conservé dans ce navigateur. La feuille à plat n'en affiche jamais.

## Outil de chemin : plus grand écart à joindre

{{ui:Outil de chemin : plus grand écart à joindre}} est la distance maximale entre deux extrémités de lignes pour qu'elles comptent comme un seul chemin, en points PDF (de 0.05 à 60 ; 1.5 au départ). Les lignes d'un dessin s'arrêtent souvent juste avant de se toucher. Une valeur plus grande en joint davantage ; une valeur plus petite garde les lignes séparées. {{key:[}} et {{key:]}} la modifient pendant votre sélection, et ce champ suit. Voir [Choisir les lignes](topic:pick-the-lines).
