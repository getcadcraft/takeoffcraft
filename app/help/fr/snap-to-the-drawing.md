---
title: Accrochage aux lignes du dessin
summary: Pendant que vous mesurez ou étalonnez, les points se calent sur les lignes vectorielles du PDF, aux extrémités, milieux, croisements ou en n'importe quel point d'une ligne, avec un marqueur qui indique lequel.
keywords: accrochage, accrochage aux objets, extrémité, milieu, intersection, proche, vectoriel, lignes, précis, exact, F3, aimant, angle
from: 41d29e9b
---

La plupart des jeux de plans sont des PDF vectoriels : leurs murs et leurs contours sont de vraies lignes, pas des pixels. Pendant que vous mesurez, TakeoffCraft cale vos clics sur ces lignes : un tronçon commence exactement au coin d'un mur, et un étalonnage lit la cote que le dessinateur a tracée, et non le pixel sur lequel vous cliquez.

L'{{ui:Accrochage}} est activé au démarrage. Activez-le ou désactivez-le avec {{ui:Accrochage}} dans la barre d'état ou avec {{key:F3}} ; ce réglage est conservé dans ce navigateur (il se trouve aussi dans [Paramètres](topic:settings)).

## Points d'accrochage

Lorsque le pointeur se trouve à moins d'environ 10 pixels écran d'une ligne, un marqueur indique où le clic va se poser, avec son nom :

| Marqueur | Nom | Où |
|---|---|---|
| Carré | **Extrémité** | L'extrémité d'une ligne, ou un angle où des lignes se rejoignent. Les deux extrémités d'une courbe comptent ; les points situés le long de celle-ci non. |
| Triangle | **Milieu** | Le milieu d'une ligne droite. |
| Croix | **Intersection** | Là où deux lignes se croisent, ou là où l'une se termine sur l'autre. |
| Sablier | **Sur la ligne** | Le point le plus proche sur une ligne, lorsqu'aucune extrémité, aucun milieu ni aucun croisement n'est proche. |

C'est l'extrémité, le milieu ou le croisement le plus proche qui l'emporte. Ce n'est que si aucun n'est proche que le point se place sur la ligne elle-même. Faites un zoom pour choisir entre des points très rapprochés : les 10 pixels sont des pixels écran, donc à un zoom plus fort ils couvrent une moindre partie de la feuille.

## Où il fonctionne

L'{{ui:Accrochage}} fonctionne dans {{ui:Linéaire}}, {{ui:Surface}}, {{ui:Cercle}}, {{ui:Découpe}}, {{ui:Étalonner}} et {{ui:Vérifier}}, ainsi que lorsque vous faites glisser le coin d'un repère sélectionné. Il place aussi les points d'arc. {{ui:Compter}}, {{ui:Comptage auto}} et le collage ne sont pas accrochés.

Un point accroché l'emporte sur l'accrochage à 45° de {{key:Shift}} : pour dessiner à 45° en dehors des lignes, désactivez d'abord l'{{ui:Accrochage}} avec {{key:F3}}.

:::tip
Étalonnez avec l'accrochage activé. Cliquez près des deux extrémités d'une ligne de cote ou d'un mur dont vous connaissez la dimension : les deux points se posent exactement sur le dessin, et l'échelle est exacte (la barre d'état indique alors le préréglage correspondant).
:::

## Feuilles sur lesquelles il ne peut pas s'accrocher

- **Les feuilles numérisées** sont des images sans lignes auxquelles s'accrocher. La barre d'état affiche « Cette feuille n'a aucune ligne à laquelle s'accrocher (une page numérisée est une image). » et les points se posent là où vous cliquez.
- **Les dessins très volumineux** : l'accrochage lit jusqu'à 400,000 segments de ligne par feuille. Sur une feuille en contenant davantage, il l'indique et ne s'accroche qu'aux premiers.
- **Le texte** n'est pas accroché, sauf si le PDF dessine ses lettres comme des lignes (certains traceurs le font).

Les lignes de la feuille sont lues la première fois que vous l'ouvrez, en arrière-plan ; sur une grande feuille, les marqueurs peuvent mettre une seconde à apparaître.
