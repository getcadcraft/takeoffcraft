---
title: Kas naujo 0.9 versijoje
summary: Ilgius skaitykite metrais, centimetrais ar milimetrais, metrinius plotus m2 su sienų plotu, 1:75 ir 1:150 mastelių nustatymus, svorio ir temperatūros vienetus, Lankas su dešimčia metodų, tiesioginius žymeklius, sekimą ir žmonių sąrašą.
keywords: kas naujo, kas naujo?, leidimo pastabos, keitimų žurnalas, 0.9, rodyti ilgius kaip, metrai, centimetrai, milimetrai, metrinis, sekti bendrą, vienetai, rodymo vienetai, m2, kvadratiniai metrai, sienų plotas, mastelių nustatymai, 1:75, 1:150, svoris, kilogramai, kg, tonos, t, lb, temperatūra, celsijus, farenheitas, lankas, lankų metodai, 3 taškų lankas, spindulys, tiesioginis, žymekliai, sekimas, žmonių sąrašas, klasė, patarimai, išdėstymas, 0.8, 0.8.1, versija, naujos funkcijos, skaičiuoti viską, legenda, simbolių legenda, visas rinkinys, kainų atmintis, ankstesni darbai, paskutinis darbas, tipinė kaina, tiekėjas, atsargos, pristatymo laikas, laukimas, užsakymų sąrašas, trūkumas, problemų skydelis, asistentas, kalbos, įvesties įrenginiai, įrankių juostos eilutės, dwg
from: 6182b998
---

Tai, kas pasikeitė TakeoffCraft 0.9 versijoje, palyginti su 0.8.1. Tai nedidelis leidimas šiai programai: ilgius dabar galima skaityti metrais, centimetrais ar milimetrais, plotai ir mastelių nustatymai tinkamai seka metrinį darbą, o Lankas turi dešimt būdų piešti. Tiesioginiai seansai taip pat rodo, kas kur yra.

## Naujiena

### Ilgius skaitykite metrais, centimetrais ar milimetrais

- **Rodyti ilgius kaip.** {{ui:Parametrai}} › {{ui:TakeoffCraft}} turi {{ui:Rodyti ilgius kaip}} su {{ui:Pagal bendruosius}}, {{ui:Pėdos-coliai}}, m, cm ir mm. {{ui:Pagal bendruosius}} naudoja metrinį ilgio vienetą, pažymėtą {{ui:Parametrai}} › {{ui:Visuotiniai}} › {{ui:Vienetai}}, o jei nieko nepažymėta – pėdas ir colius. Tai keičia ilgių rodymą lape, būsenos juostoje ir skydeliuose, įskaitant aukščius, gylį, storį ir lygius. Grynas skaičius, įvestas aukščio lauke, skaitomas rodomu vienetu.
- **Tik rodymas.** Kiekiai, kainos ir eksportai skaičiuojami iš tikslių ilgių. 1/16, 1/8 ir 1/4 colio pasirinkimas rodomas tik pėdoms-coliams. Žr. [Rodyti ilgius metrais](topic:show-lengths-in-meters).
- **Svorio vienetai.** {{ui:Įvestas kiekis (be brėžinio)}} elementas dabar gali būti lb, TON, kg ar t ir būti kainuojamas už vienetą.
- **Temperatūra.** Kiekvienas elementas turi pasirinktinį {{ui:Temperatūra}} lauką elemento redaktoriuje, įvedamą laipsniais °C arba °F. {{ui:Rodyti temperatūras kaip}} {{ui:Parametrai}} › {{ui:TakeoffCraft}} siūlo {{ui:Pagal bendruosius}}, °C arba °F.

### Plotai ir mastelei metriniam darbui

