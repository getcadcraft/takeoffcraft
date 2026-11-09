---
title: Što je novo u verziji 0.8 i 0.8.1
summary: Prebrojite cijelu legendu simbola na svim otvorenim listovima u jednom izvođenju, odredite cijene stavkama prema stopama vaših prošlih poslova, provjerite predmjer prema zalihama i rokovima isporuke dobavljača te koristite nove alate za asistente za sve tri značajke, uz zajedničke promjene u 0.8 i ispravak za DWG datoteke u 0.8.1.
keywords: što je novo, bilješke o izdanju, popis promjena, promjene, 0.8, 0.8.1, verzija, nove značajke, broji sve, legenda, legenda simbola, cijeli skup, memorija cijena, prošli poslovi, zadnji posao, tipična cijena, dobavljač, zalihe, rok isporuke, zaostatak, popis za narudžbu, manjak, panel problema, asistent, jezici, ulazni uređaji, redci alatne trake, dwg
from: a04adef6
---

Ovo su promjene u TakeoffCraft 0.8 (objavljeno 2026-11-01) i 0.8.1 (2026-11-02) u odnosu na 0.7. Legendu simbola sada je moguće prebrojiti na cijelom skupu listova odjednom, novi predmjer može početi s cijenama vaših prošlih poslova, a predmjer se može provjeriti prema zalihama dobavljača. 0.8.1 je izdanje s ispravcima.

## Novo

### Broji sve u skupu listova

- **Obuhvatite legendu jednom.** {{ui:Broji sve}} na alatnoj traci čita legendu simbola: povucite okvir oko simbola i naziva ispisanih uz njih. Svaki simbol prikazuje se sa svojom slikom i nazivom, a naziv postaje naziv stavke. Odznačite ono što ne želite, zatim odaberite {{ui:Broji na N listova}}. Traka pokazuje list koji se pretražuje, {{ui:Odustani}} zaustavlja izvođenje, a stranica ostaje upotrebljiva.
- **Svi listovi u jednom izvođenju.** Svaki simbol broji se na svakom otvorenom listu. List nacrtan u drugom mjerilu pretražuje se u tom mjerilu, a simboli se pronalaze okrenuti pod bilo kojim pravim kutom. Simboli same legende na njezinom listu ne broje se.
- **Pregled prije dodavanja.** Svaki zbroj ima poveznicu po listu ("E-103: 4") koja vodi na taj list. Kliknite okvir na pronalasku da ga izostavite, a ponovno kliknite da ga vratite. Razina podudaranja (50 % do 100 %) samo filtrira ono što je pronađeno; ništa se ne traži ponovno.
- **Jedan korak poništavanja.** {{ui:Dodaj N oznaka}} stvara stavku brojanja za svaki simbol, s oznakom na svakom pronalasku. Naziv koji je već vaša stavka brojanja ponovno se koristi. {{key:Ctrl+Z}} vraća sve stavke i oznake. Ono što prihvatite također se dodaje u {{ui:Naučeno}}.
- **Simboli pod bilo kojim kutom.** Označite {{ui:Simboli pod bilo kojim kutom}} prije brojanja da biste pronašli i simbole okrenute pod kutom koji nije pravi kut. Pretraga tada okreće svaki simbol svakih 15 stupnjeva, a simbol koji nije okrugao može trajati do šest puta dulje.
- **Što je to.** Obično podudaranje simbola na vašim listovima, bez treniranog modela, i ništa ne napušta vaše računalo. Na izmišljenom skupu od 200 listova trajalo je 9.4 sekunde od početka do kraja u pregledniku Chrome na brzom stolnom računalu; stvarni skupovi nacrta bit će sporiji. Pogledajte [Broji sve u skupu listova](topic:count-everything).

### Pamćenje cijena iz vaših poslova

- **TakeoffCraft pamti vaše stope.** Kad spremite predmjer, svaka cijenjena stavka koja se koristi pamti se po nazivu i vrsti: stopa materijala, stopa rada, gubitak i jedinica. Zadnjih 12 poslova čuva se za svaki naziv. Čuva se na ovom računalu uz knjižnicu cijena, nikad unutar datoteke predmjera, i ništa se nigdje ne šalje.
- **Započnite novi predmjer iz toga.** {{ui:Cijene}} na alatnoj traci prikazuje za svaku stavku stope zadnjeg posla, tipične stope i raspon. {{ui:Koristi zadnje}} ili {{ui:Koristi tipične}} određuje cijenu jednoj stavci, a {{ui:Odredi cijenu N stavki bez cijene iz memorije}} popunjava svaku stavku koja još nema cijenu. Svaka primjena je jedan korak poništavanja.
- **Stariji radovi.** {{ui:Nauči iz prošlog predmjera…}} pamti cijenjene stavke spremljenog predmjera (.json).
- **Pogledajte, promijenite, zaboravite.** {{ui:Sve zapamćeno}} popisuje svaki naziv; gumb s košem za smeće zaboravlja jedan, a {{ui:Očisti sve cijene}} zaboravlja sve. Isključite {{ui:Zapamti moje cijene kad spremim predmjer}} da biste to zaustavili. Cijena po komadu nikad se ne stavlja na stavku mjerenu po dužini u ft. Pogledajte [Pamćenje cijena iz vaših prošlih poslova](topic:price-memory).

### Zalihe dobavljača i rokovi isporuke

