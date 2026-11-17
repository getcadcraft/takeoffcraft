---
title: Preverite predizmero v 3D
summary: Oglejte si stene, plošče in štetja odprtega lista, ki stojijo na risbi, jih obračajte in kliknite eno, da izberete njeno oznako.
keywords: png, slika, fotografija, posnetek zaslona, zloži, etaže, nivoji, višina, glb, gltf, izvoz 3d, debelina stene, višina podlage, odprtina, nadglavje vrat, 3d, tri d, preveri, pogled, stene, višina stene, plošča, globina, prostornina, vrtenje, model, izbira, izometrično, perspektiva
from: fb16b4f7
---

Pogled 3D je preverjanje, ne druga risba: postavi predizmero odprtega lista na zaslon, nad sam list, tako da se manjkajoča stena, podvojena plošča ali blodeče štetje vidi na prvi pogled.

Pred začetkom: list potrebuje merilo ([Nastavitev merila](topic:set-the-scale)). Višine in globine potrebujejo prave čevlje (ft), zato na listu brez merila {{ui:3D}} to pove in ostane pri ravnem listu.

## Odprite pogled 3D

1. Prikažite list, ki ga želite preveriti.
2. Izberite {{ui:3D}} na vrstici, ki prikazuje ime lista in merilo, ali pritisnite {{key:3}}.
   Prvič se pogled 3D nekaj časa nalaga. List je narisan na tleh, predizmera pa stoji nanj v barvi vsake postavke.
3. Za vrnitev izberite {{ui:3D}} znova, {{ui:Nazaj na list}} ali pritisnite {{key:3}}. Izbira orodja za risanje (Linearno, Površina, Štetje itd.) prav tako vrne nazaj, saj se oznake risajo na ravnem listu.

Prikazuje list na zaslonu; liste zamenjate v seznamu listov ali s {{key:PageDown}} in {{key:PageUp}}, pogled 3D pa sledi. Če želite videti več etaž naenkrat, jih zložite (spodaj).

## Kaj vidite

| Oznaka | V 3D |
|---|---|
| Linearni odsek, postavka z višino | Stena te višine vzdolž odseka. Krivi odseki sledijo krivulji. |
| Linearni odsek, postavka brez višine | Črta na listu. Postavki dajte višino pod **Postavka**, da jo postavite pokonci. |
| Površina, postavka z globino | Plošča te globine z odprtimi izrezi. |
| Površina, postavka brez globine | Tanka plošča 2", da se še vedno vidi. |
| Štetje | Majhen drog na vsaki šteti točki. |

Višina je polje {{ui:Višina}} linearne postavke, globina pa polje {{ui:Globina}} površinske postavke pod **Postavka** (glejte [Ustvarjanje postavk predizmere](topic:create-items)). Spremenite jo in se pogled 3D takoj posodobi. Opomba pod imenom lista pove, kaj list vsebuje, na primer „Ta list v 3D: 2 steni, 1 plošča, 3 štetja“, in koliko odsekov ali površin nima višine ali globine. Kliki gredo skozi njo do pogleda.

Števila se v 3D ne spremenijo: površina stene je njena natančna dolžina, pomnožena z višino, prostornina plošče pa njena neto površina (obris minus izrezi, krivulje natančno), pomnožena z globino. Krivulje so na zaslonu narisane samo kot kratki ravni kosi.

## Pogled naokoli

| Dejanje | Kaj naredi |
|---|---|
| Povlecite ali povlecite s srednjim gumbom | Vrti okoli predizmere. |
| {{key:Shift}} + povlecite ali povlecite z desnim gumbom | Pomik. |
| Kolešček miške | Povečava in pomanjšava pri kazalcu. |
| Podrsanje z dvema prstoma na sledilni ploščici | Vrtenje ({{key:Shift}} premakne). Stisk povečuje. |
| {{ui:Izo}}, {{ui:Zgoraj}}, {{ui:Spredaj}}, {{ui:Zadaj}}, {{ui:Levo}}, {{ui:Desno}}, {{ui:Spodaj}} | Standardni pogledi, uokvirjeni na predizmero. Pogled 3D se odpre v {{ui:Izo}}. |
| {{ui:Perspektiva}} | Perspektiva vklopljena ali izklopljena (vzporedna, ko je izklopljena). |
| {{ui:Povečaj na obseg}} ali {{key:F}} | Ves list. |
| {{ui:List}} | Pokaže ali skrije risbo na tleh. |
| Kocka pogleda, zgoraj desno | Kliknite ploskev, rob ali kot za pogled od tam; povlecite jo za vrtenje; povlecite obroč kompasa za obračanje; gumb hiške vrne v {{ui:Izo}}. |

