---
title: Memorija cijena iz ranijih poslova
summary: TakeoffCraft pamti stope koje ste koristili u ranijim predmjerima, samo na ovom računaru, pa novi predmjer može početi od onoga što ste ranije platili. Vidite je, koristite je, zaboravite.
keywords: memorija cijena, cijene, pamćenje cijena, posljednji posao, raniji poslovi, tipična cijena, medijana, stope, bez cijene, ponovno određivanje cijena, učenje iz ranijeg predmjera, zaboravi, biblioteka
from: 7279f1a1
---

{{ui:Prices}} na alatnoj traci (znak dolara) otvara ono što TakeoffCraft pamti o cijenama koje ste koristili. To je obična lista: za svaki naziv stavke, stope iz vaših posljednjih poslova. Čuva se u ovom pregledniku (u aplikaciji Studio, u njenom vlastitom web prikazu) uz biblioteku cijena, nikad unutar datoteke predmjera, i ništa se nigdje ne šalje. Nije trenirani model.

## Šta se pamti

Kad sačuvate predmjer, svaka stavka koja ima cijenu i koja se koristi (ima oznaku ili upisanu količinu veću od nule) pamti se pod svojim nazivom i tipom: stopa za materijal, stopa za rad, otpad i jedinica. Posao su planovi iz kojih je predmjer uzet, pa ponovno čuvanje istog predmjera zamjenjuje njegove vlastite cijene, umjesto da doda još jedan posao. Čuva se posljednjih 12 poslova za svaki naziv.

Da počnete sa svojim ranijim radom, izaberite {{ui:Learn from a past takeoff…}} i odaberite sačuvan predmjer (.json). Njegove stavke koje imaju cijenu i koje se koriste pamte se na isti način.

Nazivi se podudaraju kad su im riječi iste, bez obzira na velika slova ili interpunkciju ("2x4 Stud, 8 ft" i "2x4 stud 8 FT" su isti). Iste riječi za drugu vrstu stavke (linearnu stavku i stavku brojanja) nisu ista cijena.

## Koristite je u novom predmjeru

1. Napravite stavke novog predmjera.
2. Izaberite {{ui:Prices}}. Pod {{ui:This takeoff}} vidite svaku stavku koja ima zapamćenu cijenu, šta je sada na njoj, stope posljednjeg posla, tipične stope (sredina zapamćenih poslova) i raspon.
3. Izaberite {{ui:Use last}} ili {{ui:Use typical}} na jednoj stavci, ili Popuni N stavki bez cijene iz memorije da popunite svaku stavku koja još nema cijenu iz posljednjeg posla.

Svako korištenje je jedan korak: {{key:Ctrl+Z}} ga poništava. Stavka koja ima samo sličan naziv (jedan naziv je unutar drugog) to kaže, a dugmad koriste stope sličnog naziva. Cijena zapamćena po komadu nikad se ne stavlja na stavku po stopi (ft): dijalog kaže da se jedinice razlikuju i ostavlja je netaknutom.

## Vidite je, mijenjajte, zaboravite

{{ui:Everything remembered}} navodi svaki naziv sa njegovim stopama i brojem poslova. Dugme za brisanje zaboravlja jedan naziv; {{ui:Clear all prices}} zaboravlja sve. Isključite {{ui:Remember my prices when I save a takeoff}} da prestanete pamtiti; ono što je već tu ostaje dok ga ne zaboravite. Vaši predmjeri i {{ui:Library}} nikad se ne diraju.

## Uz vašeg asistenta

Ako dozvolite asistente u Postavkama, mogu čitati šta je zapamćeno za stavke predmjera (prices_list) i cijeniti stavke iz toga (prices_apply, koji može prvo pregledati). To je ista lista kao u dijalogu.
