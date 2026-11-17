---
title: Mis on uut versioonis 0.9
summary: Pikkused meetrites, sentimeetrites või millimeetrites, meetermõõdustikus pinnad m2-des koos seinapinnaga, 1:75 ja 1:150 mõõtkava eelseaded, kaaluühikud ja temperatuur, kaar kümne meetodiga ning reaalajas kursorid, jälgimine ja inimeste loend.
keywords: mis on uut, väljalaskemärkmed, muudatuste logi, 0.9, näita pikkusi kujul, meetrid, sentimeetrid, millimeetrid, meetermõõdustik, järgi üldsätet, ühikud, kuvaühikud, m2, ruutmeetrid, seinapind, mõõtkava eelseaded, 1:75, 1:150, kaal, kilogrammid, kg, tonn, ton, lb, temperatuur, celsius, fahrenheit, kaar, kaare meetodid, 3-punktiline kaar, raadius, reaalajas, kursorid, jälgimine, inimeste loend, klass, tööriistavihjed, paigutus, 0.8, 0.8.1, versioon, uued funktsioonid, loenda kõik, legend, sümbolilegend, kogu komplekt, hinnamälu, varasemad tööd, viimane töö, tüüpiline hind, tarnija, laoseis, tarneaeg, tagasitellimus, tellimisloend, puudus, probleemide paneel, assistent, keeled, sisendseadmed, tööriistariba read, dwg
from: 6182b998
---

See on see, mis muutus TakeoffCrafti versioonis 0.9 võrreldes versiooniga 0.8.1. See on selle rakenduse väike väljalase: pikkusi saab nüüd lugeda meetrites, sentimeetrites või millimeetrites, pinnad ja mõõtkavad järgivad korralikult meetermõõdustikku ning Kaarel on kümme joonistamisviisi. Reaalajas sessioonid näitavad ka, kes on kus.

## Uus

### Pikkuste lugemine meetrites, sentimeetrites või millimeetrites

- **Näita pikkusi kujul.** {{ui:Sätted}} › {{ui:TakeoffCraft}} sisaldab {{ui:Näita pikkusi kujul}}, mille valikud on {{ui:Järgi üldsätet}}, {{ui:Jalad ja tollid}}, m, cm ja mm. {{ui:Järgi üldsätet}} kasutab meetermõõdustiku pikkusühikut, mille oled jaotises {{ui:Sätted}} › {{ui:Globaalne}} › {{ui:Ühikud}} tärniga tähistanud, ja jalad-tollid, kui ühtegi pole tähistatud. See muudab, kuidas pikkused lehel, olekuribal ja paneelides loetakse, sealhulgas kõrgused, sügavus, paksus ja tasandid. Kõrguse väljale sisestatud paljas number loetakse näidatud ühikus.
- **Ainult kuvamiseks.** Kogused, kulud ja eksport arvutatakse täpsete pikkuste järgi. Valik 1/16, 1/8 ja 1/4 tolli ilmub ainult jalgade-tollide puhul. Vaata [Pikkuste näitamine meetrites](topic:show-lengths-in-meters).
- **Kaaluühikud.** {{ui:Sisestatud kogus (joonist pole)}} üksus võib nüüd olla lb, TON, kg või t ja seda saab hinnastada ühiku kaupa.
- **Temperatuur.** Igal üksusel on üksuse redaktoris valikuline väli {{ui:Temperatuur}}, mis sisestatakse Celsiuse või Fahrenheiti kraadides. {{ui:Näita temperatuure}} jaotises {{ui:Sätted}} › {{ui:TakeoffCraft}} pakub {{ui:Järgi üldsätet}}, °C või °F.

### Pinnad ja mõõtkavad meetermõõdustikus töö jaoks

- **Pinnad joonisel m2-des.** Meetermõõdustikus üksusega mõõdetud pind ütleb nüüd joonise sildil ja märgiste paneelis ning tabelis m2, mitte SF. Reegel on m2, kui üksus on hinnastatud meetermõõdustikus või pikkused on näidatud m, cm või mm, ja muidu SF.
- **Seinapind.** Jooksva üksusega, millel on kõrgus, näidatakse ka selle seinapinda (pikkus korda kõrgus) üksuste loendis ja üksuste kaupa koguste tabeli all märkusreana.
- **Mõõtkava eelseaded 1:75 ja 1:150.** Need on rühma {{ui:Mõõtkava}} loendis {{ui:Eelseade}}, mis nüüd sisaldab 32 mõõtkava. Vaata [Mõõtkava eelseaded](topic:scale-presets).

### Kaar kümne meetodiga

