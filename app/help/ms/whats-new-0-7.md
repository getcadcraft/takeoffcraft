---
title: Perkara baharu dalam 0.7 (terdahulu)
summary: Lukisan DWG dan DXF dibuka sebagai helaian dengan skala sendiri, kiraan dan panjang yang tepat daripada lukisan itu sendiri, harga bidaan subkontraktor yang dipilih sebagai harga pakej, jemputan bidaan dengan harga bertutup, alat pembantu untuk lukisan, dan USD daripada paparan semakan 3D.
keywords: perkara baharu 0.7, keluaran terdahulu, nota keluaran, log perubahan, perubahan, 0.7, versi, ciri baharu, dwg, dxf, lukisan, reka letak, ruang model, skala lukisan, kiraan daripada lukisan, kiraan CAD, blok, blok dinamik, atribut, lapisan, xref, lukisan terpaut, ukur lukisan, polygaris, hatch, PDF ditanda, bidaan dipilih, guna bidaan, hantar untuk bidaan, jemputan bidaan, bidaan bertutup, pembukaan bidaan, bidaan lewat, rekod subkontraktor, csv, pembantu, mcp, usd, usdz, unit, senarai unit, padat, panel, kotak dialog, Portugis
from: 0e3a424f
---

Ini ialah perkara yang berubah dalam TakeoffCraft 0.7, berbanding 0.6. Lukisan kini dibuka seperti sedia ada, tanpa perlu dicetak ke PDF dahulu, dan pakej bidaan boleh dihantar kepada subkontraktor dan kembali dengan harga.

## Baharu

### Lukisan DWG dan DXF

