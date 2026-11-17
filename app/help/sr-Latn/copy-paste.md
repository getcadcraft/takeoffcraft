---
title: Kopirajte, nalepite i dupliraj oznake
summary: Kopirajte oznake sa njihovim stavkama, nalepite ih gde kliknete ili na istom mestu na drugom listu, dupliraj, isecite, obrišite i izaberite sve, svaki korak se opoziva.
keywords: kopiraj, nalepi, iseci, dupliraj, nalepi na mestu, međuspremnik, izaberi sve, poništi izbor, više oznaka, tipičan sprat, ponovi, isti plan, drugi list, kopiraj stavku, dupliraj stavku
from: e20e9024
---

Grupa {{ui:Uredi}} na traci sadrži {{ui:Opozovi}}, {{ui:Ponovi}}, {{ui:Kopiraj}} i {{ui:Nalepi}}. Njen meni {{ui:Više}} ima ostalo, svaku sa svojim tasterom: {{ui:Iseci}}, {{ui:Kopiraj}}, {{ui:Nalepi}}, {{ui:Nalepi na mestu}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Izaberi sve}} i {{ui:Poništi izbor}}. Svaka od njih je jedan korak za opozivanje sa {{key:Mod+Z}}.

## Izaberite oznake

1. Izaberite {{ui:Izaberi}} ({{key:V}}) i kliknite oznaku.
2. Držite {{key:Shift}} i kliknite još oznaka da ih dodate. {{key:Shift}} + klik na izabranu oznaku je ponovo izbacuje.
3. Ili pritisnite {{key:Mod+A}} ({{ui:Izaberi sve}}) da izaberete sve oznake na otvorenom listu.

Kada je izabrano više oznaka, desni panel prikazuje **Izabrane oznake**: koliko je svake stavke, sa {{ui:Kopiraj}}, {{ui:Dupliraj}}, {{ui:Iseci}} i {{ui:Obriši oznake}}. Ručice za uglove se pokazuju samo kada je izabrana jedna oznaka. {{key:Esc}} ({{ui:Poništi izbor}}) briše izbor.

## Kopirajte i nalepite gde kliknete

1. Izaberite oznake i pritisnite {{key:Mod+C}} ({{ui:Kopiraj}}). Oznake se kopiraju sa svojim stavkama, uključujući sklop svake stavke, otpad i troškove.
2. Idite na list na kome ih želite (može biti i isti list).
3. Pritisnite {{key:Mod+V}} ({{ui:Nalepi}}). Isprekidana kopija prati pokazivač.
4. Kliknite gde treba da ide. Sredina kopiranih oznaka se postavlja na pokazivač.

{{key:Esc}} otkazuje i ne dodaje ništa. Nalepljene oznake se posle toga biraju, pa ih {{key:Delete}} ili {{key:Mod+Z}} ponovo uklanjaju.

U istom predmeru, nalepljene oznake idu na **iste stavke**, pa se njihove količine dodaju tim stavkama. U drugom predmeru (drugi tab ili posle {{ui:Novi}}), koristi se stavka sa istim nazivom i tipom; inače se stavka dodaje sa svojim sklopom. Ako je naziv zauzet stavkom drugog tipa, dodata stavka se zove „(naziv) (kopija)”.

Nalepljene oznake idu u oblast ponude izabranu na vrhu panela {{ui:Stavke}} (ili ni u jednu). Pogledajte [Oblasti ponude](topic:bid-areas).

## Nalepi na mestu

{{key:Mod+Shift+V}} ({{ui:Nalepi na mestu}}) stavlja kopiju na tačno isto mesto na otvorenom listu, prema njenom položaju na stranici. Koristite je za tipičan sprat: uzmite predmer za nivo 2, kopirajte, otvorite nivo 3, nalepite na mestu.

Nalepi na mestu zahteva list **iste veličine** kao onaj sa kog ste kopirali. Na listu druge veličine TakeoffCraft to kaže i ništa ne nalepljuje; umesto toga koristite {{ui:Nalepi}} i kliknite. Na listu sa kog ste kopirali, kopija se nalazi preko originala.

## Razmera mora da se poklapa

Dužine i površine zavise od razmere lista. Potez koji meri 10' pri 1/4" = 1'-0" bi merio 20' na listu pri 1/8" = 1'-0". Zato TakeoffCraft nalepljuje poteze i površine samo na list sa **istom razmerom** kao list sa kog su došli, i jasno kaže kada nije:

- Otvoreni list još nema razmeru: prvo mu je dajte ([Podesite razmeru](topic:set-the-scale)), pa nalepite.
- Otvoreni list ima drugu razmeru: poruka navodi obe razmere. Nalepite na list iste razmere.
- Brojanja ne zahtevaju razmeru: kopirana brojanja se nalepljuju bilo gde.

## Dupliraj

{{key:Mod+D}} ({{ui:Dupliraj}}) kopira izabrane oznake i odmah stavlja kopiju na pokazivač; kliknite gde ide. Ništa se ne dodaje dok ne kliknete, a {{key:Esc}} ne ostavlja ništa. Dupliranje ne menja ono što {{ui:Nalepi}} nalepljuje.

## Iseci i obriši

- {{key:Mod+X}} ({{ui:Iseci}}) kopira izabrane oznake i briše ih. Nalepite ih tamo gde pripadaju, ili opozovite isecanje.
- {{key:Delete}} ili {{key:Backspace}} ({{ui:Izbriši}}) briše izabrane oznake bez kopiranja.

## Kopirajte stavku

Uređivač stavke (pod **Stavke**) se završava sa:

- {{ui:Kopiraj stavku}}: kopira stavku sa njenim sklopom, otpadom i troškovima, bez oznaka. {{ui:Nalepi}} zatim dodaje kopiju u ovaj predmer ili u drugi.
- {{ui:Dupliraj stavku}}: odmah dodaje kopiju, nazvanu „(naziv) (kopija)”.

:::tip
Kopija ostaje na ovom računaru: čuva se u ovom tabu i u memoriji pregledača, pa je drugi TakeoffCraft tab može nalepiti. Ništa se ne otprema, a sistemski međuspremnik se ne koristi, pa oznake ne možete nalepiti u druge programe.
:::

:::note
Kopija dolazi sa jednog lista u jednom trenutku. Oznake se nalepljuju onakve kakve jesu: rotiranje ili preslikavanje kopije još nije moguće.
:::
