---
title: Trikčių šalinimas
summary: Simptomai, priežastys ir sprendimai pranešimams bei netikėtumams, kuriuos galite sutikti TakeoffCraft, pateikti taip, kaip programa juos rodo.
keywords: problemos, klaidos, neveikia, taisymas, pagalba, atmesta, nematuoja, nėra mastelio, trūksta žymų, eksportas nepavyko, neprisijungus, jutiklinis
from: cd319c9b
---

TakeoffCraft paaiškina daugumą atsisakymų lango apačioje esančioje būsenos juostoje. Raskite toliau pateiktą pranešimą.

## Failų atidarymas

| Pranešimas ar simptomas | Priežastis | Sprendimas |
|---|---|---|
| PDF skaitytuvo nepavyko įkelti. Perkraukite puslapį, kad bandytumėte dar kartą. | Programos PDF skaitytuvas neįsikėlė, dažniausiai todėl, kad esate neprisijungę, o programa niekada nebuvo įrašyta naudojimui neprisijungus. | Prisijunkite ir perkraukite. Tada pasirinkite {{ui:Įrašyti neprisijungus}} ir palaukite {{ui:Paruošta neprisijungus}}; žr. [Darbas neprisijungus](common:offline). |
| (name) yra apsaugotas slaptažodžiu. Atidarykite neapsaugotą kopiją. | PDF atidarymui reikia slaptažodžio. | Paprašykite neapsaugotos kopijos arba pašalinkite slaptažodį patikimoje PDF programoje. |
| (name) negalėjo būti perskaitytas kaip PDF (…) | Failas sugadintas arba iš tikrųjų nėra PDF. | Atsisiųskite iš naujo arba įrašykite iš naujo programoje, kuri jį sukūrė. |
| (name) jau atidarytas. | Tas pats PDF (tas pats turinys) jau atidarytas. | Nieko daryti nereikia. |
| TakeoffCraft atidaro PDF ir .takeoff.json projektus. Praleista: … | Kiti failų tipai buvo atmesti. | Pirmiausia konvertuokite brėžinius į PDF. |
| Nieko neįvyksta, kai įmetate failus | Failai įmesti ne naršyklės lange arba naršyklė atidarė PDF naujame skirtuke. | Įmeskite juos ant pačio TakeoffCraft puslapio; rėmelis „Įmeskite PDF arba .takeoff.json“ rodomas, kai tai veiks. |
| Didelio komplekto atidarymas užtrunka | Kiekvienas PDF nuskaitomas visas, kad būtų atpažintas. | Palaukite, kol išnyks pranešimas „Atidaromas (name)…“. Miniatiūros užsipildo slenkant. |

## Matavimas

