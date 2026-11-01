---
title: L'écran de TakeoffCraft
summary: Une visite de la fenêtre par nom affiché à l'écran - la barre d'outils, la liste des feuilles, la feuille, le panneau Éléments, le tableau Quantités et la barre d'état.
keywords: écran, disposition, dispositions, ruban, explorateur de projet, boîte à outils, boîte d'informations, barre d'outils, panneaux, liste des feuilles, panneau des postes, quantités, barre d'état, visite, interface
from: ab1115e0
---

TakeoffCraft occupe la fenêtre du navigateur sous la barre de l'application CadCraft. De haut en bas et de gauche à droite :

| Partie | Où | À quoi elle sert |
|---|---|---|
| Barre de l'application | Tout en haut | Le nom de l'application, la version, {{ui:À propos de TakeoffCraft}}, {{ui:Aide}} ({{key:F1}}), {{ui:Enregistrer pour le hors ligne}}, {{ui:Paramètres}} ({{key:Mod+,}}), le bouton {{ui:Plein écran}} et le commutateur de thème {{ui:Papier}} / {{ui:Objet}}. |
| Barre d'outils | Sous la barre de l'application | Toutes les commandes, en groupes : {{ui:Fichier}}, {{ui:Exporter}}, {{ui:Échelle}}, {{ui:Métré}}, {{ui:Édition}}, {{ui:Vue}}. |
| Feuilles | À gauche | Chaque page de chaque PDF ouvert, avec une miniature, son échelle et son nombre de repères. |
| La feuille | Au milieu | La page ouverte. C'est ici que vous mesurez. |
| Éléments | À droite | Vos postes de métré, les réglages du poste sélectionné et le repère sélectionné. |
| Quantités | En bas | Les quantités et les coûts par poste ou par feuille, et le total du chantier. |
| Barre d'état | Tout en bas | La mesure en direct, les messages, le rappel des 45° et le zoom. |

## La barre d'outils

Survolez un bouton pour voir ce qu'il fait et sa touche.

| Groupe | Boutons |
|---|---|
| {{ui:Fichier}} | {{ui:Nouvelle}} (métré vide), {{ui:Ouvrir des PDF}} ({{key:Mod+O}}), {{ui:Ouvrir un métré}} (un projet `.takeoff.json`), {{ui:Enregistrer le métré}} ({{key:Mod+S}}) |
| {{ui:Exporter}} | Un seul menu : {{ui:XLSX}}, {{ui:CSV}}, {{ui:PDF annoté}} |
| {{ui:Échelle}} | {{ui:Étalonner}} ({{key:K}}), {{ui:Vérifier}} ({{key:D}}) et la liste {{ui:Prédéfini}} |
| {{ui:Métré}} | {{ui:Sélectionner}} ({{key:V}}), {{ui:Linéaire}} ({{key:L}}), {{ui:Surface}} ({{key:A}}), {{ui:Cercle}} ({{key:O}}), {{ui:Arc}} ({{key:R}}, un interrupteur), {{ui:Déduire}} ({{key:E}}, un interrupteur), {{ui:Découpe}} ({{key:X}}), {{ui:Compter}} ({{key:C}}), {{ui:Comptage auto}} ({{key:S}}) |
| {{ui:Édition}} | {{ui:Annuler}} ({{key:Mod+Z}}), {{ui:Rétablir}} ({{key:Mod+Y}}), {{ui:Copier}} ({{key:Mod+C}}), {{ui:Coller}} ({{key:Mod+V}}), et {{ui:Plus}} : {{ui:Couper}}, {{ui:Copier}}, {{ui:Coller}}, {{ui:Coller à la même position}}, {{ui:Dupliquer}}, {{ui:Supprimer}}, {{ui:Tout sélectionner}}, {{ui:Désélectionner tout}} |
| {{ui:Vue}} | {{ui:Page entière}} ({{key:F}}), {{ui:Largeur}} ({{key:W}}) |

L'outil que vous utilisez apparaît enfoncé. Les boutons {{ui:Arc}} et {{ui:Déduire}} restent enfoncés tant qu'ils sont activés.

