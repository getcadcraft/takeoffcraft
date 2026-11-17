---
title: Ką išmoko iš jūsų kiekių skaičiavimų
summary: TakeoffCraft saugo simbolius, kuriuos patvirtinote naudodami Automatinį skaičiavimą, jūsų sąlygų rinkinius, dažniausiai naudojamus surinkimus ir šablonus, kuriuos kartojate kiekviename puslapyje, visa tai kiekių skaičiavimo failo viduje. Peržiūrėkite, naudokite, ištrinkite.
keywords: mokytis, išmokta, mokymasis, asistentas, prisiminti, simboliai, šablonai, tas pats kaip paskutinis darbas, paskutinis darbas, sąlygų rinkinys, sąlygos, pakartotinis naudojimas, surinkimai, dažniausiai naudojami, pasiūlymai, kartoti kiekviename puslapyje, kiekviename puslapyje, antraštės blokas, šablonas, išvalyti viską, pamiršti, privatumas
from: 54d99e99
---

TakeoffCraft tampa greitesnis, kuo daugiau kiekių skaičiavimų atliekate su juo. Jis mokosi **tik iš to, ką priimate**:

- simbolių, kuriuos apibrėžėte rėmeliu naudodami [Automatinis skaičiavimas](topic:auto-count) ir vėliau pridėjote,
- sąlygų rinkinių, kuriuos išsaugote,
- surinkimų, kuriuos naudojate (kartą per darbą),
- žymų šablonų, kuriuos kartojate kiekviename puslapyje.

