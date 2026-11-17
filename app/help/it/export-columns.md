---
title: Colonne di esportazione
summary: Ogni foglio e colonna dell'esportazione XLSX e del CSV, con le formule che il foglio Preventivo contiene.
keywords: esporta, colonne, xlsx, csv, foglio, foglio del preventivo, per tavola, segni, scale, formule, campi
from: fed07851
---

## Preventivo (foglio XLSX e CSV)

Una riga per voce, seguita da una riga per ogni componente della sua composizione (rientrata). Poi una riga vuota e il totale del lavoro.

| Colonna | Contenuto | Nell'XLSX |
|---|---|---|
| A Voce | Nome della voce (in grassetto) o nome della componente (rientrato) | Testo |
| B Tipo | Lineare, Superficie, Conteggio o Componente | Testo |
| C Unità | LF, m, SF, SY, m², EA, o l'unità della componente | Testo |
| D Quantità | Totale misurato, o risultato della formula | Numero |
| E Sfrido % | Sfrido | Percentuale (0.10 = 10%) |
| F Quantità con sfrido | Quantità × (1 + sfrido) | Formula `D*(1+E)` |
| G Materiale per unità | Prezzo unitario dei materiali | Numero |
| H Manodopera per unità | Prezzo unitario della manodopera | Numero |
| I Materiale | Materiale calcolato | Formula `ROUND(F*G,2)` |
| J Manodopera | Manodopera calcolata | Formula `ROUND(F*H,2)` |
| K Totale | Materiale + manodopera | Formula `I+J` |
| L Note | Formula usata, errore di formula, segni su tavole senza scala, superficie di parete, perimetro | Testo |

Riga del totale del lavoro: `SUM` delle colonne I, J e K su tutte le righe sopra, e "Incompleto: vedere le note sopra" in Note quando qualcosa è stato escluso.

Una riga con errore di formula non ha quantità né importi; la sua nota indica l'errore. La riga di intestazione è bloccata.

Nel CSV, le stesse colonne contengono valori semplici, Sfrido % è un numero di percento (10 per 10%), e il denaro è in dollari con due decimali. Il testo che un foglio di calcolo potrebbe prendere per una formula (che inizia con `=`, `+`, `-` o `@`) riceve un `'` iniziale, così resta testo.

## Per tavola (solo XLSX)

| Colonna | Contenuto |
|---|---|
| Tavola | Nome della tavola (con il nome del PDF quando non è aperto) |
| Voce | Nome della voce |
| Quantità | Quantità di quella voce su quella tavola, nella sua unità |
| Unità | Unità della voce |
| Segni | Numero di segni |

## Segni (solo XLSX)

Una riga per segno.

| Colonna | Contenuto |
|---|---|
| Tavola | Nome della tavola |
| Voce | Nome della voce |
| Tipo | Lineare, Superficie o Conteggio |
| Quantità | Lunghezza, superficie netta, oppure 1 |
| Unità | LF o m; SF, SY o m²; EA |
| Dettaglio | Lineare: la lunghezza dei segmenti, quelli detratti contrassegnati "(detrazione)", e "detrae (lunghezza) di (lunghezza) disegnata". Superficie: superfici lorde e dei vuoti quando ci sono vuoti, e il perimetro. "La tavola non ha scala" per i segni senza scala. |
| Area di offerta | Solo quando il computo ha aree di offerta: l'area del segno, o "Nessuna area di offerta" |

## Per area di offerta (solo XLSX, quando il computo ha aree di offerta)

| Colonna | Contenuto |
|---|---|
| Area di offerta | Nome dell'area, o "Nessuna area di offerta" |
| Voce | La voce, o una componente rientrata sotto di essa |
| Unità | Unità della voce o della componente |
| Quantità | Misurata in quell'area (componenti: la formula sui totali dell'area) |
| Quantità con sfrido | Quantità × (1 + sfrido) |
| Materiale, Manodopera, Totale | Calcolati al centesimo, come nel Preventivo |
| Note | Formula, errori e segni senza scala, come nel Preventivo |

Ogni area termina con una riga "(nome) subtotale" i cui costi sono formule `SUM` sulle sue righe; l'ultima riga, **Tutte le aree di offerta**, somma i subtotali. Il foglio **Segni** ha poi una settima colonna, **Area di offerta**.

## Scale (solo XLSX)

Una riga per ogni tavola che ha una scala o dei segni.

| Colonna | Contenuto |
|---|---|
| Tavola | Nome della tavola |
| Scala | Il nome della preimpostazione, oppure la scala calibrata, oppure "Nessuna scala" |
| Come | "Preimpostata", oppure "Calibrata su (la distanza digitata)" |
| Piedi per unità PDF | Il fattore di scala esatto usato da TakeoffCraft |

## Nomi dei file

- `(nome).xlsx` e `(nome).csv`, dove il nome deriva dal primo PDF aperto nel computo.
- Il CSV è in UTF-8 con un contrassegno di ordine dei byte e fine riga di Windows, che i programmi di fogli di calcolo di ogni piattaforma leggono.
