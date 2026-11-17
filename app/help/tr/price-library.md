---
title: Fiyat kütüphanesi
summary: Kalemlerinizi, oranlarınızı ve birim maliyetlerinizi bir kütüphanede tutun; CSV'den ya da geçmiş bir keşiften içe aktarın, kütüphaneden herhangi bir metraja kalem ekleyin ve bir metrajın fiyatlarını ondan güncelleyin.
keywords: kütüphane, meslek paketleri, fiyat listesi, fiyat kitabı, maliyet veritabanı, csv içe aktar, oranlar, birim maliyetler, yeniden kullanım, şablon kalemleri, fiyatları güncelle, yeniden fiyatlandır
from: 37356c68
---

**Fiyat kütüphanesi**, her işte kullandığınız kalemleri tutar: türleri, birimleri, yükseklikleri, fireleri, malzeme ve işçilik oranları ve birim maliyetleri. Bu kütüphane, herhangi bir metraj dosyasından ayrı olarak bu tarayıcıda tutulur; böylece burada açtığınız her metraj onu kullanabilir.

{{ui:Kalemler}} panelinin üstündeki {{ui:Kütüphane}} ile açın.

## Kütüphaneyi doldurun

- {{ui:CSV içe aktar…}} bir CSV olarak kaydedilmiş bir elektronik tabloyu okur (aşağıdaki sütunlara bakın). Kütüphanede adı ve türü zaten olan kalemler değiştirilir; diğerleri eklenir. Okunamayan satırlar atlanır ve hangileri ile neden olduğunu söyler.
- {{ui:Bu metrajın kalemlerini ekle}} açık metrajın her kalemini, oranları ve birim maliyetiyle birlikte kütüphaneye kopyalar (işaretleri değil).
- TakeoffCraft'ın dışa aktardığı keşif CSV'si ([Keşfi dışa aktarma](topic:export-estimate)) olduğu gibi içe aktarılır: son işin fiyatları bir sonraki işe başlangıç olur.

- {{ui:Meslek paketleri…}} bir meslek için ücretsiz birim maliyetler ekler (alçıpan, elektrik ya da beton gibi), fiyat olmadan. Bkz. [Meslek paketleri](topic:trade-packs).

{{ui:CSV dışa aktar}} kütüphaneyi bir CSV olarak kaydeder: bir kopyasını tutmak, bir elektronik tabloda düzenlemek ya da bir meslektaşa vermek için. {{ui:Temizle}} onu boşaltır (iki kez tıklayın).

:::note
Kütüphane bu tarayıcının depolama alanında yaşar. Başka bir tarayıcının, başka bir bilgisayarın ya da gizli bir pencerenin kendi kütüphanesi vardır (ya da hiç yoktur). Taşımak için dışa aktarın.
:::

## Metrajda kullanın

- Kalemleri işaretleyin ({{ui:Kütüphanede ara}} alanına yazarak listeyi daraltın) ve {{ui:Metraja ekle}} seçeneğini seçin. Birim maliyetleriyle birlikte tek bir adımda eklenirler; bu adım {{key:Mod+Z}} ile geri alınabilir. Metrajda zaten olan bir ad `Halı (2)` gibi bir numara alır.
- {{ui:Fiyatları güncelle}}, adı ve türü bir kütüphane kalemiyle eşleşen her metraj kalemine kütüphanenin fire ve oranlarını verir; aynı adlı birim maliyet bileşenleri için de aynısını yapar. Yükseklikler, birimler ve formüller olduğu gibi kalır. Tek bir {{key:Mod+Z}} tüm eski fiyatları geri koyar.

## CSV sütunları

İlk satır sütunların adlarını verir, hangi sırada olduklarının önemi yoktur; diğer sütunlar yok sayılır.

| Sütun | Ne yazılır |
|---|---|
| Item (or Name) | Kalemin adı. Zorunlu. |
| Type | Linear, Area ya da Count (LF, SF ve EA da çalışır). Boş bırakılırsa birim belirler. |
| Unit | LF ya da m; SF, SY ya da m²; EA. Boşsa, türün olağan birimi. |
| Waste % | `10` ya da `10%`. |
| Material per unit, Labor per unit | `2.10` ya da `$1,250` gibi oranlar. |
| Height (or Depth) | `9'-0"`, `9` ya da metrik birimler için `2.7`. |
| Component, Formula | Bir Component adı (ya da Type `Component`) taşıyan satır, üstündeki kalemin birim maliyetinin parçasıdır. Birimi, fireleri ve oranları kendinedir; Formülü kalemin harflerini kullanır; bkz. [Birim maliyetler ve formüller](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Sütunlar arasında virgül, noktalı virgül ya da sekme; hepsi çalışır.
