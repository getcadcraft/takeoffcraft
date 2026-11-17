---
title: Ukur daripada lukisan
summary: Ambil panjang dan luas daripada garisan, lengkok, polygaris dan hatch lukisan itu sendiri dengan memilihnya, dengan lengkok dan lubang yang tepat, dan bukan dengan menjejak menggunakan klik.
keywords: ukur lukisan, geometri, polygaris, lengkok, bulatan, hatch, bulge, panjang tepat, luas tepat, pilih, tetingkap, jejak, daripada cad, linear, luas
from: fd734246
---

{{ui:Ukur lukisan}} pada bar lembaran bagi lembaran DWG atau DXF mengambil objek lukisan itu sendiri sebagai tanda, supaya anda tidak perlu menjejaknya dengan klik. Panjang polygaris, panjang lengkok, luas bulatan dan luas hatch dengan lubangnya keluar dengan tepat, daripada aritmetik yang digunakan takeoff untuk setiap tanda.

## Ambil objek sebagai item linear atau luas

1. Buat atau klik item **linear** atau **luas** di bawah {{ui:Item}}. Lembaran memerlukan skala.
2. Pilih {{ui:Ukur lukisan}}.
3. Klik objek pada lembaran untuk memilihnya, atau seret tetingkap di sekelilingnya: setiap perkara yang berada sepenuhnya di dalamnya dipilih. {{key:Shift}} menambah tetingkap kepada yang dipilih; klik objek yang telah dipilih sekali lagi untuk melepaskannya. Bar memaparkan jumlahnya: "6 larian: 108'-9 1/8" keseluruhannya."
4. Pilih butang tambah, yang menamakan bilangan dan item, seperti {{ui:Tambah 6 ke Edge}} (atau tekan {{key:Enter}}). Setiap objek menjadi satu tanda bagi item itu, dalam satu langkah {{ui:Buat asal}}. {{key:Esc}} mengosongkan apa yang anda pilih.

## Apa yang diambil oleh setiap jenis item

- Item **linear** mengambil garisan, lengkok, polygaris, bulatan dan splin mengikut panjang. Bentuk tertutup dikira mengikut perimeternya. Hatch ditinggalkan: ia mempunyai luas, bukan panjang, dan bar menyatakannya.
- Item **luas** mengambil bentuk tertutup: polygaris tertutup, bulatan, pepejal 2D dan hatch dengan lubangnya. Larian terbuka ditinggalkan, dan bar menyatakannya.

## Tepat, dan hampir tepat

Garisan, lengkok (sebarang bulge), polygaris dengan bulge dan bulatan adalah tepat: panjang dan luas menggunakan jejari lengkok dan sapuannya, bukan gambar lengkok itu. Elips, splin dan hatch yang sempadannya terdiri daripada tepi diukur dalam kord satu darjah atau lebih halus, yang berada dalam lingkungan seperseratus peratus untuk elips dan sepersepuluh untuk yang lain; bar menyatakan berapa banyak yang anda pilih ialah lengkung jenis ini.

## Dari mana ia mengambil

- **Model**: objek dalam ruang model. **Satu layout**: garisan sendirinya, dan objek model di dalam viewport, diskalakan melaluinya. Objek yang merentasi tepi viewport tidak ditawarkan (ia dicetak dipotong); objek yang dipaparkan oleh dua viewport diambil sekali sahaja.
- Hanya lapisan yang ditunjukkan oleh lembaran. Blok dikira, bukan diukur: lihat [Kira daripada lukisan](topic:count-from-a-drawing). Polygaris 3D, mesh, pepejal dan kawasan tidak ditawarkan.
