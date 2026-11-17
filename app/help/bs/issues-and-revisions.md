---
title: Izdanja, revizije i dnevnik promjena crteža
summary: Vodite jednu historiju izdanja uz arhitektov model: učitajte izdanja, zabilježite uputstva sa gradilišta, radioničke crteže i povezane modele uz izdanje i pregledajte dnevnik promjena crteža.
keywords: izdanje, revizija, revizije, dnevnik promjena, dnevnik promjena crteža, registar crteža, uputstvo sa gradilišta, radionički crtež, povezani model, tender, gradnja, historija izdanja, predmjer, predračun
from: 8d8f6e68
---

## Šta ćete raditi

Radite sa istom historijom izdanja kao ostatak tima. Pogledajte koji su listovi poslani u kojoj reviziji i vodite ono što se dešava na gradilištu uz izdanje kojem pripada.

## Koraci

1. Otvorite **Izdanja i revizije**.
2. Odaberite **Učitaj historiju izdanja** i izaberite datoteku `.issues.json` sačuvanu iz aplikacije BimCraft ili druge aplikacije. Njena izdanja i zapisi dodaju se vašim. Ništa se ne zamjenjuje.
3. Odaberite **Dodaj zapis** za uputstvo sa gradilišta, radionički crtež, skup označavanja, povezani model ili bilješku. Izaberite izdanje na koje se odnosi i njegov status. Datoteka koju odaberete bilježi se po imenu, veličini i SHA-256; datoteka ostaje gdje jeste.
4. **Dnevnik promjena crteža** prikazuje jedan red za svaki list i jednu kolonu za svako izdanje. Revizija u zagradama ponovo je izdata bez promjena.
5. **Preuzmi dnevnik promjena (CSV)** čuva izdanja, tabelu listova i zapise. **Spasi historiju izdanja** upisuje datoteku koju čitaju ostale aplikacije.

## Korisno je znati

- **Zabilježi izdanje** izdaje vaše izmjerene listove, na primjer uz predmjer. **Promjene od** zatim pokazuju koji su listovi ponovo izmjereni nakon tog izdanja.
- Historija se čuva u datoteci predmjera. Svaka promjena je jedan korak poništavanja.
- Učitavanje iste datoteke dva puta ništa ne dodaje dvaput. Kada dvije kopije sadrže isti zapis, zadržava se noviji.
