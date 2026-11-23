---
title: Što je novo u 0.9 (ranije)
summary: Duljine u metrima, centimetrima ili milimetrima, metričke površine u m2 s površinom zida, predlošci mjerila 1:75 i 1:150, jedinice težine i temperature, Luk s deset načina, kursori uživo, Prati i popis osoba.
keywords: što je novo 0.9, ranije izdanje, što je novo, bilješke o izdanju, dnevnik promjena, 0.9, prikaz duljina kao, metri, centimetri, milimetri, metrički, prati globalne postavke, jedinice, prikaz jedinica, m2, četvorni metri, površina zida, predlošci mjerila, 1:75, 1:150, težina, kilogrami, kg, tona, t, lb, TON, temperatura, celzij, fahrenheit, luk, načini luka, luk s 3 točke, radijus, uživo, kursori, prati, popis osoba, oznake, savjeti, raspored, 0.8, 0.8.1, verzija, nove značajke, broji sve, legenda, legenda simbola, cijeli set, memorija cijena, prošli poslovi, zadnji posao, tipična cijena, dobavljač, zaliha, rok isporuke, čekanje, popis za narudžbu, nedostatak, ploča problema, asistent, jezici, ulazni uređaji, redci alatne trake, dwg
from: f4322ba2
---

Ovo je što se promijenilo u TakeoffCraft 0.9 u odnosu na 0.8.1. Riječ je o maloj verziji za ovu aplikaciju: duljine se sada mogu čitati u metrima, centimetrima ili milimetrima, površine i mjerila pravilno prate metrički rad, a Luk ima deset načina crtanja. Sesije uživo također prikazuju tko je gdje.

## Novo

### Čitanje duljina u metrima, centimetrima ili milimetrima

- **Prikaz duljina kao.** {{ui:Postavke}} › {{ui:TakeoffCraft}} ima {{ui:Prikaz duljina kao}} s {{ui:Prati globalne postavke}}, {{ui:Stope i palci}}, m, cm i mm. {{ui:Prati globalne postavke}} koristi metričku jedinicu duljine koju ste označili u {{ui:Postavke}} › {{ui:Globalne}} › {{ui:Jedinice}}, a stope i palce kad nijedna nije označena. Mijenja način na koji se duljine čitaju na listu, u statusnoj traci i na pločama, uključujući visine, dubinu, debljinu i etaže. Goli broj upisan u polje visine čita se u prikazanoj jedinici.
- **Samo prikaz.** Količine, troškovi i izvozi računaju se iz točnih duljina. Izbor 1/16, 1/8 i 1/4 inča pojavljuje se samo za stope i palce. Vidi [Prikaz duljina u metrima](topic:show-lengths-in-meters).
- **Jedinice težine.** Stavka {{ui:Upisana količina (bez crteža)}} sada može biti u lb, TON, kg ili t i može se cijeniti po jedinici.
- **Temperatura.** Svaka stavka ima neobavezno polje {{ui:Temperatura}} u uređivaču stavki, upisano u °C ili °F. {{ui:Prikaži temperature kao}} u {{ui:Postavke}} › {{ui:TakeoffCraft}} nudi {{ui:Prati globalne postavke}}, °C ili °F.

### Površine i mjerila za metrički rad

- **Površine u m2 na crtežu.** Površina izmjerena metričkom stavkom sada na oznaci crteža i na ploči oznaka, kao i u tablici, piše m2 umjesto SF. Pravilo: m2 kad se stavka cijeni u metričkom sustavu ili se duljine prikazuju u m, cm ili mm, a inače SF.
- **Površina zida.** Linearna stavka s visinom također prikazuje površinu zida (duljina puta visina) na popisu stavki i kao napomenu retka ispod tablice količina po stavci.
- **Predlošci mjerila 1:75 i 1:150.** Nalaze se na popisu {{ui:Predložak}} u skupini {{ui:Mjerilo}}, koja sada ima 32 mjerila. Vidi [Predlošci mjerila](topic:scale-presets).

### Luk s deset načina

