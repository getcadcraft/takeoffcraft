---
title: Enregistrer et rouvrir un métré
summary: Enregistrez le métré sous forme de projet .takeoff.json, rouvrez-le avec les mêmes PDF, et voyez ce qui se passe lorsqu'un PDF manque ou a changé.
keywords: métré dans le PDF, intégrer, pièce jointe, enregistrer, ouvrir, rouvrir, projet, takeoff.json, reprendre, continuer, PDF révisé, PDF modifié, PDF manquant, sauvegarde, enregistrement automatique, récupérer, plantage
from: bd5080a6
---

Un métré s'enregistre sous forme de petit fichier de projet, `(name).takeoff.json`. Il contient vos postes, ouvrages, prix, l'échelle de chaque feuille et chaque repère. Il ne contient **pas** les PDF ; il les retrouve grâce à leur contenu.

## Enregistrer

1. Choisissez {{ui:Enregistrer le métré}} dans le groupe {{ui:Fichier}}, ou appuyez sur {{key:Mod+S}}.
   Votre navigateur télécharge `(name).takeoff.json`. La barre d'état indique « Fichier enregistré : (name).takeoff.json. Il se rouvre sur les mêmes PDF (ils sont reconnus par leur contenu). »
2. Placez le fichier à côté des PDF du chantier, pour que les deux restent ensemble.

Chaque enregistrement télécharge un nouveau fichier. Votre navigateur peut nommer le deuxième `(name) (1).takeoff.json` ; gardez le plus récent.

Le nom provient du premier PDF ouvert dans ce métré.

:::note
{{ui:Enregistrer le métré}} reste le seul moyen de conserver un métré sous forme de fichier. Pendant votre travail, TakeoffCraft conserve aussi une copie de récupération dans ce navigateur (voir ci-dessous), et l'enregistrement dans le cloud n'est pas encore disponible. Si vous tentez de fermer l'onglet avec des modifications non enregistrées, le navigateur demande s'il faut quitter.
:::

## Garder le métré dans le PDF

{{ui:Exporter}} › {{ui:PDF avec le métré intégré}} télécharge une copie de chaque PDF ouvert, nommée comme `Plans (with takeoff).pdf`, qui contient tout le métré en pièce jointe : postes, repères, échelles, zones de soumission, tout ce que contient le `.takeoff.json`. Ses pages ne sont pas modifiées : elle s'affiche et s'imprime comme l'original, et les autres lecteurs PDF listent le métré parmi leurs pièces jointes.

Ouvrez ce PDF dans TakeoffCraft (quelle que soit la façon de l'ouvrir) : il demande « Ce PDF contient un métré ». Choisissez {{ui:Ouvrir le métré}} pour le récupérer, ou {{ui:Seulement le PDF}} pour n'ouvrir que le plan. La copie représente le PDF dont elle est issue ; un `.takeoff.json` enregistré à partir de l'une ou l'autre s'ouvre donc sur les deux.

Avec plusieurs PDF, chaque copie contient le métré entier ; ouvrez-les ensemble. Enregistrer à nouveau depuis une copie remplace le métré qu'elle contient, il n'en ajoute pas un second. Le `.takeoff.json` reste le fichier à conserver : il est petit, et c'est lui que l'enregistrement automatique et l'application de bureau écrivent.

## Si l'onglet ou le navigateur s'arrête

Quelques secondes après chaque modification, TakeoffCraft conserve une copie du métré dans l'espace de stockage de ce navigateur, avec ses PDF lorsqu'ils ne dépassent pas 64 Mo. Rien n'est envoyé. Lorsque vous enregistrez le métré, en commencez un nouveau ou ouvrez un autre projet, la copie est supprimée.

Si l'onglet plante, si le navigateur ou l'ordinateur s'arrête, ou si vous quittez avec des modifications non enregistrées, la prochaine fois que vous ouvrez TakeoffCraft, il demande **Récupérer votre travail ?** et liste le métré par son nom. Choisissez **Récupérer** pour le récupérer : les postes, repères et échelles reviennent, et ses PDF se rouvrent s'ils ont été conservés. La barre d'état indique « Récupéré : (name). Il n'est pas encore enregistré dans un fichier : Enregistrer le métré le conserve. » Lorsque les PDF étaient trop volumineux pour être conservés, rouvrez-les ; les repères réapparaissent sur leurs feuilles. Plus d'informations : [Récupérer votre travail](common:recover).

## Rouvrir

1. Ouvrez TakeoffCraft.
2. Déposez le fichier `.takeoff.json` et ses PDF ensemble sur la page. Ou choisissez {{ui:Ouvrir des PDF}} pour les PDF et {{ui:Ouvrir un métré}} pour le projet, dans l'ordre que vous voulez.
   La barre d'état indique « Métré ouvert : (name), 12 postes, 340 repères. » Chaque feuille retrouve son échelle, et les repères apparaissent sur leurs feuilles.

L'ordre des PDF n'a pas d'importance, ni leurs noms de fichiers ni leurs dossiers. TakeoffCraft reconnaît chaque PDF grâce à une empreinte de son contenu.

Si vous ouvrez un projet alors que le métré courant contient des modifications non enregistrées, TakeoffCraft demande d'abord : **Annuler**, **Abandonner les modifications**, ou **Enregistrer d'abord le métré**. Ouvrir un projet remplace les postes et repères courants ; les PDF déjà ouverts restent ouverts.

## Quand un PDF manque

Si vous ouvrez le projet sans tous ses PDF, la barre d'état ajoute « Ouvrez ses PDF pour voir les repères (listés sous Feuilles). » Sous la liste des feuilles, une remarque indique :

« Ce métré couvre aussi des PDF qui ne sont pas ouverts. Leurs quantités sont comptées ; ouvrez-les pour voir et modifier leurs repères : »

suivi des noms de fichiers et de leurs tailles. Leurs repères comptent toujours dans chaque total et chaque export, avec les échelles auxquelles ils ont été mesurés. Ouvrez ces PDF pour voir et modifier les repères.

## Quand un PDF a changé

Un PDF révisé, ou simplement réenregistré par un autre logiciel, a un contenu différent ; pour TakeoffCraft, c'est donc un **fichier différent**, même avec le même nom. Dans la remarque sous la liste des feuilles, un tel fichier indique « un fichier de même nom est ouvert, mais son contenu diffère ».

- Les repères restent attachés à l'ancienne version. Ils continuent d'être comptés, à leurs anciennes positions et échelles.
- Le PDF révisé s'ouvre comme de nouvelles feuilles, sans échelle ni repère.

Pour transférer le métré sur la révision, ouvrez les deux PDF et utilisez {{ui:Comparer}} sur la nouvelle feuille : [Comparer une feuille révisée et transférer le métré](topic:compare-revisions).

## Un fichier endommagé ou étranger

TakeoffCraft vérifie chaque fichier de projet avant de l'utiliser. Messages que vous pouvez voir :

- « (file) n'est pas un projet TakeoffCraft (JSON non valide). »
- « Ce n'est pas un fichier de projet TakeoffCraft. »
- « Ce projet a été enregistré par une version plus récente de TakeoffCraft. Ouvrez-le dans cette version. »
- « 3 repères étaient endommagés et ont été ignorés. » (le reste s'ouvre)

## Historique d'annulation

L'historique d'annulation repart à zéro lorsque vous ouvrez un projet. Enregistrer ne le vide pas.
