---
title: Eksportuoti sąmatą ir pažymėtą PDF
summary: Atsisiųskite sąmatą kaip XLSX sąsiuvinį su veikiančiomis formulėmis arba kaip CSV, taip pat PDF kopijas su nubrėžtu kiekių skaičiavimu.
keywords: pasiūlymas, sąmatos santrauka, eksportas, xlsx, skaičiuoklė, sąsiuvinis, csv, pažymėtas pdf, spausdinti kiekius, ataskaita, bendrinti, siųsti, legenda
from: 334f89c7
---

Eksportai yra atsisiuntimai. Jie daromi jūsų kompiuteryje iš kiekių skaičiavimo ir atidarytų PDF; niekur nieko nesiunčiama.

## Sąmata skaičiuoklės formatu (XLSX)

1. Įrankių juostoje atidarykite {{ui:Eksportuoti}} meniu ir pasirinkite {{ui:XLSX}}.
   Naršyklė atsisiunčia `(name).xlsx`. Būsenos juostoje rašoma „Eksportuota (name).xlsx (sąmata su veikiančiomis formulėmis, pagal lapą, žymas, mastelius).“ ir pridedamas įspėjimas, kai sąmata neišsami.
2. Atidarykite ją savo skaičiuoklių programoje.

Sąsiuvinyje yra keturi darbalapiai, o toliau – ataskaitos, kai jos taikomos:

| Darbalapis | Ką jame rasite |
|---|---|
| Sąmata | Eilutė kiekvienam elementui ir komponentui: kiekis, atliekos, kiekis su atliekomis, normos, medžiagos, darbas, iš viso, pastabos. Bendra suma apačioje. |
| Pagal lapą | Kiekvieno elemento kiekis kiekviename lape, su žymų skaičiumi. |
| Žymos | Kiekviena žyma: lapas, elementas, tipas, kiekis ir detalės (atkarpų ilgiai, bendri ir išpjovų plotai, perimetras). |
| Masteliai | Kiekvienas lapas, turintis mastelį ar žymas: jo mastelis, kaip jis nustatytas (parinktis arba kalibravimas pagal atstumą) ir pėdos vienam PDF vienetui. |
| Kiekių santrauka | Kiekvieno elemento kiekis, CSI numeris, žymos ir lapai, be kainų. |
| Medžiagų sąrašas | Kiekviena sudėties dalis, sudėta per visą kiekių skaičiavimą (ta pati dalis, naudojama keliuose elementuose, yra viena eilutė), su atliekomis ir medžiagų kaina bei elementais, kuriuose ji naudojama. |
| Kainos užklausa | Medžiagų sąrašas tiekėjui: kiekiai su atliekomis, tuščias vieneto kainos stulpelis, o sumos ir bendra suma užsipildo įvedus kainas. |
| Pagal skyrių | Medžiagos, darbas ir iš viso pagal CSI MasterFormat skyrių, kai elementams nurodytas {{ui:CSI numeris}}. |

Su [pasiūlymo santrauka](topic:bid-summary) sąmatos darbalapis baigiasi ir jos antkainiais (darbo sąnaudų antkainis, pardavimo mokestis, bendrosios išlaidos, pelnas, garantija ir pasiūlymas) kaip veikiančiomis formulėmis.

Sąmatos darbalapis išlaiko **veikiančias formules**: kiekis su atliekomis, suapvalintos medžiagų ir darbo sumos, kiekvienos eilutės viso ir bendra suma. Skaičiuoklių programos jas perskaičiuoja, todėl galite pakeisti normą ar atliekas skaičiuoklėje, ir sumos atsinaujins. TakeoffCraft apskaičiuoti skaičiai taip pat įrašomi į langelius ir sutampa iki cento.

Pastabų stulpelyje išvardytos kiekvieno komponento formulės, formulių klaidos, žymos lapuose be mastelio, sienos plotas ir perimetras. Kai ką nors praleidžiama, bendros sumos eilutėje rašoma „Neišsamu: žr. pastabas aukščiau“.

Sąsiuvinis patikrintas LibreOffice Calc, kuris perskaičiavo jį su tomis pačiomis sumomis. Excel jis dar neatidarytas. Išsamesnė informacija apie kiekvieną stulpelį pateikta [Eksporto stulpeliuose](topic:export-columns).

## Sąmata kaip CSV

