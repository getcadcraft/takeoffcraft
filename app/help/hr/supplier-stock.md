---
title: Provjera zaliha dobavljača i rokova isporuke
summary: Dodajte popis zaliha dobavljača (CSV ili proračunska tablica), a TakeoffCraft provjerava što predmjer treba, uključujući gubitak, u odnosu na njega: ima li dovoljno na zalihi i koliko traje čekanje. Manjkovi i dugi rokovi prikazuju se na ploči Problemi.
keywords: dobavljač, zaliha, na zalihi, rok isporuke, dostupnost, manjak, naručeno unaprijed, popis za narudžbu, csv, sku, prodavatelj, materijali, nabava, problemi
from: f11160fb
---

{{ui:Nabava}} na alatnoj traci (kamion) provjerava što vaš predmjer treba u odnosu na popis zaliha dobavljača. Redci dobavljača koji su bitni čuvaju se u vlastitoj datoteci predmjera. Ništa se ne šalje nikamo i ništa se ne traži od dobavljača: vi donosite datoteku.

## Datoteka

CSV datoteka sa zaglavljem u prvom retku. Potreban je stupac s nazivom ili SKU i stupac sa zalihom ili rokom isporuke. Prepoznaju se ova zaglavlja (bilo kojim redoslijedom, bez obzira na velika i mala slova): Item, Name, Description ili Product; SKU, Part ili Item #; In stock, On hand, Available ili Quantity; Lead time ili Delivery days; Unit ili UOM; Price ili Cost; Supplier ili Vendor.

- Zaliha može biti broj (1,200), „In stock“ ili „Out of stock“.
- Rok isporuke može biti „5 days“, „2 weeks“, „2-3 weeks“ (uzima se duži), „3 months“, „same day“ ili „backorder“. Običan broj je u jedinici zaglavlja (dani, osim ako zaglavlje ne kaže tjedni ili mjeseci).
- Excel datoteke se ne čitaju: prvo spremite list kao CSV.

## Provjera predmjera

1. Odaberite {{ui:Nabava}}, zatim {{ui:Dodaj datoteku dobavljača…}} i izaberite CSV. Dodajte više datoteka: do pet datoteka, ukupno najviše 2.000 redaka, pri čemu se najprije zadržavaju oni koji odgovaraju vašim stavkama.
2. Svaka stavka, drugi uvjet i dio sklopa s količinom povezuju se s retkom prema nazivu ili prema SKU u njihovom nazivu. Sličan naziv (jedan sadrži drugi) koristi se kad točnog nema i to se navodi.
3. Pod {{ui:Što predmjer treba}} najprije se prikazuju manjkovi: „Short by 120 EA“, „Lead time 21 days“, „On backorder“, „Unit differs“, „No stock figure“ ili „In stock“. Potreba uključuje gubitak. Jedinica dobavljača koja nije jedinica procjene (tona umjesto stope) prijavljuje se i nikad se ne uspoređuje. Svaki redak ima {{ui:Odaberi stavku}}, koji skače na stavku.
4. Postavite {{ui:Najduže prihvatljivo čekanje (dana)}} (zadano 14). Stavka koja nije na zalihi i čeka duže od toga označava se, a sažetak navodi najdulje čekanje koje je bitno.
5. {{ui:Popis za narudžbu (CSV)}} preuzima manjkajuće stavke s iznosom manjka, dobavljačem i rokom isporuke. {{ui:Izostavi}} uklanja potrebu iz provjere (to je korak poništavanja).

## Proračunske tablice i cijene u Knjižnici

Popis dobavljača može biti Excel radna knjiga (.xlsx) kao i CSV: čita se prvi list, s istim nazivima stupaca. Formule se nikad ne izvršavaju; čita se vrijednost koju datoteka sadrži.

Kad se doda datoteka s cijenama, {{ui:Cijene u Knjižnicu}} u dijaloškom okviru postavlja cijenu materijala za svaki unos [Knjižnice](topic:price-library) koji datoteka cijeni: isti naziv i jedinica koja je ista (ili nije navedena). Rad, gubitak, visina i sklopovi ostaju kakvi jesu, a bilješka unosa kaže iz koje je datoteke došla cijena. Unos u metrima ne cijeni se iz popisa u stopama, a unos bez podudarnog naziva ostaje netaknut; statusni redak kaže koliko je preskočeno zbog jedinice. Ponovno odredite cijene iz Knjižnice da biste nove cijene prenijeli u ovaj predmjer.

## U ploči Problemi

Manjak je upozorenje, a dugo čekanje napomena, u zajedničkoj ploči Problemi („Zaliha dobavljača“), pa stoje uz svaku drugu provjeru. Možete prihvatiti jedno uz navođenje razloga, a prihvaćanje se sprema u predmjer.

## S vašim pomoćnikom

Ako u Postavkama dopustite pomoćnike, mogu čitati provjeru (supply_check). Dodavanje datoteke dobavljača je vaš posao.

## Dobro je znati

Podaci o zalihama aktualni su onoliko koliko i datoteka koju dodate. Ponovno dodajte datoteku da je osvježite: datoteka s istim nazivom zamjenjuje raniju.
