---
title: Šta je novo u 0.9 (ranije)
summary: Dužine se mogu čitati u metrima, centimetrima ili milimetrima, metričke površine u m2 s površinom zida, unaprijed zadane razmjere 1:75 i 1:150, jedinice za težinu i temperaturu, Luk s deset metoda, te živi kursori, Prati i spisak osoba.
keywords: šta je novo 0.9, ranije izdanje, šta je novo, što je novo, bilješke o izdanju, dnevnik promjena, 0.9, prikaži dužine kao, metri, centimetri, milimetri, metrički, prati global, jedinice, jedinice prikaza, m2, kvadratni metri, površina zida, unaprijed zadane razmjere, 1:75, 1:150, težina, kilogrami, kg, tona, t, lb, temperatura, celzijus, farenhajt, luk, metode luka, luk s tri tačke, poluprečnik, živo, kursori, prati, spisak osoba, razred, savjeti pri zadržavanju, raspored, bilješke o izdanju, promjene, 0.8, 0.8.1, verzija, nove funkcije, broji sve, legenda, legenda simbola, cijeli skup, memorija cijena, prošli poslovi, zadnji posao, tipična cijena, dobavljač, zaliha, rok isporuke, zaostatak narudžbe, lista narudžbi, manjak, panel problema, asistent, jezici, ulazni uređaji, redovi alatne trake, dwg
from: f4322ba2
---

Ovo se promijenilo u TakeoffCraft 0.9, u poređenju s 0.8.1. Ovo je malo izdanje za ovu aplikaciju: dužine se sada mogu čitati u metrima, centimetrima ili milimetrima, površine i razmjere pravilno prate metrički rad, a Luk ima deset načina crtanja. Žive sesije također pokazuju ko je gdje.

## Novo

### Čitanje dužina u metrima, centimetrima ili milimetrima

- **Prikaži dužine kao.** {{ui:Postavke}} › {{ui:TakeoffCraft}} ima {{ui:Prikaži dužine kao}} sa {{ui:Prati Global}}, {{ui:Stope i inči}}, m, cm i mm. {{ui:Prati Global}} koristi metričku jedinicu dužine koju ste označili u {{ui:Postavke}} › {{ui:Globalno}} › {{ui:Jedinice}}, a stope i inči kada nijedna nije označena. Mijenja način čitanja dužina na listu, u statusnoj traci i u panelima, uključujući visine, dubinu, debljinu i nivoe. Goli broj upisan u polje visine čita se u prikazanoj jedinici.
- **Samo prikaz.** Količine, troškovi i izvozi računaju se iz tačnih dužina. Izbor 1/16, 1/8 i 1/4 inča pojavljuje se samo za stope i inče. Pogledajte [Prikaz dužina u metrima](topic:show-lengths-in-meters).
- **Jedinice težine.** Stavka {{ui:Upisana količina (bez crteža)}} sada može biti u lb, TON, kg ili t, i može se cijeniti po jedinici.
- **Temperatura.** Svaka stavka ima opcionalno polje {{ui:Temperatura}} u uređivaču stavki, upisano u stepenima C ili F. {{ui:Prikaži temperature kao}} u {{ui:Postavke}} › {{ui:TakeoffCraft}} nudi {{ui:Prati Global}}, °C ili °F.

### Površine i razmjere za metrički rad

- **Površine u m2 na crtežu.** Površina izmjerena metričkom stavkom sada na oznaci crteža i na panelu oznaka, kao i u tabeli, piše m2, umjesto SF. Pravilo: m2 kada je stavka cijenjena u metričkom sistemu ili su dužine prikazane u m, cm ili mm, a inače SF.
- **Površina zida.** Linearna stavka s visinom također prikazuje površinu zida (dužina puta visina) na spisku stavki i kao red napomene ispod tabele količina po stavkama.
- **Razmjere 1:75 i 1:150.** Nalaze se na listi {{ui:Unaprijed zadana}} u grupi {{ui:Razmjera}}, koja sada ima 32 razmjere. Pogledajte [Unaprijed zadane razmjere](topic:scale-presets).

### Luk s deset metoda

