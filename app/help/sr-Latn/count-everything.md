---
title: Prebrojte sve u setu
summary: Obuhvatite legendu simbola jednom, a TakeoffCraft prebroji svaki simbol iz nje na svakom otvorenom listu u jednom prolazu. Svako brojanje je veza do svog lista, a pregledate ga pre dodavanja.
keywords: prebroji sve, legenda, legenda simbola, ceo set, svaki list, svi listovi, sva vrata, svaka armatura, uređaji, specifikacija, simboli, automatsko brojanje, set planova, 200 listova, nivo poklapanja, slični
from: adc99744
---

{{ui:Prebroj sve}} čita legendu simbola, a zatim broji svaki simbol iz nje na svakom otvorenom listu. To je {{ui:Automatsko brojanje}} za celu legendu odjednom. To je poklapanje simbola na vašim sopstvenim listovima, a ne obučeni model, i ništa ne napušta vaš računar. Pregledajte brojanja pre dodavanja: ono je pomoćno sredstvo, a ne garancija.

## Brojanje legende

1. Otvorite planove. Legenda na bilo kom listu je dovoljna: simboli sa nazivima pored njih.
2. Izaberite {{ui:Prebroj sve}} na traci alata.
3. Prevucite okvir oko legende, simbola i naziva. Naslov bez simbola pored njega (SYMBOL LEGEND) se izostavlja sam.
   Panel navodi svaki simbol sa njegovom slikom i nazivom otisnutim pored. Naziv postaje naziv stavke, pa ga preimenujte ovde ako želite.
4. Odštiklirajte svaki simbol koji ne želite da se broji. Simbol koji se ne može pretraživati (premali ili prazan) kaže zašto.
5. Izaberite {{ui:Prebroj na N listova}}. Traka prikazuje list koji se pretražuje; {{ui:Otkaži}} zaustavlja prolaz. Stranica ostaje upotrebljiva.

Sopstveni simboli legende se ne broje na njenom listu. List nacrtan u drugoj razmeri se pretražuje u toj razmeri, a simboli se pronalaze okrenuti pod bilo kojim pravim uglom.

## Pregled brojanja

- Svaki simbol prikazuje svoj ukupan broj, a ispod njega vezu za svaki list koji ima bilo koji („E-103: 4”). Kliknite je da idete na taj list. Pronalasci su uokvireni bojom stavke.
- **Kliknite okvir** da isključite taj pronalazak. Biće isprekidan i precrtan; kliknite ponovo da ga vratite.
- **Pomerite nivo poklapanja** (50% do 100%, počevši od vašeg nivoa u Podešavanjima). Viši zadržava samo bliska poklapanja. Klizač samo filtrira ono što je nađeno; ništa se ne pretražuje ponovo.
- Dva simbola koja izgledaju slično (dupleks i kvadrupleks utičnica) mogu se poklopiti na istom mestu. Bolje poklapanje ga zadržava, a panel kaže na koliko je takvih mesta, da ih proverite.
- List prevelik za pretragu pri veličini simbola se preskače, a panel to kaže.

## Dodajte ih

Izaberite {{ui:Dodaj N oznaka}}. Svaki simbol postaje stavka brojanja sa oznakom na svakom pronalasku. Naziv koji je već vaša stavka brojanja se ponovo koristi (ništa se ne udvostručuje gde ste već označili ručno). Ceo prolaz je jedan korak: {{key:Ctrl+Z}} vraća svaku stavku i oznaku.

Ono što prihvatite takođe ide u {{ui:Naučeno}}: simboli se pamte u datoteci predmera za sledeći put.

## Sa vašim asistentom

Ako dozvolite asistente u Podešavanjima, mogu da pročitaju legendu (legend_open), pokrenu brojanje u pozadini (legend_count_start, zatim legend_count_status), pročitaju brojanja (legend_count_result) i dodaju ih (legend_count_add, koji prvo može da prikaže pregled onoga što bi dodao). To je isti prolaz koji vidite u panelu.

## Simboli pod bilo kojim uglom

Štiklirajte {{ui:Simboli pod bilo kojim uglom}} pre brojanja da pronađete i simbole nacrtane pod uglom koji nije prav (dijagonalni tipl, armatura okrenuta da prati krov). Pretraga tada okreće svaki simbol na svakih 15 stepeni; okrugao simbol i dalje traži jedan prolaz, a simbol koji nije okrugao može trajati do šest puta duže. Ostavite isključeno za planove nacrtane pod pravim uglovima.

## Dobro je znati

- Potrebno je da simboli budu nacrtani na isti način kao u legendi. Legenda nacrtana u veličini drugačijoj od listova je u redu kada su razmere listova podešene; bez razmera, simboli se pretražuju u veličini legende.
- Simbol sa zidom ili dugom linijom provučenom kroz njega može se propustiti, jer više ne liči na sliku iz legende. Proverite pronalaske na prvom listu pre nego što verujete ostalima.
- Sken bez teksta i dalje radi: simboli se nalaze po svojim redovima, a nazive unosite ručno.
