---
title: Kopiranje, lijepljenje i dupliciranje oznaka
summary: Kopirajte oznake sa stavkama, zalijepite ih tamo gdje kliknete ili na isto mjesto na drugom listu, dupliciraj ih, izrežite, izbrišite i odaberite sve, svaki korak se može poništiti.
keywords: kopiraj, zalijepi, izreži, dupliciraj, zalijepi na isto mjesto, međuspremnik, odaberi sve, poništi odabir, više oznaka, tipična etaža, ponavljanje, isti nacrt, drugi list, kopiraj stavku, dupliciraj stavku
from: e20e9024
---

Grupa {{ui:Uređivanje}} na alatnoj traci sadrži {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}} i {{ui:Zalijepi}}. Njezin izbornik {{ui:Više}} ima ostalo, svaki sa svojom tipkom: {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na isto mjesto}}, {{ui:Dupliciraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}} i {{ui:Poništi odabir}}. Svaka od njih je jedan korak za poništavanje s {{key:Mod+Z}}.

## Odabir oznaka

1. Odaberite {{ui:Odaberi}} ({{key:V}}) i kliknite oznaku.
2. Držite {{key:Shift}} i kliknite još oznaka da ih dodate. {{key:Shift}} + klik na odabranu oznaku uklanja je iz odabira.
3. Ili pritisnite {{key:Mod+A}} ({{ui:Odaberi sve}}) za odabir svih oznaka na otvorenom listu.

Kad je odabrano više oznaka, desni panel prikazuje **Odabrane oznake**: koliko je čega po stavki, s {{ui:Kopiraj}}, {{ui:Dupliciraj}}, {{ui:Izreži}} i {{ui:Izbriši oznake}}. Ručke na kutovima pokazuju se samo kad je odabrana jedna oznaka. {{key:Esc}} ({{ui:Poništi odabir}}) briše odabir.

## Kopiranje i lijepljenje na mjestu klika

1. Odaberite oznake i pritisnite {{key:Mod+C}} ({{ui:Kopiraj}}). Oznake se kopiraju sa svojim stavkama, uključujući sklop, gubitak i troškove svake stavke.
2. Idite na list na koji ih želite (može biti i isti list).
3. Pritisnite {{key:Mod+V}} ({{ui:Zalijepi}}). Isprekidana kopija prati pokazivač.
4. Kliknite gdje treba ići. Središte kopiranih oznaka dolazi na pokazivač.

{{key:Esc}} odustaje i ne dodaje ništa. Zalijepljene oznake se nakon toga odabiru, pa ih {{key:Delete}} ili {{key:Mod+Z}} ponovno uklanjaju.

U istom predmjeru zalijepljene oznake idu na **iste stavke**, pa se njihove količine zbrajaju s tim stavkama. U drugom predmjeru (druga kartica ili nakon {{ui:Novo}}) koristi se stavka istog naziva i tipa; inače se stavka dodaje sa svojim sklopom. Ako je naziv zauzet stavkom druge vrste, dodana stavka zove se „(naziv) (kopija)“.

Zalijepljene oznake idu u područje ponude odabrano na vrhu panela {{ui:Stavke}} (ili ni u jedno). Pogledajte [Područja ponude](topic:bid-areas).

## Lijepljenje na isto mjesto

{{key:Mod+Shift+V}} ({{ui:Zalijepi na isto mjesto}}) stavlja kopiju na potpuno isto mjesto na otvorenom listu, prema njezinu položaju na stranici. Koristite to za tipičnu etažu: predmjerite 2. etažu, kopirajte, otvorite 3. etažu, zalijepite na isto mjesto.

Lijepljenje na isto mjesto zahtijeva list **iste veličine** kao onaj s kojeg ste kopirali. Na listu druge veličine TakeoffCraft to kaže i ništa ne zalijepi; umjesto toga koristite {{ui:Zalijepi}} i kliknite. Na listu s kojeg ste kopirali, kopija se postavlja preko izvornika.

## Mjerilo mora odgovarati

Duljine i površine ovise o mjerilu lista. Dionica koja mjeri 10' pri 1/4" = 1'-0" na listu pri 1/8" = 1'-0" mjerila bi 20'. Zato TakeoffCraft lijepi dionice i površine samo na list s **istim mjerilom** kao list s kojeg dolaze i jasno kaže kad to nije slučaj:

- Otvoreni list još nema mjerilo: prvo mu ga dodijelite ([Postavljanje mjerila](topic:set-the-scale)), pa zalijepite.
- Otvoreni list ima drugo mjerilo: poruka navodi oba mjerila. Lijepite na list istoga mjerila.
- Brojanje ne treba mjerilo: kopirane brojane oznake lijepe se bilo gdje.

## Dupliciranje

{{key:Mod+D}} ({{ui:Dupliciraj}}) kopira odabrane oznake i odmah stavlja kopiju na pokazivač; kliknite gdje treba ići. Ništa se ne dodaje dok ne kliknete, a {{key:Esc}} ne ostavlja ništa. Dupliciranje ne mijenja što {{ui:Zalijepi}} lijepi.

## Izrezivanje i brisanje

- {{key:Mod+X}} ({{ui:Izreži}}) kopira odabrane oznake i briše ih. Zalijepite ih tamo gdje pripadaju ili poništite izrezivanje.
- {{key:Delete}} ili {{key:Backspace}} ({{ui:Izbriši}}) briše odabrane oznake bez kopiranja.

## Kopiranje stavke

Uređivač stavke (pod **Stavke**) završava s:

- {{ui:Kopiraj stavku}}: kopira stavku sa sklopom, gubitkom i troškovima, bez oznaka. {{ui:Zalijepi}} zatim dodaje njezinu kopiju u ovaj predmjer ili u drugi.
- {{ui:Dupliciraj stavku}}: odmah dodaje kopiju, nazvanu „(naziv) (kopija)“.

:::tip
Kopija ostaje na ovom računalu: čuva se u ovoj kartici i u pohrani preglednika, pa je druga kartica TakeoffCrafta može zalijepiti. Ništa se ne učitava, a sistemski međuspremnik se ne koristi, pa oznake ne možete lijepiti u druge programe.
:::

:::note
Kopija dolazi s jednog lista u isto vrijeme. Oznake se lijepe kakve jesu: kopiju još nije moguće zakretati ni zrcaliti.
:::
