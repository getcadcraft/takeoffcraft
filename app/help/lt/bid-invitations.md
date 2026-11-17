---
title: Siųsti paketą pasiūlymams
summary: Išsiųskite pasiūlymų paketą subrangovams el. paštu, leiskite jiems įrašyti kainas puslapyje be paskyros, laikykite kainas uždarytas iki atidarymo laiko ir įtraukite jas į išlyginimo lapą.
keywords: siųsti pasiūlymams, kvietimas, pasiūlymo kvietimas, pasiūlymą teikiantis, subrangovas, pakviesti, el. paštas, kainos prašymas, uždaryti pasiūlymai, pasiūlymų atidarymas, pasiūlymų diena, vėlyvas pasiūlymas, terminas, priminimas, subrangovų įrašai, draudimas, kvalifikacija, csv, prisijungti, lapų PDF
from: fb314b2c
---

{{ui:Export}} › {{ui:Bid packages and leveling…}} › {{ui:Send for bids…}} išsiunčia vieną paketą pasirinktiems žmonėms. Svetainė kiekvienam el. paštu atsiunčia nuorodą; jie atidaro puslapį, mato aprašą ir įrašo kainą kiekvienai eilutei. Kainas matote išlyginimo lape, paruoštas palyginti ([Pasiūlymų paketai ir pasiūlymų išlyginimas](topic:bid-leveling)).

:::note
Siuntimas **dar nėra atviras visiems.** Kol funkcija testuojama, ji veikia tik paskyroms, kurias įjungė CadCraft komanda; jei jūsų ne, dialogas tai nurodo. Pasiūlymo teikėjo puslapis veikia visiems išsiųstiems kvietimams.
:::

## Prieš siųsdami

- Jums reikia CadCraft paskyros su patvirtintu el. pašto adresu. Naršyklėje TakeoffCraft prašo **Connect**: atsidaro skirtukas getcadcraft.com, paspaudžiate Connect, ir tas skirtukas gauna prisijungimą, galiojantį 30 dienų, tik pasiūlymų paketams, iki uždarote TakeoffCraft skirtuką. Galite jį pašalinti bet kada saugumo puslapyje. Studio langas dar negali siųsti.
- Kiekvienai pozicijai suteikite CSI numerį: paketas — tai vieno CSI skyriaus pozicijos ([Kurkite kiekių skaičiavimo pozicijas](topic:create-items)).
- Nustatykite lapų, kuriuose yra paketo žymės, mastelį, kad teikėjams rodomi kiekiai būtų išmatuoti.

## Išsiųskite paketą

1. Po paketu pasirinkite {{ui:Send for bids…}}.
2. Įveskite pavadinimą, projektą, pasirinktinai žinutę ir **terminą** savo laiko juostoje.
3. Palikite pažymėtą **Keep prices sealed**, kad visos kainos būtų paslėptos iki **atidarymo laiko** (ne anksčiau nei terminas), arba nuimkite žymėjimą, kad kainos matytųsi, kai jos ateina.
4. Palikite pažymėtą lapų langelį, kad būtų išsiųstas lapų, kuriuose yra paketo žymės, PDF su nubraižytomis žymėmis. Jūsų kainos niekada nepatenka į siunčiamą turinį: tik pozicijų pavadinimai, CSI numeriai, kiekiai, vienetai ir lapų pavadinimai.
5. Įveskite kviečiamus žmones, po vieną eilutėje, kaip `Name <name@company.com>` arba tik adresą, arba pažymėkite žmones iš savo subrangovų įrašų. Iki 60 vienu metu, iki 100 viename pakete.
6. Pasirinkite {{ui:Send invitations}}. Kiekvienas gauna vieną paprastą laišką su jūsų vardu ir el. pašto adresu, terminu ir nuoroda; atsakymai eina jums.

Dialogas parodo, kiek išsiųsta, ir nurodo, kas praleista: jau pakviesti į šį paketą, paprašę negauti pasiūlymų kvietimų, netinkamas adresas arba viršytas siuntimo limitas.

## Ką mato pasiūlymo teikėjas

