---
title: Hitung semuanya dalam set
summary: Kotakkan legenda simbol sekali dan TakeoffCraft menghitung setiap simbol di dalamnya pada setiap lembar yang terbuka dalam satu kali jalan. Setiap hitungan adalah tautan ke lembarnya, dan Anda meninjau sebelum apa pun ditambahkan.
keywords: hitung semuanya, legenda, legenda simbol, seluruh set, setiap lembar, semua lembar, setiap pintu, setiap perlengkapan, perangkat, jadwal, simbol, hitung otomatis, hitung semua, set denah, 200 lembar, tingkat kecocokan, mirip
from: adc99744
---

{{ui:Count everything}} membaca legenda simbol lalu menghitung setiap simbol di dalamnya pada setiap lembar yang terbuka. Ini adalah {{ui:Auto count}} untuk seluruh legenda sekaligus. Ini adalah pencocokan simbol biasa pada lembar Anda sendiri, bukan model terlatih, dan tidak ada yang meninggalkan komputer Anda. Tinjau hitungan sebelum Anda menambahkannya: ini adalah alat bantu, bukan jaminan.

## Hitung legenda

1. Buka denah. Legenda di lembar mana pun sudah cukup: simbol dengan namanya di sebelahnya.
2. Pilih {{ui:Count everything}} di bilah alat.
3. Seret kotak di sekitar legenda, simbol, dan nama. Judul tanpa simbol di sebelahnya (SYMBOL LEGEND) dikecualikan dengan sendirinya.
   Panel mendaftar setiap simbol dengan gambarnya dan nama yang tercetak di sebelahnya. Nama itu menjadi nama item, jadi ubah namanya di sini jika Anda mau.
4. Hapus centang pada simbol yang tidak ingin dihitung. Simbol yang tidak bisa dicari (terlalu kecil, atau kosong) akan menjelaskan alasannya.
5. Pilih {{ui:Count on N sheets}}. Sebuah bilah menampilkan lembar yang sedang dicari; {{ui:Cancel}} menghentikan prosesnya. Halaman tetap dapat digunakan.

Simbol legenda itu sendiri tidak dihitung pada lembarnya. Lembar yang digambar pada skala lain dicari pada skala itu, dan simbol ditemukan meski diputar pada sudut siku-siku mana pun.

## Tinjau hitungan

- Setiap simbol menampilkan totalnya dan, di bawahnya, sebuah tautan per lembar yang memilikinya ("E-103: 4"). Klik salah satu untuk pergi ke lembar itu. Temuan dikotakkan dengan warna item.
- **Klik sebuah kotak** untuk mengeluarkan temuan tersebut. Kotak itu menjadi putus-putus dan dicoret; klik lagi untuk memunculkannya kembali.
- **Pindahkan tingkat kecocokan** (50% sampai 100%, dimulai dari tingkat di Pengaturan Anda). Tingkat yang lebih tinggi hanya menyimpan kecocokan yang dekat. Penggeser hanya menyaring apa yang sudah ditemukan; tidak ada pencarian ulang.
- Dua simbol yang terlihat mirip (stop kontak dupleks dan kuad) bisa cocok di titik yang sama. Kecocokan yang lebih baik mengambilnya dan panel menyebutkan berapa titik yang terjadi seperti itu, sehingga Anda bisa memeriksanya.
- Lembar yang terlalu besar untuk dicari pada ukuran simbol dilewati, dan panel menyatakannya.

## Tambahkan

Pilih {{ui:Add N marks}}. Setiap simbol menjadi item hitung dengan tanda di setiap temuan. Nama yang sudah menjadi item hitung milik Anda dipakai ulang (tidak ada yang digandakan di tempat Anda sudah menandai dengan tangan). Seluruh proses adalah satu langkah: {{key:Ctrl+Z}} menarik kembali setiap item dan tanda.

Apa yang Anda terima juga masuk ke {{ui:Learned}}: simbol diingat di file takeoff untuk lain kali.

## Dengan asisten Anda

Jika Anda mengizinkan asisten di Pengaturan, mereka dapat membaca legenda (legend_open), menjalankan hitungan di latar belakang (legend_count_start, lalu legend_count_status), membaca hasil hitungan (legend_count_result) dan menambahkannya (legend_count_add, yang dapat terlebih dahulu menampilkan pratinjau apa yang akan ditambahkan). Ini adalah proses yang sama dengan yang Anda lihat di panel.

## Simbol pada sudut apa pun

Centang {{ui:Symbols at any angle}} sebelum menghitung untuk juga menemukan simbol yang digambar pada sudut yang bukan siku-siku (colokan dinding diagonal, perlengkapan yang diputar mengikuti atap). Pencarian kemudian memutar setiap simbol setiap 15 derajat; simbol bulat masih membutuhkan satu pencarian, dan simbol yang tidak bulat bisa memakan waktu hingga enam kali lebih lama. Biarkan tidak dicentang untuk denah yang digambar tegak lurus.

## Perlu diketahui

- Ia memerlukan simbol yang digambar dengan cara yang sama seperti di legenda. Legenda yang digambar pada ukuran berbeda dari lembar tidak masalah jika skala lembarnya sudah diatur; tanpa skala, simbol dicari pada ukuran legenda.
- Simbol dengan dinding atau garis panjang yang digambar tembus melaluinya bisa terlewat, karena tidak lagi menyerupai gambar legenda. Periksa temuan pada lembar pertama sebelum mempercayai sisanya.
- Pindaian tanpa teks tetap berfungsi: simbol ditemukan berdasarkan barisnya, dan Anda mengetik namanya.
