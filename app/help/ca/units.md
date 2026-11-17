---
title: Unitats
summary: Les unitats en què pot informar un element, les unitats que usen les variables de les fórmules, i com es barregen els sistemes imperial i mètric.
keywords: unitats, lf, sf, sy, sq, iardes quadrades, quadrats de cobertes, acres, hectàrees, metres, metres quadrats, ea, cadascun, mètric, imperial, conversió, unitat per defecte
from: b7bf0528
---

## Unitats dels elements

| Tipus d'element | Unitat | Nom |
|---|---|---|
| Lineal | LF | peus lineals (per defecte) |
| Lineal | m | metres |
| Àrea | SF | peus quadrats (per defecte) |
| Àrea | SY | iardes quadrades |
| Àrea | SQ | quadrats de cobertes (100 peus quadrats) |
| Àrea | ac | acres |
| Àrea | m² | metres quadrats |
| Àrea | ha | hectàrees |
| Recompte | EA | cadascun |

Canvia-la amb {{ui:Unitat}} a l'editor d'elements en qualsevol moment, fins i tot després de mesurar; la quantitat es converteix de seguida.

La llista {{ui:Unitat}} mostra les unitats activades a {{ui:Configuració}} › {{ui:General}} › {{ui:Unitats}}, i sempre la unitat pròpia de l'element. Un element nou comença amb la unitat de longitud o d'àrea marcada amb un asterisc, quan és una de les unitats de l'element; si no, en LF o SF. Vegeu [Unitats, valors escrits i les llistes d'unitats](common:unit-lists).

## Unitats de les variables de fórmules

| Unitat de l'element | L, P, H | A |
|---|---|---|
| LF | peus | peus quadrats (àrea de mur) |
| m | metres | metres quadrats (àrea de mur) |
| SF | peus | peus quadrats |
| SY | peus | iardes quadrades |
| SQ | peus | quadrats |
| ac | peus | acres |
| m² | metres | metres quadrats |
| ha | metres | hectàrees |

Per als elements SY, `A` és en iardes quadrades mentre que `P` i `H` es mantenen en peus. Un volum d'un element SY és `A * 9 * H / 27` iardes cúbiques; per als forjats és més simple usar SF.

## On les unitats són fixes

Algunes lectures sempre usen peus:

- la lectura en directe a la barra d'estat mentre dibuixes (peus-polzades, SF),
- **Marca seleccionada** (peus-polzades, LF i SF),
- el resultat de la comprovació (peus-polzades, amb peus decimals i metres),
- les longituds dels segments i els perímetres al full Marks del llibre de càlcul (peus-polzades).

Els totals dels elements, la taula {{ui:Quantitats}}, les fórmules i el full Estimate usen la unitat pròpia de l'element.

## Les escales i les unitats són separades

L'escala d'un full indica com de gran és el dibuix; la unitat d'un element indica com s'informa. Un dibuix mètric a `1:100` es pot amidar en LF, i un dibuix imperial en m². Calibrar accepta qualsevol unitat: `24'-6"`, `7.5 m`, `7500 mm`.

## Precisió

TakeoffCraft mesura exactament a partir dels punts on fas clic, incloent-hi les longituds i àrees reals dels arcs, i no arrodoneix les quantitats. La pantalla arrodoneix les longituds a 1/16 de polzada i els decimals a dos llocs. Els imports es rodonen només als imports de línia, al cèntim.
