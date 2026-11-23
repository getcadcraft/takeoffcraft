---
title: Nouveautés de la version 0.9 (antérieure)
summary: Lire les longueurs en mètres, centimètres ou millimètres, les aires métriques en m2 avec la surface des murs, les préréglages d'échelle 1:75 et 1:150, les unités de poids et de température, l'arc selon dix méthodes, ainsi que les curseurs en direct, le suivi et la liste des personnes.
keywords: nouveautés 0.9, version antérieure, nouveautés, notes de version, journal des modifications, 0.9, afficher les longueurs en, mètres, centimètres, millimètres, métrique, suivre général, unités, unités d'affichage, m2, mètres carrés, surface de mur, préréglages d'échelle, 1:75, 1:150, poids, kilogrammes, kg, tonne, t, lb, température, celsius, fahrenheit, arc, méthodes d'arc, arc à 3 points, rayon, direct, live, curseurs, suivi, liste des personnes, classe, info-bulles, présentation, 0.8, 0.8.1, version, nouvelles fonctions, tout compter, légende, légende des symboles, jeu complet, mémoire des prix, anciens métrés, dernier métré, prix typique, fournisseur, stock, délai de livraison, commande en attente, liste de commande, rupture, panneau des problèmes, assistant, langues, périphériques de saisie, lignes de la barre d'outils, dwg
from: f4322ba2
---

Voici ce qui a changé dans TakeoffCraft 0.9, par rapport à la 0.8.1. C'est une petite version pour cette application : les longueurs peuvent maintenant être lues en mètres, centimètres ou millimètres, les aires et les échelles suivent correctement le travail métrique, et Arc propose dix façons de tracer. Les sessions en direct montrent aussi qui se trouve où.

## Nouveautés

### Lire les longueurs en mètres, centimètres ou millimètres

- **Afficher les longueurs en.** {{ui:Paramètres}} › {{ui:TakeoffCraft}} propose {{ui:Afficher les longueurs en}} avec {{ui:Suivre Général}}, {{ui:Pieds-pouces}}, m, cm et mm. {{ui:Suivre Général}} utilise l'unité de longueur métrique que vous avez marquée d'une étoile dans {{ui:Paramètres}} › {{ui:Général}} › {{ui:Unités}}, et les pieds-pouces lorsqu'aucune n'est marquée. Cela change la façon dont les longueurs se lisent sur la feuille, dans la barre d'état et dans les panneaux, y compris les hauteurs, la profondeur, l'épaisseur et les niveaux. Un simple nombre saisi dans un champ de hauteur est lu dans l'unité affichée.
- **Affichage seulement.** Les quantités, les coûts et les exports sont calculés à partir des longueurs exactes. Le choix entre 1/16, 1/8 et 1/4 de pouce n'apparaît que pour les pieds-pouces. Voir [Afficher les longueurs en mètres](topic:show-lengths-in-meters).
- **Unités de poids.** Un poste {{ui:Quantité saisie (sans dessin)}} peut maintenant être en lb, TON, kg ou t, et être chiffré à l'unité.
- **Température.** Chaque poste comporte un champ facultatif {{ui:Température}} dans l'éditeur de poste, saisi en degrés C ou F. {{ui:Afficher les températures en}} dans {{ui:Paramètres}} › {{ui:TakeoffCraft}} propose {{ui:Suivre Général}}, °C ou °F.

### Aires et échelles pour le travail métrique

- **Aires en m2 sur le dessin.** Une aire mesurée avec un poste métrique affiche désormais m2 sur l'étiquette du dessin et dans le panneau des repères, ainsi que dans le tableau, au lieu de SF. La règle est : m2 lorsque le poste est chiffré en métrique ou que les longueurs sont affichées en m, cm ou mm, et SF dans le cas contraire.
- **Surface de mur.** Un poste linéaire pourvu d'une hauteur affiche aussi sa surface de mur (longueur multipliée par hauteur) dans la liste des postes, et sous forme de ligne de remarque sous le tableau des quantités par poste.
- **Préréglages d'échelle 1:75 et 1:150.** Ils figurent dans la liste {{ui:Prédéfini}} du groupe {{ui:Échelle}}, qui compte désormais 32 échelles. Voir [Préréglages d'échelle](topic:scale-presets).

### Arc selon dix méthodes

