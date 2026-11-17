---
title: Štetje vsega v naboru
summary: Enkrat označite legendo simbolov in TakeoffCraft v enem zagonu prešteje vsak simbol iz nje na vsakem odprtem listu. Vsako štetje je povezava na svoj list, pregledate pa, preden se kaj doda.
keywords: preštej vse, legenda, legenda simbolov, celoten nabor, vsak list, vsi listi, vsaka vrata, vsaka armatura, naprave, razpredelnica, simboli, samodejno štetje, nivo ujemanja, podoben
from: adc99744
---

{{ui:Count everything}} prebere legendo simbolov in nato prešteje vsak simbol iz nje na vsakem odprtem listu. Je {{ui:Auto count}} za celotno legendo naenkrat. Gre za preprosto ujemanje simbolov na vaših listih, ne za naučen model, in nič ne zapusti vašega računalnika. Pregledajte štetja, preden jih dodate: je pomočnik, ne zagotovilo.

## Štetje legende

1. Odprite načrte. Legenda na katerem koli listu zadostuje: simboli z imeni ob njih.
2. Izberite {{ui:Count everything}} na orodni vrstici.
3. Povlecite okvir okoli legende, simbolov in imen. Naslov brez simbola zraven (SYMBOL LEGEND) se izpusti sam.
   Plošča našteje vsak simbol s svojo sliko in imenom, natisnjenim ob njem. Ime postane ime postavke, zato ga tu preimenujte, če želite.
4. Odkljukajte simbole, ki jih ne želite šteti. Simbol, ki ga ni mogoče iskati (premajhen ali prazen), pove, zakaj.
5. Izberite {{ui:Count on N sheets}}. Vrstica prikazuje list, ki se preiskuje; {{ui:Cancel}} ustavi zagon. Stran ostane uporabna.

Simboli same legende na njenem listu se ne štejejo. List, narisan v drugem merilu, se preišče v tem merilu, simboli pa se najdejo zasukani v katerikoli pravi kot.

## Pregled štetij

- Vsak simbol kaže svojo skupno vsoto in pod njo povezavo za vsak list, ki ga ima („E-103: 4“). Kliknite eno, da pridete na ta list. Najdbe so obkrožene v barvi postavke.
- **Kliknite okvir**, da to najdbo izločite. Okvir je črtkan in prečrtan; kliknite ga znova, da se vrne.
- **Premaknite raven ujemanja** (od 50 % do 100 %, začne se pri vaši nastavitvi v {{ui:Settings}}). Višja raven obdrži samo tesna ujemanja. Drsnik samo filtrira, kar je bilo najdeno; nič se ne išče znova.
- Dva simbola, ki sta si podobna (dvojna in štirojna vtičnica), se lahko ujemata z istim mestom. Boljše ujemanje ga vzame, plošča pa pove, na koliko mestih se je to zgodilo, da jih lahko preverite.
- List, ki je prevelik za iskanje pri velikosti simbola, se preskoči, plošča pa to pove.

## Dodajte jih

Izberite {{ui:Add N marks}}. Vsak simbol postane postavka štetja z oznako na vsaki najdbi. Ime, ki je že vaša postavka štetja, se ponovno uporabi (nič se ne podvoji tam, kjer ste že označevali ročno). Celoten zagon je en korak: {{key:Ctrl+Z}} vzame vsako postavko in oznako nazaj.

Kar sprejmete, se doda tudi v {{ui:Learned}}: simboli se shranijo v datoteki predizmere za naslednjič.

## Z vašim pomočnikom

Če v Nastavitvah dovolite pomočnike, lahko berejo legendo (legend_open), zaženejo štetje v ozadju (legend_count_start, nato legend_count_status), preberejo štetja (legend_count_result) in jih dodajo (legend_count_add, ki lahko najprej prikaže predogled, kaj bi dodal). Gre za isti zagon, ki ga vidite na plošči.

## Simboli pod poljubnim kotom

Označite {{ui:Symbols at any angle}}, preden začnete šteti, da poiščete tudi simbole, narisane pod kotom, ki ni pravi kot (diagonalni vtič v steni, armatura, obrnjena po strehi). Iskanje nato obrne vsak simbol na vsakih 15 stopinj; okrogel simbol še vedno potrebuje eno iskanje, simbol, ki ni okrogel, pa lahko traja do šestkrat dlje. Pri načrtih, narisanih pravokotno, ga pustite izklopljenega.

## Dobro je vedeti

- Potrebuje simbole, narisane na enak način kot v legendi. Legenda, narisana v drugi velikosti kot listi, je v redu, če so merila listov nastavljena; brez meril se simboli iščejo v velikosti legende.
- Simbol, skozi katerega poteka stena ali dolga črta, se lahko zgreši, ker ne izgleda več kot slika v legendi. Pred zaupanjem ostalemu preverite najdbe na prvem listu.
- Skeniran list brez besedila še vedno deluje: simboli se najdejo po svojih vrsticah, imena pa vnesete ročno.
