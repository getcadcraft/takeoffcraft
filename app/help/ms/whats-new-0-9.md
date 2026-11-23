---
title: Perkara baharu dalam 0.9 (terdahulu)
summary: Baca panjang dalam meter, sentimeter atau milimeter, luas metrik dalam m2 dengan luas dinding, pratetap skala 1:75 dan 1:150, unit berat dan suhu, Lengkok dengan sepuluh kaedah, serta kursor langsung, Ikut dan senarai orang.
keywords: perkara baharu 0.9, keluaran terdahulu, perkara baharu, what's new, nota keluaran, changelog, 0.9, tunjukkan panjang sebagai, meter, sentimeter, milimeter, metrik, ikut global, unit, unit paparan, m2, meter persegi, luas dinding, pratetap skala, 1:75, 1:150, berat, kilogram, kg, tan, t, lb, suhu, celsius, fahrenheit, lengkok, kaedah lengkok, lengkok 3 titik, jejari, langsung, kursor, ikut, senarai orang, kelas, tip alat, susun atur, 0.8, 0.8.1, versi, ciri baharu, kira semua, petunjuk, petunjuk simbol, set penuh, ingatan harga, kerja lepas, harga biasa, pembekal, stok, masa penghantaran, pesanan balik, kekurangan, panel masalah, pembantu, bahasa, peranti input, baris bar alat, dwg
from: f4322ba2
---

Ini ialah perubahan dalam TakeoffCraft 0.9, berbanding 0.8.1. Ia keluaran kecil bagi aplikasi ini: panjang kini boleh dibaca dalam meter, sentimeter atau milimeter, luas dan skala metrik diurus dengan betul, dan Lengkok mempunyai sepuluh cara untuk melukis. Sesi Live juga menunjukkan siapa berada di mana.

## Baharu

### Baca panjang dalam meter, sentimeter atau milimeter