Puslapis su ilga privačia nuoroda, be prisijungimo. Jame rodoma, kas jį pakvietė, terminas, ar kainos uždarytos, jūsų žinutė ir lapų PDF, tada kiekviena eilutė su kiekiu. Kiekvienai eilutei jie įveda kainą arba pažymi **Not included**, ir gali pridėti pastabą; pastabas pateikia visam paketui ir iki 3 failų (pasiūlymas, aprašymo raštas, pažyma). Jie gali įrašyti iš naujo ir keisti kainas iki atidarymo arba **atsisakyti**, su langeliu, kuriuo prašoma CadCraft daugiau nesiųsti jiems pasiūlymų kvietimų.

## Uždaryti pasiūlymai ir atidarymas

Iki atidarymo laiko **niekas** nemato kainos, pastabos ar failo: nei jūs TakeoffCraft, nei puslapyje Bid packages. Matote, kas buvo pakviestas ir ar atsakė. Atidarymo laiku visi pasiūlymai rodomi iš karto. Pasiūlymas, įrašytas po termino, priimamas ir pažymimas **late**; išlyginimas jį vis tiek rodo, o vėlavimas yra žymė, ne sprendimas. Po atidarymo teikėjas negali keisti kainos. Be uždarymo pasiūlymas tampa galutiniu, kai tik pasiekia terminą.

## Gaukite kainas

{{ui:Get prices}} kreipiasi į svetainę ir kiekvieną atsakymą prideda prie paketo kaip pasiūlymą, pažymėtą **web**. TakeoffCraft taip pat tyliai kreipiasi kiekvieną kartą, kai atidarote dialogą, kol prisijungta. Pasiūlymas, kurio teikėjas įrašė naują versiją, atnaujinamas vietoje; pasiūlymas, kurį redagavote, lieka, kaip palikote, kol teikėjas nesiųs naujos versijos. Kiekvienas gavimas yra vienas žingsnis, kurį atšaukia {{key:Mod+Z}}. Išbrauktos eilutės ateina kaip aprašas, kurį pasiūlymas palieka, todėl išlyginimas jas užpildys jūsų kaina.

## Svetainėje

Jūsų paskyra turi du papildomus puslapius, kai galite siųsti: **Bid packages** rodo, ką išsiuntėte, kas atsakė, vėlyvus pasiūlymus ir failus, leidžia išsiųsti priminimą (naują nuorodą; sena nebeveikia), uždaryti, atidaryti iš naujo ar atšaukti paketą; **Subcontractors** saugo įrašą apie kiekvieną įmonę: kontaktus, specializacijas, kvalifikacijos atsakymus (veiklos metai, rangos garantijos pajėgumas, EMR, saugos istorija, unijinė ar atvira įmonė, nuorodos), licencijų ir draudimo galiojimo datas, pažymėtas, kai jos praėjo arba liko mažiau nei 30 dienų, ir jų ankstesnius pasiūlymus. Įrašus importuokite ir eksportuokite kaip CSV: viena eilutė kiekvienam kontaktui, su stulpeliais, kuriuos rodo eksportas; įmonė, kurią jau turite, atnaujinama, o ne kartojama.

## Kas ką mato ir kiek laiko

Pasiūlymo teikėjo kainos, pastabos ir failai eina jums ir CadCraft komandai, kuri valdo puslapį. Jie saugomi 24 mėnesius po termino, failai — 180 dienų; tada ištrinami. Teikėjo el. pašto adresas yra tas, kurį įvedėte; jis naudojamas tik kvietimui ir jam skirtam priminimui išsiųsti. Vienas adresas gauna ne daugiau kaip 3 kvietimus per dieną iš visų siuntėjų kartu, o jūs galite išsiųsti iki 200 per dieną.

## Dar nesukurta

Papildymai, sprendimo dėl pasiūlymo raštai, pasirašytas aprašo lapas kiekvienam teikėjui ir automatiniai priminimai prieš draudimo galiojimo pabaigą dar nesukurti. Žr. [Dar nesukurta](topic:not-built-yet).
