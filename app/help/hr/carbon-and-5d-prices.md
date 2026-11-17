---
title: Ugljični otisak i tablica cijena za 5D
summary: Ugljik zbraja ugrađeni ugljični otisak izvedbe iz količine svake stavke i otvorene tablice faktora te šalje stope izvedbe u BimCraft kao tablicu cijena za 5D troškove.
keywords: ugljik, ugrađeni ugljik, kgCO2e, CO2, faktori, A1-A3, prijevoz, gubitak, 5D, tablica cijena, trošak, BimCraft, EPD
from: f4bff3b8
---

{{ui:Ugljik}} na alatnoj traci zbraja ugrađeni ugljik onoga što ste izmjerili i pretvara vaše stope u tablicu cijena koju model zgrade može koristiti. To je procjena, a ne ocjena.

## Ugrađeni ugljik

Količina svake stavke, s gubitkom, množi se s retkom tablice faktora. Redak se podudara s riječima naziva stavke („betonska ploča“ pronalazi redak s ključnom riječi „beton“). Tablica je ista otvorena tablica koju koristi BimCraft, pa datoteka koju ovdje učitate radi i tamo. **Retci koji dolaze uz program su početne vrijednosti: generički, neprovjereni i nisu iz nikakve baze podataka.** Dijalog to kaže uz brojke; zamijenite ih vlastitim izvorom prije nego se oslonite na broj.

1. Odaberite {{ui:Ugljik}}. Brojane stavke navedene su s kilogramima CO2e; ukupno je iznad.
2. Označite {{ui:A4 prijevoz}} ili {{ui:A5 otpad na gradilištu}} da brojite i te faze, za retke koji za njih daju vrijednost. Faza proizvodnje uvijek se broji.
3. Za drugi redak za stavku, ili nijedan, koristite popis u njezinom retku.
4. {{ui:Faktori iz datoteke…}} učitava tablicu faktora (JSON ili CSV) izrađenu iz vašeg izvora; njezini retci zamjenjuju početne retke s istim id-om. {{ui:Faktori (JSON)}} sprema vaše.

Faktor je po metru, kvadratnom metru, kubnom metru, komadu ili kilogramu. Redak izmjeren u stopama ili kvadratnim stopama pretvara se. Faktor po kilogramu treba volumen (kubni jardi ili metri) i gustoću retka. Stavka čiji faktor treba količinu koju ne mjeri navodi se pod {{ui:Izostavljeno}} s razlogom i nikad se ne pogađa. Tekući zbroj u statusnoj traci pokazuje istu brojku.

Vaši retci faktora, vaši izbori i faze koje brojite spremaju se u datoteku izvedbe.

## Tablica cijena za 5D troškove

{{ui:5D cijene (JSON)}} i {{ui:5D cijene (CSV)}} spremaju stope izvedbe kao tablicu cijena: jedan redak po stavci s cijenom, s njezinom stopom materijala i rada po jedinici te gubitkom. Učitajte je u panel troškova BimCraft-a (Ugljični otisak i 5D troškovi) da određujete cijene zadataka modela zgrade istim stopama koje su stvorile ponudu. Stavke izmjerene u jedinici koju tablica nema i stavke bez stope izostavljaju se.

## S vašim pomoćnikom

Ako dopuštate pomoćnike u Postavkama, mogu čitati ugljik (carbon_check). Učitavanje faktora je vaš posao.

## Dobro je znati

Ništa se nikamo ne šalje. Brojke su dobre koliko i faktori koje učitate.
