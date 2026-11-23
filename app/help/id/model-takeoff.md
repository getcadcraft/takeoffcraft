---
title: Ambil kuantitas dari model bangunan
summary: Buka model IFC arsitek, lihat dalam 3D, pilih dinding, lantai, pintu, dan lainnya menurut tipe, bahan, layer, atau ukuran, lalu bawa jumlah, panjang, luas, dan volumenya ke takeoff. Salinan model yang lebih baru memperbarui kuantitas yang sama.
keywords: model, takeoff model, tampilan 3d, klik bagian, cari baris, bahan, layer, layer dinding, drywall, insulasi, ukuran pintu, ukuran jendela, jadwal bukaan, csv, 3d, bim, ifc, rvt, model bangunan, kuantitas, dinding, lantai, pintu, jendela, kolom, ruang, menurut tipe, menurut level, pembaruan, model yang lebih baru, pengembangan desain
from: 8c4c12c9
---

Anda tidak perlu menunggu set gambar berikutnya. Saat arsitek mengirim model bangunan, buka di sini dan ambil kuantitas langsung darinya. Model dibaca di komputer Anda; tidak ada yang dikirim ke mana pun.

## Langkah

1. Pilih {{ui:Model}} di bilah alat lalu pilih file `.ifc` model, atau buka dengan {{ui:Open plans}} seperti file lainnya.
2. {{ui:Model takeoff}} terbuka dengan satu baris per kategori dan tipe: dinding menurut tipe dinding, lantai menurut tipe lantai, pintu menurut tipe pintu, dan seterusnya. Setiap baris menampilkan jumlahnya dan satuan ukur kategori tersebut.
3. Atur {{ui:Group by}} ke {{ui:Category}} untuk total cepat, atau ke {{ui:Category, type and level}} untuk memisahkan setiap tipe menurut lantai.
4. Hilangkan centang pada baris yang tidak Anda inginkan. {{ui:Find}} mempersempit daftar. Menghilangkan centang pada baris juga menyembunyikan bagiannya dalam gambar 3D.
5. Beri {{ui:Model name}} yang akan Anda pertahankan selama proyek, misalnya nama proyek.
6. Pilih {{ui:Add to the takeoff}}. Setiap kuantitas menjadi kuantitas bertipe dalam daftar item. Beri nama, beri harga, dan lampirkan rakitan biaya seperti item lainnya.

## Lihat model dalam 3D

{{ui:Show the model in 3D}} menggambar model di atas tabel, dengan satu warna untuk setiap baris (kotak warna di samping nama baris). Seret untuk memutar, tahan {{key:Shift}} lalu seret untuk memindahkan, gunakan roda untuk zoom, dan pilih {{ui:Fit}} atau {{ui:Reset}} untuk kembali.

- **Klik bagian** dalam gambar dan barisnya dipilih di tabel, dengan semua bagian dari baris itu menyala dan sisanya pudar. Klik bagian yang sama lagi dan, jika bagian itu berada di beberapa baris (dinding dalam lapisannya), baris berikutnya dipilih.
- **Klik baris** di tabel untuk menyalakan bagiannya. Klik lagi, atau klik ruang kosong dalam gambar, untuk menghapus pilihan.
- Ruang tidak digambar, karena volume ruang akan menutupi bangunan.
- Model yang sangat besar hanya menyimpan kotak untuk sebagian bagian agar muat dalam memori; panel menyebutkan berapa jumlahnya. Angkanya tidak berubah.

Jika komputer ini tidak dapat menggambar 3D, tabel bekerja seperti biasa.

## Kelompokkan menurut bahan, layer, atau ukuran

{{ui:Group by}} memiliki tiga pilihan lagi:

