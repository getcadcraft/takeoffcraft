---
title: Kira semua dalam set
summary: Kotak satu legenda simbol sekali dan TakeoffCraft mengira setiap simbol di dalamnya pada setiap helaian terbuka dalam satu larian. Setiap kiraan ialah pautan ke helaiannya, dan anda menyemak sebelum apa-apa ditambah.
keywords: kira semua, legenda, legenda simbol, seluruh set, setiap helaian, semua helaian, setiap pintu, setiap lengkapan, peranti, jadual, simbol, kiraan auto, kira kesemuanya, set lukisan, 200 helaian, tahap padanan, rupa serupa
from: adc99744
---

{{ui:Kira semua}} membaca legenda simbol dan kemudian mengira setiap simbol di dalamnya pada setiap helaian terbuka. Ia ialah {{ui:Kiraan auto}} untuk seluruh legenda sekaligus. Ia padanan simbol biasa pada helaian anda sendiri, bukan model terlatih, dan tiada apa yang meninggalkan komputer anda. Semak kiraan sebelum anda menambahnya: ia pembantu, bukan jaminan.

## Kira legenda

1. Buka pelan. Legenda pada mana-mana helaian memadai: simbol dengan namanya di sebelah.
2. Pilih {{ui:Kira semua}} pada bar alat.
3. Seret kotak mengelilingi legenda, simbol dan nama. Tajuk tanpa simbol di sebelahnya (SYMBOL LEGEND) ditinggalkan dengan sendirinya.
   Panel menyenaraikan setiap simbol dengan gambarnya dan nama yang dicetak di sebelahnya. Nama itu menjadi nama item, jadi namakan semula di sini jika anda mahu.
4. Nyahtanda mana-mana simbol yang anda tidak mahu dikira. Simbol yang tidak boleh dicari (terlalu kecil, atau kosong) memberitahu sebabnya.
5. Pilih {{ui:Kira pada N helaian}}. Bar menunjukkan helaian yang sedang dicari; {{ui:Batal}} menghentikan larian. Halaman kekal boleh digunakan.

Simbol legenda itu sendiri tidak dikira pada helaiannya. Helaian yang dilukis pada skala lain dicari pada skala itu, dan simbol ditemui walaupun dipusing pada mana-mana sudut tegak.

## Semak kiraan

- Setiap simbol menunjukkan jumlahnya dan, di bawahnya, pautan bagi setiap helaian yang mempunyai ("E-103: 4"). Klik satu untuk pergi ke helaian itu. Penemuan dikotak dalam warna item.
- **Klik kotak** untuk mengeluarkan penemuan itu. Ia bergaris putus dan disilang; klik lagi untuk mengembalikannya.
- **Alihkan tahap padanan** (50% hingga 100%, bermula pada tahap Tetapan anda). Lebih tinggi hanya menyimpan padanan yang rapat. Peluncur hanya menapis apa yang ditemui; tiada carian dibuat semula.
- Dua simbol yang kelihatan serupa (soket dupleks dan soket kuad) boleh memadankan tempat yang sama. Padanan yang lebih baik mengambilnya dan panel menyatakan berapa banyak tempat yang berlaku, supaya anda boleh menyemaknya.
- Helaian yang terlalu besar untuk dicari pada saiz simbol dilangkau, dan panel memberitahu demikian.

## Tambah

Pilih {{ui:Tambah N tanda}}. Setiap simbol menjadi item kiraan dengan tanda pada setiap penemuan. Nama yang sudah menjadi item kiraan anda digunakan semula (tiada apa digandakan di tempat yang sudah anda tandakan secara manual). Keseluruhan larian ialah satu langkah: {{key:Ctrl+Z}} mengambil semula setiap item dan tanda.

Apa yang anda terima juga disimpan dalam {{ui:Dipelajari}}: simbol diingati dalam fail pengukuran kuantiti untuk kali berikutnya.

## Dengan pembantu anda

Jika anda membenarkan pembantu dalam Tetapan, mereka boleh membaca legenda (legend_open), menjalankan kiraan di latar belakang (legend_count_start, kemudian legend_count_status), membaca kiraan (legend_count_result) dan menambahnya (legend_count_add, yang boleh pratonton dahulu apa yang akan ditambah). Ia larian yang sama seperti yang anda lihat dalam panel.

## Simbol pada sebarang sudut

Tandakan {{ui:Simbol pada sebarang sudut}} sebelum anda mengira untuk turut mencari simbol yang dilukis pada sudut yang bukan sudut tegak (palam dinding pepenjuru, lengkapan yang dipusing untuk mengikut bumbung). Carian kemudian memusingkan setiap simbol setiap 15 darjah; simbol bulat masih memerlukan satu carian dan simbol yang tidak bulat boleh mengambil masa sehingga enam kali ganda. Biarkan tidak ditandakan bagi pelan yang dilukis dengan sudut tegak.

## Perkara yang perlu diketahui

- Ia memerlukan simbol yang dilukis dengan cara yang sama seperti dalam legenda. Legenda yang dilukis pada saiz berbeza daripada helaian tidak mengapa apabila skala helaian ditetapkan; tanpa skala, simbol dicari pada saiz legenda.
- Simbol dengan dinding atau garisan panjang yang dilukis lurus melaluinya boleh terlepas, kerana ia tidak lagi kelihatan seperti gambar legenda. Semak penemuan pada helaian pertama sebelum mempercayai selebihnya.
- Imbasan tanpa teks masih berfungsi: simbol ditemui mengikut barisnya, dan anda menaip namanya.
