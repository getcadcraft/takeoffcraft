---
title: Slanje paketa za ponude
summary: Pošaljite paket ponude podizvođačima e-poštom, pustite ih da upišu cijene na stranici koja ne traži nalog, držite cijene zapečaćene do vremena otvaranja i uvucite ih u list izjednačavanja.
keywords: pošalji za ponude, pozivnica, pozivnica za ponudu, ponuđač, podizvođač, pozovi, e-pošta, zahtjev za cijenu, zapečaćene ponude, otvaranje ponuda, dan ponude, kasna ponuda, rok, podsjetnik, evidencija podizvođača, osiguranje, kvalifikacija, csv, povezivanje, PDF listova
from: fb314b2c
---

{{ui:Izvoz}} › {{ui:Paketi ponude i izjednačavanje…}} › {{ui:Pošalji na ponude…}} šalje jedan paket izabranim osobama. Sajt svakome pošalje e-poštom link; oni otvaraju stranicu, vide obim i upisuju cijenu za svaku stavku. Cijene vidite u listu izjednačavanja, spremne za poređenje ([Paketi ponude i izjednačavanje ponuda](topic:bid-leveling)).

:::note
Slanje **još nije otvoreno svima.** Dok se funkcija testira, radi za naloge koje je tim CadCraft omogućio; ako vaš nije, dijalog to kaže. Stranica ponuđača radi za svaku poslanu pozivnicu.
:::

## Prije slanja

- Potreban vam je CadCraft nalog s provjerenom adresom e-pošte. TakeoffCraft u pregledaču traži da se **Povežete**: otvara se kartica na getcadcraft.com, pritisnete Poveži, a ta kartica dobija prijavu koja radi 30 dana, samo za pakete ponude, dok ne zatvorite karticu TakeoffCraft. Možete je ukloniti u bilo koje vrijeme na stranici sigurnosti. Prozor Studio još ne može slati.
- Dajte svakoj stavci CSI broj: paket su stavke jedne CSI divizije ([Kreiranje stavki predmjera](topic:create-items)).
- Razmjerom označite listove na kojima su oznake paketa, da količine koje ponuđači vide budu izmjerene.

## Pošaljite paket

1. Izaberite {{ui:Pošalji na ponude…}} ispod paketa.
2. Upišite naslov, projekt i opcionalnu poruku, te **rok** u svojoj vremenskoj zoni.
3. Ostavite označeno **Zadrži cijene zapečaćenim** da sakrijete svaku cijenu do **vremena otvaranja** (ne prije roka), ili odznačite da vidite cijene kako stižu.
4. Ostavite označeno polje listova da pošaljete PDF listova na kojima su oznake paketa, s nacrtanim oznakama. Vaše cijene nikada nisu u onome što se šalje: samo nazivi stavki, CSI brojevi, količine, jedinice i nazivi listova.
5. Upišite osobe za pozivanje, jednu po redu, kao `Naziv <naziv@firma.com>` ili samo adresu, ili označite osobe iz evidencije podizvođača. Do 60 odjednom, 100 po paketu.
6. Izaberite {{ui:Pošalji pozivnice}}. Svaka osoba dobija jednu običnu poruku s vašim imenom i adresom e-pošte, rokom i linkom; odgovori stižu vama.

Dijalog vam kaže koliko je poslato i navodi koga je preskočio: već pozvan na ovaj paket, zatražio da ne dobija pozivnice za ponude, nevažeća adresa ili prekoračen limit slanja.

## Šta vidi ponuđač

Stranica na dugom privatnom linku, bez prijave. Prikazuje ko ih je pozvao, rok, da li su cijene zapečaćene, vašu poruku i PDF listova, zatim svaku stavku s količinom. Za svaku stavku upisuju cijenu ili označavaju **Nije uključeno**, i mogu dodati napomenu; napomene dodaju za cijeli paket i do 3 datoteke (ponudu, dopis o obimu, certifikat). Mogu ponovo sačuvati i mijenjati cijene do otvaranja, ili **odbiti**, uz polje za traženje da im CadCraft ubuduće ne šalje pozivnice za ponude.

## Zapečaćene ponude i otvaranje

Prije vremena otvaranja **niko** ne vidi cijenu, napomenu ili datoteku: ni vi, ni u TakeoffCraft, ni na stranici Paketi ponude. Vidite ko je pozvan i da li je odgovorio. U vrijeme otvaranja sve ponude se odjednom prikazuju. Ponuda sačuvana nakon roka se prihvata i označava **kasno**; izjednačavanje je i dalje navodi, a kašnjenje je oznaka, a ne odluka. Nakon otvaranja ponuđač ne može mijenjati cijenu. Bez zapečaćivanja, ponuda je konačna čim dospije.

## Dobijanje cijena

{{ui:Preuzmi cijene}} pita sajt i dodaje svaki odgovor paketu kao ponudu, označenu **web**. TakeoffCraft također tiho pita svaki put kada otvorite dijalog dok je povezan. Ponuda čiji je ponuđač sačuvao novu verziju ažurira se na mjestu; ponuda koju ste vi uredili ostaje kako ste je ostavili dok ne pošalju novu verziju. Svako preuzimanje je jedan korak koji {{key:Mod+Z}} poništava. Stavke označene kao izostavljene prenose se kao obim koji ponuda ostavlja, pa ih izjednačavanje popunjava po vašoj cijeni.

## Na sajtu

Vaš nalog ima još dvije stranice kada možete slati: **Paketi ponude** navodi šta ste poslali, ko je odgovorio, kasne ponude i datoteke, omogućava slanje podsjetnika (novi link; stari prestaje da radi), zatvaranje, ponovno otvaranje ili otkazivanje paketa; **Podizvođači** vodi evidenciju za svaku firmu: kontakte, struke, odgovore o kvalifikacijama (godine poslovanja, kapacitet garancije, EMR, sigurnosni zapis, sindikalni ili nesindikalni pogon, reference), datume isteka licence i osiguranja, označene kad isteknu ili u roku od 30 dana, i njihove ranije ponude. Uvozite i izvozite evidencije kao CSV: jedan red po kontaktu, s kolonama koje prikazuje izvoz; firma koju već imate se ažurira, nikad ponavlja.

## Ko šta vidi i koliko dugo

Cijene, napomene i datoteke ponuđača idu vama i timu CadCraft, koji vodi stranicu. Čuvaju se 24 mjeseca nakon roka, a datoteke 180 dana; zatim se brišu. Adresa e-pošte ponuđača je ona koju ste unijeli; koristi se samo za slanje pozivnice i podsjetnika za nju. Jedna adresa dobija najviše 3 pozivnice dnevno od svih zajedno, a vi možete poslati do 200 dnevno.

## Još nije izrađeno

Dopune, pisma o dodjeli, potpisani list obima za svakog ponuđača i automatski podsjetnici prije isteka datuma osiguranja nisu izrađeni. Pogledajte [Još nije izrađeno](topic:not-built-yet).
