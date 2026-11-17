---
title: Pošaljite paket za ponude
summary: Pošaljite paket ponude podizvođačima emailom, pustite ih da upišu cene na stranici koja ne traži nalog, držite cene zapečaćene do vremena otvaranja i prenesite ih na list izravnanja.
keywords: pošalji za ponude, pozivnica, pozivnica za ponudu, ponuđač, podizvođač, pozovi, email, zahtev za cenu, zapečaćene ponude, otvaranje ponuda, dan ponude, kasna ponuda, rok, podsetnik, evidencija podizvođača, osiguranje, kvalifikacija, csv, poveži, listovi PDF
from: fb314b2c
---

{{ui:Izvezi}} › {{ui:Paketi ponuda i izravnanje…}} › {{ui:Pošalji za ponude…}} šalje jedan paket izabranim osobama. Sajt svakoj od njih šalje email sa linkom; otvore stranicu, vide opseg i upisuju cenu za svaku stavku. Vi vidite cene na listu izravnanja, spremne za poređenje ([Paketi ponuda i izravnanje ponuda](topic:bid-leveling)).

:::note
Slanje **još nije otvoreno svima.** Dok se funkcija testira, radi za naloge koje je tim CadCraft omogućio; ako vaš nije, dijalog to kaže. Stranica za ponuđača radi za svaku poslatu pozivnicu.
:::

## Pre slanja

- Potreban vam je nalog CadCraft sa potvrđenom adresom emaila. TakeoffCraft u pregledaču traži da **Povežete**: otvara se kartica na getcadcraft.com, pritisnete Poveži, i ta kartica dobija prijavu koja važi 30 dana, samo za pakete ponuda, do zatvaranja kartice TakeoffCraft. Možete je ukloniti bilo kad na stranici za bezbednost. Prozor Studio još ne može da šalje.
- Dajte svakoj stavci CSI broj: paket su stavke jedne CSI divizije ([Kreirajte stavke predmera](topic:create-items)).
- Podesite razmeru listova na kojima su oznake paketa, da količine koje vide ponuđači budu izmerene.

## Pošaljite paket

1. Izaberite {{ui:Pošalji za ponude…}} ispod paketa.
2. Upišite naslov, projekat i opcionu poruku, i **rok** u svojoj vremenskoj zoni.
3. Ostavite **Zadrži cene zapečaćene** označeno da sakrijete svaku cenu do **vremena otvaranja** (ne pre roka), ili ga odznačite da vidite cene kako stižu.
4. Ostavite polje listova označeno da pošaljete PDF listova na kojima su oznake paketa, sa nacrtanim oznakama. Vaše cene nikad nisu u onome što se šalje: samo nazivi stavki, CSI brojevi, količine, jedinice i nazivi listova.
5. Upišite osobe koje pozivate, po jednu u redu, kao `Ime <ime@firma.com>` ili samo adresu, ili označite osobe iz evidencije podizvođača. Najviše 60 odjednom, 100 po paketu.
6. Izaberite {{ui:Pošalji pozivnice}}. Svaka osoba dobija jedan običan email sa vašim imenom i adresom emaila, rokom i linkom; odgovori idu vama.

Dijalog kaže koliko je poslato i navodi ko je preskočen: već pozvan na ovaj paket, zamolio da ne dobija pozivnice za ponude, nije ispravna adresa, ili je prekoračeno ograničenje slanja.

## Šta vidi ponuđač

Stranica na dugom privatnom linku, bez prijave. Prikazuje ko ga je pozvao, rok, da li su cene zapečaćene, vašu poruku i PDF listova, zatim svaku stavku sa količinom. Za svaku stavku upisuju cenu ili označavaju **Nije uključeno**, i mogu dodati napomenu. Napomene daju za ceo paket i do 3 fajla (ponudu, pismo o opsegu, sertifikat). Mogu ponovo da sačuvaju i menjaju cene do otvaranja, ili **odbiju**, uz polje da zatraže da im CadCraft više ne šalje pozivnice za ponude.

## Zapečaćene ponude i otvaranje

Pre vremena otvaranja **niko** ne vidi cenu, napomenu ni fajl: ni vi, ni u TakeoffCraft, ni na stranici Paketi ponuda. Vidite ko je pozvan i da li je odgovorio. U vreme otvaranja sve ponude se prikazuju odjednom. Ponuda sačuvana posle roka prihvata se i označava se **kasna**; izravnanje je i dalje navodi, a kasnost je oznaka, a ne presuda. Posle otvaranja ponuđač ne može da menja cenu. Bez zapečaćivanja, ponuda je konačna čim dospe.

## Preuzmite cene

{{ui:Preuzmi cene}} pita sajt i dodaje svaki odgovor paketu kao ponudu, označenu **veb**. TakeoffCraft takođe tiho pita svaki put kad otvorite dijalog dok je povezan. Ponuda čiji je ponuđač sačuvao novu verziju ažurira se na mestu; ponuda koju ste vi menjali ostaje kakva ste je ostavili, dok ne pošalju novu verziju. Svako preuzimanje je jedan korak koji {{key:Mod+Z}} poništava. Stavke koje su izostavljene prenose se kao opseg koji ponuda ostavlja van, pa ih izravnanje popunjava po vašem trošku.

## Na sajtu

Vaš nalog ima još dve stranice kad možete da šaljete. **Paketi ponuda** navodi šta ste poslali, ko je odgovorio, kasne ponude i fajlove, i omogućava vam da pošaljete podsetnik (novi link; stari prestaje da radi), zatvorite, ponovo otvorite ili otkažete paket. **Podizvođači** čuva evidenciju za svaku firmu: kontakte, struke, odgovore o kvalifikaciji (godine u poslu, kapacitet garancija, EMR, bezbednosni zapis, sindikalni ili otvoreni pogon, reference), datume isteka licence i osiguranja, obeležene kad su prošli ili za manje od 30 dana, i njihove ranije ponude. Evidenciju uvozite i izvozite kao CSV: jedan red po kontaktu, sa kolonama koje izvoz prikazuje; firma koju već imate se ažurira, nikad ne ponavlja.

## Ko šta vidi i koliko dugo

Cene, napomene i fajlovi ponuđača idu vama i timu CadCraft, koji vodi stranicu. Čuvaju se 24 meseca posle roka, a fajlovi 180 dana; zatim se brišu. Adresa emaila ponuđača je ona koju ste uneli; koristi se samo za slanje pozivnice i podsetnika za nju. Jedna adresa dobija najviše 3 pozivnice dnevno od svih zajedno, a vi možete poslati do 200 dnevno.

## Još nije izgrađeno

Dopune, pisma o dodeli, potpisani list opsega za svakog ponuđača i automatski podsetnici pre isteka datuma osiguranja nisu izgrađeni. Pogledajte [Još nije izgrađeno](topic:not-built-yet).
