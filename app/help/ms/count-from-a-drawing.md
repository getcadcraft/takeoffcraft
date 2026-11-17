---
title: Kira daripada lukisan
summary: Kira blok, objek pada lapisan, atau teks terus daripada DWG atau DXF: tepat, dengan blok bersarang, varian blok dinamik dan tatasusunan blok dikendalikan, dalam satu langkah buat asal.
keywords: kira daripada lukisan, kiraan CAD, kiraan blok, kira blok, selit, nama blok, blok bersarang, blok dinamik, varian, minsert, tatasusunan, lapisan, jenis entiti, bulatan, teks, atribut, tag, lapisan tersembunyi, kiraan tepat, cara, pintu, lengkapan
from: 5060e24e
---

{{ui:Kiraan CAD}} pada bar helaian (arahan **Kira daripada lukisan** dalam gaya menu lain) mengira apa yang DWG atau DXF nyatakan wujud. Di mana {{ui:Kiraan auto}} mencari gambar simbol dan boleh terlepas atau menjumpai yang palsu, ini mengira objek: setiap selitan blok bernama `DOOR-36` ialah satu pintu. Buka lukisan dahulu: [Buka lukisan DWG atau DXF](topic:open-a-drawing).

## Kira blok

1. Buka helaian lukisan. {{ui:Kiraan CAD}} ada pada bar helaian.
2. Pilihnya. Tetingkap menyenaraikan blok dengan berapa banyak setiap satu. Cari mengikut nama, kemudian pilih satu.
3. Semak baris di bawah senarai: "22 dijumpai, 22 untuk ditambah."
4. Di bawah {{ui:Tambah ke}}, pilih item kiraan, atau biarkan {{ui:Item kiraan baharu}} dan beri nama.
5. Pilih butang tambah, yang menamakan bilangannya: {{ui:Tambah 22 tanda}}. Tanda muncul pada titik selitan blok, dan kuantiti item ialah kiraan.

Ini satu langkah buat asal: {{key:Mod+Z}} mengambil tanda (dan item baharu) bersama-sama. Anggaran, hamparan dan PDF ditanda memperlakukan item seperti mana-mana item kiraan lain.

### Apa yang dikira

- **Setiap selitan nama blok**, tanpa mengira skala dan sudutnya, dalam ruang model atau ruang kertas. Nama blok tidak peduli huruf besar atau kecil.
- **Tatasusunan blok** (MINSERT): setiap salinan dalam tatasusunan ialah satu.
- **Blok bersarang.** Blok yang diletakkan di dalam blok lain dikira pada setiap kedalaman. Senarai menyatakan "6 di dalam blok lain"; nyahtanda {{ui:Kira blok di dalam blok lain juga}} untuk mengira hanya selitan yang diletakkan terus dalam lukisan.
- **Blok dinamik.** Blok dinamik dikira di bawah nama sendiri, bukan di bawah salinan tanpa nama (`*U12`) yang disimpan fail. Keadaannya disenaraikan berasingan ("Single 12, Double 4"): pilih satu keadaan untuk mengira hanya itu, atau {{ui:Setiap varian}}. Apabila fail tidak menyatakan keadaan mana satu salinan tunjukkan, ia disenaraikan sebagai "(keadaan tidak diketahui)".
- **Penapis lapisan.** Blok pada beberapa lapisan: pilih satu di bawah {{ui:Pada lapisan}}.

### Apa yang tidak dikira

- **Lapisan tersembunyi.** Objek pada lapisan yang dimatikan atau dibekukan dalam fail (atau yang anda sembunyikan dalam {{ui:Lapisan}}) ditinggalkan, dan baris itu menyatakan berapa banyak: "3 pada lapisan tersembunyi ditinggalkan". Tandakan kotak untuk kira mereka juga bagi memasukkannya.
- **Lukisan pautan yang tidak dibuka** tidak dikira; tetingkap memberitahu demikian.
- **Objek yang bertindih tepat di atas objek lain jenis yang sama** dikira sebagai dua (ia memang dua objek), dan tetingkap memberitahu demikian: biasanya ia kesilapan lukisan yang patut diperiksa.

## Apa yang helaian ini tunjukkan, atau keseluruhan lukisan

- **Apa yang helaian ini tunjukkan** mengira objek yang helaian tunjukkan: pada susun atur, objek model dalam viewportnya (lapisan yang dibekukan dalam viewport tidak dikira di sana) ditambah objek susun atur itu sendiri.
- **Keseluruhan lukisan, setiap objek sekali** mengira ruang model sekali, dengan tanda pada helaian Model, dan tidak mengira semula apa yang beberapa susun atur tunjukkan.

Mengira apa yang susun atur tunjukkan dan mengira apa yang Model tunjukkan memberikan nombor yang sama bagi objek yang sama; jangan tambah kedua-duanya kepada satu item.

## Kira kiraan semula

Mengira blok yang sama semula dengan item yang sama hanya menambah apa yang baharu: "22 sudah dikira." Setiap tanda mewakili satu objek.

## Mengikut lapisan dan jenis

Pada {{ui:Mengikut lapisan dan jenis}} pilih lapisan dan jenis objek (bulatan, polyline, hatch…): "semua bulatan pada E-LITE". Tandakan {{ui:Kira juga objek di dalam blok}} untuk turut menyertakan yang berada di dalam takrifan blok, pada setiap tempat blok diselitkan.

## Mengikut teks

Pada {{ui:Mengikut teks}} taip teks, seperti `A3`, dan nyatakan sama ada ia tepat sama, mengandungi, atau sebagai perkataan penuh. Objek teks, teks multipetunjuk dan **nilai atribut** blok semuanya dikira (atribut tag `ITEM = A3` dijumpai); pilih {{ui:Dalam atribut}} untuk mengira satu atribut sahaja. Teks paling biasa disenaraikan untuk diklik.

## Bila hendak guna Kiraan auto

Gunakan {{ui:Kiraan auto}} untuk PDF dan untuk simbol dalam lukisan yang bukan blok (dilukis longgar, atau dipecahkan). Yang dilukis sebagai blok, kira di sini.
