---
title: Novosti u verziji 0.8 i 0.8.1
summary: Prebroj ceo legendu simbola na svim otvorenim listovima jednim pokretanjem, odredi cene iz stopa tvojih ranijih poslova, proveri predmer prema zalihama i rokovima isporuke dobavljača, i nove alatke asistenta za sve tri, plus zajedničke promene verzije 0.8 i ispravku 0.8.1 za DWG datoteke.
keywords: novosti, šta je novo, beleške o izdanju, dnevnik promena, promene, 0.8, 0.8.1, verzija, nove funkcije, prebroj sve, legenda, legenda simbola, ceo skup, memorija cena, raniji poslovi, poslednji posao, tipična cena, dobavljač, zaliha, rok isporuke, zaostatak, spisak za naručivanje, manjak, panel problema, asistent, jezici, ulazni uređaji, redovi alatki, DWG
from: a04adef6
---

Ovo je šta se promenilo u verziji TakeoffCraft 0.8 (objavljena 2026-11-01) i 0.8.1 (2026-11-02), u poređenju sa verzijom 0.7. Legenda simbola sada može da se prebroji na celom skupu odjednom, novi predmer može da počne od cena tvojih ranijih poslova, a predmer može da se proveri prema zalihama dobavljača. Verzija 0.8.1 je izdanje sa ispravkama.

## Novo

### Prebroj sve u skupu

- **Okvir oko legende jednom.** {{ui:Count everything}} u traci alatki čita legendu simbola: prevuci okvir oko simbola i naziva ispisanih pored njih. Svaki simbol je naveden sa svojom slikom i nazivom, a naziv postaje naziv stavke. Ukloni oznaku sa onoga što ne želiš, zatim izaberi {{ui:Count on N sheets}}. Traka pokazuje list koji se pretražuje, {{ui:Cancel}} zaustavlja pokretanje, a stranica ostaje upotrebljiva.
- **Svi listovi u jednom pokretanju.** Svaki simbol se broji na svakom otvorenom listu. List nacrtan u drugoj razmeri pretražuje se u toj razmeri, a simboli se nalaze okrenuti pod bilo kojim pravim uglom. Sopstveni simboli legende se ne broje na njenom listu.
- **Pregled pre dodavanja bilo čega.** Svaki zbir ima vezu po listu ("E-103: 4") koja vodi na taj list. Klikni okvir na nalazu da ga izostaviš, a klikni ponovo da ga vratiš. Nivo podudaranja (50% do 100%) samo filtrira ono što je nađeno; ništa se ne pretražuje ponovo.
- **Jedan korak poništavanja.** {{ui:Add N marks}} pravi stavku brojanja za svaki simbol, sa oznakom na svakom nalazu. Naziv koji je već tvoja stavka brojanja se ponovo koristi. {{key:Ctrl+Z}} vraća sve stavke i oznake. Ono što prihvatiš takođe ide u {{ui:Learned}}.
- **Simboli pod bilo kojim uglom.** Označi {{ui:Symbols at any angle}} pre brojanja da bi se našli i simboli okrenuti pod uglom koji nije prav. Pretraga tada okreće svaki simbol na svakih 15 stepeni, a simbol koji nije okrugao može da traje do šest puta duže.
- **Šta je to.** Obično poklapanje simbola na tvojim sopstvenim listovima, bez obučenog modela, i ništa ne napušta tvoj računar. Na izmišljenom skupu od 200 listova trajalo je 9.4 sekunde od početka do kraja u Chrome-u na brzoj stonoj mašini; stvarni skupovi planova biće sporiji. Pogledaj [Prebroj sve u skupu](topic:count-everything).

### Memorija cena iz tvojih poslova

- **TakeoffCraft pamti tvoje stope.** Kada sačuvaš predmer, svaka cenjena stavka koja se koristi pamti se po nazivu i tipu: stopa materijala, stopa rada, otpad i jedinica. Čuvaju se poslednjih 12 poslova za svaki naziv. Čuva se na ovom računaru, uz biblioteku cena, nikad unutar datoteke predmera, i ništa se nigde ne šalje.
- **Počni novi predmer iz toga.** {{ui:Prices}} na traci alatki prikazuje, za svaku stavku, stope poslednjeg posla, uobičajene stope i raspon. {{ui:Use last}} ili {{ui:Use typical}} određuje cenu jedne stavke, a {{ui:Price N unpriced items from memory}} popunjava svaku stavku koja još nema cenu. Svaka upotreba je jedan korak poništavanja.
- **Raniji radovi.** {{ui:Learn from a past takeoff…}} pamti cenjene stavke sačuvanog predmera (.json).
- **Vidi, promeni, zaboravi.** {{ui:Everything remembered}} navodi svaki naziv; dugme za brisanje zaboravlja jedan, a {{ui:Clear all prices}} zaboravlja sve. Isključi {{ui:Remember my prices when I save a takeoff}} da zaustaviš. Cena po komadu nikada se ne stavlja na stavku obračunatu po stopi (ft). Pogledaj [Memorija cena iz tvojih ranijih poslova](topic:price-memory).

