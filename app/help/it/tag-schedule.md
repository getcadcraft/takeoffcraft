---
title: Importare un abaco dei tag come quantità
summary: Un abaco dei tag esportato dal modello dell'edificio (CSV) diventa quantità digitate nel computo, una per tag, così i conteggi e le aree del modello stanno accanto a quelli misurati.
keywords: tag, abaco dei tag, modello dell'edificio, bimcraft, ifc, quantità, csv, abaco, importazione, quantità digitata
from: a60c19b6
---

{{ui:Tag}} sulla barra degli strumenti importa un abaco dei tag salvato da BimCraft come file CSV. Ogni tag distinto diventa una quantità digitata, dello stesso tipo delle quantità di sterro e riporto di CivilCraft.

1. In BimCraft, creare l'abaco dei tag desiderato e salvarlo come CSV.
2. Scegliere {{ui:Tag}} e selezionare il file.
3. Indicare quale colonna dà il nome alla riga ({{ui:Dai un nome alla riga con}}, di solito il tag) e quale contiene il numero ({{ui:Quantità da}}). Con {{ui:Conta le righe}} ogni riga conta come una.
4. Scegliere l'unità. Una lunghezza in millimetri diventa metri con {{ui:Moltiplica per}} 0.001.
5. {{ui:Aggiungi le quantità}}.

Le righe con lo stesso tag vengono sommate. Una cella che non è un numero viene esclusa e conteggiata nel riepilogo. Importare di nuovo lo stesso abaco aggiorna le quantità già presenti invece di aggiungerne altre; i loro nomi, le tariffe e lo sfrido restano come sono.

## Da sapere

Una quantità digitata non viene misurata su un foglio, quindi non ha segni. Non si invia nulla da nessuna parte: il file viene letto qui.
