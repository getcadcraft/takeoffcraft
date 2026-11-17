---
title: Assemblages et formules
summary: Ajoutez des composants à un poste et laissez les formules transformer sa longueur, sa surface ou son comptage en montants, lisses, panneaux, béton et quincaillerie, avec un exemple détaillé de mur.
keywords: assemblage, composants, formule, montants, cloison sèche, panneaux, lisses, béton, cubic yards, quincaillerie, recette, type, éléments du poste
from: 12891a21
---

L'**assemblage** d'un poste est une liste de composants, chacun avec sa formule de quantité et ses propres taux de chute et de prix. La formule utilise les totaux mesurés du poste : un seul métré d'un mur donne donc les montants, les lisses et les panneaux en même temps, et ils se mettent à jour au fur et à mesure que vous mesurez.

## Variables utilisables

| Type d'élément | Variables |
|---|---|
| Linéaire | `L` longueur, `H` hauteur, `A` surface de mur (L × H), `N` nombre de tronçons |
| Surface | `A` surface, `P` périmètre (contour + réservations), `H` profondeur ou épaisseur, `N` nombre de surfaces |
| Comptage | `N` comptage |

Les valeurs sont exprimées dans les unités du poste lui-même : pieds et pieds carrés pour les postes en LF et SF, mètres et mètres carrés pour les postes en m et m². Pour un poste en SY, `A` est en verges carrées, tandis que `P` et `H` restent en pieds.

Les formules utilisent `+ - * /` (ou × ÷), des parenthèses, des nombres et les fonctions `ceil`, `floor`, `round`, `min`, `max` et `abs`. Les règles complètes figurent dans [Langage des formules](topic:formulas).

## Exemple détaillé : un mur intérieur

Supposons que vous ayez métré **Cloison intérieure type A** comme élément linéaire : 4 tronçons totalisant 120 LF, avec {{ui:Hauteur}} réglée sur `9'-0"`. Ses valeurs **Mesurées** affichent L = 120, N = 4, A = 1,080 (SF de mur, une face).

1. Sélectionnez le poste sous {{ui:Éléments (I)}}.
2. Dans {{ui:Assemblage}}, choisissez {{ui:Ajouter un composant}}.
   Un composant nommé « Composant » apparaît, avec la formule `L` et son résultat en dessous.
3. Saisissez `Studs 16 in o.c.` dans {{ui:Nom}} et `EA` dans {{ui:Unité}}.
4. Dans {{ui:Formule de quantité}}, saisissez `ceil(L * 12 / 16) + N`.
   Le résultat se met à jour pendant la saisie : « = 94 EA ». C'est un montant tous les 16 pouces sur 120 pieds (90), plus un supplémentaire pour fermer chacun des 4 tronçons.
5. Choisissez à nouveau {{ui:Ajouter un composant}} pour les lisses : nom `Plates, top and bottom`, unité `LF`, formule `L * 2`. Résultat : 240 LF.
6. Ajoutez le panneau : nom `Gypsum board 4x8, both sides`, unité `sheets`, formule `ceil(A * 2 / 32)`. Résultat : 68 sheets (2,160 SF de panneaux ÷ 32 SF par panneau = 67.5, arrondi au supérieur).
7. Renseignez pour chaque composant {{ui:Chute %}}, {{ui:Matériau $}} et {{ui:Main-d'œuvre $}}.
   Chaque composant obtient sa propre ligne sous le poste dans {{ui:Quantités}}, chiffrée comme un poste, et le {{ui:Total du chantier}} l'inclut.

Si le coût du mur est entièrement porté par les composants, laissez les taux de matériau et de main-d'œuvre du poste à 0, sinon il est compté deux fois.

:::tip
La chute s'applique après la formule et n'est pas arrondie : 68 sheets avec 10 % de chute donnent 74.8 sheets. Pour commander des panneaux entiers, placez la chute dans la formule, par exemple `ceil(A * 2 / 32 * 1.1)`, et laissez la chute du composant à 0.
:::

## Autres formules

| Ce que c'est | Poste | Formule |
|---|---|---|
| Montants à 24 in d'entraxe | Linéaire | `ceil(L / 2) + N` |
| Isolant en rouleaux, SF | Linéaire avec hauteur | `A` |
| Peinture, deux faces, gallons à 350 SF | Linéaire avec hauteur | `ceil(A * 2 / 350)` |
| Cartons de carrelage à 15 SF, 10 % en plus | Surface | `ceil(A * 1.1 / 15)` |
| Plinthe ou finition de rive, LF | Surface | `P` |
| Béton, cubic yards | Surface avec profondeur | `A * H / 27` |
| Béton arrondi au quart de yard supérieur | Surface avec profondeur | `ceil(A * H / 27 * 4) / 4` |
| Paumelles, trois par porte | Comptage | `N * 3` |
| Au moins une boîte, une pour 12 | Comptage | `max(1, ceil(N / 12))` |

## Quand une formule est fausse

La ligne sous la formule affiche un message d'erreur, par exemple `"X" is not a measured value here. Use L, H, A, N.` ou `A ")" is missing.` Le composant n'a alors aucun montant, sa ligne dans {{ui:Quantités}} affiche « Erreur de formule : … », et l'en-tête indique « Incomplet : 1 erreur de formule (non incluse dans les totaux) ». Corrigez la formule et les totaux se mettent à jour.

Une formule qui divise par zéro est aussi une erreur (« La formule divise par zéro. »), par exemple `A / H` sur un poste sans profondeur.

## Limites

- Les formules s'appliquent aux **totaux** du poste, et non tronçon par tronçon. `ceil(L * 12 / 16) + N` ajoute un montant par tronçon ; l'arrondi par tronçon n'est pas encore disponible.
- Une formule ne peut utiliser que les variables de son propre poste, pas celles d'un autre poste.
- Jusqu'à 50 composants par poste, 500 caractères par formule.

## Retirer un composant

Choisissez {{ui:Retirer le composant}} sous celui-ci. Vous pouvez l'annuler avec {{key:Mod+Z}}.
