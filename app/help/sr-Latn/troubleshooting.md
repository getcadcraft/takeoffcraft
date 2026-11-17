---
title: Rešavanje problema
summary: Simptomi, uzroci i rešenja za poruke i iznenađenja koja možete sresti u TakeoffCraft-u, citirani onako kako ih aplikacija prikazuje.
keywords: problemi, greške, ne radi, popravka, pomoć, odbijeno, ne meri, nema razmere, nedostaju oznake, izvoz nije uspeo, van mreže, dodir
from: cd319c9b
---

TakeoffCraft objašnjava većinu odbijanja u statusnoj traci na dnu prozora. Pronađite poruku ispod.

## Otvaranje datoteka

| Poruka ili simptom | Uzrok | Rešenje |
|---|---|---|
| Čitač PDF-a nije mogao da se učita. Ponovo učitajte stranicu da pokušate ponovo. | Čitač PDF-a aplikacije se nije učitao, obično zato što ste van mreže, a aplikacija nikada nije sačuvana za rad van mreže. | Povežite se i ponovo učitajte. Zatim izaberite {{ui:Sačuvaj za rad van mreže}} i sačekajte {{ui:Spremno za rad van mreže}}; vidi [Rad van mreže](common:offline). |
| (naziv) je zaštićen lozinkom. Otvorite nezaštićenu kopiju. | PDF za otvaranje traži lozinku. | Zatražite nezaštićenu kopiju ili uklonite lozinku u PDF programu kojem verujete. |
| (naziv) nije mogao da se pročita kao PDF (…) | Datoteka je oštećena ili nije zaista PDF. | Preuzmite je ponovo ili je ponovo sačuvajte iz programa koji ju je napravio. |
| (naziv) je već otvoren. | Isti PDF (isti sadržaj) je otvoren. | Ništa nije potrebno. |
| TakeoffCraft otvara PDF-ove i .takeoff.json projekte. Preskočeno: … | Drugi tipovi datoteka su odbačeni. | Prvo pretvorite crteže u PDF. |
| Ništa se ne dešava kada prevučem datoteke | Datoteke su prevučene van prozora pregledača, ili je pregledač otvorio PDF u novoj kartici. | Prevucite na samu TakeoffCraft stranicu; okvir „Prevucite PDF-ove ili .takeoff.json“ pokazuje hoće li to raditi. |
| Otvaranje velikog seta traje | Svaki PDF se čita u celini da bi se utvrdio otisak. | Sačekajte da poruka „Otvaranje (naziv)…“ nestane. Sličice se popunjavaju kako skrolujete. |

## Merenje

