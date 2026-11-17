---
title: Cosa non è ancora implementato
summary: Funzioni di computo che questa build non ha, e come procedere oggi.
keywords: limiti, mancante, non ancora, roadmap, pianificato, soluzione alternativa, per tratta, cloud, desktop
from: 94ff90d0
---

TakeoffCraft è in sviluppo. Questo elenco riporta ciò che la build attuale non fa e come portare comunque a termine il lavoro.

## Misurazione

| Non ancora implementato | Oggi, invece |
|---|---|
| Inserire un punto nel mezzo di una tratta o di un contorno | Eliminare il segno e disegnarlo di nuovo. |
| Selezione a riquadro (finestra) | {{key:Shift}} + clic su ciascun segno, oppure {{key:Mod+A}} per tutti i segni della tavola. Vedere [Copia, incolla e duplica i segni](topic:copy-paste). |
| Ruotare, specchiare o riscalare una copia incollata | Incollare su una tavola alla stessa scala e con lo stesso orientamento; disegnare il resto a mano. |
| Leggere una scala da una tavola scansionata o da una barra grafica di scala | Scegliere la predefinita, oppure calibrare sulla lunghezza della barra. |
| Più di una scala per tavola (aree di dettaglio, piante ingrandite) | Misurare la parte alla scala della tavola, e computare il dettaglio sulla sua tavola ingrandita, se il set ne ha una. |

## Voci e prezzi

| Non ancora implementato | Oggi, invece |
|---|---|
| Formule di composizione che usano gli altri tipi di segni di una voce (le porte di una voce locale nelle formule del suo piano) | Le formule usano i totali del tipo principale; prezzare gli altri tipi nelle proprie righe. |
| Formule di composizione calcolate tratta per tratta | Le formule usano i totali della voce; usare `N` per gli extra per tratta. |
| Formule che usano le quantità di un'altra voce | Ripetere la misura in quella voce, oppure calcolarla nell'esportazione per foglio di calcolo. |
| Squadre sulle componenti di una composizione, o una giornata lavorativa diversa da 8 ore | Assegnare la squadra alla voce; leggere le giornate-squadra per una durata diversa come ore-squadra ÷ la propria giornata. |
| Annotazioni diverse da note, nuvole di revisione ed evidenziazioni (frecce, quote, timbri), o risposte su una nota | Scrivere nel testo della nota; cambiarne lo stato man mano che viene risolta. |
| Una libreria dei prezzi condivisa da un team, o conservata con il proprio account | La libreria è conservata in questo browser: esportarla come CSV e importarla sull'altro computer. |
| Pacchetti di categoria verificati da computisti in attività | Ogni pacchetto è un punto di partenza: verificarne le ipotesi con il proprio lavoro e i propri prodotti prima di prezzare. Vedere [Pacchetti di categoria](topic:trade-packs). |
| Prezzi nei pacchetti di categoria | I pacchetti portano solo composizioni: impostare le proprie tariffe, oppure importare il proprio listino come CSV. |
| Rinominare il computo | Il nome deriva dal primo PDF; rinominare i file scaricati. |
| Assegnare a mano il nome alle tavole | Le tavole sono nominate dalle etichette di pagina del PDF; cercare per nome file e pagina. |

## Disegni (DWG e DXF)

| Non ancora implementato | Oggi, invece |
|---|---|
| Tabelle degli stili di stampa, assegnazioni di penna e file CTB sulle tavole di un disegno | Un disegno è tracciato in nero, o nei suoi colori scuriti per la carta; gli spessori di linea derivano dal disegno. |
| Aprire un DXF binario, o un DWG anteriore ad AutoCAD 2000 | Salvarlo come DXF ASCII o come DWG più recente. |
| Trovare un disegno collegato (xref) dalla cartella in cui si trova | Aprire anche il file del disegno collegato, insieme al disegno principale: viene trovato per nome file tra i file aperti. |
| Misurare polilinee 3D, mesh, solidi e regioni | Contarli per layer e tipo, oppure misurare la vista in pianta con gli strumenti Lineare e Area. |
| Testo in un PDF segnato proveniente da un disegno in alfabeti diversi dal latino | I caratteri per cui Helvetica non ha un glifo vengono stampati come "?" nel PDF segnato; il disegno a schermo non cambia. |
| Passare un disegno a un'altra app dalla barra delle tavole | Aprire lo stesso file in quell'app. |
| Un disegno che porta il computo al suo interno, come fa {{ui:PDF con il computo incorporato}} per i PDF | {{ui:Salva computo}}: il `.takeoff.json` si riapre sullo stesso disegno, trovato dal suo contenuto. |
| Disegnare o contare sottofondi PDF, immagini e oggetti OLE inseriti in un disegno | Le immagini appaiono solo come riquadro. Aprire il PDF del sottofondo come tavola. |

