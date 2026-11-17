---
title: Uvoz seznama oznak kot količin
summary: Seznam oznak, izvožen iz modela stavbe (CSV), postane tipizirane količine v predizmeri, po ena za vsako oznako, tako da so števila in površine modela poleg tistega, kar ste izmerili.
keywords: oznake, seznam oznak, model stavbe, bimcraft, ifc, količine, csv, seznam, uvoz, tipizirana količina
from: a60c19b6
---

{{ui:Oznake}} na orodni vrstici uvozi seznam oznak, ki ga je BimCraft shranil kot CSV datoteko. Vsaka različna oznaka postane tipizirana količina, iste vrste, kot postaneta izkop in nasip v CivilCraftu.

1. V BimCraftu pripravite želeni seznam oznak in ga shranite kot CSV.
2. Izberite {{ui:Oznake}} in izberite datoteko.
3. Povejte, kateri stolpec poimenuje vrstico ({{ui:Vrstico poimenuj po}}, ponavadi oznaka) in kateri vsebuje število ({{ui:Količina iz}}). Z {{ui:Preštej vrstice}} šteje vsaka vrstica kot ena.
4. Izberite enoto. Dolžina v milimetrih postane metri z {{ui:Pomnoži z}} 0.001.
5. {{ui:Dodaj količine}}.

Vrstice z isto oznako se seštejejo. Celica, ki ni število, se izpusti in šteje v povzetku. Ponovni uvoz istega seznama posodobi količine, ki jih že imate, namesto da bi dodal nove; njihova imena, cene in odpadek ostanejo vaši.

## Dobro je vedeti

Tipizirana količina ni izmerjena na listu, zato nima oznak. Ničesar se ne pošilja nikamor; datoteka se prebere tukaj.
