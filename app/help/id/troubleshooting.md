---
title: Pemecahan masalah
summary: Gejala, penyebab, dan solusi untuk pesan serta hal tak terduga yang mungkin Anda temui di TakeoffCraft, dikutip seperti yang ditampilkan aplikasi.
keywords: masalah, kesalahan, tidak berfungsi, perbaiki, bantuan, ditolak, tidak dapat mengukur, tanpa skala, tanda hilang, ekspor gagal, offline, sentuh
from: cd319c9b
---

TakeoffCraft menjelaskan sebagian besar penolakan di bilah status di bagian bawah jendela. Temukan pesannya di bawah ini.

## Membuka file

| Pesan atau gejala | Penyebab | Solusi |
|---|---|---|
| Pembaca PDF tidak dapat dimuat. Muat ulang halaman untuk mencoba lagi. | Pembaca PDF aplikasi tidak termuat, biasanya karena Anda sedang offline dan aplikasi belum pernah disimpan untuk penggunaan offline. | Sambungkan kembali dan muat ulang. Lalu pilih {{ui:Simpan untuk offline}} dan tunggu {{ui:Siap offline}}; lihat [Bekerja secara offline](common:offline). |
| (nama) dilindungi kata sandi. Buka salinan yang tidak dilindungi. | PDF memerlukan kata sandi untuk dibuka. | Minta salinan yang tidak dilindungi, atau hapus kata sandinya di program PDF yang Anda percaya. |
| (nama) tidak dapat dibaca sebagai PDF (…) | File rusak atau bukan PDF yang sebenarnya. | Unduh lagi, atau simpan ulang dari program yang membuatnya. |
| (nama) sudah terbuka. | PDF yang sama (isi yang sama) sudah terbuka. | Tidak perlu tindakan. |
| TakeoffCraft membuka PDF dan proyek .takeoff.json. Dilewati: … | Jenis file lain dibuang. | Konversi gambar ke PDF terlebih dahulu. |
| Tidak terjadi apa-apa saat saya menjatuhkan file | File dijatuhkan di luar jendela peramban, atau peramban membuka PDF di tab baru. | Jatuhkan ke halaman TakeoffCraft itu sendiri; bingkai "Jatuhkan PDF atau .takeoff.json" muncul saat hal itu akan berhasil. |
| Membuka set yang besar memakan waktu | Setiap PDF dibaca penuh untuk membuat sidik jarinya. | Tunggu pesan "Membuka (nama)…" hilang. Miniatur terisi saat Anda menggulir. |

## Mengukur

