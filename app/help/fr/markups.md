---
title: Notes, nuages et surlignages
summary: Signalez les questions et les modifications sur les feuilles avec des notes, des nuages de révision et des surlignages, suivez chacun comme ouvert, répondu ou fermé, et envoyez-les dans le PDF annoté.
keywords: annotation, annotations, note, commentaire, question, RFI, nuage, nuage de révision, surlignage, statut, ouvert, répondu, fermé, relecture, liste des annotations
from: 2b395c13
---

Les annotations servent à noter ce que vous devez retenir ou demander pendant le métré : « confirmer le type de base », un nuage de révision autour d'un mur modifié, une note surlignée sur le plan. Elles se placent sur la feuille avec un statut, sont listées à un seul endroit et s'impriment dans le PDF annoté. Elles ne sont **jamais comptées** : ni quantité, ni coût.

## En ajouter une

Ouvrez {{ui:Annotations}} dans la barre au-dessus de la feuille, puis choisissez :

| Annotation | Comment |
|---|---|
| {{ui:Note}} | Cliquez à l'endroit voulu, saisissez la note, puis choisissez {{ui:Ajouter}}. Elle apparaît sous forme d'épingle ronde avec sa première ligne à côté. |
| {{ui:Nuage}} | Cliquez sur un coin, puis sur le coin opposé, et saisissez une note (ou laissez-la vide). Un nuage de révision festonné entoure la zone. |
| {{ui:Surlignage}} | Cliquez sur deux coins : une zone jaune translucide, avec une note si vous le souhaitez. |

{{key:Esc}} après le premier coin annule. L'outil reste actif pour la suivante ; {{key:V}} revient à {{ui:Sélectionner}}.

## Statut et modification

Cliquez sur une annotation avec {{ui:Sélectionner}} pour la sélectionner. Le panneau de droite affiche **Annotation** : son type et sa feuille, son **Statut** (Ouvert, Répondu ou Fermé) et son texte, que vous pouvez modifier. {{key:Delete}} (ou {{ui:Supprimer}}) la supprime ; {{key:Mod+Z}} la restaure.

L'épingle d'une note est orange tant qu'elle est ouverte, bleue une fois répondue et grise lorsqu'elle est fermée ; un nuage fermé devient gris.

## La liste

**Annotations** dans le panneau de droite liste toutes les annotations du métré avec leur statut, et indique combien sont encore ouvertes. Cochez **Ouvertes uniquement** pour voir ce qu'il reste à régler. Cliquez sur une ligne pour aller à sa feuille et la sélectionner.

## Les partager

- {{ui:PDF annoté}} les dessine sur les pages : surlignages, nuages et épingles, chacun avec un encadré indiquant son statut en majuscules (OUVERT, RÉPONDU, FERMÉ) et son texte. Une page qui comporte des annotations sans repères de métré est également incluse.
- {{ui:XLSX}} ajoute une feuille **Annotations** : feuille, type, statut et texte, une ligne par annotation.
- Elles sont enregistrées dans le fichier `.takeoff.json` et dans un [PDF contenant le métré](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