- Kui {{ui:Kaar}} on sees (tööriistariba nupp või {{key:R}}), ilmub lehe ribale kast {{ui:Kaare meetod}}: 3 punktiga; Algus, Keskpunkt, Lõpp; Algus, Keskpunkt, Nurk; Algus, Keskpunkt, Pikkus; Algus, Lõpp, Nurk; Algus, Lõpp, Suund; Algus, Lõpp, Raadius; Keskpunkt, Algus, Lõpp; Keskpunkt, Algus, Nurk ja Keskpunkt, Algus, Pikkus. Nurka, pikkust, raadiust ja suunda saab klõpsata või sisestada. See töötab jooksvates lõikudes, pindades ja väljalõigetes. Enne versiooni 0.9 salvestatud failid avanevad samamoodi. Vaata [Kaare joonistamine kümne meetodiga](topic:draw-arcs-ten-methods).

### Koos töötamine

- **Näete üksteise kursoreid.** Reaalajas sessioonis näidatakse iga osaleja osutit lehel koos tema nime ja värviga ning punktiirjoonelise kastiga tema valitud märgiste ümber. Teisel lehel olevad inimesed on loetletud selle lehe nimega. Vaata [Töötamine reaalajas koos teistega](topic:work-live).
- **Jälgi inimest ja inimeste loendit.** Reaalajas sessiooni nupp {{ui:Inimesed}} loetleb iga osaleja, tööriista, millega ta töötab, lehe, millel ta on, ja viimase muudatuse aja. {{ui:Jälgi}} liigutab sinu vaadet koos nendega ning korraldaja saab kasutada {{ui:Palu kõigil mind jälgida}}. Vaata [Meeskonnakaaslase jälgimine reaalajas sessioonis](topic:follow-a-teammate).

## Kõigis rakendustes

- **Vihjed ja alustusvihje.** Hõljutusteksti on Bootstrapi vihje ja alustusvihje saab sulgeda.
- **Kerivad vahekaardiribad.** Paneeli vahekaardiriba, mis ei mahu, kerib lõikamise asemel.
- **Vahekaartide pealkirjad.** Brauseri vahekaart loeb `<document> - TakeoffCraft | CadCraft`.
- **Paigutus.** Paigutuste loend jaotises {{ui:Sätted}} on rippmenüü, mis näitab valitud paigutust.
- **Keel.** Valitud keel jõuab nüüd ka lehe enda kirjutatud sõnadeni, nagu Uus, Ava ja Salvesta. Inglisest erinevad keeled on masintõlke mustandid, kuni emakeelne kõneleja need on üle vaadanud.

## Ausad piirangud

- Pikkuste kuvamist, kaal- ja temperatuuriühikuid ning uusi eelseadeid on kontrollitud testidega ja lehel. Iga paneeli iga ühikuga ei ole käsitsi kontrollitud.
- Inimeste loendit ei ole käsitsi kontrollitud päriselus õpetaja ja õpilastega.
- Inglisest erinevad keeled on masintõlke mustandid.
- Windowsi paigaldajad ei ole koodiallkirjastatud ({{ui:Rohkem teavet}}, seejärel {{ui:Käivita siiski}}). macOS-i kettapilt ei ole notariseeritud (paremklõps, seejärel {{ui:Avatud}}).

## Varem: 0.8 ja 0.8.1

See on see, mis muutus TakeoffCrafti versioonis 0.8 (väljalastud 2026-11-01) ja 0.8.1 (2026-11-02) võrreldes versiooniga 0.7. Sümbolilegendi saab nüüd loendada korraga kogu komplekti üle, uue koguste arvestuse saab alustada varasemate tööde hindadest ning koguste arvestust saab kontrollida tarnija laoseisu vastu. 0.8.1 on parandusväljalase.

### Uus

**Loenda kogu komplekt**

