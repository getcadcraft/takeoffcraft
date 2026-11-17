---
title: Šta još nije izgrađeno
summary: Funkcije predmjera koje ova verzija nema i šta raditi umjesto toga danas.
keywords: ograničenja, nedostaje, još nije, plan razvoja, planirano, zaobilazno rješenje, po nizu, oblak, desktop
from: 94ff90d0
---

TakeoffCraft je u razvoju. Ovo je spisak onoga što trenutna verzija ne radi i kako svejedno obaviti posao.

## Mjerenje

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Umetanje tačke u sredinu niza ili konture | Obrišite oznaku i ponovo je nacrtajte. |
| Selekcija okvirom (prozorom) | {{key:Shift}} + klik na svaku oznaku, ili {{key:Mod+A}} za sve oznake na listu. Vidi [Kopiranje, lijepljenje i dupliranje oznaka](topic:copy-paste). |
| Rotiranje, zrcaljenje ili promjena razmjere zalijepljene kopije | Zalijepite na list u istoj razmjeri i orijentaciji; ostalo nacrtajte ručno. |
| Čitanje razmjere sa skeniranog lista ili sa grafičke razmjerne linije | Odaberite unaprijed zadanu ili kalibrirajte po dužini te linije. |
| Više od jedne razmjere po listu (područja detalja, uvećani planovi) | Izmjerite dio u razmjeri lista, a detalj uzmite na njegovom uvećanom listu ako ga set ima. |

## Stavke i cijene

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Formule sklopa koje koriste druge vrste oznaka stavke (vrata sobne stavke u formulama njenog sprata) | Formule koriste ukupne vrijednosti glavne vrste; ostale vrste cijenite u njihovim vlastitim redovima. |
| Formule sklopa izračunate niz po niz | Formule koriste ukupne vrijednosti stavke; koristite `N` za dodatke po nizu. |
| Formule koje koriste količine druge stavke | Ponovite mjerenje u toj stavci, ili izračunajte u tabelarnom izvozu. |
| Ekipe na komponentama sklopa, ili radni dan različit od 8 sati | Dodijelite ekipu stavci; radne dane druge dužine čitajte kao ekipa-sati ÷ vaš dan. |
| Označavanja osim bilješki, oblaka i isticanja (strelice, kote, pečati), ili odgovori na bilješku | Upišite to u tekst bilješke; mijenjajte njen status kako se stvar rješava. |
| Biblioteka cijena koju dijeli tim ili koja se čuva uz vaš račun | Biblioteka se čuva u ovom pregledniku: izvezite je kao CSV i uvezite na drugom računaru. |
| Paketi za struku koje pregledaju iskusni procjenitelji | Svaki paket je polazna tačka: provjerite njegove pretpostavke prema svom poslu i svojim proizvodima prije cijenjenja. Vidi [Paketi za struku](topic:trade-packs). |
| Cijene u paketima za struku | Paketi donose samo sklopove: postavite svoje stope ili uvezite svoj cjenovnik kao CSV. |
| Preimenovanje predmjera | Naziv dolazi iz prvog PDF-a; preimenujte preuzete datoteke. |
| Ručno imenovanje listova | Listovi se imenuju prema oznakama stranica u PDF-u; tražite po nazivu datoteke i stranici. |

## Crteži (DWG i DXF)

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Tabele stilova ispisa, dodjele olovaka i CTB datoteke na listovima crteža | Crtež se prikazuje crno, ili u bojama potamnjenim za papir; debljine linija dolaze iz samog crteža. |
| Otvaranje binarnog DXF-a ili DWG-a starijeg od AutoCAD 2000 | Sačuvajte ga kao ASCII DXF ili kao noviji DWG. |
| Pronalaženje povezanog crteža (xref) po fascikli u kojoj se nalazi | Otvorite i povezani crtež uz glavni: nalazi se po nazivu datoteke među otvorenim datotekama. |
| Mjerenje 3D polilinija, mreža, tijela i regija | Brojite ih po sloju i tipu, ili mjerite tlocrt alatima Linearno i Površina. |
| Tekst u označenom PDF-u iz crteža na pismima koja nisu latinična | Znakovi koje Helvetica nema prikazuju se kao "?" u označenom PDF-u; crtež na ekranu nije promijenjen. |
| Prebacivanje crteža u drugu aplikaciju sa trake lista | Otvorite istu datoteku u toj aplikaciji. |
| Crtež koji nosi predmjer unutar sebe, kao što to za PDF-ove radi {{ui:PDF with the takeoff inside}} | {{ui:Save takeoff}}: `.takeoff.json` se ponovo otvara na istom crtežu, pronađen po svom sadržaju. |
| PDF podloge, slike i OLE objekti postavljeni u crtež, za crtanje ili brojanje | Slike se prikazuju samo kao okvir. Otvorite samu PDF podlogu kao list. |

