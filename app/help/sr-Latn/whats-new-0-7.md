---
title: Šta je novo u 0.7 (ranije)
summary: DWG i DXF crteži se otvaraju kao listovi sa sopstvenom razmerom, tačni brojevi i dužine iz samog crteža, izabrana ponuda podizvođača kao cena paketa, pozivi na ponude sa zapečaćenim cenama, alati asistenta za crteže i USD iz prikaza 3D provere.
keywords: šta je novo 0.7, ranije izdanje, beleške o izdanju, dnevnik promena, promene, 0.7, verzija, nove funkcije, dwg, dxf, crtež, rasporedi, prostor modela, razmera crteža, brojanje iz crteža, brojanje CAD-a, blokovi, dinamički blokovi, atributi, slojevi, xref, povezani crtež, merenje crteža, polilinija, šrafura, PDF sa oznakama, izabrana ponuda, koristi ponudu, pošalji za ponude, poziv na ponudu, zapečaćene ponude, otvaranje ponuda, kasna ponuda, evidencija podizvođača, csv, asistent, mcp, usd, usdz, jedinice, liste jedinica, zbijeno, paneli, dijalozi, portugalski
from: 0e3a424f
---

Ovo je šta se promenilo u TakeoffCraft-u 0.7, u odnosu na 0.6. Crteži se sada otvaraju onakvi kakvi jesu, bez štampanja u PDF pre toga, a paket ponude može da ode podizvođačima i da se vrati sa cenama.

## Novo

### DWG i DXF crteži

