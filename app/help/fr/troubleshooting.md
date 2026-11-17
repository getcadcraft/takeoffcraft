---
title: Dépannage
summary: Symptômes, causes et solutions aux messages et surprises que vous pouvez rencontrer dans TakeoffCraft, cités tels que l'application les affiche.
keywords: problèmes, erreurs, ne fonctionne pas, solution, aide, refusé, ne mesure pas, pas d'échelle, repères manquants, échec de l'export, hors ligne, tactile
from: cd319c9b
---

TakeoffCraft explique la plupart des refus dans la barre d'état en bas de la fenêtre. Recherchez le message ci-dessous.

## Ouverture des fichiers

| Message ou symptôme | Cause | Solution |
|---|---|---|
| Le lecteur PDF n'a pas pu se charger. Rechargez la page pour réessayer. | Le lecteur PDF de l'application ne s'est pas chargé, généralement parce que vous êtes hors ligne et que l'application n'a jamais été enregistrée pour une utilisation hors ligne. | Reconnectez-vous et rechargez. Puis choisissez {{ui:Enregistrer pour le hors ligne}} et attendez {{ui:Prêt hors ligne}} ; voir [Travailler hors ligne](common:offline). |
| (nom) est protégé par mot de passe. Ouvrez une copie non protégée. | Le PDF demande un mot de passe pour s'ouvrir. | Demandez une copie non protégée, ou supprimez le mot de passe dans un logiciel PDF de confiance. |
| (nom) n'a pas pu être lu comme un PDF (…) | Le fichier est endommagé ou n'est pas réellement un PDF. | Téléchargez-le à nouveau, ou réenregistrez-le depuis le logiciel qui l'a créé. |
| (nom) est déjà ouvert. | Le même PDF (même contenu) est ouvert. | Rien à faire. |
| TakeoffCraft ouvre les PDF et les projets .takeoff.json. Ignoré : … | Les autres types de fichiers ont été écartés. | Convertissez d'abord les dessins en PDF. |
| Rien ne se passe quand je dépose des fichiers | Les fichiers ont été déposés en dehors de la fenêtre du navigateur, ou le navigateur a ouvert le PDF dans un nouvel onglet. | Déposez-les sur la page TakeoffCraft elle-même ; le cadre « Déposez des PDF ou un .takeoff.json » indique quand cela fonctionnera. |
| L'ouverture d'un gros jeu prend du temps | Chaque PDF est lu en entier pour en établir l'empreinte. | Attendez que le message « Ouverture de (nom)… » disparaisse. Les miniatures se remplissent au fil du défilement. |

## Mesure

