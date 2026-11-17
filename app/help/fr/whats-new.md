---
title: Nouveautés de la version 0.9
summary: Lire les longueurs en mètres, centimètres ou millimètres, surfaces métriques en m2 avec surface de mur, préréglages d'échelle 1:75 et 1:150, unités de poids et de température, Arc avec dix méthodes, et curseurs en direct, Suivre et liste des participants.
keywords: nouveautés, notes de version, journal des modifications, 0.9, afficher les longueurs en, mètres, centimètres, millimètres, métrique, suivre général, unités, unités d'affichage, m2, mètres carrés, surface de mur, préréglages d'échelle, 1:75, 1:150, poids, kilogrammes, kg, tonne, t, lb, température, celsius, fahrenheit, arc, méthodes d'arc, arc à 3 points, rayon, direct, curseurs, suivre, liste des participants, classe, info-bulles, mise en page, 0.8, 0.8.1, version, nouvelles fonctionnalités, compter tout, légende, légende des symboles, jeu entier, mémoire des prix, chantiers passés, dernier chantier, prix type, fournisseur, stock, délai, rupture, liste de commande, pénurie, panneau des problèmes, assistant, langues, périphériques de saisie, lignes de la barre d'outils, dwg
from: 6182b998
---

Voici ce qui a changé dans TakeoffCraft 0.9, par rapport à la 0.8.1. C'est une petite version pour cette application : les longueurs peuvent désormais se lire en mètres, centimètres ou millimètres, les surfaces et échelles métriques fonctionnent correctement, et Arc propose dix façons de dessiner. Les sessions en direct montrent aussi qui se trouve où.

## Nouveautés

### Lire les longueurs en mètres, centimètres ou millimètres

- **Afficher les longueurs en.** {{ui:Paramètres}} › {{ui:TakeoffCraft}} propose {{ui:Afficher les longueurs en}} avec {{ui:Suivre Général}}, {{ui:Pieds-pouces}}, m, cm et mm. {{ui:Suivre Général}} utilise l'unité de longueur métrique marquée d'une étoile dans {{ui:Paramètres}} › {{ui:Général}} › {{ui:Unités}}, et les pieds-pouces lorsqu'aucune n'est marquée. Cela change la façon dont les longueurs s'affichent sur la feuille, dans la barre d'état et dans les panneaux, y compris les hauteurs, profondeurs, épaisseurs et niveaux. Un simple nombre saisi dans un champ de hauteur est lu dans l'unité affichée.
- **Affichage seulement.** Les quantités, coûts et exports sont calculés à partir des longueurs exactes. Le choix 1/16, 1/8 et 1/4 de pouce n'apparaît que pour les pieds-pouces. Voir [Afficher les longueurs en mètres](topic:show-lengths-in-meters).
- **Unités de poids.** Un poste {{ui:Quantité saisie (sans dessin)}} peut désormais être en lb, TON, kg ou t, et être chiffré à l'unité.
- **Température.** Chaque poste a un champ facultatif {{ui:Température}} dans l'éditeur de poste, saisi en degrés C ou F. {{ui:Afficher les températures en}} dans {{ui:Paramètres}} › {{ui:TakeoffCraft}} propose {{ui:Suivre Général}}, °C ou °F.

### Surfaces et échelles pour le métrique

- **Surfaces en m2 sur le dessin.** Une surface mesurée avec un poste métrique affiche désormais m2 sur l'étiquette du dessin et dans le panneau des repères, comme dans le tableau, au lieu de SF. La règle : m2 lorsque le poste est chiffré en métrique ou que les longueurs s'affichent en m, cm ou mm, et SF sinon.
- **Surface de mur.** Un poste linéaire avec une hauteur affiche aussi sa surface de mur (longueur multipliée par hauteur) dans la liste des postes, et sous forme de ligne de note sous le tableau des quantités par poste.
- **Préréglages d'échelle 1:75 et 1:150.** Ils figurent dans la liste {{ui:Prédéfini}} du groupe {{ui:Échelle}}, qui compte désormais 32 échelles. Voir [Préréglages d'échelle](topic:scale-presets).

### Arc à dix méthodes

