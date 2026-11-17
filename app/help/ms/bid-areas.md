---
title: Kawasan tawaran
summary: Tag tanda mengikut bangunan, tingkat atau fasa, buat pengukuran kuantiti ke dalam satu kawasan pada satu masa, dan baca kuantiti serta kos bagi setiap kawasan.
keywords: tambah alternatif, potong alternatif, bidaan asas, alternatif, kawasan tawaran, kawasan, bangunan, tingkat, aras, fasa, zon, alternatif, pecahan, pisah, tingkat tipikal, subjumlah, mengikut kawasan
from: 64f3d41c
---

Kawasan tawaran ialah sebahagian kerja yang anda harga secara berasingan: sebuah bangunan, tingkat, fasa, sayap. Setiap tanda boleh berada dalam satu kawasan tawaran. Kuantiti dan anggaran kemudian boleh dibaca bagi setiap kawasan, dengan subjumlah untuk setiap satu, manakala jumlah kerja kekal sebagai hasil tambah semuanya.

## Buat kawasan tawaran

1. Di bahagian atas panel {{ui:Items}}, buka senarai {{ui:Bid area}}.
2. Pilih **Kawasan tawaran baharu…**, taip nama seperti "Bangunan A" atau "Aras 2", dan pilih **Cipta**.
   Kawasan baharu menjadi yang semasa. Bar status berkata "Tanda baharu masuk ke (nama). Tanda dalam kawasan tawaran lain dimalapkan."

## Buat pengukuran kuantiti dalam satu kawasan

Semasa kawasan tawaran dipilih dalam senarai, setiap tanda baharu masuk ke dalamnya: larian, kawasan, bulatan, kiraan, tanda yang ditambah {{ui:Auto count}}, dan apa yang anda tampal. Tanda dalam kawasan tawaran lain, dan tanda tanpa kawasan, dimalapkan pada helaian supaya anda boleh lihat apa yang tergolong di mana.

Pilih **No bid area** dalam senarai untuk membuat pengukuran tanpa kawasan; tiada apa dimalapkan ketika itu.

:::tip
Tingkat tipikal: buat pengukuran Aras 2, pilih tandanya ({{key:Mod+A}} pada helaian), salin, pilih Aras 3 dalam senarai dan tampal. Salinan masuk ke Aras 3. Apabila tingkat itu sama dan anda tidak perlu memisahkannya, [kumpulan tipikal](topic:typical-groups) mengira satu tingkat beberapa kali sebaliknya.
:::

## Pindahkan tanda ke kawasan lain

Pilih satu tanda atau beberapa ({{key:Shift}} + klik, atau {{key:Mod+A}}). Di bawah **Tanda dipilih**, pilih kawasan dalam medan {{ui:Bid area}}. Bar status berkata "3 tanda dialihkan ke Aras 2." Ia satu langkah buat asal.

## Namakan semula, susun semula atau padam

Pilih **Manage bid areas…** dalam senarai. Taip ganti nama untuk menamakan semula, gunakan anak panah untuk menukar susunan (jadual dan buku kerja mengikutnya), atau padam satu dengan tong sampah. Memadam kawasan tawaran mengekalkan tandanya: ia kemudian tidak berada dalam mana-mana kawasan tawaran. {{key:Mod+Z}} membuat asal setiap perubahan.

## Baca kuantiti mengikut kawasan

Dalam jadual {{ui:Quantities}}, pilih {{ui:By area}} (ia muncul apabila pengukuran kuantiti mempunyai kawasan tawaran). Setiap kawasan menyenaraikan item yang dipegangnya, dengan kuantiti, unit dan jumlahnya, kemudian baris subjumlah. Tanda tanpa kawasan tawaran datang terakhir, sebagai **No bid area**. Klik baris item untuk menyerlahkan item dan menjadikan kawasan itu yang semasa.

Himpunan dikira untuk setiap kawasan daripada jumlah kawasan itu sendiri. Formula yang membundarkan ke atas, seperti `ceil(L / 4)`, boleh memberi sedikit lebih apabila kawasan dijumlahkan berbanding untuk keseluruhan kerja, sebagaimana yang berlaku pada bidaan yang dihargai mengikut kawasan.

## Alternatif: bidaan asas tambah dan potong

Kawasan tawaran boleh menjadi **alternatif**: kerja yang pemilik mungkin tambah pada bidaan, atau keluarkan daripadanya. Dalam **Manage bid areas…**, setiap kawasan mempunyai senarai di sebelah namanya:

| Pilihan | Apa yang dilakukannya |
|---|---|
| {{ui:Base bid}} | Dalam bidaan, seperti biasa. |
| {{ui:Add alternate}} | Dihargai secara berasingan dan **ditinggalkan daripada bidaan asas**: naik taraf karpet, kanopi tambahan. |
| {{ui:Deduct alternate}} | Dalam bidaan asas, dan ditawarkan sebagai potongan: "padam kanopi itu". |

Ukur kerja alternatif ke dalam kawasan tawarannya seperti kawasan lain. Apabila pengukuran kuantiti mempunyai alternatif:

- Pengepala jadual {{ui:Quantities}} berkata **Bidaan asas** dan bukannya Jumlah kerja: keseluruhan pengukuran tanpa alternatif tambahan.
- {{ui:By area}} berakhir dengan bidaan asas dan satu baris bagi setiap alternatif: **+$300.00** untuk tambahan, **−$1,050.00** untuk potongan.
- Alternatif hanya menghargai item yang mempunyai tanda di dalamnya, dengan himpunannya, supaya bahagian himpunan bagi item lain tidak ikut masuk.

Dalam eksport, CSV berakhir dengan bidaan asas dan alternatif, dan buku kerja mendapat helaian **Alternatif**: bidaan asas, item setiap alternatif dan perubahannya, dan bidaan asas dengan setiap alternatif tambahan diambil kira.

## Dalam eksport

{{ui:XLSX}} menambah helaian **Mengikut kawasan tawaran**: item dan komponen setiap kawasan dengan kuantiti, kuantiti dengan pembaziran, bahan, upah dan jumlah, subjumlah setiap kawasan (formula `SUM`) dan **Semua kawasan tawaran** di hujung. Helaian **Tanda** mendapat lajur **Bid area**. Pengukuran kuantiti tanpa kawasan tawaran dieksport seperti sebelumnya. Lihat [Lajur eksport](topic:export-columns).

Kawasan tawaran disimpan dalam fail projek bersama tanda.
