---
title: Bumbung dan kecerunan
summary: Beri sesuatu kawasan kecerunannya untuk mengukur permukaan bumbung daripada pelan, dan ukur rake, hip dan valley sepanjang cerunnya.
keywords: bumbung, kecerunan, faktor kecerunan, kenaikan, larian, 6:12, rake, hip, valley, gable, perbumbungan, kotak, luas cerun, panjang sebenar, luas pelan
from: 38225b60
---

Pelan bumbung menunjukkan setiap satah bumbung rata, seperti dilihat dari atas. Bumbung itu sendiri lebih besar: satah pada 6:12 mempunyai kira-kira 12% lebih permukaan daripada pelannya, dan tepi condongnya lebih panjang daripada yang kelihatan. Berikan item itu kecerunannya dan TakeoffCraft mengukur sepanjang cerun.

## Menaip kecerunan

Kecerunan ialah kenaikan bagi setiap 12 larian, seperti pada simbol kecerunan pelan bumbung. Taipkannya sebagai `6:12`, `6/12` atau hanya `6`; nisbah lain juga berfungsi (`4:10` ialah 4.8:12). Sudut boleh digunakan dengan tanda darjah: `26.57°`. Kosong atau `0` bermaksud rata.

## Kawasan bumbung

1. Buat item kawasan untuk perbumbungan, atau buka yang sedia ada.
2. Dalam tetapannya, taip **Kecerunan**, contohnya `6:12`.
3. Lakar sempadan setiap satah bumbung pada pelan dengan {{ui:Luas}}, seperti biasa.

Setiap satah dikira dengan luas pelannya didarab faktor kecerunan: √(1 + (kenaikan ÷ 12)²), 1.118 pada 6:12 dan 1.414 pada 12:12. Pilih satah untuk melihat **Luas** (pada cerun), **Luas pelan** dan **Faktor kecerunan**.

Satah dengan kecerunan lain: pilih satah dan taip **Kecerunan** sendiri dalam panelnya. Biarkan kosong untuk menggunakan kecerunan item. Paparan semakan 3D, himpunan (`A` ialah luas cerun), kos dan eksport semuanya menggunakan luas cerun. Pengurangan pada satah berkecerunan, seperti tingkap langit, ditolak pada cerun yang sama.

Perimeter (`P`) kekal sebagai perimeter pelan. Ukur cucur atap, rake, hip dan valley sebagai larian (di bawah).

## Rake, hip dan valley

1. Buat item linear, seperti "Tepi rake" atau "Hip".
2. Tetapkan **Cerun** kepada **Rake** (tepi condong, seperti tepi gable) atau **Hip atau valley** (garisan tempat dua satah bertemu), dan taip **Kecerunan** satah bumbung.
3. Lukis larian pada pelan dengan {{ui:Linear}}.

Rake dikira dengan panjang pelannya didarab faktor kecerunan. Hip atau valley berjalan pada 45° merentasi pelan antara dua satah dengan kecerunan yang sama, jadi panjang sebenarnya ialah panjang pelannya didarab √(1 + (kenaikan ÷ 12)² ÷ 2): 1.061 pada 6:12, 1.225 pada 12:12.

Satu larian boleh mencampurkannya. Pilih ia: setiap segmen dalam panelnya mempunyai senarai cerun — **Item** (tetapan item), **Aras**, **Rake** atau **Hip atau valley** — dan panjangnya sepanjang cerun. **Kecerunan** sendiri bagi larian dalam panel menggantikan kecerunan item untuk semua segmennya. Panel juga memaparkan **Panjang pelan**, dan label pada helaian menunjukkan panjang sepanjang cerun.

Potongan masih berfungsi: segmen yang ditolak tidak dikira apa-apa, sama ada berkecerunan atau tidak.

:::note
Hip dan valley menganggap kedua-dua satah mempunyai kecerunan yang sama. Bagi satah dengan kecerunan berbeza, ukur hip mengikut panjang sebenarnya di tempat lain, atau lukiskannya sebagai rake dengan kecerunan yang setara.
:::
