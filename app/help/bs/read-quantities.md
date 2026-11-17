---
title: Čitanje količina i predračuna
summary: Koristi tabelu Količine po stavci i po listu, ukupan iznos posla, isticanje i upozorenje Nepotpuno.
keywords: količine, ukupno, po stavci, po listu, ukupan iznos posla, predračun, sažetak, izvještaj, isticanje, nepotpuno, troškovi
from: 069d41f1
---

Tabela {{ui:Količine}} pri dnu prozora je tvoj predračun uživo. Mijenja se čim nacrtaš, izbrišeš, promijeniš razmjeru ili uređuješ cijenu. Količine se nikad ne spremaju; mjere se iznova iz oznaka svaki put, pa ne mogu zastarjeti.

## Po stavci

Odaberi {{ui:Po stavci}} (zadano). Svaka stavka ima red, a svaka njena komponenta sklopa ima red ispod nje.

| Kolona | Značenje |
|---|---|
| Stavka | Naziv, s bojom stavke. "+(n) bez razmjere" znači da su neke oznake na listovima bez razmjere. |
| Količina | Izmjereni ukupni iznos u jedinici stavke (komponente: rezultat formule). |
| Jedinica | LF, m, SF, SY, m², EA ili jedinica komponente. |
| Otpad % | Upisuje se ovdje ili u uređivaču stavke. |
| Sa otpadom | Količina × (1 + otpad). |
| Materijal/jedinica, Rad/jedinica | Cijene; možeš ih upisati ovdje. |
| Materijal, Rad | Sa otpadom × cijena, zaokruženo na cent. |
| Ukupno | Materijal + rad. |

Posljednji red, **Ukupno posla**, zbraja kolone materijala, rada i ukupno. Isti iznos se prikazuje desno u zaglavlju tabele.

Upiši u ćeliju otpada ili cijene i pritisni {{key:Enter}} ili klikni van nje da primijeniš. Vrijednost koju TakeoffCraft ne može pročitati obrubljena je crveno, a statusna traka kaže zašto, na primjer "Upiši iznos, npr. 12.50."

Klikni red stavke da istakneš njene oznake na svakom listu i skočiš na list koji ih ima (isto kao klik na nju pod {{ui:Stavke}}).

## Po listu

Odaberi {{ui:Po listu}} da vidiš količinu svake stavke na svakom listu, s brojem oznaka. Klikni red da otvoriš taj list s istaknutom stavkom. Koristi to da provjeriš je li svaki list obrađen ili da podijeliš količine po spratu ili području radova.

## Po cjelini

Kad predmjer ima ponuđačke površine, {{ui:Po cjelini}} prikazuje stavke svake površine i međuzbir. Pogledaj [Ponuđačke površine](topic:bid-areas).

## Upozorenje Nepotpuno

Kad nešto nije uključeno u zbirove, zaglavlje prikazuje upozorenje, na primjer:

"Nepotpuno: 1 greška u formuli, 6 oznaka na listovima bez razmjere (nisu u zbirovima)"

- **Greške u formuli**: formulu komponente sklopa nije moguće izračunati. Njen red kaže "Greška u formuli: …". Pogledaj [Sklopovi i formule](topic:assemblies#when-a-formula-is-wrong).
- **Oznake na listovima bez razmjere**: daj tim listovima razmjeru. Pogledaj [Postavi razmjeru](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Iste napomene idu i u izvezenu tabelu, pa nepotpun predračun nikad ne izgleda kompletno.

## Istakni stavku

Klikni stavku pod {{ui:Stavke}} ili u tabeli. Njene oznake ostaju punog intenziteta na svakom listu, a ostalo blijedi. Spisak listova prikazuje "(n) istaknuto" uz svaki list s njegovim oznakama. Ponovo klikni stavku da prestaneš s isticanjem.

## Iznosi stavki u bočnom panelu

Svaka stavka u spisku {{ui:Stavke}} takođe prikazuje svoju količinu. Blok **Izmjereno** u uređivaču stavke prikazuje vrijednosti koje koriste njene formule: dužinu, dionice i površinu zida; površinu, obim i broj površina; ili broj komada.

## Oznake na PDF-ovima koji nisu otvoreni

Predmjer može sadržavati oznake na PDF-ovima koje nisi otvorio u ovom navratu. One i dalje ulaze u svaki zbir; spisak listova navodi te PDF-ove. Pogledaj [Spasi i ponovo otvori predmjer](topic:save-and-reopen).

## Više prostora

Dugme sa strelicom s desne strane zaglavlja {{ui:Količine}} sakriva tabelu da list dobije više prostora. Klikni ga ponovo da vratiš tabelu.
