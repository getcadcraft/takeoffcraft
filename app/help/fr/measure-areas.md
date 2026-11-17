---
title: Mesurer des surfaces avec découpes
summary: Contournez sols, plafonds et dalles, découpez-y des trous, ajoutez des bords courbes, des cercles et des découpes rondes, puis lisez la surface et le périmètre.
keywords: remplissage de pièce, remplissage, pot de peinture, cliquer dans une pièce, surface automatique, déduction, déduire, poteau, gaine, déduire de plusieurs postes, surface, polygone, contour, pieds carrés, sf, découpe, trou, déduire, cercle, rond, arc, périmètre, sol, plafond, dalle
from: 34648db7
---

Un poste de surface mesure une aire fermée. Chaque contour peut comporter des trous découpés (une gaine, un poteau, un bac à plantes), et ses bords peuvent être droits ou courbes.

Avant de commencer : la feuille doit avoir une échelle ([Régler l'échelle](topic:set-the-scale)) et vous devez disposer d'un poste de surface ([Créer des postes](topic:create-items)).

## Contourner une surface

1. Cliquez sur le poste de surface sous {{ui:Éléments (I)}}.
2. Choisissez {{ui:Surface}} dans la barre d'outils, ou appuyez sur {{key:A}}.
3. Cliquez sur chaque coin de la pièce ou de la dalle, dans l'ordre. Maintenez {{key:Shift}} pour les bords à 0°, 45° et 90°.
   À partir du troisième point, le contour se remplit et la barre d'état affiche « Surface » et « périmètre ». Un petit anneau apparaît autour du premier point.
4. Fermez le contour : cliquez sur le premier point (à l'intérieur de son anneau), appuyez sur {{key:Enter}}, faites un double-clic ou un clic droit.
   La surface est remplie légèrement dans la couleur du poste, étiquetée en pieds carrés, et devient le repère sélectionné.

{{key:Backspace}} supprime le dernier coin ; {{key:Esc}} abandonne le contour.

Un contour qui se croise lui-même est refusé : « The outline crosses itself, so its area would be wrong. Draw it again without crossing. » Dessinez une forme en huit sous forme de deux surfaces.

## Bords courbes

Pendant le contour, activez le mode arc ({{ui:Arc}} ou {{key:R}}). Après un coin, cliquez sur un point le long de la courbe, puis à l'endroit où la courbe se termine. Pour fermer le contour avec une courbe, faites ce dernier clic sur le premier point. La surface et le périmètre utilisent la courbe exacte. Appuyez de nouveau sur {{key:R}} pour revenir aux bords droits. Pour modifier une courbe ensuite, sélectionnez la surface et glissez la poignée ronde au milieu de l'arc. Voir [Mesurer des tronçons linéaires](topic:measure-linear#arcs-and-curved-walls).

## Un cercle

1. Avec un poste de surface, choisissez {{ui:Cercle}} ou appuyez sur {{key:O}}.
2. Cliquez sur le centre.
3. Cliquez sur n'importe quel point du bord.
   Pendant le déplacement, la barre d'état affiche le rayon et la surface. Le cercle est ajouté comme repère de surface avec une surface et un périmètre exacts.

## Remplir une pièce en un clic

Lorsque les pièces sont dessinées sous forme de murs fermés, {{ui:Pièce}} ({{key:B}}) prélève un sol en un clic :

1. Choisissez un poste de surface (un revêtement de sol, par exemple) et donnez son échelle à la feuille.
2. Choisissez {{ui:Pièce}} dans le groupe {{ui:Métré}}, ou appuyez sur {{key:B}}.
3. Cliquez à l'intérieur d'une pièce, sur le sol libre (pas sur une ligne ni sur une étiquette).

TakeoffCraft lit les lignes de la feuille, trouve l'espace autour du clic et le contourne le long des faces intérieures des murs, sous forme de surface du poste courant. Les ouvertures de porte jusqu'à **4'-0"** sont considérées comme fermées, de sorte que le contour traverse la porte en ligne droite ; **Paramètres › TakeoffCraft › Le remplissage de pièce ferme les ouvertures jusqu'à** modifie cette largeur (de 3'-0" à 8'-0"). Les noms de pièces, le mobilier et les équipements à l'intérieur de la pièce ne créent pas de trous.

Il refuse, en indiquant la raison, lorsque :

- le clic se trouve sur une ligne (« That is on a line ») ;
- l'espace n'est pas fermé : une ouverture plus large que le réglage laisse le remplissage sortir jusqu'au bord de la feuille. Augmentez le réglage, ou contournez cette pièce à la main avec {{ui:Surface}} ;
- l'espace est minuscule (un symbole, pas une pièce).

Lorsqu'une porte est plus large que le réglage, le remplissage déborde dans la pièce suivante et contourne les deux ensemble : annulez ({{key:Mod+Z}}), augmentez le réglage, puis cliquez de nouveau. Vérifiez le contour comme pour toute surface : glissez ses coins pour le corriger. Une feuille numérisée fonctionne de la même manière, mais ses lignes doivent être assez foncées ; des traits gris clair peuvent ne pas arrêter le remplissage.

## Découper un trou dans une surface

1. Choisissez {{ui:Sélectionner}} ({{key:V}}) et cliquez sur la surface. Elle affiche des poignées carrées à ses coins.
2. Choisissez {{ui:Découpe}} dans la barre d'outils (ou appuyez sur {{key:X}}), ou {{ui:Ajouter une découpe}} sous **Repère sélectionné**.
3. Cliquez sur les coins du trou, à l'intérieur de la surface. Le mode arc fonctionne aussi ici.
4. Fermez-le comme une surface : cliquez sur son premier point, appuyez sur {{key:Enter}}, faites un double-clic ou un clic droit.
   Le trou reste vide, et la barre d'état indique « Découpe ajoutée. Dessinez-en une autre ou appuyez sur Échap. »
5. Dessinez d'autres trous dans la même surface, ou appuyez sur {{key:Esc}}.

Pour un trou rond, choisissez {{ui:Ajouter une découpe ronde}} sous **Repère sélectionné**, cliquez sur son centre, puis sur un point de son bord.

Une découpe doit se trouver entièrement à l'intérieur de la surface et ne doit pas chevaucher une autre découpe. Sinon, TakeoffCraft la refuse : « A cut-out has to sit fully inside the area. » ou « Cut-outs cannot overlap each other. »

Pour retirer la dernière découpe, choisissez {{ui:Retirer la dernière découpe}}.

## Déductions : poteaux, gaines et ouvertures retirés de plusieurs postes

Une découpe appartient à un seul repère de surface. Une **déduction** est dessinée une fois et se retire de toutes les surfaces qu'elle recouvre, pour les postes que vous choisissez : dessinez les poteaux une seule fois, et ils sont retirés du revêtement de sol, du plafond et de la dalle en même temps.

1. Créez un poste de surface pour eux, par exemple « Poteaux ».
2. Dans ses paramètres, cochez **Déduction : ses repères retirent leur surface des autres postes**. Une liste de vos autres postes de surface apparaît, tous cochés : décochez ceux que les déductions ne doivent pas toucher (la peinture des murs, par exemple).
3. Métrez les poteaux avec {{ui:Surface}} ou {{ui:Cercle}}, comme d'habitude. Chacun est tracé en pointillés.

Chaque repère de surface d'un poste coché situé sur la même feuille perd la partie couverte par une déduction : la déduction entière lorsqu'elle se trouve à l'intérieur, seulement la partie qui chevauche lorsqu'elle traverse le bord, et rien à l'intérieur d'une découpe. Le panneau de la surface sélectionnée affiche **Déductions** et la surface restante. La quantité du poste, ses formules d'ouvrage, les coûts, la vue de contrôle 3D et l'export utilisent la surface restante ; les notes de l'estimation indiquent la surface retirée par les déductions. Le poste de déduction lui-même compte sa propre surface (laissez ses coûts à zéro si vous ne le chiffrez pas).

Une déduction doit être **convexe** : un rectangle, un cercle ou tout contour sans angle rentrant. TakeoffCraft refuse d'en dessiner une qui ne l'est pas ; dessinez une gaine en L sous forme de deux déductions. Les déductions ne peuvent pas comporter de découpes, et deux déductions qui se chevauchent sont comptées toutes les deux.

Le périmètre (`P`) ne change pas : les déductions ne retirent que de la surface.

## Lire la surface

Sélectionnez la surface. **Repère sélectionné** affiche :

| Ligne | Signification |
|---|---|
| Surface | La surface nette : contour moins découpes. C'est ce que compte le poste. |
| Contour | La surface brute à l'intérieur du contour (affichée lorsqu'il y a des découpes). |
| Découpes | Le nombre de trous, et leur surface totale. |
| Périmètre | La longueur du contour extérieur, **plus** les bords de chaque découpe (« avec découpes »). |

Le périmètre inclut volontairement les bords des découpes, par exemple pour les coffrages de rive ou les plinthes qui font aussi le tour d'un trou. Si vous n'avez besoin que du bord extérieur, gardez les trous hors de ce poste ou mesurez le bord extérieur comme un tronçon linéaire.

L'{{ui:Unité}} du poste détermine la façon dont le total est présenté : SF, SY ou m². Le panneau **Repère sélectionné** et la barre d'état affichent toujours les pieds carrés.

## Corriger une surface

- **Déplacer un coin** : sélectionnez la surface et glissez une poignée d'angle (les trous ont aussi des poignées). Si la nouvelle forme se croise elle-même ou repousse un trou à l'extérieur, le coin est remis en place : « The point was put back. »
- **Changer de poste** : choisissez un autre poste de surface dans la liste **Poste** sous **Repère sélectionné**.
- **Supprimer** : {{key:Delete}}, {{ui:Supprimer}} dans le menu {{ui:Plus}} de la barre d'outils, ou {{ui:Supprimer le repère}}.

## Profondeur pour les volumes

Donnez au poste de surface une {{ui:Profondeur}} (par exemple `0'-4"` pour une dalle), puis utilisez `A * H / 27` dans un composant d'ouvrage pour obtenir des yards cubes. Voir [Ouvrages et formules](topic:assemblies).
