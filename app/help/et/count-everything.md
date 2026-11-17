---
title: Loenda kogu komplekt
summary: Märgi sümbolite legend üks kord ära ja TakeoffCraft loeb selles olevad sümbolid igal avatud lehel ühe käiguga. Iga loendus on link oma lehele ning enne lisamist vaatad selle üle.
keywords: loenda kõik, legend, sümbolite legend, terve komplekt, iga leht, kõik lehed, iga uks, iga armatuur, seadmed, sümbolid, automaatne loendus, plaanikomplekt, 200 lehte, sobivustase, sarnane
from: adc99744
---

{{ui:Loenda kõik}} loeb sümbolite legendi ja loeb seejärel igal avatud lehel iga selles olevat sümbolit. See on {{ui:Automaatne loendus}} terve legendi jaoks korraga. See on lihtne sümbolite sobitamine sinu enda lehtedel, mitte treenitud mudel, ja miski ei lahku sinu arvutist. Vaata loendused enne nende lisamist üle: see on abivahend, mitte garantii.

## Loenda legend

1. Ava plaanid. Sobib mistahes lehel olev legend: sümbolid koos nende nimedega kõrval.
2. Vali tööriistaribal {{ui:Loenda kõik}}.
3. Lohista kast ümber legendi, sümbolite ja nimede. Pealkiri, millel ei ole kõrval sümbolit (SYMBOL LEGEND), jäetakse ise välja.
   Paneel loetleb iga sümboli koos pildi ja selle kõrval trükitud nimega. Nimi saab kirje nimeks, nii et nimeta see siin ümber, kui soovid.
4. Eemalda linnuke igalt sümbolilt, mida ei soovi loendada. Sümbol, mida ei saa otsida (liiga väike või tühi), ütleb, miks.
5. Vali {{ui:Loe N lehel}}. Riba näitab, millist lehte otsitakse; {{ui:Loobu}} peatab käivituse. Leht jääb kasutatavaks.

Legendi enda sümbolid ei lähe selle lehe loendusse. Lehte, mis on joonistatud teises mõõtkavas, otsitakse selles mõõtkavas ja sümbolid leitakse pööratuna mis tahes täisnurga võrra.

## Vaata loendused üle

- Iga sümbol näitab oma kogusummat ning selle all on link igale lehele, millel neid on ("E-103: 4"). Klõpsa linki, et minna sellele lehele. Leiud on kastidega, kirje värvis.
- **Klõpsa kastil**, et see leid välja jätta. See on katkendjoonega ja läbi kriipsutatud; klõpsa uuesti, et see tagasi tuua.
- **Liiguta sobivustaset** (50% kuni 100%, alustades sinu {{ui:Sätted}} tasemest). Kõrgem jätab alles ainult lähedased sobivused. Liugur filtreerib ainult leitut; midagi ei otsita uuesti.
- Kaks sarnast sümbolit (näiteks kahekordne ja nelikpistikupesa) võivad sobida samasse kohta. Parem sobivus võtab selle ja paneel ütleb, mitmel kohal see juhtus, et saaksid need üle kontrollida.
- Liiga suur leht, et seda otsida sümboli suuruses, jäetakse vahele ja paneel ütleb seda.

## Lisa need

Vali {{ui:Lisa N märki}}. Iga sümbol muutub loenduskirjeks, kus on märk igal leiul. Olemasoleva loenduskirje nime kasutatakse uuesti (midagi ei dubleerita seal, kus oled juba käsitsi märkinud). Kogu käivitus on üks samm: {{key:Ctrl+Z}} võtab kõik kirjed ja märgid tagasi.

Mida aktsepteerid, lisatakse ka {{ui:Õpitud}} hulka: sümbolid jäetakse koguste arvestuse faili meelde järgmiseks korraks.

## Assistentidega

Kui lubad sätetes assistente, saavad nad lugeda legendi (legend_open), käivitada loenduse taustal (legend_count_start, seejärel legend_count_status), lugeda loendused (legend_count_result) ja need lisada (legend_count_add, mis võib esmalt näidata, mida see lisaks). See on sama käivitus, mida näed paneelis.

## Sümbolid suvalise nurga all

Enne loendamist märgi {{ui:Sümbolid suvalise nurga all}}, et leida ka sümbolid, mis on joonistatud mitte täisnurga all (diagonaalne seinakinnitus, armatuur, mis on pööratud katuse järgi). Otsing pöörab siis iga sümbolit iga 15 kraadi järel. Ümmargune sümbol vajab endiselt ühte otsingut, aga mitteristkülikukujuline sümbol võib kesta kuni kuus korda kauem. Ruudus joonistatud plaanide puhul jäta see välja.

## Hea teada

- Vajab sümboleid, mis on joonistatud samamoodi nagu legendis. Legend, mis on joonistatud teises suuruses kui lehed, on korras, kui lehtede mõõtkavad on seadistatud; ilma mõõtkavadeta otsitakse sümboleid legendi suuruses.
- Sümbol, mille läbi on joonistatud sein või pikk joon, võidakse vahele jätta, sest see ei näe enam välja nagu legendi pilt. Kontrolli esimese lehe leide enne, kui usaldad ülejäänut.
- Ka skaneering ilma tekstita töötab: sümbolid leitakse nende ridade järgi ja nimed kirjutad sina.
