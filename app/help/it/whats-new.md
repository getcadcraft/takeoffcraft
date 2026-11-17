---
title: Novità della 0.9
summary: Lunghezze lette in metri, centimetri o millimetri, aree metriche in m2 con area delle pareti, predefinite di scala 1:75 e 1:150, unità di peso e temperatura, Arco con dieci metodi, e cursori in Live, Segui ed elenco delle persone.
keywords: novità, note di rilascio, changelog, 0.9, mostra lunghezze come, metri, centimetri, millimetri, metrico, segui globale, unità, unità di visualizzazione, m2, metri quadrati, area delle pareti, predefinite di scala, 1:75, 1:150, peso, chilogrammi, kg, tonnellata, ton, lb, temperatura, celsius, fahrenheit, arco, metodi arco, arco a 3 punti, raggio, Live, cursori, segui, elenco persone, classe, suggerimenti, disposizione, modifiche, 0.8, 0.8.1, versione, nuove funzionalità, conta tutto, legenda, legenda dei simboli, intero set, memoria dei prezzi, lavori passati, ultimo lavoro, prezzo tipico, fornitore, scorte, tempo di consegna, arretrato, elenco d'ordine, carenza, pannello dei problemi, assistente, lingue, dispositivi di input, righe della barra degli strumenti, dwg
from: 6182b998
---

Ecco cosa è cambiato in TakeoffCraft 0.9 rispetto alla 0.8.1. È una versione piccola per questa app: le lunghezze ora si possono leggere in metri, centimetri o millimetri, le aree e le scale seguono davvero il lavoro metrico, e Arco ha dieci modi di disegno. Le sessioni Live mostrano anche chi si trova dove.

## Novità

### Leggere le lunghezze in metri, centimetri o millimetri

- **Mostra lunghezze come.** {{ui:Impostazioni}} › {{ui:TakeoffCraft}} ha {{ui:Mostra le lunghezze come}} con {{ui:Segui Globale}}, {{ui:Piedi-pollici}}, m, cm e mm. {{ui:Segui Globale}} usa l'unità metrica di lunghezza contrassegnata con la stella in {{ui:Impostazioni}} › {{ui:Globali}} › {{ui:Unità}}, e i piedi-pollici se non ne è contrassegnata nessuna. Cambia il modo in cui le lunghezze si leggono sulla tavola, nella barra di stato e nei pannelli, incluse altezze, profondità, spessori e livelli. Un numero semplice digitato in un campo altezza viene letto nell'unità mostrata.
- **Solo visualizzazione.** Quantità, costi ed esportazioni sono calcolati dalle lunghezze esatte. La scelta di 1/16, 1/8 e 1/4 di pollice compare solo per piedi-pollici. Vedi [Mostrare le lunghezze in metri](topic:show-lengths-in-meters).
- **Unità di peso.** Una voce {{ui:Quantità digitata (senza disegno)}} ora può essere in lb, TON, kg o t, e avere un prezzo per unità.
- **Temperatura.** Ogni voce ha un campo facoltativo {{ui:Temperatura}} nell'editor della voce, digitato in gradi C o F. {{ui:Mostra le temperature come}} in {{ui:Impostazioni}} › {{ui:TakeoffCraft}} offre {{ui:Segui Globale}}, °C o °F.

### Aree e scale per il lavoro metrico

- **Aree in m2 sul disegno.** Un'area misurata con una voce metrica ora riporta m2 sull'etichetta del disegno e nel pannello dei segni oltre che nella tabella, invece di SF. La regola è m2 quando la voce ha un prezzo metrico o le lunghezze sono mostrate in m, cm o mm, e SF altrimenti.
- **Area della parete.** Una voce lineare con un'altezza mostra anche la propria area della parete (lunghezza per altezza) nell'elenco delle voci e come riga di nota sotto la tabella delle quantità per voce.
- **Predefinite di scala 1:75 e 1:150.** Sono nell'elenco {{ui:Predefinita}} del gruppo {{ui:Scala}}, che ora ha 32 scale. Vedi [Predefinite di scala](topic:scale-presets).

### Arco con dieci metodi

