---
title: Kiekių skaičiavimas iš pastato modelio
summary: Atverkite architekto IFC modelį, pamatykite jį 3D, pasirinkite sienas, perdangas, duris ir kitus pagal tipą, medžiagą, sluoksnį ar dydį ir perkelkite jų kiekius, ilgius, plotus ir tūrius į kiekių skaičiavimą. Naujesnė modelio kopija atnaujina tuos pačius kiekius.
keywords: modelis, modelio kiekių skaičiavimas, 3D vaizdas, spustelėkite detalę, raskite eilutę, medžiaga, sluoksnis, sienų sluoksniai, gipso plokštė, izoliacija, durų dydžiai, langų dydžiai, durų ir langų žiniaraštis, csv, 3d, bim, ifc, rvt, pastato modelis, kiekiai, sienos, perdangos, durys, langai, kolonos, patalpos, pagal tipą, pagal lygį, atnaujinimas, naujesnis modelis, projekto plėtra
from: 8c4c12c9
---

Nereikia laukti kito brėžinių rinkinio. Kai architektas atsiunčia pastato modelį, atverkite jį čia ir kiekius paimkite tiesiai iš jo. Modelis nuskaitomas jūsų kompiuteryje; niekas nesiunčiama niekur.

## Žingsniai

1. Įrankių juostoje pasirinkite {{ui:Modelis}} ir nurodykite modelio `.ifc` failą arba atverkite jį su {{ui:Atidaryti planus}} kaip bet kurį kitą failą.
2. {{ui:Modelio kiekių skaičiavimas}} atsidaro su viena eilute kiekvienai kategorijai ir tipui: sienos pagal sienos tipą, perdangos pagal perdangos tipą, durys pagal durų tipą ir t. t. Kiekviena eilutė rodo savo kiekį ir tai, kokiais vienetais matuojama ši kategorija.
3. Nustatykite {{ui:Grupuoti pagal}} į {{ui:Kategorija}}, kad gautumėte greitą sumą, arba į {{ui:Kategorija, tipas ir lygis}}, kad kiekvienas tipas būtų išskaidytas pagal aukštą.
4. Nužymėkite eilutes, kurių nenorite. {{ui:Ieškoti}} susiaurina sąrašą. Nužymėjus eilutę, jos dalys 3D vaizde taip pat paslepiamos.
5. Suteikite modeliui {{ui:Modelio pavadinimas}}, kurį išlaikysite visam darbui, pavyzdžiui, projekto pavadinimą.
6. Pasirinkite {{ui:Pridėti į kiekių skaičiavimą}}. Kiekvienas kiekis tampa įvestu kiekiu elementų sąraše. Pavadinkite jį, įkainuokite ir pridėkite surinkimus kaip bet kurį kitą elementą.

## Modelio peržiūra 3D

{{ui:Rodyti modelį 3D}} piešia modelį virš lentelės, kiekvienai eilutei – savo spalva (spalvos žymė šalia eilutės pavadinimo). Vilkite, kad pasuktumėte, laikykite {{key:Shift}} ir vilkite, kad perkeltumėte, naudokite ratuką artinimui, o norėdami grįžti, pasirinkite {{ui:Pritaikyti}} arba {{ui:Atstatyti}}.

- **Spustelėkite detalę** paveikslėlyje, ir jos eilutė lentelėje pasirenkama, visos tos eilutės dalys nušviečiamos, o kitos – išblunka. Spustelėję tą pačią detalę dar kartą, jei ji yra kelose eilutėse (siena savo sluoksniuose), pasirenkama kita eilutė.
- **Spustelėkite eilutę** lentelėje, kad nušviestumėte jos dalis. Spustelėkite ją dar kartą arba tuščią vietą paveikslėlyje, kad panaikintumėte pasirinkimą.
- Patalpos nebraižomos, nes patalpos tūris paslėptų pastatą.
- Labai didelis modelis kai kurioms dalims išsaugo tik dėžę, kad tilptų atmintyje; skydelis nurodo, kiek jų. Skaičiai nesikeičia.

Jei šis kompiuteris negali piešti 3D, lentelė veikia kaip anksčiau.

## Grupuoti pagal medžiagą, sluoksnį ar dydį

{{ui:Grupuoti pagal}} turi dar tris pasirinkimus:

