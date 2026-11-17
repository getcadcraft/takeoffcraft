---
title: Pasirinkti PDF linijas
summary: Spustelėkite vektorinio PDF liniją, kad išmatuotumėte visą sujungtą kelią, arba spustelėkite uždaro kontūro vidų, kad gautumėte jo plotą; rodoma tarpų tolerancija ir vienas atšaukimas kiekvienam segmentui.
keywords: kelias, pasirinkti, linijos, sujungtas, visas ruožas, sekti, kontūras, perimetras, tarpas, tolerancija, tiltas, segmentai, skirtukas, vektorinis, plotas iš linijų, p
from: c22526ae
---

Vektoriniame PDF sienos ir kraštai yra tikros linijos. {{ui:Kelias}} ({{key:P}}) paima jas tokias, kokios nubrėžtos: vienas spustelėjimas ant linijos išmatuoja viską, kas prie jos prijungta, nuo galo iki galo, todėl sienos nereikia sekti spustelėjant jos kampus. Lapui reikia mastelio. Skenuotame puslapyje linijų nėra, todėl ten naudokite [Linijinis](topic:measure-linear) arba [Plotas](topic:measure-areas).

## Pasirinkti kelią ar kontūrą

1. Pasirinkite {{ui:Kelias}}. Linija po žymekliu apibrėžiama, o kiti keliai, kuriais ji galėtų būti, nubrėžiami plona linija.
2. Spustelėkite liniją: pasirenkamas visas sujungtas kelias. Įrankių juostos apačioje rodomi jo segmentai, ilgis, tarpų tolerancija ir kiek tarpų buvo peršokta. Kelias, grįžtantis į pradžią, yra uždaras ir taip pat rodo savo perimetrą.
3. Arba spustelėkite uždaro kontūro vidų, toli nuo linijų: kontūras aplink tą tašką pasirenkamas kaip plotas. Pirmiausia imamas mažiausias; {{key:Tab}} bando kitą, didesnį kontūrą.
4. Paspauskite {{key:Enter}} (arba dešinįjį pelės klavišą, arba dukart spustelėkite), kad pridėtumėte žymas. Pasirinktas kelias tampa **linijinės** pozicijos žyma, o kontūras – **ploto** pozicijos žyma: aktyvi pozicija, jei ji turi tokį tipą, kitaip naujausia to tipo pozicija. Jei tokios nėra, atsidaro naujos pozicijos forma, ir nieko nepridedama, kol dar kartą nepaspausite {{key:Enter}}. Viskas, kas pasirinkta, pridedama vienu atšaukimo žingsniu.

## Tarpų tolerancija

Braižytojai palieka mažas skyles ten, kur linijos turėtų susijungti. Dvi linijos jungiasi, kai jų galai yra arčiau nei **tarpų tolerancija**. Ji prasideda nuo 1.5 taško lape (rodoma pėdomis ir coliais pagal lapo mastelį), o punktyrinis apskritimas tokio pločio seka žymeklį ir stovi ant kiekvieno po juo esančio kelio galo. Kiekviena peršokta skylė pasirinktame kelyje apibraukiama oranžine spalva, o juosta jas suskaičiuoja.

{{key:]}} daro toleranciją platesnę, {{key:[}} – siauresnę. Pasirinktas kelias iš karto sujungiamas iš naujo pagal naują toleranciją. Sankryžoje kelias tęsiasi tiesiai, t. y. pagal mažiausiai lenkiantį kelią, o šaka lieka nuošalyje.

## Klavišai

| Klavišas ar veiksmas | Ką jis daro |
|---|---|
| Spustelėjimas | Pasirenka kelią po žymekliu arba kontūrą aplink jį. |
| {{key:Shift}} + spustelėjimas | Prideda kitą kelią ar kontūrą prie to, kas pasirinkta. |
| {{key:Tab}} | Bando kitą kelią po žymekliu arba kitą, didesnį kontūrą. |
| {{key:Backspace}} arba {{key:Mod+Z}} | Pašalina paskutinį segmentą iš paskutinio pasirinkto kelio, po vieną segmentą. Kelias be segmentų išnyksta. Jei nieko nepasirinkta, {{key:Mod+Z}} yra įprastas atšaukimas. |
| {{key:[}} ir {{key:]}} | Siauresnė ir platesnė tarpų tolerancija. |
| {{key:Enter}} | Prideda žymas. |
| {{key:Esc}} | Išvalo pasirinkimą. |

## Verta žinoti

- Kreivė brėžinyje yra trumpų tiesių gabalėlių grandinė, todėl jos ilgis šiek tiek trumpesnis nei tikrasis lankas. Tiksliam lankui išmatuokite paties brėžinio failą ([Matuoti iš brėžinio](topic:measure-from-a-drawing)).
- Peršokamas tarpas skaičiuojamas kaip tiesus šuolis per jį, todėl uždaro kontūro perimetras jį apima.
- Linijomis laikomi tik puslapio paties kelio brūkšniai ir užpildai. Raidėmis nubrėžtas tekstas ir paveikslėliai nėra linijos.
