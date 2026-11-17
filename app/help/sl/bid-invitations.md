---
title: Pošiljanje paketa za ponudbe
summary: Pošljite e-pošto paketa ponudbe podizvajalcem, naj cene vpišejo na strani, ki ne potrebuje računa, cene naj ostanejo zapečatene do časa odprtja in jih potegnite v list primerjave.
keywords: pošlji za ponudbe, povabilo, povabilo k ponudbi, ponudnik, podizvajalec, povabi, e-pošta, zahteva po ceni, zapečatene ponudbe, odprtje ponudb, dan ponudb, zamudna ponudba, rok, opomnik, zapisi podizvajalcev, zavarovanje, kvalifikacija, csv, poveži, listi pdf
from: fb314b2c
---

{{ui:Izvoz}} › {{ui:Ponudbeni paketi in primerjava…}} › {{ui:Pošlji za ponudbe…}} pošlje en paket izbranim ljudem. Spletna stran jim pošlje e-pošto s povezavo; odprejo stran, vidijo obseg in vpišejo ceno za vsako vrstico. Vi vidite cene v listu primerjave, pripravljene za primerjavo ([Paketi ponudb in primerjava ponudb](topic:bid-leveling)).

:::note
Pošiljanje še **ni odprto za vse.** Med preizkusom deluje za račune, ki jih je ekipa CadCraft omogočila; če vaš ni, pogovorno okno to pove. Stran ponudnika deluje za vsako poslano povabilo.
:::

## Pred pošiljanjem

- Potrebujete račun CadCraft s preverjenim e-poštnim naslovom. TakeoffCraft v brskalniku vas prosi, da **Povežete**: odpre se zavihek na getcadcraft.com, pritisnete Poveži in ta zavihek dobi prijavo, ki deluje 30 dni, samo za pakete ponudb, dokler ne zaprete zavihka TakeoffCraft. Kadar koli jo lahko odstranite na varnostni strani. Okno Studio zaenkrat ne more pošiljati.
- Vsaki postavki dodelite številko CSI: paket so postavke enega oddelka CSI ([Ustvarjanje postavk predizmere](topic:create-items)).
- Določite merilo listom, na katerih so oznake paketa, da so količine, ki jih vidijo ponudniki, izmerjene.

## Pošljite paket

1. Pod paketom izberite {{ui:Pošlji za ponudbe…}}.
2. Vpišite naslov, projekt, neobvezno sporočilo in **rok** v vašem časovnem pasu.
3. Pustite **Ohrani cene zapečatene**, da so vse cene skrite do **časa odprtja** (ne prej kot do roka), ali ga odznačite, da cene vidite, ko prihajajo.
4. Pustite potrditveno polje za liste označeno, da pošljete PDF listov, na katerih so oznake paketa, z narisanimi oznakami. Vaše cene se nikoli ne pošljejo: samo imena postavk, številke CSI, količine, enote in imena listov.
5. Vpišite ljudi za povabilo, enega na vrstico, kot `Ime <ime@podjetje.com>` ali samo naslov, ali izberite ljudi iz zapisov podizvajalcev. Največ 60 naenkrat, 100 na paket.
6. Izberite {{ui:Pošlji povabila}}. Vsak prejme eno navadno e-pošto z vašim imenom in e-poštnim naslovom, rokom in povezavo; odgovori gredo vam.

Pogovorno okno pove, koliko jih je bilo poslanih, in navede tiste, ki so bili preskočeni: že povabljeni na ta paket, zahtevali so, naj ne prejemajo povabil k ponudbam, neveljaven naslov ali presežena omejitev pošiljanja.

## Kaj vidi ponudnik

Stran na dolgi zasebni povezavi brez prijave. Pokaže, kdo ga je povabil, rok, ali so cene zapečatene, vaše sporočilo in PDF listov, nato vsako vrstico s količino. Za vsako vrstico vpišejo ceno ali označijo **Ni vključeno** in lahko dodajo opombo; opombe dodajo za celoten paket in do 3 datoteke (ponudba, pismo o obsegu, potrdilo). Lahko shranijo znova in spremenijo cene do časa odprtja, ali **zavrnejo**, z oknom, kjer lahko zahtevajo, da jim CadCraft ne pošilja več povabil k ponudbam.

## Zapečatene ponudbe in odprtje

Pred časom odprtja **nihče** ne vidi cene, opombe ali datoteke: niti vi, niti v TakeoffCraft, niti na vaši strani Paketi ponudb. Vidite, kdo je bil povabljen in ali je odgovoril. Ob času odprtja se vse ponudbe prikažejo hkrati. Ponudba, shranjena po roku, je sprejeta in označena kot **zamudna**; primerjava jo še vedno navede, zamudnost pa je oznaka, ne sodba. Po odprtju ponudnik ne more spremeniti cene. Brez zapečatenja je ponudba dokončna, ko zapade rok.

## Pridobite cene

{{ui:Prevzemi cene}} vpraša spletno stran in doda vsak odgovor paketu kot ponudbo, označeno z **spletna**. TakeoffCraft tiho vpraša tudi vsakič, ko odprete pogovorno okno, medtem ko je povezan. Ponudba, za katero je ponudnik shranil novo različico, se posodobi na mestu; ponudba, ki ste jo uredili, ostane takšna, kot ste jo pustili, dokler ponudnik ne pošlje nove različice. Vsak prenos je en korak, ki ga {{key:Mod+Z}} razveljavi. Izpuščene vrstice pridejo kot obseg, ki ga ponudba izpušča, zato jih primerjava pokrije na vaše stroške.

## Na spletni strani

Vaš račun ima, ko lahko pošiljate, še dve strani. **Paketi ponudb** navaja, kaj ste poslali, kdo je odgovoril, zamudne ponudbe in datoteke; omogoča pošiljanje opomnika (nova povezava; stara preneha delovati), zapiranje, ponovno odpiranje ali preklic paketa. **Podizvajalci** hrani zapis za vsako podjetje: stike, stroke, odgovore o kvalifikaciji (leta poslovanja, zmogljivost jamstva, EMR, varnostni zapis, sindikalno ali odprto podjetje, reference), datume poteka licenc in zavarovanja, označene, ko so potekli ali zapadejo v 30 dneh, ter njihove pretekle ponudbe. Zapise uvažate in izvažate kot CSV: ena vrstica na stik, s stolpci, ki jih prikaže izvoz; podjetje, ki ga že imate, se posodobi in se ne ponovi.

## Kdo vidi kaj in kako dolgo

Cene, opombe in datoteke ponudnika gredo vam in ekipi CadCraft, ki vodi stran. Hranijo se 24 mesecev po roku, datoteke 180 dni; nato se izbrišejo. E-poštni naslov ponudnika je tisti, ki ste ga vpisali; uporablja se samo za pošiljanje povabila in morebitnega opomnika zanj. En naslov prejme največ 3 povabila na dan od vseh skupaj, vi pa lahko pošljete do 200 na dan.

## Še ni narejeno

Dodatki, sporočila o dodelitvi, podpisani list obsega za vsakega ponudnika in samodejni opomniki pred potekom zavarovanja niso narejeni. Glejte [Še ni narejeno](topic:not-built-yet).
