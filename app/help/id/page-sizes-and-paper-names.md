---
title: Ukuran halaman dan nama kertas
summary: Lihat ukuran setiap lembar dalam milimeter dan inci serta nama kertasnya (seri A, B, dan C, ANSI, ARCH), dan kelompokkan set campuran menurut ukuran untuk menemukan lembar yang tidak biasa.
keywords: ukuran halaman, ukuran kertas, nama kertas, a0, a1, a2, a3, a4, seri b, seri c, ansi, arch, arsitektural, mm, inci, ukuran khusus, menurut ukuran, ukuran tidak biasa, set campuran, skala, set denah, mediabox, rotasi
from: 9c061c07
---

Skala hanya berarti pada kertas yang tepat. {{ui:TakeoffCraft}} membaca ukuran setiap lembar PDF dan menamai kertasnya, sehingga Anda dapat melihat lembar yang dicetak pada ukuran berbeda sebelum Anda memercayai pengukuran di atasnya.

## Yang akan Anda lakukan

Lihat ukuran lembar yang terbuka, lalu kelompokkan seluruh set menurut ukuran.

## Langkah

1. Buka denah ({{ui:Open plans}}).
2. Bilah lembar di atas gambar menampilkan nama kertas dan ukuran lembar yang terbuka, misalnya "A1 · 594 × 841 mm".
3. Setiap baris dalam daftar {{ui:Sheets}} memiliki baris ukuran di bawah nama lembar.
4. Pilih {{ui:By size}} di header {{ui:Sheets}}. Daftar mengumpulkan lembar di bawah satu judul per ukuran, dengan kelompok terbesar lebih dulu, dan menandai ukuran yang hanya memiliki sedikit lembar sebagai ukuran yang tidak biasa.
5. Pilih {{ui:By size}} lagi untuk kembali ke urutan asli set.

Lembar DWG atau DXF tidak memiliki kertas, jadi tidak ada ukuran yang ditampilkan untuknya.

## Cara nama dipilih

- Ukuran berasal dari kotak halaman dalam PDF dengan rotasinya diterapkan.
- Nama-namanya adalah seri A dan B (ISO 216), seri C (ISO 269), ANSI A sampai E, dan ARCH A sampai E.
- Halaman dalam 2 mm dari ukuran bernama mengambil nama itu. Halaman lain disebut khusus, dengan ukuran bernama terdekat dan selisihnya.

## Dalam estimasi

Buku kerja estimasi memiliki lembar kerja {{ui:Page sizes}} dengan jumlah setiap ukuran.

:::note
Nilai inci ANSI dan ARCH diketik dari tabel yang dipublikasikan dan belum dibandingkan dengan standar cetak.
:::
