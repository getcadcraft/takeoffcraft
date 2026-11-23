---
title: Kas naujo 0.9 versijoje (ankstesnė)
summary: Ilgius skaitykite metrais, centimetrais ar milimetrais, metrinius plotus m2 su sienų plotu, mastelio nustatymus 1:75 ir 1:150, svorio ir temperatūros vienetus, lanką su dešimčia metodų, gyvus žymeklius, sekimą ir dalyvių sąrašą.
keywords: kas naujo 0.9, ankstesnis leidimas, kas naujo, what's new, leidimo pastabos, keitimų žurnalas, 0.9, rodyti ilgius kaip, metrai, centimetrai, milimetrai, metrinis, sekti visuotinius, vienetai, rodymo vienetai, m2, kvadratiniai metrai, sienų plotas, mastelio nustatymai, 1:75, 1:150, svoris, kilogramai, kg, tona, t, lb, temperatūra, celsijus, farenheitas, lankas, lanko metodai, trijų taškų lankas, spindulys, gyvi, žymekliai, sekti, dalyvių sąrašas, klasė, pagalbiniai patarimai, maketas, kas naujo, leidimo pastabos, keitimų žurnalas, pakeitimai, 0.8, 0.8.1, versija, naujos funkcijos, suskaičiuoti viską, legenda, simbolių legenda, visas rinkinys, kainų atmintis, ankstesni darbai, paskutinis darbas, įprasta kaina, tiekėjas, atsargos, pristatymo terminas, atsilikimas, užsakymų sąrašas, trūkumas, problemų skydelis, asistentas, kalbos, įvesties įrenginiai, įrankių juostos eilutės, dwg
from: f4322ba2
---

Tai, kas pasikeitė TakeoffCraft 0.9 versijoje, lyginant su 0.8.1. Tai nedidelis šios programos leidimas: ilgius dabar galima skaityti metrais, centimetrais ar milimetrais, plotai ir mastelis tinkamai veikia metriniuose darbuose, o lankas turi dešimt braižymo būdų. Tiesioginės sesijos taip pat rodo, kas kur yra.

## Nauja

### Ilgius skaitykite metrais, centimetrais ar milimetrais

- **Rodyti ilgius kaip.** {{ui:Parametrai}} › {{ui:TakeoffCraft}} yra {{ui:Rodyti ilgius kaip}} su {{ui:Pagal bendruosius}}, {{ui:Pėdos-coliai}}, m, cm ir mm. {{ui:Pagal bendruosius}} naudoja metrinį ilgio vienetą, pažymėtą žvaigždute {{ui:Parametrai}} › {{ui:Visuotiniai}} › {{ui:Vienetai}}, o jei nieko nepažymėta – pėdas-colius. Tai keičia, kaip ilgiai rodomi lape, būsenos juostoje ir skydeliuose, įskaitant aukščius, gylį, storį ir lygius. Be vieneto įvestas skaičius aukščio lauke nuskaitomas rodomu vienetu.
- **Tik rodymui.** Kiekiai, kainos ir eksportai skaičiuojami pagal tikslius ilgius. Pasirinkimai 1/16, 1/8 ir 1/4 colio rodomi tik pėdoms-coliams. Žr. [Rodyti ilgius metrais](topic:show-lengths-in-meters).
- **Svorio vienetai.** Elementas {{ui:Įvestas kiekis (be brėžinio)}} dabar gali būti lb, TON, kg arba t ir turėti kainą už vienetą.
- **Temperatūra.** Kiekvienas elementas turi neprivalomą lauką {{ui:Temperatūra}} elementų redaktoriuje, įvedamą laipsniais C arba F. {{ui:Rodyti temperatūras kaip}} skirtuke {{ui:Parametrai}} › {{ui:TakeoffCraft}} siūlo {{ui:Pagal bendruosius}}, °C arba °F.

### Plotai ir mastelis metriniams darbams

