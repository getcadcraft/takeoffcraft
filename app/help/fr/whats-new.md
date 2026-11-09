---
title: Nouveautés des versions 0.8 et 0.8.1
summary: Comptez une légende de symboles complète sur toutes les feuilles ouvertes en une seule passe, chiffrez des postes à partir des tarifs de vos anciens chantiers, vérifiez le métré par rapport au stock et aux délais d'un fournisseur, et de nouveaux outils d'assistant pour les trois, ainsi que les modifications communes de la 0.8 et la correction DWG de la 0.8.1.
keywords: nouveautés, quoi de neuf, notes de version, journal des modifications, modifications, 0.8, 0.8.1, version, nouvelles fonctionnalités, tout compter, légende, légende de symboles, ensemble complet, mémoire des prix, anciens chantiers, dernier chantier, prix typique, fournisseur, stock, délai d'approvisionnement, commande en attente, liste de commande, manque, panneau des problèmes, assistant, langues, périphériques de saisie, lignes de la barre d'outils, dwg
from: a04adef6
---

Voici ce qui a changé dans TakeoffCraft 0.8 (publiée le 2026-11-01) et 0.8.1 (2026-11-02), par rapport à la 0.7. Un symbole de légende peut désormais être compté sur tout l'ensemble d'un seul coup, un nouveau métré peut démarrer à partir des prix de vos anciens chantiers, et le métré peut être vérifié par rapport au stock d'un fournisseur. La 0.8.1 est une version de correction.

## Nouveau

### Tout compter dans l'ensemble

- **Encadrez la légende une seule fois.** {{ui:Tout compter}} dans la barre d'outils lit une légende de symboles : faites glisser un cadre autour des symboles et des noms imprimés à côté. Chaque symbole est listé avec son image et son nom, et le nom devient le nom du poste. Décochez ce que vous ne voulez pas, puis choisissez {{ui:Compter sur N feuilles}}. Une barre affiche la feuille en cours de recherche, {{ui:Annuler}} arrête l'opération, et la page reste utilisable.
- **Toutes les feuilles en une seule passe.** Chaque symbole est compté sur chaque feuille ouverte. Une feuille dessinée à une autre échelle est recherchée à cette échelle, et les symboles sont trouvés tournés de n'importe quel angle droit. Les symboles de la légende elle-même ne sont pas comptés sur sa feuille.
- **Vérifier avant tout ajout.** Chaque total a un lien par feuille (« E-103 : 4 ») qui mène à cette feuille. Cliquez sur un cadre d'une détection pour l'exclure, et cliquez à nouveau pour la rétablir. Le niveau de correspondance (50 % à 100 %) filtre seulement ce qui a été trouvé ; rien n'est recherché à nouveau.
- **Une seule étape d'annulation.** {{ui:Ajouter N repères}} crée un poste de comptage par symbole, avec un repère sur chaque détection. Un nom qui correspond déjà à un de vos postes de comptage est réutilisé. {{key:Ctrl+Z}} annule tous les postes et repères. Ce que vous acceptez alimente aussi {{ui:Appris}}.
- **Symboles sous tout angle.** Cochez {{ui:Symboles sous tout angle}} avant de compter pour trouver aussi les symboles tournés d'un angle qui n'est pas un angle droit. La recherche tourne alors chaque symbole tous les 15 degrés, et un symbole qui n'est pas rond peut prendre jusqu'à six fois plus de temps.
- **Ce que c'est.** Simple correspondance de symboles sur vos propres feuilles, sans modèle entraîné, et rien ne quitte votre ordinateur. Sur un ensemble fictif de 200 feuilles, l'opération a pris 9.4 secondes de bout en bout dans Chrome sur un ordinateur de bureau rapide ; les jeux de plans réels seront plus lents. Voir [Tout compter dans le jeu de plans](topic:count-everything).

### Mémoire des prix de vos propres chantiers