| Pesan atau gejala | Penyebab | Solusi |
|---|---|---|
| Buka PDF terlebih dahulu. | Tidak ada lembar yang terbuka. | Buka PDF. |
| Lembar ini belum memiliki skala, jadi tidak dapat diukur. Pilih preset skala atau kalibrasi terlebih dahulu (hitungan berfungsi tanpa skala). | Alat linear, luas, lingkaran, dan lubang potong memerlukan skala. | [Atur skala](topic:set-the-scale). |
| Buat item linear terlebih dahulu (beri nama di bawah Item), lalu klik pada lembar. | Tidak ada item dengan jenis itu. | Isi formulir {{ui:Item baru}} yang terbuka, dan pilih {{ui:Tambah}}. |
| Pilih item yang akan dihitung terlebih dahulu (panel Item). | Item saat ini telah dihapus. | Klik sebuah item di bawah {{ui:Item}}. |
| Sebuah run memerlukan minimal dua titik. | Anda selesai setelah satu klik. | Klik minimal dua titik. |
| Sebuah area memerlukan minimal tiga titik. | Sudutnya terlalu sedikit. | Klik minimal tiga sudut. |
| Garis tepi berpotongan dengan dirinya sendiri, sehingga luasnya akan salah. Gambar ulang tanpa berpotongan. | Bentuk angka delapan. | Gambar sebagai dua area, atau telusuri tepi secara berurutan. |
| Titik-titik itu tidak membentuk area. | Semua titik berada pada satu garis. | Klik sudut-sudut yang membentuk suatu ruang. |
| Pilih tanda area terlebih dahulu (alat Pilih), lalu pilih {{ui:Lubang potong}} dan gambar lubang di dalamnya. | {{ui:Lubang potong}} memerlukan area yang terpilih. | Tekan {{key:V}}, klik area, lalu {{key:X}}. |
| Lubang potong harus berada sepenuhnya di dalam area. | Lubang memotong atau keluar dari garis tepi. | Gambar lubang di dalam area. |
| Lubang potong tidak boleh saling tumpang tindih. | Dua lubang bertumpuk. | Gambar satu lubang yang melingkupi keduanya, atau jauhkan keduanya. |
| … Titik dikembalikan. | Sudut yang diseret akan membuat garis tepi berpotongan dengan dirinya atau mendorong lubang ke luar. | Seret ke tempat yang menjaga bentuk tetap valid. |
| Klik titik pada tepi lingkaran, jauh dari pusatnya. | Klik kedua terlalu dekat dengan pusat. | Klik lebih jauh ke luar. |
| Klik menggeser lembar alih-alih menambah titik | Penunjuk bergerak lebih dari beberapa piksel saat tombol ditekan; itu dihitung sebagai seret. | Klik tanpa bergerak, terutama pada trackpad. |
| Shift tidak men-snap | Anda menempatkan titik pada busur, atau menggambar lingkaran. | Snap 45° hanya berlaku untuk segmen lurus. |
| Titik melompat ke garis terdekat | Snap ke garis gambar aktif. | Perbesar untuk mengklik di antara garis, atau tekan {{key:F3}} untuk mematikan Snap. |
| Tidak ada penanda snap yang muncul | Snap mati, lembar adalah hasil pindai, atau alatnya tidak di-snap (Hitung, Hitung otomatis, menempel). | Tekan {{key:F3}}; pada hasil pindai tidak ada garis untuk di-snap. |
| Panjangnya salah | Skalanya salah (sering kali PDF yang ukurannya diubah dengan preset). | Gunakan {{ui:Periksa}} pada dimensi yang diketahui, lalu {{ui:Kalibrasi}}. |

## Skala

| Pesan atau gejala | Penyebab | Solusi |
|---|---|---|
| Pilih dua titik yang lebih berjauhan. | Titik kalibrasi hampir bertumpuk. | Kalibrasi pada dimensi yang lebih panjang. |
| Pesan di dialog kalibrasi, seperti "Jarak itu tidak dapat dibaca" | Jaraknya ditulis dalam bentuk yang tidak dapat dibaca TakeoffCraft. | Lihat [Entri panjang, harga satuan, dan persen](topic:entry-formats). |
| Lembar ini belum memiliki skala, jadi tidak ada yang dapat diperiksa. Kalibrasi, atau pilih preset. | {{ui:Periksa}} pada lembar tanpa skala. | Atur skala terlebih dahulu. |
| Daftar {{ui:Preset}} berwarna abu-abu | Tidak ada lembar yang terbuka. | Buka PDF. |

## Kuantitas dan rumus

