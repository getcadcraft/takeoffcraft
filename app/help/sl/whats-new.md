---
title: Kaj je novega v različici 0.9
summary: Dolžine v metrih, centimetrih ali milimetrih, metrične ploščine v m2 s površino sten, prednastavitve merila 1:75 in 1:150, enote teže in temperature, Lok z desetimi načini ter živi kazalci, Sledenje in seznam ljudi.
keywords: kaj je novega, opombe ob izdaji, dnevnik sprememb, 0.9, prikaži dolžine kot, metri, centimetri, milimetri, metrično, sledi splošnim, enote, enote prikaza, m2, kvadratni metri, površina sten, prednastavitve merila, 1:75, 1:150, teža, kilogrami, kg, tona, lb, temperatura, celzij, fahrenheit, lok, načini loka, lok s tremi točkami, polmer, živo, kazalci, sledenje, seznam ljudi, razred, namigi, postavitev, 0.8, 0.8.1, različica, nove funkcije, preštej vse, legenda, legenda simbolov, celoten nabor, zgodovina cen, zadnje delo, tipična cena, dobavitelj, zaloga, dobavni rok, zaostanek, seznam naročila, pomanjkanje, podokno težav, pomočnik, jeziki, vhodne naprave, vrstice orodne vrstice, dwg
from: 6182b998
---

To je, kar se je spremenilo v TakeoffCraft 0.9 v primerjavi z 0.8.1. Gre za majhno izdajo za ta program: dolžine lahko zdaj berete v metrih, centimetrih ali milimetrih, ploščine in merila se pravilno prilagodijo metričnemu delu, Lok pa ima deset načinov risanja. Žive seje zdaj kažejo tudi, kdo je kje.

## Novo

### Dolžine v metrih, centimetrih ali milimetrih

- **Prikaži dolžine kot.** {{ui:Nastavitve}} › {{ui:TakeoffCraft}} ima {{ui:Prikaži dolžine kot}} z možnostmi {{ui:Sledi splošnim}}, {{ui:Čevlji in palci}}, m, cm in mm. {{ui:Sledi splošnim}} uporabi metrično dolžinsko enoto, ki ste jo označili v {{ui:Nastavitve}} › {{ui:Globalno}} › {{ui:Enote}}, in čevlje in palce, če nobena ni označena. Spremeni, kako se dolžine berejo na listu, v vrstici stanja in v podoknih, vključno z višinami, globino, debelino in nivoji. Goli število, vneseno v polje višine, se prebere v prikazani enoti.
- **Samo prikaz.** Količine, stroški in izvozi se izračunajo iz natančnih dolžin. Izbira 1/16, 1/8 in 1/4 palca se pojavi samo za čevlje in palce. Glejte [Prikaz dolžin v metrih](topic:show-lengths-in-meters).
- **Enote teže.** Postavka {{ui:Vnesena količina (brez risbe)}} je lahko zdaj v lb, TON, kg ali t in ima ceno na enoto.
- **Temperatura.** Vsaka postavka ima izbirno polje {{ui:Temperatura}} v urejevalniku postavk, vneseno v stopinjah C ali F. {{ui:Prikaži temperature kot}} v {{ui:Nastavitve}} › {{ui:TakeoffCraft}} ponuja {{ui:Sledi splošnim}}, °C ali °F.

### Ploščine in merila za metrično delo

- **Ploščine v m2 na risbi.** Ploščina, izmerjena z metrično postavko, zdaj na oznaki na risbi in v podoknu oznak ter tudi v tabeli piše m2 namesto SF. Pravilo: m2, kadar je postavka cenjena metrično ali kadar so dolžine prikazane v m, cm ali mm, sicer SF.
- **Površina sten.** Linearna postavka z višino pokaže tudi površino stene (dolžina krat višina) na seznamu postavk in kot opombo pod tabelo količin po postavki.
- **Prednastavitve merila 1:75 in 1:150.** Sta na seznamu {{ui:Prednastavitev}} v skupini {{ui:Merilo}}, ki ima zdaj 32 meril. Glejte [Prednastavitve merila](topic:scale-presets).

### Lok z desetimi načini

