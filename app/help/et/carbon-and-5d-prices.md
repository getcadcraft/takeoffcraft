---
title: Sisseehitatud süsinik ja 5D hinnatabel
summary: Süsinik liidab arvestuse sisseehitatud süsiniku iga kirje koguse ja avatud teguritabeli järgi ning saadab arvestuse määrad BimCraftile hinnatabelina 5D kulude jaoks.
keywords: süsinik, sisseehitatud süsinik, kgco2e, co2, tegurid, a1-a3, transport, jäätmed, 5d, hinnatabel, kulu, bimcraft, epd
from: f4bff3b8
---

{{ui:Süsinik}} tööriistaribal liidab sisse mõõdetud sisseehitatud süsiniku ja muudab sinu määrad hinnatabeliks, mida ehitusmudel saab kasutada. See on hinnang, mitte hindamine.

## Sisseehitatud süsinik

Iga kirje kogus koos jäätmetega korrutatakse teguritabeli reaga. Rida leitakse kirje nime sõnade järgi (kirje „concrete slab“ leiab rea märksõnaga concrete). Tabel on sama avatud tabel, mida kasutab BimCraft, nii et siin laetud fail töötab seal. **Programmiga kaasas olevad read on algväärtused: üldised, kontrollimata ja mitte mistahes andmebaasist.** Dialoog ütleb seda arvude kõrval. Asenda need oma allikaga, enne kui arvu usaldad.

1. Vali {{ui:Süsinik}}. Loetletakse arvestatud kirjed koos nende kilogrammide CO2e-ga, kogusumma on kohal.
2. Märgi {{ui:A4 transport}} või {{ui:A5 ehitusplatsi jäätmed}}, et arvestada ka need etapid ridade puhul, mis neile arvu annavad. Tootmisetapp arvestatakse alati.
3. Kui kirjele tahad teist rida või mitte ühtegi, kasuta selle rea loendit.
4. {{ui:Tegurid failist…}} laeb teguritabeli (JSON või CSV), mis on tehtud sinu enda allikast. Selle read asendavad algväärtused sama id-ga. {{ui:Tegurid (JSON)}} salvestab sinu omad.

Tegur on meetri, ruutmeetri, kuupmeetri, kirje või kilogrammi kohta. Jalgades või ruutjalgades mõõdetud rida teisendatakse. Kilogrammi tegur vajab mahtu (kuupjardid või kuupmeetrid) ja rea tihedust. Kirje, mille tegur vajab kogust, mida ta ei mõõda, loetletakse jaotises {{ui:Välja jäetud}} koos põhjusega, seda ei oleta kunagi. Olekuribal jooksev kogusumma näitab sama arvu.

Sinu teguriread, valikud ja arvestatavad etapid salvestatakse arvestuse failis.

## 5D hinnatabel 5D kulude jaoks

{{ui:5D hinnad (JSON)}} ja {{ui:5D hinnad (CSV)}} salvestavad arvestuse määrad hinnatabelina: üks rida iga hinnastatud kirje kohta koos materjali- ja tööjõumääraga ühiku kohta ning selle jäätmetega. Laadi see BimCraft'i kulupaneelile (Sisseehitatud süsinik ja 5D kulu), et hinnata ehitusmudeli tegevusi samade määradega, mis tegid pakkumise. Kirjed, mis on mõõdetud ühikus, mida tabelis pole, ja kirjed ilma määrata jäetakse välja.

## Sinu assistendiga

Kui lubad Sätetes assistente, saavad nad süsinikku lugeda (`carbon_check`). Tegurite laadimine on sinu enda teha.

## Hea teada

Midagi ei saadeta kuhugi. Arvud on sama head kui tegurid, mille laadid.
