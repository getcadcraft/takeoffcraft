---
title: Prix manquants et validation de l'estimation
summary: Voir quelles lignes de l'estimation ont une quantité sans prix, valider l'estimation sous votre nom pour que le fichier enregistre qui, quand et quel total, et cliquer sur un chiffre pour sélectionner les repères dont il provient.
keywords: estimation, validation, valider, validée, approbation, approuver, prix manquant, sans prix, non chiffré, prix, total, métreur, enregistrement, audit, sélectionner les repères, chiffre, retrouver
from: 9acf71ef
---

## Ce que vous allez faire

Vérifier que chaque ligne de l'estimation est chiffrée, puis la valider sous votre nom. Le fichier de métré enregistre qui a validé, quand, et pour quel total.

## Lignes sans prix

Dans **Quantités › Par poste**, une ligne qui a une quantité et aucun prix de matériau ou de main-d'œuvre porte la mention **sans prix**, et la barre au-dessus du tableau indique combien il y en a. Une telle ligne n'ajoute rien au total. Un poste sans prix propre n'est pas signalé lorsqu'un de ses composants est chiffré : un ouvrage est chiffré par ses parties. L'estimation exportée indique **Sans prix** dans la colonne Remarques de chaque ligne concernée et les compte.

## Valider l'estimation

1. Cliquez sur **Valider l'estimation** au-dessus du tableau des quantités.
2. La boîte de dialogue indique le total que vous validez et liste les lignes sans prix. Saisissez votre nom et, si vous le souhaitez, votre fonction.
3. Cliquez sur **Valider**. La barre indique désormais « Validé par … le … » avec le total. Enregistrez le métré pour le conserver dans le fichier.

La validation porte sur les chiffres que vous avez validés. Toute modification ultérieure d'une quantité, d'un prix ou d'une ligne l'annule, et TakeoffCraft vous le signale. Annuler rétablit l'estimation que vous aviez validée, avec sa validation. Renommer une ligne n'est pas une modification de chiffre. **Retirer la validation** la supprime.

Un fichier de métré modifié hors de TakeoffCraft après sa validation s'ouvre sans validation, avec une remarque qui l'indique. L'estimation exportée (CSV et XLSX) mentionne la validation sous les totaux.

Seule une personne peut valider. Un assistant IA peut lire si l'estimation est validée et quels prix manquent ; il n'a aucun moyen de la valider.

## Cliquer sur un chiffre pour voir son origine

Cliquez sur une quantité ou un montant d'une ligne pour sélectionner les repères dont il provient. Lorsqu'ils se trouvent sur une autre feuille, cette feuille s'ouvre. Cliquez sur un chiffre de la ligne **Total général** pour sélectionner chaque repère de la feuille. Une quantité saisie à la main n'a aucun repère.

## À savoir

- La validation enregistre un nom tel qu'il a été saisi. C'est un enregistrement dans le fichier, et non une signature électronique.
- Avec des lots attribués à des sous-traitants ou des variantes dans le métré, le total validé est l'offre de base affichée sous **Total général**.
