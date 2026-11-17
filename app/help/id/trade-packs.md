---
title: Paket keahlian
summary: Tambahkan rakitan gratis untuk sebuah keahlian ke pustaka harga Anda, hapus dalam satu langkah, dan bagikan pustaka Anda sendiri sebagai paket.
keywords: paket keahlian, paket, rakitan, templat, item awal, listrik, drywall, framing, pengecatan, beton, lantai, pasangan bata, atap, siding, pertukangan, plumbing, hvac, insulasi, lanskap, decking, kontraktor umum, csi, masterformat, cc0, tambah, hapus, bagikan
from: d3c036be
---

**Paket keahlian** adalah sekumpulan item siap pakai untuk satu keahlian: masing-masing dengan satuannya, tinggi atau kedalamannya, susutnya, dan **rakitan**-nya, yaitu bagian dan rumus yang mengubah lintasan, luas, atau hitungan yang diukur menjadi material. Sekat drywall, misalnya, membawa track, stud, lembaran, sekrup, lakban, dan kompon sambungannya.

Paket ditambahkan ke [pustaka harga](topic:price-library) Anda, dan dari sana Anda menambahkan item-itemnya ke takeoff mana pun.

## Tambahkan paket

1. Buka {{ui:Pustaka}} di bagian atas panel {{ui:Item}}, lalu {{ui:Paket keahlian…}}.
2. Pilih {{ui:Satuan}}: imperial (LF, SF), metrik (m, m²), atau keduanya. Setiap rakitan tersedia dalam kedua sistem.
3. Pilih {{ui:Tambah}} di samping paket.

Item paket muncul di pustaka, diberi tag dengan nama paket. Untuk menggunakannya, centang item di pustaka dan pilih {{ui:Tambahkan ke takeoff}}.

:::note
**Paket tidak membawa harga.** Itemnya menampilkan "atur harga satuan Anda" di pustaka. Harga satuan adalah milik Anda: ketik di pustaka atau di penyunting item, atau impor daftar harga Anda sebagai CSV dan gunakan {{ui:Perbarui harga}}.
:::

Jika Anda sudah memiliki item dengan nama dan tipe yang sama di pustaka, paket membiarkan milik Anda apa adanya. Menambahkan paket lagi menggantikan item-itemnya sendiri dengan versi baru.

## Hapus paket

Di {{ui:Paket keahlian…}}, pilih {{ui:Buang}} di samping paket yang Anda tambahkan, lalu sekali lagi untuk mengonfirmasi. Setiap item yang berasal darinya keluar dari pustaka dalam satu langkah. Item yang sudah Anda tambahkan ke takeoff tetap berada di takeoff itu.

## Isi paket

Pilih {{ui:Sumber dan rincian}} di bawah paket untuk melihat dari apa setiap rakitan ditulis: kode bangunan, standar, dan panduan pemasangan dari asosiasi perdagangan. Di pustaka, arahkan penunjuk ke sebuah item untuk membaca sumber dan asumsinya, seperti jarak stud atau laju sebaran cat. Periksa terhadap pekerjaan Anda dan lembar data produk Anda, dan ubah rumus jika berbeda (lihat [Rakitan dan rumus](topic:assemblies)).

Setiap paket ditandai **Starter: belum ditinjau oleh estimator** sampai estimator yang bekerja meninjaunya.

Setiap item juga membawa nomor CSI MasterFormat-nya, seperti `09 21 16`.

## Bagikan pustaka Anda sebagai paket

{{ui:Ekspor sebagai paket…}} di pustaka menyimpannya sebagai file paket (`.ccpack.json`) yang dapat ditambahkan siapa pun dengan {{ui:Buka file paket…}}. Secara bawaan, item yang berasal dari paket yang Anda tambahkan tidak disertakan, dan tidak ada harga yang dibawa. Centang {{ui:Sertakan harga saya sebagai harga contoh}} untuk mengirim harga Anda juga: harga itu diberi label dengan wilayah dan tanggal yang Anda masukkan, dan siapa pun yang menambahkan paket memilih apakah akan menggunakannya.

File paket adalah data biasa, bukan program. TakeoffCraft memeriksa setiap bagiannya sebelum digunakan dan membuang apa pun yang tidak dapat dibacanya.
