---
title: Keyboard dan mouse
summary: Setiap tombol, mouse, trackpad, dan aksi sentuh di TakeoffCraft, dikelompokkan, dengan perbedaan antarplatform.
keywords: tombol, pintasan, tombol pintasan, keyboard, mouse, trackpad, sentuh, geser, zoom, roda, klik kanan, klik dua kali, spasi, shift, salin, tempel, potong, duplikat, pilih semua
from: 6f2c441d
---

Tombol huruf berfungsi saat penunjuk berada di mana pun pada halaman dan Anda tidak sedang mengetik di kolom isian. Saat dialog terbuka, tombolnya sendiri yang berlaku. Huruf berfungsi dengan atau tanpa {{key:Shift}}.

## Alat

| Tombol | Alat |
|---|---|
| {{key:V}} | {{ui:Pilih}} |
| {{key:L}} | {{ui:Linear}} |
| {{key:A}} | {{ui:Luas}} |
| {{key:O}} | {{ui:Lingkaran}} |
| {{key:B}} | {{ui:Ruang}} (isi ruangan dengan satu klik) |
| {{key:R}} | {{ui:Busur}} aktif atau nonaktif (di Linear, Luas, dan Lubang potong) |
| {{key:E}} | {{ui:Kurangi}} aktif atau nonaktif: segmen berikutnya dari suatu rangkaian digambar tetapi tidak dihitung |
| Angka, `@`, atau `#` saat menggambar | Buka kotak {{ui:Ketik}}: ketik panjang atau koordinat, {{key:Enter}} menempatkan titik ([Ukur rangkaian linear](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Lubang potong}} (pilih area terlebih dahulu) |
| {{key:C}} | {{ui:Hitung}} |
| {{key:S}} | {{ui:Hitung otomatis}} |
| {{key:K}} | {{ui:Kalibrasi}} |
| {{key:D}} | {{ui:Periksa}} skala |

## Saat menggambar

| Tombol atau aksi | Fungsinya |
|---|---|
| Klik | Menempatkan titik (berupa titik, dengan {{ui:Hitung}}). |
| {{key:P}} | Jalur: pilih seluruh jalur garis PDF yang tersambung, atau garis tepi di sekitar klik ([Pilih garis PDF](topic:pick-the-lines)). |
| {{key:F3}} | Snap ke garis gambar aktif atau nonaktif ([Snap ke garis gambar](topic:snap-to-the-drawing)). |
| {{key:Shift}} ditahan saat mengklik | Snap segmen ke 0°, 45°, 90°, atau 135° dari titik terakhir. Tidak berlaku untuk titik busur atau lingkaran. |
| Klik dua kali | Selesaikan rangkaian, atau tutup area atau lubang potong. |
| {{key:Enter}} | Selesaikan rangkaian, atau tutup area atau lubang potong. |
| Klik kanan (tanpa menggeser) | Selesaikan rangkaian, atau tutup area atau lubang potong. |
| Klik titik pertama | Tutup area atau lubang potong (mulai dari titik ketiga). |
| {{key:Backspace}} atau {{key:Delete}} | Hapus titik terakhir (pertama titik busur yang tertunda). |
| {{key:Esc}} | Buang titik busur yang tertunda; lalu batalkan tanda yang belum selesai; lalu kembali ke {{ui:Pilih}}. |

## Memilih dan menyunting

| Tombol atau aksi | Fungsinya |
|---|---|
| Klik tanda (alat Pilih) | Pilih tanda itu dan jadikan itemnya aktif. |
| {{key:Shift}} + klik tanda | Tambahkan ke pilihan, atau keluarkan darinya. |
| {{key:Mod+A}} | Pilih setiap tanda pada lembar yang terbuka. |
| Seret pegangan sudut | Pindahkan titik itu ({{key:Shift}} men-snap ke 45°). Berfungsi saat satu tanda dipilih. |
| {{key:Delete}} atau {{key:Backspace}} | Hapus tanda yang dipilih (saat Anda tidak sedang menggambar). |
| {{key:Esc}} | Batalkan semua pilihan: hapus pilihan dan garis pemeriksaan. |
| {{key:Mod+Z}} | Urungkan. |
| {{key:Mod+Y}} atau {{key:Mod+Shift+Z}} | Ulangi. |

