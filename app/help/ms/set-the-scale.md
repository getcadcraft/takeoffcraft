---
title: Tetapkan skala
summary: Beri setiap helaian skala dengan pratetap atau dengan menentukur pada dimensi yang diketahui, semak, dan fahami mengapa helaian tanpa skala ditinggalkan daripada jumlah.
keywords: kesan skala, baca skala, skala daripada teks, semua helaian, skala, tentukur, pratetap, semak skala, sahkan, dimensi diketahui, tanpa skala, tiada skala, nisbah, tetapkan skala
from: 8f0148e6
---

Setiap helaian mempunyai skalanya sendiri. Anda menetapkannya, atau membiarkan TakeoffCraft membacanya daripada teks helaian (di bawah), dan menyemaknya. Selagi helaian tiada skala, {{ui:Linear}}, {{ui:Luas}}, {{ui:Bulatan}} dan {{ui:Potongan}} enggan mengukur padanya. {{ui:Kira}} dan {{ui:Kiraan auto}} berfungsi tanpa skala.

Senarai helaian memaparkan skala setiap helaian, atau **Tiada skala**. Bar di bawah helaian yang dibuka menyatakan perkara yang sama.

## Gunakan pratetap (apabila PDF dicetak pada saiz penuh)

1. Buka helaian.
2. Buka senarai {{ui:Pratetap}} dalam kumpulan {{ui:Skala}}.
3. Pilih skala yang dicetak pada lukisan, contohnya `1/8" = 1'-0"` di bawah Seni bina.
   Bar status berbunyi "Skala untuk helaian ini: 1/8" = 1'-0"."
4. Semak (di bawah).

Pratetap menganggap PDF ialah saiz kertas sebenar yang lukisan itu dibuat untuknya. Jika seseorang membuat PDF dengan "muat ke halaman", atau ia set saiz separuh, pratetap itu salah. Tentukur sebaliknya.

Senarai penuh terdapat dalam [Pratetap skala](topic:scale-presets).

## Baca skala daripada teks helaian

Kebanyakan lukisan menyatakan skalanya: `SCALE: 1/4" = 1'-0"` dalam blok tajuk, `1:100` di bawah pandangan. TakeoffCraft boleh membacanya dan menetapkan setiap helaian sekaligus.

1. Buka senarai {{ui:Pratetap}} dan pilih {{ui:Dari teks helaian…}} (di bahagian atas).
2. Senarai memaparkan setiap helaian: skalanya sekarang, dan apa yang teksnya nyatakan — **Menyatakan 1/4" = 1'-0"**, **Tiada skala dalam teksnya**, atau **Menyatakan tidak mengikut skala** (NTS).
3. Helaian tanpa skala yang menyatakan satu skala ditandakan. Tandakan atau nyahtandakan mana-mana, kemudian pilih {{ui:Tetapkan skala yang ditandakan}}. Satu {{key:Mod+Z}} membuat asal semuanya.
4. Semak satu dimensi pada setiap helaian dengan {{ui:Semak}} (di bawah): pratetap hanya betul apabila PDF dicetak pada saiz penuh.

Ia membaca notasi seni bina (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), kejuruteraan (`1" = 20'`) dan metrik (`1:50`) yang sepadan dengan [pratetap](topic:scale-presets). Apabila helaian menyatakan lebih daripada satu skala (pelan dengan perincian dibesarkan), ia mengambil yang paling kerap disebut, dan yang ditulis selepas perkataan SCALE dikira dua kali; yang lain dipaparkan dalam merah supaya anda boleh menyemak. Helaian yang diimbas tidak mempunyai teks: tetapkan skalanya secara manual.

## Tentukur pada dimensi yang diketahui

Gunakan ini apabila tiada skala cetakan yang anda percayai, set itu telah diubah saiz, atau helaian menyatakan "tidak mengikut skala" tetapi mempunyai dimensi.

