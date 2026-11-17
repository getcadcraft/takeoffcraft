---
title: Šta je naučio iz tvojih predmera
summary: TakeoffCraft čuva simbole koje si potvrdio uz Automatsko brojanje, skupove uslova, sklopove koje najviše koristiš i obrasce koje ponavljaš na svakoj strani, sve unutar datoteke samog predmera. Pogledaj ih, koristi ih, izbriši.
keywords: nauči, naučeno, učenje, asistent, zapamti, simboli, šabloni, isto kao prethodni posao, prethodni posao, skup uslova, uslovi, ponovna upotreba, sklopovi, najviše korišćeni, predlozi, ponovi na svakoj strani, svaka strana, blok naslova, obrazac, obriši sve, zaboravi, privatnost
from: 54d99e99
---

TakeoffCraft postaje brži što više predmera radiš sa njim. Uči **samo iz onoga što prihvatiš**:

- simbole koje si obeležio sa [Automatsko brojanje](topic:auto-count) i zatim dodao,
- skupove uslova koje sačuvaš,
- sklopove koje koristiš (jednom po poslu),
- obrasce oznaka koje ponavljaš na svakoj strani.

To je obično poklapanje na tvojim listovima, ista pretraga koju pokreće Automatsko brojanje. Nije obučen model. Sve što nauči čuva se **u datoteci ovog predmera** (`.takeoff.json`), i ništa se ne šalje nigde. Da to preneseš na sledeći posao, koristi [Isto kao prethodni posao](topic:what-it-learned#same-as-last-job).

Izaberi {{ui:Naučeno}} na traci sa alatkama (sijalicu, pored {{ui:Automatsko brojanje}}) da vidiš sve.

## Simboli

Kada obeležiš simbol sa {{ui:Automatsko brojanje}} i izabereš {{ui:Dodaj}}, simbol koji si obeležio se čuva, sa nivoom poklapanja koji si prihvatio.

- U {{ui:Naučeno}} izaberi {{ui:Pronađi na ovom listu}} ili {{ui:Pronađi na svim listovima}}. Otvara se uobičajeni pregled Automatskog brojanja: klikni na okvir da ga izostaviš, pomeri klizač, pa ih dodaj. Ništa se ne dodaje dok to ne uradiš.
- Kada otvoriš list na kome još nema nijednog naučenog simbola, traka na vrhu nudi {{ui:Pronađi …}} za njega. {{ui:Ne sada}} to sakriva za taj list.
- Ako predmer nema stavku tog imena, dodavanje oznaka dodaje i stavku (jedan korak opozivanja).
- Ponovno dodavanje simbola iste stavke računa se ka onome koji već zna; simbol drugačijeg izgleda čuva se kao drugi.
- Kao i Automatsko brojanje, nalazi simbol pod pravim uglovima i na listovima druge razmere.

## Skupovi uslova

Skup čuva uslove predmera (stavke sa jedinicama, cenama, otpadom i sklopovima), bez oznaka.

1. U {{ui:Naučeno}} izaberi {{ui:Sačuvaj uslove ovog predmera kao skup…}} i daj mu ime. Skup sa istim imenom se zamenjuje.
2. U predmeru koji ima skup, {{ui:Dodaj}} dodaje uslove koje nema. Uslovi sa istim imenom i tipom se ne diraju. To je jedan korak opozivanja.

## Isto kao prethodni posao

Datoteka tvog prethodnog posla čuva ono što je naučila. Da pokreneš novi posao iz nje:

1. Otvori nove planove, pa izaberi {{ui:Naučeno}} › {{ui:Isto kao prethodni posao…}}.
2. Izaberi `.takeoff.json` prethodnog posla.
3. Označi šta uvoziš: njegove uslove (samo one koje ovaj predmer nema) i ono što je naučio (simbole, skupove, sklopove, obrasce). Zatim {{ui:Uvezi ih}}.

Njegovi uslovi se takođe čuvaju kao skup nazvan po tom poslu. Njegove oznake i količine ostaju u njegovoj datoteci. Sve je jedan korak opozivanja.

## Sklopovi koje najviše koristiš

Stavka koja ima sklop računa se kao korišćena jednom po poslu kada ima količinu i kada sačuvaš predmer. Posao je skup planskih datoteka od kojih se predmer uzima, pa ponovno čuvanje istog predmera ne računa se dvaput. Spisak pod {{ui:Sklopovi koje najviše koristiš}} stavlja one koje najviše koristiš na prvo mesto. Izostavlja one koje ovaj predmer već ima. {{ui:Dodaj}} dodaje jedan onako kako si ga poslednji put koristio, sa svim delovima.

## Ponovi na svakoj strani

Za oznake koje su iste na svakoj strani skupa, kao brojanje bloka naslova ili uobičajen detalj:

1. Izaberi oznake na jednom listu ([Izbor oznaka](topic:copy-paste#select-the-marks)).
2. U {{ui:Naučeno}} izaberi {{ui:Ponovi izabrane oznake na svakoj strani…}}, daj obrascu ime i potvrdi.

Idu na svaku drugu otvorenu stranu **iste veličine**, na isto mesto, u jednom koraku opozivanja. Dužine i površine idu samo na strane iste razmere; brojevi idu na bilo koju stranu te veličine. Strana koja ih već ima se preskače. Obrazac se čuva, pa strane koje kasnije otvoriš dobijaju ponudu u traci, ili možeš da koristiš {{ui:Ponovi na svakoj strani}} sa spiska.

## Vidi, izbriši

Sve što je naučeno navedeno je u {{ui:Naučeno}}. Kanta briše jednu stavku. {{ui:Obriši sve}} briše sve što je naučeno i ostavlja tvoje stavke i oznake netaknutim. Oba se mogu opozvati dok ne zatvoriš predmer, i oba se čuvaju uz predmer.

Da prestaneš da učiš u jednom predmeru, isključi {{ui:Uči iz ovog predmera}}. Ništa novo se ne uči, a ono što je navedeno ostaje dok ga ne izbrišeš.

## Dobro je znati

- Starije verzije TakeoffCraft-a otvaraju datoteku sa naučenim stvarima normalno. Ignorišu taj deo i odbacuju ga ako datoteku ponovo sačuvaju.
- Naučeni simbol je mala slika onoga što si obeležio, sačuvana u datoteci (nekoliko kilobajta svaka).
- Naučeni simboli se pretražuju kao što Automatsko brojanje pretražuje, pa važe ista ograničenja: [Automatsko brojanje simbola](topic:auto-count).
