---
title: Composizioni e formule
summary: Aggiungi componenti a una voce e lascia che le formule trasformino la sua lunghezza, area o conteggio in montanti, correnti, lastre di pannello, calcestruzzo e ferramenta, con un esempio svolto di parete.
keywords: composizione, componenti, formula, montanti, cartongesso, lastre, correnti, calcestruzzo, yard cubi, ferramenta, ricetta, tipico, parti della voce
from: 12891a21
---

La **composizione** di una voce è un elenco di componenti, ciascuno con una formula di quantità e i propri sfridi e prezzi. La formula usa i totali misurati della voce: una sola misurazione di una parete fornisce montanti, correnti e pannelli insieme, e si aggiornano man mano che misuri.

## Variabili utilizzabili

| Tipo di voce | Variabili |
|---|---|
| Lineare | `L` lunghezza, `H` altezza, `A` area della parete (L × H), `N` numero di tratti |
| Area | `A` area, `P` perimetro (contorno + vuoti), `H` profondità o spessore, `N` numero di aree |
| Conteggio | `N` conteggio |

I valori sono nelle unità proprie della voce: piedi e piedi quadrati per le voci LF e SF, metri e metri quadrati per le voci m e m². Per una voce SY, `A` è in yard quadrati mentre `P` e `H` restano in piedi.

Le formule usano `+ - * /` (o × ÷), parentesi, numeri e le funzioni `ceil`, `floor`, `round`, `min`, `max` e `abs`. Le regole complete sono in [Linguaggio delle formule](topic:formulas).

## Esempio svolto: una parete interna

Si supponga di aver computato **Parete interna tipo A** come voce lineare: 4 tratti per 120 LF in totale, con {{ui:Altezza}} impostata a `9'-0"`. I valori misurati sono L = 120, N = 4, A = 1,080 (SF di parete, una faccia).

1. Selezionare la voce sotto {{ui:Voci}}.
2. In {{ui:Composizione}}, scegliere {{ui:Aggiungi componente}}.
   Compare un componente chiamato "Componente", con la formula `L` e il suo risultato sotto.
3. Scrivere `Montanti i.a. 16 in` in {{ui:Nome}} e `EA` in {{ui:Unità}}.
4. In {{ui:Formula della quantità}}, scrivere `ceil(L * 12 / 16) + N`.
   Il risultato si aggiorna mentre si scrive: "= 94 EA". Corrisponde a un montante ogni 16 pollici lungo 120 piedi (90), più uno in più per chiudere ciascuno dei 4 tratti.
5. Scegliere di nuovo {{ui:Aggiungi componente}} per i correnti: nome `Correnti superiore e inferiore`, unità `LF`, formula `L * 2`. Risultato: 240 LF.
6. Aggiungere il pannello: nome `Pannello in cartongesso 4x8, due facce`, unità `lastre`, formula `ceil(A * 2 / 32)`. Risultato: 68 lastre (2,160 SF di pannello ÷ 32 SF per lastra = 67.5, arrotondato per eccesso).
7. Compilare {{ui:Sfrido %}}, {{ui:Materiali $}} e {{ui:Manodopera $}} di ciascun componente.
   Ogni componente ha la propria riga sotto la voce in {{ui:Quantità}}, valorizzata come una voce, e il {{ui:Totale del lavoro}} la include.

Se il costo della parete è tutto nei componenti, lasciare a 0 i prezzi di materiale e manodopera della voce, altrimenti viene contato due volte.

:::tip
Lo sfrido si applica dopo la formula e non viene arrotondato: 68 lastre con il 10% di sfrido sono 74.8 lastre. Per ordinare lastre intere, inserire lo sfrido nella formula, per esempio `ceil(A * 2 / 32 * 1.1)`, e lasciare a 0 lo sfrido del componente.
:::

## Altre formule

| Cosa | Voce | Formula |
|---|---|---|
| Montanti a 24 in di interasse | Lineare | `ceil(L / 2) + N` |
| Materassini isolanti, SF | Lineare con altezza | `A` |
| Pittura, due facce, galloni ogni 350 SF | Lineare con altezza | `ceil(A * 2 / 350)` |
| Confezioni di piastrelle da 15 SF, 10% in più | Area | `ceil(A * 1.1 / 15)` |
| Battiscopa o profilo di bordo, LF | Area | `P` |
| Calcestruzzo, yard cubi | Area con profondità | `A * H / 27` |
| Calcestruzzo arrotondato al quarto di yard | Area con profondità | `ceil(A * H / 27 * 4) / 4` |
| Cerniere, tre per porta | Conteggio | `N * 3` |
| Almeno una scatola, una ogni 12 | Conteggio | `max(1, ceil(N / 12))` |

## Quando una formula è sbagliata

La riga sotto la formula diventa un messaggio di errore, per esempio `"X" non è un valore misurato qui. Usare L, H, A, N.` oppure `Manca ")".` Il componente quindi non ha importi, la sua riga in {{ui:Quantità}} mostra "Errore di formula: …", e l'intestazione dice "Incompleta: 1 errore di formula (non nei totali)". Correggere la formula e i totali si aggiornano.

Una formula che divide per zero è un errore anch'essa ("La formula divide per zero."), per esempio `A / H` su una voce senza profondità.

## Limiti

- Le formule lavorano sui **totali** della voce, non tratto per tratto. `ceil(L * 12 / 16) + N` aggiunge un montante per tratto; non c'è ancora arrotondamento per tratto.
- Una formula può usare solo le variabili della propria voce, non quelle di un'altra voce.
- Fino a 50 componenti per voce, 500 caratteri per formula.

## Rimuovere un componente

Scegliere {{ui:Rimuovi componente}} sotto di esso. È possibile annullare con {{key:Mod+Z}}.