- Con {{ui:Arco}} attivo (pulsante della barra degli strumenti o {{key:R}}), nella barra della tavola compare una casella {{ui:Metodo arco}}: 3 punti, Inizio, Centro, Fine, Inizio, Centro, Angolo, Inizio, Centro, Lunghezza, Inizio, Fine, Angolo, Inizio, Fine, Direzione, Inizio, Fine, Raggio, Centro, Inizio, Fine, Centro, Inizio, Angolo e Centro, Inizio, Lunghezza. Angolo, lunghezza, raggio e direzione si possono indicare con il clic o digitare. Funziona per tratti lineari, aree e vuoti. I file salvati prima della 0.9 si aprono allo stesso modo. Vedi [Disegnare archi con dieci metodi](topic:draw-arcs-ten-methods).

### Lavorare insieme

- **Vedere i cursori degli altri.** In una sessione Live il puntatore di ciascuno compare sulla tavola con il suo nome e colore, con un riquadro tratteggiato attorno ai segni selezionati. Le persone su un'altra tavola sono elencate con il nome di quella tavola. Vedi [Lavorare in Live con altri](topic:work-live).
- **Seguire una persona, e l'elenco delle persone.** Il pulsante {{ui:Persone}} in una sessione Live elenca ciascuna persona con lo strumento che usa, la tavola su cui si trova e quando ha modificato per ultimo. {{ui:Segui}} sposta la propria vista insieme alla sua, e chi ospita può usare {{ui:Chiedi a tutti di seguirmi}}. Vedi [Seguire un collega in una sessione Live](topic:follow-a-teammate).

## In tutte le app

- **Suggerimenti e suggerimento d'avvio.** Il testo che compare al passaggio del mouse è un suggerimento Bootstrap, e il suggerimento d'avvio si può chiudere.
- **Barre delle schede a scorrimento.** La barra delle schede di un pannello che non entra scorre invece di essere tagliata.
- **Titoli delle schede.** La scheda del browser riporta `<document> - TakeoffCraft | CadCraft`.
- **Disposizione.** L'elenco delle disposizioni in {{ui:Impostazioni}} è un menu a discesa che mostra la disposizione scelta.
- **Lingua.** La lingua scelta ora raggiunge anche le parole che la pagina stampa da sé, come Nuovo, Apri e Salva. Le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le ha lette.

## Limiti dichiarati

- La visualizzazione delle lunghezze, le unità di peso e temperatura e le nuove predefinite sono state verificate con test e nella pagina. Non ogni pannello in ogni unità è stato verificato a mano.
- L'elenco delle persone non è stato verificato a mano con una vera classe di insegnanti e studenti.
- Le lingue diverse dall'inglese sono bozze automatiche.
- I programmi di installazione per Windows non sono firmati digitalmente (Ulteriori informazioni, poi Esegui comunque). L'immagine disco per macOS non è notarizzata (clic destro, poi Apri).

## Precedenti: 0.8 e 0.8.1

Ecco cosa è cambiato in TakeoffCraft 0.8 (rilasciata il 2026-11-01) e 0.8.1 (2026-11-02), rispetto alla 0.7. Una legenda di simboli ora si può contare su tutto il set in una sola volta, un nuovo computo può partire dai prezzi dei lavori passati, e il computo si può verificare rispetto alle scorte di un fornitore. La 0.8.1 è una versione di correzione.

### Novità

**Contare tutto nel set**