- **Plotai m2 brėžinyje.** Metriniu elementu išmatuotas plotas dabar brėžinio žymoje ir žymų skydelyje, taip pat lentelėje rodomas kaip m2, o ne SF. Taisyklė: m2, kai elementas įkainotas metriškai arba ilgiai rodomi m, cm ar mm; priešingu atveju – SF.
- **Sienos plotas.** Linijinis elementas su aukščiu taip pat rodo savo sienos plotą (ilgis padauginti iš aukščio) elementų sąraše ir kaip pastabos eilutę po kiekių pagal elementą lentele.
- **Mastelio nustatymai 1:75 ir 1:150.** Jie yra sąraše {{ui:Iš anksto nustatytas}} grupėje {{ui:Mastelis}}, kurioje dabar yra 32 masteliai. Žr. [Mastelio nustatymai](topic:scale-presets).

### Lankas dešimčia metodų

- Kai įjungtas {{ui:Lankas}} (įrankių juostos mygtukas arba {{key:R}}), lapo juostoje rodomas laukas {{ui:Lanko metodas}} su pasirinkimais: Trys taškai; Pradžia, Centras, Pabaiga; Pradžia, Centras, Kampas; Pradžia, Centras, Ilgis; Pradžia, Pabaiga, Kampas; Pradžia, Pabaiga, Kryptis; Pradžia, Pabaiga, Spindulys; Centras, Pradžia, Pabaiga; Centras, Pradžia, Kampas ir Centras, Pradžia, Ilgis. Kampą, ilgį, spindulį ir kryptį galima spustelėti arba įvesti. Tai veikia linijinėse atkarpose, plotuose ir išpjovose. Failai, įrašyti prieš 0.9, atsidaro taip pat. Žr. [Lankų braižymas dešimčia metodų](topic:draw-arcs-ten-methods).

### Bendras darbas

- **Matykite kitų žymeklius.** Tiesioginėje sesijoje kiekvieno asmens žymeklis rodomas lape su jo vardu ir spalva, o aplink pasirinktas žymas – brūkšninis rėmelis. Dalyviai kitame lape išvardijami su to lapo pavadinimu. Žr. [Dirbti tiesiogiai su kitais](topic:work-live).
- **Sekti asmenį ir dalyvių sąrašas.** Mygtukas {{ui:Dalyviai}} tiesioginėje sesijoje išvardija kiekvieną asmenį, įrankį, kurį jis naudoja, lapą, kuriame yra, ir kada jis paskutinį kartą redagavo. {{ui:Sekti}} perkelia jūsų vaizdą kartu su jo vaizdu, o vedėjas gali naudoti {{ui:Paprašyti visų sekti mane}}. Žr. [Sekti komandos narį tiesioginėje sesijoje](topic:follow-a-teammate).

## Visose programose

- **Pagalbiniai patarimai ir pradžios patarimas.** Užvedus pelę rodomas tekstas yra Bootstrap patarimas, o pradžios patarimą galima uždaryti.
- **Slenkamos skirtukų juostos.** Skydelio skirtukų juosta, kuri netelpa, slenka, o ne yra nukerpama.
- **Skirtukų pavadinimai.** Naršyklės skirtukas rodo `<document> - TakeoffCraft | CadCraft`.
- **Maketas.** Maketų sąrašas {{ui:Parametrai}} yra išskleidžiamasis sąrašas, rodantis pasirinktą maketą.
- **Kalba.** Pasirinkta kalba dabar pasiekia ir žodžius, kuriuos pats puslapis spausdina, pavyzdžiui, Naujas, Atidaryti ir Įrašyti. Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol gimtoji kalbos atstovas jų neperskaitys.

## Tikri apribojimai

- Ilgių rodymas, svorio ir temperatūros vienetai bei nauji nustatymai patikrinti testais ir puslapyje. Kiekvienas skydelis kiekvienu vienetu rankiniu būdu nepatikrintas.
- Dalyvių sąrašas rankiniu būdu nepatikrintas su tikra mokytojų ir mokinių grupe.
- Kalbos, išskyrus anglų, yra mašininiai juodraščiai.
- Windows diegimo programos nepasirašytos kodu (Daugiau informacijos, tada Vis tiek paleisti). macOS disko vaizdas nėra notarizuotas (dešiniuoju pelės klavišu, tada Atidaryti).

