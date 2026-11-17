---
title: Inserimento di lunghezze, prezzi unitari e percentuali
summary: Cosa si può digitare per distanze, altezze, prezzi unitari in denaro e percentuali di sfrido, con esempi e i messaggi per gli input che TakeoffCraft non riesce a leggere.
keywords: input, formato, piedi pollici, frazioni, piedi decimali, metrico, metri, millimetri, prezzo unitario, denaro, dollari, percentuale, sfrido, digitazione
from: 215bbf4d
---

## Lunghezze

Usate da **Distanza reale** in {{ui:Calibra}}, e da {{ui:Altezza}} e {{ui:Profondità}} nell'editor della voce.

| Si digita | Significa |
|---|---|
| `24'-0"` | 24 piedi |
| `24'-6 1/2"` | 24 piedi e 6½ pollici |
| `12' 6 1/2"` | 12 piedi e 6½ pollici (uno spazio al posto del trattino) |
| `12'-6-1/2"` | 12 piedi e 6½ pollici (trattini tra le parti) |
| `24'` | 24 piedi |
| `30"` | 30 pollici |
| `6 1/2"` | 6½ pollici |
| `3/4"` | ¾ di pollice |
| `24 ft 6 in` | 24 piedi e 6 pollici (anche `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 nell'unità predefinita (vedere sotto) |
| `24.5'` | 24.5 piedi |
| `7.5 m` | 7.5 metri |
| `750 cm` | 750 centimetri |
| `7500 mm` | 7,500 millimetri |

- Un numero semplice è in **piedi** per la calibrazione e per le voci in LF, SF o SY, e in **metri** per le voci in m o m².
- Le virgolette tipografiche e i simboli di primo e secondo dei programmi di scrittura (′ ″ ’ ”) funzionano come `'` e `"`. Due apostrofi `''` valgono come `"`.
- Le virgole sono ignorate: `1,200 mm` è 1200 mm.
- Le frazioni richiedono numeri interi su entrambi i lati: `6 1/2"` funziona, `6.5 1/2"` no.
- Distanze zero e negative sono rifiutate.

Messaggi:

- "Digitare una distanza, ad esempio 24'-0" o 7.5 m." (il campo è vuoto)
- "Digitare una distanza maggiore di zero."
- "Usare piedi e pollici (24'-6 1/2"), piedi decimali, m, cm o mm." (unità sconosciuta)
- "Non è stato possibile leggere la distanza. Provare 24'-6 1/2" o 24.5."

Per cancellare l'altezza o la profondità di una voce, svuotare il campo.

### Aritmetica

Ogni campo di lunghezza, e la casella di digitazione durante il disegno, accetta anche un calcolo con `+`, `-`, `*`, `/` e parentesi:
`4+7/16` (4.4375 nell'unità predefinita), `12'6" + 3/4"`, `(24'-0")/3` (8 piedi), `2*450mm`.

- Un trattino scritto in una lunghezza ne fa ancora parte: `24'-6"` sono 24 piedi e 6 pollici, e `6-1/2` è 6½. Per sottrarre, mettere spazi attorno al trattino: `24' - 6"` è 23'-6".
- Un numero semplice moltiplica o divide una lunghezza come numero; sommato a una lunghezza è nell'unità predefinita.
- Anche `abs`, `round`, `ceil` e `floor` funzionano. Un calcolo che non può essere letto viene rifiutato, con l'indicazione del punto in cui è sbagliato.

## Come vengono mostrate le lunghezze

Le lunghezze si mostrano in piedi, pollici e sedicesimi: `12'-6 1/2"`, `0'-0 3/4"`. I valori sono arrotondati al 1/16 di pollice più vicino per la visualizzazione; le quantità in sé non sono arrotondate. I valori decimali si mostrano con due decimali e separatori delle migliaia, come `1,234.50 LF`.

## Prezzi unitari (materiali e manodopera per unità)

| Si digita | Significa |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (fino a quattro decimali; quelli in più sono arrotondati) |
| (vuoto) | $0 |

Messaggi: "Digitare un importo, ad esempio 12.50." oppure "Quell'importo è troppo grande." I prezzi unitari negativi non sono accettati.

Gli importi (materiali, manodopera, totali) sono calcolati al centesimo: quantità con sfrido × prezzo unitario, arrotondati con la metà che si allontana da zero, esattamente come `ROUND(x, 2)` di un foglio di calcolo.

## Percentuale di sfrido

| Si digita | Significa |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (vuoto) | 0% |

Fino a due decimali, da 0% a 1000%. Messaggi: "Digitare una percentuale, ad esempio 10 o 7.5." oppure "Lo sfrido oltre 1000% non è ammesso."

## Nomi e unità

- Nomi di voci e componenti: fino a 200 caratteri.
- {{ui:Unità}} di una componente: qualsiasi testo fino a 20 caratteri, ad esempio `EA`, `sheets`, `CY`, `gal`. È solo un'etichetta; TakeoffCraft non la converte.

## Formule

Le formule delle composizioni hanno regole proprie: vedere [Linguaggio delle formule](topic:formulas).