- **Tunjukkan panjang sebagai.** {{ui:Tetapan}} › {{ui:TakeoffCraft}} mempunyai {{ui:Show lengths as}} dengan {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm dan mm. {{ui:Follow Global}} menggunakan unit panjang metrik yang anda tandakan dalam {{ui:Tetapan}} › {{ui:Global}} › {{ui:Units}}, dan kaki-inci jika tiada yang ditandakan. Ia menukar cara panjang dibaca pada lukisan, dalam bar status dan dalam panel, termasuk ketinggian, kedalaman, ketebalan dan aras. Nombor tanpa unit yang ditaip dalam medan ketinggian dibaca mengikut unit yang dipaparkan.
- **Paparan sahaja.** Kuantiti, kos dan eksport dikira daripada panjang yang tepat. Pilihan 1/16, 1/8 dan 1/4 inci hanya muncul untuk kaki-inci. Lihat [Tunjukkan panjang dalam meter](topic:show-lengths-in-meters).
- **Unit berat.** Item {{ui:Typed quantity (no drawing)}} kini boleh dalam lb, TON, kg atau t, dan dihargakan mengikut unit.
- **Suhu.** Setiap item mempunyai medan {{ui:Temperature}} pilihan dalam penyunting item, ditaip dalam darjah C atau F. {{ui:Show temperatures as}} dalam {{ui:Tetapan}} › {{ui:TakeoffCraft}} menawarkan {{ui:Follow Global}}, °C atau °F.

### Luas dan skala untuk kerja metrik

- **Luas dalam m2 pada lukisan.** Luas yang diukur dengan item metrik kini menyatakan m2 pada tag lukisan dan panel tanda, serta dalam jadual, dan bukannya SF. Peraturannya: m2 apabila item dihargakan secara metrik atau panjang dipaparkan dalam m, cm atau mm, dan SF sebaliknya.
- **Luas dinding.** Item linear dengan ketinggian juga menunjukkan luas dinding (panjang didarab ketinggian) dalam senarai Item dan sebagai baris nota di bawah jadual kuantiti mengikut item.
- **Pratetap skala 1:75 dan 1:150.** Ia terdapat dalam senarai {{ui:Preset}} dalam kumpulan {{ui:Scale}}, yang kini mempunyai 32 skala. Lihat [Pratetap skala](topic:scale-presets).

### Lengkok dengan sepuluh kaedah

- Semasa {{ui:Arc}} dihidupkan (butang bar alat atau {{key:R}}), kotak {{ui:Arc method}} muncul dalam bar helaian: 3-Point, Start, Center, End, Start, Center, Angle, Start, Center, Length, Start, End, Angle, Start, End, Direction, Start, End, Radius, Center, Start, End, Center, Start, Angle dan Center, Start, Length. Sudut, panjang, jejari dan arah boleh diklik atau ditaip. Ia berfungsi dalam larian linear, kawasan dan potongan. Fail yang disimpan sebelum 0.9 dibuka dengan cara yang sama. Lihat [Lukis lengkok dengan sepuluh kaedah](topic:draw-arcs-ten-methods).

### Bekerja bersama

- **Lihat kursor satu sama lain.** Dalam sesi Live, penunjuk setiap orang dipaparkan pada helaian dengan nama dan warnanya, dengan kotak putus-putus mengelilingi tanda yang mereka pilih. Orang pada helaian lain disenaraikan dengan nama helaian itu. Lihat [Bekerja secara langsung dengan orang lain](topic:work-live).
- **Ikut seseorang, dan senarai orang.** Butang {{ui:People}} dalam sesi Live menyenaraikan setiap orang dengan alat yang mereka guna, helaian yang mereka berada dan bila kali terakhir mereka menyunting. {{ui:Follow}} menggerakkan pandangan anda seiring dengan mereka, dan hos boleh guna {{ui:Ask everyone to follow me}}. Lihat [Ikut rakan sepasukan dalam sesi Live](topic:follow-a-teammate).

## Dalam setiap aplikasi

- **Tip alat dan tip permulaan.** Teks apabila tuding ialah tip alat Bootstrap, dan tip permulaan boleh ditutup.
- **Jalur tab boleh skrol.** Jalur tab panel yang tidak muat akan skrol dan bukannya terpotong.
- **Tajuk tab.** Tab pelayar membaca `<document> - TakeoffCraft | CadCraft`.
- **Susun atur.** Senarai susun atur dalam {{ui:Tetapan}} ialah senarai juntai bawah yang memaparkan susun atur yang dipilih.
- **Bahasa.** Bahasa yang anda pilih kini sampai kepada perkataan yang dicetak oleh halaman itu sendiri, seperti Baharu, Buka dan Simpan. Bahasa selain Inggeris ialah draf mesin sehingga penutur asli telah membacanya.

## Had yang jujur

- Paparan panjang, unit berat dan suhu serta pratetap baharu telah disemak melalui ujian dan dalam halaman. Setiap panel pada setiap unit belum disemak secara manual.
- Senarai orang belum disemak secara manual dengan kelas sebenar guru dan pelajar.
- Bahasa selain Inggeris ialah draf mesin.
- Pemasang Windows tidak ditandatangani kod (Maklumat lanjut, kemudian Jalankan juga). Imej cakera macOS tidak dinotarikan (klik kanan, kemudian Buka).

## Terdahulu: 0.8 dan 0.8.1

Ini ialah perubahan dalam TakeoffCraft 0.8 (dikeluarkan 2026-11-01) dan 0.8.1 (2026-11-02), berbanding 0.7. Satu petunjuk simbol kini boleh dikira merentasi seluruh set sekaligus, satu pengukuran kuantiti baharu boleh bermula daripada harga kerja lepas anda, dan pengukuran kuantiti boleh disemak dengan stok pembekal. 0.8.1 ialah keluaran pembetulan.

### Baharu

**Kira semua dalam set**

- **Kotakkan petunjuk sekali.** {{ui:Count everything}} dalam bar alat membaca petunjuk simbol: seret kotak di sekeliling simbol dan nama yang dicetak di sebelahnya. Setiap simbol disenaraikan dengan gambarnya dan namanya, dan nama itu menjadi nama item. Nyahtanda apa yang anda tidak mahu, kemudian pilih {{ui:Kira pada N helaian}}. Satu bar menunjukkan helaian yang sedang dicari, {{ui:Batal}} menghentikan larian, dan halaman kekal boleh digunakan.
- **Setiap helaian dalam satu larian.** Setiap simbol dikira pada setiap helaian yang dibuka. Helaian yang dilukis pada skala lain dicari pada skala itu, dan simbol didapati walaupun dipusing mengikut mana-mana sudut tegak. Simbol petunjuk itu sendiri tidak dikira pada helaiannya.
- **Semak sebelum apa-apa ditambah.** Setiap jumlah mempunyai pautan bagi setiap helaian ("E-103: 4") yang membawa anda ke helaian itu. Klik kotak pada penemuan untuk meninggalkannya, dan klik lagi untuk memulihkannya. Tahap padanan (50% hingga 100%) hanya menapis apa yang ditemui; tiada carian semula dibuat.
- **Satu langkah buat asal.** {{ui:Tambah N tanda}} membuat satu item kiraan bagi setiap simbol dengan tanda pada setiap penemuan. Nama yang sudah menjadi item kiraan anda digunakan semula. {{key:Ctrl+Z}} membatalkan setiap item dan tanda. Apa yang anda terima juga menyumbang kepada {{ui:Dipelajari}}.
- **Simbol pada sebarang sudut.** Tanda {{ui:Simbol pada sebarang sudut}} sebelum anda mengira untuk turut mencari simbol yang dipusing pada sudut yang bukan sudut tegak. Carian kemudian memusingkan setiap simbol setiap 15 darjah, dan simbol yang tidak bulat boleh mengambil masa sehingga enam kali ganda.
- **Apa ia.** Pemadanan simbol biasa pada helaian anda sendiri, tanpa model terlatih, dan tiada apa-apa meninggalkan komputer anda. Pada set 200 helaian rekaan, ia mengambil masa 9.4 saat dari awal hingga akhir dalam Chrome pada komputer desktop yang pantas; set pelan sebenar akan lebih perlahan. Lihat [Kira semua dalam set](topic:count-everything).

**Ingatan harga daripada kerja anda sendiri**

- **TakeoffCraft mengingati kadar anda.** Apabila anda menyimpan pengukuran kuantiti, setiap item berharga yang digunakan diingati mengikut nama dan jenis: kadar bahan, kadar upah, pembaziran dan unit. 12 kerja terakhir disimpan bagi setiap nama. Ia disimpan pada komputer ini bersebelahan pustaka Harga, tidak pernah di dalam fail pengukuran kuantiti, dan tiada apa-apa dihantar ke mana-mana.
- **Mulakan pengukuran kuantiti baharu daripadanya.** {{ui:Harga}} pada bar alat menunjukkan, bagi setiap item, kadar kerja terakhir, kadar biasa dan julatnya. {{ui:Guna yang terakhir}} atau {{ui:Guna yang biasa}} menghargakan satu item, dan {{ui:Harga N item tanpa harga daripada ingatan}} mengisi setiap item yang belum berharga. Setiap penggunaan ialah satu langkah buat asal.
- **Kerja lama.** {{ui:Belajar daripada pengukuran kuantiti lepas…}} mengingati item berharga bagi pengukuran kuantiti yang disimpan (.json).
- **Lihat, ubah, lupakan.** {{ui:Semua yang diingati}} menyenaraikan setiap nama; butang padam melupakan satu, dan {{ui:Kosongkan semua harga}} melupakan semuanya. Nyahtanda {{ui:Ingat harga saya apabila saya simpan pengukuran kuantiti}} untuk berhenti. Harga bagi setiap unit tidak pernah diletakkan pada item bagi setiap kaki. Lihat [Ingatan harga daripada kerja lepas anda](topic:price-memory).

**Stok pembekal dan masa penghantaran**

- **Semak dengan senarai pembekal.** {{ui:Bekalan}} pada bar alat mengambil senarai stok pembekal ({{ui:Tambah fail pembekal…}}), CSV atau hamparan, dan menyemak apa yang diperlukan pengukuran kuantiti, termasuk pembaziran, dengannya. Sehingga lima fail disimpan. Tiada apa-apa dihantar dan tiada apa-apa meminta pembekal: anda yang membawa fail.
- **Apa yang ia nyatakan.** Item kurang dahulu: "Kurang 120 EA", "Tempoh penghantaran 21 hari", "Dalam pesanan balik", "Unit berbeza", "Tiada angka stok" atau "Ada stok". {{ui:Tempoh menunggu terpanjang yang dikehendaki (hari)}} bermula pada 14.
- **Senarai pesanan.** {{ui:Senarai pesanan (CSV)}} memuat turun item yang kurang, dengan jumlah kekurangan, pembekal dan masa penghantaran.
- **Harga ke dalam Pustaka.** Jika fail itu mempunyai harga, {{ui:Harga ke dalam Pustaka}} menetapkan harga bahan bagi setiap entri Pustaka dengan nama dan unit yang sama. Harga semula daripada Pustaka untuk membawanya masuk ke dalam pengukuran kuantiti.
- **Dalam panel Masalah.** Kekurangan ialah amaran dan tempoh menunggu yang panjang ialah nota, di bawah "Stok pembekal". Anda boleh menerima satu dengan sebab, dan sebab itu disimpan dalam pengukuran kuantiti. Lihat [Semak stok pembekal dan masa penghantaran](topic:supplier-stock).

**Pembantu AI**

- **Alatan untuk ketiga-tiganya.** Dengan pembantu dibenarkan dalam {{ui:Tetapan}}, pembantu boleh membaca petunjuk (`legend_open`), menjalankan kiraan (`legend_count_start`, kemudian `legend_count_status` dan `legend_count_result`) dan menambahnya (`legend_count_add`, yang boleh pratonton dahulu). Ia boleh membaca harga yang diingati (`prices_list`) dan menghargakan item daripadanya (`prices_apply`, yang boleh pratonton dahulu), dan membaca semakan pembekal (`supply_check`). Menambah fail pembekal kekal sebagai tugas anda. Lihat [Guna TakeoffCraft dengan pembantu AI](topic:use-with-ai-assistants).

**Dalam setiap aplikasi**

- **Bahasa.** Lima puluh empat bahasa semuanya; sepuluh adalah baharu (Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili dan Uzbek). Bahasa selain Inggeris ialah draf mesin sehingga penutur asli telah membacanya.
- **Peranti input.** {{ui:Tetapan}} › {{ui:Global}} › {{ui:Peranti input}} menetapkan apa yang dilakukan oleh pad sentuh, butang sisi tetikus, pen, tetikus 3D, pengawal permainan atau pengawal MIDI, untuk setiap aplikasi atau untuk satu aplikasi. Lihat [Guna pad sentuh, tetikus 3D atau pengawal](common:input-devices).
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:General}} › {{ui:Baris bar alat}} menawarkan {{ui:Balut}} (permulaan), {{ui:2 rows}} dan {{ui:1 row}}; kumpulan yang tidak muat akan skrol ke sisi. Lihat [Susun panel](common:arrange-panels).
- **Panel masalah.** Panel bersama bagi amaran dan nota kini membawa semakan stok pembekal di atas, di sebelah semakan lain.
- **Add-on.** Add-on mengikut senarai akaun anda. Lihat [Add-on dan senarai akaun anda](common:addons-basics).
- **Sambungkan AI anda.** CadCraft Studio ialah hab: sambungkan pembantu anda sekali untuk kesemua lapan aplikasi. Studio tidak mempunyai AI sendiri.