## Feuilles (à gauche)

- **Chercher des feuilles** filtre la liste par nom de feuille, nom de fichier ou intitulé de page.
- Chaque feuille affiche une miniature (dessinée au fil du défilement), son nom, et soit son échelle, soit **Sans échelle**.
- La droite de chaque ligne indique combien de repères la feuille porte. Quand un poste est mis en évidence, elle indique à la place combien de repères de ce poste se trouvent sur la feuille.
- Cliquez sur une feuille pour l'ouvrir. {{key:PageDown}} et {{key:PageUp}} passent à la feuille suivante et à la précédente de la liste.
- Quand un métré porte sur des PDF qui ne sont pas ouverts, une remarque sous la liste les nomme. Voir [Enregistrer et rouvrir un métré](topic:save-and-reopen).

Les noms de feuilles viennent du PDF : un intitulé de page comme `A-101` devient le nom de la feuille. Une page sans intitulé prend le nom de son fichier et son numéro de page, comme « Plans, page 3 ». Quand plusieurs PDF sont ouverts, les feuilles qui ont un intitulé affichent aussi le nom du fichier.

## La feuille (au milieu)

- La barre sous la feuille indique le nom de la feuille et son échelle, ou « Pas encore d'échelle : choisissez un préréglage ou étalonnez ». Ses boutons : {{ui:MarkupCraft}} (quand cette application peut prendre le PDF ; voir [Démarrer un métré et ouvrir un jeu de plans](topic:open-plan-set)), {{ui:Comparer}} (une version plus ancienne de la feuille superposée à celle-ci : [Comparer une feuille révisée](topic:compare-revisions)), « (n) à vérifier » (les repères signalés, s'il y en a) et {{ui:3D}} (la [vue de contrôle 3D](topic:check-in-3d)).
- Tant qu'aucun PDF n'est ouvert, le milieu affiche un court guide en cinq étapes.
- La molette zoome à l'endroit du pointeur. Faites glisser pour déplacer la vue. Voir [Clavier et souris](topic:keyboard).
- Pendant que vous utilisez {{ui:Comptage auto}}, une barre avec ses commandes apparaît en haut de la feuille.

## Éléments (à droite)

En haut, la liste {{ui:Zone de soumission}} : le bâtiment, l'étage ou la phase où vont les nouveaux repères ([Zones de soumission](topic:bid-areas)).

- {{ui:Nouveau poste}} ouvre un petit formulaire : un nom, un type ({{ui:Linéaire (longueur)}}, {{ui:Surface}} ou {{ui:Compter}}) et {{ui:Ajouter}}.
- La liste montre pour chaque poste sa couleur, l'icône de son type, son nom et sa quantité. Cliquez sur un poste pour tracer avec lui et mettre en évidence ses repères sur toutes les feuilles. Cliquez de nouveau dessus pour arrêter la mise en évidence.
- Sous la liste, **Poste : (nom)** est l'éditeur de poste : nom, type, couleur, unité, hauteur ou profondeur, chute, prix du matériau et de la main-d'œuvre, valeurs mesurées et {{ui:Assemblage}}. Voir [Créer des postes de métré](topic:create-items).
- **Repère sélectionné** apparaît quand vous sélectionnez un repère : le poste auquel il appartient, sa feuille, ses mesures, et des boutons comme {{ui:Ajouter une découpe}} et {{ui:Supprimer le repère}}. Quand plusieurs repères sont sélectionnés, il devient **Repères sélectionnés** : le nombre de repères de chaque poste, et {{ui:Copier}}, {{ui:Dupliquer}}, {{ui:Couper}} et {{ui:Supprimer les repères}}.
- L'éditeur de poste se termine par {{ui:Copier le poste}} et {{ui:Dupliquer le poste}} : un poste avec son assemblage et ses coûts, sans repères. Voir [Copier, coller et dupliquer des repères](topic:copy-paste).

## Quantités (en bas)

