---
title: Paket penawaran dan penyetaraan penawaran
summary: Pisahkan estimasi ke dalam paket menurut bidang keahlian, kirim lingkup setiap paket ke subkontraktor, bandingkan penawaran yang kembali pada lingkup yang sama, dan gunakan penawaran terpilih sebagai harga paket.
keywords: penyetaraan penawaran, penyetaraan, paket penawaran, subkontraktor, penawaran subkontraktor, lingkup, pengisi, bidang keahlian, divisi CSI, bandingkan penawaran, penawaran terendah, tabel penawaran, penawar, penghargaan, penawaran terpilih, gunakan penawaran, harga subkontrak
from: 856b3088
---

Kontraktor umum mengirim lingkup setiap bidang keahlian kepada subkontraktor dan membandingkan apa yang kembali. TakeoffCraft melakukan keduanya dari perhitungan volume: buka {{ui:Ekspor}} › {{ui:Paket penawaran dan penyetaraan…}}.

## Paket

Ada satu paket untuk setiap divisi CSI yang digunakan item Anda (dua digit pertama dari {{ui:Nomor CSI}} sebuah item, lihat [Buat item perhitungan volume](topic:create-items)). Item tanpa nomor membuat paketnya sendiri. Setiap paket menunjukkan item-itemnya, berapa lembar tempat tandanya berada, dan biaya kita sendiri (material dan upah sebelum markup, dari penawaran dasar).

Pilih {{ui:CSV lingkup}} untuk mengunduh apa yang dikirim ke subkontraktor: setiap item dengan nomor CSI, kuantitas, satuan, dan lembar tempat ia berada. Tidak ada harganya. Untuk pemasok material, lembar permintaan penawaran di buku kerja memiliki daftar bagian (lihat [Ekspor estimasi](topic:export-estimate)).

## Masukkan penawaran

1. Di baris kosong di bawah paket, ketik nama penawar dan jumlah penawarannya, lalu pilih {{ui:Tambahkan penawaran}}.
2. Jika suatu penawaran mengeluarkan sebagian lingkup, buka daftar {{ui:Tidak dicakup}}-nya dan centang item-item itu.
3. Untuk memperbaiki nama atau jumlah, ketik di atasnya di tabel; tombol × menghapus penawaran.

Setiap perubahan adalah satu langkah yang dapat dibatalkan dengan {{key:Mod+Z}}, dan penawaran disimpan bersama perhitungan volume.

## Cara penawaran disetarakan

Penawaran jarang mencakup lingkup yang sama. Penyetaraan mengisi setiap item yang tidak dicakup dengan **pengisi** pada biaya kita sendiri, sehingga setiap penawaran dibandingkan pada seluruh paket:

**Setara = penawaran + pengisi**

Penawaran setara terendah ditandai **Terendah**; jika seri, yang dimasukkan lebih dulu. **Terhadap biaya kita** adalah penawaran setara dikurangi biaya kita sendiri untuk paket; negatif berarti di bawahnya. Penawaran yang tampak terendah dapat kalah setelah lingkup yang hilang dihitung.

Buku kerja mendapat lembar **Penyetaraan penawaran** dengan setiap paket yang memiliki penawaran: estimasi kita, setiap penawaran, pengisinya, total setara, dan selisihnya, sebagai rumus langsung, serta apa yang dikecualikan setiap penawaran.

## Gunakan penawaran sebagai harga paket

Pilih {{ui:Pakai}} pada sebuah penawaran dan penawaran itu menjadi harga seluruh paket dalam estimasi Anda: harga paket itu sendiri (item-itemnya, kondisi kedua, dan bagian rakitan) keluar dari total pekerjaan, item-item tetap sebagai kuantitas dengan tarif Anda sendiri sebagai referensi, dan satu baris, **Penawaran terpilih**, memuat jumlah penawaran. Item yang dikecualikan penawaran tetap pada biaya Anda sendiri, yang sudah dihitung penyetaraan sebagai pengisi. Pilih penawaran lain, atau pilih penawaran yang sama lagi untuk membatalkannya; setiap langkah dapat dibatalkan dengan {{key:Mod+Z}}.

Di ringkasan penawaran, subkontrak adalah satu baris dalam biaya: overhead, laba, dan jaminan ditambahkan di atasnya seperti biaya lainnya; pajak penjualan (hanya pada material) dan beban upah (pada upah) tidak. Lembar Estimasi di buku kerja memuat penawaran terpilih sebagai barisnya sendiri, dan blok markup menambahkannya, dengan rumus langsung. Daftar material tidak mencantumkan material paket yang telah dianugerahkan, karena subkontraktor yang menyediakannya.

Paket di dalam area penawaran alternatif tidak dihargai ulang: alternatif dan subtotal area penawaran tetap menggunakan harga Anda sendiri.

## Penawaran yang kembali lewat email

Anda tidak harus mengetik penawaran. {{ui:Kirim untuk penawaran…}} di bawah paket mengirim setiap subkontraktor tautan ke halaman tempat mereka mengetik harga untuk setiap baris; {{ui:Ambil harga}} menarik apa yang mereka kirim ke tabel ini. Lihat [Kirim paket untuk penawaran](topic:bid-invitations).

:::note
Mengetik penawaran secara manual tetap berfungsi, dan penawaran yang diketik tangan dan yang berasal dari situs berdampingan. Penawaran yang kembali dari situs ditandai **web** (atau **web, terlambat** jika tiba setelah tenggat); harganya hanya berubah saat penawar mengirim versi baru, sehingga edit Anda sendiri tetap ada hingga saat itu.
:::
