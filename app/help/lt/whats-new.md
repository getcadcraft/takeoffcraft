---
title: Kas naujo 0.8 ir 0.8.1 versijose
summary: Suskaičiuokite visą simbolių legendą visuose atidarytuose lapuose vienu paleidimu, įkainokite objektus pagal ankstesnių darbų kainas, patikrinkite kiekių skaičiavimą pagal tiekėjo atsargas ir pristatymo terminus, taip pat naujus DI asistento įrankius visiems trims, bendrus 0.8 pakeitimus ir 0.8.1 DWG failų pataisą.
keywords: kas naujo, what's new, išleidimo pastabos, pakeitimų žurnalas, pakeitimai, 0.8, 0.8.1, versija, naujos funkcijos, skaičiuoti viską, legenda, simbolių legenda, visas rinkinys, kainų atmintis, ankstesni darbai, paskutinis darbas, tipinė kaina, tiekėjas, atsargos, pristatymo laikas, išankstinis užsakymas, užsakymų sąrašas, trūkumas, problemų skydelis, asistentas, kalbos, įvesties įrenginiai, įrankių juostos eilutės, dwg
from: a04adef6
---

Tai, kas pasikeitė TakeoffCraft 0.8 (išleista 2026-11-01) ir 0.8.1 (2026-11-02) versijose, palyginti su 0.7. Simbolių legendą dabar galima suskaičiuoti visame rinkinyje vienu kartu, naują kiekių skaičiavimą galima pradėti nuo ankstesnių darbų kainų, o kiekių skaičiavimą galima patikrinti pagal tiekėjo atsargas. 0.8.1 – pataisos versija.

## Nauja

### Suskaičiuoti viską rinkinyje

- **Apibraukite legendą vieną kartą.** {{ui:Skaičiuoti viską}} įrankių juostoje nuskaito simbolių legendą: nuvilkite langelį aplink simbolius ir šalia jų išspausdintus pavadinimus. Kiekvienas simbolis išvardijamas su savo paveikslėliu ir pavadinimu, o pavadinimas tampa objekto pavadinimu. Nuimkite žymėjimą nuo to, ko nenorite, tada pasirinkite {{ui:Skaičiuoti N lapuose}}. Juosta rodo lapą, kuris dabar ieškomas, {{ui:Atšaukti}} sustabdo paleidimą, o puslapis lieka naudojamas.
- **Visi lapai vienu paleidimu.** Kiekvienas simbolis skaičiuojamas kiekviename atidarytame lape. Lapas, nubraižytas kitu mastelu, ieškomas to lapo mastelu, o simboliai randami pasukti bet kuriuo stačiu kampu. Paties legendos simboliai savo lape neskaičiuojami.
- **Peržiūrėkite prieš pridedant.** Kiekviena suma turi nuorodą kiekviename lape („E-103: 4“), vedančią į tą lapą. Spustelėkite langelį radinyje, kad jį neįtrauktumėte, ir dar kartą – kad vėl grąžintumėte. Atitikimo lygis (50–100 %) tik filtruoja tai, kas rasta; iš naujo nieko neieškoma.
- **Vienas atšaukimo žingsnis.** {{ui:Pridėti N žymų}} sukuria po vieną skaičiavimo objektą kiekvienam simboliui su žyma ties kiekvienu radiniu. Pavadinimas, kuris jau yra jūsų skaičiavimo objektas, panaudojamas iš naujo. {{key:Ctrl+Z}} atšaukia visus objektus ir žymas. Tai, ką priimate, taip pat patenka į {{ui:Išmokta}}.
- **Simboliai bet kokiu kampu.** Prieš skaičiuodami pažymėkite {{ui:Simboliai bet kokiu kampu}}, kad rastumėte ir simbolius, pasuktus ne stačiu kampu. Tada paieška sukasi kiekvieną simbolį kas 15 laipsnių, o simbolis, kuris nėra apvalus, gali užtrukti iki šešiskart ilgiau.
- **Kas tai yra.** Paprastas simbolių atitikimo ieškojimas jūsų paties lapuose, be mokyto modelio, ir niekas nepalieka jūsų kompiuterio. Išgalvotame 200 lapų rinkinyje tai užtruko 9.4 sekundės nuo pradžios iki pabaigos Chrome naršyklėje greitame staliniame kompiuteryje; tikri planų rinkiniai bus lėtesni. Žr. [Suskaičiuoti viską rinkinyje](topic:count-everything).

