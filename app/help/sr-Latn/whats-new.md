---
title: Šta je novo u 0.9
summary: Dužine čitaj u metrima, centimetrima ili milimetrima, metričke površine u m2 sa površinom zida, unapred podešene razmere 1:75 i 1:150, jedinice težine i temperature, Luk sa deset načina, i žive kursore, Praćenje i spisak ljudi.
keywords: šta je novo, release notes, beleške o izdanju, dnevnik promena, 0.9, prikaži dužine kao, metri, centimetri, milimetri, metrički, prati global, jedinice, prikazne jedinice, m2, kvadratni metri, površina zida, unapred podešene razmere, 1:75, 1:150, težina, kilogrami, kg, tona, lb, temperatura, celzijus, farenhajt, luk, načini luka, luk sa tri tačke, poluprečnik, uživo, kursori, praćenje, spisak ljudi, klasa, opisi, raspored, promene, 0.8, 0.8.1, verzija, nove funkcije, brojanje svega, legenda, legenda simbola, ceo set, memorija cena, prethodni poslovi, prethodni posao, tipična cena, dobavljač, zaliha, rok isporuke, nedostatak, lista za naručivanje, nedostatak zaliha, panel problema, asistent, jezici, ulazni uređaji, redovi alatki, dwg
from: 6182b998
---

Ovo je šta se promenilo u TakeoffCraft-u 0.9, u odnosu na 0.8.1. To je malo izdanje za ovu aplikaciju: dužine se sada mogu čitati u metrima, centimetrima ili milimetrima, površine i razmere pravilno prate metrički rad, a Luk ima deset načina crtanja. Žive sesije takođe pokazuju ko je gde.

## Novo

### Čitaj dužine u metrima, centimetrima ili milimetrima

- **Prikaži dužine kao.** {{ui:Podešavanja}} › {{ui:TakeoffCraft}} ima {{ui:Prikaži dužine kao}} sa {{ui:Prati Global}}, {{ui:Stope i inči}}, m, cm i mm. {{ui:Prati Global}} koristi metričku jedinicu dužine koju si označio u {{ui:Podešavanja}} › {{ui:Globalno}} › {{ui:Jedinice}}, a stope i inči kada nijedna nije označena. Menja kako se dužine čitaju na listu, u statusnoj traci i u panelima, uključujući visine, dubinu, debljinu i nivoe. Goli broj unet u polje visine čita se u prikazanoj jedinici.
- **Samo prikaz.** Količine, troškovi i izvozi računaju se iz tačnih dužina. Izbor 1/16, 1/8 i 1/4 inča pojavljuje se samo za stope i inče. Vidi [Prikaz dužina u metrima](topic:show-lengths-in-meters).
- **Jedinice težine.** Stavka {{ui:Unesena količina (bez crteža)}} sada može biti u lb, TON, kg ili t, i može se cenovno odrediti po jedinici.
- **Temperatura.** Svaka stavka ima opcionalno polje {{ui:Temperatura}} u uređivaču stavki, uneto u stepenima C ili F. {{ui:Prikaži temperature kao}} u {{ui:Podešavanja}} › {{ui:TakeoffCraft}} nudi {{ui:Prati Global}}, °C ili °F.

### Površine i razmere za metrički rad

- **Površine u m2 na crtežu.** Površina izmerena metričkom stavkom sada na oznaci crteža i u panelu oznaka piše m2, kao i u tabeli, umesto SF. Pravilo je m2 kada je stavka cenovno određena u metričkim jedinicama ili kada se dužine prikazuju u m, cm ili mm, a SF inače.
- **Površina zida.** Linearna stavka sa visinom takođe prikazuje površinu zida (dužina puta visina) na spisku Stavki i kao red napomene ispod tabele količina po stavkama.
- **Unapred podešene razmere 1:75 i 1:150.** Nalaze se na spisku {{ui:Unapred podešeno}} u grupi {{ui:Razmera}}, koja sada ima 32 razmere. Vidi [Unapred podešene razmere](topic:scale-presets).

### Luk sa deset metoda

