---
title: Atidaryti DWG ar DXF brėžinį
summary: Atidarykite brėžinio failą kaip lapus (modelio erdvė ir kiekvienas maketas), pradėkite nuo brėžinio nurodyto mastelio, rodykite ar slėpkite jo sluoksnius ir įtraukite susietus brėžinius.
keywords: dwg, dxf, cad, brėžinys, atidaryti brėžinį, maketai, modelio erdvė, popieriaus erdvė, lapai, vienetai, insunits, rodinio mastelis, xref, susietas brėžinys, sluoksniai, įšaldyta, be pdf, spausdinti, be spausdinimo
from: d8c3f504
---

TakeoffCraft atveria DWG ar DXF brėžinį taip, kaip atveria PDF: jo nereikia pirma spausdinti į PDF. Skaičiavimas tiesiai iš brėžinio yra tikslus, nes brėžinys žino, kas yra kiekvienas objektas. Žr. [Skaičiuoti iš brėžinio](topic:count-from-a-drawing).

## Atidaryti brėžinį

1. Pasirinkite {{ui:Atidaryti planus}} grupėje {{ui:Failas}} arba paspauskite {{key:Mod+O}}.
2. Pasirinkite DWG ar DXF failą. Galite pasirinkti kelis, taip pat ir PDF kartu su jais.
3. Pasirinkite Atidaryti.

Brėžinio failus galite ir įmesti į TakeoffCraft, kaip PDF. Nieko neįkeliama: naršyklė skaito failą jūsų kompiuteryje.

TakeoffCraft skaito DWG nuo AutoCAD 2000 iki 2018 ir ASCII DXF nuo R12 iki 2018. Dvejetainio DXF (įrašykite jį kaip ASCII arba kaip DWG) ir failo, kuris nėra nei vienas, neatidaro ir pasako priežastį. Pažeistas failas atsidaro su tuo, kas galėjo būti perskaityta, ir apie tai pranešama; jo skaičiai gali būti neišsamūs.

## Lapai

- **Modelis** yra brėžinio modelio erdvė.
- **Kiekvienas maketas** (popieriaus erdvės skirtukas) yra lapas, pavadintas pagal savo skirtuką, skirtukų tvarka. Maketas rodo modelį per savo rodinius, kaip jis būtų spausdinamas.

Mastelis, priartinimas, slinkimas, prisitraukimas prie brėžinio linijų, žymos, pastabos, {{ui:Kalibruoti}} ir kita veikia kaip su PDF. Brėžinio lapai kiekių skaičiavime išsaugomi pagal failo pavadinimą ir turinio pirštų atspaudą, kaip PDF: atidarius tą patį failą vėl, žymos yra jo lapuose.

## Mastelis

Lapas pradedamas nuo brėžinio nurodyto mastelio:

- **Maketas** paima didžiausio rodinio mastelį. Mastelis, pavyzdžiui 1/2" = 1'-0", rodomas kaip atitinkantis paruoštą mastelį; bet koks kitas rodomas kaip „Iš brėžinio rodinio: 1" = 2.5'“. Jei makete yra rodinių kitais masteliais, didžiausias nustato lapo mastelį: kitus patikrinkite su {{ui:Tikrinti}}.
- **Modelis** paima brėžinio vienetus (coliai, milimetrai, pėdos…) kaip mastelį: „Brėžinio vienetai (coliai)“.
- **Brėžinys be vienetų** (brėžinys niekada nenurodė, ar vienetas yra colis, ar milimetras) neturi mastelio: lape rašoma „Nėra mastelio“, o matuoti jame neleidžiama, kaip PDF be mastelio. Skaičiuoti mastelio nereikia. Nustatykite jį su {{ui:Kalibruoti}}.

{{ui:Kalibruoti}}, {{ui:Tikrinti}} ir {{ui:Iš anksto nustatytas}} sąrašas bet kada keičia mastelį ir yra svarbesni už brėžinio. Paruoštų mastelių sąrašas modeliui išjungtas, nes jis neturi popieriaus formato.

## Sluoksniai

{{ui:Sluoksniai}} lapo juostoje išvardija brėžinio sluoksnius ir kiek objektų kiekviename yra šiame lape. Sluoksniai, kuriuos failas išjungė arba įšaldė, iš pradžių paslėpti. Nuimkite varnelę, kad paslėptumėte sluoksnį, arba pažymėkite paslėptą, kad jį rodytumėte: lapas perbraižomas, o paslėpti objektai neįskaičiuojami į skaičius ir į objektus, siūlomus {{ui:Matuoti brėžinį}}, nebent paprašote skaičiuoti ir paslėptų sluoksnių. {{ui:Rodyti visus}} rodo visus sluoksnius; {{ui:Grįžti prie failo sluoksnių}} atšaukia jūsų pakeitimus. Sluoksnių pasirinkimai priklauso šiam seansui, o ne kiekių skaičiavimo failui.

## Susieti brėžiniai (xref)

Brėžinys, kuris susieja kitus brėžinius, rodo juos ten, kur jie įterpti. TakeoffCraft susietą brėžinį randa tarp **atvertų failų** pagal jo failo pavadinimą: atidarykite pagrindinį brėžinį ir susietą kartu (arba vieną po kito). Kol tai nepadaryta, būsenos juostoje rašoma, kiek susietų brėžinių nerasta, kad jų piešinių trūksta, o skaičiai tai nurodo.

## Apribojimai

- Objektai, kurių TakeoffCraft negali perskaityti ar pavaizduoti (tarpiniai objektai, nežinomos klasės), skaičiavimo lange išvardijami pagal tipą; jie niekada nedingsta be jokio pranešimo.
- Labai dideli brėžiniai piešiami iš dalies, o skaičiai sustoja ties riba, apie tai pranešant. Tokiu atveju atidarykite brėžinio PDF spausdinį.
- Brėžinys piešiamas juodai ir savo spalvomis, tamsintomis balto popieriaus atžvilgiu. Spausdinimo stilių lentelės ir pieštukų priskyrimai netaikomi.
