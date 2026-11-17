---
title: Creare voci del computo
summary: Creare voci lineari, di area e di conteggio e impostare la loro unità, altezza o profondità, lo sfrido e i prezzi di materiali e manodopera.
keywords: squadra, produzione, dimensione squadra, paga, ore, ore uomo, ore operaio, giornate squadra, ore di manodopera, voce, nuova voce, condizione, multi-condizione, misura anche, più tipi, stanza, lineare, area, conteggio, unità, altezza, profondità, sfrido, materiali, manodopera, prezzo, colore, costo
from: 7fa5effc
---

Una **voce** è un elemento che si misura e si prezza: un tipo di muro, una finitura di pavimento, un controsoffitto, una porta, un apparecchio di illuminazione. Ogni segno che si disegna appartiene a una voce. Altri programmi le chiamano condizioni.

Ogni voce ha un tipo (e può accogliere anche altri tipi di segni, vedi [Una voce, più tipi di segni](topic:create-items#one-item-several-kinds-of-marks)):

| Tipo | Si disegna | Riporta | Unità |
|---|---|---|---|
| Lineare | Tratti di punti collegati | Lunghezza, numero di tratti e superficie di parete quando ha un'altezza | LF o m |
| Area | Contorni chiusi, con vuoti | Area, perimetro, numero di aree | SF, SY, SQ, ac, ha o m² |
| Conteggio | Un clic per ogni elemento | Quanti | EA |
| Quantità digitata | Niente: si digita la quantità | Il numero digitato (o uno importato da CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha o m² |

## Quantità digitate (senza disegno)

Alcune voci di un preventivo non vengono mai disegnate: la mobilitazione del cantiere, i permessi, un imprevisto, un subappalto a corpo, lo sterro e il riporto calcolati da CivilCraft. Per queste voci creare una **Quantità digitata**:

1. Scegliere {{ui:New item}}, digitare un nome, selezionare {{ui:Typed quantity (no drawing)}} e scegliere {{ui:Add}}.
2. Nell'editor della voce scegliere {{ui:Unit}} (LS per un importo a corpo) e digitare la {{ui:Quantity}}: `1`, `2.5` o `1,250`.
3. Impostare sfrido e prezzi come per qualsiasi altra voce. Le formule di una composizione usano `Q`, la quantità, per esempio `ceil(Q / 12)` carichi di camion.

Una quantità digitata non accetta segni e non rende mai incompleto il computo. Quando il computo ha aree di offerta, l'editor mostra anche {{ui:Bid area}}: la quantità conta in quell'area, nelle sue varianti e nei suoi totali, come lo farebbe un segno. Le quantità importate da un'altra applicazione indicano la loro provenienza, vedi [Movimenti di terra e quote](topic:earthwork#cut-and-fill-from-civilcraft).

## Creare una voce

1. Nel pannello {{ui:Items}} a destra, scegliere {{ui:New item}}.
2. Digitare un nome, per esempio `Tipo di muro interno A` o `Piastrella moquette`.
3. Scegliere il tipo: {{ui:Linear (length)}}, {{ui:Area}} o {{ui:Count}}.
4. Scegliere {{ui:Add}} (oppure premere {{key:Enter}}). La voce compare nell'elenco con un proprio colore, diventa la voce con cui si disegna e il suo editor si apre sotto l'elenco. La barra di stato indica quale strumento scegliere poi.

Premere {{key:Esc}} nel modulo per chiuderlo senza aggiungere una voce.

:::tip
Se si sceglie prima uno strumento di misura, TakeoffCraft usa l'ultima voce del tipo giusto oppure apre il modulo {{ui:New item}} con quel tipo già selezionato.
:::

## Scegliere la voce con cui si disegna

Fare clic su una voce nell'elenco. Diventa la voce a cui vanno i nuovi segni, e i suoi segni sono evidenziati su ogni tavola mentre le altre si attenuano. Se la tavola aperta non ha segni di quella voce, TakeoffCraft passa a una tavola che li ha. Fare di nuovo clic sulla voce per interrompere l'evidenziazione; resta comunque la voce con cui si disegna.

Fare clic su un segno con lo strumento {{ui:Select}} rende corrente anche la sua voce.

## Impostare la voce

L'editor della voce (**Voce: (nome)**) ha questi campi. Ciascuno viene salvato quando si esce dal campo o si preme {{key:Enter}}, e ogni modifica può essere annullata.

| Campo | Funzione |
|---|---|
| {{ui:Name}} | Mostrato nell'elenco, nelle tabelle e nelle esportazioni. |
| {{ui:Type}} | Lineare, Area o Conteggio. Diventa bloccato quando la voce ha dei segni ("Una voce con segni mantiene il proprio tipo"). |
| {{ui:Color}} | Il colore dei suoi segni sullo schermo e nel PDF con i segni. |
| {{ui:Unit}} | L'unità in cui è riportata la quantità: LF o m per il lineare; SF, SY, SQ, ac, ha o m² per l'area; EA per il conteggio. |
| {{ui:Also measure}} | Gli altri tipi di segni che la voce accoglie, ciascuno con una propria unità. Vedi sotto. |
| {{ui:Height}} (lineare) | Un'altezza di parete. La voce riporta poi anche la superficie della parete (lunghezza × altezza). I tratti provenienti da un modello BimCraft includono porte e finestre: vengono sottratte una volta, e la voce indica la superficie lorda, le aperture e la netta. Un computo da un progetto BimCraft che ha scelto un metodo di misurazione viene misurato anche qui con quel metodo (la nota ne indica il nome, con la fonte, e dice che non è verificato da un computista); il metodo non può essere cambiato in TakeoffCraft. Mattoni o blocchi e malta da un tipo di muro arrivano come due componenti: le unità da ordinare e il volume di malta. |
| {{ui:Depth}} (area) | Una profondità o uno spessore, usato nelle formule delle composizioni (per esempio il volume di calcestruzzo). |
| {{ui:Waste %}} | Aggiunto alla quantità prima del prezzo: 10 significa quantità × 1.10. |
| Materiali $/LF | Costo dei materiali per unità. L'etichetta segue l'unità: $/SF, $/EA e così via. |
| Manodopera $/LF | Costo della manodopera per unità. |
| {{ui:CSI number}} | Il suo numero CSI MasterFormat, come `09 21 16` (o solo la divisione, `09`). Il foglio By division della cartella di lavoro raggruppa i costi per questo numero. Le voci dei [pacchetti di categoria](topic:trade-packs) ne hanno già uno. |

Altezza e profondità accettano piedi e pollici (`9'-0"`, `8' 6"`) o piedi decimali (`9`) per le unità imperiali, e metri (`2.7`, `2700 mm`) per le unità metriche. I prezzi accettano importi come `12.50` o `$1,250`, fino a quattro decimali. Vedi [Inserimento di lunghezze, prezzi e percentuali](topic:entry-formats).

Sotto i campi, **Misurato** mostra i totali che le formule della voce possono usare, con le loro lettere: Lunghezza (L), Tratti (N), Superficie di parete (A) per il lineare; Area (A), Perimetro (P), Aree (N) per l'area; Conteggio (N) per il conteggio.

## Una voce, più tipi di segni

Alcune cose si misurano in più modi: una stanza ha un pavimento (un'area), uno zoccolo lungo le pareti (una lunghezza) e porte (un conteggio). Invece di tre voci, crearne una sola:

1. Creare la voce con il suo tipo principale, per esempio una voce di area `Stanza 101`.
2. Nell'editor, sotto {{ui:Also measure}}, spuntare {{ui:Linear}}, {{ui:Count}} o entrambi. Ciascuno riceve un'unità accanto.
3. Disegnare con qualsiasi strumento il cui tipo la voce accoglie: con `Stanza 101` corrente, {{ui:Area}} disegna il suo pavimento, {{ui:Linear}} lo zoccolo e {{ui:Count}} le sue porte. TakeoffCraft non chiede un'altra voce.

L'elenco delle voci mostra ogni quantità (`50.00 SF + 2 EA`). Nella tabella delle quantità la riga della voce ha la sua quantità principale, e ogni altro tipo ottiene una propria riga sotto, come **Stanza 101 (conteggio)**, con i propri sfrido e prezzi di materiali e manodopera. Le esportazioni, la tabella per tavola e la legenda del PDF con i segni le elencano allo stesso modo.

I campi del tipo principale restano suoi: l'altezza o la profondità, la pendenza, le detrazioni e la forma 3D si applicano solo ai suoi segni. Un tratto di zoccolo disegnato per una voce di area è misurato semplicemente lungo la pianta e appare piatto in 3D. Le formule delle composizioni usano i totali del tipo principale.

Un tipo può essere deselezionato solo quando la voce non ha segni di quel tipo: eliminarli, oppure prima spostarli su un'altra voce in **Segno selezionato**. I segni possono essere spostati su qualsiasi voce che accoglie il loro tipo.

Più in basso c'è {{ui:Assembly}}: componenti come montanti o tavole, ciascuno con una propria formula e propri prezzi. Vedi [Composizioni e formule](topic:assemblies).

In fondo: {{ui:Move up}} e {{ui:Move down}} cambiano la posizione della voce nell'elenco e nelle esportazioni, e {{ui:Delete item}} la elimina con tutti i suoi segni (dopo una richiesta di conferma; è possibile annullare).

Le voci di area hanno anche **Pendenza** (falde misurate sulla pendenza: [Tetti e pendenze](topic:roofs-and-slopes)) e **Detrazione** (i loro segni vengono sottratti dalle aree di altre voci: [Misurare le aree](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Le voci lineari hanno **Inclinazione** (Piano, Timpano, Displuvio o compluvio) e, per timpani e displuvi, **Pendenza**.

## Prezzi nella tabella

Si possono anche digitare direttamente {{ui:Waste %}}, i prezzi di materiali e manodopera nella tabella {{ui:Quantities}} in basso ({{ui:By item}}). È la stessa impostazione dell'editor.

## Come viene calcolato il prezzo

Per ogni voce e ogni componente di composizione:

1. **Con sfrido** = quantità × (1 + sfrido %).
2. **Materiali** = con sfrido × materiali per unità, arrotondato al centesimo.
3. **Manodopera** = con sfrido × manodopera per unità, arrotondata al centesimo.
4. **Totale** = materiali + manodopera.

Il {{ui:Job total}} somma ogni voce e ogni componente. Una voce può avere propri prezzi e una composizione allo stesso tempo; vengono conteggiati entrambi, quindi lasciare a 0 i prezzi della voce quando i suoi componenti portano il costo.

## Manodopera per squadra

Invece di un prezzo della manodopera per unità, la manodopera di una voce può derivare da una squadra: quanto produce all'ora, quante persone e quanto guadagna ciascuna. Sotto {{ui:Labor by crew}} nell'editor della voce, spuntare {{ui:Price labor from a crew}} e compilare:

| Campo | Esempio |
|---|---|
| {{ui:Production}} (Produzione) | `20` LF all'ora (nell'unità della voce) per l'intera squadra |
| {{ui:Crew size}} | `2` persone |
| {{ui:Wage $/hour each}} | `45` |

TakeoffCraft calcola, a partire dalla quantità con sfrido:

- **ore squadra** = quantità ÷ produzione (110 LF ÷ 20 = 5.5),
- **ore operaio** = ore squadra × dimensione della squadra (11),
- **giornate squadra** = ore squadra ÷ 8 (0.69),
- **manodopera** = ore operaio × paga ($495.00).

L'editor mostra il risultato e il prezzo che ne deriva ($4.50/LF). Il prezzo della manodopera della voce diventa quindi di sola lettura, nell'editor e nella tabella. L'intestazione della tabella {{ui:Quantities}} aggiunge le ore operaio e le giornate squadra del lavoro. Le esportazioni riportano le ore di ogni squadra, e nella cartella di lavoro la cella della manodopera è una formula sulla squadra (`ROUND(F2/20*2*45,2)`). Deselezionare la casella per tornare a un prezzo per unità.

## Voci metriche

Scegliere m (lineare) o m² (area) come unità. Quantità, altezze e valori delle formule sono quindi in metri. La scala della tavola può essere una qualsiasi predefinita o calibrata; unità e scale sono indipendenti.

## Prossimi passi

- [Misurare tratti lineari](topic:measure-linear)
- [Misurare aree con vuoti](topic:measure-areas)
- [Contare a mano](topic:count-by-hand)
