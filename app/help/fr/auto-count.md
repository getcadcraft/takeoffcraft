---
title: Comptage automatique d'un symbole
summary: Encadrez un symbole, laissez TakeoffCraft trouver les autres sur cette feuille ou sur toutes les feuilles ouvertes, vérifiez les correspondances avec le curseur et ajoutez-les en une seule étape.
keywords: tout angle, pivoté, tourné, autre échelle, échelle différente, comptage auto, comptage automatique, recherche de symboles, trouver des symboles, motif, gabarit, correspondance, détecter, outil de comptage
from: fa68a6c1
---

{{ui:Comptage auto}} trouve chaque copie d'un symbole après que vous en avez encadré un. Vous examinez ensuite les correspondances sur la feuille et ajoutez celles que vous acceptez comme repères de comptage. C'est une aide, pas une garantie : vérifiez toujours avant d'ajouter.

## Trouver les symboles

1. Créez ou cliquez sur un poste de comptage sous {{ui:Éléments (I)}}.
2. Ouvrez une feuille où le symbole apparaît.
3. Choisissez {{ui:Comptage auto}} dans la barre d'outils, ou appuyez sur {{key:S}}.
   Une barre apparaît en haut de la feuille : « Faites glisser un cadre autour d'un symbole sur cette feuille. »
4. Pour chercher sur toutes les feuilles ouvertes, et pas seulement celle-ci, cochez {{ui:Chercher dans toutes les feuilles ouvertes}}.
5. Zoomez pour bien voir le symbole, puis faites glisser un cadre bien ajusté autour d'une copie. Incluez le symbole en entier : le blanc autour est rogné.
   La barre affiche « Recherche… » avec une barre de progression et un bouton {{ui:Annuler}}. La page reste réactive : vous pouvez zoomer, faire un panoramique et passer d'une feuille à l'autre. Choisir un autre outil, ou {{key:Esc}}, annule la recherche.
6. Une fois la recherche terminée, les correspondances apparaissent sur la feuille sous forme de cadres de la couleur du poste, et la barre affiche un résumé tel que « 22 correspondances, 19 à ajouter (3 déjà comptées). Cliquez sur un cadre pour le rejeter ou le rétablir. »

Dans {{ui:Comptage auto}}, faire glisser sur la feuille trace un cadre au lieu de faire un panoramique. Pour faire un panoramique, maintenez {{key:Space}} et faites glisser, ou faites glisser avec le bouton du milieu.

## Examiner les correspondances

- **Cliquez sur un cadre** pour le rejeter. Un cadre rejeté est en pointillés et barré. Cliquez à nouveau dessus pour le rétablir.
- **Déplacez le curseur {{ui:Correspondance}}** (de 50 % à 95 %, réglé par défaut sur 75 %). Une valeur plus haute n'affiche que les correspondances proches ; une valeur plus basse en affiche de moins strictes. Le curseur ne fait que filtrer ce qui a été trouvé : il ne relance pas la recherche.
- **Déjà compté** : les correspondances situées à un endroit qui porte déjà un repère de comptage de ce poste commencent rejetées, afin de ne rien compter deux fois.
- **Autres feuilles** : si vous avez cherché sur toutes les feuilles ouvertes, passez de l'une à l'autre avec la liste des feuilles ou {{key:PageDown}} et examinez chacune. Le résumé indique le nombre de feuilles qui ont des correspondances.

## Les ajouter

Choisissez {{ui:Ajouter}}. Le bouton indique le nombre, par exemple « Ajouter 19 repères ».
Les repères de comptage sont ajoutés au centre de chaque cadre accepté : « 19 repères de comptage ajoutés à « Prise duplex ». Ctrl+Z les supprime tous. »

Le lot entier constitue une seule étape d'annulation : un seul {{key:Mod+Z}} le supprime.

Pour abandonner la révision sans rien ajouter, choisissez {{ui:Abandonner}} ou appuyez sur {{key:Esc}}. Choisir un autre outil l'abandonne aussi.

## Ce qu'il trouve et ce qu'il manque

TakeoffCraft compare le dessin, en pixels, avec le symbole que vous avez encadré.

- Il trouve le symbole tourné de 0°, 90°, 180° et 270°. Cochez {{ui:Tout angle (plus lent)}} sur la barre de comptage automatique avant de tracer le cadre pour le trouver aussi à n'importe quel angle : il essaie tous les 15°, puis affine chaque résultat au demi-degré près. Cela prend environ six fois plus de temps. Il ne trouve pas un symbole en miroir (sauf si le symbole est identique en miroir).
- Avec {{ui:Chercher dans toutes les feuilles ouvertes}} coché, une feuille à une autre échelle est recherchée à la taille que le symbole y a : un appareil dessiné à l'échelle sur un plan au 1/8" a la moitié de la taille qu'il a sur un plan au 1/4", et il est quand même trouvé. Une telle feuille est aussi recherchée à la taille propre du cadre, pour les étiquettes et symboles imprimés à une taille unique sur toutes les feuilles. Cela suppose une échelle sur les deux feuilles ; une feuille sans échelle n'est recherchée qu'à la taille du cadre.
- Des symboles très semblables peuvent se correspondre entre eux : une prise double et une prise quadruple, ou deux étiquettes d'appareil qui ne diffèrent que d'une lettre. Montez le curseur jusqu'à ne garder que les bonnes, et rejetez le reste à la main.
- Un symbole traversé par d'autres lignes, des hachures ou du texte obtient un score plus faible et peut nécessiter un réglage de curseur plus bas.
- Les cadres très petits sont refusés : « Ce cadre est trop petit. Tracez-le autour du symbole entier. » Un cadre vide est refusé aussi : « Ce cadre est presque vide. Tracez-le autour d'un symbole. »
- Une feuille qui serait très grande à la taille requise pour ce symbole est ignorée, et le résumé indique « 1 feuille était trop grande pour être recherchée à cette taille de symbole. » Encadrez un symbole plus grand, ou comptez cette feuille à la main.

Si rien n'est trouvé, la barre d'état indique : « Aucune correspondance. Baissez le curseur de correspondance, ou encadrez le symbole de plus près. »

## Vitesse et navigateurs

La recherche s'exécute dans un processus de travail en arrière-plan : la page reste réactive et vous pouvez annuler à tout moment. Chaque feuille est d'abord dessinée à la taille de travail sur la page elle-même, ce qui peut figer un instant une feuille très grande. La fonction marche dans les versions actuelles de Chrome, Edge, Firefox et Safari. La recherche sur de nombreuses feuilles prend plus de temps ; la barre de progression avance feuille par feuille. Hors ligne, le comptage auto fonctionne lorsque la barre de l'application affiche {{ui:Prêt hors ligne}} : {{ui:Enregistrer pour le hors ligne}} conserve aussi le processus de travail. Voir [Travailler hors ligne](common:offline).
