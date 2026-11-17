---
title: "Ouvrir un dessin DWG ou DXF"
summary: "Ouvrez un fichier de dessin en feuilles (espace objet et chaque présentation), commencez avec l'échelle indiquée par le dessin, affichez ou masquez ses calques et intégrez les dessins liés."
keywords: dwg, dxf, cao, dessin, ouvrir un dessin, présentations, espace objet, espace papier, feuilles, unités, insunits, échelle de fenêtre, xref, dessin lié, calques, gelé, sans pdf, tracer, sans tracer
from: d8c3f504
---

TakeoffCraft ouvre un dessin DWG ou DXF comme un PDF : inutile de le tracer d'abord en PDF. Le comptage à partir du dessin lui-même est exact, car le dessin connaît chaque objet. Voir [Compter depuis un dessin](topic:count-from-a-drawing).

## Ouvrir le dessin

1. Choisissez {{ui:Ouvrir des PDF}} dans le groupe {{ui:Fichier}}, ou appuyez sur {{key:Mod+O}}.
2. Sélectionnez le fichier DWG ou DXF. Vous pouvez en sélectionner plusieurs, et des PDF avec eux.
3. Choisissez Ouvrir.

Vous pouvez aussi déposer des fichiers de dessin sur TakeoffCraft, comme des PDF. Rien n'est envoyé : le navigateur lit le fichier sur votre ordinateur.

TakeoffCraft lit les DWG d'AutoCAD 2000 à 2018 et les DXF ASCII de R12 à 2018. Il refuse un DXF binaire (enregistrez-le en ASCII, ou en DWG) ainsi qu'un fichier qui n'est ni l'un ni l'autre, et indique pourquoi. Un fichier endommagé s'ouvre avec ce qui a pu être lu, et un message le signale ; ses comptages peuvent être incomplets.

## Feuilles

- **Modèle** est l'espace objet du dessin.
- **Chaque présentation** (onglet de l'espace papier) est une feuille, nommée d'après son onglet, dans l'ordre des onglets. Une présentation affiche le modèle à travers ses fenêtres de présentation, comme elle se trace.

Le zoom, le panoramique, l'accrochage aux lignes propres du dessin, les repères, les notes, {{ui:Étalonner}} et le reste fonctionnent comme sur un PDF. Les feuilles d'un dessin sont enregistrées dans le métré par le nom du fichier et une empreinte de son contenu, comme un PDF : rouvrez le même fichier et les repères sont sur ses feuilles.

## L'échelle

Une feuille commence avec l'échelle que donne le dessin :

- **Une présentation** prend l'échelle de sa plus grande fenêtre de présentation. Une échelle comme 1/2" = 1'-0" est nommée comme le prédéfini qu'elle est ; toute autre s'affiche « Depuis la fenêtre de présentation du dessin : 1" = 2.5' ». Si une présentation a des fenêtres à d'autres échelles, la plus grande fixe l'échelle de la feuille : vérifiez les autres avec {{ui:Vérifier}}.
- **Modèle** prend les unités du dessin (pouces, millimètres, pieds…) comme échelle : « Unités du dessin (pouces) ».
- **Un dessin sans unités** (le dessin ne précise jamais si une unité est un pouce ou un millimètre) n'a pas d'échelle : la feuille affiche « Pas d'échelle », et la mesure y est refusée, comme sur un PDF sans échelle. Le comptage n'en a pas besoin. Donnez-lui une échelle avec {{ui:Étalonner}}.

{{ui:Étalonner}}, {{ui:Vérifier}} et la liste {{ui:Prédéfini}} modifient l'échelle à tout moment et l'emportent sur celle du dessin. La liste des prédéfinis est désactivée sur Modèle, qui n'a pas de format de papier.

## Calques

{{ui:Calques}} dans la barre des feuilles liste les calques du dessin, avec le nombre d'objets que chacun compte sur cette feuille. Les calques que le fichier a désactivés ou gelés sont d'abord masqués. Décochez un calque pour le masquer, ou cochez un calque masqué pour l'afficher : la feuille se redessine, et ce qui est masqué est exclu des comptages et des objets proposés à {{ui:Mesurer le dessin}}, sauf si vous demandez aussi de compter les calques masqués. {{ui:Tout afficher}} affiche tous les calques ; {{ui:Revenir aux calques du fichier}} annule vos modifications. Les choix de calques appartiennent à cette session, pas au fichier du métré.

## Dessins liés (xrefs)

Un dessin qui lie d'autres dessins les affiche là où ils sont insérés. TakeoffCraft retrouve un dessin lié parmi les **fichiers ouverts**, par son nom : ouvrez le dessin principal et son dessin lié ensemble (ou l'un après l'autre). Tant qu'il ne l'est pas, la barre d'état indique combien de dessins liés n'ont pas été trouvés, que leur contenu manque, et les comptages le signalent.

## Limites

- Les objets que TakeoffCraft ne peut ni lire ni placer (objets proxy, classes inconnues) sont listés par type dans la fenêtre de comptage ; ils ne sont jamais écartés sans avertissement.
- Les très grands dessins ne sont affichés qu'en partie, et les comptages s'arrêtent à une limite, en le signalant. Ouvrez plutôt un PDF tracé de ce dessin.
- Un dessin est affiché en noir et dans ses propres couleurs, assombries pour un papier blanc. Les tables de styles de tracé et les affectations de plumes ne sont pas appliquées.
