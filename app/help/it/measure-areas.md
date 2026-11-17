---
title: Misurare aree con vuoti
summary: Tracciare il contorno di pavimenti, soffitti e solai, ritagliarvi fori, aggiungere bordi curvi, cerchi e vuoti rotondi, e leggere area e perimetro.
keywords: riempimento locale, riempimento, secchiello, clic dentro un locale, area automatica, detrazione inversa, area da detrarre, pilastro, cavedio, detrazione da più voci, area, poligono, contorno, piedi quadrati, sf, vuoto, foro, detrai, cerchio, rotondo, arco, perimetro, pavimento, soffitto, solaio
from: 34648db7
---

Una voce di area misura la superficie racchiusa. Ogni contorno può avere dei fori ritagliati (un cavedio, un pilastro, una fioriera), e i suoi bordi possono essere rettilinei o curvi.

Prima di cominciare: la tavola deve avere una scala ([Imposta la scala](topic:set-the-scale)) e serve una voce di area ([Creare voci del computo](topic:create-items)).

## Tracciare il contorno di un'area

1. Fare clic sulla voce di area sotto {{ui:Voci}}.
2. Scegliere {{ui:Area}} nella barra degli strumenti, oppure premere {{key:A}}.
3. Fare clic su ciascun angolo del locale o del solaio, in sequenza. Tenere premuto {{key:Shift}} per i bordi a 0°, 45° e 90°.
   Dal terzo punto in poi, il contorno si riempie e la barra di stato mostra "Area" e "perimetro". Compare un piccolo anello attorno al primo punto.
4. Chiudere il contorno: fare clic sul primo punto (dentro il suo anello), premere {{key:Enter}}, fare doppio clic oppure clic destro.
   L'area viene riempita leggermente con il colore della voce, indicata con i suoi piedi quadrati, e diventa il segno selezionato.

{{key:Backspace}} rimuove l'ultimo angolo; {{key:Esc}} scarta il contorno.

Un contorno che si interseca con sé stesso viene rifiutato: "Il contorno si interseca, quindi l'area sarebbe errata. Disegnarlo di nuovo senza intersezioni." Per una figura a otto, disegnare due aree.

## Bordi curvi

Mentre si traccia il contorno, attivare la modalità arco ({{ui:Arco}} oppure {{key:R}}). Dopo un angolo, fare clic su un punto lungo la curva, poi dove la curva termina. Per chiudere il contorno con una curva, fare l'ultimo clic sul primo punto. Area e perimetro usano la curva esatta. Premere di nuovo {{key:R}} per i bordi rettilinei. Per modificare una curva in seguito, selezionare l'area e trascinare il quadratino tondo al centro dell'arco. Vedere [Misurare tratti lineari](topic:measure-linear#arcs-and-curved-walls).

## Un cerchio

1. Con una voce di area, scegliere {{ui:Cerchio}} oppure premere {{key:O}}.
2. Fare clic sul centro.
3. Fare clic su un punto qualsiasi del bordo.
   Mentre si muove il puntatore, la barra di stato mostra il raggio e l'area. Il cerchio viene aggiunto come segno di area con area e perimetro esatti.

## Riempire un locale con un clic

Quando i locali sono disegnati come muri chiusi, {{ui:Locale}} ({{key:B}}) ricava un pavimento con un solo clic:

1. Scegliere una voce di area (per esempio una finitura di pavimento) e assegnare la scala alla tavola.
2. Scegliere {{ui:Locale}} nel gruppo {{ui:Computo}}, oppure premere {{key:B}}.
3. Fare clic dentro un locale, sul pavimento libero (non su una linea o su un'etichetta).

TakeoffCraft legge le linee della tavola, trova lo spazio attorno al clic e ne traccia il contorno lungo le facce interne dei muri, come area della voce corrente. Le aperture delle porte fino a **4'-0"** vengono considerate chiuse, quindi il contorno attraversa la porta in linea retta; **Impostazioni › TakeoffCraft › Il riempimento del locale chiude le aperture fino a** modifica questa larghezza (da 3'-0" a 8'-0"). Nomi dei locali, arredi e apparecchi all'interno del locale non creano fori.

Il riempimento si rifiuta, spiegandone il motivo, quando:

- il clic cade su una linea ("È su una linea");
- lo spazio non è chiuso: un'apertura più larga dell'impostazione lascia uscire il riempimento fino al bordo della tavola. Aumentare l'impostazione, oppure tracciare quel locale a mano con {{ui:Area}};
- lo spazio è minuscolo (un simbolo, non un locale).

Quando una porta è più larga dell'impostazione, il riempimento invade il locale successivo e traccia entrambi insieme: annullare ({{key:Mod+Z}}), aumentare l'impostazione e fare di nuovo clic. Verificare il contorno come ogni area: trascinare i suoi angoli per correggerlo. Una tavola scansionata funziona allo stesso modo, ma le sue linee devono essere abbastanza scure; un tratto grigio chiaro può non fermare il riempimento.

## Ritagliare un foro in un'area

