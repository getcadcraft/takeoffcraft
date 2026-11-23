---
title: Saiz halaman dan nama kertas
summary: Lihat saiz setiap helaian dalam milimeter dan inci serta nama kertasnya (siri A dan B, C, ANSI, ARCH), dan kumpulkan set bercampur mengikut saiz untuk mencari helaian yang ganjil.
keywords: saiz halaman, saiz kertas, nama kertas, a0, a1, a2, a3, a4, siri b, siri c, ansi, arch, architectural, mm, inci, saiz tersuai, mengikut saiz, saiz ganjil, set bercampur, skala, set pelan, mediabox, putaran
from: 9c061c07
---

Skala hanya bermakna pada kertas yang betul. {{ui:TakeoffCraft}} membaca saiz setiap helaian PDF dan menamakan kertasnya, supaya anda dapat melihat helaian yang dicetak pada saiz berbeza sebelum anda mempercayai sebarang ukuran padanya.

## Apa yang akan anda lakukan

Lihat saiz helaian yang dibuka, kemudian kumpulkan keseluruhan set mengikut saiz.

## Langkah

1. Buka pelan ({{ui:Buka pelan}}).
2. Bar helaian di atas lukisan menunjukkan nama kertas helaian yang dibuka dan saiznya, contohnya "A1 · 594 × 841 mm".
3. Setiap baris dalam senarai {{ui:Helaian}} mempunyai baris saiz di bawah nama helaian.
4. Pilih {{ui:Mengikut saiz}} dalam pengepala {{ui:Helaian}}. Senarai mengumpulkan helaian di bawah satu pengepala bagi setiap saiz, kumpulan terbesar dahulu, dan menandakan saiz yang hanya mempunyai beberapa helaian sebagai ganjil.
5. Pilih {{ui:Mengikut saiz}} sekali lagi untuk kembali kepada susunan asal set.

Helaian DWG atau DXF tidak mempunyai kertas, jadi tiada saiz dipaparkan untuknya.

## Cara nama dipilih

- Saiz diambil daripada kotak halaman dalam PDF dengan putarannya diambil kira.
- Nama-namanya ialah siri A dan B (ISO 216), siri C (ISO 269), ANSI A hingga E dan ARCH A hingga E.
- Halaman dalam lingkungan 2 mm daripada saiz bernama mengambil nama itu. Mana-mana halaman lain dinamakan tersuai, dengan saiz bernama terdekat dan jaraknya.

## Dalam anggaran

Buku kerja anggaran mempunyai helaian kerja {{ui:Saiz halaman}} dengan kiraan bagi setiap saiz.

:::note
Nilai inci ANSI dan ARCH ditaip daripada jadual yang diterbitkan dan belum dibandingkan dengan piawaian yang dicetak.
:::
