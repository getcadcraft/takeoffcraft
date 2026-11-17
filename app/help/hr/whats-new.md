---
title: Novosti u 0.9
summary: Duljine čitajte u metrima, centimetrima ili milimetrima, metričke površine u m2 s površinom zida, predlošci mjerila 1:75 i 1:150, jedinice težine i temperature, Luk s deset metoda te žive kursore, Prati i popis ljudi.
keywords: novosti, što je novo, bilješke o izdanju, dnevnik promjena, 0.9, prikaz duljina kao, metri, centimetri, milimetri, metrički, prati globalne postavke, jedinice, prikazne jedinice, m2, četvorni metri, površina zida, predlošci mjerila, 1:75, 1:150, težina, kilogrami, kg, tona, lb, temperatura, celzijus, fahrenheit, luk, metode luka, luk s 3 točke, polumjer, uživo, kursori, prati, popis ljudi, razred, savjeti, raspored, promjene, 0.8, 0.8.1, verzija, nove značajke, prebroji sve, legenda, legenda simbola, cijeli skup, memorija cijena, prošli poslovi, zadnji posao, tipična cijena, dobavljač, zaliha, vrijeme isporuke, nedostatak zaliha, popis narudžbi, manjak, ploča problema, pomoćnik, jezici, ulazni uređaji, redci alatne trake, dwg
from: 6182b998
---

Ovo je ono što se promijenilo u aplikaciji TakeoffCraft 0.9 u odnosu na 0.8.1. Riječ je o maloj verziji za ovu aplikaciju: duljine se sada mogu čitati u metrima, centimetrima ili milimetrima, površine i mjerila prate metrički rad kako treba, a Luk ima deset načina crtanja. Sesije uživo također pokazuju tko je gdje.

## Novo

### Čitanje duljina u metrima, centimetrima ili milimetrima

- **Prikaz duljina kao.** {{ui:Postavke}} › {{ui:TakeoffCraft}} ima {{ui:Prikaz duljina kao}} s {{ui:Prati globalne postavke}}, {{ui:Stope i palci}}, m, cm i mm. {{ui:Prati globalne postavke}} koristi metričku jedinicu duljine koju ste označili u {{ui:Postavke}} › {{ui:Globalne}} › {{ui:Jedinice}}, a stope i palce kad nijedna nije označena. Mijenja kako se duljine čitaju na listu, u statusnoj traci i u pločama, uključujući visine, dubinu, debljinu i razine. Goli broj upisan u polje visine čita se u prikazanoj jedinici.
- **Samo prikaz.** Količine, troškovi i izvozi računaju se iz točnih duljina. Izbor 1/16, 1/8 i 1/4 inča pojavljuje se samo za stope i palce. Pogledajte [Prikaz duljina u metrima](topic:show-lengths-in-meters).
- **Jedinice težine.** Stavka {{ui:Upisana količina (bez crteža)}} sada može biti u lb, TON, kg ili t te se može cijeniti po jedinici.
- **Temperatura.** Svaka stavka ima neobavezno polje {{ui:Temperatura}} u uređivaču stavke, upisano u stupnjevima C ili F. {{ui:Prikaži temperature kao}} u {{ui:Postavke}} › {{ui:TakeoffCraft}} nudi {{ui:Prati globalne postavke}}, °C ili °F.

### Površine i mjerila za metrički rad

- **Površine u m2 na crtežu.** Površina izmjerena stavkom u metričkim jedinicama sada na oznaci crteža i na ploči oznaka piše m2, kao i u tablici, umjesto SF. Pravilo je m2 kad se stavka cijeni u metričkim jedinicama ili se duljine prikazuju u m, cm ili mm, a SF inače.
- **Površina zida.** Linearna stavka s visinom također prikazuje površinu zida (duljina puta visina) na popisu stavki i kao redak napomene ispod tablice količina po stavci.
- **Predlošci mjerila 1:75 i 1:150.** Nalaze se na popisu {{ui:Predložak}} u grupi {{ui:Mjerilo}}, koja sada ima 32 mjerila. Pogledajte [Predlošci mjerila](topic:scale-presets).

### Luk s deset metoda

