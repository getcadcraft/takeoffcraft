---
title: Yang baru di 0.9
summary: Baca panjang dalam meter, sentimeter, atau milimeter, luas metrik dalam m2 dengan luas dinding, preset skala 1:75 dan 1:150, satuan berat dan suhu, Busur dengan sepuluh metode, serta kursor langsung, Ikuti, dan daftar orang.
keywords: yang baru, catatan rilis, changelog, 0.9, tampilkan panjang sebagai, meter, sentimeter, milimeter, metrik, ikuti global, satuan, satuan tampilan, m2, meter persegi, luas dinding, preset skala, 1:75, 1:150, berat, kilogram, kg, ton, lb, suhu, celsius, fahrenheit, busur, metode busur, busur 3 titik, radius, live, kursor, ikuti, daftar orang, kelas, tooltip, layout, yang baru, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, hitung semuanya, legenda, legenda simbol, seluruh set, memori harga, pekerjaan sebelumnya, pekerjaan terakhir, harga typical, pemasok, stok, waktu tunggu, backorder, daftar pesanan, kekurangan, panel masalah, asisten, bahasa, perangkat input, baris bilah alat, dwg
from: 6182b998
---

Ini yang berubah di TakeoffCraft 0.9, dibandingkan dengan 0.8.1. Ini rilis kecil untuk aplikasi ini: panjang kini bisa dibaca dalam meter, sentimeter, atau milimeter, luas dan skala mengikuti pekerjaan metrik dengan benar, dan Busur memiliki sepuluh cara untuk menggambar. Sesi Live juga menampilkan siapa berada di mana.

## Baru

### Baca panjang dalam meter, sentimeter, atau milimeter

- **Tampilkan panjang sebagai.** {{ui:Pengaturan}} › {{ui:TakeoffCraft}} memiliki {{ui:Tampilkan panjang sebagai}} dengan {{ui:Ikuti Global}}, {{ui:Kaki-inci}}, m, cm, dan mm. {{ui:Ikuti Global}} memakai satuan panjang metrik yang Anda beri bintang di {{ui:Pengaturan}} › {{ui:Global}} › {{ui:Satuan}}, dan kaki-inci jika tidak ada yang diberi bintang. Ini mengubah cara panjang terbaca di lembar, di bilah status, dan di panel, termasuk tinggi, kedalaman, ketebalan, dan level. Angka tanpa satuan yang diketik pada kolom tinggi dibaca dalam satuan yang ditampilkan.
- **Hanya tampilan.** Kuantitas, biaya, dan ekspor dihitung dari panjang yang persis. Pilihan 1/16, 1/8, dan 1/4 inci hanya muncul untuk kaki-inci. Lihat [Tampilkan panjang dalam meter](topic:show-lengths-in-meters).
- **Satuan berat.** Item {{ui:Kuantitas diketik (tanpa gambar)}} kini dapat berupa lb, TON, kg, atau t, dan dihargai per satuan.
- **Suhu.** Setiap item memiliki kolom {{ui:Suhu}} opsional di editor item, diketik dalam derajat C atau F. {{ui:Tampilkan suhu sebagai}} di {{ui:Pengaturan}} › {{ui:TakeoffCraft}} menawarkan {{ui:Ikuti Global}}, °C, atau °F.

### Luas dan skala untuk pekerjaan metrik

- **Luas dalam m2 pada gambar.** Luas yang diukur dengan item metrik kini menyebut m2 pada label gambar dan panel tanda, serta di tabel, alih-alih SF. Aturannya: m2 jika item dihargai secara metrik atau panjang ditampilkan dalam m, cm, atau mm, dan SF di luar itu.
- **Luas dinding.** Item linear dengan tinggi juga menampilkan luas dindingnya (panjang kali tinggi) di daftar Item dan sebagai baris catatan di bawah tabel kuantitas per item.
- **Preset skala 1:75 dan 1:150.** Keduanya ada di daftar {{ui:Preset}} pada grup {{ui:Skala}}, yang kini memiliki 32 skala. Lihat [Preset skala](topic:scale-presets).

### Busur dengan sepuluh metode

