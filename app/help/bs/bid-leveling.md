---
title: Paketi ponude i izjednačavanje ponuda
summary: Podijelite procjenu na pakete po struci, pošaljite obim svakog paketa podizvođačima, uporedite ponude koje stignu za isti obim i koristite izabranu ponudu kao cijenu paketa.
keywords: izjednačavanje ponuda, izjednačavanje, paket ponude, podizvođač, ponuda podizvođača, obim, nadomjestak, struka, CSI divizija, poređenje ponuda, najniža ponuda, tabela ponuda, ponuđač, dodjela, izabrana ponuda, koristi ponudu, cijena podugovora
from: 856b3088
---

Generalni izvođač šalje obim svake struke podizvođačima i upoređuje ono što se vrati. TakeoffCraft radi oboje iz predmjera: otvorite {{ui:Izvoz}} › {{ui:Paketi ponude i izjednačavanje…}}.

## Paketi

Postoji jedan paket za svaku CSI diviziju koju koriste vaše stavke (prve dvije cifre {{ui:CSI broj}} stavke, pogledajte [Kreiranje stavki predmjera](topic:create-items)). Stavke bez broja čine vlastiti paket. Svaki paket prikazuje svoje stavke, koliko listova imaju njegove oznake i naš vlastiti trošak (materijal i rad prije dodataka, iz osnovne ponude).

Izaberite {{ui:Opseg CSV}} da preuzmete ono što šaljete podizvođaču: svaku stavku s CSI brojem, količinom, jedinicom i listovima na kojima se nalazi. Nema cijena. Za dobavljače materijala, zahtjev za ponudu u radnoj knjizi ima spisak dijelova (pogledajte [Izvoz predračuna](topic:export-estimate)).

## Unesite ponude

1. U praznom redu ispod paketa upišite naziv ponuđača i iznos ponude, pa izaberite {{ui:Dodaj ponudu}}.
2. Ako ponuda izostavlja dio obima, otvorite njen spisak {{ui:Izostavljeno}} i označite te stavke.
3. Da ispravite naziv ili iznos, prepišite ga u tabeli; dugme × uklanja ponudu.

Svaka promjena je jedan korak koji {{key:Mod+Z}} vraća, a ponude se čuvaju sa predmjerom.

## Kako se ponude izjednačavaju

Ponude rijetko pokrivaju isti obim. Izjednačavanje popunjava svaku izostavljenu stavku **nadomjestkom** po našem vlastitom trošku, pa se svaka ponuda upoređuje na cijelom paketu:

**Izjednačeno = ponuda + nadomjesci**

Najniža izjednačena ponuda označava se kao **Najniža**; u slučaju izjednačenja, ona koja je prva unesena. **U odnosu na naš trošak** je izjednačena ponuda umanjena za naš vlastiti trošak paketa: negativno znači ispod njega. Ponuda koja izgleda najniža može izgubiti kada se uračuna obim koji nedostaje.

Radna knjiga dobija list **Izjednačavanje ponuda** sa svakim paketom koji ima ponude: našu procjenu, svaku ponudu, njene nadomjestke, izjednačeni ukupan iznos i razliku, kao žive formule, te šta je svaka ponuda izostavila.

## Koristite ponudu kao cijenu paketa

Izaberite {{ui:Koristi}} na ponudi i ona postaje cijena cijelog paketa u vašoj procjeni: vlastito određivanje cijene paketa (stavke, njihovi drugi uslovi i dijelovi sklopa) ispada iz ukupne vrijednosti posla, stavke ostaju kao količine s vašim stopama za referencu, a jedan red, **Izabrana ponuda**, nosi iznos ponude. Stavke koje ponuda izostavlja ostaju po vašem trošku, što je izjednačavanje već brojalo kao nadomjestak. Izaberite drugu ponudu ili ponovo istu da je vratite; svaka je jedan korak koji {{key:Mod+Z}} poništava.

U sažetku ponude ponude podizvođača su jedan red unutar troška: režijski troškovi, dobit i garancija dodaju se na njih kao na svaki drugi trošak; porez na promet (samo na materijal) i opterećenje rada (na rad) ne. List Predračun u radnoj knjizi nosi izabranu ponudu kao svoj red, a blok dodataka je dodaje, sa živim formulama. Spisak materijala izostavlja materijal dodijeljenog paketa, jer ga podizvođač isporučuje.

Paket unutar ponudne cjeline alternative se ne ponovo cijeni: alternative i međuzbirovi ponudnih cjelina i dalje koriste vaše cijene.

## Ponude koje stižu e-poštom

Ne morate unositi ponude ručno. {{ui:Pošalji na ponude…}} ispod paketa šalje svakom podizvođaču e-poštom link do stranice na kojoj upisuju cijenu za svaki red; {{ui:Preuzmi cijene}} prenosi ono što su poslali u ovu tabelu. Pogledajte [Slanje paketa za ponude](topic:bid-invitations).

:::note
Ručni unos ponude i dalje radi, a ponuda unesena ručno i ona sa sajta stoje jedna pored druge. Ponude koje su stigle sa sajta označene su **web** (ili **web, kasno** kad stignu nakon roka); njihova cijena se mijenja samo kada ponuđač pošalje novu verziju, pa vaše vlastite izmjene ostaju do tada.
:::
