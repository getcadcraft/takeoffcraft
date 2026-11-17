---
title: Sąmatos sritys
summary: Žymėkite žymes pagal pastatą, aukštą ar etapą, kiekiais skaičiuokite po vieną sritį ir skaitykite kiekius bei kainas kiekvienai sričiai.
keywords: papildoma alternatyva, atimama alternatyva, bazinė kaina, alternatyvos, sąmatos sritis, sritis, pastatas, aukštas, lygis, etapas, zona, alternatyva, suskirstymas, padalijimas, tipinis aukštas, tarpinė suma, pagal sritį
from: 64f3d41c
---

Sąmatos sritis yra projekto dalis, kurią įkainuojate atskirai: pastatas, aukštas, etapas, sparnas. Kiekviena žymė gali būti vienoje sąmatos srityje. Kiekius ir sąmatą tuomet galima skaityti kiekvienai sričiai, su tarpine suma kiekvienai, o bendra darbo suma lieka visų dalių suma.

## Sukurkite sąmatos sritį

1. Viršuje skilties {{ui:Items}} srityje atidarykite sąrašą {{ui:Bid area}}.
2. Pasirinkite **Nauja sąmatos sritis…**, įveskite pavadinimą, pavyzdžiui „Pastatas A“ ar „2 aukštas“, ir pasirinkite **Sukurti**.
   Nauja sritis tampa dabartine. Būsenos juostoje rašoma „Naujos žymės bus įtrauktos į (pavadinimas). Žymės kitose sąmatos srityse pritemdytos.“

## Kiekiavimas srityje

Kol sąraše pasirinkta sąmatos sritis, kiekviena nauja žymė patenka į ją: ruožai, plotai, apskritimai, skaičiai, žymės, kurias prideda {{ui:Auto count}}, ir tai, ką įklijuojate. Žymės kitose srityse ir be srities lape pritemdomos, kad matytumėte, kas kur priklauso.

Pasirinkite **No bid area** sąraše, kad skaičiuotumėte be srities; tuomet nieko nepritemdoma.

:::tip
Tipiniai aukštai: suskaičiuokite 2 aukštą, pasirinkite jo žymes ({{key:Mod+A}} lape), nukopijuokite, sąraše pasirinkite 3 aukštą ir įklijuokite. Kopijos patenka į 3 aukštą. Kai aukštai vienodi ir jų atskirti nereikia, vietoj to [tipinė grupė](topic:typical-groups) skaičiuoja vieną aukštą kelis kartus.
:::

## Perkelkite žymes į kitą sritį

Pasirinkite vieną žymę arba kelias ({{key:Shift}} + spustelėjimas arba {{key:Mod+A}}). Skiltyje **Selected mark** (arba **Selected marks**) pasirinkite sritį laukelyje {{ui:Bid area}}. Būsenos juostoje rašoma „3 žymės perkeltos į 2 aukštą.“ Tai vienas anuliavimo žingsnis.

## Pervardinkite, perrikiuokite ar ištrinkite

Pasirinkite **Manage bid areas…** sąraše. Perrašykite pavadinimą, kad jį pervardintumėte, naudokite rodykles tvarkai keisti (lentelės ir darbaknygė ją seka), arba ištrinkite šiukšliadėže. Ištrynus sąmatos sritį, jos žymės išlieka: tuomet jos nepriklauso jokiai sričiai. {{key:Mod+Z}} atšaukia kiekvieną pakeitimą.

## Skaitykite kiekius pagal sritį

Lentelėje {{ui:Quantities}} pasirinkite {{ui:By area}} (rodomas, kai kiekių skaičiavime yra sąmatos sritis). Kiekviena sritis rodo jos pozicijas su kiekiu, vienetu ir suma, tada tarpinės sumos eilutę. Žymės be sąmatos srities pateikiamos paskutinės kaip **No bid area**. Spustelėkite pozicijos eilutę, kad ją paryškintumėte ir padarytumėte tą sritį dabartine.

Surinkimai skaičiuojami kiekvienai sričiai pagal tos srities sumas. Formulė, kuri apvalina į viršų, pavyzdžiui `ceil(L / 4)`, gali duoti šiek tiek daugiau srityse kartu nei visam darbui, kaip būtų įkainojant sritis atskirai.

## Alternatyvos: bazinė kaina plius pridėjimai ir atimimai

Sąmatos sritis gali būti **alternatyva**: darbas, kurį savininkas gali pridėti prie pasiūlymo arba išbraukti iš jo. Skiltyje **Manage bid areas…** kiekviena sritis turi sąrašą šalia pavadinimo:

| Pasirinkimas | Ką daro |
|---|---|
| {{ui:Base bid}} | Įeina į pasiūlymą, kaip įprasta. |
| {{ui:Add alternate}} | Įkainojama atskirai ir **neįtraukiama į bazinę kainą**: kilimo atnaujinimas, papildomas stogelis. |
| {{ui:Deduct alternate}} | Įeina į bazinę kainą ir siūloma kaip atskaita: „išbraukti stogelį“. |

Alternatyvos darbą suskaičiuokite į jos sąmatos sritį kaip bet kurią kitą sritį. Kai kiekių skaičiavime yra alternatyva:

- Lentelės {{ui:Quantities}} antraštėje rašoma **Base bid** vietoj Job total: visas kiekių skaičiavimas be pridėjimo alternatyvų.
- {{ui:By area}} baigiasi bazine kaina ir eilute kiekvienai alternatyvai: **+$300.00** pridėjimui, **−$1,050.00** atimimui.
- Alternatyva įkainoja tik pozicijas, turinčias jos žymių, su jų surinkimais, todėl kitos pozicijos surinkimo dalis neįsisuka.

Eksportuose CSV baigiasi bazine kaina ir alternatyvomis, o darbaknygėje atsiranda lapas **Alternatyvos**: bazinė kaina, kiekvienos alternatyvos pozicijos ir jos pokytis, bei bazinė kaina be visų pridėjimo alternatyvų.

## Eksporte

{{ui:XLSX}} prideda lapą **By bid area**: kiekvienos srities pozicijas ir komponentus su kiekiu, kiekiu su atliekomis, medžiaga, darbu ir suma, tarpinę sumą kiekvienai sričiai (`SUM` formulė) ir **All bid areas** gale. Lapas **Marks** gauna stulpelį **Bid area**. Kiekių skaičiavimas be sąmatos sričių eksportuojamas kaip anksčiau. Žr. [Eksporto stulpeliai](topic:export-columns).

Sąmatos sritys išsaugomos projekto faile kartu su žymėmis.