- **Plotai m2 brėžinyje.** Plotas, išmatuotas metriniu elementu, brėžinio žymoje ir žymų skydelyje rodomas kaip m2, o ne SF – lentelėje taip pat. Taisyklė: m2, kai elementas kainuojamas metriškai arba ilgiai rodomi m, cm ar mm, kitu atveju SF.
- **Sienų plotas.** Linijinis elementas su aukščiu taip pat rodo savo sienų plotą (ilgis padaugintas iš aukščio) elementų sąraše ir kaip pastabos eilutę po kiekių lentele pagal elementą.
- **Mastelių nustatymai 1:75 ir 1:150.** Jie yra {{ui:Iš anksto nustatytas}} sąraše grupėje {{ui:Mastelis}}, kuri dabar turi 32 mastelius. Žr. [Mastelių nustatymai](topic:scale-presets).

### Lankas su dešimčia metodų

- Kol {{ui:Lankas}} įjungtas (įrankių juostos mygtukas arba {{key:R}}), lapo juostoje atsiranda laukelis {{ui:Lanko metodas}}: 3 taškų, Pradžia, Centras, Pabaiga; Pradžia, Centras, Kampas; Pradžia, Centras, Ilgis; Pradžia, Pabaiga, Kampas; Pradžia, Pabaiga, Kryptis; Pradžia, Pabaiga, Spindulys; Centras, Pradžia, Pabaiga; Centras, Pradžia, Kampas; ir Centras, Pradžia, Ilgis. Kampas, ilgis, spindulys ir kryptis gali būti spustelėti arba įvesti. Veikia tiesiniuose bėguose, plotuose ir išpjovose. Failai, įrašyti prieš 0.9, atsidaro tie patys. Žr. [Piešti lankus dešimčia metodų](topic:draw-arcs-ten-methods).

### Kartu dirbant

- **Matykite vienas kito žymeklius.** Tiesioginiame seanse kiekvieno asmens žymeklis rodomas lape su jo vardu ir spalva, o brūkšninė dėžutė aplink pažymėtas žymas. Žmonės kitame lape išvardijami su to lapo pavadinimu. Žr. [Dirbti tiesiogiai su kitais](topic:work-live).
- **Sekti asmenį ir žmonių sąrašas.** {{ui:Žmonės}} mygtukas tiesioginiame seanse išvardija kiekvieną asmenį su įrankiu, kuriuo jis dirba, lapu, kuriame yra, ir paskutinio redagavimo laiku. {{ui:Sekti}} perkelia jūsų vaizdą kartu su jų, o šeimininkas gali naudoti {{ui:Paprašyti visų sekti mane}}. Žr. [Sekti komandos narį tiesioginiame seanse](topic:follow-a-teammate).

## Visose programose

- **Patarimai ir pradžios užuomina.** Patarimas užvedus pelę yra Bootstrap patarimas, o pradžios užuominą galima uždaryti.
- **Slenkančios skirtukų juostos.** Skydelio skirtukų juosta, kuri netelpa, slenka vietoj to, kad būtų nukirsta.
- **Naršyklės skirtukų pavadinimai.** Naršyklės skirtukas rodo `<document> - TakeoffCraft | CadCraft`.
- **Išdėstymas.** Išdėstymų sąrašas {{ui:Parametrai}} yra iškrentantis sąrašas, rodantis pasirinktą išdėstymą.
- **Kalba.** Pasirinkta kalba dabar pasiekia žodžius, kuriuos pats puslapis rašo, pavyzdžiui Naujas, Atidaryti ir Įrašyti. Kalbos, kitos nei anglų, yra mašininiai juodraščiai, kol gimtoji kalba jų neperskaitys.

## Sąžiningos ribos

- Ilgių rodymas, svorio ir temperatūros vienetai bei nauji mastelių nustatymai patikrinti testais ir puslapyje. Ne kiekvienas skydelis kiekviename vienete patikrintas rankiniu būdu.
- Žmonių sąrašas dar nebuvo rankiniu būdu patikrintas su tikra mokytojų ir studentų klase.
- Kalbos, kitos nei anglų, yra mašininiai juodraščiai.
- Windows diegimo programos nepasirašytos kodu (Daugiau informacijos, tada Vis tiek paleisti). macOS disko vaizdas nėra notarizuotas (dešiniuoju pelės klavišu, tada Atidaryti).