| Message ou symptôme | Cause | Solution |
|---|---|---|
| Ouvrez d'abord un PDF. | Aucune feuille n'est ouverte. | Ouvrez un PDF. |
| Cette feuille n'a pas encore d'échelle, elle ne peut donc pas être mesurée. Choisissez une échelle prédéfinie ou étalonnez d'abord (les comptages fonctionnent sans échelle). | Les outils linéaire, surface, cercle et découpe ont besoin d'une échelle. | [Définir l'échelle](topic:set-the-scale). |
| Créez d'abord un poste linéaire (nommez-le sous Éléments), puis cliquez sur la feuille. | Il n'existe aucun poste de ce type. | Remplissez le formulaire {{ui:Nouveau poste}} qui s'est ouvert, et choisissez {{ui:Ajouter}}. |
| Sélectionnez d'abord un poste à métrer (panneau Éléments). | Le poste en cours a été supprimé. | Cliquez sur un poste sous {{ui:Éléments (I)}}. |
| Un tronçon a besoin d'au moins deux points. | Vous avez terminé après un seul clic. | Cliquez sur au moins deux points. |
| Une surface a besoin d'au moins trois points. | Trop peu d'angles. | Cliquez sur au moins trois angles. |
| Le contour se croise lui-même, sa surface serait donc fausse. Retracez-le sans le croiser. | Une forme en huit. | Tracez-le comme deux surfaces, ou parcourez le bord dans l'ordre. |
| Ces points n'encadrent aucune surface. | Tous les points sont alignés. | Cliquez sur des angles qui encadrent un espace. |
| Sélectionnez d'abord un repère de surface (outil Sélectionner), puis choisissez Découpe et tracez le trou à l'intérieur. | {{ui:Découpe}} a besoin d'une surface sélectionnée. | Appuyez sur {{key:V}}, cliquez sur la surface, puis sur {{key:X}}. |
| Une découpe doit se trouver entièrement à l'intérieur de la surface. | Le trou croise ou sort du contour. | Tracez le trou à l'intérieur de la surface. |
| Les découpes ne peuvent pas se chevaucher. | Deux trous se chevauchent. | Tracez un seul trou englobant les deux, ou séparez-les. |
| … Le point a été replacé. | Un angle déplacé ferait croiser le contour avec lui-même ou sortir un trou de la surface. | Faites glisser vers un endroit qui garde la forme valide. |
| Cliquez sur un point du bord du cercle, à distance de son centre. | Le second clic était trop près du centre. | Cliquez plus loin. |
| Les clics déplacent la feuille au lieu d'ajouter des points | Le pointeur a bougé de plus de quelques pixels pendant que le bouton était enfoncé ; cela compte comme un glissement. | Cliquez sans bouger, surtout sur un pavé tactile. |
| Maj ne s'accroche pas | Vous placez un point sur un arc, ou vous tracez un cercle. | L'accrochage à 45° ne s'applique qu'aux segments droits. |
| Les points sautent sur une ligne voisine | L'accrochage aux lignes du dessin est activé. | Faites un zoom pour cliquer entre les lignes, ou appuyez sur {{key:F3}} pour désactiver {{ui:Accrochage}}. |
| Aucun marqueur d'accrochage n'apparaît | L'accrochage est désactivé, la feuille est une numérisation, ou l'outil ne s'accroche pas (Compter, Comptage auto, collage). | Appuyez sur {{key:F3}} ; sur une numérisation, il n'y a aucune ligne à laquelle s'accrocher. |
| La longueur est fausse | L'échelle est fausse (souvent un PDF redimensionné avec un préréglage). | Utilisez {{ui:Vérifier}} sur une cote connue, puis {{ui:Étalonner}}. |

## Échelle

| Message ou symptôme | Cause | Solution |
|---|---|---|
| Choisissez deux points plus éloignés l'un de l'autre. | Les points d'étalonnage sont presque superposés. | Étalonnez sur une cote plus longue. |
| Un message dans la boîte de dialogue d'étalonnage, du type « Cette distance n'a pas pu être lue » | La distance est saisie sous une forme que TakeoffCraft ne peut pas lire. | Voir [Saisie des longueurs, tarifs et pourcentages](topic:entry-formats). |
| Cette feuille n'a pas encore d'échelle, il n'y a donc rien à vérifier. Étalonnez-la, ou choisissez un préréglage. | {{ui:Vérifier}} sur une feuille sans échelle. | Définissez d'abord une échelle. |
| La liste {{ui:Prédéfini}} est grisée | Aucune feuille n'est ouverte. | Ouvrez un PDF. |

## Quantités et formules

| Message ou symptôme | Cause | Solution |
|---|---|---|
| Incomplet : … (non inclus dans les totaux) | Une erreur de formule, ou des repères sur des feuilles sans échelle. | Voir [Lire les quantités et l'estimation](topic:read-quantities#the-incomplete-warning). |
| +(n) sans échelle à côté d'un poste | Certains de ses repères se trouvent sur des feuilles sans échelle. | Donnez une échelle à ces feuilles. |
| Erreur de formule : … | La formule ne peut pas être calculée. | Voir [Langage des formules](topic:formulas#errors). |
| Ce poste a des repères, son type ne peut donc pas changer. | Le type est verrouillé dès qu'il y a des repères. | Créez un nouveau poste de l'autre type et retracez les repères avec celui-ci. |
| Un poste doit avoir un nom. | Le champ du nom a été vidé. | Saisissez un nom. |
| Saisissez un montant tel que 12.50. / Saisissez un pourcentage tel que 10 ou 7.5. | Un tarif ou une chute n'a pas pu être lu. | Voir [Saisie des longueurs, tarifs et pourcentages](topic:entry-formats). |
| Un total semble doublé | Le poste a ses propres tarifs et des composants qui portent le même coût. | Mettez les tarifs propres du poste à 0 lorsque ses composants portent le coût. |
| Les repères de ce poste se trouvent sur des PDF qui ne sont pas ouverts. | Vous avez cliqué sur un poste dont tous les repères se trouvent sur des PDF que vous n'avez pas ouverts. | Ouvrez ces PDF ; leurs noms sont listés sous {{ui:Feuilles}}. |

## Comptage auto

| Message ou symptôme | Cause | Solution |
|---|---|---|
| Ce cadre est trop petit. Tracez-le autour du symbole entier. | Le cadre est minuscule. | Faites un zoom et encadrez le symbole entier. |
| Ce cadre est presque vide. Tracez-le autour d'un symbole. | Le cadre ne contient que du papier. | Encadrez le symbole lui-même. |
| Aucune correspondance. Baissez le curseur de correspondance, ou encadrez le symbole de plus près. | Aucun résultat n'a atteint un score suffisant. | Encadrez le symbole de près, ou faites glisser le curseur {{ui:Correspondance}} plus bas. |
| Trop de correspondances, dont de faux symboles | Des symboles semblables obtiennent un score proche du vrai. | Remontez le curseur {{ui:Correspondance}} et cliquez sur les mauvais cadres pour les rejeter. |
| Correspondances manquantes sur d'autres feuilles | Ces feuilles dessinent le symbole à une autre taille, ou selon un angle qui n'est pas un multiple de 90°. | Recherchez sur ces feuilles avec un cadre tracé là-bas, ou comptez à la main. |
| (n) feuilles étaient trop grandes pour être recherchées à cette taille de symbole. | La feuille serait trop grande à la taille de travail. | Encadrez un symbole plus grand, ou comptez cette feuille à la main. |
| La recherche a échoué : … | La recherche en arrière-plan s'est arrêtée. | Réessayez ; rechargez la page si cela se reproduit (enregistrez d'abord). Hors ligne, cela ne fonctionne qu'une fois que la barre de l'application affiche {{ui:Prêt hors ligne}}. |
| Le glissement trace un cadre au lieu de déplacer la feuille | C'est ainsi que fonctionne {{ui:Comptage auto}}. | Maintenez {{key:Space}} et faites glisser, ou faites glisser avec le bouton central. |

## Enregistrement et export

| Message ou symptôme | Cause | Solution |
|---|---|---|
| Rien à exporter pour l'instant : créez un poste et métrez-le. | Il n'y a aucun poste. | Créez d'abord un poste. |
| Aucun repère sur les PDF ouverts pour l'instant. | {{ui:PDF annoté}} n'a rien à dessiner sur les PDF ouverts. | Ouvrez les PDF qui ont des repères. |
| Ce PDF est protégé par mot de passe ou chiffré, une copie annotée ne peut donc pas être écrite. … | Le PDF est chiffré. | Exportez plutôt {{ui:XLSX}}, ou utilisez une copie non chiffrée du PDF (elle a alors besoin de son propre métré, puisqu'il s'agit d'un autre fichier). |
| Le PDF annoté n'a pas pu être écrit : … | Souvent : hors ligne, et l'application n'a pas été enregistrée pour une utilisation hors ligne, donc le générateur PDF manque. | Connectez-vous et choisissez à nouveau {{ui:PDF annoté}}. Pour l'éviter, choisissez {{ui:Enregistrer pour le hors ligne}} et attendez {{ui:Prêt hors ligne}}. |
| Un seul PDF annoté a été téléchargé | Le navigateur a bloqué plusieurs téléchargements à la fois. | Autorisez les téléchargements multiples pour ce site, puis exportez à nouveau. |
| (fichier) n'est pas un projet TakeoffCraft (ce n'est pas du JSON valide). / Ce n'est pas un fichier de projet TakeoffCraft. | Mauvais fichier, ou fichier endommagé. | Sélectionnez le fichier `.takeoff.json`. |
| Ce projet a été enregistré par une version plus récente de TakeoffCraft. Ouvrez-le dans cette version. | Le fichier provient d'une version plus récente. | Ouvrez-le dans la version plus récente. |
| (n) repères étaient endommagés et ont été écartés. | Une partie du fichier était endommagée ou a été modifiée à la main. | Le reste s'est ouvert. Retracez les repères manquants, ou ouvrez une copie plus ancienne. |
| Repères manquants après réouverture | Les PDF ne sont pas ouverts, ou l'un d'eux a changé. | Voir [Enregistrer et rouvrir un métré](topic:save-and-reopen#when-a-pdf-has-changed). |
| Le navigateur demande « Quitter le site ? » | Il y a des modifications non enregistrées. | Restez, et enregistrez avec {{key:Mod+S}}. |

## Touches et souris

| Symptôme | Cause | Solution |
|---|---|---|
| Les touches de lettres ne font rien | Le curseur se trouve dans un champ (recherche, éditeur de poste, tableau). | Cliquez sur la feuille, ou appuyez sur {{key:Tab}} pour sortir du champ. |
| La molette zoome au lieu de faire défiler | La molette zoome toujours la feuille. | Faites glisser pour déplacer la vue. |
| Toute la page est devenue plus grande ou plus petite | Zoom du navigateur ({{key:Mod+Plus}} ou {{key:Mod+Minus}}). | Appuyez sur {{key:Mod+0}}. Zoomez sur la feuille avec la molette ou avec {{key:Plus}} et {{key:Minus}} seuls. |
| Un repère a disparu quand j'ai appuyé sur Retour arrière | Retour arrière supprime le repère sélectionné lorsque vous ne dessinez pas. | {{key:Mod+Z}} le restaure. |
| Le clic droit ne termine pas sur Mac | Le clic avec Control est traité comme un clic normal. | Utilisez un clic à deux doigts avec le clic secondaire activé, ou appuyez sur {{key:Enter}}. |

## Écrans tactiles

Sur un écran tactile :

- **Tapez** pour placer un point (ou pour sélectionner un repère avec {{ui:Sélectionner}}). Un doigt qui glisse déplace la vue.
- **Deux doigts** pincent pour zoomer autour du point situé entre eux, et déplacent la vue lorsqu'ils bougent ensemble. Poser un second doigt annule ce que le premier avait commencé, si bien qu'un pincement ne laisse jamais de point.
- **Terminez** un tronçon ou un contour par un **appui long** (le clic droit), un **double tapotement**, ou {{ui:Terminer}} dans la barre en bas de la feuille. Cette même barre comporte {{ui:Arrière}} (retire le dernier point) et {{ui:Annuler}}. Les surfaces se referment aussi en tapant sur le premier point.
- Les doigts disposent de cibles plus grandes : les points s'accrochent, se referment et se sélectionnent de plus loin, et les poignées d'angle sont plus grosses.

La saisie des longueurs exige un clavier ; le clavier à l'écran fonctionne lorsque la case {{ui:Type}} a le focus.

Sur une tablette, un clavier et une souris ou un pavé tactile facilitent beaucoup le métré.

## Travailler hors ligne

| Bouton ou symptôme | Cause | Solution |
|---|---|---|
| {{ui:Enregistrement impossible}} | Certains fichiers de l'application n'ont pas été téléchargés lors de l'enregistrement pour une utilisation hors ligne. | Vérifiez votre connexion et choisissez de nouveau le bouton. |
| {{ui:Hors ligne indisponible}} | Les fenêtres de navigation privée et certains ordinateurs gérés bloquent les copies hors ligne. | Utilisez une fenêtre normale, ou un autre navigateur. |
| « Enregistrement… » ne démarre jamais | Vous êtes hors ligne ; l'enregistrement nécessite une connexion. | Enregistrez en ligne. |
| L'application est ancienne après une mise à jour | La copie hors ligne date d'un jour antérieur. | En ligne, choisissez {{ui:Prêt hors ligne}}, puis {{ui:Enregistrer à nouveau (obtenir la version la plus récente)}}. |
| Vous voulez récupérer l'espace | La copie hors ligne fait environ 6 Mo. | Choisissez {{ui:Prêt hors ligne}}, puis {{ui:Supprimer la copie hors ligne}}. |

Voir [Travailler hors ligne](common:offline).

## Toujours bloqué

Rechargez la page si l'application ne répond plus. Votre métré est perdu au rechargement si vous ne l'avez pas enregistré : enregistrez donc d'abord avec {{key:Mod+S}} si vous le pouvez. Pour les questions liées au navigateur, voir [Navigateurs et ordinateurs](common:browsers).
