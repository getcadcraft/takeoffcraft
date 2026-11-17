---
title: Semak stok pembekal dan masa penghantaran
summary: Tambah senarai stok pembekal (CSV atau hamparan) dan TakeoffCraft menyemak apa yang diperlukan oleh pengukuran kuantiti, termasuk pembaziran, terhadapnya: cukup dalam stok, dan berapa lama tempoh menunggu. Kekurangan dan tempoh menunggu yang panjang ditunjukkan dalam panel Masalah.
keywords: pembekal, stok, dalam stok, masa penghantaran, ketersediaan, kekurangan, pesanan tertunggak, senarai pesanan, csv, sku, vendor, bahan, bekalan, masalah
from: f11160fb
---

{{ui:Supply}} pada bar alat (lori) menyemak apa yang diperlukan oleh pengukuran kuantiti anda terhadap senarai stok pembekal. Baris pembekal yang penting disimpan dalam fail milik pengukuran kuantiti itu. Tiada apa-apa dihantar ke mana-mana dan tiada apa-apa meminta pembekal: anda yang membawa failnya.

## Fail

Fail CSV dengan baris pengepala. Ia memerlukan lajur nama atau SKU serta lajur stok atau masa penghantaran. Pengepala berikut dikenali (sebarang susunan, sebarang huruf besar atau kecil): Item, Name, Description atau Product; SKU, Part atau Item #; In stock, On hand, Available atau Quantity; Lead time atau Delivery days; Unit atau UOM; Price atau Cost; Supplier atau Vendor.

- Stok boleh berupa nombor (1,200), "In stock" atau "Out of stock".
- Masa penghantaran boleh berupa "5 days", "2 weeks", "2-3 weeks" (yang lebih panjang digunakan), "3 months", "same day" atau "backorder". Nombor biasa adalah dalam unit pengepala (hari, melainkan pengepala menyatakan minggu atau bulan).
- Fail Excel tidak dibaca: simpan helaian sebagai CSV dahulu.

## Semak pengukuran kuantiti

1. Pilih {{ui:Supply}}, kemudian {{ui:Add a supplier file…}} dan pilih CSV. Tambah lebih daripada satu: sehingga lima fail, 2,000 baris disimpan keseluruhan, yang sepadan dengan item anda dahulu.
2. Setiap item, syarat kedua dan bahagian himpunan dengan kuantiti dipadankan dengan satu baris mengikut nama, atau mengikut SKU dalam namanya. Nama yang serupa (satu terkandung dalam yang lain) digunakan apabila tiada yang tepat, dan ia memberitahu anda tentang itu.
3. Di bawah {{ui:What the takeoff needs}}, yang kurang dahulu: "Kurang 120 EA", "Masa penghantaran 21 hari", "Pesanan tertunggak", "Unit berbeza", "Tiada angka stok" atau "Ada stok". Keperluan termasuk pembaziran. Unit pembekal yang bukan unit anggaran (tan berbanding kaki) dilaporkan dan tidak sekali-kali dibandingkan. Setiap baris mempunyai {{ui:Select the item}}, yang melompat ke item itu.
4. Tetapkan {{ui:Longest wait wanted (days)}} (lalai 14). Item yang tidak dalam stok dan menunggu lebih lama daripada itu ditandakan, dan ringkasan menamakan tempoh menunggu terpanjang yang penting.
5. {{ui:Order list (CSV)}} memuat turun item yang kurang beserta jumlah kekurangan, pembekal dan masa penghantaran. {{ui:Leave out}} mengeluarkan keperluan daripada semakan (ia ialah langkah buat asal).

## Fail hamparan dan Pustaka harga

Senarai pembekal boleh menjadi buku kerja Excel (.xlsx) serta CSV: helaian pertama dibaca, dengan nama lajur yang sama. Formula tidak sekali-kali dijalankan; nilai yang disimpan dalam fail itulah yang dibaca.

Selepas fail dengan harga ditambah, {{ui:Prices into the Library}} dalam kotak dialog menetapkan harga bahan bagi setiap entri [Pustaka](topic:price-library) yang fail itu hargakan: nama yang sama, dan unit yang sama (atau tidak dinyatakan). Buruh, pembaziran, ketinggian dan himpunan kekal seperti sediakala, dan nota entri menyatakan fail mana harga itu datang. Entri dalam meter tidak dihargakan daripada senarai dalam kaki, dan entri tanpa nama yang sepadan dibiarkan; baris status menyatakan berapa banyak yang dilangkau kerana unit. Harga semula daripada Pustaka untuk membawa harga baharu ke dalam pengukuran kuantiti ini.

## Dalam panel Masalah

Kekurangan ialah amaran dan tempoh menunggu yang panjang ialah nota, dalam panel Masalah yang dikongsi ("Stok pembekal"), supaya ia berada bersama semua semakan lain. Anda boleh menerimanya dengan sebab, dan penerimaan itu disimpan dalam pengukuran kuantiti.

## Dengan pembantu anda

Jika anda membenarkan pembantu dalam Tetapan, mereka boleh membaca semakan (supply_check). Menambah fail pembekal ialah tugas anda.

## Perlu diketahui

Angka stok hanya semasa seperti fail yang anda tambah. Tambah fail itu semula untuk menyegarkannya: fail dengan nama yang sama menggantikan yang terdahulu.
