---
title: Rješavanje problema
summary: Simptomi, uzroci i rješenja za poruke i iznenađenja na koja možete naići u TakeoffCraftu, citirani onako kako ih aplikacija prikazuje.
keywords: problemi, pogreške, ne radi, rješenje, pomoć, odbijeno, ne mjeri, nema mjerila, nedostaju oznake, izvoz nije uspio, offline, dodir
from: cd319c9b
---

TakeoffCraft objašnjava većinu odbijanja u statusnoj traci na dnu prozora. Pronađite poruku u nastavku.

## Otvaranje datoteka

| Poruka ili pojava | Uzrok | Rješenje |
|---|---|---|
| Čitač PDF-a nije se mogao učitati. Ponovno učitajte stranicu za novi pokušaj. | Čitač PDF-a aplikacije nije se učitao, obično zato što ste izvan mreže, a aplikacija nikad nije spremljena za rad izvan mreže. | Spojite se na mrežu i ponovno učitajte. Zatim odaberite {{ui:Spremi za offline}} i pričekajte {{ui:Spremno za offline}}; vidi [Rad izvan mreže](common:offline). |
| (naziv) je zaštićen lozinkom. Otvorite kopiju bez zaštite. | PDF za otvaranje traži lozinku. | Zatražite kopiju bez zaštite ili uklonite lozinku u PDF programu kojem vjerujete. |
| (naziv) nije moguće pročitati kao PDF (…) | Datoteka je oštećena ili zapravo nije PDF. | Preuzmite je ponovno ili je ponovno spremite iz programa koji ju je napravio. |
| Već otvoreno: (naziv). | Isti PDF (isti sadržaj) je već otvoren. | Ništa ne treba učiniti. |
| TakeoffCraft otvara PDF-ove i .takeoff.json projekte. Preskočeno: … | Ostale vrste datoteka su odbačene. | Prvo pretvorite crteže u PDF. |
| Ništa se ne događa kad ispustim datoteke | Datoteke su ispuštene izvan prozora preglednika ili je preglednik otvorio PDF u novoj kartici. | Ispustite ih na samu stranicu TakeoffCraft; okvir „Ispusti PDF-ove ili .takeoff.json“ pokazuje kad će to raditi. |
| Otvaranje velikog skupa traje neko vrijeme | Svaki PDF se u cijelosti čita radi identifikacije. | Pričekajte da nestane poruka „Otvaram (naziv)…“. Sličice se popunjavaju dok se pomičete. |

## Mjerenje

