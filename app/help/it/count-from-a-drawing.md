---
title: Contare da un disegno
summary: Contare blocchi, oggetti su un layer o testo direttamente da un DWG o DXF: esatto, con blocchi annidati, varianti di blocchi dinamici e serie di blocchi gestiti, in un unico passo di annullamento.
keywords: conta da disegno, conteggio CAD, conteggio blocchi, conta blocchi, inserisci, nome blocco, blocchi annidati, blocco dinamico, variante, minsert, serie, layer, tipo di entità, cerchi, testo, attributo, tag, layer nascosti, conteggio esatto, come fare, porte, apparecchi
from: 5060e24e
---

{{ui:Conteggio CAD}} nella barra della tavola (il comando **Conta dal disegno** negli altri stili di menu) conta ciò che un DWG o DXF dichiara essere presente. Dove {{ui:Conteggio automatico}} cerca l'immagine di un simbolo e può perderne uno o trovarne uno falso, questo conta gli oggetti: ogni inserimento di un blocco chiamato `DOOR-36` è una porta. Aprire prima il disegno: [Aprire un disegno DWG o DXF](topic:open-a-drawing).

## Contare un blocco

1. Aprire una tavola del disegno. {{ui:Conteggio CAD}} è nella barra della tavola.
2. Sceglierlo. La finestra elenca i blocchi con quanti ce ne sono di ciascuno. Cercare per nome, poi sceglierne uno.
3. Controllare la riga sotto l'elenco: "22 trovati, 22 da aggiungere."
4. Sotto {{ui:Aggiungi a}}, scegliere una voce di conteggio, oppure lasciare {{ui:Una nuova voce di conteggio}} e darle un nome.
5. Scegliere il pulsante di aggiunta, che indica il numero: {{ui:Aggiungi 22 segni}}. I segni compaiono nei punti di inserimento del blocco, e la quantità della voce è il conteggio.

È un unico passo di annullamento: {{key:Mod+Z}} rimuove insieme i segni e una nuova voce. Il preventivo, il foglio di calcolo e il PDF segnato trattano la voce come qualsiasi altra voce di conteggio.

### Cosa conta

- **Ogni inserimento del nome del blocco**, qualunque sia la sua scala e il suo angolo, nello spazio modello o nello spazio carta. I nomi dei blocchi non distinguono maiuscole e minuscole.
- **Serie di blocchi** (MINSERT): ogni copia nella serie conta come una.
- **Blocchi annidati.** Un blocco inserito dentro un altro blocco conta a ogni livello di profondità. L'elenco dice "6 dentro altri blocchi"; deselezionare {{ui:Conta anche i blocchi all'interno di altri blocchi}} per contare solo gli inserimenti posti direttamente nel disegno.
- **Blocchi dinamici.** Un blocco dinamico conta con il proprio nome, non con le copie anonime (`*U12`) che il file conserva. I suoi stati sono elencati a parte ("Singolo 12, Doppio 4"): scegliere uno stato per contare solo quelli, oppure {{ui:Ogni variante}}. Quando un file non dice quale stato mostra una copia, quelle copie sono elencate come "(stato non noto)".
- **Filtro per layer.** Un blocco su più layer: sceglierne uno sotto {{ui:Sul layer}}.

### Cosa non conta

- **Layer nascosti.** Un oggetto su un layer spento o congelato nel file (o nascosto in {{ui:Layer}}) viene escluso, e la riga indica quanti: "3 su layer nascosti esclusi". Selezionare {{ui:Conta anche questi}} per includerli.
- **Disegni collegati non aperti** non vengono contati; la finestra lo segnala.
- **Oggetti sovrapposti esattamente a un altro dello stesso tipo** vengono contati come due (sono due oggetti) e la finestra lo segnala: di solito è un errore di disegno da controllare.

## Cosa mostra questa tavola, o l'intero disegno

- **Cosa mostra questa tavola** conta gli oggetti visibili sulla tavola: su un layout, gli oggetti del modello dentro le sue viewport (un layer congelato in una viewport non viene contato lì) più quelli propri del layout.
- **L'intero disegno, ogni oggetto una volta** conta lo spazio modello una sola volta, con i segni sulla tavola Modello, e non conta ciò che più layout mostrano di nuovo.

Contare ciò che mostra un layout e contare ciò che mostra il Modello danno lo stesso numero per gli stessi oggetti; non sommarli entrambi nella stessa voce.

## Contare di nuovo i conteggi

Contare di nuovo lo stesso blocco con la stessa voce aggiunge solo ciò che è nuovo: "22 già contati." Ogni segno rappresenta un oggetto.

## Per layer e tipo

Su {{ui:Per layer e tipo}} scegliere un layer e un tipo di oggetto (cerchi, polilinee, tratteggi…): "tutti i cerchi su E-LITE". Selezionare {{ui:Conta anche gli oggetti all'interno dei blocchi}} per includere quelli dentro le definizioni di blocco, in ogni punto in cui il blocco è inserito.

## Per testo

Su {{ui:Per testo}} digitare il testo, come `A3`, e indicare se deve corrispondere esattamente, contenerlo oppure averlo come parola intera. Contano gli oggetti di testo, il testo con linea di richiamo multipla e i **valori degli attributi** dei blocchi (un attributo di tag `ITEM = A3` viene trovato); scegliere {{ui:Nell'attributo}} per contarne uno solo. I testi più comuni sono elencati da cui fare clic.

## Quando usare invece il Conteggio automatico

Usare {{ui:Conteggio automatico}} per i PDF e per i simboli di un disegno che non sono blocchi (disegnati liberamente, oppure esplosi). Se disegnati come blocchi, contarli qui.
