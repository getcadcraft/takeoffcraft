---
title: Ugrađeni ugljenik i tabela cena 5D
summary: Ugljenik sabira ugrađeni ugljenik predmera iz količine svake stavke i otvorene tabele faktora, i šalje stope predmera u BimCraft kao tabelu cena za 5D troškove.
keywords: ugljenik, ugrađeni ugljenik, kgco2e, co2, faktori, a1-a3, transport, otpad, 5D, tabela cena, trošak, BimCraft, EPD
from: f4bff3b8
---

{{ui:Ugljenik}} na traci sa alatima sabira ugrađeni ugljenik onoga što ste izmerili i pretvara vaše stope u tabelu cena koju model zgrade može da koristi. To je procena, a ne ocena.

## Ugrađeni ugljenik

Količina svake stavke, sa njenim otpadom, množi se redom iz tabele faktora. Red se poklapa po rečima naziva stavke („betonska ploča“ nalazi red sa ključnom rečju beton). Tabela je ista otvorena tabela koju koristi BimCraft, pa datoteka koju ovde učitate radi i tamo. **Redovi koji dolaze uz program su početne vrednosti: opšti, neproveren i nisu iz nijedne baze podataka.** Dijalog to kaže pored brojki; zamenite ih sopstvenim izvorom pre nego što se oslonite na broj.

1. Izaberite {{ui:Ugljenik}}. Brojane stavke navedene su sa svojim kilogramima CO2e; ukupno je iznad.
2. Označite {{ui:A4 transport}} ili {{ui:A5 otpad na gradilištu}} da brojite i te faze, za redove koji daju brojku za njih. Faza proizvoda se uvek broji.
3. Da koristite drugi red za stavku, ili nijedan, koristite spisak u njenoj liniji.
4. {{ui:Faktori iz datoteke…}} učitava tabelu faktora (JSON ili CSV) napravljenu iz vašeg izvora; njeni redovi zamenjuju početne redove sa istim ID. {{ui:Faktori (JSON)}} čuva vaše.

Faktor je po metru, kvadratnom metru, kubnom metru, stavci ili kilogramu. Linija izmerena u stopama ili kvadratnim stopama se pretvara. Faktor u kilogramima traži zapreminu (kubne jarde ili metre) i gustinu reda. Stavka čiji faktor traži količinu koju ne meri navodi se pod {{ui:Izostavljeno}} sa razlogom, nikad se ne pogađa. Tekući zbir u statusnoj traci pokazuje istu brojku.

Vaši redovi faktora, vaši izbori i faze koje brojite čuvaju se u datoteci predmera.

## Tabela cena za 5D troškove

{{ui:5D cene (JSON)}} i {{ui:5D cene (CSV)}} čuvaju stope predmera kao tabelu cena: jedan red po cenjenoj stavci, sa njenom cenom materijala i rada po jedinici i njenim otpadom. Učitajte je u panel troškova BimCraft-a (Ugrađeni ugljenik i 5D trošak) da određujete zadatke modela zgrade istim stopama koje su napravile ponudu. Stavke izmerene u jedinici koju tabela nema, i stavke bez stope, izostavljaju se.

## Uz vašeg asistenta

Ako u {{ui:Podešavanja}} dozvolite asistente, mogu da čitaju ugljenik (carbon_check). Učitavanje faktora je vaš posao.

## Dobro je znati

Ništa se nigde ne šalje. Brojke su dobre koliko i faktori koje učitate.