- {{ui:Kategorija ir medžiaga}}: siena, perdanga ar stogas, sudarytas iš sluoksnių, kiekvienos medžiagos sluoksniui suteikia savo eilutę, todėl gipso plokštės, karkaso stovai ir izoliacija gali būti įkainuoti atskirai. Pastato dalis su viena medžiaga gauna tos medžiagos eilutę, o dalis be medžiagos laikoma eilutėje „Medžiaga nenurodyta“.
- {{ui:Kategorija ir sluoksnis}}: tas pats, tik eilutėje nurodomas sluoksnio storis („Izoliacija, 100 mm“).
- {{ui:Kategorija, tipas ir durų ar langų dydis}}: durys ir langai skaidomi pagal plotį ir aukštį (pavyzdžiui, 3'-0" × 6'-8" arba 914 × 2,032 mm).

Sluoksniui plotas yra paties sienos paviršiaus (arba perdangos ar stogo plano ar paviršiaus plotas), o tūris yra tas plotas, padaugintas iš sluoksnio storio. Eilutės pastaboje nurodoma, kiek skaičių gauta iš sluoksnio. Vienos sienos sluoksnių tūriai sudaro modelyje nurodytą tos sienos tūrį.

## Įrašyti eilutes ar angas kaip CSV

{{ui:Įrašyti eilutes kaip CSV}} įrašo jūsų pažymėtas eilutes su vienetais kiekvienoje antraštėje, skaičiuoklei. {{ui:Įrašyti durų ir langų žiniaraštį kaip CSV}} (tik tada, kai modelyje yra durų ar langų) įrašo kiekvieną duris ir langą pagal tipą, lygį ir dydį su jų kiekiu.

## Kas matuojama

| Kategorija | Kiekiai |
|---|---|
| Sienos | kiekis, ilgis, sienos plotas (vienas paviršius, atimtos angos), tūris |
| Perdangos, plokštės, lubos ir kitos dangos | kiekis, plano plotas, tūris |
| Stogai | kiekis, plano plotas, stogo paviršius, tūris |
| Pamatai | kiekis, plano plotas, tūris |
| Kolonos, sijos ir elementai | kiekis, ilgis išilgai elemento, tūris |
| Turėklai, vamzdžiai, ortakiai ir kabelių trasos | kiekis, ilgis |
| Laiptai | kiekis, tūris |
| Patalpos | kiekis, grindų plotas, tūris |
| Durys, langai ir viskas kita | kiekis |

Jei modelio autorius failde nurodė kiekį, naudojamas tas skaičius. Priešingu atveju skaičius išmatuojamas pagal elemento formą. Kiekvienas kiekis turi pastabą, kurioje nurodoma, kuris būdas naudotas ir kiek elementų davė skaičių.

:::note
Sienos ilgis, išmatuotas pagal jos formą, eina nuo galo iki galo, todėl dvi sienos, susikertančios kampe, abi įtraukia kampą. Tūriui reikalinga uždara forma: elementas, kurio forma nėra uždara, suskaičiuojamas, bet tūrio nedavo. Išlenktas ar kampuotas sienos elementas matuojamas kaip pusė visų jo vertikalių paviršių, ir jo pastaboje tai nurodoma.
:::

## Atvykus naujesniam modeliui

Atverkite naujesnį failą ir įveskite tą patį {{ui:Modelio pavadinimas}}. Prieš ką nors pridedant, skydelis nurodo, kiek kiekių yra naujų, kiek pakito ir iš ko į ką, bei kurie ankstesnės kopijos kiekiai modelyje nebeegzistuoja. Pasirinkite {{ui:Pridėti į kiekių skaičiavimą}}: pakitę kiekiai įgyja naujus skaičius, o jūsų pavadinimai, įkainiai, atliekos ir surinkimai lieka. Kiekiai, kurių nebėra modelyje, išlaiko senus skaičius; pašalinkite juos patys, jei projektas juos atsisakė.

Kiekis atpažįstamas pagal tipo ir lygio pavadinimus. Jei architektas pervadina sienos tipą, jis atvyksta kaip naujas kiekis, o senasis išvardijamas kaip dingęs.

## Failai, kuriuos skaito

IFC failai (IFC2x3, IFC4 ir IFC4.3). IFC failas su keliais, geležinkeliais ar tiltais, kaip ir anksčiau, tiesiogiai įtraukia ir jų infrastruktūros kiekius.

TakeoffCraft šiame leidime `.rvt` failų neskaito. Jei architektas dirba Revit, paprašykite modelio IFC eksporto (File, Export, IFC) ir atverkite jį.

Vienas modelis vienu metu gali įtraukti iki 500 kiekių. Jei jų daugiau, nužymėkite eilutes arba grupuokite pagal kategoriją.
