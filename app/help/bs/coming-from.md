---
title: Dolazak iz drugog softvera za predmjer
summary: Kako navike namjenskih programa za predmjer i alata za označavanje PDF-a odgovaraju TakeoffCraft-u i razlike zbog kojih se ljudi spotaknu.
keywords: prebacivanje, migracija, uslovi, dijelovi, alati za mjerenje, lista označavanja, veza s količinom, navike predmjera, razlike, uporedi
from: 12004ce5
---

Ako ste radili predmjer u PlanSwift-u ili s alatima za mjerenje u Bluebeam Revu, većina TakeoffCraft-a će vam biti poznata: skup planova, razmjera po listu, stvari koje mjerite i ocijenjen ukupan iznos. Način na koji se dijelovi uklapaju je na nekim mjestima drugačiji, a ta mjesta su navedena ispod.

Ako poznajete PlanSwift ili On-Screen Takeoff, odaberite stil menija {{ui:Radni sto za predmjer}} u {{ui:Postavke}} › {{ui:TakeoffCraft}} › {{ui:Meniji, tipke i miš}}: traka menija s File, Edit, View, Scale, Takeoff, Items, Markup i Export iznad reda alata za predmjer, a unaprijed zadane razmjere su na traci lista. Vidi [Meniji, tipke i miš](topic:menus-keys-and-mouse).

## Navike i njihovi ekvivalenti

| Na šta ste navikli | U TakeoffCraft-u |
|---|---|
| Otvaranje posla ili projekta koji čuva planove (PlanSwift) | Otvorite PDF-ove i datoteku `.takeoff.json` jednu uz drugu. Projekt čuva samo predmjer; PDF-ovi ostaju vaše zasebne datoteke. |
| Lista označavanja s napomenama, oblacima i isticanjima (Bluebeam) | {{ui:Označavanje}} na traci lista: napomene, oblaci i isticanja sa statusom (Otvoreno, Odgovoreno, Zatvoreno), navedeni pod **Označavanja** i ucrtani u označeni PDF. Vidi [Napomene, oblaci i isticanja](topic:markups). |
| Mjere sačuvane kao označavanja unutar PDF-a (Bluebeam) | Predmjer se nalazi u datoteci `.takeoff.json`. {{ui:Označeni PDF}} piše kopiju s ucrtanim predmjerom, za dijeljenje; {{ui:PDF sa predmjerom unutra}} piše kopiju koja nosi predmjer, za ponovno otvaranje u TakeoffCraft-u. |
| Stavke predmjera (PlanSwift), prilagođeni alati za mjerenje sačuvani u Tool Chest-u (Bluebeam) | **Stavke** pod {{ui:Stavke}}: naziv, unos, boja, jedinica, visina ili dubina, otpad, stope. |
| Dijelovi i sklopovi s formulama (PlanSwift) | {{ui:Sklop}} stavke: komponente s formulom koja koristi `L H A N P`. |
| Postavljanje razmjere stranice ili kalibracija (oboje) | Lista {{ui:Unaprijed zadana}} ili {{ui:Kalibriraj}} u grupi {{ui:Razmjera}}, po listu. {{ui:Provjeri}} mjeri poznatu kotu. |
| Primjena jedne razmjere na raspon stranica | Još nije: postavite svaki list posebno. |
| Viewport-ovi s različitim razmjerama na jednom listu (Bluebeam) | Još nije: jedna razmjera po listu. |
| Alati za duljinu poligona i površinu (Bluebeam), linijski i površinski predmjer (PlanSwift) | {{ui:Linijski}} ({{key:L}}) i {{ui:Površina}} ({{key:A}}). |
| Držanje tipke Shift za ravne linije | {{key:Shift}} hvata korake od 45°, ista ideja. |
| Hvatanje za linije crteža | Uključeno podrazumijevano: krajevi, sredine, presjeci i najbliža tačka na liniji, a isključuje se s {{key:F3}}, kao u CAD programima. |
| Alat za brojanje (oboje) | {{ui:Brojanje}} ({{key:C}}). |
| Vizuelna pretraga simbola (Bluebeam) | {{ui:Auto brojanje}} ({{key:S}}): obuhvatite jedan simbol, pregledajte, dodajte. |
| Izrezi ili odbici u površinama | {{ui:Izrez}} ({{key:X}}) na odabranoj površini, i okrugli izrezi. |
| Odbici na linijskim dionicama | Nacrtajte dionicu ravno kroz otvor i pritisnite {{key:E}} ({{ui:Odbitak}}) za otvor. Vidi [Mjerenje linijskih dionica](topic:measure-linear). |
| Lučni segmenti u polilniji | {{ui:Luk}} ({{key:R}}): kliknite tačku na krivoj, pa njen kraj. |
| Lista označavanja s kolonama količina (Bluebeam) | Tabela {{ui:Količine}}, {{ui:Po stavci}} ili {{ui:Po listu}}. |
| Mreža procjene s cijenama (PlanSwift) | Ista tabela: otpad, materijal i rad po jedinici, zbirni iznosi, {{ui:Ukupno za posao}}. |
| Izvoz u Excel | {{ui:XLSX}} sa živim formulama, ili {{ui:CSV}}. |
| Escape za zaustavljanje alata | {{key:Esc}} otkazuje i vraća na {{ui:Odaberi}}. |
| Desni klik za završetak | I ovdje desni klik završava dionicu ili zatvara površinu. Nema kontekstualnog menija desnim klikom. |

