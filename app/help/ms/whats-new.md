---
title: Perkara baharu dalam 0.7
summary: Lukisan DWG dan DXF dibuka sebagai helaian dengan skala sendiri, kiraan dan panjang yang tepat daripada lukisan itu sendiri, bidaan subkontraktor yang dipilih sebagai harga pakej, jemputan bidaan dengan harga bertutup, alat pembantu untuk lukisan, dan USD daripada paparan semakan 3D.
keywords: perkara baharu, apa yang baharu, nota keluaran, log perubahan, perubahan, 0.7, versi, ciri baharu, dwg, dxf, lukisan, susun atur, ruang model, skala lukisan, kiraan daripada lukisan, kiraan cad, blok, blok dinamik, atribut, lapisan, xref, lukisan dipautkan, ukur lukisan, polygaris, hatch, pdf ditanda, bidaan dipilih, guna bidaan, hantar untuk bidaan, jemputan bidaan, bidaan bertutup, pembukaan bidaan, bidaan lewat, rekod subkontraktor, csv, pembantu, mcp, usd, usdz, unit, senarai unit, padat, panel, dialog, portugis
from: ad4f0df1
---

Ini ialah perubahan dalam TakeoffCraft 0.7, berbanding 0.6. Lukisan kini dibuka seperti adanya, tanpa mencetak ke PDF dahulu, dan pakej bidaan boleh dihantar kepada subkontraktor dan dikembalikan dengan harga.

## Baharu

### Lukisan DWG dan DXF

