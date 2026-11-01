---
title: Failid, mida TakeoffCraft avab ja salvestab
summary: PDF-id sisse, koguste arvestuse projektifail, tabelarvutused ja märgitud PDF-id välja - mida kumbki sisaldab, kuhu see läheb ning mis muutub võrgus, võrguta ja brauserite vahel.
keywords: failid, vormingud, pdf, takeoff.json, projektifail, xlsx, csv, märgitud pdf, allalaadimine, salvestamine, avamine, võrguta
from: 1bf9be65
---

## Mida see avab

| Fail | Kuidas | Märkused |
|---|---|---|
| PDF (`.pdf`) | {{ui:Ava plaanid}}, {{key:Mod+O}} või lohista lehele | Mitu korraga. Iga lehekülg muutub eraldi leheks. |
| Koguste arvestuse projekt (`.takeoff.json`) | {{ui:Ava koguste arvestus}} või lohista lehele | Sinu kirjed, mõõtkavad ja märgised. Võid selle lohistada koos oma PDF-idega. |

Lehele lohistatud muud failid jäetakse vahele ja olekuriba nimetab need.

- **Parooliga kaitstud PDF-id** ei avane: „(nimi) on parooliga kaitstud. Ava kaitsmata koopia.“
- **Sama PDF kaks korda** avatakse ühe korra: „(nimi) on juba avatud.“ TakeoffCraft tunneb faile nende sisu, mitte nime järgi.
- **Skannitud PDF-id** avanevad ja neid mõõdetakse nagu iga teist; TakeoffCraft ei vaja PDF-is olevat teksti.
- **Suured plaanikomplektid**: iga PDF loetakse avamisel täielikult, et selle sõrmejälg arvutada, seega väga suur fail avaneb hetke. Pisipildid joonistatakse kerimisel ükshaaval.

## Mida see salvestab

Iga salvestamine on allalaadimine. Sinu PDF-idesse ei kirjutata midagi.

| Sa valid | Saad | Mis selles on |
|---|---|---|
| {{ui:Salvesta koguste arvestus}} | `(name).takeoff.json` | Kirjed, koostud, määrad, lehtede mõõtkavad ja iga märgis, seotud iga PDF-iga selle sisu järgi. PDF-lehti pole. |
| {{ui:XLSX}} | `(name).xlsx` | Neli tööalehte: Eelarve (elavate valemitega), Lehe järgi, Märgised, Mõõtkavad. |
| {{ui:CSV}} | `(name).csv` | Eelarve lihtsate väärtustena, üks rida iga kirje ja komponendi kohta. |
| {{ui:Märgitud PDF}} | `(PDF name) (takeoff).pdf` | Iga avatud PDF-i koopia, millel on märgised, koguste arvestus joonistatud lehtedele ja legend. Üks fail iga PDF-i kohta. |

Nimi võetakse esimese selles koguste arvestuses avatud PDF-i järgi. Nime muutmise kasti veel pole: kui soovid teist nime, nimeta allalaaditud fail ümber.

Vt [Ekspordi eelarve ja märgitud PDF](topic:export-estimate) ja [Ekspordi veerud](topic:export-columns).

## Kuhu allalaadimised lähevad

Sinu brauser salvestab need nagu kõik allalaadimised, tavaliselt kausta Allalaadimised. Leia see rakendusest {{pick:mac=Finder|windows=File Explorer|linux=sinu failihaldur}}. Kui brauser on seadistatud küsima iga faili asukohta, küsib ta seda.

:::chromium
{{ui:Märgitud PDF}} mitme märgitud PDF-iga laadib alla mitu faili korraga. Chrome ja Edge võivad üks kord küsida, kas see sait tohib laadida alla mitut faili. Vali Luba.
:::

:::safari
Safari salvestab kausta Allalaadimised, kui sa pole jaotises Üldine Safari sätetes muutnud allalaadimise asukohta.
:::

## Miks projektifail ja PDF-id on eraldi

Fail `.takeoff.json` sisaldab ainult sinu koguste arvestust. See leiab oma PDF-id uuesti nende sisu järgi (iga faili sõrmejälje järgi), seega:

- PDF-i ümbernimetamine või teisaldamine ei loe.
- PDF, mida teine programm muutis või uuesti salvestas, loetakse erinevaks failiks, isegi kui nimi on sama.
- Märgised PDF-idel, mis pole avatud, loetakse ikka kogusummades.

