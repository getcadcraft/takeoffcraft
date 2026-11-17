---
title: "La disposició de l'oficina: agrupació, subtotals, títol i encapçalaments segons les vostres Polítiques per defecte"
summary: Activeu el complement Polítiques per defecte i el pressupost, les quantitats per full, les exportacions i el que llegeix un assistent adopten la disposició de quadre de la vostra oficina, la mateixa que adopten els quadres de BimCraft.
keywords: estàndard d'oficina, disposició de l'oficina, polítiques per defecte, complement, disposició del quadre, agrupa per tipus, agrupa per full, subtotal, totals, títol, encapçalaments, majúscules, disposició del pressupost, disposició de l'exportació, configuració
from: cfd2f30a
---

## Què fareu

Feu que TakeoffCraft disposi les seves taules com les emet la vostra oficina, sense configurar-ho a cada amidament. La disposició es defineix un cop, a Polítiques per defecte, i val per a totes les aplicacions d'aquest ordinador: el que definiu a BimCraft o a CadCraft és el que usa TakeoffCraft, i a la inversa.

## Passos

1. Obriu **Configuració › Complements** i activeu **Polítiques per defecte**. Està desactivat fins que ho feu; si està desactivat, o si no hi ha res definit, TakeoffCraft és exactament com era.
2. Obriu **Configuració › Global › Polítiques per defecte** i cerqueu **Disposició del quadre (l'estàndard de l'oficina)**:

| Política | Què fa a TakeoffCraft |
|---|---|
| Agrupa els quadres per | **Tipus** agrupa el pressupost per tipus d'element (Lineal, Àrea, Recompte, Quantitat tipificada). **Nivell** agrupa les quantitats per full, segons el seu full. **Sala** i **Sense agrupació** no agrupen cap de les dues |
| Totals als quadres | **Un subtotal sota cada grup i un total** afegeix un subtotal sota cada grup. El total de l'obra sempre hi és |
| Títol del quadre | Una línia sobre la taula, per exemple `{schedule}: office layout` |
| Encapçalaments de columna | Tal com s'escriuen, EN MAJÚSCULES o Amb Inicials Majúscules |

3. Tanqueu Configuració. Les taules s'actualitzen de seguida.

## Què rep la disposició

- **Quantitats › Per element** i **Per full**: capçaleres de grup, un subtotal sota cada grup, el títol i la capitalització dels encapçalaments. Una línia sota el títol indica quines parts ha definit l'estàndard de la vostra oficina. Les files són les mateixes: encara hi escriviu les tarifes i la pèrdua, i cliqueu les xifres per seleccionar-ne les marques. Un component o una segona condició es queda sota del seu element.
- **El pressupost exportat** (CSV i XLSX): els mateixos grups i subtotals. Al llibre, un subtotal és una fórmula `SUBTOTAL` sobre el seu grup, i el total de l'obra també ho és, de manera que res no es compta dues vegades.
- **Què llegeix un assistent**: `takeoff_estimate` i `takeoff_quantities` (per full) afegeixen un bloc `layout` amb els grups, les files i els subtotals, i indiquen quines parts ha definit l'oficina.

## Què conserva el seu criteri

- **Quantitats › Per àrea** indica la seva pròpia agrupació (per àrea d'oferta) i la conserva.
- El **total de l'obra**, els recàrrecs del resum d'ofertes i les variants no es tornen a agrupar.
- Una agrupació per la qual la taula no té columna queda fora: el pressupost no té nivell, i les quantitats per full no tenen tipus.

## Bon a saber

- Les polítiques es guarden en aquest navegador per a totes les aplicacions de CadCraft i viatgen al fitxer de Polítiques per defecte (**Desa en un fitxer** / **Carrega des d'un fitxer** al mateix lloc), de manera que una oficina comparteix un sol fitxer.
- Un pressupost exportat en CSV amb grups és per llegir-lo. Per tornar a portar un pressupost com a biblioteca de preus, exporteu-lo sense cap agrupació.
- La part de BimCraft del mateix estàndard: quadres, configuracions i exportacions. TakeoffCraft encara no té polítiques pròpies, de manera que no hi ha cap secció de Polítiques per defecte a Configuració › TakeoffCraft.
