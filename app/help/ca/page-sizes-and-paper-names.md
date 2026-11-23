---
title: Mides de pàgina i noms de paper
summary: Veieu la mida de cada full en mil·límetres i polzades i el seu nom de paper (sèries A, B i C, ANSI, ARCH), i agrupeu un joc barrejat per mida per trobar els fulls estranys.
keywords: mida de pàgina, mida de paper, nom de paper, a0, a1, a2, a3, a4, sèrie b, sèrie c, ansi, arch, arquitectònic, mm, polzades, mida personalitzada, per mida, mida estranya, joc barrejat, escala, joc de plànols, mediabox, rotació
from: 9c061c07
---

Una escala només té sentit en el paper correcte. {{ui:TakeoffCraft}} llegeix la mida de cada full PDF i en dona el nom de paper, de manera que podeu veure un full que s'ha imprès a una mida diferent abans de confiar en una mesura feta sobre ell.

## Què fareu

Mireu la mida del full obert, i després agrupeu tot el joc per mida.

## Passos

1. Obriu els plànols ({{ui:Obre plànols}}).
2. La barra del full sobre el dibuix mostra el nom de paper del full obert i la seva mida, per exemple "A1 · 594 × 841 mm".
3. Cada fila de la llista {{ui:Fulls}} té una línia de mida sota el nom del full.
4. Trieu {{ui:Per mida}} a la capçalera de {{ui:Fulls}}. La llista agrupa els fulls sota un encapçalament per cada mida, el grup més gran primer, i marca com a estrany una mida amb només uns quants fulls.
5. Torneu a triar {{ui:Per mida}} per tornar a l'ordre propi del joc.

Un full DWG o DXF no té paper, de manera que no se'n mostra cap mida.

## Com es tria el nom

- La mida ve de la caixa de la pàgina al PDF, amb la seva rotació aplicada.
- Els noms són les sèries A i B (ISO 216), la sèrie C (ISO 269), ANSI A a E i ARCH A a E.
- Una pàgina a menys de 2 mm d'una mida amb nom en pren el nom. Qualsevol altra pàgina diu personalitzada, amb la mida amb nom més propera i quant s'hi diferencia.

## Al pressupost

El llibre de pressupost té un full de càlcul {{ui:Mides de pàgina}} amb el recompte de cada mida.

:::note
Els valors en polzades ANSI i ARCH es van escriure a partir de les taules publicades i no s'han comparat amb els estàndards impresos.
:::
