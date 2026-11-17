---
title: Paquets d'ofertes i nivellació d'ofertes
summary: Dividiu el pressupost en paquets per especialitat, envieu l'abast de cada paquet als subcontractistes, compareu les ofertes que tornen sobre el mateix abast, i useu l'oferta triada com a preu del paquet.
keywords: nivellació d'ofertes, nivellació, paquet d'ofertes, subcontractista, oferta de subcontractista, abast, complement, especialitat, divisió CSI, compara ofertes, oferta més baixa, quadre d'ofertes, licitador, adjudicació, oferta triada, utilitza una oferta, preu de subcontracte
from: 856b3088
---

Un contractista general envia l'abast de cada especialitat als subcontractistes i compara el que torna. TakeoffCraft fa les dues coses des de l'amidament: obriu {{ui:Exporta}} › {{ui:Paquets d'ofertes i nivellació…}}.

## Paquets

Hi ha un paquet per cada divisió CSI que usen els vostres elements (els dos primers dígits del {{ui:Número CSI}} d'un element, vegeu [Crea elements de l'amidament](topic:create-items)). Els elements sense número formen un paquet propi. Cada paquet mostra els seus elements, en quants fulls hi ha les seves marques, i el nostre propi cost (material i mà d'obra abans dels recàrrecs, de l'oferta base).

Trieu {{ui:Abast CSV}} per baixar el que cal enviar a un subcontractista: cada element amb el seu número CSI, quantitat, unitat i els fulls on es troba. No té preus. Per als proveïdors de material, la sol·licitud de cotització del llibre de càlcul té la llista de peces (vegeu [Exporta el pressupost](topic:export-estimate)).

## Introduir les ofertes

1. A la fila buida sota el paquet, escriviu el nom del licitador i l'import de l'oferta, i després trieu {{ui:Afegeix l'oferta}}.
2. Si una oferta deixa part de l'abast fora, obriu la seva llista {{ui:Deixat fora}} i marqueu aquests elements.
3. Per corregir un nom o un import, escriviu a sobre a la taula; el botó × elimina una oferta.

Cada canvi és un pas que {{key:Mod+Z}} desfà, i les ofertes es desen amb l'amidament.

## Com es nivellen les ofertes

Les ofertes rarament cobreixen el mateix abast. La nivellació omple cada element deixat fora amb un **complement** al nostre propi cost, de manera que cada oferta es compara sobre el paquet sencer:

**Nivellada = l'oferta + els complements**

L'oferta nivellada més baixa es marca amb **Més baixa**; en cas d'empat, la que s'ha introduït primer. **Respecte al nostre cost** és l'oferta nivellada menys el nostre propi cost del paquet: un valor negatiu vol dir que queda per sota. Una oferta que sembla la més baixa pot perdre quan s'hi compta l'abast que li falta.

El llibre de càlcul rep un full **Nivellació d'ofertes** amb cada paquet que té ofertes: el nostre pressupost, cada oferta, els seus complements, el total nivellat i la diferència, com a fórmules actives, i què ha deixat fora cada oferta.

## Fer servir una oferta com a preu del paquet

Trieu {{ui:Utilitza}} en una oferta i passa a ser el preu de tot el paquet al vostre pressupost: el preu propi del paquet (els elements, les seves condicions addicionals i les parts dels preus descomposts) surt del total de l'obra, els elements es mantenen com a quantitats amb les vostres tarifes de referència, i una línia, **Oferta triada**, porta l'import de l'oferta. Els elements que l'oferta deixa fora es queden al vostre propi cost, que és el que la nivellació ja comptava com a complement. Trieu una altra oferta, o torneu a triar la mateixa per desfer-ho; cada una és un pas que {{key:Mod+Z}} desfà.

Al resum de l'oferta, les ofertes de subcontractistes són una línia dins del cost: les despeses generals, el benefici i l'aval s'hi afegeixen com qualsevol altre cost; l'impost de vendes (només sobre material) i la càrrega social de la mà d'obra (sobre la mà d'obra) no. El full Pressupost del llibre de càlcul porta l'oferta triada com a fila pròpia, i el bloc de recàrrecs la suma, amb fórmules actives. La llista de material deixa fora el material d'un paquet adjudicat, perquè el subcontractista el subministra.

Un paquet dins de l'àrea de pressupost d'una variant no es repreu: les variants i els subtotals de l'àrea de pressupost continuen fent servir els vostres propis preus.

## Ofertes que tornen per correu electrònic

No cal escriure les ofertes a mà. {{ui:Envia per a ofertes…}} sota un paquet envia a cada subcontractista un enllaç a una pàgina on escriuen un preu per a cada línia; {{ui:Obté els preus}} hi porta el que han enviat. Vegeu [Envia un paquet per a ofertes](topic:bid-invitations).

:::note
Escriure una oferta a mà encara funciona, i una oferta escrita a mà i una del lloc web conviuen una al costat de l'altra. Les ofertes que han tornat del lloc web estan marcades amb **web** (o **web, tardana** si han arribat després de la data límit); el seu preu només canvia quan el licitador envia una versió nova, de manera que les vostres edicions es mantenen fins aleshores.
:::
