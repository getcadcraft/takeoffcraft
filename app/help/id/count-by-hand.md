---
title: Hitung secara manual
summary: Klik setiap pintu, perlengkapan, atau perangkat untuk menghitungnya, periksa hitungan Anda, dan perbaiki kesalahan.
keywords: hitung, setiap, ea, perlengkapan, pintu, perangkat, simbol, tally, hitung dengan klik, hitung manual
from: 594f2980
---

Item hitung menghitung benda: pintu, lampu, stop kontak, perlengkapan plambing. Setiap klik di lembar menambahkan satu tanda hitung. Menghitung tidak memerlukan skala.

## Hitung

1. Buat atau klik item hitung di bawah {{ui:Items}} (tipe {{ui:Count}}).
2. Pilih {{ui:Count}} di bilah alat, atau tekan {{key:C}}.
3. Klik setiap benda di lembar.
   Setiap klik menempatkan titik dengan warna item, dan jumlah item bertambah satu.
4. Pindah ke lembar berikutnya ({{key:PageDown}}) dan lanjutkan menghitung. Alat tetap pada {{ui:Count}}.
5. Tekan {{key:Esc}} saat selesai. TakeoffCraft kembali ke {{ui:Select}}.

Menyeret tetap menggeser dan roda tetap melakukan zoom saat Anda menghitung, sehingga Anda bisa berpindah di sekitar lembar tanpa menambah titik.

:::tip
Klik item hitung untuk menyorot titiknya di setiap lembar. Daftar lembar kemudian menampilkan berapa banyak titik di setiap lembar, yang membantu Anda menemukan lembar yang belum dihitung.
:::

## Perbaiki hitungan

- **Hapus titik**: pilih {{ui:Select}} ({{key:V}}), klik titik, lalu tekan {{key:Delete}} atau pilih {{ui:Delete mark}}. Atau tekan {{key:Mod+Z}} tepat setelah klik yang salah.
- **Pindahkan titik**: pilih titik, lalu seret.
- **Dihitung di bawah item yang salah**: pilih titik dan pilih item hitung yang benar di daftar **Item** di bawah **Tanda terpilih**.

## Ukuran titik, di layar dan di PDF

Titik mempertahankan satu ukuran di layar berapa pun zoom-nya. Untuk mengubahnya, buka {{ui:Settings}}, tab TakeoffCraft, dan pilih **Ukuran penanda hitung**: Sangat kecil, Kecil, Sedang (bawaan), atau Besar.

Ekspor PDF ({{ui:Export}} › PDF bertanda) menggambar setiap titik dengan ukuran yang sama di kertas, apa pun ukuran lembarnya: penampil yang menampilkan PDF pada 100% menunjukkan titik sebesar yang ada di layar. Jika titik pada sebuah lembar masih akan bersentuhan, ekspor membuat titik di lembar itu lebih kecil agar setiap titik tetap bisa dibaca.

## Banyak simbol yang sama

Untuk simbol yang berulang banyak kali pada sebuah lembar, coba [Hitung otomatis](topic:auto-count): kotak satu, tinjau apa yang ditemukannya, lalu tambahkan semuanya sekaligus.

## Menggunakan hitungan dalam rumus

Kuantitas item hitung adalah **N**. Komponen rakitan dapat menggunakannya, misalnya engsel `N * 3` untuk pintu. Lihat [Rakitan dan rumus](topic:assemblies).