### Kainų atmintis iš jūsų darbų

- **TakeoffCraft prisimena jūsų kainas.** Įrašant kiekių skaičiavimą, kiekvienas įkainotas naudojamas objektas įsimenamas pagal pavadinimą ir tipą: medžiagos kaina, darbo kaina, atliekos ir matavimo vienetas. Kiekvienam pavadinimui saugomi paskutiniai 12 darbų. Ji laikoma šiame kompiuteryje šalia kainų bibliotekos, niekada kiekių skaičiavimo faile, ir niekur nesiunčiama.
- **Pradėkite naują kiekių skaičiavimą iš jos.** {{ui:Kainos}} įrankių juostoje kiekvienam objektui rodo paskutinio darbo kainas, tipines kainas ir intervalą. {{ui:Naudoti paskutinį}} arba {{ui:Naudoti įprastas}} įkainuoja vieną objektą, o {{ui:Įkainoti N neįkainotų objektų iš atminties}} užpildo kiekvieną objektą, kuris dar neturi kainos. Kiekvienas naudojimas – vienas atšaukimo žingsnis.
- **Senesni darbai.** {{ui:Mokytis iš ankstesnio kiekių skaičiavimo…}} įsimena įkainotus išsaugoto kiekių skaičiavimo (.json) objektus.
- **Žiūrėkite, keiskite, pamirškite.** {{ui:Visa įsiminta}} išvardija visus pavadinimus; šiukšliadėžės mygtukas pamiršta vieną, o {{ui:Išvalyti visas kainas}} pamiršta visus. Išjunkite {{ui:Įsiminti mano kainas įrašant kiekių skaičiavimą}}, kad sustabdytumėte. Kaina už vienetą niekada nededama objektui, matuojamam pėdomis. Žr. [Kainų atmintis iš ankstesnių darbų](topic:price-memory).

### Tiekėjo atsargos ir pristatymo terminai

- **Patikrinkite pagal tiekėjo sąrašą.** {{ui:Tiekimas}} įrankių juostoje priima tiekėjo atsargų sąrašą ({{ui:Pridėti tiekėjo failą…}}), CSV arba skaičiuoklės failą, ir patikrina, ko reikia kiekių skaičiavimui, įskaitant atliekas. Išsaugoma iki penkių failų. Niekas nesiunčiama ir niekas nekreipiasi į tiekėją: failą pateikiate jūs.
- **Ką tai sako.** Pirmiausia rodomi trūkstami objektai: „Trūksta 120 EA“, „Pristatymo laikas 21 diena“, „Išankstinis užsakymas“, „Vienetai skiriasi“, „Nėra atsargų duomenų“ arba „Yra sandėlyje“. {{ui:Ilgiausias norimas laukimas (dienos)}} pradeda nuo 14.
- **Užsakymų sąrašas.** {{ui:Užsakymų sąrašas (CSV)}} atsisiunčia trūkstamus objektus su trūkstamu kiekiu, tiekėju ir pristatymo laiku.
- **Kainos į biblioteką.** Jei faile yra kainų, {{ui:Kainos į biblioteką}} nustato kiekvieno bibliotekos įrašo su tuo pačiu pavadinimu ir vienetu medžiagos kainą. Perkainuokite iš bibliotekos, kad jas perkeltumėte į kiekių skaičiavimą.
- **Problemų skydelyje.** Trūkumas yra įspėjimas, o ilgas laukimas – pastaba, skiltyje „Tiekėjo atsargos“. Galite priimti vieną su priežastimi, ir priežastis išsaugoma kiekių skaičiavimo faile. Žr. [Patikrinkite tiekėjo atsargas ir pristatymo terminus](topic:supplier-stock).

### DI asistentai

