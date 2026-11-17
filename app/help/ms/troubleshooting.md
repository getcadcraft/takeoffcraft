---
title: Penyelesaian masalah
summary: Gejala, punca dan penyelesaian untuk mesej dan kejutan yang mungkin anda temui dalam TakeoffCraft, dipetik seperti yang dipaparkan oleh app.
keywords: masalah, ralat, tidak berfungsi, betulkan, bantuan, ditolak, tidak mengukur, tiada skala, penanda hilang, eksport gagal, luar talian, sentuh
from: cd319c9b
---

TakeoffCraft menerangkan kebanyakan penolakan dalam bar status di bahagian bawah tetingkap. Cari mesej di bawah.

## Membuka fail

| Mesej atau gejala | Punca | Penyelesaian |
|---|---|---|
| Pembaca PDF tidak dapat dimuatkan. Muat semula halaman untuk mencuba lagi. | Pembaca PDF app tidak dimuatkan, biasanya kerana anda luar talian dan app tidak pernah disimpan untuk kegunaan luar talian. | Sambung semula dan muat semula. Kemudian pilih {{ui:Save for offline}} dan tunggu {{ui:Offline ready}}; lihat [Bekerja luar talian](common:offline). |
| (nama) dilindungi kata laluan. Buka salinan yang tidak dilindungi. | PDF memerlukan kata laluan untuk dibuka. | Minta salinan yang tidak dilindungi, atau alih keluar kata laluan dalam program PDF yang anda percayai. |
| (nama) tidak dapat dibaca sebagai PDF (…) | Fail itu rosak atau bukan PDF sebenar. | Muat turun semula, atau simpan semula daripada program yang menghasilkannya. |
| (nama) sudah dibuka. | PDF yang sama (kandungan yang sama) sudah dibuka. | Tiada apa yang perlu dibuat. |
| TakeoffCraft membuka PDF dan projek .takeoff.json. Dilangkau: … | Jenis fail lain dibuang. | Tukar lukisan kepada PDF dahulu. |
| Tiada apa berlaku apabila saya lepaskan fail | Fail dilepaskan di luar tetingkap pelayar, atau pelayar membuka PDF dalam tab baharu. | Lepaskan pada halaman TakeoffCraft itu sendiri; bingkai "Lepaskan PDF atau .takeoff.json" menunjukkan bila ia akan berfungsi. |
| Membuka set yang besar mengambil masa | Setiap PDF dibaca sepenuhnya untuk dikenal pasti. | Tunggu mesej "Membuka (nama)…" hilang. Imej kecil terisi apabila anda menatal. |

## Mengukur

