---
title: "Mémoire des prix de vos chantiers passés"
summary: "TakeoffCraft retient les taux utilisés sur vos métrés passés, sur cet ordinateur seulement, pour qu'un nouveau métré parte de ce que vous avez payé la fois précédente. Consulter, utiliser, oublier."
keywords: mémoire des prix, prix, mémoriser les prix, dernier chantier, chantiers passés, prix typique, médiane, taux, non chiffré, rechiffrer, apprendre d'un métré passé, oublier, bibliothèque
from: 7279f1a1
---

{{ui:Prix}} dans la barre d'outils (le signe dollar) ouvre ce que TakeoffCraft retient des prix que vous avez utilisés. C'est une liste simple : pour chaque nom de poste, les taux de vos derniers chantiers. Elle est conservée dans ce navigateur (dans Studio, dans sa propre vue web), à côté de la bibliothèque de prix, jamais dans un fichier de métré, et rien n'est envoyé nulle part. Ce n'est pas un modèle entraîné.

## Ce qui est mémorisé

Lorsque vous enregistrez un métré, chaque poste qui a un prix et qui est utilisé (il porte un repère, ou une quantité saisie supérieure à zéro) est mémorisé sous son nom et son type : taux de matériau, taux de main-d'œuvre, chute et unité. Un chantier correspond aux fichiers de plans dont il est relevé ; réenregistrer le même métré remplace donc ses propres prix au lieu d'ajouter un autre chantier. Les 12 derniers chantiers sont conservés pour chaque nom.

Pour intégrer votre travail antérieur, choisissez {{ui:Apprendre d'un métré passé…}} et sélectionnez un métré enregistré (.json). Ses postes chiffrés et utilisés sont mémorisés de la même façon.

Les noms correspondent lorsque leurs mots correspondent, quelle que soit la casse ou la ponctuation (« Montant 2x4, 8 ft » et « montant 2x4 8 FT » sont identiques). Les mêmes mots pour un autre type de poste (un poste linéaire et un poste de comptage) ne correspondent pas au même prix.

## Utiliser sur un nouveau métré

1. Créez les postes du nouveau métré.
2. Choisissez {{ui:Prix}}. Sous {{ui:Ce métré}}, vous voyez chaque poste qui a un prix mémorisé, ce que vous lui avez déjà attribué, les taux du dernier chantier, les taux typiques (le milieu des chantiers mémorisés) et l'étendue.
3. Choisissez {{ui:Utiliser le dernier}} ou {{ui:Utiliser le typique}} sur un poste, ou {{ui:Donner un prix à N postes sans prix depuis la mémoire}} pour renseigner, à partir du dernier chantier, chaque poste qui n'a pas encore de prix.

Chaque utilisation est une étape : {{key:Ctrl+Z}} la reprend. Un poste qui n'a qu'un nom proche (un nom contenu dans l'autre) l'indique, et les boutons utilisent alors les taux du nom proche. Un prix mémorisé à l'unité n'est jamais appliqué à un poste au pied : la boîte de dialogue indique que les unités diffèrent et ne le modifie pas.

## Consulter, modifier, oublier

{{ui:Tout ce qui est mémorisé}} liste chaque nom avec ses taux et le nombre de chantiers. Le bouton corbeille oublie un nom ; {{ui:Effacer tous les prix}} les oublie tous. Désactivez {{ui:Mémoriser mes prix quand j'enregistre un métré}} pour cesser de mémoriser ; ce qui est déjà là reste jusqu'à ce que vous l'oubliiez. Vos métrés et la bibliothèque de prix ne sont jamais touchés.

## Avec votre assistant

Si vous autorisez les assistants dans les Paramètres, ils peuvent lire ce qui est mémorisé pour les postes du métré (prices_list) et y chiffrer des postes (prices_apply, qui peut d'abord afficher un aperçu). C'est la même liste que dans la boîte de dialogue.
