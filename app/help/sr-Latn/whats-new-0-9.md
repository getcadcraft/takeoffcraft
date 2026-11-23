---
title: Šta je novo u 0.9 (ranije)
summary: Dužine u metrima, centimetrima ili milimetrima, metričke površine u m2 sa površinom zida, unapred podešene razmere 1:75 i 1:150, jedinice za težinu i temperaturu, Luk sa deset načina crtanja, kao i žive kursore, praćenje i spisak učesnika.
keywords: šta je novo 0.9, ranije izdanje, šta je novo, beleške o izdanju, dnevnik promena, 0.9, prikaži dužine kao, metri, centimetri, milimetri, metričko, prati Global, jedinice, prikaz jedinica, m2, kvadratni metri, površina zida, unapred podešene razmere, 1:75, 1:150, težina, kilogrami, kg, tona, t, lb, temperatura, celzijus, farenhajt, luk, načini crtanja luka, luk sa tri tačke, poluprečnik, živo, kursori, praćenje, spisak učesnika, klasa, opisi alatki, raspored, 0.8, 0.8.1, verzija, nove funkcije, prebroj sve, legenda, legenda simbola, ceo set, memorija cena, raniji poslovi, poslednji posao, uobičajena cena, dobavljač, zaliha, rok isporuke, zaostatak, spisak za naručivanje, manjak, panel problema, asistenti, jezici, ulazni uređaji, redovi alatki, dwg
from: f4322ba2
---

Ovo su promene u TakeoffCraft 0.9 u odnosu na 0.8.1. Ovo je mala verzija za ovu aplikaciju: dužine sada mogu da se čitaju u metrima, centimetrima ili milimetrima, površine i razmere ispravno prate metrički rad, a Luk ima deset načina crtanja. Žive sesije takođe pokazuju ko je gde.

## Novo

### Čitanje dužina u metrima, centimetrima ili milimetrima

- **Prikaži dužine kao.** {{ui:Podešavanja}} › {{ui:TakeoffCraft}} ima {{ui:Prikaži dužine kao}} sa {{ui:Prati Global}}, {{ui:Stope i inči}}, m, cm i mm. {{ui:Prati Global}} koristi metričku jedinicu za dužinu koju si označio u {{ui:Podešavanja}} › {{ui:Globalno}} › {{ui:Jedinice}}, a stope i inči kada nijedna nije označena. Menja način na koji se dužine čitaju na listu, u statusnoj traci i u panelima, uključujući visine, dubinu, debljinu i nivoe. Goli broj unet u polje visine čita se u prikazanoj jedinici.
- **Samo prikaz.** Količine, troškovi i izvozi računaju se iz tačnih dužina. Izbor 1/16, 1/8 i 1/4 inča pojavljuje se samo za stope i inče. Vidi [Prikaz dužina u metrima](topic:show-lengths-in-meters).
- **Jedinice za težinu.** Stavka {{ui:Unesena količina (bez crteža)}} sada može biti u lb, TON, kg ili t i može da se ceni po jedinici.
- **Temperatura.** Svaka stavka ima opciono polje {{ui:Temperatura}} u uređivaču stavke, uneto u stepenima C ili F. {{ui:Prikaži temperature kao}} u {{ui:Podešavanja}} › {{ui:TakeoffCraft}} nudi {{ui:Prati Global}}, °C ili °F.

### Površine i razmere za metrički rad

- **Površine u m2 na crtežu.** Površina izmerena metričkom stavkom sada na oznaci crteža i u panelu oznaka, kao i u tabeli, piše m2, umesto SF. Pravilo je: m2 kada je stavka cenjena u metričkom sistemu ili su dužine prikazane u m, cm ili mm, a SF inače.
- **Površina zida.** Linearna stavka sa visinom takođe prikazuje površinu zida (dužina puta visina) na listi stavki i kao red sa napomenom ispod tabele količina po stavkama.
- **Unapred podešene razmere 1:75 i 1:150.** Nalaze se na listi {{ui:Unapred podešeno}} u grupi {{ui:Razmera}}, koja sada ima 32 razmere. Vidi [Unapred podešene razmere](topic:scale-presets).

### Luk sa deset načina

