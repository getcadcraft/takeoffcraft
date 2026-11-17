---
title: Dolazak iz drugog softvera za predmjer
summary: Kako se navike namjenskih programa za predmjer i alata za označavanje PDF-ova preslikavaju u TakeoffCraft i koje razlike zbunjuju.
keywords: prebacivanje, migracija, uvjeti, dijelovi, alati za mjerenje, popis markupa, veza s količinom, navike predmjera, razlike, usporedi
from: 12004ce5
---

Ako ste predmjer radili u PlanSwiftu ili s alatima za mjerenje u Bluebeam Revuu, većina TakeoffCrafta bit će vam poznata: skup nacrta, mjerilo za svaki list, stvari koje mjerite i ukupno s cijenama. Način na koji se dijelovi povezuju u nekim je mjestima drugačiji, a ta mjesta su u nastavku.

Ako poznajete PlanSwift ili On-Screen Takeoff, odaberite stil izbornika {{ui:Stol za predmjer}} u {{ui:Postavke}} › {{ui:TakeoffCraft}} › {{ui:Izbornici, tipke i miš}}: traka izbornika s Datoteka, Uređivanje, Prikaz, Mjerilo, Predmjer, Stavke, Markup i Izvoz iznad retka alata za predmjer, a s predlošcima mjerila na traci lista. Pogledajte [Izbornici, tipke i miš](topic:menus-keys-and-mouse).

## Preslikane navike

| Na što ste navikli | U TakeoffCraftu |
|---|---|
| Otvaranje posla ili projekta u kojem su pohranjeni nacrti (PlanSwift) | Otvorite PDF-ove i datoteku `.takeoff.json` jednu uz drugu. Projekt pohranjuje samo predmjer; PDF-ovi ostaju vaše vlastite datoteke. |
| Popis markupa s bilješkama, oblačićima i isticanjima (Bluebeam) | {{ui:Markup}} na traci lista: bilješke, oblačići i isticanja sa statusom (Otvoreno, Odgovoreno, Zatvoreno), navedeni pod **Markupi** i nacrtani u označenom PDF-u. Pogledajte [Bilješke, oblačići i isticanja](topic:markups). |
| Mjerenja spremljena kao markupi unutar PDF-a (Bluebeam) | Predmjer se nalazi u datoteci `.takeoff.json`. {{ui:Označeni PDF}} zapisuje kopiju s nacrtanim predmjerom, za dijeljenje; {{ui:PDF s predmjerom unutra}} zapisuje kopiju koja sadrži predmjer, za ponovno otvaranje u TakeoffCraftu. |
| Stavke predmjera (PlanSwift), prilagođeni alati za mjerenje spremljeni u Tool Chest (Bluebeam) | **Stavke** pod {{ui:Stavke}}: naziv, vrsta, boja, jedinica, visina ili dubina, gubitak, cijene. |
| Dijelovi i sklopovi s formulama (PlanSwift) | {{ui:Sklop}} stavke: komponente s formulom koja koristi `L H A N P`. |
| Postavljanje mjerila stranice ili kalibracija (oboje) | Popis {{ui:Predložak}} ili {{ui:Kalibriraj}} u grupi {{ui:Mjerilo}}, za svaki list. {{ui:Provjeri}} mjeri poznatu dimenziju. |
| Primjena jednog mjerila na raspon stranica | Još nije: postavite svaki list. |
| Viewporti s različitim mjerilima na jednom listu (Bluebeam) | Još nije: jedno mjerilo po listu. |
| Alati za duljinu polilinije i površinu (Bluebeam), linearni i površinski predmjer (PlanSwift) | {{ui:Linearno}} ({{key:L}}) i {{ui:Površina}} ({{key:A}}). |
| Držanje tipke Shift za ravne linije | {{key:Shift}} hvata na korake od 45°, ista ideja. |
| Hvatanje na linije crteža | Uključeno prema zadanim postavkama: krajnje točke, polovišta, sjecišta i najbliža točka na liniji, s {{key:F3}} za isključivanje, kao u CAD programima. |
| Alat za brojanje (oba) | {{ui:Broji}} ({{key:C}}). |
| Vizualno traženje simbola (Bluebeam) | {{ui:Autobrojanje}} ({{key:S}}): označite jedan simbol, pregledajte, dodajte. |
| Otvori ili odbici u površinama | {{ui:Otvor}} ({{key:X}}) na odabranoj površini, i okrugli otvori. |
| Odbici na linearnim dionicama | Nacrtajte dionicu ravno kroz otvor i pritisnite {{key:E}} ({{ui:Odbitak}}) za otvor. Pogledajte [Mjerenje linearnih dionica](topic:measure-linear). |
| Lučni segmenti u polilinijama | {{ui:Luk}} ({{key:R}}): kliknite točku na krivulji, zatim njezin kraj. |
| Popis markupa sa stupcima količine (Bluebeam) | Tablica {{ui:Količine}}, {{ui:Po stavci}} ili {{ui:Po listu}}. |
| Tablica za procjenu s cijenama (PlanSwift) | Ista tablica: gubitak, materijal i rad po jedinici, zbrojeni iznosi, {{ui:Ukupno za posao}}. |
| Izvoz u Excel | {{ui:XLSX}} s živim formulama, ili {{ui:CSV}}. |
| Esc za zaustavljanje alata | {{key:Esc}} odustaje i vraća na {{ui:Odaberi}}. |
| Desni klik za završetak | I ovdje desni klik završava dionicu ili zatvara površinu. Nema izbornika s desnim klikom. |

