---
title: "Tata letak kantor: pengelompokan, subtotal, judul dan judul kolom dari Kebijakan Default Anda"
summary: Aktifkan add-on Kebijakan Default, dan estimasi, kuantitas per lembar, ekspor serta apa yang dibaca asisten akan mengikuti tata letak jadwal kantor Anda, yang sama dengan jadwal BimCraft.
keywords: standar kantor, tata letak kantor, kebijakan default, add-on, tata letak jadwal, kelompokkan menurut tipe, kelompokkan menurut lembar, subtotal, total, judul, judul kolom, huruf kapital, tata letak estimasi, tata letak ekspor, pengaturan
from: cfd2f30a
---

## Yang akan Anda lakukan

Minta TakeoffCraft menata tabelnya seperti yang dikeluarkan kantor Anda, tanpa mengaturnya di setiap takeoff. Tata letak diatur sekali, di Kebijakan Default, dan berlaku untuk setiap aplikasi di komputer ini: apa yang Anda atur di BimCraft atau CadCraft juga dipakai TakeoffCraft, dan sebaliknya.

## Langkah

1. Buka **Pengaturan › Add-on** dan aktifkan **Kebijakan Default**. Fitur ini mati sampai Anda mengaktifkannya; jika mati, atau tidak ada yang diatur, TakeoffCraft sama seperti sebelumnya.
2. Buka **Pengaturan › Global › Kebijakan Default** dan cari **Tata letak jadwal (standar kantor)**:

| Kebijakan | Apa yang dilakukannya di TakeoffCraft |
|---|---|
| Kelompokkan jadwal menurut | **Tipe** mengelompokkan estimasi menurut jenis item (Linear, Area, Count, Typed quantity). **Level** mengelompokkan kuantitas menurut lembarnya. **Ruang** dan **Tanpa pengelompokan** membiarkan keduanya tidak dikelompokkan |
| Total dalam jadwal | **Subtotal di bawah tiap kelompok dan satu total** menambahkan subtotal di bawah setiap kelompok. Total pekerjaan selalu ada |
| Judul jadwal | Baris di atas tabel, misalnya `{schedule}: tata letak kantor` |
| Judul kolom | Seperti ditulis, HURUF KAPITAL atau Huruf Kapital Awal |

3. Tutup Pengaturan. Tabel langsung mengikuti.

## Yang memakai tata letak

- **Kuantitas › Menurut item** dan **Menurut lembar**: judul kelompok, subtotal di bawah setiap kelompok, judul, dan format huruf judul kolom. Satu baris di bawah judul menyebutkan bagian standar kantor Anda yang diatur. Barisnya tetap sama: Anda tetap mengetik tarif dan susut di dalamnya, dan mengklik angka untuk memilih tandanya. Komponen atau kondisi kedua tetap berada di bawah item induknya.
- **Estimasi yang diekspor** (CSV dan XLSX): kelompok dan subtotal yang sama. Di buku kerja, subtotal berupa rumus `SUBTOTAL` atas kelompoknya, dan total pekerjaan juga, sehingga tidak ada yang terhitung dua kali.
- **Yang dibaca asisten**: `takeoff_estimate` dan `takeoff_quantities` (menurut lembar) menambahkan blok `layout` dengan kelompok, baris dan subtotal, serta menyebutkan bagian mana yang diatur kantor.

## Yang tetap mengikuti aturannya sendiri

- **Kuantitas › Menurut area** menyatakan pengelompokannya sendiri (menurut area penawaran) dan tetap mempertahankannya.
- **Total pekerjaan**, markup pada ringkasan penawaran, dan alternatif tidak dikelompokkan ulang.
- Pengelompokan yang tidak punya kolom di tabel akan diabaikan: estimasi tidak memiliki level, dan kuantitas per lembar tidak memiliki tipe.

## Hal yang perlu diketahui

- Kebijakan disimpan di peramban ini untuk setiap aplikasi CadCraft dan ikut dalam file Kebijakan Default (**Simpan ke file** / **Muat dari file** di tempat yang sama), sehingga satu kantor cukup berbagi satu file.
- Estimasi yang diekspor sebagai CSV dengan kelompok di dalamnya hanya untuk dibaca. Untuk memasukkannya kembali sebagai pustaka harga, ekspor tanpa pengelompokan.
- Sisi BimCraft dari standar yang sama: jadwal, pengaturan dan ekspor. TakeoffCraft belum memiliki kebijakan sendiri, sehingga tidak ada bagian Kebijakan Default di bawah Pengaturan › TakeoffCraft.
