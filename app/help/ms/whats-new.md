---
title: Perkara baharu dalam 0.8 dan 0.8.1
summary: Kira keseluruhan lejen simbol merentasi setiap helaian terbuka dalam satu larian, beri harga item daripada kadar kerja lepas anda, semak pengukuran kuantiti dengan stok dan masa penghantaran pembekal, serta alat pembantu AI baharu untuk ketiga-tiganya, bersama perubahan 0.8 yang dikongsi dan pembetulan 0.8.1 untuk fail DWG.
keywords: perkara baharu, apa yang baharu, nota keluaran, log perubahan, perubahan, 0.8, 0.8.1, versi, ciri baharu, kira semua, lejen, lejen simbol, keseluruhan set, ingatan harga, kerja lepas, kerja terakhir, harga biasa, pembekal, stok, masa penghantaran, pesanan tertunggak, senarai pesanan, kekurangan, panel masalah, pembantu, bahasa, peranti input, baris bar alat, DWG
from: a04adef6
---

Ini ialah perubahan dalam TakeoffCraft 0.8 (dikeluarkan 2026-11-01) dan 0.8.1 (2026-11-02), berbanding 0.7. Lejen simbol kini boleh dikira merentasi keseluruhan set sekaligus, pengukuran kuantiti baharu boleh bermula daripada harga kerja lepas anda, dan pengukuran kuantiti boleh disemak dengan stok pembekal. 0.8.1 ialah keluaran pembetulan.

## Baharu

### Kira semua dalam set

- **Kotakkan lejen sekali.** {{ui:Kira semua}} pada bar alat membaca lejen simbol: seret kotak di sekeliling simbol dan nama yang dicetak di sebelahnya. Setiap simbol disenaraikan dengan gambar dan namanya, dan nama itu menjadi nama item. Nyahtanda apa yang anda tidak mahu, kemudian pilih {{ui:Kira pada N helaian}}. Bar menunjukkan helaian yang sedang dicari, {{ui:Batal}} menghentikan larian, dan halaman kekal boleh digunakan.
- **Setiap helaian dalam satu larian.** Setiap simbol dikira pada setiap helaian terbuka. Helaian yang dilukis pada skala lain dicari pada skala itu, dan simbol dijumpai walaupun diputar mengikut mana-mana sudut tegak. Simbol lejen itu sendiri tidak dikira pada helaiannya.
- **Semak sebelum apa-apa ditambah.** Setiap jumlah mempunyai pautan bagi setiap helaian ("E-103: 4") yang membawa anda ke helaian itu. Klik kotak pada satu padanan untuk tidak memasukkannya, dan klik lagi untuk memulihkannya. Tahap padanan (50% hingga 100%) hanya menapis apa yang dijumpai; tiada carian semula dibuat.
- **Satu langkah buat asal.** {{ui:Tambah N penanda}} mencipta satu item kiraan bagi setiap simbol dengan penanda pada setiap padanan. Nama yang sudah menjadi item kiraan anda digunakan semula. {{key:Ctrl+Z}} membatalkan semua item dan penanda. Apa yang anda terima juga menyumbang kepada {{ui:Dipelajari}}.
- **Simbol pada sebarang sudut.** Tandakan {{ui:Simbol pada sebarang sudut}} sebelum mengira untuk turut mencari simbol yang diputar mengikut sudut yang bukan sudut tegak. Carian kemudian memutar setiap simbol setiap 15 darjah, dan simbol yang tidak bulat boleh mengambil masa sehingga enam kali ganda lebih lama.
- **Apakah ia.** Padanan simbol biasa pada helaian anda sendiri, tanpa model terlatih, dan tiada apa yang meninggalkan komputer anda. Pada set 200 helaian rekaan, ia mengambil masa 9.4 saat dari mula hingga akhir dalam Chrome pada desktop yang pantas; set pelan sebenar akan lebih perlahan. Lihat [Kira semua dalam set](topic:count-everything).

