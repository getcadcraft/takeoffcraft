---
title: Régler l'échelle
summary: Donnez une échelle à chaque feuille avec un prédéfini ou en étalonnant sur une cote connue, vérifiez-la, et comprenez pourquoi les feuilles sans échelle sont exclues des totaux.
keywords: détecter l'échelle, lire l'échelle, échelle à partir du texte, toutes les feuilles, échelle, étalonner, prédéfini, vérifier l'échelle, cote connue, sans échelle, rapport, régler l'échelle
from: 8f0148e6
---

Chaque feuille a sa propre échelle. Vous la réglez, ou vous laissez TakeoffCraft la lire dans le texte des feuilles (ci-dessous), puis vous la vérifiez. Tant qu'une feuille n'en a pas, {{ui:Linéaire}}, {{ui:Surface}}, {{ui:Cercle}} et {{ui:Découpe}} refusent de mesurer dessus. {{ui:Compter}} et {{ui:Comptage auto}} fonctionnent sans échelle.

La liste des feuilles affiche l'échelle de chaque feuille, ou **Sans échelle**. La barre sous la feuille ouverte affiche la même information.

## Utiliser un prédéfini (lorsque le PDF est imprimé à taille réelle)

1. Ouvrez la feuille.
2. Ouvrez la liste {{ui:Prédéfini}} du groupe {{ui:Échelle}}.
3. Choisissez l'échelle imprimée sur le dessin, par exemple `1/8" = 1'-0"` sous Architecturales.
   La barre d'état indique « Échelle de cette feuille : 1/8" = 1'-0" ».
4. Vérifiez-la (ci-dessous).

Un prédéfini suppose que le PDF est au format réel pour lequel le dessin a été réalisé. Si le PDF a été créé avec « ajuster à la page », ou s'il s'agit d'un jeu à demi-échelle, le prédéfini est faux. Étalonnez à la place.

La liste complète se trouve dans [Échelles prédéfinies](topic:scale-presets).

## Lire les échelles dans le texte des feuilles

La plupart des dessins indiquent leur échelle : `SCALE: 1/4" = 1'-0"` dans le cartouche, `1:100` sous une vue. TakeoffCraft peut la lire et régler toutes les feuilles d'un coup.

1. Ouvrez la liste {{ui:Prédéfini}} et choisissez {{ui:À partir du texte des feuilles…}} (en haut).
2. La liste affiche chaque feuille : son échelle actuelle, et ce que dit son texte — **Indique 1/4" = 1'-0"**, **Aucune échelle dans son texte**, ou **Indique « sans échelle »** (NTS).
3. Les feuilles sans échelle qui en indiquent une sont cochées. Cochez ou décochez-les, puis choisissez {{ui:Régler les échelles cochées}}. Un {{key:Mod+Z}} les annule toutes.
4. Vérifiez une cote sur chaque feuille avec {{ui:Vérifier}} (ci-dessous) : un prédéfini n'est juste que si le PDF est imprimé à taille réelle.

Il lit les notations architecturales (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), ingénieur (`1" = 20'`) et métriques (`1:50`) qui correspondent à un [prédéfini](topic:scale-presets). Lorsqu'une feuille indique plusieurs échelles (un plan avec des détails agrandis), il retient celle qu'elle indique le plus souvent, et celle écrite après le mot SCALE compte double ; les autres sont affichées en rouge pour que vous les vérifiiez. Une feuille numérisée n'a pas de texte : réglez son échelle à la main.

## Étalonner sur une cote connue

Utilisez cette méthode lorsqu'il n'y a pas d'échelle imprimée en laquelle vous avez confiance, que le jeu a été redimensionné, ou que la feuille indique « sans échelle » mais comporte des cotes.

