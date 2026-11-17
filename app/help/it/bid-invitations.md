---
title: Inviare un pacchetto per le offerte
summary: Invia via email un pacchetto d'offerta ai subappaltatori, lascia che digitino i prezzi su una pagina che non richiede account, tieni i prezzi sigillati fino all'ora di apertura e importali nel foglio di comparazione.
keywords: invia per le offerte, invito, invito a offrire, offerente, subappaltatore, invita, email, richiesta di prezzo, offerte sigillate, apertura delle offerte, giorno dell'offerta, offerta in ritardo, scadenza, promemoria, anagrafica subappaltatori, assicurazione, qualificazione, csv, collega, PDF delle tavole
from: fb314b2c
---

{{ui:Esporta}} › {{ui:Pacchetti d'offerta e comparazione…}} › {{ui:Invia per le offerte…}} invia un pacchetto alle persone che si scelgono. Il sito web invia a ciascuna un link via email; la persona apre una pagina, vede l'ambito e digita un prezzo per ogni riga. I prezzi arrivano nel foglio di comparazione, pronti da confrontare ([Pacchetti d'offerta e comparazione delle offerte](topic:bid-leveling)).

:::note
L'invio **non è ancora aperto a tutti.** Mentre la funzione è in prova funziona per gli account abilitati dal team di CadCraft; se il proprio account non lo è, la finestra lo segnala. La pagina dell'offerente funziona per ogni invito inviato.
:::

## Prima di inviare

- Serve un account CadCraft con un indirizzo email verificato. TakeoffCraft nel browser chiede di **Collegare**: si apre una scheda su getcadcraft.com, si preme Collega, e quella scheda ottiene un accesso valido per 30 giorni, solo per i pacchetti d'offerta, finché non si chiude la scheda di TakeoffCraft. Lo si può rimuovere in qualsiasi momento nella pagina della sicurezza. Una finestra di Studio non può ancora inviare.
- Assegnare a ogni voce un numero CSI: un pacchetto è costituito dalle voci di una divisione CSI ([Creare voci di computo](topic:create-items)).
- Impostare la scala delle tavole su cui si trovano i segni del pacchetto, così le quantità viste dagli offerenti sono misurate.

## Inviare un pacchetto

1. Scegliere {{ui:Invia per le offerte…}} sotto il pacchetto.
2. Compilare il titolo, il progetto e un messaggio facoltativo, e la **scadenza** nel proprio fuso orario.
3. Lasciare spuntato **Mantieni i prezzi sigillati** per nascondere ogni prezzo fino all'**ora di apertura** (non prima della scadenza), oppure deselezionare per vedere i prezzi man mano che arrivano.
4. Lasciare spuntata la casella delle tavole per inviare un PDF delle tavole che contengono i segni del pacchetto, con i segni disegnati. I prezzi dell'appaltatore non sono mai nell'invio: solo nomi delle voci, numeri CSI, quantità, unità e nomi delle tavole.
5. Scrivere le persone da invitare, una per riga, nella forma `Nome <nome@azienda.com>` o solo l'indirizzo, oppure selezionare persone dalle anagrafiche dei subappaltatori. Fino a 60 alla volta, 100 per pacchetto.
6. Scegliere {{ui:Invia gli inviti}}. Ogni persona riceve una sola email semplice con il nome e l'indirizzo email del mittente, la scadenza e il link; le risposte arrivano al mittente.

La finestra indica quanti inviti sono stati inviati e segnala chi è stato saltato: già invitato a questo pacchetto, chiesto di non ricevere inviti per offerte, indirizzo non valido, o oltre un limite di invio.

## Che cosa vede l'offerente

Una pagina con un link privato lungo, senza accesso. Mostra chi lo ha invitato, la scadenza, se i prezzi sono sigillati, il messaggio e il PDF delle tavole, poi ogni riga con la sua quantità. Per ogni riga digita un prezzo o spunta **Non incluso**, e può aggiungere una nota. Note per l'intero pacchetto e fino a 3 file (un preventivo, una lettera di ambito, un certificato) si aggiungono qui. È possibile salvare di nuovo e cambiare i prezzi fino all'apertura, oppure **rifiutare**, con una casella per chiedere che CadCraft non invii più inviti per offerte.

## Offerte sigillate e apertura

Prima dell'ora di apertura **nessuno** vede un prezzo, una nota o un file: né il mittente, né in TakeoffCraft, né nella pagina dei Pacchetti d'offerta. Si vede chi è stato invitato e se ha risposto. All'ora di apertura ogni offerta compare insieme. Un'offerta salvata dopo la scadenza viene accettata e contrassegnata **in ritardo**; la comparazione la elenca comunque, perché il ritardo è un contrassegno, non una decisione. Dopo l'apertura l'offerente non può cambiare un prezzo. Senza sigillatura, un'offerta è definitiva non appena scade.

## Ottenere i prezzi

{{ui:Ottieni i prezzi}} chiede al sito web e aggiunge ogni risposta al pacchetto come offerta, contrassegnata **web**. TakeoffCraft chiede anche in silenzio ogni volta che si apre la finestra mentre è collegato. Un'offerta per cui l'offerente ha salvato una nuova versione viene aggiornata sul posto; un'offerta modificata a mano resta come è stata lasciata finché non arriva una nuova versione. Ogni recupero è un passo che {{key:Mod+Z}} annulla. Le righe escluse arrivano come ambito che l'offerta lascia fuori, così la comparazione le copre a costo proprio.

## Sul sito web

Il proprio account ha due pagine in più quando è possibile inviare: **Pacchetti d'offerta** elenca ciò che è stato inviato, chi ha risposto, le offerte in ritardo e i file, e permette di inviare un promemoria (un nuovo link; il vecchio smette di funzionare), chiudere, riaprire o annullare un pacchetto. **Subappaltatori** conserva una scheda per ogni azienda: contatti, lavorazioni, risposte di qualificazione (anni di attività, capacità di garanzia, EMR, storico sicurezza, sindacale o aperta, referenze), date di scadenza di licenza e assicurazione, segnalate una volta superate o entro 30 giorni, e le offerte passate. Anagrafiche importabili ed esportabili come CSV: una riga per contatto, con le colonne mostrate dall'esportazione; un'azienda già presente viene aggiornata, mai ripetuta.

## Chi vede cosa, e per quanto tempo

I prezzi, le note e i file di un offerente vanno al mittente e al team di CadCraft, che gestisce la pagina. Sono conservati per 24 mesi dopo la scadenza, i file per 180 giorni; poi vengono eliminati. L'indirizzo email dell'offerente è quello inserito; viene usato solo per inviare l'invito e l'eventuale promemoria. Un indirizzo riceve al massimo 3 inviti al giorno da tutti insieme, e si possono inviare fino a 200 inviti al giorno.

## Non ancora implementato

Addenda, lettere di aggiudicazione, una scheda di ambito firmata per ciascun offerente e promemoria automatici prima della scadenza di un'assicurazione non sono ancora implementati. Vedere [Non ancora implementato](topic:not-built-yet).