- Ko je {{ui:Lok}} vklopljen (gumb v orodni vrstici ali {{key:R}}), se v vrstici lista pojavi polje {{ui:Način loka}}: Tri točke; Začetek, Središče, Konec; Začetek, Središče, Kot; Začetek, Središče, Dolžina; Začetek, Konec, Kot; Začetek, Konec, Smer; Začetek, Konec, Polmer; Središče, Začetek, Konec; Središče, Začetek, Kot in Središče, Začetek, Dolžina. Kot, dolžino, polmer in smer je mogoče klikniti ali vnesti. Deluje v linearnih odsekih, površinah in izrezih. Datoteke, shranjene pred 0.9, se odprejo enako. Glejte [Risanje lokov z desetimi načini](topic:draw-arcs-ten-methods).

### Skupno delo

- **Kazalci drugih.** V živi seji je kazalec vsake osebe viden na listu z njenim imenom in barvo, s črtkanim okvirjem okoli oznak, ki jih je izbrala. Ljudje na drugem listu so navedeni z imenom tega lista. Glejte [Delo v živo z drugimi](topic:work-live).
- **Sledenje osebi in seznam ljudi.** Gumb {{ui:Ljudje}} v živi seji navede vsako osebo z orodjem, ki ga uporablja, listom, na katerem je, in časom zadnjega urejanja. {{ui:Sledi}} premakne vaš pogled z njihovim, gostitelj pa lahko uporabi {{ui:Naj vsi sledijo meni}}. Glejte [Sledenje sodelavcu v živi seji](topic:follow-a-teammate).

## V vseh aplikacijah

- **Namigi in začetni namig.** Besedilo ob lebdenju je namig Bootstrap, začetni namig pa je mogoče zapreti.
- **Drsni zavihki.** Vrstica zavihkov podokna, ki se ne prilega, se drsi namesto da bi bila odrezana.
- **Naslovi zavihkov.** Zavihek brskalnika prikazuje `<document> - TakeoffCraft | CadCraft`.
- **Postavitev.** Seznam postavitev v {{ui:Nastavitve}} je spustni meni, ki prikazuje izbrano postavitev.
- **Jezik.** Jezik, ki ga izberete, zdaj doseže tudi besede, ki jih stran sama izpiše, na primer Novo, Odpri in Shrani. Jeziki, razen angleščine, so strojni osnutki, dokler jih ne prebere materni govorec.

## Iskreni zadržki

- Prikaz dolžin, enote teže in temperature ter nove prednastavitve so bili preverjeni s testi in na strani. Vsako podokno pri vsaki enoti ni bilo ročno preverjeno.
- Seznam ljudi ni bil ročno preverjen z resničnim razredom učitelja in učencev.
- Jeziki, razen angleščine, so strojni osnutki.
- Namestitveni programi za Windows niso podpisani s kodo (Več informacij, nato Vseeno zaženi). Slika diska za Mac ni notarizirana (desni klik, nato Odprto).

## Prej: 0.8 in 0.8.1

To je, kar se je spremenilo v TakeoffCraft 0.8 (izdan 2026-11-01) in 0.8.1 (2026-11-02) v primerjavi z 0.7. Legendo simbolov je zdaj mogoče šteti v celotnem naboru naenkrat, novo predizmero je mogoče začeti s cenami vaših preteklih del, predizmero pa je mogoče preveriti proti zalogi dobavitelja. 0.8.1 je popravilna izdaja.

### Novo

**Preštejte vse v naboru**

