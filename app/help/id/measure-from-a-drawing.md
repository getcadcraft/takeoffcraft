---
title: Ukur dari gambar
summary: Ambil panjang dan luas dari garis, busur, polyline, dan hatch milik gambar sendiri dengan memilihnya, dengan busur dan lubang yang tepat, alih-alih menelusuri dengan klik.
keywords: ukur gambar, geometri, polyline, busur, lingkaran, hatch, bulge, panjang tepat, luas tepat, pilih, jendela, telusuri, dari cad, linear, area
from: fd734246
---

{{ui:Ukur gambar}} pada bilah lembar file DWG atau DXF mengambil objek milik gambar sebagai tanda, sehingga Anda tidak perlu menelusurinya dengan klik. Panjang polyline, panjang busur, luas lingkaran, dan luas hatch beserta lubangnya dihasilkan secara tepat, dari perhitungan yang sama yang dipakai takeoff untuk setiap tanda.

## Ambil objek sebagai item linear atau area

1. Buat atau klik item **linear** atau **area** di bawah {{ui:Item}}. Lembar memerlukan skala.
2. Pilih {{ui:Ukur gambar}}.
3. Klik objek pada lembar untuk memilihnya, atau seret jendela di sekelilingnya: semua yang berada sepenuhnya di dalamnya akan dipilih. {{key:Shift}} menambahkan jendela ke pilihan; klik objek yang sudah dipilih lagi untuk melepasnya. Bilah menampilkan total: "6 rangkaian: 108'-9 1/8" seluruhnya."
4. Pilih tombol tambah, yang menyebutkan jumlah dan item, misalnya {{ui:Tambah 6 ke Edge}} (atau tekan {{key:Enter}}). Setiap objek menjadi satu tanda dari item itu, dalam satu langkah urungkan. {{key:Esc}} menghapus apa yang Anda pilih.

## Apa yang diambil setiap jenis item

- Item **linear** mengambil garis, busur, polyline, lingkaran, dan spline berdasarkan panjang. Bentuk tertutup dihitung berdasarkan kelilingnya. Hatch tidak diikutkan: ia memiliki luas, bukan panjang, dan bilah menyatakannya.
- Item **area** mengambil bentuk tertutup: polyline tertutup, lingkaran, solid 2D, dan hatch beserta lubangnya. Rangkaian terbuka tidak diikutkan, dan bilah menyatakannya.

## Tepat, dan hampir tepat

Garis, busur (bulge apa pun), polyline dengan bulge, dan lingkaran bersifat tepat: panjang dan luas memakai jari-jari dan sapuan busur, bukan gambarnya. Elips, spline, dan hatch yang batasnya terdiri dari tepi diukur dalam tali busur satu derajat atau lebih halus, yang berada dalam seperseratus persen untuk elips dan sepersepuluh persen untuk lainnya; bilah menyebutkan berapa banyak dari yang Anda pilih merupakan kurva jenis ini.

## Apa yang diambil dari mana

- **Model**: objek di ruang model. **Layout**: garis miliknya sendiri, dan objek model di dalam viewport, diskalakan melaluinya. Objek yang melintasi tepi viewport tidak ditawarkan (ia akan tercetak terpotong); objek yang ditampilkan oleh dua viewport diambil sekali.
- Hanya layer yang ditampilkan lembar. Blok dihitung, tidak diukur: lihat [Hitung dari gambar](topic:count-from-a-drawing). Polyline 3D, mesh, solid, dan region tidak ditawarkan.