| Poruka ili simptom | Uzrok | Rešenje |
|---|---|---|
| Prvo otvorite PDF. | Nijedan list nije otvoren. | Otvorite PDF. |
| Ovaj list još nema razmeru, pa ne može da se meri. Prvo izaberite unapred podešenu razmeru ili kalibrišite (brojanje radi i bez nje). | Alati linijski, površina, krug i izrez traže razmeru. | [Podesite razmeru](topic:set-the-scale). |
| Prvo napravite linijsku stavku (imenujte je pod Stavke), pa kliknite na list. | Nema stavke tog tipa. | Popunite obrazac {{ui:Nova stavka}} koji se otvorio i izaberite {{ui:Dodaj}}. |
| Prvo izaberite stavku za predmer (panel Stavke). | Trenutna stavka je obrisana. | Kliknite stavku pod {{ui:Stavke}}. |
| Tok treba da ima najmanje dve tačke. | Završili ste posle jednog klika. | Kliknite najmanje dve tačke. |
| Površina treba da ima najmanje tri tačke. | Premalo uglova. | Kliknite najmanje tri ugla. |
| Obris seče sam sebe, pa bi njegova površina bila pogrešna. Nacrtajte ga ponovo bez preseka. | Oblik u obliku osmice. | Nacrtajte ga kao dve površine, ili idite oko ivice redom. |
| Te tačke ne zatvaraju nijedan prostor. | Sve tačke su na jednoj liniji. | Kliknite uglove koji zatvaraju prostor. |
| Prvo izaberite oznaku površine (alat Izaberi), pa izaberite Izrez i nacrtajte rupu unutar nje. | {{ui:Izrez}} traži izabranu površinu. | Pritisnite {{key:V}}, kliknite površinu, pa {{key:X}}. |
| Izrez mora da bude u potpunosti unutar površine. | Rupa seče ili izlazi iz obrisa. | Nacrtajte rupu unutar površine. |
| Izrezi se ne mogu preklapati. | Dve rupe se preklapaju. | Nacrtajte jednu rupu oko obe, ili ih držite odvojeno. |
| … Tačka je vraćena. | Prevučeni ugao bi napravio da obris seče sam sebe ili gurnuo rupu van površine. | Prevucite na mesto koje čuva ispravan oblik. |
| Kliknite tačku na ivici kruga, dalje od njegovog centra. | Drugi klik je bio preblizu centra. | Kliknite dalje. |
| Klikovi pomeraju list umesto da dodaju tačke | Pokazivač se pomerio za više od nekoliko piksela dok je dugme bilo pritisnuto; to se računa kao prevlačenje. | Kliknite bez pomeranja, naročito na trackpad-u. |
| Shift ne hvata | Postavljate tačku na luk ili crtate krug. | Hvatanje pod 45° važi samo za prave segmente. |
| Tačke skaču na obližnju liniju | Hvatanje za linije crteža je uključeno. | Uvećajte da kliknete između linija, ili pritisnite {{key:F3}} da isključite hvatanje. |
| Nema oznake hvatanja | Hvatanje je isključeno, list je skeniran, ili alat ne hvata (Prebroj, Automatsko brojanje, nalepljivanje). | Pritisnite {{key:F3}}; na skeniranom listu nema linija za hvatanje. |
| Dužina je pogrešna | Razmera je pogrešna (često PDF promenjene veličine sa unapred podešenom razmerom). | Koristite {{ui:Proveri}} na poznatoj koti, pa {{ui:Kalibriši}}. |

## Razmera

| Poruka ili simptom | Uzrok | Rešenje |
|---|---|---|
| Izaberite dve tačke dalje jednu od druge. | Tačke kalibracije su gotovo jedna na drugoj. | Kalibrišite na dužoj koti. |
| Poruka u dijalogu kalibracije, poput „Ta dužina nije mogla da se pročita“ | Dužina je u obliku koji TakeoffCraft ne može da pročita. | Vidi [Unos dužine, cene i procenta](topic:entry-formats). |
| Ovaj list još nema razmeru, pa nema šta da se proveri. Kalibrišite ga ili izaberite unapred podešenu razmeru. | {{ui:Proveri}} na listu bez razmere. | Prvo podesite razmeru. |
| Lista {{ui:Unapred podešeno}} je zasivljena | Nijedan list nije otvoren. | Otvorite PDF. |

## Količine i formule

