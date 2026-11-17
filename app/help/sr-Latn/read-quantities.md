---
title: Čitanje količina i predračuna
summary: Koristite tabelu Količine po stavci i po listu, ukupan iznos posla, isticanje i upozorenje Nepotpuno.
keywords: količine, ukupno, po stavci, po listu, ukupno za posao, predračun, sažetak, izveštaj, isticanje, nepotpuno, troškovi
from: 069d41f1
---

Tabela {{ui:Količine}} na dnu prozora je vaš živi predračun. Menja se čim nacrtate, izbrišete ili promenite razmeru ili izmenite cenu. Količine se nikad ne čuvaju; svaki put se ponovo mere iz oznaka, pa ne mogu zastareti.

## Po stavci

Izaberite {{ui:Po stavci}} (podrazumevano). Svaka stavka ima jedan red, a svaka njena komponenta sklopa ima red ispod nje.

| Kolona | Značenje |
|---|---|
| Stavka | Naziv, sa bojom stavke. „+(n) bez razmere” znači da su neke oznake na listovima bez razmere. |
| Količina | Izmeren ukupan iznos u jedinici stavke (komponente: rezultat formule). |
| Jedinica | LF, m, SF, SY, m², EA ili jedinica komponente. |
| Otpad % | Unosi se ovde ili u uređivaču stavke. |
| Sa otpadom | Količina × (1 + otpad). |
| Materijal/jedinica, Rad/jedinica | Cene; možete ih ukucati ovde. |
| Materijal, Rad | Sa otpadom × cena, zaokruženo na cent. |
| Ukupno | Materijal + rad. |

Poslednji red, **Ukupno za posao**, sabira kolone materijala, rada i ukupno. Isti iznos se prikazuje desno u zaglavlju tabele.

Upišite u ćeliju za otpad ili cenu i pritisnite {{key:Enter}} ili kliknite van nje da primenite. Vrednost koju TakeoffCraft ne može da pročita biće obeležena crvenim okvirom, a statusna traka kaže zašto, na primer „Unesite iznos kao 12.50.”

Kliknite red stavke da istaknete njene oznake na svakom listu i da skočite na list koji ih ima (isto kao kada kliknete stavku ispod {{ui:Stavke}}).

## Po listu

Izaberite {{ui:Po listu}} da vidite količinu svake stavke na svakom listu, sa brojem oznaka. Kliknite red da otvorite taj list sa istaknutom stavkom. Koristite ga da proverite da li su svi listovi izmereni ili da podelite količine po spratu ili oblasti radova.

## Po oblastima

Kada predmer ima oblasti ponude, {{ui:Po oblastima}} prikazuje stavke svake oblasti i međuzbir. Pogledajte [Oblasti ponude](topic:bid-areas).

## Upozorenje Nepotpuno

Kada nešto nije uračunato u zbirove, zaglavlje prikazuje upozorenje, na primer:

„Nepotpuno: 1 greška u formuli, 6 oznaka na listovima bez razmere (nisu u zbirovima)”

- **Greške u formuli**: formula komponente sklopa ne može da se izračuna. Njen red kaže „Greška u formuli: …”. Pogledajte [Sklopovi i formule](topic:assemblies#when-a-formula-is-wrong).
- **Oznake na listovima bez razmere**: dajte tim listovima razmeru. Pogledajte [Postavljanje razmere](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Iste napomene idu i u izvezenu tabelu, pa nepotpun predračun nikad ne izgleda kao potpun.

## Istakni stavku

Kliknite stavku pod {{ui:Stavke}} ili u tabeli. Njene oznake ostaju punog intenziteta na svakom listu, a ostalo bledi. Spisak listova prikazuje „(n) istaknuto” uz svaki list sa njenim oznakama. Kliknite stavku ponovo da prestanete sa isticanjem.

## Ukupni iznosi stavki u bočnom panelu

Svaka stavka na spisku {{ui:Stavke}} takođe prikazuje svoju količinu. Blok **Izmereno** u uređivaču stavke prikazuje vrednosti koje koriste njene formule: dužinu, deonice i površinu zida; površinu, obim i broj površina; ili broj.

## Oznake na PDF-ovima koji nisu otvoreni

Predmer može da sadrži oznake na PDF-ovima koje niste otvorili u ovom radu. I dalje se računaju u svim zbirovima; spisak listova navodi te PDF-ove. Pogledajte [Sačuvaj i ponovo otvori predmer](topic:save-and-reopen).

## Više prostora

Dugme sa strelicom na desnoj strani zaglavlja {{ui:Količine}} sakriva tabelu da list dobije više prostora. Izaberite ga ponovo da se tabela vrati.
