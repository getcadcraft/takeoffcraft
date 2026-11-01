---
title: Šta je novo u 0.7
summary: DWG i DXF crteži se otvaraju kao listovi sa sopstvenom razmerom, tačni brojevi i dužine iz samog crteža, izabrana ponuda podizvođača kao cena paketa, pozivi na ponudu sa zapečaćenim cenama, pomoćni alati za asistente za crteže i USD iz prikaza 3D provere.
keywords: šta je novo, beleške o izdanju, izmene, 0.7, verzija, nove funkcije, dwg, dxf, crtež, rasporedi, prostor modela, razmera crteža, brojanje iz crteža, cad brojanje, blokovi, dinamički blokovi, atributi, slojevi, spoljni crtež, xref, izmeri crtež, polilinija, šrafura, pdf sa oznakama, izabrana ponuda, koristi ponudu, pošalji za ponude, poziv na ponudu, zapečaćene ponude, otvaranje ponuda, kasna ponuda, podaci o podizvođačima, csv, asistent, mcp, usd, usdz, jedinice, liste jedinica, zbijeno, paneli, dijalozi, portugalski
from: ad4f0df1
---

Ovo je šta se promenilo u TakeoffCraft 0.7 u odnosu na 0.6. Crteži se sada otvaraju onakvi kakvi jesu, bez prethodnog štampanja u PDF, a paket ponude može da se pošalje podizvođačima i vrati sa cenama.

## Novo

### DWG i DXF crteži

