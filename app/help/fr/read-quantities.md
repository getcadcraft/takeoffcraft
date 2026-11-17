---
title: Lire les quantités et l'estimation
summary: Utilisez le tableau Quantités par poste et par feuille, le total général, la mise en évidence et l'avertissement Incomplet.
keywords: quantités, totaux, par poste, par feuille, total général, estimation, synthèse, rapport, mise en évidence, incomplet, coûts
from: 069d41f1
---

Le tableau {{ui:Quantités}} en bas de la fenêtre est votre estimation en direct. Il se met à jour dès que vous tracez, supprimez, redimensionnez l'échelle ou modifiez un prix. Les quantités ne sont jamais enregistrées : elles sont recalculées à partir des repères à chaque fois, elles ne peuvent donc pas devenir obsolètes.

## Par poste

Choisissez {{ui:Par poste}} (le choix par défaut). Chaque poste a une ligne, et chacun de ses composants d'ouvrage a une ligne en dessous.

| Colonne | Signification |
|---|---|
| Poste | Nom, avec la couleur du poste. « +(n) sans échelle » signifie que certains repères sont sur des feuilles sans échelle. |
| Quantité | Le total mesuré dans l'unité du poste (composants : le résultat de la formule). |
| Unité | LF, m, SF, SY, m², EA, ou l'unité du composant. |
| Chute % | Saisie ici ou dans l'éditeur de poste. |
| Avec chute | Quantité × (1 + chute). |
| Matériau/unité, Main-d'œuvre/unité | Prix unitaires ; vous pouvez les saisir ici. |
| Matériau, Main-d'œuvre | Avec chute × prix, arrondi au centime. |
| Total | Matériau + main-d'œuvre. |

La dernière ligne, **Total général**, additionne les colonnes Matériau, Main-d'œuvre et Total. Le même total s'affiche à droite de l'en-tête du tableau.

Saisissez une valeur dans une cellule de chute ou de prix, puis appuyez sur {{key:Enter}} ou cliquez ailleurs pour l'appliquer. Une valeur que TakeoffCraft ne peut pas lire est encadrée en rouge et la barre d'état indique pourquoi, par exemple « Saisissez une valeur comme 12.50. »

Cliquez sur la ligne d'un poste pour mettre en évidence ses repères sur chaque feuille et aller à une feuille qui en contient (comme un clic sous {{ui:Éléments (I)}}).

## Par feuille

Choisissez {{ui:Par feuille}} pour voir la quantité de chaque poste sur chaque feuille, avec le nombre de repères. Cliquez sur une ligne pour ouvrir cette feuille avec le poste mis en évidence. Utilisez-le pour vérifier que chaque feuille a été métrée, ou pour répartir les quantités par étage ou par zone de travaux.

## Par zone

Lorsque le métré comporte des zones de soumission, {{ui:Par zone}} liste les postes de chaque zone et un sous-total. Voir [Zones de soumission](topic:bid-areas).

## L'avertissement Incomplet

Lorsqu'une partie n'est pas comptée dans les totaux, l'en-tête affiche un avertissement, par exemple :

« Incomplet : 1 erreur de formule, 6 repères sur des feuilles sans échelle (non comptés dans les totaux) »

- **Erreurs de formule** : la formule d'un composant d'ouvrage ne peut pas être calculée. Sa ligne affiche « Erreur de formule : … ». Voir [Ouvrages et formules](topic:assemblies#when-a-formula-is-wrong).
- **Repères sur des feuilles sans échelle** : donnez une échelle à ces feuilles. Voir [Régler l'échelle](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Les mêmes remarques figurent dans le tableur exporté, afin qu'une estimation incomplète ne paraisse jamais complète.

## Mettre un poste en évidence

Cliquez sur un poste sous {{ui:Éléments (I)}} ou dans le tableau. Ses repères restent à pleine intensité sur chaque feuille, et le reste s'estompe. La liste des feuilles affiche « (n) mis en évidence » sur chaque feuille comportant ses repères. Cliquez à nouveau sur le poste pour arrêter la mise en évidence.

## Totaux des postes dans le panneau latéral

Chaque poste de la liste {{ui:Éléments (I)}} affiche aussi sa quantité. Le bloc **Mesuré** de l'éditeur de poste présente les valeurs utilisées par ses formules : longueur, tronçons et surface de mur ; surface, périmètre et nombre de surfaces ; ou comptage.

## Repères sur des PDF non ouverts

Un métré peut comporter des repères sur des PDF que vous n'avez pas ouverts cette fois. Ils sont toujours comptés dans chaque total ; la liste des feuilles nomme ces PDF. Voir [Enregistrer et rouvrir un métré](topic:save-and-reopen).

## Plus d'espace

Le bouton fléché à droite de l'en-tête {{ui:Quantités}} masque le tableau pour laisser plus de place à la feuille. Cliquez à nouveau pour le faire réapparaître.
