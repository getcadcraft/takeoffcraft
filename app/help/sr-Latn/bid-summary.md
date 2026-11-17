---
title: Pregled ponude i predlog
summary: Dodajte opterećenje rada, porez na promet, opšte troškove, dobit i garanciju na procenu, napišite uključeno i isključeno i preuzmite PDF predlog za slanje.
keywords: ponuda, opterećenje rada, opterećenje, platni spisak, predlog, predračun, opšti troškovi, dobit, marža, porez na promet, garancija, uključeno, isključeno, uslovi, potpis, klijent, cena
from: 3208a561
---

Procena određuje cenu onoga što ste izmerili. **Pregled ponude** to pretvara u cenu: dodaje porez na promet, opšte troškove, dobit i garanciju, i pravi **PDF predlog** sa vašim stavkama uključeno i isključeno.

Otvorite ga iz {{ui:Izvezi}} › {{ui:Pregled ponude i predlog…}}. Sve u njemu čuva se uz predmer, a svaka promena može se opozvati.

## Marže

Upišite procenat u bilo koju od pet (ostale ostavite na 0). Računaju se tim redom, svaka na onome što je iznad nje:

| Linija | Izračunato kao |
|---|---|
| Materijal, Rad | Zbirovi procene (osnovna ponuda kad predmer ima [alternative](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Opterećenje rada | % opterećenja × rad: porezi na platni spisak, osiguranje i beneficije na zarade vaših ekipa. |
| **Trošak** | Materijal + rad + opterećenje rada. |
| Porez na promet na materijal | % poreza × materijal. |
| Opšti troškovi | % opštih troškova × (trošak + porez). |
| Dobit | % dobiti × (trošak + porez + opšti troškovi). |
| Garancija | % garancije × sve iznad. |
| **Ponuda** | Zbir linija. |

Svaka linija se zaokružuje na cent. Radna sveska prikazuje iste linije ispod ukupnog zbira lista Procena, sa živim formulama. Sažetak se ažurira dok kucate: {{key:Enter}} potvrđuje procenat. Svaka alternativa prikazana je sa istim maržama na sopstvenom trošku, pa vlasnik vidi šta njeno uzimanje zaista menja.

## Predlog

Upišite šta predlog treba da kaže:

- **Projekat** (naziv predmera kad je prazno), **Za** (klijent) i **Od** (vaša firma).
- **Uključeno** i **Isključeno**: jedno po redu; vodeća crtica ili tačka su u redu.
- **Uslovi**: slobodan tekst, na primer „Važi 30 dana.“
- **Navedi stavke i količine**: opseg, stavku po stavku, sa količinama i bez cena. Isključite za paušalni predlog.

Izaberite {{ui:PDF predlog}}. PDF (`<takeoff> - proposal.pdf`) ima datum, blok cena sa svakom maržom i ponudom, alternative, opseg, uključeno i isključeno, uslove i linije za potpis i datum. Ako neke količine ne mogu da se izmere (list bez razmere), to se navodi ispod cene.

## U izvozima

Kad predmer ima pregled ponude, CSV se završava njim, a radna sveska dobija list **Pregled ponude** sa svakom linijom, njenim procentom i iznosom. Pogledajte [Izvoz procene](topic:export-estimate).