## Conteggio automatico

| Non ancora implementato | Oggi, invece |
|---|---|
| Trovare simboli su una tavola senza scala, disegnati in un'altra dimensione | Assegnare alla tavola la sua scala, oppure cercarli con un riquadro disegnato lì. |
| Trovare simboli specchiati | Contarli a mano, oppure cercare di nuovo con un riquadro intorno a uno specchiato. |

## File e condivisione

| Non ancora implementato | Oggi, invece |
|---|---|
| Un solo PDF che mostri i segni e porti il computo | {{ui:PDF segnato}} per far vedere i segni; {{ui:PDF con il computo incorporato}} per riaprirlo in TakeoffCraft. |
| Un CSV delle quantità per tavola o dei segni | Usare {{ui:XLSX}}: i suoi fogli By sheet e Marks li contengono. |
| Archiviazione cloud | Non ancora disponibile. Salvare i file di progetto sul proprio computer e farne una copia di backup. |
| Un'app desktop separata di TakeoffCraft | Dalla 0.5 l'app desktop è CadCraft Studio, con tutte e otto le app in un'unica installazione. TakeoffCraft funziona anche nel browser. |

## Schermo e input

| Non ancora implementato | Oggi, invece |
|---|---|
| Un menu del tasto destro (o della pressione prolungata) | Usare la barra degli strumenti, i pannelli e i tasti. Una pressione prolungata termina una tratta o un contorno. |
| Ruotare la vista | Le pagine ruotate nel PDF appaiono già dritte. |

## Vista 3D

| Non ancora implementato | Oggi, invece |
|---|---|
| Disegnare o modificare segni in 3D | Tornare alla tavola ({{key:3}}) per disegnare; selezione ed eliminazione funzionano anche in 3D. |
| Allineare piani sovrapposti stampati in posizioni diverse sulle loro pagine | Sovrapporre piani stampati allo stesso modo; verificare gli altri una tavola alla volta. |
| Contare pali dimensionati come l'oggetto contato | Ogni palo di una tavola ha la stessa dimensione; indica dove si trova un conteggio, non di cosa si tratta. |

## Offerte

| Non ancora implementato | Oggi, invece |
|---|---|
| Addenda a un pacchetto già inviato, lettere di aggiudicazione, un foglio di ambito che ogni offerente firma | Inviare un nuovo pacchetto e redigere l'aggiudicazione a mano. [Inviare un pacchetto per offerte](topic:bid-invitations) descrive ciò che è disponibile. |
| Inviare inviti a offrire da qualsiasi account: mentre è in test, la posta agli offerenti esterni è disattivata, tranne che per gli account abilitati dal team di CadCraft | Scaricare il {{ui:CSV dell'ambito}}, inviarlo via e-mail e inserire le offerte. |
| Inviare pacchetti per offerte da una finestra di Studio | Inviare da TakeoffCraft nel browser. |
| Riprezzare l'area di offerta di una variante con un'offerta scelta | Varianti e subtotali dell'area di offerta usano i propri prezzi; regolare la variante a mano. |
| Promemoria automatici prima della scadenza dell'assicurazione o della licenza di un subappaltatore | La data è segnalata nella pagina Subappaltatori una volta scaduta o entro 30 giorni; verificarla quando si invita. |

## Pannelli

| Non ancora implementato | Oggi, invece |
|---|---|
| Spostare la tabella {{ui:Quantità}} | Solo i pannelli {{ui:Tavole}} e {{ui:Voci}} si spostano. Vedere [Disporre i pannelli](common:arrange-panels). |

## Fogli di calcolo

La cartella di lavoro XLSX è stata verificata in LibreOffice Calc, che ha ricalcolato ogni totale con gli stessi centesimi di TakeoffCraft. Non è ancora stata aperta in Excel. Se un programma di fogli di calcolo mostra qualcosa di inatteso, l'esportazione CSV contiene lo stesso preventivo come valori semplici.
