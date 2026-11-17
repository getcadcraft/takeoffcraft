---
title: Ekspor estimasi dan PDF bertanda
summary: Unduh estimasi sebagai buku kerja XLSX dengan rumus langsung atau sebagai CSV, dan salinan PDF Anda dengan takeoff yang tergambar di atasnya.
keywords: proposal, ringkasan penawaran, ekspor, xlsx, spreadsheet, buku kerja, csv, pdf bertanda, cetak takeoff, laporan, bagikan, kirim, keterangan
from: 334f89c7
---

Ekspor adalah unduhan. Dibuat di komputer Anda dari takeoff dan PDF yang terbuka; tidak ada yang dikirim ke mana pun.

## Estimasi sebagai spreadsheet (XLSX)

1. Buka menu {{ui:Ekspor}} di bilah alat dan pilih {{ui:XLSX}}.
   Peramban Anda mengunduh `(name).xlsx`. Bilah status menampilkan "Diekspor (name).xlsx (estimasi dengan rumus langsung, per lembar, tanda, skala)." dan menambahkan peringatan bila estimasi tidak lengkap.
2. Buka berkas itu di program spreadsheet Anda.

Buku kerja memiliki empat lembar kerja, serta laporan di bawah bila berlaku:

| Lembar kerja | Isinya |
|---|---|
| Estimate | Satu baris per item dan per komponen: kuantitas, susut, kuantitas dengan susut, harga satuan, material, upah, total, dan catatan. Total pekerjaan di bagian bawah. |
| By sheet | Kuantitas setiap item pada setiap lembar, dengan jumlah tanda. |
| Marks | Setiap tanda: lembar, item, tipe, kuantitas, dan detail (panjang segmen, luas kotor dan potongan, keliling). |
| Scales | Setiap lembar yang memiliki skala atau tanda: skalanya, cara penetapannya (preset, atau dikalibrasi pada jarak mana), dan feet per unit PDF. |
| Takeoff summary | Kuantitas, nomor CSI, tanda, dan lembar setiap item, tanpa harga. |
| Material list | Setiap bagian assembly dijumlahkan di seluruh takeoff (bagian yang sama dipakai beberapa item menjadi satu baris), dengan susut dan biaya material, serta item yang memakainya. |
| Quote request | Daftar material untuk dikirim ke pemasok: kuantitas dengan susut, kolom harga satuan kosong, dan jumlah harga serta total yang terisi saat harga diketik. |
| By division | Material, upah, dan total per divisi CSI MasterFormat, bila item memiliki {{ui:Nomor CSI}}. |

Dengan [ringkasan penawaran](topic:bid-summary), lembar Estimate juga diakhiri dengan markup-nya (beban upah, pajak penjualan, overhead, profit, bond, dan penawaran), sebagai rumus langsung.

Lembar Estimate menyimpan **rumus langsung**: kuantitas dengan susut, jumlah material dan upah yang dibulatkan, total setiap baris, dan total pekerjaan. Program spreadsheet menghitung ulang, jadi Anda bisa mengubah harga atau susut di spreadsheet dan totalnya mengikuti. Angka yang dihitung TakeoffCraft juga disimpan di dalam sel, dan cocok sampai sen.

Kolom Notes mencantumkan rumus setiap komponen, kesalahan rumus, tanda pada lembar tanpa skala, luas dinding, dan keliling. Bila ada yang terlewat, baris total pekerjaan berbunyi "Tidak lengkap: lihat catatan di atas".

Buku kerja telah diperiksa di LibreOffice Calc, yang menghitung ulang ke total yang sama. Buku kerja itu belum diuji di Excel. Rincian per kolom ada di [Kolom ekspor](topic:export-columns).

## Estimasi sebagai CSV

