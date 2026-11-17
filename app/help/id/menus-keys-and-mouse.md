---
title: Menu, tombol, dan mouse
summary: Pilih gaya menu yang sesuai dengan cara kerja Anda, beri setiap perintah tombol sendiri, pindahkan perintah antar menu, dan atur apa yang dilakukan roda serta tombol mouse.
keywords: gaya menu, menu, bilah menu, pita, tab pita, bilah alat, pintasan keyboard, tombol pintasan, tombol, kustomisasi, ubah tombol, rebind, mouse, roda, balik, arah zoom, tombol tengah, tombol kanan, geser, ekspor, impor, beralih, familiar, meja takeoff, kondisi
from: f01f0d6d
---

Perintah TakeoffCraft sama, apa pun cara Anda menjangkaunya. **Gaya menu** hanya menentukan di mana perintah itu berada di layar, bagaimana namanya di sana, dan tombol mana yang menjalankannya. Pilih satu di {{ui:Pengaturan}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menu, tombol, dan mouse}}; perubahan langsung berlaku, dan peramban ini mengingatnya.

## Tiga gaya

| Gaya | Yang Anda dapatkan |
|---|---|
| {{ui:TakeoffCraft}} | Bilah alat TakeoffCraft sendiri: File, Ekspor, Skala, Takeoff, Edit, dan Tampilan, dengan tombol alat satu huruf. Titik awal. |
| {{ui:Meja takeoff}} | Bilah menu ({{ui:File}}, {{ui:Edit}}, {{ui:Tampilan}}, {{ui:Skala}}, {{ui:Takeoff}}, {{ui:Item}}, {{ui:Markup}}, {{ui:Ekspor}}) di atas satu baris alat takeoff, seperti cara program takeoff di layar menata tampilannya. Item disebut kondisi di baris itu. Tombol yang sama, ditambah {{key:N}} untuk item baru. Preset skala berpindah ke bilah lembar, di samping skala lembar. |
| {{ui:Pita takeoff}} | Tab pita yang dinamai sesuai pekerjaan: {{ui:Takeoff}} (ukur, bentuk, skala, dari gambar, kondisi), {{ui:Edit}}, {{ui:Tampilan}}, {{ui:Markup}}, dan {{ui:Estimasi}} (buku kerja, PDF bertanda, penawaran), dengan menu {{ui:File}} dan baris cepat untuk buka, simpan, urungkan, dan ulangi. Alat yang Anda pakai sepanjang hari berukuran besar, tetangganya kecil dan bertumpuk. Tombol yang sama; preset skala berpindah ke bilah lembar. |

Ketiga gaya mempertahankan tombol TakeoffCraft: {{key:V}} pilih, {{key:L}} linear, {{key:A}} area, {{key:O}} lingkaran, {{key:B}} ruang, {{key:P}} jalur (pilih garis PDF), {{key:X}} lubang potong, {{key:C}} hitung, {{key:S}} hitung otomatis, {{key:K}} kalibrasi, {{key:D}} periksa, {{key:R}} mode busur, {{key:E}} mode kurangi, {{key:F}} dan {{key:W}} untuk paskan, {{key:3}} tampilan cek 3D, {{key:F3}} snap, dan {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Alat bilah lembar (catatan, awan, sorotan, Bandingkan, 3D) menunggu hingga PDF dibuka; jika dipilih sebelumnya, baris status menyatakannya.

:::tip
Tombol yang termasuk tata letak bawaan TakeoffCraft tetapi oleh gaya Anda diberikan ke perintah lain tidak melakukan apa-apa, dan baris status menyatakan ke mana perintahnya dipindahkan ("Di Tombol saya, Hitung adalah Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}}, dan tombol panah selalu mempertahankan maknanya. Saat Anda menggambar rangkaian atau garis tepi, menempel atau meninjau hitung otomatis, huruf dan angka dari panjang yang diketik tetap berada pada gambar.
:::

## Buat sesuai keinginan Anda

1. Pilih gaya yang paling dekat dengan yang Anda inginkan, lalu klik {{ui:Sesuaikan…}}.
2. Pada {{ui:Tombol dan menu}}, temukan perintah (kotak pencarian membantu). Klik {{ui:Tambah tombol}} lalu tekan tombolnya, atau dua tombol berurutan untuk tombol dua huruf. Klik tombol untuk melepasnya.
3. Dengan bilah menu, {{ui:Letaknya}} memindahkan perintah ke menu lain, atau ke {{ui:Hanya tombol}}.
4. Pada {{ui:Mouse}}, atur roda dan tombol yang menggeser lembar.
5. Beri nama lalu klik {{ui:Simpan}}.

Menyimpan gaya bawaan membuat salinan Anda sendiri ("Meja Takeoff saya"); yang bawaan tidak pernah berubah. Tombol yang diberikan kepada dua perintah ditampilkan dengan warna merah dan harus diperbaiki sebelum Anda dapat menyimpan.

## Mouse

- **Roda mouse**: {{ui:Gulir ke atas memperbesar}} (awal) atau {{ui:Gulir ke atas memperkecil}}, dan seberapa cepat. Cubit trackpad selalu men-zoom sesuai arah gerak jari Anda.
- **Geser lembar dengan**: tombol tengah, tombol kanan, atau keduanya. Seret kiri pada kertas kosong dan {{key:Space}} dengan seret selalu menggeser; klik kanan tanpa menyeret selalu menyelesaikan rangkaian atau garis tepi.
- **Seret di tampilan 3D**: Milik tiap tampilan mempertahankan tombol tampilan cek 3D (kiri dan tengah untuk orbit, kanan untuk geser). Atau atur tombol tengah dan kanan untuk orbit, geser, zoom, atau tidak ada; {{key:Shift}} dengan tombol menukar orbit dan geser. Tombol kiri selalu orbit dan memilih.

## Bawa ke mana pun

{{ui:Ekspor}} menyimpan gaya yang dipakai sebagai file `.ccinput.json` kecil; {{ui:Impor…}} menambahkannya, dari komputer lain atau dari rekan kerja. File yang diimpor hanya dapat menunjuk ke perintah TakeoffCraft sendiri: apa pun selain itu dibuang dan dihitung di baris status. {{ui:Hapus gaya ini}} menghapus gaya milik Anda sendiri.

:::note
Pengaturan ini tetap berada di peramban ini. {{ui:Gunakan gaya ini di setiap aplikasi}} di bawah kartu gaya membuat setiap aplikasi terbuka dalam gaya yang sesuai (bilah alat sendiri, bilah menu, atau pita), dengan perubahan yang Anda buat di setiap aplikasi. TakeoffCraft tidak memiliki gaya dengan baris perintah: jika satu dipilih untuk setiap aplikasi, TakeoffCraft tetap memakai bilah alatnya sendiri.

{{ui:Pita takeoff}} juga merupakan pita dari tata letak {{ui:Pita dan peramban proyek}} ({{ui:Pengaturan}} › {{ui:Global}} › {{ui:Tata letak}}): lihat [Layar TakeoffCraft](topic:workspace).
:::

Terkait: [Tombol dan mouse](topic:keyboard) · [Pengaturan TakeoffCraft](topic:settings) · [Beralih dari perangkat lunak takeoff lain](topic:coming-from)
