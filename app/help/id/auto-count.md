---
title: Hitung otomatis satu simbol
summary: Beri kotak pada satu simbol, biarkan TakeoffCraft mencari yang lain pada lembar ini atau setiap lembar yang terbuka, tinjau kecocokannya dengan penggeser, lalu tambahkan sekaligus dalam satu langkah.
keywords: sudut apa pun, diputar, berputar, skala lain, skala berbeda, hitung otomatis, hitungan otomatis, pencarian simbol, temukan simbol, pola, templat, kecocokan, deteksi, alat hitung
from: fa68a6c1
---

{{ui:Hitung otomatis}} menemukan setiap salinan simbol setelah Anda membuat kotak pada satu salinan. Anda kemudian meninjau kecocokan pada lembar dan menambahkan yang Anda terima sebagai tanda hitung. Ini adalah alat bantu, bukan jaminan: selalu tinjau sebelum menambahkan.

## Temukan simbol

1. Buat atau klik item hitung di bawah {{ui:Item}}.
2. Buka lembar tempat simbol muncul.
3. Pilih {{ui:Hitung otomatis}} di bilah alat, atau tekan {{key:S}}.
   Sebuah bilah muncul di bagian atas lembar: "Seret kotak di sekeliling satu simbol pada lembar ini."
4. Untuk mencari di setiap lembar yang terbuka, bukan hanya lembar ini, centang {{ui:Cari di semua lembar yang terbuka}}.
5. Perbesar agar simbol mudah terlihat, lalu seret kotak rapat di sekeliling satu salinannya. Sertakan seluruh simbol; kertas kosong di sekelilingnya akan dipangkas.
   Bilah menampilkan "Mencari…" dengan bilah kemajuan dan tombol {{ui:Batal}}. Halaman tetap responsif: Anda dapat zoom, geser, dan berpindah antarlembar. Memilih alat lain, atau {{key:Esc}}, membatalkan pencarian.
6. Saat selesai, kecocokan muncul pada lembar sebagai kotak dengan warna item, dan bilah menampilkan ringkasan seperti "22 kecocokan, 19 akan ditambahkan (3 sudah dihitung). Klik kotak untuk menolak atau memulihkannya."

Dalam {{ui:Hitung otomatis}}, menyeret pada lembar membuat kotak, bukan menggeser. Untuk menggeser, tahan {{key:Space}} lalu seret, atau seret dengan tombol tengah.

## Tinjau kecocokan

- **Klik kotak** untuk menolaknya. Kotak yang ditolak tampil putus-putus dan dicoret. Klik lagi untuk memulihkannya.
- **Pindahkan penggeser {{ui:Kecocokan}}** (50% sampai 95%, mulai dari 75%). Nilai yang lebih tinggi hanya menampilkan kecocokan yang sangat mirip; nilai yang lebih rendah menampilkan yang lebih longgar. Penggeser hanya menyaring yang sudah ditemukan; penggeser tidak mencari ulang.
- **Sudah dihitung**: kecocokan di titik yang sudah memiliki tanda hitung dari item ini mulai dalam keadaan ditolak, sehingga Anda tidak menghitung apa pun dua kali.
- **Lembar lain**: saat Anda mencari di semua lembar yang terbuka, berpindah antarlembar dengan daftar lembar atau {{key:PageDown}} dan tinjau setiap lembar. Ringkasan menyebutkan berapa lembar yang memiliki kecocokan.

## Tambahkan

Pilih {{ui:Tambah}}. Tombol menyebutkan jumlahnya, misalnya "Tambah 19 tanda".
Tanda hitung ditambahkan di pusat setiap kotak yang diterima: "19 tanda hitung ditambahkan ke "Duplex receptacle". Ctrl+Z menghapus semuanya."

Seluruh kumpulan adalah satu langkah urungkan, jadi satu {{key:Mod+Z}} menghapusnya.

Untuk membuang tinjauan tanpa menambahkan apa pun, pilih {{ui:Buang}} atau tekan {{key:Esc}}. Memilih alat lain juga membuangnya.

## Apa yang ditemukan, dan apa yang terlewat

TakeoffCraft membandingkan gambar, sebagai piksel, dengan simbol yang Anda beri kotak.

- Ia menemukan simbol yang diputar 0°, 90°, 180°, dan 270°. Centang {{ui:Sudut apa pun (lebih lambat)}} pada bilah hitung otomatis sebelum Anda membuat kotak agar simbol juga ditemukan pada sudut apa pun: ia mencoba setiap 15°, lalu menyempurnakan setiap temuan hingga ketelitian satu setengah derajat. Ini memakan waktu sekitar enam kali lebih lama. Ia tidak menemukan simbol cermin (kecuali simbol itu terlihat sama jika dicerminkan).
- Dengan {{ui:Cari di semua lembar yang terbuka}} dicentang, lembar dengan skala lain dicari pada ukuran yang dimiliki simbol di lembar itu: perlengkapan yang digambar sesuai skala pada denah 1/8" berukuran setengah dari ukurannya pada denah 1/4", dan tetap ditemukan. Lembar seperti itu juga dicari pada ukuran kotak itu sendiri, untuk tag dan simbol yang dicetak pada satu ukuran di setiap lembar. Ini membutuhkan skala pada kedua lembar; lembar tanpa skala hanya dicari pada ukuran kotak.
- Simbol yang sangat mirip dapat saling cocok: stopkontak duplex dan quad, atau dua tag perlengkapan yang berbeda satu huruf. Naikkan penggeser sampai hanya yang benar yang tersisa, lalu tolak sisanya secara manual.
- Simbol yang dilintasi garis lain, hatch, atau teks mendapat skor lebih rendah dan mungkin memerlukan pengaturan penggeser yang lebih rendah.
- Kotak yang sangat kecil ditolak: "Kotak itu terlalu kecil. Gambar di sekeliling seluruh simbol." Kotak kosong juga ditolak: "Kotak itu hampir kosong. Gambar di sekeliling simbol."
- Lembar yang akan sangat besar pada ukuran yang dibutuhkan untuk simbol ini dilewati, dan ringkasan menyebutkan "1 lembar terlalu besar untuk dicari pada ukuran simbol ini." Buat kotak pada simbol yang lebih besar, atau hitung lembar itu secara manual.

Jika tidak ada yang ditemukan, bilah status menampilkan "Tidak ada kecocokan. Turunkan penggeser kecocokan, atau buat kotak di sekeliling simbol lebih rapat."

## Kecepatan dan peramban

Pencarian berjalan di pekerja latar belakang, sehingga halaman tetap responsif dan Anda dapat membatalkannya kapan saja. Setiap lembar pertama-tama digambar pada ukuran kerja di halaman itu sendiri, yang dapat membuat lembar yang sangat besar tertahan sebentar. Ini berjalan di Chrome, Edge, Firefox, dan Safari terbaru. Mencari banyak lembar memakan waktu lebih lama; bilah kemajuan bergerak lembar demi lembar. Saat luring, hitung otomatis berfungsi ketika bilah aplikasi menampilkan {{ui:Siap offline}}: {{ui:Simpan untuk offline}} juga menyimpan pekerja. Lihat [Bekerja secara offline](common:offline).