- **Racchiudere la legenda una volta.** {{ui:Conta tutto}} nella barra degli strumenti legge una legenda di simboli: trascinare un riquadro attorno ai simboli e ai nomi stampati accanto. Ogni simbolo è elencato con la sua immagine e il suo nome, e il nome diventa il nome della voce. Deselezionare ciò che non si vuole, poi scegliere {{ui:Conta su N tavole}}. Una barra mostra la tavola in ricerca, {{ui:Annulla}} interrompe l'esecuzione, e la pagina resta utilizzabile.
- **Ogni tavola in un'unica esecuzione.** Ogni simbolo è contato su ogni tavola aperta. Una tavola disegnata con un'altra scala viene cercata a quella scala, e i simboli si trovano ruotati di qualsiasi angolo retto. I simboli della legenda stessa non sono contati sulla sua tavola.
- **Revisione prima di aggiungere qualsiasi cosa.** Ogni totale ha un collegamento per tavola ("E-103: 4") che porta a quella tavola. Fare clic su un riquadro di una ricerca per escluderlo, e di nuovo per riportarlo. Il livello di corrispondenza (dal 50% al 100%) filtra solo ciò che è stato trovato; non si cerca di nuovo.
- **Un'unica operazione di annullamento.** {{ui:Aggiungi N segni}} crea una voce di conteggio per simbolo, con un segno su ogni ricerca. Un nome che è già una voce di conteggio presente viene riutilizzato. {{key:Ctrl+Z}} annulla tutte le voci e i segni. Ciò che si accetta alimenta anche {{ui:Appreso}}.
- **Simboli a qualsiasi angolo.** Selezionare {{ui:Simboli a qualsiasi angolo}} prima di contare, per trovare anche i simboli ruotati di un angolo che non è retto. La ricerca ruota allora ogni simbolo ogni 15 gradi, e un simbolo che non è tondo può richiedere fino a sei volte più tempo.
- **Cos'è.** Un semplice confronto di simboli sulle proprie tavole, senza modello addestrato, e nulla lascia il proprio computer. Su un set fittizio di 200 tavole ha impiegato 9.4 secondi dall'inizio alla fine in Chrome su un desktop veloce; i set reali saranno più lenti. Vedi [Conta tutto nel set](topic:count-everything).

**Memoria dei prezzi dai propri lavori**

- **TakeoffCraft ricorda i propri prezzi unitari.** Quando si salva un computo, ogni voce con prezzo usata viene ricordata per nome e tipo: prezzo unitario del materiale, della manodopera, sfrido e unità. Vengono conservati gli ultimi 12 lavori per ogni nome. Resta su questo computer accanto alla Libreria dei prezzi, mai dentro un file di computo, e nulla viene inviato a nessuno.
- **Avviare un nuovo computo da essa.** {{ui:Prezzi}} nella barra degli strumenti mostra, per ogni voce, i prezzi unitari dell'ultimo lavoro, quelli tipici e l'intervallo. {{ui:Usa l'ultimo}} o {{ui:Usa il tipico}} prezzano una voce, e {{ui:Prezza N voci senza prezzo dalla memoria}} compila ogni voce che non ha ancora un prezzo. Ogni uso è un'unica operazione di annullamento.
- **Lavori precedenti.** {{ui:Impara da un computo passato…}} ricorda le voci con prezzo di un computo salvato (.json).
- **Consultare, modificare, dimenticare.** {{ui:Tutto ciò che è memorizzato}} elenca ogni nome; il pulsante del cestino dimentica uno, e {{ui:Cancella tutti i prezzi}} dimentica tutto. Disattivare {{ui:Ricorda i prezzi quando salvo un computo}} per fermare. Un prezzo a pezzo non finisce mai su una voce al piede. Vedi [Memoria dei prezzi dai lavori passati](topic:price-memory).

**Scorte del fornitore e tempi di consegna**

- **Verifica con l'elenco di un fornitore.** {{ui:Fornitura}} nella barra degli strumenti prende l'elenco delle scorte di un fornitore ({{ui:Aggiungi un file del fornitore…}}), un CSV o un foglio di calcolo, e controlla rispetto ad esso ciò che il computo richiede, con lo sfrido. Si conservano fino a cinque file. Non si invia nulla e nulla chiede al fornitore: il file lo fornisce l'utente.
- **Cosa indica.** Le voci in carenza vengono per prime: "Carenza di 120 EA", "Tempo di consegna 21 giorni", "In arretrato", "Unità diversa", "Nessun dato di scorta" o "Disponibile". {{ui:Attesa massima accettata (giorni)}} parte da 14.
- **Elenco d'ordine.** {{ui:Elenco d'ordine (CSV)}} scarica le voci in carenza con la quantità mancante, il fornitore e il tempo di consegna.
- **Prezzi nella Libreria.** Se il file contiene prezzi, {{ui:Prezzi nella Libreria}} imposta il prezzo del materiale di ogni voce della Libreria con lo stesso nome e unità. Riprezzare dalla Libreria per portarli nel computo.
- **Nel pannello dei problemi.** Una carenza è un avviso e un'attesa lunga è una nota, sotto "Scorte del fornitore". Si può accettarne una indicando un motivo, e il motivo viene salvato nel computo. Vedi [Verificare scorte del fornitore e tempi di consegna](topic:supplier-stock).