### Diperbaiki dalam 0.8.1

- **Bahagian kelas DWG.** Bahagian kelas fail DWG dibaca sebagai jenis yang salah. Ini diperbaiki dalam TakeoffCraft, dan dalam empat aplikasi lain.
- **Studio boleh tukar bahasa semasa ia berjalan.** Sebelum ini, Studio dan edisi pakejnya hanya dalam bahasa Inggeris. Ini belum diuji dalam binaan desktop pada setiap platform; beritahu kami jika bahasa tidak bertukar.

### Belum ada dalam versi ini

- **Tidak ditandatangani kod.** Windows mungkin memberi amaran, dan pada Mac anda klik kanan dan pilih {{ui:Terbuka}} kali pertama. Binaan kedai (Microsoft Store, Google Play, App Store) ditangguhkan, dan binaan iPad dan iPhone tidak dibina semula untuk 0.8.1.
- **Kemas kini Studio.** Pemasang Windows dan pakej Linux menyemak sekali sehari dan bertanya dahulu. Zip mudah alih hanya memberitahu anda, dan macOS serta APK tidak mengemas kini sendiri. Fail .dmg macOS 0.8 mengikut keluaran.
- **Sambungkan AI anda.** Sambungan sekali klik dalam Studio, penyambung AI yang dihoskan dalam pelayar, kunci API anda sendiri dalam Studio dan pakej MCP yang diterbitkan tidak dijanjikan dalam versi ini.
- **Kira semua.** Ia memerlukan simbol yang dilukis dengan cara yang sama seperti dalam petunjuk, dan simbol yang mempunyai dinding atau garisan panjang melaluinya boleh terlepas. Simbol yang dicerminkan tidak dijumpai, dan helaian tanpa skala yang dilukis pada saiz lain dicari pada saiz petunjuk. Semak penemuan pada helaian pertama sebelum mempercayai yang lain.
- **Stok pembekal.** Angka stok hanya setakat mana terkininya fail yang anda tambah. Semakan tidak pernah meminta pembekal.
- **Bahasa.** Bar aplikasi bagi bahasa Tamil melimpah.

Segala yang lain ada dalam [Belum dibina](topic:not-built-yet). Untuk keluaran sebelum ini, lihat [Perkara baharu dalam 0.7](topic:whats-new-0-7).
