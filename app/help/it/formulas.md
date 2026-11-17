---
title: Linguaggio delle formule
summary: Le regole per le formule di quantità delle composizioni - variabili, operatori, funzioni, arrotondamenti e ogni messaggio di errore.
keywords: formula, espressione, sintassi, funzioni, ceil, floor, round, min, max, abs, variabili, operatori, calcolo
from: 4da14575
---

Le componenti di una composizione ricavano la quantità da una formula. Una formula è una piccola espressione aritmetica sui valori misurati della voce. Vedere [Composizioni e formule](topic:assemblies) per esempi svolti.

## Variabili

| Tipo di voce | Variabile | Significato |
|---|---|---|
| Lineare | `L` | Lunghezza totale |
| Lineare | `H` | Altezza della voce |
| Lineare | `A` | Superficie di parete, L × H, al netto delle aperture dei tratti che le contengono (un computo da BimCraft). Quando quel computo indica un metodo di misura, `A` è misurata con esso: le aperture non più grandi della dimensione minima del metodo restano incluse, e ciò che il metodo detrae dove le pareti si incontrano viene escluso. La nota sotto la voce indica il metodo |
| Lineare | `N` | Numero di tratti |
| Superficie | `A` | Superficie netta totale (contorni meno vuoti) |
| Superficie | `P` | Perimetro totale, bordi dei vuoti compresi |
| Superficie | `H` | Profondità o spessore della voce |
| Superficie | `N` | Numero di superfici |
| Conteggio | `N` | Il conteggio |

- Le variabili sono nelle unità della voce: vedere [Unità](topic:units).
- Maiuscole e minuscole sono uguali: `l` è `L`.
- Funzionano solo le variabili del tipo della voce. `P` su una voce lineare dà `"P" non è un valore misurato qui. Usare L, H, A, N.`
- Un'altezza o una profondità vuota vale 0.

## Operatori

| Si scrive | Significato |
|---|---|
| `+` | Somma |
| `-` o `−` | Sottrazione, oppure un valore negativo |
| `*` o `×` | Moltiplicazione |
| `/` o `÷` | Divisione |
| `( )` | Raggruppa |

Moltiplicazione e divisione hanno precedenza su somma e sottrazione: `L * 2 + 4` è (L × 2) + 4. In caso di dubbio, usare le parentesi.

I numeri possono avere decimali (`1.333`, `.5`) ed esponenti (`1e3` = 1000). Gli spazi sono ignorati.

## Funzioni

| Funzione | Risultato | Esempio |
|---|---|---|
| `ceil(x)` | Arrotonda per eccesso a un intero | `ceil(67.5)` = 68 |
| `floor(x)` | Arrotonda per difetto a un intero | `floor(67.5)` = 67 |
| `round(x)` | Arrotonda all'intero più vicino, la metà si arrotonda in modulo | `round(2.5)` = 3 |
| `round(x, d)` | Arrotonda a d decimali (da 0 a 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Il valore minimo | `min(N, 10)` |
| `max(a, b, …)` | Il valore massimo | `max(1, ceil(N / 12))` |
| `abs(x)` | Il valore senza segno | `abs(-3)` = 3 |

`ceil` e `floor` ignorano i minimi errori di arrotondamento del computer, così un valore che dovrebbe essere esattamente 1 non viene mai arrotondato a 2.

## Errori

Una formula che non può essere letta o calcolata mostra il suo errore sotto il campo, e la componente viene esclusa dai totali (l'intestazione {{ui:Quantità}} riporta "Incompleto"). Messaggi:

| Messaggio | Correzione |
|---|---|
| Digitare una formula, ad esempio L o ceil(L / 1.333) + 1. | La formula è vuota. |
| "X" non è un valore misurato qui. Usare … | Usare una delle variabili elencate. |
| "X" non è una funzione qui. Usare ceil, floor, round, min, max, abs. | Usare una di quelle funzioni. |
| "#" non è ammesso in una formula. | Rimuovere quel carattere (unità, `%`, `$` e `=` non sono ammessi). |
| Manca una ")". / C'è una ")" senza la sua "(". | Bilanciare le parentesi. |
| Manca un valore prima di ")". | Qualcosa come `max(1, )`: inserire il valore. |
| La formula finisce troppo presto. | Qualcosa come `L *`: completarla. |
| Inatteso "…". Manca un operatore? | Due valori affiancati, come `2L`: scrivere `2 * L`. |
| ceil() richiede 1 valore. | Dare alla funzione il numero corretto di valori. |
| round(x, digits) richiede cifre intere da 0 a 10. | Usare un numero intero di decimali. |
| La formula divide per zero. | Di solito H è 0: impostare l'altezza o la profondità della voce. |
| La formula non dà un numero. | Il risultato è troppo grande per essere un numero. |
| Quella formula è troppo lunga (al massimo 500 caratteri). | Accorciarla. |

## Sicura per progettazione

Una formula può eseguire solo calcoli aritmetici con le variabili e le funzioni sopra. Non può eseguire codice né leggere altro, quindi una formula in un file di progetto inviato da qualcuno è innocua.