- Saat {{ui:Busur}} aktif (tombol alat atau {{key:R}}), kotak {{ui:Metode busur}} muncul di bilah lembar: 3 titik, Awal, Pusat, Akhir; Awal, Pusat, Sudut; Awal, Pusat, Panjang; Awal, Akhir, Sudut; Awal, Akhir, Arah; Awal, Akhir, Radius; Pusat, Awal, Akhir; Pusat, Awal, Sudut; dan Pusat, Awal, Panjang. Sudut, panjang, radius, dan arah dapat diklik atau diketik. Ini berfungsi pada rentangan linear, luas, dan potongan. File yang disimpan sebelum 0.9 terbuka dengan cara yang sama. Lihat [Gambar busur dengan sepuluh metode](topic:draw-arcs-ten-methods).

### Bekerja bersama

- **Saling melihat kursor.** Dalam sesi Live, penunjuk setiap orang tampil di lembar dengan nama dan warnanya, dengan kotak putus-putus di sekitar tanda yang mereka pilih. Orang yang berada di lembar lain tercantum dengan nama lembar tersebut. Lihat [Bekerja live bersama orang lain](topic:work-live).
- **Ikuti seseorang, dan daftar orang.** Tombol {{ui:Orang}} dalam sesi Live mencantumkan setiap orang beserta alat yang mereka gunakan, lembar tempat mereka berada, dan kapan terakhir mereka menyunting. {{ui:Ikuti}} menggerakkan tampilan Anda mengikuti tampilan mereka, dan host dapat memakai {{ui:Minta semua orang mengikuti saya}}. Lihat [Ikuti rekan dalam sesi Live](topic:follow-a-teammate).

## Di setiap aplikasi

- **Tooltip dan tips awal.** Teks saat kursor diarahkan adalah tooltip Bootstrap, dan tips awal dapat ditutup.
- **Deretan tab yang bisa digulir.** Deretan tab panel yang tidak muat kini digulir alih-alih terpotong.
- **Judul tab.** Tab peramban menampilkan `<document> - TakeoffCraft | CadCraft`.
- **Tata letak.** Daftar tata letak di {{ui:Pengaturan}} kini berupa menu tarik-turun yang menampilkan tata letak yang dipilih.
- **Bahasa.** Bahasa yang Anda pilih kini berlaku juga untuk kata-kata yang dicetak halaman itu sendiri, seperti New, Open, dan Save. Bahasa selain Inggris adalah draf mesin sampai penutur asli telah meninjaunya.

## Batasan jujur

- Tampilan panjang, satuan berat dan suhu, serta preset baru diperiksa oleh pengujian dan di halaman. Setiap panel dalam setiap satuan belum diperiksa secara manual.
- Daftar orang belum diuji secara manual bersama kelas guru dan siswa yang sesungguhnya.
- Bahasa selain Inggris adalah draf mesin.
- Installer Windows belum ditandatangani kode (Info selengkapnya, lalu Tetap jalankan). Image disk macOS belum dinotarisasi (klik kanan, lalu Buka).

## Sebelumnya: 0.8 dan 0.8.1

Ini yang berubah di TakeoffCraft 0.8 (dirilis 2026-11-01) dan 0.8.1 (2026-11-02), dibandingkan dengan 0.7. Legenda simbol kini dapat dihitung di seluruh set sekaligus, takeoff baru dapat dimulai dari harga pekerjaan lama Anda, dan takeoff dapat diperiksa terhadap stok pemasok. 0.8.1 adalah rilis perbaikan.

### Baru

**Hitung semuanya dalam set**