- Dok je {{ui:Luk}} uključen (gumb u alatnoj traci ili {{key:R}}), u traci lista pojavljuje se polje {{ui:Način luka}} s metodama: 3 točke, Početak, Središte, Kraj, Početak, Središte, Kut, Početak, Središte, Duljina, Početak, Kraj, Kut, Početak, Kraj, Smjer, Početak, Kraj, Radijus, Središte, Početak, Kraj, Središte, Početak, Kut i Središte, Početak, Duljina. Kut, duljina, radijus i smjer mogu se kliknuti ili upisati. Radi u linearnim dionicama, površinama i izrezima. Datoteke spremljene prije 0.9 otvaraju se jednako. Pogledajte [Crtanje lukova deset metodama](topic:draw-arcs-ten-methods).

### Zajednički rad

- **Vidite tuđe kursore.** U sesiji uživo pokazivač svake osobe vidi se na listu s njezinim imenom i bojom, a isprekidani okvir u njezinoj boji oko oznaka koje je odabrala. Osobe na drugom listu navedene su s imenom tog lista. Pogledajte [Rad s drugima uživo](topic:work-live).
- **Pratite osobu i popis ljudi.** Gumb {{ui:Ljudi}} u sesiji uživo navodi svaku osobu s alatom koji koristi, listom na kojem je i vremenom posljednje promjene. {{ui:Prati}} pomiče vaš prikaz s njihovim, a domaćin može koristiti {{ui:Zamoli sve da me prate}}. Pogledajte [Praćenje suradnika u sesiji uživo](topic:follow-a-teammate).

## U svim aplikacijama

- **Savjeti pri zadržavanju miša i početni savjet.** Tekst pri zadržavanju miša je Bootstrap tooltip, a početni savjet može se zatvoriti.
- **Trake kartica koje se pomiču.** Traka kartica ploče koja ne stane pomiče se umjesto da bude odrezana.
- **Naslovi kartica.** Kartica preglednika prikazuje `<document> - TakeoffCraft | CadCraft`.
- **Raspored.** Popis rasporeda u {{ui:Postavke}} je padajući izbornik koji prikazuje odabrani raspored.
- **Jezik.** Jezik koji odaberete sada dopire do riječi koje sama stranica ispisuje, poput gumba Novo, Otvori i Spremi. Jezici osim engleskog su strojni prijevodi dok ih izvorni govornik ne pregleda.

## Iskreno o ograničenjima

- Prikaz duljina, jedinice težine i temperature te novi predlošci provjereni su testovima i na stranici. Svaka ploča pri svakoj jedinici nije ručno provjerena.
- Popis ljudi nije ručno provjeren sa stvarnim razredom nastavnika i studenata.
- Jezici osim engleskog su strojni prijevodi.
- Windows instalacijski programi nisu potpisani kodom (Više informacija, zatim Ipak pokreni). Slika diska za macOS nije notarizirana (desni klik, zatim {{ui:Otvoreno}}).

## Ranije: 0.8 i 0.8.1

Ovo je ono što se promijenilo u aplikaciji TakeoffCraft 0.8 (objavljeno 2026-11-01) i 0.8.1 (2026-11-02) u odnosu na 0.7. Legendu simbola sada je moguće prebrojati na cijelom skupu odjednom, novi predmjer može krenuti od cijena vaših prošlih poslova, a predmjer se može provjeriti prema zalihi dobavljača. 0.8.1 je ispravak.

### Novo

**Prebrojite sve u skupu**

