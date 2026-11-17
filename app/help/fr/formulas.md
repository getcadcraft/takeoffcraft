---
title: Langage des formules
summary: Les règles des formules de quantité d'ouvrage : variables, opérateurs, fonctions, arrondis et chaque message d'erreur.
keywords: formule, expression, syntaxe, fonctions, ceil, floor, round, min, max, abs, variables, opérateurs, calcul
from: 4da14575
---

Les composants d'un ouvrage tirent leur quantité d'une formule. Une formule est une petite expression arithmétique portant sur les valeurs mesurées du poste. Voir [Ouvrages et formules](topic:assemblies) pour des exemples détaillés.

## Variables

| Type de poste | Variable | Signification |
|---|---|---|
| Linéaire | `L` | Longueur totale |
| Linéaire | `H` | La hauteur du poste |
| Linéaire | `A` | Surface de mur, L × H, moins les ouvertures des tronçons qui en portent (un métré issu de BimCraft). Lorsque ce métré indique une méthode de mesure, `A` est mesurée selon elle : les ouvertures au plus égales à la plus petite dimension de la méthode restent comptées, et ce que la méthode déduit aux jonctions de murs est exclu. La remarque sous le poste indique la méthode |
| Linéaire | `N` | Nombre de tronçons |
| Surface | `A` | Surface nette totale (contours moins réservations) |
| Surface | `P` | Périmètre total, y compris les bords des réservations |
| Surface | `H` | La profondeur ou l'épaisseur du poste |
| Surface | `N` | Nombre de surfaces |
| Comptage | `N` | Le comptage |

- Les variables s'expriment dans les unités du poste : voir [Unités](topic:units).
- Majuscules et minuscules sont équivalentes : `l` est `L`.
- Seules les variables du type du poste fonctionnent. `P` sur un poste linéaire affiche « "P" n'est pas une valeur mesurée ici. Utilisez L, H, A, N. »
- Une hauteur ou une profondeur vide vaut 0.

## Opérateurs

| Écrivez | Signification |
|---|---|
| `+` | Addition |
| `-` ou `−` | Soustraction, ou valeur négative |
| `*` ou `×` | Multiplication |
| `/` ou `÷` | Division |
| `( )` | Regroupement |

La multiplication et la division passent avant l'addition et la soustraction : `L * 2 + 4` vaut (L × 2) + 4. Utilisez des parenthèses en cas de doute.

Les nombres peuvent avoir des décimales (`1.333`, `.5`) et des exposants (`1e3` = 1000). Les espaces sont ignorés.

## Fonctions

| Fonction | Résultat | Exemple |
|---|---|---|
| `ceil(x)` | Arrondi au nombre entier supérieur | `ceil(67.5)` = 68 |
| `floor(x)` | Arrondi au nombre entier inférieur | `floor(67.5)` = 67 |
| `round(x)` | Arrondi au nombre entier le plus proche, les moitiés s'éloignant de zéro | `round(2.5)` = 3 |
| `round(x, d)` | Arrondi à d décimales (0 à 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | La plus petite valeur | `min(N, 10)` |
| `max(a, b, …)` | La plus grande valeur | `max(1, ceil(N / 12))` |
| `abs(x)` | La valeur sans son signe | `abs(-3)` = 3 |

`ceil` et `floor` ignorent les infimes erreurs d'arrondi de l'ordinateur : une valeur qui doit valoir exactement 1 n'est jamais arrondie à 2.

## Erreurs

Une formule qui ne peut être lue ni calculée affiche son erreur sous le champ, et le composant est exclu des totaux (l'en-tête {{ui:Quantités}} indique « Incomplet »). Messages :

| Message | Correction |
|---|---|
| Saisissez une formule, par exemple L ou ceil(L / 1.333) + 1. | La formule est vide. |
| « "X" n'est pas une valeur mesurée ici. Utilisez … » | Utilisez l'une des variables listées. |
| « "X" n'est pas une fonction ici. Utilisez ceil, floor, round, min, max, abs. » | Utilisez l'une de ces fonctions. |
| « "#" n'est pas autorisé dans une formule. » | Supprimez ce caractère (les unités, `%`, `$` et `=` ne sont pas autorisés). |
| « Il manque une « ) ». » / « Il y a une « ) » sans sa « ( ». » | Équilibrez les parenthèses. |
| « Il manque une valeur avant « ) ». » Par exemple `max(1, )` : renseignez la valeur. | Renseignez la valeur manquante. |
| « La formule se termine trop tôt. » Par exemple `L *` : terminez-la. | Terminez la formule. |
| « Inattendu « … ». Un opérateur manque ? » | Deux valeurs côte à côte, comme `2L` : écrivez `2 * L`. |
| « ceil() prend 1 valeur. » | Donnez à la fonction le nombre de valeurs requis. |
| « round(x, digits) demande un nombre entier de décimales de 0 à 10. » | Utilisez un nombre entier de décimales. |
| « La formule divise par zéro. » | En général, H vaut 0 : renseignez la hauteur ou la profondeur du poste. |
| « La formule ne donne pas de nombre. » | Le résultat est trop grand pour être un nombre. |
| « Cette formule est trop longue (500 caractères au maximum). » | Raccourcissez-la. |

## Sûr par conception

Une formule ne peut faire que du calcul avec les variables et fonctions ci-dessus. Elle ne peut ni exécuter de code ni lire autre chose : une formule contenue dans un fichier de projet qu'on vous envoie est donc sans danger.