- **Kotak legenda sekali saja.** {{ui:Hitung semuanya}} di bilah alat membaca legenda simbol: seret kotak di sekitar simbol dan nama yang tercetak di sebelahnya. Setiap simbol tercantum dengan gambarnya dan namanya, dan nama itu menjadi nama item. Hapus centang yang tidak Anda inginkan, lalu pilih {{ui:Hitung di N lembar}}. Sebuah bilah menampilkan lembar yang sedang dicari, {{ui:Batal}} menghentikan proses, dan halaman tetap dapat digunakan.
- **Setiap lembar dalam satu proses.** Setiap simbol dihitung di setiap lembar yang terbuka. Lembar yang digambar dengan skala lain dicari pada skala itu, dan simbol ditemukan meski diputar pada sudut siku-siku mana pun. Simbol legenda itu sendiri tidak dihitung di lembarnya.
- **Tinjau sebelum apa pun ditambahkan.** Setiap total memiliki tautan per lembar ("E-103: 4") yang menuju ke lembar itu. Klik kotak pada temuan untuk mengecualikannya, dan klik lagi untuk mengembalikannya. Tingkat kecocokan (50% sampai 100%) hanya menyaring apa yang ditemukan; tidak ada pencarian ulang.
- **Satu langkah urungkan.** {{ui:Tambah N tanda}} membuat satu item hitungan per simbol dengan tanda di setiap temuan. Nama yang sudah menjadi item hitungan milik Anda akan dipakai ulang. {{key:Ctrl+Z}} mengambil kembali semua item dan tanda. Apa yang Anda terima juga masuk ke {{ui:Dipelajari}}.
- **Simbol pada sudut apa pun.** Centang {{ui:Simbol pada sudut apa pun}} sebelum menghitung untuk juga menemukan simbol yang diputar pada sudut selain siku-siku. Pencarian kemudian memutar setiap simbol setiap 15 derajat, dan simbol yang tidak berbentuk bulat dapat memakan waktu hingga enam kali lebih lama.
- **Apa itu.** Pencocokan simbol sederhana pada lembar Anda sendiri, tanpa model terlatih, dan tidak ada yang meninggalkan komputer Anda. Pada set lembar 200 buah rekaan, prosesnya memakan waktu 9,4 detik dari awal sampai akhir di Chrome pada desktop cepat; set denah sungguhan akan lebih lambat. Lihat [Hitung semuanya dalam set](topic:count-everything).

**Memori harga dari pekerjaan Anda sendiri**

- **TakeoffCraft mengingat tarif Anda.** Saat Anda menyimpan takeoff, setiap item berharga yang dipakai diingat menurut nama dan tipe: tarif material, tarif upah, susut, dan satuan. 12 pekerjaan terakhir disimpan untuk setiap nama. Memori disimpan di komputer ini di samping Library harga, tidak pernah di dalam file takeoff, dan tidak ada yang dikirim ke mana pun.
- **Mulai takeoff baru darinya.** {{ui:Harga}} di bilah alat menampilkan, untuk setiap item, tarif pekerjaan terakhir, tarif yang lazim, dan rentangnya. {{ui:Pakai yang terakhir}} atau {{ui:Pakai yang umum}} memberi harga satu item, dan {{ui:Beri harga N item tanpa harga dari memori}} mengisi setiap item yang belum berharga. Setiap penggunaan adalah satu langkah urungkan.
- **Pekerjaan lama.** {{ui:Pelajari dari takeoff sebelumnya…}} mengingat item berharga dari takeoff yang tersimpan (.json).
- **Lihat, ubah, lupakan.** {{ui:Semua yang diingat}} mencantumkan setiap nama; tombol tempat sampah melupakan satu nama, dan {{ui:Hapus semua harga}} melupakan semuanya. Matikan {{ui:Ingat harga saya saat saya menyimpan takeoff}} untuk berhenti. Harga per buah tidak pernah diberikan pada item per kaki. Lihat [Memori harga dari pekerjaan sebelumnya](topic:price-memory).

**Stok pemasok dan waktu tunggu**

- **Periksa terhadap daftar pemasok.** {{ui:Pasokan}} di bilah alat menerima daftar stok pemasok ({{ui:Tambah file pemasok…}}), berupa CSV atau spreadsheet, lalu memeriksa apa yang dibutuhkan takeoff, dengan susut, terhadapnya. Hingga lima file disimpan. Tidak ada yang dikirim dan tidak ada yang meminta pemasok: Anda yang membawa filenya.
- **Apa yang dikatakannya.** Item yang kurang tampil lebih dulu: "Kurang 120 EA", "Waktu tunggu 21 hari", "Pesanan tertunda", "Satuan berbeda", "Tidak ada angka stok", atau "Ada di stok". {{ui:Waktu tunggu terlama yang diinginkan (hari)}} dimulai dari 14.
- **Daftar pesanan.** {{ui:Daftar pesanan (CSV)}} mengunduh item yang kurang beserta jumlah kekurangannya, pemasoknya, dan waktu tunggunya.
- **Harga ke Library.** Jika file memiliki harga, {{ui:Harga ke Pustaka}} menetapkan harga material setiap entri Library dengan nama dan satuan yang sama. Hitung ulang harga dari Library untuk membawanya ke takeoff.
- **Di panel Masalah.** Kekurangan adalah peringatan dan waktu tunggu yang panjang adalah catatan, di bawah "Stok pemasok". Anda dapat menerima satu dengan alasan, dan alasannya disimpan di dalam takeoff. Lihat [Periksa stok pemasok dan waktu tunggu](topic:supplier-stock).

