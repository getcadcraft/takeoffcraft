---
title: Bandingkan lembar revisi dan pindahkan takeoff
summary: Letakkan lembar lama di atas revisinya, sejajarkan keduanya, lihat apa yang berubah, dan pindahkan takeoff ke lembar baru dengan tanda yang perlu diperiksa ditandai.
keywords: revisi, direvisi, bandingkan, overlay, lama, baru, perubahan, addendum, buletin, terbitkan ulang, pindahkan takeoff, transfer, bawa, sejajarkan, ditandai, periksa
from: 3a1d9fe0
---

Saat sebuah lembar diterbitkan ulang, Anda tidak perlu menghitung takeoff dari awal. Buka PDF lama dan yang baru, bandingkan kedua lembar, dan pindahkan takeoff ke sana. TakeoffCraft menandai setiap tanda yang gambarnya berubah, sehingga Anda memeriksa tanda-tanda itu dan mempertahankan sisanya.

## Bandingkan

1. Buka kedua PDF: set lama dan yang direvisi ({{ui:Open plans}}; keduanya bisa berada dalam satu file atau beberapa file).
2. Tampilkan lembar **baru**.
3. Pilih {{ui:Compare}} di bilah lembar di bawah gambar.
4. Pilih lembar lama dalam daftar. TakeoffCraft menyarankan lembar dengan nomor yang sama di PDF lainnya, atau halaman yang sama. Pilih **Bandingkan**.

Gambar lama sekarang berada di atas gambar baru dalam warna merah. Di mana keduanya sama, garis merah berada di atas garis hitam; di mana berbeda, Anda melihat garis merah saja (dihapus) dan garis hitam saja (ditambahkan). Sebuah bilah di bagian bawah lembar memuat langkah-langkah di bawah ini; {{key:Esc}} atau {{ui:Close}} mengakhiri perbandingan.

## Sejajarkan

Lembar yang diterbitkan ulang sering dicetak sedikit meleset: tergeser di halaman, atau dengan ukuran yang sedikit berbeda. Jika gambar merah tidak berada tepat di atas yang hitam, pilih **Sejajarkan dengan dua titik** lalu klik empat kali:

1. sebuah titik pada gambar lama (merah), misalnya pusat kolom atau sudut bangunan,
2. titik yang sama pada gambar baru (hitam),
3. titik kedua pada gambar merah, jauh dari titik pertama,
4. titik yang sama pada gambar hitam.

Gambar merah akan bergeser, berputar, dan diskalakan agar tepat di atas gambar hitam. Bilah status menyatakan seberapa besar gambar baru ("ukuran × 1.000" jika ukurannya sama). Perbesar untuk memilih titik: semakin dekat Anda klik, semakin baik hasilnya.

## Temukan apa yang berubah

Pilih **Temukan perubahan**. TakeoffCraft membandingkan tinta kedua gambar: tinta yang hanya ada di lembar lama menjadi merah, tinta yang hanya ada di lembar baru menjadi biru, dan bilah status menghitungnya. Garis yang bergeser sedikit (cetak ulang) tidak dihitung sebagai perubahan.

TakeoffCraft juga memeriksa setiap tanda di lembar lama dan menghitung yang berada di tempat gambar berubah:

- sebuah lintasan atau area ketika gambar berubah di salah satu ujung atau sudutnya, atau sepanjang setidaknya sekitar seperenam panjangnya;
- sebuah hitungan ketika ada yang berubah tepat di sebelahnya.

## Pindahkan takeoff

Pilih **Pindahkan takeoff ke sini**. Setiap tanda di lembar lama berpindah ke lembar baru, melalui penyejajaran, dalam satu langkah urungkan. Yang berada di sebelah perubahan ditandai: diberi halo oranye, dan bilah lembar menampilkan "(n) perlu diperiksa".

Jika lembar baru tidak memiliki skala, ia mengambil skala lembar lama (disesuaikan jika gambar harus diskalakan agar sejajar). Jika sudah memiliki skala lain yang berbeda, TakeoffCraft bertanya terlebih dahulu: tanda yang dipindahkan diukur pada skala lembar baru.

## Periksa tanda yang ditandai

1. Pilih "(n) perlu diperiksa" di bilah lembar. Lembar diperbesar ke tanda bertanda berikutnya dan memilihnya; panelnya menjelaskan alasan penandaan.
2. Perbaiki tanda jika gambar berubah di bawahnya (seret sudutnya, tambah atau hapus tanda, atau hitung ulang).
3. Pilih **Diperiksa** di panelnya. Penandaan hilang, dan jumlah di bilah lembar berkurang.

Tanda yang ditandai disimpan bersama takeoff, sehingga Anda dapat memeriksanya nanti.

:::note
Perbandingan bekerja pada PDF vektor maupun pindaian, karena yang dibandingkan adalah apa yang digambar. Pindaian yang miring atau meregang mungkin hanya sejajar secara kasar dengan dua titik; periksa lebih banyak tanda dengan mata setelahnya.
:::
