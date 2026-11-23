---
title: Novità della 0.9 (precedenti)
summary: Leggere le lunghezze in metri, centimetri o millimetri, aree metriche in m2 con area delle pareti, preimpostazioni di scala 1:75 e 1:150, unità di peso e temperatura, Arco con dieci metodi, cursori in tempo reale, Segui e un elenco di persone.
keywords: novità 0.9, versione precedente, novità, note di rilascio, changelog, 0.9, mostra le lunghezze come, metri, centimetri, millimetri, metrico, segui globale, unità, unità di visualizzazione, m2, metri quadrati, area delle pareti, preimpostazioni di scala, 1:75, 1:150, peso, chilogrammi, kg, tonnellata, t, lb, temperatura, celsius, fahrenheit, arco, metodi arco, arco a 3 punti, raggio, dal vivo, cursori, segui, elenco persone, classe, suggerimenti, layout, modifiche, 0.8, 0.8.1, versione, nuove funzioni, conta tutto, legenda, legenda dei simboli, intero set, memoria dei prezzi, lavori passati, ultimo lavoro, prezzo tipico, fornitore, scorte, tempo di consegna, arretrato, elenco d'ordine, carenza, pannello dei problemi, assistente, lingue, dispositivi di input, righe della barra degli strumenti, dwg
from: f4322ba2
---

Questo è ciò che è cambiato in TakeoffCraft 0.9, rispetto alla 0.8.1. È una versione piccola per questa app: ora le lunghezze si possono leggere in metri, centimetri o millimetri, le aree e le scale seguono correttamente il lavoro metrico, e Arco ha dieci modi per disegnare. Anche le sessioni dal vivo mostrano dove si trova ciascuno.

## Novità

### Leggere le lunghezze in metri, centimetri o millimetri

- **Mostra le lunghezze come.** In {{ui:Impostazioni}} › {{ui:TakeoffCraft}} c'è {{ui:Mostra le lunghezze come}} con {{ui:Segui Globale}}, {{ui:Piedi-pollici}}, m, cm e mm. {{ui:Segui Globale}} usa l'unità di lunghezza metrica contrassegnata con la stella in {{ui:Impostazioni}} › {{ui:Globali}} › {{ui:Unità}}, e piedi-pollici se nessuna è contrassegnata. Cambia il modo in cui le lunghezze appaiono sul foglio, nella barra di stato e nei pannelli, incluse altezze, profondità, spessori e piani. Un numero senza unità digitato in un campo di altezza viene letto nell'unità mostrata.
- **Solo visualizzazione.** Quantità, costi ed esportazioni sono calcolati dalle lunghezze esatte. La scelta di 1/16, 1/8 e 1/4 di pollice compare solo per piedi-pollici. Vedi [Mostra le lunghezze in metri](topic:show-lengths-in-meters).
- **Unità di peso.** Una voce {{ui:Quantità digitata (senza disegno)}} può ora essere in lb, TON, kg o t, e avere un prezzo per unità.
- **Temperatura.** Ogni voce ha un campo facoltativo {{ui:Temperatura}} nell'editor delle voci, digitato in gradi C o F. {{ui:Mostra le temperature come}} in {{ui:Impostazioni}} › {{ui:TakeoffCraft}} offre {{ui:Segui Globale}}, °C o °F.

### Aree e scale per il lavoro metrico

- **Aree in m2 sul disegno.** Un'area misurata con una voce metrica ora riporta m2 sull'etichetta del disegno e nel pannello dei segni, oltre che nella tabella, invece di SF. La regola è m2 quando la voce è prezzata in metrico o le lunghezze sono mostrate in m, cm o mm, e SF altrimenti.
- **Area delle pareti.** Una voce lineare con un'altezza mostra anche la propria area della parete (lunghezza per altezza) nell'elenco delle voci e come riga di nota sotto la tabella delle quantità per voce.
- **Preimpostazioni di scala 1:75 e 1:150.** Sono nell'elenco {{ui:Predefinita}} del gruppo {{ui:Scala}}, che ora contiene 32 scale. Vedi [Preimpostazioni di scala](topic:scale-presets).

### Arco con dieci metodi

