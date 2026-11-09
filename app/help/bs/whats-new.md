---
title: Šta je novo u 0.8 i 0.8.1
summary: Prebrojte cijeli set simbola na svim otvorenim listovima u jednom pokretanju, cijenite stavke prema cijenama vaših ranijih poslova, provjerite procjenu prema zalihama i rokovima isporuke dobavljača, te nove alate za asistente za sva tri, plus zajedničke promjene verzije 0.8 i ispravku 0.8.1 za DWG datoteke.
keywords: šta je novo, novosti, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove funkcije, broji sve, legenda, legenda simbola, cijeli set, memorija cijena, raniji poslovi, zadnji posao, tipična cijena, dobavljač, zaliha, rok isporuke, zaostatak, lista narudžbe, manjak, panel problema, asistent, jezici, ulazni uređaji, redovi alatne trake, dwg
from: a04adef6
---

Ovo je ono što se promijenilo u TakeoffCraft 0.8 (objavljena 2026-11-01) i 0.8.1 (2026-11-02), u odnosu na 0.7. Legenda simbola sada se može prebrojati u cijelom setu odjednom, nova procjena može početi od cijena vaših ranijih poslova, a procjena se može provjeriti prema zalihama dobavljača. 0.8.1 je izdanje s ispravkom.

## Novo

### Prebroji sve u setu

- **Označite legendu jednom.** {{ui:Broji sve}} na alatnoj traci čita legendu simbola: prevucite okvir oko simbola i nazive ispisane pored njih. Svaki simbol se navodi sa svojom slikom i nazivom, a naziv postaje naziv stavke. Odznačite ono što ne želite, zatim odaberite {{ui:Prebroji na N listova}}. Traka pokazuje list koji se pretražuje, {{ui:Otkaži}} zaustavlja pokretanje, a stranica ostaje upotrebljiva.
- **Svi listovi u jednom pokretanju.** Svaki simbol se broji na svakom otvorenom listu. List nacrtan u drugoj razmjeri pretražuje se u toj razmjeri, a simboli se nalaze okrenuti pod bilo kojim pravim uglom. Simboli same legende se ne broje na njenom listu.
- **Pregled prije dodavanja.** Svaki zbir ima vezu po listu ("E-103: 4") koja vodi na taj list. Kliknite okvir na pronalasku da ga izostavite, a ponovo kliknite da ga vratite. Nivo podudaranja (50% do 100%) samo filtrira ono što je pronađeno; ništa se ne pretražuje ponovo.
- **Jedan korak poništavanja.** {{ui:Dodaj N oznaka}} pravi stavku brojanja za svaki simbol, sa oznakom na svakom pronalasku. Naziv koji je već vaša stavka brojanja se ponovo koristi. {{key:Ctrl+Z}} vraća sve stavke i oznake. Ono što prihvatite također ide u {{ui:Naučeno}}.
- **Simboli pod bilo kojim uglom.** Označite {{ui:Simboli pod bilo kojim uglom}} prije brojanja da pronađete i simbole okrenute za ugao koji nije pravi. Pretraga tada okreće svaki simbol na svakih 15 stepeni, a simbol koji nije okrugao može trajati do šest puta duže.
- **Šta je to.** Obično poređenje simbola na vašim listovima, bez obučenog modela, i ništa ne napušta vaš računar. Na izmišljenom setu od 200 listova trajalo je 9.4 sekunde od početka do kraja u Chrome-u na brzom desktop računaru; stvarni setovi planova bit će sporiji. Pogledajte [Prebroji sve u setu](topic:count-everything).

### Memorija cijena iz vaših poslova

- **TakeoffCraft pamti vaše cijene.** Kad sačuvate procjenu, svaka cijenjena stavka koja se koristi pamti se po nazivu i vrsti: cijena materijala, cijena rada, otpad i jedinica. Zadnjih 12 poslova čuva se za svaki naziv. Čuva se na ovom računaru uz biblioteku cijena, nikad unutar datoteke procjene, i ništa se nigdje ne šalje.
- **Započnite novu procjenu iz nje.** {{ui:Cijene}} na alatnoj traci prikazuje, za svaku stavku, cijene zadnjeg posla, tipične cijene i raspon. {{ui:Koristi zadnje}} ili {{ui:Koristi tipične}} cijenjuje jednu stavku, a {{ui:Postavi cijenu za N stavki bez cijene iz memorije}} popunjava svaku stavku koja još nema cijenu. Svaka upotreba je jedan korak poništavanja.
- **Raniji rad.** {{ui:Uči iz ranije procjene…}} pamti cijenjene stavke sačuvane procjene (.json).
- **Pogledajte, promijenite, zaboravite.** {{ui:Sve što je zapamćeno}} navodi svaki naziv; dugme za smeće zaboravlja jedan, a {{ui:Obriši sve cijene}} zaboravlja sve. Isključite {{ui:Pamti moje cijene kad sačuvam procjenu}} da zaustavite. Cijena po komadu nikad se ne stavlja na stavku po stopi. Pogledajte [Memorija cijena iz vaših ranijih poslova](topic:price-memory).

### Zalihe dobavljača i rokovi isporuke

