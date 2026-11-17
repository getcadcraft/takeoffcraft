---
title: Atur skala
summary: Beri setiap lembar skala dengan preset atau dengan kalibrasi pada dimensi yang diketahui, periksa, dan pahami mengapa lembar tanpa skala tidak dimasukkan ke dalam total.
keywords: deteksi skala, baca skala, skala dari teks, semua lembar, skala, kalibrasi, preset, periksa skala, verifikasi, dimensi yang diketahui, tanpa skala, rasio, atur skala
from: 8f0148e6
---

Setiap lembar memiliki skalanya sendiri. Anda mengaturnya, atau membiarkan TakeoffCraft membacanya dari teks lembar (lihat di bawah), lalu memeriksanya. Selama sebuah lembar belum memiliki skala, {{ui:Linear}}, {{ui:Luas}}, {{ui:Lingkaran}}, dan {{ui:Lubang potong}} tidak mau mengukur di atasnya. {{ui:Hitung}} dan {{ui:Hitung otomatis}} bekerja tanpa skala.

Daftar lembar menampilkan skala setiap lembar, atau **Tanpa skala**. Bilah di bawah lembar yang terbuka menampilkan hal yang sama.

## Gunakan preset (jika PDF dicetak dalam ukuran penuh)

1. Buka lembar.
2. Buka daftar {{ui:Preset}} di grup {{ui:Skala}}.
3. Pilih skala yang tercetak pada gambar, misalnya `1/8" = 1'-0"` di bawah Arsitektural.
   Bilah status menampilkan "Scale for this sheet: 1/8" = 1'-0"."
4. Periksa (lihat di bawah).

Preset berasumsi bahwa PDF adalah ukuran kertas asli tempat gambar dibuat. Jika seseorang membuat PDF dengan "fit to page", atau itu adalah set berukuran setengah, preset tersebut keliru. Kalibrasi sebagai gantinya.

Daftar lengkapnya ada di [Preset skala](topic:scale-presets).

## Baca skala dari teks lembar

Kebanyakan gambar menyebutkan skalanya: `SCALE: 1/4" = 1'-0"` di kepala gambar, `1:100` di bawah sebuah tampilan. TakeoffCraft dapat membacanya dan mengatur setiap lembar sekaligus.

1. Buka daftar {{ui:Preset}} dan pilih {{ui:Dari teks lembar…}} (di bagian atas).
2. Daftar menampilkan setiap lembar: skala saat ini, dan apa yang tertulis di teksnya — **Says 1/4" = 1'-0"**, **No scale in its text**, atau **Says not to scale** (NTS).
3. Lembar tanpa skala yang menuliskan skala akan dicentang. Centang atau hapus centang pada lembar mana pun, lalu pilih {{ui:Atur skala yang dicentang}}. Satu {{key:Mod+Z}} membatalkan semuanya.
4. Periksa satu dimensi pada setiap lembar dengan {{ui:Periksa}} (di bawah): preset hanya benar jika PDF dicetak dalam ukuran penuh.

TakeoffCraft membaca notasi arsitektural (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), teknik (`1" = 20'`), dan metrik (`1:50`) yang cocok dengan [preset](topic:scale-presets). Jika sebuah lembar menuliskan lebih dari satu skala (denah dengan detail yang diperbesar), yang dipakai adalah yang paling sering disebutkan; skala yang ditulis setelah kata SCALE dihitung dua kali. Skala lainnya ditampilkan dengan warna merah agar Anda dapat memeriksanya. Lembar hasil pindai tidak memiliki teks: atur skalanya secara manual.

## Kalibrasi pada dimensi yang diketahui

Gunakan ini jika tidak ada skala tercetak yang dapat Anda percaya, set telah diubah ukurannya, atau lembar bertuliskan "tidak sesuai skala" tetapi memiliki dimensi.

