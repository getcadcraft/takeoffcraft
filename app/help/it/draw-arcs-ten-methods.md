---
title: Disegnare archi con dieci metodi
summary: Scegliere come è disegnato un arco: tre punti, oppure inizio, centro, fine, angolo, lunghezza, direzione o raggio.
keywords: arco, archi, curva, parete curva, 3 punti, raggio, angolo, lunghezza corda, direzione, centro, inizio, fine, metodo arco
from: 5e3e0db6
---

## Cosa si farà

Disegnare un bordo curvo in un tratto lineare, in un'area o in un vuoto, usando il metodo ad arco che corrisponde alle quote disponibili.

## Passaggi

1. Iniziare un tratto, un contorno o un vuoto e posizionare il punto in cui inizia la curva.
2. Attivare {{ui:Arco}} nella barra degli strumenti oppure premere {{key:R}}.
3. Aprire {{ui:Metodo arco}} nella barra della tavola. Compare solo quando Arco è attivo. Scegliere tra: 3 punti; Inizio, Centro, Fine; Inizio, Centro, Angolo; Inizio, Centro, Lunghezza; Inizio, Fine, Angolo; Inizio, Fine, Direzione; Inizio, Fine, Raggio; Centro, Inizio, Fine; Centro, Inizio, Angolo; Centro, Inizio, Lunghezza.
4. Seguire la barra di stato. Indica cosa attende l'arco: il suo centro, il punto finale, l'angolo, la lunghezza, la direzione o il raggio. Fare clic su un punto, oppure digitare il numero (angolo, lunghezza, raggio e direzione).
5. Quando è fornito l'ultimo dato, l'arco viene aggiunto al tratto. {{key:Esc}} annulla l'arco, {{key:Backspace}} torna indietro di un passo, e {{key:R}} disattiva Arco.

## Note

- Un arco viene rifiutato, con un messaggio nella barra di stato, quando i suoi punti coincidono o sono allineati, oppure quando il raggio non può raggiungere il punto finale.
- La sua lunghezza è la lunghezza esatta dell'arco, e i file vecchi si aprono allo stesso modo. Altro: [Misurare i tratti lineari](topic:measure-linear#arcs-and-curved-walls).
