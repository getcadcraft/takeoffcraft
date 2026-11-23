---
title: Novosti u 0.7 (ranije)
summary: DWG i DXF crteži otvaraju se kao listovi s vlastitim mjerilom, točne količine i duljine iz samog crteža, odabrana ponuda podizvođača kao cijena paketa, pozivi na ponude sa zapečaćenim cijenama, alati pomoćnika za crteže i USD iz 3D prikaza za provjeru.
keywords: novosti 0.7, ranije izdanje, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove značajke, dwg, dxf, crtež, layout, prostor modela, mjerilo crteža, brojanje iz crteža, cad brojanje, blokovi, dinamički blokovi, atributi, slojevi, xref, vanjska referenca, mjeri crtež, polilinija, šrafura, označeni pdf, odabrana ponuda, koristi ponudu, pošalji za ponude, poziv na ponudu, zapečaćene ponude, otvaranje ponuda, kasna ponuda, zapisi podizvođača, csv, pomoćnik, mcp, usd, usdz, jedinice, popisi jedinica, zbijeno, ploče, dijalozi, portugalski
from: 0e3a424f
---

Ovo je ono što se promijenilo u aplikaciji TakeoffCraft 0.7 u odnosu na 0.6. Crteži se sada otvaraju onakvi kakvi jesu, bez prethodnog ispisa u PDF, a paket ponude može se poslati podizvođačima i vratiti s cijenama.

## Novo

### DWG i DXF crteži

