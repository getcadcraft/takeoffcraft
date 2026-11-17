---
title: Perkara baharu dalam 0.9
summary: Baca panjang dalam meter, sentimeter atau milimeter, luas metrik dalam m2 dengan luas dinding, pratetap skala 1:75 dan 1:150, unit berat dan suhu, Lengkok dengan sepuluh kaedah, serta kursor langsung, Ikut dan senarai orang.
keywords: perkara baharu, nota keluaran, log perubahan, 0.9, tunjukkan panjang sebagai, meter, sentimeter, milimeter, metrik, ikut global, unit, unit paparan, m2, meter persegi, luas dinding, pratetap skala, 1:75, 1:150, berat, kilogram, kg, tan, ton, lb, suhu, celsius, fahrenheit, lengkok, kaedah lengkok, lengkok 3 titik, jejari, langsung, kursor, ikut, senarai orang, kelas, tip alat, reka letak, perkara baharu, log perubahan, perubahan, 0.8, 0.8.1, versi, ciri baharu, kira semua, petunjuk simbol, seluruh set, ingatan harga, kerja lepas, kerja terakhir, harga biasa, pembekal, stok, masa hantar, tunggakan, senarai pesanan, kekurangan, panel masalah, pembantu, bahasa, peranti input, baris bar alat, dwg
from: 6182b998
---

Ini ialah perkara yang berubah dalam TakeoffCraft 0.9, berbanding 0.8.1. Ia keluaran kecil untuk aplikasi ini: panjang kini boleh dibaca dalam meter, sentimeter atau milimeter, luas dan skala mengikut kerja metrik dengan betul, dan Lengkok mempunyai sepuluh cara untuk melukis. Sesi langsung juga menunjukkan siapa berada di mana.

## Baharu

### Baca panjang dalam meter, sentimeter atau milimeter

- **Tunjukkan panjang sebagai.** {{ui:Tetapan}} › {{ui:TakeoffCraft}} mempunyai {{ui:Tunjukkan panjang sebagai}} dengan {{ui:Ikut Global}}, {{ui:Kaki-inci}}, m, cm dan mm. {{ui:Ikut Global}} menggunakan unit panjang metrik yang anda tanda dalam {{ui:Tetapan}} › {{ui:Global}} › {{ui:Unit}}, dan kaki-inci apabila tiada yang ditandakan. Ia menukar cara panjang dibaca pada helaian, dalam bar status dan dalam panel, termasuk ketinggian, kedalaman, ketebalan dan aras. Nombor kosong yang ditaip dalam medan ketinggian dibaca dalam unit yang dipaparkan.
- **Paparan sahaja.** Kuantiti, kos dan eksport dikira daripada panjang tepat. Pilihan 1/16, 1/8 dan 1/4 inci hanya muncul untuk kaki-inci. Lihat [Tunjukkan panjang dalam meter](topic:show-lengths-in-meters).
- **Unit berat.** Item {{ui:Kuantiti ditaip (tiada lukisan)}} kini boleh dalam lb, TON, kg atau t, dan dihargai mengikut unit.
- **Suhu.** Setiap item mempunyai medan {{ui:Suhu}} pilihan dalam penyunting item, ditaip dalam darjah C atau F. {{ui:Tunjukkan suhu sebagai}} dalam {{ui:Tetapan}} › {{ui:TakeoffCraft}} menawarkan {{ui:Ikut Global}}, °C atau °F.

### Luas dan skala untuk kerja metrik

- **Luas dalam m2 pada lukisan.** Luas yang diukur dengan item metrik kini menyebut m2 pada tag lukisan dan panel tanda, serta dalam jadual, dan bukannya SF. Peraturannya ialah m2 apabila item dihargai secara metrik atau panjang dipaparkan dalam m, cm atau mm, dan SF sebaliknya.
- **Luas dinding.** Item linear yang mempunyai ketinggian turut menunjukkan luas dindingnya (panjang kali ketinggian) dalam senarai Item dan sebagai baris nota di bawah jadual kuantiti mengikut item.
- **Pratetap skala 1:75 dan 1:150.** Ia berada dalam senarai {{ui:Pratetap}} dalam kumpulan {{ui:Skala}}, yang kini mempunyai 32 skala. Lihat [Pratetap skala](topic:scale-presets).

### Lengkok dengan sepuluh kaedah

