---
title: Mis on uut versioonis 0.9 (varasem)
summary: Pikkused meetrites, sentimeetrites või millimeetrites, meetrilised pindalad m2 kujul koos seinapindalaga, 1:75 ja 1:150 mõõtkavaeelseaded, kaal- ja temperatuuriühikud, kaar kümne meetodiga ning reaalajas kursorid, jälgimine ja osalejate loend.
keywords: mis on uut 0.9, varasem väljalase, mis on uut, väljalaskemärkmed, muutelogi, 0.9, näita pikkusi kujul, meetrid, sentimeetrid, millimeetrid, meetriline, järgi üldsätet, ühikud, kuvaühikud, m2, ruutmeetrid, seinapindala, mõõtkava eelseaded, 1:75, 1:150, kaal, kilogrammid, kg, tonn, lb, temperatuur, Celsius, Fahrenheit, kaar, kaare meetodid, 3-punktiline kaar, raadius, reaalajas, kursorid, jälgimine, osalejate loend, klass, tööriistavihjed, paigutus, 0.8, 0.8.1, versioon, uued funktsioonid, loenda kõik, legend, sümbolilegend, terve komplekt, hinnamälu, varasemad tööd, viimane töö, tüüpiline hind, tarnija, laoseis, tarneaeg, ettetellimus, tellimisloend, puudus, probleemide paneel, assistent, keeled, sisendseadmed, tööriistariba read, dwg
from: f4322ba2
---

See on, mis muutus TakeoffCraft 0.9 versioonis, võrreldes versiooniga 0.8.1. See on selle rakenduse jaoks väike väljalase: pikkusi saab nüüd lugeda meetrites, sentimeetrites või millimeetrites, pindalad ja mõõtkavad järgivad meetrilist tööd korrektselt ning kaart saab joonistada kümmel viisil. Reaalajas seansid näitavad ka seda, kes on kus.

## Uus

### Pikkuste lugemine meetrites, sentimeetrites või millimeetrites

- **Näita pikkusi kujul.** {{ui:Sätted}} › {{ui:TakeoffCraft}} sisaldab valikut {{ui:Näita pikkusi kujul}}, mille väärtused on {{ui:Järgi üldsätet}}, {{ui:Jalad ja tollid}}, m, cm ja mm. {{ui:Järgi üldsätet}} kasutab metrilist pikkuseühikut, mille märgistasite valikus {{ui:Sätted}} › {{ui:Globaalne}} › {{ui:Ühikud}}, ja jalgu ning tolle, kui ühtegi ei ole märgitud. See muudab pikkuste kuvamist joonisel, olekuribal ja paneelides, sealhulgas kõrgustes, sügavuses, paksuses ja korrustes. Kõrguse väljale sisestatud paljas number loetakse kuvatava ühiku järgi.
- **Ainult kuvamine.** Kogused, maksumused ja eksport arvutatakse täpsete pikkuste järgi. Valik 1/16, 1/8 ja 1/4 tolli ilmub ainult jalgade ja tollide korral. Vaata [Pikkuste kuvamine meetrites](topic:show-lengths-in-meters).
- **Kaaluühikud.** Kirjet {{ui:Sisestatud kogus (joonist pole)}} saab nüüd esitada ühikutes lb, TON, kg või t ning hinnata ühiku kohta.
- **Temperatuur.** Igal kirjel on kirje redaktoris valikuline väli {{ui:Temperatuur}}, mis sisestatakse kraadides C või F. {{ui:Näita temperatuure}} valikus {{ui:Sätted}} › {{ui:TakeoffCraft}} on {{ui:Järgi üldsätet}}, °C või °F.

### Pindalad ja mõõtkavad meetrilise töö jaoks

- **Pindalad m2 kujul joonisel.** Meetrilise kirjega mõõdetud pindala on nüüd joonise märgisel ja märgistuspaneelis, samuti tabelis, tähistatud m2-ga, mitte SF-iga. Reegel on: m2, kui kirje on hinnastatud meetrites või kui pikkusi kuvatakse m, cm või mm, muidu SF.
- **Seinapindala.** Lineaarne kirje, millel on kõrgus, näitab kirjete loendis ja koguste tabeli all märkereana ka oma seinapindala (pikkus korda kõrgus).
- **Mõõtkavaeelseaded 1:75 ja 1:150.** Need on rühma {{ui:Mõõtkava}} loendis {{ui:Eelseade}}, mis sisaldab nüüd 32 mõõtkava. Vaata [Mõõtkava eelseaded](topic:scale-presets).

### Kaar kümne meetodiga

