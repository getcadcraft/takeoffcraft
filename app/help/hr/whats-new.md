---
title: Što je novo u 0.7
summary: DWG i DXF crteži otvaraju se kao listovi s vlastitim mjerilom, točnim brojanjima i duljinama iz samog crteža, odabrana ponuda podizvođača kao cijena paketa, pozivi za ponude sa zapečaćenim cijenama, alati za pomoćnike za crteže i USD iz 3D prikaza za provjeru.
keywords: što je novo, novosti, napomene uz izdanje, popis promjena, promjene, 0.7, verzija, nove značajke, dwg, dxf, crtež, layouti, prostor modela, mjerilo crteža, brojanje iz crteža, cad brojanje, blokovi, dinamički blokovi, atributi, slojevi, xref, vanjska referenca, mjeri crtež, polilinija, šrafura, označeni pdf, odabrana ponuda, koristi ponudu, pošalji za ponude, poziv za ponudu, zapečaćene ponude, otvaranje ponuda, zakašnjela ponuda, zapisi podizvođača, csv, pomoćnik, mcp, usd, usdz, jedinice, popisi jedinica, zbijeno, ploče, dijalozi, portugalski
from: ad4f0df1
---

Ovo se promijenilo u TakeoffCraftu 0.7 u odnosu na 0.6. Crteži se sada otvaraju kakvi jesu, bez prethodnog plotanja u PDF, a paket ponuda može otići podizvođačima i vratiti se s cijenama.

## Novo

### DWG i DXF crteži

