---
title: Snap ke garisan lukisan
summary: Titik melompat ke garisan asal PDF semasa anda mengukur atau menentukur: hujung, titik tengah, persilangan atau mana-mana titik pada garisan, dengan penanda yang menunjukkan jenisnya.
keywords: snap, osnap, snap objek, titik hujung, titik tengah, persilangan, terdekat, vektor, garisan lukisan, garisan, jitu, tepat, f3, magnet, bucu
from: 41d29e9b
---

Kebanyakan set pelan ialah PDF vektor: dinding dan tepinya ialah garisan sebenar, bukan piksel. Semasa anda mengukur, TakeoffCraft melekapkan klik anda pada garisan tersebut, supaya larian bermula tepat di bucu dinding dan penentukuran membaca dimensi yang dilukis oleh pelukis, bukan piksel yang anda klik.

Snap dihidupkan apabila anda bermula. Hidupkan dan matikannya dengan {{ui:Snap}} dalam bar status atau {{key:F3}}; tetapan itu disimpan dalam pelayar ini (ia juga terdapat di bawah [Tetapan](topic:settings)).

## Titik yang dilekapkan

Apabila penuding berada dalam lingkungan kira-kira 10 piksel skrin daripada garisan, penanda menunjukkan tempat klik akan mendarat, bersama namanya:

| Penanda | Nama | Lokasi |
|---|---|---|
| Segi empat sama | **Titik hujung** | Hujung garisan, atau bucu tempat garisan bertemu. Dua hujung lengkung dikira; titik di sepanjangnya tidak. |
| Segi tiga | **Titik tengah** | Tengah garisan lurus. |
| Silang | **Persilangan** | Tempat dua garisan bersilang, atau tempat satu garisan berakhir pada garisan lain. |
| Jam pasir | **Pada garisan** | Titik terdekat pada garisan, apabila tiada titik hujung, titik tengah atau persilangan yang hampir. |

Titik hujung, titik tengah atau persilangan terdekat yang menang. Hanya apabila tiada yang hampir, titik itu jatuh pada garisan itu sendiri. Zum masuk untuk memilih antara titik yang berdekatan: 10 piksel ialah piksel skrin, jadi pada zum yang lebih tinggi ia meliputi lebih sedikit helaian.

## Tempat ia berfungsi

Snap berfungsi dalam {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}}, {{ui:Cut-out}}, {{ui:Calibrate}} dan {{ui:Check}}, dan apabila anda menyeret bucu penanda yang dipilih. Ia juga meletakkan titik lengkok. {{ui:Count}}, {{ui:Auto count}} dan menampal tidak dilekapkan.

Titik yang dilekapkan mengatasi snap 45° {{key:Shift}}: untuk melukis pada 45° jauh daripada garisan, matikan Snap dengan {{key:F3}} dahulu.

:::tip
Tentukur dengan Snap dihidupkan. Klik berhampiran dua hujung garisan dimensi atau dinding yang anda tahu: kedua-dua titik mendarat tepat pada lukisan, dan skala menjadi tepat (bar status kemudian menamakan pratetap yang sepadan).
:::

## Helaian yang tidak boleh dilekapkan

- **Helaian yang diimbas** ialah gambar tanpa garisan untuk dilekapkan. Bar status berkata "This sheet has no lines to snap to (a scanned page is a picture)." dan titik pergi ke tempat anda klik.
- **Lukisan yang sangat besar**: snap membaca sehingga 400,000 segmen garisan setiap helaian. Pada helaian yang lebih banyak, ia memberitahu anda dan hanya melekap pada yang pertama.
- **Teks** tidak dilekapkan, melainkan PDF melukis hurufnya sebagai garisan (sesetengah pencetak berbuat demikian).

Garisan helaian dibaca kali pertama anda membukanya, di latar belakang; helaian yang besar boleh mengambil masa sesaat sebelum penanda muncul.
