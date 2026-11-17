---
title: Cosa ha appreso dai computi
summary: TakeoffCraft conserva i simboli confermati con Conteggio automatico, i set di condizioni, le composizioni più usate e gli schemi che si ripetono su ogni pagina, tutto nel file stesso del computo. Consultarli, usarli, eliminarli.
keywords: apprendere, appreso, apprendimento, assistente, ricordare, simboli, modelli, come l'ultimo lavoro, ultimo lavoro, set di condizioni, condizioni, riutilizzo, composizioni, più usate, suggerimenti, ripeti su ogni pagina, ogni pagina, cartiglio, schema, cancella tutto, dimenticare, privacy
from: 54d99e99
---

TakeoffCraft diventa più veloce man mano che si eseguono più computi con esso. Impara **solo da ciò che si accetta**:

- i simboli racchiusi con [Conteggio automatico](topic:auto-count) e poi aggiunti,
- i set di condizioni che si salvano,
- le composizioni usate (una volta per lavoro),
- gli schemi di segni che si ripetono su ogni pagina.

Si tratta di un semplice confronto sulle proprie tavole, la stessa ricerca che esegue Conteggio automatico. Non è un modello addestrato. Tutto ciò che impara è conservato **nel file di questo computo** (`.takeoff.json`), e non viene inviato a nessuno. Per portarlo al lavoro successivo, usare [Come l'ultimo lavoro](topic:what-it-learned#same-as-last-job).

Scegliere {{ui:Appreso}} nella barra degli strumenti (la lampadina, accanto a {{ui:Conteggio automatico}}) per vedere tutto.

## Simboli

Quando si racchiude un simbolo con {{ui:Conteggio automatico}} e si sceglie {{ui:Aggiungi}}, il simbolo racchiuso viene conservato, con il livello di corrispondenza accettato.

- In {{ui:Appreso}}, scegliere {{ui:Trova su questa tavola}} o {{ui:Trova su ogni tavola}}. Si apre la consueta revisione di Conteggio automatico: fare clic su un riquadro per escluderlo, spostare il cursore, poi aggiungerli. Non viene aggiunto nulla finché non si fa.
- Quando si apre una tavola che non ha ancora alcun simbolo appreso, una barra in alto propone {{ui:Trova …}} per esso. {{ui:Non ora}} la nasconde per quella tavola.
- Se il computo non ha una voce con quel nome, aggiungere i segni aggiunge anche la voce (un'unica operazione di annullamento).
- Aggiungere di nuovo il simbolo della stessa voce si somma a quello già noto; un simbolo dall'aspetto diverso viene conservato come un secondo.
- Come Conteggio automatico, trova il simbolo ad angolo retto e su tavole con un'altra scala.

## Set di condizioni

Un set conserva le condizioni di un computo (voci con unità, prezzi unitari, sfrido e composizioni), senza segni.

1. In {{ui:Appreso}}, scegliere {{ui:Salva le condizioni di questo computo come set…}} e assegnare un nome. Un set con lo stesso nome viene sostituito.
2. In un computo che ha il set, {{ui:Aggiungi}} inserisce le condizioni che non ha ancora. Le condizioni con lo stesso nome e tipo restano invariate. È un'unica operazione di annullamento.

## Come l'ultimo lavoro

Il file dell'ultimo lavoro contiene ciò che ha appreso. Per avviare un nuovo lavoro da esso:

1. Aprire i nuovi elaborati, poi scegliere {{ui:Appreso}} › {{ui:Come l'ultimo lavoro…}}.
2. Scegliere il `.takeoff.json` dell'ultimo lavoro.
3. Selezionare cosa importare: le sue condizioni (solo quelle che questo computo non ha) e ciò che ha appreso (simboli, set, composizioni, schemi). Poi {{ui:Importali}}.

Le sue condizioni vengono anche conservate come set con il nome di quel lavoro. I suoi segni e le sue quantità restano nel proprio file. L'intera operazione è un'unica operazione di annullamento.

## Composizioni usate più spesso

Una voce che ha una composizione conta come usata una volta per lavoro quando ha una quantità e si salva il computo. Un lavoro è l'insieme dei file di progetto da cui viene computato, quindi salvare di nuovo lo stesso computo non conta due volte. L'elenco sotto {{ui:Composizioni usate più spesso}} mette per primo quelle più usate. Esclude quelle che questo computo ha già. {{ui:Aggiungi}} inserisce una composizione come l'ultima volta che è stata usata, con tutte le sue parti.

## Ripeti su ogni pagina

Per i segni uguali su ogni pagina di un set, come il conteggio di un cartiglio o un dettaglio tipico:

1. Selezionare i segni su una tavola ([Seleziona i segni](topic:copy-paste#select-the-marks)).
2. In {{ui:Appreso}}, scegliere {{ui:Ripeti i segni selezionati su ogni pagina…}}, assegnare un nome allo schema e confermare.

Vengono messi su ogni altra pagina aperta **della stessa dimensione**, nello stesso punto, in un'unica operazione di annullamento. Lunghezze e aree vanno solo su pagine con la stessa scala; i conteggi vanno su qualsiasi pagina di quella dimensione. Una pagina che li ha già viene saltata. Lo schema viene conservato, quindi alle pagine aperte in seguito viene proposto nella barra, oppure si usa {{ui:Ripeti su ogni pagina}} nell'elenco.

## Consultare, eliminare

Tutto ciò che è appreso è elencato in {{ui:Appreso}}. Il cestino elimina un solo elemento. {{ui:Cancella tutto}} elimina tutto ciò che è stato appreso e lascia intatte le voci e i segni. Entrambe le operazioni si possono annullare fino alla chiusura del computo, e sono salvate con il computo.

Per smettere di apprendere in un solo computo, deselezionare {{ui:Apprendi da questo computo}}. Non si apprende più nulla di nuovo, e ciò che è elencato resta finché non lo si elimina.

## Da sapere

- Le versioni precedenti di TakeoffCraft aprono normalmente un file con elementi appresi. Ignorano quella parte e la eliminano se salvano di nuovo il file.
- Un simbolo appreso è una piccola immagine di ciò che è stato racchiuso, conservata nel file (alcuni kilobyte ciascuno).
- I simboli appresi vengono cercati come nelle ricerche di Conteggio automatico, quindi valgono gli stessi limiti: [Conteggio automatico di un simbolo](topic:auto-count).