- **Otvori crtež kao listove.** {{ui:Otvori planove}} u grupi {{ui:Datoteka}} ({{key:Mod+O}}, ili prevuci datoteke) prihvata DWG i DXF crteže pored PDF-ova. Prostor modela i svaki raspored postaju listovi na spisku {{ui:Listovi}}, a predmer može da obuhvata crteže i PDF-ove zajedno. Ništa se ne otprema. Vidi [Otvaranje DWG ili DXF crteža](topic:open-a-drawing).
- **Razmera dolazi iz crteža.** Raspored počinje sa razmerom svog najvećeg prozora pogleda, imenovanom kao unapred podešena kada to jeste, na primer 1/2" = 1'-0". Model počinje u jedinicama crteža. Crtež bez jedinica piše „Nema razmere” dok ga ne kalibrišeš. {{ui:Kalibriši}}, {{ui:Proveri}} i {{ui:Unapred podešeno}} i dalje imaju prednost. Vidi [Razmera](topic:open-a-drawing#the-scale).
- **Slojevi i povezani crteži.** {{ui:Slojevi}} na traci lista prikazuje ili sakriva slojeve crteža. Slojevi koje je datoteka isključila ili zamrznula počinju sakriveni i ne broje se, osim ako ih sam ne izabereš. Povezani crtež (xref) otvoren uz svoj matični crtež crta se i broji tamo gde je umetnut; dok nije otvoren, statusna traka kaže šta nedostaje. Vidi [Slojevi](topic:open-a-drawing#layers).
- **PDF sa oznakama radi i iz crteža.** {{ui:Izvezi}} › {{ui:PDF sa oznakama}} prvo crta označene listove crteža kao PDF, pa kopija prikazuje tvoje oznake i legendu bez koraka štampanja. Crta se u crnoj boji ili bojama crteža, bez tabela stilova štampanja. Vidi [PDF sa oznakama](topic:export-estimate#a-marked-pdf).

### Tačni brojevi i dužine iz crteža

- **Broji ono što crtež kaže da postoji.** {{ui:Brojanje CAD-a}} na traci lista broji blok po imenu (uključujući ugnježdene blokove, stanja dinamičkih blokova i nizove blokova), sve jednog tipa na sloju, ili vrednost teksta ili atributa. Broji ono što list prikazuje ili ceo crtež jednom. Dodavanje oznaka je jedan korak opozivanja, a ponovno brojanje dodaje samo ono što je novo. {{ui:Automatsko brojanje}} ostaje za PDF-ove i za simbole koji nisu blokovi. Vidi [Brojanje iz crteža](topic:count-from-a-drawing).
- **Meri iz sopstvenih linija crteža.** {{ui:Izmeri crtež}} uzima linije, lukove, polilinije, krugove, šrafure i tela koje klikneš ili obuhvatiš prozorom kao oznake linijske ili površinske stavke. Lukovi, ispupčenja i rupe šrafure izlaze tačno; elipse i splajnovi mere se u sitnim tetivama, a traka to kaže. Vidi [Merenje iz crteža](topic:measure-from-a-drawing).

### Ponude

- **Koristi ponudu podizvođača kao cenu paketa.** U {{ui:Izvezi}} › {{ui:Paketi ponuda i izravnanje…}} izaberi {{ui:Koristi}} uz ponudu. Stavke paketa ostaju kao količine, jedna linija **Izabrana ponuda** nosi cenu, stavke koje ponuda izostavlja ostaju po tvojoj ceni, a na nju se primenjuju režijski troškovi, dobit i garancija. Promena ponude je jedan korak opozivanja; radna sveska i sažetak ponuda to prenose. Vidi [Koristi ponudu kao cenu paketa](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Pošalji paket na ponude.** {{ui:Pošalji za ponude…}} ispod paketa šalje svakom podizvođaču e-poštom link ka stranici kojoj nije potreban nalog: vide opseg i listove kao PDF, upisuju cenu u svaku liniju ili je označavaju kao neuključenu, dodaju napomene i do tri datoteke, ili odbijaju. {{ui:Preuzmi cene}} prenosi ono što se vratilo na list za izravnanje, označeno sa **web**. Slanje je otvoreno samo za naloge koje je tim CadCraft-a uključio dok se funkcija testira (vidi dole). Vidi [Pošalji paket na ponude](topic:bid-invitations).
- **Zapečaćeno do otvaranja.** Cene mogu ostati zapečaćene do vremena otvaranja koje postaviš: do tada cenu ne vidi niko, ni ti. Na otvaranju se sve ponude prikazuju odjednom, a ponuda koja je stigla posle roka označava se kao kasna. Vidi [Zapečaćene ponude i otvaranje](topic:bid-invitations#sealed-bids-and-the-opening).
- **Evidencija podizvođača.** Tvoj nalog na getcadcraft.com čuva kontakte svake firme, delatnosti, odgovore na kvalifikacije i datume osiguranja i licenci (označeno kada su prošli ili su unutar 30 dana), zajedno sa njihovim ranijim ponudama. Uvozi ih i izvozi kao CSV i bira ih kada šalješ paket. Vidi [Na sajtu](topic:bid-invitations#on-the-website).

### AI asistenti

- **Asistenti mogu da dodaju u predmer.** Uz označeno **Izmena**, tvoj asistent može da dodaje stavke (`items_add`) i meri dužine, površine i brojeve na listu (`marks_add`; dužine i površine samo na listu sa razmerom), svaki poziv je jedan korak opozivanja.
- **Alati asistenta za crteže.** Na otvorenom DWG ili DXF asistent može da navede svoje listove i šta se može brojati, broji tačno, dodaje oznake brojanja i meri iz geometrije crteža. Bez otvorenog TakeoffCraft-a, CadCraft MCP server otvara crtež kao novi predmer i čuva ga, a `cadcraft count` broji iz komandne linije. Vidi [Šta asistent može da zatraži](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D prikaz provere kao USD.** {{ui:USD paket (.usdz)}} pored {{ui:GLB}} u prikazu 3D provere upisuje svaki zid, ploču, lim, stub brojanja i pravac kao poseban objekat, nazvan po svojoj stavci i sa svojom količinom, u metrima. I asistent može to da izveze (`usd_export`). Vidi [Izvoz prikaza 3D provere u USD](topic:usd).

## U svim aplikacijama

- **Jedinice.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jedan spisak za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je sopstvena jedinica). Isključi jedinice koje nikad ne koristiš i one napuštaju spiskove jedinica; označi jednu zvezdicom i novi rad počinje u njoj. Datoteka uvek zadržava svoju jedinicu. U TakeoffCraft-u spiskovi {{ui:Jedinica}} stavke prate prekidače, nova stavka počinje u označenoj jedinici dužine ili površine, krovne kvadrate (SQ), akri i hektari su nove jedinice površine, a polje za dužinu prihvata oznaku bilo koje jedinice, na primer `3 yd`. Vidi [Jedinice, uneseni brojevi i spiskovi jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stane više na ekran (ekrani osetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevuci je da prikačiš ili otkačiš panel, pusti je na traku drugog panela da delite jedan okvir kao kartice, zakači je da kliznu do ivice, ili sakrij i vrati sa ivice. Vidi [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomeraju.** Prevuci dijalog za naslovnu traku van puta crteža; vraća se tamo gde si ga ostavio. Dvoklik na naslovnu traku ponovo ga centrira. Vidi [Pomeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset primera zahteva za tvog asistenta (urediti crtež, isplotovati set, proveriti crteže, postaviti pitanja modelu, sabrati predmer, isprobati varijantu dela…), svaki sa alatima koje poziva i dozvolama koje mu treba, a svaki ponovo proveravaju naši testovi. Same aplikacije ne sadrže AI. Vidi [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novo u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jezik}}. On, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku reč aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Stranice pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provera ažuriranja nije uspela (još nema datoteke za tvoj sistem, nema mreže, loš potpis), umesto samo „Gotovo”, i prestaje da vraća karticu Šta je novo koju si zatvorio dok ne postoji novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store pomereni su na 0.8, jer provera sertifikata još nije stigla. Proveri SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalater, izaberi {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, prvi put, desnim klikom klikni na CadCraft Studio i izaberi {{ui:Otvoreno}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema verzije za iPad ili iPhone.
- Spiskovi uglova i nagiba u {{ui:Jedinice}} se čuvaju, ali ih još nijedno polje ne čita.
- **Pozivi na ponude su isključeni za većinu naloga.** Dok se funkcija testira, pošta spoljnim ponuđačima ide samo sa naloga koje je tim CadCraft-a uključio. Stranice ponuđača rade za svaki poziv koji je već poslat. Svi ostali: preuzmi {{ui:CSV opsega}}, pošalji ga e-poštom sam i upiši ponude.
- Prozor CadCraft Studija ne može još da šalje pozive na ponude: kaže da koristiš TakeoffCraft u pregledaču. Otvaranje predmera sa poslatim zahtevima, izravnanje i izbor ponude rade u Studiju.
- Dodaci, pisma o dodeli, list opsega koji svaki ponuđač potpisuje i automatski podsetnici pre isteka datuma osiguranja nisu napravljeni. Izabrana ponuda ne menja cenu površine alternative ponuđača.
- Crteži: tabele stilova štampanja i CTB datoteke se ne primenjuju, binarni DXF se odbija (sačuvaj ga kao ASCII DXF ili DWG), povezani crteži se nalaze samo među otvorenim datotekama po imenu, a PDF podloge, slike i OLE objekti u crtežu se ne crtaju niti broje. Brojevi i razmere su proverene na uzorcima crteža, još ne na crtežima iz stvarnog posla otvorenim u programu u kome su napravljeni.
- Asistent može da dodaje stavke i oznake, ali ne može da pomera, menja ili briše oznake koje već postoje.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet).
