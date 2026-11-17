---
title: Izdanja, revizije i dnevnik izmena crteža
summary: Vodite jednu istoriju izdanja zajedno sa modelom arhitekte: uvezite izdanja, beležite uputstva sa gradilišta, radioničke crteže i povezane modele uz izdanje i čitajte dnevnik izmena crteža.
keywords: izdanje, revizija, revizije, dnevnik izmena, dnevnik izmena crteža, registar crteža, uputstvo sa gradilišta, radionički crtež, povezani model, tender, građenje, istorija izdanja, predmer, spisak radova
from: 8d8f6e68
---

## Šta ćete uraditi

Radite sa istom istorijom izdanja kao ostatak tima. Pogledajte koji su listovi izašli u kojoj reviziji i zabeležite šta se dešava na gradilištu uz izdanje kome pripada.

## Koraci

1. Otvorite **Izdanja i revizije**.
2. Izaberite **Pročitaj istoriju izdanja** i izaberite datoteku `.issues.json` sačuvanu iz BimCraft-a ili druge aplikacije. Njena izdanja i zapisi se dodaju vašima. Ništa se ne zamenjuje.
3. Izaberite **Dodaj zapis** za uputstvo sa gradilišta, radionički crtež, skup oznaka, povezani model ili belešku. Izaberite izdanje uz koje ide i njegov status. Izabrana datoteka se beleži po imenu, veličini i SHA-256; datoteka ostaje tamo gde jeste.
4. **Dnevnik izmena crteža** prikazuje jedan red za svaki list i jednu kolonu za svako izdanje. Revizija u zagradama je ponovo izdata bez promena.
5. **Preuzmi dnevnik izmena (CSV)** čuva izdanja, tabelu listova i zapise. **Sačuvaj istoriju izdanja** upisuje datoteku koju čitaju ostale aplikacije.

## Dobro je znati

- **Zabeleži izdanje** izdaje vaše izmerene listove, na primer uz predmer. **Promene od tada** pokazuje koji su listovi ponovo izmereni posle tog izdanja.
- Istorija se čuva u datoteci predmera. Svaka promena je jedan korak za Opozovi.
- Čitanje iste datoteke dva puta ništa ne dodaje dvaput. Kada dve kopije sadrže isti zapis, zadržava se noviji.