- Lorsque {{ui:Arc}} est activé (bouton de la barre d'outils ou {{key:R}}), une zone {{ui:Méthode d'arc}} apparaît dans la barre de feuille : 3 points, Début, Centre, Fin, Début, Centre, Angle, Début, Centre, Longueur, Début, Fin, Angle, Début, Fin, Direction, Début, Fin, Rayon, Centre, Début, Fin, Centre, Début, Angle et Centre, Début, Longueur. L'angle, la longueur, le rayon et la direction peuvent être cliqués ou saisis. Cela fonctionne dans les tronçons linéaires, les aires et les réservations. Les fichiers enregistrés avant la 0.9 s'ouvrent de la même façon. Voir [Tracer des arcs selon dix méthodes](topic:draw-arcs-ten-methods).

### Travailler ensemble

- **Voir les curseurs des autres.** Dans une session Live, le pointeur de chaque personne apparaît sur la feuille avec son nom et sa couleur, et un cadre en pointillés entoure les repères qu'elle a sélectionnés. Les personnes sur une autre feuille sont listées avec le nom de cette feuille. Voir [Travailler en direct avec d'autres](topic:work-live).
- **Suivre une personne, et la liste des personnes.** Le bouton {{ui:Personnes}} d'une session Live liste chaque personne avec l'outil qu'elle utilise, la feuille où elle se trouve et sa dernière modification. {{ui:Suivre}} déplace votre vue avec la sienne, et l'hôte peut utiliser {{ui:Demander à tous de me suivre}}. Voir [Suivre un collègue dans une session Live](topic:follow-a-teammate).

## Dans toutes les applications

- **Info-bulles et astuce de démarrage.** Le texte d'aide au survol est une info-bulle Bootstrap, et l'astuce de démarrage peut être fermée.
- **Onglets défilants.** La barre d'onglets d'un panneau qui ne tient pas dans l'espace défile au lieu d'être coupée.
- **Titres d'onglets.** L'onglet du navigateur affiche `<document> - TakeoffCraft | CadCraft`.
- **Présentation.** La liste des présentations dans {{ui:Paramètres}} est une liste déroulante qui affiche la présentation choisie.
- **Langue.** La langue choisie s'applique désormais aux mots que la page affiche elle-même, comme Nouveau, Ouvrir et Enregistrer. Les langues autres que l'anglais sont des brouillons automatiques jusqu'à ce qu'un locuteur natif les ait relues.

## Limites reconnues

- L'affichage des longueurs, les unités de poids et de température et les nouveaux préréglages ont été vérifiés par des tests et dans la page. Chaque panneau dans chaque unité n'a pas été vérifié à la main.
- La liste des personnes n'a pas été vérifiée à la main avec une vraie classe d'enseignant et d'élèves.
- Les langues autres que l'anglais sont des brouillons automatiques.
- Les programmes d'installation Windows ne sont pas signés (Plus d'infos, puis Exécuter quand même). L'image disque macOS n'est pas notariée (clic droit, puis {{ui:Ouvert}}).

## Antérieures : 0.8 et 0.8.1

Voici ce qui a changé dans TakeoffCraft 0.8 (publiée le 2026-11-01) et 0.8.1 (2026-11-02), par rapport à la 0.7. Une légende de symboles peut maintenant être comptée sur tout le jeu à la fois, un nouveau métré peut partir des prix de vos anciens chantiers, et le métré peut être vérifié par rapport au stock d'un fournisseur. La 0.8.1 est une version de correction.

### Nouveautés

**Tout compter dans le jeu**