## Razlike zbog kojih se ljudi spotaknu

**Predmjer nije unutar vašeg PDF-a.** Ništa što uradite ne mijenja vaše PDF-ove. Sačuvajte datoteku `.takeoff.json` i čuvajte je uz crteže. Slanje označenog PDF-a nekome ne šalje i uređivi predmjer: pošaljite datoteku projekta i originalne PDF-ove, ili [PDF sa predmjerom unutra](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF-ovi se uparuju prema sadržaju, a ne prema nazivu.** Revidirani list snimljen preko starog naziva datoteke je nova datoteka za TakeoffCraft, bez razmjere i bez oznaka. Vaše stare oznake ostaju na staroj verziji i i dalje se broje. Vidi [Snimanje i ponovno otvaranje predmjera](topic:save-and-reopen#when-a-pdf-has-changed).

**Oznake bez razmjere se isključuju, ne broje se kao nula.** Ako list nema razmjeru, njegove dionice i površine se ne broje, a tabela piše „Nepotpuno”. U mnogim programima biste vidjeli 0. Vidi [Postavljanje razmjere](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Nema nagađanja veličine stranice.** Unaprijed zadane razmjere pretpostavljaju da je PDF štampan u punoj veličini. PDF umanjen na pola ili „prilagođen stranici” treba {{ui:Kalibriraj}}. Uvijek koristite {{ui:Provjeri}}.

**Jedna stavka, jedan glavni tip, više ako zatražite.** Stavka je linijska, površinska ili brojana, a njen tip se zaključava kad dobije oznake. Uslov koji daje i površinu i njen obim je površinska stavka: njen obim je varijabla `P`. Zid s dužinom i površinom je linijska stavka s visinom. Za stavku s više uslova, kao što je soba s podom, osnovom i vratima, označite ostale vrste pod **Također izmjeri**: svaka se cijeni u svom redu. Vidi [Jedna stavka, više vrsta oznaka](topic:create-items#one-item-several-kinds-of-marks).

**Formule rade nad zbirovima.** Formule sklopa koriste zbirove stavke kroz sve listove, a ne svaku dionicu posebno. `N` (broj dionica ili površina) služi za dodatke po dionici, kao jedan dodatni stub po zidu.

**Obim uključuje izreze.** `P` površine dodaje ivice njenih rupa. Vidi [Mjerenje površina s izrezima](topic:measure-areas#read-the-area).

**Prevlačenje pomjera pogled.** Prevlačenje lijevim tasterom miša po listu pomjera pogled, u svakom alatu osim {{ui:Auto brojanje}}. Nikad ne morate prelaziti na alat za pomjeranje. Točkić zumira; ne pomjera stranicu.

**Kopija za oporavak, a ne oblak.** TakeoffCraft čuva kopiju vašeg rada u ovom pregledaču i nudi je nazad nakon pada ([Ako se kartica ili pregledač zaustavi](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), ali predmjer treba sami sačuvati: {{key:Mod+S}}. Snimanje u oblak još nije dostupno.

**Sve je u pregledaču.** Ništa se ne instalira, a planovi se nikad ne učitavaju na server. Za desktop aplikaciju, TakeoffCraft dolazi u CadCraft Studio, uz ostalih sedam aplikacija.

## Još nije dostupno

Regije razmjera po listu još nisu izgrađene. Vidi [Šta još nije izgrađeno](topic:not-built-yet) za cijeli spisak i šta raditi umjesto toga.