### Zaliha dobavljača i rokovi isporuke

- **Proveri prema spisku dobavljača.** {{ui:Supply}} na traci alatki uzima spisak zaliha dobavljača ({{ui:Add a supplier file…}}), CSV ili tabelu, i proverava šta predmer treba, uključujući otpad, prema njemu. Čuva se do pet datoteka. Ništa se ne šalje i ništa ne traži od dobavljača: ti donosiš datoteku.
- **Šta pokazuje.** Kratke stavke dolaze prve: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" ili "In stock". {{ui:Longest wait wanted (days)}} počinje sa 14.
- **Spisak za naručivanje.** {{ui:Order list (CSV)}} preuzima kratke stavke sa količinom koja nedostaje, dobavljačem i rokom isporuke.
- **Cene u biblioteku.** Ako datoteka ima cene, {{ui:Prices into the Library}} postavlja cenu materijala za svaki unos biblioteke sa istim nazivom i jedinicom. Ponovo odredi cene iz biblioteke da bi ih prebacio u predmer.
- **U panelu problema.** Manjak je upozorenje, a dugi rok je napomena, pod "Supplier stock". Možeš prihvatiti jedan uz razlog, a razlog se čuva u predmeru. Pogledaj [Proveri zalihe dobavljača i rokove isporuke](topic:supplier-stock).

### AI asistenti

- **Alatke za sve tri.** Kada su asistenti dozvoljeni u {{ui:Settings}}, asistent može da pročita legendu (`legend_open`), pokrene brojanje (`legend_count_start`, zatim `legend_count_status` i `legend_count_result`) i doda ga (`legend_count_add`, koji može prvo da prikaže pregled). Može da pročita zapamćene cene (`prices_list`) i da cenjene stavke iz njih (`prices_apply`, koji može prvo da prikaže pregled), i da pročita proveru zaliha (`supply_check`). Dodavanje datoteke dobavljača ostaje tvoj posao. Pogledaj [Koristi TakeoffCraft sa AI asistentima](topic:use-with-ai-assistants).

### U svakoj aplikaciji

- **Jezici.** Ukupno pedeset četiri jezika; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikanski, filipinski, svahili i uzbekistanski). Jezici osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} određuje šta rade tačped, bočna dugmad miša, olovka, 3D miš, kontroler za igre ili MIDI kontroler, za sve aplikacije ili za jednu. Pogledaj [Koristi tačped, 3D miš ili kontroler](common:input-devices).
- **Redovi alatki.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} nudi {{ui:Wrap}} (početak), {{ui:2 rows}} i {{ui:1 row}}; grupe koje ne stanu pomeraju se u stranu. Pogledaj [Rasporedi panele](common:arrange-panels).
- **Panel problema.** Zajednički panel upozorenja i napomena sada nosi gore navedenu proveru zaliha dobavljača, pored ostalih provera.
- **Dodaci.** Dodaci prate tvoj spisak naloga. Pogledaj [Dodaci i tvoj spisak naloga](common:addons-basics).
- **Poveži svoj AI.** CadCraft Studio je centar: poveži svog asistenta jednom za svih osam aplikacija. Studio nema sopstveni AI.

## Ispravljeno u 0.8.1

- **Odeljak klasa DWG datoteke.** Odeljak klasa u DWG datoteci bio je pročitan kao pogrešan tip. Ispravljeno je u TakeoffCraft-u i u još četiri aplikacije.
- **Studio može da promeni jezik dok radi.** Ranije su Studio i njegova spakovana izdanja bili samo na engleskom. Ovo nije testirano u desktop verziji na svim platformama; javi nam ako se jezik ne menja.

## Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može da upozori, a na Mac-u desnim klikom izaberi {{ui:Open}} prvi put. Prodavnice (Microsoft Store, Google Play, App Store) su na čekanju, a build za iPad i iPhone nije ponovo napravljen za 0.8.1.
- **Ažuriranja Studija.** Windows instalater i Linux paketi proveravaju jednom dnevno i pitaju pre instaliranja. Prenosna zip verzija samo javlja, a macOS i APK se ne ažuriraju sami. macOS .dmg za 0.8 prati izdanje.
- **Poveži svoj AI.** Povezivanje jednim klikom unutar Studija, hostovani konektor za AI u pregledaču, tvoj sopstveni API ključ unutar Studija i objavljeni MCP paket nisu obećani u ovoj verziji.
- **Prebroj sve.** Potrebni su simboli nacrtani na isti način kao u legendi, a simbol sa zidom ili dugom linijom preko sebe može da se propusti. Ogledalski simboli se ne nalaze, a list bez razmere nacrtan u drugoj veličini pretražuje se u veličini legende. Proveri nalaze na prvom listu pre nego što veruješ ostalima.
- **Zaliha dobavljača.** Podaci o zalihama su samo onoliko aktuelni koliko je aktuelna datoteka koju dodaš. Provera nikada ne traži od dobavljača.
- **Jezici.** Traka aplikacije na tamilskom prelazi preko ivice.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet). Za izdanje pre ovoga pogledaj [Novosti u verziji 0.7](topic:whats-new-0-7).
