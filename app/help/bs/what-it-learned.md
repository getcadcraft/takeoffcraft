---
title: Šta je naučeno iz vaših predmjera
summary: TakeoffCraft čuva simbole koje ste potvrdili s Auto brojanjem, vaše skupove uslova, sklopove koje najviše koristite i obrasce koje ponavljate na svakoj stranici, sve unutar vlastite datoteke predmjera. Pogledajte, koristite, obrišite.
keywords: nauči, naučeno, učenje, asistent, zapamti, simboli, šabloni, isto kao prošli posao, prošli posao, skup uslova, uslovi, ponovna upotreba, sklopovi, najčešće korišteni, prijedlozi, ponovi na svakoj stranici, svaka stranica, naslovni blok, obrazac, obriši sve, zaboravi, privatnost
from: 54d99e99
---

TakeoffCraft postaje brži što više predmjera radite s njim. Uči **samo iz onoga što prihvatite**:

- simbole koje ste označili s [Auto brojanje](topic:auto-count) i zatim dodali,
- skupove uslova koje sačuvate,
- sklopove koje koristite (jednom po poslu),
- obrasce oznaka koje ponavljate na svakoj stranici.

To je jednostavno poklapanje na vašim listovima, ista pretraga koju pokreće Auto brojanje. Nije uvježbani model. Sve što nauči čuva se **u datoteci ovog predmjera** (`.takeoff.json`), i ništa se ne šalje nigdje. Da to prenesete na sljedeći posao, koristite [Isto kao prošli posao](topic:what-it-learned#same-as-last-job).

Izaberite {{ui:Naučeno}} na traci alata (sijalica, pored {{ui:Auto brojanje}}) da vidite sve.

## Simboli

Kad označite simbol s {{ui:Auto brojanje}} i izaberete {{ui:Dodaj}}, simbol koji ste označili se čuva, sa nivoom poklapanja koji ste prihvatili.

- U {{ui:Naučeno}} izaberite {{ui:Pronađi na ovom listu}} ili {{ui:Pronađi na svim listovima}}. Otvara se uobičajeni pregled Auto brojanja: kliknite okvir da ga izostavite, pomjerite klizač, pa ih dodajte. Ništa se ne dodaje dok to ne uradite.
- Kad otvorite list na kojem još nema nijednog naučenog simbola, traka na vrhu nudi {{ui:Pronađi …}} za njega. {{ui:Ne sad}} to sakriva za taj list.
- Ako predmjer nema stavku tog imena, dodavanje oznaka dodaje i stavku (jedan korak poništavanja).
- Ponovno dodavanje simbola iste stavke ide na onu koju već poznaje; simbol drugačijeg izgleda čuva se kao drugi.
- Kao i Auto brojanje, pronalazi simbol pod pravim uglovima i na listovima druge razmjere.

## Skupovi uslova

Skup čuva uslove predmjera (stavke sa jedinicama, cijenama, otpadom i sklopovima), bez oznaka.

1. U {{ui:Naučeno}} izaberite {{ui:Sačuvaj uslove ove procjene kao skup…}} i dajte mu ime. Skup s istim imenom se zamjenjuje.
2. U predmjeru koji ima skup, {{ui:Dodaj}} ubacuje uslove koje još nema. Uslovi istog imena i tipa ostaju netaknuti. To je jedan korak poništavanja.

## Isto kao prošli posao

Datoteka vašeg posljednjeg posla čuva ono što je naučila. Da započnete novi posao iz nje:

1. Otvorite nove planove, pa izaberite {{ui:Naučeno}} › {{ui:Isto kao prošli posao…}}.
2. Izaberite `.takeoff.json` prošlog posla.
3. Označite šta uvozite: njegove uslove (samo one koje ovaj predmjer nema) i ono što je naučio (simboli, skupovi, sklopovi, obrasci). Zatim {{ui:Uvezi ih}}.

Njegovi uslovi se također čuvaju kao skup s imenom tog posla. Njegove oznake i količine ostaju u njegovoj datoteci. Sve je jedan korak poništavanja.

## Sklopovi koje najviše koristite

Stavka koja ima sklop računa se kao korištena jednom po poslu kad ima količinu i kad sačuvate predmjer. Posao je skup planova od kojih se predmjer radi, pa ponovno čuvanje istog predmjera ne računa se dvaput. Spisak pod {{ui:Sklopovi koje najviše koristite}} stavlja one koje najviše koristite na vrh. Izostavlja one koje ovaj predmjer već ima. {{ui:Dodaj}} ubacuje jedan onako kako ste ga posljednji put koristili, sa svim dijelovima.

## Ponovi na svakoj stranici

Za oznake koje su iste na svakoj stranici skupa, kao brojanje naslovnog bloka ili tipičan detalj:

1. Odaberite oznake na jednom listu ([Odabir oznaka](topic:copy-paste#select-the-marks)).
2. U {{ui:Naučeno}} izaberite {{ui:Ponovi odabrane oznake na svakoj stranici…}}, dajte obrascu ime i potvrdite.

Idu na svaku drugu otvorenu stranicu **iste veličine**, na istom mjestu, u jednom koraku poništavanja. Dužine i površine idu samo na stranice iste razmjere; brojanja idu na bilo koju stranicu te veličine. Stranica koja ih već ima se preskače. Obrazac se čuva, pa stranice koje kasnije otvorite dobijaju ponudu u traci, ili možete koristiti {{ui:Ponovi na svakoj stranici}} u spisku.

## Vidite, brišete

Sve što je naučeno navedeno je u {{ui:Naučeno}}. Kanta briše jednu stvar. {{ui:Obriši sve}} briše sve što je naučeno i ostavlja vaše stavke i oznake netaknutim. Oba se mogu poništiti dok ne zatvorite predmjer, i oba se čuvaju s predmjerom.

Da prestanete učiti u jednom predmjeru, isključite {{ui:Uči iz ove procjene}}. Ništa novo se ne uči, a ono što je navedeno ostaje dok ga ne obrišete.

## Dobro je znati

- Starije verzije TakeoffCraft-a otvaraju datoteku s naučenim stvarima normalno. Ignorišu taj dio i izbace ga ako datoteku ponovo sačuvaju.
- Naučeni simbol je mala slika onoga što ste označili, čuva se u datoteci (nekoliko kilobajta svaki).
- Naučeni simboli se pretražuju kao što Auto brojanje pretražuje, pa važe ista ograničenja: [Auto brojanje simbola](topic:auto-count).
