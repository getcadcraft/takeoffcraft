---
title: Kolom ekspor
summary: Setiap lembar kerja dan kolom dari ekspor XLSX dan CSV, dengan rumus yang dibawa lembar kerja Estimate.
keywords: ekspor, kolom, xlsx, csv, lembar kerja, lembar estimasi, per lembar, tanda, skala, rumus, kolom isian
from: fed07851
---

## Estimate (lembar kerja XLSX dan CSV)

Satu baris per item, diikuti satu baris per komponen assembly-nya (menjorok). Lalu sebuah baris kosong dan total pekerjaan.

| Kolom | Isi | Di XLSX |
|---|---|---|
| A Item | Nama item (tebal) atau nama komponen (menjorok) | Teks |
| B Type | Linear, Area, Count, atau Component | Teks |
| C Unit | LF, m, SF, SY, m², EA, atau satuan komponen | Teks |
| D Quantity | Total terukur, atau hasil rumus | Angka |
| E Waste % | Susut | Persen (0.10 = 10%) |
| F Qty with waste | Kuantitas × (1 + susut) | Rumus `D*(1+E)` |
| G Material per unit | Harga material per satuan | Angka |
| H Labor per unit | Harga upah per satuan | Angka |
| I Material | Material yang diperluas | Rumus `ROUND(F*G,2)` |
| J Labor | Upah yang diperluas | Rumus `ROUND(F*H,2)` |
| K Total | Material + upah | Rumus `I+J` |
| L Notes | Rumus yang dipakai, kesalahan rumus, tanda pada lembar tanpa skala, luas dinding, keliling | Teks |

Baris total pekerjaan: `SUM` dari kolom I, J, dan K pada setiap baris di atas, dan "Tidak lengkap: lihat catatan di atas" di Notes bila ada yang terlewat.

Baris dengan kesalahan rumus tidak memiliki kuantitas atau jumlah; catatannya menyebutkan kesalahannya. Baris header dibekukan.

Di CSV, kolom yang sama berisi nilai polos, Waste % adalah angka persen (10 untuk 10%), dan uang dalam dolar dengan dua desimal. Teks yang mungkin dianggap rumus oleh spreadsheet (diawali `=`, `+`, `-`, atau `@`) diberi `'` di depannya agar tetap menjadi teks.

## Per lembar (hanya XLSX)

| Kolom | Isi |
|---|---|
| Sheet | Nama lembar (dengan nama PDF bila tidak terbuka) |
| Item | Nama item |
| Quantity | Kuantitas item itu pada lembar tersebut, dalam satuannya |
| Unit | Satuan item |
| Marks | Jumlah tanda |

## Tanda (hanya XLSX)

Satu baris per tanda.

| Kolom | Isi |
|---|---|
| Sheet | Nama lembar |
| Item | Nama item |
| Type | Linear, Area, atau Count |
| Quantity | Panjang, luas bersih, atau 1 |
| Unit | LF atau m; SF, SY, atau m²; EA |
| Detail | Linear: panjang segmen, segmen yang dikurangkan ditandai "(deduct)", dan "mengurangi (panjang) dari (panjang) yang digambar". Area: luas kotor dan luas potongan bila ada potongan, serta kelilingnya. "Lembar tidak memiliki skala" untuk tanda tanpa skala. |
| Bid area | Hanya bila takeoff memiliki area penawaran: luas tanda itu, atau "Tidak ada area penawaran" |

## Per area penawaran (hanya XLSX, bila takeoff memiliki area penawaran)

| Kolom | Isi |
|---|---|
| Bid area | Nama area, atau "Tidak ada area penawaran" |
| Item | Item, atau komponen menjorok di bawahnya |
| Unit | Satuan item atau komponen |
| Quantity | Terukur di area itu (komponen: rumus pada total area) |
| Qty with waste | Kuantitas × (1 + susut) |
| Material, Labor, Total | Diperluas sampai sen, seperti pada Estimate |
| Notes | Rumus, kesalahan, dan tanda tanpa skala, seperti pada Estimate |

Setiap area diakhiri baris "(nama) subtotal" yang biayanya berupa rumus `SUM` atas barisnya; baris terakhir, **Semua area penawaran**, menjumlahkan subtotal. Lembar **Marks** kemudian memiliki kolom ketujuh, **Bid area**.

## Skala (hanya XLSX)

Satu baris per lembar yang memiliki skala atau tanda.

| Kolom | Isi |
|---|---|
| Sheet | Nama lembar |
| Scale | Nama preset, skala terkalibrasi, atau "Tanpa skala" |
| How | "Preset", atau "Dikalibrasi pada (jarak yang Anda ketik)" |
| Feet per PDF unit | Faktor skala persis yang dipakai TakeoffCraft |

## Nama berkas

- `(name).xlsx` dan `(name).csv`, dengan nama dari PDF pertama yang dibuka dalam takeoff.
- CSV berkode UTF-8 dengan byte order mark dan akhir baris Windows, yang dibaca program spreadsheet di semua platform.