- Dok je {{ui:Luk}} uključen (dugme na traci ili {{key:R}}), u traci lista pojavljuje se polje {{ui:Metoda luka}}: 3-tačke, Početak, Centar, Kraj, Početak, Centar, Ugao, Početak, Centar, Dužina, Početak, Kraj, Ugao, Početak, Kraj, Smjer, Početak, Kraj, Poluprečnik, Centar, Početak, Kraj, Centar, Početak, Ugao i Centar, Početak, Dužina. Ugao, dužina, poluprečnik i smjer mogu se kliknuti ili upisati. Radi u linearnim nizovima, površinama i izrezima. Datoteke sačuvane prije 0.9 otvaraju se isto. Pogledajte [Crtanje lukova na deset načina](topic:draw-arcs-ten-methods).

### Rad zajedno

- **Vidite kursore jedni drugih.** U živoj sesiji pokazivač svake osobe vidi se na listu s njenim imenom i bojom, a oko oznaka koje je odabrala nalazi se isprekidani okvir. Osobe na drugom listu navedene su s nazivom tog lista. Pogledajte [Rad uživo s drugima](topic:work-live).
- **Pratite osobu i spisak osoba.** Dugme {{ui:Osobe}} u živoj sesiji navodi svaku osobu s alatom koji koristi, listom na kojem se nalazi i vremenom kada je zadnji put uređivala. {{ui:Prati}} pomjera vaš prikaz zajedno s njihovim, a domaćin može koristiti {{ui:Zamoli sve da prate mene}}. Pogledajte [Praćenje saradnika u živoj sesiji](topic:follow-a-teammate).

## U svim aplikacijama

- **Savjeti pri zadržavanju i početni savjet.** Tekst koji se pojavi pri zadržavanju pokazivača je Bootstrap tooltip, a početni savjet može se zatvoriti.
- **Trake kartica koje se pomjeraju.** Traka kartica panela koja ne staje sada se pomjera, umjesto da bude odsječena.
- **Naslovi kartica.** Kartica preglednika glasi `<document> - TakeoffCraft | CadCraft`.
- **Raspored.** Spisak rasporeda u {{ui:Postavke}} je padajući meni koji prikazuje odabrani raspored.
- **Jezik.** Jezik koji odaberete sada dopire i do riječi koje sama stranica ispisuje, kao što su Novo, {{ui:Otvoreno}} i Spasi. Jezici osim engleskog su mašinski prijevodi dok ih ne pregleda izvorni govornik.

## Ograničenja

- Prikaz dužina, jedinice težine i temperature te nove unaprijed zadane razmjere provjereni su testovima i na stranici. Svaki panel u svakoj jedinici nije ručno provjeren.
- Spisak osoba nije ručno provjeren s pravom grupom nastavnika i učenika.
- Jezici osim engleskog su mašinski prijevodi.
- Instalateri za Windows nisu potpisani kodom (Više informacija, zatim Ipak pokreni). Disk slika za macOS nije ovjerena (desni klik, zatim {{ui:Otvoreno}}).

## Ranije: 0.8 i 0.8.1

Ovo se promijenilo u TakeoffCraft 0.8 (objavljeno 2026-11-01) i 0.8.1 (2026-11-02), u poređenju s 0.7. Legendu simbola sada je moguće prebrojati na cijelom skupu odjednom, novi predmjer može početi od cijena vaših prošlih poslova, a predmjer se može provjeriti u odnosu na zalihe dobavljača. 0.8.1 je izdanje s popravkama.

### Novo

**Prebroji sve u skupu**