- **Provjera prema popisu dobavljača.** {{ui:Nabava}} na alatnoj traci uzima popis zaliha dobavljača ({{ui:Dodaj datoteku dobavljača…}}), CSV ili proračunsku tablicu, i provjerava što predmjer treba, uključujući gubitak, prema njemu. Čuva se najviše pet datoteka. Ništa se ne šalje i ništa ne pita dobavljača: vi donosite datoteku.
- **Što pokazuje.** Kratke stavke dolaze prve: "Manjak 120 EA", "Rok isporuke 21 dan", "Na čekanju (backorder)", "Jedinica se razlikuje", "Nema podatka o zalihi" ili "Na zalihi". {{ui:Najduže prihvatljivo čekanje (dana)}} počinje od 14.
- **Popis za narudžbu.** {{ui:Popis za narudžbu (CSV)}} preuzima kratke stavke s količinom manjka, dobavljačem i rokom isporuke.
- **Cijene u knjižnicu.** Ako datoteka ima cijene, {{ui:Cijene u Knjižnicu}} postavlja cijenu materijala za svaki unos knjižnice s istim nazivom i jedinicom. Ponovno odredite cijene iz knjižnice da ih prenesete u predmjer.
- **U panelu Problemi.** Manjak je upozorenje, a dugo čekanje je napomena, pod "Zalihe dobavljača". Jedno možete prihvatiti uz razlog, a razlog se sprema u predmjer. Pogledajte [Provjera zaliha dobavljača i rokova isporuke](topic:supplier-stock).

### AI asistenti

- **Alati za sva tri.** Uz omogućene asistente u {{ui:Postavke}}, asistent može pročitati legendu (`legend_open`), pokrenuti brojanje (`legend_count_start`, zatim `legend_count_status` i `legend_count_result`) i dodati ga (`legend_count_add`, koji može prvo prikazati pregled). Može pročitati zapamćene cijene (`prices_list`) i odrediti cijene stavkama prema njima (`prices_apply`, koji može prvo prikazati pregled), te pročitati provjeru dobavljača (`supply_check`). Dodavanje datoteke dobavljača ostaje vaš posao. Pogledajte [Upotreba TakeoffCraft s AI asistentima](topic:use-with-ai-assistants).

### U svakoj aplikaciji

- **Jezici.** Ukupno pedeset i četiri jezika; deset je novo (litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili i uzbečki). Jezici osim engleskog strojni su nacrti dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** {{ui:Postavke}} › {{ui:Globalne}} › {{ui:Ulazni uređaji}} određuje što rade trackpad, bočne tipke miša, olovka, 3D miš, igraći kontroler ili MIDI kontroler, za svaku aplikaciju ili za jednu. Pogledajte [Upotreba trackpada, 3D miša ili kontrolera](common:input-devices).
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} nudi {{ui:Prelomi}} (početak), {{ui:2 retka}} i {{ui:1 redak}}; skupine koje ne stanu pomiču se bočno. Pogledajte [Rasporedite panele](common:arrange-panels).
- **Panel Problemi.** Zajednički panel upozorenja i napomena sada uz ostale provjere sadrži i provjeru zaliha dobavljača.
- **Dodaci.** Dodaci prate vaš popis računa. Pogledajte [Dodaci i vaš popis računa](common:addons-basics).
- **Povežite svoj AI.** CadCraft Studio je središte: jednom povežite svog asistenta za svih osam aplikacija. Studio nema vlastiti AI.

## Ispravljeno u 0.8.1

- **Odjeljak klasa DWG datoteke.** Odjeljak klasa DWG datoteke bio je pročitan kao pogrešna vrsta. Ispravljeno je u TakeoffCraft i u još četiri aplikacije.
- **Studio može mijenjati jezik dok radi.** Prije su Studio i njegova pakirana izdanja bila samo na engleskom. Ovo nije provjereno u desktop verziji na svim platformama; javite nam ako se jezik ne mijenja.

## Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može upozoriti, a na Macu desnom tipkom kliknete i prvi put odaberete {{ui:Otvoreno}}. Trgovačka izdanja (Microsoft Store, Google Play, App Store) su na čekanju, a izdanje za iPad i iPhone nije ponovno izrađeno za 0.8.1.
- **Ažuriranja Studija.** Windows instalacijski program i Linux paketi provjeravaju jednom dnevno i pitaju prije instalacije. Prijenosni zip samo javlja, a macOS i APK se ne ažuriraju sami. Macintosh .dmg za 0.8 prati izdanje.
- **Povežite svoj AI.** Povezivanje u jedan klik unutar Studija, hostirani konektor za AI u pregledniku, vlastiti API ključ unutar Studija i objavljeni MCP paket nisu obećani u ovoj verziji.
- **Broji sve.** Potrebni su simboli nacrtani na isti način kao u legendi, a simbol s zidom ili dugom linijom kroz njega može se propustiti. Zrcaljeni simboli se ne pronalaze, a list bez mjerila nacrtan u drugoj veličini pretražuje se u veličini legende. Provjerite pronalaske na prvom listu prije nego što vjerujete ostalima.
- **Zalihe dobavljača.** Podaci o zalihama točni su koliko i datoteka koju dodate. Provjera nikad ne pita dobavljača.
- **Jezici.** Traka aplikacije za tamilski se prelijeva.

Sve ostalo nalazi se u [Još nije izrađeno](topic:not-built-yet). Za izdanje prije ovoga pogledajte [Što je novo u verziji 0.7](topic:whats-new-0-7).
