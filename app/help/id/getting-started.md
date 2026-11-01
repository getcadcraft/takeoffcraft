---
title: Memulai dengan TakeoffCraft
summary: Apa yang dilakukan TakeoffCraft, tempat ia berjalan, dan item pertama Anda yang diukur dan dihargai dari set gambar PDF.
keywords: mulai, takeoff pertama, panduan cepat, pengantar, estimasi, perhitungan volume, set gambar, pdf
from: 3b9da1fb
---

TakeoffCraft mengukur set gambar, PDF, dan gambar DWG atau DXF, lalu mengubah ukurannya menjadi estimasi biaya yang berharga. Anda membuka file (gambar dihitung langsung dari bloknya: lihat [Buka gambar DWG atau DXF](topic:open-a-drawing)), memberi setiap lembar skala (gambar membawa skalanya sendiri), membuat **item** (tipe dinding, finishing lantai, perlengkapan), dan mengklik di lembar untuk menghitungnya. Kuantitas, biaya, dan total pekerjaan diperbarui seiring jalannya. Anda dapat mengekspor estimasi sebagai spreadsheet dan salinan PDF dengan takeoff Anda tergambar di dalamnya.

Jika Anda pernah melakukan takeoff di program lain, baca [Datang dari software takeoff lain](topic:coming-from) berikutnya. Sebagian hal bekerja berbeda di sini.

## Tempat ia berjalan

TakeoffCraft berjalan di peramban web Anda. Buka TakeoffCraft dan layar langsung siap; tidak ada yang perlu diinstal.

- **PDF Anda tetap di komputer Anda.** Peramban yang membukanya dan tidak pernah mengunggahnya. Menyimpan adalah unduhan.
- Berfungsi di Chrome, Edge, Firefox, dan Safari terbaru. Lihat [Peramban dan komputer](common:browsers).
- Berfungsi tanpa koneksi internet setelah Anda memilih {{ui:Simpan untuk offline}} di bilah aplikasi dan berbunyi {{ui:Siap offline}}. Lihat [Bekerja offline](common:offline).
- Penyimpanan cloud belum tersedia. Untuk aplikasi desktop, TakeoffCraft hadir di CadCraft Studio, bersama tujuh aplikasi lain.

## Takeoff pertama Anda dalam sepuluh langkah

Panduan ini mengukur satu tipe dinding dan menghargainya. Hanya perlu beberapa menit pada denah mana pun yang Anda punya.

1. Pilih {{ui:Buka denah}} di grup {{ui:File}} pada bilah alat (atau tekan {{key:Mod+O}}), pilih satu atau beberapa PDF, dan pilih Buka. Anda juga dapat menjatuhkan PDF di mana saja pada halaman.
   Lembar muncul di kiri dan lembar pertama terbuka di tengah.
2. Temukan skala tercetak lembar di kepala gambar atau di bawah judul gambar.
3. Buka daftar {{ui:Preset}} di grup {{ui:Skala}} dan pilih skala itu, misalnya `1/4" = 1'-0"`.
   Bilah di bagian bawah lembar kini berbunyi "Skala 1/4" = 1'-0"".
4. Pilih {{ui:Periksa}} (atau tekan {{key:D}}) dan klik kedua ujung dimensi yang tercetak pada gambar.
   Angka di bilah status kiri bawah harus cocok dengan dimensi tercetak. Jika tidak, lihat [Atur skala](topic:set-the-scale).
5. Di panel {{ui:Item}} di kanan, pilih {{ui:Item baru}}, ketik nama seperti `Interior wall type A`, biarkan tipenya di {{ui:Linear (panjang)}}, dan pilih {{ui:Tambah}}.
6. Pilih {{ui:Linear}} di bilah alat (atau tekan {{key:L}}).
7. Klik awal dinding, lalu setiap sudut di sepanjangnya. Klik dua kali, tekan {{key:Enter}} atau klik kanan untuk mengakhiri lintasan.
   Lintasan digambar dengan warna item dan panjangnya muncul di samping item.
8. Di editor item di bawah {{ui:Item}}, ketik `9'-0"` di {{ui:Tinggi}}, `0.85` di {{ui:Material $/LF}} dan `1.20` di {{ui:Upah $/LF}}.
   Tabel {{ui:Kuantitas}} di bawah menunjukkan panjang, material dan upah yang diperluas, dan {{ui:Total pekerjaan}}.
9. Pilih {{ui:Simpan takeoff}} (atau tekan {{key:Mod+S}}).
   Peramban Anda mengunduh file `.takeoff.json`. Isinya item, skala, dan tanda Anda, dan terbuka kembali di atas PDF yang sama.
10. Buka menu {{ui:Ekspor}} di bilah alat dan pilih {{ui:XLSX}} untuk mengunduh estimasi sebagai spreadsheet.

:::tip
Tekan {{key:Esc}} untuk menghentikan apa pun yang sedang Anda lakukan dan kembali ke alat {{ui:Pilih}}. {{key:Mod+Z}} mengurungkan perubahan apa pun.
:::

## Yang dibaca selanjutnya

- [Layar TakeoffCraft](topic:workspace) menyebutkan setiap bagian jendela.
- [Mulai takeoff dan buka set gambar](topic:open-plan-set) mencakup beberapa PDF dan daftar lembar.
- [Buat item takeoff](topic:create-items) menjelaskan tipe, satuan, susut, dan harga satuan.
- [Rakitan biaya dan rumus](topic:assemblies) mengubah satu ukuran menjadi stud, lembar papan, dan lainnya.
- [Keyboard dan mouse](topic:keyboard) mendaftar setiap tombol.
