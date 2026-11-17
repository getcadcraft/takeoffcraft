---
title: Utiliser TakeoffCraft avec un assistant IA
summary: Laissez votre propre assistant IA ou script lire les quantités et l'estimation du métré, ajouter des postes et des repères, compter et mesurer sur un DWG ou un DXF, et exporter : autorisations, connexion via CadCraft Studio et journal d'activité.
keywords: ia, assistant, agent, mcp, model context protocol, script, automatisation, quantités, estimation, autorisations, déconnexion, activité
from: 7fa62ec6
---

## Ce que vous allez apprendre

Comment laisser un assistant IA (ou un script que vous avez écrit) travailler avec TakeoffCraft, et décider de ce qu'il a le droit de modifier.

TakeoffCraft n'a **pas d'IA propre** et n'envoie rien nulle part. Vous apportez l'assistant : tout programme qui parle le Model Context Protocol (MCP). TakeoffCraft lui fournit seulement des outils, et vous choisissez lesquels.

## Activer

1. Ouvrez {{ui:Paramètres}} (l'engrenage dans la barre de l'application, ou {{key:Mod+,}}) et allez à l'onglet {{ui:TakeoffCraft}}.
2. Sous {{ui:Assistants}}, cochez **Laisser les assistants IA et les scripts utiliser TakeoffCraft**. Elle reste désactivée tant que vous ne la cochez pas.
3. Choisissez ce qu'il peut faire : **Lire** est coché par défaut ; cochez **Modifier**, **Enregistrer** ou **Exporter** seulement lorsque vous en avez besoin.

Les outils en dehors des autorisations cochées ne sont pas proposés à l'assistant, et s'il en demande un quand même, TakeoffCraft le refuse et l'inscrit dans le journal d'activité. Désactiver l'interrupteur met fin à toutes les connexions d'un coup ; {{ui:Réinitialiser les paramètres de TakeoffCraft}} le désactive aussi.

## Connecter votre assistant

Les assistants se connectent via **CadCraft Studio** sur votre ordinateur : Studio lance un petit serveur que seul cet ordinateur peut atteindre, protégé par un jeton qu'il crée à chaque démarrage. Dans Studio, choisissez {{ui:Connecter un assistant}} et copiez l'adresse et le jeton dans votre assistant (Studio affiche les réglages exacts à coller). Ne partagez jamais le jeton.

:::note
Un onglet de navigateur ne peut pas ouvrir une connexion pour un assistant : dans les applications du navigateur, l'interrupteur n'a aucun effet tant que vous n'utilisez pas CadCraft Studio sur votre ordinateur.
:::

## Vous restez maître

- **Chaque modification est une seule étape d'annulation**, libellée avec le nom de l'assistant (par exemple « Assistant : … »). {{key:Mod+Z}} annule la dernière modification de l'assistant dans son ensemble.
- **Vous savez quand un assistant est connecté.** Un bouton dans la barre de l'application affiche le nom de l'assistant pendant la connexion ; cliquez dessus pour voir ce qu'il peut faire, ou pour le **déconnecter**.
- **Activité.** {{ui:Paramètres}} › {{ui:TakeoffCraft}} › {{ui:Assistants}} › {{ui:Activité}} liste chaque appel : quand, quel outil, effectué ou refusé. {{ui:Enregistrer le journal}} en garde une copie.

## Ce qu'un assistant peut demander

| Outil | Autorisation | Ce qu'il fait |
|---|---|---|
| `app_info`, `sheets_list` | Lire | Le métré ouvert, ses PDF et feuilles, l'échelle et les repères de chaque feuille |
| `items_list` | Lire | Les postes avec leurs unités, prix unitaires et formules d'ouvrage |
| `takeoff_quantities` | Lire | Quantités par poste ou par feuille ; les repères sur des feuilles sans échelle sont listés, jamais comptés comme zéro |
| `takeoff_estimate` | Lire | L'estimation chiffrée telle que TakeoffCraft la calcule, avec ses totaux |
| `takeoff_export` | Exporter | L'export CSV ou XLSX propre à TakeoffCraft |
| `items_add` | Modifier | Ajoute des postes avec leurs unités, prix unitaires et chutes |
| `marks_add` | Modifier | Mesure les tronçons, surfaces et comptages sur une feuille. Longueurs et surfaces seulement sur une feuille à l'échelle, jamais sur une feuille sans échelle |
| `cad_sheets`, `cad_catalog`, `cad_count` | Lire | Sur un DWG ou DXF ouvert : ses feuilles et leurs échelles, ce qui peut être compté (blocs, calques et types, textes), et les comptages exacts, tels que {{ui:Comptage CAO}} les produit ([Compter depuis un dessin](topic:count-from-a-drawing)) |
| `cad_count_add` | Modifier | Compte dans le dessin et place un repère de comptage sur chaque objet trouvé, en une seule étape ; recompter n'ajoute que ce qui est nouveau |
| `cad_measure` | Modifier | Mesure un poste linéaire ou surfacique à partir des lignes, arcs, polylignes et hachures du dessin, comme le fait {{ui:Mesurer le dessin}} ([Mesurer depuis un dessin](topic:measure-from-a-drawing)) ; seulement sur une feuille à l'échelle |
| `usd_export` | Exporter | Les tronçons, surfaces et comptages mesurés d'une feuille à l'échelle, comme modèle de contrôle 3D en USD (`.usdz`, `.usda` ou `.usdc`), tel que {{ui:Paquet USD (.usdz)}} dans la vue de contrôle 3D l'écrit ([Exporter la vue de contrôle 3D en USD](topic:usd)) |

Avec **Modifier** coché, un assistant ajoute des postes et des repères (chaque appel est une étape d'annulation) ; il ne peut ni déplacer, ni modifier, ni supprimer les repères déjà présents.

Les mêmes quantités et estimations sont disponibles sans ouvrir TakeoffCraft : le serveur MCP de CadCraft ouvre un fichier `.takeoff.json` dans un dossier que vous indiquez (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), et `cadcraft info Job.takeoff.json` les affiche en ligne de commande. Il ouvre aussi un DWG ou un DXF comme nouveau métré sur ses feuilles (à l'échelle déduite du dessin, comme TakeoffCraft la déduit), compte et mesure dessus avec les mêmes outils `cad_*`, ajoute des postes et enregistre le métré (`takeoff_save`) ; `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` compte depuis la ligne de commande.

## En cas de problème

- **L'assistant ne voit aucun outil TakeoffCraft :** vérifiez que l'interrupteur est activé dans cette fenêtre, et que la fenêtre est ouverte dans Studio.
- **« nécessite l'autorisation Exporter » :** cochez **Exporter** sous {{ui:Assistants}}, puis redemandez.
- **Erreurs « 401 » ou « token » :** le jeton a changé (Studio a redémarré, ou {{ui:Nouveau jeton}}). Copiez le nouveau dans les réglages de l'assistant.

## Voir aussi

- [Recettes pour les assistants IA](common:assistants-recipes) : exemples détaillés, chacun avec les outils qu'il appelle.
