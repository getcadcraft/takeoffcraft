---
title: Importer un tableau de repères en quantités
summary: Un tableau de repères exporté du modèle du bâtiment (CSV) devient des quantités typées dans le métré, une par repère, pour que les comptages et surfaces du modèle figurent à côté de ce que vous avez mesuré.
keywords: repères, tableau de repères, modèle du bâtiment, bimcraft, ifc, quantités, csv, tableau, import, quantité typée
from: a60c19b6
---

{{ui:Repères}} dans la barre d'outils importe un tableau de repères que BimCraft a enregistré au format CSV. Chaque repère distinct devient une quantité typée, du même type que celles de déblai et remblai de CivilCraft.

1. Dans BimCraft, établissez le tableau de repères souhaité et enregistrez-le au format CSV.
2. Choisissez {{ui:Repères}} et sélectionnez le fichier.
3. Indiquez quelle colonne nomme la ligne ({{ui:Nommer la ligne d'après}}, généralement le repère) et laquelle contient le nombre ({{ui:Quantité depuis}}). Avec {{ui:Compter les lignes}}, chaque ligne compte pour une.
4. Choisissez l'unité. Une longueur en millimètres devient des mètres avec {{ui:Multiplier par}} 0.001.
5. {{ui:Ajouter les quantités}}.

Les lignes portant le même repère sont additionnées. Une cellule qui n'est pas un nombre est laissée de côté et comptée dans le récapitulatif. Réimporter le même tableau met à jour les quantités déjà présentes au lieu d'en ajouter ; leurs noms, prix unitaires et chutes vous appartiennent toujours.

## Bon à savoir

Une quantité typée n'est pas mesurée sur une feuille, elle n'a donc pas de repères tracés. Rien n'est envoyé nulle part : le fichier est lu ici.