- Dok je {{ui:Luk}} uključen (gumb na alatnoj traci ili {{key:R}}), u traci lista pojavljuje se okvir {{ui:Način luka}}: Tri točke; Početak, središte, kraj; Početak, središte, kut; Početak, središte, duljina; Početak, kraj, kut; Početak, kraj, smjer; Početak, kraj, radijus; Središte, početak, kraj; Središte, početak, kut i Središte, početak, duljina. Kut, duljina, radijus i smjer mogu se kliknuti ili upisati. Radi u linearnim nizovima, površinama i otvorima. Datoteke spremljene prije 0.9 otvaraju se jednako. Vidi [Crtanje lukova s deset načina](topic:draw-arcs-ten-methods).

### Zajednički rad

- **Vidite tuđe kursore.** U sesiji uživo pokazivač svake osobe vidi se na listu s njezinim imenom i bojom, s isprekidanim okvirom oko oznaka koje je odabrala. Osobe na drugom listu navode se s nazivom tog lista. Vidi [Rad uživo s drugima](topic:work-live).
- **Pratite osobu i popis osoba.** Gumb {{ui:Osobe}} u sesiji uživo navodi svaku osobu s alatom koji koristi, listom na kojem je i kad je zadnji put uređivala. {{ui:Prati}} pomiče vaš prikaz s njihovim, a domaćin može koristiti {{ui:Zamoli sve da me prate}}. Vidi [Praćenje suradnika u sesiji uživo](topic:follow-a-teammate).

## U svim aplikacijama

- **Opisi alata i početni savjet.** Tekst pri zadržavanju miša je Bootstrap opis, a početni savjet može se zatvoriti.
- **Trake kartica s pomicanjem.** Traka kartica ploče koja ne stane pomiče se umjesto da se odsječe.
- **Naslovi kartica.** Kartica preglednika glasi `<document> - TakeoffCraft | CadCraft`.
- **Raspored.** Popis rasporeda u {{ui:Postavke}} je padajući izbornik koji prikazuje odabrani raspored.
- **Jezik.** Jezik koji odaberete sada dopire i do riječi koje sama stranica ispisuje, poput Novo, Otvori i Spremi. Jezici osim engleskog su radne verzije dok ih ne pročita izvorni govornik.

## Iskrena ograničenja

- Prikaz duljina, jedinice težine i temperature te novi predlošci provjereni su testovima i na stranici. Svaka ploča pri svakoj jedinici nije ručno provjerena.
- Popis osoba nije ručno provjeren sa stvarnim razredom učitelja i učenika.
- Jezici osim engleskog su radne verzije strojnog prijevoda.
- Windows instalateri nisu digitalno potpisani kodom (Više informacija, zatim Ipak pokreni). Disk slika za macOS nije notarizirana (desni klik, zatim {{ui:Otvoreno}}).

## Ranije: 0.8 i 0.8.1

Ovo je što se promijenilo u TakeoffCraft 0.8 (objavljeno 2026-11-01) i 0.8.1 (2026-11-02) u odnosu na 0.7. Simboli legende sada se mogu brojati odjednom po cijelom setu, novi predmjer može započeti iz cijena vaših prošlih poslova, a predmjer se može provjeriti u odnosu na zalihe dobavljača. 0.8.1 je popravna verzija.

### Novo

**Brojite sve u setu**