- Kui {{ui:Kaar}} on sisse lülitatud (tööriistaribal nupp või {{key:R}}), ilmub lehe ribale kast {{ui:Kaare meetod}}: 3 punktiga, Algus, Keskpunkt, Lõpp; Algus, Keskpunkt, Nurk; Algus, Keskpunkt, Pikkus; Algus, Lõpp, Nurk; Algus, Lõpp, Suund; Algus, Lõpp, Raadius; Keskpunkt, Algus, Lõpp; Keskpunkt, Algus, Nurk; ning Keskpunkt, Algus, Pikkus. Nurka, pikkust, raadiust ja suunda saab klõpsata või sisestada. See töötab joonelistes ahelates, aladel ja väljalõigetes. Enne versiooni 0.9 salvestatud failid avanevad samamoodi. Vaata [Kaarte joonistamine kümne meetodiga](topic:draw-arcs-ten-methods).

### Koostöö

- **Teiste kursorid.** Reaalajas seansis kuvatakse iga osaleja osuti lehel koos nime ja värviga ning katkendjoonega kastiga märkide ümber, mille ta valis. Teisel lehel olevad osalejad on loetletud selle lehe nimega. Vaata [Töö reaalajas koos teistega](topic:work-live).
- **Osaleja jälgimine ja osalejate loend.** Nupp {{ui:Osalejad}} reaalajas seansis loetleb iga osaleja, tema kasutatava tööriista, lehe, kus ta on, ja viimase muutmise aja. {{ui:Jälgi}} liigutab sinu vaadet tema omaga koos ning host saab kasutada {{ui:Palu kõigil mind jälgida}}. Vaata [Kaasosaleja jälgimine reaalajas seansis](topic:follow-a-teammate).

## Kõigis rakendustes

- **Tööriistavihjed ja alustusvihje.** Kursori viidel kuvatav tekst on Bootstrapi tööriistavihje ning alustusvihje saab sulgeda.
- **Kerivad vahekaardiribad.** Paneeli vahekaardiriba, mis ei mahu ära, kerib sisse ega lõiku ära.
- **Vahekaardi pealkirjad.** Brauseri vahekaart kuvab `<dokument> - TakeoffCraft | CadCraft`.
- **Paigutus.** Paigutuste loend valikus {{ui:Sätted}} on rippmenüü, mis näitab valitud paigutust.
- **Keel.** Valitud keel rakendub nüüd ka lehe enda kuvatavatele sõnadele, nagu Uus, Ava ja Salvesta. Muud keeled kui inglise keel on masintõlked, kuni emakeelne kasutaja on need läbi lugenud.

## Ausad piirangud

- Pikkuse kuvamist, kaal- ja temperatuuriühikuid ning uusi eelseadeid on kontrollitud testidega ja lehel. Iga paneeli iga ühikut pole käsitsi kontrollitud.
- Osalejate loendit pole käsitsi kontrollitud päris õpetaja ja õpilastega.
- Muud keeled kui inglise keel on masintõlked.
- Windowsi installijaid ei ole koodiga allkirjastatud (Rohkem infot, seejärel Käivita siiski). macOS-i ketast ei ole notariseeritud (paremklõps, seejärel Ava).

## Varem: 0.8 ja 0.8.1

See on, mis muutus TakeoffCraft 0.8 versioonis (välja antud 2026-11-01) ja 0.8.1 versioonis (2026-11-02), võrreldes versiooniga 0.7. Sümbolilegendi saab nüüd kogu komplekti peale korraga loendada, uus koguste arvestus saab alguse sinu varasemate tööde hindadest ning koguste arvestust saab kontrollida tarnija laoseisu vastu. Versioon 0.8.1 on parandusväljalase.

### Uus

**Loenda kogu komplekt**