- Dok je {{ui:Luk}} uključen (dugme na traci ili {{key:R}}), polje {{ui:Način crtanja luka}} se pojavljuje na traci lista: Tri tačke, Početak, Centar, Kraj; Početak, Centar, Ugao; Početak, Centar, Dužina; Početak, Kraj, Ugao; Početak, Kraj, Pravac; Početak, Kraj, Poluprečnik; Centar, Početak, Kraj; Centar, Početak, Ugao i Centar, Početak, Dužina. Ugao, dužina, poluprečnik i pravac mogu se kliknuti ili uneti. Radi u linearnim nizovima, površinama i izrezima. Datoteke sačuvane pre 0.9 otvaraju se isto. Vidi [Crtanje lukova deset metoda](topic:draw-arcs-ten-methods).

### Zajednički rad

- **Vidi tuđe kursore.** U Live sesiji se pokazivač svake osobe vidi na listu sa njenim imenom i bojom, a isprekidan okvir oko oznaka koje je izabrala. Ljudi na drugom listu navedeni su sa imenom tog lista. Vidi [Zajednički rad uživo sa drugima](topic:work-live).
- **Prati osobu, i spisak ljudi.** Dugme {{ui:Ljudi}} u Live sesiji navodi svaku osobu sa alatom koji koristi, listom na kojem je i vremenom poslednje izmene. {{ui:Prati}} pomera tvoj prikaz zajedno sa njihovim, a domaćin može da koristi {{ui:Zamoli sve da prate mene}}. Vidi [Praćenje saradnika u Live sesiji](topic:follow-a-teammate).

## U svim aplikacijama

- **Opisi i početni savet.** Tekst pri prelasku mišem je Bootstrap opis, a početni savet može da se zatvori.
- **Trake kartica sa pomicanjem.** Traka kartica panela koja ne staje se pomera umesto da bude isečena.
- **Naslovi kartica.** Kartica pregledača glasi `<document> - TakeoffCraft | CadCraft`.
- **Raspored.** Spisak rasporeda u {{ui:Podešavanja}} je padajući meni koji prikazuje izabrani raspored.
- **Jezik.** Jezik koji izabereš sada dopire i do reči koje sama stranica ispisuje, kao što su Novo, Otvori i Sačuvaj. Jezici osim engleskog su nacrti mašinskog prevoda dok ih izvorni govornik ne pregleda.

## Iskrena ograničenja

- Prikaz dužina, jedinice težine i temperature i nove unapred podešene razmere proverili su testovi i stranica. Svaki panel pri svakoj jedinici nije ručno proveren.
- Spisak ljudi nije ručno proveren sa pravom grupom nastavnika i studenata.
- Jezici osim engleskog su nacrti mašinskog prevoda.
- Windows instalateri nisu potpisani kodom (Više informacija, pa Ipak pokreni). Disk slika za macOS nije notarizovana (desni klik, pa Otvoreno).

## Ranije: 0.8 i 0.8.1

Ovo je šta se promenilo u TakeoffCraft-u 0.8 (objavljen 2026-11-01) i 0.8.1 (2026-11-02), u odnosu na 0.7. Legenda simbola sada može da se broji na celom setu odjednom, novi predmer može da počne od cena tvojih ranijih poslova, a predmer može da se proveri u odnosu na zalihu dobavljača. 0.8.1 je izdanje sa ispravkama.

### Novo

**Broji sve u setu**

