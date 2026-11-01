---
title: Novosti u verziji 0.7
summary: DWG i DXF crteži se otvaraju kao listovi sa sopstvenom razmjerom, tačni brojevi i dužine iz samog crteža, odabrana ponuda podizvođača kao cijena paketa, pozivi na ponudu sa zapečaćenim cijenama, alati za crteže za asistente i USD iz 3D pregleda provjere.
keywords: novosti, šta je novo, bilješke o izdanju, izmjene, 0.7, verzija, nove funkcije, dwg, dxf, crtež, rasporedi, prostor modela, razmjera crteža, brojanje iz crteža, cad brojanje, blokovi, dinamički blokovi, atributi, slojevi, xref, povezani crtež, izmjeri crtež, polilinija, šrafura, označeni pdf, odabrana ponuda, koristi ponudu, pošalji na ponude, poziv na ponudu, zapečaćene ponude, otvaranje ponuda, kasna ponuda, zapisi podizvođača, csv, asistent, mcp, usd, usdz, jedinice, liste jedinica, zbijeno, paneli, dijalozi, portugalski
from: ad4f0df1
---

Ovo se promijenilo u verziji TakeoffCraft 0.7, u odnosu na 0.6. Crteži se sada otvaraju onakvi kakvi jesu, bez prethodnog štampanja u PDF, a paket ponude može otići podizvođačima i vratiti se s cijenama.

## Novo

### DWG i DXF crteži

