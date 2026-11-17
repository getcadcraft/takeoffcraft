---
title: Area penawaran
summary: Beri tanda pada tanda berdasarkan gedung, lantai, atau fase, hitung volume ke dalam satu area dalam satu waktu, dan baca kuantitas serta biaya untuk setiap area.
keywords: tambah alternatif, kurangi alternatif, penawaran dasar, alternatif, area penawaran, area, gedung, lantai, level, fase, zona, alternatif, rincian, pisah, lantai tipikal, subtotal, per area
from: 64f3d41c
---

Area penawaran adalah bagian pekerjaan yang Anda harga secara terpisah: sebuah gedung, sebuah lantai, sebuah fase, sebuah sayap. Setiap tanda dapat berada di satu area penawaran. Kuantitas dan estimasi kemudian dapat dibaca untuk setiap area, dengan subtotal untuk masing-masing, sementara total pekerjaan tetap merupakan jumlah dari semuanya.

## Buat area penawaran

1. Di bagian atas panel {{ui:Item}}, buka daftar {{ui:Area penawaran}}.
2. Pilih **Area penawaran baru…**, ketik nama seperti "Gedung A" atau "Lantai 2", lalu pilih **Buat**.
   Area baru menjadi area aktif. Bilah status menyatakan "Tanda baru masuk ke (nama). Tanda di area penawaran lain diredupkan."

## Hitung volume ke dalam sebuah area

Selama sebuah area penawaran dipilih di daftar, setiap tanda baru masuk ke dalamnya: garis lari, area, lingkaran, hitungan, tanda yang ditambahkan {{ui:Hitung otomatis}}, dan apa pun yang Anda tempel. Tanda di area penawaran lain, dan tanda yang tidak berada di area mana pun, diredupkan pada lembar agar Anda dapat melihat apa yang termasuk di mana.

Pilih **Tanpa area penawaran** di daftar untuk menghitung volume tanpa area; tidak ada yang diredupkan saat itu.

:::tip
Lantai tipikal: hitung volume Lantai 2, pilih tandanya ({{key:Mod+A}} pada lembar), salin, pilih Lantai 3 di daftar, lalu tempel. Salinannya masuk ke Lantai 3. Jika lantai-lantainya sama dan Anda tidak perlu memisahkannya, [grup tipikal](topic:typical-groups) menghitung satu lantai beberapa kali sebagai gantinya.
:::

## Pindahkan tanda ke area lain

Pilih satu tanda atau beberapa ({{key:Shift}} + klik, atau {{key:Mod+A}}). Di bawah **Tanda terpilih** (atau **Tanda terpilih** untuk jamak), pilih area di kolom {{ui:Area penawaran}}. Bilah status menyatakan "3 tanda dipindahkan ke Lantai 2." Ini adalah satu langkah urung.

## Ganti nama, atur ulang, atau hapus

Pilih **Kelola area penawaran…** di daftar. Ketik di atas nama untuk mengganti namanya, gunakan panah untuk mengubah urutan (tabel dan buku kerja mengikutinya), atau hapus dengan ikon tempat sampah. Menghapus area penawaran tetap menyimpan tandanya: tanda itu kemudian tidak berada di area penawaran mana pun. {{key:Mod+Z}} membatalkan setiap perubahan.

## Baca kuantitas per area

Di tabel {{ui:Kuantitas}}, pilih {{ui:Per area}} (muncul setelah perhitungan volume memiliki area penawaran). Setiap area mencantumkan item yang dimilikinya, dengan kuantitas, satuan, dan total, lalu baris subtotal. Tanda yang tidak berada di area penawaran muncul paling akhir, sebagai **Tanpa area penawaran**. Klik baris item untuk menyorot item dan menjadikan area itu sebagai area aktif.

Rakitan dihitung untuk setiap area dari total area itu sendiri. Rumus yang membulatkan ke atas, seperti `ceil(L / 4)`, dapat memberikan sedikit lebih banyak di seluruh area dibanding untuk keseluruhan pekerjaan, seperti yang terjadi pada penawaran yang dihargai per area.

## Alternatif: penawaran dasar ditambah tambahan dan pengurangan

Area penawaran dapat menjadi **alternatif**: pekerjaan yang mungkin ditambahkan pemilik ke penawaran, atau dikeluarkan darinya. Di **Kelola area penawaran…**, setiap area memiliki daftar di sebelah namanya:

| Pilihan | Fungsinya |
|---|---|
| {{ui:Penawaran dasar}} | Dalam penawaran, seperti biasa. |
| {{ui:Alternatif tambah}} | Dihargai tersendiri dan **tidak termasuk dalam penawaran dasar**: peningkatan karpet, kanopi tambahan. |
| {{ui:Alternatif kurang}} | Dalam penawaran dasar, dan ditawarkan sebagai pengurangan: "hapus kanopi". |

Hitung volume pekerjaan alternatif ke dalam area penawarannya seperti area lainnya. Setelah perhitungan volume memiliki alternatif:

- Header tabel {{ui:Kuantitas}} menyatakan **Penawaran dasar** alih-alih Total pekerjaan: seluruh perhitungan volume tanpa alternatif tambahan.
- {{ui:Per area}} diakhiri dengan penawaran dasar dan satu baris per alternatif: **+$300.00** untuk tambahan, **−$1,050.00** untuk pengurangan.
- Alternatif hanya menghargai item yang memiliki tanda di dalamnya, dengan rakitannya, sehingga bagian rakitan dari item lain tidak ikut masuk.

Di ekspor, CSV diakhiri dengan penawaran dasar dan alternatif, dan buku kerja mendapat lembar kerja **Alternatif**: penawaran dasar, item setiap alternatif beserta perubahannya, serta penawaran dasar dengan semua alternatif tambah diambil.

## Dalam ekspor

{{ui:XLSX}} menambahkan lembar kerja **Per area penawaran**: item dan komponen setiap area dengan kuantitas, kuantitas dengan susut, material, upah, dan total, subtotal per area (sebuah rumus `SUM`), dan **Semua area penawaran** di akhir. Lembar kerja **Tanda** mendapat kolom **Area penawaran**. Perhitungan volume tanpa area penawaran diekspor seperti sebelumnya. Lihat [Kolom ekspor](topic:export-columns).

Area penawaran disimpan di file proyek bersama tandanya.
