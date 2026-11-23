---
title: Kaj je novega v 0.9 (prejšnja izdaja)
summary: Berite dolžine v metrih, centimetrih ali milimetrih, metrične površine v m2 s površino stene, prednastavitve meril 1:75 in 1:150, enote za težo in temperaturo, lok z desetimi načini ter kazalce v živo, sledenje in seznam ljudi.
keywords: kaj je novega 0.9, prejšnja izdaja, kaj je novega, opombe ob izdaji, dnevnik sprememb, 0.9, prikaži dolžine kot, metri, centimetri, milimetri, metrično, splošno sledenje, enote, prikazne enote, m2, kvadratni metri, površina stene, prednastavitve merila, 1:75, 1:150, teža, kilogrami, kg, tona, t, lb, temperatura, stopinje Celzija, Fahrenheit, lok, načini loka, lok s tremi točkami, polmer, v živo, kazalci, sledenje, seznam ljudi, razred, namigi, postavitev, kaj je novega, opombe ob izdaji, dnevnik sprememb, spremembe, 0.8, 0.8.1, različica, nove funkcije, preštej vse, legenda, legenda simbolov, ves niz, pomnjenje cen, zadnje delo, običajna cena, dobavitelj, zaloga, dobavni rok, zaostanek naročila, seznam naročila, pomanjkanje, podokno težav, pomočnik, jeziki, vhodne naprave, vrstice orodne vrstice, dwg
from: f4322ba2
---

To so spremembe v TakeoffCraft 0.9 v primerjavi z 0.8.1. Gre za majhno izdajo za to aplikacijo: dolžine lahko zdaj berete v metrih, centimetrih ali milimetrih, površine in merila pravilno sledijo metričnim delom, lok pa ima deset načinov risanja. Seje v živo zdaj prikazujejo tudi, kdo je kje.

## Novo

### Branje dolžin v metrih, centimetrih ali milimetrih

