---
title: Broji sve u setu
summary: Obuhvatite jednom legendu simbola i TakeoffCraft prebroji svaki simbol na njoj na svakom otvorenom listu u jednom prolazu. Svako brojanje je veza na njegov list, a pregledate prije nego što se bilo šta doda.
keywords: broji sve, legenda, legenda simbola, cijeli set, svaki list, svi listovi, sva vrata, sve armature, uređaji, specifikacija, simboli, auto brojanje, broji sve, set planova, 200 listova, nivo podudaranja, slični
from: adc99744
---

{{ui:Broji sve}} čita legendu simbola, pa broji svaki simbol iz nje na svakom otvorenom listu. To je {{ui:Auto brojanje}} za cijelu legendu odjednom. Riječ je o običnom poređenju simbola na vašim listovima, a ne o treniranom modelu, i ništa ne napušta vaš računar. Pregledajte brojanja prije nego što ih dodate: to je pomoćni alat, a ne garancija.

## Brojanje legende

1. Otvorite planove. Legenda na bilo kom listu je dovoljna: simboli s njihovim nazivima pored.
2. Odaberite {{ui:Broji sve}} na traci alata.
3. Prevucite okvir oko legende, simbola i naziva. Naslov bez simbola pored sebe (LEGENDA SIMBOLA) se sam izostavlja.
   Panel navodi svaki simbol sa slikom i nazivom otisnutim pored. Naziv postaje naziv stavke, pa ga ovdje preimenujte ako želite.
4. Isključite svaki simbol koji ne želite da se broji. Simbol koji se ne može pretraživati (premali ili prazan) kaže zašto.
5. Odaberite {{ui:Broji na N listova}}. Traka prikazuje list koji se pretražuje; {{ui:Otkaži}} zaustavlja prolaz. Stranica ostaje upotrebljiva.

Simboli same legende se ne broje na njenom listu. List nacrtan u drugoj razmjeri se pretražuje u toj razmjeri, a simboli se nalaze okrenuti u bilo kojem pravom uglu.

## Pregledajte brojanja

- Svaki simbol prikazuje svoj ukupan broj i ispod njega vezu za svaki list koji ga ima („E-103: 4”). Kliknite je da odete na taj list. Nalazi su uokvireni bojom stavke.
- **Kliknite okvir** da isključite taj nalaz. Crta se isprekidano i precrtano; kliknite ponovo da ga vratite.
- **Pomjerite nivo podudaranja** (od 50% do 100%, počevši od nivoa iz vaših Postavki). Viši nivo zadržava samo bliska podudaranja. Klizač samo filtrira ono što je pronađeno; ništa se ponovo ne pretražuje.
- Dva simbola koji izgledaju slično (dupleks i kvadro utičnica) mogu se podudariti s istim mjestom. Bolje podudaranje ga uzima, a panel kaže na koliko je mjesta to bilo, pa možete provjeriti.
- List prevelik da se pretraži pri veličini simbola se preskače, a panel to kaže.

## Dodajte ih

Odaberite {{ui:Dodaj N oznaka}}. Svaki simbol postaje stavka brojanja s oznakom na svakom nalazu. Naziv koji je već vaša stavka brojanja se ponovo koristi (ništa se ne udvostručuje tamo gdje ste već označili ručno). Cijeli prolaz je jedan korak: {{key:Ctrl+Z}} uklanja sve stavke i oznake.

Ono što prihvatite takođe ide u {{ui:Naučeno}}: simboli se pamte u datoteci predmjera za sljedeći put.

## S vašim asistentom

Ako dozvolite asistente u Postavkama, mogu pročitati legendu (legend_open), pokrenuti brojanje u pozadini (legend_count_start, pa legend_count_status), pročitati brojanja (legend_count_result) i dodati ih (legend_count_add, koji prvo može prikazati pregled onoga što bi dodao). To je isti prolaz koji vidite u panelu.

## Simboli pod bilo kojim uglom

Označite {{ui:Simboli pod bilo kojim uglom}} prije brojanja da nađete i simbole nacrtane pod uglom koji nije pravi (koso postavljen zidni utikač, armatura okrenuta da prati krov). Pretraga tada okreće svaki simbol na svakih 15 stepeni; okrugli simbol i dalje treba jednu pretragu, a simbol koji nije okrugao može trajati do šest puta duže. Ostavite isključeno za planove nacrtane pravougaono.

## Dobro je znati

- Potrebni su simboli nacrtani na isti način kao u legendi. Legenda nacrtana u drugoj veličini od listova je u redu kad su razmjere listova postavljene; bez razmjera, simboli se pretražuju u veličini legende.
- Simbol kroz koji prolazi zid ili duga linija može se propustiti, jer više ne liči na sliku iz legende. Provjerite nalaze na prvom listu prije nego što vjerujete ostalima.
- Skeniran dokument bez teksta i dalje radi: simboli se nalaze po njihovim redovima, a nazive upisujete sami.