- **Įrankiai visiems trims.** Kai {{ui:Parametrai}} leidžiami asistentai, asistentas gali perskaityti legendą (`legend_open`), vykdyti skaičiavimą (`legend_count_start`, tada `legend_count_status` ir `legend_count_result`) ir jį pridėti (`legend_count_add`, kuris gali pirmiausia parodyti peržiūrą). Jis gali perskaityti įsimintas kainas (`prices_list`) ir įkainuoti objektus pagal jas (`prices_apply`, kuris gali pirmiausia parodyti peržiūrą), ir perskaityti tiekėjo patikrinimą (`supply_check`). Tiekėjo failo pridėjimas lieka jums. Žr. [Naudokite TakeoffCraft su DI asistentais](topic:use-with-ai-assistants).

### Visose programose

- **Kalbos.** Iš viso penkiasdešimt keturios kalbos; dešimt yra naujos (lietuvių, latvių, bosnių, maratų, telugu, albanų, afrikaans, filipiniečių, suahili ir uzbekų). Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol gimtoji kalba jų neperskaito.
- **Įvesties įrenginiai.** {{ui:Parametrai}} › {{ui:Visuotiniai}} › {{ui:Įvesties įrenginiai}} nustato, ką daro jutiklinė dalis, pelės šoniniai mygtukai, pieštukas, 3D pelė, žaidimų valdiklis ar MIDI valdiklis, visoms programoms arba vienai. Žr. [Naudokite jutiklinę dalį, 3D pelę ar valdiklį](common:input-devices).
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} siūlo {{ui:Kelios eilutės}} (pradžia), {{ui:2 eilutės}} ir {{ui:1 eilutė}}; grupės, kurios netelpa, slenka į šoną. Žr. [Išdėstykite skydelius](common:arrange-panels).
- **Problemų skydelis.** Bendras įspėjimų ir pastabų skydelis dabar turi aukščiau aprašytą tiekėjo atsargų patikrinimą šalia kitų patikrinimų.
- **Priedai.** Priedai seka jūsų paskyros sąrašą. Žr. [Priedai ir jūsų paskyros sąrašas](common:addons-basics).
- **Prijunkite savo DI.** CadCraft Studio yra centras: prijunkite savo asistentą vieną kartą visoms aštuonioms programoms. Studio pats DI neturi.

## Ištaisyta 0.8.1 versijoje

- **DWG klasių skyrius.** DWG failo klasių skyrius buvo nuskaitomas kaip netinkamo tipo. Tai ištaisyta TakeoffCraft ir dar keturiose kitose programose.
- **Studio gali keisti kalbą veikiant.** Anksčiau Studio ir jo supakuoti leidimai buvo tik anglų kalba. Tai nebuvo patikrinta staliniame kompiuteryje visose platformose; praneškite, jei kalba nesikeičia.

## Šioje versijoje dar nėra

- **Nėra kodo parašo.** „Windows“ gali įspėti, o Mac kompiuteryje pirmą kartą spustelėkite dešiniuoju pelės klavišu ir pasirinkite {{ui:Atvira}}. Parduotuvių versijos (Microsoft Store, Google Play, App Store) sustabdytos, o iPad ir iPhone versija 0.8.1 neperkurta.
- **Studio atnaujinimai.** „Windows“ diegimo programa ir Linux paketai tikrinami kartą per dieną ir klausia prieš atnaujindami. Nešiojamas zip archyvas tik praneša, o macOS ir APK nesiatnaujina patys. 0.8 macOS .dmg seka išleidimą.
- **Prijunkite savo DI.** Vieno paspaudimo prijungimas Studio viduje, įmontuotas jungtis DI naršyklėje, jūsų pačių API raktas Studio viduje ir paskelbtas MCP paketas šioje versijoje neteikiami.
- **Suskaičiuoti viską.** Reikia simbolių, nubraižytų taip pat kaip legendoje, o simbolis, per kurį eina siena ar ilga linija, gali būti praleistas. Veidrodiniai simboliai nerandami, o lapas be mastelio, nubraižytas kitu dydžiu, ieškomas legendos dydžiu. Prieš pasitikėdami likusiais, patikrinkite radinius pirmame lape.
- **Tiekėjo atsargos.** Atsargų duomenys tokie šviežiausi, kaip failas, kurį pridedate. Patikrinimas niekada nekreipiasi į tiekėją.
- **Kalbos.** Tamilų kalbos programos juosta persipildo.

Visa kita – [Dar nesukurta](topic:not-built-yet). Apie ankstesnį leidimą žr. [Kas naujo 0.7 versijoje](topic:whats-new-0-7).
