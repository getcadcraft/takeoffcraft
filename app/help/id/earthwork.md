---
title: Pekerjaan tanah dan elevasi titik
summary: Tandai elevasi titik pada denah tapak, serahkan ke CivilCraft untuk permukaan serta galian dan timbunan, dan hitung kuantitas galian sederhana di sini.
keywords: pekerjaan tanah, galian, timbunan, galian dan timbunan, grading, elevasi titik, elevasi, topo, permukaan, triangulasi, civilcraft, titik, pnezd, parit
from: a898e508
---

TakeoffCraft mengukur apa yang digambar pada lembar. Pekerjaan tanah membutuhkan permukaan tanah, sehingga dipakai bersama CivilCraft, yang membangun permukaan dari titik, memberi grading padanya, dan menghitung galian, timbunan, serta angkutan.

## Galian sederhana di sini

Untuk jejak yang digali sampai satu kedalaman, item area dengan **kedalaman** sudah cukup: volumenya adalah luas × kedalaman. [Paket keahlian](topic:trade-packs) kontraktor umum memiliki item galian massal (volume bank, volume lepas, dan jumlah truk) serta item parit utilitas (galian, alas, dan timbunan kembali berdasarkan panjang dan kedalaman).

## Elevasi titik untuk CivilCraft

1. Atur skala lembar tapak.
2. Buat item **Count**, misalnya "Grade eksisting", lalu klik setiap elevasi titik pada lembar.
3. Pilih tanda dan ketik {{ui:Elevasi}} di panel Tanda terpilih: `102.5`, `102'-6"` atau `31.24 m`. Elevasi negatif dan nol juga boleh.
4. Buka menu {{ui:Ekspor}} dan pilih {{ui:Elevasi titik}}. Anda mendapat berkas titik (`.csv`) dengan Point, Northing, Easting, Elevation, dan Description, satu baris untuk setiap titik yang ditandai pada lembar yang terbuka.
5. Buka berkas itu di CivilCraft (lihat [Impor titik](app:civilcraft/import-points)). CivilCraft membangun permukaan dari titik-titik itu ([Bangun permukaan](app:civilcraft/build-surface)); dari sana ia membandingkan permukaan dan memberi galian serta timbunan ([Volume](app:civilcraft/volumes)).

Northing dan easting adalah koordinat lembar itu sendiri dalam kaki, diukur dari sudut halaman pada skalanya: jarak dan volume antar titik sudah benar, tetapi bukan koordinat survei tapak Anda. Pindahkan ke koordinat tapak di CivilCraft bila Anda membutuhkannya.

:::note
Titik dari lembar yang berbeda tidak berbagi koordinat, sehingga ekspor hanya mengambil lembar yang terbuka. Elevasi disimpan bersama takeoff dan ikut terbawa saat disalin dan ditempel.
:::

## Galian dan timbunan dari CivilCraft

Pekerjaan tanah CivilCraft kembali sebagai dua item yang bisa Anda beri harga:

1. Di CivilCraft, beri grading pada pad dan koridor Anda, lalu pilih {{ui:Kirim ke TakeoffCraft}} di bawah **Pekerjaan tanah** ([Volume pekerjaan tanah](app:civilcraft/volumes)). Ini menyimpan berkas kuantitas (`.quantities.json`).
2. Di TakeoffCraft, buka dengan {{ui:Buka takeoff}}, atau seret berkas itu ke aplikasi. Takeoff Anda tetap terbuka: berkas itu menambahkan **Pekerjaan tanah: galian** dan **Pekerjaan tanah: timbunan** sebagai [kuantitas bertipe](topic:create-items#typed-quantities-no-drawing) dalam yard kubik (CY) untuk proyek kaki, atau meter kubik (m³) untuk proyek meter. Ini hanya satu langkah: {{key:Mod+Z}} membatalkannya.
3. Ganti namanya, atur susut, harga, dan assembly sesuai keinginan Anda.

Saat desain berubah, kirim ulang dari CivilCraft dan buka berkas yang baru: kedua item yang sama mendapat kuantitas baru. Nama, harga, susut, dan assembly-nya tetap seperti yang Anda atur. Jika satuan proyek berubah, bilah status akan menyebutkannya: periksa harganya. Berkas dari proyek CivilCraft lain menambahkan dua item miliknya sendiri.

Kuantitasnya adalah volume bank, seperti yang diukur CivilCraft (metode grid): tanpa penyusutan atau pengembangan. Tambahkan itu sebagai susut, atau dengan rumus seperti `Q * 1.25` untuk volume lepas. Editor item menunjukkan asal dan waktu setiap item; kolom Notes pada estimasi juga menyebutkannya.

:::note
Berkas kuantitas adalah JSON polos (`"format": "cadcraft-quantities"`), sehingga skrip atau program lain juga bisa menulisnya: nama aplikasi, sebuah proyek, dan item dengan kunci, nama, satuan, serta kuantitas.
:::
