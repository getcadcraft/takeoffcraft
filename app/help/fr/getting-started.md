---
title: Premiers pas avec TakeoffCraft
summary: Ce que fait TakeoffCraft, où il fonctionne, et votre premier poste mesuré et chiffré à partir d'un jeu de plans PDF.
keywords: démarrage, premier métré, démarrage rapide, introduction, estimation, métré, jeu de plans, pdf
from: 3b9da1fb
---

TakeoffCraft mesure des jeux de plans, des PDF et des dessins DWG ou DXF, et transforme les mesures en une estimation chiffrée. Vous ouvrez les fichiers (un dessin se compte directement à partir de ses blocs : voir [Ouvrir un dessin DWG ou DXF](topic:open-a-drawing)), vous donnez une échelle à chaque feuille (un dessin apporte la sienne), vous créez des **postes** (un type de mur, une finition de sol, un équipement) et vous cliquez sur les feuilles pour les relever. Les quantités, les coûts et le total du chantier se mettent à jour au fur et à mesure. Vous pouvez exporter l'estimation sous forme de tableur, avec une copie des PDF où votre métré est tracé.

Si vous avez déjà fait des métrés avec d'autres logiciels, lisez ensuite [Venir d'un autre logiciel de métré](topic:coming-from). Certaines choses fonctionnent différemment ici.

## Où il fonctionne

TakeoffCraft fonctionne dans votre navigateur web. Ouvrez TakeoffCraft et l'écran est prêt aussitôt ; il n'y a rien à installer.

- **Vos PDF restent sur votre ordinateur.** Ils sont ouverts par le navigateur et ne sont jamais téléversés. Enregistrer, c'est télécharger.
- Il fonctionne dans les versions actuelles de Chrome, Edge, Firefox et Safari. Voir [Navigateurs et ordinateurs](common:browsers).
- Il fonctionne sans connexion internet dès que vous choisissez {{ui:Enregistrer pour le hors ligne}} dans la barre de l'application et qu'elle affiche {{ui:Prêt hors ligne}}. Voir [Travailler hors ligne](common:offline).
- L'enregistrement dans le cloud n'est pas encore disponible. Pour une application de bureau, TakeoffCraft est fourni dans CadCraft Studio, avec les sept autres applications.

## Votre premier métré en dix étapes

Ce pas à pas mesure un type de mur et le chiffre. Il prend quelques minutes sur n'importe quel plan.

1. Choisissez {{ui:Ouvrir des PDF}} dans le groupe {{ui:Fichier}} de la barre d'outils (ou appuyez sur {{key:Mod+O}}), sélectionnez un ou plusieurs PDF, puis choisissez Ouvrir. Vous pouvez aussi déposer les PDF n'importe où sur la page.
   Les feuilles apparaissent à gauche et la première feuille s'ouvre au milieu.
2. Repérez l'échelle imprimée de la feuille dans son cartouche ou sous un titre de dessin.
3. Ouvrez la liste {{ui:Prédéfini}} dans le groupe {{ui:Échelle}} et choisissez cette échelle, par exemple `1/4" = 1'-0"`.
   La barre située sous la feuille indique maintenant « Échelle 1/4" = 1'-0" ».
4. Choisissez {{ui:Vérifier}} (ou appuyez sur {{key:D}}) et cliquez sur les deux extrémités d'une cote imprimée sur le dessin.
   La valeur affichée dans la barre d'état, en bas à gauche, doit correspondre à la cote imprimée. Sinon, voir [Définir l'échelle](topic:set-the-scale).
5. Dans le panneau {{ui:Éléments (I)}} à droite, choisissez {{ui:Nouveau poste}}, saisissez un nom comme `Cloison intérieure type A`, laissez le type sur {{ui:Linéaire (longueur)}}, puis choisissez {{ui:Ajouter}}.
6. Choisissez {{ui:Linéaire}} dans la barre d'outils (ou appuyez sur {{key:L}}).
7. Cliquez au début d'un mur, puis à chaque angle le long de celui-ci. Double-cliquez, appuyez sur {{key:Enter}} ou faites un clic droit pour terminer le tronçon.
   Le tronçon est tracé dans la couleur du poste et sa longueur apparaît à côté du poste.
8. Dans l'éditeur de poste sous {{ui:Éléments (I)}}, saisissez `9'-0"` dans {{ui:Hauteur}}, `0.85` dans {{ui:Matériau $/LF}} et `1.20` dans {{ui:Main-d'œuvre $/LF}}.
   Le tableau {{ui:Quantités}} en bas affiche la longueur, le matériau et la main-d'œuvre étendus, et le {{ui:Total du chantier}}.
9. Choisissez {{ui:Enregistrer le métré}} (ou appuyez sur {{key:Mod+S}}).
   Votre navigateur télécharge un fichier `.takeoff.json`. Il contient vos postes, vos échelles et vos repères, et se rouvre sur les mêmes PDF.
10. Ouvrez le menu {{ui:Exporter}} de la barre d'outils et choisissez {{ui:XLSX}} pour télécharger l'estimation sous forme de tableur.

:::tip
Appuyez sur {{key:Esc}} pour arrêter ce que vous faites et revenir à l'outil {{ui:Sélectionner}}. {{key:Mod+Z}} annule toute modification.
:::

## À lire ensuite

- [L'écran de TakeoffCraft](topic:workspace) nomme chaque partie de la fenêtre.
- [Démarrer un métré et ouvrir un jeu de plans](topic:open-plan-set) traite de plusieurs PDF et de la liste des feuilles.
- [Créer des postes de métré](topic:create-items) explique les types, les unités, les chutes et les prix.
- [Ouvrages et formules](topic:assemblies) transforme une mesure en montants, plaques de plâtre et plus encore.
- [Clavier et souris](topic:keyboard) répertorie toutes les touches.
