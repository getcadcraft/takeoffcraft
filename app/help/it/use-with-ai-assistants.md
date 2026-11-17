---
title: Usa TakeoffCraft con un assistente IA
summary: Consentire al proprio assistente IA o a uno script di leggere quantità e stima del computo, aggiungere voci e segni, contare e misurare su un DWG o DXF, ed esportare: permessi, collegamento tramite CadCraft Studio e registro delle attività.
keywords: ia, assistente, agente, mcp, model context protocol, script, automazione, quantità, stima, permessi, disconnetti, attività
from: 7fa62ec6
---

## Obiettivo

Come consentire a un assistente IA (o a uno script scritto) di lavorare con TakeoffCraft, e come decidere su cosa gli è permesso intervenire.

TakeoffCraft **non ha un'IA propria** e non invia nulla a nessuno. L'assistente va fornito dall'esterno: un qualsiasi programma che parla il Model Context Protocol (MCP). TakeoffCraft gli offre solo strumenti, e si sceglie quali.

## Attivazione

1. Aprire {{ui:Impostazioni}} (l'ingranaggio nella barra dell'app, oppure {{key:Mod+,}}) e passare alla scheda {{ui:TakeoffCraft}}.
2. Sotto {{ui:Assistenti}}, selezionare la casella **Consenti agli assistenti IA e agli script di usare TakeoffCraft**. Finché non lo si fa, è disattivata.
3. Scegliere cosa l'assistente può fare: **Lettura** è selezionata all'inizio; selezionare **Modifica**, **Salva** o **Esporta** solo quando servono.

Gli strumenti fuori dai permessi selezionati non vengono offerti all'assistente; se questo ne chiede comunque uno, TakeoffCraft lo rifiuta e lo annota nel registro delle attività. Disattivare l'interruttore chiude subito ogni collegamento; {{ui:Reimposta impostazioni di TakeoffCraft}} lo disattiva anch'esso.

## Collegare l'assistente

Gli assistenti si collegano tramite **CadCraft Studio** sul computer: Studio avvia un piccolo server raggiungibile solo da questo computer, protetto da un token che genera ogni volta che si avvia. In Studio, scegliere {{ui:Collega un assistente}} e copiare indirizzo e token nell'assistente (Studio mostra le impostazioni esatte da incollare). Non va mai condiviso il token.

:::note
Una scheda del browser non può aprire un collegamento per un assistente: nelle app nel browser l'interruttore non ha effetto finché non si usa CadCraft Studio sul computer.
:::

## Il controllo resta all'utente

- **Ogni modifica è un'unica operazione di annullamento**, etichettata con il nome che l'assistente le dà (per esempio "Assistente: …"). {{key:Mod+Z}} annulla nel suo insieme l'ultima modifica dell'assistente.
- **Si sa quando un assistente è collegato.** Un pulsante nella barra dell'app riporta il nome dell'assistente finché è collegato; fare clic su di esso per vedere cosa può fare, o per **Disconnetti**.
- **Attività.** {{ui:Impostazioni}} › {{ui:TakeoffCraft}} › {{ui:Assistenti}} › {{ui:Attività}} elenca ogni chiamata: quando, quale strumento, eseguita o rifiutata. {{ui:Salva il registro}} ne conserva una copia.

## Cosa può chiedere un assistente

| Strumento | Permesso | Cosa fa |
|---|---|---|
| `app_info`, `sheets_list` | Lettura | Il computo aperto, i suoi PDF e tavole, la scala e i segni di ciascuna tavola |
| `items_list` | Lettura | Le voci con unità, prezzi unitari e formule delle composizioni |
| `takeoff_quantities` | Lettura | Quantità per voce o per tavola; i segni su tavole senza scala sono elencati, mai conteggiati come zero |
| `takeoff_estimate` | Lettura | Il preventivo a prezzi, come lo calcola TakeoffCraft, con i suoi totali |
| `takeoff_export` | Esporta | L'esportazione CSV o XLSX propria di TakeoffCraft |
| `items_add` | Modifica | Aggiunge voci con unità, prezzi unitari e sfrido |
| `marks_add` | Modifica | Misura tratti, aree e conteggi su una tavola. Lunghezze e aree solo su una tavola con scala, mai su una tavola senza scala |
| `cad_sheets`, `cad_catalog`, `cad_count` | Lettura | Su un DWG o DXF aperto: le sue tavole e le scale, cosa si può contare (blocchi, layer e tipi, testi) e i conteggi esatti, come li produce {{ui:Conteggio CAD}} ([Conta da un disegno](topic:count-from-a-drawing)) |
| `cad_count_add` | Modifica | Conta nel disegno e mette un segno di conteggio su ogni oggetto trovato, in un solo passaggio; contare di nuovo aggiunge solo ciò che è nuovo |
| `cad_measure` | Modifica | Misura una voce lineare o di area dalle linee, archi, polilinee e tratteggi del disegno, come fa {{ui:Misura disegno}} ([Misura da un disegno](topic:measure-from-a-drawing)); solo su una tavola con scala |
| `usd_export` | Esporta | I tratti, le aree e i conteggi misurati di una tavola con scala come modello di verifica 3D in USD (`.usdz`, `.usda` o `.usdc`), come lo scrive {{ui:Pacchetto USD (.usdz)}} nella vista di verifica 3D ([Esporta la vista di verifica 3D come USD](topic:usd)) |

Con **Modifica** selezionata, un assistente aggiunge voci e segni (ogni chiamata è un'unica operazione di annullamento); non può spostare, modificare o eliminare i segni già presenti.

Le stesse quantità e la stessa stima sono disponibili senza aprire TakeoffCraft: il server MCP di CadCraft apre un file `.takeoff.json` in una cartella indicata (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), e `cadcraft info Job.takeoff.json` le stampa a riga di comando. Apre anche un DWG o DXF come nuovo computo sulle sue tavole (con la scala ricavata dal disegno, come la imposta TakeoffCraft), conta e misura su di esso con gli stessi strumenti `cad_*`, aggiunge voci e salva il computo (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` conta da riga di comando.

## Se qualcosa non funziona

- **L'assistente non vede gli strumenti di TakeoffCraft:** verificare che l'interruttore sia attivo in questa finestra e che la finestra sia aperta in Studio.
- **"serve il permesso di esportazione":** selezionare **Esporta** sotto {{ui:Assistenti}}, poi richiedere di nuovo.
- **Errori "401" o "token":** il token è cambiato (Studio è stato riavviato, oppure {{ui:Nuovo token}}). Copiare il nuovo token nelle impostazioni dell'assistente.

## Vedi anche

- [Ricette per assistenti IA](common:assistants-recipes): esempi svolti, ciascuno con gli strumenti che richiama.
