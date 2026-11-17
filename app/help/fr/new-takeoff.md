---
title: Démarrer un nouveau métré
summary: Effacez tout et commencez un métré vierge sans recharger la page, après avoir d'abord mis votre travail en sécurité.
keywords: nouveau, nouveau métré, effacer, réinitialiser, recommencer, vide, fermer les PDF, travail suivant
from: 16d392a4
---

{{ui:Nouvelle}} ferme tous les PDF et démarre un métré vierge sur la même page.

1. Enregistrez le métré en cours si vous voulez le conserver : {{ui:Enregistrer le métré}} ou {{key:Mod+S}}.
2. Choisissez {{ui:Nouvelle}} dans le groupe {{ui:Fichier}}.
3. S'il y a des modifications non enregistrées, TakeoffCraft demande **Métré non enregistré** : choisissez {{ui:Enregistrer le métré d'abord}} (il télécharge le projet, puis efface), {{ui:Abandonner les modifications}}, ou {{ui:Annuler}}.
   La fenêtre revient à son état vide : aucun PDF, aucun poste, aucun repère, aucune échelle. La barre d'état indique « New takeoff. Open PDFs to begin. »

Ce qui est effacé :

- chaque PDF ouvert, ses feuilles et ses miniatures,
- les postes, les ouvrages, les repères et les échelles,
- le zoom et la position de chaque feuille,
- l'historique d'annulation (vous ne pouvez pas annuler {{ui:Nouvelle}}),
- le mode arc, et toute recherche ou révision de comptage auto.

Vos fichiers sur le disque ne sont pas touchés. Pour reprendre l'ancien métré, ouvrez son `.takeoff.json` et ses PDF : voir [Enregistrer et rouvrir un métré](topic:save-and-reopen).

:::note
Chaque nouveau métré démarre sans poste. Pour en reprendre, copiez-les d'abord : {{ui:Copier le poste}} sous Éléments (ou copiez des repères, qui emportent leurs postes), puis {{ui:Coller}} dans le nouveau métré. Voir [Copier, coller et dupliquer des repères](topic:copy-paste). Pour les postes que vous utilisez sur chaque chantier, conservez-les dans votre [bibliothèque de prix](topic:price-library) et ajoutez-les depuis là, ou ajoutez un [lot](topic:trade-packs).
:::