## Ankstesnis: 0.8 ir 0.8.1

Tai, kas pasikeitė TakeoffCraft 0.8 (išleista 2026-11-01) ir 0.8.1 (2026-11-02) versijose, palyginti su 0.7. Simbolių legendą dabar galima suskaičiuoti visame rinkinyje vienu kartu, naujas kiekių skaičiavimas gali prasidėti nuo ankstesnių darbų kainų, o kiekių skaičiavimą galima patikrinti pagal tiekėjo atsargas. 0.8.1 – taisymų leidimas.

### Naujiena

**Suskaičiuokite viską rinkinyje**

- **Apibrėžkite legendą vieną kartą.** {{ui:Skaičiuoti viską}} įrankių juostoje skaito simbolių legendą: nuvilkite rėmelį aplink simbolius ir šalia jų išspausdintus pavadinimus. Kiekvienas simbolis išvardijamas su savo paveikslėliu ir pavadinimu, o pavadinimas tampa elemento pavadinimu. Nepažymėkite to, ko nenorite, tada spustelėkite {{ui:Skaičiuoti N lapuose}}. Juosta rodo, kuris lapas ieškomas, {{ui:Atšaukti}} sustabdo vykdymą, o puslapis lieka naudojamas.
- **Kiekvienas lapas vienu paleidimu.** Kiekvienas simbolis skaičiuojamas kiekviename atidarytame lape. Lapas, nubraižytas kitu mastelių, ieškomas tuo mastelių, o simboliai randami pasukti bet kuriuo stačiu kampu. Paties legendos simboliai savo lape neskaičiuojami.
- **Peržiūra prieš bet ką pridedant.** Kiekviena suma turi nuorodą kiekvienam lapui („E-103: 4“), kuri nuveda į tą lapą. Spustelėkite rėmelį radinyje, kad jo neįtrauktumėte, ir dar kartą – kad grąžintumėte. Atitikimo lygis (nuo 50 % iki 100 %) tik filtruoja tai, kas rasta; nieko neieškoma iš naujo.
- **Vienas anuliavimo žingsnis.** {{ui:Pridėti N žymų}} sukuria skaičiavimo elementą kiekvienam simboliui su žyma kiekviename radinyje. Pavadinimas, kuris jau yra jūsų skaičiavimo elementas, naudojamas iš naujo. {{key:Ctrl+Z}} atšaukia visus elementus ir žymas. Tai, ką priimate, taip pat patenka į {{ui:Išmokta}}.
- **Simboliai bet kokiu kampu.** Pažymėkite {{ui:Simboliai bet kokiu kampu}} prieš skaičiuodami, kad rastumėte ir simbolius, pasuktus kampu, kuris nėra stačias. Paieška tada pasuka kiekvieną simbolį kas 15 laipsnių, o nelygus simbolis gali užtrukti iki šešis kartus ilgiau.
- **Kas tai yra.** Paprastas simbolių atitikimas jūsų lapuose, be apmokyto modelio, ir niekas neišeina iš jūsų kompiuterio. Dirbtinis 200 lapų rinkinys buvo apdorotas per 9.4 sekundės nuo pradžios iki galo Chrome naršyklėje greitame stalinyje; tikri planų rinkiniai bus lėtesni. Žr. [Skaičiuoti viską rinkinyje](topic:count-everything).

**Kainų atmintis iš jūsų darbų**