- **Otvorite crtež kao listove.** {{ui:Otvori planove}} u grupi {{ui:Datoteka}} ({{key:Mod+O}}, ili prevucite datoteke) prihvata DWG i DXF crteže uz PDF-ove. Prostor modela i svaki raspored postaju listovi na listi {{ui:Listovi}}, a predmer može da obuhvati crteže i PDF-ove zajedno. Ništa se ne otprema. Pogledajte [Otvaranje DWG ili DXF crteža](topic:open-a-drawing).
- **Razmera dolazi iz crteža.** Raspored počinje sa razmerom svog najvećeg prozora pogleda, imenovanom kao unapred podešena kada to jeste, na primer 1/2" = 1'-0". Model počinje u jedinicama crteža. Crtež bez jedinica piše „Nema razmere“ dok ga ne kalibrišete. {{ui:Kalibriši}}, {{ui:Proveri}} i {{ui:Unapred podešeno}} i dalje imaju prednost. Pogledajte [Razmera](topic:open-a-drawing#the-scale).
- **Slojevi i povezani crteži.** {{ui:Slojevi}} na traci lista pokazuje ili skriva slojeve crteža. Slojevi koje je datoteka isključila ili zamrznula počinju sakriveni i ne broje se, osim ako ih sami ne izaberete. Povezani crtež (xref), otvoren uz crtež domaćin, crta se i broji tamo gde je umetnut; dok nije otvoren, statusna traka kaže šta nedostaje. Pogledajte [Slojevi](topic:open-a-drawing#layers).
- **PDF sa oznakama radi i iz crteža.** {{ui:Izvezi}} › {{ui:PDF sa oznakama}} prvo crta označene listove crteža kao PDF, pa kopija prikazuje vaše oznake i legendu bez koraka štampanja. Crta se crno ili u bojama crteža, bez tabela stilova štampanja. Pogledajte [PDF sa oznakama](topic:export-estimate#a-marked-pdf).

### Tačni brojevi i dužine iz crteža

- **Brojite ono što crtež kaže da postoji.** {{ui:CAD brojanje}} na traci lista broji blok po imenu (uključujući ugnježdene blokove, stanja dinamičkih blokova i nizove blokova), sve jednog tipa na jednom sloju, ili vrednost teksta ili atributa. Broji ono što list prikazuje ili ceo crtež jednom. Dodavanje oznaka je jedan korak poništavanja, a ponovno brojanje dodaje samo ono što je novo. {{ui:Automatsko brojanje}} ostaje za PDF-ove i za simbole koji nisu blokovi. Pogledajte [Brojanje iz crteža](topic:count-from-a-drawing).
- **Merite iz sopstvenih linija crteža.** {{ui:Izmeri crtež}} uzima linije, lukove, polilinije, krugove, šrafure i solide koje kliknete ili obuhvatite prozorom, kao oznake linijske ili površinske stavke. Lukovi, izbočine i rupe šrafure dolaze tačno; elipse i splajnovi mere se fino isečenim tetivama, a traka to kaže. Pogledajte [Merenje iz crteža](topic:measure-from-a-drawing).

### Ponude

- **Koristite ponudu podizvođača kao cenu paketa.** U {{ui:Izvezi}} › {{ui:Paketi ponuda i izravnanje…}} izaberite {{ui:Koristi}} uz ponudu. Stavke paketa ostaju kao količine, jedna linija **Izabrana ponuda** nosi cenu, stavke koje ponuda ne pokriva ostaju po vašoj ceni, a na nju se primenjuju režijski troškovi, dobit i garancija. Menjanje ponude je jedan korak poništavanja; radna sveska i sažetak ponuda to prenose. Pogledajte [Korišćenje ponude kao cene paketa](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Pošaljite paket na ponude.** {{ui:Pošalji za ponude…}} ispod paketa šalje svakom podizvođaču e-poštom vezu do stranice koja ne traži nalog: vide obim i listove kao PDF, upisuju cenu uz svaku liniju ili je označe kao nije uključeno, dodaju napomene i do tri datoteke, ili odbijaju. {{ui:Preuzmi cene}} prenosi ono što je stiglo na list izravnanja, označeno kao **web**. Slanje je otvoreno samo za naloge kojima je tim CadCraft omogućio korišćenje dok se funkcija testira (pogledajte dole). Pogledajte [Slanje paketa na ponude](topic:bid-invitations).
- **Zapečaćeno do otvaranja.** Cene mogu ostati zapečaćene do vremena otvaranja koje postavite: dotad ih niko ne vidi, ni vi. Pri otvaranju se sve ponude prikazuju odjednom, a ponuda koja je stigla posle roka označava se kao kasna. Pogledajte [Zapečaćene ponude i otvaranje](topic:bid-invitations#sealed-bids-and-the-opening).
- **Evidencija podizvođača.** Vaš nalog na getcadcraft.com čuva kontakte svake firme, delatnosti, odgovore o kvalifikacijama, i datume osiguranja i licenci (označeni kada isteknu ili uskoro ističu, u roku od 30 dana), sa njihovim ranijim ponudama. Uvozite ih i izvozite kao CSV i birate ih kada šaljete paket. Pogledajte [Na veb-sajtu](topic:bid-invitations#on-the-website).

### Asistenti zasnovani na veštačkoj inteligenciji

- **Asistenti mogu da dodaju u predmer.** Uz označeno **Uredi**, vaš sopstveni asistent može da dodaje stavke (`items_add`) i da meri linije, površine i brojanja na listu (`marks_add`; dužine i površine samo na listu sa razmerom), a svaki poziv je jedan korak poništavanja.
- **Alati za asistente za crteže.** Na otvorenom DWG ili DXF asistent može da navede listove i šta se može brojati, da broji tačno, da doda oznake brojanja i da meri iz geometrije crteža. Bez otvorenog programa TakeoffCraft, CadCraft MCP server otvara crtež kao novi predmer i čuva ga, a `cadcraft count` broji iz komandne linije. Pogledajte [Šta asistent može da traži](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Prikaz 3D provere kao USD.** {{ui:USD paket (.usdz)}} pored {{ui:GLB}} u prikazu 3D provere piše svaki zid, ploču, lim, stub za brojanje i liniju kao zaseban objekat, nazvan po svojoj stavki i sa svojom količinom, u metrima. Asistent ga takođe može izvesti (`usd_export`). Pogledajte [Izvoz prikaza 3D provere kao USD](topic:usd).

## U svim aplikacijama

- **Jedinice.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je sopstvena jedinica). Isključite jedinice koje nikad ne koristite i one nestaju iz lista jedinica; označite jednu zvezdicom i novi rad počinje u njoj. Datoteka uvek zadržava sopstvenu jedinicu. U TakeoffCraft-u liste {{ui:Jedinica}} stavke prate prekidače, nova stavka počinje u označenoj jedinici dužine ili površine, a rolne krovne žice (SQ), akri i hektari su nove jedinice površine. Polje dužine prihvata oznaku bilo koje jedinice, na primer `3 yd`. Pogledajte [Jedinice, unete vrednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se uredno sklanjaju.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stane više na ekran (ekrani osetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da biste ga priložili ili otkačili, prevucite je na naslovnu traku drugog panela da biste delili jedan okvir kao kartice, prikačite ga da kliznu do ivice, ili ga sakrijte i vratite sa ivice. Pogledajte [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomeraju.** Prevucite dijalog za njegovu naslovnu traku da ne smeta crtežu; vraća se tamo gde ste ga ostavili. Dvostrukim klikom na naslovnu traku ponovo ga centrirate. Pogledajte [Pomeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za asistente zasnovane na veštačkoj inteligenciji.** Deset primera zahteva za vašeg asistenta (srediti crtež, iscrtati skup, proveriti crteže, postaviti pitanje modelu, zbrojiti predmer, isprobati varijantu dela…), svaki sa alatima koje poziva i dozvolama koje mu trebaju, i svaki proveren našim testovima. Same aplikacije ne sadrže veštačku inteligenciju. Pogledajte [Recepti za asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je nov u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jezik}}. On, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku reč aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provera ažuriranja nije uspela (još nema datoteke za vaš sistem, nema mreže, loš potpis) umesto samo „Gotovo“, i prestaje da vraća karticu Šta je novo koju ste zatvorili dok ne postoji novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su u 0.8 jer provera sertifikata još nije stigla. Proverite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalater, izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, prvi put, kliknite desnim tasterom na CadCraft Studio i izaberite {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, a još nema verzije za iPad ili iPhone.
- Liste uglova i nagiba u {{ui:Jedinice}} se čuvaju, ali ih još nijedno polje ne čita.
- **Pozivi na ponudu su isključeni za većinu naloga.** Dok se funkcija testira, pošta spoljnim ponuđačima odlazi samo sa naloga kojima je tim CadCraft omogućio korišćenje. Stranice ponuđača rade za svaki poziv koji je već poslat. Svi ostali: preuzmite {{ui:CSV opsega}}, pošaljite ga e-poštom sami i upišite ponude.
- Prozor CadCraft Studio ne može još da šalje pozive na ponudu: kaže da koristite TakeoffCraft u pregledaču. Otvaranje predmera sa poslatim zahtevima, izravnanje i izbor ponude rade u Studio-u.
- Dodaci, pisma o dodeli, list obima koji svaki ponuđač potpisuje i automatski podsetnici pre isteka datuma osiguranja nisu napravljeni. Izabrana ponuda ne menja cenu oblasti ponude alternative.
- Crteži: tabele stilova štampanja i CTB datoteke se ne primenjuju, binarni DXF se odbija (sačuvajte ga kao ASCII DXF ili DWG), povezani crteži se traže samo među otvorenim datotekama po imenu, a PDF podloge, slike i OLE objekti u crtežu se ne crtaju niti broje. Brojanja i razmere su proverena na uzorcima crteža, još ne na crtežima sa stvarnog gradilišta otvorenim u programu u kojem su nastali.
- Asistent može da dodaje stavke i oznake, ali ne može da pomera, menja ili briše oznake koje već postoje.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet).
