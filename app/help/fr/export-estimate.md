---
title: Exporter l'estimation et un PDF annoté
summary: Téléchargez l'estimation en classeur XLSX avec formules actives, ou en CSV, et des copies de vos PDF avec le métré dessiné.
keywords: proposition, synthèse de l'offre, export, xlsx, tableur, classeur, csv, pdf annoté, impression du métré, rapport, partager, envoyer, légende
from: 334f89c7
---

Les exports sont des téléchargements. Ils sont produits sur votre ordinateur à partir du métré et des PDF ouverts ; rien n'est envoyé ailleurs.

## L'estimation sous forme de tableur (XLSX)

1. Ouvrez le menu {{ui:Exporter}} dans la barre d'outils et choisissez {{ui:XLSX}}.
   Votre navigateur télécharge `(name).xlsx`. La barre d'état affiche « Exporté (name).xlsx (estimation avec formules actives, par feuille, repères, échelles). » et ajoute un avertissement lorsque l'estimation est incomplète.
2. Ouvrez-le dans votre tableur.

Le classeur comporte quatre feuilles, ainsi que les rapports ci-dessous selon le cas :

| Feuille | Contenu |
|---|---|
| Estimation | Une ligne par poste et par composant : quantité, chute, quantité avec chute, prix unitaires, matériaux, main-d'œuvre, total, remarques. Le total général figure en bas. |
| Par feuille | La quantité de chaque poste sur chaque feuille, avec le nombre de repères. |
| Repères | Chaque repère : feuille, poste, type, quantité et détail (longueurs des segments, surfaces brutes et réservations, périmètre). |
| Échelles | Chaque feuille ayant une échelle ou des repères : son échelle, son mode de définition (préréglage, ou étalonnage sur la distance saisie) et les pieds par unité PDF. |
| Récapitulatif du métré | La quantité, le numéro CSI, les repères et les feuilles de chaque poste, sans prix. |
| Liste des matériaux | Chaque élément d'ouvrage additionné sur l'ensemble du métré (un même élément utilisé par plusieurs postes ne forme qu'une seule ligne), avec la chute et le coût des matériaux, et les postes qui l'utilisent. |
| Demande de prix | La liste des matériaux à envoyer à un fournisseur : quantités avec chute, colonne de prix unitaires vide, et montants et total qui se calculent au fur et à mesure de la saisie des prix. |
| Par division | Matériaux, main-d'œuvre et total par division CSI MasterFormat, lorsque les postes ont un {{ui:Numéro CSI}}. |

Avec une [synthèse de l'offre](topic:bid-summary), la feuille Estimation se termine aussi par ses majorations (charges de main-d'œuvre, taxe de vente, frais généraux, bénéfice, caution et offre), sous forme de formules actives.

La feuille Estimation conserve des **formules actives** : quantité avec chute, montants arrondis des matériaux et de la main-d'œuvre, total de chaque ligne et total général. Les tableurs les recalculent : vous pouvez donc modifier un prix ou une chute dans le tableur, et les totaux suivent. Les nombres calculés par TakeoffCraft sont aussi enregistrés dans les cellules et concordent au centime près.

La colonne Remarques indique la formule de chaque composant, les erreurs de formule, les repères sur des feuilles sans échelle, la surface de mur et le périmètre. Lorsqu'un élément est omis, la ligne du total général indique « Incomplet : voir les remarques ci-dessus ».

Le classeur a été vérifié dans LibreOffice Calc, qui l'a recalculé avec les mêmes totaux. Il n'a pas encore été ouvert dans Excel. Le détail colonne par colonne figure dans [Colonnes d'export](topic:export-columns).

## L'estimation en CSV

Ouvrez le menu {{ui:Exporter}} et choisissez {{ui:CSV}}. Vous obtenez `(name).csv` : les mêmes lignes et colonnes que la feuille Estimation, en valeurs brutes (sans formules), ainsi que le total général. Utilisez-le pour le coller dans un autre système d'estimation ou de comptabilité.

Le CSV ne contient que l'estimation ; pour les quantités par feuille et la liste des repères, utilisez XLSX. {{ui:Liste des matériaux}} dans le même menu enregistre la seule liste des matériaux en CSV, pour passer commande.

## L'estimation dans Google Sheets

Au-dessus du tableau des Quantités, **Copier pour Google Sheets** place l'estimation dans votre presse-papiers sous forme de texte séparé par des tabulations, avec les mêmes lignes que le CSV. Dans une feuille Google Sheets, cliquez sur la cellule A1 et collez. TakeoffCraft ne se connecte pas à Google et n'y envoie rien.

## Prix manquants et validation

Une ligne avec une quantité et sans prix indique **Prix manquant** dans ses remarques, et l'export les compte dans les totaux. Lorsque l'estimation a été validée, l'export indique qui l'a validée, quand et pour quel total. Voir [Prix manquants et validation de l'estimation](topic:sign-off-the-estimate).

## Un PDF annoté

1. Ouvrez les PDF dont vous voulez dessiner les repères.
2. Ouvrez le menu {{ui:Exporter}} et choisissez {{ui:PDF annoté}}.
   « Écriture du PDF annoté… » s'affiche, puis votre navigateur télécharge un fichier par PDF annoté, nommé `(PDF name) (takeoff).pdf`.

Dans la copie :

- les tronçons sont tracés en traits, de la couleur de leur poste,
- les surfaces sont remplies légèrement avec un contour plein, et les réservations restent ouvertes,
- les comptages sont des points,
- chaque page comportant des repères reçoit une petite légende dans son coin inférieur gauche : la couleur, le nom et la quantité de chaque poste sur cette page.

Vos PDF originaux ne sont pas modifiés.

Remarques :

- Seuls les PDF ouverts sont écrits. Les repères sur des PDF non ouverts restent dans les totaux mais ne sont pas dessinés ; ouvrez d'abord ces PDF.
- Les noms de la légende utilisent une police PDF standard. Les lettres qu'elle ne peut pas afficher s'impriment sous forme de « ? ».
- Un PDF chiffré ne peut pas être copié avec ses repères : « Ce PDF est protégé par mot de passe ou chiffré, donc une copie annotée ne peut pas être écrite. Le métré lui-même est intact ; exportez plutôt le tableur. »
- Le premier {{ui:PDF annoté}} d'un onglet charge le module d'écriture PDF. Hors ligne, il n'est disponible que si la barre de l'application affiche {{ui:Prêt hors ligne}} ; voir [Travailler hors ligne](common:offline).

:::chromium
Avec plusieurs PDF annotés, Chrome et Edge peuvent demander une fois si ce site peut télécharger plusieurs fichiers. Choisissez Autoriser, sinon vous n'obtiendrez que le premier fichier.
:::

## Rien à exporter ?

- {{ui:XLSX}} et {{ui:CSV}} exigent au moins un poste : « Rien à exporter pour l'instant : créez un poste et mesurez-le. »
- {{ui:PDF annoté}} exige des repères sur un PDF ouvert : « Aucun repère sur les PDF ouverts pour l'instant. »

## Enregistrer aussi le métré

Un export est un rapport. Pour continuer à travailler sur le métré plus tard, choisissez aussi {{ui:Enregistrer le métré}} : voir [Enregistrer et rouvrir un métré](topic:save-and-reopen).

Pour ajouter les frais généraux, le bénéfice, la taxe et la caution, et envoyer une proposition, voir [Synthèse de l'offre et proposition](topic:bid-summary).
