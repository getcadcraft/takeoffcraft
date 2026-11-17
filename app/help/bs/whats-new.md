---
title: Novo u verziji 0.9
summary: Čitajte dužine u metrima, centimetrima ili milimetrima, metričke površine u m2 sa površinom zidova, unaprijed zadane razmjere 1:75 i 1:150, jedinice težine i temperature, Luk sa deset metoda, te žive kursore, Prati i spisak ljudi.
keywords: novo, šta je novo, bilješke o izdanju, dnevnik promjena, 0.9, prikaži dužine kao, metri, centimetri, milimetri, metrički, prati globalno, jedinice, jedinice prikaza, m2, kvadratni metri, površina zidova, unaprijed zadane razmjere, 1:75, 1:150, težina, kilogrami, kg, tona, lb, temperatura, celzijus, farenhajt, luk, metode luka, luk sa 3 tačke, poluprečnik, živo, kursori, prati, spisak ljudi, klasa, savjeti, raspored, novo, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove funkcije, prebroji sve, legenda, legenda simbola, cijeli set, memorija cijena, prošli poslovi, prošli posao, tipična cijena, dobavljač, zaliha, rok isporuke, zaostatak, lista narudžbe, nedostatak, panel problema, asistent, jezici, ulazni uređaji, redovi alatne trake, dwg
from: 6182b998
---

Ovo je šta se promijenilo u TakeoffCraft-u 0.9, u odnosu na 0.8.1. Ovo je mala verzija za ovu aplikaciju: dužine se sada mogu čitati u metrima, centimetrima ili milimetrima, površine i razmjere se pravilno prate u metričkom radu, a Luk ima deset načina crtanja. Živi predmjeri također pokazuju ko je gdje.

## Novo

### Čitajte dužine u metrima, centimetrima ili milimetrima

- **Prikaži dužine kao.** {{ui:Postavke}} › {{ui:TakeoffCraft}} ima {{ui:Prikaži dužine kao}} sa opcijama {{ui:Prati Global}}, {{ui:Stope i inči}}, m, cm i mm. {{ui:Prati Global}} koristi metričku jedinicu dužine koju ste označili u {{ui:Postavke}} › {{ui:Global}} › {{ui:Jedinice}}, a stope i inče kad nijedna nije označena. Mijenja kako se dužine čitaju na listu, u statusnoj traci i u panelima, uključujući visine, dubinu, debljinu i nivoe. Goli broj unesen u polje visine čita se u prikazanoj jedinici.
- **Samo prikaz.** Količine, troškovi i izvozi se računaju iz tačnih dužina. Izbor 1/16, 1/8 i 1/4 inča pojavljuje se samo za stope i inče. Pogledajte [Prikaz dužina u metrima](topic:show-lengths-in-meters).
- **Jedinice težine.** Stavka {{ui:Upisana količina (bez crteža)}} sada može biti u lb, TON, kg ili t, i može se cijeniti po jedinici.
- **Temperatura.** Svaka stavka ima opciono polje {{ui:Temperatura}} u uređivaču stavke, upisano u stepenima C ili F. {{ui:Prikaži temperature kao}} u {{ui:Postavke}} › {{ui:TakeoffCraft}} nudi {{ui:Prati Global}}, °C ili °F.

### Površine i razmjere za metrički rad

- **Površine u m2 na crtežu.** Površina izmjerena metričkom stavkom sada piše m2 na oznaci crteža i u panelu oznaka, kao i u tabeli, umjesto SF. Pravilo je m2 kad je stavka cijenjena u metričkim jedinicama ili kad se dužine prikazuju u m, cm ili mm, a SF inače.
- **Površina zidova.** Linearna stavka sa visinom također prikazuje površinu zida (dužina puta visina) u spisku Stavki i kao red napomene ispod tabele količina po stavci.
- **Unaprijed zadane razmjere 1:75 i 1:150.** Nalaze se u spisku {{ui:Unaprijed zadana}} u grupi {{ui:Razmjera}}, koja sada ima 32 razmjere. Pogledajte [Unaprijed zadane razmjere](topic:scale-presets).

### Luk sa deset metoda

