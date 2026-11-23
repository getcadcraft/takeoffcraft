---
title: Yang baru di 0.9 (sebelumnya)
summary: Baca panjang dalam meter, sentimeter, atau milimeter, luas metrik dalam m2 dengan luas dinding, preset skala 1:75 dan 1:150, satuan berat dan suhu, Busur dengan sepuluh metode, serta kursor Live, Ikuti, dan daftar orang.
keywords: yang baru 0.9, rilis sebelumnya, yang baru, what's new, catatan rilis, changelog, 0.9, show lengths as, tampilkan panjang sebagai, meter, sentimeter, milimeter, metrik, ikuti global, satuan, satuan tampilan, m2, meter persegi, luas dinding, preset skala, 1:75, 1:150, berat, kilogram, kg, ton, t, lb, suhu, celsius, fahrenheit, busur, metode busur, busur 3 titik, radius, live, kursor, ikuti, daftar orang, tooltip, tata letak, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, hitung semuanya, legenda, legenda simbol, seluruh set, memori harga, proyek sebelumnya, proyek terakhir, harga umum, pemasok, stok, waktu tunggu, pesanan tertunda, daftar pesanan, kekurangan, panel masalah, asisten, bahasa, perangkat input, baris bilah alat, dwg
from: f4322ba2
---

Ini yang berubah di TakeoffCraft 0.9, dibandingkan dengan 0.8.1. Ini rilis kecil untuk aplikasi ini: panjang kini dapat dibaca dalam meter, sentimeter, atau milimeter, luas dan skala mengikuti pekerjaan metrik dengan benar, dan Busur memiliki sepuluh cara untuk menggambar. Sesi Live juga menampilkan siapa berada di mana.

## Baru

### Baca panjang dalam meter, sentimeter, atau milimeter

