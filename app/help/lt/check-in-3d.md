---
title: Patikrinkite kiekių skaičiavimą 3D
summary: Pamatykite atidaryto lapo sienas, perdangas ir skaičiavimus, stovinčius ant brėžinio, apsukite juos aplink ir spustelėkite vieną, kad pažymėtumėte jo žymę.
keywords: png, paveikslėlis, nuotrauka, ekrano nuotrauka, sustatyti, aukštai, lygiai, aukštis, glb, gltf, eksportas 3D, sienos storis, pagrindo aukštis, anga, durų viršus, 3d, trys d, patikrinti, rodinys, sienos, sienos aukštis, perdanga, gylis, tūris, orbita, modelis, pasirinkimas, izometrinis, perspektyva
from: fb16b4f7
---

3D rodinys yra patikrinimas, o ne antras brėžinys: jis pastato ekrane esantį lapo kiekių skaičiavimą ant paties lapo, todėl trūkstama siena, dvigubai įskaičiuota perdanga ar klaidinga skaičiavimo žymė matosi iš karto.

Prieš pradėdami: lapui reikia mastelio ([Nustatykite mastelį](topic:set-the-scale)). Aukščiai ir gyliai reikalauja tikrų pėdų, todėl lape be mastelio {{ui:3D}} tai praneša ir lieka plokščiame lape.

## Atidarykite 3D rodinį

1. Parodykite lapą, kurį norite patikrinti.
2. Juostoje, kurioje rodomas lapo pavadinimas ir mastelis, pasirinkite {{ui:3D}}, arba paspauskite {{key:3}}.
   Pirmą kartą 3D rodinys užsikrauna akimirką. Lapas nupieštas ant žemės, o kiekių skaičiavimas stovi ant jo kiekvienos pozicijos spalva.
3. Norėdami grįžti, pasirinkite {{ui:3D}} dar kartą, {{ui:Back to the sheet}} arba paspauskite {{key:3}}. Pasirinkus piešimo įrankį (Linear, Area, Count ir kt.) taip pat grįžtama, nes žymės piešiamos plokščiame lape.

Rodomas lapas ekrane; keiskite lapus lapų sąraše arba su {{key:PageDown}} ir {{key:PageUp}}, o 3D rodinys seka. Norėdami matyti kelis aukštus vienu metu, sudėkite juos į krūvą (žemiau).

## Ką matote

| Žymė | 3D |
|---|---|
| Linijinis ruožas, pozicija su aukščiu | Siena tokio aukščio išilgai ruožo. Kreivi ruožai seka kreivę. |
| Linijinis ruožas, pozicija be aukščio | Linija lape. Suteikite pozicijai aukštį skiltyje **Item**, kad ji pastatytų. |
| Plotas, pozicija su gyliu | Perdanga tokio gylio, su atviromis išpjovomis. |
| Plotas, pozicija be gylio | Plona 2" plokštė, kad ji vis tiek matytųsi. |
| Skaičius | Mažas stulpelis kiekviename suskaičiuotame taške. |

Aukštis yra linijinės pozicijos laukas {{ui:Height}}, o gylis — ploto pozicijos laukas {{ui:Depth}}, skiltyje **Item** (žr. [Kurkite kiekių skaičiavimo pozicijas](topic:create-items)). Pakeiskite jį, ir 3D rodinys atsinaujina iš karto. Pastaba po lapo pavadinimu nurodo, ką lape rodo, pavyzdžiui „Šis lapas 3D: 2 sienos, 1 perdanga, 3 skaičiai“, ir kiek ruožų ar plotų neturi aukščio ar gylio. Paspaudimai pro ją praeina į rodinį.

Skaičiai 3D nesikeičia: sienos plotas yra tikslus jos ilgis, padaugintas iš aukščio, o perdangos tūris — grynasis plotas (kontūras minus išpjovos, lankai tikslūs), padaugintas iš gylio. Kreivės ekrane rodomos tik kaip trumpos tiesios atkarpos.

## Apžvelkite

| Veiksmas | Ką daro |
|---|---|
| Vilkti arba vilkti vidurinį mygtuką | Sukti aplink kiekių skaičiavimą. |
| {{key:Shift}} + vilkti arba vilkti dešinį mygtuką | Slinkti. |
| Pelės ratukas | Priartinti ir nutolinti pagal žymeklį. |
| Dviejų pirštų braukimas jutikliniame kilimėlyje | Sukti ({{key:Shift}} slenka). Suspaudimas priartina. |
| {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}, {{ui:Bottom}} | Standartiniai vaizdai, įrėminti pagal kiekių skaičiavimą. 3D rodinys atsidaro su {{ui:Iso}}. |
| {{ui:Perspective}} | Perspektyva įjungta arba išjungta (lygiagreti, kai išjungta). |
| {{ui:Zoom extents}} arba {{key:F}} | Visas lapas. |
| {{ui:Sheet}} | Rodyti arba slėpti brėžinį ant žemės. |
| Vaizdo kubas viršuje dešinėje | Spustelėkite veidą, kraštinę ar kampą, kad žiūrėtumėte iš ten; vilkite jį, kad suktumėte; vilkite jo kompaso žiedą, kad pasuktumėte; namelio mygtukas grįžta į {{ui:Iso}}. |

