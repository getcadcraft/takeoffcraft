---
title: Pakej bidaan dan penyeimbangan bidaan
summary: Pecahkan anggaran kepada pakej mengikut bidang kerja, hantar skop setiap pakej kepada subkontraktor, bandingkan bidaan yang kembali pada skop yang sama, dan gunakan bidaan yang dipilih sebagai harga pakej.
keywords: penyeimbangan bidaan, penyeimbangan, pakej bidaan, subkontraktor, bidaan subkontraktor, skop, tampungan, bidang kerja, bahagian CSI, bandingkan bidaan, bidaan terendah, jadual bidaan, pembida, anugerah, bidaan dipilih, guna bidaan, harga subkontrak
from: 856b3088
---

Kontraktor utama menghantar skop setiap bidang kerja kepada subkontraktor dan membandingkan apa yang kembali. TakeoffCraft melakukan kedua-duanya daripada pengukuran kuantiti: buka {{ui:Export}} › {{ui:Bid packages and leveling…}}.

## Pakej

Satu pakej untuk setiap bahagian CSI yang digunakan item anda (dua digit pertama {{ui:CSI number}} item, lihat [Cipta item pengukuran kuantiti](topic:create-items)). Item tanpa nombor membentuk pakej tersendiri. Setiap pakej memaparkan itemnya, berapa helaian yang memegang tandanya, dan kos kami terhadapnya (bahan dan upah sebelum markup, daripada bidaan asas).

Pilih {{ui:Scope CSV}} untuk memuat turun apa yang hendak dihantar kepada subkontraktor: setiap item dengan nombor CSI, kuantiti, unit dan helaian yang dipegangnya. Ia tiada harga. Untuk pembekal bahan, permintaan sebut harga dalam buku kerja mempunyai senarai bahagian (lihat [Eksport anggaran](topic:export-estimate)).

## Masukkan bidaan

1. Dalam baris kosong di bawah pakej, taip nama pembida dan jumlah bidaan, kemudian pilih {{ui:Add the bid}}.
2. Jika bidaan meninggalkan sebahagian skop, buka senarai {{ui:Left out}} dan tanda item tersebut.
3. Untuk membetulkan nama atau jumlah, taip atas nilai itu dalam jadual; butang × membuang bidaan.

Setiap perubahan ialah satu langkah yang {{key:Mod+Z}} buat asal, dan bidaan disimpan bersama pengukuran kuantiti.

## Bagaimana bidaan diseimbangkan

Bidaan jarang meliputi skop yang sama. Penyeimbangan mengisi setiap item yang ditinggalkan dengan **tampungan** pada kos kami sendiri, supaya setiap bidaan dibandingkan pada keseluruhan pakej:

**Diseimbangkan = bidaan + tampungan**

Bidaan diseimbangkan terendah ditanda **Terendah**; jika sama, yang dimasukkan dahulu. **Berbanding kos kami** ialah bidaan diseimbangkan tolak kos kami sendiri bagi pakej: negatif bermakna di bawahnya. Bidaan yang kelihatan paling rendah boleh kalah apabila skop yang hilang dikira.

Buku kerja mendapat helaian **Penyeimbangan bidaan** dengan setiap pakej yang mempunyai bidaan: anggaran kami, setiap bidaan, tampungannya, jumlah diseimbangkan dan perbezaan, sebagai formula langsung, dan apa yang setiap bidaan tinggalkan.

## Guna bidaan sebagai harga pakej

Pilih {{ui:Use}} pada bidaan dan ia menjadi harga keseluruhan pakej dalam anggaran anda: harga pakej itu sendiri (item, syarat tambahan dan bahagian himpunannya) keluar daripada jumlah kerja, item kekal sebagai kuantiti dengan kadar anda sendiri untuk rujukan, dan satu baris, **Bidaan dipilih**, membawa jumlah bidaan. Item yang bidaan tinggalkan kekal pada kos anda sendiri, iaitu apa yang penyeimbangan sudah kira sebagai tampungan. Pilih bidaan lain, atau pilih bidaan yang sama sekali lagi untuk mengambilnya balik; setiap satu ialah satu langkah yang {{key:Mod+Z}} buat asal.

Dalam ringkasan bidaan, bidaan subkontraktor ialah satu baris dalam kos: overhead, keuntungan dan bon ditambah di atasnya seperti kos lain; cukai jualan (pada bahan sahaja) dan beban upah (pada upah) tidak. Helaian **Anggaran** dalam buku kerja membawa bidaan dipilih sebagai barisnya sendiri dan blok markup menambahkannya, dengan formula langsung. Senarai bahan tidak termasuk bahan pakej yang telah dianugerahkan, kerana subkontraktor membekalkannya.

Pakej dalam kawasan tawaran alternatif tidak dihargai semula: alternatif dan subjumlah kawasan tawaran masih menggunakan harga anda sendiri.

## Bidaan yang kembali melalui e-mel

Anda tidak perlu menaip bidaan. {{ui:Send for bids…}} di bawah pakej mengirim e-mel kepada setiap subkontraktor pautan ke halaman tempat mereka menaip harga bagi setiap baris; {{ui:Get prices}} menarik apa yang mereka hantar ke dalam jadual ini. Lihat [Hantar pakej untuk bidaan](topic:bid-invitations).

:::note
Menaip bidaan secara manual masih berfungsi, dan bidaan yang ditaip tangan serta bidaan dari laman web berada bersebelahan. Bidaan yang datang dari laman web ditanda **web** (atau **web, lewat** apabila tiba selepas tarikh tamat); harganya hanya berubah apabila pembida menghantar versi baharu, jadi suntingan anda sendiri kekal sehingga itu.
:::
