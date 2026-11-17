---
title: Kas dar nesukurta
summary: Kiekių skaičiavimo funkcijos, kurių šioje versijoje nėra, ir ką šiandien daryti vietoj jų.
keywords: apribojimai, trūksta, dar ne, veiklos planas, planuojama, apėjimo būdas, kiekvienam ruožui, debesis, darbalaukis
from: 94ff90d0
---

TakeoffCraft kuriamas. Šis sąrašas nurodo, ko dabartinė versija nedaro, ir kaip vis tiek atlikti darbą.

## Matavimas

| Dar nesukurta | Vietoj to, šiandien |
|---|---|
| Taško įterpimas į ruožo ar kontūro vidurį | Ištrinkite žymą ir nubrėžkite ją iš naujo. |
| Atranka rėmeliu | {{key:Shift}} + spustelėkite kiekvieną žymą arba {{key:Mod+A}} visoms lapo žymoms. Žr. [Kopijuoti, įklijuoti ir dubliuoti žymas](topic:copy-paste). |
| Įklijuotos kopijos sukimas, atspindėjimas ar keitimas mastelio | Įklijuokite ją ant lapo tuo pačiu mastelių ir ta pačia orientacija; likusią dalį nubrėžkite ranka. |
| Mastelio nuskaitymas iš skenuoto lapo ar iš grafinės mastelio juostos | Pasirinkite paruoštą mastelį arba kalibruokite pagal juostos ilgį. |
| Daugiau nei vienas mastelis viename lape (detalių sritys, padidinti planai) | Išmatuokite detalę pagal lapo mastelį, o detalę skaičiuokite atskirame padidintame lape, jei rinkinyje toks yra. |

## Pozicijos ir kainos

| Dar nesukurta | Vietoj to, šiandien |
|---|---|
| Surinkimo formulės, naudojančios kitų tipų žymas (patalpos pozicijos durys jos aukšto formulėse) | Formulės naudoja pagrindinio tipo sumas; kitų tipų žymas įkainokite atskiose eilutėse. |
| Surinkimo formulės, skaičiuojamos kiekvienam ruožui atskirai | Formulės naudoja pozicijos sumas; kiekvieno ruožo papildomiems kiekiams naudokite `N`. |
| Formulės, naudojančios kitos pozicijos kiekius | Pakartokite matavimą toje pozicijoje arba apskaičiuokite skaičiuoklės eksporte. |
| Brigados surinkimo komponentams arba darbo diena, kitokia nei 8 valandos | Priskirkite brigadą pozicijai; kitokios dienos trukmės brigados dienas skaitykite kaip brigados valandas ÷ jūsų darbo diena. |
| Žymėjimai, išskyrus pastabas, debesis ir paryškinimus (rodyklės, matmenys, antspaudai), arba atsakymai į pastabas | Įrašykite tai pastabos tekste; keiskite jos būseną, kai klausimas išspręstas. |
| Kainų biblioteka, kurią naudoja komanda arba kuri laikoma jūsų paskyroje | Biblioteka laikoma šioje naršyklėje: eksportuokite ją kaip CSV ir importuokite kitame kompiuteryje. |
| Sričių paketai, peržiūrėti patyrusių sąmatininkų | Kiekvienas paketas yra pradinis: prieš kainuodami patikrinkite jo prielaidas pagal savo darbą ir gaminius. Žr. [Sričių paketai](topic:trade-packs). |
| Kainos sričių paketuose | Paketai atneša tik surinkimus: nustatykite savo įkainius arba importuokite savo kainų sąrašą kaip CSV. |
| Kiekių skaičiavimo pervadinimas | Pavadinimas paimamas iš pirmojo PDF; pervadinkite atsisiųstus failus. |
| Lapų pavadinimų įvedimas rankiniu būdu | Lapai pavadinami pagal PDF puslapių etiketes; ieškokite pagal failo pavadinimą ir puslapį. |

## Brėžiniai (DWG ir DXF)

| Dar nesukurta | Vietoj to, šiandien |
|---|---|
| Spausdinimo stilių lentelės, pieštukų priskyrimai ir CTB failai brėžinio lapuose | Brėžinys piešiamas juodai arba savo spalvomis, tamsintomis popieriui; linijų storis imamas iš brėžinio. |
| Dvejetainio DXF arba DWG, senesnio nei AutoCAD 2000, atidarymas | Įrašykite jį kaip ASCII DXF arba naujesnį DWG. |
| Susieto brėžinio (xref) paieška pagal aplanką, kuriame jis yra | Atidarykite ir susietą brėžinį kartu su pagrindiniu: jis randamas pagal failo pavadinimą tarp atvertų failų. |
| 3D polilinijų, tinklų, kietųjų kūnų ir sričių matavimas | Suskaičiuokite juos pagal sluoksnį ir tipą arba išmatuokite plano vaizdą įrankiais Linijinis ir Plotas. |
| Tekstas pažymėtame PDF iš brėžinio, parašyto ne lotyniškais rašmenimis | Simboliai, kurių Helvetica šriftas neturi, pažymėtame PDF spausdinami kaip „?“; ekrane rodomas brėžinys nepakinta. |
| Brėžinio perdavimas kitai programai iš lapų juostos | Atidarykite tą patį failą toje programoje. |
| Brėžinys, kuriame yra kiekių skaičiavimas, kaip {{ui:PDF su kiekių skaičiavimu viduje}} daro PDF atveju | {{ui:Įrašyti kiekius}}: `.takeoff.json` vėl atsidaro tame pačiame brėžinyje, surandamas pagal turinį. |
| PDF pagrindai, paveikslėliai ir OLE objektai, įdėti į brėžinį | Paveikslėliai rodomi tik kaip rėmelis. Atidarykite patį PDF pagrindą kaip lapą. |

