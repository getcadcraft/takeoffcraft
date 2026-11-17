---
title: Venir d'un autre logiciel de métré
summary: Comment les habitudes des logiciels de métré dédiés et des outils d'annotation PDF correspondent à TakeoffCraft, et les différences qui piègent.
keywords: changement de logiciel, migrer, conditions, pièces, outils de mesure, liste des annotations, lien de quantité, habitudes de métré, différences, comparer
from: 12004ce5
---

Si vous avez fait du métré avec PlanSwift ou avec les outils de mesure de Bluebeam Revu, la plupart des fonctions de TakeoffCraft vous seront familières : un jeu de plans, une échelle par feuille, des éléments mesurés et un total chiffré. La façon dont ces éléments s'articulent diffère sur certains points, décrits ci-dessous.

Si vous connaissez PlanSwift ou On-Screen Takeoff, choisissez le style de menu {{ui:Bureau de métré}} dans {{ui:Paramètres}} › {{ui:TakeoffCraft}} › {{ui:Menus, touches et souris}} : une barre de menus avec Fichier, Édition, Affichage, Échelle, Métré, Éléments, Annotations et Exporter, au-dessus d'une rangée d'outils de métré, avec les préréglages d'échelle dans la barre de feuille. Voir [Menus, touches et souris](topic:menus-keys-and-mouse).

## Habitudes correspondantes

| Vous avez l'habitude de | Dans TakeoffCraft |
|---|---|
| Ouvrir un chantier ou un projet qui stocke les plans (PlanSwift) | Ouvrez les PDF et le projet `.takeoff.json` côte à côte. Le projet ne stocke que le métré ; les PDF restent vos fichiers. |
| Une liste d'annotations avec notes, nuages et surlignages (Bluebeam) | {{ui:Annotations}} dans la barre de feuille : notes, nuages et surlignages avec un statut (Ouvert, Répondu, Fermé), listés sous **Annotations** et dessinés dans le PDF annoté. Voir [Notes, nuages et surlignages](topic:markups). |
| Des mesures enregistrées comme annotations dans le PDF (Bluebeam) | Le métré est dans le fichier `.takeoff.json`. {{ui:PDF annoté}} écrit une copie avec le métré dessiné, pour le partage ; {{ui:PDF avec le métré intégré}} écrit une copie qui contient le métré, à rouvrir dans TakeoffCraft. |
| Des postes de métré (PlanSwift), des outils de mesure personnalisés enregistrés dans la Tool Chest (Bluebeam) | **Éléments** sous {{ui:Éléments (I)}} : nom, type, couleur, unité, hauteur ou profondeur, chute, tarifs. |
| Des pièces et des assemblages avec formules (PlanSwift) | Le {{ui:Assemblage}} de l'élément : des composants avec une formule utilisant `L H A N P`. |
| Régler l'échelle de la page, ou étalonner (les deux) | Liste {{ui:Prédéfini}} ou {{ui:Étalonner}} dans le groupe {{ui:Échelle}}, par feuille. {{ui:Vérifier}} mesure une cote connue. |
| Appliquer une même échelle à une plage de pages | Pas encore : réglez chaque feuille. |
| Des fenêtres de présentation à échelles différentes sur une même feuille (Bluebeam) | Pas encore : une seule échelle par feuille. |
| Les outils de longueur de polyligne et de surface (Bluebeam), le métré linéaire et surfacique (PlanSwift) | {{ui:Linéaire}} ({{key:L}}) et {{ui:Surface}} ({{key:A}}). |
| Maintenir {{key:Shift}} pour des lignes droites | {{key:Shift}} accroche par pas de 45°, même principe. |
| Accrochage aux lignes du dessin | Activé par défaut : extrémités, milieux, intersections et point le plus proche sur une ligne, avec {{key:F3}} pour le désactiver, comme dans les logiciels de CAO. |
| Outil de comptage (les deux) | {{ui:Compter}} ({{key:C}}). |
| Recherche visuelle de symboles (Bluebeam) | {{ui:Comptage auto}} ({{key:S}}) : encadrez un symbole, vérifiez, ajoutez. |
| Découpes ou déductions dans les surfaces | {{ui:Découpe}} ({{key:X}}) sur une surface sélectionnée, et découpes rondes. |
| Déductions sur les tronçons linéaires | Tracez le tronçon en ligne droite, puis appuyez sur {{key:E}} ({{ui:Déduire}}) pour l'ouverture. Voir [Mesurer les tronçons linéaires](topic:measure-linear). |
| Segments d'arc dans une polyligne | {{ui:Arc}} ({{key:R}}) : cliquez un point sur la courbe, puis son extrémité. |
| La liste des annotations avec colonnes de quantités (Bluebeam) | Le tableau {{ui:Quantités}}, {{ui:Par poste}} ou {{ui:Par feuille}}. |
| Grille d'estimation avec tarification (PlanSwift) | Le même tableau : chute, matériau et main-d'œuvre par unité, totaux étendus, {{ui:Total du chantier}}. |
| Export vers Excel | {{ui:XLSX}} avec formules actives, ou {{ui:CSV}}. |
| Échap pour arrêter un outil | {{key:Esc}} annule et revient à {{ui:Sélectionner}}. |
| Clic droit pour terminer | Le clic droit termine un tronçon ou referme une surface ici aussi. Il n'y a pas de menu contextuel. |