- Mentre {{ui:Arco}} è attivo (pulsante della barra degli strumenti o {{key:R}}), nella barra del foglio compare una casella {{ui:Metodo arco}} con: 3 punti; Inizio, Centro, Fine; Inizio, Centro, Angolo; Inizio, Centro, Lunghezza; Inizio, Fine, Angolo; Inizio, Fine, Direzione; Inizio, Fine, Raggio; Centro, Inizio, Fine; Centro, Inizio, Angolo; Centro, Inizio, Lunghezza. Angolo, lunghezza, raggio e direzione si possono cliccare o digitare. Funziona nei tratti lineari, nelle aree e nei vuoti. I file salvati prima della 0.9 si aprono allo stesso modo. Vedi [Disegnare archi con dieci metodi](topic:draw-arcs-ten-methods).

### Lavorare insieme

- **Vedere i cursori degli altri.** In una sessione Live il puntatore di ciascuna persona compare sul foglio con il suo nome e colore, con un riquadro tratteggiato attorno ai segni selezionati. Le persone su un'altra tavola sono elencate con il nome di quella tavola. Vedi [Lavorare dal vivo con altri](topic:work-live).
- **Seguire una persona e l'elenco delle persone.** Il pulsante {{ui:Persone}} in una sessione Live elenca ciascuna persona con lo strumento che usa, la tavola su cui si trova e l'ultima modifica. {{ui:Segui}} allinea la vista a quella della persona, e l'ospite può usare {{ui:Chiedi a tutti di seguirmi}}. Vedi [Seguire un collega in una sessione Live](topic:follow-a-teammate).

## In ogni app

- **Suggerimenti e suggerimento iniziale.** Il testo che appare al passaggio del mouse è un suggerimento Bootstrap, e il suggerimento iniziale si può chiudere.
- **Schede a scorrimento.** La barra delle schede di un pannello che non entra scorre invece di essere tagliata.
- **Titoli delle schede.** La scheda del browser riporta `<document> - TakeoffCraft | CadCraft`.
- **Layout.** L'elenco dei layout in {{ui:Impostazioni}} è un menu a discesa che mostra il layout scelto.
- **Lingua.** La lingua scelta ora si applica anche alle parole che la pagina stampa da sola, come Nuovo, Apri e Salva. Le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le ha lette.

## Limiti dichiarati

- La visualizzazione delle lunghezze, le unità di peso e temperatura e le nuove preimpostazioni sono stati verificati con test e nella pagina. Non ogni pannello con ogni unità è stato controllato a mano.
- L'elenco delle persone non è stato verificato a mano con una vera classe di insegnanti e studenti.
- Le lingue diverse dall'inglese sono bozze automatiche.
- I programmi di installazione per Windows non sono firmati digitalmente (Ulteriori informazioni, poi Esegui comunque). Il disco immagine per macOS non è notarizzato (clic destro, poi {{ui:Aperta}}).

## Precedenti: 0.8 e 0.8.1

Questo è ciò che è cambiato in TakeoffCraft 0.8 (rilasciata il 2026-11-01) e 0.8.1 (2026-11-02), rispetto alla 0.7. Una legenda dei simboli ora si può contare su tutto il set in una volta, un nuovo computo può partire dai prezzi dei lavori passati e il computo si può verificare con le scorte di un fornitore. La 0.8.1 è una versione di correzione.

### Novità

**Contare tutto nel set**

