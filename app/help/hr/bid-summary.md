---
title: Sažetak ponude i prijedlog
summary: Dodajte dodatne troškove rada, porez na promet, režijske troškove, dobit i jamstvo procjeni, napišite što je uključeno i isključeno te preuzmite PDF prijedloga za slanje.
keywords: ponuda, dodatni troškovi rada, troškovi rada, plaće, prijedlog, ponuda, režijski troškovi, dobit, markup, marža, porez na promet, jamstvo, uključeno, isključeno, uvjeti, potpis, naručitelj, cijena
from: 3208a561
---

Procjena određuje što ste izmjerili. **Sažetak ponude** pretvara je u cijenu: dodaje porez na promet, režijske troškove, dobit i jamstvo te izrađuje **PDF prijedloga** s vašim uključenim i isključenim stavkama.

Otvorite ga iz {{ui:Izvoz}} › {{ui:Sažetak ponude i prijedlog…}}. Sve u njemu sprema se s izvedbom, a svaka promjena se može poništiti.

## Markupi

Upišite postotak u bilo kojem od pet (ostale ostavite na 0). Izračunavaju se ovim redoslijedom, svaki na onome što je iznad:

| Redak | Izračunava se kao |
|---|---|
| Materijal, Rad | Ukupni iznosi procjene (osnovna ponuda kada izvedba ima [alternative](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Dodatni troškovi rada | Postotak × rad: porezi na plaće, osiguranje i beneficije na plaće vaših ekipa. |
| **Trošak** | Materijal + rad + dodatni troškovi rada. |
| Porez na promet na materijal | Postotak poreza × materijal. |
| Režijski troškovi | Postotak × (trošak + porez). |
| Dobit | Postotak × (trošak + porez + režijski troškovi). |
| Jamstvo | Postotak × sve iznad. |
| **Ponuda** | Zbroj redaka. |

Svaki redak zaokružuje se na cent. Radna knjiga prikazuje iste retke ispod ukupnog iznosa radnog lista Procjena, s živim formulama. Sažetak se ažurira dok tipkate: {{key:Enter}} prihvaća postotak. Svaka alternativa prikazuje se s istim markupima na vlastitom trošku, pa vlasnik vidi što ona stvarno mijenja.

## Prijedlog

Ispunite što prijedlog treba reći:

- **Projekt** (naziv izvedbe kada je prazno), **Za** (naručitelj) i **Od** (vaša tvrtka).
- **Uključeno** i **Isključeno**: jedno po retku; vodeća crtica ili oznaka s točkom je u redu.
- **Uvjeti**: slobodan tekst, npr. „Vrijedi 30 dana.“
- **Popiši stavke i količine**: opseg, stavku po stavku, s količinama i bez cijena. Odznačite za prijedlog paušalne cijene.

Odaberite {{ui:PDF prijedloga}}. PDF (`<izvedba> - prijedlog.pdf`) ima datum, blok cijene sa svakim markupom i ponudom, alternative, opseg, uključeno i isključeno, uvjete te crte za potpis i datum. Ako neke količine nisu mogle biti izmjerene (list bez mjerila), to se navodi ispod cijene.

## U izvozima

Kada izvedba ima sažetak ponude, CSV završava njime, a radna knjiga dobiva radni list **Sažetak ponude**, sa svakim retkom, njegovim postotkom i iznosom. Vidi [Izvoz procjene](topic:export-estimate).
