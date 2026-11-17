---
title: Pustaka harga
summary: Simpan item, tarif dan rakitan Anda dalam pustaka, impor dari CSV atau estimasi lama, tambahkan item darinya ke takeoff mana pun, dan perbarui harga takeoff dari pustaka itu.
keywords: pustaka, paket keahlian, daftar harga, buku harga, basis data biaya, impor csv, tarif, rakitan, pakai ulang, item templat, perbarui harga, harga ulang
from: 37356c68
---

**Pustaka harga** menyimpan item yang Anda gunakan dari pekerjaan ke pekerjaan: jenisnya, satuan, tinggi, susut, tarif material dan upah, serta rakitannya. Pustaka disimpan di peramban ini, terpisah dari takeoff mana pun, sehingga setiap takeoff yang Anda buka di sini dapat memakainya.

Bukalah dengan {{ui:Library}} di bagian atas panel {{ui:Items}}.

## Mengisi pustaka

- {{ui:Import CSV…}} membaca spreadsheet yang disimpan sebagai CSV (lihat kolomnya di bawah). Item yang nama dan jenisnya sudah ada di pustaka akan diganti; sisanya ditambahkan. Baris yang tidak dapat dibaca dilewati, dan TakeoffCraft menyebutkan baris mana dan alasannya.
- Tambahkan item takeoff ini menyalin setiap item dari takeoff yang terbuka ke pustaka, beserta tarif dan rakitannya (tetapi tidak termasuk tandanya).
- Estimasi CSV yang diekspor TakeoffCraft ([Ekspor estimasi](topic:export-estimate)) diimpor apa adanya: harga pekerjaan terakhir menjadi awal untuk pekerjaan berikutnya.

- {{ui:Trade packs…}} menambahkan rakitan gratis untuk satu bidang, seperti drywall, listrik, atau beton, tanpa harga. Lihat [Paket keahlian](topic:trade-packs).

{{ui:Export CSV}} menyimpan pustaka sebagai CSV, untuk menyimpan salinan, mengeditnya di spreadsheet, atau memberikannya ke rekan. {{ui:Clear}} mengosongkannya (klik dua kali).

:::note
Pustaka tersimpan di penyimpanan peramban ini. Peramban lain, komputer lain, atau jendela privat memiliki pustaka sendiri (atau tidak ada sama sekali). Ekspor pustaka untuk memindahkannya.
:::

## Memakainya di takeoff

- Centang item (ketik di {{ui:Find in the library}} untuk mempersempit daftar), lalu pilih {{ui:Add to takeoff}}. Item ditambahkan beserta rakitannya dalam satu langkah yang dapat dibatalkan dengan {{key:Mod+Z}}. Nama yang sudah ada di takeoff akan diberi nomor, seperti `Carpet (2)`.
- {{ui:Update prices}} memberi item takeoff susut dan tarif dari pustaka, untuk setiap item yang nama dan jenisnya cocok dengan item pustaka, dan hal yang sama untuk komponen rakitan dengan nama yang sama. Tinggi, satuan dan formula tetap seperti semula. Satu {{key:Mod+Z}} mengembalikan semua harga lama.

## Kolom CSV

Baris pertama menamai kolom, dalam urutan apa pun; kolom lain diabaikan.

| Kolom | Isinya |
|---|---|
| Item (atau Name) | Nama item. Wajib diisi. |
| Type | Linear, Area atau Count (LF, SF dan EA juga berfungsi). Jika kosong, satuan yang menentukan. |
| Unit | LF atau m; SF, SY atau m²; EA. Kosong: satuan biasa untuk jenis tersebut. |
| Waste % | `10` atau `10%`. |
| Material per unit, Labor per unit | Tarif seperti `2.10` atau `$1,250`. |
| Height (atau Depth) | `9'-0"`, `9`, atau `2.7` untuk satuan metrik. |
| Component, Formula | Baris dengan nama Component (atau jenis `Component`) adalah bagian dari rakitan item di atasnya. Satuan, susut dan tarifnya sendiri; formulanya memakai huruf item itu, lihat [Rakitan dan formula](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Koma, titik koma, atau tab sebagai pemisah antarkolom sama-sama berfungsi.
