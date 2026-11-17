---
title: Comparer une feuille révisée et reporter le métré
summary: Superposer l'ancienne feuille à sa révision, les aligner, voir ce qui a changé, et reporter le métré sur la nouvelle feuille avec les repères à vérifier signalés.
keywords: révision, révisé, comparer, superposition, ancien, nouveau, modifications, additif, bulletin, réémission, reporter le métré, transférer, reporter, aligner, signalé, vérifier
from: 3a1d9fe0
---

Lorsqu'une feuille est réémise, vous n'avez pas à refaire le métré. Ouvrez l'ancien PDF et le nouveau, comparez les deux feuilles et reportez le métré. TakeoffCraft signale chaque repère dont le dessin a changé : vous vérifiez ceux-là et conservez les autres.

## Comparer

1. Ouvrez les deux PDF : l'ancien jeu et le jeu révisé ({{ui:Ouvrir des PDF}} ; ils peuvent être dans un seul fichier ou dans plusieurs).
2. Affichez la feuille **nouvelle**.
3. Choisissez {{ui:Comparer}} dans la barre de feuille, sous le dessin.
4. Choisissez l'ancienne feuille dans la liste. TakeoffCraft propose la feuille portant le même numéro dans l'autre PDF, ou la même page. Choisissez **Comparer**.

L'ancien dessin se superpose maintenant au nouveau, en rouge. Là où les deux concordent, les traits rouges se placent sur les noirs ; là où ils diffèrent, vous voyez des traits rouges seuls (supprimés) et des traits noirs seuls (ajoutés). Une barre en bas de la feuille regroupe les étapes ci-dessous ; {{key:Esc}} ou {{ui:Fermer}} termine la comparaison.

## Aligner les dessins

Les feuilles réémises sont souvent tracées légèrement décalées : déplacées sur la page, ou à une taille un peu différente. Si le dessin rouge ne se superpose pas au noir, choisissez **Aligner sur deux points** et cliquez quatre fois :

1. un point de l'ancien dessin (rouge), par exemple le centre d'un poteau ou un angle de bâtiment,
2. le même point sur le nouveau dessin (noir),
3. un second point sur le dessin rouge, éloigné du premier,
4. le même point sur le dessin noir.

Le dessin rouge se déplace, pivote et se met à l'échelle sur le noir. La barre d'état indique de combien le nouveau dessin est plus grand (« taille × 1.000 » s'il est identique). Zoomez pour placer les points : plus vous cliquez précisément, meilleur est l'alignement.

## Rechercher les modifications

Choisissez **Rechercher les modifications**. TakeoffCraft compare le tracé des deux dessins : ce qui n'existe que sur l'ancienne feuille passe en rouge, ce qui n'existe que sur la nouvelle passe en bleu, et la barre d'état les compte. Les traits décalés de très peu (un retracé) ne sont pas comptés comme modifications.

Il examine aussi chaque repère de l'ancienne feuille et compte ceux qui se trouvent là où le dessin a changé :

- un tronçon ou une surface lorsque le dessin a changé à l'une de ses extrémités ou de ses angles, ou sur au moins environ un sixième de sa longueur ;
- un comptage lorsque quelque chose a changé juste à côté.

## Déplacer le métré

Choisissez **Déplacer le métré ici**. Chaque repère de l'ancienne feuille est reporté sur la nouvelle, via l'alignement, en une seule étape d'annulation. Ceux situés à côté d'une modification sont signalés : ils sont dessinés avec un halo orange, et la barre de feuille affiche « (n) à vérifier ».

Si la nouvelle feuille n'avait pas d'échelle, elle prend celle de l'ancienne feuille (ajustée si les dessins ont dû être mis à l'échelle pour s'aligner). Si elle en avait déjà une autre, TakeoffCraft le demande d'abord : les repères reportés sont mesurés à l'échelle de la nouvelle feuille.

## Vérifier les repères signalés

1. Choisissez « (n) à vérifier » dans la barre de feuille. La vue fait un zoom sur le prochain repère signalé et le sélectionne ; son panneau indique pourquoi il est signalé.
2. Corrigez le repère si le dessin a changé dessous (faites glisser ses angles, ajoutez ou supprimez des repères, ou refaites-le).
3. Choisissez **Vérifié** dans son panneau. Le signalement disparaît, et le compteur de la barre de feuille diminue.

Les signalements sont enregistrés avec le métré : vous pouvez donc les vérifier plus tard.

:::note
La comparaison fonctionne aussi bien sur les PDF vectoriels que sur les numérisations, car elle compare ce qui est dessiné. Une numérisation déformée ou étirée ne s'alignera peut-être qu'approximativement avec deux points ; vérifiez alors davantage de repères à l'œil.
:::
