---
title: Exportoszlopok
summary: Az XLSX-export és a CSV minden munkalapja és oszlopa, a Költségvetés munkalap képleteivel együtt.
keywords: exportálás, oszlopok, xlsx, csv, munkalap, költségvetés, lapok szerint, jelölések, méretarányok, képletek, mezők
from: fed07851
---

## Költségvetés (XLSX-munkalap és CSV)

Tételenként egy sor, utána az összetevőik soronként (behúzva). Ezt egy üres sor és az összesen sor követi.

| Oszlop | Tartalom | Az XLSX-ben |
|---|---|---|
| A Tétel | Tétel neve (félkövér) vagy összetevő neve (behúzva) | Szöveg |
| B Típus | Lineáris, Terület, Darabszám vagy Összetevő | Szöveg |
| C Egység | LF, m, SF, SY, m², EA vagy az összetevő egysége | Szöveg |
| D Mennyiség | A mért összeg vagy a képlet eredménye | Szám |
| E Hulladék % | Hulladék | Százalék (0.10 = 10%) |
| F Mennyiség hulladékkal | Mennyiség × (1 + hulladék) | Képlet `D*(1+E)` |
| G Anyag egységenként | Anyag egységára | Szám |
| H Munkadíj egységenként | Munkadíj egységára | Szám |
| I Anyag | Kiterjesztett anyagköltség | Képlet `ROUND(F*G,2)` |
| J Munkadíj | Kiterjesztett munkadíj | Képlet `ROUND(F*H,2)` |
| K Összesen | Anyag + munkadíj | Képlet `I+J` |
| L Megjegyzések | Használt képlet, képlethiba, jelölések méretarány nélküli lapokon, falfelület, kerület | Szöveg |

Az összesen sor: a fenti sorok I, J és K oszlopainak `SUM` függvénye, és a Megjegyzések oszlopban „Hiányos: lásd a fenti megjegyzéseket”, ha valami kimaradt.

A képlethibás sorban nincs mennyiség vagy összeg; a megjegyzés megadja a hibát. A fejléc sor rögzített.

A CSV-ben ugyanezek az oszlopok egyszerű értékeket tartalmaznak: a Hulladék % százalékban, számként (10 a 10%-hoz), a pénz dollárban, két tizedesjeggyel. Azok a szövegek, amelyeket a táblázatkezelő képletnek vehetne (`=`, `+`, `-` vagy `@` kezdetűek), elé `'` jelet kapnak, hogy szövegként maradjanak.

## Lapok szerint (csak XLSX)

| Oszlop | Tartalom |
|---|---|
| Lap | A lap neve (ha a PDF nincs megnyitva, a PDF neve is) |
| Tétel | A tétel neve |
| Mennyiség | A tétel mennyisége azon a lapon, a saját egységében |
| Egység | A tétel egysége |
| Jelölések | A jelölések száma |

## Jelölések (csak XLSX)

Jelölésenként egy sor.

| Oszlop | Tartalom |
|---|---|
| Lap | A lap neve |
| Tétel | A tétel neve |
| Típus | Lineáris, Terület vagy Darabszám |
| Mennyiség | Hossz, nettó terület vagy 1 |
| Egység | LF vagy m; SF, SY vagy m²; EA |
| Részletek | Lineáris: a szakaszhosszak, a levonandók „(levonás)” jelöléssel, és „levonás: (hossz) a rajzolt (hossz) közül”. Terület: bruttó és kivágási területek, ha vannak kivágások, valamint a kerület. „A lapon nincs méretarány” a méretarány nélküli jelöléseknél. |
| Ajánlati terület | Csak akkor, ha a mennyiségkimutatásban vannak ajánlati területek: a jelölés területe vagy „Nincs ajánlati terület” |

## Ajánlati területek szerint (csak XLSX, ha vannak ajánlati területek)

| Oszlop | Tartalom |
|---|---|
| Ajánlati terület | A terület neve, vagy „Nincs ajánlati terület” |
| Tétel | A tétel, vagy alatta behúzott összetevő |
| Egység | A tétel vagy az összetevő egysége |
| Mennyiség | Az adott területen mérve (összetevőknél a képlet a terület összegein) |
| Mennyiség hulladékkal | Mennyiség × (1 + hulladék) |
| Anyag, Munkadíj, Összesen | Cent pontosan kiterjesztve, mint a Költségvetésben |
| Megjegyzések | Képlet, hibák és méretarány nélküli jelölések, mint a Költségvetésben |

Minden terület egy „(név) részösszeg” sorral zárul, amelynek költségei a sorai fölötti `SUM` képletek. Az utolsó sor, **Minden ajánlati terület**, összeadja a részösszegeket. A **Jelölések** munkalapnak ekkor hetedik oszlopa van: **Ajánlati terület**.

## Méretarányok (csak XLSX)

Soronként egy olyan lap, amelynek van méretaránya vagy jelölése.

| Oszlop | Tartalom |
|---|---|
| Lap | A lap neve |
| Méretarány | Az előre beállított méretarány neve, a kalibrált méretarány, vagy „Nincs méretarány” |
| Mód | „Előre beállított”, vagy „Kalibrálva (a megadott távolság)” |
| Láb PDF-egységenként | A TakeoffCraft által használt pontos méretaránytényező |

## Fájlnevek

- `(name).xlsx` és `(name).csv`, ahol a név az ajánlatban először megnyitott PDF-ből származik.
- A CSV UTF-8 kódolású, bájtsorrend-jellel (BOM) és Windows-os sortöréssel, amelyet minden platform táblázatkezelője olvas.
