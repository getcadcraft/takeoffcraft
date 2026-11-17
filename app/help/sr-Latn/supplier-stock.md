---
title: Proverite zalihu dobavljača i vreme isporuke
summary: Dodajte spisak zaliha dobavljača (CSV ili tabelu) i TakeoffCraft proverava prema njemu šta predmer traži, uz otpad: ima li dovoljno na zalihi i koliko traje čekanje. Manjkovi i duga čekanja prikazuju se u panelu Problemi.
keywords: dobavljač, zaliha, na zalihi, vreme isporuke, dostupnost, manjak, dopuna, spisak za naručivanje, csv, sku, prodavac, materijali, snabdevanje, problemi
from: f11160fb
---

{{ui:Zaliha}} na traci sa alatkama (kamion) proverava šta vaš predmer traži u odnosu na spisak zaliha dobavljača. Redovi dobavljača koji su bitni čuvaju se u sopstvenoj datoteci predmera. Ništa se nigde ne šalje i ništa se ne traži od dobavljača: vi donosite datoteku.

## Datoteka

CSV datoteka sa zaglavljem u prvom redu. Potrebna je kolona sa nazivom ili SKU i kolona sa zalihom ili vremenom isporuke. Prepoznaju se ova zaglavlja (bilo kojim redom, bez obzira na velika i mala slova): Item, Name, Description ili Product; SKU, Part ili Item #; In stock, On hand, Available ili Quantity; Lead time ili Delivery days; Unit ili UOM; Price ili Cost; Supplier ili Vendor.

- Zaliha može biti broj (1,200), „In stock“ ili „Out of stock“.
- Vreme isporuke može biti „5 days“, „2 weeks“, „2-3 weeks“ (uzima se duže), „3 months“, „same day“ ili „backorder“. Običan broj je u jedinici zaglavlja (dani, osim ako zaglavlje kaže nedelje ili meseci).
- Excel datoteke se ne čitaju: prvo sačuvajte tabelu kao CSV.

## Proverite predmer

1. Izaberite {{ui:Zaliha}}, zatim {{ui:Dodaj datoteku dobavljača…}} i izaberite CSV. Možete dodati više datoteka: do pet, ukupno se čuva 2.000 redova, prvo oni koji se poklapaju sa vašim stavkama.
2. Svaka stavka, drugi uslov i deo sklopa sa količinom uparuju se sa redom po nazivu ili po SKU u nazivu. Slično ime (jedno sadrži drugo) koristi se kada nema tačnog, i to se kaže.
3. Pod {{ui:Šta predmer traži}}, kratke stavke idu prve: „Manjak: 120 EA“, „Vreme isporuke 21 dana“, „Na dopuni“, „Jedinica se razlikuje“, „Nema podatka o zalihi“ ili „Na zalihi“. Potreba uključuje otpad. Jedinica dobavljača koja nije jedinica procene (tona naspram stope) se prijavljuje i nikada se ne poredi. Svaki red ima {{ui:Izaberi stavku}}, koja vas vodi do stavke.
4. Podesite {{ui:Najduži rok koji prihvataš (dana)}} (podrazumevano 14). Stavka koja nije na zalihi i čeka duže od toga se označava, a sažetak navodi najduže čekanje koje je važno.
5. {{ui:Spisak za naručivanje (CSV)}} preuzima kratke stavke sa iznosom manjka, dobavljačem i vremenom isporuke. {{ui:Izostavi}} uklanja potrebu iz provere (to je korak za poništavanje).

## Tabelarne datoteke i biblioteka cena

Spisak dobavljača može biti Excel radna sveska (.xlsx) kao i CSV: čita se prvi list, sa istim nazivima kolona. Formule se nikada ne izvršavaju; čita se vrednost koju datoteka sadrži.

Kada je datoteka sa cenama dodata, {{ui:Cene u biblioteku}} u dijalogu postavlja cenu materijala za svaku stavku [Biblioteke](topic:price-library) koju datoteka ceni: isti naziv i jedinica koja je ista (ili nije navedena). Rad, otpad, visina i sklopovi ostaju kakvi jesu, a napomena stavke kaže iz koje datoteke potiče cena. Stavka u metrima se ne ceni iz spiska u stopama, a stavka bez odgovarajućeg naziva ostaje netaknuta; statusni red kaže koliko je preskočeno zbog jedinice. Ponovo odredite cene iz biblioteke da biste nove cene uneli u ovaj predmer.

## U panelu Problemi

Manjak je upozorenje, a dugo čekanje je napomena, u zajedničkom panelu Problemi („Zaliha dobavljača“), pa stoje uz svaku drugu proveru. Možete ga prihvatiti uz razlog, a prihvatanje se čuva u predmeru.

## Uz vašeg asistenta

Ako u {{ui:Podešavanjima}} dozvolite asistente, mogu da čitaju proveru (supply_check). Dodavanje datoteke dobavljača je vaš posao.

## Dobro je znati

Podaci o zalihi su aktuelni koliko i datoteka koju dodate. Ponovo dodajte datoteku da je osvežite: datoteka istog naziva zamenjuje raniju.