| Poruka ili simptom | Uzrok | Rešenje |
|---|---|---|
| Nepotpuno: … (nije u zbirovima) | Greška u formuli, ili oznake na listovima bez razmere. | Vidi [Čitanje količina i predračuna](topic:read-quantities#the-incomplete-warning). |
| +(n) bez razmere pored stavke | Neke njene oznake su na listovima bez razmere. | Dajte tim listovima razmeru. |
| Greška u formuli: … | Formula ne može da se izračuna. | Vidi [Jezik formula](topic:formulas#errors). |
| Ova stavka ima oznake, pa njen tip ne može da se promeni. | Tip je zaključan kada postoje oznake. | Napravite novu stavku drugog tipa i ponovo nacrtajte oznake s njom. |
| Stavka mora imati naziv. | Polje za naziv je ispražnjeno. | Upišite naziv. |
| Upišite iznos kao 12.50. / Upišite procenat kao 10 ili 7.5. | Cena ili otpad nisu mogli da se pročitaju. | Vidi [Unos dužine, cene i procenta](topic:entry-formats). |
| Ukupan iznos izgleda udvostručeno | Stavka ima sopstvene cene i komponente koje nose isti trošak. | Postavite sopstvene cene stavke na 0 kada komponente nose trošak. |
| Oznake ove stavke su na PDF-ovima koji nisu otvoreni. | Kliknuli ste stavku čije su sve oznake na PDF-ovima koje niste otvorili. | Otvorite te PDF-ove; njihovi nazivi su navedeni pod {{ui:Listovi}}. |

## Automatsko brojanje

| Poruka ili simptom | Uzrok | Rešenje |
|---|---|---|
| Taj okvir je premali. Nacrtajte ga oko čitavog simbola. | Okvir je sićušan. | Uvećajte i obuhvatite ceo simbol. |
| Taj okvir je skoro prazan. Nacrtajte ga oko simbola. | Okvir sadrži samo papir. | Obuhvatite sam simbol. |
| Nema podudaranja. Spustite klizač {{ui:Podudaranje}} ili uže obuhvatite simbol. | Ništa nije dobilo dovoljno visok rezultat. | Obuhvatite simbol tesnije, ili prevucite klizač {{ui:Podudaranje}} niže. |
| Previše podudaranja, uključujući pogrešne simbole | Slični simboli imaju rezultat blizak pravom. | Podignite klizač {{ui:Podudaranje}} i kliknite pogrešne okvire da ih odbacite. |
| Podudaranja nedostaju na drugim listovima | Ti listovi crtaju simbol drugačije veličine, ili pod uglom koji nije korak od 90°. | Pretražite te listove okvirom nacrtanim tamo, ili prebrojte ručno. |
| (n) listova je bilo preveliko za pretragu ovog simbola. | List bi bio prevelik pri radnoj veličini. | Obuhvatite veći simbol, ili prebrojte taj list ručno. |
| Pretraga nije uspela: … | Pozadinska pretraga se zaustavila. | Pokušajte ponovo; ponovo učitajte stranicu ako se ponavlja (prvo sačuvajte). Van mreže radi samo kada traka aplikacije prikaže {{ui:Spremno za rad van mreže}}. |
| Prevlačenje crta okvir umesto pomeranja pogleda | Tako radi {{ui:Automatsko brojanje}}. | Držite {{key:Space}} i prevucite, ili prevucite srednjim dugmetom. |

## Čuvanje i izvoz

| Poruka ili simptom | Uzrok | Rešenje |
|---|---|---|
| Još nema šta da se izveze: napravite stavku i uzmite je za predmer. | Nema stavki. | Prvo napravite stavku. |
| Na otvorenim PDF-ovima još nema oznaka. | {{ui:PDF sa oznakama}} nema šta da nacrta na otvorenim PDF-ovima. | Otvorite PDF-ove koji imaju oznake. |
| Ovaj PDF je zaštićen lozinkom ili šifrovan, pa označena kopija ne može da se upiše. … | PDF je šifrovan. | Izvezite {{ui:XLSX}} umesto toga, ili koristite nešifrovanu kopiju PDF-a (tada treba sopstveni predmer, jer je to druga datoteka). |
| Označeni PDF nije mogao da se upiše: … | Često: van mreže, a aplikacija nije sačuvana za rad van mreže, pa nedostaje pisač PDF-a. | Pređite na mrežu i ponovo izaberite {{ui:PDF sa oznakama}}. Da to izbegnete, izaberite {{ui:Sačuvaj za rad van mreže}} i sačekajte {{ui:Spremno za rad van mreže}}. |
| Preuzet je samo jedan označeni PDF | Pregledač je blokirao više preuzimanja istovremeno. | Dozvolite više preuzimanja za ovaj sajt, pa izvezite ponovo. |
| (datoteka) nije TakeoffCraft projekat (nije ispravan JSON). / Ovo nije TakeoffCraft projektna datoteka. | Pogrešna datoteka, ili oštećena. | Izaberite `.takeoff.json` datoteku. |
| Ovaj projekat je sačuvao noviji TakeoffCraft. Otvorite ga tamo. | Datoteka je iz novije verzije. | Otvorite je u novijoj verziji. |
| (n) oznaka je oštećeno i izostavljeno. | Deo datoteke je oštećen ili izmenjen ručno. | Ostatak je otvoren. Nacrtajte nedostajuće oznake ponovo, ili otvorite stariju kopiju. |
| Oznake nedostaju posle ponovnog otvaranja | PDF-ovi nisu otvoreni, ili se jedan od njih promenio. | Vidi [Sačuvajte i ponovo otvorite predmer](topic:save-and-reopen#when-a-pdf-has-changed). |
| Pregledač pita „Napustiti sajt?“ | Postoje nesačuvane izmene. | Ostanite i sačuvajte sa {{key:Mod+S}}. |

## Tasteri i miš

| Simptom | Uzrok | Rešenje |
|---|---|---|
| Tasteri slova ne rade | Kursor je u polju (pretraga, uređivač stavke, tabela). | Kliknite na list, ili pritisnite {{key:Tab}} da izađete iz polja. |
| Točkić zumira umesto skrolovanja | Točkić uvek zumira list. | Prevucite da pomerate pogled. |
| Cela stranica je postala veća ili manja | Zumiranje pregledača ({{key:Mod+Plus}} ili {{key:Mod+Minus}}). | Pritisnite {{key:Mod+0}}. Zumirajte list točkićem ili samim {{key:Plus}} i {{key:Minus}}. |
| Oznaka je nestala kada sam pritisnuo Backspace | Backspace briše izabranu oznaku kada ne crtate. | {{key:Mod+Z}} je vraća. |
| Desni klik ne završava na Mac-u | Klik sa kontrolom stiže kao običan klik. | Koristite klik dvoma prstima uz uključen sekundarni klik, ili pritisnite {{key:Enter}}. |

## Ekrani osetljivi na dodir

Na ekranu osetljivom na dodir:

- **Dodir** postavlja tačku (ili bira oznaku sa {{ui:Izaberi}}). Jedan prst koji prevlači pomera pogled.
- **Dva prsta** štipanjem zumiraju oko tačke između njih, a pomeraju kada se kreću zajedno. Spuštanje drugog prsta poništava ono što je započeo prvi, pa štipanje nikada ne ostavi tačku.
- **Završite** tok ili obris **dugim pritiskom** (desni klik), **dvostrukim dodirom** ili sa {{ui:Završi}} na traci na dnu lista. Ista traka ima {{ui:Iza}} (vraća poslednju tačku) i {{ui:Otkaži}}. Površine se zatvaraju i dodirom na prvu tačku.
- Prsti imaju veće mete: tačke se hvataju, zatvaraju i biraju sa većeg rastojanja, a ručice uglova su veće.

Unos dužina zahteva tastaturu; ekranska tastatura radi kada je polje {{ui:Unos}} aktivno.

Na tabletu tastatura i miš ili trackpad znatno olakšavaju predmer.

## Rad van mreže

| Dugme ili simptom | Uzrok | Rešenje |
|---|---|---|
| {{ui:Nije moguće sačuvati}} | Neke datoteke aplikacije nisu preuzete pri čuvanju za rad van mreže. | Proverite vezu i ponovo izaberite dugme. |
| {{ui:Rad van mreže nije dostupan}} | Privatni prozori i neki upravljani računari blokiraju kopije za rad van mreže. | Koristite običan prozor ili drugi pregledač. |
| „Čuvanje…“ nikada ne počne | Van ste mreže; čuvanje zahteva vezu. | Sačuvajte dok ste na mreži. |
| Aplikacija je stara posle ažuriranja | Kopija za rad van mreže je iz ranijeg dana. | Na mreži izaberite {{ui:Spremno za rad van mreže}}, pa {{ui:Sačuvaj ponovo (preuzmi najnoviju verziju)}}. |
| Želite da vratite prostor | Kopija za rad van mreže je oko 6 MB. | Izaberite {{ui:Spremno za rad van mreže}}, pa {{ui:Ukloni kopiju za rad van mreže}}. |

Vidi [Rad van mreže](common:offline).

## Još uvek zaglavljeni?

Ponovo učitajte stranicu ako aplikacija prestane da reaguje. Vaš predmer se gubi pri ponovnom učitavanju ako ga niste sačuvali, pa prvo sačuvajte sa {{key:Mod+S}} ako možete. Za pitanja o pregledačima vidi [Pregledači i računari](common:browsers).
