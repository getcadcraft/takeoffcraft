---
title: Yang dipelajari dari takeoff Anda
summary: TakeoffCraft menyimpan simbol yang Anda konfirmasi dengan Hitung otomatis, set kondisi Anda, rakitan yang paling sering Anda pakai, dan pola yang Anda ulangi di setiap halaman, semuanya di dalam file takeoff itu sendiri. Lihat, gunakan, hapus.
keywords: belajar, dipelajari, pembelajaran, asisten, ingat, simbol, templat, sama seperti pekerjaan terakhir, pekerjaan terakhir, set kondisi, kondisi, pakai ulang, rakitan, paling sering dipakai, saran, ulangi di setiap halaman, setiap halaman, kepala gambar, pola, hapus semua, lupakan, privasi
from: 54d99e99
---

TakeoffCraft menjadi lebih cepat seiring makin banyak takeoff yang Anda kerjakan dengannya. Ia hanya belajar dari apa yang **Anda terima**:

- simbol yang Anda kotak dengan [Hitung otomatis](topic:auto-count) lalu tambahkan,
- set kondisi yang Anda simpan,
- rakitan yang Anda pakai (sekali per pekerjaan),
- pola tanda yang Anda ulangi di setiap halaman.

Ini adalah pencocokan sederhana pada lembar Anda sendiri, pencarian yang sama dengan yang dijalankan Hitung otomatis. Ini bukan model terlatih. Semua yang dipelajarinya disimpan **di dalam file takeoff ini** (`.takeoff.json`), dan tidak ada yang dikirim ke mana pun. Untuk membawanya ke pekerjaan berikutnya, gunakan [Sama seperti pekerjaan terakhir](topic:what-it-learned#same-as-last-job).

Pilih {{ui:Dipelajari}} di bilah alat (ikon lampu, di sebelah {{ui:Hitung otomatis}}) untuk melihat semuanya.

## Simbol

Saat Anda mengotak simbol dengan {{ui:Hitung otomatis}} dan memilih {{ui:Tambah}}, simbol yang Anda kotak disimpan, dengan tingkat kecocokan yang Anda terima.

- Di {{ui:Dipelajari}}, pilih {{ui:Cari di lembar ini}} atau {{ui:Cari di semua lembar}}. Tinjauan Hitung otomatis yang biasa akan terbuka: klik kotak untuk mengecualikannya, geser penggeser, lalu tambahkan. Tidak ada yang ditambahkan sampai Anda melakukannya.
- Saat Anda membuka lembar yang belum memiliki simbol yang dipelajari, sebuah bilah di atas menawarkan {{ui:Cari …}} untuknya. {{ui:Nanti saja}} menyembunyikannya untuk lembar itu.
- Jika takeoff tidak punya item dengan nama itu, menambahkan tanda juga menambahkan item (satu langkah urungkan).
- Menambahkan lagi simbol dari item yang sama dihitung untuk simbol yang sudah dikenal; simbol yang tampak berbeda disimpan sebagai simbol kedua.
- Seperti Hitung otomatis, ia menemukan simbol pada sudut siku-siku dan pada lembar dengan skala lain.

## Set kondisi

Set menyimpan kondisi takeoff (item beserta satuan, harga, susut, dan rakitannya), tanpa tanda.

1. Di {{ui:Dipelajari}}, pilih {{ui:Simpan kondisi takeoff ini sebagai set…}} lalu beri nama. Set dengan nama yang sama akan diganti.
2. Di takeoff yang memiliki set itu, {{ui:Tambah}} memasukkan kondisi yang belum dimilikinya. Kondisi dengan nama dan tipe yang sama dibiarkan. Ini satu langkah urungkan.

## Sama seperti pekerjaan terakhir

File pekerjaan terakhir Anda menyimpan apa yang dipelajarinya. Untuk memulai pekerjaan baru darinya:

1. Buka denah baru, lalu pilih {{ui:Dipelajari}} › {{ui:Sama seperti pekerjaan terakhir…}}.
2. Pilih `.takeoff.json` dari pekerjaan terakhir.
3. Centang apa yang akan dibawa masuk: kondisinya (hanya yang belum dimiliki takeoff ini), dan apa yang dipelajarinya (simbol, set, rakitan, pola). Lalu pilih {{ui:Bawa masuk}}.

Kondisinya juga disimpan sebagai set dengan nama pekerjaan itu. Tanda dan kuantitasnya tetap berada di file miliknya sendiri. Seluruhnya adalah satu langkah urungkan.

## Rakitan yang paling sering dipakai

Item yang punya rakitan dihitung sebagai terpakai sekali per pekerjaan saat item itu memiliki kuantitas dan Anda menyimpan takeoff. Pekerjaan adalah kumpulan file denah tempat takeoff dibuat, sehingga menyimpan takeoff yang sama lagi tidak dihitung dua kali. Daftar di bawah {{ui:Rakitan yang paling sering dipakai}} menempatkan yang paling sering Anda pakai di urutan pertama. Daftar ini tidak memuat rakitan yang sudah dimiliki takeoff ini. {{ui:Tambah}} memasukkan satu rakitan sebagaimana terakhir Anda pakai, beserta semua bagiannya.

## Ulangi di setiap halaman

Untuk tanda yang sama di setiap halaman satu set, seperti hitungan kepala gambar atau detail yang khas:

1. Pilih tanda pada satu lembar ([Pilih tanda](topic:copy-paste#select-the-marks)).
2. Di {{ui:Dipelajari}}, pilih {{ui:Ulangi tanda yang dipilih di setiap halaman…}}, beri nama polanya, lalu konfirmasi.

Tanda akan masuk ke setiap halaman terbuka lainnya **dengan ukuran yang sama**, di tempat yang sama, dalam satu langkah urungkan. Panjang dan luas hanya masuk ke halaman dengan skala yang sama; hitungan masuk ke halaman mana pun dengan ukuran itu. Halaman yang sudah memilikinya dilewati. Pola disimpan, sehingga halaman yang Anda buka nanti akan mendapat tawaran di bilah, atau Anda bisa memakai {{ui:Ulangi di setiap halaman}} di daftar.

## Lihat, hapus

Semua yang dipelajari tercantum di {{ui:Dipelajari}}. Ikon tempat sampah menghapus satu hal. {{ui:Hapus semua}} menghapus semua yang dipelajari dan membiarkan item dan tanda Anda. Keduanya dapat diurungkan sampai Anda menutup takeoff, dan keduanya disimpan bersama takeoff.

Untuk berhenti belajar di satu takeoff, hapus centang {{ui:Belajar dari takeoff ini}}. Tidak ada yang baru dipelajari, dan yang sudah tercantum tetap ada sampai Anda menghapusnya.

## Perlu diketahui

- TakeoffCraft versi lebih lama membuka file dengan hal-hal yang dipelajari secara normal. Mereka mengabaikan bagian itu, dan membuangnya jika file disimpan lagi.
- Simbol yang dipelajari adalah gambar kecil dari apa yang Anda kotak, disimpan di dalam file (beberapa kilobita masing-masing).
- Simbol yang dipelajari dicari seperti pencarian Hitung otomatis, sehingga batasannya sama: [Hitung otomatis sebuah simbol](topic:auto-count).
