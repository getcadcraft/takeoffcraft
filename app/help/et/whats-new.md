---
title: Mis on uut versioonis 0.7
summary: DWG- ja DXF-joonised avanevad lehtedena oma mõõtkavaga, täpsed loendused ja pikkused joonise enda põhjal, valitud allhankija pakkumus paketi hinnana, pakkumiskutsed suletud hindadega, abilise tööriistad joonistele ning USD 3D-kontrollvaatest.
keywords: mis on uut, versiooninoodid, muudatuste loend, muudatused, 0.7, versioon, uued funktsioonid, dwg, dxf, joonis, paigutused, mudeliruum, joonise mõõtkava, loenda joonisest, cad-loendus, plokid, dünaamilised plokid, atribuudid, kihid, xref, lingitud joonis, mõõda joonist, polüjoon, viirutus, märgitud pdf, valitud pakkumus, kasuta pakkumust, saada pakkumiseks, pakkumiskutse, suletud pakkumised, pakkumise avamine, hilinenud pakkumus, allhankija kirjed, csv, abiline, mcp, usd, usdz, ühikud, ühikuloendid, tihe, paneelid, dialoogid, portugali
from: ad4f0df1
---

See on, mis muutus TakeoffCraft'is 0.7 võrreldes versiooniga 0.6. Joonised avanevad nüüd just sellisena, nagu need on, ilma et neid enne PDF-iks trükitaks, ning pakkumispakett saab minna allhankijatele ja tulla tagasi hinnastatuna.

## Uus

### DWG- ja DXF-joonised

