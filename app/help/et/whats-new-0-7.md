---
title: Mis on uut versioonis 0.7 (varem)
summary: DWG- ja DXF-joonised avanevad lehtedena oma mõõtkavaga, täpsed loendused ja pikkused joonisest endast, valitud alltöövõtja pakkumine paketi hinnana, pakkumiskutsed suletud hindadega, assistendi tööriistad joonistele ning USD 3D-kontrollvaatest.
keywords: mis on uut 0.7, varasem väljalase, väljalaskemärkmed, muudatuste logi, muudatused, 0.7, versioon, uued funktsioonid, dwg, dxf, joonis, paigutused, mudeliruum, joonise mõõtkava, loenda joonisest, cad-loendus, plokid, dünaamilised plokid, atribuudid, kihid, xref, lingitud joonis, mõõda joonist, murdjoon, viirutus, märgitud pdf, valitud pakkumine, kasuta pakkumist, saada pakkumiseks, pakkumiskutse, suletud pakkumised, pakkumise avamine, hiline pakkumine, alltöövõtja kirjed, csv, assistent, mcp, usd, usdz, ühikud, ühikute loendid, tihe, paneelid, dialoogid, portugali
from: de1dca2b
---

See on see, mis muutus TakeoffCrafti versioonis 0.7 võrreldes versiooniga 0.6. Joonised avanevad nüüd nii, nagu need on, ilma et neid enne PDF-iks plottida, ja pakettpakkumine võib minna alltöövõtjatele välja ning tulla tagasi hinnastatuna.

## Uus

### DWG- ja DXF-joonised