## Salin dan tempel

| Tombol | Fungsinya |
|---|---|
| {{key:Mod+C}} | Salin tanda yang dipilih, beserta itemnya. |
| {{key:Mod+X}} | Potong: salin tanda yang dipilih, lalu hapus. |
| {{key:Mod+V}} | Tempel: salinan mengikuti penunjuk; klik tempat tujuannya. |
| {{key:Mod+Shift+V}} | Tempel di tempat yang sama: titik yang sama pada lembar yang terbuka. |
| {{key:Mod+D}} | Duplikat tanda yang dipilih: salinan mengikuti penunjuk; klik tempat tujuannya. |
| {{key:Esc}} | Tidak meletakkan apa pun: batalkan tempel atau duplikat yang ada di penunjuk. |

Huruf saja tetap memilih alat ({{key:C}} adalah {{ui:Hitung}}, {{key:D}} adalah {{ui:Periksa}}, {{key:X}} adalah {{ui:Lubang potong}}, {{key:V}} adalah {{ui:Pilih}}, {{key:A}} adalah {{ui:Luas}}); hanya {{key:Mod}} bersama huruf-huruf ini yang menyalin dan menempel. Di kolom teks, tombol-tombol ini menyalin dan menempel teks seperti biasa. Lihat [Salin, tempel, dan duplikat tanda](topic:copy-paste).

:::warning
{{key:Backspace}} menghapus tanda yang dipilih saat Anda tidak sedang menggambar. Jika itu terjadi tanpa sengaja, {{key:Mod+Z}} mengembalikannya.
:::

## File

| Tombol | Fungsinya |
|---|---|
| {{key:Mod+O}} | {{ui:Buka denah}} |
| {{key:Mod+S}} | {{ui:Simpan takeoff}} |

Kedua tombol ini tetap berfungsi meski Anda sedang mengetik di kolom isian.

## Tampilan dan lembar

| Tombol atau aksi | Fungsinya |
|---|---|
| Roda mouse | Zoom masuk dan keluar pada penunjuk. |
| Seret (tombol kiri, tengah, atau kanan) | Geser. Di {{ui:Hitung otomatis}}, seret kiri menggambar kotak pencarian sebagai gantinya. |
| {{key:Space}} ditahan + seret | Geser, di alat apa pun. |
| {{key:F}} | {{ui:Paskan halaman}} |
| {{key:W}} | {{ui:Paskan lebar}} |
| {{key:Plus}} atau {{key:=}} | Zoom masuk di tengah tampilan. |
| {{key:Minus}} | Zoom keluar di tengah tampilan. |
| {{key:PageDown}} / {{key:PageUp}} | Lembar berikutnya atau sebelumnya dalam daftar lembar. |
| {{key:Ctrl+Shift+F}} | Ganti mode layar penuh (Control di setiap platform, juga di Mac). |
| {{key:F1}} | Buka atau tutup bantuan ini, sebuah panel di sisi. |
| {{key:3}} | Tampilan cek 3D lembar, aktif atau nonaktif. |

## Tampilan 3D

| Tombol atau aksi | Fungsinya |
|---|---|
| Seret, atau seret dengan tombol tengah | Orbit. |
| {{key:Shift}} + seret, atau seret dengan tombol kanan | Geser. |
| Roda mouse | Zoom pada penunjuk. Pada trackpad, geser dua jari untuk orbit dan cubit untuk zoom. |
| Klik | Pilih tanda di bawah penunjuk ({{key:Shift}} + klik menambah atau mengeluarkan). |
| {{key:F}} atau {{key:W}} | Zoom ke batas. |
| {{key:3}} | Kembali ke lembar datar. |

Lihat [Periksa takeoff dalam 3D](topic:check-in-3d).

## Hitung otomatis

| Tombol atau aksi | Fungsinya |
|---|---|
| Seret kotak | Kotak simbol yang dicari (memulai pencarian). |
| Klik kotak yang cocok | Tolak, atau pulihkan. |
| {{key:Esc}} | Batalkan pencarian yang berjalan, atau buang tinjauan. |

## Bantuan

