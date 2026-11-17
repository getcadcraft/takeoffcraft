---
title: Mõõtkava määramine
summary: Anna igale lehele mõõtkava eelseadega või kalibreerimisega tuntud mõõdu järgi, kontrolli seda ning mõista, miks mõõtkavata lehed jäetakse kogusummadest välja.
keywords: tuvasta mõõtkava, loe mõõtkava, mõõtkava tekstist, kõik lehed, mõõtkava, kalibreeri, eelseade, kontrolli mõõtkava, kontrolli, tuntud mõõt, mõõtkavata, ilma mõõtkavata, suhe, määra mõõtkava
from: 8f0148e6
---

Igal lehel on oma mõõtkava. Sa määrad selle või lased TakeoffCraftil lugeda selle lehtede tekstist (allpool) ning kontrolli seda. Kuni lehel ei ole mõõtkava, ei mõõda sellel {{ui:Lineaarne}}, {{ui:Pindala}}, {{ui:Ring}} ja {{ui:Väljalõige}}. {{ui:Loe}} ja {{ui:Automaatne loendus}} töötavad ilma mõõtkavata.

Lehtede loend näitab iga lehe mõõtkava või **Mõõtkava puudub**. Riba avatud lehe all ütleb sama.

## Kasuta eelseadet (kui PDF on prinditud täissuuruses)

1. Ava leht.
2. Ava loend {{ui:Eelseade}} rühmas {{ui:Mõõtkava}}.
3. Vali joonisel trükitud mõõtkava, näiteks `1/8" = 1'-0"` jaotisest Arhitektuurne.
   Olekuribal on „Selle lehe mõõtkava: 1/8" = 1'-0"“.
4. Kontrolli seda (allpool).

Eelseade eeldab, et PDF on see paberisuurus, mille jaoks joonis tehti. Kui PDF on tehtud valikuga „sobita lehele“ või on see pooltäissuuruses komplekt, on eelseade vale. Kalibreeri selle asemel.

Täielik loend on jaotises [Mõõtkava eelseaded](topic:scale-presets).

## Loe mõõtkavad lehtede tekstist

Enamik jooniseid ütlevad oma mõõtkava: `SCALE: 1/4" = 1'-0"` tiitelplokis, `1:100` vaate all. TakeoffCraft suudab selle lugeda ja määrata kõik lehed korraga.

1. Ava loend {{ui:Eelseade}} ja vali {{ui:Lehtede tekstist…}} (üleval).
2. Loend näitab kõiki lehti: nende praegust mõõtkava ja mida nende tekst ütleb — **Ütleb 1/4" = 1'-0"**, **Tekstis mõõtkava puudub** või **Ütleb: mõõtkavata** (NTS).
3. Mõõtkavata lehed, mis ütlevad mõõtkava, on märgitud. Märgi või eemalda märge, seejärel vali {{ui:Määra märgitud mõõtkavad}}. Üks {{key:Mod+Z}} võtab need kõik tagasi.
4. Kontrolli iga lehe üht mõõtu tööriistaga {{ui:Kontrolli}} (allpool): eelseade on õige ainult siis, kui PDF on prinditud täissuuruses.

See loeb arhitektuurset (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), insenerlikku (`1" = 20'`) ja meetrilist (`1:50`) tähistust, mis vastavad [eelseadele](topic:scale-presets). Kui leht ütleb rohkem kui ühe mõõtkava (plaan suurendatud detailidega), võtab see selle, mida ta kõige sagedamini ütleb, ja see, mis on kirjutatud sõna SCALE järele, loeb kaks korda; teised kuvatakse punaselt, et saaksid kontrollida. Skannitud lehel tekstu ei ole: määra selle mõõtkava käsitsi.

## Kalibreeri tuntud mõõdu järgi

Kasuta seda, kui trükitud mõõtkava, mida usaldad, puudub, komplekt on suurust muudetud või leht ütleb „mõõtkavata“, kuid sellel on mõõtmed.

