---
title: Mesurer depuis un dessin
summary: Relevez longueurs et surfaces à partir des lignes, arcs, polylignes et hachures du dessin lui-même en les choisissant, avec des arcs et des trous exacts, au lieu de les tracer point par point.
keywords: mesurer le dessin, géométrie, polyligne, arc, cercle, hachure, bombement, longueur exacte, surface exacte, choisir, fenêtre, tracer, depuis CAO, linéaire, surface
from: fd734246
---

{{ui:Mesurer le dessin}} dans la barre de la feuille d'un plan DWG ou DXF prend les objets du dessin comme repères, de sorte que vous n'avez pas à les tracer point par point. La longueur d'une polyligne, la longueur d'un arc, la surface d'un cercle et la surface d'une hachure avec ses trous sont exactes, grâce au même calcul que pour chaque repère du métré.

## Prendre des objets comme poste linéaire ou de surface

1. Créez ou cliquez sur un poste **linéaire** ou de **surface** sous {{ui:Éléments (I)}}. La feuille doit avoir une échelle.
2. Choisissez {{ui:Mesurer le dessin}}.
3. Cliquez sur les objets de la feuille pour les choisir, ou tracez une fenêtre autour d'eux : tout ce qui est entièrement à l'intérieur est choisi. {{key:Shift}} ajoute une fenêtre à la sélection ; cliquez de nouveau sur un objet choisi pour le retirer. La barre affiche le total : « 6 tronçons : 108'-9 1/8" au total. »
4. Choisissez le bouton d'ajout, qui indique le nombre et le poste, comme {{ui:Ajouter 6 à Edge}} (ou appuyez sur {{key:Enter}}). Chaque objet devient un repère du poste, en une seule étape d'annulation. {{key:Esc}} efface ce que vous avez choisi.

## Ce que prend chaque type de poste

- Un poste **linéaire** prend les lignes, arcs, polylignes, cercles et splines par leur longueur. Une forme fermée se compte par son périmètre. Une hachure est exclue : elle a une surface, pas une longueur, et la barre l'indique.
- Un poste de **surface** prend les formes fermées : polylignes fermées, cercles, solides 2D et hachures avec leurs trous. Les tronçons ouverts sont exclus, et la barre l'indique.

## Exact, ou presque exact

Les lignes, les arcs (quel que soit le bombement), les polylignes avec bombements et les cercles sont exacts : les longueurs et surfaces utilisent le rayon et l'angle de balayage de l'arc, et non une image de celui-ci. Les ellipses, les splines et les hachures dont la frontière est faite d'arêtes sont mesurées en cordes d'un degré ou moins, ce qui est à moins d'un centième de pour cent près pour les ellipses et à un dixième de pour cent près pour le reste ; la barre indique combien de ce que vous avez choisi sont des courbes de ce type.

## D'où elle prend les objets

- **Objet** : les objets de l'espace objet. **Une présentation** : ses propres lignes, et les objets de modèle situés dans une fenêtre de présentation, mis à l'échelle par celle-ci. Un objet qui traverse le bord d'une fenêtre de présentation n'est pas proposé (il serait tracé tronqué) ; un objet que deux fenêtres affichent est pris une seule fois.
- Seuls les calques affichés par la feuille sont pris en compte. Les blocs sont comptés, non mesurés : voir [Compter depuis un dessin](topic:count-from-a-drawing). Les polylignes 3D, les maillages, les solides et les régions ne sont pas proposés.
