---
title: Čitanje količina i predračuna
summary: Koristite tablicu Količine po stavci i po listu, ukupni iznos posla, isticanje i upozorenje Nepotpuno.
keywords: količine, ukupno, po stavci, po listu, ukupno za posao, predračun, sažetak, izvješće, isticanje, nepotpuno, troškovi
from: 069d41f1
---

Tablica {{ui:Količine}} pri dnu prozora je vaš predračun u stvarnom vremenu. Mijenja se čim nacrtate, izbrišete, promijenite mjerilo ili uredite cijenu. Količine se nikad ne spremaju; mjere se ponovno iz oznaka pri svakom prikazu, pa ne mogu zastarjeti.

## Po stavci

Odaberite {{ui:Po stavci}} (zadano). Svaka stavka ima redak, a svaka njezina komponenta sklopa ima redak ispod nje.

| Stupac | Značenje |
|---|---|
| Stavka | Naziv, s bojom stavke. „+(n) bez mjerila“ znači da su neke oznake na listovima bez mjerila. |
| Količina | Izmjereni ukupni iznos u jedinici stavke (komponente: rezultat formule). |
| Jedinica | LF, m, SF, SY, m², EA, ili jedinica komponente. |
| Gubitak % | Upisuje se ovdje ili u uređivaču stavke. |
| S gubitkom | Količina × (1 + gubitak). |
| Materijal/jed., Rad/jed. | Jedinične cijene; možete ih upisati ovdje. |
| Materijal, Rad | S gubitkom × cijena, zaokruženo na cent. |
| Ukupno | Materijal + rad. |

Posljednji redak, **Ukupno za posao**, zbraja stupce materijala, rada i ukupno. Isti iznos prikazuje se desno u zaglavlju tablice.

Upišite u ćeliju gubitka ili cijene pa pritisnite {{key:Enter}} ili kliknite izvan nje da primijenite vrijednost. Vrijednost koju TakeoffCraft ne može pročitati označena je crvenim obrubom, a statusna traka kaže zašto, na primjer „Upišite iznos poput 12.50.“

Kliknite redak stavke da istaknete njezine oznake na svim listovima i skočite na list koji ih ima (isto kao kad kliknete stavku pod {{ui:Stavke}}).

## Po listu

Odaberite {{ui:Po listu}} da vidite količinu svake stavke na svakom listu, s brojem oznaka. Kliknite redak da otvorite taj list s istaknutom stavkom. Koristite to da provjerite jesu li svi listovi izmjereni ili da podijelite količine po katu ili području radova.

## Po području

Kada predmjer ima područja ponude, {{ui:Po području}} prikazuje stavke svakog područja i međuzbroj. Vidi [Područja ponude](topic:bid-areas).

## Upozorenje Nepotpuno

Kada nešto nije uključeno u ukupne iznose, zaglavlje prikazuje upozorenje, na primjer:

„Nepotpuno: 1 pogreška formule, 6 oznaka na listovima bez mjerila (nije uključeno u ukupne)“

- **Pogreške formule**: formula komponente sklopa ne može se izračunati. Njezin redak kaže „Pogreška formule: …“. Vidi [Sklopovi i formule](topic:assemblies#when-a-formula-is-wrong).
- **Oznake na listovima bez mjerila**: dajte tim listovima mjerilo. Vidi [Postavljanje mjerila](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Iste napomene idu i u izvezenu tablicu, pa nepotpuni predračun nikad ne izgleda potpunim.

## Istaknite stavku

Kliknite stavku pod {{ui:Stavke}} ili u tablici. Njezine oznake ostaju punog intenziteta na svim listovima, a ostalo blijedi. Popis listova prikazuje „(n) istaknuto“ uz svaki list s njezinim oznakama. Ponovno kliknite stavku da prestanete isticati.

## Ukupni iznosi stavki na bočnoj ploči

Svaka stavka na popisu {{ui:Stavke}} također prikazuje svoju količinu. Odjeljak **Izmjereno** u uređivaču stavke prikazuje vrijednosti koje koriste njezine formule: duljinu, dionice i površinu zida; površinu, opseg i broj površina; ili broj.

## Oznake na PDF-ovima koji nisu otvoreni

Predmjer može uključivati oznake na PDF-ovima koje niste otvorili u ovoj sesiji. I dalje se računaju u svim ukupnim iznosima; popis listova navodi te PDF-ove. Vidi [Spremanje i ponovno otvaranje predmjera](topic:save-and-reopen).

## Više prostora

Gumb sa strelicom s desne strane zaglavlja {{ui:Količine}} sakriva tablicu da list dobije više prostora. Ponovno ga odaberite da tablica vrati.
