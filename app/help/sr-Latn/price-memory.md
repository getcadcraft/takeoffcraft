---
title: Memorija cena iz tvojih prethodnih poslova
summary: TakeoffCraft pamti stope koje si koristio u ranijim predmerima, samo na ovom računaru, pa novi predmer može da počne od onoga što si poslednji put platio. Vidi, koristi, zaboravi.
keywords: memorija cena, cene, pamti cene, poslednji posao, prethodni poslovi, uobičajena cena, medijana, stope, bez cene, ponovno cenjenje, nauči iz ranijeg predmera, zaboravi, biblioteka
from: 7279f1a1
---

{{ui:Cene}} na traci sa alatima (znak dolara) otvara ono što TakeoffCraft pamti o cenama koje si koristio. To je običan spisak: za svaki naziv stavke, stope iz tvojih poslednjih poslova. Čuva se u ovom pregledaču (u Studiu, u njegovom sopstvenom web prikazu) uz Biblioteku cena, nikad unutar datoteke predmera, i ništa se nigde ne šalje. To nije naučeni model.

## Šta se pamti

Kada sačuvaš predmer, svaka stavka koja ima cenu i koja se koristi (ima oznaku, ili uneta količina veća od nule) pamti se pod svojim nazivom i tipom: stopa za materijal, stopa za rad, otpad i jedinica. Posao su planovi iz kojih je predmer uzet, pa ponovno čuvanje istog predmera zamenjuje njegove sopstvene cene umesto da doda još jedan posao. Čuvaju se poslednjih 12 poslova za svaki naziv.

Da počneš sa svojim ranijim radom, izaberi {{ui:Nauči iz ranijeg predmera…}} i izaberi sačuvan predmer (.json). Njegove cenjene, korišćene stavke se pamte na isti način.

Nazivi se poklapaju kada se poklapaju reči, bez obzira na velika slova ili interpunkciju („2x4 Stud, 8 ft" i „2x4 stud 8 FT" su isti). Iste reči za drugu vrstu stavke (linearna stavka i stavka brojanja) nisu ista cena.

## Koristi je na novom predmeru

1. Napravi stavke novog predmera.
2. Izaberi {{ui:Cene}}. Pod {{ui:Ovaj predmer}} vidiš svaku stavku koja ima zapamćenu cenu, šta na njoj sada imaš, stope iz poslednjeg posla, uobičajene stope (sredina zapamćenih poslova) i raspon.
3. Izaberi {{ui:Koristi poslednju}} ili {{ui:Koristi uobičajenu}} na jednoj stavci, ili Postavi cene na N nepocenjenih stavki iz memorije da popuniš svaku stavku bez cene iz poslednjeg posla.

Svaka upotreba je jedan korak: {{key:Ctrl+Z}} je poništava. Stavka koja ima samo sličan naziv (jedan naziv je unutar drugog) to kaže, a dugmad koriste stope sličnog naziva. Cena zapamćena po komadu nikad se ne stavlja na stavku po stopi dužine: dijalog kaže da se jedinice razlikuju i ostavlja je netaknutu.

## Vidi je, promeni je, zaboravi je

{{ui:Sve zapamćeno}} navodi svaki naziv sa njegovim stopama i brojem poslova. Dugme sa kantom zaboravlja jedan naziv; {{ui:Obriši sve cene}} zaboravlja sve. Isključi {{ui:Zapamti moje cene kada sačuvam predmer}} da prestane pamćenje; ono što je već tu ostaje dok ga ne zaboraviš. Tvoji predmeri i Biblioteka cena se nikad ne diraju.

## Uz tvog asistenta

Ako dozvoliš asistente u Podešavanjima, mogu da čitaju ono što je zapamćeno za stavke predmera (prices_list) i da cene stavke iz toga (prices_apply, koji može prvo da prikaže pregled). To je isti spisak kao u dijalogu.
