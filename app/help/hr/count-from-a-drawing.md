---
title: Brojanje iz crteža
summary: Brojite blokove, objekte na sloju ili tekst izravno iz DWG-a ili DXF-a: točno, s ugniježđenim blokovima, varijantama dinamičkih blokova i nizovima blokova, u jednom koraku poništavanja.
keywords: brojanje iz crteža, cad brojanje, brojanje blokova, broji blokove, umetanje, naziv bloka, ugniježđeni blokovi, dinamički blok, varijanta, minsert, niz, sloj, vrsta objekta, kružnice, tekst, atribut, oznaka, skriveni slojevi, točno brojanje, kako, vrata, instalacije
from: 5060e24e
---

{{ui:CAD brojanje}} na traci lista (naredba **Broji iz crteža** u drugim stilovima izbornika) broji ono što DWG ili DXF kaže da postoji. Gdje {{ui:Autobrojanje}} traži sliku simbola i može propustiti jedan ili pronaći lažan, ovo broji objekte: svako umetanje bloka nazvanog `DOOR-36` jedna su vrata. Najprije otvorite crtež: [Otvaranje DWG ili DXF crteža](topic:open-a-drawing).

## Brojanje bloka

1. Otvorite list crteža. {{ui:CAD brojanje}} nalazi se na traci lista.
2. Odaberite ga. Prozor navodi blokove i koliko ih ima svakoga. Pretražite po nazivu, pa odaberite jedan.
3. Provjerite redak ispod popisa: „Pronađeno 22, za dodavanje 22.“
4. Pod {{ui:Dodaj u}} odaberite stavku za brojanje ili ostavite {{ui:Nova stavka za brojanje}} i dajte joj naziv.
5. Odaberite gumb za dodavanje, koji navodi broj: {{ui:Dodaj 22 oznake}}. Oznake se pojavljuju na točkama umetanja bloka, a količina stavke je broj brojanja.

To je jedan korak poništavanja: {{key:Mod+Z}} uklanja oznake (i novu stavku) zajedno. Predračun, proračunska tablica i označeni PDF stavku tretiraju kao svaku drugu stavku za brojanje.

### Što se broji

- **Svako umetanje naziva bloka**, bez obzira na mjerilo i kut, u prostoru modela ili papirnom prostoru. Nazivi blokova ne razlikuju velika i mala slova.
- **Nizovi blokova** (MINSERT): svaka kopija u nizu je jedna.
- **Ugniježđeni blokovi.** Blok postavljen unutar drugog bloka broji se na svakoj razini. Popis kaže „6 unutar drugih blokova“; uklonite oznaku s {{ui:Broji i blokove unutar drugih blokova}} da brojite samo umetanja postavljena izravno u crtež.
- **Dinamički blokovi.** Dinamički blok broji se pod svojim nazivom, a ne pod anonimnim kopijama (`*U12`) koje datoteka čuva. Njegova stanja navedena su zasebno („Single 12, Double 4“): odaberite stanje da brojite samo njih ili {{ui:Svaka varijanta}}. Kad datoteka ne kaže koje stanje kopija prikazuje, one se navode kao „(stanje nepoznato)“.
- **Filtar sloja.** Blok na više slojeva: odaberite jedan pod {{ui:Na sloju}}.

### Što se ne broji

- **Skriveni slojevi.** Objekt na sloju koji je u datoteci isključen ili zamrznut (ili ste ga sakrili u {{ui:Slojevi}}) izostavlja se, a redak kaže koliko: „3 na skrivenim slojevima izostavljeno“. Označite {{ui:Broji i njih}} da ih uključite.
- **Vanjske reference (Xref) koje nisu otvorene** ne broje se; prozor to kaže.
- **Objekti složeni točno jedan na drugi iste vrste** broje se kao dva (to su dva objekta) i prozor to kaže: obično je riječ o crtačkoj pogrešci koju vrijedi pogledati.

## Što prikazuje ovaj list ili cijeli crtež

- **Što prikazuje ovaj list** broji objekte koje list prikazuje: na layoutu, objekte modela unutar njegovih viewporta (sloj zamrznut u viewportu se tamo ne broji) plus vlastite objekte layouta.
- **Cijeli crtež, svaki objekt jednom** broji prostor modela jednom, s oznakama na kartici Model, i ne broji ponovno ono što više layouta prikazuje.

Brojanje onoga što layout prikazuje i brojanje onoga što prikazuje Model daju isti broj za iste objekte; ne zbrajajte oboje u jednu stavku.

## Ponovno brojanje

Ponovno brojanje istog bloka istom stavkom dodaje samo ono što je novo: „22 već prebrojeno.“ Svaka oznaka predstavlja jedan objekt.

## Po sloju i tipu

Pod {{ui:Po sloju i tipu}} odaberite sloj i vrstu objekta (kružnice, polilinije, šrafure…): „sve kružnice na E-LITE“. Označite {{ui:Broji i objekte unutar blokova}} da uključite one unutar definicija blokova, na svakom mjestu gdje je blok umetnut.

## Po tekstu

Pod {{ui:Po tekstu}} upišite tekst, primjerice `A3`, i odredite je li to točno taj tekst, sadrži li ga ili ga ima kao cijelu riječ. Tekstualni objekti, višestruki tekst s vodilicom i **vrijednosti atributa** bloka broje se svi (atribut oznake `ITEM = A3` se pronalazi); odaberite {{ui:U atributu}} da brojite samo jedan atribut. Najčešći tekstovi navedeni su za klik.

## Kada umjesto toga koristiti Autobrojanje

Koristite {{ui:Autobrojanje}} za PDF-ove i za simbole u crtežu koji nisu blokovi (nacrtani slobodno ili rastavljeni). Nacrtane kao blokovi, brojite ih ovdje.
