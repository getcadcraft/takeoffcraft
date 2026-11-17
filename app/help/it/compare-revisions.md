---
title: Confrontare una tavola rivista e spostare il computo
summary: Sovrapporre la vecchia tavola alla revisione, allinearle, vedere cosa è cambiato e spostare il computo sulla nuova tavola, con i segni da controllare segnalati.
keywords: revisione, rivisto, confronta, sovrapposizione, vecchio, nuovo, modifiche, addendum, bollettino, riemissione, sposta computo, trasferisci, riporta, allinea, segnalato, controlla
from: 3a1d9fe0
---

Quando una tavola viene riemessa, non occorre computarla di nuovo. Aprire il vecchio PDF e quello nuovo, confrontare le due tavole e spostare il computo da una all'altra. TakeoffCraft segnala ogni segno in cui il disegno è cambiato, così si controllano quelli e si conservano gli altri.

## Confrontare

1. Aprire entrambi i PDF: il vecchio set e quello rivisto ({{ui:Apri PDF}}; possono essere in un unico file oppure in più file).
2. Mostrare la tavola **nuova**.
3. Scegliere {{ui:Confronta}} sulla barra della tavola, sotto il disegno.
4. Scegliere la vecchia tavola nell'elenco. TakeoffCraft propone la tavola con lo stesso numero nell'altro PDF, oppure la stessa pagina. Scegliere **Confronta**.

Il vecchio disegno ora si sovrappone a quello nuovo in rosso. Dove i due coincidono, le linee rosse stanno su quelle nere; dove differiscono, si vedono linee rosse da sole (rimosse) e linee nere da sole (aggiunte). Una barra in fondo alla tavola contiene i passaggi seguenti; {{key:Esc}} oppure {{ui:Chiudi}} termina il confronto.

## Allineare

Le tavole riemesse vengono spesso stampate un po' fuori posto: spostate nella pagina, oppure a una dimensione leggermente diversa. Se il disegno rosso non coincide con quello nero, scegliere **Allinea con due punti** e fare clic quattro volte:

1. un punto sul vecchio disegno (rosso), come il centro di un pilastro o un angolo di edificio,
2. lo stesso punto sul nuovo disegno (nero),
3. un secondo punto sul disegno rosso, lontano dal primo,
4. lo stesso punto sul disegno nero.

Il disegno rosso si sposta, ruota e si scala fino a coincidere con quello nero. La barra di stato indica di quanto è ingrandito il nuovo disegno ("dimensione × 1.000" quando è uguale). Ingrandire per scegliere i punti: più si fa clic vicino, migliore è l'allineamento.

## Trovare le modifiche

Scegliere **Trova modifiche**. TakeoffCraft confronta il contenuto grafico dei due disegni: il contenuto presente solo sulla vecchia tavola diventa rosso, quello presente solo sulla nuova diventa blu, e la barra di stato li conta. Le linee spostate di un nonnulla (una ristampa) non vengono contate come modifiche.

Controlla anche ogni segno sulla vecchia tavola e conta quelli che si trovano dove il disegno è cambiato:

- un tratto lineare o un'area quando il disegno è cambiato a una delle sue estremità o dei suoi angoli, oppure lungo almeno circa un sesto della sua lunghezza;
- un conteggio quando qualcosa è cambiato subito accanto.

## Spostare il computo

Scegliere **Sposta il computo qui**. Ogni segno sulla vecchia tavola viene spostato sulla nuova, tramite l'allineamento, in un unico passo di annullamento. Quelli vicini a una modifica sono segnalati: vengono disegnati con un alone arancione, e la barra della tavola mostra "(n) da controllare".

Se la nuova tavola non aveva una scala, prende quella della vecchia (regolata se i disegni hanno dovuto essere scalati per allinearsi). Se ne aveva già una diversa, TakeoffCraft chiede prima: i segni spostati vengono misurati alla scala della nuova tavola.

## Controllare i segni segnalati

1. Scegliere "(n) da controllare" sulla barra della tavola. Ingrandisce fino al segno segnalato successivo e lo seleziona; il suo pannello spiega perché è segnalato.
2. Correggere il segno se il disegno è cambiato sotto di esso (trascinare i suoi angoli, aggiungere o eliminare segni, oppure toglierlo di nuovo).
3. Scegliere **Controllato** nel suo pannello. Il segnale scompare e il conteggio sulla barra della tavola diminuisce.

I segnali vengono salvati con il computo, quindi si possono controllare anche più tardi.

:::note
Il confronto funziona sia sui PDF vettoriali sia sulle scansioni, perché confronta ciò che è disegnato. Una scansione storta o deformata può allinearsi solo in modo approssimativo con due punti; in quel caso controllare a occhio più segni.
:::