- Dok je {{ui:Luk}} uključen (dugme na traci alata ili {{key:R}}), u traci lista pojavljuje se okvir {{ui:Način crtanja luka}} sa opcijama: 3 tačke; Početak, Centar, Kraj; Početak, Centar, Ugao; Početak, Centar, Dužina; Početak, Kraj, Ugao; Početak, Kraj, Pravac; Početak, Kraj, Poluprečnik; Centar, Početak, Kraj; Centar, Početak, Ugao i Centar, Početak, Dužina.
- Ugao, dužina, poluprečnik i pravac mogu da se kliknu ili upišu. Radi u linearnim nizovima, površinama i izrezima. Fajlovi sačuvani pre 0.9 otvaraju se isto. Vidi [Crtanje lukova na deset načina](topic:draw-arcs-ten-methods).

### Zajednički rad

- **Vidiš tuđe kursore.** U Live sesiji pokazivač svake osobe vidi se na listu sa njenim imenom i bojom, uz isprekidani okvir oko oznaka koje je izabrala. Ljudi na drugom listu navedeni su sa imenom tog lista. Vidi [Zajednički rad uživo](topic:work-live).
- **Praćenje osobe i spisak učesnika.** Dugme {{ui:Učesnici}} u Live sesiji navodi svaku osobu sa alatom koji koristi, listom na kojem je i vremenom poslednje izmene. {{ui:Prati}} pomera tvoj prikaz zajedno sa njihovim, a domaćin može da koristi {{ui:Zamoli sve da prate mene}}. Vidi [Praćenje saradnika u Live sesiji](topic:follow-a-teammate).

## U svakoj aplikaciji

- **Opisi alatki i početni savet.** Tekst pri zadržavanju miša je Bootstrap opis alatke, a početni savet može da se zatvori.
- **Trake kartica sa pomicanjem.** Traka kartica panela koja ne staje pomera se umesto da bude odsečena.
- **Naslovi kartica.** Kartica pregledača glasi `<document> - TakeoffCraft | CadCraft`.
- **Raspored.** Lista rasporeda u {{ui:Podešavanja}} je padajući meni koji prikazuje izabrani raspored.
- **Jezik.** Jezik koji izabereš sada važi i za reči koje sama stranica ispisuje, na primer Novo, Otvori i Sačuvaj. Jezici osim engleskog su mašinski prevodi dok ih ne pročita izvorni govornik.

## Iskreno o ograničenjima

- Prikaz dužina, jedinice za težinu i temperaturu i nove unapred podešene razmere proverene su testovima i na stranici. Svaki panel u svakoj jedinici nije ručno proveren.
- Spisak učesnika nije ručno proveren sa pravom grupom nastavnika i učenika.
- Jezici osim engleskog su mašinski prevodi.
- Windows instalateri nisu digitalno potpisani (Više informacija, pa Ipak pokreni). Disk slika za macOS nije notarizovana (desni klik, pa {{ui:Otvoreno}}).

## Ranije: 0.8 i 0.8.1

Ovo su promene u TakeoffCraft 0.8 (objavljen 2026-11-01) i 0.8.1 (2026-11-02) u odnosu na 0.7. Legenda simbola sada može da se prebroji na celom setu odjednom, novi predmer može da počne od cena tvojih ranijih poslova, a predmer može da se proveri u odnosu na zalihe dobavljača. 0.8.1 je izdanje sa ispravkama.

### Novo

**Prebroj sve u setu**

