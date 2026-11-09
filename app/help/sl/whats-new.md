---
title: Kaj je novega v različicah 0.8 in 0.8.1
summary: Preštejte celotno simbolno legendo na vseh odprtih listih v enem teku, določajte cene iz cen vaših preteklih poslov, preverjajte predizmero glede na zalogo in dobavne roke dobavitelja ter nova orodja pomočnika za vse tri, poleg skupnih sprememb različice 0.8 in popravka 0.8.1 za datoteke DWG.
keywords: kaj je novega, novosti, opombe ob izdaji, dnevnik sprememb, spremembe, 0.8, 0.8.1, različica, nove funkcije, preštej vse, legenda, simbolna legenda, celoten nabor, pomnjenje cen, pretekli posli, zadnji posel, tipična cena, dobavitelj, zaloga, dobavni rok, povratno naročilo, seznam naročil, pomanjkanje, podokno težav, pomočnik, jeziki, vnosne naprave, vrstice orodne vrstice, dwg
from: a04adef6
---

To so spremembe v TakeoffCraft 0.8 (izdan 2026-11-01) in 0.8.1 (2026-11-02) v primerjavi z 0.7. Simbolno legendo zdaj lahko preštejete hkrati na celotnem naboru, nova predizmera se lahko začne s cenami vaših preteklih poslov, predizmero pa lahko preverite glede na zalogo dobavitelja. 0.8.1 je popravilna izdaja.

## Novo

### Preštej vse v naboru

- **Enkrat očrtajte legendo.** {{ui:Preštej vse}} na orodni vrstici prebere simbolno legendo: potegnite okvir okoli simbolov in imen, natisnjenih ob njih. Vsak simbol je naveden s svojo sliko in imenom, ime pa postane ime postavke. Odznačite, kar ne želite, nato izberite „Preštej na N listih“. Vrstica prikazuje list, ki se pregleduje, {{ui:Prekliči}} ustavi tek, stran pa ostane uporabna.
- **Vsi listi v enem teku.** Vsak simbol se šteje na vsakem odprtem listu. List, narisan v drugem merilu, se preišče v tem merilu, simboli pa se najdejo obrnjeni v vsak pravi kot. Simboli same legende na njenem listu se ne štejejo.
- **Pregled pred dodajanjem.** Vsaka vsota ima povezavo na vsak list („E-103: 4“), ki vas pelje na ta list. Kliknite okvir pri zadetku, da ga izločite, in ga znova kliknite, da se vrne. Stopnja ujemanja (50 % do 100 %) samo filtrira najdeno; nič se ne išče znova.
- **En korak razveljavitve.** {{ui:Dodaj N oznak}} ustvari postavko štetja za vsak simbol z oznako na vsakem zadetku. Ime, ki je že vaša postavka štetja, se ponovno uporabi. {{key:Ctrl+Z}} vzame nazaj vse postavke in oznake. Kar sprejmete, se doda tudi v {{ui:Naučeno}}.
- **Simboli pod katerimkoli kotom.** Pred štetjem označite {{ui:Simboli pod katerim koli kotom}}, da najdete tudi simbole, obrnjene pod kotom, ki ni pravi kot. Iskanje nato vsak simbol zasuka vsakih 15 stopinj, simbol, ki ni okrogel, pa lahko traja do šestkrat dlje.
- **Kaj je.** Preprosto ujemanje simbolov na vaših listih, brez naučenega modela, in nič ne zapusti vašega računalnika. Na izmišljenem naboru 200 listov je v Chromu na hitrem namiznem računalniku trajalo 9.4 sekunde od začetka do konca; pravi nabori načrtov bodo počasnejši. Glejte [Preštej vse v naboru](topic:count-everything).

### Cene iz vaših lastnih poslov

- **TakeoffCraft si zapomni vaše cene.** Ko shranite predizmero, se vsaka uporabljena cenjena postavka zapomni po imenu in vrsti: cena materiala, cena dela, odpadek in enota. Za vsako ime se hranijo zadnjih 12 poslov. Hrani se na tem računalniku poleg knjižnice cen, nikoli v datoteki predizmere, in nič se ne pošlje nikamor.
- **Začnite novo predizmero iz njih.** {{ui:Cene}} na orodni vrstici za vsako postavko prikažejo cene zadnjega posla, tipične cene in razpon. {{ui:Uporabi zadnje}} ali {{ui:Uporabi običajne}} določi ceno eni postavki, „Določi N postavk brez cene iz pomnjenja“ napolni vsako postavko, ki še nima cene. Vsaka uporaba je en korak razveljavitve.
- **Starejše delo.** {{ui:Uči se iz preteklih predizmer…}} zapomni cenjene postavke shranjene predizmere (.json).
- **Poglejte, spremenite, pozabite.** {{ui:Vse zapomnjeno}} našteje vsa imena; gumb koša pozabi eno, {{ui:Počisti vse cene}} pozabi vse. Izklopite {{ui:Zapomni si moje cene, ko shranim predizmere}}, da ustavite. Cena na kos se nikoli ne prenese na postavko, merjeno na čevelj. Glejte [Pomnjenje cen iz vaših preteklih poslov](topic:price-memory).

### Zaloga in dobavni roki dobavitelja

