---
title: Lots de travaux et mise à niveau des offres
summary: Répartissez le métré en lots par métier, envoyez le périmètre de chaque lot aux sous-traitants, comparez les offres reçues sur le même périmètre, et utilisez l'offre retenue comme prix du lot.
keywords: mise à niveau, mise à niveau des offres, lot de travaux, sous-traitant, offre de sous-traitant, périmètre, complément, métier, division CSI, comparer les offres, offre la plus basse, tableau des offres, soumissionnaire, attribution, offre retenue, utiliser une offre, prix de sous-traitance
from: 856b3088
---

Un entrepreneur général envoie le périmètre de chaque métier à des sous-traitants et compare ce qui revient. TakeoffCraft fait les deux à partir du métré : ouvrez {{ui:Exporter}} › {{ui:Lots de travaux et mise à niveau…}}.

## Lots

Il y a un lot pour chaque division CSI que vos éléments utilisent (les deux premiers chiffres du {{ui:Numéro CSI}} d'un élément, voir [Créer des éléments de métré](topic:create-items)). Les éléments sans numéro forment un lot à part. Chaque lot affiche ses éléments, le nombre de feuilles où se trouvent leurs repères, et notre propre coût (matériau et main-d'œuvre avant majorations, d'après l'offre de base).

Choisissez {{ui:Périmètre CSV}} pour télécharger ce qu'il faut envoyer à un sous-traitant : chaque élément avec son numéro CSI, sa quantité, son unité et les feuilles où il se trouve. Il ne contient aucun prix. Pour les fournisseurs de matériaux, la demande de devis du classeur comporte la liste des pièces (voir [Exporter l'estimation](topic:export-estimate)).

## Saisir les offres

1. Dans la ligne vide sous le lot, saisissez le nom du soumissionnaire et le montant de l'offre, puis choisissez {{ui:Ajouter l'offre}}.
2. Si une offre laisse une partie du périmètre de côté, ouvrez sa liste {{ui:Écarté}} et cochez ces éléments.
3. Pour corriger un nom ou un montant, tapez par-dessus dans le tableau ; le bouton × supprime une offre.

Chaque modification est une étape que {{key:Mod+Z}} annule, et les offres sont enregistrées avec le métré.

## Comment les offres sont mises à niveau

Les offres couvrent rarement le même périmètre. La mise à niveau complète chaque élément écarté par un **complément** à notre propre coût, de sorte que chaque offre est comparée sur l'ensemble du lot :

**Mise à niveau = l'offre + les compléments**

L'offre la plus basse une fois mise à niveau est marquée **Le plus bas** ; en cas d'égalité, c'est celle saisie en premier. **Par rapport à notre coût** est l'offre mise à niveau moins notre propre coût du lot : négatif signifie en dessous. Une offre qui semble la plus basse peut perdre une fois son périmètre manquant compté.

Le classeur reçoit une feuille **Mise à niveau des offres** avec chaque lot ayant des offres : notre estimation, chaque offre, ses compléments, le total mis à niveau et l'écart, sous forme de formules actives, ainsi que ce que chaque offre a laissé de côté.

## Utiliser une offre comme prix du lot

Choisissez {{ui:Utiliser}} sur une offre : elle devient le prix de tout le lot dans votre estimation. Le chiffrage propre du lot (les éléments, leurs conditions secondaires et leurs parties d'assemblage) sort du total du chantier ; les éléments restent comme quantités, avec vos propres taux à titre de référence, et une ligne, **Offre retenue**, porte le montant de l'offre. Les éléments que l'offre laisse de côté restent à votre propre coût, ce que la mise à niveau comptait déjà comme complément. Choisissez une autre offre, ou choisissez à nouveau la même pour la reprendre ; chacune est une étape que {{key:Mod+Z}} annule.

Dans le récapitulatif d'offre, les offres de sous-traitants forment une seule ligne dans le coût : les frais généraux, le bénéfice et la caution s'y ajoutent comme pour tout autre coût ; la TVA sur le matériau et les charges de main-d'œuvre sur la main-d'œuvre n'y sont pas appliquées. La feuille Estimation du classeur porte l'offre retenue sur sa propre ligne, et le bloc des majorations l'additionne, avec des formules actives. La liste des matériaux exclut le matériau d'un lot attribué, puisque le sous-traitant le fournit.

Un lot situé dans une zone de soumission de variante n'est pas recalculé : les variantes et les sous-totaux par zone utilisent toujours vos propres prix.

## Offres reçues par e-mail

Vous n'avez pas à saisir les offres. {{ui:Envoyer en consultation…}} sous un lot envoie à chaque sous-traitant un lien vers une page où il saisit un prix pour chaque ligne ; {{ui:Récupérer les prix}} fait entrer ce qu'il a envoyé dans ce tableau. Voir [Envoyer un lot pour consultation](topic:bid-invitations).

:::note
Saisir une offre à la main fonctionne toujours, et une offre saisie à la main et une offre venue du site figurent côte à côte. Les offres venues du site sont marquées **web** (ou **web, tardive** lorsqu'elles sont arrivées après l'heure limite) ; leur prix ne change que lorsque le soumissionnaire envoie une nouvelle version, de sorte que vos propres modifications restent jusque-là.
:::
