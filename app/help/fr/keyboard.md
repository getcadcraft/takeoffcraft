---
title: Clavier et souris
summary: Chaque action au clavier, à la souris, au pavé tactile et au tactile dans TakeoffCraft, regroupées, avec les différences selon les plateformes.
keywords: touches, raccourcis, raccourcis clavier, clavier, souris, pavé tactile, tactile, panoramique, zoom, molette, clic droit, double-clic, espace, maj, copier, coller, couper, dupliquer, tout sélectionner
from: 6f2c441d
---

Les touches de lettres fonctionnent lorsque le pointeur se trouve n'importe où sur la page et que vous ne saisissez pas de texte dans un champ. Lorsqu'une boîte de dialogue est ouverte, ses propres touches s'appliquent. Les lettres fonctionnent avec ou sans {{key:Shift}}.

## Outils

| Touche | Outil |
|---|---|
| {{key:V}} | {{ui:Sélectionner}} |
| {{key:L}} | {{ui:Linéaire}} |
| {{key:A}} | {{ui:Surface}} |
| {{key:O}} | {{ui:Cercle}} |
| {{key:B}} | {{ui:Pièce}} (remplit une pièce en un clic) |
| {{key:R}} | {{ui:Arc}} activé ou désactivé (en Linéaire, Surface et Découpe) |
| {{key:E}} | {{ui:Déduire}} activé ou désactivé : les segments suivants d'un tronçon sont tracés mais non comptés |
| Un chiffre, `@` ou `#` pendant le tracé | Ouvre la case {{ui:Type}} : saisissez une longueur ou des coordonnées, {{key:Enter}} place le point ([Mesurer des tronçons linéaires](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Découpe}} (sélectionnez d'abord une surface) |
| {{key:C}} | {{ui:Compter}} |
| {{key:S}} | {{ui:Comptage auto}} |
| {{key:K}} | {{ui:Étalonner}} |
| {{key:D}} | {{ui:Vérifier}} l'échelle |

## Pendant le tracé

| Touche ou action | Ce qu'elle fait |
|---|---|
| Clic | Place un point (un point, avec Compter). |
| {{key:P}} | Chemin : choisit tout le chemin connecté d'une ligne du PDF, ou le contour autour d'un clic ([Choisir les lignes du PDF](topic:pick-the-lines)). |
| {{key:F3}} | Accrochage aux lignes du dessin activé ou désactivé ([Accrochage aux lignes du dessin](topic:snap-to-the-drawing)). |
| {{key:Shift}} maintenue pendant le clic | Aligne le segment à 0°, 45°, 90° ou 135° par rapport au dernier point. Non applicable aux points d'arc ni aux cercles. |
| Double-clic | Termine un tronçon, ou ferme une surface ou une découpe. |
| {{key:Enter}} | Termine un tronçon, ou ferme une surface ou une découpe. |
| Clic droit (sans bouger) | Termine un tronçon, ou ferme une surface ou une découpe. |
| Clic sur le premier point | Ferme une surface ou une découpe (à partir du troisième point). |
| {{key:Backspace}} ou {{key:Delete}} | Supprime le dernier point (d'abord le point d'arc en attente). |
| {{key:Esc}} | Abandonne le point d'arc en attente ; puis annule le repère non terminé ; puis revient à {{ui:Sélectionner}}. |

## Sélection et modification

| Touche ou action | Ce qu'elle fait |
|---|---|
| Clic sur un repère (outil Sélectionner) | Le sélectionne et rend son poste actif. |
| {{key:Shift}} + clic sur un repère | L'ajoute à la sélection, ou l'en retire. |
| {{key:Mod+A}} | Sélectionne tous les repères de la feuille ouverte. |
| Glisser une poignée d'angle | Déplace ce point ({{key:Shift}} aligne à 45°). Fonctionne lorsqu'un seul repère est sélectionné. |
| {{key:Delete}} ou {{key:Backspace}} | Supprime les repères sélectionnés (lorsque vous ne tracez pas). |
| {{key:Esc}} | Ne rien sélectionner : efface la sélection et la ligne de contrôle. |
| {{key:Mod+Z}} | Annuler. |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Rétablir. |

## Copier et coller

| Touche | Ce qu'elle fait |
|---|---|
| {{key:Mod+C}} | Copie les repères sélectionnés, avec leurs postes. |
| {{key:Mod+X}} | Couper : copie les repères sélectionnés, puis les supprime. |
| {{key:Mod+V}} | Coller : la copie suit le pointeur ; cliquez à l'endroit voulu. |
| {{key:Mod+Shift+V}} | Coller à la même position : au même endroit sur la feuille ouverte. |
| {{key:Mod+D}} | Dupliquer les repères sélectionnés : la copie suit le pointeur ; cliquez à l'endroit voulu. |
| {{key:Esc}} | Ne rien poser : annule un collage ou une duplication attaché au pointeur. |

Les lettres seules choisissent toujours les outils ({{key:C}} est {{ui:Compter}}, {{key:D}} est {{ui:Vérifier}}, {{key:X}} est {{ui:Découpe}}, {{key:V}} est {{ui:Sélectionner}}, {{key:A}} est {{ui:Surface}}) ; seul {{key:Mod}} combiné avec elles copie et colle. Dans un champ de texte, ces touches copient et collent le texte comme d'habitude. Voir [Copier, coller et dupliquer des repères](topic:copy-paste).

:::warning
{{key:Backspace}} supprime le repère sélectionné lorsque vous ne tracez pas. Si cela arrive par erreur, {{key:Mod+Z}} le restaure.
:::

## Fichiers

| Touche | Ce qu'elle fait |
|---|---|
| {{key:Mod+O}} | {{ui:Ouvrir des PDF}} |
| {{key:Mod+S}} | {{ui:Enregistrer le métré}} |

Ces deux touches fonctionnent même pendant la saisie dans un champ.

## Vue et feuilles

| Touche ou action | Ce qu'elle fait |
|---|---|
| Molette de la souris | Zoom avant et arrière au niveau du pointeur. |
| Glisser (bouton gauche, central ou droit) | Panoramique. Dans {{ui:Comptage auto}}, un glissement avec le bouton gauche trace la zone de recherche à la place. |
| {{key:Space}} maintenue + glisser | Panoramique, dans tous les outils. |
| {{key:F}} | {{ui:Page entière}} |
| {{key:W}} | {{ui:Largeur}} |
| {{key:Plus}} ou {{key:=}} | Zoom avant au centre de la vue. |
| {{key:Minus}} | Zoom arrière au centre de la vue. |
| {{key:PageDown}} / {{key:PageUp}} | Feuille suivante ou précédente dans la liste des feuilles. |
| {{key:Ctrl+Shift+F}} | Fait défiler les modes plein écran (Control sur toutes les plateformes, y compris sur Mac). |
| {{key:F1}} | Ouvre ou ferme cette aide, dans un panneau latéral. |
| {{key:3}} | La vue de contrôle 3D de la feuille, activée ou désactivée. |

## Vue 3D

| Touche ou action | Ce qu'elle fait |
|---|---|
| Glisser, ou glisser avec le bouton central | Orbite. |
| {{key:Shift}} + glisser, ou glisser avec le bouton droit | Panoramique. |
| Molette de la souris | Zoom au niveau du pointeur. Sur un pavé tactile, un balayage à deux doigts fait tourner la vue en orbite et un pincement zoome. |
| Clic | Sélectionne le repère sous le pointeur ({{key:Shift}} + clic en ajoute ou en retire). |
| {{key:F}} ou {{key:W}} | Zoom sur l'étendue. |
| {{key:3}} | Retour à la feuille à plat. |

Voir [Vérifier le métré en 3D](topic:check-in-3d).

## Comptage auto

| Touche ou action | Ce qu'elle fait |
|---|---|
| Glisser une zone | Encadre le symbole à rechercher (lance la recherche). |
| Clic sur une case de correspondance | La rejette, ou la rétablit. |
| {{key:Esc}} | Annule une recherche en cours, ou abandonne la révision. |

## Aide

| Touche | Ce qu'elle fait |
|---|---|
| {{key:F1}} | Ouvre ou ferme le panneau d'aide (également le bouton {{ui:Aide}} de la barre d'application). Il fonctionne dans tous les outils, même pendant la saisie dans un champ. |
| {{key:Esc}} | Ferme le panneau d'aide. Dans sa zone de recherche, le premier {{key:Esc}} efface la recherche. Lorsque le panneau est ouvert, un {{key:Esc}} pressé après un clic sur la feuille ferme d'abord le panneau ; appuyez de nouveau pour annuler dans TakeoffCraft. |

