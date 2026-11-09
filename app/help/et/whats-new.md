---
title: Mis on uut versioonis 0.8 ja 0.8.1
summary: Loenda sümbolite legend kogu komplektis korraga kõigil avatud lehtedel, hinnasta kirjed varasemate tööde hindade järgi, kontrolli koguste arvestust tarnija laoseisu ja tarneaegade vastu ning uued assistendi tööriistad kõigi kolme jaoks, lisaks ühised 0.8 muudatused ja 0.8.1 parandus DWG-failidele.
keywords: mis on uut, väljalaskemärkmed, muudatuste logi, muudatused, 0.8, 0.8.1, versioon, uued funktsioonid, loenda kõik, legend, sümbolite legend, kogu komplekt, hinnamälu, varasemad tööd, viimane töö, tüüphind, tarnija, laoseis, tarneaeg, tellimusel, tellimisloend, puudujääk, probleemide paneel, assistent, keeled, sisendseadmed, tööriistariba read, dwg
from: a04adef6
---

See on, mis muutus versioonis TakeoffCraft 0.8 (ilmus 2026-11-01) ja 0.8.1 (2026-11-02), võrreldes versiooniga 0.7. Sümbolite legendi saab nüüd loendada korraga kogu komplekti ulatuses, uus koguste arvestus võib alata varasemate tööde hindadest ning koguste arvestust saab kontrollida tarnija laoseisu vastu. 0.8.1 on parandusversioon.

## Uus

### Loenda kogu komplekt

- **Märgi legend korraga ära.** {{ui:Loenda kõik}} tööriistaribal loeb sümbolite legendi: lohista kast sümbolite ja nende kõrval trükitud nimede ümber. Iga sümbol on loendis koos pildi ja nimega ning nimi saab kirje nimeks. Eemalda linnuke sellelt, mida ei soovi, seejärel vali {{ui:Loenda N lehel}}. Riba näitab, millist lehte otsitakse, {{ui:Loobu}} peatab käigu ja leht jääb kasutatavaks.
- **Kõik lehed ühes käigus.** Iga sümbol loendatakse igal avatud lehel. Teises mõõtkavas joonistatud lehte otsitakse selles mõõtkavas ning sümboleid leitakse pööratuna mis tahes täisnurga all. Legendi enda sümboleid ei loendata selle lehel.
- **Ülevaatus enne lisamist.** Iga kogusumma juures on iga lehe kohta link („E-103: 4"), mis viib selle lehe juurde. Klõpsa leiu kasti, et see välja jätta, ja klõpsa uuesti, et see tagasi tuua. Vastavustase (50% kuni 100%) ainult filtreerib leitut; uuesti otsimist ei toimu.
- **Üks tagasivõtmise samm.** {{ui:Lisa N märki}} loob iga sümboli kohta loenduskirje, millel on märk igal leiul. Nimi, mis on juba sinu loenduskirje, kasutatakse uuesti. {{key:Ctrl+Z}} võtab tagasi kõik kirjed ja märgid. Kõik, mille kinnitad, lisandub ka {{ui:Õpitud}} hulka.
- **Sümbolid suvalise nurga all.** Märgi enne loendamist linnuke {{ui:Sümbolid suvalise nurga all}}, et leida ka sümbolid, mis on pööratud muu kui täisnurga all. Otsing pöörab iga sümbolit iga 15 kraadi järel ning sümbol, mis ei ole ümmargune, võib kesta kuni kuus korda kauem.
- **Mida see on.** Lihtne sümbolite sobitamine sinu enda lehtedel, ilma treenitud mudelita, ja miski ei lahku sinu arvutist. Väljamõeldud 200-lehelisel komplektil võttis see brauseris Chrome kiirel lauaarvutil algusest lõpuni 9,4 sekundit; päris plaanikomplektid on aeglasemad. Vaata [Loenda kogu komplekt](topic:count-everything).

### Hinnamälu sinu enda töödest

- **TakeoffCraft jätab meelde sinu ühikuhinnad.** Kui salvestad koguste arvestuse, jäetakse meelde iga kasutatud hinnastatud kirje nimi ja tüüp koos materjali ühikuhinna, tööjõu ühikuhinna, kao ja ühikuga. Iga nime kohta hoitakse viimased 12 tööd. Hinnamälu hoitakse selles arvutis hinnateegi kõrval, mitte kunagi koguste arvestuse failis, ega seda ei saadeta kuhugi.
- **Alusta uut koguste arvestust sellest.** {{ui:Hinnad}} tööriistaribal näitab iga kirje kohta viimase töö hindu, tüüphindu ja vahemikku. {{ui:Kasuta viimast}} või {{ui:Kasuta tüüpilist}} hinnastab ühe kirje ning {{ui:Hinda mälu järgi N hindamata kirjet}} täidab kõik kirjed, millel veel hinda pole. Iga kasutus on üks tagasivõtmise samm.
- **Vanem töö.** {{ui:Õpi varasemast koguste arvestusest…}} jätab meelde salvestatud koguste arvestuse (.json) hinnastatud kirjed.
- **Vaata, muuda, unusta.** {{ui:Kõik meeldejäetud}} loetleb kõik nimed; prügikasti nupp unustab ühe nime ning {{ui:Tühjenda kõik hinnad}} unustab kõik. Lõpetamiseks lülita välja {{ui:Jäta mu hinnad meelde, kui salvestan koguste arvestuse}}. Tükihinda ei rakendata kunagi kirjele, mis on mõõdetud jalgades. Vaata [Hinnamälu sinu enda töödest](topic:price-memory).

### Tarnija laoseis ja tarneajad

- **Kontrolli tarnija nimekirja vastu.** {{ui:Tarne}} tööriistaribal võtab tarnija laonimekirja ({{ui:Lisa tarnijafail…}}), CSV-faili või tabeli, ning kontrollib, mida koguste arvestus vajab koos kadudega, selle vastu. Alles jäetakse kuni viis faili. Midagi ei saadeta ega küsita tarnijalt: faili toovad sina.
- **Mida see ütleb.** Puudujäägiga kirjed on ees, näiteks „Puudu 120 EA", „Tarneaeg 21 päeva", „Tellimusel", „Ühik erineb", „Laojäägi arv puudub" või „Laos". {{ui:Pikim soovitud ootamine (päevades)}} algab väärtusest 14.
- **Tellimisloend.** {{ui:Tellimisloend (CSV)}} laadib alla puudujäägiga kirjed koos puuduva koguse, tarnija ja tarneajaga.
- **Hinnad teeki.** Kui failis on hinnad, määrab {{ui:Hinnad teeki}} iga teegi kirje materjalihinna sama nime ja ühiku järgi. Too need koguste arvestusse, hinnastades teegist uuesti.
- **Probleemide paneelis.** Puudujääk on hoiatus ja pikk ootamine märkus rubriigis „Tarnija laoseis". Ühe võid aktsepteerida põhjendusega ning põhjendus salvestatakse koguste arvestusse. Vaata [Tarnija laoseisu ja tarneaegade kontroll](topic:supplier-stock).

### AI-assistendid

- **Tööriistad kõigi kolme jaoks.** Kui assistendid on lubatud valikus {{ui:Sätted}}, saab assistent lugeda legendi (`legend_open`), käivitada loenduse (`legend_count_start`, seejärel `legend_count_status` ja `legend_count_result`) ning selle lisada (`legend_count_add`, mis võib enne eelvaadata). Ta saab lugeda hinnamälu (`prices_list`) ja hinnastada kirjeid selle järgi (`prices_apply`, mis võib enne eelvaadata) ning lugeda tarnijakontrolli (`supply_check`). Tarnijafaili lisamine jääb sinu teha. Vaata [Kasuta TakeoffCraftit AI-assistentidega](topic:use-with-ai-assistants).

### Kõigis rakendustes

- **Keeled.** Kokku viiskümmend neli keelt; kümme on uued (leedu, läti, bosnia, marathi, telugu, albaania, afrikaani, filipiini, suahiili ja usbeki). Muud kui inglise keel on masintõlked, kuni emakeelne kõneleja on need läbi lugenud.
- **Sisendseadmed.** {{ui:Sätted}} › {{ui:Globaalne}} › {{ui:Sisendseadmed}} määrab, mida teevad puuteplaat, hiire külgnupud, pliiats, 3D-hiir, mängupult või MIDI-kontroller, kas kõigi rakenduste või ühe jaoks. Vaata [Puuteplaadi, 3D-hiire või kontrolleri kasutamine](common:input-devices).
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} pakub valikuid {{ui:Mähi}} (algus), {{ui:2 rida}} ja {{ui:1 rida}}; grupid, mis ei mahu, kerivad külgsuunas. Vaata [Paneelide korraldamine](common:arrange-panels).
- **Probleemide paneel.** Ühine hoiatuste ja märkuste paneel sisaldab nüüd ülal kirjeldatud tarnija laoseisu kontrolli teiste kontrollide kõrval.
- **Lisandmoodulid.** Lisandmoodulid järgivad sinu kontoloendit. Vaata [Lisandmoodulid ja sinu kontoloend](common:addons-basics).
- **Ühenda oma AI.** CadCraft Studio on keskus: ühenda oma assistent korra kõigi kaheksa rakenduse jaoks. Studiol endal AI-d ei ole.

