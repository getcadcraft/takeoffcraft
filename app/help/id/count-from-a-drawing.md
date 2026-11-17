---
title: Hitung dari gambar
summary: Hitung blok, objek pada layer, atau teks langsung dari DWG atau DXF: tepat, dengan blok bersarang, varian blok dinamis, dan array blok ditangani, dalam satu langkah urungkan.
keywords: hitung dari gambar, hitungan cad, hitungan blok, hitung blok, insert, nama blok, blok bersarang, blok dinamis, varian, minsert, array, layer, jenis entitas, lingkaran, teks, atribut, tag, layer tersembunyi, hitungan tepat, cara, pintu, perlengkapan
from: 5060e24e
---

{{ui:CAD count}} di bilah lembar (perintah **Count from the drawing** di gaya menu lain) menghitung apa yang ada di DWG atau DXF. Jika {{ui:Auto count}} mencari gambar sebuah simbol dan bisa melewatkan satu atau menemukan yang palsu, ini menghitung objeknya: setiap insert dari blok bernama `DOOR-36` adalah satu pintu. Buka gambar terlebih dahulu: [Buka gambar DWG atau DXF](topic:open-a-drawing).

## Hitung blok

1. Buka lembar dari gambar. {{ui:CAD count}} ada di bilah lembar.
2. Pilih itu. Jendela menampilkan daftar blok beserta jumlah masing-masing. Cari berdasarkan nama, lalu pilih satu.
3. Periksa baris di bawah daftar: "22 ditemukan, 22 akan ditambahkan."
4. Di bawah {{ui:Add to}}, pilih item hitung, atau biarkan {{ui:A new count item}} dan beri nama.
5. Pilih tombol tambah, yang menyebutkan jumlahnya: {{ui:Add 22 marks}}. Tanda muncul di titik sisip blok, dan kuantitas item adalah jumlah hitungannya.

Ini adalah satu langkah urungkan: {{key:Mod+Z}} menarik tanda (dan item baru) sekaligus. Perkiraan, spreadsheet, dan PDF bertanda memperlakukan item seperti item hitung lainnya.

### Yang dihitung

- **Setiap insert dari nama blok**, apa pun skala dan sudutnya, di ruang model atau ruang kertas. Nama blok tidak peduli huruf besar-kecil.
- **Array blok** (MINSERT): setiap salinan dalam array dihitung satu.
- **Blok bersarang.** Blok yang ditempatkan di dalam blok lain dihitung di setiap kedalaman. Daftarnya menulis "6 di dalam blok lain"; hapus centang {{ui:Count blocks inside other blocks too}} untuk hanya menghitung insert yang ditempatkan langsung di gambar.
- **Blok dinamis.** Blok dinamis dihitung di bawah namanya sendiri, bukan di bawah salinan anonim (`*U12`) yang disimpan file. Statusnya didaftar terpisah ("Single 12, Double 4"): pilih satu status untuk menghitung hanya status itu, atau {{ui:Every variant}}. Jika file tidak menyatakan status mana yang ditampilkan salinan, salinan itu didaftar sebagai "(status tidak diketahui)".
- **Filter layer.** Blok yang berada di beberapa layer: pilih satu di bawah {{ui:On layer}}.

### Yang tidak dihitung

- **Layer tersembunyi.** Objek pada layer yang mati atau dibekukan dalam file (atau yang Anda sembunyikan di {{ui:Layers}}) dikeluarkan, dan barisnya menyatakan berapa banyak: "3 pada layer tersembunyi dikeluarkan". Centang {{ui:Count them too}} untuk menyertakannya.
- **Gambar tertaut yang tidak terbuka** tidak dihitung; jendela menyatakannya.
- **Objek yang bertumpuk tepat di atas objek lain jenis yang sama** dihitung sebagai dua (memang dua objek) dan jendela menyatakannya: biasanya kesalahan gambar yang layak diperiksa.

## Yang ditampilkan lembar ini, atau seluruh gambar

- **Yang ditampilkan lembar ini** menghitung objek yang ditampilkan lembar: pada layout, objek model di dalam viewport-nya (layer yang dibekukan di viewport tidak dihitung di sana) ditambah objek layout itu sendiri.
- **Seluruh gambar, setiap objek sekali** menghitung ruang model sekali, dengan tanda pada lembar Model, dan tidak menghitung apa yang ditampilkan beberapa layout lagi.

Menghitung apa yang ditampilkan layout dan menghitung apa yang ditampilkan Model memberikan angka yang sama untuk objek yang sama; jangan tambahkan keduanya ke satu item.

## Hitung ulang

Menghitung blok yang sama lagi dengan item yang sama hanya menambahkan yang baru: "22 sudah dihitung." Setiap tanda mewakili satu objek.

## Menurut layer dan jenis

Pada {{ui:By layer and type}} pilih layer dan jenis objek (lingkaran, polyline, hatch…): "semua lingkaran pada E-LITE". Centang {{ui:Also count objects inside blocks}} untuk menyertakan objek yang berada di dalam definisi blok, di setiap tempat blok disisipkan.

## Menurut teks

Pada {{ui:By text}} ketik teksnya, seperti `A3`, dan nyatakan apakah harus persis, mengandung, atau sebagai kata utuh. Objek teks, teks multileader, dan **nilai atribut** blok semuanya dihitung (atribut tag `ITEM = A3` akan ditemukan); pilih {{ui:In attribute}} untuk menghitung satu atribut saja. Teks yang paling sering muncul didaftar untuk diklik.

## Kapan menggunakan Hitung otomatis

Gunakan {{ui:Auto count}} untuk PDF dan untuk simbol dalam gambar yang bukan blok (digambar lepas, atau sudah diurai). Jika digambar sebagai blok, hitung di sini.
