---
title: Copier, coller et dupliquer des repères
summary: Copier des repères avec leurs postes, les coller là où vous cliquez ou au même endroit sur une autre feuille, les dupliquer, couper, supprimer et tout sélectionner, chaque action pouvant être annulée en une étape.
keywords: copier, coller, couper, dupliquer, coller à la même position, presse-papiers, tout sélectionner, désélectionner tout, repères multiples, étage courant, répéter, même plan, autre feuille, copier le poste, dupliquer le poste
from: e20e9024
---

Le groupe {{ui:Édition}} de la barre d'outils contient {{ui:Annuler}}, {{ui:Rétablir}}, {{ui:Copier}} et {{ui:Coller}}. Son menu {{ui:Plus}} contient le reste, chacun avec sa touche : {{ui:Couper}}, {{ui:Copier}}, {{ui:Coller}}, {{ui:Coller à la même position}}, {{ui:Dupliquer}}, {{ui:Supprimer}}, {{ui:Tout sélectionner}} et {{ui:Désélectionner tout}}. Chacune peut être annulée en une étape avec {{key:Mod+Z}}.

## Sélectionner les repères

1. Choisissez {{ui:Sélectionner}} ({{key:V}}) et cliquez sur un repère.
2. Maintenez {{key:Shift}} et cliquez sur d'autres repères pour les ajouter. {{key:Shift}} + clic sur un repère sélectionné le retire de la sélection.
3. Ou appuyez sur {{key:Mod+A}} ({{ui:Tout sélectionner}}) pour prendre tous les repères de la feuille ouverte.

Lorsque plusieurs repères sont sélectionnés, le panneau de droite affiche **Repères sélectionnés** : le nombre pour chaque poste, avec {{ui:Copier}}, {{ui:Dupliquer}}, {{ui:Couper}} et {{ui:Supprimer les repères}}. Les poignées d'angle n'apparaissent que lorsqu'un seul repère est sélectionné. {{key:Esc}} ({{ui:Désélectionner tout}}) vide la sélection.

## Copier et coller à l'endroit voulu

1. Sélectionnez les repères et appuyez sur {{key:Mod+C}} ({{ui:Copier}}). Les repères sont copiés avec leurs postes, y compris l'assemblage, la chute et les coûts de chaque poste.
2. Allez sur la feuille souhaitée (ce peut être la même feuille).
3. Appuyez sur {{key:Mod+V}} ({{ui:Coller}}). Une copie en pointillés suit le pointeur.
4. Cliquez à l'endroit voulu. Le centre des repères copiés se place sous le pointeur.

{{key:Esc}} annule et n'ajoute rien. Les repères collés sont ensuite sélectionnés : {{key:Delete}} ou {{key:Mod+Z}} les retire à nouveau.

Dans le même métré, les repères collés vont sur les **mêmes postes**, de sorte que leurs quantités s'ajoutent à ces postes. Dans un autre métré (un autre onglet, ou après {{ui:Nouvelle}}), un poste de même nom et de même type est utilisé ; sinon, le poste est ajouté avec son assemblage. Si le nom est déjà pris par un poste d'un autre type, le poste ajouté s'appelle « (nom) (copie) ».

Les repères collés vont dans la zone de soumission choisie en haut du panneau {{ui:Éléments (I)}} (ou dans aucune). Voir [Zones de soumission](topic:bid-areas).

## Coller à la même position

{{key:Mod+Shift+V}} ({{ui:Coller à la même position}}) place la copie exactement au même endroit sur la feuille ouverte, selon sa position sur la page. Utilisez-la pour un étage courant : métrez le niveau 2, copiez, ouvrez le niveau 3, puis collez à la même position.

Coller à la même position nécessite une feuille de **même taille** que celle d'où vous avez copié. Sur une feuille d'une autre taille, TakeoffCraft le signale et ne colle rien ; utilisez {{ui:Coller}} et cliquez à la place. Sur la feuille d'origine, la copie se place par-dessus les originaux.

## L'échelle doit correspondre

Les longueurs et les surfaces dépendent de l'échelle de la feuille. Un tronçon qui mesure 10' à 1/4" = 1'-0" mesurerait 20' sur une feuille à 1/8" = 1'-0". TakeoffCraft ne colle donc les tronçons et les surfaces que sur une feuille à la **même échelle** que la feuille d'origine, et l'indique clairement si ce n'est pas le cas :

- La feuille ouverte n'a pas encore d'échelle : donnez-lui-en une d'abord ([Régler l'échelle](topic:set-the-scale)), puis collez.
- La feuille ouverte a une autre échelle : le message indique les deux échelles. Collez sur une feuille à la même échelle.
- Les comptages n'ont pas besoin d'échelle : les comptages copiés se collent partout.

## Dupliquer

{{key:Mod+D}} ({{ui:Dupliquer}}) copie les repères sélectionnés et place la copie sous le pointeur immédiatement ; cliquez à l'endroit voulu. Rien n'est ajouté tant que vous ne cliquez pas, et {{key:Esc}} ne laisse rien. Dupliquer ne modifie pas ce que {{ui:Coller}} colle.

## Couper et supprimer

- {{key:Mod+X}} ({{ui:Couper}}) copie les repères sélectionnés et les supprime. Collez-les à leur place, ou annulez la coupe.
- {{key:Delete}} ou {{key:Backspace}} ({{ui:Supprimer}}) supprime les repères sélectionnés sans les copier.

## Copier un poste

L'éditeur de poste (sous **Éléments**) se termine par :

- {{ui:Copier le poste}} : copie le poste avec son assemblage, sa chute et ses coûts, sans repères. {{ui:Coller}} ajoute ensuite une copie de ce poste à ce métré, ou à un autre.
- {{ui:Dupliquer le poste}} : ajoute tout de suite une copie, nommée « (nom) (copie) ».

:::tip
La copie reste sur cet ordinateur : elle est conservée dans cet onglet et dans le stockage du navigateur, afin qu'un autre onglet de TakeoffCraft puisse la coller. Rien n'est téléversé, et le presse-papiers du système n'est pas utilisé : vous ne pouvez donc pas coller des repères dans d'autres logiciels.
:::

:::note
Une copie provient d'une seule feuille à la fois. Les repères sont collés tels quels : il n'est pas encore possible de faire pivoter ou de symétriser une copie.
:::
