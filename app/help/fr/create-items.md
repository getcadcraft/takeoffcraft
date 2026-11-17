---
title: Créer des postes de métré
summary: Créez des postes linéaires, de surface et de comptage, définissez leur unité, leur hauteur ou profondeur, la chute et les tarifs de matériau et de main-d'œuvre.
keywords: équipe, cadence de production, taille de l'équipe, salaire, heures, heures-homme, heures-ouvrier, jours-équipe, heures de main-d'œuvre, poste, nouveau poste, condition, poste à plusieurs conditions, mesurer aussi, plusieurs types, pièce, linéaire, surface, comptage, unité, hauteur, profondeur, chute, matériau, main-d'œuvre, tarif, couleur, coût
from: 7fa5effc
---

Un **poste** est une chose que vous mesurez et chiffrez : un type de mur, un revêtement de sol, un plafond, une porte, un luminaire. Chaque repère que vous tracez appartient à un poste. D'autres logiciels appellent ces éléments des conditions.

Chaque poste a un type (et peut aussi accueillir d'autres sortes de repères, voir [Un poste, plusieurs sortes de repères](topic:create-items#one-item-several-kinds-of-marks)) :

| Type | Vous tracez | Il indique | Unités |
|---|---|---|---|
| Linéaire | Tronçons de points reliés | Longueur, nombre de tronçons, et surface de mur lorsqu'il a une hauteur | LF ou m |
| Surface | Contours fermés, avec réservations | Surface, périmètre, nombre de surfaces | SF, SY, SQ, ac, ha ou m² |
| Comptage | Un clic par objet | Combien | EA |
| Quantité saisie | Rien : vous saisissez la quantité | Le nombre que vous avez saisi (ou celui importé de CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha ou m² |

## Quantités saisies (sans dessin)

Certains éléments d'un métré ne sont jamais dessinés : installation de chantier, autorisations, provision pour aléas, sous-traitance au forfait, ou les déblais et remblais calculés par CivilCraft. Créez-les comme **Quantité saisie** :

1. Choisissez {{ui:Nouveau poste}}, saisissez un nom, sélectionnez {{ui:Quantité saisie (sans dessin)}} et choisissez {{ui:Ajouter}}.
2. Dans l'éditeur de poste, choisissez l'{{ui:Unité}} (LS pour un forfait) et saisissez la {{ui:Quantité}} : `1`, `2.5` ou `1,250`.
3. Définissez la chute et les tarifs comme pour tout autre poste. Les formules d'un ouvrage utilisent `Q`, la quantité, par exemple `ceil(Q / 12)` pour le nombre de chargements de camions.

Une quantité saisie ne prend aucun repère et ne rend jamais le métré incomplet. Lorsque le métré comporte des zones de soumission, l'éditeur propose aussi {{ui:Zone de soumission}} : la quantité compte alors dans cette zone, ses variantes et ses totaux, comme le ferait un repère à cet endroit. Les quantités importées d'une autre application indiquent leur origine, voir [Terrassements et cotes ponctuelles](topic:earthwork#cut-and-fill-from-civilcraft).

## Créer un poste

1. Dans le panneau {{ui:Éléments (I)}} à droite, choisissez {{ui:Nouveau poste}}.
2. Saisissez un nom, comme `Cloison intérieure type A` ou `Moquette en dalles`.
3. Choisissez le type : {{ui:Linéaire (longueur)}}, {{ui:Surface}} ou {{ui:Compter}}.
4. Choisissez {{ui:Ajouter}} (ou appuyez sur {{key:Enter}}).
   Le poste apparaît dans la liste avec sa propre couleur, devient le poste avec lequel vous tracez, et son éditeur s'ouvre sous la liste. La barre d'état indique l'outil à choisir ensuite.

Appuyez sur {{key:Esc}} dans le formulaire pour le fermer sans ajouter de poste.

:::tip
Si vous choisissez d'abord un outil de mesure, TakeoffCraft utilise le dernier poste du bon type, ou ouvre le formulaire {{ui:Nouveau poste}} avec ce type déjà choisi.
:::

## Choisir le poste avec lequel vous tracez

Cliquez sur un poste dans la liste. Il devient le poste auquel vont les nouveaux repères, et ses repères sont mis en évidence sur toutes les feuilles pendant que les autres s'estompent. Si la feuille ouverte n'en contient aucun, TakeoffCraft passe à une feuille qui en contient. Cliquez à nouveau sur le poste pour arrêter la mise en évidence ; il reste le poste avec lequel vous tracez.

Cliquer sur un repère avec l'outil {{ui:Sélectionner}} fait aussi de son poste le poste courant.

## Configurer le poste

L'éditeur de poste (**Poste : (nom)**) comporte les champs suivants. Chacun est enregistré lorsque vous quittez le champ ou appuyez sur {{key:Enter}}, et chaque modification peut être annulée.

| Champ | Rôle |
|---|---|
| {{ui:Nom}} | Affiché dans la liste, les tableaux et les exports. |
| {{ui:Type}} | Linéaire, Surface ou Comptage. Il est verrouillé dès que le poste a des repères (« Un poste comportant des repères conserve son type »). |
| {{ui:Couleur}} | La couleur de ses repères à l'écran et dans le PDF annoté. |
| {{ui:Unité}} | Unité de la quantité : LF ou m pour le linéaire ; SF, SY, SQ, ac, ha ou m² pour la surface ; EA pour le comptage. |
| {{ui:Mesurer aussi}} | Les autres sortes de repères que le poste accepte, chacune avec sa propre unité. Voir plus bas. |
| {{ui:Hauteur}} (linéaire) | Une hauteur de mur. Le poste indique alors aussi la surface du mur (longueur × hauteur). Les tronçons issus d'un modèle BimCraft conservent leurs portes et fenêtres : elles sont retirées une seule fois, et le poste indique la surface brute, les ouvertures et la surface nette. Un métré issu d'un projet BimCraft ayant choisi une méthode de mesure est mesuré selon cette méthode ici aussi (la remarque la nomme, avec sa source, et précise qu'elle n'a pas été vérifiée par un économiste de la construction) ; la méthode ne peut pas être modifiée dans TakeoffCraft. Les briques ou blocs et le mortier d'un type de mur arrivent en deux composants : les quantités à commander et le volume de mortier. |
| {{ui:Profondeur}} (surface) | Une profondeur ou épaisseur, utilisée dans les formules d'ouvrage (par exemple le volume de béton). |
| {{ui:Chute %}} | Ajoutée à la quantité avant le chiffrage : 10 signifie quantité × 1.10. |
| {{ui:Matériau $/LF}} | Coût matériau par unité. L'intitulé suit l'unité : $/SF, $/EA, etc. |
| {{ui:Main-d'œuvre $/LF}} | Coût de main-d'œuvre par unité. |
| {{ui:Numéro CSI}} | Son numéro CSI MasterFormat, comme `09 21 16` (ou seulement la division, `09`). La feuille « By division » du classeur regroupe les coûts selon ce numéro. Les postes issus des [lots](topic:trade-packs) en ont déjà un. |

La hauteur et la profondeur acceptent des pieds et pouces (`9'-0"`, `8' 6"`) ou des pieds décimaux (`9`) pour les unités impériales, et des mètres (`2.7`, `2700 mm`) pour les unités métriques. Les tarifs acceptent des montants comme `12.50` ou `$1,250`, jusqu'à quatre décimales. Voir [Saisie des longueurs, tarifs et pourcentages](topic:entry-formats).

Sous les champs, **Mesuré** affiche les totaux que peuvent utiliser les formules du poste, avec leurs lettres : Longueur (L), Tronçons (N), Surface du mur (A) pour le linéaire ; Surface (A), Périmètre (P), Surfaces (N) pour la surface ; Comptage (N) pour le comptage.

## Un poste, plusieurs sortes de repères

Certains éléments se mesurent de plusieurs façons : une pièce a un sol (une surface), une plinthe le long de ses murs (une longueur) et des portes (un comptage). Au lieu de trois postes, n'en créez qu'un :

1. Créez le poste avec son type principal, par exemple un poste de surface `Pièce 101`.
2. Sous {{ui:Mesurer aussi}} dans son éditeur, cochez {{ui:Linéaire}}, {{ui:Compter}} ou les deux. Chacun reçoit une unité à côté.
3. Tracez avec n'importe quel outil dont la sorte est acceptée par le poste : avec `Pièce 101` courant, {{ui:Surface}} trace son sol, {{ui:Linéaire}} sa plinthe et {{ui:Compter}} ses portes. TakeoffCraft ne demande pas un autre poste.

La liste des postes affiche chaque quantité (`50.00 SF + 2 EA`). Dans le tableau des quantités, la ligne du poste porte la quantité principale, et chaque autre sorte a sa propre ligne dessous, comme **Pièce 101 (comptage)**, avec sa propre chute et ses tarifs de matériau et de main-d'œuvre. Les exports, le tableau par feuille et la légende du PDF annoté les listent de la même façon.

Les champs du type principal restent propres à ce type : la hauteur ou la profondeur, la pente, les déductions et la forme 3D ne s'appliquent qu'à ses propres repères. Un tronçon de plinthe tracé pour un poste de surface est mesuré à plat le long du plan et apparaît à plat en 3D. Les formules d'ouvrage utilisent les totaux du type principal.

Une sorte ne peut être décochée que si le poste n'en a aucun repère ; supprimez-les, ou d'abord déplacez-les vers un autre poste sous **Repère sélectionné**. Les repères peuvent être déplacés vers tout poste qui accepte leur sorte.

Plus bas se trouve l'{{ui:Assemblage}} : des composants tels que montants ou planches, chacun avec sa propre formule et ses tarifs. Voir [Ouvrages et formules](topic:assemblies).

Tout en bas, {{ui:Monter}} et {{ui:Descendre}} changent la place du poste dans la liste et dans les exports, et {{ui:Supprimer le poste}} le retire avec tous ses repères (après confirmation ; vous pouvez l'annuler).

Les postes de surface ont aussi **Pente** (plans de toiture mesurés sur la pente : [Toitures et pentes](topic:roofs-and-slopes)) et **Déduction** (leurs repères sont retirés des surfaces d'autres postes : [Mesurer des surfaces](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Les postes linéaires ont une **Inclinaison** (Niveau, Rampant, Noue ou Arêtier) et, pour les rampants et les arêtiers, une **Pente**.

## Tarifs dans le tableau

Vous pouvez aussi saisir la {{ui:Chute %}}, ainsi que les tarifs de matériau et de main-d'œuvre, directement dans le tableau {{ui:Quantités}} en bas ({{ui:Par poste}}). C'est le même réglage que dans l'éditeur.

## Comment se calcule le chiffrage

Pour chaque poste et chaque composant d'ouvrage :

1. **Avec chute** = quantité × (1 + chute %).
2. **Matériau** = avec chute × matériau par unité, arrondi au centime.
3. **Main-d'œuvre** = avec chute × main-d'œuvre par unité, arrondi au centime.
4. **Total** = matériau + main-d'œuvre.

Le {{ui:Total du chantier}} additionne chaque poste et chaque composant. Un poste peut avoir ses propres tarifs et un ouvrage en même temps ; les deux sont comptés, donc laissez les tarifs du poste à 0 lorsque ses composants portent le coût.

## Main-d'œuvre par équipe

Au lieu d'un tarif de main-d'œuvre par unité, la main-d'œuvre d'un poste peut venir d'une équipe : son rendement horaire, son nombre de personnes et ce que gagne chacun. Sous {{ui:Main-d'œuvre par équipe}} dans l'éditeur de poste, cochez {{ui:Chiffrer la main-d'œuvre à partir d'une équipe}} et renseignez :

| Champ | Exemple |
|---|---|
| {{ui:Production}} | `20` LF par heure (dans l'unité du poste) pour toute l'équipe |
| {{ui:Taille de l'équipe}} | `2` personnes |
| {{ui:Salaire $/heure chacun}} | `45` |

TakeoffCraft calcule, à partir de la quantité avec chute :

- **heures d'équipe** = quantité ÷ production (110 LF ÷ 20 = 5.5),
- **heures-ouvrier** = heures d'équipe × taille de l'équipe (11),
- **jours d'équipe** = heures d'équipe ÷ 8 (0.69),
- **main-d'œuvre** = heures-ouvrier × salaire ($495.00).

L'éditeur affiche le résultat et le tarif qui en découle ($4.50/LF). Le tarif de main-d'œuvre propre au poste devient alors en lecture seule, dans l'éditeur et dans le tableau. L'en-tête du tableau des {{ui:Quantités}} ajoute les heures-ouvrier et les jours d'équipe du chantier. Les exports indiquent les heures de chaque équipe, et dans le classeur la cellule de main-d'œuvre est une formule sur l'équipe (`ROUND(F2/20*2*45,2)`). Décochez la case pour revenir à un tarif par unité.

## Postes métriques

Choisissez m (linéaire) ou m² (surface) comme unité. Les quantités, hauteurs et valeurs de formules sont alors en mètres. L'échelle de la feuille peut être n'importe quel préréglage ou étalonnage ; les unités et les échelles sont indépendantes.

## Suite

- [Mesurer les tronçons linéaires](topic:measure-linear)
- [Mesurer des surfaces avec évidements](topic:measure-areas)
- [Compter à la main](topic:count-by-hand)
