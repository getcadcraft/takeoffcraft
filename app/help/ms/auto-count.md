---
title: Kiraan auto bagi satu simbol
summary: Kotakkan satu simbol, biarkan TakeoffCraft mencari yang lain pada helaian ini atau pada setiap helaian yang dibuka, semak padanan dengan peluncur, dan tambahkannya dalam satu langkah.
keywords: mana-mana sudut, diputar, dipusing, skala lain, skala berbeza, kiraan auto, kiraan automatik, carian simbol, cari simbol, corak, templat, padanan, kesan, alat kiraan
from: fa68a6c1
---

{{ui:Auto count}} mencari setiap salinan simbol selepas anda membuat kotak pada satu simbol. Anda kemudian menyemak padanan pada helaian dan menambah yang anda terima sebagai penanda kiraan. Ia pembantu, bukan jaminan: sentiasa semak sebelum menambah.

## Cari simbol

1. Buat atau klik item kiraan di bawah {{ui:Items}}.
2. Buka helaian tempat simbol itu muncul.
3. Pilih {{ui:Auto count}} pada bar alat, atau tekan {{key:S}}.
   Bar muncul di bahagian atas helaian: "Seret kotak di sekeliling satu simbol pada helaian ini."
4. Untuk mencari setiap helaian yang dibuka, bukan hanya helaian ini, tandakan {{ui:Search all open sheets}}.
5. Zum masuk supaya simbol mudah dilihat, kemudian seret kotak rapat di sekeliling satu salinannya. Sertakan keseluruhan simbol; kertas kosong di sekelilingnya akan dipangkas.
   Bar memaparkan "Mencari…" dengan bar kemajuan dan butang {{ui:Cancel}}. Halaman kekal responsif: anda boleh zum, pan dan bergerak antara helaian. Memilih alat lain, atau {{key:Esc}}, membatalkan carian.
6. Apabila selesai, padanan muncul pada helaian sebagai kotak dalam warna item, dan bar memaparkan ringkasan seperti "22 padanan, 19 untuk ditambah (3 sudah dikira). Klik kotak untuk menolak atau memulihkannya."

Dalam {{ui:Auto count}}, menyeret pada helaian melukis kotak dan bukannya pan. Untuk pan, tahan {{key:Space}} dan seret, atau seret dengan butang tengah.

## Semak padanan

- **Klik kotak** untuk menolaknya. Kotak yang ditolak dipaparkan putus-putus dan dicoret. Klik sekali lagi untuk memulihkannya.
- **Gerakkan peluncur {{ui:Match}}** (50% hingga 95%, bermula pada 75%). Nilai yang lebih tinggi hanya menunjukkan padanan yang hampir sama; nilai yang lebih rendah menunjukkan yang lebih longgar. Peluncur hanya menapis apa yang telah ditemui; ia tidak mencari semula.
- **Sudah dikira**: padanan pada tempat yang sudah mempunyai penanda kiraan bagi item ini bermula dalam keadaan ditolak, supaya anda tidak mengira apa-apa dua kali.
- **Helaian lain**: apabila anda mencari setiap helaian yang dibuka, alih antara helaian menggunakan senarai helaian atau {{key:PageDown}} dan semak setiap satu. Ringkasan memberitahu berapa banyak helaian yang mempunyai padanan.

## Tambahkan

Pilih {{ui:Add}}. Butang itu memaparkan berapa banyak, contohnya "Tambah 19 penanda".
Penanda kiraan ditambah di tengah setiap kotak yang diterima: "Ditambah 19 penanda kiraan kepada "Soket dupleks". Ctrl+Z mengeluarkan kesemuanya."

Keseluruhan kumpulan ialah satu langkah buat asal, jadi satu {{key:Mod+Z}} mengeluarkannya.

Untuk membuang semakan tanpa menambah apa-apa, pilih {{ui:Discard}} atau tekan {{key:Esc}}. Memilih alat lain juga membuangnya.

## Apa yang dicari, dan apa yang terlepas

TakeoffCraft membandingkan lukisan, sebagai piksel, dengan simbol yang anda kotakkan.

- Ia mencari simbol yang diputar 0°, 90°, 180° dan 270°. Tandakan {{ui:Any angle (slower)}} pada bar kiraan auto sebelum anda melukis kotak untuk mencarinya pada mana-mana sudut juga: ia mencuba setiap 15°, kemudian memperhalusi setiap penemuan kepada darjah dan setengah darjah. Ini mengambil masa kira-kira enam kali lebih lama. Ia tidak mencari simbol yang dicerminkan (melainkan simbol itu kelihatan sama apabila dicerminkan).
- Dengan {{ui:Search all open sheets}} ditandakan, helaian pada skala lain dicari pada saiz yang dimiliki simbol itu di sana: perkakas yang dilukis mengikut skala pada pelan 1/8" adalah separuh saiznya pada pelan 1/4", dan ia masih ditemui. Helaian sedemikian juga dicari pada saiz kotak itu sendiri, untuk tag dan simbol yang dicetak pada satu saiz pada setiap helaian. Ini memerlukan skala pada kedua-dua helaian; helaian tanpa skala hanya dicari pada saiz kotak.
- Simbol yang sangat serupa boleh sepadan antara satu sama lain: soket dupleks dan kuad, atau dua tag perkakas yang berbeza satu huruf. Naikkan peluncur sehingga hanya yang betul tinggal, dan tolak yang selebihnya secara manual.
- Simbol yang dilintasi garisan, hatching atau teks lain mendapat skor yang lebih rendah dan mungkin memerlukan tetapan peluncur yang lebih rendah.
- Kotak yang sangat kecil ditolak: "Kotak itu terlalu kecil. Lukis di sekeliling keseluruhan simbol." Kotak kosong juga ditolak: "Kotak itu hampir kosong. Lukis di sekeliling simbol."
- Helaian yang akan menjadi sangat besar pada saiz yang diperlukan untuk simbol ini dilangkau, dan ringkasan berbunyi "1 helaian terlalu besar untuk dicari pada saiz simbol ini." Kotakkan simbol yang lebih besar, atau kira helaian itu secara manual.

Jika tiada apa yang ditemui, bar status memaparkan "Tiada padanan. Turunkan peluncur padanan, atau kotakkan simbol dengan lebih rapat."

## Kelajuan dan pelayar

Carian dijalankan dalam pekerja latar belakang, jadi halaman kekal responsif dan anda boleh membatalkannya pada bila-bila masa. Setiap helaian mula-mula dilukis pada saiz kerja di halaman itu sendiri, yang boleh menyebabkan helaian yang sangat besar berhenti seketika. Ia berfungsi dalam Chrome, Edge, Firefox dan Safari terkini. Mencari banyak helaian mengambil masa lebih lama; bar kemajuan bergerak helaian demi helaian. Di luar talian, kiraan auto berfungsi apabila bar aplikasi memaparkan {{ui:Offline ready}}: {{ui:Save for offline}} turut menyimpan pekerja itu. Lihat [Bekerja di luar talian](common:offline).
