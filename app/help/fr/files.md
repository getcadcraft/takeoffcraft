---
title: Fichiers que TakeoffCraft ouvre et enregistre
summary: Des PDF en entrée, un fichier de projet de métré, des tableurs et des PDF annotés en sortie - ce que contient chacun, où il va, et ce qui change en ligne, hors ligne et d'un navigateur à l'autre.
keywords: fichiers, formats, pdf, takeoff.json, fichier de projet, xlsx, csv, pdf annoté, télécharger, enregistrer, ouvrir, hors ligne
from: 1bf9be65
---

## Ce qu'il ouvre

| Fichier | Comment | Remarques |
|---|---|---|
| PDF (`.pdf`) | {{ui:Ouvrir des PDF}}, {{key:Mod+O}}, ou dépôt sur la page | Plusieurs à la fois. Chaque page devient une feuille. |
| Projet de métré (`.takeoff.json`) | {{ui:Ouvrir un métré}}, ou dépôt sur la page | Vos postes, vos échelles et vos repères. Vous pouvez le déposer avec ses PDF. |

Les autres fichiers déposés sur la page sont ignorés, et la barre d'état les nomme.

- **Les PDF protégés par un mot de passe** ne s'ouvrent pas : « (nom) est protégé par un mot de passe. Ouvrez une copie non protégée. »
- **Le même PDF en double** n'est ouvert qu'une fois : « (nom) est déjà ouvert. » TakeoffCraft reconnaît les fichiers à leur contenu, pas à leur nom.
- **Les PDF numérisés** s'ouvrent et se mesurent comme les autres ; TakeoffCraft n'a pas besoin du texte du PDF.
- **Les grands jeux de plans** : chaque PDF est lu en entier à l'ouverture (pour en prendre l'empreinte), donc un très gros fichier demande un instant. Les miniatures sont dessinées une par une au fil du défilement.

## Ce qu'il enregistre

Chaque enregistrement est un téléchargement. Rien n'est réécrit dans vos PDF.

| Vous choisissez | Vous obtenez | Ce qu'il contient |
|---|---|---|
| {{ui:Enregistrer le métré}} | `(nom).takeoff.json` | Postes, ouvrages, prix, échelles des feuilles et tous les repères, rattachés à chaque PDF par son contenu. Aucune page de PDF. |
| {{ui:XLSX}} | `(nom).xlsx` | Quatre feuilles de calcul : Estimation (avec des formules vivantes), Par feuille, Repères, Échelles. |
| {{ui:CSV}} | `(nom).csv` | L'estimation en valeurs brutes, une ligne par poste et par composant. |
| {{ui:PDF annoté}} | `(nom du PDF) (métré).pdf` | Une copie de chaque PDF ouvert qui porte des repères, avec le métré tracé sur ses pages et une légende. Un fichier par PDF. |

Le nom provient du premier PDF que vous avez ouvert dans ce métré. Il n'y a pas encore de zone pour renommer : renommez le fichier téléchargé si vous voulez un autre nom.

Voir [Exporter l'estimation et un PDF annoté](topic:export-estimate) et [Colonnes d'export](topic:export-columns).

## Où vont les téléchargements

