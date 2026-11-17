---
title: Atėjus iš kitų kiekių skaičiavimo programų
summary: Kaip specializuotų kiekių skaičiavimo programų ir PDF žymėjimo įrankių įpročiai atitinka TakeoffCraft ir kokie skirtumai dažnai painioja.
keywords: perėjimas, migracija, sąlygos, detalės, matavimo įrankiai, žymėjimų sąrašas, kiekio susiejimas, kiekių skaičiavimo įpročiai, skirtumai, palyginimas
from: 12004ce5
---

Jei esate skaičiavę kiekius PlanSwift arba naudodami matavimo įrankius Bluebeam Revu, didžiąja dalimi TakeoffCraft bus jums pažįstama: brėžinių rinkinys, mastelis kiekvienam lapui, matuojami elementai ir įkainota bendra suma. Tai, kaip dalys susijusios tarpusavyje, kai kur skiriasi, o tos vietos nurodytos žemiau.

Jei žinote PlanSwift arba On-Screen Takeoff, pasirinkite {{ui:Kiekių skaičiavimo stalas}} meniu stilių skiltyje {{ui:Parametrai}} › {{ui:TakeoffCraft}} › {{ui:Meniu, klavišai ir pelė}}: meniu juosta su Failas, Redaguoti, Vaizdas, Mastelis, Kiekių skaičiavimas, Pozicijos, Žymėjimas ir Eksportuoti, virš eilės kiekių skaičiavimo įrankių, o mastelio išankstiniai nustatymai rodomi lapo juostoje. Žr. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse).

## Įpročiai, susieti su TakeoffCraft

| Esate įpratę | TakeoffCraft programoje |
|---|---|
| Atidaryti darbą ar projektą, kuriame saugomi planai (PlanSwift) | Atidarykite PDF failus ir `.takeoff.json` projektą greta. Projekte saugomas tik kiekių skaičiavimas; PDF failai lieka jūsų failai. |
| Žymų sąrašas su pastabomis, debesėliais ir paryškinimais (Bluebeam) | {{ui:Žymėjimas}} lapo juostoje: pastabos, debesėliai ir paryškinimai su būsena (Atvira, Atsakyta, Uždaryta), išvardyti skiltyje **Žymėjimai**, piešiami pažymėtame PDF. Žr. [Pastabos, debesėliai ir paryškinimai](topic:markups). |
| Matavimai, išsaugoti kaip žymos PDF viduje (Bluebeam) | Kiekių skaičiavimas laikomas `.takeoff.json` faile. {{ui:Pažymėtas PDF}} įrašo kopiją su nubrėžtu kiekių skaičiavimu, skirtą bendrinti; {{ui:PDF su kiekių skaičiavimu viduje}} įrašo kopiją, kuri saugo kiekių skaičiavimą, kad ją būtų galima vėl atverti TakeoffCraft programoje. |
| Kiekių pozicijos (PlanSwift), pasirinktiniai matavimo įrankiai, išsaugoti įrankių dėžėje (Bluebeam) | **Pozicijos** skiltyje {{ui:Pozicijos}}: pavadinimas, tipas, spalva, vienetas, aukštis arba gylis, atliekos, įkainiai. |
| Detalės ir surinkimai su formulėmis (PlanSwift) | Pozicijos {{ui:Surinkimas}}: komponentai su formule, kurioje naudojami kintamieji `L H A N P`. |
| Lapo mastelio nustatymas arba kalibravimas (abu) | {{ui:Iš anksto nustatytas}} sąrašas arba {{ui:Kalibruoti}} grupėje {{ui:Mastelis}}, kiekvienam lapui atskirai. {{ui:Tikrinti}} išmatuoja žinomą matmenį. |
| Vieno mastelio taikymas puslapių intervalui | Dar neįgyvendinta: nustatykite kiekvieno lapo mastelį atskirai. |
| Skirtingi mastelių vaizdai viename lape (Bluebeam) | Dar neįgyvendinta: vienas mastelis kiekvienam lapui. |
| Polilinijos ilgio ir ploto įrankiai (Bluebeam), tiesinis ir plotų kiekių skaičiavimas (PlanSwift) | {{ui:Linijinis}} ({{key:L}}) ir {{ui:Plotas}} ({{key:A}}). |
| Tiesių linijų braižymas laikant Shift | {{key:Shift}} prisitraukia prie 45° žingsnių – ta pati idėja. |
| Prisitraukimas prie brėžinio linijų | Įjungta pagal numatymą: galai, vidurio taškai, susikirtimai ir artimiausias linijos taškas; {{key:F3}} išjungia, kaip CAD programose. |
| Skaičiavimo įrankis (abu) | {{ui:Skaičiuoti}} ({{key:C}}). |
| Vaizdinė simbolių paieška (Bluebeam) | {{ui:Automatinis skaičiavimas}} ({{key:S}}): apibrėžkite vieną simbolį, peržiūrėkite, pridėkite. |
| Išpjovos arba atskaitos plotuose | {{ui:Išpjova}} ({{key:X}}) pasirinktame plote, ir apvalios išpjovos. |
| Atskaitos tiesiniuose ruožuose | Nubrėžkite ruožą tiesiai per angą ir paspauskite {{key:E}} ({{ui:Atskaita}}) angai. Žr. [Matuoti tiesinius ruožus](topic:measure-linear). |
| Lanko atkarpos polilinijoje | {{ui:Lankas}} ({{key:R}}): spustelėkite kreivės tašką, tada jos galą. |
| Žymų sąrašas su kiekių stulpeliais (Bluebeam) | {{ui:Kiekiai}} lentelė, {{ui:Pagal poziciją}} arba {{ui:Pagal lapą}}. |
| Sąmatos lentelė su kainomis (PlanSwift) | Ta pati lentelė: atliekos, medžiagų ir darbo kaina vienetui, galutinės sumos, {{ui:Bendra suma}}. |
| Eksportas į Excel | {{ui:XLSX}} su gyvomis formulėmis arba {{ui:CSV}}. |
| Escape – sustabdyti įrankį | {{key:Esc}} atšaukia ir grąžina į {{ui:Pasirinkti}}. |
| Dešinysis pelės klavišas baigti | Dešiniuoju spustelėjimu čia taip pat baigiamas ruožas arba uždaromas plotas. Dešiniojo klavišo meniu nėra. |

