---
title: I file che TakeoffCraft apre e salva
summary: PDF in ingresso, un file di progetto del computo, fogli di calcolo e PDF segnati in uscita - che cosa contiene ciascuno, dove va e che cosa cambia online, offline e tra i browser.
keywords: file, formati, pdf, takeoff.json, file di progetto, xlsx, csv, pdf segnato, download, salvare, aprire, offline
from: 1bf9be65
---

## Che cosa apre

| File | Come | Note |
|---|---|---|
| PDF (`.pdf`) | {{ui:Apri PDF}}, {{key:Mod+O}} oppure trascinamento sulla pagina | Anche più file insieme. Ogni pagina diventa una tavola. |
| Progetto di computo (`.takeoff.json`) | {{ui:Apri computo}} oppure trascinamento sulla pagina | Voci, scale e segni. Si può trascinare insieme ai suoi PDF. |

Gli altri file trascinati sulla pagina vengono ignorati e la barra di stato ne riporta i nomi.

- **I PDF protetti da password** non si aprono: "(nome) è protetto da password. Aprire una copia non protetta."
- **Lo stesso PDF due volte** viene aperto una sola volta: "(nome) è già aperto." TakeoffCraft riconosce i file dal contenuto, non dal nome.
- **I PDF scansionati** si aprono e si misurano come gli altri; TakeoffCraft non ha bisogno del testo nel PDF.
- **Set di tavole molto grandi**: ogni PDF viene letto per intero all'apertura (per calcolarne l'impronta), quindi un file molto grande richiede un po' di tempo. Le miniature vengono disegnate una alla volta durante lo scorrimento.

## Che cosa salva

Ogni salvataggio è un download. Nei PDF non viene scritto nulla.

| Scelta | Risultato | Contenuto |
|---|---|---|
| {{ui:Salva computo}} | `(nome).takeoff.json` | Voci, composizioni, prezzi, scale delle tavole e ogni segno, associati a ciascun PDF tramite il suo contenuto. Nessuna pagina di PDF. |
| {{ui:XLSX}} | `(nome).xlsx` | Quattro fogli di lavoro: Preventivo (con formule attive), Per tavola, Segni, Scale. |
| {{ui:CSV}} | `(nome).csv` | Il preventivo come semplici valori, una riga per voce e per componente. |
| {{ui:PDF segnato}} | `(nome del PDF) (computo).pdf` | Una copia di ogni PDF aperto che contiene segni, con il computo disegnato sulle pagine e una legenda. Un file per PDF. |

Il nome deriva dal primo PDF aperto in questo computo. Non esiste ancora un campo per rinominare: rinominare il file scaricato per usare un altro nome.

Vedere [Esportare il preventivo e un PDF segnato](topic:export-estimate) e [Colonne di esportazione](topic:export-columns).

## Dove vanno i download

Il browser li salva dove salva ogni download, di solito nella cartella Download. Si trova in {{pick:mac=Finder|windows=Esplora file|linux=il gestore di file}}. Se il browser è impostato per chiedere dove salvare ogni file, lo chiede.

:::chromium
{{ui:PDF segnato}} con più PDF segnati scarica più file contemporaneamente. Chrome ed Edge possono chiedere una volta se questo sito può scaricare più file. Scegliere Consenti.
:::

:::safari
Safari salva in Download, a meno che la posizione dei download non sia stata cambiata nelle Impostazioni di Safari, in Generali.
:::

## Perché il file di progetto e i PDF sono separati

Il file `.takeoff.json` contiene solo il computo. Ritrova i suoi PDF dal contenuto (un'impronta di ciascun file), quindi:

- Rinominare o spostare un PDF non ha importanza.
- Un PDF modificato o salvato di nuovo da un altro programma conta come un file diverso, anche con lo stesso nome.
- I segni sui PDF non aperti contano comunque nei totali.

Vedere [Salvare e riaprire un computo](topic:save-and-reopen).

## Online e offline

I PDF e i computi non lasciano mai il computer, online o offline. La connessione serve solo per caricare TakeoffCraft stesso.

Per lavorare senza connessione, salvare prima l'app, mentre si è online:

1. Scegliere {{ui:Salva per l'uso offline}} nella barra dell'app in alto.
   Il pulsante conta man mano, "Salvataggio di 12 su 40", durante il salvataggio.
2. Attendere {{ui:Pronto per l'uso offline}}.

Salvando TakeoffCraft si conservano nel browser l'app, questa guida, il lettore di PDF, il programma di scrittura dei PDF usato da {{ui:PDF segnato}} e il processo del conteggio automatico, circa 6 MB. Quando compare {{ui:Pronto per l'uso offline}}, tutto funziona offline: apertura dei PDF, misura, {{ui:Conteggio automatico}}, {{ui:Salva computo}}, {{ui:XLSX}}, {{ui:CSV}} e {{ui:PDF segnato}}.

| Il pulsante riporta | Significato |
|---|---|
| {{ui:Salva per l'uso offline}} | Non ancora salvato in questo browser. Sceglierlo per salvare. |
| Salvataggio di (n) su (m) | Salvataggio in corso. |
| {{ui:Pronto per l'uso offline}} | Salvato. Sceglierlo per {{ui:Salva di nuovo (scarica la versione più recente)}} oppure {{ui:Rimuovi la copia offline}}. |
| {{ui:Salvataggio non riuscito}} | Alcuni file non sono stati scaricati. Controllare la connessione e sceglierlo di nuovo. |
| {{ui:Offline non disponibile}} | Questa finestra del browser non può conservare una copia offline (le finestre private e alcuni computer gestiti la bloccano). |

Altre informazioni, compresa la durata di una copia salvata in ciascun browser: [Lavorare offline](common:offline).

:::offline
Si è offline. Se la barra dell'app riporta {{ui:Pronto per l'uso offline}}, tutto funziona. In caso contrario, le parti che TakeoffCraft non ha ancora caricato in questa scheda (il programma di scrittura dei PDF per {{ui:PDF segnato}}, il processo del conteggio automatico) non possono essere caricate ora, e {{ui:PDF segnato}} si interrompe con "Impossibile scrivere il PDF segnato". Il computo è al sicuro in ogni caso: {{ui:Salva computo}}, {{ui:XLSX}} e {{ui:CSV}} non richiedono connessione. Non ricaricare la scheda finché non si è di nuovo online.
:::

:::online
Si è online. Prima di un sopralluogo o di un volo, scegliere {{ui:Salva per l'uso offline}} e attendere {{ui:Pronto per l'uso offline}}.
:::

## Fogli di calcolo

L'XLSX conserva le formule attive, quindi un programma di fogli di calcolo ricalcola il preventivo all'apertura del file e lo mantiene corretto quando si modificano lì un prezzo o lo sfrido. La cartella di lavoro è stata verificata in LibreOffice Calc, che ha ricalcolato ogni totale con lo stesso centesimo. Non è ancora stata aperta in Excel.

Il CSV contiene semplici valori con un indicatore di ordine dei byte, così i programmi di fogli di calcolo leggono correttamente caratteri come m².

## Desktop e cloud

:::desktop
Dalla 0.5 l'app desktop è CadCraft Studio: TakeoffCraft e le altre sette app in un'unica installazione. Non esiste un programma di installazione separato di TakeoffCraft.
:::

Il salvataggio nel cloud non è ancora disponibile. Conservare i file `.takeoff.json` insieme ai PDF del lavoro ed eseguirne il backup come per qualsiasi altro file. Vedere [Dove vanno i file](common:your-files).