- {{ui:Par poste}} répertorie chaque poste et les composants de son assemblage avec quantité, chute, prix et coûts étendus. Vous pouvez saisir les chutes et les prix directement dans le tableau.
- {{ui:Par feuille}} répertorie la quantité de chaque poste sur chaque feuille.
- Un avertissement commençant par **Incomplet :** apparaît quand quelque chose est exclu des totaux.
- {{ui:Total du chantier}} se trouve à droite de l'en-tête.
- Le bouton fléché tout à droite masque ou affiche le tableau pour donner plus de place à la feuille.

Voir [Lire les quantités et l'estimation](topic:read-quantities).

## Barre d'état (en bas)

De gauche à droite : la mesure en direct pendant que vous tracez (longueur, surface, rayon ou résultat d'une vérification), la zone {{ui:Type}} pendant que vous saisissez une longueur, les messages de TakeoffCraft, le rappel « Maj accroche à 45° » (ou « Accroche à 45° ; Maj libère l'angle » quand cette option est activée dans les [Paramètres](topic:settings)), le bouton {{ui:Accrochage}} (accrochage aux traits du dessin, activé quand il est mis en évidence ; {{key:F3}}) et le pourcentage de zoom.

:::tip
Lisez la barre d'état quand quelque chose ne se passe pas. TakeoffCraft y explique pourquoi il a refusé un clic, par exemple « Cette feuille n'a pas encore d'échelle ».
:::

## Autres dispositions

Tout ce qui précède correspond à la disposition {{ui:CadCraft classique}}, celle du départ. {{ui:Paramètres}} ({{key:Mod+,}}) › {{ui:Général}} › {{ui:Disposition}} en propose deux autres ; les mêmes outils et les mêmes touches fonctionnent dans les trois, et choisir de nouveau {{ui:CadCraft classique}} remet chaque commande à sa place.

| Disposition | Dans TakeoffCraft |
|---|---|
| {{ui:Ruban et explorateur de projet}} | Le {{ui:Ruban de métré}} en haut ([Menus, touches et souris](topic:menus-keys-and-mouse)), une barre pour l'outil en cours, un onglet pour chaque feuille que vous ouvrez (le Modèle et les présentations d'un dessin sont aussi des feuilles) avec les échelles prédéfinies et {{ui:Page entière}} sous la feuille. Le panneau de gauche contient {{ui:Propriétés}} (le poste, la note ou le repère sélectionné) au-dessus du {{ui:Navigateur de métré}} : {{ui:Feuilles}} (cliquez sur l'une pour l'ouvrir dans un onglet), {{ui:Conditions}} (cliquez sur l'une pour tracer avec elle) et {{ui:Estimation}} (le total de chaque poste et le total du chantier) ; les miniatures forment son deuxième onglet. |
| {{ui:Boîte à outils et boîte d'informations}} | La barre d'outils au-dessus de la feuille, une boîte d'informations avec la {{ui:Zone de soumission}}, l'outil en cours ou la sélection et la barre de la feuille, une colonne d'outils de métré à gauche, un onglet pour chaque feuille, et {{ui:Accrochage}} et le zoom sous la feuille. |

Tant que la [vue de contrôle 3D](topic:check-in-3d) est ouverte, les onglets des feuilles et la barre sous la feuille s'effacent ; fermez la vue 3D pour mesurer de nouveau. Sur un téléphone, la disposition pour téléphone s'applique toujours.

## Plein écran et thèmes

Le bouton {{ui:Plein écran}} de la barre de l'application, ou {{key:Ctrl+Shift+F}} (Ctrl sur toutes les plateformes, y compris sur Mac), fait défiler les modes normal, plein écran, et plein écran avec les barres masquées. Quand les barres sont masquées, déplacez le pointeur vers le bord supérieur pour les afficher de nouveau.

{{ui:Papier}} est le thème clair et {{ui:Objet}} le thème sombre. Dans {{ui:Objet}}, le dessin est affiché en inversé (traits clairs sur fond sombre) à l'écran seulement ; les exports ne sont jamais modifiés.
