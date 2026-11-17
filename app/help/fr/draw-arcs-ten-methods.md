---
title: Tracer des arcs selon dix méthodes
summary: Choisissez le mode de tracé d'un arc, à trois points, ou par début, centre, fin, angle, longueur, direction ou rayon.
keywords: arc, arcs, courbe, mur courbe, 3 points, rayon, angle, longueur de corde, direction, centre, début, fin, méthode d'arc
from: 5e3e0db6
---

## Ce que vous allez faire

Tracez un bord courbe dans un tronçon linéaire, une surface ou une découpe, en utilisant la méthode d'arc qui correspond aux cotes dont vous disposez.

## Étapes

1. Commencez un tronçon, un contour ou une découpe, et placez le point où commence la courbe.
2. Activez {{ui:Arc}} dans la barre d'outils, ou appuyez sur {{key:R}}.
3. Ouvrez {{ui:Méthode d'arc}} dans la barre de feuille. Elle n'apparaît que lorsque Arc est activé. Choisissez l'une des méthodes suivantes : 3-Point, Start, Center, End, Start, Center, Angle, Start, Center, Length, Start, End, Angle, Start, End, Direction, Start, End, Radius, Center, Start, End, Center, Start, Angle ou Center, Start, Length.
4. Suivez la barre d'état. Elle indique ce que l'arc attend : son centre, son point de fin, son angle, sa longueur, sa direction ou son rayon. Cliquez sur un point, ou saisissez le nombre (angle, longueur, rayon et direction).
5. Une fois la dernière saisie donnée, l'arc est ajouté au tronçon. {{key:Esc}} annule l'arc, {{key:Backspace}} revient à l'étape précédente, et {{key:R}} désactive Arc.

## Remarques

- Un arc est refusé, avec un message dans la barre d'état, lorsque ses points coïncident ou sont alignés, ou lorsque le rayon ne peut pas atteindre le point de fin.
- Sa longueur est la longueur exacte de l'arc, et les anciens fichiers s'ouvrent de la même façon. Pour en savoir plus : [Mesurer les tronçons linéaires](topic:measure-linear#arcs-and-curved-walls).