- **Označite legendu jednom.** {{ui:Broji sve}} na traci čita legendu simbola: prevucite okvir oko simbola i naziva ispisanih pored njih. Svaki simbol navodi se sa svojom slikom i nazivom, a naziv postaje naziv stavke. Odznačite ono što ne želite, zatim odaberite {{ui:Prebroji na N listova}}. Traka pokazuje list koji se pretražuje, {{ui:Otkaži}} zaustavlja brojanje, a stranica ostaje upotrebljiva.
- **Svi listovi u jednom pokretanju.** Svaki simbol broji se na svakom otvorenom listu. List nacrtan u drugoj razmjeri pretražuje se u toj razmjeri, a simboli se pronalaze okrenuti pod bilo kojim pravim uglom. Vlastiti simboli legende na njenom listu se ne broje.
- **Pregled prije dodavanja bilo čega.** Svaki zbir ima vezu po listu ("E-103: 4") koja vodi na taj list. Kliknite okvir na pronađenom mjestu da ga izostavite, a kliknite ga ponovo da ga vratite. Nivo podudaranja (50% do 100%) samo filtrira ono što je pronađeno; ništa se ne pretražuje ponovo.
- **Jedan korak poništavanja.** {{ui:Dodaj N oznaka}} pravi stavku brojanja po simbolu, s oznakom na svakom pronađenom mjestu. Naziv koji je već vaša stavka brojanja se ponovo koristi. {{key:Ctrl+Z}} vraća sve stavke i oznake. Ono što prihvatite također ulazi u {{ui:Naučeno}}.
- **Simboli pod bilo kojim uglom.** Označite {{ui:Simboli pod bilo kojim uglom}} prije brojanja da pronađete i simbole okrenute pod uglom koji nije pravi. Pretraga tada okreće svaki simbol svakih 15 stepeni, a simbol koji nije okrugao može trajati do šest puta duže.
- **Šta je to.** Obično poklapanje simbola na vašim listovima, bez treniranog modela, i ništa ne napušta vaš računar. Na izmišljenom skupu od 200 listova trajalo je 9.4 sekunde od početka do kraja u Chrome-u na brzom desktop računaru; stvarni skupovi planova bit će sporiji. Pogledajte [Prebroji sve u skupu](topic:count-everything).

**Memorija cijena iz vaših poslova**

- **TakeoffCraft pamti vaše cijene.** Kada sačuvate predmjer, svaka cijenjena stavka koja se koristi pamti se po nazivu i tipu: cijena materijala, cijena rada, otpad i jedinica. Čuva se zadnjih 12 poslova za svaki naziv. Čuva se na ovom računaru uz biblioteku cijena, nikad unutar datoteke predmjera, i ništa se ne šalje nigdje.
- **Počnite novi predmjer iz toga.** {{ui:Cijene}} na traci prikazuje za svaku stavku cijene zadnjeg posla, tipične cijene i raspon. {{ui:Koristi zadnje}} ili {{ui:Koristi tipične}} cijeni jednu stavku, a {{ui:Cijeni N stavki bez cijene iz memorije}} popunjava svaku stavku koja još nema cijenu. Svaka upotreba je jedan korak poništavanja.
- **Stariji radovi.** {{ui:Uči iz ranije procjene…}} pamti cijenjene stavke sačuvanog predmjera (.json).
- **Vidite, mijenjate, zaboravite.** {{ui:Sve što je zapamćeno}} navodi svaki naziv; dugme za kantu zaboravlja jedan, a {{ui:Obriši sve cijene}} zaboravlja sve. Isključite {{ui:Pamti moje cijene kad sačuvam procjenu}} da zaustavite pamćenje. Cijena po komadu se nikad ne stavlja na stavku po stopi. Pogledajte [Memorija cijena iz prošlih poslova](topic:price-memory).

**Zalihe dobavljača i rokovi isporuke**

- **Provjera prema listi dobavljača.** {{ui:Nabavka}} na traci uzima spisak zaliha dobavljača ({{ui:Dodaj datoteku dobavljača…}}), CSV ili tabelu, i provjerava što predmjer treba, s otpadom, prema njemu. Čuva se do pet datoteka. Ništa se ne šalje i ništa ne pita dobavljača: vi donosite datoteku.
- **Šta piše.** Kratke stavke dolaze prve: "Manjak 120 EA", "Rok isporuke 21 dan", "Na čekanju", "Jedinica se razlikuje", "Nema podatka o zalihi" ili "Na zalihi". {{ui:Najduži željeni rok čekanja (dana)}} počinje od 14.
- **Lista narudžbe.** {{ui:Lista narudžbe (CSV)}} preuzima kratke stavke s iznosom manjka, dobavljačem i rokom isporuke.
- **Cijene u biblioteku.** Ako datoteka ima cijene, {{ui:Cijene u biblioteku}} postavlja cijenu materijala svakog unosa biblioteke s istim nazivom i jedinicom. Ponovo cijenite iz biblioteke da ih unesete u predmjer.
- **U panelu problema.** Manjak je upozorenje, a dugo čekanje je napomena, pod "Zalihe dobavljača". Možete ga prihvatiti uz razlog, a razlog se čuva u predmjeru. Pogledajte [Provjera zaliha dobavljača i rokova isporuke](topic:supplier-stock).

