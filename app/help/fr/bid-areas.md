---
title: Zones de soumission
summary: Attribuez les repères à un bâtiment, un étage ou une phase, métrez une zone à la fois, et lisez les quantités et les coûts de chaque zone.
keywords: ajouter une variante, variante en moins-value, offre de base, variantes, zone de soumission, zone, bâtiment, étage, niveau, phase, secteur, variante, détail, répartition, étage type, sous-total, par zone
from: 64f3d41c
---

Une zone de soumission est une partie du chantier que vous chiffrez à part : un bâtiment, un étage, une phase, une aile. Chaque repère peut appartenir à une seule zone de soumission. Les quantités et l'estimation peuvent alors être lues pour chaque zone, avec un sous-total pour chacune, tandis que le total du chantier reste la somme de tout.

## Créer une zone de soumission

1. En haut du panneau {{ui:Éléments (I)}}, ouvrez la liste {{ui:Zone de soumission}}.
2. Choisissez **Nouvelle zone de soumission…**, saisissez un nom comme « Bâtiment A » ou « Niveau 2 », puis choisissez **Créer**.
   La nouvelle zone devient la zone courante. La barre d'état indique « Les nouveaux repères vont dans (nom). Les repères des autres zones de soumission sont estompés. »

## Métrer dans une zone

Pendant qu'une zone de soumission est choisie dans la liste, chaque nouveau repère y est placé : tronçons, surfaces, cercles, comptages, les repères qu'ajoute {{ui:Comptage auto}}, et ce que vous collez. Les repères des autres zones, et ceux sans zone, sont estompés sur la feuille pour que vous voyiez ce qui va où.

Choisissez **Aucune zone de soumission** dans la liste pour métrer sans zone ; rien n'est alors estompé.

:::tip
Étages types : métrez le Niveau 2, sélectionnez ses repères ({{key:Mod+A}} sur la feuille), copiez-les, choisissez Niveau 3 dans la liste et collez. Les copies vont au Niveau 3. Lorsque les étages sont identiques et que vous n'avez pas besoin de les séparer, un [groupe type](topic:typical-groups) compte plusieurs fois un même étage à la place.
:::

## Déplacer des repères vers une autre zone

Sélectionnez un repère ou plusieurs ({{key:Shift}} + clic, ou {{key:Mod+A}}). Sous **Repère sélectionné** (ou **Repères sélectionnés**), choisissez la zone dans le champ {{ui:Zone de soumission}}. La barre d'état indique « 3 repères déplacés vers Niveau 2. » C'est une seule étape d'annulation.

## Renommer, réordonner ou supprimer

Choisissez **Gérer les zones de soumission…** dans la liste. Tapez par-dessus un nom pour le renommer, utilisez les flèches pour changer l'ordre (les tableaux et le classeur suivent), ou supprimez-en une avec la corbeille. Supprimer une zone de soumission conserve ses repères : ils ne se trouvent alors dans aucune zone. {{key:Mod+Z}} annule chaque modification.

## Lire les quantités par zone

Dans le tableau {{ui:Quantités}}, choisissez {{ui:Par zone}} (il apparaît dès que le métré comporte une zone de soumission). Chaque zone liste les éléments qu'elle contient, avec leur quantité, leur unité et leur total, puis une ligne de sous-total. Les repères sans zone viennent en dernier, sous **Aucune zone de soumission**. Cliquez sur la ligne d'un élément pour le mettre en évidence et faire de cette zone la zone courante.

Les assemblages sont calculés pour chaque zone à partir de ses propres totaux. Une formule qui arrondit, comme `ceil(L / 4)`, peut donc donner un peu plus pour l'ensemble des zones que pour le chantier entier, comme ce serait le cas sur une offre chiffrée zone par zone.

## Variantes : offre de base plus ajouts et moins-values

Une zone de soumission peut être une **variante** : un ouvrage que le maître d'ouvrage peut ajouter à l'offre, ou en retirer. Dans **Gérer les zones de soumission…**, chaque zone a une liste à côté de son nom :

| Choix | Ce que cela fait |
|---|---|
| {{ui:Offre de base}} | Dans l'offre, comme d'habitude. |
| {{ui:Ajouter une variante}} | Chiffrée à part et **exclue de l'offre de base** : une amélioration de moquette, un auvent supplémentaire. |
| {{ui:Variante en moins-value}} | Dans l'offre de base, et proposée en déduction : « supprimer l'auvent ». |

Métrez le travail d'une variante dans sa zone comme pour toute autre zone. Une fois que le métré comporte une variante :

- L'en-tête du tableau {{ui:Quantités}} indique **Offre de base** au lieu de Total du chantier : l'ensemble du métré, sans les variantes en ajout.
- {{ui:Par zone}} se termine par l'offre de base et une ligne par variante : **+$300.00** pour un ajout, **−$1,050.00** pour une moins-value.
- Une variante ne chiffre que les éléments qui ont des repères en elle, avec leurs assemblages, de sorte qu'une partie d'assemblage d'un autre élément ne s'y glisse pas.

Dans les exports, le CSV se termine par l'offre de base et les variantes, et le classeur reçoit une feuille **Variantes** : l'offre de base, les éléments de chaque variante et sa variation, et l'offre de base avec toutes les variantes en ajout retirées.

## Dans l'export

{{ui:XLSX}} ajoute une feuille **Par zone de soumission** : les éléments et composants de chaque zone avec quantité, quantité avec chute, matériau, main-d'œuvre et total, un sous-total par zone (une formule `SUM`) et **Toutes les zones de soumission** à la fin. La feuille **Repères** reçoit une colonne **Zone de soumission**. Un métré sans zone de soumission s'exporte comme avant. Voir [Colonnes d'export](topic:export-columns).

Les zones de soumission sont enregistrées dans le fichier du projet avec les repères.
