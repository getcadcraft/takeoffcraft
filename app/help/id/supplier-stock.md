---
title: Periksa stok dan waktu tunggu pemasok
summary: Tambahkan daftar stok pemasok (CSV atau spreadsheet) dan TakeoffCraft memeriksa apa yang dibutuhkan takeoff, termasuk susut, terhadap daftar itu: cukup tersedia atau tidak, dan berapa lama waktu tunggunya. Kekurangan dan waktu tunggu yang lama muncul di panel Masalah.
keywords: pemasok, stok, tersedia, waktu tunggu, ketersediaan, kekurangan, backorder, daftar pesanan, csv, sku, vendor, material, pasokan, masalah
from: f11160fb
---

{{ui:Pasokan}} di bilah alat (ikon truk) memeriksa apa yang dibutuhkan takeoff Anda terhadap daftar stok pemasok. Baris pemasok yang relevan disimpan di file takeoff itu sendiri. Tidak ada yang dikirim ke mana pun dan tidak ada yang meminta pemasok: Anda yang membawa filenya.

## File

File CSV dengan baris judul. Dibutuhkan kolom nama atau SKU dan kolom stok atau waktu tunggu. Judul berikut dikenali (urutan dan huruf besar-kecil bebas): Item, Name, Description atau Product; SKU, Part atau Item #; In stock, On hand, Available atau Quantity; Lead time atau Delivery days; Unit atau UOM; Price atau Cost; Supplier atau Vendor.

- Stok dapat berupa angka (1,200), "In stock" atau "Out of stock".
- Waktu tunggu dapat berupa "5 days", "2 weeks", "2-3 weeks" (yang lebih lama dipakai), "3 months", "same day" atau "backorder". Angka biasa berada dalam satuan judul (hari, kecuali judulnya menyebut minggu atau bulan).
- File Excel tidak dibaca: simpan lembar sebagai CSV terlebih dahulu.

## Periksa takeoff

1. Pilih {{ui:Pasokan}}, lalu {{ui:Tambah file pemasok…}} dan pilih CSV-nya. Tambahkan lebih dari satu: hingga lima file, 2.000 baris disimpan secara keseluruhan, yang cocok dengan item Anda didahulukan.
2. Setiap item, kondisi kedua, dan bagian rakitan dengan kuantitas dicocokkan dengan sebuah baris berdasarkan nama, atau berdasarkan SKU di dalam namanya. Nama yang mirip (yang satu berada di dalam yang lain) dipakai saat tidak ada yang sama persis, dan hal itu disebutkan.
3. Di bawah {{ui:Yang dibutuhkan takeoff}}, yang kurang tampil lebih dulu: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" atau "In stock". Kebutuhan sudah termasuk susut. Satuan pemasok yang berbeda dengan satuan estimasi (ton melawan kaki) dilaporkan dan tidak pernah dibandingkan. Setiap baris memiliki {{ui:Pilih item}}, yang melompat ke item tersebut.
4. Atur {{ui:Tunggu terlama yang diinginkan (hari)}} (bawaan 14). Item yang tidak tersedia dan menunggu lebih lama dari itu ditandai, dan ringkasan menyebutkan waktu tunggu terlama yang penting.
5. {{ui:Daftar pesanan (CSV)}} mengunduh item yang kurang beserta jumlah kekurangannya, pemasok, dan waktu tunggunya. {{ui:Kecualikan}} mengeluarkan satu kebutuhan dari pemeriksaan (ini adalah langkah urungkan).

## File spreadsheet dan pustaka harga

Daftar pemasok dapat berupa buku kerja Excel (.xlsx) selain CSV: lembar pertama dibaca, dengan nama kolom yang sama. Rumus tidak pernah dijalankan; nilai yang disimpan file itulah yang dibaca.

Setelah file berisi harga ditambahkan, {{ui:Harga ke Pustaka}} di dialog menetapkan harga material setiap entri [Pustaka](topic:price-library) yang dihargai file itu: nama yang sama, dan satuan yang sama (atau tidak disebutkan). Tenaga kerja, susut, tinggi, dan rakitan tetap apa adanya, dan catatan entri menyebutkan file asal harganya. Entri dalam meter tidak dihargai dari daftar dalam kaki, dan entri tanpa nama yang cocok dibiarkan; baris status menyebutkan berapa yang dilewati karena satuannya. Hitung ulang harga dari Pustaka untuk membawa harga baru ke takeoff ini.

## Di panel Masalah

Kekurangan adalah peringatan dan waktu tunggu yang lama adalah catatan, di panel Masalah bersama ("Supplier stock"), jadi keduanya berada bersama setiap pemeriksaan lain. Anda dapat menerima salah satunya dengan alasan, dan penerimaan itu disimpan di takeoff.

## Dengan asisten Anda

Jika Anda mengizinkan asisten di Pengaturan, mereka dapat membaca pemeriksaan (supply_check). Menambahkan file pemasok tetap menjadi tugas Anda.

## Yang perlu diketahui

Angka stok hanya semutakhir file yang Anda tambahkan. Tambahkan file lagi untuk menyegarkannya: file dengan nama yang sama menggantikan yang sebelumnya.
