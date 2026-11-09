---
title: Novità nelle versioni 0.8 e 0.8.1
summary: Conta un'intera legenda di simboli su tutte le tavole aperte in un'unica esecuzione, assegna i prezzi in base alle tariffe dei lavori passati, verifica il computo rispetto a scorte e tempi di consegna del fornitore, con nuovi strumenti per l'assistente per tutte e tre le funzioni, più le modifiche comuni alla 0.8 e la correzione della 0.8.1 per i file DWG.
keywords: novità, cosa c'è di nuovo, note di rilascio, changelog, modifiche, 0.8, 0.8.1, versione, nuove funzionalità, conta tutto, legenda, legenda di simboli, intero set, memoria dei prezzi, lavori passati, ultimo lavoro, prezzo tipico, fornitore, scorte, tempo di consegna, arretrato, elenco d'ordine, carenza, pannello problemi, assistente, lingue, dispositivi di input, righe della barra degli strumenti, dwg
from: a04adef6
---

Queste sono le modifiche di TakeoffCraft 0.8 (rilasciata il 2026-11-01) e 0.8.1 (2026-11-02), rispetto alla 0.7. Un'intera legenda di simboli può ora essere contata su tutto il set in una sola volta, un nuovo computo può partire dai prezzi dei lavori passati e il computo può essere verificato rispetto alle scorte di un fornitore. La 0.8.1 è una versione di correzione.

## Nuovo

### Conta tutto nel set di tavole

- **Racchiudere la legenda una volta sola.** {{ui:Conta tutto}} sulla barra degli strumenti legge una legenda di simboli: trascinare un riquadro attorno ai simboli e ai nomi stampati accanto. Ogni simbolo è elencato con la sua immagine e il suo nome, e il nome diventa il nome della voce. Deselezionare ciò che non serve, poi scegliere {{ui:Conta su N tavole}}. Una barra mostra la tavola in ricerca, {{ui:Annulla}} interrompe l'esecuzione e la pagina resta utilizzabile.
- **Tutte le tavole in un'unica esecuzione.** Ogni simbolo è contato su ogni tavola aperta. Una tavola disegnata a un'altra scala viene cercata a quella scala, e i simboli sono trovati ruotati di qualsiasi angolo retto. I simboli della legenda stessa non sono contati sulla sua tavola.
- **Verificare prima di aggiungere.** Ogni totale ha un collegamento per tavola ("E-103: 4") che porta a quella tavola. Fare clic su un riquadro di un ritrovamento per escluderlo, e fare di nuovo clic per reinserirlo. Il livello di corrispondenza (dal 50% al 100%) filtra soltanto ciò che è stato trovato; nulla viene cercato di nuovo.
- **Un solo passo di annullamento.** {{ui:Aggiungi N segni}} crea una voce di conteggio per simbolo con un segno su ogni ritrovamento. Un nome che è già una voce di conteggio viene riutilizzato. {{key:Ctrl+Z}} annulla tutte le voci e i segni. Ciò che si accetta alimenta anche {{ui:Appreso}}.
- **Simboli a qualsiasi angolo.** Selezionare {{ui:Simboli a qualsiasi angolo}} prima di contare, per trovare anche i simboli ruotati di un angolo diverso da quello retto. La ricerca ruota quindi ogni simbolo ogni 15 gradi, e un simbolo non tondo può richiedere fino a sei volte più tempo.
- **Di cosa si tratta.** Semplice corrispondenza di simboli sulle tavole, senza modello addestrato, e nulla lascia il computer. Su un set immaginario di 200 tavole ha impiegato 9.4 secondi dall'inizio alla fine in Chrome su un desktop veloce; i set di tavole reali saranno più lenti. Vedi [Conta tutto nel set di tavole](topic:count-everything).

### Memoria dei prezzi dai lavori passati

- **TakeoffCraft ricorda le tariffe.** Al salvataggio di un computo, ogni voce prezzata che viene usata è memorizzata per nome e tipo: tariffa del materiale, tariffa della manodopera, sfrido e unità di misura. Sono conservati gli ultimi 12 lavori per ogni nome. Resta su questo computer accanto alla Libreria dei prezzi, mai dentro un file di computo, e nulla viene inviato da nessuna parte.
- **Iniziare un nuovo computo da qui.** {{ui:Prezzi}} sulla barra degli strumenti mostra, per ogni voce, le tariffe dell'ultimo lavoro, le tariffe tipiche e l'intervallo. {{ui:Usa l'ultimo}} o {{ui:Usa il tipico}} applicano il prezzo a una voce, e {{ui:Assegna prezzo a N voci senza prezzo dalla memoria}} riempie ogni voce che non ha ancora un prezzo. Ogni uso è un passo di annullamento.
- **Lavori precedenti.** {{ui:Impara da un computo passato…}} memorizza le voci prezzate di un computo salvato (.json).
- **Vederla, modificarla, dimenticarla.** {{ui:Tutto ciò che è memorizzato}} elenca ogni nome; il pulsante del cestino dimentica un nome, e {{ui:Cancella tutti i prezzi}} dimentica tutto. Per fermare la memoria, disattivare {{ui:Ricorda i prezzi quando salvo un computo}}. Un prezzo a pezzo non viene mai assegnato a una voce misurata a piedi. Vedi [Memoria dei prezzi dai lavori passati](topic:price-memory).

### Scorte del fornitore e tempi di consegna

- **Verifica con l'elenco di un fornitore.** {{ui:Fornitura}} sulla barra degli strumenti accetta l'elenco delle scorte di un fornitore ({{ui:Aggiungi un file del fornitore…}}), un CSV o un foglio di calcolo, e verifica con esso ciò che serve al computo, sfrido compreso. Sono conservati fino a cinque file. Nulla viene inviato e nulla chiede qualcosa al fornitore: il file lo fornisce l'utente.
- **Cosa indica.** Prima compaiono le voci mancanti: "Mancano 120 EA", "Tempo di consegna 21 giorni", "In arretrato", "Unità diversa", "Nessun dato di giacenza" o "Disponibile". {{ui:Attesa massima accettata (giorni)}} parte da 14.
- **Elenco d'ordine.** {{ui:Elenco d'ordine (CSV)}} scarica le voci mancanti con la quantità mancante, il fornitore e il tempo di consegna.
- **Prezzi nella Libreria.** Se il file contiene dei prezzi, {{ui:Prezzi nella Libreria}} imposta il prezzo del materiale di ogni voce della Libreria con lo stesso nome e la stessa unità. Riapplicare i prezzi dalla Libreria per portarli nel computo.
- **Nel pannello Problemi.** Una mancanza è un avviso e un'attesa lunga è una nota, sotto "Scorte del fornitore". È possibile accettarne una indicando un motivo, e il motivo viene salvato nel computo. Vedi [Verifica scorte e tempi di consegna del fornitore](topic:supplier-stock).

