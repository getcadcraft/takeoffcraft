---
title: Membaca kuantitas dan estimasi
summary: Gunakan tabel Kuantitas per item dan per lembar, total pekerjaan, penyorotan, serta peringatan Tidak lengkap.
keywords: kuantitas, total, per item, per lembar, total pekerjaan, estimasi, ringkasan, laporan, sorot, tidak lengkap, biaya
from: 069d41f1
---

Tabel {{ui:Kuantitas}} di bagian bawah jendela adalah estimasi Anda yang langsung diperbarui. Tabel ini berubah begitu Anda menggambar, menghapus, mengubah skala, atau mengedit harga satuan. Kuantitas tidak pernah disimpan; kuantitas selalu diukur ulang dari tanda-tandanya setiap kali, sehingga tidak mungkin tertinggal dari keadaan sebenarnya.

## Per item

Pilih {{ui:Per item}} (default). Setiap item memiliki satu baris, dan setiap komponen rakitannya memiliki baris di bawahnya.

| Kolom | Arti |
|---|---|
| Item | Nama, dengan warna item. "+(n) tanpa skala" berarti ada tanda pada lembar tanpa skala. |
| Quantity | Total terukur dalam satuan item (komponen: hasil rumus). |
| Unit | LF, m, SF, SY, m², EA, atau satuan komponen. |
| Waste % | Diketik di sini atau di editor item. |
| With waste | Quantity × (1 + waste). |
| Material/unit, Labor/unit | Harga satuan; Anda dapat mengetiknya di sini. |
| Material, Labor | Dengan waste × harga satuan, dibulatkan ke sen. |
| Total | Material + upah. |

Baris terakhir, **Total pekerjaan**, menjumlahkan kolom material, upah, dan total. Total yang sama tampil di sisi kanan header tabel.

Ketik di sel susut atau harga satuan, lalu tekan {{key:Enter}} atau klik di luar sel untuk menerapkannya. Nilai yang tidak dapat dibaca TakeoffCraft diberi garis tepi merah, dan bilah status menjelaskan alasannya, misalnya "Type an amount like 12.50."

Klik baris sebuah item untuk menyorot tandanya di setiap lembar dan melompat ke lembar yang memilikinya (sama seperti mengkliknya di bawah {{ui:Item}}).

## Per lembar

Pilih {{ui:Per lembar}} untuk melihat kuantitas setiap item di setiap lembar, beserta jumlah tandanya. Klik sebuah baris untuk membuka lembar itu dengan item tersorot. Gunakan ini untuk memeriksa apakah setiap lembar sudah dihitung, atau untuk membagi kuantitas per lantai atau per area pekerjaan.

## Per area

Jika takeoff memiliki area penawaran, {{ui:Per area}} menampilkan setiap item di tiap area beserta subtotalnya. Lihat [Area penawaran](topic:bid-areas).

## Peringatan Tidak lengkap

Jika ada sesuatu yang tidak dimasukkan ke dalam total, header menampilkan peringatan, misalnya:

"Incomplete: 1 formula error, 6 marks on sheets with no scale (not in the totals)"

- **Kesalahan rumus**: rumus sebuah komponen rakitan tidak dapat dihitung. Barisnya menulis "Formula error: …". Lihat [Rakitan dan rumus](topic:assemblies#when-a-formula-is-wrong).
- **Tanda pada lembar tanpa skala**: beri lembar-lembar itu skala. Lihat [Atur skala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Catatan yang sama ikut masuk ke spreadsheet hasil ekspor, sehingga estimasi yang belum lengkap tidak pernah tampak lengkap.

## Sorot item

Klik sebuah item di bawah {{ui:Item}} atau di tabel. Tandanya tetap tampil penuh di setiap lembar, dan bagian lainnya memudar. Daftar lembar menampilkan "(n) highlighted" pada setiap lembar yang memiliki tandanya. Klik item itu lagi untuk berhenti menyorot.

## Total item di panel samping

Setiap item dalam daftar {{ui:Item}} juga menampilkan kuantitasnya. Blok **Terukur** di editor item menampilkan nilai yang dipakai rumusnya: panjang, lintasan, dan luas dinding; luas, keliling, dan jumlah area; atau hitungan.

## Tanda pada PDF yang tidak terbuka

Sebuah takeoff dapat mencakup tanda pada PDF yang belum Anda buka kali ini. Tanda-tanda itu tetap dihitung dalam setiap total; daftar lembar menyebutkan nama PDF tersebut. Lihat [Simpan dan buka kembali takeoff](topic:save-and-reopen).

## Ruang lebih luas

Tombol panah di sisi kanan header {{ui:Kuantitas}} menyembunyikan tabel agar lembar mendapat lebih banyak ruang. Pilih tombol itu lagi untuk menampilkan tabel kembali.