| Tombol | Fungsinya |
|---|---|
| {{key:F1}} | Buka atau tutup panel bantuan (juga tombol {{ui:Bantuan}} di bilah aplikasi). Berfungsi di setiap alat, meski sedang mengetik di kolom isian. |
| {{key:Esc}} | Tutup panel bantuan. Di kotak pencariannya, Esc pertama menghapus pencarian. Saat panel terbuka, Esc yang ditekan setelah mengklik lembar akan menutup panel dulu; tekan lagi untuk membatalkan di TakeoffCraft. |

:::mac
Di banyak keyboard Mac, baris atas mengatur kecerahan dan suara. Tekan fn bersama F1, atau aktifkan "Gunakan tombol F1, F2, dst. sebagai tombol fungsi standar" di Pengaturan Sistem, di bawah Keyboard.
:::

## Dialog dan kolom isian

| Tombol | Fungsinya |
|---|---|
| {{key:Enter}} | Di kolom isian: terapkan nilainya. Di dialog kalibrasi: {{ui:Atur skala}}. |
| {{key:Esc}} | Tutup dialog (sebagai {{ui:Batal}}); tutup formulir {{ui:Item baru}}. |
| {{key:Tab}} | Pindah ke kolom isian berikutnya. |

## Catatan platform

:::mac
- {{key:Mod}} adalah tombol Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Layar penuh adalah pengecualian: Control+Shift+F.
- Klik kanan adalah klik dua jari pada trackpad, setelah klik sekunder diaktifkan di Pengaturan Sistem, di bawah Trackpad. TakeoffCraft hanya membaca tombol sekunder; Control-klik dapat dianggap klik biasa dan menambahkan titik.
- Dua jari yang digulir pada trackpad memperbesar lembar (tidak menggulirnya). Untuk menggeser, tekan dan seret, atau tahan {{key:Space}} lalu seret.
- Page Up dan Page Down adalah fn bersama panah atas dan bawah pada keyboard yang tidak memilikinya.
- Backspace adalah tombol yang berlabel delete.
:::

:::windows
- {{key:Mod}} adalah Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Pada touchpad laptop, gulir dua jari memperbesar lembar. Untuk menggeser, tekan dan seret.
:::

:::linux
- {{key:Mod}} adalah Ctrl. Sebagian desktop memakai pintasan Ctrl+Alt atau Super milik mereka sendiri; TakeoffCraft tidak memakai satu pun dari itu.
- Pada touchpad, gulir dua jari memperbesar lembar. Untuk menggeser, tekan dan seret.
:::

:::touch
TakeoffCraft membaca sentuhan sebagai satu penunjuk:

- Ketuk menempatkan titik, memilih tanda, atau menambahkan titik hitung.
- Seret dengan satu jari untuk menggeser lembar (di {{ui:Hitung otomatis}} ia menggambar kotak pencarian).
- Cubit untuk zoom belum didukung. Gunakan {{ui:Paskan halaman}} dan {{ui:Paskan lebar}}, atau {{key:Plus}} dan {{key:Minus}} pada keyboard.
- Untuk menutup area, ketuk titik pertamanya. Untuk menyelesaikan rangkaian, ketuk dua kali di tempat peramban mengubah ketuk dua kali menjadi klik dua kali, atau tekan {{key:Enter}} pada keyboard.
- Tidak ada pembacaan panjang langsung sampai Anda mengetuk, karena tidak ada hover.

Untuk saat ini, keyboard dan mouse atau trackpad adalah cara yang lebih baik untuk melakukan takeoff.
:::

## Tombol yang dipakai peramban

Peramban menyimpan beberapa pintasan untuk dirinya sendiri, dan halaman tidak dapat memakainya: menutup tab ({{key:Mod+W}}), tab atau jendela baru ({{key:Mod+T}}, {{key:Mod+N}}), dan zoom peramban ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Itulah sebabnya TakeoffCraft men-zoom lembar dengan roda dan tombol {{key:Plus}} dan {{key:Minus}} saja. Jika Anda menekan {{key:Mod+Plus}} secara tidak sengaja, seluruh halaman membesar; {{key:Mod+0}} mengembalikannya. Lihat [Tombol, mouse, dan trackpad](common:keys).

## Letak perintah Pindahkan

Tidak ada perintah Pindahkan: pilih titik hitung lalu seret, atau pilih area atau garis lalu seret pegangan sudutnya.
