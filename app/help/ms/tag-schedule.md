---
title: Bawa jadual tag masuk sebagai kuantiti
summary: Jadual tag yang dieksport daripada model bangunan (CSV) menjadi kuantiti bertaip dalam pengukuran kuantiti, satu untuk setiap tag, supaya kiraan dan luas model berada di sebelah apa yang anda ukur.
keywords: tag, jadual tag, model bangunan, bimcraft, ifc, kuantiti, csv, jadual, import, kuantiti bertaip
from: a60c19b6
---

{{ui:Tags}} pada bar alat membawa masuk jadual tag yang BimCraft simpan sebagai fail CSV. Setiap tag berbeza menjadi kuantiti bertaip, jenis yang sama seperti potongan dan tambakan CivilCraft.

1. Dalam BimCraft, buat jadual tag yang anda mahu dan simpannya sebagai CSV.
2. Pilih {{ui:Tags}} dan pilih fail.
3. Nyatakan lajur mana yang menamakan baris ({{ui:Name the line by}}, biasanya tag) dan lajur mana yang memegang nombor ({{ui:Quantity from}}). Dengan {{ui:Count the rows}} setiap baris dikira sebagai satu.
4. Pilih unit. Panjang dalam milimeter menjadi meter dengan {{ui:Multiply by}} 0.001.
5. {{ui:Add the quantities}}.

Baris dengan tag yang sama ditambah bersama. Sel yang bukan nombor ditinggalkan dan dikira dalam ringkasan. Membawa masuk jadual yang sama sekali lagi mengemas kini kuantiti yang sudah ada dan bukannya menambah lagi; nama, kadar dan pembaziran mereka kekal milik anda.

## Perlu diketahui

Kuantiti bertaip tidak diukur pada helaian, jadi ia tiada penanda. Tiada apa-apa dihantar ke mana-mana; fail dibaca di sini.
