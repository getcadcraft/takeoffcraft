---
title: Rješavanje problema
summary: Simptomi, uzroci i rješenja za poruke i iznenađenja na koje možete naići u aplikaciji TakeoffCraft, navedeni onako kako ih aplikacija prikazuje.
keywords: problemi, greške, ne radi, rješenje, pomoć, odbijeno, ne mjeri, bez razmjere, nedostajuće oznake, izvoz nije uspio, van mreže, dodir
from: cd319c9b
---

TakeoffCraft objašnjava većinu odbijanja u statusnoj traci na dnu prozora. Pronađite poruku ispod.

## Otvaranje datoteka

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| Čitač PDF-a se nije učitao. Ponovo učitajte stranicu da pokušate ponovo. | Čitač PDF-a aplikacije se nije učitao, obično zato što ste van mreže, a aplikacija nikada nije sačuvana za rad van mreže. | Ponovo se povežite i učitajte stranicu. Zatim izaberite {{ui:Spasi za rad van mreže}} i sačekajte {{ui:Spremno za rad van mreže}}; vidi [Rad van mreže](common:offline). |
| (naziv) je zaštićen lozinkom. Otvorite kopiju bez zaštite. | PDF za otvaranje traži lozinku. | Zatražite kopiju bez zaštite, ili uklonite lozinku u PDF programu kojem vjerujete. |
| (naziv) se nije mogao pročitati kao PDF (…) | Datoteka je oštećena ili nije zaista PDF. | Ponovo je preuzmite, ili je ponovo spasite iz programa koji ju je napravio. |
| (naziv) je već otvoren. | Isti PDF (isti sadržaj) je otvoren. | Ništa ne treba raditi. |
| TakeoffCraft otvara PDF-ove i .takeoff.json projekte. Preskočeno: … | Drugi tipovi datoteka su odbačeni. | Prvo pretvorite crteže u PDF. |
| Ništa se ne dešava kada prevučem datoteke | Datoteke su prevučene van prozora pregledača, ili je pregledač otvorio PDF u novoj kartici. | Prevucite na samu stranicu TakeoffCraft; okvir „Prevuci PDF-ove ili .takeoff.json“ pokazuje hoće li to raditi. |
| Otvaranje velikog seta traje neko vrijeme | Svaki PDF se čita u cijelosti da bi se dobio njegov otisak. | Sačekajte da poruka „Otvaranje (naziv)…“ nestane. Sličice se popunjavaju dok skrolujete. |

