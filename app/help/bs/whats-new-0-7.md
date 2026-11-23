---
title: Novo u verziji 0.7 (ranije)
summary: DWG i DXF crteži se otvaraju kao listovi sa vlastitom razmjerom, tačne količine i dužine iz samog crteža, izabrana ponuda podizvođača kao cijena paketa, pozivnice za ponude sa zapečaćenim cijenama, alati za asistente za crteže i USD iz prikaza 3D provjere.
keywords: novo u 0.7, ranije izdanje, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove funkcije, dwg, dxf, crtež, izgledi, prostor modela, razmjera crteža, brojanje iz crteža, cad brojanje, blokovi, dinamički blokovi, atributi, slojevi, xref, povezani crtež, mjerenje crteža, polilinija, šrafura, označeni pdf, izabrana ponuda, koristi ponudu, pošalji na ponude, pozivnica za ponudu, zapečaćene ponude, otvaranje ponuda, kasna ponuda, podaci o podizvođačima, csv, asistent, mcp, usd, usdz, jedinice, liste jedinica, zbijeno, paneli, dijalozi, portugalski
from: 0e3a424f
---

Ovo je šta se promijenilo u TakeoffCraft-u 0.7, u odnosu na 0.6. Crteži se sada otvaraju onakvi kakvi jesu, bez prethodnog štampanja u PDF, a paket ponude može otići podizvođačima i vratiti se s cijenama.

## Novo

### DWG i DXF crteži

