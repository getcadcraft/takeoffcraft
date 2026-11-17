---
title: Plotų matavimas su išpjovomis
summary: Nubrėžkite grindų, lubų ir perdangų kontūrus, išpjaukite juose skyles, pridėkite lenktas kraštines, apskritimus ir apvalias išpjovas, ir nuskaitykite plotą bei perimetrą.
keywords: patalpos užpildymas, užpildymas, dažų kibiras, spustelėti patalpos viduje, automatinis plotas, išskaita, kolona, šachta, išskaita iš kelių pozicijų, plotas, kontūras, kvadratinės pėdos, sf, išpjova, skylė, atskaita, apskritimas, apvalus, lankas, perimetras, grindys, lubos, perdanga
from: 34648db7
---

Plotų pozicija matuoja uždarą plotą. Kiekvienas kontūras gali turėti išpjautas skyles (šachtą, koloną, vazoną), o kraštinės gali būti tiesios arba lenktos.

Prieš pradedant: lapui reikia mastelio ([Nustatyti mastelį](topic:set-the-scale)) ir jums reikia plotų pozicijos ([Kurti kiekių pozicijas](topic:create-items)).

## Nubrėžti plotą

1. Spustelėkite plotų poziciją po {{ui:Pozicijos}}.
2. Įrankių juostoje pasirinkite {{ui:Plotas}} arba paspauskite {{key:A}}.
3. Eilės tvarka spustelėkite kiekvieną patalpos ar perdangos kampą. Laikykite {{key:Shift}} 0°, 45° ir 90° kraštinėms.
   Nuo trečio taško kontūras užpildomas, o būsenos juostoje rodoma „Plotas“ ir „perimetras“. Aplink pirmą tašką atsiranda mažas žiedas.
4. Uždarykite kontūrą: spustelėkite pirmą tašką (jo žiede), paspauskite {{key:Enter}}, dukart spustelėkite arba spustelėkite dešiniuoju mygtuku.
   Plotas šviesiai užpildomas pozicijos spalva, pažymimas kvadratinėmis pėdomis ir tampa pasirinkta žyme.

{{key:Backspace}} pašalina paskutinį kampą; {{key:Esc}} išmeta kontūrą.

Kontūras, kuris kerta pats save, atmetamas: „Kontūras kertasi pats su savimi, todėl jo plotas būtų neteisingas. Nubrėžkite jį dar kartą be susikirtimų.“ Aštuoniukės formos vietoje nubrėžkite du plotus.

## Lenktos kraštinės

Braižydami kontūrą, įjunkite lankų režimą ({{ui:Lankas}} arba {{key:R}}). Po kampo spustelėkite tašką išilgai kreivės, tada vietą, kur kreivė baigiasi. Norėdami uždaryti kontūrą kreive, paskutinį spustelėjimą atlikite ant pirmo taško. Plotas ir perimetras naudoja tikslią kreivę. Norėdami grįžti prie tiesių kraštinių, dar kartą paspauskite {{key:R}}. Kad vėliau pakeistumėte kreivę, pasirinkite plotą ir vilkite apvalų valdiklį lanko viduryje. Žr. [Tiesinių ruožų matavimas](topic:measure-linear#arcs-and-curved-walls).

## Apskritimas

1. Su plotų pozicija pasirinkite {{ui:Apskritimas}} arba paspauskite {{key:O}}.
2. Spustelėkite centrą.
3. Spustelėkite bet kurį tašką ant krašto.
   Judinant žymeklį, būsenos juostoje rodomas spindulys ir plotas. Apskritimas pridedamas kaip plotų žymė su tiksliu plotu ir perimetru.

## Patalpos užpildymas vienu spustelėjimu

Kai patalpos nubrėžtos kaip uždarytos sienos, {{ui:Kambarys}} ({{key:B}}) vienu spustelėjimu paima grindis:

1. Pasirinkite plotų poziciją (pavyzdžiui, grindų apdailą) ir nustatykite lapo mastelį.
2. Grupėje {{ui:Kiekiai}} pasirinkite {{ui:Kambarys}}, arba paspauskite {{key:B}}.
3. Spustelėkite patalpos viduje, atvirose grindyse (ne ant linijos ar žymės).

TakeoffCraft nuskaito lapo linijas, randa erdvę aplink spustelėjimą ir nubraižo kontūrą išilgai sienų vidinių paviršių kaip dabartinės pozicijos plotą. Durų angos iki **4'-0"** traktuojamos kaip uždaros, todėl kontūras eina tiesiai per angą; **Parametrai › TakeoffCraft › Patalpos užpildymas uždaro angas iki** keičia šį plotį (nuo 3'-0" iki 8'-0"). Patalpos pavadinimai, baldai ir įranga patalpoje skylių nedaro.

Ji atsisako ir pasako priežastį, kai:

- spustelėjimas yra ant linijos („Tai yra ant linijos“);
- erdvė neuždaryta: anga platesnė nei nustatymas leidžia kontūrui išeiti iki lapo krašto. Padidinkite nustatymą arba nubrėžkite tą patalpą rankiniu būdu su {{ui:Plotas}};
- erdvė labai maža (simbolis, o ne patalpa).

Kai durys platesnės už nustatymą, užpildymas persiduoda į kitą patalpą ir nubrėžia abi kartu: anuliuokite ({{key:Mod+Z}}), padidinkite nustatymą ir spustelėkite dar kartą. Kontūrą tikrinkite kaip bet kurį plotą: vilkite jo kampus, kad jį ištaisytumėte. Nuskenuotas lapas veikia taip pat, bet jo linijos turi būti pakankamai tamsios; šviesiai pilka linija gali neleisti užpildymui sustoti.

## Skylės išpjovimas plote