- Semasa {{ui:Lengkok}} dihidupkan (butang bar alat atau {{key:R}}), kotak {{ui:Kaedah lengkok}} muncul dalam bar helaian: 3 titik, Mula, Pusat, Hujung, Mula, Pusat, Sudut, Mula, Pusat, Panjang, Mula, Hujung, Sudut, Mula, Hujung, Arah, Mula, Hujung, Jejari, Pusat, Mula, Hujung, Pusat, Mula, Sudut dan Pusat, Mula, Panjang. Sudut, panjang, jejari dan arah boleh diklik atau ditaip. Ia berfungsi dalam larian linear, luas dan potongan. Fail yang disimpan sebelum 0.9 dibuka dengan cara yang sama. Lihat [Lukis lengkok dengan sepuluh kaedah](topic:draw-arcs-ten-methods).

### Kerjasama

- **Lihat kursor antara satu sama lain.** Dalam sesi Live, penuding setiap orang dipaparkan pada helaian dengan nama dan warna mereka, serta kotak putus-putus di sekeliling tanda yang mereka pilih. Orang yang berada pada helaian lain disenaraikan dengan nama helaian itu. Lihat [Kerja langsung bersama orang lain](topic:work-live).
- **Ikut seseorang, dan senarai orang.** Butang {{ui:Orang}} dalam sesi Live menyenaraikan setiap orang bersama alat yang mereka guna, helaian tempat mereka berada dan bila kali terakhir mereka menyunting. {{ui:Ikut}} menggerakkan paparan anda seiring dengan mereka, dan hos boleh menggunakan {{ui:Minta semua orang ikut saya}}. Lihat [Ikut rakan sepasukan dalam sesi Live](topic:follow-a-teammate).

## Dalam setiap aplikasi

- **Tip alat dan tip permulaan.** Teks yang muncul apabila anda menuding ialah tip alat Bootstrap, dan tip permulaan boleh ditutup.
- **Jalur tab yang boleh ditatal.** Jalur tab panel yang tidak muat kini ditatal dan bukan dipotong.
- **Tajuk tab.** Tab pelayar membaca `<document> - TakeoffCraft | CadCraft`.
- **Susun atur.** Senarai susun atur dalam {{ui:Tetapan}} ialah senarai juntai bawah yang menunjukkan susun atur yang dipilih.
- **Bahasa.** Bahasa yang anda pilih kini sampai kepada perkataan yang dipaparkan halaman itu sendiri, seperti New, Open dan Save. Bahasa selain Bahasa Inggeris ialah draf mesin sehingga penutur asli telah menyemaknya.

## Had yang jujur

- Paparan panjang, unit berat dan suhu serta pratetap baharu telah diperiksa oleh ujian dan dalam halaman. Setiap panel pada setiap unit belum diperiksa secara manual.
- Senarai orang belum diuji secara manual dengan kelas guru dan pelajar sebenar.
- Bahasa selain Bahasa Inggeris ialah draf mesin.
- Pemasang Windows tidak ditandatangani kod (Maklumat lanjut, kemudian Jalankan juga). Imej cakera macOS tidak dinotariskan (klik kanan, kemudian Buka).

## Terdahulu: 0.8 dan 0.8.1

Ini ialah perkara yang berubah dalam TakeoffCraft 0.8 (dikeluarkan 2026-11-01) dan 0.8.1 (2026-11-02), berbanding 0.7. Petunjuk simbol kini boleh dikira merentasi seluruh set sekali gus, pengukuran kuantiti baharu boleh bermula daripada harga kerja lepas anda, dan pengukuran kuantiti boleh disemak dengan senarai stok pembekal. 0.8.1 ialah keluaran pembetulan.

### Baharu

**Kira semua dalam set**

