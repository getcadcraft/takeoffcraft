---
title: Periksa perhitungan volume dalam 3D
summary: Lihat dinding, pelat, dan hitungan lembar yang terbuka berdiri di atas gambar, putari mereka, dan klik salah satu untuk memilih tandanya.
keywords: png, gambar, tangkapan layar, tumpukan, lantai, level, elevasi, glb, gltf, ekspor 3d, ketebalan dinding, tinggi dasar, bukaan, kepala pintu, 3d, tiga d, periksa, lihat, dinding, tinggi dinding, pelat, kedalaman, volume, orbit, model, pemilihan, isometrik, perspektif
from: fb16b4f7
---

Tampilan 3D adalah pemeriksaan, bukan gambar kedua: ia menegakkan perhitungan volume dari lembar yang terbuka di layar, di atas lembar itu sendiri, sehingga dinding yang hilang, pelat yang terduplikasi, atau hitungan yang nyasar terlihat sekilas.

Sebelum Anda mulai: lembar memerlukan skala ([Atur skala](topic:set-the-scale)). Tinggi dan kedalaman memerlukan kaki yang sebenarnya, jadi pada lembar tanpa skala {{ui:3D}} memberi tahu dan tetap pada lembar datar.

## Buka tampilan 3D

1. Tampilkan lembar yang ingin Anda periksa.
2. Pilih {{ui:3D}} pada bilah yang menampilkan nama dan skala lembar, atau tekan {{key:3}}.
   Pertama kali, tampilan 3D membutuhkan waktu sebentar untuk dimuat. Lembar digambar di atas tanah, dan perhitungan volume berdiri di atasnya dengan warna setiap item.
3. Untuk kembali, pilih {{ui:3D}} lagi, {{ui:Kembali ke lembar}}, atau tekan {{key:3}}. Memilih alat gambar (Linear, Area, Hitung, dan seterusnya) juga kembali, karena tanda digambar pada lembar datar.

Tampilan menunjukkan lembar di layar; ganti lembar di daftar lembar, atau dengan {{key:PageDown}} dan {{key:PageUp}}, dan tampilan 3D mengikutinya. Untuk melihat beberapa lantai sekaligus, tumpuk lantai-lantainya (di bawah).

## Yang Anda lihat

| Tanda | Dalam 3D |
|---|---|
| Lari linear, item dengan tinggi | Dinding setinggi itu di sepanjang lari. Lari melengkung mengikuti lengkungannya. |
| Lari linear, item tanpa tinggi | Garis pada lembar. Beri item tinggi di bawah **Item** untuk menegakkannya. |
| Area, item dengan kedalaman | Pelat setebal kedalaman itu, dengan potongannya terbuka. |
| Area, item tanpa kedalaman | Pelat tipis 2" agar tetap terlihat. |
| Hitungan | Tiang kecil di setiap titik yang dihitung. |

Tinggi adalah kolom {{ui:Tinggi}} item linear dan kedalaman adalah kolom {{ui:Kedalaman}} item area, di bawah **Item** (lihat [Buat item perhitungan volume](topic:create-items)). Ubah itu, dan tampilan 3D langsung diperbarui. Catatan di bawah nama lembar menjelaskan isi lembar, misalnya "Lembar ini dalam 3D: 2 dinding, 1 pelat, 3 hitungan", dan berapa banyak lari atau area yang tidak memiliki tinggi atau kedalaman. Klik diteruskan ke tampilan.

Angka tidak berubah dalam 3D: luas dinding adalah panjang tepatnya dikali tingginya, dan volume pelat adalah luas bersihnya (garis luar dikurangi potongan, lengkung tepat) dikali kedalamannya. Lengkungan hanya digambar sebagai potongan lurus pendek di layar.

## Melihat sekeliling

| Tindakan | Fungsinya |
|---|---|
| Seret, atau seret dengan tombol tengah | Orbit mengelilingi perhitungan volume. |
| {{key:Shift}} + seret, atau seret dengan tombol kanan | Geser. |
| Roda mouse | Perbesar dan perkecil di penunjuk. |
| Geser dua jari pada trackpad | Orbit ({{key:Shift}} menggeser). Cubit untuk memperbesar. |
| {{ui:Iso}}, {{ui:Atas}}, {{ui:Depan}}, {{ui:Belakang}}, {{ui:Kiri}}, {{ui:Kanan}}, {{ui:Bawah}} | Tampilan standar, dibingkai pada perhitungan volume. Tampilan 3D dibuka di {{ui:Iso}}. |
| {{ui:Perspektif}} | Perspektif aktif atau nonaktif (paralel saat nonaktif). |
| {{ui:Zoom batas}} atau {{key:F}} | Seluruh lembar. |
| {{ui:Lembar}} | Tampilkan atau sembunyikan gambar di atas tanah. |
| Kubus tampilan, kanan atas | Klik sisi, tepi, atau sudut untuk melihat dari sana; seret untuk orbit; seret cincin kompasnya untuk memutar; tombol rumah kembali ke {{ui:Iso}}. |

