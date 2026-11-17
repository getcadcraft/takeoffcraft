---
title: Colonnes d'export
summary: Chaque feuille et chaque colonne de l'export XLSX et du CSV, avec les formules que la feuille Estimation contient.
keywords: export, colonnes, xlsx, csv, feuille de calcul, feuille estimation, par feuille, repères, échelles, formules, champs
from: fed07851
---

## Estimation (feuille XLSX et CSV)

Une ligne par poste, suivie d'une ligne par composant de son ouvrage (en retrait). Puis une ligne vide et le total général.

| Colonne | Contenu | Dans le XLSX |
|---|---|---|
| A Poste | Nom du poste (en gras) ou nom du composant (en retrait) | Texte |
| B Type | Linéaire, Surface, Comptage ou Composant | Texte |
| C {{ui:Unité}} | LF, m, SF, SY, m², EA, ou l'unité du composant | Texte |
| D Quantité | Total mesuré, ou résultat de la formule | Nombre |
| E Chute % | Chute | Pourcentage (0.10 = 10 %) |
| F Quantité avec chute | Quantité × (1 + chute) | Formule `D*(1+E)` |
| G Matériaux au prix unitaire | Prix unitaire des matériaux | Nombre |
| H Main-d'œuvre au prix unitaire | Prix unitaire de la main-d'œuvre | Nombre |
| I Matériaux | Montant étendu des matériaux | Formule `ROUND(F*G,2)` |
| J Main-d'œuvre | Montant étendu de la main-d'œuvre | Formule `ROUND(F*H,2)` |
| K Total | Matériaux + main-d'œuvre | Formule `I+J` |
| L Remarques | Formule utilisée, erreur de formule, repères sur des feuilles sans échelle, surface de mur, périmètre | Texte |

Ligne de total général : `SUM` des colonnes I, J et K sur toutes les lignes ci-dessus, et « Incomplet : voir les remarques ci-dessus » dans Remarques lorsqu'un élément a été omis.

Une ligne avec une erreur de formule n'a ni quantité ni montant ; sa remarque indique l'erreur. La ligne d'en-tête est figée.

Dans le CSV, les mêmes colonnes contiennent des valeurs brutes, la colonne Chute % est un nombre de pourcentage (10 pour 10 %), et les montants sont en dollars avec deux décimales. Le texte qu'un tableur pourrait prendre pour une formule (commençant par `=`, `+`, `-` ou `@`) reçoit une `'` en début pour rester du texte.

## Par feuille (XLSX uniquement)

| Colonne | Contenu |
|---|---|
| Feuille | Nom de la feuille (avec le nom du PDF lorsqu'il n'est pas ouvert) |
| Poste | Nom du poste |
| Quantité | Quantité de ce poste sur cette feuille, dans son unité |
| {{ui:Unité}} | Unité du poste |
| Repères | Nombre de repères |

## Repères (XLSX uniquement)

Une ligne par repère.

| Colonne | Contenu |
|---|---|
| Feuille | Nom de la feuille |
| Poste | Nom du poste |
| Type | Linéaire, Surface ou Comptage |
| Quantité | Longueur, surface nette, ou 1 |
| {{ui:Unité}} | LF ou m ; SF, SY ou m² ; EA |
| Détail | Linéaire : les longueurs des segments, les segments déduits marqués « (déduit) », et « déduit (longueur) sur (longueur) tracée ». Surface : surfaces brutes et réservations lorsqu'il y en a, et le périmètre. « La feuille n'a pas d'échelle » pour les repères sans échelle. |
| Zone de soumission | Seulement lorsque le métré a des zones de soumission : la surface du repère, ou « Pas de zone de soumission » |

## Par zone de soumission (XLSX uniquement, lorsque le métré a des zones de soumission)

| Colonne | Contenu |
|---|---|
| Zone de soumission | Nom de la zone, ou « Pas de zone de soumission » |
| Poste | Le poste, ou un composant en retrait sous celui-ci |
| {{ui:Unité}} | Unité du poste ou du composant |
| Quantité | Mesurée dans cette zone (composants : la formule sur les totaux de la zone) |
| Quantité avec chute | Quantité × (1 + chute) |
| Matériaux, Main-d'œuvre, Total | Étendus au centime, comme dans Estimation |
| Remarques | Formule, erreurs et repères sans échelle, comme dans Estimation |

Chaque zone se termine par une ligne « sous-total (nom) » dont les coûts sont des formules `SUM` sur ses lignes ; la dernière ligne, **Toutes les zones de soumission**, additionne les sous-totaux. La feuille **Repères** comporte alors une septième colonne, **Zone de soumission**.

## Échelles (XLSX uniquement)

Une ligne par feuille ayant une échelle ou des repères.

| Colonne | Contenu |
|---|---|
| Feuille | Nom de la feuille |
| Échelle | Le nom du préréglage, l'échelle étalonnée, ou « Pas d'échelle » |
| Mode | « Préréglage », ou « Étalonnée sur (la distance que vous avez saisie) » |
| Pieds par unité PDF | Le facteur d'échelle exact utilisé par TakeoffCraft |

## Noms de fichiers

- `(name).xlsx` et `(name).csv`, où le nom provient du premier PDF ouvert dans le métré.
- Le CSV est en UTF-8 avec une marque d'ordre d'octets et des fins de ligne Windows, que les tableurs de toutes les plateformes lisent.
