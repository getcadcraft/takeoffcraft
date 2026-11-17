---
title: Avviare un nuovo computo
summary: Cancellare tutto e avviare un computo vuoto senza ricaricare la pagina, dopo aver messo al sicuro il lavoro.
keywords: nuovo, nuovo computo, cancella, reimposta, ricomincia, vuoto, chiudi pdf, lavoro successivo
from: 16d392a4
---

{{ui:Nuovo}} chiude ogni PDF e avvia un computo vuoto sulla stessa pagina.

1. Salvare il computo corrente, se lo si vuole conservare: {{ui:Salva computo}} oppure {{key:Mod+S}}.
2. Scegliere {{ui:Nuovo}} nel gruppo {{ui:File}}.
3. Se ci sono modifiche non salvate, TakeoffCraft chiede **Computo non salvato**: scegliere {{ui:Salva prima il computo}} (scarica il progetto, poi cancella), {{ui:Scarta le modifiche}}, oppure {{ui:Annulla}}.
   La finestra torna allo stato vuoto: nessun PDF, nessuna voce, nessun segno, nessuna scala. La barra di stato dice "Nuovo computo. Aprire i PDF per iniziare."

Viene cancellato:

- ogni PDF aperto, le sue tavole e le sue miniature,
- voci, composizioni, segni e scale,
- lo zoom e la posizione di ciascuna tavola,
- la cronologia delle modifiche (non si può annullare {{ui:Nuovo}}),
- la modalità arco, e qualsiasi ricerca o revisione di conteggio automatico.

I file sul disco non vengono toccati. Per riprendere il vecchio computo, aprire il suo `.takeoff.json` e i suoi PDF: vedere [Salvare e riaprire un computo](topic:save-and-reopen).

:::note
Ogni nuovo computo inizia senza voci. Per portarne alcune, copiarle prima: {{ui:Copia voce}} sotto Voci (oppure copiare segni, che portano con sé le loro voci), poi {{ui:Incolla}} nel nuovo computo. Vedere [Copiare, incollare e duplicare segni](topic:copy-paste). Per le voci che si usano in ogni lavoro, tenerle nel proprio [listino prezzi](topic:price-library) e aggiungerle da lì, oppure aggiungere un [pacchetto di categoria](topic:trade-packs).
:::
