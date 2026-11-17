---
title: Pilih garis PDF
summary: Klik sebuah garis dari PDF vektor untuk mengukur seluruh jalur yang tersambung, atau klik di dalam garis tepi tertutup untuk luasnya, dengan toleransi celah ditampilkan dan satu undo per segmen.
keywords: jalur, pilih, garis, lintasan, seluruh lintasan, telusuri, garis tepi, keliling, celah, toleransi, jembatan, segmen, tab, vektor, luas dari garis, p
from: c22526ae
---

Pada PDF vektor, dinding dan tepi adalah garis sungguhan. {{ui:Path}} ({{key:P}}) mengambilnya seperti yang digambar: satu klik pada garis mengukur semua yang tersambung dengannya, dari ujung ke ujung, sehingga Anda tidak perlu menelusuri dinding dengan mengklik sudut-sudutnya. Lembar perlu skala. Halaman hasil pindaian tidak memiliki garis untuk dipilih; gunakan [Linear](topic:measure-linear) atau [Luas](topic:measure-areas) di sana.

## Pilih jalur atau garis tepi

1. Pilih {{ui:Path}}. Garis di bawah penunjuk diberi garis tepi, dan jalur lain yang mungkin tergambar akan ditampilkan tipis.
2. Klik sebuah garis: seluruh jalur yang tersambung terpilih. Bilah di bawah bilah alat menampilkan jumlah segmennya, panjangnya, toleransi celah, dan berapa celah yang dijembatani. Jalur yang kembali ke titik awalnya disebut tertutup dan juga melaporkan kelilingnya.
3. Atau klik di dalam garis tepi tertutup, jauh dari garis mana pun: garis tepi di sekitar titik itu dipilih sebagai area. Yang terkecil lebih dulu; {{key:Tab}} mencoba garis tepi yang lebih besar berikutnya.
4. Tekan {{key:Enter}} (atau klik kanan, atau klik dua kali) untuk menambahkan tanda. Jalur yang dipilih menjadi tanda dari item **linear**, dan garis tepi menjadi tanda dari item **area**: item aktif jika jenisnya sesuai, jika tidak, item terbaru dengan jenis itu. Tanpa item apa pun, formulir item baru terbuka dan tidak ada yang ditambahkan sampai Anda menekan {{key:Enter}} lagi. Semua yang dipilih ditambahkan dalam satu langkah undo.

## Toleransi celah

Drafter meninggalkan lubang kecil di tempat garis seharusnya bertemu. Dua garis tersambung ketika ujungnya lebih dekat dari **toleransi celah**. Toleransinya dimulai dari 1.5 poin pada lembar (ditampilkan dalam kaki dan inci sesuai skala lembar), dan cincin putus-putus selebar itu mengikuti penunjuk serta berada di setiap ujung jalur di bawahnya. Setiap lubang yang dijembatani diberi cincin oranye pada jalur yang dipilih, dan bilah menghitungnya.

{{key:]}} membuat toleransi lebih lebar, {{key:[}} lebih sempit. Jalur yang dipilih langsung tersambung ulang pada toleransi baru. Pada persimpangan, jalur tetap lurus, mengikuti belokan yang paling kecil, dan meninggalkan cabangnya.

## Tombol

| Tombol atau aksi | Yang dilakukannya |
|---|---|
| Klik | Pilih jalur di bawah penunjuk, atau garis tepi di sekitarnya. |
| {{key:Shift}} + klik | Tambahkan jalur atau garis tepi lain ke yang sudah dipilih. |
| {{key:Tab}} | Coba jalur berikutnya di bawah penunjuk, atau garis tepi yang lebih besar berikutnya. |
| {{key:Backspace}} atau {{key:Mod+Z}} | Hapus segmen terakhir dari jalur terakhir yang dipilih, satu segmen setiap kali. Jalur tanpa segmen tersisa akan hilang. Jika tidak ada yang dipilih, {{key:Mod+Z}} adalah urungkan biasa. |
| {{key:[}} dan {{key:]}} | Toleransi celah lebih sempit dan lebih lebar. |
| {{key:Enter}} | Tambahkan tanda. |
| {{key:Esc}} | Hapus yang dipilih. |

## Hal yang perlu diketahui

- Lengkung dalam gambar adalah rangkaian potongan lurus pendek, sehingga panjangnya sedikit lebih pendek dari busur sebenarnya. Untuk busur yang tepat, ukur dari file gambar itu sendiri ([Ukur dari gambar](topic:measure-from-a-drawing)).
- Celah yang dijembatani dihitung sebagai lompatan lurus melintasinya, sehingga keliling garis tepi tertutup menyertakannya.
- Hanya goresan dan isian dalam jalur halaman itu sendiri yang menjadi garis. Teks yang digambar sebagai huruf, serta gambar, tidak.