1. Ava leht ja suumi sisse pikal mõõdul, mis sulle teada on, näiteks võrgujoone vahe või hoone üldmõõt. Mida pikem, seda täpsem.
2. Vali rühmas {{ui:Mõõtkava}} {{ui:Kalibreeri}} või vajuta {{key:K}}.
3. Klõpsa mõõdu ühele otsale. Täpsuse huvides suumi iga otsa juures sisse; saad suumida ja nihutada klõpsude vahel.
4. Klõpsa teisele otsale. Hoia {{key:Shift}} all, et joon jääks 0°, 45° või 90°.
   Avaneb dialoog **Kalibreeri see leht**.
5. Sisesta tegelik vahemaa väljale **Tegelik vahemaa**, näiteks `24'-6 1/2"`, `24.5` (kümnendjalad), `30"` või `7.5 m`. Vt [Pikkuse, määra ja protsendi sisestamine](topic:entry-formats).
6. Vali {{ui:Määra mõõtkava}}.
   Olekuribal on mõõtkava kujul „1" = (n)'“, ja kui see on 0,5% piires mõnest eelseadest, ütleb riba, milline, näiteks „mis vastab 1/4" = 1'-0" (vali see eelseade täpse mõõtkava jaoks)“.
   TakeoffCraft läheb tagasi tööriistale {{ui:Vali}}.

Kui kalibreerimine vastab eelseadele, annab selle eelseade täpse mõõtkava, mitte sellise, mis sõltub sellest, kuhu klõpsasid.

## Kontrolli mõõtkava

Kontrolli alati uut mõõtkava teise mõõdu järgi.

1. Vali rühmas {{ui:Mõõtkava}} {{ui:Kontrolli}} või vajuta {{key:D}}.
2. Klõpsa joonisel trükitud mõõdu mõlemale otsale.
   Olekuribal on „Kontroll: 12'-6"“ sama pikkusega kümnendjalgades ja meetrites ning kontrolljoon jääb lehele koos oma pikkusega.
3. Võrdle seda trükitud mõõduga. Kui see ei klapi, kalibreeri pikema mõõdu järgi.

Kontrolljoone eemaldamiseks vajuta {{key:Esc}}.

## Muuda mõõtkava

Vali mõni teine eelseade või kalibreeri uuesti. Kui lehel on juba mõõtmisi, küsib TakeoffCraft **Muuta selle lehe mõõtkava?** ja ütleb, mitu mõõtmist mõõdetakse uuesti. Vali {{ui:Muuda mõõtkava}}. Iga lõik ja pindala lehel mõõdetakse uuesti uues mõõtkavas. Seda saab tagasi võtta klahviga {{key:Mod+Z}}.

## Miks mõõtkavata lehti ei loeta nulliks

Märgil lehel ilma mõõtkavata ei ole tegelikku pikkust ega pindala. TakeoffCraft ei loe seda kunagi nulliks, sest see teeks sinu eelarve märkamatult liiga madalaks. Selle asemel ta:

- jätab need märgid kogusummadest välja,
- näitab kirje kõrval jaotises {{ui:Kogused}} „+(n) mõõtkavata“,
- näitab tabeli päises „Puudulik: (n) märki lehtedel ilma mõõtkavata (kogusummas ei ole)“,
- kirjutab arvu eksporditud tabeli märkuste veergu.

See võib juhtuda, kui avad projekti, mille mõõtkavasid ei ole kunagi määratud. Anna lehele mõõtkava ja märgid loetakse kohe. Loendusmärke loetakse alati; need ei vaja mõõtkava.

## Nipid

- Määra mõõtkava igal lehel, mida kavatsed mõõta, enne alustamist. Otsi lehtede loendist **Mõõtkava puudub**, et leida need, mis on jäänud (otsinguväli vaatab lehtede nimesid, mitte mõõtkavu).
- Detailid ja suurendatud plaanid samal lehel kasutavad sageli teist mõõtkava. TakeoffCraftil on ühe lehe kohta üks mõõtkava; vt [Mis pole veel valmis](topic:not-built-yet).
- Meetrilised joonised: vali meetriline eelseade, näiteks `1:100`, või kalibreeri meetrilise mõõdu järgi, näiteks `6000 mm`.