| Poruka ili pojava | Uzrok | Rješenje |
|---|---|---|
| Prvo otvorite PDF. | Nijedan list nije otvoren. | Otvorite PDF. |
| Ovaj list još nema mjerilo, pa se ne može mjeriti. Odaberite predložak mjerila ili prvo kalibrirajte (brojanje radi i bez njega). | Alati za linearno, površinu, kružnicu i otvor trebaju mjerilo. | [Postavite mjerilo](topic:set-the-scale). |
| Prvo izradite linearnu stavku (nazovite je pod Stavke), pa kliknite na list. | Nema stavke te vrste. | Ispunite obrazac {{ui:Nova stavka}} koji se otvorio i odaberite {{ui:Dodaj}}. |
| Prvo odaberite stavku za predmjer (ploča Stavke). | Trenutna stavka je izbrisana. | Kliknite stavku pod {{ui:Stavke}}. |
| Trasa treba najmanje dvije točke. | Završili ste nakon jednog klika. | Kliknite najmanje dvije točke. |
| Površina treba najmanje tri točke. | Premalo kutova. | Kliknite najmanje tri kuta. |
| Obris siječe sam sebe, pa bi mu površina bila pogrešna. Nacrtajte ga ponovno bez sjecišta. | Oblik u obliku osmice. | Nacrtajte ga kao dvije površine ili obiđite rub redom. |
| Te točke ne zatvaraju nikakvu površinu. | Sve točke su na jednoj liniji. | Kliknite kutove koji zatvaraju prostor. |
| Prvo odaberite oznaku površine (alat Odaberi), zatim odaberite {{ui:Otvor}} i nacrtajte rupu unutar nje. | {{ui:Otvor}} treba odabranu površinu. | Pritisnite {{key:V}}, kliknite površinu, pa {{key:X}}. |
| Otvor mora biti potpuno unutar površine. | Rupa siječe ili izlazi iz obrisa. | Nacrtajte rupu unutar površine. |
| Otvori se ne mogu preklapati. | Dvije rupe se preklapaju. | Nacrtajte jednu rupu oko obje ili ih držite razdvojenima. |
| … Točka je vraćena na mjesto. | Povučeni kut bi učinio da obris siječe sam sebe ili bi gurnuo rupu van. | Povucite na mjesto koje održava valjan oblik. |
| Kliknite točku na rubu kružnice, dalje od središta. | Drugi klik bio je preblizu središtu. | Kliknite dalje od središta. |
| Klikovi pomiču list umjesto da dodaju točke | Pokazivač se pomaknuo više od nekoliko piksela dok je tipka bila pritisnuta; to se smatra povlačenjem. | Kliknite bez pomicanja, posebno na dodirnoj podlozi (trackpad). |
| Shift ne hvata | Postavljate točku na luk ili crtate kružnicu. | Hvatanje pod 45° vrijedi samo za ravne dužine. |
| Točke skaču na obližnju liniju | Hvatanje na linije crteža je uključeno. | Uvećajte da kliknete između linija ili pritisnite {{key:F3}} za isključivanje hvatanja. |
| Nema oznake hvatanja | Hvatanje je isključeno, list je skeniran ili alat ne hvata ({{ui:Broji}}, {{ui:Autobrojanje}}, lijepljenje). | Pritisnite {{key:F3}}; na skeniranom listu nema linija za hvatanje. |
| Duljina je pogrešna | Mjerilo je pogrešno (često promijenjena veličina PDF-a s predloškom). | Upotrijebite {{ui:Provjeri}} na poznatoj koti, zatim {{ui:Kalibriraj}}. |

## Mjerilo

| Poruka ili pojava | Uzrok | Rješenje |
|---|---|---|
| Odaberite dvije točke dalje jednu od druge. | Točke za kalibraciju su gotovo jedna na drugoj. | Kalibrirajte na dužoj koti. |
| Poruka u dijaloškom okviru za kalibraciju, npr. „Tu udaljenost nije moguće pročitati“ | Udaljenost je u obliku koji TakeoffCraft ne može pročitati. | Vidi [Unos duljine, cijene i postotka](topic:entry-formats). |
| Ovaj list još nema mjerilo, pa nema što provjeriti. Kalibrirajte ga ili odaberite predložak. | {{ui:Provjeri}} na listu bez mjerila. | Prvo postavite mjerilo. |
| Popis {{ui:Predložak}} je zasivljen | Nijedan list nije otvoren. | Otvorite PDF. |

## Količine i formule