## Skirtumai, kurie painioja žmones

**Kiekių skaičiavimas nėra jūsų PDF viduje.** Jūsų veiksmai nekeičia PDF failų. Išsaugokite `.takeoff.json` failą ir laikykite jį kartu su brėžiniais. Pažymėto PDF siuntimas kam nors nesuteikia redaguojamo kiekių skaičiavimo: siųskite projekto failą ir originalius PDF failus arba [PDF su kiekių skaičiavimu viduje](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF atpažįstami pagal turinį, o ne pagal pavadinimą.** Peržiūrėtas lapas, išsaugotas virš senojo failo pavadinimo, TakeoffCraft yra naujas failas be mastelio ir be žymų. Jūsų senosios žymos lieka senojoje versijoje ir toliau įskaičiuojamos. Žr. [Išsaugoti ir atverti kiekių skaičiavimą](topic:save-and-reopen#when-a-pdf-has-changed).

**Žymos be mastelio neįskaičiuojamos, o ne laikomos nuliu.** Jei lape nėra mastelio, jo ruožai ir plotai neįskaičiuojami, o lentelėje rašoma „Neužbaigta“. Daugelyje programų matytumėte 0. Žr. [Nustatyti mastelį](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Nereikia spėlioti lapo dydžio.** Išankstiniai nustatymai daro prielaidą, kad PDF spausdinamas pilnu dydžiu. PDF, spausdintas pusės dydžiu arba „pritaikytas prie lapo“, reikalauja {{ui:Kalibruoti}}. Visada naudokite {{ui:Tikrinti}}.

**Viena pozicija, vienas pagrindinis tipas, daugiau – jei pasirinksite.** Pozicija yra tiesinė, plotų arba skaičiavimo, o jos tipas užrakinamas, kai ji turi žymų. Sąlyga, kuri duoda ir plotą, ir jo perimetrą, yra plotų pozicija: jos perimetras yra kintamasis `P`. Siena su ilgiu ir plotu yra tiesinė pozicija su aukščiu. Daugiasąlygei pozicijai, pavyzdžiui kambariui su grindimis, pagrindu ir durimis, pažymėkite kitus tipus skiltyje **Taip pat matuoti**: kiekvienas įkainojamas atskiroje eilutėje. Žr. [Viena pozicija, keli žymų tipai](topic:create-items#one-item-several-kinds-of-marks).

**Formulės skaičiuojamos pagal sumas.** Surinkimo formulės naudoja pozicijos sumas visuose lapuose, o ne kiekvieną ruožą atskirai. `N` (ruožų arba plotų skaičius) skirtas papildomiems priedams pagal ruožą, pavyzdžiui vienam papildomam stovui kiekvienoje sienoje.

**Perimetre įskaičiuojamos išpjovos.** Ploto `P` prideda jo angų kraštines. Žr. [Matuoti plotus su išpjovomis](topic:measure-areas#read-the-area).

**Vilkimas slenka.** Vilkimas kairiuoju klavišu lape slenka visuose įrankiuose, išskyrus {{ui:Automatinis skaičiavimas}}. Niekada nereikia perjungti į slinkimo įrankį. Ratukas keičia mastelį, bet lapo nerita.

**Atsarginė kopija, o ne debesis.** TakeoffCraft saugo jūsų darbo kopiją šioje naršyklėje ir pasiūlo ją atkurti po gedimo ([Jei kortelė arba naršyklė sustoja](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), tačiau kiekių skaičiavimą turite išsaugoti patys: {{key:Mod+S}}. Debesies saugojimas dar nepasiekiamas.

**Viskas yra naršyklėje.** Nieko diegti nereikia, o planai niekada neįkeliami. Darbalaukio programa TakeoffCraft pateikiama kartu su CadCraft Studio, kartu su kitomis septyniomis programomis.

## Dar nepasiekiama

Mastelio sritys pagal lapus dar neįgyvendintos. Pilną sąrašą ir ką daryti vietoj to žr. [Kas dar neįgyvendinta](topic:not-built-yet).
