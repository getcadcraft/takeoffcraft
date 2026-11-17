---
title: Ambil kuantitas dari file IFC 4.3
summary: Buka file IFC 4.3 untuk jalan, rel kereta, jembatan atau pekerjaan tanah dan dapatkan hitungan per kelas, dengan panjang, luas dan volume yang dinyatakan file, sebagai kuantitas bertipe.
keywords: ifc, ifc4x3, ifc 4.3, jalan, rel kereta, jembatan, perkerasan, kanstin, lapis, pekerjaan tanah, bearing, infrastruktur, kuantitas, bim, sipil, kuantitas bertipe
from: 6b08c2c4
---

File IFC 4.3 dapat memuat jalan, rel kereta api, jembatan, pekerjaan laut, dan bagian-bagian penyusunnya: perkerasan, lapis, kanstin, rel, pekerjaan tanah, bearing, tiang pancang, dan lainnya. TakeoffCraft membacanya dan mengubahnya menjadi kuantitas bertipe yang dapat Anda beri harga.

## Buka file

1. Pilih {{ui:Open plans}} di grup {{ui:File}}, atau tekan {{key:Mod+O}}.
2. Pilih file IFC (Anda bisa memilihnya bersama PDF), atau seret ke TakeoffCraft.

Satu kuantitas bertipe dibuat untuk setiap kelas dan tipe yang sudah ditentukan, misalnya "Perkerasan (lentur): hitung", dan, jika file menyatakannya, "panjang" dalam m, "luas" dalam m² dan "volume" dalam m³. Catatan pada setiap item menyebutkan berapa elemen yang dihitung dan berapa yang tidak menyatakan kuantitas. Membuka file yang lebih baru dengan nama yang sama akan memperbarui kuantitas tersebut, bukan menambahkannya.

## Yang tidak dilakukannya

- Ia membaca kumpulan kuantitas (IfcElementQuantity) yang dibawa file. Ia tidak mengukur bentuk 3D, sehingga elemen tanpa kumpulan kuantitas dihitung tetapi tidak menambah panjang, luas, atau volume.
- Hanya kelas infrastruktur IFC 4.3 yang dibaca. File gedung (dinding, pintu, pelat) tidak diubah menjadi kuantitas di sini; file yang bukan IFC 4.3 akan memberi tahu dan tidak membawa apa pun.
- Satuan adalah satuan milik file itu sendiri, dikonversi ke meter.
