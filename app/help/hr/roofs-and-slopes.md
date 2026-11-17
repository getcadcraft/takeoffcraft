---
title: Krovovi i nagibi
summary: Dodijelite području nagib da izmjerite površinu krova iz nacrta, a zabatne rubove, kosnice i uvale mjerite duž njihova nagiba.
keywords: krov, nagib, pad, faktor nagiba, uspon, omjer pomaka, 6:12, zabatni rub, kosnica, uvala, zabat, pokrivanje krova, kvadrati, nagnuta površina, stvarna duljina, površina tlocrta
from: 38225b60
---

Nacrt krova prikazuje svaku ravninu krova ravno, gledano odozgo. Sam krov je veći: ravnina pod 6:12 ima oko 12% više površine od svog tlocrta, a njezini nagnuti rubovi duži su nego što izgledaju. Dodijelite stavci njezin nagib i TakeoffCraft mjeri duž nagiba.

## Upisivanje nagiba

Nagib je uspon na 12 jedinica pomaka, kao na simbolima nagiba na nacrtu krova. Upišite ga kao `6:12`, `6/12` ili samo `6`; radi i drugi omjer (`4:10` je 4.8:12). Kut radi sa znakom stupnja: `26.57°`. Prazno ili `0` znači ravno.

## Površine krova

1. Napravite stavku površine za pokrov ili otvorite postojeću.
2. U njezinim postavkama upišite **Nagib**, na primjer `6:12`.
3. Obrubite svaku ravninu krova na nacrtu alatom {{ui:Površina}}, kao i obično.

Svaka ravnina broji svoju površinu tlocrta puta faktor nagiba: √(1 + (uspon ÷ 12)²), 1.118 za 6:12 i 1.414 za 12:12. Odaberite ravninu da vidite njezinu **Površinu** (na nagibu), **Površinu tlocrta** i **Faktor nagiba**.

Ravnine s drugim nagibom: odaberite ravninu i upišite njezin vlastiti **Nagib** u njezinoj ploči. Ostavite prazno da koristi nagib stavke. Pregled 3D provjere, sklopovi (`A` je nagnuta površina), troškovi i izvoz svi koriste nagnutu površinu. Umanjenja na nagnutoj ravnini, poput krovnih prozora, oduzimaju se pod istim nagibom.

Opseg (`P`) ostaje opseg tlocrta. Strehe, zabatne rubove, kosnice i uvale mjerite kao dionice (u nastavku).

## Zabatni rubovi, kosnice i uvale

1. Napravite linearnu stavku, poput „Zabatni rub“ ili „Kosnice“.
2. Postavite njezinu **Vrstu nagiba** na **Zabatni rub** (nagnuti rub, kao kod zabata) ili na **Kosnica ili uvala** (linija na kojoj se susreću dvije ravnine), i upišite **Nagib** ravnina krova.
3. Nacrtajte dionice na nacrtu alatom {{ui:Linearno}}.

Zabatni rub broji svoju duljinu na tlocrtu puta faktor nagiba. Kosnica ili uvala ide pod kutom od 45° preko tlocrta između dviju ravnina istog nagiba, pa je njezina stvarna duljina duljina na tlocrtu puta √(1 + (uspon ÷ 12)² ÷ 2): 1.061 za 6:12, 1.225 za 12:12.

Jedna dionica može miješati oboje. Odaberite je: svaki segment u svojoj ploči ima popis vrste nagiba — **Postavka stavke**, **Razina**, **Zabatni rub** ili **Kosnica ili uvala** — i njegovu duljinu duž nagiba. **Nagib** same dionice u ploči zamjenjuje nagib stavke za sve njezine segmente. Ploča također prikazuje **Duljinu na tlocrtu**, a oznake na listu prikazuju duljine duž nagiba.

Odbici i dalje rade: odbijeni segment ne broji ništa, nagnut ili ne.

:::note
Kosnice i uvale pretpostavljaju da obje ravnine imaju isti nagib. Za ravnine različitih nagiba izmjerite kosnicu po njezinoj stvarnoj duljini drugdje ili je nacrtajte kao zabatni rub s ekvivalentnim nagibom.
:::
