---
title: Mõõda lineaarseid jadasid
summary: Mõõda seinad, torustik, liistud ja muud pikkused jadadena, sirgete lõikude, kaarte ja Shift-nurga 45-kraadise kinnitusega.
keywords: lineaarne, pikkus, jada, polüjoon, seinad, lf, jooksev jalg, kaar, kõver, 45 kraadi, ortogonaal, kinnitu, lõigud, polüpikkus, mahaarvata, ava, uks, vahe, sisesta, sisestatud, koordinaadid, kaugus, otsekaugus, polaarne
from: c669deff
---

Lineaarne kirje mõõdab pikkust. Iga jada on punktide ahel: sirged lõigud ja kaared, kus lülitad sisse kaarerežiimi. Kirjel võib olla mis tahes arv jadu mis tahes arvul lehtedel.

Enne alustamist: lehel peab olema mõõtkava ([Määra mõõtkava](topic:set-the-scale)) ja sul peab olema lineaarne kirje ([Loo koguste kirjed](topic:create-items)).

Vektor-PDF-is kinnituvad sinu klõpsud joonise enda joontele: otsad, keskpunktid ja ristumised ([Kinnitu joonise joontele](topic:snap-to-the-drawing); {{key:F3}} lülitab selle välja).

## Joonista jada

1. Klõpsa lineaarsel kirjel jaotises {{ui:Kirjed}}.
2. Vali tööriistaribal {{ui:Lineaarne}} või vajuta {{key:L}}.
3. Klõpsa jada algpunkti.
4. Klõpsa igale nurgale selle ääres.
   Olekuriba näitab „Pikkus“ (seni joonistatud jada kuni kursorini) ja „lõik“ (lõik, mida joonistad), jalgades ja tollides.
5. Lõpeta jada: topeltklõpsa viimasel punktil, vajuta {{key:Enter}} või parem-klõpsa.
   Jada joonistatakse kirje värviga ja saab valitud märgiseks. Kirje pikkus jaotises {{ui:Kirjed}} ja tabelis {{ui:Kogused}} kasvab.

Tööriist jääb sisse {{ui:Lineaarne}}, nii et saad kohe alustada järgmist jada. Vajuta {{key:Esc}}, et minna tagasi {{ui:Vali}} juurde.

Joonistamise ajal:

- {{key:Backspace}} (või {{key:Delete}}) eemaldab viimase punkti.
- {{key:Esc}} viskab pooleliolnud jada minema.
- Lohistamine nihutab lehte ja ratas suumib, lisamata punkte.

:::mac
Maci puuteplaadil on parem-klõps kahe sõrmega klõps (lülita sisse sekundaarne klõps jaotises Süsteemiseaded › Puuteplaat). TakeoffCraft loeb ainult sekundaarnuppu, seega Control-klõps võidakse lugeda tavaliseks klõpsuks ja lisada punkt. Topeltklõps või {{key:Enter}} lõpetavad alati.
:::