| Poruka ili pojava | Uzrok | Rješenje |
|---|---|---|
| Nepotpuno: … (nije u zbrojevima) | Pogreška u formuli ili oznake na listovima bez mjerila. | Vidi [Čitanje količina i procjene](topic:read-quantities#the-incomplete-warning). |
| +(n) bez mjerila uz stavku | Neke od njezinih oznaka su na listovima bez mjerila. | Dajte tim listovima mjerilo. |
| Pogreška u formuli: … | Formulu nije moguće izračunati. | Vidi [Jezik formula](topic:formulas#errors). |
| Ova stavka ima oznake, pa se njezina vrsta ne može promijeniti. | Vrsta je zaključana čim postoje oznake. | Napravite novu stavku druge vrste i ponovno nacrtajte oznake njome. |
| Stavka treba naziv. | Polje za naziv je ispražnjeno. | Upišite naziv. |
| Upišite iznos poput 12.50. / Upišite postotak poput 10 ili 7.5. | Cijena ili gubitak nisu se mogli pročitati. | Vidi [Unos duljine, cijene i postotka](topic:entry-formats). |
| Ukupno izgleda udvostručeno | Stavka ima vlastite cijene i komponente koje nose isti trošak. | Postavite vlastite cijene stavke na 0 kad komponente nose trošak. |
| Oznake ove stavke su na PDF-ovima koji nisu otvoreni. | Kliknuli ste stavku čije su sve oznake na PDF-ovima koje niste otvorili. | Otvorite te PDF-ove; njihovi nazivi su navedeni pod {{ui:Listovi}}. |

## Autobrojanje

| Poruka ili pojava | Uzrok | Rješenje |
|---|---|---|
| Taj okvir je premalen. Nacrtajte ga oko cijelog simbola. | Okvir je sitan. | Uvećajte i obuhvatite cijeli simbol okvirom. |
| Taj okvir je gotovo prazan. Nacrtajte ga oko simbola. | Okvir sadrži samo papir. | Obuhvatite okvirom sam simbol. |
| Nema podudaranja. Spustite klizač {{ui:Podudaranje}} ili suzite okvir oko simbola. | Ništa nije dobilo dovoljno visoku ocjenu. | Obuhvatite simbol bliže ili povucite klizač {{ui:Podudaranje}} niže. |
| Previše podudaranja, uključujući pogrešne simbole | Slični simboli dobivaju ocjenu blisku pravom. | Podignite klizač {{ui:Podudaranje}} i kliknite pogrešne okvire da ih odbacite. |
| Nedostaju podudaranja na drugim listovima | Ti listovi crtaju simbol drugom veličinom ili pod kutom koji nije korak od 90°. | Pretražite te listove okvirom nacrtanim tamo ili brojite ručno. |
| (n) listova je preveliko za pretragu pri ovoj veličini simbola. | List bi bio prevelik pri radnoj veličini. | Obuhvatite veći simbol ili taj list prebrojite ručno. |
| Pretraga nije uspjela: … | Pretraga u pozadini je prekinuta. | Pokušajte ponovno; ponovno učitajte stranicu ako se ponavlja (prvo spremite). Izvan mreže radi tek kad traka aplikacije prikaže {{ui:Spremno za offline}}. |
| Povlačenje crta okvir umjesto pomicanja | Tako radi {{ui:Autobrojanje}}. | Držite {{key:Space}} i povucite ili povucite srednjom tipkom. |

## Spremanje i izvoz

| Poruka ili pojava | Uzrok | Rješenje |
|---|---|---|
| Još nema što izvesti: napravite stavku i uzmite je za predmjer. | Nema stavki. | Prvo napravite stavku. |
| Na otvorenim PDF-ovima još nema oznaka. | {{ui:Označeni PDF}} nema što nacrtati na otvorenim PDF-ovima. | Otvorite PDF-ove koji imaju oznake. |
| Ovaj PDF je zaštićen lozinkom ili šifriran, pa se označena kopija ne može zapisati. … | PDF je šifriran. | Izvezite {{ui:XLSX}} umjesto toga ili upotrijebite nešifriranu kopiju PDF-a (tada treba vlastiti predmjer, jer je to druga datoteka). |
| Označeni PDF nije moguće zapisati: … | Često: izvan mreže, a aplikacija nije spremljena za rad izvan mreže, pa nedostaje pisač PDF-a. | Idite na mrežu i ponovno odaberite {{ui:Označeni PDF}}. Da to izbjegnete, odaberite {{ui:Spremi za offline}} i pričekajte {{ui:Spremno za offline}}. |
| Preuzet je samo jedan označeni PDF | Preglednik je blokirao više preuzimanja istodobno. | Dopustite višestruka preuzimanja za ovu stranicu i izvezite ponovno. |
| (datoteka) nije TakeoffCraft projekt (nije ispravan JSON). / Ovo nije datoteka TakeoffCraft projekta. | Kriva datoteka ili oštećena. | Odaberite datoteku `.takeoff.json`. |
| Ovaj projekt je spremio noviji TakeoffCraft. Otvorite ga tamo. | Datoteka potječe iz novije verzije. | Otvorite je u novijoj verziji. |
| (n) oznaka je oštećeno i izostavljeno. | Dio datoteke je oštećen ili ručno uređen. | Ostatak se otvorio. Ponovno nacrtajte nedostajuće oznake ili otvorite stariju kopiju. |
| Nedostaju oznake nakon ponovnog otvaranja | PDF-ovi nisu otvoreni ili se jedan od njih promijenio. | Vidi [Spremanje i ponovno otvaranje predmjera](topic:save-and-reopen#when-a-pdf-has-changed). |
| Preglednik pita „Napustiti stranicu?“ | Ima nespremljenih promjena. | Ostanite i spremite pomoću {{key:Mod+S}}. |

## Tipke i miš

| Pojava | Uzrok | Rješenje |
|---|---|---|
| Tipke slova ne rade ništa | Kursor je u polju (pretraga, uređivač stavki, tablica). | Kliknite na list ili pritisnite {{key:Tab}} za izlazak iz polja. |
| Kotačić zumira umjesto pomicanja | Kotačić uvijek zumira list. | Povucite za pomicanje. |
| Cijela stranica je postala veća ili manja | Zumiranje preglednika ({{key:Mod+Plus}} ili {{key:Mod+Minus}}). | Pritisnite {{key:Mod+0}}. Zumirajte list kotačićem ili običnim {{key:Plus}} i {{key:Minus}}. |
| Oznaka je nestala kad sam pritisnuo Backspace | Backspace briše odabranu oznaku kad ne crtate. | {{key:Mod+Z}} je vraća. |
| Desni klik ne završava na Macu | Control-klik stigne kao običan klik. | Upotrijebite klik dvama prstima uz uključen sekundarni klik ili pritisnite {{key:Enter}}. |

## Zasloni osjetljivi na dodir

Na zaslonu osjetljivom na dodir:

- **Dodir** postavlja točku (ili odabire oznaku pomoću {{ui:Odaberi}}). Povlačenje jednim prstom pomiče prikaz.
- **Dva prsta** štipanjem zumiraju oko točke između njih, a pomiču kad se zajedno pomiču. Spuštanje drugog prsta poništava ono što je započeo prvi, pa štipanje nikad ne ostavlja točku.
- **Završite** trasu ili obris **dugim pritiskom** (desni klik), **dvostrukim dodirom** ili {{ui:Završi}} u traci na dnu lista. Ista traka ima {{ui:Straga}} (vraća zadnju točku) i {{ui:Odustani}}. Površine se također zatvaraju dodirom prve točke.
- Prsti dobivaju veće mete: točke se hvataju, zatvaraju i biraju s veće udaljenosti, a ručke kutova su veće.

Upisivanje duljina treba tipkovnicu; zaslonska tipkovnica radi kad je okvir {{ui:Upis}} aktivan.

Na tabletu tipkovnica i miš ili dodirna podloga znatno olakšavaju predmjer.

## Rad izvan mreže

| Gumb ili pojava | Uzrok | Rješenje |
|---|---|---|
| {{ui:Spremanje nije uspjelo}} | Neke datoteke aplikacije nisu se preuzele tijekom spremanja za rad izvan mreže. | Provjerite vezu i ponovno odaberite gumb. |
| {{ui:Offline nije dostupan}} | Privatni prozori i neka upravljana računala blokiraju kopije za rad izvan mreže. | Upotrijebite običan prozor ili drugi preglednik. |
| „Spremanje…“ se nikad ne pokreće | Niste na mreži; spremanje treba vezu. | Spremite dok ste na mreži. |
| Aplikacija je stara nakon ažuriranja | Kopija za rad izvan mreže je iz ranijeg dana. | Na mreži odaberite {{ui:Spremno za offline}}, zatim {{ui:Spremi ponovno (preuzmi najnoviju verziju)}}. |
| Želite natrag prostor | Kopija za rad izvan mreže zauzima oko 6 MB. | Odaberite {{ui:Spremno za offline}}, zatim {{ui:Ukloni offline kopiju}}. |

Vidi [Rad izvan mreže](common:offline).

## Još uvijek imate problema

Ponovno učitajte stranicu ako aplikacija prestane reagirati. Predmjer se gubi pri ponovnom učitavanju, osim ako ste ga spremili, pa prvo spremite pomoću {{key:Mod+S}} ako možete. Za pitanja o pregledniku vidi [Preglednici i računala](common:browsers).