- **Encadrer la légende une fois.** {{ui:Tout compter}} dans la barre d'outils lit une légende de symboles : faites glisser un cadre autour des symboles et des noms imprimés à côté. Chaque symbole est listé avec son image et son nom, et le nom devient le nom du poste. Décochez ce que vous ne voulez pas, puis choisissez {{ui:Compter sur N feuilles}}. Une barre indique la feuille en cours de recherche, {{ui:Annuler}} arrête l'opération, et la page reste utilisable.
- **Toutes les feuilles en une seule opération.** Chaque symbole est compté sur chaque feuille ouverte. Une feuille dessinée à une autre échelle est recherchée à cette échelle, et les symboles sont trouvés tournés de n'importe quel angle droit. Les symboles de la légende elle-même ne sont pas comptés sur sa feuille.
- **Vérifier avant tout ajout.** Chaque total comporte un lien par feuille (« E-103 : 4 ») qui mène à cette feuille. Cliquez sur un cadre d'une découverte pour l'exclure, et recliquez pour la réintégrer. Le niveau de correspondance (de 50 % à 100 %) ne fait que filtrer ce qui a été trouvé ; rien n'est recherché à nouveau.
- **Une seule étape d'annulation.** {{ui:Ajouter N repères}} crée un poste de comptage par symbole avec un repère sur chaque découverte. Un nom qui est déjà un poste de comptage de votre fichier est réutilisé. {{key:Ctrl+Z}} retire tous les postes et repères. Ce que vous acceptez alimente aussi {{ui:Appris}}.
- **Symboles sous tout angle.** Cochez {{ui:Symboles sous tout angle}} avant de compter pour trouver aussi les symboles tournés d'un angle qui n'est pas droit. La recherche fait alors pivoter chaque symbole tous les 15 degrés, et un symbole qui n'est pas rond peut prendre jusqu'à six fois plus de temps.
- **Ce que c'est.** Une simple correspondance de symboles sur vos propres feuilles, sans modèle entraîné, et rien ne quitte votre ordinateur. Sur un jeu fictif de 200 feuilles, l'opération a pris 9,4 secondes de bout en bout dans Chrome sur un ordinateur de bureau rapide ; les jeux de plans réels seront plus lents. Voir [Tout compter dans le jeu](topic:count-everything).

**Mémoire des prix de vos propres chantiers**

- **TakeoffCraft retient vos tarifs.** Lorsque vous enregistrez un métré, chaque poste chiffré utilisé est retenu par nom et type : prix unitaire de matériau, prix unitaire de main-d'œuvre, chute et unité. Les 12 derniers chantiers sont conservés pour chaque nom. Ils sont gardés sur cet ordinateur, à côté de la bibliothèque des prix, jamais dans un fichier de métré, et rien n'est envoyé nulle part.
- **Démarrer un nouveau métré à partir de ces prix.** {{ui:Prix}} dans la barre d'outils affiche, pour chaque poste, les tarifs du dernier chantier, les tarifs typiques et la fourchette. {{ui:Utiliser le dernier}} ou {{ui:Utiliser le typique}} chiffre un poste, et {{ui:Appliquer les prix mémorisés aux N postes sans prix}} remplit chaque poste qui n'a pas encore de prix. Chaque utilisation constitue une étape d'annulation.
- **Travaux antérieurs.** {{ui:Apprendre d'un métré passé…}} retient les postes chiffrés d'un métré enregistré (.json).
- **Voir, modifier, oublier.** {{ui:Tout ce qui est mémorisé}} liste chaque nom ; le bouton corbeille oublie un nom, et {{ui:Effacer tous les prix}} oublie tout. Désactivez {{ui:Mémoriser mes prix quand j'enregistre un métré}} pour arrêter. Un prix à l'unité n'est jamais appliqué à un poste au pied linéaire. Voir [Mémoire des prix de vos anciens chantiers](topic:price-memory).

**Stock fournisseur et délais de livraison**

- **Vérifier par rapport à la liste d'un fournisseur.** {{ui:Appro}} dans la barre d'outils prend la liste de stock d'un fournisseur ({{ui:Ajouter un fichier fournisseur…}}), un CSV ou un tableur, et vérifie ce dont le métré a besoin, chutes comprises, par rapport à elle. Jusqu'à cinq fichiers sont conservés. Rien n'est envoyé et rien ne demande quoi que ce soit à un fournisseur : c'est vous qui apportez le fichier.
- **Ce qu'elle indique.** Les postes en manque apparaissent en premier : « Manque de 120 EA », « Délai de livraison de 21 jours », « En commande en attente », « Unité différente », « Pas de chiffre de stock » ou « En stock ». {{ui:Délai maximal souhaité (jours)}} commence à 14.
- **Liste de commande.** {{ui:Liste de commande (CSV)}} télécharge les postes en manque avec la quantité manquante, le fournisseur et le délai de livraison.
- **Prix vers la bibliothèque.** Si le fichier comporte des prix, {{ui:Prix vers la bibliothèque}} définit le prix du matériau de chaque élément de bibliothèque portant le même nom et la même unité. Rechiffrez depuis la bibliothèque pour les reporter dans le métré.
- **Dans le panneau des problèmes.** Un manque est un avertissement et un long délai est une remarque, sous « Stock fournisseur ». Vous pouvez en accepter un en indiquant un motif, et le motif est enregistré dans le métré. Voir [Vérifier le stock fournisseur et les délais de livraison](topic:supplier-stock).

**Assistants IA**

- **Des outils pour les trois.** Lorsque les assistants sont autorisés dans {{ui:Paramètres}}, un assistant peut lire une légende (`legend_open`), lancer le comptage (`legend_count_start`, puis `legend_count_status` et `legend_count_result`) et l'ajouter (`legend_count_add`, qui peut d'abord afficher un aperçu). Il peut lire les prix mémorisés (`prices_list`) et chiffrer des postes à partir d'eux (`prices_apply`, qui peut d'abord afficher un aperçu), et lire la vérification fournisseur (`supply_check`). L'ajout d'un fichier fournisseur reste de votre ressort. Voir [Utiliser TakeoffCraft avec des assistants IA](topic:use-with-ai-assistants).

**Dans toutes les applications**

- **Langues.** Cinquante-quatre langues au total ; dix sont nouvelles (lituanien, letton, bosniaque, marathi, télougou, albanais, afrikaans, filipino, swahili et ouzbek). Les langues autres que l'anglais sont des brouillons automatiques jusqu'à ce qu'un locuteur natif les ait relues.
- **Périphériques de saisie.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Périphériques de saisie}} définit ce que font un pavé tactile, les boutons latéraux d'une souris, un stylet, une souris 3D, une manette de jeu ou un contrôleur MIDI, pour toutes les applications ou pour une seule. Voir [Utiliser un pavé tactile, une souris 3D ou une manette](common:input-devices).
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} propose {{ui:Retour à la ligne}} (le départ), {{ui:2 lignes}} et {{ui:1 ligne}} ; les groupes qui ne tiennent pas défilent latéralement. Voir [Disposer les panneaux](common:arrange-panels).
- **Panneau des problèmes.** Le panneau commun des avertissements et des remarques comporte désormais la vérification du stock fournisseur ci-dessus, à côté des autres contrôles.
- **Modules complémentaires.** Les modules complémentaires suivent la liste de votre compte. Voir [Modules complémentaires et liste de votre compte](common:addons-basics).
- **Connecter votre IA.** CadCraft Studio est le hub : connectez votre assistant une seule fois pour les huit applications. Studio n'a pas d'IA propre.

