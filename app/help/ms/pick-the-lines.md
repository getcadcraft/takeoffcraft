---
title: Pilih garisan PDF
summary: Klik garisan PDF vektor untuk mengukur keseluruhan laluan bersambungnya, atau klik di dalam garis luar tertutup untuk luasnya, dengan toleransi jurang dipaparkan dan satu asal bagi setiap segmen.
keywords: laluan, pilih, garisan, bersambung, keseluruhan larian, surih, garis luar, perimeter, jurang, toleransi, jambatan, segmen, tab, vektor, luas daripada garisan, p
from: c22526ae
---

Pada PDF vektor, dinding dan tepi ialah garisan sebenar. {{ui:Laluan}} ({{key:P}}) mengambilnya seperti yang dilukis: satu klik pada garisan mengukur semua yang bersambung dengannya, dari hujung ke hujung, jadi anda tidak perlu menyurih dinding dengan mengklik bucunya. Helaian memerlukan skala. Halaman yang diimbas tiada garisan untuk dipilih; gunakan [Linear](topic:measure-linear) atau [Luas](topic:measure-areas) di sana.

## Pilih laluan atau garis luar

1. Pilih {{ui:Laluan}}. Garisan di bawah penuding digariskan, dengan laluan lain yang mungkin dilukis secara nipis.
2. Klik garisan: seluruh laluan bersambung dipilih. Bar di bawah bar alat memberikan segmennya, panjang, toleransi jurang dan berapa jurang yang dijambatkan. Laluan yang kembali ke titik mulanya ditutup dan turut melaporkan perimeternya.
3. Atau klik di dalam garis luar tertutup, jauh daripada mana-mana garisan: garis luar di sekeliling titik itu dipilih sebagai luas. Yang terkecil datang dahulu; {{key:Tab}} mencuba garis luar yang lebih besar seterusnya.
4. Tekan {{key:Enter}} (atau klik kanan, atau klik dua kali) untuk menambah tanda. Laluan yang dipilih menjadi tanda item **linear**, dan garis luar menjadi tanda item **luas**: item aktif jika ia mempunyai jenis itu, jika tidak, yang terbaharu daripada jenis itu. Tanpa apa-apa, borang item baharu dibuka dan tiada apa ditambah sehingga anda menekan {{key:Enter}} sekali lagi. Semua yang dipilih ditambah dalam satu langkah asal.

## Toleransi jurang

Drafter meninggalkan lubang kecil di tempat garisan sepatutnya bertemu. Dua garisan bercantum apabila hujungnya lebih dekat daripada **toleransi jurang**. Ia bermula pada 1.5 mata pada helaian (ditunjukkan dalam kaki dan inci pada skala helaian), dan gelang putus-putus selebar itu mengikuti penuding dan diletakkan pada setiap hujung laluan di bawahnya. Setiap lubang yang dijambatkan dikelilingi oren pada laluan yang dipilih, dan bar mengiranya.

{{key:]}} melebarkan toleransi, {{key:[}} mengecilkannya. Laluan yang dipilih dicantum semula serta-merta pada toleransi baharu. Di persimpangan, laluan terus lurus, mengikut cara yang paling kurang membengkok, dan meninggalkan cabang.

## Kekunci

| Kekunci atau tindakan | Apa yang dilakukannya |
|---|---|
| Klik | Pilih laluan di bawah penuding, atau garis luar di sekelilingnya. |
| {{key:Shift}} + klik | Tambah laluan atau garis luar lain kepada yang dipilih. |
| {{key:Tab}} | Cuba laluan seterusnya di bawah penuding, atau garis luar lebih besar yang seterusnya. |
| {{key:Backspace}} atau {{key:Mod+Z}} | Buang segmen terakhir daripada laluan yang dipilih terakhir, satu segmen pada satu masa. Laluan tanpa segmen tinggal akan hilang. Tanpa apa-apa dipilih, {{key:Mod+Z}} ialah asal biasa. |
| {{key:[}} dan {{key:]}} | Toleransi jurang yang lebih sempit dan lebih lebar. |
| {{key:Enter}} | Tambah tanda. |
| {{key:Esc}} | Kosongkan apa yang dipilih. |

## Perkara yang perlu diketahui

- Lengkung dalam lukisan ialah rantai potongan lurus yang pendek, jadi panjangnya sedikit kurang daripada lengkok sebenar. Untuk lengkok tepat, ukur fail lukisan itu sendiri ([Ukur daripada lukisan](topic:measure-from-a-drawing)).
- Jurang yang dijambatkan dikira sebagai lompatan lurus merentanginya, jadi perimeter garis luar tertutup termasuk jurang itu.
- Hanya sapuan dan isian dalam laluan halaman itu sendiri adalah garisan. Teks yang dilukis sebagai huruf, dan gambar, tidak.