- **TakeoffCraft mémorise vos tarifs.** Quand vous enregistrez un métré, chaque poste chiffré utilisé est mémorisé par nom et par type : tarif matériau, tarif main-d'œuvre, chute et unité. Les 12 derniers chantiers sont conservés pour chaque nom. Elle est conservée sur cet ordinateur, à côté de la bibliothèque de prix, jamais dans un fichier de métré, et rien n'est envoyé nulle part.
- **Commencer un nouveau métré à partir de la mémoire.** {{ui:Prix}} dans la barre d'outils affiche, pour chaque poste, les tarifs du dernier chantier, les tarifs typiques et la plage. {{ui:Utiliser le dernier}} ou {{ui:Utiliser le typique}} chiffre un poste, et {{ui:Appliquer les prix mémorisés aux N postes sans prix}} remplit chaque poste qui n'a pas encore de prix. Chaque utilisation est une seule étape d'annulation.
- **Anciens travaux.** {{ui:Apprendre d'un métré passé…}} mémorise les postes chiffrés d'un métré enregistré (.json).
- **Consulter, modifier, oublier.** {{ui:Tout ce qui est mémorisé}} liste chaque nom ; le bouton corbeille oublie un nom, et {{ui:Effacer tous les prix}} oublie tout. Désactivez {{ui:Mémoriser mes prix quand j'enregistre un métré}} pour arrêter. Un prix à la pièce n'est jamais appliqué à un poste au pied. Voir [Mémoire des prix de vos anciens chantiers](topic:price-memory).

### Stock fournisseur et délais d'approvisionnement

- **Vérifier avec la liste d'un fournisseur.** {{ui:Appro}} dans la barre d'outils prend la liste de stock d'un fournisseur ({{ui:Ajouter un fichier fournisseur…}}), un CSV ou un tableur, et vérifie dessus ce dont le métré a besoin, chute comprise. Jusqu'à cinq fichiers sont conservés. Rien n'est envoyé et personne n'est interrogé chez un fournisseur : c'est vous qui apportez le fichier.
- **Ce que cela indique.** Les postes en manque apparaissent en premier : « Manque 120 EA », « Délai 21 jours », « Commande en attente », « Unité différente », « Pas de chiffre de stock » ou « En stock ». {{ui:Délai maximal souhaité (jours)}} commence à 14.
- **Liste de commande.** {{ui:Liste de commande (CSV)}} télécharge les postes en manque avec la quantité manquante, le fournisseur et le délai d'approvisionnement.
- **Prix vers la bibliothèque.** Si le fichier contient des prix, {{ui:Prix vers la bibliothèque}} définit le prix matériau de chaque entrée de la bibliothèque portant le même nom et la même unité. Rechiffrez depuis la bibliothèque pour les reporter dans le métré.
- **Dans le panneau des problèmes.** Un manque est un avertissement et un délai long est une remarque, sous « Stock fournisseur ». Vous pouvez en accepter un en indiquant un motif, et le motif est enregistré dans le métré. Voir [Vérifier le stock fournisseur et les délais](topic:supplier-stock).

### Assistants IA

- **Outils pour les trois.** Une fois les assistants autorisés dans {{ui:Paramètres}}, un assistant peut lire une légende (`legend_open`), lancer le comptage (`legend_count_start`, puis `legend_count_status` et `legend_count_result`) et l'ajouter (`legend_count_add`, qui peut d'abord afficher un aperçu). Il peut lire les prix mémorisés (`prices_list`) et chiffrer des postes à partir de ceux-ci (`prices_apply`, qui peut d'abord afficher un aperçu), et lire la vérification fournisseur (`supply_check`). L'ajout d'un fichier fournisseur reste à votre charge. Voir [Utiliser TakeoffCraft avec des assistants IA](topic:use-with-ai-assistants).

### Dans toutes les applications

- **Langues.** Cinquante-quatre langues au total ; dix sont nouvelles (lituanien, letton, bosniaque, marathi, telugu, albanais, afrikaans, filipino, swahili et ouzbek). Les langues autres que l'anglais sont des brouillons automatiques tant qu'un locuteur natif ne les a pas relues.
- **Périphériques de saisie.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Périphériques de saisie}} définit l'action d'un pavé tactile, des boutons latéraux d'une souris, d'un stylet, d'une souris 3D, d'une manette de jeu ou d'un contrôleur MIDI, pour toutes les applications ou pour une seule. Voir [Utiliser un pavé tactile, une souris 3D ou une manette](common:input-devices).
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} propose {{ui:Retour à la ligne}} (par défaut), {{ui:2 lignes}} et {{ui:1 ligne}} ; les groupes qui ne tiennent pas défilent latéralement. Voir [Disposer les panneaux](common:arrange-panels).
- **Panneau des problèmes.** Le panneau commun des avertissements et remarques porte désormais la vérification du stock fournisseur ci-dessus, à côté des autres contrôles.
- **Modules complémentaires.** Les modules complémentaires suivent votre liste de compte. Voir [Modules complémentaires et votre liste de compte](common:addons-basics).
- **Connectez votre IA.** CadCraft Studio est le hub : connectez votre assistant une seule fois pour les huit applications. Studio n'a pas d'IA propre.

## Corrigé dans la version 0.8.1

- **Section des classes DWG.** La section des classes d'un fichier DWG était lue avec le mauvais type. Ceci est corrigé dans TakeoffCraft et dans quatre autres applications.
- **Studio peut changer de langue pendant son exécution.** Auparavant, Studio et ses éditions empaquetées n'étaient qu'en anglais. Ceci n'a pas été testé sur la version de bureau sur toutes les plateformes ; signalez-nous si la langue ne change pas.

## Pas encore dans cette version

- **Pas de signature de code.** Windows peut afficher un avertissement, et sur Mac, faites un clic droit et choisissez {{ui:Ouvert}} la première fois. Les versions pour les magasins d'applications (Microsoft Store, Google Play, App Store) sont suspendues, et la version iPad et iPhone n'a pas été recompilée pour 0.8.1.
- **Mises à jour de Studio.** L'installateur Windows et les paquets Linux vérifient une fois par jour et demandent d'abord. Le zip portable vous informe seulement, et macOS et l'APK ne se mettent pas à jour seuls. Le .dmg macOS 0.8 suit la publication.
- **Connectez votre IA.** La connexion en un clic dans Studio, le connecteur hébergé pour l'IA dans le navigateur, votre propre clé API dans Studio et un paquet MCP publié ne sont pas promis dans cette version.
- **Tout compter.** Il faut que les symboles soient dessinés de la même façon que dans la légende, et un symbole traversé par un mur ou une longue ligne peut être manqué. Les symboles symétriques ne sont pas trouvés, et une feuille sans échelle dessinée à une autre taille est recherchée à la taille de la légende. Vérifiez les détections sur la première feuille avant de vous fier au reste.
- **Stock fournisseur.** Les chiffres de stock ne sont aussi à jour que le fichier que vous ajoutez. La vérification ne demande jamais rien à un fournisseur.
- **Langues.** La barre de l'application en tamoul déborde.

Tout le reste figure dans [Pas encore disponible](topic:not-built-yet). Pour la version précédente, voir [Nouveautés de la version 0.7](topic:whats-new-0-7).
