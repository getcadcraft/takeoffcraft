---
title: Karbon terkandung dan jadual harga 5D
summary: Carbon menjumlahkan karbon terkandung pengukuran kuantiti daripada kuantiti setiap item dan jadual faktor terbuka, dan menghantar kadar pengukuran kuantiti ke BimCraft sebagai jadual harga untuk kos 5D.
keywords: karbon, karbon terkandung, kgco2e, co2, faktor, a1-a3, pengangkutan, pembaziran, 5d, jadual harga, kos, bimcraft, epd
from: f4bff3b8
---

{{ui:Carbon}} pada bar alat menjumlahkan karbon terkandung bagi apa yang telah anda ukur, dan menukar kadar anda kepada jadual harga yang boleh digunakan oleh model bangunan. Ia anggaran, bukan penilaian.

## Karbon terkandung

Kuantiti setiap item, dengan pembazirannya, didarab dengan satu baris jadual faktor. Baris dipadankan dengan perkataan nama item ("concrete slab" mencari baris dengan kata kunci concrete). Jadual ialah jadual terbuka yang sama yang digunakan BimCraft, jadi fail yang anda muatkan di sini berfungsi di sana. **Baris yang disertakan dengan program ialah nilai permulaan: generik, tidak disemak dan bukan daripada mana-mana pangkalan data.** Dialog menyatakannya di sebelah angka; gantikan dengan sumber anda sendiri sebelum anda bergantung pada sebarang nombor.

1. Pilih {{ui:Carbon}}. Item yang dikira disenaraikan dengan kilogram CO2e mereka; jumlahnya di atas.
2. Tanda {{ui:A4 transport}} atau {{ui:A5 site waste}} untuk mengira peringkat tersebut juga, bagi baris yang memberikan angka untuknya. Peringkat produk sentiasa dikira.
3. Untuk menggunakan baris lain bagi item, atau tiada, gunakan senarai pada barisnya.
4. {{ui:Factors from a file…}} memuatkan jadual faktor (JSON atau CSV) yang dibuat daripada sumber anda sendiri; barisnya menggantikan baris permulaan dengan id yang sama. {{ui:Factors (JSON)}} menyimpan milik anda.

Faktor ialah per meter, meter persegi, meter padu, item atau kilogram. Baris yang diukur dalam kaki atau kaki persegi ditukar. Faktor kilogram memerlukan isipadu (yard padu atau meter) dan ketumpatan baris itu. Item yang faktornya memerlukan kuantiti yang tidak diukurnya disenaraikan di bawah {{ui:Left out}} dengan sebabnya, tidak pernah diteka. Jumlah berjalan dalam bar status menunjukkan angka yang sama.

Baris faktor anda, pilihan anda dan peringkat yang anda kira disimpan dalam fail pengukuran kuantiti.

## Jadual harga untuk kos 5D

{{ui:5D prices (JSON)}} dan {{ui:5D prices (CSV)}} menyimpan kadar pengukuran kuantiti sebagai jadual harga: satu baris bagi setiap item yang dihargai, dengan kadar bahan dan upahnya setiap unit serta pembaziran. Muatkannya dalam anak tetingkap kos BimCraft (Embodied carbon and 5D cost) untuk menghargai tugasan model bangunan dengan kadar yang sama yang membuat bidaan. Item yang diukur dalam unit yang tiada dalam jadual, dan item tanpa kadar, ditinggalkan.

## Dengan pembantu anda

Jika anda membenarkan pembantu dalam Tetapan, mereka boleh membaca karbon (carbon_check). Memuatkan faktor ialah tugas anda.

## Perkara yang perlu diketahui

Tiada apa dihantar ke mana-mana. Angka hanya sebaik faktor yang anda muatkan.