- **Otvorite crtež kao listove.** {{ui:Open plans}} u grupi {{ui:File}} ({{key:Mod+O}} ili prevucite datoteke) prihvata DWG i DXF crteže uz PDF-ove. Prostor modela i svaki raspored postaju listovi na listi {{ui:Sheets}}, a predmjer može obuhvatiti crteže i PDF-ove zajedno. Ništa se ne otprema. Pogledajte [Otvaranje DWG ili DXF crteža](topic:open-a-drawing).
- **Razmjera dolazi iz crteža.** Raspored počinje s razmjerom svog najvećeg prikaza, imenovanom kao unaprijed zadana kad to jeste, na primjer 1/2" = 1'-0". Model počinje u jedinicama crteža. Crtež bez jedinica piše „Nema razmjere“ dok ga ne kalibrišete. {{ui:Calibrate}}, {{ui:Check}} i {{ui:Preset}} i dalje imaju prednost. Pogledajte [Razmjera](topic:open-a-drawing#the-scale).
- **Slojevi i povezani crteži.** {{ui:Layers}} na traci lista prikazuje ili skriva slojeve crteža. Slojevi koje je datoteka isključila ili zamrznula počinju skriveni i ne broje se, osim ako ih sami ne uključite. Povezani crtež (xref) otvoren uz svoj domaćin crta se i broji tamo gdje je umetnut; dok nije otvoren, statusna traka kaže šta nedostaje. Pogledajte [Slojevi](topic:open-a-drawing#layers).
- **Označeni PDF radi iz crteža.** {{ui:Export}} › {{ui:Marked PDF}} prvo crta označene listove crteža kao PDF, pa kopija pokazuje vaše oznake i legendu bez koraka štampanja. Crta se crno ili bojama crteža, bez tabela stilova štampanja. Pogledajte [Označeni PDF](topic:export-estimate#a-marked-pdf).

### Tačni brojevi i dužine iz crteža

- **Brojite ono što crtež kaže da postoji.** {{ui:CAD count}} na traci lista broji blok po imenu (uključujući ugniježdene blokove, stanja dinamičkih blokova i nizove blokova), sve jednog tipa na sloju, ili vrijednost teksta ili atributa. Broji ono što list prikazuje ili cijeli crtež jednom. Dodavanje oznaka je jedan korak poništavanja, a ponovno brojanje dodaje samo ono što je novo. {{ui:Auto count}} ostaje za PDF-ove i za simbole koji nisu blokovi. Pogledajte [Brojanje iz crteža](topic:count-from-a-drawing).
- **Mjerite iz vlastitih linija crteža.** {{ui:Measure drawing}} uzima linije, lukove, polilinije, krugove, šrafure i solide koje kliknete ili označite prozorom kao oznake linijske ili površinske stavke. Lukovi, ispupčenja i rupe šrafura izlaze tačno; elipse i splajnovi mjere se fino tetivama, a traka to kaže. Pogledajte [Mjerenje iz crteža](topic:measure-from-a-drawing).

### Ponude

- **Koristite ponudu podizvođača kao cijenu paketa.** U {{ui:Export}} › {{ui:Bid packages and leveling…}} odaberite {{ui:Use}} na ponudi. Stavke paketa ostaju kao količine, jedna linija **Odabrana ponuda** nosi cijenu, stavke koje ponuda ne pokriva ostaju po vašoj cijeni, a na nju se primjenjuju režije, profit i garancija. Prebacivanje ponuda je jedan korak poništavanja; radna knjiga i sažetak ponuda ga nose. Pogledajte [Korištenje ponude kao cijene paketa](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Pošaljite paket na ponude.** {{ui:Send for bids…}} pod paketom šalje svakom podizvođaču link ka stranici kojoj ne treba nalog: vide obim i listove kao PDF, upisuju cijenu u svaku liniju ili označe da nije uključeno, dodaju napomene i do tri datoteke, ili odbijaju. {{ui:Get prices}} unosi što je stiglo u list za izjednačavanje, označeno **web**. Slanje je otvoreno samo nalozima koje je tim CadCraft omogućio dok se testira (vidi dolje). Pogledajte [Slanje paketa na ponude](topic:bid-invitations).
- **Zapečaćeno do otvaranja.** Cijene mogu ostati zapečaćene do termina otvaranja koji podesite: do tada cijenu ne vidi niko, ni vi. Na otvaranju se sve ponude prikazuju odjednom, a ponuda koja je stigla nakon roka označava se kao kasna. Pogledajte [Zapečaćene ponude i otvaranje](topic:bid-invitations#sealed-bids-and-the-opening).
- **Zapisi podizvođača.** Vaš nalog na getcadcraft.com čuva kontakte svake firme, djelatnosti, odgovore o kvalifikacijama, datume osiguranja i licenci (označene kad istekne ili u roku od 30 dana), zajedno s njihovim ranijim ponudama. Uvozite i izvozite ih kao CSV i birate ih kad šaljete paket. Pogledajte [Na web stranici](topic:bid-invitations#on-the-website).

### AI asistenti

- **Asistenti mogu dodavati u predmjer.** Uz označeno **Uređivanje**, vaš asistent može dodavati stavke (`items_add`) i mjeriti nizove, površine i brojanja na listu (`marks_add`; samo dužine i površine na razmjernom listu), a svaki poziv je jedan korak poništavanja.
- **Alati za crteže za asistente.** Na otvorenom DWG ili DXF crtežu asistent može navesti svoje listove i šta se može brojati, brojati tačno, dodati oznake brojanja i mjeriti iz geometrije crteža. Bez otvorenog TakeoffCraft-a, CadCraft MCP server otvara crtež kao novi predmjer i spašava ga, a `cadcraft count` broji iz komandne linije. Pogledajte [Šta asistent može tražiti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D pregled provjere kao USD.** {{ui:USD package (.usdz)}} uz {{ui:GLB}} u 3D pregledu provjere zapisuje svaki zid, ploču, lim, stub brojanja i niz kao zaseban objekat, nazvan po svojoj stavki i s količinom, u metrima. Asistent ga može izvesti i kao `usd_export`. Pogledajte [Izvoz 3D pregleda provjere kao USD](topic:usd).

## U svim aplikacijama

- **Jedinice.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, s tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je zasebna jedinica). Isključite jedinice koje nikad ne koristite i one nestaju iz listi; označite jednu i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U TakeoffCraft-u liste {{ui:Unit}} stavke prate ove prekidače, nova stavka počinje u označenoj jedinici dužine ili površine, krovni kvadrati (SQ), akri i hektari su nove jedinice površine, a polje za dužinu prihvata oznaku bilo koje jedinice, poput `3 yd`. Pogledajte [Jedinice, uneseni brojevi i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} stane više na ekran (ekrani osjetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da zakačite ili pustite da slobodno lebdi, prevucite je na traku drugog panela da dijele okvir kao kartice, zakačite je da kliže do ivice, ili sakrijte i vratite s ivice. Pogledajte [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomjeraju.** Prevucite dijalog za naslovnu traku izvan puta crtežu; vraća se tamo gdje ste ga ostavili. Dvaput kliknite naslovnu traku da ga ponovo centrirate. Pogledajte [Pomjeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset primjera zahtjeva za vašeg asistenta (srediti crtež, štampati skup, provjeriti crteže, postaviti pitanje modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dozvolama koje traži, a svaki ponovo izvodi naš test. Aplikacije ne sadrže AI. Pogledajte [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je nov u {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Taj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Tekstovi pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sistem, nema mreže, loš potpis) umjesto samo „Gotovo“, i prestaje vraćati karticu Šta je novo koju ste zatvorili dok ne bude novija verzija.

## Nije još u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su na 0.8 jer validacija certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalater, odaberite {{ui:More info}}, pa {{ui:Run anyway}}. Na Macu, prvi put, desni klik na CadCraft Studio i odaberite {{ui:Open}}. CadCraft Studio još nije u nijednoj prodavnici aplikacija, i još nema verzije za iPad ili iPhone.
- Liste uglova i nagiba u {{ui:Units}} se čuvaju, ali ih još ništa ne čita.
- **Pozivi na ponudu su isključeni za većinu naloga.** Dok se funkcija testira, pošta vanjskim ponuđačima ide samo sa naloga koje je tim CadCraft omogućio. Stranice ponuđača rade za svaki poziv koji je već poslan. Svi ostali: preuzmite {{ui:Scope CSV}}, pošaljite ga sami e-poštom i upišite ponude.
- Prozor CadCraft Studio još ne može slati pozive na ponudu: kaže da koristite TakeoffCraft u pregledniku. Otvaranje predmjera sa poslanim zahtjevima, izjednačavanje i odabir ponude rade u Studiu.
- Dopune, pisma o dodjeli, list obima koji svaki ponuđač potpisuje i automatski podsjetnici prije isteka datuma osiguranja nisu napravljeni. Odabrana ponuda ne mijenja cijenu područja ponude alternative.
- Crteži: tabele stilova štampanja i CTB datoteke se ne primjenjuju, binarni DXF se odbija (sačuvajte ga kao ASCII DXF ili DWG), povezani crteži se nalaze samo među otvorenim datotekama po nazivu, a PDF podloge, slike i OLE objekti u crtežu se ne crtaju niti broje. Brojevi i razmjere su provjereni na uzorcima crteža, još ne na crtežima sa stvarnog posla otvorenim u programu u kojem su napravljeni.
- Asistent može dodavati stavke i oznake, ali ne može pomjerati, mijenjati ni brisati oznake koje već postoje.

Sve ostalo je u [Nije još napravljeno](topic:not-built-yet).