### Ingatan harga daripada kerja anda sendiri

- **TakeoffCraft mengingati kadar anda.** Apabila anda menyimpan pengukuran kuantiti, setiap item berharga yang digunakan diingati mengikut nama dan jenis: kadar bahan, kadar upah, pembaziran dan unit. 12 kerja terakhir disimpan bagi setiap nama. Ia disimpan pada komputer ini bersebelahan Pustaka harga, tidak sekali-kali di dalam fail pengukuran kuantiti, dan tiada apa dihantar ke mana-mana.
- **Mulakan pengukuran kuantiti baharu daripadanya.** {{ui:Harga}} pada bar alat menunjukkan, bagi setiap item, kadar kerja terakhir, kadar biasa dan julatnya. {{ui:Guna yang terakhir}} atau {{ui:Guna yang biasa}} memberi harga kepada satu item, dan {{ui:Beri harga N item yang belum berharga daripada ingatan}} mengisi setiap item yang belum ada harga. Setiap penggunaan ialah satu langkah buat asal.
- **Kerja lama.** {{ui:Belajar daripada pengukuran kuantiti lepas…}} mengingati item berharga bagi pengukuran kuantiti yang disimpan (.json).
- **Lihat, ubah, lupakan.** {{ui:Semua yang diingati}} menyenaraikan setiap nama; butang tong sampah melupakan satu nama, dan {{ui:Kosongkan semua harga}} melupakan semuanya. Nyahtanda {{ui:Ingat harga saya apabila saya simpan pengukuran kuantiti}} untuk berhenti. Harga per unit tidak sekali-kali diletakkan pada item per kaki. Lihat [Ingatan harga daripada kerja lepas anda](topic:price-memory).

### Stok pembekal dan masa penghantaran

- **Semak dengan senarai pembekal.** {{ui:Bekalan}} pada bar alat mengambil senarai stok pembekal ({{ui:Tambah fail pembekal…}}), sama ada CSV atau hamparan, dan menyemak apa yang diperlukan pengukuran kuantiti, termasuk pembaziran, dengannya. Sehingga lima fail disimpan. Tiada apa dihantar dan tiada apa bertanya kepada pembekal: anda yang membawa fail itu.
- **Maksudnya.** Item yang kurang disenaraikan dahulu, dengan teks seperti "Kurang 120 EA", "Masa penghantaran 21 hari", "Pesanan tertunggak", "Unit berbeza", "Tiada angka stok" atau "Ada stok". {{ui:Tempoh menunggu terpanjang yang dikehendaki (hari)}} bermula pada 14.
- **Senarai pesanan.** {{ui:Senarai pesanan (CSV)}} memuat turun item yang kurang beserta jumlah kekurangan, pembekal dan masa penghantaran.
- **Harga ke dalam Pustaka.** Jika fail mempunyai harga, {{ui:Harga ke dalam Pustaka}} menetapkan harga bahan bagi setiap entri Pustaka dengan nama dan unit yang sama. Harga semula daripada Pustaka untuk membawanya ke dalam pengukuran kuantiti.
- **Dalam panel masalah.** Kekurangan ialah amaran dan tempoh menunggu yang panjang ialah nota, di bawah "Stok pembekal". Anda boleh menerima satu dengan sebab, dan sebab itu disimpan dalam pengukuran kuantiti. Lihat [Semak stok pembekal dan masa penghantaran](topic:supplier-stock).

### Pembantu AI

- **Alat untuk ketiga-tiganya.** Dengan pembantu dibenarkan dalam {{ui:Tetapan}}, pembantu boleh membaca lejen (`legend_open`), menjalankan kiraan (`legend_count_start`, kemudian `legend_count_status` dan `legend_count_result`) dan menambahnya (`legend_count_add`, yang boleh pratonton dahulu). Ia boleh membaca harga yang diingati (`prices_list`) dan memberi harga item daripadanya (`prices_apply`, yang boleh pratonton dahulu), serta membaca semakan pembekal (`supply_check`). Menambah fail pembekal kekal menjadi tugas anda. Lihat [Gunakan TakeoffCraft dengan pembantu AI](topic:use-with-ai-assistants).