- {{ui:Category and material}}: dinding, lantai, atau atap yang dibangun dari lapisan memberi setiap bahan lapisan barisnya sendiri, sehingga drywall, rangka, dan insulasi dapat diberi harga terpisah. Bagian bangunan dengan satu bahan mendapat baris bahan itu, dan bagian tanpa bahan disimpan di baris bernama "Tidak ada bahan bernama".
- {{ui:Category and layer}}: sama, dengan ketebalan lapisan dalam barisnya ("Insulasi, 100 mm").
- {{ui:Category, type and door or window size}}: pintu dan jendela dibagi menurut lebar dan tingginya (misalnya 3'-0" × 6'-8" atau 914 × 2,032 mm).

Untuk sebuah lapisan, luasnya adalah muka dinding itu sendiri (atau luas denah atau permukaan lantai atau atap), dan volumenya adalah luas itu dikali ketebalan lapisan. Catatan baris menyebutkan berapa banyak angka yang berasal dari lapisan. Lapisan-lapisan satu dinding dijumlahkan menjadi volume yang dinyatakan model untuk dinding itu.

## Simpan baris atau bukaan sebagai CSV

{{ui:Save rows as CSV}} menyimpan baris yang Anda centang, dengan satuan di setiap judul kolom, untuk spreadsheet. {{ui:Save openings schedule as CSV}} (hanya jika model memiliki pintu atau jendela) menyimpan setiap pintu dan jendela menurut tipe, level, dan ukuran beserta jumlahnya.

## Apa yang diukur

| Kategori | Kuantitas |
|---|---|
| Dinding | jumlah, panjang, luas dinding (satu muka, bukaan dikurangkan), volume |
| Lantai, pelat, plafon, dan penutup lain | jumlah, luas denah, volume |
| Atap | jumlah, luas denah, luas permukaan atap, volume |
| Pondasi | jumlah, luas denah, volume |
| Kolom, balok, dan batang | jumlah, panjang sepanjang batang, volume |
| Railing, pipa, duct, dan jalur kabel | jumlah, panjang |
| Tangga | jumlah, volume |
| Ruang | jumlah, luas lantai, volume |
| Pintu, jendela, dan lainnya | jumlah |

Jika pembuat model menyatakan kuantitas di dalam file, angka itu yang dipakai. Jika tidak, angkanya diukur dari bentuk elemen. Setiap kuantitas menyimpan catatan yang menyebutkan yang mana, dan berapa banyak elemen yang menghasilkan angka.

:::note
Panjang dinding yang diukur dari bentuknya membentang dari ujung ke ujung, sehingga dua dinding yang bertumpuk di sudut sama-sama menyertakan sudut itu. Volume memerlukan bentuk tertutup: elemen yang bentuknya tidak tertutup dihitung tetapi tidak menghasilkan volume. Elemen dinding melengkung atau berbentuk sudut diukur sebagai setengah dari seluruh muka tegaknya, dan catatannya menyebutkan hal itu.
:::

## Saat model yang lebih baru tiba

Buka file yang lebih baru dan ketik {{ui:Model name}} yang sama. Sebelum Anda menambahkan apa pun, panel menyebutkan berapa kuantitas yang baru, berapa yang berubah dan dari apa menjadi apa, serta kuantitas dari salinan sebelumnya yang sudah tidak ada di model. Pilih {{ui:Add to the takeoff}}: kuantitas yang berubah menerima angka barunya, sedangkan nama, harga, susut, dan rakitan Anda tetap. Kuantitas yang sudah tidak ada di model mempertahankan angka lamanya; hapus sendiri jika desain menghilangkannya.

Nama tipe dan level menjadi cara kuantitas dikenali. Jika arsitek mengganti nama tipe dinding, kuantitas itu masuk sebagai kuantitas baru dan kuantitas lama tercantum sebagai sudah tidak ada.

## File yang dibaca ini

File IFC (IFC2x3, IFC4, dan IFC4.3). File IFC dengan jalan, rel, atau jembatan tetap langsung membawa kuantitas infrastrukturnya, seperti sebelumnya.

TakeoffCraft tidak membaca file `.rvt` pada rilis ini. Jika arsitek bekerja di Revit, minta ekspor IFC dari model (File, Export, IFC) dan buka itu.

Satu model dapat membawa hingga 500 kuantitas sekaligus. Jika lebih, hilangkan centang pada baris atau kelompokkan menurut kategori.