- **Märgi legend üks kord.** {{ui:Loenda kõik}} tööriistaribal loeb sümbolilegendi: lohista kast sümbolite ja nende kõrvale trükitud nimede ümber. Iga sümbol on loetletud oma pildi ja nimega ning nimest saab üksuse nimi. Eemalda linnuke sellelt, mida ei soovi, seejärel vali {{ui:Loenda N lehel}}. Riba näitab lehte, mida otsitakse, {{ui:Loobu}} peatab jooksu ja leht jääb kasutatavaks.
- **Kõik lehed ühe jooksuga.** Iga sümbol loendatakse kõigil avatud lehtedel. Teise mõõtkavaga joonistatud lehti otsitakse selles mõõtkavas ja sümbolid leitakse pööratuna mis tahes täisnurga all. Legendi enda sümboleid oma lehel ei loendata.
- **Ülevaade enne lisamist.** Igal kogusummal on iga lehe kohta link („E-103: 4“), mis viib sellele lehele. Kliki leitud kastil, et see välja jätta, ja kliki uuesti, et see tagasi tuua. Vastavustase (50% kuni 100%) ainult filtreerib leitut; midagi ei otsita uuesti.
- **Üks tagasivõtmise samm.** {{ui:Lisa N märgist}} teeb iga sümboli kohta loenduse üksuse ja märgise igale leitud kohale. Nimi, mis on juba sinu loenduse üksus, kasutatakse uuesti. {{key:Ctrl+Z}} võtab kõik üksused ja märgised tagasi. Mida aktsepteerid, toidab ka {{ui:Õpitud}}.
- **Sümbolid suvalise nurga all.** Enne loendamist märgi {{ui:Sümbolid suvalise nurga all}}, et leida ka sümbolid, mis on pööratud nurga all, mis ei ole täisnurk. Otsing pöörab siis iga sümbolit iga 15 kraadi järel ning sümbol, mis ei ole ümmargune, võib võtta kuni kuus korda rohkem aega.
- **Mis see on.** Lihtne sümbolite vastavus sinu enda lehtedel, ilma treenitud mudelita, ja midagi ei lahku sinu arvutist. Väljamõeldud 200-lehelisel komplektil võttis see Chrome'is kiirel lauaarvutil algusest lõpuni 9,4 sekundit; päris plaanikomplektid on aeglasemad. Vaata [Loenda kogu komplekt](topic:count-everything).

**Hinnamälu sinu enda töödest**

- **TakeoffCraft mäletab sinu määrasid.** Kui salvestad koguste arvestuse, jäetakse meelde iga kasutatud hinnastatud üksus nime ja tüübi järgi: materjali määr, tööjõu määr, kadu ja ühik. Iga nime kohta hoitakse viimased 12 tööd. See hoitakse selles arvutis hinnateegi kõrval, mitte kunagi koguste arvestuse faili sees, ega midagi ei saadeta kuhugi.
- **Alusta sellest uut koguste arvestust.** {{ui:Hinnad}} tööriistaribal näitab iga üksuse kohta viimase töö määrasid, tüüpilisi määrasid ja vahemikku. {{ui:Kasuta viimast}} või {{ui:Kasuta tüüpilist}} hinnastab ühe üksuse ja {{ui:Hinnasta N hinnastamata üksust mälust}} täidab kõik üksused, millel hinda veel pole. Iga kasutamine on üks tagasivõtmise samm.
- **Vanemad tööd.** {{ui:Õpi varasemast koguste arvestusest…}} jätab meelde salvestatud koguste arvestuse hinnastatud üksused (.json).
- **Vaata, muuda, unusta.** {{ui:Kõik meeldejäetud}} loetleb iga nime; prügikastinupp unustab ühe ja {{ui:Tühjenda kõik hinnad}} unustab kõik. Lõpetamiseks lülita välja {{ui:Jäta mu hinnad meelde, kui salvestan koguste arvestuse}}. Tükihinda ei panda kunagi üksusele, mis on hinnastatud jalgade kaupa. Vaata [Hinnamälu varasematest töödest](topic:price-memory).

**Tarnija laoseis ja tarneajad**

- **Kontrolli tarnija nimekirja vastu.** {{ui:Tarne}} tööriistaribal võtab tarnija laoseisu nimekirja ({{ui:Lisa tarnijafail…}}), CSV-faili või tabeli, ning kontrollib, mida koguste arvestus vajab, koos kaoga, selle vastu. Alles hoitakse kuni viis faili. Midagi ei saadeta ega küsita tarnijalt: sina tood faili.
- **Mida see ütleb.** Puudu olevad üksused tulevad esimeseks: „Puudu 120 EA“, „Tarneaeg 21 päeva“, „Tagasitellimusel“, „Ühik erineb“, „Laoseisu andmed puuduvad“ või „Laos olemas“. {{ui:Pikim soovitud ootamine (päevades)}} algab 14-st.
- **Tellimisloend.** {{ui:Tellimisloend (CSV)}} laadib alla puudu olevad üksused koos puuduva koguse, tarnija ja tarneajaga.
- **Hinnad teeki.** Kui failis on hinnad, määrab {{ui:Hinnad teeki}} iga teegi kirje materjali hinna, millel on sama nimi ja ühik. Hinnasta teegist uuesti, et need koguste arvestusse tuua.
- **Probleemide paneelis.** Puudus on hoiatus ja pikk ootamine märkus, jaotises „Tarnija laoseis“. Võid ühe aktsepteerida põhjusega ning põhjus salvestatakse koguste arvestusse. Vaata [Tarnija laoseisu ja tarneaegade kontrollimine](topic:supplier-stock).

