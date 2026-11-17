---
title: Slanje paketa za ponude
summary: Pošaljite paket ponude podizvođačima e-poštom, neka upišu cijene na stranici koja ne traži račun, zadržite cijene zapečaćenima do vremena otvaranja i uvucite ih u list izjednačavanja.
keywords: pošalji za ponude, poziv, poziv na ponudu, ponuđač, podizvođač, pozivanje, e-pošta, zahtjev za cijenu, zapečaćene ponude, otvaranje ponuda, dan ponude, kasna ponuda, rok, podsjetnik, evidencija podizvođača, osiguranje, kvalifikacija, csv, povezivanje, listovi pdf
from: fb314b2c
---

{{ui:Izvoz}} › {{ui:Paketi ponuda i izjednačavanje…}} › {{ui:Pošalji za ponude…}} šalje jedan paket onima koje odaberete. Web-mjesto svakome šalje e-poštom poveznicu; oni otvaraju stranicu, vide opseg i upisuju cijenu za svaki redak. Cijene vidite u listu izjednačavanja, spremne za usporedbu ([Paketi ponuda i izjednačavanje ponuda](topic:bid-leveling)).

:::note
**Slanje još nije otvoreno svima.** Dok je značajka u testiranju, radi za račune koje je tim CadCraft omogućio; ako vaš nije, dijalog to kaže. Stranica ponuđača radi za svaki poslani poziv.
:::

## Prije slanja

- Trebate CadCraft račun s provjerenom adresom e-pošte. TakeoffCraft u pregledniku traži da **Povežete**: otvara se kartica na getcadcraft.com, pritisnete Poveži, a ta kartica dobiva prijavu koja vrijedi 30 dana, samo za pakete ponuda, dok ne zatvorite karticu TakeoffCraft. Možete je ukloniti kad god na stranici sigurnosti. Prozor Studija zasad ne može slati.
- Dajte svakoj stavci CSI broj: paket su stavke jedne CSI divizije ([Stvaranje stavki izvedbe](topic:create-items)).
- Odredite mjerilo listovima na kojima su oznake paketa, da su količine koje ponuđači vide izmjerene.

## Slanje paketa

1. Odaberite {{ui:Pošalji za ponude…}} pod paketom.
2. Upišite naslov, projekt i izbornu poruku te **rok** u svojoj vremenskoj zoni.
3. Ostavite označeno **Zadrži cijene zapečaćenima** da sakrijete sve cijene do **vremena otvaranja** (ne prije roka), ili to odznačite da vidite cijene kako pristižu.
4. Ostavite označen okvir za listove da pošaljete PDF listova na kojima su oznake paketa, s nacrtanim oznakama. Vaše cijene nikada nisu u poslanom: samo nazivi stavki, CSI brojevi, količine, jedinice i nazivi listova.
5. Upišite ljude koje pozivate, jednog po retku, kao `Ime <ime@tvrtka.com>` ili samo adresu, ili označite ljude iz svoje evidencije podizvođača. Do 60 odjednom, 100 po paketu.
6. Odaberite {{ui:Pošalji pozive}}. Svaka osoba dobiva jednu običnu e-poruku s vašim imenom i adresom e-pošte, rokom i poveznicom; odgovori idu vama.

Dijalog kaže koliko je poslano i navodi koga je preskočio: već pozvan na ovaj paket, zamolio da ne prima pozive za ponudu, nevažeća adresa ili prekoračeno ograničenje slanja.

## Što vidi ponuđač

Stranica na dugoj privatnoj poveznici, bez prijave. Prikazuje tko ga je pozvao, rok, je li cijena zapečaćena, vašu poruku i PDF listova, zatim svaki redak s količinom. Za svaki redak upisuju cijenu ili označe **Nije uključeno** i mogu dodati napomenu. Napomene daju za cijeli paket, a do 3 datoteke (ponudu, pismo o opsegu, potvrdu). Mogu ponovno spremiti i promijeniti cijene do otvaranja, ili **odbiti**, uz okvir da zatraže da im CadCraft više ne šalje pozive za ponude.

## Zapečaćene ponude i otvaranje

Prije vremena otvaranja **nitko** ne vidi cijenu, napomenu ni datoteku: ni vi, ni u TakeoffCraftu, ni na stranici Paketi ponuda. Vidite tko je pozvan i je li odgovorio. U vrijeme otvaranja sve ponude prikazuju se odjednom. Ponuda spremljena nakon roka prihvaća se i označava **zakasnjelom**; izjednačavanje je i dalje navodi, a zakašnjenje je samo oznaka, a ne odluka. Nakon otvaranja ponuđač ne može promijeniti cijenu. Bez zapečaćivanja ponuda je konačna čim je rok prošao.

## Dohvat cijena

{{ui:Dohvati cijene}} pita web-mjesto i dodaje svaki odgovor paketu kao ponudu, označenu **web**. TakeoffCraft također tiho pita svaki put kad otvorite dijalog dok je povezan. Ponuda čiji je ponuđač spremio novu verziju ažurira se na mjestu; ponuda koju ste vi uredili ostaje kakvu ste ostavili dok ne pošalju novu verziju. Svako povlačenje je jedan korak koji {{key:Mod+Z}} poništava. Izostavljeni redci dolaze kao opseg koji ponuda izostavlja, pa izjednačavanje to popunjava po vašem trošku.

## Na web-mjestu

Vaš račun ima još dvije stranice kada smijete slati. **Paketi ponuda** navodi što ste poslali, tko je odgovorio, zakasnjele ponude i datoteke, te dopušta slanje podsjetnika (nova poveznica; stara prestaje raditi), zatvaranje, ponovno otvaranje ili otkazivanje paketa. **Podizvođači** vodi evidenciju za svaku tvrtku: kontakte, struke, odgovore o kvalifikaciji (godine poslovanja, kapacitet jamstva, EMR, sigurnosni zapis, sindikalni ili otvoreni pogon, reference), datume isteka licence i osiguranja, označene kad isteknu ili za 30 dana, te njihove prošle ponude. Evidencije uvozite i izvozite kao CSV: jedan redak po kontaktu, sa stupcima koje izvoz prikazuje. Tvrtka koju već imate ažurira se, nikada ne ponavlja.

## Tko što vidi i koliko dugo

Cijene, napomene i datoteke ponuđača idu vama i timu CadCraft, koji vodi stranicu. Čuvaju se 24 mjeseca od roka, a datoteke 180 dana; zatim se brišu. Adresa e-pošte ponuđača je ona koju ste unijeli; koristi se samo za slanje poziva i podsjetnika za njega. Jedna adresa dobiva najviše 3 poziva dnevno od svih zajedno, a vi možete poslati do 200 dnevno.

## Još nije izrađeno

Dopune, pisma o dodjeli, potpisani list opsega po ponuđaču i automatski podsjetnici prije isteka datuma osiguranja još nisu izrađeni. Vidi [Još nije izrađeno](topic:not-built-yet).
