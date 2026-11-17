---
title: Lajur eksport
summary: Setiap hamparan dan lajur eksport XLSX serta CSV, dengan formula yang dibawa oleh hamparan Anggaran kos.
keywords: eksport, lajur, xlsx, csv, hamparan, lembaran anggaran, mengikut helaian, tanda, skala, formula, medan
from: fed07851
---

## Anggaran kos (hamparan XLSX dan CSV)

Satu baris bagi setiap item, diikuti satu baris bagi setiap komponen himpunan kosnya (menjorok). Kemudian satu baris kosong dan jumlah kerja.

| Lajur | Kandungan | Dalam XLSX |
|---|---|---|
| A Item | Nama item (tebal) atau nama komponen (menjorok) | Teks |
| B Jenis | Linear, Area, Count atau Component | Teks |
| C Unit | LF, m, SF, SY, m², EA, atau unit komponen | Teks |
| D Kuantiti | Jumlah diukur, atau hasil formula | Nombor |
| E Pembaziran % | Pembaziran | Peratus (0.10 = 10%) |
| F Kuantiti dengan pembaziran | Kuantiti × (1 + pembaziran) | Formula `D*(1+E)` |
| G Bahan setiap unit | Kadar bahan | Nombor |
| H Upah setiap unit | Kadar upah | Nombor |
| I Bahan | Bahan lanjutan | Formula `ROUND(F*G,2)` |
| J Upah | Upah lanjutan | Formula `ROUND(F*H,2)` |
| K Jumlah | Bahan + upah | Formula `I+J` |
| L Nota | Formula yang digunakan, ralat formula, tanda pada helaian tanpa skala, luas dinding, perimeter | Teks |

Baris jumlah kerja: `SUM` bagi lajur I, J dan K merentas setiap baris di atas, dan "Tidak lengkap: lihat nota di atas" dalam Nota apabila ada yang ditinggalkan.

Baris dengan ralat formula tidak mempunyai kuantiti atau amaun; notanya menyatakan ralatnya. Baris pengepala dibekukan.

Dalam CSV, lajur yang sama memegang nilai biasa, Pembaziran % ialah nombor peratus (10 untuk 10%), dan wang dalam dolar dengan dua titik perpuluhan. Teks yang mungkin disangka formula oleh hamparan (bermula dengan `=`, `+`, `-` atau `@`) diberi `'` di hadapannya supaya kekal sebagai teks.

## Mengikut helaian (XLSX sahaja)

| Lajur | Kandungan |
|---|---|
| Helaian | Nama helaian (dengan nama PDF apabila ia tidak dibuka) |
| Item | Nama item |
| Kuantiti | Kuantiti item itu pada helaian itu, dalam unitnya |
| Unit | Unit item |
| Tanda | Bilangan tanda |

## Tanda (XLSX sahaja)

Satu baris bagi setiap tanda.

| Lajur | Kandungan |
|---|---|
| Helaian | Nama helaian |
| Item | Nama item |
| Jenis | Linear, Area atau Count |
| Kuantiti | Panjang, luas bersih, atau 1 |
| Unit | LF atau m; SF, SY atau m²; EA |
| Butiran | Linear: panjang segmen, segmen yang ditolak ditanda "(deduct)", dan "deducts (length) of (length) drawn" (menolak (panjang) daripada (panjang) yang dilukis). Area: luas kasar dan luas lubang apabila ada lubang, serta perimeter. "Sheet has no scale" bagi tanda tanpa skala: "Helaian tiada skala". |
| Kawasan bidaan | Hanya apabila takeoff mempunyai kawasan bidaan: luas tanda itu, atau "No bid area" ("Tiada kawasan bidaan") |

## Mengikut kawasan bidaan (XLSX sahaja, apabila takeoff mempunyai kawasan bidaan)

| Lajur | Kandungan |
|---|---|
| Kawasan bidaan | Nama kawasan, atau "No bid area" ("Tiada kawasan bidaan") |
| Item | Item, atau komponen menjorok di bawahnya |
| Unit | Unit item atau komponen |
| Kuantiti | Diukur dalam kawasan itu (komponen: formula pada jumlah kawasan) |
| Kuantiti dengan pembaziran | Kuantiti × (1 + pembaziran) |
| Bahan, Upah, Jumlah | Dilanjutkan hingga sen, seperti pada Anggaran kos |
| Nota | Formula, ralat dan tanda tanpa skala, seperti pada Anggaran kos |

Setiap kawasan berakhir dengan baris "(nama) subtotal" yang kosnya ialah formula `SUM` ke atas barisnya; baris terakhir, **All bid areas**, menambah jumlah kecil itu. Hamparan **Tanda** kemudian mempunyai lajur ketujuh, **Kawasan bidaan**.

## Skala (XLSX sahaja)

Satu baris bagi setiap helaian yang mempunyai skala atau tanda.

| Lajur | Kandungan |
|---|---|
| Helaian | Nama helaian |
| Skala | Nama pratetap, atau skala yang ditentukur, atau "No scale" ("Tiada skala") |
| Cara | "Preset" ("Pratetap"), atau "Calibrated on (the distance you typed)" ("Ditentukur pada (jarak yang anda taip)") |
| Kaki setiap unit PDF | Faktor skala tepat yang digunakan TakeoffCraft |

## Nama fail

- `(name).xlsx` dan `(name).csv`, dengan nama diambil daripada PDF pertama yang dibuka dalam takeoff.
- CSV ialah UTF-8 dengan tanda urutan bait dan tamat baris Windows, yang dibaca oleh program hamparan pada setiap platform.