| Mesej atau gejala | Punca | Penyelesaian |
|---|---|---|
| Buka PDF dahulu. | Tiada helaian dibuka. | Buka PDF. |
| Helaian ini belum ada skala, jadi ia tidak boleh diukur. Pilih skala pratetap atau tentukur dahulu (kiraan berfungsi tanpanya). | Alat linear, luas, bulatan dan potongan memerlukan skala. | [Tetapkan skala](topic:set-the-scale). |
| Buat item linear dahulu (namakannya di bawah Item), kemudian klik pada helaian. | Tiada item jenis itu. | Isi borang {{ui:New item}} yang dibuka, dan pilih {{ui:Add}}. |
| Pilih item untuk diukur dahulu (panel Item). | Item semasa telah dipadam. | Klik item di bawah {{ui:Items}}. |
| Larian memerlukan sekurang-kurangnya dua titik. | Anda tamat selepas satu klik. | Klik sekurang-kurangnya dua titik. |
| Kawasan memerlukan sekurang-kurangnya tiga titik. | Terlalu sedikit bucu. | Klik sekurang-kurangnya tiga bucu. |
| Garis luar bersilang sendiri, jadi luasnya akan salah. Lukis semula tanpa bersilang. | Bentuk angka lapan. | Lukis sebagai dua kawasan, atau pusingkan sekeliling tepi mengikut urutan. |
| Titik-titik itu tidak melingkungi sebarang kawasan. | Semua titik berada pada satu garisan. | Klik bucu yang melingkungi ruang. |
| Pilih penanda kawasan dahulu (alat Pilih), kemudian pilih Potongan dan lukis lubang di dalamnya. | {{ui:Cut-out}} memerlukan kawasan yang dipilih. | Tekan {{key:V}}, klik kawasan, kemudian {{key:X}}. |
| Potongan mesti berada sepenuhnya di dalam kawasan. | Lubang bersilang atau keluar daripada garis luar. | Lukis lubang di dalam kawasan. |
| Potongan tidak boleh bertindih antara satu sama lain. | Dua lubang bertindih. | Lukis satu lubang mengelilingi kedua-duanya, atau asingkannya. |
| … Titik dikembalikan. | Bucu yang diseret akan menjadikan garis luar bersilang sendiri atau menolak lubang keluar. | Seret ke tempat yang mengekalkan bentuk yang sah. |
| Klik titik pada tepi bulatan, jauh dari pusatnya. | Klik kedua terlalu dekat dengan pusat. | Klik lebih jauh ke luar. |
| Klik menggerakkan helaian dan bukannya menambah titik | Penuding bergerak lebih daripada beberapa piksel semasa butang ditekan; ia dikira sebagai seretan. | Klik tanpa bergerak, terutamanya pada pad jejak. |
| Shift tidak melekap | Anda meletakkan titik pada lengkok, atau melukis bulatan. | Snap 45° hanya terpakai pada segmen lurus. |
| Titik melompat ke garisan berdekatan | Snap ke garisan lukisan dihidupkan. | Zum masuk untuk klik antara garisan, atau tekan {{key:F3}} untuk mematikan Snap. |
| Tiada penanda snap muncul | Snap dimatikan, helaian ialah imbasan, atau alat tidak melekap (Kira, Kiraan auto, menampal). | Tekan {{key:F3}}; pada imbasan tiada garisan untuk dilekapkan. |
| Panjangnya salah | Skala salah (sering berlaku pada PDF yang diubah saiz dengan pratetap). | Gunakan {{ui:Check}} pada dimensi yang diketahui, kemudian {{ui:Calibrate}}. |

## Skala

| Mesej atau gejala | Punca | Penyelesaian |
|---|---|---|
| Pilih dua titik yang lebih jauh jaraknya. | Titik penentukuran hampir bertindih. | Tentukur pada dimensi yang lebih panjang. |
| Mesej dalam kotak dialog tentukur, seperti "That distance could not be read" | Jaraknya dalam bentuk yang TakeoffCraft tidak dapat baca. | Lihat [Entri panjang, kadar dan peratus](topic:entry-formats). |
| Helaian ini belum ada skala, jadi tiada apa untuk disemak. Tentukurkannya, atau pilih pratetap. | {{ui:Check}} pada helaian yang tiada skala. | Tetapkan skala dahulu. |
| Senarai {{ui:Preset}} dilorekkan | Tiada helaian dibuka. | Buka PDF. |

## Kuantiti dan formula