- **Otvorite crtež kao listove.** {{ui:Otvori planove}} u grupi {{ui:Datoteka}} ({{key:Mod+O}}, ili prevucite datoteke) prihvata DWG i DXF crteže pored PDF-ova. Prostor modela i svaki izgled postaju listovi u spisku {{ui:Listovi}}, a predmjer može obuhvatiti crteže i PDF-ove zajedno. Ništa se ne šalje. Pogledajte [Otvaranje DWG ili DXF crteža](topic:open-a-drawing).
- **Razmjera dolazi iz crteža.** Izgled počinje u razmjeri svog najvećeg prozora, imenovanoj kao unaprijed zadana kad to jeste, npr. 1/2" = 1'-0". Model počinje u jedinicama crteža. Crtež bez jedinica pokazuje „Bez razmjere” dok ga ne kalibrišete. {{ui:Kalibriraj}}, {{ui:Provjeri}} i {{ui:Unaprijed zadana}} i dalje imaju prednost. Pogledajte [Razmjera](topic:open-a-drawing#the-scale).
- **Slojevi i povezani crteži.** {{ui:Slojevi}} na traci lista pokazuje ili skriva slojeve crteža. Slojevi koje je datoteka isključila ili zamrznula počinju skriveni i ne broje se osim ako ne izaberete drugačije. Povezani crtež (xref) otvoren uz svoj domaćin crta se i broji tamo gdje je umetnut; dok nije otvoren, statusna traka kaže šta nedostaje. Pogledajte [Slojevi](topic:open-a-drawing#layers).
- **Označeni PDF radi iz crteža.** {{ui:Izvoz}} › {{ui:Označeni PDF}} prvo iscrta označene listove crteža kao PDF, pa primjerak pokazuje vaše oznake i legendu bez koraka štampanja. Crta se crno ili u bojama crteža, bez tabela stilova štampanja. Pogledajte [Označeni PDF](topic:export-estimate#a-marked-pdf).

### Tačne količine i dužine iz crteža

- **Brojite ono što crtež kaže da postoji.** {{ui:Brojanje CAD-a}} na traci lista broji blok po imenu (uključujući ugniježdene blokove, stanja dinamičkih blokova i nizove blokova), sve jednog tipa na sloju, ili vrijednost teksta ili atributa. Broji ono što list prikazuje ili cijeli crtež jednom. Dodavanje oznaka je jedan korak poništavanja, a ponovno brojanje dodaje samo ono što je novo. {{ui:Auto brojanje}} ostaje za PDF-ove i za simbole koji nisu blokovi. Pogledajte [Brojanje iz crteža](topic:count-from-a-drawing).
- **Mjerite iz vlastitih linija crteža.** {{ui:Izmjeri crtež}} uzima linije, lukove, polilinije, krugove, šrafure i solide koje kliknete ili označite prozorom kao oznake linearne ili površinske stavke. Lukovi, ispupčenja i rupe šrafure dolaze tačno; elipse i splajnovi mjere se fino po tetivama, a traka to kaže. Pogledajte [Mjerenje iz crteža](topic:measure-from-a-drawing).

### Ponude

- **Koristite ponudu podizvođača kao cijenu paketa.** U {{ui:Izvoz}} › {{ui:Paketi ponude i izjednačavanje…}}, izaberite {{ui:Koristi}} na ponudi. Stavke paketa ostaju kao količine, jedna linija **Izabrana ponuda** nosi cijenu, stavke koje ponuda ne pokriva ostaju po vašoj cijeni, a na nju se primjenjuju režije, profit i garancija. Promjena ponude je jedan korak poništavanja; radna knjiga i sažetak ponude to nose. Pogledajte [Koristite ponudu kao cijenu paketa](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Pošaljite paket na ponude.** {{ui:Pošalji na ponude…}} ispod paketa šalje svakom podizvođaču e-poštom link do stranice koja ne traži nalog: vide opseg i listove kao PDF, upišu cijenu na svaku liniju ili je označe kao neuključenu, dodaju napomene i do tri datoteke, ili odbiju. {{ui:Preuzmi cijene}} prenosi ono što je stiglo u list za izjednačavanje, označeno **web**. Slanje je otvoreno samo za naloge koje je tim CadCraft-a uključio dok se funkcija testira (pogledajte dolje). Pogledajte [Pošaljite paket na ponude](topic:bid-invitations).
- **Zapečaćeno do otvaranja.** Cijene mogu ostati zapečaćene do vremena otvaranja koje postavite: do tada ih niko ne vidi, ni vi. Na otvaranju se sve ponude prikazuju odjednom, a ponuda koja je stigla nakon roka označava se kao kasna. Pogledajte [Zapečaćene ponude i otvaranje](topic:bid-invitations#sealed-bids-and-the-opening).
- **Podaci o podizvođačima.** Vaš nalog na getcadcraft.com čuva kontakte svake firme, djelatnosti, odgovore o kvalifikacijama i datume osiguranja i licence (označene kad prođu ili kad isteknu u roku od 30 dana), zajedno s prošlim ponudama. Uvozite ih i izvozite kao CSV, i biraju se kad šaljete paket. Pogledajte [Na web stranici](topic:bid-invitations#on-the-website).

### AI asistenti

- **Asistenti mogu dodavati u predmjer.** Sa označenim **Uređivanje**, vaš asistent može dodavati stavke (`items_add`) i mjeriti linijske dionice, površine i brojanja na listu (`marks_add`; dužine i površine samo na listu sa razmjerom), a svaki poziv je jedan korak poništavanja.
- **Alati za asistente za crteže.** Na otvorenom DWG ili DXF asistent može navesti listove i šta se može brojati, brojati tačno, dodavati oznake brojanja i mjeriti iz geometrije crteža. Bez otvorenog TakeoffCraft-a, CadCraft MCP server otvara crtež kao novi predmjer i čuva ga, a `cadcraft count` broji iz komandne linije. Pogledajte [Šta asistent može zatražiti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Prikaz 3D provjere kao USD.** {{ui:USD paket (.usdz)}} pored {{ui:GLB}} u prikazu 3D provjere zapisuje svaki zid, ploču, lim, stub brojanja i dionicu kao zaseban objekat, nazvan po svojoj stavci i s njenom količinom, u metrima. Asistent to također može izvesti (`usd_export`). Pogledajte [Izvoz prikaza 3D provjere kao USD](topic:usd).

## U svakoj aplikaciji

- **Jedinice.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je posebna jedinica). Isključite jedinice koje nikad ne koristite i one nestaju iz listi; označite jednu i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U TakeoffCraft-u liste {{ui:Jedinica}} stavke prate prekidače, nova stavka počinje u označenoj jedinici dužine ili površine, a jedinice krovnih kvadrata (SQ), akri i hektari su nove jedinice površine. Polje za dužinu prihvata oznaku bilo koje jedinice, kao `3 yd`. Pogledajte [Jedinice, unesene vrijednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se uredno sklanjaju.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stane više na ekran (ekrani osjetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku traku naslova: prevucite je da usidrite ili otkačite panel, spustite je na traku drugog panela da dijelite jedan okvir kao kartice, zakačite je da se izvuče do ivice, ili sakrijte panel i vratite ga s ivice. Pogledajte [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomjeraju.** Prevucite dijalog za njegovu traku naslova izvan puta crteža; vraća se tamo gdje ste ga ostavili. Dvostruki klik na traku naslova ponovo ga centrira. Pogledajte [Pomjeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset primjera zahtjeva za vaš asistent (urediti crtež, isplotovati set, provjeriti crteže, postaviti pitanje modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki sa alatima koje poziva i dozvolama koje treba, i svaki ponovo pokrenut našim testovima. Aplikacije ne sadrže AI. Pogledajte [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novi u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jezik}}. Taj jezik, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Tekst pomoći je na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sistem, nema mreže, loš potpis), umjesto samo „Gotovo”, i prestaje ponovo prikazivati karticu Šta je novo koju ste zatvorili dok ne postoji novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su u 0.8 jer validacija certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalater, izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Macu, prvi put, desnim klikom kliknite CadCraft Studio i izaberite {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema izgrađene verzije za iPad ili iPhone.
- Liste uglova i nagiba u {{ui:Jedinice}} se čuvaju, ali ih još ništa ne čita.
- **Pozivnice za ponude su isključene za većinu naloga.** Dok se funkcija testira, pošta vanjskim ponuđačima ide samo sa naloga koje je tim CadCraft-a uključio. Stranice ponuđača rade za svaku pozivnicu koja je već poslana. Svi ostali: preuzmite {{ui:Opseg CSV}}, pošaljite ga e-poštom sami i upišite ponude.
- Prozor CadCraft Studio ne može još slati pozivnice za ponude: kaže da koristite TakeoffCraft u pregledaču. Otvaranje predmjera s poslatim zahtjevima, izjednačavanje i izbor ponude rade u Studiju.
- Dodaci, pisma o dodjeli, list opsega koji svaki ponuđač potpisuje i automatski podsjetnici prije isteka datuma osiguranja nisu izgrađeni. Izabrana ponuda ne mijenja cijenu područja alternativne ponude.
- Crteži: tabele stilova štampanja i CTB datoteke se ne primjenjuju, binarni DXF se odbija (sačuvajte ga kao ASCII DXF ili DWG), povezani crteži se traže samo među otvorenim datotekama po imenu, a PDF podloge, slike i OLE objekti u crtežu se ne crtaju niti broje. Brojanja i razmjere provjereni su na primjer crtežima, ali još ne na crtežima sa pravog posla otvorenim u programu u kojem su napravljeni.
- Asistent može dodavati stavke i oznake, ali ne može pomjerati, mijenjati ni brisati oznake koje već postoje.

Sve ostalo je u [Još nije izgrađeno](topic:not-built-yet).
