---
title: Tout compter dans le jeu de plans
summary: Encadrez une fois la légende des symboles et TakeoffCraft compte chaque symbole qu'elle contient sur chaque feuille ouverte, en une seule passe. Chaque comptage renvoie à sa feuille, et vous vérifiez avant tout ajout.
keywords: tout compter, légende, légende des symboles, ensemble complet, chaque feuille, toutes les feuilles, chaque porte, chaque équipement, appareils, nomenclature, symboles, comptage auto, compter tout, jeu de plans, 200 feuilles, niveau de correspondance, aspect semblable
from: adc99744
---

{{ui:Tout compter}} lit une légende de symboles, puis compte chaque symbole qu'elle contient sur chaque feuille ouverte. C'est le {{ui:Comptage auto}} pour une légende entière, d'un coup. Il s'agit d'une simple recherche de correspondances de symboles sur vos propres feuilles, et non d'un modèle d'apprentissage ; rien ne quitte votre ordinateur. Vérifiez les comptages avant de les ajouter : c'est une aide, non une garantie.

## Compter une légende

1. Ouvrez les plans. Une légende sur n'importe quelle feuille convient : les symboles avec leurs noms à côté.
2. Choisissez {{ui:Tout compter}} dans la barre d'outils.
3. Tracez un cadre autour de la légende, des symboles et des noms. Un titre sans symbole à côté (SYMBOL LEGEND) est exclu automatiquement.
   Le panneau liste chaque symbole avec son image et le nom imprimé à côté. Ce nom devient le nom du poste ; vous pouvez le renommer ici si vous le souhaitez.
4. Décochez les symboles que vous ne voulez pas compter. Un symbole qui ne peut pas être recherché (trop petit ou vide) indique pourquoi.
5. Choisissez {{ui:Compter sur N feuilles}}. Une barre indique la feuille en cours de recherche ; {{ui:Annuler}} arrête l'opération. La page reste utilisable.

Les symboles de la légende elle-même ne sont pas comptés sur sa feuille. Une feuille dessinée à une autre échelle est recherchée à cette échelle, et les symboles sont retrouvés tournés de n'importe quel angle droit.

## Vérifier les comptages

- Chaque symbole affiche son total et, dessous, un lien par feuille qui en contient (« E-103 : 4 »). Cliquez sur un lien pour aller à cette feuille. Les occurrences trouvées sont encadrées de la couleur du poste.
- **Cliquez sur un cadre** pour exclure cette occurrence. Il devient en pointillés et barré ; cliquez à nouveau pour le rétablir.
- **Déplacez le niveau de correspondance** (de 50 % à 100 %, en partant du niveau de vos Paramètres). Plus il est élevé, plus seules les correspondances proches sont conservées. Le curseur ne fait que filtrer ce qui a été trouvé ; rien n'est recherché à nouveau.
- Deux symboles qui se ressemblent (une prise double et une prise quadruple) peuvent correspondre au même endroit. La meilleure correspondance le garde, et le panneau indique sur combien d'endroits cela s'est produit, afin que vous puissiez les vérifier.
- Une feuille trop grande pour être recherchée à la taille du symbole est ignorée, et le panneau l'indique.

## Ajouter les comptages

Choisissez {{ui:Ajouter N repères}}. Chaque symbole devient un poste de comptage avec un repère sur chaque occurrence. Un nom qui correspond déjà à un de vos postes de comptage est réutilisé (rien n'est doublé là où vous aviez déjà marqué à la main). L'ensemble de l'opération ne compte que pour une étape : {{key:Ctrl+Z}} retire tous les postes et tous les repères.

Ce que vous acceptez alimente aussi {{ui:Appris}} : les symboles sont mémorisés dans le fichier du métré pour la prochaine fois.

## Avec votre assistant

Si vous autorisez les assistants dans les Paramètres, ils peuvent lire une légende (legend_open), lancer le comptage en arrière-plan (legend_count_start, puis legend_count_status), lire les comptages (legend_count_result) et les ajouter (legend_count_add, qui peut d'abord prévisualiser ce qu'il ajouterait). C'est la même opération que celle que vous voyez dans le panneau.

## Symboles sous tout angle

Cochez {{ui:Symboles sous tout angle}} avant de compter pour trouver aussi les symboles dessinés selon un angle qui n'est pas droit (une cheville de mur en diagonale, un luminaire orienté selon un toit). La recherche fait alors pivoter chaque symbole tous les 15 degrés ; un symbole rond ne demande qu'une seule recherche, et un symbole non rond peut prendre jusqu'à six fois plus de temps. Laissez cette option désactivée pour les plans dessinés d'équerre.

## Bon à savoir

- Il faut que les symboles soient dessinés de la même façon que dans la légende. Une légende dessinée à une taille différente de celle des feuilles convient lorsque les échelles des feuilles sont réglées ; sans échelle, les symboles sont recherchés à la taille de la légende.
- Un symbole traversé par un mur ou une longue ligne peut passer inaperçu, car il ne ressemble plus à l'image de la légende. Vérifiez les occurrences trouvées sur la première feuille avant de faire confiance au reste.
- Une numérisation sans texte fonctionne quand même : les symboles sont retrouvés par leurs rangées, et vous saisissez les noms.