| Mesej atau gejala | Punca | Penyelesaian |
|---|---|---|
| Tidak lengkap: … (tidak termasuk dalam jumlah) | Ralat formula, atau penanda pada helaian yang tiada skala. | Lihat [Baca kuantiti dan anggaran](topic:read-quantities#the-incomplete-warning). |
| +(n) tanpa skala di sebelah item | Sebahagian penandanya berada pada helaian yang tiada skala. | Berikan helaian itu skala. |
| Ralat formula: … | Formula tidak dapat dikira. | Lihat [Bahasa formula](topic:formulas#errors). |
| Item ini mempunyai penanda, jadi jenisnya tidak boleh ditukar. | Jenis dikunci apabila ada penanda. | Buat item baharu jenis yang lain dan lukis semula penanda dengannya. |
| Item memerlukan nama. | Medan nama dikosongkan. | Taip nama. |
| Taip jumlah seperti 12.50. / Taip peratusan seperti 10 atau 7.5. | Kadar atau pembaziran tidak dapat dibaca. | Lihat [Entri panjang, kadar dan peratus](topic:entry-formats). |
| Jumlah kelihatan dua kali ganda | Item mempunyai kadarnya sendiri dan komponen yang membawa kos yang sama. | Tetapkan kadar item itu kepada 0 apabila komponennya membawa kos. |
| Penanda item ini berada pada PDF yang tidak dibuka. | Anda mengklik item yang semua penandanya berada pada PDF yang belum anda buka. | Buka PDF tersebut; namanya disenaraikan di bawah {{ui:Sheets}}. |

## Kiraan auto

| Mesej atau gejala | Punca | Penyelesaian |
|---|---|---|
| Kotak itu terlalu kecil. Lukis di sekeliling keseluruhan simbol. | Kotak itu sangat kecil. | Zum masuk dan kotakkan keseluruhan simbol. |
| Kotak itu hampir kosong. Lukis di sekeliling simbol. | Kotak hanya mengandungi kertas. | Kotakkan simbol itu sendiri. |
| Tiada padanan. Turunkan peluncur padanan, atau kotakkan simbol dengan lebih ketat. | Tiada yang mencapai markah yang cukup tinggi. | Kotakkan simbol dengan ketat, atau seret peluncur {{ui:Match}} lebih rendah. |
| Terlalu banyak padanan, termasuk simbol yang salah | Simbol yang serupa mendapat markah hampir dengan simbol sebenar. | Naikkan peluncur {{ui:Match}} dan klik kotak yang salah untuk menolaknya. |
| Padanan hilang pada helaian lain | Helaian tersebut melukis simbol pada saiz lain, atau pada sudut yang bukan langkah 90°. | Cari helaian tersebut dengan kotak yang dilukis di sana, atau kira dengan tangan. |
| (n) helaian terlalu besar untuk dicari pada saiz simbol ini. | Helaian akan menjadi terlalu besar pada saiz kerja. | Kotakkan simbol yang lebih besar, atau kira helaian itu dengan tangan. |
| Carian gagal: … | Carian latar belakang berhenti. | Cuba lagi; muat semula halaman jika ia berulang (simpan dahulu). Luar talian, ia berfungsi hanya apabila bar app menunjukkan {{ui:Offline ready}}. |
| Menyeret melukis kotak dan bukannya menggerakkan helaian | Begitulah cara {{ui:Auto count}} berfungsi. | Tahan {{key:Space}} dan seret, atau seret dengan butang tengah. |

## Menyimpan dan mengeksport

| Mesej atau gejala | Punca | Penyelesaian |
|---|---|---|
| Tiada apa untuk dieksport lagi: buat item dan ukurnya. | Tiada item. | Buat item dahulu. |
| Tiada penanda pada PDF yang dibuka lagi. | {{ui:Marked PDF}} tiada apa untuk dilukis pada PDF yang dibuka. | Buka PDF yang mempunyai penanda. |
| PDF ini dilindungi kata laluan atau disulitkan, jadi salinan bertanda tidak boleh ditulis. … | PDF disulitkan. | Eksport {{ui:XLSX}} sebaliknya, atau gunakan salinan PDF yang tidak disulitkan (ia kemudian memerlukan pengukuran kuantitinya sendiri, kerana ia fail yang berbeza). |
| PDF bertanda tidak dapat ditulis: … | Selalunya: luar talian, dan app tidak disimpan untuk kegunaan luar talian, jadi penulis PDF tiada. | Pergi dalam talian dan pilih {{ui:Marked PDF}} semula. Untuk mengelakkannya, pilih {{ui:Save for offline}} dan tunggu {{ui:Offline ready}}. |
| Hanya satu PDF bertanda dimuat turun | Pelayar menyekat beberapa muat turun serentak. | Benarkan berbilang muat turun untuk laman ini, dan eksport semula. |
| (fail) bukan projek TakeoffCraft (ia bukan JSON yang sah). / Ini bukan fail projek TakeoffCraft. | Fail yang salah, atau yang rosak. | Pilih fail `.takeoff.json`. |
| Projek ini disimpan oleh TakeoffCraft yang lebih baharu. Buka di sana. | Fail itu datang daripada binaan yang lebih baharu. | Buka dalam binaan yang lebih baharu. |
| (n) penanda rosak dan ditinggalkan. | Sebahagian fail rosak atau disunting dengan tangan. | Bahagian lain dibuka. Lukis semula penanda yang hilang, atau buka salinan yang lebih lama. |
| Penanda hilang selepas dibuka semula | PDF tidak dibuka, atau salah satu daripadanya berubah. | Lihat [Simpan dan buka semula pengukuran kuantiti](topic:save-and-reopen#when-a-pdf-has-changed). |
| Pelayar bertanya "Leave site?" | Ada perubahan yang belum disimpan. | Kekal, dan simpan dengan {{key:Mod+S}}. |

## Kekunci dan tetikus

| Gejala | Punca | Penyelesaian |
|---|---|---|
| Kekunci huruf tidak berfungsi | Kursor berada dalam medan (carian, penyunting item, jadual). | Klik pada helaian, atau tekan {{key:Tab}} untuk keluar daripada medan. |
| Roda menzum dan bukannya menatal | Roda sentiasa menzum helaian. | Seret untuk menggerakkan. |
| Seluruh halaman menjadi lebih besar atau kecil | Zum pelayar ({{key:Mod+Plus}} atau {{key:Mod+Minus}}). | Tekan {{key:Mod+0}}. Zum helaian dengan roda atau {{key:Plus}} dan {{key:Minus}} tanpa pengubah suai. |
| Penanda hilang apabila saya tekan Backspace | Backspace memadam penanda yang dipilih apabila anda tidak sedang melukis. | {{key:Mod+Z}} mengembalikannya. |
| Klik kanan tidak tamat pada Mac | Control-klik tiba sebagai klik biasa. | Gunakan klik dua jari dengan klik sekunder dihidupkan, atau tekan {{key:Enter}}. |

## Skrin sentuh

Pada skrin sentuh:

- **Ketik** meletakkan titik (atau memilih penanda dengan {{ui:Select}}). Satu jari yang menyeret menggerakkan.
- **Dua jari** mencubit untuk menzum tentang titik di antara mereka, dan menggerakkan apabila ia bergerak bersama. Meletakkan jari kedua membatalkan apa yang dimulakan oleh jari pertama, jadi cubitan tidak pernah meninggalkan titik.
- **Tamatkan** larian atau garis luar dengan **tekan lama** (klik kanan), **ketik dua kali**, atau {{ui:Finish}} di bar di bahagian bawah helaian. Bar yang sama mempunyai {{ui:Back}} (ambil balik titik terakhir) dan {{ui:Cancel}}. Kawasan juga ditutup dengan mengetik titik pertama.
- Jari mendapat sasaran yang lebih besar: titik melekap, menutup dan memilih dari lebih jauh, dan pemegang bucu lebih besar.

Memasukkan panjang memerlukan papan kekunci; papan kekunci pada skrin berfungsi apabila kotak {{ui:Type}} difokuskan.

Pada tablet, papan kekunci dan tetikus atau pad jejak menjadikan pengukuran kuantiti jauh lebih mudah.

## Bekerja luar talian

| Butang atau gejala | Punca | Penyelesaian |
|---|---|---|
| {{ui:Could not save}} | Sebahagian fail app tidak dimuat turun semasa menyimpan untuk kegunaan luar talian. | Semak sambungan anda dan pilih butang itu semula. |
| {{ui:Offline not available}} | Tetingkap persendirian dan beberapa komputer terurus menyekat salinan luar talian. | Gunakan tetingkap biasa, atau pelayar lain. |
| "Saving…" tidak pernah bermula | Anda luar talian; menyimpan memerlukan sambungan. | Simpan semasa dalam talian. |
| App lama selepas kemas kini | Salinan luar talian itu daripada hari yang lebih awal. | Dalam talian, pilih {{ui:Offline ready}}, kemudian {{ui:Save again (get the newest version)}}. |
| Anda mahu ruang semula | Salinan luar talian kira-kira 6 MB. | Pilih {{ui:Offline ready}}, kemudian {{ui:Remove the offline copy}}. |

Lihat [Bekerja luar talian](common:offline).

## Masih belum berjaya

Muat semula halaman jika app berhenti bertindak balas. Pengukuran kuantiti anda hilang apabila dimuat semula melainkan anda telah menyimpannya, jadi simpan dahulu dengan {{key:Mod+S}} jika boleh. Untuk soalan pelayar, lihat [Pelayar dan komputer](common:browsers).
