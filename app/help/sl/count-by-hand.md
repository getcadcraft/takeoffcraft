---
title: Ročno štetje
summary: Kliknite vsaka vrata, armaturo ali napravo, da jo preštejete, preverite štetja in popravite napake.
keywords: štetje, vsak, ea, armature, vrata, naprave, simboli, štetje s klikom, ročno štetje
from: 594f2980
---

Postavka štetja šteje stvari: vrata, svetilke, vtičnice, vodovodne armature. Vsak klik na list doda eno oznako štetja. Štetje ne potrebuje merila.

## Štetje

1. Ustvarite ali kliknite postavko štetja pod {{ui:Items}} (vrsta {{ui:Count}}).
2. Izberite {{ui:Count}} na orodni vrstici ali pritisnite {{key:C}}.
3. Kliknite vsakega na listu.
   Vsak klik postavi piko v barvi postavke, število postavke pa se poveča za ena.
4. Pojdite na naslednji list ({{key:PageDown}}) in nadaljujte s štetjem. Orodje ostane na {{ui:Count}}.
5. Ko končate, pritisnite {{key:Esc}}. TakeoffCraft se vrne na {{ui:Select}}.

Vlečenje med štetjem še vedno pomika in kolešček še vedno povečuje, tako da se lahko premikate po listu, ne da bi dodajali pike.

:::tip
Kliknite postavko štetja, da označite njene pike na vsakem listu. Seznam listov nato pokaže, koliko jih je na vsakem listu, kar pomaga najti liste, ki jih še niste preštevali.
:::

## Popravljanje štetja

- **Odstranite piko**: izberite {{ui:Select}} ({{key:V}}), kliknite piko in pritisnite {{key:Delete}} ali izberite {{ui:Delete mark}}. Ali pritisnite {{key:Mod+Z}} takoj po napačnem kliku.
- **Premaknite piko**: izberite jo in nato jo povlecite.
- **Prešteto pod napačno postavko**: izberite piko in v seznamu **Postavka** pod **Izbrana oznaka** izberite pravilno postavko štetja.

## Velikost pike na zaslonu in v PDF-ju

Pike ohranijo eno velikost na zaslonu, ne glede na to, kako močno povečate. Za spremembo odprite {{ui:Settings}}, zavihek TakeoffCraft, in izberite **Velikost oznake štetja**: Zelo majhna, Majhna, Srednja (privzeto) ali Velika.

Izvoz PDF ({{ui:Export}} › označeni PDF) nariše vsako piko v isti velikosti na papirju, ne glede na velikost lista: pregledovalnik, ki prikaže PDF pri 100 %, prikaže pike tako velike, kot so na zaslonu. Kjer se pike na listu še vedno dotikajo, izvoz zmanjša pike tega lista, da se lahko vsaka prebere.

## Veliko enakih simbolov

Za simbol, ki se na listu ponovi mnogokrat, poskusite [Samodejno štetje](topic:auto-count): označite enega, preglejte, kaj najde, in jih dodajte vse naenkrat.

## Uporaba štetij v formulah

Količina postavke štetja je **N**. Komponente sestava jo lahko uporabijo, na primer tečaji `N * 3` za vrata. Glejte [Sestavi in formule](topic:assemblies).