- **Otvorite crtež kao listove.** {{ui:Otvori nacrte}} u grupi {{ui:Datoteka}} ({{key:Mod+O}}, ili ispustite datoteke) prihvaća DWG i DXF crteže uz PDF-ove. Prostor modela i svaki layout postaju listovi u popisu {{ui:Listovi}}, a predmjer može obuhvatiti crteže i PDF-ove zajedno. Ništa se ne šalje. Pogledajte [Otvaranje DWG ili DXF crteža](topic:open-a-drawing).
- **Mjerilo dolazi iz crteža.** Layout počinje s mjerilom svog najvećeg prikaza (viewport), imenovanim kao predložak kad je takav, npr. 1/2" = 1'-0". Model počinje u jedinicama crteža. Crtež bez jedinica prikazuje „Nema mjerila“ dok ga ne kalibrirate. {{ui:Kalibriraj}}, {{ui:Provjeri}} i {{ui:Predložak}} i dalje imaju prednost. Pogledajte [Mjerilo](topic:open-a-drawing#the-scale).
- **Slojevi i vanjske reference.** {{ui:Slojevi}} na traci lista prikazuje ili skriva slojeve crteža. Slojevi koje je datoteka isključila ili zamrznula počinju skriveni i ne broje se, osim ako ih ne odaberete. Vanjski crtež (xref) otvoren uz svoj domaćin crta se i broji tamo gdje je umetnut; dok nije otvoren, statusna traka kaže što nedostaje. Pogledajte [Slojevi](topic:open-a-drawing#layers).
- **Označeni PDF radi iz crteža.** {{ui:Izvoz}} › {{ui:Označeni PDF}} najprije crta označene listove crteža kao PDF, pa primjerak prikazuje vaše oznake i legendu bez koraka ispisa. Crta se u crnoj ili bojama crteža, bez tablica stilova ispisa. Pogledajte [Označeni PDF](topic:export-estimate#a-marked-pdf).

### Točna brojanja i duljine iz crteža

- **Brojte ono što crtež kaže da postoji.** {{ui:CAD brojanje}} na traci lista broji blok po imenu (uključujući ugniježđene blokove, stanja dinamičkih blokova i nizove blokova), sve jednog tipa na sloju, ili vrijednost teksta ili atributa. Broji ono što list prikazuje ili cijeli crtež jednom. Dodavanje oznaka je jedan korak poništavanja, a ponovno brojanje dodaje samo ono što je novo. {{ui:Autobrojanje}} ostaje za PDF-ove i za simbole koji nisu blokovi. Pogledajte [Brojanje iz crteža](topic:count-from-a-drawing).
- **Mjerite iz vlastitih linija crteža.** {{ui:Mjeri crtež}} uzima linije, lukove, polilinije, kružnice, šrafure i puna tijela koje kliknete ili obuhvatite prozorom kao oznake linearne ili površinske stavke. Lukovi, ispupčenja i rupe šrafure izlaze točno; elipse i splineovi mjere se finim tetivama, a traka to kaže. Pogledajte [Mjerenje iz crteža](topic:measure-from-a-drawing).

### Ponude

- **Koristite ponudu podizvođača kao cijenu paketa.** U {{ui:Izvoz}} › {{ui:Paketi ponuda i izjednačavanje…}} odaberite {{ui:Koristi}} na ponudi. Stavke paketa ostaju kao količine, jedan redak **Odabrana ponuda** nosi cijenu, stavke koje ponuda izostavlja ostaju po vašem vlastitom trošku, a režije, dobit i jamstvo primjenjuju se na nju. Promjena ponude je jedan korak poništavanja; radna knjiga i sažetak ponuda to nose. Pogledajte [Upotreba ponude kao cijene paketa](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Pošaljite paket na ponude.** {{ui:Pošalji za ponude…}} ispod paketa šalje svakom podizvođaču e-poštom poveznicu na stranicu koja ne traži račun: vide opseg i listove kao PDF, upišu cijenu u svaki redak ili ga označe kao neuključen, dodaju napomene i do tri datoteke, ili odbiju. {{ui:Dohvati cijene}} prenosi što je stiglo u list za izjednačavanje, označeno **web**. Slanje je otvoreno samo računima koje je tim CadCraft omogućio dok se testira (vidi dolje). Pogledajte [Slanje paketa na ponude](topic:bid-invitations).
- **Zapečaćeno do otvaranja.** Cijene mogu ostati zapečaćene do vremena otvaranja koje postavite: do tada nitko ne vidi cijenu, ni vi. Pri otvaranju svaka ponuda prikazuje se odjednom, a ponuda koja je stigla nakon roka označava se kao kasna. Pogledajte [Zapečaćene ponude i otvaranje](topic:bid-invitations#sealed-bids-and-the-opening).
- **Zapisi podizvođača.** Vaš račun na getcadcraft.com čuva kontakte, djelatnosti, odgovore o kvalifikacijama te datume osiguranja i licenci (označene kad isteknu ili u roku od 30 dana) svake tvrtke, s njezinim prošlim ponudama. Uvoze se i izvoze kao CSV i biraju se pri slanju paketa. Pogledajte [Na web-stranici](topic:bid-invitations#on-the-website).

### AI pomoćnici

- **Pomoćnici mogu dodavati u predmjer.** Uz označeno **Uređivanje**, vaš vlastiti pomoćnik može dodavati stavke (`items_add`) i mjeriti dionice, površine i brojanja na listu (`marks_add`; duljine i površine samo na listu s mjerilom). Svaki poziv je jedan korak poništavanja.
- **Alati pomoćnika za crteže.** Na otvorenom DWG ili DXF-u pomoćnik može popisati njegove listove i što se može brojati, točno brojati, dodavati oznake brojanja i mjeriti iz geometrije crteža. Bez otvorenog TakeoffCrafta, CadCraft MCP poslužitelj otvara crtež kao novi predmjer i sprema ga, a `cadcraft count` broji iz naredbenog retka. Pogledajte [Što pomoćnik može zatražiti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Prikaz 3D provjere kao USD.** {{ui:USD paket (.usdz)}} uz {{ui:GLB}} u prikazu 3D provjere piše svaki zid, ploču, limenu ploču, stup brojanja i dionicu kao zaseban objekt, nazvan po svojoj stavci i s njezinom količinom, u metrima. I pomoćnik ga može izvesti (`usd_export`). Pogledajte [Izvoz 3D prikaza za provjeru kao USD](topic:usd).

## U svim aplikacijama

- **Jedinice.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}} ima po jedan popis za duljinu, površinu, volumen, kut i nagib, s točnim veličinama koje daju definicije jedinica (američka geodetska stopa ima vlastitu jedinicu). Isključite jedinice koje nikad ne koristite i one nestanu s popisa jedinica; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava vlastitu jedinicu. U TakeoffCraftu popisi {{ui:Jedinica}} stavke prate ove prekidače, nova stavka počinje u označenoj jedinici duljine ili površine, a krovni kvadrati (SQ), akeri i hektari nove su jedinice površine; polje za duljinu prihvaća oznaku bilo koje jedinice, npr. `3 yd`. Pogledajte [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).
- **Gušći raspored i ploče koje se sklanjaju.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Gustoća rasporeda}} › {{ui:Zbijeno}} stane više na zaslon (zasloni osjetljivi na dodir i telefoni zadržavaju velike gumbe). Svaka bočna ploča ima tanku naslovnu traku: povucite je da je usidrite ili odvojite, ispustite je na traku druge ploče da dijelite jedan okvir kao kartice, prikvačite je da kliže do ruba, ili je sakrijte i vratite s ruba. Pogledajte [Raspored ploča](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomiču.** Povucite dijaloški okvir za naslovnu traku izvan puta crtežu; vraća se tamo gdje ste ga ostavili. Dvostruki klik na naslovnu traku ponovno ga centrira. Pogledajte [Pomicanje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI pomoćnike.** Deset primjera zahtjeva za vašeg pomoćnika (urediti crtež, isplotati skup, provjeriti crteže, postaviti pitanja modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dopuštenjima koja treba, a svaki ponavljaju naši testovi. Aplikacije ne sadrže AI. Pogledajte [Recepti za AI pomoćnike](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novi u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jezik}}. Uz **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao radne verzije koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom jeziku.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sustav, nema mreže, neispravan potpis) umjesto samo „Gotovo“, i prestaje ponovno prikazivati karticu Što je novo koju ste zatvorili dok ne bude novija verzija.

## Još nije u ovoj verziji

- **0.7 nije potpisana kodom.** Potpisivanje i paket Microsoft Store prebačeni su u 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsima, ako SmartScreen zaustavi instalacijski program, odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu prvi put desnom tipkom kliknite CadCraft Studio i odaberite {{ui:Otvoreno}}. CadCraft Studio još nije u trgovinama aplikacija, a još nema verzije za iPad ili iPhone.
- Popisi za kut i nagib u {{ui:Jedinice}} se spremaju, ali ih još nijedno polje ne čita.
- **Pozivi na ponude isključeni su za većinu računa.** Dok se značajka testira, pošta vanjskim ponuditeljima odlazi samo s računa koje je tim CadCraft omogućio. Stranice ponuditelja rade za svaki poziv koji je već poslan. Svi ostali: preuzmite {{ui:CSV opsega}}, sami ga pošaljite e-poštom i upišite ponude.
- Prozor CadCraft Studija još ne može slati pozive na ponude: traži da se koristi TakeoffCraft u pregledniku. Otvaranje predmjera s poslanim zahtjevima, izjednačavanje i odabir ponude rade u Studiju.
- Dodaci, pisma o dodjeli, list opsega koji svaki ponuditelj potpisuje i automatski podsjetnici prije isteka datuma osiguranja još nisu izrađeni. Odabrana ponuda ne mijenja cijenu područja ponude alternative.
- Crteži: tablice stilova ispisa i CTB datoteke se ne primjenjuju, binarni DXF se odbija (spremite ga kao ASCII DXF ili DWG), vanjski crteži pronalaze se samo među otvorenim datotekama po nazivu, a PDF podloge, slike i OLE objekti u crtežu se ne crtaju niti broje. Brojanja i mjerila provjereni su na uzorcima crteža, još ne na crtežima iz stvarnog posla otvorenim u programu u kojem su nastali.
- Pomoćnik može dodavati stavke i oznake, ali ne može pomicati, mijenjati niti brisati oznake koje već postoje.

Sve ostalo nalazi se u [Još nije izrađeno](topic:not-built-yet).
