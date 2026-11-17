---
title: Pustaka harga
summary: Simpan item, kadar dan himpunan kos anda dalam pustaka, import daripada CSV atau anggaran lepas, tambah item daripadanya ke mana-mana pengukuran kuantiti, dan kemas kini harga pengukuran kuantiti daripadanya.
keywords: pustaka, pek perdagangan, senarai harga, buku harga, pangkalan data kos, import csv, kadar, himpunan kos, guna semula, item templat, kemas kini harga, harga semula
from: 37356c68
---

**Pustaka harga** menyimpan item yang anda guna dari satu kerja ke satu kerja: jenis, unit, ketinggian, pembaziran, kadar bahan dan upah, dan himpunan kosnya. Ia disimpan dalam pelayar ini, berasingan daripada mana-mana pengukuran kuantiti, supaya setiap pengukuran kuantiti yang anda buka di sini boleh menggunakannya.

Buka dengan {{ui:Pustaka}} di bahagian atas panel {{ui:Item}}.

## Isi pustaka

- {{ui:Import CSV…}} membaca hamparan yang disimpan sebagai CSV (lihat lajur di bawah). Item yang nama dan jenisnya sudah ada dalam pustaka diganti; yang lain ditambah. Baris yang tidak dapat dibaca dilangkau, dan ia menyatakan yang mana dan sebabnya.
- {{ui:Tambah item pengukuran kuantiti ini}} menyalin setiap item pengukuran kuantiti yang dibuka ke dalam pustaka, dengan kadar dan himpunan kosnya (bukan tandanya).
- Anggaran CSV yang dieksport TakeoffCraft ([Eksport anggaran](topic:export-estimate)) diimport seperti sedia ada: harga kerja lepas menjadi benih untuk kerja seterusnya.

- {{ui:Pek perdagangan…}} menambah himpunan kos percuma untuk sesuatu perdagangan, seperti dinding kering, elektrik atau konkrit, tanpa harga. Lihat [Pek perdagangan](topic:trade-packs).

{{ui:Eksport CSV}} menyimpan pustaka sebagai CSV, untuk menyimpan salinan, menyuntingnya dalam hamparan atau memberikannya kepada rakan sekerja. {{ui:Kosongkan}} mengosongkannya (klik dua kali).

:::note
Pustaka tinggal dalam storan pelayar ini. Pelayar lain, komputer lain atau tetingkap persendirian mempunyai pustakanya sendiri (atau tiada). Eksport untuk memindahkannya.
:::

## Guna dalam pengukuran kuantiti

- Tandakan item (taip dalam {{ui:Cari dalam pustaka}} untuk menyempitkan senarai) dan pilih {{ui:Tambah ke takeoff}}. Ia ditambah bersama himpunan kosnya dalam satu langkah yang boleh dibatalkan dengan {{key:Mod+Z}}. Nama yang sudah ada dalam pengukuran kuantiti mendapat nombor, seperti `Carpet (2)`.
- {{ui:Kemas kini harga}} memberikan item pengukuran kuantiti pembaziran dan kadar pustaka, untuk setiap item yang nama dan jenisnya sepadan dengan item pustaka, dan perkara yang sama untuk komponen himpunan kos dengan nama yang sama. Ketinggian, unit dan formula kekal seperti sedia ada. Satu {{key:Mod+Z}} mengembalikan semua harga lama.

## Lajur CSV

Baris pertama menamakan lajur, dalam sebarang susunan; lajur lain diabaikan.

| Lajur | Apa yang dimasukkan |
|---|---|
| Item (atau Name) | Nama item. Wajib. |
| Type | Linear, Area atau Count (LF, SF dan EA juga berfungsi). Jika kosong, unit menentukan. |
| Unit | LF atau m; SF, SY atau m²; EA. Kosong: unit biasa jenis itu. |
| Waste % | `10` atau `10%`. |
| Material per unit, Labor per unit | Kadar seperti `2.10` atau `$1,250`. |
| Height (atau Depth) | `9'-0"`, `9`, atau `2.7` untuk unit metrik. |
| Component, Formula | Baris dengan nama Component (atau jenis `Component`) adalah sebahagian daripada himpunan kos item di atasnya. Unit, pembaziran dan kadarnya sendiri; Formulanya menggunakan huruf item, lihat [Himpunan kos dan formula](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Koma, koma bertitik atau tab antara lajur semuanya berfungsi.
