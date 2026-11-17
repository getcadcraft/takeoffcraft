---
title: Toitures et pentes
summary: Donnez sa pente à une surface pour mesurer la surface de toiture depuis le plan, et mesurez les rampants, arêtiers et noues le long de leur pente.
keywords: toiture, pente, inclinaison, coefficient de pente, montée, projection, 6:12, rampant, arêtier, noue, pignon, couverture, carrés, surface inclinée, longueur réelle, surface en plan
from: 38225b60
---

Un plan de toiture montre chaque pan de toit à plat, vu d'en haut. La toiture elle-même est plus grande : un pan à 6:12 a environ 12% de surface en plus que son plan, et ses bords inclinés sont plus longs qu'ils n'en ont l'air. Donnez sa pente au poste et TakeoffCraft mesure le long de la pente.

## Saisir une pente

Une pente est la montée pour 12 de projection horizontale, comme sur les symboles de pente du plan de toiture. Saisissez-la sous la forme `6:12`, `6/12` ou simplement `6` ; une autre projection fonctionne aussi (`4:10` correspond à 4.8:12). Un angle fonctionne avec le signe degré : `26.57°`. Vide ou `0` signifie plat.

## Surfaces de toiture

1. Créez un poste de surface pour la couverture, ou ouvrez celui que vous avez.
2. Dans ses réglages, saisissez la **Pente**, par exemple `6:12`.
3. Tracez le contour de chaque pan sur le plan avec {{ui:Surface}}, comme d'habitude.

Chaque pan compte sa surface en plan multipliée par le coefficient de pente : √(1 + (montée ÷ 12)²), soit 1.118 à 6:12 et 1.414 à 12:12. Sélectionnez un pan pour voir sa **Surface** (sur la pente), sa **Surface en plan** et le **Coefficient de pente**.

Pans d'une autre pente : sélectionnez le pan et saisissez sa propre **Pente** dans son panneau. Laissez-la vide pour utiliser celle du poste. La vue de contrôle 3D, les ouvrages (`A` est la surface inclinée), les coûts et l'export utilisent tous la surface inclinée. Les déductions sur un pan incliné, comme les fenêtres de toit, sont retirées à la même pente.

Le périmètre (`P`) reste le périmètre en plan. Mesurez les égouts, rampants, arêtiers et noues en tant que tronçons (ci-dessous).

## Rampants, arêtiers et noues

1. Créez un poste linéaire, par exemple « Rampant » ou « Arêtiers ».
2. Réglez son **Inclinaison** sur **Rampant** (un bord incliné, comme celui d'un pignon) ou **Arêtier ou noue** (la ligne où deux pans se rejoignent), et saisissez la **Pente** des pans de toit.
3. Tracez les tronçons sur le plan avec {{ui:Linéaire}}.

Un rampant compte sa longueur en plan multipliée par le coefficient de pente. Un arêtier ou une noue court à 45° sur le plan entre deux pans de même pente ; sa longueur réelle est donc sa longueur en plan multipliée par √(1 + (montée ÷ 12)² ÷ 2) : 1.061 à 6:12, 1.225 à 12:12.

Un même tronçon peut mêler les deux. Sélectionnez-le : chaque segment de son panneau possède une liste d'inclinaisons — **Celle du poste** (le réglage du poste), **À plat**, **Rampant** ou **Arêtier ou noue** — et sa longueur le long de la pente. La **Pente** propre à un tronçon, dans le panneau, remplace celle du poste pour tous ses segments. Le panneau affiche aussi la **Longueur en plan**, et les étiquettes de la feuille indiquent les longueurs le long de la pente.

Les déductions fonctionnent toujours : un segment déduit ne compte rien, incliné ou non.

:::note
Les arêtiers et noues supposent que les deux pans ont la même pente. Pour des pans de pentes différentes, mesurez l'arêtier par sa longueur réelle ailleurs, ou tracez-le comme un rampant avec une pente équivalente.
:::
