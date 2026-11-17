---
title: Pek perdagangan
summary: Tambah himpunan percuma untuk satu perdagangan ke pustaka harga anda, alih keluarnya dalam satu langkah, dan kongsi pustaka anda sendiri sebagai pek.
keywords: pek perdagangan, pek, himpunan, templat, item permulaan, elektrik, drywall, rangka, mengecat, konkrit, lantai, bata, bumbung, siding, pertukangan kayu, paip, hvac, penebat, landskap, dek, kontraktor am, csi, masterformat, cc0, tambah, alih keluar, kongsi
from: d3c036be
---

**Pek perdagangan** ialah set item siap sedia untuk satu perdagangan: setiap satu dengan unitnya, ketinggian atau kedalamannya, pembaziran dan **himpunannya**, iaitu bahagian dan formula yang menukar larian, luas atau kiraan yang diukur kepada bahan. Sekatan drywall, contohnya, membawa landasnya, kayu rangka, papan, skru, pita dan sebatian sambungan.

Pek ditambah ke [pustaka harga](topic:price-library) anda, dan dari situ anda menambah itemnya ke mana-mana pengukuran kuantiti.

## Tambah pek

1. Buka {{ui:Library}} di bahagian atas panel {{ui:Items}}, kemudian {{ui:Trade packs…}}.
2. Pilih {{ui:Units}}: imperial (LF, SF), metrik (m, m²) atau kedua-duanya. Setiap himpunan datang dalam kedua-dua sistem.
3. Pilih {{ui:Add}} di sebelah pek.

Item pek muncul dalam pustaka, ditanda dengan nama pek. Untuk menggunakannya, tandakannya dalam pustaka dan pilih {{ui:Add to takeoff}}.

:::note
**Pek tidak membawa harga.** Itemnya menunjukkan "tetapkan kadar anda" dalam pustaka. Kadar ialah milik anda: taipkannya dalam pustaka atau penyunting item, atau import senarai harga anda sebagai CSV dan gunakan {{ui:Update prices}}.
:::

Jika anda sudah mempunyai item dengan nama dan jenis yang sama dalam pustaka anda, pek itu membiarkan milik anda seperti sediakala. Menambah pek sekali lagi menggantikan item miliknya sendiri dengan versi baharu.

## Alih keluar pek

Dalam {{ui:Trade packs…}}, pilih {{ui:Remove}} di sebelah pek yang anda tambah, kemudian sekali lagi untuk mengesahkan. Setiap item yang datang daripadanya keluar daripada pustaka dalam satu langkah. Item yang sudah anda tambah ke pengukuran kuantiti kekal dalam pengukuran kuantiti itu.

## Apa yang ada dalam pek

Pilih {{ui:Sources and details}} di bawah pek untuk melihat daripada apa setiap himpunan ditulis: kod bangunan, piawaian dan panduan pemasangan persatuan perdagangan. Dalam pustaka, letakkan penuding pada item untuk membaca sumber dan andaiannya, seperti jarak kayu rangka atau kadar sapuan cat. Semak dengan kerja anda dan data helaian produk anda, dan tukar formula di mana ia berbeza (lihat [Himpunan dan formula](topic:assemblies)).

Setiap pek ditanda **Permulaan: belum disemak oleh penganggar lagi** sehingga penganggar kerja menyemaknya.

Setiap item juga membawa nombor CSI MasterFormat, seperti `09 21 16`.

## Kongsi pustaka anda sebagai pek

{{ui:Export as pack…}} dalam pustaka menyimpan pustakanya sebagai fail pek (`.ccpack.json`) yang sesiapa pun boleh tambah dengan {{ui:Open a pack file…}}. Secara lalai ia meninggalkan item yang datang daripada pek yang anda tambah, dan tidak membawa sebarang kadar. Tandakan {{ui:Include my rates as sample rates}} untuk menghantar kadar anda juga: ia dilabelkan dengan rantau dan tarikh yang anda beri, dan sesiapa yang menambah pek memilih sama ada mahu menggunakannya.

Fail pek ialah data biasa, bukan program. TakeoffCraft menyemak setiap bahagiannya sebelum menggunakannya dan meninggalkan apa-apa yang tidak dapat dibacanya.