## Automatinis skaičiavimas

| Dar nesukurta | Vietoj to, šiandien |
|---|---|
| Simbolių paieška lape, kuriame nurodytas kitoks mastelis | Nustatykite lapui jo mastelį arba ieškokite jo rėmeliu, nubrėžtu ten. |
| Veidrodinių simbolių paieška | Suskaičiuokite juos rankiniu būdu arba ieškokite iš naujo, apibrėždami veidrodinį simbolį rėmeliu. |

## Failai ir bendrinimas

| Dar nesukurta | Vietoj to, šiandien |
|---|---|
| Vienas PDF, kuriame rodomos ir žymos, ir yra kiekių skaičiavimas | {{ui:Pažymėtas PDF}}, kad žmonės matytų žymas; {{ui:PDF su kiekių skaičiavimu viduje}}, kad vėl atidarytumėte TakeoffCraft. |
| Kiekių CSV pagal lapus ar žymas | Naudokite {{ui:XLSX}}: jo darbalapiai Pagal lapą ir Žymos juos turi. |
| Saugojimas debesyje | Dar nepasiekiama. Įrašykite projekto failus savo kompiuteryje ir padarykite jų atsargines kopijas. |
| Atskira TakeoffCraft darbalaukio programa | Nuo 0.5 versijos darbalaukio programa yra CadCraft Studio, kurioje visos aštuonios programos įdiegiamos kartu. TakeoffCraft taip pat veikia naršyklėje. |

## Ekranas ir įvestis

| Dar nesukurta | Vietoj to, šiandien |
|---|---|
| Dešiniuoju pelės klavišu (arba ilgu paspaudimu) atsidarantis meniu | Naudokite įrankių juostą, skydelius ir klavišus. Ilgas paspaudimas užbaigia ruožą ar kontūrą. |
| Vaizdo sukimas | PDF jau pasukti puslapiai rodomi tiesiai. |

## 3D vaizdas

| Dar nesukurta | Vietoj to, šiandien |
|---|---|
| Žymų braižymas ar redagavimas 3D | Grįžkite į lapą ({{key:3}}), kad braižytumėte; pasirinkimas ir trynimas 3D veikia. |
| Sudėtų aukštų, nubrėžtų skirtingose puslapių vietose, suderinimas | Sudėkite aukštus, nubrėžtus panašiai; kitus tikrinkite po vieną lapą. |
| Stulpų, kurių dydis panašus į skaičiuojamo objekto, skaičiavimas | Kiekvienas lapo stulpas yra to paties dydžio; jis žymi, kur yra skaičiavimas, o ne ką jis reiškia. |

## Pasiūlymai

| Dar nesukurta | Vietoj to, šiandien |
|---|---|
| Priedai jau išsiųstam paketui, apdovanojimo raštai, kiekvieno dalyvio pasirašomas apimties lapas | Išsiųskite naują paketą ir apdovanojimą parašykite patys. [Išsiųsti paketą pasiūlymams](topic:bid-invitations) aprašo, kas jau įdiegta. |
| Kvietimų teikti pasiūlymus siuntimas iš bet kurios paskyros: kol tai bandoma, laiškai išoriniams dalyviams išjungti, išskyrus paskyras, kurias CadCraft komanda įjungė | Atsisiųskite {{ui:Aprašo CSV}}, išsiųskite jį patys el. paštu ir įveskite pasiūlymus. |
| Pasiūlymų paketų siuntimas iš Studio lango | Siųskite iš TakeoffCraft naršyklėje. |
| Alternatyvos pasiūlymo srities perskaičiavimas pasirinktu pasiūlymu | Alternatyvos ir pasiūlymo srities tarpinės sumos naudoja jūsų kainas; alternatyvą koreguokite rankiniu būdu. |
| Automatiniai priminimai prieš subrangovo draudimo ar licencijos galiojimo pabaigą | Data pažymima Subrangovų puslapyje, kai ji praėjusi arba likus 30 dienų; patikrinkite ją kviesdami. |

## Skydeliai

| Dar nesukurta | Vietoj to, šiandien |
|---|---|
| {{ui:Kiekiai}} lentelės perkėlimas | Perkeliami tik skydeliai {{ui:Lapai}} ir {{ui:Pozicijos}}. Žr. [Išdėstyti skydelius](common:arrange-panels). |

## Skaičiuoklės

XLSX darbaknygė patikrinta LibreOffice Calc, kuris perskaičiavo kiekvieną sumą iki to paties cento kaip TakeoffCraft. Excel dar nebuvo atidaryta. Jei skaičiuoklių programa rodo ko nors netikėto, CSV eksportas pateikia tą pačią sąmatą kaip paprastas reikšmes.
