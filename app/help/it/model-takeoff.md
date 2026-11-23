---
title: Ricavare le quantità da un modello edilizio
summary: Aprire il modello IFC dell'architetto, vederlo in 3D, scegliere muri, solai, porte e il resto per tipo, materiale, layer o dimensione, e portare i loro conteggi, lunghezze, aree e volumi nel computo. Una copia più recente del modello aggiorna le stesse quantità.
keywords: modello, computo da modello, vista 3D, clic su una parte, trova la riga, materiale, layer, strati del muro, cartongesso, isolante, dimensioni porte, dimensioni finestre, abaco porte e finestre, csv, 3d, bim, ifc, rvt, modello edilizio, quantità, muri, solai, porte, finestre, pilastri, locali, per tipo, per piano, aggiornamento, modello più recente, sviluppo del progetto
from: 8c4c12c9
---

Non occorre aspettare il prossimo set di disegni. Quando l'architetto invia il modello edilizio, lo si apre qui e si prendono le quantità direttamente da esso. Il modello viene letto sul computer; non viene inviato da nessuna parte.

## Passaggi

1. Scegliere {{ui:Modello}} nella barra degli strumenti e selezionare il file `.ifc` del modello, oppure aprirlo con {{ui:Apri PDF}} come qualsiasi altro file.
2. {{ui:Computo da modello}} si apre con una riga per categoria e tipo: muri per tipo di muro, solai per tipo di solaio, porte per tipo di porta, e così via. Ogni riga mostra il suo conteggio e l'unità in cui è misurata quella categoria.
3. Impostare {{ui:Raggruppa per}} su {{ui:Categoria}} per un totale rapido, oppure su {{ui:Categoria, tipo e piano}} per dividere ogni tipo per piano.
4. Deselezionare le righe che non servono. {{ui:Trova}} restringe l'elenco. Deselezionare una riga nasconde anche le sue parti nell'immagine 3D.
5. Assegnare al modello un {{ui:Nome modello}} da mantenere per tutta la commessa, ad esempio il nome del progetto.
6. Scegliere {{ui:Aggiungi al computo}}. Ogni quantità diventa una quantità digitata nell'elenco delle voci. Darle un nome, prezzarla e collegarvi le composizioni come per ogni altra voce.

## Vedere il modello in 3D

{{ui:Mostra il modello in 3D}} disegna il modello sopra la tabella, con un colore per ogni riga (il riquadro colorato accanto al nome della riga). Trascinare per ruotarlo, tenere premuto {{key:Shift}} e trascinare per spostarlo, usare la rotella per lo zoom, e scegliere {{ui:Adatta}} o {{ui:Reimposta}} per tornare indietro.

- **Cliccare una parte** nell'immagine seleziona la sua riga nella tabella, con tutte le parti di quella riga illuminate e le altre sbiadite. Cliccare di nuovo la stessa parte e, se si trova in più righe (un muro nei suoi strati), viene selezionata la riga successiva.
- **Cliccare una riga** nella tabella illumina le sue parti. Cliccarla di nuovo, o cliccare uno spazio vuoto nell'immagine, per annullare la selezione.
- I locali non sono disegnati, perché il loro volume nasconderebbe l'edificio.
- Un modello molto grande mantiene solo un box per alcune parti, in modo che stia in memoria; il pannello indica quante sono. I numeri non cambiano.

Se questo computer non riesce a disegnare in 3D, la tabella funziona come prima.

## Raggruppare per materiale, layer o dimensione

{{ui:Raggruppa per}} ha altre tre scelte:

- {{ui:Categoria e materiale}}: un muro, un solaio o un tetto costruito a strati dà a ogni materiale di strato la sua riga, così cartongesso, montanti e isolante si possono prezzare separatamente. Una parte dell'edificio con un solo materiale riceve la riga di quel materiale, e una parte senza materiale resta in una riga chiamata "Nessun materiale indicato".
- {{ui:Categoria e layer}}: lo stesso, con lo spessore dello strato nella riga ("Isolante, 100 mm").
- {{ui:Categoria, tipo e dimensione di porta o finestra}}: porte e finestre sono divise per larghezza e altezza (ad esempio 3'-0" × 6'-8" oppure 914 × 2,032 mm).

Per uno strato, l'area è la faccia propria del muro (oppure l'area in pianta o della superficie del solaio o del tetto) e il volume è quell'area per lo spessore dello strato. La nota della riga indica quanti numeri provengono da uno strato. Gli strati di un muro sommati danno il volume che il modello dichiara per esso.

## Salvare le righe o i vani come CSV

{{ui:Salva le righe come CSV}} salva le righe selezionate, con le unità in ogni intestazione, per un foglio di calcolo. {{ui:Salva elenco porte e finestre come CSV}} (solo se il modello ha porte o finestre) salva ogni porta e finestra per tipo, piano e dimensione, con il suo conteggio.

## Cosa si misura

| Categoria | Quantità |
|---|---|
| Muri | conteggio, lunghezza, area della parete (una faccia, vani esclusi), volume |
| Solai, platee, controsoffitti e altri rivestimenti | conteggio, area in pianta, volume |
| Tetti | conteggio, area in pianta, superficie del tetto, volume |
| Plinti | conteggio, area in pianta, volume |
| Pilastri, travi ed elementi | conteggio, lunghezza lungo l'elemento, volume |
| Parapetti, tubazioni, canali e percorsi cavi | conteggio, lunghezza |
| Scale | conteggio, volume |
| Locali | conteggio, area del pavimento, volume |
| Porte, finestre e tutto il resto | conteggio |

Dove l'autore del modello ha indicato una quantità nel file, si usa quel numero. Altrimenti il numero viene misurato dalla forma dell'elemento. Ogni quantità conserva una nota che indica quale dei due casi si è verificato, e quanti elementi hanno dato un numero.

:::note
La lunghezza di un muro misurata dalla sua forma va da un capo all'altro, quindi due muri che si sovrappongono in un angolo includono entrambi l'angolo. Un volume richiede una forma chiusa: un elemento la cui forma non è chiusa viene contato ma non dà alcun volume. Un elemento di muro curvo o ad angolo è misurato come metà di tutte le sue facce verticali, e la sua nota lo indica.
:::

## Quando arriva un modello più recente

Aprire il file più recente e digitare lo stesso {{ui:Nome modello}}. Prima di aggiungere qualsiasi cosa, il pannello indica quante quantità sono nuove, quante sono cambiate e da cosa a cosa, e quali quantità della copia precedente non sono più nel modello. Scegliere {{ui:Aggiungi al computo}}: le quantità cambiate prendono i nuovi numeri, mentre nomi, tariffe, sfrido e composizioni restano. Le quantità non più presenti nel modello mantengono i vecchi numeri; vanno eliminate a mano se il progetto le ha tolte.

Tipi e nomi dei piani sono il modo in cui una quantità viene riconosciuta. Se l'architetto rinomina un tipo di muro, arriva come una nuova quantità e quella vecchia risulta non più presente.

## File letti

File IFC (IFC2x3, IFC4 e IFC4.3). Un file IFC con strade, ferrovie o ponti porta comunque le sue quantità infrastrutturali direttamente, come prima.

TakeoffCraft non legge i file `.rvt` in questa versione. Se l'architetto lavora in Revit, chiedere un'esportazione IFC del modello (File, Esporta, IFC) e aprire quella.

Un modello può importare fino a 500 quantità alla volta. Se ce ne sono di più, deselezionare righe o raggruppare per categoria.
