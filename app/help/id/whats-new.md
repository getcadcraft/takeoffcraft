---
title: Yang baru di 0.8 dan 0.8.1
summary: Hitung seluruh legenda simbol di setiap lembar yang terbuka dalam satu proses, beri harga item dari tarif pekerjaan sebelumnya Anda, dan periksa takeoff terhadap stok serta waktu tunggu pemasok, ditambah alat asisten baru untuk ketiganya, serta perubahan bersama 0.8 dan perbaikan 0.8.1 untuk file DWG.
keywords: yang baru, apa yang baru, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, hitung semuanya, legenda, legenda simbol, seluruh set, memori harga, pekerjaan sebelumnya, pekerjaan terakhir, harga umum, pemasok, stok, waktu tunggu, backorder, daftar pesanan, kekurangan, panel masalah, asisten, bahasa, perangkat input, baris bilah alat, dwg
from: a04adef6
---

Ini yang berubah di TakeoffCraft 0.8 (dirilis 2026-11-01) dan 0.8.1 (2026-11-02), dibandingkan dengan 0.7. Legenda simbol kini dapat dihitung di seluruh set sekaligus, takeoff baru dapat dimulai dari harga pekerjaan sebelumnya Anda, dan takeoff dapat diperiksa terhadap stok pemasok. 0.8.1 adalah rilis perbaikan.

## Baru

### Hitung semuanya dalam set

- **Kotak legenda sekali saja.** {{ui:Hitung semuanya}} di bilah alat membaca legenda simbol: seret kotak di sekitar simbol dan nama yang tercetak di sebelahnya. Setiap simbol dicantumkan beserta gambar dan namanya, dan nama tersebut menjadi nama item. Hapus centang pada yang tidak Anda inginkan, lalu pilih {{ui:Hitung pada N lembar}}. Sebuah bilah menunjukkan lembar yang sedang dicari, {{ui:Batal}} menghentikan proses, dan halaman tetap dapat digunakan.
- **Setiap lembar dalam satu proses.** Setiap simbol dihitung pada setiap lembar yang terbuka. Lembar yang digambar pada skala lain dicari pada skala tersebut, dan simbol ditemukan meskipun diputar pada sudut siku-siku mana pun. Simbol dari legenda itu sendiri tidak dihitung pada lembarnya.
- **Tinjau sebelum ada yang ditambahkan.** Setiap total memiliki tautan per lembar ("E-103: 4") yang menuju ke lembar tersebut. Klik kotak pada temuan untuk mengeluarkannya, dan klik lagi untuk memasukkannya kembali. Tingkat kecocokan (50% sampai 100%) hanya menyaring apa yang ditemukan; tidak ada pencarian ulang.
- **Satu langkah urungkan.** {{ui:Tambahkan N tanda}} membuat satu item hitung untuk setiap simbol, dengan tanda pada setiap temuan. Nama yang sudah menjadi item hitung milik Anda akan digunakan kembali. {{key:Ctrl+Z}} mengembalikan semua item dan tanda. Apa pun yang Anda terima juga masuk ke {{ui:Dipelajari}}.
- **Simbol pada sudut apa pun.** Centang {{ui:Simbol pada sudut apa pun}} sebelum menghitung untuk juga menemukan simbol yang diputar pada sudut yang bukan sudut siku-siku. Pencarian kemudian memutar setiap simbol setiap 15 derajat, dan simbol yang tidak bulat dapat memakan waktu hingga enam kali lebih lama.
- **Apa itu.** Pencocokan simbol sederhana pada lembar Anda sendiri, tanpa model terlatih, dan tidak ada yang meninggalkan komputer Anda. Pada set rekaan 200 lembar, prosesnya memakan waktu 9.4 detik dari awal hingga akhir di Chrome pada desktop yang cepat; set gambar rencana sungguhan akan lebih lambat. Lihat [Hitung semua dalam set](topic:count-everything).

### Memori harga dari pekerjaan Anda sendiri

- **TakeoffCraft mengingat tarif Anda.** Saat Anda menyimpan takeoff, setiap item berharga yang digunakan diingat berdasarkan nama dan jenisnya: tarif material, tarif upah, susut, dan satuan. 12 pekerjaan terakhir disimpan untuk setiap nama. Memori ini disimpan di komputer ini bersama Pustaka harga, tidak pernah di dalam file takeoff, dan tidak dikirim ke mana pun.
- **Mulai takeoff baru darinya.** {{ui:Harga}} di bilah alat menampilkan, untuk setiap item, tarif pekerjaan terakhir, tarif umum, dan rentangnya. {{ui:Pakai yang terakhir}} atau {{ui:Pakai yang umum}} memberi harga satu item, dan {{ui:Beri harga N item yang belum berharga dari memori}} mengisi setiap item yang belum memiliki harga. Setiap penggunaan adalah satu langkah urungkan.
- **Pekerjaan lama.** {{ui:Pelajari dari takeoff sebelumnya…}} mengingat item berharga dari takeoff tersimpan (.json).
- **Lihat, ubah, lupakan.** {{ui:Semua yang diingat}} mencantumkan setiap nama; tombol sampah melupakan satu nama, dan {{ui:Hapus semua harga}} melupakan semuanya. Matikan {{ui:Ingat harga saya saat saya menyimpan takeoff}} untuk berhenti. Harga per buah tidak pernah diterapkan pada item per foot. Lihat [Memori harga dari pekerjaan sebelumnya](topic:price-memory).

### Stok pemasok dan waktu tunggu