## Ankstesnis: 0.8 ir 0.8.1

Tai, kas pasikeitė TakeoffCraft 0.8 (išleista 2026-11-01) ir 0.8.1 (2026-11-02) versijose, lyginant su 0.7. Simbolių legendą dabar galima suskaičiuoti visame rinkinyje vienu metu, naują kiekių skaičiavimą galima pradėti nuo ankstesnių darbų kainų, o kiekių skaičiavimą galima patikrinti pagal tiekėjo atsargas. 0.8.1 – tai klaidų taisymo leidimas.

### Nauja

**Suskaičiuoti viską rinkinyje**

- **Legenda pažymima vieną kartą.** {{ui:Skaičiuoti viską}} įrankių juostoje nuskaito simbolių legendą: aplink simbolius ir šalia jų išspausdintus pavadinimus nubrėžkite rėmelį. Kiekvienas simbolis išvardijamas su savo paveikslėliu ir pavadinimu, o pavadinimas tampa elemento pavadinimu. Nužymėkite tai, ko nenorite, tada pasirinkite {{ui:Skaičiuoti N lapuose}}. Juosta rodo ieškomą lapą, {{ui:Atšaukti}} sustabdo vykdymą, o puslapis lieka naudojamas.
- **Visi lapai vienu paleidimu.** Kiekvienas simbolis suskaičiuojamas kiekviename atvirame lape. Lapas, nubraižytas kitu masteliu, ieškomas tuo mastelio, o simboliai randami pasukti bet kokiu statiu kampu. Paties legendos simboliai savo lape nesuskaičiuojami.
- **Peržiūra prieš pridedant.** Kiekviena suma turi kiekvieno lapo nuorodą („E-103: 4“), vedančią į tą lapą. Spustelėkite rėmelį radinyje, kad jį neįtrauktumėte, ir dar kartą spustelėkite, kad jį grąžintumėte. Atitikties lygis (nuo 50 % iki 100 %) tik filtruoja rastus radinius; iš naujo niekas neieškoma.
- **Vienas atšaukimo žingsnis.** {{ui:Pridėti N žymų}} sukuria skaičiavimo elementą kiekvienam simboliui su žyma kiekviename radinyje. Pavadinimas, kuris jau yra jūsų skaičiavimo elementas, naudojamas iš naujo. {{key:Ctrl+Z}} atšaukia visus elementus ir žymas. Tai, ką priimate, taip pat patenka į {{ui:Išmokta}}.
- **Simboliai bet kokiu kampu.** Prieš skaičiuodami pažymėkite {{ui:Simboliai bet kokiu kampu}}, kad rastumėte ir simbolius, pasuktus kampu, kuris nėra statusis. Tada paieška kiekvieną simbolį sukinėja kas 15 laipsnių, o simbolis, kuris nėra apvalus, gali užtrukti iki šešis kartus ilgiau.
- **Kas tai yra.** Paprastas simbolių atitikimas jūsų lapuose, be mokyto modelio; niekas nepalieka jūsų kompiuterio. Išgalvotame 200 lapų rinkinyje visas procesas Chrome naršyklėje greitame staliniame kompiuteryje užtruko 9,4 sekundės; tikri planų rinkiniai bus lėtesni. Žr. [Suskaičiuoti viską rinkinyje](topic:count-everything).

**Kainų atmintis iš jūsų darbų**