- **Okvirite legendu jednom.** {{ui:Broji sve}} na alatnoj traci čita legendu simbola: povucite okvir oko simbola i naziva ispisanih pokraj njih. Svaki simbol navodi se sa svojom slikom i nazivom, a naziv postaje naziv stavke. Isključite što ne želite, zatim odaberite {{ui:Broji na N listova}}. Traka pokazuje list koji se pretražuje, {{ui:Odustani}} zaustavlja izvođenje, a stranica ostaje upotrebljiva.
- **Svi listovi u jednom prolazu.** Svaki simbol broji se na svakom otvorenom listu. List nacrtan u drugom mjerilu pretražuje se u tom mjerilu, a simboli se pronalaze okrenuti pod bilo kojim pravim kutom. Vlastiti simboli legende ne broje se na svom listu.
- **Pregled prije dodavanja.** Svaki zbroj ima poveznicu po listu („E-103: 4“) koja vodi na taj list. Kliknite okvir na pronalasku da ga izuzmete, a ponovo kliknite da ga vratite. Razina podudaranja (50 % do 100 %) samo filtrira pronađeno; ništa se ne pretražuje ponovo.
- **Jedan korak poništavanja.** {{ui:Dodaj N oznaka}} stvara stavku brojanja za svaki simbol, s oznakom na svakom pronalasku. Naziv koji je već vaša stavka brojanja se ponovno koristi. {{key:Ctrl+Z}} poništava sve stavke i oznake. Ono što prihvatite također ulazi u {{ui:Naučeno}}.
- **Simboli pod bilo kojim kutom.** Označite {{ui:Simboli pod bilo kojim kutom}} prije brojanja da pronađete i simbole zakrenute pod kutom koji nije pravi kut. Pretraga tada svaki simbol okreće svakih 15 stupnjeva, a simbol koji nije okrugao može trajati do šest puta duže.
- **Što je to.** Obično podudaranje simbola na vlastitim listovima, bez treniranog modela, i ništa ne napušta vaše računalo. Na izmišljenom skupu od 200 listova trajalo je 9.4 sekunde od početka do kraja u Chromeu na brzom računalu; stvarni skupovi nacrta bit će sporiji. Pogledajte [Prebrojite sve u skupu](topic:count-everything).

**Memorija cijena iz vaših poslova**

- **TakeoffCraft pamti vaše jedinične cijene.** Kad spremite predmjer, svaka cijenjena stavka koja se koristi pamti se prema nazivu i vrsti: jedinična cijena materijala, jedinična cijena rada, gubitak i jedinica. Čuva se zadnjih 12 poslova za svaki naziv. Čuva se na ovom računalu uz Knjižnicu cijena, nikad unutar datoteke predmjera, i ništa se nigdje ne šalje.
- **Započnite novi predmjer iz nje.** {{ui:Cijene}} na alatnoj traci prikazuje za svaku stavku zadnje cijene iz posla, tipične cijene i raspon. {{ui:Koristi zadnje}} ili {{ui:Koristi tipične}} cijenjuje jednu stavku, a {{ui:Cijeni N stavki bez cijene iz memorije}} popunjava svaku stavku koja još nema cijenu. Svaka upotreba je jedan korak poništavanja.
- **Stariji radovi.** {{ui:Nauči iz prošlog predmjera…}} pamti cijenjene stavke spremljenog predmjera (.json).
- **Pogledajte, promijenite, zaboravite.** {{ui:Sve zapamćeno}} navodi svaki naziv; gumb za brisanje zaboravlja jedan, a {{ui:Očisti sve cijene}} zaboravlja sve. Isključite {{ui:Zapamti moje cijene kad spremim predmjer}} da prestanete. Cijena po komadu nikad se ne stavlja na stavku po stopi. Pogledajte [Memorija cijena iz vaših prošlih poslova](topic:price-memory).

**Zaliha dobavljača i rokovi isporuke**

- **Provjerite prema popisu dobavljača.** {{ui:Nabava}} na alatnoj traci uzima popis zaliha dobavljača ({{ui:Dodaj datoteku dobavljača…}}), CSV ili proračunsku tablicu, i provjerava što predmjer treba, s gubitkom, prema njemu. Čuva se do pet datoteka. Ništa se ne šalje i ništa ne pita dobavljača: vi donosite datoteku.
- **Što piše.** Kratke stavke dolaze prve: „Nedostaje 120 EA“, „Rok isporuke 21 dan“, „Na čekanju“, „Jedinica se razlikuje“, „Nema podatka o zalihi“ ili „Na zalihi“. {{ui:Najduže prihvatljivo čekanje (dana)}} kreće od 14.
- **Popis za narudžbu.** {{ui:Popis za narudžbu (CSV)}} preuzima kratke stavke s količinom koja nedostaje, dobavljačem i rokom isporuke.
- **Cijene u Knjižnicu.** Ako datoteka ima cijene, {{ui:Cijene u Knjižnicu}} postavlja cijenu materijala svakog unosa knjižnice s istim nazivom i jedinicom. Ponovno cijenite iz Knjižnice da ih prenesete u predmjer.
- **U ploči Problemi.** Nedostatak je upozorenje, a dugo čekanje je napomena, pod „Zaliha dobavljača“. Možete prihvatiti jedno s razlogom, a razlog se sprema u predmjer. Pogledajte [Provjera zaliha dobavljača i rokova isporuke](topic:supplier-stock).

