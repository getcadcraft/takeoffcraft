---
title: İhale paketleri ve teklif dengeleme
summary: Tahmini mesleğe göre paketlere bölün, her paketin kapsamını taşeronlara gönderin, aynı kapsam üzerine gelen teklifleri karşılaştırın ve seçilen teklifi paketin fiyatı olarak kullanın.
keywords: teklif dengeleme, dengeleme, ihale paketi, taşeron, taşeron teklifi, kapsam, tamamlama, meslek, CSI bölümü, teklifleri karşılaştır, en düşük teklif, teklif tablosu, teklif veren, ödül, seçilen teklif, teklifi kullan, taşeron fiyatı
from: 856b3088
---

Genel yüklenici her mesleğin kapsamını taşeronlara gönderir ve geri gelenleri karşılaştırır. TakeoffCraft ikisini de metrajdan yapar: {{ui:Dışa aktar}} › {{ui:Teklif paketleri ve dengeleme…}} seçeneğini açın.

## Paketler

Kalemlerinizin kullandığı her CSI bölümü için bir paket vardır (bir kalemin {{ui:CSI numarası}}'nın ilk iki hanesi; bkz. [Metraj kalemleri oluşturma](topic:create-items)). Numarası olmayan kalemler kendi paketlerini oluşturur. Her paket kendi kalemlerini, işaretlerinin kaç sayfada olduğunu ve bizim maliyetini gösterir (temel tekliften; kârlar eklenmeden önce malzeme ve işçilik).

Bir taşerona göndermek için neyin gönderileceğini indirmek üzere {{ui:Kapsam CSV}} seçeneğini seçin: her kalem, CSI numarası, miktar, birim ve bulunduğu sayfalarla birlikte. Fiyat içermez. Malzeme tedarikçileri için çalışma kitabındaki teklif isteğinde parça listesi bulunur (bkz. [Keşfi dışa aktarma](topic:export-estimate)).

## Teklifleri girin

1. Paketin altındaki boş satıra teklif verenin adını ve teklif tutarını yazın, sonra {{ui:Teklifi ekle}} seçeneğini seçin.
2. Bir teklif kapsamın bir kısmını dışarıda bırakıyorsa, {{ui:Dışarıda bırakılan}} listesini açın ve bu kalemleri işaretleyin.
3. Bir adı ya da tutarı düzeltmek için tabloda üzerine yazın; × düğmesi bir teklifi kaldırır.

Her değişiklik {{key:Mod+Z}} ile geri alınan tek bir adımdır ve teklifler metrajla birlikte kaydedilir.

## Teklifler nasıl dengelenir

Teklifler nadiren aynı kapsamı kapsar. Dengeleme, dışarıda bırakılan her kalemi kendi maliyetimizle bir **tamamlama** ile doldurur; böylece her teklif tüm paket üzerinden karşılaştırılır:

**Dengelenmiş = teklif + tamamlamalar**

En düşük dengelenmiş teklif **Düşük** olarak işaretlenir; eşitlikte önce girilen. **Maliyetimize karşı**, dengelenmiş teklif eksi paketin kendi maliyetimizdir: negatif değer, altında olduğu anlamına gelir. Eksik kapsamı sayıldığında en düşük görünen bir teklif kaybedebilir.

Çalışma kitabına her teklifi olan her paketin yer aldığı bir **Teklif dengeleme** sayfası eklenir: bizim keşfimiz, her teklif, tamamlamaları, dengelenmiş toplam ve fark; hepsi canlı formüllerle ve her teklifin neyi dışarıda bıraktığı.

## Bir teklifi paketin fiyatı olarak kullanın

Bir teklifte {{ui:Kullan}} seçeneğini seçin; teklif, keşfinizdeki tüm paketin fiyatı olur. Paketin kendi fiyatlandırması (kalemleri, ikinci koşulları ve birim maliyet parçaları) iş toplamından düşer; kalemler kendi oranlarınızla başvuru için miktar olarak kalır ve **Seçilen teklif** adlı tek bir satır teklifin tutarını taşır. Teklifin dışarıda bıraktığı kalemler kendi maliyetinizde kalır; dengeleme zaten bunu tamamlama olarak saymıştı. Başka bir teklif seçin ya da aynısını yeniden seçerek geri alın; her biri {{key:Mod+Z}} ile geri alınabilen bir adımdır.

Teklif özetinde taşeron teklifleri maliyetin içinde tek bir satırdır: genel gider, kâr ve teminat, diğer her maliyet gibi onların üstüne eklenir; satış vergisi (yalnızca malzeme üzerinden) ve işçilik yükü (işçilik üzerinden) eklenmez. Çalışma kitabındaki Keşif sayfası seçilen teklifi kendi satırında taşır ve kâr oranları bloğu, canlı formüllerle onu ekler. Malzeme listesi, verilen paketin malzemesini dışarıda bırakır, çünkü taşeron onu sağlar.

Bir alternatifin ihale alanındaki bir paket yeniden fiyatlandırılmaz: alternatifler ve ihale alanı ara toplamları yine kendi fiyatlarınızı kullanır.

## E-postayla gelen teklifler

Teklifleri elle yazmanız gerekmez. Bir paketin altındaki {{ui:Teklif için gönder…}} her taşerona, her satır için bir fiyat yazacağı bir sayfanın bağlantısını e-postalar; {{ui:Fiyatları al}} gönderdiklerini bu tabloya çeker. Bkz. [Teklif için paket gönderme](topic:bid-invitations).

:::note
Teklifi elle girmek hâlâ çalışır; elle girilen teklif ile siteden gelen teklif yan yana durur. Siteden gelen teklifler **web** (ya da son teslim zamanından sonra geldilerse **web, geç**) olarak işaretlenir. Fiyatları yalnızca teklif veren yeni bir sürüm gönderdiğinde değişir; dolayısıyla sizin o teklife yaptığınız düzenlemeler o zamana kadar kalır.
:::
