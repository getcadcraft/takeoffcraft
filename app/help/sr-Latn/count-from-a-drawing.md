---
title: Prebrojte iz crteža
summary: Prebrojite blokove, objekte na sloju ili tekst direktno iz DWG ili DXF: tačno, sa ugnežđenim blokovima, varijantama dinamičkih blokova i nizovima blokova, u jednom koraku opozivanja.
keywords: prebroji iz crteža, cad brojanje, brojanje blokova, prebroji blokove, umetanje, naziv bloka, ugnežđeni blokovi, dinamički blok, varijanta, minsert, niz, sloj, tip entiteta, krugovi, tekst, atribut, oznaka, skriveni slojevi, tačno brojanje, kako, vrata, armature
from: 5060e24e
---

{{ui:Brojanje CAD-a}} na traci lista (komanda **Prebroj iz crteža** u ostalim stilovima menija) broji ono što DWG ili DXF kaže da postoji. Tamo gde {{ui:Automatsko brojanje}} traži sliku simbola i može da propusti jedan ili nađe lažan, ovo broji objekte: svako umetanje bloka po imenu `DOOR-36` je jedna vrata. Prvo otvorite crtež: [Otvorite DWG ili DXF crtež](topic:open-a-drawing).

## Brojanje bloka

1. Otvorite list crteža. {{ui:Brojanje CAD-a}} je na traci lista.
2. Izaberite ga. Prozor navodi blokove i koliko ih ima svakog. Pretražite po nazivu, pa izaberite jedan.
3. Proverite liniju ispod spiska: „22 pronađeno, 22 za dodavanje.”
4. Pod {{ui:Dodaj u}} izaberite stavku brojanja, ili ostavite {{ui:Nova stavka brojanja}} i dajte joj naziv.
5. Izaberite dugme za dodavanje, koje navodi broj: {{ui:Dodaj 22 oznake}}. Oznake se pojavljuju na tačkama umetanja bloka, a količina stavke je broj.

Ovo je jedan korak opozivanja: {{key:Mod+Z}} uklanja oznake (i novu stavku) zajedno. Procena, tabela i označeni PDF tretiraju stavku kao svaku drugu stavku brojanja.

### Šta se broji

- **Svako umetanje naziva bloka**, bez obzira na razmeru i ugao, u prostoru modela ili prostoru papira. Nazivi blokova ne razlikuju velika i mala slova.
- **Nizovi blokova** (MINSERT): svaka kopija u nizu je jedna.
- **Ugnežđeni blokovi.** Blok postavljen unutar drugog bloka broji se na svakoj dubini. Spisak kaže „6 unutar drugih blokova”; odštiklirajte {{ui:Broj i blokove unutar drugih blokova}} da brojite samo umetanja postavljena direktno u crtežu.
- **Dinamički blokovi.** Dinamički blok se broji pod svojim imenom, a ne pod anonimnim kopijama (`*U12`) koje datoteka čuva. Njegova stanja su navedena posebno („Pojedinačno 12, Dvostruko 4”): izaberite stanje da brojite samo njih, ili {{ui:Svaka varijanta}}. Kada datoteka ne kaže koje stanje kopija prikazuje, te se navode kao „(stanje nepoznato)”.
- **Filter sloja.** Blok na nekoliko slojeva: izaberite jedan pod {{ui:Na sloju}}.

### Šta se ne broji

- **Skriveni slojevi.** Objekat na sloju koji je isključen ili zamrznut u datoteci (ili koji ste sakrili u {{ui:Slojevi}}) se izostavlja, a linija kaže koliko: „3 na skrivenim slojevima izostavljeno”. Štiklirajte {{ui:Prebroj i njih}} da ih uključite.
- **Spoljni crteži koji nisu otvoreni** se ne broje; prozor to kaže.
- **Objekti naslagani tačno jedan preko drugog iste vrste** broje se kao dva (to su dva objekta), a prozor to kaže: obično je to greška u crtanju vredna pregleda.

## Šta prikazuje ovaj list ili ceo crtež

- **Šta prikazuje ovaj list** broji objekte koje list prikazuje: na rasporedu, objekte modela unutar njegovih prozora pogleda (sloj zamrznut u prozoru pogleda se tamo ne broji) plus sopstvene objekte rasporeda.
- **Ceo crtež, svaki objekat jednom** broji prostor modela jednom, sa oznakama na listu Model, i ne broji ponovo ono što više rasporeda prikazuje.

Brojanje onoga što raspored prikazuje i brojanje onoga što prikazuje Model daju isti broj za iste objekte; ne dodajte oba u jednu stavku.

## Ponovno brojanje

Ponovno brojanje istog bloka istom stavkom dodaje samo ono što je novo: „22 već prebrojano”. Svaka oznaka predstavlja jedan objekat.

## Po sloju i tipu

Na {{ui:Po sloju i tipu}} izaberite sloj i tip objekta (krugovi, polilinije, šrafure…): „svi krugovi na E-LITE”. Štiklirajte {{ui:Broj i objekte unutar blokova}} da uključite i one unutar definicija blokova, na svakom mestu gde je blok umetnut.

## Po tekstu

Na {{ui:Po tekstu}} unesite tekst, kao `A3`, i kažite da li je tačno to, sadrži ga ili ga ima kao celu reč. Tekst objekti, tekst višestruke pokazne linije i **vrednosti atributa** bloka se broje (oznaka atribut `ITEM = A3` se nalazi); izaberite {{ui:U atributu}} da brojite samo jedan atribut. Najčešći tekstovi su navedeni za klik.

## Kada koristiti Automatsko brojanje

Koristite {{ui:Automatsko brojanje}} za PDF-ove i za simbole u crtežu koji nisu blokovi (nacrtani slobodno ili rastavljeni). Nacrtane kao blokovi, brojite ih ovde.