- **Racchiudere la legenda una volta.** {{ui:Conta tutto}} nella barra degli strumenti legge una legenda dei simboli: trascinare un riquadro attorno ai simboli e ai nomi stampati accanto. Ogni simbolo è elencato con la sua immagine e il suo nome, e il nome diventa il nome della voce. Deselezionare ciò che non serve, poi scegliere {{ui:Conta su N tavole}}. Una barra mostra la tavola in corso di ricerca, {{ui:Annulla}} ferma l'esecuzione e la pagina resta utilizzabile.
- **Una sola esecuzione su tutte le tavole.** Ogni simbolo è contato su ogni tavola aperta. Una tavola disegnata a un'altra scala viene cercata a quella scala, e i simboli sono trovati anche ruotati di un angolo retto. I simboli della legenda stessa non sono contati sulla sua tavola.
- **Verificare prima di aggiungere.** Ogni totale ha un collegamento per tavola ("E-103: 4") che porta a quella tavola. Cliccare un riquadro su un risultato per escluderlo, e cliccarlo di nuovo per riportarlo. Il livello di corrispondenza (dal 50% al 100%) filtra soltanto ciò che è stato trovato; non si cerca di nuovo.
- **Un solo passo di annullamento.** {{ui:Aggiungi N segni}} crea una voce di conteggio per simbolo, con un segno su ogni risultato. Un nome che è già una voce di conteggio viene riutilizzato. {{key:Ctrl+Z}} ritira tutte le voci e i segni. Ciò che si accetta alimenta anche {{ui:Appreso}}.
- **Simboli a qualsiasi angolo.** Selezionare {{ui:Simboli a qualsiasi angolo}} prima di contare, per trovare anche i simboli ruotati di un angolo che non è retto. La ricerca ruota ogni simbolo ogni 15 gradi, e un simbolo non tondo può richiedere fino a sei volte più tempo.
- **Di cosa si tratta.** È un semplice confronto di simboli sulle proprie tavole, senza modello addestrato, e nulla lascia il computer. Su un set di 200 tavole di prova ha richiesto 9.4 secondi dall'inizio alla fine in Chrome su un desktop veloce; i set reali di planimetrie saranno più lenti. Vedi [Contare tutto nel set](topic:count-everything).

**Memoria dei prezzi dai lavori passati**

- **TakeoffCraft ricorda le tariffe.** Quando si salva un computo, ogni voce prezzata che viene usata è ricordata per nome e tipo: tariffa del materiale, tariffa della manodopera, sfrido e unità. Per ogni nome si conservano gli ultimi 12 lavori. Resta su questo computer accanto alla Libreria dei prezzi, mai dentro un file di computo, e nulla viene inviato da nessuna parte.
- **Avviare un nuovo computo da questa memoria.** {{ui:Prezzi}} nella barra degli strumenti mostra, per ogni voce, le tariffe dell'ultimo lavoro, le tariffe tipiche e l'intervallo. {{ui:Usa l'ultimo}} o {{ui:Usa il tipico}} prezzano una voce, e {{ui:Prezza N voci senza prezzo dalla memoria}} riempie ogni voce che non ha ancora un prezzo. Ogni uso è un passo di annullamento.
- **Lavori precedenti.** {{ui:Impara da un computo passato…}} ricorda le voci prezzate di un computo salvato (.json).
- **Vederla, cambiarla, dimenticarla.** {{ui:Tutto ciò che è memorizzato}} elenca ogni nome; il pulsante cestino dimentica un nome, e {{ui:Cancella tutti i prezzi}} dimentica tutto. Disattivare {{ui:Ricorda i prezzi quando salvo un computo}} per fermarla. Un prezzo a pezzo non viene mai messo su una voce a piede. Vedi [Memoria dei prezzi dai lavori passati](topic:price-memory).

**Scorte del fornitore e tempi di consegna**

- **Verificare con l'elenco di un fornitore.** {{ui:Fornitura}} nella barra degli strumenti accetta l'elenco delle scorte di un fornitore ({{ui:Aggiungi un file del fornitore…}}), un CSV o un foglio di calcolo, e confronta con esso ciò che il computo richiede, con lo sfrido. Vengono conservati fino a cinque file. Non si invia nulla e nulla chiede al fornitore: il file va aggiunto a mano.
- **Cosa dice.** Le voci in carenza compaiono per prime: "Mancano 120 EA", "Tempo di consegna 21 giorni", "In arretrato", "Unità diversa", "Nessun dato di scorta" oppure "Disponibile". {{ui:Attesa massima accettata (giorni)}} parte da 14.
- **Elenco d'ordine.** {{ui:Elenco d'ordine (CSV)}} scarica le voci in carenza con la quantità mancante, il fornitore e il tempo di consegna.
- **Prezzi nella Libreria.** Se il file contiene dei prezzi, {{ui:Prezzi nella Libreria}} imposta il prezzo del materiale di ogni voce della Libreria con lo stesso nome e la stessa unità. Per portarli nel computo, aggiornare i prezzi dalla Libreria.
- **Nel pannello dei problemi.** Una carenza è un avviso e una lunga attesa è una nota, sotto "Scorte del fornitore". Si può accettarne una indicando un motivo, e il motivo viene salvato nel computo. Vedi [Verificare le scorte del fornitore e i tempi di consegna](topic:supplier-stock).

