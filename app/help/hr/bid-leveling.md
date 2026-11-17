---
title: Paketi ponuda i izjednačavanje ponuda
summary: Podijelite procjenu na pakete po struci, pošaljite opseg svakog paketa podizvođačima, usporedite ponude koje se vrate na istom opsegu i koristite odabranu ponudu kao cijenu paketa.
keywords: izjednačavanje ponuda, izjednačavanje, paket ponude, podizvođač, ponuda podizvođača, opseg, nadomjestak, struka, CSI divizija, usporedba ponuda, najniža ponuda, tablica ponuda, ponuđač, dodjela, odabrana ponuda, koristi ponudu, cijena podizvođača
from: 856b3088
---

Glavni izvođač šalje opseg svake struke podizvođačima i uspoređuje što se vrati. TakeoffCraft radi oboje iz izvedbe: otvorite {{ui:Izvoz}} › {{ui:Paketi ponuda i izjednačavanje…}}.

## Paketi

Postoji jedan paket za svaku CSI diviziju koju vaše stavke koriste (prve dvije znamenke {{ui:CSI broj}} stavke, vidi [Stvaranje stavki izvedbe](topic:create-items)). Stavke bez broja čine vlastiti paket. Svaki paket prikazuje svoje stavke, koliko listova imaju njegove oznake i naš trošak (materijal i rad prije dodataka, iz osnovne ponude).

Odaberite {{ui:CSV opsega}} za preuzimanje onoga što šaljete podizvođaču: svaku stavku s CSI brojem, količinom, jedinicom i listovima na kojima je. Nema cijena. Za dobavljače materijala zahtjev za ponudu u radnoj knjizi ima popis dijelova (vidi [Izvoz procjene](topic:export-estimate)).

## Unos ponuda

1. U praznom retku pod paketom upišite ime ponuđača i iznos ponude, zatim odaberite {{ui:Dodaj ponudu}}.
2. Ako ponuda izostavlja dio opsega, otvorite njezin popis {{ui:Izostavljeno}} i označite te stavke.
3. Za ispravak naziva ili iznosa prepišite ga u tablici; gumb × uklanja ponudu.

Svaka promjena je jedan korak koji {{key:Mod+Z}} poništava, a ponude se spremaju s izvedbom.

## Kako se ponude izjednačavaju

Ponude rijetko pokrivaju isti opseg. Izjednačavanje popunjava svaku izostavljenu stavku **nadomjestkom** po našem trošku za tu stavku, pa se svaka ponuda uspoređuje na cijelom paketu:

**Izjednačeno = ponuda + nadomjesci**

Najniža izjednačena ponuda označena je **Najniža**; kod izjednačenja, ona unesena prva. **Prema našem trošku** je izjednačena ponuda minus naš trošak za paket: negativno znači ispod njega. Ponuda koja izgleda najniža može izgubiti kad se prebroji njezin nedostajući opseg.

Radna knjiga dobiva radni list **Izjednačavanje ponuda** sa svakim paketom koji ima ponude: našu procjenu, svaku ponudu, njezine nadomjestke, izjednačeni iznos i razliku, kao žive formule, te što je svaka ponuda izostavila.

## Korištenje ponude kao cijene paketa

Odaberite {{ui:Koristi}} na ponudi i ona postaje cijena cijelog paketa u vašoj procjeni: vlastito određivanje cijena paketa (stavke, njihovi drugi uvjeti i dijelovi sklopova) ispada iz ukupnog iznosa posla, stavke ostaju kao količine s vašim stopama za referencu, a jedan redak, **Odabrana ponuda**, nosi iznos ponude. Stavke koje ponuda izostavlja ostaju po vašem trošku, što je izjednačavanje već brojalo kao nadomjestak. Odaberite drugu ponudu ili ponovno istu da je vratite; svaki je jedan korak koji {{key:Mod+Z}} poništava.

U sažetku ponude podugovorene ponude su jedan redak unutar troška: režijski troškovi, dobit i jamstvo dodaju se na njih kao i na svaki drugi trošak; porez na promet (samo na materijal) i dodatni troškovi rada (na rad) ne. List Procjena u radnoj knjizi nosi odabranu ponudu kao vlastiti redak, a blok markupa je zbraja, s živim formulama. Popis materijala izostavlja materijal dodijeljenog paketa, jer ga podizvođač opskrbljuje.

Paket unutar područja ponude alternative ne određuje cijenu ponovno: alternative i međuzbrojevi područja i dalje koriste vaše cijene.

## Ponude koje se vrate e-poštom

Ne morate upisivati ponude. {{ui:Pošalji za ponude…}} pod paketom šalje svakom podizvođaču poveznicu na stranicu gdje upisuje cijenu za svaki redak; {{ui:Dohvati cijene}} povlači što su poslali u ovu tablicu. Vidi [Slanje paketa za ponude](topic:bid-invitations).

:::note
Ručni unos ponude i dalje radi, a ručno unesena ponuda i ona s web-mjesta stoje jedna uz drugu. Ponude koje su stigle s web-mjesta označene su **web** (ili **web, zakasnjelo** ako su stigle nakon roka). Njihova se cijena mijenja tek kad ponuđač pošalje novu verziju, pa vaše vlastite izmjene ostaju do tada.
:::
