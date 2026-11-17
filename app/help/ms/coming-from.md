---
title: Datang dari perisian pengukuran kuantiti lain
summary: Cara tabiat program pengukuran kuantiti khusus dan alat markup PDF dipetakan kepada TakeoffCraft, serta perbezaan yang sering menyusahkan pengguna.
keywords: beralih, berpindah, syarat, bahagian, alat ukur, senarai markup, pautan kuantiti, tabiat pengukuran kuantiti, perbezaan, banding
from: 12004ce5
---

Jika anda pernah membuat pengukuran kuantiti dalam PlanSwift atau dengan alat ukur dalam Bluebeam Revu, kebanyakan TakeoffCraft akan terasa biasa: satu set pelan, skala bagi setiap helaian, perkara yang anda ukur, dan jumlah yang dihargai. Cara bahagian-bahagiannya bersambung berbeza di beberapa tempat, dan tempat-tempat itu diterangkan di bawah.

Jika anda biasa dengan PlanSwift atau On-Screen Takeoff, pilih gaya menu {{ui:Meja pengukuran kuantiti}} dalam {{ui:Tetapan}} › {{ui:TakeoffCraft}} › {{ui:Menu, kekunci dan tetikus}}: bar menu dengan Fail, Sunting, Lihat, Skala, Pengukuran kuantiti, Item, Markup dan Eksport di atas baris alat pengukuran kuantiti, dengan pratetap skala pada bar helaian. Lihat [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse).

## Tabiat yang dipetakan

| Anda biasa dengan | Dalam TakeoffCraft |
|---|---|
| Membuka kerja atau projek yang menyimpan pelan (PlanSwift) | Buka PDF dan fail `.takeoff.json` projek secara bersebelahan. Projek hanya menyimpan pengukuran kuantiti; PDF kekal sebagai fail anda sendiri. |
| Senarai markup dengan nota, awan dan serlahan (Bluebeam) | {{ui:Markup}} pada bar helaian: nota, awan dan serlahan dengan status (Terbuka, Dijawab, Ditutup), disenaraikan di bawah **Markup**, dan dilukis dalam {{ui:PDF ditanda}}. Lihat [Nota, awan dan serlahan](topic:markups). |
| Ukuran yang disimpan sebagai markup dalam PDF (Bluebeam) | Pengukuran kuantiti berada dalam fail `.takeoff.json`. {{ui:PDF ditanda}} menulis salinan dengan pengukuran kuantiti dilukis di atasnya, untuk dikongsi; {{ui:PDF dengan pengukuran kuantiti di dalamnya}} menulis salinan yang membawa pengukuran kuantiti, untuk dibuka semula dalam TakeoffCraft. |
| Item pengukuran kuantiti (PlanSwift), alat ukur tersuai yang disimpan dalam Tool Chest (Bluebeam) | **Item** di bawah {{ui:Item}}: nama, jenis, warna, unit, ketinggian atau kedalaman, pembaziran, kadar. |
| Bahagian dan himpunan dengan formula (PlanSwift) | {{ui:Himpunan}} item: komponen dengan formula menggunakan `L H A N P`. |
| Menetapkan skala halaman, atau menentukur (kedua-duanya) | Senarai {{ui:Pratetap}} atau {{ui:Tentukur}} dalam kumpulan {{ui:Skala}}, bagi setiap helaian. {{ui:Semak}} mengukur dimensi yang diketahui. |
| Menggunakan satu skala pada julat halaman | Belum ada: tetapkan setiap helaian. |
| Viewport dengan skala berbeza pada satu helaian (Bluebeam) | Belum ada: satu skala bagi setiap helaian. |
| Alat polylength dan luas (Bluebeam), pengukuran kuantiti linear dan luas (PlanSwift) | {{ui:Linear}} ({{key:L}}) dan {{ui:Luas}} ({{key:A}}). |
| Menahan Shift untuk garisan lurus | {{key:Shift}} melekap pada langkah 45°, idea yang sama. |
| Melekap pada garisan lukisan | Dihidupkan secara lalai: hujung, titik tengah, persilangan dan titik terdekat pada garisan, dengan {{key:F3}} untuk mematikannya, seperti dalam program CAD. |
| Alat kiraan (kedua-duanya) | {{ui:Kira}} ({{key:C}}). |
| Carian visual untuk simbol (Bluebeam) | {{ui:Kiraan auto}} ({{key:S}}): kotak satu simbol, semak, kemudian tambah. |
| Potongan atau tolakan dalam luas | {{ui:Potongan}} ({{key:X}}) pada luas yang dipilih, dan potongan bulat. |
| Tolakan pada larian linear | Lukis larian lurus merentasinya dan tekan {{key:E}} ({{ui:Tolak}}) untuk bukaan. Lihat [Ukur larian linear](topic:measure-linear). |
| Segmen lengkok dalam polyline | {{ui:Lengkok}} ({{key:R}}): klik satu titik pada lengkung, kemudian hujungnya. |
| Senarai Markup dengan lajur kuantiti (Bluebeam) | Jadual {{ui:Kuantiti}}, {{ui:Mengikut item}} atau {{ui:Mengikut helaian}}. |
| Grid anggaran dengan harga (PlanSwift) | Jadual yang sama: pembaziran, bahan dan upah bagi setiap unit, jumlah lanjutan, {{ui:Jumlah kerja}}. |
| Eksport ke Excel | {{ui:XLSX}} dengan formula langsung, atau {{ui:CSV}}. |
| Escape untuk menghentikan alat | {{key:Esc}} membatalkan dan kembali ke {{ui:Pilih}}. |
| Klik kanan untuk selesai | Klik kanan menyelesaikan larian atau menutup luas di sini juga. Tiada menu klik kanan. |