Votre navigateur les enregistre là où il enregistre tous les téléchargements, en général le dossier Téléchargements. Vous le trouverez dans {{pick:mac=le Finder|windows=l'Explorateur de fichiers|linux=votre gestionnaire de fichiers}}. Si votre navigateur est réglé pour demander où enregistrer chaque fichier, il vous le demande.

:::chromium
{{ui:PDF annoté}} avec plusieurs PDF annotés télécharge plusieurs fichiers à la fois. Chrome et Edge peuvent demander une fois si ce site peut télécharger plusieurs fichiers. Choisissez Autoriser.
:::

:::safari
Safari enregistre dans Téléchargements, sauf si vous avez changé l'emplacement des téléchargements dans les Réglages de Safari, sous Général.
:::

## Pourquoi le fichier de projet et les PDF sont séparés

Le fichier `.takeoff.json` ne contient que votre métré. Il retrouve ses PDF grâce à leur contenu (une empreinte de chaque fichier), donc :

- Renommer ou déplacer un PDF n'a aucune importance.
- Un PDF modifié ou réenregistré par un autre programme compte comme un fichier différent, même avec le même nom.
- Les repères posés sur des PDF qui ne sont pas ouverts comptent quand même dans les totaux.

Voir [Enregistrer et rouvrir un métré](topic:save-and-reopen).

## En ligne et hors ligne

Vos PDF et vos métrés ne quittent jamais votre ordinateur, en ligne comme hors ligne. La connexion n'importe que pour charger TakeoffCraft lui-même.

Pour travailler sans connexion, enregistrez d'abord l'application, tant que vous êtes en ligne :

1. Choisissez {{ui:Enregistrer pour le hors ligne}} dans la barre de l'application en haut.
   Le bouton compte pendant l'enregistrement : « Enregistrement : 12 sur 40 ».
2. Attendez {{ui:Prêt hors ligne}}.

L'enregistrement de TakeoffCraft conserve dans votre navigateur l'application, cette aide, le lecteur de PDF, le module d'écriture de PDF utilisé par {{ui:PDF annoté}} et le processus de {{ui:Comptage auto}}, soit environ 6 Mo. Dès que {{ui:Prêt hors ligne}} s'affiche, tout fonctionne hors ligne : ouvrir des PDF, mesurer, {{ui:Comptage auto}}, {{ui:Enregistrer le métré}}, {{ui:XLSX}}, {{ui:CSV}} et {{ui:PDF annoté}}.

| Le bouton indique | Signification |
|---|---|
| {{ui:Enregistrer pour le hors ligne}} | Pas encore enregistré dans ce navigateur. Choisissez-le pour enregistrer. |
| Enregistrement : (n) sur (m) | Enregistrement en cours. |
| {{ui:Prêt hors ligne}} | Enregistré. Choisissez-le pour {{ui:Enregistrer à nouveau (obtenir la version la plus récente)}} ou {{ui:Supprimer la copie hors ligne}}. |
| {{ui:Enregistrement impossible}} | Certains fichiers n'ont pas été téléchargés. Vérifiez votre connexion et choisissez-le à nouveau. |
| {{ui:Hors ligne indisponible}} | Cette fenêtre de navigateur ne peut pas conserver de copie hors ligne (les fenêtres privées et certains ordinateurs gérés la bloquent). |

Pour en savoir plus, dont la durée de conservation d'une copie enregistrée dans chaque navigateur : [Travailler hors ligne](common:offline).

:::offline
Vous êtes hors ligne. Si la barre de l'application affiche {{ui:Prêt hors ligne}}, tout fonctionne. Sinon, les éléments que TakeoffCraft n'a pas encore chargés dans cet onglet (le module d'écriture de PDF pour {{ui:PDF annoté}}, le processus de comptage auto) ne peuvent pas se charger maintenant, et {{ui:PDF annoté}} s'arrête avec « Le PDF annoté n'a pas pu être écrit ». Votre métré est en sécurité dans les deux cas : {{ui:Enregistrer le métré}}, {{ui:XLSX}} et {{ui:CSV}} n'ont pas besoin de connexion. Ne rechargez pas l'onglet avant d'être de nouveau en ligne.
:::

:::online
Vous êtes en ligne. Avant une visite de chantier ou un vol, choisissez {{ui:Enregistrer pour le hors ligne}} et attendez {{ui:Prêt hors ligne}}.
:::

## Tableurs

Le XLSX conserve des formules vivantes : un tableur recalcule donc l'estimation à l'ouverture du fichier et la garde juste quand vous y modifiez un prix ou une chute. Le classeur a été vérifié dans LibreOffice Calc, qui a recalculé chaque total au centime près. Il n'a pas encore été ouvert dans Excel.

Le CSV contient des valeurs brutes avec une marque d'ordre des octets, pour que les tableurs lisent correctement des caractères comme m².

## Bureau et cloud

:::desktop
Depuis la 0.5, l'application de bureau est CadCraft Studio : TakeoffCraft et les sept autres applications dans une seule installation. Il n'y a pas d'installateur TakeoffCraft séparé.
:::

L'enregistrement dans le cloud n'est pas encore disponible. Conservez vos fichiers `.takeoff.json` avec les PDF du chantier, et sauvegardez-les comme n'importe quel autre fichier. Voir [Où vont vos fichiers](common:your-files).