| Pranešimas ar simptomas | Priežastis | Sprendimas |
|---|---|---|
| Pirmiausia atidarykite PDF. | Nėra atidaryto lapo. | Atidarykite PDF. |
| Šis lapas dar neturi mastelio, todėl jo negalima išmatuoti. Pirmiausia pasirinkite nustatytą mastelį arba kalibruokite (skaičiavimai be mastelio veikia). | Tiesinės, ploto, apskritimo ir išpjovos priemonės reikalauja mastelio. | [Nustatyti mastelį](topic:set-the-scale). |
| Pirmiausia sukurkite tiesinę poziciją (pavadinkite ją skiltyje Pozicijos), tada spustelėkite lape. | Nėra tokio tipo pozicijos. | Užpildykite atsivėrusią formą {{ui:Nauja pozicija}} ir pasirinkite {{ui:Pridėti}}. |
| Pirmiausia pasirinkite poziciją kiekių skaičiavimui (Pozicijų skydelis). | Dabartinė pozicija ištrinta. | Spustelėkite poziciją po {{ui:Pozicijos}}. |
| Ruožui reikia bent dviejų taškų. | Baigėte po vieno spustelėjimo. | Spustelėkite bent du taškus. |
| Plotui reikia bent trijų taškų. | Per mažai kampų. | Spustelėkite bent tris kampus. |
| Kontūras kertasi pats su savimi, todėl jo plotas būtų neteisingas. Nubrėžkite iš naujo nekertant. | Aštuoniukės formos figūra. | Nubrėžkite kaip dvi sritis arba eikite aplink kraštą tvarkingai. |
| Tie taškai neapima jokio ploto. | Visi taškai yra vienoje linijoje. | Spustelėkite kampus, kurie apibrėžia erdvę. |
| Pirmiausia pasirinkite ploto žymą (Pasirinkimo įrankis), tada pasirinkite {{ui:Išpjova}} ir nubrėžkite skylę jos viduje. | {{ui:Išpjova}} reikia pasirinkto ploto. | Paspauskite {{key:V}}, spustelėkite plotą, tada {{key:X}}. |
| Išpjova turi būti visiškai plotų viduje. | Skylė kertasi arba išeina už kontūro. | Nubrėžkite skylę ploto viduje. |
| Išpjovos negali persidengti. | Dvi skylės persidengia. | Nubrėžkite vieną skylę aplink abi arba laikykite jas atskirai. |
| … Taškas buvo grąžintas. | Tempiamas kampas padarytų kontūrą, kertantį save, arba išstumtų skylę iš ploto. | Tempkite į vietą, kuri išlaiko galiojančią formą. |
| Spustelėkite tašką ant apskritimo krašto, toliau nuo centro. | Antras spustelėjimas buvo per arti centro. | Spustelėkite toliau. |
| Spustelėjimai slenka lapą vietoj taškų pridėjimo | Žymeklis pajudėjo daugiau nei kelis pikselius, kol mygtukas buvo nuspaustas; tai laikoma tempimu. | Spustelėkite nejudindami, ypač su jutikliniu kilimėliu. |
| Shift neprilimpa | Dedate tašką ant lanko arba braižote apskritimą. | 45° prilipimas taikomas tik tiesioms atkarpoms. |
| Taškai nukrenta ant netoliese esančios linijos | {{ui:Prilipti}} prie brėžinio linijų įjungtas. | Priartinkite, kad spustelėtumėte tarp linijų, arba paspauskite {{key:F3}}, kad išjungtumėte prilipimą. |
| Prilipimo žymė nerodoma | Prilipimas išjungtas, lapas yra nuskaitytas arba įrankis neprilimpa (Skaičiuoti, Automatinis skaičiavimas, įklijavimas). | Paspauskite {{key:F3}}; nuskaitytame lape nėra linijų, prie kurių galima prilipti. |
| Ilgis neteisingas | Mastelis neteisingas (dažnai tai PDF, pakeistas dydžiu su nustatytu mastelio pasirinkimu). | Naudokite {{ui:Tikrinti}} žinomam matmeniui, tada {{ui:Kalibruoti}}. |

## Mastelis

| Pranešimas ar simptomas | Priežastis | Sprendimas |
|---|---|---|
| Pasirinkite du taškus toliau vienas nuo kito. | Kalibravimo taškai beveik sutampa. | Kalibruokite ant ilgesnio matmens. |
| Pranešimas kalibravimo lange, pvz., „Tas atstumas negalėjo būti nuskaitytas“ | Atstumas užrašytas forma, kurios TakeoffCraft negali perskaityti. | Žr. [Ilgio, įkainio ir procento įvedimas](topic:entry-formats). |
| Šis lapas dar neturi mastelio, todėl nėra ko tikrinti. Kalibruokite jį arba pasirinkite {{ui:Iš anksto nustatytas}}. | {{ui:Tikrinti}} neturinčiame mastelio lape. | Pirmiausia nustatykite mastelį. |
| {{ui:Iš anksto nustatytas}} sąrašas pilkas | Nėra atidaryto lapo. | Atidarykite PDF. |

## Kiekiai ir formulės

