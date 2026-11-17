---
title: TakeoffCraft nustatymai
summary: Rodykite coliais iki 1/16, 1/8 arba 1/4, pradėkite naujas pozicijas su atliekų procentu, pasirinkite, nuo kur prasideda automatinio skaičiavimo slankiklis, prilipkite prie brėžinio linijų arba prie 45° be Shift, nustatykite, kokio pločio duris uždaro kambario užpildymas, ir pasirinkite 3D vaizdo kampo indikatorių.
keywords: nustatymai, pageidavimai, parinktys, tikslumas, trupmenos, coliai, apvalinimas, atliekos, numatytosios atliekos, automatinis skaičiavimas, slenkstis, atitikimas, slankiklis, prilipimas, 45, kampas, shift, vaizdo kubas, ašių piktograma, kampo indikatorius, 3d
from: bca3f0ed
---

Atidarykite {{ui:Settings}} su krumpliaračio piktograma programos juostoje arba {{key:Mod+,}}. Pirmasis skirtukas, {{ui:TakeoffCraft}}, turi šiai programai priklausančius nustatymus; {{ui:General}} turi nustatymus, kuriuos bendrai naudoja visos CadCraft programos (tema, skydeliai, įrankių juosta). TakeoffCraft nustatymai egzistuoja tik programoje: keičiate juos čia, o ši naršyklė juos prisimena. {{ui:Reset TakeoffCraft settings}} grąžina juos į pradinę padėtį.

## Pėdos ir coliai

Rodyti ilgius iki artimiausio **1/16"** (pradžioje), **1/8"** arba **1/4"**. Tai keičia, kaip ilgiai atrodo lape, skydeliuose, kiekiuose ir būsenos juostoje.

Suapvalinamas tik rodinys. Kiekiai, kainos ir eksportai skaičiuojami iš tikslių ilgių, o eksportuose visada rodoma 1/16".

## Pradinės atliekos

Atliekų procentas, su kuriuo prasideda kiekviena nauja pozicija: 0 % (pradžioje), 2 %, 3 %, 5 %, 7.5 %, 10 %, 15 % arba 20 %. Kiekvienai pozicijai vis tiek galite įvesti kitas atliekas pozicijos redaktoriuje arba tiesiai kiekių lentelėje. Jau turimos pozicijos išlaiko savo atliekas.

## Automatinis skaičiavimas: kur prasideda atitikimo slankiklis

Kur {{ui:Match}} slankiklis stovi, kai baigiama [Automatinio skaičiavimo](topic:auto-count) paieška, nuo 50 % iki 95 %; pradžioje – 75 %. Žemesnė reikšmė pasiūlo daugiau panašių objektų, kuriuos galite atmesti; aukštesnė – mažiau. Slankiklį galite perkelti ir per kiekvieną peržiūrą.

## Prilipti prie brėžinio linijų

Pradžioje įjungta. Matuojant ar kalibruojant, taškas netoli PDF linijos peršoka į jos galą, vidurį, susikirtimą arba artimiausią jos tašką. {{key:F3}} ir {{ui:Snap}} būsenos juostoje taip pat įjungia ir išjungia. Daugiau: [Prilipti prie brėžinio linijų](topic:snap-to-the-drawing).

## Kambario užpildymas: kokią angą uždaro

{{ui:Room fill closes openings up to}} nustato, kokio pločio durų angą ar tarpą įrankis {{ui:Room}} laiko uždarytu: nuo 3'-0" iki 8'-0", pradžioje 4'-0". Platesnė nei plačiausios jūsų durys leidžia kambariui įsiliedinti į kitą; siauresnė nei durys palieka kambarį atvirą. Žr. [Užpildyti kambarį vienu paspaudimu](topic:measure-areas#fill-a-room-with-one-click).

## Prilipti prie 45° be Shift

Pradžioje išjungta. Kai įjungta, ruožai, kontūrai, išpjovos ir vilkti kampai eina 0°, 45°, 90° arba 135° kampu nuo paskutinio taško be {{key:Shift}}; laikykite {{key:Shift}}, kad spustelėtumėte bet kokiu kampu. Būsenos juostoje tada rašoma „Prilimpa prie 45°; Shift atlaisvina kampą“. Taškas, kurį spustelėjate ant lanko kreivės, ir apskritimai niekada neprilimpa; prilimpa lanko galas.

## Skaičiavimo žymės dydis

Koks dydis yra skaičiavimo taškų: {{ui:Extra small}}, {{ui:Small}}, {{ui:Medium}} (pradžioje: dydis, koks taškams visada buvo) arba {{ui:Large}}. Dydis ekrane išlieka visuose mastelio lygiuose, o pažymėtas PDF kiekvieną tašką piešia tokio paties dydžio popieriuje, nepriklausomai nuo lapo dydžio, todėl PDF 100 % atrodo kaip ekranas. Daugiau: [Skaičiavimas rankiniu būdu](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Kampo indikatorius

Tik [3D tikrinimo vaizdui](topic:check-in-3d): {{ui:View cube}} (pradžioje: kubas viršutiniame dešiniajame kampe, kurį galima spustelėti, vilkti ir sukti), {{ui:Axis icon}} (mažas X, Y, Z žymeklis apatiniame dešiniajame kampe) arba {{ui:None}}. Pakeitimas įsigalioja iš karto ir išsaugomas šioje naršyklėje. Plokščias lapas jo niekada nerodo.

## Kelio įrankis: didžiausias tarpas, kurį jungia

{{ui:Path tool: largest gap to join}} yra tai, kiek toli viena nuo kitos gali būti dvi linijų galai ir vis dar būti vienu keliu, PDF taškais (0.05–60; pradžioje 1.5). Brėžinio linijos dažnai sustoja šiek tiek nepasiekdamos viena kitos. Didesnė reikšmė jungia daugiau; mažesnė palieka linijas atskirai. {{key:[}} ir {{key:]}} keičia ją pasirinkimo metu, o šis laukas seka. Žr. [Linijų pasirinkimas](topic:pick-the-lines).
