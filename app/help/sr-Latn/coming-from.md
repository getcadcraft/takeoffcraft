---
title: Dolazak iz drugog softvera za predmer
summary: Kako navike namenskih programa za predmer i alata za označavanje PDF-ova odgovaraju programu TakeoffCraft, i razlike koje zbunjuju ljude.
keywords: prelazak, migracija, uslovi, delovi, alati za merenje, spisak oznaka, veza količine, navike predmera, razlike, uporedi
from: 12004ce5
---

Ako ste radili predmer u programu PlanSwift ili sa alatima za merenje u programu Bluebeam Revu, najveći deo programa TakeoffCraft će vam biti poznat: skup planova, razmera za svaki list, stvari koje merite i ukupan iznos sa cenom. Način na koji se delovi uklapaju je na nekim mestima drugačiji, a ta mesta su ispod.

Ako poznajete PlanSwift ili On-Screen Takeoff, izaberite stil menija {{ui:Radni sto za predmer}} u {{ui:Podešavanja}} › {{ui:TakeoffCraft}} › {{ui:Meniji, tasteri i miš}}: traka menija sa Datoteka, Uredi, Pogled, Razmera, Predmer, Stavke, Označavanje i Izvezi, iznad reda alata za predmer, a unapred podešene razmere su na traci lista. Pogledajte [Meniji, tasteri i miš](topic:menus-keys-and-mouse).

## Navike i njihovi ekvivalenti

| Navikli ste na | U programu TakeoffCraft |
|---|---|
| Otvaranje posla ili projekta koji čuva planove (PlanSwift) | Otvorite PDF-ove i datoteku `.takeoff.json` jednu pored druge. Projekat čuva samo predmer; PDF-ovi ostaju vaše zasebne datoteke. |
| Spisak oznaka sa napomenama, oblacima i isticanjima (Bluebeam) | {{ui:Označavanje}} na traci lista: napomene, oblaci i isticanja sa statusom (Otvoreno, Odgovoreno, Zatvoreno), navedeni pod **Oznake**, nacrtani u PDF-u sa oznakama. Pogledajte [Napomene, oblaci i isticanja](topic:markups). |
| Mere sačuvane kao oznake unutar PDF-a (Bluebeam) | Predmer se nalazi u datoteci `.takeoff.json`. {{ui:PDF sa oznakama}} pravi kopiju sa nacrtanim predmerom, za deljenje; {{ui:PDF sa predmerom unutra}} pravi kopiju koja nosi predmer, za ponovno otvaranje u TakeoffCraft-u. |
| Stavke predmera (PlanSwift), prilagođeni alati za merenje sačuvani u Tool Chest (Bluebeam) | **Stavke** pod {{ui:Stavke}}: naziv, unos, boja, jedinica, visina ili dubina, otpad, cene. |
| Delovi i sklopovi sa formulama (PlanSwift) | {{ui:Sklop}} stavke: komponente sa formulom koja koristi `L H A N P`. |
| Podešavanje razmere stranice ili kalibracija (oba) | Spisak {{ui:Unapred podešeno}} ili {{ui:Kalibriši}} u grupi {{ui:Razmera}}, za svaki list. {{ui:Proveri}} meri poznatu kotu. |
| Primena jedne razmere na opseg stranica | Još nije: podesite svaki list. |
| Prozori pogleda sa različitim razmerama na istom listu (Bluebeam) | Još nije: jedna razmera po listu. |
| Alat za dužinu polilinije i površinu (Bluebeam), linijski i površinski predmer (PlanSwift) | {{ui:Linijski}} ({{key:L}}) i {{ui:Površina}} ({{key:A}}). |
| Držanje tastera Shift za prave linije | {{key:Shift}} hvata korake od 45°, ista ideja. |
| Hvatanje za linije crteža | Uključeno podrazumevano: krajevi, sredine, preseci i najbliža tačka na liniji. {{key:F3}} ga isključuje, kao u CAD programima. |
| Alat za brojanje (oba) | {{ui:Prebroj}} ({{key:C}}). |
| Vizuelna pretraga simbola (Bluebeam) | {{ui:Automatsko brojanje}} ({{key:S}}): obuhvatite jedan simbol, pregledajte, dodajte. |
| Izrezi ili odbici u površinama | {{ui:Izrez}} ({{key:X}}) na izabranoj površini, i okrugli izrezi. |
| Odbici na linearnim potezima | Nacrtajte potez pravo kroz i pritisnite {{key:E}} ({{ui:Odbitak}}) za otvor. Pogledajte [Merenje linearnih poteza](topic:measure-linear). |
| Segmenti lukova u polilniji | {{ui:Luk}} ({{key:R}}): kliknite tačku na krivi, pa njen kraj. |
| Spisak oznaka sa kolonama količina (Bluebeam) | Tabela {{ui:Količine}}, {{ui:Po stavci}} ili {{ui:Po listu}}. |
| Mreža za procenu sa cenama (PlanSwift) | Ista tabela: otpad, materijal i rad po jedinici, zbirni iznosi i {{ui:Ukupno za posao}}. |
| Izvoz u Excel | {{ui:XLSX}} sa živim formulama, ili {{ui:CSV}}. |
| Taster Esc za zaustavljanje alata | {{key:Esc}} otkazuje i vraća na {{ui:Izaberi}}. |
| Desni klik za završetak | I ovde desni klik završava potez ili zatvara površinu. Nema kontekstualnog menija na desni klik. |