**AI pomoćnici**

- **Alati za sva tri.** Uz dopuštene pomoćnike u {{ui:Postavke}}, pomoćnik može čitati legendu (`legend_open`), pokrenuti brojanje (`legend_count_start`, zatim `legend_count_status` i `legend_count_result`) i dodati ga (`legend_count_add`, koji može prvo prikazati pregled). Može čitati zapamćene cijene (`prices_list`) i cijeniti stavke iz njih (`prices_apply`, koji može prvo prikazati pregled), te čitati provjeru zaliha (`supply_check`). Dodavanje datoteke dobavljača ostaje na vama. Pogledajte [Upotreba TakeoffCrafta s AI pomoćnicima](topic:use-with-ai-assistants).

**U svim aplikacijama**

- **Jezici.** Pedeset i četiri jezika ukupno; deset je novo (litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili i uzbečki). Jezici osim engleskog su strojni prijevodi dok ih izvorni govornik ne pregleda.
- **Ulazni uređaji.** {{ui:Postavke}} › {{ui:Globalne}} › {{ui:Ulazni uređaji}} određuje što rade dodirna podloga, bočne tipke miša, olovka, 3D miš, upravljač za igre ili MIDI upravljač, za svaku aplikaciju ili za jednu. Pogledajte [Upotreba dodirne podloge, 3D miša ili upravljača](common:input-devices).
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} nudi {{ui:Prelomi}} (početak), {{ui:2 retka}} i {{ui:1 redak}}; grupe koje ne stanu pomiču se u stranu. Pogledajte [Raspored ploča](common:arrange-panels).
- **Ploča Problemi.** Zajednička ploča upozorenja i napomena sada uz ostale provjere sadrži i provjeru zaliha dobavljača.
- **Dodaci.** Dodaci prate vaš popis računa. Pogledajte [Dodaci i vaš popis računa](common:addons-basics).
- **Povežite AI.** CadCraft Studio je središte: povežite pomoćnika jednom za svih osam aplikacija. Studio nema vlastitu AI.

### Ispravljeno u 0.8.1

- **Odjeljak klasa DWG-a.** Odjeljak klasa DWG datoteke bio je pročitan kao pogrešna vrsta. To je ispravljeno u aplikaciji TakeoffCraft i u četiri druge aplikacije.
- **Studio može mijenjati jezik dok radi.** Prije su Studio i njegova pakirana izdanja bila samo na engleskom. Ovo nije provjereno u desktop verziji na svakoj platformi; javite nam ako se jezik ne mijenja.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može upozoriti, a na Macu prvi put desnom tipkom kliknite i odaberite {{ui:Otvoreno}}. Trgovinska izdanja (Microsoft Store, Google Play, App Store) su na čekanju, a verzija za iPad i iPhone nije ponovno izrađena za 0.8.1.
- **Ažuriranja Studija.** Instalacijski program za Windows i paketi za Linux provjeravaju ažuriranja jednom dnevno i pitaju prije. Prijenosna zip datoteka samo javlja, a macOS i APK se ne ažuriraju sami. Verzija .dmg za macOS 0.8 prati izdanje.
- **Povežite AI.** Povezivanje jednim klikom unutar Studija, hostirani konektor za AI u pregledniku, vlastiti API ključ unutar Studija i objavljen MCP paket nisu obećani u ovoj verziji.
- **Prebrojite sve.** Treba simbole nacrtane na isti način kao u legendi, a simbol s zidom ili dugom linijom kroz njega može se propustiti. Zrcaljeni simboli se ne pronalaze, a list bez mjerila nacrtan u drugoj veličini pretražuje se u veličini legende. Provjerite pronalaske na prvom listu prije nego što vjerujete ostalima.
- **Zaliha dobavljača.** Podaci o zalihama točni su koliko i datoteka koju dodate. Provjera nikad ne pita dobavljača.
- **Jezici.** Traka aplikacije za tamilski se prelijeva.

Sve ostalo nalazi se u [Još nije izrađeno](topic:not-built-yet). Za izdanje prije ovoga pogledajte [Novosti u 0.7](topic:whats-new-0-7).