- **Joonise avamine lehtedena.** {{ui:Ava plaanid}} rühmas {{ui:Fail}} ({{key:Mod+O}} või lohista failid) võtab DWG- ja DXF-joonised PDF-ide kõrvale. Mudeliruum ja iga paigutus muutuvad lehtedeks loendis {{ui:Lehed}} ning koguste arvestus võib katta korraga nii jooniseid kui PDF-e. Midagi ei laadita üles. Vt [Ava DWG- või DXF-joonis](topic:open-a-drawing).
- **Mõõtkava tuleb joonisest.** Paigutus algab oma suurima vaateakna mõõtkavast, mis nimetatakse eelseadena, kui see selleks sobib, nt 1/2" = 1'-0". Mudel algab joonise ühikutes. Joonis, millel pole ühikuid, ütleb „No scale“ seni, kuni sa selle kalibreerid. {{ui:Kalibreeri}}, {{ui:Kontrolli}} ja {{ui:Eelseade}} on ikka tähtsamad. Vt [Mõõtkava](topic:open-a-drawing#the-scale).
- **Kihid ja lingitud joonised.** {{ui:Kihid}} lehe ribal näitab või peidab joonise kihid. Kihid, mille fail on välja lülitanud või külmutanud, algavad peidetuna ega lähe loendusse, kui sa seda ei vali. Lingitud joonis (xref), mis on avatud kõrvuti oma peajoonisega, joonistatakse ja loendatakse seal, kuhu see on sisestatud; kuni see on avatud, ütleb olekuriba, mis puudu on. Vt [Kihid](topic:open-a-drawing#layers).
- **Märgitud PDF töötab joonisest.** {{ui:Eksport}} › {{ui:Märgitud PDF}} joonistab joonise märgitud lehed kõigepealt PDF-iks, nii et koopial on sinu märgised ja legend ilma trükkimise sammuta. See joonistatakse mustana või joonise värvides, ilma plotisti stiilitabeliteta. Vt [Märgitud PDF](topic:export-estimate#a-marked-pdf).

### Täpsed loendused ja pikkused joonisest

- **Loenda, mida joonis ütleb olevat.** {{ui:CAD-loendus}} lehe ribal loendab plokki nime järgi (sh pesastatud plokid, dünaamiliste plokkide olekud ja plokimassiivid), kõike ühte tüüpi kihil või teksti või atribuudi väärtust. See loendab, mida leht näitab, või kogu joonise ühe korra. Märkide lisamine on üks tagasivõtmise samm ning uuesti loendamine lisab ainult uue. {{ui:Automaatne loendus}} jääb PDF-ide ja plokkideks mitteolevate sümbolite jaoks. Vt [Loenda joonisest](topic:count-from-a-drawing).
- **Mõõda joonise enda jooni.** {{ui:Mõõda joonist}} võtab joonistatud või aknaga valitud jooned, kaared, polüjoonid, ringid, viirutused ja tahked kujundid märgisteks lineaarsele või pindala kirjele. Kaared, kumerused ja viirutuse augud tulevad täpsed; ellipse ja splaine mõõdetakse peente kõõlude järgi ning riba ütleb seda. Vt [Mõõda joonisest](topic:measure-from-a-drawing).

### Pakkumised

- **Allhankija pakkumuse kasutamine paketi hinnana.** Rühmas {{ui:Eksport}} › {{ui:Pakettide jaotus ja võrdlus…}} vali pakkumuse juures {{ui:Kasuta}}. Paketi kirjed jäävad kogusteks, üks rida **Valitud pakkumus** kannab hinda, kirjed, mida pakkumus ei hõlma, jäävad sinu omahinnaks ning üldkulud, kasum ja garantii rakenduvad sellele. Pakkumise vahetamine on üks tagasivõtmise samm; töövihik ja pakkumise kokkuvõte kannavad seda. Vt [Kasuta pakkumust paketi hinnana](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Pakkumiste saatmine paketi kohta.** {{ui:Saada pakkumiseks…}} paketi all saadab igale allhankijale e-kirjaga lingi lehele, mis ei vaja kontot: nad näevad ulatust ja lehti PDF-ina, märgivad hinna igale reale või märgivad, et see pole hõlmatud, lisavad märkmeid ja kuni kolm faili või loobuvad. {{ui:Too hinnad}} toob tagasi tulnud hinnad võrdluslehele, märgituna **veeb**. Saatmine on lubatud ainult kontodele, mille CadCraft meeskond on lubanud, kuni funktsiooni testitakse (vt allpool). Vt [Paketi saatmine pakkumiseks](topic:bid-invitations).
- **Suletud kuni avamiseni.** Hinnad võivad jääda suletuks kuni avamisajani, mille sa seaded: selleni ei näe keegi hinda, ka sina mitte. Avamisel ilmuvad kõik pakkumised korraga ning pakkumine, mis tuli pärast tähtaega, on märgitud hilinenuks. Vt [Suletud pakkumised ja avamine](topic:bid-invitations#sealed-bids-and-the-opening).
- **Allhankija kirjed.** Sinu konto getcadcraft.com-is hoiab iga ettevõtte kontakte, valdkondi, kvalifikatsiooni vastuseid ning kindlustuse ja litsentsi kuupäevi (märgitud, kui need on möödas või jäävad 30 päeva sisse) koos varasemate pakkumistega. Impordi ja ekspordi neid CSV-na ning vali need paketi saatmisel. Vt [Veebis](topic:bid-invitations#on-the-website).

### AI-abilised

- **Abilised saavad lisada koguste arvestusse.** Kui **Redigeeri** on märgitud, saab sinu enda abiline lisada kirjeid (`items_add`) ning mõõta jooni, alasid ja loendusi lehel (`marks_add`; pikkused ja pindalad ainult mõõtkavaga lehel). Iga kutse on üks tagasivõtmise samm.
- **Abilise tööriistad joonistele.** Avatud DWG- või DXF-joonise korral saab abiline loetleda oma lehed ja need, mida saab loendada, loendada täpselt, lisada loendusmärgised ning mõõta joonise geomeetriast. Kui TakeoffCraft pole avatud, avab CadCraft MCP-server joonise uue koguste arvestusena ja salvestab selle, ning `cadcraft count` loendab käsurealt. Vt [Mida abiline võib küsida](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D-kontrollvaade USD-na.** {{ui:USD-pakett (.usdz)}} kõrval {{ui:GLB}} 3D-kontrollvaates kirjutab iga seina, plaadi, loendussamba ja joone eraldi objektina, nimetatuna oma kirje järgi ja kandes oma kogust meetrites. Abiline saab seda samuti eksportida (`usd_export`). Vt [Ekspordi 3D-kontrollvaade USD-na](topic:usd).

## Kõigis rakendustes

- **Ühikud.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}} sisaldab iga pikkuse, pindala, mahu, nurga ja kalde jaoks ühte loendit täpsete suurustega, mida ühikute definitsioonid annavad (USA miilijala on oma ühik). Lülita välja ühikud, mida ei kasuta, ja need kaovad ühikuloenditest; märgi tärniga üks ning uus töö algab selles. Fail säilitab alati oma ühiku. TakeoffCraft'is järgivad kirje {{ui:Ühik}} loendid lülitusi, uus kirje algab tärniga märgitud pikkuse- või pindalaühikus, katusetöö ruudud (SQ), aakrid ja hektarid on uued pindalaühikud ning pikkuse kast võtab vastu iga ühiku tähise, nt `3 yd`. Vt [Ühikud, sisestatud väärtused ja ühikuloendid](common:unit-lists).
- **Tihedam paigutus ja paneelid, mis end ära peidavad.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Paigutuse tihedus}} › {{ui:Tihe}} mahutab ekraanile rohkem (puuteekraanid ja telefonid säilitavad oma suured nupud). Igal külgpaneelil on kitsas pealkirjariba: lohista seda, et paneel kinnitada või vabaks ujuma panna; viska see teise paneeli ribale, et jagada üks raam vahekaartidena; kinnita see, et ta libiseks äärde; või peida ta ja too äärest tagasi. Vt [Paneelide paigutamine](common:arrange-panels#make-the-layout-denser).
- **Dialoogid liiguvad.** Lohista dialoog pealkirjaribast joonise eest eemale; see tuleb tagasi sinna, kus jätsid. Topeltklõps pealkirjaribal tsentreerib selle uuesti. Vt [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).
- **Retseptid AI-abilistele.** Kümme valmis päringut sinu enda abilisele (korrasta joonis, trüki komplekt, kontrolli jooniseid, küsi mudeli kohta, summeeri koguste arvestus, proovi detaili varianti…), igaühel tööriistad, mida see kutsub, ja load, mida see vajab, ning meie testid kordavad igaühe. Rakendused ise AI-d ei sisalda. Vt [Retseptid AI-abilistele](common:assistants-recipes).
- **Keeled.** **Português (Portugal)** on uus jaotises {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Keel}}. See, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** on nüüd kõigi rakenduste kõigi sõnadega, mustanditena, mida emakeelne kasutaja pole veel üle vaadanud. Abiteemad on inglise keeles.
- **CadCraft Studio** ütleb, miks uuenduse kontroll ebaõnnestus (pole veel faili sinu süsteemile, võrguühendust pole, halb allkiri), selle asemel et lihtsalt öelda „Valmis“, ning ei too enam tagasi Mis on uut kaarti, mille sa oled sulgenud, kuni on uuem väljalase.

## Pole veel selles versioonis

- **0.7 pole koodiga allkirjastatud.** Allkirjastamine ja Microsoft Store'i pakett lükati versioonile 0.8, sest sertifikaadi kinnitus pole veel tulnud. Kontrolli iga faili kõrval olevat SHA-256 väärtust lehel getcadcraft.com/download. Windowsis, kui SmartScreen peatab paigaldaja, vali {{ui:Rohkem teavet}}, siis {{ui:Käivita siiski}}. Macis esimesel korral tee CadCraft Studio'l parem klõps ja vali {{ui:Avatud}}. CadCraft Studio pole veel ühegi rakenduste poes ning iPadi ega iPhone'i versiooni veel pole.
- {{ui:Ühikud}}-s salvestatakse nurga- ja kalde loendid, aga ükski kast neid veel ei loe.
- **Pakkumiskutsed on enamiku kontode jaoks välja lülitatud.** Funktsiooni testimise ajal läheb kiri väliste pakkujateni ainult kontodelt, mille CadCraft meeskond on lubanud. Pakkujate lehed töötavad iga juba saadetud kutse puhul. Kõik teised: laadi alla {{ui:Ulatuse CSV}}, saada see ise e-kirjaga ja sisesta pakkumised käsitsi.
- CadCraft Studio aken ei saa veel pakkumiskutseid saata: see ütleb kasutada TakeoffCraft'i brauseris. Saadetud päringutega koguste arvestuse avamine, võrdlemine ja pakkumuse valimine töötavad Studios.
- Lisandeid, tellimuskirju, ulatusleht, mille iga pakkuja allkirjastab, ja automaatseid meeldetuletusi enne kindlustuse aegumist ei ole tehtud. Valitud pakkumus ei hinnasta uuesti alternatiivi pakkumise ala.
- **Joonised:** plotisti stiilitabeleid ja CTB-faile ei rakendata, binaarset DXF-i ei võeta vastu (salvesta see ASCII DXF-ina või DWG-na), lingitud joonised leitakse ainult avatud failide seast failinime järgi, ning joonise PDF-alusi, pilte ja OLE-objekte ei joonistata ega loendata. Loendused ja mõõtkavad on kontrollitud näidisjooniseid, mitte veel päris töö joonistel, mis on avatud programmis, mis need tegi.
- Abiline saab lisada kirjeid ja märgiseid, aga ei saa liigutada, muuta ega kustutada juba olemasolevaid märgiseid.

Kõik muu on lehel [Veel tegemata](topic:not-built-yet).
