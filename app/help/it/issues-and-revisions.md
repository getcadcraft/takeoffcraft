---
title: Segnalazioni, revisioni e registro delle modifiche del disegno
summary: Mantenere una sola cronologia delle segnalazioni con il modello dell'architetto: importare le segnalazioni, registrare istruzioni di cantiere, disegni di officina e modelli collegati su una segnalazione, e leggere il registro delle modifiche del disegno.
keywords: segnalazione, revisione, revisioni, registro modifiche, registro modifiche del disegno, registro dei disegni, istruzione di cantiere, disegno di officina, modello collegato, gara, cantiere, cronologia delle segnalazioni, computo metrico, computo
from: 8d8f6e68
---

## Cosa farete

Lavorare con la stessa cronologia delle segnalazioni del resto del team. Vedere quali tavole sono state emesse con quale revisione, e collegare ciò che accade in cantiere alla segnalazione a cui appartiene.

## Passaggi

1. Aprire **Segnalazioni e revisioni**.
2. Scegliere **Leggi una cronologia delle segnalazioni** e selezionare il file `.issues.json` salvato da BimCraft o da un'altra app. Le sue segnalazioni e registrazioni vengono aggiunte alle vostre. Non viene sostituito nulla.
3. Scegliere **Aggiungi una registrazione** per un'istruzione di cantiere, un disegno di officina, un set di annotazioni, un modello collegato o una nota. Selezionare la segnalazione a cui si riferisce e il suo stato. Un file scelto viene registrato con nome, dimensione e SHA-256; il file resta dove si trova.
4. **Registro delle modifiche del disegno** mostra una riga per ogni tavola e una colonna per ogni segnalazione. Una revisione tra parentesi è stata emessa di nuovo senza modifiche.
5. **Scarica il registro delle modifiche (CSV)** salva le segnalazioni, la tabella delle tavole e le registrazioni. **Salva la cronologia delle segnalazioni** scrive un file che le altre app leggono.

## Utile sapere

- **Registra una segnalazione** emette le tavole misurate, per esempio con un computo metrico. **Modifiche successive** indica quali tavole sono state misurate di nuovo dopo quella segnalazione.
- La cronologia è salvata nel file del computo. Ogni modifica corrisponde a un'unica operazione di annullamento.
- Leggere due volte lo stesso file non aggiunge nulla due volte. Quando due copie contengono la stessa registrazione, viene conservata quella più recente.