- Dok je {{ui:Luk}} uključen (dugme na traci alata ili {{key:R}}), u traci lista pojavljuje se polje {{ui:Metoda luka}}: 3 tačke; Početak, Centar, Kraj; Početak, Centar, Ugao; Početak, Centar, Dužina; Početak, Kraj, Ugao; Početak, Kraj, Smjer; Početak, Kraj, Poluprečnik; Centar, Početak, Kraj; Centar, Početak, Ugao; i Centar, Početak, Dužina. Ugao, dužina, poluprečnik i smjer mogu se kliknuti ili upisati. Radi u linearnim dionicama, površinama i izrezima. Datoteke sačuvane prije 0.9 otvaraju se isto. Pogledajte [Crtanje lukova deset metoda](topic:draw-arcs-ten-methods).

### Zajednički rad

- **Vidite tuđe kursore.** U Live sesiji pokazivač svake osobe prikazuje se na listu s njenim imenom i bojom, sa isprekidanim okvirom oko oznaka koje je odabrala. Ljudi na drugom listu navode se s imenom tog lista. Pogledajte [Zajednički rad uživo](topic:work-live).
- **Pratite osobu, i spisak ljudi.** Dugme {{ui:Ljudi}} u Live sesiji navodi svaku osobu s alatom koji koristi, listom na kojem je i kad je posljednji put mijenjala. {{ui:Prati}} pomjera vaš prikaz s njihovim, a domaćin može koristiti {{ui:Zamoli sve da prate mene}}. Pogledajte [Praćenje kolege u Live sesiji](topic:follow-a-teammate).

## U svakoj aplikaciji

- **Savjeti i savjet pri pokretanju.** Tekst kad zadržite pokazivač je Bootstrap savjet, a savjet pri pokretanju može se zatvoriti.
- **Trake kartica sa pomicanjem.** Traka kartica panela koja ne stane se pomjera umjesto da bude odsječena.
- **Naslovi kartica.** Kartica pregledača glasi `<dokument> - TakeoffCraft | CadCraft`.
- **Raspored.** Spisak rasporeda u {{ui:Postavke}} je padajući meni koji prikazuje izabrani raspored.
- **Jezik.** Jezik koji izaberete sada dopire do riječi koje sama stranica ispisuje, kao što su Novo, Otvori i Spasi. Jezici osim engleskog su strojni nacrti dok ih izvorni govornik ne pregleda.

## Iskreni limiti

- Prikaz dužina, jedinice težine i temperature i nove unaprijed zadane razmjere provjereni su testovima i na stranici. Svaki panel na svakoj jedinici nije ručno provjeren.
- Spisak ljudi nije ručno provjeren sa pravom grupom nastavnika i studenata.
- Jezici osim engleskog su strojni nacrti.
- Windows instalateri nisu potpisani kodom (Više informacija, pa Ipak pokreni). Disk slika za macOS nije notarizovana (desni klik, pa Otvori).

## Ranije: 0.8 i 0.8.1

Ovo je šta se promijenilo u TakeoffCraft-u 0.8 (objavljeno 2026-11-01) i 0.8.1 (2026-11-02), u odnosu na 0.7. Legenda simbola sada se može brojati u cijelom setu odjednom, novi predmjer može krenuti od cijena vaših prošlih poslova, a predmjer se može provjeriti u odnosu na zalihe dobavljača. 0.8.1 je popravna verzija.

### Novo

**Prebrojite sve u setu**

