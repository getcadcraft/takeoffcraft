---
title: Karbon terkandung dan tabel harga 5D
summary: Karbon menjumlahkan karbon terkandung dari perhitungan volume, dari kuantitas setiap item dan tabel faktor terbuka, dan mengirim tarif perhitungan volume ke BimCraft sebagai tabel harga untuk biaya 5D.
keywords: karbon, karbon terkandung, kgco2e, co2, faktor, a1-a3, transportasi, susut, 5d, tabel harga, biaya, bimcraft, epd
from: f4bff3b8
---

{{ui:Karbon}} pada bilah alat menjumlahkan karbon terkandung dari apa yang telah Anda ukur, dan mengubah tarif Anda menjadi tabel harga yang dapat digunakan model bangunan. Ini adalah estimasi, bukan penilaian.

## Karbon terkandung

Kuantitas setiap item, dengan susutnya, dikalikan dengan satu baris tabel faktor. Baris dicocokkan dengan kata-kata dari nama item ("concrete slab" menemukan baris dengan kata kunci concrete). Tabel itu adalah tabel terbuka yang sama dengan yang digunakan BimCraft, jadi file yang Anda muat di sini juga berfungsi di sana. **Baris yang disertakan program adalah nilai awal: generik, belum diperiksa, dan tidak berasal dari basis data mana pun.** Dialog menyatakannya di sebelah angka; ganti dengan sumber Anda sendiri sebelum Anda mengandalkan angka apa pun.

1. Pilih {{ui:Karbon}}. Item yang dihitung tercantum beserta kilogram CO2e-nya; totalnya ada di atas.
2. Centang {{ui:A4 transportasi}} atau {{ui:A5 limbah lokasi}} untuk menghitung tahap-tahap itu juga, untuk baris yang memberikan angka untuknya. Tahap produk selalu dihitung.
3. Untuk menggunakan baris lain untuk sebuah item, atau tidak sama sekali, gunakan daftar di barisnya.
4. {{ui:Faktor dari file…}} memuat tabel faktor (JSON atau CSV) yang dibuat dari sumber Anda sendiri; barisnya menggantikan baris awal dengan id yang sama. {{ui:Faktor (JSON)}} menyimpan milik Anda.

Faktor berlaku per meter, meter persegi, meter kubik, item, atau kilogram. Garis yang diukur dalam kaki atau kaki persegi dikonversi. Faktor kilogram memerlukan volume (yard kubik atau meter) dan densitas baris itu. Item yang faktornya memerlukan kuantitas yang tidak diukurnya tercantum di bawah {{ui:Tidak dicakup}} beserta alasannya, dan tidak pernah ditebak. Total berjalan di bilah status menampilkan angka yang sama.

Baris faktor Anda, pilihan Anda, dan tahap yang Anda hitung disimpan dalam file perhitungan volume.

## Tabel harga untuk biaya 5D

{{ui:Harga 5D (JSON)}} dan {{ui:Harga 5D (CSV)}} menyimpan tarif perhitungan volume sebagai tabel harga: satu baris per item yang dihargai, dengan tarif material dan upah per satuan serta susutnya. Muatlah di panel biaya BimCraft (Karbon terkandung dan biaya 5D) untuk menghargai tugas-tugas model bangunan dengan tarif yang sama yang membentuk penawaran. Item yang diukur dalam satuan yang tidak dimiliki tabel, dan item tanpa tarif, dibiarkan keluar.

## Dengan asisten Anda

Jika Anda mengizinkan asisten di Pengaturan, mereka dapat membaca karbon (carbon_check). Memuat faktor tetap menjadi tugas Anda.

## Hal yang perlu diketahui

Tidak ada yang dikirim ke mana pun. Angkanya hanya sebaik faktor yang Anda muat.
