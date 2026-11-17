---
title: Tõrkeotsing
summary: Sümptomid, põhjused ja parandused sõnumite ja ootamatuste jaoks, mida TakeoffCraftis võid kohata, tsiteeritud nii, nagu rakendus need näitab.
keywords: probleemid, vead, ei tööta, parandus, abi, keeldumine, ei mõõda, mõõtkava puudub, puuduvad märgid, eksport ebaõnnestus, võrguta, puuteekraan
from: cd319c9b
---

TakeoffCraft selgitab enamikku keeldumisi akna all olevas olekuribas. Leia sõnum allpool.

## Failide avamine

| Sõnum või sümptom | Põhjus | Parandus |
|---|---|---|
| PDF-lugejat ei saanud laadida. Proovimiseks laadi lehekülg uuesti. | Rakenduse PDF-lugeja ei laadinud, tavaliselt sellepärast, et oled võrguta ja rakendust polnud kunagi võrguks salvestatud. | Ühenda võrku ja laadi uuesti. Seejärel vali {{ui:Salvesta võrguks}} ja oota {{ui:Valmis ka võrguta}}; vt [Töö võrguta](common:offline). |
| (nimi) on parooliga kaitstud. Ava kaitsmata koopia. | PDF nõuab avamiseks parooli. | Palu kaitsmata koopia või eemalda parool usaldusväärses PDF-programmis. |
| (nimi) ei saanud PDF-ina lugeda (…) | Fail on rikutud või pole tegelikult PDF. | Laadi uuesti alla või salvesta uuesti selle programmiga, mis selle tegi. |
| (nimi) on juba avatud. | Sama PDF (sama sisu) on avatud. | Pole midagi teha. |
| TakeoffCraft avab PDF-e ja .takeoff.json projekte. Vahele jäetud: … | Muud failitüübid jäeti välja. | Teisenda joonised enne PDF-iks. |
| Failide lohistamisel ei juhtu midagi | Failid lohistati väljapoole brauseriakent või brauser avas PDF-i uuel vahekaardil. | Lohista TakeoffCraft'i lehele endale; raam „Lohista PDF-id või .takeoff.json“ näitab, millal see töötab. |
| Suure komplekti avamine võtab aega | Iga PDF loetakse täielikult, et seda identifitseerida. | Oota, kuni teade „Avan (nimi)…“ kaob. Pisipildid täituvad kerimisel. |

## Mõõtmine

