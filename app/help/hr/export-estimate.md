---
title: Izvoz predračuna i označenog PDF-a
summary: Preuzmite predračun kao XLSX radnu knjigu s aktivnim formulama ili kao CSV te kopije svojih PDF-ova s nacrtanim predmjerom.
keywords: ponuda, sažetak ponude, izvoz, xlsx, proračunska tablica, radna knjiga, csv, označeni pdf, ispis predmjera, izvještaj, dijeljenje, slanje, legenda
from: 334f89c7
---

Izvozi su preuzimanja. Izrađuju se na vašem računalu iz predmjera i otvorenih PDF-ova; ništa se nigdje ne šalje.

## Predračun kao proračunska tablica (XLSX)

1. Otvorite izbornik {{ui:Izvoz}} na alatnoj traci i odaberite {{ui:XLSX}}.
   Vaš preglednik preuzima `(name).xlsx`. Statusna traka piše „Izvezeno (name).xlsx (predračun s aktivnim formulama, po listu, oznakama, mjerilima).“ i dodaje upozorenje kad je predračun nepotpun.
2. Otvorite je u svom programu za proračunske tablice.

Radna knjiga ima četiri radna lista, a izvještaji dolje kad se primjenjuju:

| Radni list | Sadržaj |
|---|---|
| Predračun | Redak po stavci i po komponenti: količina, gubitak, količina s gubitkom, cijene, materijal, rad, ukupno, napomene. Ukupni zbroj posla na dnu. |
| Po listu | Količina svake stavke na svakom listu, s brojem oznaka. |
| Oznake | Svaka oznaka: list, stavka, vrsta, količina i pojedinosti (duljine dionica, bruto i izrezane površine, opseg). |
| Mjerila | Svaki list koji ima mjerilo ili oznake: njegovo mjerilo, kako je postavljeno (predložak ili kalibrirano prema udaljenosti koju ste upisali) i stope po jedinici PDF-a. |
| Sažetak predmjera | Količina svake stavke, CSI broj, oznake i listovi, bez cijena. |
| Popis materijala | Svaki dio sklopa zbrojen kroz cijeli predmjer (isti dio koji koristi više stavki jednak je jednom retku), s gubitkom i troškom materijala te stavkama koje ga koriste. |
| Zahtjev za ponudu | Popis materijala za slanje dobavljaču: količine s gubitkom, prazan stupac jediničnih cijena, a iznosi i ukupno se popunjavaju kako upisujete cijene. |
| Po odjeljku | Materijal, rad i ukupno po CSI MasterFormat odjeljku, kad stavke imaju {{ui:CSI broj}}. |

Uz [sažetak ponude](topic:bid-summary), i radni list Predračun završava svojim maržama (trošak rada, porez na promet, opći troškovi, dobit, jamstvo i ponuda) kao aktivnim formulama.

Radni list Predračun zadržava **aktivne formule**: količinu s gubitkom, zaokružene iznose materijala i rada, ukupno svakog retka i ukupni zbroj posla. Proračunske tablice ponovno izračunavaju te vrijednosti, pa možete promijeniti cijenu ili gubitak u tablici i zbrojevi slijede. Brojke koje je izračunao TakeoffCraft također su pohranjene u ćelijama i podudaraju se do centa.

Stupac napomena navodi formulu svake komponente, greške u formulama, oznake na listovima bez mjerila, površinu zida i opseg. Kad je nešto izostavljeno, redak ukupnog zbroja piše „Nepotpuno: vidi napomene iznad“.

Radna knjiga je provjerena u LibreOffice Calc, koji je ponovno izračunao iste zbrojeve. U Excelu još nije otvorena. Podatke po stupcima potražite u [Stupci izvoza](topic:export-columns).

## Predračun kao CSV

Otvorite izbornik {{ui:Izvoz}} i odaberite {{ui:CSV}}. Dobit ćete `(name).csv`: iste retke i stupce kao radni list Predračun, kao obične vrijednosti (bez formula), i ukupni zbroj posla. Koristite ga za lijepljenje u drugi sustav za predračunavanje ili računovodstvo.

CSV sadrži samo predračun; za količine po listu i popis oznaka koristite XLSX. {{ui:Popis materijala}} u istom izborniku sprema sam popis materijala kao CSV, za naručivanje.

## Predračun u Google Sheets

Iznad tablice {{ui:Količine}}, **Kopiraj za Google Sheets** stavlja predračun u međuspremnik kao tekst odvojen tabulatorima, s istim redovima kao CSV. U Google Sheets kliknite ćeliju A1 i zalijepite. TakeoffCraft se ne prijavljuje u Google i tamo ništa ne šalje.

## Nedostajuće cijene i potpisivanje

Stavka s količinom i bez cijene u svojim napomenama piše **Nema cijene**, a izvoz ih broji pod ukupnim zbrojevima. Kad je predračun potpisan, izvoz navodi tko ga je potpisao, kada i za koji ukupni iznos. Vidi [Nedostajuće cijene i potpisivanje predračuna](topic:sign-off-the-estimate).

## Označeni PDF

1. Otvorite PDF-ove čije oznake želite nacrtati.
2. Otvorite izbornik {{ui:Izvoz}} i odaberite {{ui:Označeni PDF}}.
   Prikazuje se „Pisanje označenog PDF-a…“, zatim vaš preglednik preuzima jednu datoteku po označenom PDF-u, nazvanu `(PDF name) (takeoff).pdf`.

U kopiji:

- dionice su nacrtane kao linije u boji svoje stavke,
- površine su lagano ispunjene s punim obrubom, a izrezi ostavljeni otvoreni,
- brojanja su točkice,
- svaka stranica s oznakama dobiva malu legendu u donjem lijevom kutu: boju, naziv i količinu svake stavke na toj stranici.

Izvorni PDF-ovi se ne mijenjaju.

Napomene:

- Pišu se samo PDF-ovi koji su otvoreni. Oznake na PDF-ovima koji nisu otvoreni ostaju u zbrojevima, ali se ne crtaju; prvo otvorite te PDF-ove.
- Nazivi u legendi koriste standardni PDF font. Slova koja ne može prikazati ispisuju se kao „?“.
- Šifriran PDF ne može se kopirati s oznakama: „Ovaj PDF je zaštićen lozinkom ili šifriran, pa označena kopija ne može biti napisana. Sam predmjer je u redu; izvezite umjesto toga proračunsku tablicu.“
- Prvi {{ui:Označeni PDF}} u kartici učitava pisač PDF-a. Izvan mreže on je dostupan samo ako traka aplikacije prikazuje {{ui:Spremno za offline}}; vidi [Rad izvan mreže](common:offline).

:::chromium
Uz više označenih PDF-ova Chrome i Edge mogu jednom pitati smije li ova stranica preuzeti više datoteka. Odaberite Dopusti, inače dobijete samo prvu datoteku.
:::

## Nema što izvesti?

- {{ui:XLSX}} i {{ui:CSV}} trebaju barem jednu stavku: „Još nema što izvesti: napravite stavku i izmjerite je.“
- {{ui:Označeni PDF}} treba oznake na otvorenom PDF-u: „Još nema oznaka na otvorenim PDF-ovima.“

## Spremite i predmjer

Izvoz je izvještaj. Da kasnije nastavite raditi na predmjeru, odaberite i {{ui:Spremi predmjer}}: vidi [Spremanje i ponovno otvaranje predmjera](topic:save-and-reopen).

Za dodavanje općih troškova, dobiti, poreza i jamstva te slanje ponude vidi [Sažetak ponude i ponuda](topic:bid-summary).
