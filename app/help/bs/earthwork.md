---
title: Zemljani radovi i kote tačaka
summary: Označi kote tačaka na situacionom planu, predaj ih aplikaciji CivilCraft za površ terena te iskop i nasip, a ovdje uzmi jednostavne količine iskopa.
keywords: zemljani radovi, iskop, iskop, nasip, iskop i nasip, nivelacija, kota tačke, kote, topo, površ, triangulacija, civilcraft, tačke, pnezd, rov
from: a898e508
---

TakeoffCraft mjeri ono što je nacrtano na listu. Zemljani radovi zahtijevaju površ terena, pa se dijele s aplikacijom CivilCraft, koja gradi površi od tačaka, nivelira ih i računa iskop, nasip i odvoz.

## Jednostavan iskop ovdje

Za tlocrt iskopan do jedne dubine dovoljna je stavka površine s **dubinom**: zapremina je površina × dubina. Opći izvođač ima [paket za izvođača](topic:trade-packs) sa stavkom za masovni iskop (zapremina u tlu, rastresita zapremina i broj kamiona) i stavkom za komunalni rov (iskop, posteljica i zatrpavanje po dužini i dubini).

## Kote tačaka za CivilCraft

1. Postavi razmjeru situacionog lista.
2. Napravi stavku **Brojanje**, na primjer "Postojeći teren", i klikni svaku kotu tačke na listu.
3. Izaberi oznaku i upiši njenu {{ui:Elevation}} u panel Odabrana oznaka: `102.5`, `102'-6"` ili `31.24 m`. Negativne i nulte kote su u redu.
4. Otvori meni {{ui:Export}} i izaberi {{ui:Spot elevations}}. Dobijaš datoteku tačaka (`.csv`) s kolonama Point, Northing, Easting, Elevation i Description, jedan red po označenoj tački otvorenog lista.
5. Otvori tu datoteku u aplikaciji CivilCraft (vidi [Uvoz tačaka](app:civilcraft/import-points)). Ona iz tačaka gradi površ ([Izrada površi](app:civilcraft/build-surface)); odatle upoređuje površi i daje iskop i nasip ([Zapremine](app:civilcraft/volumes)).

Sjever (northing) i istok (easting) su sopstvene koordinate lista u stopama, mjerene od ugla stranice po njenoj razmjeri: razmaci i zapremine između tačaka su tačni, ali nisu koordinate geodetskog snimanja tvoje lokacije. Kada ih trebaš, prebaci ih na koordinate lokacije u aplikaciji CivilCraft.

:::note
Tačke s različitih listova nemaju zajedničke koordinate, pa izvoz uzima samo otvoreni list. Kote se spašavaju s predmjerom i prenose kopiranjem i lijepljenjem.
:::

## Iskop i nasip iz CivilCraft-a

Zemljani radovi iz aplikacije CivilCraft vraćaju se kao dvije stavke koje možeš cijeniti:

1. U aplikaciji CivilCraft nivelira podloge i koridore, pa izaberi {{ui:Send to TakeoffCraft}} pod **Zemljani radovi** ([Zapremine zemljanih radova](app:civilcraft/volumes)). Sprema se datoteka količina (`.quantities.json`).
2. U TakeoffCraft-u otvori je s {{ui:Open takeoff}} ili je prevuci na aplikaciju. Predmjer ostaje otvoren: datoteka dodaje **Zemljani radovi: iskop** i **Zemljani radovi: nasip** kao [unesene količine](topic:create-items#typed-quantities-no-drawing) u kubnim jardama (CY) za projekat u stopama, ili u kubnim metrima (m³) za projekat u metrima. To je jedan korak: {{key:Mod+Z}} ga poništava.
3. Preimenuj ih, postavi otpad, cijene i sklopove kako želiš.

Kada se projekat promijeni, ponovo pošalji iz aplikacije CivilCraft i otvori novu datoteku: iste dvije stavke dobiju nove količine. Njihova imena, cijene, otpad i sklopovi ostaju onako kako su postavljeni. Ako se jedinica projekta promijenila, statusna traka to kaže: provjeri cijene. Datoteka iz drugog projekta aplikacije CivilCraft dodaje svoje dvije stavke.

Količine su zapremine u tlu, kako ih je CivilCraft izmjerio (metoda mreže): bez skupljanja ili nabrekavanja. Dodaj ih kao otpad ili formulom poput `Q * 1.25` za rastresitu zapreminu. Uređivač stavke pokazuje odakle je svaka došla i kada; kolona napomena u predračunu to također navodi.

:::note
Datoteka količina je običan JSON (`"format": "cadcraft-quantities"`), pa skripta ili drugi program može također napisati jednu: naziv aplikacije, projekat i stavke s ključem, imenom, jedinicom i količinom.
:::