## Razlike koje zbunjuju korisnike

**Predmjer nije unutar vašeg PDF-a.** Ništa što radite ne mijenja vaše PDF-ove. Spremite datoteku `.takeoff.json` i čuvajte je uz crteže. Slanje označenog PDF-a nekome ne šalje uređivi predmjer: pošaljite datoteku projekta i izvorne PDF-ove, ili [PDF s predmjerom unutra](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF-ovi se prepoznaju prema sadržaju, a ne prema nazivu.** Revidirani list spremljen preko starog naziva datoteke za TakeoffCraft je nova datoteka, bez mjerila i oznaka. Vaše stare oznake ostaju na staroj verziji i nastavljaju se brojati. Pogledajte [Spremanje i ponovno otvaranje predmjera](topic:save-and-reopen#when-a-pdf-has-changed).

**Oznake bez mjerila isključuju se, a ne broje se kao nula.** Ako list nema mjerilo, njegove dionice i površine se ne broje, a tablica kaže „Nepotpuno“. U mnogim programima vidjeli biste samo 0. Pogledajte [Postavljanje mjerila](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Nema nagađanja veličine stranice.** Predlošci pretpostavljaju da je PDF ispisan u punoj veličini. PDF u pola veličine ili „prilagođen stranici“ treba {{ui:Kalibriraj}}. Uvijek koristite {{ui:Provjeri}}.

**Jedna stavka, jedna glavna vrsta, više ako zatražite.** Stavka je linearna, površinska ili brojna, a njezina vrsta se zaključava kad ima oznake. Uvjet koji daje i površinu i njezin opseg je površinska stavka: njezin opseg je varijabla `P`. Zid s duljinom i površinom je linearna stavka s visinom. Za stavku s više uvjeta, poput sobe s podom, podnožjem i vratima, označite ostale vrste pod {{ui:Mjeri i}}: svaka se cijeni u svom retku. Pogledajte [Jedna stavka, više vrsta oznaka](topic:create-items#one-item-several-kinds-of-marks).

**Formule se računaju iz zbrojeva.** Formule sklopa koriste zbrojeve stavke po svim listovima, a ne pojedinu dionicu zasebno. `N` (broj dionica ili površina) služi za dodatke po dionici, poput jednog dodatnog stupa po zidu.

**Opseg uključuje otvore.** `P` površine dodaje rubove njezinih otvora. Pogledajte [Mjerenje površina s otvorima](topic:measure-areas#read-the-area).

**Povlačenje pomiče prikaz.** Povlačenje lijevom tipkom miša po listu pomiče prikaz, u svakom alatu osim {{ui:Autobrojanje}}. Nikad ne morate prelaziti na alat za pomicanje. Kotačić zumira; ne pomiče sadržaj.

**Kopija za oporavak, a ne oblak.** TakeoffCraft čuva kopiju vašeg rada u ovom pregledniku i nudi je nakon rušenja ([Ako se kartica ili preglednik zaustave](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), ali predmjer spremate sami: {{key:Mod+S}}. Spremanje u oblak još nije dostupno.

**Sve je u pregledniku.** Ništa se ne instalira, a nacrti se nikad ne učitavaju. Za aplikaciju za radnu površinu TakeoffCraft dolazi u CadCraft Studiju, uz ostalih sedam aplikacija.

## Još nije ovdje

Područja mjerila po listu još nisu izrađena. Pogledajte [Što još nije izrađeno](topic:not-built-yet) za cijeli popis i što umjesto toga učiniti.