- **Preverite glede na seznam dobavitelja.** {{ui:Dobava}} na orodni vrstici vzame seznam zalog dobavitelja ({{ui:Dodaj datoteko dobavitelja…}}), CSV ali preglednico, in preveri, kaj predizmera potrebuje, z odpadkom vred. Hrani se do pet datotek. Nič se ne pošlje in nič ne sprašuje dobavitelja: datoteko prinesete vi.
- **Kaj pove.** Kratke postavke so na vrhu: „Manjka 120 EA“, „Dobavni rok 21 dan“, „Na povratnem naročilu“, „Enota se razlikuje“, „Ni podatka o zalogi“ ali „Na zalogi“. {{ui:Najdaljše želeno čakanje (dni)}} se začne pri 14.
- **Seznam naročila.** {{ui:Seznam naročila (CSV)}} prenese kratke postavke z manjkajočo količino, dobaviteljem in dobavnim rokom.
- **Cene v knjižnico.** Če datoteka vsebuje cene, {{ui:Cene v knjižnico}} nastavi ceno materiala vsakega vnosa knjižnice z istim imenom in enoto. Za prenos v predizmero znova določite cene iz knjižnice.
- **V podoknu težav.** Pomanjkanje je opozorilo, dolg čas čakanja pa opomba, pod „Zaloga dobavitelja“. Lahko ga sprejmete z razlogom, razlog pa se shrani v predizmero. Glejte [Preverjanje zaloge dobavitelja in dobavnih rokov](topic:supplier-stock).

### Pomočniki z umetno inteligenco

- **Orodja za vse tri.** Ko so pomočniki dovoljeni v {{ui:Nastavitve}}, lahko pomočnik prebere legendo (`legend_open`), zažene štetje (`legend_count_start`, nato `legend_count_status` in `legend_count_result`) in ga doda (`legend_count_add`, ki lahko najprej prikaže predogled). Lahko prebere zapomnjene cene (`prices_list`) in določi cene postavkam iz njih (`prices_apply`, ki lahko najprej prikaže predogled) ter prebere preverjanje dobavitelja (`supply_check`). Dodajanje datoteke dobavitelja ostaja vaša naloga. Glejte [Uporaba TakeoffCraft s pomočniki z umetno inteligenco](topic:use-with-ai-assistants).

### V vseh aplikacijah

- **Jeziki.** Skupaj 54 jezikov; deset jih je novih (litovščina, latvijščina, bosanščina, maratščina, telugu, albanščina, afrikanščina, filipinščina, svahili in uzbeščina). Jeziki, razen angleščine, so strojni osnutki, dokler jih ne prebere izvorni govorec.
- **Vnosne naprave.** {{ui:Nastavitve}} › {{ui:Globalno}} › {{ui:Vhodne naprave}} določi, kaj počnejo sledilna ploščica, stranski gumbi miške, pisalo, 3D-miška, igralni krmilnik ali krmilnik MIDI, za vse aplikacije ali za eno. Glejte [Uporaba sledilne ploščice, 3D-miške ali krmilnika](common:input-devices).
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} ponuja {{ui:Prelom}} (začetek), {{ui:2 vrstici}} in {{ui:1 vrstica}}; skupine, ki se ne prilegajo, se pomikajo vstran. Glejte [Razporeditev podoken](common:arrange-panels).
- **Podokno težav.** Skupno podokno opozoril in opomb zdaj vsebuje zgoraj navedeno preverjanje zaloge dobavitelja, poleg drugih preverjanj.
- **Dodatki.** Dodatki sledijo seznamu dodatkov vašega računa. Glejte [Osnove dodatkov in seznam dodatkov računa](common:addons-basics).
- **Povežite svojo umetno inteligenco.** CadCraft Studio je središče: svojega pomočnika povežete enkrat za vseh osem aplikacij. Studio nima lastne umetne inteligence.

## Popravljeno v 0.8.1

- **Razdelek razredov v DWG.** Razdelek razredov v datoteki DWG je bil prebran kot napačna vrsta. To je popravljeno v TakeoffCraft in še v štirih drugih aplikacijah.
- **Studio lahko med delovanjem spremeni jezik.** Prej sta bila Studio in njegove zapakirane izdaje samo v angleščini. Tega v namizni izdaji na vseh platformah ni bilo preizkušeno; sporočite nam, če se jezik ne spremeni.

## Še ni v tej različici

- **Ni podpisano s kodo.** Windows lahko opozori, na Macu pa ob prvem zagonu z desnim klikom izberete {{ui:Odprto}}. Trgovinske izdaje (Microsoft Store, Google Play, App Store) so na čakanju, izdaja za iPad in iPhone pa ni bila ponovno zgrajena za 0.8.1.
- **Posodobitve Studia.** Namestitveni program za Windows in paketi za Linux preverijo enkrat na dan in prej vprašajo. Prenosni zip samo obvesti vas, macOS in APK pa se ne posodabljata sama. Različica 0.8 za macOS .dmg sledi izdaji.
- **Povežite svojo umetno inteligenco.** Enoklično povezovanje znotraj Studia, gostujoči konektor za umetno inteligenco v brskalniku, lasten API ključ v Studiu in objavljen paket MCP v tej različici niso zagotovljeni.
- **Preštej vse.** Potrebuje simbole, narisane enako kot v legendi; simbol z zidom ali dolgo črto skozenj je lahko spregledan. Zrcalni simboli se ne najdejo, list brez merila, narisan v drugi velikosti, pa se išče v velikosti legende. Pred zaupanjem v preostalo preverite zadetke na prvem listu.
- **Zaloga dobavitelja.** Podatki o zalogi so le tako sveži, kot je datoteka, ki jo dodate. Preverjanje nikoli ne vpraša dobavitelja.
- **Jeziki.** Vrstica aplikacije za tamilščino se prelije.

Vse drugo je v [Še ni izdelano](topic:not-built-yet). Za prejšnjo izdajo glejte [Kaj je novega v 0.7](topic:whats-new-0-7).