| Pranešimas ar simptomas | Priežastis | Sprendimas |
|---|---|---|
| Nebaigta: … (neįskaičiuota į sumas) | Formulės klaida arba žymos lapuose be mastelio. | Žr. [Kiekių ir sąmatos skaitymas](topic:read-quantities#the-incomplete-warning). |
| +(n) be mastelio šalia pozicijos | Dalis jos žymų yra lapuose be mastelio. | Suteikite tiems lapams mastelį. |
| Formulės klaida: … | Formulės negalima apskaičiuoti. | Žr. [Formulių kalba](topic:formulas#errors). |
| Ši pozicija turi žymų, todėl jos tipo pakeisti negalima. | Tipas užrakintas, kai yra žymų. | Sukurkite naują kito tipo poziciją ir perbraižykite žymas ja. |
| Pozicija turi turėti pavadinimą. | Pavadinimo laukas buvo ištuštintas. | Įveskite pavadinimą. |
| Įveskite sumą, pvz., 12.50. / Įveskite procentą, pvz., 10 arba 7.5. | Įkainis ar atliekos neperskaityti. | Žr. [Ilgio, įkainio ir procento įvedimas](topic:entry-formats). |
| Bendra suma atrodo dvigubai | Pozicija turi savo įkainius ir komponentus, kurie neša tą pačią kainą. | Nustatykite pozicijos įkainius į 0, kai komponentai neša kainą. |
| Šios pozicijos žymos yra PDF, kurie nėra atidaryti. | Spustelėjote poziciją, kurios visos žymos yra PDF, kurių dar neatidarėte. | Atidarykite tuos PDF; jų pavadinimai išvardyti skiltyje {{ui:Lapai}}. |

## Automatinis skaičiavimas

| Pranešimas ar simptomas | Priežastis | Sprendimas |
|---|---|---|
| Tas langelis per mažas. Nubrėžkite jį aplink visą simbolį. | Langelis labai mažas. | Priartinkite ir apibrėžkite visą simbolį. |
| Tas langelis beveik tuščias. Nubrėžkite jį aplink simbolį. | Langelyje tik popierius. | Apibrėžkite patį simbolį. |
| Atitikimų nėra. Sumažinkite {{ui:Atitikimas}} slankiklį arba tiksliau apibrėžkite simbolį. | Nieko neįvertino pakankamai aukštai. | Tiksliau apibrėžkite simbolį arba patraukite {{ui:Atitikimas}} slankiklį žemiau. |
| Per daug atitikimų, įskaitant neteisingus simbolius | Panašūs simboliai įvertinami arti tikrojo. | Pakelkite {{ui:Atitikimas}} slankiklį ir spustelėkite neteisingus langelius, kad juos atmestumėte. |
| Atitikimai trūksta kituose lapuose | Tie lapai piešia simbolį kitu dydžiu arba kampu, kuris nėra 90° žingsnis. | Ieškokite tuose lapuose, nubrėždami langelį ten, arba skaičiuokite rankiniu būdu. |
| (n) lapų buvo per dideli paieškai esant tam simbolio dydžiui. | Lapas būtų per didelis darbiniu dydžiu. | Apibrėžkite didesnį simbolį arba suskaičiuokite tą lapą rankiniu būdu. |
| Paieška nepavyko: … | Fono paieška sustojo. | Bandykite dar kartą; perkraukite puslapį, jei kartojasi (pirmiausia įrašykite). Neprisijungus veikia tik tada, kai programos juostoje rodoma {{ui:Paruošta neprisijungus}}. |
| Tempimas nubrėžia langelį vietoj slinkimo | Taip veikia {{ui:Automatinis skaičiavimas}}. | Laikykite {{key:Space}} ir tempkite arba tempkite vidurinį mygtuką. |

## Įrašymas ir eksportavimas

| Pranešimas ar simptomas | Priežastis | Sprendimas |
|---|---|---|
| Dar nėra ko eksportuoti: sukurkite poziciją ir paimkite ją kiekių skaičiavimui. | Pozicijų nėra. | Pirmiausia sukurkite poziciją. |
| Atidarytuose PDF dar nėra žymų. | {{ui:Pažymėtas PDF}} neturi ko piešti atidarytuose PDF. | Atidarykite PDF, kuriuose yra žymų. |
| Šis PDF yra apsaugotas slaptažodžiu arba užšifruotas, todėl pažymėtos kopijos įrašyti negalima. … | PDF yra užšifruotas. | Eksportuokite {{ui:XLSX}} vietoje arba naudokite neužšifruotą PDF kopiją (tada jai reikia atskiro kiekių skaičiavimo, nes tai kitas failas). |
| Pažymėto PDF nepavyko įrašyti: … | Dažniausiai: esate neprisijungę, o programa nebuvo įrašyta naudojimui neprisijungus, todėl PDF rašytuvo nėra. | Prisijunkite ir vėl pasirinkite {{ui:Pažymėtas PDF}}. Kad išvengtumėte, pasirinkite {{ui:Įrašyti neprisijungus}} ir palaukite {{ui:Paruošta neprisijungus}}. |
| Atsisiųstas tik vienas pažymėtas PDF | Naršyklė užblokavo kelis atsisiuntimus vienu metu. | Leiskite kelis atsisiuntimus šiai svetainei ir eksportuokite iš naujo. |
| (file) nėra TakeoffCraft projektas (tai nėra galiojantis JSON). / Tai nėra TakeoffCraft projekto failas. | Netinkamas failas arba sugadintas. | Pasirinkite `.takeoff.json` failą. |
| Šį projektą įrašė naujesnis TakeoffCraft. Atidarykite jį ten. | Failas kilęs iš naujesnės versijos. | Atidarykite jį naujesnėje versijoje. |
| (n) žymos buvo sugadintos ir praleistos. | Dalis failo buvo sugadinta arba redaguota rankiniu būdu. | Likusi dalis atidaryta. Nubrėžkite trūkstamas žymas iš naujo arba atidarykite senesnę kopiją. |
| Žymos dingo po atidarymo iš naujo | PDF neatidaryti arba vienas iš jų pasikeitė. | Žr. [Įrašyti ir vėl atidaryti kiekių skaičiavimą](topic:save-and-reopen#when-a-pdf-has-changed). |
| Naršyklė klausia „Palikti svetainę?“ | Yra neįrašytų pakeitimų. | Likite ir įrašykite su {{key:Mod+S}}. |

## Klavišai ir pelė

| Simptomas | Priežastis | Sprendimas |
|---|---|---|
| Raidžių klavišai nieko nedaro | Žymeklis yra lauke (paieška, pozicijos redaktorius, lentelė). | Spustelėkite lape arba paspauskite {{key:Tab}}, kad išeitumėte iš lauko. |
| Ratukas priartina, o ne slenka | Ratukas visada keičia lapo mastelį. | Tempkite, kad slinktumėte. |
| Visas puslapis tapo didesnis ar mažesnis | Naršyklės mastelis ({{key:Mod+Plus}} arba {{key:Mod+Minus}}). | Paspauskite {{key:Mod+0}}. Lapo mastelį keiskite ratuku arba be modifikatorių {{key:Plus}} ir {{key:Minus}}. |
| Žymė dingo paspaudus Backspace | Backspace ištrina pasirinktą žymę, kai nebraižote. | {{key:Mod+Z}} ją grąžina. |
| Dešinysis pelės mygtukas nebaigia Mac kompiuteryje | Control-spustelėjimas ateina kaip paprastas spustelėjimas. | Naudokite dviejų pirštų spustelėjimą su įjungtu antriniu spustelėjimu arba paspauskite {{key:Enter}}. |

## Jutikliniai ekranai

Jutikliniame ekrane:

- **Bakstelėjimas** padeda tašką (arba pasirenka žymą su {{ui:Pasirinkti}}). Vienas pirštas tempimu slenka.
- **Du pirštai** priartina spaudimu aplink tašką tarp jų ir slenka, kai juda kartu. Padėjus antrą pirštą, atšaukiama tai, ką pradėjo pirmasis, todėl spaudimas niekada nepalieka taško.
- **Baigti** ruožą ar kontūrą galima **ilgu paspaudimu** (dešinysis spustelėjimas), **dviguba bakstelėjimu** arba {{ui:Baigti}} juostoje lapo apačioje. Toje pačioje juostoje yra {{ui:Galas}} (grąžina paskutinį tašką) ir {{ui:Atšaukti}}. Plotai taip pat užsidaro bakstelėję pirmąjį tašką.
- Pirštams taikiniai didesni: taškai prilimpa, užsidaro ir pasirenkami iš toliau, o kampų rankenėlės didesnės.

Įvedant ilgius reikia klaviatūros; ekrano klaviatūra veikia, kai fokusuotas laukas {{ui:Įvedimas}}.

Planšetėje klaviatūra ir pelė ar jutiklinė dalis kiekių skaičiavimą palengvina labai.

## Darbas neprisijungus

| Mygtukas ar simptomas | Priežastis | Sprendimas |
|---|---|---|
| {{ui:Nepavyko įrašyti}} | Kai kurie programos failai nebuvo atsisiųsti įrašant naudojimui neprisijungus. | Patikrinkite ryšį ir vėl pasirinkite mygtuką. |
| {{ui:Naudojimas neprisijungus negalimas}} | Privatūs langai ir kai kurie valdomi kompiuteriai blokuoja kopijas neprisijungus. | Naudokite įprastą langą arba kitą naršyklę. |
| „Įrašoma…“ niekada neprasideda | Esate neprisijungę; įrašymui reikia ryšio. | Įrašykite prisijungę. |
| Programa sena po atnaujinimo | Kopija neprisijungus yra iš ankstesnės dienos. | Prisijungę pasirinkite {{ui:Paruošta neprisijungus}}, tada {{ui:Įrašyti dar kartą (gauti naujausią versiją)}}. |
| Norite atgauti vietą | Kopija neprisijungus užima apie 6 MB. | Pasirinkite {{ui:Paruošta neprisijungus}}, tada {{ui:Pašalinti kopiją neprisijungus}}. |

Žr. [Darbas neprisijungus](common:offline).

## Vis dar įstrigote

Perkraukite puslapį, jei programa nustoja veikti. Jūsų kiekių skaičiavimas prarandamas perkrovus, nebent įrašėte, todėl, jei galite, pirmiausia įrašykite su {{key:Mod+S}}. Naršyklės klausimams žr. [Naršyklės ir kompiuteriai](common:browsers).
