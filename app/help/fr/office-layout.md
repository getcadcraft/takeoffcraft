---
title: "La mise en page de l'agence : regroupements, sous-totaux, titre et intitulés selon vos politiques par défaut"
summary: "Activez le module Politiques par défaut et l'estimation, les quantités par feuille, les exports et ce que lit un assistant prennent la mise en page des nomenclatures de votre agence, la même que celle des nomenclatures de BimCraft."
keywords: standard d'agence, mise en page de l'agence, politiques par défaut, module complémentaire, mise en page des nomenclatures, grouper par type, grouper par feuille, sous-total, totaux, titre, intitulés, majuscules, mise en page de l'estimation, mise en page de l'export, paramètres
from: cfd2f30a
---

## Ce que vous allez faire

Faites disposer les tableaux de TakeoffCraft selon la présentation de vos documents d'agence, sans la configurer dans chaque métré. La mise en page se règle une seule fois, dans Politiques par défaut, et vaut pour toutes les applications de cet ordinateur : ce que vous réglez dans BimCraft ou CadCraft est utilisé par TakeoffCraft, et inversement.

## Étapes

1. Ouvrez **Paramètres › Modules complémentaires** et activez **Politiques par défaut**. Elle est désactivée tant que vous ne l'activez pas ; désactivée, ou sans réglage, TakeoffCraft fonctionne exactement comme avant.
2. Ouvrez **Paramètres › Global › Politiques par défaut** et repérez **Mise en page des nomenclatures (la norme de l'agence)** :

| Politique | Ce qu'elle fait dans TakeoffCraft |
|---|---|
| Grouper les nomenclatures par | **Type** regroupe l'estimation par type de poste (Linéaire, Surface, Comptage, Quantité typée). **Niveau** regroupe les quantités par feuille, selon leur feuille. **Pièce** et **Pas de regroupement** ne groupent ni l'un ni l'autre |
| Totaux des nomenclatures | **Un sous-total sous chaque groupe et un total** ajoute un sous-total sous chaque groupe. Le total du chantier reste toujours |
| Titre de la nomenclature | Une ligne au-dessus du tableau, par exemple `{schedule}: mise en page de l'agence` |
| Intitulés de colonnes | Tels qu'écrits, EN MAJUSCULES ou Avec Initiales Majuscules |

3. Fermez Paramètres. Les tableaux suivent immédiatement.

## Ce qui prend la mise en page

- **Quantités › Par poste** et **Par feuille** : intitulés de groupe, un sous-total sous chaque groupe, le titre et la casse des intitulés. Une ligne sous le titre indique quelles parties de votre norme d'agence ont été fixées. Les lignes restent les mêmes : vous saisissez toujours les taux et les chutes, et vous cliquez sur les chiffres pour sélectionner leurs repères. Un composant ou une deuxième condition reste sous son poste.
- **L'estimation exportée** (CSV et XLSX) : mêmes groupes et sous-totaux. Dans le classeur, un sous-total est une formule `SUBTOTAL` sur son groupe, et le total du chantier en est une aussi, de sorte que rien n'est compté deux fois.
- **Ce que lit un assistant** : `takeoff_estimate` et `takeoff_quantities` (par feuille) ajoutent un bloc `layout` avec les groupes, les lignes et les sous-totaux, et indiquent quelles parties l'agence a fixées.

## Ce qui garde sa propre mise en page

- **Quantités › Par zone de soumission** définit son propre regroupement (par zone de soumission) et le conserve.
- Le **total du chantier**, les majorations du récapitulatif de soumission et les variantes ne sont pas regroupés à nouveau.
- Un regroupement pour lequel le tableau n'a pas de colonne est omis : l'estimation n'a pas de niveau, et les quantités par feuille n'ont pas de type.

## Bon à savoir

- Les politiques sont conservées dans ce navigateur pour toutes les applications CadCraft et voyagent dans le fichier Politiques par défaut (**Enregistrer dans un fichier** / **Charger depuis un fichier**, au même endroit), si bien qu'une agence partage un seul fichier.
- Une estimation exportée en CSV avec des groupes est faite pour être lue. Pour la réimporter comme bibliothèque de prix, exportez-la sans regroupement.
- La norme commune à BimCraft : nomenclatures, configurations et exports. TakeoffCraft n'a pas encore de politiques propres, donc il n'y a pas de section Politiques par défaut sous Paramètres › TakeoffCraft.