| Sõnum või sümptom | Põhjus | Parandus |
|---|---|---|
| Ava kõigepealt PDF. | Lehte pole avatud. | Ava PDF. |
| Sellel lehel pole veel mõõtkava, seega seda ei saa mõõta. Vali enne eelseade või kalibreeri (loendused toimivad ilma selleta). | Lineaarne, pindala, ring ja väljalõige vajavad mõõtkava. | [Määra mõõtkava](topic:set-the-scale). |
| Tee kõigepealt lineaarne kirje (nimeta see jaotises {{ui:Kirjed}}), seejärel klõpsa lehel. | Sellist tüüpi kirjet pole. | Täida avanenud {{ui:Uus kirje}} vorm ja vali {{ui:Lisa}}. |
| Vali enne mõõdetav kirje (kirjete paneel). | Praegune kirje on kustutatud. | Klõpsa kirjel jaotises {{ui:Kirjed}}. |
| Joone jaoks on vaja vähemalt kahte punkti. | Lõpetasid pärast ühte klõpsu. | Klõpsa vähemalt kaks punkti. |
| Pindala jaoks on vaja vähemalt kolme punkti. | Liiga vähe nurki. | Klõpsa vähemalt kolm nurka. |
| Kontuur ristub iseendaga, seega oleks selle pindala vale. Joonista see uuesti ilma ristumata. | Kaheksakujuline kuju. | Joonista kaks pindala või käi servast järjekorras. |
| Need punktid ei piira pindala. | Kõik punktid on ühel joonel. | Klõpsa nurki, mis piiravad ruumi. |
| Vali enne pindala märk (valiku tööriist), seejärel vali Väljalõige ja joonista auk selle sisse. | {{ui:Väljalõige}} vajab valitud pindala. | Vajuta {{key:V}}, klõpsa pindalal ja seejärel {{key:X}}. |
| Väljalõige peab asuma täielikult pindala sees. | Auk ristub või ulatub üle kontuuri. | Joonista auk pindala sisse. |
| Väljalõiked ei tohi üksteisega kattuda. | Kaks auku kattuvad. | Joonista üks auk mõlema ümber või hoia need eraldi. |
| … Punkt pandi tagasi. | Lohistatud nurk paneks kontuuri ristuma või suruks augu väljapoole. | Lohista kohta, mis hoiab kuju korrektsena. |
| Klõpsa punkti ringi servas, eemal keskpunktist. | Teine klõps oli keskpunktile liiga lähedal. | Klõpsa kaugemale. |
| Klõpsud nihutavad lehte punktide lisamise asemel | Hiirenupu all olles liikus kursor rohkem kui mõne piksli võrra; see loeti lohistamiseks. | Klõpsa ilma liigutamata, eriti puuteplaadil. |
| Shift ei haakunud | Asetad punkti kaarele või joonistad ringi. | 45° haakumine kehtib ainult sirgetele lõikudele. |
| Punktid hüppavad lähedal olevale joonele | Haakumine joonise joontele on sisse lülitatud. | Suumi sisse, et klõpsata joonte vahel, või vajuta {{key:F3}}, et haakumine välja lülitada. |
| Haakumise marker ei ilmu | Haakumine on välja lülitatud, leht on skann või tööriist ei haakumise (Loe, Automaatne loendus, kleepimine). | Vajuta {{key:F3}}; skannitud lehel pole jooni, millele haakuda. |
| Pikkus on vale | Mõõtkava on vale (sageli suuruse muudetud PDF eelseadega). | Kasuta teadaoleva mõõdu kontrolli {{ui:Kontrolli}}, seejärel {{ui:Kalibreeri}}. |

## Mõõtkava

| Sõnum või sümptom | Põhjus | Parandus |
|---|---|---|
| Vali kaks punkti, mis on üksteisest kaugemal. | Kalibreerimispunktid on peaaegu üksteise peal. | Kalibreeri pikema mõõdu järgi. |
| Kalibreerimisdialoogis teade nagu „Seda kaugust ei saanud lugeda“ | Kaugus on vormingus, mida TakeoffCraft ei oska lugeda. | Vt [Pikkuse, kiiruse ja protsendi sisestamine](topic:entry-formats). |
| Sellel lehel pole veel mõõtkava, seega kontrollida pole midagi. Kalibreeri see või vali eelseade. | {{ui:Kontrolli}} mõõtkavata lehel. | Sea enne mõõtkava. |
| {{ui:Eelseade}} loend on hall | Ühtegi lehte pole avatud. | Ava PDF. |

## Kogused ja valemid