- **TakeoffCraft įsimena jūsų įkainius.** Įrašant kiekių skaičiavimą, kiekvienas įkainotas naudojamas elementas įsimenamas pagal pavadinimą ir tipą: medžiagos įkainis, darbo įkainis, atliekos ir vienetas. Kiekvienam pavadinimui saugomi paskutiniai 12 darbų. Ji saugoma šiame kompiuteryje greta kainų {{ui:Biblioteka}}, niekada kiekių skaičiavimo faile, ir niekur nesiunčiama.
- **Pradėkite naują kiekių skaičiavimą iš jos.** {{ui:Kainos}} įrankių juostoje kiekvienam elementui rodo paskutinio darbo įkainius, įprastus įkainius ir intervalą. {{ui:Naudoti paskutinį}} arba {{ui:Naudoti įprastas}} įkainuoja vieną elementą, o {{ui:Įkainuoti N neįkainotų elementų iš atminties}} užpildo kiekvieną elementą, kuris dar neturi kainos. Kiekvienas naudojimas – vienas atšaukimo žingsnis.
- **Senesni darbai.** {{ui:Mokytis iš ankstesnio kiekių skaičiavimo…}} įsimena įkainotus įrašyto kiekių skaičiavimo (.json) elementus.
- **Peržiūrėkite, keiskite, pamirškite.** {{ui:Visa įsiminta}} išvardija visus pavadinimus; šiukšliadėžės mygtukas pamiršta vieną, o {{ui:Išvalyti visas kainas}} pamiršta visus. Išjunkite {{ui:Įsiminti mano kainas įrašant kiekių skaičiavimą}}, kad sustabdytumėte. Kaina už vienetą niekada nededama elementui už pėdą. Žr. [Kainų atmintis iš ankstesnių darbų](topic:price-memory).

**Tiekėjo atsargos ir pristatymo terminai**

- **Tikrinimas pagal tiekėjo sąrašą.** {{ui:Tiekimas}} įrankių juostoje priima tiekėjo atsargų sąrašą ({{ui:Pridėti tiekėjo failą…}}), CSV ar skaičiuoklės failą, ir pagal jį tikrina, ko reikia kiekių skaičiavimui, įskaitant atliekas. Išsaugoma iki penkių failų. Niekas nesiunčiama ir niekas neklausia tiekėjo: failą atnešate jūs.
- **Ką rodo.** Trūkstami elementai rodomi pirmiausia: „Trūksta 120 EA“, „Pristatymo terminas 21 diena“, „Laukiama tiekimo“, „Vienetai skiriasi“, „Atsargų skaičiaus nėra“ arba „Yra sandėlyje“. {{ui:Ilgiausias norimas laukimas (dienos)}} prasideda nuo 14.
- **Užsakymų sąrašas.** {{ui:Užsakymų sąrašas (CSV)}} atsisiunčia trūkstamus elementus su trūkstamu kiekiu, tiekėju ir pristatymo terminu.
- **Kainos į biblioteką.** Jei faile yra kainų, {{ui:Kainos į biblioteką}} nustato medžiagos kainą kiekvienam bibliotekos įrašui, turinčiam tą patį pavadinimą ir vienetą. Iš naujo įkainuokite iš bibliotekos, kad jas perkeltumėte į kiekių skaičiavimą.
- **Problemų skydelyje.** Trūkumas yra įspėjimas, o ilgas laukimas – pastaba, skyriuje „Tiekėjo atsargos“. Galite priimti vieną su priežastimi, ir priežastis išsaugoma kiekių skaičiavime. Žr. [Tikrinti tiekėjo atsargas ir pristatymo terminus](topic:supplier-stock).

**DI asistentai**

- **Priemonės visiems trims.** Kai {{ui:Parametrai}} leidžiami asistentai, asistentas gali nuskaityti legendą (`legend_open`), vykdyti skaičiavimą (`legend_count_start`, tada `legend_count_status` ir `legend_count_result`) ir jį pridėti (`legend_count_add`, kurį prieš tai galima peržiūrėti). Jis gali nuskaityti įsimintas kainas (`prices_list`) ir pagal jas įkainuoti elementus (`prices_apply`, kurį prieš tai galima peržiūrėti), ir nuskaityti tiekėjo patikrinimą (`supply_check`). Tiekėjo failo pridėjimą atliekate tik jūs. Žr. [Naudoti TakeoffCraft su DI asistentais](topic:use-with-ai-assistants).