### Corrigé dans la 0.8.1

- **Section des classes DWG.** La section des classes d'un fichier DWG était lue comme un mauvais type. Ceci est corrigé dans TakeoffCraft et dans quatre autres applications.
- **Studio peut changer de langue pendant son exécution.** Auparavant, Studio et ses éditions empaquetées étaient uniquement en anglais. Cela n'a pas été testé dans la version de bureau sur toutes les plateformes ; dites-nous si la langue ne change pas.

### Pas encore disponible dans cette version

- **Non signée.** Windows peut afficher un avertissement, et sur Mac vous faites un clic droit et choisissez {{ui:Ouvert}} la première fois. Les versions pour les magasins (Microsoft Store, Google Play, App Store) sont suspendues, et la version iPad et iPhone n'a pas été reconstruite pour la 0.8.1.
- **Mises à jour de Studio.** Le programme d'installation Windows et les paquets Linux vérifient une fois par jour et demandent d'abord. Le zip portable se contente de vous le signaler, et macOS et l'APK ne se mettent pas à jour seuls. Le fichier .dmg macOS de la 0.8 suit la publication.
- **Connecter votre IA.** La connexion en un clic dans Studio, le connecteur hébergé pour l'IA dans le navigateur, votre propre clé d'API dans Studio et un paquet MCP publié ne sont pas promis dans cette version.
- **Tout compter.** Il faut que les symboles soient dessinés de la même façon que dans la légende, et un symbole traversé par un mur ou une longue ligne peut être manqué. Les symboles en miroir ne sont pas trouvés, et une feuille sans échelle dessinée à une autre taille est recherchée à la taille de la légende. Vérifiez les découvertes sur la première feuille avant de faire confiance au reste.
- **Stock fournisseur.** Les chiffres de stock ne sont aussi à jour que le fichier que vous ajoutez. La vérification ne demande jamais rien à un fournisseur.
- **Langues.** La barre d'application en tamoul déborde.

Tout le reste figure dans [Pas encore disponible](topic:not-built-yet). Pour la version précédente, voir [Nouveautés de la version 0.7](topic:whats-new-0-7).
