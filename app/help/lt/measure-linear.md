---
title: Tiesinių ruožų matavimas
summary: Imkite sienų, vamzdžių, apdailos ir kitus ilgius kaip ruožus su tiesiomis atkarpomis, lankais ir Shift 45 laipsnių prilipimu.
keywords: tiesinis, ilgis, ruožas, polilinija, sienos, lf, tiesinės pėdos, lankas, kreivė, 45 laipsniai, ortogonalus, prilipimas, atkarpos, polilinijos ilgis, atskaita, anga, durys, tarpas, įvedimas, įvestas, koordinatės, atstumas, tiesioginis atstumas, polinis
from: c669deff
---

Tiesinė pozicija matuoja ilgį. Kiekvienas ruožas yra taškų grandinė: tiesios atkarpos ir lankai, kai įjungiate lankų režimą. Pozicijoje gali būti bet koks ruožų skaičius bet kuriuose lapuose.

Prieš pradedant: lapui reikia mastelio ([Nustatyti mastelį](topic:set-the-scale)) ir jums reikia tiesinės pozicijos ([Kurti kiekių pozicijas](topic:create-items)).

Vektoriniame PDF jūsų spustelėjimai prilimpa prie paties brėžinio linijų: galų, vidurio taškų ir susikirtimų ([Prilipimas prie brėžinio linijų](topic:snap-to-the-drawing); {{key:F3}} jį išjungia).

## Nubrėžti ruožą

1. Spustelėkite tiesinę poziciją po {{ui:Pozicijos}}.
2. Įrankių juostoje pasirinkite {{ui:Linijinis}}, arba paspauskite {{key:L}}.
3. Spustelėkite ruožo pradžią.
4. Spustelėkite kiekvieną jo kampą.
   Būsenos juostoje rodoma „Ilgis“ (dabartinis ruožas iki žymeklio) ir „atkarpa“ (braižoma atkarpa), pėdomis ir coliais.
5. Baikite ruožą: dukart spustelėkite paskutinį tašką, paspauskite {{key:Enter}} arba spustelėkite dešiniuoju mygtuku.
   Ruožas nubrėžiamas pozicijos spalva ir tampa pasirinkta žyme. Pozicijos ilgis sąraše {{ui:Pozicijos}} ir lentelėje {{ui:Kiekiai}} padidėja.

Įrankis lieka įjungtas {{ui:Linijinis}}, todėl galite iškart pradėti kitą ruožą. Paspauskite {{key:Esc}}, kad grįžtumėte į {{ui:Pasirinkti}}.

Braižant:

- {{key:Backspace}} (arba {{key:Delete}}) pašalina paskutinį tašką.
- {{key:Esc}} išmeta nebaigtą ruožą.
- Vilkimas slenka lapą, ratukas keičia mastelį, be taškų pridėjimo.

:::mac
Mac jutiklinėje plokštėje dešinysis spustelėjimas yra dviejų pirštų spustelėjimas (įjunkite antrinį spustelėjimą sistemos nustatymuose, skiltyje Jutiklinė plokštė). TakeoffCraft skaito tik antrinį mygtuką, todėl spustelėjimas su Control gali būti priimtas kaip paprastas spustelėjimas ir pridėti tašką. Dukart spustelėjimas arba {{key:Enter}} visada baigia.
:::

