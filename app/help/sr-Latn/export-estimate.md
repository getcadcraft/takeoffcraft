---
title: Izvoz predračuna i PDF-a sa oznakama
summary: Preuzmite predračun kao XLSX radnu knjigu sa aktivnim formulama ili kao CSV, i kopije vaših PDF-ova sa nacrtanim predmerom.
keywords: predlog, rezime ponude, izvoz, xlsx, tabela, radna knjiga, csv, PDF sa oznakama, štampa predmera, izveštaj, deljenje, slanje, legenda
from: 334f89c7
---

Izvozi su preuzimanja. Prave se na vašem računaru od predmera i otvorenih PDF-ova; ništa se ne šalje nigde.

## Predračun kao tabela (XLSX)

1. Otvorite meni {{ui:Izvezi}} na traci sa alatkama i izaberite {{ui:XLSX}}.
   Vaš pregledač preuzima `(naziv).xlsx`. Statusna traka piše „Izvezeno (naziv).xlsx (predračun sa aktivnim formulama, po listu, oznakama, razmerama).“ i dodaje upozorenje kada je predračun nepotpun.
2. Otvorite ga u svom programu za tabele.

Radna knjiga ima četiri radna lista, i izveštaje ispod kada se primenjuju:

| Radni list | Sadržaj |
|---|---|
| Predračun | Red po stavci i po komponenti: količina, škart, količina sa škartom, cene, materijal, rad, ukupno, beleške. Ukupan zbir na dnu. |
| Po listu | Količina svake stavke na svakom listu, sa brojem oznaka. |
| Oznake | Svaka oznaka: list, stavka, vrsta, količina i detalj (dužine segmenata, bruto i površine otvora, obim). |
| Razmere | Svaki list koji ima razmeru ili oznake: njegova razmera, kako je postavljena (predložak, ili kalibrisana na kom rastojanju) i stope po jedinici PDF-a. |
| Rezime predmera | Količina svake stavke, CSI broj, oznake i listovi, bez cena. |
| Spisak materijala | Svaki deo sklopa sabran kroz ceo predmer (isti deo koji koristi više stavki je jedan red), sa škartom i troškom materijala, i stavkama koje ga koriste. |
| Zahtev za ponudu | Spisak materijala za slanje dobavljaču: količine sa škartom, prazna kolona jediničnih cena, i proširenja i ukupan zbir koji se popunjavaju kako se cene upisuju. |
| Po podeli | Materijal, rad i ukupno po CSI MasterFormat podeli, kada stavke imaju {{ui:CSI broj}}. |

Uz [rezime ponude](topic:bid-summary), radni list Predračun se završava i svojim dodacima (doprinosi za rad, porez na promet, opšti troškovi, dobit, garancija i ponuda), kao aktivne formule.

Radni list Predračun zadržava **aktivne formule**: količinu sa škartom, zaokružene iznose materijala i rada, ukupno svakog reda i ukupan zbir. Tabelarni programi ih ponovo računaju, pa možete promeniti cenu ili škart u tabeli i zbirovi se menjaju. Brojevi koje je TakeoffCraft izračunao takođe su sačuvani u ćelijama i slažu se do centa.

Kolona beleški navodi formulu svake komponente, greške u formulama, oznake na listovima bez razmere, površinu zida i obim. Kada je nešto izostavljeno, red ukupnog zbira kaže „Nepotpuno: vidi beleške iznad“.

Radna knjiga je proverena u LibreOffice Calc, koji ju je ponovo izračunao na iste zbirove. Još nije otvorena u Excel-u. Detalji po kolonama su u [Kolone izvoza](topic:export-columns).

## Predračun kao CSV

Otvorite meni {{ui:Izvezi}} i izaberite {{ui:CSV}}. Dobijate `(naziv).csv`: iste redove i kolone kao radni list Predračun, kao obične vrednosti (bez formula), i ukupan zbir. Koristite ga za unos u drugi sistem za predračune ili računovodstvo.

CSV sadrži samo predračun; za količine po listu i spisak oznaka koristite XLSX. {{ui:Spisak materijala}} u istom meniju čuva sam spisak materijala kao CSV, za naručivanje.

## Predračun u Google Sheets

Iznad tabele {{ui:Količine}}, **Kopiraj za Google Sheets** stavlja predračun u privremenu memoriju kao tekst odvojen tabulatorima, sa istim redovima kao CSV. U Google tabeli kliknite ćeliju A1 i nalepite. TakeoffCraft se ne prijavljuje na Google i ništa tamo ne šalje.

## Nedostajuće cene i potpisivanje

Red sa količinom a bez cene u svojim beleškama kaže **Nema cene**, a izvoz ih broji pod ukupnim zbirovima. Kada je predračun potpisan, izvoz navodi ko ga je potpisao, kada i za koji ukupan iznos. Vidi [Nedostajuće cene i potpisivanje predračuna](topic:sign-off-the-estimate).

## PDF sa oznakama

1. Otvorite PDF-ove čije oznake želite da nacrtate.
2. Otvorite meni {{ui:Izvezi}} i izaberite {{ui:PDF sa oznakama}}.
   Prikazuje se „Pišem PDF sa oznakama…“, zatim vaš pregledač preuzima po jedan fajl za svaki PDF sa oznakama, nazvan `(naziv PDF-a) (predmer).pdf`.

U kopiji:

- trake se crtaju kao linije u boji svoje stavke,
- površine su lagano popunjene uz punu konturu, a otvori ostavljeni prazni,
- brojanja su tačke,
- svaka stranica sa oznakama dobija malu legendu u donjem levom uglu: boju, naziv i količinu svake stavke na toj stranici.

Vaši originalni PDF-ovi se ne menjaju.

Beleške:

- Pišu se samo PDF-ovi koji su otvoreni. Oznake na PDF-ovima koji nisu otvoreni ostaju u zbirovima, ali se ne crtaju; prvo otvorite te PDF-ove.
- Nazivi u legendi koriste standardni PDF font. Slova koja ne može da prikaže štampaju se kao „?“.
- Šifrovani PDF ne može da se kopira sa oznakama: „Ovaj PDF je zaštićen lozinkom ili šifrovan, pa kopija sa oznakama ne može da se napravi. Sam predmer je u redu; izvezite tabelu.“
- Prvi {{ui:PDF sa oznakama}} u kartici učitava pisač PDF-a. Van mreže, on je tu samo ako traka aplikacije pokazuje {{ui:Spremno za rad van mreže}}; vidi [Rad van mreže](common:offline).

:::chromium
Sa više PDF-ova sa oznakama, Chrome i Edge mogu jednom da pitaju da li ovaj sajt sme da preuzima više fajlova. Izaberite Dozvoli, inače dobijate samo prvi fajl.
:::

## Nema šta da se izveze?

- {{ui:XLSX}} i {{ui:CSV}} traže bar jednu stavku: „Još nema šta da se izveze: napravite stavku i izmerite je.“
- {{ui:PDF sa oznakama}} traži oznake na otvorenom PDF-u: „Na otvorenim PDF-ovima još nema oznaka.“

## Sačuvajte i predmer

Izvoz je izveštaj. Da nastavite rad na predmeru kasnije, takođe izaberite {{ui:Sačuvaj predmer}}: vidi [Čuvanje i ponovno otvaranje predmera](topic:save-and-reopen).

Da dodate opšte troškove, dobit, porez i garanciju i pošaljete predlog ponude, vidi [Rezime ponude i predlog ponude](topic:bid-summary).