- **Tampilkan panjang sebagai.** {{ui:Settings}} › {{ui:TakeoffCraft}} memiliki {{ui:Show lengths as}} dengan {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm, dan mm. {{ui:Follow Global}} menggunakan satuan panjang metrik yang Anda beri bintang di {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, dan kaki-inci jika tidak ada yang diberi bintang. Ini mengubah cara panjang terbaca di lembar, di bilah status, dan di panel, termasuk tinggi, kedalaman, ketebalan, dan level. Angka tanpa satuan yang diketik di kolom tinggi dibaca dalam satuan yang ditampilkan.
- **Hanya tampilan.** Kuantitas, biaya, dan ekspor dihitung dari panjang yang tepat. Pilihan 1/16, 1/8, dan 1/4 inci hanya muncul untuk kaki-inci. Lihat [Tampilkan panjang dalam meter](topic:show-lengths-in-meters).
- **Satuan berat.** Item {{ui:Typed quantity (no drawing)}} kini dapat dalam lb, TON, kg, atau t, dan diberi harga per satuan.
- **Suhu.** Setiap item memiliki kolom {{ui:Temperature}} opsional di editor item, diketik dalam derajat C atau F. {{ui:Show temperatures as}} di {{ui:Settings}} › {{ui:TakeoffCraft}} menawarkan {{ui:Follow Global}}, °C, atau °F.

### Luas dan skala untuk pekerjaan metrik

- **Luas dalam m2 pada gambar.** Luas yang diukur dengan item metrik kini menyebut m2 pada tag gambar dan panel tanda, serta dalam tabel, bukan SF. Aturannya adalah m2 jika item diberi harga secara metrik atau panjang ditampilkan dalam m, cm, atau mm, dan SF jika tidak.
- **Luas dinding.** Item linear dengan tinggi juga menampilkan luas dindingnya (panjang kali tinggi) dalam daftar Item dan sebagai baris catatan di bawah tabel kuantitas per item.
- **Preset skala 1:75 dan 1:150.** Keduanya ada dalam daftar {{ui:Preset}} di grup {{ui:Scale}}, yang kini memiliki 32 skala. Lihat [Preset skala](topic:scale-presets).

### Busur dengan sepuluh metode

- Saat {{ui:Arc}} aktif (tombol bilah alat atau {{key:R}}), kotak {{ui:Arc method}} muncul di bilah lembar: 3 titik, Awal, Pusat, Akhir, Awal, Pusat, Sudut, Awal, Pusat, Panjang, Awal, Akhir, Sudut, Awal, Akhir, Arah, Awal, Akhir, Radius, Pusat, Awal, Akhir, Pusat, Awal, Sudut, dan Pusat, Awal, Panjang. Sudut, panjang, radius, dan arah dapat diklik atau diketik. Ini bekerja pada rangkaian linear, area, dan potongan. File yang disimpan sebelum 0.9 terbuka dengan cara yang sama. Lihat [Gambar busur dengan sepuluh metode](topic:draw-arcs-ten-methods).

### Bekerja bersama

- **Lihat kursor satu sama lain.** Dalam sesi Live, penunjuk setiap orang tampil di lembar dengan nama dan warnanya, dengan kotak putus-putus di sekitar tanda yang mereka pilih. Orang di lembar lain didaftar dengan nama lembar tersebut. Lihat [Bekerja live dengan orang lain](topic:work-live).
- **Ikuti seseorang, dan daftar orang.** Tombol {{ui:Orang}} dalam sesi Live mendaftar setiap orang beserta alat yang mereka jalankan, lembar tempat mereka berada, dan kapan terakhir mengedit. {{ui:Follow}} memindahkan tampilan Anda mengikuti mereka, dan host dapat memakai {{ui:Ask everyone to follow me}}. Lihat [Ikuti rekan dalam sesi Live](topic:follow-a-teammate).

## Di setiap aplikasi

- **Tooltip dan tips awal.** Teks saat kursor diarahkan adalah tooltip Bootstrap, dan tips awal dapat ditutup.
- **Deretan tab yang digulir.** Deretan tab panel yang tidak muat kini digulir alih-alih terpotong.
- **Judul tab.** Tab browser menampilkan `<document> - TakeoffCraft | CadCraft`.
- **Tata letak.** Daftar tata letak di {{ui:Settings}} kini berupa drop-down yang menampilkan tata letak yang dipilih.
- **Bahasa.** Bahasa yang Anda pilih kini mencapai kata-kata yang dicetak halaman itu sendiri, seperti Baru, Buka, dan Simpan. Bahasa selain Inggris berupa draf mesin hingga penutur asli membacanya.

## Batasan jujur

- Tampilan panjang, satuan berat dan suhu, serta preset baru telah diperiksa dengan tes dan di halaman. Setiap panel pada setiap satuan belum diperiksa secara manual.
- Daftar orang belum pernah diperiksa secara manual dengan kelas nyata yang berisi guru dan siswa.
- Bahasa selain Inggris berupa draf mesin.
- Installer Windows tidak ditandatangani kode (Info selengkapnya, lalu Tetap jalankan). Image disk macOS belum dinotarisasi (klik kanan, lalu Buka).

## Sebelumnya: 0.8 dan 0.8.1

Ini yang berubah di TakeoffCraft 0.8 (dirilis 2026-11-01) dan 0.8.1 (2026-11-02), dibandingkan dengan 0.7. Legenda simbol kini dapat dihitung di seluruh set sekaligus, takeoff baru dapat dimulai dari harga proyek lama Anda, dan takeoff dapat diperiksa terhadap stok pemasok. 0.8.1 adalah rilis perbaikan.

### Baru

**Hitung semuanya dalam set**

- **Kotakkan legenda sekali.** {{ui:Count everything}} di bilah alat membaca legenda simbol: seret kotak di sekitar simbol dan nama yang tercetak di sebelahnya. Setiap simbol didaftar dengan gambarnya dan namanya, dan nama itu menjadi nama item. Hapus centang pada yang tidak Anda inginkan, lalu pilih {{ui:Hitung pada N lembar}}. Bilah menampilkan lembar yang sedang dicari, {{ui:Cancel}} menghentikan proses, dan halaman tetap dapat dipakai.
- **Setiap lembar dalam satu proses.** Setiap simbol dihitung pada setiap lembar yang terbuka. Lembar yang digambar dengan skala lain dicari pada skala itu, dan simbol ditemukan meski diputar pada sudut siku-siku mana pun. Simbol milik legenda itu sendiri tidak dihitung pada lembarnya.
- **Tinjau sebelum apa pun ditambahkan.** Setiap total memiliki tautan per lembar ("E-103: 4") yang menuju ke lembar itu. Klik kotak pada temuan untuk mengeluarkannya, dan klik lagi untuk memasukkannya kembali. Tingkat kecocokan (50% sampai 100%) hanya menyaring apa yang ditemukan; tidak ada pencarian ulang.
- **Satu langkah urungkan.** {{ui:Tambahkan N tanda}} membuat item hitung per simbol dengan tanda pada setiap temuan. Nama yang sudah menjadi item hitung milik Anda akan dipakai ulang. {{key:Ctrl+Z}} membatalkan semua item dan tanda. Apa yang Anda terima juga menambah {{ui:Learned}}.
- **Simbol pada sudut apa pun.** Centang {{ui:Symbols at any angle}} sebelum menghitung untuk juga menemukan simbol yang diputar pada sudut selain sudut siku-siku. Pencarian kemudian memutar setiap simbol setiap 15 derajat, dan simbol yang tidak bulat dapat memerlukan waktu hingga enam kali lebih lama.
- **Apa itu.** Pencocokan simbol sederhana pada lembar Anda sendiri, tanpa model terlatih, dan tidak ada yang meninggalkan komputer Anda. Pada set 200 lembar rekaan, prosesnya memakan waktu 9.4 detik dari awal hingga akhir di Chrome pada desktop cepat; set denah nyata akan lebih lambat. Lihat [Hitung semuanya dalam set](topic:count-everything).

**Memori harga dari proyek Anda sendiri**

- **TakeoffCraft mengingat harga Anda.** Saat Anda menyimpan takeoff, setiap item berharga yang dipakai diingat berdasarkan nama dan tipenya: harga material, harga upah, susut, dan satuan. 12 proyek terakhir disimpan untuk setiap nama. Disimpan di komputer ini bersama Pustaka harga, tidak pernah di dalam file takeoff, dan tidak ada yang dikirim ke mana pun.
- **Mulai takeoff baru darinya.** {{ui:Prices}} di bilah alat menampilkan, untuk setiap item, harga proyek terakhir, harga umum, dan rentangnya. {{ui:Pakai yang terakhir}} atau {{ui:Pakai yang umum}} memberi harga satu item, dan {{ui:Beri harga N item tanpa harga dari memori}} mengisi setiap item yang belum berharga. Setiap penggunaan adalah satu langkah urungkan.
- **Pekerjaan lama.** {{ui:Pelajari dari takeoff sebelumnya…}} mengingat item berharga dari takeoff yang disimpan (.json).
- **Lihat, ubah, lupakan.** {{ui:Semua yang diingat}} menampilkan setiap nama; tombol sampah melupakan satu nama, dan {{ui:Hapus semua harga}} melupakan semua. Matikan {{ui:Ingat harga saya saat saya menyimpan takeoff}} untuk berhenti. Harga per buah tidak pernah diterapkan pada item per kaki. Lihat [Memori harga dari proyek sebelumnya](topic:price-memory).

**Stok pemasok dan waktu tunggu**

- **Periksa terhadap daftar pemasok.** {{ui:Pasokan}} di bilah alat mengambil daftar stok pemasok ({{ui:Tambah file pemasok…}}), berupa CSV atau spreadsheet, lalu memeriksa apa yang dibutuhkan takeoff, termasuk susut, terhadapnya. Hingga lima file disimpan. Tidak ada yang dikirim dan tidak ada yang meminta ke pemasok: Anda yang membawa filenya.
- **Apa yang dikatakannya.** Item yang kurang tampil lebih dulu: "Kurang 120 EA", "Waktu tunggu 21 hari", "Pesanan tertunda", "Satuan berbeda", "Tidak ada angka stok", atau "Tersedia". {{ui:Tunggu terlama yang diinginkan (hari)}} dimulai dari 14.
- **Daftar pesanan.** {{ui:Daftar pesanan (CSV)}} mengunduh item yang kurang beserta jumlah kekurangannya, pemasok, dan waktu tunggunya.
- **Harga ke Pustaka.** Jika file memiliki harga, {{ui:Harga ke Pustaka}} menetapkan harga material setiap entri Pustaka dengan nama dan satuan yang sama. Beri harga ulang dari Pustaka untuk membawanya ke takeoff.
- **Di panel Masalah.** Kekurangan adalah peringatan dan waktu tunggu yang lama adalah catatan, di bawah "Stok pemasok". Anda dapat menerima salah satunya dengan alasan, dan alasan itu disimpan di dalam takeoff. Lihat [Periksa stok pemasok dan waktu tunggu](topic:supplier-stock).

**Asisten AI**

- **Alat untuk ketiganya.** Dengan asisten diizinkan di {{ui:Settings}}, asisten dapat membaca legenda (`legend_open`), menjalankan penghitungan (`legend_count_start`, lalu `legend_count_status` dan `legend_count_result`), dan menambahkannya (`legend_count_add`, yang dapat pratinjau terlebih dahulu). Asisten dapat membaca harga yang diingat (`prices_list`) dan memberi harga item darinya (`prices_apply`, yang dapat pratinjau terlebih dahulu), serta membaca pemeriksaan pemasok (`supply_check`). Menambahkan file pemasok tetap menjadi tugas Anda. Lihat [Gunakan TakeoffCraft dengan asisten AI](topic:use-with-ai-assistants).

**Di setiap aplikasi**

- **Bahasa.** Lima puluh empat bahasa seluruhnya; sepuluh baru (Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipina, Swahili, dan Uzbek). Bahasa selain Inggris berupa draf mesin hingga penutur asli membacanya.
- **Perangkat input.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} menetapkan apa yang dilakukan trackpad, tombol samping mouse, pena, mouse 3D, pengontrol game, atau pengontrol MIDI, untuk setiap aplikasi atau untuk satu aplikasi. Lihat [Gunakan trackpad, mouse 3D, atau pengontrol](common:input-devices).
- **Baris bilah alat.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} menawarkan {{ui:Wrap}} (awal), {{ui:2 rows}}, dan {{ui:1 row}}; grup yang tidak muat digulir ke samping. Lihat [Atur panel](common:arrange-panels).
- **Panel masalah.** Panel bersama untuk peringatan dan catatan kini memuat pemeriksaan stok pemasok di atas, di samping pemeriksaan lainnya.
- **Add-on.** Add-on mengikuti daftar akun Anda. Lihat [Add-on dan daftar akun Anda](common:addons-basics).
- **Hubungkan AI Anda.** CadCraft Studio adalah hub: hubungkan asisten Anda sekali untuk kedelapan aplikasi. Studio tidak memiliki AI sendiri.