- **Obuhvati legendu jednom.** {{ui:Brojanje svega}} na traci sa alatkama čita legendu simbola: prevuci okvir oko simbola i imena ispisanih pored njih. Svaki simbol je naveden sa svojom slikom i imenom, a ime postaje ime stavke. Odštikliraj ono što ne želiš, pa izaberi {{ui:Broji na N listova}}. Traka pokazuje list koji se pretražuje, {{ui:Otkaži}} zaustavlja pokretanje, a stranica ostaje upotrebljiva.
- **Svi listovi u jednom prolazu.** Svaki simbol se broji na svakom otvorenom listu. List nacrtan u drugoj razmeri pretražuje se u toj razmeri, a simboli se nalaze okrenuti pod bilo kojim pravim uglom. Sami simboli legende se ne broje na njenom listu.
- **Pregled pre nego što se išta doda.** Svaki zbir ima link po listu („E-103: 4”) koji vodi na taj list. Klikni na okvir nađenog da ga izostaviš, a klikni ponovo da ga vratiš. Nivo poklapanja (50% do 100%) samo filtrira ono što je nađeno; ništa se ne pretražuje ponovo.
- **Jedan korak opozivanja.** {{ui:Dodaj N oznaka}} pravi stavku brojanja po simbolu sa oznakom na svakom nalazu. Ime koje je već tvoja stavka brojanja se ponovo koristi. {{key:Ctrl+Z}} vraća sve stavke i oznake. Ono što prihvatiš ide i u {{ui:Naučeno}}.
- **Simboli pod bilo kojim uglom.** Označi {{ui:Simboli pod bilo kojim uglom}} pre brojanja da bi se našli i simboli okrenuti pod uglom koji nije prav. Pretraga tada okreće svaki simbol na svakih 15 stepeni, a simbol koji nije okrugao može da traje do šest puta duže.
- **Šta je to.** Obično poklapanje simbola na tvojim listovima, bez obučenog modela, i ništa ne napušta tvoj računar. Na izmišljenom setu od 200 listova trajalo je 9,4 sekunde od početka do kraja u Chrome-u na brzoj stonoj mašini; pravi setovi planova biće sporiji. Vidi [Brojanje svega u setu](topic:count-everything).

**Memorija cena iz tvojih poslova**

- **TakeoffCraft pamti tvoje stope.** Kada sačuvaš predmer, svaka cenovno određena stavka koja se koristi pamti se po imenu i tipu: stopa materijala, stopa rada, otpad i jedinica. Čuva se poslednjih 12 poslova za svako ime. Čuva se na ovom računaru uz biblioteku cena, nikad unutar datoteke predmera, i ništa se ne šalje nigde.
- **Počni novi predmer od njih.** {{ui:Cene}} na traci sa alatkama prikazuje, za svaku stavku, stope poslednjeg posla, uobičajene stope i raspon. {{ui:Koristi poslednju}} ili {{ui:Koristi uobičajenu}} cenuje jednu stavku, a {{ui:Odredi N stavki bez cene iz memorije}} popunjava svaku stavku koja još nema cenu. Svako korišćenje je jedan korak opozivanja.
- **Stariji rad.** {{ui:Nauči iz ranijeg predmera…}} pamti cenovno određene stavke sačuvanog predmera (.json).
- **Vidi, promeni, zaboravi.** {{ui:Sve zapamćeno}} navodi svako ime; dugme kante zaboravlja jedno, a {{ui:Obriši sve cene}} zaboravlja sve. Isključi {{ui:Zapamti moje cene kada sačuvam predmer}} da bi stao. Cena po komadu se nikad ne stavlja na stavku po stopi. Vidi [Memorija cena iz prethodnih poslova](topic:price-memory).

**Zaliha dobavljača i rokovi isporuke**

- **Proveri u odnosu na spisak dobavljača.** {{ui:Zaliha}} na traci sa alatkama uzima spisak zaliha dobavljača ({{ui:Dodaj datoteku dobavljača…}}), CSV ili tabelu, i proverava šta predmer treba, sa otpadom, u odnosu na njega. Čuva se do pet datoteka. Ništa se ne šalje i ništa ne pita dobavljača: ti donosiš datoteku.
- **Šta kaže.** Kratke stavke idu prve: „Nedostaje 120 EA”, „Rok isporuke 21 dan”, „Na čekanju”, „Jedinica se razlikuje”, „Nema podatka o zalihi” ili „Na zalihi”. {{ui:Najduži rok koji prihvataš (dana)}} počinje sa 14.
- **Lista za naručivanje.** {{ui:Spisak za naručivanje (CSV)}} preuzima kratke stavke sa količinom koja nedostaje, dobavljačem i rokom isporuke.
- **Cene u biblioteku.** Ako datoteka ima cene, {{ui:Cene u biblioteku}} postavlja cenu materijala za svaki unos biblioteke sa istim imenom i jedinicom. Ponovo odredi cene iz biblioteke da ih uneseš u predmer.
- **U panelu problema.** Nedostatak je upozorenje, a dugačak rok je napomena, pod „Zaliha dobavljača”. Možeš prihvatiti jedan uz razlog, a razlog se čuva u predmeru. Vidi [Provera zalihe dobavljača i rokova isporuke](topic:supplier-stock).

