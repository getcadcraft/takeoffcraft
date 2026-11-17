---
title: Carbone incorporé et tableau de prix 5D
summary: Carbone totalise le carbone incorporé du métré à partir de la quantité de chaque élément et d'une table de facteurs ouverte, et envoie les taux du métré à BimCraft sous forme de tableau de prix pour les coûts 5D.
keywords: carbone, carbone incorporé, kgco2e, co2, facteurs, A1-A3, transport, chute, 5D, tableau de prix, coût, BimCraft, FDES, EPD
from: f4bff3b8
---

{{ui:Carbone}} dans la barre d'outils totalise le carbone incorporé de ce que vous avez mesuré, et transforme vos taux en tableau de prix que la maquette du bâtiment peut utiliser. C'est une estimation, non une évaluation.

## Carbone incorporé

La quantité de chaque élément, avec sa chute, est multipliée par une ligne de la table de facteurs. Une ligne est retrouvée par les mots du nom de l'élément (« dalle béton » trouve une ligne avec le mot-clé béton). La table est la même table ouverte que celle qu'utilise BimCraft, de sorte qu'un fichier chargé ici fonctionne là-bas. **Les lignes livrées avec le programme sont des valeurs de départ : génériques, non vérifiées et qui ne proviennent d'aucune base de données.** La boîte de dialogue le signale à côté des chiffres ; remplacez-les par votre propre source avant de vous fier à un nombre.

1. Choisissez {{ui:Carbone}}. Les éléments comptés sont listés avec leurs kilogrammes de CO2e ; le total se trouve au-dessus.
2. Cochez {{ui:A4 transport}} ou {{ui:A5 chutes de chantier}} pour compter ces étapes aussi, pour les lignes qui en donnent un chiffre. L'étape produit est toujours comptée.
3. Pour utiliser une autre ligne pour un élément, ou aucune, utilisez la liste sur sa ligne.
4. {{ui:Facteurs depuis un fichier…}} charge une table de facteurs (JSON ou CSV) établie à partir de votre propre source ; ses lignes remplacent les lignes de départ de même identifiant. {{ui:Facteurs (JSON)}} enregistre les vôtres.

Un facteur est par mètre, mètre carré, mètre cube, élément ou kilogramme. Une ligne mesurée en pieds ou pieds carrés est convertie. Un facteur au kilogramme nécessite un volume (cubic yards ou mètres) et la masse volumique de la ligne. Un élément dont le facteur demande une quantité qu'il ne mesure pas est listé sous {{ui:Écarté}} avec la raison, jamais deviné. Le total en cours dans la barre d'état affiche le même chiffre.

Vos lignes de facteurs, vos choix et les étapes comptées sont enregistrés dans le fichier du métré.

## Un tableau de prix pour les coûts 5D

{{ui:Prix 5D (JSON)}} et {{ui:Prix 5D (CSV)}} enregistrent les taux du métré sous forme de tableau de prix : une ligne par élément chiffré, avec son taux de matériau et de main-d'œuvre par unité et sa chute. Chargez-le dans le volet des coûts de BimCraft (Carbone incorporé et coût 5D) pour chiffrer les tâches de la maquette avec les mêmes taux qui ont servi à l'offre. Les éléments mesurés dans une unité que le tableau ne possède pas, et les éléments sans taux, sont exclus.

## Avec votre assistant

Si vous autorisez les assistants dans les {{ui:Paramètres}}, ils peuvent lire le carbone (carbon_check). Le chargement des facteurs vous appartient.

## Bon à savoir

Rien n'est envoyé nulle part. Les chiffres ne valent que par les facteurs que vous chargez.