Buka menu {{ui:Ekspor}} dan pilih {{ui:CSV}}. Anda mendapat `(name).csv`: baris dan kolom yang sama seperti lembar Estimate, sebagai nilai polos (tanpa rumus), serta total pekerjaan. Gunakan untuk menempelkannya ke sistem estimasi atau akuntansi lain.

CSV hanya berisi estimasi; untuk kuantitas per lembar dan daftar tanda, gunakan XLSX. {{ui:Daftar material}} di menu yang sama menyimpan daftar material saja sebagai CSV, untuk pemesanan.

## Estimasi di Google Sheets

Di atas tabel Kuantitas, **Salin untuk Google Sheets** menempatkan estimasi di papan klip sebagai teks yang dipisahkan tab, dengan baris yang sama seperti CSV. Di Google Sheet, klik sel A1 lalu tempel. TakeoffCraft tidak masuk ke Google dan tidak mengirim apa pun ke sana.

## Harga satuan yang hilang dan persetujuan

Baris dengan kuantitas tetapi tanpa harga satuan bertuliskan **Tanpa harga satuan** di Notes-nya, dan ekspor menghitungnya di bawah total. Bila estimasi sudah disetujui, ekspor menyebutkan siapa yang menyetujui, kapan, dan untuk total berapa. Lihat [Harga satuan yang hilang dan persetujuan estimasi](topic:sign-off-the-estimate).

## PDF bertanda

1. Buka PDF yang tandanya ingin Anda gambar.
2. Buka menu {{ui:Ekspor}} dan pilih {{ui:PDF bertanda}}.
   "Menulis PDF bertanda…" muncul, lalu peramban Anda mengunduh satu berkas per PDF bertanda, dinamai `(PDF name) (takeoff).pdf`.

Pada salinannya:

- tanda run digambar sebagai garis dengan warna itemnya,
- area diisi tipis dengan garis tepi solid, dan potongan dibiarkan terbuka,
- hitungan berupa titik,
- setiap halaman yang memiliki tanda mendapat keterangan kecil di pojok kiri bawahnya: warna, nama, dan kuantitas setiap item pada halaman itu.

PDF asli Anda tidak diubah.

Catatan:

- Hanya PDF yang terbuka yang ditulis. Tanda pada PDF yang tidak terbuka tetap ada dalam total tetapi tidak digambar; buka PDF itu dulu.
- Nama di keterangan memakai font PDF standar. Huruf yang tidak dapat ditampilkan dicetak sebagai "?".
- PDF yang dilindungi kata sandi atau terenkripsi tidak dapat disalin dengan tanda: "PDF ini dilindungi kata sandi atau terenkripsi, sehingga salinan bertanda tidak dapat ditulis. Takeoff-nya sendiri baik-baik saja; ekspor spreadsheet saja."
- {{ui:PDF bertanda}} pertama di sebuah tab memuat penulis PDF. Saat offline, penulis itu hanya tersedia bila bilah aplikasi menampilkan {{ui:Siap offline}}; lihat [Bekerja offline](common:offline).

:::chromium
Dengan beberapa PDF bertanda, Chrome dan Edge mungkin bertanya sekali apakah situs ini boleh mengunduh beberapa berkas. Pilih Izinkan, atau Anda hanya mendapat berkas pertama.
:::

## Tidak ada yang diekspor?

- {{ui:XLSX}} dan {{ui:CSV}} memerlukan setidaknya satu item: "Belum ada yang bisa diekspor: buat item dan hitung dulu."
- {{ui:PDF bertanda}} memerlukan tanda pada PDF yang terbuka: "Belum ada tanda pada PDF yang terbuka."

## Simpan takeoff juga

Ekspor adalah laporan. Untuk melanjutkan pekerjaan takeoff nanti, pilih juga {{ui:Simpan takeoff}}: lihat [Simpan dan buka kembali takeoff](topic:save-and-reopen).

Untuk menambahkan overhead, profit, pajak, dan bond serta mengirim proposal, lihat [Ringkasan penawaran dan proposal](topic:bid-summary).