**Assistenti IA**

- **Strumenti per tutti e tre.** Con gli assistenti consentiti in {{ui:Impostazioni}}, un assistente può leggere una legenda (`legend_open`), avviare il conteggio (`legend_count_start`, poi `legend_count_status` e `legend_count_result`) e aggiungerlo (`legend_count_add`, che può mostrare prima un'anteprima). Può leggere i prezzi memorizzati (`prices_list`) e prezzare le voci con essi (`prices_apply`, che può mostrare prima un'anteprima), e leggere la verifica del fornitore (`supply_check`). Aggiungere un file del fornitore resta un'operazione manuale. Vedi [Usare TakeoffCraft con gli assistenti IA](topic:use-with-ai-assistants).

**In ogni app**

- **Lingue.** Cinquantaquattro lingue in tutto; dieci sono nuove (lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili e uzbeco). Le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le ha lette.
- **Dispositivi di input.** {{ui:Impostazioni}} › {{ui:Globali}} › {{ui:Dispositivi di input}} imposta cosa fanno un trackpad, i pulsanti laterali di un mouse, una penna, un mouse 3D, un controller di gioco o un controller MIDI, per tutte le app o per una sola. Vedi [Usare un trackpad, un mouse 3D o un controller](common:input-devices).
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} offre {{ui:A capo}} (all'inizio), {{ui:2 righe}} e {{ui:1 riga}}; i gruppi che non entrano scorrono di lato. Vedi [Disporre i pannelli](common:arrange-panels).
- **Pannello dei problemi.** Il pannello condiviso di avvisi e note ora include la verifica delle scorte del fornitore descritta sopra, accanto alle altre verifiche.
- **Add-on.** Gli add-on seguono l'elenco dell'account. Vedi [Add-on e l'elenco dell'account](common:addons-basics).
- **Collegare l'IA.** CadCraft Studio è l'hub: l'assistente si collega una sola volta per tutte e otto le app. Studio non ha una propria IA.

### Corretto nella 0.8.1

- **Sezione delle classi DWG.** La sezione delle classi di un file DWG veniva letta come tipo errato. È corretta in TakeoffCraft e in altre quattro app.
- **Studio può cambiare lingua mentre è in esecuzione.** Prima Studio e le sue edizioni impacchettate erano solo in inglese. Non è stato provato sulla versione desktop su tutte le piattaforme; in caso di mancato cambio di lingua, va segnalato.

### Non ancora in questa versione

- **Non firmato digitalmente.** Windows può mostrare un avviso, e su Mac si fa clic destro e si sceglie {{ui:Aperta}} la prima volta. Le versioni per gli store (Microsoft Store, Google Play, App Store) sono in attesa, e la versione per iPad e iPhone non è stata ricompilata per la 0.8.1.
- **Aggiornamenti di Studio.** Il programma di installazione di Windows e i pacchetti Linux verificano una volta al giorno e chiedono prima di procedere. Lo zip portatile si limita a segnalarlo, e macOS e l'APK non si aggiornano da soli. Il file .dmg per macOS della 0.8 segue la versione.
- **Collegare l'IA.** Il collegamento con un clic dentro Studio, il connettore ospitato per l'IA nel browser, una propria chiave API dentro Studio e un pacchetto MCP pubblicato non sono previsti in questa versione.
- **Conta tutto.** Richiede simboli disegnati nello stesso modo della legenda, e un simbolo attraversato da un muro o da una linea lunga può non essere trovato. I simboli speculari non vengono trovati, e una tavola senza scala disegnata a un'altra dimensione viene cercata alla dimensione della legenda. Conviene verificare i risultati della prima tavola prima di fidarsi del resto.
- **Scorte del fornitore.** Le quantità in magazzino sono attendibili solo quanto il file aggiunto. La verifica non chiede mai al fornitore.
- **Lingue.** La barra dell'app in tamil trabocca.

Tutto il resto è in [Non ancora implementato](topic:not-built-yet). Per la versione precedente, vedi [Novità della 0.7](topic:whats-new-0-7).
