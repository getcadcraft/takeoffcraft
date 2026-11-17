---
title: Quantitats i pressupost
summary: Taula de quantitats per partida i per full, el total de l'obra, el ressaltat i l'avís d'Incomplet.
keywords: quantitats, totals, per partida, per full, total de l'obra, pressupost, resum, informe, ressaltat, incomplet, costos
from: 069d41f1
---

La taula {{ui:Quantitats}} de la part inferior de la finestra és el vostre pressupost en directe. Canvia en el moment que dibuixeu, suprimiu, reescaleu o editeu un preu unitari. Les quantitats mai no s'emmagatzemen: es tornen a mesurar a partir de les marques cada vegada, de manera que no poden quedar desfasades.

## Per element

Trieu {{ui:Per element}} (l'opció per defecte). Cada partida té una fila, i cada component del seu preu descompost, una fila a sota.

| Columna | Significat |
|---|---|
| Partida | Nom, amb el color de la partida. "+(n) sense escala" vol dir que algunes marques són en fulls sense escala. |
| Quantitat | El total mesurat en la unitat de la partida (components: el resultat de la fórmula). |
| Unitat | LF, m, SF, SY, m², EA, o la unitat del component. |
| Pèrdua % | Es deixa escriure aquí o a l'editor de partides. |
| Amb pèrdua | Quantitat × (1 + pèrdua). |
| Material/unitat, Mà d'obra/unitat | Preus unitaris; es poden escriure aquí. |
| Material, Mà d'obra | Amb pèrdua × preu unitari, arrodonit al cèntim. |
| Total | Material + mà d'obra. |

L'última fila, **Total de l'obra**, suma les columnes de material, mà d'obra i total. El mateix total es mostra a la dreta de la capçalera de la taula.

Escriviu en una cel·la de pèrdua o de preu i premeu {{key:Enter}} o feu clic fora per aplicar-ho. Un valor que TakeoffCraft no pot llegir es marca amb un contorn vermell, i la barra d'estat n'explica el motiu, per exemple "Escriviu una quantitat com ara 12.50."

Feu clic a la fila d'una partida per ressaltar les seves marques a tots els fulls i anar a un full que en tingui (igual que si hi feu clic sota {{ui:Elements}}).

## Per full

Trieu {{ui:Per full}} per veure la quantitat de cada partida a cada full, amb el nombre de marques. Feu clic en una fila per obrir aquest full amb la partida ressaltada. Serveix per comprovar que tots els fulls s'han amidat, o per repartir les quantitats per planta o per àrea de treball.

## Per àrea

Quan l'amidament té àrees de licitació, {{ui:Per àrea}} llista les partides de cada àrea i un subtotal. Consulteu [Àrees de licitació](topic:bid-areas).

## L'avís d'Incomplet

Quan alguna cosa queda fora dels totals, la capçalera mostra un avís, per exemple:

"Incomplet: 1 error de fórmula, 6 marques en fulls sense escala (no són als totals)"

- **Errors de fórmula**: no es pot calcular la fórmula d'un component del preu descompost. La seva fila diu "Error de fórmula: …". Consulteu [Preus descomposts i fórmules](topic:assemblies#when-a-formula-is-wrong).
- **Marques en fulls sense escala**: doneu una escala a aquests fulls. Consulteu [Estableix l'escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Les mateixes notes passen al full de càlcul exportat, perquè un pressupost incomplet mai no sembli complet.

## Ressaltar una partida

Feu clic en una partida de {{ui:Elements}} o a la taula. Les seves marques es queden a plena intensitat a tots els fulls, i la resta s'esvaeix. La llista de fulls mostra "(n) ressaltades" a cada full amb marques. Torneu a fer clic a la partida per deixar de ressaltar-la.

## Totals de partida a la barra lateral

Cada partida de la llista {{ui:Elements}} també mostra la seva quantitat. El bloc **Mesurat** de l'editor de partides mostra els valors que usen les fórmules: longitud, recorreguts i superfície de paret; àrea, perímetre i nombre d'àrees; o recompte.

## Marques en PDF que no són oberts

Un amidament pot incloure marques de PDF que no heu obert en aquesta ocasió. Continuen comptant en tots els totals; la llista de fulls n'indica els noms. Consulteu [Desa i torna a obrir un amidament](topic:save-and-reopen).

## Més espai

La fletxa a la dreta de la capçalera de {{ui:Quantitats}} amaga la taula perquè el full tingui més espai. Torneu a fer-hi clic per mostrar la taula de nou.