- **Kotakkan petunjuk sekali.** {{ui:Kira semua}} pada bar alat membaca petunjuk simbol: seret kotak di sekeliling simbol dan nama yang dicetak di sebelahnya. Setiap simbol disenaraikan bersama gambarnya dan namanya, dan nama itu menjadi nama item. Nyahtandakan yang tidak diingini, kemudian pilih {{ui:Kira pada N helaian}}. Bar menunjukkan helaian yang sedang dicari, {{ui:Batal}} menghentikan larian, dan halaman kekal boleh digunakan.
- **Setiap helaian dalam satu larian.** Setiap simbol dikira pada setiap helaian yang dibuka. Helaian yang dilukis pada skala lain dicari pada skala itu, dan simbol dijumpai diputar pada mana-mana sudut tegak. Simbol petunjuk itu sendiri tidak dikira pada helaiannya.
- **Semak sebelum apa-apa ditambah.** Setiap jumlah mempunyai pautan bagi setiap helaian ("E-103: 4") yang membawa anda ke helaian itu. Klik kotak pada penemuan untuk mengecualikannya, dan klik lagi untuk membawanya kembali. Tahap padanan (50% hingga 100%) hanya menapis apa yang dijumpai; tiada carian semula dijalankan.
- **Satu langkah buat asal.** {{ui:Tambah N tanda}} mencipta satu item kiraan bagi setiap simbol dengan tanda pada setiap penemuan. Nama yang sudah menjadi item kiraan anda digunakan semula. {{key:Ctrl+Z}} membatalkan setiap item dan tanda. Apa yang anda terima juga menyuap {{ui:Dipelajari}}.
- **Simbol pada sebarang sudut.** Tandakan {{ui:Simbol pada sebarang sudut}} sebelum anda mengira untuk turut mencari simbol yang diputar pada sudut yang bukan sudut tegak. Carian kemudian memutar setiap simbol setiap 15 darjah, dan simbol yang tidak bulat boleh mengambil masa sehingga enam kali ganda.
- **Apakah ia.** Padanan simbol biasa pada helaian anda sendiri, tanpa model terlatih, dan tiada apa-apa meninggalkan komputer anda. Pada set 200 helaian rekaan, ia mengambil masa 9.4 saat dari mula hingga akhir dalam Chrome pada desktop pantas; set pelan sebenar akan lebih perlahan. Lihat [Kira semua dalam set](topic:count-everything).

**Ingatan harga daripada kerja anda sendiri**

- **TakeoffCraft mengingati kadar anda.** Apabila anda menyimpan pengukuran kuantiti, setiap item berharga yang digunakan diingati mengikut nama dan jenis: kadar bahan, kadar upah, pembaziran dan unit. 12 kerja terakhir disimpan bagi setiap nama. Ia disimpan pada komputer ini bersebelahan Pustaka harga, tidak sekali-kali dalam fail pengukuran kuantiti, dan tiada apa-apa dihantar ke mana-mana.
- **Mulakan pengukuran kuantiti baharu daripadanya.** {{ui:Harga}} pada bar alat menunjukkan, bagi setiap item, kadar kerja terakhir, kadar biasa dan julat. {{ui:Guna yang terakhir}} atau {{ui:Guna yang biasa}} menghargai satu item, dan {{ui:Harga N item tanpa harga daripada ingatan}} mengisi setiap item yang belum berharga. Setiap penggunaan ialah satu langkah buat asal.
- **Kerja lama.** {{ui:Belajar daripada pengukuran kuantiti lepas…}} mengingati item berharga bagi pengukuran kuantiti yang disimpan (.json).
- **Lihat, tukar, lupakan.** {{ui:Semua yang diingati}} menyenaraikan setiap nama; butang tong sampah melupakan satu, dan {{ui:Kosongkan semua harga}} melupakan semua. Nyahtandakan {{ui:Ingat harga saya apabila saya simpan pengukuran kuantiti}} untuk berhenti. Harga per setiap biji tidak sekali-kali diletakkan pada item per kaki. Lihat [Ingatan harga daripada kerja lepas anda](topic:price-memory).

**Stok pembekal dan masa hantar**

- **Semak dengan senarai pembekal.** {{ui:Bekalan}} pada bar alat mengambil senarai stok pembekal ({{ui:Tambah fail pembekal…}}), CSV atau hamparan, dan menyemak apa yang diperlukan pengukuran kuantiti, termasuk pembaziran, terhadapnya. Sehingga lima fail disimpan. Tiada apa-apa dihantar dan tiada apa-apa meminta pembekal: anda yang membawa fail itu.
- **Apa yang dikatakannya.** Item yang kurang disenaraikan dahulu: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" atau "In stock". {{ui:Tempoh menunggu terpanjang yang dikehendaki (hari)}} bermula pada 14.
- **Senarai pesanan.** {{ui:Senarai pesanan (CSV)}} memuat turun item yang kurang bersama jumlah kekurangan, pembekal dan masa hantar.
- **Harga ke dalam Pustaka.** Jika fail itu mempunyai harga, {{ui:Harga ke dalam Pustaka}} menetapkan harga bahan bagi setiap entri Pustaka dengan nama dan unit yang sama. Tentukan harga semula daripada Pustaka untuk membawanya masuk ke dalam pengukuran kuantiti.
- **Dalam panel Masalah.** Kekurangan ialah amaran dan tempoh menunggu yang panjang ialah nota, di bawah "Stok pembekal". Anda boleh menerima satu dengan sebab, dan sebab itu disimpan dalam pengukuran kuantiti. Lihat [Semak stok pembekal dan masa hantar](topic:supplier-stock).

