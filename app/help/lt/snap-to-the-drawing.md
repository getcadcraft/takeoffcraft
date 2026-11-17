---
title: Prilipimas prie brėžinio linijų
summary: Matuojant arba kalibruojant taškai prisitraukia prie paties PDF brėžinio linijų: galų, vidurio taškų, susikirtimų ar bet kurios linijos vietos, o žymė parodo, kuri.
keywords: prilipimas, snap, osnap, objekto prilipimas, galinis taškas, vidurio taškas, susikirtimas, artimiausias, vektorius, linijos, tikslus, tiksliai, f3, magnetas, kampas
from: 41d29e9b
---

Dauguma planų rinkinių yra vektoriniai PDF: sienos ir kraštai juose yra tikros linijos, o ne taškai. Matuojant TakeoffCraft prilipdina jūsų spustelėjimus prie tų linijų, todėl ruožas prasideda tiksliai sienos kampe, o kalibravimas nuskaito braižytojo nubrėžtą matmenį, o ne pikselį, į kurį pataikėte.

Prilipimas įjungtas, kai pradedate. Įjunkite ir išjunkite jį su {{ui:Prilipti}} būsenos juostoje arba {{key:F3}}; nustatymas išsaugomas šioje naršyklėje (jis taip pat yra [Parametrai](topic:settings)).

## Prie ko prilimpama

Kai žymeklis priartėja maždaug per 10 ekrano pikselių prie linijos, žymė parodo, kur nukris spustelėjimas, ir jos pavadinimą:

| Žymė | Pavadinimas | Kur |
|---|---|---|
| Kvadratas | **Galas** | Linijos galas arba kampas, kuriame linijos susitinka. Abu kreivės galai skaičiuojami; taškai palei ją – ne. |
| Trikampis | **Vidurio taškas** | Tiesios linijos vidurys. |
| Kryžius | **Susikirtimas** | Vieta, kur dvi linijos kertasi arba viena baigiasi ant kitos. |
| Smėlio laikrodis | **Ant linijos** | Artimiausias linijos taškas, kai nė vienas galas, vidurio taškas ar susikirtimas nėra arti. |

Artimiausias galas, vidurio taškas ar susikirtimas laimi. Tik tada, kai nieko arti nėra, taškas patenka ant pačios linijos. Norėdami pasirinkti tarp arti vienas kito esančių taškų, priartinkite vaizdą: 10 pikselių yra ekrano pikseliai, todėl didesniu masteliu jie apima mažesnę lapo dalį.

## Kur tai veikia

Prilipimas veikia {{ui:Linijinis}}, {{ui:Plotas}}, {{ui:Apskritimas}}, {{ui:Išpjova}}, {{ui:Kalibruoti}} ir {{ui:Tikrinti}} įrankiuose bei tada, kai tempiate pažymėtos žymos kampą. Jis taip pat nustato lankų taškus. {{ui:Skaičiuoti}}, {{ui:Automatinis skaičiavimas}} ir įklijavimas neprilimpa.

Prilipęs taškas yra svarbesnis už {{key:Shift}} 45° prilipimą: jei norite braižyti 45° kampu nuo linijų, pirmiausia išjunkite prilipimą klavišu {{key:F3}}.

:::tip
Kalibruokite įjungę prilipimą. Spustelėkite arti dviejų žinomo matmens matmens linijos ar sienos galų: abu taškai tiksliai nukris ant brėžinio, o mastelis išeis tikslus (būsenos juostoje tada nurodomas atitinkamas nustatytas mastelis).
:::

## Lapai, prie kurių negalima prilipti

- **Nuskaityti lapai** yra paveikslėliai be linijų, prie kurių galėtų prilipti. Būsenos juostoje rašoma: „Šiame lape nėra linijų, prie kurių galima prilipti (nuskaitytas puslapis yra paveikslėlis).“, o taškai nukrenta ten, kur spustelėjate.
- **Labai dideli brėžiniai**: prilipimas nuskaito iki 400 000 linijos atkarpų viename lape. Lape su daugiau atkarpų apie tai pranešama ir prilimpama tik prie pirmųjų.
- **Tekstas** prie nelimpa, nebent PDF raides piešia kaip linijas (kai kurie braižytuvai taip daro).

Lapo linijos nuskaitomos pirmą kartą jį atidarius, fone; didelis lapas gali prieš pasirodant žymėms užtrukti sekundę.
