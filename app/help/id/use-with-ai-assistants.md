---
title: Gunakan TakeoffCraft dengan asisten AI
summary: Biarkan asisten AI atau skrip Anda sendiri membaca kuantitas dan estimasi takeoff, menambah item dan tanda, menghitung dan mengukur pada DWG atau DXF, serta mengekspor: izin, menghubungkan lewat CadCraft Studio, dan log aktivitas.
keywords: ai, asisten, agen, mcp, model context protocol, skrip, otomatisasi, kuantitas, estimasi, izin, putuskan, aktivitas
from: 7fa62ec6
---

## Yang akan Anda pelajari

Cara membiarkan asisten AI (atau skrip yang Anda tulis) bekerja dengan TakeoffCraft, dan cara memutuskan apa yang boleh disentuhnya.

TakeoffCraft **tidak memiliki AI sendiri** dan tidak mengirim apa pun ke mana pun. Anda membawa asistennya: program apa pun yang berbicara lewat Model Context Protocol (MCP). TakeoffCraft hanya memberinya alat, dan Anda yang memilih alat mana saja.

## Aktifkan

1. Buka {{ui:Pengaturan}} (ikon roda gigi di bilah aplikasi, atau {{key:Mod+,}}) lalu buka tab {{ui:TakeoffCraft}}.
2. Di bawah {{ui:Asisten}}, centang **Izinkan asisten AI dan skrip menggunakan TakeoffCraft**. Fitur ini nonaktif sampai Anda mengaktifkannya.
3. Pilih apa yang boleh dilakukannya: **Baca** sudah tercentang sejak awal; centang **Sunting**, **Simpan** atau **Ekspor** hanya jika Anda membutuhkannya.

Alat di luar izin yang Anda centang tidak ditawarkan kepada asisten, dan jika asisten tetap memintanya, TakeoffCraft menolak dan mencatatnya di log aktivitas. Mematikan sakelar akan langsung mengakhiri semua koneksi; {{ui:Atur ulang pengaturan TakeoffCraft}} juga mematikannya.

## Hubungkan asisten Anda

Asisten terhubung melalui **CadCraft Studio** di komputer Anda: Studio menjalankan server kecil yang hanya bisa dijangkau komputer ini, dilindungi token yang dibuatnya setiap kali dimulai. Di Studio, pilih {{ui:Hubungkan asisten}} dan salin alamat serta token ke asisten Anda (Studio menampilkan pengaturan persisnya untuk ditempelkan). Jangan pernah membagikan token.

:::note
Tab peramban tidak dapat membuka koneksi untuk asisten: di aplikasi peramban, sakelar tidak berpengaruh sampai Anda memakai CadCraft Studio di komputer Anda.
:::

## Anda tetap memegang kendali

- **Setiap perubahan adalah satu langkah urungkan**, diberi label dengan nama asisten, misalnya "Asisten: …". {{key:Mod+Z}} mengambil kembali perubahan terakhir asisten secara utuh.
- **Anda tahu saat ada yang terhubung.** Sebuah tombol di bilah aplikasi menyebut nama asisten selama terhubung; klik untuk melihat apa yang boleh dilakukannya, atau untuk **Putuskan** koneksinya.
- **Aktivitas.** {{ui:Pengaturan}} › {{ui:TakeoffCraft}} › {{ui:Asisten}} › {{ui:Aktivitas}} mencantumkan setiap panggilan: kapan, alat apa, berhasil atau ditolak. {{ui:Simpan log}} menyimpan salinannya.

## Yang bisa diminta asisten

| Alat | Izin | Yang dilakukannya |
|---|---|---|
| `app_info`, `sheets_list` | Baca | Takeoff yang terbuka, PDF dan lembarnya, skala serta tanda setiap lembar |
| `items_list` | Baca | Item beserta satuan, harga, dan formula rakitannya |
| `takeoff_quantities` | Baca | Kuantitas per item atau per lembar; tanda pada lembar tanpa skala didaftarkan, tidak pernah dihitung sebagai nol |
| `takeoff_estimate` | Baca | Estimasi berharga seperti yang dihitung TakeoffCraft, dengan total-totalnya |
| `takeoff_export` | Ekspor | Ekspor CSV atau XLSX milik TakeoffCraft sendiri |
| `items_add` | Sunting | Menambah item beserta satuan, harga, dan susutnya |
| `marks_add` | Sunting | Mengukur panjang, luas, dan hitungan pada lembar. Panjang dan luas hanya pada lembar yang punya skala, tidak pernah pada lembar tanpa skala |
| `cad_sheets`, `cad_catalog`, `cad_count` | Baca | Pada DWG atau DXF yang Anda buka: lembarnya dan skalanya, apa yang bisa dihitung (blok, layer dan tipe, teks), serta hitungan persis, seperti yang dibuat {{ui:Hitung CAD}} ([Hitung dari gambar](topic:count-from-a-drawing)) |
| `cad_count_add` | Sunting | Menghitung di dalam gambar dan menempatkan tanda hitung pada setiap objek yang ditemukan, dalam satu langkah; menghitung ulang hanya menambahkan yang baru |
| `cad_measure` | Sunting | Mengukur item linear atau luas dari garis, busur, polyline, dan hatch milik gambar itu sendiri, seperti yang dilakukan {{ui:Ukur gambar}} ([Ukur dari gambar](topic:measure-from-a-drawing)); hanya pada lembar yang punya skala |
| `usd_export` | Ekspor | Panjang, luas, dan hitungan terukur dari lembar yang berskala sebagai model cek 3D dalam USD (`.usdz`, `.usda` atau `.usdc`), seperti yang ditulis {{ui:Paket USD (.usdz)}} di tampilan cek 3D ([Ekspor tampilan cek 3D sebagai USD](topic:usd)) |

Dengan **Sunting** tercentang, asisten menambah item dan tanda (setiap panggilan satu langkah urungkan); ia tidak dapat memindahkan, mengubah, atau menghapus tanda yang sudah ada.

Kuantitas dan estimasi yang sama juga tersedia tanpa membuka TakeoffCraft: server MCP CadCraft membuka file `.takeoff.json` di folder yang Anda tentukan (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), dan `cadcraft info Job.takeoff.json` menampilkannya di baris perintah. Server juga dapat membuka DWG atau DXF sebagai takeoff baru pada lembar-lembarnya (diberi skala dari gambar seperti yang dilakukan TakeoffCraft), menghitung dan mengukur di dalamnya dengan alat `cad_*` yang sama, menambah item, dan menyimpan takeoff (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` menghitung dari baris perintah.

## Jika ada yang tidak berfungsi

- **Asisten tidak melihat alat TakeoffCraft:** periksa bahwa sakelar aktif di jendela ini, dan bahwa jendela terbuka di Studio.
- **"membutuhkan izin ekspor":** centang **Ekspor** di bawah {{ui:Asisten}}, lalu minta lagi.
- **Kesalahan "401" atau "token":** token telah berubah (Studio dimulai ulang, atau {{ui:Token baru}}). Salin token yang baru ke pengaturan asisten.

## Lihat juga

- [Resep untuk asisten AI](common:assistants-recipes): contoh yang dikerjakan, masing-masing dengan alat yang dipanggilnya.
