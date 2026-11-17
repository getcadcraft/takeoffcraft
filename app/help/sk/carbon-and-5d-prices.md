---
title: Vtelený uhlík a cenová tabuľka 5D
summary: Uhlík spočíta vtelený uhlík merania z množstva každej položky a otvorenej tabuľky faktorov a pošle sadzby merania do BimCraft ako cenovú tabuľku pre náklady 5D.
keywords: uhlík, vtelený uhlík, kgco2e, co2, faktory, a1-a3, doprava, odpad, 5d, cenová tabuľka, náklady, bimcraft, epd
from: f4bff3b8
---

{{ui:Uhlík}} na paneli nástrojov spočíta vtelený uhlík toho, čo ste odmerali, a premení vaše sadzby na cenovú tabuľku, ktorú model budovy môže použiť. Je to odhad, nie posúdenie.

## Vtelený uhlík

Množstvo každej položky, s jej odpadom, sa vynásobí riadkom tabuľky faktorov. Riadok sa páruje podľa slov názvu položky ("betónová doska" nájde riadok s kľúčovým slovom betón). Tabuľka je rovnaká otvorená tabuľka, akú používa BimCraft, takže súbor, ktorý tu načítate, funguje aj tam. **Riadky, ktoré prichádzajú s programom, sú štartovacie hodnoty: všeobecné, neoverené a nepochádzajú z nijakej databázy.** Dialóg to uvádza pri číslach; pred tým, ako sa na číslo spoliehate, ho nahraďte vlastným zdrojom.

1. Vyberte {{ui:Uhlík}}. Počítané položky sú uvedené s kilogramami CO2e; celkový súčet je hore.
2. Zaškrtnite {{ui:A4 doprava}} alebo {{ui:A5 odpad na stavbe}}, aby sa počítali aj tieto fázy, pre riadky, ktoré pre ne uvádzajú hodnotu. Fáza výroby sa počíta vždy.
3. Ak chcete pre položku iný riadok alebo žiadny, použite zoznam na jej riadku.
4. {{ui:Faktory zo súboru…}} načíta tabuľku faktorov (JSON alebo CSV) vytvorenú z vášho vlastného zdroja; jej riadky nahradia štartovacie riadky s rovnakým id. {{ui:Faktory (JSON)}} uloží vaše.

Faktor je na meter, štvorcový meter, kubický meter, kus alebo kilogram. Riadok meraný v stopách alebo štvorcových stopách sa prepočíta. Faktor v kilogramoch potrebuje objem (kubické yardy alebo metre) a hustotu z riadku. Položka, ktorej faktor potrebuje množstvo, ktoré nemeria, je uvedená pod {{ui:Vynechané}} s dôvodom a nikdy sa neodhaduje. Priebežný súčet v stavovom riadku zobrazuje to isté číslo.

Vaše riadky faktorov, vaše výbery a fázy, ktoré počítate, sa uložia do súboru merania.

## Cenová tabuľka pre náklady 5D

{{ui:Ceny 5D (JSON)}} a {{ui:Ceny 5D (CSV)}} uložia sadzby merania ako cenovú tabuľku: jeden riadok na ocenenú položku s jej sadzbou materiálu a práce na jednotku a jej odpadom. Načítajte ju do panela nákladov v BimCraft (Vtelený uhlík a náklady 5D), aby ste úlohy modelu budovy oceňovali rovnakými sadzbami, ktoré vytvorili ponuku. Položky merané v jednotke, ktorú tabuľka nemá, a položky bez sadzby sa vynechajú.

## S vaším asistentom

Ak v Nastaveniach povolíte asistentov, môžu čítať uhlík (carbon_check). Načítanie faktorov robíte vy.

## Dobré vedieť

Nič sa nikam neposiela. Čísla sú len také dobré, ako faktory, ktoré načítate.
