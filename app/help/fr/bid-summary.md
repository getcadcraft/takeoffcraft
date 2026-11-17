---
title: Récapitulatif d'offre et proposition
summary: Ajoutez les charges de main-d'œuvre, la TVA, les frais généraux, le bénéfice et la caution à l'estimation, rédigez les inclusions et exclusions, et téléchargez une proposition en PDF à envoyer.
keywords: offre, charges de main-d'œuvre, charges, paie, proposition, devis, frais généraux, bénéfice, majoration, marge, TVA, caution, inclusions, exclusions, conditions, signature, client, prix
from: 3208a561
---

L'estimation chiffre ce que vous avez métré. Le **récapitulatif d'offre** en fait un prix : il ajoute la TVA, les frais généraux, le bénéfice et la caution, et produit une **proposition en PDF** avec vos inclusions et exclusions.

Ouvrez-le depuis {{ui:Exporter}} › {{ui:Récapitulatif d'offre et proposition…}}. Tout ce qu'il contient est enregistré avec le métré, et chaque modification peut être annulée.

## Les majorations

Saisissez un pourcentage dans l'une des cinq (laissez les autres à 0). Elles se calculent dans cet ordre, chacune sur ce qui est au-dessus :

| Ligne | Calcul |
|---|---|
| Matériau, Main-d'œuvre | Les totaux de l'estimation (l'offre de base lorsque le métré comporte des [variantes](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Charges de main-d'œuvre | % de charges × main-d'œuvre : cotisations sociales, assurances et avantages sur les salaires de vos équipes. |
| **Coût** | Matériau + main-d'œuvre + charges de main-d'œuvre. |
| TVA sur le matériau | % de TVA × matériau. |
| Frais généraux | % de frais généraux × (coût + TVA). |
| Bénéfice | % de bénéfice × (coût + TVA + frais généraux). |
| Caution | % de caution × tout ce qui précède. |
| **Offre** | La somme des lignes. |

Chaque ligne est arrondie au centime. Le classeur montre les mêmes lignes sous le total de la feuille Estimation, avec des formules actives. Le récapitulatif se met à jour pendant la saisie : {{key:Enter}} valide un pourcentage. Chaque variante est présentée avec les mêmes majorations sur son propre coût, afin que le maître d'ouvrage voie ce que son choix change réellement.

## La proposition

Renseignez ce que la proposition doit dire :

- **Projet** (le nom du métré si vide), **Destinataire** (le client) et **Émetteur** (votre entreprise).
- **Inclusions** et **Exclusions** : une par ligne ; un tiret ou une puce en début de ligne convient.
- **Conditions** : texte libre, par exemple « Valable 30 jours. »
- **Lister les éléments et quantités** : le périmètre, élément par élément, avec quantités et sans prix. Décochez pour une proposition au forfait.

Choisissez {{ui:Proposition PDF}}. Le PDF (`<takeoff> - proposal.pdf`) comporte la date, le bloc des prix avec chaque majoration et l'offre, les variantes, le périmètre, les inclusions et exclusions, les conditions, et des lignes pour signer et dater. Si certaines quantités n'ont pas pu être mesurées (une feuille sans échelle), il le signale sous le prix.

## Dans les exports

Une fois que le métré comporte un récapitulatif d'offre, le CSV se termine par celui-ci, et le classeur reçoit une feuille **Récapitulatif d'offre**, avec chaque ligne, son pourcentage et son montant. Voir [Exporter l'estimation](topic:export-estimate).