- **Provjera prema spisku dobavljača.** {{ui:Nabavka}} na alatnoj traci uzima spisak zaliha dobavljača ({{ui:Dodaj datoteku dobavljača…}}), CSV ili tabelarnu datoteku, i provjerava što procjena treba, uključujući otpad, prema njemu. Čuva se do pet datoteka. Ništa se ne šalje i ništa ne traži od dobavljača: vi donosite datoteku.
- **Šta piše.** Stavke kojih nedostaje dolaze prve: "Nedostaje 120 EA", "Rok isporuke 21 dana", "Na čekanju", "Jedinica se razlikuje", "Nema podatka o zalihi" ili "Na zalihi". {{ui:Najduži željeni rok čekanja (dana)}} počinje od 14.
- **Lista narudžbe.** {{ui:Lista narudžbe (CSV)}} preuzima stavke kojih nedostaje, s količinom koja nedostaje, dobavljačem i rokom isporuke.
- **Cijene u biblioteku.** Ako datoteka ima cijene, {{ui:Cijene u biblioteku}} postavlja cijenu materijala za svaku stavku biblioteke istog naziva i jedinice. Ponovo odredite cijene iz biblioteke da ih unesete u procjenu.
- **Na panelu problema.** Manjak je upozorenje, a dugo čekanje je napomena, pod "Zalihe dobavljača". Možete prihvatiti jednu uz razlog, a razlog se čuva u procjeni. Pogledajte [Provjerite zalihe dobavljača i rokove isporuke](topic:supplier-stock).

### AI asistenti

- **Alati za sva tri.** Kad su asistenti dozvoljeni u {{ui:Postavke}}, asistent može pročitati legendu (`legend_open`), pokrenuti brojanje (`legend_count_start`, zatim `legend_count_status` i `legend_count_result`) i dodati ga (`legend_count_add`, koji može prvo prikazati pregled). Može pročitati zapamćene cijene (`prices_list`) i cijeniti stavke iz njih (`prices_apply`, koji može prvo prikazati pregled), te pročitati provjeru dobavljača (`supply_check`). Dodavanje datoteke dobavljača ostaje vaš posao. Pogledajte [Koristite TakeoffCraft s AI asistentima](topic:use-with-ai-assistants).

### U svakoj aplikaciji

- **Jezici.** Ukupno pedeset i četiri jezika; deset je novo (litvanski, letonski, bosanski, maratski, telugu, albanski, afrikanski, filipinski, svahili i uzbečki). Jezici osim engleskog su strojni nacrti dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** {{ui:Postavke}} › {{ui:Globalno}} › {{ui:Ulazni uređaji}} određuje šta rade trackpad, bočna dugmad miša, olovka, 3D miš, gejmpad ili MIDI kontroler, za svaku aplikaciju ili za jednu. Pogledajte [Koristite trackpad, 3D miš ili kontroler](common:input-devices).
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} nudi {{ui:Prelomi}} (početno), {{ui:2 reda}} i {{ui:1 red}}; grupe koje ne stanu klize u stranu. Pogledajte [Rasporedite panele](common:arrange-panels).
- **Panel problema.** Zajednički panel upozorenja i napomena sada nosi provjeru zaliha dobavljača iznad, pored ostalih provjera.
- **Dodaci.** Dodaci prate vašu listu na računu. Pogledajte [Dodaci i vaša lista na računu](common:addons-basics).
- **Povežite svoj AI.** CadCraft Studio je centar: povežite asistenta jednom za svih osam aplikacija. Studio nema vlastiti AI.

## Ispravljeno u 0.8.1

- **Odjeljak klasa u DWG-u.** Odjeljak klasa u DWG datoteci bio je pročitan kao pogrešna vrsta. Ispravljeno je u TakeoffCraft-u i u još četiri aplikacije.
- **Studio može promijeniti jezik dok radi.** Ranije su Studio i njegova spakovana izdanja bili samo na engleskom. Nije provjereno u desktop verziji na svakoj platformi; javite nam ako se jezik ne promijeni.

## Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može upozoriti, a na Mac-u desnim klikom birate {{ui:Otvoreno}} prvi put. Izdanja za prodavnice (Microsoft Store, Google Play, App Store) su na čekanju, a izdanje za iPad i iPhone nije ponovo izgrađeno za 0.8.1.
- **Ažuriranja Studija.** Windows instalater i Linux paketi provjeravaju jednom dnevno i prvo pitaju. Prenosiva zip datoteka samo vas obavještava, a macOS i APK se sami ne ažuriraju. macOS .dmg za 0.8 slijedi izdanje.
- **Povežite svoj AI.** Povezivanje jednim klikom unutar Studija, hostovani konektor za AI u pregledaču, vlastiti API ključ unutar Studija i objavljeni MCP paket nisu obećani u ovoj verziji.
- **Broji sve.** Potrebni su simboli nacrtani na isti način kao u legendi, a simbol kroz koji prolazi zid ili duga linija može se previdjeti. Zrcalni simboli se ne nalaze, a list bez razmjere nacrtan u drugoj veličini pretražuje se u veličini legende. Provjerite pronalaske na prvom listu prije nego što vjerujete ostalima.
- **Zalihe dobavljača.** Podaci o zalihama su aktualni samo koliko i datoteka koju dodate. Provjera nikad ne pita dobavljača.
- **Jezici.** Traka aplikacije na tamilskom prelazi okvir.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet). Za izdanje prije ovoga, pogledajte [Šta je novo u 0.7](topic:whats-new-0-7).
