---
title: Mula pengukuran kuantiti dan buka set pelan
summary: Buka satu atau beberapa PDF sebagai set pelan, cari jalan anda di sekitar helaian, dan bergerak antara helaian.
keywords: buka, set pelan, beberapa pdf, pelbagai fail, helaian, lukisan, label halaman, senarai helaian, navigasi, lepas, serahan, buka dalam aplikasi lain, markup
from: ed434468
---

Set pelan selalunya beberapa PDF: seni bina, struktur, mekanikal. TakeoffCraft membukanya bersebelahan sebagai satu senarai helaian, dan satu pengukuran kuantiti boleh meliputi kesemuanya.

## Buka PDF

1. Pilih {{ui:Buka pelan}} dalam kumpulan {{ui:Fail}}, atau tekan {{key:Mod+O}}. (Gaya menu lain memanggilnya {{ui:Buka PDF…}}.)
2. Dalam dialog fail, pilih setiap PDF dalam set. Tahan {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} untuk memilih beberapa, atau {{key:Shift}} untuk memilih julat.
3. Pilih Buka.
   Mesej "Membuka (nama)…" dipaparkan semasa setiap fail dibaca. Kemudian setiap halaman muncul di bawah {{ui:Helaian}} dan halaman pertama PDF baharu pertama dibuka.

Anda juga boleh menyeret PDF dari {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}} dan melepaskannya di mana-mana pada TakeoffCraft. Bingkai "Lepaskan PDF, lukisan DWG atau DXF, atau .takeoff.json" muncul semasa anda menyeret.

Untuk menambah PDF kemudian, buat cara yang sama. PDF yang sudah dibuka akan dilangkau.

Skrin permulaan juga menyenaraikan PDF dan pengukuran kuantiti yang baru dibuka, dalam pelayar yang membenarkan halaman membuka fail semula (Chrome dan Edge). Klik satu untuk membukanya; pelayar mungkin meminta kebenaran dahulu. Lihat [Fail anda](common:your-files).

:::note
Tiada yang dimuat naik. Pelayar membaca PDF di komputer anda, dan ia hilang daripada TakeoffCraft apabila anda menutup tab atau memilih {{ui:Baharu}}.
:::

## Lukisan bersebelahan PDF

{{ui:Buka pelan}} juga menerima lukisan DWG dan DXF, bersendirian atau bersama PDF: ruang model setiap lukisan dan layoutnya menjadi helaian dalam senarai yang sama. Lihat [Buka lukisan DWG atau DXF](topic:open-a-drawing), kemudian [Kira daripada lukisan](topic:count-from-a-drawing).

## PDF yang diserahkan daripada aplikasi lain

Aplikasi lain dalam rangkaian boleh menyerahkan PDF yang dibukanya: ia membuka TakeoffCraft dalam tab baharu dan PDF dibuka di sana seolah-olah anda telah melepaskannya. Bar status menyatakan "(nama) dibuka, diserahkan daripada (aplikasi). Fail asal tidak berubah." Tiada yang dimuat naik; fail melalui storan pelayar ini dan hilang daripadanya sebaik sahaja dibuka.

Jika bar status menyatakan PDF "tidak sampai", tab terlalu lama menunggu atau PDF sudah dibuka dalam tab lain: buka dengan {{ui:Buka pelan}}.

Sebaliknya, apabila MarkupCraft berjalan di tempat anda dan boleh mengambil fail, bar helaian di bawah lukisan mempunyai butang {{ui:MarkupCraft}}: ia membuka PDF helaian yang dipaparkan dalam MarkupCraft, dalam tab baharu, untuk disemak dan ditanda.

## Cari helaian

- Tatal senarai {{ui:Helaian}} di sebelah kiri dan klik helaian.
- Taip dalam **Cari helaian** di bahagian atas senarai untuk menapis mengikut nombor helaian, nama fail atau label halaman. Kiraan di sebelah {{ui:Helaian}} menunjukkan "3 daripada 40" semasa penapis aktif.
- Tekan {{key:PageDown}} untuk helaian seterusnya dan {{key:PageUp}} untuk yang sebelumnya. Ia mengikut senarai seperti yang ditapis.

:::mac
Pada papan kekunci Mac tanpa kekunci Page Up dan Page Down, tekan fn dengan anak panah atas atau bawah.
:::

## Cara helaian dinamakan

- Halaman yang diberi label oleh PDFnya, seperti `A-101`, dinamakan mengikut label itu.
- Halaman tanpa label (atau label yang hanya nombor halamannya) dinamakan "(nama fail), halaman (n)".
- Dengan beberapa PDF dibuka, helaian berlabel juga membawa nama fail: "A-101 — Architectural".

Nama helaian belum boleh ditaip secara manual.

## Melihat sekitar helaian

- Putar roda tetikus untuk zum pada penuding.
- Seret dengan butang kiri atau tengah untuk pan. Dengan {{ui:Kiraan auto}}, atau apabila anda bermula pada sudut tanda, tahan {{key:Space}} semasa menyeret, atau seret dengan butang tengah.
- Tekan {{key:F}} atau pilih {{ui:Muat halaman}} untuk melihat keseluruhan helaian; {{key:W}} atau {{ui:Muat lebar}} memuatkan lebarnya.
- Tekan {{key:Plus}} atau {{key:=}} untuk zum masuk dan {{key:Minus}} untuk zum keluar, di sekitar tengah paparan.

Setiap helaian mengingati zum dan kedudukannya sendiri selagi ia kekal dibuka.

## Seterusnya

Sebelum anda boleh mengukur helaian, ia memerlukan skala: [Tetapkan skala](topic:set-the-scale).
