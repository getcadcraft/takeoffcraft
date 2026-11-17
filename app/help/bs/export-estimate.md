---
title: Izvoz predračuna i označenog PDF-a
summary: Preuzmi predračun kao XLSX radnu knjigu sa živim formulama ili kao CSV, te kopije PDF-ova s nacrtanim predmjerom.
keywords: prijedlog, sažetak ponude, izvoz, xlsx, tabela, radna knjiga, csv, označeni pdf, ispis predmjera, izvještaj, dijeljenje, slanje, legenda
from: 334f89c7
---

Izvozi su preuzimanja. Prave se na računaru iz predmjera i otvorenih PDF-ova; ništa se nigdje ne šalje.

## Predračun kao tabela (XLSX)

1. Otvori meni {{ui:Export}} na alatnoj traci i izaberi {{ui:XLSX}}.
   Preglednik preuzima `(name).xlsx`. Statusna traka kaže "Izvezeno (name).xlsx (predračun sa živim formulama, po listu, oznake, razmjere)." i dodaje upozorenje kada je predračun nepotpun.
2. Otvori ga u tabličnom programu.

Radna knjiga ima četiri radna lista, a izvještaji ispod kada se primjenjuju:

| Radni list | Sadržaj |
|---|---|
| Predračun | Red po stavci i po komponenti: količina, otpad, količina s otpadom, cijene, materijal, rad, ukupno, napomene. Ukupno za posao na dnu. |
| Po listu | Količina svake stavke na svakom listu, s brojem oznaka. |
| Oznake | Svaka oznaka: list, stavka, vrsta, količina i detalji (dužine segmenata, bruto i površine izreza, obim). |
| Razmjere | Svaki list koji ima razmjeru ili oznake: njegova razmjera, kako je postavljena (unaprijed podešeno ili kalibrirano na kojoj udaljenosti) i stope po jedinici PDF-a. |
| Sažetak predmjera | Količina svake stavke, CSI broj, oznake i listovi, bez cijena. |
| Spisak materijala | Svaki dio sklopa zbrojen kroz cijeli predmjer (dio koji koristi više stavki je jedan red), s otpadom i troškom materijala, te stavke koje ga koriste. |
| Zahtjev za ponudu | Spisak materijala za slanje dobavljaču: količine s otpadom, prazna kolona jediničnih cijena, a iznosi i ukupno se popunjavaju kako se cijene upisuju. |
| Po diviziji | Materijal, rad i ukupno po CSI MasterFormat diviziji, kada stavke imaju {{ui:CSI number}}. |

Uz [sažetak ponude](topic:bid-summary), radni list Predračun se također završava svojim uvećanjima (troškovi rada, porez na promet, režije, dobit, garancija i ponuda), kao žive formule.

Radni list Predračun zadržava **žive formule**: količina s otpadom, zaokruženi iznosi materijala i rada, ukupno svakog reda i ukupno za posao. Tablični programi ih ponovo računaju, pa možeš promijeniti cijenu ili otpad u tabeli i ukupni iznosi se prate. Brojevi koje je TakeoffCraft izračunao također su upisani u ćelije i podudaraju se do centa.

Kolona napomena navodi formulu svake komponente, greške u formulama, oznake na listovima bez razmjere, površinu zida i obim. Kada nešto nedostaje, red ukupno za posao kaže "Nepotpuno: vidi napomene iznad".

Radna knjiga je provjerena u LibreOffice Calc-u, koji ju je ponovo izračunao na iste ukupne iznose. Još nije otvorena u Excelu. Detalji po kolonama su u [Kolone izvoza](topic:export-columns).

## Predračun kao CSV

Otvori meni {{ui:Export}} i izaberi {{ui:CSV}}. Dobijaš `(name).csv`: iste redove i kolone kao radni list Predračun, kao obične vrijednosti (bez formula), i ukupno za posao. Koristi ga za unos u drugi sistem za predračune ili računovodstvo.

CSV sadrži samo predračun; za količine po listu i spisak oznaka koristi XLSX. {{ui:Material list}} u istom meniju čuva sam spisak materijala kao CSV, za naručivanje.

## Predračun u Google Sheets

Iznad tabele {{ui:Quantities}}, **Kopiraj za Google Sheets** stavlja predračun na međuspremnik kao tekst odvojen tabulatorima, s istim redovima kao CSV. U Google tabeli klikni na ćeliju A1 i zalijepi. TakeoffCraft se ne prijavljuje na Google i ništa tamo ne šalje.

## Nedostajuće cijene i odobrenje

Stavka s količinom bez cijene u napomenama kaže **Nema cijene**, a izvoz je broji pod ukupnim iznosima. Kada je predračun odobren, izvoz navodi ko ga je odobrio, kada i za koji ukupan iznos. Vidi [Nedostajuće cijene i odobravanje predračuna](topic:sign-off-the-estimate).

## Označeni PDF

1. Otvori PDF-ove čije oznake želiš nacrtane.
2. Otvori meni {{ui:Export}} i izaberi {{ui:Marked PDF}}.
   Prikazuje se "Upisujem označeni PDF…", zatim preglednik preuzima jednu datoteku po označenom PDF-u, nazvanu `(PDF name) (takeoff).pdf`.

U kopiji:

- dionice su nacrtane kao linije u boji svoje stavke,
- površine su lagano popunjene uz punu konturu, a izrezi ostaju otvoreni,
- brojanja su tačke,
- svaka stranica s oznakama dobija malu legendu u donjem lijevom uglu: boju, naziv i količinu svake stavke na toj stranici.

Originalni PDF-ovi se ne mijenjaju.

Napomene:

- Piše se samo za PDF-ove koji su otvoreni. Oznake na PDF-ovima koji nisu otvoreni ostaju u ukupnim iznosima, ali se ne crtaju; prvo otvori te PDF-ove.
- Nazivi u legendi koriste standardni PDF font. Slova koja ne može prikazati ispisuju se kao "?".
- Šifrovani PDF se ne može kopirati s oznakama: "Ovaj PDF je zaštićen lozinkom ili šifrovan, pa označena kopija ne može biti napravljena. Sam predmjer je u redu; izvezi tabelu umjesto toga."
- Prvi {{ui:Marked PDF}} u kartici učitava pisač PDF-a. Van mreže, on je dostupan samo ako traka aplikacije pokazuje {{ui:Offline ready}}; vidi [Rad van mreže](common:offline).

:::chromium
Sa više označenih PDF-ova, Chrome i Edge mogu jednom pitati smije li ovaj sajt preuzeti više datoteka. Izaberi Dozvoli, inače dobijaš samo prvu datoteku.
:::

## Nema šta izvesti?

- {{ui:XLSX}} i {{ui:CSV}} trebaju bar jednu stavku: "Još nema ničega za izvoz: napravi stavku i izmjeri je."
- {{ui:Marked PDF}} treba oznake na otvorenom PDF-u: "Još nema oznaka na otvorenim PDF-ovima."

## Spasi i predmjer

Izvoz je izvještaj. Da nastaviš rad na predmjeru kasnije, također izaberi {{ui:Save takeoff}}: vidi [Spasi i ponovo otvori predmjer](topic:save-and-reopen).

Da dodaš režije, dobit, porez i garanciju te pošalješ prijedlog, vidi [Sažetak ponude i prijedlog](topic:bid-summary).