:::touch
Puuteekraanil puuduta punktide paigutamiseks, lohista ühe sõrmega nihutamiseks ja suumi näpistades kahe sõrmega. Lõpeta pika vajutusega, topeltpuudutusega või lehe all olevas ribas {{ui:Lõpeta}} ({{ui:Tagumine}} võtab viimase punkti tagasi). Vaata [Tõrkeotsing](topic:troubleshooting#touch-screens).
:::

## Sirged jooned 45-kraadiste sammudega

Hoia {{key:Shift}} all, kui paigutad punkti. Lõik viimasest punktist kinnitub lähima 0°, 45°, 90° või 135° suunda, säilitades pikkuse, mille lohistasid. Olekuriba tuletab meelde: „Shift kinnitab 45°-sammudega“.

Kaarerežiimis kehtib see kaare lõpu kohta: kaare kõõl läheb algpunktist 45-kraadiste sammudega. Kõveral klõpsatud punkt ei kinnitu kunagi.

## Kaared ja kõverad seinad

1. Joonista jada ja paiguta punkt, kus kõver algab.
2. Lülita sisse kaarerežiim: vali tööriistaribal {{ui:Kaar}} või vajuta {{key:R}}. Nupp jääb vajutatuks.
3. Klõpsa mis tahes punktile kõveral, kuskil keskel.
   Olekuriba lisab „(kaar: klõpsa, kus see lõpeb)“ ja eelvaade kõverdub sinu punktist läbi.
4. Klõpsa kohale, kus kõver lõpeb.
   Kaar lisatakse. Selle pikkus on täpne kaarepikkus, mitte hulk lühikesi kõõlusid.
5. Klõpsa järgmisele kõverale punkti ja selle lõpule, et jätkata kaarte joonistamist, või vajuta {{key:R}} uuesti, et minna tagasi sirgete lõikude juurde.

{{key:Backspace}} või {{key:Esc}} viskavad kõigepealt kõveral ootel oleva punkti minema; vajuta uuesti, et eemaldada punkte tavapäraselt.

## Sisesta pikkused ja koordinaadid

Pärast esimest punkti saad klõpsamise asemel sisestada, kuhu järgmine läheb. Sisesta number, `@` või `#`: olekuribal avaneb {{ui:Sisesta}} kast sellega, mida sisestasid. Vajuta {{key:Enter}}, et punkt paigutada; kast jääb järgmise jaoks lahti.

| Sisend | Järgmine punkt läheb |
|---|---|
| `12'6"` | 12'-6" viimasest punktist, kursori suunas (näita suunda ja sisesta siis pikkus) |
| `12'6"<45` | 12'-6" nurga 45° all, loetuna vastupäeva ekraani paremast servast (`<90` on üles, `<-90` alla) |
| `@6',-4'` | 6' paremale ja 4' alla viimasest punktist |
| `6',4'` (või `#6',4'`) | 6' paremale ja 4' üles selle jada esimesest punktist |

Pikkused sisestatakse nagu kõikjal TakeoffCraftis ([Sisestusvormingud](topic:entry-formats)): `12'-6 1/2"`, `12.5` (jalgades), `30"`, `3.2 m`. „Paremal“ ja „üleval“ on nii, nagu lehte näed, ka siis, kui PDF-lehte pööratakse.

{{key:Enter}} tühjal kastil lõpetab jada, nagu {{key:Enter}} lehel; {{key:Esc}} sulgeb kasti ja jätab jada käima. Sisestatud punktid järgivad samu reegleid nagu klõpsud: mahaarvamised, kaared ja ala sulgemine töötavad kõik. Sama kast töötab tööriistades {{ui:Pindala}} ja {{ui:Väljalõige}}; pärast ringi keskpunkti võtab see raadiuse.

## Arvesta jada osa maha

Seina jada, mis läheb mööda ukse või vitriini, saab joonistada otse läbi ja ikka arvestada ainult seina: avaust ületavad lõigud on **mahaarvamised**. Need joonistatakse õhukese katkendjoonena ja neid ei arvestata.

Joonistamise ajal:

1. Paiguta punkt, kus avaus algab.
2. Vali tööriistaribal {{ui:Mahaarvata}} või vajuta {{key:E}}. Nupp jääb vajutatuks ja olekuriba ütleb, et järgmised lõigud on mahaarvamised.
3. Klõpsa, kus avaus lõpeb. Lõik joonistatakse katkendjoonena; olekuribal olev „Pikkus“ jätab selle välja.
4. Vajuta {{key:E}} uuesti ja jätka mööda seina.

Pärast joonistamist: vali jada. Jaotises **Valitud märgis** on igal lõigul {{ui:Mahaarvata}} kast: märgi see, et lõik maha arvata, ja eemalda märge, et see uuesti arvestada. Iga muudatus on üks tagasivõtu samm.

Jada jätab alati alles vähemalt ühe lõigu, mida arvestatakse. Paneel näitab siis **Mahaarvamised** (mahaarvatud pikkus) ja **Joonistatud** (kogu jada); **Pikkus**, kirje kogus, seinapindala ja maksumused kasutavad pikkust ilma mahaarvamisteta. 3D-kontrollvaade jätab seina sisse vahe, märgitud PDF joonistab mahaarvamised katkendjoonena ja eksporditud leht **Märgised** loetleb need.

Nurga teisaldamine säilitab mahaarvamised. Punktide lisamine või eemaldamine (jada uuesti joonistamisega) algab ilma nendeta.

## Vaata jada üksikasju

Vali {{ui:Vali}} ({{key:V}}) ja klõpsa jadal. Paremal olev **Valitud märgis** näitab:

- kirjet, millele see kuulub (vali teine lineaarne kirje loendist, et jada sinna teisaldada),
- lehte,
- **Pikkust** jalgades ja tollides ning LF-des,
- **Lõikude** arvu ning **Seinapindala**, kui kirjel on kõrgus,
- iga lõigu pikkust koos „(kaar)“ kaarte järel ja selle {{ui:Mahaarvata}} kasti.

Lehel on valitud jada iga lõik märgistatud oma pikkusega.

## Paranda jada

- **Teisalda punkt**: vali jada ja lohista ühte selle ruudukujulist nurgakäepidet. Hoia {{key:Shift}} all, et teisaldatud lõik kinnituks 45-kraadiste sammudega. Kaar säilitab oma kõvera.
- **Paindu kaart**: valitud jada näitab iga kaare keskel ümmargust käepidet. Lohista seda: kaar läheb läbi kohast, kust lased lahti, nii et ta kõverdub rohkem, vähem või vastassuunas. Kui lohistad selle otsade vahelisele sirgele joonele, muutub see sirgeks lõiguks. {{key:Mod+Z}} võtab selle tagasi („Paindu kaar“).
- **Kustuta jada**: vali see ja vajuta {{key:Delete}}, vali tööriistariba menüüst {{ui:Veel}} {{ui:Kustuta}} või paneelis {{ui:Kustuta märgis}}.
- **Võta tagasi**: {{key:Mod+Z}}; tee uuesti {{key:Mod+Y}}-ga.

Punkti jada keskele lisada ei saa veel. Kustuta jada ja joonista see uuesti.

## Seinapindala

Anna lineaarsele kirjele {{ui:Kõrgus}} (näiteks `9'-0"`). See näitab siis **Seinapindala (A)** = pikkus × kõrgus, SF-des (või m² meetrilise kirje puhul), ja seinapindala läheb tabelieksporti märkuste veergu. Kasuta seda koostes plaatide, värvi või soojustuse jaoks: vaata [Koosted ja valemid](topic:assemblies).
