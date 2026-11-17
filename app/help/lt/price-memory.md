---
title: Kainų atmintis iš ankstesnių darbų
summary: TakeoffCraft prisimena įkainius, kuriuos naudojote ankstesniuose kiekių skaičiavimuose, tik šiame kompiuteryje, kad naujas kiekių skaičiavimas galėtų prasidėti nuo to, ką mokėjote paskutinį kartą. Žiūrėkite, naudokite, pamirškite.
keywords: kainų atmintis, kainos, prisiminti kainas, paskutinis darbas, ankstesni darbai, tipinė kaina, mediana, įkainiai, neįkainota, perkainoti, mokytis iš ankstesnio kiekių skaičiavimo, pamiršti, biblioteka
from: 7279f1a1
---

{{ui:Kainos}} įrankių juostoje (dolerio ženklas) atveria tai, ką TakeoffCraft prisimena apie jūsų naudotas kainas. Tai paprastas sąrašas: kiekvienam pozicijos pavadinimui – įkainiai iš paskutinių darbų. Jis laikomas šioje naršyklėje (Studio programoje – jos atskirame žiniatinklio rodinyje) kartu su kainų biblioteka, niekada kiekių skaičiavimo faile, ir niekur nesiunčiamas. Tai nėra mokomas modelis.

## Ką prisimenama

Kai įrašote kiekių skaičiavimą, kiekviena pozicija, kuri turi kainą ir yra naudojama (turi žymą arba įvestą kiekį virš nulio), prisimenama pagal savo pavadinimą ir tipą: medžiagos įkainis, darbo įkainis, atliekos ir vienetas. Darbas – tai planų failai, pagal kuriuos jis atliekamas, todėl vėl įrašius tą patį kiekių skaičiavimą, jo kainos pakeičiamos, o ne pridedamas dar vienas darbas. Kiekvienam pavadinimui išsaugomi paskutiniai 12 darbų.

Norėdami pradėti nuo savo senesnių darbų, pasirinkite {{ui:Mokytis iš ankstesnio kiekių skaičiavimo…}} ir pasirinkite įrašytą kiekių skaičiavimą (.json). Jo pozicijos, turinčios kainas ir naudojamos, prisimenamos tuo pačiu būdu.

Pavadinimai sutampa, kai sutampa jų žodžiai, nepriklausomai nuo didžiųjų raidžių ar skyrybos ("2x4 Stud, 8 ft" ir "2x4 stud 8 FT" yra tas pats). Tie patys žodžiai kitam pozicijos tipui (linijinei ir skaičiaus pozicijai) nėra ta pati kaina.

## Naudoti naujame kiekių skaičiavime

1. Sukurkite naujo kiekių skaičiavimo pozicijas.
2. Pasirinkite {{ui:Kainos}}. Po {{ui:Šis kiekių skaičiavimas}} matote kiekvieną poziciją, turinčią prisimintą kainą, ką jūs jai nustatėte dabar, paskutinio darbo įkainius, tipinius įkainius (prisimintų darbų vidurį) ir intervalą.
3. Pasirinkite {{ui:Naudoti paskutinį}} arba {{ui:Naudoti įprastas}} vienai pozicijai, arba {{ui:Įkainoti N neįkainotų pozicijų iš atminties}}, kad užpildytumėte kiekvieną poziciją be kainos pagal paskutinį darbą.

Kiekvienas naudojimas yra vienas žingsnis: {{key:Ctrl+Z}} jį atšaukia. Pozicija, turinti tik panašų pavadinimą (vienas pavadinimas yra kito viduje), apie tai praneša, o mygtukai naudoja panašaus pavadinimo įkainius. Įkainis, prisimintas pagal EA, niekada nededamas pozicijai pagal LF: dialogo lange rašoma, kad vienetai skiriasi, ir ji paliekama nepaliesta.

## Žiūrėti, keisti, pamiršti

{{ui:Visa įsiminta}} išvardija kiekvieną pavadinimą su įkainiais ir darbų skaičiumi. Šiukšliadėžės mygtukas pamiršta vieną pavadinimą; {{ui:Išvalyti visas kainas}} pamiršta visus. Išjunkite {{ui:Įsiminti mano kainas įrašant kiekių skaičiavimą}}, kad nebeprisimintumėte; tai, kas jau įrašyta, lieka, kol to nepamiršite. Jūsų kiekių skaičiavimai ir kainų biblioteka niekada nepaliečiami.

## Su jūsų asistentu

Jei Parametruose leidžiate asistentus, jie gali skaityti tai, kas prisimenama kiekių skaičiavimo pozicijoms (prices_list), ir pagal tai įkainoti pozicijas (prices_apply, kuris pirmiausia gali parodyti peržiūrą). Tai tas pats sąrašas, kaip dialogo lange.
