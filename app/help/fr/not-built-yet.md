---
title: "Ce qui n'est pas encore disponible"
summary: "Les fonctions de métré que cette version ne propose pas encore, et ce qu'il faut faire en attendant."
keywords: limites, manquant, pas encore, feuille de route, prévu, solution de contournement, par tronçon, cloud, bureau
from: 94ff90d0
---

TakeoffCraft est en cours de développement. Cette liste indique ce que la version actuelle ne fait pas, et comment réaliser malgré tout le travail.

## Mesure

| Pas encore disponible | Solution en attendant |
|---|---|
| Insérer un point au milieu d'un tronçon ou d'un contour | Supprimez le repère et redessinez-le. |
| Sélection par fenêtre (cadre) | {{key:Shift}} + clic sur chaque repère, ou {{key:Mod+A}} pour tous les repères de la feuille. Voir [Copier, coller et dupliquer des repères](topic:copy-paste). |
| Faire pivoter, symétriser ou redimensionner une copie collée | Collez sur une feuille à la même échelle et dans la même orientation ; dessinez le reste à la main. |
| Lire une échelle sur une feuille numérisée ou à partir d'une barre d'échelle graphique | Choisissez le prédéfini, ou étalonnez sur la longueur de la barre. |
| Plus d'une échelle par feuille (zones de détail, plans agrandis) | Mesurez la partie à l'échelle de la feuille, et métrez le détail sur sa propre feuille agrandie si l'ensemble en comporte une. |

## Postes et prix

