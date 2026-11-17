---
title: Snap ke garis gambar
summary: Titik melompat ke garis vektor PDF saat Anda mengukur atau mengalibrasi: ujung, titik tengah, perpotongan, atau di mana saja pada garis, dengan penanda yang menunjukkan jenisnya.
keywords: snap, osnap, snap objek, titik ujung, titik tengah, perpotongan, terdekat, vektor, garis, presisi, tepat, f3, magnet, sudut
from: 41d29e9b
---

Sebagian besar kumpulan denah adalah PDF vektor: dinding dan tepinya adalah garis nyata, bukan piksel. Saat Anda mengukur, TakeoffCraft menempelkan klik Anda ke garis-garis itu, sehingga sebuah run dimulai tepat di sudut dinding dan kalibrasi membaca dimensi yang digambar oleh drafter, bukan piksel yang Anda klik.

Snap aktif saat Anda mulai. Nyalakan dan matikan dengan {{ui:Snap}} di bilah status atau {{key:F3}}; pengaturannya disimpan di peramban ini (juga ada di [Pengaturan](topic:settings)).

## Yang ditempelkan

Saat penunjuk berada dalam jarak sekitar 10 piksel layar dari sebuah garis, sebuah penanda menunjukkan di mana klik akan mendarat, beserta namanya:

| Penanda | Nama | Lokasi |
|---|---|---|
| Persegi | **Ujung** | Ujung sebuah garis, atau sudut tempat garis-garis bertemu. Kedua ujung kurva dihitung; titik di sepanjangnya tidak. |
| Segitiga | **Titik tengah** | Titik tengah sebuah garis lurus. |
| Silang | **Perpotongan** | Tempat dua garis berpotongan, atau tempat satu garis berakhir pada garis lain. |
| Jam pasir | **Pada garis** | Titik terdekat pada sebuah garis, saat tidak ada ujung, titik tengah, atau perpotongan yang dekat. |

Ujung, titik tengah, atau perpotongan terdekat yang menang. Hanya jika tidak ada yang dekat, titik berpindah ke garis itu sendiri. Perbesar tampilan untuk memilih di antara titik-titik yang berdekatan: 10 piksel adalah piksel layar, jadi pada zoom yang lebih tinggi keduanya mencakup lebih sedikit bagian lembar.

## Tempat ia bekerja

Snap bekerja di {{ui:Linear}}, {{ui:Luas}}, {{ui:Lingkaran}}, {{ui:Lubang potong}}, {{ui:Kalibrasi}} dan {{ui:Periksa}}, serta saat Anda menyeret sudut tanda yang terpilih. Snap juga menempatkan titik busur. {{ui:Hitung}}, {{ui:Hitung otomatis}} dan menempel tidak di-snap.

Titik yang di-snap mengalahkan snap 45° dari {{key:Shift}}: untuk menggambar pada 45° menjauhi garis, matikan Snap dengan {{key:F3}} terlebih dahulu.

:::tip
Kalibrasi dengan Snap aktif. Klik dekat kedua ujung garis dimensi atau dinding yang Anda ketahui: kedua titik mendarat tepat pada gambar, dan skala menjadi akurat (bilah status kemudian menyebutkan preset yang cocok).
:::

## Lembar yang tidak dapat di-snap

- **Lembar hasil pindai** adalah gambar tanpa garis untuk di-snap. Bilah status menampilkan "Lembar ini tidak memiliki garis untuk di-snap (halaman pindaian adalah gambar)." dan titik ditempatkan di tempat Anda klik.
- **Gambar yang sangat besar**: snap membaca hingga 400.000 segmen garis per lembar. Pada lembar yang lebih banyak, bilah status menyebutkannya dan hanya meng-snap ke segmen pertama.
- **Teks** tidak di-snap, kecuali PDF menggambar hurufnya sebagai garis (sebagian plotter melakukannya).

Garis lembar dibaca saat pertama kali Anda membukanya, di latar belakang; lembar yang besar dapat memerlukan satu detik sebelum penanda muncul.