## Razlike koje zbunjuju

**Predmer nije unutar vašeg PDF-a.** Ništa što uradite ne menja vaše PDF-ove. Sačuvajte datoteku `.takeoff.json` i čuvajte je uz crteže. Kada nekome pošaljete PDF sa oznakama, ne šaljete mu predmer koji može da menja: pošaljite datoteku projekta i originalne PDF-ove, ili [PDF sa predmerom unutra](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF-ovi se upoređuju po sadržaju, a ne po nazivu.** Revidirani list sačuvan preko starog naziva datoteke je za TakeoffCraft nova datoteka, bez razmere i bez oznaka. Stare oznake ostaju na staroj verziji i nastavljaju da se broje. Pogledajte [Sačuvajte i ponovo otvorite predmer](topic:save-and-reopen#when-a-pdf-has-changed).

**Oznake bez razmere se izostavljaju, ne broje se kao nula.** Ako list nema razmeru, njegovi potezi i površine se ne broje, a tabela piše „Nepotpuno”. U mnogim programima biste videli samo 0. Pogledajte [Podesite razmeru](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Nema pogađanja veličine stranice.** Unapred podešene vrednosti pretpostavljaju da je PDF odštampan u punoj veličini. PDF u pola veličine ili „prilagođen stranici” treba {{ui:Kalibriši}}. Uvek koristite {{ui:Proveri}}.

**Jedna stavka, jedna glavna vrsta, još ako zatražite.** Stavka je linijska, površinska ili brojačka, a njen tip se zaključava kada ima oznake. Uslov koji daje i površinu i njen obim je površinska stavka: njen obim je promenljiva `P`. Zid sa i dužinom i površinom je linijska stavka sa visinom. Za stavku sa više uslova, kao što je soba sa podom, bazom i vratima, označite ostale vrste pod **Izmeri i**: svaka se obračunava u svom redu. Pogledajte [Jedna stavka, više vrsta oznaka](topic:create-items#one-item-several-kinds-of-marks).

**Formule rade nad zbirovima.** Formule sklopa koriste zbirove stavke na svim listovima, a ne svaki potez posebno. `N` (broj poteza ili površina) služi za dodatke po potezu, kao jedan dodatni stub po zidu.

**Obim uključuje izreze.** `P` površine dodaje ivice njenih rupa. Pogledajte [Merenje površina sa izrezima](topic:measure-areas#read-the-area).

**Prevlačenje pomera pogled.** Prevlačenje levim tasterom miša po listu pomera pogled u svakom alatu osim u {{ui:Automatsko brojanje}}. Nikada ne morate da prelazite na alat za pomeranje. Točkić zumira; ne pomera stranicu.

**Kopija za oporavak, a ne oblak.** TakeoffCraft čuva kopiju vašeg rada u ovom pregledaču i nudi je nazad posle pada ([Ako se kartica ili pregledač zaustavi](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), ali predmer sami sačuvate: {{key:Mod+S}}. Čuvanje u oblaku još nije dostupno.

**Sve je u pregledaču.** Ništa se ne instalira, a planovi se nikada ne otpremaju. Za desktop aplikaciju, TakeoffCraft dolazi u CadCraft Studio, uz ostalih sedam aplikacija.

## Još nije ovde

Regioni razmere po listu još nisu napravljeni. Pogledajte [Šta još nije izgrađeno](topic:not-built-yet) za pun spisak i šta raditi umesto toga.
