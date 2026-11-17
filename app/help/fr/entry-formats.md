---
title: Saisie des longueurs, des prix unitaires et des pourcentages
summary: Ce que vous pouvez saisir pour les distances, les hauteurs, les prix unitaires et les pourcentages de chute, avec des exemples et les messages pour les saisies que TakeoffCraft ne peut pas lire.
keywords: saisie, format, pieds et pouces, fractions, pieds décimaux, métrique, mètres, millimètres, prix unitaire, montant, dollars, pourcentage, chute, frappe
from: 215bbf4d
---

## Longueurs

Utilisée par **Distance réelle** dans {{ui:Étalonner}}, ainsi que par {{ui:Hauteur}} et {{ui:Profondeur}} dans l'éditeur de poste.

| Vous saisissez | Cela signifie |
|---|---|
| `24'-0"` | 24 pieds |
| `24'-6 1/2"` | 24 pieds 6½ pouces |
| `12' 6 1/2"` | 12 pieds 6½ pouces (un espace à la place du tiret) |
| `12'-6-1/2"` | 12 pieds 6½ pouces (tirets entre les parties) |
| `24'` | 24 pieds |
| `30"` | 30 pouces |
| `6 1/2"` | 6½ pouces |
| `3/4"` | ¾ de pouce |
| `24 ft 6 in` | 24 pieds 6 pouces (aussi `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 dans l'unité par défaut (voir ci-dessous) |
| `24.5'` | 24.5 pieds |
| `7.5 m` | 7.5 mètres |
| `750 cm` | 750 centimètres |
| `7500 mm` | 7,500 millimètres |

- Un nombre sans unité est exprimé en **pieds** pour l'étalonnage et pour les postes en LF, SF ou SY, et en **mètres** pour les postes en m ou m².
- Les guillemets typographiques et les signes prime des traitements de texte (′ ″ ’ ”) fonctionnent comme `'` et `"`. Deux apostrophes `''` valent `"`.
- Les virgules sont ignorées : `1,200 mm` vaut 1200 mm.
- Les fractions exigent des nombres entiers des deux côtés : `6 1/2"` fonctionne, `6.5 1/2"` non.
- Les distances nulles ou négatives sont refusées.

Messages :

- « Saisissez une distance, par exemple 24'-0" ou 7.5 m. » (le champ est vide)
- « Saisissez une distance supérieure à zéro. »
- « Utilisez des pieds et des pouces (24'-6 1/2"), des pieds décimaux, m, cm ou mm. » (unité inconnue)
- « Cette distance n'a pas pu être lue. Essayez 24'-6 1/2" ou 24.5. »

Pour effacer la hauteur ou la profondeur d'un poste, videz le champ.

### Calculs

Chaque champ de longueur, ainsi que la zone de saisie pendant le tracé, accepte aussi un calcul avec `+`, `-`, `*`, `/` et des parenthèses :
`4+7/16` (4.4375 dans l'unité par défaut), `12'6" + 3/4"`, `(24'-0")/3` (8 pieds), `2*450mm`.

- Un tiret écrit dans une longueur en fait toujours partie : `24'-6"` vaut 24 pieds 6 pouces et `6-1/2` vaut 6½. Mettez des espaces autour d'un tiret pour soustraire : `24' - 6"` vaut 23'-6".
- Un nombre sans unité multiplie ou divise une longueur comme un nombre ; ajouté à une longueur, il est exprimé dans l'unité par défaut.
- Les fonctions `abs`, `round`, `ceil` et `floor` fonctionnent aussi. Un calcul illisible est refusé, avec l'indication de l'endroit où l'erreur se trouve.

## Affichage des longueurs

Les longueurs s'affichent en pieds, pouces et seizièmes : `12'-6 1/2"`, `0'-0 3/4"`. Les valeurs sont arrondies au seizième de pouce le plus proche pour l'affichage ; les quantités elles-mêmes ne sont pas arrondies. Les valeurs décimales s'affichent avec deux décimales et des séparateurs de milliers, comme `1,234.50 LF`.

## Prix unitaires (matériaux et main-d'œuvre par unité)

| Vous saisissez | Cela signifie |
|---|---|
| `12.5` | 12,50 $ |
| `$12.50` | 12,50 $ |
| `1,250` | 1 250,00 $ |
| `0.385` | 0,385 $ (jusqu'à quatre décimales ; au-delà, arrondi) |
| (vide) | 0 $ |

Message : « Saisissez un montant, par exemple 12.50. » ou « Ce montant est trop élevé. » Les prix négatifs ne sont pas acceptés.

Les montants étendus (matériaux, main-d'œuvre, totaux) sont calculés au centime près : quantité avec chute × prix unitaire, arrondi à la demi-unité en s'éloignant de zéro, exactement comme `ROUND(x, 2)` dans un tableur.

## Pourcentage de chute

| Vous saisissez | Cela signifie |
|---|---|
| `10` | 10 % |
| `7.5%` | 7,5 % |
| (vide) | 0 % |

Jusqu'à deux décimales, de 0 % à 1000 %. Messages : « Saisissez un pourcentage, par exemple 10 ou 7.5. » ou « La chute au-delà de 1000 % n'est pas autorisée. »

## Noms et unités

- Noms des postes et des composants : 200 caractères maximum.
- L'{{ui:Unité}} d'un composant : tout texte de 20 caractères maximum, comme `EA`, `sheets`, `CY`, `gal`. Ce n'est qu'une étiquette ; TakeoffCraft ne la convertit pas.

## Formules

Les formules d'ouvrage ont leurs propres règles : voir [Langage des formules](topic:formulas).
