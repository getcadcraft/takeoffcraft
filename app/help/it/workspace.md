---
title: La schermata di TakeoffCraft
summary: Un giro della finestra con i nomi che compaiono a schermo - la barra degli strumenti, l'elenco delle tavole, la tavola, il pannello Voci, la tabella Quantità e la barra di stato.
keywords: schermata, disposizione, disposizioni, barra multifunzione, browser di progetto, casella degli strumenti, riquadro informazioni, barra degli strumenti, pannelli, elenco delle tavole, pannello voci, quantità, barra di stato, giro, interfaccia
from: ab1115e0
---

TakeoffCraft occupa la finestra del browser sotto la barra dell'app di CadCraft. Dall'alto verso il basso e da sinistra a destra:

| Parte | Dove | A che cosa serve |
|---|---|---|
| Barra dell'app | In alto | Il nome dell'app, la versione, {{ui:Informazioni su TakeoffCraft}}, {{ui:Guida}} ({{key:F1}}), {{ui:Salva per l'uso offline}}, {{ui:Impostazioni}} ({{key:Mod+,}}), il pulsante {{ui:Schermo intero}} e il selettore del tema {{ui:Carta}} / {{ui:Modello}}. |
| Barra degli strumenti | Sotto la barra dell'app | Tutti i comandi, in gruppi: {{ui:File}}, {{ui:Esporta}}, {{ui:Scala}}, {{ui:Computo}}, {{ui:Modifica}}, {{ui:Vista}}. |
| Tavole | A sinistra | Ogni pagina di ogni PDF aperto, con miniatura, scala e numero di segni. |
| La tavola | Al centro | La pagina aperta. Qui si misura. |
| Voci | A destra | Le voci di computo, le impostazioni della voce selezionata e il segno selezionato. |
| Quantità | In basso | Quantità e costi per voce o per tavola, e il totale del lavoro. |
| Barra di stato | In fondo | La misura in corso, i messaggi, il suggerimento dei 45° e lo zoom. |

## La barra degli strumenti

Passare il puntatore su un pulsante per vedere che cosa fa e qual è il suo tasto.

| Gruppo | Pulsanti |
|---|---|
| {{ui:File}} | {{ui:Nuovo}} (computo vuoto), {{ui:Apri PDF}} ({{key:Mod+O}}), {{ui:Apri computo}} (un progetto `.takeoff.json`), {{ui:Salva computo}} ({{key:Mod+S}}) |
| {{ui:Esporta}} | Un solo menu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:PDF segnato}} |
| {{ui:Scala}} | {{ui:Calibra}} ({{key:K}}), {{ui:Verifica}} ({{key:D}}) e l'elenco {{ui:Predefinita}} |
| {{ui:Computo}} | {{ui:Seleziona}} ({{key:V}}), {{ui:Lineare}} ({{key:L}}), {{ui:Area}} ({{key:A}}), {{ui:Cerchio}} ({{key:O}}), {{ui:Arco}} ({{key:R}}, un interruttore), {{ui:Detrai}} ({{key:E}}, un interruttore), {{ui:Vuoto}} ({{key:X}}), {{ui:Conteggio}} ({{key:C}}), {{ui:Conteggio automatico}} ({{key:S}}) |
| {{ui:Modifica}} | {{ui:Annulla}} ({{key:Mod+Z}}), {{ui:Ripristina}} ({{key:Mod+Y}}), {{ui:Copia}} ({{key:Mod+C}}), {{ui:Incolla}} ({{key:Mod+V}}) e {{ui:Altro}}: {{ui:Taglia}}, {{ui:Copia}}, {{ui:Incolla}}, {{ui:Incolla nella stessa posizione}}, {{ui:Duplica}}, {{ui:Elimina}}, {{ui:Seleziona tutto}}, {{ui:Deseleziona tutto}} |
| {{ui:Vista}} | {{ui:Adatta alla pagina}} ({{key:F}}), {{ui:Adatta alla larghezza}} ({{key:W}}) |