- **TakeoffCraft prisimena jūsų įkainius.** Įrašant kiekių skaičiavimą, kiekvienas įkainotas naudojamas elementas įsimenamas pagal pavadinimą ir tipą: medžiagų įkainis, darbo įkainis, atliekos ir vienetas. Kiekvienam pavadinimui saugomi paskutiniai 12 darbų. Jie laikomi šiame kompiuteryje šalia kainų bibliotekos, niekada kiekių skaičiavimo faile, ir niekur nieko neišsiunčiama.
- **Pradėkite naują kiekių skaičiavimą iš jų.** {{ui:Kainos}} įrankių juostoje rodo kiekvienam elementui paskutinio darbo įkainius, įprastus įkainius ir intervalą. {{ui:Naudoti paskutinį}} arba {{ui:Naudoti įprastas}} įkainuoja vieną elementą, o {{ui:Įkainuoti N neįkainotų elementų iš atminties}} užpildo kiekvieną elementą be kainos. Kiekvienas naudojimas – vienas anuliavimo žingsnis.
- **Ankstesni darbai.** {{ui:Mokytis iš ankstesnio kiekių skaičiavimo…}} įsimena įkainotus elementus išsaugoto kiekių skaičiavimo (.json).
- **Žiūrėkite, keiskite, pamirškite.** {{ui:Visa įsiminta}} išvardija visus pavadinimus; šiukšliadėžės mygtukas pamiršta vieną, o {{ui:Išvalyti visas kainas}} pamiršta visas. Išjunkite {{ui:Įsiminti mano kainas įrašant kiekių skaičiavimą}}, kad sustabdytumėte. Kaina „už vienetą“ niekada nededama elementui, skaičiuojamam pagal pėdą. Žr. [Kainų atmintis iš jūsų ankstesnių darbų](topic:price-memory).

**Tiekėjo atsargos ir pristatymo laikai**

- **Tikrinkite pagal tiekėjo sąrašą.** {{ui:Tiekimas}} įrankių juostoje priima tiekėjo atsargų sąrašą ({{ui:Pridėti tiekėjo failą…}}), CSV ar skaičiuoklę, ir patikrina, ko kiekių skaičiavimui reikia, su atliekomis. Saugomi iki penkių failų. Niekas neišsiunčiama ir niekas nieko neklausia tiekėjo: failą atnešate jūs.
- **Ką jis sako.** Trūkstami elementai rodomi pirmi: „Trūksta 120 EA“, „Pristatymo laikas 21 diena“, „Laukiama papildymo“, „Vienetai skiriasi“, „Nėra atsargų duomenų“ arba „Sandėlyje“. {{ui:Ilgiausias norimas laukimas (dienos)}} prasideda nuo 14.
- **Užsakymų sąrašas.** {{ui:Užsakymų sąrašas (CSV)}} atsisiunčia trūkstamus elementus su trūkstamu kiekiu, tiekėju ir pristatymo laiku.
- **Kainos į biblioteką.** Jei faile yra kainų, {{ui:Kainos į biblioteką}} nustato kiekvieno bibliotekos įrašo medžiagos kainą su tuo pačiu pavadinimu ir vienetu. Perkainokite iš bibliotekos, kad jas perkeltumėte į kiekių skaičiavimą.
- **Problemų skydelyje.** Trūkumas yra įspėjimas, o ilgas laukimas – pastaba, abu rodomi skyriuje „Tiekėjo atsargos“. Galite priimti vieną su priežastimi, ir priežastis išsaugoma kiekių skaičiavime. Žr. [Tikrinti tiekėjo atsargas ir pristatymo laikus](topic:supplier-stock).

### DI asistentai

- **Įrankiai visiems trims.** Su leidžiamais asistentams {{ui:Parametrai}} asistentas gali perskaityti legendą (`legend_open`), vykdyti skaičiavimą (`legend_count_start`, tada `legend_count_status` ir `legend_count_result`) ir jį pridėti (`legend_count_add`, kuris gali pirma parodyti peržiūrą). Jis gali perskaityti įsimintas kainas (`prices_list`) ir įkainuoti elementus iš jų (`prices_apply`, kuris gali pirma parodyti peržiūrą), taip pat perskaityti tiekėjo patikrinimą (`supply_check`). Tiekėjo failo pridėjimas lieka jums. Žr. [Naudoti TakeoffCraft su DI asistentais](topic:use-with-ai-assistants).

