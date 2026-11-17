---
title: Zemljani radovi i visinske kote
summary: Označite visinske kote na situacionom planu, prosledite ih u CivilCraft za površinu i iskop i nasip, a ovde uzmite jednostavne količine iskopa.
keywords: zemljani radovi, iskop, iskop i nasip, nasip, nivelacija, visinska kota, kote, topo, površina, triangulacija, civilcraft, tačke, pnezd, rov
from: a898e508
---

TakeoffCraft meri ono što je nacrtano na listu. Zemljani radovi zahtevaju teren, pa se dele sa CivilCraft-om, koji pravi površine od tačaka, nivelira ih i računa iskop i nasip i odvoz.

## Jednostavan iskop ovde

Za otisak iskopa do jedne dubine dovoljna je stavka površine sa **dubinom**: zapremina je površina × dubina. Opšti [paket izvođača](topic:trade-packs) ima stavku masovnog iskopa (zapremina u tlu, rastresita zapremina i broj kamiona) i stavku rova za instalacije (iskop, podloga i zatrpavanje po dužini i dubini).

## Visinske kote za CivilCraft

1. Podesite razmeru lista za situaciju.
2. Napravite stavku **Brojanje**, na primer „Postojeći teren“, i kliknite svaku visinsku kotu na listu.
3. Izaberite oznaku i u panelu Izabrana oznaka upišite njenu {{ui:Visinska kota}}: `102.5`, `102'-6"` ili `31.24 m`. Negativne i nulte kote su u redu.
4. Otvorite meni {{ui:Izvezi}} i izaberite {{ui:Visinske kote}}. Dobijate fajl tačaka (`.csv`) sa kolonama Point, Northing, Easting, Elevation i Description, jedan red po označenoj tački otvorenog lista.
5. Otvorite taj fajl u CivilCraft-u (vidi [Uvoz tačaka](app:civilcraft/import-points)). Program pravi površinu od tačaka ([Izrada površine](app:civilcraft/build-surface)); odatle upoređuje površine i daje iskop i nasip ([Zapremine](app:civilcraft/volumes)).

Northing i Easting su sopstvene koordinate lista u stopama, merene od ugla strane po razmeri. Rastojanja i zapremine između tačaka su tačna, ali nisu koordinate vašeg terena iz geodetskog snimanja. Pretvorite ih u koordinate terena u CivilCraft-u kada je potrebno.

:::note
Tačke sa različitih listova nemaju zajedničke koordinate, pa izvoz uzima samo otvoreni list. Kote se čuvaju sa predmerom i prenose se kopiranjem i nalepljivanjem.
:::

## Iskop i nasip iz CivilCraft-a

Zemljani radovi iz CivilCraft-a vraćaju se kao dve stavke koje možete oceniti:

1. U CivilCraft-u izravnajte plato i koridore, pa izaberite {{ui:Pošalji u TakeoffCraft}} pod **Zemljani radovi** ([Zapremine zemljanih radova](app:civilcraft/volumes)). Sačuva se fajl količina (`.quantities.json`).
2. U TakeoffCraft-u ga otvorite pomoću {{ui:Otvori predmer}} ili ga prevucite na program. Predmer ostaje otvoren: fajl dodaje **Zemljani radovi: iskop** i **Zemljani radovi: nasip** kao [unesene količine](topic:create-items#typed-quantities-no-drawing) u kubnim jardima (CY) za projekat u stopama, odnosno kubnim metrima (m³) za projekat u metrima. Ovo je jedan korak: {{key:Mod+Z}} ga opozove.
3. Preimenujte ih, podesite škart, cene i sklopove kako želite.

Kada se projekat promeni, ponovo pošaljite iz CivilCraft-a i otvorite novi fajl: ista dva stavka dobijaju nove količine. Njihovi nazivi, cene, škart i sklopovi ostaju kakvi ste ih podesili. Ako je jedinica projekta promenjena, statusna traka to kaže: proverite cene. Fajl iz drugog projekta CivilCraft-a dodaje sopstvena dva stavka.

Količine su zapremine u tlu, kako ih je CivilCraft izmerio (metoda mreže): bez skupljanja ili nabrekavanja. Dodajte to kao škart ili formulom kao `Q * 1.25` za rastresitu zapreminu. Uređivač stavke pokazuje odakle je svaka i kada; kolona beleški u predračunu to takođe kaže.

:::note
Fajl količina je običan JSON (`"format": "cadcraft-quantities"`), pa i skripta ili drugi program može da napiše jedan: naziv programa, projekat i stavke sa ključem, nazivom, jedinicom i količinom.
:::
