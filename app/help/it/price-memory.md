---
title: Memoria dei prezzi dei lavori passati
summary: TakeoffCraft ricorda le tariffe usate nei computi passati, solo su questo computer, così un nuovo computo può partire da ciò che si è pagato l'ultima volta. Vederle, usarle, dimenticarle.
keywords: memoria dei prezzi, prezzi, ricorda i prezzi, ultimo lavoro, lavori passati, prezzo tipico, mediana, tariffe, senza prezzo, riprezza, impara da un computo passato, dimentica, libreria
from: 7279f1a1
---

{{ui:Prezzi}} nella barra degli strumenti (il simbolo del dollaro) apre ciò che TakeoffCraft ricorda sui prezzi usati. È un semplice elenco: per ogni nome di voce, le tariffe degli ultimi lavori. È conservato in questo browser (in Studio, nella propria vista web) accanto alla Libreria dei prezzi, mai dentro un file di computo, e nulla viene inviato a nessuno. Non è un modello addestrato.

## Cosa viene ricordato

Quando si salva un computo, ogni voce che ha un prezzo ed è usata (ha un segno, oppure una quantità digitata superiore a zero) viene ricordata con il suo nome e tipo: tariffa di materiale, tariffa di manodopera, sfrido e unità. Un lavoro è composto dai file di progetto da cui il computo viene ricavato, quindi risalvare lo stesso computo sostituisce i propri prezzi invece di aggiungere un altro lavoro. Gli ultimi 12 lavori sono conservati per ciascun nome.

Per partire dai lavori più vecchi, scegliere {{ui:Impara da un computo passato…}} e selezionare un computo salvato (.json). Le sue voci prezzate e usate vengono ricordate allo stesso modo.

I nomi corrispondono quando le loro parole corrispondono, indipendentemente da maiuscole o punteggiatura ("2x4 Stud, 8 ft" e "2x4 stud 8 FT" sono la stessa cosa). Le stesse parole per un altro tipo di voce (una voce lineare e una voce di conteggio) non sono lo stesso prezzo.

## Usarla in un nuovo computo

1. Creare le voci del nuovo computo.
2. Scegliere {{ui:Prezzi}}. Sotto {{ui:Questo computo}} si vede ogni voce che ha un prezzo ricordato, ciò che vi è ora, le tariffe dell'ultimo lavoro, le tariffe tipiche (il valore centrale dei lavori ricordati) e l'intervallo.
3. Scegliere {{ui:Usa l'ultimo}} o {{ui:Usa il tipico}} su una voce, oppure {{ui:Prezza N voci senza prezzo dalla memoria}} per riempire ogni voce che non ha ancora un prezzo con quella dell'ultimo lavoro.

Ogni uso è un passo: {{key:Ctrl+Z}} lo annulla. Una voce che ha solo un nome simile (un nome contenuto nell'altro) lo segnala, e i pulsanti usano le tariffe del nome simile. Un prezzo ricordato a pezzo non viene mai assegnato a una voce a piede: la finestra segnala che le unità differiscono e la lascia com'è.

## Vederle, cambiarle, dimenticarle

{{ui:Tutto ciò che è memorizzato}} elenca ogni nome con le sue tariffe e il numero di lavori. Il pulsante del cestino dimentica un nome; {{ui:Cancella tutti i prezzi}} li dimentica tutti. Disattivare {{ui:Ricorda i prezzi quando salvo un computo}} per smettere di ricordarli; ciò che è già presente resta finché non lo si dimentica. I computi e la Libreria dei prezzi non vengono mai modificati.

## Con il proprio assistente

Se si consentono gli assistenti in Impostazioni, possono leggere ciò che è ricordato per le voci del computo (prices_list) e prezzarne le voci da essa (prices_apply, che può prima mostrare un'anteprima). È lo stesso elenco della finestra.