## Parandatud versioonis 0.8.1

- **DWG-failide klasside jaotis.** DWG-faili klasside jaotist lueti vale tüübina. See on parandatud TakeoffCraftis ja neljas muus rakenduses.
- **Studio saab töötamise ajal keelt vahetada.** Varem oli Studio ja selle pakendatud väljaanded ainult inglise keeles. Seda pole kõigil platvormidel desktop-versioonis testitud; anna teada, kui keel ei muutu.

## Veel pole selles versioonis

- **Pole koodiga allkirjastatud.** Windows võib hoiatada ning Macis paremklõpsad ja vali esimesel korral {{ui:Avatud}}. Poodide versioonid (Microsoft Store, Google Play, App Store) on peatatud ning iPadi ja iPhone'i versiooni ei ehitatud versiooniks 0.8.1 uuesti.
- **Studio uuendused.** Windowsi paigaldaja ja Linuxi paketid kontrollivad üks kord päevas ja küsivad enne. Kaasaskantav zip ainult teatab ning macOS ja APK ei uuenda end ise. 0.8 macOS .dmg järgib väljalaset.
- **Ühenda oma AI.** Ühe klõpsuga ühendus Studio sees, veebis töötav hostitud AI-ühendaja, oma API-võti Studio sees ja avaldatud MCP-pakett pole selles versioonis lubatud.
- **Loenda kõik.** Vaja on sümboleid, mis on joonistatud samamoodi nagu legendis, ja sümbol, millel on sein või pikk joon läbi, võib jääda leidmata. Peegelsümboleid ei leita ning lehte, millel pole mõõtkava ja mis on joonistatud teises suuruses, otsitakse legendi suuruses. Kontrolli esimese lehe leide enne, kui usaldad ülejäänut.
- **Tarnija laoseis.** Laoseisu arvud on sama värsked kui fail, mille lisad. Kontroll ei küsi kunagi tarnijalt.
- **Keeled.** Tamili rakenduse riba ületab.

Kõik muu on [Veel valmimata](topic:not-built-yet). Eelmise väljalaske kohta vaata [Mis on uut versioonis 0.7](topic:whats-new-0-7).