**AI asistenti**

- **Alati za sva tri.** Uz dozvoljene asistente u {{ui:Postavke}}, asistent može pročitati legendu (`legend_open`), pokrenuti brojanje (`legend_count_start`, zatim `legend_count_status` i `legend_count_result`) i dodati ga (`legend_count_add`, koji može prvo prikazati pregled). Može pročitati zapamćene cijene (`prices_list`) i cijeniti stavke iz njih (`prices_apply`, koji može prvo prikazati pregled), te pročitati provjeru dobavljača (`supply_check`). Dodavanje datoteke dobavljača ostaje vaš posao. Pogledajte [Korištenje TakeoffCraft s AI asistentima](topic:use-with-ai-assistants).

**U svim aplikacijama**

- **Jezici.** Ukupno pedeset četiri jezika; deset je novih (litvanski, letonski, bosanski, maratski, telugu, albanski, afrikaans, filipinski, svahili i uzbečki). Jezici osim engleskog su mašinski prijevodi dok ih ne pregleda izvorni govornik.
- **Ulazni uređaji.** {{ui:Postavke}} › {{ui:Globalno}} › {{ui:Ulazni uređaji}} određuje šta rade trackpad, bočna dugmad miša, olovka, 3D miš, kontroler za igre ili MIDI kontroler, za sve aplikacije ili za jednu. Pogledajte [Korištenje trackpada, 3D miša ili kontrolera](common:input-devices).
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} nudi {{ui:Prelomi}} (početak), {{ui:2 reda}} i {{ui:1 red}}; grupe koje ne staju pomjeraju se u stranu. Pogledajte [Raspored panela](common:arrange-panels).
- **Panel problema.** Zajednički panel upozorenja i napomena sada sadrži i provjeru zaliha dobavljača, uz ostale provjere.
- **Dodaci.** Dodaci prate vaš spisak računa. Pogledajte [Dodaci i vaš spisak računa](common:addons-basics).
- **Povežite vaš AI.** CadCraft Studio je centar: povežite svog asistenta jednom za svih osam aplikacija. Studio nema svoj AI.

### Ispravljeno u 0.8.1

- **Odjeljak DWG klasa.** Odjeljak klasa u DWG datoteci bio je pročitan kao pogrešan tip. Ovo je ispravljeno u TakeoffCraft i u još četiri aplikacije.
- **Studio može mijenjati jezik dok radi.** Ranije su Studio i njegova pakovana izdanja bili samo na engleskom. Ovo nije provjereno u desktop verziji na svim platformama; javite nam ako se jezik ne mijenja.

### Još nije u ovom izdanju

- **Nije potpisano kodom.** Windows može upozoriti, a na Macu desnim klikom birate {{ui:Otvoreno}} prvi put. Prodavnice aplikacija (Microsoft Store, Google Play, App Store) su na čekanju, a verzija za iPad i iPhone nije ponovo izrađena za 0.8.1.
- **Ažuriranja Studija.** Windows instalater i Linux paketi provjeravaju jednom dnevno i pitaju prije. Prenosiva zip datoteka samo javlja, a macOS i APK se ne ažuriraju sami. macOS .dmg iz 0.8 prati izdanje.
- **Povežite vaš AI.** Povezivanje jednim klikom unutar Studija, hostovani konektor za AI u pregledniku, vlastiti API ključ unutar Studija i objavljeni MCP paket nisu obećani u ovom izdanju.
- **Broji sve.** Treba simbole nacrtane na isti način kao u legendi, a simbol s zidom ili dugom linijom kroz njega može se propustiti. Zrcaljeni simboli se ne pronalaze, a list bez razmjere nacrtan u drugoj veličini pretražuje se u veličini legende. Provjerite pronađena mjesta na prvom listu prije nego što vjerujete ostatku.
- **Zalihe dobavljača.** Podaci o zalihama tačni su onoliko koliko je aktuelna datoteka koju dodate. Provjera nikad ne pita dobavljača.
- **Jezici.** Traka aplikacije za tamilski se prelijeva.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet). Za izdanje prije ovoga pogledajte [Šta je novo u 0.7](topic:whats-new-0-7).
