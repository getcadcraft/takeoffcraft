---
title: Kerja tanah dan aras titik
summary: Tandakan aras titik pada pelan tapak, serahkan kepada CivilCraft untuk permukaan serta potongan dan tambakan, dan ambil kuantiti galian mudah di sini.
keywords: kerja tanah, galian, potongan, tambakan, potongan dan tambakan, pembentukan permukaan, aras titik, aras, topo, permukaan, triangulasi, civilcraft, titik, pnezd, parit
from: a898e508
---

TakeoffCraft mengukur apa yang dilukis pada helaian. Kerja tanah memerlukan permukaan tanah, jadi ia dikongsi dengan CivilCraft, yang membina permukaan daripada titik, menentukan kecerunannya dan mengira potongan, tambakan serta angkutan jisim.

## Galian mudah di sini

Bagi tapak yang digali pada satu kedalaman, item luas dengan **kedalaman** sudah memadai: isipadu ialah luas × kedalaman. [Pakej perdagangan](topic:trade-packs) kontraktor am mempunyai item galian pukal (isipadu bank, isipadu longgar dan muatan lori) serta item parit utiliti (galian, lapik dan urugan balik mengikut panjang dan kedalaman).

## Aras titik untuk CivilCraft

1. Tetapkan skala helaian tapak.
2. Buat item **Kira**, contohnya "Gred sedia ada", dan klik setiap aras titik pada helaian.
3. Pilih satu tanda dan taip {{ui:Elevation}} dalam panel Tanda dipilih: `102.5`, `102'-6"` atau `31.24 m`. Aras negatif dan sifar dibenarkan.
4. Buka menu {{ui:Export}} dan pilih {{ui:Spot elevations}}. Anda akan mendapat fail titik (`.csv`) dengan Point, Northing, Easting, Elevation dan Description, satu baris bagi setiap titik yang ditanda pada helaian terbuka.
5. Buka fail itu dalam CivilCraft (lihat [Import titik](app:civilcraft/import-points)). Ia membina permukaan daripada titik ([Bina permukaan](app:civilcraft/build-surface)); dari situ ia membandingkan permukaan dan memberi potongan serta tambakan ([Isipadu](app:civilcraft/volumes)).

Northing dan easting ialah koordinat helaian itu sendiri dalam kaki, diukur dari sudut halaman pada skalanya: jarak dan isipadu antara titik adalah betul, tetapi ia bukan koordinat ukur tapak anda. Pindahkannya ke koordinat tapak dalam CivilCraft apabila anda perlukannya.

:::note
Titik daripada helaian yang berbeza tidak berkongsi koordinat, jadi eksport hanya mengambil helaian terbuka. Aras disimpan bersama takeoff dan dibawa melalui salin dan tampal.
:::

## Potongan dan tambakan daripada CivilCraft

Kerja tanah CivilCraft kembali sebagai dua item yang boleh anda harga:

1. Dalam CivilCraft, gredkan pelantar dan koridor anda, kemudian pilih {{ui:Send to TakeoffCraft}} di bawah **Kerja tanah** ([Isipadu kerja tanah](app:civilcraft/volumes)). Ia menyimpan fail kuantiti (`.quantities.json`).
2. Dalam TakeoffCraft, buka fail itu melalui {{ui:Open takeoff}}, atau lepaskannya pada aplikasi. Takeoff anda kekal terbuka: fail itu menambah **Kerja tanah: potongan** dan **Kerja tanah: tambakan** sebagai [kuantiti ditaip](topic:create-items#typed-quantities-no-drawing) dalam yard padu (CY) untuk projek kaki, atau meter padu (m³) untuk projek meter. Ia satu langkah: {{key:Mod+Z}} membatalkannya.
3. Namakan semula, tetapkan pembaziran, kadar dan himpunan kos mengikut kehendak anda.

Apabila reka bentuk berubah, hantar semula daripada CivilCraft dan buka fail baharu: dua item yang sama mendapat kuantiti baharu. Nama, kadar, pembaziran dan himpunan kos mereka kekal seperti yang anda tetapkan. Jika unit projek berubah, bar status akan memberitahu anda: semak kadar. Fail daripada projek CivilCraft lain menambah dua item sendiri.

Kuantiti ialah isipadu bank seperti yang diukur oleh CivilCraft (kaedah grid): tiada pengecutan atau pengembangan. Tambahkannya sebagai pembaziran, atau dengan formula seperti `Q * 1.25` untuk isipadu longgar. Penyunting item menunjukkan asal setiap satu dan bilanya; lajur nota anggaran kos juga menyatakannya.

:::note
Fail kuantiti ialah JSON biasa (`"format": "cadcraft-quantities"`), jadi skrip atau program lain juga boleh menulis satu: nama aplikasi, projek, dan item dengan kunci, nama, unit dan kuantiti.
:::