- **Enkrat obkrožite legendo.** {{ui:Preštej vse}} na orodni vrstici prebere legendo simbolov: povlecite okvir okoli simbolov in imen, napisanih ob njih. Vsak simbol je naveden s svojo sliko in imenom, ime pa postane ime postavke. Odznačite, kar ne želite, nato izberite {{ui:Štetje na N listih}}. Vrstica prikaže list, ki se preiskuje, {{ui:Prekliči}} ustavi zagon, stran pa ostane uporabna.
- **Vsak list v enem zagonu.** Vsak simbol se šteje na vsakem odprtem listu. List, narisan v drugem merilu, se preišče v tem merilu, simboli pa se najdejo obrnjeni pod katerimkoli pravim kotom. Lastni simboli legende na njenem listu se ne štejejo.
- **Pregled, preden se kaj doda.** Vsak seštevek ima povezavo na list za vsakega (»E-103: 4«), ki vodi na ta list. Kliknite okvir pri najdbi, da ga izpustite, in še enkrat, da ga vrnete. Raven ujemanja (50 % do 100 %) samo filtrira najdeno; nič se ne išče znova.
- **En korak razveljavitve.** {{ui:Dodaj N oznak}} ustvari postavko štetja za vsak simbol z oznako na vsaki najdbi. Ime, ki je že vaša postavka štetja, se ponovno uporabi. {{key:Ctrl+Z}} vzame vse postavke in oznake nazaj. Kar sprejmete, se doda tudi v {{ui:Naučeno}}.
- **Simboli pod katerimkoli kotom.** Pred štetjem označite {{ui:Simboli pod katerim koli kotom}}, da najdete tudi simbole, obrnjene pod kotom, ki ni pravi kot. Iskanje nato obrne vsak simbol na vsakih 15 stopinj, simbol, ki ni okrogel, pa lahko vzame do šestkrat dlje.
- **Kaj je to.** Preprosto ujemanje simbolov na vaših listih, brez naučenega modela, in ničesar ne zapusti vašega računalnika. Na izmišljenem naboru 200 listov je trajalo 9.4 sekunde od začetka do konca v Chromu na hitrem namiznem računalniku; pravi nabori načrtov bodo počasnejši. Glejte [Štetje vseh v naboru](topic:count-everything).

**Zgodovina cen iz vaših lastnih del**

- **TakeoffCraft si zapomni vaše cene.** Ko shranite predizmero, se vsaka cenjena postavka, ki je v uporabi, zapomni po imenu in tipu: cena materiala, cena dela, odpadek in enota. Za vsako ime se hrani zadnjih 12 del. Hrani se na tem računalniku ob knjižnici cen, nikoli v datoteki predizmere, in nikamor ne gre.
- **Začnite novo predizmero iz nje.** {{ui:Cene}} na orodni vrstici za vsako postavko prikažejo zadnje cene iz dela, tipične cene in razpon. {{ui:Uporabi zadnje}} ali {{ui:Uporabi običajne}} cenijo eno postavko, {{ui:Določi cene N necenjenim postavkam iz zgodovine}} zapolni vsako postavko, ki še nima cene. Vsaka uporaba je en korak razveljavitve.
- **Starejša dela.** {{ui:Uči se iz preteklih predizmer…}} si zapomni cenjene postavke shranjene predizmere (.json).
- **Oglejte si, spremenite, pozabite.** {{ui:Vse zapomnjeno}} navede vsako ime; gumb s košem pozabi eno, {{ui:Počisti vse cene}} pa vse. Izklopite {{ui:Zapomni si moje cene, ko shranim predizmere}}, da prenehate. Cena na kos se nikoli ne da postavki na čevelj. Glejte [Zgodovina cen iz vaših preteklih del](topic:price-memory).

**Zaloga dobavitelja in dobavni roki**

- **Preverite proti seznamu dobavitelja.** {{ui:Dobava}} na orodni vrstici vzame seznam zaloge dobavitelja ({{ui:Dodaj datoteko dobavitelja…}}), CSV ali preglednico, in primerja, kaj predizmera potrebuje, z odpadkom. Hrani se do pet datotek. Nič se ne pošlje in nič ne sprašuje dobavitelja: datoteko prinesete vi.
- **Kaj pove.** Kratke postavke so na vrhu: „Manjka: 120 EA“, „Dobavni rok: 21 dni“, „Na zaostanku“, „Enota se razlikuje“, „Ni podatka o zalogi“ ali „Na zalogi“. {{ui:Najdaljše želeno čakanje (dni)}} začne pri 14.
- **Seznam naročila.** {{ui:Seznam naročila (CSV)}} prenese kratke postavke s količino, ki manjka, dobaviteljem in dobavnim rokom.
- **Cene v knjižnico.** Če datoteka vsebuje cene, {{ui:Cene v knjižnico}} nastavi ceno materiala vsakega vpisa knjižnice z istim imenom in enoto. Za prenos v predizmero ponovno določite cene iz knjižnice.
- **V podoknu težav.** Pomanjkanje je opozorilo, dolg čas čakanja pa opomba, obe pod „Zaloga dobavitelja“. Lahko ga sprejmete z razlogom, razlog pa se shrani v predizmeri. Glejte [Preverjanje zaloge dobavitelja in dobavnih rokov](topic:supplier-stock).

**Pomočniki AI**