Lo strumento in uso è mostrato premuto. I pulsanti {{ui:Arco}} e {{ui:Detrai}} restano premuti finché sono attivi.

## Tavole (a sinistra)

- **Cerca tavole** filtra l'elenco per nome della tavola, nome del file o etichetta della pagina.
- Ogni tavola mostra una miniatura (disegnata durante lo scorrimento), il suo nome e la scala oppure **Senza scala**.
- Il lato destro di ogni riga indica quanti segni ha la tavola. Quando una voce è evidenziata, indica invece quanti segni di quella voce ci sono sulla tavola.
- Fare clic su una tavola per aprirla. {{key:PageDown}} e {{key:PageUp}} passano alla tavola successiva e a quella precedente dell'elenco.
- Quando un computo riguarda PDF che non sono aperti, una nota sotto l'elenco ne riporta i nomi. Vedere [Salvare e riaprire un computo](topic:save-and-reopen).

I nomi delle tavole derivano dal PDF: un'etichetta di pagina come `A-101` diventa il nome della tavola. Una pagina senza etichetta prende il nome dal file e dal numero di pagina, per esempio "Piante, pagina 3". Con più PDF aperti, le tavole con etichetta mostrano anche il nome del file.

## La tavola (al centro)

- La barra sotto la tavola mostra il nome della tavola e la sua scala, oppure "Ancora nessuna scala: scegliere una predefinita o calibrare". I suoi pulsanti: {{ui:MarkupCraft}} (quando quell'app può prendere il PDF; vedere [Avviare un computo e aprire un set di tavole](topic:open-plan-set)), {{ui:Confronta}} (una versione precedente della tavola sovrapposta a questa: [Confrontare una tavola rivista](topic:compare-revisions)), "(n) da verificare" (segni contrassegnati, quando ce ne sono) e {{ui:3D}} (la [vista di verifica 3D](topic:check-in-3d)).
- Finché non è aperto alcun PDF, al centro compare una breve guida in cinque passaggi.
- La rotellina esegue lo zoom sul puntatore. Trascinare per fare pan. Vedere [Tastiera e mouse](topic:keyboard).
- Durante l'uso di {{ui:Conteggio automatico}}, in alto sulla tavola compare una barra con i suoi controlli.

## Voci (a destra)

In alto, l'elenco {{ui:Area di offerta}}: l'edificio, il piano o la fase in cui vanno i nuovi segni ([Aree di offerta](topic:bid-areas)).

- {{ui:Nuova voce}} apre un piccolo modulo: un nome, un tipo ({{ui:Lineare (lunghezza)}}, {{ui:Area}} o {{ui:Conteggio}}) e {{ui:Aggiungi}}.
- L'elenco mostra di ogni voce il colore, l'icona del tipo, il nome e la quantità. Fare clic su una voce per disegnare con essa ed evidenziarne i segni su ogni tavola. Fare di nuovo clic per smettere di evidenziare.
- Sotto l'elenco, **Voce: (nome)** è l'editor della voce: nome, tipo, colore, unità, altezza o profondità, sfrido, prezzi di materiali e manodopera, i valori misurati e la {{ui:Composizione}}. Vedere [Creare le voci di computo](topic:create-items).
- **Segno selezionato** compare quando si seleziona un segno: la voce a cui appartiene, la sua tavola, le sue misure e pulsanti come {{ui:Aggiungi un vuoto}} ed {{ui:Elimina segno}}. Con più segni selezionati diventa **Segni selezionati**: quanti per ciascuna voce, e {{ui:Copia}}, {{ui:Duplica}}, {{ui:Taglia}} ed {{ui:Elimina segni}}.
- L'editor della voce termina con {{ui:Copia voce}} e {{ui:Duplica voce}}: una voce con la sua composizione e i suoi costi, senza segni. Vedere [Copiare, incollare e duplicare i segni](topic:copy-paste).

## Quantità (in basso)

- {{ui:Per voce}} elenca ogni voce e i componenti della sua composizione con quantità, sfrido, prezzi e costi estesi. Sfrido e prezzi si possono digitare direttamente nella tabella.
- {{ui:Per tavola}} elenca la quantità di ogni voce su ogni tavola.
- Un avviso che inizia con **Incompleto:** compare quando qualcosa è escluso dai totali.
- {{ui:Totale del lavoro}} è a destra dell'intestazione.
- Il pulsante con la freccia all'estrema destra nasconde o mostra la tabella per lasciare più spazio alla tavola.

Vedere [Leggere le quantità e il preventivo](topic:read-quantities).

## Barra di stato (in basso)

Da sinistra a destra: la misura in corso durante il disegno (lunghezza, area, raggio o il risultato di una verifica), il campo {{ui:Digita}} mentre si digita una lunghezza, i messaggi di TakeoffCraft, il promemoria "Shift aggancia a 45°" (oppure "Aggancio a 45°; Shift libera l'angolo" quando è attivo nelle [Impostazioni](topic:settings)), il pulsante {{ui:Snap}} (aggancio alle linee del disegno, attivo quando è evidenziato; {{key:F3}}) e la percentuale di zoom.

:::tip
Leggere la barra di stato quando qualcosa non accade. TakeoffCraft spiega lì perché ha rifiutato un clic, per esempio "Questa tavola non ha ancora una scala".
:::

## Altre disposizioni

Tutto quanto sopra riguarda la disposizione {{ui:CadCraft classico}}, quella iniziale. {{ui:Impostazioni}} ({{key:Mod+,}}) › {{ui:Globali}} › {{ui:Layout}} ne offre altre due; gli stessi strumenti e tasti funzionano in tutte e tre, e scegliendo di nuovo {{ui:CadCraft classico}} ogni controllo torna dov'era.

| Disposizione | In TakeoffCraft |
|---|---|
| {{ui:Barra multifunzione e browser di progetto}} | La {{ui:Barra multifunzione del computo}} in alto ([Menu, tasti e mouse](topic:menus-keys-and-mouse)), una barra per lo strumento in uso, una scheda per ogni tavola aperta (anche Modello e i layout di un disegno sono tavole) con le scale predefinite e {{ui:Adatta alla pagina}} sotto la tavola. Il pannello a sinistra contiene {{ui:Proprietà}} (la voce, la nota o il segno selezionato) sopra il {{ui:Browser del computo}}: {{ui:Tavole}} (fare clic su una per aprirla in una scheda), {{ui:Condizioni}} (fare clic su una per disegnare con essa) e {{ui:Preventivo}} (il totale di ogni voce e il totale del lavoro); le miniature sono la sua seconda scheda. |
| {{ui:Casella degli strumenti e riquadro informazioni}} | La barra degli strumenti sopra la tavola, un riquadro informazioni con l'{{ui:Area di offerta}}, lo strumento in uso o la selezione e la barra della tavola, una colonna degli strumenti di computo a sinistra, una scheda per ogni tavola, e {{ui:Snap}} e zoom sotto la tavola. |

Mentre la [vista di verifica 3D](topic:check-in-3d) è aperta, le schede delle tavole e la barra sotto la tavola si ritirano; chiudere la vista 3D per tornare a misurare. Sul telefono è sempre attiva la disposizione per telefono.

## Schermo intero e temi

Il pulsante {{ui:Schermo intero}} nella barra dell'app, oppure {{key:Ctrl+Shift+F}} (Ctrl su ogni piattaforma, anche su Mac), passa in rotazione da normale a schermo intero e a schermo intero con le barre nascoste. Con le barre nascoste, spostare il puntatore sul bordo superiore per mostrarle di nuovo.

{{ui:Carta}} è il tema chiaro e {{ui:Modello}} quello scuro. In {{ui:Modello}} il disegno è mostrato invertito (linee chiare su sfondo scuro) solo a schermo; le esportazioni non cambiano mai.
