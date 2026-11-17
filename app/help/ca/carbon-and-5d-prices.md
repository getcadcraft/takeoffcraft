---
title: Carboni incorporat i una taula de preus 5D
summary: Carboni suma el carboni incorporat de l'amidament a partir de la quantitat de cada element i d'una taula de factors oberta, i envia les tarifes de l'amidament a BimCraft com a taula de preus per als costos 5D.
keywords: carboni, carboni incorporat, kgco2e, co2, factors, a1-a3, transport, pèrdua, 5d, taula de preus, cost, bimcraft, DAP
from: f4bff3b8
---

{{ui:Carboni}} a la barra d'eines suma el carboni incorporat del que heu mesurat, i converteix les vostres tarifes en una taula de preus que el model de l'edifici pot fer servir. És una estimació, no una avaluació.

## Carboni incorporat

La quantitat de cada element, amb la seva pèrdua, es multiplica per una fila de la taula de factors. Una fila es fa coincidir per les paraules del nom de l'element («concrete slab» troba una fila amb la paraula clau «concrete»). La taula és la mateixa taula oberta que fa servir BimCraft, de manera que un fitxer que carregueu aquí també funciona allà. **Les files que vénen amb el programa són valors inicials: genèrics, sense verificar i no provenen de cap base de dades.** El diàleg ho indica al costat de les xifres; substituïu-les per la vostra pròpia font abans de fiar-vos d'un número.

1. Trieu {{ui:Carboni}}. Els elements comptats es mostren amb els seus quilograms de CO2e; el total és a dalt.
2. Marqueu {{ui:A4 transport}} o {{ui:A5 residus d'obra}} per comptar també aquestes etapes, per a les files que donen una xifra per a elles. L'etapa de producte sempre es compta.
3. Per fer servir una altra fila per a un element, o cap, feu servir la llista de la seva línia.
4. {{ui:Factors d'un fitxer…}} carrega una taula de factors (JSON o CSV) feta a partir de la vostra pròpia font; les seves files substitueixen les files inicials amb el mateix identificador. {{ui:Factors (JSON)}} desa els vostres.

Un factor és per metre, metre quadrat, metre cúbic, element o quilogram. Una línia mesurada en peus o peus quadrats es converteix. Un factor en quilograms necessita un volum (iardes cúbiques o metres) i la densitat de la fila. Un element el factor del qual necessita una quantitat que no mesura apareix a {{ui:Deixat fora}} amb el motiu, mai no s'endevina. El total acumulat a la barra d'estat mostra la mateixa xifra.

Les vostres files de factors, les vostres eleccions i les etapes que compteu es desen al fitxer de l'amidament.

## Una taula de preus per als costos 5D

{{ui:Preus 5D (JSON)}} i {{ui:Preus 5D (CSV)}} desen les tarifes de l'amidament com a taula de preus: una fila per cada element preuat amb la seva tarifa de material i de mà d'obra per unitat i la seva pèrdua. Carregueu-la al panell de costos de BimCraft (Carboni incorporat i cost 5D) per preuar les tasques del model de l'edifici amb les mateixes tarifes que van fer l'oferta. Els elements mesurats en una unitat que la taula no té, i els elements sense tarifa, no s'inclouen.

## Amb el vostre assistent

Si permeteu els assistents a {{ui:Configuració}}, poden llegir el carboni (carbon_check). Carregar els factors és cosa vostra.

## Bon a saber

No s'envia res enlloc. Les xifres són tan bones com els factors que carregueu.