### Visose programose

- **Kalbos.** Iš viso penkiasdešimt keturios kalbos; dešimt naujų (lietuvių, latvių, bosnių, marathi, telugu, albanų, afrikanų, filipiniečių, suahili ir uzbekų). Kalbos, kitos nei anglų, yra mašininiai juodraščiai, kol gimtoji kalba jų neperskaitys.
- **Įvesties įrenginiai.** {{ui:Parametrai}} › {{ui:Visuotiniai}} › {{ui:Įvesties įrenginiai}} nustato, ką daro jutiklinė plokštė, pelės šoniniai mygtukai, rašiklis, 3D pelė, žaidimo valdiklis ar MIDI valdiklis, visoms programoms arba vienai. Žr. [Naudoti jutiklinę plokštę, 3D pelę ar valdiklį](common:input-devices).
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} siūlo {{ui:Kelios eilutės}} (pradžia), {{ui:2 eilutės}} ir {{ui:1 eilutė}}; grupės, kurios netelpa, slenka į šoną. Žr. [Sutvarkyti skydelius](common:arrange-panels).
- **Problemų skydelis.** Bendras įspėjimų ir pastabų skydelis dabar turi aukščiau aprašytą tiekėjo atsargų patikrinimą šalia kitų patikrinimų.
- **Priedai.** Priedai seka jūsų paskyros sąrašą. Žr. [Priedai ir jūsų paskyros sąrašas](common:addons-basics).
- **Prijunkite savo DI.** CadCraft Studio yra centras: prijunkite asistentą vieną kartą visoms aštuonioms programoms. Studio neturi savo DI.

### Pataisyta 0.8.1 versijoje

- **DWG klasių skyrius.** DWG failo klasių skyrius buvo nuskaitytas kaip netinkamo tipo. Tai ištaisyta TakeoffCraft ir dar keturiose kitose programose.
- **Studio gali keisti kalbą veikdamas.** Anksčiau Studio ir jo supakuoti leidimai buvo tik anglų kalba. Tai nebuvo išbandyta darbalaukio versijoje visose platformose; praneškite, jei kalba nepasikeičia.

### Dar ne šioje versijoje

- **Nepasirašyta kodu.** Windows gali įspėti, o Mac kompiuteryje pirmą kartą dešiniuoju pelės klavišu spustelėkite ir pasirinkite Atidaryti. Parduotuvių versijos (Microsoft Store, Google Play, App Store) sustabdytos, o iPad ir iPhone versija nebuvo perkurta 0.8.1 versijai.
- **Studio atnaujinimai.** Windows diegimo programa ir Linux paketai tikrina kartą per dieną ir pirma klausia. Nešiojamas zip tik praneša, o macOS ir APK patys neatsinaujina. 0.8 macOS .dmg seka leidimą.
- **Prijunkite savo DI.** Vieno paspaudimo prijungimas Studio viduje, talpinamas naršyklės DI jungtis, jūsų pačių API raktas Studio viduje ir paskelbtas MCP paketas šioje versijoje nežadami.
- **Suskaičiuokite viską.** Reikia simbolių, nubraižytų taip pat kaip legendoje, o simbolis, per kurį eina siena ar ilga linija, gali būti praleistas. Veidrodiniai simboliai nerandami, o lapas be mastelio, nubraižytas kitu dydžiu, ieškomas legendos dydžiu. Prieš pasitikint likusiais, patikrinkite radinius pirmajame lape.
- **Tiekėjo atsargos.** Atsargų duomenys tokie šviežti, kaip failas, kurį pridedate. Patikrinimas niekada neklausia tiekėjo.
- **Kalbos.** Tamilų kalbos programos juosta persipildo.

Visa kita – [Dar nesukurta](topic:not-built-yet). Ankstesnį leidimą žr. [Kas naujo 0.7 versijoje](topic:whats-new-0-7).