- **Označite legendu jednom.** {{ui:Prebroji sve}} na traci alata čita legendu simbola: prevucite okvir oko simbola i imena odštampanih pored njih. Svaki simbol se navodi sa svojom slikom i imenom, a ime postaje ime stavke. Odštrikirajte šta ne želite, pa izaberite {{ui:Broji na N listova}}. Traka pokazuje list koji se pretražuje, {{ui:Otkaži}} zaustavlja izvođenje, a stranica ostaje upotrebljiva.
- **Svi listovi u jednom izvođenju.** Svaki simbol broji se na svakom otvorenom listu. List nacrtan u drugoj razmjeri pretražuje se u toj razmjeri, a simboli se nalaze okrenuti pod bilo kojim pravim uglom. Sami simboli legende ne broje se na svom listu.
- **Pregledajte prije nego što se išta doda.** Svaki zbir ima vezu po listu („E-103: 4”) koja vodi na taj list. Kliknite okvir na nalazu da ga izostavite, a kliknite ponovo da ga vratite. Nivo poklapanja (50% do 100%) samo filtrira ono što je nađeno; ništa se ne pretražuje ponovo.
- **Jedan korak poništavanja.** {{ui:Dodaj N oznaka}} pravi stavku brojanja po simbolu, sa oznakom na svakom nalazu. Ime koje je već vaša stavka brojanja se ponovo koristi. {{key:Ctrl+Z}} vraća sve stavke i oznake. Ono što prihvatite također ide u {{ui:Naučeno}}.
- **Simboli pod bilo kojim uglom.** Označite {{ui:Simboli pod bilo kojim uglom}} prije brojanja da pronađete i simbole okrenute pod uglom koji nije pravi. Pretraga tada okreće svaki simbol na svakih 15 stepeni, a simbol koji nije okrugao može trajati do šest puta duže.
- **Šta je to.** Jednostavno poklapanje simbola na vašim listovima, bez uvježbanog modela, i ništa ne napušta vaš računar. Na izmišljenom setu od 200 listova trajalo je 9,4 sekunde od početka do kraja u Chrome-u na brzoj radnoj stanici; pravi setovi planova bit će sporiji. Pogledajte [Prebrojite sve u setu](topic:count-everything).

**Memorija cijena iz vaših poslova**

- **TakeoffCraft pamti vaše stope.** Kad sačuvate predmjer, svaka cijenjena stavka koja se koristi pamti se po imenu i tipu: stopa materijala, stopa rada, otpad i jedinica. Čuva se posljednjih 12 poslova za svako ime. Čuva se na ovom računaru uz cjenovnik biblioteke, nikad unutar datoteke predmjera, i ništa se nigdje ne šalje.
- **Započnite novi predmjer iz toga.** {{ui:Cijene}} na traci alata pokazuje, za svaku stavku, stope posljednjeg posla, tipične stope i raspon. {{ui:Koristi zadnje}} ili {{ui:Koristi tipične}} cijeni jednu stavku, a {{ui:Cijeni N stavki bez cijene iz memorije}} popunjava svaku stavku koja još nema cijenu. Svaka upotreba je jedan korak poništavanja.
- **Stariji radovi.** {{ui:Uči iz ranijeg predmjera…}} pamti cijenjene stavke sačuvanog predmjera (.json).
- **Pogledajte, promijenite, zaboravite.** {{ui:Sve što je zapamćeno}} navodi svako ime; dugme sa kantom zaboravlja jedno, a {{ui:Obriši sve cijene}} zaboravlja sve. Isključite {{ui:Pamti moje cijene kad sačuvam predmjer}} da zaustavite. Cijena po komadu nikad se ne stavlja na stavku po metru. Pogledajte [Memorija cijena iz vaših prošlih poslova](topic:price-memory).

**Zaliha dobavljača i rokovi isporuke**

- **Provjerite u odnosu na spisak dobavljača.** {{ui:Nabavka}} na traci alata uzima spisak zaliha dobavljača ({{ui:Dodaj datoteku dobavljača…}}), CSV ili tabelu, i provjerava šta predmjer treba, sa otpadom, u odnosu na njega. Čuva se do pet datoteka. Ništa se ne šalje i ništa ne pita dobavljača: vi donosite datoteku.
- **Šta kaže.** Kratke stavke dolaze prve: „Nedostaje 120 EA”, „Rok isporuke 21 dan”, „Na čekanju”, „Jedinica se razlikuje”, „Nema podatka o zalihi” ili „Na zalihi”. {{ui:Najduži željeni rok čekanja (dana)}} počinje od 14.
- **Lista narudžbe.** {{ui:Lista narudžbe (CSV)}} preuzima kratke stavke sa količinom koja nedostaje, dobavljačem i rokom isporuke.
- **Cijene u biblioteku.** Ako datoteka ima cijene, {{ui:Cijene u biblioteku}} postavlja cijenu materijala svakog unosa biblioteke sa istim imenom i jedinicom. Ponovno cijenite iz biblioteke da ih prenesete u predmjer.
- **U panelu Problemi.** Nedostatak je upozorenje, a dugo čekanje je napomena, pod „Zaliha dobavljača”. Možete prihvatiti jedno uz razlog, a razlog se čuva u predmjeru. Pogledajte [Provjera zaliha dobavljača i rokova isporuke](topic:supplier-stock).

