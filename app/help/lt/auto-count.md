---
title: Automatiškai suskaičiuoti simbolį
summary: Nubrėžkite langelį aplink vieną simbolį, leiskite TakeoffCraft rasti kitus šiame lape arba visuose atidarytuose lapuose, peržiūrėkite atitikimus slankikliu ir pridėkite juos vienu veiksmu.
keywords: auto count, automatinis skaičiavimas, simbolių paieška, rasti simbolius, pasuktas, apsuktas, kitas mastelis, skirtingas mastelis, šablonas, atitikimas, aptikti, skaičiavimo įrankis
from: fa68a6c1
---

{{ui:Auto count}} randa kiekvieną simbolio kopiją, kai nubrėžiate langelį aplink vieną. Tada lape peržiūrite atitikimus ir priimtus pridedate kaip skaičiavimo žymes. Tai pagalbinė priemonė, o ne garantija: prieš pridėdami visada peržiūrėkite.

## Rasti simbolius

1. Sukurkite arba spustelėkite skaičiavimo poziciją skiltyje {{ui:Items}}.
2. Atidarykite lapą, kuriame rodomas simbolis.
3. Įrankių juostoje pasirinkite {{ui:Auto count}} arba paspauskite {{key:S}}.
   Lapo viršuje atsiranda juosta: „Nubrėžkite langelį aplink vieną simbolį šiame lape.“
4. Jei norite ieškoti visuose atidarytuose lapuose, o ne tik šiame, pažymėkite {{ui:Search all open sheets}}.
5. Priartinkite, kad simbolis būtų lengvai matomas, tada tiksliai nubrėžkite langelį aplink vieną jo kopiją. Įtraukite visą simbolį; aplink jį esantis tuščias popierius nukerpamas.
   Juostoje rodoma „Ieškoma…“, eigos juosta ir mygtukas {{ui:Cancel}}. Puslapis lieka jautrus: galite priartinti, slinkti ir pereiti tarp lapų. Pasirinkus kitą įrankį arba paspaudus {{key:Esc}}, paieška nutraukiama.
6. Baigus paiešką, atitikimai lape rodomi kaip langeliai pozicijos spalva, o juostoje – santrauka, pavyzdžiui: „22 atitikimai, 19 pridėti (3 jau suskaičiuota). Spustelėkite langelį, kad jį atmestumėte arba atkurtumėte.“

{{ui:Auto count}} režime tempimas lape nubrėžia langelį, o ne slenka vaizdą. Norėdami slinkti, laikykite nuspaustą {{key:Space}} ir tempkite arba tempkite vidurinį pelės mygtuką.

## Peržiūrėti atitikimus

- **Spustelėkite langelį**, kad jį atmestumėte. Atmestas langelis rodomas brūkšnine linija ir perbrauktas. Spustelėkite dar kartą, kad jį atkurtumėte.
- **Perkelkite {{ui:Match}} slankiklį** (nuo 50 % iki 95 %, pradedant nuo 75 %). Aukštesnė reikšmė rodo tik artimus atitikimus, žemesnė – laisvesnius. Slankiklis tik filtruoja rastus atitikimus, o ne ieško iš naujo.
- **Jau suskaičiuota**: atitikimai vietoje, kurioje jau yra šios pozicijos skaičiavimo žymė, iš pradžių būna atmesti, kad nieko nesuskaičiuotumėte du kartus.
- **Kiti lapai**: kai ieškojote visuose atidarytuose lapuose, pereikite tarp lapų per lapų sąrašą arba {{key:PageDown}} ir peržiūrėkite kiekvieną. Santraukoje nurodoma, kiek lapų turi atitikimų.

## Pridėti juos

Pasirinkite {{ui:Add}}. Mygtuke nurodoma, kiek: pavyzdžiui, „Pridėti 19 žymių“.
Skaičiavimo žymės įdedamos kiekvieno priimto langelio centre: „Pridėta 19 skaičiavimo žymių pozicijai „Dvigubas lizdas“. Ctrl+Z pašalina jas visas.“

Visas paketas yra vienas anuliavimo veiksmas, todėl vienu {{key:Mod+Z}} jis pašalinamas.

Norėdami atsisakyti peržiūros nieko nepridėdami, pasirinkite {{ui:Discard}} arba paspauskite {{key:Esc}}. Pasirinkus kitą įrankį, peržiūra taip pat atmetama.

## Ką randa ir ko nerandа

TakeoffCraft lygina brėžinį pikselis po pikselio su jūsų nubrėžtu simboliu.

- Randa simbolį, pasuktą 0°, 90°, 180° ir 270°. Jei norite jį rasti ir bet kuriuo kampu, prieš braižydami langelį pažymėkite {{ui:Any angle (slower)}} auto count juostoje: tikrinama kas 15°, o kiekvienas radinys tikslinamas iki vieno su puse laipsnio. Tai trunka maždaug šešis kartus ilgiau. Veidrodiškai atspindėto simbolio neranda (nebent simbolis atrodo lygiai taip pat atspindėtas).
- Kai pažymėta {{ui:Search all open sheets}}, lapas kitu mastelių ieškomas to dydžio, koks simboliui yra tame lape: įrenginys, nubrėžtas 1/8" mastelio plane, yra perpus mažesnis nei 1/4" mastelio plane, bet vis tiek randamas. Tokiame lape taip pat ieškoma pagal paties langelio dydį, skirta žymoms ir simboliams, atspausdintiems vienodo dydžio ant kiekvieno lapo. Tam reikia mastelio abiejuose lapuose; lapas be mastelio ieškomas tik pagal langelio dydį.
- Labai panašūs simboliai gali sutapti tarpusavyje: dvigubas ir keturgubas lizdas arba du įrenginių žymekliai, kurie skiriasi viena raide. Pakelkite slankiklį, kol liks tik tinkami, o likusius atmeskite rankiniu būdu.
- Simbolis, kurį kerta kitos linijos, brūkšniavimas ar tekstas, gauna žemesnį įvertinimą ir gali reikalauti žemesnės slankiklio reikšmės.
- Labai maži langeliai atmetami: „Šis langelis per mažas. Nubrėžkite jį aplink visą simbolį.“ Tuščias langelis taip pat atmetamas: „Šis langelis beveik tuščias. Nubrėžkite jį aplink simbolį.“
- Lapas, kuris tam simboliui būtų labai didelis, praleidžiamas, o santraukoje rašoma „1 lapas per didelis, kad būtų ieškoma pagal šį simbolio dydį.“ Nubrėžkite didesnį simbolį arba suskaičiuokite tą lapą rankiniu būdu.

Jei nieko nerasta, būsenos juostoje rodoma: „Atitikimų nėra. Sumažinkite atitikimo slankiklį arba tiksliau nubrėžkite simbolį.“

## Greitis ir naršyklės

Paieška vykdoma fone, todėl puslapis lieka jautrus ir ją bet kada galima nutraukti. Kiekvienas lapas pirmiausia nupiešiamas darbiniu dydžiu pačiame puslapyje, todėl labai didelis lapas gali trumpam sustoti. Veikia dabartinėse Chrome, Edge, Firefox ir Safari naršyklėse. Ieškant daugelyje lapų užtrunka ilgiau; eigos juosta juda lapas po lapo. Neprisijungus auto count veikia, kai programos juostoje rodoma {{ui:Offline ready}}: {{ui:Save for offline}} išsaugo ir darbinį procesą. Žr. [Darbas neprisijungus](common:offline).