**Visose programose**

- **Kalbos.** Iš viso 54 kalbos; dešimt yra naujos (lietuvių, latvių, bosnių, maratių, telugu, albanų, afrikanerių, filipiniečių, suahili ir uzbekų). Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol gimtoji kalba jų neperžiūrės.
- **Įvesties įrenginiai.** {{ui:Parametrai}} › {{ui:Visuotiniai}} › {{ui:Įvesties įrenginiai}} nustato, ką daro jutiklinis skydelis, pelės šoniniai mygtukai, rašiklis, 3D pelė, žaidimų valdiklis ar MIDI valdiklis – visoms programoms arba vienai. Žr. [Naudoti jutiklinį skydelį, 3D pelę ar valdiklį](common:input-devices).
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} siūlo {{ui:Kelios eilutės}} (pradžia), {{ui:2 eilutės}} ir {{ui:1 eilutė}}; grupės, kurios netelpa, slenka į šoną. Žr. [Išdėstyti skydelius](common:arrange-panels).
- **Problemų skydelis.** Bendrame įspėjimų ir pastabų skydelyje dabar yra aukščiau aprašytas tiekėjo atsargų patikrinimas, šalia kitų patikrinimų.
- **Priedai.** Priedai seka jūsų paskyros sąrašą. Žr. [Priedai ir jūsų paskyros sąrašas](common:addons-basics).
- **Prijunkite savo DI.** CadCraft Studio yra centras: prijunkite asistentą vieną kartą visoms aštuoniomis programoms. Studio neturi savo DI.

### Ištaisyta 0.8.1

- **DWG klasių skyrius.** DWG failo klasių skyrius buvo nuskaitomas kaip netinkamas tipas. Tai ištaisyta TakeoffCraft ir dar keturiose kitose programose.
- **Studio gali keisti kalbą veikimo metu.** Anksčiau Studio ir jo supakuoti leidimai buvo tik anglų kalba. Tai nebuvo išbandyta darbalaukio versijoje visose platformose; praneškite, jei kalba nepasikeičia.

### Dar nėra šioje versijoje

- **Nepasirašyta kodu.** Windows gali įspėti, o Mac kompiuteryje pirmą kartą spustelėkite dešiniuoju pelės klavišu ir pasirinkite {{ui:Atidaryti}}. Parduotuvių versijos (Microsoft Store, Google Play, App Store) sustabdytos, o iPad ir iPhone versija 0.8.1 nebuvo perkurta.
- **Studio atnaujinimai.** Windows diegimo programa ir Linux paketai tikrina kartą per dieną ir pirmiausia klausia. Nešiojamasis zip tik praneša, o macOS ir APK neatsinaujina patys. 0.8 macOS .dmg seka leidimą.
- **Prijunkite savo DI.** Prijungimas vienu spustelėjimu Studio viduje, naršyklėje veikiantis DI jungtis, jūsų API raktas Studio viduje ir paskelbtas MCP paketas šioje versijoje nežadami.
- **Suskaičiuoti viską.** Reikia, kad simboliai būtų nubraižyti taip pat kaip legendoje, o simbolis, per kurį eina siena ar ilga linija, gali būti praleistas. Veidrodiniai simboliai nerandami, o lapas be mastelio, nubraižytas kitu dydžiu, ieškomas legendos dydžiu. Prieš pasitikint likusiais, patikrinkite radinius pirmame lape.
- **Tiekėjo atsargos.** Atsargų skaičiai tokie atnaujinti, kokio failo pridedate. Patikrinimas niekada neklausia tiekėjo.
- **Kalbos.** Tamilų kalbos programos juosta netelpa.

Visa kita yra [Dar nesukurta](topic:not-built-yet). Ankstesnį leidimą žr. [Kas naujo 0.7](topic:whats-new-0-7).
