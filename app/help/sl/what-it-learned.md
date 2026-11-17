---
title: Kaj se je TakeoffCraft naučil iz vaših predizmer
summary: TakeoffCraft hrani simbole, ki ste jih potrdili s Samodejnim štetjem, vaše komplete pogojev, sestave, ki jih največ uporabljate, in vzorce, ki se ponavljajo na vsaki strani, vse v lastni datoteki predizmere. Oglejte si jih, uporabite jih, izbrišite jih.
keywords: učenje, naučeno, pomočnik, zapomni, simboli, predloge, kot zadnje delo, zadnje delo, komplet pogojev, pogoji, ponovna uporaba, sestavi, najbolj uporabljeno, predlogi, ponovi na vsaki strani, vsaka stran, glava risbe, vzorec, počisti vse, pozabi, zasebnost
from: 54d99e99
---

TakeoffCraft postaja hitrejši, čim več predizmer opravite z njim. Uči se **samo iz tega, kar sprejmete**:

- simboli, ki ste jih obkrožili s [Samodejnim štetjem](topic:auto-count) in jih nato dodali,
- komplete pogojev, ki jih shranite,
- sestave, ki jih uporabljate (enkrat na delo),
- vzorci oznak, ki jih ponavljate na vsaki strani.

Gre za preprosto ujemanje na vaših listih, enako iskanje, kot ga opravi Samodejno štetje. Ni naučen model. Vse, kar se nauči, je shranjeno **v datoteki te predizmere** (`.takeoff.json`), nikamor pa ni poslano. Za prenos v naslednje delo uporabite [Kot zadnje delo](topic:what-it-learned#same-as-last-job).

Izberite {{ui:Naučeno}} na orodni vrstici (žarnica, poleg {{ui:Samodejno štetje}}), da vidite vse.

## Simboli

Ko z {{ui:Samodejno štetje}} obkrožite simbol in izberete {{ui:Dodaj}}, se obkroženi simbol shrani skupaj z ravnjo ujemanja, ki ste jo sprejeli.

- V {{ui:Naučeno}} izberite {{ui:Poišči na tem listu}} ali {{ui:Poišči na vseh listih}}. Odpre se običajni pregled Samodejnega štetja: kliknite okvir, če ga želite izpustiti, premaknite drsnik in nato dodajte. Nič se ne doda, dokler tega ne storite.
- Ko odprete list, na katerem naučenega simbola še ni, vrstica na vrhu ponudi {{ui:Najdi …}} za ta simbol. {{ui:Zdaj ne}} ga skrije za ta list.
- Če predizmera nima postavke s tem imenom, dodajanje oznak doda tudi postavko (en korak razveljavitve).
- Ponovno dodajanje simbola iste postavke se šteje k simbolu, ki ga program že pozna; simbol, ki je videti drugače, se ohrani kot drugi.
- Tako kot Samodejno štetje najde simbol tudi pod pravim kotom in na listih z drugim merilom.

## Kompleti pogojev

Komplet hrani pogoje predizmere (postavke z enotami, cenami, odpadkom in sestavi), brez oznak.

1. V {{ui:Naučeno}} izberite {{ui:Shrani pogoje teh predizmer kot komplet…}} in ga poimenujte. Komplet z istim imenom se zamenja.
2. V predizmeri, ki ima komplet, {{ui:Dodaj}} vstavi pogoje, ki jih še nima. Pogoji z istim imenom in tipom ostanejo nedotaknjeni. Dejanje je en korak razveljavitve.

## Kot zadnje delo

Datoteka predizmere vašega zadnjega dela hrani, kar se je naučilo. Da začnete novo delo iz nje:

1. Odprite nove načrte in izberite {{ui:Naučeno}} › {{ui:Kot zadnje delo…}}.
2. Izberite `.takeoff.json` zadnjega dela.
3. Označite, kaj naj se prenese: njegove pogoje (samo tiste, ki jih ta predizmera še nima) ter to, kar se je naučilo (simboli, kompleti, sestavi, vzorci). Nato izberite {{ui:Prevzemi}}.

Njegovi pogoji se prav tako shranijo kot komplet z imenom tega dela. Njegove oznake in količine ostanejo v njegovi datoteki. Vse skupaj je en korak razveljavitve.

## Sestavi, ki jih največ uporabljate

Postavka, ki ima sestav, se šteje kot uporabljena enkrat na delo, kadar ima količino in shranite predizmero. Delo je nabor načrtnih datotek, iz katerih je predizmera narejena, zato ponovno shranjevanje iste predizmere ne šteje dvakrat. Seznam pod {{ui:Sestavi, ki jih največ uporabljate}} postavi najpogosteje uporabljene na vrh. Izpusti tiste, ki jih ta predizmera že ima. {{ui:Dodaj}} vstavi enega tako, kot ste ga nazadnje uporabili, z vsemi deli.

## Ponovi na vsaki strani

Za oznake, ki so enake na vsaki strani nabora, na primer štetje glave risbe ali pogosta podrobnost:

1. Izberite oznake na enem listu ([Izbor oznak](topic:copy-paste#select-the-marks)).
2. V {{ui:Naučeno}} izberite {{ui:Ponovi izbrane oznake na vsaki strani…}}, poimenujte vzorec in potrdite.

Gredo na vsako drugo odprto stran **iste velikosti**, na isto mesto, v enem koraku razveljavitve. Odseki in površine gredo samo na strani z istim merilom; števila gredo na katerokoli stran te velikosti. Stran, ki jih že ima, se preskoči. Vzorec se ohrani, zato strani, ki jih odprete pozneje, dobijo ponudbo v vrstici ali pa uporabite {{ui:Ponovi na vsaki strani}} v seznamu.

## Oglejte si, izbrišite

Vse naučeno je navedeno v {{ui:Naučeno}}. Koš izbriše eno stvar. {{ui:Počisti vse}} izbriše vse naučeno in pusti vaše postavke in oznake pri miru. Obe dejanji lahko razveljavite, dokler ne zaprete predizmere, obe pa se shranita s predizmero.

Če želite prenehati učiti v eni predizmeri, odznačite {{ui:Uči se iz teh predizmer}}. Nič novega se ne nauči, navedeno pa ostane, dokler ne izbrišete.

## Dobro je vedeti

- Starejše različice TakeoffCraft odprejo datoteko z naučenimi stvarmi normalno. Ta del ignorirajo in ga izpustijo, če datoteko znova shranijo.
- Naučen simbol je majhna slika tega, kar ste obkrožili, shranjena v datoteki (nekaj kilobajtov vsaka).
- Naučeni simboli se iščejo enako kot pri Samodejnem štetju, zato veljajo iste omejitve: [Samodejno štetje simbola](topic:auto-count).
