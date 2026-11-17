---
title: Compter à la main
summary: Cliquez sur chaque porte, appareil ou équipement pour le compter, vérifiez vos comptages et corrigez les erreurs.
keywords: compter, chaque, ea, équipements, portes, appareils, symboles, pointage, comptage au clic, comptage manuel
from: 594f2980
---

Un poste de comptage compte des éléments : portes, luminaires, prises, appareils sanitaires. Chaque clic sur la feuille ajoute un repère de comptage. Le comptage n'a pas besoin d'échelle.

## Compter

1. Créez ou cliquez sur un poste de comptage sous {{ui:Éléments (I)}} (type {{ui:Compter}}).
2. Choisissez {{ui:Compter}} dans la barre d'outils, ou appuyez sur {{key:C}}.
3. Cliquez sur chacun sur la feuille.
   Chaque clic place un point de la couleur du poste, et le comptage du poste augmente d'une unité.
4. Passez à la feuille suivante ({{key:PageDown}}) et poursuivez le comptage. L'outil reste sur {{ui:Compter}}.
5. Appuyez sur {{key:Esc}} une fois terminé. TakeoffCraft revient à {{ui:Sélectionner}}.

Glisser déplace toujours la vue, et la molette fait toujours un zoom pendant le comptage : vous pouvez donc vous déplacer sur la feuille sans ajouter de points.

:::tip
Cliquez sur le poste de comptage pour mettre ses points en évidence sur toutes les feuilles. La liste des feuilles indique alors combien il y en a sur chacune, ce qui vous aide à trouver les feuilles que vous n'avez pas encore comptées.
:::

## Corriger un comptage

- **Retirer un point** : choisissez {{ui:Sélectionner}} ({{key:V}}), cliquez sur le point, puis appuyez sur {{key:Delete}} ou choisissez {{ui:Supprimer le repère}}. Vous pouvez aussi appuyer sur {{key:Mod+Z}} juste après un mauvais clic.
- **Déplacer un point** : sélectionnez-le, puis faites-le glisser.
- **Compté sous le mauvais poste** : sélectionnez le point et choisissez le bon poste de comptage dans la liste **Poste** sous **Repère sélectionné**.

## Taille des points, à l'écran et dans le PDF

Les points gardent la même taille à l'écran, quel que soit le zoom. Pour la modifier, ouvrez {{ui:Paramètres}}, l'onglet TakeoffCraft, et choisissez **Taille du marqueur de comptage** : Très petite, Petite, Moyenne (par défaut) ou Grande.

L'export PDF ({{ui:Exporter}} › le PDF annoté) dessine chaque point à la même taille sur papier, quelle que soit la taille de la feuille : une visionneuse affichant le PDF à 100 % montre les points aussi grands qu'à l'écran. Lorsque les points d'une feuille se toucheraient encore, l'export réduit les points de cette feuille pour que chacun reste lisible.

## Nombreux symboles identiques

Pour un symbole qui se répète de nombreuses fois sur une feuille, essayez le [Comptage auto](topic:auto-count) : encadrez-en un, vérifiez ce qu'il trouve, puis ajoutez-les tous en une seule étape.

## Utiliser les comptages dans les formules

La quantité d'un poste de comptage est **N**. Les composants d'assemblage peuvent l'utiliser, par exemple des charnières `N * 3` pour les portes. Voir [Assemblages et formules](topic:assemblies).
