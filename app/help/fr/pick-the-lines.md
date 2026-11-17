---
title: "Relever les lignes du PDF"
summary: "Cliquez sur une ligne d'un PDF vectoriel pour mesurer tout son tracé connecté, ou à l'intérieur d'un contour fermé pour son aire, avec la tolérance d'écart affichée et une annulation par segment."
keywords: tracé, relever, lignes, connecté, tronçon entier, suivre, contour, périmètre, écart, tolérance, pont, segments, tabulation, vectoriel, aire à partir des lignes, p
from: c22526ae
---

Sur un PDF vectoriel, les murs et les contours sont de vraies lignes. {{ui:Tracé}} ({{key:P}}) les prend telles qu'elles sont dessinées : un clic sur une ligne mesure tout ce qui y est relié, de bout en bout, de sorte que vous n'avez pas à suivre un mur en cliquant sur ses angles. La feuille doit avoir une échelle. Une page numérisée n'a pas de lignes à relever ; utilisez [Linéaire](topic:measure-linear) ou [Aire](topic:measure-areas) dans ce cas.

## Relever un tracé ou un contour

1. Choisissez {{ui:Tracé}}. La ligne sous le pointeur est mise en évidence, ainsi que les autres tracés qu'elle pourrait former, en traits fins.
2. Cliquez sur une ligne : tout le tracé connecté est relevé. La barre sous la barre d'outils indique ses segments, sa longueur, la tolérance d'écart et le nombre d'écarts comblés. Un tracé qui revient à son point de départ est fermé et indique aussi son périmètre.
3. Ou cliquez à l'intérieur d'un contour fermé, loin de toute ligne : le contour autour de ce point est relevé comme une aire. Le plus petit vient en premier ; {{key:Tab}} essaie le suivant, plus grand.
4. Appuyez sur {{key:Enter}} (ou faites un clic droit, ou un double-clic) pour ajouter les repères. Un tracé relevé devient un repère d'un **poste de type Linéaire**, et un contour un repère d'un **poste de type Surface** : le poste actif s'il est de ce type, sinon le plus récent de ce type. Sans aucun poste, le formulaire de nouveau poste s'ouvre, et rien n'est ajouté tant que vous n'appuyez pas de nouveau sur {{key:Enter}}. Tout ce qui a été relevé est ajouté en une seule étape d'annulation.

## La tolérance d'écart

Les dessinateurs laissent de petits trous là où les lignes devraient se rejoindre. Deux lignes se joignent lorsque leurs extrémités sont plus proches que la **tolérance d'écart**. Elle commence à 1.5 point sur la feuille (affichée en pieds et pouces à l'échelle de la feuille) : un anneau en pointillés de cette largeur suit le pointeur et se place sur chaque extrémité du tracé situé sous lui. Chaque trou comblé est entouré en orange sur un tracé relevé, et la barre les compte.

{{key:]}} élargit la tolérance, {{key:[}} la réduit. Un tracé relevé est aussitôt rejoint à la nouvelle tolérance. À une jonction, le tracé continue tout droit, par le chemin qui dévie le moins, et quitte la dérivation.

## Touches

| Touche ou action | Ce qu'elle fait |
|---|---|
| Clic | Relève le tracé sous le pointeur, ou le contour qui l'entoure. |
| {{key:Shift}} + clic | Ajoute un autre tracé ou contour à ce qui est relevé. |
| {{key:Tab}} | Essaie le tracé suivant sous le pointeur, ou le contour plus grand suivant. |
| {{key:Backspace}} ou {{key:Mod+Z}} | Retire le dernier segment du dernier tracé relevé, un segment à la fois. Un tracé sans plus de segments disparaît. Sans rien de relevé, {{key:Mod+Z}} est l'annulation habituelle. |
| {{key:[}} et {{key:]}} | Tolérance d'écart plus étroite et plus large. |
| {{key:Enter}} | Ajoute les repères. |
| {{key:Esc}} | Efface ce qui est relevé. |

## Bon à savoir

- Une courbe du dessin est une suite de courts segments droits : sa longueur est donc légèrement inférieure à celle de l'arc réel. Pour un arc exact, mesurez à partir du fichier du dessin ([Mesurer depuis un dessin](topic:measure-from-a-drawing)).
- Un écart comblé compte comme un saut en ligne droite par-dessus ; le périmètre d'un contour fermé le comprend donc.
- Seuls les traits et les remplissages des tracés propres à la page sont des lignes. Le texte écrit en lettres et les images ne le sont pas.