**Assistenti IA**

- **Strumenti per tutti e tre.** Con gli assistenti consentiti in {{ui:Impostazioni}}, un assistente può leggere una legenda (`legend_open`), avviare il conteggio (`legend_count_start`, poi `legend_count_status` e `legend_count_result`) e aggiungerlo (`legend_count_add`, che può prima mostrare un'anteprima). Può leggere i prezzi memorizzati (`prices_list`) e prezzare voci da essi (`prices_apply`, che può prima mostrare un'anteprima), e leggere la verifica del fornitore (`supply_check`). Aggiungere un file del fornitore resta compito dell'utente. Vedi [Usa TakeoffCraft con assistenti IA](topic:use-with-ai-assistants).

**In tutte le app**

- **Lingue.** Cinquantaquattro lingue in tutto; dieci sono nuove (lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili e uzbeco). Le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le ha lette.
- **Dispositivi di input.** {{ui:Impostazioni}} › {{ui:Globali}} › {{ui:Dispositivi di input}} stabilisce cosa fanno un trackpad, i pulsanti laterali di un mouse, una penna, un mouse 3D, un controller di gioco o un controller MIDI, per tutte le app o per una sola. Vedi [Usare un trackpad, un mouse 3D o un controller](common:input-devices).
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} offre {{ui:A capo}} (l'avvio), {{ui:2 righe}} e {{ui:1 riga}}; i gruppi che non entrano scorrono di lato. Vedi [Disporre i pannelli](common:arrange-panels).
- **Pannello dei problemi.** Il pannello condiviso di avvisi e note ora include la verifica delle scorte del fornitore descritta sopra, accanto alle altre verifiche.
- **Add-on.** Gli add-on seguono l'elenco del proprio account. Vedi [Add-on ed elenco del proprio account](common:addons-basics).
- **Collegare la propria IA.** CadCraft Studio è l'hub: collegare il proprio assistente una sola volta per tutte e otto le app. Studio non ha un'IA propria.

### Corretto nella 0.8.1

- **Sezione delle classi DWG.** La sezione delle classi di un file DWG veniva letta con il tipo sbagliato. È corretto in TakeoffCraft e in altre quattro app.
- **Studio può cambiare lingua mentre è in esecuzione.** Prima, Studio e le sue edizioni confezionate erano solo in inglese. Non è stato provato nella build desktop su ogni piattaforma; segnalare se la lingua non cambia.

### Non ancora in questa versione

- **Non firmata digitalmente.** Windows può avvisare, e su Mac, la prima volta, si fa clic destro e si sceglie {{ui:Aperta}}. Le build per gli store (Microsoft Store, Google Play, App Store) sono in attesa, e la build per iPad e iPhone non è stata ricostruita per la 0.8.1.
- **Aggiornamenti di Studio.** Il programma di installazione per Windows e i pacchetti Linux controllano una volta al giorno e chiedono prima. Lo zip portatile si limita a informare, e macOS e l'APK non si aggiornano da soli. Il .dmg per macOS della 0.8 segue la versione.
- **Collegare la propria IA.** Il collegamento con un clic in Studio, il connettore ospitato per l'IA nel browser, una propria chiave API in Studio e un pacchetto MCP pubblicato non sono promessi in questa versione.
- **Conta tutto.** Servono simboli disegnati nello stesso modo della legenda, e un simbolo con un muro o una lunga linea che lo attraversa può sfuggire. I simboli speculari non vengono trovati, e una tavola senza scala disegnata a un'altra dimensione viene cercata alla dimensione della legenda. Verificare le ricerche sulla prima tavola prima di fidarsi del resto.
- **Scorte del fornitore.** I dati di scorta sono aggiornati quanto il file che si aggiunge. La verifica non chiede mai nulla al fornitore.
- **Lingue.** La barra dell'app in tamil trabocca.

Tutto il resto è in [Non ancora implementato](topic:not-built-yet). Per la versione precedente, vedi [Novità della 0.7](topic:whats-new-0-7).
