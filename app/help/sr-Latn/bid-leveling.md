---
title: Paketi ponuda i izravnanje ponuda
summary: Podelite procenu na pakete po struci, pošaljite opseg svakog paketa podizvođačima, uporedite ponude koje stignu za isti opseg i koristite izabranu ponudu kao cenu paketa.
keywords: izravnanje ponuda, izravnanje, paket ponude, podizvođač, ponuda podizvođača, opseg, popuna, struka, CSI divizija, poređenje ponuda, najniža ponuda, tabela ponuda, ponuđač, dodela, izabrana ponuda, koristi ponudu, cena podizvođača
from: 856b3088
---

Izvođač radova šalje opseg svake struke podizvođačima i poredi ono što stigne nazad. TakeoffCraft radi oba iz predmera: otvorite {{ui:Izvezi}} › {{ui:Paketi ponuda i izravnanje…}}.

## Paketi

Postoji po jedan paket za svaku CSI diviziju koju koriste vaše stavke (prve dve cifre {{ui:CSI broj}} stavke, pogledajte [Kreirajte stavke predmera](topic:create-items)). Stavke bez broja prave sopstveni paket. Svaki paket prikazuje svoje stavke, koliko listova imaju njihove oznake i naš trošak (materijal i rad pre marži, iz osnovne ponude).

Izaberite {{ui:CSV opsega}} da preuzmete ono što šaljete podizvođaču: svaku stavku sa CSI brojem, količinom, jedinicom i listovima na kojima je. Nema cena. Za dobavljače materijala, zahtev za ponudu u radnoj svesci ima spisak delova (pogledajte [Izvoz procene](topic:export-estimate)).

## Unesite ponude

1. U praznom redu ispod paketa upišite naziv ponuđača i iznos ponude, zatim izaberite {{ui:Dodaj ponudu}}.
2. Ako ponuda izostavlja deo opsega, otvorite njen spisak {{ui:Izostavljeno}} i označite te stavke.
3. Da ispravite naziv ili iznos, upišite preko njega u tabeli. Dugme × uklanja ponudu.

Svaka promena je jedan korak koji {{key:Mod+Z}} poništava, a ponude se čuvaju sa predmerom.

## Kako se ponude izravnavaju

Ponude retko pokrivaju isti opseg. Izravnanje popunjava svaku izostavljenu stavku **popunom** po našem trošku za nju, tako da se svaka ponuda poredi za ceo paket:

**Izravnano = ponuda + popune**

Najniža izravnana ponuda označava se **Najniža**; kod izjednačenja, ona uneta prva. **U odnosu na naš trošak** je izravnana ponuda minus naš trošak za paket: negativno znači ispod njega. Ponuda koja izgleda najnižom može izgubiti kad se prebroji njen nedostajući opseg.

Radna sveska dobija list **Izravnanje ponuda** sa svakim paketom koji ima ponude: našom procenom, svakom ponudom, njenim popunama, izravnanim zbirom i razlikom, kao žive formule, i šta je svaka ponuda izostavila.

## Koristite ponudu kao cenu paketa

Izaberite {{ui:Koristi}} na ponudi i ona postaje cena celog paketa u vašoj proceni: sopstveno određivanje cene paketa (stavke, njihovi drugi uslovi i delovi sklopa) ispada iz ukupnog zbira posla, stavke ostaju kao količine sa vašim sopstvenim stopama za referencu, a jedna linija, **Izabrana ponuda**, nosi iznos ponude. Stavke koje ponuda izostavlja ostaju po vašem sopstvenom trošku, što je ono što je izravnanje već brojalo kao popunu. Izaberite drugu ponudu, ili ponovo istu da je vratite. Svaka je jedan korak koji {{key:Mod+Z}} poništava.

U pregledu ponude, ponude podizvođača su jedna linija unutar troška: opšti troškovi, dobit i garancija se dodaju preko njih kao i na svaki drugi trošak, dok porez na promet (samo na materijal) i opterećenje rada (na rad) ne. List Procena u radnoj svesci nosi izabranu ponudu kao sopstveni red, a blok marži je dodaje, sa živim formulama. Spisak materijala izostavlja materijal dodeljenog paketa, jer ga podizvođač isporučuje.

Paket unutar oblasti ponude alternative se ne određuje ponovo cenom: alternative i međuzbirovi oblasti i dalje koriste vaše sopstvene cene.

## Ponude koje stignu emailom

Ne morate ručno da unosite ponude. {{ui:Pošalji za ponude…}} ispod paketa šalje svakom podizvođaču link do stranice gde upisuje cenu za svaku liniju. {{ui:Preuzmi cene}} prenosi ono što su poslali u ovu tabelu. Pogledajte [Pošaljite paket za ponude](topic:bid-invitations).

:::note
Ručno unošenje ponude i dalje radi, a ručno uneta ponuda i ona sa sajta stoje jedna pored druge. Ponude koje su stigle sa sajta obeležene su **veb** (ili **veb, kasna** ako su stigle posle roka). Njihova cena menja se samo kad ponuđač pošalje novu verziju, pa vaše sopstvene izmene ostaju do tada.
:::
