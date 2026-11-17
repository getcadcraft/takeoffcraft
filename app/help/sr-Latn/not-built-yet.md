---
title: Šta još nije izgrađeno
summary: Funkcije predmera koje ova verzija nema i šta raditi umesto toga danas.
keywords: ograničenja, nedostaje, još ne, plan razvoja, planirano, zaobilazno rešenje, po deonici, oblak, desktop
from: 94ff90d0
---

TakeoffCraft je u razvoju. Ovo je spisak onoga što trenutna verzija ne radi i kako svejedno završiti posao.

## Merenje

| Još nije izgrađeno | Umesto toga, danas |
|---|---|
| Umetanje tačke usred deonice ili konture | Obriši oznaku i nacrtaj je ponovo. |
| Izbor prozorom (okvirom) | {{key:Shift}} + klik na svaku oznaku, ili {{key:Mod+A}} za sve oznake na listu. Pogledaj [Kopiraj, nalepi i dupliraj oznake](topic:copy-paste). |
| Rotiranje, ogledanje ili promena razmere nalepljene kopije | Nalepi na list u istoj razmeri i u istoj orijentaciji; ostalo nacrtaj ručno. |
| Čitanje razmere sa skeniranog lista ili sa grafičke skale | Izaberi unapred podešenu razmeru, ili kalibriši po dužini skale. |
| Više od jedne razmere po listu (detaljne površine, uvećani planovi) | Izmeri deo u razmeri lista, a detalj predmeri na njegovom uvećanom listu ako ga set ima. |

## Stavke i cene

| Još nije izgrađeno | Umesto toga, danas |
|---|---|
| Formule sklopa koje koriste druge vrste oznaka stavke (vrata sobne stavke u formulama njenog sprata) | Formule koriste zbirove glavne vrste; ostale vrste cene na sopstvenim redovima. |
| Formule sklopa računate po deonici | Formule koriste zbirove stavke; za dodatke po deonici koristi `N`. |
| Formule koje koriste količine druge stavke | Ponovi merenje u toj stavci, ili izračunaj u tabeli za izvoz. |
| Ekipe na komponentama sklopa, ili radni dan različit od 8 sati | Dodeli ekipu stavci; za drugu dužinu radnog dana čitaj ekipo-dane kao ekipo-časove ÷ tvoj dan. |
| Označavanja osim beleški, oblaka i isticanja (strelice, kote, pečati), ili odgovori na belešku | Upiši to u tekst beleške; menjaj joj status kako se rešava. |
| Biblioteka cena koju deli tim ili koja se čuva uz tvoj nalog | Biblioteka se čuva u ovom pregledaču: izvezi je kao CSV i uvezi na drugom računaru. |
| Paketi za struku koje su pregledali praktični predmerači | Svaki paket je polazna tačka: proveri njegove pretpostavke prema svom poslu i svojim proizvodima pre nego što po njemu cenuš. Pogledaj [Paketi za struku](topic:trade-packs). |
| Cene u paketima za struku | Paketi donose samo sklopove: postavi svoje stope ili uvezi svoj cenovnik kao CSV. |
| Preimenovanje predmera | Ime dolazi iz prvog PDF-a; preimenuj preuzete datoteke. |
| Ručno imenovanje listova | Listovi se imenuju prema oznakama stranica u PDF-u; traži ih po nazivu datoteke i stranici. |

## Crteži (DWG i DXF)

| Još nije izgrađeno | Umesto toga, danas |
|---|---|
| Tabele stilova štampe, dodele olovaka i CTB datoteke na listovima crteža | Crtež se crta crno, ili u svojim bojama potamnjenim za papir; debljine linija dolaze iz crteža. |
| Otvaranje binarnog DXF-a ili DWG-a starijeg od AutoCAD 2000 | Sačuvaj ga kao ASCII DXF ili kao noviji DWG. |
| Pronalaženje povezanog crteža (xref) po fascikli u kojoj se nalazi | Otvori i datoteku povezanog crteža uz glavni crtež: nađe se po nazivu datoteke među otvorenim datotekama. |
| Merenje 3D polilinija, mreža, tela i oblasti | Prebroj ih po sloju i vrsti, ili izmeri tloris alatima Dužina i Površina. |
| Tekst u označenom PDF-u iz crteža na pismima koja nisu latinična | Znakove koje font Helvetica nema štampaju se kao „?“ u označenom PDF-u; crtež na ekranu nije promenjen. |
| Predaja crteža drugoj aplikaciji iz trake lista | Otvori istu datoteku u toj aplikaciji. |
| Crtež koji nosi predmer unutar sebe, kao što to za PDF-ove radi {{ui:PDF sa predmerom unutra}} | {{ui:Sačuvaj predmer}}: `.takeoff.json` se ponovo otvara na istom crtežu, pronađenom po sadržaju. |
| PDF podloge, slike i OLE objekti postavljeni u crtež | Slike se prikazuju samo kao okvir. Otvori samu PDF podlogu kao list. |