### Assistenti IA

- **Strumenti per tutte e tre le funzioni.** Con gli assistenti consentiti in {{ui:Impostazioni}}, un assistente può leggere una legenda (`legend_open`), eseguire il conteggio (`legend_count_start`, poi `legend_count_status` e `legend_count_result`) e aggiungerlo (`legend_count_add`, che può mostrare prima un'anteprima). Può leggere i prezzi memorizzati (`prices_list`) e assegnarli alle voci (`prices_apply`, che può mostrare prima un'anteprima), e leggere la verifica del fornitore (`supply_check`). Aggiungere un file del fornitore resta un'operazione da fare a mano. Vedi [Usare TakeoffCraft con gli assistenti IA](topic:use-with-ai-assistants).

### In ogni app

- **Lingue.** Cinquantaquattro lingue in tutto; dieci sono nuove (lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili e uzbeko). Le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le ha lette.
- **Dispositivi di input.** {{ui:Impostazioni}} › {{ui:Globali}} › {{ui:Dispositivi di input}} stabilisce cosa fanno un trackpad, i tasti laterali di un mouse, una penna, un mouse 3D, un controller di gioco o un controller MIDI, per tutte le app o per una sola. Vedi [Usare un trackpad, un mouse 3D o un controller](common:input-devices).
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} offre {{ui:A capo}} (l'inizio), {{ui:2 righe}} e {{ui:1 riga}}; i gruppi che non entrano scorrono di lato. Vedi [Disporre i pannelli](common:arrange-panels).
- **Pannello Problemi.** Il pannello condiviso di avvisi e note include ora la verifica delle scorte del fornitore descritta sopra, accanto alle altre verifiche.
- **Add-on.** Gli add-on seguono l'elenco dell'account. Vedi [Add-on e l'elenco dell'account](common:addons-basics).
- **Collegare l'IA.** CadCraft Studio è il punto centrale: collegare il proprio assistente una sola volta per tutte e otto le app. Studio non ha una IA propria.

## Corretto nella 0.8.1

- **Sezione delle classi DWG.** La sezione delle classi di un file DWG veniva letta come un tipo errato. È corretta in TakeoffCraft e in altre quattro app.
- **Studio può cambiare lingua mentre è in esecuzione.** Prima Studio e le sue edizioni impacchettate erano solo in inglese. Non è stato verificato nella versione desktop su tutte le piattaforme; se la lingua non cambia, segnalarlo.

## Non ancora in questa versione

- **Non firmato con codice.** Windows può mostrare un avviso, e su un Mac si fa clic destro e si sceglie {{ui:Aperta}} la prima volta. Le versioni per i negozi (Microsoft Store, Google Play, App Store) sono in attesa, e la versione per iPad e iPhone non è stata ricompilata per la 0.8.1.
- **Aggiornamenti di Studio.** Il programma di installazione per Windows e i pacchetti per Linux verificano una volta al giorno e chiedono prima. Lo zip portabile si limita a segnalarlo, e macOS e l'APK non si aggiornano da soli. Il .dmg per macOS della 0.8 segue il rilascio.
- **Collegare l'IA.** Il collegamento con un solo clic in Studio, il connettore ospitato per l'IA nel browser, la propria chiave API in Studio e un pacchetto MCP pubblicato non sono previsti in questa versione.
- **Conta tutto.** Richiede simboli disegnati nello stesso modo della legenda, e un simbolo con un muro o una linea lunga che lo attraversa può non essere trovato. I simboli speculari non vengono trovati, e una tavola senza scala disegnata a un'altra dimensione viene cercata alla dimensione della legenda. Verificare i ritrovamenti sulla prima tavola prima di fidarsi delle altre.
- **Scorte del fornitore.** I dati di giacenza sono aggiornati solo quanto il file aggiunto. La verifica non chiede mai nulla al fornitore.
- **Lingue.** La barra dell'app in tamil trabocca.

Tutto il resto è in [Non ancora implementato](topic:not-built-yet). Per la versione precedente, vedi [Novità nella 0.7](topic:whats-new-0-7).
