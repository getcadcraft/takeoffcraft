---
title: Kaj je novega v različici 0.7 (prej)
summary: Risbe DWG in DXF se odprejo kot listi z lastnim merilom, natančna števila in dolžine iz same risbe, izbrana ponudba podizvajalca kot cena paketa, povabila k ponudbam z zapečatenimi cenami, orodja pomočnika za risbe in USD iz pogleda 3D preverjanja.
keywords: kaj je novega 0.7, prejšnja izdaja, opombe ob izdaji, dnevnik sprememb, spremembe, 0.7, različica, nove funkcije, dwg, dxf, risba, postavitve, prostor modela, merilo risbe, štetje iz risbe, štetje CAD, bloki, dinamični bloki, atributi, sloji, xref, povezana risba, meri risbo, polilinija, šrafura, označeni PDF, izbrana ponudba, uporaba ponudbe, pošlji za ponudbe, povabilo k ponudbam, zapečatene ponudbe, odpiranje ponudb, zamudna ponudba, zapisi podizvajalcev, csv, pomočnik, mcp, usd, usdz, enote, seznami enot, strnjeno, podokna, pogovorna okna, portugalščina
from: 0e3a424f
---

To je, kar se je spremenilo v TakeoffCraft 0.7 v primerjavi z 0.6. Risbe se zdaj odprejo take, kakršne so, brez prejšnjega izrisa v PDF, paket ponudbe pa lahko gre podizvajalcem in se vrne z cenami.

## Novo

### Risbe DWG in DXF