**AI asistenti**

- **Alati za sva tri.** Sa dozvoljenim asistentima u {{ui:Postavke}}, asistent može pročitati legendu (`legend_open`), pokrenuti brojanje (`legend_count_start`, zatim `legend_count_status` i `legend_count_result`) i dodati ga (`legend_count_add`, koji može prvo pregledati). Može pročitati zapamćene cijene (`prices_list`) i cijeniti stavke iz njih (`prices_apply`, koji može prvo pregledati), te pročitati provjeru dobavljača (`supply_check`). Dodavanje datoteke dobavljača ostaje vaš posao. Pogledajte [Koristi TakeoffCraft sa AI asistentom](topic:use-with-ai-assistants).

**U svakoj aplikaciji**

- **Jezici.** Pedeset i četiri jezika ukupno; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili i uzbekistanski). Jezici osim engleskog su strojni nacrti dok ih izvorni govornik ne pregleda.
- **Ulazni uređaji.** {{ui:Postavke}} › {{ui:Global}} › {{ui:Ulazni uređaji}} određuje šta rade touchpad, bočna dugmad miša, olovka, 3D miš, kontroler za igre ili MIDI kontroler, za svaku aplikaciju ili za jednu. Pogledajte [Korištenje touchpad-a, 3D miša ili kontrolera](common:input-devices).
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} nudi {{ui:Prelomi}} (početak), {{ui:2 reda}} i {{ui:1 red}}; grupe koje ne stanu se pomjeraju u stranu. Pogledajte [Raspored panela](common:arrange-panels).
- **Panel problema.** Zajednički panel upozorenja i napomena sada nosi provjeru zaliha dobavljača iz gore, uz ostale provjere.
- **Dodaci.** Dodaci prate vašu listu naloga. Pogledajte [Dodaci i vaša lista naloga](common:addons-basics).
- **Povežite svoj AI.** CadCraft Studio je centar: povežite svog asistenta jednom za svih osam aplikacija. Studio nema vlastiti AI.

### Ispravke u 0.8.1

- **Odjeljak klasa u DWG-u.** Odjeljak klasa DWG datoteke bio je pročitan kao pogrešan tip. Ovo je ispravljeno u TakeoffCraft-u i u još četiri aplikacije.
- **Studio može mijenjati jezik dok radi.** Prije toga, Studio i njegova spakovana izdanja bili su samo na engleskom. Ovo nije testirano u desktop verziji na svakoj platformi; javite nam ako se jezik ne mijenja.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može upozoriti, a na Macu prvi put desnim klikom izaberete {{ui:Otvori}}. Verzije za prodavnice (Microsoft Store, Google Play, App Store) su na čekanju, a verzija za iPad i iPhone nije ponovo izgrađena za 0.8.1.
- **Ažuriranja Studija.** Windows instalater i Linux paketi provjeravaju jednom dnevno i pitaju prije nego što instaliraju. Prenosivi zip samo javlja, a macOS i APK se ne ažuriraju sami. macOS .dmg za 0.8 prati izdanje.
- **Povežite svoj AI.** Povezivanje jednim klikom unutar Studija, hostovani konektor za AI u pregledaču, vlastiti API ključ unutar Studija i objavljen MCP paket nisu obećani u ovoj verziji.
- **Prebrojite sve.** Potrebni su simboli nacrtani na isti način kao u legendi, a simbol sa zidom ili dugom linijom kroz njega može se propustiti. Zrcaljeni simboli se ne nalaze, a list bez razmjere nacrtan u drugoj veličini pretražuje se u veličini legende. Provjerite nalaze na prvom listu prije nego što vjerujete ostalima.
- **Zalihe dobavljača.** Podaci o zalihama su aktuelni samo koliko i datoteka koju dodate. Provjera nikad ne pita dobavljača.
- **Jezici.** Traka aplikacije na tamilskom se prelijeva.

Sve ostalo je u [Još nije izgrađeno](topic:not-built-yet). Za izdanje prije ovog, pogledajte [Novo u verziji 0.7](topic:whats-new-0-7).