Kot v zgornjem desnem vogalu prikazuje kocko pogleda, majhno ikono osi X, Y, Z ali nič: izberite v {{ui:Nastavitve}}, na zavihku TakeoffCraft, pod **Indikator kota** ([Nastavitve TakeoffCraft](topic:settings)). Ravni list nima indikatorja kota.

:::touch
En prst vrti, dva prsta stisnete za povečavo in premaknete za pomik. Dotik izbere.
:::

## Stene z debelino, podlago in odprtinami

Linearna postavka z višino stoji kot tanek pas. Če jo želite videti kot pravo steno, ji dajte njeno obliko pod **V 3D** v njenih nastavitvah:

- **Debelina stene** (8", 0.2 m): stena postane trdno telo, na sredino črte, ki ste jo narisali, z zaobljenimi vogali.
- **Višina podlage**: stena se začne toliko nad tlemi (podbojna, zgornja omarica). Tudi površinske postavke jo imajo: strop na 9'-0".
- **Nadglavje odprtine**: odbiti odsek (vrata, [Odštejte del odseka](topic:measure-linear#deduct-a-part-of-a-run)) ohrani steno nad to višino, zato so vrata vidna kot vrata. Brez tega odbiti odsek pušča režo do vrha.

Ti nastavki le oblikujejo pogled 3D: količine (dolžina, površina stene, stroški) ostanejo take, kot so bile.

## Zložite etaže

1. Odprite PDF-je vsake etaže.
2. V pogledu 3D izberite {{ui:Nivoji …}} in vpišite višino vsake etaže, na primer `0` za pritličje in `12'` za naslednjo. Prazno polje list izpusti.
3. Izberite {{ui:Zloži}}. Vsak list z nivojem prikaže svojo predizmero na svoji višini; list na zaslonu leži pod svojo etažo, drugi so obrobljeni. Opomba pove, koliko etaž je zloženih.

Listi se poravnajo po svojem mestu na strani, zato to deluje za tlorise, izrisane enako (enaka velikost lista in položaj). List z nivojem, a brez merila, se izpusti in opomba to pove. Izberite {{ui:Zloži}} znova za en list naenkrat. Nivoji so shranjeni skupaj s predizmero.

## Shranite pogled 3D kot sliko

Izberite {{ui:PNG}} na vrstici 3D za sliko pogleda, kakršen je na zaslonu (`… 3D.png`); {{key:Shift}} + klik na {{ui:PNG}} naredi dvakrat večjo sliko (`… 3D@2x.png`), za tisk.

## Shranite pogled 3D kot model

Izberite {{ui:GLB}} na vrstici 3D. Dobite datoteko `.glb` (glTF, binarno) tega, kar pogled prikazuje — tla na zaslonu ali vse zložene etaže — ki jo odprejo drugi 3D programi: en objekt na oznako, poimenovan po njegovi postavki, v barvi postavke, v metrih, z osjo Y navzgor. Sam list in obrisi vanj niso vključeni.

## Izberite oznako iz 3D

Kliknite steno, ploščo, podlago ali drog. Njena oznaka postane izbrana oznaka, točno kot da bi kliknili nanjo na listu: prikaže se pod **Izbrana oznaka**, njena postavka postane trenutna, vrstica stanja pa poda njeno dolžino in višino ali površino, globino in kubične jarde. {{key:Shift}} + klik doda oznake izbiri ali jih iz nje odstrani. {{key:Delete}} izbriše izbrane oznake in {{key:Mod+Z}} jih vrne; {{key:Esc}} ne izbere nobene. Nazaj na listu ostanejo iste oznake izbrane.

:::tip
Risba sledi temi: v temi Model list na tleh potemni kot ravni pogled.
:::