**Asisten AI**

- **Alat untuk ketiganya.** Dengan asisten diizinkan di {{ui:Pengaturan}}, asisten dapat membaca legenda (`legend_open`), menjalankan hitungan (`legend_count_start`, lalu `legend_count_status` dan `legend_count_result`), dan menambahkannya (`legend_count_add`, yang dapat pratinjau lebih dulu). Ia dapat membaca memori harga (`prices_list`) dan memberi harga item darinya (`prices_apply`, yang dapat pratinjau lebih dulu), serta membaca pemeriksaan pemasok (`supply_check`). Menambahkan file pemasok tetap menjadi tugas Anda. Lihat [Gunakan TakeoffCraft dengan asisten AI](topic:use-with-ai-assistants).

**Di setiap aplikasi**

- **Bahasa.** Lima puluh empat bahasa seluruhnya; sepuluh baru (Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipina, Swahili, dan Uzbek). Bahasa selain Inggris adalah draf mesin sampai penutur asli telah meninjaunya.
- **Perangkat input.** {{ui:Pengaturan}} › {{ui:Global}} › {{ui:Perangkat input}} menentukan apa yang dilakukan trackpad, tombol samping mouse, pena, mouse 3D, pengontrol game, atau pengontrol MIDI, untuk setiap aplikasi atau untuk satu aplikasi. Lihat [Gunakan trackpad, mouse 3D, atau pengontrol](common:input-devices).
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} menawarkan {{ui:Lipat}} (awal), {{ui:2 baris}}, dan {{ui:1 baris}}; grup yang tidak muat digulir ke samping. Lihat [Atur panel](common:arrange-panels).
- **Panel masalah.** Panel bersama untuk peringatan dan catatan kini memuat pemeriksaan stok pemasok di atas, di samping pemeriksaan lainnya.
- **Add-on.** Add-on mengikuti daftar akun Anda. Lihat [Add-on dan daftar akun Anda](common:addons-basics).
- **Hubungkan AI Anda.** CadCraft Studio adalah hub: hubungkan asisten Anda sekali untuk kedelapan aplikasi. Studio tidak memiliki AI sendiri.

### Diperbaiki di 0.8.1

- **Bagian kelas pada DWG.** Bagian kelas pada file DWG dibaca sebagai tipe yang salah. Ini diperbaiki di TakeoffCraft, dan di empat aplikasi lainnya.
- **Studio dapat mengganti bahasa saat berjalan.** Sebelumnya, Studio dan edisi kemasannya hanya berbahasa Inggris. Ini belum diuji pada build desktop di setiap platform; beri tahu kami jika bahasanya tidak berubah.

### Belum ada di versi ini

- **Belum ditandatangani kode.** Windows mungkin memberi peringatan, dan di Mac Anda klik kanan lalu pilih {{ui:Buka}} untuk pertama kali. Build toko (Microsoft Store, Google Play, App Store) ditunda, dan build iPad serta iPhone belum dibuat ulang untuk 0.8.1.
- **Pembaruan Studio.** Installer Windows dan paket Linux memeriksa sekali sehari dan bertanya lebih dulu. Zip portabel hanya memberi tahu Anda, dan macOS serta APK tidak memperbarui diri sendiri. .dmg macOS 0.8 mengikuti rilis.
- **Hubungkan AI Anda.** Koneksi satu klik di dalam Studio, konektor AI yang dihosting di peramban, kunci API Anda sendiri di dalam Studio, dan paket MCP yang diterbitkan belum dijanjikan pada versi ini.
- **Hitung semuanya.** Fitur ini memerlukan simbol yang digambar dengan cara yang sama seperti di legenda, dan simbol yang dilalui dinding atau garis panjang dapat terlewat. Simbol yang dicerminkan tidak ditemukan, dan lembar tanpa skala yang digambar dalam ukuran lain dicari pada ukuran legenda. Periksa temuan pada lembar pertama sebelum mempercayai sisanya.
- **Stok pemasok.** Angka stok hanya sebaik file yang Anda tambahkan. Pemeriksaan tidak pernah bertanya kepada pemasok.
- **Bahasa.** Bilah aplikasi bahasa Tamil meluap.

Yang lain ada di [Belum dibuat](topic:not-built-yet). Untuk rilis sebelumnya, lihat [Yang baru di 0.7](topic:whats-new-0-7).
