---
title: Simpan dan buka semula pengukuran kuantiti
summary: Simpan pengukuran kuantiti sebagai projek .takeoff.json, buka semula dengan PDF yang sama, dan apa yang berlaku apabila PDF hilang atau telah berubah.
keywords: takeoff dalam pdf, benam, lampiran, simpan, buka, buka semula, projek, takeoff.json, sambung, teruskan, pdf yang disemak, pdf yang berubah, pdf yang hilang, sandaran, simpan automatik, pulihkan, ranap
from: bd5080a6
---

Pengukuran kuantiti disimpan sebagai fail projek kecil, `(name).takeoff.json`. Ia menyimpan item, himpunan, kadar, skala setiap helaian dan setiap penanda. Ia **tidak** menyimpan PDF; ia mencarinya semula mengikut kandungannya.

## Simpan

1. Pilih {{ui:Simpan takeoff}} dalam kumpulan {{ui:Fail}}, atau tekan {{key:Mod+S}}.
   Pelayar anda memuat turun `(name).takeoff.json`. Bar status berbunyi "(name).takeoff.json disimpan. Ia dibuka semula di atas PDF yang sama (dipadankan mengikut kandungannya)."
2. Alihkan fail itu ke sebelah PDF kerja, supaya kedua-duanya kekal bersama.

Setiap simpanan memuat turun fail baharu. Pelayar anda mungkin menamakan fail kedua `(name) (1).takeoff.json`; simpan yang terkini.

Nama diambil daripada PDF pertama yang anda buka dalam pengukuran kuantiti ini.

:::note
Simpan takeoff masih satu-satunya cara untuk menyimpan pengukuran kuantiti sebagai fail. Semasa anda bekerja, TakeoffCraft juga menyimpan salinan pemulihan dalam pelayar ini (lihat di bawah), dan simpanan awan belum tersedia. Jika anda cuba menutup tab dengan perubahan yang belum disimpan, pelayar bertanya sama ada mahu keluar.
:::

## Simpan pengukuran kuantiti dalam PDF

{{ui:Eksport}} › {{ui:PDF dengan pengukuran kuantiti di dalamnya}} memuat turun salinan setiap PDF yang dibuka, dinamakan seperti `Plans (with takeoff).pdf`, yang membawa keseluruhan pengukuran kuantiti sebagai lampiran: item, penanda, skala, kawasan bidaan, semua yang dimuatkan oleh `.takeoff.json`. Halamannya tidak diubah, jadi ia kelihatan dan dicetak seperti yang asal, dan pembaca PDF lain menyenaraikan pengukuran kuantiti di bawah lampirannya.

Buka PDF itu dalam TakeoffCraft (dengan apa-apa cara anda membuka PDF) dan ia bertanya **PDF ini mempunyai pengukuran kuantiti di dalamnya**: pilih {{ui:Buka pengukuran kuantiti}} untuk mendapatkannya semula, atau {{ui:Hanya PDF}} untuk hanya membuka lukisan. Salinan itu mewakili PDF asalnya, jadi `.takeoff.json` yang disimpan daripada mana-mana satu akan dibuka pada kedua-duanya.

Dengan beberapa PDF, setiap salinan membawa keseluruhan pengukuran kuantiti; buka kesemuanya bersama. Menyimpan semula daripada salinan menggantikan pengukuran kuantiti di dalamnya, ia tidak menambah yang kedua. `.takeoff.json` tetap fail yang perlu disimpan: ia kecil, dan itulah yang ditulis oleh simpan automatik dan aplikasi desktop.

## Jika tab atau pelayar terhenti

Beberapa saat selepas setiap perubahan, TakeoffCraft menyimpan salinan pengukuran kuantiti dalam storan pelayar ini sendiri, bersama PDF-nya apabila jumlahnya 64 MB atau kurang. Tiada apa-apa dimuat naik. Apabila anda menyimpan pengukuran kuantiti, memulakan yang baharu atau membuka projek lain, salinan itu dipadam.