:::mac
Sur de nombreux claviers Mac, la rangée supérieure commande la luminosité et le son. Appuyez sur fn avec F1, ou activez « Utiliser les touches F1, F2, etc. comme touches de fonction standard » dans Réglages système, sous Clavier.
:::

## Boîtes de dialogue et champs

| Touche | Ce qu'elle fait |
|---|---|
| {{key:Enter}} | Dans un champ : applique la valeur. Dans la boîte d'étalonnage : {{ui:Régler l'échelle}}. |
| {{key:Esc}} | Ferme une boîte de dialogue (comme {{ui:Annuler}}) ; ferme le formulaire {{ui:Nouveau poste}}. |
| {{key:Tab}} | Passe au champ suivant. |

## Notes par plateforme

:::mac
- {{key:Mod}} est la touche Command : {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Le plein écran fait exception : Control+Shift+F.
- Le clic droit est un clic à deux doigts sur le pavé tactile, une fois le clic secondaire activé dans Réglages système, sous Trackpad. TakeoffCraft lit uniquement le bouton secondaire ; un Control-clic peut être pris pour un simple clic et ajouter un point.
- Le défilement à deux doigts sur le pavé tactile zoome la feuille (il ne la fait pas défiler). Pour faire un panoramique, appuyez et glissez, ou maintenez {{key:Space}} et glissez.
- Page Up et Page Down correspondent à fn avec les flèches haut et bas sur les claviers qui n'en ont pas.
- {{key:Backspace}} est la touche marquée delete.
:::

:::windows
- {{key:Mod}} est Ctrl : {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Sur le pavé tactile d'un ordinateur portable, un défilement à deux doigts zoome la feuille. Pour faire un panoramique, appuyez et glissez.
:::

:::linux
- {{key:Mod}} est Ctrl. Certains bureaux utilisent leurs propres raccourcis Ctrl+Alt ou Super ; TakeoffCraft n'en utilise aucun.
- Sur un pavé tactile, un défilement à deux doigts zoome la feuille. Pour faire un panoramique, appuyez et glissez.
:::

:::touch
TakeoffCraft lit le tactile comme un pointeur unique :

- Un appui place un point, sélectionne un repère ou ajoute un point de comptage.
- Glisser avec un doigt fait un panoramique de la feuille (dans {{ui:Comptage auto}}, il trace la zone de recherche).
- Le zoom au pincement n'est pas encore pris en charge. Utilisez {{ui:Page entière}} et {{ui:Largeur}}, ou {{key:Plus}} et {{key:Minus}} sur un clavier.
- Pour fermer une surface, appuyez sur son premier point. Pour terminer un tronçon, appuyez deux fois là où votre navigateur transforme un double appui en double-clic, ou appuyez sur {{key:Enter}} sur un clavier.
- Il n'y a pas d'affichage de longueur en direct tant que vous n'appuyez pas, car il n'y a pas de survol.

Un clavier avec une souris ou un pavé tactile reste aujourd'hui le meilleur moyen de métrer.
:::

## Touches conservées par le navigateur

Les navigateurs gardent certains raccourcis pour eux, et une page ne peut pas les utiliser : fermer l'onglet ({{key:Mod+W}}), nouvel onglet ou nouvelle fenêtre ({{key:Mod+T}}, {{key:Mod+N}}), et zoom du navigateur ({{key:Mod+Plus}}, {{key:Mod+Minus}}). C'est pourquoi TakeoffCraft zoome la feuille avec la molette et les touches seules {{key:Plus}} et {{key:Minus}}. Si vous appuyez par erreur sur {{key:Mod+Plus}}, toute la page grossit ; {{key:Mod+0}} la remet à sa taille. Voir [Touches, souris et pavés tactiles](common:keys).

## Où se trouve la commande Déplacer

Il n'existe pas de commande Déplacer : sélectionnez un point de comptage et glissez-le, ou sélectionnez une surface ou une ligne et glissez ses poignées d'angle.