## Auto brojanje

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Pronalaženje simbola na listu bez razmjere nacrtane u drugoj veličini | Dajte listu njegovu razmjeru, ili ga pretražite okvirom nacrtanim na tom mjestu. |
| Pronalaženje zrcaljenih simbola | Brojite ih ručno, ili ponovo pretražite okvirom oko zrcaljenog simbola. |

## Datoteke i dijeljenje

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Jedan PDF koji i prikazuje oznake i nosi predmjer | {{ui:Marked PDF}} za ljude koji treba da vide oznake; {{ui:PDF with the takeoff inside}} za ponovno otvaranje u programu TakeoffCraft. |
| CSV količina po listu ili oznaka | Koristite {{ui:XLSX}}: njegovi listovi Po listu i Oznake ih sadrže. |
| Čuvanje u oblaku | Još nije dostupno. Sačuvajte projektne datoteke na svoj računar i napravite njihovu rezervnu kopiju. |
| Zasebna desktop aplikacija TakeoffCraft | Od verzije 0.5 desktop aplikacija je CadCraft Studio, sa svih osam aplikacija u jednoj instalaciji. TakeoffCraft radi i u pregledniku. |

## Ekran i unos

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Meni desnim klikom (ili dugim pritiskom) | Koristite alatnu traku, panele i tipkovnicu. Dugi pritisak završava niz ili konturu. |
| Rotiranje pogleda | Stranice koje su rotirane u PDF-u već se prikazuju uspravno. |

## 3D prikaz

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Crtanje ili uređivanje oznaka u 3D | Vratite se na list ({{key:3}}) za crtanje; selekcija i brisanje rade i u 3D. |
| Poravnavanje naslaganih spratova ucrtanih na različitim mjestima na stranicama | Slažite spratove ucrtane na isti način; ostale provjerite list po list. |
| Brojanje stubova dimenzija kao brojani objekat | Svi stubovi na listu su iste veličine; oni označavaju mjesto brojanja, a ne šta je to. |

## Ponude

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Dopune paketa koji je već poslan, pisma o dodjeli, list obima koji svaki ponuđač potpisuje | Pošaljite novi paket, a pismo o dodjeli napišite sami. [Slanje paketa za ponude](topic:bid-invitations) pokriva ono što je izgrađeno. |
| Slanje pozivnica za ponudu sa bilo kojeg računa: dok se testira, pošta vanjskim ponuđačima je isključena, osim za račune koje je tim CadCraft omogućio | Preuzmite {{ui:Scope CSV}}, pošaljite ga e-poštom sami i upišite ponude. |
| Slanje paketa za ponude iz prozora Studio | Šaljite iz programa TakeoffCraft u pregledniku. |
| Ponovno određivanje cijene područja alternative sa odabranom ponudom | Alternative i međuzbirovi područja ponuda koriste vaše vlastite cijene; podesite alternativu ručno. |
| Automatski podsjetnici prije isteka datuma osiguranja ili licence podizvođača | Datum se označava na stranici Podizvođači kad prođe ili kad je u roku od 30 dana; provjerite ga kad pozivate. |

## Paneli

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Pomjeranje tabele {{ui:Quantities}} | Pomjeraju se samo paneli {{ui:Sheets}} i {{ui:Items}}. Vidi [Raspored panela](common:arrange-panels). |

## Tabele

Radna knjiga XLSX je provjerena u programu LibreOffice Calc, koji je ponovo izračunao svaki zbir do istog centa kao TakeoffCraft. Još nije otvorena u programu Excel. Ako tabelarni program prikaže nešto neočekivano, CSV izvoz sadrži istu procjenu kao obične vrijednosti.