- **Označite legendu jednom.** {{ui:Broji sve}} na alatnoj traci čita legendu simbola: povucite okvir oko simbola i nazive ispisane pored njih. Svaki simbol navodi se sa svojom slikom i nazivom, a naziv postaje naziv stavke. Odznačite što ne želite, zatim odaberite {{ui:Broji na N listova}}. Traka pokazuje list koji se pretražuje, {{ui:Odustani}} zaustavlja izvođenje, a stranica ostaje upotrebljiva.
- **Svi listovi u jednom prolazu.** Svaki simbol broji se na svakom otvorenom listu. List nacrtan u drugom mjerilu pretražuje se u tom mjerilu, a simboli se pronalaze okrenuti pod bilo kojim pravim kutom. Vlastiti simboli legende ne broje se na njezinom listu.
- **Pregledajte prije dodavanja.** Svaki zbroj ima poveznicu po listu ("E-103: 4") koja vodi na taj list. Kliknite okvir na pronalasku da ga izuzmete, a ponovo kliknite da ga vratite. Razina podudaranja (50 % do 100 %) samo filtrira pronađeno; ništa se ne pretražuje ponovo.
- **Jedan korak poništavanja.** {{ui:Dodaj N oznaka}} stvara stavku brojanja po simbolu s oznakom na svakom pronalasku. Naziv koji je već vaša stavka brojanja ponovno se koristi. {{key:Ctrl+Z}} vraća sve stavke i oznake. Ono što prihvatite ulazi i u {{ui:Naučeno}}.
- **Simboli pod bilo kojim kutom.** Označite {{ui:Simboli pod bilo kojim kutom}} prije brojanja da pronađete i simbole okrenute za kut koji nije pravi kut. Pretraga tada okreće svaki simbol svakih 15 stupnjeva, a simbol koji nije okrugao može trajati do šest puta dulje.
- **Što je to.** Obično podudaranje simbola na vašim listovima, bez treniranog modela, i ništa ne napušta vaše računalo. Na izmišljenom setu od 200 listova trajalo je 9.4 sekunde od početka do kraja u Chromeu na brzom stolnom računalu; stvarni setovi nacrta bit će sporiji. Vidi [Brojanje svega u setu](topic:count-everything).

**Memorija cijena iz vaših poslova**

- **TakeoffCraft pamti vaše stope.** Kad spremite predmjer, svaka cijenjena stavka koja se koristi pamti se po nazivu i tipu: stopa za materijal, stopa za rad, otpad i jedinica. Čuva se zadnjih 12 poslova za svaki naziv. Čuva se na ovom računalu uz Knjižnicu cijena, nikad unutar datoteke predmjera, i ništa se nigdje ne šalje.
- **Započnite novi predmjer iz toga.** {{ui:Cijene}} na alatnoj traci prikazuje za svaku stavku stope zadnjeg posla, tipične stope i raspon. {{ui:Koristi zadnje}} ili {{ui:Koristi tipične}} cijenu određuju jednoj stavci, a {{ui:Odredi cijenu za N stavki bez cijene iz memorije}} popunjava svaku stavku koja još nema cijenu. Svaka upotreba je jedan korak poništavanja.
- **Stariji radovi.** {{ui:Nauči iz prošlog predmjera…}} pamti cijenjene stavke spremljenog predmjera (.json).
- **Pogledajte, promijenite, zaboravite.** {{ui:Sve zapamćeno}} navodi svaki naziv; gumb s košem zaboravlja jedan, a {{ui:Očisti sve cijene}} zaboravlja sve. Isključite {{ui:Zapamti moje cijene kad spremim predmjer}} da prestane. Cijena po komadu nikad se ne stavlja na stavku po stopi. Vidi [Memorija cijena iz prošlih poslova](topic:price-memory).

**Zaliha dobavljača i rokovi isporuke**

- **Provjera u odnosu na popis dobavljača.** {{ui:Nabava}} na alatnoj traci uzima popis zaliha dobavljača ({{ui:Dodaj datoteku dobavljača…}}), CSV ili proračunsku tablicu, i provjerava što predmjer treba, s otpadom, u odnosu na njega. Može se držati do pet datoteka. Ništa se ne šalje i ništa ne pita dobavljača: vi donosite datoteku.
- **Što piše.** Kratke stavke dolaze prve: „Nedostaje 120 EA“, „Rok isporuke 21 dan“, „Na čekanju isporuke“, „Jedinica se razlikuje“, „Nema podatka o zalihi“ ili „Na zalihi“. {{ui:Najduže prihvatljivo čekanje (dana)}} počinje od 14.
- **Popis za narudžbu.** {{ui:Popis za narudžbu (CSV)}} preuzima kratke stavke s količinom koja nedostaje, dobavljačem i rokom isporuke.
- **Cijene u Knjižnicu.** Ako datoteka ima cijene, {{ui:Cijene u Knjižnicu}} postavlja cijenu materijala svakog unosa Knjižnice s istim nazivom i jedinicom. Ponovno odredite cijene iz Knjižnice da ih uvedete u predmjer.
- **U ploči problema.** Nedostatak je upozorenje, a dugo čekanje napomena, pod „Zaliha dobavljača“. Možete prihvatiti jedno uz razlog, a razlog se sprema u predmjer. Vidi [Provjera zalihe dobavljača i rokova isporuke](topic:supplier-stock).

