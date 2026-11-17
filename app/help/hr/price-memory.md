---
title: "Memorija cijena iz vaših prošlih poslova"
summary: "TakeoffCraft pamti stope koje ste koristili u prošlim predmjerima, samo na ovom računalu, pa novi predmjer može krenuti od onoga što ste zadnji put platili. Pogledajte ih, koristite ih, zaboravite."
keywords: "memorija cijena, cijene, zapamti cijene, zadnji posao, prošli poslovi, tipična cijena, medijan, stope, bez cijene, ponovno cijenjenje, nauči iz prošlog predmjera, zaboravi, knjižnica"
from: 7279f1a1
---

{{ui:Cijene}} na alatnoj traci (znak dolara) otvara što TakeoffCraft pamti o cijenama koje ste koristili. To je običan popis: za svaki naziv stavke, stope iz vaših zadnjih poslova. Čuva se u ovom pregledniku (u Studiju, u vlastitom web prikazu) uz knjižnicu cijena, nikad unutar datoteke predmjera, i ništa se nigdje ne šalje. Nije to uvježbani model.

## Što se pamti

Kad spremite predmjer, svaka stavka koja ima cijenu i koja se koristi (ima oznaku ili upisanu količinu iznad nule) pamti se pod svojim nazivom i vrstom: stopa za materijal, stopa za rad, gubitak i jedinica. Posao su planovi datoteka iz kojih je predmjer izrađen, pa ponovno spremanje istog predmjera zamjenjuje vlastite cijene umjesto da dodaje još jedan posao. Za svaki naziv čuva se zadnjih 12 poslova.

Da započnete sa svojim starijim radom, odaberite {{ui:Nauči iz prošlog predmjera…}} i odaberite spremljen predmjer (.json). Njegove stavke s cijenom i u upotrebi pamte se na isti način.

Nazivi se podudaraju kad se podudaraju njihove riječi, bez obzira na velika i mala slova ili interpunkciju („2x4 Stud, 8 ft“ i „2x4 stud 8 FT“ su isto). Ista riječ za drugu vrstu stavke (linearna stavka i stavka brojanja) nije ista cijena.

## Koristite je u novom predmjeru

1. Napravite stavke novog predmjera.
2. Odaberite {{ui:Cijene}}. Pod {{ui:Ovaj predmjer}} vidite svaku stavku koja ima zapamćenu cijenu, što je na njoj sada, stope zadnjeg posla, tipične stope (sredina zapamćenih poslova) i raspon.
3. Odaberite {{ui:Koristi zadnje}} ili {{ui:Koristi tipične}} na jednoj stavci, ili {{ui:Upiši cijene za N stavki bez cijene iz memorije}} da ispunite svaku stavku koja još nema cijenu iz zadnjeg posla.

Svako korištenje je jedan korak: {{key:Ctrl+Z}} ga poništava. Stavka koja ima samo sličan naziv (jedan naziv je unutar drugog) to kaže, a gumbi koriste stope sličnog naziva. Cijena zapamćena po komadu nikad se ne stavlja na stavku po stopi (ft): dijaloški okvir kaže da se jedinice razlikuju i ostavlja je.

## Pogledajte je, promijenite, zaboravite

{{ui:Sve zapamćeno}} navodi svaki naziv s njegovim stopama i brojem poslova. Gumb za brisanje zaboravlja jedan naziv; {{ui:Očisti sve cijene}} zaboravlja sve. Isključite {{ui:Zapamti moje cijene kad spremim predmjer}} da prestanete pamtiti; što je već tu, ostaje dok to ne zaboravite. Vaši predmjeri i knjižnica cijena se nikad ne diraju.

## S vašim pomoćnikom

Ako u postavkama dopustite pomoćnike, mogu čitati što je zapamćeno za stavke predmjera (prices_list) i cijeniti stavke iz toga (prices_apply, koji može najprije prikazati pregled). To je isti popis kao u dijaloškom okviru.