- **Periksa terhadap daftar pemasok.** {{ui:Pasokan}} di bilah alat mengambil daftar stok pemasok ({{ui:Tambah file pemasok…}}), berupa CSV atau spreadsheet, lalu memeriksa apa yang dibutuhkan takeoff, termasuk susut, terhadapnya. Hingga lima file disimpan. Tidak ada yang dikirim dan tidak ada yang menanyakan pemasok: Anda yang membawa filenya.
- **Apa yang ditampilkan.** Item yang kurang tampil lebih dulu: "Kurang 120 EA", "Waktu tunggu 21 hari", "Dalam backorder", "Satuan berbeda", "Tidak ada angka stok", atau "Tersedia". {{ui:Tunggu terlama yang diinginkan (hari)}} dimulai dari 14.
- **Daftar pesanan.** {{ui:Daftar pesanan (CSV)}} mengunduh item yang kurang beserta jumlah kekurangannya, pemasok, dan waktu tunggunya.
- **Harga ke Pustaka.** Jika file memiliki harga, {{ui:Harga ke Pustaka}} menetapkan harga material setiap entri Pustaka dengan nama dan satuan yang sama. Hitung ulang harga dari Pustaka untuk membawanya ke takeoff.
- **Di panel masalah.** Kekurangan adalah peringatan dan waktu tunggu yang lama adalah catatan, di bawah "Stok pemasok". Anda dapat menerima salah satunya dengan alasan, dan alasan itu disimpan di takeoff. Lihat [Periksa stok pemasok dan waktu tunggu](topic:supplier-stock).

### Asisten AI

- **Alat untuk ketiganya.** Dengan asisten yang diizinkan di {{ui:Pengaturan}}, asisten dapat membaca legenda (`legend_open`), menjalankan hitungan (`legend_count_start`, lalu `legend_count_status` dan `legend_count_result`), dan menambahkannya (`legend_count_add`, yang dapat pratinjau terlebih dahulu). Asisten dapat membaca harga yang diingat (`prices_list`) dan memberi harga item darinya (`prices_apply`, yang dapat pratinjau terlebih dahulu), serta membaca pemeriksaan pemasok (`supply_check`). Menambahkan file pemasok tetap menjadi tugas Anda. Lihat [Gunakan TakeoffCraft dengan asisten AI](topic:use-with-ai-assistants).

### Di setiap aplikasi

- **Bahasa.** Lima puluh empat bahasa seluruhnya; sepuluh di antaranya baru (Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipina, Swahili, dan Uzbek). Bahasa selain Inggris adalah draf mesin sampai penutur asli telah membacanya.
- **Perangkat input.** {{ui:Pengaturan}} › {{ui:Global}} › {{ui:Perangkat input}} menentukan apa yang dilakukan trackpad, tombol samping mouse, pena, mouse 3D, pengontrol game, atau pengontrol MIDI, untuk setiap aplikasi atau untuk satu aplikasi. Lihat [Gunakan trackpad, mouse 3D, atau pengontrol](common:input-devices).
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} menawarkan {{ui:Lipat}} (awal), {{ui:2 baris}} dan {{ui:1 baris}}; grup yang tidak muat akan digulir ke samping. Lihat [Atur panel](common:arrange-panels).
- **Panel masalah.** Panel bersama untuk peringatan dan catatan kini memuat pemeriksaan stok pemasok di atas, berdampingan dengan pemeriksaan lainnya.
- **Add-on.** Add-on mengikuti daftar akun Anda. Lihat [Add-on dan daftar akun Anda](common:addons-basics).
- **Hubungkan AI Anda.** CadCraft Studio adalah hub: hubungkan asisten Anda sekali untuk kedelapan aplikasi. Studio tidak memiliki AI sendiri.

## Diperbaiki di 0.8.1

- **Bagian kelas DWG.** Bagian kelas file DWG dibaca sebagai tipe yang salah. Ini sudah diperbaiki di TakeoffCraft, dan di empat aplikasi lainnya.
- **Studio dapat mengganti bahasa saat berjalan.** Sebelumnya, Studio dan edisi kemasannya hanya berbahasa Inggris. Ini belum diuji pada build desktop di setiap platform; beri tahu kami jika bahasanya tidak berubah.

## Belum ada di versi ini

- **Belum ditandatangani kode.** Windows mungkin memberi peringatan, dan di Mac Anda klik kanan lalu pilih {{ui:Terbuka}} pada kali pertama. Build toko (Microsoft Store, Google Play, App Store) ditahan, dan build iPad dan iPhone tidak dibangun ulang untuk 0.8.1.
- **Pembaruan Studio.** Installer Windows dan paket Linux memeriksa sekali sehari dan bertanya terlebih dahulu. Zip portabel hanya memberi tahu, dan macOS serta APK tidak memperbarui diri sendiri. .dmg macOS 0.8 mengikuti rilis.
- **Hubungkan AI Anda.** Hubungkan dengan satu klik di dalam Studio, konektor AI yang di-host di peramban, kunci API Anda sendiri di dalam Studio, dan paket MCP yang diterbitkan tidak dijanjikan pada versi ini.
- **Hitung semuanya.** Memerlukan simbol yang digambar dengan cara yang sama seperti di legenda, dan simbol dengan dinding atau garis panjang yang melintasinya bisa terlewat. Simbol cermin tidak ditemukan, dan lembar tanpa skala yang digambar pada ukuran lain dicari pada ukuran legenda. Periksa temuan pada lembar pertama sebelum mempercayai sisanya.
- **Stok pemasok.** Angka stok hanya semutakhir file yang Anda tambahkan. Pemeriksaan tidak pernah menanyakan pemasok.
- **Bahasa.** Bilah aplikasi untuk bahasa Tamil meluap.

Yang lain ada di [Belum dibuat](topic:not-built-yet). Untuk rilis sebelumnya, lihat [Yang baru di 0.7](topic:whats-new-0-7).
