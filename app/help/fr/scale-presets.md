---
title: Échelles prédéfinies
summary: Chaque prédéfini de la liste Prédéfini (architecturales, ingénieur et métriques) et ce que chacun suppose du PDF.
keywords: échelle, prédéfinis, échelle architecturale, échelle ingénieur, échelle métrique, rapport, 1/4 pouce, 1/8 pouce, 1:100, taille réelle
from: 31ac0000
---

La liste {{ui:Prédéfini}} du groupe {{ui:Échelle}} propose 32 échelles en trois groupes. Un prédéfini règle exactement l'échelle de la feuille ouverte.

Chaque prédéfini suppose que la page PDF a la taille réelle du papier pour lequel le dessin a été conçu : un pouce sur la page PDF représente un pouce de papier (les pages PDF mesurent 72 points par pouce). Si le PDF a été redimensionné, utilisez {{ui:Étalonner}}. Utilisez {{ui:Vérifier}} après avoir réglé une échelle. Voir [Régler l'échelle](topic:set-the-scale).

## Architecturales

| Prédéfini | Un pouce de papier vaut |
|---|---|
| `1/16" = 1'-0"` | 16 ft |
| `3/32" = 1'-0"` | 10 ft 8 in |
| `1/8" = 1'-0"` | 8 ft |
| `3/16" = 1'-0"` | 5 ft 4 in |
| `1/4" = 1'-0"` | 4 ft |
| `3/8" = 1'-0"` | 2 ft 8 in |
| `1/2" = 1'-0"` | 2 ft |
| `3/4" = 1'-0"` | 1 ft 4 in |
| `1" = 1'-0"` | 1 ft |
| `1 1/2" = 1'-0"` | 8 in |
| `3" = 1'-0"` | 4 in |

## Ingénieur

| Prédéfini | Un pouce de papier vaut |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Métriques

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Un rapport métrique signifie qu'une unité sur papier correspond à ce nombre d'unités dans la réalité : à `1:100`, 10 mm sur la page valent 1 m.

## Échelles étalonnées

Une échelle étalonnée s'affiche sous la forme « Étalonnée 1 » = 4.002' sur 24'-6" dans la barre sous la feuille : pieds réels par pouce de papier, et la distance que vous avez saisie. Lorsqu'elle est à moins de 0.5% d'un prédéfini, la barre ajoute « (correspond à 1/4" = 1'-0") » et la liste des feuilles affiche le nom du prédéfini.

## PDF inhabituels

Certains PDF déclarent une unité de page plus grande (une « unité utilisateur ») ; TakeoffCraft en tient compte pour les prédéfinis et pour l'échelle affichée. Les pages pivotées dans le PDF sont mesurées comme les pages droites.