**AI-assistendid**

- **Tööriistad kõigi kolme jaoks.** Kui {{ui:Sätted}} on assistendid lubatud, saab assistent lugeda legendi (`legend_open`), käivitada loenduse (`legend_count_start`, seejärel `legend_count_status` ja `legend_count_result`) ning selle lisada (`legend_count_add`, mis võib kõigepealt eelvaadata). Ta saab lugeda meeldejäetud hindu (`prices_list`) ja hinnastada nende järgi üksusi (`prices_apply`, mis võib kõigepealt eelvaadata) ning lugeda tarnija kontrolli (`supply_check`). Tarnijafaili lisamine jääb sinu teha. Vaata [Kasuta TakeoffCrafti AI-assistentidega](topic:use-with-ai-assistants).

**Kõigis rakendustes**

- **Keeled.** Kokku viiskümmend neli keelt; kümme on uut (leedu, läti, bosnia, marathi, telugu, albaania, afrikaani, filipino, suahiili ja usbeki). Inglisest erinevad keeled on masintõlke mustandid, kuni emakeelne kõneleja need on üle vaadanud.
- **Sisendseadmed.** {{ui:Sätted}} › {{ui:Globaalne}} › {{ui:Sisendseadmed}} määrab, mida teevad puuteplaat, hiire külgnupud, pliiats, 3D-hiir, mängupult või MIDI-kontroller, kõigi rakenduste või ühe jaoks. Vaata [Puuteplaadi, 3D-hiire või kontrolleri kasutamine](common:input-devices).
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} pakub {{ui:Mähi}} (algus), {{ui:2 rida}} ja {{ui:1 rida}}; rühmad, mis ei mahu, kerivad külgsuunas. Vaata [Paneelide paigutus](common:arrange-panels).
- **Probleemide paneel.** Jagatud hoiatuste ja märkuste paneelil on nüüd ka ülal kirjeldatud tarnija laoseisu kontroll teiste kontrollide kõrval.
- **Lisandmoodulid.** Lisandmoodulid järgivad sinu kontode loendit. Vaata [Lisandmoodulid ja sinu kontode loend](common:addons-basics).
- **Ühenda oma tehisintellekt.** CadCraft Studio on keskus: ühenda assistent üks kord kõigi kaheksa rakenduse jaoks. Studiol endal tehisintellekti ei ole.

### Parandatud versioonis 0.8.1

- **DWG klasside jaotis.** DWG-faili klasside jaotist loeti vale tüübina. See on parandatud TakeoffCraftis ja neljas teises rakenduses.
- **Studio saab keelt muuta töö ajal.** Varem olid Studio ja selle pakitud versioonid ainult inglise keeles. Seda ei ole töölauaversioonis kõigil platvormidel testitud; anna meile teada, kui keel ei muutu.

### Selles versioonis veel mitte

- **Pole koodiallkirjastatud.** Windows võib hoiatada ja Macis paremklõpsad ning valid esmakordselt {{ui:Avatud}}. Poe versioonid (Microsoft Store, Google Play, App Store) on ootel ning iPadi ja iPhone'i versiooni ei ehitatud versiooni 0.8.1 jaoks uuesti.
- **Studio uuendused.** Windowsi paigaldaja ja Linuxi paketid kontrollivad üks kord päevas ja küsivad enne. Portatiivne zip ainult teatab, ning macOS ja APK ei uuenda end ise. 0.8 macOS .dmg järgib väljalaset.
- **Ühenda oma tehisintellekt.** Ühe klõpsuga ühendus Studios, hostitud ühendaja tehisintellektile brauseris, sinu enda API-võti Studios ja avaldatud MCP-pakett ei ole selles versioonis lubatud.
- **Loenda kõik.** See vajab sümboleid, mis on joonistatud samamoodi nagu legendis, ja sümbol, millest läbi käib sein või pikk joon, võib jääda leidmata. Peegeldatud sümboleid ei leita ja mõõtkavata lehte, mis on joonistatud teises suuruses, otsitakse legendi suuruses. Kontrolli esimesel lehel leitut enne, kui usaldad ülejäänut.
- **Tarnija laoseis.** Laoseisu andmed on sama värsked kui lisatud fail. Kontroll ei küsi kunagi tarnijalt.
- **Keeled.** Tamili keele rakendusriba ei mahu ära.

Kõik muu on jaotises [Veel valmimata](topic:not-built-yet). Eelmise väljalaske kohta vaata [Mis on uut versioonis 0.7](topic:whats-new-0-7).
