---
title: Čo sa naučilo z vašich výkazov výmer
summary: TakeoffCraft uchováva symboly potvrdené pomocou Automatický počet, vaše sady podmienok, zostavy, ktoré používate najčastejšie, a vzory, ktoré opakujete na každej strane, všetko v súbore samotného výkazu výmer. Pozrite si ich, použite ich, zmažte ich.
keywords: učiť sa, naučené, učenie, asistent, zapamätať, symboly, šablóny, rovnako ako minulá zákazka, minulá zákazka, sada podmienok, podmienky, znovupoužitie, zostavy, najpoužívanejšie, návrhy, opakovať na každej strane, každá strana, popisové pole, vzor, vymazať všetko, zabudnúť, súkromie
from: 54d99e99
---

TakeoffCraft pracuje rýchlejšie, čím viac výkazov s ním urobíte. Učí sa **iba z toho, čo prijmete**:

- symboly, ktoré ste označili pomocou [Automatický počet](topic:auto-count) a potom pridali,
- sady podmienok, ktoré uložíte,
- zostavy, ktoré používate (raz na zákazku),
- vzory značiek, ktoré opakujete na každej strane.

Ide o jednoduché porovnávanie na vašich vlastných listoch, to isté vyhľadávanie, aké spúšťa Automatický počet. Nie je to natrénovaný model. Všetko, čo sa naučí, sa uchováva **v súbore tohto výkazu výmer** (`.takeoff.json`) a nikam sa to neposiela. Ak chcete preniesť na ďalšiu zákazku, použite [Rovnako ako minulá zákazka](topic:what-it-learned#same-as-last-job).

Vyberte {{ui:Naučené}} na paneli nástrojov (žiarovka vedľa {{ui:Automatický počet}}) a zobrazíte všetko.

## Symboly

Keď označíte symbol pomocou {{ui:Automatický počet}} a zvolíte {{ui:Pridať}}, označený symbol sa uchová spolu s úrovňou zhody, ktorú ste prijali.

- V {{ui:Naučené}} zvoľte {{ui:Nájsť na tomto liste}} alebo {{ui:Nájsť na každom liste}}. Otvorí sa obvyklé preskúmanie Automatického počtu: kliknutím na rámček ho vynecháte, posuňte posuvník a potom ich pridajte. Nič sa nepridá, kým to neurobíte.
- Keď otvoríte list, na ktorom ešte nie je žiadny z naučených symbolov, pruh hore ponúkne {{ui:Nájsť …}} pre neho. {{ui:Teraz nie}} ho skryje pre tento list.
- Ak výkaz výmer nemá položku s takým názvom, pridanie značiek pridá aj položku (jeden krok späť).
- Opätovné pridanie symbolu tej istej položky sa započíta k symbolu, ktorý už pozná; symbol s iným vzhľadom sa uchová ako druhý.
- Rovnako ako Automatický počet nájde symbol aj v pravých uhloch a na listoch s inou mierkou.

## Sady podmienok

Sada uchováva podmienky výkazu výmer (položky s ich jednotkami, sadzbami, odpadom a zostavami), bez značiek.

1. V {{ui:Naučené}} zvoľte {{ui:Uložiť podmienky tohto výkazu výmer ako sadu…}} a zadajte jej názov. Sada s rovnakým názvom sa nahradí.
2. Vo výkaze výmer, ktorý má sadu, {{ui:Pridať}} doplní podmienky, ktoré ešte nemá. Podmienky s rovnakým názvom a typom sa nechajú tak. Je to jeden krok späť.

## Rovnako ako minulá zákazka

Súbor minulej zákazky obsahuje, čo sa naučil. Ak chcete novú zákazku začať z neho:

1. Otvorte nové plány a zvoľte {{ui:Naučené}} › {{ui:Rovnako ako minulá zákazka…}}.
2. Vyberte `.takeoff.json` minulej zákazky.
3. Zaškrtnite, čo sa má preniesť: jej podmienky (iba tie, ktoré tento výkaz výmer nemá) a to, čo sa naučila (symboly, sady, zostavy, vzory). Potom {{ui:Prevziať}}.

Jej podmienky sa tiež uchovajú ako sada pomenovaná podľa tej zákazky. Jej značky a množstvá zostávajú v jej vlastnom súbore. Celé to je jeden krok späť.

## Zostavy, ktoré používate najčastejšie

Položka so zostavou sa počíta ako použitá raz na zákazku, keď má množstvo a uložíte výkaz výmer. Zákazka je súbor plánov, z ktorých sa výkaz robí, takže opätovné uloženie toho istého výkazu sa nepočíta dvakrát. Zoznam pod {{ui:Zostavy, ktoré používate najčastejšie}} dáva na začiatok tie, ktoré používate najviac. Vynechá tie, ktoré tento výkaz výmer už má. {{ui:Pridať}} vloží jednu tak, ako ste ju naposledy použili, so všetkými jej časťami.

## Zopakovať na každej strane

Pre značky, ktoré sú rovnaké na každej strane sady, ako počet popisového poľa alebo typický detail:

1. Vyberte značky na jednom liste ([Výber značiek](topic:copy-paste#select-the-marks)).
2. V {{ui:Naučené}} zvoľte {{ui:Zopakovať vybrané značky na každej strane…}}, pomenujte vzor a potvrďte.

Idú na každú ďalšiu otvorenú stranu **rovnakej veľkosti**, na rovnaké miesto, v jednom kroku späť. Dĺžky a plochy sa dajú iba na strany s rovnakou mierkou; počty na ľubovoľnú stranu danej veľkosti. Strana, ktorá ich už má, sa preskočí. Vzor sa uchová, takže strany, ktoré otvoríte neskôr, dostanú ponuku v pruhu, alebo môžete použiť {{ui:Zopakovať na každej strane}} v zozname.

## Vidieť, zmazať

Všetko, čo sa naučilo, je vypísané v {{ui:Naučené}}. Kôš zmaže jednu vec. {{ui:Vymazať všetko}} zmaže všetko naučené a vaše položky a značky nechá na pokoji. Obe možnosti sa dajú vrátiť späť, kým nezavriete výkaz výmer, a obe sa uložia spolu s výkazom.

Aby sa v jednom výkaze výmer prestalo učiť, zrušte označenie {{ui:Učiť sa z tohto výkazu výmer}}. Nič nové sa nenaučí a to, čo je vypísané, zostane, kým to nezmažete.

## Dobré vedieť

- Staršie verzie TakeoffCraft otvoria súbor s naučenými vecami bežne. Túto časť ignorujú a zahodia ju, ak súbor znova uložia.
- Naučený symbol je malý obrázok toho, čo ste označili, uchovaný v súbore (niekoľko kilobajtov každý).
- Naučené symboly sa hľadajú rovnako ako Automatický počet, takže platia tie isté obmedzenia: [Automatický počet symbolu](topic:auto-count).
