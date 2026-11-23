---
title: Formats des pages et noms de papier
summary: Voir le format de chaque feuille en millimètres et en pouces, ainsi que son nom de papier (séries A, B et C, ANSI, ARCH), et regrouper un jeu mixte par format pour repérer les feuilles atypiques.
keywords: format de page, format de papier, nom de papier, a0, a1, a2, a3, a4, série b, série c, ansi, arch, architectural, mm, pouces, format personnalisé, par format, format atypique, jeu mixte, échelle, jeu de plans, mediabox, rotation
from: 9c061c07
---

Une échelle n'a de sens que sur le bon papier. {{ui:TakeoffCraft}} lit le format de chaque feuille PDF et en donne le nom de papier, afin que vous voyiez une feuille imprimée à une autre taille avant de vous fier à une mesure qui s'y trouve.

## Ce que vous allez faire

Regarder le format de la feuille ouverte, puis regrouper tout le jeu par format.

## Étapes

1. Ouvrez les plans ({{ui:Ouvrir des PDF}}).
2. La barre de feuille au-dessus du dessin affiche le nom de papier de la feuille ouverte et son format, par exemple « A1 · 594 × 841 mm ».
3. Chaque ligne de la liste {{ui:Feuilles}} comporte une ligne de format sous le nom de la feuille.
4. Choisissez {{ui:Par format}} dans l'en-tête {{ui:Feuilles}}. La liste regroupe les feuilles sous un titre par format, le plus grand groupe en premier, et signale comme atypique un format ne comptant que quelques feuilles.
5. Choisissez à nouveau {{ui:Par format}} pour revenir à l'ordre propre au jeu.

Un fichier DWG ou DXF n'a pas de papier, donc aucun format n'est affiché pour lui.

## Comment le nom est choisi

- Le format provient de la boîte de la page dans le PDF, avec sa rotation appliquée.
- Les noms sont ceux des séries A et B (ISO 216), de la série C (ISO 269), ANSI A à E et ARCH A à E.
- Une page dont le format est à 2 mm près d'un format nommé prend ce nom. Toute autre page est indiquée comme personnalisée, avec le format nommé le plus proche et l'écart.

## Dans l'estimation

Le classeur d'estimation comporte une feuille {{ui:Formats des pages}} avec le comptage de chaque format.

:::note
Les valeurs en pouces ANSI et ARCH ont été saisies à partir des tableaux publiés et n'ont pas été comparées aux normes imprimées.
:::