1. Pasirinkite {{ui:Pasirinkti}} ({{key:V}}) ir spustelėkite plotą. Jo kampuose matysite kvadratinius valdiklius.
2. Įrankių juostoje pasirinkite {{ui:Išpjova}} (arba paspauskite {{key:X}}), arba {{ui:Pridėti išpjovą}} skiltyje **Pasirinkta žymė**.
3. Spustelėkite skylės kampus plote. Lankų režimas veikia ir čia.
4. Uždarykite ją kaip plotą: spustelėkite pirmą tašką, paspauskite {{key:Enter}}, dukart spustelėkite arba spustelėkite dešiniuoju mygtuku.
   Skylė lieka neužpildyta, o būsenos juostoje rašoma: „Išpjova pridėta. Nubrėžkite kitą arba paspauskite Esc.“
5. Nubrėžkite daugiau skylių tame pačiame plote arba paspauskite {{key:Esc}}.

Apvaliai skylei pasirinkite {{ui:Pridėti apvalią išpjovą}} skiltyje **Pasirinkta žymė**, spustelėkite jos centrą, tada tašką ant krašto.

Išpjova turi būti visiškai plote ir neturi persidengti su kita išpjova. Priešingu atveju TakeoffCraft jos nepriima: „Išpjova turi būti visiškai plote.“ arba „Išpjovos negali persidengti tarpusavyje.“

Norėdami pašalinti paskutinę skylę, pasirinkite {{ui:Pašalinti paskutinę išpjovą}}.

## Išskaitos: kolonos, šachtos ir angos, atimamos iš kelių pozicijų

Išpjova priklauso vienai plotų žymei. **Išskaita** nubraižoma vieną kartą ir atimama iš visų plotų, su kuriais persidengia, pasirinktoms pozicijoms: kolonas nubrėžkite vieną kartą, ir jos kartu nuimamos nuo grindų apdailos, lubų ir perdangos.

1. Joms sukurkite plotų poziciją, pavyzdžiui, „Kolonos“.
2. Jos pozicijos nustatymuose pažymėkite **Išskaita: jos žymės atima savo plotą iš kitų pozicijų**. Pasirodo jūsų kitų plotų pozicijų sąrašas, visos pažymėtos: nuimkite žymę nuo tų, kurių išskaitos neturi liesti (pvz., sienų dažų).
3. Kolonas išmatuokite su {{ui:Plotas}} arba {{ui:Apskritimas}}, kaip įprasta. Kiekviena nubrėžiama brūkšniuota linija.

Kiekviena pažymėtos pozicijos plotų žymė tame pačiame lape praranda dalį, kurią dengia išskaita: visą išskaitą, kai ji yra viduje, tik persidengiančią dalį, kai ji kerta kraštą, ir nieko, kas yra išpjovos viduje. Pasirinkto ploto skydelyje rodoma **Išskaitos** ir likęs plotas. Pozicijos kiekis, jos surinkimo formulės, kainos, 3D tikrinimo vaizdas ir eksportas visi naudoja likusį plotą; sąmatos pastabose nurodoma, kiek išskaitos atėmė. Pati išskaitos pozicija skaičiuoja savo plotą (jei jos nekainuojate, kainas palikite nulines).

Išskaita turi būti **iškila**: stačiakampis, apskritimas ar bet koks kontūras be vidinio kampo. TakeoffCraft neleidžia nubrėžti ne iškilos; L formos šachtą nubrėžkite kaip dvi išskaitas. Išskaitos negali turėti išpjovų, o dvi tarpusavyje persidengiančios išskaitos skaičiuojamos abi.

Perimetras (`P`) nesikeičia: išskaitos atima tik plotą.

## Plotų nuskaitymas

Pasirinkite plotą. **Pasirinkta žymė** rodo:

| Eilutė | Reikšmė |
|---|---|
| {{ui:Plotas}} | Grynasis plotas: kontūras atėmus išpjovas. Tai skaičiuoja pozicija. |
| Kontūras | Bendras plotas kontūro viduje (rodoma, kai yra išpjovų). |
| Išpjovos | Kiek yra skylių ir jų bendras plotas. |
| Perimetras | Kontūro kraštinių ilgis, **plius** kiekvienos išpjovos kraštinės („su išpjovomis“). |

Perimetre sąmoningai įskaitomos išpjovų kraštinės, pavyzdžiui, kraštų formos ar pagrindas, einantys ir aplink skylę. Jei reikia tik išorinės kraštinės, tos pozicijos skyles laikykite atskirai arba išorinę kraštinę matuokite kaip tiesinį ruožą.

Pozicijos {{ui:Vienetas}} nusako, kaip pateikiama suma: SF, SY arba m². Skydelis **Pasirinkta žymė** ir būsenos juosta visada rodo kvadratines pėdas.

## Ploto taisymas

- **Perkelti kampą**: pasirinkite plotą ir vilkite kampinį valdiklį (skylės taip pat turi valdiklių). Jei nauja forma kirstų pati save arba išstumtų skylę už ribų, kampas grąžinamas: „Taškas grąžintas.“
- **Perkelti į kitą poziciją**: sąraše **Pozicija** skiltyje **Pasirinkta žymė** pasirinkite kitą plotų poziciją.
- **Naikinti**: {{key:Delete}}, {{ui:Naikinti}} įrankių juostos meniu {{ui:Daugiau}} arba {{ui:Naikinti žymę}}.

## Gylis tūriams

Plotų pozicijai nurodykite {{ui:Gylis}} (pavyzdžiui, `0'-4"` perdangai) ir surinkimo komponente naudokite `A * H / 27`, kad gautumėte kubinius jardus. Žr. [Surinkimai ir formulės](topic:assemblies).