## Perbezaan yang menyusahkan pengguna

**Pengukuran kuantiti tidak berada di dalam PDF anda.** Tiada apa yang anda lakukan mengubah PDF anda. Simpan fail `.takeoff.json` dan simpankannya bersama lukisan. Menghantar PDF ditanda kepada seseorang tidak menghantar pengukuran kuantiti yang boleh disunting: hantar fail projek dan PDF asal, atau [PDF dengan pengukuran kuantiti di dalamnya](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF dipadankan mengikut kandungan, bukan mengikut nama.** Helaian yang disemak dan disimpan atas nama fail lama ialah fail baharu kepada TakeoffCraft, tanpa skala dan tanpa tanda. Tanda lama anda kekal pada versi lama dan terus dikira. Lihat [Simpan dan buka semula pengukuran kuantiti](topic:save-and-reopen#when-a-pdf-has-changed).

**Tanda yang tidak berskala ditinggalkan, bukan dikira sebagai sifar.** Jika helaian tiada skala, larian dan luasnya tidak dikira, dan jadual menunjukkan "Tidak lengkap". Dalam banyak program anda hanya akan nampak 0. Lihat [Tetapkan skala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Tiada tekaan saiz halaman.** Pratetap menganggap PDF dicetak pada saiz penuh. PDF separuh saiz atau "fit to page" memerlukan {{ui:Tentukur}}. Sentiasa gunakan {{ui:Semak}}.

**Satu item, satu jenis utama, lebih jika anda mahu.** Item ialah linear, luas atau kiraan, dan jenisnya dikunci apabila ia mempunyai tanda. Syarat yang memberi anda kedua-dua luas dan perimeternya ialah item luas: perimeternya ialah pemboleh ubah `P`. Dinding yang mempunyai panjang dan luas ialah item linear dengan ketinggian. Bagi item berbilang syarat, seperti bilik dengan lantai, tapak dan pintu, tandakan jenis lain di bawah {{ui:Ukur juga}}: setiap satu dihargai pada baris sendiri. Lihat [Satu item, beberapa jenis tanda](topic:create-items#one-item-several-kinds-of-marks).

**Formula berjalan pada jumlah.** Formula himpunan menggunakan jumlah item merentasi setiap helaian, bukan setiap larian secara berasingan. `N` (bilangan larian atau luas) wujud untuk tambahan bagi setiap larian, seperti satu tiang tambahan bagi setiap dinding.

**Perimeter termasuk potongan.** `P` bagi sesuatu luas menambah tepi lubangnya. Lihat [Ukur luas dengan potongan](topic:measure-areas#read-the-area).

**Seret untuk pan.** Seretan butang kiri pada helaian melakukan pan, dalam setiap alat kecuali {{ui:Kiraan auto}}. Anda tidak perlu bertukar kepada alat pan. Roda tetikus melakukan zum; ia tidak menatal.

**Salinan pemulihan, bukan awan.** TakeoffCraft menyimpan salinan kerja anda dalam pelayar ini dan menawarkannya semula selepas ranap ([Jika tab atau pelayar berhenti](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), tetapi pengukuran kuantiti adalah milik anda untuk disimpan: {{key:Mod+S}}. Simpanan awan belum tersedia.

**Semuanya berada dalam pelayar.** Tiada apa untuk dipasang, dan pelan tidak pernah dimuat naik. Bagi aplikasi desktop, TakeoffCraft datang dalam CadCraft Studio, bersama tujuh aplikasi lain.

## Belum ada di sini

Zon skala setiap helaian belum dibina. Lihat [Apa yang belum dibina](topic:not-built-yet) untuk senarai lengkap dan apa yang perlu dilakukan sebaliknya.