- **Orodja za vse tri.** Ko so pomočniki dovoljeni v {{ui:Nastavitve}}, lahko pomočnik prebere legendo (`legend_open`), zažene štetje (`legend_count_start`, nato `legend_count_status` in `legend_count_result`) in ga doda (`legend_count_add`, ki se lahko najprej predogleda). Lahko prebere zapomnjene cene (`prices_list`) in določi cene postavkam iz njih (`prices_apply`, ki se lahko najprej predogleda) ter prebere preverjanje dobavitelja (`supply_check`). Dodajanje datoteke dobavitelja ostane vaše opravilo. Glejte [Uporaba TakeoffCraft s pomočniki AI](topic:use-with-ai-assistants).

**V vseh aplikacijah**

- **Jeziki.** Štiriinpetdeset jezikov skupaj; deset je novih (litovščina, latvijščina, bosanščina, marathi, telugu, albanščina, afrikanščina, filipinščina, svahili in uzbeščina). Jeziki, razen angleščine, so strojni osnutki, dokler jih ne prebere materni govorec.
- **Vhodne naprave.** {{ui:Nastavitve}} › {{ui:Globalno}} › {{ui:Vhodne naprave}} določi, kaj počnejo sledilna ploščica, stranski gumbi miške, pisalo, 3D miška, igralni krmilnik ali krmilnik MIDI, za vse aplikacije ali za eno. Glejte [Uporaba sledilne ploščice, 3D miške ali krmilnika](common:input-devices).
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} ponuja {{ui:Prelom}} (začetek), {{ui:2 vrstici}} in {{ui:1 vrstica}}; skupine, ki se ne prilegajo, se drsijo vstran. Glejte [Razporeditev podoken](common:arrange-panels).
- **Podokno težav.** Skupno podokno opozoril in opomb zdaj vsebuje zgoraj opisano preverjanje zaloge dobavitelja poleg drugih preverb.
- **Dodatki.** Dodatki sledijo vašemu seznamu računa. Glejte [Dodatki in vaš seznam računa](common:addons-basics).
- **Povežite svojo AI.** CadCraft Studio je središče: enkrat povežite pomočnika za vseh osem aplikacij. Studio nima lastne AI.

### Popravljeno v 0.8.1

- **Razdelek razredov DWG.** Razdelek razredov datoteke DWG je bil prebran kot napačen tip. To je popravljeno v TakeoffCraft in v štirih drugih aplikacijah.
- **Studio lahko med delovanjem spremeni jezik.** Prej so bili Studio in njegove pakirane izdaje samo v angleščini. To ni bilo preizkušeno v namizni različici na vseh platformah; sporočite nam, če se jezik ne spremeni.

### Še ni v tej različici

- **Ni podpisano s kodo.** Windows lahko opozori, na Macu pa prvič z desnim klikom izberete {{ui:Odprto}}. Trgovinske izdaje (Microsoft Store, Google Play, App Store) so na čakanju, izdaja za iPad in iPhone pa za 0.8.1 ni bila ponovno izdelana.
- **Posodobitve Studia.** Namestitveni program za Windows in paketi za Linux preverjajo enkrat na dan in prej vprašajo. Prenosni zip samo sporoči, macOS in APK pa se ne posodabljata sama. macOS .dmg za 0.8 sledi izdaji.
- **Povežite svojo AI.** Povezava z enim klikom znotraj Studia, gostujoči konektor za AI v brskalniku, lasten API ključ znotraj Studia in objavljen paket MCP v tej različici niso obljubljeni.
- **Preštej vse.** Potrebuje simbole, narisane enako kot v legendi, in simbol, po katerem gre stena ali dolga črta, se lahko zgreši. Zrcaljeni simboli se ne najdejo, list brez merila, narisan v drugi velikosti, pa se preišče v velikosti legende. Preverite najdbe na prvem listu, preden zaupate ostalim.
- **Zaloga dobavitelja.** Podatki o zalogi so le toliko sveži, kolikor je datoteka, ki jo dodate. Preverjanje nikoli ne vpraša dobavitelja.
- **Jeziki.** Vrstica aplikacije se v tamilščini ne prilega.

Vse drugo je v [Še ni izdelano](topic:not-built-yet). Za prejšnjo izdajo glejte [Kaj je novega v različici 0.7](topic:whats-new-0-7).
