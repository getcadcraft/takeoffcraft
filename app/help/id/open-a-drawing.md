---
title: Buka gambar DWG atau DXF
summary: Buka file gambar sebagai lembar (ruang model dan setiap layout), mulai dengan skala yang diberikan gambar, tampilkan atau sembunyikan layer-nya, dan bawa gambar tertaut.
keywords: dwg, dxf, cad, gambar, buka gambar, layout, ruang model, ruang kertas, lembar, satuan, insunits, skala viewport, xref, gambar tertaut, layer, dibekukan, tanpa pdf, plot, tanpa plot
from: d8c3f504
---

TakeoffCraft membuka gambar DWG atau DXF seperti membuka PDF: Anda tidak perlu mencetaknya ke PDF lebih dulu. Penghitungan dari gambar itu sendiri akurat, karena gambar mengetahui apa itu setiap objeknya. Lihat [Hitung dari gambar](topic:count-from-a-drawing).

## Buka gambar

1. Pilih {{ui:Open plans}} di grup {{ui:File}}, atau tekan {{key:Mod+O}}.
2. Pilih file DWG atau DXF. Anda bisa memilih beberapa file, dan PDF bersama-sama dengannya.
3. Pilih Buka.

Anda juga bisa menyeret file gambar ke TakeoffCraft, seperti PDF. Tidak ada yang diunggah: peramban membaca file di komputer Anda.

TakeoffCraft membaca DWG dari AutoCAD 2000 hingga 2018 dan DXF ASCII dari R12 hingga 2018. Ia menolak DXF biner (simpan sebagai ASCII, atau sebagai DWG) dan file yang bukan keduanya, lalu memberi tahu alasannya. File yang rusak dibuka dengan bagian yang masih bisa dibaca, dan pesan akan menyebutkannya; hitungannya mungkin tidak lengkap.

## Lembar

- **Model** adalah ruang model gambar.
- **Setiap layout** (tab ruang kertas) menjadi lembar, dinamai menurut tabnya, sesuai urutan tab. Layout menampilkan model melalui viewport-nya, seperti saat dicetak.

Zoom, geser, snap ke garis gambar itu sendiri, tanda, catatan, {{ui:Calibrate}} dan lainnya bekerja seperti pada PDF. Lembar gambar disimpan di takeoff menurut nama file dan sidik jari isinya, seperti PDF: buka kembali file yang sama dan tanda-tandanya akan ada di lembarnya.

## Skala

Lembar dimulai dengan skala yang diberikan gambar:

- **Layout** mengambil skala viewport terbesarnya. Skala seperti 1/2" = 1'-0" dinamai sebagai preset yang sesuai; skala lain ditampilkan sebagai "Dari viewport gambar: 1" = 2.5'". Jika sebuah layout punya viewport dengan skala lain, yang terbesar menentukan skala lembar: periksa yang lain dengan {{ui:Check}}.
- **Model** mengambil satuan gambar (inci, milimeter, kaki…) sebagai skalanya, "Satuan gambar (inci)".
- **Gambar tanpa satuan** (gambar tidak pernah menyebutkan apakah satuannya inci atau milimeter) tidak punya skala: lembar bertuliskan "Tidak ada skala", dan pengukuran ditolak, seperti pada PDF tanpa skala. Penghitungan tidak memerlukan skala. Beri skala dengan {{ui:Calibrate}}.

{{ui:Calibrate}}, {{ui:Check}} dan daftar {{ui:Preset}} dapat mengubah skala kapan saja dan mengalahkan skala dari gambar. Daftar preset dinonaktifkan pada Model, yang tidak memiliki ukuran kertas.

## Layer

{{ui:Layers}} di bilah lembar mencantumkan layer gambar beserta jumlah objek yang dimiliki setiap layer pada lembar ini. Layer yang dimatikan atau dibekukan oleh file akan tersembunyi sejak awal. Hapus centang layer untuk menyembunyikannya, atau centang layer yang tersembunyi untuk menampilkannya: lembar digambar ulang, dan yang tersembunyi tidak ikut dalam hitungan maupun objek yang ditawarkan ke {{ui:Measure drawing}}, kecuali Anda meminta layer tersembunyi ikut dihitung. {{ui:Show all}} menampilkan semua layer; {{ui:Back to the file's layers}} membatalkan perubahan Anda. Pilihan layer hanya berlaku untuk sesi ini, bukan untuk file takeoff.

## Gambar tertaut (xref)

Gambar yang menautkan gambar lain menampilkannya di tempat ia disisipkan. TakeoffCraft menemukan gambar tertaut di antara **file yang terbuka**, berdasarkan nama filenya: buka gambar induk dan gambar tertautnya bersamaan (atau satu setelah yang lain). Sampai itu terjadi, bilah status menyebutkan berapa gambar tertaut yang tidak ditemukan, dan apa yang digambarnya hilang; hitungan juga akan menyatakannya.

## Batasan

- Objek yang tidak dapat dibaca atau ditempatkan TakeoffCraft (objek proxy, kelas yang tidak dikenal) didaftarkan di jendela hitungan menurut jenisnya; tidak pernah dibuang tanpa keterangan.
- Gambar yang sangat besar digambar sebagian, dan hitungan berhenti pada batas tertentu dengan memberi tahu. Buka plot PDF dari gambar seperti itu sebagai gantinya.
- Gambar digambar dengan warna hitam dan warna aslinya, yang digelapkan untuk kertas putih. Tabel gaya plot dan penugasan pena tidak diterapkan.