| Sõnum või sümptom | Põhjus | Parandus |
|---|---|---|
| Mittetäielik: … (ei ole kogusummas) | Valemiviga või märgid lehtedel, millel pole mõõtkava. | Vt [Koguste ja hinnangu lugemine](topic:read-quantities#the-incomplete-warning). |
| +(n) mõõtkavata kirje kõrval | Osa selle märkidest on lehtedel ilma mõõtkavata. | Anna neile lehtedele mõõtkava. |
| Valemi viga: … | Valemit ei saa arvutada. | Vt [Valemikeel](topic:formulas#errors). |
| Sellel kirjel on märgid, seega tüüpi ei saa muuta. | Tüüp on lukus, kui märgid on olemas. | Tee teist tüüpi uus kirje ja joonista märgid selle abil uuesti. |
| Kirjel peab olema nimi. | Nimeväli tühjendati. | Sisesta nimi. |
| Sisesta summa nagu 12.50. / Sisesta protsent nagu 10 või 7.5. | Hinda või jäätmeid ei saanud lugeda. | Vt [Pikkuse, hinna ja protsendi sisestamine](topic:entry-formats). |
| Kogusumma on topelt | Kirjel on oma hinnad ja koostekomponendid, mis kannavad sama kulu. | Määra kirje enda hinnad nulliks, kui komponendid kannavad kulu. |
| Selle kirje märgid on lehtedel, mida pole avatud. | Klõpsasid kirjel, mille kõik märgid on lehtedel, mida pole avatud. | Ava need PDF-id; nende nimed on loetletud jaotises {{ui:Lehed}}. |

## Automaatne loendus

| Sõnum või sümptom | Põhjus | Parandus |
|---|---|---|
| Too kast on liiga väike. Joonista see ümber terve sümboli. | Kast on väga väike. | Suumi sisse ja ümbritse kogu sümbol. |
| Kast on peaaegu tühi. Joonista see sümboli ümber. | Kast sisaldab ainult paberit. | Ümbritse sümbol ise. |
| Vasteid pole. Lase vastevälja madalamale või ümbritse sümbol täpsemalt. | Miski ei saavutanud piisavalt kõrget punktisummat. | Ümbritse sümbol täpsemalt või lohista {{ui:Vaste}} liugurit madalamale. |
| Liiga palju vasteid, sealhulgas valed sümbolid | Sarnased sümbolid saavad õigele lähedase punktisumma. | Tõsta {{ui:Vaste}} liugurit ja klõpsa valedel kastidel, et need tagasi lükata. |
| Vasteid puudub teistelt lehtedelt | Need lehed joonistavad sümboli teises suuruses või nurga all, mis pole 90° samm. | Otsi neil lehtedel kasti abil või loe käsitsi. |
| (n) lehte olid selle sümboli suuruse juures otsimiseks liiga suured. | Leht oleks töösuuruses liiga suur. | Ümbritse suurem sümbol või loe see leht käsitsi. |
| Otsing ebaõnnestus: … | Taustal toimuv otsing peatus. | Proovi uuesti; kui kordub, laadi leht uuesti (salvesta enne). Võrguta töötab see ainult siis, kui rakendusriba näitab {{ui:Valmis ka võrguta}}. |
| Lohistamine joonistab kasti panoraamimise asemel | Nii töötab {{ui:Automaatne loendus}}. | Hoia all {{key:Space}} ja lohista või lohista keskmise nupuga. |

## Salvestamine ja eksport

| Sõnum või sümptom | Põhjus | Parandus |
|---|---|---|
| Eksportida pole veel midagi: tee kirje ja võta see koguste arvestusse. | Kirjeid pole. | Tee esmalt kirje. |
| Avatud PDF-idel pole veel märke. | {{ui:Märgitud PDF}} ei saa avatud PDF-idele midagi joonistada. | Ava PDF-id, millel on märgid. |
| See PDF on parooliga kaitstud või krüpteeritud, seega märgitud koopiat ei saa kirjutada. … | PDF on krüpteeritud. | Ekspordi selle asemel {{ui:XLSX}} või kasuta PDF-i krüpteerimata koopiat (see vajab siis oma koguste arvestust, sest see on teine fail). |
| Märgitud PDF-i ei saanud kirjutada: … | Sageli: oled võrguta ja rakendust polnud võrguks salvestatud, seega PDF-kirjutaja puudub. | Mine võrku ja vali {{ui:Märgitud PDF}} uuesti. Selle vältimiseks vali {{ui:Salvesta võrguks}} ja oota {{ui:Valmis ka võrguta}}. |
| Alla laaditi ainult üks märgitud PDF | Brauser blokeeris mitu allalaadimist korraga. | Luba sellel saidil mitu allalaadimist ja ekspordi uuesti. |
| (fail) ei ole TakeoffCraft'i projekt (see pole kehtiv JSON). / See ei ole TakeoffCraft'i projektifail. | Vale fail või rikutud fail. | Vali `.takeoff.json` fail. |
| Selle projekti salvestas uuem TakeoffCraft. Ava see seal. | Fail pärineb uuemast versioonist. | Ava see uuemas versioonis. |
| (n) märki olid rikutud ja jäeti välja. | Osa failist oli rikutud või muudetud käsitsi. | Ülejäänu avati. Joonista puuduvad märgid uuesti või ava vanem koopia. |
| Märgid puuduvad pärast uuesti avamist | PDF-id pole avatud või üks neist on muutunud. | Vt [Salvesta ja ava koguste arvestus uuesti](topic:save-and-reopen#when-a-pdf-has-changed). |
| Brauser küsib „Lahkuda saidilt?“ | Salvestamata muudatused. | Jää lehele ja salvesta klahviga {{key:Mod+S}}. |

## Klahvid ja hiir

| Sümptom | Põhjus | Parandus |
|---|---|---|
| Tähtklahvid ei tee midagi | Kursor on väljas (otsing, kirjeredaktor, tabel). | Klõpsa lehel või vajuta {{key:Tab}}, et väljast välja liikuda. |
| Ratas suumib kerimise asemel | Ratas suumib alati lehte. | Lohista panoraamimiseks. |
| Kogu leht muutus suuremaks või väiksemaks | Brauseri suum ({{key:Mod+Plus}} või {{key:Mod+Minus}}). | Vajuta {{key:Mod+0}}. Suumi lehte ratta või tavaliste {{key:Plus}} ja {{key:Minus}} klahvidega. |
| Märk kadus, kui vajutasin Backspace | Backspace kustutab valitud märgi, kui sa ei joonista. | {{key:Mod+Z}} toob selle tagasi. |
| Paremklõps ei lõpeta Macis | Control-klõps jõuab tavalise klõpsuna. | Kasuta kahe sõrmega klõpsu, kui teisene klõps on sisse lülitatud, või vajuta {{key:Enter}}. |

## Puuteekraanid

Puuteekraanil:

- **Puudutus** paneb punkti (või valib märgi tööriistaga {{ui:Vali}}). Üks sõrm lohistades panoraamib.
- **Kaks sõrme** knipsavad suumimiseks nende vahel asuva punkti ümber ja panoraamivad, kui liiguvad koos. Teise sõrme asetamine tühistab selle, mida esimene alustas, nii et knips ei jäta kunagi poolelioleva punkti.
- **Lõpeta** lõik või kontuur **pika vajutusega** (paremklõps), **topeltpuudutusega** või nupuga {{ui:Lõpeta}} lehe all olevas ribas. Samas ribas on {{ui:Tagumine}} (võta viimane punkt tagasi) ja {{ui:Loobu}}. Pindalad sulguvad ka esimese punkti puudutamisega.
- Sõrmedele on sihtmärgid suuremad: punktid haakuvad, sulguvad ja valitakse kaugemalt ning nurgakäepidemed on suuremad.

Pikkuste sisestamiseks on vaja klaviatuuri; ekraaniklaviatuur töötab, kui kast {{ui:Sisesta}} on fookuses.

Tahvelarvutil teevad klaviatuur ja hiir või puuteplaat koguste arvestuse palju lihtsamaks.

## Töö võrguta

| Nupp või sümptom | Põhjus | Parandus |
|---|---|---|
| {{ui:Salvestamine ebaõnnestus}} | Osa rakenduse failidest ei laadinud võrguks salvestamisel alla. | Kontrolli ühendust ja vali nupp uuesti. |
| {{ui:Võrguta kasutamine pole saadaval}} | Privaatsed aknad ja mõned hallatud arvutid blokeerivad võrguta koopiad. | Kasuta tavalist akent või teist brauserit. |
| „Salvestamine…“ ei alga | Oled võrguta; salvestamiseks on vaja ühendust. | Salvesta võrgus olles. |
| Rakendus on pärast uuendust vana | Võrguta koopia on varasemast päevast. | Võrgus olles vali {{ui:Valmis ka võrguta}}, seejärel {{ui:Salvesta uuesti (võta uusim versioon)}}. |
| Tahad ruumi tagasi | Võrguta koopia on umbes 6 MB. | Vali {{ui:Valmis ka võrguta}}, seejärel {{ui:Eemalda võrguvälise koopia}}. |

Vt [Töö võrguta](common:offline).

## Endiselt probleem?

Laadi lehekülg uuesti, kui rakendus lakkab reageerimast. Koguste arvestus kaob uuesti laadimisel, kui sa seda ei salvestanud, seega salvesta enne, kui saad, klahviga {{key:Mod+S}}. Brauserite küsimuste korral vt [Brauserid ja arvutid](common:browsers).