## Automatsko brojanje

| Još nije izgrađeno | Umesto toga, danas |
|---|---|
| Pronalaženje simbola na listu čija razmera nije nacrtana u drugoj veličini | Daj listu njegovu razmeru, ili ga pretraži okvirom nacrtanim na tom mestu. |
| Pronalaženje ogledalskih simbola | Prebroj ih ručno, ili ponovo pretraži okvirom oko ogledalskog simbola. |

## Datoteke i deljenje

| Još nije izgrađeno | Umesto toga, danas |
|---|---|
| Jedan PDF koji i prikazuje oznake i nosi predmer | {{ui:PDF sa oznakama}} da ljudi vide oznake; {{ui:PDF sa predmerom unutra}} za ponovno otvaranje u programu TakeoffCraft. |
| CSV sa količinama po listu ili sa oznakama | Koristi {{ui:XLSX}}: njegovi radni listovi Po listu i Oznake ih imaju. |
| Čuvanje u oblaku | Još nije dostupno. Sačuvaj datoteke projekta na računar i napravi rezervnu kopiju. |
| Poseban desktop program TakeoffCraft | Od 0.5 desktop program je CadCraft Studio, sa svih osam aplikacija u jednoj instalaciji. TakeoffCraft radi i u pregledaču. |

## Ekran i unos

| Još nije izgrađeno | Umesto toga, danas |
|---|---|
| Meni desnim klikom (ili dugim pritiskom) | Koristi traku sa alatima, panele i tastere. Dug pritisak završava deonicu ili konturu. |
| Rotiranje prikaza | Stranice okrenute u PDF-u već se prikazuju uspravno. |

## 3D prikaz

| Još nije izgrađeno | Umesto toga, danas |
|---|---|
| Crtanje ili izmena oznaka u 3D | Vrati se na list ({{key:3}}) da crtaš; izbor i brisanje rade i u 3D. |
| Poravnanje naslaganih spratova iscrtanih na različitim mestima na stranicama | Slaži spratove iscrtane na isti način; ostale proveri jedan po jedan list. |
| Brojanje stubova iste veličine kao brojani objekat | Svaki stub na listu je iste veličine; on označava gde je brojanje, a ne šta je. |

## Ponude

| Još nije izgrađeno | Umesto toga, danas |
|---|---|
| Dopune paketa koji je već poslat, pisma o dodeli posla, list opsega koji svaki ponuđač potpisuje | Pošalji novi paket i pismo o dodeli napiši sam. [Pošalji paket za ponude](topic:bid-invitations) opisuje šta je izgrađeno. |
| Slanje poziva za ponude sa bilo kog naloga: dok je u testiranju, e-pošta spoljnim ponuđačima je isključena, osim za naloge koje je tim programa CadCraft uključio | Preuzmi {{ui:CSV opsega}}, pošalji ga e-poštom sam i upiši ponude. |
| Slanje paketa za ponude iz prozora Studio | Šalji iz programa TakeoffCraft u pregledaču. |
| Ponovno cenjenje površine ponude alternative prema izabranoj ponudi | Alternative i međuzbirovi površina ponuda koriste tvoje cene; prilagodi alternativu ručno. |
| Automatski podsetnici pre isteka datuma osiguranja ili licence podizvođača | Datum je označen na stranici Podizvođači čim prođe ili padne u roku od 30 dana; proveri ga kada pozivaš. |

## Paneli

| Još nije izgrađeno | Umesto toga, danas |
|---|---|
| Pomeranje tabele {{ui:Količine}} | Pomeraju se samo paneli {{ui:Listovi}} i {{ui:Stavke}}. Pogledaj [Raspored panela](common:arrange-panels). |

## Proračunske tabele

Radna sveska XLSX proverena je u LibreOffice Calc, koji je svaki zbir ponovo izračunao do istog centa kao TakeoffCraft. Još nije otvorena u Excel-u. Ako program za proračunske tabele pokaže nešto neočekivano, CSV izvoz sadrži isti predračun kao obične vrednosti.