1. Ouvrez la feuille et zoomez sur une longue cote que vous connaissez, comme l'entraxe d'une trame ou une cote hors tout du bâtiment. Plus elle est longue, plus c'est précis.
2. Choisissez {{ui:Étalonner}} dans le groupe {{ui:Échelle}}, ou appuyez sur {{key:K}}.
3. Cliquez sur une extrémité de la cote. Zoomez sur chaque extrémité pour plus de précision ; vous pouvez zoomer et faire un panoramique entre les clics.
4. Cliquez sur l'autre extrémité. Maintenez {{key:Shift}} pour garder la ligne à 0°, 45° ou 90°.
   La boîte de dialogue **Étalonner cette feuille** s'ouvre.
5. Saisissez la distance réelle dans **Distance réelle**, par exemple `24'-6 1/2"`, `24.5` (pieds décimaux), `30"` ou `7.5 m`. Voir [Saisie des longueurs, prix et pourcentages](topic:entry-formats).
6. Choisissez {{ui:Régler l'échelle}}.
   La barre d'état affiche l'échelle sous la forme « 1" = (n)' », et lorsqu'elle est à moins de 0.5% d'un prédéfini, elle indique lequel, par exemple « qui correspond à 1/4" = 1'-0" (choisissez ce prédéfini pour une échelle exacte) ».
   TakeoffCraft revient à l'outil {{ui:Sélectionner}}.

Lorsque l'étalonnage correspond à un prédéfini, choisir ce prédéfini donne une échelle exacte, au lieu d'une échelle qui dépend de l'endroit où vous avez cliqué.

## Vérifier l'échelle

Vérifiez toujours une nouvelle échelle sur une deuxième cote.

1. Choisissez {{ui:Vérifier}} dans le groupe {{ui:Échelle}}, ou appuyez sur {{key:D}}.
2. Cliquez sur les deux extrémités d'une cote imprimée sur le dessin.
   La barre d'état affiche « Vérifier : 12'-6" » avec la même longueur en pieds décimaux et en mètres, et la ligne de contrôle reste sur la feuille avec sa longueur.
3. Comparez-la à la cote imprimée. Si elle diffère, étalonnez sur une cote plus longue.

Appuyez sur {{key:Esc}} pour effacer la ligne de contrôle.

## Changer une échelle

Choisissez un autre prédéfini ou étalonnez à nouveau. Si la feuille contient déjà des mesures, TakeoffCraft demande **Changer l'échelle de cette feuille ?** et indique combien de mesures seront recalculées. Choisissez {{ui:Changer l'échelle}}. Chaque tronçon et chaque surface de la feuille est remesuré à la nouvelle échelle. Vous pouvez l'annuler avec {{key:Mod+Z}}.

## Pourquoi les feuilles sans échelle ne sont pas comptées comme zéro

Un repère sur une feuille sans échelle n'a pas de longueur ni de surface réelle. TakeoffCraft ne le compte jamais comme zéro, ce qui rendrait votre estimation discrètement trop basse. À la place, il :

- exclut ces repères des totaux,
- affiche « +(n) sans échelle » à côté du poste dans {{ui:Quantités}},
- affiche « Incomplet : (n) repères sur des feuilles sans échelle (non comptés dans les totaux) » dans l'en-tête du tableau,
- écrit le nombre dans la colonne des remarques de l'export tableur.

Cela peut arriver lorsque vous ouvrez un projet dont les échelles n'ont jamais été réglées. Donnez une échelle à la feuille et les repères sont comptés immédiatement. Les repères de comptage sont toujours comptés ; ils n'ont pas besoin d'échelle.

## Conseils

- Réglez l'échelle de chaque feuille que vous allez mesurer avant de commencer. Parcourez la liste des feuilles à la recherche de **Sans échelle** pour trouver celles qui restent (la zone de recherche porte sur les noms des feuilles, pas sur les échelles).
- Les détails et plans agrandis d'une même feuille utilisent souvent une autre échelle. TakeoffCraft n'a qu'une échelle par feuille ; voir [Ce qui n'est pas encore disponible](topic:not-built-yet).
- Dessins métriques : choisissez un prédéfini métrique comme `1:100`, ou étalonnez avec une distance métrique comme `6000 mm`.
