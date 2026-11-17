---
title: Gruppi tipo
summary: Computare una unità, stanza o piano tipo una sola volta e contarla tante volte quante si ripete, modificare il conteggio in seguito e vedere quali segni sono tipo.
keywords: tipo, gruppo tipo, ripetizione, conteggio ripetizioni, moltiplicare, volte, unità, camera d'albergo, appartamento, piano tipo, x24, copie
from: 42c3a372
---

Un edificio spesso si ripete: 24 camere d'albergo identiche, 6 piani tipo, 40 posti auto con la stessa segnaletica. Un **gruppo tipo** permette di computare una di queste unità e di contarla tante volte quante si ripete, senza disegnare le copie.

## Creare un gruppo tipo

1. Computare una unità: i suoi muri, il suo pavimento, le sue prese — qualsiasi voce.
2. Selezionare i suoi segni con lo strumento {{ui:Seleziona}}: fare clic su uno, poi {{key:Shift}} + clic sugli altri ([Selezionare i segni](topic:copy-paste#select-the-marks)).
3. In **Segno selezionato**, aprire {{ui:Tipo}} e scegliere {{ui:Nuovo gruppo tipo…}}.
4. Dargli un nome (`Unità A`) e indicare quante volte si ripete (`24`), poi scegliere {{ui:Crea gruppo}}.

Ogni quantità di quei segni ora conta 24 volte: un tratto di muro di 10 ft diventa 240 ft, un pavimento di 80 SF diventa 1,920 SF, due prese 48. I costi seguono, e le formule di composizione vedono i totali ripetuti (`N` conta anche ogni tratto 24 volte).

Sul foglio, un riquadro tratteggiato circonda i segni del gruppo con il suo nome e il conteggio, come **Unità A ×24**.

## Modificarlo in seguito

I gruppi sono elencati sotto **Gruppi tipo** nel pannello destro:

- Cambiare il numero dopo **×** per modificare quante volte viene contato (da 1 a 10,000). Ogni quantità si aggiorna.
- Rinominarlo nella sua casella del nome.
- L'icona della scatola seleziona i suoi segni (e mostra il loro foglio).
- Il cestino elimina il gruppo. I suoi segni restano, contati una volta.

Per aggiungere segni a un gruppo o toglierli, selezionarli e scegliere il gruppo (o {{ui:Non tipo (×1)}}) sotto {{ui:Tipo}}.

## Da sapere

- I segni di un gruppo possono stare su più fogli e appartenere a voci diverse. Ogni segno appartiene al massimo a un gruppo.
- Le copie incollate non fanno parte del gruppo: una copia incollata di un'unità tipo verrebbe altrimenti contata di nuovo 24 volte. Usare un gruppo per "la stessa cosa N volte", e copia e incolla per le copie che si disegnano.
- I segni sono disegnati una sola volta, quindi la vista 3D e il PDF segnato mostrano una sola unità; le quantità, le esportazioni e la tabella per foglio la contano ×N. Il foglio **Segni** dell'esportazione Excel indica quali segni sono tipo e quante volte contano.
- Con le aree di offerta, i segni di un gruppo contano ×N nella propria area di offerta.
