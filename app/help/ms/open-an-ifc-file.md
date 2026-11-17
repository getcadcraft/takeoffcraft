---
title: Bawa masuk kuantiti daripada fail IFC 4.3
summary: Buka fail IFC 4.3 jalan, landasan kereta api, jambatan atau kerja tanah dan dapatkan kiraan setiap kelas, dengan panjang, luas dan isipadu yang dinyatakan fail, sebagai kuantiti ditaip.
keywords: ifc, ifc4x3, ifc 4.3, jalan, landasan kereta api, jambatan, turapan, kerb, lapisan, kerja tanah, galas, infrastruktur, kuantiti, bim, awam, kuantiti ditaip
from: 6b08c2c4
---

Fail IFC 4.3 boleh memuatkan jalan, landasan kereta api, jambatan, kerja marin dan bahagian yang membentuknya: turapan, lapisan, kerb, rel, kerja tanah, galas, cerucuk dan banyak lagi. TakeoffCraft membacanya dan menukarkannya kepada kuantiti ditaip yang boleh anda harga.

## Buka fail

1. Pilih {{ui:Buka pelan}} dalam kumpulan {{ui:Fail}}, atau tekan {{key:Mod+O}}.
2. Pilih fail IFC (anda boleh memilihnya bersama PDF), atau lepaskannya pada TakeoffCraft.

Satu kuantiti ditaip dibuat untuk setiap kelas dan jenis yang telah ditetapkan, contohnya "Turapan (fleksibel): kiraan", dan, apabila fail menyatakannya, "panjang" dalam m, "luas" dalam m² dan "isipadu" dalam m³. Nota pada setiap item menyatakan berapa elemen dikira dan berapa yang tidak menyatakan kuantiti. Membuka fail yang lebih baharu dengan nama yang sama mengemas kini kuantiti tersebut dan tidak menambah lagi.

## Apa yang tidak dilakukannya

- Ia membaca set kuantiti (IfcElementQuantity) yang dibawa fail. Ia tidak mengukur bentuk 3D, jadi elemen tanpa set kuantiti dikira tetapi tidak menambah panjang, luas atau isipadu.
- Hanya kelas infrastruktur IFC 4.3 dibaca. Fail bangunan (dinding, pintu, papak) tidak ditukar kepada kuantiti di sini; fail yang bukan IFC 4.3 menyatakannya dan tidak membawa apa-apa.
- Unitnya ialah unit fail itu sendiri, ditukar kepada meter.