Atidarykite {{ui:Eksportuoti}} meniu ir pasirinkite {{ui:CSV}}. Gausite `(name).csv`: tas pačias eilutes ir stulpelius kaip Sąmatos darbalapyje, kaip paprastas reikšmes (be formulių), ir bendrą sumą. Naudokite jį įklijuoti į kitą sąmatų ar apskaitos sistemą.

CSV faile yra tik sąmata; kiekiams pagal lapą ir žymų sąrašui naudokite XLSX. {{ui:Medžiagų sąrašas}} tame pačiame meniu išsaugo tik medžiagų sąrašą kaip CSV užsakymams.

## Sąmata Google Sheets

Virš kiekių lentelės **Kopijuoti Google Sheets** įdeda sąmatą į iškarpinę kaip tabuliacija atskirtą tekstą, su tomis pačiomis eilutėmis kaip CSV. Google Sheets lape spustelėkite langelį A1 ir įklijuokite. TakeoffCraft neprisijungia prie Google ir ten nieko nesiunčia.

## Trūkstamos normos ir sąmatos patvirtinimas

Eilutė su kiekiu, bet be normos, pastaboje rodo **Nėra normos**, o eksportas tokias eilutes įskaičiuoja į sumas. Kai sąmata buvo patvirtinta, eksporte nurodoma, kas ją pasirašė, kada ir už kokią sumą. Žr. [Trūkstamos normos ir sąmatos patvirtinimas](topic:sign-off-the-estimate).

## Pažymėtas PDF

1. Atidarykite PDF, kurių žymas norite nubrėžti.
2. Atidarykite {{ui:Eksportuoti}} meniu ir pasirinkite {{ui:Pažymėtas PDF}}.
   Rodoma „Rašomas pažymėtas PDF…“, tada naršyklė atsisiunčia po vieną failą kiekvienam pažymėtam PDF, pavadintą `(PDF name) (takeoff).pdf`.

Kopijoje:

- ruožai nubrėžiami linijomis jų elemento spalva,
- plotai lengvai užpildomi su vientisu kontūru, o išpjovos paliekamos atviros,
- skaičiai žymimi taškais,
- kiekvienas puslapis su žymomis gauna nedidelę legendą apatiniame kairiajame kampe: kiekvieno elemento spalvą, pavadinimą ir kiekį tame puslapyje.

Jūsų originalūs PDF nekeičiami.

Pastabos:

- Rašomi tik atidaryti PDF. Žymos PDF, kurie neatidaryti, lieka bendrose sumose, bet nenubrėžiamos; pirmiausia atidarykite tuos PDF.
- Legendos pavadinimams naudojamas standartinis PDF šriftas. Raidės, kurių jis nepajėgia parodyti, spausdinamos kaip „?“.
- Šifruoto PDF su žymomis kopijuoti negalima: „Šis PDF apsaugotas slaptažodžiu arba užšifruotas, todėl pažymėtos kopijos įrašyti negalima. Pats kiekių skaičiavimas tvarkingas; eksportuokite skaičiuoklę.“
- Pirmasis {{ui:Pažymėtas PDF}} naršyklės skirtuke įkelia PDF rašymo modulį. Neprisijungus jis veikia tik tada, kai programos juostoje rodoma {{ui:Paruošta neprisijungus}}; žr. [Darbas neprisijungus](common:offline).

:::chromium
Eksportuojant kelis pažymėtus PDF, Chrome ir Edge gali vieną kartą paklausti, ar šis tinklalapis gali atsisiųsti kelis failus. Pasirinkite Leisti, kitaip gausite tik pirmą failą.
:::

## Nieko eksportuoti?

- {{ui:XLSX}} ir {{ui:CSV}} reikia bent vieno elemento: „Dar nieko eksportuoti: sukurkite elementą ir išmatuokite jį.“
- {{ui:Pažymėtas PDF}} reikia žymų atidarytame PDF: „Atidarytuose PDF žymų dar nėra.“

## Taip pat įrašykite kiekių skaičiavimą

Eksportas yra ataskaita. Norėdami vėliau toliau dirbti su kiekių skaičiavimu, pasirinkite ir {{ui:Įrašyti kiekius}}: žr. [Įrašyti ir atidaryti kiekių skaičiavimą](topic:save-and-reopen).

Norėdami pridėti antkainius, pelną, mokestį ir garantiją bei siųsti pasiūlymą, žr. [Pasiūlymo santrauka ir pasiūlymas](topic:bid-summary).
