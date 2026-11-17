---
title: Što je naučeno iz vaših predmjera
summary: TakeoffCraft čuva simbole koje ste potvrdili pomoću Autobrojanja, vaše skupove uvjeta, sklopove koje najčešće koristite i uzorke koje ponavljate na svakoj stranici, sve unutar vlastite datoteke predmjera. Pogledajte ih, upotrijebite ih, izbrišite.
keywords: naučeno, učenje, učiti, pomoćnik, zapamti, simboli, predlošci, isto kao prošli posao, prošli posao, skup uvjeta, uvjeti, ponovna upotreba, sklopovi, najčešće korišteno, prijedlozi, ponovi na svakoj stranici, svaka stranica, zaglavlje crteža, uzorak, očisti sve, zaboravi, privatnost
from: 54d99e99
---

TakeoffCraft postaje brži što više predmjera radite s njim. Uči **samo iz onoga što prihvatite**:

- simbole koje ste označili pomoću [Autobrojanje](topic:auto-count) i zatim dodali,
- skupove uvjeta koje spremite,
- sklopove koje koristite (jednom po poslu),
- uzorke oznaka koje ponavljate na svakoj stranici.

Riječ je o običnom uspoređivanju na vlastitim listovima, istom pretraživanju koje pokreće Autobrojanje. Nije riječ o treniranom modelu. Sve što nauči čuva se **u datoteci ovog predmjera** (`.takeoff.json`) i ništa se nigdje ne šalje. Da to prenesete na sljedeći posao, upotrijebite [Isto kao prošli posao](topic:what-it-learned#same-as-last-job).

Odaberite {{ui:Naučeno}} na alatnoj traci (žarulja, pored {{ui:Autobrojanje}}) da vidite sve.

## Simboli

Kad označite simbol pomoću {{ui:Autobrojanje}} i odaberete {{ui:Dodaj}}, označeni simbol se čuva, s razinom podudaranja koju ste prihvatili.

- U {{ui:Naučeno}} odaberite {{ui:Pronađi na ovom listu}} ili {{ui:Pronađi na svakom listu}}. Otvara se uobičajeni pregled Autobrojanja: kliknite okvir da ga izuzmete, pomaknite klizač, zatim ih dodajte. Ništa se ne dodaje dok to ne učinite.
- Kad otvorite list na kojem još nema naučenog simbola, traka na vrhu nudi {{ui:Pronađi …}} za njega. {{ui:Ne sada}} to skriva za taj list.
- Ako predmjer nema stavku tog naziva, dodavanje oznaka dodaje i stavku (jedan korak poništavanja).
- Ponovno dodavanje simbola iste stavke računa se prema onome koji već poznaje; simbol koji drukčije izgleda čuva se kao drugi.
- Kao i Autobrojanje, pronalazi simbol pod pravim kutovima i na listovima u drugom mjerilu.

## Skupovi uvjeta

Skup čuva uvjete predmjera (stavke s njihovim jedinicama, cijenama, gubitkom i sklopovima), bez oznaka.

1. U {{ui:Naučeno}} odaberite {{ui:Spremi uvjete ovog predmjera kao skup…}} i dajte mu ime. Skup s istim imenom se zamjenjuje.
2. U predmjeru koji ima skup, {{ui:Dodaj}} stavlja uvjete koje još nema. Uvjeti s istim imenom i vrstom ostaju netaknuti. To je jedan korak poništavanja.

## Isto kao prošli posao

Datoteka vašeg prošlog posla čuva ono što je naučio. Da započnete novi posao iz nje:

1. Otvorite nove nacrte, zatim odaberite {{ui:Naučeno}} › {{ui:Isto kao prošli posao…}}.
2. Odaberite `.takeoff.json` prošlog posla.
3. Označite što uvesti: njegove uvjete (samo one koje ovaj predmjer nema) i što je naučio (simbole, skupove, sklopove, uzorke). Zatim {{ui:Uvezi ih}}.

Njegovi uvjeti se također čuvaju kao skup s imenom tog posla. Njegove oznake i količine ostaju u njegovoj datoteci. Sve je jedan korak poništavanja.

## Sklopovi koje najčešće koristite

Stavka koja ima sklop računa se kao upotrijebljena jednom po poslu kad ima količinu i kad spremite predmjer. Posao je skup nacrta iz kojih je predmjer izrađen, pa ponovno spremanje istog predmjera ne računa se dvaput. Popis pod {{ui:Sklopovi koje najčešće koristite}} stavlja na vrh one koje najviše koristite. Izostavlja one koje ovaj predmjer već ima. {{ui:Dodaj}} stavlja jedan onako kako ste ga zadnji put koristili, sa svim dijelovima.

## Ponovi na svakoj stranici

Za oznake koje su iste na svakoj stranici skupa, poput brojanja zaglavlja crteža ili uobičajenog detalja:

1. Odaberite oznake na jednom listu ([Odabir oznaka](topic:copy-paste#select-the-marks)).
2. U {{ui:Naučeno}} odaberite {{ui:Ponovi odabrane oznake na svakoj stranici…}}, dajte uzorku ime i potvrdite.

Stavljaju se na svaku drugu otvorenu stranicu **iste veličine**, na istom mjestu, u jednom koraku poništavanja. Duljine i površine samo na stranicama s istim mjerilom; brojanja na bilo kojoj stranici te veličine. Stranica koja ih već ima se preskače. Uzorak se čuva, pa stranice koje kasnije otvorite dobivaju ponudu u traci, ili možete koristiti {{ui:Ponovi na svakoj stranici}} s popisa.

## Pogledajte, izbrišite

Sve što je naučeno navedeno je u {{ui:Naučeno}}. Gumb za brisanje briše jednu stavku. {{ui:Očisti sve}} briše sve što je naučeno i ostavlja vaše stavke i oznake netaknutima. Oboje se može poništiti dok ne zatvorite predmjer, a oboje se sprema s predmjerom.

Da prestanete učiti u jednom predmjeru, isključite {{ui:Uči iz ovog predmjera}}. Ništa novo se ne uči, a ono što je navedeno ostaje dok ga ne izbrišete.

## Dobro je znati

- Starije verzije aplikacije TakeoffCraft otvaraju datoteku s naučenim stvarima normalno. Ignoriraju taj dio i odbacuju ga ako datoteku ponovno spreme.
- Naučeni simbol je mala slika onoga što ste označili, čuva se u datoteci (nekoliko kilobajta svaki).
- Naučeni simboli pretražuju se kao što pretražuje Autobrojanje, pa vrijede ista ograničenja: [Autobrojanje simbola](topic:auto-count).
