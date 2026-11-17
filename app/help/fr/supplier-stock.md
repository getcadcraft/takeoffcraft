---
title: Vérifier le stock fournisseur et les délais
summary: Ajoutez la liste de stock d'un fournisseur (CSV ou tableur) et TakeoffCraft compare à celle-ci ce dont le métré a besoin, chute comprise, avec le stock disponible et la durée d'attente. Les manques et les longs délais apparaissent dans le panneau Problèmes.
keywords: fournisseur, stock, en stock, délai, délai de livraison, disponibilité, pénurie, commande en attente, liste de commande, csv, sku, vendeur, matériaux, approvisionnement, problèmes
from: f11160fb
---

{{ui:Appro}} dans la barre d'outils (le camion) compare ce dont votre métré a besoin à la liste de stock d'un fournisseur. Les lignes utiles du fournisseur sont conservées dans le fichier du métré lui-même. Rien n'est envoyé nulle part et rien n'interroge un fournisseur : c'est vous qui apportez le fichier.

## Le fichier

Un fichier CSV avec une ligne d'en-tête. Il lui faut une colonne de nom ou de SKU, et une colonne de stock ou de délai. Ces en-têtes sont reconnus (dans n'importe quel ordre, quelle que soit la casse) : Item, Name, Description ou Product ; SKU, Part ou Item # ; In stock, On hand, Available ou Quantity ; Lead time ou Delivery days ; Unit ou UOM ; Price ou Cost ; Supplier ou Vendor.

- Le stock peut être un nombre (1,200), « In stock » ou « Out of stock ».
- Un délai peut être « 5 days », « 2 weeks », « 2-3 weeks » (le plus long est retenu), « 3 months », « same day » ou « backorder ». Un nombre seul est exprimé dans l'unité de l'en-tête (jours, sauf si l'en-tête indique weeks ou months).
- Les fichiers Excel ne sont pas lus : enregistrez d'abord la feuille au format CSV.

## Vérifier le métré

1. Choisissez {{ui:Appro}}, puis {{ui:Ajouter un fichier fournisseur…}} et sélectionnez le CSV. Vous pouvez en ajouter plusieurs : jusqu'à cinq fichiers, 2,000 lignes conservées au total, celles correspondant à vos postes en premier.
2. Chaque poste, condition secondaire et composant d'ouvrage ayant une quantité est associé à une ligne par son nom, ou par le SKU figurant dans son nom. Un nom approchant (l'un contenu dans l'autre) est utilisé lorsqu'il n'existe pas de correspondance exacte, et l'application l'indique.
3. Sous {{ui:Ce dont le métré a besoin}}, les lignes en manque passent en premier : « Short by 120 EA », « Lead time 21 days », « On backorder », « Unit differs », « No stock figure » ou « In stock ». Le besoin inclut la chute. Une unité fournisseur différente de celle du métré (une tonne pour un pied, par exemple) est signalée et n'est jamais comparée. Chaque ligne comporte {{ui:Sélectionner le poste}}, qui vous amène au poste.
4. Réglez {{ui:Délai maximal souhaité (jours)}} (14 par défaut). Un poste qui n'est pas en stock et dont l'attente dépasse ce délai est signalé, et le récapitulatif indique le délai le plus long qui compte.
5. {{ui:Liste de commande (CSV)}} télécharge les postes en manque, avec la quantité manquante, le fournisseur et le délai. {{ui:Exclure}} retire un besoin de la vérification (c'est une étape annulable).

## Fichiers tableur et bibliothèque de prix

La liste d'un fournisseur peut être un classeur Excel (.xlsx) aussi bien qu'un CSV : la première feuille est lue, avec les mêmes noms de colonnes. Les formules ne sont jamais exécutées ; c'est la valeur enregistrée dans le fichier qui est lue.

Une fois un fichier contenant des prix ajouté, {{ui:Prix vers la bibliothèque}} dans la boîte de dialogue définit le prix matière de chaque élément de la [Bibliothèque](topic:price-library) dont le fichier donne le prix : même nom, et unité identique (ou non précisée). La main-d'œuvre, la chute, la hauteur et les ouvrages restent inchangés, et la remarque de l'élément indique le fichier d'où vient le prix. Un élément en mètres n'est pas valorisé à partir d'une liste en pieds, et un élément sans nom correspondant est laissé tel quel ; la ligne d'état indique combien ont été ignorés pour cause d'unité. Mettez les prix à jour depuis la Bibliothèque pour reporter les nouveaux prix dans ce métré.

## Dans le panneau Problèmes

Un manque est un avertissement et un délai long une remarque, dans le panneau Problèmes commun (« Stock fournisseur »), où ils figurent avec toutes les autres vérifications. Vous pouvez en accepter un en indiquant un motif ; l'acceptation est enregistrée dans le métré.

## Avec votre assistant

Si vous autorisez les assistants dans les Paramètres, ils peuvent lire la vérification (supply_check). L'ajout d'un fichier fournisseur reste de votre ressort.

## Bon à savoir

Les chiffres de stock ne sont aussi à jour que le fichier que vous ajoutez. Ajoutez à nouveau le fichier pour l'actualiser : un fichier portant le même nom remplace le précédent.