**Ejen AI**

- **Alat untuk ketiga-tiganya.** Dengan pembantu dibenarkan dalam {{ui:Tetapan}}, pembantu boleh membaca petunjuk (`legend_open`), menjalankan kiraan (`legend_count_start`, kemudian `legend_count_status` dan `legend_count_result`) dan menambahnya (`legend_count_add`, yang boleh pratonton dahulu). Ia boleh membaca harga yang diingati (`prices_list`) dan menghargai item daripadanya (`prices_apply`, yang boleh pratonton dahulu), dan membaca semakan pembekal (`supply_check`). Menambah fail pembekal kekal menjadi tugas anda. Lihat [Guna TakeoffCraft dengan pembantu AI](topic:use-with-ai-assistants).

**Dalam setiap aplikasi**

- **Bahasa.** Lima puluh empat bahasa keseluruhannya; sepuluh adalah baharu (Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili dan Uzbek). Bahasa selain Bahasa Inggeris ialah draf mesin sehingga penutur asli telah menyemaknya.
- **Peranti input.** {{ui:Tetapan}} › {{ui:Global}} › {{ui:Peranti input}} menetapkan apa yang dilakukan oleh pad sentuh, butang sisi tetikus, pen, tetikus 3D, pengawal permainan atau pengawal MIDI, untuk setiap aplikasi atau untuk satu aplikasi. Lihat [Guna pad sentuh, tetikus 3D atau pengawal](common:input-devices).
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Baris bar alat}} menawarkan {{ui:Balut}} (permulaan), {{ui:2 baris}} dan {{ui:1 baris}}; kumpulan yang tidak muat ditatal ke sisi. Lihat [Susun panel](common:arrange-panels).
- **Panel Masalah.** Panel amaran dan nota bersama kini membawa semakan stok pembekal di atas, di sebelah semakan lain.
- **Add-on.** Add-on mengikut senarai akaun anda. Lihat [Add-on dan senarai akaun anda](common:addons-basics).
- **Sambungkan AI anda.** CadCraft Studio ialah hab: sambungkan pembantu anda sekali untuk kesemua lapan aplikasi. Studio tidak mempunyai AI sendiri.

### Diperbetulkan dalam 0.8.1

- **Bahagian kelas DWG.** Bahagian kelas fail DWG dibaca sebagai jenis yang salah. Ini telah diperbetulkan dalam TakeoffCraft, dan dalam empat aplikasi lain.
- **Studio boleh menukar bahasa semasa berjalan.** Sebelum ini, Studio dan edisi terbungkusnya hanya dalam Bahasa Inggeris. Ini belum diuji dalam binaan desktop pada setiap platform; beritahu kami jika bahasa tidak bertukar.

### Belum ada dalam versi ini

- **Tidak ditandatangani kod.** Windows mungkin memberi amaran, dan pada Mac anda klik kanan dan pilih {{ui:Buka}} kali pertama. Kedai binaan (Microsoft Store, Google Play, App Store) sedang ditangguhkan, dan binaan iPad serta iPhone tidak dibina semula untuk 0.8.1.
- **Kemas kini Studio.** Pemasang Windows dan pakej Linux menyemak sekali sehari dan bertanya dahulu. Zip mudah alih hanya memberitahu anda, dan macOS serta APK tidak mengemas kini sendiri. .dmg macOS 0.8 mengikut keluaran.
- **Sambungkan AI anda.** Sambungan satu klik dalam Studio, penyambung AI yang dihoskan untuk pelayar, kunci API anda sendiri dalam Studio dan pakej MCP yang diterbitkan tidak dijanjikan dalam versi ini.
- **Kira semua.** Ia memerlukan simbol yang dilukis dengan cara yang sama seperti dalam petunjuk, dan simbol dengan dinding atau garisan panjang yang melintasinya boleh terlepas. Simbol bercermin tidak dijumpai, dan helaian tanpa skala yang dilukis pada saiz lain dicari pada saiz petunjuk. Semak penemuan pada helaian pertama sebelum mempercayai yang lain.
- **Stok pembekal.** Angka stok hanya setepat fail yang anda tambah. Semakan tidak sekali-kali meminta pembekal.
- **Bahasa.** Bar aplikasi Tamil melimpah.

Semua yang lain ada dalam [Belum dibina](topic:not-built-yet). Untuk keluaran sebelumnya, lihat [Perkara baharu dalam 0.7](topic:whats-new-0-7).
