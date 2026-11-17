---
title: "Bibliothèque de prix"
summary: "Gardez vos postes, taux et ouvrages dans une bibliothèque, importez-la depuis un CSV ou une estimation passée, ajoutez-y des postes dans n'importe quel métré et mettez à jour les prix d'un métré à partir d'elle."
keywords: bibliothèque, lots de métiers, liste de prix, base de prix, base de coûts, importer csv, taux, ouvrages, réutiliser, postes modèles, mettre les prix à jour, rechiffrer
from: 37356c68
---

La **bibliothèque de prix** conserve les postes que vous utilisez chantier après chantier : leur type, leur unité, leur hauteur, leur chute, leurs taux de matériau et de main-d'œuvre, et leur ouvrage. Elle est conservée dans ce navigateur, à part de tout métré, de sorte que chaque métré ouvert ici peut s'en servir.

Ouvrez-la avec {{ui:Bibliothèque}} en haut du panneau {{ui:Éléments (I)}}.

## Alimenter la bibliothèque

- {{ui:Importer un CSV…}} lit un tableur enregistré en CSV (voir les colonnes ci-dessous). Les postes dont le nom et le type figurent déjà dans la bibliothèque sont remplacés ; les autres sont ajoutés. Les lignes illisibles sont ignorées, et l'outil indique lesquelles et pourquoi.
- {{ui:Ajouter les postes de ce métré}} copie chaque poste du métré ouvert dans la bibliothèque, avec ses taux et son ouvrage (mais non ses repères).
- L'estimation CSV exportée par TakeoffCraft ([Exporter l'estimation](topic:export-estimate)) s'importe telle quelle : les prix du dernier chantier servent de base au suivant.

- {{ui:Lots de métiers…}} ajoute des ouvrages gratuits pour un métier, comme la cloison sèche, l'électricité ou le béton, sans prix. Voir [Lots de métiers](topic:trade-packs).

{{ui:Exporter en CSV}} enregistre la bibliothèque en CSV, pour en garder une copie, la modifier dans un tableur ou la transmettre à un collègue. {{ui:Effacer}} la vide (cliquez deux fois).

:::note
La bibliothèque est conservée dans le stockage de ce navigateur. Un autre navigateur, un autre ordinateur ou une fenêtre privée en a une distincte (ou n'en a aucune). Exportez-la pour la transférer.
:::

## L'utiliser dans un métré

- Cochez des postes (saisissez dans {{ui:Chercher dans la bibliothèque}} pour réduire la liste), puis choisissez {{ui:Ajouter au métré}}. Ils sont ajoutés avec leurs ouvrages en une seule étape, que {{key:Mod+Z}} annule. Un nom déjà présent dans le métré reçoit un numéro, comme `Moquette (2)`.
- {{ui:Mettre les prix à jour}} donne aux postes du métré la chute et les taux de la bibliothèque, pour chaque poste dont le nom et le type correspondent à un poste de la bibliothèque, et de même pour les composants d'ouvrage de même nom. Les hauteurs, unités et formules restent inchangées. Un seul {{key:Mod+Z}} remet tous les anciens prix.

## Les colonnes du CSV

La première ligne nomme les colonnes, dans n'importe quel ordre ; les autres colonnes sont ignorées.

| Colonne | Ce qui s'y inscrit |
|---|---|
| Item (ou Name) | Le nom du poste. Obligatoire. |
| Type | Linear, Area ou Count (LF, SF et EA fonctionnent aussi). Vide : c'est l'unité qui décide. |
| Unit | LF ou m ; SF, SY ou m² ; EA. Vide : l'unité habituelle du type. |
| Waste % | `10` ou `10%`. |
| Material per unit, Labor per unit | Taux tels que `2.10` ou `$1,250`. |
| Height (ou Depth) | `9'-0"`, `9`, ou `2.7` pour les unités métriques. |
| Component, Formula | Une ligne dont le nom de Component (ou le type `Component`) fait partie de l'ouvrage du poste situé au-dessus. Son unité, sa chute et ses taux lui sont propres ; sa formule utilise les lettres du poste, voir [Ouvrages et formules](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Cloison type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Montants 16 in. o.c.,ceil(L / 1.333) + N
Revêtement de sol VCT,Area,SF,5,1.85,1.10,,,
Prises doubles,Count,EA,,3.50,45,,,
```

Les virgules, points-virgules ou tabulations entre les colonnes fonctionnent tous.
