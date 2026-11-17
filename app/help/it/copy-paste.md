---
title: Copiare, incollare e duplicare i segni
summary: Copiare i segni con le loro voci, incollarli dove si fa clic o nello stesso punto su un'altra tavola, duplicarli, tagliare, eliminare e selezionare tutto, ciascuno annullabile con un solo passo.
keywords: copia, incolla, taglia, duplica, incolla nella stessa posizione, appunti, seleziona tutto, deseleziona tutto, segni multipli, piano tipo, ripeti, stesso piano, altra tavola, copia voce, duplica voce
from: e20e9024
---

Il gruppo {{ui:Modifica}} della barra degli strumenti contiene {{ui:Annulla}}, {{ui:Ripristina}}, {{ui:Copia}} e {{ui:Incolla}}. Il suo menu {{ui:Altro}} contiene il resto, ciascuno con il proprio tasto: {{ui:Taglia}}, {{ui:Copia}}, {{ui:Incolla}}, {{ui:Incolla nella stessa posizione}}, {{ui:Duplica}}, {{ui:Elimina}}, {{ui:Seleziona tutto}} e {{ui:Deseleziona tutto}}. Ognuno di essi si annulla con un solo passo usando {{key:Mod+Z}}.

## Selezionare i segni

1. Scegliere {{ui:Seleziona}} ({{key:V}}) e fare clic su un segno.
2. Tenere premuto {{key:Shift}} e fare clic su altri segni per aggiungerli. {{key:Shift}} + clic su un segno già selezionato lo toglie di nuovo.
3. Oppure premere {{key:Mod+A}} ({{ui:Seleziona tutto}}) per prendere ogni segno della tavola aperta.

Con più segni selezionati, il pannello di destra mostra **Segni selezionati**: quanti ce ne sono per ciascuna voce, con {{ui:Copia}}, {{ui:Duplica}}, {{ui:Taglia}} ed {{ui:Elimina segni}}. Le maniglie d'angolo compaiono solo quando è selezionato un solo segno. {{key:Esc}} ({{ui:Deseleziona tutto}}) annulla la selezione.

## Copiare e incollare dove si fa clic

1. Selezionare i segni e premere {{key:Mod+C}} ({{ui:Copia}}). I segni vengono copiati con le loro voci, compresi la composizione, lo sfrido e i costi di ciascuna voce.
2. Passare alla tavola dove devono andare (può essere la stessa tavola).
3. Premere {{key:Mod+V}} ({{ui:Incolla}}). Una copia tratteggiata segue il puntatore.
4. Fare clic dove va. Il centro dei segni copiati si posiziona sul puntatore.

{{key:Esc}} annulla e non aggiunge nulla. I segni incollati restano selezionati, quindi {{key:Delete}} o {{key:Mod+Z}} li tolgono di nuovo.

Nello stesso computo, i segni incollati vanno sulle **stesse voci**, quindi le loro quantità si sommano a quelle voci. In un altro computo (un'altra scheda, oppure dopo {{ui:Nuovo}}), viene usata una voce con lo stesso nome e tipo; altrimenti la voce viene aggiunta con la sua composizione. Se il nome è già usato da una voce di tipo diverso, la voce aggiunta si chiama "(nome) (copia)".

I segni incollati vanno nell'area di offerta scelta in alto nel pannello {{ui:Voci}} (oppure in nessuna). Consultare [Aree di offerta](topic:bid-areas).

## Incolla nella stessa posizione

{{key:Mod+Shift+V}} ({{ui:Incolla nella stessa posizione}}) mette la copia esattamente nello stesso punto della tavola aperta, in base alla sua posizione sulla pagina. Usarlo per un piano tipo: computare il livello 2, copiare, aprire il livello 3, incollare nella stessa posizione.

Incolla nella stessa posizione richiede una tavola della **stessa dimensione** di quella da cui si è copiato. Su una tavola di altra dimensione TakeoffCraft lo segnala e non incolla nulla; in quel caso usare {{ui:Incolla}} e fare clic. Sulla tavola da cui si è copiato, la copia finisce sopra gli originali.

## La scala deve coincidere

Lunghezze e aree dipendono dalla scala della tavola. Un tratto che misura 10' a 1/4" = 1'-0" misurerebbe 20' su una tavola a 1/8" = 1'-0". Per questo TakeoffCraft incolla tratti e aree solo su una tavola con la **stessa scala** della tavola di origine, e lo dice chiaramente quando non è così:

- La tavola aperta non ha ancora una scala: assegnargliene una prima ([Impostare la scala](topic:set-the-scale)), poi incollare.
- La tavola aperta ha un'altra scala: il messaggio indica entrambe le scale. Incollare su una tavola alla stessa scala.
- I conteggi non richiedono scala: i conteggi copiati si incollano ovunque.

## Duplicare

{{key:Mod+D}} ({{ui:Duplica}}) copia i segni selezionati e mette subito la copia sul puntatore; fare clic dove va. Non si aggiunge nulla finché non si fa clic, e {{key:Esc}} non lascia nulla. Duplica non cambia ciò che {{ui:Incolla}} incolla.

## Tagliare ed eliminare

- {{key:Mod+X}} ({{ui:Taglia}}) copia i segni selezionati e li elimina. Incollarli dove devono stare, oppure annullare il taglio.
- {{key:Delete}} o {{key:Backspace}} ({{ui:Elimina}}) elimina i segni selezionati senza copiarli.

## Copiare una voce

L'editor della voce (sotto **Voci**) termina con:

- {{ui:Copia voce}}: copia la voce con la sua composizione, lo sfrido e i costi, senza segni. {{ui:Incolla}} poi aggiunge una copia di essa a questo computo, o a un altro.
- {{ui:Duplica voce}}: aggiunge subito una copia, chiamata "(nome) (copia)".

:::tip
La copia resta su questo computer: è conservata in questa scheda e nella memoria del browser, così un'altra scheda di TakeoffCraft può incollarla. Nulla viene caricato, e gli appunti di sistema non vengono usati, quindi non è possibile incollare segni in altri programmi.
:::

:::note
Una copia proviene da una tavola alla volta. I segni vengono incollati così come sono: non è ancora possibile ruotare o specchiare una copia.
:::