- **Buka lukisan sebagai helaian.** {{ui:Buka pelan}} dalam kumpulan {{ui:Fail}} ({{key:Mod+O}}, atau lepaskan fail) menerima lukisan DWG dan DXF bersama PDF. Ruang model dan setiap susun atur menjadi helaian dalam senarai {{ui:Helaian}}, dan pengukuran kuantiti boleh meliputi lukisan dan PDF bersama. Tiada apa-apa dimuat naik. Lihat [Buka lukisan DWG atau DXF](topic:open-a-drawing).
- **Skala datang daripada lukisan.** Susun atur bermula pada skala viewport terbesarnya, dinamakan sebagai pratetap apabila ia satu, seperti 1/2" = 1'-0". Model bermula dalam unit lukisan. Lukisan yang tiada unit berkata "Tiada skala" sehingga anda menentukurnya. {{ui:Tentukur}}, {{ui:Semak}} dan {{ui:Pratetap}} masih mengatasinya. Lihat [Skala](topic:open-a-drawing#the-scale).
- **Lapisan dan lukisan dipautkan.** {{ui:Lapisan}} pada bar helaian menunjukkan atau menyembunyikan lapisan lukisan. Lapisan yang fail matikan atau bekukan bermula tersembunyi dan tidak dikira melainkan anda memilihnya. Lukisan dipautkan (xref) yang dibuka bersebelah hos dilukis dan dikira di tempat ia dimasukkan; sehingga ia dibuka, bar status menyatakan apa yang hilang. Lihat [Lapisan](topic:open-a-drawing#layers).
- **PDF ditanda berfungsi daripada lukisan.** {{ui:Eksport}} › {{ui:PDF ditanda}} melukis helaian ditanda bagi lukisan sebagai PDF dahulu, jadi salinan menunjukkan tanda dan petunjuk anda tanpa langkah mencetak. Ia dilukis dalam hitam atau warna lukisan, tanpa jadual gaya plot. Lihat [PDF ditanda](topic:export-estimate#a-marked-pdf).

### Kiraan dan panjang yang tepat daripada lukisan

- **Kira apa yang dikatakan lukisan itu ada.** {{ui:Kiraan CAD}} pada bar helaian mengira blok mengikut nama (termasuk blok bersarang, keadaan blok dinamik dan tatasusunan blok), segala sesuatu daripada satu jenis pada satu lapisan, atau nilai teks atau atribut. Ia mengira apa yang ditunjukkan helaian atau keseluruhan lukisan sekali. Menambah tanda ialah satu langkah buat asal, dan mengira semula hanya menambah apa yang baharu. {{ui:Kiraan auto}} kekal untuk PDF dan untuk simbol yang bukan blok. Lihat [Kira daripada lukisan](topic:count-from-a-drawing).
- **Ukur daripada garisan lukisan itu sendiri.** {{ui:Ukur lukisan}} mengambil garisan, lengkok, polygaris, bulatan, hatch dan pepejal yang anda klik atau tetingkap sebagai tanda bagi item linear atau luas. Lengkok, bulatan dan lubang hatch keluar tepat; elips dan splin diukur dalam kord halus, dan bar menyatakannya. Lihat [Ukur daripada lukisan](topic:measure-from-a-drawing).

### Bidaan

- **Guna bidaan subkontraktor sebagai harga pakej.** Dalam {{ui:Eksport}} › {{ui:Pakej bidaan dan penyeimbangan…}}, pilih {{ui:Guna}} pada satu bidaan. Item pakej kekal sebagai kuantiti, satu baris **Bidaan dipilih** membawa harga, item yang bidaan tinggalkan kekal pada kos anda sendiri, dan overhed, untung serta bon digunakan padanya. Menukar bidaan ialah satu langkah buat asal; buku kerja dan ringkasan bidaan membawanya. Lihat [Guna bidaan sebagai harga pakej](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Hantar pakej untuk bidaan.** {{ui:Hantar untuk bidaan…}} di bawah pakej menghantar e-mel kepada setiap subkontraktor satu pautan ke halaman yang tidak memerlukan akaun: mereka melihat skop dan helaian sebagai PDF, menaip harga pada setiap baris atau menandakannya tidak termasuk, menambah nota dan sehingga tiga fail, atau menolak. {{ui:Dapatkan harga}} menarik apa yang dikembalikan ke dalam lembaran penyeimbangan, ditanda **web**. Penghantaran hanya dibuka kepada akaun yang pasukan CadCraft aktifkan semasa ia diuji (lihat di bawah). Lihat [Hantar pakej untuk bidaan](topic:bid-invitations).
- **Tertutup sehingga pembukaan.** Harga boleh kekal bertutup sehingga masa pembukaan yang anda tetapkan: sehingga itu tiada siapa melihat harga, termasuk anda. Pada pembukaan, setiap bidaan dipaparkan serentak, dan bidaan yang tiba selepas tarikh akhir ditanda lewat. Lihat [Bidaan bertutup dan pembukaan](topic:bid-invitations#sealed-bids-and-the-opening).
- **Rekod subkontraktor.** Akaun anda di getcadcraft.com menyimpan kenalan, bidang, jawapan kelayakan, dan tarikh insurans serta lesen bagi setiap syarikat (ditanda sekali apabila sudah lepas atau dalam masa 30 hari), dengan bidaan lalu mereka. Import dan eksport sebagai CSV, dan pilih mereka apabila anda menghantar pakej. Lihat [Di laman web](topic:bid-invitations#on-the-website).

### Pembantu AI

- **Pembantu boleh menambah kepada pengukuran kuantiti.** Dengan **Sunting** ditanda, pembantu anda sendiri boleh menambah item (`items_add`) dan mengukur larian, luas dan kiraan pada helaian (`marks_add`; panjang dan luas hanya pada helaian berskala), dengan setiap panggilan ialah satu langkah buat asal.
- **Alat pembantu untuk lukisan.** Pada DWG atau DXF yang terbuka, pembantu boleh menyenaraikan helaiannya dan apa yang boleh dikira, mengira dengan tepat, menambah tanda kiraan, dan mengukur daripada geometri lukisan. Tanpa TakeoffCraft dibuka, pelayan CadCraft MCP membuka lukisan sebagai pengukuran kuantiti baharu dan menyimpannya, dan `cadcraft count` mengira daripada baris arahan. Lihat [Apa yang boleh diminta oleh pembantu](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Paparan semakan 3D sebagai USD.** {{ui:Pakej USD (.usdz)}} bersebelah {{ui:GLB}} dalam paparan semakan 3D menulis setiap dinding, papak, plat, tiang kiraan dan larian sebagai objek sendiri, dinamakan mengikut itemnya dan membawa kuantitinya, dalam meter. Pembantu juga boleh mengeksportnya (`usd_export`). Lihat [Eksport paparan semakan 3D sebagai USD](topic:usd).

## Dalam setiap aplikasi

- **Unit.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Unit}} mempunyai satu senarai bagi panjang, luas, isipadu, sudut dan kecerunan, dengan saiz tepat yang diberikan oleh takrif unit (kaki tinjauan AS ialah unit sendiri). Matikan unit yang tidak pernah anda guna dan ia keluar daripada senarai unit; tanda bintang pada satu dan kerja baharu bermula dalamnya. Fail sentiasa mengekalkan unitnya sendiri. Dalam TakeoffCraft senarai {{ui:Unit}} item mengikut suis, item baharu bermula dalam unit panjang atau luas yang ditanda bintang, kotak bumbung (SQ), ekar dan hektar ialah unit luas baharu, dan kotak panjang menerima tanda mana-mana unit, seperti `3 yd`. Lihat [Unit, nilai ditaip dan senarai unit](common:unit-lists).
- **Susun atur yang lebih padat dan panel yang kemas.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Ketumpatan reka letak}} › {{ui:Padat}} memuatkan lebih banyak pada skrin (skrin sentuh dan telefon mengekalkan butang besar mereka). Setiap panel sisi mempunyai bar tajuk yang nipis: seret untuk melekapkan atau menerapungkan panel, lepaskan pada bar panel lain untuk berkongsi satu bingkai sebagai tab, pinkan supaya ia meluncur ke tepi, atau sembunyikannya dan bawanya kembali dari tepi. Lihat [Susun panel](common:arrange-panels#make-the-layout-denser).
- **Dialog boleh dialihkan.** Seret dialog mengikut bar tajuknya keluar dari laluan lukisan; ia kembali ke tempat anda tinggalkannya. Klik dua kali bar tajuk untuk memusatkannya semula. Lihat [Alihkan dialog](common:arrange-panels#move-a-dialog).
- **Resipi untuk pembantu AI.** Sepuluh permintaan yang dikerjakan untuk pembantu anda sendiri (kemaskan lukisan, plot set, semak lukisan, tanya model soalan, jumlahkan pengukuran kuantiti, cuba varian bahagian…), setiap satu dengan alat yang dipanggilnya dan kebenaran yang diperlukannya, dan setiap satu dimainkan semula oleh ujian kami. Aplikasi tidak mengandungi AI. Lihat [Resipi untuk pembantu AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baharu dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Bahasa}}. Ia, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini mempunyai setiap perkataan aplikasi, sebagai draf yang belum disemak oleh penutur asli. Topik bantuan dalam bahasa Inggeris.
- **CadCraft Studio** menyatakan sebab semakan kemas kini gagal (belum ada fail untuk sistem anda, tiada rangkaian, tandatangan tidak sah) dan bukannya hanya "Selesai", dan berhenti membawa kembali kad Perkara baharu yang anda tutup sehingga ada keluaran yang lebih baharu.

## Belum ada dalam versi ini

- **0.7 tidak ditandatangani kod.** Penandatanganan, dan pakej Microsoft Store, dipindahkan ke 0.8 kerana pengesahan sijil belum selesai. Semak SHA-256 di sebelah setiap fail di getcadcraft.com/download. Pada Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Jalankan juga}}. Pada Mac, kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Terbuka}}. CadCraft Studio belum ada dalam kedai aplikasi, dan belum ada binaan iPad atau iPhone.
- Senarai sudut dan kecerunan dalam {{ui:Unit}} disimpan, tetapi belum ada kotak yang membacanya.
- **Jemputan bidaan dimatikan untuk kebanyakan akaun.** Semasa ciri ini diuji, e-mel kepada pembida luar hanya dihantar daripada akaun yang pasukan CadCraft aktifkan. Halaman pembida berfungsi untuk setiap jemputan yang sudah dihantar. Yang lain: muat turun {{ui:Skop CSV}}, e-mel sendiri, dan taip bidaan.
- Tetingkap CadCraft Studio tidak dapat menghantar jemputan bidaan lagi: ia menyuruh anda guna TakeoffCraft dalam pelayar. Membuka pengukuran kuantiti dengan permintaan yang dihantar, lembaran penyeimbangan dan memilih bidaan berfungsi dalam Studio.
- Adendum, surat anugerah, lembaran skop yang setiap pembida tandatangan dan peringatan automatik sebelum tarikh insurans tamat belum dibina. Bidaan yang dipilih tidak menilai semula kawasan bidaan alternatif.
- Lukisan: jadual gaya plot dan fail CTB tidak digunakan, DXF binari ditolak (simpan sebagai DXF ASCII atau DWG), lukisan dipautkan hanya dijumpai dalam kalangan fail terbuka mengikut nama fail, dan PDF underlay, imej serta objek OLE dalam lukisan tidak dilukis atau dikira. Kiraan dan skala telah diperiksa pada lukisan sampel, belum lagi pada lukisan sebenar daripada kerja yang dibuka dalam program yang menghasilkannya.
- Pembantu boleh menambah item dan tanda tetapi tidak boleh mengalih, menukar atau memadam tanda yang sudah ada.

Segala yang lain ada dalam [Belum dibina](topic:not-built-yet).
