---
title: Ukur larian linear
summary: Ambil dinding, paip, trim dan panjang lain sebagai larian, dengan segmen lurus, lengkok dan snap 45 darjah Shift.
keywords: linear, panjang, larian, polygaris, dinding, lf, kaki linear, lengkok, lengkung, 45 darjah, ortho, snap, segmen, polylength, tolak, bukaan, pintu, jurang, taip, ditaip, koordinat, jarak, jarak langsung, polar
from: c669deff
---

Item linear mengukur panjang. Setiap larian ialah rantaian titik: segmen lurus, dan lengkok apabila anda menghidupkan mod lengkok. Satu item boleh mempunyai bilangan larian yang tidak terhad pada bilangan lembaran yang tidak terhad.

Sebelum anda mula: lembaran memerlukan skala ([Tetapkan skala](topic:set-the-scale)) dan anda memerlukan item linear ([Cipta item takeoff](topic:create-items)).

Pada PDF vektor, klik anda akan snap ke garisan lukisan itu sendiri: hujung, titik tengah dan persilangan ([Snap ke garisan lukisan](topic:snap-to-the-drawing); {{key:F3}} mematikannya).

## Lukis satu larian

1. Klik item linear di bawah {{ui:Item}}.
2. Pilih {{ui:Linear}} pada bar alat, atau tekan {{key:L}}.
3. Klik permulaan larian.
4. Klik setiap sudut di sepanjangnya.
   Bar status memaparkan "Panjang" (larian setakat ini, ke penunjuk) dan "segmen" (segmen yang sedang anda lukis), dalam kaki dan inci.
5. Tamatkan larian: klik dua kali pada titik terakhir, tekan {{key:Enter}}, atau klik kanan.
   Larian dilukis dengan warna item dan menjadi tanda yang dipilih. Panjang item dalam senarai {{ui:Item}} dan jadual {{ui:Kuantiti}} bertambah.

Alat kekal pada {{ui:Linear}}, jadi anda boleh terus memulakan larian seterusnya. Tekan {{key:Esc}} untuk kembali ke {{ui:Pilih}}.

Semasa melukis:

- {{key:Backspace}} (atau {{key:Delete}}) mengalih keluar titik terakhir.
- {{key:Esc}} membuang larian yang belum siap.
- Menyeret untuk pan lembaran dan roda mengezum, tanpa menambah titik.

:::mac
Pada pad sentuh Mac, klik kanan ialah klik dua jari (hidupkan klik sekunder dalam Tetapan Sistem, di bawah Pad sentuh). TakeoffCraft hanya membaca butang sekunder, jadi klik Control mungkin diambil sebagai klik biasa dan menambah titik. Klik dua kali atau {{key:Enter}} sentiasa menamatkan.
:::