- **Odprite risbo kot liste.** {{ui:Odpri načrte}} v skupini {{ui:Datoteka}} ({{key:Mod+O}} ali spustite datoteke) sprejme risbe DWG in DXF poleg PDF-jev. Prostor modela in vsaka postavitev postaneta listi v seznamu {{ui:Listi}}, predizmera pa lahko zajame risbe in PDF-je skupaj. Nič se ne naloži. Glejte [Odpiranje risbe DWG ali DXF](topic:open-a-drawing).
- **Merilo prihaja iz risbe.** Postavitev se začne pri merilu svojega največjega pogleda, če je to prednastavljeno merilo, poimenovano kot prednastavitev, na primer 1/2" = 1'-0". Model se začne v enotah risbe. Risba brez enot pokaže „Ni merila“, dokler je ne kalibrirate. {{ui:Kalibriraj}}, {{ui:Preveri}} in {{ui:Prednastavitev}} še vedno veljajo. Glejte [Merilo](topic:open-a-drawing#the-scale).
- **Sloji in povezane risbe.** {{ui:Sloji}} na vrstici lista pokažejo ali skrijejo sloje risbe. Sloji, ki jih je datoteka izklopila ali zamrznila, se na začetku skrijejo in se ne štejejo, razen če izberete drugače. Povezana risba (xref), odprta poleg svoje gostiteljske, se nariše in šteje tam, kjer je vstavljena; dokler ni odprta, vrstica stanja pove, kaj manjka. Glejte [Sloji](topic:open-a-drawing#layers).
- **Označeni PDF deluje z risbo.** {{ui:Izvoz}} › {{ui:Označeni PDF}} najprej nariše označene liste risbe kot PDF, tako da kopija pokaže vaše oznake in legendo brez koraka izrisa. Nariše se črno ali v barvah risbe, brez tabel slogov izrisa. Glejte [Označeni PDF](topic:export-estimate#a-marked-pdf).

### Natančna števila in dolžine iz risbe

- **Štejte, kar risba pravi, da je tam.** {{ui:Štetje CAD}} na vrstici lista šteje blok po imenu (vključno z gnezdenimi bloki, stanji dinamičnih blokov in nizi blokov), vse enega tipa na sloju ali besedilo oz. vrednost atributa. Šteje, kar list prikazuje, ali celotno risbo enkrat. Dodajanje oznak je en korak razveljavitve, ponovno štetje pa doda samo novo. {{ui:Samodejno štetje}} ostane za PDF-je in za simbole, ki niso bloki. Glejte [Štetje iz risbe](topic:count-from-a-drawing).
- **Merite iz lastnih črt risbe.** {{ui:Meri risbo}} vzame črte, loke, polilinije, krožnice, šrafure in trdna telesa, ki jih kliknete ali izberete z oknom, kot oznake linearne ali ploščinske postavke. Loki, izbočine in luknje šrafur so natančni; elipse in zlepki se merijo v finih tetivah, vrstica pa to pove. Glejte [Merjenje iz risbe](topic:measure-from-a-drawing).

### Ponudbe

- **Uporabite ponudbo podizvajalca kot ceno paketa.** V {{ui:Izvoz}} › {{ui:Ponudbeni paketi in primerjava…}} izberite {{ui:Uporabi}} pri ponudbi. Postavke paketa ostanejo kot količine, ena vrstica **Izbrana ponudba** nosi ceno, postavke, ki jih ponudba izpusti, ostanejo po vaši lastni ceni, nanje pa se nanašajo splošni stroški, dobiček in jamstvo. Menjava ponudb je en korak razveljavitve; delovni zvezek in povzetek ponudbe to prenesta. Glejte [Uporaba ponudbe kot cene paketa](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Pošljite paket za ponudbe.** {{ui:Pošlji za ponudbe…}} pod paketom vsakemu podizvajalcu pošlje povezavo do strani, ki ne potrebuje računa: vidi obseg in liste kot PDF, vpiše ceno pri vsaki postavki ali jo označi kot nevključeno, doda opombe in do tri datoteke ali zavrne. {{ui:Prevzemi cene}} prenese, kar se je vrnilo, v list primerjave, označeno kot **spletno**. Pošiljanje je odprto samo računom, ki jih je ekipa CadCraft omogočila med preizkušanjem (glejte spodaj). Glejte [Pošiljanje paketa za ponudbe](topic:bid-invitations).
- **Zapečateno do odpiranja.** Cene lahko ostanejo zapečatene do časa odpiranja, ki ga nastavite: do takrat jih nihče ne vidi, tudi vi ne. Ob odpiranju se vse ponudbe prikažejo hkrati, ponudba, ki pride po roku, pa je označena kot **zamudna**. Glejte [Zapečatene ponudbe in odpiranje](topic:bid-invitations#sealed-bids-and-the-opening).
- **Zapisi podizvajalcev.** Vaš račun na getcadcraft.com hrani kontakte vsakega podjetja, področja dela, odgovore o kvalifikacijah ter datume zavarovanja in licenc (označeno, ko so pretečeni ali v 30 dneh), skupaj z njihovimi prejšnjimi ponudbami. Uvažajte in izvažajte jih kot CSV ter jih izberite, ko pošiljate paket. Glejte [Na spletni strani](topic:bid-invitations#on-the-website).

### Pomočniki AI

- **Pomočniki lahko dodajajo v predizmero.** Z označenim **Urejanje** lahko vaš lastni pomočnik dodaja postavke (`items_add`) in meri odseke, površine in števila na listu (`marks_add`; dolžine in površine samo na listu z merilom). Vsak klic je en korak razveljavitve.
- **Orodja pomočnika za risbe.** Na odprti risbi DWG ali DXF lahko pomočnik navede njene liste in to, kar je mogoče šteti, natančno šteje, doda oznake štetja in meri iz geometrije risbe. Brez odprtega TakeoffCraft strežnik CadCraft MCP odpre risbo kot novo predizmero in jo shrani, `cadcraft count` pa šteje iz ukazne vrstice. Glejte [Kaj pomočnik lahko zahteva](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Pogled 3D preverjanja kot USD.** {{ui:Paket USD (.usdz)}} poleg {{ui:GLB}} v pogledu 3D preverjanja zapiše vsak zid, ploščo, pločevino, števni količek in odsek kot svoj objekt, poimenovan po svoji postavki in z lastno količino, v metrih. Tudi pomočnik ga lahko izvozi (`usd_export`). Glejte [Izvoz pogleda 3D preverjanja v USD](topic:usd).

## V vseh aplikacijah

- **Enote.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Enote}} ima za dolžino, ploščino, prostornino, kot in naklon vsak svoj seznam, z natančnimi velikostmi, ki jih določajo definicije enot (ameriška geodetska stopa je posebna enota). Izklopite enote, ki jih nikoli ne uporabljate, in odstranijo se s seznamov; z zvezdico označite eno, in novo delo se začne z njo. Datoteka vedno ohrani svojo enoto. V TakeoffCraft seznami {{ui:Enota}} postavke sledijo stikalom, nova postavka se začne z označeno dolžinsko ali ploščinsko enoto, strešni kvadrati (SQ), akri in hektari so nove ploščinske enote, polje za dolžino pa sprejme oznako katerekoli enote, na primer `3 yd`. Glejte [Enote, vnesene vrednosti in seznami enot](common:unit-lists).
- **Gostejša postavitev in podokna, ki se skrijejo.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Gostota postavitve}} › {{ui:Strnjeno}} zajame več na zaslonu (zasloni na dotik in telefoni ohranijo velike gumbe). Vsako stransko podokno ima vitko naslovno vrstico: povlecite jo, da se podokno pripne ali odlepi, jo spustite na naslovno vrstico drugega podokna, da si delita okvir kot zavihke, jo pripnite, da se zdrsne do roba, ali jo skrijte in vrnite z roba. Glejte [Razporeditev podoken](common:arrange-panels#make-the-layout-denser).
- **Pogovorna okna se premikajo.** Pogovorno okno povlecite za naslovno vrstico, da ni na poti risbi; vrne se tja, kjer ste ga pustili. Dvojni klik na naslovno vrstico ga znova centrira. Glejte [Premik pogovornega okna](common:arrange-panels#move-a-dialog).
- **Recepti za pomočnike AI.** Deset zgledov za vašega pomočnika (urejanje risbe, izris nabora, preverjanje risb, vprašanja o modelu, seštevek predizmere, poskus variante dela ...), vsak z orodji, ki jih kliče, in dovoljenji, ki jih potrebuje, in vsakega ponovno preizkusijo naši testi. Aplikacije ne vsebujejo AI. Glejte [Recepti za pomočnike AI](common:assistants-recipes).
- **Jeziki.** **Português (Portugal)** je nov v {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Jezik}}. Ta, **Português (Brasil)**, **Español (México)** in **Bahasa Indonesia** imajo zdaj vse besede programov kot osnutke, ki jih materni govorec še ni pregledal. Teme pomoči so v angleščini.
- **CadCraft Studio** pove, zakaj preverjanje posodobitev ni uspelo (ni še datoteke za vaš sistem, ni omrežja, napačen podpis), namesto le „Končano“, in preneha prikazovati kartico Kaj je novega, ki ste jo zaprli, dokler ni novejše izdaje.

## Še ni v tej različici

- **0.7 ni podpisana s kodo.** Podpisovanje in paket Microsoft Store sta prestavljena v 0.8, ker potrdilo še ni bilo preverjeno. Preverite SHA-256 ob vsaki datoteki na getcadcraft.com/download. V sistemu Windows, če SmartScreen ustavi namestitveni program, izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}. Na Macu prvič z desnim klikom kliknite CadCraft Studio in izberite {{ui:Odprto}}. CadCraft Studio še ni v trgovini z aplikacijami, še ni izdelave za iPad ali iPhone.
- Seznama kotov in naklonov v {{ui:Enote}} sta shranjena, vendar ju še nobeno polje ne bere.
- **Povabila k ponudbam so za večino računov izklopljena.** Med preizkušanjem pošta zunanjim ponudnikom gre samo iz računov, ki jih je ekipa CadCraft omogočila. Strani ponudnikov delujejo za vsa že poslana povabila. Vsi drugi: prenesite {{ui:CSV obsega}}, pošljite ga sami po e-pošti in vpišite ponudbe.
- Okno CadCraft Studio še ne more poslati povabil k ponudbam: pove, naj uporabite TakeoffCraft v brskalniku. Odpiranje predizmere s poslanimi zahtevami, primerjava in izbira ponudbe delujejo v Studiu.
- Dodatki, potrdila o oddaji dela, list z obsegom, ki ga vsak ponudnik podpiše, in samodejni opomniki pred iztekom zavarovanja niso izdelani. Izbrana ponudba ne preračuna ponudbenega območja alternative.
- Risbe: tabele slogov izrisa in datoteke CTB se ne uporabljajo, binarni DXF je zavrnjen (shranite ga kot ASCII DXF ali DWG), povezane risbe se najdejo samo med odprtimi datotekami po imenu, PDF-podloge, slike in predmeti OLE v risbi pa se ne rišejo in ne štejejo. Števila in merila so bila preverjena na vzorčnih risbah, še ne na risbah iz pravega dela, odprtih v programu, ki jih je ustvaril.
- Pomočnik lahko dodaja postavke in oznake, vendar ne more premikati, spreminjati ali brisati oznak, ki že obstajajo.

Vse drugo je v [Še ni izdelano](topic:not-built-yet).