1. Buka lembar dan perbesar sebuah dimensi panjang yang Anda ketahui, seperti jarak garis grid atau dimensi keseluruhan bangunan. Semakin panjang, semakin akurat.
2. Pilih {{ui:Kalibrasi}} di grup {{ui:Skala}}, atau tekan {{key:K}}.
3. Klik salah satu ujung dimensi. Perbesar di setiap ujung untuk ketelitian; Anda dapat memperbesar dan menggeser di antara klik.
4. Klik ujung yang lain. Tahan {{key:Shift}} untuk menjaga garis tetap pada 0°, 45°, atau 90°.
   Dialog **Kalibrasi lembar ini** terbuka.
5. Ketik jarak sebenarnya di **Jarak nyata**, misalnya `24'-6 1/2"`, `24.5` (kaki desimal), `30"`, atau `7.5 m`. Lihat [Format entri panjang, harga, dan persen](topic:entry-formats).
6. Pilih {{ui:Atur skala}}.
   Bilah status menampilkan skala sebagai "1" = (n)'", dan jika berada dalam 0.5% dari sebuah preset, ia menyebutkan yang mana, misalnya "which matches 1/4" = 1'-0" (pick that preset for an exact scale)".
   TakeoffCraft kembali ke alat {{ui:Pilih}}.

Jika kalibrasi cocok dengan sebuah preset, memilih preset itu memberi skala yang tepat, bukan skala yang bergantung pada tempat Anda mengklik.

## Periksa skala

Selalu periksa skala baru pada dimensi kedua.

1. Pilih {{ui:Periksa}} di grup {{ui:Skala}}, atau tekan {{key:D}}.
2. Klik kedua ujung sebuah dimensi yang tercetak pada gambar.
   Bilah status menampilkan "Check: 12'-6"" dengan panjang yang sama dalam kaki desimal dan meter, dan garis periksa tetap berada di lembar beserta panjangnya.
3. Bandingkan dengan dimensi yang tercetak. Jika meleset, kalibrasi ulang dengan dimensi yang lebih panjang.

Tekan {{key:Esc}} untuk menghapus garis periksa.

## Ubah skala

Pilih preset lain atau kalibrasi ulang. Jika lembar sudah memiliki pengukuran, TakeoffCraft menanyakan **Ubah skala lembar ini?** dan memberi tahu berapa banyak pengukuran yang akan diukur ulang. Pilih {{ui:Ubah skala}}. Setiap lintasan dan area di lembar diukur ulang dengan skala baru. Anda dapat membatalkannya dengan {{key:Mod+Z}}.

## Mengapa lembar tanpa skala tidak dihitung sebagai nol

Tanda pada lembar tanpa skala tidak memiliki panjang atau luas yang sebenarnya. TakeoffCraft tidak pernah menghitungnya sebagai nol, karena itu diam-diam membuat estimasi Anda terlalu rendah. Sebagai gantinya, aplikasi:

- tidak memasukkan tanda tersebut ke dalam total,
- menampilkan "+(n) unscaled" di samping item di {{ui:Kuantitas}},
- menampilkan "Incomplete: (n) marks on sheets with no scale (not in the totals)" di header tabel,
- menulis jumlahnya di kolom catatan pada ekspor spreadsheet.

Ini dapat terjadi saat Anda membuka proyek yang skalanya belum pernah diatur. Beri lembar itu skala, dan tanda langsung dihitung. Tanda hitung selalu dihitung; tanda itu tidak memerlukan skala.

## Tips

- Atur skala pada setiap lembar yang akan Anda ukur sebelum mulai. Pindai daftar lembar untuk mencari **Tanpa skala** guna menemukan lembar yang tersisa (kotak pencarian melihat nama lembar, bukan skala).
- Detail dan denah yang diperbesar pada lembar yang sama sering memakai skala lain. TakeoffCraft hanya memiliki satu skala per lembar; lihat [Yang belum dibuat](topic:not-built-yet).
- Gambar metrik: pilih preset metrik seperti `1:100`, atau kalibrasi dengan jarak metrik seperti `6000 mm`.