1. Buka helaian dan zum pada dimensi panjang yang anda tahu, seperti jarak antara garisan grid atau dimensi keseluruhan bangunan. Makin panjang, makin tepat.
2. Pilih {{ui:Tentukur}} dalam kumpulan {{ui:Skala}}, atau tekan {{key:K}}.
3. Klik satu hujung dimensi. Zum pada setiap hujung untuk ketepatan; anda boleh zum dan pan antara klikan.
4. Klik hujung satu lagi. Tahan {{key:Shift}} untuk mengekalkan garisan pada 0°, 45° atau 90°.
   Kotak dialog **Tentukur helaian ini** dibuka.
5. Taip jarak sebenar dalam **Jarak sebenar**, contohnya `24'-6 1/2"`, `24.5` (kaki perpuluhan), `30"` atau `7.5 m`. Lihat [Entri panjang, kadar dan peratus](topic:entry-formats).
6. Pilih {{ui:Tetapkan skala}}.
   Bar status memaparkan skala sebagai "1" = (n)'", dan apabila ia dalam lingkungan 0.5% daripada pratetap ia menyatakan yang mana, contohnya "yang sepadan dengan 1/4" = 1'-0" (pilih pratetap itu untuk skala yang tepat)".
   TakeoffCraft kembali ke alat {{ui:Pilih}}.

Apabila penentukuran sepadan dengan pratetap, memilih pratetap itu memberi skala yang tepat dan bukannya skala yang bergantung pada tempat anda klik.

## Semak skala

Sentiasa semak skala baharu pada dimensi kedua.

1. Pilih {{ui:Semak}} dalam kumpulan {{ui:Skala}}, atau tekan {{key:D}}.
2. Klik kedua-dua hujung dimensi yang dicetak pada lukisan.
   Bar status memaparkan "Semak: 12'-6"" dengan panjang yang sama dalam kaki perpuluhan dan meter, dan garisan semakan kekal pada helaian dengan panjangnya.
3. Bandingkan dengan dimensi yang dicetak. Jika ia tersasar, tentukur pada dimensi yang lebih panjang.

Tekan {{key:Esc}} untuk mengosongkan garisan semakan.

## Tukar skala

Pilih pratetap lain atau tentukur semula. Jika helaian sudah mempunyai ukuran, TakeoffCraft bertanya **Tukar skala helaian ini?** dan menyatakan berapa banyak ukuran yang akan diukur semula. Pilih {{ui:Tukar skala}}. Setiap larian dan kawasan pada helaian diukur semula pada skala baharu. Anda boleh membuat asalnya dengan {{key:Mod+Z}}.

## Mengapa helaian tanpa skala tidak dikira sebagai sifar

Penanda pada helaian tanpa skala tidak mempunyai panjang atau luas sebenar. TakeoffCraft tidak sekali-kali mengiranya sebagai sifar, yang diam-diam akan menjadikan anggaran anda terlalu rendah. Sebaliknya ia:

- meninggalkan penanda tersebut daripada jumlah,
- memaparkan "+(n) tanpa skala" di sebelah item dalam {{ui:Kuantiti}},
- memaparkan "Tidak lengkap: (n) penanda pada helaian tanpa skala (tidak termasuk dalam jumlah)" dalam pengepala jadual,
- menulis bilangan itu ke dalam lajur nota eksport hamparan.

Ini boleh berlaku apabila anda membuka projek yang skalanya tidak pernah ditetapkan. Berikan helaian skala dan penanda akan dikira serta-merta. Penanda kiraan sentiasa dikira; ia tidak memerlukan skala.

## Petua

- Tetapkan skala pada setiap helaian yang akan anda ukur sebelum mula. Imbas senarai helaian untuk **Tiada skala** bagi mencari yang masih tinggal (kotak carian melihat nama helaian, bukan skala).
- Perincian dan pelan dibesarkan pada helaian yang sama sering menggunakan skala lain. TakeoffCraft hanya mempunyai satu skala setiap helaian; lihat [Apa yang belum dibina](topic:not-built-yet).
- Lukisan metrik: pilih pratetap metrik seperti `1:100`, atau tentukur dengan jarak metrik seperti `6000 mm`.
