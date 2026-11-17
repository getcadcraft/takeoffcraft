---
title: Hantar pakej untuk bidaan
summary: E-melkan pakej bidaan kepada subkontraktor, biarkan mereka menaip harga pada halaman yang tidak memerlukan akaun, simpan harga tertutup sehingga masa pembukaan, dan tarik mereka ke dalam helaian penyeimbangan.
keywords: hantar untuk bidaan, jemputan, jemputan bidaan, pembida, subkontraktor, jemput, e-mel, permintaan harga, bidaan tertutup, pembukaan bidaan, hari bidaan, bidaan lewat, tarikh akhir, peringatan, rekod subkontraktor, insurans, kelayakan, csv, sambung, pdf helaian
from: fb314b2c
---

{{ui:Export}} › {{ui:Bid packages and leveling…}} › {{ui:Send for bids…}} menghantar satu pakej kepada orang yang anda pilih. Laman web itu mengirim e-mel pautan kepada setiap seorang; mereka membuka halaman, melihat skop dan menaip harga bagi setiap baris. Anda melihat harga dalam helaian penyeimbangan, sedia untuk dibandingkan ([Pakej bidaan dan penyeimbangan bidaan](topic:bid-leveling)).

:::note
Penghantaran **belum dibuka kepada semua orang.** Semasa ciri ini diuji ia berfungsi untuk akaun yang didayakan oleh pasukan CadCraft; jika akaun anda tidak, dialog akan memberitahu. Halaman pembida berfungsi untuk setiap jemputan yang telah dihantar.
:::

## Sebelum anda menghantar

- Anda memerlukan akaun CadCraft dengan alamat e-mel yang disahkan. TakeoffCraft dalam pelayar meminta anda **Sambung**: tab dibuka di getcadcraft.com, anda tekan Sambung, dan tab itu mendapat log masuk yang berfungsi selama 30 hari, untuk pakej bidaan sahaja, sehingga anda menutup tab TakeoffCraft. Anda boleh mengeluarkannya bila-bila masa pada halaman keselamatan anda. Tetingkap Studio belum boleh menghantar.
- Berikan setiap item nombor CSI: pakej ialah item bagi satu bahagian CSI ([Cipta item pengukuran kuantiti](topic:create-items)).
- Tetapkan skala helaian yang memegang tanda pakej, supaya kuantiti yang dilihat pembida diukur.

## Hantar pakej

1. Pilih {{ui:Send for bids…}} di bawah pakej.
2. Isi tajuk, projek dan mesej pilihan, serta **masa tamat** dalam zon masa anda sendiri.
3. Biarkan **Kekalkan harga tertutup** ditanda untuk menyembunyikan setiap harga sehingga **masa pembukaan** (bukan sebelum masa tamat), atau nyahtanda untuk melihat harga apabila ia tiba.
4. Biarkan kotak helaian ditanda untuk menghantar PDF helaian yang memegang tanda pakej, dengan tanda dilukis. Harga anda tidak pernah ada dalam apa yang dihantar: hanya nama item, nombor CSI, kuantiti, unit dan nama helaian.
5. Taip orang untuk dijemput, satu setiap baris, sebagai `Nama <nama@syarikat.com>` atau hanya alamat, atau tanda orang daripada rekod subkontraktor anda. Sehingga 60 pada satu masa, 100 setiap pakej.
6. Pilih {{ui:Send invitations}}. Setiap orang mendapat satu e-mel ringkas dengan nama dan alamat e-mel anda, masa tamat dan pautan; balasan pergi kepada anda.

Dialog memberitahu anda berapa banyak yang dihantar dan menamakan sesiapa yang dilangkau: sudah dijemput ke pakej ini, diminta tidak menerima jemputan bidaan, bukan alamat yang sah, atau melebihi had penghantaran.

## Apa yang dilihat pembida

Halaman di pautan persendirian yang panjang, tanpa log masuk. Ia menunjukkan siapa yang menjemput mereka, masa tamat, sama ada harga tertutup, mesej anda dan PDF helaian, kemudian setiap baris dengan kuantitinya. Untuk setiap baris mereka menaip harga atau menanda **Tidak termasuk**, dan boleh menambah nota; mereka menambah nota untuk seluruh pakej dan sehingga 3 fail (sebut harga, surat skop, sijil). Mereka boleh simpan semula dan menukar harga mereka sehingga pembukaan, atau **tolak**, dengan kotak untuk meminta CadCraft tidak menghantar jemputan bidaan kepada mereka lagi.

## Bidaan tertutup dan pembukaan

Sebelum masa pembukaan **tiada siapa** melihat harga, nota atau fail: bukan anda, bukan dalam TakeoffCraft, bukan pada halaman Pakej bidaan anda. Anda melihat siapa yang dijemput dan sama ada mereka menjawab. Pada masa pembukaan setiap bidaan dipaparkan serentak. Bidaan yang disimpan selepas masa tamat diterima dan ditanda **lewat**; penyeimbangan masih menyenaraikannya, dan kelewatan ialah tanda, bukan keputusan. Selepas pembukaan pembida tidak boleh menukar harga. Tanpa penyegelan, bidaan muktamad sebaik ia tiba masa tamat.

## Dapatkan harga

{{ui:Get prices}} meminta laman web dan menambah setiap jawapan ke pakej sebagai bidaan, ditanda **web**. TakeoffCraft juga meminta secara senyap setiap kali anda membuka dialog semasa ia disambungkan. Bidaan yang pembidanya simpan sebagai versi baharu dikemas kini di tempat; bidaan yang anda sunting kekal seperti yang anda tinggalkan sehingga mereka menghantar versi baharu. Setiap tarikan ialah satu langkah yang {{key:Mod+Z}} buat asal. Baris yang ditinggalkan dibawa masuk sebagai skop yang tidak dimasukkan oleh bidaan itu, supaya penyeimbangan mengisinya dengan kos anda sendiri.

## Di laman web

Akaun anda mempunyai dua halaman lagi setelah anda boleh menghantar: **Pakej bidaan** menyenaraikan apa yang anda hantar, siapa yang menjawab, bidaan lewat dan fail, dan membolehkan anda menghantar peringatan (pautan baharu; pautan lama berhenti berfungsi), menutup, membuka semula atau membatalkan pakej. **Subkontraktor** menyimpan rekod untuk setiap syarikat: kenalan, bidang kerja, jawapan kelayakan (tahun dalam perniagaan, kapasiti bon, EMR, rekod keselamatan, kesatuan atau kedai terbuka, rujukan), tarikh luput lesen dan insurans, ditanda sebaik lepas atau dalam masa 30 hari, dan bidaan lalunya. Import dan eksport rekod sebagai CSV: satu baris setiap kenalan, dengan lajur yang dipaparkan eksport; syarikat yang sudah anda ada dikemas kini, tidak pernah diulang.

## Siapa yang melihat apa, dan berapa lama

Harga, nota dan fail pembida pergi kepada anda dan kepada pasukan CadCraft, yang menjalankan halaman itu. Ia disimpan selama 24 bulan selepas tarikh tamat, fail selama 180 hari; kemudian dipadamkan. Alamat e-mel pembida ialah yang anda masukkan; ia hanya digunakan untuk menghantar jemputan dan sebarang peringatan untuknya. Satu alamat menerima paling banyak 3 jemputan sehari daripada semua pihak sekali gus, dan anda boleh menghantar sehingga 200 sehari.

## Belum dibina

Adendum, surat anugerah, helaian skop yang disahkan bagi setiap pembida, dan peringatan automatik sebelum tarikh insurans tamat belum dibina. Lihat [Belum dibina](topic:not-built-yet).