- **Märgi legend üks kord.** Tööriistaribal olev {{ui:Loenda kõik}} loeb sümbolilegendi: lohista kast sümbolite ja nende kõrval trükitud nimede ümber. Iga sümbol on loendis koos oma pildi ja nimega ning nimi saab kirje nimeks. Eemalda märkeruut sellelt, mida ei soovi, ja vali seejärel {{ui:Loenda N lehel}}. Riba näitab, millist lehte otsitakse, {{ui:Loobu}} peatab käigu ning leht jääb kasutatavaks.
- **Kõik lehed ühe käiguga.** Iga sümbol loendatakse igal avatud lehel. Lehte, mis on joonistatud teises mõõtkavas, otsitakse selles mõõtkavas ning sümbolid leitakse pööratuna mis tahes täisnurga all. Legendi enda sümboleid oma lehel ei loendata.
- **Ülevaatus enne lisamist.** Iga koguarv on lehe kaupa link („E-103: 4“), mis viib selle lehe juurde. Klõpsa leiu kastil, et see välja jätta, ja klõpsa uuesti, et see tagasi tuua. Sobivustase (50% kuni 100%) ainult filtreerib leitut; midagi ei otsita uuesti.
- **Üks tagasivõtmise samm.** {{ui:Lisa N märki}} loob iga sümboli kohta loenduskirje ning märgi igale leiule. Nimi, mis on juba sinu loenduskirje, kasutatakse uuesti. {{key:Ctrl+Z}} võtab tagasi kõik kirjed ja märgid. Mida aktsepteerid, läheb ka {{ui:Õpitud}} hulka.
- **Sümbolid suvalise nurga all.** Enne loendamist märgi {{ui:Sümbolid suvalise nurga all}}, et leida ka sümbolid, mis on pööratud muu kui täisnurga all. Otsing pöörab siis iga sümbolit iga 15 kraadi järel ning sümbol, mis ei ole ümmargune, võib kesta kuni kuus korda kauem.
- **Mis see on.** Lihtne sümbolite vastendamine sinu enda lehtedel, ilma treenitud mudelita, ning miski ei lahku sinu arvutist. Väljamõeldud 200-lehelisel komplektil võttis see 9,4 sekundit algusest lõpuni Chrome'is kiires lauaarvutis; päris jooniste komplektid on aeglasemad. Vaata [Loenda kogu komplekt](topic:count-everything).

**Hinnamälu sinu enda töödest**

- **TakeoffCraft mäletab sinu hindu.** Kui salvestad koguste arvestuse, jäetakse meelde iga kasutatud hinnastatud kirje nime ja tüübi järgi: materjali hind, tööjõu hind, jäätmed ja ühik. Iga nime kohta hoitakse viimased 12 tööd. See hoitakse selles arvutis hinnaraamatu kõrval, mitte kunagi koguste arvestuse failis, ning midagi ei saadeta kuhugi.
- **Alusta uut koguste arvestust sellest.** {{ui:Hinnad}} tööriistaribal näitab iga kirje kohta viimase töö hindu, tüüpilisi hindu ja vahemikku. {{ui:Kasuta viimast}} või {{ui:Kasuta tüüpilist}} hinnastab ühe kirje ning {{ui:Hinnasta N hinnata kirjet mälust}} täidab kõik kirjed, millel hinda veel ei ole. Iga kasutus on üks tagasivõtmise samm.
- **Varasemad tööd.** {{ui:Õpi varasemast koguste arvestusest…}} jätab meelde salvestatud koguste arvestuse (.json) hinnastatud kirjed.
- **Vaata, muuda, unusta.** {{ui:Kõik meeldejäetud}} loetleb iga nime; prügikasti nupp unustab ühe, ja {{ui:Tühjenda kõik hinnad}} unustab kõik. Lõpetamiseks lülita välja {{ui:Jäta mu hinnad meelde, kui salvestan koguste arvestuse}}. Hinda tükikaupa ei panda kunagi jalgades mõõdetavale kirjele. Vaata [Hinnamälu varasematest töödest](topic:price-memory).

**Tarnija laoseis ja tarneajad**

- **Kontrolli tarnija nimekirja vastu.** Tööriistaribal olev {{ui:Tarne}} võtab tarnija laonimekirja ({{ui:Lisa tarnijafail…}}), CSV-faili või tabeli, ning kontrollib, mida koguste arvestus vajab koos jäätmetega. Alles hoitakse kuni viis faili. Midagi ei saadeta ega küsita tarnijalt: faili toote sina.
- **Mida see ütleb.** Puudu olevad kirjed on esimesed, näiteks „Puudu 120 EA“, „Tarneaeg 21 päeva“, „Ettetellimus“, „Ühik erineb“, „Laoseisu arv puudub“ või „Laos“. {{ui:Pikim soovitud ootamine (päevades)}} algab väärtusega 14.
- **Tellimisloend.** {{ui:Tellimisloend (CSV)}} laeb alla puudu olevad kirjed puuduva koguse, tarnija ja tarneajaga.
- **Hinnad hinnaraamatusse.** Kui failis on hinnad, määrab {{ui:Hinnad teeki}} iga hinnaraamatu kirje materjali hinna, mille nimi ja ühik on samad. Hinnasta uuesti hinnaraamatust, et need koguste arvestusse tuua.
- **Probleemide paneelis.** Puudus on hoiatus ja pikk ootamine on märkus, mõlemad rubriigi „Tarnija laoseis“ all. Puudust saab aktsepteerida põhjendusega ning põhjendus salvestatakse koguste arvestusse. Vaata [Tarnija laoseisu ja tarneaegade kontrollimine](topic:supplier-stock).

