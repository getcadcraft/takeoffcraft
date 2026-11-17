---
title: Apa yang belum dibuat
summary: Fitur takeoff yang belum ada di build ini, dan apa yang bisa Anda lakukan sebagai gantinya saat ini.
keywords: batas, belum ada, belum dibuat, peta jalan, direncanakan, solusi, per lintasan, cloud, desktop
from: 94ff90d0
---

TakeoffCraft masih dalam pengembangan. Daftar ini berisi hal yang belum dilakukan build ini, dan cara menyelesaikan pekerjaan Anda tetap.

## Mengukur

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Menyisipkan titik di tengah lintasan atau garis tepi | Hapus tanda dan gambar ulang. |
| Pemilihan kotak (jendela) | {{key:Shift}} + klik setiap tanda, atau {{key:Mod+A}} untuk semua tanda di lembar. Lihat [Salin, tempel dan duplikat tanda](topic:copy-paste). |
| Memutar, mencerminkan, atau mengubah skala salinan yang ditempel | Tempel di lembar dengan skala dan orientasi yang sama; gambar sisanya dengan tangan. |
| Membaca skala dari lembar hasil pindai, atau dari bilah skala grafis | Pilih preset, atau kalibrasi pada panjang bilah. |
| Lebih dari satu skala per lembar (area detail, denah yang diperbesar) | Ukur bagian pada skala lembar, dan hitung detail pada lembar perbesarannya sendiri jika set memilikinya. |

## Item dan harga

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Formula rakitan yang memakai jenis tanda lain milik sebuah item (pintu dari item ruang di formula lantainya) | Formula memakai total jenis utama; beri harga jenis lain pada barisnya sendiri. |
| Formula rakitan yang dihitung per lintasan | Formula memakai total item; gunakan `N` untuk tambahan per lintasan. |
| Formula yang memakai kuantitas item lain | Ulangi pengukuran di item itu, atau hitung di ekspor spreadsheet. |
| Crew pada komponen rakitan, atau hari kerja selain 8 jam | Berikan crew ke item; untuk panjang hari lain, baca crew-day sebagai crew-jam ÷ panjang hari Anda. |
| Markup selain catatan, awan dan sorotan (panah, dimensi, stempel), atau balasan pada catatan | Tulis di teks catatan; ubah statusnya saat sudah diselesaikan. |
| Pustaka harga yang dibagi satu tim, atau disimpan bersama akun Anda | Pustaka disimpan di peramban ini: ekspor sebagai CSV dan impor di komputer lain. |
| Paket keahlian yang ditinjau estimator berpengalaman | Setiap paket adalah titik awal: periksa asumsinya terhadap pekerjaan dan produk Anda sebelum menghitung harga. Lihat [Paket keahlian](topic:trade-packs). |
| Harga dalam paket keahlian | Paket hanya membawa rakitan: atur tarif Anda sendiri, atau impor daftar harga Anda sebagai CSV. |
| Mengganti nama takeoff | Nama diambil dari PDF pertama; ganti nama file yang sudah diunduh. |
| Memberi nama lembar secara manual | Lembar dinamai dari label halaman PDF; cari berdasarkan nama file dan halaman. |

## Gambar (DWG dan DXF)

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Tabel gaya plot, penugasan pena dan file CTB pada lembar gambar | Gambar ditampilkan hitam, atau dengan warnanya yang digelapkan untuk kertas; ketebalan garis berasal dari gambar. |
| Membuka DXF biner, atau DWG yang lebih lama dari AutoCAD 2000 | Simpan sebagai DXF ASCII atau DWG yang lebih baru. |
| Mencari gambar tertaut (xref) berdasarkan folder tempatnya berada | Buka juga file gambar tertaut bersama gambar induknya: file akan ditemukan berdasarkan nama file di antara file yang terbuka. |
| Mengukur polyline 3D, mesh, solid dan region | Hitung menurut layer dan jenis, atau ukur tampak denah dengan alat Linear dan Area. |
| Teks dalam PDF bertanda dari gambar dengan skrip selain Latin | Karakter yang tidak dimiliki Helvetica tercetak sebagai "?" di PDF bertanda; gambar di layar tidak terpengaruh. |
| Memindahkan gambar ke aplikasi lain dari bilah lembar | Buka file yang sama di aplikasi tersebut. |
| Gambar yang memuat takeoff di dalamnya, seperti {{ui:PDF with the takeoff inside}} untuk PDF | {{ui:Save takeoff}}: `.takeoff.json` akan dibuka kembali pada gambar yang sama, ditemukan dari isinya. |
| Underlay PDF, gambar dan objek OLE yang ditempatkan dalam gambar | Gambar hanya tampil sebagai bingkai. Buka PDF underlay itu sendiri sebagai lembar. |