Vt [Salvesta koguste arvestus ja ava uuesti](topic:save-and-reopen).

## Võrgus ja võrguta

Sinu PDF-id ja koguste arvestused ei lahku kunagi sinu arvutist, nii võrgus kui võrguta. Ühendus on oluline ainult TakeoffCraft'i enda laadimiseks.

Et töötada ilma ühenduseta, salvesta rakendus kõigepealt, kui oled võrgus:

1. Vali rakenduse ribal ülal {{ui:Salvesta võrguks}}.
   Nupp loeb edenemist: „Salvestan 12 / 40“, kuni salvestab.
2. Oota, kuni ilmub {{ui:Valmis ka võrguta}}.

TakeoffCraft'i salvestamine hoiab brauseris rakenduse, selle abi, PDF-lugeja, {{ui:Märgitud PDF}}'i jaoks kasutatava PDF-kirjutaja ja automaatse loenduse töötaja, umbes 6 MB. Kui seal on öeldud {{ui:Valmis ka võrguta}}, töötab kõik võrguta: PDF-ide avamine, mõõtmine, {{ui:Automaatne loendus}}, {{ui:Salvesta koguste arvestus}}, {{ui:XLSX}}, {{ui:CSV}} ja {{ui:Märgitud PDF}}.

| Nupp ütleb | Tähendus |
|---|---|
| {{ui:Salvesta võrguks}} | Pole selles brauseris veel salvestatud. Vali see, et salvestada. |
| Salvestan (n) / (m) | Salvestamine käib. |
| {{ui:Valmis ka võrguta}} | Salvestatud. Vali see, et teha {{ui:Salvesta uuesti (võta uusim versioon)}} või {{ui:Eemalda võrguvälise koopia}}. |
| {{ui:Salvestamine ebaõnnestus}} | Mõni fail ei laadinud alla. Kontrolli ühendust ja vali see uuesti. |
| {{ui:Võrguta kasutamine pole saadaval}} | See brauseriaken ei saa hoida võrguvälist koopiat (privaatsed aknad ja mõned hallatud arvutid blokeerivad seda). |

Rohkem, sh kui kaua salvestatud koopia igas brauseris kehtib: [Töö võrguta](common:offline).

:::offline
Sa oled võrgust väljas. Kui rakenduse ribal on {{ui:Valmis ka võrguta}}, töötab kõik. Kui ei ole, siis osad, mida TakeoffCraft sel vahekaardil veel ei laadinud (PDF-kirjutaja {{ui:Märgitud PDF}}'i jaoks ja automaatse loenduse töötaja), ei saa nüüd laadida ning {{ui:Märgitud PDF}} peatub teatega „Märgitud PDF-i ei saanud kirjutada“. Sinu koguste arvestus on igal juhul kindel: {{ui:Salvesta koguste arvestus}}, {{ui:XLSX}} ja {{ui:CSV}} ei vaja ühendust. Ära laadi vahekaarti uuesti enne, kui oled jälle võrgus.
:::

:::online
Oled võrgus. Enne objektikülastust või lendu vali {{ui:Salvesta võrguks}} ja oota, kuni ilmub {{ui:Valmis ka võrguta}}.
:::

## Tabelarvutused

XLSX-is on elavad valemid, nii et tabelarvutusprogramm arvutab eelarve uuesti, kui faili avad, ning hoiab selle õigena, kui sa seal määra või kadu muudad. Töövihik on kontrollitud programmis LibreOffice Calc, mis arvutas iga summa uuesti täpselt samal sendil. Seda pole veel avatud Excelis.

CSV on lihtsad väärtused baidijärjestusmärgiga, nii et tabelarvutusprogrammid loevad korrektselt tähemärke nagu m².

## Töölaud ja pilv

:::desktop
Versioonist 0.5 on töölauarakendus CadCraft Studio: TakeoffCraft ja teised seitse rakendust ühes paketis. Eraldi TakeoffCraft'i paigaldajat pole.
:::

Pilvesalvestus pole veel saadaval. Hoia oma `.takeoff.json` failid koos töö PDF-idega ja varunda neid nagu iga teist faili. Vt [Kuhu sinu failid lähevad](common:your-files).