### Diperbaiki di 0.8.1

- **Bagian kelas DWG.** Bagian kelas file DWG dibaca sebagai tipe yang salah. Ini diperbaiki di TakeoffCraft dan di empat aplikasi lainnya.
- **Studio dapat mengganti bahasa saat berjalan.** Sebelumnya, Studio dan edisi kemasannya hanya berbahasa Inggris. Ini belum diuji di build desktop pada setiap platform; beri tahu kami jika bahasa tidak berubah.

### Belum ada di versi ini

- **Belum ditandatangani kode.** Windows mungkin memberi peringatan, dan di Mac Anda klik kanan lalu pilih {{ui:Terbuka}} pada pertama kali. Build toko (Microsoft Store, Google Play, App Store) ditunda, dan build iPad dan iPhone tidak dibangun ulang untuk 0.8.1.
- **Pembaruan Studio.** Installer Windows dan paket Linux memeriksa sekali sehari dan meminta izin terlebih dahulu. Zip portabel hanya memberi tahu, dan macOS serta APK tidak memperbarui sendiri. .dmg macOS 0.8 mengikuti rilis.
- **Hubungkan AI Anda.** Hubungkan satu klik di dalam Studio, konektor yang di-host untuk AI di browser, kunci API Anda sendiri di dalam Studio, dan paket MCP yang diterbitkan tidak dijanjikan dalam versi ini.
- **Hitung semuanya.** Ini membutuhkan simbol yang digambar dengan cara yang sama seperti di legenda, dan simbol yang ada dinding atau garis panjang yang melintasinya dapat terlewat. Simbol cermin tidak ditemukan, dan lembar tanpa skala yang digambar dengan ukuran lain dicari pada ukuran legenda. Periksa temuan pada lembar pertama sebelum memercayai sisanya.
- **Stok pemasok.** Angka stok hanya seakurat file yang Anda tambahkan. Pemeriksaan tidak pernah meminta ke pemasok.
- **Bahasa.** Bilah aplikasi Tamil meluap.

Semua hal lain ada di [Belum dibuat](topic:not-built-yet). Untuk rilis sebelumnya, lihat [Yang baru di 0.7](topic:whats-new-0-7).
