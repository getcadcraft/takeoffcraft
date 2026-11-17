---
title: "Démarrer un métré et ouvrir un jeu de plans"
summary: "Ouvrez un ou plusieurs PDF comme un jeu de plans, repérez-vous entre les feuilles et passez de l'une à l'autre."
keywords: ouvrir, jeu de plans, plusieurs pdf, fichiers multiples, feuilles, dessins, étiquettes de page, liste des feuilles, naviguer, déposer, transmission, ouvrir dans une autre application, annotation
from: ed434468
---

Un jeu de plans compte souvent plusieurs PDF : architecture, structure, mécanique. TakeoffCraft les ouvre côte à côte comme une seule liste de feuilles, et un même métré peut couvrir tous les fichiers.

## Ouvrir les PDF

1. Choisissez {{ui:Ouvrir des PDF}} dans le groupe {{ui:Fichier}}, ou appuyez sur {{key:Mod+O}}. (Les autres styles de menu l'appellent {{ui:Ouvrir des PDF…}}.)
2. Dans la boîte de dialogue d'ouverture, sélectionnez tous les PDF du jeu. Maintenez {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} pour en choisir plusieurs, ou {{key:Shift}} pour une plage.
3. Choisissez Ouvrir.
   Un message « Ouverture de (nom)… » s'affiche pendant la lecture de chaque fichier. Ensuite, chaque page apparaît sous {{ui:Feuilles}}, et la première page du premier nouveau PDF s'ouvre.

Vous pouvez aussi faire glisser les PDF depuis {{pick:mac=Finder|windows=Explorateur de fichiers|linux=votre gestionnaire de fichiers}} et les déposer n'importe où sur TakeoffCraft. Un cadre « Déposez des PDF, des dessins DWG ou DXF, ou un .takeoff.json » apparaît pendant le glissement.

Pour ajouter d'autres PDF plus tard, refaites la même chose. Les PDF déjà ouverts sont ignorés.

L'écran d'accueil liste aussi les PDF et les métrés ouverts récemment, dans les navigateurs qui permettent à une page de rouvrir un fichier (Chrome et Edge). Cliquez sur l'un d'eux pour l'ouvrir ; le navigateur peut demander une autorisation au préalable. Voir [Vos fichiers](common:your-files).

:::note
Rien n'est envoyé. Le navigateur lit les PDF sur votre ordinateur, et ils disparaissent de TakeoffCraft lorsque vous fermez l'onglet ou choisissez {{ui:Nouvelle}}.
:::

## Dessins avec des PDF

{{ui:Ouvrir des PDF}} accepte aussi les dessins DWG et DXF, seuls ou avec des PDF : l'espace objet et les présentations de chaque dessin deviennent des feuilles dans la même liste. Voir [Ouvrir un dessin DWG ou DXF](topic:open-a-drawing), puis [Compter depuis un dessin](topic:count-from-a-drawing).

## Un PDF transmis par une autre application

Une autre application de la gamme peut vous transmettre le PDF qu'elle a ouvert : elle ouvre TakeoffCraft dans un nouvel onglet, et le PDF s'ouvre comme si vous l'aviez déposé. La barre d'état affiche « Ouvert (nom), transmis depuis (application). Le fichier d'origine est inchangé. » Rien n'est envoyé ; le fichier passe par le stockage propre à ce navigateur et disparaît dès qu'il est ouvert.

Si la barre d'état indique que le PDF « n'est pas arrivé », l'onglet a attendu trop longtemps, ou le PDF était déjà ouvert dans un autre onglet : ouvrez-le avec {{ui:Ouvrir des PDF}}.

Dans l'autre sens, lorsque MarkupCraft est disponible sur votre poste et peut recevoir un fichier, la barre des feuilles sous le dessin comporte un bouton {{ui:MarkupCraft}} : il ouvre le PDF de la feuille affichée dans MarkupCraft, dans un nouvel onglet, pour le relire et l'annoter.

## Trouver une feuille

- Faites défiler la liste {{ui:Feuilles}} à gauche et cliquez sur une feuille.
- Saisissez dans **Rechercher des feuilles**, en haut de la liste, pour filtrer par numéro de feuille, nom de fichier ou étiquette de page. Le compteur à côté de {{ui:Feuilles}} affiche « 3 sur 40 » pendant qu'un filtre est actif.
- Appuyez sur {{key:PageDown}} pour la feuille suivante et sur {{key:PageUp}} pour la précédente. Elles suivent la liste telle qu'elle est filtrée.

:::mac
Sur un clavier Mac sans touches Page Up et Page Down, appuyez sur fn avec la flèche haut ou bas.
:::

## Comment les feuilles sont nommées

- Une page dont le PDF donne une étiquette, comme `A-101`, prend ce nom.
- Une page sans étiquette (ou dont l'étiquette n'est que son numéro de page) s'appelle « (nom du fichier), page (n) ».
- Lorsque plusieurs PDF sont ouverts, les feuilles étiquetées portent aussi le nom du fichier : « A-101 — Architecture ».

Les noms de feuilles ne peuvent pas encore être saisis à la main.

## Se déplacer sur une feuille

- Tournez la molette de la souris pour zoomer à l'emplacement du pointeur.
- Faites glisser avec le bouton gauche ou central pour faire un panoramique. Avec {{ui:Comptage auto}}, ou lorsque vous commencez sur le coin d'un repère, maintenez {{key:Space}} pendant le glissement, ou faites glisser avec le bouton central.
- Appuyez sur {{key:F}} ou choisissez {{ui:Page entière}} pour voir toute la feuille ; {{key:W}} ou {{ui:Largeur}} l'ajuste à sa largeur.
- Appuyez sur {{key:Plus}} ou {{key:=}} pour zoomer, et sur {{key:Minus}} pour dézoomer, autour du centre de la vue.

Chaque feuille garde son propre zoom et sa position tant qu'elle reste ouverte.

## Suite

Avant de mesurer une feuille, il lui faut une échelle : [Régler l'échelle](topic:set-the-scale).
