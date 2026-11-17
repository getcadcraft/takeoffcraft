---
title: Grup tipikal
summary: Hitung satu unit, ruang, atau lantai tipikal sekali dan hitung sebanyak pengulangannya, ubah hitungannya nanti, dan lihat tanda mana yang tipikal.
keywords: tipikal, grup tipikal, ulang, jumlah pengulangan, kalikan, kali, unit, kamar hotel, apartemen, lantai tipikal, x24, salinan
from: 42c3a372
---

Sebuah bangunan sering berulang: 24 kamar hotel yang identik, 6 lantai tipikal, 40 bay parkir dengan garis marka yang sama. **Grup tipikal** memungkinkan Anda mengambil satu di antaranya dan menghitungnya sebanyak pengulangannya, tanpa menggambar salinannya.

## Buat grup tipikal

1. Hitung satu unit: dindingnya, lantainya, stopkontaknya — item apa pun.
2. Pilih tanda-tandanya dengan alat {{ui:Pilih}}: klik satu, lalu {{key:Shift}} + klik yang lain ([Pilih tanda](topic:copy-paste#select-the-marks)).
3. Di bawah **Tanda terpilih**, buka {{ui:Tipikal}} dan pilih {{ui:Grup tipikal baru…}}.
4. Beri nama (`Unit A`) dan berapa kali ia berulang (`24`), lalu pilih {{ui:Buat grup}}.

Setiap kuantitas dari tanda-tanda itu sekarang dihitung 24 kali: run dinding 10 ft menjadi 240 ft, lantai 80 SF menjadi 1,920 SF, dua stopkontak menjadi 48. Biaya mengikuti, dan rumus rakitan melihat total yang telah diulang (`N` juga menghitung setiap run 24 kali).

Di lembar, kotak putus-putus mengelilingi tanda-tanda grup dengan namanya dan hitungannya, seperti **Unit A ×24**.

## Ubah nanti

Grup tercantum di bawah **Grup tipikal** di panel kanan:

- Ubah angka setelah **×** untuk mengubah berapa kali ia dihitung (1 hingga 10.000). Setiap kuantitas diperbarui.
- Ganti namanya di kotak nama.
- Ikon kotak memilih tanda-tandanya (dan menampilkan lembarnya).
- Tong sampah menghapus grup. Tanda-tandanya tetap, dihitung sekali.

Untuk menambah tanda ke grup atau mengeluarkannya, pilih tandanya lalu pilih grupnya (atau {{ui:Bukan tipikal (×1)}}) di bawah {{ui:Tipikal}}.

## Yang perlu diketahui

- Tanda-tanda sebuah grup dapat berada di beberapa lembar, dan dari item apa pun. Setiap tanda berada paling banyak di satu grup.
- Salinan yang Anda tempel tidak berada di dalam grup: salinan tempel dari unit tipikal akan dihitung 24 kali lagi. Gunakan grup untuk "hal yang sama N kali", dan salin serta tempel untuk salinan yang Anda gambar.
- Tanda-tandanya digambar sekali, jadi tampilan 3D dan PDF bertanda hanya menunjukkan satu unit; kuantitas, ekspor, dan tabel per lembar menghitungnya ×N. Lembar **Marks** pada ekspor Excel menyebutkan tanda mana yang tipikal dan berapa kali ia dihitung.
- Dengan area penawaran, tanda-tanda grup dihitung ×N di area penawarannya sendiri.
