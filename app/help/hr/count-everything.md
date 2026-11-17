---
title: Brojanje svega u skupu nacrta
summary: Označite jednom legendu simbola i TakeoffCraft broji svaki simbol iz nje na svakom otvorenom listu u jednom prolazu. Svako brojanje je poveznica na svoj list, a pregledavate prije dodavanja.
keywords: broji sve, legenda, legenda simbola, cijeli skup, svaki list, svi listovi, svaka vrata, svaka instalacija, uređaji, popis, simboli, autobrojanje, skup nacrta, 200 listova, razina podudaranja, sličan izgled
from: adc99744
---

{{ui:Broji sve}} čita legendu simbola, a zatim broji svaki simbol iz nje na svakom otvorenom listu. To je {{ui:Autobrojanje}} za cijelu legendu odjednom. Riječ je o jednostavnom podudaranju simbola na vašim listovima, a ne o treniranom modelu, i ništa ne napušta vaše računalo. Pregledajte brojanja prije dodavanja: to je pomoćno sredstvo, a ne jamstvo.

## Brojanje legende

1. Otvorite nacrte. Legenda na bilo kojem listu je dovoljna: simboli s nazivima uz njih.
2. Odaberite {{ui:Broji sve}} na alatnoj traci.
3. Povucite okvir oko legende, simbola i naziva. Naslov bez simbola uz sebe (SYMBOL LEGEND) izostavlja se sam od sebe.
   Panel navodi svaki simbol sa slikom i nazivom ispisanim uz njega. Naziv postaje naziv stavke, pa ga ovdje po želji preimenujte.
4. Uklonite oznaku sa svakog simbola koji ne želite brojati. Simbol koji se ne može pretraživati (premalen ili prazan) kaže zašto.
5. Odaberite {{ui:Broji na N listova}}. Traka prikazuje list koji se pretražuje; {{ui:Odustani}} zaustavlja pokretanje. Stranica ostaje upotrebljiva.

Simboli same legende ne broje se na njezinu listu. List nacrtan u drugom mjerilu pretražuje se u tom mjerilu, a simboli se pronalaze zakrenuti pod bilo kojim pravim kutom.

## Pregled brojanja

- Svaki simbol prikazuje svoj ukupan broj, a ispod njega poveznicu za svaki list koji ih ima („E-103: 4“). Kliknite jednu za odlazak na taj list. Pronalasci su uokvireni bojom stavke.
- **Kliknite okvir** da taj pronalazak izostavite. Okvir je isprekidan i precrtan; kliknite ga ponovno da ga vratite.
- **Pomaknite razinu podudaranja** (od 50 % do 100 %, počevši od razine u vašim postavkama). Viša razina zadržava samo bliska podudaranja. Klizač samo filtrira ono što je pronađeno; ništa se ne pretražuje ponovno.
- Dva simbola koja izgledaju slično (dvostruka i četverostruka utičnica) mogu se podudarati na istom mjestu. Bolje podudaranje ga zadržava, a panel kaže na koliko se takvih mjesta to dogodilo, pa ih možete provjeriti.
- List prevelik za pretraživanje pri veličini simbola preskače se, a panel to kaže.

## Dodavanje

Odaberite {{ui:Dodaj N oznaka}}. Svaki simbol postaje stavka za brojanje s oznakom na svakom pronalasku. Naziv koji je već vaša stavka za brojanje se ponovno koristi (ništa se ne udvostručuje tamo gdje ste već ručno označili). Cijeli prolaz je jedan korak: {{key:Ctrl+Z}} vraća sve stavke i oznake.

Ono što prihvatite također ide u {{ui:Naučeno}}: simboli se pamte u datoteci predmjera za sljedeći put.

## S vašim pomoćnikom

Ako u Postavkama dopuštate pomoćnike, mogu čitati legendu (legend_open), pokrenuti brojanje u pozadini (legend_count_start, zatim legend_count_status), pročitati brojanja (legend_count_result) i dodati ih (legend_count_add, koji prvo može prikazati pregled onoga što bi dodao). To je isti prolaz koji vidite u panelu.

## Simboli pod bilo kojim kutom

Označite {{ui:Simboli pod bilo kojim kutom}} prije brojanja da pronađete i simbole nacrtane pod kutom koji nije pravi kut (kosa zidna utičnica, svjetiljka okrenuta da prati krov). Pretraga tada zakreće svaki simbol svakih 15°; okrugli simbol i dalje treba jedno pretraživanje, a simbol koji nije okrugao može trajati do šest puta dulje. Ostavite isključeno za nacrte nacrtane pravokutno.

## Dobro je znati

- Potrebni su simboli nacrtani na isti način kao u legendi. Legenda nacrtana u drugoj veličini od listova je u redu kad su mjerila listova postavljena; bez mjerila simboli se pretražuju u veličini legende.
- Simbol kroz koji prolazi zid ili duga linija može se previdjeti, jer više ne izgleda kao slika u legendi. Provjerite pronalaske na prvom listu prije nego što vjerujete ostalima.
- Sken bez teksta i dalje radi: simboli se pronalaze po redovima u kojima stoje, a nazive upisujete sami.
