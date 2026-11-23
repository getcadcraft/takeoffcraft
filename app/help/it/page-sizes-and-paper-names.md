---
title: Formati delle pagine e nomi della carta
summary: Vedere le dimensioni di ogni tavola in millimetri e pollici e il suo nome di formato (serie A, B e C, ANSI, ARCH), e raggruppare un set misto per dimensione per trovare le tavole anomale.
keywords: formato pagina, formato carta, nome carta, a0, a1, a2, a3, a4, serie b, serie c, ansi, arch, architettonico, mm, pollici, dimensione personalizzata, per formato, dimensione anomala, set misto, scala, set di planimetrie, mediabox, rotazione
from: 9c061c07
---

Una scala ha significato solo sulla carta giusta. {{ui:TakeoffCraft}} legge la dimensione di ogni tavola PDF e ne indica il nome del formato, così si può vedere una tavola stampata a un'altra dimensione prima di fidarsi di una misura su di essa.

## Cosa si fa

Si controlla la dimensione della tavola aperta, poi si raggruppa l'intero set per dimensione.

## Passaggi

1. Aprire i disegni ({{ui:Apri PDF}}).
2. La barra della tavola sopra il disegno mostra il nome del formato della tavola aperta e la sua dimensione, ad esempio "A1 · 594 × 841 mm".
3. Ogni riga dell'elenco {{ui:Tavole}} ha una riga con la dimensione sotto il nome della tavola.
4. Scegliere {{ui:Per formato}} nell'intestazione di {{ui:Tavole}}. L'elenco raccoglie le tavole sotto un'intestazione per ogni dimensione, con il gruppo più grande per primo, e segna come anomala una dimensione con poche tavole.
5. Scegliere di nuovo {{ui:Per formato}} per tornare all'ordine proprio del set.

Una tavola DWG o DXF non ha un formato carta, quindi per essa non viene mostrata alcuna dimensione.

## Come viene scelto il nome

- La dimensione deriva dal riquadro della pagina nel PDF, con la rotazione applicata.
- I nomi sono la serie A e B (ISO 216), la serie C (ISO 269), ANSI da A a E e ARCH da A a E.
- Una pagina entro 2 mm da una dimensione con nome prende quel nome. Ogni altra pagina è indicata come personalizzata, con la dimensione con nome più vicina e lo scarto.

## Nel preventivo

La cartella di lavoro del preventivo ha un foglio {{ui:Formati delle pagine}} con il conteggio di ogni dimensione.

:::note
I valori in pollici di ANSI e ARCH sono stati digitati dalle tabelle pubblicate e non sono stati confrontati con gli standard stampati.
:::