- **Otvorite crtež kao listove.** {{ui:Otvori nacrte}} u grupi {{ui:Datoteka}} ({{key:Mod+O}} ili ispustite datoteke) prima DWG i DXF crteže uz PDF-ove. Prostor modela i svaki layout postaju listovi u popisu {{ui:Listovi}}, a predmjer može obuhvaćati crteže i PDF-ove zajedno. Ništa se ne šalje. Pogledajte [Otvorite DWG ili DXF crtež](topic:open-a-drawing).
- **Mjerilo dolazi iz crteža.** Layout počinje na mjerilu svog najvećeg viewporta, imenovanom kao predložak kad to jest, poput 1/2" = 1'-0". Model počinje u jedinicama crteža. Crtež bez jedinica kaže „Bez mjerila“ dok ga ne kalibrirate. {{ui:Kalibriraj}}, {{ui:Provjeri}} i {{ui:Predložak}} i dalje pobjeđuju. Pogledajte [Mjerilo](topic:open-a-drawing#the-scale).
- **Slojevi i vanjske reference.** {{ui:Slojevi}} na traci lista prikazuje ili skriva slojeve crteža. Slojevi koje je datoteka isključila ili zamrznula počinju skriveni i ne broje se osim ako to ne odaberete. Vanjska referenca (xref) otvorena uz svoj matični crtež crta se i broji ondje gdje je umetnuta; dok nije otvorena, statusna traka kaže što nedostaje. Pogledajte [Slojevi](topic:open-a-drawing#layers).
- **Označeni PDF radi iz crteža.** {{ui:Izvezi}} › {{ui:Označeni PDF}} prvo crta označene listove crteža kao PDF, pa kopija prikazuje vaše oznake i legendu bez koraka plotanja. Crta se crno ili bojama crteža, bez tablica stilova plotanja. Pogledajte [Označeni PDF](topic:export-estimate#a-marked-pdf).

### Točna brojanja i duljine iz crteža

- **Brojite ono što crtež kaže da postoji.** {{ui:CAD brojanje}} na traci lista broji blok po imenu (uključujući ugniježđene blokove, stanja dinamičkih blokova i nizove blokova), sve jedne vrste na sloju ili vrijednost teksta ili atributa. Broji ono što list prikazuje ili cijeli crtež jednom. Dodavanje oznaka je jedan korak poništavanja, a ponovno brojanje dodaje samo ono što je novo. {{ui:Autobrojanje}} ostaje za PDF-ove i za simbole koji nisu blokovi. Pogledajte [Brojanje iz crteža](topic:count-from-a-drawing).
- **Mjerite iz vlastitih linija crteža.** {{ui:Mjeri crtež}} uzima linije, lukove, polilinije, kružnice, šrafure i tijela koje kliknete ili obuhvatite prozorom kao oznake linearne stavke ili stavke površine. Lukovi, izbočenja i rupe šrafure izlaze točno; elipse i spline-ovi mjere se sitnim tetivama, a traka to kaže. Pogledajte [Mjerenje iz crteža](topic:measure-from-a-drawing).

### Ponude

- **Koristite ponudu podizvođača kao cijenu paketa.** U {{ui:Izvezi}} › {{ui:Paketi ponuda i izjednačavanje…}} odaberite {{ui:Koristi}} na ponudi. Stavke paketa ostaju kao količine, jedan redak **Odabrana ponuda** nosi cijenu, stavke koje ponuda izostavlja ostaju na vašem trošku, a režija, dobit i jamstvo primjenjuju se na nju. Zamjena ponuda je jedan korak poništavanja; radna knjiga i sažetak ponuda je nose. Pogledajte [Koristite ponudu kao cijenu paketa](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Pošaljite paket za ponude.** {{ui:Pošalji za ponude…}} ispod paketa šalje e-poštom svakom podizvođaču poveznicu na stranicu koja ne treba račun: vide opseg i listove kao PDF, upisuju cijenu na svakom retku ili ga označe kao neuključenog, dodaju napomene i do tri datoteke ili odbiju. {{ui:Dohvati cijene}} povlači ono što se vratilo u list izjednačavanja, označeno **web**. Slanje je otvoreno samo računima koje je tim CadCrafta omogućio dok se testira (pogledajte dolje). Pogledajte [Pošaljite paket za ponude](topic:bid-invitations).
- **Zapečaćeno do otvaranja.** Cijene mogu ostati zapečaćene do vremena otvaranja koje postavite: do tada nitko ne vidi cijenu, ni vi. Pri otvaranju se svaka ponuda prikazuje odjednom, a ponuda koja je stigla nakon roka označena je kao zakašnjela. Pogledajte [Zapečaćene ponude i otvaranje](topic:bid-invitations#sealed-bids-and-the-opening).
- **Zapisi podizvođača.** Vaš račun na getcadcraft.com čuva kontakte svake tvrtke, struke, odgovore o kvalifikaciji te datume osiguranja i licenci (označene kad su prošli ili unutar 30 dana), s njihovim prošlim ponudama. Uvezite i izvezite ih kao CSV i odaberite ih kad šaljete paket. Pogledajte [Na web-mjestu](topic:bid-invitations#on-the-website).

### AI pomoćnici

- **Pomoćnici mogu dodavati u predmjer.** S označenim **Uređivanje**, vaš vlastiti pomoćnik može dodavati stavke (`items_add`) i mjeriti dionice, površine i brojanja na listu (`marks_add`; duljine i površine samo na listu s mjerilom), svaki poziv je jedan korak poništavanja.
- **Alati za pomoćnike za crteže.** Na otvorenom DWG-u ili DXF-u pomoćnik može navesti njegove listove i ono što se može brojati, točno brojati, dodati oznake brojanja i mjeriti iz geometrije crteža. Bez otvorenog TakeoffCrafta, CadCraft MCP poslužitelj otvara crtež kao novi predmjer i sprema ga, a `cadcraft count` broji iz naredbenog retka. Pogledajte [Što pomoćnik može tražiti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D prikaz za provjeru kao USD.** {{ui:USD paket (.usdz)}} uz {{ui:GLB}} u 3D prikazu za provjeru zapisuje svaki zid, ploču, pločicu, stup brojanja i dionicu kao zaseban objekt, imenovan prema svojoj stavci i s njezinom količinom, u metrima. Pomoćnik ga također može izvesti (`usd_export`). Pogledajte [Izvezite 3D prikaz za provjeru kao USD](topic:usd).

## U svim aplikacijama

- **Jedinice.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}} ima po jedan popis za duljinu, površinu, obujam, kut i nagib, s točnim veličinama koje daju definicije jedinica (američka geodetska stopa je zasebna jedinica). Isključite jedinice koje nikad ne koristite i one nestaju iz popisa jedinica; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava vlastitu jedinicu. U TakeoffCraftu popisi {{ui:Jedinica}} stavke prate prekidače, nova stavka počinje u jedinici duljine ili površine označenoj zvjezdicom, krovni kvadrati (SQ), jutra i hektari su nove jedinice površine, a okvir za duljinu prima oznaku bilo koje jedinice, poput `3 yd`. Pogledajte [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).
- **Gušći raspored i ploče koje se sklanjaju.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Gustoća rasporeda}} › {{ui:Zbijeno}} smješta više na zaslon (zasloni osjetljivi na dodir i telefoni zadržavaju velike gumbe). Svaka bočna ploča ima usku naslovnu traku: povucite je da ploču usidrite ili odvojite, ispustite je na traku druge ploče da dijele jedan okvir kao kartice, prikvačite je da se sklanja uz rub ili je sakrijte i vratite s ruba. Pogledajte [Rasporedite ploče](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomiču.** Povucite dijalog za njegovu naslovnu traku izvan puta crtežu; vraća se tamo gdje ste ga ostavili. Dvaput kliknite naslovnu traku da ga ponovno centrirate. Pogledajte [Pomaknite dijalog](common:arrange-panels#move-a-dialog).
- **Recepti za AI pomoćnike.** Deset razrađenih zahtjeva za vašeg vlastitog pomoćnika (urediti crtež, isplotati komplet, provjeriti crteže, postaviti pitanja o modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dozvolama koje treba, i svaki ponovno odigran našim testovima. Aplikacije ne sadrže umjetnu inteligenciju. Pogledajte [Recepti za AI pomoćnike](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novi u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jezik}}. On, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao radne verzije koje još nije pregledao izvorni govornik. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sustav, nema mreže, neispravan potpis) umjesto samo „Gotovo“ i prestaje vraćati karticu Što je novo koju ste zatvorili dok ne izađe novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su u 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 pored svake datoteke na getcadcraft.com/download. Na Windowsima, ako SmartScreen zaustavi instalacijski program, odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu, prvi put, desnom tipkom miša kliknite CadCraft Studio i odaberite {{ui:Otvori}}. CadCraft Studio još nije u trgovini aplikacija, a još nema ni izdanja za iPad ili iPhone.
- Popisi kuta i nagiba u {{ui:Jedinice}} se spremaju, ali ih još nijedno polje ne čita.
- **Pozivi za ponude isključeni su za većinu računa.** Dok se značajka testira, pošta vanjskim ponuditeljima odlazi samo s računa koje je tim CadCrafta omogućio. Stranice ponuditelja rade za svaki već poslani poziv. Svi ostali: preuzmite {{ui:CSV opsega}}, pošaljite ga sami e-poštom i upišite ponude.
- Prozor CadCraft Studija još ne može slati pozive za ponude: kaže da koristite TakeoffCraft u pregledniku. Otvaranje predmjera s poslanim zahtjevima, izjednačavanje i odabir ponude rade u Studiju.
- Dodaci ugovoru, pisma o dodjeli, list opsega koji svaki ponuditelj potvrđuje i automatski podsjetnici prije isteka datuma osiguranja nisu izrađeni. Odabrana ponuda ne preračunava cijenu područja ponude alternative.
- Crteži: tablice stilova plotanja i CTB datoteke se ne primjenjuju, binarni DXF se odbija (spremite ga kao ASCII DXF ili DWG), vanjske reference pronalaze se samo među otvorenim datotekama po imenu datoteke, a PDF podloge, slike i OLE objekti u crtežu ne crtaju se niti broje. Brojanja i mjerila provjerena su na primjerima crteža, a ne još na crtežima iz stvarnog posla otvorenima u programu koji ih je izradio.
- Pomoćnik može dodavati stavke i oznake, ali ne može pomicati, mijenjati ni brisati oznake koje već postoje.

Sve ostalo je u temi [Još nije izrađeno](topic:not-built-yet).
