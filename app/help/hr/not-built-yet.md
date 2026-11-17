---
title: "Što još nije izrađeno"
summary: "Mogućnosti predmjera koje ova verzija nema i što umjesto toga učiniti danas."
keywords: "ograničenja, nedostaje, još nije, plan razvoja, planirano, zaobilazno rješenje, po dionici, oblak, radna površina"
from: 94ff90d0
---

TakeoffCraft je u razvoju. Ovo je popis onoga što trenutna verzija ne radi i kako svejedno obaviti posao.

## Mjerenje

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Umetanje točke usred dionice ili obrisa | Izbrišite oznaku i ponovno je nacrtajte. |
| Odabir okvirom (prozorom) | {{key:Shift}} + klik na svaku oznaku ili {{key:Mod+A}} za sve oznake na listu. Vidi [Kopiranje, lijepljenje i dupliciranje oznaka](topic:copy-paste). |
| Zakretanje, zrcaljenje ili promjena mjerila zalijepljene kopije | Zalijepite na list u istom mjerilu i istoj orijentaciji; ostalo nacrtajte ručno. |
| Očitavanje mjerila sa skeniranog lista ili iz grafičke mjerne ljestvice | Odaberite predložak ili kalibrirajte prema duljini ljestvice. |
| Više mjerila na jednom listu (detaljni prikazi, uvećani nacrti) | Izmjerite dio u mjerilu lista, a detalj predmjerite na njegovom uvećanom listu ako ga skup ima. |

## Stavke i cijene

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Formule sklopa koje koriste druge vrste oznaka stavke (vrata stavke prostorije u formulama njezine etaže) | Formule koriste ukupne vrijednosti glavne vrste; ostale vrste cijenite u zasebnim redcima. |
| Formule sklopa izračunate dionicu po dionicu | Formule koriste ukupne vrijednosti stavke; za dodatke po dionici koristite `N`. |
| Formule koje koriste količine druge stavke | Ponovite mjerenje u toj stavci ili izračunajte u izvozu za tablični program. |
| Radne skupine na sastavnim dijelovima sklopa ili radni dan različit od 8 sati | Dodijelite skupinu stavci; za drugu duljinu radnog dana radne dane računajte kao radne sate ÷ vaš radni dan. |
| Oznake osim bilješki, revizijskih oblaka i isticanja (strelice, kote, pečati) ili odgovori na bilješku | Napišite to u tekst bilješke i mijenjajte njezin status kako se rješava. |
| Knjižnica cijena koju dijeli tim ili koja se čuva uz vaš račun | Knjižnica se čuva u ovom pregledniku: izvezite je kao CSV i uvezite na drugom računalu. |
| Paketi struke koje su pregledali praktični procjenitelji | Svaki paket je polazna točka: provjerite njegove pretpostavke prema vašem poslu i vašim proizvodima prije nego što cijenite. Vidi [Paketi struke](topic:trade-packs). |
| Cijene u paketima struke | Paketi donose samo sklopove: postavite svoje stope ili uvezite svoj cjenik kao CSV. |
| Preimenovanje predmjera | Naziv dolazi iz prvog PDF-a; preimenujte preuzete datoteke. |
| Ručno imenovanje listova | Listovi se imenuju prema oznakama stranica u PDF-u; tražite po nazivu datoteke i stranici. |

## Crteži (DWG i DXF)

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Tablice stilova ispisa, dodjele olovaka i CTB datoteke na listovima crteža | Crtež je crn, ili su mu boje potamnjene za papir; debljine linija dolaze iz crteža. |
| Otvaranje binarnog DXF-a ili DWG-a starijeg od AutoCAD 2000 | Spremite ga kao ASCII DXF ili kao noviji DWG. |
| Pronalaženje vanjske reference (Xref) prema mapi u kojoj se nalazi | Otvorite i datoteku vezanog crteža uz glavni: pronalazi se po nazivu datoteke među otvorenim datotekama. |
| Mjerenje 3D polilinija, mreža, punih tijela i regija | Prebrojite ih po sloju i vrsti ili izmjerite tlocrtni prikaz alatima Linearno i Površina. |
| Tekst u označenom PDF-u iz crteža pisan nelatiničnim pismom | Znakove koje Helvetica nema prikazuju se kao „?“ u označenom PDF-u; crtež na zaslonu nije promijenjen. |
| Predaja crteža drugoj aplikaciji iz trake lista | Otvorite istu datoteku u toj aplikaciji. |
| Crtež koji u sebi nosi predmjer, kao što to za PDF-ove radi {{ui:PDF s predmjerom unutra}} | {{ui:Spremi predmjer}}: `.takeoff.json` se ponovno otvara na istom crtežu, pronađen po sadržaju. |
| Podloge PDF, slike i OLE objekti umetnuti u crtež, uključujući njihovo crtanje ili brojanje | Slike se prikazuju samo kao okvir. Otvorite samu PDF podlogu kao list. |

