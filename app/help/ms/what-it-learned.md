---
title: Apa yang dipelajarinya daripada pengukuran kuantiti anda
summary: TakeoffCraft menyimpan simbol yang anda sahkan dengan Kiraan auto, set syarat anda, himpunan yang paling kerap anda gunakan dan corak yang anda ulang pada setiap halaman, semuanya dalam fail pengukuran kuantiti itu sendiri. Lihat, guna, padam.
keywords: pelajari, dipelajari, pembelajaran, pembantu, ingat, simbol, templat, sama seperti kerja terakhir, kerja terakhir, set syarat, syarat, guna semula, himpunan, paling kerap digunakan, cadangan, ulang pada setiap halaman, setiap halaman, blok tajuk, corak, kosongkan semua, lupakan, privasi
from: 54d99e99
---

TakeoffCraft menjadi lebih pantas semakin banyak pengukuran kuantiti yang anda buat dengannya. Ia belajar **hanya daripada perkara yang anda terima**:

- simbol yang anda kotakkan dengan [Kiraan auto](topic:auto-count) dan kemudian tambah,
- set syarat yang anda simpan,
- himpunan yang anda gunakan (sekali bagi setiap kerja),
- corak tanda yang anda ulang pada setiap halaman.

Ia ialah padanan mudah pada helaian anda sendiri, carian yang sama seperti yang dijalankan oleh Kiraan auto. Ia bukan model terlatih. Apa sahaja yang dipelajarinya disimpan **dalam fail pengukuran kuantiti ini** (`.takeoff.json`), dan tiada apa-apa dihantar ke mana-mana. Untuk membawanya ke kerja seterusnya, gunakan [Sama seperti kerja terakhir](topic:what-it-learned#same-as-last-job).

Pilih {{ui:Dipelajari}} pada bar alat (mentol lampu, bersebelahan {{ui:Kiraan auto}}) untuk melihat semuanya.

## Simbol

Apabila anda mengotakkan simbol dengan {{ui:Kiraan auto}} dan memilih {{ui:Tambah}}, simbol yang anda kotakkan disimpan, bersama tahap padanan yang anda terima.

- Dalam {{ui:Dipelajari}}, pilih {{ui:Cari pada helaian ini}} atau {{ui:Cari pada setiap helaian}}. Semakan Kiraan auto yang biasa dibuka: klik kotak untuk mengecualikannya, alihkan peluncur, kemudian tambahkannya. Tiada apa-apa ditambah sehingga anda berbuat demikian.
- Apabila anda membuka helaian yang belum mempunyai mana-mana simbol yang dipelajari, bar di bahagian atas menawarkan {{ui:Cari …}} untuknya. {{ui:Bukan sekarang}} menyembunyikannya bagi helaian itu.
- Jika pengukuran kuantiti tidak mempunyai item dengan nama itu, menambah tanda turut menambah item (satu langkah buat asal).
- Menambah semula simbol item yang sama dikira kepada yang sudah diketahui; simbol yang kelihatan berbeza disimpan sebagai yang kedua.
- Seperti Kiraan auto, ia mencari simbol pada sudut tegak dan pada helaian yang berskala lain.

## Set syarat

Set menyimpan syarat pengukuran kuantiti (item dengan unit, kadar, pembaziran dan himpunannya), tanpa tanda.

1. Dalam {{ui:Dipelajari}}, pilih {{ui:Simpan syarat pengukuran kuantiti ini sebagai set…}} dan beri nama. Set dengan nama yang sama digantikan.
2. Dalam pengukuran kuantiti yang mempunyai set itu, {{ui:Tambah}} memasukkan syarat yang belum dimilikinya. Syarat dengan nama dan jenis yang sama dibiarkan. Ia ialah satu langkah buat asal.

## Sama seperti kerja terakhir

Fail kerja terakhir anda menyimpan apa yang dipelajarinya. Untuk memulakan kerja baharu daripadanya:

1. Buka pelan baharu, kemudian pilih {{ui:Dipelajari}} › {{ui:Sama seperti kerja terakhir…}}.
2. Pilih `.takeoff.json` kerja terakhir.
3. Tandakan apa yang hendak dibawa masuk: syaratnya (hanya yang belum ada dalam pengukuran kuantiti ini), dan apa yang dipelajarinya (simbol, set, himpunan, corak). Kemudian pilih {{ui:Bawa masuk}}.

Syaratnya juga disimpan sebagai set dengan nama kerja itu. Tanda dan kuantitinya kekal dalam fail sendiri. Keseluruhan proses ialah satu langkah buat asal.

## Himpunan yang paling kerap digunakan

Item yang mempunyai himpunan dikira sebagai digunakan sekali bagi setiap kerja apabila ia mempunyai kuantiti dan anda menyimpan pengukuran kuantiti. Kerja ialah set fail pelan tempat ia diambil, jadi menyimpan pengukuran kuantiti yang sama semula tidak dikira dua kali. Senarai di bawah {{ui:Himpunan yang paling kerap digunakan}} meletakkan yang paling kerap anda gunakan di hadapan. Ia tidak menyenaraikan yang sudah ada dalam pengukuran kuantiti ini. {{ui:Tambah}} memasukkan satu seperti kali terakhir anda gunakannya, dengan semua bahagiannya.

## Ulang pada setiap halaman

Bagi tanda yang sama pada setiap halaman satu set, seperti kiraan blok tajuk atau perincian lazim:

1. Pilih tanda pada satu helaian ([Pilih tanda](topic:copy-paste#select-the-marks)).
2. Dalam {{ui:Dipelajari}}, pilih {{ui:Ulang tanda yang dipilih pada setiap halaman…}}, beri nama corak itu dan sahkan.

Tanda itu diletakkan pada setiap halaman terbuka lain **dengan saiz yang sama**, di tempat yang sama, dalam satu langkah buat asal. Panjang dan luas hanya diletakkan pada halaman dengan skala yang sama; kiraan diletakkan pada mana-mana halaman bersaiz itu. Halaman yang sudah mempunyai tanda tersebut dilangkau. Corak itu disimpan, jadi halaman yang anda buka kemudian akan mendapat tawaran dalam bar, atau anda boleh menggunakan {{ui:Ulang pada setiap halaman}} dalam senarai.

## Lihat, padam

Semua yang dipelajari disenaraikan dalam {{ui:Dipelajari}}. Tong sampah memadam satu perkara. {{ui:Kosongkan semua}} memadam semua yang dipelajari dan membiarkan item dan tanda anda. Kedua-dua tindakan boleh dibatalkan sehingga anda menutup pengukuran kuantiti, dan kedua-duanya disimpan bersama pengukuran kuantiti.

Untuk berhenti belajar dalam satu pengukuran kuantiti, nyahtandakan {{ui:Pelajari daripada pengukuran kuantiti ini}}. Tiada apa-apa baharu dipelajari, dan apa yang disenaraikan kekal sehingga anda memadamkannya.

## Perlu diketahui

- Versi TakeoffCraft yang lebih lama membuka fail dengan perkara yang dipelajari seperti biasa. Mereka mengabaikan bahagian itu, dan membuangnya jika mereka menyimpan fail itu semula.
- Simbol yang dipelajari ialah gambar kecil daripada apa yang anda kotakkan, disimpan dalam fail (beberapa kilobait setiap satu).
- Simbol yang dipelajari dicari seperti carian Kiraan auto, jadi had yang sama terpakai: [Kira auto satu simbol](topic:auto-count).