- **Buka lukisan sebagai helaian.** {{ui:Buka pelan}} dalam kumpulan {{ui:Fail}} ({{key:Mod+O}}, atau seret fail ke dalam aplikasi) menerima lukisan DWG dan DXF bersama PDF. Ruang model dan setiap layout menjadi helaian dalam senarai {{ui:Helaian}}, dan pengukuran kuantiti boleh meliputi lukisan dan PDF sekali gus. Tiada apa-apa dimuat naik. Lihat [Buka lukisan DWG atau DXF](topic:open-a-drawing).
- **Skala datang daripada lukisan.** Layout bermula pada skala viewport terbesarnya, dinamakan sebagai pratetap jika ia sepadan, seperti 1/2" = 1'-0". Model bermula dalam unit lukisan. Lukisan yang tiada unit menunjukkan "No scale" sehingga anda menentukurnya. {{ui:Tentukur}}, {{ui:Semak}} dan {{ui:Pratetap}} masih mengatasi yang lain. Lihat [Skala](topic:open-a-drawing#the-scale).
- **Lapisan dan lukisan terpaut.** {{ui:Lapisan}} pada bar helaian menunjukkan atau menyembunyikan lapisan lukisan. Lapisan yang dimatikan atau dibekukan oleh fail bermula dalam keadaan tersembunyi dan tidak dikira melainkan anda memilihnya. Lukisan terpaut (xref) yang dibuka bersama hostnya dilukis dan dikira di tempat ia dimasukkan; sehingga ia dibuka, bar status memberitahu apa yang hilang. Lihat [Lapisan](topic:open-a-drawing#layers).
- **PDF ditanda berfungsi daripada lukisan.** {{ui:Eksport}} › {{ui:PDF ditanda}} melukis helaian bertanda lukisan sebagai PDF dahulu, supaya salinan itu menunjukkan tanda dan petunjuk anda tanpa langkah cetakan. Ia dilukis dalam hitam atau warna lukisan, tanpa jadual gaya plot. Lihat [PDF ditanda](topic:export-estimate#a-marked-pdf).

### Kiraan dan panjang yang tepat daripada lukisan

- **Kira apa yang dinyatakan lukisan itu ada.** {{ui:Kiraan CAD}} pada bar helaian mengira blok mengikut nama (termasuk blok bersarang, keadaan blok dinamik dan tatasusunan blok), segala sesuatu jenis yang sama pada satu lapisan, atau nilai teks atau atribut. Ia mengira apa yang ditunjukkan helaian atau keseluruhan lukisan sekali. Menambah tanda ialah satu langkah buat asal, dan mengira semula hanya menambah yang baharu. {{ui:Kiraan auto}} kekal untuk PDF dan untuk simbol yang bukan blok. Lihat [Kira daripada lukisan](topic:count-from-a-drawing).
- **Ukur daripada garisan lukisan itu sendiri.** {{ui:Ukur lukisan}} mengambil garisan, lengkok, polygaris, bulatan, hatch dan pepejal yang anda klik atau pilih dengan tetingkap sebagai tanda bagi item linear atau luas. Lengkok, bulj dan lubang hatch keluar tepat; elips dan splin diukur dalam kord halus, dan bar memberitahu anda begitu. Lihat [Ukur daripada lukisan](topic:measure-from-a-drawing).

### Bidaan

- **Guna bidaan subkontraktor sebagai harga pakej.** Dalam {{ui:Eksport}} › {{ui:Pakej bidaan dan penyeimbangan…}}, pilih {{ui:Guna}} pada sesuatu bidaan. Item pakej kekal sebagai kuantiti, satu baris **Bidaan dipilih** membawa harganya, item yang tidak dimasukkan dalam bidaan kekal pada kos anda sendiri, dan overhed, untung serta bon dikenakan ke atasnya. Menukar bidaan ialah satu langkah buat asal; buku kerja dan ringkasan bidaan turut membawanya. Lihat [Guna bidaan sebagai harga pakej](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Hantar pakej untuk bidaan.** {{ui:Hantar untuk bidaan…}} di bawah pakej menghantar e-mel kepada setiap subkontraktor berupa pautan ke halaman yang tidak memerlukan akaun: mereka melihat skop dan helaian sebagai PDF, menaip harga pada setiap baris atau menandakan tidak termasuk, menambah nota dan sehingga tiga fail, atau menolak. {{ui:Dapatkan harga}} menarik apa yang kembali ke dalam helaian penyeimbangan, ditandai **web**. Penghantaran hanya terbuka kepada akaun yang didayakan oleh pasukan CadCraft semasa ia diuji (lihat di bawah). Lihat [Hantar pakej untuk bidaan](topic:bid-invitations).
- **Tertutup sehingga pembukaan.** Harga boleh kekal bertutup sehingga masa pembukaan yang anda tetapkan: sehingga itu tiada siapa melihat harga, termasuk anda. Pada pembukaan, setiap bidaan dipaparkan serentak, dan bidaan yang tiba selepas tarikh akhir ditandakan lewat. Lihat [Bidaan tertutup dan pembukaan](topic:bid-invitations#sealed-bids-and-the-opening).
- **Rekod subkontraktor.** Akaun anda di getcadcraft.com menyimpan setiap kenalan syarikat, bidang kepakaran, jawapan kelayakan, dan tarikh insurans serta lesen (ditandakan sekali apabila sudah tamat atau dalam tempoh 30 hari), bersama bidaan lepasnya. Import dan eksport dalam CSV, dan pilih mereka apabila anda menghantar pakej. Lihat [Di laman web](topic:bid-invitations#on-the-website).

### Pembantu AI

- **Pembantu boleh menambah pada pengukuran kuantiti.** Dengan **Sunting** ditandakan, pembantu anda sendiri boleh menambah item (`items_add`) dan mengukur larian, luas dan kiraan pada helaian (`marks_add`; panjang dan luas hanya pada helaian berskala), dengan setiap panggilan ialah satu langkah buat asal.
- **Alat pembantu untuk lukisan.** Pada DWG atau DXF yang dibuka, pembantu boleh menyenaraikan helaiannya dan apa yang boleh dikira, mengira dengan tepat, menambah tanda kiraan, dan mengukur daripada geometri lukisan. Tanpa TakeoffCraft dibuka, pelayan MCP CadCraft membuka lukisan sebagai pengukuran kuantiti baharu dan menyimpannya, dan `cadcraft count` mengira daripada baris arahan. Lihat [Apa yang diminta oleh pembantu](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Paparan semakan 3D sebagai USD.** {{ui:Pakej USD (.usdz)}} di sebelah {{ui:GLB}} dalam paparan semakan 3D menulis setiap dinding, papak, plat, tiang kiraan dan larian sebagai objek sendiri, dinamakan mengikut itemnya dan membawa kuantitinya, dalam meter. Pembantu juga boleh mengeksportnya (`usd_export`). Lihat [Eksport paparan semakan 3D sebagai USD](topic:usd).

## Dalam setiap aplikasi

- **Unit.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Unit}} mempunyai satu senarai setiap satu untuk panjang, luas, isipadu, sudut dan cerun, dengan saiz tepat yang diberikan oleh takrif unit (kaki tinjauan AS ialah unit tersendiri). Matikan unit yang tidak pernah anda gunakan dan ia hilang daripada senarai unit; tanda satu dan kerja baharu bermula dalam unit itu. Sebuah fail sentiasa mengekalkan unitnya sendiri. Dalam TakeoffCraft, senarai {{ui:Unit}} bagi item mengikut suis, item baharu bermula dalam unit panjang atau luas yang ditandakan, kotak bumbung (SQ), ekar dan hektar ialah unit luas baharu, dan kotak panjang menerima tanda mana-mana unit, seperti `3 yd`. Lihat [Unit, nilai yang ditaip dan senarai unit](common:unit-lists).
- **Susun atur lebih padat dan panel yang kemas.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Ketumpatan reka letak}} › {{ui:Padat}} memuatkan lebih banyak pada skrin (skrin sentuh dan telefon mengekalkan butang besar mereka). Setiap panel sisi mempunyai bar tajuk yang nipis: seret untuk melekapkan atau menerapungkan panel, lepaskan pada bar panel lain untuk berkongsi satu bingkai sebagai tab, semat untuk meluncur ke tepi, atau sembunyikannya dan bawa kembali dari tepi. Lihat [Susun panel](common:arrange-panels#make-the-layout-denser).
- **Kotak dialog boleh dialihkan.** Seret kotak dialog mengikut bar tajuknya keluar daripada lukisan; ia kembali ke tempat anda tinggalkannya. Klik dua kali bar tajuk untuk memusatkannya semula. Lihat [Alih kotak dialog](common:arrange-panels#move-a-dialog).
- **Resipi untuk pembantu AI.** Sepuluh permintaan contoh untuk pembantu anda sendiri (kemaskan lukisan, plot satu set, semak lukisan, tanya model soalan, jumlahkan pengukuran kuantiti, cuba varian bahagian…), setiap satu dengan alat yang dipanggilnya dan kebenaran yang diperlukan, dan setiap satu dimainkan semula oleh ujian kami. Aplikasi tidak mengandungi AI. Lihat [Resipi untuk pembantu AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baharu dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Bahasa}}. Ia, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini mempunyai setiap perkataan aplikasi, sebagai draf yang belum disemak oleh penutur asli. Topik bantuan dalam Bahasa Inggeris.
- **CadCraft Studio** memberitahu sebab semakan kemas kini gagal (tiada fail untuk sistem anda lagi, tiada rangkaian, tandatangan tidak sah) dan bukannya hanya "Selesai", dan berhenti memunculkan semula kad Perkara baharu yang anda tutup sehingga ada keluaran yang lebih baharu.

## Belum ada dalam versi ini

- **0.7 tidak ditandatangani kod.** Penandatanganan, dan pakej Microsoft Store, dipindahkan ke 0.8 kerana pengesahan sijil belum selesai. Semak SHA-256 di sebelah setiap fail di getcadcraft.com/download. Pada Windows, jika SmartScreen menghalang pemasang, pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Jalankan juga}}. Pada Mac, kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum berada dalam kedai aplikasi, dan belum ada binaan iPad atau iPhone.
- Senarai sudut dan cerun dalam {{ui:Unit}} disimpan, tetapi belum ada kotak yang membacanya.
- **Jemputan bidaan dimatikan untuk kebanyakan akaun.** Semasa ciri ini diuji, e-mel kepada pembida luar hanya dihantar daripada akaun yang didayakan oleh pasukan CadCraft. Halaman pembida berfungsi untuk setiap jemputan yang sudah dihantar. Yang lain: muat turun {{ui:Skop CSV}}, e-mel sendiri, dan taip bidaan.
- Tetingkap CadCraft Studio belum boleh menghantar jemputan bidaan: ia memberitahu anda untuk menggunakan TakeoffCraft dalam pelayar. Membuka pengukuran kuantiti dengan permintaan yang dihantar, penyeimbangan dan memilih bidaan berfungsi dalam Studio.
- Addendum, surat anugerah, helaian skop yang ditandatangani setiap pembida, dan peringatan automatik sebelum tarikh insurans tamat belum dibina. Bidaan yang dipilih tidak menentukan semula harga kawasan bidaan alternatif.
- Lukisan: jadual gaya plot dan fail CTB tidak digunakan, DXF binari ditolak (simpan sebagai DXF ASCII atau DWG), lukisan terpaut hanya dijumpai antara fail yang dibuka mengikut nama fail, dan underlay PDF, imej serta objek OLE dalam lukisan tidak dilukis atau dikira. Kiraan dan skala telah diperiksa pada lukisan contoh, belum pada lukisan kerja sebenar yang dibuka dalam program yang menghasilkannya.
- Pembantu boleh menambah item dan tanda tetapi tidak boleh mengalih, menukar atau memadam tanda yang sudah sedia ada.

Semua yang lain ada dalam [Belum dibina](topic:not-built-yet).