- **Ava joonis lehtedena.** {{ui:Ava plaanid}} rühmas {{ui:Fail}} ({{key:Mod+O}} või lohista failid sisse) võtab DWG- ja DXF-joonised PDF-ide kõrvale vastu. Mudeliruum ja iga paigutus muutuvad loendi {{ui:Lehed}} lehtedeks ning koguste arvestus võib katta joonised ja PDF-id koos. Midagi ei laadita üles. Vaata [Ava DWG- või DXF-joonis](topic:open-a-drawing).
- **Mõõtkava tuleb joonisest.** Paigutus algab oma suurima vaateakna mõõtkavaga, nimetatud eelseadena, kui see on eelseade, näiteks 1/2" = 1'-0". Mudel algab joonise ühikutes. Joonis, millel ühikuid ei ole, ütleb „Mõõtkava puudub“, kuni sa seda kalibreerid. {{ui:Kalibreeri}}, {{ui:Kontrolli}} ja {{ui:Eelseade}} on ikka tähtsamad. Vaata [Mõõtkava](topic:open-a-drawing#the-scale).
- **Kihid ja lingitud joonised.** {{ui:Kihid}} lehe ribal näitab või peidab joonise kihid. Kihid, mille fail on välja lülitanud või külmutanud, algavad peidetuna ja neid ei loenda, kui sa seda ei vali. Lingitud joonis (xref), mis on avatud oma peajoonise kõrval, joonistatakse ja loendatakse seal, kuhu see on sisestatud; kuni see on avatud, ütleb olekuriba, mis puudu on. Vaata [Kihid](topic:open-a-drawing#layers).
- **Märgitud PDF töötab joonisest.** {{ui:Eksport}} › {{ui:Märgitud PDF}} joonistab joonise märgitud lehed kõigepealt PDF-iks, nii et koopia näitab sinu märgiseid ja legendi ilma plottimise sammuta. See on joonistatud mustalt või joonise värvides, ilma plotistiili tabeliteta. Vaata [Märgitud PDF](topic:export-estimate#a-marked-pdf).

### Täpsed loendused ja pikkused joonisest

- **Loenda see, mis joonisel on.** Lehe ribal olev {{ui:CAD-loendus}} loendab ploki nime järgi (kaasa arvatud pesastatud plokid, dünaamilised ploki olekud ja plokimassiivid), kõik ühte tüüpi asjad kihil või teksti või atribuudi väärtuse. See loendab, mida leht näitab, või kogu joonise ühe korra. Märgiste lisamine on üks tagasivõtmise samm ja uuesti loendades lisandub ainult uus. {{ui:Automaatne loendus}} jääb PDF-ide ja mitte-plokkidest sümbolite jaoks. Vaata [Loenda joonisest](topic:count-from-a-drawing).
- **Mõõda joonise enda joontest.** {{ui:Mõõda joonist}} võtab joonised, kaared, murdjooned, ringid, viirutused ja tahkised, mille klõpsad või valid aknaga, jooneka või pinna üksuse märgisteks. Kaared, kumerused ja viirutuse augud tulevad täpselt; ellipsid ja splainid mõõdetakse peente akordidega ning riba ütleb seda. Vaata [Mõõda joonisest](topic:measure-from-a-drawing).

### Pakkumised

- **Kasuta alltöövõtja pakkumist paketi hinnana.** {{ui:Eksport}} › {{ui:Pakettide jaotus ja võrdlus…}} all vali pakkumise juures {{ui:Kasuta}}. Paketi üksused jäävad kogustena, üks rida **Valitud pakkumine** kannab hinda, üksused, mida pakkumine ei hõlma, jäävad sinu enda kulu hulka ja sellele kohalduvad üldkulud, kasum ja tagatis. Pakkumise vahetamine on üks tagasivõtmise samm; töövihik ja pakkumise kokkuvõte kannavad seda. Vaata [Kasuta pakkumist paketi hinnana](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Saada pakett pakkumiseks.** {{ui:Saada pakkumiseks…}} paketi all saadab igale alltöövõtjale e-kirjaga lingi lehele, mis ei nõua kontot: nad näevad ulatust ja lehti PDF-ina, kirjutavad hinna igale reale või märgivad, et see ei kuulu hulka, lisavad märkmeid ja kuni kolm faili või loobuvad. {{ui:Too hinnad}} toob tagasi saabunu võrdlustabelisse, märgituna **web**. Saatmine on avatud ainult kontodele, mille CadCrafti meeskond on katsetamise ajaks lubanud (vt allpool). Vaata [Saada pakett pakkumiseks](topic:bid-invitations).
- **Suletud kuni avamiseni.** Hinnad võivad jääda suletuks kuni avamisajani, mille sina määrad: sel ajani ei näe keegi hinda, sina kaasa arvatud. Avamisel kuvatakse kõik pakkumised korraga ja pakkumine, mis tuli pärast tähtaega, on märgitud hilinenuks. Vaata [Suletud pakkumised ja avamine](topic:bid-invitations#sealed-bids-and-the-opening).
- **Alltöövõtjate kirjed.** Sinu konto getcadcraft.com lehel hoiab iga ettevõtte kontakte, erialasid, kvalifikatsioonivastuseid ning kindlustuse ja litsentsi kuupäevi (märgitud, kui need on möödas või jäävad 30 päeva sisse), koos nende varasemate pakkumistega. Impordi ja ekspordi neid CSV-na ning vali need, kui saadad paketi. Vaata [Veebilehel](topic:bid-invitations#on-the-website).

### AI-assistendid

- **Assistendid saavad koguste arvestusse lisada.** Kui **Muutmine** on märgitud, saab sinu enda assistent lisada üksusi (`items_add`) ja mõõta lehel jooksvaid pikkusi, pindu ja loendusi (`marks_add`; pikkusi ja pindu ainult mõõtkavaga lehel). Iga pöördumine on üks tagasivõtmise samm.
- **Assistendi tööriistad joonistele.** Avatud DWG- või DXF-joonisel saab assistent loetleda selle lehed ja mida saab loendada, loendada täpselt, lisada loendusmärgised ning mõõta joonise geomeetriast. Ilma TakeoffCrafti avamata avab CadCraft MCP server joonise uue koguste arvestusena ja salvestab selle ning `cadcraft count` loendab käsurealt. Vaata [Mida assistent võib küsida](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D-kontrollvaade USD-na.** {{ui:USD-pakett (.usdz)}} on 3D-kontrollvaates {{ui:GLB}} kõrval ja kirjutab iga seina, plaadi, lehtplaadi, loendusposti ja jooksva lõigu eraldi objektina, nimetatud selle üksuse järgi ja kandes oma kogust meetrites. Assistent saab seda samuti eksportida (`usd_export`). Vaata [Ekspordi 3D-kontrollvaade USD-na](topic:usd).

## Kõigis rakendustes

- **Ühikud.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}} sisaldab pikkuse, pinna, mahu, nurga ja kalde jaoks igaühe enda loendit, täpsete suurustega, mis ühikute definitsioonidest tulevad (USA mõõdistusjalg on oma ühik). Lülita välja ühikud, mida ei kasuta, ja need lahkuvad ühikuloenditest; tähista üks tärniga ja uus töö algab selles. Fail hoiab alati oma ühikut. TakeoffCraftis järgivad üksuse {{ui:Ühik}} loendid lüliteid, uus üksus algab tärnitud pikkus- või pinnaühikus, katusruudud (SQ), aakrid ja hektarid on uued pinnaühikud ning pikkuse väli võtab vastu mis tahes ühiku tähise, näiteks `3 yd`. Vaata [Ühikud, sisestatud väärtused ja ühikuloendid](common:unit-lists).
- **Tihedam paigutus ja paneelid, mis end kokku koristavad.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Paigutuse tihedus}} › {{ui:Tihe}} mahutab ekraanile rohkem (puuteekraanid ja telefonid säilitavad suured nupud). Igal külgpaneelil on kitsas pealkirjariba: lohista seda, et paneel kinnitada või vabaks teha, viska teise paneeli ribale, et jagada üks raam vahekaartidena, kinnita see, et see libiseks serva, või peida ja too servast tagasi. Vaata [Paneelide paigutus](common:arrange-panels#make-the-layout-denser).
- **Dialoogid liiguvad.** Lohista dialoogi pealkirjaribast joonisest eemale; see tuleb tagasi sinna, kust lahkusid. Pealkirjaribal topeltklõps tsentreerib selle uuesti. Vaata [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).
- **Retseptid AI-assistentidele.** Kümme töönäidet sinu enda assistendile (joonise korrastamine, komplekti plottimine, jooniste kontrollimine, mudelile küsimuste esitamine, koguste arvestuse summeerimine, detailivariandi proovimine ...), igaüks koos tööriistadega, mida see kasutab, ja õigustega, mida ta vajab, ning igaüks meie testide poolt uuesti läbi mängitud. Rakendused ei sisalda AI-d. Vaata [Retseptid AI-assistentidele](common:assistants-recipes).
- **Keeled.** **Português (Portugal)** on uus jaotises {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Keel}}. Nüüd on sellel, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** kõik rakenduse sõnad, mustanditena, mida emakeelne kõneleja pole veel üle vaadanud. Abiteemad on inglise keeles.
- **CadCraft Studio** ütleb, miks uuenduse kontroll ebaõnnestus (sinu süsteemi jaoks pole veel faili, võrku pole, allkiri on vale), mitte lihtsalt „Valmis“, ja ei too enam tagasi suletud kaarti „Mis on uut“, kuni on uuem väljalase.

## Selles versioonis veel mitte

- **0.7 ei ole koodiallkirjastatud.** Allkirjastamine ja Microsoft Store'i pakett lükkusid versiooni 0.8 peale, sest sertifikaadi kinnitus pole veel tulnud. Kontrolli iga faili kõrval olevat SHA-256 lehel getcadcraft.com/download. Windowsis, kui SmartScreen peatab paigaldaja, vali {{ui:Rohkem teavet}} ja seejärel {{ui:Käivita siiski}}. Macis vali esmakordselt CadCraft Studio puhul paremklõps ja {{ui:Avatud}}. CadCraft Studio ei ole veel rakenduste poes ning iPadi ega iPhone'i versiooni veel ei ole.
- Nurga- ja kaldeloendid jaotises {{ui:Ühikud}} salvestatakse, aga ükski väli neid veel ei loe.
- **Pakkumiskutsed on enamikul kontodel välja lülitatud.** Funktsiooni katsetamise ajal läheb kiri väliste pakkujatega ainult nendelt kontodelt, mille CadCrafti meeskond on lubanud. Pakkujate lehed töötavad kõigi juba saadetud kutsete puhul. Kõik teised: laadi alla {{ui:Ulatuse CSV}}, saada see ise e-kirjaga ja sisesta pakkumised käsitsi.
- CadCraft Studio aken ei saa veel pakkumiskutseid saata: see palub kasutada TakeoffCrafti brauseris. Saadetud päringutega koguste arvestuse avamine, võrdlemine ja pakkumise valimine töötavad Studios.
- Lisasid, tellimuskirju, iga pakkuja poolt allkirjastatavat ulatuslehte ja automaatseid meeldetuletusi enne kindlustuse aegumist ei ole loodud. Valitud pakkumine ei hinnasta uuesti alternatiivi pakkumise ala.
- Joonised: plotistiili tabeleid ja CTB-faile ei rakendata, binaarne DXF lükatakse tagasi (salvesta see ASCII DXF- või DWG-na), lingitud joonised leitakse ainult avatud failide seast failinime järgi ning PDF-i alusjooni, pilte ja OLE-objekte joonises ei joonistata ega loendata. Loendused ja mõõtkavad on kontrollitud näidisjoonistel, mitte veel joonistel päris tööst, avatud selles programmis, mis need tegi.
- Assistent saab lisada üksusi ja märgiseid, kuid ei saa juba olemasolevaid märgiseid teisaldada, muuta ega kustutada.

Kõik muu on jaotises [Veel valmimata](topic:not-built-yet).