| Pesan atau gejala | Penyebab | Solusi |
|---|---|---|
| Tidak lengkap: … (tidak dihitung dalam total) | Kesalahan rumus, atau tanda pada lembar tanpa skala. | Lihat [Baca kuantitas dan estimasi](topic:read-quantities#the-incomplete-warning). |
| +(n) tanpa skala di samping item | Sebagian tandanya berada pada lembar tanpa skala. | Beri lembar-lembar itu skala. |
| Kesalahan rumus: … | Rumus tidak dapat dihitung. | Lihat [Bahasa rumus](topic:formulas#errors). |
| Item ini memiliki tanda, jadi jenisnya tidak dapat diubah. | Jenisnya dikunci setelah ada tanda. | Buat item baru dengan jenis lain dan gambar ulang tandanya dengan item itu. |
| Item memerlukan nama. | Kolom nama dikosongkan. | Ketik nama. |
| Ketik jumlah seperti 12.50. / Ketik persentase seperti 10 atau 7.5. | Harga satuan atau susut tidak dapat dibaca. | Lihat [Entri panjang, harga satuan, dan persen](topic:entry-formats). |
| Total terlihat dua kali lipat | Item memiliki harga satuan sendiri dan komponen yang membawa biaya yang sama. | Atur harga satuan item itu menjadi 0 saat komponennya membawa biayanya. |
| Tanda item ini berada pada PDF yang tidak terbuka. | Anda mengklik item yang semua tandanya berada pada PDF yang belum Anda buka. | Buka PDF tersebut; namanya tercantum di bawah {{ui:Lembar}}. |

## Hitung otomatis

| Pesan atau gejala | Penyebab | Solusi |
|---|---|---|
| Kotak itu terlalu kecil. Gambar di sekeliling seluruh simbol. | Kotaknya sangat kecil. | Perbesar dan kotakkan seluruh simbol. |
| Kotak itu hampir kosong. Gambar di sekeliling simbol. | Kotak hanya berisi kertas. | Kotakkan simbolnya sendiri. |
| Tidak ada kecocokan. Turunkan penggeser {{ui:Kecocokan}}, atau kotakkan simbol lebih rapat. | Tidak ada yang mendapat skor cukup tinggi. | Kotakkan simbol lebih rapat, atau seret penggeser {{ui:Kecocokan}} lebih rendah. |
| Terlalu banyak kecocokan, termasuk simbol yang salah | Simbol yang mirip mendapat skor dekat dengan yang asli. | Naikkan penggeser {{ui:Kecocokan}} dan klik kotak yang salah untuk menolaknya. |
| Kecocokan hilang di lembar lain | Lembar-lembar itu menggambar simbol dengan ukuran lain, atau dengan sudut yang bukan kelipatan 90°. | Cari di lembar itu dengan kotak yang digambar di sana, atau hitung secara manual. |
| (n) lembar terlalu besar untuk dicari pada ukuran simbol ini. | Lembar akan menjadi terlalu besar pada ukuran kerja. | Kotakkan simbol yang lebih besar, atau hitung lembar itu secara manual. |
| Pencarian gagal: … | Pencarian latar belakang berhenti. | Coba lagi; muat ulang halaman jika berulang (simpan terlebih dahulu). Saat offline, pencarian hanya berfungsi setelah bilah aplikasi menampilkan {{ui:Siap offline}}. |
| Menyeret menggambar kotak alih-alih menggeser | Begitulah cara kerja {{ui:Hitung otomatis}}. | Tahan {{key:Space}} dan seret, atau seret dengan tombol tengah. |

## Menyimpan dan mengekspor

| Pesan atau gejala | Penyebab | Solusi |
|---|---|---|
| Belum ada yang diekspor: buat item dan hitung. | Tidak ada item. | Buat item terlebih dahulu. |
| Belum ada tanda pada PDF yang terbuka. | {{ui:PDF bertanda}} tidak memiliki apa pun untuk digambar pada PDF yang terbuka. | Buka PDF yang memiliki tanda. |
| PDF ini dilindungi kata sandi atau terenkripsi, sehingga salinan bertanda tidak dapat ditulis. … | PDF-nya terenkripsi. | Ekspor {{ui:XLSX}} sebagai gantinya, atau gunakan salinan PDF yang tidak terenkripsi (yang kemudian memerlukan takeoff sendiri, karena itu file yang berbeda). |
| PDF bertanda tidak dapat ditulis: … | Sering kali: offline, dan aplikasi belum disimpan untuk penggunaan offline, sehingga penulis PDF tidak tersedia. | Sambungkan ke internet dan pilih {{ui:PDF bertanda}} lagi. Untuk menghindarinya, pilih {{ui:Simpan untuk offline}} dan tunggu {{ui:Siap offline}}. |
| Hanya satu PDF bertanda yang terunduh | Peramban memblokir beberapa unduhan sekaligus. | Izinkan unduhan berganda untuk situs ini, lalu ekspor lagi. |
| (file) bukan proyek TakeoffCraft (bukan JSON yang valid). / Ini bukan file proyek TakeoffCraft. | File yang salah, atau file yang rusak. | Pilih file `.takeoff.json`. |
| Proyek ini disimpan oleh TakeoffCraft yang lebih baru. Bukalah di sana. | File berasal dari build yang lebih baru. | Buka di build yang lebih baru. |
| (n) tanda rusak dan dilewati. | Sebagian file rusak atau diedit secara manual. | Sisanya terbuka. Gambar ulang tanda yang hilang, atau buka salinan yang lebih lama. |
| Tanda hilang setelah membuka kembali | PDF-nya tidak terbuka, atau salah satunya berubah. | Lihat [Simpan dan buka kembali takeoff](topic:save-and-reopen#when-a-pdf-has-changed). |
| Peramban bertanya "Tinggalkan situs?" | Ada perubahan yang belum disimpan. | Tetap di sini, dan simpan dengan {{key:Mod+S}}. |

## Tombol dan mouse

| Gejala | Penyebab | Solusi |
|---|---|---|
| Tombol huruf tidak melakukan apa-apa | Kursor berada di kolom isian (pencarian, penyunting item, tabel). | Klik di lembar, atau tekan {{key:Tab}} untuk keluar dari kolom isian. |
| Roda memperbesar alih-alih menggulir | Roda selalu memperbesar lembar. | Seret untuk menggeser. |
| Seluruh halaman menjadi lebih besar atau kecil | Zoom peramban ({{key:Mod+Plus}} atau {{key:Mod+Minus}}). | Tekan {{key:Mod+0}}. Perbesar lembar dengan roda atau dengan {{key:Plus}} dan {{key:Minus}} tanpa tombol tambahan. |
| Sebuah tanda hilang saat saya menekan Backspace | Backspace menghapus tanda yang terpilih saat Anda tidak sedang menggambar. | {{key:Mod+Z}} mengembalikannya. |
| Klik kanan tidak menyelesaikan di Mac | Control-klik diterima sebagai klik biasa. | Gunakan klik dua jari dengan klik sekunder diaktifkan, atau tekan {{key:Enter}}. |

## Layar sentuh

Pada layar sentuh:

- **Ketuk** menempatkan titik (atau memilih tanda dengan {{ui:Pilih}}). Satu jari yang diseret menggeser.
- **Dua jari** mencubit untuk memperbesar di sekitar titik di antara keduanya, dan menggeser saat keduanya bergerak bersama. Meletakkan jari kedua membatalkan apa yang dimulai jari pertama, sehingga cubitan tidak pernah meninggalkan titik.
- **Selesaikan** run atau garis tepi dengan **tekan lama** (klik kanan), **ketuk dua kali**, atau {{ui:Selesai}} di bilah di bagian bawah lembar. Bilah yang sama memiliki {{ui:Belakang}} (membatalkan titik terakhir) dan {{ui:Batal}}. Area juga menutup dengan mengetuk titik pertama.
- Jari mendapat target yang lebih besar: titik di-snap, menutup, dan dipilih dari jarak yang lebih jauh, serta pegangan sudut dibuat lebih besar.

Mengetik panjang memerlukan keyboard; keyboard di layar berfungsi saat kotak {{ui:Ketik}} difokuskan.

Di tablet, keyboard dan mouse atau trackpad membuat takeoff jauh lebih mudah.

## Bekerja secara offline

| Tombol atau gejala | Penyebab | Solusi |
|---|---|---|
| {{ui:Tidak dapat menyimpan}} | Sebagian file aplikasi tidak terunduh saat menyimpan untuk penggunaan offline. | Periksa koneksi Anda dan pilih tombol itu lagi. |
| {{ui:Offline tidak tersedia}} | Jendela privat dan sebagian komputer terkelola memblokir salinan offline. | Gunakan jendela biasa, atau peramban lain. |
| "Saving…" tidak pernah dimulai | Anda sedang offline; menyimpan memerlukan koneksi. | Simpan saat online. |
| Aplikasinya lama setelah pembaruan | Salinan offline berasal dari hari sebelumnya. | Saat online, pilih {{ui:Siap offline}}, lalu {{ui:Simpan lagi (ambil versi terbaru)}}. |
| Anda ingin ruang kembali | Salinan offline berukuran sekitar 6 MB. | Pilih {{ui:Siap offline}}, lalu {{ui:Hapus salinan offline}}. |

Lihat [Bekerja secara offline](common:offline).

## Masih bermasalah

Muat ulang halaman jika aplikasi berhenti merespons. Takeoff Anda hilang saat muat ulang kecuali sudah Anda simpan, jadi simpan terlebih dahulu dengan {{key:Mod+S}} jika bisa. Untuk pertanyaan tentang peramban, lihat [Peramban dan komputer](common:browsers).
