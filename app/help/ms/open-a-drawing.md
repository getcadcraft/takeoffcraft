---
title: Buka lukisan DWG atau DXF
summary: Buka fail lukisan sebagai helaian (ruang model dan setiap layout), mula dengan skala yang diberikan lukisan, tunjuk atau sembunyikan lapisannya, dan bawa masuk lukisan yang dipautkan.
keywords: dwg, dxf, cad, lukisan, buka lukisan, layout, ruang model, ruang kertas, helaian, unit, insunits, skala viewport, xref, lukisan dipautkan, lapisan, dibekukan, tiada pdf, plot, tanpa plot
from: d8c3f504
---

TakeoffCraft membuka lukisan DWG atau DXF seperti membuka PDF: anda tidak perlu memplotnya ke PDF dahulu. Pengiraan daripada lukisan itu sendiri adalah tepat, kerana lukisan tahu apa itu setiap objek. Lihat [Kira daripada lukisan](topic:count-from-a-drawing).

## Buka lukisan

1. Pilih {{ui:Buka pelan}} dalam kumpulan {{ui:Fail}}, atau tekan {{key:Mod+O}}.
2. Pilih fail DWG atau DXF. Anda boleh memilih beberapa fail, dan PDF bersamanya.
3. Pilih Buka.

Anda juga boleh lepaskan fail lukisan pada TakeoffCraft, seperti PDF. Tiada yang dimuat naik: pelayar membaca fail di komputer anda.

TakeoffCraft membaca DWG dari AutoCAD 2000 hingga 2018 dan DXF ASCII dari R12 hingga 2018. Ia menolak DXF perduaan (simpan sebagai ASCII, atau sebagai DWG) dan fail yang bukan kedua-duanya, dan menyatakan sebabnya. Fail yang rosak dibuka dengan apa yang dapat dibaca, dan mesej akan menyatakannya; kiraannya mungkin tidak lengkap.

## Helaian

- **Model** ialah ruang model lukisan.
- **Setiap layout** (tab ruang kertas) ialah helaian, dinamakan mengikut tabnya, mengikut susunan tab. Layout menunjukkan model melalui viewportnya, seperti yang diplot.

Zum, pan, snap ke garisan lukisan itu sendiri, tanda, nota, {{ui:Tentukur}} dan selebihnya berfungsi seperti pada PDF. Helaian lukisan disimpan dalam pengukuran kuantiti mengikut nama fail dan cap jari kandungannya, seperti PDF: buka semula fail yang sama dan tandanya ada pada helaiannya.

## Skala

Helaian bermula dengan skala yang diberikan lukisan:

- **Layout** mengambil skala viewport terbesarnya. Skala seperti 1/2" = 1'-0" dinamakan sebagai pratetap yang sepadan; apa-apa skala lain dipaparkan sebagai "Daripada viewport lukisan: 1" = 2.5'". Jika layout mempunyai viewport pada skala lain, yang terbesar menentukan skala helaian: semak yang lain dengan {{ui:Semak}}.
- **Model** mengambil unit lukisan (inci, milimeter, kaki…) sebagai skalanya, "Unit lukisan (inci)".
- **Lukisan tanpa unit** (lukisan yang tidak pernah menyatakan sama ada unit ialah inci atau milimeter) tiada skala: helaian menyatakan "Tiada skala", dan pengukuran padanya ditolak, seperti pada PDF tanpa skala. Pengiraan tidak memerlukan skala. Beri skala dengan {{ui:Tentukur}}.

{{ui:Tentukur}}, {{ui:Semak}} dan senarai {{ui:Pratetap}} menukar skala pada bila-bila masa dan mengatasi skala lukisan. Senarai pratetap dimatikan pada Model, yang tiada saiz kertas.

## Lapisan

{{ui:Lapisan}} pada bar helaian menyenaraikan lapisan lukisan dengan bilangan objek setiap satu pada helaian ini. Lapisan yang dimatikan atau dibekukan oleh fail bermula tersembunyi. Nyahtanda lapisan untuk menyembunyikannya, atau tandakan yang tersembunyi untuk memaparkannya: helaian dilukis semula, dan apa yang tersembunyi tidak dikira dan tidak dimasukkan dalam objek yang ditawarkan kepada {{ui:Ukur lukisan}}, melainkan anda meminta kiraan lapisan tersembunyi juga. {{ui:Tunjuk semua}} memaparkan setiap lapisan; {{ui:Kembali kepada lapisan fail}} membatalkan perubahan anda. Pilihan lapisan tergolong dalam sesi ini, bukan dalam fail pengukuran kuantiti.

## Lukisan dipautkan (xref)

Lukisan yang memautkan lukisan lain menunjukkannya di tempat ia dimasukkan. TakeoffCraft mencari lukisan dipautkan antara **fail yang dibuka**, mengikut nama failnya: buka lukisan hos dan lukisan dipautkannya bersama (atau satu selepas yang lain). Sehingga itu bar status menyatakan berapa lukisan dipautkan yang tidak dijumpai, apa yang hilang daripada lukisannya, dan kiraan menyatakannya.

## Had

- Objek yang TakeoffCraft tidak dapat baca atau letakkan (objek proksi, kelas yang tidak diketahui) disenaraikan dalam tetingkap kiraan mengikut jenis; ia tidak pernah digugurkan tanpa sebarang makluman.
- Lukisan yang sangat besar dilukis sebahagian, dan kiraan berhenti pada had, dengan menyatakannya. Buka plot PDF lukisan sebegitu.
- Lukisan dilukis dalam hitam dan dalam warnanya sendiri, digelapkan untuk kertas putih. Jadual gaya plot dan tugasan pen tidak digunakan.