## Hitung otomatis

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Menemukan simbol pada lembar tanpa skala yang digambar pada ukuran lain | Beri lembar skalanya, atau cari dengan kotak yang digambar di lembar itu. |
| Menemukan simbol yang dicerminkan | Hitung secara manual, atau cari lagi dengan kotak di sekitar simbol yang dicerminkan. |

## Berkas dan berbagi

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Satu PDF yang sekaligus menampilkan tanda dan memuat takeoff | {{ui:Marked PDF}} untuk orang lain melihat tanda; {{ui:PDF with the takeoff inside}} untuk dibuka kembali di TakeoffCraft. |
| CSV kuantitas per lembar atau per tanda | Gunakan {{ui:XLSX}}: lembar kerja By sheet dan Marks memuatnya. |
| Penyimpanan cloud | Belum tersedia. Simpan file proyek ke komputer Anda dan buat cadangannya. |
| Aplikasi desktop TakeoffCraft yang terpisah | Mulai 0.5, aplikasi desktop adalah CadCraft Studio, dengan semua delapan aplikasi dalam satu instalasi. TakeoffCraft juga berjalan di peramban. |

## Layar dan input

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Menu klik kanan (atau tekan lama) | Gunakan bilah alat, panel dan pintasan keyboard. Tekan lama menyelesaikan lintasan atau garis tepi. |
| Memutar tampilan | Halaman yang sudah diputar di PDF sudah tampil tegak. |

## Tampilan 3D

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Menggambar atau mengedit tanda dalam 3D | Kembali ke lembar ({{key:3}}) untuk menggambar; memilih dan menghapus sudah bisa dilakukan dalam 3D. |
| Menyejajarkan lantai bertumpuk yang diplot di posisi berbeda pada halamannya | Tumpuk lantai yang diplot serupa; periksa yang lain satu lembar pada satu waktu. |
| Menghitung tiang yang ukurannya sama dengan objek yang dihitung | Setiap tiang pada lembar berukuran sama; tiang hanya menandai lokasi hitungan, bukan jenisnya. |

## Penawaran

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Adendum untuk paket yang sudah dikirim, surat penetapan pemenang, lembar lingkup yang disetujui setiap penawar | Kirim paket baru, dan tulis sendiri penetapan pemenangnya. [Kirim paket untuk penawaran](topic:bid-invitations) menjelaskan yang sudah dibuat. |
| Mengirim undangan penawaran dari akun mana pun: selama diuji, surat ke penawar luar dinonaktifkan kecuali untuk akun yang diaktifkan tim CadCraft | Unduh {{ui:Scope CSV}}, kirim sendiri lewat email, dan ketik penawarannya. |
| Mengirim paket penawaran dari jendela Studio | Kirim dari TakeoffCraft di peramban. |
| Menghitung ulang area penawaran alternatif dengan penawaran yang dipilih | Alternatif dan subtotal area penawaran memakai harga Anda sendiri; sesuaikan alternatif secara manual. |
| Pengingat otomatis sebelum tanggal asuransi atau lisensi subkontraktor habis | Tanggal ditandai di halaman Subcontractors setelah lewat atau dalam 30 hari; periksa saat Anda mengundang. |

## Panel

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Memindahkan tabel {{ui:Quantities}} | Hanya panel {{ui:Sheets}} dan {{ui:Items}} yang bisa dipindahkan. Lihat [Atur panel](common:arrange-panels). |

## Spreadsheet

Buku kerja XLSX sudah diperiksa di LibreOffice Calc, yang menghitung ulang setiap total hingga sen yang sama dengan TakeoffCraft. Buku kerja itu belum dibuka di Excel. Jika program spreadsheet menampilkan sesuatu yang tidak wajar, ekspor CSV memuat estimasi yang sama sebagai nilai biasa.
