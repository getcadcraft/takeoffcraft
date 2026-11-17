---
title: Unités
summary: Les unités dans lesquelles un poste peut être exprimé, celles des variables de formule, et la façon dont les unités impériales et métriques se mélangent.
keywords: unités, lf, sf, sy, sq, verges carrées, carrés de couverture, acres, hectares, mètres, mètres carrés, ea, unité, métrique, impérial, conversion, unité par défaut
from: b7bf0528
---

## Unités des postes

| Type de poste | Unité | Nom |
|---|---|---|
| Linéaire | LF | pieds linéaires (par défaut) |
| Linéaire | m | mètres |
| Surface | SF | pieds carrés (par défaut) |
| Surface | SY | verges carrées |
| Surface | SQ | carrés de couverture (100 pieds carrés) |
| Surface | ac | acres |
| Surface | m² | mètres carrés |
| Surface | ha | hectares |
| Comptage | EA | unité |

Modifiez-la avec {{ui:Unité}} dans l'éditeur de poste à tout moment, même après avoir mesuré ; la quantité est convertie immédiatement.

La liste {{ui:Unité}} affiche les unités activées dans {{ui:Paramètres}} › {{ui:Général}} › {{ui:Unités}}, ainsi que toujours l'unité propre du poste. Un nouveau poste démarre dans l'unité de longueur ou de surface marquée d'une étoile à cet endroit, lorsqu'elle fait partie des unités du poste ; sinon en LF ou SF. Voir [Unités, valeurs saisies et listes d'unités](common:unit-lists).

## Unités des variables de formule

| Unité du poste | L, P, H | A |
|---|---|---|
| LF | pieds | pieds carrés (surface de mur) |
| m | mètres | mètres carrés (surface de mur) |
| SF | pieds | pieds carrés |
| SY | pieds | verges carrées |
| SQ | pieds | carrés |
| ac | pieds | acres |
| m² | mètres | mètres carrés |
| ha | mètres | hectares |

Pour les postes en SY, `A` est en verges carrées tandis que `P` et `H` restent en pieds. Un volume issu d'un poste en SY vaut `A * 9 * H / 27` verges cubes ; utiliser SF pour les dalles est plus simple.

## Où les unités sont fixes

Certains affichages utilisent toujours les pieds :

- l'affichage en direct dans la barre d'état pendant le tracé (pieds-pouces, SF),
- **Repère sélectionné** (pieds-pouces, LF et SF),
- le résultat de la vérification (pieds-pouces, avec pieds décimaux et mètres),
- les longueurs de segments et les périmètres dans la feuille Repères du tableur (pieds-pouces).

Les totaux des postes, le tableau {{ui:Quantités}}, les formules et la feuille Estimation utilisent l'unité propre du poste.

## Les échelles et les unités sont distinctes

L'échelle d'une feuille indique la taille du dessin ; l'unité d'un poste indique comment le rapporter. Un dessin métrique à `1:100` peut être métré en LF, et un dessin impérial en m². L'étalonnage accepte toutes les unités : `24'-6"`, `7.5 m`, `7500 mm`.

## Précision

TakeoffCraft mesure exactement à partir des points sur lesquels vous cliquez, y compris les longueurs et surfaces réelles des arcs, et n'arrondit pas les quantités. L'affichage arrondit les longueurs au 1/16 de pouce et les décimales à deux chiffres. Les montants ne sont arrondis qu'aux montants étendus, au centime.
