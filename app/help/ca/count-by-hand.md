---
title: Recompte manual
summary: Cliqueu cada porta, accessori o dispositiu per comptar-lo, comproveu els recomptes i corregiu els errors.
keywords: recompte, cada, ea, accessoris, portes, dispositius, símbols, recompte per clic, recompte manual
from: 594f2980
---

Un element de recompte compta coses: portes, lluminàries, endolls, aparells sanitaris. Cada clic al full afegeix una marca de recompte. Comptar no necessita escala.

## Compta

1. Creeu o cliqueu un element de recompte sota {{ui:Elements}} (tipus {{ui:Recompte}}).
2. Trieu {{ui:Recompte}} a la barra d'eines, o premeu {{key:C}}.
3. Cliqueu cadascun sobre el full.
   Cada clic posa un punt del color de l'element, i el recompte de l'element puja en un.
4. Passeu al següent full ({{key:PageDown}}) i seguiu comptant. L'eina es queda a {{ui:Recompte}}.
5. Premeu {{key:Esc}} quan acabeu. TakeoffCraft torna a {{ui:Selecciona}}.

Arrossegar encara desplaça i la roda encara fa zoom mentre compteu, de manera que podeu moure's pel full sense afegir punts.

:::tip
Cliqueu l'element de recompte per ressaltar-ne els punts a tots els fulls. La llista de fulls mostra després quants n'hi ha a cada full, cosa que us ajuda a trobar els fulls que encara no heu comptat.
:::

## Corregeix un recompte

- **Treure un punt**: trieu {{ui:Selecciona}} ({{key:V}}), cliqueu el punt, i premeu {{key:Delete}} o trieu {{ui:Suprimeix la marca}}. O premeu {{key:Mod+Z}} just després d'un clic equivocat.
- **Moure un punt**: seleccioneu-lo i després arrossegueu-lo.
- **Comptat sota l'element equivocat**: seleccioneu el punt i trieu l'element de recompte correcte a la llista **Element** sota **Marca seleccionada**.

## Mida dels punts, a la pantalla i al PDF

Els punts mantenen una mida a la pantalla, per molt que feu zoom. Per canviar-la, obriu {{ui:Configuració}}, la pestanya TakeoffCraft, i trieu **Mida del marcador de recompte**: Molt petita, Petita, Mitjana (la predeterminada) o Gran.

L'exportació a PDF ({{ui:Exporta}} › {{ui:PDF marcat}}) dibuixa cada punt a la mateixa mida sobre el paper, sigui quina sigui la mida del full: un visor que mostri el PDF al 100% mostra els punts tan grans com ho són a la pantalla. Quan els punts d'un full es tocarien encara, l'exportació fa més petits els punts d'aquell full perquè es puguin llegir cadascun.

## Molts símbols idèntics

Per a un símbol que es repeteix moltes vegades en un full, proveu [Recompte automàtic](topic:auto-count): envoleu-ne un, reviseu el que troba, i afegiu-los tots en un sol pas.

## Usar recomptes en fórmules

La quantitat d'un element de recompte és **N**. Els components d'un conjunt la poden usar, per exemple, frontisses `N * 3` per a les portes. Vegeu [Preus descomposts i fórmules](topic:assemblies).
