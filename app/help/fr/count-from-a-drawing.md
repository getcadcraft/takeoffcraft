---
title: Compter à partir d'un dessin
summary: Comptez des blocs, des objets d'un calque ou du texte directement depuis un DWG ou un DXF, avec exactitude, prise en charge des blocs imbriqués, des variantes de blocs dynamiques et des réseaux de blocs, en une seule étape d'annulation.
keywords: compter à partir du dessin, comptage CAO, comptage de blocs, compter les blocs, insertion, nom de bloc, blocs imbriqués, bloc dynamique, variante, minsert, réseau, calque, type d'entité, cercles, texte, attribut, étiquette, calques masqués, comptage exact, mode d'emploi, portes, équipements
from: 5060e24e
---

{{ui:Comptage CAO}} dans la barre de feuille (la commande **Compter à partir du dessin** dans les autres styles de menu) compte ce qu'un DWG ou un DXF indique comme présent. Là où {{ui:Comptage auto}} cherche une image d'un symbole et peut en manquer ou en trouver un faux, celui-ci compte les objets : chaque insertion d'un bloc nommé `DOOR-36` est une porte. Ouvrez d'abord le dessin : [Ouvrir un dessin DWG ou DXF](topic:open-a-drawing).

## Compter un bloc

1. Ouvrez une feuille du dessin. {{ui:Comptage CAO}} se trouve dans la barre de feuille.
2. Choisissez-le. La fenêtre liste les blocs avec leur nombre. Recherchez par nom, puis choisissez-en un.
3. Vérifiez la ligne sous la liste : « 22 trouvés, 22 à ajouter ».
4. Sous {{ui:Ajouter à}}, choisissez un poste de comptage, ou laissez {{ui:Un nouveau poste de comptage}} et donnez-lui un nom.
5. Choisissez le bouton d'ajout, qui indique le nombre : {{ui:Ajouter 22 repères}}. Les repères apparaissent aux points d'insertion du bloc, et la quantité du poste est le comptage.

C'est une seule étape d'annulation : {{key:Mod+Z}} retire ensemble les repères (et un nouveau poste). L'estimation, le tableur et le PDF annoté traitent le poste comme n'importe quel autre poste de comptage.

### Ce qui est compté

- **Chaque insertion du nom de bloc**, quels que soient son échelle et son angle, dans l'espace objet ou dans l'espace papier. La casse n'a pas d'importance pour les noms de blocs.
- **Réseaux de blocs** (MINSERT) : chaque copie du réseau compte pour une.
- **Blocs imbriqués.** Un bloc placé à l'intérieur d'un autre est compté à chaque niveau de profondeur. La liste indique « 6 dans d'autres blocs » ; décochez {{ui:Compter aussi les blocs à l'intérieur d'autres blocs}} pour ne compter que les insertions placées directement dans le dessin.
- **Blocs dynamiques.** Un bloc dynamique est compté sous son propre nom, et non sous les copies anonymes (`*U12`) conservées par le fichier. Ses états sont listés à part (« Single 12, Double 4 ») : choisissez un état pour ne compter que ceux-là, ou {{ui:Toutes les variantes}}. Lorsqu'un fichier n'indique pas quel état une copie affiche, elles sont listées sous « (état inconnu) ».
- **Filtre de calque.** Pour un bloc présent sur plusieurs calques, choisissez-en un sous {{ui:Sur le calque}}.

### Ce qui n'est pas compté

- **Calques masqués.** Un objet placé sur un calque désactivé ou gelé dans le fichier (ou que vous avez masqué dans {{ui:Calques}}) est exclu, et la ligne indique combien : « 3 sur des calques masqués exclus ». Cochez {{ui:Les compter aussi}} pour les inclure.
- **Les références externes non ouvertes** ne sont pas comptées ; la fenêtre l'indique.
- **Des objets superposés exactement sur un autre objet du même type** sont comptés deux fois (ce sont deux objets), et la fenêtre le signale : c'est en général une erreur de dessin qui mérite un coup d'œil.

## Ce que montre cette feuille, ou le dessin entier

- **Ce que montre cette feuille** compte les objets affichés par la feuille : sur une présentation, les objets de l'espace objet situés dans ses fenêtres de présentation (un calque gelé dans une fenêtre n'y est pas compté), plus les objets propres à la présentation.
- **Le dessin entier, chaque objet une seule fois** compte l'espace objet une fois, avec les repères sur la feuille Objet, et ne recompte pas ce que plusieurs présentations affichent à nouveau.

Compter ce qu'affiche une présentation et compter ce qu'affiche l'espace objet donnent le même nombre pour les mêmes objets ; ne les additionnez pas dans un même poste.

## Compter à nouveau

Compter à nouveau le même bloc avec le même poste n'ajoute que les nouveautés : « 22 déjà comptés ». Chaque repère correspond à un objet.

## Par calque et type

Sous {{ui:Par calque et type}}, choisissez un calque et un type d'objet (cercles, polylignes, hachures…) : « tous les cercles sur E-LITE ». Cochez {{ui:Compter aussi les objets à l'intérieur des blocs}} pour inclure ceux situés dans les définitions de blocs, à chaque endroit où le bloc est inséré.

## Par texte

Sous {{ui:Par texte}}, saisissez le texte, tel que `A3`, et indiquez s'il doit être exactement identique, le contenir, ou apparaître comme mot entier. Les objets texte, les textes multiligne et les textes de lignes de repère multiples, ainsi que les **valeurs d'attributs** de bloc, sont tous comptés (un attribut d'étiquette `ITEM = A3` est trouvé) ; choisissez {{ui:Dans l'attribut}} pour ne compter qu'un seul attribut. Les textes les plus fréquents sont listés pour un clic.

## Quand utiliser plutôt le comptage auto

Utilisez {{ui:Comptage auto}} pour les PDF et pour les symboles d'un dessin qui ne sont pas des blocs (dessinés isolément, ou décomposés). Dessinés comme des blocs, comptez-les ici.