### Dalam setiap app

- **Bahasa.** Lima puluh empat bahasa semuanya; sepuluh daripadanya baharu (Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili dan Uzbek). Bahasa selain Bahasa Inggeris ialah draf mesin sehingga penutur asli telah membacanya.
- **Peranti input.** {{ui:Tetapan}} › {{ui:Global}} › {{ui:Peranti input}} menetapkan apa yang dilakukan oleh pad jejak, butang sisi tetikus, pen, tetikus 3D, pengawal permainan atau pengawal MIDI, untuk setiap app atau untuk satu app. Lihat [Gunakan pad jejak, tetikus 3D atau pengawal](common:input-devices).
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Baris bar alat}} menawarkan {{ui:Balut}} (permulaan), {{ui:2 baris}} dan {{ui:1 baris}}; kumpulan yang tidak muat akan skrol ke sisi. Lihat [Susun panel](common:arrange-panels).
- **Panel masalah.** Panel bersama bagi amaran dan nota kini membawa semakan stok pembekal di atas, bersebelahan dengan semakan lain.
- **Add-on.** Add-on mengikut senarai akaun anda. Lihat [Add-on dan senarai akaun anda](common:addons-basics).
- **Sambungkan AI anda.** CadCraft Studio ialah hab: sambungkan pembantu anda sekali untuk kesemua lapan app. Studio tidak mempunyai AI sendiri.

## Dibetulkan dalam 0.8.1

- **Bahagian kelas DWG.** Bahagian kelas bagi fail DWG dibaca sebagai jenis yang salah. Ini telah dibetulkan dalam TakeoffCraft dan dalam empat app lain.
- **Studio boleh tukar bahasa semasa ia berjalan.** Sebelum ini, Studio dan edisi terbungkusnya hanya dalam Bahasa Inggeris. Ini belum diuji dalam binaan desktop pada setiap platform; beritahu kami jika bahasa tidak bertukar.

## Belum ada dalam versi ini

- **Tidak ditandatangani kod.** Windows mungkin memberi amaran, dan pada Mac anda klik kanan dan pilih {{ui:Buka}} kali pertama. Binaan kedai (Microsoft Store, Google Play, App Store) ditangguhkan, dan binaan iPad serta iPhone tidak dibina semula untuk 0.8.1.
- **Kemas kini Studio.** Pemasang Windows dan pakej Linux menyemak sekali sehari dan bertanya dahulu. Zip mudah alih hanya memberitahu anda, dan macOS serta APK tidak mengemas kini sendiri. Fail .dmg macOS 0.8 mengikut keluaran.
- **Sambungkan AI anda.** Sambungan satu klik dalam Studio, penyambung dihoskan untuk AI dalam pelayar, kunci API anda sendiri dalam Studio dan pakej MCP yang diterbitkan tidak dijanjikan dalam versi ini.
- **Kira semua.** Ia memerlukan simbol yang dilukis dengan cara yang sama seperti dalam lejen, dan simbol yang mempunyai dinding atau garis panjang melaluinya boleh terlepas. Simbol cermin tidak dijumpai, dan helaian tanpa skala yang dilukis pada saiz lain dicari pada saiz lejen. Semak padanan pada helaian pertama sebelum mempercayai yang lain.
- **Stok pembekal.** Angka stok hanya setepat fail yang anda tambah. Semakan tidak sekali-kali bertanya kepada pembekal.
- **Bahasa.** Bar app bagi bahasa Tamil melimpah.

Selain itu, lihat [Belum dibina](topic:not-built-yet). Bagi keluaran sebelum ini, lihat [Perkara baharu dalam 0.7](topic:whats-new-0-7).
