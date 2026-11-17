---
title: Pamäť cien z vašich minulých zákaziek
summary: TakeoffCraft si pamätá sadzby, ktoré ste použili vo výkazoch, len na tomto počítači, takže nový výkaz môže začať od toho, čo ste minule zaplatili. Pozrite si ich, použite ich, zabudnite ich.
keywords: pamäť cien, ceny, pamätať si ceny, posledná zákazka, minulé zákazky, typická cena, medián, sadzby, neocenené, prepočítať, naučiť sa z minulého výkazu, zabudnúť, knižnica
from: 7279f1a1
---

{{ui:Prices}} na paneli nástrojov (symbol dolára) otvára, čo si TakeoffCraft pamätá o cenách, ktoré ste použili. Je to jednoduchý zoznam: pre každý názov položky sadzby z vašich posledných zákaziek. Je uchovaný v tomto prehliadači (v Studio vo vlastnom webovom zobrazení) vedľa cenovej knižnice, nikdy vo výkazovom súbore, a nič sa nikam neposiela. Nie je to natrénovaný model.

## Čo sa zapamätá

Keď uložíte výkaz, každá položka, ktorá má cenu a je použitá (má značku alebo typované množstvo väčšie ako nula), sa zapamätá pod svojím názvom a typom: sadzba materiálu, sadzba práce, odpad a jednotka. Zákazka sú plánové súbory, z ktorých sa výkaz robí, takže opätovné uloženie toho istého výkazu nahradí jeho vlastné ceny namiesto pridania ďalšej zákazky. Pre každý názov sa uchováva posledných 12 zákaziek.

Ak chcete začať so svojou staršou prácou, vyberte {{ui:Learn from a past takeoff…}} a vyberte uložený výkaz (.json). Jeho ocenené a použité položky sa zapamätajú rovnakým spôsobom.

Názvy sa zhodujú, keď sa zhodujú ich slová, bez ohľadu na veľkosť písmen alebo interpunkciu („2x4 Stud, 8 ft“ a „2x4 stud 8 FT“ sú rovnaké). Tie isté slová pre iný druh položky (lineárna položka a položka počtu) nie sú rovnaká cena.

## Použitie vo novom výkaze

1. Vytvorte položky nového výkazu.
2. Vyberte {{ui:Prices}}. Pod {{ui:This takeoff}} vidíte každú položku, ktorá má zapamätanú cenu, čo na nej máte teraz, sadzby z poslednej zákazky, typické sadzby (stred zapamätaných zákaziek) a rozsah.
3. Vyberte {{ui:Use last}} alebo {{ui:Use typical}} pri jednej položke, alebo {{ui:Price N unpriced items from memory}}, aby sa doplnili všetky položky bez ceny z poslednej zákazky.

Každé použitie je jeden krok: {{key:Ctrl+Z}} ho vráti späť. Položka, ktorá má len podobný názov (jeden názov obsiahnutý v druhom), to povie a tlačidlá použijú sadzby podobného názvu. Cena zapamätaná na kus sa nikdy nedá položke na stopu: dialóg povie, že jednotky sa líšia, a nechá ju tak.

## Zobrazenie, zmena, zabudnutie

{{ui:Everything remembered}} vypíše každý názov s jeho sadzbami a počtom zákaziek. Tlačidlo koša zabudne jeden názov; {{ui:Clear all prices}} zabudne všetky. Vypnite {{ui:Remember my prices when I save a takeoff}}, aby sa prestalo pamätať; čo už tam je, ostane, kým to nezabudnete. Vaše výkazy ani cenová knižnica sa nikdy nedotknú.

## S vaším asistentom

Ak v Nastaveniach povolíte asistentov, môžu čítať, čo je zapamätané pre položky výkazu (prices_list), a oceňovať z toho položky (prices_apply, ktorý môže najprv ukázať náhľad). Je to ten istý zoznam ako v dialógu.
