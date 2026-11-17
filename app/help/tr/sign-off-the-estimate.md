---
title: Eksik birim fiyatlar ve keşfi onaylama
summary: Keşfin hangi satırlarında miktar olup birim fiyat olmadığını görün, keşfi adınızla onaylayın ki dosya kimin, ne zaman ve hangi toplamla onayladığını kaydetsin ve bir rakama tıklayarak ondan çıkan işaretleri seçin.
keywords: keşif, onay, onayla, onaylı, onaylama, birim fiyat eksik, birim fiyat yok, fiyatlandırılmamış, birim fiyat, toplam, metraj uzmanı, kayıt, denetim, işaret seç, rakam, izleme
from: 9acf71ef
---

## Ne yapacaksınız

Keşfin her satırının fiyatlandırıldığını kontrol edin, sonra adınızı altına koyun. Metraj dosyası, kimin, ne zaman ve hangi toplam için onayladığını kaydeder.

## Birim fiyatı olmayan satırlar

**{{ui:Quantities}} › {{ui:By item}}** bölümünde, miktarı olan ama malzeme ya da işçilik birim fiyatı olmayan bir satır **birim fiyat yok** etiketini taşır; tablonun üstündeki çubuk kaç tane olduğunu söyler. Böyle bir satır toplama bir şey eklemez. Kendi birim fiyatı olmayan bir kalem, bileşenlerinden biri fiyatlandırılmışsa işaretlenmez: bir birim maliyet, parçaları üzerinden fiyatlandırılır. Dışa aktarılan keşif, böyle her satırın Notlar sütununa **Birim fiyat yok** yazar ve bunları sayar.

## Keşfi onaylayın

1. Miktarlar tablosunun üstündeki **Keşfi onayla** düğmesine tıklayın.
2. İletişim kutusu, onayladığınız toplamı belirtir ve birim fiyatı olmayan satırları listeler. Adınızı ve isterseniz rolünüzü yazın.
3. **Onayla**'ya tıklayın. Çubuk artık toplamıyla birlikte "… tarafından … tarihinde onaylandı" yazar. Dosyada saklamak için metrajı kaydedin.

Onay, onayladığınız rakamlara aittir. Bir miktarda, birim fiyatta ya da satırda sonradan yapılan her değişiklik onayı siler ve TakeoffCraft bunu size söyler. Geri al, onayladığınız keşfi onayıyla birlikte geri getirir. Bir satırın adını değiştirmek rakam değişikliği değildir. **Onayı kaldır** onayı tamamen ortadan kaldırır.

Onaylandıktan sonra TakeoffCraft dışında düzenlenmiş bir metraj dosyası, onay olmadan ve bunu belirten bir notla açılır. Dışa aktarılan keşif (CSV ve XLSX), toplamların altında onayı adlandırır.

Yalnızca bir kişi onaylar. Bir yapay zekâ asistanı keşfin onaylı olup olmadığını ve hangi birim fiyatların eksik olduğunu okuyabilir; onaylayamaz.

## Nereden geldiğini görmek için bir rakama tıklayın

Bir satırın miktarına ya da tutarına tıklayın; ondan ölçülen işaretler seçilir. Başka bir sayfadaysa o sayfa açılır. **İş toplamı** satırındaki bir rakama tıklarsanız, o sayfadaki her işaret seçilir. Yazılmış bir miktarın işareti yoktur.

## İyi bilmeniz gerekenler

- Onay, yazıldığı gibi girilen adı bir kayıt olarak tutar. Dosyada bir kayıttır, elektronik imza değildir.
- Metrajda taşeronlara verilmiş ihale paketleri ya da alternatifler varsa, onaylanan toplam, **İş toplamı** olarak gösterilen temel tekliftir.