Jika tab ranap, pelayar atau komputer terhenti, atau anda keluar dengan perubahan yang belum disimpan, kali seterusnya anda membuka TakeoffCraft ia bertanya **Pulihkan kerja anda?** dan menyenaraikan pengukuran kuantiti mengikut nama. Pilih **Pulihkan** untuk mendapatkannya semula: item, penanda dan skala dikembalikan, dan PDF-nya dibuka semula jika ia disimpan. Bar status berbunyi "Dipulihkan (name). Ia belum disimpan dalam fail: Simpan takeoff menyimpannya." Apabila PDF terlalu besar untuk disimpan, buka semula; penanda akan muncul pada helaiannya. Maklumat lanjut: [Pulihkan kerja anda](common:recover).

## Buka semula

1. Buka TakeoffCraft.
2. Lepaskan fail `.takeoff.json` dan PDF-nya pada halaman secara serentak. Atau pilih {{ui:Buka pelan}} untuk PDF dan {{ui:Buka takeoff}} untuk projek, dalam mana-mana susunan.
   Bar status berbunyi "Dibuka (name): 12 item, 340 penanda." Setiap helaian mendapat semula skalanya dan penanda muncul pada helaiannya.

Susunan PDF tidak penting, begitu juga nama fail atau folder mereka. TakeoffCraft mengenal pasti setiap PDF melalui cap jari kandungannya.

Jika anda membuka projek semasa pengukuran kuantiti semasa mempunyai perubahan yang belum disimpan, TakeoffCraft bertanya dahulu: **Batal**, **Buang perubahan**, atau **Simpan takeoff dahulu**. Membuka projek menggantikan item dan penanda semasa; PDF yang sudah dibuka kekal dibuka.

## Apabila PDF hilang

Jika anda membuka projek tanpa semua PDF-nya, bar status menambah "Buka PDF-nya untuk melihat penanda (disenaraikan di bawah Helaian)." Di bawah senarai helaian, satu nota berbunyi:

"Pengukuran kuantiti ini juga meliputi PDF yang tidak dibuka. Kuantitinya dikira; buka PDF tersebut untuk melihat dan menyunting penandanya:"

diikuti dengan nama dan saiz fail. Penanda mereka tetap dikira dalam setiap jumlah dan eksport, dengan skala ketika ia diukur. Buka PDF tersebut untuk melihat dan menyunting penanda.

## Apabila PDF telah berubah

PDF yang telah disemak, atau baru sahaja disimpan semula oleh program lain, mempunyai kandungan yang berbeza, jadi ia ialah **fail yang berbeza** kepada TakeoffCraft, walaupun dengan nama yang sama. Dalam nota di bawah senarai helaian, fail sedemikian berbunyi "fail dengan nama ini sedang dibuka, tetapi kandungannya berbeza".

- Penanda kekal dilampirkan pada versi lama. Ia terus dikira, pada kedudukan dan skala lamanya.
- PDF yang telah disemak dibuka sebagai helaian baharu tanpa skala dan tanpa penanda.

Untuk memindahkan pengukuran kuantiti ke semakan itu, buka kedua-dua PDF dan gunakan {{ui:Banding}} pada helaian baharu: [Bandingkan helaian yang disemak dan pindahkan pengukuran kuantiti](topic:compare-revisions).

## Fail yang rosak atau asing

TakeoffCraft menyemak setiap fail projek sebelum menggunakannya. Mesej yang mungkin anda lihat:

- "(file) bukan projek TakeoffCraft (ia bukan JSON yang sah)."
- "Ini bukan fail projek TakeoffCraft."
- "Projek ini disimpan oleh TakeoffCraft yang lebih baharu. Buka di sana."
- "3 penanda rosak dan ditinggalkan." (selebihnya dibuka)

## Sejarah buat asal

Sejarah buat asal bermula semula apabila anda membuka projek. Menyimpan tidak mengosongkannya.