Kampe rodomas vaizdo kubas, mažas X, Y, Z ašių ženklas arba nieko: pasirinkite {{ui:Settings}} skirtuke TakeoffCraft, skiltyje **Corner indicator** ([TakeoffCraft parametrai](topic:settings)). Plokščias lapas kampo indikatoriaus neturi.

:::touch
Vienas pirštas sukasi; du pirštai spaudžia, kad priartintų, ir perstumia, kad slinktų. Bakstelėjimas pažymi.
:::

## Sienos su storiu, pagrindu ir angomis

Linijinė pozicija su aukščiu stovi kaip plona juosta. Norėdami matyti ją kaip tikrą sieną, suteikite pozicijai formą skiltyje **In 3D** jos nustatymuose:

- **Wall thickness** (8", 0.2 m): siena tampa kietu kūnu, centruota ant linijos, kurią nubrėžėte, su nuožulniais kampais.
- **Base height**: siena prasideda tiek virš grindų (karnizas, viršutinių spintelių ruožas). Ploto pozicijos taip pat turi jį: lubos 9'-0".
- **Opening head**: atimtas segmentas (durys, [Atimkite ruožo dalį](topic:measure-linear#deduct-a-part-of-a-run)) palieka sieną virš to aukščio, todėl durys atrodo kaip durys. Be jo atimtas segmentas palieka tarpą iki viršaus.

Tai tik formuoja 3D rodinį: kiekiai (ilgis, sienos plotas, kainos) lieka tokie patys.

## Sudėkite aukštus

1. Atidarykite kiekvieno aukšto PDF.
2. 3D rodinyje pasirinkite {{ui:Levels…}} ir įveskite kiekvieno aukšto aukštį, pavyzdžiui `0` pirmam aukštui ir `12'` kitam. Tuščias laukas lapo neįtraukia.
3. Pasirinkite {{ui:Stack}}. Kiekvienas lapas su lygiu rodo savo kiekių skaičiavimą savo aukštyje; ekrane esantis lapas guli ant savo aukšto, kiti nubraižyti kontūrais. Pastaboje nurodoma, kiek aukštų sudėta.

Lapai sulygiuojami pagal jų vietą puslapyje, todėl tai veikia planams, nubrėžtiems vienodai (tas pats lapo dydis ir padėtis). Lapas su lygiu, bet be mastelio, neįtraukiamas, ir pastaboje tai nurodoma. Norėdami vieno lapo, pasirinkite {{ui:Stack}} dar kartą. Lygiai išsaugomi kartu su kiekių skaičiavimu.

## Įrašykite 3D rodinį kaip paveikslėlį

Pasirinkite {{ui:PNG}} 3D juostoje, kad gautumėte rodinio vaizdą, kaip jis yra ekrane (`… 3D.png`); {{key:Shift}} + spustelėjimas ant {{ui:PNG}} padaro jį dvigubai didesnį (`… 3D@2x.png`), spausdinimui.

## Įrašykite 3D rodinį kaip modelį

Pasirinkite {{ui:GLB}} 3D juostoje. Gausite `.glb` failą (glTF, dvejetainis) to, ką rodo rodinys — ekrane esantį aukštą arba visus sudėtus aukštus — kurį atidaro kitos 3D programos: vienas objektas kiekvienai žymei, pavadintas pagal jos poziciją, pozicijos spalva, metrais su Y aukštyn. Pats lapas ir kontūrai į jį neįeina.

## Pasirinkite žymę iš 3D

Spustelėkite sieną, perdangą, plokštę ar stulpelį. Jo žymė tampa pasirinkta žymė, lygiai taip, lyg būtumėte ją spustelėję lape: ji rodoma skiltyje **Selected mark**, jos pozicija tampa dabartine, o būsenos juostoje rodomas jos ilgis ir aukštis arba plotas, gylis ir kubiniai jardai. {{key:Shift}} + spustelėjimas prideda žymes prie pasirinkimo arba jas pašalina. {{key:Delete}} ištrina pasirinktas žymes, o {{key:Mod+Z}} jas grąžina; {{key:Esc}} nepasirenka nieko. Grįžus į lapą, tos pačios žymės lieka pasirinktos.

:::tip
Brėžinys seka temą: temoje Model lapas ant žemės patamsėja kaip plokščias vaizdas.
:::
