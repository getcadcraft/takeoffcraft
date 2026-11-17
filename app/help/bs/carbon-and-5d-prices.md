---
title: Ugrađeni ugljik i tabela cijena 5D
summary: Ugljik zbraja ugrađeni ugljik predmjera iz količine svake stavke i otvorene tabele faktora, a stope predmjera šalje u BimCraft kao tabelu cijena za 5D troškove.
keywords: ugljik, ugrađeni ugljik, kgco2e, co2, faktori, a1-a3, transport, otpad, 5d, tabela cijena, trošak, bimcraft, epd
from: f4bff3b8
---

{{ui:Ugljik}} na traci s alatima zbraja ugrađeni ugljik onoga što ste izmjerili i pretvara vaše stope u tabelu cijena koju model zgrade može koristiti. To je procjena, a ne ocjena.

## Ugrađeni ugljik

Količina svake stavke, sa njenim otpadom, množi se redom iz tabele faktora. Red se pronalazi po riječima iz naziva stavke ("betonska ploča" pronalazi red s ključnom riječju beton). Tabela je ista otvorena tabela koju koristi BimCraft, pa datoteka koju ovdje učitate radi i tamo. **Redovi koji dolaze uz program su početne vrijednosti: generičke, neprovjerene i ne potiču ni iz jedne baze.** Dijalog to kaže uz brojke; zamijenite ih vlastitim izvorom prije nego što se oslonite na broj.

1. Izaberite {{ui:Ugljik}}. Prebrojane stavke navode se s njihovim vrijednostima u kilograms CO2e; ukupno je iznad.
2. Označite {{ui:A4 transport}} ili {{ui:A5 otpad na gradilištu}} da brojite i te faze, za redove koji daju vrijednost za njih. Faza proizvoda se uvijek broji.
3. Da za stavku koristite drugi red, ili nijedan, koristite spisak u njenom redu.
4. {{ui:Faktori iz datoteke…}} učitava tabelu faktora (JSON ili CSV) napravljenu iz vašeg izvora; njeni redovi zamjenjuju početne redove s istim ID-em. {{ui:Faktori (JSON)}} čuva vaše.

Faktor je po meters, square meters, cubic meters, stavci ili kilogramu. Linija izmjerena u feet ili square feet se pretvara. Faktor u kilogramima treba zapreminu (cubic yards ili meters) i gustinu reda. Stavka čiji faktor treba količinu koju ne mjeri navodi se pod {{ui:Izostavljeno}} s razlogom, nikad se ne pogađa. Tekući zbir u statusnoj traci prikazuje istu brojku.

Vaši redovi faktora, vaši izbori i faze koje brojite čuvaju se u datoteci predmjera.

## Tabela cijena za 5D troškove

{{ui:Cijene 5D (JSON)}} i {{ui:Cijene 5D (CSV)}} čuvaju stope predmjera kao tabelu cijena: jedan red po stavci s cijenom, s njenom stopom materijala i rada po jedinici i njenim otpadom. Učitajte je u panel troškova BimCraft-a (Ugrađeni ugljik i 5D trošak) da cijenite zadatke modela zgrade istim stopama koje su napravile ponudu. Stavke izmjerene u jedinici koju tabela nema, i stavke bez stope, izostavljaju se.

## Sa vašim asistentom

Ako u Postavkama dozvolite asistente, mogu čitati ugljik (carbon_check). Učitavanje faktora radite vi.

## Dobro je znati

Ništa se nigdje ne šalje. Brojke su samo onoliko dobre koliko su faktori koje učitate.
