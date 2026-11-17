---
title: Väljaanded, revisjonid ja joonise muudatuste logi
summary: Hoia üks väljaannete ajalugu koos arhitekti mudeliga: loe väljaanded sisse, salvesta objektijuhised, tööjoonised ja seotud mudelid väljaande alla ning vaata joonise muudatuste logi.
keywords: väljaanne, revisjon, revisjonid, muudatuste logi, joonise muudatuste logi, joonise register, objektijuhis, tööjoonis, seotud mudel, hange, ehitus, väljaannete ajalugu, koguste loend, koguste arvestus
from: 8d8f6e68
---

## Mida sa teed

Tööta samast väljaannete ajaloost nagu kogu meeskond. Vaata, millised lehed millise revisjoniga välja läksid, ja seo objektil toimuv selle väljaandega, millele see kuulub.

## Sammud

1. Ava **Väljaanded ja revisjonid**.
2. Vali **Loe väljaannete ajalugu** ja vali fail `.issues.json`, mis on salvestatud BimCraftist või mõnest muust rakendusest. Selle väljaanded ja kirjed lisatakse sinu omadele. Midagi ei asendata.
3. Vali **Lisa kirje** objektijuhise, tööjoonise, märgistuste komplekti, seotud mudeli või märkuse jaoks. Vali väljaanne, millele see kuulub, ja selle staatus. Valitud fail salvestatakse nime, suuruse ja SHA-256 järgi; fail jääb sinna, kus ta on.
4. **Joonise muudatuste logi** näitab ühte rida iga lehe kohta ja ühte veergu iga väljaande kohta. Sulgudes olev revisjon on välja antud uuesti muutmata kujul.
5. **Laadi muudatuste logi alla (CSV)** salvestab väljaanded, lehtede tabeli ja kirjed. **Salvesta väljaannete ajalugu** kirjutab faili, mida teised rakendused loevad.

## Hea teada

- **Registreeri väljaanne** väljastab sinu mõõdetud lehed, näiteks koos koguste loendiga. **Muutused pärast** ütleb, millised lehed mõõdeti pärast seda väljaannet uuesti.
- Ajalugu salvestatakse koguste arvestuse faili. Iga muudatus on üks Võta tagasi.
- Sama faili kaks korda lugemine ei lisa midagi topelt. Kui kahes koopias on sama kirje, jäetakse uuem.