- **Prikaži dolžine kot.** {{ui:Settings}} › {{ui:TakeoffCraft}} ima {{ui:Show lengths as}} z možnostmi {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm in mm. {{ui:Follow Global}} uporabi metrično enoto dolžine, ki ste jo označili v {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, in čevlje in palce, če nobena ni označena. Spremeni, kako so dolžine prikazane na listu, v vrstici stanja in v podoknih, vključno z višinami, globinami, debelinami in nivoji. Število brez enote, vpisano v polje za višino, se prebere v prikazani enoti.
- **Samo prikaz.** Količine, stroški in izvozi se izračunajo iz natančnih dolžin. Izbira 1/16, 1/8 in 1/4 palca se prikaže samo za čevlje in palce. Glejte [Prikaz dolžin v metrih](topic:show-lengths-in-meters).
- **Enote za težo.** Postavka {{ui:Typed quantity (no drawing)}} je zdaj lahko v lb, TON, kg ali t in se lahko ceni na enoto.
- **Temperatura.** Vsaka postavka ima izbirno polje {{ui:Temperature}} v urejevalniku postavk, vpisano v stopinjah C ali F. {{ui:Show temperatures as}} v {{ui:Settings}} › {{ui:TakeoffCraft}} ponuja {{ui:Follow Global}}, °C ali °F.

### Površine in merila za metrično delo

- **Površine v m2 na risbi.** Površina, izmerjena z metrično postavko, je zdaj na oznaki na risbi in v podoknu oznak označena z m2, kot tudi v tabeli, namesto SF. Pravilo: m2, kadar je postavka cenjena metrično ali so dolžine prikazane v m, cm ali mm, sicer SF.
- **Površina stene.** Linearna postavka z višino zdaj prikaže tudi površino stene (dolžina krat višina) na seznamu postavk in kot vrstico opombe pod tabelo količin po postavkah.
- **Prednastavitve meril 1:75 in 1:150.** Nahajata se na seznamu {{ui:Preset}} v skupini {{ui:Scale}}, ki ima zdaj 32 meril. Glejte [Prednastavitve merila](topic:scale-presets).

### Lok z desetimi načini

- Medtem ko je {{ui:Arc}} vklopljen (gumb na orodni vrstici ali {{key:R}}), se v vrstici lista pojavi polje {{ui:Arc method}}: 3 točke, Začetek, Središče, Konec, Začetek, Središče, Kot, Začetek, Središče, Dolžina, Začetek, Konec, Kot, Začetek, Konec, Smer, Začetek, Konec, Polmer, Središče, Začetek, Konec, Središče, Začetek, Kot in Središče, Začetek, Dolžina. Kot, dolžino, polmer in smer lahko kliknete ali vpišete. Deluje pri linearnih potekih, površinah in izrezih. Datoteke, shranjene pred 0.9, se odprejo enako. Glejte [Risanje lokov z desetimi načini](topic:draw-arcs-ten-methods).

### Skupno delo

- **Oglejte si kazalce drug drugega.** V seji v živo je kazalec vsake osebe prikazan na listu z njenim imenom in barvo, z črtkanim okvirjem okoli oznak, ki jih je izbrala. Ljudi na drugem listu navedemo z imenom tega lista. Glejte [Delo v živo z drugimi](topic:work-live).
- **Sledenje osebi in seznam ljudi.** Gumb {{ui:People}} v seji v živo navede vsako osebo z orodjem, ki ga uporablja, listom, na katerem je, in časom zadnjega urejanja. {{ui:Follow}} premakne vaš pogled skupaj z njihovim, gostitelj pa lahko uporabi {{ui:Ask everyone to follow me}}. Glejte [Sledenje sodelavcu v seji v živo](topic:follow-a-teammate).

## V vseh aplikacijah

- **Pojavni namigi in začetni namig.** Besedilo ob zadrževanju miške je Bootstrap pojavni namig, začetni namig pa je mogoče zapreti.
- **Pomična vrstica zavihkov.** Vrstica zavihkov podokna, ki se ne prilega, se zdaj pomika namesto da bi bila odrezana.
- **Naslovi zavihkov.** Zavihek brskalnika prikazuje `<document> - TakeoffCraft | CadCraft`.
- **Postavitev.** Seznam postavitev v {{ui:Settings}} je spustni seznam, ki prikazuje izbrano postavitev.
- **Jezik.** Jezik, ki ga izberete, zdaj velja tudi za besedila, ki jih stran sama izpiše, na primer Novo, {{ui:Open}} in Shrani. Jeziki, razen angleščine, so strojni osnutki, dokler jih ne prebere domači govorec.

## Omejitve, ki jih navajamo

- Prikaz dolžin, enot za težo in temperaturo ter nove prednastavitve so bili preverjeni s testi in na strani. Vsak podokno pri vsaki enoti ni bil ročno preverjen.
- Seznam ljudi ni bil ročno preverjen z resnično skupino učiteljev in učencev.
- Jeziki, razen angleščine, so strojni osnutki.
- Namestitveni programi za Windows niso podpisani s kodo (Več informacij, nato Vseeno zaženi). Slika diska za macOS ni notarizirana (desni klik, nato {{ui:Open}}).

## Prej: 0.8 in 0.8.1

To so spremembe v TakeoffCraft 0.8 (izdana 2026-11-01) in 0.8.1 (2026-11-02) v primerjavi z 0.7. Legendo simbolov je zdaj mogoče prešteti naenkrat po celotnem nizu, nova predizmera lahko začne s cenami vaših preteklih del, predizmero pa je mogoče preveriti z zalogo dobavitelja. 0.8.1 je popravek.

### Novo

**Preštejte vse v nizu**

- **Enkrat označite legendo.** {{ui:Count everything}} na orodni vrstici prebere legendo simbolov: povlecite okvir okoli simbolov in imen, natisnjenih ob njih. Vsak simbol je naveden s svojo sliko in imenom, ime pa postane ime postavke. Odznačite, kar ne želite, nato izberite {{ui:Count on N sheets}}. Vrstica kaže list, ki se pregleduje, {{ui:Cancel}} ustavi tek, stran pa ostane uporabna.
- **Vsi listi v enem teku.** Vsak simbol se šteje na vsakem odprtem listu. List, narisan v drugem merilu, se pregleda v tem merilu, simboli pa se najdejo obrnjeni v katerikoli pravi kot. Lastni simboli legende na njenem listu se ne štejejo.
- **Pregled pred dodajanjem.** Vsak seštevek ima povezavo na list ("E-103: 4"), ki vodi na ta list. Kliknite okvir na najdbi, da jo izpustite, in znova, da jo vrnete. Stopnja ujemanja (50 % do 100 %) samo filtrira najdbe; nič se ne išče znova.
- **En korak razveljavitve.** {{ui:Add N marks}} ustvari postavko štetja za vsak simbol z oznako pri vsaki najdbi. Ime, ki je že vaša postavka štetja, se ponovno uporabi. {{key:Ctrl+Z}} vzame nazaj vse postavke in oznake. Kar sprejmete, se doda tudi v {{ui:Learned}}.
- **Simboli pod katerim koli kotom.** Pred štetjem označite {{ui:Symbols at any angle}}, da poiščete tudi simbole, obrnjene pod kotom, ki ni pravi kot. Iskanje nato obrne vsak simbol na 15 stopinj, simbol, ki ni okrogel, pa lahko traja do šestkrat dlje.
- **Kaj je to.** Preprosto ujemanje simbolov na vaših listih, brez naučenega modela, in nič ne zapusti vašega računalnika. Na izmišljenem nizu 200 listov je trajalo 9.4 sekunde od začetka do konca v Chromu na hitrem namiznem računalniku; pravi nizi načrtov bodo počasnejši. Glejte [Preštejte vse v nizu](topic:count-everything).

**Pomnjenje cen iz vaših del**

- **TakeoffCraft si zapomni vaše stopnje.** Ko shranite predizmero, se vsaka cenjena uporabljena postavka zapomni po imenu in tipu: cena materiala, cena dela, odpadek in enota. Za vsako ime se hranijo zadnjih 12 del. Hrani se na tem računalniku poleg knjižnice cen, nikoli v datoteki predizmere, in nikamor se ne pošilja.
- **Začnite novo predizmero iz tega.** {{ui:Prices}} na orodni vrstici za vsako postavko prikaže stopnje zadnjega dela, običajne stopnje in razpon. {{ui:Use last}} ali {{ui:Use typical}} cenita eno postavko, {{ui:Price N unpriced items from memory}} pa izpolni vsako postavko, ki še nima cene. Vsaka uporaba je en korak razveljavitve.
- **Starejše delo.** {{ui:Learn from a past takeoff…}} si zapomni cenjene postavke shranjene predizmere (.json).
- **Oglejte si, spremenite, pozabite.** {{ui:Everything remembered}} navede vsa imena; gumb koša pozabi eno, {{ui:Clear all prices}} pa vse. Izklopite {{ui:Remember my prices when I save a takeoff}}, da ustavite. Cena na kos se nikoli ne da na postavko na čevelj. Glejte [Pomnjenje cen iz preteklih del](topic:price-memory).

**Zaloga dobavitelja in dobavni roki**

- **Preverite glede na seznam dobavitelja.** {{ui:Supply}} na orodni vrstici sprejme seznam zalog dobavitelja ({{ui:Add a supplier file…}}), CSV ali preglednico, in preveri, kaj predizmera potrebuje, z odpadkom vred, glede nanj. Hranijo se do pet datotek. Nič se ne pošilja in ničesar ne sprašuje dobavitelja: datoteko prinesete vi.
- **Kaj pove.** Kratke postavke so na vrhu: „Zmanjka 120 EA“, „Dobavni rok 21 dni“, „Na naročilu“, „Enota se razlikuje“, „Ni podatka o zalogi“ ali „Na zalogi“. {{ui:Longest wait wanted (days)}} začne pri 14.
- **Seznam naročila.** {{ui:Order list (CSV)}} prenese kratke postavke z manjkajočo količino, dobaviteljem in dobavnim rokom.
- **Cene v knjižnico.** Če datoteka vsebuje cene, {{ui:Prices into the Library}} nastavi ceno materiala za vsak vnos knjižnice z istim imenom in enoto. Ponovno določite cene iz knjižnice, da jih prenesete v predizmero.
- **V podoknu Težave.** Pomanjkanje je opozorilo, dolg čakalni rok pa opomba, pod „Zaloga dobavitelja“. Lahko sprejmete eno z razlogom, razlog pa se shrani v predizmero. Glejte [Preverjanje zaloge dobavitelja in dobavnih rokov](topic:supplier-stock).

**Pomočniki z umetno inteligenco**

- **Orodja za vse tri.** Ob dovoljenih pomočnikih v {{ui:Settings}} lahko pomočnik prebere legendo (`legend_open`), izvede štetje (`legend_count_start`, nato `legend_count_status` in `legend_count_result`) in ga doda (`legend_count_add`, ki lahko najprej prikaže predogled). Lahko prebere shranjene cene (`prices_list`) in ceni postavke iz njih (`prices_apply`, ki lahko najprej prikaže predogled) ter prebere preverjanje zaloge dobavitelja (`supply_check`). Dodajanje datoteke dobavitelja ostane vaše opravilo. Glejte [Uporaba TakeoffCraft s pomočniki z umetno inteligenco](topic:use-with-ai-assistants).

**V vseh aplikacijah**

- **Jeziki.** Skupno štiriinpetdeset jezikov; deset jih je novih (litovščina, latvijščina, bosanščina, marathi, telugu, albanščina, afrikanščina, filipinščina, svahili in uzbeščina). Jeziki, razen angleščine, so strojni osnutki, dokler jih ne prebere domači govorec.
- **Vhodne naprave.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} določi, kaj počnejo sledilna ploščica, stranska gumba miške, pisalo, 3D miška, igralni krmilnik ali MIDI krmilnik, za vse aplikacije ali za eno. Glejte [Uporaba sledilne ploščice, 3D miške ali krmilnika](common:input-devices).
- **Vrstice orodne vrstice.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ponuja {{ui:Wrap}} (začetek), {{ui:2 rows}} in {{ui:1 row}}; skupine, ki se ne prilegajo, se pomikajo vstran. Glejte [Razporeditev podoknov](common:arrange-panels).
- **Podokno Težave.** Skupno podokno opozoril in opomb zdaj vsebuje zgoraj navedeno preverjanje zaloge dobavitelja, poleg drugih preverjanj.
- **Dodatki.** Dodatki sledijo vašemu seznamu računa. Glejte [Dodatki in seznam vašega računa](common:addons-basics).
- **Povežite svojo umetno inteligenco.** CadCraft Studio je vozlišče: enkrat povežite svojega pomočnika za vseh osem aplikacij. Studio nima lastne umetne inteligence.

### Popravljeno v 0.8.1

- **Razdelek razredov DWG.** Razdelek razredov datoteke DWG je bil prebran kot napačna vrsta. To je popravljeno v TakeoffCraft in v štirih drugih aplikacijah.
- **Studio lahko med delovanjem spremeni jezik.** Prej sta bila Studio in njegove zapakirane izdaje samo v angleščini. Tega ni bilo preizkušeno v namizni različici na vseh platformah; sporočite nam, če se jezik ne spremeni.

### Še ni v tej različici

- **Brez podpisa s kodo.** Windows lahko opozori, na Macu pa ob prvem zagonu desno kliknete in izberete {{ui:Open}}. Trgovinske izdaje (Microsoft Store, Google Play, App Store) so zadržane, izdaja za iPad in iPhone pa ni bila ponovno izdelana za 0.8.1.
- **Posodobitve Studia.** Namestitveni program za Windows in paketi za Linux preverjajo enkrat na dan in prej vprašajo. Prenosna datoteka zip samo sporoči, macOS in APK se ne posodabljata sami. Datoteka .dmg za macOS 0.8 sledi izdaji.
- **Povežite svojo umetno inteligenco.** Enoklična povezava znotraj Studia, gostujoči konektor za umetno inteligenco v brskalniku, lastni ključ API v Studiu in objavljen paket MCP v tej različici niso zagotovljeni.
- **Preštejte vse.** Potrebuje simbole, narisane enako kot v legendi, simbol z zidom ali dolgo črto čez njega pa se lahko spregleda. Zrcaljeni simboli se ne najdejo, list brez merila, narisan v drugi velikosti, pa se pregleda v velikosti legende. Preverite najdbe na prvem listu, preden zaupate ostalim.
- **Zaloga dobavitelja.** Podatki o zalogi so le toliko sveži, kot je datoteka, ki jo dodate. Preverjanje nikoli ne vpraša dobavitelja.
- **Jeziki.** Vrstica aplikacije za tamilščino se prelije.

Vse ostalo je v [Še ni izdelano](topic:not-built-yet). Za izdajo pred to glejte [Kaj je novega v 0.7](topic:whats-new-0-7).