**AI-assistendid**

- **Tööriistad kõigi kolme jaoks.** Kui sätetes {{ui:Sätted}} on assistentide kasutamine lubatud, saab assistent lugeda legendi (`legend_open`), käivitada loenduse (`legend_count_start`, seejärel `legend_count_status` ja `legend_count_result`) ning selle lisada (`legend_count_add`, mis saab enne eelvaadet näidata). Ta saab lugeda meeldejäetud hindu (`prices_list`) ja hinnastada kirjeid nende põhjal (`prices_apply`, mis saab enne eelvaadet näidata) ning lugeda tarnija kontrolli (`supply_check`). Tarnijafaili lisamine jääb sinu ülesandeks. Vaata [TakeoffCraft'i kasutamine AI-assistentidega](topic:use-with-ai-assistants).

**Kõigis rakendustes**

- **Keeled.** Kokku viiskümmend neli keelt; kümme on uued (leedu, läti, bosnia, marathi, telugu, albaania, afrikaani, filipino, suahiili ja usbeki). Muud keeled kui inglise keel on masintõlked, kuni emakeelne kasutaja on need läbi lugenud.
- **Sisendseadmed.** {{ui:Sätted}} › {{ui:Globaalne}} › {{ui:Sisendseadmed}} määrab, mida teevad puuteplokk, hiire külgnupud, pliiats, 3D-hiir, mängupult või MIDI-kontroller, kõigi rakenduste või ühe rakenduse jaoks. Vaata [Puuteplokki, 3D-hiire või kontrolleri kasutamine](common:input-devices).
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} pakub valikuid {{ui:Mähi}} (algus), {{ui:2 rida}} ja {{ui:1 rida}}; rühmad, mis ei mahu ära, kerivad külgsuunas. Vaata [Paneelide paigutamine](common:arrange-panels).
- **Probleemide paneel.** Ühine hoiatuste ja märkuste paneel sisaldab nüüd ülal kirjeldatud tarnija laoseisu kontrolli teiste kontrollide kõrval.
- **Lisandmoodulid.** Lisandmoodulid järgivad sinu konto loendit. Vaata [Lisandmoodulid ja sinu kontoloend](common:addons-basics).
- **Ühenda oma AI.** CadCraft Studio on keskus: ühenda oma assistent üks kord kõigi kaheksa rakenduse jaoks. Studiol endal AI-d ei ole.

### Parandatud versioonis 0.8.1

- **DWG-klasside jaotis.** DWG-faili klasside jaotist loeti vale tüübina. See on parandatud TakeoffCraftis ja neljas muus rakenduses.
- **Studio saab keelt vahetada töö ajal.** Varem oli Studio ja selle pakitud väljaanded ainult inglise keeles. Seda ei ole testitud töölaua versioonis kõigil platvormidel; teata meile, kui keel ei muutu.

### Selles versioonis veel puudub

- **Koodiga allkirjastamata.** Windows võib hoiatada ning Macis paremklõpsa ja valige esimesel korral {{ui:Avatud}}. Poepoolsed versioonid (Microsoft Store, Google Play, App Store) on ootel ning iPadi ja iPhone'i versioon ei ole versiooni 0.8.1 jaoks uuesti ehitatud.
- **Studio uuendused.** Windowsi installija ja Linuxi paketid kontrollivad uuendusi üks kord päevas ning küsivad enne. Kaasaskantav zip ainult teatab uuendusest ning macOS ja APK ei uuenda end ise. 0.8 macOS-i .dmg järgib väljalasset.
- **AI ühendamine.** Ühe klõpsuga ühendamine Studio sees, brauseri AI hostitud konnektor, sinu enda API-võti Studio sees ja avaldatud MCP-pakett ei ole selles versioonis lubatud.
- **Loenda kogu komplekt.** See vajab sümboleid, mis on joonistatud samamoodi nagu legendis, ning sümbolit, millel on seina või pika joone läbi, võidakse vahele jätta. Peegelpildis sümboleid ei leita ning lehte, millel ei ole mõõtkava ja mis on joonistatud teises suuruses, otsitakse legendi suuruses. Kontrolli esimesel lehel leitud vasteid enne, kui usaldad ülejäänud.
- **Tarnija laoseis.** Laoseisu arvud on sama värskes kui fail, mille lisad. Kontroll ei küsi kunagi tarnijalt.
- **Keeled.** Tamili keele rakenduse riba ületab piiri.

Kõik muu on leitav lehelt [Veel ehitamata](topic:not-built-yet). Eelmise väljalaske kohta vaata [Mis on uut versioonis 0.7](topic:whats-new-0-7).