- **Označi legendu jednom.** {{ui:Prebroj sve}} na traci alata čita legendu simbola: prevuci okvir oko simbola i imena ispisanih pored njih. Svaki simbol je naveden sa svojom slikom i imenom, a ime postaje ime stavke. Odznači ono što ne želiš, pa izaberi {{ui:Prebroj na N listova}}. Traka prikazuje list koji se pretražuje, {{ui:Otkaži}} zaustavlja pokretanje, a stranica ostaje upotrebljiva.
- **Svi listovi u jednom pokretanju.** Svaki simbol se broji na svakom otvorenom listu. List nacrtan u drugoj razmeri pretražuje se u toj razmeri, a simboli se nalaze i kada su okrenuti pod bilo kojim pravim uglom. Sopstveni simboli legende ne broje se na njenom listu.
- **Pregled pre dodavanja bilo čega.** Svaki zbir ima vezu po listu („E-103: 4“) koja vodi do tog lista. Klikni okvir na nalazu da ga izostaviš, pa ponovo klikni da ga vratiš. Nivo podudaranja (50% do 100%) samo filtrira ono što je nađeno; ništa se ponovo ne pretražuje.
- **Jedan korak poništavanja.** {{ui:Dodaj N oznaka}} pravi stavku brojanja za svaki simbol, sa oznakom na svakom nalazu. Ime koje je već tvoja stavka brojanja se ponovo koristi. {{key:Ctrl+Z}} vraća sve stavke i oznake. Ono što prihvatiš takođe ulazi u {{ui:Naučeno}}.
- **Simboli pod bilo kojim uglom.** Označi {{ui:Simboli pod bilo kojim uglom}} pre brojanja da bi se našli i simboli okrenuti pod uglom koji nije pravi. Pretraga tada okreće svaki simbol na svakih 15 stepeni, a simbol koji nije okrugao može da traje do šest puta duže.
- **Šta je to.** Obično poklapanje simbola na tvojim listovima, bez obučenog modela, i ništa ne napušta tvoj računar. Na izmišljenom setu od 200 listova trajalo je 9,4 sekunde od početka do kraja u pregledaču Chrome na brzom računaru; pravi setovi planova biće sporiji. Vidi [Prebrojavanje svega u setu](topic:count-everything).

**Memorija cena iz tvojih poslova**

- **TakeoffCraft pamti tvoje jedinične cene.** Kada sačuvaš predmer, svaka cenjena stavka koja se koristi pamti se po imenu i tipu: jedinična cena materijala, jedinična cena rada, otpad i jedinica. Čuva se poslednjih 12 poslova za svako ime. Čuva se na ovom računaru uz biblioteku cena, nikad unutar datoteke predmera, i ništa se nigde ne šalje.
- **Počni novi predmer od toga.** {{ui:Cene}} na traci alata prikazuje, za svaku stavku, jedinične cene poslednjeg posla, uobičajene jedinične cene i raspon. {{ui:Koristi poslednju}} ili {{ui:Koristi uobičajenu}} cenuje jednu stavku, a {{ui:Dodeli cene za N stavki bez cene iz memorije}} popunjava svaku stavku koja još nema cenu. Svaka upotreba je jedan korak poništavanja.
- **Stariji radovi.** {{ui:Nauči iz ranijeg predmera…}} pamti cenjene stavke sačuvanog predmera (.json).
- **Vidi, menjaj, zaboravi.** {{ui:Sve zapamćeno}} navodi svako ime; dugme sa korpom zaboravlja jedno, a {{ui:Obriši sve cene}} zaboravlja sve. Isključi {{ui:Zapamti moje cene kada sačuvam predmer}} da bi se to zaustavilo. Cena po komadu nikad se ne stavlja na stavku po metru. Vidi [Memorija cena iz ranijih poslova](topic:price-memory).

**Zalihe dobavljača i rokovi isporuke**

- **Proveri u spisku dobavljača.** {{ui:Zaliha}} na traci alata uzima spisak zaliha dobavljača ({{ui:Dodaj datoteku dobavljača…}}), CSV ili tabelu, i proverava šta predmer treba, uz otpad, u odnosu na njega. Čuva se do pet datoteka. Ništa se ne šalje i ništa ne pita dobavljača: ti donosiš datoteku.
- **Šta piše.** Kratke stavke dolaze prve: „Manjak 120 EA“, „Rok isporuke 21 dan“, „Na čekanju“, „Jedinica se razlikuje“, „Nema podatka o zalihi“ ili „Na zalihi“. {{ui:Najduži rok koji prihvataš (dana)}} počinje od 14.
- **Spisak za naručivanje.** {{ui:Spisak za naručivanje (CSV)}} preuzima kratke stavke sa količinom koja nedostaje, dobavljačem i rokom isporuke.
- **Cene u biblioteku.** Ako datoteka ima cene, {{ui:Cene u biblioteku}} postavlja cenu materijala za svaki unos biblioteke sa istim imenom i jedinicom. Ponovo ceni iz biblioteke da ih prebaciš u predmer.
- **U panelu Problemi.** Manjak je upozorenje, a dugo čekanje je napomena, pod „Zalihe dobavljača“. Možeš da prihvatiš jedno uz razlog, a razlog se čuva u predmeru. Vidi [Provera zaliha dobavljača i rokova isporuke](topic:supplier-stock).