## Autobrojanje

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Traženje simbola na listu bez mjerila, nacrtanih u drugoj veličini | Zadajte listu mjerilo ili ga pretražite okvirom nacrtanim na tom mjestu. |
| Traženje zrcaljenih simbola | Prebrojite ih ručno ili ponovno pretražite okvirom oko jednog zrcaljenog. |

## Datoteke i dijeljenje

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Jedan PDF koji prikazuje oznake i nosi predmjer | {{ui:Označeni PDF}} za pregled oznaka; {{ui:PDF s predmjerom unutra}} za ponovno otvaranje u TakeoffCraftu. |
| CSV količina po listu ili oznaka | Koristite {{ui:XLSX}}: njegovi radni listovi Po listu i Oznake to sadrže. |
| Spremanje u oblak | Još nije dostupno. Spremite datoteke projekta na računalo i napravite sigurnosnu kopiju. |
| Zasebna desktop aplikacija TakeoffCraft | Od verzije 0.5 desktop aplikacija je CadCraft Studio, sa svih osam aplikacija u jednoj instalaciji. TakeoffCraft radi i u pregledniku. |

## Zaslon i unos

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Izbornik desnim klikom (ili dugim pritiskom) | Koristite alatnu traku, ploče i tipke. Dugi pritisak završava dionicu ili obris. |
| Zakretanje prikaza | Stranice zakrenute u PDF-u već se prikazuju uspravno. |

## Prikaz 3D

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Crtanje ili uređivanje oznaka u 3D | Vratite se na list ({{key:3}}) za crtanje; odabir i brisanje rade i u 3D. |
| Poravnavanje etaža složenih jedna na drugu, a ucrtanih na različitim mjestima na stranicama | Slažite etaže ucrtane na isti način; ostale provjerite list po list. |
| Brojanje stupića veličine kao brojeni objekt | Svaki stupić na listu je iste veličine; označava mjesto brojanja, a ne što je. |

## Ponude

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Dopune paketa koji je već poslan, pisma o dodjeli i list opsega koji svaki ponuditelj potpisuje | Pošaljite novi paket i dodjelu napišite sami. [Slanje paketa za ponude](topic:bid-invitations) opisuje što je izrađeno. |
| Slanje pozivnica za ponudu s bilo kojeg računa: dok je u testiranju, pošta vanjskim ponuditeljima isključena je osim za račune koje je tim CadCraft omogućio | Preuzmite {{ui:CSV opsega}}, pošaljite ga sami e-poštom i upišite ponude. |
| Slanje paketa za ponude iz prozora Studio | Šaljite iz TakeoffCrafta u pregledniku. |
| Ponovno cijenjenje područja ponude alternative prema odabranoj ponudi | Alternative i međuzbrojevi područja ponude koriste vaše cijene; alternativu prilagodite ručno. |
| Automatski podsjetnici prije isteka datuma osiguranja ili licence podizvođača | Datum se označava na stranici Podizvođači kad prođe ili je unutar 30 dana; provjerite ga kad pozivate. |

## Ploče

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Pomicanje tablice {{ui:Količine}} | Pomiču se samo ploče {{ui:Listovi}} i {{ui:Stavke}}. Vidi [Raspored ploča](common:arrange-panels). |

## Tablični proračuni

Radna knjiga XLSX provjerena je u LibreOffice Calc, koji je svaki ukupni iznos preračunao na isti cent kao TakeoffCraft. U programu Excel još nije otvorena. Ako tablični program prikaže nešto neočekivano, izvoz CSV sadrži isti predmjer kao obične vrijednosti.
