---
title: Isu, semakan dan log perubahan lukisan
summary: Kekalkan satu sejarah isu bersama model arkitek: baca isu masuk, rekod arahan tapak, lukisan bengkel dan model dipautkan terhadap satu isu, dan baca log perubahan lukisan.
keywords: isu, semakan, log perubahan, daftar lukisan, arahan tapak, lukisan bengkel, model dipautkan, tender, pembinaan, sejarah isu, Bil Kuantiti, takeoff
from: 8d8f6e68
---

## Apa yang anda akan lakukan

Bekerja daripada sejarah isu yang sama dengan pasukan yang lain. Lihat lembaran mana yang dikeluarkan pada semakan yang mana, dan kekalkan apa yang berlaku di tapak terhadap isu yang berkaitan.

## Langkah

1. Buka **Isu dan semakan**.
2. Pilih **Baca sejarah isu** dan pilih fail `.issues.json` yang disimpan daripada BimCraft atau aplikasi lain. Isu dan rekodnya ditambah ke sejarah anda. Tiada apa-apa yang diganti.
3. Pilih **Tambah rekod** untuk arahan tapak, lukisan bengkel, set markup, model dipautkan atau nota. Pilih isu yang ia berkaitan dan statusnya. Fail yang anda pilih direkodkan mengikut nama, saiz dan SHA-256; fail itu kekal di tempatnya.
4. **Log perubahan lukisan** menunjukkan satu baris bagi setiap lembaran dan satu lajur bagi setiap isu. Semakan dalam kurungan dikeluarkan semula tanpa perubahan.
5. **Muat turun log perubahan (CSV)** menyimpan isu, jadual lembaran dan rekod. **Simpan sejarah isu** menulis fail yang dibaca oleh aplikasi lain.

## Perkara yang perlu diketahui

- **Rekod isu** mengeluarkan lembaran yang anda ukur, contohnya dengan Bil Kuantiti. **Perubahan sejak** kemudian menunjukkan lembaran mana yang diukur semula selepas isu itu.
- Sejarah disimpan dalam fail takeoff. Setiap perubahan ialah satu {{ui:Buat asal}}.
- Membaca fail yang sama dua kali tidak menambah apa-apa dua kali. Apabila dua salinan mengandungi rekod yang sama, yang lebih baharu disimpan.
