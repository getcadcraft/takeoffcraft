---
title: Ekspordi veerud
summary: Iga tööleht ja veerg XLSX-ekspordis ning CSV-s koos valemitega, mida Eelarve tööleht kannab.
keywords: eksport, veerud, xlsx, csv, tööleht, eelarve leht, lehtede kaupa, märgised, mõõtkavad, valemid, väljad
from: fed07851
---

## Eelarve (XLSX tööleht ja CSV)

Üks rida kirje kohta, millele järgneb rida iga tema koostekomponendi kohta (taandega). Seejärel tühi rida ja kogusumma.

| Veerg | Sisu | XLSX-is |
|---|---|---|
| A Kirje | Kirje nimi (paks) või komponendi nimi (taandega) | Tekst |
| B Tüüp | Lineaarne, Pindala, Loendus või Komponent | Tekst |
| C Ühik | LF, m, SF, SY, m², EA või komponendi ühik | Tekst |
| D Kogus | Mõõdetud kogusumma või valemi tulemus | Arv |
| E Kadu % | Kadu | Protsent (0.10 = 10%) |
| F Kogus koos kaduga | Kogus × (1 + kadu) | Valem `D*(1+E)` |
| G Materjal ühiku kohta | Materjali hind | Arv |
| H Tööjõud ühiku kohta | Tööjõu hind | Arv |
| I Materjal | Materjalikulu | Valem `ROUND(F*G,2)` |
| J Tööjõud | Tööjõukulu | Valem `ROUND(F*H,2)` |
| K Kokku | Materjal + tööjõud | Valem `I+J` |
| L Märkused | Kasutatud valem, valemiviga, märgised lehtedel ilma mõõtkavata, seinapind, ümbermõõt | Tekst |

Kogusumma rida: `SUM` veergude I, J ja K üle kõigi ülaltoodud ridade ning märkuses „Mittetäielik: vaata ülal olevaid märkusi“, kui midagi jäeti välja.

Rida, millel on valemiviga, ei sisalda kogust ega summasid; selle märkus ütleb vea. Päisereaa on lukustatud.

CSV-s hoiavad samad veerud lihtsaid väärtusi, Kadu % on protsentide arv (10 tähendab 10%) ning raha on dollarites kahe komakohaga. Tekst, mida tabelarvutus võiks pidada valemiks (algab `=`, `+`, `-` või `@`), saab ette `'`, et see jääks tekstiks.

## Lehtede kaupa (ainult XLSX)

| Veerg | Sisu |
|---|---|
| Leht | Lehe nimi (koos PDF-i nimega, kui see ei ole avatud) |
| Kirje | Kirje nimi |
| Kogus | Selle kirje kogus sellel lehel, selle ühikus |
| Ühik | Kirje ühik |
| Märgised | Märgiste arv |

## Märgised (ainult XLSX)

Üks rida märgise kohta.

| Veerg | Sisu |
|---|---|
| Leht | Lehe nimi |
| Kirje | Kirje nimi |
| Tüüp | Lineaarne, Pindala või Loendus |
| Kogus | Pikkus, netopind või 1 |
| Ühik | LF või m; SF, SY või m²; EA |
| Üksikasjad | Lineaarne: lõikude pikkused, mahaarvatud lõigud märgitud „(mahaarvatud)“ ja „mahaarvatakse (pikkus) joonistatud (pikkusest)“. Pindala: brutto- ja väljalõikepindalad, kui väljalõikeid on, ning ümbermõõt. „Lehel pole mõõtkava“ mõõtkavata märgiste puhul. |
| Pakkumise ala | Ainult siis, kui koguste arvestusel on pakkumise alad: märgise pind või „Pakkumisala puudub“ |

## Pakkumise alade kaupa (ainult XLSX, kui koguste arvestusel on pakkumise alad)

| Veerg | Sisu |
|---|---|
| Pakkumise ala | Ala nimi või „Pakkumisala puudub“ |
| Kirje | Kirje või selle all taandega komponent |
| Ühik | Kirje või komponendi ühik |
| Kogus | Mõõdetud selles alas (komponendid: valem ala kogusummadel) |
| Kogus koos kaduga | Kogus × (1 + kadu) |
| Materjal, Tööjõud, Kokku | Arvutatud sendini, nagu Eelarves |
| Märkused | Valem, vead ja mõõtkavata märgised, nagu Eelarves |

Iga ala lõpeb reaga „(nimi) vahesumma“, mille kulud on `SUM`-valemid oma ridade üle; viimane rida **Kõik pakkumisalad** liidab vahesummad. **Märgiste** tööleht saab seejärel seitsmenda veeru **Pakkumise ala**.

## Mõõtkavad (ainult XLSX)

Üks rida iga lehe kohta, millel on mõõtkava või märgised.

| Veerg | Sisu |
|---|---|
| Leht | Lehe nimi |
| Mõõtkava | Eelhäälestuse nimi, kalibreeritud mõõtkava või „Mõõtkava puudub“ |
| Kuidas | „Eelhäälestus“ või „Kalibreeritud (sisestatud kaugusel)“ |
| Jalgu PDF-ühiku kohta | Täpne mõõtkava tegur, mida TakeoffCraft kasutab |

## Failinimed

- `(name).xlsx` ja `(name).csv`, kus nimi tuleb koguste arvestuses esimesena avatud PDF-ist.
- CSV on UTF-8 koos baidijärjestuse märgiga ja Windowsi reavahetustega, mida tabelarvutusprogrammid igal platvormil loevad.
