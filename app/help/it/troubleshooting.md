---
title: Risoluzione dei problemi
summary: Sintomi, cause e rimedi per i messaggi e le sorprese che si possono incontrare in TakeoffCraft, riportati come li mostra il programma.
keywords: problemi, errori, non funziona, rimedio, guida, rifiutato, non misura, nessuna scala, segni mancanti, esportazione non riuscita, offline, touch
from: cd319c9b
---

TakeoffCraft spiega la maggior parte dei rifiuti nella barra di stato in basso nella finestra. Cercare il messaggio qui sotto.

## Apertura dei file

| Messaggio o sintomo | Causa | Rimedio |
|---|---|---|
| Il lettore PDF non si è caricato. Ricaricare la pagina per riprovare. | Il lettore PDF dell'app non si è caricato, di solito perché si è offline e l'app non è mai stata salvata per l'uso offline. | Riconnettersi e ricaricare. Poi scegliere {{ui:Salva per l'uso offline}} e attendere {{ui:Pronto per l'uso offline}}; vedere [Uso offline](common:offline). |
| (nome) è protetto da password. Aprire una copia senza protezione. | Il PDF richiede una password per essere aperto. | Chiedere una copia senza protezione, oppure rimuovere la password con un programma PDF di fiducia. |
| (nome) non può essere letto come PDF (…) | Il file è danneggiato o non è davvero un PDF. | Scaricarlo di nuovo, oppure salvarlo di nuovo dal programma che lo ha creato. |
| (nome) è già aperto. | Lo stesso PDF (stesso contenuto) è aperto. | Nulla da fare. |
| TakeoffCraft apre i PDF e i progetti .takeoff.json. Saltati: … | Gli altri tipi di file sono stati scartati. | Convertire prima i disegni in PDF. |
| Non succede nulla quando si trascinano i file | I file sono stati trascinati fuori dalla finestra del browser, oppure il browser ha aperto il PDF in una nuova scheda. | Trascinare sulla pagina di TakeoffCraft stessa; il riquadro "Trascina PDF o un .takeoff.json" indica quando funzionerà. |
| L'apertura di una serie grande richiede tempo | Ogni PDF viene letto per intero per generarne l'impronta. | Attendere che scompaia il messaggio "Apertura di (nome)…". Le miniature compaiono man mano che si scorre. |

## Misurazione

| Messaggio o sintomo | Causa | Rimedio |
|---|---|---|
| Aprire prima un PDF. | Nessun foglio è aperto. | Aprire un PDF. |
| Questo foglio non ha ancora una scala, quindi non può essere misurato. Scegliere prima una scala predefinita o calibrare (i conteggi funzionano anche senza). | Gli strumenti lineare, area, cerchio e vuoto richiedono una scala. | [Impostare la scala](topic:set-the-scale). |
| Creare prima una voce lineare (dargli un nome sotto Voci), poi fare clic sul foglio. | Non esiste una voce di quel tipo. | Compilare il modulo {{ui:Nuova voce}} che si è aperto e scegliere {{ui:Aggiungi}}. |
| Selezionare prima una voce da inserire nel computo (pannello Voci). | La voce corrente è stata eliminata. | Fare clic su una voce sotto {{ui:Voci}}. |
| Una misura lineare richiede almeno due punti. | Si è terminato dopo un solo clic. | Fare clic in almeno due punti. |
| Un'area richiede almeno tre punti. | Troppo pochi angoli. | Fare clic in almeno tre angoli. |
| Il contorno si interseca da sé, quindi la sua area sarebbe errata. Disegnarlo di nuovo senza incroci. | Una forma a otto. | Disegnarlo come due aree, oppure percorrere il bordo in ordine. |
| Questi punti non racchiudono alcuna area. | Tutti i punti sono su una stessa linea. | Fare clic su angoli che racchiudano uno spazio. |
| Selezionare prima un segno di area (strumento Seleziona), poi scegliere {{ui:Vuoto}} e disegnare il foro al suo interno. | {{ui:Vuoto}} richiede un'area selezionata. | Premere {{key:V}}, fare clic sull'area, poi {{key:X}}. |
| Un vuoto deve stare interamente dentro l'area. | Il foro attraversa o esce dal contorno. | Disegnare il foro all'interno dell'area. |
| I vuoti non possono sovrapporsi tra loro. | Due fori si sovrappongono. | Disegnare un solo foro attorno a entrambi, oppure tenerli separati. |
| … Il punto è stato rimesso a posto. | Un angolo trascinato farebbe incrociare il contorno o spingerebbe un foro fuori. | Trascinare in un punto che mantenga la forma valida. |
| Fare clic su un punto del bordo del cerchio, lontano dal centro. | Il secondo clic era troppo vicino al centro. | Fare clic più lontano. |
| I clic spostano il foglio invece di aggiungere punti | Il puntatore si è spostato di più di qualche pixel mentre il pulsante era premuto; questo conta come trascinamento. | Fare clic senza muoversi, soprattutto con un trackpad. |
| Shift non aggancia | Si sta posizionando un punto su un arco, o si sta disegnando un cerchio. | Lo snap a 45° si applica solo ai segmenti rettilinei. |
| I punti saltano su una linea vicina | Snap alle linee del disegno è attivo. | Ingrandire per fare clic tra le linee, oppure premere {{key:F3}} per disattivare Snap. |
| Non compare nessun segno di snap | Snap è disattivato, il foglio è una scansione, oppure lo strumento non aggancia (Conteggio, Conteggio automatico, incolla). | Premere {{key:F3}}; su una scansione non ci sono linee a cui agganciarsi. |
| La lunghezza è errata | La scala è errata (spesso un PDF ridimensionato con una scala predefinita). | Usare {{ui:Verifica}} su una quota nota, poi {{ui:Calibra}}. |

## Scala

| Messaggio o sintomo | Causa | Rimedio |
|---|---|---|
| Scegliere due punti più distanti tra loro. | I punti di calibrazione sono quasi sovrapposti. | Calibrare su una quota più lunga. |
| Un messaggio nella finestra di calibrazione, come "Impossibile leggere quella distanza" | La distanza è in una forma che TakeoffCraft non sa leggere. | Vedere [Inserimento di lunghezze, tariffe e percentuali](topic:entry-formats). |
| Questo foglio non ha ancora una scala, quindi non c'è nulla da verificare. Calibrarlo oppure scegliere una scala predefinita. | {{ui:Verifica}} su un foglio senza scala. | Impostare prima una scala. |
| L'elenco {{ui:Predefinita}} è in grigio | Nessun foglio è aperto. | Aprire un PDF. |

## Quantità e formule

| Messaggio o sintomo | Causa | Rimedio |
|---|---|---|
| Incompleto: … (non incluso nei totali) | Un errore nella formula, oppure segni su fogli senza scala. | Vedere [Leggere le quantità e il preventivo](topic:read-quantities#the-incomplete-warning). |
| +(n) senza scala accanto a una voce | Alcuni suoi segni sono su fogli senza scala. | Dare una scala a quei fogli. |
| Errore di formula: … | La formula non può essere calcolata. | Vedere [Linguaggio delle formule](topic:formulas#errors). |
| Questa voce ha segni, quindi il suo tipo non può cambiare. | Il tipo è bloccato quando ci sono segni. | Creare una nuova voce dell'altro tipo e ridisegnare i segni con quella. |
| Una voce deve avere un nome. | Il campo del nome è stato svuotato. | Digitare un nome. |
| Digitare un importo come 12.50. / Digitare una percentuale come 10 o 7.5. | Una tariffa o uno sfrido non è stato letto. | Vedere [Inserimento di lunghezze, tariffe e percentuali](topic:entry-formats). |
| Un totale sembra raddoppiato | La voce ha tariffe proprie e componenti che riportano lo stesso costo. | Impostare a 0 le tariffe proprie della voce quando i suoi componenti riportano il costo. |
| I segni di questa voce sono su PDF che non sono aperti. | Si è fatto clic su una voce i cui segni sono tutti su PDF non aperti. | Aprire quei PDF; i loro nomi sono elencati sotto {{ui:Tavole}}. |

## Conteggio automatico

| Messaggio o sintomo | Causa | Rimedio |
|---|---|---|
| Quel riquadro è troppo piccolo. Disegnarlo attorno all'intero simbolo. | Il riquadro è minuscolo. | Ingrandire e racchiudere l'intero simbolo. |
| Quel riquadro è quasi vuoto. Disegnarlo attorno a un simbolo. | Il riquadro contiene solo carta. | Racchiudere il simbolo stesso. |
| Nessuna corrispondenza. Abbassare il cursore {{ui:Corrispondenza}}, oppure racchiudere il simbolo più strettamente. | Nessun elemento ha ottenuto un punteggio sufficiente. | Racchiudere il simbolo più strettamente, oppure trascinare il cursore {{ui:Corrispondenza}} più in basso. |
| Troppe corrispondenze, inclusi simboli errati | Simboli simili ottengono un punteggio vicino a quello reale. | Alzare il cursore {{ui:Corrispondenza}} e fare clic sui riquadri sbagliati per rifiutarli. |
| Corrispondenze mancanti su altri fogli | Quei fogli disegnano il simbolo a un'altra dimensione, o con un angolo che non è un passo di 90°. | Cercare su quei fogli con un riquadro disegnato lì, oppure contare a mano. |
| (n) fogli erano troppo grandi per essere cercati con questa dimensione del simbolo. | Il foglio risulterebbe troppo grande alla dimensione di lavoro. | Racchiudere un simbolo più grande, oppure contare quel foglio a mano. |
| La ricerca non è riuscita: … | La ricerca in background si è interrotta. | Riprovare; ricaricare la pagina se si ripete (salvare prima). Offline funziona solo quando la barra dell'app mostra {{ui:Pronto per l'uso offline}}. |
| Il trascinamento disegna un riquadro invece di spostare la vista | È così che funziona {{ui:Conteggio automatico}}. | Tenere premuto {{key:Space}} e trascinare, oppure trascinare con il pulsante centrale. |

## Salvataggio ed esportazione

| Messaggio o sintomo | Causa | Rimedio |
|---|---|---|
| Nulla da esportare: creare una voce e inserirla nel computo. | Non ci sono voci. | Creare prima una voce. |
| Nessun segno sui PDF aperti. | {{ui:PDF segnato}} non ha nulla da disegnare sui PDF aperti. | Aprire i PDF che hanno segni. |
| Questo PDF è protetto da password o cifrato, quindi non si può scrivere una copia con segni. … | Il PDF è cifrato. | Esportare {{ui:XLSX}} al suo posto, oppure usare una copia non cifrata del PDF (che richiede poi un suo computo, perché è un file diverso). |
| Il PDF segnato non è stato scritto: … | Spesso: si è offline e l'app non è stata salvata per l'uso offline, quindi manca lo scrittore PDF. | Tornare online e scegliere di nuovo {{ui:PDF segnato}}. Per evitarlo, scegliere {{ui:Salva per l'uso offline}} e attendere {{ui:Pronto per l'uso offline}}. |
| È stato scaricato un solo PDF segnato | Il browser ha bloccato più download contemporanei. | Consentire più download per questo sito ed esportare di nuovo. |
| (file) non è un progetto TakeoffCraft (non è JSON valido). / Questo non è un file di progetto TakeoffCraft. | File sbagliato, oppure danneggiato. | Selezionare il file `.takeoff.json`. |
| Questo progetto è stato salvato da una versione più recente di TakeoffCraft. Aprirlo lì. | Il file proviene da una build più recente. | Aprirlo nella build più recente. |
| (n) segni erano danneggiati e sono stati esclusi. | Una parte del file è danneggiata o è stata modificata a mano. | Il resto è stato aperto. Ridisegnare i segni mancanti, oppure aprire una copia precedente. |
| Segni mancanti dopo la riapertura | I PDF non sono aperti, oppure uno di essi è cambiato. | Vedere [Salvare e riaprire un computo](topic:save-and-reopen#when-a-pdf-has-changed). |
| Il browser chiede "Lasciare il sito?" | Ci sono modifiche non salvate. | Restare nella pagina e salvare con {{key:Mod+S}}. |

## Tasti e mouse

| Sintomo | Causa | Rimedio |
|---|---|---|
| I tasti lettera non fanno nulla | Il cursore è in un campo (ricerca, editor delle voci, tabella). | Fare clic sul foglio, oppure premere {{key:Tab}} per uscire dal campo. |
| La rotellina ingrandisce invece di scorrere | La rotellina ingrandisce sempre il foglio. | Trascinare per spostare la vista. |
| L'intera pagina si è ingrandita o rimpicciolita | Zoom del browser ({{key:Mod+Plus}} o {{key:Mod+Minus}}). | Premere {{key:Mod+0}}. Ingrandire il foglio con la rotellina o con {{key:Plus}} e {{key:Minus}} senza modificatori. |
| Un segno è scomparso premendo Backspace | Backspace elimina il segno selezionato quando non si sta disegnando. | {{key:Mod+Z}} lo riporta indietro. |
| Il clic destro non termina su Mac | Il clic con Control arriva come clic normale. | Usare un clic con due dita con il clic secondario attivo, oppure premere {{key:Enter}}. |

## Schermi touch

Su uno schermo touch:

- **Il tocco** inserisce un punto (o seleziona un segno con {{ui:Seleziona}}). Un dito che trascina sposta la vista.
- **Due dita** pizzicano per ingrandire attorno al punto tra di esse, e spostano la vista quando si muovono insieme. Appoggiare un secondo dito annulla ciò che il primo aveva iniziato, così un pizzico non lascia mai un punto.
- **Terminare** una misura lineare o un contorno con una **pressione prolungata** (il clic destro), un **doppio tocco**, oppure {{ui:Fine}} nella barra in basso del foglio. La stessa barra ha {{ui:Indietro}} (riprende l'ultimo punto) e {{ui:Annulla}}. Le aree si chiudono anche toccando il primo punto.
- Le dita hanno bersagli più grandi: i punti si agganciano, si chiudono e si selezionano da più lontano, e le maniglie degli angoli sono più grandi.

Digitare le lunghezze richiede una tastiera; la tastiera a schermo funziona quando la casella {{ui:Digita}} è attiva.

Su un tablet, una tastiera e un mouse o trackpad rendono il computo molto più semplice.

## Uso offline

| Pulsante o sintomo | Causa | Rimedio |
|---|---|---|
| {{ui:Salvataggio non riuscito}} | Alcuni file dell'app non sono stati scaricati durante il salvataggio per l'uso offline. | Controllare la connessione e scegliere di nuovo il pulsante. |
| {{ui:Offline non disponibile}} | Le finestre private e alcuni computer gestiti bloccano le copie offline. | Usare una finestra normale, oppure un altro browser. |
| "Salvataggio…" non parte mai | Si è offline; il salvataggio richiede una connessione. | Salvare mentre si è online. |
| L'app è vecchia dopo un aggiornamento | La copia offline è di un giorno precedente. | Online, scegliere {{ui:Pronto per l'uso offline}}, poi {{ui:Salva di nuovo (scarica la versione più recente)}}. |
| Si vuole recuperare lo spazio | La copia offline occupa circa 6 MB. | Scegliere {{ui:Pronto per l'uso offline}}, poi {{ui:Rimuovi la copia offline}}. |

Vedere [Uso offline](common:offline).

## Altri problemi

Ricaricare la pagina se l'app smette di rispondere. Il computo va perso al ricaricamento se non è stato salvato, quindi salvare prima con {{key:Mod+S}} se possibile. Per domande sul browser vedere [Browser e computer](common:browsers).
