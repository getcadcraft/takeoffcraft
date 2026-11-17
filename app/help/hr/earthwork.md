---
title: Zemljani radovi i visinske kote
summary: Označite visinske kote na situacijskom planu, predajte ih programu CivilCraft za površinu te iskop i nasip, a jednostavne količine iskopa obračunajte ovdje.
keywords: zemljani radovi, iskop, nasip, iskop i nasip, planiranje terena, visinska kota, kote, topo, površina, triangulacija, civilcraft, točke, pnezd, rov
from: a898e508
---

TakeoffCraft mjeri ono što je nacrtano na listu. Zemljani radovi zahtijevaju površinu terena, pa se dijele s programom CivilCraft, koji gradi površine iz točaka, planira ih i izračunava iskop, nasip i odvoz.

## Jednostavan iskop ovdje

Za tlocrt iskopan do jedne dubine dovoljna je stavka površine s **dubinom**: volumen je površina × dubina. [Paket po struci](topic:trade-packs) za izvođače ima stavku masovnog iskopa (volumen u sraslom stanju, volumen u rastresitom stanju i broj kamiona) i stavku rova za komunalne instalacije (iskop, posteljica i zatrpavanje po duljini i dubini).

## Visinske kote za CivilCraft

1. Postavite mjerilo lista s terenom.
2. Napravite stavku **Broj**, npr. „Postojeći teren“, i kliknite svaku visinsku kotu na listu.
3. Odaberite oznaku i u ploči Odabrana oznaka upišite njezinu {{ui:Kota}}: `102.5`, `102'-6"` ili `31.24 m`. Negativne i nulte kote su dopuštene.
4. Otvorite izbornik {{ui:Izvoz}} i odaberite {{ui:Visinske kote}}. Dobit ćete datoteku s točkama (`.csv`) sa stupcima Point, Northing, Easting, Elevation i Description, jedan redak za svaku označenu točku otvorenog lista.
5. Otvorite tu datoteku u programu CivilCraft (vidi [Uvoz točaka](app:civilcraft/import-points)). Program iz točaka gradi površinu ([Izrada površine](app:civilcraft/build-surface)); odatle uspoređuje površine i daje iskop i nasip ([Volumeni](app:civilcraft/volumes)).

Northing i Easting su vlastite koordinate lista u stopama, mjerene od kuta stranice pri njezinom mjerilu: udaljenosti i volumeni između točaka su točni, ali nisu koordinate vaše geodetske izmjere lokacije. Premjestite ih na koordinate lokacije u programu CivilCraft kad to zatrebate.

:::note
Točke s različitih listova nemaju zajedničke koordinate, pa izvoz uzima samo otvoreni list. Kote se spremaju s predmjerom i prenose se kopiranjem i lijepljenjem.
:::

## Iskop i nasip iz programa CivilCraft

Zemljani radovi u programu CivilCraft vraćaju se kao dvije stavke koje možete odmah cijeniti:

1. U programu CivilCraft izradite platoe i koridore, zatim odaberite {{ui:Pošalji u TakeoffCraft}} pod **Zemljani radovi** ([Volumeni zemljanih radova](app:civilcraft/volumes)). Sprema se datoteka količina (`.quantities.json`).
2. U programu TakeoffCraft otvorite je s {{ui:Otvori predmjer}} ili je ispustite na aplikaciju. Vaš predmjer ostaje otvoren: datoteka dodaje stavke **Zemljani radovi: iskop** i **Zemljani radovi: nasip** kao [tipizirane količine](topic:create-items#typed-quantities-no-drawing) u kubičnim jardima (CY) za projekt u stopama ili u kubnim metrima (m³) za projekt u metrima. Riječ je o jednom koraku: {{key:Mod+Z}} ga poništava.
3. Preimenujte ih, zatim postavite gubitak, cijene i sklopove kako želite.

Kad se projekt promijeni, ponovno pošaljite iz programa CivilCraft i otvorite novu datoteku: iste dvije stavke dobivaju nove količine. Njihovi nazivi, cijene, gubitak i sklopovi ostaju kako ste ih postavili. Ako se mjerna jedinica projekta promijenila, statusna traka to kaže: provjerite cijene. Datoteka iz drugog projekta programa CivilCraft dodaje vlastite dvije stavke.

Količine su volumeni u sraslom stanju, kako ih je CivilCraft izmjerio (metodom mreže): bez skupljanja ili nabreknuća. Dodajte to kao gubitak ili formulom poput `Q * 1.25` za rastresiti volumen. Uređivač stavke pokazuje odakle je svaka došla i kada; stupac napomena u {{ui:Predračun}} to također navodi.

:::note
Datoteka količina je obični JSON (`"format": "cadcraft-quantities"`), pa je može napisati i skripta ili drugi program: naziv aplikacije, projekt te stavke s ključem, nazivom, jedinicom i količinom.
:::
