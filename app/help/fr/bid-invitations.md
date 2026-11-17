---
title: Envoyer un lot pour consultation
summary: Envoyez un lot par e-mail aux sous-traitants, laissez-les saisir leurs prix sur une page sans compte, gardez les prix scellés jusqu'à l'heure d'ouverture, et importez-les dans la feuille de mise à niveau.
keywords: envoi pour consultation, invitation, invitation à soumissionner, soumissionnaire, sous-traitant, inviter, e-mail, demande de prix, offres scellées, ouverture des offres, jour de remise, offre tardive, date limite, rappel, fiche sous-traitant, assurance, qualification, csv, connexion, PDF des feuilles
from: fb314b2c
---

{{ui:Exporter}} › {{ui:Lots de travaux et mise à niveau…}} › {{ui:Envoyer en consultation…}} envoie un lot aux personnes que vous choisissez. Le site envoie à chacune un lien par e-mail ; elles ouvrent une page, voient le périmètre et saisissent un prix pour chaque ligne. Vous voyez les prix dans la feuille de mise à niveau, prêts à être comparés ([Lots de travaux et mise à niveau des offres](topic:bid-leveling)).

:::note
**L'envoi n'est pas encore ouvert à tous.** Pendant les essais, la fonction ne fonctionne que pour les comptes que l'équipe CadCraft a activés ; si le vôtre ne l'est pas, la boîte de dialogue l'indique. La page du soumissionnaire fonctionne pour toutes les invitations envoyées.
:::

## Avant d'envoyer

- Il vous faut un compte CadCraft avec une adresse e-mail vérifiée. TakeoffCraft dans le navigateur vous demande de **vous connecter** : un onglet s'ouvre sur getcadcraft.com, vous cliquez sur Connecter, et cet onglet obtient une connexion valable 30 jours, pour les lots de travaux uniquement, jusqu'à la fermeture de l'onglet TakeoffCraft. Vous pouvez la supprimer à tout moment sur votre page de sécurité. Une fenêtre Studio ne peut pas encore envoyer.
- Donnez à chaque élément un numéro CSI : un lot correspond aux éléments d'une division CSI ([Créer des éléments de métré](topic:create-items)).
- Mettez à l'échelle les feuilles sur lesquelles se trouvent les repères du lot, pour que les quantités vues par les soumissionnaires soient mesurées.

## Envoyer un lot

1. Choisissez {{ui:Envoyer en consultation…}} sous le lot.
2. Renseignez le titre, le projet et un message facultatif, ainsi que la **date limite** dans votre propre fuseau horaire.
3. Laissez **Garder les prix scellés** coché pour masquer tous les prix jusqu'à l'**heure d'ouverture** (et non avant l'heure limite), ou décochez-le pour voir les prix à mesure qu'ils arrivent.
4. Laissez la case des feuilles cochée pour envoyer un PDF des feuilles qui portent les repères du lot, avec les repères dessinés. Vos prix ne figurent jamais dans ce qui est envoyé : seuls les noms d'éléments, numéros CSI, quantités, unités et noms de feuilles y figurent.
5. Saisissez les personnes à inviter, une par ligne, sous la forme `Nom <nom@entreprise.com>` ou simplement l'adresse, ou cochez des personnes dans vos fiches sous-traitants. Jusqu'à 60 à la fois, 100 par lot.
6. Choisissez {{ui:Envoyer les invitations}}. Chaque personne reçoit un e-mail simple avec votre nom et votre adresse, l'heure limite et le lien ; les réponses vous parviennent.

La boîte de dialogue indique combien ont été envoyées et nomme les personnes ignorées : déjà invitées à ce lot, ayant demandé à ne plus recevoir d'invitations à soumissionner, adresse non valide, ou limite d'envoi dépassée.

## Ce que voit le soumissionnaire

Une page à un long lien privé, sans connexion. Elle indique qui l'a invité, l'heure limite, si les prix sont scellés, votre message et le PDF des feuilles, puis chaque ligne avec sa quantité. Pour chaque ligne, il saisit un prix ou coche **Non inclus**, et peut ajouter une remarque ; il ajoute des remarques pour l'ensemble du lot et jusqu'à 3 fichiers (un devis, une lettre de périmètre, un certificat). Il peut enregistrer à nouveau et modifier ses prix jusqu'à l'ouverture, ou **décliner**, avec une case pour demander que CadCraft ne lui envoie plus d'invitations à soumissionner.

## Offres scellées et ouverture

Avant l'heure d'ouverture, **personne** ne voit un prix, une remarque ou un fichier : ni vous, ni dans TakeoffCraft, ni sur votre page Lots de travaux. Vous voyez qui a été invité et qui a répondu. À l'heure d'ouverture, toutes les offres s'affichent d'un coup. Une offre enregistrée après l'heure limite est acceptée et marquée **tardive** ; la mise à niveau la liste toujours, et le retard est une simple mention, non une décision. Après l'ouverture, un soumissionnaire ne peut plus modifier un prix. Sans scellement, une offre est définitive dès l'heure limite.

## Obtenir les prix

{{ui:Récupérer les prix}} interroge le site et ajoute chaque réponse au lot comme offre, marquée **web**. TakeoffCraft interroge aussi discrètement chaque fois que vous ouvrez la boîte de dialogue, lorsqu'il est connecté. Une offre dont le soumissionnaire a enregistré une nouvelle version est mise à jour sur place ; une offre que vous avez modifiée reste telle que vous l'avez laissée jusqu'à ce qu'il envoie une nouvelle version. Chaque récupération est une étape que {{key:Mod+Z}} annule. Les lignes non incluses arrivent comme le périmètre que l'offre laisse de côté, de sorte que la mise à niveau les complète à votre propre coût.

## Sur le site

Une fois que vous pouvez envoyer, votre compte comporte deux pages de plus. **Lots de travaux** liste ce que vous avez envoyé, qui a répondu, les offres tardives et les fichiers ; elle vous permet d'envoyer un rappel (un lien neuf ; l'ancien cesse de fonctionner), de clore, de rouvrir ou d'annuler un lot. **Sous-traitants** tient une fiche pour chaque entreprise : contacts, métiers, réponses de qualification (années d'activité, capacité de cautionnement, EMR, bilan sécurité, syndiqué ou non, références), dates d'expiration de la licence et de l'assurance, signalées une fois dépassées ou à moins de 30 jours, et leurs offres passées. Importez et exportez les fiches en CSV : une ligne par contact, avec les colonnes que l'export affiche ; une entreprise déjà présente est mise à jour, jamais dupliquée.

## Qui voit quoi, et pendant combien de temps

Les prix, remarques et fichiers d'un soumissionnaire vont à vous et à l'équipe CadCraft, qui exploite la page. Ils sont conservés 24 mois après la date limite, et les fichiers 180 jours ; ensuite ils sont supprimés. L'adresse e-mail du soumissionnaire est celle que vous avez saisie ; elle ne sert qu'à envoyer l'invitation et les rappels la concernant. Une adresse reçoit au plus 3 invitations par jour, tous expéditeurs confondus, et vous pouvez en envoyer jusqu'à 200 par jour.

## Pas encore disponible

Les additifs, les lettres d'attribution, une feuille de périmètre signée pour chaque soumissionnaire, et les rappels automatiques avant l'expiration d'une assurance ne sont pas encore disponibles. Voir [Pas encore disponible](topic:not-built-yet).