## Différences qui piègent

**Le métré n'est pas dans votre PDF.** Rien de ce que vous faites ne modifie vos PDF. Enregistrez le fichier `.takeoff.json` et conservez-le avec les plans. Envoyer le PDF annoté ne transmet pas un métré modifiable : envoyez le fichier de projet et les PDF d'origine, ou un [PDF avec le métré intégré](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**Les PDF sont reconnus par leur contenu, pas par leur nom.** Une feuille révisée enregistrée sous l'ancien nom de fichier est, pour TakeoffCraft, un nouveau fichier, sans échelle ni repère. Vos anciens repères restent sur l'ancienne version et continuent d'être comptés. Voir [Enregistrer et rouvrir un métré](topic:save-and-reopen#when-a-pdf-has-changed).

**Les repères sans échelle sont exclus, et non comptés comme zéro.** Si une feuille n'a pas d'échelle, ses tronçons et ses surfaces ne sont pas comptés, et le tableau indique « Incomplet ». Dans beaucoup de logiciels, vous verriez simplement 0. Voir [Régler l'échelle](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Pas de devinette sur la taille de page.** Les préréglages supposent que le PDF est imprimé à taille réelle. Un PDF à demi-taille ou « ajusté à la page » nécessite {{ui:Étalonner}}. Utilisez toujours {{ui:Vérifier}}.

**Un élément, un type principal, d'autres types si vous le demandez.** Un élément est linéaire, surfacique ou de comptage, et son type se verrouille dès qu'il a des repères. Une condition qui donne à la fois une surface et son périmètre est un élément de surface : son périmètre est la variable `P`. Un mur avec longueur et surface est un élément linéaire avec une hauteur. Pour un élément à plusieurs conditions, comme une pièce avec un sol, une plinthe et des portes, cochez les autres types sous **Mesurer aussi** : chacun est chiffré sur sa propre ligne. Voir [Un élément, plusieurs types de repères](topic:create-items#one-item-several-kinds-of-marks).

**Les formules portent sur les totaux.** Les formules d'assemblage utilisent les totaux de l'élément sur toutes les feuilles, et non tronçon par tronçon. `N` (le nombre de tronçons ou de surfaces) sert aux suppléments par tronçon, comme un montant supplémentaire par mur.

**Le périmètre inclut les découpes.** Le `P` d'une surface ajoute les bords de ses trous. Voir [Mesurer les surfaces avec découpes](topic:measure-areas#read-the-area).

**Glisser déplace la vue.** Un glissement avec le bouton gauche sur la feuille déplace la vue, dans tous les outils sauf {{ui:Comptage auto}}. Vous n'avez jamais besoin de passer à un outil de déplacement. La molette fait un zoom ; elle ne fait pas défiler la page.

**Une copie de récupération, pas un stockage cloud.** TakeoffCraft conserve une copie de votre travail dans ce navigateur et vous la propose après un plantage ([Si l'onglet ou le navigateur s'arrête](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), mais c'est à vous d'enregistrer le métré : {{key:Mod+S}}. L'enregistrement dans le cloud n'est pas encore disponible.

**Tout se passe dans le navigateur.** Il n'y a rien à installer, et les plans ne sont jamais téléversés. Pour une application de bureau, TakeoffCraft est disponible dans CadCraft Studio, avec les sept autres applications.

## Pas encore disponible

Les zones d'échelle par feuille ne sont pas encore disponibles. Voir [Ce qui n'est pas encore disponible](topic:not-built-yet) pour la liste complète et ce qu'il faut faire à la place.
