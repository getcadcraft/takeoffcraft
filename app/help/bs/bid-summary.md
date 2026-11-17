---
title: Sažetak ponude i prijedlog ponude
summary: Dodajte opterećenje rada, porez na promet, režijske troškove, dobit i garanciju na procjenu, napišite uključeno i isključeno i preuzmite PDF prijedloga za slanje.
keywords: ponuda, opterećenje rada, platni spisak, prijedlog, prijedlog ponude, režija, dobit, dodatak, marža, porez na promet, garancija, uključeno, isključeno, uslovi, potpis, klijent, cijena
from: 3208a561
---

Predračun određuje cijene onoga što ste predmjerili. **Sažetak ponude** pretvara ga u cijenu: dodaje porez na promet, režijske troškove, dobit i garanciju, i pravi **PDF prijedloga** s vašim uključenim i isključenim stavkama.

Otvorite ga iz {{ui:Izvoz}} › {{ui:Sažetak ponude i ponuda…}}. Sve u njemu čuva se uz predmjer, a svaka promjena se može poništiti.

## Dodaci

Upišite postotak u bilo koji od pet (ostale ostavite na 0). Računaju se ovim redoslijedom, svaki na onome što je iznad njega:

| Red | Računa se kao |
|---|---|
| Materijal, Rad | Ukupne vrijednosti predračuna (osnovna ponuda kada predmjer ima [alternative](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Opterećenje rada | % opterećenja × rad: porezi na platni spisak, osiguranje i beneficije na plaće vaših ekipa. |
| **Trošak** | Materijal + rad + opterećenje rada. |
| Porez na promet na materijal | % poreza × materijal. |
| Režijski troškovi | % režije × (trošak + porez). |
| Dobit | % dobiti × (trošak + porez + režija). |
| Garancija | % garancije × sve gore navedeno. |
| **Ponuda** | Zbir redova. |

Svaki red se zaokružuje na cent. Radna knjiga prikazuje iste redove ispod ukupne vrijednosti lista Predračun, sa živim formulama. Sažetak se ažurira dok kucate: {{key:Enter}} potvrđuje postotak. Svaka alternativa prikazana je s istim dodacima na vlastitom trošku, pa investitor vidi šta njeno uzimanje zaista mijenja.

## Prijedlog

Upišite šta prijedlog treba da kaže:

- **Projekt** (naziv predmjera kada je prazno), **Za** (klijent) i **Od** (vaša firma).
- **Uključeno** i **Isključeno**: jedno po redu; crtica ili tačka na početku je u redu.
- **Uslovi**: slobodan tekst, na primjer "Važi 30 dana."
- **Navedi stavke i količine**: obim, stavku po stavku, s količinama i bez cijena. Odznačite za paušalni prijedlog.

Izaberite {{ui:PDF ponuda}}. PDF (`<takeoff> - proposal.pdf`) sadrži datum, blok cijene sa svakim dodatkom i ponudom, alternative, obim, uključeno i isključeno, uslove, te redove za potpis i datum. Ako se neke količine nisu mogle izmjeriti (list bez razmjere), to se navodi ispod cijene.

## U izvozima

Kada predmjer ima sažetak ponude, CSV se završava njime, a radna knjiga dobija list **Sažetak ponude** sa svakim redom, njegovim postotkom i iznosom. Pogledajte [Izvoz predračuna](topic:export-estimate).