**AI asistenti**

- **Alati za sve tri.** Uz dozvoljene asistente u {{ui:Podešavanja}}, asistent može da čita legendu (`legend_open`), pokrene brojanje (`legend_count_start`, pa `legend_count_status` i `legend_count_result`) i doda je (`legend_count_add`, koji može prvo da prikaže pregled). Može da čita zapamćene cene (`prices_list`) i da cenuje stavke iz njih (`prices_apply`, koji može prvo da prikaže pregled), i da čita proveru zalihe dobavljača (`supply_check`). Dodavanje datoteke dobavljača ostaje tvoj posao. Vidi [Koristi TakeoffCraft sa AI asistentom](topic:use-with-ai-assistants).

**U svim aplikacijama**

- **Jezici.** Pedeset četiri jezika ukupno; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili i uzbekistanski). Jezici osim engleskog su nacrti mašinskog prevoda dok ih izvorni govornik ne pregleda.
- **Ulazni uređaji.** {{ui:Podešavanja}} › {{ui:Globalno}} › {{ui:Ulazni uređaji}} određuje šta rade touchpad, bočna dugmad miša, olovka, 3D miš, kontroler za igre ili MIDI kontroler, za svaku aplikaciju ili za jednu. Vidi [Korišćenje touchpad-a, 3D miša ili kontrolera](common:input-devices).
- **Redovi alatki.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatki}} nudi {{ui:Prelomi}} (početak), {{ui:2 reda}} i {{ui:1 red}}; grupe koje ne staju pomeraju se u stranu. Vidi [Raspored panela](common:arrange-panels).
- **Panel problema.** Zajednički panel upozorenja i napomena sada nosi i proveru zalihe dobavljača iz gore, uz ostale provere.
- **Dodaci.** Dodaci prate tvoj spisak naloga. Vidi [Dodaci i tvoj spisak naloga](common:addons-basics).
- **Poveži svoj AI.** CadCraft Studio je središte: poveži svog asistenta jednom za svih osam aplikacija. Studio nema sopstveni AI.

### Ispravljeno u 0.8.1

- **Odeljak klasa u DWG-u.** Odeljak klasa DWG datoteke bio je pročitan kao pogrešan tip. Ovo je ispravljeno u TakeoffCraft-u i u još četiri aplikacije.
- **Studio može da menja jezik dok radi.** Ranije su Studio i njegova spakovana izdanja bila samo na engleskom. Ovo nije testirano u desktop verziji na svakoj platformi; javi nam ako se jezik ne menja.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može da upozori, a na Mac-u desnim klikom izaberi {{ui:Otvoreno}} prvi put. Verzije za prodavnice (Microsoft Store, Google Play, App Store) su na čekanju, a verzija za iPad i iPhone nije ponovo napravljena za 0.8.1.
- **Ažuriranja Studija.** Windows instalater i Linux paketi proveravaju jednom dnevno i pitaju pre instaliranja. Prenosiva zip verzija samo javlja, a macOS i APK se ne ažuriraju sami. macOS .dmg iz 0.8 prati izdanje.
- **Poveži svoj AI.** Povezivanje jednim klikom unutar Studija, hostovani konektor za AI u pregledaču, tvoj sopstveni API ključ unutar Studija i objavljen MCP paket nisu obećani u ovoj verziji.
- **Brojanje svega.** Potrebni su simboli nacrtani na isti način kao u legendi, a simbol sa zidom ili dugačkom linijom kroz njega može se propustiti. Ogledalski simboli se ne nalaze, a list bez razmere nacrtan u drugoj veličini pretražuje se u veličini legende. Proveri nalaze na prvom listu pre nego što veruješ ostatku.
- **Zaliha dobavljača.** Podaci o zalihi su aktuelni samo koliko i datoteka koju dodaš. Provera nikad ne pita dobavljača.
- **Jezici.** Traka aplikacije na tamilskom se prelama.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet). Za izdanje pre ovog, vidi [Šta je novo u 0.7](topic:whats-new-0-7).
