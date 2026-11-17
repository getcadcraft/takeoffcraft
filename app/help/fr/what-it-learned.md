---
title: Ce que TakeoffCraft a appris de vos métrés
summary: TakeoffCraft garde les symboles que vous avez confirmés avec Comptage auto, vos jeux de conditions, les ouvrages que vous utilisez le plus et les motifs que vous répétez sur chaque page, le tout dans le fichier du métré. Consultez-les, utilisez-les, supprimez-les.
keywords: apprendre, appris, apprentissage, assistant, mémoriser, symboles, modèles, comme le dernier chantier, dernier chantier, jeu de conditions, conditions, réutiliser, ouvrages, les plus utilisés, suggestions, répéter sur chaque page, chaque page, cartouche, motif, tout effacer, oublier, confidentialité
from: 54d99e99
---

TakeoffCraft devient plus rapide à mesure que vous faites des métrés avec lui. Il n'apprend **que de ce que vous acceptez** :

- les symboles que vous avez encadrés avec [Comptage auto](topic:auto-count) puis ajoutés,
- les jeux de conditions que vous enregistrez,
- les ouvrages que vous utilisez (une fois par chantier),
- les motifs de repères que vous répétez sur chaque page.

C'est une simple recherche de correspondances sur vos propres feuilles, la même que celle lancée par Comptage auto. Ce n'est pas un modèle entraîné. Tout ce qu'il apprend est conservé **dans le fichier de ce métré** (`.takeoff.json`), et rien n'est envoyé nulle part. Pour le reporter sur le chantier suivant, utilisez [Comme le dernier chantier](topic:what-it-learned#same-as-last-job).

Choisissez {{ui:Appris}} dans la barre d'outils (l'ampoule, à côté de {{ui:Comptage auto}}) pour tout voir.

## Symboles

Quand vous encadrez un symbole avec {{ui:Comptage auto}} puis choisissez {{ui:Ajouter}}, le symbole encadré est conservé, avec le niveau de correspondance que vous avez accepté.

- Dans {{ui:Appris}}, choisissez {{ui:Trouver sur cette feuille}} ou {{ui:Trouver sur toutes les feuilles}}. La revue habituelle de Comptage auto s'ouvre : cliquez sur un cadre pour l'exclure, déplacez le curseur, puis ajoutez-les. Rien n'est ajouté tant que vous ne l'avez pas fait.
- Quand vous ouvrez une feuille où un symbole appris est absent, une barre en haut propose {{ui:Trouver …}} pour lui. {{ui:Pas maintenant}} la masque pour cette feuille.
- Si le métré n'a aucun poste de ce nom, l'ajout des repères ajoute aussi le poste (une seule étape d'annulation).
- Ajouter à nouveau le symbole d'un même poste le compte pour celui qu'il connaît déjà ; un symbole d'apparence différente est conservé comme un second symbole.
- Comme Comptage auto, il trouve le symbole à angle droit et sur des feuilles à une autre échelle.

## Jeux de conditions

Un jeu conserve les conditions d'un métré (postes avec leurs unités, prix unitaires, chutes et ouvrages), sans les repères.

1. Dans {{ui:Appris}}, choisissez {{ui:Enregistrer les conditions de ce métré comme jeu…}} et donnez-lui un nom. Un jeu portant le même nom est remplacé.
2. Dans un métré qui possède le jeu, {{ui:Ajouter}} insère les conditions qu'il n'a pas encore. Les conditions de même nom et de même type sont laissées telles quelles. C'est une seule étape d'annulation.

## Comme le dernier chantier

Le fichier de votre dernier chantier contient ce qu'il a appris. Pour démarrer un nouveau chantier à partir de lui :

1. Ouvrez les nouveaux plans, puis choisissez {{ui:Appris}} › {{ui:Comme le dernier chantier…}}.
2. Choisissez le `.takeoff.json` du dernier chantier.
3. Cochez ce que vous voulez reprendre : ses conditions (seulement celles que ce métré n'a pas), et ce qu'il a appris (symboles, jeux, ouvrages, motifs). Puis {{ui:Les reprendre}}.

Ses conditions sont aussi conservées comme jeu portant le nom de ce chantier. Ses repères et quantités restent dans son propre fichier. L'ensemble est une seule étape d'annulation.

## Ouvrages les plus utilisés

Un poste qui a un ouvrage compte comme utilisé une fois par chantier lorsqu'il a une quantité et que vous enregistrez le métré. Un chantier est l'ensemble des fichiers de plans dont il est tiré : enregistrer à nouveau le même métré ne compte donc pas deux fois. La liste sous {{ui:Ouvrages les plus utilisés}} place en premier ceux que vous utilisez le plus. Elle omet ceux que ce métré possède déjà. {{ui:Ajouter}} en insère un tel que vous l'avez utilisé en dernier, avec toutes ses parties.

## Répéter sur chaque page

Pour des repères identiques sur chaque page d'un jeu, comme un comptage de cartouches ou un détail type :

1. Sélectionnez les repères sur une feuille ([Sélectionner les repères](topic:copy-paste#select-the-marks)).
2. Dans {{ui:Appris}}, choisissez {{ui:Répéter les repères sélectionnés sur chaque page…}}, nommez le motif et confirmez.

Ils sont placés sur chaque autre page ouverte **de même format**, au même endroit, en une seule étape d'annulation. Les longueurs et surfaces ne vont que sur les pages à la même échelle ; les comptages vont sur n'importe quelle page de ce format. Une page qui les possède déjà est ignorée. Le motif est conservé : les pages ouvertes plus tard reçoivent la proposition dans la barre, ou vous utilisez {{ui:Répéter sur chaque page}} dans la liste.

## Voir et supprimer

Tout ce qui est appris est listé dans {{ui:Appris}}. La corbeille supprime un élément. {{ui:Tout effacer}} supprime tout ce qui est appris et laisse vos postes et repères intacts. Les deux peuvent être annulés jusqu'à la fermeture du métré, et les deux sont enregistrés avec le métré.

Pour arrêter l'apprentissage dans un seul métré, désactivez {{ui:Apprendre de ce métré}}. Rien de nouveau n'est appris, et ce qui est listé reste jusqu'à ce que vous le supprimiez.

## Bon à savoir

- Les anciennes versions de TakeoffCraft ouvrent normalement un fichier contenant des éléments appris. Elles ignorent cette partie, et la suppriment si elles enregistrent à nouveau le fichier.
- Un symbole appris est une petite image de ce que vous avez encadré, conservée dans le fichier (quelques kilo-octets chacune).
- Les symboles appris sont recherchés comme le fait Comptage auto, donc avec les mêmes limites : [Compter automatiquement un symbole](topic:auto-count).