:::touch
Jutikliniame ekrane palieskite, kad padėtumėte taškus, vilkite vienu pirštu, kad slinktumėte, ir suspauskite dviem pirštais, kad keistumėte mastelį. Baikite ilgu paspaudimu, dvigubu palietimu arba {{ui:Baigti}} juostoje po lapu ({{ui:Galas}} grąžina paskutinį tašką). Žr. [Gedimų šalinimas](topic:troubleshooting#touch-screens).
:::

## Tiesios linijos 45° žingsniais

Padėdami tašką, laikykite {{key:Shift}}. Atkarpa nuo paskutinio taško prilimpa prie artimiausios 0°, 45°, 90° arba 135° krypties, išlaikydama ilgį, kurį nuvilkote išilgai jos. Būsenos juosta primena: „Shift prilipdo prie 45°“.

Lankų režime tai taikoma lanko pabaigai: lanko styga eina 45° žingsniais nuo jo pradžios. Taškas, kurį spustelėjate ant kreivės, niekada neprilimpa.

## Lankai ir lenktos sienos

1. Braižydami ruožą, padėkite tašką, kur prasideda kreivė.
2. Įjunkite lankų režimą: įrankių juostoje pasirinkite {{ui:Lankas}} arba paspauskite {{key:R}}. Mygtukas lieka nuspaustas.
3. Spustelėkite bet kurį tašką ant kreivės, maždaug jos viduryje.
   Būsenos juostoje pridedama „(lankas: spustelėkite, kur jis baigiasi)“, o peržiūra išsilenkia per jūsų tašką.
4. Spustelėkite, kur kreivė baigiasi.
   Lankas pridedamas. Jo ilgis – tikslus lanko ilgis, o ne trumpų stygų grandinė.
5. Norėdami toliau braižyti lankus, spustelėkite kitą kreivės tašką ir jos pabaigą, arba dar kartą paspauskite {{key:R}}, kad grįžtumėte prie tiesių atkarpų.

{{key:Backspace}} arba {{key:Esc}} pirmiausia atmeta laukiantį tašką kreivėje; paspauskite dar kartą, kad pašalintumėte taškus įprastai.

## Ilgių ir koordinačių įvedimas

Po pirmo taško galite įrašyti, kur bus kitas, o ne spustelėti. Įveskite skaitmenį, `@` arba `#`: būsenos juostoje atsidaro langelis {{ui:Įvedimas}} su tuo, ką įvedėte. Paspauskite {{key:Enter}}, kad padėtumėte tašką; langelis lieka atidarytas kitam.

| Įvedimas | Kitas taškas eina |
|---|---|
| `12'6"` | 12'-6" nuo paskutinio taško, žymeklio kryptimi (nurodykite kryptį, tada įveskite ilgį) |
| `12'6"<45` | 12'-6" kampu 45°, skaičiuojant prieš laikrodžio rodyklę nuo ekrano dešiniosios pusės (`<90` – aukštyn, `<-90` – žemyn) |
| `@6',-4'` | 6' į dešinę ir 4' žemyn nuo paskutinio taško |
| `6',4'` (arba `#6',4'`) | 6' į dešinę ir 4' aukštyn nuo pirmo šio ruožo taško |

Ilgiai įvedami kaip visur TakeoffCraft ([Įvedimo formatai](topic:entry-formats)): `12'-6 1/2"`, `12.5` (pėdos), `30"`, `3.2 m`. „Dešinėn“ ir „aukštyn“ – kaip matote lapą, taip pat kai PDF puslapis pasukamas.

{{key:Enter}} tuščiame langelyje baigia ruožą, kaip {{key:Enter}} lape; {{key:Esc}} uždaro langelį ir palieka ruožą tęsiamą. Įvesti taškai taisyklėmis prilygsta spustelėjimams: atskaitos, lankai ir ploto uždarymas veikia visi. Tas pats langelis veikia {{ui:Plotas}} ir {{ui:Išpjova}}; po apskritimo centro jis įveda spindulį.

## Ruožo dalies atskaitymas

Sienos ruožas, einantis pro duris ar parduotuvės vitriną, gali būti nubrėžtas tiesiai ir vis tiek skaičiuoti tik sieną: atkarpos per angą yra atskaitos. Jos nubrėžiamos brūkšniuotai ir plonai ir neskaičiuojamos.

Braižant:

1. Padėkite tašką, kur prasideda anga.
2. Įrankių juostoje pasirinkite {{ui:Atskaita}} arba paspauskite {{key:E}}. Mygtukas lieka nuspaustas, o būsenos juostoje rašoma, kad kitos atkarpos yra atskaitos.
3. Spustelėkite, kur baigiasi anga. Atkarpa nubrėžiama brūkšniuotai; būsenos juostos „Ilgis“ jos neįskaito.
4. Dar kartą paspauskite {{key:E}} ir tęskite palei sieną.

Nubrėžę pasirinkite ruožą. Skiltyje **Pasirinkta žymė** kiekviena atkarpa turi langelį {{ui:Atskaita}}: pažymėkite, kad atskaitytumėte tą atkarpą, arba nuimkite žymę, kad ją vėl skaičiuotumėte. Kiekvienas pakeitimas – vienas anuliavimo žingsnis.

Ruožas visada palieka bent vieną skaičiuojamą atkarpą. Tada skydelyje rodoma **Atskaitos** (atskaitytas ilgis) ir **Nubrėžta** (visas ruožas); **Ilgis**, pozicijos kiekis, sienos plotas ir kainos visi naudoja ilgį be atskaitų. 3D tikrinimo vaizdas palieka tarpą sienoje, pažymėtame PDF atskaitos brūkšniuojamos, o eksportuotame lape **Žymės** jos išvardytos.

Kampo perkėlimas išsaugo atskaitas. Pridėjus ar pašalinus taškus (nubrėžiant ruožą iš naujo), jos pradedamos be atskaitų.

## Ruožo detalės

Pasirinkite {{ui:Pasirinkti}} ({{key:V}}) ir spustelėkite ruožą. Dešinėje, skiltyje **Pasirinkta žymė**, rodoma:

- pozicija, kuriai jis priklauso (pasirinkite kitą tiesinę poziciją sąraše, kad perkeltumėte ruožą ten),
- lapas,
- **Ilgis** pėdomis ir coliais bei LF,
- **Atkarpų** skaičius ir **Sienos plotas**, kai pozicija turi aukštį,
- kiekvienos atkarpos ilgis, po lankų – „(lankas)“, ir jos langelis {{ui:Atskaita}}.

Lape kiekviena pasirinkto ruožo atkarpa pažymėta jos ilgiu.

## Ruožo taisymas

- **Perkelti tašką**: pasirinkite ruožą, tada vilkite vieną iš jo kvadratinių kampinių valdiklių. Laikykite {{key:Shift}}, kad perkeliama atkarpa prilimpų prie 45° žingsnių. Lankas išlaiko savo išlinkį.
- **Išlenkti lanką**: pasirinktas ruožas rodo apvalų valdiklį kiekvieno lanko viduryje. Vilkite jį: lankas eina per vietą, kur paleidžiate, todėl jis išsilenkia labiau, mažiau arba į kitą pusę. Įvilktas ant tiesės tarp savo galų, jis tampa tiesia atkarpa. {{key:Mod+Z}} tai anuliuoja („Išlenkti lanką“).
- **Naikinti ruožą**: pasirinkite jį ir paspauskite {{key:Delete}}, pasirinkite {{ui:Naikinti}} įrankių juostos meniu {{ui:Daugiau}} arba {{ui:Naikinti žymę}} skydelyje.
- **Anuliuoti**: {{key:Mod+Z}}; **perdaryti** – {{key:Mod+Y}}.

Ruožo viduryje dar negalite įterpti taško. Ištrinkite ruožą ir nubrėžkite jį iš naujo.

## Sienos plotas

Tiesinei pozicijai nurodykite {{ui:Aukštis}} (pavyzdžiui, `9'-0"`). Tada rodoma **Sienos plotas (A)** = ilgis × aukštis, SF (arba m² metrinei pozicijai), o sienos plotas patenka į skaičiuoklės eksporto pastabų stulpelį. Naudokite jį surinkimuose plokštėms, dažams ar izoliacijai: žr. [Surinkimai ir formulės](topic:assemblies).