## Mjerenje

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| Prvo otvorite PDF. | Nijedan list nije otvoren. | Otvorite PDF. |
| Ovaj list još nema razmjeru, pa se ne može mjeriti. Prvo izaberite unaprijed zadanu razmjeru ili kalibrirajte (brojanje radi i bez nje). | Alati za linije, površine, krugove i izreze trebaju razmjeru. | [Postavite razmjeru](topic:set-the-scale). |
| Prvo napravite linijsku stavku (imenujte je pod {{ui:Stavke}}), zatim kliknite na list. | Nema stavke tog tipa. | Popunite formu {{ui:Nova stavka}} koja se otvorila, i izaberite {{ui:Dodaj}}. |
| Prvo izaberite stavku za predmjer (panel {{ui:Stavke}}). | Trenutna stavka je obrisana. | Kliknite stavku pod {{ui:Stavke}}. |
| Dionica treba najmanje dvije tačke. | Završili ste nakon jednog klika. | Kliknite najmanje dvije tačke. |
| Površina treba najmanje tri tačke. | Premalo uglova. | Kliknite najmanje tri ugla. |
| Kontura siječe samu sebe, pa bi njena površina bila pogrešna. Nacrtajte je ponovo bez presijecanja. | Oblik u obliku osmice. | Nacrtajte je kao dvije površine, ili idite po ivici redom. |
| Te tačke ne zatvaraju nikakvu površinu. | Sve tačke su na jednoj liniji. | Kliknite uglove koji zatvaraju prostor. |
| Prvo odaberite oznaku površine (alat {{ui:Odaberi}}), zatim izaberite {{ui:Izrez}} i nacrtajte rupu unutar nje. | {{ui:Izrez}} traži odabranu površinu. | Pritisnite {{key:V}}, kliknite površinu, zatim {{key:X}}. |
| Izrez mora biti potpuno unutar površine. | Rupa siječe ili izlazi iz konture. | Nacrtajte rupu unutar površine. |
| Izrezi se ne mogu preklapati. | Dvije rupe se preklapaju. | Nacrtajte jednu rupu oko obje, ili ih držite odvojeno. |
| … Tačka je vraćena. | Prevučeni ugao bi naveo konturu da se siječe ili bi gurnuo rupu van. | Prevucite na mjesto koje održava oblik ispravnim. |
| Kliknite tačku na ivici kruga, dalje od njegovog središta. | Drugi klik je bio preblizu središtu. | Kliknite dalje. |
| Klikovi pomjeraju list umjesto da dodaju tačke | Pokazivač se pomjerio za više piksela dok je dugme bilo pritisnuto; to se računa kao prevlačenje. | Kliknite bez pomjeranja, naročito na trackpadu. |
| Shift ne poravnava | Postavljate tačku na luk, ili crtate krug. | Poravnanje na 45° važi samo za prave dionice. |
| Tačke skaču na obližnju liniju | Hvatanje na linije crteža je uključeno. | Uvećajte da kliknete između linija, ili pritisnite {{key:F3}} da isključite hvatanje. |
| Nema oznake hvatanja | Hvatanje je isključeno, list je skeniran, ili alat ne hvata (Brojanje, Auto brojanje, lijepljenje). | Pritisnite {{key:F3}}; na skeniranom listu nema linija za hvatanje. |
| Dužina je pogrešna | Razmjera je pogrešna (često PDF promijenjene veličine sa unaprijed zadanom razmjerom). | Koristite {{ui:Provjeri}} na poznatoj koti, zatim {{ui:Kalibriraj}}. |

## Razmjera

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| Izaberite dvije tačke dalje jednu od druge. | Tačke kalibracije su gotovo jedna na drugoj. | Kalibrirajte na dužoj koti. |
| Poruka u dijalogu kalibracije, kao „Ta udaljenost se nije mogla pročitati“ | Udaljenost je u obliku koji TakeoffCraft ne može pročitati. | Vidi [Unos dužine, cijene i procenta](topic:entry-formats). |
| Ovaj list još nema razmjeru, pa nema šta provjeriti. Kalibrirajte ga ili izaberite unaprijed zadanu razmjeru. | {{ui:Provjeri}} na listu bez razmjere. | Prvo postavite razmjeru. |
| Lista {{ui:Unaprijed zadana}} je zasivljena | Nijedan list nije otvoren. | Otvorite PDF. |

