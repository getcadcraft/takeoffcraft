---
title: Provjeri zalihe dobavljača i rokove čekanja
summary: Dodajte listu zaliha dobavljača (CSV ili tabelu) i TakeoffCraft provjerava šta predmjer traži, uključujući otpad, u odnosu na nju: ima li dovoljno na zalihi i koliko traje čekanje. Manjkovi i dugi rokovi prikazuju se u panelu Problemi.
keywords: dobavljač, zalihe, na zalihi, rok čekanja, dostupnost, manjak, zaostatak narudžbe, lista narudžbe, csv, sku, prodavac, materijali, nabavka, problemi
from: f11160fb
---

{{ui:Nabavka}} na alatnoj traci (kamion) provjerava šta vaš predmjer traži u odnosu na listu zaliha dobavljača. Redovi dobavljača koji su bitni čuvaju se u vlastitoj datoteci predmjera. Ništa se ne šalje nigdje i ništa ne pita dobavljača: vi donosite datoteku.

## Datoteka

CSV datoteka sa redom zaglavlja. Treba joj kolona naziva ili SKU i kolona zaliha ili roka čekanja. Ova zaglavlja se prepoznaju (bilo kojim redom, bilo kojim velikim ili malim slovima): Item, Name, Description ili Product; SKU, Part ili Item #; In stock, On hand, Available ili Quantity; Lead time ili Delivery days; Unit ili UOM; Price ili Cost; Supplier ili Vendor.

- Zaliha može biti broj (1,200), „In stock“ ili „Out of stock“.
- Rok čekanja može biti „5 days“, „2 weeks“, „2-3 weeks“ (duži se koristi), „3 months“, „same day“ ili „backorder“. Obični broj je u jedinici zaglavlja (dani, osim ako zaglavlje kaže weeks ili months).
- Excel datoteke se ne čitaju: prvo spasite list kao CSV.

## Provjera predmjera

1. Izaberite {{ui:Nabavka}}, zatim {{ui:Dodaj datoteku dobavljača…}} i izaberite CSV. Dodajte više od jedne: do pet datoteka, ukupno se zadržava 2.000 redova, prvo oni koji odgovaraju vašim stavkama.
2. Svaka stavka, drugi uslov i dio sklopa sa količinom uparuje se sa redom po nazivu, ili po SKU u njegovom nazivu. Sličan naziv (jedan unutar drugog) koristi se kada tačnog nema, i aplikacija to navodi.
3. Pod {{ui:Šta predmjer traži}} prvo se prikazuju manjkajuće stavke: „Manjak 120 EA“, „Rok čekanja 21 dana“, „Na čekanju“, „Jedinica se razlikuje“, „Nema podatka o zalihi“ ili „Na zalihi“. Potreba uključuje otpad. Jedinica dobavljača koja nije jedinica procjene (tona umjesto stope) se prijavljuje i nikada se ne upoređuje. Svaki red ima {{ui:Odaberi stavku}}, koji skače na stavku.
4. Podesite {{ui:Najduži željeni rok čekanja (dana)}} (zadano 14). Stavka koja nije na zalihi i čeka duže od toga se označava, a sažetak navodi najduži rok čekanja koji je bitan.
5. {{ui:Lista narudžbe (CSV)}} preuzima manjkajuće stavke sa iznosom manjka, dobavljačem i rokom čekanja. {{ui:Izostavi}} uklanja potrebu iz provjere (to je korak poništavanja).

## Tabelarne datoteke i biblioteka cijena

Lista dobavljača može biti Excel radna knjiga (.xlsx) kao i CSV: čita se prvi list, sa istim nazivima kolona. Formule se nikada ne izvršavaju; čita se vrijednost koju datoteka sadrži.

Kada se doda datoteka sa cijenama, {{ui:Cijene u biblioteku}} u dijalogu postavlja cijenu materijala za svaku stavku [Biblioteka](topic:price-library) koju datoteka cijeni: isti naziv i jedinica koja je ista (ili nije navedena). Rad, otpad, visina i sklopovi ostaju kakvi jesu, a napomena stavke navodi iz koje datoteke dolazi cijena. Stavka u metrima se ne cijeni iz liste u stopama, a stavka bez odgovarajućeg naziva ostaje netaknuta; statusni red kaže koliko je preskočeno zbog jedinice. Ponovo odredite cijene iz Biblioteke da biste nove cijene unijeli u ovaj predmjer.

## U panelu Problemi

Manjak je upozorenje, a dug rok čekanja je napomena, u zajedničkom panelu Problemi („Zalihe dobavljača“), pa stoje uz svaku drugu provjeru. Možete prihvatiti jedno uz razlog, a prihvatanje se čuva u predmjeru.

## Sa vašim asistentom

Ako dozvolite asistente u {{ui:Postavke}}, mogu čitati provjeru (supply_check). Dodavanje datoteke dobavljača radite vi.

## Dobro je znati

Podaci o zalihama su aktuelni koliko i datoteka koju dodate. Ponovo dodajte datoteku da je osvježite: datoteka istog naziva zamjenjuje raniju.
