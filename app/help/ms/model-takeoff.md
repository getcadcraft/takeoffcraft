---
title: Ambil kuantiti daripada model bangunan
summary: Buka model IFC arkitek, lihat dalam 3D, pilih dinding, lantai, pintu dan selebihnya mengikut jenis, bahan, lapisan atau saiz, dan bawa kiraan, panjang, luas dan isipadu mereka ke dalam pengukuran kuantiti. Salinan model yang lebih baharu mengemas kini kuantiti yang sama.
keywords: model, pengukuran kuantiti model, paparan 3d, klik bahagian, cari baris, bahan, lapisan, lapisan dinding, dinding kering, penebat, saiz pintu, saiz tingkap, jadual bukaan, csv, 3d, bim, ifc, rvt, model bangunan, kuantiti, dinding, lantai, pintu, tingkap, tiang, bilik, mengikut jenis, mengikut aras, kemas kini, model lebih baharu, reka bentuk pembangunan
from: 8c4c12c9
---

Anda tidak perlu menunggu set lukisan seterusnya. Apabila arkitek menghantar model bangunan, buka di sini dan ambil kuantiti terus daripadanya. Model dibaca pada komputer anda; tiada apa-apa dihantar ke mana-mana.

## Langkah

1. Pilih {{ui:Model}} pada bar alat dan pilih fail `.ifc` model itu, atau buka dengan {{ui:Open plans}} seperti fail lain.
2. {{ui:Pengukuran kuantiti model}} dibuka dengan satu baris bagi setiap kategori dan jenis: dinding mengikut jenis dinding, lantai mengikut jenis lantai, pintu mengikut jenis pintu, dan seterusnya. Setiap baris menunjukkan kiraannya dan unit ukuran bagi kategori itu.
3. Tetapkan {{ui:Kumpulkan mengikut}} kepada {{ui:Kategori}} untuk jumlah pantas, atau kepada {{ui:Kategori, jenis dan aras}} untuk memecahkan setiap jenis mengikut tingkat.
4. Nyahtanda baris yang anda tidak mahu. {{ui:Cari}} menyempitkan senarai. Menyahtanda baris juga menyembunyikan bahagiannya dalam gambar 3D.
5. Beri model {{ui:Nama model}} yang akan anda kekalkan untuk seluruh kerja, contohnya nama projek.
6. Pilih {{ui:Tambah ke pengukuran kuantiti}}. Setiap kuantiti menjadi kuantiti yang ditaip dalam senarai item. Namakan, harga dan lampirkan himpunan kos seperti mana-mana item lain.

## Lihat model dalam 3D

{{ui:Tunjukkan model dalam 3D}} melukis model di atas jadual, dengan satu warna bagi setiap baris (cip warna di sebelah nama baris). Seret untuk memusingkannya, tahan {{key:Shift}} dan seret untuk mengalihkannya, guna roda tetikus untuk zum, dan pilih {{ui:Muat}} atau {{ui:Tetapkan semula}} untuk kembali.

- **Klik satu bahagian** dalam gambar dan barisnya dipilih dalam jadual, dengan semua bahagian bagi baris itu menyala dan yang lain pudar. Klik bahagian yang sama sekali lagi dan, jika ia berada dalam beberapa baris (dinding dalam lapisannya), baris seterusnya dipilih.
- **Klik baris** dalam jadual untuk menyalakan bahagiannya. Klik lagi, atau klik ruang kosong dalam gambar, untuk membatalkan.
- Bilik tidak dilukis, kerana isipadu bilik akan menutupi bangunan.
- Model yang sangat besar hanya mengekalkan kotak bagi sesetengah bahagian supaya muat dalam memori; panel menyatakan berapa banyak. Nombor tidak berubah.

Jika komputer ini tidak boleh melukis 3D, jadual berfungsi seperti sebelumnya.

## Kumpulkan mengikut bahan, lapisan atau saiz

{{ui:Kumpulkan mengikut}} mempunyai tiga pilihan lagi:

- {{ui:Kategori dan bahan}}: dinding, lantai atau bumbung yang dibina daripada lapisan memberi setiap bahan lapisan barisnya sendiri, supaya dinding kering, rangka dan penebat boleh dihargakan secara berasingan. Bahagian bangunan dengan satu bahan mendapat baris bahan itu, dan bahagian tanpa bahan disimpan dalam baris bernama "Tiada bahan dinamakan".
- {{ui:Kategori dan lapisan}}: sama, dengan ketebalan lapisan dalam baris ("Penebat, 100 mm").
- {{ui:Kategori, jenis dan saiz pintu atau tingkap}}: pintu dan tingkap dibahagikan mengikut lebar dan tingginya (contohnya 3'-0" × 6'-8" atau 914 × 2,032 mm).

Bagi lapisan, luas ialah muka dinding itu sendiri (atau luas pelan atau permukaan lantai dan bumbung), dan isipadu ialah luas itu didarab dengan ketebalan lapisan. Nota baris menyatakan berapa banyak nombor datang daripada lapisan. Lapisan bagi satu dinding dijumlahkan kepada isipadu yang dinyatakan model untuknya.

## Simpan baris atau bukaan sebagai CSV

{{ui:Simpan baris sebagai CSV}} menyimpan baris yang anda telah tanda, dengan unit dalam setiap pengepala, untuk hamparan. {{ui:Simpan jadual bukaan sebagai CSV}} (hanya apabila model mempunyai pintu atau tingkap) menyimpan setiap pintu dan tingkap mengikut jenis, aras dan saiz, dengan kiraannya.

## Apa yang diukur

| Kategori | Kuantiti |
|---|---|
| Dinding | kiraan, panjang, luas dinding (satu muka, bukaan ditolak), isipadu |
| Lantai, papak, siling dan penutup lain | kiraan, luas pelan, isipadu |
| Bumbung | kiraan, luas pelan, permukaan bumbung, isipadu |
| Tapak asas | kiraan, luas pelan, isipadu |
| Tiang, rasuk dan anggota | kiraan, panjang sepanjang anggota, isipadu |
| Susur tangan, paip, saluran dan laluan kabel | kiraan, panjang |
| Tangga | kiraan, isipadu |
| Bilik | kiraan, luas lantai, isipadu |
| Pintu, tingkap dan semua yang lain | kiraan |

Jika pengarang model menyatakan kuantiti dalam fail, nombor itu digunakan. Jika tidak, nombor diukur daripada bentuk elemen. Setiap kuantiti menyimpan nota yang menyatakan yang mana, dan berapa banyak elemen yang memberi nombor.

:::note
Panjang dinding yang diukur daripada bentuknya berjalan dari hujung ke hujung, jadi dua dinding yang bertindih di sudut kedua-duanya termasuk sudut itu. Isipadu memerlukan bentuk tertutup: elemen yang bentuknya tidak tertutup dikira tetapi tidak memberi isipadu. Elemen dinding melengkung atau berbucu diukur sebagai separuh daripada semua muka tegaknya, dan notanya menyatakan demikian.
:::

## Apabila model yang lebih baharu tiba

Buka fail yang lebih baharu dan taip {{ui:Nama model}} yang sama. Sebelum anda menambah apa-apa, panel menyatakan berapa banyak kuantiti yang baharu, berapa banyak yang berubah dan daripada apa kepada apa, serta kuantiti mana daripada salinan terdahulu yang tiada lagi dalam model. Pilih {{ui:Tambah ke pengukuran kuantiti}}: kuantiti yang berubah mengambil nombor baharu, dan nama, kadar, pembaziran dan himpunan kos anda kekal. Kuantiti yang telah hilang daripada model mengekalkan nombor lamanya; alih keluar sendiri jika reka bentuk menggugurkannya.

Nama jenis dan aras ialah cara kuantiti dikenali. Jika arkitek menamakan semula jenis dinding, ia tiba sebagai kuantiti baharu dan yang lama disenaraikan sebagai hilang.

## Fail yang dibaca

Fail IFC (IFC2x3, IFC4 dan IFC4.3). Fail IFC dengan jalan, landasan atau jambatan masih membawa kuantiti infrastrukturnya secara terus, seperti sebelum ini.

TakeoffCraft tidak membaca fail `.rvt` dalam keluaran ini. Jika arkitek bekerja dalam Revit, minta eksport IFC bagi model (File, Export, IFC) dan buka fail itu.

Satu model boleh membawa masuk sehingga 500 kuantiti sekaligus. Jika ada lebih, nyahtanda baris atau kumpulkan mengikut kategori.