## Količine i formule

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| Nepotpuno: … (nije u ukupnim iznosima) | Greška u formuli, ili oznake na listovima bez razmjere. | Vidi [Čitanje količina i procjene](topic:read-quantities#the-incomplete-warning). |
| +(n) bez razmjere pored stavke | Neke od njenih oznaka su na listovima bez razmjere. | Dajte tim listovima razmjeru. |
| Greška u formuli: … | Formulu nije moguće izračunati. | Vidi [Jezik formula](topic:formulas#errors). |
| Ova stavka ima oznake, pa se njen tip ne može promijeniti. | Tip je zaključan čim postoje oznake. | Napravite novu stavku drugog tipa i ponovo nacrtajte oznake sa njom. |
| Stavka mora imati naziv. | Polje za naziv je ispražnjeno. | Upišite naziv. |
| Upišite iznos, npr. 12.50. / Upišite procenat, npr. 10 ili 7.5. | Cijena ili otpad nisu mogli biti pročitani. | Vidi [Unos dužine, cijene i procenta](topic:entry-formats). |
| Ukupan iznos izgleda udvostručen | Stavka ima sopstvene cijene i komponente koje nose isti trošak. | Postavite sopstvene cijene stavke na 0 kada komponente nose trošak. |
| Oznake ove stavke su na PDF-ovima koji nisu otvoreni. | Kliknuli ste stavku čije su sve oznake na PDF-ovima koje niste otvorili. | Otvorite te PDF-ove; njihovi nazivi su navedeni pod {{ui:Listovi}}. |

## Automatsko brojanje

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| Taj okvir je premali. Nacrtajte ga oko cijelog simbola. | Okvir je sitan. | Uvećajte i uokvirite cijeli simbol. |
| Taj okvir je skoro prazan. Nacrtajte ga oko simbola. | Okvir sadrži samo papir. | Uokvirite sam simbol. |
| Nema podudaranja. Spustite klizač {{ui:Podudaranje}}, ili uokvirite simbol tješnje. | Ništa nije ostvarilo dovoljno visok rezultat. | Uokvirite simbol tješnje, ili spustite klizač {{ui:Podudaranje}}. |
| Previše podudaranja, uključujući pogrešne simbole | Slični simboli imaju rezultat blizu pravog. | Podignite klizač {{ui:Podudaranje}} i kliknite pogrešne okvire da ih odbacite. |
| Podudaranja nedostaju na drugim listovima | Ti listovi crtaju simbol drugačije veličine, ili pod uglom koji nije korak od 90°. | Pretražite te listove sa okvirom nacrtanim tamo, ili prebrojite ručno. |
| (n) listova je previše veliko za pretragu pri ovoj veličini simbola. | List bi bio prevelik pri radnoj veličini. | Uokvirite veći simbol, ili prebrojite taj list ručno. |
| Pretraga nije uspjela: … | Pozadinska pretraga je stala. | Pokušajte ponovo; ponovo učitajte stranicu ako se ponavlja (prvo spasite). Van mreže radi samo kada traka aplikacije pokaže {{ui:Spremno za rad van mreže}}. |
| Prevlačenje crta okvir umjesto pomjeranja | Tako radi {{ui:Auto brojanje}}. | Držite {{key:Space}} i prevucite, ili prevucite srednjim dugmetom. |

## Čuvanje i izvoz

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| Još nema šta izvesti: napravite stavku i uzmite predmjer. | Nema stavki. | Prvo napravite stavku. |
| Još nema oznaka na otvorenim PDF-ovima. | {{ui:Označeni PDF}} nema šta da nacrta na otvorenim PDF-ovima. | Otvorite PDF-ove koji imaju oznake. |
| Ovaj PDF je zaštićen lozinkom ili šifrovan, pa se označena kopija ne može napisati. … | PDF je šifrovan. | Izvezite {{ui:XLSX}} umjesto toga, ili koristite nešifrovanu kopiju PDF-a (ona tada treba vlastiti predmjer, jer je to druga datoteka). |
| Označeni PDF se nije mogao napisati: … | Često: van mreže, a aplikacija nije sačuvana za rad van mreže, pa nedostaje pisač PDF-a. | Idite na mrežu i ponovo izaberite {{ui:Označeni PDF}}. Da to izbjegnete, izaberite {{ui:Spasi za rad van mreže}} i sačekajte {{ui:Spremno za rad van mreže}}. |
| Preuzet je samo jedan označeni PDF | Pregledač je blokirao više preuzimanja odjednom. | Dozvolite više preuzimanja za ovu stranicu, pa izvezite ponovo. |
| (datoteka) nije TakeoffCraft projekt (nije ispravan JSON). / Ovo nije TakeoffCraft datoteka projekta. | Pogrešna datoteka, ili oštećena. | Izaberite datoteku `.takeoff.json`. |
| Ovaj projekt je spašen u novijoj verziji aplikacije TakeoffCraft. Otvorite ga tamo. | Datoteka potiče iz novije verzije. | Otvorite je u novijoj verziji. |
| (n) oznaka je oštećeno i izostavljeno. | Dio datoteke je oštećen ili ručno izmijenjen. | Ostatak se otvorio. Ponovo nacrtajte nedostajuće oznake, ili otvorite stariju kopiju. |
| Oznake nedostaju nakon ponovnog otvaranja | PDF-ovi nisu otvoreni, ili se jedan od njih promijenio. | Vidi [Spasi i ponovo otvori predmjer](topic:save-and-reopen#when-a-pdf-has-changed). |
| Pregledač pita „Napustiti stranicu?“ | Postoje nespašene promjene. | Ostanite i spasite sa {{key:Mod+S}}. |

## Tasteri i miš

| Simptom | Uzrok | Rješenje |
|---|---|---|
| Tasteri slova ne rade ništa | Kursor je u polju (pretraga, uređivač stavke, tabela). | Kliknite na list, ili pritisnite {{key:Tab}} da izađete iz polja. |
| Točkić uvećava umjesto skrolovanja | Točkić uvijek uvećava list. | Prevucite da pomjerate. |
| Cijela stranica je postala veća ili manja | Zumiranje pregledača ({{key:Mod+Plus}} ili {{key:Mod+Minus}}). | Pritisnite {{key:Mod+0}}. Uvećajte list točkićem ili samim {{key:Plus}} i {{key:Minus}}. |
| Oznaka je nestala kada sam pritisnuo Backspace | Backspace briše odabranu oznaku kada ne crtate. | {{key:Mod+Z}} je vraća. |
| Desni klik ne završava na Mac-u | Control-klik stiže kao običan klik. | Koristite klik dvama prstima uz uključen sekundarni klik, ili pritisnite {{key:Enter}}. |

## Ekrani osjetljivi na dodir

Na ekranu osjetljivom na dodir:

- **Dodir** postavlja tačku (ili bira oznaku sa {{ui:Odaberi}}). Prevlačenje jednim prstom pomjera pogled.
- **Dva prsta** štipanjem uvećavaju oko tačke između njih, a pomjeraju kada se kreću zajedno. Spuštanje drugog prsta poništava ono što je započeo prvi, pa štipanje nikada ne ostavlja tačku.
- **Završite** dionicu ili konturu **dugim pritiskom** (desni klik), **dvostrukim dodirom**, ili sa {{ui:Završi}} u traci na dnu lista. Ista traka ima {{ui:Straga}} (vraća posljednju tačku) i {{ui:Otkaži}}. Površine se također zatvaraju dodirom prve tačke.
- Prsti imaju veće mete: tačke se hvataju, zatvaraju i biraju sa veće udaljenosti, a ručice uglova su veće.

Unos dužina zahtijeva tastaturu; ekranska tastatura radi kada je polje {{ui:Unos}} aktivno.

Na tabletu, tastatura i miš ili trackpad znatno olakšavaju predmjer.

## Rad van mreže

| Dugme ili simptom | Uzrok | Rješenje |
|---|---|---|
| {{ui:Nije moguće spasiti}} | Neke datoteke aplikacije se nisu preuzele pri spašavanju za rad van mreže. | Provjerite vezu i ponovo izaberite dugme. |
| {{ui:Rad van mreže nije dostupan}} | Privatni prozori i neki upravljani računari blokiraju kopije za rad van mreže. | Koristite običan prozor, ili drugi pregledač. |
| „Spašavanje…“ nikada ne počinje | Van ste mreže; spašavanje traži vezu. | Spasite dok ste na mreži. |
| Aplikacija je stara nakon ažuriranja | Kopija za rad van mreže je iz ranijeg dana. | Na mreži izaberite {{ui:Spremno za rad van mreže}}, zatim {{ui:Spasi ponovo (preuzmi najnoviju verziju)}}. |
| Želite nazad prostor | Kopija za rad van mreže je oko 6 MB. | Izaberite {{ui:Spremno za rad van mreže}}, zatim {{ui:Ukloni kopiju za rad van mreže}}. |

Vidi [Rad van mreže](common:offline).

## Još uvijek zaglavljeni

Ponovo učitajte stranicu ako aplikacija prestane da reaguje. Predmjer se gubi pri ponovnom učitavanju ako ga niste spasili, pa prvo spasite sa {{key:Mod+S}} ako možete. Za pitanja o pregledačima vidi [Pregledači i računari](common:browsers).