- Lorsque {{ui:Arc}} est activé (bouton de la barre d'outils ou {{key:R}}), une case {{ui:Méthode d'arc}} apparaît dans la barre de feuille : 3 points, Début, Centre, Fin, Début, Centre, Angle, Début, Centre, Longueur, Début, Fin, Angle, Début, Fin, Direction, Début, Fin, Rayon, Centre, Début, Fin, Centre, Début, Angle et Centre, Début, Longueur. L'angle, la longueur, le rayon et la direction peuvent être cliqués ou saisis. Cela fonctionne pour les tronçons linéaires, les surfaces et les découpes. Les fichiers enregistrés avant la 0.9 s'ouvrent de la même manière. Voir [Dessiner des arcs avec dix méthodes](topic:draw-arcs-ten-methods).

### Travailler ensemble

- **Voir les curseurs des autres.** Dans une session en direct, le pointeur de chaque personne s'affiche sur la feuille avec son nom et sa couleur, et un cadre en pointillés entoure les repères qu'elle a sélectionnés. Les personnes sur une autre feuille sont listées avec le nom de cette feuille. Voir [Travailler en direct avec d'autres](topic:work-live).
- **Suivre une personne, et la liste des participants.** Le bouton {{ui:Participants}} d'une session en direct liste chaque personne avec l'outil qu'elle utilise, la feuille où elle se trouve et sa dernière modification. {{ui:Suivre}} déplace votre vue avec la sienne, et l'hôte peut utiliser {{ui:Demander à tous de me suivre}}. Voir [Suivre un coéquipier dans une session en direct](topic:follow-a-teammate).

## Dans toutes les applications

- **Info-bulles et conseil de démarrage.** Le texte au survol est une info-bulle Bootstrap, et le conseil de démarrage peut être fermé.
- **Barres d'onglets défilantes.** La barre d'onglets d'un panneau qui ne tient pas défile au lieu d'être coupée.
- **Titres d'onglets.** L'onglet du navigateur affiche `<document> - TakeoffCraft | CadCraft`.
- **Disposition.** La liste des dispositions dans {{ui:Paramètres}} est une liste déroulante qui affiche la disposition choisie.
- **Langue.** La langue que vous choisissez s'applique désormais aux mots que la page affiche elle-même, comme Nouveau, Ouvrir et Enregistrer. Les langues autres que l'anglais sont des brouillons automatiques jusqu'à ce qu'un locuteur natif les ait relus.

## Limites connues

- L'affichage des longueurs, les unités de poids et de température et les nouveaux préréglages ont été vérifiés par des tests et dans la page. Chaque panneau dans chaque unité n'a pas été vérifié à la main.
- La liste des participants n'a pas été vérifiée à la main avec une vraie classe d'enseignant et d'élèves.
- Les langues autres que l'anglais sont des brouillons automatiques.
- Les installateurs Windows ne sont pas signés numériquement (Plus d'informations, puis Exécuter quand même). L'image disque macOS n'est pas notariée (clic droit, puis Ouvrir).

## Plus tôt : 0.8 et 0.8.1

Voici ce qui a changé dans TakeoffCraft 0.8 (publiée le 2026-11-01) et 0.8.1 (2026-11-02), par rapport à la 0.7. Une légende de symboles peut désormais être comptée sur l'ensemble du jeu d'un coup, un nouveau métré peut partir des prix de vos chantiers passés, et le métré peut être contrôlé par rapport au stock d'un fournisseur. La 0.8.1 est une version de correction.

### Nouveautés

**Compter tout le jeu**

- **Encadrer la légende une fois.** {{ui:Tout compter}} dans la barre d'outils lit une légende de symboles : faites glisser un cadre autour des symboles et des noms imprimés à côté. Chaque symbole est listé avec son image et son nom, et le nom devient le nom du poste. Décochez ce que vous ne voulez pas, puis choisissez {{ui:Compter sur N feuilles}}. Une barre indique la feuille en cours de recherche, {{ui:Annuler}} arrête l'exécution, et la page reste utilisable.
- **Toutes les feuilles en un seul passage.** Chaque symbole est compté sur chaque feuille ouverte. Une feuille dessinée à une autre échelle est recherchée à cette échelle, et les symboles sont trouvés tournés selon n'importe quel angle droit. Les symboles de la légende elle-même ne sont pas comptés sur sa feuille.
- **Vérifier avant tout ajout.** Chaque total a un lien par feuille (« E-103 : 4 ») qui mène à cette feuille. Cliquez sur un cadre d'une trouvaille pour l'exclure, et recliquez pour la rétablir. Le niveau de correspondance (50 % à 100 %) ne fait que filtrer ce qui a été trouvé ; rien n'est recherché à nouveau.
- **Une seule étape d'annulation.** {{ui:Ajouter N repères}} crée un poste de comptage par symbole, avec un repère sur chaque trouvaille. Un nom qui est déjà un poste de comptage à vous est réutilisé. {{key:Ctrl+Z}} annule tous les postes et repères. Ce que vous acceptez alimente aussi {{ui:Appris}}.
- **Symboles à tout angle.** Cochez {{ui:Symboles sous tout angle}} avant de compter pour trouver aussi les symboles tournés d'un angle qui n'est pas droit. La recherche tourne alors chaque symbole tous les 15 degrés, et un symbole qui n'est pas rond peut prendre jusqu'à six fois plus de temps.
- **Ce que c'est.** Une simple correspondance de symboles sur vos propres feuilles, sans modèle entraîné, et rien ne quitte votre ordinateur. Sur un jeu fictif de 200 feuilles, il a pris 9.4 secondes de bout en bout dans Chrome sur un ordinateur de bureau rapide ; les jeux de plans réels seront plus lents. Voir [Compter tout le jeu](topic:count-everything).

**Mémoire des prix de vos propres chantiers**

- **TakeoffCraft mémorise vos tarifs.** Quand vous enregistrez un métré, chaque poste chiffré utilisé est mémorisé par nom et type : prix matériau, prix main-d'œuvre, chute et unité. Les 12 derniers chantiers sont conservés pour chaque nom. Ils sont gardés sur cet ordinateur, à côté de la bibliothèque de prix, jamais dans un fichier de métré, et rien n'est envoyé nulle part.
- **Démarrer un nouveau métré à partir de là.** {{ui:Prix}} dans la barre d'outils affiche, pour chaque poste, les prix du dernier chantier, les prix types et la fourchette. {{ui:Utiliser le dernier}} ou {{ui:Utiliser le typique}} chiffre un poste, et « Chiffrer N postes sans prix depuis la mémoire » remplit chaque poste qui n'a pas encore de prix. Chaque utilisation est une étape d'annulation.
- **Travaux plus anciens.** {{ui:Apprendre d'un métré passé…}} mémorise les postes chiffrés d'un métré enregistré (.json).
- **Voir, modifier, oublier.** {{ui:Tout ce qui est mémorisé}} liste chaque nom ; le bouton corbeille oublie un nom, et {{ui:Effacer tous les prix}} oublie tout. Désactivez {{ui:Mémoriser mes prix quand j'enregistre un métré}} pour arrêter. Un prix par pièce n'est jamais placé sur un poste au pied linéaire. Voir [Mémoire des prix de vos chantiers passés](topic:price-memory).

**Stock fournisseur et délais**

- **Contrôler par rapport à la liste d'un fournisseur.** {{ui:Appro}} dans la barre d'outils prend la liste de stock d'un fournisseur ({{ui:Ajouter un fichier fournisseur…}}), un CSV ou un tableur, et vérifie ce dont le métré a besoin, chutes comprises, par rapport à elle. Jusqu'à cinq fichiers sont conservés. Rien n'est envoyé, et rien ne demande quoi que ce soit à un fournisseur : c'est vous qui apportez le fichier.
- **Ce qu'il indique.** Les postes en manque apparaissent d'abord : « Manque de 120 EA », « Délai de 21 jours », « En attente de réapprovisionnement », « L'unité diffère », « Pas de chiffre de stock » ou « En stock ». {{ui:Délai maximal souhaité (jours)}} démarre à 14.
- **Liste de commande.** {{ui:Liste de commande (CSV)}} télécharge les postes en manque, avec la quantité manquante, le fournisseur et le délai.
- **Prix vers la bibliothèque.** Si le fichier contient des prix, {{ui:Prix vers la bibliothèque}} fixe le prix matériau de chaque entrée de la bibliothèque de même nom et même unité. Rechiffrez depuis la bibliothèque pour les reporter dans le métré.
- **Dans le panneau des problèmes.** Un manque est un avertissement, et une longue attente est une remarque, sous « Stock fournisseur ». Vous pouvez en accepter un en donnant une raison, et la raison est enregistrée dans le métré. Voir [Contrôler le stock fournisseur et les délais](topic:supplier-stock).

**Assistants IA**

- **Outils pour les trois.** Si les assistants sont autorisés dans {{ui:Paramètres}}, un assistant peut lire une légende (`legend_open`), lancer le comptage (`legend_count_start`, puis `legend_count_status` et `legend_count_result`) et l'ajouter (`legend_count_add`, qui peut d'abord prévisualiser). Il peut lire les prix mémorisés (`prices_list`) et chiffrer des postes à partir d'eux (`prices_apply`, qui peut d'abord prévisualiser), et lire le contrôle fournisseur (`supply_check`). Ajouter un fichier fournisseur reste à votre charge. Voir [Utiliser TakeoffCraft avec un assistant IA](topic:use-with-ai-assistants).

**Dans toutes les applications**

- **Langues.** Cinquante-quatre langues au total ; dix sont nouvelles (lituanien, letton, bosniaque, marathi, télougou, albanais, afrikaans, filipino, swahili et ouzbek). Les langues autres que l'anglais sont des brouillons automatiques jusqu'à ce qu'un locuteur natif les ait relues.
- **Périphériques de saisie.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Périphériques de saisie}} définit ce que font un pavé tactile, les boutons latéraux d'une souris, un stylet, une souris 3D, une manette de jeu ou un contrôleur MIDI, pour toutes les applications ou pour une seule. Voir [Utiliser un pavé tactile, une souris 3D ou une manette](common:input-devices).
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} propose {{ui:Retour à la ligne}} (le démarrage), {{ui:2 lignes}} et {{ui:1 ligne}} ; les groupes qui ne tiennent pas défilent latéralement. Voir [Disposer les panneaux](common:arrange-panels).
- **Panneau des problèmes.** Le panneau commun des avertissements et remarques porte désormais le contrôle de stock fournisseur ci-dessus, à côté des autres contrôles.
- **Modules complémentaires.** Ils suivent votre liste de comptes. Voir [Modules complémentaires et votre liste de comptes](common:addons-basics).
- **Connecter votre IA.** CadCraft Studio est le hub : connectez votre assistant une seule fois pour les huit applications. Studio n'a aucune IA propre.

### Corrigé dans la 0.8.1

- **Section des classes d'un DWG.** La section des classes d'un fichier DWG était lue comme le mauvais type. C'est corrigé dans TakeoffCraft, et dans quatre autres applications.
- **Studio peut changer de langue pendant son exécution.** Auparavant, Studio et ses éditions empaquetées n'étaient qu'en anglais. Cela n'a pas été testé sur la version bureau de toutes les plateformes ; dites-nous si la langue ne change pas.

### Pas encore dans cette version

- **Pas de signature de code.** Windows peut afficher un avertissement, et sur un Mac vous faites un clic droit puis choisissez {{ui:Ouvrir}} la première fois. Les versions pour magasins (Microsoft Store, Google Play, App Store) sont en attente, et la version iPad et iPhone n'a pas été reconstruite pour la 0.8.1.
- **Mises à jour de Studio.** L'installateur Windows et les paquets Linux vérifient une fois par jour et demandent d'abord. La version zip portable se contente de le signaler, et macOS et l'APK ne se mettent pas à jour eux-mêmes. Le fichier .dmg macOS de la 0.8 suit la publication.
- **Connecter votre IA.** La connexion en un clic dans Studio, le connecteur hébergé pour l'IA dans le navigateur, votre propre clé API dans Studio et un paquet MCP publié ne sont pas promis dans cette version.
- **Tout compter.** Il faut des symboles dessinés de la même manière que dans la légende, et un symbole traversé par un mur ou une longue ligne peut être manqué. Les symboles miroir ne sont pas trouvés, et une feuille sans échelle dessinée à une autre taille est recherchée à la taille de la légende. Vérifiez les trouvailles de la première feuille avant de faire confiance au reste.
- **Stock fournisseur.** Les chiffres de stock ne sont aussi à jour que le fichier que vous ajoutez. Le contrôle ne demande jamais rien à un fournisseur.
- **Langues.** La barre de l'application en tamoul déborde.

Tout le reste figure dans [Pas encore disponible](topic:not-built-yet). Pour la version précédente, voir [Nouveautés de la version 0.7](topic:whats-new-0-7).