**AI asistenti**

- **Alati za sva tri.** Kada su asistenti dozvoljeni u {{ui:Podešavanja}}, asistent može da pročita legendu (`legend_open`), pokrene brojanje (`legend_count_start`, zatim `legend_count_status` i `legend_count_result`) i doda je (`legend_count_add`, koji može prvo da prikaže pregled). Može da pročita zapamćene cene (`prices_list`) i da cenuje stavke iz njih (`prices_apply`, koji može prvo da prikaže pregled), i da pročita proveru zaliha (`supply_check`). Dodavanje datoteke dobavljača ostaje tvoj posao. Vidi [Korišćenje TakeoffCraft sa AI asistentima](topic:use-with-ai-assistants).

**U svakoj aplikaciji**

- **Jezici.** Ukupno pedeset četiri jezika; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikans, filipinski, svahili i uzbekistanski). Jezici osim engleskog su mašinski prevodi dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** {{ui:Podešavanja}} › {{ui:Globalno}} › {{ui:Ulazni uređaji}} određuje šta rade tačped, bočna dugmad miša, olovka, 3D miš, kontroler za igre ili MIDI kontroler, za svaku aplikaciju ili za jednu. Vidi [Korišćenje tačpeda, 3D miša ili kontrolera](common:input-devices).
- **Redovi alatki.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatki}} nudi {{ui:Prelomi}} (početak), {{ui:2 reda}} i {{ui:1 red}}; grupe koje ne staju pomeraju se u stranu. Vidi [Raspored panela](common:arrange-panels).
- **Panel problema.** Zajednički panel upozorenja i napomena sada nosi proveru zaliha dobavljača, uz ostale provere.
- **Dodaci.** Dodaci prate tvoj spisak naloga. Vidi [Dodaci i tvoj spisak naloga](common:addons-basics).
- **Poveži svoj AI.** CadCraft Studio je centar: poveži svog asistenta jednom za svih osam aplikacija. Studio nema sopstveni AI.

### Ispravljeno u 0.8.1

- **Odeljak klasa DWG.** Odeljak klasa u DWG datoteci bio je pročitan kao pogrešan tip. Ovo je ispravljeno u TakeoffCraft i u još četiri aplikacije.
- **Studio može da menja jezik dok radi.** Ranije su Studio i njegova spakovana izdanja bila samo na engleskom. Ovo nije testirano u desktop verziji na svim platformama; javi nam ako se jezik ne menja.

### Nije još u ovoj verziji

- **Nije digitalno potpisano.** Windows može da upozori, a na Mac-u desnim klikom biraš {{ui:Otvoreno}} prvi put. Prodavnice (Microsoft Store, Google Play, App Store) su na čekanju, a build za iPad i iPhone nije ponovo napravljen za 0.8.1.
- **Ažuriranja Studija.** Windows instalater i Linux paketi proveravaju jednom dnevno i pitaju pre. Prenosivi zip samo javlja, a macOS i APK se ne ažuriraju sami. macOS .dmg iz 0.8 prati izdanje.
- **Poveži svoj AI.** Povezivanje u jednom kliku unutar Studija, hostovani konektor za AI u pregledaču, tvoj API ključ unutar Studija i objavljen MCP paket nisu obećani u ovoj verziji.
- **Prebroj sve.** Potrebni su simboli nacrtani na isti način kao u legendi, a simbol sa zidom ili dugom linijom kroz njega može da se propusti. Ogledalski simboli se ne nalaze, a list bez razmere nacrtan u drugoj veličini pretražuje se u veličini legende. Proveri nalaze na prvom listu pre nego što veruješ ostatku.
- **Zalihe dobavljača.** Brojke zaliha su aktuelne onoliko koliko je datoteka koju dodaš. Provera nikad ne pita dobavljača.
- **Jezici.** Traka aplikacije na tamilskom se preliva.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet). Za izdanje pre ovog pogledaj [Šta je novo u 0.7](topic:whats-new-0-7).