**AI asistenti**

- **Alati za sva tri.** Uz dopuštene asistente u {{ui:Postavke}}, asistent može pročitati legendu (`legend_open`), pokrenuti brojanje (`legend_count_start`, zatim `legend_count_status` i `legend_count_result`) i dodati ga (`legend_count_add`, koji može prvo pregledati). Može pročitati zapamćene cijene (`prices_list`) i odrediti cijene stavkama iz njih (`prices_apply`, koji može prvo pregledati), te pročitati provjeru dobavljača (`supply_check`). Dodavanje datoteke dobavljača ostaje vaš posao. Vidi [Korištenje TakeoffCraft s AI asistentima](topic:use-with-ai-assistants).

**U svim aplikacijama**

- **Jezici.** Ukupno pedeset i četiri jezika; deset ih je novo (litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili i uzbečki). Jezici osim engleskog su radne verzije dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** {{ui:Postavke}} › {{ui:Globalne}} › {{ui:Ulazni uređaji}} određuje što rade trackpad, bočne tipke miša, olovka, 3D miš, igraći kontroler ili MIDI kontroler, za svaku aplikaciju ili za jednu. Vidi [Korištenje trackpada, 3D miša ili kontrolera](common:input-devices).
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} nudi {{ui:Prelomi}} (početak), {{ui:2 retka}} i {{ui:1 redak}}; skupine koje ne stanu pomiču se vodoravno. Vidi [Raspoređivanje ploča](common:arrange-panels).
- **Ploča problema.** Zajednička ploča upozorenja i napomena sada nosi gore navedenu provjeru zaliha dobavljača, uz ostale provjere.
- **Dodaci.** Dodaci slijede vaš popis računa. Vidi [Dodaci i vaš popis računa](common:addons-basics).
- **Povežite svoj AI.** CadCraft Studio je središte: povežite asistenta jednom za svih osam aplikacija. Studio nema vlastiti AI.

### Ispravljeno u 0.8.1

- **Odjeljak klasa DWG-a.** Odjeljak klasa DWG datoteke bio je pročitan kao pogrešan tip. Ispravljeno je u TakeoffCraft i u četiri druge aplikacije.
- **Studio može promijeniti jezik dok radi.** Prije su Studio i njegova pakirana izdanja bili samo na engleskom. Ovo nije testirano na svakoj platformi u desktop verziji; javite nam ako se jezik ne promijeni.

### Nije još u ovoj verziji

- **Nije potpisano kodom.** Windows može upozoriti, a na Macu desnim klikom odaberite {{ui:Otvoreno}} prvi put. Trgovinske verzije (Microsoft Store, Google Play, App Store) su na čekanju, a build za iPad i iPhone nije ponovno izrađen za 0.8.1.
- **Ažuriranja Studija.** Windows instalater i Linux paketi provjeravaju jednom dnevno i prvo pitaju. Prijenosni zip samo javlja, a macOS i APK se ne ažuriraju sami. macOS .dmg za 0.8 slijedi izdanje.
- **Povežite svoj AI.** Povezivanje jednim klikom unutar Studija, hostani konektor za AI u pregledniku, vlastiti API ključ unutar Studija i objavljeni MCP paket nisu obećani u ovoj verziji.
- **Brojanje svega.** Treba simbole nacrtane na isti način kao u legendi, a simbol s zidom ili dugom linijom kroz njega može se propustiti. Zrcaljeni simboli se ne pronalaze, a list bez mjerila nacrtan u drugoj veličini pretražuje se u veličini legende. Provjerite pronalaske na prvom listu prije nego što vjerujete ostatku.
- **Zaliha dobavljača.** Podaci o zalihama točni su koliko i datoteka koju dodate. Provjera nikad ne pita dobavljača.
- **Jezici.** Traka aplikacije za tamilski se prelijeva.

Sve ostalo je u [Još nije izrađeno](topic:not-built-yet). Za izdanje prije ovoga vidi [Što je novo u 0.7](topic:whats-new-0-7).
