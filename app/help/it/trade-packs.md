---
title: Pacchetti di categoria
summary: Aggiungere composizioni gratuite per una categoria alla Libreria dei prezzi, rimuoverle con un solo passaggio e condividere la propria libreria come pacchetto.
keywords: pacchetto di categoria, pacchetto, composizioni, modelli, voci iniziali, elettrico, cartongesso, struttura, tinteggiatura, calcestruzzo, pavimenti, muratura, copertura, rivestimento esterno, carpenteria, idraulica, hvac, isolamento, paesaggio, pavimentazione esterna, impresa generale, csi, masterformat, cc0, aggiungi, rimuovi, condividi
from: d3c036be
---

Un **pacchetto di categoria** è un insieme di voci pronte per una categoria: ciascuna con la sua unità, la sua altezza o profondità, il suo sfrido e la sua **composizione**, cioè le parti e le formule che trasformano una misura lineare, un'area o un conteggio in materiali. Una parete in cartongesso, per esempio, porta con sé guide, montanti, lastre, viti, nastro e stucco.

I pacchetti vengono aggiunti alla propria [Libreria dei prezzi](topic:price-library), e da lì si aggiungono le voci a qualsiasi computo.

## Aggiungere un pacchetto

1. Aprire {{ui:Libreria}} in alto nel pannello {{ui:Voci}}, poi {{ui:Pacchetti di categoria…}}.
2. Scegliere le {{ui:Unità}}: imperiali (LF, SF), metriche (m, m²) o entrambe. Ogni composizione è disponibile in entrambi i sistemi.
3. Scegliere {{ui:Aggiungi}} accanto a un pacchetto.

Le voci del pacchetto compaiono nella libreria, con il nome del pacchetto come etichetta. Per usarle, selezionarle nella libreria e scegliere {{ui:Aggiungi al computo}}.

:::note
**Un pacchetto non porta prezzi.** Le sue voci mostrano "imposta la tariffa" nella libreria. Le tariffe sono dell'utente: si digitano nella libreria o nell'editor delle voci, oppure si importa il proprio listino come CSV e si usa {{ui:Aggiorna i prezzi}}.
:::

Se nella libreria si ha già una voce con lo stesso nome e tipo, il pacchetto lascia invariata quella propria. Aggiungere di nuovo un pacchetto sostituisce le sue voci con la nuova versione.

## Rimuovere un pacchetto

In {{ui:Pacchetti di categoria…}}, scegliere {{ui:Rimuovi}} accanto a un pacchetto aggiunto, poi di nuovo per confermare. Ogni voce proveniente dal pacchetto esce dalla libreria in un solo passaggio. Le voci già aggiunte a un computo restano in quel computo.

## Che cosa contiene un pacchetto

Scegliere {{ui:Fonti e dettagli}} sotto un pacchetto per vedere da che cosa è stata scritta ciascuna composizione: norme edilizie, standard e guide di posa delle associazioni di categoria. Nella libreria, tenere il puntatore su una voce per leggerne le fonti e le ipotesi, come l'interasse dei montanti o la resa di una vernice. Verificarle con il proprio lavoro e con le schede tecniche dei prodotti, e modificare le formule dove differiscono (vedere [Composizioni e formule](topic:assemblies)).

Ogni pacchetto è contrassegnato **Starter: non ancora revisionato da uno stimatore** finché non lo hanno revisionato stimatori in attività.

Ogni voce riporta anche il suo numero CSI MasterFormat, come `09 21 16`.

## Condividere la propria libreria come pacchetto

{{ui:Esporta come pacchetto…}} nella libreria salva la libreria come file di pacchetto (`.ccpack.json`) che chiunque può aggiungere con {{ui:Apri un file di pacchetto…}}. Per impostazione predefinita esclude le voci provenienti dai pacchetti aggiunti e non contiene tariffe. Selezionare {{ui:Includi le tariffe proprie come tariffe di esempio}} per inviare anche le proprie tariffe: vengono inviate con la regione e la data che si indicano, e chi aggiunge il pacchetto sceglie se usarle.

I file di pacchetto sono solo dati, mai programmi. TakeoffCraft verifica ogni parte di un file prima di usarlo ed esclude quanto non sa leggere.
