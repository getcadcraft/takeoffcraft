---
title: Mesurer des tronçons linéaires
summary: Relevez murs, tuyauteries, habillages et autres longueurs sous forme de tronçons, avec segments droits, arcs et l'accrochage à 45 degrés avec Maj.
keywords: linéaire, longueur, tronçon, polyligne, murs, lf, pieds linéaires, arc, courbe, 45 degrés, ortho, accrochage, segments, longueur de polyligne, déduire, ouverture, porte, interruption, saisie, saisi, coordonnées, distance, distance directe, polaire
from: c669deff
---

Un poste linéaire mesure une longueur. Chaque tronçon est une suite de points : des segments droits, et des arcs lorsque vous activez le mode arc. Un poste peut comporter autant de tronçons que vous voulez, sur autant de feuilles que vous voulez.

Avant de commencer : la feuille doit avoir une échelle ([Régler l'échelle](topic:set-the-scale)) et vous devez disposer d'un poste linéaire ([Créer des postes](topic:create-items)).

Sur un PDF vectoriel, vos clics s'accrochent aux lignes du dessin lui-même : extrémités, milieux et intersections ([Accrochage aux lignes du dessin](topic:snap-to-the-drawing) ; {{key:F3}} le désactive).

## Tracer un tronçon

1. Cliquez sur le poste linéaire sous {{ui:Éléments (I)}}.
2. Choisissez {{ui:Linéaire}} dans la barre d'outils, ou appuyez sur {{key:L}}.
3. Cliquez sur le début du tronçon.
4. Cliquez sur chaque angle le long de celui-ci.
   La barre d'état affiche « Longueur » (le tronçon jusqu'au pointeur) et « segment » (le segment que vous tracez), en pieds et pouces.
5. Terminez le tronçon : faites un double-clic sur le dernier point, appuyez sur {{key:Enter}}, ou faites un clic droit.
   Le tronçon est tracé dans la couleur du poste et devient le repère sélectionné. La longueur du poste dans la liste {{ui:Éléments (I)}} et dans le tableau {{ui:Quantités}} augmente.

L'outil reste sur {{ui:Linéaire}}, de sorte que vous pouvez commencer le tronçon suivant immédiatement. Appuyez sur {{key:Esc}} pour revenir à {{ui:Sélectionner}}.

Pendant le tracé :

- {{key:Backspace}} (ou {{key:Delete}}) supprime le dernier point.
- {{key:Esc}} abandonne le tronçon non terminé.
- Glisser déplace la feuille (panoramique) et la molette zoome, sans ajouter de points.

:::mac
Sur un pavé tactile Mac, le clic droit est un clic à deux doigts (activez le clic secondaire dans Réglages système, sous Trackpad). TakeoffCraft lit uniquement le bouton secondaire, donc un Control-clic peut être pris pour un simple clic et ajouter un point. Double-clic ou {{key:Enter}} terminent toujours.
:::

:::touch
Sur un écran tactile, appuyez pour placer les points, glissez avec un doigt pour faire un panoramique et pincez avec deux doigts pour zoomer. Terminez par un appui prolongé, un double appui, ou {{ui:Terminer}} dans la barre sous la feuille ({{ui:Arrière}} retire le dernier point). Voir [Dépannage](topic:troubleshooting#touch-screens).
:::

## Lignes droites par pas de 45°

Maintenez {{key:Shift}} pendant que vous placez un point. Le segment depuis le dernier point s'aligne sur la direction la plus proche de 0°, 45°, 90° ou 135°, en conservant la longueur que vous avez glissée. La barre d'état le rappelle : « Maj aligne à 45° ».

En mode arc, cela s'applique à la fin de l'arc : la corde de l'arc suit des pas de 45° depuis son début. Le point que vous cliquez sur la courbe n'est jamais aligné.

## Arcs et murs courbes

1. Pendant le tracé d'un tronçon, placez le point où commence la courbe.
2. Activez le mode arc : choisissez {{ui:Arc}} dans la barre d'outils ou appuyez sur {{key:R}}. Le bouton reste enfoncé.
3. Cliquez sur n'importe quel point de la courbe, quelque part au milieu de celle-ci.
   La barre d'état ajoute « (arc : cliquez là où il se termine) », et l'aperçu s'incurve en passant par votre point.
4. Cliquez à l'endroit où la courbe se termine.
   L'arc est ajouté. Sa longueur est la longueur exacte de l'arc, et non une suite de petites cordes.
5. Cliquez sur un autre point de la courbe suivante, puis sur sa fin, pour continuer à tracer des arcs, ou appuyez de nouveau sur {{key:R}} pour revenir aux segments droits.

{{key:Backspace}} ou {{key:Esc}} abandonnent d'abord le point en attente sur la courbe ; appuyez de nouveau pour supprimer des points comme d'habitude.

## Saisir des longueurs et des coordonnées

Après le premier point, vous pouvez saisir l'emplacement du suivant au lieu de cliquer. Tapez un chiffre, `@` ou `#` : une case {{ui:Type}} s'ouvre dans la barre d'état avec ce que vous avez saisi. Appuyez sur {{key:Enter}} pour placer le point ; la case reste ouverte pour le suivant.

| Saisie | Le point suivant va |
|---|---|
| `12'6"` | à 12'-6" du dernier point, vers le pointeur (indiquez la direction, puis saisissez la longueur) |
| `12'6"<45` | à 12'-6" à 45°, compté dans le sens antihoraire depuis la droite de l'écran (`<90` vers le haut, `<-90` vers le bas) |
| `@6',-4'` | à 6' à droite et 4' vers le bas du dernier point |
| `6',4'` (ou `#6',4'`) | à 6' à droite et 4' vers le haut depuis le premier point de ce tronçon |

Les longueurs se saisissent comme partout dans TakeoffCraft ([Formats de saisie](topic:entry-formats)) : `12'-6 1/2"`, `12.5` (pieds), `30"`, `3.2 m`. « Droite » et « haut » sont tels que vous voyez la feuille, y compris lorsque la page PDF est tournée.

{{key:Enter}} sur une case vide termine le tronçon, comme {{key:Enter}} sur la feuille ; {{key:Esc}} ferme la case et laisse le tronçon en cours. Les points saisis suivent les mêmes règles que les clics : déductions, arcs et fermeture d'une surface fonctionnent tous. La même case fonctionne dans {{ui:Surface}} et {{ui:Découpe}} ; après le centre d'un cercle, elle demande le rayon.

## Déduire une partie d'un tronçon

Un tronçon de mur qui passe une porte ou une vitrine peut être tracé en ligne droite et ne compter que le mur : les segments qui traversent l'ouverture sont des **déductions**. Ils sont tracés en pointillés fins et ne sont pas comptés.

Pendant le tracé :

1. Placez le point où commence l'ouverture.
2. Choisissez {{ui:Déduire}} dans la barre d'outils ou appuyez sur {{key:E}}. Le bouton reste enfoncé et la barre d'état indique que les segments suivants sont des déductions.
3. Cliquez à l'endroit où l'ouverture se termine. Le segment est tracé en pointillés ; « Longueur » dans la barre d'état l'exclut.
4. Appuyez de nouveau sur {{key:E}} et poursuivez le long du mur.

Après le tracé : sélectionnez le tronçon. Sous **Repère sélectionné**, chaque segment a une case {{ui:Déduire}} : cochez-la pour déduire ce segment, décochez-la pour le compter de nouveau. Chaque modification correspond à une seule étape d'annulation.

Un tronçon conserve toujours au moins un segment compté. Le panneau affiche alors **Déductions** (la longueur déduite) et **Tracé** (le tronçon entier) ; **Longueur**, la quantité du poste, la surface de mur et les coûts utilisent la longueur sans les déductions. La vue de contrôle 3D laisse une interruption dans le mur, le PDF annoté trace les déductions en pointillés, et la feuille **Repères** exportée les liste.

Déplacer un coin conserve les déductions. Ajouter ou retirer des points (en retraçant le tronçon) repart sans elles.

## Consulter le détail d'un tronçon

Choisissez {{ui:Sélectionner}} ({{key:V}}) et cliquez sur le tronçon. **Repère sélectionné** à droite affiche :

- le poste auquel il appartient (choisissez un autre poste linéaire dans la liste pour y déplacer le tronçon),
- la feuille,
- la **Longueur** en pieds et pouces et en LF,
- le nombre de **Segments**, et la **Surface de mur** lorsque le poste a une hauteur,
- la longueur de chaque segment, avec « (arc) » après les arcs, et sa case {{ui:Déduire}}.

Sur la feuille, chaque segment du tronçon sélectionné est étiqueté avec sa longueur.

## Corriger un tronçon

- **Déplacer un point** : sélectionnez le tronçon, puis glissez l'une de ses poignées d'angle carrées. Maintenez {{key:Shift}} pour aligner le segment déplacé sur des pas de 45°. Un arc conserve son bombement.
- **Courber un arc** : un tronçon sélectionné affiche une poignée ronde au milieu de chaque arc. Glissez-la : l'arc passe par l'endroit où vous relâchez, il se bombe donc davantage, moins, ou dans l'autre sens. Glissé sur la droite entre ses extrémités, il devient un segment droit. {{key:Mod+Z}} l'annule (« Courber l'arc »).
- **Supprimer un tronçon** : sélectionnez-le et appuyez sur {{key:Delete}}, choisissez {{ui:Supprimer}} dans le menu {{ui:Plus}} de la barre d'outils, ou {{ui:Supprimer le repère}} dans le panneau.
- **Annuler** : {{key:Mod+Z}} ; rétablir avec {{key:Mod+Y}}.

Vous ne pouvez pas encore insérer un point au milieu d'un tronçon. Supprimez le tronçon et retracez-le.

## Surface de mur

Donnez au poste linéaire une {{ui:Hauteur}} (par exemple `9'-0"`). Il affiche alors la **Surface de mur (A)** = longueur × hauteur, en SF (ou m² pour un poste métrique), et la surface de mur est reportée dans la colonne des notes de l'export du tableur. Utilisez-la dans les ouvrages pour les panneaux, la peinture ou l'isolation : voir [Ouvrages et formules](topic:assemblies).
