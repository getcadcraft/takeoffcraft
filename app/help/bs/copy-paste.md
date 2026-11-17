---
title: Kopiraj, zalijepi i dupliciraj oznake
summary: Kopirajte oznake sa stavkama, zalijepite ih gdje kliknete ili na istom mjestu na drugom listu, dupliciraj, izreži, izbriši i odaberi sve, svaki korak se može poništiti.
keywords: kopiraj, zalijepi, izreži, dupliciraj, zalijepi na mjestu, međumemorija, odaberi sve, poništi odabir, više oznaka, tipičan sprat, ponovi, isti plan, drugi list, kopiraj stavku, dupliciraj stavku
from: e20e9024
---

Grupa {{ui:Uređivanje}} na traci alata sadrži {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}} i {{ui:Zalijepi}}. Njen meni {{ui:Više}} sadrži ostalo, svaki sa svojim tasterom: {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na mjestu}}, {{ui:Dupliciraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}} i {{ui:Poništi odabir}}. Svaka od njih se poništava jednim korakom s {{key:Mod+Z}}.

## Odaberite oznake

1. Odaberite {{ui:Odaberi}} ({{key:V}}) i kliknite oznaku.
2. Držite {{key:Shift}} i kliknite još oznaka da ih dodate. {{key:Shift}} + klik na odabranu oznaku je ponovo uklanja.
3. Ili pritisnite {{key:Mod+A}} ({{ui:Odaberi sve}}) da odaberete svaku oznaku na otvorenom listu.

Kad je odabrano više oznaka, desni panel prikazuje **Odabrane oznake**: koliko čega ima, s {{ui:Kopiraj}}, {{ui:Dupliciraj}}, {{ui:Izreži}} i {{ui:Izbriši oznake}}. Ručke za uglove se pokazuju samo kad je odabrana jedna oznaka. {{key:Esc}} ({{ui:Poništi odabir}}) briše odabir.

## Kopirajte i zalijepite gdje kliknete

1. Odaberite oznake i pritisnite {{key:Mod+C}} ({{ui:Kopiraj}}). Oznake se kopiraju sa svojim stavkama, uključujući sklop, otpad i troškove svake stavke.
2. Idite na list na koji ih želite (može biti i isti list).
3. Pritisnite {{key:Mod+V}} ({{ui:Zalijepi}}). Isprekidana kopija prati pokazivač.
4. Kliknite gdje ide. Sredina kopiranih oznaka se spušta na pokazivač.

{{key:Esc}} otkazuje i ne dodaje ništa. Zalijepljene oznake su nakon toga odabrane, pa ih {{key:Delete}} ili {{key:Mod+Z}} ponovo uklanjaju.

U istom predmjeru, zalijepljene oznake idu na **iste stavke**, pa se njihove količine dodaju tim stavkama. U drugom predmjeru (drugi tab ili nakon {{ui:Novi}}), koristi se stavka istog naziva i tipa; inače se stavka dodaje sa svojim sklopom. Ako je naziv zauzet stavkom drugog tipa, dodana stavka se zove „(naziv) (kopija)”.

Zalijepljene oznake idu u ponudnu cjelinu odabranu na vrhu panela {{ui:Stavke}} (ili ni u jednu). Vidi [Ponudne cjeline](topic:bid-areas).

## Zalijepi na mjestu

{{key:Mod+Shift+V}} ({{ui:Zalijepi na mjestu}}) stavlja kopiju na tačno isto mjesto na otvorenom listu, po njenoj poziciji na stranici. Koristite to za tipičan sprat: označite nivo 2, kopirajte, otvorite nivo 3, zalijepite na mjestu.

Zalijepi na mjestu traži list iste veličine kao onaj s kojeg ste kopirali. Na listu druge veličine TakeoffCraft to kaže i ništa ne zalijepi; umjesto toga koristite {{ui:Zalijepi}} i kliknite. Na listu s kojeg ste kopirali, kopija ide preko originala.

## Razmjera mora odgovarati

Dužine i površine zavise od razmjere lista. Dionica koja mjeri 10' pri 1/4" = 1'-0" mjerila bi 20' na listu pri 1/8" = 1'-0". Zato TakeoffCraft lijepi dionice i površine samo na list s **istom razmjerom** kao list s kojeg su došle, i to jasno kaže kad nije:

- Otvoreni list još nema razmjeru: prvo mu je dajte ([Postavljanje razmjere](topic:set-the-scale)), pa zalijepite.
- Otvoreni list ima drugu razmjeru: poruka navodi obje razmjere. Zalijepite na list iste razmjere.
- Brojanja ne trebaju razmjeru: kopirana brojanja se lijepe bilo gdje.

## Dupliciraj

{{key:Mod+D}} ({{ui:Dupliciraj}}) kopira odabrane oznake i odmah ih stavlja na pokazivač; kliknite gdje ide. Ništa se ne dodaje dok ne kliknete, a {{key:Esc}} ne ostavlja ništa. Dupliciraj ne mijenja ono što {{ui:Zalijepi}} lijepi.

## Izreži i izbriši

- {{key:Mod+X}} ({{ui:Izreži}}) kopira odabrane oznake i briše ih. Zalijepite ih tamo gdje pripadaju, ili poništite izrezivanje.
- {{key:Delete}} ili {{key:Backspace}} ({{ui:Izbriši}}) briše odabrane oznake bez kopiranja.

## Kopirajte stavku

Uređivač stavke (pod **Stavke**) završava s:

- {{ui:Kopiraj stavku}}: kopira stavku sa sklopom, otpadom i troškovima, bez oznaka. {{ui:Zalijepi}} zatim dodaje njenu kopiju ovom predmjeru, ili drugom.
- {{ui:Dupliciraj stavku}}: odmah dodaje kopiju, nazvanu „(naziv) (kopija)”.

:::tip
Kopija ostaje na ovom računaru: čuva se u ovom tabu i u memoriji pregledača, pa je drugi TakeoffCraft tab može zalijepiti. Ništa se ne šalje na server, a sistemska međumemorija se ne koristi, pa oznake ne možete lijepiti u druge programe.
:::

:::note
Kopija dolazi s jednog lista u jednom trenutku. Oznake se lijepe onakve kakve jesu: rotiranje ili preslikavanje kopije još nije podržano.
:::
