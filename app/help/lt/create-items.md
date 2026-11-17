---
title: Sukurti kiekių skaičiavimo pozicijas
summary: Sukurkite linijines, plotų ir skaičiavimo pozicijas ir nustatykite jų vienetą, aukštį ar gylį, atliekas bei medžiagų ir darbo įkainius.
keywords: brigada, našumo norma, brigados dydis, atlyginimas, valandos, žmogaus valandos, darbuotojų valandos, brigados dienos, darbo valandos, pozicija, nauja pozicija, sąlyga, kelių tipų, taip pat matuoti, patalpa, linijinis, plotas, skaičiavimas, vienetas, aukštis, gylis, atliekos, medžiaga, darbas, įkainis, spalva, kaina
from: 7fa5effc
---

**Pozicija** – tai vienas dalykas, kurį matuojate ir įkainuojate: sienos tipas, grindų apdaila, lubos, durys, šviestuvas. Kiekvienas jūsų nubrėžtas žymuo priklauso pozicijai. Kitos programos tai vadina sąlygomis.

Kiekviena pozicija turi tipą (ir gali priimti kitų rūšių žymų, žr. [Viena pozicija, keli žymų tipai](topic:create-items#one-item-several-kinds-of-marks)):

| Tipas | Nubrėžiate | Ataskaitoje rodoma | Vienetai |
|---|---|---|---|
| Linijinis | Sujungtų taškų ruožus | Ilgį, ruožų skaičių ir sienos plotą, kai nurodytas aukštis | LF arba m |
| Plotas | Uždarus kontūrus su išpjovomis | Plotą, perimetrą, plotų skaičių | SF, SY, SQ, ac, ha arba m² |
| Skaičiavimas | Vieną paspaudimą vienam daiktui | Kiek jų yra | EA |
| Įvestas kiekis | Nieko: kiekį įvedate patys | Įvestą skaičių (arba iš CivilCraft perduotą) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha arba m² |

## Įvesti kiekiai (be brėžinio)

Kai kurių sąmatos dalykų niekada nenubraižote: mobilizacijos, leidimų, atsargos, fiksuotos kainos subrangos sutarties ar kasimo ir pylimo, kuriuos apskaičiavo CivilCraft. Padarykite juos **Įvestu kiekiu**:

1. Pasirinkite {{ui:New item}}, įrašykite pavadinimą, pasirinkite {{ui:Typed quantity (no drawing)}} ir spauskite {{ui:Add}}.
2. Elemento redaktoriuje pasirinkite {{ui:Unit}} (LS fiksuotai sumai) ir įveskite {{ui:Quantity}}: `1`, `2.5` arba `1,250`.
3. Atliekas ir įkainius nustatykite kaip bet kurioje kitoje pozicijoje. Surinkimo formulėse `Q` reiškia kiekį, pavyzdžiui `ceil(Q / 12)` sunkvežimių kroviniams.

Įvestas kiekis nepriima žymių ir niekada nepadaro sąmatos nebaigtos. Kai kiekių skaičiavimas turi sąmatos sritis, redaktoriuje taip pat yra {{ui:Bid area}}: tuomet kiekis įskaičiuojamas toje srityje, jos alternatyvose ir sumose, lygiai taip, kaip ten būtų įskaičiuota žymė. Iš kitos programos perkelti kiekiai nurodo savo šaltinį, žr. [Žemės darbai ir taškiniai aukščiai](topic:earthwork#cut-and-fill-from-civilcraft).

## Sukurti poziciją

1. Dešinėje esančioje skiltyje {{ui:Items}} pasirinkite {{ui:New item}}.
2. Įrašykite pavadinimą, pavyzdžiui `Vidaus sienos tipas A` arba `Kilimo plytelė`.
3. Pasirinkite tipą: {{ui:Linear (length)}}, {{ui:Area}} arba {{ui:Count}}.
4. Pasirinkite {{ui:Add}} (arba paspauskite {{key:Enter}}).
   Pozicija atsiranda sąraše su savo spalva, tampa pozicija, kuria braižote, o jos redaktorius atsidaro sąrašo apačioje. Būsenos juostoje nurodoma, kurį įrankį pasirinkti toliau.

Formoje paspauskite {{key:Esc}}, kad ją uždarytumėte nieko nepridėdami.

:::tip
Jei pirmiausia pasirinksite matavimo įrankį, TakeoffCraft panaudoja paskutinę tinkamo tipo poziciją arba atveria formą {{ui:New item}} su jau pasirinktu tipu.
:::

## Pasirinkti poziciją, kuria braižote

Spustelėkite poziciją sąraše. Ji tampa pozicija, kuriai priskiriamos naujos žymos, o jos žymos paryškinamos kiekviename lape, kol kitos išblunka. Jei atidarytame lape jos žymų nėra, TakeoffCraft nuveda į lapą, kuriame jų yra. Spustelėkite poziciją dar kartą, kad nustotumėte ją paryškinę; ji lieka pozicija, kuria braižote.

Spustelėjus žymą įrankiu {{ui:Select}}, jos pozicija taip pat tampa dabartine.

## Nustatyti poziciją

Pozicijos redaktoriuje (**Pozicija: (pavadinimas)**) yra šie laukai. Kiekvienas įrašomas, kai išeinate iš lauko arba paspaudžiate {{key:Enter}}, ir kiekvieną pakeitimą galima anuliuoti.

| Laukas | Ką daro |
|---|---|
| {{ui:Name}} | Rodomas sąraše, lentelėse ir eksportuose. |
| {{ui:Type}} | Linijinis, Plotas arba Skaičiavimas. Užrakinamas, kai pozicija turi žymų („Pozicija, turinti žymų, išlaiko savo tipą“). |
| {{ui:Color}} | Jos žymų spalva ekrane ir pažymėtame PDF. |
| {{ui:Unit}} | Vienetas, kuriuo nurodomas kiekis: LF arba m linijinėms; SF, SY, SQ, ac, ha arba m² plotams; EA skaičiavimams. |
| {{ui:Also measure}} | Kitos žymų rūšys, kurias pozicija priima, kiekviena su savo vienetu. Žr. žemiau. |
| {{ui:Height}} (linear) | Sienos aukštis. Tada pozicija taip pat nurodo sienos plotą (ilgis × aukštis). Ruožai, atėję iš BimCraft modelio, turi savo duris ir langus: jos atimamos vieną kartą, o pozicijoje nurodomas bendras plotas, angos ir grynasis plotas. Kiekių skaičiavimas iš BimCraft projekto, kuriame pasirinktas matavimo metodas, čia taip pat matuojamas tuo metodu (pastaboje nurodomas metodas ir jo šaltinis bei pažymima, kad kiekių sąmatininkas jo dar nepatikrino); metodo TakeoffCraft pakeisti negalima. Plytos arba blokai ir skiedinys iš sienos tipo pateikiami kaip du komponentai: užsakomų vienetų kiekis ir skiedinio tūris. |
| {{ui:Depth}} (area) | Gylis arba storis, naudojamas surinkimo formulėse (pavyzdžiui, betono tūriui). |
| {{ui:Waste %}} | Pridedama prie kiekio prieš įkainojimą: 10 reiškia kiekis × 1.10. |
| {{ui:Material $/LF}} | Medžiagų kaina vienetui. Etiketė seka vienetą: $/SF, $/EA ir pan. |
| {{ui:Labor $/LF}} | Darbo kaina vienetui. |
| {{ui:CSI number}} | CSI MasterFormat numeris, pavyzdžiui `09 21 16` (arba tik skyrius, `09`). Darbo knygos lapas „By division“ pagal jį grupuoja išlaidas. Pozicijos iš [specializuotų paketų](topic:trade-packs) jį jau turi. |

Aukštis ir gylis priima pėdas ir coliais (`9'-0"`, `8' 6"`) arba dešimtainėmis pėdomis (`9`) imperiniams vienetams, o metrais (`2.7`, `2700 mm`) metriniams vienetams. Įkainiai priima sumas, pavyzdžiui `12.50` arba `$1,250`, iki keturių skaitmenų po kablelio. Žr. [Ilgio, įkainio ir procentų įvedimas](topic:entry-formats).

Po laukais **Išmatuota** rodomos sumos, kurias gali naudoti pozicijos formulės, su jų raidėmis: Ilgis (L), Ruožai (N), Sienos plotas (A) linijinėms; Plotas (A), Perimetras (P), Plotai (N) plotams; Skaičius (N) skaičiavimams.

## Viena pozicija, keli žymų tipai

Kai kas matuojama daugiau nei vienu būdu: kambarys turi grindis (plotas), pagrindą palei sienas (ilgis) ir duris (skaičius). Vietoj trijų pozicijų sukurkite vieną:

1. Sukurkite poziciją su pagrindiniu tipu, pavyzdžiui plotų poziciją `Patalpa 101`.
2. Redaktoriuje po {{ui:Also measure}} pažymėkite {{ui:Linear}}, {{ui:Count}} arba abu. Prie kiekvieno nurodomas jo vienetas.
3. Braižykite bet kuriuo įrankiu, kurio tipą pozicija priima: kai dabartinė yra `Patalpa 101`, {{ui:Area}} nubraižo jos grindis, {{ui:Linear}} – pagrindą, o {{ui:Count}} – duris. TakeoffCraft nereikalauja kitos pozicijos.

Pozicijų sąraše rodomas kiekvienas kiekis (`50.00 SF + 2 EA`). Kiekių lentelėje pozicijos eilutėje rodomas pagrindinis kiekis, o kiekvienas kitas tipas turi savo eilutę žemiau, pavyzdžiui **Patalpa 101 (skaičiavimas)**, su savo atliekomis ir medžiagų bei darbo įkainiais. Eksportai, lapo lentelė ir pažymėto PDF legenda juos išvardija tokiu pat būdu.

Pagrindinio tipo laukai lieka tik jam: aukštis ar gylis, nuolydis, atgalinės išpjovos ir 3D forma taikomi tik jo žymoms. Pagrindo ruožas, nubrėžtas plotų pozicijai, matuojamas tiesiai pagal planą ir 3D rodomas plokščias. Surinkimo formulėse naudojamos pagrindinio tipo sumos.

Tipo žymėjimą galima nuimti tik tada, kai pozicija neturi tos rūšies žymų: pirma ištrinkite jas arba perkelkite į kitą poziciją skiltyje **Pasirinkta žyma**. Žymas galima perkelti į bet kurią poziciją, kuri priima jų rūšį.

Žemiau yra {{ui:Assembly}}: komponentai, pavyzdžiui stovai ar lentos, kiekvienas su savo formule ir įkainiais. Žr. [Surinkimai ir formulės](topic:assemblies).

Apačioje: {{ui:Move up}} ir {{ui:Move down}} keičia pozicijos vietą sąraše ir eksportuose, o {{ui:Delete item}} pašalina ją kartu su visomis žymomis (paklausus; galite anuliuoti).

Plotų pozicijos taip pat turi **Nuolydį** (stogų plokštumos matuojamos pagal šlaitą: [Stogai ir nuolydžiai](topic:roofs-and-slopes)) ir **Atgalinę išpjovą** (jų žymos atimamos iš kitų pozicijų plotų: [Matuoti plotus](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Linijinės pozicijos turi **Šlaitą** (Lygus, Nuožulnus, Kalnagalis arba slėnis) ir, nuožulniems kraštams bei kalnagaliams, **Nuolydį**.

## Įkainiai lentelėje

Atliekas %, medžiagų ir darbo įkainius taip pat galite įrašyti tiesiai į apačioje esančią lentelę {{ui:Quantities}} ({{ui:By item}}). Tai tas pats nustatymas kaip redaktoriuje.

## Kaip skaičiuojama kaina

Kiekvienai pozicijai ir kiekvienam surinkimo komponentui:

1. **Su atliekomis** = kiekis × (1 + atliekos %).
2. **Medžiaga** = su atliekomis × medžiagos kaina vienetui, suapvalinta iki cento.
3. **Darbas** = su atliekomis × darbo kaina vienetui, suapvalinta iki cento.
4. **Viso** = medžiaga + darbas.

{{ui:Job total}} sudeda kiekvieną poziciją ir kiekvieną komponentą. Pozicija gali turėti savo įkainius ir surinkimą tuo pačiu metu; abu skaičiuojami, todėl, kai išlaidas jau turi komponentai, palikite pozicijos įkainius 0.

## Darbas pagal brigadą

Vietoj darbo įkainio vienetui pozicijos darbas gali būti skaičiuojamas pagal brigadą: kiek ji įdeda per valandą, kiek žmonių ir kiek uždirba kiekvienas. Redaktoriuje po {{ui:Labor by crew}} pažymėkite {{ui:Price labor from a crew}} ir užpildykite:

| Laukas | Pavyzdys |
|---|---|
| {{ui:Production}} | `20` LF per valandą (pozicijos vienetu) visai brigadai |
| {{ui:Crew size}} | `2` žmonės |
| {{ui:Wage $/hour each}} | `45` |

TakeoffCraft apskaičiuoja iš kiekio su atliekomis:

- **brigados valandos** = kiekis ÷ našumas (110 LF ÷ 20 = 5.5),
- **darbuotojų valandos** = brigados valandos × brigados dydis (11),
- **brigados dienos** = brigados valandos ÷ 8 (0.69),
- **darbas** = darbuotojų valandos × atlyginimas ($495.00).

Redaktoriuje rodomas rezultatas ir gautas įkainis ($4.50/LF). Tada paties elemento darbo įkainis tampa tik skaitomas – redaktoriuje ir lentelėje. {{ui:Quantities}} lentelės antraštėje pridedamos visų darbo darbuotojų valandos ir brigados dienos. Eksportuose nurodomos kiekvienos brigados valandos, o darbo knygoje darbo langelis yra formulė nuo brigados (`ROUND(F2/20*2*45,2)`). Nuimkite žymėjimą, kad grįžtumėte prie įkainio vienetui.

## Metrinės pozicijos

Vienetu pasirinkite m (linijinei) arba m² (plotui). Tuomet kiekiai, aukščiai ir formulių reikšmės pateikiami metrais. Lapo mastelis gali būti bet koks nustatytas arba kalibruotas; vienetai ir mastelis nepriklauso vienas nuo kito.

## Toliau

- [Matuoti linijinius ruožus](topic:measure-linear)
- [Matuoti plotus su išpjovomis](topic:measure-areas)
- [Skaičiuoti rankiniu būdu](topic:count-by-hand)