Sudut menampilkan kubus tampilan, ikon sumbu X, Y, Z kecil, atau tidak ada apa-apa: pilih di {{ui:Pengaturan}}, pada tab TakeoffCraft, di bawah **Indikator sudut** ([Pengaturan TakeoffCraft](topic:settings)). Lembar datar tidak memiliki indikator sudut.

:::touch
Satu jari mengorbit; dua jari mencubit untuk memperbesar dan bergerak untuk menggeser. Ketukan memilih.
:::

## Dinding dengan ketebalan, alas, dan bukaan

Item linear dengan tinggi berdiri sebagai strip tipis. Untuk melihatnya sebagai dinding sungguhan, berikan bentuk item di bawah **Dalam 3D** pada pengaturannya:

- **Ketebalan dinding** (8", 0.2 m): dinding menjadi padat, berpusat pada garis yang Anda gambar, dengan sudut miring.
- **Tinggi dasar**: dinding dimulai setinggi itu di atas lantai (soffit, deretan lemari atas). Item area juga memilikinya: langit-langit pada 9'-0".
- **Kepala bukaan**: segmen yang dikurangi (pintu, [Kurangi bagian dari lari](topic:measure-linear#deduct-a-part-of-a-run)) membuat dinding tetap di atas tinggi itu, sehingga pintu tampil sebagai pintu. Tanpa itu, segmen yang dikurangi menyisakan celah sampai ke atas.

Ini hanya membentuk tampilan 3D: kuantitas (panjang, luas dinding, biaya) tetap seperti semula.

## Tumpuk lantai

1. Buka PDF setiap lantai.
2. Dalam tampilan 3D, pilih {{ui:Level…}} dan ketik elevasi setiap lantai, seperti `0` untuk lantai dasar dan `12'` untuk lantai berikutnya. Kosong berarti lembar itu dikeluarkan.
3. Pilih {{ui:Tumpuk}}. Setiap lembar dengan level menampilkan perhitungan volumenya pada tingginya; lembar di layar berada di bawah lantainya sendiri, dan yang lain digarisi tepinya. Catatan menyebutkan berapa lantai yang ditumpuk.

Lembar sejajar menurut posisinya pada halaman, sehingga ini berfungsi untuk denah lantai yang diplot serupa (ukuran dan posisi lembar yang sama). Lembar dengan level tetapi tanpa skala dikeluarkan, dan catatan menyatakannya. Pilih {{ui:Tumpuk}} lagi untuk satu lembar dalam satu waktu. Level disimpan bersama perhitungan volume.

## Simpan tampilan 3D sebagai gambar

Pilih {{ui:PNG}} pada bilah 3D untuk gambar tampilan seperti di layar (`… 3D.png`); {{key:Shift}} + klik {{ui:PNG}} membuatnya dua kali lebih besar (`… 3D@2x.png`), untuk dicetak.

## Simpan tampilan 3D sebagai model

Pilih {{ui:GLB}} pada bilah 3D. Anda mendapat file `.glb` (glTF, biner) dari apa yang ditampilkan tampilan — lantai di layar, atau setiap lantai yang ditumpuk — yang dapat dibuka program 3D lain: satu objek untuk setiap tanda, dinamai sesuai itemnya, dalam warna item, dalam meter dengan Y ke atas. Lembar itu sendiri dan garis tepinya tidak ada di dalamnya.

## Pilih tanda dari 3D

Klik dinding, pelat, pelat tipis, atau tiang. Tandanya menjadi tanda terpilih, persis seperti jika Anda mengkliknya di lembar: ia tampil di bawah **Tanda terpilih**, itemnya menjadi aktif, dan bilah status menampilkan panjang dan tingginya, atau luas, kedalaman, dan yard kubiknya. {{key:Shift}} + klik menambahkan tanda ke pilihan atau mengeluarkannya. {{key:Delete}} menghapus tanda yang dipilih dan {{key:Mod+Z}} mengembalikannya; {{key:Esc}} tidak memilih apa pun. Kembali di lembar, tanda yang sama tetap terpilih.

:::tip
Gambar mengikuti tema: dalam Model, lembar di atas tanah menjadi gelap seperti tampilan datar.
:::
