---
title: Gömülü karbon ve 5D fiyat tablosu
summary: Karbon, her kalemin miktarından ve açık bir faktör tablosundan metrajın gömülü karbonunu toplar; oranlarınızı 5D maliyetler için BimCraft'a bir fiyat tablosu olarak gönderir.
keywords: karbon, gömülü karbon, kgco2e, co2, faktörler, A1-A3, taşıma, fire, 5d, fiyat tablosu, maliyet, bimcraft, EPD
from: f4bff3b8
---

Araç çubuğundaki {{ui:Karbon}}, ölçtüklerinizin gömülü karbonunu toplar ve oranlarınızı bina modelinin kullanabileceği bir fiyat tablosuna çevirir. Bu bir tahmindir, bir değerlendirme değildir.

## Gömülü karbon

Her kalemin miktarı, firesiyle birlikte, faktör tablosunun bir satırıyla çarpılır. Bir satır, kalemin adındaki kelimelerle eşleşir ("concrete slab" ifadesi, anahtar kelimesi concrete olan bir satırı bulur). Tablo, BimCraft'ın kullandığı açık tablonun aynısıdır; böylece burada yüklediğiniz bir dosya orada da çalışır. **Programla gelen satırlar başlangıç değerleridir: genel, doğrulanmamış ve hiçbir veritabanından değildir.** İletişim kutusu bunu rakamların yanında söyler; bir rakama güvenmeden önce kendi kaynağınızla değiştirin.

1. {{ui:Karbon}} seçeneğini seçin. Sayılan kalemler kilogram CO2e değerleriyle listelenir; toplam üstte görünür.
2. Bu aşamaları da saymak için, bir değer veren satırlar için {{ui:A4 taşıma}} ya da {{ui:A5 şantiye atığı}} kutusunu işaretleyin. Ürün aşaması her zaman sayılır.
3. Bir kalem için başka bir satır ya da hiçbir satır kullanmak için kalemin satırındaki listeyi kullanın.
4. {{ui:Dosyadan faktörler…}} kendi kaynağınızdan yapılmış bir faktör tablosunu (JSON ya da CSV) yükler; satırları aynı kimliğe sahip başlangıç satırlarının yerine geçer. {{ui:Faktörler (JSON)}} sizinkini kaydeder.

Bir faktör metre, metrekare, metreküp, kalem ya da kilogram başınadır. Fit ya da kare fit ile ölçülen bir satır dönüştürülür. Kilogram faktörü bir hacim (küp yarda ya da metre) ve satırın yoğunluğunu gerektirir. Faktörü için ölçmediği bir miktara ihtiyaç duyan kalemler, nedenleriyle birlikte {{ui:Dışarıda bırakılan}} altında listelenir; asla tahmin edilmez. Durum çubuğundaki çalışan toplam aynı rakamı gösterir.

Faktör satırlarınız, seçimleriniz ve saydığınız aşamalar metrajın dosyasında kaydedilir.

## 5D maliyetler için bir fiyat tablosu

{{ui:5D fiyatlar (JSON)}} ve {{ui:5D fiyatlar (CSV)}} metrajın oranlarını bir fiyat tablosu olarak kaydeder: fiyatlandırılmış her kalem için bir satır; birim başına malzeme ve işçilik oranı ve firesi. BimCraft'ın maliyet bölmesinde (Gömülü karbon ve 5D maliyet) yükleyin; böylece bina modelinin görevleri, teklifi oluşturan oranlarla fiyatlandırılır. Tablonun bulunmadığı bir birimde ölçülen kalemler ve oranı olmayan kalemler dışarıda bırakılır.

## Asistanınızla

Ayarlarda asistanlara izin verirseniz, karbonu okuyabilirler (carbon_check). Faktör yüklemek size aittir.

## Bilmeniz gerekenler

Hiçbir şey bir yere gönderilmez. Rakamlar yalnızca yüklediğiniz faktörler kadar iyidir.