1. Scegliere {{ui:Seleziona}} ({{key:V}}) e fare clic sull'area. Mostra quadratini agli angoli.
2. Scegliere {{ui:Vuoto}} nella barra degli strumenti (oppure premere {{key:X}}), oppure {{ui:Aggiungi un vuoto}} sotto **Segno selezionato**.
3. Fare clic sugli angoli del foro, dentro l'area. Anche la modalità arco funziona qui.
4. Chiuderlo come un'area: fare clic sul suo primo punto, premere {{key:Enter}}, fare doppio clic oppure clic destro.
   Il foro resta non riempito, e la barra di stato dice "Vuoto aggiunto. Disegnare un altro, oppure premere Esc."
5. Disegnare altri fori nella stessa area, oppure premere {{key:Esc}}.

Per un foro rotondo, scegliere {{ui:Aggiungi un vuoto rotondo}} sotto **Segno selezionato**, fare clic sul centro, poi su un punto del bordo.

Un vuoto deve trovarsi interamente all'interno dell'area e non deve sovrapporsi a un altro vuoto. Altrimenti TakeoffCraft lo rifiuta: "Un vuoto deve trovarsi interamente all'interno dell'area." oppure "I vuoti non possono sovrapporsi tra loro."

Per eliminare l'ultimo foro, scegliere {{ui:Rimuovi l'ultimo vuoto}}.

## Aree da detrarre: pilastri, cavedi e aperture detratti da più voci

Un vuoto appartiene a un solo segno di area. Un'**area da detrarre** viene disegnata una volta sola e viene sottratta da ogni area che si sovrappone, per le voci scelte: disegnare i pilastri una volta, e vengono tolti insieme dalla finitura del pavimento, dal soffitto e dal solaio.

1. Creare una voce di area per essi, per esempio "Pilastri".
2. Nelle sue impostazioni, selezionare **Area da detrarre: i suoi segni sottraggono la loro area dalle altre voci**. Compare un elenco delle altre voci di area, tutte selezionate: deselezionare quelle che le aree da detrarre non devono toccare (per esempio la pittura delle pareti).
3. Computare i pilastri con {{ui:Area}} o {{ui:Cerchio}}, come di consueto. Ciascuno viene disegnato tratteggiato.

Ogni segno di area di una voce selezionata nella stessa tavola perde la parte coperta da un'area da detrarre: l'intera area da detrarre quando sta all'interno, solo la parte sovrapposta quando attraversa il bordo, e nulla all'interno di un vuoto. Il pannello dell'area selezionata mostra **Aree da detrarre** e l'area rimanente. Quantità della voce, sue formule di composizione, costi, vista 3D di verifica ed esportazione usano l'area rimanente; le note del computo indicano quanto hanno detratto le aree da detrarre. La voce di area da detrarre conta la propria area (lasciare i suoi costi a zero se non viene prezzata).

Un'area da detrarre deve essere **convessa**: un rettangolo, un cerchio o un contorno senza angoli rientranti. TakeoffCraft rifiuta di disegnarne una che non lo sia; per un cavedio a L, disegnare due aree da detrarre. Le aree da detrarre non possono avere vuoti, e due aree da detrarre che si sovrappongono vengono contate entrambe.

Il perimetro (`P`) non cambia: le aree da detrarre tolgono solo superficie.

## Leggere l'area

Selezionare l'area. **Segno selezionato** mostra:

| Riga | Significato |
|---|---|
| Area | L'area netta: contorno meno i vuoti. È ciò che conta la voce. |
| Contorno | L'area lorda racchiusa dal contorno (mostrata quando ci sono vuoti). |
| Vuoti | Quanti fori ci sono e la loro area totale. |
| Perimetro | La lunghezza del bordo del contorno, **più** i bordi di ogni vuoto ("con vuoti"). |

Il perimetro include i bordi dei vuoti di proposito, per esempio per casseri o basamenti che corrono anche attorno a un foro. Se serve solo il bordo esterno, tenere i fori fuori da quella voce, oppure misurare il bordo esterno come tratto lineare.

L'{{ui:Unità}} della voce determina come viene riportato il totale: SF, SY o m². Il pannello **Segno selezionato** e la barra di stato mostrano sempre piedi quadrati.

## Correggere un'area

- **Spostare un angolo**: selezionare l'area e trascinare un quadratino d'angolo (anche i fori hanno quadratini). Se la nuova forma si intersecasse con sé stessa o spingesse un foro fuori, l'angolo viene riportato indietro: "Il punto è stato riportato indietro."
- **Spostare in un'altra voce**: scegliere un'altra voce di area nell'elenco **Voce** sotto **Segno selezionato**.
- **Eliminare**: {{key:Delete}}, {{ui:Elimina}} nel menu {{ui:Altro}} della barra degli strumenti, oppure {{ui:Elimina segno}}.

## Profondità per i volumi

Assegnare alla voce di area una {{ui:Profondità}} (per esempio `0'-4"` per un solaio) e usare `A * H / 27` in un componente di composizione per ottenere i metri cubi in iarde cubiche. Vedere [Composizioni e formule](topic:assemblies).