| Pas encore disponible | Solution en attendant |
|---|---|
| Formules d'ouvrage utilisant les autres types de repères d'un poste (les portes d'un poste pièce dans les formules de son niveau) | Les formules utilisent les totaux du type principal ; chiffrez les autres types sur leurs propres lignes. |
| Formules d'ouvrage calculées tronçon par tronçon | Les formules utilisent les totaux du poste ; utilisez `N` pour les suppléments par tronçon. |
| Formules utilisant les quantités d'un autre poste | Refaites le mesurage dans ce poste, ou calculez-le dans l'export tableur. |
| Équipes sur les composants d'ouvrage, ou journée de travail autre que 8 heures | Affectez l'équipe au poste ; pour une autre durée de journée, lisez les jours-équipe comme heures-équipe ÷ votre journée. |
| Annotations autres que les notes, nuages et surlignages (flèches, cotes, tampons), ou réponses sur une note | Écrivez-le dans le texte de la note ; changez son statut à mesure qu'il est réglé. |
| Une bibliothèque de prix partagée par une équipe, ou conservée avec votre compte | La bibliothèque est conservée dans ce navigateur : exportez-la en CSV et importez-la sur l'autre ordinateur. |
| Lots de métiers vérifiés par des métreurs en activité | Chaque lot est un point de départ : vérifiez ses hypothèses par rapport à votre chantier et à vos produits avant de chiffrer. Voir [Lots de métiers](topic:trade-packs). |
| Prix dans les lots de métiers | Les lots ne fournissent que des ouvrages : saisissez vos propres taux, ou importez votre liste de prix en CSV. |
| Renommer le métré | Le nom vient du premier PDF ; renommez les fichiers téléchargés. |
| Nommer les feuilles à la main | Les feuilles sont nommées d'après les étiquettes de page du PDF ; recherchez par nom de fichier et page. |

## Dessins (DWG et DXF)

| Pas encore disponible | Solution en attendant |
|---|---|
| Tables de styles de tracé, affectations de plumes et fichiers CTB sur les feuilles d'un dessin | Un dessin est affiché en noir, ou dans ses couleurs assombries pour le papier ; les épaisseurs de ligne viennent du dessin. |
| Ouverture d'un DXF binaire, ou d'un DWG antérieur à AutoCAD 2000 | Enregistrez-le en DXF ASCII ou en DWG plus récent. |
| Retrouver une référence externe (xref) d'après le dossier où elle se trouve | Ouvrez aussi le fichier de la référence externe, avec le dessin principal : elle est retrouvée par son nom parmi les fichiers ouverts. |
| Mesurer des polylignes 3D, maillages, solides et régions | Comptez-les par calque et type, ou mesurez la vue en plan avec les outils Linéaire et Aire. |
| Texte d'un PDF annoté issu d'un dessin dans d'autres écritures que l'alphabet latin | Les caractères absents de la police Helvetica s'impriment « ? » dans le PDF annoté ; le dessin à l'écran n'est pas modifié. |
| Transmettre un dessin à une autre application depuis la barre des feuilles | Ouvrez le même fichier dans cette application. |
| Un dessin qui contient le métré, comme le fait {{ui:PDF avec le métré intégré}} pour les PDF | {{ui:Enregistrer le métré}} : le `.takeoff.json` se rouvre sur le même dessin, retrouvé par son contenu. |
| Dessin ou comptage sur les fonds PDF, images et objets OLE placés dans un dessin | Les images n'apparaissent que sous forme de cadre. Ouvrez le PDF du fond lui-même comme une feuille. |

## Comptage auto

| Pas encore disponible | Solution en attendant |
|---|---|
| Repérer des symboles sur une feuille sans échelle, dessinés à une autre taille | Donnez son échelle à la feuille, ou recherchez-les avec un cadre tracé sur la feuille. |
| Repérer des symboles symétriques | Comptez-les à la main, ou relancez la recherche avec un cadre autour d'un symbole symétrique. |

## Fichiers et partage

| Pas encore disponible | Solution en attendant |
|---|---|
| Un seul PDF qui montre les repères et contient le métré | {{ui:PDF annoté}} pour montrer les repères ; {{ui:PDF avec le métré intégré}} pour rouvrir dans TakeoffCraft. |
| Un CSV des quantités par feuille ou des repères | Utilisez {{ui:XLSX}} : ses feuilles Par feuille et Repères les contiennent. |
| Enregistrement dans le cloud | Pas encore disponible. Enregistrez les fichiers de projet sur votre ordinateur et faites-en une sauvegarde. |
| Une application TakeoffCraft de bureau distincte | À partir de la version 0.5, l'application de bureau est CadCraft Studio, avec les huit applications dans une seule installation. TakeoffCraft fonctionne aussi dans le navigateur. |

## Écran et saisie

| Pas encore disponible | Solution en attendant |
|---|---|
| Un menu du clic droit (ou de l'appui prolongé) | Utilisez la barre d'outils, les panneaux et les touches. Un appui prolongé termine un tronçon ou un contour. |
| Faire pivoter la vue | Les pages pivotées dans le PDF s'affichent déjà droites. |

## Vue 3D

| Pas encore disponible | Solution en attendant |
|---|---|
| Dessiner ou modifier des repères en 3D | Revenez à la feuille ({{key:3}}) pour dessiner ; la sélection et la suppression fonctionnent en 3D. |
| Aligner des niveaux superposés tracés à des endroits différents sur leurs pages | Superposez des niveaux tracés de la même façon ; vérifiez les autres une feuille à la fois. |
| Compter des balises de repérage dimensionnées comme l'objet compté | Chaque balise d'une feuille a la même taille ; elle marque l'emplacement d'un comptage, pas ce qu'il compte. |

## Soumission

| Pas encore disponible | Solution en attendant |
|---|---|
| Additifs à un lot déjà envoyé, lettres d'attribution, feuille de périmètre que chaque soumissionnaire signe | Envoyez un nouveau lot et rédigez vous-même l'attribution. [Envoyer un lot pour soumission](topic:bid-invitations) décrit ce qui est disponible. |
| Envoi d'invitations à soumissionner depuis n'importe quel compte : pendant les tests, l'envoi d'e-mails aux soumissionnaires externes est désactivé, sauf pour les comptes activés par l'équipe CadCraft | Téléchargez le {{ui:Périmètre CSV}}, envoyez-le vous-même par e-mail et saisissez les offres. |
| Envoi de lots de soumission depuis une fenêtre Studio | Envoyez depuis TakeoffCraft dans le navigateur. |
| Recalcul de la zone de soumission d'une variante selon une offre choisie | Les variantes et sous-totaux des zones de soumission utilisent vos propres prix ; ajustez la variante à la main. |
| Rappels automatiques avant l'échéance de l'assurance ou de la licence d'un sous-traitant | La date est signalée sur la page Sous-traitants une fois dépassée ou à moins de 30 jours ; vérifiez-la lors de l'invitation. |

## Panneaux

| Pas encore disponible | Solution en attendant |
|---|---|
| Déplacer le tableau {{ui:Quantities}} | Seuls les panneaux {{ui:Sheets}} et {{ui:Items}} se déplacent. Voir [Disposer les panneaux](common:arrange-panels). |

## Tableurs

Le classeur XLSX a été vérifié dans LibreOffice Calc, qui a recalculé chaque total au centime près comme TakeoffCraft. Il n'a pas encore été ouvert dans Excel. Si un tableur affiche quelque chose d'inattendu, l'export CSV contient la même estimation sous forme de valeurs simples.
