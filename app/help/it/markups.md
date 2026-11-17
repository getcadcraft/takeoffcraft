---
title: Note, nuvole ed evidenziazioni
summary: Segnalare domande e modifiche sulle tavole con note, nuvole di revisione ed evidenziazioni, seguirne lo stato come aperta, con risposta o chiusa, e inviarle nel PDF annotato.
keywords: annotazione, annotazioni, nota, commento, domanda, rfi, nuvola, nuvola di revisione, evidenziazione, stato, aperta, risposta, chiusa, revisione, elenco annotazioni
from: 2b395c13
---

Le annotazioni servono a ricordare o chiedere ciò che occorre per il computo: "confermare il tipo di base", una nuvola di revisione attorno a un muro modificato, una nota evidenziata sulla pianta. Restano sulla tavola con uno stato, sono elencate in un unico punto e si stampano nel PDF annotato. Non vengono **mai conteggiate**: nessuna quantità, nessun costo.

## Aggiungerne una

Aprire {{ui:Annotazioni}} sulla barra sopra la tavola e scegliere:

| Annotazione | Come |
|---|---|
| {{ui:Nota}} | Fare clic dove va, digitare la nota, scegliere {{ui:Aggiungi}}. Appare come un puntino tondo con la sua prima riga accanto. |
| {{ui:Nuvola}} | Fare clic su un angolo, poi sull'angolo opposto, e digitare una nota (o lasciarla vuota). Una nuvola di revisione festonata circonda il riquadro. |
| {{ui:Evidenzia}} | Fare clic su due angoli: un riquadro giallo trasparente, con una nota se si desidera. |

{{key:Esc}} dopo il primo angolo annulla. Lo strumento resta attivo per la successiva; {{key:V}} torna a {{ui:Seleziona}}.

## Stato e modifica

Fare clic su un'annotazione con {{ui:Seleziona}} per selezionarla. Il pannello a destra mostra **Annotazione**: il suo tipo e la tavola, il suo **Stato** — Aperta, Risposta o Chiusa — e il suo testo, che si può modificare. {{key:Delete}} (o {{ui:Elimina}}) la rimuove; {{key:Mod+Z}} la riporta indietro.

Il puntino di una nota è arancione finché è aperta, blu una volta risposto e grigio quando è chiusa; una nuvola chiusa diventa grigia.

## L'elenco

**Annotazioni** nel pannello a destra elenca ogni annotazione del computo con il suo stato, e indica quante sono ancora aperte. Selezionare **Solo aperte** per vedere ciò che resta da risolvere. Fare clic su una riga per passare alla sua tavola e selezionarla.

## Condividerle

- {{ui:PDF segnato}} le disegna sulle pagine: evidenziazioni, nuvole e puntini, ciascuno con un riquadro che riporta il suo stato in maiuscolo (APERTA, RISPOSTA, CHIUSA) e il suo testo. Sono incluse anche le pagine con annotazioni ma senza segni di computo.
- {{ui:XLSX}} aggiunge un foglio **Annotazioni**: tavola, tipo, stato e testo, una riga per ciascuna.
- Sono salvate nel `.takeoff.json` e in un [PDF con il computo incluso](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