:::touch
Pada skrin sentuh, ketik untuk meletakkan titik, seret dengan satu jari untuk pan dan cubit dengan dua jari untuk zum. Tamatkan dengan tekan lama, ketik dua kali, atau {{ui:Tamat}} dalam bar di bawah lembaran ({{ui:Belakang}} mengambil kembali titik terakhir). Lihat [Penyelesaian masalah](topic:troubleshooting#touch-screens).
:::

## Garisan lurus pada langkah 45°

Tahan {{key:Shift}} semasa anda meletakkan titik. Segmen dari titik terakhir akan snap ke arah 0°, 45°, 90° atau 135° yang terdekat, dengan mengekalkan panjang yang anda seret di sepanjangnya. Bar status mengingatkan anda: "Shift snap ke 45°".

Dalam mod lengkok, ia terpakai pada tempat lengkok berakhir: kord lengkok berada pada langkah 45° dari tempat ia bermula. Titik yang anda klik pada lengkung tidak pernah di-snap.

## Lengkok dan dinding melengkung

1. Semasa melukis satu larian, letakkan titik di tempat lengkung bermula.
2. Hidupkan mod lengkok: pilih {{ui:Lengkok}} pada bar alat atau tekan {{key:R}}. Butang itu kekal ditekan.
3. Klik sebarang titik pada lengkung, di suatu tempat di tengahnya.
   Bar status menambah "(lengkok: klik di tempat ia berakhir)" dan pratonton melengkung melalui titik anda.
4. Klik di tempat lengkung berakhir.
   Lengkok ditambah. Panjangnya ialah panjang lengkok yang tepat, bukan rentetan kord pendek.
5. Klik titik lain pada lengkung seterusnya dan hujungnya untuk terus melukis lengkok, atau tekan {{key:R}} sekali lagi untuk kembali kepada segmen lurus.

{{key:Backspace}} atau {{key:Esc}} mula-mula membuang titik yang belum selesai pada lengkung; tekan sekali lagi untuk mengalih keluar titik seperti biasa.

## Taip panjang dan koordinat

Selepas titik pertama, anda boleh menaip di mana titik seterusnya pergi dan bukannya mengklik. Taip digit, `@` atau `#`: kotak {{ui:Taip}} dibuka pada bar status dengan apa yang anda taip. Tekan {{key:Enter}} untuk meletakkan titik; kotak kekal terbuka untuk yang seterusnya.

| Taip | Titik seterusnya pergi |
|---|---|
| `12'6"` | 12'-6" dari titik terakhir, ke arah penunjuk (tunjuk arahnya, kemudian taip panjangnya) |
| `12'6"<45` | 12'-6" pada 45°, dikira lawan arah jam dari kanan skrin (`<90` ialah ke atas, `<-90` ke bawah) |
| `@6',-4'` | 6' ke kanan dan 4' ke bawah dari titik terakhir |
| `6',4'` (atau `#6',4'`) | 6' ke kanan dan 4' ke atas dari titik pertama larian ini |

Panjang ditaip seperti di mana-mana dalam TakeoffCraft ([Format input](topic:entry-formats)): `12'-6 1/2"`, `12.5` (kaki), `30"`, `3.2 m`. "Kanan" dan "atas" mengikut apa yang anda lihat pada lembaran, juga apabila halaman PDF diputar.

{{key:Enter}} pada kotak kosong menamatkan larian, sama seperti {{key:Enter}} pada lembaran; {{key:Esc}} menutup kotak dan membiarkan larian diteruskan. Titik yang ditaip melalui peraturan yang sama seperti klik: tolakan, lengkok dan penutupan kawasan semuanya berfungsi. Kotak yang sama berfungsi dalam {{ui:Luas}} dan {{ui:Potongan}}; selepas pusat bulatan ia mengambil jejari.

## Tolak sebahagian daripada larian

Larian dinding yang melintasi pintu atau kedai hadapan boleh dilukis lurus merentasinya dan masih hanya mengira dinding: segmen merentasi bukaan ialah **tolakan**. Ia dilukis putus-putus dan nipis, dan tidak dikira.

Semasa melukis:

1. Letakkan titik di tempat bukaan bermula.
2. Pilih {{ui:Tolak}} pada bar alat atau tekan {{key:E}}. Butang itu kekal ditekan dan bar status menyatakan segmen seterusnya ialah tolakan.
3. Klik di tempat bukaan berakhir. Segmen itu dilukis putus-putus; "Panjang" dalam bar status meninggalkannya.
4. Tekan {{key:E}} sekali lagi dan teruskan sepanjang dinding.

Selepas melukis: pilih larian itu. Di bawah **Tanda dipilih**, setiap segmen mempunyai kotak {{ui:Tolak}}: tandakannya untuk menolak segmen itu, nyahtandakannya untuk mengirakannya semula. Setiap perubahan ialah satu langkah buat asal.

Satu larian sentiasa mengekalkan sekurang-kurangnya satu segmen yang dikira. Panel kemudian memaparkan **Tolakan** (panjang yang ditolak) dan **Dilukis** (keseluruhan larian); **Panjang**, kuantiti item, luas dinding dan kos semuanya menggunakan panjang tanpa tolakan. Paparan semakan 3D meninggalkan jurang pada dinding, PDF ditanda melukis tolakan secara putus-putus, dan helaian **Tanda** yang dieksport menyenaraikannya.

Mengalih sudut mengekalkan tolakan. Menambah atau mengalih keluar titik (dengan melukis semula larian) bermula tanpa tolakan.

## Lihat butiran larian

Pilih {{ui:Pilih}} ({{key:V}}) dan klik larian itu. **Tanda dipilih** di sebelah kanan memaparkan:

- item yang dimilikinya (pilih item linear lain dalam senarai untuk memindahkan larian ke sana),
- lembarannya,
- **Panjang** dalam kaki dan inci dan dalam LF,
- bilangan **Segmen**, dan **Luas dinding** apabila item mempunyai ketinggian,
- panjang setiap segmen, dengan "(lengkok)" selepas lengkok, dan kotak {{ui:Tolak}}nya.

Pada lembaran, setiap segmen larian yang dipilih dilabelkan dengan panjangnya.

## Betulkan larian

- **Alih titik**: pilih larian, kemudian seret salah satu pemegang sudut persegi. Tahan {{key:Shift}} untuk snap segmen yang dialih kepada langkah 45°. Lengkok mengekalkan bulge-nya.
- **Lentur lengkok**: larian yang dipilih memaparkan pemegang bulat di tengah setiap lengkok. Seretnya: lengkok melalui tempat anda melepaskannya, jadi ia melengkung lebih, kurang, atau ke arah lain. Jika diseret ke garisan lurus antara hujungnya, ia menjadi segmen lurus. {{key:Mod+Z}} membatalkannya ("Lentur lengkok").
- **Padam larian**: pilih dan tekan {{key:Delete}}, pilih {{ui:Padam}} pada bar alat dalam menu {{ui:Lagi}}, atau {{ui:Padam tanda}} dalam panel.
- **Buat asal**: {{key:Mod+Z}}; buat semula dengan {{key:Mod+Y}}.

Anda belum boleh memasukkan titik di tengah larian. Padam larian dan lukis semula.

## Luas dinding

Berikan item linear {{ui:Ketinggian}} (contohnya `9'-0"`). Ia kemudian melaporkan **Luas dinding (A)** = panjang × ketinggian, dalam SF (atau m² untuk item metrik), dan luas dinding masuk ke lajur nota dalam eksport hamparan. Gunakannya dalam himpunan untuk papan, cat atau penebat: lihat [Himpunan dan formula](topic:assemblies).