Tai paprastas jūsų paties lapų atitikimas – ta pati paieška, kurią vykdo Automatinis skaičiavimas. Tai nėra apmokytas modelis. Viskas, ko jis išmoksta, saugoma **šio kiekių skaičiavimo faile** (`.takeoff.json`) ir niekur neišsiunčiama. Norėdami perkelti tai į kitą darbą, naudokite [Tas pats kaip paskutinis darbas](topic:what-it-learned#same-as-last-job).

Pasirinkite {{ui:Išmokta}} įrankių juostoje (lemputė, šalia {{ui:Automatinis skaičiavimas}}), kad pamatytumėte visa tai.

## Simboliai

Kai apibrėžiate simbolį su {{ui:Automatinis skaičiavimas}} ir pasirenkate {{ui:Pridėti}}, išsaugomas apibrėžtas simbolis su priimtu atitikimo lygiu.

- {{ui:Išmokta}} lange pasirinkite {{ui:Rasti šiame lape}} arba {{ui:Rasti kiekviename lape}}. Atsiveria įprasta Automatinio skaičiavimo peržiūra: spustelėkite rėmelį, kad jo neįtrauktumėte, perkelkite slankiklį, tada pridėkite. Nieko nepridedama, kol to nepadarote.
- Kai atidarote lapą, kuriame dar nėra kurio nors išmokto simbolio, viršuje esanti juosta pasiūlo {{ui:Rasti …}} tam simboliui. {{ui:Ne dabar}} paslepia ją tam lapui.
- Jei kiekių skaičiavime nėra elemento tokiu pavadinimu, žymų pridėjimas pridės ir elementą (vienas anuliavimo žingsnis).
- Pakartotinai pridėjus to paties elemento simbolį, jis skaičiuojamas prie jau žinomo; kitaip atrodantis simbolis išsaugomas kaip antras.
- Kaip ir Automatinis skaičiavimas, jis randa simbolį stačiais kampais ir lapuose kitu mastelių.

## Sąlygų rinkiniai

Rinkinys saugo kiekių skaičiavimo sąlygas (elementus su vienetais, įkainiais, atliekomis ir surinkimais), be žymų.

1. {{ui:Išmokta}} lange pasirinkite {{ui:Išsaugoti šio kiekių skaičiavimo sąlygas kaip rinkinį…}} ir suteikite jam pavadinimą. Rinkinys su tuo pačiu pavadinimu pakeičiamas.
2. Kiekių skaičiavime, kuriame yra rinkinys, {{ui:Pridėti}} įdeda sąlygas, kurių dar nėra. Sąlygos su tuo pačiu pavadinimu ir tipu paliekamos nepaliestos. Tai vienas anuliavimo žingsnis.

## Tas pats kaip paskutinis darbas

Paskutinio darbo failas saugo tai, ko jis išmoko. Norėdami pradėti naują darbą iš jo:

1. Atidarykite naujus planus, tada pasirinkite {{ui:Išmokta}} › {{ui:Tas pats kaip paskutinis darbas…}}.
2. Pasirinkite paskutinio darbo `.takeoff.json`.
3. Pažymėkite, ką įkelti: jo sąlygas (tik tas, kurių šis kiekių skaičiavimas dar neturi) ir ką jis išmoko (simbolius, rinkinius, surinkimus, šablonus). Tada – {{ui:Įkelti jas}}.

Jo sąlygos taip pat išsaugomos kaip rinkinys, pavadintas pagal tą darbą. Jo žymos ir kiekiai lieka savo faile. Visa tai – vienas anuliavimo žingsnis.

## Dažniausiai naudojami surinkimai

Elementas su surinkimu laikomas naudotu kartą per darbą, kai jis turi kiekį ir įrašote kiekių skaičiavimą. Darbas – tai planų failų rinkinys, iš kurių skaičiuojama, todėl tą patį kiekių skaičiavimą įrašius dar kartą, jis nebeskaičiuojamas dukart. Sąraše pagal {{ui:Dažniausiai naudojami surinkimai}} pirmiausia rodomi dažniausiai naudojami. Jame nėra tų, kuriuos šis kiekių skaičiavimas jau turi. {{ui:Pridėti}} įdeda vieną, kaip paskutinį kartą jį naudojote, su visomis jo dalimis.

## Kartoti kiekviename puslapyje

Žymoms, kurios vienodos kiekviename rinkinio puslapyje, pavyzdžiui antraštės bloko kiekiui ar tipinei detalei:

1. Pažymėkite žymas viename lape ([Pažymėti žymas](topic:copy-paste#select-the-marks)).
2. {{ui:Išmokta}} lange pasirinkite {{ui:Kartoti pažymėtas žymas kiekviename puslapyje…}}, pavadinkite šabloną ir patvirtinkite.

Jos įdedamos į kiekvieną kitą atidarytą puslapį **to paties dydžio**, toje pačioje vietoje, vienu anuliavimo žingsniu. Ilgiai ir plotai dedami tik į puslapius su tuo pačiu mastelių; kiekiai – į bet kurį to dydžio puslapį. Puslapis, kuriame jų jau yra, praleidžiamas. Šablonas išsaugomas, todėl vėliau atidaromi puslapiai gaus pasiūlymą juostoje arba galėsite naudoti {{ui:Kartoti kiekviename puslapyje}} sąraše.

## Peržiūrėkite, ištrinkite

Viskas, ko išmokta, išvardyta lange {{ui:Išmokta}}. Šiukšliadėžė ištrina vieną dalyką. {{ui:Išvalyti viską}} ištrina viską, ko išmokta, ir palieka jūsų elementus bei žymas. Abu veiksmus galima atšaukti, kol neuždarote kiekių skaičiavimo, ir abu įrašomi kartu su kiekių skaičiavimu.

Norėdami nustoti mokytis viename kiekių skaičiavime, išjunkite {{ui:Mokytis iš šio kiekių skaičiavimo}}. Nieko naujo neišmokstama, o tai, kas išvardyta, lieka, kol to nepašalinsite.

## Verta žinoti

- Senesnės TakeoffCraft versijos atidaro failą su išmoktais dalykais įprastai. Jos ignoruoja tą dalį ir ją pašalina, jei failą vėl įrašo.
- Išmoktas simbolis – nedidelis jūsų apibrėžto dalyko paveikslėlis, saugomas faile (keli kilobaitai kiekvienas).
- Išmoktus simbolius ieško taip pat kaip Automatinis skaičiavimas, todėl galioja tie patys apribojimai: [Simbolio automatinis skaičiavimas](topic:auto-count).
