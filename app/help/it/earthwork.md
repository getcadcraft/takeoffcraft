---
title: Movimenti di terra e quote altimetriche
summary: Segnare le quote altimetriche su una planimetria, passarle a CivilCraft per la superficie e per sterro e riporto, e calcolare qui semplici quantità di scavo.
keywords: movimenti di terra, scavo, sterro, riporto, sterro e riporto, sistemazione del terreno, quota altimetrica, quote, topo, superficie, triangolazione, civilcraft, punti, pnezd, trincea
from: a898e508
---

TakeoffCraft misura ciò che è disegnato su una tavola. I movimenti di terra richiedono una superficie del terreno, quindi sono condivisi con CivilCraft, che costruisce superfici a partire dai punti, le sistema e calcola sterro, riporto e trasporto.

## Scavo semplice qui

Per un'impronta scavata a una sola profondità basta una voce di superficie con una **profondità**: il volume è superficie × profondità. Il [pacchetto di categoria](topic:trade-packs) dell'impresa generale ha una voce di scavo in massa (volume in banco, volume sciolto e carichi di camion) e una voce di trincea per servizi (scavo, letto di posa e rinterro in base a lunghezza e profondità).

## Quote altimetriche per CivilCraft

1. Impostare la scala della tavola del sito.
2. Creare una voce **Conteggio**, ad esempio "Terreno esistente", e fare clic su ogni quota altimetrica sulla tavola.
3. Selezionare un segno e digitare la sua {{ui:Quota}} nel pannello del segno selezionato: `102.5`, `102'-6"` o `31.24 m`. Sono ammesse quote negative e pari a zero.
4. Aprire il menu {{ui:Esporta}} e scegliere {{ui:Quote altimetriche}}. Si ottiene un file di punti (`.csv`) con colonne Punto, Nord, Est, Quota e Descrizione, una riga per ogni punto segnato della tavola aperta.
5. Aprire quel file in CivilCraft (vedere [Importa punti](app:civilcraft/import-points)). Il programma costruisce la superficie dai punti ([Costruire una superficie](app:civilcraft/build-surface)); da lì confronta le superfici e calcola sterro e riporto ([Volumi](app:civilcraft/volumes)).

Nord ed Est sono le coordinate proprie della tavola, in piedi, misurate dall'angolo della pagina secondo la sua scala: distanze e volumi tra i punti sono corretti, ma non sono le coordinate di rilievo del sito. Spostarli nelle coordinate del sito in CivilCraft quando necessario.

:::note
I punti di tavole diverse non condividono le coordinate, quindi l'esportazione prende solo la tavola aperta. Le quote vengono salvate con il computo e si trasferiscono con copia e incolla.
:::

## Sterro e riporto da CivilCraft

I movimenti di terra di CivilCraft arrivano come due voci che si possono prezzare:

1. In CivilCraft, sistemare piazzole e corridoi, poi scegliere {{ui:Invia a TakeoffCraft}} sotto **Movimenti di terra** ([Volumi di movimento di terra](app:civilcraft/volumes)). Salva un file delle quantità (`.quantities.json`).
2. In TakeoffCraft, aprirlo con {{ui:Apri computo}}, oppure trascinarlo sull'app. Il computo resta aperto: il file aggiunge **Movimenti di terra: sterro** e **Movimenti di terra: riporto** come [quantità digitate](topic:create-items#typed-quantities-no-drawing) in iarde cubiche (CY) per un progetto in piedi, o in metri cubi (m³) per un progetto in metri. È un solo passaggio: {{key:Mod+Z}} lo annulla.
3. Rinominarle, impostare sfrido, prezzi e composizioni a piacere.

Quando il progetto cambia, inviare di nuovo da CivilCraft e aprire il nuovo file: le stesse due voci ricevono le nuove quantità. Nomi, prezzi, sfrido e composizioni restano come impostati. Se l'unità del progetto è cambiata, la barra di stato lo segnala: verificare i prezzi. Un file di un altro progetto CivilCraft aggiunge due voci proprie.

Le quantità sono volumi in banco, come misurati da CivilCraft (metodo a griglia): senza ritiro né rigonfiamento. Aggiungerli come sfrido, oppure con una formula come `Q * 1.25` per il volume sciolto. L'editor della voce mostra da dove e quando proviene ciascuna; anche la colonna Note del preventivo lo riporta.

:::note
Il file delle quantità è JSON semplice (`"format": "cadcraft-quantities"`), quindi uno script o un altro programma può scriverne uno: un nome dell'app, un progetto e voci con una chiave, un nome, un'unità e una quantità.
:::
