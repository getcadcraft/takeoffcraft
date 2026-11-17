---
title: Brojanje iz crteža
summary: Brojte blokove, objekte na sloju ili tekst direktno iz DWG ili DXF: tačno, sa ugniježđenim blokovima, varijantama dinamičkih blokova i nizovima blokova, u jednom koraku poništavanja.
keywords: brojanje iz crteža, cad brojanje, brojanje blokova, broji blokove, umetanje, naziv bloka, ugniježđeni blokovi, dinamički blok, varijanta, minsert, niz, sloj, tip entiteta, krugovi, tekst, atribut, oznaka, skriveni slojevi, tačno brojanje, kako, vrata, armature
from: 5060e24e
---

{{ui:Brojanje CAD-a}} na traci lista (naredba **Brojanje iz crteža** u ostalim stilovima menija) broji ono što DWG ili DXF kaže da postoji. Gdje {{ui:Auto brojanje}} traži sliku simbola i može propustiti ili lažno pronaći, ovo broji objekte: svako umetanje bloka imena `DOOR-36` je jedna vrata. Prvo otvorite crtež: [Otvaranje DWG ili DXF crteža](topic:open-a-drawing).

## Brojanje bloka

1. Otvorite list crteža. {{ui:Brojanje CAD-a}} je na traci lista.
2. Odaberite ga. Prozor navodi blokove s brojem svakog. Pretražite po nazivu, pa odaberite jedan.
3. Provjerite red ispod liste: „22 pronađeno, 22 za dodavanje.”
4. Pod {{ui:Dodaj u}} odaberite stavku brojanja, ili ostavite {{ui:Novu stavku brojanja}} i dajte joj naziv.
5. Odaberite dugme za dodavanje, koje kaže broj: {{ui:Dodaj 22 oznake}}. Oznake se pojavljuju na tačkama umetanja bloka, a količina stavke je brojanje.

To je jedan korak poništavanja: {{key:Mod+Z}} uklanja oznake (i novu stavku) zajedno. Procjena, tabela i označeni PDF tretiraju stavku kao svaku drugu stavku brojanja.

### Šta se broji

- **Svako umetanje imena bloka**, bez obzira na razmjeru i ugao, u prostoru modela ili prostoru papira. Imena blokova ne razlikuju velika i mala slova.
- **Nizovi blokova** (MINSERT): svaka kopija u nizu je jedna.
- **Ugniježđeni blokovi.** Blok postavljen unutar drugog bloka broji se na svakoj dubini. Lista kaže „6 unutar drugih blokova”; isključite {{ui:Broji i blokove unutar drugih blokova}} da brojite samo umetanja postavljena direktno u crtežu.
- **Dinamički blokovi.** Dinamički blok se broji pod svojim imenom, a ne pod anonimnim kopijama (`*U12`) koje datoteka čuva. Njegova stanja su navedena odvojeno („Jednostruko 12, Dvostruko 4”): odaberite stanje da brojite samo njih, ili {{ui:Sve varijante}}. Kad datoteka ne kaže koje stanje kopija prikazuje, one su navedene kao „(stanje nepoznato)”.
- **Filter sloja.** Blok na nekoliko slojeva: odaberite jedan pod {{ui:Na sloju}}.

### Šta se ne broji

- **Skriveni slojevi.** Objekt na sloju koji je isključen ili zamrznut u datoteci (ili koji ste sakrili u {{ui:Slojevi}}) se izostavlja, a red kaže koliko: „3 na skrivenim slojevima izostavljena”. Označite {{ui:Broji i njih također}} da ih uključite.
- **Povezani crteži koji nisu otvoreni** se ne broje; prozor to kaže.
- **Objekti naslagani tačno jedan na drugog iste vrste** se broje kao dva (jer su dva objekta), a prozor to kaže: obično je to greška u crtanju vrijedna provjere.

## Šta prikazuje ovaj list, ili cijeli crtež

- **Šta prikazuje ovaj list** broji objekte koje list prikazuje: na rasporedu, objekte modela unutar njegovih viewport-ova (sloj zamrznut u viewport-u se tamo ne broji) plus sopstvene objekte rasporeda.
- **Cijeli crtež, svaki objekt jednom** broji prostor modela jednom, s oznakama na listu Model, i ne broji ponovo ono što više rasporeda prikazuje.

Brojanje onoga što raspored prikazuje i brojanje onoga što prikazuje Model daju isti broj za iste objekte; ne dodajte oboje u jednu stavku.

## Ponovno brojanje

Ponovno brojanje istog bloka istom stavkom dodaje samo ono što je novo: „22 već prebrojano.” Svaka oznaka predstavlja jedan objekt.

## Po sloju i tipu

Na {{ui:Po sloju i tipu}} odaberite sloj i tip objekta (krugovi, polilinije, šrafure…): „svi krugovi na E-LITE”. Označite {{ui:Također broji objekte unutar blokova}} da uključite one unutar definicija blokova, na svakom mjestu gdje je blok umetnut.

## Po tekstu

Na {{ui:Po tekstu}} upišite tekst, kao `A3`, i recite da li je to tačno taj tekst, sadrži ga, ili ga ima kao cijelu riječ. Tekstualni objekti, višeslojni tekst i **vrijednosti atributa** blokova se sve broje (oznaka atributa `ITEM = A3` se nalazi). Odaberite {{ui:U atributu}} da brojite samo jedan atribut. Najčešći tekstovi su navedeni za klik.

## Kad koristiti Auto brojanje umjesto toga

Koristite {{ui:Auto brojanje}} za PDF-ove i za simbole u crtežu koji nisu blokovi (nacrtani slobodno, ili razloženi). Nacrtane kao blokovi, brojite ih ovdje.
