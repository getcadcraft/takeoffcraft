---
title: Verificare le scorte e i tempi di consegna dei fornitori
summary: Aggiungere l'elenco delle scorte di un fornitore (CSV o foglio di calcolo) e TakeoffCraft verifica contro di esso ciò che serve al computo, con lo sfrido: quanto è disponibile e quanto dura l'attesa. Carenze e attese lunghe compaiono nel pannello Problemi.
keywords: fornitore, venditore, scorte, disponibile, tempo di consegna, disponibilità, carenza, ordine arretrato, elenco ordine, csv, sku, materiali, fornitura, problemi
from: f11160fb
---

{{ui:Fornitura}} sulla barra degli strumenti (il camion) verifica ciò che serve al computo rispetto all'elenco delle scorte di un fornitore. Le righe del fornitore che contano vengono conservate nel file del computo stesso. Non si invia nulla da nessuna parte e non si interroga alcun fornitore: il file va fornito direttamente.

## Il file

Un file CSV con una riga di intestazione. Servono una colonna di nome o SKU e una colonna di scorta o tempo di consegna. Queste intestazioni vengono riconosciute (in qualsiasi ordine e senza distinzione tra maiuscole e minuscole): Item, Name, Description o Product; SKU, Part o Item #; In stock, On hand, Available o Quantity; Lead time o Delivery days; Unit o UOM; Price o Cost; Supplier o Vendor.

- La scorta può essere un numero (1,200), "In stock" o "Out of stock".
- Il tempo di consegna può essere "5 days", "2 weeks", "2-3 weeks" (si usa il valore più lungo), "3 months", "same day" o "backorder". Un numero semplice è nell'unità dell'intestazione (giorni, salvo che l'intestazione indichi settimane o mesi).
- I file Excel non vengono letti: salvare prima il foglio come CSV.

## Verificare il computo

1. Scegliere {{ui:Fornitura}}, poi {{ui:Aggiungi un file del fornitore…}} e selezionare il CSV. È possibile aggiungerne più di uno: fino a cinque file, con 2,000 righe conservate in tutto, prima quelle che corrispondono alle voci.
2. Ogni voce, condizione secondaria e parte di composizione con una quantità viene associata a una riga per nome, o per SKU nel suo nome. Un nome simile (uno contenuto nell'altro) viene usato quando manca quello esatto, e il programma lo segnala.
3. In {{ui:Ciò che serve al computo}} compaiono per primi quelli in carenza: "Mancano 120 EA", "Tempo di consegna 21 days", "In arretrato", "Unità diversa", "Scorta non indicata" o "Disponibile". Il fabbisogno include lo sfrido. Un'unità del fornitore diversa da quella della stima (una tonnellata contro un piede) viene segnalata e non viene mai confrontata. Ogni riga ha {{ui:Seleziona la voce}}, che porta alla voce.
4. Impostare {{ui:Attesa massima accettata (giorni)}} (predefinito 14). Una voce non disponibile la cui attesa supera questo valore viene segnalata, e il riepilogo indica l'attesa più lunga che conta.
5. {{ui:Elenco d'ordine (CSV)}} scarica le voci in carenza con la quantità mancante, il fornitore e il tempo di consegna. {{ui:Escludi}} toglie un fabbisogno dalla verifica (è un'operazione annullabile).

## File di fogli di calcolo e Libreria dei prezzi

L'elenco di un fornitore può essere una cartella di lavoro Excel (.xlsx) oltre che un CSV: viene letto il primo foglio, con gli stessi nomi di colonna. Le formule non vengono mai eseguite: si legge il valore contenuto nel file.

Una volta aggiunto un file con i prezzi, {{ui:Prezzi nella Libreria}} nella finestra imposta il prezzo del materiale di ogni voce della [Libreria](topic:price-library) che il file prezza: stesso nome e unità uguale (o non indicata). Manodopera, sfrido, altezza e composizioni restano invariati, e la nota della voce indica da quale file proviene il prezzo. Una voce in metri non viene prezzata da un elenco in piedi, e una voce senza nome corrispondente resta invariata; la riga di stato indica quante voci sono state saltate per l'unità. Ricalcolare dalla Libreria per portare i nuovi prezzi in questo computo.

## Nel pannello Problemi

Una carenza è un avviso e un'attesa lunga è una nota, nel pannello Problemi condiviso ("Scorte fornitore"), quindi stanno insieme a ogni altra verifica. È possibile accettarne una indicando un motivo, e l'accettazione viene salvata nel computo.

## Con l'assistente

Se in {{ui:Impostazioni}} sono consentiti gli assistenti, possono leggere la verifica (supply_check). Aggiungere un file del fornitore è compito dell'utente.

## Da sapere

I dati sulle scorte sono aggiornati solo quanto il file che si aggiunge. Per aggiornarli, aggiungere di nuovo il file: un file con lo stesso nome sostituisce quello precedente.
