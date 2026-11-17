---
title: Lots de métiers
summary: Ajoutez à votre bibliothèque de prix des ouvrages gratuits pour un métier, supprimez-les en une seule étape, et partagez votre bibliothèque sous forme de lot.
keywords: lot de métiers, lot, ouvrages, modèles, postes de départ, électricité, cloisons sèches, charpente, peinture, béton, revêtement de sol, maçonnerie, couverture, bardage, menuiserie, plomberie, cvc, isolation, aménagement paysager, terrasse, entrepreneur général, csi, masterformat, cc0, ajouter, supprimer, partager
from: d3c036be
---

Un **lot de métier** est un ensemble de postes prêts à l'emploi pour un même métier : chacun avec son unité, sa hauteur ou sa profondeur, sa chute et son **ouvrage**, c'est-à-dire les composants et formules qui transforment un tronçon, une surface ou un comptage mesuré en matériaux. Une cloison sèche, par exemple, apporte ses rails, montants, plaques, vis, bande et enduit.

Les lots sont ajoutés à votre [bibliothèque de prix](topic:price-library), et de là vous ajoutez leurs postes à n'importe quel métré.

## Ajouter un lot

1. Ouvrez {{ui:Bibliothèque}} en haut du panneau {{ui:Éléments (I)}}, puis {{ui:Lots de métiers…}}.
2. Choisissez les {{ui:Unités}} : impériales (LF, SF), métriques (m, m²) ou les deux. Chaque ouvrage existe dans les deux systèmes.
3. Choisissez {{ui:Ajouter}} à côté d'un lot.

Les postes du lot apparaissent dans la bibliothèque, étiquetés du nom du lot. Pour les utiliser, cochez-les dans la bibliothèque et choisissez {{ui:Ajouter au métré}}.

:::note
**Un lot n'apporte aucun prix.** Ses postes affichent « Définir votre tarif » dans la bibliothèque. Les tarifs vous appartiennent : saisissez-les dans la bibliothèque ou dans l'éditeur de postes, ou importez votre liste de prix au format CSV et utilisez {{ui:Mettre les prix à jour}}.
:::

Si votre bibliothèque contient déjà un poste de même nom et de même type, le lot laisse le vôtre intact. Ajouter à nouveau un lot remplace ses propres postes par la nouvelle version.

## Supprimer un lot

Dans {{ui:Lots de métiers…}}, choisissez {{ui:Supprimer}} à côté d'un lot que vous avez ajouté, puis une fois de plus pour confirmer. Tous les postes provenant de ce lot quittent la bibliothèque en une seule étape. Les postes que vous avez déjà ajoutés à un métré restent dans ce métré.

## Contenu d'un lot

Choisissez {{ui:Sources et détails}} sous un lot pour voir à partir de quoi chaque ouvrage a été rédigé : codes de construction, normes et guides de pose des fédérations professionnelles. Dans la bibliothèque, placez le pointeur sur un poste pour lire ses sources et ses hypothèses, comme l'entraxe des montants ou le rendement d'une peinture. Vérifiez-les par rapport à votre chantier et aux fiches techniques de vos produits, et modifiez les formules là où elles diffèrent (voir [Ouvrages et formules](topic:assemblies)).

Chaque lot porte la mention **Modèle de départ : pas encore vérifié par un métreur** jusqu'à ce que des métreurs en exercice l'aient vérifié.

Chaque poste porte aussi son numéro CSI MasterFormat, comme `09 21 16`.

## Partager votre bibliothèque sous forme de lot

{{ui:Exporter en lot…}} dans la bibliothèque l'enregistre sous forme de fichier de lot (`.ccpack.json`) que n'importe qui peut ajouter avec {{ui:Ouvrir un fichier de lot…}}. Par défaut, il exclut les postes provenant des lots que vous avez ajoutés, et ne contient aucun tarif. Cochez {{ui:Inclure mes tarifs comme tarifs d'exemple}} pour y joindre aussi vos tarifs : ils sont envoyés avec la région et la date que vous indiquez, et la personne qui ajoute le lot choisit de les utiliser ou non.

Les fichiers de lot ne contiennent que des données, jamais des programmes. TakeoffCraft vérifie chaque partie d'un fichier avant de l'utiliser et écarte tout ce qu'il ne peut pas lire.
